(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function ay(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var p_={exports:{}},Du={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy=Symbol.for("react.transitional.element"),ry=Symbol.for("react.fragment");function m_(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:sy,type:e,key:i,ref:t!==void 0?t:null,props:n}}Du.Fragment=ry;Du.jsx=m_;Du.jsxs=m_;p_.exports=Du;var At=p_.exports,g_={exports:{}},Gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op=Symbol.for("react.transitional.element"),oy=Symbol.for("react.portal"),ly=Symbol.for("react.fragment"),cy=Symbol.for("react.strict_mode"),uy=Symbol.for("react.profiler"),fy=Symbol.for("react.consumer"),hy=Symbol.for("react.context"),dy=Symbol.for("react.forward_ref"),py=Symbol.for("react.suspense"),my=Symbol.for("react.memo"),__=Symbol.for("react.lazy"),gy=Symbol.for("react.activity"),Um=Symbol.iterator;function _y(e){return e===null||typeof e!="object"?null:(e=Um&&e[Um]||e["@@iterator"],typeof e=="function"?e:null)}var v_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x_=Object.assign,S_={};function Zr(e,t,n){this.props=e,this.context=t,this.refs=S_,this.updater=n||v_}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function y_(){}y_.prototype=Zr.prototype;function lp(e,t,n){this.props=e,this.context=t,this.refs=S_,this.updater=n||v_}var cp=lp.prototype=new y_;cp.constructor=lp;x_(cp,Zr.prototype);cp.isPureReactComponent=!0;var Lm=Array.isArray;function vh(){}var Le={H:null,A:null,T:null,S:null},M_=Object.prototype.hasOwnProperty;function up(e,t,n){var i=n.ref;return{$$typeof:op,type:e,key:t,ref:i!==void 0?i:null,props:n}}function vy(e,t){return up(e.type,t,e.props)}function fp(e){return typeof e=="object"&&e!==null&&e.$$typeof===op}function xy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Nm=/\/+/g;function $u(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xy(""+e.key):t.toString(36)}function Sy(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(vh,vh):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function lr(e,t,n,i,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case op:case oy:r=!0;break;case __:return r=e._init,lr(r(e._payload),t,n,i,a)}}if(r)return a=a(e),r=i===""?"."+$u(e,0):i,Lm(a)?(n="",r!=null&&(n=r.replace(Nm,"$&/")+"/"),lr(a,t,n,"",function(c){return c})):a!=null&&(fp(a)&&(a=vy(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Nm,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=i===""?".":i+":";if(Lm(e))for(var l=0;l<e.length;l++)i=e[l],s=o+$u(i,l),r+=lr(i,t,n,s,a);else if(l=_y(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,s=o+$u(i,l++),r+=lr(i,t,n,s,a);else if(s==="object"){if(typeof e.then=="function")return lr(Sy(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Ll(e,t,n){if(e==null)return e;var i=[],a=0;return lr(e,i,"","",function(s){return t.call(n,s,a++)}),i}function yy(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Om=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},My={map:Ll,forEach:function(e,t,n){Ll(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ll(e,function(){t++}),t},toArray:function(e){return Ll(e,function(t){return t})||[]},only:function(e){if(!fp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Gt.Activity=gy;Gt.Children=My;Gt.Component=Zr;Gt.Fragment=ly;Gt.Profiler=uy;Gt.PureComponent=lp;Gt.StrictMode=cy;Gt.Suspense=py;Gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Le;Gt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Le.H.useMemoCache(e)}};Gt.cache=function(e){return function(){return e.apply(null,arguments)}};Gt.cacheSignal=function(){return null};Gt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=x_({},e.props),a=e.key;if(t!=null)for(s in t.key!==void 0&&(a=""+t.key),t)!M_.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return up(e.type,a,i)};Gt.createContext=function(e){return e={$$typeof:hy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:fy,_context:e},e};Gt.createElement=function(e,t,n){var i,a={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)M_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return up(e,s,a)};Gt.createRef=function(){return{current:null}};Gt.forwardRef=function(e){return{$$typeof:dy,render:e}};Gt.isValidElement=fp;Gt.lazy=function(e){return{$$typeof:__,_payload:{_status:-1,_result:e},_init:yy}};Gt.memo=function(e,t){return{$$typeof:my,type:e,compare:t===void 0?null:t}};Gt.startTransition=function(e){var t=Le.T,n={};Le.T=n;try{var i=e(),a=Le.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(vh,Om)}catch(s){Om(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),Le.T=t}};Gt.unstable_useCacheRefresh=function(){return Le.H.useCacheRefresh()};Gt.use=function(e){return Le.H.use(e)};Gt.useActionState=function(e,t,n){return Le.H.useActionState(e,t,n)};Gt.useCallback=function(e,t){return Le.H.useCallback(e,t)};Gt.useContext=function(e){return Le.H.useContext(e)};Gt.useDebugValue=function(){};Gt.useDeferredValue=function(e,t){return Le.H.useDeferredValue(e,t)};Gt.useEffect=function(e,t){return Le.H.useEffect(e,t)};Gt.useEffectEvent=function(e){return Le.H.useEffectEvent(e)};Gt.useId=function(){return Le.H.useId()};Gt.useImperativeHandle=function(e,t,n){return Le.H.useImperativeHandle(e,t,n)};Gt.useInsertionEffect=function(e,t){return Le.H.useInsertionEffect(e,t)};Gt.useLayoutEffect=function(e,t){return Le.H.useLayoutEffect(e,t)};Gt.useMemo=function(e,t){return Le.H.useMemo(e,t)};Gt.useOptimistic=function(e,t){return Le.H.useOptimistic(e,t)};Gt.useReducer=function(e,t,n){return Le.H.useReducer(e,t,n)};Gt.useRef=function(e){return Le.H.useRef(e)};Gt.useState=function(e){return Le.H.useState(e)};Gt.useSyncExternalStore=function(e,t,n){return Le.H.useSyncExternalStore(e,t,n)};Gt.useTransition=function(){return Le.H.useTransition()};Gt.version="19.2.5";g_.exports=Gt;var on=g_.exports,E_={exports:{}},Uu={},b_={exports:{}},T_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,P){var W=N.length;N.push(P);t:for(;0<W;){var tt=W-1>>>1,ot=N[tt];if(0<a(ot,P))N[tt]=P,N[W]=ot,W=tt;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var P=N[0],W=N.pop();if(W!==P){N[0]=W;t:for(var tt=0,ot=N.length,Mt=ot>>>1;tt<Mt;){var ct=2*(tt+1)-1,Pt=N[ct],qt=ct+1,Dt=N[qt];if(0>a(Pt,W))qt<ot&&0>a(Dt,Pt)?(N[tt]=Dt,N[qt]=W,tt=qt):(N[tt]=Pt,N[ct]=W,tt=ct);else if(qt<ot&&0>a(Dt,W))N[tt]=Dt,N[qt]=W,tt=qt;else break t}}return P}function a(N,P){var W=N.sortIndex-P.sortIndex;return W!==0?W:N.id-P.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var l=[],c=[],h=1,p=null,u=3,d=!1,v=!1,E=!1,g=!1,f=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function S(N){for(var P=n(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=N)i(c),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(c)}}function C(N){if(E=!1,S(N),!v)if(n(l)!==null)v=!0,b||(b=!0,F());else{var P=n(c);P!==null&&I(C,P.startTime-N)}}var b=!1,R=-1,x=5,A=-1;function D(){return g?!0:!(e.unstable_now()-A<x)}function U(){if(g=!1,b){var N=e.unstable_now();A=N;var P=!0;try{t:{v=!1,E&&(E=!1,m(R),R=-1),d=!0;var W=u;try{e:{for(S(N),p=n(l);p!==null&&!(p.expirationTime>N&&D());){var tt=p.callback;if(typeof tt=="function"){p.callback=null,u=p.priorityLevel;var ot=tt(p.expirationTime<=N);if(N=e.unstable_now(),typeof ot=="function"){p.callback=ot,S(N),P=!0;break e}p===n(l)&&i(l),S(N)}else i(l);p=n(l)}if(p!==null)P=!0;else{var Mt=n(c);Mt!==null&&I(C,Mt.startTime-N),P=!1}}break t}finally{p=null,u=W,d=!1}P=void 0}}finally{P?F():b=!1}}}var F;if(typeof _=="function")F=function(){_(U)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,nt=q.port2;q.port1.onmessage=U,F=function(){nt.postMessage(null)}}else F=function(){f(U,0)};function I(N,P){R=f(function(){N(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_next=function(N){switch(u){case 1:case 2:case 3:var P=3;break;default:P=u}var W=u;u=P;try{return N()}finally{u=W}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(N,P){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=u;u=N;try{return P()}finally{u=W}},e.unstable_scheduleCallback=function(N,P,W){var tt=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?tt+W:tt):W=tt,N){case 1:var ot=-1;break;case 2:ot=250;break;case 5:ot=1073741823;break;case 4:ot=1e4;break;default:ot=5e3}return ot=W+ot,N={id:h++,callback:P,priorityLevel:N,startTime:W,expirationTime:ot,sortIndex:-1},W>tt?(N.sortIndex=W,t(c,N),n(l)===null&&N===n(c)&&(E?(m(R),R=-1):E=!0,I(C,W-tt))):(N.sortIndex=ot,t(l,N),v||d||(v=!0,b||(b=!0,F()))),N},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(N){var P=u;return function(){var W=u;u=P;try{return N.apply(this,arguments)}finally{u=W}}}})(T_);b_.exports=T_;var Ey=b_.exports,A_={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by=on;function R_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Sa(){}var Tn={d:{f:Sa,r:function(){throw Error(R_(522))},D:Sa,C:Sa,L:Sa,m:Sa,X:Sa,S:Sa,M:Sa},p:0,findDOMNode:null},Ty=Symbol.for("react.portal");function Ay(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ty,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Bo=by.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Lu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tn;An.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(R_(299));return Ay(e,t,null,n)};An.flushSync=function(e){var t=Bo.T,n=Tn.p;try{if(Bo.T=null,Tn.p=2,e)return e()}finally{Bo.T=t,Tn.p=n,Tn.d.f()}};An.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Tn.d.C(e,t))};An.prefetchDNS=function(e){typeof e=="string"&&Tn.d.D(e)};An.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Lu(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Tn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&Tn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};An.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Lu(t.as,t.crossOrigin);Tn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Tn.d.M(e)};An.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Lu(n,t.crossOrigin);Tn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};An.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Lu(t.as,t.crossOrigin);Tn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Tn.d.m(e)};An.requestFormReset=function(e){Tn.d.r(e)};An.unstable_batchedUpdates=function(e,t){return e(t)};An.useFormState=function(e,t,n){return Bo.H.useFormState(e,t,n)};An.useFormStatus=function(){return Bo.H.useHostTransitionStatus()};An.version="19.2.5";function C_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C_)}catch(e){console.error(e)}}C_(),A_.exports=An;var Ry=A_.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qe=Ey,w_=on,Cy=Ry;function $(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function D_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function U_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pm(e){if(_l(e)!==e)throw Error($(188))}function wy(e){var t=e.alternate;if(!t){if(t=_l(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Pm(a),e;if(s===i)return Pm(a),t;s=s.sibling}throw Error($(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error($(189))}}if(n.alternate!==i)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function N_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N_(e),t!==null)return t;e=e.sibling}return null}var Ne=Object.assign,Dy=Symbol.for("react.element"),Nl=Symbol.for("react.transitional.element"),wo=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),O_=Symbol.for("react.strict_mode"),xh=Symbol.for("react.profiler"),P_=Symbol.for("react.consumer"),$i=Symbol.for("react.context"),hp=Symbol.for("react.forward_ref"),Sh=Symbol.for("react.suspense"),yh=Symbol.for("react.suspense_list"),dp=Symbol.for("react.memo"),Ra=Symbol.for("react.lazy"),Mh=Symbol.for("react.activity"),Uy=Symbol.for("react.memo_cache_sentinel"),Bm=Symbol.iterator;function uo(e){return e===null||typeof e!="object"?null:(e=Bm&&e[Bm]||e["@@iterator"],typeof e=="function"?e:null)}var Ly=Symbol.for("react.client.reference");function Eh(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ly?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case xh:return"Profiler";case O_:return"StrictMode";case Sh:return"Suspense";case yh:return"SuspenseList";case Mh:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case wo:return"Portal";case $i:return e.displayName||"Context";case P_:return(e._context.displayName||"Context")+".Consumer";case hp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dp:return t=e.displayName||null,t!==null?t:Eh(e.type)||"Memo";case Ra:t=e._payload,e=e._init;try{return Eh(e(t))}catch{}}return null}var Do=Array.isArray,Ot=w_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=Cy.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xs={pending:!1,data:null,method:null,action:null},bh=[],hr=-1;function zi(e){return{current:e}}function rn(e){0>hr||(e.current=bh[hr],bh[hr]=null,hr--)}function Ce(e,t){hr++,bh[hr]=e.current,e.current=t}var Oi=zi(null),Jo=zi(null),Ha=zi(null),Xc=zi(null);function kc(e,t){switch(Ce(Ha,t),Ce(Jo,e),Ce(Oi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?V0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=V0(t),e=eS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rn(Oi),Ce(Oi,e)}function Or(){rn(Oi),rn(Jo),rn(Ha)}function Th(e){e.memoizedState!==null&&Ce(Xc,e);var t=Oi.current,n=eS(t,e.type);t!==n&&(Ce(Jo,e),Ce(Oi,n))}function Wc(e){Jo.current===e&&(rn(Oi),rn(Jo)),Xc.current===e&&(rn(Xc),cl._currentValue=xs)}var tf,Im;function us(e){if(tf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tf=t&&t[1]||"",Im=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tf+e+Im}var ef=!1;function nf(e,t){if(!e||ef)return"";ef=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){u=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=a);break}}}finally{ef=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?us(n):""}function Ny(e,t){switch(e.tag){case 26:case 27:case 5:return us(e.type);case 16:return us("Lazy");case 13:return e.child!==t&&t!==null?us("Suspense Fallback"):us("Suspense");case 19:return us("SuspenseList");case 0:case 15:return nf(e.type,!1);case 11:return nf(e.type.render,!1);case 1:return nf(e.type,!0);case 31:return us("Activity");default:return""}}function zm(e){try{var t="",n=null;do t+=Ny(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ah=Object.prototype.hasOwnProperty,pp=Qe.unstable_scheduleCallback,af=Qe.unstable_cancelCallback,Oy=Qe.unstable_shouldYield,Py=Qe.unstable_requestPaint,jn=Qe.unstable_now,By=Qe.unstable_getCurrentPriorityLevel,B_=Qe.unstable_ImmediatePriority,I_=Qe.unstable_UserBlockingPriority,Yc=Qe.unstable_NormalPriority,Iy=Qe.unstable_LowPriority,z_=Qe.unstable_IdlePriority,zy=Qe.log,Fy=Qe.unstable_setDisableYieldValue,vl=null,Zn=null;function Oa(e){if(typeof zy=="function"&&Fy(e),Zn&&typeof Zn.setStrictMode=="function")try{Zn.setStrictMode(vl,e)}catch{}}var Kn=Math.clz32?Math.clz32:Vy,Hy=Math.log,Gy=Math.LN2;function Vy(e){return e>>>=0,e===0?32:31-(Hy(e)/Gy|0)|0}var Ol=256,Pl=262144,Bl=4194304;function fs(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Nu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=fs(i):(r&=o,r!==0?a=fs(r):n||(n=o&~e,n!==0&&(a=fs(n))))):(o=i&~s,o!==0?a=fs(o):r!==0?a=fs(r):n||(n=i&~e,n!==0&&(a=fs(n)))),a===0?0:t!==0&&t!==a&&!(t&s)&&(s=a&-a,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:a}function xl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F_(){var e=Bl;return Bl<<=1,!(Bl&62914560)&&(Bl=4194304),e}function sf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Sl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ky(e,t,n,i,a,s){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Kn(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&H_(e,i,0),s!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function H_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Kn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function G_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Kn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function V_(e,t){var n=t&-t;return n=n&42?1:mp(n),n&(e.suspendedLanes|t)?0:n}function mp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gp(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function X_(){var e=ce.p;return e!==0?e:(e=window.event,e===void 0?32:hS(e.type))}function Fm(e,t){var n=ce.p;try{return ce.p=e,t()}finally{ce.p=n}}var ns=Math.random().toString(36).slice(2),cn="__reactFiber$"+ns,On="__reactProps$"+ns,Kr="__reactContainer$"+ns,Rh="__reactEvents$"+ns,Wy="__reactListeners$"+ns,Yy="__reactHandles$"+ns,Hm="__reactResources$"+ns,yl="__reactMarker$"+ns;function _p(e){delete e[cn],delete e[On],delete e[Rh],delete e[Wy],delete e[Yy]}function dr(e){var t=e[cn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kr]||n[cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=q0(e);e!==null;){if(n=e[cn])return n;e=q0(e)}return t}e=n,n=e.parentNode}return null}function Qr(e){if(e=e[cn]||e[Kr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Uo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error($(33))}function Tr(e){var t=e[Hm];return t||(t=e[Hm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function an(e){e[yl]=!0}var k_=new Set,W_={};function Us(e,t){Pr(e,t),Pr(e+"Capture",t)}function Pr(e,t){for(W_[e]=t,e=0;e<t.length;e++)k_.add(t[e])}var qy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gm={},Vm={};function jy(e){return Ah.call(Vm,e)?!0:Ah.call(Gm,e)?!1:qy.test(e)?Vm[e]=!0:(Gm[e]=!0,!1)}function yc(e,t,n){if(jy(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Il(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Hi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function ai(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Y_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zy(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ch(e){if(!e._valueTracker){var t=Y_(e)?"checked":"value";e._valueTracker=Zy(e,t,""+e[t])}}function q_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Y_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function qc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ky=/[\n"\\]/g;function oi(e){return e.replace(Ky,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wh(e,t,n,i,a,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ai(t)):e.value!==""+ai(t)&&(e.value=""+ai(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Dh(e,r,ai(t)):n!=null?Dh(e,r,ai(n)):i!=null&&e.removeAttribute("value"),a==null&&s!=null&&(e.defaultChecked=!!s),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ai(o):e.removeAttribute("name")}function j_(e,t,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Ch(e);return}n=n!=null?""+ai(n):"",t=t!=null?""+ai(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Ch(e)}function Dh(e,t,n){t==="number"&&qc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ar(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ai(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Z_(e,t,n){if(t!=null&&(t=""+ai(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ai(n):""}function K_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error($(92));if(Do(i)){if(1<i.length)throw Error($(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ai(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Ch(e)}function Br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xm(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Qy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Q_(e,t,n){if(t!=null&&typeof t!="object")throw Error($(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Xm(e,a,i)}else for(var s in t)t.hasOwnProperty(s)&&Xm(e,s,t[s])}function vp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$y=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mc(e){return $y.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var Uh=null;function xp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pr=null,Rr=null;function km(e){var t=Qr(e);if(t&&(e=t.stateNode)){var n=e[On]||null;t:switch(e=t.stateNode,t.type){case"input":if(wh(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+oi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[On]||null;if(!a)throw Error($(90));wh(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&q_(i)}break t;case"textarea":Z_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Ar(e,!!n.multiple,t,!1)}}}var rf=!1;function J_(e,t,n){if(rf)return e(t,n);rf=!0;try{var i=e(t);return i}finally{if(rf=!1,(pr!==null||Rr!==null)&&(Wu(),pr&&(t=pr,e=Rr,Rr=pr=null,km(t),e)))for(t=0;t<e.length;t++)km(e[t])}}function $o(e,t){var n=e.stateNode;if(n===null)return null;var i=n[On]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lh=!1;if(ca)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Lh=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Lh=!1}var Pa=null,Sp=null,Ec=null;function $_(){if(Ec)return Ec;var e,t=Sp,n=t.length,i,a="value"in Pa?Pa.value:Pa.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[s-i];i++);return Ec=a.slice(e,1<i?1-i:void 0)}function bc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zl(){return!0}function Wm(){return!1}function Pn(e){function t(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zl:Wm,this.isPropagationStopped=Wm,this}return Ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),t}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ou=Pn(Ls),Ml=Ne({},Ls,{view:0,detail:0}),tM=Pn(Ml),of,lf,ho,Pu=Ne({},Ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(of=e.screenX-ho.screenX,lf=e.screenY-ho.screenY):lf=of=0,ho=e),of)},movementY:function(e){return"movementY"in e?e.movementY:lf}}),Ym=Pn(Pu),eM=Ne({},Pu,{dataTransfer:0}),nM=Pn(eM),iM=Ne({},Ml,{relatedTarget:0}),cf=Pn(iM),aM=Ne({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),sM=Pn(aM),rM=Ne({},Ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oM=Pn(rM),lM=Ne({},Ls,{data:0}),qm=Pn(lM),cM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hM(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fM[e])?!!t[e]:!1}function yp(){return hM}var dM=Ne({},Ml,{key:function(e){if(e.key){var t=cM[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yp,charCode:function(e){return e.type==="keypress"?bc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pM=Pn(dM),mM=Ne({},Pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jm=Pn(mM),gM=Ne({},Ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yp}),_M=Pn(gM),vM=Ne({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),xM=Pn(vM),SM=Ne({},Pu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yM=Pn(SM),MM=Ne({},Ls,{newState:0,oldState:0}),EM=Pn(MM),bM=[9,13,27,32],Mp=ca&&"CompositionEvent"in window,Io=null;ca&&"documentMode"in document&&(Io=document.documentMode);var TM=ca&&"TextEvent"in window&&!Io,tv=ca&&(!Mp||Io&&8<Io&&11>=Io),Zm=" ",Km=!1;function ev(e,t){switch(e){case"keyup":return bM.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function AM(e,t){switch(e){case"compositionend":return nv(t);case"keypress":return t.which!==32?null:(Km=!0,Zm);case"textInput":return e=t.data,e===Zm&&Km?null:e;default:return null}}function RM(e,t){if(mr)return e==="compositionend"||!Mp&&ev(e,t)?(e=$_(),Ec=Sp=Pa=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tv&&t.locale!=="ko"?null:t.data;default:return null}}var CM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!CM[e.type]:t==="textarea"}function iv(e,t,n,i){pr?Rr?Rr.push(i):Rr=[i]:pr=i,t=fu(t,"onChange"),0<t.length&&(n=new Ou("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var zo=null,tl=null;function wM(e){Jx(e,0)}function Bu(e){var t=Uo(e);if(q_(t))return e}function Jm(e,t){if(e==="change")return t}var av=!1;if(ca){var uf;if(ca){var ff="oninput"in document;if(!ff){var $m=document.createElement("div");$m.setAttribute("oninput","return;"),ff=typeof $m.oninput=="function"}uf=ff}else uf=!1;av=uf&&(!document.documentMode||9<document.documentMode)}function t0(){zo&&(zo.detachEvent("onpropertychange",sv),tl=zo=null)}function sv(e){if(e.propertyName==="value"&&Bu(tl)){var t=[];iv(t,tl,e,xp(e)),J_(wM,t)}}function DM(e,t,n){e==="focusin"?(t0(),zo=t,tl=n,zo.attachEvent("onpropertychange",sv)):e==="focusout"&&t0()}function UM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bu(tl)}function LM(e,t){if(e==="click")return Bu(t)}function NM(e,t){if(e==="input"||e==="change")return Bu(t)}function OM(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jn=typeof Object.is=="function"?Object.is:OM;function el(e,t){if(Jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Ah.call(t,a)||!Jn(e[a],t[a]))return!1}return!0}function e0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function n0(e,t){var n=e0(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=e0(n)}}function rv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ov(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qc(e.document)}return t}function Ep(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var PM=ca&&"documentMode"in document&&11>=document.documentMode,gr=null,Nh=null,Fo=null,Oh=!1;function i0(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oh||gr==null||gr!==qc(i)||(i=gr,"selectionStart"in i&&Ep(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&el(Fo,i)||(Fo=i,i=fu(Nh,"onSelect"),0<i.length&&(t=new Ou("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=gr)))}function ss(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _r={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},hf={},lv={};ca&&(lv=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Ns(e){if(hf[e])return hf[e];if(!_r[e])return e;var t=_r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lv)return hf[e]=t[n];return e}var cv=Ns("animationend"),uv=Ns("animationiteration"),fv=Ns("animationstart"),BM=Ns("transitionrun"),IM=Ns("transitionstart"),zM=Ns("transitioncancel"),hv=Ns("transitionend"),dv=new Map,Ph="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ph.push("scrollEnd");function Ei(e,t){dv.set(e,t),Us(t,[e])}var jc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],vr=0,bp=0;function Iu(){for(var e=vr,t=bp=vr=0;t<e;){var n=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];ni[t++]=null;var s=ni[t];if(ni[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&pv(n,a,s)}}function zu(e,t,n,i){ni[vr++]=e,ni[vr++]=t,ni[vr++]=n,ni[vr++]=i,bp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Tp(e,t,n,i){return zu(e,t,n,i),Zc(e)}function Os(e,t){return zu(e,null,null,t),Zc(e)}function pv(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(a=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,a&&t!==null&&(a=31-Kn(n),e=s.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),s):null}function Zc(e){if(50<jo)throw jo=0,nd=null,Error($(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var xr={};function FM(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,t,n,i){return new FM(e,t,n,i)}function Ap(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,t){var n=e.alternate;return n===null?(n=Wn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mv(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Tc(e,t,n,i,a,s){var r=0;if(i=e,typeof e=="function")Ap(e)&&(r=1);else if(typeof e=="string")r=kE(e,n,Oi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Mh:return e=Wn(31,n,t,a),e.elementType=Mh,e.lanes=s,e;case fr:return Ss(n.children,a,s,t);case O_:r=8,a|=24;break;case xh:return e=Wn(12,n,t,a|2),e.elementType=xh,e.lanes=s,e;case Sh:return e=Wn(13,n,t,a),e.elementType=Sh,e.lanes=s,e;case yh:return e=Wn(19,n,t,a),e.elementType=yh,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $i:r=10;break t;case P_:r=9;break t;case hp:r=11;break t;case dp:r=14;break t;case Ra:r=16,i=null;break t}r=29,n=Error($(130,e===null?"null":typeof e,"")),i=null}return t=Wn(r,n,t,a),t.elementType=e,t.type=i,t.lanes=s,t}function Ss(e,t,n,i){return e=Wn(7,e,i,t),e.lanes=n,e}function df(e,t,n){return e=Wn(6,e,null,t),e.lanes=n,e}function gv(e){var t=Wn(18,null,null,0);return t.stateNode=e,t}function pf(e,t,n){return t=Wn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var a0=new WeakMap;function li(e,t){if(typeof e=="object"&&e!==null){var n=a0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:zm(t)},a0.set(e,t),t)}return{value:e,source:t,stack:zm(t)}}var Sr=[],yr=0,Kc=null,nl=0,si=[],ri=0,Ka=null,wi=1,Di="";function Ki(e,t){Sr[yr++]=nl,Sr[yr++]=Kc,Kc=e,nl=t}function _v(e,t,n){si[ri++]=wi,si[ri++]=Di,si[ri++]=Ka,Ka=e;var i=wi;e=Di;var a=32-Kn(i)-1;i&=~(1<<a),n+=1;var s=32-Kn(t)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,wi=1<<32-Kn(t)+a|n<<a|i,Di=s+e}else wi=1<<s|n<<a|i,Di=e}function Rp(e){e.return!==null&&(Ki(e,1),_v(e,1,0))}function Cp(e){for(;e===Kc;)Kc=Sr[--yr],Sr[yr]=null,nl=Sr[--yr],Sr[yr]=null;for(;e===Ka;)Ka=si[--ri],si[ri]=null,Di=si[--ri],si[ri]=null,wi=si[--ri],si[ri]=null}function vv(e,t){si[ri++]=wi,si[ri++]=Di,si[ri++]=Ka,wi=t.id,Di=t.overflow,Ka=e}var un=null,Ue=null,re=!1,Ga=null,ci=!1,Bh=Error($(519));function Qa(e){var t=Error($(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw il(li(t,e)),Bh}function s0(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[cn]=e,t[On]=i,n){case"dialog":te("cancel",t),te("close",t);break;case"iframe":case"object":case"embed":te("load",t);break;case"video":case"audio":for(n=0;n<ol.length;n++)te(ol[n],t);break;case"source":te("error",t);break;case"img":case"image":case"link":te("error",t),te("load",t);break;case"details":te("toggle",t);break;case"input":te("invalid",t),j_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":te("invalid",t);break;case"textarea":te("invalid",t),K_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||tS(t.textContent,n)?(i.popover!=null&&(te("beforetoggle",t),te("toggle",t)),i.onScroll!=null&&te("scroll",t),i.onScrollEnd!=null&&te("scrollend",t),i.onClick!=null&&(t.onclick=ta),t=!0):t=!1,t||Qa(e,!0)}function r0(e){for(un=e.return;un;)switch(un.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:un=un.return}}function Gs(e){if(e!==un)return!1;if(!re)return r0(e),re=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||od(e.type,e.memoizedProps)),n=!n),n&&Ue&&Qa(e),r0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));Ue=Y0(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));Ue=Y0(e)}else t===27?(t=Ue,is(e.type)?(e=fd,fd=null,Ue=e):Ue=t):Ue=un?hi(e.stateNode.nextSibling):null;return!0}function bs(){Ue=un=null,re=!1}function mf(){var e=Ga;return e!==null&&(Un===null?Un=e:Un.push.apply(Un,e),Ga=null),e}function il(e){Ga===null?Ga=[e]:Ga.push(e)}var Ih=zi(null),Ps=null,ea=null;function wa(e,t,n){Ce(Ih,t._currentValue),t._currentValue=n}function aa(e){e._currentValue=Ih.current,rn(Ih)}function zh(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Fh(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;t:for(;s!==null;){var o=s;s=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),zh(s.return,n,e),i||(r=null);break t}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error($(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),zh(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Jr(e,t,n,i){e=null;for(var a=t,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error($(387));if(r=r.memoizedProps,r!==null){var o=a.type;Jn(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Xc.current){if(r=a.alternate,r===null)throw Error($(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(cl):e=[cl])}a=a.return}e!==null&&Fh(t,e,n,i),t.flags|=262144}function Qc(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ts(e){Ps=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fn(e){return xv(Ps,e)}function Fl(e,t){return Ps===null&&Ts(e),xv(e,t)}function xv(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error($(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var HM=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},GM=Qe.unstable_scheduleCallback,VM=Qe.unstable_NormalPriority,je={$$typeof:$i,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wp(){return{controller:new HM,data:new Map,refCount:0}}function El(e){e.refCount--,e.refCount===0&&GM(VM,function(){e.controller.abort()})}var Ho=null,Hh=0,Ir=0,Cr=null;function XM(e,t){if(Ho===null){var n=Ho=[];Hh=0,Ir=tm(),Cr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Hh++,t.then(o0,o0),t}function o0(){if(--Hh===0&&Ho!==null){Cr!==null&&(Cr.status="fulfilled");var e=Ho;Ho=null,Ir=0,Cr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function kM(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var l0=Ot.S;Ot.S=function(e,t){Nx=jn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&XM(e,t),l0!==null&&l0(e,t)};var ys=zi(null);function Dp(){var e=ys.current;return e!==null?e:Te.pooledCache}function Ac(e,t){t===null?Ce(ys,ys.current):Ce(ys,t.pool)}function Sv(){var e=Dp();return e===null?null:{parent:je._currentValue,pool:e}}var $r=Error($(460)),Up=Error($(474)),Fu=Error($(542)),Jc={then:function(){}};function c0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yv(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ta,ta),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,f0(e),e;default:if(typeof t.status=="string")t.then(ta,ta);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error($(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,f0(e),e}throw Ms=t,$r}}function hs(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ms=n,$r):n}}var Ms=null;function u0(){if(Ms===null)throw Error($(459));var e=Ms;return Ms=null,e}function f0(e){if(e===$r||e===Fu)throw Error($(483))}var wr=null,al=0;function Hl(e){var t=al;return al+=1,wr===null&&(wr=[]),yv(wr,e,t)}function po(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Gl(e,t){throw t.$$typeof===Dy?Error($(525)):(e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mv(e){function t(f,m){if(e){var _=f.deletions;_===null?(f.deletions=[m],f.flags|=16):_.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function a(f,m){return f=ia(f,m),f.index=0,f.sibling=null,f}function s(f,m,_){return f.index=_,e?(_=f.alternate,_!==null?(_=_.index,_<m?(f.flags|=67108866,m):_):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,_,S){return m===null||m.tag!==6?(m=df(_,f.mode,S),m.return=f,m):(m=a(m,_),m.return=f,m)}function l(f,m,_,S){var C=_.type;return C===fr?h(f,m,_.props.children,S,_.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ra&&hs(C)===m.type)?(m=a(m,_.props),po(m,_),m.return=f,m):(m=Tc(_.type,_.key,_.props,null,f.mode,S),po(m,_),m.return=f,m)}function c(f,m,_,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=pf(_,f.mode,S),m.return=f,m):(m=a(m,_.children||[]),m.return=f,m)}function h(f,m,_,S,C){return m===null||m.tag!==7?(m=Ss(_,f.mode,S,C),m.return=f,m):(m=a(m,_),m.return=f,m)}function p(f,m,_){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=df(""+m,f.mode,_),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Nl:return _=Tc(m.type,m.key,m.props,null,f.mode,_),po(_,m),_.return=f,_;case wo:return m=pf(m,f.mode,_),m.return=f,m;case Ra:return m=hs(m),p(f,m,_)}if(Do(m)||uo(m))return m=Ss(m,f.mode,_,null),m.return=f,m;if(typeof m.then=="function")return p(f,Hl(m),_);if(m.$$typeof===$i)return p(f,Fl(f,m),_);Gl(f,m)}return null}function u(f,m,_,S){var C=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return C!==null?null:o(f,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Nl:return _.key===C?l(f,m,_,S):null;case wo:return _.key===C?c(f,m,_,S):null;case Ra:return _=hs(_),u(f,m,_,S)}if(Do(_)||uo(_))return C!==null?null:h(f,m,_,S,null);if(typeof _.then=="function")return u(f,m,Hl(_),S);if(_.$$typeof===$i)return u(f,m,Fl(f,_),S);Gl(f,_)}return null}function d(f,m,_,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(_)||null,o(m,f,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Nl:return f=f.get(S.key===null?_:S.key)||null,l(m,f,S,C);case wo:return f=f.get(S.key===null?_:S.key)||null,c(m,f,S,C);case Ra:return S=hs(S),d(f,m,_,S,C)}if(Do(S)||uo(S))return f=f.get(_)||null,h(m,f,S,C,null);if(typeof S.then=="function")return d(f,m,_,Hl(S),C);if(S.$$typeof===$i)return d(f,m,_,Fl(m,S),C);Gl(m,S)}return null}function v(f,m,_,S){for(var C=null,b=null,R=m,x=m=0,A=null;R!==null&&x<_.length;x++){R.index>x?(A=R,R=null):A=R.sibling;var D=u(f,R,_[x],S);if(D===null){R===null&&(R=A);break}e&&R&&D.alternate===null&&t(f,R),m=s(D,m,x),b===null?C=D:b.sibling=D,b=D,R=A}if(x===_.length)return n(f,R),re&&Ki(f,x),C;if(R===null){for(;x<_.length;x++)R=p(f,_[x],S),R!==null&&(m=s(R,m,x),b===null?C=R:b.sibling=R,b=R);return re&&Ki(f,x),C}for(R=i(R);x<_.length;x++)A=d(R,f,x,_[x],S),A!==null&&(e&&A.alternate!==null&&R.delete(A.key===null?x:A.key),m=s(A,m,x),b===null?C=A:b.sibling=A,b=A);return e&&R.forEach(function(U){return t(f,U)}),re&&Ki(f,x),C}function E(f,m,_,S){if(_==null)throw Error($(151));for(var C=null,b=null,R=m,x=m=0,A=null,D=_.next();R!==null&&!D.done;x++,D=_.next()){R.index>x?(A=R,R=null):A=R.sibling;var U=u(f,R,D.value,S);if(U===null){R===null&&(R=A);break}e&&R&&U.alternate===null&&t(f,R),m=s(U,m,x),b===null?C=U:b.sibling=U,b=U,R=A}if(D.done)return n(f,R),re&&Ki(f,x),C;if(R===null){for(;!D.done;x++,D=_.next())D=p(f,D.value,S),D!==null&&(m=s(D,m,x),b===null?C=D:b.sibling=D,b=D);return re&&Ki(f,x),C}for(R=i(R);!D.done;x++,D=_.next())D=d(R,f,x,D.value,S),D!==null&&(e&&D.alternate!==null&&R.delete(D.key===null?x:D.key),m=s(D,m,x),b===null?C=D:b.sibling=D,b=D);return e&&R.forEach(function(F){return t(f,F)}),re&&Ki(f,x),C}function g(f,m,_,S){if(typeof _=="object"&&_!==null&&_.type===fr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Nl:t:{for(var C=_.key;m!==null;){if(m.key===C){if(C=_.type,C===fr){if(m.tag===7){n(f,m.sibling),S=a(m,_.props.children),S.return=f,f=S;break t}}else if(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ra&&hs(C)===m.type){n(f,m.sibling),S=a(m,_.props),po(S,_),S.return=f,f=S;break t}n(f,m);break}else t(f,m);m=m.sibling}_.type===fr?(S=Ss(_.props.children,f.mode,S,_.key),S.return=f,f=S):(S=Tc(_.type,_.key,_.props,null,f.mode,S),po(S,_),S.return=f,f=S)}return r(f);case wo:t:{for(C=_.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(f,m.sibling),S=a(m,_.children||[]),S.return=f,f=S;break t}else{n(f,m);break}else t(f,m);m=m.sibling}S=pf(_,f.mode,S),S.return=f,f=S}return r(f);case Ra:return _=hs(_),g(f,m,_,S)}if(Do(_))return v(f,m,_,S);if(uo(_)){if(C=uo(_),typeof C!="function")throw Error($(150));return _=C.call(_),E(f,m,_,S)}if(typeof _.then=="function")return g(f,m,Hl(_),S);if(_.$$typeof===$i)return g(f,m,Fl(f,_),S);Gl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,m!==null&&m.tag===6?(n(f,m.sibling),S=a(m,_),S.return=f,f=S):(n(f,m),S=df(_,f.mode,S),S.return=f,f=S),r(f)):n(f,m)}return function(f,m,_,S){try{al=0;var C=g(f,m,_,S);return wr=null,C}catch(R){if(R===$r||R===Fu)throw R;var b=Wn(29,R,null,f.mode);return b.lanes=S,b.return=f,b}finally{}}}var As=Mv(!0),Ev=Mv(!1),Ca=!1;function Lp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,le&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=Zc(e),pv(e,null,n),t}return zu(e,i,t,n),Zc(e)}function Go(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,G_(e,n)}}function gf(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Vh=!1;function Vo(){if(Vh){var e=Cr;if(e!==null)throw e}}function Xo(e,t,n,i){Vh=!1;var a=e.updateQueue;Ca=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,h=c=l=null,o=s;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(ie&u)===u:(i&u)===u){u!==0&&u===Ir&&(Vh=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,E=o;u=t;var g=n;switch(E.tag){case 1:if(v=E.payload,typeof v=="function"){p=v.call(g,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,u=typeof v=="function"?v.call(g,p,u):v,u==null)break t;p=Ne({},p,u);break t;case 2:Ca=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=a.callbacks,d===null?a.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;d=o,o=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(!0);h===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=h,s===null&&(a.shared.lanes=0),$a|=r,e.lanes=r,e.memoizedState=p}}function bv(e,t){if(typeof e!="function")throw Error($(191,e));e.call(t)}function Tv(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)bv(n[e],t)}var zr=zi(null),$c=zi(0);function h0(e,t){e=da,Ce($c,e),Ce(zr,t),da=e|t.baseLanes}function Xh(){Ce($c,da),Ce(zr,zr.current)}function Np(){da=$c.current,rn(zr),rn($c)}var $n=zi(null),fi=null;function Da(e){var t=e.alternate;Ce(Xe,Xe.current&1),Ce($n,e),fi===null&&(t===null||zr.current!==null||t.memoizedState!==null)&&(fi=e)}function kh(e){Ce(Xe,Xe.current),Ce($n,e),fi===null&&(fi=e)}function Av(e){e.tag===22?(Ce(Xe,Xe.current),Ce($n,e),fi===null&&(fi=e)):Ua()}function Ua(){Ce(Xe,Xe.current),Ce($n,$n.current)}function Xn(e){rn($n),fi===e&&(fi=null),rn(Xe)}var Xe=zi(0);function tu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||cd(n)||ud(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ua=0,Xt=null,ye=null,Ye=null,eu=!1,Dr=!1,Rs=!1,nu=0,sl=0,Ur=null,WM=0;function ze(){throw Error($(321))}function Op(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jn(e[n],t[n]))return!1;return!0}function Pp(e,t,n,i,a,s){return ua=s,Xt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ot.H=e===null||e.memoizedState===null?ix:Yp,Rs=!1,s=n(i,a),Rs=!1,Dr&&(s=Cv(t,n,i,a)),Rv(e),s}function Rv(e){Ot.H=rl;var t=ye!==null&&ye.next!==null;if(ua=0,Ye=ye=Xt=null,eu=!1,sl=0,Ur=null,t)throw Error($(300));e===null||Ze||(e=e.dependencies,e!==null&&Qc(e)&&(Ze=!0))}function Cv(e,t,n,i){Xt=e;var a=0;do{if(Dr&&(Ur=null),sl=0,Dr=!1,25<=a)throw Error($(301));if(a+=1,Ye=ye=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Ot.H=ax,s=t(n,i)}while(Dr);return s}function YM(){var e=Ot.H,t=e.useState()[0];return t=typeof t.then=="function"?bl(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(Xt.flags|=1024),t}function Bp(){var e=nu!==0;return nu=0,e}function Ip(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zp(e){if(eu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}eu=!1}ua=0,Ye=ye=Xt=null,Dr=!1,sl=nu=0,Ur=null}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Xt.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function ke(){if(ye===null){var e=Xt.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Ye===null?Xt.memoizedState:Ye.next;if(t!==null)Ye=t,ye=e;else{if(e===null)throw Xt.alternate===null?Error($(467)):Error($(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Ye===null?Xt.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bl(e){var t=sl;return sl+=1,Ur===null&&(Ur=[]),e=yv(Ur,e,t),t=Xt,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,Ot.H=t===null||t.memoizedState===null?ix:Yp),e}function Gu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bl(e);if(e.$$typeof===$i)return fn(e)}throw Error($(438,String(e)))}function Fp(e){var t=null,n=Xt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Xt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Hu(),Xt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Uy;return t.index++,n}function fa(e,t){return typeof t=="function"?t(e):t}function Rc(e){var t=ke();return Hp(t,ye,e)}function Hp(e,t,n){var i=e.queue;if(i===null)throw Error($(311));i.lastRenderedReducer=n;var a=e.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}t.baseQueue=a=s,i.pending=null}if(s=e.baseState,a===null)e.memoizedState=s;else{t=a.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(ie&p)===p:(ua&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Ir&&(h=!0);else if((ua&u)===u){c=c.next,u===Ir&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Xt.lanes|=u,$a|=u;p=c.action,Rs&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Xt.lanes|=p,$a|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=s:l.next=o,!Jn(s,e.memoizedState)&&(Ze=!0,h&&(n=Cr,n!==null)))throw n;e.memoizedState=s,e.baseState=r,e.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function _f(e){var t=ke(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=e(s,r.action),r=r.next;while(r!==a);Jn(s,t.memoizedState)||(Ze=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function wv(e,t,n){var i=Xt,a=ke(),s=re;if(s){if(n===void 0)throw Error($(407));n=n()}else n=t();var r=!Jn((ye||a).memoizedState,n);if(r&&(a.memoizedState=n,Ze=!0),a=a.queue,Gp(Lv.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||Ye!==null&&Ye.memoizedState.tag&1){if(i.flags|=2048,Fr(9,{destroy:void 0},Uv.bind(null,i,a,n,t),null),Te===null)throw Error($(349));s||ua&127||Dv(i,t,n)}return n}function Dv(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xt.updateQueue,t===null?(t=Hu(),Xt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uv(e,t,n,i){t.value=n,t.getSnapshot=i,Nv(t)&&Ov(e)}function Lv(e,t,n){return n(function(){Nv(t)&&Ov(e)})}function Nv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jn(e,n)}catch{return!0}}function Ov(e){var t=Os(e,2);t!==null&&Ln(t,e,2)}function Wh(e){var t=bn();if(typeof e=="function"){var n=e;if(e=n(),Rs){Oa(!0);try{n()}finally{Oa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:e},t}function Pv(e,t,n,i){return e.baseState=n,Hp(e,ye,typeof i=="function"?i:fa)}function qM(e,t,n,i,a){if(Xu(e))throw Error($(485));if(e=t.action,e!==null){var s={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Ot.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,Bv(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Bv(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var s=Ot.T,r={};Ot.T=r;try{var o=n(a,i),l=Ot.S;l!==null&&l(r,o),d0(e,t,o)}catch(c){Yh(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Ot.T=s}}else try{s=n(a,i),d0(e,t,s)}catch(c){Yh(e,t,c)}}function d0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){p0(e,t,i)},function(i){return Yh(e,t,i)}):p0(e,t,n)}function p0(e,t,n){t.status="fulfilled",t.value=n,Iv(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Bv(e,n)))}function Yh(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Iv(t),t=t.next;while(t!==i)}e.action=null}function Iv(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zv(e,t){return t}function m0(e,t){if(re){var n=Te.formState;if(n!==null){t:{var i=Xt;if(re){if(Ue){e:{for(var a=Ue,s=ci;a.nodeType!==8;){if(!s){a=null;break e}if(a=hi(a.nextSibling),a===null){a=null;break e}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Ue=hi(a.nextSibling),i=a.data==="F!";break t}}Qa(i)}i=!1}i&&(t=n[0])}}return n=bn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zv,lastRenderedState:t},n.queue=i,n=tx.bind(null,Xt,i),i.dispatch=n,i=Wh(!1),s=Wp.bind(null,Xt,!1,i.queue),i=bn(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=qM.bind(null,Xt,a,s,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function g0(e){var t=ke();return Fv(t,ye,e)}function Fv(e,t,n){if(t=Hp(e,t,zv)[0],e=Rc(fa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=bl(t)}catch(r){throw r===$r?Fu:r}else i=t;t=ke();var a=t.queue,s=a.dispatch;return n!==t.memoizedState&&(Xt.flags|=2048,Fr(9,{destroy:void 0},jM.bind(null,a,n),null)),[i,s,e]}function jM(e,t){e.action=t}function _0(e){var t=ke(),n=ye;if(n!==null)return Fv(t,n,e);ke(),t=t.memoizedState,n=ke();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Fr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Xt.updateQueue,t===null&&(t=Hu(),Xt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Hv(){return ke().memoizedState}function Cc(e,t,n,i){var a=bn();Xt.flags|=e,a.memoizedState=Fr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Vu(e,t,n,i){var a=ke();i=i===void 0?null:i;var s=a.memoizedState.inst;ye!==null&&i!==null&&Op(i,ye.memoizedState.deps)?a.memoizedState=Fr(t,s,n,i):(Xt.flags|=e,a.memoizedState=Fr(1|t,s,n,i))}function v0(e,t){Cc(8390656,8,e,t)}function Gp(e,t){Vu(2048,8,e,t)}function ZM(e){Xt.flags|=4;var t=Xt.updateQueue;if(t===null)t=Hu(),Xt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Gv(e){var t=ke().memoizedState;return ZM({ref:t,nextImpl:e}),function(){if(le&2)throw Error($(440));return t.impl.apply(void 0,arguments)}}function Vv(e,t){return Vu(4,2,e,t)}function Xv(e,t){return Vu(4,4,e,t)}function kv(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wv(e,t,n){n=n!=null?n.concat([e]):null,Vu(4,4,kv.bind(null,t,e),n)}function Vp(){}function Yv(e,t){var n=ke();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Op(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function qv(e,t){var n=ke();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Op(t,i[1]))return i[0];if(i=e(),Rs){Oa(!0);try{e()}finally{Oa(!1)}}return n.memoizedState=[i,t],i}function Xp(e,t,n){return n===void 0||ua&1073741824&&!(ie&261930)?e.memoizedState=t:(e.memoizedState=n,e=Px(),Xt.lanes|=e,$a|=e,n)}function jv(e,t,n,i){return Jn(n,t)?n:zr.current!==null?(e=Xp(e,n,i),Jn(e,t)||(Ze=!0),e):!(ua&42)||ua&1073741824&&!(ie&261930)?(Ze=!0,e.memoizedState=n):(e=Px(),Xt.lanes|=e,$a|=e,t)}function Zv(e,t,n,i,a){var s=ce.p;ce.p=s!==0&&8>s?s:8;var r=Ot.T,o={};Ot.T=o,Wp(e,!1,t,n);try{var l=a(),c=Ot.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=kM(l,i);ko(e,t,h,Qn(e))}else ko(e,t,i,Qn(e))}catch(p){ko(e,t,{then:function(){},status:"rejected",reason:p},Qn())}finally{ce.p=s,r!==null&&o.types!==null&&(r.types=o.types),Ot.T=r}}function KM(){}function qh(e,t,n,i){if(e.tag!==5)throw Error($(476));var a=Kv(e).queue;Zv(e,a,t,xs,n===null?KM:function(){return Qv(e),n(i)})}function Kv(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:xs,baseState:xs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:xs},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qv(e){var t=Kv(e);t.next===null&&(t=e.alternate.memoizedState),ko(e,t.next.queue,{},Qn())}function kp(){return fn(cl)}function Jv(){return ke().memoizedState}function $v(){return ke().memoizedState}function QM(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Qn();e=Va(n);var i=Xa(t,e,n);i!==null&&(Ln(i,t,n),Go(i,t,n)),t={cache:wp()},e.payload=t;return}t=t.return}}function JM(e,t,n){var i=Qn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Xu(e)?ex(t,n):(n=Tp(e,t,n,i),n!==null&&(Ln(n,e,i),nx(n,t,i)))}function tx(e,t,n){var i=Qn();ko(e,t,n,i)}function ko(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xu(e))ex(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Jn(o,r))return zu(e,t,a,0),Te===null&&Iu(),!1}catch{}finally{}if(n=Tp(e,t,a,i),n!==null)return Ln(n,e,i),nx(n,t,i),!0}return!1}function Wp(e,t,n,i){if(i={lane:2,revertLane:tm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Xu(e)){if(t)throw Error($(479))}else t=Tp(e,n,i,2),t!==null&&Ln(t,e,2)}function Xu(e){var t=e.alternate;return e===Xt||t!==null&&t===Xt}function ex(e,t){Dr=eu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nx(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,G_(e,n)}}var rl={readContext:fn,use:Gu,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze};rl.useEffectEvent=ze;var ix={readContext:fn,use:Gu,useCallback:function(e,t){return bn().memoizedState=[e,t===void 0?null:t],e},useContext:fn,useEffect:v0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Cc(4194308,4,kv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cc(4194308,4,e,t)},useInsertionEffect:function(e,t){Cc(4,2,e,t)},useMemo:function(e,t){var n=bn();t=t===void 0?null:t;var i=e();if(Rs){Oa(!0);try{e()}finally{Oa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=bn();if(n!==void 0){var a=n(t);if(Rs){Oa(!0);try{n(t)}finally{Oa(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=JM.bind(null,Xt,e),[i.memoizedState,e]},useRef:function(e){var t=bn();return e={current:e},t.memoizedState=e},useState:function(e){e=Wh(e);var t=e.queue,n=tx.bind(null,Xt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Vp,useDeferredValue:function(e,t){var n=bn();return Xp(n,e,t)},useTransition:function(){var e=Wh(!1);return e=Zv.bind(null,Xt,e.queue,!0,!1),bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Xt,a=bn();if(re){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Te===null)throw Error($(349));ie&127||Dv(i,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,v0(Lv.bind(null,i,s,e),[e]),i.flags|=2048,Fr(9,{destroy:void 0},Uv.bind(null,i,s,n,t),null),n},useId:function(){var e=bn(),t=Te.identifierPrefix;if(re){var n=Di,i=wi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=nu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=WM++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:kp,useFormState:m0,useActionState:m0,useOptimistic:function(e){var t=bn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Wp.bind(null,Xt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fp,useCacheRefresh:function(){return bn().memoizedState=QM.bind(null,Xt)},useEffectEvent:function(e){var t=bn(),n={impl:e};return t.memoizedState=n,function(){if(le&2)throw Error($(440));return n.impl.apply(void 0,arguments)}}},Yp={readContext:fn,use:Gu,useCallback:Yv,useContext:fn,useEffect:Gp,useImperativeHandle:Wv,useInsertionEffect:Vv,useLayoutEffect:Xv,useMemo:qv,useReducer:Rc,useRef:Hv,useState:function(){return Rc(fa)},useDebugValue:Vp,useDeferredValue:function(e,t){var n=ke();return jv(n,ye.memoizedState,e,t)},useTransition:function(){var e=Rc(fa)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:bl(e),t]},useSyncExternalStore:wv,useId:Jv,useHostTransitionStatus:kp,useFormState:g0,useActionState:g0,useOptimistic:function(e,t){var n=ke();return Pv(n,ye,e,t)},useMemoCache:Fp,useCacheRefresh:$v};Yp.useEffectEvent=Gv;var ax={readContext:fn,use:Gu,useCallback:Yv,useContext:fn,useEffect:Gp,useImperativeHandle:Wv,useInsertionEffect:Vv,useLayoutEffect:Xv,useMemo:qv,useReducer:_f,useRef:Hv,useState:function(){return _f(fa)},useDebugValue:Vp,useDeferredValue:function(e,t){var n=ke();return ye===null?Xp(n,e,t):jv(n,ye.memoizedState,e,t)},useTransition:function(){var e=_f(fa)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:bl(e),t]},useSyncExternalStore:wv,useId:Jv,useHostTransitionStatus:kp,useFormState:_0,useActionState:_0,useOptimistic:function(e,t){var n=ke();return ye!==null?Pv(n,ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Fp,useCacheRefresh:$v};ax.useEffectEvent=Gv;function vf(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jh={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Qn(),a=Va(i);a.payload=t,n!=null&&(a.callback=n),t=Xa(e,a,i),t!==null&&(Ln(t,e,i),Go(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Qn(),a=Va(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Xa(e,a,i),t!==null&&(Ln(t,e,i),Go(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qn(),i=Va(n);i.tag=2,t!=null&&(i.callback=t),t=Xa(e,i,n),t!==null&&(Ln(t,e,n),Go(t,e,n))}};function x0(e,t,n,i,a,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,r):t.prototype&&t.prototype.isPureReactComponent?!el(n,i)||!el(a,s):!0}function S0(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&jh.enqueueReplaceState(t,t.state,null)}function Cs(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ne({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function sx(e){jc(e)}function rx(e){console.error(e)}function ox(e){jc(e)}function iu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function y0(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Zh(e,t,n){return n=Va(n),n.tag=3,n.payload={element:null},n.callback=function(){iu(e,t)},n}function lx(e){return e=Va(e),e.tag=3,e}function cx(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;e.payload=function(){return a(s)},e.callback=function(){y0(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){y0(t,n,i),typeof a!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function $M(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Jr(t,n,a,!0),n=$n.current,n!==null){switch(n.tag){case 31:case 13:return fi===null?lu():n.alternate===null&&Fe===0&&(Fe=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Jc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),wf(e,i,a)),!1;case 22:return n.flags|=65536,i===Jc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),wf(e,i,a)),!1}throw Error($(435,n.tag))}return wf(e,i,a),lu(),!1}if(re)return t=$n.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Bh&&(e=Error($(422),{cause:i}),il(li(e,n)))):(i!==Bh&&(t=Error($(423),{cause:i}),il(li(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=li(i,n),a=Zh(e.stateNode,i,a),gf(e,a),Fe!==4&&(Fe=2)),!1;var s=Error($(520),{cause:i});if(s=li(s,n),qo===null?qo=[s]:qo.push(s),Fe!==4&&(Fe=2),t===null)return!0;i=li(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zh(n.stateNode,i,e),gf(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ka===null||!ka.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=lx(a),cx(a,e,n,i),gf(n,a),!1}n=n.return}while(n!==null);return!1}var qp=Error($(461)),Ze=!1;function ln(e,t,n,i){t.child=e===null?Ev(t,null,n,i):As(t,e.child,n,i)}function M0(e,t,n,i,a){n=n.render;var s=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ts(t),i=Pp(e,t,n,r,s,a),o=Bp(),e!==null&&!Ze?(Ip(e,t,a),ha(e,t,a)):(re&&o&&Rp(t),t.flags|=1,ln(e,t,i,a),t.child)}function E0(e,t,n,i,a){if(e===null){var s=n.type;return typeof s=="function"&&!Ap(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,ux(e,t,s,i,a)):(e=Tc(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!jp(e,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:el,n(r,i)&&e.ref===t.ref)return ha(e,t,a)}return t.flags|=1,e=ia(s,i),e.ref=t.ref,e.return=t,t.child=e}function ux(e,t,n,i,a){if(e!==null){var s=e.memoizedProps;if(el(s,i)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=i=s,jp(e,a))e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,ha(e,t,a)}return Kh(e,t,n,i,a)}function fx(e,t,n,i){var a=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,t.child=null;return b0(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ac(t,s!==null?s.cachePool:null),s!==null?h0(t,s):Xh(),Av(t);else return i=t.lanes=536870912,b0(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Ac(t,s.cachePool),h0(t,s),Ua(),t.memoizedState=null):(e!==null&&Ac(t,null),Xh(),Ua());return ln(e,t,a,n),t.child}function Lo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function b0(e,t,n,i,a){var s=Dp();return s=s===null?null:{parent:je._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Ac(t,null),Xh(),Av(t),e!==null&&Jr(e,t,i,!0),t.childLanes=a,null}function wc(e,t){return t=au({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function T0(e,t,n){return As(t,e.child,null,n),e=wc(t,t.pendingProps),e.flags|=2,Xn(t),t.memoizedState=null,e}function tE(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(re){if(i.mode==="hidden")return e=wc(t,i),t.lanes=536870912,Lo(null,e);if(kh(t),(e=Ue)?(e=iS(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ka!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},n=gv(e),n.return=t,t.child=n,un=t,Ue=null)):e=null,e===null)throw Qa(t);return t.lanes=536870912,null}return wc(t,i)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(kh(t),a)if(t.flags&256)t.flags&=-257,t=T0(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error($(558));else if(Ze||Jr(e,t,n,!1),a=(n&e.childLanes)!==0,Ze||a){if(i=Te,i!==null&&(r=V_(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,Os(e,r),Ln(i,e,r),qp;lu(),t=T0(e,t,n)}else e=s.treeContext,Ue=hi(r.nextSibling),un=t,re=!0,Ga=null,ci=!1,e!==null&&vv(t,e),t=wc(t,i),t.flags|=4096;return t}return e=ia(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Dc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error($(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Kh(e,t,n,i,a){return Ts(t),n=Pp(e,t,n,i,void 0,a),i=Bp(),e!==null&&!Ze?(Ip(e,t,a),ha(e,t,a)):(re&&i&&Rp(t),t.flags|=1,ln(e,t,n,a),t.child)}function A0(e,t,n,i,a,s){return Ts(t),t.updateQueue=null,n=Cv(t,i,n,a),Rv(e),i=Bp(),e!==null&&!Ze?(Ip(e,t,s),ha(e,t,s)):(re&&i&&Rp(t),t.flags|=1,ln(e,t,n,s),t.child)}function R0(e,t,n,i,a){if(Ts(t),t.stateNode===null){var s=xr,r=n.contextType;typeof r=="object"&&r!==null&&(s=fn(r)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=jh,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},Lp(t),r=n.contextType,s.context=typeof r=="object"&&r!==null?fn(r):xr,s.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(vf(t,n,r,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&jh.enqueueReplaceState(s,s.state,null),Xo(t,i,s,a),Vo(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,l=Cs(n,o);s.props=l;var c=s.context,h=n.contextType;r=xr,typeof h=="object"&&h!==null&&(r=fn(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&S0(t,s,i,r),Ca=!1;var u=t.memoizedState;s.state=u,Xo(t,i,s,a),Vo(),c=t.memoizedState,o||u!==c||Ca?(typeof p=="function"&&(vf(t,n,p,i),c=t.memoizedState),(l=Ca||x0(t,n,l,i,u,c,r))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Gh(e,t),r=t.memoizedProps,h=Cs(n,r),s.props=h,p=t.pendingProps,u=s.context,c=n.contextType,l=xr,typeof c=="object"&&c!==null&&(l=fn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==l)&&S0(t,s,i,l),Ca=!1,u=t.memoizedState,s.state=u,Xo(t,i,s,a),Vo();var d=t.memoizedState;r!==p||u!==d||Ca||e!==null&&e.dependencies!==null&&Qc(e.dependencies)?(typeof o=="function"&&(vf(t,n,o,i),d=t.memoizedState),(h=Ca||x0(t,n,h,i,u,d,l)||e!==null&&e.dependencies!==null&&Qc(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,d,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,d,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),s.props=i,s.state=d,s.context=l,i=h):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,Dc(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=As(t,e.child,null,a),t.child=As(t,null,n,a)):ln(e,t,n,a),t.memoizedState=s.state,e=t.child):e=ha(e,t,a),e}function C0(e,t,n,i){return bs(),t.flags|=256,ln(e,t,n,i),t.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(e){return{baseLanes:e,cachePool:Sv()}}function yf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=qn),e}function hx(e,t,n){var i=t.pendingProps,a=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(re){if(a?Da(t):Ua(),(e=Ue)?(e=iS(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ka!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},n=gv(e),n.return=t,t.child=n,un=t,Ue=null)):e=null,e===null)throw Qa(t);return ud(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(Ua(),a=t.mode,o=au({mode:"hidden",children:o},a),i=Ss(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Sf(n),i.childLanes=yf(e,r,n),t.memoizedState=xf,Lo(null,i)):(Da(t),Qh(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)t.flags&256?(Da(t),t.flags&=-257,t=Mf(e,t,n)):t.memoizedState!==null?(Ua(),t.child=e.child,t.flags|=128,t=null):(Ua(),o=i.fallback,a=t.mode,i=au({mode:"visible",children:i.children},a),o=Ss(o,a,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,As(t,e.child,null,n),i=t.child,i.memoizedState=Sf(n),i.childLanes=yf(e,r,n),t.memoizedState=xf,t=Lo(null,i));else if(Da(t),ud(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error($(419)),i.stack="",i.digest=r,il({value:i,source:null,stack:null}),t=Mf(e,t,n)}else if(Ze||Jr(e,t,n,!1),r=(n&e.childLanes)!==0,Ze||r){if(r=Te,r!==null&&(i=V_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Os(e,i),Ln(r,e,i),qp;cd(o)||lu(),t=Mf(e,t,n)}else cd(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ue=hi(o.nextSibling),un=t,re=!0,Ga=null,ci=!1,e!==null&&vv(t,e),t=Qh(t,i.children),t.flags|=4096);return t}return a?(Ua(),o=i.fallback,a=t.mode,l=e.child,c=l.sibling,i=ia(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ia(c,o):(o=Ss(o,a,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Lo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Sf(n):(a=o.cachePool,a!==null?(l=je._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=Sv(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=yf(e,r,n),t.memoizedState=xf,Lo(e.child,i)):(Da(t),n=e.child,e=n.sibling,n=ia(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Qh(e,t){return t=au({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function au(e,t){return e=Wn(22,e,null,t),e.lanes=0,e}function Mf(e,t,n){return As(t,e.child,null,n),e=Qh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function w0(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),zh(e.return,t,n)}function Ef(e,t,n,i,a,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function dx(e,t,n){var i=t.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Xe.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ce(Xe,r),ln(e,t,i,n),i=re?nl:0,!o&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&w0(e,n,t);else if(e.tag===19)w0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&tu(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ef(t,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&tu(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ef(t,!0,n,null,s,i);break;case"together":Ef(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ha(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$a|=t.lanes,!(n&t.childLanes))if(e!==null){if(Jr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=ia(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ia(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Qc(e)))}function eE(e,t,n){switch(t.tag){case 3:kc(t,t.stateNode.containerInfo),wa(t,je,e.memoizedState.cache),bs();break;case 27:case 5:Th(t);break;case 4:kc(t,t.stateNode.containerInfo);break;case 10:wa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,kh(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Da(t),t.flags|=128,null):n&t.child.childLanes?hx(e,t,n):(Da(t),e=ha(e,t,n),e!==null?e.sibling:null);Da(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Jr(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return dx(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ce(Xe,Xe.current),i)break;return null;case 22:return t.lanes=0,fx(e,t,n,t.pendingProps);case 24:wa(t,je,e.memoizedState.cache)}return ha(e,t,n)}function px(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!jp(e,n)&&!(t.flags&128))return Ze=!1,eE(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,re&&t.flags&1048576&&_v(t,nl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=hs(t.elementType),t.type=e,typeof e=="function")Ap(e)?(i=Cs(e,i),t.tag=1,t=R0(null,t,e,i,n)):(t.tag=0,t=Kh(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===hp){t.tag=11,t=M0(null,t,e,i,n);break t}else if(a===dp){t.tag=14,t=E0(null,t,e,i,n);break t}}throw t=Eh(e)||e,Error($(306,t,""))}}return t;case 0:return Kh(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=Cs(i,t.pendingProps),R0(e,t,i,a,n);case 3:t:{if(kc(t,t.stateNode.containerInfo),e===null)throw Error($(387));i=t.pendingProps;var s=t.memoizedState;a=s.element,Gh(e,t),Xo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,wa(t,je,i),i!==s.cache&&Fh(t,[je],n,!0),Vo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=C0(e,t,i,n);break t}else if(i!==a){a=li(Error($(424)),t),il(a),t=C0(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=hi(e.firstChild),un=t,re=!0,Ga=null,ci=!0,n=Ev(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(bs(),i===a){t=ha(e,t,n);break t}ln(e,t,i,n)}t=t.child}return t;case 26:return Dc(e,t),e===null?(n=Z0(t.type,null,t.pendingProps,null))?t.memoizedState=n:re||(n=t.type,e=t.pendingProps,i=hu(Ha.current).createElement(n),i[cn]=t,i[On]=e,dn(i,n,e),an(i),t.stateNode=i):t.memoizedState=Z0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Th(t),e===null&&re&&(i=t.stateNode=aS(t.type,t.pendingProps,Ha.current),un=t,ci=!0,a=Ue,is(t.type)?(fd=a,Ue=hi(i.firstChild)):Ue=a),ln(e,t,t.pendingProps.children,n),Dc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&re&&((a=i=Ue)&&(i=UE(i,t.type,t.pendingProps,ci),i!==null?(t.stateNode=i,un=t,Ue=hi(i.firstChild),ci=!1,a=!0):a=!1),a||Qa(t)),Th(t),a=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,i=s.children,od(a,s)?i=null:r!==null&&od(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=Pp(e,t,YM,null,null,n),cl._currentValue=a),Dc(e,t),ln(e,t,i,n),t.child;case 6:return e===null&&re&&((e=n=Ue)&&(n=LE(n,t.pendingProps,ci),n!==null?(t.stateNode=n,un=t,Ue=null,e=!0):e=!1),e||Qa(t)),null;case 13:return hx(e,t,n);case 4:return kc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=As(t,null,i,n):ln(e,t,i,n),t.child;case 11:return M0(e,t,t.type,t.pendingProps,n);case 7:return ln(e,t,t.pendingProps,n),t.child;case 8:return ln(e,t,t.pendingProps.children,n),t.child;case 12:return ln(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,wa(t,t.type,i.value),ln(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Ts(t),a=fn(a),i=i(a),t.flags|=1,ln(e,t,i,n),t.child;case 14:return E0(e,t,t.type,t.pendingProps,n);case 15:return ux(e,t,t.type,t.pendingProps,n);case 19:return dx(e,t,n);case 31:return tE(e,t,n);case 22:return fx(e,t,n,t.pendingProps);case 24:return Ts(t),i=fn(je),e===null?(a=Dp(),a===null&&(a=Te,s=wp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),t.memoizedState={parent:i,cache:a},Lp(t),wa(t,je,a)):(e.lanes&n&&(Gh(e,t),Xo(t,null,null,n),Vo()),a=e.memoizedState,s=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),wa(t,je,i)):(i=s.cache,wa(t,je,i),i!==a.cache&&Fh(t,[je],n,!0))),ln(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error($(156,t.tag))}function Gi(e){e.flags|=4}function bf(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(zx())e.flags|=8192;else throw Ms=Jc,Up}else e.flags&=-16777217}function D0(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!oS(t))if(zx())e.flags|=8192;else throw Ms=Jc,Up}function Vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?F_():536870912,e.lanes|=t,Hr|=t)}function mo(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function nE(e,t,n){var i=t.pendingProps;switch(Cp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),aa(je),Or(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gs(t)?Gi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mf())),De(t),null;case 26:var a=t.type,s=t.memoizedState;return e===null?(Gi(t),s!==null?(De(t),D0(t,s)):(De(t),bf(t,a,null,i,n))):s?s!==e.memoizedState?(Gi(t),De(t),D0(t,s)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Gi(t),De(t),bf(t,a,e,i,n)),null;case 27:if(Wc(t),n=Ha.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Gi(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return De(t),null}e=Oi.current,Gs(t)?s0(t):(e=aS(a,i,n),t.stateNode=e,Gi(t))}return De(t),null;case 5:if(Wc(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Gi(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return De(t),null}if(s=Oi.current,Gs(t))s0(t);else{var r=hu(Ha.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[cn]=t,s[On]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(dn(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Gi(t)}}return De(t),bf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Gi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error($(166));if(e=Ha.current,Gs(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=un,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[cn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||tS(e.nodeValue,n)),e||Qa(t,!0)}else e=hu(e).createTextNode(i),e[cn]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Gs(t),n!==null){if(e===null){if(!i)throw Error($(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(557));e[cn]=t}else bs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=mf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Xn(t),t):(Xn(t),null);if(t.flags&128)throw Error($(558))}return De(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error($(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error($(317));a[cn]=t}else bs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),a=!1}else a=mf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Xn(t),t):(Xn(t),null)}return Xn(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Vl(t,t.updateQueue),De(t),null);case 4:return Or(),e===null&&em(t.stateNode.containerInfo),De(t),null;case 10:return aa(t.type),De(t),null;case 19:if(rn(Xe),i=t.memoizedState,i===null)return De(t),null;if(a=(t.flags&128)!==0,s=i.rendering,s===null)if(a)mo(i,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=tu(e),s!==null){for(t.flags|=128,mo(i,!1),e=s.updateQueue,t.updateQueue=e,Vl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mv(n,e),n=n.sibling;return Ce(Xe,Xe.current&1|2),re&&Ki(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&jn()>ru&&(t.flags|=128,a=!0,mo(i,!1),t.lanes=4194304)}else{if(!a)if(e=tu(s),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Vl(t,e),mo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!re)return De(t),null}else 2*jn()-i.renderingStartTime>ru&&n!==536870912&&(t.flags|=128,a=!0,mo(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=jn(),e.sibling=null,n=Xe.current,Ce(Xe,a?n&1|2:n&1),re&&Ki(t,i.treeForkCount),e):(De(t),null);case 22:case 23:return Xn(t),Np(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&Vl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&rn(ys),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),aa(je),De(t),null;case 25:return null;case 30:return null}throw Error($(156,t.tag))}function iE(e,t){switch(Cp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return aa(je),Or(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Wc(t),null;case 31:if(t.memoizedState!==null){if(Xn(t),t.alternate===null)throw Error($(340));bs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));bs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return rn(Xe),null;case 4:return Or(),null;case 10:return aa(t.type),null;case 22:case 23:return Xn(t),Np(),e!==null&&rn(ys),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return aa(je),null;case 25:return null;default:return null}}function mx(e,t){switch(Cp(t),t.tag){case 3:aa(je),Or();break;case 26:case 27:case 5:Wc(t);break;case 4:Or();break;case 31:t.memoizedState!==null&&Xn(t);break;case 13:Xn(t);break;case 19:rn(Xe);break;case 10:aa(t.type);break;case 22:case 23:Xn(t),Np(),e!==null&&rn(ys);break;case 24:aa(je)}}function Tl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){ge(t,t.return,o)}}function Ja(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(h){ge(a,l,h)}}}i=i.next}while(i!==s)}}catch(h){ge(t,t.return,h)}}function gx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Tv(t,n)}catch(i){ge(e,e.return,i)}}}function _x(e,t,n){n.props=Cs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ge(e,t,i)}}function Wo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ge(e,t,a)}}function Ui(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ge(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ge(e,t,a)}else n.current=null}function vx(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ge(e,e.return,a)}}function Tf(e,t,n){try{var i=e.stateNode;TE(i,e.type,n,t),i[On]=t}catch(a){ge(e,e.return,a)}}function xx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&is(e.type)||e.tag===4}function Af(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||xx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&is(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jh(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ta));else if(i!==4&&(i===27&&is(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Jh(e,t,n),e=e.sibling;e!==null;)Jh(e,t,n),e=e.sibling}function su(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&is(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(su(e,t,n),e=e.sibling;e!==null;)su(e,t,n),e=e.sibling}function Sx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);dn(t,i,n),t[cn]=e,t[On]=n}catch(s){ge(e,e.return,s)}}var Qi=!1,qe=!1,Rf=!1,U0=typeof WeakSet=="function"?WeakSet:Set,nn=null;function aE(e,t){if(e=e.containerInfo,sd=gu,e=ov(e),Ep(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,p=e,u=null;e:for(;;){for(var d;p!==n||a!==0&&p.nodeType!==3||(o=r+a),p!==s||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===e)break e;if(u===n&&++c===a&&(o=r),u===s&&++h===i&&(l=r),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:e,selectionRange:n},gu=!1,nn=t;nn!==null;)if(t=nn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,nn=e;else for(;nn!==null;){switch(t=nn,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var v=Cs(n.type,a);e=i.getSnapshotBeforeUpdate(v,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(E){ge(n,n.return,E)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ld(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ld(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error($(163))}if(e=t.sibling,e!==null){e.return=t.return,nn=e;break}nn=t.return}}function yx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Xi(e,n),i&4&&Tl(5,n);break;case 1:if(Xi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ge(n,n.return,r)}else{var a=Cs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ge(n,n.return,r)}}i&64&&gx(n),i&512&&Wo(n,n.return);break;case 3:if(Xi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Tv(e,t)}catch(r){ge(n,n.return,r)}}break;case 27:t===null&&i&4&&Sx(n);case 26:case 5:Xi(e,n),t===null&&i&4&&vx(n),i&512&&Wo(n,n.return);break;case 12:Xi(e,n);break;case 31:Xi(e,n),i&4&&bx(e,n);break;case 13:Xi(e,n),i&4&&Tx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=dE.bind(null,n),NE(e,n))));break;case 22:if(i=n.memoizedState!==null||Qi,!i){t=t!==null&&t.memoizedState!==null||qe,a=Qi;var s=qe;Qi=i,(qe=t)&&!s?Zi(e,n,(n.subtreeFlags&8772)!==0):Xi(e,n),Qi=a,qe=s}break;case 30:break;default:Xi(e,n)}}function Mx(e){var t=e.alternate;t!==null&&(e.alternate=null,Mx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_p(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,Dn=!1;function Vi(e,t,n){for(n=n.child;n!==null;)Ex(e,t,n),n=n.sibling}function Ex(e,t,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 26:qe||Ui(n,t),Vi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||Ui(n,t);var i=Oe,a=Dn;is(n.type)&&(Oe=n.stateNode,Dn=!1),Vi(e,t,n),Zo(n.stateNode),Oe=i,Dn=a;break;case 5:qe||Ui(n,t);case 6:if(i=Oe,a=Dn,Oe=null,Vi(e,t,n),Oe=i,Dn=a,Oe!==null)if(Dn)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(n.stateNode)}catch(s){ge(n,t,s)}else try{Oe.removeChild(n.stateNode)}catch(s){ge(n,t,s)}break;case 18:Oe!==null&&(Dn?(e=Oe,k0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),kr(e)):k0(Oe,n.stateNode));break;case 4:i=Oe,a=Dn,Oe=n.stateNode.containerInfo,Dn=!0,Vi(e,t,n),Oe=i,Dn=a;break;case 0:case 11:case 14:case 15:Ja(2,n,t),qe||Ja(4,n,t),Vi(e,t,n);break;case 1:qe||(Ui(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&_x(n,t,i)),Vi(e,t,n);break;case 21:Vi(e,t,n);break;case 22:qe=(i=qe)||n.memoizedState!==null,Vi(e,t,n),qe=i;break;default:Vi(e,t,n)}}function bx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{kr(e)}catch(n){ge(t,t.return,n)}}}function Tx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kr(e)}catch(n){ge(t,t.return,n)}}function sE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new U0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new U0),t;default:throw Error($(435,e.tag))}}function Xl(e,t){var n=sE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=pE.bind(null,e,i);i.then(a,a)}})}function Cn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(is(o.type)){Oe=o.stateNode,Dn=!1;break t}break;case 5:Oe=o.stateNode,Dn=!1;break t;case 3:case 4:Oe=o.stateNode.containerInfo,Dn=!0;break t}o=o.return}if(Oe===null)throw Error($(160));Ex(s,r,a),Oe=null,Dn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ax(t,e),t=t.sibling}var xi=null;function Ax(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Cn(t,e),wn(e),i&4&&(Ja(3,e,e.return),Tl(3,e),Ja(5,e,e.return));break;case 1:Cn(t,e),wn(e),i&512&&(qe||n===null||Ui(n,n.return)),i&64&&Qi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=xi;if(Cn(t,e),wn(e),i&512&&(qe||n===null||Ui(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[yl]||s[cn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),dn(s,i,n),s[cn]=e,an(s),i=s;break t;case"link":var r=Q0("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}s=a.createElement(i),dn(s,i,n),a.head.appendChild(s);break;case"meta":if(r=Q0("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}s=a.createElement(i),dn(s,i,n),a.head.appendChild(s);break;default:throw Error($(468,i))}s[cn]=e,an(s),i=s}e.stateNode=i}else J0(a,e.type,e.stateNode);else e.stateNode=K0(a,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?J0(a,e.type,e.stateNode):K0(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Tf(e,e.memoizedProps,n.memoizedProps)}break;case 27:Cn(t,e),wn(e),i&512&&(qe||n===null||Ui(n,n.return)),n!==null&&i&4&&Tf(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Cn(t,e),wn(e),i&512&&(qe||n===null||Ui(n,n.return)),e.flags&32){a=e.stateNode;try{Br(a,"")}catch(v){ge(e,e.return,v)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Tf(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Rf=!0);break;case 6:if(Cn(t,e),wn(e),i&4){if(e.stateNode===null)throw Error($(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(v){ge(e,e.return,v)}}break;case 3:if(Nc=null,a=xi,xi=du(t.containerInfo),Cn(t,e),xi=a,wn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{kr(t.containerInfo)}catch(v){ge(e,e.return,v)}Rf&&(Rf=!1,Rx(e));break;case 4:i=xi,xi=du(e.stateNode.containerInfo),Cn(t,e),wn(e),xi=i;break;case 12:Cn(t,e),wn(e);break;case 31:Cn(t,e),wn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xl(e,i)));break;case 13:Cn(t,e),wn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ku=jn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xl(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Qi,h=qe;if(Qi=c||a,qe=h||l,Cn(t,e),qe=h,Qi=c,wn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Qi||qe||ds(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(v){ge(l,l.return,v)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(v){ge(l,l.return,v)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;a?W0(d,!0):W0(l.stateNode,!1)}catch(v){ge(l,l.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Xl(e,n))));break;case 19:Cn(t,e),wn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xl(e,i)));break;case 30:break;case 21:break;default:Cn(t,e),wn(e)}}function wn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(xx(i)){n=i;break}i=i.return}if(n==null)throw Error($(160));switch(n.tag){case 27:var a=n.stateNode,s=Af(e);su(e,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(Br(r,""),n.flags&=-33);var o=Af(e);su(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Af(e);Jh(e,c,l);break;default:throw Error($(161))}}catch(h){ge(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Rx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yx(e,t.alternate,t),t=t.sibling}function ds(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ja(4,t,t.return),ds(t);break;case 1:Ui(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&_x(t,t.return,n),ds(t);break;case 27:Zo(t.stateNode);case 26:case 5:Ui(t,t.return),ds(t);break;case 22:t.memoizedState===null&&ds(t);break;case 30:ds(t);break;default:ds(t)}e=e.sibling}}function Zi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Zi(a,s,n),Tl(4,s);break;case 1:if(Zi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ge(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)bv(l[a],o)}catch(c){ge(i,i.return,c)}}n&&r&64&&gx(s),Wo(s,s.return);break;case 27:Sx(s);case 26:case 5:Zi(a,s,n),n&&i===null&&r&4&&vx(s),Wo(s,s.return);break;case 12:Zi(a,s,n);break;case 31:Zi(a,s,n),n&&r&4&&bx(a,s);break;case 13:Zi(a,s,n),n&&r&4&&Tx(a,s);break;case 22:s.memoizedState===null&&Zi(a,s,n),Wo(s,s.return);break;case 30:break;default:Zi(a,s,n)}t=t.sibling}}function Zp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&El(n))}function Kp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&El(e))}function mi(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cx(e,t,n,i),t=t.sibling}function Cx(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:mi(e,t,n,i),a&2048&&Tl(9,t);break;case 1:mi(e,t,n,i);break;case 3:mi(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&El(e)));break;case 12:if(a&2048){mi(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ge(t,t.return,l)}}else mi(e,t,n,i);break;case 31:mi(e,t,n,i);break;case 13:mi(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?mi(e,t,n,i):Yo(e,t):s._visibility&2?mi(e,t,n,i):(s._visibility|=2,cr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Zp(r,t);break;case 24:mi(e,t,n,i),a&2048&&Kp(t.alternate,t);break;default:mi(e,t,n,i)}}function cr(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:cr(s,r,o,l,a),Tl(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?cr(s,r,o,l,a):Yo(s,r):(h._visibility|=2,cr(s,r,o,l,a)),a&&c&2048&&Zp(r.alternate,r);break;case 24:cr(s,r,o,l,a),a&&c&2048&&Kp(r.alternate,r);break;default:cr(s,r,o,l,a)}t=t.sibling}}function Yo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Yo(n,i),a&2048&&Zp(i.alternate,i);break;case 24:Yo(n,i),a&2048&&Kp(i.alternate,i);break;default:Yo(n,i)}t=t.sibling}}var No=8192;function Vs(e,t,n){if(e.subtreeFlags&No)for(e=e.child;e!==null;)wx(e,t,n),e=e.sibling}function wx(e,t,n){switch(e.tag){case 26:Vs(e,t,n),e.flags&No&&e.memoizedState!==null&&WE(n,xi,e.memoizedState,e.memoizedProps);break;case 5:Vs(e,t,n);break;case 3:case 4:var i=xi;xi=du(e.stateNode.containerInfo),Vs(e,t,n),xi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=No,No=16777216,Vs(e,t,n),No=i):Vs(e,t,n));break;default:Vs(e,t,n)}}function Dx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function go(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nn=i,Lx(i,e)}Dx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ux(e),e=e.sibling}function Ux(e){switch(e.tag){case 0:case 11:case 15:go(e),e.flags&2048&&Ja(9,e,e.return);break;case 3:go(e);break;case 12:go(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Uc(e)):go(e);break;default:go(e)}}function Uc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];nn=i,Lx(i,e)}Dx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ja(8,t,t.return),Uc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Uc(t));break;default:Uc(t)}e=e.sibling}}function Lx(e,t){for(;nn!==null;){var n=nn;switch(n.tag){case 0:case 11:case 15:Ja(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:El(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,nn=i;else t:for(n=e;nn!==null;){i=nn;var a=i.sibling,s=i.return;if(Mx(i),i===n){nn=null;break t}if(a!==null){a.return=s,nn=a;break t}nn=s}}}var rE={getCacheForType:function(e){var t=fn(je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return fn(je).controller.signal}},oE=typeof WeakMap=="function"?WeakMap:Map,le=0,Te=null,ee=null,ie=0,pe=0,Vn=null,Ba=!1,to=!1,Qp=!1,da=0,Fe=0,$a=0,Es=0,Jp=0,qn=0,Hr=0,qo=null,Un=null,$h=!1,ku=0,Nx=0,ru=1/0,ou=null,ka=null,Ke=0,Wa=null,Gr=null,sa=0,td=0,ed=null,Ox=null,jo=0,nd=null;function Qn(){return le&2&&ie!==0?ie&-ie:Ot.T!==null?tm():X_()}function Px(){if(qn===0)if(!(ie&536870912)||re){var e=Pl;Pl<<=1,!(Pl&3932160)&&(Pl=262144),qn=e}else qn=536870912;return e=$n.current,e!==null&&(e.flags|=32),qn}function Ln(e,t,n){(e===Te&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(Vr(e,0),Ia(e,ie,qn,!1)),Sl(e,n),(!(le&2)||e!==Te)&&(e===Te&&(!(le&2)&&(Es|=n),Fe===4&&Ia(e,ie,qn,!1)),Fi(e))}function Bx(e,t,n){if(le&6)throw Error($(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||xl(e,t),a=i?uE(e,t):Cf(e,t,!0),s=i;do{if(a===0){to&&!i&&Ia(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!lE(n)){a=Cf(e,t,!1),s=!1;continue}if(a===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;a=qo;var l=o.current.memoizedState.isDehydrated;if(l&&(Vr(o,r).flags|=256),r=Cf(o,r,!1),r!==2){if(Qp&&!l){o.errorRecoveryDisabledLanes|=s,Es|=s,a=4;break t}s=Un,Un=a,s!==null&&(Un===null?Un=s:Un.push.apply(Un,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Vr(e,0),Ia(e,t,0,!0);break}t:{switch(i=e,s=a,s){case 0:case 1:throw Error($(345));case 4:if((t&4194048)!==t)break;case 6:Ia(i,t,qn,!Ba);break t;case 2:Un=null;break;case 3:case 5:break;default:throw Error($(329))}if((t&62914560)===t&&(a=ku+300-jn(),10<a)){if(Ia(i,t,qn,!Ba),Nu(i,0,!0)!==0)break t;sa=t,i.timeoutHandle=nS(L0.bind(null,i,n,Un,ou,$h,t,qn,Es,Hr,Ba,s,"Throttled",-0,0),a);break t}L0(i,n,Un,ou,$h,t,qn,Es,Hr,Ba,s,null,-0,0)}}break}while(!0);Fi(e)}function L0(e,t,n,i,a,s,r,o,l,c,h,p,u,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},wx(t,s,p);var v=(s&62914560)===s?ku-jn():(s&4194048)===s?Nx-jn():0;if(v=YE(p,v),v!==null){sa=s,e.cancelPendingCommit=v(O0.bind(null,e,t,s,n,i,a,r,o,l,h,p,null,u,d)),Ia(e,s,r,!c);return}}O0(e,t,s,n,i,a,r,o,l)}function lE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Jn(s(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ia(e,t,n,i){t&=~Jp,t&=~Es,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var s=31-Kn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&H_(e,n,t)}function Wu(){return le&6?!0:(Al(0),!1)}function $p(){if(ee!==null){if(pe===0)var e=ee.return;else e=ee,ea=Ps=null,zp(e),wr=null,al=0,e=ee;for(;e!==null;)mx(e.alternate,e),e=e.return;ee=null}}function Vr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,CE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),sa=0,$p(),Te=e,ee=n=ia(e.current,null),ie=t,pe=0,Vn=null,Ba=!1,to=xl(e,t),Qp=!1,Hr=qn=Jp=Es=$a=Fe=0,Un=qo=null,$h=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Kn(i),s=1<<a;t|=e[a],i&=~s}return da=t,Iu(),n}function Ix(e,t){Xt=null,Ot.H=rl,t===$r||t===Fu?(t=u0(),pe=3):t===Up?(t=u0(),pe=4):pe=t===qp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Vn=t,ee===null&&(Fe=1,iu(e,li(t,e.current)))}function zx(){var e=$n.current;return e===null?!0:(ie&4194048)===ie?fi===null:(ie&62914560)===ie||ie&536870912?e===fi:!1}function Fx(){var e=Ot.H;return Ot.H=rl,e===null?rl:e}function Hx(){var e=Ot.A;return Ot.A=rE,e}function lu(){Fe=4,Ba||(ie&4194048)!==ie&&$n.current!==null||(to=!0),!($a&134217727)&&!(Es&134217727)||Te===null||Ia(Te,ie,qn,!1)}function Cf(e,t,n){var i=le;le|=2;var a=Fx(),s=Hx();(Te!==e||ie!==t)&&(ou=null,Vr(e,t)),t=!1;var r=Fe;t:do try{if(pe!==0&&ee!==null){var o=ee,l=Vn;switch(pe){case 8:$p(),r=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(t=!0);var c=pe;if(pe=0,Vn=null,Mr(e,o,l,c),n&&to){r=0;break t}break;default:c=pe,pe=0,Vn=null,Mr(e,o,l,c)}}cE(),r=Fe;break}catch(h){Ix(e,h)}while(!0);return t&&e.shellSuspendCounter++,ea=Ps=null,le=i,Ot.H=a,Ot.A=s,ee===null&&(Te=null,ie=0,Iu()),r}function cE(){for(;ee!==null;)Gx(ee)}function uE(e,t){var n=le;le|=2;var i=Fx(),a=Hx();Te!==e||ie!==t?(ou=null,ru=jn()+500,Vr(e,t)):to=xl(e,t);t:do try{if(pe!==0&&ee!==null){t=ee;var s=Vn;e:switch(pe){case 1:pe=0,Vn=null,Mr(e,t,s,1);break;case 2:case 9:if(c0(s)){pe=0,Vn=null,N0(t);break}t=function(){pe!==2&&pe!==9||Te!==e||(pe=7),Fi(e)},s.then(t,t);break t;case 3:pe=7;break t;case 4:pe=5;break t;case 7:c0(s)?(pe=0,Vn=null,N0(t)):(pe=0,Vn=null,Mr(e,t,s,7));break;case 5:var r=null;switch(ee.tag){case 26:r=ee.memoizedState;case 5:case 27:var o=ee;if(r?oS(r):o.stateNode.complete){pe=0,Vn=null;var l=o.sibling;if(l!==null)ee=l;else{var c=o.return;c!==null?(ee=c,Yu(c)):ee=null}break e}}pe=0,Vn=null,Mr(e,t,s,5);break;case 6:pe=0,Vn=null,Mr(e,t,s,6);break;case 8:$p(),Fe=6;break t;default:throw Error($(462))}}fE();break}catch(h){Ix(e,h)}while(!0);return ea=Ps=null,Ot.H=i,Ot.A=a,le=n,ee!==null?0:(Te=null,ie=0,Iu(),Fe)}function fE(){for(;ee!==null&&!Oy();)Gx(ee)}function Gx(e){var t=px(e.alternate,e,da);e.memoizedProps=e.pendingProps,t===null?Yu(e):ee=t}function N0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=A0(n,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=A0(n,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:zp(t);default:mx(n,t),t=ee=mv(t,da),t=px(n,t,da)}e.memoizedProps=e.pendingProps,t===null?Yu(e):ee=t}function Mr(e,t,n,i){ea=Ps=null,zp(t),wr=null,al=0;var a=t.return;try{if($M(e,a,t,n,ie)){Fe=1,iu(e,li(n,e.current)),ee=null;return}}catch(s){if(a!==null)throw ee=a,s;Fe=1,iu(e,li(n,e.current)),ee=null;return}t.flags&32768?(re||i===1?e=!0:to||ie&536870912?e=!1:(Ba=e=!0,(i===2||i===9||i===3||i===6)&&(i=$n.current,i!==null&&i.tag===13&&(i.flags|=16384))),Vx(t,e)):Yu(t)}function Yu(e){var t=e;do{if(t.flags&32768){Vx(t,Ba);return}e=t.return;var n=nE(t.alternate,t,da);if(n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);Fe===0&&(Fe=5)}function Vx(e,t){do{var n=iE(e.alternate,e);if(n!==null){n.flags&=32767,ee=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ee=e;return}ee=e=n}while(e!==null);Fe=6,ee=null}function O0(e,t,n,i,a,s,r,o,l){e.cancelPendingCommit=null;do qu();while(Ke!==0);if(le&6)throw Error($(327));if(t!==null){if(t===e.current)throw Error($(177));if(s=t.lanes|t.childLanes,s|=bp,ky(e,n,s,r,o,l),e===Te&&(ee=Te=null,ie=0),Gr=t,Wa=e,sa=n,td=s,ed=a,Ox=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,mE(Yc,function(){return qx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Ot.T,Ot.T=null,a=ce.p,ce.p=2,r=le,le|=4;try{aE(e,t,n)}finally{le=r,ce.p=a,Ot.T=i}}Ke=1,Xx(),kx(),Wx()}}function Xx(){if(Ke===1){Ke=0;var e=Wa,t=Gr,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Ot.T,Ot.T=null;var i=ce.p;ce.p=2;var a=le;le|=4;try{Ax(t,e);var s=rd,r=ov(e.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&rv(o.ownerDocument.documentElement,o)){if(l!==null&&Ep(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,E=Math.min(l.start,v),g=l.end===void 0?E:Math.min(l.end,v);!d.extend&&E>g&&(r=g,g=E,E=r);var f=n0(o,E),m=n0(o,g);if(f&&m&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var _=p.createRange();_.setStart(f.node,f.offset),d.removeAllRanges(),E>g?(d.addRange(_),d.extend(m.node,m.offset)):(_.setEnd(m.node,m.offset),d.addRange(_))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var S=p[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}gu=!!sd,rd=sd=null}finally{le=a,ce.p=i,Ot.T=n}}e.current=t,Ke=2}}function kx(){if(Ke===2){Ke=0;var e=Wa,t=Gr,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Ot.T,Ot.T=null;var i=ce.p;ce.p=2;var a=le;le|=4;try{yx(e,t.alternate,t)}finally{le=a,ce.p=i,Ot.T=n}}Ke=3}}function Wx(){if(Ke===4||Ke===3){Ke=0,Py();var e=Wa,t=Gr,n=sa,i=Ox;t.subtreeFlags&10256||t.flags&10256?Ke=5:(Ke=0,Gr=Wa=null,Yx(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(ka=null),gp(n),t=t.stateNode,Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(vl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ot.T,a=ce.p,ce.p=2,Ot.T=null;try{for(var s=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Ot.T=t,ce.p=a}}sa&3&&qu(),Fi(e),a=e.pendingLanes,n&261930&&a&42?e===nd?jo++:(jo=0,nd=e):jo=0,Al(0)}}function Yx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,El(t)))}function qu(){return Xx(),kx(),Wx(),qx()}function qx(){if(Ke!==5)return!1;var e=Wa,t=td;td=0;var n=gp(sa),i=Ot.T,a=ce.p;try{ce.p=32>n?32:n,Ot.T=null,n=ed,ed=null;var s=Wa,r=sa;if(Ke=0,Gr=Wa=null,sa=0,le&6)throw Error($(331));var o=le;if(le|=4,Ux(s.current),Cx(s,s.current,r,n),le=o,Al(0,!1),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(vl,s)}catch{}return!0}finally{ce.p=a,Ot.T=i,Yx(e,t)}}function P0(e,t,n){t=li(n,t),t=Zh(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(Sl(e,2),Fi(e))}function ge(e,t,n){if(e.tag===3)P0(e,e,n);else for(;t!==null;){if(t.tag===3){P0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ka===null||!ka.has(i))){e=li(n,e),n=lx(2),i=Xa(t,n,2),i!==null&&(cx(n,i,t,e),Sl(i,2),Fi(i));break}}t=t.return}}function wf(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new oE;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Qp=!0,a.add(n),e=hE.bind(null,e,t,n),t.then(e,e))}function hE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Te===e&&(ie&n)===n&&(Fe===4||Fe===3&&(ie&62914560)===ie&&300>jn()-ku?!(le&2)&&Vr(e,0):Jp|=n,Hr===ie&&(Hr=0)),Fi(e)}function jx(e,t){t===0&&(t=F_()),e=Os(e,t),e!==null&&(Sl(e,t),Fi(e))}function dE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jx(e,n)}function pE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error($(314))}i!==null&&i.delete(t),jx(e,n)}function mE(e,t){return pp(e,t)}var cu=null,ur=null,id=!1,uu=!1,Df=!1,za=0;function Fi(e){e!==ur&&e.next===null&&(ur===null?cu=ur=e:ur=ur.next=e),uu=!0,id||(id=!0,_E())}function Al(e,t){if(!Df&&uu){Df=!0;do for(var n=!1,i=cu;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Kn(42|e)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,B0(i,s))}else s=ie,s=Nu(i,i===Te?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||xl(i,s)||(n=!0,B0(i,s));i=i.next}while(n);Df=!1}}function gE(){Zx()}function Zx(){uu=id=!1;var e=0;za!==0&&RE()&&(e=za);for(var t=jn(),n=null,i=cu;i!==null;){var a=i.next,s=Kx(i,t);s===0?(i.next=null,n===null?cu=a:n.next=a,a===null&&(ur=n)):(n=i,(e!==0||s&3)&&(uu=!0)),i=a}Ke!==0&&Ke!==5||Al(e),za!==0&&(za=0)}function Kx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-Kn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=Xy(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}if(t=Te,n=ie,n=Nu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&af(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||xl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&af(i),gp(n)){case 2:case 8:n=I_;break;case 32:n=Yc;break;case 268435456:n=z_;break;default:n=Yc}return i=Qx.bind(null,e),n=pp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&af(i),e.callbackPriority=2,e.callbackNode=null,2}function Qx(e,t){if(Ke!==0&&Ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(qu()&&e.callbackNode!==n)return null;var i=ie;return i=Nu(e,e===Te?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Bx(e,i,t),Kx(e,jn()),e.callbackNode!=null&&e.callbackNode===n?Qx.bind(null,e):null)}function B0(e,t){if(qu())return null;Bx(e,t,!0)}function _E(){wE(function(){le&6?pp(B_,gE):Zx()})}function tm(){if(za===0){var e=Ir;e===0&&(e=Ol,Ol<<=1,!(Ol&261888)&&(Ol=256)),za=e}return za}function I0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Mc(""+e)}function z0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function vE(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var s=I0((a[On]||null).action),r=i.submitter;r&&(t=(t=r[On]||null)?I0(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new Ou("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(za!==0){var l=r?z0(a,r):new FormData(a);qh(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?z0(a,r):new FormData(a),qh(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var Uf=0;Uf<Ph.length;Uf++){var Lf=Ph[Uf],xE=Lf.toLowerCase(),SE=Lf[0].toUpperCase()+Lf.slice(1);Ei(xE,"on"+SE)}Ei(cv,"onAnimationEnd");Ei(uv,"onAnimationIteration");Ei(fv,"onAnimationStart");Ei("dblclick","onDoubleClick");Ei("focusin","onFocus");Ei("focusout","onBlur");Ei(BM,"onTransitionRun");Ei(IM,"onTransitionStart");Ei(zM,"onTransitionCancel");Ei(hv,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);Us("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Us("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Us("onBeforeInput",["compositionend","keypress","textInput","paste"]);Us("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Us("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function Jx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){jc(h)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break t;s=o,a.currentTarget=c;try{s(a)}catch(h){jc(h)}a.currentTarget=null,s=l}}}}function te(e,t){var n=t[Rh];n===void 0&&(n=t[Rh]=new Set);var i=e+"__bubble";n.has(i)||($x(t,e,2,!1),n.add(i))}function Nf(e,t,n){var i=0;t&&(i|=4),$x(n,e,i,t)}var kl="_reactListening"+Math.random().toString(36).slice(2);function em(e){if(!e[kl]){e[kl]=!0,k_.forEach(function(n){n!=="selectionchange"&&(yE.has(n)||Nf(n,!1,e),Nf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kl]||(t[kl]=!0,Nf("selectionchange",!1,t))}}function $x(e,t,n,i){switch(hS(t)){case 2:var a=ZE;break;case 8:a=KE;break;default:a=sm}n=a.bind(null,t,n,e),a=void 0,!Lh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Of(e,t,n,i,a){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=dr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue t}o=o.parentNode}}i=i.return}J_(function(){var c=s,h=xp(n),p=[];t:{var u=dv.get(e);if(u!==void 0){var d=Ou,v=e;switch(e){case"keypress":if(bc(n)===0)break t;case"keydown":case"keyup":d=pM;break;case"focusin":v="focus",d=cf;break;case"focusout":v="blur",d=cf;break;case"beforeblur":case"afterblur":d=cf;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=nM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=_M;break;case cv:case uv:case fv:d=sM;break;case hv:d=xM;break;case"scroll":case"scrollend":d=tM;break;case"wheel":d=yM;break;case"copy":case"cut":case"paste":d=oM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=jm;break;case"toggle":case"beforetoggle":d=EM}var E=(t&4)!==0,g=!E&&(e==="scroll"||e==="scrollend"),f=E?u!==null?u+"Capture":null:u;E=[];for(var m=c,_;m!==null;){var S=m;if(_=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||_===null||f===null||(S=$o(m,f),S!=null&&E.push(ll(m,S,_))),g)break;m=m.return}0<E.length&&(u=new d(u,v,null,n,h),p.push({event:u,listeners:E}))}}if(!(t&7)){t:{if(u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",u&&n!==Uh&&(v=n.relatedTarget||n.fromElement)&&(dr(v)||v[Kr]))break t;if((d||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,d?(v=n.relatedTarget||n.toElement,d=c,v=v?dr(v):null,v!==null&&(g=_l(v),E=v.tag,v!==g||E!==5&&E!==27&&E!==6)&&(v=null)):(d=null,v=c),d!==v)){if(E=Ym,S="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(E=jm,S="onPointerLeave",f="onPointerEnter",m="pointer"),g=d==null?u:Uo(d),_=v==null?u:Uo(v),u=new E(S,m+"leave",d,n,h),u.target=g,u.relatedTarget=_,S=null,dr(h)===c&&(E=new E(f,m+"enter",v,n,h),E.target=_,E.relatedTarget=g,S=E),g=S,d&&v)e:{for(E=ME,f=d,m=v,_=0,S=f;S;S=E(S))_++;S=0;for(var C=m;C;C=E(C))S++;for(;0<_-S;)f=E(f),_--;for(;0<S-_;)m=E(m),S--;for(;_--;){if(f===m||m!==null&&f===m.alternate){E=f;break e}f=E(f),m=E(m)}E=null}else E=null;d!==null&&F0(p,u,d,E,!1),v!==null&&g!==null&&F0(p,g,v,E,!0)}}t:{if(u=c?Uo(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var b=Jm;else if(Qm(u))if(av)b=NM;else{b=UM;var R=DM}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&vp(c.elementType)&&(b=Jm):b=LM;if(b&&(b=b(e,c))){iv(p,b,n,h);break t}R&&R(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&Dh(u,"number",u.value)}switch(R=c?Uo(c):window,e){case"focusin":(Qm(R)||R.contentEditable==="true")&&(gr=R,Nh=c,Fo=null);break;case"focusout":Fo=Nh=gr=null;break;case"mousedown":Oh=!0;break;case"contextmenu":case"mouseup":case"dragend":Oh=!1,i0(p,n,h);break;case"selectionchange":if(PM)break;case"keydown":case"keyup":i0(p,n,h)}var x;if(Mp)t:{switch(e){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else mr?ev(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(tv&&n.locale!=="ko"&&(mr||A!=="onCompositionStart"?A==="onCompositionEnd"&&mr&&(x=$_()):(Pa=h,Sp="value"in Pa?Pa.value:Pa.textContent,mr=!0)),R=fu(c,A),0<R.length&&(A=new qm(A,e,null,n,h),p.push({event:A,listeners:R}),x?A.data=x:(x=nv(n),x!==null&&(A.data=x)))),(x=TM?AM(e,n):RM(e,n))&&(A=fu(c,"onBeforeInput"),0<A.length&&(R=new qm("onBeforeInput","beforeinput",null,n,h),p.push({event:R,listeners:A}),R.data=x)),vE(p,e,c,n,h)}Jx(p,t)})}function ll(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fu(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=$o(e,n),a!=null&&i.unshift(ll(e,a,s)),a=$o(e,t),a!=null&&i.push(ll(e,a,s))),e.tag===3)return i;e=e.return}return[]}function ME(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function F0(e,t,n,i,a){for(var s=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=$o(n,s),c!=null&&r.unshift(ll(n,c,l))):a||(c=$o(n,s),c!=null&&r.push(ll(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var EE=/\r\n?/g,bE=/\u0000|\uFFFD/g;function H0(e){return(typeof e=="string"?e:""+e).replace(EE,`
`).replace(bE,"")}function tS(e,t){return t=H0(t),H0(e)===t}function Se(e,t,n,i,a,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Br(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Br(e,""+i);break;case"className":Il(e,"class",i);break;case"tabIndex":Il(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Il(e,n,i);break;case"style":Q_(e,i,s);break;case"data":if(t!=="object"){Il(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Mc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",a.name,a,null),Se(e,t,"formEncType",a.formEncType,a,null),Se(e,t,"formMethod",a.formMethod,a,null),Se(e,t,"formTarget",a.formTarget,a,null)):(Se(e,t,"encType",a.encType,a,null),Se(e,t,"method",a.method,a,null),Se(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Mc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=ta);break;case"onScroll":i!=null&&te("scroll",e);break;case"onScrollEnd":i!=null&&te("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error($(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Mc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":te("beforetoggle",e),te("toggle",e),yc(e,"popover",i);break;case"xlinkActuate":Hi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Hi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Hi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Hi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Hi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Hi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Hi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Hi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Hi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":yc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Jy.get(n)||n,yc(e,n,i))}}function ad(e,t,n,i,a,s){switch(n){case"style":Q_(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error($(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Br(e,i):(typeof i=="number"||typeof i=="bigint")&&Br(e,""+i);break;case"onScroll":i!=null&&te("scroll",e);break;case"onScrollEnd":i!=null&&te("scrollend",e);break;case"onClick":i!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!W_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),s=e[On]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):yc(e,n,i)}}}function dn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":te("error",e),te("load",e);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:Se(e,t,s,r,n,null)}}a&&Se(e,t,"srcSet",n.srcSet,n,null),i&&Se(e,t,"src",n.src,n,null);return;case"input":te("invalid",e);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":a=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":s=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error($(137,t));break;default:Se(e,t,i,h,n,null)}}j_(e,s,o,l,c,r,a,!1);return;case"select":te("invalid",e),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Se(e,t,a,o,n,null)}t=s,n=r,e.multiple=!!i,t!=null?Ar(e,!!i,t,!1):n!=null&&Ar(e,!!i,n,!0);return;case"textarea":te("invalid",e),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error($(91));break;default:Se(e,t,r,o,n,null)}K_(e,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Se(e,t,l,i,n,null)}return;case"dialog":te("beforetoggle",e),te("toggle",e),te("cancel",e),te("close",e);break;case"iframe":case"object":te("load",e);break;case"video":case"audio":for(i=0;i<ol.length;i++)te(ol[i],e);break;case"image":te("error",e),te("load",e);break;case"details":te("toggle",e);break;case"embed":case"source":case"link":te("error",e),te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:Se(e,t,c,i,n,null)}return;default:if(vp(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&ad(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Se(e,t,o,i,n,null))}function TE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||Se(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":s=d;break;case"name":a=d;break;case"checked":c=d;break;case"defaultChecked":h=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error($(137,t));break;default:d!==p&&Se(e,t,u,d,i,p)}}wh(e,r,o,l,c,h,s,a);return;case"select":d=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(s)||Se(e,t,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&Se(e,t,a,s,i,l)}t=o,n=r,i=d,u!=null?Ar(e,!!n,u,!1):!!i!=!!n&&(t!=null?Ar(e,!!n,t,!0):Ar(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Se(e,t,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":d=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error($(91));break;default:a!==s&&Se(e,t,r,a,i,s)}Z_(e,u,d);return;case"option":for(var v in n)if(u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:Se(e,t,v,null,i,u)}for(l in i)if(u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Se(e,t,l,u,i,d)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in n)u=n[E],n.hasOwnProperty(E)&&u!=null&&!i.hasOwnProperty(E)&&Se(e,t,E,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error($(137,t));break;default:Se(e,t,c,u,i,d)}return;default:if(vp(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&ad(e,t,g,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||ad(e,t,h,u,i,d);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&Se(e,t,f,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||Se(e,t,p,u,i,d)}function G0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function AE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&G0(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&G0(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(s+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sd=null,rd=null;function hu(e){return e.nodeType===9?e:e.ownerDocument}function V0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function eS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function od(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pf=null;function RE(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var nS=typeof setTimeout=="function"?setTimeout:void 0,CE=typeof clearTimeout=="function"?clearTimeout:void 0,X0=typeof Promise=="function"?Promise:void 0,wE=typeof queueMicrotask=="function"?queueMicrotask:typeof X0<"u"?function(e){return X0.resolve(null).then(e).catch(DE)}:nS;function DE(e){setTimeout(function(){throw e})}function is(e){return e==="head"}function k0(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),kr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Zo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Zo(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[yl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Zo(e.ownerDocument.body);n=a}while(n);kr(t)}function W0(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function ld(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ld(n),_p(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function UE(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[yl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function LE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function iS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=hi(e.nextSibling),e===null))return null;return e}function cd(e){return e.data==="$?"||e.data==="$~"}function ud(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function NE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function hi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var fd=null;function Y0(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return hi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function q0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function aS(e,t,n){switch(t=hu(n),e){case"html":if(e=t.documentElement,!e)throw Error($(452));return e;case"head":if(e=t.head,!e)throw Error($(453));return e;case"body":if(e=t.body,!e)throw Error($(454));return e;default:throw Error($(451))}}function Zo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_p(e)}var pi=new Map,j0=new Set;function du(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ga=ce.d;ce.d={f:OE,r:PE,D:BE,C:IE,L:zE,m:FE,X:GE,S:HE,M:VE};function OE(){var e=ga.f(),t=Wu();return e||t}function PE(e){var t=Qr(e);t!==null&&t.tag===5&&t.type==="form"?Qv(t):ga.r(e)}var eo=typeof document>"u"?null:document;function sS(e,t,n){var i=eo;if(i&&typeof t=="string"&&t){var a=oi(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),j0.has(a)||(j0.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),dn(t,"link",e),an(t),i.head.appendChild(t)))}}function BE(e){ga.D(e),sS("dns-prefetch",e,null)}function IE(e,t){ga.C(e,t),sS("preconnect",e,t)}function zE(e,t,n){ga.L(e,t,n);var i=eo;if(i&&e&&t){var a='link[rel="preload"][as="'+oi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+oi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+oi(n.imageSizes)+'"]')):a+='[href="'+oi(e)+'"]';var s=a;switch(t){case"style":s=Xr(e);break;case"script":s=no(e)}pi.has(s)||(e=Ne({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),pi.set(s,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Rl(s))||t==="script"&&i.querySelector(Cl(s))||(t=i.createElement("link"),dn(t,"link",e),an(t),i.head.appendChild(t)))}}function FE(e,t){ga.m(e,t);var n=eo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+oi(i)+'"][href="'+oi(e)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=no(e)}if(!pi.has(s)&&(e=Ne({rel:"modulepreload",href:e},t),pi.set(s,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Cl(s)))return}i=n.createElement("link"),dn(i,"link",e),an(i),n.head.appendChild(i)}}}function HE(e,t,n){ga.S(e,t,n);var i=eo;if(i&&e){var a=Tr(i).hoistableStyles,s=Xr(e);t=t||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Rl(s)))o.loading=5;else{e=Ne({rel:"stylesheet",href:e,"data-precedence":t},n),(n=pi.get(s))&&nm(e,n);var l=r=i.createElement("link");an(l),dn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Lc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function GE(e,t){ga.X(e,t);var n=eo;if(n&&e){var i=Tr(n).hoistableScripts,a=no(e),s=i.get(a);s||(s=n.querySelector(Cl(a)),s||(e=Ne({src:e,async:!0},t),(t=pi.get(a))&&im(e,t),s=n.createElement("script"),an(s),dn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function VE(e,t){ga.M(e,t);var n=eo;if(n&&e){var i=Tr(n).hoistableScripts,a=no(e),s=i.get(a);s||(s=n.querySelector(Cl(a)),s||(e=Ne({src:e,async:!0,type:"module"},t),(t=pi.get(a))&&im(e,t),s=n.createElement("script"),an(s),dn(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function Z0(e,t,n,i){var a=(a=Ha.current)?du(a):null;if(!a)throw Error($(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Xr(n.href),n=Tr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Xr(n.href);var s=Tr(a).hoistableStyles,r=s.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=a.querySelector(Rl(e)))&&!s._p&&(r.instance=s,r.state.loading=5),pi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},pi.set(e,n),s||XE(a,e,n,r.state))),t&&i===null)throw Error($(528,""));return r}if(t&&i!==null)throw Error($(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=no(n),n=Tr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error($(444,e))}}function Xr(e){return'href="'+oi(e)+'"'}function Rl(e){return'link[rel="stylesheet"]['+e+"]"}function rS(e){return Ne({},e,{"data-precedence":e.precedence,precedence:null})}function XE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),dn(t,"link",n),an(t),e.head.appendChild(t))}function no(e){return'[src="'+oi(e)+'"]'}function Cl(e){return"script[async]"+e}function K0(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+oi(n.href)+'"]');if(i)return t.instance=i,an(i),i;var a=Ne({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),an(i),dn(i,"style",a),Lc(i,n.precedence,e),t.instance=i;case"stylesheet":a=Xr(n.href);var s=e.querySelector(Rl(a));if(s)return t.state.loading|=4,t.instance=s,an(s),s;i=rS(n),(a=pi.get(a))&&nm(i,a),s=(e.ownerDocument||e).createElement("link"),an(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),dn(s,"link",i),t.state.loading|=4,Lc(s,n.precedence,e),t.instance=s;case"script":return s=no(n.src),(a=e.querySelector(Cl(s)))?(t.instance=a,an(a),a):(i=n,(a=pi.get(s))&&(i=Ne({},n),im(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),an(a),dn(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error($(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Lc(i,n.precedence,e));return t.instance}function Lc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function nm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function im(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Nc=null;function Q0(e,t,n){if(Nc===null){var i=new Map,a=Nc=new Map;a.set(n,i)}else a=Nc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var s=n[a];if(!(s[yl]||s[cn]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function J0(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function kE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function oS(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function WE(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Xr(i.href),s=t.querySelector(Rl(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=pu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,an(s);return}s=t.ownerDocument||t,i=rS(i),(a=pi.get(a))&&nm(i,a),s=s.createElement("link"),an(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),dn(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=pu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Bf=0;function YE(e,t){return e.stylesheets&&e.count===0&&Oc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Oc(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Bf===0&&(Bf=62500*AE());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Oc(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Bf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function pu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mu=null;function Oc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mu=new Map,t.forEach(qE,e),mu=null,pu.call(e))}function qE(e,t){if(!(t.state.loading&4)){var n=mu.get(e);if(n)var i=n.get(null);else{n=new Map,mu.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=pu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var cl={$$typeof:$i,Provider:null,Consumer:null,_currentValue:xs,_currentValue2:xs,_threadCount:0};function jE(e,t,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sf(0),this.hiddenUpdates=sf(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function lS(e,t,n,i,a,s,r,o,l,c,h,p){return e=new jE(e,t,n,r,l,c,h,p,o),t=1,s===!0&&(t|=24),s=Wn(3,null,null,t),e.current=s,s.stateNode=e,t=wp(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},Lp(s),e}function cS(e){return e?(e=xr,e):xr}function uS(e,t,n,i,a,s){a=cS(a),i.context===null?i.context=a:i.pendingContext=a,i=Va(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Xa(e,i,t),n!==null&&(Ln(n,e,t),Go(n,e,t))}function $0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function am(e,t){$0(e,t),(e=e.alternate)&&$0(e,t)}function fS(e){if(e.tag===13||e.tag===31){var t=Os(e,67108864);t!==null&&Ln(t,e,67108864),am(e,67108864)}}function tg(e){if(e.tag===13||e.tag===31){var t=Qn();t=mp(t);var n=Os(e,t);n!==null&&Ln(n,e,t),am(e,t)}}var gu=!0;function ZE(e,t,n,i){var a=Ot.T;Ot.T=null;var s=ce.p;try{ce.p=2,sm(e,t,n,i)}finally{ce.p=s,Ot.T=a}}function KE(e,t,n,i){var a=Ot.T;Ot.T=null;var s=ce.p;try{ce.p=8,sm(e,t,n,i)}finally{ce.p=s,Ot.T=a}}function sm(e,t,n,i){if(gu){var a=hd(i);if(a===null)Of(e,t,i,_u,n),eg(e,i);else if(JE(a,e,t,n,i))i.stopPropagation();else if(eg(e,i),t&4&&-1<QE.indexOf(e)){for(;a!==null;){var s=Qr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=fs(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Kn(r);o.entanglements[1]|=l,r&=~l}Fi(s),!(le&6)&&(ru=jn()+500,Al(0))}}break;case 31:case 13:o=Os(s,2),o!==null&&Ln(o,s,2),Wu(),am(s,2)}if(s=hd(i),s===null&&Of(e,t,i,_u,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Of(e,t,i,null,n)}}function hd(e){return e=xp(e),rm(e)}var _u=null;function rm(e){if(_u=null,e=dr(e),e!==null){var t=_l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=U_(t),e!==null)return e;e=null}else if(n===31){if(e=L_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _u=e,null}function hS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(By()){case B_:return 2;case I_:return 8;case Yc:case Iy:return 32;case z_:return 268435456;default:return 32}default:return 32}}var dd=!1,Ya=null,qa=null,ja=null,ul=new Map,fl=new Map,La=[],QE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eg(e,t){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":ul.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(t.pointerId)}}function _o(e,t,n,i,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Qr(t),t!==null&&fS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function JE(e,t,n,i,a){switch(t){case"focusin":return Ya=_o(Ya,e,t,n,i,a),!0;case"dragenter":return qa=_o(qa,e,t,n,i,a),!0;case"mouseover":return ja=_o(ja,e,t,n,i,a),!0;case"pointerover":var s=a.pointerId;return ul.set(s,_o(ul.get(s)||null,e,t,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,fl.set(s,_o(fl.get(s)||null,e,t,n,i,a)),!0}return!1}function dS(e){var t=dr(e.target);if(t!==null){var n=_l(t);if(n!==null){if(t=n.tag,t===13){if(t=U_(n),t!==null){e.blockedOn=t,Fm(e.priority,function(){tg(n)});return}}else if(t===31){if(t=L_(n),t!==null){e.blockedOn=t,Fm(e.priority,function(){tg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Uh=i,n.target.dispatchEvent(i),Uh=null}else return t=Qr(n),t!==null&&fS(t),e.blockedOn=n,!1;t.shift()}return!0}function ng(e,t,n){Pc(e)&&n.delete(t)}function $E(){dd=!1,Ya!==null&&Pc(Ya)&&(Ya=null),qa!==null&&Pc(qa)&&(qa=null),ja!==null&&Pc(ja)&&(ja=null),ul.forEach(ng),fl.forEach(ng)}function Wl(e,t){e.blockedOn===t&&(e.blockedOn=null,dd||(dd=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,$E)))}var Yl=null;function ig(e){Yl!==e&&(Yl=e,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,function(){Yl===e&&(Yl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(rm(i||n)===null)continue;break}var s=Qr(n);s!==null&&(e.splice(t,3),t-=3,qh(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function kr(e){function t(l){return Wl(l,e)}Ya!==null&&Wl(Ya,e),qa!==null&&Wl(qa,e),ja!==null&&Wl(ja,e),ul.forEach(t),fl.forEach(t);for(var n=0;n<La.length;n++){var i=La[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<La.length&&(n=La[0],n.blockedOn===null);)dS(n),n.blockedOn===null&&La.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[On]||null;if(typeof s=="function")r||ig(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[On]||null)o=r.formAction;else if(rm(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),ig(n)}}}function pS(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function om(e){this._internalRoot=e}ju.prototype.render=om.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));var n=t.current,i=Qn();uS(n,i,e,t,null,null)};ju.prototype.unmount=om.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;uS(e.current,2,null,e,null,null),Wu(),t[Kr]=null}};function ju(e){this._internalRoot=e}ju.prototype.unstable_scheduleHydration=function(e){if(e){var t=X_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<La.length&&t!==0&&t<La[n].priority;n++);La.splice(n,0,e),n===0&&dS(e)}};var ag=w_.version;if(ag!=="19.2.5")throw Error($(527,ag,"19.2.5"));ce.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=wy(t),e=e!==null?N_(e):null,e=e===null?null:e.stateNode,e};var tb={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:Ot,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{vl=ql.inject(tb),Zn=ql}catch{}}Uu.createRoot=function(e,t){if(!D_(e))throw Error($(299));var n=!1,i="",a=sx,s=rx,r=ox;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=lS(e,1,!1,null,null,n,i,null,a,s,r,pS),e[Kr]=t.current,em(e),new om(t)};Uu.hydrateRoot=function(e,t,n){if(!D_(e))throw Error($(299));var i=!1,a="",s=sx,r=rx,o=ox,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=lS(e,1,!0,t,n??null,i,a,l,s,r,o,pS),t.context=cS(null),n=t.current,i=Qn(),i=mp(i),a=Va(i),a.callback=null,Xa(n,a,i),n=i,t.current.lanes=n,Sl(t,n),Fi(t),e[Kr]=t.current,em(e),new ju(t)};Uu.version="19.2.5";function mS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mS)}catch(e){console.error(e)}}mS(),E_.exports=Uu;var eb=E_.exports;const nb=ay(eb);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lm="184",ib=0,sg=1,ab=2,Bc=1,sb=2,Oo=3,ts=0,Nn=1,Ji=2,ra=0,Lr=1,Er=2,rg=3,og=4,rb=5,ms=100,ob=101,lb=102,cb=103,ub=104,fb=200,hb=201,db=202,pb=203,pd=204,md=205,mb=206,gb=207,_b=208,vb=209,xb=210,Sb=211,yb=212,Mb=213,Eb=214,gd=0,_d=1,vd=2,Wr=3,xd=4,Sd=5,yd=6,Md=7,gS=0,bb=1,Tb=2,Pi=0,_S=1,vS=2,xS=3,SS=4,yS=5,MS=6,ES=7,bS=300,ws=301,Yr=302,If=303,zf=304,Zu=306,Ed=1e3,na=1001,bd=1002,hn=1003,Ab=1004,jl=1005,sn=1006,Ff=1007,_s=1008,Yn=1009,TS=1010,AS=1011,hl=1012,cm=1013,Ii=1014,Li=1015,pa=1016,um=1017,fm=1018,dl=1020,RS=35902,CS=35899,wS=1021,DS=1022,yi=1023,ma=1026,vs=1027,US=1028,hm=1029,Ds=1030,dm=1031,pm=1033,Ic=33776,zc=33777,Fc=33778,Hc=33779,Td=35840,Ad=35841,Rd=35842,Cd=35843,wd=36196,Dd=37492,Ud=37496,Ld=37488,Nd=37489,vu=37490,Od=37491,Pd=37808,Bd=37809,Id=37810,zd=37811,Fd=37812,Hd=37813,Gd=37814,Vd=37815,Xd=37816,kd=37817,Wd=37818,Yd=37819,qd=37820,jd=37821,Zd=36492,Kd=36494,Qd=36495,Jd=36283,$d=36284,xu=36285,tp=36286,Rb=3200,ep=0,Cb=1,Na="",ii="srgb",Su="srgb-linear",yu="linear",de="srgb",Xs=7680,lg=519,wb=512,Db=513,Ub=514,mm=515,Lb=516,Nb=517,gm=518,Ob=519,np=35044,cg="300 es",Ni=2e3,pl=2001;function Pb(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Mu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Bb(){const e=Mu("canvas");return e.style.display="block",e}const ug={};function Eu(...e){const t="THREE."+e.shift();console.log(t,...e)}function LS(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Nt(...e){e=LS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ae(...e){e=LS(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ip(...e){const t=e.join(" ");t in ug||(ug[t]=!0,Nt(...e))}function Ib(e,t,n){return new Promise(function(i,a){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const zb={[gd]:_d,[vd]:yd,[xd]:Md,[Wr]:Sd,[_d]:gd,[yd]:vd,[Md]:xd,[Sd]:Wr};class Bs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,t);t.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fg=1234567;const Ko=Math.PI/180,ml=180/Math.PI;function oa(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[e&255]+_n[e>>8&255]+_n[e>>16&255]+_n[e>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[n&63|128]+_n[n>>8&255]+"-"+_n[n>>16&255]+_n[n>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function ne(e,t,n){return Math.max(t,Math.min(n,e))}function _m(e,t){return(e%t+t)%t}function Fb(e,t,n,i,a){return i+(e-t)*(a-i)/(n-t)}function Hb(e,t,n){return e!==t?(n-e)/(t-e):0}function Qo(e,t,n){return(1-n)*e+n*t}function Gb(e,t,n,i){return Qo(e,t,1-Math.exp(-n*i))}function Vb(e,t=1){return t-Math.abs(_m(e,t*2)-t)}function Xb(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function kb(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Wb(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Yb(e,t){return e+Math.random()*(t-e)}function qb(e){return e*(.5-Math.random())}function jb(e){e!==void 0&&(fg=e);let t=fg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zb(e){return e*Ko}function Kb(e){return e*ml}function Qb(e){return(e&e-1)===0&&e!==0}function Jb(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function $b(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function tT(e,t,n,i,a){const s=Math.cos,r=Math.sin,o=s(n/2),l=r(n/2),c=s((t+i)/2),h=r((t+i)/2),p=s((t-i)/2),u=r((t-i)/2),d=s((i-t)/2),v=r((i-t)/2);switch(a){case"XYX":e.set(o*h,l*p,l*u,o*c);break;case"YZY":e.set(l*u,o*h,l*p,o*c);break;case"ZXZ":e.set(l*p,l*u,o*h,o*c);break;case"XZX":e.set(o*h,l*v,l*d,o*c);break;case"YXY":e.set(l*d,o*h,l*v,o*c);break;case"ZYZ":e.set(l*v,l*d,o*h,o*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Si(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function me(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const ks={DEG2RAD:Ko,RAD2DEG:ml,generateUUID:oa,clamp:ne,euclideanModulo:_m,mapLinear:Fb,inverseLerp:Hb,lerp:Qo,damp:Gb,pingpong:Vb,smoothstep:Xb,smootherstep:kb,randInt:Wb,randFloat:Yb,randFloatSpread:qb,seededRandom:jb,degToRad:Zb,radToDeg:Kb,isPowerOfTwo:Qb,ceilPowerOfTwo:Jb,floorPowerOfTwo:$b,setQuaternionFromProperEuler:tT,normalize:me,denormalize:Si},Tm=class Tm{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-t.x,r=this.y-t.y;return this.x=s*i-r*a+t.x,this.y=s*a+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tm.prototype.isVector2=!0;let Ht=Tm;class io{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],h=i[a+2],p=i[a+3],u=s[r+0],d=s[r+1],v=s[r+2],E=s[r+3];if(p!==E||l!==u||c!==d||h!==v){let g=l*u+c*d+h*v+p*E;g<0&&(u=-u,d=-d,v=-v,E=-E,g=-g);let f=1-o;if(g<.9995){const m=Math.acos(g),_=Math.sin(m);f=Math.sin(f*m)/_,o=Math.sin(o*m)/_,l=l*f+u*o,c=c*f+d*o,h=h*f+v*o,p=p*f+E*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+v*o,p=p*f+E*o;const m=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=m,c*=m,h*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],h=i[a+3],p=s[r],u=s[r+1],d=s[r+2],v=s[r+3];return t[n]=o*v+h*p+l*d-c*u,t[n+1]=l*v+h*u+c*p-o*d,t[n+2]=c*v+h*d+o*u-l*p,t[n+3]=h*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(a/2),p=o(s/2),u=l(i/2),d=l(a/2),v=l(s/2);switch(r){case"XYZ":this._x=u*h*p+c*d*v,this._y=c*d*p-u*h*v,this._z=c*h*v+u*d*p,this._w=c*h*p-u*d*v;break;case"YXZ":this._x=u*h*p+c*d*v,this._y=c*d*p-u*h*v,this._z=c*h*v-u*d*p,this._w=c*h*p+u*d*v;break;case"ZXY":this._x=u*h*p-c*d*v,this._y=c*d*p+u*h*v,this._z=c*h*v+u*d*p,this._w=c*h*p-u*d*v;break;case"ZYX":this._x=u*h*p-c*d*v,this._y=c*d*p+u*h*v,this._z=c*h*v-u*d*p,this._w=c*h*p+u*d*v;break;case"YZX":this._x=u*h*p+c*d*v,this._y=c*d*p+u*h*v,this._z=c*h*v-u*d*p,this._w=c*h*p-u*d*v;break;case"XZY":this._x=u*h*p-c*d*v,this._y=c*d*p-u*h*v,this._z=c*h*v+u*d*p,this._w=c*h*p+u*d*v;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(r-a)*d}else if(i>o&&i>p){const d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(a+r)/d,this._z=(s+c)/d}else if(o>p){const d=2*Math.sqrt(1+o-i-p);this._w=(s-c)/d,this._x=(a+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+p-i-o);this._w=(r-a)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,s=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-i*c,this._z=s*h+r*c+i*l-a*o,this._w=r*h-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,a=t._y,s=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Am=class Am{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(hg.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(hg.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=t.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*a-o*i),h=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-s*p,this.z=a+l*p+s*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this.z=ne(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this.z=ne(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,s=t.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Hf.copy(this).projectOnVector(t),this.sub(Hf)}reflect(t){return this.sub(Hf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Am.prototype.isVector3=!0;let O=Am;const Hf=new O,hg=new io,Rm=class Rm{constructor(t,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c)}set(t,n,i,a,s,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],v=i[8],E=a[0],g=a[3],f=a[6],m=a[1],_=a[4],S=a[7],C=a[2],b=a[5],R=a[8];return s[0]=r*E+o*m+l*C,s[3]=r*g+o*_+l*b,s[6]=r*f+o*S+l*R,s[1]=c*E+h*m+p*C,s[4]=c*g+h*_+p*b,s[7]=c*f+h*S+p*R,s[2]=u*E+d*m+v*C,s[5]=u*g+d*_+v*b,s[8]=u*f+d*S+v*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*s*h+i*o*l+a*s*c-a*r*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,u=o*l-h*s,d=c*s-r*l,v=n*p+i*u+a*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return t[0]=p*E,t[1]=(a*c-h*i)*E,t[2]=(o*i-a*r)*E,t[3]=u*E,t[4]=(h*n-a*l)*E,t[5]=(a*s-o*n)*E,t[6]=d*E,t[7]=(i*l-c*n)*E,t[8]=(r*n-i*s)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Gf.makeScale(t,n)),this}rotate(t){return this.premultiply(Gf.makeRotation(-t)),this}translate(t,n){return this.premultiply(Gf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Rm.prototype.isMatrix3=!0;let Ft=Rm;const Gf=new Ft,dg=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pg=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eT(){const e={enabled:!0,workingColorSpace:Su,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===de&&(a.r=la(a.r),a.g=la(a.g),a.b=la(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===de&&(a.r=Nr(a.r),a.g=Nr(a.g),a.b=Nr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Na?yu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return ip("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return ip("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,s)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Su]:{primaries:t,whitePoint:i,transfer:yu,toXYZ:dg,fromXYZ:pg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:i,transfer:de,toXYZ:dg,fromXYZ:pg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),e}const se=eT();function la(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Nr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Ws;class nT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ws===void 0&&(Ws=Mu("canvas")),Ws.width=t.width,Ws.height=t.height;const a=Ws.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Ws}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Mu("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=la(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(la(n[i]/255)*255):n[i]=la(n[i]);return{data:n,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let iT=0;class vm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=oa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Vf(a[r].image)):s.push(Vf(a[r]))}else s=Vf(a);i.url=s}return n||(t.images[this.uuid]=i),i}}function Vf(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?nT.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let aT=0;const Xf=new O;class Sn extends Bs{constructor(t=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,i=na,a=na,s=sn,r=_s,o=yi,l=Yn,c=Sn.DEFAULT_ANISOTROPY,h=Na){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=oa(),this.name="",this.source=new vm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xf).x}get height(){return this.source.getSize(Xf).y}get depth(){return this.source.getSize(Xf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Nt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Nt(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ed:t.x=t.x-Math.floor(t.x);break;case na:t.x=t.x<0?0:1;break;case bd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ed:t.y=t.y-Math.floor(t.y);break;case na:t.y=t.y<0?0:1;break;case bd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=bS;Sn.DEFAULT_ANISOTROPY=1;const Cm=class Cm{constructor(t=0,n=0,i=0,a=1){this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,s=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,s;const l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],v=l[9],E=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+E)<.1&&Math.abs(v+g)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(d+1)/2,C=(f+1)/2,b=(h+u)/4,R=(p+E)/4,x=(v+g)/4;return _>S&&_>C?_<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(_),a=b/i,s=R/i):S>C?S<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(S),i=b/a,s=x/a):C<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(C),i=R/s,a=x/s),this.set(i,a,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(p-E)*(p-E)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(p-E)/m,this.z=(u-h)/m,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ne(this.x,t.x,n.x),this.y=ne(this.y,t.y,n.y),this.z=ne(this.z,t.z,n.z),this.w=ne(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ne(this.x,t,n),this.y=ne(this.y,t,n),this.z=ne(this.z,t,n),this.w=ne(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cm.prototype.isVector4=!0;let He=Cm;class sT extends Bs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new He(0,0,t,n),this.scissorTest=!1,this.viewport=new He(0,0,t,n),this.textures=[];const a={width:t,height:n,depth:i.depth},s=new Sn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new vm(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends sT{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class NS extends Sn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=hn,this.minFilter=hn,this.wrapR=na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rT extends Sn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=hn,this.minFilter=hn,this.wrapR=na,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wu=class wu{constructor(t,n,i,a,s,r,o,l,c,h,p,u,d,v,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,s,r,o,l,c,h,p,u,d,v,E,g)}set(t,n,i,a,s,r,o,l,c,h,p,u,d,v,E,g){const f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=v,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wu().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,a=1/Ys.setFromMatrixColumn(t,0).length(),s=1/Ys.setFromMatrixColumn(t,1).length(),r=1/Ys.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,s=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const u=r*h,d=r*p,v=o*h,E=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-E*c,n[9]=-o*l,n[2]=E-u*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){const u=l*h,d=l*p,v=c*h,E=c*p;n[0]=u+E*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=d*o-v,n[6]=E+u*o,n[10]=r*l}else if(t.order==="ZXY"){const u=l*h,d=l*p,v=c*h,E=c*p;n[0]=u-E*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*h,n[9]=E-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){const u=r*h,d=r*p,v=o*h,E=o*p;n[0]=l*h,n[4]=v*c-d,n[8]=u*c+E,n[1]=l*p,n[5]=E*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){const u=r*l,d=r*c,v=o*l,E=o*c;n[0]=l*h,n[4]=E-u*p,n[8]=v*p+d,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+v,n[10]=u-E*p}else if(t.order==="XZY"){const u=r*l,d=r*c,v=o*l,E=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+E,n[5]=r*h,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*h,n[10]=E*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oT,t,lT)}lookAt(t,n,i){const a=this.elements;return Hn.subVectors(t,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),ya.crossVectors(i,Hn),ya.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),ya.crossVectors(i,Hn)),ya.normalize(),Zl.crossVectors(Hn,ya),a[0]=ya.x,a[4]=Zl.x,a[8]=Hn.x,a[1]=ya.y,a[5]=Zl.y,a[9]=Hn.y,a[2]=ya.z,a[6]=Zl.z,a[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],v=i[2],E=i[6],g=i[10],f=i[14],m=i[3],_=i[7],S=i[11],C=i[15],b=a[0],R=a[4],x=a[8],A=a[12],D=a[1],U=a[5],F=a[9],q=a[13],nt=a[2],I=a[6],N=a[10],P=a[14],W=a[3],tt=a[7],ot=a[11],Mt=a[15];return s[0]=r*b+o*D+l*nt+c*W,s[4]=r*R+o*U+l*I+c*tt,s[8]=r*x+o*F+l*N+c*ot,s[12]=r*A+o*q+l*P+c*Mt,s[1]=h*b+p*D+u*nt+d*W,s[5]=h*R+p*U+u*I+d*tt,s[9]=h*x+p*F+u*N+d*ot,s[13]=h*A+p*q+u*P+d*Mt,s[2]=v*b+E*D+g*nt+f*W,s[6]=v*R+E*U+g*I+f*tt,s[10]=v*x+E*F+g*N+f*ot,s[14]=v*A+E*q+g*P+f*Mt,s[3]=m*b+_*D+S*nt+C*W,s[7]=m*R+_*U+S*I+C*tt,s[11]=m*x+_*F+S*N+C*ot,s[15]=m*A+_*q+S*P+C*Mt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],d=t[14],v=t[3],E=t[7],g=t[11],f=t[15],m=l*d-c*u,_=o*d-c*p,S=o*u-l*p,C=r*d-c*h,b=r*u-l*h,R=r*p-o*h;return n*(E*m-g*_+f*S)-i*(v*m-g*C+f*b)+a*(v*_-E*C+f*R)-s*(v*S-E*b+g*R)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],d=t[11],v=t[12],E=t[13],g=t[14],f=t[15],m=n*o-i*r,_=n*l-a*r,S=n*c-s*r,C=i*l-a*o,b=i*c-s*o,R=a*c-s*l,x=h*E-p*v,A=h*g-u*v,D=h*f-d*v,U=p*g-u*E,F=p*f-d*E,q=u*f-d*g,nt=m*q-_*F+S*U+C*D-b*A+R*x;if(nt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/nt;return t[0]=(o*q-l*F+c*U)*I,t[1]=(a*F-i*q-s*U)*I,t[2]=(E*R-g*b+f*C)*I,t[3]=(u*b-p*R-d*C)*I,t[4]=(l*D-r*q-c*A)*I,t[5]=(n*q-a*D+s*A)*I,t[6]=(g*S-v*R-f*_)*I,t[7]=(h*R-u*S+d*_)*I,t[8]=(r*F-o*D+c*x)*I,t[9]=(i*D-n*F-s*x)*I,t[10]=(v*b-E*S+f*m)*I,t[11]=(p*S-h*b-d*m)*I,t[12]=(o*A-r*U-l*x)*I,t[13]=(n*U-i*A+a*x)*I,t[14]=(E*_-v*C-g*m)*I,t[15]=(h*C-p*_+u*m)*I,this}scale(t){const n=this.elements,i=t.x,a=t.y,s=t.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=t.x,o=t.y,l=t.z,c=s*r,h=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+i,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,s,r){return this.set(1,i,s,0,t,1,r,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,h=r+r,p=o+o,u=s*c,d=s*h,v=s*p,E=r*h,g=r*p,f=o*p,m=l*c,_=l*h,S=l*p,C=i.x,b=i.y,R=i.z;return a[0]=(1-(E+f))*C,a[1]=(d+S)*C,a[2]=(v-_)*C,a[3]=0,a[4]=(d-S)*b,a[5]=(1-(u+f))*b,a[6]=(g+m)*b,a[7]=0,a[8]=(v+_)*R,a[9]=(g-m)*R,a[10]=(1-(u+E))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Ys.set(a[0],a[1],a[2]).length();const o=Ys.set(a[4],a[5],a[6]).length(),l=Ys.set(a[8],a[9],a[10]).length();s<0&&(r=-r),gi.copy(this);const c=1/r,h=1/o,p=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=p,gi.elements[9]*=p,gi.elements[10]*=p,n.setFromRotationMatrix(gi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,a,s,r,o=Ni,l=!1){const c=this.elements,h=2*s/(n-t),p=2*s/(i-a),u=(n+t)/(n-t),d=(i+a)/(i-a);let v,E;if(l)v=s/(r-s),E=r*s/(r-s);else if(o===Ni)v=-(r+s)/(r-s),E=-2*r*s/(r-s);else if(o===pl)v=-r/(r-s),E=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,s,r,o=Ni,l=!1){const c=this.elements,h=2/(n-t),p=2/(i-a),u=-(n+t)/(n-t),d=-(i+a)/(i-a);let v,E;if(l)v=1/(r-s),E=r/(r-s);else if(o===Ni)v=-2/(r-s),E=-(r+s)/(r-s);else if(o===pl)v=-1/(r-s),E=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};wu.prototype.isMatrix4=!0;let Pe=wu;const Ys=new O,gi=new Pe,oT=new O(0,0,0),lT=new O(1,1,1),ya=new O,Zl=new O,Hn=new O,mg=new Pe,gg=new io;class es{constructor(t=0,n=0,i=0,a=es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],p=a[2],u=a[6],d=a[10];switch(n){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ne(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ne(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return mg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mg,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return gg.setFromEuler(this),this.setFromQuaternion(gg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class xm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cT=0;const _g=new O,qs=new io,ki=new Pe,Kl=new O,vo=new O,uT=new O,fT=new io,vg=new O(1,0,0),xg=new O(0,1,0),Sg=new O(0,0,1),yg={type:"added"},hT={type:"removed"},js={type:"childadded",child:null},kf={type:"childremoved",child:null};class pn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new O,n=new es,i=new io,a=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ft}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return qs.setFromAxisAngle(t,n),this.quaternion.multiply(qs),this}rotateOnWorldAxis(t,n){return qs.setFromAxisAngle(t,n),this.quaternion.premultiply(qs),this}rotateX(t){return this.rotateOnAxis(vg,t)}rotateY(t){return this.rotateOnAxis(xg,t)}rotateZ(t){return this.rotateOnAxis(Sg,t)}translateOnAxis(t,n){return _g.copy(t).applyQuaternion(this.quaternion),this.position.add(_g.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(vg,t)}translateY(t){return this.translateOnAxis(xg,t)}translateZ(t){return this.translateOnAxis(Sg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Kl.copy(t):Kl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(vo,Kl,this.up):ki.lookAt(Kl,vo,this.up),this.quaternion.setFromRotationMatrix(ki),a&&(ki.extractRotation(a.matrixWorld),qs.setFromRotationMatrix(ki),this.quaternion.premultiply(qs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yg),js.child=t,this.dispatchEvent(js),js.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(hT),kf.child=t,this.dispatchEvent(kf),kf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yg),js.child=t,this.dispatchEvent(js),js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,t,uT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,fT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,a=t.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));a.material=o}else a.material=s(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(t.animations,l))}}if(n){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=a,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}pn.DEFAULT_UP=new O(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class br extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dT={type:"move"};class Wf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const E of t.hand.values()){const g=n.getJointPose(E,i),f=this._getHandJoint(c,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dT)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new br;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const OS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ma={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function Yf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Yt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=se.workingColorSpace){return this.r=t,this.g=n,this.b=i,se.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=se.workingColorSpace){if(t=_m(t,1),n=ne(n,0,1),i=ne(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=Yf(r,s,t+1/3),this.g=Yf(r,s,t),this.b=Yf(r,s,t-1/3)}return se.colorSpaceToWorking(this,a),this}setStyle(t,n=ii){function i(s){s!==void 0&&parseFloat(s)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Nt("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ii){const i=OS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return se.workingToColorSpace(vn.copy(this),t),Math.round(ne(vn.r*255,0,255))*65536+Math.round(ne(vn.g*255,0,255))*256+Math.round(ne(vn.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=se.workingColorSpace){se.workingToColorSpace(vn.copy(this),n);const i=vn.r,a=vn.g,s=vn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=se.workingColorSpace){return se.workingToColorSpace(vn.copy(this),n),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=ii){se.workingToColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,a=vn.b;return t!==ii?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Ma),this.setHSL(Ma.h+t,Ma.s+n,Ma.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ma),t.getHSL(Ql);const i=Qo(Ma.h,Ql.h,n),a=Qo(Ma.s,Ql.s,n),s=Qo(Ma.l,Ql.l,n);return this.setHSL(i,a,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Yt;Yt.NAMES=OS;class Sm{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Yt(t),this.density=n}clone(){return new Sm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pT extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const _i=new O,Wi=new O,qf=new O,Yi=new O,Zs=new O,Ks=new O,Mg=new O,jf=new O,Zf=new O,Kf=new O,Qf=new He,Jf=new He,$f=new He;class ui{constructor(t=new O,n=new O,i=new O){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),_i.subVectors(t,n),a.cross(_i);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(t,n,i,a,s){_i.subVectors(a,n),Wi.subVectors(i,n),qf.subVectors(t,n);const r=_i.dot(_i),o=_i.dot(Wi),l=_i.dot(qf),c=Wi.dot(Wi),h=Wi.dot(qf),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;const u=1/p,d=(c*l-o*h)*u,v=(r*h-o*l)*u;return s.set(1-d-v,v,d)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(t,n,i,a,s,r,o,l){return this.getBarycoord(t,n,i,a,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yi.x),l.addScaledVector(r,Yi.y),l.addScaledVector(o,Yi.z),l)}static getInterpolatedAttribute(t,n,i,a,s,r){return Qf.setScalar(0),Jf.setScalar(0),$f.setScalar(0),Qf.fromBufferAttribute(t,n),Jf.fromBufferAttribute(t,i),$f.fromBufferAttribute(t,a),r.setScalar(0),r.addScaledVector(Qf,s.x),r.addScaledVector(Jf,s.y),r.addScaledVector($f,s.z),r}static isFrontFacing(t,n,i,a){return _i.subVectors(i,n),Wi.subVectors(t,n),_i.cross(Wi).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),_i.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ui.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,s){return ui.getInterpolation(t,this.a,this.b,this.c,n,i,a,s)}containsPoint(t){return ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,s=this.c;let r,o;Zs.subVectors(a,i),Ks.subVectors(s,i),jf.subVectors(t,i);const l=Zs.dot(jf),c=Ks.dot(jf);if(l<=0&&c<=0)return n.copy(i);Zf.subVectors(t,a);const h=Zs.dot(Zf),p=Ks.dot(Zf);if(h>=0&&p<=h)return n.copy(a);const u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Zs,r);Kf.subVectors(t,s);const d=Zs.dot(Kf),v=Ks.dot(Kf);if(v>=0&&d<=v)return n.copy(s);const E=d*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Ks,o);const g=h*v-d*p;if(g<=0&&p-h>=0&&d-v>=0)return Mg.subVectors(s,a),o=(p-h)/(p-h+(d-v)),n.copy(a).addScaledVector(Mg,o);const f=1/(g+E+u);return r=E*f,o=u*f,n.copy(i).addScaledVector(Zs,r).addScaledVector(Ks,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class wl{constructor(t=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(vi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=vi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,vi):vi.fromBufferAttribute(s,r),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox)),Jl.applyMatrix4(t.matrixWorld),this.union(Jl)}const a=t.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xo),$l.subVectors(this.max,xo),Qs.subVectors(t.a,xo),Js.subVectors(t.b,xo),$s.subVectors(t.c,xo),Ea.subVectors(Js,Qs),ba.subVectors($s,Js),rs.subVectors(Qs,$s);let n=[0,-Ea.z,Ea.y,0,-ba.z,ba.y,0,-rs.z,rs.y,Ea.z,0,-Ea.x,ba.z,0,-ba.x,rs.z,0,-rs.x,-Ea.y,Ea.x,0,-ba.y,ba.x,0,-rs.y,rs.x,0];return!th(n,Qs,Js,$s,$l)||(n=[1,0,0,0,1,0,0,0,1],!th(n,Qs,Js,$s,$l))?!1:(tc.crossVectors(Ea,ba),n=[tc.x,tc.y,tc.z],th(n,Qs,Js,$s,$l))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qi=[new O,new O,new O,new O,new O,new O,new O,new O],vi=new O,Jl=new wl,Qs=new O,Js=new O,$s=new O,Ea=new O,ba=new O,rs=new O,xo=new O,$l=new O,tc=new O,os=new O;function th(e,t,n,i,a){for(let s=0,r=e.length-3;s<=r;s+=3){os.fromArray(e,s);const o=a.x*Math.abs(os.x)+a.y*Math.abs(os.y)+a.z*Math.abs(os.z),l=t.dot(os),c=n.dot(os),h=i.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const We=new O,ec=new Ht;let mT=0;class di extends Bs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=np,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ec.fromBufferAttribute(this,n),ec.applyMatrix3(t),this.setXY(n,ec.x,ec.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix3(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix4(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyNormalMatrix(t),this.setXYZ(n,We.x,We.y,We.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.transformDirection(t),this.setXYZ(n,We.x,We.y,We.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Si(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=me(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Si(n,this.array)),n}setX(t,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Si(n,this.array)),n}setY(t,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Si(n,this.array)),n}setZ(t,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Si(n,this.array)),n}setW(t,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=me(n,this.array),i=me(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=me(n,this.array),i=me(i,this.array),a=me(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t*=this.itemSize,this.normalized&&(n=me(n,this.array),i=me(i,this.array),a=me(a,this.array),s=me(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==np&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class PS extends di{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class BS extends di{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class mn extends di{constructor(t,n,i){super(new Float32Array(t),n,i)}}const gT=new wl,So=new O,eh=new O;class Ku{constructor(t=new O,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):gT.setFromPoints(t).getCenter(i);let a=0;for(let s=0,r=t.length;s<r;s++)a=Math.max(a,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;So.subVectors(t,this.center);const n=So.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(So,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(So.copy(t.center).add(eh)),this.expandByPoint(So.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let _T=0;const ei=new Pe,nh=new pn,tr=new O,Gn=new wl,yo=new wl,en=new O;class Bn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pb(t)?BS:PS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ei.makeRotationFromQuaternion(t),this.applyMatrix4(ei),this}rotateX(t){return ei.makeRotationX(t),this.applyMatrix4(ei),this}rotateY(t){return ei.makeRotationY(t),this.applyMatrix4(ei),this}rotateZ(t){return ei.makeRotationZ(t),this.applyMatrix4(ei),this}translate(t,n,i){return ei.makeTranslation(t,n,i),this.applyMatrix4(ei),this}scale(t,n,i){return ei.makeScale(t,n,i),this.applyMatrix4(ei),this}lookAt(t){return nh.lookAt(t),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=t.length;a<s;a++){const r=t[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new mn(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const s=t[a];n.setXYZ(a,s.x,s.y,s.z||0)}t.length>n.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ku);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];yo.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Gn.min,yo.min),Gn.expandByPoint(en),en.addVectors(Gn.max,yo.max),Gn.expandByPoint(en)):(Gn.expandByPoint(yo.min),Gn.expandByPoint(yo.max))}Gn.getCenter(i);let a=0;for(let s=0,r=t.count;s<r;s++)en.fromBufferAttribute(t,s),a=Math.max(a,i.distanceToSquared(en));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)en.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(t,c),en.add(tr)),a=Math.max(a,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new O,l[x]=new O;const c=new O,h=new O,p=new O,u=new Ht,d=new Ht,v=new Ht,E=new O,g=new O;function f(x,A,D){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,A),p.fromBufferAttribute(i,D),u.fromBufferAttribute(s,x),d.fromBufferAttribute(s,A),v.fromBufferAttribute(s,D),h.sub(c),p.sub(c),d.sub(u),v.sub(u);const U=1/(d.x*v.y-v.x*d.y);isFinite(U)&&(E.copy(h).multiplyScalar(v.y).addScaledVector(p,-d.y).multiplyScalar(U),g.copy(p).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(U),o[x].add(E),o[A].add(E),o[D].add(E),l[x].add(g),l[A].add(g),l[D].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let x=0,A=m.length;x<A;++x){const D=m[x],U=D.start,F=D.count;for(let q=U,nt=U+F;q<nt;q+=3)f(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const _=new O,S=new O,C=new O,b=new O;function R(x){C.fromBufferAttribute(a,x),b.copy(C);const A=o[x];_.copy(A),_.sub(C.multiplyScalar(C.dot(A))).normalize(),S.crossVectors(b,A);const U=S.dot(l[x])<0?-1:1;r.setXYZW(x,_.x,_.y,_.z,U)}for(let x=0,A=m.length;x<A;++x){const D=m[x],U=D.start,F=D.count;for(let q=U,nt=U+F;q<nt;q+=3)R(t.getX(q+0)),R(t.getX(q+1)),R(t.getX(q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const a=new O,s=new O,r=new O,o=new O,l=new O,c=new O,h=new O,p=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){const v=t.getX(u+0),E=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),r.fromBufferAttribute(n,g),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,s),p.subVectors(a,s),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)en.fromBufferAttribute(t,n),en.normalize(),t.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h);let d=0,v=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?d=l[E]*o.data.stride+o.offset:d=l[E]*h;for(let f=0;f<h;f++)u[v++]=c[d++]}return new di(u,h,p)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bn,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const u=c[h],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){const d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(a[l]=h,s=!0)}s&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const h=a[c];this.setAttribute(c,h.clone(n))}const s=t.morphAttributes;for(const c in s){const h=[],p=s[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vT{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=np,this.updateRanges=[],this.version=0,this.uuid=oa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let a=0,s=this.stride;a<s;a++)this.array[t+a]=n.array[i+a];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new O;class bu{constructor(t,n,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix4(t),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyNormalMatrix(t),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.transformDirection(t),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Si(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=me(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Si(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Si(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Si(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Si(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=me(n,this.array),i=me(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=me(n,this.array),i=me(i,this.array),a=me(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this}setXYZW(t,n,i,a,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=me(n,this.array),i=me(i,this.array),a=me(a,this.array),s=me(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=a,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Eu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return new di(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new bu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Eu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let xT=0;class Is extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=Lr,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Nt(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Nt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(i.blending=this.blending),this.side!==ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pd&&(i.blendSrc=this.blendSrc),this.blendDst!==md&&(i.blendDst=this.blendDst),this.blendEquation!==ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(t.textures),r=a(t.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Gc extends Is{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let er;const Mo=new O,nr=new O,ir=new O,ar=new Ht,Eo=new Ht,IS=new Pe,nc=new O,bo=new O,ic=new O,Eg=new Ht,ih=new Ht,bg=new Ht;class ah extends pn{constructor(t=new Gc){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new Bn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vT(n,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new bu(i,3,0,!1)),er.setAttribute("uv",new bu(i,2,3,!1))}this.geometry=er,this.material=t,this.center=new Ht(.5,.5),this.count=1}raycast(t,n){t.camera===null&&ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),IS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);const i=this.material.rotation;let a,s;i!==0&&(s=Math.cos(i),a=Math.sin(i));const r=this.center;ac(nc.set(-.5,-.5,0),ir,r,nr,a,s),ac(bo.set(.5,-.5,0),ir,r,nr,a,s),ac(ic.set(.5,.5,0),ir,r,nr,a,s),Eg.set(0,0),ih.set(1,0),bg.set(1,1);let o=t.ray.intersectTriangle(nc,bo,ic,!1,Mo);if(o===null&&(ac(bo.set(-.5,.5,0),ir,r,nr,a,s),ih.set(0,1),o=t.ray.intersectTriangle(nc,ic,bo,!1,Mo),o===null))return;const l=t.ray.origin.distanceTo(Mo);l<t.near||l>t.far||n.push({distance:l,point:Mo.clone(),uv:ui.getInterpolation(Mo,nc,bo,ic,Eg,ih,bg,new Ht),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ac(e,t,n,i,a,s){ar.subVectors(e,n).addScalar(.5).multiply(i),a!==void 0?(Eo.x=s*ar.x-a*ar.y,Eo.y=a*ar.x+s*ar.y):Eo.copy(ar),e.copy(t),e.x+=Eo.x,e.y+=Eo.y,e.applyMatrix4(IS)}const ji=new O,sh=new O,sc=new O,Ta=new O,rh=new O,rc=new O,oh=new O;class ym{constructor(t=new O,n=new O(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ji.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,n),ji.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){sh.copy(t).add(n).multiplyScalar(.5),sc.copy(n).sub(t).normalize(),Ta.copy(this.origin).sub(sh);const s=t.distanceTo(n)*.5,r=-this.direction.dot(sc),o=Ta.dot(this.direction),l=-Ta.dot(sc),c=Ta.lengthSq(),h=Math.abs(1-r*r);let p,u,d,v;if(h>0)if(p=r*l-o,u=r*o-l,v=s*h,p>=0)if(u>=-v)if(u<=v){const E=1/h;p*=E,u*=E,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(p=Math.max(0,-(r*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),d=-p*p+u*(u+2*l)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(sh).addScaledVector(sc,u),d}intersectSphere(t,n){ji.subVectors(t.center,this.origin);const i=ji.dot(this.direction),a=ji.dot(ji)-i*i,s=t.radius*t.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,a=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,a=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,n,i,a,s){rh.subVectors(n,t),rc.subVectors(i,t),oh.crossVectors(rh,rc);let r=this.direction.dot(oh),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ta.subVectors(this.origin,t);const l=o*this.direction.dot(rc.crossVectors(Ta,rc));if(l<0)return null;const c=o*this.direction.dot(rh.cross(Ta));if(c<0||l+c>r)return null;const h=-o*Ta.dot(oh);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tu extends Is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=gS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Tg=new Pe,ls=new ym,oc=new Ku,Ag=new O,lc=new O,cc=new O,uc=new O,lh=new O,fc=new O,Rg=new O,hc=new O;class xn extends pn{constructor(t=new Bn,n=new Tu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(s&&o){fc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(lh.fromBufferAttribute(p,t),r?fc.addScaledVector(lh,h):fc.addScaledVector(lh.sub(n),h))}n.add(fc)}return n}raycast(t,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oc.copy(i.boundingSphere),oc.applyMatrix4(s),ls.copy(t.ray).recast(t.near),!(oc.containsPoint(ls.origin)===!1&&(ls.intersectSphere(oc,Ag)===null||ls.origin.distanceToSquared(Ag)>(t.far-t.near)**2))&&(Tg.copy(s).invert(),ls.copy(t.ray).applyMatrix4(Tg),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ls)))}_computeIntersections(t,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,E=u.length;v<E;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=m,C=_;S<C;S+=3){const b=o.getX(S),R=o.getX(S+1),x=o.getX(S+2);a=dc(this,f,t,i,c,h,p,b,R,x),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,d.start),E=Math.min(o.count,d.start+d.count);for(let g=v,f=E;g<f;g+=3){const m=o.getX(g),_=o.getX(g+1),S=o.getX(g+2);a=dc(this,r,t,i,c,h,p,m,_,S),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,E=u.length;v<E;v++){const g=u[v],f=r[g.materialIndex],m=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let S=m,C=_;S<C;S+=3){const b=S,R=S+1,x=S+2;a=dc(this,f,t,i,c,h,p,b,R,x),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,d.start),E=Math.min(l.count,d.start+d.count);for(let g=v,f=E;g<f;g+=3){const m=g,_=g+1,S=g+2;a=dc(this,r,t,i,c,h,p,m,_,S),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function ST(e,t,n,i,a,s,r,o){let l;if(t.side===Nn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,t.side===ts,o),l===null)return null;hc.copy(o),hc.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(hc);return c<n.near||c>n.far?null:{distance:c,point:hc.clone(),object:e}}function dc(e,t,n,i,a,s,r,o,l,c){e.getVertexPosition(o,lc),e.getVertexPosition(l,cc),e.getVertexPosition(c,uc);const h=ST(e,t,n,i,lc,cc,uc,Rg);if(h){const p=new O;ui.getBarycoord(Rg,lc,cc,uc,p),a&&(h.uv=ui.getInterpolatedAttribute(a,o,l,c,p,new Ht)),s&&(h.uv1=ui.getInterpolatedAttribute(s,o,l,c,p,new Ht)),r&&(h.normal=ui.getInterpolatedAttribute(r,o,l,c,p,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};ui.getNormal(lc,cc,uc,u.normal),h.face=u,h.barycoord=p}return h}class yT extends Sn{constructor(t=null,n=1,i=1,a,s,r,o,l,c=hn,h=hn,p,u){super(null,r,o,l,c,h,a,s,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ch=new O,MT=new O,ET=new Ft;class ps{constructor(t=new O(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=ch.subVectors(i,n).cross(MT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const a=t.delta(ch),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(a,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||ET.getNormalMatrix(t),a=this.coplanarPoint(ch).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Ku,bT=new Ht(.5,.5),pc=new O;class Mm{constructor(t=new ps,n=new ps,i=new ps,a=new ps,s=new ps,r=new ps){this.planes=[t,n,i,a,s,r]}set(t,n,i,a,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ni,i=!1){const a=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],u=s[6],d=s[7],v=s[8],E=s[9],g=s[10],f=s[11],m=s[12],_=s[13],S=s[14],C=s[15];if(a[0].setComponents(c-r,d-h,f-v,C-m).normalize(),a[1].setComponents(c+r,d+h,f+v,C+m).normalize(),a[2].setComponents(c+o,d+p,f+E,C+_).normalize(),a[3].setComponents(c-o,d-p,f-E,C-_).normalize(),i)a[4].setComponents(l,u,g,S).normalize(),a[5].setComponents(c-l,d-u,f-g,C-S).normalize();else if(a[4].setComponents(c-l,d-u,f-g,C-S).normalize(),n===Ni)a[5].setComponents(c+l,d+u,f+g,C+S).normalize();else if(n===pl)a[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);const n=bT.distanceTo(t.center);return cs.radius=.7071067811865476+n,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(pc.x=a.normal.x>0?t.max.x:t.min.x,pc.y=a.normal.y>0?t.max.y:t.min.y,pc.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(pc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class TT extends Is{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Au=new O,Ru=new O,Cg=new Pe,To=new ym,mc=new Ku,uh=new O,wg=new O;class AT extends pn{constructor(t=new Bn,n=new TT){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let a=1,s=n.count;a<s;a++)Au.fromBufferAttribute(n,a-1),Ru.fromBufferAttribute(n,a),i[a]=i[a-1],i[a]+=Au.distanceTo(Ru);t.setAttribute("lineDistance",new mn(i,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,a=this.matrixWorld,s=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(a),mc.radius+=s,t.ray.intersectsSphere(mc)===!1)return;Cg.copy(a).invert(),To.copy(t.ray).applyMatrix4(Cg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const d=Math.max(0,r.start),v=Math.min(h.count,r.start+r.count);for(let E=d,g=v-1;E<g;E+=c){const f=h.getX(E),m=h.getX(E+1),_=gc(this,t,To,l,f,m,E);_&&n.push(_)}if(this.isLineLoop){const E=h.getX(v-1),g=h.getX(d),f=gc(this,t,To,l,E,g,v-1);f&&n.push(f)}}else{const d=Math.max(0,r.start),v=Math.min(u.count,r.start+r.count);for(let E=d,g=v-1;E<g;E+=c){const f=gc(this,t,To,l,E,E+1,E);f&&n.push(f)}if(this.isLineLoop){const E=gc(this,t,To,l,v-1,d,v-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function gc(e,t,n,i,a,s,r){const o=e.geometry.attributes.position;if(Au.fromBufferAttribute(o,a),Ru.fromBufferAttribute(o,s),n.distanceSqToSegment(Au,Ru,uh,wg)>i)return;uh.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(uh);if(!(c<t.near||c>t.far))return{distance:c,point:wg.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}class zS extends Sn{constructor(t=[],n=ws,i,a,s,r,o,l,c,h){super(t,n,i,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dg extends Sn{constructor(t,n,i,a,s,r,o,l,c){super(t,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qr extends Sn{constructor(t,n,i=Ii,a,s,r,o=hn,l=hn,c,h=ma,p=1){if(h!==ma&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:p};super(u,a,s,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class RT extends qr{constructor(t,n=Ii,i=ws,a,s,r=hn,o=hn,l,c=ma){const h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,a,s,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class FS extends Sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Za extends Bn{constructor(t=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],p=[];let u=0,d=0;v("z","y","x",-1,-1,i,n,t,r,s,0),v("z","y","x",1,-1,i,n,-t,r,s,1),v("x","z","y",1,1,t,i,n,a,r,2),v("x","z","y",1,-1,t,i,-n,a,r,3),v("x","y","z",1,-1,t,n,i,a,s,4),v("x","y","z",-1,-1,t,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(h,3)),this.setAttribute("uv",new mn(p,2));function v(E,g,f,m,_,S,C,b,R,x,A){const D=S/R,U=C/x,F=S/2,q=C/2,nt=b/2,I=R+1,N=x+1;let P=0,W=0;const tt=new O;for(let ot=0;ot<N;ot++){const Mt=ot*U-q;for(let ct=0;ct<I;ct++){const Pt=ct*D-F;tt[E]=Pt*m,tt[g]=Mt*_,tt[f]=nt,c.push(tt.x,tt.y,tt.z),tt[E]=0,tt[g]=0,tt[f]=b>0?1:-1,h.push(tt.x,tt.y,tt.z),p.push(ct/R),p.push(1-ot/x),P+=1}}for(let ot=0;ot<x;ot++)for(let Mt=0;Mt<R;Mt++){const ct=u+Mt+I*ot,Pt=u+Mt+I*(ot+1),qt=u+(Mt+1)+I*(ot+1),Dt=u+(Mt+1)+I*ot;l.push(ct,Pt,Dt),l.push(Pt,qt,Dt),W+=6}o.addGroup(d,W,A),d+=W,u+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Em extends Bn{constructor(t=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),h(),this.setAttribute("position",new mn(s,3)),this.setAttribute("normal",new mn(s.slice(),3)),this.setAttribute("uv",new mn(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const _=new O,S=new O,C=new O;for(let b=0;b<n.length;b+=3)d(n[b+0],_),d(n[b+1],S),d(n[b+2],C),l(_,S,C,m)}function l(m,_,S,C){const b=C+1,R=[];for(let x=0;x<=b;x++){R[x]=[];const A=m.clone().lerp(S,x/b),D=_.clone().lerp(S,x/b),U=b-x;for(let F=0;F<=U;F++)F===0&&x===b?R[x][F]=A:R[x][F]=A.clone().lerp(D,F/U)}for(let x=0;x<b;x++)for(let A=0;A<2*(b-x)-1;A++){const D=Math.floor(A/2);A%2===0?(u(R[x][D+1]),u(R[x+1][D]),u(R[x][D])):(u(R[x][D+1]),u(R[x+1][D+1]),u(R[x+1][D]))}}function c(m){const _=new O;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(m),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function h(){const m=new O;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const S=g(m)/2/Math.PI+.5,C=f(m)/Math.PI+.5;r.push(S,1-C)}v(),p()}function p(){for(let m=0;m<r.length;m+=6){const _=r[m+0],S=r[m+2],C=r[m+4],b=Math.max(_,S,C),R=Math.min(_,S,C);b>.9&&R<.1&&(_<.2&&(r[m+0]+=1),S<.2&&(r[m+2]+=1),C<.2&&(r[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function d(m,_){const S=m*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function v(){const m=new O,_=new O,S=new O,C=new O,b=new Ht,R=new Ht,x=new Ht;for(let A=0,D=0;A<s.length;A+=9,D+=6){m.set(s[A+0],s[A+1],s[A+2]),_.set(s[A+3],s[A+4],s[A+5]),S.set(s[A+6],s[A+7],s[A+8]),b.set(r[D+0],r[D+1]),R.set(r[D+2],r[D+3]),x.set(r[D+4],r[D+5]),C.copy(m).add(_).add(S).divideScalar(3);const U=g(C);E(b,D+0,m,U),E(R,D+2,_,U),E(x,D+4,S,U)}}function E(m,_,S,C){C<0&&m.x===1&&(r[_]=m.x-1),S.x===0&&S.z===0&&(r[_]=C/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Em(t.vertices,t.indices,t.radius,t.detail)}}class bm extends Em{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,a,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new bm(t.radius,t.detail)}}class Dl extends Bn{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const s=t/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,h=l+1,p=t/o,u=n/l,d=[],v=[],E=[],g=[];for(let f=0;f<h;f++){const m=f*u-r;for(let _=0;_<c;_++){const S=_*p-s;v.push(S,-m,0),E.push(0,0,1),g.push(_/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const _=m+c*f,S=m+c*(f+1),C=m+1+c*(f+1),b=m+1+c*f;d.push(_,S,b),d.push(S,C,b)}this.setIndex(d),this.setAttribute("position",new mn(v,3)),this.setAttribute("normal",new mn(E,3)),this.setAttribute("uv",new mn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cu extends Bn{constructor(t=1,n=32,i=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],p=new O,u=new O,d=[],v=[],E=[],g=[];for(let f=0;f<=i;f++){const m=[],_=f/i;let S=0;f===0&&r===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const b=C/n;p.x=-t*Math.cos(a+b*s)*Math.sin(r+_*o),p.y=t*Math.cos(r+_*o),p.z=t*Math.sin(a+b*s)*Math.sin(r+_*o),v.push(p.x,p.y,p.z),u.copy(p).normalize(),E.push(u.x,u.y,u.z),g.push(b+S,1-_),m.push(c++)}h.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const _=h[f][m+1],S=h[f][m],C=h[f+1][m],b=h[f+1][m+1];(f!==0||r>0)&&d.push(_,S,b),(f!==i-1||l<Math.PI)&&d.push(S,C,b)}this.setIndex(d),this.setAttribute("position",new mn(v,3)),this.setAttribute("normal",new mn(E,3)),this.setAttribute("uv",new mn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function jr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];if(Ug(a))a.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone();else if(Array.isArray(a))if(Ug(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();t[n][i]=s}else t[n][i]=a.slice();else t[n][i]=a}}return t}function En(e){const t={};for(let n=0;n<e.length;n++){const i=jr(e[n]);for(const a in i)t[a]=i[a]}return t}function Ug(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function CT(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function HS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const wT={clone:jr,merge:En};var DT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DT,this.fragmentShader=UT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jr(t.uniforms),this.uniformsGroups=CT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class LT extends Mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ao extends Is{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ep,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class NT extends Is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OT extends Is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class GS extends pn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class PT extends GS{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const fh=new Pe,Lg=new O,Ng=new O;class BT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mm,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Lg.setFromMatrixPosition(t.matrixWorld),n.position.copy(Lg),Ng.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Ng),n.updateMatrixWorld(),fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===pl||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _c=new O,vc=new io,Ai=new O;class VS extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_c,vc,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,vc,Ai.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(_c,vc,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,vc,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Aa=new O,Og=new Ht,Pg=new Ht;class kn extends VS{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=ml*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Aa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Aa.x,Aa.y).multiplyScalar(-t/Aa.z),Aa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Aa.x,Aa.y).multiplyScalar(-t/Aa.z)}getViewSize(t,n){return this.getViewBounds(t,Og,Pg),n.subVectors(Pg,Og)}setViewOffset(t,n,i,a,s,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class IT extends BT{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0}}class Bg extends GS{constructor(t,n,i=0,a=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new IT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class XS extends VS{constructor(t=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-t,r=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const sr=-90,rr=1;class zT extends pn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new kn(sr,rr,t,n);a.layers=this.layers,this.add(a);const s=new kn(sr,rr,t,n);s.layers=this.layers,this.add(s);const r=new kn(sr,rr,t,n);r.layers=this.layers,this.add(r);const o=new kn(sr,rr,t,n);o.layers=this.layers,this.add(o);const l=new kn(sr,rr,t,n);l.layers=this.layers,this.add(l);const c=new kn(sr,rr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,s),t.setRenderTarget(i,1,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=E,t.setRenderTarget(i,5,a),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class FT extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ig=new Pe;class zg{constructor(t,n,i=0,a=1/0){this.ray=new ym(t,n),this.near=i,this.far=a,this.camera=null,this.layers=new xm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ae("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Ig.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ig),this}intersectObject(t,n=!0,i=[]){return ap(t,this,i,n),i.sort(Fg),i}intersectObjects(t,n=!0,i=[]){for(let a=0,s=t.length;a<s;a++)ap(t[a],this,i,n);return i.sort(Fg),i}}function Fg(e,t){return e.distance-t.distance}function ap(e,t,n,i){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(a=!1),a===!0&&i===!0){const s=e.children;for(let r=0,o=s.length;r<o;r++)ap(s[r],t,n,!0)}}const wm=class wm{constructor(t,n,i,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,a){const s=this.elements;return s[0]=t,s[2]=n,s[1]=i,s[3]=a,this}};wm.prototype.isMatrix2=!0;let Hg=wm;function Gg(e,t,n,i){const a=HT(i);switch(n){case wS:return e*t;case US:return e*t/a.components*a.byteLength;case hm:return e*t/a.components*a.byteLength;case Ds:return e*t*2/a.components*a.byteLength;case dm:return e*t*2/a.components*a.byteLength;case DS:return e*t*3/a.components*a.byteLength;case yi:return e*t*4/a.components*a.byteLength;case pm:return e*t*4/a.components*a.byteLength;case Ic:case zc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Fc:case Hc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ad:case Cd:return Math.max(e,16)*Math.max(t,8)/4;case Td:case Rd:return Math.max(e,8)*Math.max(t,8)/2;case wd:case Dd:case Ld:case Nd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ud:case vu:case Od:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Bd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Id:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case zd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Vd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Xd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case kd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Yd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case qd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case jd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Zd:case Kd:case Qd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Jd:case $d:return Math.ceil(e/4)*Math.ceil(t/4)*8;case xu:case tp:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function HT(e){switch(e){case Yn:case TS:return{byteLength:1,components:1};case hl:case AS:case pa:return{byteLength:2,components:1};case um:case fm:return{byteLength:2,components:4};case Ii:case cm:case Li:return{byteLength:4,components:1};case RS:case CS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lm}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kS(){let e=null,t=!1,n=null,i=null;function a(s,r){n(s,r),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function GT(e){const t=new WeakMap;function n(o,l){const c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){const v=p[u],E=p[d];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++u,p[u]=E)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){const E=p[d];e.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var VT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XT=`#ifdef USE_ALPHAHASH
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
#endif`,kT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jT=`#ifdef USE_AOMAP
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
#endif`,ZT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KT=`#ifdef USE_BATCHING
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
#endif`,QT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$T=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e1=`#ifdef USE_IRIDESCENCE
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
#endif`,n1=`#ifdef USE_BUMPMAP
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
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,f1=`#define PI 3.141592653589793
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
} // validated`,h1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d1=`vec3 transformedNormal = objectNormal;
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
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v1="gl_FragColor = linearToOutputTexel( gl_FragColor );",x1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,E1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,T1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w1=`#ifdef USE_GRADIENTMAP
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
}`,D1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,O1=`#ifdef USE_ENVMAP
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
#endif`,P1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F1=`PhysicalMaterial material;
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
#endif`,H1=`uniform sampler2D dfgLUT;
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
}`,G1=`
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
#endif`,V1=`#if defined( RE_IndirectDiffuse )
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
#endif`,X1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,W1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J1=`#if defined( USE_POINTS_UV )
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
#endif`,$1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aA=`#ifdef USE_MORPHTARGETS
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
#endif`,sA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fA=`#ifdef USE_NORMALMAP
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
#endif`,hA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_A=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RA=`float getShadowMask() {
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
}`,CA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wA=`#ifdef USE_SKINNING
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
#endif`,DA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UA=`#ifdef USE_SKINNING
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
#endif`,LA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BA=`#ifdef USE_TRANSMISSION
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
#endif`,IA=`#ifdef USE_TRANSMISSION
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
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XA=`uniform sampler2D t2D;
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
}`,kA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`#include <common>
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
}`,ZA=`#if DEPTH_PACKING == 3200
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
}`,KA=`#define DISTANCE
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
}`,QA=`#define DISTANCE
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
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$A=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tR=`uniform float scale;
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
}`,eR=`uniform vec3 diffuse;
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
}`,nR=`#include <common>
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
}`,iR=`uniform vec3 diffuse;
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
}`,aR=`#define LAMBERT
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
}`,sR=`#define LAMBERT
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
}`,rR=`#define MATCAP
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
}`,oR=`#define MATCAP
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
}`,lR=`#define NORMAL
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
}`,cR=`#define NORMAL
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
}`,uR=`#define PHONG
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
}`,fR=`#define PHONG
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
}`,hR=`#define STANDARD
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
}`,dR=`#define STANDARD
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
}`,pR=`#define TOON
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
}`,mR=`#define TOON
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
}`,gR=`uniform float size;
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
}`,_R=`uniform vec3 diffuse;
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
}`,vR=`#include <common>
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
}`,xR=`uniform vec3 color;
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
}`,SR=`uniform float rotation;
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
}`,yR=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:VT,alphahash_pars_fragment:XT,alphamap_fragment:kT,alphamap_pars_fragment:WT,alphatest_fragment:YT,alphatest_pars_fragment:qT,aomap_fragment:jT,aomap_pars_fragment:ZT,batching_pars_vertex:KT,batching_vertex:QT,begin_vertex:JT,beginnormal_vertex:$T,bsdfs:t1,iridescence_fragment:e1,bumpmap_pars_fragment:n1,clipping_planes_fragment:i1,clipping_planes_pars_fragment:a1,clipping_planes_pars_vertex:s1,clipping_planes_vertex:r1,color_fragment:o1,color_pars_fragment:l1,color_pars_vertex:c1,color_vertex:u1,common:f1,cube_uv_reflection_fragment:h1,defaultnormal_vertex:d1,displacementmap_pars_vertex:p1,displacementmap_vertex:m1,emissivemap_fragment:g1,emissivemap_pars_fragment:_1,colorspace_fragment:v1,colorspace_pars_fragment:x1,envmap_fragment:S1,envmap_common_pars_fragment:y1,envmap_pars_fragment:M1,envmap_pars_vertex:E1,envmap_physical_pars_fragment:O1,envmap_vertex:b1,fog_vertex:T1,fog_pars_vertex:A1,fog_fragment:R1,fog_pars_fragment:C1,gradientmap_pars_fragment:w1,lightmap_pars_fragment:D1,lights_lambert_fragment:U1,lights_lambert_pars_fragment:L1,lights_pars_begin:N1,lights_toon_fragment:P1,lights_toon_pars_fragment:B1,lights_phong_fragment:I1,lights_phong_pars_fragment:z1,lights_physical_fragment:F1,lights_physical_pars_fragment:H1,lights_fragment_begin:G1,lights_fragment_maps:V1,lights_fragment_end:X1,lightprobes_pars_fragment:k1,logdepthbuf_fragment:W1,logdepthbuf_pars_fragment:Y1,logdepthbuf_pars_vertex:q1,logdepthbuf_vertex:j1,map_fragment:Z1,map_pars_fragment:K1,map_particle_fragment:Q1,map_particle_pars_fragment:J1,metalnessmap_fragment:$1,metalnessmap_pars_fragment:tA,morphinstance_vertex:eA,morphcolor_vertex:nA,morphnormal_vertex:iA,morphtarget_pars_vertex:aA,morphtarget_vertex:sA,normal_fragment_begin:rA,normal_fragment_maps:oA,normal_pars_fragment:lA,normal_pars_vertex:cA,normal_vertex:uA,normalmap_pars_fragment:fA,clearcoat_normal_fragment_begin:hA,clearcoat_normal_fragment_maps:dA,clearcoat_pars_fragment:pA,iridescence_pars_fragment:mA,opaque_fragment:gA,packing:_A,premultiplied_alpha_fragment:vA,project_vertex:xA,dithering_fragment:SA,dithering_pars_fragment:yA,roughnessmap_fragment:MA,roughnessmap_pars_fragment:EA,shadowmap_pars_fragment:bA,shadowmap_pars_vertex:TA,shadowmap_vertex:AA,shadowmask_pars_fragment:RA,skinbase_vertex:CA,skinning_pars_vertex:wA,skinning_vertex:DA,skinnormal_vertex:UA,specularmap_fragment:LA,specularmap_pars_fragment:NA,tonemapping_fragment:OA,tonemapping_pars_fragment:PA,transmission_fragment:BA,transmission_pars_fragment:IA,uv_pars_fragment:zA,uv_pars_vertex:FA,uv_vertex:HA,worldpos_vertex:GA,background_vert:VA,background_frag:XA,backgroundCube_vert:kA,backgroundCube_frag:WA,cube_vert:YA,cube_frag:qA,depth_vert:jA,depth_frag:ZA,distance_vert:KA,distance_frag:QA,equirect_vert:JA,equirect_frag:$A,linedashed_vert:tR,linedashed_frag:eR,meshbasic_vert:nR,meshbasic_frag:iR,meshlambert_vert:aR,meshlambert_frag:sR,meshmatcap_vert:rR,meshmatcap_frag:oR,meshnormal_vert:lR,meshnormal_frag:cR,meshphong_vert:uR,meshphong_frag:fR,meshphysical_vert:hR,meshphysical_frag:dR,meshtoon_vert:pR,meshtoon_frag:mR,points_vert:gR,points_frag:_R,shadow_vert:vR,shadow_frag:xR,sprite_vert:SR,sprite_frag:yR},_t={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ci={basic:{uniforms:En([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:En([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:En([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:En([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:En([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:En([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:En([_t.points,_t.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:En([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:En([_t.common,_t.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:En([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:En([_t.sprite,_t.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:En([_t.common,_t.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:En([_t.lights,_t.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Ci.physical={uniforms:En([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const xc={r:0,b:0,g:0},MR=new Pe,WS=new Ft;WS.set(-1,0,0,0,1,0,0,0,1);function ER(e,t,n,i,a,s){const r=new Yt(0);let o=a===!0?0:1,l,c,h=null,p=0,u=null;function d(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const S=m.backgroundBlurriness>0;_=t.get(_,S)}return _}function v(m){let _=!1;const S=d(m);S===null?g(r,o):S&&S.isColor&&(g(S,1),_=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function E(m,_){const S=d(_);S&&(S.isCubeTexture||S.mapping===Zu)?(c===void 0&&(c=new xn(new Za(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:jr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(MR.makeRotationFromEuler(_.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(WS),c.material.toneMapped=se.getTransfer(S.colorSpace)!==de,(h!==S||p!==S.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new xn(new Dl(2,2),new Mi({name:"BackgroundMaterial",uniforms:jr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=se.getTransfer(S.colorSpace)!==de,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=S,p=S.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(xc,HS(e)),n.buffers.color.setClear(xc.r,xc.g,xc.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,_=1){r.set(m),o=_,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:E,dispose:f}}function bR(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(U,F,q,nt,I){let N=!1;const P=p(U,nt,q,F);s!==P&&(s=P,c(s.object)),N=d(U,nt,q,I),N&&v(U,nt,q,I),I!==null&&t.update(I,e.ELEMENT_ARRAY_BUFFER),(N||r)&&(r=!1,S(U,F,q,nt),I!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function h(U){return e.deleteVertexArray(U)}function p(U,F,q,nt){const I=nt.wireframe===!0;let N=i[F.id];N===void 0&&(N={},i[F.id]=N);const P=U.isInstancedMesh===!0?U.id:0;let W=N[P];W===void 0&&(W={},N[P]=W);let tt=W[q.id];tt===void 0&&(tt={},W[q.id]=tt);let ot=tt[I];return ot===void 0&&(ot=u(l()),tt[I]=ot),ot}function u(U){const F=[],q=[],nt=[];for(let I=0;I<n;I++)F[I]=0,q[I]=0,nt[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:nt,object:U,attributes:{},index:null}}function d(U,F,q,nt){const I=s.attributes,N=F.attributes;let P=0;const W=q.getAttributes();for(const tt in W)if(W[tt].location>=0){const Mt=I[tt];let ct=N[tt];if(ct===void 0&&(tt==="instanceMatrix"&&U.instanceMatrix&&(ct=U.instanceMatrix),tt==="instanceColor"&&U.instanceColor&&(ct=U.instanceColor)),Mt===void 0||Mt.attribute!==ct||ct&&Mt.data!==ct.data)return!0;P++}return s.attributesNum!==P||s.index!==nt}function v(U,F,q,nt){const I={},N=F.attributes;let P=0;const W=q.getAttributes();for(const tt in W)if(W[tt].location>=0){let Mt=N[tt];Mt===void 0&&(tt==="instanceMatrix"&&U.instanceMatrix&&(Mt=U.instanceMatrix),tt==="instanceColor"&&U.instanceColor&&(Mt=U.instanceColor));const ct={};ct.attribute=Mt,Mt&&Mt.data&&(ct.data=Mt.data),I[tt]=ct,P++}s.attributes=I,s.attributesNum=P,s.index=nt}function E(){const U=s.newAttributes;for(let F=0,q=U.length;F<q;F++)U[F]=0}function g(U){f(U,0)}function f(U,F){const q=s.newAttributes,nt=s.enabledAttributes,I=s.attributeDivisors;q[U]=1,nt[U]===0&&(e.enableVertexAttribArray(U),nt[U]=1),I[U]!==F&&(e.vertexAttribDivisor(U,F),I[U]=F)}function m(){const U=s.newAttributes,F=s.enabledAttributes;for(let q=0,nt=F.length;q<nt;q++)F[q]!==U[q]&&(e.disableVertexAttribArray(q),F[q]=0)}function _(U,F,q,nt,I,N,P){P===!0?e.vertexAttribIPointer(U,F,q,I,N):e.vertexAttribPointer(U,F,q,nt,I,N)}function S(U,F,q,nt){E();const I=nt.attributes,N=q.getAttributes(),P=F.defaultAttributeValues;for(const W in N){const tt=N[W];if(tt.location>=0){let ot=I[W];if(ot===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(ot=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(ot=U.instanceColor)),ot!==void 0){const Mt=ot.normalized,ct=ot.itemSize,Pt=t.get(ot);if(Pt===void 0)continue;const qt=Pt.buffer,Dt=Pt.type,et=Pt.bytesPerElement,mt=Dt===e.INT||Dt===e.UNSIGNED_INT||ot.gpuType===cm;if(ot.isInterleavedBufferAttribute){const ht=ot.data,Ut=ht.stride,It=ot.offset;if(ht.isInstancedInterleavedBuffer){for(let Lt=0;Lt<tt.locationSize;Lt++)f(tt.location+Lt,ht.meshPerAttribute);U.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Lt=0;Lt<tt.locationSize;Lt++)g(tt.location+Lt);e.bindBuffer(e.ARRAY_BUFFER,qt);for(let Lt=0;Lt<tt.locationSize;Lt++)_(tt.location+Lt,ct/tt.locationSize,Dt,Mt,Ut*et,(It+ct/tt.locationSize*Lt)*et,mt)}else{if(ot.isInstancedBufferAttribute){for(let ht=0;ht<tt.locationSize;ht++)f(tt.location+ht,ot.meshPerAttribute);U.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ht=0;ht<tt.locationSize;ht++)g(tt.location+ht);e.bindBuffer(e.ARRAY_BUFFER,qt);for(let ht=0;ht<tt.locationSize;ht++)_(tt.location+ht,ct/tt.locationSize,Dt,Mt,ct*et,ct/tt.locationSize*ht*et,mt)}}else if(P!==void 0){const Mt=P[W];if(Mt!==void 0)switch(Mt.length){case 2:e.vertexAttrib2fv(tt.location,Mt);break;case 3:e.vertexAttrib3fv(tt.location,Mt);break;case 4:e.vertexAttrib4fv(tt.location,Mt);break;default:e.vertexAttrib1fv(tt.location,Mt)}}}}m()}function C(){A();for(const U in i){const F=i[U];for(const q in F){const nt=F[q];for(const I in nt){const N=nt[I];for(const P in N)h(N[P].object),delete N[P];delete nt[I]}}delete i[U]}}function b(U){if(i[U.id]===void 0)return;const F=i[U.id];for(const q in F){const nt=F[q];for(const I in nt){const N=nt[I];for(const P in N)h(N[P].object),delete N[P];delete nt[I]}}delete i[U.id]}function R(U){for(const F in i){const q=i[F];for(const nt in q){const I=q[nt];if(I[U.id]===void 0)continue;const N=I[U.id];for(const P in N)h(N[P].object),delete N[P];delete I[U.id]}}}function x(U){for(const F in i){const q=i[F],nt=U.isInstancedMesh===!0?U.id:0,I=q[nt];if(I!==void 0){for(const N in I){const P=I[N];for(const W in P)h(P[W].object),delete P[W];delete I[N]}delete q[nt],Object.keys(q).length===0&&delete i[F]}}}function A(){D(),r=!0,s!==a&&(s=a,c(s.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:g,disableUnusedAttributes:m}}function TR(e,t,n){let i;function a(l){i=l}function s(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function AR(e,t,n,i){let a;function s(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(R){return!(R!==yi&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===pa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Yn&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Li&&!x)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),b=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:S,maxSamples:C,samples:b}}function RR(e){const t=this;let n=null,i=0,a=!1,s=!1;const r=new ps,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const d=p.length!==0||u||i!==0||a;return a=u,i=p.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,d){const v=p.clippingPlanes,E=p.clipIntersection,g=p.clipShadows,f=e.get(p);if(!a||v===null||v.length===0||s&&!g)s?h(null):c();else{const m=s?0:i,_=m*4;let S=f.clippingState||null;l.value=S,S=h(v,u,_,d);for(let C=0;C!==_;++C)S[C]=n[C];f.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,d,v){const E=p!==null?p.length:0;let g=null;if(E!==0){if(g=l.value,v!==!0||g===null){const f=d+E*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let _=0,S=d;_!==E;++_,S+=4)r.copy(p[_]).applyMatrix4(m,o),r.normal.toArray(g,S),g[S+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,g}}const Fa=4,Vg=[.125,.215,.35,.446,.526,.582],gs=20,CR=256,Ro=new XS,Xg=new Yt;let hh=null,dh=0,ph=0,mh=!1;const wR=new O;class kg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=wR}=s;hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hh,dh,ph),this._renderer.xr.enabled=mh,t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ws||t.mapping===Yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:pa,format:yi,colorSpace:Su,depthBuffer:!1},a=Wg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wg(t,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=DR(s)),this._blurMaterial=LR(s,t,n),this._ggxMaterial=UR(s,t,n)}return a}_compileMaterial(t){const n=new xn(new Bn,t);this._renderer.compile(n,Ro)}_sceneToCubeUV(t,n,i,a,s){const l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(Xg),p.toneMapping=Pi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xn(new Za,new Tu({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let f=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy(Xg),f=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));const C=this._cubeSize;or(a,S*C,_>2?C:0,C,C),p.setRenderTarget(a),f&&p.render(E,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===ws||t.mapping===Yr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yg());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;or(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Ro)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(t,s-1,s);n.autoClear=i}_applyGGXFilter(t,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=0+c*1.25,d=p*u,{_lodMax:v}=this,E=this._sizeLods[i],g=3*E*(i>v-Fa?i-v+Fa:0),f=4*(this._cubeSize-E);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=v-n,or(s,g,f,3*E,2*E),a.setRenderTarget(s),a.render(o,Ro),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,or(t,g,f,3*E,2*E),a.setRenderTarget(t),a.render(o,Ro)}_blur(t,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,a,"latitudinal",s),this._halfBlur(r,t,i,i,a,"longitudinal",s)}_halfBlur(t,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ae("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[a];p.material=c;const u=c.uniforms,d=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*gs-1),E=s/v,g=isFinite(s)?1+Math.floor(h*E):gs;g>gs&&Nt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${gs}`);const f=[];let m=0;for(let R=0;R<gs;++R){const x=R/E,A=Math.exp(-x*x/2);f.push(A),R===0?m+=A:R<g&&(m+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const S=this._sizeLods[a],C=3*S*(a>_-Fa?a-_+Fa:0),b=4*(this._cubeSize-S);or(n,C,b,3*S,2*S),l.setRenderTarget(n),l.render(p,Ro)}}function DR(e){const t=[],n=[],i=[];let a=e;const s=e-Fa+1+Vg.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>e-Fa?l=Vg[r-e+Fa-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,v=6,E=3,g=2,f=1,m=new Float32Array(E*v*d),_=new Float32Array(g*v*d),S=new Float32Array(f*v*d);for(let b=0;b<d;b++){const R=b%3*2/3-1,x=b>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];m.set(A,E*v*b),_.set(u,g*v*b);const D=[b,b,b,b,b,b];S.set(D,f*v*b)}const C=new Bn;C.setAttribute("position",new di(m,E)),C.setAttribute("uv",new di(_,g)),C.setAttribute("faceIndex",new di(S,f)),i.push(new xn(C,null)),a>Fa&&a--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Wg(e,t,n){const i=new Bi(e,t,n);return i.texture.mapping=Zu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function UR(e,t,n){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:ra,depthTest:!1,depthWrite:!1})}function LR(e,t,n){const i=new Float32Array(gs),a=new O(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:ra,depthTest:!1,depthWrite:!1})}function Yg(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qu(),fragmentShader:`

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
		`,blending:ra,depthTest:!1,depthWrite:!1})}function qg(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ra,depthTest:!1,depthWrite:!1})}function Qu(){return`

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
	`}class YS extends Bi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new zS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Za(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:ra});s.uniforms.tEquirect.value=n;const r=new xn(a,s),o=n.minFilter;return n.minFilter===_s&&(n.minFilter=sn),new zT(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,a);t.setRenderTarget(s)}}function NR(e){let t=new WeakMap,n=new WeakMap,i=null;function a(u,d=!1){return u==null?null:d?r(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===If||d===zf)if(t.has(u)){const v=t.get(u).texture;return o(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const E=new YS(v.height);return E.fromEquirectangularTexture(e,u),t.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const d=u.mapping,v=d===If||d===zf,E=d===ws||d===Yr;if(v||E){let g=n.get(u);const f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new kg(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const m=u.image;return v&&m&&m.height>0||E&&m&&l(m)?(i===null&&(i=new kg(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===If?u.mapping=ws:d===zf&&(u.mapping=Yr),u}function l(u){let d=0;const v=6;for(let E=0;E<v;E++)u[E]!==void 0&&d++;return d===v}function c(u){const d=u.target;d.removeEventListener("dispose",c);const v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function OR(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const a=e.getExtension(i);return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&ip("WebGLRenderer: "+i+" extension not supported."),a}}}function PR(e,t,n,i){const a={},s=new WeakMap;function r(p){const u=p.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",r),delete a[u.id];const d=s.get(u);d&&(t.remove(d),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(p){const u=p.attributes;for(const d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){const u=[],d=p.index,v=p.attributes.position;let E=0;if(v===void 0)return;if(d!==null){const m=d.array;E=d.version;for(let _=0,S=m.length;_<S;_+=3){const C=m[_+0],b=m[_+1],R=m[_+2];u.push(C,b,b,R,R,C)}}else{const m=v.array;E=v.version;for(let _=0,S=m.length/3-1;_<S;_+=3){const C=_+0,b=_+1,R=_+2;u.push(C,b,b,R,R,C)}}const g=new(v.count>=65535?BS:PS)(u,1);g.version=E;const f=s.get(p);f&&t.remove(f),s.set(p,g)}function h(p){const u=s.get(p);if(u){const d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function BR(e,t,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,s,p*r,d),n.update(u,i,d))}function h(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,d);let E=0;for(let g=0;g<d;g++)E+=u[g];n.update(E,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function IR(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:ae("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function zR(e,t,n){const i=new WeakMap,a=new He;function s(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let D=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var d=D;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),E===!0&&(S=2),g===!0&&(S=3);let C=o.attributes.position.count*S,b=1;C>t.maxTextureSize&&(b=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*b*4*p),x=new NS(R,C,b,p);x.type=Li,x.needsUpdate=!0;const A=S*4;for(let U=0;U<p;U++){const F=f[U],q=m[U],nt=_[U],I=C*b*4*U;for(let N=0;N<F.count;N++){const P=N*A;v===!0&&(a.fromBufferAttribute(F,N),R[I+P+0]=a.x,R[I+P+1]=a.y,R[I+P+2]=a.z,R[I+P+3]=0),E===!0&&(a.fromBufferAttribute(q,N),R[I+P+4]=a.x,R[I+P+5]=a.y,R[I+P+6]=a.z,R[I+P+7]=0),g===!0&&(a.fromBufferAttribute(nt,N),R[I+P+8]=a.x,R[I+P+9]=a.y,R[I+P+10]=a.z,R[I+P+11]=nt.itemSize===4?a.w:1)}}u={count:p,texture:x,size:new Ht(C,b)},i.set(o,u),o.addEventListener("dispose",D)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const E=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(e,"morphTargetBaseInfluence",E),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function FR(e,t,n,i,a){let s=new WeakMap;function r(c){const h=a.render.frame,p=c.geometry,u=t.get(c,p);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}const HR={[_S]:"LINEAR_TONE_MAPPING",[vS]:"REINHARD_TONE_MAPPING",[xS]:"CINEON_TONE_MAPPING",[SS]:"ACES_FILMIC_TONE_MAPPING",[MS]:"AGX_TONE_MAPPING",[ES]:"NEUTRAL_TONE_MAPPING",[yS]:"CUSTOM_TONE_MAPPING"};function GR(e,t,n,i,a){const s=new Bi(t,n,{type:e,depthBuffer:i,stencilBuffer:a,depthTexture:i?new qr(t,n):void 0}),r=new Bi(t,n,{type:pa,depthBuffer:!1,stencilBuffer:!1}),o=new Bn;o.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new mn([0,2,0,0,2,0],2));const l=new LT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new xn(o,l),h=new XS(-1,1,1,-1,0,1);let p=null,u=null,d=!1,v,E=null,g=[],f=!1;this.setSize=function(m,_){s.setSize(m,_),r.setSize(m,_);for(let S=0;S<g.length;S++){const C=g[S];C.setSize&&C.setSize(m,_)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;const _=s.width,S=s.height;for(let C=0;C<g.length;C++){const b=g[C];b.setSize&&b.setSize(_,S)}},this.begin=function(m,_){if(d||m.toneMapping===Pi&&g.length===0)return!1;if(E=_,_!==null){const S=_.width,C=_.height;(s.width!==S||s.height!==C)&&this.setSize(S,C)}return f===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=Pi,!0},this.hasRenderPass=function(){return f},this.end=function(m,_){m.toneMapping=v,d=!0;let S=s,C=r;for(let b=0;b<g.length;b++){const R=g[b];if(R.enabled!==!1&&(R.render(m,C,S,_),R.needsSwap!==!1)){const x=S;S=C,C=x}}if(p!==m.outputColorSpace||u!==m.toneMapping){p=m.outputColorSpace,u=m.toneMapping,l.defines={},se.getTransfer(p)===de&&(l.defines.SRGB_TRANSFER="");const b=HR[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(E),m.render(c,h),E=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),r.dispose(),o.dispose(),l.dispose()}}const qS=new Sn,sp=new qr(1,1),jS=new NS,ZS=new rT,KS=new zS,jg=[],Zg=[],Kg=new Float32Array(16),Qg=new Float32Array(9),Jg=new Float32Array(4);function ao(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let s=jg[a];if(s===void 0&&(s=new Float32Array(a),jg[a]=s),t!==0){i.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(s,o)}return s}function Je(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function $e(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ju(e,t){let n=Zg[t];n===void 0&&(n=new Int32Array(t),Zg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function VR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function XR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2fv(this.addr,t),$e(n,t)}}function kR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Je(n,t))return;e.uniform3fv(this.addr,t),$e(n,t)}}function WR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4fv(this.addr,t),$e(n,t)}}function YR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$e(n,t)}else{if(Je(n,i))return;Jg.set(i),e.uniformMatrix2fv(this.addr,!1,Jg),$e(n,i)}}function qR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$e(n,t)}else{if(Je(n,i))return;Qg.set(i),e.uniformMatrix3fv(this.addr,!1,Qg),$e(n,i)}}function jR(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Je(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$e(n,t)}else{if(Je(n,i))return;Kg.set(i),e.uniformMatrix4fv(this.addr,!1,Kg),$e(n,i)}}function ZR(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function KR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2iv(this.addr,t),$e(n,t)}}function QR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Je(n,t))return;e.uniform3iv(this.addr,t),$e(n,t)}}function JR(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4iv(this.addr,t),$e(n,t)}}function $R(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function t2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Je(n,t))return;e.uniform2uiv(this.addr,t),$e(n,t)}}function e2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Je(n,t))return;e.uniform3uiv(this.addr,t),$e(n,t)}}function n2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Je(n,t))return;e.uniform4uiv(this.addr,t),$e(n,t)}}function i2(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let s;this.type===e.SAMPLER_2D_SHADOW?(sp.compareFunction=n.isReversedDepthBuffer()?gm:mm,s=sp):s=qS,n.setTexture2D(t||s,a)}function a2(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||ZS,a)}function s2(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||KS,a)}function r2(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||jS,a)}function o2(e){switch(e){case 5126:return VR;case 35664:return XR;case 35665:return kR;case 35666:return WR;case 35674:return YR;case 35675:return qR;case 35676:return jR;case 5124:case 35670:return ZR;case 35667:case 35671:return KR;case 35668:case 35672:return QR;case 35669:case 35673:return JR;case 5125:return $R;case 36294:return t2;case 36295:return e2;case 36296:return n2;case 35678:case 36198:case 36298:case 36306:case 35682:return i2;case 35679:case 36299:case 36307:return a2;case 35680:case 36300:case 36308:case 36293:return s2;case 36289:case 36303:case 36311:case 36292:return r2}}function l2(e,t){e.uniform1fv(this.addr,t)}function c2(e,t){const n=ao(t,this.size,2);e.uniform2fv(this.addr,n)}function u2(e,t){const n=ao(t,this.size,3);e.uniform3fv(this.addr,n)}function f2(e,t){const n=ao(t,this.size,4);e.uniform4fv(this.addr,n)}function h2(e,t){const n=ao(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function d2(e,t){const n=ao(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function p2(e,t){const n=ao(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function m2(e,t){e.uniform1iv(this.addr,t)}function g2(e,t){e.uniform2iv(this.addr,t)}function _2(e,t){e.uniform3iv(this.addr,t)}function v2(e,t){e.uniform4iv(this.addr,t)}function x2(e,t){e.uniform1uiv(this.addr,t)}function S2(e,t){e.uniform2uiv(this.addr,t)}function y2(e,t){e.uniform3uiv(this.addr,t)}function M2(e,t){e.uniform4uiv(this.addr,t)}function E2(e,t,n){const i=this.cache,a=t.length,s=Ju(n,a);Je(i,s)||(e.uniform1iv(this.addr,s),$e(i,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=sp:r=qS;for(let o=0;o!==a;++o)n.setTexture2D(t[o]||r,s[o])}function b2(e,t,n){const i=this.cache,a=t.length,s=Ju(n,a);Je(i,s)||(e.uniform1iv(this.addr,s),$e(i,s));for(let r=0;r!==a;++r)n.setTexture3D(t[r]||ZS,s[r])}function T2(e,t,n){const i=this.cache,a=t.length,s=Ju(n,a);Je(i,s)||(e.uniform1iv(this.addr,s),$e(i,s));for(let r=0;r!==a;++r)n.setTextureCube(t[r]||KS,s[r])}function A2(e,t,n){const i=this.cache,a=t.length,s=Ju(n,a);Je(i,s)||(e.uniform1iv(this.addr,s),$e(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(t[r]||jS,s[r])}function R2(e){switch(e){case 5126:return l2;case 35664:return c2;case 35665:return u2;case 35666:return f2;case 35674:return h2;case 35675:return d2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return g2;case 35668:case 35672:return _2;case 35669:case 35673:return v2;case 5125:return x2;case 36294:return S2;case 36295:return y2;case 36296:return M2;case 35678:case 36198:case 36298:case 36306:case 35682:return E2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return T2;case 36289:case 36303:case 36311:case 36292:return A2}}class C2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=o2(n.type)}}class w2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=R2(n.type)}}class D2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(t,n[o.id],i)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function $g(e,t){e.seq.push(t),e.map[t.id]=t}function U2(e,t,n){const i=e.name,a=i.length;for(gh.lastIndex=0;;){const s=gh.exec(i),r=gh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){$g(n,c===void 0?new C2(o,e,t):new w2(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new D2(o),$g(n,p)),n=p}}}class Vc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);U2(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(t,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,s=t.length;a!==s;++a){const r=t[a];r.id in n&&i.push(r)}return i}}function t_(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const L2=37297;let N2=0;function O2(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const e_=new Ft;function P2(e){se._getMatrix(e_,se.workingColorSpace,e);const t=`mat3( ${e_.elements.map(n=>n.toFixed(4))} )`;switch(se.getTransfer(e)){case yu:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function n_(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+O2(e.getShaderSource(t),o)}else return s}function B2(e,t){const n=P2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const I2={[_S]:"Linear",[vS]:"Reinhard",[xS]:"Cineon",[SS]:"ACESFilmic",[MS]:"AgX",[ES]:"Neutral",[yS]:"Custom"};function z2(e,t){const n=I2[t];return n===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Sc=new O;function F2(){se.getLuminanceCoefficients(Sc);const e=Sc.x.toFixed(4),t=Sc.y.toFixed(4),n=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function G2(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function V2(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=e.getActiveAttrib(t,a),r=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Po(e){return e!==""}function i_(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function a_(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const X2=/^[ \t]*#include +<([\w\d./]+)>/gm;function rp(e){return e.replace(X2,W2)}const k2=new Map;function W2(e,t){let n=jt[t];if(n===void 0){const i=k2.get(t);if(i!==void 0)n=jt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return rp(n)}const Y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s_(e){return e.replace(Y2,q2)}function q2(e,t,n,i){let a="";for(let s=parseInt(t);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function r_(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}const j2={[Bc]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function Z2(e){return j2[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const K2={[ws]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE",[Zu]:"ENVMAP_TYPE_CUBE_UV"};function Q2(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":K2[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const J2={[Yr]:"ENVMAP_MODE_REFRACTION"};function $2(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":J2[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const t3={[gS]:"ENVMAP_BLENDING_MULTIPLY",[bb]:"ENVMAP_BLENDING_MIX",[Tb]:"ENVMAP_BLENDING_ADD"};function e3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":t3[e.combine]||"ENVMAP_BLENDING_NONE"}function n3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function i3(e,t,n,i){const a=e.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=Z2(n),c=Q2(n),h=$2(n),p=e3(n),u=n3(n),d=H2(n),v=G2(s),E=a.createProgram();let g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Po).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Po).join(`
`),f.length>0&&(f+=`
`)):(g=[r_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),f=[r_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?jt.tonemapping_pars_fragment:"",n.toneMapping!==Pi?z2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,B2("linearToOutputTexel",n.outputColorSpace),F2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Po).join(`
`)),r=rp(r),r=i_(r,n),r=a_(r,n),o=rp(o),o=i_(o,n),o=a_(o,n),r=s_(r),o=s_(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===cg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=m+g+r,S=m+f+o,C=t_(a,a.VERTEX_SHADER,_),b=t_(a,a.FRAGMENT_SHADER,S);a.attachShader(E,C),a.attachShader(E,b),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function R(U){if(e.debug.checkShaderErrors){const F=a.getProgramInfoLog(E)||"",q=a.getShaderInfoLog(C)||"",nt=a.getShaderInfoLog(b)||"",I=F.trim(),N=q.trim(),P=nt.trim();let W=!0,tt=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(W=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,E,C,b);else{const ot=n_(a,C,"vertex"),Mt=n_(a,b,"fragment");ae("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+I+`
`+ot+`
`+Mt)}else I!==""?Nt("WebGLProgram: Program Info Log:",I):(N===""||P==="")&&(tt=!1);tt&&(U.diagnostics={runnable:W,programLog:I,vertexShader:{log:N,prefix:g},fragmentShader:{log:P,prefix:f}})}a.deleteShader(C),a.deleteShader(b),x=new Vc(a,E),A=V2(a,E)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(E,L2)),D},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=N2++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=b,this}let a3=0;class s3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new r3(t),n.set(t,i)),i}}class r3{constructor(t){this.id=a3++,this.code=t,this.usedTimes=0}}function o3(e){return e===Ds||e===vu||e===xu}function l3(e,t,n,i,a,s){const r=new xm,o=new s3,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function E(x,A,D,U,F,q){const nt=U.fog,I=F.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=t.get(x.envMap||N,P),tt=W&&W.mapping===Zu?W.image.height:null,ot=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Nt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const Mt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ct=Mt!==void 0?Mt.length:0;let Pt=0;I.morphAttributes.position!==void 0&&(Pt=1),I.morphAttributes.normal!==void 0&&(Pt=2),I.morphAttributes.color!==void 0&&(Pt=3);let qt,Dt,et,mt;if(ot){const wt=Ci[ot];qt=wt.vertexShader,Dt=wt.fragmentShader}else qt=x.vertexShader,Dt=x.fragmentShader,o.update(x),et=o.getVertexShaderID(x),mt=o.getFragmentShaderID(x);const ht=e.getRenderTarget(),Ut=e.state.buffers.depth.getReversed(),It=F.isInstancedMesh===!0,Lt=F.isBatchedMesh===!0,we=!!x.map,kt=!!x.matcap,ue=!!W,_e=!!x.aoMap,zt=!!x.lightMap,Kt=!!x.bumpMap,Qt=!!x.normalMap,Me=!!x.displacementMap,B=!!x.emissiveMap,Be=!!x.metalnessMap,Jt=!!x.roughnessMap,fe=x.anisotropy>0,pt=x.clearcoat>0,Ae=x.dispersion>0,T=x.iridescence>0,y=x.sheen>0,H=x.transmission>0,K=fe&&!!x.anisotropyMap,st=pt&&!!x.clearcoatMap,ut=pt&&!!x.clearcoatNormalMap,dt=pt&&!!x.clearcoatRoughnessMap,Z=T&&!!x.iridescenceMap,J=T&&!!x.iridescenceThicknessMap,gt=y&&!!x.sheenColorMap,yt=y&&!!x.sheenRoughnessMap,ft=!!x.specularMap,L=!!x.specularColorMap,Y=!!x.specularIntensityMap,it=H&&!!x.transmissionMap,lt=H&&!!x.thicknessMap,w=!!x.gradientMap,j=!!x.alphaMap,X=x.alphaTest>0,rt=!!x.alphaHash,at=!!x.extensions;let Q=Pi;x.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Q=e.toneMapping);const vt={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:qt,fragmentShader:Dt,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:mt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Lt,batchingColor:Lt&&F._colorsTexture!==null,instancing:It,instancingColor:It&&F.instanceColor!==null,instancingMorph:It&&F.morphTexture!==null,outputColorSpace:ht===null?e.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:we,matcap:kt,envMap:ue,envMapMode:ue&&W.mapping,envMapCubeUVHeight:tt,aoMap:_e,lightMap:zt,bumpMap:Kt,normalMap:Qt,displacementMap:Me,emissiveMap:B,normalMapObjectSpace:Qt&&x.normalMapType===Cb,normalMapTangentSpace:Qt&&x.normalMapType===ep,packedNormalMap:Qt&&x.normalMapType===ep&&o3(x.normalMap.format),metalnessMap:Be,roughnessMap:Jt,anisotropy:fe,anisotropyMap:K,clearcoat:pt,clearcoatMap:st,clearcoatNormalMap:ut,clearcoatRoughnessMap:dt,dispersion:Ae,iridescence:T,iridescenceMap:Z,iridescenceThicknessMap:J,sheen:y,sheenColorMap:gt,sheenRoughnessMap:yt,specularMap:ft,specularColorMap:L,specularIntensityMap:Y,transmission:H,transmissionMap:it,thicknessMap:lt,gradientMap:w,opaque:x.transparent===!1&&x.blending===Lr&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:X,alphaHash:rt,combine:x.combine,mapUv:we&&v(x.map.channel),aoMapUv:_e&&v(x.aoMap.channel),lightMapUv:zt&&v(x.lightMap.channel),bumpMapUv:Kt&&v(x.bumpMap.channel),normalMapUv:Qt&&v(x.normalMap.channel),displacementMapUv:Me&&v(x.displacementMap.channel),emissiveMapUv:B&&v(x.emissiveMap.channel),metalnessMapUv:Be&&v(x.metalnessMap.channel),roughnessMapUv:Jt&&v(x.roughnessMap.channel),anisotropyMapUv:K&&v(x.anisotropyMap.channel),clearcoatMapUv:st&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:yt&&v(x.sheenRoughnessMap.channel),specularMapUv:ft&&v(x.specularMap.channel),specularColorMapUv:L&&v(x.specularColorMap.channel),specularIntensityMapUv:Y&&v(x.specularIntensityMap.channel),transmissionMapUv:it&&v(x.transmissionMap.channel),thicknessMapUv:lt&&v(x.thicknessMap.channel),alphaMapUv:j&&v(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Qt||fe),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(we||j),fog:!!nt,useFog:x.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Qt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ut,skinning:F.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Pt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:Q,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===de,decodeVideoTextureEmissive:B&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===de,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ji,flipSided:x.side===Nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function g(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)A.push(D),A.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(f(A,x),m(A,x),A.push(e.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function f(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function m(x,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),x.push(r.mask)}function _(x){const A=d[x.type];let D;if(A){const U=Ci[A];D=wT.clone(U.uniforms)}else D=x.uniforms;return D}function S(x,A){let D=h.get(A);return D!==void 0?++D.usedTimes:(D=new i3(e,A,x,a),c.push(D),h.set(A,D)),D}function C(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function R(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:_,acquireProgram:S,releaseProgram:C,releaseShaderCache:b,programs:c,dispose:R}}function c3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function a(r,o,l){e.get(r)[o]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:s}}function u3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function o_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function l_(){const e=[];let t=0;const n=[],i=[],a=[];function s(){t=0,n.length=0,i.length=0,a.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,E,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:v,materialVariant:r(u),groupOrder:E,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=v,m.materialVariant=r(u),m.groupOrder=E,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,d,v,E,g,f){const m=o(u,d,v,E,g,f);v.transmission>0?i.push(m):v.transparent===!0?a.push(m):n.push(m)}function c(u,d,v,E,g,f){const m=o(u,d,v,E,g,f);v.transmission>0?i.unshift(m):v.transparent===!0?a.unshift(m):n.unshift(m)}function h(u,d){n.length>1&&n.sort(u||u3),i.length>1&&i.sort(d||o_),a.length>1&&a.sort(d||o_)}function p(){for(let u=t,d=e.length;u<d;u++){const v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:p,sort:h}}function f3(){let e=new WeakMap;function t(i,a){const s=e.get(i);let r;return s===void 0?(r=new l_,e.set(i,[r])):a>=s.length?(r=new l_,s.push(r)):r=s[a],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function h3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new O,color:new Yt};break;case"SpotLight":n={position:new O,direction:new O,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":n={color:new Yt,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=n,n}}}function d3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let p3=0;function m3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function g3(e){const t=new h3,n=d3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const a=new O,s=new Pe,r=new Pe;function o(c){let h=0,p=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,v=0,E=0,g=0,f=0,m=0,_=0,S=0,C=0,b=0,R=0;c.sort(m3);for(let A=0,D=c.length;A<D;A++){const U=c[A],F=U.color,q=U.intensity,nt=U.distance;let I=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ds?I=U.shadow.map.texture:I=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=F.r*q,p+=F.g*q,u+=F.b*q;else if(U.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(U.sh.coefficients[N],q);R++}else if(U.isDirectionalLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const P=U.shadow,W=n.get(U);W.shadowIntensity=P.intensity,W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=I,i.directionalShadowMatrix[d]=U.shadow.matrix,m++}i.directional[d]=N,d++}else if(U.isSpotLight){const N=t.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(F).multiplyScalar(q),N.distance=nt,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,i.spot[E]=N;const P=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,P.updateMatrices(U),U.castShadow&&b++),i.spotLightMatrix[E]=P.matrix,U.castShadow){const W=n.get(U);W.shadowIntensity=P.intensity,W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,i.spotShadow[E]=W,i.spotShadowMap[E]=I,S++}E++}else if(U.isRectAreaLight){const N=t.get(U);N.color.copy(F).multiplyScalar(q),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=N,g++}else if(U.isPointLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),N.distance=U.distance,N.decay=U.decay,U.castShadow){const P=U.shadow,W=n.get(U);W.shadowIntensity=P.intensity,W.shadowBias=P.bias,W.shadowNormalBias=P.normalBias,W.shadowRadius=P.radius,W.shadowMapSize=P.mapSize,W.shadowCameraNear=P.camera.near,W.shadowCameraFar=P.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=I,i.pointShadowMatrix[v]=U.shadow.matrix,_++}i.point[v]=N,v++}else if(U.isHemisphereLight){const N=t.get(U);N.skyColor.copy(U.color).multiplyScalar(q),N.groundColor.copy(U.groundColor).multiplyScalar(q),i.hemi[f]=N,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==d||x.pointLength!==v||x.spotLength!==E||x.rectAreaLength!==g||x.hemiLength!==f||x.numDirectionalShadows!==m||x.numPointShadows!==_||x.numSpotShadows!==S||x.numSpotMaps!==C||x.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=E,i.rectArea.length=g,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,x.directionalLength=d,x.pointLength=v,x.spotLength=E,x.rectAreaLength=g,x.hemiLength=f,x.numDirectionalShadows=m,x.numPointShadows=_,x.numSpotShadows=S,x.numSpotMaps=C,x.numLightProbes=R,i.version=p3++)}function l(c,h){let p=0,u=0,d=0,v=0,E=0;const g=h.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const _=c[f];if(_.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),p++}else if(_.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),d++}else if(_.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),r.identity(),s.copy(_.matrixWorld),s.premultiply(g),r.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),v++}else if(_.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function c_(e){const t=new g3(e),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function _3(e){let t=new WeakMap;function n(a,s=0){const r=t.get(a);let o;return r===void 0?(o=new c_(e),t.set(a,[o])):s>=r.length?(o=new c_(e),r.push(o)):o=r[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const v3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x3=`uniform sampler2D shadow_pass;
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
}`,S3=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],y3=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],u_=new Pe,Co=new O,_h=new O;function M3(e,t,n){let i=new Mm;const a=new Ht,s=new Ht,r=new He,o=new NT,l=new OT,c={},h=n.maxTextureSize,p={[ts]:Nn,[Nn]:ts,[Ji]:Ji},u=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:v3,fragmentShader:x3}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const v=new Bn;v.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new xn(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let f=this.type;this.render=function(b,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===sb&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const A=e.getRenderTarget(),D=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),F=e.state;F.setBlending(ra),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const q=f!==this.type;q&&R.traverse(function(nt){nt.material&&(Array.isArray(nt.material)?nt.material.forEach(I=>I.needsUpdate=!0):nt.material.needsUpdate=!0)});for(let nt=0,I=b.length;nt<I;nt++){const N=b[nt],P=N.shadow;if(P===void 0){Nt("WebGLShadowMap:",N,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const W=P.getFrameExtents();a.multiply(W),s.copy(P.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/W.x),a.x=s.x*W.x,P.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/W.y),a.y=s.y*W.y,P.mapSize.y=s.y));const tt=e.state.buffers.depth.getReversed();if(P.camera._reversedDepth=tt,P.map===null||q===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Oo){if(N.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Bi(a.x,a.y,{format:Ds,type:pa,minFilter:sn,magFilter:sn,generateMipmaps:!1}),P.map.texture.name=N.name+".shadowMap",P.map.depthTexture=new qr(a.x,a.y,Li),P.map.depthTexture.name=N.name+".shadowMapDepth",P.map.depthTexture.format=ma,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=hn,P.map.depthTexture.magFilter=hn}else N.isPointLight?(P.map=new YS(a.x),P.map.depthTexture=new RT(a.x,Ii)):(P.map=new Bi(a.x,a.y),P.map.depthTexture=new qr(a.x,a.y,Ii)),P.map.depthTexture.name=N.name+".shadowMap",P.map.depthTexture.format=ma,this.type===Bc?(P.map.depthTexture.compareFunction=tt?gm:mm,P.map.depthTexture.minFilter=sn,P.map.depthTexture.magFilter=sn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=hn,P.map.depthTexture.magFilter=hn);P.camera.updateProjectionMatrix()}const ot=P.map.isWebGLCubeRenderTarget?6:1;for(let Mt=0;Mt<ot;Mt++){if(P.map.isWebGLCubeRenderTarget)e.setRenderTarget(P.map,Mt),e.clear();else{Mt===0&&(e.setRenderTarget(P.map),e.clear());const ct=P.getViewport(Mt);r.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),F.viewport(r)}if(N.isPointLight){const ct=P.camera,Pt=P.matrix,qt=N.distance||ct.far;qt!==ct.far&&(ct.far=qt,ct.updateProjectionMatrix()),Co.setFromMatrixPosition(N.matrixWorld),ct.position.copy(Co),_h.copy(ct.position),_h.add(S3[Mt]),ct.up.copy(y3[Mt]),ct.lookAt(_h),ct.updateMatrixWorld(),Pt.makeTranslation(-Co.x,-Co.y,-Co.z),u_.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),P._frustum.setFromProjectionMatrix(u_,ct.coordinateSystem,ct.reversedDepth)}else P.updateMatrices(N);i=P.getFrustum(),S(R,x,P.camera,N,this.type)}P.isPointLightShadow!==!0&&this.type===Oo&&m(P,x),P.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(A,D,U)};function m(b,R){const x=t.update(E);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Bi(a.x,a.y,{format:Ds,type:pa})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(R,null,x,u,E,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(R,null,x,d,E,null)}function _(b,R,x,A){let D=null;const U=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)D=U;else if(D=x.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=D.uuid,q=R.uuid;let nt=c[F];nt===void 0&&(nt={},c[F]=nt);let I=nt[q];I===void 0&&(I=D.clone(),nt[q]=I,R.addEventListener("dispose",C)),D=I}if(D.visible=R.visible,D.wireframe=R.wireframe,A===Oo?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:p[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const F=e.properties.get(D);F.light=x}return D}function S(b,R,x,A,D){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Oo)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const q=t.update(b),nt=b.material;if(Array.isArray(nt)){const I=q.groups;for(let N=0,P=I.length;N<P;N++){const W=I[N],tt=nt[W.materialIndex];if(tt&&tt.visible){const ot=_(b,tt,A,D);b.onBeforeShadow(e,b,R,x,q,ot,W),e.renderBufferDirect(x,null,q,ot,b,W),b.onAfterShadow(e,b,R,x,q,ot,W)}}}else if(nt.visible){const I=_(b,nt,A,D);b.onBeforeShadow(e,b,R,x,q,I,null),e.renderBufferDirect(x,null,q,I,b,null),b.onAfterShadow(e,b,R,x,q,I,null)}}const F=b.children;for(let q=0,nt=F.length;q<nt;q++)S(F[q],R,x,A,D)}function C(b){b.target.removeEventListener("dispose",C);for(const x in c){const A=c[x],D=b.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function E3(e,t){function n(){let w=!1;const j=new He;let X=null;const rt=new He(0,0,0,0);return{setMask:function(at){X!==at&&!w&&(e.colorMask(at,at,at,at),X=at)},setLocked:function(at){w=at},setClear:function(at,Q,vt,wt,Bt){Bt===!0&&(at*=wt,Q*=wt,vt*=wt),j.set(at,Q,vt,wt),rt.equals(j)===!1&&(e.clearColor(at,Q,vt,wt),rt.copy(j))},reset:function(){w=!1,X=null,rt.set(-1,0,0,0)}}}function i(){let w=!1,j=!1,X=null,rt=null,at=null;return{setReversed:function(Q){if(j!==Q){const vt=t.get("EXT_clip_control");Q?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),j=Q;const wt=at;at=null,this.setClear(wt)}},getReversed:function(){return j},setTest:function(Q){Q?ht(e.DEPTH_TEST):Ut(e.DEPTH_TEST)},setMask:function(Q){X!==Q&&!w&&(e.depthMask(Q),X=Q)},setFunc:function(Q){if(j&&(Q=zb[Q]),rt!==Q){switch(Q){case gd:e.depthFunc(e.NEVER);break;case _d:e.depthFunc(e.ALWAYS);break;case vd:e.depthFunc(e.LESS);break;case Wr:e.depthFunc(e.LEQUAL);break;case xd:e.depthFunc(e.EQUAL);break;case Sd:e.depthFunc(e.GEQUAL);break;case yd:e.depthFunc(e.GREATER);break;case Md:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}rt=Q}},setLocked:function(Q){w=Q},setClear:function(Q){at!==Q&&(at=Q,j&&(Q=1-Q),e.clearDepth(Q))},reset:function(){w=!1,X=null,rt=null,at=null,j=!1}}}function a(){let w=!1,j=null,X=null,rt=null,at=null,Q=null,vt=null,wt=null,Bt=null;return{setTest:function(Wt){w||(Wt?ht(e.STENCIL_TEST):Ut(e.STENCIL_TEST))},setMask:function(Wt){j!==Wt&&!w&&(e.stencilMask(Wt),j=Wt)},setFunc:function(Wt,tn,$t){(X!==Wt||rt!==tn||at!==$t)&&(e.stencilFunc(Wt,tn,$t),X=Wt,rt=tn,at=$t)},setOp:function(Wt,tn,$t){(Q!==Wt||vt!==tn||wt!==$t)&&(e.stencilOp(Wt,tn,$t),Q=Wt,vt=tn,wt=$t)},setLocked:function(Wt){w=Wt},setClear:function(Wt){Bt!==Wt&&(e.clearStencil(Wt),Bt=Wt)},reset:function(){w=!1,j=null,X=null,rt=null,at=null,Q=null,vt=null,wt=null,Bt=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let h={},p={},u={},d=new WeakMap,v=[],E=null,g=!1,f=null,m=null,_=null,S=null,C=null,b=null,R=null,x=new Yt(0,0,0),A=0,D=!1,U=null,F=null,q=null,nt=null,I=null;const N=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,W=0;const tt=e.getParameter(e.VERSION);tt.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(tt)[1]),P=W>=1):tt.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),P=W>=2);let ot=null,Mt={};const ct=e.getParameter(e.SCISSOR_BOX),Pt=e.getParameter(e.VIEWPORT),qt=new He().fromArray(ct),Dt=new He().fromArray(Pt);function et(w,j,X,rt){const at=new Uint8Array(4),Q=e.createTexture();e.bindTexture(w,Q),e.texParameteri(w,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(w,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let vt=0;vt<X;vt++)w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,rt,0,e.RGBA,e.UNSIGNED_BYTE,at):e.texImage2D(j+vt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,at);return Q}const mt={};mt[e.TEXTURE_2D]=et(e.TEXTURE_2D,e.TEXTURE_2D,1),mt[e.TEXTURE_CUBE_MAP]=et(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[e.TEXTURE_2D_ARRAY]=et(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),mt[e.TEXTURE_3D]=et(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ht(e.DEPTH_TEST),r.setFunc(Wr),Kt(!1),Qt(sg),ht(e.CULL_FACE),_e(ra);function ht(w){h[w]!==!0&&(e.enable(w),h[w]=!0)}function Ut(w){h[w]!==!1&&(e.disable(w),h[w]=!1)}function It(w,j){return u[w]!==j?(e.bindFramebuffer(w,j),u[w]=j,w===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=j),w===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=j),!0):!1}function Lt(w,j){let X=v,rt=!1;if(w){X=d.get(j),X===void 0&&(X=[],d.set(j,X));const at=w.textures;if(X.length!==at.length||X[0]!==e.COLOR_ATTACHMENT0){for(let Q=0,vt=at.length;Q<vt;Q++)X[Q]=e.COLOR_ATTACHMENT0+Q;X.length=at.length,rt=!0}}else X[0]!==e.BACK&&(X[0]=e.BACK,rt=!0);rt&&e.drawBuffers(X)}function we(w){return E!==w?(e.useProgram(w),E=w,!0):!1}const kt={[ms]:e.FUNC_ADD,[ob]:e.FUNC_SUBTRACT,[lb]:e.FUNC_REVERSE_SUBTRACT};kt[cb]=e.MIN,kt[ub]=e.MAX;const ue={[fb]:e.ZERO,[hb]:e.ONE,[db]:e.SRC_COLOR,[pd]:e.SRC_ALPHA,[xb]:e.SRC_ALPHA_SATURATE,[_b]:e.DST_COLOR,[mb]:e.DST_ALPHA,[pb]:e.ONE_MINUS_SRC_COLOR,[md]:e.ONE_MINUS_SRC_ALPHA,[vb]:e.ONE_MINUS_DST_COLOR,[gb]:e.ONE_MINUS_DST_ALPHA,[Sb]:e.CONSTANT_COLOR,[yb]:e.ONE_MINUS_CONSTANT_COLOR,[Mb]:e.CONSTANT_ALPHA,[Eb]:e.ONE_MINUS_CONSTANT_ALPHA};function _e(w,j,X,rt,at,Q,vt,wt,Bt,Wt){if(w===ra){g===!0&&(Ut(e.BLEND),g=!1);return}if(g===!1&&(ht(e.BLEND),g=!0),w!==rb){if(w!==f||Wt!==D){if((m!==ms||C!==ms)&&(e.blendEquation(e.FUNC_ADD),m=ms,C=ms),Wt)switch(w){case Lr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Er:e.blendFunc(e.ONE,e.ONE);break;case rg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case og:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ae("WebGLState: Invalid blending: ",w);break}else switch(w){case Lr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Er:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case rg:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case og:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",w);break}_=null,S=null,b=null,R=null,x.set(0,0,0),A=0,f=w,D=Wt}return}at=at||j,Q=Q||X,vt=vt||rt,(j!==m||at!==C)&&(e.blendEquationSeparate(kt[j],kt[at]),m=j,C=at),(X!==_||rt!==S||Q!==b||vt!==R)&&(e.blendFuncSeparate(ue[X],ue[rt],ue[Q],ue[vt]),_=X,S=rt,b=Q,R=vt),(wt.equals(x)===!1||Bt!==A)&&(e.blendColor(wt.r,wt.g,wt.b,Bt),x.copy(wt),A=Bt),f=w,D=!1}function zt(w,j){w.side===Ji?Ut(e.CULL_FACE):ht(e.CULL_FACE);let X=w.side===Nn;j&&(X=!X),Kt(X),w.blending===Lr&&w.transparent===!1?_e(ra):_e(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),r.setFunc(w.depthFunc),r.setTest(w.depthTest),r.setMask(w.depthWrite),s.setMask(w.colorWrite);const rt=w.stencilWrite;o.setTest(rt),rt&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),B(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ht(e.SAMPLE_ALPHA_TO_COVERAGE):Ut(e.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(w){U!==w&&(w?e.frontFace(e.CW):e.frontFace(e.CCW),U=w)}function Qt(w){w!==ib?(ht(e.CULL_FACE),w!==F&&(w===sg?e.cullFace(e.BACK):w===ab?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ut(e.CULL_FACE),F=w}function Me(w){w!==q&&(P&&e.lineWidth(w),q=w)}function B(w,j,X){w?(ht(e.POLYGON_OFFSET_FILL),(nt!==j||I!==X)&&(nt=j,I=X,r.getReversed()&&(j=-j),e.polygonOffset(j,X))):Ut(e.POLYGON_OFFSET_FILL)}function Be(w){w?ht(e.SCISSOR_TEST):Ut(e.SCISSOR_TEST)}function Jt(w){w===void 0&&(w=e.TEXTURE0+N-1),ot!==w&&(e.activeTexture(w),ot=w)}function fe(w,j,X){X===void 0&&(ot===null?X=e.TEXTURE0+N-1:X=ot);let rt=Mt[X];rt===void 0&&(rt={type:void 0,texture:void 0},Mt[X]=rt),(rt.type!==w||rt.texture!==j)&&(ot!==X&&(e.activeTexture(X),ot=X),e.bindTexture(w,j||mt[w]),rt.type=w,rt.texture=j)}function pt(){const w=Mt[ot];w!==void 0&&w.type!==void 0&&(e.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Ae(){try{e.compressedTexImage2D(...arguments)}catch(w){ae("WebGLState:",w)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(w){ae("WebGLState:",w)}}function y(){try{e.texSubImage2D(...arguments)}catch(w){ae("WebGLState:",w)}}function H(){try{e.texSubImage3D(...arguments)}catch(w){ae("WebGLState:",w)}}function K(){try{e.compressedTexSubImage2D(...arguments)}catch(w){ae("WebGLState:",w)}}function st(){try{e.compressedTexSubImage3D(...arguments)}catch(w){ae("WebGLState:",w)}}function ut(){try{e.texStorage2D(...arguments)}catch(w){ae("WebGLState:",w)}}function dt(){try{e.texStorage3D(...arguments)}catch(w){ae("WebGLState:",w)}}function Z(){try{e.texImage2D(...arguments)}catch(w){ae("WebGLState:",w)}}function J(){try{e.texImage3D(...arguments)}catch(w){ae("WebGLState:",w)}}function gt(w){return p[w]!==void 0?p[w]:e.getParameter(w)}function yt(w,j){p[w]!==j&&(e.pixelStorei(w,j),p[w]=j)}function ft(w){qt.equals(w)===!1&&(e.scissor(w.x,w.y,w.z,w.w),qt.copy(w))}function L(w){Dt.equals(w)===!1&&(e.viewport(w.x,w.y,w.z,w.w),Dt.copy(w))}function Y(w,j){let X=c.get(j);X===void 0&&(X=new WeakMap,c.set(j,X));let rt=X.get(w);rt===void 0&&(rt=e.getUniformBlockIndex(j,w.name),X.set(w,rt))}function it(w,j){const rt=c.get(j).get(w);l.get(j)!==rt&&(e.uniformBlockBinding(j,rt,w.__bindingPointIndex),l.set(j,rt))}function lt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},ot=null,Mt={},u={},d=new WeakMap,v=[],E=null,g=!1,f=null,m=null,_=null,S=null,C=null,b=null,R=null,x=new Yt(0,0,0),A=0,D=!1,U=null,F=null,q=null,nt=null,I=null,qt.set(0,0,e.canvas.width,e.canvas.height),Dt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ht,disable:Ut,bindFramebuffer:It,drawBuffers:Lt,useProgram:we,setBlending:_e,setMaterial:zt,setFlipSided:Kt,setCullFace:Qt,setLineWidth:Me,setPolygonOffset:B,setScissorTest:Be,activeTexture:Jt,bindTexture:fe,unbindTexture:pt,compressedTexImage2D:Ae,compressedTexImage3D:T,texImage2D:Z,texImage3D:J,pixelStorei:yt,getParameter:gt,updateUBOMapping:Y,uniformBlockBinding:it,texStorage2D:ut,texStorage3D:dt,texSubImage2D:y,texSubImage3D:H,compressedTexSubImage2D:K,compressedTexSubImage3D:st,scissor:ft,viewport:L,reset:lt}}function b3(e,t,n,i,a,s,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,h=new WeakMap,p=new Set;let u;const d=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,y){return v?new OffscreenCanvas(T,y):Mu("canvas")}function g(T,y,H){let K=1;const st=Ae(T);if((st.width>H||st.height>H)&&(K=H/Math.max(st.width,st.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ut=Math.floor(K*st.width),dt=Math.floor(K*st.height);u===void 0&&(u=E(ut,dt));const Z=y?E(ut,dt):u;return Z.width=ut,Z.height=dt,Z.getContext("2d").drawImage(T,0,0,ut,dt),Nt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ut+"x"+dt+")."),Z}else return"data"in T&&Nt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function f(T){return T.generateMipmaps}function m(T){e.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(T,y,H,K,st,ut=!1){if(T!==null){if(e[T]!==void 0)return e[T];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let dt;K&&(dt=t.get("EXT_texture_norm16"),dt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===e.RED&&(H===e.FLOAT&&(Z=e.R32F),H===e.HALF_FLOAT&&(Z=e.R16F),H===e.UNSIGNED_BYTE&&(Z=e.R8),H===e.UNSIGNED_SHORT&&dt&&(Z=dt.R16_EXT),H===e.SHORT&&dt&&(Z=dt.R16_SNORM_EXT)),y===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(Z=e.R8UI),H===e.UNSIGNED_SHORT&&(Z=e.R16UI),H===e.UNSIGNED_INT&&(Z=e.R32UI),H===e.BYTE&&(Z=e.R8I),H===e.SHORT&&(Z=e.R16I),H===e.INT&&(Z=e.R32I)),y===e.RG&&(H===e.FLOAT&&(Z=e.RG32F),H===e.HALF_FLOAT&&(Z=e.RG16F),H===e.UNSIGNED_BYTE&&(Z=e.RG8),H===e.UNSIGNED_SHORT&&dt&&(Z=dt.RG16_EXT),H===e.SHORT&&dt&&(Z=dt.RG16_SNORM_EXT)),y===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(Z=e.RG8UI),H===e.UNSIGNED_SHORT&&(Z=e.RG16UI),H===e.UNSIGNED_INT&&(Z=e.RG32UI),H===e.BYTE&&(Z=e.RG8I),H===e.SHORT&&(Z=e.RG16I),H===e.INT&&(Z=e.RG32I)),y===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),H===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),H===e.UNSIGNED_INT&&(Z=e.RGB32UI),H===e.BYTE&&(Z=e.RGB8I),H===e.SHORT&&(Z=e.RGB16I),H===e.INT&&(Z=e.RGB32I)),y===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),H===e.UNSIGNED_INT&&(Z=e.RGBA32UI),H===e.BYTE&&(Z=e.RGBA8I),H===e.SHORT&&(Z=e.RGBA16I),H===e.INT&&(Z=e.RGBA32I)),y===e.RGB&&(H===e.UNSIGNED_SHORT&&dt&&(Z=dt.RGB16_EXT),H===e.SHORT&&dt&&(Z=dt.RGB16_SNORM_EXT),H===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),H===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),y===e.RGBA){const J=ut?yu:se.getTransfer(st);H===e.FLOAT&&(Z=e.RGBA32F),H===e.HALF_FLOAT&&(Z=e.RGBA16F),H===e.UNSIGNED_BYTE&&(Z=J===de?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT&&dt&&(Z=dt.RGBA16_EXT),H===e.SHORT&&dt&&(Z=dt.RGBA16_SNORM_EXT),H===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function C(T,y){let H;return T?y===null||y===Ii||y===dl?H=e.DEPTH24_STENCIL8:y===Li?H=e.DEPTH32F_STENCIL8:y===hl&&(H=e.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ii||y===dl?H=e.DEPTH_COMPONENT24:y===Li?H=e.DEPTH_COMPONENT32F:y===hl&&(H=e.DEPTH_COMPONENT16),H}function b(T,y){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==hn&&T.minFilter!==sn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function R(T){const y=T.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&p.delete(y)}function x(T){const y=T.target;y.removeEventListener("dispose",x),U(y)}function A(T){const y=i.get(T);if(y.__webglInit===void 0)return;const H=T.source,K=d.get(H);if(K){const st=K[y.__cacheKey];st.usedTimes--,st.usedTimes===0&&D(T),Object.keys(K).length===0&&d.delete(H)}i.remove(T)}function D(T){const y=i.get(T);e.deleteTexture(y.__webglTexture);const H=T.source,K=d.get(H);delete K[y.__cacheKey],r.memory.textures--}function U(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let st=0;st<y.__webglFramebuffer[K].length;st++)e.deleteFramebuffer(y.__webglFramebuffer[K][st]);else e.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)e.deleteFramebuffer(y.__webglFramebuffer[K]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=T.textures;for(let K=0,st=H.length;K<st;K++){const ut=i.get(H[K]);ut.__webglTexture&&(e.deleteTexture(ut.__webglTexture),r.memory.textures--),i.remove(H[K])}i.remove(T)}let F=0;function q(){F=0}function nt(){return F}function I(T){F=T}function N(){const T=F;return T>=a.maxTextures&&Nt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),F+=1,T}function P(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function W(T,y){const H=i.get(T);if(T.isVideoTexture&&fe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&H.__version!==T.version){const K=T.image;if(K===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(H,T,y);return}}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+y)}function tt(T,y){const H=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){Ut(H,T,y);return}else T.isExternalTexture&&(H.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+y)}function ot(T,y){const H=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){Ut(H,T,y);return}n.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+y)}function Mt(T,y){const H=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&H.__version!==T.version){It(H,T,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+y)}const ct={[Ed]:e.REPEAT,[na]:e.CLAMP_TO_EDGE,[bd]:e.MIRRORED_REPEAT},Pt={[hn]:e.NEAREST,[Ab]:e.NEAREST_MIPMAP_NEAREST,[jl]:e.NEAREST_MIPMAP_LINEAR,[sn]:e.LINEAR,[Ff]:e.LINEAR_MIPMAP_NEAREST,[_s]:e.LINEAR_MIPMAP_LINEAR},qt={[wb]:e.NEVER,[Ob]:e.ALWAYS,[Db]:e.LESS,[mm]:e.LEQUAL,[Ub]:e.EQUAL,[gm]:e.GEQUAL,[Lb]:e.GREATER,[Nb]:e.NOTEQUAL};function Dt(T,y){if(y.type===Li&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===sn||y.magFilter===Ff||y.magFilter===jl||y.magFilter===_s||y.minFilter===sn||y.minFilter===Ff||y.minFilter===jl||y.minFilter===_s)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,ct[y.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,ct[y.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,ct[y.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Pt[y.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Pt[y.minFilter]),y.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,qt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===hn||y.minFilter!==jl&&y.minFilter!==_s||y.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function et(T,y){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",R));const K=y.source;let st=d.get(K);st===void 0&&(st={},d.set(K,st));const ut=P(y);if(ut!==T.__cacheKey){st[ut]===void 0&&(st[ut]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,H=!0),st[ut].usedTimes++;const dt=st[T.__cacheKey];dt!==void 0&&(st[T.__cacheKey].usedTimes--,dt.usedTimes===0&&D(y)),T.__cacheKey=ut,T.__webglTexture=st[ut].texture}return H}function mt(T,y,H){return Math.floor(Math.floor(T/H)/y)}function ht(T,y,H,K){const ut=T.updateRanges;if(ut.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,H,K,y.data);else{ut.sort((yt,ft)=>yt.start-ft.start);let dt=0;for(let yt=1;yt<ut.length;yt++){const ft=ut[dt],L=ut[yt],Y=ft.start+ft.count,it=mt(L.start,y.width,4),lt=mt(ft.start,y.width,4);L.start<=Y+1&&it===lt&&mt(L.start+L.count-1,y.width,4)===it?ft.count=Math.max(ft.count,L.start+L.count-ft.start):(++dt,ut[dt]=L)}ut.length=dt+1;const Z=n.getParameter(e.UNPACK_ROW_LENGTH),J=n.getParameter(e.UNPACK_SKIP_PIXELS),gt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let yt=0,ft=ut.length;yt<ft;yt++){const L=ut[yt],Y=Math.floor(L.start/4),it=Math.ceil(L.count/4),lt=Y%y.width,w=Math.floor(Y/y.width),j=it,X=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(e.UNPACK_SKIP_ROWS,w),n.texSubImage2D(e.TEXTURE_2D,0,lt,w,j,X,H,K,y.data)}T.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Z),n.pixelStorei(e.UNPACK_SKIP_PIXELS,J),n.pixelStorei(e.UNPACK_SKIP_ROWS,gt)}}function Ut(T,y,H){let K=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=e.TEXTURE_3D);const st=et(T,y),ut=y.source;n.bindTexture(K,T.__webglTexture,e.TEXTURE0+H);const dt=i.get(ut);if(ut.version!==dt.__version||st===!0){if(n.activeTexture(e.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const X=se.getPrimaries(se.workingColorSpace),rt=y.colorSpace===Na?null:se.getPrimaries(y.colorSpace),at=y.colorSpace===Na||X===rt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let J=g(y.image,!1,a.maxTextureSize);J=pt(y,J);const gt=s.convert(y.format,y.colorSpace),yt=s.convert(y.type);let ft=S(y.internalFormat,gt,yt,y.normalized,y.colorSpace,y.isVideoTexture);Dt(K,y);let L;const Y=y.mipmaps,it=y.isVideoTexture!==!0,lt=dt.__version===void 0||st===!0,w=ut.dataReady,j=b(y,J);if(y.isDepthTexture)ft=C(y.format===vs,y.type),lt&&(it?n.texStorage2D(e.TEXTURE_2D,1,ft,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,ft,J.width,J.height,0,gt,yt,null));else if(y.isDataTexture)if(Y.length>0){it&&lt&&n.texStorage2D(e.TEXTURE_2D,j,ft,Y[0].width,Y[0].height);for(let X=0,rt=Y.length;X<rt;X++)L=Y[X],it?w&&n.texSubImage2D(e.TEXTURE_2D,X,0,0,L.width,L.height,gt,yt,L.data):n.texImage2D(e.TEXTURE_2D,X,ft,L.width,L.height,0,gt,yt,L.data);y.generateMipmaps=!1}else it?(lt&&n.texStorage2D(e.TEXTURE_2D,j,ft,J.width,J.height),w&&ht(y,J,gt,yt)):n.texImage2D(e.TEXTURE_2D,0,ft,J.width,J.height,0,gt,yt,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){it&&lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,ft,Y[0].width,Y[0].height,J.depth);for(let X=0,rt=Y.length;X<rt;X++)if(L=Y[X],y.format!==yi)if(gt!==null)if(it){if(w)if(y.layerUpdates.size>0){const at=Gg(L.width,L.height,y.format,y.type);for(const Q of y.layerUpdates){const vt=L.data.subarray(Q*at/L.data.BYTES_PER_ELEMENT,(Q+1)*at/L.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,Q,L.width,L.height,1,gt,vt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,L.width,L.height,J.depth,gt,L.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,X,ft,L.width,L.height,J.depth,0,L.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?w&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,L.width,L.height,J.depth,gt,yt,L.data):n.texImage3D(e.TEXTURE_2D_ARRAY,X,ft,L.width,L.height,J.depth,0,gt,yt,L.data)}else{it&&lt&&n.texStorage2D(e.TEXTURE_2D,j,ft,Y[0].width,Y[0].height);for(let X=0,rt=Y.length;X<rt;X++)L=Y[X],y.format!==yi?gt!==null?it?w&&n.compressedTexSubImage2D(e.TEXTURE_2D,X,0,0,L.width,L.height,gt,L.data):n.compressedTexImage2D(e.TEXTURE_2D,X,ft,L.width,L.height,0,L.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?w&&n.texSubImage2D(e.TEXTURE_2D,X,0,0,L.width,L.height,gt,yt,L.data):n.texImage2D(e.TEXTURE_2D,X,ft,L.width,L.height,0,gt,yt,L.data)}else if(y.isDataArrayTexture)if(it){if(lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,j,ft,J.width,J.height,J.depth),w)if(y.layerUpdates.size>0){const X=Gg(J.width,J.height,y.format,y.type);for(const rt of y.layerUpdates){const at=J.data.subarray(rt*X/J.data.BYTES_PER_ELEMENT,(rt+1)*X/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,rt,J.width,J.height,1,gt,yt,at)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,gt,yt,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ft,J.width,J.height,J.depth,0,gt,yt,J.data);else if(y.isData3DTexture)it?(lt&&n.texStorage3D(e.TEXTURE_3D,j,ft,J.width,J.height,J.depth),w&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,gt,yt,J.data)):n.texImage3D(e.TEXTURE_3D,0,ft,J.width,J.height,J.depth,0,gt,yt,J.data);else if(y.isFramebufferTexture){if(lt)if(it)n.texStorage2D(e.TEXTURE_2D,j,ft,J.width,J.height);else{let X=J.width,rt=J.height;for(let at=0;at<j;at++)n.texImage2D(e.TEXTURE_2D,at,ft,X,rt,0,gt,yt,null),X>>=1,rt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){const X=e.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),J.parentNode!==X){X.appendChild(J),p.add(y),X.onpaint=wt=>{const Bt=wt.changedElements;for(const Wt of p)Bt.includes(Wt.image)&&(Wt.needsUpdate=!0)},X.requestPaint();return}const rt=0,at=e.RGBA,Q=e.RGBA,vt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,rt,at,Q,vt,J),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Y.length>0){if(it&&lt){const X=Ae(Y[0]);n.texStorage2D(e.TEXTURE_2D,j,ft,X.width,X.height)}for(let X=0,rt=Y.length;X<rt;X++)L=Y[X],it?w&&n.texSubImage2D(e.TEXTURE_2D,X,0,0,gt,yt,L):n.texImage2D(e.TEXTURE_2D,X,ft,gt,yt,L);y.generateMipmaps=!1}else if(it){if(lt){const X=Ae(J);n.texStorage2D(e.TEXTURE_2D,j,ft,X.width,X.height)}w&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,gt,yt,J)}else n.texImage2D(e.TEXTURE_2D,0,ft,gt,yt,J);f(y)&&m(K),dt.__version=ut.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function It(T,y,H){if(y.image.length!==6)return;const K=et(T,y),st=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+H);const ut=i.get(st);if(st.version!==ut.__version||K===!0){n.activeTexture(e.TEXTURE0+H);const dt=se.getPrimaries(se.workingColorSpace),Z=y.colorSpace===Na?null:se.getPrimaries(y.colorSpace),J=y.colorSpace===Na||dt===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const gt=y.isCompressedTexture||y.image[0].isCompressedTexture,yt=y.image[0]&&y.image[0].isDataTexture,ft=[];for(let Q=0;Q<6;Q++)!gt&&!yt?ft[Q]=g(y.image[Q],!0,a.maxCubemapSize):ft[Q]=yt?y.image[Q].image:y.image[Q],ft[Q]=pt(y,ft[Q]);const L=ft[0],Y=s.convert(y.format,y.colorSpace),it=s.convert(y.type),lt=S(y.internalFormat,Y,it,y.normalized,y.colorSpace),w=y.isVideoTexture!==!0,j=ut.__version===void 0||K===!0,X=st.dataReady;let rt=b(y,L);Dt(e.TEXTURE_CUBE_MAP,y);let at;if(gt){w&&j&&n.texStorage2D(e.TEXTURE_CUBE_MAP,rt,lt,L.width,L.height);for(let Q=0;Q<6;Q++){at=ft[Q].mipmaps;for(let vt=0;vt<at.length;vt++){const wt=at[vt];y.format!==yi?Y!==null?w?X&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,wt.width,wt.height,Y,wt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,lt,wt.width,wt.height,0,wt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?X&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,wt.width,wt.height,Y,it,wt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,lt,wt.width,wt.height,0,Y,it,wt.data)}}}else{if(at=y.mipmaps,w&&j){at.length>0&&rt++;const Q=Ae(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,rt,lt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(yt){w?X&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ft[Q].width,ft[Q].height,Y,it,ft[Q].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,lt,ft[Q].width,ft[Q].height,0,Y,it,ft[Q].data);for(let vt=0;vt<at.length;vt++){const Bt=at[vt].image[Q].image;w?X&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,Bt.width,Bt.height,Y,it,Bt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,lt,Bt.width,Bt.height,0,Y,it,Bt.data)}}else{w?X&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Y,it,ft[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,lt,Y,it,ft[Q]);for(let vt=0;vt<at.length;vt++){const wt=at[vt];w?X&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,Y,it,wt.image[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,lt,Y,it,wt.image[Q])}}}f(y)&&m(e.TEXTURE_CUBE_MAP),ut.__version=st.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Lt(T,y,H,K,st,ut){const dt=s.convert(H.format,H.colorSpace),Z=s.convert(H.type),J=S(H.internalFormat,dt,Z,H.normalized,H.colorSpace),gt=i.get(y),yt=i.get(H);if(yt.__renderTarget=y,!gt.__hasExternalTextures){const ft=Math.max(1,y.width>>ut),L=Math.max(1,y.height>>ut);st===e.TEXTURE_3D||st===e.TEXTURE_2D_ARRAY?n.texImage3D(st,ut,J,ft,L,y.depth,0,dt,Z,null):n.texImage2D(st,ut,J,ft,L,0,dt,Z,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),Jt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,st,yt.__webglTexture,0,Be(y)):(st===e.TEXTURE_2D||st>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,st,yt.__webglTexture,ut),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(T,y,H){if(e.bindRenderbuffer(e.RENDERBUFFER,T),y.depthBuffer){const K=y.depthTexture,st=K&&K.isDepthTexture?K.type:null,ut=C(y.stencilBuffer,st),dt=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Jt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Be(y),ut,y.width,y.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,Be(y),ut,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,ut,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,dt,e.RENDERBUFFER,T)}else{const K=y.textures;for(let st=0;st<K.length;st++){const ut=K[st],dt=s.convert(ut.format,ut.colorSpace),Z=s.convert(ut.type),J=S(ut.internalFormat,dt,Z,ut.normalized,ut.colorSpace);Jt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Be(y),J,y.width,y.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,Be(y),J,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,J,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function kt(T,y,H){const K=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=i.get(y.depthTexture);if(st.__renderTarget=y,(!st.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(st.__webglInit===void 0&&(st.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),st.__webglTexture===void 0){st.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,st.__webglTexture),Dt(e.TEXTURE_CUBE_MAP,y.depthTexture);const gt=s.convert(y.depthTexture.format),yt=s.convert(y.depthTexture.type);let ft;y.depthTexture.format===ma?ft=e.DEPTH_COMPONENT24:y.depthTexture.format===vs&&(ft=e.DEPTH24_STENCIL8);for(let L=0;L<6;L++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,ft,y.width,y.height,0,gt,yt,null)}}else W(y.depthTexture,0);const ut=st.__webglTexture,dt=Be(y),Z=K?e.TEXTURE_CUBE_MAP_POSITIVE_X+H:e.TEXTURE_2D,J=y.depthTexture.format===vs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===ma)Jt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,Z,ut,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,J,Z,ut,0);else if(y.depthTexture.format===vs)Jt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,Z,ut,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,J,Z,ut,0);else throw new Error("Unknown depthTexture format")}function ue(T){const y=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const st=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",st)};K.addEventListener("dispose",st),y.__depthDisposeCallback=st}y.__boundDepthTexture=K}if(T.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let K=0;K<6;K++)kt(y.__webglFramebuffer[K],T,K);else{const K=T.texture.mipmaps;K&&K.length>0?kt(y.__webglFramebuffer[0],T,0):kt(y.__webglFramebuffer,T,0)}else if(H){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=e.createRenderbuffer(),we(y.__webglDepthbuffer[K],T,!1);else{const st=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,ut),e.framebufferRenderbuffer(e.FRAMEBUFFER,st,e.RENDERBUFFER,ut)}}else{const K=T.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),we(y.__webglDepthbuffer,T,!1);else{const st=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ut=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ut),e.framebufferRenderbuffer(e.FRAMEBUFFER,st,e.RENDERBUFFER,ut)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(T,y,H){const K=i.get(T);y!==void 0&&Lt(K.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&ue(T)}function zt(T){const y=T.texture,H=i.get(T),K=i.get(y);T.addEventListener("dispose",x);const st=T.textures,ut=T.isWebGLCubeRenderTarget===!0,dt=st.length>1;if(dt||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=y.version,r.memory.textures++),ut){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let J=0;J<y.mipmaps.length;J++)H.__webglFramebuffer[Z][J]=e.createFramebuffer()}else H.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)H.__webglFramebuffer[Z]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(dt)for(let Z=0,J=st.length;Z<J;Z++){const gt=i.get(st[Z]);gt.__webglTexture===void 0&&(gt.__webglTexture=e.createTexture(),r.memory.textures++)}if(T.samples>0&&Jt(T)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<st.length;Z++){const J=st[Z];H.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);const gt=s.convert(J.format,J.colorSpace),yt=s.convert(J.type),ft=S(J.internalFormat,gt,yt,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),L=Be(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,L,ft,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),we(H.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ut){n.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),Dt(e.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)Lt(H.__webglFramebuffer[Z][J],T,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else Lt(H.__webglFramebuffer[Z],T,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(y)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(dt){for(let Z=0,J=st.length;Z<J;Z++){const gt=st[Z],yt=i.get(gt);let ft=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,yt.__webglTexture),Dt(ft,gt),Lt(H.__webglFramebuffer,T,gt,e.COLOR_ATTACHMENT0+Z,ft,0),f(gt)&&m(ft)}n.unbindTexture()}else{let Z=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Z,K.__webglTexture),Dt(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)Lt(H.__webglFramebuffer[J],T,y,e.COLOR_ATTACHMENT0,Z,J);else Lt(H.__webglFramebuffer,T,y,e.COLOR_ATTACHMENT0,Z,0);f(y)&&m(Z),n.unbindTexture()}T.depthBuffer&&ue(T)}function Kt(T){const y=T.textures;for(let H=0,K=y.length;H<K;H++){const st=y[H];if(f(st)){const ut=_(T),dt=i.get(st).__webglTexture;n.bindTexture(ut,dt),m(ut),n.unbindTexture()}}}const Qt=[],Me=[];function B(T){if(T.samples>0){if(Jt(T)===!1){const y=T.textures,H=T.width,K=T.height;let st=e.COLOR_BUFFER_BIT;const ut=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,dt=i.get(T),Z=y.length>1;if(Z)for(let gt=0;gt<y.length;gt++)n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+gt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+gt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);const J=T.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let gt=0;gt<y.length;gt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=e.STENCIL_BUFFER_BIT)),Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);const yt=i.get(y[gt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,yt,0)}e.blitFramebuffer(0,0,H,K,0,0,H,K,st,e.NEAREST),l===!0&&(Qt.length=0,Me.length=0,Qt.push(e.COLOR_ATTACHMENT0+gt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Qt.push(ut),Me.push(ut),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Qt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let gt=0;gt<y.length;gt++){n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+gt,e.RENDERBUFFER,dt.__webglColorRenderbuffer[gt]);const yt=i.get(y[gt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+gt,e.TEXTURE_2D,yt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function Be(T){return Math.min(a.maxSamples,T.samples)}function Jt(T){const y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function fe(T){const y=r.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function pt(T,y){const H=T.colorSpace,K=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==Su&&H!==Na&&(se.getTransfer(H)===de?(K!==yi||st!==Yn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",H)),y}function Ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=q,this.getTextureUnits=nt,this.setTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=tt,this.setTexture3D=ot,this.setTextureCube=Mt,this.rebindTextures=_e,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function T3(e,t){function n(i,a=Na){let s;const r=se.getTransfer(a);if(i===Yn)return e.UNSIGNED_BYTE;if(i===um)return e.UNSIGNED_SHORT_4_4_4_4;if(i===fm)return e.UNSIGNED_SHORT_5_5_5_1;if(i===RS)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===CS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===TS)return e.BYTE;if(i===AS)return e.SHORT;if(i===hl)return e.UNSIGNED_SHORT;if(i===cm)return e.INT;if(i===Ii)return e.UNSIGNED_INT;if(i===Li)return e.FLOAT;if(i===pa)return e.HALF_FLOAT;if(i===wS)return e.ALPHA;if(i===DS)return e.RGB;if(i===yi)return e.RGBA;if(i===ma)return e.DEPTH_COMPONENT;if(i===vs)return e.DEPTH_STENCIL;if(i===US)return e.RED;if(i===hm)return e.RED_INTEGER;if(i===Ds)return e.RG;if(i===dm)return e.RG_INTEGER;if(i===pm)return e.RGBA_INTEGER;if(i===Ic||i===zc||i===Fc||i===Hc)if(r===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ic)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ic)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Td||i===Ad||i===Rd||i===Cd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Td)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ad)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wd||i===Dd||i===Ud||i===Ld||i===Nd||i===vu||i===Od)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wd||i===Dd)return r===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ud)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ld)return s.COMPRESSED_R11_EAC;if(i===Nd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===vu)return s.COMPRESSED_RG11_EAC;if(i===Od)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pd||i===Bd||i===Id||i===zd||i===Fd||i===Hd||i===Gd||i===Vd||i===Xd||i===kd||i===Wd||i===Yd||i===qd||i===jd)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pd)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bd)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Id)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zd)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fd)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hd)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gd)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vd)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xd)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kd)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wd)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yd)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qd)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jd)return r===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zd||i===Kd||i===Qd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Zd)return r===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jd||i===$d||i===xu||i===tp)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$d)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const A3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R3=`
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

}`;class C3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new FS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Mi({vertexShader:A3,fragmentShader:R3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xn(new Dl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w3 extends Bs{constructor(t,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,v=null;const E=typeof XRWebGLBinding<"u",g=new C3,f={},m=n.getContextAttributes();let _=null,S=null;const C=[],b=[],R=new Ht;let x=null;const A=new kn;A.viewport=new He;const D=new kn;D.viewport=new He;const U=[A,D],F=new FT;let q=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let mt=C[et];return mt===void 0&&(mt=new Wf,C[et]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(et){let mt=C[et];return mt===void 0&&(mt=new Wf,C[et]=mt),mt.getGripSpace()},this.getHand=function(et){let mt=C[et];return mt===void 0&&(mt=new Wf,C[et]=mt),mt.getHandSpace()};function I(et){const mt=b.indexOf(et.inputSource);if(mt===-1)return;const ht=C[mt];ht!==void 0&&(ht.update(et.inputSource,et.frame,c||r),ht.dispatchEvent({type:et.type,data:et.inputSource}))}function N(){a.removeEventListener("select",I),a.removeEventListener("selectstart",I),a.removeEventListener("selectend",I),a.removeEventListener("squeeze",I),a.removeEventListener("squeezestart",I),a.removeEventListener("squeezeend",I),a.removeEventListener("end",N),a.removeEventListener("inputsourceschange",P);for(let et=0;et<C.length;et++){const mt=b[et];mt!==null&&(b[et]=null,C[et].disconnect(mt))}q=null,nt=null,g.reset();for(const et in f)delete f[et];t.setRenderTarget(_),d=null,u=null,p=null,a=null,S=null,Dt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){s=et,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(et){if(a=et,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",I),a.addEventListener("selectstart",I),a.addEventListener("selectend",I),a.addEventListener("squeeze",I),a.addEventListener("squeezestart",I),a.addEventListener("squeezeend",I),a.addEventListener("end",N),a.addEventListener("inputsourceschange",P),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Ut=null,It=null;m.depth&&(It=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ht=m.stencil?vs:ma,Ut=m.stencil?dl:Ii);const Lt={colorFormat:n.RGBA8,depthFormat:It,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(Lt),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Bi(u.textureWidth,u.textureHeight,{format:yi,type:Yn,depthTexture:new qr(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(a,n,ht),a.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Bi(d.framebufferWidth,d.framebufferHeight,{format:yi,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Dt.setContext(a),Dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function P(et){for(let mt=0;mt<et.removed.length;mt++){const ht=et.removed[mt],Ut=b.indexOf(ht);Ut>=0&&(b[Ut]=null,C[Ut].disconnect(ht))}for(let mt=0;mt<et.added.length;mt++){const ht=et.added[mt];let Ut=b.indexOf(ht);if(Ut===-1){for(let Lt=0;Lt<C.length;Lt++)if(Lt>=b.length){b.push(ht),Ut=Lt;break}else if(b[Lt]===null){b[Lt]=ht,Ut=Lt;break}if(Ut===-1)break}const It=C[Ut];It&&It.connect(ht)}}const W=new O,tt=new O;function ot(et,mt,ht){W.setFromMatrixPosition(mt.matrixWorld),tt.setFromMatrixPosition(ht.matrixWorld);const Ut=W.distanceTo(tt),It=mt.projectionMatrix.elements,Lt=ht.projectionMatrix.elements,we=It[14]/(It[10]-1),kt=It[14]/(It[10]+1),ue=(It[9]+1)/It[5],_e=(It[9]-1)/It[5],zt=(It[8]-1)/It[0],Kt=(Lt[8]+1)/Lt[0],Qt=we*zt,Me=we*Kt,B=Ut/(-zt+Kt),Be=B*-zt;if(mt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Be),et.translateZ(B),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),It[10]===-1)et.projectionMatrix.copy(mt.projectionMatrix),et.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Jt=we+B,fe=kt+B,pt=Qt-Be,Ae=Me+(Ut-Be),T=ue*kt/fe*Jt,y=_e*kt/fe*Jt;et.projectionMatrix.makePerspective(pt,Ae,T,y,Jt,fe),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Mt(et,mt){mt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(mt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(a===null)return;let mt=et.near,ht=et.far;g.texture!==null&&(g.depthNear>0&&(mt=g.depthNear),g.depthFar>0&&(ht=g.depthFar)),F.near=D.near=A.near=mt,F.far=D.far=A.far=ht,(q!==F.near||nt!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),q=F.near,nt=F.far),F.layers.mask=et.layers.mask|6,A.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;const Ut=et.parent,It=F.cameras;Mt(F,Ut);for(let Lt=0;Lt<It.length;Lt++)Mt(It[Lt],Ut);It.length===2?ot(F,A,D):F.projectionMatrix.copy(A.projectionMatrix),ct(et,F,Ut)};function ct(et,mt,ht){ht===null?et.matrix.copy(mt.matrixWorld):(et.matrix.copy(ht.matrixWorld),et.matrix.invert(),et.matrix.multiply(mt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(mt.projectionMatrix),et.projectionMatrixInverse.copy(mt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=ml*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(et){l=et,u!==null&&(u.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(et){return f[et]};let Pt=null;function qt(et,mt){if(h=mt.getViewerPose(c||r),v=mt,h!==null){const ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Ut=!1;ht.length!==F.cameras.length&&(F.cameras.length=0,Ut=!0);for(let kt=0;kt<ht.length;kt++){const ue=ht[kt];let _e=null;if(d!==null)_e=d.getViewport(ue);else{const Kt=p.getViewSubImage(u,ue);_e=Kt.viewport,kt===0&&(t.setRenderTargetTextures(S,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(S))}let zt=U[kt];zt===void 0&&(zt=new kn,zt.layers.enable(kt),zt.viewport=new He,U[kt]=zt),zt.matrix.fromArray(ue.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(ue.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(_e.x,_e.y,_e.width,_e.height),kt===0&&(F.matrix.copy(zt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ut===!0&&F.cameras.push(zt)}const It=a.enabledFeatures;if(It&&It.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const kt=p.getDepthInformation(ht[0]);kt&&kt.isValid&&kt.texture&&g.init(kt,a.renderState)}if(It&&It.includes("camera-access")&&E){t.state.unbindTexture(),p=i.getBinding();for(let kt=0;kt<ht.length;kt++){const ue=ht[kt].camera;if(ue){let _e=f[ue];_e||(_e=new FS,f[ue]=_e);const zt=p.getCameraImage(ue);_e.sourceTexture=zt}}}}for(let ht=0;ht<C.length;ht++){const Ut=b[ht],It=C[ht];Ut!==null&&It!==void 0&&It.update(Ut,mt,c||r)}Pt&&Pt(et,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),v=null}const Dt=new kS;Dt.setAnimationLoop(qt),this.setAnimationLoop=function(et){Pt=et},this.dispose=function(){}}}const D3=new Pe,QS=new Ft;QS.set(-1,0,0,0,1,0,0,0,1);function U3(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,HS(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,m,_,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),u(g,f),f.isMeshPhysicalMaterial&&d(g,f,S)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),E(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,_):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Nn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Nn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const m=t.get(f),_=m.envMap,S=m.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(D3.makeRotationFromEuler(S)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(QS),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,_){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=_*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){const m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function L3(e,t,n,i){let a={},s={},r=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const S=_.program;i.uniformBlockBinding(m,S)}function c(m,_){let S=a[m.id];S===void 0&&(v(m),S=h(m),a[m.id]=S,m.addEventListener("dispose",g));const C=_.program;i.updateUBOMapping(m,C);const b=t.render.frame;s[m.id]!==b&&(u(m),s[m.id]=b)}function h(m){const _=p();m.__bindingPointIndex=_;const S=e.createBuffer(),C=m.__size,b=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,C,b),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,S),S}function p(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=a[m.id],S=m.uniforms,C=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let b=0,R=S.length;b<R;b++){const x=Array.isArray(S[b])?S[b]:[S[b]];for(let A=0,D=x.length;A<D;A++){const U=x[A];if(d(U,b,A,C)===!0){const F=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let nt=0;for(let I=0;I<q.length;I++){const N=q[I],P=E(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,F+nt,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):ArrayBuffer.isView(N)?U.__data.set(new N.constructor(N.buffer,N.byteOffset,U.__data.length)):(N.toArray(U.__data,nt),nt+=P.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(m,_,S,C){const b=m.value,R=_+"_"+S;if(C[R]===void 0)return typeof b=="number"||typeof b=="boolean"?C[R]=b:ArrayBuffer.isView(b)?C[R]=b.slice():C[R]=b.clone(),!0;{const x=C[R];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return C[R]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(x.equals(b)===!1)return x.copy(b),!0}}return!1}function v(m){const _=m.uniforms;let S=0;const C=16;for(let R=0,x=_.length;R<x;R++){const A=Array.isArray(_[R])?_[R]:[_[R]];for(let D=0,U=A.length;D<U;D++){const F=A[D],q=Array.isArray(F.value)?F.value:[F.value];for(let nt=0,I=q.length;nt<I;nt++){const N=q[nt],P=E(N),W=S%C,tt=W%P.boundary,ot=W+tt;S+=tt,ot!==0&&C-ot<P.storage&&(S+=C-ot),F.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=P.storage}}}const b=S%C;return b>0&&(S+=C-b),m.__size=S,m.__cache={},this}function E(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(_.boundary=16,_.storage=m.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const S=r.indexOf(_.__bindingPointIndex);r.splice(S,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete s[_.id]}function f(){for(const m in a)e.deleteBuffer(a[m]);r=[],a={},s={}}return{bind:l,update:c,dispose:f}}const N3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ri=null;function O3(){return Ri===null&&(Ri=new yT(N3,16,16,Ds,pa),Ri.name="DFG_LUT",Ri.minFilter=sn,Ri.magFilter=sn,Ri.wrapS=na,Ri.wrapT=na,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}class P3{constructor(t={}){const{canvas:n=Bb(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Yn}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;const E=d,g=new Set([pm,dm,hm]),f=new Set([Yn,Ii,hl,dl,um,fm]),m=new Uint32Array(4),_=new Int32Array(4),S=new O;let C=null,b=null;const R=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let U=!1,F=null;this._outputColorSpace=ii;let q=0,nt=0,I=null,N=-1,P=null;const W=new He,tt=new He;let ot=null;const Mt=new Yt(0);let ct=0,Pt=n.width,qt=n.height,Dt=1,et=null,mt=null;const ht=new He(0,0,Pt,qt),Ut=new He(0,0,Pt,qt);let It=!1;const Lt=new Mm;let we=!1,kt=!1;const ue=new Pe,_e=new O,zt=new He,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function Me(){return I===null?Dt:1}let B=i;function Be(M,z){return n.getContext(M,z)}try{const M={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lm}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",vt,!1),n.addEventListener("webglcontextcreationerror",wt,!1),B===null){const z="webgl2";if(B=Be(z,M),B===null)throw Be(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw ae("WebGLRenderer: "+M.message),M}let Jt,fe,pt,Ae,T,y,H,K,st,ut,dt,Z,J,gt,yt,ft,L,Y,it,lt,w,j,X;function rt(){Jt=new OR(B),Jt.init(),w=new T3(B,Jt),fe=new AR(B,Jt,t,w),pt=new E3(B,Jt),fe.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),Ae=new IR(B),T=new c3,y=new b3(B,Jt,pt,T,fe,w,Ae),H=new NR(D),K=new GT(B),j=new bR(B,K),st=new PR(B,K,Ae,j),ut=new FR(B,st,K,j,Ae),Y=new zR(B,fe,y),yt=new RR(T),dt=new l3(D,H,Jt,fe,j,yt),Z=new U3(D,T),J=new f3,gt=new _3(Jt),L=new ER(D,H,pt,ut,v,l),ft=new M3(D,ut,fe),X=new L3(B,Ae,fe,pt),it=new TR(B,Jt,Ae),lt=new BR(B,Jt,Ae),Ae.programs=dt.programs,D.capabilities=fe,D.extensions=Jt,D.properties=T,D.renderLists=J,D.shadowMap=ft,D.state=pt,D.info=Ae}rt(),E!==Yn&&(A=new GR(E,n.width,n.height,a,s));const at=new w3(D,B);this.xr=at,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const M=Jt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Jt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(M){M!==void 0&&(Dt=M,this.setSize(Pt,qt,!1))},this.getSize=function(M){return M.set(Pt,qt)},this.setSize=function(M,z,k=!0){if(at.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Pt=M,qt=z,n.width=Math.floor(M*Dt),n.height=Math.floor(z*Dt),k===!0&&(n.style.width=M+"px",n.style.height=z+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(Pt*Dt,qt*Dt).floor()},this.setDrawingBufferSize=function(M,z,k){Pt=M,qt=z,Dt=k,n.width=Math.floor(M*k),n.height=Math.floor(z*k),this.setViewport(0,0,M,z)},this.setEffects=function(M){if(E===Yn){ae("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let z=0;z<M.length;z++)if(M[z].isOutputPass===!0){Nt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(W)},this.getViewport=function(M){return M.copy(ht)},this.setViewport=function(M,z,k,G){M.isVector4?ht.set(M.x,M.y,M.z,M.w):ht.set(M,z,k,G),pt.viewport(W.copy(ht).multiplyScalar(Dt).round())},this.getScissor=function(M){return M.copy(Ut)},this.setScissor=function(M,z,k,G){M.isVector4?Ut.set(M.x,M.y,M.z,M.w):Ut.set(M,z,k,G),pt.scissor(tt.copy(Ut).multiplyScalar(Dt).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(M){pt.setScissorTest(It=M)},this.setOpaqueSort=function(M){et=M},this.setTransparentSort=function(M){mt=M},this.getClearColor=function(M){return M.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,k=!0){let G=0;if(M){let V=!1;if(I!==null){const St=I.texture.format;V=g.has(St)}if(V){const St=I.texture.type,bt=f.has(St),xt=L.getClearColor(),Tt=L.getClearAlpha(),Rt=xt.r,Vt=xt.g,Zt=xt.b;bt?(m[0]=Rt,m[1]=Vt,m[2]=Zt,m[3]=Tt,B.clearBufferuiv(B.COLOR,0,m)):(_[0]=Rt,_[1]=Vt,_[2]=Zt,_[3]=Tt,B.clearBufferiv(B.COLOR,0,_))}else G|=B.COLOR_BUFFER_BIT}z&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",vt,!1),n.removeEventListener("webglcontextcreationerror",wt,!1),L.dispose(),J.dispose(),gt.dispose(),T.dispose(),H.dispose(),ut.dispose(),j.dispose(),X.dispose(),dt.dispose(),at.dispose(),at.removeEventListener("sessionstart",bi),at.removeEventListener("sessionend",In),zn.stop()};function Q(M){M.preventDefault(),Eu("WebGLRenderer: Context Lost."),U=!0}function vt(){Eu("WebGLRenderer: Context Restored."),U=!1;const M=Ae.autoReset,z=ft.enabled,k=ft.autoUpdate,G=ft.needsUpdate,V=ft.type;rt(),Ae.autoReset=M,ft.enabled=z,ft.autoUpdate=k,ft.needsUpdate=G,ft.type=V}function wt(M){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Bt(M){const z=M.target;z.removeEventListener("dispose",Bt),Wt(z)}function Wt(M){tn(M),T.remove(M)}function tn(M){const z=T.get(M).programs;z!==void 0&&(z.forEach(function(k){dt.releaseProgram(k)}),M.isShaderMaterial&&dt.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,k,G,V,St){z===null&&(z=Kt);const bt=V.isMesh&&V.matrixWorld.determinant()<0,xt=co(M,z,k,G,V);pt.setMaterial(G,bt);let Tt=k.index,Rt=1;if(G.wireframe===!0){if(Tt=st.getWireframeAttribute(k),Tt===void 0)return;Rt=2}const Vt=k.drawRange,Zt=k.attributes.position;let Ct=Vt.start*Rt,xe=(Vt.start+Vt.count)*Rt;St!==null&&(Ct=Math.max(Ct,St.start*Rt),xe=Math.min(xe,(St.start+St.count)*Rt)),Tt!==null?(Ct=Math.max(Ct,0),xe=Math.min(xe,Tt.count)):Zt!=null&&(Ct=Math.max(Ct,0),xe=Math.min(xe,Zt.count));const Ge=xe-Ct;if(Ge<0||Ge===1/0)return;j.setup(V,G,xt,k,Tt);let Ie,Ee=it;if(Tt!==null&&(Ie=K.get(Tt),Ee=lt,Ee.setIndex(Ie)),V.isMesh)G.wireframe===!0?(pt.setLineWidth(G.wireframeLinewidth*Me()),Ee.setMode(B.LINES)):Ee.setMode(B.TRIANGLES);else if(V.isLine){let gn=G.linewidth;gn===void 0&&(gn=1),pt.setLineWidth(gn*Me()),V.isLineSegments?Ee.setMode(B.LINES):V.isLineLoop?Ee.setMode(B.LINE_LOOP):Ee.setMode(B.LINE_STRIP)}else V.isPoints?Ee.setMode(B.POINTS):V.isSprite&&Ee.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const gn=V._multiDrawStarts,Et=V._multiDrawCounts,Fn=V._multiDrawCount,oe=Tt?K.get(Tt).bytesPerElement:1,ti=T.get(G).currentProgram.getUniforms();for(let Ti=0;Ti<Fn;Ti++)ti.setValue(B,"_gl_DrawID",Ti),Ee.render(gn[Ti]/oe,Et[Ti])}else if(V.isInstancedMesh)Ee.renderInstances(Ct,Ge,V.count);else if(k.isInstancedBufferGeometry){const gn=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Et=Math.min(k.instanceCount,gn);Ee.renderInstances(Ct,Ge,Et)}else Ee.render(Ct,Ge)};function $t(M,z,k){M.transparent===!0&&M.side===Ji&&M.forceSinglePass===!1?(M.side=Nn,M.needsUpdate=!0,as(M,z,k),M.side=ts,M.needsUpdate=!0,as(M,z,k),M.side=Ji):as(M,z,k)}this.compile=function(M,z,k=null){k===null&&(k=M),b=gt.get(k),b.init(z),x.push(b),k.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),M!==k&&M.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();const G=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const St=V.material;if(St)if(Array.isArray(St))for(let bt=0;bt<St.length;bt++){const xt=St[bt];$t(xt,k,V),G.add(xt)}else $t(St,k,V),G.add(St)}),b=x.pop(),G},this.compileAsync=function(M,z,k=null){const G=this.compile(M,z,k);return new Promise(V=>{function St(){if(G.forEach(function(bt){T.get(bt).currentProgram.isReady()&&G.delete(bt)}),G.size===0){V(M);return}setTimeout(St,10)}Jt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let yn=null;function Rn(M){yn&&yn(M)}function bi(){zn.stop()}function In(){zn.start()}const zn=new kS;zn.setAnimationLoop(Rn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(M){yn=M,at.setAnimationLoop(M),M===null?zn.stop():zn.start()},at.addEventListener("sessionstart",bi),at.addEventListener("sessionend",In),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(M,z);const k=at.enabled===!0&&at.isPresenting===!0,G=A!==null&&(I===null||k)&&A.begin(D,I);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(z),z=at.getCamera()),M.isScene===!0&&M.onBeforeRender(D,M,z,I),b=gt.get(M,x.length),b.init(z),b.state.textureUnits=y.getTextureUnits(),x.push(b),ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Lt.setFromProjectionMatrix(ue,Ni,z.reversedDepth),kt=this.localClippingEnabled,we=yt.init(this.clippingPlanes,kt),C=J.get(M,R.length),C.init(),R.push(C),at.enabled===!0&&at.isPresenting===!0){const bt=D.xr.getDepthSensingMesh();bt!==null&&zs(bt,z,-1/0,D.sortObjects)}zs(M,z,0,D.sortObjects),C.finish(),D.sortObjects===!0&&C.sort(et,mt),Qt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Qt&&L.addToRenderList(C,M),this.info.render.frame++,we===!0&&yt.beginShadows();const V=b.state.shadowsArray;if(ft.render(V,M,z),we===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&A.hasRenderPass())===!1){const bt=C.opaque,xt=C.transmissive;if(b.setupLights(),z.isArrayCamera){const Tt=z.cameras;if(xt.length>0)for(let Rt=0,Vt=Tt.length;Rt<Vt;Rt++){const Zt=Tt[Rt];ro(bt,xt,M,Zt)}Qt&&L.render(M);for(let Rt=0,Vt=Tt.length;Rt<Vt;Rt++){const Zt=Tt[Rt];so(C,M,Zt,Zt.viewport)}}else xt.length>0&&ro(bt,xt,M,z),Qt&&L.render(M),so(C,M,z)}I!==null&&nt===0&&(y.updateMultisampleRenderTarget(I),y.updateRenderTargetMipmap(I)),G&&A.end(D),M.isScene===!0&&M.onAfterRender(D,M,z),j.resetDefaultState(),N=-1,P=null,x.pop(),x.length>0?(b=x[x.length-1],y.setTextureUnits(b.state.textureUnits),we===!0&&yt.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,F!==null&&F.renderEnd()};function zs(M,z,k,G){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Lt.intersectsSprite(M)){G&&zt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ue);const bt=ut.update(M),xt=M.material;xt.visible&&C.push(M,bt,xt,k,zt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Lt.intersectsObject(M))){const bt=ut.update(M),xt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),zt.copy(M.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),zt.copy(bt.boundingSphere.center)),zt.applyMatrix4(M.matrixWorld).applyMatrix4(ue)),Array.isArray(xt)){const Tt=bt.groups;for(let Rt=0,Vt=Tt.length;Rt<Vt;Rt++){const Zt=Tt[Rt],Ct=xt[Zt.materialIndex];Ct&&Ct.visible&&C.push(M,bt,Ct,k,zt.z,Zt)}}else xt.visible&&C.push(M,bt,xt,k,zt.z,null)}}const St=M.children;for(let bt=0,xt=St.length;bt<xt;bt++)zs(St[bt],z,k,G)}function so(M,z,k,G){const{opaque:V,transmissive:St,transparent:bt}=M;b.setupLightsView(k),we===!0&&yt.setGlobalState(D.clippingPlanes,k),G&&pt.viewport(W.copy(G)),V.length>0&&ve(V,z,k),St.length>0&&ve(St,z,k),bt.length>0&&ve(bt,z,k),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function ro(M,z,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const Ct=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Bi(1,1,{generateMipmaps:!0,type:Ct?pa:Yn,minFilter:_s,samples:Math.max(4,fe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace})}const St=b.state.transmissionRenderTarget[G.id],bt=G.viewport||W;St.setSize(bt.z*D.transmissionResolutionScale,bt.w*D.transmissionResolutionScale);const xt=D.getRenderTarget(),Tt=D.getActiveCubeFace(),Rt=D.getActiveMipmapLevel();D.setRenderTarget(St),D.getClearColor(Mt),ct=D.getClearAlpha(),ct<1&&D.setClearColor(16777215,.5),D.clear(),Qt&&L.render(k);const Vt=D.toneMapping;D.toneMapping=Pi;const Zt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),we===!0&&yt.setGlobalState(D.clippingPlanes,G),ve(M,k,G),y.updateMultisampleRenderTarget(St),y.updateRenderTargetMipmap(St),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let xe=0,Ge=z.length;xe<Ge;xe++){const Ie=z[xe],{object:Ee,geometry:gn,material:Et,group:Fn}=Ie;if(Et.side===Ji&&Ee.layers.test(G.layers)){const oe=Et.side;Et.side=Nn,Et.needsUpdate=!0,he(Ee,k,G,gn,Et,Fn),Et.side=oe,Et.needsUpdate=!0,Ct=!0}}Ct===!0&&(y.updateMultisampleRenderTarget(St),y.updateRenderTargetMipmap(St))}D.setRenderTarget(xt,Tt,Rt),D.setClearColor(Mt,ct),Zt!==void 0&&(G.viewport=Zt),D.toneMapping=Vt}function ve(M,z,k){const G=z.isScene===!0?z.overrideMaterial:null;for(let V=0,St=M.length;V<St;V++){const bt=M[V],{object:xt,geometry:Tt,group:Rt}=bt;let Vt=bt.material;Vt.allowOverride===!0&&G!==null&&(Vt=G),xt.layers.test(k.layers)&&he(xt,z,k,Tt,Vt,Rt)}}function he(M,z,k,G,V,St){M.onBeforeRender(D,z,k,G,V,St),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(D,z,k,G,M,St),V.transparent===!0&&V.side===Ji&&V.forceSinglePass===!1?(V.side=Nn,V.needsUpdate=!0,D.renderBufferDirect(k,z,G,V,M,St),V.side=ts,V.needsUpdate=!0,D.renderBufferDirect(k,z,G,V,M,St),V.side=Ji):D.renderBufferDirect(k,z,G,V,M,St),M.onAfterRender(D,z,k,G,V,St)}function as(M,z,k){z.isScene!==!0&&(z=Kt);const G=T.get(M),V=b.state.lights,St=b.state.shadowsArray,bt=V.state.version,xt=dt.getParameters(M,V.state,St,z,k,b.state.lightProbeGridArray),Tt=dt.getProgramCacheKey(xt);let Rt=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,G.fog=z.fog;const Vt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=H.get(M.envMap||G.environment,Vt),G.envMapRotation=G.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,Rt===void 0&&(M.addEventListener("dispose",Bt),Rt=new Map,G.programs=Rt);let Zt=Rt.get(Tt);if(Zt!==void 0){if(G.currentProgram===Zt&&G.lightsStateVersion===bt)return oo(M,xt),Zt}else xt.uniforms=dt.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,k,xt),M.onBeforeCompile(xt,D),Zt=dt.acquireProgram(xt,Tt),Rt.set(Tt,Zt),G.uniforms=xt.uniforms;const Ct=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=yt.uniform),oo(M,xt),G.needsLights=ty(M),G.lightsStateVersion=bt,G.needsLights&&(Ct.ambientLightColor.value=V.state.ambient,Ct.lightProbe.value=V.state.probe,Ct.directionalLights.value=V.state.directional,Ct.directionalLightShadows.value=V.state.directionalShadow,Ct.spotLights.value=V.state.spot,Ct.spotLightShadows.value=V.state.spotShadow,Ct.rectAreaLights.value=V.state.rectArea,Ct.ltc_1.value=V.state.rectAreaLTC1,Ct.ltc_2.value=V.state.rectAreaLTC2,Ct.pointLights.value=V.state.point,Ct.pointLightShadows.value=V.state.pointShadow,Ct.hemisphereLights.value=V.state.hemi,Ct.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ct.spotLightMatrix.value=V.state.spotLightMatrix,Ct.spotLightMap.value=V.state.spotLightMap,Ct.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=Zt,G.uniformsList=null,Zt}function Ul(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=Vc.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function oo(M,z){const k=T.get(M);k.outputColorSpace=z.outputColorSpace,k.batching=z.batching,k.batchingColor=z.batchingColor,k.instancing=z.instancing,k.instancingColor=z.instancingColor,k.instancingMorph=z.instancingMorph,k.skinning=z.skinning,k.morphTargets=z.morphTargets,k.morphNormals=z.morphNormals,k.morphColors=z.morphColors,k.morphTargetsCount=z.morphTargetsCount,k.numClippingPlanes=z.numClippingPlanes,k.numIntersection=z.numClipIntersection,k.vertexAlphas=z.vertexAlphas,k.vertexTangents=z.vertexTangents,k.toneMapping=z.toneMapping}function lo(M,z){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(z.matrixWorld);for(let k=0,G=M.length;k<G;k++){const V=M[k];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function co(M,z,k,G,V){z.isScene!==!0&&(z=Kt),y.resetTextureUnits();const St=z.fog,bt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?z.environment:null,xt=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:se.workingColorSpace,Tt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Rt=H.get(G.envMap||bt,Tt),Vt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Zt=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!k.morphAttributes.position,xe=!!k.morphAttributes.normal,Ge=!!k.morphAttributes.color;let Ie=Pi;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ie=D.toneMapping);const Ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,gn=Ee!==void 0?Ee.length:0,Et=T.get(G),Fn=b.state.lights;if(we===!0&&(kt===!0||M!==P)){const Re=M===P&&G.id===N;yt.setState(G,M,Re)}let oe=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Fn.state.version||Et.outputColorSpace!==xt||V.isBatchedMesh&&Et.batching===!1||!V.isBatchedMesh&&Et.batching===!0||V.isBatchedMesh&&Et.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Et.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Et.instancing===!1||!V.isInstancedMesh&&Et.instancing===!0||V.isSkinnedMesh&&Et.skinning===!1||!V.isSkinnedMesh&&Et.skinning===!0||V.isInstancedMesh&&Et.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Et.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Et.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Et.instancingMorph===!1&&V.morphTexture!==null||Et.envMap!==Rt||G.fog===!0&&Et.fog!==St||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==yt.numPlanes||Et.numIntersection!==yt.numIntersection)||Et.vertexAlphas!==Vt||Et.vertexTangents!==Zt||Et.morphTargets!==Ct||Et.morphNormals!==xe||Et.morphColors!==Ge||Et.toneMapping!==Ie||Et.morphTargetsCount!==gn||!!Et.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Et.__version=G.version);let ti=Et.currentProgram;oe===!0&&(ti=as(G,z,V),F&&G.isNodeMaterial&&F.onUpdateProgram(G,ti,Et));let Ti=!1,_a=!1,Fs=!1;const be=ti.getUniforms(),Ve=Et.uniforms;if(pt.useProgram(ti.program)&&(Ti=!0,_a=!0,Fs=!0),G.id!==N&&(N=G.id,_a=!0),Et.needsLights){const Re=lo(b.state.lightProbeGridArray,V);Et.lightProbeGrid!==Re&&(Et.lightProbeGrid=Re,_a=!0)}if(Ti||P!==M){pt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),be.setValue(B,"projectionMatrix",M.projectionMatrix),be.setValue(B,"viewMatrix",M.matrixWorldInverse);const xa=be.map.cameraPosition;xa!==void 0&&xa.setValue(B,_e.setFromMatrixPosition(M.matrixWorld)),fe.logarithmicDepthBuffer&&be.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&be.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),P!==M&&(P=M,_a=!0,Fs=!0)}if(Et.needsLights&&(Fn.state.directionalShadowMap.length>0&&be.setValue(B,"directionalShadowMap",Fn.state.directionalShadowMap,y),Fn.state.spotShadowMap.length>0&&be.setValue(B,"spotShadowMap",Fn.state.spotShadowMap,y),Fn.state.pointShadowMap.length>0&&be.setValue(B,"pointShadowMap",Fn.state.pointShadowMap,y)),V.isSkinnedMesh){be.setOptional(B,V,"bindMatrix"),be.setOptional(B,V,"bindMatrixInverse");const Re=V.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),be.setValue(B,"boneTexture",Re.boneTexture,y))}V.isBatchedMesh&&(be.setOptional(B,V,"batchingTexture"),be.setValue(B,"batchingTexture",V._matricesTexture,y),be.setOptional(B,V,"batchingIdTexture"),be.setValue(B,"batchingIdTexture",V._indirectTexture,y),be.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&be.setValue(B,"batchingColorTexture",V._colorsTexture,y));const va=k.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0)&&Y.update(V,k,ti),(_a||Et.receiveShadow!==V.receiveShadow)&&(Et.receiveShadow=V.receiveShadow,be.setValue(B,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&z.environment!==null&&(Ve.envMapIntensity.value=z.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=O3()),_a){if(be.setValue(B,"toneMappingExposure",D.toneMappingExposure),Et.needsLights&&$S(Ve,Fs),St&&G.fog===!0&&Z.refreshFogUniforms(Ve,St),Z.refreshMaterialUniforms(Ve,G,Dt,qt,b.state.transmissionRenderTarget[M.id]),Et.needsLights&&Et.lightProbeGrid){const Re=Et.lightProbeGrid;Ve.probesSH.value=Re.texture,Ve.probesMin.value.copy(Re.boundingBox.min),Ve.probesMax.value.copy(Re.boundingBox.max),Ve.probesResolution.value.copy(Re.resolution)}Vc.upload(B,Ul(Et),Ve,y)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Vc.upload(B,Ul(Et),Ve,y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&be.setValue(B,"center",V.center),be.setValue(B,"modelViewMatrix",V.modelViewMatrix),be.setValue(B,"normalMatrix",V.normalMatrix),be.setValue(B,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const Re=G.uniformsGroups;for(let xa=0,Hs=Re.length;xa<Hs;xa++){const Dm=Re[xa];X.update(Dm,ti),X.bind(Dm,ti)}}return ti}function $S(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function ty(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return nt},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,z,k){const G=T.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),T.get(M.texture).__webglTexture=z,T.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:k,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){const k=T.get(M);k.__webglFramebuffer=z,k.__useDefaultFramebuffer=z===void 0};const ey=B.createFramebuffer();this.setRenderTarget=function(M,z=0,k=0){I=M,q=z,nt=k;let G=null,V=!1,St=!1;if(M){const xt=T.get(M);if(xt.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(B.FRAMEBUFFER,xt.__webglFramebuffer),W.copy(M.viewport),tt.copy(M.scissor),ot=M.scissorTest,pt.viewport(W),pt.scissor(tt),pt.setScissorTest(ot),N=-1;return}else if(xt.__webglFramebuffer===void 0)y.setupRenderTarget(M);else if(xt.__hasExternalTextures)y.rebindTextures(M,T.get(M.texture).__webglTexture,T.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Vt=M.depthTexture;if(xt.__boundDepthTexture!==Vt){if(Vt!==null&&T.has(Vt)&&(M.width!==Vt.image.width||M.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(M)}}const Tt=M.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(St=!0);const Rt=T.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Rt[z])?G=Rt[z][k]:G=Rt[z],V=!0):M.samples>0&&y.useMultisampledRTT(M)===!1?G=T.get(M).__webglMultisampledFramebuffer:Array.isArray(Rt)?G=Rt[k]:G=Rt,W.copy(M.viewport),tt.copy(M.scissor),ot=M.scissorTest}else W.copy(ht).multiplyScalar(Dt).floor(),tt.copy(Ut).multiplyScalar(Dt).floor(),ot=It;if(k!==0&&(G=ey),pt.bindFramebuffer(B.FRAMEBUFFER,G)&&pt.drawBuffers(M,G),pt.viewport(W),pt.scissor(tt),pt.setScissorTest(ot),V){const xt=T.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,xt.__webglTexture,k)}else if(St){const xt=z;for(let Tt=0;Tt<M.textures.length;Tt++){const Rt=T.get(M.textures[Tt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Tt,Rt.__webglTexture,k,xt)}}else if(M!==null&&k!==0){const xt=T.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,xt.__webglTexture,k)}N=-1},this.readRenderTargetPixels=function(M,z,k,G,V,St,bt,xt=0){if(!(M&&M.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=T.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt){pt.bindFramebuffer(B.FRAMEBUFFER,Tt);try{const Rt=M.textures[xt],Vt=Rt.format,Zt=Rt.type;if(M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+xt),!fe.textureFormatReadable(Vt)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(Zt)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-G&&k>=0&&k<=M.height-V&&B.readPixels(z,k,G,V,w.convert(Vt),w.convert(Zt),St)}finally{const Rt=I!==null?T.get(I).__webglFramebuffer:null;pt.bindFramebuffer(B.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(M,z,k,G,V,St,bt,xt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=T.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt)if(z>=0&&z<=M.width-G&&k>=0&&k<=M.height-V){pt.bindFramebuffer(B.FRAMEBUFFER,Tt);const Rt=M.textures[xt],Vt=Rt.format,Zt=Rt.type;if(M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+xt),!fe.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ct),B.bufferData(B.PIXEL_PACK_BUFFER,St.byteLength,B.STREAM_READ),B.readPixels(z,k,G,V,w.convert(Vt),w.convert(Zt),0);const xe=I!==null?T.get(I).__webglFramebuffer:null;pt.bindFramebuffer(B.FRAMEBUFFER,xe);const Ge=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ib(B,Ge,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ct),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,St),B.deleteBuffer(Ct),B.deleteSync(Ge),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,k=0){const G=Math.pow(2,-k),V=Math.floor(M.image.width*G),St=Math.floor(M.image.height*G),bt=z!==null?z.x:0,xt=z!==null?z.y:0;y.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,k,0,0,bt,xt,V,St),pt.unbindTexture()};const ny=B.createFramebuffer(),iy=B.createFramebuffer();this.copyTextureToTexture=function(M,z,k=null,G=null,V=0,St=0){let bt,xt,Tt,Rt,Vt,Zt,Ct,xe,Ge;const Ie=M.isCompressedTexture?M.mipmaps[St]:M.image;if(k!==null)bt=k.max.x-k.min.x,xt=k.max.y-k.min.y,Tt=k.isBox3?k.max.z-k.min.z:1,Rt=k.min.x,Vt=k.min.y,Zt=k.isBox3?k.min.z:0;else{const Ve=Math.pow(2,-V);bt=Math.floor(Ie.width*Ve),xt=Math.floor(Ie.height*Ve),M.isDataArrayTexture?Tt=Ie.depth:M.isData3DTexture?Tt=Math.floor(Ie.depth*Ve):Tt=1,Rt=0,Vt=0,Zt=0}G!==null?(Ct=G.x,xe=G.y,Ge=G.z):(Ct=0,xe=0,Ge=0);const Ee=w.convert(z.format),gn=w.convert(z.type);let Et;z.isData3DTexture?(y.setTexture3D(z,0),Et=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(y.setTexture2DArray(z,0),Et=B.TEXTURE_2D_ARRAY):(y.setTexture2D(z,0),Et=B.TEXTURE_2D),pt.activeTexture(B.TEXTURE0),pt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),pt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),pt.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const Fn=pt.getParameter(B.UNPACK_ROW_LENGTH),oe=pt.getParameter(B.UNPACK_IMAGE_HEIGHT),ti=pt.getParameter(B.UNPACK_SKIP_PIXELS),Ti=pt.getParameter(B.UNPACK_SKIP_ROWS),_a=pt.getParameter(B.UNPACK_SKIP_IMAGES);pt.pixelStorei(B.UNPACK_ROW_LENGTH,Ie.width),pt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ie.height),pt.pixelStorei(B.UNPACK_SKIP_PIXELS,Rt),pt.pixelStorei(B.UNPACK_SKIP_ROWS,Vt),pt.pixelStorei(B.UNPACK_SKIP_IMAGES,Zt);const Fs=M.isDataArrayTexture||M.isData3DTexture,be=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){const Ve=T.get(M),va=T.get(z),Re=T.get(Ve.__renderTarget),xa=T.get(va.__renderTarget);pt.bindFramebuffer(B.READ_FRAMEBUFFER,Re.__webglFramebuffer),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,xa.__webglFramebuffer);for(let Hs=0;Hs<Tt;Hs++)Fs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,T.get(M).__webglTexture,V,Zt+Hs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,T.get(z).__webglTexture,St,Ge+Hs)),B.blitFramebuffer(Rt,Vt,bt,xt,Ct,xe,bt,xt,B.DEPTH_BUFFER_BIT,B.NEAREST);pt.bindFramebuffer(B.READ_FRAMEBUFFER,null),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||T.has(M)){const Ve=T.get(M),va=T.get(z);pt.bindFramebuffer(B.READ_FRAMEBUFFER,ny),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,iy);for(let Re=0;Re<Tt;Re++)Fs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ve.__webglTexture,V,Zt+Re):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ve.__webglTexture,V),be?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,va.__webglTexture,St,Ge+Re):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,va.__webglTexture,St),V!==0?B.blitFramebuffer(Rt,Vt,bt,xt,Ct,xe,bt,xt,B.COLOR_BUFFER_BIT,B.NEAREST):be?B.copyTexSubImage3D(Et,St,Ct,xe,Ge+Re,Rt,Vt,bt,xt):B.copyTexSubImage2D(Et,St,Ct,xe,Rt,Vt,bt,xt);pt.bindFramebuffer(B.READ_FRAMEBUFFER,null),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else be?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(Et,St,Ct,xe,Ge,bt,xt,Tt,Ee,gn,Ie.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Et,St,Ct,xe,Ge,bt,xt,Tt,Ee,Ie.data):B.texSubImage3D(Et,St,Ct,xe,Ge,bt,xt,Tt,Ee,gn,Ie):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,St,Ct,xe,bt,xt,Ee,gn,Ie.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,St,Ct,xe,Ie.width,Ie.height,Ee,Ie.data):B.texSubImage2D(B.TEXTURE_2D,St,Ct,xe,bt,xt,Ee,gn,Ie);pt.pixelStorei(B.UNPACK_ROW_LENGTH,Fn),pt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,oe),pt.pixelStorei(B.UNPACK_SKIP_PIXELS,ti),pt.pixelStorei(B.UNPACK_SKIP_ROWS,Ti),pt.pixelStorei(B.UNPACK_SKIP_IMAGES,_a),St===0&&z.generateMipmaps&&B.generateMipmap(Et),pt.unbindTexture()},this.initRenderTarget=function(M){T.get(M).__webglFramebuffer===void 0&&y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),pt.unbindTexture()},this.resetState=function(){q=0,nt=0,I=null,pt.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),n.unpackColorSpace=se._getUnpackColorSpace()}}function gl(e,t,n){return Math.min(n,Math.max(t,e))}function B3(e,t){return e+Math.random()*(t-e)}function f_(e,t=.05){return e*(1+(Math.random()-.5)*t)}function I3(e){const t=e.createGain(),n=e.createDynamicsCompressor();return t.gain.value=.72,n.threshold.value=-18,n.knee.value=18,n.ratio.value=4,n.attack.value=.012,n.release.value=.24,t.connect(n),n.connect(e.destination),{input:t,dispose(){t.disconnect(),n.disconnect()}}}function z3(e,t){const n=e.createGain(),i=e.createGain(),a=e.createBiquadFilter(),s=e.createBiquadFilter(),r=[55,82.5,110].map((l,c)=>{const h=e.createOscillator(),p=e.createGain();return h.type=c===1?"triangle":"sine",h.frequency.value=l,p.gain.value=.015-c*.003,h.connect(p),p.connect(n),h.start(),{osc:h,gain:p,frequency:l}}),o=JS(e,2);return a.type="lowpass",a.frequency.value=820,s.type="highpass",s.frequency.value=120,i.gain.value=.01,o.connect(s),s.connect(a),a.connect(i),n.connect(t),i.connect(t),o.start(),{update({playerSpeed:l,progressRatio:c,isWon:h},p){const u=gl(c,0,1),d=gl(l,0,1),v=Math.sin(p*22e-5)*.5+.5;r.forEach((E,g)=>{const f=E.frequency*(1+u*.12+v*.01*(g+1));E.osc.frequency.setTargetAtTime(f,e.currentTime,.8),E.gain.gain.setTargetAtTime((.012+u*.014)/(g+1),e.currentTime,.45)}),i.gain.setTargetAtTime(.008+d*.035+(h?.02:0),e.currentTime,.18),a.frequency.setTargetAtTime(520+d*1200+u*380,e.currentTime,.2)},dispose(){r.forEach(({osc:l,gain:c})=>{l.stop(),l.disconnect(),c.disconnect()}),o.stop(),o.disconnect(),a.disconnect(),s.disconnect(),n.disconnect(),i.disconnect()}}}function F3(e,t,{progress:n=0,total:i=1,isFinal:a=!1}={}){const s=e.currentTime,r=gl(n/Math.max(1,i),0,1),o=174.61*(1+r*.4),l=a?[o,o*1.5,o*2,o*2.5]:[o,o*1.25,o*1.5],c=a?3.2:1.65;l.forEach((h,p)=>{const u=e.createOscillator(),d=e.createGain(),v=e.createBiquadFilter(),E=s+p*.055;u.type=p%2===0?"sine":"triangle",u.frequency.setValueAtTime(f_(h,.015),E),u.frequency.exponentialRampToValueAtTime(f_(h*(a?2.1:1.42),.01),E+c*.72),v.type="lowpass",v.frequency.setValueAtTime(420+r*900,E),v.frequency.exponentialRampToValueAtTime(4200+r*2600,E+c*.62),d.gain.setValueAtTime(1e-4,E),d.gain.exponentialRampToValueAtTime(.08/(p+1),E+.035),d.gain.exponentialRampToValueAtTime(1e-4,E+c),u.connect(v),v.connect(d),d.connect(t),u.start(E),u.stop(E+c+.05),u.addEventListener("ended",()=>{u.disconnect(),v.disconnect(),d.disconnect()},{once:!0})}),H3(e,t,s,r,a)}function JS(e,t=1){const n=Math.max(1,Math.floor(e.sampleRate*t)),i=e.createBuffer(1,n,e.sampleRate),a=i.getChannelData(0);let s=0;for(let o=0;o<n;o+=1)s=s*.92+B3(-1,1)*.08,a[o]=s;const r=e.createBufferSource();return r.buffer=i,r.loop=!0,r}function H3(e,t,n,i,a){const s=JS(e,.6),r=e.createBiquadFilter(),o=e.createGain(),l=a?1.2:.62;r.type="bandpass",r.Q.value=8,r.frequency.setValueAtTime(1600+i*800,n),r.frequency.exponentialRampToValueAtTime(7200,n+l*.7),o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(a?.06:.038,n+.02),o.gain.exponentialRampToValueAtTime(1e-4,n+l),s.connect(r),r.connect(o),o.connect(t),s.start(n),s.stop(n+l+.02),s.addEventListener("ended",()=>{s.disconnect(),r.disconnect(),o.disconnect()},{once:!0})}class G3{constructor(){this.audioContext=null,this.masterBus=null,this.ambientBed=null,this.isDisposed=!1,this.isUnlocked=!1,this.lastState={playerSpeed:0,progressRatio:0,isWon:!1}}async unlock(){var t;if(this.isDisposed||typeof window>"u")return!1;if(!this.audioContext){const n=window.AudioContext||window.webkitAudioContext;if(!n)return!1;this.audioContext=new n,this.masterBus=I3(this.audioContext),this.ambientBed=z3(this.audioContext,this.masterBus.input)}return this.audioContext.state!=="running"&&await this.audioContext.resume(),this.isUnlocked=this.audioContext.state==="running",(t=this.ambientBed)==null||t.update(this.lastState,Date.now()),this.isUnlocked}update(t){this.lastState={playerSpeed:gl(t.playerSpeed??this.lastState.playerSpeed,0,1),progressRatio:gl(t.progressRatio??this.lastState.progressRatio,0,1),isWon:!!t.isWon},!(!this.isUnlocked||!this.ambientBed)&&this.ambientBed.update(this.lastState,Date.now())}async playShrineIgnite(t){!await this.unlock()||!this.audioContext||!this.masterBus||F3(this.audioContext,this.masterBus.input,t)}dispose(){var t,n;this.isDisposed=!0,(t=this.ambientBed)==null||t.dispose(),(n=this.masterBus)==null||n.dispose(),this.audioContext&&this.audioContext.state!=="closed"&&this.audioContext.close(),this.audioContext=null,this.masterBus=null,this.ambientBed=null}}function V3(){return new G3}const h_={shrineAirLift:12,startShrineAirLift:10,orbitRadius:10.5,orbitVerticalSpan:2.6,orbitSpeed:.001,orbitHoldDistance:48,perceptionRadius:22,minSpeed:.18,maxSpeed:.38,cohesionWeight:.024,alignmentWeight:.032,separationWeight:.088,targetWeight:.068,noiseWeight:.01,groundClearance:8},d_={intensity:.32,distance:18,decay:2,pulse:.12},X3=()=>{const e=on.useRef(),[t,n]=on.useState(0),[i,a]=on.useState(0),[s,r]=on.useState(!1),[o,l]=on.useState(!1),[c,h]=on.useState(!1),[p,u]=on.useState(h_),[d,v]=on.useState(d_),[E,g]=on.useState(!1),f=on.useRef(h_),m=on.useRef(d_),_={worldSize:500,segments:100,obeliskHeight:85,playerHeight:2.2,moveSpeed:.38,gravity:.008,interactDist:15,obeliskCount:5,fireflyCount:20,trailLength:50},S={skyTwilight:988970,fogColor:132631,snow:new Yt(2236966),pink:new Yt(16756684),blue:new Yt(10670847),glow:6333946,fire:15680580},C=!1;return on.useEffect(()=>{f.current=p},[p]),on.useEffect(()=>{m.current=d},[d]),on.useEffect(()=>{var x;const b=window.matchMedia("(pointer: coarse)"),R=()=>{h(b.matches||navigator.maxTouchPoints>0)};return R(),(x=b.addEventListener)==null||x.call(b,"change",R),()=>{var A;(A=b.removeEventListener)==null||A.call(b,"change",R)}},[]),on.useEffect(()=>{if(!e.current)return;let b=0,R=!1;const x=V3(),A=(L,Y,it)=>Math.max(Y,Math.min(it,L)),D=new pT;D.background=new Yt(S.skyTwilight),D.fog=new Sm(S.fogColor,.006);const U=new PT(16777215,1118498,1.1);D.add(U);const F=new kn(75,window.innerWidth/window.innerHeight,.1,3e3),q=new P3({antialias:!0});q.setSize(window.innerWidth,window.innerHeight),q.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.current.appendChild(q.domElement);const I=(()=>{const L=document.createElement("canvas");L.width=64,L.height=64;const Y=L.getContext("2d"),it=Y.createRadialGradient(32,32,0,32,32,32);return it.addColorStop(0,"rgba(255, 255, 255, 1)"),it.addColorStop(.2,"rgba(255, 255, 255, 0.5)"),it.addColorStop(1,"rgba(255, 255, 255, 0)"),Y.fillStyle=it,Y.fillRect(0,0,64,64),new Dg(L)})(),N=(L,Y)=>{const it=Math.sin(L*.045)*Math.cos(Y*.045)*2.8,lt=Math.cos(L*.02+Y*.03)*3.5;return it+lt},P=new Dl(1200,1200,_.segments,_.segments);P.rotateX(-Math.PI/2);const W=P.attributes.position.array,tt=[];for(let L=0;L<W.length/3;L++){const Y=W[L*3],it=W[L*3+2],lt=N(Y,it);W[L*3+1]=lt;const w=S.snow.clone().multiplyScalar(.4+lt*.1);tt.push(w.r,w.g,w.b)}P.setAttribute("color",new mn(tt,3));const ot=new Ao({vertexColors:!0,roughness:1}),Mt=new xn(P,ot);D.add(Mt);const ct={pos:new O(0,10,20),vel:new O,yaw:0,pitch:0},Pt=[],qt=[],Dt=[],et=(L,Y)=>{const it=new Gc({map:I,color:L,transparent:!0,opacity:0,blending:Er}),lt=new ah(it);return lt.scale.set(Y,Y,1),lt},mt=(L,Y,it,lt)=>{const w=Math.sin(lt*1.25)*8,j=Math.cos(lt*.85)*5;L.beginPath(),L.moveTo(Y*.08,it*.52+w*.25),L.bezierCurveTo(Y*.16,it*.16+j,Y*.36,it*.16-w,Y*.58,it*.23),L.bezierCurveTo(Y*.76,it*.29+j,Y*.91,it*.39,Y*.96,it*.51),L.bezierCurveTo(Y*.89,it*.63+w,Y*.73,it*.72+j,Y*.55,it*.75),L.bezierCurveTo(Y*.32,it*.81+w,Y*.16,it*.73,Y*.08,it*.52+w*.25),L.closePath()},ht=(L,Y,it,lt)=>{L.clearRect(0,0,Y,it),L.save(),mt(L,Y,it,lt),L.clip(),L.fillStyle="rgba(5, 12, 30, 0.18)",L.fillRect(0,0,Y,it);const w=[{x:.28,y:.38,r:.48,rgb:"162, 210, 255",speed:.9},{x:.56,y:.56,r:.54,rgb:"255, 175, 204",speed:1.2},{x:.76,y:.42,r:.42,rgb:"96, 165, 250",speed:.7},{x:.38,y:.67,r:.38,rgb:"212, 196, 168",speed:1}];L.globalCompositeOperation="lighter",w.forEach((j,X)=>{const rt=Math.sin(lt*j.speed+X*1.7)*Y*.08,at=Math.cos(lt*(j.speed+.25)+X)*it*.08,Q=Y*j.x+rt,vt=it*j.y+at,wt=Math.max(Y,it)*j.r,Bt=L.createRadialGradient(Q,vt,0,Q,vt,wt);Bt.addColorStop(0,`rgba(${j.rgb}, 0.78)`),Bt.addColorStop(.45,`rgba(${j.rgb}, 0.22)`),Bt.addColorStop(1,`rgba(${j.rgb}, 0)`),L.fillStyle=Bt,L.fillRect(0,0,Y,it)}),L.globalCompositeOperation="source-over";for(let j=0;j<9;j+=1){const X=it*(.33+j*.045),rt=Math.sin(lt*1.1+j*.8)*18;L.beginPath(),L.moveTo(Y*.16,X),L.bezierCurveTo(Y*.36,X-34+rt,Y*.58,X+32-rt,Y*.86,X+rt*.35),L.strokeStyle=`rgba(226, 246, 255, ${.16-j*.008})`,L.lineWidth=1.4,L.stroke()}L.restore(),L.save(),mt(L,Y,it,lt),L.strokeStyle="rgba(212, 241, 255, 0.28)",L.lineWidth=3,L.stroke(),L.restore()},Ut=()=>{const L=document.createElement("canvas");L.width=512,L.height=256;const Y=L.getContext("2d"),it=new Dg(L);it.minFilter=sn,it.magFilter=sn,it.needsUpdate=!0;const lt=new Gc({map:it,transparent:!0,opacity:.66,blending:Er,depthWrite:!1}),w=new br;w.position.set(0,112,-220);const j=new ah(lt);j.scale.set(118,52,1),w.add(j);const X=new Gc({map:I,color:S.blue,transparent:!0,opacity:.18,blending:Er,depthWrite:!1}),rt=[];for(let Bt=0;Bt<7;Bt+=1){const Wt=new ah(X);Wt.position.set(-46-Bt*6,-14-Bt*1.5,-.2),Wt.scale.set(5+Bt%3*1.8,32+Bt*4,1),w.add(Wt),rt.push(Wt)}const at=new Bg(S.blue,.75,170,2);w.add(at),D.add(w);const Q=new O,vt=new O,wt=new O;return{update(Bt,Wt,tn){const $t=Bt*.001;ht(Y,L.width,L.height,$t),it.needsUpdate=!0;const yn=tn+Math.sin($t*.07)*.18;vt.set(-Math.sin(yn),0,-Math.cos(yn)).multiplyScalar(215),wt.set(-Math.cos(tn),0,Math.sin(tn)).multiplyScalar(48*Math.sin($t*.13)),Q.copy(Wt).add(vt).add(wt),Q.y=Wt.y+104+Math.sin($t*.38)*16,w.position.lerp(Q,.018);const Rn=.5+Math.sin($t*1.35)*.5;lt.opacity=.58+Rn*.16,at.intensity=.48+Rn*.28,j.scale.set(118+Math.sin($t*.9)*5,52+Math.cos($t*.7)*3,1),rt.forEach((bi,In)=>{const zn=Math.sin($t*(.82+In*.05)+In*.9);bi.position.x=-44-In*6+Math.cos($t*.54+In)*5,bi.position.y=-16-In*1.6+zn*4,bi.scale.set(5+In%3*1.8,32+In*4+zn*7,1)})},dispose(){D.remove(w),it.dispose(),lt.dispose(),X.dispose()}}},It=()=>{const L=[];for(let Y=0;Y<_.obeliskCount;Y++){let it,lt;do it=(Math.random()-.5)*_.worldSize,lt=(Math.random()-.5)*_.worldSize;while(Math.hypot(it,lt)<100||L.some(w=>Math.hypot(w.x-it,w.z-lt)<130));L.push({x:it,z:lt})}return a(_.obeliskCount),L},Lt=(L,Y,it=!1)=>{const lt=N(L,Y),w=new br;if(w.position.set(L,lt,Y),it){const j=new xn(new Za(3.5,3.5,3.5),new Ao({color:16777215,emissive:16777215,emissiveIntensity:2}));j.position.set(0,1.75,0),w.add(j);const X=et(16777215,20);X.position.y=3,X.material.opacity=.5,w.add(X),D.add(w);const rt=new O(L,lt+1.75,Y),at=rt.clone().add(new O(0,f.current.startShrineAirLift,0));Pt.push({pillar:null,shrine:j,tipGlow:X,shrineGlow:X,pos:new O(L,lt,Y),tipPos:new O(L,lt+5,Y),shrinePos:rt,shrineAirPos:at,activated:!0})}else{const j=new xn(new Za(5.5,_.obeliskHeight,5.5),new Ao({color:65793}));j.position.y=_.obeliskHeight/2-2,w.add(j);const X=new xn(new bm(2.5),new Ao({color:1118481}));X.position.y=_.obeliskHeight+2,w.add(X);const rt=et(S.blue,15);rt.position.y=_.obeliskHeight+2,w.add(rt);const at=new xn(new Za(3,3,3),new Ao({color:526344}));at.position.set(0,1.5,12),at.userData={id:Pt.length},w.add(at),qt.push(at);const Q=f.current,vt=new O(L,lt+1.5,Y+12),wt=vt.clone().add(new O(0,Q.shrineAirLift,0)),Bt=et(S.pink,12);Bt.position.set(0,3,12),w.add(Bt),D.add(w),Pt.push({pillar:j,shrine:at,tipGlow:rt,shrineGlow:Bt,pos:new O(L,lt,Y),tipPos:new O(L,lt+_.obeliskHeight+2,Y),shrinePos:vt,shrineAirPos:wt,activated:!1})}};Lt(0,0,!0),It().forEach(L=>Lt(L.x,L.z));class we{constructor(Y,it){const lt=f.current,w=m.current;this.mesh=new xn(new Cu(.25,8,8),new Tu({color:16777215})),this.index=it,this.orbitOffset=Math.random()*Math.PI*2,this.orbitRadius=lt.orbitRadius+(Math.random()-.5)*2.4,this.orbitDirection=Math.random()>.5?1:-1,this.turnRate=.032+Math.random()*.018,this.cruiseSpeed=ks.lerp(lt.minSpeed,lt.maxSpeed,.36+Math.random()*.28),this.speed=this.cruiseSpeed,this.noiseSeed=Math.random()*1e3,this.lightPhase=Math.random()*Math.PI*2;const j=new O((Math.random()-.5)*6.5,(Math.random()-.5)*3,(Math.random()-.5)*6.5);this.pos=Y.clone().add(j),this.forward=new O(Math.random()-.5,(Math.random()-.5)*.2,Math.random()-.5).normalize(),this.vel=this.forward.clone().multiplyScalar(this.speed),this.trailPoints=[];for(let rt=0;rt<_.trailLength;rt++)this.trailPoints.push(this.pos.clone());const X=new Float32Array(_.trailLength);for(let rt=0;rt<_.trailLength;rt++)X[rt]=1-rt/_.trailLength;this.trailGeo=new Bn().setFromPoints(this.trailPoints),this.trailGeo.setAttribute("alpha",new di(X,1)),this.trailMat=new Mi({transparent:!0,uniforms:{color:{value:new Yt(S.glow)}},vertexShader:`
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
          `,blending:Er}),this.line=new AT(this.trailGeo,this.trailMat),this.localLight=new Bg(S.blue,w.intensity,w.distance,w.decay),this.localLight.position.copy(this.pos),this.mesh.position.copy(this.pos),D.add(this.mesh),D.add(this.line),D.add(this.localLight)}update(Y,it,lt){const w=f.current,j=m.current,X=new O,rt=new O,at=new O;let Q=0;it.forEach($t=>{const yn=this.pos.distanceTo($t.pos);if(yn>0&&yn<w.perceptionRadius){const Rn=1-yn/w.perceptionRadius;X.add($t.pos),at.add($t.forward),rt.add(this.pos.clone().sub($t.pos).normalize().multiplyScalar(Rn)),Q++}}),Q>0&&(X.divideScalar(Q).sub(this.pos).multiplyScalar(w.cohesionWeight),at.divideScalar(Q).sub(this.forward).multiplyScalar(w.alignmentWeight),rt.divideScalar(Q).multiplyScalar(w.separationWeight));let vt=new O;if(Y.mode==="orbit"){const $t=lt*w.orbitSpeed*this.orbitDirection+this.orbitOffset,yn=Y.center.clone().add(new O(Math.cos($t)*this.orbitRadius,Math.sin(lt*.0017+this.orbitOffset)*Y.verticalSpan,Math.sin($t)*this.orbitRadius)),Rn=new O(-Math.sin($t)*this.orbitDirection,0,Math.cos($t)*this.orbitDirection).multiplyScalar(this.orbitRadius*.4);vt.copy(yn.add(Rn).sub(this.pos)).multiplyScalar(w.targetWeight)}else vt.copy(Y.destination).sub(this.pos).multiplyScalar(w.targetWeight);const wt=new O(Math.sin(lt*.0012+this.noiseSeed),Math.sin(lt*.0017+this.noiseSeed*1.7)*.35,Math.cos(lt*.001+this.noiseSeed*.7)).multiplyScalar(w.noiseWeight),Bt=this.forward.clone().add(vt).add(X).add(at).add(rt).add(wt);Bt.lengthSq()>0&&(Bt.normalize(),this.forward.lerp(Bt,this.turnRate).normalize());const Wt=Y.mode==="orbit"?this.cruiseSpeed*.92:this.cruiseSpeed*1.06;this.speed=ks.lerp(this.speed,A(Wt,w.minSpeed,w.maxSpeed),.04),this.vel.copy(this.forward).multiplyScalar(this.speed),this.pos.add(this.vel);const tn=N(this.pos.x,this.pos.z)+w.groundClearance;this.pos.y<tn&&(this.pos.y=ks.lerp(this.pos.y,tn,.28),this.forward.y=Math.abs(this.forward.y)+.18,this.forward.normalize()),this.mesh.position.copy(this.pos),this.localLight.position.copy(this.pos),this.localLight.intensity=j.intensity*(.82+Math.sin(lt*.006+this.lightPhase)*j.pulse),this.localLight.distance=j.distance,this.localLight.decay=j.decay;for(let $t=_.trailLength-1;$t>0;$t--)this.trailPoints[$t].copy(this.trailPoints[$t-1]);this.trailPoints[0].copy(this.pos),this.trailGeo.setFromPoints(this.trailPoints),this.trailGeo.attributes.position.needsUpdate=!0}dispose(){D.remove(this.mesh),D.remove(this.line),D.remove(this.localLight),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.trailGeo.dispose(),this.trailMat.dispose()}}const kt=[],ue=Pt[0].shrineAirPos;for(let L=0;L<_.fireflyCount;L++)kt.push(new we(ue,L));const _e=Ut(),zt={moveX:0,moveY:0},Kt={left:-1,right:-1,lx:0,ly:0,rx:0,ry:0},Qt={KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1,ArrowLeft:!1,ArrowRight:!1,KeyQ:!1,KeyE:!1},Me={locked:!1,dragging:!1,lastX:0,lastY:0},B=.0024,Be=.005,Jt=.032,fe=(L,Y,it)=>{ct.yaw-=L*it,ct.pitch=A(ct.pitch-Y*it,-1.4,1.4)},pt=()=>({moveX:(Qt.KeyD||Qt.ArrowRight?1:0)-(Qt.KeyA||Qt.ArrowLeft?1:0),moveY:(Qt.KeyW||Qt.ArrowUp?1:0)-(Qt.KeyS||Qt.ArrowDown?1:0),turn:(Qt.KeyQ?1:0)-(Qt.KeyE?1:0)}),Ae=()=>{const L=new zg;L.setFromCamera(new Ht(0,0),F);const Y=L.intersectObjects(qt);if(Y.length>0){const it=Y[0].object.userData.id,lt=Pt[it];if(ct.pos.distanceTo(lt.pos)<_.interactDist&&!lt.activated){lt.activated=!0,lt.pillar.material.color.set(16777215),lt.pillar.material.emissive.set(16777215),lt.pillar.material.emissiveIntensity=2,lt.shrine.material.color.set(16777215),lt.shrine.material.emissive.set(16777215),lt.shrine.material.emissiveIntensity=2,lt.tipGlow.material.opacity=.6,lt.shrineGlow.material.opacity=.6;const w=Pt.reduce((j,X)=>j+(X.pillar&&X.activated?1:0),0);x.playShrineIgnite({progress:w,total:_.obeliskCount,isFinal:w===_.obeliskCount}),n(j=>(j+1===_.obeliskCount&&r(!0),j+1))}}},T=L=>{L.preventDefault(),x.unlock();for(let Y of L.changedTouches)Y.clientX<window.innerWidth/2?(Kt.left=Y.identifier,Kt.lx=Y.clientX,Kt.ly=Y.clientY):(Kt.right=Y.identifier,Kt.rx=Y.clientX,Kt.ry=Y.clientY,Ae())},y=L=>{L.preventDefault();for(let Y of L.changedTouches)Y.identifier===Kt.left?(zt.moveX=A((Y.clientX-Kt.lx)/50,-1,1),zt.moveY=A(-(Y.clientY-Kt.ly)/50,-1,1)):Y.identifier===Kt.right&&(fe(Y.clientX-Kt.rx,Y.clientY-Kt.ry,Be),Kt.rx=Y.clientX,Kt.ry=Y.clientY)},H=L=>{for(let Y of L.changedTouches)Y.identifier===Kt.left?(Kt.left=-1,zt.moveX=0,zt.moveY=0):Y.identifier===Kt.right&&(Kt.right=-1)},K=L=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(L.code)&&L.preventDefault(),L.repeat||x.unlock(),Object.hasOwn(Qt,L.code)&&(Qt[L.code]=!0),L.code==="Space"&&!L.repeat&&Ae()},st=L=>{Object.hasOwn(Qt,L.code)&&(Qt[L.code]=!1)},ut=()=>{Me.locked=document.pointerLockElement===q.domElement,Me.locked||(Me.dragging=!1)},dt=L=>{var Y,it;L.button===0&&(x.unlock(),Me.dragging=!0,Me.lastX=L.clientX,Me.lastY=L.clientY,(it=(Y=q.domElement).requestPointerLock)==null||it.call(Y))},Z=L=>{if(Me.locked){fe(L.movementX,L.movementY,B);return}Me.dragging&&(fe(L.clientX-Me.lastX,L.clientY-Me.lastY,Be),Me.lastX=L.clientX,Me.lastY=L.clientY)},J=()=>{Me.dragging=!1},gt=L=>{L.button===0&&Ae()},yt=L=>{L.preventDefault()};window.addEventListener("touchstart",T,{passive:!1}),window.addEventListener("touchmove",y,{passive:!1}),window.addEventListener("touchend",H),window.addEventListener("touchcancel",H),window.addEventListener("keydown",K),window.addEventListener("keyup",st),window.addEventListener("mousemove",Z),window.addEventListener("mouseup",J),document.addEventListener("pointerlockchange",ut),q.domElement.addEventListener("mousedown",dt),q.domElement.addEventListener("click",gt),q.domElement.addEventListener("contextmenu",yt);const ft=()=>{if(R)return;b=requestAnimationFrame(ft);const L=pt();L.turn!==0&&(ct.yaw+=L.turn*Jt);const Y=new O(-Math.sin(ct.yaw),0,-Math.cos(ct.yaw)),it=new O(-Math.cos(ct.yaw),0,Math.sin(ct.yaw)),lt=A(zt.moveX+L.moveX,-1,1),w=A(zt.moveY+L.moveY,-1,1),j=new O().addScaledVector(Y,w).addScaledVector(it,-lt),X=A(j.length(),0,1);X>0&&ct.pos.addScaledVector(j.normalize(),_.moveSpeed);const rt=N(ct.pos.x,ct.pos.z)+_.playerHeight;ct.vel.y-=_.gravity,ct.pos.y+=ct.vel.y,ct.pos.y<rt&&(ct.pos.y=rt,ct.vel.y=0),F.position.copy(ct.pos),F.rotation.set(ct.pitch,ct.yaw,0,"YXZ");let at=Pt[0],Q=null,vt=1/0,wt=0;Pt.forEach(ve=>{if(ve.activated)at=ve,ve.pillar&&(wt+=1);else{const he=ct.pos.distanceTo(ve.pos);he<vt&&(vt=he,Q=ve)}});const Bt=Date.now();_e.update(Bt,ct.pos,ct.yaw);const Wt=f.current,tn=ct.pos.distanceTo(at.shrinePos)<Wt.orbitHoldDistance,$t=!Q||tn?{mode:"orbit",center:at.shrineAirPos,verticalSpan:Wt.orbitVerticalSpan}:{mode:"travel",destination:Q.tipPos};kt.forEach(ve=>ve.update($t,kt,Bt));let yn=.6;x.update({playerSpeed:X,progressRatio:wt/_.obeliskCount,isWon:wt>=_.obeliskCount});const Rn=P.attributes.color,bi=P.attributes.position;let In=!1;Pt.forEach(ve=>{if(ve.activated){if(Math.random()>.86){const he=new xn(new Cu(.12),new Tu({color:S.fire,transparent:!0}));he.position.copy(ve.shrinePos).add(new O((Math.random()-.5)*2,.5,(Math.random()-.5)*2)),he.userData={v:new O((Math.random()-.5)*.03,.08,(Math.random()-.5)*.03),l:1},D.add(he),Dt.push(he)}yn+=Math.max(0,1-ct.pos.distanceTo(ve.pos)/160)*.7,ve.tipGlow.material.opacity=.4+Math.sin(Date.now()*.003)*.2,ve.shrineGlow.material.opacity=.4+Math.sin(Date.now()*.003+1)*.2;for(let he=0;he<bi.count;he++){const as=bi.getX(he),Ul=bi.getZ(he),oo=Math.hypot(as-ve.pos.x,Ul-ve.pos.z);if(oo<65){const lo=Math.max(0,1-oo/65),co=S.pink.clone().lerp(S.blue,Math.sin(as*.1)*.5+.5);Rn.setXYZ(he,ks.lerp(Rn.getX(he),co.r,lo*.06),ks.lerp(Rn.getY(he),co.g,lo*.06),ks.lerp(Rn.getZ(he),co.b,lo*.06)),In=!0}}}}),In&&(Rn.needsUpdate=!0);for(let ve=Dt.length-1;ve>=0;ve--){const he=Dt[ve];he.position.add(he.userData.v),he.userData.l-=.015,he.material.opacity=he.userData.l,he.scale.setScalar(he.userData.l),he.userData.l<=0&&(D.remove(he),Dt.splice(ve,1))}const zn=new Yt(S.skyTwilight).multiplyScalar(Math.max(.4,Math.min(1.6,yn)));D.background.lerp(zn,.04),D.fog.color.lerp(zn,.04);const zs=new zg;zs.setFromCamera(new Ht(0,0),F);const so=zs.intersectObjects(qt),ro=so.length>0&&ct.pos.distanceTo(so[0].object.parent.position)<_.interactDist;l(ve=>ve===ro?ve:ro),q.render(D,F)};return ft(),()=>{var L,Y;R=!0,b&&cancelAnimationFrame(b),x.dispose(),kt.forEach(it=>it.dispose()),_e.dispose(),window.removeEventListener("touchstart",T),window.removeEventListener("touchmove",y),window.removeEventListener("touchend",H),window.removeEventListener("touchcancel",H),window.removeEventListener("keydown",K),window.removeEventListener("keyup",st),window.removeEventListener("mousemove",Z),window.removeEventListener("mouseup",J),document.removeEventListener("pointerlockchange",ut),q.domElement.removeEventListener("mousedown",dt),q.domElement.removeEventListener("click",gt),q.domElement.removeEventListener("contextmenu",yt),document.pointerLockElement===q.domElement&&((L=document.exitPointerLock)==null||L.call(document)),(Y=e.current)==null||Y.removeChild(q.domElement)}},[]),At.jsxs("div",{className:"fixed inset-0 overflow-hidden bg-[#050510] select-none touch-none",children:[At.jsx("div",{ref:e,className:"w-full h-full"}),At.jsxs("div",{className:"absolute top-14 left-10 text-white pointer-events-none tracking-[0.5em] uppercase",children:[At.jsx("h1",{className:"text-3xl font-extralight drop-shadow-2xl",children:"Lumina"}),At.jsx("div",{className:"h-[2px] w-12 bg-white/30 my-4"}),At.jsx("p",{className:"text-[9px] opacity-40",children:"Follow the celestial threads"})]}),At.jsxs("div",{className:"absolute top-14 right-8 z-20 flex flex-col items-end gap-2",children:[C,At.jsxs("div",{className:"bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-6 py-2 text-white flex items-center gap-3",children:[At.jsx("span",{className:"text-[9px] opacity-25 tracking-widest",children:"SIGILS"}),At.jsxs("span",{className:"text-xl font-bold",children:[t," / ",i]})]}),C]}),At.jsxs("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",children:[At.jsx("div",{className:`w-2 h-2 rounded-full transition-all duration-300 ${o?"bg-white scale-[3.5] shadow-[0_0_30px_#fff]":"bg-white/10"}`}),At.jsx("div",{className:`absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${o?"opacity-100 -top-10":"opacity-0"}`}),At.jsx("div",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/15 transition-all ${o?"opacity-100 -bottom-10":"opacity-0"}`})]}),At.jsx("div",{className:`absolute bottom-24 left-1/2 -translate-x-1/2 transition-all duration-700 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-6 pointer-events-none"}`,children:At.jsxs("div",{className:"bg-white/10 backdrop-blur-xl border border-white/20 px-10 py-3 rounded-full text-white text-[10px] tracking-[0.4em] uppercase flex items-center gap-3",children:[c?At.jsxs("span",{className:"flex items-center gap-3",children:[At.jsx("strong",{className:"font-semibold text-white",children:"Ignite"}),At.jsx("span",{className:"text-white/60 tracking-[0.2em]",children:"Tap Right Half"})]}):At.jsxs("span",{className:"flex items-center gap-3",children:[At.jsx("strong",{className:"font-semibold text-white",children:"Ignite"}),At.jsx("span",{className:"text-white/60 tracking-[0.2em]",children:"Space / Click"})]}),At.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-ping"})]})}),At.jsx("div",{className:`absolute bottom-8 left-8 right-8 flex ${c?"justify-end":"justify-start"} text-white/75 text-[10px] tracking-[0.25em] uppercase pointer-events-none`,children:At.jsxs("div",{className:`max-w-sm rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-2xl ${c?"text-right":""}`,children:[At.jsx("p",{className:"text-white/35",children:c?"Touch":"Desktop"}),c?At.jsxs(At.Fragment,{children:[At.jsxs("p",{className:"mt-2 leading-relaxed",children:[At.jsx("strong",{className:"font-semibold text-white",children:"Move"}),At.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Drag Left Half"})]}),At.jsxs("p",{className:"leading-relaxed",children:[At.jsx("strong",{className:"font-semibold text-white",children:"Look"}),At.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Drag Right Half"})]}),At.jsxs("p",{className:"leading-relaxed",children:[At.jsx("strong",{className:"font-semibold text-white",children:"Interact"}),At.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Tap Right Half"})]})]}):At.jsxs(At.Fragment,{children:[At.jsxs("p",{className:"mt-2 leading-relaxed",children:[At.jsx("strong",{className:"font-semibold text-white",children:"Move"}),At.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"WASD / Arrows"})]}),At.jsxs("p",{className:"leading-relaxed",children:[At.jsx("strong",{className:"font-semibold text-white",children:"Rotate"}),At.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Q / E"})]}),At.jsxs("p",{className:"leading-relaxed",children:[At.jsx("strong",{className:"font-semibold text-white",children:"Look"}),At.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Mouse"})]}),At.jsxs("p",{className:"leading-relaxed",children:[At.jsx("strong",{className:"font-semibold text-white",children:"Interact"}),At.jsx("span",{className:"ml-3 text-white/60 tracking-[0.15em]",children:"Space / Click"})]})]})]})}),s&&At.jsxs("div",{className:"absolute inset-0 bg-white z-[999] flex flex-col items-center justify-center animate-in fade-in duration-[3000ms]",children:[At.jsx("div",{className:"text-blue-400 text-6xl mb-10 font-thin italic tracking-widest",children:"AETHER"}),At.jsx("h2",{className:"text-4xl font-extralight text-slate-800 tracking-[0.6em] uppercase text-center ml-[0.6em]",children:"极境归元"}),At.jsx("p",{className:"text-slate-400 mt-6 max-w-xs text-center text-[11px] tracking-widest px-8 font-light leading-loose",children:"光之脉络已编织完成。世界重获灵魂，温暖与色彩将永驻这片山脉。"}),At.jsx("button",{onPointerDown:b=>{b.stopPropagation(),window.location.reload()},className:"mt-16 px-16 py-4 bg-slate-900 text-white rounded-full text-[10px] tracking-[0.5em] uppercase active:scale-95 transition-transform",children:"Restart the Dream"})]}),At.jsx("style",{children:`
        canvas { touch-action: none; -webkit-user-select: none; }
        body { margin: 0; background: #050510; height: 100vh; overflow: hidden; }
        * { -webkit-tap-highlight-color: transparent; }
      `})]})};nb.createRoot(document.getElementById("root")).render(At.jsx(X3,{}));
