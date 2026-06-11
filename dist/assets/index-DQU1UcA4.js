(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function vy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var A_={exports:{}},zu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy=Symbol.for("react.transitional.element"),Sy=Symbol.for("react.fragment");function R_(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:xy,type:e,key:i,ref:t!==void 0?t:null,props:n}}zu.Fragment=Sy;zu.jsx=R_;zu.jsxs=R_;A_.exports=zu;var Rt=A_.exports,w_={exports:{}},Vt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp=Symbol.for("react.transitional.element"),yy=Symbol.for("react.portal"),My=Symbol.for("react.fragment"),Ey=Symbol.for("react.strict_mode"),by=Symbol.for("react.profiler"),Ty=Symbol.for("react.consumer"),Ay=Symbol.for("react.context"),Ry=Symbol.for("react.forward_ref"),wy=Symbol.for("react.suspense"),Cy=Symbol.for("react.memo"),C_=Symbol.for("react.lazy"),Dy=Symbol.for("react.activity"),Xm=Symbol.iterator;function Uy(e){return e===null||typeof e!="object"?null:(e=Xm&&e[Xm]||e["@@iterator"],typeof e=="function"?e:null)}var D_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U_=Object.assign,L_={};function eo(e,t,n){this.props=e,this.context=t,this.refs=L_,this.updater=n||D_}eo.prototype.isReactComponent={};eo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};eo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N_(){}N_.prototype=eo.prototype;function Sp(e,t,n){this.props=e,this.context=t,this.refs=L_,this.updater=n||D_}var yp=Sp.prototype=new N_;yp.constructor=Sp;U_(yp,eo.prototype);yp.isPureReactComponent=!0;var Wm=Array.isArray;function Dh(){}var Ne={H:null,A:null,T:null,S:null},O_=Object.prototype.hasOwnProperty;function Mp(e,t,n){var i=n.ref;return{$$typeof:xp,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Ly(e,t){return Mp(e.type,t,e.props)}function Ep(e){return typeof e=="object"&&e!==null&&e.$$typeof===xp}function Ny(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qm=/\/+/g;function hf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ny(""+e.key):t.toString(36)}function Oy(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Dh,Dh):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function dr(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case xp:case yy:r=!0;break;case C_:return r=e._init,dr(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+hf(e,0):i,Wm(a)?(n="",r!=null&&(n=r.replace(qm,"$&/")+"/"),dr(a,t,n,"",function(c){return c})):a!=null&&(Ep(a)&&(a=Ly(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(qm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(Wm(e))for(var l=0;l<e.length;l++)i=e[l],s=o+hf(i,l),r+=dr(i,t,n,s,a);else if(l=Uy(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+hf(i,l++),r+=dr(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return dr(Oy(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Fl(e,t,n){if(e==null)return e;var i=[],a=0;return dr(e,i,"","",function(s){return t.call(n,s,a++)}),i}function Py(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ym=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},By={map:Fl,forEach:function(e,t,n){Fl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fl(e,function(){t++}),t},toArray:function(e){return Fl(e,function(t){return t})||[]},only:function(e){if(!Ep(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Vt.Activity=Dy;Vt.Children=By;Vt.Component=eo;Vt.Fragment=My;Vt.Profiler=by;Vt.PureComponent=Sp;Vt.StrictMode=Ey;Vt.Suspense=wy;Vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ne;Vt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ne.H.useMemoCache(e)}};Vt.cache=function(e){return function(){return e.apply(null,arguments)}};Vt.cacheSignal=function(){return null};Vt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=U_({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!O_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Mp(e.type,a,i)};Vt.createContext=function(e){return e={$$typeof:Ay,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Ty,_context:e},e};Vt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)O_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Mp(e,s,a)};Vt.createRef=function(){return{current:null}};Vt.forwardRef=function(e){return{$$typeof:Ry,render:e}};Vt.isValidElement=Ep;Vt.lazy=function(e){return{$$typeof:C_,_payload:{_status:-1,_result:e},_init:Py}};Vt.memo=function(e,t){return{$$typeof:Cy,type:e,compare:t===void 0?null:t}};Vt.startTransition=function(e){var t=Ne.T,n={};Ne.T=n;try{var i=e(),a=Ne.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Dh,Ym)}catch(s){Ym(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ne.T=t}};Vt.unstable_useCacheRefresh=function(){return Ne.H.useCacheRefresh()};Vt.use=function(e){return Ne.H.use(e)};Vt.useActionState=function(e,t,n){return Ne.H.useActionState(e,t,n)};Vt.useCallback=function(e,t){return Ne.H.useCallback(e,t)};Vt.useContext=function(e){return Ne.H.useContext(e)};Vt.useDebugValue=function(){};Vt.useDeferredValue=function(e,t){return Ne.H.useDeferredValue(e,t)};Vt.useEffect=function(e,t){return Ne.H.useEffect(e,t)};Vt.useEffectEvent=function(e){return Ne.H.useEffectEvent(e)};Vt.useId=function(){return Ne.H.useId()};Vt.useImperativeHandle=function(e,t,n){return Ne.H.useImperativeHandle(e,t,n)};Vt.useInsertionEffect=function(e,t){return Ne.H.useInsertionEffect(e,t)};Vt.useLayoutEffect=function(e,t){return Ne.H.useLayoutEffect(e,t)};Vt.useMemo=function(e,t){return Ne.H.useMemo(e,t)};Vt.useOptimistic=function(e,t){return Ne.H.useOptimistic(e,t)};Vt.useReducer=function(e,t,n){return Ne.H.useReducer(e,t,n)};Vt.useRef=function(e){return Ne.H.useRef(e)};Vt.useState=function(e){return Ne.H.useState(e)};Vt.useSyncExternalStore=function(e,t,n){return Ne.H.useSyncExternalStore(e,t,n)};Vt.useTransition=function(){return Ne.H.useTransition()};Vt.version="19.2.5";w_.exports=Vt;var cn=w_.exports,P_={exports:{}},Gu={},B_={exports:{}},I_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,P){var W=N.length;N.push(P);t:for(;0<W;){var tt=W-1>>>1,ot=N[tt];if(0<a(ot,P))N[tt]=P,N[W]=ot,W=tt;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var P=N[0],W=N.pop();if(W!==P){N[0]=W;t:for(var tt=0,ot=N.length,Et=ot>>>1;tt<Et;){var ct=2*(tt+1)-1,Bt=N[ct],jt=ct+1,Ut=N[jt];if(0>a(Bt,W))jt<ot&&0>a(Ut,Bt)?(N[tt]=Ut,N[jt]=W,tt=jt):(N[tt]=Bt,N[ct]=W,tt=ct);else if(jt<ot&&0>a(Ut,W))N[tt]=Ut,N[jt]=W,tt=jt;else break t}}return P}function a(N,P){var W=N.sortIndex-P.sortIndex;return W!==0?W:N.id-P.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],h=1,d=null,u=3,p=!1,v=!1,E=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function S(N){for(var P=n(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=N)i(c),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(c)}}function w(N){if(E=!1,S(N),!v)if(n(l)!==null)v=!0,b||(b=!0,z());else{var P=n(c);P!==null&&I(w,P.startTime-N)}}var b=!1,R=-1,x=5,A=-1;function D(){return g?!0:!(e.unstable_now()-A<x)}function U(){if(g=!1,b){var N=e.unstable_now();A=N;var P=!0;try{t:{v=!1,E&&(E=!1,m(R),R=-1),p=!0;var W=u;try{e:{for(S(N),d=n(l);d!==null&&!(d.expirationTime>N&&D());){var tt=d.callback;if(typeof tt=="function"){d.callback=null,u=d.priorityLevel;var ot=tt(d.expirationTime<=N);if(N=e.unstable_now(),typeof ot=="function"){d.callback=ot,S(N),P=!0;break e}d===n(l)&&i(l),S(N)}else i(l);d=n(l)}if(d!==null)P=!0;else{var Et=n(c);Et!==null&&I(w,Et.startTime-N),P=!1}}break t}finally{d=null,u=W,p=!1}P=void 0}}finally{P?z():b=!1}}}var z;if(typeof _=="function")z=function(){_(U)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,nt=Y.port2;Y.port1.onmessage=U,z=function(){nt.postMessage(null)}}else z=function(){f(U,0)};function I(N,P){R=f(function(){N(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_next=function(N){switch(u){case 1:case 2:case 3:var P=3;break;default:P=u}var W=u;u=P;try{return N()}finally{u=W}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=u;u=N;try{return P()}finally{u=W}},e.unstable_scheduleCallback=function(N,P,W){var tt=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?tt+W:tt):W=tt,N){case 1:var ot=-1;break;case 2:ot=250;break;case 5:ot=1073741823;break;case 4:ot=1e4;break;default:ot=5e3}return ot=W+ot,N={id:h++,callback:P,priorityLevel:N,startTime:W,expirationTime:ot,sortIndex:-1},W>tt?(N.sortIndex=W,t(c,N),n(l)===null&&N===n(c)&&(E?(m(R),R=-1):E=!0,I(w,W-tt))):(N.sortIndex=ot,t(l,N),v||p||(v=!0,b||(b=!0,z()))),N},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(N){var P=u;return function(){var W=u;u=P;try{return N.apply(this,arguments)}finally{u=W}}}})(I_);B_.exports=I_;var Iy=B_.exports,F_={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy=cn;function z_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ea(){}var Rn={d:{f:Ea,r:function(){throw Error(z_(522))},D:Ea,C:Ea,L:Ea,m:Ea,X:Ea,S:Ea,M:Ea},p:0,findDOMNode:null},zy=Symbol.for("react.portal");function Gy(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zy,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Vo=Fy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Hu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Rn;wn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(z_(299));return Gy(e,t,null,n)};wn.flushSync=function(e){var t=Vo.T,n=Rn.p;try{if(Vo.T=null,Rn.p=2,e)return e()}finally{Vo.T=t,Rn.p=n,Rn.d.f()}};wn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Rn.d.C(e,t))};wn.prefetchDNS=function(e){typeof e=="string"&&Rn.d.D(e)};wn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Hu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Rn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&Rn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};wn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Hu(t.as,t.crossOrigin);Rn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Rn.d.M(e)};wn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Hu(n,t.crossOrigin);Rn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};wn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Hu(t.as,t.crossOrigin);Rn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Rn.d.m(e)};wn.requestFormReset=function(e){Rn.d.r(e)};wn.unstable_batchedUpdates=function(e,t){return e(t)};wn.useFormState=function(e,t,n){return Vo.H.useFormState(e,t,n)};wn.useFormStatus=function(){return Vo.H.useHostTransitionStatus()};wn.version="19.2.5";function G_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G_)}catch(e){console.error(e)}}G_(),F_.exports=wn;var Hy=F_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=Iy,H_=cn,Vy=Hy;function $(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function V_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function k_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function X_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jm(e){if(Ml(e)!==e)throw Error($(188))}function ky(e){var t=e.alternate;if(!t){if(t=Ml(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return jm(a),e;if(s===i)return jm(a),t;s=s.sibling}throw Error($(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error($(189))}}if(n.alternate!==i)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function W_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W_(e),t!==null)return t;e=e.sibling}return null}var Oe=Object.assign,Xy=Symbol.for("react.element"),zl=Symbol.for("react.transitional.element"),Po=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),q_=Symbol.for("react.strict_mode"),Uh=Symbol.for("react.profiler"),Y_=Symbol.for("react.consumer"),ea=Symbol.for("react.context"),bp=Symbol.for("react.forward_ref"),Lh=Symbol.for("react.suspense"),Nh=Symbol.for("react.suspense_list"),Tp=Symbol.for("react.memo"),Da=Symbol.for("react.lazy"),Oh=Symbol.for("react.activity"),Wy=Symbol.for("react.memo_cache_sentinel"),Zm=Symbol.iterator;function _o(e){return e===null||typeof e!="object"?null:(e=Zm&&e[Zm]||e["@@iterator"],typeof e=="function"?e:null)}var qy=Symbol.for("react.client.reference");function Ph(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qy?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gr:return"Fragment";case Uh:return"Profiler";case q_:return"StrictMode";case Lh:return"Suspense";case Nh:return"SuspenseList";case Oh:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Po:return"Portal";case ea:return e.displayName||"Context";case Y_:return(e._context.displayName||"Context")+".Consumer";case bp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tp:return t=e.displayName||null,t!==null?t:Ph(e.type)||"Memo";case Da:t=e._payload,e=e._init;try{return Ph(e(t))}catch{}}return null}var Bo=Array.isArray,Pt=H_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=Vy.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Es={pending:!1,data:null,method:null,action:null},Bh=[],_r=-1;function Gi(e){return{current:e}}function ln(e){0>_r||(e.current=Bh[_r],Bh[_r]=null,_r--)}function Ce(e,t){_r++,Bh[_r]=e.current,e.current=t}var Bi=Gi(null),al=Gi(null),ka=Gi(null),Qc=Gi(null);function Jc(e,t){switch(Ce(ka,t),Ce(al,e),Ce(Bi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?eg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=eg(t),e=dS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ln(Bi),Ce(Bi,e)}function Gr(){ln(Bi),ln(al),ln(ka)}function Ih(e){e.memoizedState!==null&&Ce(Qc,e);var t=Bi.current,n=dS(t,e.type);t!==n&&(Ce(al,e),Ce(Bi,n))}function $c(e){al.current===e&&(ln(Bi),ln(al)),Qc.current===e&&(ln(Qc),ml._currentValue=Es)}var df,Km;function ps(e){if(df===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);df=t&&t[1]||"",Km=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+df+e+Km}var pf=!1;function mf(e,t){if(!e||pf)return"";pf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var u=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){u=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){u=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&u&&typeof p.stack=="string")return[p.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{pf=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ps(n):""}function Yy(e,t){switch(e.tag){case 26:case 27:case 5:return ps(e.type);case 16:return ps("Lazy");case 13:return e.child!==t&&t!==null?ps("Suspense Fallback"):ps("Suspense");case 19:return ps("SuspenseList");case 0:case 15:return mf(e.type,!1);case 11:return mf(e.type.render,!1);case 1:return mf(e.type,!0);case 31:return ps("Activity");default:return""}}function Qm(e){try{var t="",n=null;do t+=Yy(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Fh=Object.prototype.hasOwnProperty,Ap=$e.unstable_scheduleCallback,gf=$e.unstable_cancelCallback,jy=$e.unstable_shouldYield,Zy=$e.unstable_requestPaint,Kn=$e.unstable_now,Ky=$e.unstable_getCurrentPriorityLevel,j_=$e.unstable_ImmediatePriority,Z_=$e.unstable_UserBlockingPriority,tu=$e.unstable_NormalPriority,Qy=$e.unstable_LowPriority,K_=$e.unstable_IdlePriority,Jy=$e.log,$y=$e.unstable_setDisableYieldValue,El=null,Qn=null;function Ia(e){if(typeof Jy=="function"&&$y(e),Qn&&typeof Qn.setStrictMode=="function")try{Qn.setStrictMode(El,e)}catch{}}var Jn=Math.clz32?Math.clz32:nM,tM=Math.log,eM=Math.LN2;function nM(e){return e>>>=0,e===0?32:31-(tM(e)/eM|0)|0}var Gl=256,Hl=262144,Vl=4194304;function ms(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=ms(i):(r&=o,r!==0?a=ms(r):n||(n=o&~e,n!==0&&(a=ms(n))))):(o=i&~s,o!==0?a=ms(o):r!==0?a=ms(r):n||(n=i&~e,n!==0&&(a=ms(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function bl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function iM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q_(){var e=Vl;return Vl<<=1,!(Vl&62914560)&&(Vl=4194304),e}function _f(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function aM(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Jn(n),d=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var p=u[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&J_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function J_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Jn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function $_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Jn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function tv(e,t){var n=t&-t;return n=n&42?1:Rp(n),n&(e.suspendedLanes|t)?0:n}function Rp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function wp(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ev(){var e=ue.p;return e!==0?e:(e=window.event,e===void 0?32:bS(e.type))}function Jm(e,t){var n=ue.p;try{return ue.p=e,t()}finally{ue.p=n}}var rs=Math.random().toString(36).slice(2),fn="__reactFiber$"+rs,Bn="__reactProps$"+rs,no="__reactContainer$"+rs,zh="__reactEvents$"+rs,sM="__reactListeners$"+rs,rM="__reactHandles$"+rs,$m="__reactResources$"+rs,Al="__reactMarker$"+rs;function Cp(e){delete e[fn],delete e[Bn],delete e[zh],delete e[sM],delete e[rM]}function vr(e){var t=e[fn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[no]||n[fn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rg(e);e!==null;){if(n=e[fn])return n;e=rg(e)}return t}e=n,n=e.parentNode}return null}function io(e){if(e=e[fn]||e[no]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Io(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error($(33))}function Ur(e){var t=e[$m];return t||(t=e[$m]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rn(e){e[Al]=!0}var nv=new Set,iv={};function Ps(e,t){Hr(e,t),Hr(e+"Capture",t)}function Hr(e,t){for(iv[e]=t,e=0;e<t.length;e++)nv.add(t[e])}var oM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),t0={},e0={};function lM(e){return Fh.call(e0,e)?!0:Fh.call(t0,e)?!1:oM.test(e)?e0[e]=!0:(t0[e]=!0,!1)}function Rc(e,t,n){if(lM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function kl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Vi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function ri(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function av(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gh(e){if(!e._valueTracker){var t=av(e)?"checked":"value";e._valueTracker=cM(e,t,""+e[t])}}function sv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=av(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function eu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var uM=/[\n"\\]/g;function ci(e){return e.replace(uM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Hh(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ri(t)):e.value!==""+ri(t)&&(e.value=""+ri(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Vh(e,r,ri(t)):n!=null?Vh(e,r,ri(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ri(o):e.removeAttribute("name")}function rv(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Gh(e);return}n=n!=null?""+ri(n):"",t=t!=null?""+ri(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Gh(e)}function Vh(e,t,n){t==="number"&&eu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Lr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ri(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ov(e,t,n){if(t!=null&&(t=""+ri(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ri(n):""}function lv(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error($(92));if(Bo(i)){if(1<i.length)throw Error($(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ri(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Gh(e)}function Vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function n0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||fM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function cv(e,t,n){if(t!=null&&typeof t!="object")throw Error($(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&n0(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&n0(e,s,t[s])}function Dp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wc(e){return dM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var kh=null;function Up(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xr=null,Nr=null;function i0(e){var t=io(e);if(t&&(e=t.stateNode)){var n=e[Bn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Hh(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ci(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[Bn]||null;if(!a)throw Error($(90));Hh(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&sv(i)}break t;case"textarea":ov(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)}}}var vf=!1;function uv(e,t,n){if(vf)return e(t,n);vf=!0;try{var i=e(t);return i}finally{if(vf=!1,(xr!==null||Nr!==null)&&(tf(),xr&&(t=xr,e=Nr,Nr=xr=null,i0(t),e)))for(t=0;t<e.length;t++)i0(e[t])}}function sl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Bn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xh=!1;if(ha)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Xh=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Xh=!1}var Fa=null,Lp=null,Cc=null;function fv(){if(Cc)return Cc;var e,t=Lp,n=t.length,i,a="value"in Fa?Fa.value:Fa.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return Cc=a.slice(e,1<i?1-i:void 0)}function Dc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xl(){return!0}function a0(){return!1}function In(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xl:a0,this.isPropagationStopped=a0,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),t}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ku=In(Bs),Rl=Oe({},Bs,{view:0,detail:0}),pM=In(Rl),xf,Sf,xo,Xu=Oe({},Rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Np,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?(xf=e.screenX-xo.screenX,Sf=e.screenY-xo.screenY):Sf=xf=0,xo=e),xf)},movementY:function(e){return"movementY"in e?e.movementY:Sf}}),s0=In(Xu),mM=Oe({},Xu,{dataTransfer:0}),gM=In(mM),_M=Oe({},Rl,{relatedTarget:0}),yf=In(_M),vM=Oe({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),xM=In(vM),SM=Oe({},Bs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yM=In(SM),MM=Oe({},Bs,{data:0}),r0=In(MM),EM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=TM[e])?!!t[e]:!1}function Np(){return AM}var RM=Oe({},Rl,{key:function(e){if(e.key){var t=EM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Np,charCode:function(e){return e.type==="keypress"?Dc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wM=In(RM),CM=Oe({},Xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),o0=In(CM),DM=Oe({},Rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Np}),UM=In(DM),LM=Oe({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),NM=In(LM),OM=Oe({},Xu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),PM=In(OM),BM=Oe({},Bs,{newState:0,oldState:0}),IM=In(BM),FM=[9,13,27,32],Op=ha&&"CompositionEvent"in window,ko=null;ha&&"documentMode"in document&&(ko=document.documentMode);var zM=ha&&"TextEvent"in window&&!ko,hv=ha&&(!Op||ko&&8<ko&&11>=ko),l0=" ",c0=!1;function dv(e,t){switch(e){case"keyup":return FM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function GM(e,t){switch(e){case"compositionend":return pv(t);case"keypress":return t.which!==32?null:(c0=!0,l0);case"textInput":return e=t.data,e===l0&&c0?null:e;default:return null}}function HM(e,t){if(Sr)return e==="compositionend"||!Op&&dv(e,t)?(e=fv(),Cc=Lp=Fa=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hv&&t.locale!=="ko"?null:t.data;default:return null}}var VM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function u0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!VM[e.type]:t==="textarea"}function mv(e,t,n,i){xr?Nr?Nr.push(i):Nr=[i]:xr=i,t=xu(t,"onChange"),0<t.length&&(n=new ku("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Xo=null,rl=null;function kM(e){uS(e,0)}function Wu(e){var t=Io(e);if(sv(t))return e}function f0(e,t){if(e==="change")return t}var gv=!1;if(ha){var Mf;if(ha){var Ef="oninput"in document;if(!Ef){var h0=document.createElement("div");h0.setAttribute("oninput","return;"),Ef=typeof h0.oninput=="function"}Mf=Ef}else Mf=!1;gv=Mf&&(!document.documentMode||9<document.documentMode)}function d0(){Xo&&(Xo.detachEvent("onpropertychange",_v),rl=Xo=null)}function _v(e){if(e.propertyName==="value"&&Wu(rl)){var t=[];mv(t,rl,e,Up(e)),uv(kM,t)}}function XM(e,t,n){e==="focusin"?(d0(),Xo=t,rl=n,Xo.attachEvent("onpropertychange",_v)):e==="focusout"&&d0()}function WM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wu(rl)}function qM(e,t){if(e==="click")return Wu(t)}function YM(e,t){if(e==="input"||e==="change")return Wu(t)}function jM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ti=typeof Object.is=="function"?Object.is:jM;function ol(e,t){if(ti(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Fh.call(t,a)||!ti(e[a],t[a]))return!1}return!0}function p0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function m0(e,t){var n=p0(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=p0(n)}}function vv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xv(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=eu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=eu(e.document)}return t}function Pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ZM=ha&&"documentMode"in document&&11>=document.documentMode,yr=null,Wh=null,Wo=null,qh=!1;function g0(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qh||yr==null||yr!==eu(i)||(i=yr,"selectionStart"in i&&Pp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&ol(Wo,i)||(Wo=i,i=xu(Wh,"onSelect"),0<i.length&&(t=new ku("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=yr)))}function cs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mr={animationend:cs("Animation","AnimationEnd"),animationiteration:cs("Animation","AnimationIteration"),animationstart:cs("Animation","AnimationStart"),transitionrun:cs("Transition","TransitionRun"),transitionstart:cs("Transition","TransitionStart"),transitioncancel:cs("Transition","TransitionCancel"),transitionend:cs("Transition","TransitionEnd")},bf={},Sv={};ha&&(Sv=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function Is(e){if(bf[e])return bf[e];if(!Mr[e])return e;var t=Mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sv)return bf[e]=t[n];return e}var yv=Is("animationend"),Mv=Is("animationiteration"),Ev=Is("animationstart"),KM=Is("transitionrun"),QM=Is("transitionstart"),JM=Is("transitioncancel"),bv=Is("transitionend"),Tv=new Map,Yh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yh.push("scrollEnd");function Ti(e,t){Tv.set(e,t),Ps(t,[e])}var nu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Er=0,Bp=0;function qu(){for(var e=Er,t=Bp=Er=0;t<e;){var n=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];ai[t++]=null;var s=ai[t];if(ai[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&Av(n,a,s)}}function Yu(e,t,n,i){ai[Er++]=e,ai[Er++]=t,ai[Er++]=n,ai[Er++]=i,Bp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ip(e,t,n,i){return Yu(e,t,n,i),iu(e)}function Fs(e,t){return Yu(e,null,null,t),iu(e)}function Av(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Jn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function iu(e){if(50<tl)throw tl=0,pd=null,Error($(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var br={};function $M(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,t,n,i){return new $M(e,t,n,i)}function Fp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sa(e,t){var n=e.alternate;return n===null?(n=Yn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Rv(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Uc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")Fp(e)&&(r=1);else if(typeof e=="string")r=ab(e,n,Bi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Oh:return e=Yn(31,n,t,a),e.elementType=Oh,e.lanes=s,e;case gr:return bs(n.children,a,s,t);case q_:r=8,a|=24;break;case Uh:return e=Yn(12,n,t,a|2),e.elementType=Uh,e.lanes=s,e;case Lh:return e=Yn(13,n,t,a),e.elementType=Lh,e.lanes=s,e;case Nh:return e=Yn(19,n,t,a),e.elementType=Nh,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ea:r=10;break t;case Y_:r=9;break t;case bp:r=11;break t;case Tp:r=14;break t;case Da:r=16,i=null;break t}r=29,n=Error($(130,e===null?"null":typeof e,"")),i=null}return t=Yn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function bs(e,t,n,i){return e=Yn(7,e,i,t),e.lanes=n,e}function Tf(e,t,n){return e=Yn(6,e,null,t),e.lanes=n,e}function wv(e){var t=Yn(18,null,null,0);return t.stateNode=e,t}function Af(e,t,n){return t=Yn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _0=new WeakMap;function ui(e,t){if(typeof e=="object"&&e!==null){var n=_0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Qm(t)},_0.set(e,t),t)}return{value:e,source:t,stack:Qm(t)}}var Tr=[],Ar=0,au=null,ll=0,oi=[],li=0,ts=null,Ui=1,Li="";function Ji(e,t){Tr[Ar++]=ll,Tr[Ar++]=au,au=e,ll=t}function Cv(e,t,n){oi[li++]=Ui,oi[li++]=Li,oi[li++]=ts,ts=e;var i=Ui;e=Li;var a=32-Jn(i)-1;i&=~(1<<a),n+=1;var s=32-Jn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Ui=1<<32-Jn(t)+a|n<<a|i,Li=s+e}else Ui=1<<s|n<<a|i,Li=e}function zp(e){e.return!==null&&(Ji(e,1),Cv(e,1,0))}function Gp(e){for(;e===au;)au=Tr[--Ar],Tr[Ar]=null,ll=Tr[--Ar],Tr[Ar]=null;for(;e===ts;)ts=oi[--li],oi[li]=null,Li=oi[--li],oi[li]=null,Ui=oi[--li],oi[li]=null}function Dv(e,t){oi[li++]=Ui,oi[li++]=Li,oi[li++]=ts,Ui=t.id,Li=t.overflow,ts=e}var hn=null,Le=null,oe=!1,Xa=null,fi=!1,jh=Error($(519));function es(e){var t=Error($(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cl(ui(t,e)),jh}function v0(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[fn]=e,t[Bn]=i,n){case"dialog":ee("cancel",t),ee("close",t);break;case"iframe":case"object":case"embed":ee("load",t);break;case"video":case"audio":for(n=0;n<dl.length;n++)ee(dl[n],t);break;case"source":ee("error",t);break;case"img":case"image":case"link":ee("error",t),ee("load",t);break;case"details":ee("toggle",t);break;case"input":ee("invalid",t),rv(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":ee("invalid",t);break;case"textarea":ee("invalid",t),lv(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||hS(t.textContent,n)?(i.popover!=null&&(ee("beforetoggle",t),ee("toggle",t)),i.onScroll!=null&&ee("scroll",t),i.onScrollEnd!=null&&ee("scrollend",t),i.onClick!=null&&(t.onclick=na),t=!0):t=!1,t||es(e,!0)}function x0(e){for(hn=e.return;hn;)switch(hn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:hn=hn.return}}function qs(e){if(e!==hn)return!1;if(!oe)return x0(e),oe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||xd(e.type,e.memoizedProps)),n=!n),n&&Le&&es(e),x0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));Le=sg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));Le=sg(e)}else t===27?(t=Le,os(e.type)?(e=Ed,Ed=null,Le=e):Le=t):Le=hn?pi(e.stateNode.nextSibling):null;return!0}function ws(){Le=hn=null,oe=!1}function Rf(){var e=Xa;return e!==null&&(Nn===null?Nn=e:Nn.push.apply(Nn,e),Xa=null),e}function cl(e){Xa===null?Xa=[e]:Xa.push(e)}var Zh=Gi(null),zs=null,ia=null;function La(e,t,n){Ce(Zh,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=Zh.current,ln(Zh)}function Kh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Qh(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Kh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error($(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Kh(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function ao(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error($(387));if(r=r.memoizedProps,r!==null){var o=a.type;ti(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Qc.current){if(r=a.alternate,r===null)throw Error($(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(ml):e=[ml])}a=a.return}e!==null&&Qh(t,e,n,i),t.flags|=262144}function su(e){for(e=e.firstContext;e!==null;){if(!ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cs(e){zs=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dn(e){return Uv(zs,e)}function Wl(e,t){return zs===null&&Cs(e),Uv(e,t)}function Uv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ia===null){if(e===null)throw Error($(308));ia=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ia=ia.next=t;return n}var tE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},eE=$e.unstable_scheduleCallback,nE=$e.unstable_NormalPriority,Ze={$$typeof:ea,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hp(){return{controller:new tE,data:new Map,refCount:0}}function wl(e){e.refCount--,e.refCount===0&&eE(nE,function(){e.controller.abort()})}var qo=null,Jh=0,kr=0,Or=null;function iE(e,t){if(qo===null){var n=qo=[];Jh=0,kr=hm(),Or={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Jh++,t.then(S0,S0),t}function S0(){if(--Jh===0&&qo!==null){Or!==null&&(Or.status="fulfilled");var e=qo;qo=null,kr=0,Or=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function aE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var y0=Pt.S;Pt.S=function(e,t){Wx=Kn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&iE(e,t),y0!==null&&y0(e,t)};var Ts=Gi(null);function Vp(){var e=Ts.current;return e!==null?e:Ae.pooledCache}function Lc(e,t){t===null?Ce(Ts,Ts.current):Ce(Ts,t.pool)}function Lv(){var e=Vp();return e===null?null:{parent:Ze._currentValue,pool:e}}var so=Error($(460)),kp=Error($(474)),ju=Error($(542)),ru={then:function(){}};function M0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Nv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(na,na),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,b0(e),e;default:if(typeof t.status=="string")t.then(na,na);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error($(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,b0(e),e}throw As=t,so}}function gs(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(As=n,so):n}}var As=null;function E0(){if(As===null)throw Error($(459));var e=As;return As=null,e}function b0(e){if(e===so||e===ju)throw Error($(483))}var Pr=null,ul=0;function ql(e){var t=ul;return ul+=1,Pr===null&&(Pr=[]),Nv(Pr,e,t)}function So(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Yl(e,t){throw t.$$typeof===Xy?Error($(525)):(e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ov(e){function t(f,m){if(e){var _=f.deletions;_===null?(f.deletions=[m],f.flags|=16):_.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(f,m){return f=sa(f,m),f.index=0,f.sibling=null,f}function s(f,m,_){return f.index=_,e?(_=f.alternate,_!==null?(_=_.index,_<m?(f.flags|=67108866,m):_):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,_,S){return m===null||m.tag!==6?(m=Tf(_,f.mode,S),m.return=f,m):(m=a(m,_),m.return=f,m)}function l(f,m,_,S){var w=_.type;return w===gr?h(f,m,_.props.children,S,_.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Da&&gs(w)===m.type)?(m=a(m,_.props),So(m,_),m.return=f,m):(m=Uc(_.type,_.key,_.props,null,f.mode,S),So(m,_),m.return=f,m)}function c(f,m,_,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=Af(_,f.mode,S),m.return=f,m):(m=a(m,_.children||[]),m.return=f,m)}function h(f,m,_,S,w){return m===null||m.tag!==7?(m=bs(_,f.mode,S,w),m.return=f,m):(m=a(m,_),m.return=f,m)}function d(f,m,_){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Tf(""+m,f.mode,_),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zl:return _=Uc(m.type,m.key,m.props,null,f.mode,_),So(_,m),_.return=f,_;case Po:return m=Af(m,f.mode,_),m.return=f,m;case Da:return m=gs(m),d(f,m,_)}if(Bo(m)||_o(m))return m=bs(m,f.mode,_,null),m.return=f,m;if(typeof m.then=="function")return d(f,ql(m),_);if(m.$$typeof===ea)return d(f,Wl(f,m),_);Yl(f,m)}return null}function u(f,m,_,S){var w=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return w!==null?null:o(f,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case zl:return _.key===w?l(f,m,_,S):null;case Po:return _.key===w?c(f,m,_,S):null;case Da:return _=gs(_),u(f,m,_,S)}if(Bo(_)||_o(_))return w!==null?null:h(f,m,_,S,null);if(typeof _.then=="function")return u(f,m,ql(_),S);if(_.$$typeof===ea)return u(f,m,Wl(f,_),S);Yl(f,_)}return null}function p(f,m,_,S,w){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(_)||null,o(m,f,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case zl:return f=f.get(S.key===null?_:S.key)||null,l(m,f,S,w);case Po:return f=f.get(S.key===null?_:S.key)||null,c(m,f,S,w);case Da:return S=gs(S),p(f,m,_,S,w)}if(Bo(S)||_o(S))return f=f.get(_)||null,h(m,f,S,w,null);if(typeof S.then=="function")return p(f,m,_,ql(S),w);if(S.$$typeof===ea)return p(f,m,_,Wl(m,S),w);Yl(m,S)}return null}function v(f,m,_,S){for(var w=null,b=null,R=m,x=m=0,A=null;R!==null&&x<_.length;x++){R.index>x?(A=R,R=null):A=R.sibling;var D=u(f,R,_[x],S);if(D===null){R===null&&(R=A);break}e&&R&&D.alternate===null&&t(f,R),m=s(D,m,x),b===null?w=D:b.sibling=D,b=D,R=A}if(x===_.length)return n(f,R),oe&&Ji(f,x),w;if(R===null){for(;x<_.length;x++)R=d(f,_[x],S),R!==null&&(m=s(R,m,x),b===null?w=R:b.sibling=R,b=R);return oe&&Ji(f,x),w}for(R=i(R);x<_.length;x++)A=p(R,f,x,_[x],S),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?x:A.key),m=s(A,m,x),b===null?w=A:b.sibling=A,b=A);return e&&R.forEach(function(U){return t(f,U)}),oe&&Ji(f,x),w}function E(f,m,_,S){if(_==null)throw Error($(151));for(var w=null,b=null,R=m,x=m=0,A=null,D=_.next();R!==null&&!D.done;x++,D=_.next()){R.index>x?(A=R,R=null):A=R.sibling;var U=u(f,R,D.value,S);if(U===null){R===null&&(R=A);break}e&&R&&U.alternate===null&&t(f,R),m=s(U,m,x),b===null?w=U:b.sibling=U,b=U,R=A}if(D.done)return n(f,R),oe&&Ji(f,x),w;if(R===null){for(;!D.done;x++,D=_.next())D=d(f,D.value,S),D!==null&&(m=s(D,m,x),b===null?w=D:b.sibling=D,b=D);return oe&&Ji(f,x),w}for(R=i(R);!D.done;x++,D=_.next())D=p(R,f,x,D.value,S),D!==null&&(e&&D.alternate!==null&&R.delete(D.key===null?x:D.key),m=s(D,m,x),b===null?w=D:b.sibling=D,b=D);return e&&R.forEach(function(z){return t(f,z)}),oe&&Ji(f,x),w}function g(f,m,_,S){if(typeof _=="object"&&_!==null&&_.type===gr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case zl:t:{for(var w=_.key;m!==null;){if(m.key===w){if(w=_.type,w===gr){if(m.tag===7){n(f,m.sibling),S=a(m,_.props.children),S.return=f,f=S;break t}}else if(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Da&&gs(w)===m.type){n(f,m.sibling),S=a(m,_.props),So(S,_),S.return=f,f=S;break t}n(f,m);break}else t(f,m);m=m.sibling}_.type===gr?(S=bs(_.props.children,f.mode,S,_.key),S.return=f,f=S):(S=Uc(_.type,_.key,_.props,null,f.mode,S),So(S,_),S.return=f,f=S)}return r(f);case Po:t:{for(w=_.key;m!==null;){if(m.key===w)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(f,m.sibling),S=a(m,_.children||[]),S.return=f,f=S;break t}else{n(f,m);break}else t(f,m);m=m.sibling}S=Af(_,f.mode,S),S.return=f,f=S}return r(f);case Da:return _=gs(_),g(f,m,_,S)}if(Bo(_))return v(f,m,_,S);if(_o(_)){if(w=_o(_),typeof w!="function")throw Error($(150));return _=w.call(_),E(f,m,_,S)}if(typeof _.then=="function")return g(f,m,ql(_),S);if(_.$$typeof===ea)return g(f,m,Wl(f,_),S);Yl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,m!==null&&m.tag===6?(n(f,m.sibling),S=a(m,_),S.return=f,f=S):(n(f,m),S=Tf(_,f.mode,S),S.return=f,f=S),r(f)):n(f,m)}return function(f,m,_,S){try{ul=0;var w=g(f,m,_,S);return Pr=null,w}catch(R){if(R===so||R===ju)throw R;var b=Yn(29,R,null,f.mode);return b.lanes=S,b.return=f,b}finally{}}}var Ds=Ov(!0),Pv=Ov(!1),Ua=!1;function Xp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $h(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ce&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=iu(e),Av(e,null,n),t}return Yu(e,i,t,n),iu(e)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,$_(e,n)}}function wf(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var td=!1;function jo(){if(td){var e=Or;if(e!==null)throw e}}function Zo(e,t,n,i){td=!1;var a=e.updateQueue;Ua=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=a.baseState;r=0,h=c=l=null,o=s;do{var u=o.lane&-536870913,p=u!==o.lane;if(p?(ae&u)===u:(i&u)===u){u!==0&&u===kr&&(td=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,E=o;u=t;var g=n;switch(E.tag){case 1:if(v=E.payload,typeof v=="function"){d=v.call(g,d,u);break t}d=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,u=typeof v=="function"?v.call(g,d,u):v,u==null)break t;d=Oe({},d,u);break t;case 2:Ua=!0}}u=o.callback,u!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[u]:p.push(u))}else p={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);h===null&&(l=d),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),is|=r,e.lanes=r,e.memoizedState=d}}function Bv(e,t){if(typeof e!="function")throw Error($(191,e));e.call(t)}function Iv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Bv(n[e],t)}var Xr=Gi(null),ou=Gi(0);function T0(e,t){e=ga,Ce(ou,e),Ce(Xr,t),ga=e|t.baseLanes}function ed(){Ce(ou,ga),Ce(Xr,Xr.current)}function Wp(){ga=ou.current,ln(Xr),ln(ou)}var ei=Gi(null),di=null;function Na(e){var t=e.alternate;Ce(Xe,Xe.current&1),Ce(ei,e),di===null&&(t===null||Xr.current!==null||t.memoizedState!==null)&&(di=e)}function nd(e){Ce(Xe,Xe.current),Ce(ei,e),di===null&&(di=e)}function Fv(e){e.tag===22?(Ce(Xe,Xe.current),Ce(ei,e),di===null&&(di=e)):Oa()}function Oa(){Ce(Xe,Xe.current),Ce(ei,ei.current)}function Wn(e){ln(ei),di===e&&(di=null),ln(Xe)}var Xe=Gi(0);function lu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||yd(n)||Md(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var da=0,Xt=null,Me=null,Ye=null,cu=!1,Br=!1,Us=!1,uu=0,fl=0,Ir=null,sE=0;function ze(){throw Error($(321))}function qp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ti(e[n],t[n]))return!1;return!0}function Yp(e,t,n,i,a,s){return da=s,Xt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pt.H=e===null||e.memoizedState===null?mx:am,Us=!1,s=n(i,a),Us=!1,Br&&(s=Gv(t,n,i,a)),zv(e),s}function zv(e){Pt.H=hl;var t=Me!==null&&Me.next!==null;if(da=0,Ye=Me=Xt=null,cu=!1,fl=0,Ir=null,t)throw Error($(300));e===null||Ke||(e=e.dependencies,e!==null&&su(e)&&(Ke=!0))}function Gv(e,t,n,i){Xt=e;var a=0;do{if(Br&&(Ir=null),fl=0,Br=!1,25<=a)throw Error($(301));if(a+=1,Ye=Me=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Pt.H=gx,s=t(n,i)}while(Br);return s}function rE(){var e=Pt.H,t=e.useState()[0];return t=typeof t.then=="function"?Cl(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(Xt.flags|=1024),t}function jp(){var e=uu!==0;return uu=0,e}function Zp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Kp(e){if(cu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}cu=!1}da=0,Ye=Me=Xt=null,Br=!1,fl=uu=0,Ir=null}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Xt.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function We(){if(Me===null){var e=Xt.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ye===null?Xt.memoizedState:Ye.next;if(t!==null)Ye=t,Me=e;else{if(e===null)throw Xt.alternate===null?Error($(467)):Error($(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ye===null?Xt.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cl(e){var t=fl;return fl+=1,Ir===null&&(Ir=[]),e=Nv(Ir,e,t),t=Xt,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,Pt.H=t===null||t.memoizedState===null?mx:am),e}function Ku(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Cl(e);if(e.$$typeof===ea)return dn(e)}throw Error($(438,String(e)))}function Qp(e){var t=null,n=Xt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Xt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Zu(),Xt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Wy;return t.index++,n}function pa(e,t){return typeof t=="function"?t(e):t}function Nc(e){var t=We();return Jp(t,Me,e)}function Jp(e,t,n){var i=e.queue;if(i===null)throw Error($(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(ae&d)===d:(da&d)===d){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===kr&&(h=!0);else if((da&u)===u){c=c.next,u===kr&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=s):l=l.next=d,Xt.lanes|=u,is|=u;d=c.action,Us&&n(s,d),s=c.hasEagerState?c.eagerState:n(s,d)}else u={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Xt.lanes|=d,is|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!ti(s,e.memoizedState)&&(Ke=!0,h&&(n=Or,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Cf(e){var t=We(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);ti(s,t.memoizedState)||(Ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function Hv(e,t,n){var i=Xt,a=We(),s=oe;if(s){if(n===void 0)throw Error($(407));n=n()}else n=t();var r=!ti((Me||a).memoizedState,n);if(r&&(a.memoizedState=n,Ke=!0),a=a.queue,$p(Xv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Ye!==null&&Ye.memoizedState.tag&1){if(i.flags|=2048,Wr(9,{destroy:void 0},kv.bind(null,i,a,n,t),null),Ae===null)throw Error($(349));s||da&127||Vv(i,t,n)}return n}function Vv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xt.updateQueue,t===null?(t=Zu(),Xt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kv(e,t,n,i){t.value=n,t.getSnapshot=i,Wv(t)&&qv(e)}function Xv(e,t,n){return n(function(){Wv(t)&&qv(e)})}function Wv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ti(e,n)}catch{return!0}}function qv(e){var t=Fs(e,2);t!==null&&On(t,e,2)}function id(e){var t=An();if(typeof e=="function"){var n=e;if(e=n(),Us){Ia(!0);try{n()}finally{Ia(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t}function Yv(e,t,n,i){return e.baseState=n,Jp(e,Me,typeof i=="function"?i:pa)}function oE(e,t,n,i,a){if(Ju(e))throw Error($(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Pt.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,jv(t,s)):(s.next=n.next,t.pending=n.next=s)}}function jv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Pt.T,r={};Pt.T=r;try{var o=n(a,i),l=Pt.S;l!==null&&l(r,o),A0(e,t,o)}catch(c){ad(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Pt.T=s}}else try{s=n(a,i),A0(e,t,s)}catch(c){ad(e,t,c)}}function A0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){R0(e,t,i)},function(i){return ad(e,t,i)}):R0(e,t,n)}function R0(e,t,n){t.status="fulfilled",t.value=n,Zv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,jv(e,n)))}function ad(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Zv(t),t=t.next;while(t!==i)}e.action=null}function Zv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Kv(e,t){return t}function w0(e,t){if(oe){var n=Ae.formState;if(n!==null){t:{var i=Xt;if(oe){if(Le){e:{for(var a=Le,s=fi;a.nodeType!==8;){if(!s){a=null;break e}if(a=pi(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Le=pi(a.nextSibling),i=a.data==="F!";break t}}es(i)}i=!1}i&&(t=n[0])}}return n=An(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kv,lastRenderedState:t},n.queue=i,n=hx.bind(null,Xt,i),i.dispatch=n,i=id(!1),s=im.bind(null,Xt,!1,i.queue),i=An(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=oE.bind(null,Xt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function C0(e){var t=We();return Qv(t,Me,e)}function Qv(e,t,n){if(t=Jp(e,t,Kv)[0],e=Nc(pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Cl(t)}catch(r){throw r===so?ju:r}else i=t;t=We();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Xt.flags|=2048,Wr(9,{destroy:void 0},lE.bind(null,a,n),null)),[i,s,e]}function lE(e,t){e.action=t}function D0(e){var t=We(),n=Me;if(n!==null)return Qv(t,n,e);We(),t=t.memoizedState,n=We();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Wr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Xt.updateQueue,t===null&&(t=Zu(),Xt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Jv(){return We().memoizedState}function Oc(e,t,n,i){var a=An();Xt.flags|=e,a.memoizedState=Wr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Qu(e,t,n,i){var a=We();i=i===void 0?null:i;var s=a.memoizedState.inst;Me!==null&&i!==null&&qp(i,Me.memoizedState.deps)?a.memoizedState=Wr(t,s,n,i):(Xt.flags|=e,a.memoizedState=Wr(1|t,s,n,i))}function U0(e,t){Oc(8390656,8,e,t)}function $p(e,t){Qu(2048,8,e,t)}function cE(e){Xt.flags|=4;var t=Xt.updateQueue;if(t===null)t=Zu(),Xt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function $v(e){var t=We().memoizedState;return cE({ref:t,nextImpl:e}),function(){if(ce&2)throw Error($(440));return t.impl.apply(void 0,arguments)}}function tx(e,t){return Qu(4,2,e,t)}function ex(e,t){return Qu(4,4,e,t)}function nx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ix(e,t,n){n=n!=null?n.concat([e]):null,Qu(4,4,nx.bind(null,t,e),n)}function tm(){}function ax(e,t){var n=We();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&qp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function sx(e,t){var n=We();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&qp(t,i[1]))return i[0];if(i=e(),Us){Ia(!0);try{e()}finally{Ia(!1)}}return n.memoizedState=[i,t],i}function em(e,t,n){return n===void 0||da&1073741824&&!(ae&261930)?e.memoizedState=t:(e.memoizedState=n,e=Yx(),Xt.lanes|=e,is|=e,n)}function rx(e,t,n,i){return ti(n,t)?n:Xr.current!==null?(e=em(e,n,i),ti(e,t)||(Ke=!0),e):!(da&42)||da&1073741824&&!(ae&261930)?(Ke=!0,e.memoizedState=n):(e=Yx(),Xt.lanes|=e,is|=e,t)}function ox(e,t,n,i,a){var s=ue.p;ue.p=s!==0&&8>s?s:8;var r=Pt.T,o={};Pt.T=o,im(e,!1,t,n);try{var l=a(),c=Pt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=aE(l,i);Ko(e,t,h,$n(e))}else Ko(e,t,i,$n(e))}catch(d){Ko(e,t,{then:function(){},status:"rejected",reason:d},$n())}finally{ue.p=s,r!==null&&o.types!==null&&(r.types=o.types),Pt.T=r}}function uE(){}function sd(e,t,n,i){if(e.tag!==5)throw Error($(476));var a=lx(e).queue;ox(e,a,t,Es,n===null?uE:function(){return cx(e),n(i)})}function lx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Es,baseState:Es,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:Es},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function cx(e){var t=lx(e);t.next===null&&(t=e.alternate.memoizedState),Ko(e,t.next.queue,{},$n())}function nm(){return dn(ml)}function ux(){return We().memoizedState}function fx(){return We().memoizedState}function fE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=$n();e=Wa(n);var i=qa(t,e,n);i!==null&&(On(i,t,n),Yo(i,t,n)),t={cache:Hp()},e.payload=t;return}t=t.return}}function hE(e,t,n){var i=$n();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ju(e)?dx(t,n):(n=Ip(e,t,n,i),n!==null&&(On(n,e,i),px(n,t,i)))}function hx(e,t,n){var i=$n();Ko(e,t,n,i)}function Ko(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ju(e))dx(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,ti(o,r))return Yu(e,t,a,0),Ae===null&&qu(),!1}catch{}finally{}if(n=Ip(e,t,a,i),n!==null)return On(n,e,i),px(n,t,i),!0}return!1}function im(e,t,n,i){if(i={lane:2,revertLane:hm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ju(e)){if(t)throw Error($(479))}else t=Ip(e,n,i,2),t!==null&&On(t,e,2)}function Ju(e){var t=e.alternate;return e===Xt||t!==null&&t===Xt}function dx(e,t){Br=cu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function px(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,$_(e,n)}}var hl={readContext:dn,use:Ku,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze};hl.useEffectEvent=ze;var mx={readContext:dn,use:Ku,useCallback:function(e,t){return An().memoizedState=[e,t===void 0?null:t],e},useContext:dn,useEffect:U0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Oc(4194308,4,nx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oc(4194308,4,e,t)},useInsertionEffect:function(e,t){Oc(4,2,e,t)},useMemo:function(e,t){var n=An();t=t===void 0?null:t;var i=e();if(Us){Ia(!0);try{e()}finally{Ia(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=An();if(n!==void 0){var a=n(t);if(Us){Ia(!0);try{n(t)}finally{Ia(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=hE.bind(null,Xt,e),[i.memoizedState,e]},useRef:function(e){var t=An();return e={current:e},t.memoizedState=e},useState:function(e){e=id(e);var t=e.queue,n=hx.bind(null,Xt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:tm,useDeferredValue:function(e,t){var n=An();return em(n,e,t)},useTransition:function(){var e=id(!1);return e=ox.bind(null,Xt,e.queue,!0,!1),An().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Xt,a=An();if(oe){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Ae===null)throw Error($(349));ae&127||Vv(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,U0(Xv.bind(null,i,s,e),[e]),i.flags|=2048,Wr(9,{destroy:void 0},kv.bind(null,i,s,n,t),null),n},useId:function(){var e=An(),t=Ae.identifierPrefix;if(oe){var n=Li,i=Ui;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=uu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=sE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:nm,useFormState:w0,useActionState:w0,useOptimistic:function(e){var t=An();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=im.bind(null,Xt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Qp,useCacheRefresh:function(){return An().memoizedState=fE.bind(null,Xt)},useEffectEvent:function(e){var t=An(),n={impl:e};return t.memoizedState=n,function(){if(ce&2)throw Error($(440));return n.impl.apply(void 0,arguments)}}},am={readContext:dn,use:Ku,useCallback:ax,useContext:dn,useEffect:$p,useImperativeHandle:ix,useInsertionEffect:tx,useLayoutEffect:ex,useMemo:sx,useReducer:Nc,useRef:Jv,useState:function(){return Nc(pa)},useDebugValue:tm,useDeferredValue:function(e,t){var n=We();return rx(n,Me.memoizedState,e,t)},useTransition:function(){var e=Nc(pa)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Cl(e),t]},useSyncExternalStore:Hv,useId:ux,useHostTransitionStatus:nm,useFormState:C0,useActionState:C0,useOptimistic:function(e,t){var n=We();return Yv(n,Me,e,t)},useMemoCache:Qp,useCacheRefresh:fx};am.useEffectEvent=$v;var gx={readContext:dn,use:Ku,useCallback:ax,useContext:dn,useEffect:$p,useImperativeHandle:ix,useInsertionEffect:tx,useLayoutEffect:ex,useMemo:sx,useReducer:Cf,useRef:Jv,useState:function(){return Cf(pa)},useDebugValue:tm,useDeferredValue:function(e,t){var n=We();return Me===null?em(n,e,t):rx(n,Me.memoizedState,e,t)},useTransition:function(){var e=Cf(pa)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Cl(e),t]},useSyncExternalStore:Hv,useId:ux,useHostTransitionStatus:nm,useFormState:D0,useActionState:D0,useOptimistic:function(e,t){var n=We();return Me!==null?Yv(n,Me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Qp,useCacheRefresh:fx};gx.useEffectEvent=$v;function Df(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rd={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=$n(),a=Wa(i);a.payload=t,n!=null&&(a.callback=n),t=qa(e,a,i),t!==null&&(On(t,e,i),Yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=$n(),a=Wa(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=qa(e,a,i),t!==null&&(On(t,e,i),Yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$n(),i=Wa(n);i.tag=2,t!=null&&(i.callback=t),t=qa(e,i,n),t!==null&&(On(t,e,n),Yo(t,e,n))}};function L0(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!ol(n,i)||!ol(a,s):!0}function N0(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&rd.enqueueReplaceState(t,t.state,null)}function Ls(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Oe({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function _x(e){nu(e)}function vx(e){console.error(e)}function xx(e){nu(e)}function fu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function O0(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function od(e,t,n){return n=Wa(n),n.tag=3,n.payload={element:null},n.callback=function(){fu(e,t)},n}function Sx(e){return e=Wa(e),e.tag=3,e}function yx(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){O0(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){O0(t,n,i),typeof a!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function dE(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ao(t,n,a,!0),n=ei.current,n!==null){switch(n.tag){case 31:case 13:return di===null?gu():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===ru?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Hf(e,i,a)),!1;case 22:return n.flags|=65536,i===ru?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Hf(e,i,a)),!1}throw Error($(435,n.tag))}return Hf(e,i,a),gu(),!1}if(oe)return t=ei.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==jh&&(e=Error($(422),{cause:i}),cl(ui(e,n)))):(i!==jh&&(t=Error($(423),{cause:i}),cl(ui(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=ui(i,n),a=od(e.stateNode,i,a),wf(e,a),Ge!==4&&(Ge=2)),!1;var s=Error($(520),{cause:i});if(s=ui(s,n),$o===null?$o=[s]:$o.push(s),Ge!==4&&(Ge=2),t===null)return!0;i=ui(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=od(n.stateNode,i,e),wf(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ya===null||!Ya.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Sx(a),yx(a,e,n,i),wf(n,a),!1}n=n.return}while(n!==null);return!1}var sm=Error($(461)),Ke=!1;function un(e,t,n,i){t.child=e===null?Pv(t,null,n,i):Ds(t,e.child,n,i)}function P0(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Cs(t),i=Yp(e,t,n,r,s,a),o=jp(),e!==null&&!Ke?(Zp(e,t,a),ma(e,t,a)):(oe&&o&&zp(t),t.flags|=1,un(e,t,i,a),t.child)}function B0(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!Fp(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,Mx(e,t,s,i,a)):(e=Uc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!rm(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:ol,n(r,i)&&e.ref===t.ref)return ma(e,t,a)}return t.flags|=1,e=sa(s,i),e.ref=t.ref,e.return=t,t.child=e}function Mx(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(ol(s,i)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=i=s,rm(e,a))e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,ma(e,t,a)}return ld(e,t,n,i,a)}function Ex(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return I0(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Lc(t,s!==null?s.cachePool:null),s!==null?T0(t,s):ed(),Fv(t);else return i=t.lanes=536870912,I0(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Lc(t,s.cachePool),T0(t,s),Oa(),t.memoizedState=null):(e!==null&&Lc(t,null),ed(),Oa());return un(e,t,a,n),t.child}function Fo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function I0(e,t,n,i,a){var s=Vp();return s=s===null?null:{parent:Ze._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Lc(t,null),ed(),Fv(t),e!==null&&ao(e,t,i,!0),t.childLanes=a,null}function Pc(e,t){return t=hu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function F0(e,t,n){return Ds(t,e.child,null,n),e=Pc(t,t.pendingProps),e.flags|=2,Wn(t),t.memoizedState=null,e}function pE(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(i.mode==="hidden")return e=Pc(t,i),t.lanes=536870912,Fo(null,e);if(nd(t),(e=Le)?(e=mS(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ts!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},n=wv(e),n.return=t,t.child=n,hn=t,Le=null)):e=null,e===null)throw es(t);return t.lanes=536870912,null}return Pc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(nd(t),a)if(t.flags&256)t.flags&=-257,t=F0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error($(558));else if(Ke||ao(e,t,n,!1),a=(n&e.childLanes)!==0,Ke||a){if(i=Ae,i!==null&&(r=tv(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Fs(e,r),On(i,e,r),sm;gu(),t=F0(e,t,n)}else e=s.treeContext,Le=pi(r.nextSibling),hn=t,oe=!0,Xa=null,fi=!1,e!==null&&Dv(t,e),t=Pc(t,i),t.flags|=4096;return t}return e=sa(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Bc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error($(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ld(e,t,n,i,a){return Cs(t),n=Yp(e,t,n,i,void 0,a),i=jp(),e!==null&&!Ke?(Zp(e,t,a),ma(e,t,a)):(oe&&i&&zp(t),t.flags|=1,un(e,t,n,a),t.child)}function z0(e,t,n,i,a,s){return Cs(t),t.updateQueue=null,n=Gv(t,i,n,a),zv(e),i=jp(),e!==null&&!Ke?(Zp(e,t,s),ma(e,t,s)):(oe&&i&&zp(t),t.flags|=1,un(e,t,n,s),t.child)}function G0(e,t,n,i,a){if(Cs(t),t.stateNode===null){var s=br,r=n.contextType;typeof r=="object"&&r!==null&&(s=dn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=rd,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},Xp(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?dn(r):br,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Df(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&rd.enqueueReplaceState(s,s.state,null),Zo(t,i,s,a),jo(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=Ls(n,o);s.props=l;var c=s.context,h=n.contextType;r=br,typeof h=="object"&&h!==null&&(r=dn(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&N0(t,s,i,r),Ua=!1;var u=t.memoizedState;s.state=u,Zo(t,i,s,a),jo(),c=t.memoizedState,o||u!==c||Ua?(typeof d=="function"&&(Df(t,n,d,i),c=t.memoizedState),(l=Ua||L0(t,n,l,i,u,c,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,$h(e,t),r=t.memoizedProps,h=Ls(n,r),s.props=h,d=t.pendingProps,u=s.context,c=n.contextType,l=br,typeof c=="object"&&c!==null&&(l=dn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==d||u!==l)&&N0(t,s,i,l),Ua=!1,u=t.memoizedState,s.state=u,Zo(t,i,s,a),jo();var p=t.memoizedState;r!==d||u!==p||Ua||e!==null&&e.dependencies!==null&&su(e.dependencies)?(typeof o=="function"&&(Df(t,n,o,i),p=t.memoizedState),(h=Ua||L0(t,n,h,i,u,p,l)||e!==null&&e.dependencies!==null&&su(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,p,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,p,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),s.props=i,s.state=p,s.context=l,i=h):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Bc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Ds(t,e.child,null,a),t.child=Ds(t,null,n,a)):un(e,t,n,a),t.memoizedState=s.state,e=t.child):e=ma(e,t,a),e}function H0(e,t,n,i){return ws(),t.flags|=256,un(e,t,n,i),t.child}var Uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lf(e){return{baseLanes:e,cachePool:Lv()}}function Nf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Zn),e}function bx(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(a?Na(t):Oa(),(e=Le)?(e=mS(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ts!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},n=wv(e),n.return=t,t.child=n,hn=t,Le=null)):e=null,e===null)throw es(t);return Md(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Oa(),a=t.mode,o=hu({mode:"hidden",children:o},a),i=bs(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Lf(n),i.childLanes=Nf(e,r,n),t.memoizedState=Uf,Fo(null,i)):(Na(t),cd(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Na(t),t.flags&=-257,t=Of(e,t,n)):t.memoizedState!==null?(Oa(),t.child=e.child,t.flags|=128,t=null):(Oa(),o=i.fallback,a=t.mode,i=hu({mode:"visible",children:i.children},a),o=bs(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Ds(t,e.child,null,n),i=t.child,i.memoizedState=Lf(n),i.childLanes=Nf(e,r,n),t.memoizedState=Uf,t=Fo(null,i));else if(Na(t),Md(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error($(419)),i.stack="",i.digest=r,cl({value:i,source:null,stack:null}),t=Of(e,t,n)}else if(Ke||ao(e,t,n,!1),r=(n&e.childLanes)!==0,Ke||r){if(r=Ae,r!==null&&(i=tv(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Fs(e,i),On(r,e,i),sm;yd(o)||gu(),t=Of(e,t,n)}else yd(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Le=pi(o.nextSibling),hn=t,oe=!0,Xa=null,fi=!1,e!==null&&Dv(t,e),t=cd(t,i.children),t.flags|=4096);return t}return a?(Oa(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=sa(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=sa(c,o):(o=bs(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Fo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Lf(n):(a=o.cachePool,a!==null?(l=Ze._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=Lv(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Nf(e,r,n),t.memoizedState=Uf,Fo(e.child,i)):(Na(t),n=e.child,e=n.sibling,n=sa(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function cd(e,t){return t=hu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hu(e,t){return e=Yn(22,e,null,t),e.lanes=0,e}function Of(e,t,n){return Ds(t,e.child,null,n),e=cd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function V0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Kh(e.return,t,n)}function Pf(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function Tx(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Xe.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ce(Xe,r),un(e,t,i,n),i=oe?ll:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&V0(e,n,t);else if(e.tag===19)V0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&lu(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Pf(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&lu(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Pf(t,!0,n,null,s,i);break;case"together":Pf(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ma(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),is|=t.lanes,!(n&t.childLanes))if(e!==null){if(ao(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=sa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rm(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&su(e)))}function mE(e,t,n){switch(t.tag){case 3:Jc(t,t.stateNode.containerInfo),La(t,Ze,e.memoizedState.cache),ws();break;case 27:case 5:Ih(t);break;case 4:Jc(t,t.stateNode.containerInfo);break;case 10:La(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,nd(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Na(t),t.flags|=128,null):n&t.child.childLanes?bx(e,t,n):(Na(t),e=ma(e,t,n),e!==null?e.sibling:null);Na(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ao(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Tx(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ce(Xe,Xe.current),i)break;return null;case 22:return t.lanes=0,Ex(e,t,n,t.pendingProps);case 24:La(t,Ze,e.memoizedState.cache)}return ma(e,t,n)}function Ax(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!rm(e,n)&&!(t.flags&128))return Ke=!1,mE(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,oe&&t.flags&1048576&&Cv(t,ll,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=gs(t.elementType),t.type=e,typeof e=="function")Fp(e)?(i=Ls(e,i),t.tag=1,t=G0(null,t,e,i,n)):(t.tag=0,t=ld(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===bp){t.tag=11,t=P0(null,t,e,i,n);break t}else if(a===Tp){t.tag=14,t=B0(null,t,e,i,n);break t}}throw t=Ph(e)||e,Error($(306,t,""))}}return t;case 0:return ld(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Ls(i,t.pendingProps),G0(e,t,i,a,n);case 3:t:{if(Jc(t,t.stateNode.containerInfo),e===null)throw Error($(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,$h(e,t),Zo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,La(t,Ze,i),i!==s.cache&&Qh(t,[Ze],n,!0),jo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=H0(e,t,i,n);break t}else if(i!==a){a=ui(Error($(424)),t),cl(a),t=H0(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Le=pi(e.firstChild),hn=t,oe=!0,Xa=null,fi=!0,n=Pv(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ws(),i===a){t=ma(e,t,n);break t}un(e,t,i,n)}t=t.child}return t;case 26:return Bc(e,t),e===null?(n=lg(t.type,null,t.pendingProps,null))?t.memoizedState=n:oe||(n=t.type,e=t.pendingProps,i=Su(ka.current).createElement(n),i[fn]=t,i[Bn]=e,mn(i,n,e),rn(i),t.stateNode=i):t.memoizedState=lg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ih(t),e===null&&oe&&(i=t.stateNode=gS(t.type,t.pendingProps,ka.current),hn=t,fi=!0,a=Le,os(t.type)?(Ed=a,Le=pi(i.firstChild)):Le=a),un(e,t,t.pendingProps.children,n),Bc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((a=i=Le)&&(i=WE(i,t.type,t.pendingProps,fi),i!==null?(t.stateNode=i,hn=t,Le=pi(i.firstChild),fi=!1,a=!0):a=!1),a||es(t)),Ih(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,xd(a,s)?i=null:r!==null&&xd(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=Yp(e,t,rE,null,null,n),ml._currentValue=a),Bc(e,t),un(e,t,i,n),t.child;case 6:return e===null&&oe&&((e=n=Le)&&(n=qE(n,t.pendingProps,fi),n!==null?(t.stateNode=n,hn=t,Le=null,e=!0):e=!1),e||es(t)),null;case 13:return bx(e,t,n);case 4:return Jc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ds(t,null,i,n):un(e,t,i,n),t.child;case 11:return P0(e,t,t.type,t.pendingProps,n);case 7:return un(e,t,t.pendingProps,n),t.child;case 8:return un(e,t,t.pendingProps.children,n),t.child;case 12:return un(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,La(t,t.type,i.value),un(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Cs(t),a=dn(a),i=i(a),t.flags|=1,un(e,t,i,n),t.child;case 14:return B0(e,t,t.type,t.pendingProps,n);case 15:return Mx(e,t,t.type,t.pendingProps,n);case 19:return Tx(e,t,n);case 31:return pE(e,t,n);case 22:return Ex(e,t,n,t.pendingProps);case 24:return Cs(t),i=dn(Ze),e===null?(a=Vp(),a===null&&(a=Ae,s=Hp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},Xp(t),La(t,Ze,a)):(e.lanes&n&&($h(e,t),Zo(t,null,null,n),jo()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),La(t,Ze,i)):(i=s.cache,La(t,Ze,i),i!==a.cache&&Qh(t,[Ze],n,!0))),un(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error($(156,t.tag))}function ki(e){e.flags|=4}function Bf(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Kx())e.flags|=8192;else throw As=ru,kp}else e.flags&=-16777217}function k0(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!xS(t))if(Kx())e.flags|=8192;else throw As=ru,kp}function jl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Q_():536870912,e.lanes|=t,qr|=t)}function yo(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function gE(e,t,n){var i=t.pendingProps;switch(Gp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ra(Ze),Gr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qs(t)?ki(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rf())),Ue(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(ki(t),s!==null?(Ue(t),k0(t,s)):(Ue(t),Bf(t,a,null,i,n))):s?s!==e.memoizedState?(ki(t),Ue(t),k0(t,s)):(Ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ki(t),Ue(t),Bf(t,a,e,i,n)),null;case 27:if($c(t),n=ka.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ki(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return Ue(t),null}e=Bi.current,qs(t)?v0(t):(e=gS(a,i,n),t.stateNode=e,ki(t))}return Ue(t),null;case 5:if($c(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ki(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return Ue(t),null}if(s=Bi.current,qs(t))v0(t);else{var r=Su(ka.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[fn]=t,s[Bn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(mn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ki(t)}}return Ue(t),Bf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ki(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error($(166));if(e=ka.current,qs(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=hn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[fn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||hS(e.nodeValue,n)),e||es(t,!0)}else e=Su(e).createTextNode(i),e[fn]=t,t.stateNode=e}return Ue(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=qs(t),n!==null){if(e===null){if(!i)throw Error($(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(557));e[fn]=t}else ws(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),e=!1}else n=Rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Wn(t),t):(Wn(t),null);if(t.flags&128)throw Error($(558))}return Ue(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error($(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error($(317));a[fn]=t}else ws(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),a=!1}else a=Rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Wn(t),t):(Wn(t),null)}return Wn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),jl(t,t.updateQueue),Ue(t),null);case 4:return Gr(),e===null&&dm(t.stateNode.containerInfo),Ue(t),null;case 10:return ra(t.type),Ue(t),null;case 19:if(ln(Xe),i=t.memoizedState,i===null)return Ue(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)yo(i,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=lu(e),s!==null){for(t.flags|=128,yo(i,!1),e=s.updateQueue,t.updateQueue=e,jl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Rv(n,e),n=n.sibling;return Ce(Xe,Xe.current&1|2),oe&&Ji(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Kn()>pu&&(t.flags|=128,a=!0,yo(i,!1),t.lanes=4194304)}else{if(!a)if(e=lu(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,jl(t,e),yo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!oe)return Ue(t),null}else 2*Kn()-i.renderingStartTime>pu&&n!==536870912&&(t.flags|=128,a=!0,yo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Kn(),e.sibling=null,n=Xe.current,Ce(Xe,a?n&1|2:n&1),oe&&Ji(t,i.treeForkCount),e):(Ue(t),null);case 22:case 23:return Wn(t),Wp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&jl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&ln(Ts),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(Ze),Ue(t),null;case 25:return null;case 30:return null}throw Error($(156,t.tag))}function _E(e,t){switch(Gp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(Ze),Gr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $c(t),null;case 31:if(t.memoizedState!==null){if(Wn(t),t.alternate===null)throw Error($(340));ws()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Wn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));ws()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ln(Xe),null;case 4:return Gr(),null;case 10:return ra(t.type),null;case 22:case 23:return Wn(t),Wp(),e!==null&&ln(Ts),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(Ze),null;case 25:return null;default:return null}}function Rx(e,t){switch(Gp(t),t.tag){case 3:ra(Ze),Gr();break;case 26:case 27:case 5:$c(t);break;case 4:Gr();break;case 31:t.memoizedState!==null&&Wn(t);break;case 13:Wn(t);break;case 19:ln(Xe);break;case 10:ra(t.type);break;case 22:case 23:Wn(t),Wp(),e!==null&&ln(Ts);break;case 24:ra(Ze)}}function Dl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){_e(t,t.return,o)}}function ns(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){_e(a,l,h)}}}i=i.next}while(i!==s)}}catch(h){_e(t,t.return,h)}}function wx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Iv(t,n)}catch(i){_e(e,e.return,i)}}}function Cx(e,t,n){n.props=Ls(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){_e(e,t,i)}}function Qo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){_e(e,t,a)}}function Ni(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){_e(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){_e(e,t,a)}else n.current=null}function Dx(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){_e(e,e.return,a)}}function If(e,t,n){try{var i=e.stateNode;zE(i,e.type,n,t),i[Bn]=t}catch(a){_e(e,e.return,a)}}function Ux(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&os(e.type)||e.tag===4}function Ff(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ux(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&os(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ud(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=na));else if(i!==4&&(i===27&&os(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ud(e,t,n),e=e.sibling;e!==null;)ud(e,t,n),e=e.sibling}function du(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&os(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(du(e,t,n),e=e.sibling;e!==null;)du(e,t,n),e=e.sibling}function Lx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);mn(t,i,n),t[fn]=e,t[Bn]=n}catch(s){_e(e,e.return,s)}}var $i=!1,je=!1,zf=!1,X0=typeof WeakSet=="function"?WeakSet:Set,sn=null;function vE(e,t){if(e=e.containerInfo,_d=bu,e=xv(e),Pp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,d=e,u=null;e:for(;;){for(var p;d!==n||a!==0&&d.nodeType!==3||(o=r+a),d!==s||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===e)break e;if(u===n&&++c===a&&(o=r),u===s&&++h===i&&(l=r),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vd={focusedElem:e,selectionRange:n},bu=!1,sn=t;sn!==null;)if(t=sn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,sn=e;else for(;sn!==null;){switch(t=sn,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var v=Ls(n.type,a);e=i.getSnapshotBeforeUpdate(v,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(E){_e(n,n.return,E)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Sd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error($(163))}if(e=t.sibling,e!==null){e.return=t.return,sn=e;break}sn=t.return}}function Nx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Wi(e,n),i&4&&Dl(5,n);break;case 1:if(Wi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){_e(n,n.return,r)}else{var a=Ls(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){_e(n,n.return,r)}}i&64&&wx(n),i&512&&Qo(n,n.return);break;case 3:if(Wi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Iv(e,t)}catch(r){_e(n,n.return,r)}}break;case 27:t===null&&i&4&&Lx(n);case 26:case 5:Wi(e,n),t===null&&i&4&&Dx(n),i&512&&Qo(n,n.return);break;case 12:Wi(e,n);break;case 31:Wi(e,n),i&4&&Bx(e,n);break;case 13:Wi(e,n),i&4&&Ix(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=RE.bind(null,n),YE(e,n))));break;case 22:if(i=n.memoizedState!==null||$i,!i){t=t!==null&&t.memoizedState!==null||je,a=$i;var s=je;$i=i,(je=t)&&!s?Qi(e,n,(n.subtreeFlags&8772)!==0):Wi(e,n),$i=a,je=s}break;case 30:break;default:Wi(e,n)}}function Ox(e){var t=e.alternate;t!==null&&(e.alternate=null,Ox(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Cp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,Ln=!1;function Xi(e,t,n){for(n=n.child;n!==null;)Px(e,t,n),n=n.sibling}function Px(e,t,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 26:je||Ni(n,t),Xi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:je||Ni(n,t);var i=Pe,a=Ln;os(n.type)&&(Pe=n.stateNode,Ln=!1),Xi(e,t,n),el(n.stateNode),Pe=i,Ln=a;break;case 5:je||Ni(n,t);case 6:if(i=Pe,a=Ln,Pe=null,Xi(e,t,n),Pe=i,Ln=a,Pe!==null)if(Ln)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(n.stateNode)}catch(s){_e(n,t,s)}else try{Pe.removeChild(n.stateNode)}catch(s){_e(n,t,s)}break;case 18:Pe!==null&&(Ln?(e=Pe,ig(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Kr(e)):ig(Pe,n.stateNode));break;case 4:i=Pe,a=Ln,Pe=n.stateNode.containerInfo,Ln=!0,Xi(e,t,n),Pe=i,Ln=a;break;case 0:case 11:case 14:case 15:ns(2,n,t),je||ns(4,n,t),Xi(e,t,n);break;case 1:je||(Ni(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Cx(n,t,i)),Xi(e,t,n);break;case 21:Xi(e,t,n);break;case 22:je=(i=je)||n.memoizedState!==null,Xi(e,t,n),je=i;break;default:Xi(e,t,n)}}function Bx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Kr(e)}catch(n){_e(t,t.return,n)}}}function Ix(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Kr(e)}catch(n){_e(t,t.return,n)}}function xE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new X0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new X0),t;default:throw Error($(435,e.tag))}}function Zl(e,t){var n=xE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=wE.bind(null,e,i);i.then(a,a)}})}function Dn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(os(o.type)){Pe=o.stateNode,Ln=!1;break t}break;case 5:Pe=o.stateNode,Ln=!1;break t;case 3:case 4:Pe=o.stateNode.containerInfo,Ln=!0;break t}o=o.return}if(Pe===null)throw Error($(160));Px(s,r,a),Pe=null,Ln=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fx(t,e),t=t.sibling}var yi=null;function Fx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dn(t,e),Un(e),i&4&&(ns(3,e,e.return),Dl(3,e),ns(5,e,e.return));break;case 1:Dn(t,e),Un(e),i&512&&(je||n===null||Ni(n,n.return)),i&64&&$i&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=yi;if(Dn(t,e),Un(e),i&512&&(je||n===null||Ni(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Al]||s[fn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),mn(s,i,n),s[fn]=e,rn(s),i=s;break t;case"link":var r=ug("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),mn(s,i,n),a.head.appendChild(s);break;case"meta":if(r=ug("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),mn(s,i,n),a.head.appendChild(s);break;default:throw Error($(468,i))}s[fn]=e,rn(s),i=s}e.stateNode=i}else fg(a,e.type,e.stateNode);else e.stateNode=cg(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?fg(a,e.type,e.stateNode):cg(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&If(e,e.memoizedProps,n.memoizedProps)}break;case 27:Dn(t,e),Un(e),i&512&&(je||n===null||Ni(n,n.return)),n!==null&&i&4&&If(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Dn(t,e),Un(e),i&512&&(je||n===null||Ni(n,n.return)),e.flags&32){a=e.stateNode;try{Vr(a,"")}catch(v){_e(e,e.return,v)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,If(e,a,n!==null?n.memoizedProps:a)),i&1024&&(zf=!0);break;case 6:if(Dn(t,e),Un(e),i&4){if(e.stateNode===null)throw Error($(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){_e(e,e.return,v)}}break;case 3:if(zc=null,a=yi,yi=yu(t.containerInfo),Dn(t,e),yi=a,Un(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Kr(t.containerInfo)}catch(v){_e(e,e.return,v)}zf&&(zf=!1,zx(e));break;case 4:i=yi,yi=yu(e.stateNode.containerInfo),Dn(t,e),Un(e),yi=i;break;case 12:Dn(t,e),Un(e);break;case 31:Dn(t,e),Un(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Zl(e,i)));break;case 13:Dn(t,e),Un(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($u=Kn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Zl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=$i,h=je;if($i=c||a,je=h||l,Dn(t,e),je=h,$i=c,Un(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$i||je||_s(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,u=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(v){_e(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(v){_e(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;a?ag(p,!0):ag(l.stateNode,!1)}catch(v){_e(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Zl(e,n))));break;case 19:Dn(t,e),Un(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Zl(e,i)));break;case 30:break;case 21:break;default:Dn(t,e),Un(e)}}function Un(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Ux(i)){n=i;break}i=i.return}if(n==null)throw Error($(160));switch(n.tag){case 27:var a=n.stateNode,s=Ff(e);du(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(Vr(r,""),n.flags&=-33);var o=Ff(e);du(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Ff(e);ud(e,c,l);break;default:throw Error($(161))}}catch(h){_e(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;zx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Nx(e,t.alternate,t),t=t.sibling}function _s(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ns(4,t,t.return),_s(t);break;case 1:Ni(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Cx(t,t.return,n),_s(t);break;case 27:el(t.stateNode);case 26:case 5:Ni(t,t.return),_s(t);break;case 22:t.memoizedState===null&&_s(t);break;case 30:_s(t);break;default:_s(t)}e=e.sibling}}function Qi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Qi(a,s,n),Dl(4,s);break;case 1:if(Qi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){_e(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)Bv(l[a],o)}catch(c){_e(i,i.return,c)}}n&&r&64&&wx(s),Qo(s,s.return);break;case 27:Lx(s);case 26:case 5:Qi(a,s,n),n&&i===null&&r&4&&Dx(s),Qo(s,s.return);break;case 12:Qi(a,s,n);break;case 31:Qi(a,s,n),n&&r&4&&Bx(a,s);break;case 13:Qi(a,s,n),n&&r&4&&Ix(a,s);break;case 22:s.memoizedState===null&&Qi(a,s,n),Qo(s,s.return);break;case 30:break;default:Qi(a,s,n)}t=t.sibling}}function om(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&wl(n))}function lm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e))}function _i(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gx(e,t,n,i),t=t.sibling}function Gx(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:_i(e,t,n,i),a&2048&&Dl(9,t);break;case 1:_i(e,t,n,i);break;case 3:_i(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e)));break;case 12:if(a&2048){_i(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){_e(t,t.return,l)}}else _i(e,t,n,i);break;case 31:_i(e,t,n,i);break;case 13:_i(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?_i(e,t,n,i):Jo(e,t):s._visibility&2?_i(e,t,n,i):(s._visibility|=2,pr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&om(r,t);break;case 24:_i(e,t,n,i),a&2048&&lm(t.alternate,t);break;default:_i(e,t,n,i)}}function pr(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:pr(s,r,o,l,a),Dl(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?pr(s,r,o,l,a):Jo(s,r):(h._visibility|=2,pr(s,r,o,l,a)),a&&c&2048&&om(r.alternate,r);break;case 24:pr(s,r,o,l,a),a&&c&2048&&lm(r.alternate,r);break;default:pr(s,r,o,l,a)}t=t.sibling}}function Jo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Jo(n,i),a&2048&&om(i.alternate,i);break;case 24:Jo(n,i),a&2048&&lm(i.alternate,i);break;default:Jo(n,i)}t=t.sibling}}var zo=8192;function Ys(e,t,n){if(e.subtreeFlags&zo)for(e=e.child;e!==null;)Hx(e,t,n),e=e.sibling}function Hx(e,t,n){switch(e.tag){case 26:Ys(e,t,n),e.flags&zo&&e.memoizedState!==null&&sb(n,yi,e.memoizedState,e.memoizedProps);break;case 5:Ys(e,t,n);break;case 3:case 4:var i=yi;yi=yu(e.stateNode.containerInfo),Ys(e,t,n),yi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=zo,zo=16777216,Ys(e,t,n),zo=i):Ys(e,t,n));break;default:Ys(e,t,n)}}function Vx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Mo(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];sn=i,Xx(i,e)}Vx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kx(e),e=e.sibling}function kx(e){switch(e.tag){case 0:case 11:case 15:Mo(e),e.flags&2048&&ns(9,e,e.return);break;case 3:Mo(e);break;case 12:Mo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ic(e)):Mo(e);break;default:Mo(e)}}function Ic(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];sn=i,Xx(i,e)}Vx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ns(8,t,t.return),Ic(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ic(t));break;default:Ic(t)}e=e.sibling}}function Xx(e,t){for(;sn!==null;){var n=sn;switch(n.tag){case 0:case 11:case 15:ns(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:wl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,sn=i;else t:for(n=e;sn!==null;){i=sn;var a=i.sibling,s=i.return;if(Ox(i),i===n){sn=null;break t}if(a!==null){a.return=s,sn=a;break t}sn=s}}}var SE={getCacheForType:function(e){var t=dn(Ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return dn(Ze).controller.signal}},yE=typeof WeakMap=="function"?WeakMap:Map,ce=0,Ae=null,ne=null,ae=0,me=0,Xn=null,za=!1,ro=!1,cm=!1,ga=0,Ge=0,is=0,Rs=0,um=0,Zn=0,qr=0,$o=null,Nn=null,fd=!1,$u=0,Wx=0,pu=1/0,mu=null,Ya=null,Qe=0,ja=null,Yr=null,oa=0,hd=0,dd=null,qx=null,tl=0,pd=null;function $n(){return ce&2&&ae!==0?ae&-ae:Pt.T!==null?hm():ev()}function Yx(){if(Zn===0)if(!(ae&536870912)||oe){var e=Hl;Hl<<=1,!(Hl&3932160)&&(Hl=262144),Zn=e}else Zn=536870912;return e=ei.current,e!==null&&(e.flags|=32),Zn}function On(e,t,n){(e===Ae&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(jr(e,0),Ga(e,ae,Zn,!1)),Tl(e,n),(!(ce&2)||e!==Ae)&&(e===Ae&&(!(ce&2)&&(Rs|=n),Ge===4&&Ga(e,ae,Zn,!1)),Hi(e))}function jx(e,t,n){if(ce&6)throw Error($(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||bl(e,t),a=i?bE(e,t):Gf(e,t,!0),s=i;do{if(a===0){ro&&!i&&Ga(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!ME(n)){a=Gf(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=$o;var l=o.current.memoizedState.isDehydrated;if(l&&(jr(o,r).flags|=256),r=Gf(o,r,!1),r!==2){if(cm&&!l){o.errorRecoveryDisabledLanes|=s,Rs|=s,a=4;break t}s=Nn,Nn=a,s!==null&&(Nn===null?Nn=s:Nn.push.apply(Nn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){jr(e,0),Ga(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error($(345));case 4:if((t&4194048)!==t)break;case 6:Ga(i,t,Zn,!za);break t;case 2:Nn=null;break;case 3:case 5:break;default:throw Error($(329))}if((t&62914560)===t&&(a=$u+300-Kn(),10<a)){if(Ga(i,t,Zn,!za),Vu(i,0,!0)!==0)break t;oa=t,i.timeoutHandle=pS(W0.bind(null,i,n,Nn,mu,fd,t,Zn,Rs,qr,za,s,"Throttled",-0,0),a);break t}W0(i,n,Nn,mu,fd,t,Zn,Rs,qr,za,s,null,-0,0)}}break}while(!0);Hi(e)}function W0(e,t,n,i,a,s,r,o,l,c,h,d,u,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},Hx(t,s,d);var v=(s&62914560)===s?$u-Kn():(s&4194048)===s?Wx-Kn():0;if(v=rb(d,v),v!==null){oa=s,e.cancelPendingCommit=v(Y0.bind(null,e,t,s,n,i,a,r,o,l,h,d,null,u,p)),Ga(e,s,r,!c);return}}Y0(e,t,s,n,i,a,r,o,l)}function ME(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!ti(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ga(e,t,n,i){t&=~um,t&=~Rs,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Jn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&J_(e,n,t)}function tf(){return ce&6?!0:(Ul(0),!1)}function fm(){if(ne!==null){if(me===0)var e=ne.return;else e=ne,ia=zs=null,Kp(e),Pr=null,ul=0,e=ne;for(;e!==null;)Rx(e.alternate,e),e=e.return;ne=null}}function jr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,VE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),oa=0,fm(),Ae=e,ne=n=sa(e.current,null),ae=t,me=0,Xn=null,za=!1,ro=bl(e,t),cm=!1,qr=Zn=um=Rs=is=Ge=0,Nn=$o=null,fd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Jn(i),s=1<<a;t|=e[a],i&=~s}return ga=t,qu(),n}function Zx(e,t){Xt=null,Pt.H=hl,t===so||t===ju?(t=E0(),me=3):t===kp?(t=E0(),me=4):me=t===sm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Xn=t,ne===null&&(Ge=1,fu(e,ui(t,e.current)))}function Kx(){var e=ei.current;return e===null?!0:(ae&4194048)===ae?di===null:(ae&62914560)===ae||ae&536870912?e===di:!1}function Qx(){var e=Pt.H;return Pt.H=hl,e===null?hl:e}function Jx(){var e=Pt.A;return Pt.A=SE,e}function gu(){Ge=4,za||(ae&4194048)!==ae&&ei.current!==null||(ro=!0),!(is&134217727)&&!(Rs&134217727)||Ae===null||Ga(Ae,ae,Zn,!1)}function Gf(e,t,n){var i=ce;ce|=2;var a=Qx(),s=Jx();(Ae!==e||ae!==t)&&(mu=null,jr(e,t)),t=!1;var r=Ge;t:do try{if(me!==0&&ne!==null){var o=ne,l=Xn;switch(me){case 8:fm(),r=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(t=!0);var c=me;if(me=0,Xn=null,Rr(e,o,l,c),n&&ro){r=0;break t}break;default:c=me,me=0,Xn=null,Rr(e,o,l,c)}}EE(),r=Ge;break}catch(h){Zx(e,h)}while(!0);return t&&e.shellSuspendCounter++,ia=zs=null,ce=i,Pt.H=a,Pt.A=s,ne===null&&(Ae=null,ae=0,qu()),r}function EE(){for(;ne!==null;)$x(ne)}function bE(e,t){var n=ce;ce|=2;var i=Qx(),a=Jx();Ae!==e||ae!==t?(mu=null,pu=Kn()+500,jr(e,t)):ro=bl(e,t);t:do try{if(me!==0&&ne!==null){t=ne;var s=Xn;e:switch(me){case 1:me=0,Xn=null,Rr(e,t,s,1);break;case 2:case 9:if(M0(s)){me=0,Xn=null,q0(t);break}t=function(){me!==2&&me!==9||Ae!==e||(me=7),Hi(e)},s.then(t,t);break t;case 3:me=7;break t;case 4:me=5;break t;case 7:M0(s)?(me=0,Xn=null,q0(t)):(me=0,Xn=null,Rr(e,t,s,7));break;case 5:var r=null;switch(ne.tag){case 26:r=ne.memoizedState;case 5:case 27:var o=ne;if(r?xS(r):o.stateNode.complete){me=0,Xn=null;var l=o.sibling;if(l!==null)ne=l;else{var c=o.return;c!==null?(ne=c,ef(c)):ne=null}break e}}me=0,Xn=null,Rr(e,t,s,5);break;case 6:me=0,Xn=null,Rr(e,t,s,6);break;case 8:fm(),Ge=6;break t;default:throw Error($(462))}}TE();break}catch(h){Zx(e,h)}while(!0);return ia=zs=null,Pt.H=i,Pt.A=a,ce=n,ne!==null?0:(Ae=null,ae=0,qu(),Ge)}function TE(){for(;ne!==null&&!jy();)$x(ne)}function $x(e){var t=Ax(e.alternate,e,ga);e.memoizedProps=e.pendingProps,t===null?ef(e):ne=t}function q0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=z0(n,t,t.pendingProps,t.type,void 0,ae);break;case 11:t=z0(n,t,t.pendingProps,t.type.render,t.ref,ae);break;case 5:Kp(t);default:Rx(n,t),t=ne=Rv(t,ga),t=Ax(n,t,ga)}e.memoizedProps=e.pendingProps,t===null?ef(e):ne=t}function Rr(e,t,n,i){ia=zs=null,Kp(t),Pr=null,ul=0;var a=t.return;try{if(dE(e,a,t,n,ae)){Ge=1,fu(e,ui(n,e.current)),ne=null;return}}catch(s){if(a!==null)throw ne=a,s;Ge=1,fu(e,ui(n,e.current)),ne=null;return}t.flags&32768?(oe||i===1?e=!0:ro||ae&536870912?e=!1:(za=e=!0,(i===2||i===9||i===3||i===6)&&(i=ei.current,i!==null&&i.tag===13&&(i.flags|=16384))),tS(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tS(t,za);return}e=t.return;var n=gE(t.alternate,t,ga);if(n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Ge===0&&(Ge=5)}function tS(e,t){do{var n=_E(e.alternate,e);if(n!==null){n.flags&=32767,ne=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=n}while(e!==null);Ge=6,ne=null}function Y0(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do nf();while(Qe!==0);if(ce&6)throw Error($(327));if(t!==null){if(t===e.current)throw Error($(177));if(s=t.lanes|t.childLanes,s|=Bp,aM(e,n,s,r,o,l),e===Ae&&(ne=Ae=null,ae=0),Yr=t,ja=e,oa=n,hd=s,dd=a,qx=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,CE(tu,function(){return sS(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Pt.T,Pt.T=null,a=ue.p,ue.p=2,r=ce,ce|=4;try{vE(e,t,n)}finally{ce=r,ue.p=a,Pt.T=i}}Qe=1,eS(),nS(),iS()}}function eS(){if(Qe===1){Qe=0;var e=ja,t=Yr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Pt.T,Pt.T=null;var i=ue.p;ue.p=2;var a=ce;ce|=4;try{Fx(t,e);var s=vd,r=xv(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&vv(o.ownerDocument.documentElement,o)){if(l!==null&&Pp(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,u=d&&d.defaultView||window;if(u.getSelection){var p=u.getSelection(),v=o.textContent.length,E=Math.min(l.start,v),g=l.end===void 0?E:Math.min(l.end,v);!p.extend&&E>g&&(r=g,g=E,E=r);var f=m0(o,E),m=m0(o,g);if(f&&m&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==m.node||p.focusOffset!==m.offset)){var _=d.createRange();_.setStart(f.node,f.offset),p.removeAllRanges(),E>g?(p.addRange(_),p.extend(m.node,m.offset)):(_.setEnd(m.node,m.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var S=d[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}bu=!!_d,vd=_d=null}finally{ce=a,ue.p=i,Pt.T=n}}e.current=t,Qe=2}}function nS(){if(Qe===2){Qe=0;var e=ja,t=Yr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Pt.T,Pt.T=null;var i=ue.p;ue.p=2;var a=ce;ce|=4;try{Nx(e,t.alternate,t)}finally{ce=a,ue.p=i,Pt.T=n}}Qe=3}}function iS(){if(Qe===4||Qe===3){Qe=0,Zy();var e=ja,t=Yr,n=oa,i=qx;t.subtreeFlags&10256||t.flags&10256?Qe=5:(Qe=0,Yr=ja=null,aS(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ya=null),wp(n),t=t.stateNode,Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(El,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Pt.T,a=ue.p,ue.p=2,Pt.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Pt.T=t,ue.p=a}}oa&3&&nf(),Hi(e),a=e.pendingLanes,n&261930&&a&42?e===pd?tl++:(tl=0,pd=e):tl=0,Ul(0)}}function aS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wl(t)))}function nf(){return eS(),nS(),iS(),sS()}function sS(){if(Qe!==5)return!1;var e=ja,t=hd;hd=0;var n=wp(oa),i=Pt.T,a=ue.p;try{ue.p=32>n?32:n,Pt.T=null,n=dd,dd=null;var s=ja,r=oa;if(Qe=0,Yr=ja=null,oa=0,ce&6)throw Error($(331));var o=ce;if(ce|=4,kx(s.current),Gx(s,s.current,r,n),ce=o,Ul(0,!1),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(El,s)}catch{}return!0}finally{ue.p=a,Pt.T=i,aS(e,t)}}function j0(e,t,n){t=ui(n,t),t=od(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(Tl(e,2),Hi(e))}function _e(e,t,n){if(e.tag===3)j0(e,e,n);else for(;t!==null;){if(t.tag===3){j0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ya===null||!Ya.has(i))){e=ui(n,e),n=Sx(2),i=qa(t,n,2),i!==null&&(yx(n,i,t,e),Tl(i,2),Hi(i));break}}t=t.return}}function Hf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new yE;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(cm=!0,a.add(n),e=AE.bind(null,e,t,n),t.then(e,e))}function AE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ae===e&&(ae&n)===n&&(Ge===4||Ge===3&&(ae&62914560)===ae&&300>Kn()-$u?!(ce&2)&&jr(e,0):um|=n,qr===ae&&(qr=0)),Hi(e)}function rS(e,t){t===0&&(t=Q_()),e=Fs(e,t),e!==null&&(Tl(e,t),Hi(e))}function RE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rS(e,n)}function wE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error($(314))}i!==null&&i.delete(t),rS(e,n)}function CE(e,t){return Ap(e,t)}var _u=null,mr=null,md=!1,vu=!1,Vf=!1,Ha=0;function Hi(e){e!==mr&&e.next===null&&(mr===null?_u=mr=e:mr=mr.next=e),vu=!0,md||(md=!0,UE())}function Ul(e,t){if(!Vf&&vu){Vf=!0;do for(var n=!1,i=_u;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Jn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Z0(i,s))}else s=ae,s=Vu(i,i===Ae?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||bl(i,s)||(n=!0,Z0(i,s));i=i.next}while(n);Vf=!1}}function DE(){oS()}function oS(){vu=md=!1;var e=0;Ha!==0&&HE()&&(e=Ha);for(var t=Kn(),n=null,i=_u;i!==null;){var a=i.next,s=lS(i,t);s===0?(i.next=null,n===null?_u=a:n.next=a,a===null&&(mr=n)):(n=i,(e!==0||s&3)&&(vu=!0)),i=a}Qe!==0&&Qe!==5||Ul(e),Ha!==0&&(Ha=0)}function lS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Jn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=iM(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=Ae,n=ae,n=Vu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&gf(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||bl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&gf(i),wp(n)){case 2:case 8:n=Z_;break;case 32:n=tu;break;case 268435456:n=K_;break;default:n=tu}return i=cS.bind(null,e),n=Ap(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&gf(i),e.callbackPriority=2,e.callbackNode=null,2}function cS(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(nf()&&e.callbackNode!==n)return null;var i=ae;return i=Vu(e,e===Ae?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(jx(e,i,t),lS(e,Kn()),e.callbackNode!=null&&e.callbackNode===n?cS.bind(null,e):null)}function Z0(e,t){if(nf())return null;jx(e,t,!0)}function UE(){kE(function(){ce&6?Ap(j_,DE):oS()})}function hm(){if(Ha===0){var e=kr;e===0&&(e=Gl,Gl<<=1,!(Gl&261888)&&(Gl=256)),Ha=e}return Ha}function K0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wc(""+e)}function Q0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function LE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=K0((a[Bn]||null).action),r=i.submitter;r&&(t=(t=r[Bn]||null)?K0(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new ku("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ha!==0){var l=r?Q0(a,r):new FormData(a);sd(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?Q0(a,r):new FormData(a),sd(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var kf=0;kf<Yh.length;kf++){var Xf=Yh[kf],NE=Xf.toLowerCase(),OE=Xf[0].toUpperCase()+Xf.slice(1);Ti(NE,"on"+OE)}Ti(yv,"onAnimationEnd");Ti(Mv,"onAnimationIteration");Ti(Ev,"onAnimationStart");Ti("dblclick","onDoubleClick");Ti("focusin","onFocus");Ti("focusout","onBlur");Ti(KM,"onTransitionRun");Ti(QM,"onTransitionStart");Ti(JM,"onTransitionCancel");Ti(bv,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);Ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl));function uS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){nu(h)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){nu(h)}a.currentTarget=null,s=l}}}}function ee(e,t){var n=t[zh];n===void 0&&(n=t[zh]=new Set);var i=e+"__bubble";n.has(i)||(fS(t,e,2,!1),n.add(i))}function Wf(e,t,n){var i=0;t&&(i|=4),fS(n,e,i,t)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function dm(e){if(!e[Kl]){e[Kl]=!0,nv.forEach(function(n){n!=="selectionchange"&&(PE.has(n)||Wf(n,!1,e),Wf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kl]||(t[Kl]=!0,Wf("selectionchange",!1,t))}}function fS(e,t,n,i){switch(bS(t)){case 2:var a=cb;break;case 8:a=ub;break;default:a=_m}n=a.bind(null,t,n,e),a=void 0,!Xh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function qf(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=vr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}uv(function(){var c=s,h=Up(n),d=[];t:{var u=Tv.get(e);if(u!==void 0){var p=ku,v=e;switch(e){case"keypress":if(Dc(n)===0)break t;case"keydown":case"keyup":p=wM;break;case"focusin":v="focus",p=yf;break;case"focusout":v="blur",p=yf;break;case"beforeblur":case"afterblur":p=yf;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=s0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=UM;break;case yv:case Mv:case Ev:p=xM;break;case bv:p=NM;break;case"scroll":case"scrollend":p=pM;break;case"wheel":p=PM;break;case"copy":case"cut":case"paste":p=yM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=o0;break;case"toggle":case"beforetoggle":p=IM}var E=(t&4)!==0,g=!E&&(e==="scroll"||e==="scrollend"),f=E?u!==null?u+"Capture":null:u;E=[];for(var m=c,_;m!==null;){var S=m;if(_=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||_===null||f===null||(S=sl(m,f),S!=null&&E.push(pl(m,S,_))),g)break;m=m.return}0<E.length&&(u=new p(u,v,null,n,h),d.push({event:u,listeners:E}))}}if(!(t&7)){t:{if(u=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",u&&n!==kh&&(v=n.relatedTarget||n.fromElement)&&(vr(v)||v[no]))break t;if((p||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?vr(v):null,v!==null&&(g=Ml(v),E=v.tag,v!==g||E!==5&&E!==27&&E!==6)&&(v=null)):(p=null,v=c),p!==v)){if(E=s0,S="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(E=o0,S="onPointerLeave",f="onPointerEnter",m="pointer"),g=p==null?u:Io(p),_=v==null?u:Io(v),u=new E(S,m+"leave",p,n,h),u.target=g,u.relatedTarget=_,S=null,vr(h)===c&&(E=new E(f,m+"enter",v,n,h),E.target=_,E.relatedTarget=g,S=E),g=S,p&&v)e:{for(E=BE,f=p,m=v,_=0,S=f;S;S=E(S))_++;S=0;for(var w=m;w;w=E(w))S++;for(;0<_-S;)f=E(f),_--;for(;0<S-_;)m=E(m),S--;for(;_--;){if(f===m||m!==null&&f===m.alternate){E=f;break e}f=E(f),m=E(m)}E=null}else E=null;p!==null&&J0(d,u,p,E,!1),v!==null&&g!==null&&J0(d,g,v,E,!0)}}t:{if(u=c?Io(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=f0;else if(u0(u))if(gv)b=YM;else{b=WM;var R=XM}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Dp(c.elementType)&&(b=f0):b=qM;if(b&&(b=b(e,c))){mv(d,b,n,h);break t}R&&R(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&Vh(u,"number",u.value)}switch(R=c?Io(c):window,e){case"focusin":(u0(R)||R.contentEditable==="true")&&(yr=R,Wh=c,Wo=null);break;case"focusout":Wo=Wh=yr=null;break;case"mousedown":qh=!0;break;case"contextmenu":case"mouseup":case"dragend":qh=!1,g0(d,n,h);break;case"selectionchange":if(ZM)break;case"keydown":case"keyup":g0(d,n,h)}var x;if(Op)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else Sr?dv(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(hv&&n.locale!=="ko"&&(Sr||A!=="onCompositionStart"?A==="onCompositionEnd"&&Sr&&(x=fv()):(Fa=h,Lp="value"in Fa?Fa.value:Fa.textContent,Sr=!0)),R=xu(c,A),0<R.length&&(A=new r0(A,e,null,n,h),d.push({event:A,listeners:R}),x?A.data=x:(x=pv(n),x!==null&&(A.data=x)))),(x=zM?GM(e,n):HM(e,n))&&(A=xu(c,"onBeforeInput"),0<A.length&&(R=new r0("onBeforeInput","beforeinput",null,n,h),d.push({event:R,listeners:A}),R.data=x)),LE(d,e,c,n,h)}uS(d,t)})}function pl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xu(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=sl(e,n),a!=null&&i.unshift(pl(e,a,s)),a=sl(e,t),a!=null&&i.push(pl(e,a,s))),e.tag===3)return i;e=e.return}return[]}function BE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function J0(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=sl(n,s),c!=null&&r.unshift(pl(n,c,l))):a||(c=sl(n,s),c!=null&&r.push(pl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var IE=/\r\n?/g,FE=/\u0000|\uFFFD/g;function $0(e){return(typeof e=="string"?e:""+e).replace(IE,`
`).replace(FE,"")}function hS(e,t){return t=$0(t),$0(e)===t}function ye(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Vr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Vr(e,""+i);break;case"className":kl(e,"class",i);break;case"tabIndex":kl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":kl(e,n,i);break;case"style":cv(e,i,s);break;case"data":if(t!=="object"){kl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=wc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&ye(e,t,"name",a.name,a,null),ye(e,t,"formEncType",a.formEncType,a,null),ye(e,t,"formMethod",a.formMethod,a,null),ye(e,t,"formTarget",a.formTarget,a,null)):(ye(e,t,"encType",a.encType,a,null),ye(e,t,"method",a.method,a,null),ye(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=wc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=na);break;case"onScroll":i!=null&&ee("scroll",e);break;case"onScrollEnd":i!=null&&ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error($(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=wc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":ee("beforetoggle",e),ee("toggle",e),Rc(e,"popover",i);break;case"xlinkActuate":Vi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Vi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Vi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Vi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Vi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Vi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Vi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Vi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Vi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Rc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=hM.get(n)||n,Rc(e,n,i))}}function gd(e,t,n,i,a,s){switch(n){case"style":cv(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error($(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Vr(e,i):(typeof i=="number"||typeof i=="bigint")&&Vr(e,""+i);break;case"onScroll":i!=null&&ee("scroll",e);break;case"onScrollEnd":i!=null&&ee("scrollend",e);break;case"onClick":i!=null&&(e.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!iv.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[Bn]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Rc(e,n,i)}}}function mn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ee("error",e),ee("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:ye(e,t,s,r,n,null)}}a&&ye(e,t,"srcSet",n.srcSet,n,null),i&&ye(e,t,"src",n.src,n,null);return;case"input":ee("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error($(137,t));break;default:ye(e,t,i,h,n,null)}}rv(e,s,o,l,c,r,a,!1);return;case"select":ee("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ye(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?Lr(e,!!i,t,!1):n!=null&&Lr(e,!!i,n,!0);return;case"textarea":ee("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error($(91));break;default:ye(e,t,r,o,n,null)}lv(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ye(e,t,l,i,n,null)}return;case"dialog":ee("beforetoggle",e),ee("toggle",e),ee("cancel",e),ee("close",e);break;case"iframe":case"object":ee("load",e);break;case"video":case"audio":for(i=0;i<dl.length;i++)ee(dl[i],e);break;case"image":ee("error",e),ee("load",e);break;case"details":ee("toggle",e);break;case"embed":case"source":case"link":ee("error",e),ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:ye(e,t,c,i,n,null)}return;default:if(Dp(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&gd(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ye(e,t,o,i,n,null))}function zE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||ye(e,t,p,null,i,d)}}for(var u in i){var p=i[u];if(d=n[u],i.hasOwnProperty(u)&&(p!=null||d!=null))switch(u){case"type":s=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error($(137,t));break;default:p!==d&&ye(e,t,u,p,i,d)}}Hh(e,r,o,l,c,h,s,a);return;case"select":p=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(s)||ye(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&ye(e,t,a,s,i,l)}t=o,n=r,i=p,u!=null?Lr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Lr(e,!!n,t,!0):Lr(e,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ye(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error($(91));break;default:a!==s&&ye(e,t,r,a,i,s)}ov(e,u,p);return;case"option":for(var v in n)if(u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:ye(e,t,v,null,i,u)}for(l in i)if(u=i[l],p=n[l],i.hasOwnProperty(l)&&u!==p&&(u!=null||p!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ye(e,t,l,u,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in n)u=n[E],n.hasOwnProperty(E)&&u!=null&&!i.hasOwnProperty(E)&&ye(e,t,E,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error($(137,t));break;default:ye(e,t,c,u,i,p)}return;default:if(Dp(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&gd(e,t,g,void 0,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u===void 0&&p===void 0||gd(e,t,h,u,i,p);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&ye(e,t,f,null,i,u);for(d in i)u=i[d],p=n[d],!i.hasOwnProperty(d)||u===p||u==null&&p==null||ye(e,t,d,u,i,p)}function tg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function GE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&tg(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&tg(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _d=null,vd=null;function Su(e){return e.nodeType===9?e:e.ownerDocument}function eg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function xd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yf=null;function HE(){var e=window.event;return e&&e.type==="popstate"?e===Yf?!1:(Yf=e,!0):(Yf=null,!1)}var pS=typeof setTimeout=="function"?setTimeout:void 0,VE=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,kE=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(e){return ng.resolve(null).then(e).catch(XE)}:pS;function XE(e){setTimeout(function(){throw e})}function os(e){return e==="head"}function ig(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Kr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")el(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,el(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Al]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&el(e.ownerDocument.body);n=a}while(n);Kr(t)}function ag(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Sd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Sd(n),Cp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function WE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Al])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function qE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function mS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=pi(e.nextSibling),e===null))return null;return e}function yd(e){return e.data==="$?"||e.data==="$~"}function Md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function YE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function pi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ed=null;function sg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return pi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function rg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function gS(e,t,n){switch(t=Su(n),e){case"html":if(e=t.documentElement,!e)throw Error($(452));return e;case"head":if(e=t.head,!e)throw Error($(453));return e;case"body":if(e=t.body,!e)throw Error($(454));return e;default:throw Error($(451))}}function el(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Cp(e)}var gi=new Map,og=new Set;function yu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=ue.d;ue.d={f:jE,r:ZE,D:KE,C:QE,L:JE,m:$E,X:eb,S:tb,M:nb};function jE(){var e=xa.f(),t=tf();return e||t}function ZE(e){var t=io(e);t!==null&&t.tag===5&&t.type==="form"?cx(t):xa.r(e)}var oo=typeof document>"u"?null:document;function _S(e,t,n){var i=oo;if(i&&typeof t=="string"&&t){var a=ci(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),og.has(a)||(og.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),mn(t,"link",e),rn(t),i.head.appendChild(t)))}}function KE(e){xa.D(e),_S("dns-prefetch",e,null)}function QE(e,t){xa.C(e,t),_S("preconnect",e,t)}function JE(e,t,n){xa.L(e,t,n);var i=oo;if(i&&e&&t){var a='link[rel="preload"][as="'+ci(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ci(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+ci(n.imageSizes)+'"]')):a+='[href="'+ci(e)+'"]';var s=a;switch(t){case"style":s=Zr(e);break;case"script":s=lo(e)}gi.has(s)||(e=Oe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),gi.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Ll(s))||t==="script"&&i.querySelector(Nl(s))||(t=i.createElement("link"),mn(t,"link",e),rn(t),i.head.appendChild(t)))}}function $E(e,t){xa.m(e,t);var n=oo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+ci(i)+'"][href="'+ci(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=lo(e)}if(!gi.has(s)&&(e=Oe({rel:"modulepreload",href:e},t),gi.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Nl(s)))return}i=n.createElement("link"),mn(i,"link",e),rn(i),n.head.appendChild(i)}}}function tb(e,t,n){xa.S(e,t,n);var i=oo;if(i&&e){var a=Ur(i).hoistableStyles,s=Zr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Ll(s)))o.loading=5;else{e=Oe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=gi.get(s))&&pm(e,n);var l=r=i.createElement("link");rn(l),mn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Fc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function eb(e,t){xa.X(e,t);var n=oo;if(n&&e){var i=Ur(n).hoistableScripts,a=lo(e),s=i.get(a);s||(s=n.querySelector(Nl(a)),s||(e=Oe({src:e,async:!0},t),(t=gi.get(a))&&mm(e,t),s=n.createElement("script"),rn(s),mn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function nb(e,t){xa.M(e,t);var n=oo;if(n&&e){var i=Ur(n).hoistableScripts,a=lo(e),s=i.get(a);s||(s=n.querySelector(Nl(a)),s||(e=Oe({src:e,async:!0,type:"module"},t),(t=gi.get(a))&&mm(e,t),s=n.createElement("script"),rn(s),mn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function lg(e,t,n,i){var a=(a=ka.current)?yu(a):null;if(!a)throw Error($(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Zr(n.href),n=Ur(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Zr(n.href);var s=Ur(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Ll(e)))&&!s._p&&(r.instance=s,r.state.loading=5),gi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},gi.set(e,n),s||ib(a,e,n,r.state))),t&&i===null)throw Error($(528,""));return r}if(t&&i!==null)throw Error($(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=lo(n),n=Ur(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error($(444,e))}}function Zr(e){return'href="'+ci(e)+'"'}function Ll(e){return'link[rel="stylesheet"]['+e+"]"}function vS(e){return Oe({},e,{"data-precedence":e.precedence,precedence:null})}function ib(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),mn(t,"link",n),rn(t),e.head.appendChild(t))}function lo(e){return'[src="'+ci(e)+'"]'}function Nl(e){return"script[async]"+e}function cg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ci(n.href)+'"]');if(i)return t.instance=i,rn(i),i;var a=Oe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),rn(i),mn(i,"style",a),Fc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Zr(n.href);var s=e.querySelector(Ll(a));if(s)return t.state.loading|=4,t.instance=s,rn(s),s;i=vS(n),(a=gi.get(a))&&pm(i,a),s=(e.ownerDocument||e).createElement("link"),rn(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),mn(s,"link",i),t.state.loading|=4,Fc(s,n.precedence,e),t.instance=s;case"script":return s=lo(n.src),(a=e.querySelector(Nl(s)))?(t.instance=a,rn(a),a):(i=n,(a=gi.get(s))&&(i=Oe({},n),mm(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),rn(a),mn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error($(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Fc(i,n.precedence,e));return t.instance}function Fc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function pm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function mm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var zc=null;function ug(e,t,n){if(zc===null){var i=new Map,a=zc=new Map;a.set(n,i)}else a=zc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[Al]||s[fn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function fg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ab(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function xS(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function sb(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Zr(i.href),s=t.querySelector(Ll(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Mu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,rn(s);return}s=t.ownerDocument||t,i=vS(i),(a=gi.get(a))&&pm(i,a),s=s.createElement("link"),rn(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),mn(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Mu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var jf=0;function rb(e,t){return e.stylesheets&&e.count===0&&Gc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Gc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&jf===0&&(jf=62500*GE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>jf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Mu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Eu=null;function Gc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Eu=new Map,t.forEach(ob,e),Eu=null,Mu.call(e))}function ob(e,t){if(!(t.state.loading&4)){var n=Eu.get(e);if(n)var i=n.get(null);else{n=new Map,Eu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Mu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var ml={$$typeof:ea,Provider:null,Consumer:null,_currentValue:Es,_currentValue2:Es,_threadCount:0};function lb(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_f(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_f(0),this.hiddenUpdates=_f(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function SS(e,t,n,i,a,s,r,o,l,c,h,d){return e=new lb(e,t,n,r,l,c,h,d,o),t=1,s===!0&&(t|=24),s=Yn(3,null,null,t),e.current=s,s.stateNode=e,t=Hp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},Xp(s),e}function yS(e){return e?(e=br,e):br}function MS(e,t,n,i,a,s){a=yS(a),i.context===null?i.context=a:i.pendingContext=a,i=Wa(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=qa(e,i,t),n!==null&&(On(n,e,t),Yo(n,e,t))}function hg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gm(e,t){hg(e,t),(e=e.alternate)&&hg(e,t)}function ES(e){if(e.tag===13||e.tag===31){var t=Fs(e,67108864);t!==null&&On(t,e,67108864),gm(e,67108864)}}function dg(e){if(e.tag===13||e.tag===31){var t=$n();t=Rp(t);var n=Fs(e,t);n!==null&&On(n,e,t),gm(e,t)}}var bu=!0;function cb(e,t,n,i){var a=Pt.T;Pt.T=null;var s=ue.p;try{ue.p=2,_m(e,t,n,i)}finally{ue.p=s,Pt.T=a}}function ub(e,t,n,i){var a=Pt.T;Pt.T=null;var s=ue.p;try{ue.p=8,_m(e,t,n,i)}finally{ue.p=s,Pt.T=a}}function _m(e,t,n,i){if(bu){var a=bd(i);if(a===null)qf(e,t,i,Tu,n),pg(e,i);else if(hb(a,e,t,n,i))i.stopPropagation();else if(pg(e,i),t&4&&-1<fb.indexOf(e)){for(;a!==null;){var s=io(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ms(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Jn(r);o.entanglements[1]|=l,r&=~l}Hi(s),!(ce&6)&&(pu=Kn()+500,Ul(0))}}break;case 31:case 13:o=Fs(s,2),o!==null&&On(o,s,2),tf(),gm(s,2)}if(s=bd(i),s===null&&qf(e,t,i,Tu,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else qf(e,t,i,null,n)}}function bd(e){return e=Up(e),vm(e)}var Tu=null;function vm(e){if(Tu=null,e=vr(e),e!==null){var t=Ml(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=k_(t),e!==null)return e;e=null}else if(n===31){if(e=X_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Tu=e,null}function bS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ky()){case j_:return 2;case Z_:return 8;case tu:case Qy:return 32;case K_:return 268435456;default:return 32}default:return 32}}var Td=!1,Za=null,Ka=null,Qa=null,gl=new Map,_l=new Map,Pa=[],fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pg(e,t){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":gl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(t.pointerId)}}function Eo(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=io(t),t!==null&&ES(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function hb(e,t,n,i,a){switch(t){case"focusin":return Za=Eo(Za,e,t,n,i,a),!0;case"dragenter":return Ka=Eo(Ka,e,t,n,i,a),!0;case"mouseover":return Qa=Eo(Qa,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return gl.set(s,Eo(gl.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,_l.set(s,Eo(_l.get(s)||null,e,t,n,i,a)),!0}return!1}function TS(e){var t=vr(e.target);if(t!==null){var n=Ml(t);if(n!==null){if(t=n.tag,t===13){if(t=k_(n),t!==null){e.blockedOn=t,Jm(e.priority,function(){dg(n)});return}}else if(t===31){if(t=X_(n),t!==null){e.blockedOn=t,Jm(e.priority,function(){dg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);kh=i,n.target.dispatchEvent(i),kh=null}else return t=io(n),t!==null&&ES(t),e.blockedOn=n,!1;t.shift()}return!0}function mg(e,t,n){Hc(e)&&n.delete(t)}function db(){Td=!1,Za!==null&&Hc(Za)&&(Za=null),Ka!==null&&Hc(Ka)&&(Ka=null),Qa!==null&&Hc(Qa)&&(Qa=null),gl.forEach(mg),_l.forEach(mg)}function Ql(e,t){e.blockedOn===t&&(e.blockedOn=null,Td||(Td=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,db)))}var Jl=null;function gg(e){Jl!==e&&(Jl=e,$e.unstable_scheduleCallback($e.unstable_NormalPriority,function(){Jl===e&&(Jl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(vm(i||n)===null)continue;break}var s=io(n);s!==null&&(e.splice(t,3),t-=3,sd(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Kr(e){function t(l){return Ql(l,e)}Za!==null&&Ql(Za,e),Ka!==null&&Ql(Ka,e),Qa!==null&&Ql(Qa,e),gl.forEach(t),_l.forEach(t);for(var n=0;n<Pa.length;n++){var i=Pa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Pa.length&&(n=Pa[0],n.blockedOn===null);)TS(n),n.blockedOn===null&&Pa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Bn]||null;if(typeof s=="function")r||gg(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Bn]||null)o=r.formAction;else if(vm(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),gg(n)}}}function AS(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function xm(e){this._internalRoot=e}af.prototype.render=xm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));var n=t.current,i=$n();MS(n,i,e,t,null,null)};af.prototype.unmount=xm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;MS(e.current,2,null,e,null,null),tf(),t[no]=null}};function af(e){this._internalRoot=e}af.prototype.unstable_scheduleHydration=function(e){if(e){var t=ev();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pa.length&&t!==0&&t<Pa[n].priority;n++);Pa.splice(n,0,e),n===0&&TS(e)}};var _g=H_.version;if(_g!=="19.2.5")throw Error($(527,_g,"19.2.5"));ue.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=ky(t),e=e!==null?W_(e):null,e=e===null?null:e.stateNode,e};var pb={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:Pt,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{El=$l.inject(pb),Qn=$l}catch{}}Gu.createRoot=function(e,t){if(!V_(e))throw Error($(299));var n=!1,i="",a=_x,s=vx,r=xx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=SS(e,1,!1,null,null,n,i,null,a,s,r,AS),e[no]=t.current,dm(e),new xm(t)};Gu.hydrateRoot=function(e,t,n){if(!V_(e))throw Error($(299));var i=!1,a="",s=_x,r=vx,o=xx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=SS(e,1,!0,t,n??null,i,a,l,s,r,o,AS),t.context=yS(null),n=t.current,i=$n(),i=Rp(i),a=Wa(i),a.callback=null,qa(n,a,i),n=i,t.current.lanes=n,Tl(t,n),Hi(t),e[no]=t.current,dm(e),new af(t)};Gu.version="19.2.5";function RS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(RS)}catch(e){console.error(e)}}RS(),P_.exports=Gu;var mb=P_.exports;const gb=vy(mb);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sm="184",_b=0,vg=1,vb=2,Vc=1,xb=2,Go=3,as=0,Pn=1,ta=2,la=0,Fr=1,wr=2,xg=3,Sg=4,Sb=5,xs=100,yb=101,Mb=102,Eb=103,bb=104,Tb=200,Ab=201,Rb=202,wb=203,Ad=204,Rd=205,Cb=206,Db=207,Ub=208,Lb=209,Nb=210,Ob=211,Pb=212,Bb=213,Ib=214,wd=0,Cd=1,Dd=2,Qr=3,Ud=4,Ld=5,Nd=6,Od=7,wS=0,Fb=1,zb=2,Ii=0,CS=1,DS=2,US=3,LS=4,NS=5,OS=6,PS=7,BS=300,Ns=301,Jr=302,Zf=303,Kf=304,sf=306,Pd=1e3,aa=1001,Bd=1002,pn=1003,Gb=1004,tc=1005,on=1006,Qf=1007,ys=1008,jn=1009,IS=1010,FS=1011,vl=1012,ym=1013,zi=1014,Oi=1015,_a=1016,Mm=1017,Em=1018,xl=1020,zS=35902,GS=35899,HS=1021,VS=1022,Ei=1023,va=1026,Ms=1027,kS=1028,bm=1029,Os=1030,Tm=1031,Am=1033,kc=33776,Xc=33777,Wc=33778,qc=33779,Id=35840,Fd=35841,zd=35842,Gd=35843,Hd=36196,Vd=37492,kd=37496,Xd=37488,Wd=37489,Au=37490,qd=37491,Yd=37808,jd=37809,Zd=37810,Kd=37811,Qd=37812,Jd=37813,$d=37814,tp=37815,ep=37816,np=37817,ip=37818,ap=37819,sp=37820,rp=37821,op=36492,lp=36494,cp=36495,up=36283,fp=36284,Ru=36285,hp=36286,Hb=3200,dp=0,Vb=1,Ba="",si="srgb",wu="srgb-linear",Cu="linear",pe="srgb",js=7680,yg=519,kb=512,Xb=513,Wb=514,Rm=515,qb=516,Yb=517,wm=518,jb=519,pp=35044,Mg="300 es",Pi=2e3,Sl=2001;function Zb(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Du(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Kb(){const e=Du("canvas");return e.style.display="block",e}const Eg={};function Uu(...e){const t="THREE."+e.shift();console.log(t,...e)}function XS(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ot(...e){e=XS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function se(...e){e=XS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function mp(...e){const t=e.join(" ");t in Eg||(Eg[t]=!0,Ot(...e))}function Qb(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Jb={[wd]:Cd,[Dd]:Nd,[Ud]:Od,[Qr]:Ld,[Cd]:wd,[Nd]:Dd,[Od]:Ud,[Ld]:Qr};class Gs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bg=1234567;const nl=Math.PI/180,yl=180/Math.PI;function ca(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[e&255]+xn[e>>8&255]+xn[e>>16&255]+xn[e>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function ie(e,t,n){return Math.max(t,Math.min(n,e))}function Cm(e,t){return(e%t+t)%t}function $b(e,t,n,i,a){return i+(e-t)*(a-i)/(n-t)}function t1(e,t,n){return e!==t?(n-e)/(t-e):0}function il(e,t,n){return(1-n)*e+n*t}function e1(e,t,n,i){return il(e,t,1-Math.exp(-n*i))}function n1(e,t=1){return t-Math.abs(Cm(e,t*2)-t)}function i1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function a1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function s1(e,t){return e+Math.floor(Math.random()*(t-e+1))}function r1(e,t){return e+Math.random()*(t-e)}function o1(e){return e*(.5-Math.random())}function l1(e){e!==void 0&&(bg=e);let t=bg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function c1(e){return e*nl}function u1(e){return e*yl}function f1(e){return(e&e-1)===0&&e!==0}function h1(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function d1(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function p1(e,t,n,i,a){const s=Math.cos,r=Math.sin,o=s(n/2),l=r(n/2),c=s((t+i)/2),h=r((t+i)/2),d=s((t-i)/2),u=r((t-i)/2),p=s((i-t)/2),v=r((i-t)/2);switch(a){case"XYX":e.set(o*h,l*d,l*u,o*c);break;case"YZY":e.set(l*u,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*u,o*h,o*c);break;case"XZX":e.set(o*h,l*v,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*v,o*c);break;case"ZYZ":e.set(l*v,l*p,o*h,o*c);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Mi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ge(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const Zs={DEG2RAD:nl,RAD2DEG:yl,generateUUID:ca,clamp:ie,euclideanModulo:Cm,mapLinear:$b,inverseLerp:t1,lerp:il,damp:e1,pingpong:n1,smoothstep:i1,smootherstep:a1,randInt:s1,randFloat:r1,randFloatSpread:o1,seededRandom:l1,degToRad:c1,radToDeg:u1,isPowerOfTwo:f1,ceilPowerOfTwo:h1,floorPowerOfTwo:d1,setQuaternionFromProperEuler:p1,normalize:ge,denormalize:Mi},Fm=class Fm{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fm.prototype.isVector2=!0;let Ht=Fm;class co{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],d=i[a+3],u=s[r+0],p=s[r+1],v=s[r+2],E=s[r+3];if(d!==E||l!==u||c!==p||h!==v){let g=l*u+c*p+h*v+d*E;g<0&&(u=-u,p=-p,v=-v,E=-E,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),_=Math.sin(m);f=Math.sin(f*m)/_,o=Math.sin(o*m)/_,l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,d=d*f+E*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+v*o,d=d*f+E*o;const m=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=m,c*=m,h*=m,d*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],d=s[r],u=s[r+1],p=s[r+2],v=s[r+3];return t[n]=o*v+h*d+l*p-c*u,t[n+1]=l*v+h*u+c*d-o*p,t[n+2]=c*v+h*p+o*u-l*d,t[n+3]=h*v-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),d=o(s/2),u=l(i/2),p=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"YXZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"ZXY":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"ZYX":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"YZX":this._x=u*h*d+c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d-u*p*v;break;case"XZY":this._x=u*h*d-c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d+u*p*v;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zm=class zm{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Tg.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Tg.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),h=2*(o*n-s*a),d=2*(s*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-s*d,this.z=a+l*d+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this.z=ie(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this.z=ie(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Jf.copy(this).projectOnVector(t),this.sub(Jf)}reflect(t){return this.sub(Jf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zm.prototype.isVector3=!0;let O=zm;const Jf=new O,Tg=new co,Gm=class Gm{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],v=i[8],E=a[0],g=a[3],f=a[6],m=a[1],_=a[4],S=a[7],w=a[2],b=a[5],R=a[8];return s[0]=r*E+o*m+l*w,s[3]=r*g+o*_+l*b,s[6]=r*f+o*S+l*R,s[1]=c*E+h*m+d*w,s[4]=c*g+h*_+d*b,s[7]=c*f+h*S+d*R,s[2]=u*E+p*m+v*w,s[5]=u*g+p*_+v*b,s[8]=u*f+p*S+v*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*s,p=c*s-r*l,v=n*d+i*u+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return t[0]=d*E,t[1]=(a*c-h*i)*E,t[2]=(o*i-a*r)*E,t[3]=u*E,t[4]=(h*n-a*l)*E,t[5]=(a*s-o*n)*E,t[6]=p*E,t[7]=(i*l-c*n)*E,t[8]=(r*n-i*s)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply($f.makeScale(t,n)),this}rotate(t){return this.premultiply($f.makeRotation(-t)),this}translate(t,n){return this.premultiply($f.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gm.prototype.isMatrix3=!0;let Gt=Gm;const $f=new Gt,Ag=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rg=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m1(){const e={enabled:!0,workingColorSpace:wu,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===pe&&(a.r=ua(a.r),a.g=ua(a.g),a.b=ua(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pe&&(a.r=zr(a.r),a.g=zr(a.g),a.b=zr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ba?Cu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return mp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return mp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[wu]:{primaries:t,whitePoint:i,transfer:Cu,toXYZ:Ag,fromXYZ:Rg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:Ag,fromXYZ:Rg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),e}const re=m1();function ua(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function zr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Ks;class g1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ks===void 0&&(Ks=Du("canvas")),Ks.width=t.width,Ks.height=t.height;const a=Ks.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Ks}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Du("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=ua(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ua(n[i]/255)*255):n[i]=ua(n[i]);return{data:n,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _1=0;class Dm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_1++}),this.uuid=ca(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(th(a[r].image)):s.push(th(a[r]))}else s=th(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function th(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?g1.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}let v1=0;const eh=new O;class Mn extends Gs{constructor(t=Mn.DEFAULT_IMAGE,n=Mn.DEFAULT_MAPPING,i=aa,a=aa,s=on,r=ys,o=Ei,l=jn,c=Mn.DEFAULT_ANISOTROPY,h=Ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=ca(),this.name="",this.source=new Dm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ot(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==BS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pd:t.x=t.x-Math.floor(t.x);break;case aa:t.x=t.x<0?0:1;break;case Bd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pd:t.y=t.y-Math.floor(t.y);break;case aa:t.y=t.y<0?0:1;break;case Bd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=BS;Mn.DEFAULT_ANISOTROPY=1;const Hm=class Hm{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],v=l[9],E=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+E)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(p+1)/2,w=(f+1)/2,b=(h+u)/4,R=(d+E)/4,x=(v+g)/4;return _>S&&_>w?_<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(_),a=b/i,s=R/i):S>w?S<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(S),i=b/a,s=x/a):w<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(w),i=R/s,a=x/s),this.set(i,a,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(d-E)*(d-E)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(d-E)/m,this.z=(u-h)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ie(this.x,t.x,n.x),this.y=ie(this.y,t.y,n.y),this.z=ie(this.z,t.z,n.z),this.w=ie(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ie(this.x,t,n),this.y=ie(this.y,t,n),this.z=ie(this.z,t,n),this.w=ie(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hm.prototype.isVector4=!0;let He=Hm;class x1 extends Gs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new He(0,0,t,n),this.scissorTest=!1,this.viewport=new He(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new Mn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new Dm(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends x1{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class WS extends Mn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=pn,this.minFilter=pn,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class S1 extends Mn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=pn,this.minFilter=pn,this.wrapR=aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fu=class Fu{constructor(t,n,i,a,s,r,o,l,c,h,d,u,p,v,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,h,d,u,p,v,E,g)}set(t,n,i,a,s,r,o,l,c,h,d,u,p,v,E,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=v,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fu().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,a=1/Qs.setFromMatrixColumn(t,0).length(),s=1/Qs.setFromMatrixColumn(t,1).length(),r=1/Qs.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=r*h,p=r*d,v=o*h,E=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=u-E*c,n[9]=-o*l,n[2]=E-u*c,n[6]=v+p*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,v=c*h,E=c*d;n[0]=u+E*o,n[4]=v*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-v,n[6]=E+u*o,n[10]=r*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,v=c*h,E=c*d;n[0]=u-E*o,n[4]=-r*d,n[8]=v+p*o,n[1]=p+v*o,n[5]=r*h,n[9]=E-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const u=r*h,p=r*d,v=o*h,E=o*d;n[0]=l*h,n[4]=v*c-p,n[8]=u*c+E,n[1]=l*d,n[5]=E*c+u,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,v=o*l,E=o*c;n[0]=l*h,n[4]=E-u*d,n[8]=v*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+v,n[10]=u-E*d}else if(t.order==="XZY"){const u=r*l,p=r*c,v=o*l,E=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+E,n[5]=r*h,n[9]=p*d-v,n[2]=v*d-p,n[6]=o*h,n[10]=E*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(y1,t,M1)}lookAt(t,n,i){const a=this.elements;return Vn.subVectors(t,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ba.crossVectors(i,Vn),ba.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ba.crossVectors(i,Vn)),ba.normalize(),ec.crossVectors(Vn,ba),a[0]=ba.x,a[4]=ec.x,a[8]=Vn.x,a[1]=ba.y,a[5]=ec.y,a[9]=Vn.y,a[2]=ba.z,a[6]=ec.z,a[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],v=i[2],E=i[6],g=i[10],f=i[14],m=i[3],_=i[7],S=i[11],w=i[15],b=a[0],R=a[4],x=a[8],A=a[12],D=a[1],U=a[5],z=a[9],Y=a[13],nt=a[2],I=a[6],N=a[10],P=a[14],W=a[3],tt=a[7],ot=a[11],Et=a[15];return s[0]=r*b+o*D+l*nt+c*W,s[4]=r*R+o*U+l*I+c*tt,s[8]=r*x+o*z+l*N+c*ot,s[12]=r*A+o*Y+l*P+c*Et,s[1]=h*b+d*D+u*nt+p*W,s[5]=h*R+d*U+u*I+p*tt,s[9]=h*x+d*z+u*N+p*ot,s[13]=h*A+d*Y+u*P+p*Et,s[2]=v*b+E*D+g*nt+f*W,s[6]=v*R+E*U+g*I+f*tt,s[10]=v*x+E*z+g*N+f*ot,s[14]=v*A+E*Y+g*P+f*Et,s[3]=m*b+_*D+S*nt+w*W,s[7]=m*R+_*U+S*I+w*tt,s[11]=m*x+_*z+S*N+w*ot,s[15]=m*A+_*Y+S*P+w*Et,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],v=t[3],E=t[7],g=t[11],f=t[15],m=l*p-c*u,_=o*p-c*d,S=o*u-l*d,w=r*p-c*h,b=r*u-l*h,R=r*d-o*h;return n*(E*m-g*_+f*S)-i*(v*m-g*w+f*b)+a*(v*_-E*w+f*R)-s*(v*S-E*b+g*R)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],v=t[12],E=t[13],g=t[14],f=t[15],m=n*o-i*r,_=n*l-a*r,S=n*c-s*r,w=i*l-a*o,b=i*c-s*o,R=a*c-s*l,x=h*E-d*v,A=h*g-u*v,D=h*f-p*v,U=d*g-u*E,z=d*f-p*E,Y=u*f-p*g,nt=m*Y-_*z+S*U+w*D-b*A+R*x;if(nt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/nt;return t[0]=(o*Y-l*z+c*U)*I,t[1]=(a*z-i*Y-s*U)*I,t[2]=(E*R-g*b+f*w)*I,t[3]=(u*b-d*R-p*w)*I,t[4]=(l*D-r*Y-c*A)*I,t[5]=(n*Y-a*D+s*A)*I,t[6]=(g*S-v*R-f*_)*I,t[7]=(h*R-u*S+p*_)*I,t[8]=(r*z-o*D+c*x)*I,t[9]=(i*D-n*z-s*x)*I,t[10]=(v*b-E*S+f*m)*I,t[11]=(d*S-h*b-p*m)*I,t[12]=(o*A-r*U-l*x)*I,t[13]=(n*U-i*A+a*x)*I,t[14]=(E*_-v*w-g*m)*I,t[15]=(h*w-d*_+u*m)*I,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,h=r+r,d=o+o,u=s*c,p=s*h,v=s*d,E=r*h,g=r*d,f=o*d,m=l*c,_=l*h,S=l*d,w=i.x,b=i.y,R=i.z;return a[0]=(1-(E+f))*w,a[1]=(p+S)*w,a[2]=(v-_)*w,a[3]=0,a[4]=(p-S)*b,a[5]=(1-(u+f))*b,a[6]=(g+m)*b,a[7]=0,a[8]=(v+_)*R,a[9]=(g-m)*R,a[10]=(1-(u+E))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Qs.set(a[0],a[1],a[2]).length();const o=Qs.set(a[4],a[5],a[6]).length(),l=Qs.set(a[8],a[9],a[10]).length();s<0&&(r=-r),vi.copy(this);const c=1/r,h=1/o,d=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,n.setFromRotationMatrix(vi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=Pi,l=!1){const c=this.elements,h=2*s/(n-t),d=2*s/(i-a),u=(n+t)/(n-t),p=(i+a)/(i-a);let v,E;if(l)v=s/(r-s),E=r*s/(r-s);else if(o===Pi)v=-(r+s)/(r-s),E=-2*r*s/(r-s);else if(o===Sl)v=-r/(r-s),E=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Pi,l=!1){const c=this.elements,h=2/(n-t),d=2/(i-a),u=-(n+t)/(n-t),p=-(i+a)/(i-a);let v,E;if(l)v=1/(r-s),E=r/(r-s);else if(o===Pi)v=-2/(r-s),E=-(r+s)/(r-s);else if(o===Sl)v=-1/(r-s),E=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Fu.prototype.isMatrix4=!0;let Be=Fu;const Qs=new O,vi=new Be,y1=new O(0,0,0),M1=new O(1,1,1),ba=new O,ec=new O,Vn=new O,wg=new Be,Cg=new co;class ss{constructor(t=0,n=0,i=0,a=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],u=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ie(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return wg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wg,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Cg.setFromEuler(this),this.setFromQuaternion(Cg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class Um{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let E1=0;const Dg=new O,Js=new co,qi=new Be,nc=new O,bo=new O,b1=new O,T1=new co,Ug=new O(1,0,0),Lg=new O(0,1,0),Ng=new O(0,0,1),Og={type:"added"},A1={type:"removed"},$s={type:"childadded",child:null},nh={type:"childremoved",child:null};class gn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const t=new O,n=new ss,i=new co,a=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Be},normalMatrix:{value:new Gt}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Js.setFromAxisAngle(t,n),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,n){return Js.setFromAxisAngle(t,n),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(Ug,t)}rotateY(t){return this.rotateOnAxis(Lg,t)}rotateZ(t){return this.rotateOnAxis(Ng,t)}translateOnAxis(t,n){return Dg.copy(t).applyQuaternion(this.quaternion),this.position.add(Dg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Ug,t)}translateY(t){return this.translateOnAxis(Lg,t)}translateZ(t){return this.translateOnAxis(Ng,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?nc.copy(t):nc.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(bo,nc,this.up):qi.lookAt(nc,bo,this.up),this.quaternion.setFromRotationMatrix(qi),a&&(qi.extractRotation(a.matrixWorld),Js.setFromRotationMatrix(qi),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Og),$s.child=t,this.dispatchEvent($s),$s.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(A1),nh.child=t,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Og),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,t,b1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,T1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}gn.DEFAULT_UP=new O(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Cr extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R1={type:"move"};class ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const E of t.hand.values()){const g=n.getJointPose(E,i),f=this._getHandJoint(c,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(R1)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Cr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const qS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ta={h:0,s:0,l:0},ic={h:0,s:0,l:0};function ah(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Yt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=re.workingColorSpace){return this.r=t,this.g=n,this.b=i,re.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=re.workingColorSpace){if(t=Cm(t,1),n=ie(n,0,1),i=ie(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=ah(r,s,t+1/3),this.g=ah(r,s,t),this.b=ah(r,s,t-1/3)}return re.colorSpaceToWorking(this,a),this}setStyle(t,n=si){function i(s){s!==void 0&&parseFloat(s)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ot("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=si){const i=qS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return re.workingToColorSpace(Sn.copy(this),t),Math.round(ie(Sn.r*255,0,255))*65536+Math.round(ie(Sn.g*255,0,255))*256+Math.round(ie(Sn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=re.workingColorSpace){re.workingToColorSpace(Sn.copy(this),n);const i=Sn.r,a=Sn.g,s=Sn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-i)/d+2;break;case s:l=(i-a)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=re.workingColorSpace){return re.workingToColorSpace(Sn.copy(this),n),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=si){re.workingToColorSpace(Sn.copy(this),t);const n=Sn.r,i=Sn.g,a=Sn.b;return t!==si?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Ta),this.setHSL(Ta.h+t,Ta.s+n,Ta.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ta),t.getHSL(ic);const i=il(Ta.h,ic.h,n),a=il(Ta.s,ic.s,n),s=il(Ta.l,ic.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Yt;Yt.NAMES=qS;class Lm{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Yt(t),this.density=n}clone(){return new Lm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class w1 extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const xi=new O,Yi=new O,sh=new O,ji=new O,tr=new O,er=new O,Pg=new O,rh=new O,oh=new O,lh=new O,ch=new He,uh=new He,fh=new He;class hi{constructor(t=new O,n=new O,i=new O){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),xi.subVectors(t,n),a.cross(xi);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){xi.subVectors(a,n),Yi.subVectors(i,n),sh.subVectors(t,n);const r=xi.dot(xi),o=xi.dot(Yi),l=xi.dot(sh),c=Yi.dot(Yi),h=Yi.dot(sh),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(c*l-o*h)*u,v=(r*h-o*l)*u;return s.set(1-p-v,v,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ji.x),l.addScaledVector(r,ji.y),l.addScaledVector(o,ji.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return ch.setScalar(0),uh.setScalar(0),fh.setScalar(0),ch.fromBufferAttribute(t,n),uh.fromBufferAttribute(t,i),fh.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(ch,s.x),r.addScaledVector(uh,s.y),r.addScaledVector(fh,s.z),r}static isFrontFacing(t,n,i,a){return xi.subVectors(i,n),Yi.subVectors(t,n),xi.cross(Yi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),xi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return hi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return hi.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;tr.subVectors(a,i),er.subVectors(s,i),rh.subVectors(t,i);const l=tr.dot(rh),c=er.dot(rh);if(l<=0&&c<=0)return n.copy(i);oh.subVectors(t,a);const h=tr.dot(oh),d=er.dot(oh);if(h>=0&&d<=h)return n.copy(a);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(tr,r);lh.subVectors(t,s);const p=tr.dot(lh),v=er.dot(lh);if(v>=0&&p<=v)return n.copy(s);const E=p*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(er,o);const g=h*v-p*d;if(g<=0&&d-h>=0&&p-v>=0)return Pg.subVectors(s,a),o=(d-h)/(d-h+(p-v)),n.copy(a).addScaledVector(Pg,o);const f=1/(g+E+u);return r=E*f,o=u*f,n.copy(i).addScaledVector(tr,r).addScaledVector(er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ol{constructor(t=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Si):Si.fromBufferAttribute(s,r),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ac.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ac.copy(i.boundingBox)),ac.applyMatrix4(t.matrixWorld),this.union(ac)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(To),sc.subVectors(this.max,To),nr.subVectors(t.a,To),ir.subVectors(t.b,To),ar.subVectors(t.c,To),Aa.subVectors(ir,nr),Ra.subVectors(ar,ir),us.subVectors(nr,ar);let n=[0,-Aa.z,Aa.y,0,-Ra.z,Ra.y,0,-us.z,us.y,Aa.z,0,-Aa.x,Ra.z,0,-Ra.x,us.z,0,-us.x,-Aa.y,Aa.x,0,-Ra.y,Ra.x,0,-us.y,us.x,0];return!hh(n,nr,ir,ar,sc)||(n=[1,0,0,0,1,0,0,0,1],!hh(n,nr,ir,ar,sc))?!1:(rc.crossVectors(Aa,Ra),n=[rc.x,rc.y,rc.z],hh(n,nr,ir,ar,sc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Zi=[new O,new O,new O,new O,new O,new O,new O,new O],Si=new O,ac=new Ol,nr=new O,ir=new O,ar=new O,Aa=new O,Ra=new O,us=new O,To=new O,sc=new O,rc=new O,fs=new O;function hh(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){fs.fromArray(e,s);const o=a.x*Math.abs(fs.x)+a.y*Math.abs(fs.y)+a.z*Math.abs(fs.z),l=t.dot(fs),c=n.dot(fs),h=i.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const qe=new O,oc=new Ht;let C1=0;class mi extends Gs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=pp,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)oc.fromBufferAttribute(this,n),oc.applyMatrix3(t),this.setXY(n,oc.x,oc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix3(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyMatrix4(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.applyNormalMatrix(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)qe.fromBufferAttribute(this,n),qe.transformDirection(t),this.setXYZ(n,qe.x,qe.y,qe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ge(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Mi(n,this.array)),n}setX(t,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Mi(n,this.array)),n}setY(t,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Mi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Mi(n,this.array)),n}setW(t,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=ge(n,this.array),i=ge(i,this.array),a=ge(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=ge(n,this.array),i=ge(i,this.array),a=ge(a,this.array),s=ge(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pp&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class YS extends mi{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class jS extends mi{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class _n extends mi{constructor(t,n,i){super(new Float32Array(t),n,i)}}const D1=new Ol,Ao=new O,dh=new O;class rf{constructor(t=new O,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):D1.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Ao,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add(dh)),this.expandByPoint(Ao.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let U1=0;const ii=new Be,ph=new gn,sr=new O,kn=new Ol,Ro=new Ol,an=new O;class Fn extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zb(t)?jS:YS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Gt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,n,i){return ii.makeTranslation(t,n,i),this.applyMatrix4(ii),this}scale(t,n,i){return ii.makeScale(t,n,i),this.applyMatrix4(ii),this}lookAt(t){return ph.lookAt(t),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new _n(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ol);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];kn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];Ro.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(kn.min,Ro.min),kn.expandByPoint(an),an.addVectors(kn.max,Ro.max),kn.expandByPoint(an)):(kn.expandByPoint(Ro.min),kn.expandByPoint(Ro.max))}kn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)an.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(an));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)an.fromBufferAttribute(o,c),l&&(sr.fromBufferAttribute(t,c),an.add(sr)),a=Math.max(a,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new O,l[x]=new O;const c=new O,h=new O,d=new O,u=new Ht,p=new Ht,v=new Ht,E=new O,g=new O;function f(x,A,D){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,D),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,A),v.fromBufferAttribute(s,D),h.sub(c),d.sub(c),p.sub(u),v.sub(u);const U=1/(p.x*v.y-v.x*p.y);isFinite(U)&&(E.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(U),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(U),o[x].add(E),o[A].add(E),o[D].add(E),l[x].add(g),l[A].add(g),l[D].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let x=0,A=m.length;x<A;++x){const D=m[x],U=D.start,z=D.count;for(let Y=U,nt=U+z;Y<nt;Y+=3)f(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const _=new O,S=new O,w=new O,b=new O;function R(x){w.fromBufferAttribute(a,x),b.copy(w);const A=o[x];_.copy(A),_.sub(w.multiplyScalar(w.dot(A))).normalize(),S.crossVectors(b,A);const U=S.dot(l[x])<0?-1:1;r.setXYZW(x,_.x,_.y,_.z,U)}for(let x=0,A=m.length;x<A;++x){const D=m[x],U=D.start,z=D.count;for(let Y=U,nt=U+z;Y<nt;Y+=3)R(t.getX(Y+0)),R(t.getX(Y+1)),R(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const a=new O,s=new O,r=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,p=t.count;u<p;u+=3){const v=t.getX(u+0),E=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),r.fromBufferAttribute(n,g),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)an.fromBufferAttribute(t,n),an.normalize(),t.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,v=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*h;for(let f=0;f<h;f++)u[v++]=c[p++]}return new mi(u,h,d)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class L1{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=pp,this.updateRanges=[],this.version=0,this.uuid=ca()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let a=0,s=this.stride;a<s;a++)this.array[t+a]=n.array[i+a];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ca()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ca()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new O;class Lu{constructor(t,n,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix4(t),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)bn.fromBufferAttribute(this,n),bn.applyNormalMatrix(t),this.setXYZ(n,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)bn.fromBufferAttribute(this,n),bn.transformDirection(t),this.setXYZ(n,bn.x,bn.y,bn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ge(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Mi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Mi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Mi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Mi(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=ge(n,this.array),i=ge(i,this.array),a=ge(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=ge(n,this.array),i=ge(i,this.array),a=ge(a,this.array),s=ge(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Uu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return new mi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Lu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Uu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let N1=0;class Hs extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=Fr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Ot(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(i.blending=this.blending),this.side!==as&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Yc extends Hs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let rr;const wo=new O,or=new O,lr=new O,cr=new Ht,Co=new Ht,ZS=new Be,lc=new O,Do=new O,cc=new O,Bg=new Ht,mh=new Ht,Ig=new Ht;class gh extends gn{constructor(t=new Yc){if(super(),this.isSprite=!0,this.type="Sprite",rr===void 0){rr=new Fn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new L1(n,5);rr.setIndex([0,1,2,0,2,3]),rr.setAttribute("position",new Lu(i,3,0,!1)),rr.setAttribute("uv",new Lu(i,2,3,!1))}this.geometry=rr,this.material=t,this.center=new Ht(.5,.5),this.count=1}raycast(t,n){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),ZS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-lr.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const r=this.center;uc(lc.set(-.5,-.5,0),lr,r,or,a,s),uc(Do.set(.5,-.5,0),lr,r,or,a,s),uc(cc.set(.5,.5,0),lr,r,or,a,s),Bg.set(0,0),mh.set(1,0),Ig.set(1,1);let o=t.ray.intersectTriangle(lc,Do,cc,!1,wo);if(o===null&&(uc(Do.set(-.5,.5,0),lr,r,or,a,s),mh.set(0,1),o=t.ray.intersectTriangle(lc,cc,Do,!1,wo),o===null))return;const l=t.ray.origin.distanceTo(wo);l<t.near||l>t.far||n.push({distance:l,point:wo.clone(),uv:hi.getInterpolation(wo,lc,Do,cc,Bg,mh,Ig,new Ht),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function uc(e,t,n,i,a,s){cr.subVectors(e,n).addScalar(.5).multiply(i),a!==void 0?(Co.x=s*cr.x-a*cr.y,Co.y=a*cr.x+s*cr.y):Co.copy(cr),e.copy(t),e.x+=Co.x,e.y+=Co.y,e.applyMatrix4(ZS)}const Ki=new O,_h=new O,fc=new O,wa=new O,vh=new O,hc=new O,xh=new O;class Nm{constructor(t=new O,n=new O(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ki.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,n),Ki.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){_h.copy(t).add(n).multiplyScalar(.5),fc.copy(n).sub(t).normalize(),wa.copy(this.origin).sub(_h);const s=t.distanceTo(n)*.5,r=-this.direction.dot(fc),o=wa.dot(this.direction),l=-wa.dot(fc),c=wa.lengthSq(),h=Math.abs(1-r*r);let d,u,p,v;if(h>0)if(d=r*l-o,u=r*o-l,v=s*h,d>=0)if(u>=-v)if(u<=v){const E=1/h;d*=E,u*=E,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(_h).addScaledVector(fc,u),p}intersectSphere(t,n){Ki.subVectors(t.center,this.origin);const i=Ki.dot(this.direction),a=Ki.dot(Ki)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,n,i,a,s){vh.subVectors(n,t),hc.subVectors(i,t),xh.crossVectors(vh,hc);let r=this.direction.dot(xh),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;wa.subVectors(this.origin,t);const l=o*this.direction.dot(hc.crossVectors(wa,hc));if(l<0)return null;const c=o*this.direction.dot(vh.cross(wa));if(c<0||l+c>r)return null;const h=-o*wa.dot(xh);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nu extends Hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=wS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fg=new Be,hs=new Nm,dc=new rf,zg=new O,pc=new O,mc=new O,gc=new O,Sh=new O,_c=new O,Gg=new O,vc=new O;class yn extends gn{constructor(t=new Fn,n=new Nu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){_c.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Sh.fromBufferAttribute(d,t),r?_c.addScaledVector(Sh,h):_c.addScaledVector(Sh.sub(n),h))}n.add(_c)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dc.copy(i.boundingSphere),dc.applyMatrix4(s),hs.copy(t.ray).recast(t.near),!(dc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(dc,zg)===null||hs.origin.distanceToSquared(zg)>(t.far-t.near)**2))&&(Fg.copy(s).invert(),hs.copy(t.ray).applyMatrix4(Fg),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,hs)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,E=u.length;v<E;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,w=_;S<w;S+=3){const b=o.getX(S),R=o.getX(S+1),x=o.getX(S+2);a=xc(this,f,t,i,c,h,d,b,R,x),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let g=v,f=E;g<f;g+=3){const m=o.getX(g),_=o.getX(g+1),S=o.getX(g+2);a=xc(this,r,t,i,c,h,d,m,_,S),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,E=u.length;v<E;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=m,w=_;S<w;S+=3){const b=S,R=S+1,x=S+2;a=xc(this,f,t,i,c,h,d,b,R,x),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let g=v,f=E;g<f;g+=3){const m=g,_=g+1,S=g+2;a=xc(this,r,t,i,c,h,d,m,_,S),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function O1(e,t,n,i,a,s,r,o){let l;if(t.side===Pn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===as,o),l===null)return null;vc.copy(o),vc.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(vc);return c<n.near||c>n.far?null:{distance:c,point:vc.clone(),object:e}}function xc(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,pc),e.getVertexPosition(l,mc),e.getVertexPosition(c,gc);const h=O1(e,t,n,i,pc,mc,gc,Gg);if(h){const d=new O;hi.getBarycoord(Gg,pc,mc,gc,d),a&&(h.uv=hi.getInterpolatedAttribute(a,o,l,c,d,new Ht)),s&&(h.uv1=hi.getInterpolatedAttribute(s,o,l,c,d,new Ht)),r&&(h.normal=hi.getInterpolatedAttribute(r,o,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};hi.getNormal(pc,mc,gc,u.normal),h.face=u,h.barycoord=d}return h}class P1 extends Mn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=pn,h=pn,d,u){super(null,r,o,l,c,h,a,s,d,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yh=new O,B1=new O,I1=new Gt;class vs{constructor(t=new O(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=yh.subVectors(i,n).cross(B1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta(yh),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||I1.getNormalMatrix(t),a=this.coplanarPoint(yh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new rf,F1=new Ht(.5,.5),Sc=new O;class Om{constructor(t=new vs,n=new vs,i=new vs,a=new vs,s=new vs,r=new vs){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Pi,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],p=s[7],v=s[8],E=s[9],g=s[10],f=s[11],m=s[12],_=s[13],S=s[14],w=s[15];if(a[0].setComponents(c-r,p-h,f-v,w-m).normalize(),a[1].setComponents(c+r,p+h,f+v,w+m).normalize(),a[2].setComponents(c+o,p+d,f+E,w+_).normalize(),a[3].setComponents(c-o,p-d,f-E,w-_).normalize(),i)a[4].setComponents(l,u,g,S).normalize(),a[5].setComponents(c-l,p-u,f-g,w-S).normalize();else if(a[4].setComponents(c-l,p-u,f-g,w-S).normalize(),n===Pi)a[5].setComponents(c+l,p+u,f+g,w+S).normalize();else if(n===Sl)a[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){ds.center.set(0,0,0);const n=F1.distanceTo(t.center);return ds.radius=.7071067811865476+n,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Sc.x=a.normal.x>0?t.max.x:t.min.x,Sc.y=a.normal.y>0?t.max.y:t.min.y,Sc.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class z1 extends Hs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ou=new O,Pu=new O,Hg=new Be,Uo=new Nm,yc=new rf,Mh=new O,Vg=new O;class G1 extends gn{constructor(t=new Fn,n=new z1){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)Ou.fromBufferAttribute(n,a-1),Pu.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=Ou.distanceTo(Pu);t.setAttribute("lineDistance",new _n(i,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(a),yc.radius+=s,t.ray.intersectsSphere(yc)===!1)return;Hg.copy(a).invert(),Uo.copy(t.ray).applyMatrix4(Hg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,r.start),v=Math.min(h.count,r.start+r.count);for(let E=p,g=v-1;E<g;E+=c){const f=h.getX(E),m=h.getX(E+1),_=Mc(this,t,Uo,l,f,m,E);_&&n.push(_)}if(this.isLineLoop){const E=h.getX(v-1),g=h.getX(p),f=Mc(this,t,Uo,l,E,g,v-1);f&&n.push(f)}}else{const p=Math.max(0,r.start),v=Math.min(u.count,r.start+r.count);for(let E=p,g=v-1;E<g;E+=c){const f=Mc(this,t,Uo,l,E,E+1,E);f&&n.push(f)}if(this.isLineLoop){const E=Mc(this,t,Uo,l,v-1,p,v-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Mc(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(Ou.fromBufferAttribute(o,a),Pu.fromBufferAttribute(o,s),n.distanceSqToSegment(Ou,Pu,Mh,Vg)>i)return;Mh.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Mh);if(!(c<t.near||c>t.far))return{distance:c,point:Vg.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}class KS extends Mn{constructor(t=[],n=Ns,i,a,s,r,o,l,c,h){super(t,n,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kg extends Mn{constructor(t,n,i,a,s,r,o,l,c){super(t,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $r extends Mn{constructor(t,n,i=zi,a,s,r,o=pn,l=pn,c,h=va,d=1){if(h!==va&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:d};super(u,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class H1 extends $r{constructor(t,n=zi,i=Ns,a,s,r=pn,o=pn,l,c=va){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,a,s,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class QS extends Mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ja extends Fn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,t,r,s,0),v("z","y","x",1,-1,i,n,-t,r,s,1),v("x","z","y",1,1,t,i,n,a,r,2),v("x","z","y",1,-1,t,i,-n,a,r,3),v("x","y","z",1,-1,t,n,i,a,s,4),v("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(h,3)),this.setAttribute("uv",new _n(d,2));function v(E,g,f,m,_,S,w,b,R,x,A){const D=S/R,U=w/x,z=S/2,Y=w/2,nt=b/2,I=R+1,N=x+1;let P=0,W=0;const tt=new O;for(let ot=0;ot<N;ot++){const Et=ot*U-Y;for(let ct=0;ct<I;ct++){const Bt=ct*D-z;tt[E]=Bt*m,tt[g]=Et*_,tt[f]=nt,c.push(tt.x,tt.y,tt.z),tt[E]=0,tt[g]=0,tt[f]=b>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(ct/R),d.push(1-ot/x),P+=1}}for(let ot=0;ot<x;ot++)for(let Et=0;Et<R;Et++){const ct=u+Et+I*ot,Bt=u+Et+I*(ot+1),jt=u+(Et+1)+I*(ot+1),Ut=u+(Et+1)+I*ot;l.push(ct,Bt,Ut),l.push(Bt,jt,Ut),W+=6}o.addGroup(p,W,A),p+=W,u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Pm extends Fn{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),h(),this.setAttribute("position",new _n(s,3)),this.setAttribute("normal",new _n(s.slice(),3)),this.setAttribute("uv",new _n(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const _=new O,S=new O,w=new O;for(let b=0;b<n.length;b+=3)p(n[b+0],_),p(n[b+1],S),p(n[b+2],w),l(_,S,w,m)}function l(m,_,S,w){const b=w+1,R=[];for(let x=0;x<=b;x++){R[x]=[];const A=m.clone().lerp(S,x/b),D=_.clone().lerp(S,x/b),U=b-x;for(let z=0;z<=U;z++)z===0&&x===b?R[x][z]=A:R[x][z]=A.clone().lerp(D,z/U)}for(let x=0;x<b;x++)for(let A=0;A<2*(b-x)-1;A++){const D=Math.floor(A/2);A%2===0?(u(R[x][D+1]),u(R[x+1][D]),u(R[x][D])):(u(R[x][D+1]),u(R[x+1][D+1]),u(R[x+1][D]))}}function c(m){const _=new O;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(m),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function h(){const m=new O;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const S=g(m)/2/Math.PI+.5,w=f(m)/Math.PI+.5;r.push(S,1-w)}v(),d()}function d(){for(let m=0;m<r.length;m+=6){const _=r[m+0],S=r[m+2],w=r[m+4],b=Math.max(_,S,w),R=Math.min(_,S,w);b>.9&&R<.1&&(_<.2&&(r[m+0]+=1),S<.2&&(r[m+2]+=1),w<.2&&(r[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function p(m,_){const S=m*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function v(){const m=new O,_=new O,S=new O,w=new O,b=new Ht,R=new Ht,x=new Ht;for(let A=0,D=0;A<s.length;A+=9,D+=6){m.set(s[A+0],s[A+1],s[A+2]),_.set(s[A+3],s[A+4],s[A+5]),S.set(s[A+6],s[A+7],s[A+8]),b.set(r[D+0],r[D+1]),R.set(r[D+2],r[D+3]),x.set(r[D+4],r[D+5]),w.copy(m).add(_).add(S).divideScalar(3);const U=g(w);E(b,D+0,m,U),E(R,D+2,_,U),E(x,D+4,S,U)}}function E(m,_,S,w){w<0&&m.x===1&&(r[_]=m.x-1),S.x===0&&S.z===0&&(r[_]=w/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pm(t.vertices,t.indices,t.radius,t.detail)}}class Bm extends Pm{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Bm(t.radius,t.detail)}}class Pl extends Fn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,d=t/o,u=n/l,p=[],v=[],E=[],g=[];for(let f=0;f<h;f++){const m=f*u-r;for(let _=0;_<c;_++){const S=_*d-s;v.push(S,-m,0),E.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const _=m+c*f,S=m+c*(f+1),w=m+1+c*(f+1),b=m+1+c*f;p.push(_,S,b),p.push(S,w,b)}this.setIndex(p),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(E,3)),this.setAttribute("uv",new _n(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bu extends Fn{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new O,u=new O,p=[],v=[],E=[],g=[];for(let f=0;f<=i;f++){const m=[],_=f/i;let S=0;f===0&&r===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let w=0;w<=n;w++){const b=w/n;d.x=-t*Math.cos(a+b*s)*Math.sin(r+_*o),d.y=t*Math.cos(r+_*o),d.z=t*Math.sin(a+b*s)*Math.sin(r+_*o),v.push(d.x,d.y,d.z),u.copy(d).normalize(),E.push(u.x,u.y,u.z),g.push(b+S,1-_),m.push(c++)}h.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const _=h[f][m+1],S=h[f][m],w=h[f+1][m],b=h[f+1][m+1];(f!==0||r>0)&&p.push(_,S,b),(f!==i-1||l<Math.PI)&&p.push(S,w,b)}this.setIndex(p),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(E,3)),this.setAttribute("uv",new _n(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function to(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(Xg(a))a.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(Xg(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function Tn(e){const t={};for(let n=0;n<e.length;n++){const i=to(e[n]);for(const a in i)t[a]=i[a]}return t}function Xg(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function V1(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function JS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const k1={clone:to,merge:Tn};var X1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X1,this.fragmentShader=W1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=V1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class q1 extends bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lo extends Hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dp,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Y1 extends Hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class j1 extends Hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $S extends gn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Z1 extends $S{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const Eh=new Be,Wg=new O,qg=new O;class K1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Om,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Wg.setFromMatrixPosition(t.matrixWorld),n.position.copy(Wg),qg.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(qg),n.updateMatrixWorld(),Eh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Sl||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Eh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ec=new O,bc=new co,wi=new O;class ty extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ec,bc,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ec,bc,wi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Ec,bc,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ec,bc,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ca=new O,Yg=new Ht,jg=new Ht;class qn extends ty{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=yl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yl*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ca.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ca.x,Ca.y).multiplyScalar(-t/Ca.z),Ca.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ca.x,Ca.y).multiplyScalar(-t/Ca.z)}getViewSize(t,n){return this.getViewBounds(t,Yg,jg),n.subVectors(jg,Yg)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(nl*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Q1 extends K1{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class Zg extends $S{constructor(t,n,i=0,a=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new Q1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class ey extends ty{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ur=-90,fr=1;class J1 extends gn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(ur,fr,t,n);a.layers=this.layers,this.add(a);const s=new qn(ur,fr,t,n);s.layers=this.layers,this.add(s);const r=new qn(ur,fr,t,n);r.layers=this.layers,this.add(r);const o=new qn(ur,fr,t,n);o.layers=this.layers,this.add(o);const l=new qn(ur,fr,t,n);l.layers=this.layers,this.add(l);const c=new qn(ur,fr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,u,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class $1 extends qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Kg=new Be;class Qg{constructor(t,n,i=0,a=1/0){this.ray=new Nm(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new Um,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):se("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Kg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kg),this}intersectObject(t,n=!0,i=[]){return gp(t,this,i,n),i.sort(Jg),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)gp(t[a],this,i,n);return i.sort(Jg),i}}function Jg(e,t){return e.distance-t.distance}function gp(e,t,n,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&i===!0){const s=e.children;for(let r=0,o=s.length;r<o;r++)gp(s[r],t,n,!0)}}const Vm=class Vm{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};Vm.prototype.isMatrix2=!0;let $g=Vm;function t_(e,t,n,i){const a=tT(i);switch(n){case HS:return e*t;case kS:return e*t/a.components*a.byteLength;case bm:return e*t/a.components*a.byteLength;case Os:return e*t*2/a.components*a.byteLength;case Tm:return e*t*2/a.components*a.byteLength;case VS:return e*t*3/a.components*a.byteLength;case Ei:return e*t*4/a.components*a.byteLength;case Am:return e*t*4/a.components*a.byteLength;case kc:case Xc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Wc:case qc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Fd:case Gd:return Math.max(e,16)*Math.max(t,8)/4;case Id:case zd:return Math.max(e,8)*Math.max(t,8)/2;case Hd:case Vd:case Xd:case Wd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case kd:case Au:case qd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case jd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Zd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Kd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case $d:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case tp:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ep:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case np:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ip:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ap:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case sp:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case rp:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case op:case lp:case cp:return Math.ceil(e/4)*Math.ceil(t/4)*16;case up:case fp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ru:case hp:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tT(e){switch(e){case jn:case IS:return{byteLength:1,components:1};case vl:case FS:case _a:return{byteLength:2,components:1};case Mm:case Em:return{byteLength:2,components:4};case zi:case ym:case Oi:return{byteLength:4,components:1};case zS:case GS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sm}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ny(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function eT(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<d.length;p++){const v=d[u],E=d[p];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++u,d[u]=E)}d.length=u+1;for(let p=0,v=d.length;p<v;p++){const E=d[p];e.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var nT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iT=`#ifdef USE_ALPHAHASH
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
#endif`,aT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lT=`#ifdef USE_AOMAP
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
#endif`,cT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uT=`#ifdef USE_BATCHING
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
#endif`,fT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mT=`#ifdef USE_IRIDESCENCE
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
#endif`,gT=`#ifdef USE_BUMPMAP
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
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,MT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ET=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,TT=`#define PI 3.141592653589793
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
} // validated`,AT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RT=`vec3 transformedNormal = objectNormal;
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
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LT="gl_FragColor = linearToOutputTexel( gl_FragColor );",NT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OT=`#ifdef USE_ENVMAP
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
#endif`,PT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BT=`#ifdef USE_ENVMAP
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
#endif`,IT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
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
#endif`,zT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kT=`#ifdef USE_GRADIENTMAP
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
}`,XT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jT=`#ifdef USE_ENVMAP
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
#endif`,ZT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$T=`PhysicalMaterial material;
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
#endif`,tA=`uniform sampler2D dfgLUT;
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
}`,eA=`
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
#endif`,nA=`#if defined( RE_IndirectDiffuse )
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
#endif`,iA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aA=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,sA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hA=`#if defined( USE_POINTS_UV )
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
#endif`,dA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_A=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vA=`#ifdef USE_MORPHTARGETS
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
#endif`,xA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,MA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TA=`#ifdef USE_NORMALMAP
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
#endif`,AA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HA=`float getShadowMask() {
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
}`,VA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kA=`#ifdef USE_SKINNING
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
#endif`,XA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WA=`#ifdef USE_SKINNING
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
#endif`,qA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KA=`#ifdef USE_TRANSMISSION
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
#endif`,QA=`#ifdef USE_TRANSMISSION
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
#endif`,JA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i2=`uniform sampler2D t2D;
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
}`,a2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l2=`#include <common>
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
}`,c2=`#if DEPTH_PACKING == 3200
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
}`,u2=`#define DISTANCE
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
}`,f2=`#define DISTANCE
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
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p2=`uniform float scale;
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
}`,m2=`uniform vec3 diffuse;
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
}`,g2=`#include <common>
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
}`,_2=`uniform vec3 diffuse;
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
}`,v2=`#define LAMBERT
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
}`,x2=`#define LAMBERT
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
}`,S2=`#define MATCAP
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
}`,y2=`#define MATCAP
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
}`,M2=`#define NORMAL
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
}`,E2=`#define NORMAL
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
}`,b2=`#define PHONG
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
}`,T2=`#define PHONG
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
}`,A2=`#define STANDARD
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
}`,R2=`#define STANDARD
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
}`,w2=`#define TOON
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
}`,C2=`#define TOON
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
}`,D2=`uniform float size;
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
}`,U2=`uniform vec3 diffuse;
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
}`,L2=`#include <common>
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
}`,N2=`uniform vec3 color;
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
}`,O2=`uniform float rotation;
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
}`,P2=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:nT,alphahash_pars_fragment:iT,alphamap_fragment:aT,alphamap_pars_fragment:sT,alphatest_fragment:rT,alphatest_pars_fragment:oT,aomap_fragment:lT,aomap_pars_fragment:cT,batching_pars_vertex:uT,batching_vertex:fT,begin_vertex:hT,beginnormal_vertex:dT,bsdfs:pT,iridescence_fragment:mT,bumpmap_pars_fragment:gT,clipping_planes_fragment:_T,clipping_planes_pars_fragment:vT,clipping_planes_pars_vertex:xT,clipping_planes_vertex:ST,color_fragment:yT,color_pars_fragment:MT,color_pars_vertex:ET,color_vertex:bT,common:TT,cube_uv_reflection_fragment:AT,defaultnormal_vertex:RT,displacementmap_pars_vertex:wT,displacementmap_vertex:CT,emissivemap_fragment:DT,emissivemap_pars_fragment:UT,colorspace_fragment:LT,colorspace_pars_fragment:NT,envmap_fragment:OT,envmap_common_pars_fragment:PT,envmap_pars_fragment:BT,envmap_pars_vertex:IT,envmap_physical_pars_fragment:jT,envmap_vertex:FT,fog_vertex:zT,fog_pars_vertex:GT,fog_fragment:HT,fog_pars_fragment:VT,gradientmap_pars_fragment:kT,lightmap_pars_fragment:XT,lights_lambert_fragment:WT,lights_lambert_pars_fragment:qT,lights_pars_begin:YT,lights_toon_fragment:ZT,lights_toon_pars_fragment:KT,lights_phong_fragment:QT,lights_phong_pars_fragment:JT,lights_physical_fragment:$T,lights_physical_pars_fragment:tA,lights_fragment_begin:eA,lights_fragment_maps:nA,lights_fragment_end:iA,lightprobes_pars_fragment:aA,logdepthbuf_fragment:sA,logdepthbuf_pars_fragment:rA,logdepthbuf_pars_vertex:oA,logdepthbuf_vertex:lA,map_fragment:cA,map_pars_fragment:uA,map_particle_fragment:fA,map_particle_pars_fragment:hA,metalnessmap_fragment:dA,metalnessmap_pars_fragment:pA,morphinstance_vertex:mA,morphcolor_vertex:gA,morphnormal_vertex:_A,morphtarget_pars_vertex:vA,morphtarget_vertex:xA,normal_fragment_begin:SA,normal_fragment_maps:yA,normal_pars_fragment:MA,normal_pars_vertex:EA,normal_vertex:bA,normalmap_pars_fragment:TA,clearcoat_normal_fragment_begin:AA,clearcoat_normal_fragment_maps:RA,clearcoat_pars_fragment:wA,iridescence_pars_fragment:CA,opaque_fragment:DA,packing:UA,premultiplied_alpha_fragment:LA,project_vertex:NA,dithering_fragment:OA,dithering_pars_fragment:PA,roughnessmap_fragment:BA,roughnessmap_pars_fragment:IA,shadowmap_pars_fragment:FA,shadowmap_pars_vertex:zA,shadowmap_vertex:GA,shadowmask_pars_fragment:HA,skinbase_vertex:VA,skinning_pars_vertex:kA,skinning_vertex:XA,skinnormal_vertex:WA,specularmap_fragment:qA,specularmap_pars_fragment:YA,tonemapping_fragment:jA,tonemapping_pars_fragment:ZA,transmission_fragment:KA,transmission_pars_fragment:QA,uv_pars_fragment:JA,uv_pars_vertex:$A,uv_vertex:t2,worldpos_vertex:e2,background_vert:n2,background_frag:i2,backgroundCube_vert:a2,backgroundCube_frag:s2,cube_vert:r2,cube_frag:o2,depth_vert:l2,depth_frag:c2,distance_vert:u2,distance_frag:f2,equirect_vert:h2,equirect_frag:d2,linedashed_vert:p2,linedashed_frag:m2,meshbasic_vert:g2,meshbasic_frag:_2,meshlambert_vert:v2,meshlambert_frag:x2,meshmatcap_vert:S2,meshmatcap_frag:y2,meshnormal_vert:M2,meshnormal_frag:E2,meshphong_vert:b2,meshphong_frag:T2,meshphysical_vert:A2,meshphysical_frag:R2,meshtoon_vert:w2,meshtoon_frag:C2,points_vert:D2,points_frag:U2,shadow_vert:L2,shadow_frag:N2,sprite_vert:O2,sprite_frag:P2},vt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Di={basic:{uniforms:Tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Tn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Tn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Tn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Tn([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Tn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Tn([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Tn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Tn([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Tn([vt.common,vt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Tn([vt.lights,vt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Di.physical={uniforms:Tn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Tc={r:0,b:0,g:0},B2=new Be,iy=new Gt;iy.set(-1,0,0,0,1,0,0,0,1);function I2(e,t,n,i,a,s){const r=new Yt(0);let o=a===!0?0:1,l,c,h=null,d=0,u=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const S=m.backgroundBlurriness>0;_=t.get(_,S)}return _}function v(m){let _=!1;const S=p(m);S===null?g(r,o):S&&S.isColor&&(g(S,1),_=!0);const w=e.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function E(m,_){const S=p(_);S&&(S.isCubeTexture||S.mapping===sf)?(c===void 0&&(c=new yn(new Ja(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:to(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(B2.makeRotationFromEuler(_.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(iy),c.material.toneMapped=re.getTransfer(S.colorSpace)!==pe,(h!==S||d!==S.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new yn(new Pl(2,2),new bi({name:"BackgroundMaterial",uniforms:to(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=re.getTransfer(S.colorSpace)!==pe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(Tc,JS(e)),n.buffers.color.setClear(Tc.r,Tc.g,Tc.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,_=1){r.set(m),o=_,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:E,dispose:f}}function F2(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(U,z,Y,nt,I){let N=!1;const P=d(U,nt,Y,z);s!==P&&(s=P,c(s.object)),N=p(U,nt,Y,I),N&&v(U,nt,Y,I),I!==null&&t.update(I,e.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,S(U,z,Y,nt),I!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function h(U){return e.deleteVertexArray(U)}function d(U,z,Y,nt){const I=nt.wireframe===!0;let N=i[z.id];N===void 0&&(N={},i[z.id]=N);const P=U.isInstancedMesh===!0?U.id:0;let W=N[P];W===void 0&&(W={},N[P]=W);let tt=W[Y.id];tt===void 0&&(tt={},W[Y.id]=tt);let ot=tt[I];return ot===void 0&&(ot=u(l()),tt[I]=ot),ot}function u(U){const z=[],Y=[],nt=[];for(let I=0;I<n;I++)z[I]=0,Y[I]=0,nt[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:nt,object:U,attributes:{},index:null}}function p(U,z,Y,nt){const I=s.attributes,N=z.attributes;let P=0;const W=Y.getAttributes();for(const tt in W)if(W[tt].location>=0){const Et=I[tt];let ct=N[tt];if(ct===void 0&&(tt==="instanceMatrix"&&U.instanceMatrix&&(ct=U.instanceMatrix),tt==="instanceColor"&&U.instanceColor&&(ct=U.instanceColor)),Et===void 0||Et.attribute!==ct||ct&&Et.data!==ct.data)return!0;P++}return s.attributesNum!==P||s.index!==nt}function v(U,z,Y,nt){const I={},N=z.attributes;let P=0;const W=Y.getAttributes();for(const tt in W)if(W[tt].location>=0){let Et=N[tt];Et===void 0&&(tt==="instanceMatrix"&&U.instanceMatrix&&(Et=U.instanceMatrix),tt==="instanceColor"&&U.instanceColor&&(Et=U.instanceColor));const ct={};ct.attribute=Et,Et&&Et.data&&(ct.data=Et.data),I[tt]=ct,P++}s.attributes=I,s.attributesNum=P,s.index=nt}function E(){const U=s.newAttributes;for(let z=0,Y=U.length;z<Y;z++)U[z]=0}function g(U){f(U,0)}function f(U,z){const Y=s.newAttributes,nt=s.enabledAttributes,I=s.attributeDivisors;Y[U]=1,nt[U]===0&&(e.enableVertexAttribArray(U),nt[U]=1),I[U]!==z&&(e.vertexAttribDivisor(U,z),I[U]=z)}function m(){const U=s.newAttributes,z=s.enabledAttributes;for(let Y=0,nt=z.length;Y<nt;Y++)z[Y]!==U[Y]&&(e.disableVertexAttribArray(Y),z[Y]=0)}function _(U,z,Y,nt,I,N,P){P===!0?e.vertexAttribIPointer(U,z,Y,I,N):e.vertexAttribPointer(U,z,Y,nt,I,N)}function S(U,z,Y,nt){E();const I=nt.attributes,N=Y.getAttributes(),P=z.defaultAttributeValues;for(const W in N){const tt=N[W];if(tt.location>=0){let ot=I[W];if(ot===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(ot=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(ot=U.instanceColor)),ot!==void 0){const Et=ot.normalized,ct=ot.itemSize,Bt=t.get(ot);if(Bt===void 0)continue;const jt=Bt.buffer,Ut=Bt.type,et=Bt.bytesPerElement,gt=Ut===e.INT||Ut===e.UNSIGNED_INT||ot.gpuType===ym;if(ot.isInterleavedBufferAttribute){const dt=ot.data,Lt=dt.stride,Ft=ot.offset;if(dt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<tt.locationSize;Nt++)f(tt.location+Nt,dt.meshPerAttribute);U.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Nt=0;Nt<tt.locationSize;Nt++)g(tt.location+Nt);e.bindBuffer(e.ARRAY_BUFFER,jt);for(let Nt=0;Nt<tt.locationSize;Nt++)_(tt.location+Nt,ct/tt.locationSize,Ut,Et,Lt*et,(Ft+ct/tt.locationSize*Nt)*et,gt)}else{if(ot.isInstancedBufferAttribute){for(let dt=0;dt<tt.locationSize;dt++)f(tt.location+dt,ot.meshPerAttribute);U.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let dt=0;dt<tt.locationSize;dt++)g(tt.location+dt);e.bindBuffer(e.ARRAY_BUFFER,jt);for(let dt=0;dt<tt.locationSize;dt++)_(tt.location+dt,ct/tt.locationSize,Ut,Et,ct*et,ct/tt.locationSize*dt*et,gt)}}else if(P!==void 0){const Et=P[W];if(Et!==void 0)switch(Et.length){case 2:e.vertexAttrib2fv(tt.location,Et);break;case 3:e.vertexAttrib3fv(tt.location,Et);break;case 4:e.vertexAttrib4fv(tt.location,Et);break;default:e.vertexAttrib1fv(tt.location,Et)}}}}m()}function w(){A();for(const U in i){const z=i[U];for(const Y in z){const nt=z[Y];for(const I in nt){const N=nt[I];for(const P in N)h(N[P].object),delete N[P];delete nt[I]}}delete i[U]}}function b(U){if(i[U.id]===void 0)return;const z=i[U.id];for(const Y in z){const nt=z[Y];for(const I in nt){const N=nt[I];for(const P in N)h(N[P].object),delete N[P];delete nt[I]}}delete i[U.id]}function R(U){for(const z in i){const Y=i[z];for(const nt in Y){const I=Y[nt];if(I[U.id]===void 0)continue;const N=I[U.id];for(const P in N)h(N[P].object),delete N[P];delete I[U.id]}}}function x(U){for(const z in i){const Y=i[z],nt=U.isInstancedMesh===!0?U.id:0,I=Y[nt];if(I!==void 0){for(const N in I){const P=I[N];for(const W in P)h(P[W].object),delete P[W];delete I[N]}delete Y[nt],Object.keys(Y).length===0&&delete i[z]}}}function A(){D(),r=!0,s!==a&&(s=a,c(s.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:g,disableUnusedAttributes:m}}function z2(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function G2(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==Ei&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===_a&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==jn&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Oi&&!x)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:S,maxSamples:w,samples:b}}function H2(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new vs,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||a;return a=u,i=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,p){const v=d.clippingPlanes,E=d.clipIntersection,g=d.clipShadows,f=e.get(d);if(!a||v===null||v.length===0||s&&!g)s?h(null):c();else{const m=s?0:i,_=m*4;let S=f.clippingState||null;l.value=S,S=h(v,u,_,p);for(let w=0;w!==_;++w)S[w]=n[w];f.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,v){const E=d!==null?d.length:0;let g=null;if(E!==0){if(g=l.value,v!==!0||g===null){const f=p+E*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,S=p;_!==E;++_,S+=4)r.copy(d[_]).applyMatrix4(m,o),r.normal.toArray(g,S),g[S+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,g}}const Va=4,e_=[.125,.215,.35,.446,.526,.582],Ss=20,V2=256,No=new ey,n_=new Yt;let bh=null,Th=0,Ah=0,Rh=!1;const k2=new O;class i_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=k2}=s;bh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bh,Th,Ah),this._renderer.xr.enabled=Rh,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ns||t.mapping===Jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:_a,format:Ei,colorSpace:wu,depthBuffer:!1},a=a_(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a_(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=X2(s)),this._blurMaterial=q2(s,t,n),this._ggxMaterial=W2(s,t,n)}return a}_compileMaterial(t){const n=new yn(new Fn,t);this._renderer.compile(n,No)}_sceneToCubeUV(t,n,i,a,s){const l=new qn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(n_),d.toneMapping=Ii,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yn(new Ja,new Nu({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let f=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy(n_),f=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));const w=this._cubeSize;hr(a,S*w,_>2?w:0,w,w),d.setRenderTarget(a),f&&d.render(E,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===Ns||t.mapping===Jr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=r_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s_());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;hr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,No)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,p=d*u,{_lodMax:v}=this,E=this._sizeLods[i],g=3*E*(i>v-Va?i-v+Va:0),f=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=v-n,hr(s,g,f,3*E,2*E),a.setRenderTarget(s),a.render(o,No),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,hr(t,g,f,3*E,2*E),a.setRenderTarget(t),a.render(o,No)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&se("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[a];d.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ss-1),E=s/v,g=isFinite(s)?1+Math.floor(h*E):Ss;g>Ss&&Ot(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ss}`);const f=[];let m=0;for(let R=0;R<Ss;++R){const x=R/E,A=Math.exp(-x*x/2);f.push(A),R===0?m+=A:R<g&&(m+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const S=this._sizeLods[a],w=3*S*(a>_-Va?a-_+Va:0),b=4*(this._cubeSize-S);hr(n,w,b,3*S,2*S),l.setRenderTarget(n),l.render(d,No)}}function X2(e){const t=[],n=[],i=[];let a=e;const s=e-Va+1+e_.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-Va?l=e_[r-e+Va-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,E=3,g=2,f=1,m=new Float32Array(E*v*p),_=new Float32Array(g*v*p),S=new Float32Array(f*v*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,x=b>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];m.set(A,E*v*b),_.set(u,g*v*b);const D=[b,b,b,b,b,b];S.set(D,f*v*b)}const w=new Fn;w.setAttribute("position",new mi(m,E)),w.setAttribute("uv",new mi(_,g)),w.setAttribute("faceIndex",new mi(S,f)),i.push(new yn(w,null)),a>Va&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function a_(e,t,n){const i=new Fi(e,t,n);return i.texture.mapping=sf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function W2(e,t,n){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:of(),fragmentShader:`

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function q2(e,t,n){const i=new Float32Array(Ss),a=new O(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:of(),fragmentShader:`

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function s_(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function r_(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function of(){return`

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
	`}class ay extends Fi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new KS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ja(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:la});s.uniforms.tEquirect.value=n;const r=new yn(a,s),o=n.minFilter;return n.minFilter===ys&&(n.minFilter=on),new J1(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function Y2(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,p=!1){return u==null?null:p?r(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Zf||p===Kf)if(t.has(u)){const v=t.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const E=new ay(v.height);return E.fromEquirectangularTexture(e,u),t.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const p=u.mapping,v=p===Zf||p===Kf,E=p===Ns||p===Jr;if(v||E){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new i_(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return v&&m&&m.height>0||E&&m&&l(m)?(i===null&&(i=new i_(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,p){return p===Zf?u.mapping=Ns:p===Kf&&(u.mapping=Jr),u}function l(u){let p=0;const v=6;for(let E=0;E<v;E++)u[E]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:d}}function j2(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&mp("WebGLRenderer: "+i+" extension not supported."),a}}}function Z2(e,t,n,i){const a={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete a[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(d,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,v=d.attributes.position;let E=0;if(v===void 0)return;if(p!==null){const m=p.array;E=p.version;for(let _=0,S=m.length;_<S;_+=3){const w=m[_+0],b=m[_+1],R=m[_+2];u.push(w,b,b,R,R,w)}}else{const m=v.array;E=v.version;for(let _=0,S=m.length/3-1;_<S;_+=3){const w=_+0,b=_+1,R=_+2;u.push(w,b,b,R,R,w)}}const g=new(v.count>=65535?jS:YS)(u,1);g.version=E;const f=s.get(d);f&&t.remove(f),s.set(d,g)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function K2(e,t,n){let i;function a(d){i=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,u){e.drawElements(i,u,s,d*r),n.update(u,i,1)}function c(d,u,p){p!==0&&(e.drawElementsInstanced(i,u,s,d*r,p),n.update(u,i,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,p);let E=0;for(let g=0;g<p;g++)E+=u[g];n.update(E,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Q2(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:se("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function J2(e,t,n){const i=new WeakMap,a=new He;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let D=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var p=D;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),E===!0&&(S=2),g===!0&&(S=3);let w=o.attributes.position.count*S,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*b*4*d),x=new WS(R,w,b,d);x.type=Oi,x.needsUpdate=!0;const A=S*4;for(let U=0;U<d;U++){const z=f[U],Y=m[U],nt=_[U],I=w*b*4*U;for(let N=0;N<z.count;N++){const P=N*A;v===!0&&(a.fromBufferAttribute(z,N),R[I+P+0]=a.x,R[I+P+1]=a.y,R[I+P+2]=a.z,R[I+P+3]=0),E===!0&&(a.fromBufferAttribute(Y,N),R[I+P+4]=a.x,R[I+P+5]=a.y,R[I+P+6]=a.z,R[I+P+7]=0),g===!0&&(a.fromBufferAttribute(nt,N),R[I+P+8]=a.x,R[I+P+9]=a.y,R[I+P+10]=a.z,R[I+P+11]=nt.itemSize===4?a.w:1)}}u={count:d,texture:x,size:new Ht(w,b)},i.set(o,u),o.addEventListener("dispose",D)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const E=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(e,"morphTargetBaseInfluence",E),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function $2(e,t,n,i,a){let s=new WeakMap;function r(c){const h=a.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}const tR={[CS]:"LINEAR_TONE_MAPPING",[DS]:"REINHARD_TONE_MAPPING",[US]:"CINEON_TONE_MAPPING",[LS]:"ACES_FILMIC_TONE_MAPPING",[OS]:"AGX_TONE_MAPPING",[PS]:"NEUTRAL_TONE_MAPPING",[NS]:"CUSTOM_TONE_MAPPING"};function eR(e,t,n,i,a){const s=new Fi(t,n,{type:e,depthBuffer:i,stencilBuffer:a,depthTexture:i?new $r(t,n):void 0}),r=new Fi(t,n,{type:_a,depthBuffer:!1,stencilBuffer:!1}),o=new Fn;o.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new _n([0,2,0,0,2,0],2));const l=new q1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new yn(o,l),h=new ey(-1,1,1,-1,0,1);let d=null,u=null,p=!1,v,E=null,g=[],f=!1;this.setSize=function(m,_){s.setSize(m,_),r.setSize(m,_);for(let S=0;S<g.length;S++){const w=g[S];w.setSize&&w.setSize(m,_)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const _=s.width,S=s.height;for(let w=0;w<g.length;w++){const b=g[w];b.setSize&&b.setSize(_,S)}},this.begin=function(m,_){if(p||m.toneMapping===Ii&&g.length===0)return!1;if(E=_,_!==null){const S=_.width,w=_.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return f===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=Ii,!0},this.hasRenderPass=function(){return f},this.end=function(m,_){m.toneMapping=v,p=!0;let S=s,w=r;for(let b=0;b<g.length;b++){const R=g[b];if(R.enabled!==!1&&(R.render(m,w,S,_),R.needsSwap!==!1)){const x=S;S=w,w=x}}if(d!==m.outputColorSpace||u!==m.toneMapping){d=m.outputColorSpace,u=m.toneMapping,l.defines={},re.getTransfer(d)===pe&&(l.defines.SRGB_TRANSFER="");const b=tR[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(E),m.render(c,h),E=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),o.dispose(),l.dispose()}}const sy=new Mn,_p=new $r(1,1),ry=new WS,oy=new S1,ly=new KS,o_=[],l_=[],c_=new Float32Array(16),u_=new Float32Array(9),f_=new Float32Array(4);function uo(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=o_[a];if(s===void 0&&(s=new Float32Array(a),o_[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function tn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function en(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function lf(e,t){let n=l_[t];n===void 0&&(n=new Int32Array(t),l_[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function nR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function iR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2fv(this.addr,t),en(n,t)}}function aR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(tn(n,t))return;e.uniform3fv(this.addr,t),en(n,t)}}function sR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4fv(this.addr,t),en(n,t)}}function rR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;f_.set(i),e.uniformMatrix2fv(this.addr,!1,f_),en(n,i)}}function oR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;u_.set(i),e.uniformMatrix3fv(this.addr,!1,u_),en(n,i)}}function lR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;c_.set(i),e.uniformMatrix4fv(this.addr,!1,c_),en(n,i)}}function cR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function uR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2iv(this.addr,t),en(n,t)}}function fR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tn(n,t))return;e.uniform3iv(this.addr,t),en(n,t)}}function hR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4iv(this.addr,t),en(n,t)}}function dR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function pR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2uiv(this.addr,t),en(n,t)}}function mR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tn(n,t))return;e.uniform3uiv(this.addr,t),en(n,t)}}function gR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4uiv(this.addr,t),en(n,t)}}function _R(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(_p.compareFunction=n.isReversedDepthBuffer()?wm:Rm,s=_p):s=sy,n.setTexture2D(t||s,a)}function vR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||oy,a)}function xR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||ly,a)}function SR(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||ry,a)}function yR(e){switch(e){case 5126:return nR;case 35664:return iR;case 35665:return aR;case 35666:return sR;case 35674:return rR;case 35675:return oR;case 35676:return lR;case 5124:case 35670:return cR;case 35667:case 35671:return uR;case 35668:case 35672:return fR;case 35669:case 35673:return hR;case 5125:return dR;case 36294:return pR;case 36295:return mR;case 36296:return gR;case 35678:case 36198:case 36298:case 36306:case 35682:return _R;case 35679:case 36299:case 36307:return vR;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return SR}}function MR(e,t){e.uniform1fv(this.addr,t)}function ER(e,t){const n=uo(t,this.size,2);e.uniform2fv(this.addr,n)}function bR(e,t){const n=uo(t,this.size,3);e.uniform3fv(this.addr,n)}function TR(e,t){const n=uo(t,this.size,4);e.uniform4fv(this.addr,n)}function AR(e,t){const n=uo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function RR(e,t){const n=uo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function wR(e,t){const n=uo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function CR(e,t){e.uniform1iv(this.addr,t)}function DR(e,t){e.uniform2iv(this.addr,t)}function UR(e,t){e.uniform3iv(this.addr,t)}function LR(e,t){e.uniform4iv(this.addr,t)}function NR(e,t){e.uniform1uiv(this.addr,t)}function OR(e,t){e.uniform2uiv(this.addr,t)}function PR(e,t){e.uniform3uiv(this.addr,t)}function BR(e,t){e.uniform4uiv(this.addr,t)}function IR(e,t,n){const i=this.cache,a=t.length,s=lf(n,a);tn(i,s)||(e.uniform1iv(this.addr,s),en(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=_p:r=sy;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function FR(e,t,n){const i=this.cache,a=t.length,s=lf(n,a);tn(i,s)||(e.uniform1iv(this.addr,s),en(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||oy,s[r])}function zR(e,t,n){const i=this.cache,a=t.length,s=lf(n,a);tn(i,s)||(e.uniform1iv(this.addr,s),en(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||ly,s[r])}function GR(e,t,n){const i=this.cache,a=t.length,s=lf(n,a);tn(i,s)||(e.uniform1iv(this.addr,s),en(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||ry,s[r])}function HR(e){switch(e){case 5126:return MR;case 35664:return ER;case 35665:return bR;case 35666:return TR;case 35674:return AR;case 35675:return RR;case 35676:return wR;case 5124:case 35670:return CR;case 35667:case 35671:return DR;case 35668:case 35672:return UR;case 35669:case 35673:return LR;case 5125:return NR;case 36294:return OR;case 36295:return PR;case 36296:return BR;case 35678:case 36198:case 36298:case 36306:case 35682:return IR;case 35679:case 36299:case 36307:return FR;case 35680:case 36300:case 36308:case 36293:return zR;case 36289:case 36303:case 36311:case 36292:return GR}}class VR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=yR(n.type)}}class kR{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=HR(n.type)}}class XR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function h_(e,t){e.seq.push(t),e.map[t.id]=t}function WR(e,t,n){const i=e.name,a=i.length;for(wh.lastIndex=0;;){const s=wh.exec(i),r=wh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){h_(n,c===void 0?new VR(o,e,t):new kR(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new XR(o),h_(n,d)),n=d}}}class jc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);WR(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function d_(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const qR=37297;let YR=0;function jR(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const p_=new Gt;function ZR(e){re._getMatrix(p_,re.workingColorSpace,e);const t=`mat3( ${p_.elements.map(n=>n.toFixed(4))} )`;switch(re.getTransfer(e)){case Cu:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function m_(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+jR(e.getShaderSource(t),o)}else return s}function KR(e,t){const n=ZR(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const QR={[CS]:"Linear",[DS]:"Reinhard",[US]:"Cineon",[LS]:"ACESFilmic",[OS]:"AgX",[PS]:"Neutral",[NS]:"Custom"};function JR(e,t){const n=QR[t];return n===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ac=new O;function $R(){re.getLuminanceCoefficients(Ac);const e=Ac.x.toFixed(4),t=Ac.y.toFixed(4),n=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function e3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function n3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Ho(e){return e!==""}function g_(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function __(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i3=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(e){return e.replace(i3,s3)}const a3=new Map;function s3(e,t){let n=Zt[t];if(n===void 0){const i=a3.get(t);if(i!==void 0)n=Zt[i],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return vp(n)}const r3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(e){return e.replace(r3,o3)}function o3(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function x_(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}const l3={[Vc]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function c3(e){return l3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const u3={[Ns]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE",[sf]:"ENVMAP_TYPE_CUBE_UV"};function f3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":u3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const h3={[Jr]:"ENVMAP_MODE_REFRACTION"};function d3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":h3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const p3={[wS]:"ENVMAP_BLENDING_MULTIPLY",[Fb]:"ENVMAP_BLENDING_MIX",[zb]:"ENVMAP_BLENDING_ADD"};function m3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":p3[e.combine]||"ENVMAP_BLENDING_NONE"}function g3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function _3(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=c3(n),c=f3(n),h=d3(n),d=m3(n),u=g3(n),p=t3(n),v=e3(s),E=a.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ho).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ho).join(`
`),f.length>0&&(f+=`
`)):(g=[x_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),f=[x_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ii?"#define TONE_MAPPING":"",n.toneMapping!==Ii?Zt.tonemapping_pars_fragment:"",n.toneMapping!==Ii?JR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,KR("linearToOutputTexel",n.outputColorSpace),$R(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ho).join(`
`)),r=vp(r),r=g_(r,n),r=__(r,n),o=vp(o),o=g_(o,n),o=__(o,n),r=v_(r),o=v_(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=m+g+r,S=m+f+o,w=d_(a,a.VERTEX_SHADER,_),b=d_(a,a.FRAGMENT_SHADER,S);a.attachShader(E,w),a.attachShader(E,b),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function R(U){if(e.debug.checkShaderErrors){const z=a.getProgramInfoLog(E)||"",Y=a.getShaderInfoLog(w)||"",nt=a.getShaderInfoLog(b)||"",I=z.trim(),N=Y.trim(),P=nt.trim();let W=!0,tt=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(W=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,E,w,b);else{const ot=m_(a,w,"vertex"),Et=m_(a,b,"fragment");se("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+I+`
`+ot+`
`+Et)}else I!==""?Ot("WebGLProgram: Program Info Log:",I):(N===""||P==="")&&(tt=!1);tt&&(U.diagnostics={runnable:W,programLog:I,vertexShader:{log:N,prefix:g},fragmentShader:{log:P,prefix:f}})}a.deleteShader(w),a.deleteShader(b),x=new jc(a,E),A=n3(a,E)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(E,qR)),D},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YR++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=b,this}let v3=0;class x3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new S3(t),n.set(t,i)),i}}class S3{constructor(t){this.id=v3++,this.code=t,this.usedTimes=0}}function y3(e){return e===Os||e===Au||e===Ru}function M3(e,t,n,i,a,s){const r=new Um,o=new x3,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function E(x,A,D,U,z,Y){const nt=U.fog,I=z.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=t.get(x.envMap||N,P),tt=W&&W.mapping===sf?W.image.height:null,ot=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ot("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const Et=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ct=Et!==void 0?Et.length:0;let Bt=0;I.morphAttributes.position!==void 0&&(Bt=1),I.morphAttributes.normal!==void 0&&(Bt=2),I.morphAttributes.color!==void 0&&(Bt=3);let jt,Ut,et,gt;if(ot){const Dt=Di[ot];jt=Dt.vertexShader,Ut=Dt.fragmentShader}else jt=x.vertexShader,Ut=x.fragmentShader,o.update(x),et=o.getVertexShaderID(x),gt=o.getFragmentShaderID(x);const dt=e.getRenderTarget(),Lt=e.state.buffers.depth.getReversed(),Ft=z.isInstancedMesh===!0,Nt=z.isBatchedMesh===!0,De=!!x.map,Wt=!!x.matcap,fe=!!W,ve=!!x.aoMap,zt=!!x.lightMap,Qt=!!x.bumpMap,Jt=!!x.normalMap,Ee=!!x.displacementMap,B=!!x.emissiveMap,Ie=!!x.metalnessMap,$t=!!x.roughnessMap,he=x.anisotropy>0,mt=x.clearcoat>0,Re=x.dispersion>0,T=x.iridescence>0,y=x.sheen>0,G=x.transmission>0,K=he&&!!x.anisotropyMap,st=mt&&!!x.clearcoatMap,ut=mt&&!!x.clearcoatNormalMap,pt=mt&&!!x.clearcoatRoughnessMap,Z=T&&!!x.iridescenceMap,J=T&&!!x.iridescenceThicknessMap,_t=y&&!!x.sheenColorMap,Mt=y&&!!x.sheenRoughnessMap,ht=!!x.specularMap,L=!!x.specularColorMap,q=!!x.specularIntensityMap,it=G&&!!x.transmissionMap,lt=G&&!!x.thicknessMap,C=!!x.gradientMap,j=!!x.alphaMap,k=x.alphaTest>0,rt=!!x.alphaHash,at=!!x.extensions;let Q=Ii;x.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Q=e.toneMapping);const xt={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:jt,fragmentShader:Ut,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Nt,batchingColor:Nt&&z._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&z.instanceColor!==null,instancingMorph:Ft&&z.morphTexture!==null,outputColorSpace:dt===null?e.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:De,matcap:Wt,envMap:fe,envMapMode:fe&&W.mapping,envMapCubeUVHeight:tt,aoMap:ve,lightMap:zt,bumpMap:Qt,normalMap:Jt,displacementMap:Ee,emissiveMap:B,normalMapObjectSpace:Jt&&x.normalMapType===Vb,normalMapTangentSpace:Jt&&x.normalMapType===dp,packedNormalMap:Jt&&x.normalMapType===dp&&y3(x.normalMap.format),metalnessMap:Ie,roughnessMap:$t,anisotropy:he,anisotropyMap:K,clearcoat:mt,clearcoatMap:st,clearcoatNormalMap:ut,clearcoatRoughnessMap:pt,dispersion:Re,iridescence:T,iridescenceMap:Z,iridescenceThicknessMap:J,sheen:y,sheenColorMap:_t,sheenRoughnessMap:Mt,specularMap:ht,specularColorMap:L,specularIntensityMap:q,transmission:G,transmissionMap:it,thicknessMap:lt,gradientMap:C,opaque:x.transparent===!1&&x.blending===Fr&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:k,alphaHash:rt,combine:x.combine,mapUv:De&&v(x.map.channel),aoMapUv:ve&&v(x.aoMap.channel),lightMapUv:zt&&v(x.lightMap.channel),bumpMapUv:Qt&&v(x.bumpMap.channel),normalMapUv:Jt&&v(x.normalMap.channel),displacementMapUv:Ee&&v(x.displacementMap.channel),emissiveMapUv:B&&v(x.emissiveMap.channel),metalnessMapUv:Ie&&v(x.metalnessMap.channel),roughnessMapUv:$t&&v(x.roughnessMap.channel),anisotropyMapUv:K&&v(x.anisotropyMap.channel),clearcoatMapUv:st&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(x.sheenRoughnessMap.channel),specularMapUv:ht&&v(x.specularMap.channel),specularColorMapUv:L&&v(x.specularColorMap.channel),specularIntensityMapUv:q&&v(x.specularIntensityMap.channel),transmissionMapUv:it&&v(x.transmissionMap.channel),thicknessMapUv:lt&&v(x.thicknessMap.channel),alphaMapUv:j&&v(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Jt||he),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!I.attributes.uv&&(De||j),fog:!!nt,useFog:x.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Jt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Lt,skinning:z.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Bt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Q,decodeVideoTexture:De&&x.map.isVideoTexture===!0&&re.getTransfer(x.map.colorSpace)===pe,decodeVideoTextureEmissive:B&&x.emissiveMap.isVideoTexture===!0&&re.getTransfer(x.emissiveMap.colorSpace)===pe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ta,flipSided:x.side===Pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function g(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)A.push(D),A.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(f(A,x),m(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function f(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function m(x,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),x.push(r.mask)}function _(x){const A=p[x.type];let D;if(A){const U=Di[A];D=k1.clone(U.uniforms)}else D=x.uniforms;return D}function S(x,A){let D=h.get(A);return D!==void 0?++D.usedTimes:(D=new _3(e,A,x,a),c.push(D),h.set(A,D)),D}function w(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:_,acquireProgram:S,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:R}}function E3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function b3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function S_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function y_(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,v,E,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:p,material:v,materialVariant:r(u),groupOrder:E,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=v,m.materialVariant=r(u),m.groupOrder=E,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,p,v,E,g,f){const m=o(u,p,v,E,g,f);v.transmission>0?i.push(m):v.transparent===!0?a.push(m):n.push(m)}function c(u,p,v,E,g,f){const m=o(u,p,v,E,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?a.unshift(m):n.unshift(m)}function h(u,p){n.length>1&&n.sort(u||b3),i.length>1&&i.sort(p||S_),a.length>1&&a.sort(p||S_)}function d(){for(let u=t,p=e.length;u<p;u++){const v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:d,sort:h}}function T3(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new y_,e.set(i,[r])):a>=s.length?(r=new y_,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function A3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new O,color:new Yt};break;case"SpotLight":n={position:new O,direction:new O,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":n={color:new Yt,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=n,n}}}function R3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let w3=0;function C3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function D3(e){const t=new A3,n=R3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const a=new O,s=new Be,r=new Be;function o(c){let h=0,d=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,v=0,E=0,g=0,f=0,m=0,_=0,S=0,w=0,b=0,R=0;c.sort(C3);for(let A=0,D=c.length;A<D;A++){const U=c[A],z=U.color,Y=U.intensity,nt=U.distance;let I=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Os?I=U.shadow.map.texture:I=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=z.r*Y,d+=z.g*Y,u+=z.b*Y;else if(U.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(U.sh.coefficients[N],Y);R++}else if(U.isDirectionalLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const P=U.shadow,W=n.get(U);W.shadowIntensity=P.intensity,W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=U.shadow.matrix,m++}i.directional[p]=N,p++}else if(U.isSpotLight){const N=t.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(z).multiplyScalar(Y),N.distance=nt,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,i.spot[E]=N;const P=U.shadow;if(U.map&&(i.spotLightMap[w]=U.map,w++,P.updateMatrices(U),U.castShadow&&b++),i.spotLightMatrix[E]=P.matrix,U.castShadow){const W=n.get(U);W.shadowIntensity=P.intensity,W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,i.spotShadow[E]=W,i.spotShadowMap[E]=I,S++}E++}else if(U.isRectAreaLight){const N=t.get(U);N.color.copy(z).multiplyScalar(Y),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=N,g++}else if(U.isPointLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),N.distance=U.distance,N.decay=U.decay,U.castShadow){const P=U.shadow,W=n.get(U);W.shadowIntensity=P.intensity,W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,W.shadowCameraNear=P.camera.near,W.shadowCameraFar=P.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=I,i.pointShadowMatrix[v]=U.shadow.matrix,_++}i.point[v]=N,v++}else if(U.isHemisphereLight){const N=t.get(U);N.skyColor.copy(U.color).multiplyScalar(Y),N.groundColor.copy(U.groundColor).multiplyScalar(Y),i.hemi[f]=N,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==E||x.rectAreaLength!==g||x.hemiLength!==f||x.numDirectionalShadows!==m||x.numPointShadows!==_||x.numSpotShadows!==S||x.numSpotMaps!==w||x.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+w-b,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,x.directionalLength=p,x.pointLength=v,x.spotLength=E,x.rectAreaLength=g,x.hemiLength=f,x.numDirectionalShadows=m,x.numPointShadows=_,x.numSpotShadows=S,x.numSpotMaps=w,x.numLightProbes=R,i.version=w3++)}function l(c,h){let d=0,u=0,p=0,v=0,E=0;const g=h.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const _=c[f];if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),d++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),r.identity(),s.copy(_.matrixWorld),s.premultiply(g),r.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),v++}else if(_.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function M_(e){const t=new D3(e),n=[],i=[],a=[];function s(u){d.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function U3(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new M_(e),t.set(a,[o])):s>=r.length?(o=new M_(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const L3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N3=`uniform sampler2D shadow_pass;
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
}`,O3=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],P3=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],E_=new Be,Oo=new O,Ch=new O;function B3(e,t,n){let i=new Om;const a=new Ht,s=new Ht,r=new He,o=new Y1,l=new j1,c={},h=n.maxTextureSize,d={[as]:Pn,[Pn]:as,[ta]:ta},u=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:L3,fragmentShader:N3}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Fn;v.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new yn(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let f=this.type;this.render=function(b,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===xb&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vc);const A=e.getRenderTarget(),D=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),z=e.state;z.setBlending(la),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Y=f!==this.type;Y&&R.traverse(function(nt){nt.material&&(Array.isArray(nt.material)?nt.material.forEach(I=>I.needsUpdate=!0):nt.material.needsUpdate=!0)});for(let nt=0,I=b.length;nt<I;nt++){const N=b[nt],P=N.shadow;if(P===void 0){Ot("WebGLShadowMap:",N,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const W=P.getFrameExtents();a.multiply(W),s.copy(P.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/W.x),a.x=s.x*W.x,P.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/W.y),a.y=s.y*W.y,P.mapSize.y=s.y));const tt=e.state.buffers.depth.getReversed();if(P.camera._reversedDepth=tt,P.map===null||Y===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Go){if(N.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Fi(a.x,a.y,{format:Os,type:_a,minFilter:on,magFilter:on,generateMipmaps:!1}),P.map.texture.name=N.name+".shadowMap",P.map.depthTexture=new $r(a.x,a.y,Oi),P.map.depthTexture.name=N.name+".shadowMapDepth",P.map.depthTexture.format=va,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=pn,P.map.depthTexture.magFilter=pn}else N.isPointLight?(P.map=new ay(a.x),P.map.depthTexture=new H1(a.x,zi)):(P.map=new Fi(a.x,a.y),P.map.depthTexture=new $r(a.x,a.y,zi)),P.map.depthTexture.name=N.name+".shadowMap",P.map.depthTexture.format=va,this.type===Vc?(P.map.depthTexture.compareFunction=tt?wm:Rm,P.map.depthTexture.minFilter=on,P.map.depthTexture.magFilter=on):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=pn,P.map.depthTexture.magFilter=pn);P.camera.updateProjectionMatrix()}const ot=P.map.isWebGLCubeRenderTarget?6:1;for(let Et=0;Et<ot;Et++){if(P.map.isWebGLCubeRenderTarget)e.setRenderTarget(P.map,Et),e.clear();else{Et===0&&(e.setRenderTarget(P.map),e.clear());const ct=P.getViewport(Et);r.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),z.viewport(r)}if(N.isPointLight){const ct=P.camera,Bt=P.matrix,jt=N.distance||ct.far;jt!==ct.far&&(ct.far=jt,ct.updateProjectionMatrix()),Oo.setFromMatrixPosition(N.matrixWorld),ct.position.copy(Oo),Ch.copy(ct.position),Ch.add(O3[Et]),ct.up.copy(P3[Et]),ct.lookAt(Ch),ct.updateMatrixWorld(),Bt.makeTranslation(-Oo.x,-Oo.y,-Oo.z),E_.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),P._frustum.setFromProjectionMatrix(E_,ct.coordinateSystem,ct.reversedDepth)}else P.updateMatrices(N);i=P.getFrustum(),S(R,x,P.camera,N,this.type)}P.isPointLightShadow!==!0&&this.type===Go&&m(P,x),P.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(A,D,U)};function m(b,R){const x=t.update(E);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Fi(a.x,a.y,{format:Os,type:_a})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(R,null,x,u,E,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(R,null,x,p,E,null)}function _(b,R,x,A){let D=null;const U=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)D=U;else if(D=x.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=D.uuid,Y=R.uuid;let nt=c[z];nt===void 0&&(nt={},c[z]=nt);let I=nt[Y];I===void 0&&(I=D.clone(),nt[Y]=I,R.addEventListener("dispose",w)),D=I}if(D.visible=R.visible,D.wireframe=R.wireframe,A===Go?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:d[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const z=e.properties.get(D);z.light=x}return D}function S(b,R,x,A,D){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Go)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const Y=t.update(b),nt=b.material;if(Array.isArray(nt)){const I=Y.groups;for(let N=0,P=I.length;N<P;N++){const W=I[N],tt=nt[W.materialIndex];if(tt&&tt.visible){const ot=_(b,tt,A,D);b.onBeforeShadow(e,b,R,x,Y,ot,W),e.renderBufferDirect(x,null,Y,ot,b,W),b.onAfterShadow(e,b,R,x,Y,ot,W)}}}else if(nt.visible){const I=_(b,nt,A,D);b.onBeforeShadow(e,b,R,x,Y,I,null),e.renderBufferDirect(x,null,Y,I,b,null),b.onAfterShadow(e,b,R,x,Y,I,null)}}const z=b.children;for(let Y=0,nt=z.length;Y<nt;Y++)S(z[Y],R,x,A,D)}function w(b){b.target.removeEventListener("dispose",w);for(const x in c){const A=c[x],D=b.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function I3(e,t){function n(){let C=!1;const j=new He;let k=null;const rt=new He(0,0,0,0);return{setMask:function(at){k!==at&&!C&&(e.colorMask(at,at,at,at),k=at)},setLocked:function(at){C=at},setClear:function(at,Q,xt,Dt,It){It===!0&&(at*=Dt,Q*=Dt,xt*=Dt),j.set(at,Q,xt,Dt),rt.equals(j)===!1&&(e.clearColor(at,Q,xt,Dt),rt.copy(j))},reset:function(){C=!1,k=null,rt.set(-1,0,0,0)}}}function i(){let C=!1,j=!1,k=null,rt=null,at=null;return{setReversed:function(Q){if(j!==Q){const xt=t.get("EXT_clip_control");Q?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),j=Q;const Dt=at;at=null,this.setClear(Dt)}},getReversed:function(){return j},setTest:function(Q){Q?dt(e.DEPTH_TEST):Lt(e.DEPTH_TEST)},setMask:function(Q){k!==Q&&!C&&(e.depthMask(Q),k=Q)},setFunc:function(Q){if(j&&(Q=Jb[Q]),rt!==Q){switch(Q){case wd:e.depthFunc(e.NEVER);break;case Cd:e.depthFunc(e.ALWAYS);break;case Dd:e.depthFunc(e.LESS);break;case Qr:e.depthFunc(e.LEQUAL);break;case Ud:e.depthFunc(e.EQUAL);break;case Ld:e.depthFunc(e.GEQUAL);break;case Nd:e.depthFunc(e.GREATER);break;case Od:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}rt=Q}},setLocked:function(Q){C=Q},setClear:function(Q){at!==Q&&(at=Q,j&&(Q=1-Q),e.clearDepth(Q))},reset:function(){C=!1,k=null,rt=null,at=null,j=!1}}}function a(){let C=!1,j=null,k=null,rt=null,at=null,Q=null,xt=null,Dt=null,It=null;return{setTest:function(qt){C||(qt?dt(e.STENCIL_TEST):Lt(e.STENCIL_TEST))},setMask:function(qt){j!==qt&&!C&&(e.stencilMask(qt),j=qt)},setFunc:function(qt,nn,te){(k!==qt||rt!==nn||at!==te)&&(e.stencilFunc(qt,nn,te),k=qt,rt=nn,at=te)},setOp:function(qt,nn,te){(Q!==qt||xt!==nn||Dt!==te)&&(e.stencilOp(qt,nn,te),Q=qt,xt=nn,Dt=te)},setLocked:function(qt){C=qt},setClear:function(qt){It!==qt&&(e.clearStencil(qt),It=qt)},reset:function(){C=!1,j=null,k=null,rt=null,at=null,Q=null,xt=null,Dt=null,It=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let h={},d={},u={},p=new WeakMap,v=[],E=null,g=!1,f=null,m=null,_=null,S=null,w=null,b=null,R=null,x=new Yt(0,0,0),A=0,D=!1,U=null,z=null,Y=null,nt=null,I=null;const N=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,W=0;const tt=e.getParameter(e.VERSION);tt.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(tt)[1]),P=W>=1):tt.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),P=W>=2);let ot=null,Et={};const ct=e.getParameter(e.SCISSOR_BOX),Bt=e.getParameter(e.VIEWPORT),jt=new He().fromArray(ct),Ut=new He().fromArray(Bt);function et(C,j,k,rt){const at=new Uint8Array(4),Q=e.createTexture();e.bindTexture(C,Q),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let xt=0;xt<k;xt++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,rt,0,e.RGBA,e.UNSIGNED_BYTE,at):e.texImage2D(j+xt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,at);return Q}const gt={};gt[e.TEXTURE_2D]=et(e.TEXTURE_2D,e.TEXTURE_2D,1),gt[e.TEXTURE_CUBE_MAP]=et(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[e.TEXTURE_2D_ARRAY]=et(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),gt[e.TEXTURE_3D]=et(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),dt(e.DEPTH_TEST),r.setFunc(Qr),Qt(!1),Jt(vg),dt(e.CULL_FACE),ve(la);function dt(C){h[C]!==!0&&(e.enable(C),h[C]=!0)}function Lt(C){h[C]!==!1&&(e.disable(C),h[C]=!1)}function Ft(C,j){return u[C]!==j?(e.bindFramebuffer(C,j),u[C]=j,C===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=j),C===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=j),!0):!1}function Nt(C,j){let k=v,rt=!1;if(C){k=p.get(j),k===void 0&&(k=[],p.set(j,k));const at=C.textures;if(k.length!==at.length||k[0]!==e.COLOR_ATTACHMENT0){for(let Q=0,xt=at.length;Q<xt;Q++)k[Q]=e.COLOR_ATTACHMENT0+Q;k.length=at.length,rt=!0}}else k[0]!==e.BACK&&(k[0]=e.BACK,rt=!0);rt&&e.drawBuffers(k)}function De(C){return E!==C?(e.useProgram(C),E=C,!0):!1}const Wt={[xs]:e.FUNC_ADD,[yb]:e.FUNC_SUBTRACT,[Mb]:e.FUNC_REVERSE_SUBTRACT};Wt[Eb]=e.MIN,Wt[bb]=e.MAX;const fe={[Tb]:e.ZERO,[Ab]:e.ONE,[Rb]:e.SRC_COLOR,[Ad]:e.SRC_ALPHA,[Nb]:e.SRC_ALPHA_SATURATE,[Ub]:e.DST_COLOR,[Cb]:e.DST_ALPHA,[wb]:e.ONE_MINUS_SRC_COLOR,[Rd]:e.ONE_MINUS_SRC_ALPHA,[Lb]:e.ONE_MINUS_DST_COLOR,[Db]:e.ONE_MINUS_DST_ALPHA,[Ob]:e.CONSTANT_COLOR,[Pb]:e.ONE_MINUS_CONSTANT_COLOR,[Bb]:e.CONSTANT_ALPHA,[Ib]:e.ONE_MINUS_CONSTANT_ALPHA};function ve(C,j,k,rt,at,Q,xt,Dt,It,qt){if(C===la){g===!0&&(Lt(e.BLEND),g=!1);return}if(g===!1&&(dt(e.BLEND),g=!0),C!==Sb){if(C!==f||qt!==D){if((m!==xs||w!==xs)&&(e.blendEquation(e.FUNC_ADD),m=xs,w=xs),qt)switch(C){case Fr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case wr:e.blendFunc(e.ONE,e.ONE);break;case xg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Sg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:se("WebGLState: Invalid blending: ",C);break}else switch(C){case Fr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case wr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case xg:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sg:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",C);break}_=null,S=null,b=null,R=null,x.set(0,0,0),A=0,f=C,D=qt}return}at=at||j,Q=Q||k,xt=xt||rt,(j!==m||at!==w)&&(e.blendEquationSeparate(Wt[j],Wt[at]),m=j,w=at),(k!==_||rt!==S||Q!==b||xt!==R)&&(e.blendFuncSeparate(fe[k],fe[rt],fe[Q],fe[xt]),_=k,S=rt,b=Q,R=xt),(Dt.equals(x)===!1||It!==A)&&(e.blendColor(Dt.r,Dt.g,Dt.b,It),x.copy(Dt),A=It),f=C,D=!1}function zt(C,j){C.side===ta?Lt(e.CULL_FACE):dt(e.CULL_FACE);let k=C.side===Pn;j&&(k=!k),Qt(k),C.blending===Fr&&C.transparent===!1?ve(la):ve(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),s.setMask(C.colorWrite);const rt=C.stencilWrite;o.setTest(rt),rt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),B(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?dt(e.SAMPLE_ALPHA_TO_COVERAGE):Lt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(C){U!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),U=C)}function Jt(C){C!==_b?(dt(e.CULL_FACE),C!==z&&(C===vg?e.cullFace(e.BACK):C===vb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Lt(e.CULL_FACE),z=C}function Ee(C){C!==Y&&(P&&e.lineWidth(C),Y=C)}function B(C,j,k){C?(dt(e.POLYGON_OFFSET_FILL),(nt!==j||I!==k)&&(nt=j,I=k,r.getReversed()&&(j=-j),e.polygonOffset(j,k))):Lt(e.POLYGON_OFFSET_FILL)}function Ie(C){C?dt(e.SCISSOR_TEST):Lt(e.SCISSOR_TEST)}function $t(C){C===void 0&&(C=e.TEXTURE0+N-1),ot!==C&&(e.activeTexture(C),ot=C)}function he(C,j,k){k===void 0&&(ot===null?k=e.TEXTURE0+N-1:k=ot);let rt=Et[k];rt===void 0&&(rt={type:void 0,texture:void 0},Et[k]=rt),(rt.type!==C||rt.texture!==j)&&(ot!==k&&(e.activeTexture(k),ot=k),e.bindTexture(C,j||gt[C]),rt.type=C,rt.texture=j)}function mt(){const C=Et[ot];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Re(){try{e.compressedTexImage2D(...arguments)}catch(C){se("WebGLState:",C)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(C){se("WebGLState:",C)}}function y(){try{e.texSubImage2D(...arguments)}catch(C){se("WebGLState:",C)}}function G(){try{e.texSubImage3D(...arguments)}catch(C){se("WebGLState:",C)}}function K(){try{e.compressedTexSubImage2D(...arguments)}catch(C){se("WebGLState:",C)}}function st(){try{e.compressedTexSubImage3D(...arguments)}catch(C){se("WebGLState:",C)}}function ut(){try{e.texStorage2D(...arguments)}catch(C){se("WebGLState:",C)}}function pt(){try{e.texStorage3D(...arguments)}catch(C){se("WebGLState:",C)}}function Z(){try{e.texImage2D(...arguments)}catch(C){se("WebGLState:",C)}}function J(){try{e.texImage3D(...arguments)}catch(C){se("WebGLState:",C)}}function _t(C){return d[C]!==void 0?d[C]:e.getParameter(C)}function Mt(C,j){d[C]!==j&&(e.pixelStorei(C,j),d[C]=j)}function ht(C){jt.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),jt.copy(C))}function L(C){Ut.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),Ut.copy(C))}function q(C,j){let k=c.get(j);k===void 0&&(k=new WeakMap,c.set(j,k));let rt=k.get(C);rt===void 0&&(rt=e.getUniformBlockIndex(j,C.name),k.set(C,rt))}function it(C,j){const rt=c.get(j).get(C);l.get(j)!==rt&&(e.uniformBlockBinding(j,rt,C.__bindingPointIndex),l.set(j,rt))}function lt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},ot=null,Et={},u={},p=new WeakMap,v=[],E=null,g=!1,f=null,m=null,_=null,S=null,w=null,b=null,R=null,x=new Yt(0,0,0),A=0,D=!1,U=null,z=null,Y=null,nt=null,I=null,jt.set(0,0,e.canvas.width,e.canvas.height),Ut.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:dt,disable:Lt,bindFramebuffer:Ft,drawBuffers:Nt,useProgram:De,setBlending:ve,setMaterial:zt,setFlipSided:Qt,setCullFace:Jt,setLineWidth:Ee,setPolygonOffset:B,setScissorTest:Ie,activeTexture:$t,bindTexture:he,unbindTexture:mt,compressedTexImage2D:Re,compressedTexImage3D:T,texImage2D:Z,texImage3D:J,pixelStorei:Mt,getParameter:_t,updateUBOMapping:q,uniformBlockBinding:it,texStorage2D:ut,texStorage3D:pt,texSubImage2D:y,texSubImage3D:G,compressedTexSubImage2D:K,compressedTexSubImage3D:st,scissor:ht,viewport:L,reset:lt}}function F3(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,h=new WeakMap,d=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,y){return v?new OffscreenCanvas(T,y):Du("canvas")}function g(T,y,G){let K=1;const st=Re(T);if((st.width>G||st.height>G)&&(K=G/Math.max(st.width,st.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ut=Math.floor(K*st.width),pt=Math.floor(K*st.height);u===void 0&&(u=E(ut,pt));const Z=y?E(ut,pt):u;return Z.width=ut,Z.height=pt,Z.getContext("2d").drawImage(T,0,0,ut,pt),Ot("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ut+"x"+pt+")."),Z}else return"data"in T&&Ot("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function f(T){return T.generateMipmaps}function m(T){e.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(T,y,G,K,st,ut=!1){if(T!==null){if(e[T]!==void 0)return e[T];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let pt;K&&(pt=t.get("EXT_texture_norm16"),pt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===e.RED&&(G===e.FLOAT&&(Z=e.R32F),G===e.HALF_FLOAT&&(Z=e.R16F),G===e.UNSIGNED_BYTE&&(Z=e.R8),G===e.UNSIGNED_SHORT&&pt&&(Z=pt.R16_EXT),G===e.SHORT&&pt&&(Z=pt.R16_SNORM_EXT)),y===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(Z=e.R8UI),G===e.UNSIGNED_SHORT&&(Z=e.R16UI),G===e.UNSIGNED_INT&&(Z=e.R32UI),G===e.BYTE&&(Z=e.R8I),G===e.SHORT&&(Z=e.R16I),G===e.INT&&(Z=e.R32I)),y===e.RG&&(G===e.FLOAT&&(Z=e.RG32F),G===e.HALF_FLOAT&&(Z=e.RG16F),G===e.UNSIGNED_BYTE&&(Z=e.RG8),G===e.UNSIGNED_SHORT&&pt&&(Z=pt.RG16_EXT),G===e.SHORT&&pt&&(Z=pt.RG16_SNORM_EXT)),y===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&(Z=e.RG8UI),G===e.UNSIGNED_SHORT&&(Z=e.RG16UI),G===e.UNSIGNED_INT&&(Z=e.RG32UI),G===e.BYTE&&(Z=e.RG8I),G===e.SHORT&&(Z=e.RG16I),G===e.INT&&(Z=e.RG32I)),y===e.RGB_INTEGER&&(G===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),G===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),G===e.UNSIGNED_INT&&(Z=e.RGB32UI),G===e.BYTE&&(Z=e.RGB8I),G===e.SHORT&&(Z=e.RGB16I),G===e.INT&&(Z=e.RGB32I)),y===e.RGBA_INTEGER&&(G===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),G===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),G===e.UNSIGNED_INT&&(Z=e.RGBA32UI),G===e.BYTE&&(Z=e.RGBA8I),G===e.SHORT&&(Z=e.RGBA16I),G===e.INT&&(Z=e.RGBA32I)),y===e.RGB&&(G===e.UNSIGNED_SHORT&&pt&&(Z=pt.RGB16_EXT),G===e.SHORT&&pt&&(Z=pt.RGB16_SNORM_EXT),G===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),G===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),y===e.RGBA){const J=ut?Cu:re.getTransfer(st);G===e.FLOAT&&(Z=e.RGBA32F),G===e.HALF_FLOAT&&(Z=e.RGBA16F),G===e.UNSIGNED_BYTE&&(Z=J===pe?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT&&pt&&(Z=pt.RGBA16_EXT),G===e.SHORT&&pt&&(Z=pt.RGBA16_SNORM_EXT),G===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function w(T,y){let G;return T?y===null||y===zi||y===xl?G=e.DEPTH24_STENCIL8:y===Oi?G=e.DEPTH32F_STENCIL8:y===vl&&(G=e.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===zi||y===xl?G=e.DEPTH_COMPONENT24:y===Oi?G=e.DEPTH_COMPONENT32F:y===vl&&(G=e.DEPTH_COMPONENT16),G}function b(T,y){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==pn&&T.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function R(T){const y=T.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(T){const y=T.target;y.removeEventListener("dispose",x),U(y)}function A(T){const y=i.get(T);if(y.__webglInit===void 0)return;const G=T.source,K=p.get(G);if(K){const st=K[y.__cacheKey];st.usedTimes--,st.usedTimes===0&&D(T),Object.keys(K).length===0&&p.delete(G)}i.remove(T)}function D(T){const y=i.get(T);e.deleteTexture(y.__webglTexture);const G=T.source,K=p.get(G);delete K[y.__cacheKey],r.memory.textures--}function U(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let st=0;st<y.__webglFramebuffer[K].length;st++)e.deleteFramebuffer(y.__webglFramebuffer[K][st]);else e.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)e.deleteFramebuffer(y.__webglFramebuffer[K]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=T.textures;for(let K=0,st=G.length;K<st;K++){const ut=i.get(G[K]);ut.__webglTexture&&(e.deleteTexture(ut.__webglTexture),r.memory.textures--),i.remove(G[K])}i.remove(T)}let z=0;function Y(){z=0}function nt(){return z}function I(T){z=T}function N(){const T=z;return T>=a.maxTextures&&Ot("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),z+=1,T}function P(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function W(T,y){const G=i.get(T);if(T.isVideoTexture&&he(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){const K=T.image;if(K===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(G,T,y);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+y)}function tt(T,y){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){Lt(G,T,y);return}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+y)}function ot(T,y){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){Lt(G,T,y);return}n.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+y)}function Et(T,y){const G=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&G.__version!==T.version){Ft(G,T,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+y)}const ct={[Pd]:e.REPEAT,[aa]:e.CLAMP_TO_EDGE,[Bd]:e.MIRRORED_REPEAT},Bt={[pn]:e.NEAREST,[Gb]:e.NEAREST_MIPMAP_NEAREST,[tc]:e.NEAREST_MIPMAP_LINEAR,[on]:e.LINEAR,[Qf]:e.LINEAR_MIPMAP_NEAREST,[ys]:e.LINEAR_MIPMAP_LINEAR},jt={[kb]:e.NEVER,[jb]:e.ALWAYS,[Xb]:e.LESS,[Rm]:e.LEQUAL,[Wb]:e.EQUAL,[wm]:e.GEQUAL,[qb]:e.GREATER,[Yb]:e.NOTEQUAL};function Ut(T,y){if(y.type===Oi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===Qf||y.magFilter===tc||y.magFilter===ys||y.minFilter===on||y.minFilter===Qf||y.minFilter===tc||y.minFilter===ys)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,ct[y.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,ct[y.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,ct[y.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Bt[y.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Bt[y.minFilter]),y.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,jt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===pn||y.minFilter!==tc&&y.minFilter!==ys||y.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function et(T,y){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",R));const K=y.source;let st=p.get(K);st===void 0&&(st={},p.set(K,st));const ut=P(y);if(ut!==T.__cacheKey){st[ut]===void 0&&(st[ut]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,G=!0),st[ut].usedTimes++;const pt=st[T.__cacheKey];pt!==void 0&&(st[T.__cacheKey].usedTimes--,pt.usedTimes===0&&D(y)),T.__cacheKey=ut,T.__webglTexture=st[ut].texture}return G}function gt(T,y,G){return Math.floor(Math.floor(T/G)/y)}function dt(T,y,G,K){const ut=T.updateRanges;if(ut.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,G,K,y.data);else{ut.sort((Mt,ht)=>Mt.start-ht.start);let pt=0;for(let Mt=1;Mt<ut.length;Mt++){const ht=ut[pt],L=ut[Mt],q=ht.start+ht.count,it=gt(L.start,y.width,4),lt=gt(ht.start,y.width,4);L.start<=q+1&&it===lt&&gt(L.start+L.count-1,y.width,4)===it?ht.count=Math.max(ht.count,L.start+L.count-ht.start):(++pt,ut[pt]=L)}ut.length=pt+1;const Z=n.getParameter(e.UNPACK_ROW_LENGTH),J=n.getParameter(e.UNPACK_SKIP_PIXELS),_t=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let Mt=0,ht=ut.length;Mt<ht;Mt++){const L=ut[Mt],q=Math.floor(L.start/4),it=Math.ceil(L.count/4),lt=q%y.width,C=Math.floor(q/y.width),j=it,k=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(e.UNPACK_SKIP_ROWS,C),n.texSubImage2D(e.TEXTURE_2D,0,lt,C,j,k,G,K,y.data)}T.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Z),n.pixelStorei(e.UNPACK_SKIP_PIXELS,J),n.pixelStorei(e.UNPACK_SKIP_ROWS,_t)}}function Lt(T,y,G){let K=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=e.TEXTURE_3D);const st=et(T,y),ut=y.source;n.bindTexture(K,T.__webglTexture,e.TEXTURE0+G);const pt=i.get(ut);if(ut.version!==pt.__version||st===!0){if(n.activeTexture(e.TEXTURE0+G),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const k=re.getPrimaries(re.workingColorSpace),rt=y.colorSpace===Ba?null:re.getPrimaries(y.colorSpace),at=y.colorSpace===Ba||k===rt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let J=g(y.image,!1,a.maxTextureSize);J=mt(y,J);const _t=s.convert(y.format,y.colorSpace),Mt=s.convert(y.type);let ht=S(y.internalFormat,_t,Mt,y.normalized,y.colorSpace,y.isVideoTexture);Ut(K,y);let L;const q=y.mipmaps,it=y.isVideoTexture!==!0,lt=pt.__version===void 0||st===!0,C=ut.dataReady,j=b(y,J);if(y.isDepthTexture)ht=w(y.format===Ms,y.type),lt&&(it?n.texStorage2D(e.TEXTURE_2D,1,ht,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,ht,J.width,J.height,0,_t,Mt,null));else if(y.isDataTexture)if(q.length>0){it&&lt&&n.texStorage2D(e.TEXTURE_2D,j,ht,q[0].width,q[0].height);for(let k=0,rt=q.length;k<rt;k++)L=q[k],it?C&&n.texSubImage2D(e.TEXTURE_2D,k,0,0,L.width,L.height,_t,Mt,L.data):n.texImage2D(e.TEXTURE_2D,k,ht,L.width,L.height,0,_t,Mt,L.data);y.generateMipmaps=!1}else it?(lt&&n.texStorage2D(e.TEXTURE_2D,j,ht,J.width,J.height),C&&dt(y,J,_t,Mt)):n.texImage2D(e.TEXTURE_2D,0,ht,J.width,J.height,0,_t,Mt,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){it&&lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,ht,q[0].width,q[0].height,J.depth);for(let k=0,rt=q.length;k<rt;k++)if(L=q[k],y.format!==Ei)if(_t!==null)if(it){if(C)if(y.layerUpdates.size>0){const at=t_(L.width,L.height,y.format,y.type);for(const Q of y.layerUpdates){const xt=L.data.subarray(Q*at/L.data.BYTES_PER_ELEMENT,(Q+1)*at/L.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,Q,L.width,L.height,1,_t,xt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,0,L.width,L.height,J.depth,_t,L.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,k,ht,L.width,L.height,J.depth,0,L.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?C&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,0,L.width,L.height,J.depth,_t,Mt,L.data):n.texImage3D(e.TEXTURE_2D_ARRAY,k,ht,L.width,L.height,J.depth,0,_t,Mt,L.data)}else{it&&lt&&n.texStorage2D(e.TEXTURE_2D,j,ht,q[0].width,q[0].height);for(let k=0,rt=q.length;k<rt;k++)L=q[k],y.format!==Ei?_t!==null?it?C&&n.compressedTexSubImage2D(e.TEXTURE_2D,k,0,0,L.width,L.height,_t,L.data):n.compressedTexImage2D(e.TEXTURE_2D,k,ht,L.width,L.height,0,L.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?C&&n.texSubImage2D(e.TEXTURE_2D,k,0,0,L.width,L.height,_t,Mt,L.data):n.texImage2D(e.TEXTURE_2D,k,ht,L.width,L.height,0,_t,Mt,L.data)}else if(y.isDataArrayTexture)if(it){if(lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,ht,J.width,J.height,J.depth),C)if(y.layerUpdates.size>0){const k=t_(J.width,J.height,y.format,y.type);for(const rt of y.layerUpdates){const at=J.data.subarray(rt*k/J.data.BYTES_PER_ELEMENT,(rt+1)*k/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,rt,J.width,J.height,1,_t,Mt,at)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,_t,Mt,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ht,J.width,J.height,J.depth,0,_t,Mt,J.data);else if(y.isData3DTexture)it?(lt&&n.texStorage3D(e.TEXTURE_3D,j,ht,J.width,J.height,J.depth),C&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,_t,Mt,J.data)):n.texImage3D(e.TEXTURE_3D,0,ht,J.width,J.height,J.depth,0,_t,Mt,J.data);else if(y.isFramebufferTexture){if(lt)if(it)n.texStorage2D(e.TEXTURE_2D,j,ht,J.width,J.height);else{let k=J.width,rt=J.height;for(let at=0;at<j;at++)n.texImage2D(e.TEXTURE_2D,at,ht,k,rt,0,_t,Mt,null),k>>=1,rt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){const k=e.canvas;if(k.hasAttribute("layoutsubtree")||k.setAttribute("layoutsubtree","true"),J.parentNode!==k){k.appendChild(J),d.add(y),k.onpaint=Dt=>{const It=Dt.changedElements;for(const qt of d)It.includes(qt.image)&&(qt.needsUpdate=!0)},k.requestPaint();return}const rt=0,at=e.RGBA,Q=e.RGBA,xt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,rt,at,Q,xt,J),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(q.length>0){if(it&&lt){const k=Re(q[0]);n.texStorage2D(e.TEXTURE_2D,j,ht,k.width,k.height)}for(let k=0,rt=q.length;k<rt;k++)L=q[k],it?C&&n.texSubImage2D(e.TEXTURE_2D,k,0,0,_t,Mt,L):n.texImage2D(e.TEXTURE_2D,k,ht,_t,Mt,L);y.generateMipmaps=!1}else if(it){if(lt){const k=Re(J);n.texStorage2D(e.TEXTURE_2D,j,ht,k.width,k.height)}C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,_t,Mt,J)}else n.texImage2D(e.TEXTURE_2D,0,ht,_t,Mt,J);f(y)&&m(K),pt.__version=ut.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Ft(T,y,G){if(y.image.length!==6)return;const K=et(T,y),st=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+G);const ut=i.get(st);if(st.version!==ut.__version||K===!0){n.activeTexture(e.TEXTURE0+G);const pt=re.getPrimaries(re.workingColorSpace),Z=y.colorSpace===Ba?null:re.getPrimaries(y.colorSpace),J=y.colorSpace===Ba||pt===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const _t=y.isCompressedTexture||y.image[0].isCompressedTexture,Mt=y.image[0]&&y.image[0].isDataTexture,ht=[];for(let Q=0;Q<6;Q++)!_t&&!Mt?ht[Q]=g(y.image[Q],!0,a.maxCubemapSize):ht[Q]=Mt?y.image[Q].image:y.image[Q],ht[Q]=mt(y,ht[Q]);const L=ht[0],q=s.convert(y.format,y.colorSpace),it=s.convert(y.type),lt=S(y.internalFormat,q,it,y.normalized,y.colorSpace),C=y.isVideoTexture!==!0,j=ut.__version===void 0||K===!0,k=st.dataReady;let rt=b(y,L);Ut(e.TEXTURE_CUBE_MAP,y);let at;if(_t){C&&j&&n.texStorage2D(e.TEXTURE_CUBE_MAP,rt,lt,L.width,L.height);for(let Q=0;Q<6;Q++){at=ht[Q].mipmaps;for(let xt=0;xt<at.length;xt++){const Dt=at[xt];y.format!==Ei?q!==null?C?k&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,Dt.width,Dt.height,q,Dt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,lt,Dt.width,Dt.height,0,Dt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?k&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,Dt.width,Dt.height,q,it,Dt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,lt,Dt.width,Dt.height,0,q,it,Dt.data)}}}else{if(at=y.mipmaps,C&&j){at.length>0&&rt++;const Q=Re(ht[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,rt,lt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Mt){C?k&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ht[Q].width,ht[Q].height,q,it,ht[Q].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,lt,ht[Q].width,ht[Q].height,0,q,it,ht[Q].data);for(let xt=0;xt<at.length;xt++){const It=at[xt].image[Q].image;C?k&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,It.width,It.height,q,it,It.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,lt,It.width,It.height,0,q,it,It.data)}}else{C?k&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,q,it,ht[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,lt,q,it,ht[Q]);for(let xt=0;xt<at.length;xt++){const Dt=at[xt];C?k&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,q,it,Dt.image[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,lt,q,it,Dt.image[Q])}}}f(y)&&m(e.TEXTURE_CUBE_MAP),ut.__version=st.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Nt(T,y,G,K,st,ut){const pt=s.convert(G.format,G.colorSpace),Z=s.convert(G.type),J=S(G.internalFormat,pt,Z,G.normalized,G.colorSpace),_t=i.get(y),Mt=i.get(G);if(Mt.__renderTarget=y,!_t.__hasExternalTextures){const ht=Math.max(1,y.width>>ut),L=Math.max(1,y.height>>ut);st===e.TEXTURE_3D||st===e.TEXTURE_2D_ARRAY?n.texImage3D(st,ut,J,ht,L,y.depth,0,pt,Z,null):n.texImage2D(st,ut,J,ht,L,0,pt,Z,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),$t(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,st,Mt.__webglTexture,0,Ie(y)):(st===e.TEXTURE_2D||st>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,st,Mt.__webglTexture,ut),n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(T,y,G){if(e.bindRenderbuffer(e.RENDERBUFFER,T),y.depthBuffer){const K=y.depthTexture,st=K&&K.isDepthTexture?K.type:null,ut=w(y.stencilBuffer,st),pt=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;$t(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(y),ut,y.width,y.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(y),ut,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,ut,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pt,e.RENDERBUFFER,T)}else{const K=y.textures;for(let st=0;st<K.length;st++){const ut=K[st],pt=s.convert(ut.format,ut.colorSpace),Z=s.convert(ut.type),J=S(ut.internalFormat,pt,Z,ut.normalized,ut.colorSpace);$t(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(y),J,y.width,y.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(y),J,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,J,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Wt(T,y,G){const K=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=i.get(y.depthTexture);if(st.__renderTarget=y,(!st.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(st.__webglInit===void 0&&(st.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),st.__webglTexture===void 0){st.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,st.__webglTexture),Ut(e.TEXTURE_CUBE_MAP,y.depthTexture);const _t=s.convert(y.depthTexture.format),Mt=s.convert(y.depthTexture.type);let ht;y.depthTexture.format===va?ht=e.DEPTH_COMPONENT24:y.depthTexture.format===Ms&&(ht=e.DEPTH24_STENCIL8);for(let L=0;L<6;L++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,ht,y.width,y.height,0,_t,Mt,null)}}else W(y.depthTexture,0);const ut=st.__webglTexture,pt=Ie(y),Z=K?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,J=y.depthTexture.format===Ms?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===va)$t(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,Z,ut,0,pt):e.framebufferTexture2D(e.FRAMEBUFFER,J,Z,ut,0);else if(y.depthTexture.format===Ms)$t(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,Z,ut,0,pt):e.framebufferTexture2D(e.FRAMEBUFFER,J,Z,ut,0);else throw new Error("Unknown depthTexture format")}function fe(T){const y=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const st=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",st)};K.addEventListener("dispose",st),y.__depthDisposeCallback=st}y.__boundDepthTexture=K}if(T.depthTexture&&!y.__autoAllocateDepthBuffer)if(G)for(let K=0;K<6;K++)Wt(y.__webglFramebuffer[K],T,K);else{const K=T.texture.mipmaps;K&&K.length>0?Wt(y.__webglFramebuffer[0],T,0):Wt(y.__webglFramebuffer,T,0)}else if(G){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=e.createRenderbuffer(),De(y.__webglDepthbuffer[K],T,!1);else{const st=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,ut),e.framebufferRenderbuffer(e.FRAMEBUFFER,st,e.RENDERBUFFER,ut)}}else{const K=T.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),De(y.__webglDepthbuffer,T,!1);else{const st=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ut),e.framebufferRenderbuffer(e.FRAMEBUFFER,st,e.RENDERBUFFER,ut)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(T,y,G){const K=i.get(T);y!==void 0&&Nt(K.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&fe(T)}function zt(T){const y=T.texture,G=i.get(T),K=i.get(y);T.addEventListener("dispose",x);const st=T.textures,ut=T.isWebGLCubeRenderTarget===!0,pt=st.length>1;if(pt||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=y.version,r.memory.textures++),ut){G.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[Z]=[];for(let J=0;J<y.mipmaps.length;J++)G.__webglFramebuffer[Z][J]=e.createFramebuffer()}else G.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)G.__webglFramebuffer[Z]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(pt)for(let Z=0,J=st.length;Z<J;Z++){const _t=i.get(st[Z]);_t.__webglTexture===void 0&&(_t.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&$t(T)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Z=0;Z<st.length;Z++){const J=st[Z];G.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[Z]);const _t=s.convert(J.format,J.colorSpace),Mt=s.convert(J.type),ht=S(J.internalFormat,_t,Mt,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),L=Ie(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,L,ht,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,G.__webglColorRenderbuffer[Z])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),De(G.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ut){n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),Ut(e.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)Nt(G.__webglFramebuffer[Z][J],T,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else Nt(G.__webglFramebuffer[Z],T,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(y)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pt){for(let Z=0,J=st.length;Z<J;Z++){const _t=st[Z],Mt=i.get(_t);let ht=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ht,Mt.__webglTexture),Ut(ht,_t),Nt(G.__webglFramebuffer,T,_t,e.COLOR_ATTACHMENT0+Z,ht,0),f(_t)&&m(ht)}n.unbindTexture()}else{let Z=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Z,K.__webglTexture),Ut(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)Nt(G.__webglFramebuffer[J],T,y,e.COLOR_ATTACHMENT0,Z,J);else Nt(G.__webglFramebuffer,T,y,e.COLOR_ATTACHMENT0,Z,0);f(y)&&m(Z),n.unbindTexture()}T.depthBuffer&&fe(T)}function Qt(T){const y=T.textures;for(let G=0,K=y.length;G<K;G++){const st=y[G];if(f(st)){const ut=_(T),pt=i.get(st).__webglTexture;n.bindTexture(ut,pt),m(ut),n.unbindTexture()}}}const Jt=[],Ee=[];function B(T){if(T.samples>0){if($t(T)===!1){const y=T.textures,G=T.width,K=T.height;let st=e.COLOR_BUFFER_BIT;const ut=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pt=i.get(T),Z=y.length>1;if(Z)for(let _t=0;_t<y.length;_t++)n.bindFramebuffer(e.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,pt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);const J=T.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let _t=0;_t<y.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=e.STENCIL_BUFFER_BIT)),Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pt.__webglColorRenderbuffer[_t]);const Mt=i.get(y[_t]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Mt,0)}e.blitFramebuffer(0,0,G,K,0,0,G,K,st,e.NEAREST),l===!0&&(Jt.length=0,Ee.length=0,Jt.push(e.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Jt.push(ut),Ee.push(ut),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ee)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Jt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let _t=0;_t<y.length;_t++){n.bindFramebuffer(e.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_t,e.RENDERBUFFER,pt.__webglColorRenderbuffer[_t]);const Mt=i.get(y[_t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,pt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_t,e.TEXTURE_2D,Mt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function Ie(T){return Math.min(a.maxSamples,T.samples)}function $t(T){const y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function he(T){const y=r.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function mt(T,y){const G=T.colorSpace,K=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==wu&&G!==Ba&&(re.getTransfer(G)===pe?(K!==Ei||st!==jn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",G)),y}function Re(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=Y,this.getTextureUnits=nt,this.setTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=tt,this.setTexture3D=ot,this.setTextureCube=Et,this.rebindTextures=ve,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function z3(e,t){function n(i,a=Ba){let s;const r=re.getTransfer(a);if(i===jn)return e.UNSIGNED_BYTE;if(i===Mm)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Em)return e.UNSIGNED_SHORT_5_5_5_1;if(i===zS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===GS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===IS)return e.BYTE;if(i===FS)return e.SHORT;if(i===vl)return e.UNSIGNED_SHORT;if(i===ym)return e.INT;if(i===zi)return e.UNSIGNED_INT;if(i===Oi)return e.FLOAT;if(i===_a)return e.HALF_FLOAT;if(i===HS)return e.ALPHA;if(i===VS)return e.RGB;if(i===Ei)return e.RGBA;if(i===va)return e.DEPTH_COMPONENT;if(i===Ms)return e.DEPTH_STENCIL;if(i===kS)return e.RED;if(i===bm)return e.RED_INTEGER;if(i===Os)return e.RG;if(i===Tm)return e.RG_INTEGER;if(i===Am)return e.RGBA_INTEGER;if(i===kc||i===Xc||i===Wc||i===qc)if(r===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===kc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===kc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Id||i===Fd||i===zd||i===Gd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Id)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hd||i===Vd||i===kd||i===Xd||i===Wd||i===Au||i===qd)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hd||i===Vd)return r===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kd)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xd)return s.COMPRESSED_R11_EAC;if(i===Wd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Au)return s.COMPRESSED_RG11_EAC;if(i===qd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yd||i===jd||i===Zd||i===Kd||i===Qd||i===Jd||i===$d||i===tp||i===ep||i===np||i===ip||i===ap||i===sp||i===rp)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yd)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jd)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zd)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kd)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qd)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jd)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$d)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tp)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ep)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===np)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ip)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ap)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sp)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rp)return r===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===op||i===lp||i===cp)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===op)return r===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===up||i===fp||i===Ru||i===hp)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===up)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ru)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const G3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H3=`
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

}`;class V3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new QS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new bi({vertexShader:G3,fragmentShader:H3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new yn(new Pl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k3 extends Gs{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,v=null;const E=typeof XRWebGLBinding<"u",g=new V3,f={},m=n.getContextAttributes();let _=null,S=null;const w=[],b=[],R=new Ht;let x=null;const A=new qn;A.viewport=new He;const D=new qn;D.viewport=new He;const U=[A,D],z=new $1;let Y=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let gt=w[et];return gt===void 0&&(gt=new ih,w[et]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(et){let gt=w[et];return gt===void 0&&(gt=new ih,w[et]=gt),gt.getGripSpace()},this.getHand=function(et){let gt=w[et];return gt===void 0&&(gt=new ih,w[et]=gt),gt.getHandSpace()};function I(et){const gt=b.indexOf(et.inputSource);if(gt===-1)return;const dt=w[gt];dt!==void 0&&(dt.update(et.inputSource,et.frame,c||r),dt.dispatchEvent({type:et.type,data:et.inputSource}))}function N(){a.removeEventListener("select",I),a.removeEventListener("selectstart",I),a.removeEventListener("selectend",I),a.removeEventListener("squeeze",I),a.removeEventListener("squeezestart",I),a.removeEventListener("squeezeend",I),a.removeEventListener("end",N),a.removeEventListener("inputsourceschange",P);for(let et=0;et<w.length;et++){const gt=b[et];gt!==null&&(b[et]=null,w[et].disconnect(gt))}Y=null,nt=null,g.reset();for(const et in f)delete f[et];t.setRenderTarget(_),p=null,u=null,d=null,a=null,S=null,Ut.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){s=et,i.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,i.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(a,n)),d},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(et){if(a=et,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",I),a.addEventListener("selectstart",I),a.addEventListener("selectend",I),a.addEventListener("squeeze",I),a.addEventListener("squeezestart",I),a.addEventListener("squeezeend",I),a.addEventListener("end",N),a.addEventListener("inputsourceschange",P),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Lt=null,Ft=null;m.depth&&(Ft=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,dt=m.stencil?Ms:va,Lt=m.stencil?xl:zi);const Nt={colorFormat:n.RGBA8,depthFormat:Ft,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Nt),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Fi(u.textureWidth,u.textureHeight,{format:Ei,type:jn,depthTexture:new $r(u.textureWidth,u.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,n,dt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Fi(p.framebufferWidth,p.framebufferHeight,{format:Ei,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Ut.setContext(a),Ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function P(et){for(let gt=0;gt<et.removed.length;gt++){const dt=et.removed[gt],Lt=b.indexOf(dt);Lt>=0&&(b[Lt]=null,w[Lt].disconnect(dt))}for(let gt=0;gt<et.added.length;gt++){const dt=et.added[gt];let Lt=b.indexOf(dt);if(Lt===-1){for(let Nt=0;Nt<w.length;Nt++)if(Nt>=b.length){b.push(dt),Lt=Nt;break}else if(b[Nt]===null){b[Nt]=dt,Lt=Nt;break}if(Lt===-1)break}const Ft=w[Lt];Ft&&Ft.connect(dt)}}const W=new O,tt=new O;function ot(et,gt,dt){W.setFromMatrixPosition(gt.matrixWorld),tt.setFromMatrixPosition(dt.matrixWorld);const Lt=W.distanceTo(tt),Ft=gt.projectionMatrix.elements,Nt=dt.projectionMatrix.elements,De=Ft[14]/(Ft[10]-1),Wt=Ft[14]/(Ft[10]+1),fe=(Ft[9]+1)/Ft[5],ve=(Ft[9]-1)/Ft[5],zt=(Ft[8]-1)/Ft[0],Qt=(Nt[8]+1)/Nt[0],Jt=De*zt,Ee=De*Qt,B=Lt/(-zt+Qt),Ie=B*-zt;if(gt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ie),et.translateZ(B),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ft[10]===-1)et.projectionMatrix.copy(gt.projectionMatrix),et.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const $t=De+B,he=Wt+B,mt=Jt-Ie,Re=Ee+(Lt-Ie),T=fe*Wt/he*$t,y=ve*Wt/he*$t;et.projectionMatrix.makePerspective(mt,Re,T,y,$t,he),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Et(et,gt){gt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(gt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(a===null)return;let gt=et.near,dt=et.far;g.texture!==null&&(g.depthNear>0&&(gt=g.depthNear),g.depthFar>0&&(dt=g.depthFar)),z.near=D.near=A.near=gt,z.far=D.far=A.far=dt,(Y!==z.near||nt!==z.far)&&(a.updateRenderState({depthNear:z.near,depthFar:z.far}),Y=z.near,nt=z.far),z.layers.mask=et.layers.mask|6,A.layers.mask=z.layers.mask&-5,D.layers.mask=z.layers.mask&-3;const Lt=et.parent,Ft=z.cameras;Et(z,Lt);for(let Nt=0;Nt<Ft.length;Nt++)Et(Ft[Nt],Lt);Ft.length===2?ot(z,A,D):z.projectionMatrix.copy(A.projectionMatrix),ct(et,z,Lt)};function ct(et,gt,dt){dt===null?et.matrix.copy(gt.matrixWorld):(et.matrix.copy(dt.matrixWorld),et.matrix.invert(),et.matrix.multiply(gt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(gt.projectionMatrix),et.projectionMatrixInverse.copy(gt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=yl*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(et){l=et,u!==null&&(u.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(et){return f[et]};let Bt=null;function jt(et,gt){if(h=gt.getViewerPose(c||r),v=gt,h!==null){const dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Lt=!1;dt.length!==z.cameras.length&&(z.cameras.length=0,Lt=!0);for(let Wt=0;Wt<dt.length;Wt++){const fe=dt[Wt];let ve=null;if(p!==null)ve=p.getViewport(fe);else{const Qt=d.getViewSubImage(u,fe);ve=Qt.viewport,Wt===0&&(t.setRenderTargetTextures(S,Qt.colorTexture,Qt.depthStencilTexture),t.setRenderTarget(S))}let zt=U[Wt];zt===void 0&&(zt=new qn,zt.layers.enable(Wt),zt.viewport=new He,U[Wt]=zt),zt.matrix.fromArray(fe.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(fe.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ve.x,ve.y,ve.width,ve.height),Wt===0&&(z.matrix.copy(zt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Lt===!0&&z.cameras.push(zt)}const Ft=a.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){d=i.getBinding();const Wt=d.getDepthInformation(dt[0]);Wt&&Wt.isValid&&Wt.texture&&g.init(Wt,a.renderState)}if(Ft&&Ft.includes("camera-access")&&E){t.state.unbindTexture(),d=i.getBinding();for(let Wt=0;Wt<dt.length;Wt++){const fe=dt[Wt].camera;if(fe){let ve=f[fe];ve||(ve=new QS,f[fe]=ve);const zt=d.getCameraImage(fe);ve.sourceTexture=zt}}}}for(let dt=0;dt<w.length;dt++){const Lt=b[dt],Ft=w[dt];Lt!==null&&Ft!==void 0&&Ft.update(Lt,gt,c||r)}Bt&&Bt(et,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),v=null}const Ut=new ny;Ut.setAnimationLoop(jt),this.setAnimationLoop=function(et){Bt=et},this.dispose=function(){}}}const X3=new Be,cy=new Gt;cy.set(-1,0,0,0,1,0,0,0,1);function W3(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,JS(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,m,_,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,S)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),E(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Pn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Pn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=t.get(f),_=m.envMap,S=m.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(X3.makeRotationFromEuler(S)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(cy),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){const m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function q3(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const S=_.program;i.uniformBlockBinding(m,S)}function c(m,_){let S=a[m.id];S===void 0&&(v(m),S=h(m),a[m.id]=S,m.addEventListener("dispose",g));const w=_.program;i.updateUBOMapping(m,w);const b=t.render.frame;s[m.id]!==b&&(u(m),s[m.id]=b)}function h(m){const _=d();m.__bindingPointIndex=_;const S=e.createBuffer(),w=m.__size,b=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,w,b),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,S),S}function d(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=a[m.id],S=m.uniforms,w=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let b=0,R=S.length;b<R;b++){const x=Array.isArray(S[b])?S[b]:[S[b]];for(let A=0,D=x.length;A<D;A++){const U=x[A];if(p(U,b,A,w)===!0){const z=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value];let nt=0;for(let I=0;I<Y.length;I++){const N=Y[I],P=E(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,z+nt,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):ArrayBuffer.isView(N)?U.__data.set(new N.constructor(N.buffer,N.byteOffset,U.__data.length)):(N.toArray(U.__data,nt),nt+=P.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,z,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(m,_,S,w){const b=m.value,R=_+"_"+S;if(w[R]===void 0)return typeof b=="number"||typeof b=="boolean"?w[R]=b:ArrayBuffer.isView(b)?w[R]=b.slice():w[R]=b.clone(),!0;{const x=w[R];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return w[R]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(x.equals(b)===!1)return x.copy(b),!0}}return!1}function v(m){const _=m.uniforms;let S=0;const w=16;for(let R=0,x=_.length;R<x;R++){const A=Array.isArray(_[R])?_[R]:[_[R]];for(let D=0,U=A.length;D<U;D++){const z=A[D],Y=Array.isArray(z.value)?z.value:[z.value];for(let nt=0,I=Y.length;nt<I;nt++){const N=Y[nt],P=E(N),W=S%w,tt=W%P.boundary,ot=W+tt;S+=tt,ot!==0&&w-ot<P.storage&&(S+=w-ot),z.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=P.storage}}}const b=S%w;return b>0&&(S+=w-b),m.__size=S,m.__cache={},this}function E(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const S=r.indexOf(_.__bindingPointIndex);r.splice(S,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function f(){for(const m in a)e.deleteBuffer(a[m]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}const Y3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function j3(){return Ci===null&&(Ci=new P1(Y3,16,16,Os,_a),Ci.name="DFG_LUT",Ci.minFilter=on,Ci.magFilter=on,Ci.wrapS=aa,Ci.wrapT=aa,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class Z3{constructor(t={}){const{canvas:n=Kb(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=jn}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;const E=p,g=new Set([Am,Tm,bm]),f=new Set([jn,zi,vl,xl,Mm,Em]),m=new Uint32Array(4),_=new Int32Array(4),S=new O;let w=null,b=null;const R=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let U=!1,z=null;this._outputColorSpace=si;let Y=0,nt=0,I=null,N=-1,P=null;const W=new He,tt=new He;let ot=null;const Et=new Yt(0);let ct=0,Bt=n.width,jt=n.height,Ut=1,et=null,gt=null;const dt=new He(0,0,Bt,jt),Lt=new He(0,0,Bt,jt);let Ft=!1;const Nt=new Om;let De=!1,Wt=!1;const fe=new Be,ve=new O,zt=new He,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function Ee(){return I===null?Ut:1}let B=i;function Ie(M,F){return n.getContext(M,F)}try{const M={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sm}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",xt,!1),n.addEventListener("webglcontextcreationerror",Dt,!1),B===null){const F="webgl2";if(B=Ie(F,M),B===null)throw Ie(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw se("WebGLRenderer: "+M.message),M}let $t,he,mt,Re,T,y,G,K,st,ut,pt,Z,J,_t,Mt,ht,L,q,it,lt,C,j,k;function rt(){$t=new j2(B),$t.init(),C=new z3(B,$t),he=new G2(B,$t,t,C),mt=new I3(B,$t),he.reversedDepthBuffer&&u&&mt.buffers.depth.setReversed(!0),Re=new Q2(B),T=new E3,y=new F3(B,$t,mt,T,he,C,Re),G=new Y2(D),K=new eT(B),j=new F2(B,K),st=new Z2(B,K,Re,j),ut=new $2(B,st,K,j,Re),q=new J2(B,he,y),Mt=new H2(T),pt=new M3(D,G,$t,he,j,Mt),Z=new W3(D,T),J=new T3,_t=new U3($t),L=new I2(D,G,mt,ut,v,l),ht=new B3(D,ut,he),k=new q3(B,Re,he,mt),it=new z2(B,$t,Re),lt=new K2(B,$t,Re),Re.programs=pt.programs,D.capabilities=he,D.extensions=$t,D.properties=T,D.renderLists=J,D.shadowMap=ht,D.state=mt,D.info=Re}rt(),E!==jn&&(A=new eR(E,n.width,n.height,a,s));const at=new k3(D,B);this.xr=at,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const M=$t.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$t.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(M){M!==void 0&&(Ut=M,this.setSize(Bt,jt,!1))},this.getSize=function(M){return M.set(Bt,jt)},this.setSize=function(M,F,X=!0){if(at.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Bt=M,jt=F,n.width=Math.floor(M*Ut),n.height=Math.floor(F*Ut),X===!0&&(n.style.width=M+"px",n.style.height=F+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Bt*Ut,jt*Ut).floor()},this.setDrawingBufferSize=function(M,F,X){Bt=M,jt=F,Ut=X,n.width=Math.floor(M*X),n.height=Math.floor(F*X),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(E===jn){se("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Ot("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(W)},this.getViewport=function(M){return M.copy(dt)},this.setViewport=function(M,F,X,H){M.isVector4?dt.set(M.x,M.y,M.z,M.w):dt.set(M,F,X,H),mt.viewport(W.copy(dt).multiplyScalar(Ut).round())},this.getScissor=function(M){return M.copy(Lt)},this.setScissor=function(M,F,X,H){M.isVector4?Lt.set(M.x,M.y,M.z,M.w):Lt.set(M,F,X,H),mt.scissor(tt.copy(Lt).multiplyScalar(Ut).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(M){mt.setScissorTest(Ft=M)},this.setOpaqueSort=function(M){et=M},this.setTransparentSort=function(M){gt=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,X=!0){let H=0;if(M){let V=!1;if(I!==null){const yt=I.texture.format;V=g.has(yt)}if(V){const yt=I.texture.type,Tt=f.has(yt),St=L.getClearColor(),At=L.getClearAlpha(),wt=St.r,kt=St.g,Kt=St.b;Tt?(m[0]=wt,m[1]=kt,m[2]=Kt,m[3]=At,B.clearBufferuiv(B.COLOR,0,m)):(_[0]=wt,_[1]=kt,_[2]=Kt,_[3]=At,B.clearBufferiv(B.COLOR,0,_))}else H|=B.COLOR_BUFFER_BIT}F&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",xt,!1),n.removeEventListener("webglcontextcreationerror",Dt,!1),L.dispose(),J.dispose(),_t.dispose(),T.dispose(),G.dispose(),ut.dispose(),j.dispose(),k.dispose(),pt.dispose(),at.dispose(),at.removeEventListener("sessionstart",Ai),at.removeEventListener("sessionend",zn),Gn.stop()};function Q(M){M.preventDefault(),Uu("WebGLRenderer: Context Lost."),U=!0}function xt(){Uu("WebGLRenderer: Context Restored."),U=!1;const M=Re.autoReset,F=ht.enabled,X=ht.autoUpdate,H=ht.needsUpdate,V=ht.type;rt(),Re.autoReset=M,ht.enabled=F,ht.autoUpdate=X,ht.needsUpdate=H,ht.type=V}function Dt(M){se("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function It(M){const F=M.target;F.removeEventListener("dispose",It),qt(F)}function qt(M){nn(M),T.remove(M)}function nn(M){const F=T.get(M).programs;F!==void 0&&(F.forEach(function(X){pt.releaseProgram(X)}),M.isShaderMaterial&&pt.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,X,H,V,yt){F===null&&(F=Qt);const Tt=V.isMesh&&V.matrixWorld.determinant()<0,St=go(M,F,X,H,V);mt.setMaterial(H,Tt);let At=X.index,wt=1;if(H.wireframe===!0){if(At=st.getWireframeAttribute(X),At===void 0)return;wt=2}const kt=X.drawRange,Kt=X.attributes.position;let Ct=kt.start*wt,Se=(kt.start+kt.count)*wt;yt!==null&&(Ct=Math.max(Ct,yt.start*wt),Se=Math.min(Se,(yt.start+yt.count)*wt)),At!==null?(Ct=Math.max(Ct,0),Se=Math.min(Se,At.count)):Kt!=null&&(Ct=Math.max(Ct,0),Se=Math.min(Se,Kt.count));const Ve=Se-Ct;if(Ve<0||Ve===1/0)return;j.setup(V,H,St,X,At);let Fe,be=it;if(At!==null&&(Fe=K.get(At),be=lt,be.setIndex(Fe)),V.isMesh)H.wireframe===!0?(mt.setLineWidth(H.wireframeLinewidth*Ee()),be.setMode(B.LINES)):be.setMode(B.TRIANGLES);else if(V.isLine){let vn=H.linewidth;vn===void 0&&(vn=1),mt.setLineWidth(vn*Ee()),V.isLineSegments?be.setMode(B.LINES):V.isLineLoop?be.setMode(B.LINE_LOOP):be.setMode(B.LINE_STRIP)}else V.isPoints?be.setMode(B.POINTS):V.isSprite&&be.setMode(B.TRIANGLES);if(V.isBatchedMesh)if($t.get("WEBGL_multi_draw"))be.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const vn=V._multiDrawStarts,bt=V._multiDrawCounts,Hn=V._multiDrawCount,le=At?K.get(At).bytesPerElement:1,ni=T.get(H).currentProgram.getUniforms();for(let Ri=0;Ri<Hn;Ri++)ni.setValue(B,"_gl_DrawID",Ri),be.render(vn[Ri]/le,bt[Ri])}else if(V.isInstancedMesh)be.renderInstances(Ct,Ve,V.count);else if(X.isInstancedBufferGeometry){const vn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,bt=Math.min(X.instanceCount,vn);be.renderInstances(Ct,Ve,bt)}else be.render(Ct,Ve)};function te(M,F,X){M.transparent===!0&&M.side===ta&&M.forceSinglePass===!1?(M.side=Pn,M.needsUpdate=!0,ls(M,F,X),M.side=as,M.needsUpdate=!0,ls(M,F,X),M.side=ta):ls(M,F,X)}this.compile=function(M,F,X=null){X===null&&(X=M),b=_t.get(X),b.init(F),x.push(b),X.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),M!==X&&M.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();const H=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const yt=V.material;if(yt)if(Array.isArray(yt))for(let Tt=0;Tt<yt.length;Tt++){const St=yt[Tt];te(St,X,V),H.add(St)}else te(yt,X,V),H.add(yt)}),b=x.pop(),H},this.compileAsync=function(M,F,X=null){const H=this.compile(M,F,X);return new Promise(V=>{function yt(){if(H.forEach(function(Tt){T.get(Tt).currentProgram.isReady()&&H.delete(Tt)}),H.size===0){V(M);return}setTimeout(yt,10)}$t.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let En=null;function Cn(M){En&&En(M)}function Ai(){Gn.stop()}function zn(){Gn.start()}const Gn=new ny;Gn.setAnimationLoop(Cn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(M){En=M,at.setAnimationLoop(M),M===null?Gn.stop():Gn.start()},at.addEventListener("sessionstart",Ai),at.addEventListener("sessionend",zn),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(M,F);const X=at.enabled===!0&&at.isPresenting===!0,H=A!==null&&(I===null||X)&&A.begin(D,I);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(F),F=at.getCamera()),M.isScene===!0&&M.onBeforeRender(D,M,F,I),b=_t.get(M,x.length),b.init(F),b.state.textureUnits=y.getTextureUnits(),x.push(b),fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Nt.setFromProjectionMatrix(fe,Pi,F.reversedDepth),Wt=this.localClippingEnabled,De=Mt.init(this.clippingPlanes,Wt),w=J.get(M,R.length),w.init(),R.push(w),at.enabled===!0&&at.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&ks(Tt,F,-1/0,D.sortObjects)}ks(M,F,0,D.sortObjects),w.finish(),D.sortObjects===!0&&w.sort(et,gt),Jt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Jt&&L.addToRenderList(w,M),this.info.render.frame++,De===!0&&Mt.beginShadows();const V=b.state.shadowsArray;if(ht.render(V,M,F),De===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&A.hasRenderPass())===!1){const Tt=w.opaque,St=w.transmissive;if(b.setupLights(),F.isArrayCamera){const At=F.cameras;if(St.length>0)for(let wt=0,kt=At.length;wt<kt;wt++){const Kt=At[wt];ho(Tt,St,M,Kt)}Jt&&L.render(M);for(let wt=0,kt=At.length;wt<kt;wt++){const Kt=At[wt];fo(w,M,Kt,Kt.viewport)}}else St.length>0&&ho(Tt,St,M,F),Jt&&L.render(M),fo(w,M,F)}I!==null&&nt===0&&(y.updateMultisampleRenderTarget(I),y.updateRenderTargetMipmap(I)),H&&A.end(D),M.isScene===!0&&M.onAfterRender(D,M,F),j.resetDefaultState(),N=-1,P=null,x.pop(),x.length>0?(b=x[x.length-1],y.setTextureUnits(b.state.textureUnits),De===!0&&Mt.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,z!==null&&z.renderEnd()};function ks(M,F,X,H){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Nt.intersectsSprite(M)){H&&zt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(fe);const Tt=ut.update(M),St=M.material;St.visible&&w.push(M,Tt,St,X,zt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Nt.intersectsObject(M))){const Tt=ut.update(M),St=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),zt.copy(M.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),zt.copy(Tt.boundingSphere.center)),zt.applyMatrix4(M.matrixWorld).applyMatrix4(fe)),Array.isArray(St)){const At=Tt.groups;for(let wt=0,kt=At.length;wt<kt;wt++){const Kt=At[wt],Ct=St[Kt.materialIndex];Ct&&Ct.visible&&w.push(M,Tt,Ct,X,zt.z,Kt)}}else St.visible&&w.push(M,Tt,St,X,zt.z,null)}}const yt=M.children;for(let Tt=0,St=yt.length;Tt<St;Tt++)ks(yt[Tt],F,X,H)}function fo(M,F,X,H){const{opaque:V,transmissive:yt,transparent:Tt}=M;b.setupLightsView(X),De===!0&&Mt.setGlobalState(D.clippingPlanes,X),H&&mt.viewport(W.copy(H)),V.length>0&&xe(V,F,X),yt.length>0&&xe(yt,F,X),Tt.length>0&&xe(Tt,F,X),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function ho(M,F,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Ct=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Fi(1,1,{generateMipmaps:!0,type:Ct?_a:jn,minFilter:ys,samples:Math.max(4,he.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace})}const yt=b.state.transmissionRenderTarget[H.id],Tt=H.viewport||W;yt.setSize(Tt.z*D.transmissionResolutionScale,Tt.w*D.transmissionResolutionScale);const St=D.getRenderTarget(),At=D.getActiveCubeFace(),wt=D.getActiveMipmapLevel();D.setRenderTarget(yt),D.getClearColor(Et),ct=D.getClearAlpha(),ct<1&&D.setClearColor(16777215,.5),D.clear(),Jt&&L.render(X);const kt=D.toneMapping;D.toneMapping=Ii;const Kt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),De===!0&&Mt.setGlobalState(D.clippingPlanes,H),xe(M,X,H),y.updateMultisampleRenderTarget(yt),y.updateRenderTargetMipmap(yt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let Se=0,Ve=F.length;Se<Ve;Se++){const Fe=F[Se],{object:be,geometry:vn,material:bt,group:Hn}=Fe;if(bt.side===ta&&be.layers.test(H.layers)){const le=bt.side;bt.side=Pn,bt.needsUpdate=!0,de(be,X,H,vn,bt,Hn),bt.side=le,bt.needsUpdate=!0,Ct=!0}}Ct===!0&&(y.updateMultisampleRenderTarget(yt),y.updateRenderTargetMipmap(yt))}D.setRenderTarget(St,At,wt),D.setClearColor(Et,ct),Kt!==void 0&&(H.viewport=Kt),D.toneMapping=kt}function xe(M,F,X){const H=F.isScene===!0?F.overrideMaterial:null;for(let V=0,yt=M.length;V<yt;V++){const Tt=M[V],{object:St,geometry:At,group:wt}=Tt;let kt=Tt.material;kt.allowOverride===!0&&H!==null&&(kt=H),St.layers.test(X.layers)&&de(St,F,X,At,kt,wt)}}function de(M,F,X,H,V,yt){M.onBeforeRender(D,F,X,H,V,yt),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(D,F,X,H,M,yt),V.transparent===!0&&V.side===ta&&V.forceSinglePass===!1?(V.side=Pn,V.needsUpdate=!0,D.renderBufferDirect(X,F,H,V,M,yt),V.side=as,V.needsUpdate=!0,D.renderBufferDirect(X,F,H,V,M,yt),V.side=ta):D.renderBufferDirect(X,F,H,V,M,yt),M.onAfterRender(D,F,X,H,V,yt)}function ls(M,F,X){F.isScene!==!0&&(F=Qt);const H=T.get(M),V=b.state.lights,yt=b.state.shadowsArray,Tt=V.state.version,St=pt.getParameters(M,V.state,yt,F,X,b.state.lightProbeGridArray),At=pt.getProgramCacheKey(St);let wt=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const kt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=G.get(M.envMap||H.environment,kt),H.envMapRotation=H.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,wt===void 0&&(M.addEventListener("dispose",It),wt=new Map,H.programs=wt);let Kt=wt.get(At);if(Kt!==void 0){if(H.currentProgram===Kt&&H.lightsStateVersion===Tt)return po(M,St),Kt}else St.uniforms=pt.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,X,St),M.onBeforeCompile(St,D),Kt=pt.acquireProgram(St,At),wt.set(At,Kt),H.uniforms=St.uniforms;const Ct=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=Mt.uniform),po(M,St),H.needsLights=py(M),H.lightsStateVersion=Tt,H.needsLights&&(Ct.ambientLightColor.value=V.state.ambient,Ct.lightProbe.value=V.state.probe,Ct.directionalLights.value=V.state.directional,Ct.directionalLightShadows.value=V.state.directionalShadow,Ct.spotLights.value=V.state.spot,Ct.spotLightShadows.value=V.state.spotShadow,Ct.rectAreaLights.value=V.state.rectArea,Ct.ltc_1.value=V.state.rectAreaLTC1,Ct.ltc_2.value=V.state.rectAreaLTC2,Ct.pointLights.value=V.state.point,Ct.pointLightShadows.value=V.state.pointShadow,Ct.hemisphereLights.value=V.state.hemi,Ct.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ct.spotLightMatrix.value=V.state.spotLightMatrix,Ct.spotLightMap.value=V.state.spotLightMap,Ct.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=Kt,H.uniformsList=null,Kt}function Il(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=jc.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function po(M,F){const X=T.get(M);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function mo(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let X=0,H=M.length;X<H;X++){const V=M[X];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function go(M,F,X,H,V){F.isScene!==!0&&(F=Qt),y.resetTextureUnits();const yt=F.fog,Tt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,St=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:re.workingColorSpace,At=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,wt=G.get(H.envMap||Tt,At),kt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Kt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ct=!!X.morphAttributes.position,Se=!!X.morphAttributes.normal,Ve=!!X.morphAttributes.color;let Fe=Ii;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Fe=D.toneMapping);const be=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vn=be!==void 0?be.length:0,bt=T.get(H),Hn=b.state.lights;if(De===!0&&(Wt===!0||M!==P)){const we=M===P&&H.id===N;Mt.setState(H,M,we)}let le=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Hn.state.version||bt.outputColorSpace!==St||V.isBatchedMesh&&bt.batching===!1||!V.isBatchedMesh&&bt.batching===!0||V.isBatchedMesh&&bt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&bt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&bt.instancing===!1||!V.isInstancedMesh&&bt.instancing===!0||V.isSkinnedMesh&&bt.skinning===!1||!V.isSkinnedMesh&&bt.skinning===!0||V.isInstancedMesh&&bt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&bt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&bt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&bt.instancingMorph===!1&&V.morphTexture!==null||bt.envMap!==wt||H.fog===!0&&bt.fog!==yt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Mt.numPlanes||bt.numIntersection!==Mt.numIntersection)||bt.vertexAlphas!==kt||bt.vertexTangents!==Kt||bt.morphTargets!==Ct||bt.morphNormals!==Se||bt.morphColors!==Ve||bt.toneMapping!==Fe||bt.morphTargetsCount!==vn||!!bt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,bt.__version=H.version);let ni=bt.currentProgram;le===!0&&(ni=ls(H,F,V),z&&H.isNodeMaterial&&z.onUpdateProgram(H,ni,bt));let Ri=!1,Sa=!1,Xs=!1;const Te=ni.getUniforms(),ke=bt.uniforms;if(mt.useProgram(ni.program)&&(Ri=!0,Sa=!0,Xs=!0),H.id!==N&&(N=H.id,Sa=!0),bt.needsLights){const we=mo(b.state.lightProbeGridArray,V);bt.lightProbeGrid!==we&&(bt.lightProbeGrid=we,Sa=!0)}if(Ri||P!==M){mt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Te.setValue(B,"projectionMatrix",M.projectionMatrix),Te.setValue(B,"viewMatrix",M.matrixWorldInverse);const Ma=Te.map.cameraPosition;Ma!==void 0&&Ma.setValue(B,ve.setFromMatrixPosition(M.matrixWorld)),he.logarithmicDepthBuffer&&Te.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Te.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),P!==M&&(P=M,Sa=!0,Xs=!0)}if(bt.needsLights&&(Hn.state.directionalShadowMap.length>0&&Te.setValue(B,"directionalShadowMap",Hn.state.directionalShadowMap,y),Hn.state.spotShadowMap.length>0&&Te.setValue(B,"spotShadowMap",Hn.state.spotShadowMap,y),Hn.state.pointShadowMap.length>0&&Te.setValue(B,"pointShadowMap",Hn.state.pointShadowMap,y)),V.isSkinnedMesh){Te.setOptional(B,V,"bindMatrix"),Te.setOptional(B,V,"bindMatrixInverse");const we=V.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),Te.setValue(B,"boneTexture",we.boneTexture,y))}V.isBatchedMesh&&(Te.setOptional(B,V,"batchingTexture"),Te.setValue(B,"batchingTexture",V._matricesTexture,y),Te.setOptional(B,V,"batchingIdTexture"),Te.setValue(B,"batchingIdTexture",V._indirectTexture,y),Te.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&Te.setValue(B,"batchingColorTexture",V._colorsTexture,y));const ya=X.morphAttributes;if((ya.position!==void 0||ya.normal!==void 0||ya.color!==void 0)&&q.update(V,X,ni),(Sa||bt.receiveShadow!==V.receiveShadow)&&(bt.receiveShadow=V.receiveShadow,Te.setValue(B,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(ke.envMapIntensity.value=F.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=j3()),Sa){if(Te.setValue(B,"toneMappingExposure",D.toneMappingExposure),bt.needsLights&&dy(ke,Xs),yt&&H.fog===!0&&Z.refreshFogUniforms(ke,yt),Z.refreshMaterialUniforms(ke,H,Ut,jt,b.state.transmissionRenderTarget[M.id]),bt.needsLights&&bt.lightProbeGrid){const we=bt.lightProbeGrid;ke.probesSH.value=we.texture,ke.probesMin.value.copy(we.boundingBox.min),ke.probesMax.value.copy(we.boundingBox.max),ke.probesResolution.value.copy(we.resolution)}jc.upload(B,Il(bt),ke,y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(jc.upload(B,Il(bt),ke,y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Te.setValue(B,"center",V.center),Te.setValue(B,"modelViewMatrix",V.modelViewMatrix),Te.setValue(B,"normalMatrix",V.normalMatrix),Te.setValue(B,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const we=H.uniformsGroups;for(let Ma=0,Ws=we.length;Ma<Ws;Ma++){const km=we[Ma];k.update(km,ni),k.bind(km,ni)}}return ni}function dy(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function py(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return nt},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,F,X){const H=T.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),T.get(M.texture).__webglTexture=F,T.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const X=T.get(M);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const my=B.createFramebuffer();this.setRenderTarget=function(M,F=0,X=0){I=M,Y=F,nt=X;let H=null,V=!1,yt=!1;if(M){const St=T.get(M);if(St.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(B.FRAMEBUFFER,St.__webglFramebuffer),W.copy(M.viewport),tt.copy(M.scissor),ot=M.scissorTest,mt.viewport(W),mt.scissor(tt),mt.setScissorTest(ot),N=-1;return}else if(St.__webglFramebuffer===void 0)y.setupRenderTarget(M);else if(St.__hasExternalTextures)y.rebindTextures(M,T.get(M.texture).__webglTexture,T.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const kt=M.depthTexture;if(St.__boundDepthTexture!==kt){if(kt!==null&&T.has(kt)&&(M.width!==kt.image.width||M.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(M)}}const At=M.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(yt=!0);const wt=T.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(wt[F])?H=wt[F][X]:H=wt[F],V=!0):M.samples>0&&y.useMultisampledRTT(M)===!1?H=T.get(M).__webglMultisampledFramebuffer:Array.isArray(wt)?H=wt[X]:H=wt,W.copy(M.viewport),tt.copy(M.scissor),ot=M.scissorTest}else W.copy(dt).multiplyScalar(Ut).floor(),tt.copy(Lt).multiplyScalar(Ut).floor(),ot=Ft;if(X!==0&&(H=my),mt.bindFramebuffer(B.FRAMEBUFFER,H)&&mt.drawBuffers(M,H),mt.viewport(W),mt.scissor(tt),mt.setScissorTest(ot),V){const St=T.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,St.__webglTexture,X)}else if(yt){const St=F;for(let At=0;At<M.textures.length;At++){const wt=T.get(M.textures[At]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+At,wt.__webglTexture,X,St)}}else if(M!==null&&X!==0){const St=T.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,St.__webglTexture,X)}N=-1},this.readRenderTargetPixels=function(M,F,X,H,V,yt,Tt,St=0){if(!(M&&M.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=T.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At){mt.bindFramebuffer(B.FRAMEBUFFER,At);try{const wt=M.textures[St],kt=wt.format,Kt=wt.type;if(M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+St),!he.textureFormatReadable(kt)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Kt)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-H&&X>=0&&X<=M.height-V&&B.readPixels(F,X,H,V,C.convert(kt),C.convert(Kt),yt)}finally{const wt=I!==null?T.get(I).__webglFramebuffer:null;mt.bindFramebuffer(B.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(M,F,X,H,V,yt,Tt,St=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=T.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At)if(F>=0&&F<=M.width-H&&X>=0&&X<=M.height-V){mt.bindFramebuffer(B.FRAMEBUFFER,At);const wt=M.textures[St],kt=wt.format,Kt=wt.type;if(M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+St),!he.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ct),B.bufferData(B.PIXEL_PACK_BUFFER,yt.byteLength,B.STREAM_READ),B.readPixels(F,X,H,V,C.convert(kt),C.convert(Kt),0);const Se=I!==null?T.get(I).__webglFramebuffer:null;mt.bindFramebuffer(B.FRAMEBUFFER,Se);const Ve=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Qb(B,Ve,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ct),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,yt),B.deleteBuffer(Ct),B.deleteSync(Ve),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,X=0){const H=Math.pow(2,-X),V=Math.floor(M.image.width*H),yt=Math.floor(M.image.height*H),Tt=F!==null?F.x:0,St=F!==null?F.y:0;y.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,Tt,St,V,yt),mt.unbindTexture()};const gy=B.createFramebuffer(),_y=B.createFramebuffer();this.copyTextureToTexture=function(M,F,X=null,H=null,V=0,yt=0){let Tt,St,At,wt,kt,Kt,Ct,Se,Ve;const Fe=M.isCompressedTexture?M.mipmaps[yt]:M.image;if(X!==null)Tt=X.max.x-X.min.x,St=X.max.y-X.min.y,At=X.isBox3?X.max.z-X.min.z:1,wt=X.min.x,kt=X.min.y,Kt=X.isBox3?X.min.z:0;else{const ke=Math.pow(2,-V);Tt=Math.floor(Fe.width*ke),St=Math.floor(Fe.height*ke),M.isDataArrayTexture?At=Fe.depth:M.isData3DTexture?At=Math.floor(Fe.depth*ke):At=1,wt=0,kt=0,Kt=0}H!==null?(Ct=H.x,Se=H.y,Ve=H.z):(Ct=0,Se=0,Ve=0);const be=C.convert(F.format),vn=C.convert(F.type);let bt;F.isData3DTexture?(y.setTexture3D(F,0),bt=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(y.setTexture2DArray(F,0),bt=B.TEXTURE_2D_ARRAY):(y.setTexture2D(F,0),bt=B.TEXTURE_2D),mt.activeTexture(B.TEXTURE0),mt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),mt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),mt.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const Hn=mt.getParameter(B.UNPACK_ROW_LENGTH),le=mt.getParameter(B.UNPACK_IMAGE_HEIGHT),ni=mt.getParameter(B.UNPACK_SKIP_PIXELS),Ri=mt.getParameter(B.UNPACK_SKIP_ROWS),Sa=mt.getParameter(B.UNPACK_SKIP_IMAGES);mt.pixelStorei(B.UNPACK_ROW_LENGTH,Fe.width),mt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Fe.height),mt.pixelStorei(B.UNPACK_SKIP_PIXELS,wt),mt.pixelStorei(B.UNPACK_SKIP_ROWS,kt),mt.pixelStorei(B.UNPACK_SKIP_IMAGES,Kt);const Xs=M.isDataArrayTexture||M.isData3DTexture,Te=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const ke=T.get(M),ya=T.get(F),we=T.get(ke.__renderTarget),Ma=T.get(ya.__renderTarget);mt.bindFramebuffer(B.READ_FRAMEBUFFER,we.__webglFramebuffer),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ma.__webglFramebuffer);for(let Ws=0;Ws<At;Ws++)Xs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,T.get(M).__webglTexture,V,Kt+Ws),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,T.get(F).__webglTexture,yt,Ve+Ws)),B.blitFramebuffer(wt,kt,Tt,St,Ct,Se,Tt,St,B.DEPTH_BUFFER_BIT,B.NEAREST);mt.bindFramebuffer(B.READ_FRAMEBUFFER,null),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||T.has(M)){const ke=T.get(M),ya=T.get(F);mt.bindFramebuffer(B.READ_FRAMEBUFFER,gy),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,_y);for(let we=0;we<At;we++)Xs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,V,Kt+we):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ke.__webglTexture,V),Te?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ya.__webglTexture,yt,Ve+we):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ya.__webglTexture,yt),V!==0?B.blitFramebuffer(wt,kt,Tt,St,Ct,Se,Tt,St,B.COLOR_BUFFER_BIT,B.NEAREST):Te?B.copyTexSubImage3D(bt,yt,Ct,Se,Ve+we,wt,kt,Tt,St):B.copyTexSubImage2D(bt,yt,Ct,Se,wt,kt,Tt,St);mt.bindFramebuffer(B.READ_FRAMEBUFFER,null),mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Te?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(bt,yt,Ct,Se,Ve,Tt,St,At,be,vn,Fe.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(bt,yt,Ct,Se,Ve,Tt,St,At,be,Fe.data):B.texSubImage3D(bt,yt,Ct,Se,Ve,Tt,St,At,be,vn,Fe):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,yt,Ct,Se,Tt,St,be,vn,Fe.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,yt,Ct,Se,Fe.width,Fe.height,be,Fe.data):B.texSubImage2D(B.TEXTURE_2D,yt,Ct,Se,Tt,St,be,vn,Fe);mt.pixelStorei(B.UNPACK_ROW_LENGTH,Hn),mt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,le),mt.pixelStorei(B.UNPACK_SKIP_PIXELS,ni),mt.pixelStorei(B.UNPACK_SKIP_ROWS,Ri),mt.pixelStorei(B.UNPACK_SKIP_IMAGES,Sa),yt===0&&F.generateMipmaps&&B.generateMipmap(bt),mt.unbindTexture()},this.initRenderTarget=function(M){T.get(M).__webglFramebuffer===void 0&&y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),mt.unbindTexture()},this.resetState=function(){Y=0,nt=0,I=null,mt.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),n.unpackColorSpace=re._getUnpackColorSpace()}}function $a(e,t,n){return Math.min(n,Math.max(t,e))}function ft(e,t){return e+Math.random()*(t-e)}function cf(e,t=.05){return e*(1+(Math.random()-.5)*t)}function fa(e){return e[Math.floor(Math.random()*e.length)]}function Iu(e){return Math.random()<e}const Je=1e-4,Zc=["C4","D4","E4","G4","A4","C5","D5","E5","G5","A5","C6"],Dr=["C5","D5","E5","G5","A5","C6"],Im=["F2","G2","A2"],uy=["E4","G4","A4"],K3={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11};function uf(e){const t=/^([A-G])([#b]?)(-?\d+)$/.exec(e);if(!t)return 440;const[,n,i,a]=t;return 440*2**(((Number(a)+1)*12+K3[`${n}${i}`]-69)/12)}function Q3(e,t=3.2,n=2.8){const i=Math.floor(e.sampleRate*t),a=e.createBuffer(2,i,e.sampleRate);for(let s=0;s<a.numberOfChannels;s+=1){const r=a.getChannelData(s);for(let o=0;o<i;o+=1){const l=o/i,c=Math.min(1,o/700);r[o]=ft(-1,1)*c*(1-l)**n}}return a}function Bl(e,t=1,n="white",i=!0){const a=Math.max(1,Math.floor(e.sampleRate*t)),s=e.createBuffer(1,a,e.sampleRate),r=s.getChannelData(0);let o=0;for(let c=0;c<a;c+=1){const h=ft(-1,1);o=n==="pink"?o*.92+h*.08:h,r[c]=o}const l=e.createBufferSource();return l.buffer=s,l.loop=i,l}function Vs(e,t){e.addEventListener("ended",()=>{t.forEach(n=>{try{n.disconnect()}catch{}})},{once:!0})}function ff(e,t,{peak:n,attack:i,decay:a,release:s,sustain:r=.08}){e.setValueAtTime(Je,t),e.exponentialRampToValueAtTime(Math.max(Je,n),t+i),e.exponentialRampToValueAtTime(Math.max(Je,n*r),t+i+a),e.exponentialRampToValueAtTime(Je,t+i+a+s)}function J3(e){const t=e.createGain(),n=e.createGain(),i=e.createDelay(1.2),a=e.createGain(),s=e.createGain(),r=e.createConvolver(),o=e.createGain(),l=e.createGain(),c=e.createDynamicsCompressor();return n.gain.value=.72,i.delayTime.value=.29,a.gain.value=.23,s.gain.value=.24,r.buffer=Q3(e),o.gain.value=.34,l.gain.value=.78,c.threshold.value=-18,c.knee.value=18,c.ratio.value=4,c.attack.value=.012,c.release.value=.24,t.connect(n),n.connect(l),t.connect(i),i.connect(a),a.connect(i),i.connect(s),s.connect(l),t.connect(r),r.connect(o),o.connect(l),l.connect(c),c.connect(e.destination),{input:t,dispose(){[t,n,i,a,s,r,o,l,c].forEach(h=>{try{h.disconnect()}catch{}})}}}function $3(e,t){const n=e.createGain(),i=e.createGain(),a=e.createBiquadFilter(),s=e.createBiquadFilter(),r=[55,82.5,110].map((l,c)=>{const h=e.createOscillator(),d=e.createGain();return h.type=c===1?"triangle":"sine",h.frequency.value=l,d.gain.value=.012-c*.003,h.connect(d),d.connect(n),h.start(),{osc:h,gain:d,frequency:l}}),o=Bl(e,2,"pink");return a.type="lowpass",a.frequency.value=820,s.type="highpass",s.frequency.value=120,i.gain.value=.01,o.connect(s),s.connect(a),a.connect(i),n.connect(t),i.connect(t),o.start(),{pulse(l=.45){const c=e.currentTime;i.gain.cancelScheduledValues(c),i.gain.setValueAtTime(Math.max(i.gain.value,.012+l*.08),c),i.gain.exponentialRampToValueAtTime(.014,c+ft(.7,1.25))},update({playerSpeed:l,progressRatio:c,isWon:h},d){const u=$a(c,0,1),p=$a(l,0,1),v=Math.sin(d*22e-5)*.5+.5;r.forEach((E,g)=>{const f=E.frequency*(1+u*.12+v*.01*(g+1));E.osc.frequency.setTargetAtTime(f,e.currentTime,.8),E.gain.gain.setTargetAtTime((.01+u*.012)/(g+1),e.currentTime,.45)}),i.gain.setTargetAtTime(.008+p*.032+(h?.018:0),e.currentTime,.18),a.frequency.setTargetAtTime(520+p*1200+u*380,e.currentTime,.2)},dispose(){r.forEach(({osc:l,gain:c})=>{l.stop(),l.disconnect(),c.disconnect()}),o.stop(),o.disconnect(),a.disconnect(),s.disconnect(),n.disconnect(),i.disconnect()}}}function tw(e,t){const n=e.createGain(),i=e.createGain(),a=e.createBiquadFilter(),s=e.createBiquadFilter(),r=Bl(e,1.5,"pink");let o=0,l=!1;return n.gain.value=Je,i.gain.value=Je,s.type="highpass",s.frequency.value=260,a.type="lowpass",a.frequency.value=1800,r.connect(s),s.connect(a),a.connect(i),i.connect(n),n.connect(t),r.start(),{update({playerSpeed:c}){const h=e.currentTime,d=$a(c,0,1),u=d>.06;if(u){const p=.018+d*.032;if(n.gain.cancelScheduledValues(h),n.gain.setTargetAtTime(p,h,.055),i.gain.setTargetAtTime(.18+d*.32,h,.08),a.frequency.setTargetAtTime(1200+d*1200,h,.12),l||(o=h+ft(.04,.12)),h>=o){ew(e,n,{time:h,velocity:ft(.62,.95)*(.65+d*.35)});const v=.52-d*.18;o=h+ft(v*.86,v*1.16)}}else l&&(n.gain.cancelScheduledValues(h),n.gain.setValueAtTime(Math.max(Je,n.gain.value),h),n.gain.linearRampToValueAtTime(Je,h+.5),i.gain.setTargetAtTime(Je,h,.16));l=u},dispose(){r.stop(),r.disconnect(),s.disconnect(),a.disconnect(),i.disconnect(),n.disconnect()}}}function ew(e,t,{time:n=e.currentTime,velocity:i=.75}={}){var g;const a=Bl(e,.16,"pink",!1),s=e.createBiquadFilter(),r=e.createBiquadFilter(),o=e.createGain(),l=e.createOscillator(),c=e.createGain(),h=(g=e.createStereoPanner)==null?void 0:g.call(e),d=h??e.createGain(),u=ft(.09,.16),p=ft(.055,.095),v=n+u+.01,E=n+p+.01;s.type="highpass",s.frequency.value=ft(220,420),r.type="lowpass",r.frequency.value=ft(1350,2400),r.Q.value=ft(.6,1.4),o.gain.setValueAtTime(Je,n),o.gain.exponentialRampToValueAtTime(.18*i,n+ft(.008,.016)),o.gain.exponentialRampToValueAtTime(Je,n+u),l.type="sine",l.frequency.setValueAtTime(ft(65,92),n),l.frequency.exponentialRampToValueAtTime(ft(42,58),n+p),c.gain.setValueAtTime(Je,n),c.gain.exponentialRampToValueAtTime(.045*i,n+.006),c.gain.exponentialRampToValueAtTime(Je,n+p),h&&h.pan.setValueAtTime(ft(-.34,.34),n),a.connect(s),s.connect(r),r.connect(o),o.connect(d),l.connect(c),c.connect(d),d.connect(t),a.start(n),l.start(n),a.stop(v),l.stop(E),Vs(v>=E?a:l,[a,s,r,o,l,c,d])}function nw(e,t,{time:n=e.currentTime,note:i=fa(Zc),velocity:a=.52}={}){const s=e.createOscillator(),r=e.createOscillator(),o=e.createGain(),l=e.createGain(),c=cf(1.9,.22),h=uf(i)*ft(.985,1.018);s.type="sine",s.frequency.setValueAtTime(h,n),s.detune.setValueAtTime(ft(-8,8),n),r.type="triangle",r.frequency.setValueAtTime(h*ft(2.6,3.25),n),o.gain.setValueAtTime(h*ft(1.1,2.3),n),o.gain.exponentialRampToValueAtTime(h*.08,n+c*.7),ff(l.gain,n,{peak:a,attack:ft(.035,.07),decay:ft(.35,.58),release:ft(1.1,1.65),sustain:ft(.08,.16)}),r.connect(o),o.connect(s.frequency),s.connect(l),l.connect(t),s.start(n),r.start(n),s.stop(n+c),r.stop(n+c),Vs(s,[s,r,o,l])}function Kc(e,t,{time:n=e.currentTime,note:i=fa(Dr),velocity:a=.42,force:s=0}={}){const r=cf(1.55,.25),o=uf(i)*ft(.98,1.025),l=e.createGain(),c=[l];ff(l.gain,n,{peak:a,attack:.002,decay:ft(.7,1.05),release:ft(.42,.78),sustain:ft(.035,.08)});let h=null,d=n;[1,2.01,2.98,4.12,5.43].forEach((u,p)=>{const v=e.createOscillator(),E=e.createGain(),g=n+r+ft(0,.14);v.type=p%2===0?"sine":"triangle",v.frequency.setValueAtTime(o*u+s*.08,n),v.detune.setValueAtTime(ft(-14,14),n),E.gain.value=1/(p+1)*ft(.42,.9),v.connect(E),E.connect(l),v.start(n+ft(0,.009)),v.stop(g),g>=d&&(h=v,d=g),c.push(v,E)}),l.connect(t),Vs(h,c)}function iw(e,t,{time:n=e.currentTime,pitch:i=fa(uy),velocity:a=.64}={}){const s=e.createOscillator(),r=Bl(e,.08),o=e.createBiquadFilter(),l=e.createGain(),c=e.createGain(),h=cf(.22,.22),d=uf(i)*ft(1.35,1.78);s.type="sine",s.frequency.setValueAtTime(d*ft(1.05,1.2),n),s.frequency.exponentialRampToValueAtTime(d*ft(.38,.54),n+h),o.type="bandpass",o.frequency.value=ft(760,1120),o.Q.value=ft(5,9),c.gain.setValueAtTime(a*ft(.1,.2),n),c.gain.exponentialRampToValueAtTime(Je,n+ft(.035,.075)),ff(l.gain,n,{peak:a,attack:.001,decay:ft(.08,.15),release:ft(.07,.12),sustain:.01}),s.connect(l),r.connect(o),o.connect(c),c.connect(l),l.connect(t),s.start(n),r.start(n),s.stop(n+h),r.stop(n+.09),Vs(s,[s,r,o,l,c])}function fy(e,t,{time:n=e.currentTime,pitch:i=fa(Im),velocity:a=.3}={}){const s=e.createOscillator(),r=e.createOscillator(),o=e.createGain(),l=e.createBiquadFilter(),c=e.createGain(),h=cf(.48,.3),d=uf(i)*ft(.92,1.08);s.type="sawtooth",s.frequency.setValueAtTime(d*.72,n),s.frequency.linearRampToValueAtTime(d*ft(1.24,1.62),n+h*.33),s.frequency.exponentialRampToValueAtTime(d*ft(.76,.95),n+h),r.type="sine",r.frequency.value=ft(18,34),o.gain.value=ft(28,52),l.type="lowpass",l.frequency.setValueAtTime(ft(420,680),n),l.frequency.linearRampToValueAtTime(ft(900,1250),n+h*.36),l.frequency.exponentialRampToValueAtTime(ft(260,420),n+h),l.Q.value=ft(4,8),ff(c.gain,n,{peak:a,attack:ft(.025,.06),decay:ft(.14,.24),release:ft(.12,.2),sustain:ft(.06,.13)}),r.connect(o),o.connect(s.frequency),s.connect(l),l.connect(c),c.connect(t),r.start(n),s.start(n),r.stop(n+h),s.stop(n+h),Vs(s,[s,r,o,l,c])}function hy(e,t,{time:n=e.currentTime,velocity:i=.22}={}){const a=Math.floor(ft(2,5)),s=ft(2600,3900);for(let r=0;r<a;r+=1){const o=n+r*ft(.045,.074),l=ft(.026,.052),c=e.createOscillator(),h=e.createGain();c.type="square",c.frequency.setValueAtTime(s*ft(.95,1.08),o),c.detune.setValueAtTime(ft(-24,24),o),h.gain.setValueAtTime(Je,o),h.gain.exponentialRampToValueAtTime(Math.max(Je,i*ft(.55,1)),o+.004),h.gain.exponentialRampToValueAtTime(Je,o+l),c.connect(h),h.connect(t),c.start(o),c.stop(o+l+.01),Vs(c,[c,h])}}function aw(e,t,{time:n=e.currentTime,amount:i=.5}={}){const a=Bl(e,.75,"pink"),s=e.createBiquadFilter(),r=e.createGain(),o=ft(.55,1.1);s.type="lowpass",s.frequency.setValueAtTime(420+i*480,n),s.frequency.exponentialRampToValueAtTime(1600+i*1800,n+o*.45),r.gain.setValueAtTime(Je,n),r.gain.exponentialRampToValueAtTime(.03+i*.055,n+.04),r.gain.exponentialRampToValueAtTime(Je,n+o),a.connect(s),s.connect(r),r.connect(t),a.start(n),a.stop(n+o+.02),Vs(a,[a,s,r])}function sw(e,t,{progressRatio:n=0}={}){const i=e.currentTime+ft(.01,.08);if(Iu(.55)){hy(e,t,{time:i,velocity:ft(.08,.2)});return}if(n>.18&&Iu(.55)){fy(e,t,{time:i,pitch:fa(Im),velocity:ft(.12,.26)});return}Kc(e,t,{time:i,note:fa(Dr),velocity:ft(.12,.28),force:ft(-45,45)})}function rw(e,t,{progress:n=0,total:i=1,isFinal:a=!1}={}){const s=e.currentTime+ft(.004,.018),r=$a(n/Math.max(1,i),0,1),o=$a(Math.round(r*(Zc.length-2)+ft(-1.1,1.1)),0,Zc.length-1);iw(e,t,{time:s,pitch:fa(uy),velocity:ft(.48,.78)}),nw(e,t,{time:s+ft(.035,.075),note:Zc[o],velocity:ft(.42,.68)}),Kc(e,t,{time:s+ft(.1,.16),note:fa(Dr),velocity:ft(.28,.52),force:ft(-35,35)}),Kc(e,t,{time:s+ft(.18,.32),note:Dr[$a(Math.floor(r*Dr.length),0,Dr.length-1)],velocity:ft(.18,.42),force:ft(-60,60)}),aw(e,t,{time:s,amount:a?.78:ft(.34,.55)}),Iu(.45+r*.16)&&hy(e,t,{time:s+ft(.24,.52),velocity:ft(.14,.28)}),Iu(.24+r*.34)&&fy(e,t,{time:s+ft(.12,.34),pitch:fa(Im),velocity:ft(.16,.34)}),a&&["C5","E5","G5","C6"].forEach((l,c)=>{Kc(e,t,{time:s+.18+c*ft(.045,.085),note:l,velocity:ft(.3,.55),force:ft(-80,80)})})}class ow{constructor(){this.audioContext=null,this.masterBus=null,this.ambientBed=null,this.footstepLayer=null,this.isDisposed=!1,this.isUnlocked=!1,this.lastState={playerSpeed:0,progressRatio:0,isWon:!1},this.nextAccentAt=0}async unlock(){var t;if(this.isDisposed||typeof window>"u")return!1;if(!this.audioContext){const n=window.AudioContext||window.webkitAudioContext;if(!n)return!1;this.audioContext=new n,this.masterBus=J3(this.audioContext),this.ambientBed=$3(this.audioContext,this.masterBus.input),this.footstepLayer=tw(this.audioContext,this.masterBus.input),this.nextAccentAt=this.audioContext.currentTime+ft(4,9)}return this.audioContext.state!=="running"&&await this.audioContext.resume(),this.isUnlocked=this.audioContext.state==="running",(t=this.ambientBed)==null||t.update(this.lastState,Date.now()),this.isUnlocked}update(t){var i;if(this.lastState={playerSpeed:$a(t.playerSpeed??this.lastState.playerSpeed,0,1),progressRatio:$a(t.progressRatio??this.lastState.progressRatio,0,1),isWon:!!t.isWon},!this.isUnlocked||!this.ambientBed)return;this.ambientBed.update(this.lastState,Date.now()),(i=this.footstepLayer)==null||i.update(this.lastState);const n=this.audioContext.currentTime;n>=this.nextAccentAt&&(sw(this.audioContext,this.masterBus.input,{progressRatio:this.lastState.progressRatio}),this.nextAccentAt=n+ft(4.5,12)*(1-this.lastState.progressRatio*.25))}async playShrineIgnite(t){var i;!await this.unlock()||!this.audioContext||!this.masterBus||(rw(this.audioContext,this.masterBus.input,t),(i=this.ambientBed)==null||i.pulse(t!=null&&t.isFinal?.78:.45))}dispose(){var t,n,i;this.isDisposed=!0,(t=this.ambientBed)==null||t.dispose(),(n=this.footstepLayer)==null||n.dispose(),(i=this.masterBus)==null||i.dispose(),this.audioContext&&this.audioContext.state!=="closed"&&this.audioContext.close(),this.audioContext=null,this.masterBus=null,this.ambientBed=null,this.footstepLayer=null}}function lw(){return new ow}const b_={shrineAirLift:12,startShrineAirLift:10,orbitRadius:10.5,orbitVerticalSpan:2.6,orbitSpeed:.001,orbitHoldDistance:48,perceptionRadius:22,minSpeed:.18,maxSpeed:.38,cohesionWeight:.024,alignmentWeight:.032,separationWeight:.088,targetWeight:.068,noiseWeight:.01,groundClearance:8},T_={intensity:.32,distance:18,decay:2,pulse:.12},cw=()=>{const e=cn.useRef(),[t,n]=cn.useState(0),[i,a]=cn.useState(0),[s,r]=cn.useState(!1),[o,l]=cn.useState(!1),[c,h]=cn.useState(!1),[d,u]=cn.useState(b_),[p,v]=cn.useState(T_),[E,g]=cn.useState(!1),f=cn.useRef(b_),m=cn.useRef(T_),_={worldSize:500,segments:100,obeliskHeight:85,playerHeight:2.2,moveSpeed:.38,gravity:.008,interactDist:15,obeliskCount:5,fireflyCount:20,trailLength:50},S={skyTwilight:988970,fogColor:132631,snow:new Yt(2236966),pink:new Yt(16756684),blue:new Yt(10670847),glow:6333946,fire:15680580},w=!1;return cn.useEffect(()=>{f.current=d},[d]),cn.useEffect(()=>{m.current=p},[p]),cn.useEffect(()=>{var x;const b=window.matchMedia("(pointer: coarse)"),R=()=>{h(b.matches||navigator.maxTouchPoints>0)};return R(),(x=b.addEventListener)==null||x.call(b,"change",R),()=>{var A;(A=b.removeEventListener)==null||A.call(b,"change",R)}},[]),cn.useEffect(()=>{if(!e.current)return;let b=0,R=!1;const x=lw(),A=(L,q,it)=>Math.max(q,Math.min(it,L)),D=new w1;D.background=new Yt(S.skyTwilight),D.fog=new Lm(S.fogColor,.006);const U=new Z1(16777215,1118498,1.1);D.add(U);const z=new qn(75,window.innerWidth/window.innerHeight,.1,3e3),Y=new Z3({antialias:!0});Y.setSize(window.innerWidth,window.innerHeight),Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.current.appendChild(Y.domElement);const I=(()=>{const L=document.createElement("canvas");L.width=64,L.height=64;const q=L.getContext("2d"),it=q.createRadialGradient(32,32,0,32,32,32);return it.addColorStop(0,"rgba(255, 255, 255, 1)"),it.addColorStop(.2,"rgba(255, 255, 255, 0.5)"),it.addColorStop(1,"rgba(255, 255, 255, 0)"),q.fillStyle=it,q.fillRect(0,0,64,64),new kg(L)})(),N=(L,q)=>{const it=Math.sin(L*.045)*Math.cos(q*.045)*2.8,lt=Math.cos(L*.02+q*.03)*3.5;return it+lt},P=new Pl(1200,1200,_.segments,_.segments);P.rotateX(-Math.PI/2);const W=P.attributes.position.array,tt=[];for(let L=0;L<W.length/3;L++){const q=W[L*3],it=W[L*3+2],lt=N(q,it);W[L*3+1]=lt;const C=S.snow.clone().multiplyScalar(.4+lt*.1);tt.push(C.r,C.g,C.b)}P.setAttribute("color",new _n(tt,3));const ot=new Lo({vertexColors:!0,roughness:1}),Et=new yn(P,ot);D.add(Et);const ct={pos:new O(0,10,20),vel:new O,yaw:0,pitch:0},Bt=[],jt=[],Ut=[],et=(L,q)=>{const it=new Yc({map:I,color:L,transparent:!0,opacity:0,blending:wr}),lt=new gh(it);return lt.scale.set(q,q,1),lt},gt=(L,q,it,lt)=>{const C=Math.sin(lt*1.25)*8,j=Math.cos(lt*.85)*5;L.beginPath(),L.moveTo(q*.08,it*.52+C*.25),L.bezierCurveTo(q*.16,it*.16+j,q*.36,it*.16-C,q*.58,it*.23),L.bezierCurveTo(q*.76,it*.29+j,q*.91,it*.39,q*.96,it*.51),L.bezierCurveTo(q*.89,it*.63+C,q*.73,it*.72+j,q*.55,it*.75),L.bezierCurveTo(q*.32,it*.81+C,q*.16,it*.73,q*.08,it*.52+C*.25),L.closePath()},dt=(L,q,it,lt)=>{L.clearRect(0,0,q,it),L.save(),gt(L,q,it,lt),L.clip(),L.fillStyle="rgba(5, 12, 30, 0.18)",L.fillRect(0,0,q,it);const C=[{x:.28,y:.38,r:.48,rgb:"162, 210, 255",speed:.9},{x:.56,y:.56,r:.54,rgb:"255, 175, 204",speed:1.2},{x:.76,y:.42,r:.42,rgb:"96, 165, 250",speed:.7},{x:.38,y:.67,r:.38,rgb:"212, 196, 168",speed:1}];L.globalCompositeOperation="lighter",C.forEach((j,k)=>{const rt=Math.sin(lt*j.speed+k*1.7)*q*.08,at=Math.cos(lt*(j.speed+.25)+k)*it*.08,Q=q*j.x+rt,xt=it*j.y+at,Dt=Math.max(q,it)*j.r,It=L.createRadialGradient(Q,xt,0,Q,xt,Dt);It.addColorStop(0,`rgba(${j.rgb}, 0.78)`),It.addColorStop(.45,`rgba(${j.rgb}, 0.22)`),It.addColorStop(1,`rgba(${j.rgb}, 0)`),L.fillStyle=It,L.fillRect(0,0,q,it)}),L.globalCompositeOperation="source-over";for(let j=0;j<9;j+=1){const k=it*(.33+j*.045),rt=Math.sin(lt*1.1+j*.8)*18;L.beginPath(),L.moveTo(q*.16,k),L.bezierCurveTo(q*.36,k-34+rt,q*.58,k+32-rt,q*.86,k+rt*.35),L.strokeStyle=`rgba(226, 246, 255, ${.16-j*.008})`,L.lineWidth=1.4,L.stroke()}L.restore(),L.save(),gt(L,q,it,lt),L.strokeStyle="rgba(212, 241, 255, 0.28)",L.lineWidth=3,L.stroke(),L.restore()},Lt=()=>{const L=document.createElement("canvas");L.width=512,L.height=256;const q=L.getContext("2d"),it=new kg(L);it.minFilter=on,it.magFilter=on,it.needsUpdate=!0;const lt=new Yc({map:it,transparent:!0,opacity:.66,blending:wr,depthWrite:!1}),C=new Cr;C.position.set(0,112,-220);const j=new gh(lt);j.scale.set(118,52,1),C.add(j);const k=new Yc({map:I,color:S.blue,transparent:!0,opacity:.18,blending:wr,depthWrite:!1}),rt=[];for(let It=0;It<7;It+=1){const qt=new gh(k);qt.position.set(-46-It*6,-14-It*1.5,-.2),qt.scale.set(5+It%3*1.8,32+It*4,1),C.add(qt),rt.push(qt)}const at=new Zg(S.blue,.75,170,2);C.add(at),D.add(C);const Q=new O,xt=new O,Dt=new O;return{update(It,qt,nn){const te=It*.001;dt(q,L.width,L.height,te),it.needsUpdate=!0;const En=nn+Math.sin(te*.07)*.18;xt.set(-Math.sin(En),0,-Math.cos(En)).multiplyScalar(215),Dt.set(-Math.cos(nn),0,Math.sin(nn)).multiplyScalar(48*Math.sin(te*.13)),Q.copy(qt).add(xt).add(Dt),Q.y=qt.y+104+Math.sin(te*.38)*16,C.position.lerp(Q,.018);const Cn=.5+Math.sin(te*1.35)*.5;lt.opacity=.58+Cn*.16,at.intensity=.48+Cn*.28,j.scale.set(118+Math.sin(te*.9)*5,52+Math.cos(te*.7)*3,1),rt.forEach((Ai,zn)=>{const Gn=Math.sin(te*(.82+zn*.05)+zn*.9);Ai.position.x=-44-zn*6+Math.cos(te*.54+zn)*5,Ai.position.y=-16-zn*1.6+Gn*4,Ai.scale.set(5+zn%3*1.8,32+zn*4+Gn*7,1)})},dispose(){D.remove(C),it.dispose(),lt.dispose(),k.dispose()}}},Ft=()=>{const L=[];for(let q=0;q<_.obeliskCount;q++){let it,lt;do it=(Math.random()-.5)*_.worldSize,lt=(Math.random()-.5)*_.worldSize;while(Math.hypot(it,lt)<100||L.some(C=>Math.hypot(C.x-it,C.z-lt)<130));L.push({x:it,z:lt})}return a(_.obeliskCount),L},Nt=(L,q,it=!1)=>{const lt=N(L,q),C=new Cr;if(C.position.set(L,lt,q),it){const j=new yn(new Ja(3.5,3.5,3.5),new Lo({color:16777215,emissive:16777215,emissiveIntensity:2}));j.position.set(0,1.75,0),C.add(j);const k=et(16777215,20);k.position.y=3,k.material.opacity=.5,C.add(k),D.add(C);const rt=new O(L,lt+1.75,q),at=rt.clone().add(new O(0,f.current.startShrineAirLift,0));Bt.push({pillar:null,shrine:j,tipGlow:k,shrineGlow:k,pos:new O(L,lt,q),tipPos:new O(L,lt+5,q),shrinePos:rt,shrineAirPos:at,activated:!0})}else{const j=new yn(new Ja(5.5,_.obeliskHeight,5.5),new Lo({color:65793}));j.position.y=_.obeliskHeight/2-2,C.add(j);const k=new yn(new Bm(2.5),new Lo({color:1118481}));k.position.y=_.obeliskHeight+2,C.add(k);const rt=et(S.blue,15);rt.position.y=_.obeliskHeight+2,C.add(rt);const at=new yn(new Ja(3,3,3),new Lo({color:526344}));at.position.set(0,1.5,12),at.userData={id:Bt.length},C.add(at),jt.push(at);const Q=f.current,xt=new O(L,lt+1.5,q+12),Dt=xt.clone().add(new O(0,Q.shrineAirLift,0)),It=et(S.pink,12);It.position.set(0,3,12),C.add(It),D.add(C),Bt.push({pillar:j,shrine:at,tipGlow:rt,shrineGlow:It,pos:new O(L,lt,q),tipPos:new O(L,lt+_.obeliskHeight+2,q),shrinePos:xt,shrineAirPos:Dt,activated:!1})}};Nt(0,0,!0),Ft().forEach(L=>Nt(L.x,L.z));class De{constructor(q,it){const lt=f.current,C=m.current;this.mesh=new yn(new Bu(.25,8,8),new Nu({color:16777215})),this.index=it,this.orbitOffset=Math.random()*Math.PI*2,this.orbitRadius=lt.orbitRadius+(Math.random()-.5)*2.4,this.orbitDirection=Math.random()>.5?1:-1,this.turnRate=.032+Math.random()*.018,this.cruiseSpeed=Zs.lerp(lt.minSpeed,lt.maxSpeed,.36+Math.random()*.28),this.speed=this.cruiseSpeed,this.noiseSeed=Math.random()*1e3,this.lightPhase=Math.random()*Math.PI*2;const j=new O((Math.random()-.5)*6.5,(Math.random()-.5)*3,(Math.random()-.5)*6.5);this.pos=q.clone().add(j),this.forward=new O(Math.random()-.5,(Math.random()-.5)*.2,Math.random()-.5).normalize(),this.vel=this.forward.clone().multiplyScalar(this.speed),this.trailPoints=[];for(let rt=0;rt<_.trailLength;rt++)this.trailPoints.push(this.pos.clone());const k=new Float32Array(_.trailLength);for(let rt=0;rt<_.trailLength;rt++)k[rt]=1-rt/_.trailLength;this.trailGeo=new Fn().setFromPoints(this.trailPoints),this.trailGeo.setAttribute("alpha",new mi(k,1)),this.trailMat=new bi({transparent:!0,uniforms:{color:{value:new Yt(S.glow)}},vertexShader:`
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
          `,blending:wr}),this.line=new G1(this.trailGeo,this.trailMat),this.localLight=new Zg(S.blue,C.intensity,C.distance,C.decay),this.localLight.position.copy(this.pos),this.mesh.position.copy(this.pos),D.add(this.mesh),D.add(this.line),D.add(this.localLight)}update(q,it,lt){const C=f.current,j=m.current,k=new O,rt=new O,at=new O;let Q=0;it.forEach(te=>{const En=this.pos.distanceTo(te.pos);if(En>0&&En<C.perceptionRadius){const Cn=1-En/C.perceptionRadius;k.add(te.pos),at.add(te.forward),rt.add(this.pos.clone().sub(te.pos).normalize().multiplyScalar(Cn)),Q++}}),Q>0&&(k.divideScalar(Q).sub(this.pos).multiplyScalar(C.cohesionWeight),at.divideScalar(Q).sub(this.forward).multiplyScalar(C.alignmentWeight),rt.divideScalar(Q).multiplyScalar(C.separationWeight));let xt=new O;if(q.mode==="orbit"){const te=lt*C.orbitSpeed*this.orbitDirection+this.orbitOffset,En=q.center.clone().add(new O(Math.cos(te)*this.orbitRadius,Math.sin(lt*.0017+this.orbitOffset)*q.verticalSpan,Math.sin(te)*this.orbitRadius)),Cn=new O(-Math.sin(te)*this.orbitDirection,0,Math.cos(te)*this.orbitDirection).multiplyScalar(this.orbitRadius*.4);xt.copy(En.add(Cn).sub(this.pos)).multiplyScalar(C.targetWeight)}else xt.copy(q.destination).sub(this.pos).multiplyScalar(C.targetWeight);const Dt=new O(Math.sin(lt*.0012+this.noiseSeed),Math.sin(lt*.0017+this.noiseSeed*1.7)*.35,Math.cos(lt*.001+this.noiseSeed*.7)).multiplyScalar(C.noiseWeight),It=this.forward.clone().add(xt).add(k).add(at).add(rt).add(Dt);It.lengthSq()>0&&(It.normalize(),this.forward.lerp(It,this.turnRate).normalize());const qt=q.mode==="orbit"?this.cruiseSpeed*.92:this.cruiseSpeed*1.06;this.speed=Zs.lerp(this.speed,A(qt,C.minSpeed,C.maxSpeed),.04),this.vel.copy(this.forward).multiplyScalar(this.speed),this.pos.add(this.vel);const nn=N(this.pos.x,this.pos.z)+C.groundClearance;this.pos.y<nn&&(this.pos.y=Zs.lerp(this.pos.y,nn,.28),this.forward.y=Math.abs(this.forward.y)+.18,this.forward.normalize()),this.mesh.position.copy(this.pos),this.localLight.position.copy(this.pos),this.localLight.intensity=j.intensity*(.82+Math.sin(lt*.006+this.lightPhase)*j.pulse),this.localLight.distance=j.distance,this.localLight.decay=j.decay;for(let te=_.trailLength-1;te>0;te--)this.trailPoints[te].copy(this.trailPoints[te-1]);this.trailPoints[0].copy(this.pos),this.trailGeo.setFromPoints(this.trailPoints),this.trailGeo.attributes.position.needsUpdate=!0}dispose(){D.remove(this.mesh),D.remove(this.line),D.remove(this.localLight),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.trailGeo.dispose(),this.trailMat.dispose()}}const Wt=[],fe=Bt[0].shrineAirPos;for(let L=0;L<_.fireflyCount;L++)Wt.push(new De(fe,L));const ve=Lt(),zt={moveX:0,moveY:0},Qt={left:-1,right:-1,lx:0,ly:0,rx:0,ry:0},Jt={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1,KeyQ:!1,KeyE:!1},Ee={locked:!1,dragging:!1,lastX:0,lastY:0},B=.0024,Ie=.005,$t=.032,he=(L,q,it)=>{ct.yaw-=L*it,ct.pitch=A(ct.pitch-q*it,-1.4,1.4)},mt=()=>({moveX:(Jt.KeyD||Jt.ArrowRight?1:0)-(Jt.KeyA||Jt.ArrowLeft?1:0),moveY:(Jt.KeyW||Jt.ArrowUp?1:0)-(Jt.KeyS||Jt.ArrowDown?1:0),turn:(Jt.KeyQ?1:0)-(Jt.KeyE?1:0)}),Re=()=>{const L=new Qg;L.setFromCamera(new Ht(0,0),z);const q=L.intersectObjects(jt);if(q.length>0){const it=q[0].object.userData.id,lt=Bt[it];if(ct.pos.distanceTo(lt.pos)<_.interactDist&&!lt.activated){lt.activated=!0,lt.pillar.material.color.set(16777215),lt.pillar.material.emissive.set(16777215),lt.pillar.material.emissiveIntensity=2,lt.shrine.material.color.set(16777215),lt.shrine.material.emissive.set(16777215),lt.shrine.material.emissiveIntensity=2,lt.tipGlow.material.opacity=.6,lt.shrineGlow.material.opacity=.6;const C=Bt.reduce((j,k)=>j+(k.pillar&&k.activated?1:0),0);x.playShrineIgnite({progress:C,total:_.obeliskCount,isFinal:C===_.obeliskCount}),n(j=>(j+1===_.obeliskCount&&r(!0),j+1))}}},T=L=>{L.preventDefault(),x.unlock();for(let q of L.changedTouches)q.clientX<window.innerWidth/2?(Qt.left=q.identifier,Qt.lx=q.clientX,Qt.ly=q.clientY):(Qt.right=q.identifier,Qt.rx=q.clientX,Qt.ry=q.clientY,Re())},y=L=>{L.preventDefault();for(let q of L.changedTouches)q.identifier===Qt.left?(zt.moveX=A((q.clientX-Qt.lx)/50,-1,1),zt.moveY=A(-(q.clientY-Qt.ly)/50,-1,1)):q.identifier===Qt.right&&(he(q.clientX-Qt.rx,q.clientY-Qt.ry,Ie),Qt.rx=q.clientX,Qt.ry=q.clientY)},G=L=>{for(let q of L.changedTouches)q.identifier===Qt.left?(Qt.left=-1,zt.moveX=0,zt.moveY=0):q.identifier===Qt.right&&(Qt.right=-1)},K=L=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(L.code)&&L.preventDefault(),L.repeat||x.unlock(),Object.hasOwn(Jt,L.code)&&(Jt[L.code]=!0),L.code==="Space"&&!L.repeat&&Re()},st=L=>{Object.hasOwn(Jt,L.code)&&(Jt[L.code]=!1)},ut=()=>{Ee.locked=document.pointerLockElement===Y.domElement,Ee.locked||(Ee.dragging=!1)},pt=L=>{var q,it;L.button===0&&(x.unlock(),Ee.dragging=!0,Ee.lastX=L.clientX,Ee.lastY=L.clientY,(it=(q=Y.domElement).requestPointerLock)==null||it.call(q))},Z=L=>{if(Ee.locked){he(L.movementX,L.movementY,B);return}Ee.dragging&&(he(L.clientX-Ee.lastX,L.clientY-Ee.lastY,Ie),Ee.lastX=L.clientX,Ee.lastY=L.clientY)},J=()=>{Ee.dragging=!1},_t=L=>{L.button===0&&Re()},Mt=L=>{L.preventDefault()};window.addEventListener("touchstart",T,{passive:!1}),window.addEventListener("touchmove",y,{passive:!1}),window.addEventListener("touchend",G),window.addEventListener("touchcancel",G),window.addEventListener("keydown",K),window.addEventListener("keyup",st),window.addEventListener("mousemove",Z),window.addEventListener("mouseup",J),document.addEventListener("pointerlockchange",ut),Y.domElement.addEventListener("mousedown",pt),Y.domElement.addEventListener("click",_t),Y.domElement.addEventListener("contextmenu",Mt);const ht=()=>{if(R)return;b=requestAnimationFrame(ht);const L=mt();L.turn!==0&&(ct.yaw+=L.turn*$t);const q=new O(-Math.sin(ct.yaw),0,-Math.cos(ct.yaw)),it=new O(-Math.cos(ct.yaw),0,Math.sin(ct.yaw)),lt=A(zt.moveX+L.moveX,-1,1),C=A(zt.moveY+L.moveY,-1,1),j=new O().addScaledVector(q,C).addScaledVector(it,-lt),k=A(j.length(),0,1);k>0&&ct.pos.addScaledVector(j.normalize(),_.moveSpeed);const rt=N(ct.pos.x,ct.pos.z)+_.playerHeight;ct.vel.y-=_.gravity,ct.pos.y+=ct.vel.y,ct.pos.y<rt&&(ct.pos.y=rt,ct.vel.y=0),z.position.copy(ct.pos),z.rotation.set(ct.pitch,ct.yaw,0,"YXZ");let at=Bt[0],Q=null,xt=1/0,Dt=0;Bt.forEach(xe=>{if(xe.activated)at=xe,xe.pillar&&(Dt+=1);else{const de=ct.pos.distanceTo(xe.pos);de<xt&&(xt=de,Q=xe)}});const It=Date.now();ve.update(It,ct.pos,ct.yaw);const qt=f.current,nn=ct.pos.distanceTo(at.shrinePos)<qt.orbitHoldDistance,te=!Q||nn?{mode:"orbit",center:at.shrineAirPos,verticalSpan:qt.orbitVerticalSpan}:{mode:"travel",destination:Q.tipPos};Wt.forEach(xe=>xe.update(te,Wt,It));let En=.6;x.update({playerSpeed:k,progressRatio:Dt/_.obeliskCount,isWon:Dt>=_.obeliskCount});const Cn=P.attributes.color,Ai=P.attributes.position;let zn=!1;Bt.forEach(xe=>{if(xe.activated){if(Math.random()>.86){const de=new yn(new Bu(.12),new Nu({color:S.fire,transparent:!0}));de.position.copy(xe.shrinePos).add(new O((Math.random()-.5)*2,.5,(Math.random()-.5)*2)),de.userData={v:new O((Math.random()-.5)*.03,.08,(Math.random()-.5)*.03),l:1},D.add(de),Ut.push(de)}En+=Math.max(0,1-ct.pos.distanceTo(xe.pos)/160)*.7,xe.tipGlow.material.opacity=.4+Math.sin(Date.now()*.003)*.2,xe.shrineGlow.material.opacity=.4+Math.sin(Date.now()*.003+1)*.2;for(let de=0;de<Ai.count;de++){const ls=Ai.getX(de),Il=Ai.getZ(de),po=Math.hypot(ls-xe.pos.x,Il-xe.pos.z);if(po<65){const mo=Math.max(0,1-po/65),go=S.pink.clone().lerp(S.blue,Math.sin(ls*.1)*.5+.5);Cn.setXYZ(de,Zs.lerp(Cn.getX(de),go.r,mo*.06),Zs.lerp(Cn.getY(de),go.g,mo*.06),Zs.lerp(Cn.getZ(de),go.b,mo*.06)),zn=!0}}}}),zn&&(Cn.needsUpdate=!0);for(let xe=Ut.length-1;xe>=0;xe--){const de=Ut[xe];de.position.add(de.userData.v),de.userData.l-=.015,de.material.opacity=de.userData.l,de.scale.setScalar(de.userData.l),de.userData.l<=0&&(D.remove(de),Ut.splice(xe,1))}const Gn=new Yt(S.skyTwilight).multiplyScalar(Math.max(.4,Math.min(1.6,En)));D.background.lerp(Gn,.04),D.fog.color.lerp(Gn,.04);const ks=new Qg;ks.setFromCamera(new Ht(0,0),z);const fo=ks.intersectObjects(jt),ho=fo.length>0&&ct.pos.distanceTo(fo[0].object.parent.position)<_.interactDist;l(xe=>xe===ho?xe:ho),Y.render(D,z)};return ht(),()=>{var L,q;R=!0,b&&cancelAnimationFrame(b),x.dispose(),Wt.forEach(it=>it.dispose()),ve.dispose(),window.removeEventListener("touchstart",T),window.removeEventListener("touchmove",y),window.removeEventListener("touchend",G),window.removeEventListener("touchcancel",G),window.removeEventListener("keydown",K),window.removeEventListener("keyup",st),window.removeEventListener("mousemove",Z),window.removeEventListener("mouseup",J),document.removeEventListener("pointerlockchange",ut),Y.domElement.removeEventListener("mousedown",pt),Y.domElement.removeEventListener("click",_t),Y.domElement.removeEventListener("contextmenu",Mt),document.pointerLockElement===Y.domElement&&((L=document.exitPointerLock)==null||L.call(document)),(q=e.current)==null||q.removeChild(Y.domElement)}},[]),Rt.jsxs("div",{className:"fixed inset-0 overflow-hidden bg-[#050510] select-none touch-none",children:[Rt.jsx("div",{ref:e,className:"w-full h-full"}),Rt.jsxs("div",{className:"absolute top-14 left-10 text-white pointer-events-none tracking-[0.5em] uppercase",children:[Rt.jsx("h1",{className:"text-3xl font-extralight drop-shadow-2xl",children:"Lumina"}),Rt.jsx("div",{className:"h-[2px] w-12 bg-white/30 my-4"}),Rt.jsx("p",{className:"text-[9px] opacity-40",children:"Follow the celestial threads"})]}),Rt.jsxs("div",{className:"absolute top-14 right-8 z-20 flex flex-col items-end gap-2",children:[w,Rt.jsxs("div",{className:"bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-6 py-2 text-white flex items-center gap-3",children:[Rt.jsx("span",{className:"text-[9px] opacity-25 tracking-widest",children:"SIGILS"}),Rt.jsxs("span",{className:"text-xl font-bold",children:[t," / ",i]})]}),w]}),Rt.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",children:[Rt.jsx("div",{className:`w-2 h-2 rounded-full transition-all duration-300 ${o?"bg-white scale-[3.5] shadow-[0_0_30px_#fff]":"bg-white/10"}`}),Rt.jsx("div",{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${o?"opacity-100 -top-10":"opacity-0"}`}),Rt.jsx("div",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${o?"opacity-100 -bottom-10":"opacity-0"}`})]}),Rt.jsx("div",{className:`absolute bottom-24 left-1/2 -translate-x-1/2 transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-6 pointer-events-none"}`,children:Rt.jsxs("div",{className:"bg-white/10 backdrop-blur-xl border border-white/20 px-10 py-3 rounded-full text-white text-[10px] tracking-[0.4em] uppercase flex items-center gap-3",children:[c?Rt.jsxs("span",{className:"flex items-center gap-3",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Ignite"}),Rt.jsx("span",{className:"text-white/60 tracking-[0.2em]",children:"Tap Right Half"})]}):Rt.jsxs("span",{className:"flex items-center gap-3",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Ignite"}),Rt.jsx("span",{className:"text-white/60 tracking-[0.2em]",children:"Space / Click"})]}),Rt.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-ping"})]})}),Rt.jsx("div",{className:`absolute bottom-8 left-8 right-8 flex ${c?"justify-end":"justify-start"} text-white/75 text-[10px] tracking-[0.25em] uppercase pointer-events-none`,children:Rt.jsxs("div",{className:`max-w-sm rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl ${c?"text-right":""}`,children:[Rt.jsx("p",{className:"text-white/35",children:c?"Touch":"Desktop"}),c?Rt.jsxs(Rt.Fragment,{children:[Rt.jsxs("p",{className:"mt-2 leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Move"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Drag Left Half"})]}),Rt.jsxs("p",{className:"leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Look"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Drag Right Half"})]}),Rt.jsxs("p",{className:"leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Interact"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Tap Right Half"})]})]}):Rt.jsxs(Rt.Fragment,{children:[Rt.jsxs("p",{className:"mt-2 leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Move"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"WASD / Arrows"})]}),Rt.jsxs("p",{className:"leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Rotate"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Q / E"})]}),Rt.jsxs("p",{className:"leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Look"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Mouse"})]}),Rt.jsxs("p",{className:"leading-relaxed",children:[Rt.jsx("strong",{className:"font-semibold text-white",children:"Interact"}),Rt.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Space / Click"})]})]})]})}),s&&Rt.jsxs("div",{className:"absolute inset-0 bg-white z-[999] flex flex-col items-center justify-center animate-in fade-in duration-[3000ms]",children:[Rt.jsx("div",{className:"text-blue-400 text-6xl mb-10 font-thin italic tracking-widest",children:"AETHER"}),Rt.jsx("h2",{className:"text-4xl font-extralight text-slate-800 tracking-[0.6em] uppercase text-center ml-[0.6em]",children:"极境归元"}),Rt.jsx("p",{className:"text-slate-400 mt-6 max-w-xs text-center text-[11px] tracking-widest px-8 font-light leading-loose",children:"光之脉络已编织完成。世界重获灵魂，温暖与色彩将永驻这片山脉。"}),Rt.jsx("button",{onPointerDown:b=>{b.stopPropagation(),window.location.reload()},className:"mt-16 px-16 py-4 bg-slate-900 text-white rounded-full text-[10px] tracking-[0.5em] uppercase active:scale-95 transition-transform",children:"Restart the Dream"})]}),Rt.jsx("style",{children:`
        canvas { touch-action: none; -webkit-user-select: none; }
        body { margin: 0; background: #050510; height: 100vh; overflow: hidden; }
        * { -webkit-tap-highlight-color: transparent; }
      `})]})};gb.createRoot(document.getElementById("root")).render(Rt.jsx(cw,{}));
