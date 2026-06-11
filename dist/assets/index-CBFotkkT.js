(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function eM(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sv={exports:{}},af={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nM=Symbol.for("react.transitional.element"),iM=Symbol.for("react.fragment");function rv(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:nM,type:e,key:i,ref:t!==void 0?t:null,props:n}}af.Fragment=iM;af.jsx=rv;af.jsxs=rv;sv.exports=af;var Z=sv.exports,ov={exports:{}},Zt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp=Symbol.for("react.transitional.element"),aM=Symbol.for("react.portal"),sM=Symbol.for("react.fragment"),rM=Symbol.for("react.strict_mode"),oM=Symbol.for("react.profiler"),lM=Symbol.for("react.consumer"),cM=Symbol.for("react.context"),uM=Symbol.for("react.forward_ref"),fM=Symbol.for("react.suspense"),hM=Symbol.for("react.memo"),lv=Symbol.for("react.lazy"),dM=Symbol.for("react.activity"),S0=Symbol.iterator;function pM(e){return e===null||typeof e!="object"?null:(e=S0&&e[S0]||e["@@iterator"],typeof e=="function"?e:null)}var cv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uv=Object.assign,fv={};function vo(e,t,n){this.props=e,this.context=t,this.refs=fv,this.updater=n||cv}vo.prototype.isReactComponent={};vo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hv(){}hv.prototype=vo.prototype;function jp(e,t,n){this.props=e,this.context=t,this.refs=fv,this.updater=n||cv}var Zp=jp.prototype=new hv;Zp.constructor=jp;uv(Zp,vo.prototype);Zp.isPureReactComponent=!0;var y0=Array.isArray;function nd(){}var Fe={H:null,A:null,T:null,S:null},dv=Object.prototype.hasOwnProperty;function Kp(e,t,n){var i=n.ref;return{$$typeof:Yp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function mM(e,t){return Kp(e.type,t,e.props)}function Qp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yp}function gM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var M0=/\/+/g;function Df(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gM(""+e.key):t.toString(36)}function _M(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(nd,nd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Cr(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Yp:case aM:r=!0;break;case lv:return r=e._init,Cr(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+Df(e,0):i,y0(a)?(n="",r!=null&&(n=r.replace(M0,"$&/")+"/"),Cr(a,t,n,"",function(c){return c})):a!=null&&(Qp(a)&&(a=mM(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(M0,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(y0(e))for(var l=0;l<e.length;l++)i=e[l],s=o+Df(i,l),r+=Cr(i,t,n,s,a);else if(l=pM(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+Df(i,l++),r+=Cr(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return Cr(_M(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function tc(e,t,n){if(e==null)return e;var i=[],a=0;return Cr(e,i,"","",function(s){return t.call(n,s,a++)}),i}function vM(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var b0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xM={map:tc,forEach:function(e,t,n){tc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tc(e,function(){t++}),t},toArray:function(e){return tc(e,function(t){return t})||[]},only:function(e){if(!Qp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Zt.Activity=dM;Zt.Children=xM;Zt.Component=vo;Zt.Fragment=sM;Zt.Profiler=oM;Zt.PureComponent=jp;Zt.StrictMode=rM;Zt.Suspense=fM;Zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Fe;Zt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Fe.H.useMemoCache(e)}};Zt.cache=function(e){return function(){return e.apply(null,arguments)}};Zt.cacheSignal=function(){return null};Zt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=uv({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!dv.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Kp(e.type,a,i)};Zt.createContext=function(e){return e={$$typeof:cM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:lM,_context:e},e};Zt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)dv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Kp(e,s,a)};Zt.createRef=function(){return{current:null}};Zt.forwardRef=function(e){return{$$typeof:uM,render:e}};Zt.isValidElement=Qp;Zt.lazy=function(e){return{$$typeof:lv,_payload:{_status:-1,_result:e},_init:vM}};Zt.memo=function(e,t){return{$$typeof:hM,type:e,compare:t===void 0?null:t}};Zt.startTransition=function(e){var t=Fe.T,n={};Fe.T=n;try{var i=e(),a=Fe.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(nd,b0)}catch(s){b0(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Fe.T=t}};Zt.unstable_useCacheRefresh=function(){return Fe.H.useCacheRefresh()};Zt.use=function(e){return Fe.H.use(e)};Zt.useActionState=function(e,t,n){return Fe.H.useActionState(e,t,n)};Zt.useCallback=function(e,t){return Fe.H.useCallback(e,t)};Zt.useContext=function(e){return Fe.H.useContext(e)};Zt.useDebugValue=function(){};Zt.useDeferredValue=function(e,t){return Fe.H.useDeferredValue(e,t)};Zt.useEffect=function(e,t){return Fe.H.useEffect(e,t)};Zt.useEffectEvent=function(e){return Fe.H.useEffectEvent(e)};Zt.useId=function(){return Fe.H.useId()};Zt.useImperativeHandle=function(e,t,n){return Fe.H.useImperativeHandle(e,t,n)};Zt.useInsertionEffect=function(e,t){return Fe.H.useInsertionEffect(e,t)};Zt.useLayoutEffect=function(e,t){return Fe.H.useLayoutEffect(e,t)};Zt.useMemo=function(e,t){return Fe.H.useMemo(e,t)};Zt.useOptimistic=function(e,t){return Fe.H.useOptimistic(e,t)};Zt.useReducer=function(e,t,n){return Fe.H.useReducer(e,t,n)};Zt.useRef=function(e){return Fe.H.useRef(e)};Zt.useState=function(e){return Fe.H.useState(e)};Zt.useSyncExternalStore=function(e,t,n){return Fe.H.useSyncExternalStore(e,t,n)};Zt.useTransition=function(){return Fe.H.useTransition()};Zt.version="19.2.5";ov.exports=Zt;var Re=ov.exports,pv={exports:{}},sf={},mv={exports:{}},gv={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,L){var k=C.length;C.push(L);t:for(;0<k;){var K=k-1>>>1,rt=C[K];if(0<a(rt,L))C[K]=L,C[k]=rt,k=K;else break t}}function n(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var L=C[0],k=C.pop();if(k!==L){C[0]=k;t:for(var K=0,rt=C.length,Tt=rt>>>1;K<Tt;){var Ct=2*(K+1)-1,Xt=C[Ct],Wt=Ct+1,Pt=C[Wt];if(0>a(Xt,k))Wt<rt&&0>a(Pt,Xt)?(C[K]=Pt,C[Wt]=k,K=Wt):(C[K]=Xt,C[Ct]=k,K=Ct);else if(Wt<rt&&0>a(Pt,k))C[K]=Pt,C[Wt]=k,K=Wt;else break t}}return L}function a(C,L){var k=C.sortIndex-L.sortIndex;return k!==0?k:C.id-L.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],h=1,d=null,u=3,p=!1,_=!1,M=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;function S(C){for(var L=n(c);L!==null;){if(L.callback===null)i(c);else if(L.startTime<=C)i(c),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(c)}}function w(C){if(M=!1,S(C),!_)if(n(l)!==null)_=!0,T||(T=!0,I());else{var L=n(c);L!==null&&B(w,L.startTime-C)}}var T=!1,R=-1,x=5,A=-1;function U(){return g?!0:!(e.unstable_now()-A<x)}function D(){if(g=!1,T){var C=e.unstable_now();A=C;var L=!0;try{t:{_=!1,M&&(M=!1,m(R),R=-1),p=!0;var k=u;try{e:{for(S(C),d=n(l);d!==null&&!(d.expirationTime>C&&U());){var K=d.callback;if(typeof K=="function"){d.callback=null,u=d.priorityLevel;var rt=K(d.expirationTime<=C);if(C=e.unstable_now(),typeof rt=="function"){d.callback=rt,S(C),L=!0;break e}d===n(l)&&i(l),S(C)}else i(l);d=n(l)}if(d!==null)L=!0;else{var Tt=n(c);Tt!==null&&B(w,Tt.startTime-C),L=!1}}break t}finally{d=null,u=k,p=!1}L=void 0}}finally{L?I():T=!1}}}var I;if(typeof v=="function")I=function(){v(D)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,Q=q.port2;q.port1.onmessage=D,I=function(){Q.postMessage(null)}}else I=function(){f(D,0)};function B(C,L){R=f(function(){C(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_next=function(C){switch(u){case 1:case 2:case 3:var L=3;break;default:L=u}var k=u;u=L;try{return C()}finally{u=k}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var k=u;u=C;try{return L()}finally{u=k}},e.unstable_scheduleCallback=function(C,L,k){var K=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?K+k:K):k=K,C){case 1:var rt=-1;break;case 2:rt=250;break;case 5:rt=1073741823;break;case 4:rt=1e4;break;default:rt=5e3}return rt=k+rt,C={id:h++,callback:L,priorityLevel:C,startTime:k,expirationTime:rt,sortIndex:-1},k>K?(C.sortIndex=k,t(c,C),n(l)===null&&C===n(c)&&(M?(m(R),R=-1):M=!0,B(w,k-K))):(C.sortIndex=rt,t(l,C),_||p||(_=!0,T||(T=!0,I()))),C},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(C){var L=u;return function(){var k=u;u=L;try{return C.apply(this,arguments)}finally{u=k}}}})(gv);mv.exports=gv;var SM=mv.exports,_v={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yM=Re;function vv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Na(){}var Pn={d:{f:Na,r:function(){throw Error(vv(522))},D:Na,C:Na,L:Na,m:Na,X:Na,S:Na,M:Na},p:0,findDOMNode:null},MM=Symbol.for("react.portal");function bM(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:MM,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var nl=yM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function rf(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Pn;Fn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(vv(299));return bM(e,t,null,n)};Fn.flushSync=function(e){var t=nl.T,n=Pn.p;try{if(nl.T=null,Pn.p=2,e)return e()}finally{nl.T=t,Pn.p=n,Pn.d.f()}};Fn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Pn.d.C(e,t))};Fn.prefetchDNS=function(e){typeof e=="string"&&Pn.d.D(e)};Fn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=rf(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Pn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&Pn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Fn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=rf(t.as,t.crossOrigin);Pn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Pn.d.M(e)};Fn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=rf(n,t.crossOrigin);Pn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Fn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=rf(t.as,t.crossOrigin);Pn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Pn.d.m(e)};Fn.requestFormReset=function(e){Pn.d.r(e)};Fn.unstable_batchedUpdates=function(e,t){return e(t)};Fn.useFormState=function(e,t,n){return nl.H.useFormState(e,t,n)};Fn.useFormStatus=function(){return nl.H.useHostTransitionStatus()};Fn.version="19.2.5";function xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xv)}catch(e){console.error(e)}}xv(),_v.exports=Fn;var EM=_v.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rn=SM,Sv=Re,TM=EM;function $(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function yv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Mv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E0(e){if(Fl(e)!==e)throw Error($(188))}function AM(e){var t=e.alternate;if(!t){if(t=Fl(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return E0(a),e;if(s===i)return E0(a),t;s=s.sibling}throw Error($(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error($(189))}}if(n.alternate!==i)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function Ev(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Ev(e),t!==null)return t;e=e.sibling}return null}var ze=Object.assign,RM=Symbol.for("react.element"),ec=Symbol.for("react.transitional.element"),jo=Symbol.for("react.portal"),Lr=Symbol.for("react.fragment"),Tv=Symbol.for("react.strict_mode"),id=Symbol.for("react.profiler"),Av=Symbol.for("react.consumer"),fa=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),ad=Symbol.for("react.suspense"),sd=Symbol.for("react.suspense_list"),$p=Symbol.for("react.memo"),Ga=Symbol.for("react.lazy"),rd=Symbol.for("react.activity"),wM=Symbol.for("react.memo_cache_sentinel"),T0=Symbol.iterator;function Do(e){return e===null||typeof e!="object"?null:(e=T0&&e[T0]||e["@@iterator"],typeof e=="function"?e:null)}var CM=Symbol.for("react.client.reference");function od(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===CM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lr:return"Fragment";case id:return"Profiler";case Tv:return"StrictMode";case ad:return"Suspense";case sd:return"SuspenseList";case rd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case jo:return"Portal";case fa:return e.displayName||"Context";case Av:return(e._context.displayName||"Context")+".Consumer";case Jp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $p:return t=e.displayName||null,t!==null?t:od(e.type)||"Memo";case Ga:t=e._payload,e=e._init;try{return od(e(t))}catch{}}return null}var Zo=Array.isArray,Gt=Sv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge=TM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ps={pending:!1,data:null,method:null,action:null},ld=[],Nr=-1;function Ki(e){return{current:e}}function mn(e){0>Nr||(e.current=ld[Nr],ld[Nr]=null,Nr--)}function Ne(e,t){Nr++,ld[Nr]=e.current,e.current=t}var qi=Ki(null),xl=Ki(null),ts=Ki(null),mu=Ki(null);function gu(e,t){switch(Ne(ts,t),Ne(xl,e),Ne(qi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ug(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ug(t),e=qS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}mn(qi),Ne(qi,e)}function eo(){mn(qi),mn(xl),mn(ts)}function cd(e){e.memoizedState!==null&&Ne(mu,e);var t=qi.current,n=qS(t,e.type);t!==n&&(Ne(xl,e),Ne(qi,n))}function _u(e){xl.current===e&&(mn(qi),mn(xl)),mu.current===e&&(mn(mu),Dl._currentValue=Ps)}var Uf,A0;function As(e){if(Uf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Uf=t&&t[1]||"",A0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Uf+e+A0}var Lf=!1;function Nf(e,t){if(!e||Lf)return"";Lf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var u=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){u=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){u=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&u&&typeof p.stack=="string")return[p.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{Lf=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?As(n):""}function DM(e,t){switch(e.tag){case 26:case 27:case 5:return As(e.type);case 16:return As("Lazy");case 13:return e.child!==t&&t!==null?As("Suspense Fallback"):As("Suspense");case 19:return As("SuspenseList");case 0:case 15:return Nf(e.type,!1);case 11:return Nf(e.type.render,!1);case 1:return Nf(e.type,!0);case 31:return As("Activity");default:return""}}function R0(e){try{var t="",n=null;do t+=DM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ud=Object.prototype.hasOwnProperty,tm=rn.unstable_scheduleCallback,Of=rn.unstable_cancelCallback,UM=rn.unstable_shouldYield,LM=rn.unstable_requestPaint,ii=rn.unstable_now,NM=rn.unstable_getCurrentPriorityLevel,Rv=rn.unstable_ImmediatePriority,wv=rn.unstable_UserBlockingPriority,vu=rn.unstable_NormalPriority,OM=rn.unstable_LowPriority,Cv=rn.unstable_IdlePriority,PM=rn.log,BM=rn.unstable_setDisableYieldValue,Il=null,ai=null;function ja(e){if(typeof PM=="function"&&BM(e),ai&&typeof ai.setStrictMode=="function")try{ai.setStrictMode(Il,e)}catch{}}var si=Math.clz32?Math.clz32:zM,FM=Math.log,IM=Math.LN2;function zM(e){return e>>>=0,e===0?32:31-(FM(e)/IM|0)|0}var nc=256,ic=262144,ac=4194304;function Rs(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function of(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=Rs(i):(r&=o,r!==0?a=Rs(r):n||(n=o&~e,n!==0&&(a=Rs(n))))):(o=i&~s,o!==0?a=Rs(o):r!==0?a=Rs(r):n||(n=i&~e,n!==0&&(a=Rs(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function zl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function GM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dv(){var e=ac;return ac<<=1,!(ac&62914560)&&(ac=4194304),e}function Pf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function HM(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-si(n),d=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var p=u[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Uv(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function Uv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-si(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Lv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-si(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Nv(e,t){var n=t&-t;return n=n&42?1:em(n),n&(e.suspendedLanes|t)?0:n}function em(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nm(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Ov(){var e=ge.p;return e!==0?e:(e=window.event,e===void 0?32:iy(e.type))}function w0(e,t){var n=ge.p;try{return ge.p=e,t()}finally{ge.p=n}}var gs=Math.random().toString(36).slice(2),vn="__reactFiber$"+gs,Xn="__reactProps$"+gs,xo="__reactContainer$"+gs,fd="__reactEvents$"+gs,VM="__reactListeners$"+gs,kM="__reactHandles$"+gs,C0="__reactResources$"+gs,Hl="__reactMarker$"+gs;function im(e){delete e[vn],delete e[Xn],delete e[fd],delete e[VM],delete e[kM]}function Or(e){var t=e[vn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xo]||n[vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bg(e);e!==null;){if(n=e[vn])return n;e=Bg(e)}return t}e=n,n=e.parentNode}return null}function So(e){if(e=e[vn]||e[xo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ko(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error($(33))}function qr(e){var t=e[C0];return t||(t=e[C0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pn(e){e[Hl]=!0}var Pv=new Set,Bv={};function js(e,t){no(e,t),no(e+"Capture",t)}function no(e,t){for(Bv[e]=t,e=0;e<t.length;e++)Pv.add(t[e])}var XM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),D0={},U0={};function WM(e){return ud.call(U0,e)?!0:ud.call(D0,e)?!1:XM.test(e)?U0[e]=!0:(D0[e]=!0,!1)}function qc(e,t,n){if(WM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function sc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ji(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function mi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hd(e){if(!e._valueTracker){var t=Fv(e)?"checked":"value";e._valueTracker=qM(e,t,""+e[t])}}function Iv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Fv(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function xu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var YM=/[\n"\\]/g;function vi(e){return e.replace(YM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function dd(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+mi(t)):e.value!==""+mi(t)&&(e.value=""+mi(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?pd(e,r,mi(t)):n!=null?pd(e,r,mi(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+mi(o):e.removeAttribute("name")}function zv(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){hd(e);return}n=n!=null?""+mi(n):"",t=t!=null?""+mi(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),hd(e)}function pd(e,t,n){t==="number"&&xu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Yr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+mi(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Gv(e,t,n){if(t!=null&&(t=""+mi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+mi(n):""}function Hv(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error($(92));if(Zo(i)){if(1<i.length)throw Error($(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=mi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),hd(e)}function io(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function L0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||jM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Vv(e,t,n){if(t!=null&&typeof t!="object")throw Error($(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&L0(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&L0(e,s,t[s])}function am(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ZM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),KM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yc(e){return KM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ha(){}var md=null;function sm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,jr=null;function N0(e){var t=So(e);if(t&&(e=t.stateNode)){var n=e[Xn]||null;t:switch(e=t.stateNode,t.type){case"input":if(dd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+vi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Xn]||null;if(!a)throw Error($(90));dd(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Iv(i)}break t;case"textarea":Gv(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Yr(e,!!n.multiple,t,!1)}}}var Bf=!1;function kv(e,t,n){if(Bf)return e(t,n);Bf=!0;try{var i=e(t);return i}finally{if(Bf=!1,(Pr!==null||jr!==null)&&(xf(),Pr&&(t=Pr,e=jr,jr=Pr=null,N0(t),e)))for(t=0;t<e.length;t++)N0(e[t])}}function Sl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Xn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var Ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gd=!1;if(Ma)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){gd=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{gd=!1}var Za=null,rm=null,jc=null;function Xv(){if(jc)return jc;var e,t=rm,n=t.length,i,a="value"in Za?Za.value:Za.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return jc=a.slice(e,1<i?1-i:void 0)}function Zc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rc(){return!0}function O0(){return!1}function Wn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rc:O0,this.isPropagationStopped=O0,this}return ze(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rc)},persist:function(){},isPersistent:rc}),t}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=Wn(Zs),Vl=ze({},Zs,{view:0,detail:0}),QM=Wn(Vl),Ff,If,Lo,cf=ze({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:om,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lo&&(Lo&&e.type==="mousemove"?(Ff=e.screenX-Lo.screenX,If=e.screenY-Lo.screenY):If=Ff=0,Lo=e),Ff)},movementY:function(e){return"movementY"in e?e.movementY:If}}),P0=Wn(cf),JM=ze({},cf,{dataTransfer:0}),$M=Wn(JM),tb=ze({},Vl,{relatedTarget:0}),zf=Wn(tb),eb=ze({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),nb=Wn(eb),ib=ze({},Zs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ab=Wn(ib),sb=ze({},Zs,{data:0}),B0=Wn(sb),rb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ob={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lb[e])?!!t[e]:!1}function om(){return cb}var ub=ze({},Vl,{key:function(e){if(e.key){var t=rb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ob[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:om,charCode:function(e){return e.type==="keypress"?Zc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fb=Wn(ub),hb=ze({},cf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),F0=Wn(hb),db=ze({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:om}),pb=Wn(db),mb=ze({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),gb=Wn(mb),_b=ze({},cf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vb=Wn(_b),xb=ze({},Zs,{newState:0,oldState:0}),Sb=Wn(xb),yb=[9,13,27,32],lm=Ma&&"CompositionEvent"in window,il=null;Ma&&"documentMode"in document&&(il=document.documentMode);var Mb=Ma&&"TextEvent"in window&&!il,Wv=Ma&&(!lm||il&&8<il&&11>=il),I0=" ",z0=!1;function qv(e,t){switch(e){case"keyup":return yb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function bb(e,t){switch(e){case"compositionend":return Yv(t);case"keypress":return t.which!==32?null:(z0=!0,I0);case"textInput":return e=t.data,e===I0&&z0?null:e;default:return null}}function Eb(e,t){if(Br)return e==="compositionend"||!lm&&qv(e,t)?(e=Xv(),jc=rm=Za=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wv&&t.locale!=="ko"?null:t.data;default:return null}}var Tb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function G0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tb[e.type]:t==="textarea"}function jv(e,t,n,i){Pr?jr?jr.push(i):jr=[i]:Pr=i,t=Fu(t,"onChange"),0<t.length&&(n=new lf("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var al=null,yl=null;function Ab(e){kS(e,0)}function uf(e){var t=Ko(e);if(Iv(t))return e}function H0(e,t){if(e==="change")return t}var Zv=!1;if(Ma){var Gf;if(Ma){var Hf="oninput"in document;if(!Hf){var V0=document.createElement("div");V0.setAttribute("oninput","return;"),Hf=typeof V0.oninput=="function"}Gf=Hf}else Gf=!1;Zv=Gf&&(!document.documentMode||9<document.documentMode)}function k0(){al&&(al.detachEvent("onpropertychange",Kv),yl=al=null)}function Kv(e){if(e.propertyName==="value"&&uf(yl)){var t=[];jv(t,yl,e,sm(e)),kv(Ab,t)}}function Rb(e,t,n){e==="focusin"?(k0(),al=t,yl=n,al.attachEvent("onpropertychange",Kv)):e==="focusout"&&k0()}function wb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uf(yl)}function Cb(e,t){if(e==="click")return uf(t)}function Db(e,t){if(e==="input"||e==="change")return uf(t)}function Ub(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var oi=typeof Object.is=="function"?Object.is:Ub;function Ml(e,t){if(oi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!ud.call(t,a)||!oi(e[a],t[a]))return!1}return!0}function X0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function W0(e,t){var n=X0(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=X0(n)}}function Qv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jv(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=xu(e.document)}return t}function cm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Lb=Ma&&"documentMode"in document&&11>=document.documentMode,Fr=null,_d=null,sl=null,vd=!1;function q0(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vd||Fr==null||Fr!==xu(i)||(i=Fr,"selectionStart"in i&&cm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),sl&&Ml(sl,i)||(sl=i,i=Fu(_d,"onSelect"),0<i.length&&(t=new lf("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Fr)))}function xs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ir={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},Vf={},$v={};Ma&&($v=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function Ks(e){if(Vf[e])return Vf[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $v)return Vf[e]=t[n];return e}var tx=Ks("animationend"),ex=Ks("animationiteration"),nx=Ks("animationstart"),Nb=Ks("transitionrun"),Ob=Ks("transitionstart"),Pb=Ks("transitioncancel"),ix=Ks("transitionend"),ax=new Map,xd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xd.push("scrollEnd");function Pi(e,t){ax.set(e,t),js(t,[e])}var Su=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],zr=0,um=0;function ff(){for(var e=zr,t=um=zr=0;t<e;){var n=di[t];di[t++]=null;var i=di[t];di[t++]=null;var a=di[t];di[t++]=null;var s=di[t];if(di[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&sx(n,a,s)}}function hf(e,t,n,i){di[zr++]=e,di[zr++]=t,di[zr++]=n,di[zr++]=i,um|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function fm(e,t,n,i){return hf(e,t,n,i),yu(e)}function Qs(e,t){return hf(e,null,null,t),yu(e)}function sx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-si(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function yu(e){if(50<pl)throw pl=0,Gd=null,Error($(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Gr={};function Bb(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,t,n,i){return new Bb(e,t,n,i)}function hm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,t){var n=e.alternate;return n===null?(n=ti(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function rx(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")hm(e)&&(r=1);else if(typeof e=="string")r=HE(e,n,qi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case rd:return e=ti(31,n,t,a),e.elementType=rd,e.lanes=s,e;case Lr:return Bs(n.children,a,s,t);case Tv:r=8,a|=24;break;case id:return e=ti(12,n,t,a|2),e.elementType=id,e.lanes=s,e;case ad:return e=ti(13,n,t,a),e.elementType=ad,e.lanes=s,e;case sd:return e=ti(19,n,t,a),e.elementType=sd,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fa:r=10;break t;case Av:r=9;break t;case Jp:r=11;break t;case $p:r=14;break t;case Ga:r=16,i=null;break t}r=29,n=Error($(130,e===null?"null":typeof e,"")),i=null}return t=ti(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function Bs(e,t,n,i){return e=ti(7,e,i,t),e.lanes=n,e}function kf(e,t,n){return e=ti(6,e,null,t),e.lanes=n,e}function ox(e){var t=ti(18,null,null,0);return t.stateNode=e,t}function Xf(e,t,n){return t=ti(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Y0=new WeakMap;function xi(e,t){if(typeof e=="object"&&e!==null){var n=Y0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:R0(t)},Y0.set(e,t),t)}return{value:e,source:t,stack:R0(t)}}var Hr=[],Vr=0,Mu=null,bl=0,gi=[],_i=0,us=null,Hi=1,Vi="";function la(e,t){Hr[Vr++]=bl,Hr[Vr++]=Mu,Mu=e,bl=t}function lx(e,t,n){gi[_i++]=Hi,gi[_i++]=Vi,gi[_i++]=us,us=e;var i=Hi;e=Vi;var a=32-si(i)-1;i&=~(1<<a),n+=1;var s=32-si(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Hi=1<<32-si(t)+a|n<<a|i,Vi=s+e}else Hi=1<<s|n<<a|i,Vi=e}function dm(e){e.return!==null&&(la(e,1),lx(e,1,0))}function pm(e){for(;e===Mu;)Mu=Hr[--Vr],Hr[Vr]=null,bl=Hr[--Vr],Hr[Vr]=null;for(;e===us;)us=gi[--_i],gi[_i]=null,Vi=gi[--_i],gi[_i]=null,Hi=gi[--_i],gi[_i]=null}function cx(e,t){gi[_i++]=Hi,gi[_i++]=Vi,gi[_i++]=us,Hi=t.id,Vi=t.overflow,us=e}var xn=null,Be=null,ue=!1,es=null,Si=!1,Sd=Error($(519));function fs(e){var t=Error($(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw El(xi(t,e)),Sd}function j0(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[vn]=e,t[Xn]=i,n){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(n=0;n<wl.length;n++)ie(wl[n],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),zv(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),Hv(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||WS(t.textContent,n)?(i.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),i.onScroll!=null&&ie("scroll",t),i.onScrollEnd!=null&&ie("scrollend",t),i.onClick!=null&&(t.onclick=ha),t=!0):t=!1,t||fs(e,!0)}function Z0(e){for(xn=e.return;xn;)switch(xn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:xn=xn.return}}function lr(e){if(e!==xn)return!1;if(!ue)return Z0(e),ue=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Wd(e.type,e.memoizedProps)),n=!n),n&&Be&&fs(e),Z0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));Be=Pg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));Be=Pg(e)}else t===27?(t=Be,_s(e.type)?(e=Zd,Zd=null,Be=e):Be=t):Be=xn?bi(e.stateNode.nextSibling):null;return!0}function Hs(){Be=xn=null,ue=!1}function Wf(){var e=es;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),es=null),e}function El(e){es===null?es=[e]:es.push(e)}var yd=Ki(null),Js=null,da=null;function ka(e,t,n){Ne(yd,t._currentValue),t._currentValue=n}function ga(e){e._currentValue=yd.current,mn(yd)}function Md(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function bd(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Md(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error($(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Md(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function yo(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error($(387));if(r=r.memoizedProps,r!==null){var o=a.type;oi(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===mu.current){if(r=a.alternate,r===null)throw Error($(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Dl):e=[Dl])}a=a.return}e!==null&&bd(t,e,n,i),t.flags|=262144}function bu(e){for(e=e.firstContext;e!==null;){if(!oi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vs(e){Js=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Sn(e){return ux(Js,e)}function oc(e,t){return Js===null&&Vs(e),ux(e,t)}function ux(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},da===null){if(e===null)throw Error($(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return n}var Fb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ib=rn.unstable_scheduleCallback,zb=rn.unstable_NormalPriority,nn={$$typeof:fa,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mm(){return{controller:new Fb,data:new Map,refCount:0}}function kl(e){e.refCount--,e.refCount===0&&Ib(zb,function(){e.controller.abort()})}var rl=null,Ed=0,ao=0,Zr=null;function Gb(e,t){if(rl===null){var n=rl=[];Ed=0,ao=Gm(),Zr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ed++,t.then(K0,K0),t}function K0(){if(--Ed===0&&rl!==null){Zr!==null&&(Zr.status="fulfilled");var e=rl;rl=null,ao=0,Zr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Hb(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Q0=Gt.S;Gt.S=function(e,t){ES=ii(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gb(e,t),Q0!==null&&Q0(e,t)};var Fs=Ki(null);function gm(){var e=Fs.current;return e!==null?e:we.pooledCache}function Qc(e,t){t===null?Ne(Fs,Fs.current):Ne(Fs,t.pool)}function fx(){var e=gm();return e===null?null:{parent:nn._currentValue,pool:e}}var Mo=Error($(460)),_m=Error($(474)),df=Error($(542)),Eu={then:function(){}};function J0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ha,ha),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tg(e),e;default:if(typeof t.status=="string")t.then(ha,ha);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error($(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,tg(e),e}throw Is=t,Mo}}function ws(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Is=n,Mo):n}}var Is=null;function $0(){if(Is===null)throw Error($(459));var e=Is;return Is=null,e}function tg(e){if(e===Mo||e===df)throw Error($(483))}var Kr=null,Tl=0;function lc(e){var t=Tl;return Tl+=1,Kr===null&&(Kr=[]),hx(Kr,e,t)}function No(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cc(e,t){throw t.$$typeof===RM?Error($(525)):(e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function dx(e){function t(f,m){if(e){var v=f.deletions;v===null?(f.deletions=[m],f.flags|=16):v.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(f,m){return f=ma(f,m),f.index=0,f.sibling=null,f}function s(f,m,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<m?(f.flags|=67108866,m):v):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,v,S){return m===null||m.tag!==6?(m=kf(v,f.mode,S),m.return=f,m):(m=a(m,v),m.return=f,m)}function l(f,m,v,S){var w=v.type;return w===Lr?h(f,m,v.props.children,S,v.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ga&&ws(w)===m.type)?(m=a(m,v.props),No(m,v),m.return=f,m):(m=Kc(v.type,v.key,v.props,null,f.mode,S),No(m,v),m.return=f,m)}function c(f,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Xf(v,f.mode,S),m.return=f,m):(m=a(m,v.children||[]),m.return=f,m)}function h(f,m,v,S,w){return m===null||m.tag!==7?(m=Bs(v,f.mode,S,w),m.return=f,m):(m=a(m,v),m.return=f,m)}function d(f,m,v){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=kf(""+m,f.mode,v),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ec:return v=Kc(m.type,m.key,m.props,null,f.mode,v),No(v,m),v.return=f,v;case jo:return m=Xf(m,f.mode,v),m.return=f,m;case Ga:return m=ws(m),d(f,m,v)}if(Zo(m)||Do(m))return m=Bs(m,f.mode,v,null),m.return=f,m;if(typeof m.then=="function")return d(f,lc(m),v);if(m.$$typeof===fa)return d(f,oc(f,m),v);cc(f,m)}return null}function u(f,m,v,S){var w=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return w!==null?null:o(f,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ec:return v.key===w?l(f,m,v,S):null;case jo:return v.key===w?c(f,m,v,S):null;case Ga:return v=ws(v),u(f,m,v,S)}if(Zo(v)||Do(v))return w!==null?null:h(f,m,v,S,null);if(typeof v.then=="function")return u(f,m,lc(v),S);if(v.$$typeof===fa)return u(f,m,oc(f,v),S);cc(f,v)}return null}function p(f,m,v,S,w){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(v)||null,o(m,f,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ec:return f=f.get(S.key===null?v:S.key)||null,l(m,f,S,w);case jo:return f=f.get(S.key===null?v:S.key)||null,c(m,f,S,w);case Ga:return S=ws(S),p(f,m,v,S,w)}if(Zo(S)||Do(S))return f=f.get(v)||null,h(m,f,S,w,null);if(typeof S.then=="function")return p(f,m,v,lc(S),w);if(S.$$typeof===fa)return p(f,m,v,oc(m,S),w);cc(m,S)}return null}function _(f,m,v,S){for(var w=null,T=null,R=m,x=m=0,A=null;R!==null&&x<v.length;x++){R.index>x?(A=R,R=null):A=R.sibling;var U=u(f,R,v[x],S);if(U===null){R===null&&(R=A);break}e&&R&&U.alternate===null&&t(f,R),m=s(U,m,x),T===null?w=U:T.sibling=U,T=U,R=A}if(x===v.length)return n(f,R),ue&&la(f,x),w;if(R===null){for(;x<v.length;x++)R=d(f,v[x],S),R!==null&&(m=s(R,m,x),T===null?w=R:T.sibling=R,T=R);return ue&&la(f,x),w}for(R=i(R);x<v.length;x++)A=p(R,f,x,v[x],S),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?x:A.key),m=s(A,m,x),T===null?w=A:T.sibling=A,T=A);return e&&R.forEach(function(D){return t(f,D)}),ue&&la(f,x),w}function M(f,m,v,S){if(v==null)throw Error($(151));for(var w=null,T=null,R=m,x=m=0,A=null,U=v.next();R!==null&&!U.done;x++,U=v.next()){R.index>x?(A=R,R=null):A=R.sibling;var D=u(f,R,U.value,S);if(D===null){R===null&&(R=A);break}e&&R&&D.alternate===null&&t(f,R),m=s(D,m,x),T===null?w=D:T.sibling=D,T=D,R=A}if(U.done)return n(f,R),ue&&la(f,x),w;if(R===null){for(;!U.done;x++,U=v.next())U=d(f,U.value,S),U!==null&&(m=s(U,m,x),T===null?w=U:T.sibling=U,T=U);return ue&&la(f,x),w}for(R=i(R);!U.done;x++,U=v.next())U=p(R,f,x,U.value,S),U!==null&&(e&&U.alternate!==null&&R.delete(U.key===null?x:U.key),m=s(U,m,x),T===null?w=U:T.sibling=U,T=U);return e&&R.forEach(function(I){return t(f,I)}),ue&&la(f,x),w}function g(f,m,v,S){if(typeof v=="object"&&v!==null&&v.type===Lr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ec:t:{for(var w=v.key;m!==null;){if(m.key===w){if(w=v.type,w===Lr){if(m.tag===7){n(f,m.sibling),S=a(m,v.props.children),S.return=f,f=S;break t}}else if(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ga&&ws(w)===m.type){n(f,m.sibling),S=a(m,v.props),No(S,v),S.return=f,f=S;break t}n(f,m);break}else t(f,m);m=m.sibling}v.type===Lr?(S=Bs(v.props.children,f.mode,S,v.key),S.return=f,f=S):(S=Kc(v.type,v.key,v.props,null,f.mode,S),No(S,v),S.return=f,f=S)}return r(f);case jo:t:{for(w=v.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(f,m.sibling),S=a(m,v.children||[]),S.return=f,f=S;break t}else{n(f,m);break}else t(f,m);m=m.sibling}S=Xf(v,f.mode,S),S.return=f,f=S}return r(f);case Ga:return v=ws(v),g(f,m,v,S)}if(Zo(v))return _(f,m,v,S);if(Do(v)){if(w=Do(v),typeof w!="function")throw Error($(150));return v=w.call(v),M(f,m,v,S)}if(typeof v.then=="function")return g(f,m,lc(v),S);if(v.$$typeof===fa)return g(f,m,oc(f,v),S);cc(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,m!==null&&m.tag===6?(n(f,m.sibling),S=a(m,v),S.return=f,f=S):(n(f,m),S=kf(v,f.mode,S),S.return=f,f=S),r(f)):n(f,m)}return function(f,m,v,S){try{Tl=0;var w=g(f,m,v,S);return Kr=null,w}catch(R){if(R===Mo||R===df)throw R;var T=ti(29,R,null,f.mode);return T.lanes=S,T.return=f,T}finally{}}}var ks=dx(!0),px=dx(!1),Ha=!1;function vm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Td(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ns(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function is(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,me&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=yu(e),sx(e,null,n),t}return hf(e,i,t,n),yu(e)}function ol(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lv(e,n)}}function qf(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ad=!1;function ll(){if(Ad){var e=Zr;if(e!==null)throw e}}function cl(e,t,n,i){Ad=!1;var a=e.updateQueue;Ha=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=a.baseState;r=0,h=c=l=null,o=s;do{var u=o.lane&-536870913,p=u!==o.lane;if(p?(re&u)===u:(i&u)===u){u!==0&&u===ao&&(Ad=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,M=o;u=t;var g=n;switch(M.tag){case 1:if(_=M.payload,typeof _=="function"){d=_.call(g,d,u);break t}d=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,u=typeof _=="function"?_.call(g,d,u):_,u==null)break t;d=ze({},d,u);break t;case 2:Ha=!0}}u=o.callback,u!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[u]:p.push(u))}else p={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),ds|=r,e.lanes=r,e.memoizedState=d}}function mx(e,t){if(typeof e!="function")throw Error($(191,e));e.call(t)}function gx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)mx(n[e],t)}var so=Ki(null),Tu=Ki(0);function eg(e,t){e=Aa,Ne(Tu,e),Ne(so,t),Aa=e|t.baseLanes}function Rd(){Ne(Tu,Aa),Ne(so,so.current)}function xm(){Aa=Tu.current,mn(so),mn(Tu)}var li=Ki(null),Mi=null;function Xa(e){var t=e.alternate;Ne(Ke,Ke.current&1),Ne(li,e),Mi===null&&(t===null||so.current!==null||t.memoizedState!==null)&&(Mi=e)}function wd(e){Ne(Ke,Ke.current),Ne(li,e),Mi===null&&(Mi=e)}function _x(e){e.tag===22?(Ne(Ke,Ke.current),Ne(li,e),Mi===null&&(Mi=e)):Wa()}function Wa(){Ne(Ke,Ke.current),Ne(li,li.current)}function Jn(e){mn(li),Mi===e&&(Mi=null),mn(Ke)}var Ke=Ki(0);function Au(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Yd(n)||jd(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ba=0,Kt=null,Ee=null,tn=null,Ru=!1,Qr=!1,Xs=!1,wu=0,Al=0,Jr=null,Vb=0;function We(){throw Error($(321))}function Sm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!oi(e[n],t[n]))return!1;return!0}function ym(e,t,n,i,a,s){return ba=s,Kt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gt.H=e===null||e.memoizedState===null?jx:Lm,Xs=!1,s=n(i,a),Xs=!1,Qr&&(s=xx(t,n,i,a)),vx(e),s}function vx(e){Gt.H=Rl;var t=Ee!==null&&Ee.next!==null;if(ba=0,tn=Ee=Kt=null,Ru=!1,Al=0,Jr=null,t)throw Error($(300));e===null||an||(e=e.dependencies,e!==null&&bu(e)&&(an=!0))}function xx(e,t,n,i){Kt=e;var a=0;do{if(Qr&&(Jr=null),Al=0,Qr=!1,25<=a)throw Error($(301));if(a+=1,tn=Ee=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Gt.H=Zx,s=t(n,i)}while(Qr);return s}function kb(){var e=Gt.H,t=e.useState()[0];return t=typeof t.then=="function"?Xl(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(Kt.flags|=1024),t}function Mm(){var e=wu!==0;return wu=0,e}function bm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Em(e){if(Ru){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ru=!1}ba=0,tn=Ee=Kt=null,Qr=!1,Al=wu=0,Jr=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Kt.memoizedState=tn=e:tn=tn.next=e,tn}function Qe(){if(Ee===null){var e=Kt.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=tn===null?Kt.memoizedState:tn.next;if(t!==null)tn=t,Ee=e;else{if(e===null)throw Kt.alternate===null?Error($(467)):Error($(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},tn===null?Kt.memoizedState=tn=e:tn=tn.next=e}return tn}function pf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(e){var t=Al;return Al+=1,Jr===null&&(Jr=[]),e=hx(Jr,e,t),t=Kt,(tn===null?t.memoizedState:tn.next)===null&&(t=t.alternate,Gt.H=t===null||t.memoizedState===null?jx:Lm),e}function mf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xl(e);if(e.$$typeof===fa)return Sn(e)}throw Error($(438,String(e)))}function Tm(e){var t=null,n=Kt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Kt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=pf(),Kt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=wM;return t.index++,n}function Ea(e,t){return typeof t=="function"?t(e):t}function Jc(e){var t=Qe();return Am(t,Ee,e)}function Am(e,t,n){var i=e.queue;if(i===null)throw Error($(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(re&d)===d:(ba&d)===d){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===ao&&(h=!0);else if((ba&u)===u){c=c.next,u===ao&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,Kt.lanes|=u,ds|=u;d=c.action,Xs&&n(s,d),s=c.hasEagerState?c.eagerState:n(s,d)}else u={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Kt.lanes|=d,ds|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!oi(s,e.memoizedState)&&(an=!0,h&&(n=Zr,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Yf(e){var t=Qe(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);oi(s,t.memoizedState)||(an=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Sx(e,t,n){var i=Kt,a=Qe(),s=ue;if(s){if(n===void 0)throw Error($(407));n=n()}else n=t();var r=!oi((Ee||a).memoizedState,n);if(r&&(a.memoizedState=n,an=!0),a=a.queue,Rm(bx.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||tn!==null&&tn.memoizedState.tag&1){if(i.flags|=2048,ro(9,{destroy:void 0},Mx.bind(null,i,a,n,t),null),we===null)throw Error($(349));s||ba&127||yx(i,t,n)}return n}function yx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Kt.updateQueue,t===null?(t=pf(),Kt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mx(e,t,n,i){t.value=n,t.getSnapshot=i,Ex(t)&&Tx(e)}function bx(e,t,n){return n(function(){Ex(t)&&Tx(e)})}function Ex(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!oi(e,n)}catch{return!0}}function Tx(e){var t=Qs(e,2);t!==null&&Vn(t,e,2)}function Cd(e){var t=On();if(typeof e=="function"){var n=e;if(e=n(),Xs){ja(!0);try{n()}finally{ja(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:e},t}function Ax(e,t,n,i){return e.baseState=n,Am(e,Ee,typeof i=="function"?i:Ea)}function Xb(e,t,n,i,a){if(_f(e))throw Error($(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Gt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Rx(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Rx(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Gt.T,r={};Gt.T=r;try{var o=n(a,i),l=Gt.S;l!==null&&l(r,o),ng(e,t,o)}catch(c){Dd(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Gt.T=s}}else try{s=n(a,i),ng(e,t,s)}catch(c){Dd(e,t,c)}}function ng(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){ig(e,t,i)},function(i){return Dd(e,t,i)}):ig(e,t,n)}function ig(e,t,n){t.status="fulfilled",t.value=n,wx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Rx(e,n)))}function Dd(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,wx(t),t=t.next;while(t!==i)}e.action=null}function wx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Cx(e,t){return t}function ag(e,t){if(ue){var n=we.formState;if(n!==null){t:{var i=Kt;if(ue){if(Be){e:{for(var a=Be,s=Si;a.nodeType!==8;){if(!s){a=null;break e}if(a=bi(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Be=bi(a.nextSibling),i=a.data==="F!";break t}}fs(i)}i=!1}i&&(t=n[0])}}return n=On(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cx,lastRenderedState:t},n.queue=i,n=Wx.bind(null,Kt,i),i.dispatch=n,i=Cd(!1),s=Um.bind(null,Kt,!1,i.queue),i=On(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Xb.bind(null,Kt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function sg(e){var t=Qe();return Dx(t,Ee,e)}function Dx(e,t,n){if(t=Am(e,t,Cx)[0],e=Jc(Ea)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Xl(t)}catch(r){throw r===Mo?df:r}else i=t;t=Qe();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Kt.flags|=2048,ro(9,{destroy:void 0},Wb.bind(null,a,n),null)),[i,s,e]}function Wb(e,t){e.action=t}function rg(e){var t=Qe(),n=Ee;if(n!==null)return Dx(t,n,e);Qe(),t=t.memoizedState,n=Qe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ro(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Kt.updateQueue,t===null&&(t=pf(),Kt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Ux(){return Qe().memoizedState}function $c(e,t,n,i){var a=On();Kt.flags|=e,a.memoizedState=ro(1|t,{destroy:void 0},n,i===void 0?null:i)}function gf(e,t,n,i){var a=Qe();i=i===void 0?null:i;var s=a.memoizedState.inst;Ee!==null&&i!==null&&Sm(i,Ee.memoizedState.deps)?a.memoizedState=ro(t,s,n,i):(Kt.flags|=e,a.memoizedState=ro(1|t,s,n,i))}function og(e,t){$c(8390656,8,e,t)}function Rm(e,t){gf(2048,8,e,t)}function qb(e){Kt.flags|=4;var t=Kt.updateQueue;if(t===null)t=pf(),Kt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Lx(e){var t=Qe().memoizedState;return qb({ref:t,nextImpl:e}),function(){if(me&2)throw Error($(440));return t.impl.apply(void 0,arguments)}}function Nx(e,t){return gf(4,2,e,t)}function Ox(e,t){return gf(4,4,e,t)}function Px(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bx(e,t,n){n=n!=null?n.concat([e]):null,gf(4,4,Px.bind(null,t,e),n)}function wm(){}function Fx(e,t){var n=Qe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Sm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Ix(e,t){var n=Qe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Sm(t,i[1]))return i[0];if(i=e(),Xs){ja(!0);try{e()}finally{ja(!1)}}return n.memoizedState=[i,t],i}function Cm(e,t,n){return n===void 0||ba&1073741824&&!(re&261930)?e.memoizedState=t:(e.memoizedState=n,e=AS(),Kt.lanes|=e,ds|=e,n)}function zx(e,t,n,i){return oi(n,t)?n:so.current!==null?(e=Cm(e,n,i),oi(e,t)||(an=!0),e):!(ba&42)||ba&1073741824&&!(re&261930)?(an=!0,e.memoizedState=n):(e=AS(),Kt.lanes|=e,ds|=e,t)}function Gx(e,t,n,i,a){var s=ge.p;ge.p=s!==0&&8>s?s:8;var r=Gt.T,o={};Gt.T=o,Um(e,!1,t,n);try{var l=a(),c=Gt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=Hb(l,i);ul(e,t,h,ri(e))}else ul(e,t,i,ri(e))}catch(d){ul(e,t,{then:function(){},status:"rejected",reason:d},ri())}finally{ge.p=s,r!==null&&o.types!==null&&(r.types=o.types),Gt.T=r}}function Yb(){}function Ud(e,t,n,i){if(e.tag!==5)throw Error($(476));var a=Hx(e).queue;Gx(e,a,t,Ps,n===null?Yb:function(){return Vx(e),n(i)})}function Hx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ps,baseState:Ps,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:Ps},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Vx(e){var t=Hx(e);t.next===null&&(t=e.alternate.memoizedState),ul(e,t.next.queue,{},ri())}function Dm(){return Sn(Dl)}function kx(){return Qe().memoizedState}function Xx(){return Qe().memoizedState}function jb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ri();e=ns(n);var i=is(t,e,n);i!==null&&(Vn(i,t,n),ol(i,t,n)),t={cache:mm()},e.payload=t;return}t=t.return}}function Zb(e,t,n){var i=ri();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},_f(e)?qx(t,n):(n=fm(e,t,n,i),n!==null&&(Vn(n,e,i),Yx(n,t,i)))}function Wx(e,t,n){var i=ri();ul(e,t,n,i)}function ul(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(_f(e))qx(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,oi(o,r))return hf(e,t,a,0),we===null&&ff(),!1}catch{}finally{}if(n=fm(e,t,a,i),n!==null)return Vn(n,e,i),Yx(n,t,i),!0}return!1}function Um(e,t,n,i){if(i={lane:2,revertLane:Gm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},_f(e)){if(t)throw Error($(479))}else t=fm(e,n,i,2),t!==null&&Vn(t,e,2)}function _f(e){var t=e.alternate;return e===Kt||t!==null&&t===Kt}function qx(e,t){Qr=Ru=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yx(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Lv(e,n)}}var Rl={readContext:Sn,use:mf,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We};Rl.useEffectEvent=We;var jx={readContext:Sn,use:mf,useCallback:function(e,t){return On().memoizedState=[e,t===void 0?null:t],e},useContext:Sn,useEffect:og,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,$c(4194308,4,Px.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $c(4194308,4,e,t)},useInsertionEffect:function(e,t){$c(4,2,e,t)},useMemo:function(e,t){var n=On();t=t===void 0?null:t;var i=e();if(Xs){ja(!0);try{e()}finally{ja(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=On();if(n!==void 0){var a=n(t);if(Xs){ja(!0);try{n(t)}finally{ja(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=Zb.bind(null,Kt,e),[i.memoizedState,e]},useRef:function(e){var t=On();return e={current:e},t.memoizedState=e},useState:function(e){e=Cd(e);var t=e.queue,n=Wx.bind(null,Kt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:wm,useDeferredValue:function(e,t){var n=On();return Cm(n,e,t)},useTransition:function(){var e=Cd(!1);return e=Gx.bind(null,Kt,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Kt,a=On();if(ue){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),we===null)throw Error($(349));re&127||yx(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,og(bx.bind(null,i,s,e),[e]),i.flags|=2048,ro(9,{destroy:void 0},Mx.bind(null,i,s,n,t),null),n},useId:function(){var e=On(),t=we.identifierPrefix;if(ue){var n=Vi,i=Hi;n=(i&~(1<<32-si(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=wu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Vb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Dm,useFormState:ag,useActionState:ag,useOptimistic:function(e){var t=On();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Um.bind(null,Kt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Tm,useCacheRefresh:function(){return On().memoizedState=jb.bind(null,Kt)},useEffectEvent:function(e){var t=On(),n={impl:e};return t.memoizedState=n,function(){if(me&2)throw Error($(440));return n.impl.apply(void 0,arguments)}}},Lm={readContext:Sn,use:mf,useCallback:Fx,useContext:Sn,useEffect:Rm,useImperativeHandle:Bx,useInsertionEffect:Nx,useLayoutEffect:Ox,useMemo:Ix,useReducer:Jc,useRef:Ux,useState:function(){return Jc(Ea)},useDebugValue:wm,useDeferredValue:function(e,t){var n=Qe();return zx(n,Ee.memoizedState,e,t)},useTransition:function(){var e=Jc(Ea)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:Sx,useId:kx,useHostTransitionStatus:Dm,useFormState:sg,useActionState:sg,useOptimistic:function(e,t){var n=Qe();return Ax(n,Ee,e,t)},useMemoCache:Tm,useCacheRefresh:Xx};Lm.useEffectEvent=Lx;var Zx={readContext:Sn,use:mf,useCallback:Fx,useContext:Sn,useEffect:Rm,useImperativeHandle:Bx,useInsertionEffect:Nx,useLayoutEffect:Ox,useMemo:Ix,useReducer:Yf,useRef:Ux,useState:function(){return Yf(Ea)},useDebugValue:wm,useDeferredValue:function(e,t){var n=Qe();return Ee===null?Cm(n,e,t):zx(n,Ee.memoizedState,e,t)},useTransition:function(){var e=Yf(Ea)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:Sx,useId:kx,useHostTransitionStatus:Dm,useFormState:rg,useActionState:rg,useOptimistic:function(e,t){var n=Qe();return Ee!==null?Ax(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Tm,useCacheRefresh:Xx};Zx.useEffectEvent=Lx;function jf(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ze({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ld={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ri(),a=ns(i);a.payload=t,n!=null&&(a.callback=n),t=is(e,a,i),t!==null&&(Vn(t,e,i),ol(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ri(),a=ns(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=is(e,a,i),t!==null&&(Vn(t,e,i),ol(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ri(),i=ns(n);i.tag=2,t!=null&&(i.callback=t),t=is(e,i,n),t!==null&&(Vn(t,e,n),ol(t,e,n))}};function lg(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!Ml(n,i)||!Ml(a,s):!0}function cg(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ld.enqueueReplaceState(t,t.state,null)}function Ws(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ze({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Kx(e){Su(e)}function Qx(e){console.error(e)}function Jx(e){Su(e)}function Cu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function ug(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Nd(e,t,n){return n=ns(n),n.tag=3,n.payload={element:null},n.callback=function(){Cu(e,t)},n}function $x(e){return e=ns(e),e.tag=3,e}function tS(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){ug(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){ug(t,n,i),typeof a!="function"&&(as===null?as=new Set([this]):as.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Kb(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&yo(t,n,a,!0),n=li.current,n!==null){switch(n.tag){case 31:case 13:return Mi===null?Ou():n.alternate===null&&Ye===0&&(Ye=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Eu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),sh(e,i,a)),!1;case 22:return n.flags|=65536,i===Eu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),sh(e,i,a)),!1}throw Error($(435,n.tag))}return sh(e,i,a),Ou(),!1}if(ue)return t=li.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Sd&&(e=Error($(422),{cause:i}),El(xi(e,n)))):(i!==Sd&&(t=Error($(423),{cause:i}),El(xi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=xi(i,n),a=Nd(e.stateNode,i,a),qf(e,a),Ye!==4&&(Ye=2)),!1;var s=Error($(520),{cause:i});if(s=xi(s,n),dl===null?dl=[s]:dl.push(s),Ye!==4&&(Ye=2),t===null)return!0;i=xi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Nd(n.stateNode,i,e),qf(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(as===null||!as.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=$x(a),tS(a,e,n,i),qf(n,a),!1}n=n.return}while(n!==null);return!1}var Nm=Error($(461)),an=!1;function _n(e,t,n,i){t.child=e===null?px(t,null,n,i):ks(t,e.child,n,i)}function fg(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Vs(t),i=ym(e,t,n,r,s,a),o=Mm(),e!==null&&!an?(bm(e,t,a),Ta(e,t,a)):(ue&&o&&dm(t),t.flags|=1,_n(e,t,i,a),t.child)}function hg(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!hm(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,eS(e,t,s,i,a)):(e=Kc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Om(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ml,n(r,i)&&e.ref===t.ref)return Ta(e,t,a)}return t.flags|=1,e=ma(s,i),e.ref=t.ref,e.return=t,t.child=e}function eS(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(Ml(s,i)&&e.ref===t.ref)if(an=!1,t.pendingProps=i=s,Om(e,a))e.flags&131072&&(an=!0);else return t.lanes=e.lanes,Ta(e,t,a)}return Od(e,t,n,i,a)}function nS(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return dg(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qc(t,s!==null?s.cachePool:null),s!==null?eg(t,s):Rd(),_x(t);else return i=t.lanes=536870912,dg(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Qc(t,s.cachePool),eg(t,s),Wa(),t.memoizedState=null):(e!==null&&Qc(t,null),Rd(),Wa());return _n(e,t,a,n),t.child}function Qo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dg(e,t,n,i,a){var s=gm();return s=s===null?null:{parent:nn._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Qc(t,null),Rd(),_x(t),e!==null&&yo(e,t,i,!0),t.childLanes=a,null}function tu(e,t){return t=Du({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pg(e,t,n){return ks(t,e.child,null,n),e=tu(t,t.pendingProps),e.flags|=2,Jn(t),t.memoizedState=null,e}function Qb(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ue){if(i.mode==="hidden")return e=tu(t,i),t.lanes=536870912,Qo(null,e);if(wd(t),(e=Be)?(e=jS(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:us!==null?{id:Hi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},n=ox(e),n.return=t,t.child=n,xn=t,Be=null)):e=null,e===null)throw fs(t);return t.lanes=536870912,null}return tu(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(wd(t),a)if(t.flags&256)t.flags&=-257,t=pg(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error($(558));else if(an||yo(e,t,n,!1),a=(n&e.childLanes)!==0,an||a){if(i=we,i!==null&&(r=Nv(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Qs(e,r),Vn(i,e,r),Nm;Ou(),t=pg(e,t,n)}else e=s.treeContext,Be=bi(r.nextSibling),xn=t,ue=!0,es=null,Si=!1,e!==null&&cx(t,e),t=tu(t,i),t.flags|=4096;return t}return e=ma(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function eu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error($(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Od(e,t,n,i,a){return Vs(t),n=ym(e,t,n,i,void 0,a),i=Mm(),e!==null&&!an?(bm(e,t,a),Ta(e,t,a)):(ue&&i&&dm(t),t.flags|=1,_n(e,t,n,a),t.child)}function mg(e,t,n,i,a,s){return Vs(t),t.updateQueue=null,n=xx(t,i,n,a),vx(e),i=Mm(),e!==null&&!an?(bm(e,t,s),Ta(e,t,s)):(ue&&i&&dm(t),t.flags|=1,_n(e,t,n,s),t.child)}function gg(e,t,n,i,a){if(Vs(t),t.stateNode===null){var s=Gr,r=n.contextType;typeof r=="object"&&r!==null&&(s=Sn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ld,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},vm(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?Sn(r):Gr,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(jf(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Ld.enqueueReplaceState(s,s.state,null),cl(t,i,s,a),ll(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=Ws(n,o);s.props=l;var c=s.context,h=n.contextType;r=Gr,typeof h=="object"&&h!==null&&(r=Sn(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&cg(t,s,i,r),Ha=!1;var u=t.memoizedState;s.state=u,cl(t,i,s,a),ll(),c=t.memoizedState,o||u!==c||Ha?(typeof d=="function"&&(jf(t,n,d,i),c=t.memoizedState),(l=Ha||lg(t,n,l,i,u,c,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Td(e,t),r=t.memoizedProps,h=Ws(n,r),s.props=h,d=t.pendingProps,u=s.context,c=n.contextType,l=Gr,typeof c=="object"&&c!==null&&(l=Sn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||u!==l)&&cg(t,s,i,l),Ha=!1,u=t.memoizedState,s.state=u,cl(t,i,s,a),ll();var p=t.memoizedState;r!==d||u!==p||Ha||e!==null&&e.dependencies!==null&&bu(e.dependencies)?(typeof o=="function"&&(jf(t,n,o,i),p=t.memoizedState),(h=Ha||lg(t,n,h,i,u,p,l)||e!==null&&e.dependencies!==null&&bu(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=h):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,eu(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=ks(t,e.child,null,a),t.child=ks(t,null,n,a)):_n(e,t,n,a),t.memoizedState=s.state,e=t.child):e=Ta(e,t,a),e}function _g(e,t,n,i){return Hs(),t.flags|=256,_n(e,t,n,i),t.child}var Zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kf(e){return{baseLanes:e,cachePool:fx()}}function Qf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ni),e}function iS(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Ke.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(a?Xa(t):Wa(),(e=Be)?(e=jS(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:us!==null?{id:Hi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},n=ox(e),n.return=t,t.child=n,xn=t,Be=null)):e=null,e===null)throw fs(t);return jd(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Wa(),a=t.mode,o=Du({mode:"hidden",children:o},a),i=Bs(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Kf(n),i.childLanes=Qf(e,r,n),t.memoizedState=Zf,Qo(null,i)):(Xa(t),Pd(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Xa(t),t.flags&=-257,t=Jf(e,t,n)):t.memoizedState!==null?(Wa(),t.child=e.child,t.flags|=128,t=null):(Wa(),o=i.fallback,a=t.mode,i=Du({mode:"visible",children:i.children},a),o=Bs(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,ks(t,e.child,null,n),i=t.child,i.memoizedState=Kf(n),i.childLanes=Qf(e,r,n),t.memoizedState=Zf,t=Qo(null,i));else if(Xa(t),jd(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error($(419)),i.stack="",i.digest=r,El({value:i,source:null,stack:null}),t=Jf(e,t,n)}else if(an||yo(e,t,n,!1),r=(n&e.childLanes)!==0,an||r){if(r=we,r!==null&&(i=Nv(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Qs(e,i),Vn(r,e,i),Nm;Yd(o)||Ou(),t=Jf(e,t,n)}else Yd(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Be=bi(o.nextSibling),xn=t,ue=!0,es=null,Si=!1,e!==null&&cx(t,e),t=Pd(t,i.children),t.flags|=4096);return t}return a?(Wa(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=ma(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ma(c,o):(o=Bs(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Qo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Kf(n):(a=o.cachePool,a!==null?(l=nn._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=fx(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Qf(e,r,n),t.memoizedState=Zf,Qo(e.child,i)):(Xa(t),n=e.child,e=n.sibling,n=ma(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Pd(e,t){return t=Du({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Du(e,t){return e=ti(22,e,null,t),e.lanes=0,e}function Jf(e,t,n){return ks(t,e.child,null,n),e=Pd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vg(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Md(e.return,t,n)}function $f(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function aS(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Ke.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ne(Ke,r),_n(e,t,i,n),i=ue?bl:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vg(e,n,t);else if(e.tag===19)vg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Au(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),$f(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Au(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}$f(t,!0,n,null,s,i);break;case"together":$f(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Ta(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ds|=t.lanes,!(n&t.childLanes))if(e!==null){if(yo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=ma(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ma(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Om(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&bu(e)))}function Jb(e,t,n){switch(t.tag){case 3:gu(t,t.stateNode.containerInfo),ka(t,nn,e.memoizedState.cache),Hs();break;case 27:case 5:cd(t);break;case 4:gu(t,t.stateNode.containerInfo);break;case 10:ka(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wd(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Xa(t),t.flags|=128,null):n&t.child.childLanes?iS(e,t,n):(Xa(t),e=Ta(e,t,n),e!==null?e.sibling:null);Xa(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(yo(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return aS(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ne(Ke,Ke.current),i)break;return null;case 22:return t.lanes=0,nS(e,t,n,t.pendingProps);case 24:ka(t,nn,e.memoizedState.cache)}return Ta(e,t,n)}function sS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)an=!0;else{if(!Om(e,n)&&!(t.flags&128))return an=!1,Jb(e,t,n);an=!!(e.flags&131072)}else an=!1,ue&&t.flags&1048576&&lx(t,bl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ws(t.elementType),t.type=e,typeof e=="function")hm(e)?(i=Ws(e,i),t.tag=1,t=gg(null,t,e,i,n)):(t.tag=0,t=Od(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===Jp){t.tag=11,t=fg(null,t,e,i,n);break t}else if(a===$p){t.tag=14,t=hg(null,t,e,i,n);break t}}throw t=od(e)||e,Error($(306,t,""))}}return t;case 0:return Od(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Ws(i,t.pendingProps),gg(e,t,i,a,n);case 3:t:{if(gu(t,t.stateNode.containerInfo),e===null)throw Error($(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Td(e,t),cl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ka(t,nn,i),i!==s.cache&&bd(t,[nn],n,!0),ll(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=_g(e,t,i,n);break t}else if(i!==a){a=xi(Error($(424)),t),El(a),t=_g(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=bi(e.firstChild),xn=t,ue=!0,es=null,Si=!0,n=px(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Hs(),i===a){t=Ta(e,t,n);break t}_n(e,t,i,n)}t=t.child}return t;case 26:return eu(e,t),e===null?(n=Ig(t.type,null,t.pendingProps,null))?t.memoizedState=n:ue||(n=t.type,e=t.pendingProps,i=Iu(ts.current).createElement(n),i[vn]=t,i[Xn]=e,Mn(i,n,e),pn(i),t.stateNode=i):t.memoizedState=Ig(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return cd(t),e===null&&ue&&(i=t.stateNode=ZS(t.type,t.pendingProps,ts.current),xn=t,Si=!0,a=Be,_s(t.type)?(Zd=a,Be=bi(i.firstChild)):Be=a),_n(e,t,t.pendingProps.children,n),eu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((a=i=Be)&&(i=wE(i,t.type,t.pendingProps,Si),i!==null?(t.stateNode=i,xn=t,Be=bi(i.firstChild),Si=!1,a=!0):a=!1),a||fs(t)),cd(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,Wd(a,s)?i=null:r!==null&&Wd(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=ym(e,t,kb,null,null,n),Dl._currentValue=a),eu(e,t),_n(e,t,i,n),t.child;case 6:return e===null&&ue&&((e=n=Be)&&(n=CE(n,t.pendingProps,Si),n!==null?(t.stateNode=n,xn=t,Be=null,e=!0):e=!1),e||fs(t)),null;case 13:return iS(e,t,n);case 4:return gu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ks(t,null,i,n):_n(e,t,i,n),t.child;case 11:return fg(e,t,t.type,t.pendingProps,n);case 7:return _n(e,t,t.pendingProps,n),t.child;case 8:return _n(e,t,t.pendingProps.children,n),t.child;case 12:return _n(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ka(t,t.type,i.value),_n(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Vs(t),a=Sn(a),i=i(a),t.flags|=1,_n(e,t,i,n),t.child;case 14:return hg(e,t,t.type,t.pendingProps,n);case 15:return eS(e,t,t.type,t.pendingProps,n);case 19:return aS(e,t,n);case 31:return Qb(e,t,n);case 22:return nS(e,t,n,t.pendingProps);case 24:return Vs(t),i=Sn(nn),e===null?(a=gm(),a===null&&(a=we,s=mm(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},vm(t),ka(t,nn,a)):(e.lanes&n&&(Td(e,t),cl(t,null,null,n),ll()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ka(t,nn,i)):(i=s.cache,ka(t,nn,i),i!==a.cache&&bd(t,[nn],n,!0))),_n(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error($(156,t.tag))}function $i(e){e.flags|=4}function th(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(CS())e.flags|=8192;else throw Is=Eu,_m}else e.flags&=-16777217}function xg(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!JS(t))if(CS())e.flags|=8192;else throw Is=Eu,_m}function uc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Dv():536870912,e.lanes|=t,oo|=t)}function Oo(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function $b(e,t,n){var i=t.pendingProps;switch(pm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Pe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ga(nn),eo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(lr(t)?$i(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wf())),Pe(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?($i(t),s!==null?(Pe(t),xg(t,s)):(Pe(t),th(t,a,null,i,n))):s?s!==e.memoizedState?($i(t),Pe(t),xg(t,s)):(Pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&$i(t),Pe(t),th(t,a,e,i,n)),null;case 27:if(_u(t),n=ts.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return Pe(t),null}e=qi.current,lr(t)?j0(t):(e=ZS(a,i,n),t.stateNode=e,$i(t))}return Pe(t),null;case 5:if(_u(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return Pe(t),null}if(s=qi.current,lr(t))j0(t);else{var r=Iu(ts.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[vn]=t,s[Xn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(Mn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&$i(t)}}return Pe(t),th(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&$i(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error($(166));if(e=ts.current,lr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=xn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[vn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||WS(e.nodeValue,n)),e||fs(t,!0)}else e=Iu(e).createTextNode(i),e[vn]=t,t.stateNode=e}return Pe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=lr(t),n!==null){if(e===null){if(!i)throw Error($(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(557));e[vn]=t}else Hs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),e=!1}else n=Wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Jn(t),t):(Jn(t),null);if(t.flags&128)throw Error($(558))}return Pe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=lr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error($(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error($(317));a[vn]=t}else Hs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pe(t),a=!1}else a=Wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Jn(t),t):(Jn(t),null)}return Jn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),uc(t,t.updateQueue),Pe(t),null);case 4:return eo(),e===null&&Hm(t.stateNode.containerInfo),Pe(t),null;case 10:return ga(t.type),Pe(t),null;case 19:if(mn(Ke),i=t.memoizedState,i===null)return Pe(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)Oo(i,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Au(e),s!==null){for(t.flags|=128,Oo(i,!1),e=s.updateQueue,t.updateQueue=e,uc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)rx(n,e),n=n.sibling;return Ne(Ke,Ke.current&1|2),ue&&la(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ii()>Lu&&(t.flags|=128,a=!0,Oo(i,!1),t.lanes=4194304)}else{if(!a)if(e=Au(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,uc(t,e),Oo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ue)return Pe(t),null}else 2*ii()-i.renderingStartTime>Lu&&n!==536870912&&(t.flags|=128,a=!0,Oo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ii(),e.sibling=null,n=Ke.current,Ne(Ke,a?n&1|2:n&1),ue&&la(t,i.treeForkCount),e):(Pe(t),null);case 22:case 23:return Jn(t),xm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),n=t.updateQueue,n!==null&&uc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&mn(Fs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ga(nn),Pe(t),null;case 25:return null;case 30:return null}throw Error($(156,t.tag))}function tE(e,t){switch(pm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ga(nn),eo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _u(t),null;case 31:if(t.memoizedState!==null){if(Jn(t),t.alternate===null)throw Error($(340));Hs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Jn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));Hs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return mn(Ke),null;case 4:return eo(),null;case 10:return ga(t.type),null;case 22:case 23:return Jn(t),xm(),e!==null&&mn(Fs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ga(nn),null;case 25:return null;default:return null}}function rS(e,t){switch(pm(t),t.tag){case 3:ga(nn),eo();break;case 26:case 27:case 5:_u(t);break;case 4:eo();break;case 31:t.memoizedState!==null&&Jn(t);break;case 13:Jn(t);break;case 19:mn(Ke);break;case 10:ga(t.type);break;case 22:case 23:Jn(t),xm(),e!==null&&mn(Fs);break;case 24:ga(nn)}}function Wl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){ye(t,t.return,o)}}function hs(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){ye(a,l,h)}}}i=i.next}while(i!==s)}}catch(h){ye(t,t.return,h)}}function oS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{gx(t,n)}catch(i){ye(e,e.return,i)}}}function lS(e,t,n){n.props=Ws(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ye(e,t,i)}}function fl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ye(e,t,a)}}function ki(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ye(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ye(e,t,a)}else n.current=null}function cS(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ye(e,e.return,a)}}function eh(e,t,n){try{var i=e.stateNode;ME(i,e.type,n,t),i[Xn]=t}catch(a){ye(e,e.return,a)}}function uS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_s(e.type)||e.tag===4}function nh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||uS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_s(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ha));else if(i!==4&&(i===27&&_s(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Bd(e,t,n),e=e.sibling;e!==null;)Bd(e,t,n),e=e.sibling}function Uu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&_s(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Uu(e,t,n),e=e.sibling;e!==null;)Uu(e,t,n),e=e.sibling}function fS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Mn(t,i,n),t[vn]=e,t[Xn]=n}catch(s){ye(e,e.return,s)}}var ca=!1,en=!1,ih=!1,Sg=typeof WeakSet=="function"?WeakSet:Set,dn=null;function eE(e,t){if(e=e.containerInfo,kd=Vu,e=Jv(e),cm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,d=e,u=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=r+a),d!==s||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===e)break e;if(u===n&&++c===a&&(o=r),u===s&&++h===i&&(l=r),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xd={focusedElem:e,selectionRange:n},Vu=!1,dn=t;dn!==null;)if(t=dn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,dn=e;else for(;dn!==null;){switch(t=dn,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var _=Ws(n.type,a);e=i.getSnapshotBeforeUpdate(_,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){ye(n,n.return,M)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)qd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error($(163))}if(e=t.sibling,e!==null){e.return=t.return,dn=e;break}dn=t.return}}function hS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ea(e,n),i&4&&Wl(5,n);break;case 1:if(ea(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ye(n,n.return,r)}else{var a=Ws(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ye(n,n.return,r)}}i&64&&oS(n),i&512&&fl(n,n.return);break;case 3:if(ea(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{gx(e,t)}catch(r){ye(n,n.return,r)}}break;case 27:t===null&&i&4&&fS(n);case 26:case 5:ea(e,n),t===null&&i&4&&cS(n),i&512&&fl(n,n.return);break;case 12:ea(e,n);break;case 31:ea(e,n),i&4&&mS(e,n);break;case 13:ea(e,n),i&4&&gS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=uE.bind(null,n),DE(e,n))));break;case 22:if(i=n.memoizedState!==null||ca,!i){t=t!==null&&t.memoizedState!==null||en,a=ca;var s=en;ca=i,(en=t)&&!s?oa(e,n,(n.subtreeFlags&8772)!==0):ea(e,n),ca=a,en=s}break;case 30:break;default:ea(e,n)}}function dS(e){var t=e.alternate;t!==null&&(e.alternate=null,dS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&im(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,Gn=!1;function ta(e,t,n){for(n=n.child;n!==null;)pS(e,t,n),n=n.sibling}function pS(e,t,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 26:en||ki(n,t),ta(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:en||ki(n,t);var i=ke,a=Gn;_s(n.type)&&(ke=n.stateNode,Gn=!1),ta(e,t,n),ml(n.stateNode),ke=i,Gn=a;break;case 5:en||ki(n,t);case 6:if(i=ke,a=Gn,ke=null,ta(e,t,n),ke=i,Gn=a,ke!==null)if(Gn)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(n.stateNode)}catch(s){ye(n,t,s)}else try{ke.removeChild(n.stateNode)}catch(s){ye(n,t,s)}break;case 18:ke!==null&&(Gn?(e=ke,Ng(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),fo(e)):Ng(ke,n.stateNode));break;case 4:i=ke,a=Gn,ke=n.stateNode.containerInfo,Gn=!0,ta(e,t,n),ke=i,Gn=a;break;case 0:case 11:case 14:case 15:hs(2,n,t),en||hs(4,n,t),ta(e,t,n);break;case 1:en||(ki(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&lS(n,t,i)),ta(e,t,n);break;case 21:ta(e,t,n);break;case 22:en=(i=en)||n.memoizedState!==null,ta(e,t,n),en=i;break;default:ta(e,t,n)}}function mS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{fo(e)}catch(n){ye(t,t.return,n)}}}function gS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fo(e)}catch(n){ye(t,t.return,n)}}function nE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Sg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Sg),t;default:throw Error($(435,e.tag))}}function fc(e,t){var n=nE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=fE.bind(null,e,i);i.then(a,a)}})}function In(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(_s(o.type)){ke=o.stateNode,Gn=!1;break t}break;case 5:ke=o.stateNode,Gn=!1;break t;case 3:case 4:ke=o.stateNode.containerInfo,Gn=!0;break t}o=o.return}if(ke===null)throw Error($(160));pS(s,r,a),ke=null,Gn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_S(t,e),t=t.sibling}var Di=null;function _S(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(t,e),zn(e),i&4&&(hs(3,e,e.return),Wl(3,e),hs(5,e,e.return));break;case 1:In(t,e),zn(e),i&512&&(en||n===null||ki(n,n.return)),i&64&&ca&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Di;if(In(t,e),zn(e),i&512&&(en||n===null||ki(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Hl]||s[vn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),Mn(s,i,n),s[vn]=e,pn(s),i=s;break t;case"link":var r=Gg("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),Mn(s,i,n),a.head.appendChild(s);break;case"meta":if(r=Gg("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),Mn(s,i,n),a.head.appendChild(s);break;default:throw Error($(468,i))}s[vn]=e,pn(s),i=s}e.stateNode=i}else Hg(a,e.type,e.stateNode);else e.stateNode=zg(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?Hg(a,e.type,e.stateNode):zg(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&eh(e,e.memoizedProps,n.memoizedProps)}break;case 27:In(t,e),zn(e),i&512&&(en||n===null||ki(n,n.return)),n!==null&&i&4&&eh(e,e.memoizedProps,n.memoizedProps);break;case 5:if(In(t,e),zn(e),i&512&&(en||n===null||ki(n,n.return)),e.flags&32){a=e.stateNode;try{io(a,"")}catch(_){ye(e,e.return,_)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,eh(e,a,n!==null?n.memoizedProps:a)),i&1024&&(ih=!0);break;case 6:if(In(t,e),zn(e),i&4){if(e.stateNode===null)throw Error($(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){ye(e,e.return,_)}}break;case 3:if(au=null,a=Di,Di=zu(t.containerInfo),In(t,e),Di=a,zn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(t.containerInfo)}catch(_){ye(e,e.return,_)}ih&&(ih=!1,vS(e));break;case 4:i=Di,Di=zu(e.stateNode.containerInfo),In(t,e),zn(e),Di=i;break;case 12:In(t,e),zn(e);break;case 31:In(t,e),zn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,fc(e,i)));break;case 13:In(t,e),zn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(vf=ii()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,fc(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=ca,h=en;if(ca=c||a,en=h||l,In(t,e),en=h,ca=c,zn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||ca||en||Cs(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,u=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(_){ye(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(_){ye(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?Og(p,!0):Og(l.stateNode,!1)}catch(_){ye(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,fc(e,n))));break;case 19:In(t,e),zn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,fc(e,i)));break;case 30:break;case 21:break;default:In(t,e),zn(e)}}function zn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(uS(i)){n=i;break}i=i.return}if(n==null)throw Error($(160));switch(n.tag){case 27:var a=n.stateNode,s=nh(e);Uu(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(io(r,""),n.flags&=-33);var o=nh(e);Uu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=nh(e);Bd(e,c,l);break;default:throw Error($(161))}}catch(h){ye(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vS(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ea(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hS(e,t.alternate,t),t=t.sibling}function Cs(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:hs(4,t,t.return),Cs(t);break;case 1:ki(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&lS(t,t.return,n),Cs(t);break;case 27:ml(t.stateNode);case 26:case 5:ki(t,t.return),Cs(t);break;case 22:t.memoizedState===null&&Cs(t);break;case 30:Cs(t);break;default:Cs(t)}e=e.sibling}}function oa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:oa(a,s,n),Wl(4,s);break;case 1:if(oa(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ye(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)mx(l[a],o)}catch(c){ye(i,i.return,c)}}n&&r&64&&oS(s),fl(s,s.return);break;case 27:fS(s);case 26:case 5:oa(a,s,n),n&&i===null&&r&4&&cS(s),fl(s,s.return);break;case 12:oa(a,s,n);break;case 31:oa(a,s,n),n&&r&4&&mS(a,s);break;case 13:oa(a,s,n),n&&r&4&&gS(a,s);break;case 22:s.memoizedState===null&&oa(a,s,n),fl(s,s.return);break;case 30:break;default:oa(a,s,n)}t=t.sibling}}function Pm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&kl(n))}function Bm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kl(e))}function Ai(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xS(e,t,n,i),t=t.sibling}function xS(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ai(e,t,n,i),a&2048&&Wl(9,t);break;case 1:Ai(e,t,n,i);break;case 3:Ai(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kl(e)));break;case 12:if(a&2048){Ai(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ye(t,t.return,l)}}else Ai(e,t,n,i);break;case 31:Ai(e,t,n,i);break;case 13:Ai(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?Ai(e,t,n,i):hl(e,t):s._visibility&2?Ai(e,t,n,i):(s._visibility|=2,Dr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Pm(r,t);break;case 24:Ai(e,t,n,i),a&2048&&Bm(t.alternate,t);break;default:Ai(e,t,n,i)}}function Dr(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Dr(s,r,o,l,a),Wl(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?Dr(s,r,o,l,a):hl(s,r):(h._visibility|=2,Dr(s,r,o,l,a)),a&&c&2048&&Pm(r.alternate,r);break;case 24:Dr(s,r,o,l,a),a&&c&2048&&Bm(r.alternate,r);break;default:Dr(s,r,o,l,a)}t=t.sibling}}function hl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:hl(n,i),a&2048&&Pm(i.alternate,i);break;case 24:hl(n,i),a&2048&&Bm(i.alternate,i);break;default:hl(n,i)}t=t.sibling}}var Jo=8192;function cr(e,t,n){if(e.subtreeFlags&Jo)for(e=e.child;e!==null;)SS(e,t,n),e=e.sibling}function SS(e,t,n){switch(e.tag){case 26:cr(e,t,n),e.flags&Jo&&e.memoizedState!==null&&VE(n,Di,e.memoizedState,e.memoizedProps);break;case 5:cr(e,t,n);break;case 3:case 4:var i=Di;Di=zu(e.stateNode.containerInfo),cr(e,t,n),Di=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Jo,Jo=16777216,cr(e,t,n),Jo=i):cr(e,t,n));break;default:cr(e,t,n)}}function yS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Po(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];dn=i,bS(i,e)}yS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)MS(e),e=e.sibling}function MS(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&hs(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,nu(e)):Po(e);break;default:Po(e)}}function nu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];dn=i,bS(i,e)}yS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:hs(8,t,t.return),nu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,nu(t));break;default:nu(t)}e=e.sibling}}function bS(e,t){for(;dn!==null;){var n=dn;switch(n.tag){case 0:case 11:case 15:hs(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:kl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,dn=i;else t:for(n=e;dn!==null;){i=dn;var a=i.sibling,s=i.return;if(dS(i),i===n){dn=null;break t}if(a!==null){a.return=s,dn=a;break t}dn=s}}}var iE={getCacheForType:function(e){var t=Sn(nn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Sn(nn).controller.signal}},aE=typeof WeakMap=="function"?WeakMap:Map,me=0,we=null,ae=null,re=0,xe=0,Qn=null,Ka=!1,bo=!1,Fm=!1,Aa=0,Ye=0,ds=0,zs=0,Im=0,ni=0,oo=0,dl=null,Hn=null,Fd=!1,vf=0,ES=0,Lu=1/0,Nu=null,as=null,sn=0,ss=null,lo=null,_a=0,Id=0,zd=null,TS=null,pl=0,Gd=null;function ri(){return me&2&&re!==0?re&-re:Gt.T!==null?Gm():Ov()}function AS(){if(ni===0)if(!(re&536870912)||ue){var e=ic;ic<<=1,!(ic&3932160)&&(ic=262144),ni=e}else ni=536870912;return e=li.current,e!==null&&(e.flags|=32),ni}function Vn(e,t,n){(e===we&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(co(e,0),Qa(e,re,ni,!1)),Gl(e,n),(!(me&2)||e!==we)&&(e===we&&(!(me&2)&&(zs|=n),Ye===4&&Qa(e,re,ni,!1)),Qi(e))}function RS(e,t,n){if(me&6)throw Error($(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||zl(e,t),a=i?oE(e,t):ah(e,t,!0),s=i;do{if(a===0){bo&&!i&&Qa(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!sE(n)){a=ah(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=dl;var l=o.current.memoizedState.isDehydrated;if(l&&(co(o,r).flags|=256),r=ah(o,r,!1),r!==2){if(Fm&&!l){o.errorRecoveryDisabledLanes|=s,zs|=s,a=4;break t}s=Hn,Hn=a,s!==null&&(Hn===null?Hn=s:Hn.push.apply(Hn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){co(e,0),Qa(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error($(345));case 4:if((t&4194048)!==t)break;case 6:Qa(i,t,ni,!Ka);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error($(329))}if((t&62914560)===t&&(a=vf+300-ii(),10<a)){if(Qa(i,t,ni,!Ka),of(i,0,!0)!==0)break t;_a=t,i.timeoutHandle=YS(yg.bind(null,i,n,Hn,Nu,Fd,t,ni,zs,oo,Ka,s,"Throttled",-0,0),a);break t}yg(i,n,Hn,Nu,Fd,t,ni,zs,oo,Ka,s,null,-0,0)}}break}while(!0);Qi(e)}function yg(e,t,n,i,a,s,r,o,l,c,h,d,u,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ha},SS(t,s,d);var _=(s&62914560)===s?vf-ii():(s&4194048)===s?ES-ii():0;if(_=kE(d,_),_!==null){_a=s,e.cancelPendingCommit=_(bg.bind(null,e,t,s,n,i,a,r,o,l,h,d,null,u,p)),Qa(e,s,r,!c);return}}bg(e,t,s,n,i,a,r,o,l)}function sE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!oi(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qa(e,t,n,i){t&=~Im,t&=~zs,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-si(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&Uv(e,n,t)}function xf(){return me&6?!0:(ql(0),!1)}function zm(){if(ae!==null){if(xe===0)var e=ae.return;else e=ae,da=Js=null,Em(e),Kr=null,Tl=0,e=ae;for(;e!==null;)rS(e.alternate,e),e=e.return;ae=null}}function co(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,TE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),_a=0,zm(),we=e,ae=n=ma(e.current,null),re=t,xe=0,Qn=null,Ka=!1,bo=zl(e,t),Fm=!1,oo=ni=Im=zs=ds=Ye=0,Hn=dl=null,Fd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-si(i),s=1<<a;t|=e[a],i&=~s}return Aa=t,ff(),n}function wS(e,t){Kt=null,Gt.H=Rl,t===Mo||t===df?(t=$0(),xe=3):t===_m?(t=$0(),xe=4):xe=t===Nm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qn=t,ae===null&&(Ye=1,Cu(e,xi(t,e.current)))}function CS(){var e=li.current;return e===null?!0:(re&4194048)===re?Mi===null:(re&62914560)===re||re&536870912?e===Mi:!1}function DS(){var e=Gt.H;return Gt.H=Rl,e===null?Rl:e}function US(){var e=Gt.A;return Gt.A=iE,e}function Ou(){Ye=4,Ka||(re&4194048)!==re&&li.current!==null||(bo=!0),!(ds&134217727)&&!(zs&134217727)||we===null||Qa(we,re,ni,!1)}function ah(e,t,n){var i=me;me|=2;var a=DS(),s=US();(we!==e||re!==t)&&(Nu=null,co(e,t)),t=!1;var r=Ye;t:do try{if(xe!==0&&ae!==null){var o=ae,l=Qn;switch(xe){case 8:zm(),r=6;break t;case 3:case 2:case 9:case 6:li.current===null&&(t=!0);var c=xe;if(xe=0,Qn=null,kr(e,o,l,c),n&&bo){r=0;break t}break;default:c=xe,xe=0,Qn=null,kr(e,o,l,c)}}rE(),r=Ye;break}catch(h){wS(e,h)}while(!0);return t&&e.shellSuspendCounter++,da=Js=null,me=i,Gt.H=a,Gt.A=s,ae===null&&(we=null,re=0,ff()),r}function rE(){for(;ae!==null;)LS(ae)}function oE(e,t){var n=me;me|=2;var i=DS(),a=US();we!==e||re!==t?(Nu=null,Lu=ii()+500,co(e,t)):bo=zl(e,t);t:do try{if(xe!==0&&ae!==null){t=ae;var s=Qn;e:switch(xe){case 1:xe=0,Qn=null,kr(e,t,s,1);break;case 2:case 9:if(J0(s)){xe=0,Qn=null,Mg(t);break}t=function(){xe!==2&&xe!==9||we!==e||(xe=7),Qi(e)},s.then(t,t);break t;case 3:xe=7;break t;case 4:xe=5;break t;case 7:J0(s)?(xe=0,Qn=null,Mg(t)):(xe=0,Qn=null,kr(e,t,s,7));break;case 5:var r=null;switch(ae.tag){case 26:r=ae.memoizedState;case 5:case 27:var o=ae;if(r?JS(r):o.stateNode.complete){xe=0,Qn=null;var l=o.sibling;if(l!==null)ae=l;else{var c=o.return;c!==null?(ae=c,Sf(c)):ae=null}break e}}xe=0,Qn=null,kr(e,t,s,5);break;case 6:xe=0,Qn=null,kr(e,t,s,6);break;case 8:zm(),Ye=6;break t;default:throw Error($(462))}}lE();break}catch(h){wS(e,h)}while(!0);return da=Js=null,Gt.H=i,Gt.A=a,me=n,ae!==null?0:(we=null,re=0,ff(),Ye)}function lE(){for(;ae!==null&&!UM();)LS(ae)}function LS(e){var t=sS(e.alternate,e,Aa);e.memoizedProps=e.pendingProps,t===null?Sf(e):ae=t}function Mg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mg(n,t,t.pendingProps,t.type,void 0,re);break;case 11:t=mg(n,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:Em(t);default:rS(n,t),t=ae=rx(t,Aa),t=sS(n,t,Aa)}e.memoizedProps=e.pendingProps,t===null?Sf(e):ae=t}function kr(e,t,n,i){da=Js=null,Em(t),Kr=null,Tl=0;var a=t.return;try{if(Kb(e,a,t,n,re)){Ye=1,Cu(e,xi(n,e.current)),ae=null;return}}catch(s){if(a!==null)throw ae=a,s;Ye=1,Cu(e,xi(n,e.current)),ae=null;return}t.flags&32768?(ue||i===1?e=!0:bo||re&536870912?e=!1:(Ka=e=!0,(i===2||i===9||i===3||i===6)&&(i=li.current,i!==null&&i.tag===13&&(i.flags|=16384))),NS(t,e)):Sf(t)}function Sf(e){var t=e;do{if(t.flags&32768){NS(t,Ka);return}e=t.return;var n=$b(t.alternate,t,Aa);if(n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);Ye===0&&(Ye=5)}function NS(e,t){do{var n=tE(e.alternate,e);if(n!==null){n.flags&=32767,ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=n}while(e!==null);Ye=6,ae=null}function bg(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do yf();while(sn!==0);if(me&6)throw Error($(327));if(t!==null){if(t===e.current)throw Error($(177));if(s=t.lanes|t.childLanes,s|=um,HM(e,n,s,r,o,l),e===we&&(ae=we=null,re=0),lo=t,ss=e,_a=n,Id=s,zd=a,TS=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,hE(vu,function(){return IS(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Gt.T,Gt.T=null,a=ge.p,ge.p=2,r=me,me|=4;try{eE(e,t,n)}finally{me=r,ge.p=a,Gt.T=i}}sn=1,OS(),PS(),BS()}}function OS(){if(sn===1){sn=0;var e=ss,t=lo,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Gt.T,Gt.T=null;var i=ge.p;ge.p=2;var a=me;me|=4;try{_S(t,e);var s=Xd,r=Jv(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&Qv(o.ownerDocument.documentElement,o)){if(l!==null&&cm(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,u=d&&d.defaultView||window;if(u.getSelection){var p=u.getSelection(),_=o.textContent.length,M=Math.min(l.start,_),g=l.end===void 0?M:Math.min(l.end,_);!p.extend&&M>g&&(r=g,g=M,M=r);var f=W0(o,M),m=W0(o,g);if(f&&m&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==m.node||p.focusOffset!==m.offset)){var v=d.createRange();v.setStart(f.node,f.offset),p.removeAllRanges(),M>g?(p.addRange(v),p.extend(m.node,m.offset)):(v.setEnd(m.node,m.offset),p.addRange(v))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var S=d[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Vu=!!kd,Xd=kd=null}finally{me=a,ge.p=i,Gt.T=n}}e.current=t,sn=2}}function PS(){if(sn===2){sn=0;var e=ss,t=lo,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Gt.T,Gt.T=null;var i=ge.p;ge.p=2;var a=me;me|=4;try{hS(e,t.alternate,t)}finally{me=a,ge.p=i,Gt.T=n}}sn=3}}function BS(){if(sn===4||sn===3){sn=0,LM();var e=ss,t=lo,n=_a,i=TS;t.subtreeFlags&10256||t.flags&10256?sn=5:(sn=0,lo=ss=null,FS(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(as=null),nm(n),t=t.stateNode,ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(Il,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Gt.T,a=ge.p,ge.p=2,Gt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Gt.T=t,ge.p=a}}_a&3&&yf(),Qi(e),a=e.pendingLanes,n&261930&&a&42?e===Gd?pl++:(pl=0,Gd=e):pl=0,ql(0)}}function FS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,kl(t)))}function yf(){return OS(),PS(),BS(),IS()}function IS(){if(sn!==5)return!1;var e=ss,t=Id;Id=0;var n=nm(_a),i=Gt.T,a=ge.p;try{ge.p=32>n?32:n,Gt.T=null,n=zd,zd=null;var s=ss,r=_a;if(sn=0,lo=ss=null,_a=0,me&6)throw Error($(331));var o=me;if(me|=4,MS(s.current),xS(s,s.current,r,n),me=o,ql(0,!1),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(Il,s)}catch{}return!0}finally{ge.p=a,Gt.T=i,FS(e,t)}}function Eg(e,t,n){t=xi(n,t),t=Nd(e.stateNode,t,2),e=is(e,t,2),e!==null&&(Gl(e,2),Qi(e))}function ye(e,t,n){if(e.tag===3)Eg(e,e,n);else for(;t!==null;){if(t.tag===3){Eg(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(as===null||!as.has(i))){e=xi(n,e),n=$x(2),i=is(t,n,2),i!==null&&(tS(n,i,t,e),Gl(i,2),Qi(i));break}}t=t.return}}function sh(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new aE;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Fm=!0,a.add(n),e=cE.bind(null,e,t,n),t.then(e,e))}function cE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,we===e&&(re&n)===n&&(Ye===4||Ye===3&&(re&62914560)===re&&300>ii()-vf?!(me&2)&&co(e,0):Im|=n,oo===re&&(oo=0)),Qi(e)}function zS(e,t){t===0&&(t=Dv()),e=Qs(e,t),e!==null&&(Gl(e,t),Qi(e))}function uE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zS(e,n)}function fE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error($(314))}i!==null&&i.delete(t),zS(e,n)}function hE(e,t){return tm(e,t)}var Pu=null,Ur=null,Hd=!1,Bu=!1,rh=!1,Ja=0;function Qi(e){e!==Ur&&e.next===null&&(Ur===null?Pu=Ur=e:Ur=Ur.next=e),Bu=!0,Hd||(Hd=!0,pE())}function ql(e,t){if(!rh&&Bu){rh=!0;do for(var n=!1,i=Pu;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-si(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Tg(i,s))}else s=re,s=of(i,i===we?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||zl(i,s)||(n=!0,Tg(i,s));i=i.next}while(n);rh=!1}}function dE(){GS()}function GS(){Bu=Hd=!1;var e=0;Ja!==0&&EE()&&(e=Ja);for(var t=ii(),n=null,i=Pu;i!==null;){var a=i.next,s=HS(i,t);s===0?(i.next=null,n===null?Pu=a:n.next=a,a===null&&(Ur=n)):(n=i,(e!==0||s&3)&&(Bu=!0)),i=a}sn!==0&&sn!==5||ql(e),Ja!==0&&(Ja=0)}function HS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-si(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=GM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=we,n=re,n=of(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Of(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||zl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Of(i),nm(n)){case 2:case 8:n=wv;break;case 32:n=vu;break;case 268435456:n=Cv;break;default:n=vu}return i=VS.bind(null,e),n=tm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Of(i),e.callbackPriority=2,e.callbackNode=null,2}function VS(e,t){if(sn!==0&&sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(yf()&&e.callbackNode!==n)return null;var i=re;return i=of(e,e===we?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(RS(e,i,t),HS(e,ii()),e.callbackNode!=null&&e.callbackNode===n?VS.bind(null,e):null)}function Tg(e,t){if(yf())return null;RS(e,t,!0)}function pE(){AE(function(){me&6?tm(Rv,dE):GS()})}function Gm(){if(Ja===0){var e=ao;e===0&&(e=nc,nc<<=1,!(nc&261888)&&(nc=256)),Ja=e}return Ja}function Ag(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yc(""+e)}function Rg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function mE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=Ag((a[Xn]||null).action),r=i.submitter;r&&(t=(t=r[Xn]||null)?Ag(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new lf("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ja!==0){var l=r?Rg(a,r):new FormData(a);Ud(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?Rg(a,r):new FormData(a),Ud(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var oh=0;oh<xd.length;oh++){var lh=xd[oh],gE=lh.toLowerCase(),_E=lh[0].toUpperCase()+lh.slice(1);Pi(gE,"on"+_E)}Pi(tx,"onAnimationEnd");Pi(ex,"onAnimationIteration");Pi(nx,"onAnimationStart");Pi("dblclick","onDoubleClick");Pi("focusin","onFocus");Pi("focusout","onBlur");Pi(Nb,"onTransitionRun");Pi(Ob,"onTransitionStart");Pi(Pb,"onTransitionCancel");Pi(ix,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);js("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));js("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));js("onBeforeInput",["compositionend","keypress","textInput","paste"]);js("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));js("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));js("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function kS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Su(h)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){Su(h)}a.currentTarget=null,s=l}}}}function ie(e,t){var n=t[fd];n===void 0&&(n=t[fd]=new Set);var i=e+"__bubble";n.has(i)||(XS(t,e,2,!1),n.add(i))}function ch(e,t,n){var i=0;t&&(i|=4),XS(n,e,i,t)}var hc="_reactListening"+Math.random().toString(36).slice(2);function Hm(e){if(!e[hc]){e[hc]=!0,Pv.forEach(function(n){n!=="selectionchange"&&(vE.has(n)||ch(n,!1,e),ch(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hc]||(t[hc]=!0,ch("selectionchange",!1,t))}}function XS(e,t,n,i){switch(iy(t)){case 2:var a=qE;break;case 8:a=YE;break;default:a=Wm}n=a.bind(null,t,n,e),a=void 0,!gd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function uh(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=Or(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}kv(function(){var c=s,h=sm(n),d=[];t:{var u=ax.get(e);if(u!==void 0){var p=lf,_=e;switch(e){case"keypress":if(Zc(n)===0)break t;case"keydown":case"keyup":p=fb;break;case"focusin":_="focus",p=zf;break;case"focusout":_="blur",p=zf;break;case"beforeblur":case"afterblur":p=zf;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=P0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$M;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pb;break;case tx:case ex:case nx:p=nb;break;case ix:p=gb;break;case"scroll":case"scrollend":p=QM;break;case"wheel":p=vb;break;case"copy":case"cut":case"paste":p=ab;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=F0;break;case"toggle":case"beforetoggle":p=Sb}var M=(t&4)!==0,g=!M&&(e==="scroll"||e==="scrollend"),f=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,v;m!==null;){var S=m;if(v=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||v===null||f===null||(S=Sl(m,f),S!=null&&M.push(Cl(m,S,v))),g)break;m=m.return}0<M.length&&(u=new p(u,_,null,n,h),d.push({event:u,listeners:M}))}}if(!(t&7)){t:{if(u=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",u&&n!==md&&(_=n.relatedTarget||n.fromElement)&&(Or(_)||_[xo]))break t;if((p||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Or(_):null,_!==null&&(g=Fl(_),M=_.tag,_!==g||M!==5&&M!==27&&M!==6)&&(_=null)):(p=null,_=c),p!==_)){if(M=P0,S="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(M=F0,S="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?u:Ko(p),v=_==null?u:Ko(_),u=new M(S,m+"leave",p,n,h),u.target=g,u.relatedTarget=v,S=null,Or(h)===c&&(M=new M(f,m+"enter",_,n,h),M.target=v,M.relatedTarget=g,S=M),g=S,p&&_)e:{for(M=xE,f=p,m=_,v=0,S=f;S;S=M(S))v++;S=0;for(var w=m;w;w=M(w))S++;for(;0<v-S;)f=M(f),v--;for(;0<S-v;)m=M(m),S--;for(;v--;){if(f===m||m!==null&&f===m.alternate){M=f;break e}f=M(f),m=M(m)}M=null}else M=null;p!==null&&wg(d,u,p,M,!1),_!==null&&g!==null&&wg(d,g,_,M,!0)}}t:{if(u=c?Ko(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var T=H0;else if(G0(u))if(Zv)T=Db;else{T=wb;var R=Rb}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&am(c.elementType)&&(T=H0):T=Cb;if(T&&(T=T(e,c))){jv(d,T,n,h);break t}R&&R(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&pd(u,"number",u.value)}switch(R=c?Ko(c):window,e){case"focusin":(G0(R)||R.contentEditable==="true")&&(Fr=R,_d=c,sl=null);break;case"focusout":sl=_d=Fr=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,q0(d,n,h);break;case"selectionchange":if(Lb)break;case"keydown":case"keyup":q0(d,n,h)}var x;if(lm)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else Br?qv(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Wv&&n.locale!=="ko"&&(Br||A!=="onCompositionStart"?A==="onCompositionEnd"&&Br&&(x=Xv()):(Za=h,rm="value"in Za?Za.value:Za.textContent,Br=!0)),R=Fu(c,A),0<R.length&&(A=new B0(A,e,null,n,h),d.push({event:A,listeners:R}),x?A.data=x:(x=Yv(n),x!==null&&(A.data=x)))),(x=Mb?bb(e,n):Eb(e,n))&&(A=Fu(c,"onBeforeInput"),0<A.length&&(R=new B0("onBeforeInput","beforeinput",null,n,h),d.push({event:R,listeners:A}),R.data=x)),mE(d,e,c,n,h)}kS(d,t)})}function Cl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fu(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Sl(e,n),a!=null&&i.unshift(Cl(e,a,s)),a=Sl(e,t),a!=null&&i.push(Cl(e,a,s))),e.tag===3)return i;e=e.return}return[]}function xE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wg(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Sl(n,s),c!=null&&r.unshift(Cl(n,c,l))):a||(c=Sl(n,s),c!=null&&r.push(Cl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var SE=/\r\n?/g,yE=/\u0000|\uFFFD/g;function Cg(e){return(typeof e=="string"?e:""+e).replace(SE,`
`).replace(yE,"")}function WS(e,t){return t=Cg(t),Cg(e)===t}function be(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||io(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&io(e,""+i);break;case"className":sc(e,"class",i);break;case"tabIndex":sc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":sc(e,n,i);break;case"style":Vv(e,i,s);break;case"data":if(t!=="object"){sc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Yc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&be(e,t,"name",a.name,a,null),be(e,t,"formEncType",a.formEncType,a,null),be(e,t,"formMethod",a.formMethod,a,null),be(e,t,"formTarget",a.formTarget,a,null)):(be(e,t,"encType",a.encType,a,null),be(e,t,"method",a.method,a,null),be(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Yc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ha);break;case"onScroll":i!=null&&ie("scroll",e);break;case"onScrollEnd":i!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error($(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Yc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ie("beforetoggle",e),ie("toggle",e),qc(e,"popover",i);break;case"xlinkActuate":Ji(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ji(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ji(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ji(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ji(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ji(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ji(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ji(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ji(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":qc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ZM.get(n)||n,qc(e,n,i))}}function Vd(e,t,n,i,a,s){switch(n){case"style":Vv(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error($(60));e.innerHTML=n}}break;case"children":typeof i=="string"?io(e,i):(typeof i=="number"||typeof i=="bigint")&&io(e,""+i);break;case"onScroll":i!=null&&ie("scroll",e);break;case"onScrollEnd":i!=null&&ie("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ha);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bv.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[Xn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):qc(e,n,i)}}}function Mn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:be(e,t,s,r,n,null)}}a&&be(e,t,"srcSet",n.srcSet,n,null),i&&be(e,t,"src",n.src,n,null);return;case"input":ie("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error($(137,t));break;default:be(e,t,i,h,n,null)}}zv(e,s,o,l,c,r,a,!1);return;case"select":ie("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:be(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?Yr(e,!!i,t,!1):n!=null&&Yr(e,!!i,n,!0);return;case"textarea":ie("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error($(91));break;default:be(e,t,r,o,n,null)}Hv(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:be(e,t,l,i,n,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(i=0;i<wl.length;i++)ie(wl[i],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:be(e,t,c,i,n,null)}return;default:if(am(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Vd(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&be(e,t,o,i,n,null))}function ME(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||be(e,t,p,null,i,d)}}for(var u in i){var p=i[u];if(d=n[u],i.hasOwnProperty(u)&&(p!=null||d!=null))switch(u){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error($(137,t));break;default:p!==d&&be(e,t,u,p,i,d)}}dd(e,r,o,l,c,h,s,a);return;case"select":p=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||be(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&be(e,t,a,s,i,l)}t=o,n=r,i=p,u!=null?Yr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Yr(e,!!n,t,!0):Yr(e,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:be(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error($(91));break;default:a!==s&&be(e,t,r,a,i,s)}Gv(e,u,p);return;case"option":for(var _ in n)if(u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:be(e,t,_,null,i,u)}for(l in i)if(u=i[l],p=n[l],i.hasOwnProperty(l)&&u!==p&&(u!=null||p!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:be(e,t,l,u,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&be(e,t,M,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error($(137,t));break;default:be(e,t,c,u,i,p)}return;default:if(am(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&Vd(e,t,g,void 0,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u===void 0&&p===void 0||Vd(e,t,h,u,i,p);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&be(e,t,f,null,i,u);for(d in i)u=i[d],p=n[d],!i.hasOwnProperty(d)||u===p||u==null&&p==null||be(e,t,d,u,i,p)}function Dg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&Dg(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&Dg(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kd=null,Xd=null;function Iu(e){return e.nodeType===9?e:e.ownerDocument}function Ug(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Wd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fh=null;function EE(){var e=window.event;return e&&e.type==="popstate"?e===fh?!1:(fh=e,!0):(fh=null,!1)}var YS=typeof setTimeout=="function"?setTimeout:void 0,TE=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,AE=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(e){return Lg.resolve(null).then(e).catch(RE)}:YS;function RE(e){setTimeout(function(){throw e})}function _s(e){return e==="head"}function Ng(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),fo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ml(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ml(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Hl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&ml(e.ownerDocument.body);n=a}while(n);fo(t)}function Og(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function qd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qd(n),im(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function wE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Hl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function CE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bi(e.nextSibling),e===null))return null;return e}function jS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=bi(e.nextSibling),e===null))return null;return e}function Yd(e){return e.data==="$?"||e.data==="$~"}function jd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function DE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function bi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zd=null;function Pg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return bi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Bg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ZS(e,t,n){switch(t=Iu(n),e){case"html":if(e=t.documentElement,!e)throw Error($(452));return e;case"head":if(e=t.head,!e)throw Error($(453));return e;case"body":if(e=t.body,!e)throw Error($(454));return e;default:throw Error($(451))}}function ml(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);im(e)}var Ei=new Map,Fg=new Set;function zu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ca=ge.d;ge.d={f:UE,r:LE,D:NE,C:OE,L:PE,m:BE,X:IE,S:FE,M:zE};function UE(){var e=Ca.f(),t=xf();return e||t}function LE(e){var t=So(e);t!==null&&t.tag===5&&t.type==="form"?Vx(t):Ca.r(e)}var Eo=typeof document>"u"?null:document;function KS(e,t,n){var i=Eo;if(i&&typeof t=="string"&&t){var a=vi(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Fg.has(a)||(Fg.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Mn(t,"link",e),pn(t),i.head.appendChild(t)))}}function NE(e){Ca.D(e),KS("dns-prefetch",e,null)}function OE(e,t){Ca.C(e,t),KS("preconnect",e,t)}function PE(e,t,n){Ca.L(e,t,n);var i=Eo;if(i&&e&&t){var a='link[rel="preload"][as="'+vi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+vi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+vi(n.imageSizes)+'"]')):a+='[href="'+vi(e)+'"]';var s=a;switch(t){case"style":s=uo(e);break;case"script":s=To(e)}Ei.has(s)||(e=ze({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ei.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Yl(s))||t==="script"&&i.querySelector(jl(s))||(t=i.createElement("link"),Mn(t,"link",e),pn(t),i.head.appendChild(t)))}}function BE(e,t){Ca.m(e,t);var n=Eo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+vi(i)+'"][href="'+vi(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=To(e)}if(!Ei.has(s)&&(e=ze({rel:"modulepreload",href:e},t),Ei.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(jl(s)))return}i=n.createElement("link"),Mn(i,"link",e),pn(i),n.head.appendChild(i)}}}function FE(e,t,n){Ca.S(e,t,n);var i=Eo;if(i&&e){var a=qr(i).hoistableStyles,s=uo(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Yl(s)))o.loading=5;else{e=ze({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ei.get(s))&&Vm(e,n);var l=r=i.createElement("link");pn(l),Mn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,iu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function IE(e,t){Ca.X(e,t);var n=Eo;if(n&&e){var i=qr(n).hoistableScripts,a=To(e),s=i.get(a);s||(s=n.querySelector(jl(a)),s||(e=ze({src:e,async:!0},t),(t=Ei.get(a))&&km(e,t),s=n.createElement("script"),pn(s),Mn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function zE(e,t){Ca.M(e,t);var n=Eo;if(n&&e){var i=qr(n).hoistableScripts,a=To(e),s=i.get(a);s||(s=n.querySelector(jl(a)),s||(e=ze({src:e,async:!0,type:"module"},t),(t=Ei.get(a))&&km(e,t),s=n.createElement("script"),pn(s),Mn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function Ig(e,t,n,i){var a=(a=ts.current)?zu(a):null;if(!a)throw Error($(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=uo(n.href),n=qr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=uo(n.href);var s=qr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Yl(e)))&&!s._p&&(r.instance=s,r.state.loading=5),Ei.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ei.set(e,n),s||GE(a,e,n,r.state))),t&&i===null)throw Error($(528,""));return r}if(t&&i!==null)throw Error($(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=To(n),n=qr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error($(444,e))}}function uo(e){return'href="'+vi(e)+'"'}function Yl(e){return'link[rel="stylesheet"]['+e+"]"}function QS(e){return ze({},e,{"data-precedence":e.precedence,precedence:null})}function GE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Mn(t,"link",n),pn(t),e.head.appendChild(t))}function To(e){return'[src="'+vi(e)+'"]'}function jl(e){return"script[async]"+e}function zg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+vi(n.href)+'"]');if(i)return t.instance=i,pn(i),i;var a=ze({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),pn(i),Mn(i,"style",a),iu(i,n.precedence,e),t.instance=i;case"stylesheet":a=uo(n.href);var s=e.querySelector(Yl(a));if(s)return t.state.loading|=4,t.instance=s,pn(s),s;i=QS(n),(a=Ei.get(a))&&Vm(i,a),s=(e.ownerDocument||e).createElement("link"),pn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Mn(s,"link",i),t.state.loading|=4,iu(s,n.precedence,e),t.instance=s;case"script":return s=To(n.src),(a=e.querySelector(jl(s)))?(t.instance=a,pn(a),a):(i=n,(a=Ei.get(s))&&(i=ze({},n),km(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),pn(a),Mn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error($(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,iu(i,n.precedence,e));return t.instance}function iu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function km(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var au=null;function Gg(e,t,n){if(au===null){var i=new Map,a=au=new Map;a.set(n,i)}else a=au,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Hl]||s[vn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function Hg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function HE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function JS(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function VE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=uo(i.href),s=t.querySelector(Yl(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Gu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,pn(s);return}s=t.ownerDocument||t,i=QS(i),(a=Ei.get(a))&&Vm(i,a),s=s.createElement("link"),pn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Mn(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Gu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var hh=0;function kE(e,t){return e.stylesheets&&e.count===0&&su(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&su(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&hh===0&&(hh=62500*bE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&su(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>hh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Gu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)su(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hu=null;function su(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hu=new Map,t.forEach(XE,e),Hu=null,Gu.call(e))}function XE(e,t){if(!(t.state.loading&4)){var n=Hu.get(e);if(n)var i=n.get(null);else{n=new Map,Hu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Gu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Dl={$$typeof:fa,Provider:null,Consumer:null,_currentValue:Ps,_currentValue2:Ps,_threadCount:0};function WE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pf(0),this.hiddenUpdates=Pf(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function $S(e,t,n,i,a,s,r,o,l,c,h,d){return e=new WE(e,t,n,r,l,c,h,d,o),t=1,s===!0&&(t|=24),s=ti(3,null,null,t),e.current=s,s.stateNode=e,t=mm(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},vm(s),e}function ty(e){return e?(e=Gr,e):Gr}function ey(e,t,n,i,a,s){a=ty(a),i.context===null?i.context=a:i.pendingContext=a,i=ns(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=is(e,i,t),n!==null&&(Vn(n,e,t),ol(n,e,t))}function Vg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xm(e,t){Vg(e,t),(e=e.alternate)&&Vg(e,t)}function ny(e){if(e.tag===13||e.tag===31){var t=Qs(e,67108864);t!==null&&Vn(t,e,67108864),Xm(e,67108864)}}function kg(e){if(e.tag===13||e.tag===31){var t=ri();t=em(t);var n=Qs(e,t);n!==null&&Vn(n,e,t),Xm(e,t)}}var Vu=!0;function qE(e,t,n,i){var a=Gt.T;Gt.T=null;var s=ge.p;try{ge.p=2,Wm(e,t,n,i)}finally{ge.p=s,Gt.T=a}}function YE(e,t,n,i){var a=Gt.T;Gt.T=null;var s=ge.p;try{ge.p=8,Wm(e,t,n,i)}finally{ge.p=s,Gt.T=a}}function Wm(e,t,n,i){if(Vu){var a=Kd(i);if(a===null)uh(e,t,i,ku,n),Xg(e,i);else if(ZE(a,e,t,n,i))i.stopPropagation();else if(Xg(e,i),t&4&&-1<jE.indexOf(e)){for(;a!==null;){var s=So(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Rs(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-si(r);o.entanglements[1]|=l,r&=~l}Qi(s),!(me&6)&&(Lu=ii()+500,ql(0))}}break;case 31:case 13:o=Qs(s,2),o!==null&&Vn(o,s,2),xf(),Xm(s,2)}if(s=Kd(i),s===null&&uh(e,t,i,ku,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else uh(e,t,i,null,n)}}function Kd(e){return e=sm(e),qm(e)}var ku=null;function qm(e){if(ku=null,e=Or(e),e!==null){var t=Fl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Mv(t),e!==null)return e;e=null}else if(n===31){if(e=bv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ku=e,null}function iy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(NM()){case Rv:return 2;case wv:return 8;case vu:case OM:return 32;case Cv:return 268435456;default:return 32}default:return 32}}var Qd=!1,rs=null,os=null,ls=null,Ul=new Map,Ll=new Map,qa=[],jE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xg(e,t){switch(e){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":os=null;break;case"mouseover":case"mouseout":ls=null;break;case"pointerover":case"pointerout":Ul.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ll.delete(t.pointerId)}}function Bo(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=So(t),t!==null&&ny(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ZE(e,t,n,i,a){switch(t){case"focusin":return rs=Bo(rs,e,t,n,i,a),!0;case"dragenter":return os=Bo(os,e,t,n,i,a),!0;case"mouseover":return ls=Bo(ls,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return Ul.set(s,Bo(Ul.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Ll.set(s,Bo(Ll.get(s)||null,e,t,n,i,a)),!0}return!1}function ay(e){var t=Or(e.target);if(t!==null){var n=Fl(t);if(n!==null){if(t=n.tag,t===13){if(t=Mv(n),t!==null){e.blockedOn=t,w0(e.priority,function(){kg(n)});return}}else if(t===31){if(t=bv(n),t!==null){e.blockedOn=t,w0(e.priority,function(){kg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ru(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);md=i,n.target.dispatchEvent(i),md=null}else return t=So(n),t!==null&&ny(t),e.blockedOn=n,!1;t.shift()}return!0}function Wg(e,t,n){ru(e)&&n.delete(t)}function KE(){Qd=!1,rs!==null&&ru(rs)&&(rs=null),os!==null&&ru(os)&&(os=null),ls!==null&&ru(ls)&&(ls=null),Ul.forEach(Wg),Ll.forEach(Wg)}function dc(e,t){e.blockedOn===t&&(e.blockedOn=null,Qd||(Qd=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,KE)))}var pc=null;function qg(e){pc!==e&&(pc=e,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(qm(i||n)===null)continue;break}var s=So(n);s!==null&&(e.splice(t,3),t-=3,Ud(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function fo(e){function t(l){return dc(l,e)}rs!==null&&dc(rs,e),os!==null&&dc(os,e),ls!==null&&dc(ls,e),Ul.forEach(t),Ll.forEach(t);for(var n=0;n<qa.length;n++){var i=qa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<qa.length&&(n=qa[0],n.blockedOn===null);)ay(n),n.blockedOn===null&&qa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Xn]||null;if(typeof s=="function")r||qg(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Xn]||null)o=r.formAction;else if(qm(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),qg(n)}}}function sy(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Ym(e){this._internalRoot=e}Mf.prototype.render=Ym.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));var n=t.current,i=ri();ey(n,i,e,t,null,null)};Mf.prototype.unmount=Ym.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ey(e.current,2,null,e,null,null),xf(),t[xo]=null}};function Mf(e){this._internalRoot=e}Mf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ov();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qa.length&&t!==0&&t<qa[n].priority;n++);qa.splice(n,0,e),n===0&&ay(e)}};var Yg=Sv.version;if(Yg!=="19.2.5")throw Error($(527,Yg,"19.2.5"));ge.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=AM(t),e=e!==null?Ev(e):null,e=e===null?null:e.stateNode,e};var QE={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:Gt,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{Il=mc.inject(QE),ai=mc}catch{}}sf.createRoot=function(e,t){if(!yv(e))throw Error($(299));var n=!1,i="",a=Kx,s=Qx,r=Jx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=$S(e,1,!1,null,null,n,i,null,a,s,r,sy),e[xo]=t.current,Hm(e),new Ym(t)};sf.hydrateRoot=function(e,t,n){if(!yv(e))throw Error($(299));var i=!1,a="",s=Kx,r=Qx,o=Jx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=$S(e,1,!0,t,n??null,i,a,l,s,r,o,sy),t.context=ty(null),n=t.current,i=ri(),i=em(i),a=ns(i),a.callback=null,is(n,a,i),n=i,t.current.lanes=n,Gl(t,n),Qi(t),e[xo]=t.current,Hm(e),new Mf(t)};sf.version="19.2.5";function ry(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ry)}catch(e){console.error(e)}}ry(),pv.exports=sf;var JE=pv.exports;const $E=eM(JE);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jm="184",t1=0,jg=1,e1=2,ou=1,n1=2,$o=3,ps=0,kn=1,ua=2,va=0,$r=1,ho=2,Zg=3,Kg=4,i1=5,Us=100,a1=101,s1=102,r1=103,o1=104,l1=200,c1=201,u1=202,f1=203,Jd=204,$d=205,h1=206,d1=207,p1=208,m1=209,g1=210,_1=211,v1=212,x1=213,S1=214,tp=0,ep=1,np=2,po=3,ip=4,ap=5,sp=6,rp=7,oy=0,y1=1,M1=2,Yi=0,ly=1,cy=2,uy=3,fy=4,hy=5,dy=6,py=7,my=300,qs=301,mo=302,dh=303,ph=304,bf=306,op=1e3,pa=1001,lp=1002,yn=1003,b1=1004,gc=1005,Dn=1006,mh=1007,Ns=1008,ei=1009,gy=1010,_y=1011,Nl=1012,Zm=1013,Zi=1014,Xi=1015,Ra=1016,Km=1017,Qm=1018,Ol=1020,vy=35902,xy=35899,Sy=1021,yy=1022,Li=1023,wa=1026,Os=1027,My=1028,Jm=1029,Ys=1030,$m=1031,t0=1033,lu=33776,cu=33777,uu=33778,fu=33779,cp=35840,up=35841,fp=35842,hp=35843,dp=36196,pp=37492,mp=37496,gp=37488,_p=37489,Xu=37490,vp=37491,xp=37808,Sp=37809,yp=37810,Mp=37811,bp=37812,Ep=37813,Tp=37814,Ap=37815,Rp=37816,wp=37817,Cp=37818,Dp=37819,Up=37820,Lp=37821,Np=36492,Op=36494,Pp=36495,Bp=36283,Fp=36284,Wu=36285,Ip=36286,E1=3200,zp=0,T1=1,Ya="",pi="srgb",qu="srgb-linear",Yu="linear",ve="srgb",ur=7680,Qg=519,A1=512,R1=513,w1=514,e0=515,C1=516,D1=517,n0=518,U1=519,Gp=35044,Jg="300 es",Wi=2e3,Pl=2001;function L1(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ju(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function N1(){const e=ju("canvas");return e.style.display="block",e}const $g={};function Zu(...e){const t="THREE."+e.shift();console.log(t,...e)}function by(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function It(...e){e=by(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function le(...e){e=by(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Hp(...e){const t=e.join(" ");t in $g||($g[t]=!0,It(...e))}function O1(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const P1={[tp]:ep,[np]:sp,[ip]:rp,[po]:ap,[ep]:tp,[sp]:np,[rp]:ip,[ap]:po};class $s{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let t_=1234567;const gl=Math.PI/180,Bl=180/Math.PI;function xa(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[e&255]+Rn[e>>8&255]+Rn[e>>16&255]+Rn[e>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[n&63|128]+Rn[n>>8&255]+"-"+Rn[n>>16&255]+Rn[n>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function se(e,t,n){return Math.max(t,Math.min(n,e))}function i0(e,t){return(e%t+t)%t}function B1(e,t,n,i,a){return i+(e-t)*(a-i)/(n-t)}function F1(e,t,n){return e!==t?(n-e)/(t-e):0}function _l(e,t,n){return(1-n)*e+n*t}function I1(e,t,n,i){return _l(e,t,1-Math.exp(-n*i))}function z1(e,t=1){return t-Math.abs(i0(e,t*2)-t)}function G1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function H1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function V1(e,t){return e+Math.floor(Math.random()*(t-e+1))}function k1(e,t){return e+Math.random()*(t-e)}function X1(e){return e*(.5-Math.random())}function W1(e){e!==void 0&&(t_=e);let t=t_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function q1(e){return e*gl}function Y1(e){return e*Bl}function j1(e){return(e&e-1)===0&&e!==0}function Z1(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function K1(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Q1(e,t,n,i,a){const s=Math.cos,r=Math.sin,o=s(n/2),l=r(n/2),c=s((t+i)/2),h=r((t+i)/2),d=s((t-i)/2),u=r((t-i)/2),p=s((i-t)/2),_=r((i-t)/2);switch(a){case"XYX":e.set(o*h,l*d,l*u,o*c);break;case"YZY":e.set(l*u,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*u,o*h,o*c);break;case"XZX":e.set(o*h,l*_,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*_,o*c);break;case"ZYZ":e.set(l*_,l*p,o*h,o*c);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ui(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Se(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const fr={DEG2RAD:gl,RAD2DEG:Bl,generateUUID:xa,clamp:se,euclideanModulo:i0,mapLinear:B1,inverseLerp:F1,lerp:_l,damp:I1,pingpong:z1,smoothstep:G1,smootherstep:H1,randInt:V1,randFloat:k1,randFloatSpread:X1,seededRandom:W1,degToRad:q1,radToDeg:Y1,isPowerOfTwo:j1,ceilPowerOfTwo:Z1,floorPowerOfTwo:K1,setQuaternionFromProperEuler:Q1,normalize:Se,denormalize:Ui},p0=class p0{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=se(this.x,t.x,n.x),this.y=se(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=se(this.x,t,n),this.y=se(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};p0.prototype.isVector2=!0;let jt=p0;class Ao{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3],u=s[r+0],p=s[r+1],_=s[r+2],M=s[r+3];if(d!==M||l!==u||c!==p||h!==_){let g=l*u+c*p+h*_+d*M;g<0&&(u=-u,p=-p,_=-_,M=-M,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),v=Math.sin(m);f=Math.sin(f*m)/v,o=Math.sin(o*m)/v,l=l*f+u*o,c=c*f+p*o,h=h*f+_*o,d=d*f+M*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+_*o,d=d*f+M*o;const m=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=m,c*=m,h*=m,d*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=s[r],u=s[r+1],p=s[r+2],_=s[r+3];return t[n]=o*_+h*d+l*p-c*u,t[n+1]=l*_+h*u+c*d-o*p,t[n+2]=c*_+h*p+o*u-l*d,t[n+3]=h*_-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),d=o(s/2),u=l(i/2),p=l(a/2),_=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"YXZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"ZXY":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"ZYX":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"YZX":this._x=u*h*d+c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d-u*p*_;break;case"XZY":this._x=u*h*d-c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d+u*p*_;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const m0=class m0{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(e_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(e_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),h=2*(o*n-s*a),d=2*(s*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-s*d,this.z=a+l*d+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=se(this.x,t.x,n.x),this.y=se(this.y,t.y,n.y),this.z=se(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=se(this.x,t,n),this.y=se(this.y,t,n),this.z=se(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return gh.copy(this).projectOnVector(t),this.sub(gh)}reflect(t){return this.sub(gh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};m0.prototype.isVector3=!0;let O=m0;const gh=new O,e_=new Ao,g0=class g0{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],_=i[8],M=a[0],g=a[3],f=a[6],m=a[1],v=a[4],S=a[7],w=a[2],T=a[5],R=a[8];return s[0]=r*M+o*m+l*w,s[3]=r*g+o*v+l*T,s[6]=r*f+o*S+l*R,s[1]=c*M+h*m+d*w,s[4]=c*g+h*v+d*T,s[7]=c*f+h*S+d*R,s[2]=u*M+p*m+_*w,s[5]=u*g+p*v+_*T,s[8]=u*f+p*S+_*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*s,p=c*s-r*l,_=n*d+i*u+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=d*M,t[1]=(a*c-h*i)*M,t[2]=(o*i-a*r)*M,t[3]=u*M,t[4]=(h*n-a*l)*M,t[5]=(a*s-o*n)*M,t[6]=p*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*s)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(_h.makeScale(t,n)),this}rotate(t){return this.premultiply(_h.makeRotation(-t)),this}translate(t,n){return this.premultiply(_h.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};g0.prototype.isMatrix3=!0;let Yt=g0;const _h=new Yt,n_=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),i_=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J1(){const e={enabled:!0,workingColorSpace:qu,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ve&&(a.r=Sa(a.r),a.g=Sa(a.g),a.b=Sa(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ve&&(a.r=to(a.r),a.g=to(a.g),a.b=to(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ya?Yu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return Hp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return Hp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[qu]:{primaries:t,whitePoint:i,transfer:Yu,toXYZ:n_,fromXYZ:i_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:n_,fromXYZ:i_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),e}const ce=J1();function Sa(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function to(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let hr;class $1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hr===void 0&&(hr=ju("canvas")),hr.width=t.width,hr.height=t.height;const a=hr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=hr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ju("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Sa(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Sa(n[i]/255)*255):n[i]=Sa(n[i]);return{data:n,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tT=0;class a0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=xa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(vh(a[r].image)):s.push(vh(a[r]))}else s=vh(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function vh(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?$1.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let eT=0;const xh=new O;class Un extends $s{constructor(t=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,i=pa,a=pa,s=Dn,r=Ns,o=Li,l=ei,c=Un.DEFAULT_ANISOTROPY,h=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=xa(),this.name="",this.source=new a0(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){It(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){It(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==my)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case op:t.x=t.x-Math.floor(t.x);break;case pa:t.x=t.x<0?0:1;break;case lp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case op:t.y=t.y-Math.floor(t.y);break;case pa:t.y=t.y<0?0:1;break;case lp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=my;Un.DEFAULT_ANISOTROPY=1;const _0=class _0{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],_=l[9],M=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(p+1)/2,w=(f+1)/2,T=(h+u)/4,R=(d+M)/4,x=(_+g)/4;return v>S&&v>w?v<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(v),a=T/i,s=R/i):S>w?S<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(S),i=T/a,s=x/a):w<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(w),i=R/s,a=x/s),this.set(i,a,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(d-M)/m,this.z=(u-h)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=se(this.x,t.x,n.x),this.y=se(this.y,t.y,n.y),this.z=se(this.z,t.z,n.z),this.w=se(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=se(this.x,t,n),this.y=se(this.y,t,n),this.z=se(this.z,t,n),this.w=se(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_0.prototype.isVector4=!0;let je=_0;class nT extends $s{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new je(0,0,t,n),this.scissorTest=!1,this.viewport=new je(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new Un(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new a0(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends nT{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Ey extends Un{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class iT extends Un{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nf=class nf{constructor(t,n,i,a,s,r,o,l,c,h,d,u,p,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,h,d,u,p,_,M,g)}set(t,n,i,a,s,r,o,l,c,h,d,u,p,_,M,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nf().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,a=1/dr.setFromMatrixColumn(t,0).length(),s=1/dr.setFromMatrixColumn(t,1).length(),r=1/dr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*h,p=r*d,_=o*h,M=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,_=c*h,M=c*d;n[0]=u+M*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-_,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,_=c*h,M=c*d;n[0]=u-M*o,n[4]=-r*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*h,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const u=r*h,p=r*d,_=o*h,M=o*d;n[0]=l*h,n[4]=_*c-p,n[8]=u*c+M,n[1]=l*d,n[5]=M*c+u,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,_=o*l,M=o*c;n[0]=l*h,n[4]=M-u*d,n[8]=_*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+_,n[10]=u-M*d}else if(t.order==="XZY"){const u=r*l,p=r*c,_=o*l,M=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+M,n[5]=r*h,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*h,n[10]=M*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(aT,t,sT)}lookAt(t,n,i){const a=this.elements;return Zn.subVectors(t,n),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Oa.crossVectors(i,Zn),Oa.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Oa.crossVectors(i,Zn)),Oa.normalize(),_c.crossVectors(Zn,Oa),a[0]=Oa.x,a[4]=_c.x,a[8]=Zn.x,a[1]=Oa.y,a[5]=_c.y,a[9]=Zn.y,a[2]=Oa.z,a[6]=_c.z,a[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],_=i[2],M=i[6],g=i[10],f=i[14],m=i[3],v=i[7],S=i[11],w=i[15],T=a[0],R=a[4],x=a[8],A=a[12],U=a[1],D=a[5],I=a[9],q=a[13],Q=a[2],B=a[6],C=a[10],L=a[14],k=a[3],K=a[7],rt=a[11],Tt=a[15];return s[0]=r*T+o*U+l*Q+c*k,s[4]=r*R+o*D+l*B+c*K,s[8]=r*x+o*I+l*C+c*rt,s[12]=r*A+o*q+l*L+c*Tt,s[1]=h*T+d*U+u*Q+p*k,s[5]=h*R+d*D+u*B+p*K,s[9]=h*x+d*I+u*C+p*rt,s[13]=h*A+d*q+u*L+p*Tt,s[2]=_*T+M*U+g*Q+f*k,s[6]=_*R+M*D+g*B+f*K,s[10]=_*x+M*I+g*C+f*rt,s[14]=_*A+M*q+g*L+f*Tt,s[3]=m*T+v*U+S*Q+w*k,s[7]=m*R+v*D+S*B+w*K,s[11]=m*x+v*I+S*C+w*rt,s[15]=m*A+v*q+S*L+w*Tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],_=t[3],M=t[7],g=t[11],f=t[15],m=l*p-c*u,v=o*p-c*d,S=o*u-l*d,w=r*p-c*h,T=r*u-l*h,R=r*d-o*h;return n*(M*m-g*v+f*S)-i*(_*m-g*w+f*T)+a*(_*v-M*w+f*R)-s*(_*S-M*T+g*R)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],_=t[12],M=t[13],g=t[14],f=t[15],m=n*o-i*r,v=n*l-a*r,S=n*c-s*r,w=i*l-a*o,T=i*c-s*o,R=a*c-s*l,x=h*M-d*_,A=h*g-u*_,U=h*f-p*_,D=d*g-u*M,I=d*f-p*M,q=u*f-p*g,Q=m*q-v*I+S*D+w*U-T*A+R*x;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/Q;return t[0]=(o*q-l*I+c*D)*B,t[1]=(a*I-i*q-s*D)*B,t[2]=(M*R-g*T+f*w)*B,t[3]=(u*T-d*R-p*w)*B,t[4]=(l*U-r*q-c*A)*B,t[5]=(n*q-a*U+s*A)*B,t[6]=(g*S-_*R-f*v)*B,t[7]=(h*R-u*S+p*v)*B,t[8]=(r*I-o*U+c*x)*B,t[9]=(i*U-n*I-s*x)*B,t[10]=(_*T-M*S+f*m)*B,t[11]=(d*S-h*T-p*m)*B,t[12]=(o*A-r*D-l*x)*B,t[13]=(n*D-i*A+a*x)*B,t[14]=(M*v-_*w-g*m)*B,t[15]=(h*w-d*v+u*m)*B,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,h=r+r,d=o+o,u=s*c,p=s*h,_=s*d,M=r*h,g=r*d,f=o*d,m=l*c,v=l*h,S=l*d,w=i.x,T=i.y,R=i.z;return a[0]=(1-(M+f))*w,a[1]=(p+S)*w,a[2]=(_-v)*w,a[3]=0,a[4]=(p-S)*T,a[5]=(1-(u+f))*T,a[6]=(g+m)*T,a[7]=0,a[8]=(_+v)*R,a[9]=(g-m)*R,a[10]=(1-(u+M))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let r=dr.set(a[0],a[1],a[2]).length();const o=dr.set(a[4],a[5],a[6]).length(),l=dr.set(a[8],a[9],a[10]).length();s<0&&(r=-r),Ri.copy(this);const c=1/r,h=1/o,d=1/l;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=d,Ri.elements[9]*=d,Ri.elements[10]*=d,n.setFromRotationMatrix(Ri),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=Wi,l=!1){const c=this.elements,h=2*s/(n-t),d=2*s/(i-a),u=(n+t)/(n-t),p=(i+a)/(i-a);let _,M;if(l)_=s/(r-s),M=r*s/(r-s);else if(o===Wi)_=-(r+s)/(r-s),M=-2*r*s/(r-s);else if(o===Pl)_=-r/(r-s),M=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Wi,l=!1){const c=this.elements,h=2/(n-t),d=2/(i-a),u=-(n+t)/(n-t),p=-(i+a)/(i-a);let _,M;if(l)_=1/(r-s),M=r/(r-s);else if(o===Wi)_=-2/(r-s),M=-(r+s)/(r-s);else if(o===Pl)_=-1/(r-s),M=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};nf.prototype.isMatrix4=!0;let Ie=nf;const dr=new O,Ri=new Ie,aT=new O(0,0,0),sT=new O(1,1,1),Oa=new O,_c=new O,Zn=new O,a_=new Ie,s_=new Ao;class ms{constructor(t=0,n=0,i=0,a=ms.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],u=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-se(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return a_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(a_,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return s_.setFromEuler(this),this.setFromQuaternion(s_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ms.DEFAULT_ORDER="XYZ";class s0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rT=0;const r_=new O,pr=new Ao,na=new Ie,vc=new O,Fo=new O,oT=new O,lT=new Ao,o_=new O(1,0,0),l_=new O(0,1,0),c_=new O(0,0,1),u_={type:"added"},cT={type:"removed"},mr={type:"childadded",child:null},Sh={type:"childremoved",child:null};class gn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const t=new O,n=new ms,i=new Ao,a=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Yt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new s0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return pr.setFromAxisAngle(t,n),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,n){return pr.setFromAxisAngle(t,n),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(o_,t)}rotateY(t){return this.rotateOnAxis(l_,t)}rotateZ(t){return this.rotateOnAxis(c_,t)}translateOnAxis(t,n){return r_.copy(t).applyQuaternion(this.quaternion),this.position.add(r_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(o_,t)}translateY(t){return this.translateOnAxis(l_,t)}translateZ(t){return this.translateOnAxis(c_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?vc.copy(t):vc.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Fo,vc,this.up):na.lookAt(vc,Fo,this.up),this.quaternion.setFromRotationMatrix(na),a&&(na.extractRotation(a.matrixWorld),pr.setFromRotationMatrix(na),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(u_),mr.child=t,this.dispatchEvent(mr),mr.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(cT),Sh.child=t,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(u_),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,oT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,lT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=a,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}gn.DEFAULT_UP=new O(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xr extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uT={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const M of t.hand.values()){const g=n.getJointPose(M,i),f=this._getHandJoint(c,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uT)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Xr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const Ty={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Mh(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Qt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=ce.workingColorSpace){return this.r=t,this.g=n,this.b=i,ce.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=ce.workingColorSpace){if(t=i0(t,1),n=se(n,0,1),i=se(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Mh(r,s,t+1/3),this.g=Mh(r,s,t),this.b=Mh(r,s,t-1/3)}return ce.colorSpaceToWorking(this,a),this}setStyle(t,n=pi){function i(s){s!==void 0&&parseFloat(s)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:It("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=pi){const i=Ty[t.toLowerCase()];return i!==void 0?this.setHex(i,n):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return ce.workingToColorSpace(wn.copy(this),t),Math.round(se(wn.r*255,0,255))*65536+Math.round(se(wn.g*255,0,255))*256+Math.round(se(wn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ce.workingColorSpace){ce.workingToColorSpace(wn.copy(this),n);const i=wn.r,a=wn.g,s=wn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=ce.workingColorSpace){return ce.workingToColorSpace(wn.copy(this),n),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=pi){ce.workingToColorSpace(wn.copy(this),t);const n=wn.r,i=wn.g,a=wn.b;return t!==pi?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Pa),this.setHSL(Pa.h+t,Pa.s+n,Pa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Pa),t.getHSL(xc);const i=_l(Pa.h,xc.h,n),a=_l(Pa.s,xc.s,n),s=_l(Pa.l,xc.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Qt;Qt.NAMES=Ty;class r0{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=n}clone(){return new r0(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fT extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ms,this.environmentIntensity=1,this.environmentRotation=new ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const wi=new O,ia=new O,bh=new O,aa=new O,gr=new O,_r=new O,f_=new O,Eh=new O,Th=new O,Ah=new O,Rh=new je,wh=new je,Ch=new je;class yi{constructor(t=new O,n=new O,i=new O){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),wi.subVectors(t,n),a.cross(wi);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){wi.subVectors(a,n),ia.subVectors(i,n),bh.subVectors(t,n);const r=wi.dot(wi),o=wi.dot(ia),l=wi.dot(bh),c=ia.dot(ia),h=ia.dot(bh),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,_=(r*h-o*l)*u;return s.set(1-p-_,_,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,aa)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,aa.x),l.addScaledVector(r,aa.y),l.addScaledVector(o,aa.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Rh.setScalar(0),wh.setScalar(0),Ch.setScalar(0),Rh.fromBufferAttribute(t,n),wh.fromBufferAttribute(t,i),Ch.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Rh,s.x),r.addScaledVector(wh,s.y),r.addScaledVector(Ch,s.z),r}static isFrontFacing(t,n,i,a){return wi.subVectors(i,n),ia.subVectors(t,n),wi.cross(ia).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),wi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return yi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return yi.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;gr.subVectors(a,i),_r.subVectors(s,i),Eh.subVectors(t,i);const l=gr.dot(Eh),c=_r.dot(Eh);if(l<=0&&c<=0)return n.copy(i);Th.subVectors(t,a);const h=gr.dot(Th),d=_r.dot(Th);if(h>=0&&d<=h)return n.copy(a);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(gr,r);Ah.subVectors(t,s);const p=gr.dot(Ah),_=_r.dot(Ah);if(_>=0&&p<=_)return n.copy(s);const M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(_r,o);const g=h*_-p*d;if(g<=0&&d-h>=0&&p-_>=0)return f_.subVectors(s,a),o=(d-h)/(d-h+(p-_)),n.copy(a).addScaledVector(f_,o);const f=1/(g+M+u);return r=M*f,o=u*f,n.copy(i).addScaledVector(gr,r).addScaledVector(_r,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Zl{constructor(t=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ci.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ci.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Ci.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ci):Ci.fromBufferAttribute(s,r),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sc.copy(i.boundingBox)),Sc.applyMatrix4(t.matrixWorld),this.union(Sc)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),yc.subVectors(this.max,Io),vr.subVectors(t.a,Io),xr.subVectors(t.b,Io),Sr.subVectors(t.c,Io),Ba.subVectors(xr,vr),Fa.subVectors(Sr,xr),Ss.subVectors(vr,Sr);let n=[0,-Ba.z,Ba.y,0,-Fa.z,Fa.y,0,-Ss.z,Ss.y,Ba.z,0,-Ba.x,Fa.z,0,-Fa.x,Ss.z,0,-Ss.x,-Ba.y,Ba.x,0,-Fa.y,Fa.x,0,-Ss.y,Ss.x,0];return!Dh(n,vr,xr,Sr,yc)||(n=[1,0,0,0,1,0,0,0,1],!Dh(n,vr,xr,Sr,yc))?!1:(Mc.crossVectors(Ba,Fa),n=[Mc.x,Mc.y,Mc.z],Dh(n,vr,xr,Sr,yc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sa=[new O,new O,new O,new O,new O,new O,new O,new O],Ci=new O,Sc=new Zl,vr=new O,xr=new O,Sr=new O,Ba=new O,Fa=new O,Ss=new O,Io=new O,yc=new O,Mc=new O,ys=new O;function Dh(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){ys.fromArray(e,s);const o=a.x*Math.abs(ys.x)+a.y*Math.abs(ys.y)+a.z*Math.abs(ys.z),l=t.dot(ys),c=n.dot(ys),h=i.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const $e=new O,bc=new jt;let hT=0;class Bn extends $s{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Gp,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bc.fromBufferAttribute(this,n),bc.applyMatrix3(t),this.setXY(n,bc.x,bc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)$e.fromBufferAttribute(this,n),$e.applyMatrix3(t),this.setXYZ(n,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)$e.fromBufferAttribute(this,n),$e.applyMatrix4(t),this.setXYZ(n,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)$e.fromBufferAttribute(this,n),$e.applyNormalMatrix(t),this.setXYZ(n,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)$e.fromBufferAttribute(this,n),$e.transformDirection(t),this.setXYZ(n,$e.x,$e.y,$e.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Se(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ui(n,this.array)),n}setX(t,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ui(n,this.array)),n}setY(t,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ui(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ui(n,this.array)),n}setW(t,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=Se(n,this.array),i=Se(i,this.array),a=Se(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=Se(n,this.array),i=Se(i,this.array),a=Se(a,this.array),s=Se(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gp&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ay extends Bn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Ry extends Bn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class bn extends Bn{constructor(t,n,i){super(new Float32Array(t),n,i)}}const dT=new Zl,zo=new O,Uh=new O;class Kl{constructor(t=new O,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):dT.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(zo,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(Uh)),this.expandByPoint(zo.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let pT=0;const hi=new Ie,Lh=new gn,yr=new O,Kn=new Zl,Go=new Zl,hn=new O;class Tn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(L1(t)?Ry:Ay)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,n,i){return hi.makeTranslation(t,n,i),this.applyMatrix4(hi),this}scale(t,n,i){return hi.makeScale(t,n,i),this.applyMatrix4(hi),this}lookAt(t){return Lh.lookAt(t),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new bn(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];Go.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Kn.min,Go.min),Kn.expandByPoint(hn),hn.addVectors(Kn.max,Go.max),Kn.expandByPoint(hn)):(Kn.expandByPoint(Go.min),Kn.expandByPoint(Go.max))}Kn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)hn.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(hn));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)hn.fromBufferAttribute(o,c),l&&(yr.fromBufferAttribute(t,c),hn.add(yr)),a=Math.max(a,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new O,l[x]=new O;const c=new O,h=new O,d=new O,u=new jt,p=new jt,_=new jt,M=new O,g=new O;function f(x,A,U){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,U),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,A),_.fromBufferAttribute(s,U),h.sub(c),d.sub(c),p.sub(u),_.sub(u);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(D),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(D),o[x].add(M),o[A].add(M),o[U].add(M),l[x].add(g),l[A].add(g),l[U].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let x=0,A=m.length;x<A;++x){const U=m[x],D=U.start,I=U.count;for(let q=D,Q=D+I;q<Q;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const v=new O,S=new O,w=new O,T=new O;function R(x){w.fromBufferAttribute(a,x),T.copy(w);const A=o[x];v.copy(A),v.sub(w.multiplyScalar(w.dot(A))).normalize(),S.crossVectors(T,A);const D=S.dot(l[x])<0?-1:1;r.setXYZW(x,v.x,v.y,v.z,D)}for(let x=0,A=m.length;x<A;++x){const U=m[x],D=U.start,I=U.count;for(let q=D,Q=D+I;q<Q;q+=3)R(t.getX(q+0)),R(t.getX(q+1)),R(t.getX(q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const a=new O,s=new O,r=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,p=t.count;u<p;u+=3){const _=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),r.fromBufferAttribute(n,g),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)hn.fromBufferAttribute(t,n),hn.normalize(),t.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,_=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)u[_++]=c[p++]}return new Bn(u,h,d)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mT{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Gp,this.updateRanges=[],this.version=0,this.uuid=xa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let a=0,s=this.stride;a<s;a++)this.array[t+a]=n.array[i+a];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new O;class Ku{constructor(t,n,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Ln.fromBufferAttribute(this,n),Ln.applyMatrix4(t),this.setXYZ(n,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ln.fromBufferAttribute(this,n),Ln.applyNormalMatrix(t),this.setXYZ(n,Ln.x,Ln.y,Ln.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ln.fromBufferAttribute(this,n),Ln.transformDirection(t),this.setXYZ(n,Ln.x,Ln.y,Ln.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Se(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Ui(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Ui(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Ui(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Ui(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=Se(n,this.array),i=Se(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Se(n,this.array),i=Se(i,this.array),a=Se(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=Se(n,this.array),i=Se(i,this.array),a=Se(a,this.array),s=Se(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Zu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return new Bn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ku(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let gT=0;class vs extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=$r,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=$d,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){It(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){It(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(i.blending=this.blending),this.side!==ps&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jd&&(i.blendSrc=this.blendSrc),this.blendDst!==$d&&(i.blendDst=this.blendDst),this.blendEquation!==Us&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wy extends vs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Mr;const Ho=new O,br=new O,Er=new O,Tr=new jt,Vo=new jt,Cy=new Ie,Ec=new O,ko=new O,Tc=new O,h_=new jt,Nh=new jt,d_=new jt;class _T extends gn{constructor(t=new wy){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new Tn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mT(n,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new Ku(i,3,0,!1)),Mr.setAttribute("uv",new Ku(i,2,3,!1))}this.geometry=Mr,this.material=t,this.center=new jt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),Cy.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Er.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const r=this.center;Ac(Ec.set(-.5,-.5,0),Er,r,br,a,s),Ac(ko.set(.5,-.5,0),Er,r,br,a,s),Ac(Tc.set(.5,.5,0),Er,r,br,a,s),h_.set(0,0),Nh.set(1,0),d_.set(1,1);let o=t.ray.intersectTriangle(Ec,ko,Tc,!1,Ho);if(o===null&&(Ac(ko.set(-.5,.5,0),Er,r,br,a,s),Nh.set(0,1),o=t.ray.intersectTriangle(Ec,Tc,ko,!1,Ho),o===null))return;const l=t.ray.origin.distanceTo(Ho);l<t.near||l>t.far||n.push({distance:l,point:Ho.clone(),uv:yi.getInterpolation(Ho,Ec,ko,Tc,h_,Nh,d_,new jt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ac(e,t,n,i,a,s){Tr.subVectors(e,n).addScalar(.5).multiply(i),a!==void 0?(Vo.x=s*Tr.x-a*Tr.y,Vo.y=a*Tr.x+s*Tr.y):Vo.copy(Tr),e.copy(t),e.x+=Vo.x,e.y+=Vo.y,e.applyMatrix4(Cy)}const ra=new O,Oh=new O,Rc=new O,Ia=new O,Ph=new O,wc=new O,Bh=new O;class Ef{constructor(t=new O,n=new O(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ra.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,n),ra.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Oh.copy(t).add(n).multiplyScalar(.5),Rc.copy(n).sub(t).normalize(),Ia.copy(this.origin).sub(Oh);const s=t.distanceTo(n)*.5,r=-this.direction.dot(Rc),o=Ia.dot(this.direction),l=-Ia.dot(Rc),c=Ia.lengthSq(),h=Math.abs(1-r*r);let d,u,p,_;if(h>0)if(d=r*l-o,u=r*o-l,_=s*h,d>=0)if(u>=-_)if(u<=_){const M=1/h;d*=M,u*=M,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Oh).addScaledVector(Rc,u),p}intersectSphere(t,n){ra.subVectors(t.center,this.origin);const i=ra.dot(this.direction),a=ra.dot(ra)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,n,i,a,s){Ph.subVectors(n,t),wc.subVectors(i,t),Bh.crossVectors(Ph,wc);let r=this.direction.dot(Bh),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ia.subVectors(this.origin,t);const l=o*this.direction.dot(wc.crossVectors(Ia,wc));if(l<0)return null;const c=o*this.direction.dot(Ph.cross(Ia));if(c<0||l+c>r)return null;const h=-o*Ia.dot(Bh);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qu extends vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.combine=oy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const p_=new Ie,Ms=new Ef,Cc=new Kl,m_=new O,Dc=new O,Uc=new O,Lc=new O,Fh=new O,Nc=new O,g_=new O,Oc=new O;class Cn extends gn{constructor(t=new Tn,n=new Qu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){Nc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Fh.fromBufferAttribute(d,t),r?Nc.addScaledVector(Fh,h):Nc.addScaledVector(Fh.sub(n),h))}n.add(Nc)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(s),Ms.copy(t.ray).recast(t.near),!(Cc.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Cc,m_)===null||Ms.origin.distanceToSquared(m_)>(t.far-t.near)**2))&&(p_.copy(s).invert(),Ms.copy(t.ray).applyMatrix4(p_),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ms)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,M=u.length;_<M;_++){const g=u[_],f=r[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,w=v;S<w;S+=3){const T=o.getX(S),R=o.getX(S+1),x=o.getX(S+2);a=Pc(this,f,t,i,c,h,d,T,R,x),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=_,f=M;g<f;g+=3){const m=o.getX(g),v=o.getX(g+1),S=o.getX(g+2);a=Pc(this,r,t,i,c,h,d,m,v,S),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,M=u.length;_<M;_++){const g=u[_],f=r[g.materialIndex],m=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,w=v;S<w;S+=3){const T=S,R=S+1,x=S+2;a=Pc(this,f,t,i,c,h,d,T,R,x),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=_,f=M;g<f;g+=3){const m=g,v=g+1,S=g+2;a=Pc(this,r,t,i,c,h,d,m,v,S),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function vT(e,t,n,i,a,s,r,o){let l;if(t.side===kn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===ps,o),l===null)return null;Oc.copy(o),Oc.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Oc);return c<n.near||c>n.far?null:{distance:c,point:Oc.clone(),object:e}}function Pc(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,Dc),e.getVertexPosition(l,Uc),e.getVertexPosition(c,Lc);const h=vT(e,t,n,i,Dc,Uc,Lc,g_);if(h){const d=new O;yi.getBarycoord(g_,Dc,Uc,Lc,d),a&&(h.uv=yi.getInterpolatedAttribute(a,o,l,c,d,new jt)),s&&(h.uv1=yi.getInterpolatedAttribute(s,o,l,c,d,new jt)),r&&(h.normal=yi.getInterpolatedAttribute(r,o,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};yi.getNormal(Dc,Uc,Lc,u.normal),h.face=u,h.barycoord=d}return h}class xT extends Un{constructor(t=null,n=1,i=1,a,s,r,o,l,c=yn,h=yn,d,u){super(null,r,o,l,c,h,a,s,d,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ih=new O,ST=new O,yT=new Yt;class Ds{constructor(t=new O(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=Ih.subVectors(i,n).cross(ST.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta(Ih),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||yT.getNormalMatrix(t),a=this.coplanarPoint(Ih).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Kl,MT=new jt(.5,.5),Bc=new O;class o0{constructor(t=new Ds,n=new Ds,i=new Ds,a=new Ds,s=new Ds,r=new Ds){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Wi,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],p=s[7],_=s[8],M=s[9],g=s[10],f=s[11],m=s[12],v=s[13],S=s[14],w=s[15];if(a[0].setComponents(c-r,p-h,f-_,w-m).normalize(),a[1].setComponents(c+r,p+h,f+_,w+m).normalize(),a[2].setComponents(c+o,p+d,f+M,w+v).normalize(),a[3].setComponents(c-o,p-d,f-M,w-v).normalize(),i)a[4].setComponents(l,u,g,S).normalize(),a[5].setComponents(c-l,p-u,f-g,w-S).normalize();else if(a[4].setComponents(c-l,p-u,f-g,w-S).normalize(),n===Wi)a[5].setComponents(c+l,p+u,f+g,w+S).normalize();else if(n===Pl)a[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);const n=MT.distanceTo(t.center);return bs.radius=.7071067811865476+n,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Bc.x=a.normal.x>0?t.max.x:t.min.x,Bc.y=a.normal.y>0?t.max.y:t.min.y,Bc.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dy extends vs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ju=new O,$u=new O,__=new Ie,Xo=new Ef,Fc=new Kl,zh=new O,v_=new O;class Uy extends gn{constructor(t=new Tn,n=new Dy){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)Ju.fromBufferAttribute(n,a-1),$u.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=Ju.distanceTo($u);t.setAttribute("lineDistance",new bn(i,1))}else It("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(a),Fc.radius+=s,t.ray.intersectsSphere(Fc)===!1)return;__.copy(a).invert(),Xo.copy(t.ray).applyMatrix4(__);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,r.start),_=Math.min(h.count,r.start+r.count);for(let M=p,g=_-1;M<g;M+=c){const f=h.getX(M),m=h.getX(M+1),v=Ic(this,t,Xo,l,f,m,M);v&&n.push(v)}if(this.isLineLoop){const M=h.getX(_-1),g=h.getX(p),f=Ic(this,t,Xo,l,M,g,_-1);f&&n.push(f)}}else{const p=Math.max(0,r.start),_=Math.min(u.count,r.start+r.count);for(let M=p,g=_-1;M<g;M+=c){const f=Ic(this,t,Xo,l,M,M+1,M);f&&n.push(f)}if(this.isLineLoop){const M=Ic(this,t,Xo,l,_-1,p,_-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ic(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(Ju.fromBufferAttribute(o,a),$u.fromBufferAttribute(o,s),n.distanceSqToSegment(Ju,$u,zh,v_)>i)return;zh.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(zh);if(!(c<t.near||c>t.far))return{distance:c,point:v_.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}class Ly extends vs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const x_=new Ie,Vp=new Ef,zc=new Kl,Gc=new O;class bT extends gn{constructor(t=new Tn,n=new Ly){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zc.copy(i.boundingSphere),zc.applyMatrix4(a),zc.radius+=s,t.ray.intersectsSphere(zc)===!1)return;x_.copy(a).invert(),Vp.copy(t.ray).applyMatrix4(x_);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let _=u,M=p;_<M;_++){const g=c.getX(_);Gc.fromBufferAttribute(d,g),S_(Gc,g,l,a,t,n,this)}}else{const u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let _=u,M=p;_<M;_++)Gc.fromBufferAttribute(d,_),S_(Gc,_,l,a,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function S_(e,t,n,i,a,s,r){const o=Vp.distanceSqToPoint(e);if(o<n){const l=new O;Vp.closestPointToPoint(e,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ny extends Un{constructor(t=[],n=qs,i,a,s,r,o,l,c,h){super(t,n,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ET extends Un{constructor(t,n,i,a,s,r,o,l,c){super(t,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class go extends Un{constructor(t,n,i=Zi,a,s,r,o=yn,l=yn,c,h=wa,d=1){if(h!==wa&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:d};super(u,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new a0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class TT extends go{constructor(t,n=Zi,i=qs,a,s,r=yn,o=yn,l,c=wa){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,a,s,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Oy extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cs extends Tn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;_("z","y","x",-1,-1,i,n,t,r,s,0),_("z","y","x",1,-1,i,n,-t,r,s,1),_("x","z","y",1,1,t,i,n,a,r,2),_("x","z","y",1,-1,t,i,-n,a,r,3),_("x","y","z",1,-1,t,n,i,a,s,4),_("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(h,3)),this.setAttribute("uv",new bn(d,2));function _(M,g,f,m,v,S,w,T,R,x,A){const U=S/R,D=w/x,I=S/2,q=w/2,Q=T/2,B=R+1,C=x+1;let L=0,k=0;const K=new O;for(let rt=0;rt<C;rt++){const Tt=rt*D-q;for(let Ct=0;Ct<B;Ct++){const Xt=Ct*U-I;K[M]=Xt*m,K[g]=Tt*v,K[f]=Q,c.push(K.x,K.y,K.z),K[M]=0,K[g]=0,K[f]=T>0?1:-1,h.push(K.x,K.y,K.z),d.push(Ct/R),d.push(1-rt/x),L+=1}}for(let rt=0;rt<x;rt++)for(let Tt=0;Tt<R;Tt++){const Ct=u+Tt+B*rt,Xt=u+Tt+B*(rt+1),Wt=u+(Tt+1)+B*(rt+1),Pt=u+(Tt+1)+B*rt;l.push(Ct,Xt,Pt),l.push(Xt,Wt,Pt),k+=6}o.addGroup(p,k,A),p+=k,u+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class l0 extends Tn{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),h(),this.setAttribute("position",new bn(s,3)),this.setAttribute("normal",new bn(s.slice(),3)),this.setAttribute("uv",new bn(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const v=new O,S=new O,w=new O;for(let T=0;T<n.length;T+=3)p(n[T+0],v),p(n[T+1],S),p(n[T+2],w),l(v,S,w,m)}function l(m,v,S,w){const T=w+1,R=[];for(let x=0;x<=T;x++){R[x]=[];const A=m.clone().lerp(S,x/T),U=v.clone().lerp(S,x/T),D=T-x;for(let I=0;I<=D;I++)I===0&&x===T?R[x][I]=A:R[x][I]=A.clone().lerp(U,I/D)}for(let x=0;x<T;x++)for(let A=0;A<2*(T-x)-1;A++){const U=Math.floor(A/2);A%2===0?(u(R[x][U+1]),u(R[x+1][U]),u(R[x][U])):(u(R[x][U+1]),u(R[x+1][U+1]),u(R[x+1][U]))}}function c(m){const v=new O;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(m),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function h(){const m=new O;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const S=g(m)/2/Math.PI+.5,w=f(m)/Math.PI+.5;r.push(S,1-w)}_(),d()}function d(){for(let m=0;m<r.length;m+=6){const v=r[m+0],S=r[m+2],w=r[m+4],T=Math.max(v,S,w),R=Math.min(v,S,w);T>.9&&R<.1&&(v<.2&&(r[m+0]+=1),S<.2&&(r[m+2]+=1),w<.2&&(r[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function p(m,v){const S=m*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function _(){const m=new O,v=new O,S=new O,w=new O,T=new jt,R=new jt,x=new jt;for(let A=0,U=0;A<s.length;A+=9,U+=6){m.set(s[A+0],s[A+1],s[A+2]),v.set(s[A+3],s[A+4],s[A+5]),S.set(s[A+6],s[A+7],s[A+8]),T.set(r[U+0],r[U+1]),R.set(r[U+2],r[U+3]),x.set(r[U+4],r[U+5]),w.copy(m).add(v).add(S).divideScalar(3);const D=g(w);M(T,U+0,m,D),M(R,U+2,v,D),M(x,U+4,S,D)}}function M(m,v,S,w){w<0&&m.x===1&&(r[v]=m.x-1),S.x===0&&S.z===0&&(r[v]=w/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new l0(t.vertices,t.indices,t.radius,t.detail)}}class c0 extends l0{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new c0(t.radius,t.detail)}}class Ql extends Tn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,d=t/o,u=n/l,p=[],_=[],M=[],g=[];for(let f=0;f<h;f++){const m=f*u-r;for(let v=0;v<c;v++){const S=v*d-s;_.push(S,-m,0),M.push(0,0,1),g.push(v/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const v=m+c*f,S=m+c*(f+1),w=m+1+c*(f+1),T=m+1+c*f;p.push(v,S,T),p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new bn(_,3)),this.setAttribute("normal",new bn(M,3)),this.setAttribute("uv",new bn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ql(t.width,t.height,t.widthSegments,t.heightSegments)}}class tf extends Tn{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new O,u=new O,p=[],_=[],M=[],g=[];for(let f=0;f<=i;f++){const m=[],v=f/i;let S=0;f===0&&r===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let w=0;w<=n;w++){const T=w/n;d.x=-t*Math.cos(a+T*s)*Math.sin(r+v*o),d.y=t*Math.cos(r+v*o),d.z=t*Math.sin(a+T*s)*Math.sin(r+v*o),_.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),g.push(T+S,1-v),m.push(c++)}h.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const v=h[f][m+1],S=h[f][m],w=h[f+1][m],T=h[f+1][m+1];(f!==0||r>0)&&p.push(v,S,T),(f!==i-1||l<Math.PI)&&p.push(S,w,T)}this.setIndex(p),this.setAttribute("position",new bn(_,3)),this.setAttribute("normal",new bn(M,3)),this.setAttribute("uv",new bn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tf(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function _o(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(y_(a))a.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(y_(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function Nn(e){const t={};for(let n=0;n<e.length;n++){const i=_o(e[n]);for(const a in i)t[a]=i[a]}return t}function y_(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function AT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Py(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const RT={clone:_o,merge:Nn};var wT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wT,this.fragmentShader=CT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_o(t.uniforms),this.uniformsGroups=AT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class DT extends Oi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wo extends vs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zp,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class UT extends vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class LT extends vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class By extends gn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class NT extends By{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const Gh=new Ie,M_=new O,b_=new O;class OT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new o0,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;M_.setFromMatrixPosition(t.matrixWorld),n.position.copy(M_),b_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(b_),n.updateMatrixWorld(),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Pl||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hc=new O,Vc=new Ao,Ii=new O;class Fy extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hc,Vc,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Hc,Vc,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const za=new O,E_=new jt,T_=new jt;class $n extends Fy{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Bl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,n){return this.getViewBounds(t,E_,T_),n.subVectors(T_,E_)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(gl*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class PT extends OT{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0}}class Iy extends By{constructor(t,n,i=0,a=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new PT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class zy extends Fy{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ar=-90,Rr=1;class BT extends gn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new $n(Ar,Rr,t,n);a.layers=this.layers,this.add(a);const s=new $n(Ar,Rr,t,n);s.layers=this.layers,this.add(s);const r=new $n(Ar,Rr,t,n);r.layers=this.layers,this.add(r);const o=new $n(Ar,Rr,t,n);o.layers=this.layers,this.add(o);const l=new $n(Ar,Rr,t,n);l.layers=this.layers,this.add(l);const c=new $n(Ar,Rr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,u,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class FT extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const A_=new Ie;class R_{constructor(t,n,i=0,a=1/0){this.ray=new Ef(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new s0,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):le("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return A_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(A_),this}intersectObject(t,n=!0,i=[]){return kp(t,this,i,n),i.sort(w_),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)kp(t[a],this,i,n);return i.sort(w_),i}}function w_(e,t){return e.distance-t.distance}function kp(e,t,n,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&i===!0){const s=e.children;for(let r=0,o=s.length;r<o;r++)kp(s[r],t,n,!0)}}const v0=class v0{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};v0.prototype.isMatrix2=!0;let C_=v0;function D_(e,t,n,i){const a=IT(i);switch(n){case Sy:return e*t;case My:return e*t/a.components*a.byteLength;case Jm:return e*t/a.components*a.byteLength;case Ys:return e*t*2/a.components*a.byteLength;case $m:return e*t*2/a.components*a.byteLength;case yy:return e*t*3/a.components*a.byteLength;case Li:return e*t*4/a.components*a.byteLength;case t0:return e*t*4/a.components*a.byteLength;case lu:case cu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case uu:case fu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case up:case hp:return Math.max(e,16)*Math.max(t,8)/4;case cp:case fp:return Math.max(e,8)*Math.max(t,8)/2;case dp:case pp:case gp:case _p:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case mp:case Xu:case vp:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xp:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sp:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case yp:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Mp:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case bp:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ep:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Tp:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ap:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Rp:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case wp:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Cp:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Dp:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Up:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Lp:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Np:case Op:case Pp:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Bp:case Fp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Wu:case Ip:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function IT(e){switch(e){case ei:case gy:return{byteLength:1,components:1};case Nl:case _y:case Ra:return{byteLength:2,components:1};case Km:case Qm:return{byteLength:2,components:4};case Zi:case Zm:case Xi:return{byteLength:4,components:1};case vy:case xy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jm}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gy(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function zT(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){const _=d[u],M=d[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){const M=d[p];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var GT=`#ifdef USE_ALPHAHASH
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
#endif`,VT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qT=`#ifdef USE_AOMAP
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
#endif`,jT=`#ifdef USE_BATCHING
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
#endif`,ZT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$T=`#ifdef USE_IRIDESCENCE
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
#endif`,tA=`#ifdef USE_BUMPMAP
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
#endif`,eA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cA=`#define PI 3.141592653589793
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
} // validated`,uA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fA=`vec3 transformedNormal = objectNormal;
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
#endif`,hA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gA="gl_FragColor = linearToOutputTexel( gl_FragColor );",_A=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vA=`#ifdef USE_ENVMAP
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
#endif`,xA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,SA=`#ifdef USE_ENVMAP
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
#endif`,yA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MA=`#ifdef USE_ENVMAP
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
#endif`,bA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RA=`#ifdef USE_GRADIENTMAP
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
}`,wA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UA=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,LA=`#ifdef USE_ENVMAP
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
#endif`,NA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FA=`PhysicalMaterial material;
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
#endif`,IA=`uniform sampler2D dfgLUT;
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
}`,zA=`
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
#endif`,GA=`#if defined( RE_IndirectDiffuse )
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
#endif`,HA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VA=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,kA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KA=`#if defined( USE_POINTS_UV )
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
#endif`,QA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$A=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n2=`#ifdef USE_MORPHTARGETS
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
#endif`,i2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c2=`#ifdef USE_NORMALMAP
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
#endif`,u2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T2=`float getShadowMask() {
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
}`,A2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R2=`#ifdef USE_SKINNING
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
#endif`,w2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C2=`#ifdef USE_SKINNING
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
#endif`,D2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O2=`#ifdef USE_TRANSMISSION
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
#endif`,P2=`#ifdef USE_TRANSMISSION
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
#endif`,B2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H2=`uniform sampler2D t2D;
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
}`,V2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q2=`#include <common>
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
}`,Y2=`#if DEPTH_PACKING == 3200
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
}`,j2=`#define DISTANCE
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
}`,Z2=`#define DISTANCE
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
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J2=`uniform float scale;
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
}`,$2=`uniform vec3 diffuse;
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
}`,t3=`#include <common>
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
}`,e3=`uniform vec3 diffuse;
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
}`,n3=`#define LAMBERT
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
}`,i3=`#define LAMBERT
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
}`,a3=`#define MATCAP
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
}`,s3=`#define MATCAP
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
}`,r3=`#define NORMAL
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
}`,o3=`#define NORMAL
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
}`,l3=`#define PHONG
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
}`,c3=`#define PHONG
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
}`,u3=`#define STANDARD
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
}`,f3=`#define STANDARD
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
}`,h3=`#define TOON
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
}`,d3=`#define TOON
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
}`,p3=`uniform float size;
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
}`,m3=`uniform vec3 diffuse;
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
}`,g3=`#include <common>
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
}`,_3=`uniform vec3 color;
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
}`,v3=`uniform float rotation;
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
}`,x3=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:GT,alphahash_pars_fragment:HT,alphamap_fragment:VT,alphamap_pars_fragment:kT,alphatest_fragment:XT,alphatest_pars_fragment:WT,aomap_fragment:qT,aomap_pars_fragment:YT,batching_pars_vertex:jT,batching_vertex:ZT,begin_vertex:KT,beginnormal_vertex:QT,bsdfs:JT,iridescence_fragment:$T,bumpmap_pars_fragment:tA,clipping_planes_fragment:eA,clipping_planes_pars_fragment:nA,clipping_planes_pars_vertex:iA,clipping_planes_vertex:aA,color_fragment:sA,color_pars_fragment:rA,color_pars_vertex:oA,color_vertex:lA,common:cA,cube_uv_reflection_fragment:uA,defaultnormal_vertex:fA,displacementmap_pars_vertex:hA,displacementmap_vertex:dA,emissivemap_fragment:pA,emissivemap_pars_fragment:mA,colorspace_fragment:gA,colorspace_pars_fragment:_A,envmap_fragment:vA,envmap_common_pars_fragment:xA,envmap_pars_fragment:SA,envmap_pars_vertex:yA,envmap_physical_pars_fragment:LA,envmap_vertex:MA,fog_vertex:bA,fog_pars_vertex:EA,fog_fragment:TA,fog_pars_fragment:AA,gradientmap_pars_fragment:RA,lightmap_pars_fragment:wA,lights_lambert_fragment:CA,lights_lambert_pars_fragment:DA,lights_pars_begin:UA,lights_toon_fragment:NA,lights_toon_pars_fragment:OA,lights_phong_fragment:PA,lights_phong_pars_fragment:BA,lights_physical_fragment:FA,lights_physical_pars_fragment:IA,lights_fragment_begin:zA,lights_fragment_maps:GA,lights_fragment_end:HA,lightprobes_pars_fragment:VA,logdepthbuf_fragment:kA,logdepthbuf_pars_fragment:XA,logdepthbuf_pars_vertex:WA,logdepthbuf_vertex:qA,map_fragment:YA,map_pars_fragment:jA,map_particle_fragment:ZA,map_particle_pars_fragment:KA,metalnessmap_fragment:QA,metalnessmap_pars_fragment:JA,morphinstance_vertex:$A,morphcolor_vertex:t2,morphnormal_vertex:e2,morphtarget_pars_vertex:n2,morphtarget_vertex:i2,normal_fragment_begin:a2,normal_fragment_maps:s2,normal_pars_fragment:r2,normal_pars_vertex:o2,normal_vertex:l2,normalmap_pars_fragment:c2,clearcoat_normal_fragment_begin:u2,clearcoat_normal_fragment_maps:f2,clearcoat_pars_fragment:h2,iridescence_pars_fragment:d2,opaque_fragment:p2,packing:m2,premultiplied_alpha_fragment:g2,project_vertex:_2,dithering_fragment:v2,dithering_pars_fragment:x2,roughnessmap_fragment:S2,roughnessmap_pars_fragment:y2,shadowmap_pars_fragment:M2,shadowmap_pars_vertex:b2,shadowmap_vertex:E2,shadowmask_pars_fragment:T2,skinbase_vertex:A2,skinning_pars_vertex:R2,skinning_vertex:w2,skinnormal_vertex:C2,specularmap_fragment:D2,specularmap_pars_fragment:U2,tonemapping_fragment:L2,tonemapping_pars_fragment:N2,transmission_fragment:O2,transmission_pars_fragment:P2,uv_pars_fragment:B2,uv_pars_vertex:F2,uv_vertex:I2,worldpos_vertex:z2,background_vert:G2,background_frag:H2,backgroundCube_vert:V2,backgroundCube_frag:k2,cube_vert:X2,cube_frag:W2,depth_vert:q2,depth_frag:Y2,distance_vert:j2,distance_frag:Z2,equirect_vert:K2,equirect_frag:Q2,linedashed_vert:J2,linedashed_frag:$2,meshbasic_vert:t3,meshbasic_frag:e3,meshlambert_vert:n3,meshlambert_frag:i3,meshmatcap_vert:a3,meshmatcap_frag:s3,meshnormal_vert:r3,meshnormal_frag:o3,meshphong_vert:l3,meshphong_frag:c3,meshphysical_vert:u3,meshphysical_frag:f3,meshtoon_vert:h3,meshtoon_frag:d3,points_vert:p3,points_frag:m3,shadow_vert:g3,shadow_frag:_3,sprite_vert:v3,sprite_frag:x3},Mt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Gi={basic:{uniforms:Nn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Nn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Nn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Nn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Nn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Nn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Nn([Mt.points,Mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Nn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Nn([Mt.common,Mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Nn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Nn([Mt.sprite,Mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Nn([Mt.common,Mt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Nn([Mt.lights,Mt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Gi.physical={uniforms:Nn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const kc={r:0,b:0,g:0},S3=new Ie,Hy=new Yt;Hy.set(-1,0,0,0,1,0,0,0,1);function y3(e,t,n,i,a,s){const r=new Qt(0);let o=a===!0?0:1,l,c,h=null,d=0,u=null;function p(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){const S=m.backgroundBlurriness>0;v=t.get(v,S)}return v}function _(m){let v=!1;const S=p(m);S===null?g(r,o):S&&S.isColor&&(g(S,1),v=!0);const w=e.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(m,v){const S=p(v);S&&(S.isCubeTexture||S.mapping===bf)?(c===void 0&&(c=new Cn(new cs(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:_o(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(S3.makeRotationFromEuler(v.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hy),c.material.toneMapped=ce.getTransfer(S.colorSpace)!==ve,(h!==S||d!==S.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Cn(new Ql(2,2),new Oi({name:"BackgroundMaterial",uniforms:_o(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ce.getTransfer(S.colorSpace)!==ve,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,v){m.getRGB(kc,Py(e)),n.buffers.color.setClear(kc.r,kc.g,kc.b,v,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,v=1){r.set(m),o=v,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:_,addToRenderList:M,dispose:f}}function M3(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(D,I,q,Q,B){let C=!1;const L=d(D,Q,q,I);s!==L&&(s=L,c(s.object)),C=p(D,Q,q,B),C&&_(D,Q,q,B),B!==null&&t.update(B,e.ELEMENT_ARRAY_BUFFER),(C||r)&&(r=!1,S(D,I,q,Q),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function h(D){return e.deleteVertexArray(D)}function d(D,I,q,Q){const B=Q.wireframe===!0;let C=i[I.id];C===void 0&&(C={},i[I.id]=C);const L=D.isInstancedMesh===!0?D.id:0;let k=C[L];k===void 0&&(k={},C[L]=k);let K=k[q.id];K===void 0&&(K={},k[q.id]=K);let rt=K[B];return rt===void 0&&(rt=u(l()),K[B]=rt),rt}function u(D){const I=[],q=[],Q=[];for(let B=0;B<n;B++)I[B]=0,q[B]=0,Q[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:q,attributeDivisors:Q,object:D,attributes:{},index:null}}function p(D,I,q,Q){const B=s.attributes,C=I.attributes;let L=0;const k=q.getAttributes();for(const K in k)if(k[K].location>=0){const Tt=B[K];let Ct=C[K];if(Ct===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Ct=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Ct=D.instanceColor)),Tt===void 0||Tt.attribute!==Ct||Ct&&Tt.data!==Ct.data)return!0;L++}return s.attributesNum!==L||s.index!==Q}function _(D,I,q,Q){const B={},C=I.attributes;let L=0;const k=q.getAttributes();for(const K in k)if(k[K].location>=0){let Tt=C[K];Tt===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Tt=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Tt=D.instanceColor));const Ct={};Ct.attribute=Tt,Tt&&Tt.data&&(Ct.data=Tt.data),B[K]=Ct,L++}s.attributes=B,s.attributesNum=L,s.index=Q}function M(){const D=s.newAttributes;for(let I=0,q=D.length;I<q;I++)D[I]=0}function g(D){f(D,0)}function f(D,I){const q=s.newAttributes,Q=s.enabledAttributes,B=s.attributeDivisors;q[D]=1,Q[D]===0&&(e.enableVertexAttribArray(D),Q[D]=1),B[D]!==I&&(e.vertexAttribDivisor(D,I),B[D]=I)}function m(){const D=s.newAttributes,I=s.enabledAttributes;for(let q=0,Q=I.length;q<Q;q++)I[q]!==D[q]&&(e.disableVertexAttribArray(q),I[q]=0)}function v(D,I,q,Q,B,C,L){L===!0?e.vertexAttribIPointer(D,I,q,B,C):e.vertexAttribPointer(D,I,q,Q,B,C)}function S(D,I,q,Q){M();const B=Q.attributes,C=q.getAttributes(),L=I.defaultAttributeValues;for(const k in C){const K=C[k];if(K.location>=0){let rt=B[k];if(rt===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(rt=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(rt=D.instanceColor)),rt!==void 0){const Tt=rt.normalized,Ct=rt.itemSize,Xt=t.get(rt);if(Xt===void 0)continue;const Wt=Xt.buffer,Pt=Xt.type,tt=Xt.bytesPerElement,gt=Pt===e.INT||Pt===e.UNSIGNED_INT||rt.gpuType===Zm;if(rt.isInterleavedBufferAttribute){const ht=rt.data,W=ht.stride,et=rt.offset;if(ht.isInstancedInterleavedBuffer){for(let St=0;St<K.locationSize;St++)f(K.location+St,ht.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let St=0;St<K.locationSize;St++)g(K.location+St);e.bindBuffer(e.ARRAY_BUFFER,Wt);for(let St=0;St<K.locationSize;St++)v(K.location+St,Ct/K.locationSize,Pt,Tt,W*tt,(et+Ct/K.locationSize*St)*tt,gt)}else{if(rt.isInstancedBufferAttribute){for(let ht=0;ht<K.locationSize;ht++)f(K.location+ht,rt.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ht=0;ht<K.locationSize;ht++)g(K.location+ht);e.bindBuffer(e.ARRAY_BUFFER,Wt);for(let ht=0;ht<K.locationSize;ht++)v(K.location+ht,Ct/K.locationSize,Pt,Tt,Ct*tt,Ct/K.locationSize*ht*tt,gt)}}else if(L!==void 0){const Tt=L[k];if(Tt!==void 0)switch(Tt.length){case 2:e.vertexAttrib2fv(K.location,Tt);break;case 3:e.vertexAttrib3fv(K.location,Tt);break;case 4:e.vertexAttrib4fv(K.location,Tt);break;default:e.vertexAttrib1fv(K.location,Tt)}}}}m()}function w(){A();for(const D in i){const I=i[D];for(const q in I){const Q=I[q];for(const B in Q){const C=Q[B];for(const L in C)h(C[L].object),delete C[L];delete Q[B]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const I=i[D.id];for(const q in I){const Q=I[q];for(const B in Q){const C=Q[B];for(const L in C)h(C[L].object),delete C[L];delete Q[B]}}delete i[D.id]}function R(D){for(const I in i){const q=i[I];for(const Q in q){const B=q[Q];if(B[D.id]===void 0)continue;const C=B[D.id];for(const L in C)h(C[L].object),delete C[L];delete B[D.id]}}}function x(D){for(const I in i){const q=i[I],Q=D.isInstancedMesh===!0?D.id:0,B=q[Q];if(B!==void 0){for(const C in B){const L=B[C];for(const k in L)h(L[k].object),delete L[k];delete B[C]}delete q[Q],Object.keys(q).length===0&&delete i[I]}}}function A(){U(),r=!0,s!==a&&(s=a,c(s.object))}function U(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function b3(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function E3(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==Li&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===Ra&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ei&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Xi&&!x)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:S,maxSamples:w,samples:T}}function T3(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new Ds,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||a;return a=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,p){const _=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,f=e.get(d);if(!a||_===null||_.length===0||s&&!g)s?h(null):c();else{const m=s?0:i,v=m*4;let S=f.clippingState||null;l.value=S,S=h(_,u,v,p);for(let w=0;w!==v;++w)S[w]=n[w];f.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,_){const M=d!==null?d.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const f=p+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,S=p;v!==M;++v,S+=4)r.copy(d[v]).applyMatrix4(m,o),r.normal.toArray(g,S),g[S+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}const $a=4,U_=[.125,.215,.35,.446,.526,.582],Ls=20,A3=256,qo=new zy,L_=new Qt;let Hh=null,Vh=0,kh=0,Xh=!1;const R3=new O;class N_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=R3}=s;Hh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Hh,Vh,kh),this._renderer.xr.enabled=Xh,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===qs||t.mapping===mo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Ra,format:Li,colorSpace:qu,depthBuffer:!1},a=O_(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O_(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=w3(s)),this._blurMaterial=D3(s,t,n),this._ggxMaterial=C3(s,t,n)}return a}_compileMaterial(t){const n=new Cn(new Tn,t);this._renderer.compile(n,qo)}_sceneToCubeUV(t,n,i,a,s){const l=new $n(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(L_),d.toneMapping=Yi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Cn(new cs,new Qu({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let f=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy(L_),f=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[v],s.y,s.z)):S===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[v]));const w=this._cubeSize;wr(a,S*w,v>2?w:0,w,w),d.setRenderTarget(a),f&&d.render(M,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===qs||t.mapping===mo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P_());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;wr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,qo)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,p=d*u,{_lodMax:_}=this,M=this._sizeLods[i],g=3*M*(i>_-$a?i-_+$a:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-n,wr(s,g,f,3*M,2*M),a.setRenderTarget(s),a.render(o,qo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,wr(t,g,f,3*M,2*M),a.setRenderTarget(t),a.render(o,qo)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&le("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[a];d.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ls-1),M=s/_,g=isFinite(s)?1+Math.floor(h*M):Ls;g>Ls&&It(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ls}`);const f=[];let m=0;for(let R=0;R<Ls;++R){const x=R/M,A=Math.exp(-x*x/2);f.push(A),R===0?m+=A:R<g&&(m+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:v}=this;u.dTheta.value=_,u.mipInt.value=v-i;const S=this._sizeLods[a],w=3*S*(a>v-$a?a-v+$a:0),T=4*(this._cubeSize-S);wr(n,w,T,3*S,2*S),l.setRenderTarget(n),l.render(d,qo)}}function w3(e){const t=[],n=[],i=[];let a=e;const s=e-$a+1+U_.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-$a?l=U_[r-e+$a-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,M=3,g=2,f=1,m=new Float32Array(M*_*p),v=new Float32Array(g*_*p),S=new Float32Array(f*_*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,x=T>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];m.set(A,M*_*T),v.set(u,g*_*T);const U=[T,T,T,T,T,T];S.set(U,f*_*T)}const w=new Tn;w.setAttribute("position",new Bn(m,M)),w.setAttribute("uv",new Bn(v,g)),w.setAttribute("faceIndex",new Bn(S,f)),i.push(new Cn(w,null)),a>$a&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function O_(e,t,n){const i=new ji(e,t,n);return i.texture.mapping=bf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wr(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function C3(e,t,n){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:A3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tf(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function D3(e,t,n){const i=new Float32Array(Ls),a=new O(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Tf(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function P_(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tf(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function B_(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function Tf(){return`

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
	`}class Vy extends ji{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Ny(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new cs(5,5,5),s=new Oi({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kn,blending:va});s.uniforms.tEquirect.value=n;const r=new Cn(a,s),o=n.minFilter;return n.minFilter===Ns&&(n.minFilter=Dn),new BT(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function U3(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?r(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===dh||p===ph)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const M=new Vy(_.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const p=u.mapping,_=p===dh||p===ph,M=p===qs||p===mo;if(_||M){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new N_(e)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return _&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new N_(e)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,p){return p===dh?u.mapping=qs:p===ph&&(u.mapping=mo),u}function l(u){let p=0;const _=6;for(let M=0;M<_;M++)u[M]!==void 0&&p++;return p===_}function c(u){const p=u.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:d}}function L3(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Hp("WebGLRenderer: "+i+" extension not supported."),a}}}function N3(e,t,n,i){const a={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",r),delete a[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(d,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,_=d.attributes.position;let M=0;if(_===void 0)return;if(p!==null){const m=p.array;M=p.version;for(let v=0,S=m.length;v<S;v+=3){const w=m[v+0],T=m[v+1],R=m[v+2];u.push(w,T,T,R,R,w)}}else{const m=_.array;M=_.version;for(let v=0,S=m.length/3-1;v<S;v+=3){const w=v+0,T=v+1,R=v+2;u.push(w,T,T,R,R,w)}}const g=new(_.count>=65535?Ry:Ay)(u,1);g.version=M;const f=s.get(d);f&&t.remove(f),s.set(d,g)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function O3(e,t,n){let i;function a(d){i=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,u){e.drawElements(i,u,s,d*r),n.update(u,i,1)}function c(d,u,p){p!==0&&(e.drawElementsInstanced(i,u,s,d*r,p),n.update(u,i,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let M=0;for(let g=0;g<p;g++)M+=u[g];n.update(M,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function P3(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:le("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function B3(e,t,n){const i=new WeakMap,a=new je;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let U=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",U)};var p=U;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),g===!0&&(S=3);let w=o.attributes.position.count*S,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*T*4*d),x=new Ey(R,w,T,d);x.type=Xi,x.needsUpdate=!0;const A=S*4;for(let D=0;D<d;D++){const I=f[D],q=m[D],Q=v[D],B=w*T*4*D;for(let C=0;C<I.count;C++){const L=C*A;_===!0&&(a.fromBufferAttribute(I,C),R[B+L+0]=a.x,R[B+L+1]=a.y,R[B+L+2]=a.z,R[B+L+3]=0),M===!0&&(a.fromBufferAttribute(q,C),R[B+L+4]=a.x,R[B+L+5]=a.y,R[B+L+6]=a.z,R[B+L+7]=0),g===!0&&(a.fromBufferAttribute(Q,C),R[B+L+8]=a.x,R[B+L+9]=a.y,R[B+L+10]=a.z,R[B+L+11]=Q.itemSize===4?a.w:1)}}u={count:d,texture:x,size:new jt(w,T)},i.set(o,u),o.addEventListener("dispose",U)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(e,"morphTargetBaseInfluence",M),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function F3(e,t,n,i,a){let s=new WeakMap;function r(c){const h=a.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}const I3={[ly]:"LINEAR_TONE_MAPPING",[cy]:"REINHARD_TONE_MAPPING",[uy]:"CINEON_TONE_MAPPING",[fy]:"ACES_FILMIC_TONE_MAPPING",[dy]:"AGX_TONE_MAPPING",[py]:"NEUTRAL_TONE_MAPPING",[hy]:"CUSTOM_TONE_MAPPING"};function z3(e,t,n,i,a){const s=new ji(t,n,{type:e,depthBuffer:i,stencilBuffer:a,depthTexture:i?new go(t,n):void 0}),r=new ji(t,n,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),o=new Tn;o.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new bn([0,2,0,0,2,0],2));const l=new DT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Cn(o,l),h=new zy(-1,1,1,-1,0,1);let d=null,u=null,p=!1,_,M=null,g=[],f=!1;this.setSize=function(m,v){s.setSize(m,v),r.setSize(m,v);for(let S=0;S<g.length;S++){const w=g[S];w.setSize&&w.setSize(m,v)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const v=s.width,S=s.height;for(let w=0;w<g.length;w++){const T=g[w];T.setSize&&T.setSize(v,S)}},this.begin=function(m,v){if(p||m.toneMapping===Yi&&g.length===0)return!1;if(M=v,v!==null){const S=v.width,w=v.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return f===!1&&m.setRenderTarget(s),_=m.toneMapping,m.toneMapping=Yi,!0},this.hasRenderPass=function(){return f},this.end=function(m,v){m.toneMapping=_,p=!0;let S=s,w=r;for(let T=0;T<g.length;T++){const R=g[T];if(R.enabled!==!1&&(R.render(m,w,S,v),R.needsSwap!==!1)){const x=S;S=w,w=x}}if(d!==m.outputColorSpace||u!==m.toneMapping){d=m.outputColorSpace,u=m.toneMapping,l.defines={},ce.getTransfer(d)===ve&&(l.defines.SRGB_TRANSFER="");const T=I3[u];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(M),m.render(c,h),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),o.dispose(),l.dispose()}}const ky=new Un,Xp=new go(1,1),Xy=new Ey,Wy=new iT,qy=new Ny,F_=[],I_=[],z_=new Float32Array(16),G_=new Float32Array(9),H_=new Float32Array(4);function Ro(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=F_[a];if(s===void 0&&(s=new Float32Array(a),F_[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function on(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function ln(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Af(e,t){let n=I_[t];n===void 0&&(n=new Int32Array(t),I_[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function G3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function H3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(on(n,t))return;e.uniform2fv(this.addr,t),ln(n,t)}}function V3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(on(n,t))return;e.uniform3fv(this.addr,t),ln(n,t)}}function k3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(on(n,t))return;e.uniform4fv(this.addr,t),ln(n,t)}}function X3(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(on(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ln(n,t)}else{if(on(n,i))return;H_.set(i),e.uniformMatrix2fv(this.addr,!1,H_),ln(n,i)}}function W3(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(on(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ln(n,t)}else{if(on(n,i))return;G_.set(i),e.uniformMatrix3fv(this.addr,!1,G_),ln(n,i)}}function q3(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(on(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ln(n,t)}else{if(on(n,i))return;z_.set(i),e.uniformMatrix4fv(this.addr,!1,z_),ln(n,i)}}function Y3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function j3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(on(n,t))return;e.uniform2iv(this.addr,t),ln(n,t)}}function Z3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(on(n,t))return;e.uniform3iv(this.addr,t),ln(n,t)}}function K3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(on(n,t))return;e.uniform4iv(this.addr,t),ln(n,t)}}function Q3(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function J3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(on(n,t))return;e.uniform2uiv(this.addr,t),ln(n,t)}}function $3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(on(n,t))return;e.uniform3uiv(this.addr,t),ln(n,t)}}function tR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(on(n,t))return;e.uniform4uiv(this.addr,t),ln(n,t)}}function eR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(Xp.compareFunction=n.isReversedDepthBuffer()?n0:e0,s=Xp):s=ky,n.setTexture2D(t||s,a)}function nR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||Wy,a)}function iR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||qy,a)}function aR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||Xy,a)}function sR(e){switch(e){case 5126:return G3;case 35664:return H3;case 35665:return V3;case 35666:return k3;case 35674:return X3;case 35675:return W3;case 35676:return q3;case 5124:case 35670:return Y3;case 35667:case 35671:return j3;case 35668:case 35672:return Z3;case 35669:case 35673:return K3;case 5125:return Q3;case 36294:return J3;case 36295:return $3;case 36296:return tR;case 35678:case 36198:case 36298:case 36306:case 35682:return eR;case 35679:case 36299:case 36307:return nR;case 35680:case 36300:case 36308:case 36293:return iR;case 36289:case 36303:case 36311:case 36292:return aR}}function rR(e,t){e.uniform1fv(this.addr,t)}function oR(e,t){const n=Ro(t,this.size,2);e.uniform2fv(this.addr,n)}function lR(e,t){const n=Ro(t,this.size,3);e.uniform3fv(this.addr,n)}function cR(e,t){const n=Ro(t,this.size,4);e.uniform4fv(this.addr,n)}function uR(e,t){const n=Ro(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function fR(e,t){const n=Ro(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function hR(e,t){const n=Ro(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function dR(e,t){e.uniform1iv(this.addr,t)}function pR(e,t){e.uniform2iv(this.addr,t)}function mR(e,t){e.uniform3iv(this.addr,t)}function gR(e,t){e.uniform4iv(this.addr,t)}function _R(e,t){e.uniform1uiv(this.addr,t)}function vR(e,t){e.uniform2uiv(this.addr,t)}function xR(e,t){e.uniform3uiv(this.addr,t)}function SR(e,t){e.uniform4uiv(this.addr,t)}function yR(e,t,n){const i=this.cache,a=t.length,s=Af(n,a);on(i,s)||(e.uniform1iv(this.addr,s),ln(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Xp:r=ky;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function MR(e,t,n){const i=this.cache,a=t.length,s=Af(n,a);on(i,s)||(e.uniform1iv(this.addr,s),ln(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||Wy,s[r])}function bR(e,t,n){const i=this.cache,a=t.length,s=Af(n,a);on(i,s)||(e.uniform1iv(this.addr,s),ln(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||qy,s[r])}function ER(e,t,n){const i=this.cache,a=t.length,s=Af(n,a);on(i,s)||(e.uniform1iv(this.addr,s),ln(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||Xy,s[r])}function TR(e){switch(e){case 5126:return rR;case 35664:return oR;case 35665:return lR;case 35666:return cR;case 35674:return uR;case 35675:return fR;case 35676:return hR;case 5124:case 35670:return dR;case 35667:case 35671:return pR;case 35668:case 35672:return mR;case 35669:case 35673:return gR;case 5125:return _R;case 36294:return vR;case 36295:return xR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return yR;case 35679:case 36299:case 36307:return MR;case 35680:case 36300:case 36308:case 36293:return bR;case 36289:case 36303:case 36311:case 36292:return ER}}class AR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sR(n.type)}}class RR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TR(n.type)}}class wR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function V_(e,t){e.seq.push(t),e.map[t.id]=t}function CR(e,t,n){const i=e.name,a=i.length;for(Wh.lastIndex=0;;){const s=Wh.exec(i),r=Wh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){V_(n,c===void 0?new AR(o,e,t):new RR(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new wR(o),V_(n,d)),n=d}}}class hu{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);CR(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function k_(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const DR=37297;let UR=0;function LR(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const X_=new Yt;function NR(e){ce._getMatrix(X_,ce.workingColorSpace,e);const t=`mat3( ${X_.elements.map(n=>n.toFixed(4))} )`;switch(ce.getTransfer(e)){case Yu:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function W_(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+LR(e.getShaderSource(t),o)}else return s}function OR(e,t){const n=NR(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const PR={[ly]:"Linear",[cy]:"Reinhard",[uy]:"Cineon",[fy]:"ACESFilmic",[dy]:"AgX",[py]:"Neutral",[hy]:"Custom"};function BR(e,t){const n=PR[t];return n===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xc=new O;function FR(){ce.getLuminanceCoefficients(Xc);const e=Xc.x.toFixed(4),t=Xc.y.toFixed(4),n=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function zR(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function GR(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function tl(e){return e!==""}function q_(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Y_(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const HR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wp(e){return e.replace(HR,kR)}const VR=new Map;function kR(e,t){let n=$t[t];if(n===void 0){const i=VR.get(t);if(i!==void 0)n=$t[i],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Wp(n)}const XR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(e){return e.replace(XR,WR)}function WR(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Z_(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}const qR={[ou]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function YR(e){return qR[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jR={[qs]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE",[bf]:"ENVMAP_TYPE_CUBE_UV"};function ZR(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":jR[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const KR={[mo]:"ENVMAP_MODE_REFRACTION"};function QR(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":KR[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JR={[oy]:"ENVMAP_BLENDING_MULTIPLY",[y1]:"ENVMAP_BLENDING_MIX",[M1]:"ENVMAP_BLENDING_ADD"};function $R(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":JR[e.combine]||"ENVMAP_BLENDING_NONE"}function tw(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ew(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=YR(n),c=ZR(n),h=QR(n),d=$R(n),u=tw(n),p=IR(n),_=zR(s),M=a.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(tl).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(tl).join(`
`),f.length>0&&(f+=`
`)):(g=[Z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),f=[Z_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?$t.tonemapping_pars_fragment:"",n.toneMapping!==Yi?BR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,OR("linearToOutputTexel",n.outputColorSpace),FR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(tl).join(`
`)),r=Wp(r),r=q_(r,n),r=Y_(r,n),o=Wp(o),o=q_(o,n),o=Y_(o,n),r=j_(r),o=j_(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=m+g+r,S=m+f+o,w=k_(a,a.VERTEX_SHADER,v),T=k_(a,a.FRAGMENT_SHADER,S);a.attachShader(M,w),a.attachShader(M,T),n.index0AttributeName!==void 0?a.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function R(D){if(e.debug.checkShaderErrors){const I=a.getProgramInfoLog(M)||"",q=a.getShaderInfoLog(w)||"",Q=a.getShaderInfoLog(T)||"",B=I.trim(),C=q.trim(),L=Q.trim();let k=!0,K=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(k=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,M,w,T);else{const rt=W_(a,w,"vertex"),Tt=W_(a,T,"fragment");le("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+rt+`
`+Tt)}else B!==""?It("WebGLProgram: Program Info Log:",B):(C===""||L==="")&&(K=!1);K&&(D.diagnostics={runnable:k,programLog:B,vertexShader:{log:C,prefix:g},fragmentShader:{log:L,prefix:f}})}a.deleteShader(w),a.deleteShader(T),x=new hu(a,M),A=GR(a,M)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(M,DR)),U},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UR++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=T,this}let nw=0;class iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new aw(t),n.set(t,i)),i}}class aw{constructor(t){this.id=nw++,this.code=t,this.usedTimes=0}}function sw(e){return e===Ys||e===Xu||e===Wu}function rw(e,t,n,i,a,s){const r=new s0,o=new iw,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,A,U,D,I,q){const Q=D.fog,B=I.geometry,C=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,L=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=t.get(x.envMap||C,L),K=k&&k.mapping===bf?k.image.height:null,rt=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&It("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const Tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ct=Tt!==void 0?Tt.length:0;let Xt=0;B.morphAttributes.position!==void 0&&(Xt=1),B.morphAttributes.normal!==void 0&&(Xt=2),B.morphAttributes.color!==void 0&&(Xt=3);let Wt,Pt,tt,gt;if(rt){const Ht=Gi[rt];Wt=Ht.vertexShader,Pt=Ht.fragmentShader}else Wt=x.vertexShader,Pt=x.fragmentShader,o.update(x),tt=o.getVertexShaderID(x),gt=o.getFragmentShaderID(x);const ht=e.getRenderTarget(),W=e.state.buffers.depth.getReversed(),et=I.isInstancedMesh===!0,St=I.isBatchedMesh===!0,ee=!!x.map,Ot=!!x.matcap,_e=!!k,de=!!x.aoMap,Bt=!!x.lightMap,Je=!!x.bumpMap,Ce=!!x.normalMap,cn=!!x.displacementMap,P=!!x.emissiveMap,Ge=!!x.metalnessMap,te=!!x.roughnessMap,Me=x.anisotropy>0,_t=x.clearcoat>0,zt=x.dispersion>0,E=x.iridescence>0,y=x.sheen>0,z=x.transmission>0,j=Me&&!!x.anisotropyMap,it=_t&&!!x.clearcoatMap,ut=_t&&!!x.clearcoatNormalMap,mt=_t&&!!x.clearcoatRoughnessMap,X=E&&!!x.iridescenceMap,J=E&&!!x.iridescenceThicknessMap,yt=y&&!!x.sheenColorMap,bt=y&&!!x.sheenRoughnessMap,at=!!x.specularMap,st=!!x.specularColorMap,Nt=!!x.specularIntensityMap,qt=z&&!!x.transmissionMap,oe=z&&!!x.thicknessMap,N=!!x.gradientMap,ct=!!x.alphaMap,Y=x.alphaTest>0,Et=!!x.alphaHash,ft=!!x.extensions;let nt=Yi;x.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(nt=e.toneMapping);const Ut={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:Wt,fragmentShader:Pt,defines:x.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:St,batchingColor:St&&I._colorsTexture!==null,instancing:et,instancingColor:et&&I.instanceColor!==null,instancingMorph:et&&I.morphTexture!==null,outputColorSpace:ht===null?e.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ee,matcap:Ot,envMap:_e,envMapMode:_e&&k.mapping,envMapCubeUVHeight:K,aoMap:de,lightMap:Bt,bumpMap:Je,normalMap:Ce,displacementMap:cn,emissiveMap:P,normalMapObjectSpace:Ce&&x.normalMapType===T1,normalMapTangentSpace:Ce&&x.normalMapType===zp,packedNormalMap:Ce&&x.normalMapType===zp&&sw(x.normalMap.format),metalnessMap:Ge,roughnessMap:te,anisotropy:Me,anisotropyMap:j,clearcoat:_t,clearcoatMap:it,clearcoatNormalMap:ut,clearcoatRoughnessMap:mt,dispersion:zt,iridescence:E,iridescenceMap:X,iridescenceThicknessMap:J,sheen:y,sheenColorMap:yt,sheenRoughnessMap:bt,specularMap:at,specularColorMap:st,specularIntensityMap:Nt,transmission:z,transmissionMap:qt,thicknessMap:oe,gradientMap:N,opaque:x.transparent===!1&&x.blending===$r&&x.alphaToCoverage===!1,alphaMap:ct,alphaTest:Y,alphaHash:Et,combine:x.combine,mapUv:ee&&_(x.map.channel),aoMapUv:de&&_(x.aoMap.channel),lightMapUv:Bt&&_(x.lightMap.channel),bumpMapUv:Je&&_(x.bumpMap.channel),normalMapUv:Ce&&_(x.normalMap.channel),displacementMapUv:cn&&_(x.displacementMap.channel),emissiveMapUv:P&&_(x.emissiveMap.channel),metalnessMapUv:Ge&&_(x.metalnessMap.channel),roughnessMapUv:te&&_(x.roughnessMap.channel),anisotropyMapUv:j&&_(x.anisotropyMap.channel),clearcoatMapUv:it&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(x.sheenRoughnessMap.channel),specularMapUv:at&&_(x.specularMap.channel),specularColorMapUv:st&&_(x.specularColorMap.channel),specularIntensityMapUv:Nt&&_(x.specularIntensityMap.channel),transmissionMapUv:qt&&_(x.transmissionMap.channel),thicknessMapUv:oe&&_(x.thicknessMap.channel),alphaMapUv:ct&&_(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ce||Me),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(ee||ct),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&Ce===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:W,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Xt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:nt,decodeVideoTexture:ee&&x.map.isVideoTexture===!0&&ce.getTransfer(x.map.colorSpace)===ve,decodeVideoTextureEmissive:P&&x.emissiveMap.isVideoTexture===!0&&ce.getTransfer(x.emissiveMap.colorSpace)===ve,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ua,flipSided:x.side===kn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ft&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&x.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function g(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)A.push(U),A.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(f(A,x),m(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function f(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function m(x,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),x.push(r.mask)}function v(x){const A=p[x.type];let U;if(A){const D=Gi[A];U=RT.clone(D.uniforms)}else U=x.uniforms;return U}function S(x,A){let U=h.get(A);return U!==void 0?++U.usedTimes:(U=new ew(e,A,x,a),c.push(U),h.set(A,U)),U}function w(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:v,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:R}}function ow(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function lw(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function K_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Q_(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,M,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:_,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=_,m.materialVariant=r(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,p,_,M,g,f){const m=o(u,p,_,M,g,f);_.transmission>0?i.push(m):_.transparent===!0?a.push(m):n.push(m)}function c(u,p,_,M,g,f){const m=o(u,p,_,M,g,f);_.transmission>0?i.unshift(m):_.transparent===!0?a.unshift(m):n.unshift(m)}function h(u,p){n.length>1&&n.sort(u||lw),i.length>1&&i.sort(p||K_),a.length>1&&a.sort(p||K_)}function d(){for(let u=t,p=e.length;u<p;u++){const _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:d,sort:h}}function cw(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new Q_,e.set(i,[r])):a>=s.length?(r=new Q_,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function uw(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new O,color:new Qt};break;case"SpotLight":n={position:new O,direction:new O,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":n={color:new Qt,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=n,n}}}function fw(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let hw=0;function dw(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function pw(e){const t=new uw,n=fw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const a=new O,s=new Ie,r=new Ie;function o(c){let h=0,d=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,_=0,M=0,g=0,f=0,m=0,v=0,S=0,w=0,T=0,R=0;c.sort(dw);for(let A=0,U=c.length;A<U;A++){const D=c[A],I=D.color,q=D.intensity,Q=D.distance;let B=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ys?B=D.shadow.map.texture:B=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=I.r*q,d+=I.g*q,u+=I.b*q;else if(D.isLightProbe){for(let C=0;C<9;C++)i.probe[C].addScaledVector(D.sh.coefficients[C],q);R++}else if(D.isDirectionalLight){const C=t.get(D);if(C.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const L=D.shadow,k=n.get(D);k.shadowIntensity=L.intensity,k.shadowBias=L.bias,k.shadowNormalBias=L.normalBias,k.shadowRadius=L.radius,k.shadowMapSize=L.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=D.shadow.matrix,m++}i.directional[p]=C,p++}else if(D.isSpotLight){const C=t.get(D);C.position.setFromMatrixPosition(D.matrixWorld),C.color.copy(I).multiplyScalar(q),C.distance=Q,C.coneCos=Math.cos(D.angle),C.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),C.decay=D.decay,i.spot[M]=C;const L=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,L.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[M]=L.matrix,D.castShadow){const k=n.get(D);k.shadowIntensity=L.intensity,k.shadowBias=L.bias,k.shadowNormalBias=L.normalBias,k.shadowRadius=L.radius,k.shadowMapSize=L.mapSize,i.spotShadow[M]=k,i.spotShadowMap[M]=B,S++}M++}else if(D.isRectAreaLight){const C=t.get(D);C.color.copy(I).multiplyScalar(q),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=C,g++}else if(D.isPointLight){const C=t.get(D);if(C.color.copy(D.color).multiplyScalar(D.intensity),C.distance=D.distance,C.decay=D.decay,D.castShadow){const L=D.shadow,k=n.get(D);k.shadowIntensity=L.intensity,k.shadowBias=L.bias,k.shadowNormalBias=L.normalBias,k.shadowRadius=L.radius,k.shadowMapSize=L.mapSize,k.shadowCameraNear=L.camera.near,k.shadowCameraFar=L.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=B,i.pointShadowMatrix[_]=D.shadow.matrix,v++}i.point[_]=C,_++}else if(D.isHemisphereLight){const C=t.get(D);C.skyColor.copy(D.color).multiplyScalar(q),C.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[f]=C,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==M||x.rectAreaLength!==g||x.hemiLength!==f||x.numDirectionalShadows!==m||x.numPointShadows!==v||x.numSpotShadows!==S||x.numSpotMaps!==w||x.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,x.directionalLength=p,x.pointLength=_,x.spotLength=M,x.rectAreaLength=g,x.hemiLength=f,x.numDirectionalShadows=m,x.numPointShadows=v,x.numSpotShadows=S,x.numSpotMaps=w,x.numLightProbes=R,i.version=hw++)}function l(c,h){let d=0,u=0,p=0,_=0,M=0;const g=h.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const v=c[f];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),d++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),r.identity(),s.copy(v.matrixWorld),s.premultiply(g),r.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(v.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),u++}else if(v.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function J_(e){const t=new pw(e),n=[],i=[],a=[];function s(u){d.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function mw(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new J_(e),t.set(a,[o])):s>=r.length?(o=new J_(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const gw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_w=`uniform sampler2D shadow_pass;
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
}`,vw=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],xw=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],$_=new Ie,Yo=new O,qh=new O;function Sw(e,t,n){let i=new o0;const a=new jt,s=new jt,r=new je,o=new UT,l=new LT,c={},h=n.maxTextureSize,d={[ps]:kn,[kn]:ps,[ua]:ua},u=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:gw,fragmentShader:_w}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new Tn;_.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Cn(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let f=this.type;this.render=function(T,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===n1&&(It("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ou);const A=e.getRenderTarget(),U=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),I=e.state;I.setBlending(va),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const q=f!==this.type;q&&R.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(B=>B.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,B=T.length;Q<B;Q++){const C=T[Q],L=C.shadow;if(L===void 0){It("WebGLShadowMap:",C,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;a.copy(L.mapSize);const k=L.getFrameExtents();a.multiply(k),s.copy(L.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/k.x),a.x=s.x*k.x,L.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/k.y),a.y=s.y*k.y,L.mapSize.y=s.y));const K=e.state.buffers.depth.getReversed();if(L.camera._reversedDepth=K,L.map===null||q===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===$o){if(C.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new ji(a.x,a.y,{format:Ys,type:Ra,minFilter:Dn,magFilter:Dn,generateMipmaps:!1}),L.map.texture.name=C.name+".shadowMap",L.map.depthTexture=new go(a.x,a.y,Xi),L.map.depthTexture.name=C.name+".shadowMapDepth",L.map.depthTexture.format=wa,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=yn,L.map.depthTexture.magFilter=yn}else C.isPointLight?(L.map=new Vy(a.x),L.map.depthTexture=new TT(a.x,Zi)):(L.map=new ji(a.x,a.y),L.map.depthTexture=new go(a.x,a.y,Zi)),L.map.depthTexture.name=C.name+".shadowMap",L.map.depthTexture.format=wa,this.type===ou?(L.map.depthTexture.compareFunction=K?n0:e0,L.map.depthTexture.minFilter=Dn,L.map.depthTexture.magFilter=Dn):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=yn,L.map.depthTexture.magFilter=yn);L.camera.updateProjectionMatrix()}const rt=L.map.isWebGLCubeRenderTarget?6:1;for(let Tt=0;Tt<rt;Tt++){if(L.map.isWebGLCubeRenderTarget)e.setRenderTarget(L.map,Tt),e.clear();else{Tt===0&&(e.setRenderTarget(L.map),e.clear());const Ct=L.getViewport(Tt);r.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),I.viewport(r)}if(C.isPointLight){const Ct=L.camera,Xt=L.matrix,Wt=C.distance||Ct.far;Wt!==Ct.far&&(Ct.far=Wt,Ct.updateProjectionMatrix()),Yo.setFromMatrixPosition(C.matrixWorld),Ct.position.copy(Yo),qh.copy(Ct.position),qh.add(vw[Tt]),Ct.up.copy(xw[Tt]),Ct.lookAt(qh),Ct.updateMatrixWorld(),Xt.makeTranslation(-Yo.x,-Yo.y,-Yo.z),$_.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),L._frustum.setFromProjectionMatrix($_,Ct.coordinateSystem,Ct.reversedDepth)}else L.updateMatrices(C);i=L.getFrustum(),S(R,x,L.camera,C,this.type)}L.isPointLightShadow!==!0&&this.type===$o&&m(L,x),L.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(A,U,D)};function m(T,R){const x=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ji(a.x,a.y,{format:Ys,type:Ra})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(R,null,x,u,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(R,null,x,p,M,null)}function v(T,R,x,A){let U=null;const D=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)U=D;else if(U=x.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=U.uuid,q=R.uuid;let Q=c[I];Q===void 0&&(Q={},c[I]=Q);let B=Q[q];B===void 0&&(B=U.clone(),Q[q]=B,R.addEventListener("dispose",w)),U=B}if(U.visible=R.visible,U.wireframe=R.wireframe,A===$o?U.side=R.shadowSide!==null?R.shadowSide:R.side:U.side=R.shadowSide!==null?R.shadowSide:d[R.side],U.alphaMap=R.alphaMap,U.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,U.map=R.map,U.clipShadows=R.clipShadows,U.clippingPlanes=R.clippingPlanes,U.clipIntersection=R.clipIntersection,U.displacementMap=R.displacementMap,U.displacementScale=R.displacementScale,U.displacementBias=R.displacementBias,U.wireframeLinewidth=R.wireframeLinewidth,U.linewidth=R.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const I=e.properties.get(U);I.light=x}return U}function S(T,R,x,A,U){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===$o)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const q=t.update(T),Q=T.material;if(Array.isArray(Q)){const B=q.groups;for(let C=0,L=B.length;C<L;C++){const k=B[C],K=Q[k.materialIndex];if(K&&K.visible){const rt=v(T,K,A,U);T.onBeforeShadow(e,T,R,x,q,rt,k),e.renderBufferDirect(x,null,q,rt,T,k),T.onAfterShadow(e,T,R,x,q,rt,k)}}}else if(Q.visible){const B=v(T,Q,A,U);T.onBeforeShadow(e,T,R,x,q,B,null),e.renderBufferDirect(x,null,q,B,T,null),T.onAfterShadow(e,T,R,x,q,B,null)}}const I=T.children;for(let q=0,Q=I.length;q<Q;q++)S(I[q],R,x,A,U)}function w(T){T.target.removeEventListener("dispose",w);for(const x in c){const A=c[x],U=T.target.uuid;U in A&&(A[U].dispose(),delete A[U])}}}function yw(e,t){function n(){let N=!1;const ct=new je;let Y=null;const Et=new je(0,0,0,0);return{setMask:function(ft){Y!==ft&&!N&&(e.colorMask(ft,ft,ft,ft),Y=ft)},setLocked:function(ft){N=ft},setClear:function(ft,nt,Ut,Ht,He){He===!0&&(ft*=Ht,nt*=Ht,Ut*=Ht),ct.set(ft,nt,Ut,Ht),Et.equals(ct)===!1&&(e.clearColor(ft,nt,Ut,Ht),Et.copy(ct))},reset:function(){N=!1,Y=null,Et.set(-1,0,0,0)}}}function i(){let N=!1,ct=!1,Y=null,Et=null,ft=null;return{setReversed:function(nt){if(ct!==nt){const Ut=t.get("EXT_clip_control");nt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),ct=nt;const Ht=ft;ft=null,this.setClear(Ht)}},getReversed:function(){return ct},setTest:function(nt){nt?ht(e.DEPTH_TEST):W(e.DEPTH_TEST)},setMask:function(nt){Y!==nt&&!N&&(e.depthMask(nt),Y=nt)},setFunc:function(nt){if(ct&&(nt=P1[nt]),Et!==nt){switch(nt){case tp:e.depthFunc(e.NEVER);break;case ep:e.depthFunc(e.ALWAYS);break;case np:e.depthFunc(e.LESS);break;case po:e.depthFunc(e.LEQUAL);break;case ip:e.depthFunc(e.EQUAL);break;case ap:e.depthFunc(e.GEQUAL);break;case sp:e.depthFunc(e.GREATER);break;case rp:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Et=nt}},setLocked:function(nt){N=nt},setClear:function(nt){ft!==nt&&(ft=nt,ct&&(nt=1-nt),e.clearDepth(nt))},reset:function(){N=!1,Y=null,Et=null,ft=null,ct=!1}}}function a(){let N=!1,ct=null,Y=null,Et=null,ft=null,nt=null,Ut=null,Ht=null,He=null;return{setTest:function(pe){N||(pe?ht(e.STENCIL_TEST):W(e.STENCIL_TEST))},setMask:function(pe){ct!==pe&&!N&&(e.stencilMask(pe),ct=pe)},setFunc:function(pe,ci,qn){(Y!==pe||Et!==ci||ft!==qn)&&(e.stencilFunc(pe,ci,qn),Y=pe,Et=ci,ft=qn)},setOp:function(pe,ci,qn){(nt!==pe||Ut!==ci||Ht!==qn)&&(e.stencilOp(pe,ci,qn),nt=pe,Ut=ci,Ht=qn)},setLocked:function(pe){N=pe},setClear:function(pe){He!==pe&&(e.clearStencil(pe),He=pe)},reset:function(){N=!1,ct=null,Y=null,Et=null,ft=null,nt=null,Ut=null,Ht=null,He=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let h={},d={},u={},p=new WeakMap,_=[],M=null,g=!1,f=null,m=null,v=null,S=null,w=null,T=null,R=null,x=new Qt(0,0,0),A=0,U=!1,D=null,I=null,q=null,Q=null,B=null;const C=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,k=0;const K=e.getParameter(e.VERSION);K.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(K)[1]),L=k>=1):K.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),L=k>=2);let rt=null,Tt={};const Ct=e.getParameter(e.SCISSOR_BOX),Xt=e.getParameter(e.VIEWPORT),Wt=new je().fromArray(Ct),Pt=new je().fromArray(Xt);function tt(N,ct,Y,Et){const ft=new Uint8Array(4),nt=e.createTexture();e.bindTexture(N,nt),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ut=0;Ut<Y;Ut++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(ct,0,e.RGBA,1,1,Et,0,e.RGBA,e.UNSIGNED_BYTE,ft):e.texImage2D(ct+Ut,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ft);return nt}const gt={};gt[e.TEXTURE_2D]=tt(e.TEXTURE_2D,e.TEXTURE_2D,1),gt[e.TEXTURE_CUBE_MAP]=tt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[e.TEXTURE_2D_ARRAY]=tt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),gt[e.TEXTURE_3D]=tt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ht(e.DEPTH_TEST),r.setFunc(po),Je(!1),Ce(jg),ht(e.CULL_FACE),de(va);function ht(N){h[N]!==!0&&(e.enable(N),h[N]=!0)}function W(N){h[N]!==!1&&(e.disable(N),h[N]=!1)}function et(N,ct){return u[N]!==ct?(e.bindFramebuffer(N,ct),u[N]=ct,N===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ct),N===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ct),!0):!1}function St(N,ct){let Y=_,Et=!1;if(N){Y=p.get(ct),Y===void 0&&(Y=[],p.set(ct,Y));const ft=N.textures;if(Y.length!==ft.length||Y[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,Ut=ft.length;nt<Ut;nt++)Y[nt]=e.COLOR_ATTACHMENT0+nt;Y.length=ft.length,Et=!0}}else Y[0]!==e.BACK&&(Y[0]=e.BACK,Et=!0);Et&&e.drawBuffers(Y)}function ee(N){return M!==N?(e.useProgram(N),M=N,!0):!1}const Ot={[Us]:e.FUNC_ADD,[a1]:e.FUNC_SUBTRACT,[s1]:e.FUNC_REVERSE_SUBTRACT};Ot[r1]=e.MIN,Ot[o1]=e.MAX;const _e={[l1]:e.ZERO,[c1]:e.ONE,[u1]:e.SRC_COLOR,[Jd]:e.SRC_ALPHA,[g1]:e.SRC_ALPHA_SATURATE,[p1]:e.DST_COLOR,[h1]:e.DST_ALPHA,[f1]:e.ONE_MINUS_SRC_COLOR,[$d]:e.ONE_MINUS_SRC_ALPHA,[m1]:e.ONE_MINUS_DST_COLOR,[d1]:e.ONE_MINUS_DST_ALPHA,[_1]:e.CONSTANT_COLOR,[v1]:e.ONE_MINUS_CONSTANT_COLOR,[x1]:e.CONSTANT_ALPHA,[S1]:e.ONE_MINUS_CONSTANT_ALPHA};function de(N,ct,Y,Et,ft,nt,Ut,Ht,He,pe){if(N===va){g===!0&&(W(e.BLEND),g=!1);return}if(g===!1&&(ht(e.BLEND),g=!0),N!==i1){if(N!==f||pe!==U){if((m!==Us||w!==Us)&&(e.blendEquation(e.FUNC_ADD),m=Us,w=Us),pe)switch(N){case $r:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ho:e.blendFunc(e.ONE,e.ONE);break;case Zg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Kg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:le("WebGLState: Invalid blending: ",N);break}else switch(N){case $r:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ho:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Zg:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kg:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",N);break}v=null,S=null,T=null,R=null,x.set(0,0,0),A=0,f=N,U=pe}return}ft=ft||ct,nt=nt||Y,Ut=Ut||Et,(ct!==m||ft!==w)&&(e.blendEquationSeparate(Ot[ct],Ot[ft]),m=ct,w=ft),(Y!==v||Et!==S||nt!==T||Ut!==R)&&(e.blendFuncSeparate(_e[Y],_e[Et],_e[nt],_e[Ut]),v=Y,S=Et,T=nt,R=Ut),(Ht.equals(x)===!1||He!==A)&&(e.blendColor(Ht.r,Ht.g,Ht.b,He),x.copy(Ht),A=He),f=N,U=!1}function Bt(N,ct){N.side===ua?W(e.CULL_FACE):ht(e.CULL_FACE);let Y=N.side===kn;ct&&(Y=!Y),Je(Y),N.blending===$r&&N.transparent===!1?de(va):de(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const Et=N.stencilWrite;o.setTest(Et),Et&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),P(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ht(e.SAMPLE_ALPHA_TO_COVERAGE):W(e.SAMPLE_ALPHA_TO_COVERAGE)}function Je(N){D!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),D=N)}function Ce(N){N!==t1?(ht(e.CULL_FACE),N!==I&&(N===jg?e.cullFace(e.BACK):N===e1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):W(e.CULL_FACE),I=N}function cn(N){N!==q&&(L&&e.lineWidth(N),q=N)}function P(N,ct,Y){N?(ht(e.POLYGON_OFFSET_FILL),(Q!==ct||B!==Y)&&(Q=ct,B=Y,r.getReversed()&&(ct=-ct),e.polygonOffset(ct,Y))):W(e.POLYGON_OFFSET_FILL)}function Ge(N){N?ht(e.SCISSOR_TEST):W(e.SCISSOR_TEST)}function te(N){N===void 0&&(N=e.TEXTURE0+C-1),rt!==N&&(e.activeTexture(N),rt=N)}function Me(N,ct,Y){Y===void 0&&(rt===null?Y=e.TEXTURE0+C-1:Y=rt);let Et=Tt[Y];Et===void 0&&(Et={type:void 0,texture:void 0},Tt[Y]=Et),(Et.type!==N||Et.texture!==ct)&&(rt!==Y&&(e.activeTexture(Y),rt=Y),e.bindTexture(N,ct||gt[N]),Et.type=N,Et.texture=ct)}function _t(){const N=Tt[rt];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function zt(){try{e.compressedTexImage2D(...arguments)}catch(N){le("WebGLState:",N)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(N){le("WebGLState:",N)}}function y(){try{e.texSubImage2D(...arguments)}catch(N){le("WebGLState:",N)}}function z(){try{e.texSubImage3D(...arguments)}catch(N){le("WebGLState:",N)}}function j(){try{e.compressedTexSubImage2D(...arguments)}catch(N){le("WebGLState:",N)}}function it(){try{e.compressedTexSubImage3D(...arguments)}catch(N){le("WebGLState:",N)}}function ut(){try{e.texStorage2D(...arguments)}catch(N){le("WebGLState:",N)}}function mt(){try{e.texStorage3D(...arguments)}catch(N){le("WebGLState:",N)}}function X(){try{e.texImage2D(...arguments)}catch(N){le("WebGLState:",N)}}function J(){try{e.texImage3D(...arguments)}catch(N){le("WebGLState:",N)}}function yt(N){return d[N]!==void 0?d[N]:e.getParameter(N)}function bt(N,ct){d[N]!==ct&&(e.pixelStorei(N,ct),d[N]=ct)}function at(N){Wt.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),Wt.copy(N))}function st(N){Pt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),Pt.copy(N))}function Nt(N,ct){let Y=c.get(ct);Y===void 0&&(Y=new WeakMap,c.set(ct,Y));let Et=Y.get(N);Et===void 0&&(Et=e.getUniformBlockIndex(ct,N.name),Y.set(N,Et))}function qt(N,ct){const Et=c.get(ct).get(N);l.get(ct)!==Et&&(e.uniformBlockBinding(ct,Et,N.__bindingPointIndex),l.set(ct,Et))}function oe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},rt=null,Tt={},u={},p=new WeakMap,_=[],M=null,g=!1,f=null,m=null,v=null,S=null,w=null,T=null,R=null,x=new Qt(0,0,0),A=0,U=!1,D=null,I=null,q=null,Q=null,B=null,Wt.set(0,0,e.canvas.width,e.canvas.height),Pt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ht,disable:W,bindFramebuffer:et,drawBuffers:St,useProgram:ee,setBlending:de,setMaterial:Bt,setFlipSided:Je,setCullFace:Ce,setLineWidth:cn,setPolygonOffset:P,setScissorTest:Ge,activeTexture:te,bindTexture:Me,unbindTexture:_t,compressedTexImage2D:zt,compressedTexImage3D:E,texImage2D:X,texImage3D:J,pixelStorei:bt,getParameter:yt,updateUBOMapping:Nt,uniformBlockBinding:qt,texStorage2D:ut,texStorage3D:mt,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:j,compressedTexSubImage3D:it,scissor:at,viewport:st,reset:oe}}function Mw(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,y){return _?new OffscreenCanvas(E,y):ju("canvas")}function g(E,y,z){let j=1;const it=zt(E);if((it.width>z||it.height>z)&&(j=z/Math.max(it.width,it.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ut=Math.floor(j*it.width),mt=Math.floor(j*it.height);u===void 0&&(u=M(ut,mt));const X=y?M(ut,mt):u;return X.width=ut,X.height=mt,X.getContext("2d").drawImage(E,0,0,ut,mt),It("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+ut+"x"+mt+")."),X}else return"data"in E&&It("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),E;return E}function f(E){return E.generateMipmaps}function m(E){e.generateMipmap(E)}function v(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(E,y,z,j,it,ut=!1){if(E!==null){if(e[E]!==void 0)return e[E];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let mt;j&&(mt=t.get("EXT_texture_norm16"),mt||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=y;if(y===e.RED&&(z===e.FLOAT&&(X=e.R32F),z===e.HALF_FLOAT&&(X=e.R16F),z===e.UNSIGNED_BYTE&&(X=e.R8),z===e.UNSIGNED_SHORT&&mt&&(X=mt.R16_EXT),z===e.SHORT&&mt&&(X=mt.R16_SNORM_EXT)),y===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.R8UI),z===e.UNSIGNED_SHORT&&(X=e.R16UI),z===e.UNSIGNED_INT&&(X=e.R32UI),z===e.BYTE&&(X=e.R8I),z===e.SHORT&&(X=e.R16I),z===e.INT&&(X=e.R32I)),y===e.RG&&(z===e.FLOAT&&(X=e.RG32F),z===e.HALF_FLOAT&&(X=e.RG16F),z===e.UNSIGNED_BYTE&&(X=e.RG8),z===e.UNSIGNED_SHORT&&mt&&(X=mt.RG16_EXT),z===e.SHORT&&mt&&(X=mt.RG16_SNORM_EXT)),y===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RG8UI),z===e.UNSIGNED_SHORT&&(X=e.RG16UI),z===e.UNSIGNED_INT&&(X=e.RG32UI),z===e.BYTE&&(X=e.RG8I),z===e.SHORT&&(X=e.RG16I),z===e.INT&&(X=e.RG32I)),y===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RGB8UI),z===e.UNSIGNED_SHORT&&(X=e.RGB16UI),z===e.UNSIGNED_INT&&(X=e.RGB32UI),z===e.BYTE&&(X=e.RGB8I),z===e.SHORT&&(X=e.RGB16I),z===e.INT&&(X=e.RGB32I)),y===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),z===e.UNSIGNED_INT&&(X=e.RGBA32UI),z===e.BYTE&&(X=e.RGBA8I),z===e.SHORT&&(X=e.RGBA16I),z===e.INT&&(X=e.RGBA32I)),y===e.RGB&&(z===e.UNSIGNED_SHORT&&mt&&(X=mt.RGB16_EXT),z===e.SHORT&&mt&&(X=mt.RGB16_SNORM_EXT),z===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),z===e.UNSIGNED_INT_10F_11F_11F_REV&&(X=e.R11F_G11F_B10F)),y===e.RGBA){const J=ut?Yu:ce.getTransfer(it);z===e.FLOAT&&(X=e.RGBA32F),z===e.HALF_FLOAT&&(X=e.RGBA16F),z===e.UNSIGNED_BYTE&&(X=J===ve?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT&&mt&&(X=mt.RGBA16_EXT),z===e.SHORT&&mt&&(X=mt.RGBA16_SNORM_EXT),z===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function w(E,y){let z;return E?y===null||y===Zi||y===Ol?z=e.DEPTH24_STENCIL8:y===Xi?z=e.DEPTH32F_STENCIL8:y===Nl&&(z=e.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Zi||y===Ol?z=e.DEPTH_COMPONENT24:y===Xi?z=e.DEPTH_COMPONENT32F:y===Nl&&(z=e.DEPTH_COMPONENT16),z}function T(E,y){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==yn&&E.minFilter!==Dn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function R(E){const y=E.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(E){const y=E.target;y.removeEventListener("dispose",x),D(y)}function A(E){const y=i.get(E);if(y.__webglInit===void 0)return;const z=E.source,j=p.get(z);if(j){const it=j[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&U(E),Object.keys(j).length===0&&p.delete(z)}i.remove(E)}function U(E){const y=i.get(E);e.deleteTexture(y.__webglTexture);const z=E.source,j=p.get(z);delete j[y.__cacheKey],r.memory.textures--}function D(E){const y=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let it=0;it<y.__webglFramebuffer[j].length;it++)e.deleteFramebuffer(y.__webglFramebuffer[j][it]);else e.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)e.deleteFramebuffer(y.__webglFramebuffer[j]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=E.textures;for(let j=0,it=z.length;j<it;j++){const ut=i.get(z[j]);ut.__webglTexture&&(e.deleteTexture(ut.__webglTexture),r.memory.textures--),i.remove(z[j])}i.remove(E)}let I=0;function q(){I=0}function Q(){return I}function B(E){I=E}function C(){const E=I;return E>=a.maxTextures&&It("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+a.maxTextures),I+=1,E}function L(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function k(E,y){const z=i.get(E);if(E.isVideoTexture&&Me(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){const j=E.image;if(j===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{W(z,E,y);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+y)}function K(E,y){const z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){W(z,E,y);return}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+y)}function rt(E,y){const z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){W(z,E,y);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+y)}function Tt(E,y){const z=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&z.__version!==E.version){et(z,E,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+y)}const Ct={[op]:e.REPEAT,[pa]:e.CLAMP_TO_EDGE,[lp]:e.MIRRORED_REPEAT},Xt={[yn]:e.NEAREST,[b1]:e.NEAREST_MIPMAP_NEAREST,[gc]:e.NEAREST_MIPMAP_LINEAR,[Dn]:e.LINEAR,[mh]:e.LINEAR_MIPMAP_NEAREST,[Ns]:e.LINEAR_MIPMAP_LINEAR},Wt={[A1]:e.NEVER,[U1]:e.ALWAYS,[R1]:e.LESS,[e0]:e.LEQUAL,[w1]:e.EQUAL,[n0]:e.GEQUAL,[C1]:e.GREATER,[D1]:e.NOTEQUAL};function Pt(E,y){if(y.type===Xi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Dn||y.magFilter===mh||y.magFilter===gc||y.magFilter===Ns||y.minFilter===Dn||y.minFilter===mh||y.minFilter===gc||y.minFilter===Ns)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Ct[y.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Ct[y.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Ct[y.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,Xt[y.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,Xt[y.minFilter]),y.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,Wt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===yn||y.minFilter!==gc&&y.minFilter!==Ns||y.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function tt(E,y){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",R));const j=y.source;let it=p.get(j);it===void 0&&(it={},p.set(j,it));const ut=L(y);if(ut!==E.__cacheKey){it[ut]===void 0&&(it[ut]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,z=!0),it[ut].usedTimes++;const mt=it[E.__cacheKey];mt!==void 0&&(it[E.__cacheKey].usedTimes--,mt.usedTimes===0&&U(y)),E.__cacheKey=ut,E.__webglTexture=it[ut].texture}return z}function gt(E,y,z){return Math.floor(Math.floor(E/z)/y)}function ht(E,y,z,j){const ut=E.updateRanges;if(ut.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,z,j,y.data);else{ut.sort((bt,at)=>bt.start-at.start);let mt=0;for(let bt=1;bt<ut.length;bt++){const at=ut[mt],st=ut[bt],Nt=at.start+at.count,qt=gt(st.start,y.width,4),oe=gt(at.start,y.width,4);st.start<=Nt+1&&qt===oe&&gt(st.start+st.count-1,y.width,4)===qt?at.count=Math.max(at.count,st.start+st.count-at.start):(++mt,ut[mt]=st)}ut.length=mt+1;const X=n.getParameter(e.UNPACK_ROW_LENGTH),J=n.getParameter(e.UNPACK_SKIP_PIXELS),yt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let bt=0,at=ut.length;bt<at;bt++){const st=ut[bt],Nt=Math.floor(st.start/4),qt=Math.ceil(st.count/4),oe=Nt%y.width,N=Math.floor(Nt/y.width),ct=qt,Y=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,oe,N,ct,Y,z,j,y.data)}E.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,X),n.pixelStorei(e.UNPACK_SKIP_PIXELS,J),n.pixelStorei(e.UNPACK_SKIP_ROWS,yt)}}function W(E,y,z){let j=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=e.TEXTURE_3D);const it=tt(E,y),ut=y.source;n.bindTexture(j,E.__webglTexture,e.TEXTURE0+z);const mt=i.get(ut);if(ut.version!==mt.__version||it===!0){if(n.activeTexture(e.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Y=ce.getPrimaries(ce.workingColorSpace),Et=y.colorSpace===Ya?null:ce.getPrimaries(y.colorSpace),ft=y.colorSpace===Ya||Y===Et?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let J=g(y.image,!1,a.maxTextureSize);J=_t(y,J);const yt=s.convert(y.format,y.colorSpace),bt=s.convert(y.type);let at=S(y.internalFormat,yt,bt,y.normalized,y.colorSpace,y.isVideoTexture);Pt(j,y);let st;const Nt=y.mipmaps,qt=y.isVideoTexture!==!0,oe=mt.__version===void 0||it===!0,N=ut.dataReady,ct=T(y,J);if(y.isDepthTexture)at=w(y.format===Os,y.type),oe&&(qt?n.texStorage2D(e.TEXTURE_2D,1,at,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,at,J.width,J.height,0,yt,bt,null));else if(y.isDataTexture)if(Nt.length>0){qt&&oe&&n.texStorage2D(e.TEXTURE_2D,ct,at,Nt[0].width,Nt[0].height);for(let Y=0,Et=Nt.length;Y<Et;Y++)st=Nt[Y],qt?N&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,st.width,st.height,yt,bt,st.data):n.texImage2D(e.TEXTURE_2D,Y,at,st.width,st.height,0,yt,bt,st.data);y.generateMipmaps=!1}else qt?(oe&&n.texStorage2D(e.TEXTURE_2D,ct,at,J.width,J.height),N&&ht(y,J,yt,bt)):n.texImage2D(e.TEXTURE_2D,0,at,J.width,J.height,0,yt,bt,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qt&&oe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,at,Nt[0].width,Nt[0].height,J.depth);for(let Y=0,Et=Nt.length;Y<Et;Y++)if(st=Nt[Y],y.format!==Li)if(yt!==null)if(qt){if(N)if(y.layerUpdates.size>0){const ft=D_(st.width,st.height,y.format,y.type);for(const nt of y.layerUpdates){const Ut=st.data.subarray(nt*ft/st.data.BYTES_PER_ELEMENT,(nt+1)*ft/st.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,nt,st.width,st.height,1,yt,Ut)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,st.width,st.height,J.depth,yt,st.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Y,at,st.width,st.height,J.depth,0,st.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,st.width,st.height,J.depth,yt,bt,st.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Y,at,st.width,st.height,J.depth,0,yt,bt,st.data)}else{qt&&oe&&n.texStorage2D(e.TEXTURE_2D,ct,at,Nt[0].width,Nt[0].height);for(let Y=0,Et=Nt.length;Y<Et;Y++)st=Nt[Y],y.format!==Li?yt!==null?qt?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,Y,0,0,st.width,st.height,yt,st.data):n.compressedTexImage2D(e.TEXTURE_2D,Y,at,st.width,st.height,0,st.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?N&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,st.width,st.height,yt,bt,st.data):n.texImage2D(e.TEXTURE_2D,Y,at,st.width,st.height,0,yt,bt,st.data)}else if(y.isDataArrayTexture)if(qt){if(oe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,at,J.width,J.height,J.depth),N)if(y.layerUpdates.size>0){const Y=D_(J.width,J.height,y.format,y.type);for(const Et of y.layerUpdates){const ft=J.data.subarray(Et*Y/J.data.BYTES_PER_ELEMENT,(Et+1)*Y/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Et,J.width,J.height,1,yt,bt,ft)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,yt,bt,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,at,J.width,J.height,J.depth,0,yt,bt,J.data);else if(y.isData3DTexture)qt?(oe&&n.texStorage3D(e.TEXTURE_3D,ct,at,J.width,J.height,J.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,yt,bt,J.data)):n.texImage3D(e.TEXTURE_3D,0,at,J.width,J.height,J.depth,0,yt,bt,J.data);else if(y.isFramebufferTexture){if(oe)if(qt)n.texStorage2D(e.TEXTURE_2D,ct,at,J.width,J.height);else{let Y=J.width,Et=J.height;for(let ft=0;ft<ct;ft++)n.texImage2D(e.TEXTURE_2D,ft,at,Y,Et,0,yt,bt,null),Y>>=1,Et>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){const Y=e.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),J.parentNode!==Y){Y.appendChild(J),d.add(y),Y.onpaint=Ht=>{const He=Ht.changedElements;for(const pe of d)He.includes(pe.image)&&(pe.needsUpdate=!0)},Y.requestPaint();return}const Et=0,ft=e.RGBA,nt=e.RGBA,Ut=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,Et,ft,nt,Ut,J),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(qt&&oe){const Y=zt(Nt[0]);n.texStorage2D(e.TEXTURE_2D,ct,at,Y.width,Y.height)}for(let Y=0,Et=Nt.length;Y<Et;Y++)st=Nt[Y],qt?N&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,yt,bt,st):n.texImage2D(e.TEXTURE_2D,Y,at,yt,bt,st);y.generateMipmaps=!1}else if(qt){if(oe){const Y=zt(J);n.texStorage2D(e.TEXTURE_2D,ct,at,Y.width,Y.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,yt,bt,J)}else n.texImage2D(e.TEXTURE_2D,0,at,yt,bt,J);f(y)&&m(j),mt.__version=ut.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function et(E,y,z){if(y.image.length!==6)return;const j=tt(E,y),it=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+z);const ut=i.get(it);if(it.version!==ut.__version||j===!0){n.activeTexture(e.TEXTURE0+z);const mt=ce.getPrimaries(ce.workingColorSpace),X=y.colorSpace===Ya?null:ce.getPrimaries(y.colorSpace),J=y.colorSpace===Ya||mt===X?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const yt=y.isCompressedTexture||y.image[0].isCompressedTexture,bt=y.image[0]&&y.image[0].isDataTexture,at=[];for(let nt=0;nt<6;nt++)!yt&&!bt?at[nt]=g(y.image[nt],!0,a.maxCubemapSize):at[nt]=bt?y.image[nt].image:y.image[nt],at[nt]=_t(y,at[nt]);const st=at[0],Nt=s.convert(y.format,y.colorSpace),qt=s.convert(y.type),oe=S(y.internalFormat,Nt,qt,y.normalized,y.colorSpace),N=y.isVideoTexture!==!0,ct=ut.__version===void 0||j===!0,Y=it.dataReady;let Et=T(y,st);Pt(e.TEXTURE_CUBE_MAP,y);let ft;if(yt){N&&ct&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Et,oe,st.width,st.height);for(let nt=0;nt<6;nt++){ft=at[nt].mipmaps;for(let Ut=0;Ut<ft.length;Ut++){const Ht=ft[Ut];y.format!==Li?Nt!==null?N?Y&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut,0,0,Ht.width,Ht.height,Nt,Ht.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut,oe,Ht.width,Ht.height,0,Ht.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut,0,0,Ht.width,Ht.height,Nt,qt,Ht.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut,oe,Ht.width,Ht.height,0,Nt,qt,Ht.data)}}}else{if(ft=y.mipmaps,N&&ct){ft.length>0&&Et++;const nt=zt(at[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Et,oe,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(bt){N?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,at[nt].width,at[nt].height,Nt,qt,at[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,oe,at[nt].width,at[nt].height,0,Nt,qt,at[nt].data);for(let Ut=0;Ut<ft.length;Ut++){const He=ft[Ut].image[nt].image;N?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut+1,0,0,He.width,He.height,Nt,qt,He.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut+1,oe,He.width,He.height,0,Nt,qt,He.data)}}else{N?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Nt,qt,at[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,oe,Nt,qt,at[nt]);for(let Ut=0;Ut<ft.length;Ut++){const Ht=ft[Ut];N?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut+1,0,0,Nt,qt,Ht.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Ut+1,oe,Nt,qt,Ht.image[nt])}}}f(y)&&m(e.TEXTURE_CUBE_MAP),ut.__version=it.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function St(E,y,z,j,it,ut){const mt=s.convert(z.format,z.colorSpace),X=s.convert(z.type),J=S(z.internalFormat,mt,X,z.normalized,z.colorSpace),yt=i.get(y),bt=i.get(z);if(bt.__renderTarget=y,!yt.__hasExternalTextures){const at=Math.max(1,y.width>>ut),st=Math.max(1,y.height>>ut);it===e.TEXTURE_3D||it===e.TEXTURE_2D_ARRAY?n.texImage3D(it,ut,J,at,st,y.depth,0,mt,X,null):n.texImage2D(it,ut,J,at,st,0,mt,X,null)}n.bindFramebuffer(e.FRAMEBUFFER,E),te(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,it,bt.__webglTexture,0,Ge(y)):(it===e.TEXTURE_2D||it>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,j,it,bt.__webglTexture,ut),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ee(E,y,z){if(e.bindRenderbuffer(e.RENDERBUFFER,E),y.depthBuffer){const j=y.depthTexture,it=j&&j.isDepthTexture?j.type:null,ut=w(y.stencilBuffer,it),mt=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;te(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ge(y),ut,y.width,y.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ge(y),ut,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,ut,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,mt,e.RENDERBUFFER,E)}else{const j=y.textures;for(let it=0;it<j.length;it++){const ut=j[it],mt=s.convert(ut.format,ut.colorSpace),X=s.convert(ut.type),J=S(ut.internalFormat,mt,X,ut.normalized,ut.colorSpace);te(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ge(y),J,y.width,y.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ge(y),J,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,J,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ot(E,y,z){const j=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=i.get(y.depthTexture);if(it.__renderTarget=y,(!it.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j){if(it.__webglInit===void 0&&(it.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),it.__webglTexture===void 0){it.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,it.__webglTexture),Pt(e.TEXTURE_CUBE_MAP,y.depthTexture);const yt=s.convert(y.depthTexture.format),bt=s.convert(y.depthTexture.type);let at;y.depthTexture.format===wa?at=e.DEPTH_COMPONENT24:y.depthTexture.format===Os&&(at=e.DEPTH24_STENCIL8);for(let st=0;st<6;st++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,at,y.width,y.height,0,yt,bt,null)}}else k(y.depthTexture,0);const ut=it.__webglTexture,mt=Ge(y),X=j?e.TEXTURE_CUBE_MAP_POSITIVE_X+z:e.TEXTURE_2D,J=y.depthTexture.format===Os?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===wa)te(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,X,ut,0,mt):e.framebufferTexture2D(e.FRAMEBUFFER,J,X,ut,0);else if(y.depthTexture.format===Os)te(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,X,ut,0,mt):e.framebufferTexture2D(e.FRAMEBUFFER,J,X,ut,0);else throw new Error("Unknown depthTexture format")}function _e(E){const y=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const j=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const it=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",it)};j.addEventListener("dispose",it),y.__depthDisposeCallback=it}y.__boundDepthTexture=j}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let j=0;j<6;j++)Ot(y.__webglFramebuffer[j],E,j);else{const j=E.texture.mipmaps;j&&j.length>0?Ot(y.__webglFramebuffer[0],E,0):Ot(y.__webglFramebuffer,E,0)}else if(z){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=e.createRenderbuffer(),ee(y.__webglDepthbuffer[j],E,!1);else{const it=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer[j];e.bindRenderbuffer(e.RENDERBUFFER,ut),e.framebufferRenderbuffer(e.FRAMEBUFFER,it,e.RENDERBUFFER,ut)}}else{const j=E.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),ee(y.__webglDepthbuffer,E,!1);else{const it=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ut),e.framebufferRenderbuffer(e.FRAMEBUFFER,it,e.RENDERBUFFER,ut)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function de(E,y,z){const j=i.get(E);y!==void 0&&St(j.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&_e(E)}function Bt(E){const y=E.texture,z=i.get(E),j=i.get(y);E.addEventListener("dispose",x);const it=E.textures,ut=E.isWebGLCubeRenderTarget===!0,mt=it.length>1;if(mt||(j.__webglTexture===void 0&&(j.__webglTexture=e.createTexture()),j.__version=y.version,r.memory.textures++),ut){z.__webglFramebuffer=[];for(let X=0;X<6;X++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[X]=[];for(let J=0;J<y.mipmaps.length;J++)z.__webglFramebuffer[X][J]=e.createFramebuffer()}else z.__webglFramebuffer[X]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let X=0;X<y.mipmaps.length;X++)z.__webglFramebuffer[X]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(mt)for(let X=0,J=it.length;X<J;X++){const yt=i.get(it[X]);yt.__webglTexture===void 0&&(yt.__webglTexture=e.createTexture(),r.memory.textures++)}if(E.samples>0&&te(E)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let X=0;X<it.length;X++){const J=it[X];z.__webglColorRenderbuffer[X]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[X]);const yt=s.convert(J.format,J.colorSpace),bt=s.convert(J.type),at=S(J.internalFormat,yt,bt,J.normalized,J.colorSpace,E.isXRRenderTarget===!0),st=Ge(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,st,at,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+X,e.RENDERBUFFER,z.__webglColorRenderbuffer[X])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),ee(z.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ut){n.bindTexture(e.TEXTURE_CUBE_MAP,j.__webglTexture),Pt(e.TEXTURE_CUBE_MAP,y);for(let X=0;X<6;X++)if(y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)St(z.__webglFramebuffer[X][J],E,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+X,J);else St(z.__webglFramebuffer[X],E,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);f(y)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(mt){for(let X=0,J=it.length;X<J;X++){const yt=it[X],bt=i.get(yt);let at=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(at=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(at,bt.__webglTexture),Pt(at,yt),St(z.__webglFramebuffer,E,yt,e.COLOR_ATTACHMENT0+X,at,0),f(yt)&&m(at)}n.unbindTexture()}else{let X=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(X=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(X,j.__webglTexture),Pt(X,y),y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)St(z.__webglFramebuffer[J],E,y,e.COLOR_ATTACHMENT0,X,J);else St(z.__webglFramebuffer,E,y,e.COLOR_ATTACHMENT0,X,0);f(y)&&m(X),n.unbindTexture()}E.depthBuffer&&_e(E)}function Je(E){const y=E.textures;for(let z=0,j=y.length;z<j;z++){const it=y[z];if(f(it)){const ut=v(E),mt=i.get(it).__webglTexture;n.bindTexture(ut,mt),m(ut),n.unbindTexture()}}}const Ce=[],cn=[];function P(E){if(E.samples>0){if(te(E)===!1){const y=E.textures,z=E.width,j=E.height;let it=e.COLOR_BUFFER_BIT;const ut=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,mt=i.get(E),X=y.length>1;if(X)for(let yt=0;yt<y.length;yt++)n.bindFramebuffer(e.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const J=E.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(it|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(it|=e.STENCIL_BUFFER_BIT)),X){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,mt.__webglColorRenderbuffer[yt]);const bt=i.get(y[yt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,bt,0)}e.blitFramebuffer(0,0,z,j,0,0,z,j,it,e.NEAREST),l===!0&&(Ce.length=0,cn.length=0,Ce.push(e.COLOR_ATTACHMENT0+yt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ce.push(ut),cn.push(ut),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,cn)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),X)for(let yt=0;yt<y.length;yt++){n.bindFramebuffer(e.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.RENDERBUFFER,mt.__webglColorRenderbuffer[yt]);const bt=i.get(y[yt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.TEXTURE_2D,bt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const y=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function Ge(E){return Math.min(a.maxSamples,E.samples)}function te(E){const y=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Me(E){const y=r.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function _t(E,y){const z=E.colorSpace,j=E.format,it=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==qu&&z!==Ya&&(ce.getTransfer(z)===ve?(j!==Li||it!==ei)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",z)),y}function zt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=q,this.getTextureUnits=Q,this.setTextureUnits=B,this.setTexture2D=k,this.setTexture2DArray=K,this.setTexture3D=rt,this.setTextureCube=Tt,this.rebindTextures=de,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=St,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function bw(e,t){function n(i,a=Ya){let s;const r=ce.getTransfer(a);if(i===ei)return e.UNSIGNED_BYTE;if(i===Km)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Qm)return e.UNSIGNED_SHORT_5_5_5_1;if(i===vy)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===xy)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===gy)return e.BYTE;if(i===_y)return e.SHORT;if(i===Nl)return e.UNSIGNED_SHORT;if(i===Zm)return e.INT;if(i===Zi)return e.UNSIGNED_INT;if(i===Xi)return e.FLOAT;if(i===Ra)return e.HALF_FLOAT;if(i===Sy)return e.ALPHA;if(i===yy)return e.RGB;if(i===Li)return e.RGBA;if(i===wa)return e.DEPTH_COMPONENT;if(i===Os)return e.DEPTH_STENCIL;if(i===My)return e.RED;if(i===Jm)return e.RED_INTEGER;if(i===Ys)return e.RG;if(i===$m)return e.RG_INTEGER;if(i===t0)return e.RGBA_INTEGER;if(i===lu||i===cu||i===uu||i===fu)if(r===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cp||i===up||i===fp||i===hp)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===cp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===up)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dp||i===pp||i===mp||i===gp||i===_p||i===Xu||i===vp)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===dp||i===pp)return r===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===mp)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===gp)return s.COMPRESSED_R11_EAC;if(i===_p)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Xu)return s.COMPRESSED_RG11_EAC;if(i===vp)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===xp||i===Sp||i===yp||i===Mp||i===bp||i===Ep||i===Tp||i===Ap||i===Rp||i===wp||i===Cp||i===Dp||i===Up||i===Lp)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xp)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sp)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yp)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mp)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bp)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ep)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tp)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ap)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rp)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wp)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cp)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dp)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Up)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lp)return r===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Np||i===Op||i===Pp)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Np)return r===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Op)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bp||i===Fp||i===Wu||i===Ip)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ip)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ol?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const Ew=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tw=`
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

}`;class Aw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new Oy(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Oi({vertexShader:Ew,fragmentShader:Tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Cn(new Ql(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rw extends $s{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,_=null;const M=typeof XRWebGLBinding<"u",g=new Aw,f={},m=n.getContextAttributes();let v=null,S=null;const w=[],T=[],R=new jt;let x=null;const A=new $n;A.viewport=new je;const U=new $n;U.viewport=new je;const D=[A,U],I=new FT;let q=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let gt=w[tt];return gt===void 0&&(gt=new yh,w[tt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(tt){let gt=w[tt];return gt===void 0&&(gt=new yh,w[tt]=gt),gt.getGripSpace()},this.getHand=function(tt){let gt=w[tt];return gt===void 0&&(gt=new yh,w[tt]=gt),gt.getHandSpace()};function B(tt){const gt=T.indexOf(tt.inputSource);if(gt===-1)return;const ht=w[gt];ht!==void 0&&(ht.update(tt.inputSource,tt.frame,c||r),ht.dispatchEvent({type:tt.type,data:tt.inputSource}))}function C(){a.removeEventListener("select",B),a.removeEventListener("selectstart",B),a.removeEventListener("selectend",B),a.removeEventListener("squeeze",B),a.removeEventListener("squeezestart",B),a.removeEventListener("squeezeend",B),a.removeEventListener("end",C),a.removeEventListener("inputsourceschange",L);for(let tt=0;tt<w.length;tt++){const gt=T[tt];gt!==null&&(T[tt]=null,w[tt].disconnect(gt))}q=null,Q=null,g.reset();for(const tt in f)delete f[tt];t.setRenderTarget(v),p=null,u=null,d=null,a=null,S=null,Pt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){s=tt,i.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,i.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(a,n)),d},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(tt){if(a=tt,a!==null){if(v=t.getRenderTarget(),a.addEventListener("select",B),a.addEventListener("selectstart",B),a.addEventListener("selectend",B),a.addEventListener("squeeze",B),a.addEventListener("squeezestart",B),a.addEventListener("squeezeend",B),a.addEventListener("end",C),a.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,W=null,et=null;m.depth&&(et=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ht=m.stencil?Os:wa,W=m.stencil?Ol:Zi);const St={colorFormat:n.RGBA8,depthFormat:et,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(St),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new ji(u.textureWidth,u.textureHeight,{format:Li,type:ei,depthTexture:new go(u.textureWidth,u.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,ht),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ji(p.framebufferWidth,p.framebufferHeight,{format:Li,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Pt.setContext(a),Pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function L(tt){for(let gt=0;gt<tt.removed.length;gt++){const ht=tt.removed[gt],W=T.indexOf(ht);W>=0&&(T[W]=null,w[W].disconnect(ht))}for(let gt=0;gt<tt.added.length;gt++){const ht=tt.added[gt];let W=T.indexOf(ht);if(W===-1){for(let St=0;St<w.length;St++)if(St>=T.length){T.push(ht),W=St;break}else if(T[St]===null){T[St]=ht,W=St;break}if(W===-1)break}const et=w[W];et&&et.connect(ht)}}const k=new O,K=new O;function rt(tt,gt,ht){k.setFromMatrixPosition(gt.matrixWorld),K.setFromMatrixPosition(ht.matrixWorld);const W=k.distanceTo(K),et=gt.projectionMatrix.elements,St=ht.projectionMatrix.elements,ee=et[14]/(et[10]-1),Ot=et[14]/(et[10]+1),_e=(et[9]+1)/et[5],de=(et[9]-1)/et[5],Bt=(et[8]-1)/et[0],Je=(St[8]+1)/St[0],Ce=ee*Bt,cn=ee*Je,P=W/(-Bt+Je),Ge=P*-Bt;if(gt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ge),tt.translateZ(P),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),et[10]===-1)tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const te=ee+P,Me=Ot+P,_t=Ce-Ge,zt=cn+(W-Ge),E=_e*Ot/Me*te,y=de*Ot/Me*te;tt.projectionMatrix.makePerspective(_t,zt,E,y,te,Me),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Tt(tt,gt){gt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(gt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(a===null)return;let gt=tt.near,ht=tt.far;g.texture!==null&&(g.depthNear>0&&(gt=g.depthNear),g.depthFar>0&&(ht=g.depthFar)),I.near=U.near=A.near=gt,I.far=U.far=A.far=ht,(q!==I.near||Q!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),q=I.near,Q=I.far),I.layers.mask=tt.layers.mask|6,A.layers.mask=I.layers.mask&-5,U.layers.mask=I.layers.mask&-3;const W=tt.parent,et=I.cameras;Tt(I,W);for(let St=0;St<et.length;St++)Tt(et[St],W);et.length===2?rt(I,A,U):I.projectionMatrix.copy(A.projectionMatrix),Ct(tt,I,W)};function Ct(tt,gt,ht){ht===null?tt.matrix.copy(gt.matrixWorld):(tt.matrix.copy(ht.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(gt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Bl*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(tt){l=tt,u!==null&&(u.fixedFoveation=tt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=tt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(tt){return f[tt]};let Xt=null;function Wt(tt,gt){if(h=gt.getViewerPose(c||r),_=gt,h!==null){const ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let W=!1;ht.length!==I.cameras.length&&(I.cameras.length=0,W=!0);for(let Ot=0;Ot<ht.length;Ot++){const _e=ht[Ot];let de=null;if(p!==null)de=p.getViewport(_e);else{const Je=d.getViewSubImage(u,_e);de=Je.viewport,Ot===0&&(t.setRenderTargetTextures(S,Je.colorTexture,Je.depthStencilTexture),t.setRenderTarget(S))}let Bt=D[Ot];Bt===void 0&&(Bt=new $n,Bt.layers.enable(Ot),Bt.viewport=new je,D[Ot]=Bt),Bt.matrix.fromArray(_e.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(_e.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(de.x,de.y,de.width,de.height),Ot===0&&(I.matrix.copy(Bt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),W===!0&&I.cameras.push(Bt)}const et=a.enabledFeatures;if(et&&et.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const Ot=d.getDepthInformation(ht[0]);Ot&&Ot.isValid&&Ot.texture&&g.init(Ot,a.renderState)}if(et&&et.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let Ot=0;Ot<ht.length;Ot++){const _e=ht[Ot].camera;if(_e){let de=f[_e];de||(de=new Oy,f[_e]=de);const Bt=d.getCameraImage(_e);de.sourceTexture=Bt}}}}for(let ht=0;ht<w.length;ht++){const W=T[ht],et=w[ht];W!==null&&et!==void 0&&et.update(W,gt,c||r)}Xt&&Xt(tt,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),_=null}const Pt=new Gy;Pt.setAnimationLoop(Wt),this.setAnimationLoop=function(tt){Xt=tt},this.dispose=function(){}}}const ww=new Ie,Yy=new Yt;Yy.set(-1,0,0,0,1,0,0,0,1);function Cw(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Py(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,m,v,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,S)):f.isMeshMatcapMaterial?(s(g,f),_(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),M(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===kn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===kn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=t.get(f),v=m.envMap,S=m.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(ww.makeRotationFromEuler(S)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Yy),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=v*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Dw(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const S=v.program;i.uniformBlockBinding(m,S)}function c(m,v){let S=a[m.id];S===void 0&&(_(m),S=h(m),a[m.id]=S,m.addEventListener("dispose",g));const w=v.program;i.updateUBOMapping(m,w);const T=t.render.frame;s[m.id]!==T&&(u(m),s[m.id]=T)}function h(m){const v=d();m.__bindingPointIndex=v;const S=e.createBuffer(),w=m.__size,T=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,w,T),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,S),S}function d(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const v=a[m.id],S=m.uniforms,w=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let T=0,R=S.length;T<R;T++){const x=Array.isArray(S[T])?S[T]:[S[T]];for(let A=0,U=x.length;A<U;A++){const D=x[A];if(p(D,T,A,w)===!0){const I=D.__offset,q=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let B=0;B<q.length;B++){const C=q[B],L=M(C);typeof C=="number"||typeof C=="boolean"?(D.__data[0]=C,e.bufferSubData(e.UNIFORM_BUFFER,I+Q,D.__data)):C.isMatrix3?(D.__data[0]=C.elements[0],D.__data[1]=C.elements[1],D.__data[2]=C.elements[2],D.__data[3]=0,D.__data[4]=C.elements[3],D.__data[5]=C.elements[4],D.__data[6]=C.elements[5],D.__data[7]=0,D.__data[8]=C.elements[6],D.__data[9]=C.elements[7],D.__data[10]=C.elements[8],D.__data[11]=0):ArrayBuffer.isView(C)?D.__data.set(new C.constructor(C.buffer,C.byteOffset,D.__data.length)):(C.toArray(D.__data,Q),Q+=L.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,I,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(m,v,S,w){const T=m.value,R=v+"_"+S;if(w[R]===void 0)return typeof T=="number"||typeof T=="boolean"?w[R]=T:ArrayBuffer.isView(T)?w[R]=T.slice():w[R]=T.clone(),!0;{const x=w[R];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return w[R]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function _(m){const v=m.uniforms;let S=0;const w=16;for(let R=0,x=v.length;R<x;R++){const A=Array.isArray(v[R])?v[R]:[v[R]];for(let U=0,D=A.length;U<D;U++){const I=A[U],q=Array.isArray(I.value)?I.value:[I.value];for(let Q=0,B=q.length;Q<B;Q++){const C=q[Q],L=M(C),k=S%w,K=k%L.boundary,rt=k+K;S+=K,rt!==0&&w-rt<L.storage&&(S+=w-rt),I.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=L.storage}}}const T=S%w;return T>0&&(S+=w-T),m.__size=S,m.__cache={},this}function M(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(v.boundary=16,v.storage=m.byteLength):It("WebGLRenderer: Unsupported uniform value type.",m),v}function g(m){const v=m.target;v.removeEventListener("dispose",g);const S=r.indexOf(v.__bindingPointIndex);r.splice(S,1),e.deleteBuffer(a[v.id]),delete a[v.id],delete s[v.id]}function f(){for(const m in a)e.deleteBuffer(a[m]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}const Uw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function Lw(){return zi===null&&(zi=new xT(Uw,16,16,Ys,Ra),zi.name="DFG_LUT",zi.minFilter=Dn,zi.magFilter=Dn,zi.wrapS=pa,zi.wrapT=pa,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class Nw{constructor(t={}){const{canvas:n=N1(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ei}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;const M=p,g=new Set([t0,$m,Jm]),f=new Set([ei,Zi,Nl,Ol,Km,Qm]),m=new Uint32Array(4),v=new Int32Array(4),S=new O;let w=null,T=null;const R=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let D=!1,I=null;this._outputColorSpace=pi;let q=0,Q=0,B=null,C=-1,L=null;const k=new je,K=new je;let rt=null;const Tt=new Qt(0);let Ct=0,Xt=n.width,Wt=n.height,Pt=1,tt=null,gt=null;const ht=new je(0,0,Xt,Wt),W=new je(0,0,Xt,Wt);let et=!1;const St=new o0;let ee=!1,Ot=!1;const _e=new Ie,de=new O,Bt=new je,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function cn(){return B===null?Pt:1}let P=i;function Ge(b,F){return n.getContext(b,F)}try{const b={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jm}`),n.addEventListener("webglcontextlost",nt,!1),n.addEventListener("webglcontextrestored",Ut,!1),n.addEventListener("webglcontextcreationerror",Ht,!1),P===null){const F="webgl2";if(P=Ge(F,b),P===null)throw Ge(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw le("WebGLRenderer: "+b.message),b}let te,Me,_t,zt,E,y,z,j,it,ut,mt,X,J,yt,bt,at,st,Nt,qt,oe,N,ct,Y;function Et(){te=new L3(P),te.init(),N=new bw(P,te),Me=new E3(P,te,t,N),_t=new yw(P,te),Me.reversedDepthBuffer&&u&&_t.buffers.depth.setReversed(!0),zt=new P3(P),E=new ow,y=new Mw(P,te,_t,E,Me,N,zt),z=new U3(U),j=new zT(P),ct=new M3(P,j),it=new N3(P,j,zt,ct),ut=new F3(P,it,j,ct,zt),Nt=new B3(P,Me,y),bt=new T3(E),mt=new rw(U,z,te,Me,ct,bt),X=new Cw(U,E),J=new cw,yt=new mw(te),st=new y3(U,z,_t,ut,_,l),at=new Sw(U,ut,Me),Y=new Dw(P,zt,Me,_t),qt=new b3(P,te,zt),oe=new O3(P,te,zt),zt.programs=mt.programs,U.capabilities=Me,U.extensions=te,U.properties=E,U.renderLists=J,U.shadowMap=at,U.state=_t,U.info=zt}Et(),M!==ei&&(A=new z3(M,n.width,n.height,a,s));const ft=new Rw(U,P);this.xr=ft,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Pt},this.setPixelRatio=function(b){b!==void 0&&(Pt=b,this.setSize(Xt,Wt,!1))},this.getSize=function(b){return b.set(Xt,Wt)},this.setSize=function(b,F,V=!0){if(ft.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}Xt=b,Wt=F,n.width=Math.floor(b*Pt),n.height=Math.floor(F*Pt),V===!0&&(n.style.width=b+"px",n.style.height=F+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Xt*Pt,Wt*Pt).floor()},this.setDrawingBufferSize=function(b,F,V){Xt=b,Wt=F,Pt=V,n.width=Math.floor(b*V),n.height=Math.floor(F*V),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(M===ei){le("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){It("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(ht)},this.setViewport=function(b,F,V,G){b.isVector4?ht.set(b.x,b.y,b.z,b.w):ht.set(b,F,V,G),_t.viewport(k.copy(ht).multiplyScalar(Pt).round())},this.getScissor=function(b){return b.copy(W)},this.setScissor=function(b,F,V,G){b.isVector4?W.set(b.x,b.y,b.z,b.w):W.set(b,F,V,G),_t.scissor(K.copy(W).multiplyScalar(Pt).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(b){_t.setScissorTest(et=b)},this.setOpaqueSort=function(b){tt=b},this.setTransparentSort=function(b){gt=b},this.getClearColor=function(b){return b.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,V=!0){let G=0;if(b){let H=!1;if(B!==null){const xt=B.texture.format;H=g.has(xt)}if(H){const xt=B.texture.type,wt=f.has(xt),vt=st.getClearColor(),dt=st.getClearAlpha(),pt=vt.r,Vt=vt.g,Jt=vt.b;wt?(m[0]=pt,m[1]=Vt,m[2]=Jt,m[3]=dt,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=pt,v[1]=Vt,v[2]=Jt,v[3]=dt,P.clearBufferiv(P.COLOR,0,v))}else G|=P.COLOR_BUFFER_BIT}F&&(G|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){n.removeEventListener("webglcontextlost",nt,!1),n.removeEventListener("webglcontextrestored",Ut,!1),n.removeEventListener("webglcontextcreationerror",Ht,!1),st.dispose(),J.dispose(),yt.dispose(),E.dispose(),z.dispose(),ut.dispose(),ct.dispose(),Y.dispose(),mt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",wo),ft.removeEventListener("sessionend",Co),ot.stop()};function nt(b){b.preventDefault(),Zu("WebGLRenderer: Context Lost."),D=!0}function Ut(){Zu("WebGLRenderer: Context Restored."),D=!1;const b=zt.autoReset,F=at.enabled,V=at.autoUpdate,G=at.needsUpdate,H=at.type;Et(),zt.autoReset=b,at.enabled=F,at.autoUpdate=V,at.needsUpdate=G,at.type=H}function Ht(b){le("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function He(b){const F=b.target;F.removeEventListener("dispose",He),pe(F)}function pe(b){ci(b),E.remove(b)}function ci(b){const F=E.get(b).programs;F!==void 0&&(F.forEach(function(V){mt.releaseProgram(V)}),b.isShaderMaterial&&mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,V,G,H,xt){F===null&&(F=Je);const wt=H.isMesh&&H.matrixWorld.determinant()<0,vt=Ti(b,F,V,G,H);_t.setMaterial(G,wt);let dt=V.index,pt=1;if(G.wireframe===!0){if(dt=it.getWireframeAttribute(V),dt===void 0)return;pt=2}const Vt=V.drawRange,Jt=V.attributes.position;let Lt=Vt.start*pt,he=(Vt.start+Vt.count)*pt;xt!==null&&(Lt=Math.max(Lt,xt.start*pt),he=Math.min(he,(xt.start+xt.count)*pt)),dt!==null?(Lt=Math.max(Lt,0),he=Math.min(he,dt.count)):Jt!=null&&(Lt=Math.max(Lt,0),he=Math.min(he,Jt.count));const Oe=he-Lt;if(Oe<0||Oe===1/0)return;ct.setup(H,G,vt,V,dt);let Xe,Te=qt;if(dt!==null&&(Xe=j.get(dt),Te=oe,Te.setIndex(Xe)),H.isMesh)G.wireframe===!0?(_t.setLineWidth(G.wireframeLinewidth*cn()),Te.setMode(P.LINES)):Te.setMode(P.TRIANGLES);else if(H.isLine){let An=G.linewidth;An===void 0&&(An=1),_t.setLineWidth(An*cn()),H.isLineSegments?Te.setMode(P.LINES):H.isLineLoop?Te.setMode(P.LINE_LOOP):Te.setMode(P.LINE_STRIP)}else H.isPoints?Te.setMode(P.POINTS):H.isSprite&&Te.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Te.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const An=H._multiDrawStarts,Dt=H._multiDrawCounts,jn=H._multiDrawCount,fe=dt?j.get(dt).bytesPerElement:1,fi=E.get(G).currentProgram.getUniforms();for(let Fi=0;Fi<jn;Fi++)fi.setValue(P,"_gl_DrawID",Fi),Te.render(An[Fi]/fe,Dt[Fi])}else if(H.isInstancedMesh)Te.renderInstances(Lt,Oe,H.count);else if(V.isInstancedBufferGeometry){const An=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Dt=Math.min(V.instanceCount,An);Te.renderInstances(Lt,Oe,Dt)}else Te.render(Lt,Oe)};function qn(b,F,V){b.transparent===!0&&b.side===ua&&b.forceSinglePass===!1?(b.side=kn,b.needsUpdate=!0,Ue(b,F,V),b.side=ps,b.needsUpdate=!0,Ue(b,F,V),b.side=ua):Ue(b,F,V)}this.compile=function(b,F,V=null){V===null&&(V=b),T=yt.get(V),T.init(F),x.push(T),V.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),b!==V&&b.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const G=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const xt=H.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){const vt=xt[wt];qn(vt,V,H),G.add(vt)}else qn(xt,V,H),G.add(xt)}),T=x.pop(),G},this.compileAsync=function(b,F,V=null){const G=this.compile(b,F,V);return new Promise(H=>{function xt(){if(G.forEach(function(wt){E.get(wt).currentProgram.isReady()&&G.delete(wt)}),G.size===0){H(b);return}setTimeout(xt,10)}te.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let ir=null;function $l(b){ir&&ir(b)}function wo(){ot.stop()}function Co(){ot.start()}const ot=new Gy;ot.setAnimationLoop($l),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(b){ir=b,ft.setAnimationLoop(b),b===null?ot.stop():ot.start()},ft.addEventListener("sessionstart",wo),ft.addEventListener("sessionend",Co),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(b,F);const V=ft.enabled===!0&&ft.isPresenting===!0,G=A!==null&&(B===null||V)&&A.begin(U,B);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(F),F=ft.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,F,B),T=yt.get(b,x.length),T.init(F),T.state.textureUnits=y.getTextureUnits(),x.push(T),_e.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),St.setFromProjectionMatrix(_e,Wi,F.reversedDepth),Ot=this.localClippingEnabled,ee=bt.init(this.clippingPlanes,Ot),w=J.get(b,R.length),w.init(),R.push(w),ft.enabled===!0&&ft.isPresenting===!0){const wt=U.xr.getDepthSensingMesh();wt!==null&&Rt(wt,F,-1/0,U.sortObjects)}Rt(b,F,0,U.sortObjects),w.finish(),U.sortObjects===!0&&w.sort(tt,gt),Ce=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ce&&st.addToRenderList(w,b),this.info.render.frame++,ee===!0&&bt.beginShadows();const H=T.state.shadowsArray;if(at.render(H,b,F),ee===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&A.hasRenderPass())===!1){const wt=w.opaque,vt=w.transmissive;if(T.setupLights(),F.isArrayCamera){const dt=F.cameras;if(vt.length>0)for(let pt=0,Vt=dt.length;pt<Vt;pt++){const Jt=dt[pt];Ft(wt,vt,b,Jt)}Ce&&st.render(b);for(let pt=0,Vt=dt.length;pt<Vt;pt++){const Jt=dt[pt];ne(w,b,Jt,Jt.viewport)}}else vt.length>0&&Ft(wt,vt,b,F),Ce&&st.render(b),ne(w,b,F)}B!==null&&Q===0&&(y.updateMultisampleRenderTarget(B),y.updateRenderTargetMipmap(B)),G&&A.end(U),b.isScene===!0&&b.onAfterRender(U,b,F),ct.resetDefaultState(),C=-1,L=null,x.pop(),x.length>0?(T=x[x.length-1],y.setTextureUnits(T.state.textureUnits),ee===!0&&bt.setGlobalState(U.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,I!==null&&I.renderEnd()};function Rt(b,F,V,G){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||St.intersectsSprite(b)){G&&Bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_e);const wt=ut.update(b),vt=b.material;vt.visible&&w.push(b,wt,vt,V,Bt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||St.intersectsObject(b))){const wt=ut.update(b),vt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Bt.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Bt.copy(wt.boundingSphere.center)),Bt.applyMatrix4(b.matrixWorld).applyMatrix4(_e)),Array.isArray(vt)){const dt=wt.groups;for(let pt=0,Vt=dt.length;pt<Vt;pt++){const Jt=dt[pt],Lt=vt[Jt.materialIndex];Lt&&Lt.visible&&w.push(b,wt,Lt,V,Bt.z,Jt)}}else vt.visible&&w.push(b,wt,vt,V,Bt.z,null)}}const xt=b.children;for(let wt=0,vt=xt.length;wt<vt;wt++)Rt(xt[wt],F,V,G)}function ne(b,F,V,G){const{opaque:H,transmissive:xt,transparent:wt}=b;T.setupLightsView(V),ee===!0&&bt.setGlobalState(U.clippingPlanes,V),G&&_t.viewport(k.copy(G)),H.length>0&&kt(H,F,V),xt.length>0&&kt(xt,F,V),wt.length>0&&kt(wt,F,V),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ft(b,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Lt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new ji(1,1,{generateMipmaps:!0,type:Lt?Ra:ei,minFilter:Ns,samples:Math.max(4,Me.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace})}const xt=T.state.transmissionRenderTarget[G.id],wt=G.viewport||k;xt.setSize(wt.z*U.transmissionResolutionScale,wt.w*U.transmissionResolutionScale);const vt=U.getRenderTarget(),dt=U.getActiveCubeFace(),pt=U.getActiveMipmapLevel();U.setRenderTarget(xt),U.getClearColor(Tt),Ct=U.getClearAlpha(),Ct<1&&U.setClearColor(16777215,.5),U.clear(),Ce&&st.render(V);const Vt=U.toneMapping;U.toneMapping=Yi;const Jt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),ee===!0&&bt.setGlobalState(U.clippingPlanes,G),kt(b,V,G),y.updateMultisampleRenderTarget(xt),y.updateRenderTargetMipmap(xt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let he=0,Oe=F.length;he<Oe;he++){const Xe=F[he],{object:Te,geometry:An,material:Dt,group:jn}=Xe;if(Dt.side===ua&&Te.layers.test(G.layers)){const fe=Dt.side;Dt.side=kn,Dt.needsUpdate=!0,De(Te,V,G,An,Dt,jn),Dt.side=fe,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(y.updateMultisampleRenderTarget(xt),y.updateRenderTargetMipmap(xt))}U.setRenderTarget(vt,dt,pt),U.setClearColor(Tt,Ct),Jt!==void 0&&(G.viewport=Jt),U.toneMapping=Vt}function kt(b,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let H=0,xt=b.length;H<xt;H++){const wt=b[H],{object:vt,geometry:dt,group:pt}=wt;let Vt=wt.material;Vt.allowOverride===!0&&G!==null&&(Vt=G),vt.layers.test(V.layers)&&De(vt,F,V,dt,Vt,pt)}}function De(b,F,V,G,H,xt){b.onBeforeRender(U,F,V,G,H,xt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(U,F,V,G,b,xt),H.transparent===!0&&H.side===ua&&H.forceSinglePass===!1?(H.side=kn,H.needsUpdate=!0,U.renderBufferDirect(V,F,G,H,b,xt),H.side=ps,H.needsUpdate=!0,U.renderBufferDirect(V,F,G,H,b,xt),H.side=ua):U.renderBufferDirect(V,F,G,H,b,xt),b.onAfterRender(U,F,V,G,H,xt)}function Ue(b,F,V){F.isScene!==!0&&(F=Je);const G=E.get(b),H=T.state.lights,xt=T.state.shadowsArray,wt=H.state.version,vt=mt.getParameters(b,H.state,xt,F,V,T.state.lightProbeGridArray),dt=mt.getProgramCacheKey(vt);let pt=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const Vt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=z.get(b.envMap||G.environment,Vt),G.envMapRotation=G.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,pt===void 0&&(b.addEventListener("dispose",He),pt=new Map,G.programs=pt);let Jt=pt.get(dt);if(Jt!==void 0){if(G.currentProgram===Jt&&G.lightsStateVersion===wt)return un(b,vt),Jt}else vt.uniforms=mt.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,V,vt),b.onBeforeCompile(vt,U),Jt=mt.acquireProgram(vt,dt),pt.set(dt,Jt),G.uniforms=vt.uniforms;const Lt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=bt.uniform),un(b,vt),G.needsLights=ui(b),G.lightsStateVersion=wt,G.needsLights&&(Lt.ambientLightColor.value=H.state.ambient,Lt.lightProbe.value=H.state.probe,Lt.directionalLights.value=H.state.directional,Lt.directionalLightShadows.value=H.state.directionalShadow,Lt.spotLights.value=H.state.spot,Lt.spotLightShadows.value=H.state.spotShadow,Lt.rectAreaLights.value=H.state.rectArea,Lt.ltc_1.value=H.state.rectAreaLTC1,Lt.ltc_2.value=H.state.rectAreaLTC2,Lt.pointLights.value=H.state.point,Lt.pointLightShadows.value=H.state.pointShadow,Lt.hemisphereLights.value=H.state.hemi,Lt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Lt.spotLightMatrix.value=H.state.spotLightMatrix,Lt.spotLightMap.value=H.state.spotLightMap,Lt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=Jt,G.uniformsList=null,Jt}function Ve(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=hu.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function un(b,F){const V=E.get(b);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Yn(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let V=0,G=b.length;V<G;V++){const H=b[V];if(H.texture!==null&&H.boundingBox.containsPoint(S))return H}return null}function Ti(b,F,V,G,H){F.isScene!==!0&&(F=Je),y.resetTextureUnits();const xt=F.fog,wt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,vt=B===null?U.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ce.workingColorSpace,dt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,pt=z.get(G.envMap||wt,dt),Vt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Jt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Lt=!!V.morphAttributes.position,he=!!V.morphAttributes.normal,Oe=!!V.morphAttributes.color;let Xe=Yi;G.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Xe=U.toneMapping);const Te=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,An=Te!==void 0?Te.length:0,Dt=E.get(G),jn=T.state.lights;if(ee===!0&&(Ot===!0||b!==L)){const Le=b===L&&G.id===C;bt.setState(G,b,Le)}let fe=!1;G.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==jn.state.version||Dt.outputColorSpace!==vt||H.isBatchedMesh&&Dt.batching===!1||!H.isBatchedMesh&&Dt.batching===!0||H.isBatchedMesh&&Dt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Dt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Dt.instancing===!1||!H.isInstancedMesh&&Dt.instancing===!0||H.isSkinnedMesh&&Dt.skinning===!1||!H.isSkinnedMesh&&Dt.skinning===!0||H.isInstancedMesh&&Dt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Dt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Dt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Dt.instancingMorph===!1&&H.morphTexture!==null||Dt.envMap!==pt||G.fog===!0&&Dt.fog!==xt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==bt.numPlanes||Dt.numIntersection!==bt.numIntersection)||Dt.vertexAlphas!==Vt||Dt.vertexTangents!==Jt||Dt.morphTargets!==Lt||Dt.morphNormals!==he||Dt.morphColors!==Oe||Dt.toneMapping!==Xe||Dt.morphTargetsCount!==An||!!Dt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Dt.__version=G.version);let fi=Dt.currentProgram;fe===!0&&(fi=Ue(G,F,H),I&&G.isNodeMaterial&&I.onUpdateProgram(G,fi,Dt));let Fi=!1,Da=!1,rr=!1;const Ae=fi.getUniforms(),Ze=Dt.uniforms;if(_t.useProgram(fi.program)&&(Fi=!0,Da=!0,rr=!0),G.id!==C&&(C=G.id,Da=!0),Dt.needsLights){const Le=Yn(T.state.lightProbeGridArray,H);Dt.lightProbeGrid!==Le&&(Dt.lightProbeGrid=Le,Da=!0)}if(Fi||L!==b){_t.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ae.setValue(P,"projectionMatrix",b.projectionMatrix),Ae.setValue(P,"viewMatrix",b.matrixWorldInverse);const La=Ae.map.cameraPosition;La!==void 0&&La.setValue(P,de.setFromMatrixPosition(b.matrixWorld)),Me.logarithmicDepthBuffer&&Ae.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ae.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,Da=!0,rr=!0)}if(Dt.needsLights&&(jn.state.directionalShadowMap.length>0&&Ae.setValue(P,"directionalShadowMap",jn.state.directionalShadowMap,y),jn.state.spotShadowMap.length>0&&Ae.setValue(P,"spotShadowMap",jn.state.spotShadowMap,y),jn.state.pointShadowMap.length>0&&Ae.setValue(P,"pointShadowMap",jn.state.pointShadowMap,y)),H.isSkinnedMesh){Ae.setOptional(P,H,"bindMatrix"),Ae.setOptional(P,H,"bindMatrixInverse");const Le=H.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Ae.setValue(P,"boneTexture",Le.boneTexture,y))}H.isBatchedMesh&&(Ae.setOptional(P,H,"batchingTexture"),Ae.setValue(P,"batchingTexture",H._matricesTexture,y),Ae.setOptional(P,H,"batchingIdTexture"),Ae.setValue(P,"batchingIdTexture",H._indirectTexture,y),Ae.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&Ae.setValue(P,"batchingColorTexture",H._colorsTexture,y));const Ua=V.morphAttributes;if((Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0)&&Nt.update(H,V,fi),(Da||Dt.receiveShadow!==H.receiveShadow)&&(Dt.receiveShadow=H.receiveShadow,Ae.setValue(P,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(Ze.envMapIntensity.value=F.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=Lw()),Da){if(Ae.setValue(P,"toneMappingExposure",U.toneMappingExposure),Dt.needsLights&&Bi(Ze,rr),xt&&G.fog===!0&&X.refreshFogUniforms(Ze,xt),X.refreshMaterialUniforms(Ze,G,Pt,Wt,T.state.transmissionRenderTarget[b.id]),Dt.needsLights&&Dt.lightProbeGrid){const Le=Dt.lightProbeGrid;Ze.probesSH.value=Le.texture,Ze.probesMin.value.copy(Le.boundingBox.min),Ze.probesMax.value.copy(Le.boundingBox.max),Ze.probesResolution.value.copy(Le.resolution)}hu.upload(P,Ve(Dt),Ze,y)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hu.upload(P,Ve(Dt),Ze,y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ae.setValue(P,"center",H.center),Ae.setValue(P,"modelViewMatrix",H.modelViewMatrix),Ae.setValue(P,"normalMatrix",H.normalMatrix),Ae.setValue(P,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const Le=G.uniformsGroups;for(let La=0,or=Le.length;La<or;La++){const x0=Le[La];Y.update(x0,fi),Y.bind(x0,fi)}}return fi}function Bi(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function ui(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,F,V){const G=E.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),E.get(b.texture).__webglTexture=F,E.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const V=E.get(b);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const ar=P.createFramebuffer();this.setRenderTarget=function(b,F=0,V=0){B=b,q=F,Q=V;let G=null,H=!1,xt=!1;if(b){const vt=E.get(b);if(vt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(P.FRAMEBUFFER,vt.__webglFramebuffer),k.copy(b.viewport),K.copy(b.scissor),rt=b.scissorTest,_t.viewport(k),_t.scissor(K),_t.setScissorTest(rt),C=-1;return}else if(vt.__webglFramebuffer===void 0)y.setupRenderTarget(b);else if(vt.__hasExternalTextures)y.rebindTextures(b,E.get(b.texture).__webglTexture,E.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Vt=b.depthTexture;if(vt.__boundDepthTexture!==Vt){if(Vt!==null&&E.has(Vt)&&(b.width!==Vt.image.width||b.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(b)}}const dt=b.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(xt=!0);const pt=E.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(pt[F])?G=pt[F][V]:G=pt[F],H=!0):b.samples>0&&y.useMultisampledRTT(b)===!1?G=E.get(b).__webglMultisampledFramebuffer:Array.isArray(pt)?G=pt[V]:G=pt,k.copy(b.viewport),K.copy(b.scissor),rt=b.scissorTest}else k.copy(ht).multiplyScalar(Pt).floor(),K.copy(W).multiplyScalar(Pt).floor(),rt=et;if(V!==0&&(G=ar),_t.bindFramebuffer(P.FRAMEBUFFER,G)&&_t.drawBuffers(b,G),_t.viewport(k),_t.scissor(K),_t.setScissorTest(rt),H){const vt=E.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,vt.__webglTexture,V)}else if(xt){const vt=F;for(let dt=0;dt<b.textures.length;dt++){const pt=E.get(b.textures[dt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+dt,pt.__webglTexture,V,vt)}}else if(b!==null&&V!==0){const vt=E.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vt.__webglTexture,V)}C=-1},this.readRenderTargetPixels=function(b,F,V,G,H,xt,wt,vt=0){if(!(b&&b.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(dt=dt[wt]),dt){_t.bindFramebuffer(P.FRAMEBUFFER,dt);try{const pt=b.textures[vt],Vt=pt.format,Jt=pt.type;if(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+vt),!Me.textureFormatReadable(Vt)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Jt)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-G&&V>=0&&V<=b.height-H&&P.readPixels(F,V,G,H,N.convert(Vt),N.convert(Jt),xt)}finally{const pt=B!==null?E.get(B).__webglFramebuffer:null;_t.bindFramebuffer(P.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(b,F,V,G,H,xt,wt,vt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(dt=dt[wt]),dt)if(F>=0&&F<=b.width-G&&V>=0&&V<=b.height-H){_t.bindFramebuffer(P.FRAMEBUFFER,dt);const pt=b.textures[vt],Vt=pt.format,Jt=pt.type;if(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+vt),!Me.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Lt),P.bufferData(P.PIXEL_PACK_BUFFER,xt.byteLength,P.STREAM_READ),P.readPixels(F,V,G,H,N.convert(Vt),N.convert(Jt),0);const he=B!==null?E.get(B).__webglFramebuffer:null;_t.bindFramebuffer(P.FRAMEBUFFER,he);const Oe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await O1(P,Oe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Lt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,xt),P.deleteBuffer(Lt),P.deleteSync(Oe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,V=0){const G=Math.pow(2,-V),H=Math.floor(b.image.width*G),xt=Math.floor(b.image.height*G),wt=F!==null?F.x:0,vt=F!==null?F.y:0;y.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,wt,vt,H,xt),_t.unbindTexture()};const sr=P.createFramebuffer(),fn=P.createFramebuffer();this.copyTextureToTexture=function(b,F,V=null,G=null,H=0,xt=0){let wt,vt,dt,pt,Vt,Jt,Lt,he,Oe;const Xe=b.isCompressedTexture?b.mipmaps[xt]:b.image;if(V!==null)wt=V.max.x-V.min.x,vt=V.max.y-V.min.y,dt=V.isBox3?V.max.z-V.min.z:1,pt=V.min.x,Vt=V.min.y,Jt=V.isBox3?V.min.z:0;else{const Ze=Math.pow(2,-H);wt=Math.floor(Xe.width*Ze),vt=Math.floor(Xe.height*Ze),b.isDataArrayTexture?dt=Xe.depth:b.isData3DTexture?dt=Math.floor(Xe.depth*Ze):dt=1,pt=0,Vt=0,Jt=0}G!==null?(Lt=G.x,he=G.y,Oe=G.z):(Lt=0,he=0,Oe=0);const Te=N.convert(F.format),An=N.convert(F.type);let Dt;F.isData3DTexture?(y.setTexture3D(F,0),Dt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(y.setTexture2DArray(F,0),Dt=P.TEXTURE_2D_ARRAY):(y.setTexture2D(F,0),Dt=P.TEXTURE_2D),_t.activeTexture(P.TEXTURE0),_t.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),_t.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_t.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const jn=_t.getParameter(P.UNPACK_ROW_LENGTH),fe=_t.getParameter(P.UNPACK_IMAGE_HEIGHT),fi=_t.getParameter(P.UNPACK_SKIP_PIXELS),Fi=_t.getParameter(P.UNPACK_SKIP_ROWS),Da=_t.getParameter(P.UNPACK_SKIP_IMAGES);_t.pixelStorei(P.UNPACK_ROW_LENGTH,Xe.width),_t.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Xe.height),_t.pixelStorei(P.UNPACK_SKIP_PIXELS,pt),_t.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),_t.pixelStorei(P.UNPACK_SKIP_IMAGES,Jt);const rr=b.isDataArrayTexture||b.isData3DTexture,Ae=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const Ze=E.get(b),Ua=E.get(F),Le=E.get(Ze.__renderTarget),La=E.get(Ua.__renderTarget);_t.bindFramebuffer(P.READ_FRAMEBUFFER,Le.__webglFramebuffer),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,La.__webglFramebuffer);for(let or=0;or<dt;or++)rr&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,E.get(b).__webglTexture,H,Jt+or),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,E.get(F).__webglTexture,xt,Oe+or)),P.blitFramebuffer(pt,Vt,wt,vt,Lt,he,wt,vt,P.DEPTH_BUFFER_BIT,P.NEAREST);_t.bindFramebuffer(P.READ_FRAMEBUFFER,null),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||E.has(b)){const Ze=E.get(b),Ua=E.get(F);_t.bindFramebuffer(P.READ_FRAMEBUFFER,sr),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,fn);for(let Le=0;Le<dt;Le++)rr?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ze.__webglTexture,H,Jt+Le):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ze.__webglTexture,H),Ae?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ua.__webglTexture,xt,Oe+Le):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ua.__webglTexture,xt),H!==0?P.blitFramebuffer(pt,Vt,wt,vt,Lt,he,wt,vt,P.COLOR_BUFFER_BIT,P.NEAREST):Ae?P.copyTexSubImage3D(Dt,xt,Lt,he,Oe+Le,pt,Vt,wt,vt):P.copyTexSubImage2D(Dt,xt,Lt,he,pt,Vt,wt,vt);_t.bindFramebuffer(P.READ_FRAMEBUFFER,null),_t.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ae?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Dt,xt,Lt,he,Oe,wt,vt,dt,Te,An,Xe.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Dt,xt,Lt,he,Oe,wt,vt,dt,Te,Xe.data):P.texSubImage3D(Dt,xt,Lt,he,Oe,wt,vt,dt,Te,An,Xe):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,xt,Lt,he,wt,vt,Te,An,Xe.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,xt,Lt,he,Xe.width,Xe.height,Te,Xe.data):P.texSubImage2D(P.TEXTURE_2D,xt,Lt,he,wt,vt,Te,An,Xe);_t.pixelStorei(P.UNPACK_ROW_LENGTH,jn),_t.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe),_t.pixelStorei(P.UNPACK_SKIP_PIXELS,fi),_t.pixelStorei(P.UNPACK_SKIP_ROWS,Fi),_t.pixelStorei(P.UNPACK_SKIP_IMAGES,Da),xt===0&&F.generateMipmaps&&P.generateMipmap(Dt),_t.unbindTexture()},this.initRenderTarget=function(b){E.get(b).__webglFramebuffer===void 0&&y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),_t.unbindTexture()},this.resetState=function(){q=0,Q=0,B=null,_t.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),n.unpackColorSpace=ce._getUnpackColorSpace()}}function Ni(e,t,n){return Math.min(n,Math.max(t,e))}function lt(e,t){return e+Math.random()*(t-e)}function Rf(e,t=.05){return e*(1+(Math.random()-.5)*t)}function ya(e){return e[Math.floor(Math.random()*e.length)]}function ef(e){return Math.random()<e}const En={master:{volume:.78,dry:.72,delayTime:.29,delayFeedback:.23,delayReturn:.24,reverbReturn:.34,compressorThreshold:-18},echo:{ripple:{level:.2,time:.34,feedback:.24,tone:2600,tail:1.35},chime:{level:.3,time:.42,feedback:.34,tone:4200,tail:2},woodfish:{level:.16,time:.13,feedback:.18,tone:1800,tail:.75},frog:{level:.18,time:.27,feedback:.22,tone:1400,tail:1},cricket:{level:.12,time:.08,feedback:.28,tone:5200,tail:.65},windGust:{level:.2,time:.48,feedback:.26,tone:1900,tail:1.8},footsteps:{level:.08,time:.11,feedback:.14,tone:1200,tail:.55}},ambient:{droneVolume:.01,droneProgressLift:.012,dronePitchLift:.12,windBase:.008,windSpeedGain:.032,windWonBoost:.018,windLowBase:520,windLowSpeed:1200,windLowProgress:380,pulseBase:.012,pulseAmount:.08,pulseReleaseMin:.7,pulseReleaseMax:1.25},footsteps:{enabled:!0,threshold:.06,layerBase:.018,layerSpeedGain:.032,layerAttack:.055,fadeOut:.5,rustleBase:.18,rustleSpeedGain:.32,rustleHighpass:260,rustleLowBase:1200,rustleLowSpeed:1200,cadenceBase:.52,cadenceSpeed:.18,cadenceRandom:.16,velocityMin:.62,velocityMax:.95,scrapeGain:.18,scrapeDurationMin:.09,scrapeDurationMax:.16,scrapeHighpassMin:220,scrapeHighpassMax:420,scrapeLowpassMin:1350,scrapeLowpassMax:2400,thumpGain:.045,thumpDurationMin:.055,thumpDurationMax:.095,thumpFreqMin:65,thumpFreqMax:92,panSpread:.34,previewHold:1.5},ripple:{enabled:!0,velocity:.52,duration:1.9,durationRandom:.22,attackMin:.035,attackMax:.07,decayMin:.35,decayMax:.58,releaseMin:1.1,releaseMax:1.65,sustainMin:.08,sustainMax:.16,harmonicityMin:2.6,harmonicityMax:3.25,modIndexMin:1.1,modIndexMax:2.3,detune:8},chime:{enabled:!0,velocity:.42,duration:1.55,durationRandom:.25,decayMin:.7,decayMax:1.05,releaseMin:.42,releaseMax:.78,sustainMin:.035,sustainMax:.08,partialGainMin:.42,partialGainMax:.9,detune:14,forceBend:.08},woodfish:{enabled:!0,velocity:.64,duration:.22,durationRandom:.22,pitchMin:1.35,pitchMax:1.78,pitchDropMin:.38,pitchDropMax:.54,noiseMin:.1,noiseMax:.2,noiseFilterMin:760,noiseFilterMax:1120,releaseMin:.07,releaseMax:.12},frog:{enabled:!0,velocity:.3,duration:.48,durationRandom:.3,bendStart:.72,bendPeakMin:1.24,bendPeakMax:1.62,bendEndMin:.76,bendEndMax:.95,wobbleRateMin:18,wobbleRateMax:34,wobbleDepthMin:28,wobbleDepthMax:52,filterStartMin:420,filterStartMax:680,filterPeakMin:900,filterPeakMax:1250,filterEndMin:260,filterEndMax:420},cricket:{enabled:!0,velocity:.22,countMin:2,countMax:5,frequencyMin:2600,frequencyMax:3900,chirpGapMin:.045,chirpGapMax:.074,durationMin:.026,durationMax:.052,detune:24},windGust:{enabled:!0,amount:.5,durationMin:.55,durationMax:1.1,gainBase:.03,gainAmount:.055,filterStart:420,filterStartAmount:480,filterEnd:1600,filterEndAmount:1800},timing:{shrineStartDelay:.004,woodfishDelay:0,rippleDelayMin:.035,rippleDelayMax:.075,chimeOneDelayMin:.1,chimeOneDelayMax:.16,chimeTwoDelayMin:.18,chimeTwoDelayMax:.32,windDelay:0,cricketChance:.45,cricketProgressChance:.16,cricketDelayMin:.24,cricketDelayMax:.52,frogChance:.24,frogProgressChance:.34,frogDelayMin:.12,frogDelayMax:.34,finalDelay:.18,finalSpacingMin:.045,finalSpacingMax:.085,ambientAccentMin:4.5,ambientAccentMax:12,ambientProgressShorten:.25}},Ow=[{id:"shrine",label:"Shrine"},{id:"final",label:"Final"},{id:"ripple",label:"Ripple"},{id:"chime",label:"Chime"},{id:"woodfish",label:"Woodfish"},{id:"frog",label:"Frog"},{id:"cricket",label:"Cricket"},{id:"wind",label:"Wind"},{id:"footstep",label:"Step"},{id:"footstepFade",label:"Stop Fade"},{id:"ambient",label:"Accent"}],Wc=[{id:"mix",label:"Mix",sections:[{title:"Master",controls:[At("master.volume","Master",0,1.2,.01,2),At("master.dry","Dry",0,1.2,.01,2),At("master.delayTime","Delay Time",.05,.8,.01,2),At("master.delayFeedback","Feedback",0,.75,.01,2),At("master.delayReturn","Delay Return",0,.8,.01,2),At("master.reverbReturn","Reverb",0,.9,.01,2),At("master.compressorThreshold","Comp Thresh",-36,-6,1,0)]},{title:"Ambient",controls:[At("ambient.droneVolume","Drone",0,.05,.001,3),At("ambient.windBase","Wind Base",0,.08,.001,3),At("ambient.windSpeedGain","Wind Speed",0,.12,.001,3),At("ambient.windWonBoost","Win Boost",0,.08,.001,3),At("ambient.pulseAmount","Pulse",0,.16,.005,3)]}]},{id:"echo",label:"Echo",sections:[Es("Ripple","ripple"),Es("Chime","chime"),Es("Woodfish","woodfish"),Es("Frog","frog"),Es("Cricket","cricket"),Es("Wind Gust","windGust"),Es("Sand Steps","footsteps")]},{id:"voices",label:"Voices",sections:[{title:"Ripple",controls:[Ts("ripple.enabled","Enabled"),At("ripple.velocity","Level",0,1,.01,2),At("ripple.duration","Duration",.4,4,.05,2),At("ripple.releaseMax","Tail Max",.2,3,.05,2),At("ripple.harmonicityMin","Harm Min",1,5,.05,2),At("ripple.harmonicityMax","Harm Max",1,6,.05,2),At("ripple.modIndexMax","Mod Max",.2,5,.05,2)]},{title:"Chime",controls:[Ts("chime.enabled","Enabled"),At("chime.velocity","Level",0,1,.01,2),At("chime.duration","Duration",.3,4,.05,2),At("chime.partialGainMax","Partials",.1,1.4,.01,2),At("chime.detune","Detune",0,40,1,0),At("chime.forceBend","Force Bend",0,.3,.005,3)]},{title:"Woodfish",controls:[Ts("woodfish.enabled","Enabled"),At("woodfish.velocity","Level",0,1,.01,2),At("woodfish.duration","Duration",.06,.8,.01,2),At("woodfish.noiseMax","Click Noise",0,.5,.01,2),At("woodfish.noiseFilterMin","Filter Min",240,2200,20,0),At("woodfish.noiseFilterMax","Filter Max",300,3200,20,0)]},{title:"Frog",controls:[Ts("frog.enabled","Enabled"),At("frog.velocity","Level",0,1,.01,2),At("frog.duration","Duration",.12,1.4,.01,2),At("frog.wobbleRateMax","Wobble Rate",8,60,1,0),At("frog.wobbleDepthMax","Wobble Depth",5,90,1,0),At("frog.filterPeakMax","Filter Peak",400,2400,20,0)]},{title:"Cricket",controls:[Ts("cricket.enabled","Enabled"),At("cricket.velocity","Level",0,.7,.01,2),At("cricket.countMin","Count Min",1,8,1,0),At("cricket.countMax","Count Max",1,10,1,0),At("cricket.frequencyMin","Freq Min",1200,5200,50,0),At("cricket.frequencyMax","Freq Max",1800,6800,50,0)]}]},{id:"motion",label:"Motion",sections:[{title:"Sand Steps",controls:[Ts("footsteps.enabled","Enabled"),At("footsteps.threshold","Start Gate",0,.3,.005,3),At("footsteps.layerBase","Bed Base",0,.08,.001,3),At("footsteps.layerSpeedGain","Bed Speed",0,.12,.001,3),At("footsteps.fadeOut","Stop Fade",.05,2,.05,2),At("footsteps.cadenceBase","Cadence",.2,1.1,.01,2),At("footsteps.cadenceSpeed","Speed Pull",0,.45,.01,2),At("footsteps.scrapeGain","Scrape",0,.5,.01,2),At("footsteps.thumpGain","Thump",0,.18,.005,3),At("footsteps.panSpread","Pan",0,1,.01,2),At("footsteps.previewHold","Preview Hold",.3,4,.1,1)]},{title:"Wind Gust",controls:[Ts("windGust.enabled","Enabled"),At("windGust.amount","Amount",0,1.2,.01,2),At("windGust.durationMin","Dur Min",.2,2,.05,2),At("windGust.durationMax","Dur Max",.2,3,.05,2),At("windGust.gainBase","Gain Base",0,.12,.005,3),At("windGust.gainAmount","Gain Amt",0,.16,.005,3)]}]},{id:"timing",label:"Timing",sections:[{title:"Shrine Chain",controls:[At("timing.shrineStartDelay","Start Delay",0,.2,.005,3),At("timing.rippleDelayMin","Ripple Min",0,.6,.005,3),At("timing.rippleDelayMax","Ripple Max",0,.8,.005,3),At("timing.chimeOneDelayMin","Chime1 Min",0,.8,.005,3),At("timing.chimeOneDelayMax","Chime1 Max",0,1,.005,3),At("timing.chimeTwoDelayMin","Chime2 Min",0,1.2,.005,3),At("timing.chimeTwoDelayMax","Chime2 Max",0,1.5,.005,3)]},{title:"Chance And Ambient",controls:[At("timing.cricketChance","Cricket %",0,1,.01,2),At("timing.frogChance","Frog %",0,1,.01,2),At("timing.finalDelay","Final Delay",0,1,.01,2),At("timing.finalSpacingMin","Final Gap Min",.01,.4,.005,3),At("timing.finalSpacingMax","Final Gap Max",.01,.6,.005,3),At("timing.ambientAccentMin","Accent Min",1,20,.5,1),At("timing.ambientAccentMax","Accent Max",2,40,.5,1)]}]}];function Es(e,t){return{title:e,controls:[At(`echo.${t}.level`,"Return",0,.9,.01,2),At(`echo.${t}.time`,"Time",.03,1.2,.01,2),At(`echo.${t}.feedback`,"Feedback",0,.85,.01,2),At(`echo.${t}.tone`,"Tone",400,9e3,50,0),At(`echo.${t}.tail`,"Tail",0,4,.05,2)]}}function At(e,t,n,i,a,s){return{type:"range",path:e,label:t,min:n,max:i,step:a,precision:s}}function Ts(e,t){return{type:"toggle",path:e,label:t}}function tv(e=En,t={}){return u0(e,t)}function ev(e=En){return u0({},e)}function u0(e,t){const n=Array.isArray(e)?[...e]:{...e};return Object.entries(t??{}).forEach(([i,a])=>{a&&typeof a=="object"&&!Array.isArray(a)?n[i]=u0(n[i]??{},a):n[i]=a}),n}const qe=1e-4,du=["C4","D4","E4","G4","A4","C5","D5","E5","G5","A5","C6"],Wr=["C5","D5","E5","G5","A5","C6"],f0=["F2","G2","A2"],jy=["E4","G4","A4"],Pw={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11};function wf(e){const t=/^([A-G])([#b]?)(-?\d+)$/.exec(e);if(!t)return 440;const[,n,i,a]=t;return 440*2**(((Number(a)+1)*12+Pw[`${n}${i}`]-69)/12)}function Bw(e,t=3.2,n=2.8){const i=Math.floor(e.sampleRate*t),a=e.createBuffer(2,i,e.sampleRate);for(let s=0;s<a.numberOfChannels;s+=1){const r=a.getChannelData(s);for(let o=0;o<i;o+=1){const l=o/i,c=Math.min(1,o/700);r[o]=lt(-1,1)*c*(1-l)**n}}return a}function Jl(e,t=1,n="white",i=!0){const a=Math.max(1,Math.floor(e.sampleRate*t)),s=e.createBuffer(1,a,e.sampleRate),r=s.getChannelData(0);let o=0;for(let c=0;c<a;c+=1){const h=lt(-1,1);o=n==="pink"?o*.92+h*.08:h,r[c]=o}const l=e.createBufferSource();return l.buffer=s,l.loop=i,l}function nv(e){e.forEach(t=>{try{t.disconnect()}catch{}})}function iv(e,t=0){const n=Math.max(0,t)*1e3;if(n>0){globalThis.setTimeout(()=>nv(e),n);return}nv(e)}function tr(e,t,n=0){if(!e){iv(t,n);return}e.addEventListener("ended",()=>{iv(t,n)},{once:!0})}function Zy(e,t){var n,i;return((n=e.echo)==null?void 0:n[t])??((i=En.echo)==null?void 0:i[t])}function er(e,t){var n;return Math.max(0,((n=Zy(e,t))==null?void 0:n.tail)??0)}function nr(e,t,n,i,a,s=n){const r=Zy(a,i);if(t.connect(n),!r||r.level<=0||r.time<=0)return[];const o=Ni(r.time*lt(.92,1.08),.01,1.4),l=Math.max(.05,o+.25),c=e.createDelay(l),h=e.createGain(),d=e.createBiquadFilter(),u=e.createGain();return c.delayTime.value=o,h.gain.value=Ni(r.feedback*lt(.9,1.08),0,.9),d.type="lowpass",d.frequency.value=Ni(r.tone*lt(.82,1.18),80,12e3),d.Q.value=.72,u.gain.value=Math.max(0,r.level*lt(.88,1.08)),t.connect(c),c.connect(d),d.connect(h),h.connect(c),d.connect(u),u.connect(s),[c,h,d,u]}function Cf(e,t,{peak:n,attack:i,decay:a,release:s,sustain:r=.08}){e.setValueAtTime(qe,t),e.exponentialRampToValueAtTime(Math.max(qe,n),t+i),e.exponentialRampToValueAtTime(Math.max(qe,n*r),t+i+a),e.exponentialRampToValueAtTime(qe,t+i+a+s)}function Fw(e,t=En){const n=t.master,i=e.createGain(),a=e.createGain(),s=e.createDelay(1.2),r=e.createGain(),o=e.createGain(),l=e.createConvolver(),c=e.createGain(),h=e.createGain(),d=e.createDynamicsCompressor();return a.gain.value=n.dry,s.delayTime.value=n.delayTime,r.gain.value=n.delayFeedback,o.gain.value=n.delayReturn,l.buffer=Bw(e),c.gain.value=n.reverbReturn,h.gain.value=n.volume,d.threshold.value=n.compressorThreshold,d.knee.value=18,d.ratio.value=4,d.attack.value=.012,d.release.value=.24,i.connect(a),a.connect(h),i.connect(s),s.connect(r),r.connect(s),s.connect(o),o.connect(h),i.connect(l),l.connect(c),c.connect(h),h.connect(d),d.connect(e.destination),{input:i,updateSettings(u){const p=u.master,_=e.currentTime;h.gain.setTargetAtTime(p.volume,_,.04),a.gain.setTargetAtTime(p.dry,_,.04),s.delayTime.setTargetAtTime(p.delayTime,_,.04),r.gain.setTargetAtTime(p.delayFeedback,_,.04),o.gain.setTargetAtTime(p.delayReturn,_,.04),c.gain.setTargetAtTime(p.reverbReturn,_,.04),d.threshold.setTargetAtTime(p.compressorThreshold,_,.04)},dispose(){[i,a,s,r,o,l,c,h,d].forEach(u=>{try{u.disconnect()}catch{}})}}}function Iw(e,t,n=En){let i=n.ambient;const a=e.createGain(),s=e.createGain(),r=e.createBiquadFilter(),o=e.createBiquadFilter(),l=[55,82.5,110].map((h,d)=>{const u=e.createOscillator(),p=e.createGain();return u.type=d===1?"triangle":"sine",u.frequency.value=h,p.gain.value=i.droneVolume/(d+1),u.connect(p),p.connect(a),u.start(),{osc:u,gain:p,frequency:h}}),c=Jl(e,2,"pink");return r.type="lowpass",r.frequency.value=820,o.type="highpass",o.frequency.value=120,s.gain.value=i.windBase,c.connect(o),o.connect(r),r.connect(s),a.connect(t),s.connect(t),c.start(),{updateSettings(h){i=h.ambient},pulse(h=.45,d=n){const u=d.ambient,p=e.currentTime;s.gain.cancelScheduledValues(p),s.gain.setValueAtTime(Math.max(s.gain.value,u.pulseBase+h*u.pulseAmount),p),s.gain.exponentialRampToValueAtTime(u.windBase+u.pulseBase*.5,p+lt(u.pulseReleaseMin,u.pulseReleaseMax))},update({playerSpeed:h,progressRatio:d,isWon:u},p,_=n){const M=_.ambient,g=Ni(d,0,1),f=Ni(h,0,1),m=Math.sin(p*22e-5)*.5+.5;l.forEach((v,S)=>{const w=v.frequency*(1+g*M.dronePitchLift+m*.01*(S+1));v.osc.frequency.setTargetAtTime(w,e.currentTime,.8),v.gain.gain.setTargetAtTime((M.droneVolume+g*M.droneProgressLift)/(S+1),e.currentTime,.45)}),s.gain.setTargetAtTime(M.windBase+f*M.windSpeedGain+(u?M.windWonBoost:0),e.currentTime,.18),r.frequency.setTargetAtTime(M.windLowBase+f*M.windLowSpeed+g*M.windLowProgress,e.currentTime,.2)},dispose(){l.forEach(({osc:h,gain:d})=>{h.stop(),h.disconnect(),d.disconnect()}),c.stop(),c.disconnect(),r.disconnect(),o.disconnect(),a.disconnect(),s.disconnect()}}}function zw(e,t,n=En){let i=n.footsteps;const a=e.createGain(),s=e.createGain(),r=e.createBiquadFilter(),o=e.createBiquadFilter(),l=Jl(e,1.5,"pink");let c=0,h=!1;return a.gain.value=qe,s.gain.value=qe,o.type="highpass",o.frequency.value=i.rustleHighpass,r.type="lowpass",r.frequency.value=i.rustleLowBase,l.connect(o),o.connect(r),r.connect(s),s.connect(a),a.connect(t),l.start(),{updateSettings(d){i=d.footsteps,o.frequency.setTargetAtTime(i.rustleHighpass,e.currentTime,.05)},update({playerSpeed:d},u=n){const p=u.footsteps,_=e.currentTime,M=Ni(d,0,1),g=p.enabled&&M>p.threshold;if(g){const f=p.layerBase+M*p.layerSpeedGain;if(a.gain.cancelScheduledValues(_),a.gain.setTargetAtTime(f,_,p.layerAttack),s.gain.setTargetAtTime(p.rustleBase+M*p.rustleSpeedGain,_,.08),r.frequency.setTargetAtTime(p.rustleLowBase+M*p.rustleLowSpeed,_,.12),h||(c=_+lt(.04,.12)),_>=c){Yh(e,a,{time:_,velocity:lt(p.velocityMin,p.velocityMax)*(.65+M*.35)},u,t);const m=Math.max(.08,p.cadenceBase-M*p.cadenceSpeed);c=_+lt(m*(1-p.cadenceRandom),m*(1+p.cadenceRandom))}}else h&&(a.gain.cancelScheduledValues(_),a.gain.setValueAtTime(Math.max(qe,a.gain.value),_),a.gain.linearRampToValueAtTime(qe,_+p.fadeOut),s.gain.setTargetAtTime(qe,_,.16));h=g},previewStep(d=n){Yh(e,a,{time:e.currentTime,velocity:lt(d.footsteps.velocityMin,d.footsteps.velocityMax)},d,t)},previewFade(d=n){const u=d.footsteps,p=e.currentTime;a.gain.cancelScheduledValues(p),a.gain.setValueAtTime(u.layerBase+u.layerSpeedGain,p),s.gain.setValueAtTime(u.rustleBase+u.rustleSpeedGain,p),Yh(e,a,{time:p+.02,velocity:u.velocityMax},d,t),window.setTimeout(()=>{const _=e.currentTime;a.gain.cancelScheduledValues(_),a.gain.setValueAtTime(Math.max(qe,a.gain.value),_),a.gain.linearRampToValueAtTime(qe,_+u.fadeOut),s.gain.setTargetAtTime(qe,_,.16)},Math.max(0,u.previewHold*1e3))},dispose(){l.stop(),l.disconnect(),o.disconnect(),r.disconnect(),s.disconnect(),a.disconnect()}}}function Yh(e,t,{time:n=e.currentTime,velocity:i=.75}={},a=En,s=t){var S;const r=a.footsteps,o=Jl(e,.16,"pink",!1),l=e.createBiquadFilter(),c=e.createBiquadFilter(),h=e.createGain(),d=e.createOscillator(),u=e.createGain(),p=(S=e.createStereoPanner)==null?void 0:S.call(e),_=p??e.createGain(),M=lt(r.scrapeDurationMin,r.scrapeDurationMax),g=lt(r.thumpDurationMin,r.thumpDurationMax),f=n+M+.01,m=n+g+.01;l.type="highpass",l.frequency.value=lt(r.scrapeHighpassMin,r.scrapeHighpassMax),c.type="lowpass",c.frequency.value=lt(r.scrapeLowpassMin,r.scrapeLowpassMax),c.Q.value=lt(.6,1.4),h.gain.setValueAtTime(qe,n),h.gain.exponentialRampToValueAtTime(r.scrapeGain*i,n+lt(.008,.016)),h.gain.exponentialRampToValueAtTime(qe,n+M),d.type="sine",d.frequency.setValueAtTime(lt(r.thumpFreqMin,r.thumpFreqMax),n),d.frequency.exponentialRampToValueAtTime(lt(42,58),n+g),u.gain.setValueAtTime(qe,n),u.gain.exponentialRampToValueAtTime(r.thumpGain*i,n+.006),u.gain.exponentialRampToValueAtTime(qe,n+g),p&&p.pan.setValueAtTime(lt(-r.panSpread,r.panSpread),n),o.connect(l),l.connect(c),c.connect(h),h.connect(_),d.connect(u),u.connect(_);const v=nr(e,_,t,"footsteps",a,s);o.start(n),d.start(n),o.stop(f),d.stop(m),tr(f>=m?o:d,[o,l,c,h,d,u,_,...v],er(a,"footsteps"))}function Ky(e,t,{time:n=e.currentTime,note:i=ya(du),velocity:a}={},s=En){const r=s.ripple;if(!r.enabled)return;const o=e.createOscillator(),l=e.createOscillator(),c=e.createGain(),h=e.createGain(),d=Rf(r.duration,r.durationRandom),u=wf(i)*lt(.985,1.018),p=a??r.velocity;o.type="sine",o.frequency.setValueAtTime(u,n),o.detune.setValueAtTime(lt(-r.detune,r.detune),n),l.type="triangle",l.frequency.setValueAtTime(u*lt(r.harmonicityMin,r.harmonicityMax),n),c.gain.setValueAtTime(u*lt(r.modIndexMin,r.modIndexMax),n),c.gain.exponentialRampToValueAtTime(u*.08,n+d*.7),Cf(h.gain,n,{peak:p,attack:lt(r.attackMin,r.attackMax),decay:lt(r.decayMin,r.decayMax),release:lt(r.releaseMin,r.releaseMax),sustain:lt(r.sustainMin,r.sustainMax)}),l.connect(c),c.connect(o.frequency),o.connect(h);const _=nr(e,h,t,"ripple",s);o.start(n),l.start(n),o.stop(n+d),l.stop(n+d),tr(o,[o,l,c,h,..._],er(s,"ripple"))}function vl(e,t,{time:n=e.currentTime,note:i=ya(Wr),velocity:a,force:s=0}={},r=En){const o=r.chime;if(!o.enabled)return;const l=Rf(o.duration,o.durationRandom),c=wf(i)*lt(.98,1.025),h=e.createGain(),d=[h],u=a??o.velocity;Cf(h.gain,n,{peak:u,attack:.002,decay:lt(o.decayMin,o.decayMax),release:lt(o.releaseMin,o.releaseMax),sustain:lt(o.sustainMin,o.sustainMax)});let p=null,_=n;[1,2.01,2.98,4.12,5.43].forEach((g,f)=>{const m=e.createOscillator(),v=e.createGain(),S=n+l+lt(0,.14);m.type=f%2===0?"sine":"triangle",m.frequency.setValueAtTime(c*g+s*o.forceBend,n),m.detune.setValueAtTime(lt(-o.detune,o.detune),n),v.gain.value=1/(f+1)*lt(o.partialGainMin,o.partialGainMax),m.connect(v),v.connect(h),m.start(n+lt(0,.009)),m.stop(S),S>=_&&(p=m,_=S),d.push(m,v)});const M=nr(e,h,t,"chime",r);tr(p,[...d,...M],er(r,"chime"))}function Qy(e,t,{time:n=e.currentTime,pitch:i=ya(jy),velocity:a}={},s=En){const r=s.woodfish;if(!r.enabled)return;const o=e.createOscillator(),l=Jl(e,.08),c=e.createBiquadFilter(),h=e.createGain(),d=e.createGain(),u=Rf(r.duration,r.durationRandom),p=wf(i)*lt(r.pitchMin,r.pitchMax),_=a??r.velocity;o.type="sine",o.frequency.setValueAtTime(p*lt(1.05,1.2),n),o.frequency.exponentialRampToValueAtTime(p*lt(r.pitchDropMin,r.pitchDropMax),n+u),c.type="bandpass",c.frequency.value=lt(r.noiseFilterMin,r.noiseFilterMax),c.Q.value=lt(5,9),d.gain.setValueAtTime(_*lt(r.noiseMin,r.noiseMax),n),d.gain.exponentialRampToValueAtTime(qe,n+lt(.035,.075)),Cf(h.gain,n,{peak:_,attack:.001,decay:lt(.08,.15),release:lt(r.releaseMin,r.releaseMax),sustain:.01}),o.connect(h),l.connect(c),c.connect(d),d.connect(h);const M=nr(e,h,t,"woodfish",s);o.start(n),l.start(n),o.stop(n+u),l.stop(n+.09),tr(o,[o,l,c,h,d,...M],er(s,"woodfish"))}function h0(e,t,{time:n=e.currentTime,pitch:i=ya(f0),velocity:a}={},s=En){const r=s.frog;if(!r.enabled)return;const o=e.createOscillator(),l=e.createOscillator(),c=e.createGain(),h=e.createBiquadFilter(),d=e.createGain(),u=Rf(r.duration,r.durationRandom),p=wf(i)*lt(.92,1.08),_=a??r.velocity;o.type="sawtooth",o.frequency.setValueAtTime(p*r.bendStart,n),o.frequency.linearRampToValueAtTime(p*lt(r.bendPeakMin,r.bendPeakMax),n+u*.33),o.frequency.exponentialRampToValueAtTime(p*lt(r.bendEndMin,r.bendEndMax),n+u),l.type="sine",l.frequency.value=lt(r.wobbleRateMin,r.wobbleRateMax),c.gain.value=lt(r.wobbleDepthMin,r.wobbleDepthMax),h.type="lowpass",h.frequency.setValueAtTime(lt(r.filterStartMin,r.filterStartMax),n),h.frequency.linearRampToValueAtTime(lt(r.filterPeakMin,r.filterPeakMax),n+u*.36),h.frequency.exponentialRampToValueAtTime(lt(r.filterEndMin,r.filterEndMax),n+u),h.Q.value=lt(4,8),Cf(d.gain,n,{peak:_,attack:lt(.025,.06),decay:lt(.14,.24),release:lt(.12,.2),sustain:lt(.06,.13)}),l.connect(c),c.connect(o.frequency),o.connect(h),h.connect(d);const M=nr(e,d,t,"frog",s);l.start(n),o.start(n),l.stop(n+u),o.stop(n+u),tr(o,[o,l,c,h,d,...M],er(s,"frog"))}function d0(e,t,{time:n=e.currentTime,velocity:i}={},a=En){const s=a.cricket;if(!s.enabled)return;const r=Math.floor(lt(s.countMin,s.countMax)),o=lt(s.frequencyMin,s.frequencyMax),l=i??s.velocity;for(let c=0;c<r;c+=1){const h=n+c*lt(s.chirpGapMin,s.chirpGapMax),d=lt(s.durationMin,s.durationMax),u=e.createOscillator(),p=e.createGain();u.type="square",u.frequency.setValueAtTime(o*lt(.95,1.08),h),u.detune.setValueAtTime(lt(-s.detune,s.detune),h),p.gain.setValueAtTime(qe,h),p.gain.exponentialRampToValueAtTime(Math.max(qe,l*lt(.55,1)),h+.004),p.gain.exponentialRampToValueAtTime(qe,h+d),u.connect(p);const _=nr(e,p,t,"cricket",a);u.start(h),u.stop(h+d+.01),tr(u,[u,p,..._],er(a,"cricket"))}}function Jy(e,t,{time:n=e.currentTime,amount:i}={},a=En){const s=a.windGust;if(!s.enabled)return;const r=Jl(e,.75,"pink"),o=e.createBiquadFilter(),l=e.createGain(),c=lt(s.durationMin,s.durationMax),h=i??s.amount;o.type="lowpass",o.frequency.setValueAtTime(s.filterStart+h*s.filterStartAmount,n),o.frequency.exponentialRampToValueAtTime(s.filterEnd+h*s.filterEndAmount,n+c*.45),l.gain.setValueAtTime(qe,n),l.gain.exponentialRampToValueAtTime(s.gainBase+h*s.gainAmount,n+.04),l.gain.exponentialRampToValueAtTime(qe,n+c),r.connect(o),o.connect(l);const d=nr(e,l,t,"windGust",a);r.start(n),r.stop(n+c+.02),tr(r,[r,o,l,...d],er(a,"windGust"))}function av(e,t,{progressRatio:n=0}={},i=En){const a=e.currentTime+lt(.01,.08);if(ef(.55)){d0(e,t,{time:a,velocity:lt(.08,.2)},i);return}if(n>.18&&ef(.55)){h0(e,t,{time:a,pitch:ya(f0),velocity:lt(.12,.26)},i);return}vl(e,t,{time:a,note:ya(Wr),velocity:lt(.12,.28),force:lt(-45,45)},i)}function jh(e,t,{progress:n=0,total:i=1,isFinal:a=!1}={},s=En){const r=s.timing,o=e.currentTime+r.shrineStartDelay,l=Ni(n/Math.max(1,i),0,1),c=Ni(Math.round(l*(du.length-2)+lt(-1.1,1.1)),0,du.length-1);Qy(e,t,{time:o+r.woodfishDelay,pitch:ya(jy),velocity:lt(.48,.78)},s),Ky(e,t,{time:o+lt(r.rippleDelayMin,r.rippleDelayMax),note:du[c],velocity:lt(.42,.68)},s),vl(e,t,{time:o+lt(r.chimeOneDelayMin,r.chimeOneDelayMax),note:ya(Wr),velocity:lt(.28,.52),force:lt(-35,35)},s),vl(e,t,{time:o+lt(r.chimeTwoDelayMin,r.chimeTwoDelayMax),note:Wr[Ni(Math.floor(l*Wr.length),0,Wr.length-1)],velocity:lt(.18,.42),force:lt(-60,60)},s),Jy(e,t,{time:o+r.windDelay,amount:a?.78:lt(.34,.55)},s),ef(r.cricketChance+l*r.cricketProgressChance)&&d0(e,t,{time:o+lt(r.cricketDelayMin,r.cricketDelayMax),velocity:lt(.14,.28)},s),ef(r.frogChance+l*r.frogProgressChance)&&h0(e,t,{time:o+lt(r.frogDelayMin,r.frogDelayMax),pitch:ya(f0),velocity:lt(.16,.34)},s),a&&["C5","E5","G5","C6"].forEach((h,d)=>{vl(e,t,{time:o+r.finalDelay+d*lt(r.finalSpacingMin,r.finalSpacingMax),note:h,velocity:lt(.3,.55),force:lt(-80,80)},s)})}class Gw{constructor(){this.audioContext=null,this.masterBus=null,this.ambientBed=null,this.footstepLayer=null,this.settings=tv(En),this.isDisposed=!1,this.isUnlocked=!1,this.lastState={playerSpeed:0,progressRatio:0,isWon:!1},this.nextAccentAt=0}async unlock(){var t;if(this.isDisposed||typeof window>"u")return!1;if(!this.audioContext){const n=window.AudioContext||window.webkitAudioContext;if(!n)return!1;this.audioContext=new n,this.masterBus=Fw(this.audioContext,this.settings),this.ambientBed=Iw(this.audioContext,this.masterBus.input,this.settings),this.footstepLayer=zw(this.audioContext,this.masterBus.input,this.settings),this.nextAccentAt=this.audioContext.currentTime+lt(4,9)}return this.audioContext.state!=="running"&&await this.audioContext.resume(),this.isUnlocked=this.audioContext.state==="running",(t=this.ambientBed)==null||t.update(this.lastState,Date.now()),this.isUnlocked}setSettings(t){var n,i,a;this.settings=tv(En,t),(n=this.masterBus)==null||n.updateSettings(this.settings),(i=this.ambientBed)==null||i.updateSettings(this.settings),(a=this.footstepLayer)==null||a.updateSettings(this.settings)}update(t){var i;if(this.lastState={playerSpeed:Ni(t.playerSpeed??this.lastState.playerSpeed,0,1),progressRatio:Ni(t.progressRatio??this.lastState.progressRatio,0,1),isWon:!!t.isWon},!this.isUnlocked||!this.ambientBed)return;this.ambientBed.update(this.lastState,Date.now(),this.settings),(i=this.footstepLayer)==null||i.update(this.lastState,this.settings);const n=this.audioContext.currentTime;n>=this.nextAccentAt&&(av(this.audioContext,this.masterBus.input,{progressRatio:this.lastState.progressRatio},this.settings),this.nextAccentAt=n+lt(this.settings.timing.ambientAccentMin,this.settings.timing.ambientAccentMax)*(1-this.lastState.progressRatio*this.settings.timing.ambientProgressShorten))}async playShrineIgnite(t){var i;!await this.unlock()||!this.audioContext||!this.masterBus||(jh(this.audioContext,this.masterBus.input,t,this.settings),(i=this.ambientBed)==null||i.pulse(t!=null&&t.isFinal?.78:.45,this.settings))}async preview(t){var a,s,r,o;if(!await this.unlock()||!this.audioContext||!this.masterBus)return;const i=this.audioContext.currentTime;switch(t){case"shrine":jh(this.audioContext,this.masterBus.input,{progress:Math.max(1,Math.round(this.lastState.progressRatio*5)),total:5,isFinal:!1},this.settings),(a=this.ambientBed)==null||a.pulse(.45,this.settings);break;case"final":jh(this.audioContext,this.masterBus.input,{progress:5,total:5,isFinal:!0},this.settings),(s=this.ambientBed)==null||s.pulse(.78,this.settings);break;case"ripple":Ky(this.audioContext,this.masterBus.input,{time:i},this.settings);break;case"chime":vl(this.audioContext,this.masterBus.input,{time:i,force:lt(-45,45)},this.settings);break;case"woodfish":Qy(this.audioContext,this.masterBus.input,{time:i},this.settings);break;case"frog":h0(this.audioContext,this.masterBus.input,{time:i},this.settings);break;case"cricket":d0(this.audioContext,this.masterBus.input,{time:i},this.settings);break;case"wind":Jy(this.audioContext,this.masterBus.input,{time:i},this.settings);break;case"footstep":(r=this.footstepLayer)==null||r.previewStep(this.settings);break;case"footstepFade":(o=this.footstepLayer)==null||o.previewFade(this.settings);break;case"ambient":av(this.audioContext,this.masterBus.input,{progressRatio:this.lastState.progressRatio},this.settings);break}}dispose(){var t,n,i;this.isDisposed=!0,(t=this.ambientBed)==null||t.dispose(),(n=this.footstepLayer)==null||n.dispose(),(i=this.masterBus)==null||i.dispose(),this.audioContext&&this.audioContext.state!=="closed"&&this.audioContext.close(),this.audioContext=null,this.masterBus=null,this.ambientBed=null,this.footstepLayer=null}}function Hw(){return new Gw}const Vw=200,pu=7200,$y=11,qp=30,kw=.045,tM={evolutionSpeed:.46,pointMotion:.42,depth:.34,ripple:.32,pulse:.34,bodyWidth:.78,bodyHeight:.42,pointSize:2.05,opacity:.54,scale:.98,swimRange:.72,swimSpeed:.58,swimEase:.012,tentacleMotion:.42,tentacleOpacity:.72,light:.78},el={classicFusion:{naoki_mix:.8,harmonics:4,field_dist:60,tentacles:1,pulse:1.2,asymmetry:.2,twist:.5,speed:.04,scale:70},octopusMutation:{naoki_mix:.9,harmonics:8,field_dist:99,tentacles:8,pulse:.6,asymmetry:.4,twist:.2,speed:.03,scale:100},astralSpirit:{naoki_mix:.2,harmonics:15,field_dist:40,tentacles:5,pulse:2,asymmetry:.9,twist:1.5,speed:.06,scale:60},abyssVelvet:{naoki_mix:.5,harmonics:2,field_dist:120,tentacles:12,pulse:.3,asymmetry:.1,twist:.05,speed:.02,scale:130}},Zh=[180/255,230/255,255/255],Kh=[255/255,175/255,204/255],Qh=[255/255,226/255,150/255];function Gs(e,t,n){return Math.max(t,Math.min(n,e))}function Va(e,t,n){return e+(t-e)*n}function Xw(e){return{...e}}function Ww(e,t,n){const i={};return Object.keys(e).forEach(a=>{i[a]=Va(e[a],t[a],n)}),i}function Jh(e,t,n){const i={},a=Gs(n,0,1);return Object.keys(e).forEach(s=>{i[s]=Va(e[s],t[s],a)}),i}function qw(e,t){const n=Gs(e,0,1),i=Gs(.22+n*.84+Math.sin(t*.08)*.08,0,1),a=.12+n*.18+(Math.sin(t*.045+1.8)+1)*.07,s=n*.22,r=Jh(el.classicFusion,el.octopusMutation,i),o=Jh(r,el.astralSpirit,a);return Jh(o,el.abyssVelvet,s)}function Yw(e={}){return{...tM,...e}}function jw({index:e,time:t,params:n,progressRatio:i,pulse:a,settings:s,positions:r,colors:o}){const l=e%Vw,c=e/40,h=6*Math.cos(l/14)*(1-n.naoki_mix+n.naoki_mix*Math.cos(c/30)),d=c/8-12,u=(h*h+d*d)/n.field_dist+2,p=e/pu*10+2,_=Va(p,u,n.naoki_mix),M=Math.atan2(h,d),g=t*s.pointMotion,f=n.scale-5*Math.sin(M*n.tentacles)+h*(3+5/_*Math.sin(_*_-g*2.5));let m=n.scale+Math.sin(M*n.harmonics+g)*20*n.pulse;m+=Math.cos(M*3-g)*15*n.asymmetry;const v=Va(m,f,n.naoki_mix),S=_/2+d/90-g/15,w=M+Math.sin(_+g)*n.twist,T=Va(w,S,n.naoki_mix);let R=v*Math.sin(T);const x=(v+_*10)*Math.cos(T);R+=Math.sin(e+g*2)*(1-n.naoki_mix)*3*s.ripple;const U=Gs(200-_/20*180,20,200)/200,D=n.scale*(.72+n.naoki_mix*.14),I=12+i*10,q=Gs((-x+35)/150,0,1),Q=(Math.sin(e*.023+g*1.5)*(2+q*14)+Math.cos(M*(2.4+n.tentacles*.16)-g*.9)*(4+i*8))*s.depth,B=e*3,C=e%2===0?1:-1,L=(R-D)*(.86+i*.1)*s.bodyWidth;r[B]=L*C,r[B+1]=(x-I)*s.bodyHeight+Math.sin(g*.9+_*.55)*(1.4+i*2.4)*s.ripple,r[B+2]=Q*(.72+a*.08*s.pulse)+L*C*.04;const k=.5+Math.sin(M*n.harmonics+_*.42-g)*.5,K=Gs(.14+k*.42+i*.18,0,.82),rt=i*(.08+q*.14),Tt=1-K,Ct=.28+U*.94+a*.08*s.pulse;let Xt=Zh[0]*Tt+Kh[0]*K,Wt=Zh[1]*Tt+Kh[1]*K,Pt=Zh[2]*Tt+Kh[2]*K;Xt=Va(Xt,Qh[0],rt),Wt=Va(Wt,Qh[1],rt),Pt=Va(Pt,Qh[2],rt),o[B]=Xt*Ct,o[B+1]=Wt*Ct,o[B+2]=Pt*Ct}function Zw(e){return Array.from({length:$y},(t,n)=>{const i=new Float32Array(qp*3),a=new Tn,s=new Dy({color:e,transparent:!0,opacity:.12,blending:ho,depthWrite:!1}),r=new Uy(a,s);return a.setAttribute("position",new Bn(i,3)),{line:r,geometry:a,material:s,positions:i,phase:n*.74}})}function Kw(e,t,n,i,a,s){const r=34+n.scale*.28,o=44+n.scale*.34+i*20,l=t*s.tentacleMotion;e.forEach((c,h)=>{const d=h/($y-1)*2-1,u=d*r+Math.sin(l*.55+c.phase)*3,p=-10-Math.abs(d)*7;for(let _=0;_<qp;_+=1){const M=_/(qp-1),g=Math.sin(l*.95+c.phase+M*5.8),f=Math.cos(l*.72+c.phase*1.7+M*4.6),m=_*3;c.positions[m]=u+g*(3+M*10)+f*M*3.5,c.positions[m+1]=p-o*M+Math.sin(l*.8+M*7+h)*M*4,c.positions[m+2]=(f*(2+M*20)+Math.sin(l*.64+M*4)*M*5)*s.depth}c.material.opacity=(.07+a*.08*s.pulse+i*.04)*(1-Math.abs(d)*.24)*s.tentacleOpacity,c.geometry.attributes.position.needsUpdate=!0})}function Qw({scene:e,glowTexture:t,colors:n}){const i=new Float32Array(pu*3),a=new Float32Array(pu*3),s=new Tn,r=new Ly({map:t,size:2.65,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.68,blending:ho,depthWrite:!1}),o=new Xr,l=new bT(s,r),c=new Iy(n.blue,.62,210,2),h=new O,d=Zw(n.blue);let u=Xw(el.classicFusion),p=0,_=0,M=0;return s.setAttribute("position",new Bn(i,3)),s.setAttribute("color",new Bn(a,3)),o.position.set(0,118,-235),o.add(l),o.add(c),d.forEach(g=>o.add(g.line)),e.add(o),{update(g,f=0,m){const v=Yw(m),S=M===0?1:Gs((g-M)/16.667,.4,2.4);M=g,_+=S/60*v.swimSpeed;const w=_,T=qw(f,w);u=Ww(u,T,kw),p+=u.speed*S*v.evolutionSpeed;const R=.5+Math.sin(p*6.8*v.pointMotion)*.5;for(let x=0;x<pu;x+=1)jw({index:x,time:p,params:u,progressRatio:f,pulse:R,settings:v,positions:i,colors:a});s.attributes.position.needsUpdate=!0,s.attributes.color.needsUpdate=!0,Kw(d,p,u,f,R,v),h.set((Math.sin(w*.035)*155+Math.sin(w*.097+1.3)*42)*v.swimRange,118+(Math.sin(w*.041+.6)*16+Math.sin(w*.13)*5)*v.swimRange,-225+(Math.sin(w*.028)*92+Math.sin(w*.073+2.1)*32)*v.swimRange),o.position.lerp(h,v.swimEase),o.rotation.set(Math.sin(w*.11)*.035*v.swimRange,Math.sin(w*.04+.8)*.15*v.swimRange,Math.sin(w*.09)*.045*v.swimRange),o.scale.setScalar(v.scale*(1.04+f*.14+R*.03*v.pulse)),r.size=v.pointSize+f*.48+R*.16*v.pulse,r.opacity=v.opacity+R*.1*v.pulse+f*.1,c.intensity=(.32+R*.26*v.pulse+f*.2)*v.light},dispose(){e.remove(o),s.dispose(),r.dispose(),d.forEach(g=>{g.geometry.dispose(),g.material.dispose()})}}}const $h={shrineAirLift:12,startShrineAirLift:10,orbitRadius:10.5,orbitVerticalSpan:2.6,orbitSpeed:.001,orbitHoldDistance:48,perceptionRadius:22,minSpeed:.18,maxSpeed:.38,cohesionWeight:.024,alignmentWeight:.032,separationWeight:.088,targetWeight:.068,noiseWeight:.01,groundClearance:8},td={intensity:.32,distance:18,decay:2,pulse:.12},Jw=[{key:"orbitRadius",label:"Orbit Radius",min:7,max:16,step:.1,precision:1},{key:"orbitVerticalSpan",label:"Orbit Height",min:1.2,max:5,step:.1,precision:1},{key:"perceptionRadius",label:"Perception",min:10,max:30,step:.5,precision:1},{key:"cohesionWeight",label:"Cohesion",min:.004,max:.05,step:.001,precision:3},{key:"alignmentWeight",label:"Alignment",min:.004,max:.05,step:.001,precision:3},{key:"separationWeight",label:"Separation",min:.03,max:.18,step:.002,precision:3},{key:"targetWeight",label:"Target Pull",min:.02,max:.12,step:.001,precision:3},{key:"noiseWeight",label:"Noise",min:0,max:.04,step:.001,precision:3},{key:"minSpeed",label:"Min Speed",min:.08,max:.3,step:.01,precision:2},{key:"maxSpeed",label:"Max Speed",min:.24,max:.6,step:.01,precision:2}],$w=[{key:"intensity",label:"Light Intensity",min:0,max:.8,step:.01,precision:2},{key:"distance",label:"Light Distance",min:6,max:28,step:.5,precision:1},{key:"decay",label:"Light Decay",min:1,max:3,step:.1,precision:1},{key:"pulse",label:"Pulse",min:0,max:.35,step:.01,precision:2}],ed={...tM},tC=[{title:"Stability",accent:"accent-teal-300",fields:[{key:"evolutionSpeed",label:"Evolution",min:.08,max:1.2,step:.01,precision:2},{key:"pointMotion",label:"Point Motion",min:.05,max:1.2,step:.01,precision:2},{key:"depth",label:"Depth Drift",min:0,max:1.2,step:.01,precision:2},{key:"ripple",label:"Ripple",min:0,max:1.2,step:.01,precision:2}]},{title:"Body",accent:"accent-sky-300",fields:[{key:"pulse",label:"Pulse",min:0,max:1.2,step:.01,precision:2},{key:"bodyWidth",label:"Width",min:.45,max:1.45,step:.01,precision:2},{key:"bodyHeight",label:"Height",min:.24,max:.72,step:.01,precision:2},{key:"scale",label:"Scale",min:.72,max:1.4,step:.01,precision:2},{key:"pointSize",label:"Point Size",min:.8,max:4.2,step:.01,precision:2},{key:"opacity",label:"Opacity",min:.12,max:.9,step:.01,precision:2}]},{title:"Swim",accent:"accent-indigo-300",fields:[{key:"swimRange",label:"Range",min:0,max:1.5,step:.01,precision:2},{key:"swimSpeed",label:"Speed",min:0,max:1.4,step:.01,precision:2},{key:"swimEase",label:"Ease",min:.002,max:.06,step:.001,precision:3}]},{title:"Tendrils",accent:"accent-violet-300",fields:[{key:"tentacleMotion",label:"Motion",min:0,max:1.4,step:.01,precision:2},{key:"tentacleOpacity",label:"Opacity",min:0,max:1.2,step:.01,precision:2},{key:"light",label:"Light",min:0,max:1.4,step:.01,precision:2}]}],eC=new Set(["localhost","127.0.0.1"]),nC=(e,t)=>t.split(".").reduce((n,i)=>n==null?void 0:n[i],e),iC=(e,t,n)=>{const i=t.split("."),a={...e};let s=a;return i.slice(0,-1).forEach(r=>{s[r]={...s[r]},s=s[r]}),s[i.at(-1)]=n,a},aC=()=>{const e=Re.useRef(),[t,n]=Re.useState(0),[i,a]=Re.useState(0),[s,r]=Re.useState(!1),[o,l]=Re.useState(!1),[c,h]=Re.useState(!1),[d,u]=Re.useState($h),[p,_]=Re.useState(td),[M,g]=Re.useState(ed),[f,m]=Re.useState(()=>ev()),[v,S]=Re.useState(!1),[w,T]=Re.useState(!1),[R,x]=Re.useState(!1),[A,U]=Re.useState(Wc[0].id),D=Re.useRef($h),I=Re.useRef(td),q=Re.useRef(ed),Q=Re.useRef(f),B=Re.useRef(null),C={worldSize:500,segments:100,obeliskHeight:85,playerHeight:2.2,moveSpeed:.38,gravity:.008,interactDist:15,obeliskCount:5,fireflyCount:20,trailLength:50},L={skyTwilight:988970,fogColor:132631,snow:new Qt(2236966),pink:new Qt(16756684),blue:new Qt(10670847),glow:6333946,fire:15680580},k=typeof window<"u"&&eC.has(window.location.hostname);Re.useEffect(()=>{D.current=d},[d]),Re.useEffect(()=>{I.current=p},[p]),Re.useEffect(()=>{q.current=M},[M]),Re.useEffect(()=>{var W;Q.current=f,(W=B.current)==null||W.setSettings(f)},[f]);const K=(W,et)=>{u(St=>({...St,[W]:et}))},rt=(W,et)=>{_(St=>({...St,[W]:et}))},Tt=(W,et)=>{g(St=>({...St,[W]:et}))},Ct=()=>{u($h),_(td)},Xt=()=>{g(ed)},Wt=(W,et)=>{m(St=>iC(St,W,et))},Pt=()=>{m(ev())},tt=W=>{var et;(et=B.current)==null||et.preview(W)},gt=(W,et)=>Number(W).toFixed(et),ht=Wc.find(W=>W.id===A)??Wc[0];return Re.useEffect(()=>{var St;const W=window.matchMedia("(pointer: coarse)"),et=()=>{h(W.matches||navigator.maxTouchPoints>0)};return et(),(St=W.addEventListener)==null||St.call(W,"change",et),()=>{var ee;(ee=W.removeEventListener)==null||ee.call(W,"change",et)}},[]),Re.useEffect(()=>{if(!e.current)return;let W=0,et=!1;const St=Hw();B.current=St,St.setSettings(Q.current);const ee=(ot,Rt,ne)=>Math.max(Rt,Math.min(ne,ot)),Ot=new fT;Ot.background=new Qt(L.skyTwilight),Ot.fog=new r0(L.fogColor,.006);const _e=new NT(16777215,1118498,1.1);Ot.add(_e);const de=new $n(75,window.innerWidth/window.innerHeight,.1,3e3),Bt=new Nw({antialias:!0});Bt.setSize(window.innerWidth,window.innerHeight),Bt.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.current.appendChild(Bt.domElement);const Ce=(()=>{const ot=document.createElement("canvas");ot.width=64,ot.height=64;const Rt=ot.getContext("2d"),ne=Rt.createRadialGradient(32,32,0,32,32,32);return ne.addColorStop(0,"rgba(255, 255, 255, 1)"),ne.addColorStop(.2,"rgba(255, 255, 255, 0.5)"),ne.addColorStop(1,"rgba(255, 255, 255, 0)"),Rt.fillStyle=ne,Rt.fillRect(0,0,64,64),new ET(ot)})(),cn=(ot,Rt)=>{const ne=Math.sin(ot*.045)*Math.cos(Rt*.045)*2.8,Ft=Math.cos(ot*.02+Rt*.03)*3.5;return ne+Ft},P=new Ql(1200,1200,C.segments,C.segments);P.rotateX(-Math.PI/2);const Ge=P.attributes.position.array,te=[];for(let ot=0;ot<Ge.length/3;ot++){const Rt=Ge[ot*3],ne=Ge[ot*3+2],Ft=cn(Rt,ne);Ge[ot*3+1]=Ft;const kt=L.snow.clone().multiplyScalar(.4+Ft*.1);te.push(kt.r,kt.g,kt.b)}P.setAttribute("color",new bn(te,3));const Me=new Wo({vertexColors:!0,roughness:1}),_t=new Cn(P,Me);Ot.add(_t);const zt={pos:new O(0,10,20),vel:new O,yaw:0,pitch:0},E=[],y=[],z=[],j=(ot,Rt)=>{const ne=new wy({map:Ce,color:ot,transparent:!0,opacity:0,blending:ho}),Ft=new _T(ne);return Ft.scale.set(Rt,Rt,1),Ft},it=()=>{const ot=[];for(let Rt=0;Rt<C.obeliskCount;Rt++){let ne,Ft;do ne=(Math.random()-.5)*C.worldSize,Ft=(Math.random()-.5)*C.worldSize;while(Math.hypot(ne,Ft)<100||ot.some(kt=>Math.hypot(kt.x-ne,kt.z-Ft)<130));ot.push({x:ne,z:Ft})}return a(C.obeliskCount),ot},ut=(ot,Rt,ne=!1)=>{const Ft=cn(ot,Rt),kt=new Xr;if(kt.position.set(ot,Ft,Rt),ne){const De=new Cn(new cs(3.5,3.5,3.5),new Wo({color:16777215,emissive:16777215,emissiveIntensity:2}));De.position.set(0,1.75,0),kt.add(De);const Ue=j(16777215,20);Ue.position.y=3,Ue.material.opacity=.5,kt.add(Ue),Ot.add(kt);const Ve=new O(ot,Ft+1.75,Rt),un=Ve.clone().add(new O(0,D.current.startShrineAirLift,0));E.push({pillar:null,shrine:De,tipGlow:Ue,shrineGlow:Ue,pos:new O(ot,Ft,Rt),tipPos:new O(ot,Ft+5,Rt),shrinePos:Ve,shrineAirPos:un,activated:!0})}else{const De=new Cn(new cs(5.5,C.obeliskHeight,5.5),new Wo({color:65793}));De.position.y=C.obeliskHeight/2-2,kt.add(De);const Ue=new Cn(new c0(2.5),new Wo({color:1118481}));Ue.position.y=C.obeliskHeight+2,kt.add(Ue);const Ve=j(L.blue,15);Ve.position.y=C.obeliskHeight+2,kt.add(Ve);const un=new Cn(new cs(3,3,3),new Wo({color:526344}));un.position.set(0,1.5,12),un.userData={id:E.length},kt.add(un),y.push(un);const Yn=D.current,Ti=new O(ot,Ft+1.5,Rt+12),Bi=Ti.clone().add(new O(0,Yn.shrineAirLift,0)),ui=j(L.pink,12);ui.position.set(0,3,12),kt.add(ui),Ot.add(kt),E.push({pillar:De,shrine:un,tipGlow:Ve,shrineGlow:ui,pos:new O(ot,Ft,Rt),tipPos:new O(ot,Ft+C.obeliskHeight+2,Rt),shrinePos:Ti,shrineAirPos:Bi,activated:!1})}};ut(0,0,!0),it().forEach(ot=>ut(ot.x,ot.z));class mt{constructor(Rt,ne){const Ft=D.current,kt=I.current;this.mesh=new Cn(new tf(.25,8,8),new Qu({color:16777215})),this.index=ne,this.orbitOffset=Math.random()*Math.PI*2,this.orbitRadius=Ft.orbitRadius+(Math.random()-.5)*2.4,this.orbitDirection=Math.random()>.5?1:-1,this.turnRate=.032+Math.random()*.018,this.cruiseSpeed=fr.lerp(Ft.minSpeed,Ft.maxSpeed,.36+Math.random()*.28),this.speed=this.cruiseSpeed,this.noiseSeed=Math.random()*1e3,this.lightPhase=Math.random()*Math.PI*2;const De=new O((Math.random()-.5)*6.5,(Math.random()-.5)*3,(Math.random()-.5)*6.5);this.pos=Rt.clone().add(De),this.forward=new O(Math.random()-.5,(Math.random()-.5)*.2,Math.random()-.5).normalize(),this.vel=this.forward.clone().multiplyScalar(this.speed),this.trailPoints=[];for(let Ve=0;Ve<C.trailLength;Ve++)this.trailPoints.push(this.pos.clone());const Ue=new Float32Array(C.trailLength);for(let Ve=0;Ve<C.trailLength;Ve++)Ue[Ve]=1-Ve/C.trailLength;this.trailGeo=new Tn().setFromPoints(this.trailPoints),this.trailGeo.setAttribute("alpha",new Bn(Ue,1)),this.trailMat=new Oi({transparent:!0,uniforms:{color:{value:new Qt(L.glow)}},vertexShader:`
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
          `,blending:ho}),this.line=new Uy(this.trailGeo,this.trailMat),this.localLight=new Iy(L.blue,kt.intensity,kt.distance,kt.decay),this.localLight.position.copy(this.pos),this.mesh.position.copy(this.pos),Ot.add(this.mesh),Ot.add(this.line),Ot.add(this.localLight)}update(Rt,ne,Ft){const kt=D.current,De=I.current,Ue=new O,Ve=new O,un=new O;let Yn=0;ne.forEach(fn=>{const b=this.pos.distanceTo(fn.pos);if(b>0&&b<kt.perceptionRadius){const F=1-b/kt.perceptionRadius;Ue.add(fn.pos),un.add(fn.forward),Ve.add(this.pos.clone().sub(fn.pos).normalize().multiplyScalar(F)),Yn++}}),Yn>0&&(Ue.divideScalar(Yn).sub(this.pos).multiplyScalar(kt.cohesionWeight),un.divideScalar(Yn).sub(this.forward).multiplyScalar(kt.alignmentWeight),Ve.divideScalar(Yn).multiplyScalar(kt.separationWeight));let Ti=new O;if(Rt.mode==="orbit"){const fn=Ft*kt.orbitSpeed*this.orbitDirection+this.orbitOffset,b=Rt.center.clone().add(new O(Math.cos(fn)*this.orbitRadius,Math.sin(Ft*.0017+this.orbitOffset)*Rt.verticalSpan,Math.sin(fn)*this.orbitRadius)),F=new O(-Math.sin(fn)*this.orbitDirection,0,Math.cos(fn)*this.orbitDirection).multiplyScalar(this.orbitRadius*.4);Ti.copy(b.add(F).sub(this.pos)).multiplyScalar(kt.targetWeight)}else Ti.copy(Rt.destination).sub(this.pos).multiplyScalar(kt.targetWeight);const Bi=new O(Math.sin(Ft*.0012+this.noiseSeed),Math.sin(Ft*.0017+this.noiseSeed*1.7)*.35,Math.cos(Ft*.001+this.noiseSeed*.7)).multiplyScalar(kt.noiseWeight),ui=this.forward.clone().add(Ti).add(Ue).add(un).add(Ve).add(Bi);ui.lengthSq()>0&&(ui.normalize(),this.forward.lerp(ui,this.turnRate).normalize());const ar=Rt.mode==="orbit"?this.cruiseSpeed*.92:this.cruiseSpeed*1.06;this.speed=fr.lerp(this.speed,ee(ar,kt.minSpeed,kt.maxSpeed),.04),this.vel.copy(this.forward).multiplyScalar(this.speed),this.pos.add(this.vel);const sr=cn(this.pos.x,this.pos.z)+kt.groundClearance;this.pos.y<sr&&(this.pos.y=fr.lerp(this.pos.y,sr,.28),this.forward.y=Math.abs(this.forward.y)+.18,this.forward.normalize()),this.mesh.position.copy(this.pos),this.localLight.position.copy(this.pos),this.localLight.intensity=De.intensity*(.82+Math.sin(Ft*.006+this.lightPhase)*De.pulse),this.localLight.distance=De.distance,this.localLight.decay=De.decay;for(let fn=C.trailLength-1;fn>0;fn--)this.trailPoints[fn].copy(this.trailPoints[fn-1]);this.trailPoints[0].copy(this.pos),this.trailGeo.setFromPoints(this.trailPoints),this.trailGeo.attributes.position.needsUpdate=!0}dispose(){Ot.remove(this.mesh),Ot.remove(this.line),Ot.remove(this.localLight),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.trailGeo.dispose(),this.trailMat.dispose()}}const X=[],J=E[0].shrineAirPos;for(let ot=0;ot<C.fireflyCount;ot++)X.push(new mt(J,ot));const yt=Qw({scene:Ot,glowTexture:Ce,colors:L}),bt={moveX:0,moveY:0},at={left:-1,right:-1,lx:0,ly:0,rx:0,ry:0},st={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1,KeyQ:!1,KeyE:!1},Nt={locked:!1,dragging:!1,lastX:0,lastY:0},qt=.0024,oe=.005,N=.032,ct=(ot,Rt,ne)=>{zt.yaw-=ot*ne,zt.pitch=ee(zt.pitch-Rt*ne,-1.4,1.4)},Y=()=>({moveX:(st.KeyD||st.ArrowRight?1:0)-(st.KeyA||st.ArrowLeft?1:0),moveY:(st.KeyW||st.ArrowUp?1:0)-(st.KeyS||st.ArrowDown?1:0),turn:(st.KeyQ?1:0)-(st.KeyE?1:0)}),Et=()=>{const ot=new R_;ot.setFromCamera(new jt(0,0),de);const Rt=ot.intersectObjects(y);if(Rt.length>0){const ne=Rt[0].object.userData.id,Ft=E[ne];if(zt.pos.distanceTo(Ft.pos)<C.interactDist&&!Ft.activated){Ft.activated=!0,Ft.pillar.material.color.set(16777215),Ft.pillar.material.emissive.set(16777215),Ft.pillar.material.emissiveIntensity=2,Ft.shrine.material.color.set(16777215),Ft.shrine.material.emissive.set(16777215),Ft.shrine.material.emissiveIntensity=2,Ft.tipGlow.material.opacity=.6,Ft.shrineGlow.material.opacity=.6;const kt=E.reduce((De,Ue)=>De+(Ue.pillar&&Ue.activated?1:0),0);St.playShrineIgnite({progress:kt,total:C.obeliskCount,isFinal:kt===C.obeliskCount}),n(De=>(De+1===C.obeliskCount&&r(!0),De+1))}}},ft=ot=>{ot.preventDefault(),St.unlock();for(let Rt of ot.changedTouches)Rt.clientX<window.innerWidth/2?(at.left=Rt.identifier,at.lx=Rt.clientX,at.ly=Rt.clientY):(at.right=Rt.identifier,at.rx=Rt.clientX,at.ry=Rt.clientY,Et())},nt=ot=>{ot.preventDefault();for(let Rt of ot.changedTouches)Rt.identifier===at.left?(bt.moveX=ee((Rt.clientX-at.lx)/50,-1,1),bt.moveY=ee(-(Rt.clientY-at.ly)/50,-1,1)):Rt.identifier===at.right&&(ct(Rt.clientX-at.rx,Rt.clientY-at.ry,oe),at.rx=Rt.clientX,at.ry=Rt.clientY)},Ut=ot=>{for(let Rt of ot.changedTouches)Rt.identifier===at.left?(at.left=-1,bt.moveX=0,bt.moveY=0):Rt.identifier===at.right&&(at.right=-1)},Ht=ot=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ot.code)&&ot.preventDefault(),ot.repeat||St.unlock(),Object.hasOwn(st,ot.code)&&(st[ot.code]=!0),ot.code==="Space"&&!ot.repeat&&Et()},He=ot=>{Object.hasOwn(st,ot.code)&&(st[ot.code]=!1)},pe=()=>{Nt.locked=document.pointerLockElement===Bt.domElement,Nt.locked||(Nt.dragging=!1)},ci=ot=>{var Rt,ne;ot.button===0&&(St.unlock(),Nt.dragging=!0,Nt.lastX=ot.clientX,Nt.lastY=ot.clientY,(ne=(Rt=Bt.domElement).requestPointerLock)==null||ne.call(Rt))},qn=ot=>{if(Nt.locked){ct(ot.movementX,ot.movementY,qt);return}Nt.dragging&&(ct(ot.clientX-Nt.lastX,ot.clientY-Nt.lastY,oe),Nt.lastX=ot.clientX,Nt.lastY=ot.clientY)},ir=()=>{Nt.dragging=!1},$l=ot=>{ot.button===0&&Et()},wo=ot=>{ot.preventDefault()};window.addEventListener("touchstart",ft,{passive:!1}),window.addEventListener("touchmove",nt,{passive:!1}),window.addEventListener("touchend",Ut),window.addEventListener("touchcancel",Ut),window.addEventListener("keydown",Ht),window.addEventListener("keyup",He),window.addEventListener("mousemove",qn),window.addEventListener("mouseup",ir),document.addEventListener("pointerlockchange",pe),Bt.domElement.addEventListener("mousedown",ci),Bt.domElement.addEventListener("click",$l),Bt.domElement.addEventListener("contextmenu",wo);const Co=()=>{if(et)return;W=requestAnimationFrame(Co);const ot=Y();ot.turn!==0&&(zt.yaw+=ot.turn*N);const Rt=new O(-Math.sin(zt.yaw),0,-Math.cos(zt.yaw)),ne=new O(-Math.cos(zt.yaw),0,Math.sin(zt.yaw)),Ft=ee(bt.moveX+ot.moveX,-1,1),kt=ee(bt.moveY+ot.moveY,-1,1),De=new O().addScaledVector(Rt,kt).addScaledVector(ne,-Ft),Ue=ee(De.length(),0,1);Ue>0&&zt.pos.addScaledVector(De.normalize(),C.moveSpeed);const Ve=cn(zt.pos.x,zt.pos.z)+C.playerHeight;zt.vel.y-=C.gravity,zt.pos.y+=zt.vel.y,zt.pos.y<Ve&&(zt.pos.y=Ve,zt.vel.y=0),de.position.copy(zt.pos),de.rotation.set(zt.pitch,zt.yaw,0,"YXZ");let un=E[0],Yn=null,Ti=1/0,Bi=0;E.forEach(dt=>{if(dt.activated)un=dt,dt.pillar&&(Bi+=1);else{const pt=zt.pos.distanceTo(dt.pos);pt<Ti&&(Ti=pt,Yn=dt)}});const ui=Date.now();yt.update(ui,Bi/C.obeliskCount,q.current);const ar=D.current,sr=zt.pos.distanceTo(un.shrinePos)<ar.orbitHoldDistance,fn=!Yn||sr?{mode:"orbit",center:un.shrineAirPos,verticalSpan:ar.orbitVerticalSpan}:{mode:"travel",destination:Yn.tipPos};X.forEach(dt=>dt.update(fn,X,ui));let b=.6;St.update({playerSpeed:Ue,progressRatio:Bi/C.obeliskCount,isWon:Bi>=C.obeliskCount});const F=P.attributes.color,V=P.attributes.position;let G=!1;E.forEach(dt=>{if(dt.activated){if(Math.random()>.86){const pt=new Cn(new tf(.12),new Qu({color:L.fire,transparent:!0}));pt.position.copy(dt.shrinePos).add(new O((Math.random()-.5)*2,.5,(Math.random()-.5)*2)),pt.userData={v:new O((Math.random()-.5)*.03,.08,(Math.random()-.5)*.03),l:1},Ot.add(pt),z.push(pt)}b+=Math.max(0,1-zt.pos.distanceTo(dt.pos)/160)*.7,dt.tipGlow.material.opacity=.4+Math.sin(Date.now()*.003)*.2,dt.shrineGlow.material.opacity=.4+Math.sin(Date.now()*.003+1)*.2;for(let pt=0;pt<V.count;pt++){const Vt=V.getX(pt),Jt=V.getZ(pt),Lt=Math.hypot(Vt-dt.pos.x,Jt-dt.pos.z);if(Lt<65){const he=Math.max(0,1-Lt/65),Oe=L.pink.clone().lerp(L.blue,Math.sin(Vt*.1)*.5+.5);F.setXYZ(pt,fr.lerp(F.getX(pt),Oe.r,he*.06),fr.lerp(F.getY(pt),Oe.g,he*.06),fr.lerp(F.getZ(pt),Oe.b,he*.06)),G=!0}}}}),G&&(F.needsUpdate=!0);for(let dt=z.length-1;dt>=0;dt--){const pt=z[dt];pt.position.add(pt.userData.v),pt.userData.l-=.015,pt.material.opacity=pt.userData.l,pt.scale.setScalar(pt.userData.l),pt.userData.l<=0&&(Ot.remove(pt),z.splice(dt,1))}const H=new Qt(L.skyTwilight).multiplyScalar(Math.max(.4,Math.min(1.6,b)));Ot.background.lerp(H,.04),Ot.fog.color.lerp(H,.04);const xt=new R_;xt.setFromCamera(new jt(0,0),de);const wt=xt.intersectObjects(y),vt=wt.length>0&&zt.pos.distanceTo(wt[0].object.parent.position)<C.interactDist;l(dt=>dt===vt?dt:vt),Bt.render(Ot,de)};return Co(),()=>{var ot,Rt;et=!0,W&&cancelAnimationFrame(W),St.dispose(),B.current===St&&(B.current=null),X.forEach(ne=>ne.dispose()),yt.dispose(),window.removeEventListener("touchstart",ft),window.removeEventListener("touchmove",nt),window.removeEventListener("touchend",Ut),window.removeEventListener("touchcancel",Ut),window.removeEventListener("keydown",Ht),window.removeEventListener("keyup",He),window.removeEventListener("mousemove",qn),window.removeEventListener("mouseup",ir),document.removeEventListener("pointerlockchange",pe),Bt.domElement.removeEventListener("mousedown",ci),Bt.domElement.removeEventListener("click",$l),Bt.domElement.removeEventListener("contextmenu",wo),document.pointerLockElement===Bt.domElement&&((ot=document.exitPointerLock)==null||ot.call(document)),(Rt=e.current)==null||Rt.removeChild(Bt.domElement)}},[]),Z.jsxs("div",{className:"fixed inset-0 overflow-hidden bg-[#050510] select-none touch-none",children:[Z.jsx("div",{ref:e,className:"w-full h-full"}),Z.jsxs("div",{className:"absolute top-14 left-10 text-white pointer-events-none tracking-[0.5em] uppercase",children:[Z.jsx("h1",{className:"text-3xl font-extralight drop-shadow-2xl",children:"Lumina"}),Z.jsx("div",{className:"h-[2px] w-12 bg-white/30 my-4"}),Z.jsx("p",{className:"text-[9px] opacity-40",children:"Follow the celestial threads"})]}),Z.jsxs("div",{className:"absolute top-14 right-8 z-20 flex flex-col items-end gap-2",children:[Z.jsxs("div",{className:"pointer-events-auto flex items-center gap-2",children:[k&&Z.jsx("button",{onPointerDown:W=>{W.stopPropagation();const et=!v;S(et),et&&(T(!1),x(!1))},className:"rounded-full border border-cyan-200/25 bg-cyan-300/10 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-cyan-100 backdrop-blur-3xl transition hover:bg-cyan-300/16",children:v?"Hide Tuner":"Tune Flock"}),k&&Z.jsx("button",{onPointerDown:W=>{W.stopPropagation();const et=!w;T(et),et&&(S(!1),x(!1))},className:"rounded-full border border-teal-200/25 bg-teal-300/10 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-teal-100 backdrop-blur-3xl transition hover:bg-teal-300/16",children:w?"Hide Creature":"Creature Lab"}),Z.jsx("button",{onPointerDown:W=>{W.stopPropagation();const et=!R;x(et),et&&(S(!1),T(!1))},className:"rounded-full border border-fuchsia-200/25 bg-fuchsia-300/10 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-fuchsia-100 backdrop-blur-3xl transition hover:bg-fuchsia-300/16",children:R?"Hide Audio":"Audio Lab"})]}),Z.jsxs("div",{className:"bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-6 py-2 text-white flex items-center gap-3",children:[Z.jsx("span",{className:"text-[9px] opacity-25 tracking-widest",children:"SIGILS"}),Z.jsxs("span",{className:"text-xl font-bold",children:[t," / ",i]})]}),k&&w&&Z.jsxs("div",{className:"pointer-events-auto max-h-[calc(100vh-7.5rem)] w-[min(29rem,calc(100vw-1.75rem))] overflow-y-auto rounded-[1.25rem] border border-white/10 bg-slate-950/72 p-4 text-white shadow-[0_18px_80px_rgba(0,0,0,0.48)] backdrop-blur-3xl",children:[Z.jsxs("div",{className:"flex items-start justify-between gap-3",children:[Z.jsxs("div",{children:[Z.jsx("p",{className:"text-[9px] uppercase tracking-[0.28em] text-teal-200/70",children:"World organism"}),Z.jsx("h2",{className:"mt-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/90",children:"Creature Lab"})]}),Z.jsx("button",{onPointerDown:W=>{W.stopPropagation(),Xt()},className:"rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-white/75 transition hover:bg-white/8",children:"Reset"})]}),Z.jsx("div",{className:"mt-4 space-y-5",children:tC.map(W=>Z.jsxs("section",{children:[Z.jsx("p",{className:"mb-3 text-[9px] uppercase tracking-[0.22em] text-teal-100/70",children:W.title}),Z.jsx("div",{className:"grid grid-cols-2 gap-x-3 gap-y-2",children:W.fields.map(et=>Z.jsxs("label",{className:"block",children:[Z.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2 text-[9px] uppercase tracking-[0.14em] text-white/55",children:[Z.jsx("span",{children:et.label}),Z.jsx("span",{className:"text-white/95",children:gt(M[et.key],et.precision)})]}),Z.jsx("input",{type:"range",min:et.min,max:et.max,step:et.step,value:M[et.key],onChange:St=>Tt(et.key,Number(St.target.value)),className:`h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 ${W.accent}`})]},et.key))})]},W.title))})]}),R&&Z.jsxs("div",{className:"pointer-events-auto max-h-[calc(100vh-7.5rem)] w-[min(31rem,calc(100vw-1.75rem))] overflow-y-auto rounded-[1.25rem] border border-white/10 bg-slate-950/72 p-4 text-white shadow-[0_18px_80px_rgba(0,0,0,0.48)] backdrop-blur-3xl",children:[Z.jsxs("div",{className:"flex items-start justify-between gap-3",children:[Z.jsxs("div",{children:[Z.jsx("p",{className:"text-[9px] uppercase tracking-[0.28em] text-fuchsia-200/70",children:"Runtime audio"}),Z.jsx("h2",{className:"mt-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/90",children:"Audio Lab"})]}),Z.jsx("button",{onPointerDown:W=>{W.stopPropagation(),Pt()},className:"rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-white/75 transition hover:bg-white/8",children:"Reset"})]}),Z.jsx("div",{className:"mt-4 grid grid-cols-3 gap-2",children:Ow.map(W=>Z.jsx("button",{onPointerDown:et=>{et.stopPropagation(),tt(W.id)},className:"min-h-9 rounded-md border border-white/10 bg-white/5 px-2 py-2 text-[9px] uppercase tracking-[0.16em] text-white/75 transition hover:border-fuchsia-200/30 hover:bg-fuchsia-300/12 hover:text-white",children:W.label},W.id))}),Z.jsx("div",{className:"mt-4 flex flex-wrap gap-2 border-t border-white/10 pt-4",children:Wc.map(W=>Z.jsx("button",{onPointerDown:et=>{et.stopPropagation(),U(W.id)},className:`rounded-full border px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] transition ${W.id===A?"border-fuchsia-200/40 bg-fuchsia-300/16 text-fuchsia-50":"border-white/10 bg-white/5 text-white/55 hover:bg-white/8"}`,children:W.label},W.id))}),Z.jsx("div",{className:"mt-4 space-y-5",children:ht.sections.map(W=>Z.jsxs("section",{children:[Z.jsx("p",{className:"mb-3 text-[9px] uppercase tracking-[0.22em] text-fuchsia-100/70",children:W.title}),Z.jsx("div",{className:"grid grid-cols-2 gap-x-3 gap-y-2",children:W.controls.map(et=>{const St=nC(f,et.path);return et.type==="toggle"?Z.jsxs("label",{className:"flex min-h-9 items-center justify-between gap-3 rounded-md border border-white/8 bg-white/4 px-3 py-2",children:[Z.jsx("span",{className:"text-[9px] uppercase tracking-[0.16em] text-white/62",children:et.label}),Z.jsx("input",{type:"checkbox",checked:!!St,onChange:ee=>Wt(et.path,ee.target.checked),className:"h-4 w-4 cursor-pointer accent-fuchsia-300"})]},et.path):Z.jsxs("label",{className:"block",children:[Z.jsxs("div",{className:"mb-1 flex items-center justify-between gap-2 text-[9px] uppercase tracking-[0.14em] text-white/55",children:[Z.jsx("span",{children:et.label}),Z.jsx("span",{className:"text-white/95",children:gt(St,et.precision)})]}),Z.jsx("input",{type:"range",min:et.min,max:et.max,step:et.step,value:St,onChange:ee=>Wt(et.path,Number(ee.target.value)),className:"h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-fuchsia-300"})]},et.path)})})]},W.title))})]}),k&&v&&Z.jsxs("div",{className:"pointer-events-auto max-h-[calc(100vh-7.5rem)] w-[min(23rem,calc(100vw-1.75rem))] overflow-y-auto rounded-[1.5rem] border border-white/10 bg-slate-950/65 p-4 text-white shadow-[0_18px_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl",children:[Z.jsxs("div",{className:"flex items-start justify-between gap-3",children:[Z.jsxs("div",{children:[Z.jsx("p",{className:"text-[9px] uppercase tracking-[0.28em] text-cyan-200/70",children:"Localhost only"}),Z.jsx("h2",{className:"mt-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-white/90",children:"Flock Tuner"})]}),Z.jsx("button",{onPointerDown:W=>{W.stopPropagation(),Ct()},className:"rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-white/75 transition hover:bg-white/8",children:"Reset"})]}),Z.jsx("div",{className:"mt-4 grid grid-cols-2 gap-x-3 gap-y-2",children:Jw.map(W=>Z.jsxs("label",{className:"block",children:[Z.jsxs("div",{className:"mb-1 flex items-center justify-between text-[9px] uppercase tracking-[0.14em] text-white/55",children:[Z.jsx("span",{children:W.label}),Z.jsx("span",{className:"text-white/95",children:gt(d[W.key],W.precision)})]}),Z.jsx("input",{type:"range",min:W.min,max:W.max,step:W.step,value:d[W.key],onChange:et=>K(W.key,Number(et.target.value)),className:"h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-cyan-300"})]},W.key))}),Z.jsxs("div",{className:"mt-4 border-t border-white/10 pt-4",children:[Z.jsx("p",{className:"mb-3 text-[9px] uppercase tracking-[0.22em] text-amber-100/70",children:"Light"}),Z.jsx("div",{className:"grid grid-cols-2 gap-x-3 gap-y-2",children:$w.map(W=>Z.jsxs("label",{className:"block",children:[Z.jsxs("div",{className:"mb-1 flex items-center justify-between text-[9px] uppercase tracking-[0.14em] text-white/55",children:[Z.jsx("span",{children:W.label}),Z.jsx("span",{className:"text-white/95",children:gt(p[W.key],W.precision)})]}),Z.jsx("input",{type:"range",min:W.min,max:W.max,step:W.step,value:p[W.key],onChange:et=>rt(W.key,Number(et.target.value)),className:"h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-amber-300"})]},W.key))})]})]})]}),Z.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",children:[Z.jsx("div",{className:`w-2 h-2 rounded-full transition-all duration-300 ${o?"bg-white scale-[3.5] shadow-[0_0_30px_#fff]":"bg-white/10"}`}),Z.jsx("div",{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${o?"opacity-100 -top-10":"opacity-0"}`}),Z.jsx("div",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${o?"opacity-100 -bottom-10":"opacity-0"}`})]}),Z.jsx("div",{className:`absolute bottom-24 left-1/2 -translate-x-1/2 transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-6 pointer-events-none"}`,children:Z.jsxs("div",{className:"bg-white/10 backdrop-blur-xl border border-white/20 px-10 py-3 rounded-full text-white text-[10px] tracking-[0.4em] uppercase flex items-center gap-3",children:[c?Z.jsxs("span",{className:"flex items-center gap-3",children:[Z.jsx("strong",{className:"font-semibold text-white",children:"Ignite"}),Z.jsx("span",{className:"text-white/60 tracking-[0.2em]",children:"Tap Right Half"})]}):Z.jsxs("span",{className:"flex items-center gap-3",children:[Z.jsx("strong",{className:"font-semibold text-white",children:"Ignite"}),Z.jsx("span",{className:"text-white/60 tracking-[0.2em]",children:"Space / Click"})]}),Z.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-ping"})]})}),Z.jsx("div",{className:`absolute bottom-8 left-8 right-8 flex ${c?"justify-end":"justify-start"} text-white/75 text-[10px] tracking-[0.25em] uppercase pointer-events-none`,children:Z.jsxs("div",{className:`max-w-sm rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl ${c?"text-right":""}`,children:[Z.jsx("p",{className:"text-white/35",children:c?"Touch":"Desktop"}),c?Z.jsxs(Z.Fragment,{children:[Z.jsxs("p",{className:"mt-2 leading-relaxed",children:[Z.jsx("strong",{className:"font-semibold text-white",children:"Move"}),Z.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Drag Left Half"})]}),Z.jsxs("p",{className:"leading-relaxed",children:[Z.jsx("strong",{className:"font-semibold text-white",children:"Look"}),Z.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Drag Right Half"})]}),Z.jsxs("p",{className:"leading-relaxed",children:[Z.jsx("strong",{className:"font-semibold text-white",children:"Interact"}),Z.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Tap Right Half"})]})]}):Z.jsxs(Z.Fragment,{children:[Z.jsxs("p",{className:"mt-2 leading-relaxed",children:[Z.jsx("strong",{className:"font-semibold text-white",children:"Move"}),Z.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"WASD / Arrows"})]}),Z.jsxs("p",{className:"leading-relaxed",children:[Z.jsx("strong",{className:"font-semibold text-white",children:"Rotate"}),Z.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Q / E"})]}),Z.jsxs("p",{className:"leading-relaxed",children:[Z.jsx("strong",{className:"font-semibold text-white",children:"Look"}),Z.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Mouse"})]}),Z.jsxs("p",{className:"leading-relaxed",children:[Z.jsx("strong",{className:"font-semibold text-white",children:"Interact"}),Z.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Space / Click"})]})]})]})}),s&&Z.jsxs("div",{className:"absolute inset-0 bg-white z-[999] flex flex-col items-center justify-center animate-in fade-in duration-[3000ms]",children:[Z.jsx("div",{className:"text-blue-400 text-6xl mb-10 font-thin italic tracking-widest",children:"AETHER"}),Z.jsx("h2",{className:"text-4xl font-extralight text-slate-800 tracking-[0.6em] uppercase text-center ml-[0.6em]",children:"极境归元"}),Z.jsx("p",{className:"text-slate-400 mt-6 max-w-xs text-center text-[11px] tracking-widest px-8 font-light leading-loose",children:"光之脉络已编织完成。世界重获灵魂，温暖与色彩将永驻这片山脉。"}),Z.jsx("button",{onPointerDown:W=>{W.stopPropagation(),window.location.reload()},className:"mt-16 px-16 py-4 bg-slate-900 text-white rounded-full text-[10px] tracking-[0.5em] uppercase active:scale-95 transition-transform",children:"Restart the Dream"})]}),Z.jsx("style",{children:`
        canvas { touch-action: none; -webkit-user-select: none; }
        body { margin: 0; background: #050510; height: 100vh; overflow: hidden; }
        * { -webkit-tap-highlight-color: transparent; }
      `})]})};$E.createRoot(document.getElementById("root")).render(Z.jsx(aC,{}));
