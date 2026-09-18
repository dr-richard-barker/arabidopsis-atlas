(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var ld={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function VM(){if(uv)return al;uv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var d in l)d!=="key"&&(f[d]=l[d])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:f}}return al.Fragment=e,al.jsx=i,al.jsxs=i,al}var cv;function XM(){return cv||(cv=1,ld.exports=VM()),ld.exports}var Kt=XM(),ud={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function kM(){if(fv)return le;fv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(I){return I===null||typeof I!="object"?null:(I=M&&I[M]||I["@@iterator"],typeof I=="function"?I:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,y={};function P(I,ct,$){this.props=I,this.context=ct,this.refs=y,this.updater=$||A}P.prototype.isReactComponent={},P.prototype.setState=function(I,ct){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ct,"setState")},P.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function O(){}O.prototype=P.prototype;function w(I,ct,$){this.props=I,this.context=ct,this.refs=y,this.updater=$||A}var F=w.prototype=new O;F.constructor=w,x(F,P.prototype),F.isPureReactComponent=!0;var B=Array.isArray;function L(){}var q={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function C(I,ct,$){var it=$.ref;return{$$typeof:o,type:I,key:ct,ref:it!==void 0?it:null,props:$}}function V(I,ct){return C(I.type,ct,I.props)}function at(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function ut(I){var ct={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function($){return ct[$]})}var gt=/\/+/g;function lt(I,ct){return typeof I=="object"&&I!==null&&I.key!=null?ut(""+I.key):ct.toString(36)}function j(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(ct){I.status==="pending"&&(I.status="fulfilled",I.value=ct)},function(ct){I.status==="pending"&&(I.status="rejected",I.reason=ct)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function st(I,ct,$,it,xt){var Ut=typeof I;(Ut==="undefined"||Ut==="boolean")&&(I=null);var At=!1;if(I===null)At=!0;else switch(Ut){case"bigint":case"string":case"number":At=!0;break;case"object":switch(I.$$typeof){case o:case e:At=!0;break;case v:return At=I._init,st(At(I._payload),ct,$,it,xt)}}if(At)return xt=xt(I),At=it===""?"."+lt(I,0):it,B(xt)?($="",At!=null&&($=At.replace(gt,"$&/")+"/"),st(xt,ct,$,"",function(z){return z})):xt!=null&&(at(xt)&&(xt=V(xt,$+(xt.key==null||I&&I.key===xt.key?"":(""+xt.key).replace(gt,"$&/")+"/")+At)),ct.push(xt)),1;At=0;var Mt=it===""?".":it+":";if(B(I))for(var qt=0;qt<I.length;qt++)it=I[qt],Ut=Mt+lt(it,qt),At+=st(it,ct,$,Ut,xt);else if(qt=b(I),typeof qt=="function")for(I=qt.call(I),qt=0;!(it=I.next()).done;)it=it.value,Ut=Mt+lt(it,qt++),At+=st(it,ct,$,Ut,xt);else if(Ut==="object"){if(typeof I.then=="function")return st(j(I),ct,$,it,xt);throw ct=String(I),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return At}function K(I,ct,$){if(I==null)return I;var it=[],xt=0;return st(I,it,"","",function(Ut){return ct.call($,Ut,xt++)}),it}function _t(I){if(I._status===-1){var ct=I._result,$=ct();$.then(function(it){(I._status===0||I._status===-1)&&(I._status=1,I._result=it,$.status===void 0&&($.status="fulfilled",$.value=it))},function(it){(I._status===0||I._status===-1)&&(I._status=2,I._result=it,$.status===void 0&&($.status="rejected",$.reason=it))}),I._status===-1&&(I._status=0,I._result=$)}if(I._status===1)return I._result.default;throw I._result}var St=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Ht(I){var ct=q.T,$={};$.types=ct!==null?ct.types:null,q.T=$;try{var it=I(),xt=q.S;xt!==null&&xt($,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(L,St)}catch(Ut){St(Ut)}finally{ct!==null&&$.types!==null&&(ct.types=$.types),q.T=ct}}function re(I){var ct=q.T;if(ct!==null){var $=ct.types;$===null?ct.types=[I]:$.indexOf(I)===-1&&$.push(I)}else Ht(re.bind(null,I))}var be={map:K,forEach:function(I,ct,$){K(I,function(){ct.apply(this,arguments)},$)},count:function(I){var ct=0;return K(I,function(){ct++}),ct},toArray:function(I){return K(I,function(ct){return ct})||[]},only:function(I){if(!at(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return le.Activity=p,le.Children=be,le.Component=P,le.Fragment=i,le.Profiler=l,le.PureComponent=w,le.StrictMode=r,le.Suspense=m,le.ViewTransition=S,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,le.__COMPILER_RUNTIME={__proto__:null,c:function(I){return q.H.useMemoCache(I)}},le.addTransitionType=re,le.cache=function(I){return function(){return I.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(I,ct,$){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var it=x({},I.props),xt=I.key;if(ct!=null)for(Ut in ct.key!==void 0&&(xt=""+ct.key),ct)!D.call(ct,Ut)||Ut==="key"||Ut==="__self"||Ut==="__source"||Ut==="ref"&&ct.ref===void 0||(it[Ut]=ct[Ut]);var Ut=arguments.length-2;if(Ut===1)it.children=$;else if(1<Ut){for(var At=Array(Ut),Mt=0;Mt<Ut;Mt++)At[Mt]=arguments[Mt+2];it.children=At}return C(I.type,xt,it)},le.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:f,_context:I},I},le.createElement=function(I,ct,$){var it,xt={},Ut=null;if(ct!=null)for(it in ct.key!==void 0&&(Ut=""+ct.key),ct)D.call(ct,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(xt[it]=ct[it]);var At=arguments.length-2;if(At===1)xt.children=$;else if(1<At){for(var Mt=Array(At),qt=0;qt<At;qt++)Mt[qt]=arguments[qt+2];xt.children=Mt}if(I&&I.defaultProps)for(it in At=I.defaultProps,At)xt[it]===void 0&&(xt[it]=At[it]);return C(I,Ut,xt)},le.createRef=function(){return{current:null}},le.forwardRef=function(I){return{$$typeof:d,render:I}},le.isValidElement=at,le.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:_t}},le.memo=function(I,ct){return{$$typeof:g,type:I,compare:ct===void 0?null:ct}},le.startTransition=Ht,le.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},le.use=function(I){return q.H.use(I)},le.useActionState=function(I,ct,$){return q.H.useActionState(I,ct,$)},le.useCallback=function(I,ct){return q.H.useCallback(I,ct)},le.useContext=function(I){return q.H.useContext(I)},le.useDebugValue=function(){},le.useDeferredValue=function(I,ct){return q.H.useDeferredValue(I,ct)},le.useEffect=function(I,ct){return q.H.useEffect(I,ct)},le.useEffectEvent=function(I){return q.H.useEffectEvent(I)},le.useId=function(){return q.H.useId()},le.useImperativeHandle=function(I,ct,$){return q.H.useImperativeHandle(I,ct,$)},le.useInsertionEffect=function(I,ct){return q.H.useInsertionEffect(I,ct)},le.useLayoutEffect=function(I,ct){return q.H.useLayoutEffect(I,ct)},le.useMemo=function(I,ct){return q.H.useMemo(I,ct)},le.useOptimistic=function(I,ct){return q.H.useOptimistic(I,ct)},le.useReducer=function(I,ct,$){return q.H.useReducer(I,ct,$)},le.useRef=function(I){return q.H.useRef(I)},le.useState=function(I){return q.H.useState(I)},le.useSyncExternalStore=function(I,ct,$){return q.H.useSyncExternalStore(I,ct,$)},le.useTransition=function(){return q.H.useTransition()},le.version="19.3.0",le}var hv;function Gp(){return hv||(hv=1,ud.exports=kM()),ud.exports}var to=Gp(),cd={exports:{}},sl={},fd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function qM(){return dv||(dv=1,(function(o){function e(j,st){var K=j.length;j.push(st);t:for(;0<K;){var _t=K-1>>>1,St=j[_t];if(0<l(St,st))j[_t]=st,j[K]=St,K=_t;else break t}}function i(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var st=j[0],K=j.pop();if(K!==st){j[0]=K;t:for(var _t=0,St=j.length,Ht=St>>>1;_t<Ht;){var re=2*(_t+1)-1,be=j[re],I=re+1,ct=j[I];if(0>l(be,K))I<St&&0>l(ct,be)?(j[_t]=ct,j[I]=K,_t=I):(j[_t]=be,j[re]=K,_t=re);else if(I<St&&0>l(ct,K))j[_t]=ct,j[I]=K,_t=I;else break t}}return st}function l(j,st){var K=j.sortIndex-st.sortIndex;return K!==0?K:j.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],g=[],v=1,p=null,S=3,M=!1,b=!1,A=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function w(j){for(var st=i(g);st!==null;){if(st.callback===null)r(g);else if(st.startTime<=j)r(g),st.sortIndex=st.expirationTime,e(m,st);else break;st=i(g)}}function F(j){if(A=!1,w(j),!b)if(i(m)!==null)b=!0,B||(B=!0,at());else{var st=i(g);st!==null&&lt(F,st.startTime-j)}}var B=!1,L=-1,q=5,D=-1;function C(){return x?!0:!(o.unstable_now()-D<q)}function V(){if(x=!1,B){var j=o.unstable_now();D=j;var st=!0;try{t:{b=!1,A&&(A=!1,P(L),L=-1),M=!0;var K=S;try{e:{for(w(j),p=i(m);p!==null&&!(p.expirationTime>j&&C());){var _t=p.callback;if(typeof _t=="function"){p.callback=null,S=p.priorityLevel;var St=_t(p.expirationTime<=j);if(j=o.unstable_now(),typeof St=="function"){p.callback=St,w(j),st=!0;break e}p===i(m)&&r(m),w(j)}else r(m);p=i(m)}if(p!==null)st=!0;else{var Ht=i(g);Ht!==null&&lt(F,Ht.startTime-j),st=!1}}break t}finally{p=null,S=K,M=!1}st=void 0}}finally{st?at():B=!1}}}var at;if(typeof O=="function")at=function(){O(V)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,gt=ut.port2;ut.port1.onmessage=V,at=function(){gt.postMessage(null)}}else at=function(){y(V,0)};function lt(j,st){L=y(function(){j(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(j){j.callback=null},o.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<j?Math.floor(1e3/j):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(j){switch(S){case 1:case 2:case 3:var st=3;break;default:st=S}var K=S;S=st;try{return j()}finally{S=K}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(j,st){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=S;S=j;try{return st()}finally{S=K}},o.unstable_scheduleCallback=function(j,st,K){var _t=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?_t+K:_t):K=_t,j){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=K+St,j={id:v++,callback:st,priorityLevel:j,startTime:K,expirationTime:St,sortIndex:-1},K>_t?(j.sortIndex=K,e(g,j),i(m)===null&&j===i(g)&&(A?(P(L),L=-1):A=!0,lt(F,K-_t))):(j.sortIndex=St,e(m,j),b||M||(b=!0,B||(B=!0,at()))),j},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(j){var st=S;return function(){var K=S;S=st;try{return j.apply(this,arguments)}finally{S=K}}}})(hd)),hd}var pv;function YM(){return pv||(pv=1,fd.exports=qM()),fd.exports}var dd={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function WM(){if(mv)return Dn;mv=1;var o=Gp();function e(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,p,S){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===h?h:""+M,children:v,containerInfo:p,implementation:S}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.browser=function(v){return{$$typeof:f,_reason:v}},Dn.createPortal=function(v,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return d(v,p,null,S)},Dn.flushSync=function(v){var p=m.T,S=r.p;try{if(m.T=null,r.p=2,v)return v()}finally{m.T=p,r.p=S,r.d.f()}},Dn.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(v,p))},Dn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},Dn.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var S=p.as,M=g(S,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,A=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:A}):S==="script"&&r.d.X(v,{crossOrigin:M,integrity:b,fetchPriority:A,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=g(p.as,p.crossOrigin);r.d.M(v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&r.d.M(v)},Dn.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,M=g(S,p.crossOrigin);r.d.L(v,S,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(v,p){if(typeof v=="string")if(p){var S=g(p.as,p.crossOrigin);r.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else r.d.m(v)},Dn.requestFormReset=function(v){r.d.r(v)},Dn.unstable_batchedUpdates=function(v,p){return v(p)},Dn.useFormState=function(v,p,S){return m.H.useFormState(v,p,S)},Dn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Dn.version="19.3.0",Dn}var gv;function jM(){if(gv)return dd.exports;gv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),dd.exports=WM(),dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function ZM(){if(_v)return sl;_v=1;var o=YM(),e=Gp(),i=jM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(r(188))}function g(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return m(u),t;if(c===s)return m(u),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=c;else{for(var _=!1,E=u.child;E;){if(E===a){_=!0,a=u,s=c;break}if(E===s){_=!0,s=u,a=c;break}E=E.sibling}if(!_){for(E=c.child;E;){if(E===a){_=!0,a=c,s=u;break}if(E===s){_=!0,s=c,a=u;break}E=E.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function p(t,n,a,s,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,a,s,u,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=S(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,s))return!0;a=a.sibling}return!1}function x(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var y=null,P=null;function O(t,n,a){return t===a?!0:t===n?(y=t,!0):!1}function w(t,n,a){return t===a?(P=t,!1):t===n?(P!==null&&(y=t),!0):!1}function F(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function B(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var c=n;c;c=a(c))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var L=Object.assign,q=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),gt=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Ht=Symbol.for("react.activity"),re=Symbol.for("react.legacy_hidden"),be=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),ct=Symbol.for("react.recoverable"),$=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Symbol.for("react.client.reference");function Ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===xt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case ut:return"Profiler";case at:return"StrictMode";case st:return"Suspense";case K:return"SuspenseList";case Ht:return"Activity";case I:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case lt:return t.displayName||"Context";case gt:return(t._context.displayName||"Context")+".Consumer";case j:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _t:return n=t.displayName||null,n!==null?n:Ut(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return Ut(t(n))}catch{}}return null}var At=Array.isArray,Mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},He=[],se=-1;function Qt(t){return{current:t}}function Nt(t){0>se||(t.current=He[se],He[se]=null,se--)}function ie(t,n){se++,He[se]=t.current,t.current=n}var Bt=Qt(null),oe=Qt(null),qe=Qt(null),We=Qt(null);function U(t,n){switch(ie(qe,n),ie(oe,t),ie(Bt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?v0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=v0(n),t=S0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Nt(Bt),ie(Bt,t)}function T(){Nt(Bt),Nt(oe),Nt(qe)}function et(t){var n=t.memoizedState;n!==null&&(Ir._currentValue=n.memoizedState,ie(We,t)),n=Bt.current;var a=S0(n,t.type);n!==a&&(ie(oe,t),ie(Bt,a))}function dt(t){oe.current===t&&(Nt(Bt),Nt(oe)),We.current===t&&(Nt(We),Ir._currentValue=z)}var vt,ft;function Vt(t){if(vt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);vt=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+t+ft}var Rt=!1;function Wt(t,n){if(!t||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(Dt){var X=Dt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(Dt){X=Dt}pt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),pt=!0,new t}finally{pt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Dt){X=Dt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(Dt){if(Dt&&X&&typeof Dt.stack=="string")return[Dt.stack,X.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),_=c[0],E=c[1];if(_&&E){var N=_.split(`
`),W=E.split(`
`);for(u=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;u<W.length&&!W[u].includes("DetermineComponentFrameRoot");)u++;if(s===N.length||u===W.length)for(s=N.length-1,u=W.length-1;1<=s&&0<=u&&N[s]!==W[u];)u--;for(;1<=s&&0<=u;s--,u--)if(N[s]!==W[u]){if(s!==1||u!==1)do if(s--,u--,0>u||N[s]!==W[u]){var nt=`
`+N[s].replace(" at new "," at ");return t.displayName&&nt.includes("<anonymous>")&&(nt=nt.replace("<anonymous>",t.displayName)),nt}while(1<=s&&0<=u);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Vt(a):""}function Zt(t,n){switch(t.tag){case 26:case 27:case 5:return Vt(t.type);case 16:return Vt("Lazy");case 13:return t.child!==n&&n!==null?Vt("Suspense Fallback"):Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return Wt(t.type,!1);case 11:return Wt(t.type.render,!1);case 1:return Wt(t.type,!0);case 31:return Vt("Activity");case 30:return Vt("ViewTransition");default:return""}}function Tt(t){try{var n="",a=null;do n+=Zt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Lt=Object.prototype.hasOwnProperty,ne=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,Ot=o.unstable_shouldYield,fe=o.unstable_requestPaint,G=o.unstable_now,bt=o.unstable_getCurrentPriorityLevel,wt=o.unstable_ImmediatePriority,Gt=o.unstable_UserBlockingPriority,yt=o.unstable_NormalPriority,mt=o.unstable_LowPriority,Yt=o.unstable_IdlePriority,ue=o.log,Ge=o.unstable_setDisableYieldValue,Me=null,$e=null;function mn(t){if(typeof ue=="function"&&Ge(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Me,t)}catch{}}var Nn=Math.clz32?Math.clz32:Al,na=Math.log,po=Math.LN2;function Al(t){return t>>>=0,t===0?32:31-(na(t)/po|0)|0}var ps=256,ia=262144,ms=4194304;function fi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gs(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,c=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~c,s!==0?u=fi(s):(_&=E,_!==0?u=fi(_):a||(a=E&~t,a!==0&&(u=fi(a))))):(E=s&~c,E!==0?u=fi(E):_!==0?u=fi(_):a||(a=s&~t,a!==0&&(u=fi(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Aa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Rl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Nn(a),u=1<<s;n|=t[s],a&=~u}return n}function Pc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cl(){var t=ms;return ms<<=1,(ms&62914560)===0&&(ms=4194304),t}function mo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _s(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function zc(t,n,a,s,u,c){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,N=t.expirationTimes,W=t.hiddenUpdates;for(a=_&~a;0<a;){var nt=31-Nn(a),pt=1<<nt;E[nt]=0,N[nt]=-1;var X=W[nt];if(X!==null)for(W[nt]=null,nt=0;nt<X.length;nt++){var tt=X[nt];tt!==null&&(tt.lane&=-536870913)}a&=~pt}s!==0&&R(t,s,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(_&~n))}function R(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Nn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Z(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Nn(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function rt(t,n){var a=n&-n;return a=(a&42)!==0?1:ot(a),(a&(t.suspendedLanes|n))!==0?0:a}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Q(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Et(){var t=qt.p;return t!==0?t:(t=window.event,t===void 0?32:nv(t.type))}function Pt(t,n){var a=qt.p;try{return qt.p=t,n()}finally{qt.p=a}}var It=Math.random().toString(36).slice(2),Ct="__reactFiber$"+It,Xt="__reactProps$"+It,ee="__reactContainer$"+It,$t="__reactEvents$"+It,Se="__reactListeners$"+It,Pe="__reactHandles$"+It,Qe="__reactResources$"+It,Ne="__reactMarker$"+It,Ce="__reactLoad$"+It;function te(t){delete t[Ct],delete t[Xt],delete t[Se],delete t[Pe]}function Le(t){var n;if(n=t[Ct])return n;for(var a=t.parentNode;a;){if(n=a[ee]||a[Ct]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=z0(t);t!==null;){if(a=t[Ct])return a;t=z0(t)}return n}t=a,a=t.parentNode}return null}function ge(t){if(t=t[Ct]||t[ee]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function gn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ti(t){var n=t[Qe];return n||(n=t[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function we(t){t[Ne]=!0}function Ra(t){t[Ce]=void 0}var je=new Set,In={};function ln(t,n){nn(t,n),nn(t+"Capture",n)}function nn(t,n){for(In[t]=n,t=0;t<n.length;t++)je.add(n[t])}var Ln=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tr={},Ii={};function oy(t){return Lt.call(Ii,t)?!0:Lt.call(tr,t)?!1:Ln.test(t)?Ii[t]=!0:(tr[t]=!0,!1)}var De=!1;function am(){var t=De;return De=!1,t}function wl(t,n,a){if(oy(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Dl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function aa(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ei(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ly(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,c.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ic(t){if(!t._valueTracker){var n=sm(t)?"checked":"value";t._valueTracker=ly(t,n,""+t[n])}}function rm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=sm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var uy=/[\n"\\]/g;function hi(t){return t.replace(uy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Bc(t,n,a,s,u,c,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ei(n)):t.value!==""+ei(n)&&(t.value=""+ei(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Fc(t,ei(t.value)):Fc(t,ei(n)):a!=null?Fc(t,ei(a)):s!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ei(E):t.removeAttribute("name")}function om(t,n,a,s,u,c,_,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Ic(t);return}a=a!=null?""+ei(a):"",n=n!=null?""+ei(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ic(t)}function Fc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function er(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ei(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function lm(t,n,a){if(n!=null&&(n=""+ei(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ei(a):""}function um(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ei(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Ic(t)}function nr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var cy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||cy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function fm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",De=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(cm(t,u,s),De=!0)}else for(var c in n)n.hasOwnProperty(c)&&cm(t,c,n[c])}function Hc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(t){return hy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bi(){}var Gc=null;function Vc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ir=null,ar=null;function hm(t){var n=ge(t);if(n&&(t=n.stateNode)){var a=t[Xt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Bc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[Xt]||null;if(!u)throw Error(r(90));Bc(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&rm(s)}break t;case"textarea":lm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&er(t,!!a.multiple,n,!1)}}}var Xc=!1;function dm(t,n,a){if(Xc)return t(n,a);Xc=!0;try{var s=t(n);return s}finally{if(Xc=!1,(ir!==null||ar!==null)&&(Uu(),ir&&(n=ir,t=ar,ar=ir=null,hm(n),t)))for(n=0;n<t.length;n++)hm(t[n])}}function go(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Xt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=!1;if(sa)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){kc=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{kc=!1}var Ca=null,qc=null,Nl=null;function pm(){if(Nl)return Nl;var t,n=qc,a=n.length,s,u="value"in Ca?Ca.value:Ca.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===u[c-s];s++);return Nl=u.slice(t,1<s?1-s:void 0)}function Ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function mm(){return!1}function Bn(t){function n(a,s,u,c,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=c,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ol:mm,this.isPropagationStopped=mm,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),n}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pl=Bn(wa),vo=L({},wa,{view:0,detail:0}),dy=Bn(vo),Yc,Wc,So,zl=L({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(Yc=t.screenX-So.screenX,Wc=t.screenY-So.screenY):Wc=Yc=0,So=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),gm=Bn(zl),py=L({},zl,{dataTransfer:0}),my=Bn(py),gy=L({},vo,{relatedTarget:0}),jc=Bn(gy),_y=L({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),vy=Bn(_y),Sy=L({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yy=Bn(Sy),xy=L({},wa,{data:0}),_m=Bn(xy),My={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ty[t])?!!n[t]:!1}function Zc(){return by}var Ay=L({},vo,{key:function(t){if(t.key){var n=My[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ey[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(t){return t.type==="keypress"?Ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ry=Bn(Ay),Cy=L({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vm=Bn(Cy),wy=L({},wa,{submitter:0}),Dy=Bn(wy),Uy=L({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),Ny=Bn(Uy),Ly=L({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oy=Bn(Ly),Py=L({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zy=Bn(Py),Iy=L({},wa,{newState:0,oldState:0,source:0}),By=Bn(Iy),Fy=[9,13,27,32],Kc=sa&&"CompositionEvent"in window,yo=null;sa&&"documentMode"in document&&(yo=document.documentMode);var Hy=sa&&"TextEvent"in window&&!yo,Sm=sa&&(!Kc||yo&&8<yo&&11>=yo),ym=" ",xm=!1;function Mm(t,n){switch(t){case"keyup":return Fy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Em(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var sr=!1;function Gy(t,n){switch(t){case"compositionend":return Em(n);case"keypress":return n.which!==32?null:(xm=!0,ym);case"textInput":return t=n.data,t===ym&&xm?null:t;default:return null}}function Vy(t,n){if(sr)return t==="compositionend"||!Kc&&Mm(t,n)?(t=pm(),Nl=qc=Ca=null,sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sm&&n.locale!=="ko"?null:n.data;default:return null}}var Xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Xy[t.type]:n==="textarea"}function bm(t,n,a,s){ir?ar?ar.push(s):ar=[s]:ir=s,n=Iu(n,"onChange"),0<n.length&&(a=new Pl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var xo=null,Mo=null;function ky(t){h0(t,0)}function Il(t){var n=gn(t);if(rm(n))return t}function Am(t,n){if(t==="change")return n}var Rm=!1;if(sa){var Qc;if(sa){var Jc="oninput"in document;if(!Jc){var Cm=document.createElement("div");Cm.setAttribute("oninput","return;"),Jc=typeof Cm.oninput=="function"}Qc=Jc}else Qc=!1;Rm=Qc&&(!document.documentMode||9<document.documentMode)}function wm(){xo&&(xo.detachEvent("onpropertychange",Dm),Mo=xo=null)}function Dm(t){if(t.propertyName==="value"&&Il(Mo)){var n=[];bm(n,Mo,t,Vc(t)),dm(ky,n)}}function qy(t,n,a){t==="focusin"?(wm(),xo=n,Mo=a,xo.attachEvent("onpropertychange",Dm)):t==="focusout"&&wm()}function Yy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(Mo)}function Wy(t,n){if(t==="click")return Il(n)}function jy(t,n){if(t==="input"||t==="change")return Il(n)}function Zy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ni=typeof Object.is=="function"?Object.is:Zy;function Eo(t,n){if(ni(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Lt.call(n,u)||!ni(t[u],n[u]))return!1}return!0}function $c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nm(t,n){var a=Um(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Um(a)}}function Lm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Lm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Om(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=$c(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=$c(t.document)}return n}function tf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ky=sa&&"documentMode"in document&&11>=document.documentMode,rr=null,ef=null,To=null,nf=!1;function Pm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nf||rr==null||rr!==$c(s)||(s=rr,"selectionStart"in s&&tf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),To&&Eo(To,s)||(To=s,s=Iu(ef,"onSelect"),0<s.length&&(n=new Pl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=rr)))}function vs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var or={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},af={},zm={};sa&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function Ss(t){if(af[t])return af[t];if(!or[t])return t;var n=or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in zm)return af[t]=n[a];return t}var Im=Ss("animationend"),Bm=Ss("animationiteration"),Fm=Ss("animationstart"),Qy=Ss("transitionrun"),Jy=Ss("transitionstart"),$y=Ss("transitioncancel"),Hm=Ss("transitionend"),Gm=new Map,sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sf.push("scrollEnd");function bi(t,n){Gm.set(t,n),ln(n,[t])}var tx=0;function ra(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=wi.identifierPrefix;var a=tx++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Vm(t){if(t==null||typeof t=="string")return t;var n=null,a=Rr;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function oa(t,n){return t=Vm(t),n=Vm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Bl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],lr=0,rf=0;function Fl(){for(var t=lr,n=rf=lr=0;n<t;){var a=di[n];di[n++]=null;var s=di[n];di[n++]=null;var u=di[n];di[n++]=null;var c=di[n];if(di[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}c!==0&&Xm(a,u,c)}}function Hl(t,n,a,s){di[lr++]=t,di[lr++]=n,di[lr++]=a,di[lr++]=s,rf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function of(t,n,a,s){return Hl(t,n,a,s),Gl(t)}function ys(t,n){return Hl(t,null,null,n),Gl(t)}function Xm(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-Nn(a),t=c.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),c):null}function Gl(t){if(50<Yo)throw Yo=0,Du=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ur={};function ex(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,s){return new ex(t,n,a,s)}function lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function km(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Vl(t,n,a,s,u,c){var _=0;if(s=t,typeof s=="function")lf(s)&&(_=1);else if(typeof s=="string")_=wM(t,a,Bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Ht:return t=kn(31,a,n,u),t.elementType=Ht,t.lanes=c,t;case V:return xs(a.children,u,c,n);case at:_=8,u|=24;break;case ut:return t=kn(12,a,n,u|2),t.elementType=ut,t.lanes=c,t;case st:return t=kn(13,a,n,u),t.elementType=st,t.lanes=c,t;case K:return t=kn(19,a,n,u),t.elementType=K,t.lanes=c,t;case re:case I:return t=u|32,t=kn(30,a,n,t),t.elementType=I,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case lt:_=10;break t;case gt:_=9;break t;case j:_=11;break t;case _t:_=14;break t;case St:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=kn(_,a,n,u),n.elementType=t,n.type=s,n.lanes=c,n}function xs(t,n,a,s){return t=kn(7,t,s,n),t.lanes=a,t}function uf(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function qm(t){var n=kn(18,null,null,0);return n.stateNode=t,n}function cf(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ym=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=Ym.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Tt(n)},Ym.set(t,n),n)}return{value:t,source:n,stack:Tt(n)}}var cr=[],fr=0,Xl=null,bo=0,mi=[],gi=0,Da=null,Fi=1,Hi="";function ua(t,n){cr[fr++]=bo,cr[fr++]=Xl,Xl=t,bo=n}function Wm(t,n,a){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Da,Da=t;var s=Fi;t=Hi;var u=32-Nn(s)-1;s&=~(1<<u),a+=1;var c=32-Nn(n)+u;if(30<c){var _=u-u%5;c=(s&(1<<_)-1).toString(32),s>>=_,u-=_,Fi=1<<32-Nn(n)+u|a<<u|s,Hi=c+t}else Fi=1<<c|a<<u|s,Hi=t}function kl(t){t.return!==null&&(ua(t,1),Wm(t,1,0))}function ff(t){for(;t===Xl;)Xl=cr[--fr],cr[fr]=null,bo=cr[--fr],cr[fr]=null;for(;t===Da;)Da=mi[--gi],mi[gi]=null,Hi=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null}function jm(t,n){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Da,Fi=n.id,Hi=n.overflow,Da=t}var xn=null,Ze=null,_e=!1,Ua=null,_i=!1,hf=Error(r(519));function Na(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(pi(n,t)),hf}function Zm(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ct]=t,n[Xt]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<jo.length;a++)xe(jo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),om(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),um(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||g0(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||Na(t,!0)}function ql(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:xn=xn.return}}function hr(t){if(t!==xn)return!1;if(!_e)return ql(t),_e=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Vh(t.type,t.memoizedProps)),a=!a),a&&Ze&&Na(t),ql(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=P0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=P0(t)}else n===27?(n=Ze,ja(t.type)?(t=Qh,Qh=null,Ze=t):Ze=n):Ze=xn?Si(t.stateNode.nextSibling):null;return!0}function Ms(){Ze=xn=null,_e=!1}function df(){var t=Ua;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Ua=null),t}function Ao(t){Ua===null?Ua=[t]:Ua.push(t)}var pf=Qt(null),Es=null,ca=null;function La(t,n,a){ie(pf,n._currentValue),n._currentValue=a}function fa(t){t._currentValue=pf.current,Nt(pf)}function Yl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function mf(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var _=u.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=u;for(var N=0;N<n.length;N++)if(E.context===n[N]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),Yl(c.return,a,t),s||(_=null);break t}c=E.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,c=_.alternate,c!==null&&(c.lanes|=a),Yl(_,a,t),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),Yl(u.return,a,t),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ts(t,n,a,s){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=u.type;ni(u.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(u===We.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ir):t=[Ir])}u=u.return}return t!==null&&mf(n,t,a,s),n.flags|=262144,t!==null}function Wl(t){for(t=t.firstContext;t!==null;){if(!ni(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function bs(t){Es=t,ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return Km(Es,t)}function jl(t,n){return Es===null&&bs(t),Km(t,n)}function Km(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ca===null){if(t===null)throw Error(r(308));ca=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ca=ca.next=n;return a}var nx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ix=o.unstable_scheduleCallback,ax=o.unstable_NormalPriority,un={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gf(){return{controller:new nx,data:new Map,refCount:0}}function Ro(t){t.refCount--,t.refCount===0&&ix(ax,function(){t.controller.abort()})}function Qm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Co=null;function sx(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var wo=null,_f=0,As=0,dr=null;function rx(t,n){if(wo===null){var a=wo=[];_f=0,As=Lh(),dr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return _f++,n.then(Jm,Jm),n}function Jm(){if(--_f===0&&(Co=null,wo!==null)){dr!==null&&(dr.status="fulfilled");var t=wo;wo=null,As=0,dr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ox(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var $m=Mt.S;Mt.S=function(t,n){if(q_=G(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&rx(t,n),Co!==null)for(var a=Ur;a!==null;)Qm(a,Co),a=a.next;if(a=t.types,a!==null){for(var s=Ur;s!==null;)Qm(s,a),s=s.next;if(As!==0){s=Co,s===null&&(s=Co=[]);for(var u=0;u<a.length;u++){var c=a[u];s.indexOf(c)===-1&&s.push(c)}}}$m!==null&&$m(t,n)};var Rs=Qt(null);function vf(){var t=Rs.current;return t!==null?t:Ye.pooledCache}function Zl(t,n){n===null?ie(Rs,Rs.current):ie(Rs,n.pool)}function tg(){var t=vf();return t===null?null:{parent:un._currentValue,pool:t}}var pr=Error(r(460)),Sf=Error(r(474)),Kl=Error(r(542)),Ql={then:function(){}};function eg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ng(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ag(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ag(t),t}throw ws=n,pr}}function Cs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ws=a,pr):a}}var ws=null;function ig(){if(ws===null)throw Error(r(459));var t=ws;return ws=null,t}function ag(t){if(t===pr||t===Kl)throw Error(r(483))}var mr=null,Do=0;function Jl(t){var n=Do;return Do+=1,mr===null&&(mr=[]),ng(mr,t,n)}function Oa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function $l(t,n){throw n.$$typeof===q?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function sg(t){function n(Y,H){if(t){var J=Y.deletions;J===null?(Y.deletions=[H],Y.flags|=16):J.push(H)}}function a(Y,H){if(!t)return null;for(;H!==null;)n(Y,H),H=H.sibling;return null}function s(Y){for(var H=new Map;Y!==null;)Y.key===null?H.set(Y.index,Y):H.set(Y.key,Y),Y=Y.sibling;return H}function u(Y,H){return Y=la(Y,H),Y.index=0,Y.sibling=null,Y}function c(Y,H,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<H?(Y.flags|=2,H):J):(Y.flags|=134217730,H)):(Y.flags|=1048576,H)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function E(Y,H,J,ht){return H===null||H.tag!==6?(H=uf(J,Y.mode,ht),H.return=Y,H):(H=u(H,J),H.return=Y,H)}function N(Y,H,J,ht){var Ft=J.type;return Ft===V?(Y=nt(Y,H,J.props.children,ht,J.key),Oa(Y,J),Y):H!==null&&(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===St&&Cs(Ft)===H.type)?(H=u(H,J.props),Oa(H,J),H.return=Y,H):(H=Vl(J.type,J.key,J.props,null,Y.mode,ht),Oa(H,J),H.return=Y,H)}function W(Y,H,J,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=cf(J,Y.mode,ht),H.return=Y,H):(H=u(H,J.children||[]),H.return=Y,H)}function nt(Y,H,J,ht,Ft){return H===null||H.tag!==7?(H=xs(J,Y.mode,ht,Ft),H.return=Y,H):(H=u(H,J),H.return=Y,H)}function pt(Y,H,J){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=uf(""+H,Y.mode,J),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return J=Vl(H.type,H.key,H.props,null,Y.mode,J),Oa(J,H),J.return=Y,J;case C:return H=cf(H,Y.mode,J),H.return=Y,H;case St:return H=Cs(H),pt(Y,H,J)}if(At(H)||it(H))return H=xs(H,Y.mode,J,null),H.return=Y,H;if(typeof H.then=="function")return pt(Y,Jl(H),J);if(H.$$typeof===lt)return pt(Y,jl(Y,H),J);$l(Y,H)}return null}function X(Y,H,J,ht){var Ft=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ft!==null?null:E(Y,H,""+J,ht);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Ft?N(Y,H,J,ht):null;case C:return J.key===Ft?W(Y,H,J,ht):null;case St:return J=Cs(J),X(Y,H,J,ht)}if(At(J)||it(J))return Ft!==null?null:nt(Y,H,J,ht,null);if(typeof J.then=="function")return X(Y,H,Jl(J),ht);if(J.$$typeof===lt)return X(Y,H,jl(Y,J),ht);$l(Y,J)}return null}function tt(Y,H,J,ht,Ft){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get(J)||null,E(H,Y,""+ht,Ft);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case D:return Y=Y.get(ht.key===null?J:ht.key)||null,N(H,Y,ht,Ft);case C:return Y=Y.get(ht.key===null?J:ht.key)||null,W(H,Y,ht,Ft);case St:return ht=Cs(ht),tt(Y,H,J,ht,Ft)}if(At(ht)||it(ht))return Y=Y.get(J)||null,nt(H,Y,ht,Ft,null);if(typeof ht.then=="function")return tt(Y,H,J,Jl(ht),Ft);if(ht.$$typeof===lt)return tt(Y,H,J,jl(H,ht),Ft);$l(H,ht)}return null}function Dt(Y,H,J,ht){for(var Ft=null,Te=null,Jt=H,ae=H=0,hn=null;Jt!==null&&ae<J.length;ae++){Jt.index>ae?(hn=Jt,Jt=null):hn=Jt.sibling;var Ae=X(Y,Jt,J[ae],ht);if(Ae===null){Jt===null&&(Jt=hn);break}t&&Jt&&Ae.alternate===null&&n(Y,Jt),H=c(Ae,H,ae),Te===null?Ft=Ae:Te.sibling=Ae,Te=Ae,Jt=hn}if(ae===J.length)return a(Y,Jt),_e&&ua(Y,ae),Ft;if(Jt===null){for(;ae<J.length;ae++)Jt=pt(Y,J[ae],ht),Jt!==null&&(H=c(Jt,H,ae),Te===null?Ft=Jt:Te.sibling=Jt,Te=Jt);return _e&&ua(Y,ae),Ft}for(Jt=s(Jt);ae<J.length;ae++)hn=tt(Jt,Y,ae,J[ae],ht),hn!==null&&(t&&(Ae=hn.alternate,Ae!==null&&Jt.delete(Ae.key===null?ae:Ae.key)),H=c(hn,H,ae),Te===null?Ft=hn:Te.sibling=hn,Te=hn);return t&&Jt.forEach(function($a){return n(Y,$a)}),_e&&ua(Y,ae),Ft}function kt(Y,H,J,ht){if(J==null)throw Error(r(151));for(var Ft=null,Te=null,Jt=H,ae=H=0,hn=null,Ae=J.next();Jt!==null&&!Ae.done;ae++,Ae=J.next()){Jt.index>ae?(hn=Jt,Jt=null):hn=Jt.sibling;var $a=X(Y,Jt,Ae.value,ht);if($a===null){Jt===null&&(Jt=hn);break}t&&Jt&&$a.alternate===null&&n(Y,Jt),H=c($a,H,ae),Te===null?Ft=$a:Te.sibling=$a,Te=$a,Jt=hn}if(Ae.done)return a(Y,Jt),_e&&ua(Y,ae),Ft;if(Jt===null){for(;!Ae.done;ae++,Ae=J.next())Ae=pt(Y,Ae.value,ht),Ae!==null&&(H=c(Ae,H,ae),Te===null?Ft=Ae:Te.sibling=Ae,Te=Ae);return _e&&ua(Y,ae),Ft}for(Jt=s(Jt);!Ae.done;ae++,Ae=J.next())Ae=tt(Jt,Y,ae,Ae.value,ht),Ae!==null&&(t&&(hn=Ae.alternate,hn!==null&&Jt.delete(hn.key===null?ae:hn.key)),H=c(Ae,H,ae),Te===null?Ft=Ae:Te.sibling=Ae,Te=Ae);return t&&Jt.forEach(function(GM){return n(Y,GM)}),_e&&ua(Y,ae),Ft}function de(Y,H,J,ht){if(typeof J=="object"&&J!==null&&J.type===V&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:t:{for(var Ft=J.key;H!==null;){if(H.key===Ft){if(Ft=J.type,Ft===V){if(H.tag===7){a(Y,H.sibling),ht=u(H,J.props.children),Oa(ht,J),ht.return=Y,Y=ht;break t}}else if(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===St&&Cs(Ft)===H.type){a(Y,H.sibling),ht=u(H,J.props),Oa(ht,J),ht.return=Y,Y=ht;break t}a(Y,H);break}else n(Y,H);H=H.sibling}J.type===V?(ht=xs(J.props.children,Y.mode,ht,J.key),Oa(ht,J),ht.return=Y,Y=ht):(ht=Vl(J.type,J.key,J.props,null,Y.mode,ht),Oa(ht,J),ht.return=Y,Y=ht)}return _(Y);case C:t:{for(Ft=J.key;H!==null;){if(H.key===Ft)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a(Y,H.sibling),ht=u(H,J.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,H);break}else n(Y,H);H=H.sibling}ht=cf(J,Y.mode,ht),ht.return=Y,Y=ht}return _(Y);case St:return J=Cs(J),de(Y,H,J,ht)}if(At(J))return Dt(Y,H,J,ht);if(it(J)){if(Ft=it(J),typeof Ft!="function")throw Error(r(150));return J=Ft.call(J),kt(Y,H,J,ht)}if(typeof J.then=="function")return de(Y,H,Jl(J),ht);if(J.$$typeof===lt)return de(Y,H,jl(Y,J),ht);$l(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,H!==null&&H.tag===6?(a(Y,H.sibling),ht=u(H,J),ht.return=Y,Y=ht):(a(Y,H),ht=uf(J,Y.mode,ht),ht.return=Y,Y=ht),_(Y)):a(Y,H)}return function(Y,H,J,ht){try{Do=0;var Ft=de(Y,H,J,ht);return mr=null,Ft}catch(Jt){if(Jt===pr||Jt===Kl)throw Jt;var Te=kn(29,Jt,null,Y.mode);return Te.lanes=ht,Te.return=Y,Te}finally{}}}var Ds=sg(!0),rg=sg(!1),Pa=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Oe&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Gl(t),Xm(t,null,a),n}return Hl(t,s,n,a),Gl(t)}function Uo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Z(t,a)}}function Mf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=_:c=c.next=_,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ef=!1;function No(){if(Ef){var t=dr;if(t!==null)throw t}}function Lo(t,n,a,s){Ef=!1;var u=t.updateQueue;Pa=!1;var c=u.firstBaseUpdate,_=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var N=E,W=N.next;N.next=null,_===null?c=W:_.next=W,_=N;var nt=t.alternate;nt!==null&&(nt=nt.updateQueue,E=nt.lastBaseUpdate,E!==_&&(E===null?nt.firstBaseUpdate=W:E.next=W,nt.lastBaseUpdate=N))}if(c!==null){var pt=u.baseState;_=0,nt=W=N=null,E=c;do{var X=E.lane&-536870913,tt=X!==E.lane;if(tt?(Ee&X)===X:(s&X)===X){X!==0&&X===As&&(Ef=!0),nt!==null&&(nt=nt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Dt=t,kt=E;X=n;var de=a;switch(kt.tag){case 1:if(Dt=kt.payload,typeof Dt=="function"){pt=Dt.call(de,pt,X);break t}pt=Dt;break t;case 3:Dt.flags=Dt.flags&-65537|128;case 0:if(Dt=kt.payload,X=typeof Dt=="function"?Dt.call(de,pt,X):Dt,X==null)break t;pt=L({},pt,X);break t;case 2:Pa=!0}}X=E.callback,X!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=u.callbacks,tt===null?u.callbacks=[X]:tt.push(X))}else tt={lane:X,tag:E.tag,payload:E.payload,callback:E.callback,next:null},nt===null?(W=nt=tt,N=pt):nt=nt.next=tt,_|=X;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;tt=E,E=tt.next,tt.next=null,u.lastBaseUpdate=tt,u.shared.pending=null}}while(!0);nt===null&&(N=pt),u.baseState=N,u.firstBaseUpdate=W,u.lastBaseUpdate=nt,c===null&&(u.shared.lanes=0),ka|=_,t.lanes=_,t.memoizedState=pt}}function og(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function lg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)og(a[t],n)}var Ba=Qt(null),tu=Qt(0);function ug(t,n){t=ga,ie(tu,t),ie(Ba,n),ga=t|n.baseLanes}function Tf(){ie(tu,ga),ie(Ba,Ba.current)}function bf(){ga=tu.current,Nt(Ba),Nt(tu)}var An=Qt(null),On=null;function Fa(t){var n=t.alternate;ie(Rn,Rn.current&1),ie(An,t),On===null&&(n===null||Ba.current!==null||n.memoizedState!==null)&&(On=t)}function Af(t){ie(Rn,Rn.current),ie(An,t),On===null&&(On=t)}function cg(t){t.tag===22?(ie(Rn,Rn.current),ie(An,t),On===null&&(On=t)):Ha()}function Ha(){ie(Rn,Rn.current),ie(An,An.current)}function ii(t){Nt(An),On===t&&(On=null),Nt(Rn)}var Rn=Qt(0);function Oo(t,n){ie(An,An.current),ie(Rn,n)}function Rf(t){Nt(Rn),Nt(An),On===t&&(On=null)}function eu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zh(a)||Kh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,he=null,Ve=null,cn=null,nu=!1,gr=!1,Us=!1,iu=0,Po=0,_r=null,lx=0;function an(){throw Error(r(321))}function Cf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ni(t[a],n[a]))return!1;return!0}function wf(t,n,a,s,u,c){return ha=c,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=t===null||t.memoizedState===null?Wg:jg,Us=!1,c=a(s,u),Us=!1,gr&&(c=hg(n,a,s,u)),fg(t),c}function fg(t){Mt.H=cu;var n=Ve!==null&&Ve.next!==null;if(ha=0,cn=Ve=he=null,nu=!1,Po=0,_r=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&Wl(t)&&(fn=!0))}function hg(t,n,a,s){he=t;var u=0;do{if(gr&&(_r=null),Po=0,gr=!1,25<=u)throw Error(r(301));if(u+=1,cn=Ve=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Mt.H=gx,c=n(a,s)}while(gr);return c}function ux(){var t=Mt.H,n=t.useState()[0];return n=typeof n.then=="function"?zo(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(he.flags|=1024),n}function Df(){var t=iu!==0;return iu=0,t}function Uf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Nf(t){if(nu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}nu=!1}ha=0,cn=Ve=he=null,gr=!1,Po=iu=0,_r=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?he.memoizedState=cn=t:cn=cn.next=t,cn}function on(){if(Ve===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=cn===null?he.memoizedState:cn.next;if(n!==null)cn=n,Ve=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},cn===null?he.memoizedState=cn=t:cn=cn.next=t}return cn}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(t){var n=Po;return Po+=1,_r===null&&(_r=[]),t=ng(_r,t,n),n=he,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?Wg:jg),t}function su(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return zo(t);if(t.$$typeof===ct)return;if(t.$$typeof===lt)return bn(t)}throw Error(r(438,String(t)))}function Lf(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=au(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=be;return n.index++,a}function da(t,n){return typeof n=="function"?n(t):n}function ru(t){var n=on();return Of(n,Ve,t)}function Of(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,c=s.pending;if(c!==null){if(u!==null){var _=u.next;u.next=c.next,c.next=_}n.baseQueue=u=c,s.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var E=_=null,N=null,W=n,nt=!1;do{var pt=W.lane&-536870913;if(pt!==W.lane?(Ee&pt)===pt:(ha&pt)===pt){var X=W.revertLane;if(X===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),pt===As&&(nt=!0);else if((ha&X)===X){W=W.next,X===As&&(nt=!0);continue}else pt={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},N===null?(E=N=pt,_=c):N=N.next=pt,he.lanes|=X,ka|=X;pt=W.action,Us&&a(c,pt),c=W.hasEagerState?W.eagerState:a(c,pt)}else X={lane:pt,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},N===null?(E=N=X,_=c):N=N.next=X,he.lanes|=pt,ka|=pt;W=W.next}while(W!==null&&W!==n);if(N===null?_=c:N.next=E,!ni(c,t.memoizedState)&&(fn=!0,nt&&(a=dr,a!==null)))throw a;t.memoizedState=c,t.baseState=_,t.baseQueue=N,s.lastRenderedState=c}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Pf(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do c=t(c,_.action),_=_.next;while(_!==u);ni(c,n.memoizedState)||(fn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function dg(t,n,a){var s=he,u=on(),c=_e;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ni((Ve||u).memoizedState,a);if(_&&(u.memoizedState=a,fn=!0),u=u.queue,Bf(gg.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||_||cn!==null&&(cn.memoizedState.tag&1)!==0,vr(t?9:8,{destroy:void 0},mg.bind(null,s,u,a,n),null),t){if(s.flags|=2048,Ye===null)throw Error(r(349));c||(ha&127)!==0||pg(s,n,a)}return a}function pg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=au(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function mg(t,n,a,s){n.value=a,n.getSnapshot=s,_g(n)&&vg(t)}function gg(t,n,a){return a(function(){_g(n)&&vg(t)})}function _g(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ni(t,a)}catch{return!0}}function vg(t){var n=ys(t,2);n!==null&&jn(n,t,2)}function zf(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),Us){mn(!0);try{a()}finally{mn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function Sg(t,n,a,s){return t.baseState=a,Of(t,Ve,typeof s=="function"?s:da)}function cx(t,n,a,s,u){if(uu(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){c.listeners.push(_)}};Mt.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,yg(n,c)):(c.next=a.next,n.pending=a.next=c)}}function yg(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var c=Mt.T,_={};_.types=c!==null?c.types:null,Mt.T=_;try{var E=a(u,s),N=Mt.S;N!==null&&N(_,E),xg(t,n,E)}catch(W){If(t,n,W)}finally{c!==null&&_.types!==null&&(c.types=_.types),Mt.T=c}}else try{c=a(u,s),xg(t,n,c)}catch(W){If(t,n,W)}}function xg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Mg(t,n,s)},function(s){return If(t,n,s)}):Mg(t,n,a)}function Mg(t,n,a){n.status="fulfilled",n.value=a,Eg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,yg(t,a)))}function If(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Eg(n),n=n.next;while(n!==s)}t.action=null}function Eg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Tg(t,n){return n}function bg(t,n){if(_e){var a=Ye.formState;if(a!==null){t:{var s=he;if(_e){if(Ze){e:{for(var u=Ze,c=_i;u.nodeType!==8;){if(!c){u=null;break e}if(u=Si(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Ze=Si(u.nextSibling),s=u.data==="F!";break t}}Na(s)}s=!1}s&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tg,lastRenderedState:n},a.queue=s,a=kg.bind(null,he,s),s.dispatch=a,s=zf(!1),c=Xf.bind(null,he,!1,s.queue),s=Fn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=cx.bind(null,he,u,c,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Ag(t){var n=on();return Rg(n,Ve,t)}function Rg(t,n,a){if(n=Of(t,n,Tg)[0],t=ru(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=zo(n)}catch(_){throw _===pr?Kl:_}else s=n;n=on();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,vr(9,{destroy:void 0},fx.bind(null,u,a),null)),[s,c,t]}function fx(t,n){t.action=n}function Cg(t){var n=on(),a=Ve;if(a!==null)return Rg(n,a,t);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function vr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=au(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function wg(){return on().memoizedState}function ou(t,n,a,s){var u=Fn();he.flags|=t,u.memoizedState=vr(1|n,{destroy:void 0},a,s===void 0?null:s)}function lu(t,n,a,s){var u=on();s=s===void 0?null:s;var c=u.memoizedState.inst;Ve!==null&&s!==null&&Cf(s,Ve.memoizedState.deps)?u.memoizedState=vr(n,c,a,s):(he.flags|=t,u.memoizedState=vr(1|n,c,a,s))}function Dg(t,n){ou(8390656,8,t,n)}function Bf(t,n){lu(2048,8,t,n)}function hx(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=au(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Ug(t){var n=on().memoizedState;return hx({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Ng(t,n){return lu(4,2,t,n)}function Lg(t,n){return lu(4,4,t,n)}function Og(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Pg(t,n,a){a=a!=null?a.concat([t]):null,lu(4,4,Og.bind(null,n,t),a)}function Ff(){}function zg(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Cf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Ig(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Cf(n,s[1]))return s[0];if(s=t(),Us){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[s,n],s}function Hf(t,n,a){return a===void 0||(ha&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=W_(),he.lanes|=t,ka|=t,a)}function Bg(t,n,a,s){return ni(a,n)?a:Ba.current!==null?(t=Hf(t,a,s),ni(t,n)||(fn=!0),t):(ha&106)===0||(ha&1073741824)!==0&&(Ee&261930)===0?(fn=!0,t.memoizedState=a):(t=W_(),he.lanes|=t,ka|=t,n)}function Fg(t,n,a,s,u){var c=qt.p;qt.p=c!==0&&8>c?c:8;var _=Mt.T,E={};E.types=_!==null?_.types:null,Mt.T=E,Xf(t,!1,n,a);try{var N=u(),W=Mt.S;if(W!==null&&W(E,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var nt=ox(N,s);Io(t,n,nt,oi(t))}else Io(t,n,s,oi(t))}catch(pt){Io(t,n,{then:function(){},status:"rejected",reason:pt},oi())}finally{qt.p=c,_!==null&&E.types!==null&&(_.types=E.types),Mt.T=_}}function dx(){}function Gf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Hg(t).queue;Fg(t,u,n,z,a===null?dx:function(){return Gg(t),a(s)})}function Hg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Gg(t){var n=Hg(t);n.next===null&&(n=t.alternate.memoizedState),Io(t,n.next.queue,{},oi())}function Vf(){return bn(Ir)}function Vg(){return on().memoizedState}function Xg(){return on().memoizedState}function px(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=oi();t=za(a);var s=Ia(n,t,a);s!==null&&(jn(s,n,a),Uo(s,n,a)),n={cache:gf()},t.payload=n;return}n=n.return}}function mx(t,n,a){var s=oi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},uu(t)?qg(n,a):(a=of(t,n,a,s),a!==null&&(jn(a,t,s),Yg(a,n,s)))}function kg(t,n,a){var s=oi();Io(t,n,a,s)}function Io(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(uu(t))qg(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var _=n.lastRenderedState,E=c(_,a);if(u.hasEagerState=!0,u.eagerState=E,ni(E,_))return Hl(t,n,u,0),Ye===null&&Fl(),!1}catch{}finally{}if(a=of(t,n,u,s),a!==null)return jn(a,t,s),Yg(a,n,s),!0}return!1}function Xf(t,n,a,s){if(s={lane:2,revertLane:Lh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},uu(t)){if(n)throw Error(r(479))}else n=of(t,a,s,2),n!==null&&jn(n,t,2)}function uu(t){var n=t.alternate;return t===he||n!==null&&n===he}function qg(t,n){gr=nu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Yg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Z(t,a)}}var cu={readContext:bn,use:su,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},Wg={readContext:bn,use:su,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:Dg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ou(4194308,4,Og.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ou(4194308,4,t,n)},useInsertionEffect:function(t,n){ou(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var s=t();if(Us){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Fn();if(a!==void 0){var u=a(n);if(Us){mn(!0);try{a(n)}finally{mn(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=mx.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=zf(t);var n=t.queue,a=kg.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ff,useDeferredValue:function(t,n){var a=Fn();return Hf(a,t,n)},useTransition:function(){var t=zf(!1);return t=Fg.bind(null,he,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,u=Fn();if(_e){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));(Ee&127)!==0||pg(s,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,Dg(gg.bind(null,s,c,t),[t]),s.flags|=2048,vr(9,{destroy:void 0},mg.bind(null,s,c,a,n),null),a},useId:function(){var t=Fn(),n=Ye.identifierPrefix;if(_e){var a=Hi,s=Fi;a=(s&~(1<<32-Nn(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=iu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=lx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Vf,useFormState:bg,useActionState:bg,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Xf.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:Lf,useCacheRefresh:function(){return Fn().memoizedState=px.bind(null,he)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},jg={readContext:bn,use:su,useCallback:zg,useContext:bn,useEffect:Bf,useImperativeHandle:Pg,useInsertionEffect:Ng,useLayoutEffect:Lg,useMemo:Ig,useReducer:ru,useRef:wg,useState:function(){return ru(da)},useDebugValue:Ff,useDeferredValue:function(t,n){var a=on();return Bg(a,Ve.memoizedState,t,n)},useTransition:function(){var t=ru(da)[0],n=on().memoizedState;return[typeof t=="boolean"?t:zo(t),n]},useSyncExternalStore:dg,useId:Vg,useHostTransitionStatus:Vf,useFormState:Ag,useActionState:Ag,useOptimistic:function(t,n){var a=on();return Sg(a,Ve,t,n)},useMemoCache:Lf,useCacheRefresh:Xg,useEffectEvent:Ug},gx={readContext:bn,use:su,useCallback:zg,useContext:bn,useEffect:Bf,useImperativeHandle:Pg,useInsertionEffect:Ng,useLayoutEffect:Lg,useMemo:Ig,useReducer:Pf,useRef:wg,useState:function(){return Pf(da)},useDebugValue:Ff,useDeferredValue:function(t,n){var a=on();return Ve===null?Hf(a,t,n):Bg(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Pf(da)[0],n=on().memoizedState;return[typeof t=="boolean"?t:zo(t),n]},useSyncExternalStore:dg,useId:Vg,useHostTransitionStatus:Vf,useFormState:Cg,useActionState:Cg,useOptimistic:function(t,n){var a=on();return Ve!==null?Sg(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Lf,useCacheRefresh:Xg,useEffectEvent:Ug};function kf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:L({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var qf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=oi(),u=za(s);u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,s),n!==null&&(jn(n,t,s),Uo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=oi(),u=za(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,s),n!==null&&(jn(n,t,s),Uo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=oi(),s=za(a);s.tag=2,n!=null&&(s.callback=n),n=Ia(t,s,a),n!==null&&(jn(n,t,a),Uo(n,t,a))}};function Zg(t,n,a,s,u,c,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,_):n.prototype&&n.prototype.isPureReactComponent?!Eo(a,s)||!Eo(u,c):!0}function Kg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&qf.enqueueReplaceState(n,n.state,null)}function Ns(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=L({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Qg(t){Bl(t)}function Jg(t){console.error(t)}function $g(t){Bl(t)}function fu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function t_(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Yf(t,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){fu(t,n)},a}function e_(t){return t=za(t),t.tag=3,t}function n_(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=s.value;t.payload=function(){return u(c)},t.callback=function(){t_(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){t_(n,a,s),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function _x(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ts(n,a,u,!0),a=An.current,a!==null){switch(a.tag){case 31:case 13:case 19:return On===null?Nu():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Ql?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Dh(t,s,u)),!1;case 22:return a.flags|=65536,s===Ql?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Dh(t,s,u)),!1}throw Error(r(435,a.tag))}return Dh(t,s,u),Nu(),!1}if(_e)return n=An.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==hf&&(t=Error(r(422),{cause:s}),Ao(pi(t,a)))):(s!==hf&&(n=Error(r(423),{cause:s}),Ao(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=pi(s,a),u=Yf(t.stateNode,s,u),Mf(t,u),sn!==4&&(sn=2)),!1;var c=Error(r(520),{cause:s});if(c=pi(c,a),qo===null?qo=[c]:qo.push(c),sn!==4&&(sn=2),n===null)return!0;s=pi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Yf(a.stateNode,s,t),Mf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(qa===null||!qa.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=e_(u),n_(u,t,a,s),Mf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Wf=Error(r(461)),fn=!1;function _n(t,n,a,s){n.child=t===null?rg(n,null,a,s):Ds(n,t.child,a,s)}function i_(t,n,a,s,u){a=a.render;var c=n.ref;if("ref"in s){var _={};for(var E in s)E!=="ref"&&(_[E]=s[E])}else _=s;return bs(n),s=wf(t,n,a,_,c,u),E=Df(),t!==null&&!fn?(Uf(t,n,u),pa(t,n,u)):(_e&&E&&kl(n),n.flags|=1,_n(t,n,s,u),n.child)}function a_(t,n,a,s,u){if(t===null){var c=a.type;return typeof c=="function"&&!lf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,s_(t,n,c,s,u)):(t=Vl(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!eh(t,u)){var _=c.memoizedProps;if(a=a.compare,a=a!==null?a:Eo,a(_,s)&&t.ref===n.ref)return pa(t,n,u)}return n.flags|=1,t=la(c,s),t.ref=n.ref,t.return=n,n.child=t}function s_(t,n,a,s,u){if(t!==null){var c=t.memoizedProps;if(Eo(c,s)&&t.ref===n.ref)if(fn=!1,n.pendingProps=s=c,eh(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,pa(t,n,u)}return jf(t,n,a,s,u)}function r_(t,n,a,s){var u=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~c}else s=0,n.child=null;return o_(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zl(n,c!==null?c.cachePool:null),c!==null?ug(n,c):Tf(),cg(n);else return s=n.lanes=536870912,o_(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(Zl(n,c.cachePool),ug(n,c),Ha(),n.memoizedState=null):(t!==null&&Zl(n,null),Tf(),Ha());return _n(t,n,u,a),n.child}function Bo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function o_(t,n,a,s,u){var c=vf();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Zl(n,null),Tf(),cg(n),t!==null&&Ts(t,n,s,!0),n.childLanes=u,null}function hu(t,n){return n=du({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function l_(t,n,a){return Ds(n,t.child,null,a),t=hu(n,n.pendingProps),t.flags|=2,ii(n),n.memoizedState=null,t}function vx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(s.mode==="hidden")return t=hu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Bo(null,t);if(Af(n),(t=Ze)?(t=O0(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=qm(t),a.return=n,n.child=a,xn=n,Ze=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return hu(n,s)}var c=t.memoizedState;if(c!==null){var _=c.dehydrated;if(Af(n),u)if(n.flags&256)n.flags&=-257,n=l_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||Ts(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(Ba.current===null){if(s=Ye,s!==null&&(_=rt(s,a),_!==0&&_!==c.retryLane))throw c.retryLane=_,ys(t,_),jn(s,t,_),Wf;Nu()}n=l_(t,n,a)}else t=c.treeContext,Ze=Si(_.nextSibling),xn=n,_e=!0,Ua=null,_i=!1,t!==null&&jm(n,t),n=hu(n,s),n.flags|=134221824;return n}return t=la(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function jf(t,n,a,s,u){return bs(n),a=wf(t,n,a,s,void 0,u),s=Df(),t!==null&&!fn?(Uf(t,n,u),pa(t,n,u)):(_e&&s&&kl(n),n.flags|=1,_n(t,n,a,u),n.child)}function u_(t,n,a,s,u,c){return bs(n),n.updateQueue=null,a=hg(n,s,a,u),fg(t),s=Df(),t!==null&&!fn?(Uf(t,n,c),pa(t,n,c)):(_e&&s&&kl(n),n.flags|=1,_n(t,n,a,c),n.child)}function c_(t,n,a,s,u){if(bs(n),n.stateNode===null){var c=ur,_=a.contextType;typeof _=="object"&&_!==null&&(c=bn(_)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=qf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},yf(n),_=a.contextType,c.context=typeof _=="object"&&_!==null?bn(_):ur,c.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(kf(n,a,_,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(_=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),_!==c.state&&qf.enqueueReplaceState(c,c.state,null),Lo(n,s,c,u),No(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,N=Ns(a,E);c.props=N;var W=c.context,nt=a.contextType;_=ur,typeof nt=="object"&&nt!==null&&(_=bn(nt));var pt=a.getDerivedStateFromProps;nt=typeof pt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,nt||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||W!==_)&&Kg(n,c,s,_),Pa=!1;var X=n.memoizedState;c.state=X,Lo(n,s,c,u),No(),W=n.memoizedState,E||X!==W||Pa?(typeof pt=="function"&&(kf(n,a,pt,s),W=n.memoizedState),(N=Pa||Zg(n,a,N,s,X,W,_))?(nt||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=W),c.props=s,c.state=W,c.context=_,s=N):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,xf(t,n),_=n.memoizedProps,nt=Ns(a,_),c.props=nt,pt=n.pendingProps,X=c.context,W=a.contextType,N=ur,typeof W=="object"&&W!==null&&(N=bn(W)),E=a.getDerivedStateFromProps,(W=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==pt||X!==N)&&Kg(n,c,s,N),Pa=!1,X=n.memoizedState,c.state=X,Lo(n,s,c,u),No();var tt=n.memoizedState;_!==pt||X!==tt||Pa||t!==null&&t.dependencies!==null&&Wl(t.dependencies)?(typeof E=="function"&&(kf(n,a,E,s),tt=n.memoizedState),(nt=Pa||Zg(n,a,nt,s,X,tt,N)||t!==null&&t.dependencies!==null&&Wl(t.dependencies))?(W||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,tt,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,tt,N)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=tt),c.props=s,c.state=tt,c.context=N,s=nt):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,Sr(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=Ds(n,t.child,null,u),n.child=Ds(n,null,a,u)):_n(t,n,a,u),n.memoizedState=c.state,t=n.child):t=pa(t,n,u),t}function f_(t,n,a,s){return Ms(),n.flags|=256,_n(t,n,a,s),n.child}var Zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kf(t){return{baseLanes:t,cachePool:tg()}}function Qf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function h_(t,n,a){var s=n.pendingProps,u=!1,c=(n.flags&128)!==0,_;if((_=c)||(_=t!==null&&t.memoizedState===null?!1:(Rn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(u?Fa(n):Ha(),(t=Ze)?(t=O0(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=qm(t),a.return=n,n.child=a,xn=n,Ze=null)):t=null,t===null)throw Na(n);return Kh(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,u?(Ha(),u=n.mode,c=du({mode:"hidden",children:c},u),s=xs(s,u,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=Kf(a),s.childLanes=Qf(t,_,a),n.memoizedState=Zf,Bo(null,s)):(Fa(n),Jf(n,c))}var E=t.memoizedState;if(E!==null){var N=E.dehydrated;if(N!==null)return Sx(t,n,c,_,s,N,E,a)}return u?(Ha(),u=s.fallback,c=n.mode,E=t.child,N=E.sibling,s=la(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&1206910976,N!==null?u=la(N,u):(u=xs(u,c,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,Bo(null,s),s=n.child,u=t.child.memoizedState,u===null?u=Kf(a):(c=u.cachePool,c!==null?(E=un._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=tg(),u={baseLanes:u.baseLanes|a,cachePool:c}),s.memoizedState=u,s.childLanes=Qf(t,_,a),n.memoizedState=Zf,Bo(t.child,s)):(Fa(n),a=t.child,t=a.sibling,a=la(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Jf(t,n){return n=du({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function du(t,n){return t=kn(22,t,null,n),t.lanes=0,t}function pu(t,n,a){return Ds(n,t.child,null,a),t=Jf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Sx(t,n,a,s,u,c,_,E){if(a)return n.flags&256?(Fa(n),n.flags&=-257,pu(t,n,E)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,null):(Ha(),c=u.fallback,_=n.mode,u=du({mode:"visible",children:u.children},_),c=xs(c,_,E,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,Ds(n,t.child,null,E),u=n.child,u.memoizedState=Kf(E),u.childLanes=Qf(t,s,E),n.memoizedState=Zf,Bo(null,u));if(Fa(n),Kh(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var N=s.dgst;return s=N,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,Ao({value:u,source:null,stack:null})),pu(t,n,E)}if(fn||Ts(t,n,E,!1),s=(E&t.childLanes)!==0,fn||s){if(Ba.current!==null)return pu(t,n,E);if(s=Ye,s!==null&&(u=rt(s,E),u!==0&&u!==_.retryLane))throw _.retryLane=u,ys(t,u),jn(s,t,u),Wf;return Zh(c)||Nu(),pu(t,n,E)}return Zh(c)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Ze=Si(c.nextSibling),xn=n,_e=!0,Ua=null,_i=!1,t!==null&&jm(n,t),n=Jf(n,u.children),n.flags|=134221824,n)}function d_(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Yl(t.return,n,a)}function p_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&eu(a)===null&&(n=t),t=t.sibling}return n}function mu(t,n,a,s,u,c){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:c}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=c)}function $f(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function th(t,n,a){var s=n.pendingProps,u=s.revealOrder,c=s.tail;s=s.children;var _=Rn.current;if(n.flags&128)return Oo(n,_),null;var E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,Oo(n,_),u==="backwards"&&t!==null?($f(t),_n(t,n,s,a),$f(t)):_n(t,n,s,a),s=_e?bo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&d_(t,a,n);else if(t.tag===19)d_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=p_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,$f(n)),mu(n,!0,u,null,c,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&eu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}mu(n,!0,a,null,c,s);break;case"together":mu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=p_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),mu(n,!1,u,a,c,s)}return n.child}function m_(t,n,a){var s=n.pendingProps;return La(n,n.type,s.value),_n(t,n,s.children,a),n.child}function pa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ts(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=la(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=la(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function eh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Wl(t)))}function yx(t,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),La(n,un,t.memoizedState.cache),Ms();break;case 27:case 5:et(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Af(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Fa(n),n.flags|=128,null;s=Ts(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?h_(t,n,a):(Fa(n),t=pa(t,n,a),t!==null?t.sibling:null)}Fa(n);break;case 19:if(n.flags&128)return th(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Ts(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return th(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Oo(n,Rn.current),s)break;return null;case 22:return n.lanes=0,r_(t,n,a,n.pendingProps);case 24:La(n,un,t.memoizedState.cache)}return pa(t,n,a)}function g_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!eh(t,a)&&(n.flags&128)===0)return fn=!1,yx(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,_e&&(n.flags&1048576)!==0&&Wm(n,bo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Cs(n.elementType),n.type=t,typeof t=="function")lf(t)?(s=Ns(t,s),n.tag=1,n=c_(null,n,t,s,a)):(n.tag=0,n=jf(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===j){n.tag=11,n=i_(null,n,t,s,a);break t}else if(u===_t){n.tag=14,n=a_(null,n,t,s,a);break t}else if(u===lt){n.tag=10,n.type=t,n=m_(null,n,a);break t}}throw n=Ut(t)||t,Error(r(306,n,""))}}return n;case 0:return jf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Ns(s,n.pendingProps),c_(t,n,s,u,a);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;u=c.element,xf(t,n),Lo(n,s,null,a);var _=n.memoizedState;if(s=_.cache,La(n,un,s),s!==c.cache&&mf(n,[un],a,!0),No(),s=_.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=f_(t,n,s,a);break t}else if(s!==u){u=pi(Error(r(424)),n),Ao(u),n=f_(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=Si(t.firstChild),xn=n,_e=!0,Ua=null,_i=!0,a=rg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ms(),s===u){n=pa(t,n,a);break t}_n(t,n,s,a)}n=n.child}return n;case 26:return Sr(t,n),t===null?(a=G0(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(n.stateNode=y0(n.type,n.pendingProps,qe.current,n)):n.memoizedState=G0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&_e&&(s=n.stateNode=I0(n.type,n.pendingProps,qe.current),xn=n,_i=!0,u=Ze,ja(n.type)?(Qh=u,Ze=Si(s.firstChild)):Ze=u),_n(t,n,n.pendingProps.children,a),Sr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((u=s=Ze)&&(s=pM(s,n.type,n.pendingProps,_i),s!==null?(n.stateNode=s,xn=n,Ze=Si(s.firstChild),_i=!1,u=!0):u=!1),u||Na(n)),et(n),u=n.type,c=n.pendingProps,_=t!==null?t.memoizedProps:null,s=c.children,Vh(u,c)?s=null:_!==null&&Vh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=wf(t,n,ux,null,null,a),Ir._currentValue=u),Sr(t,n),_n(t,n,s,a),n.child;case 6:return t===null&&_e&&((t=a=Ze)&&(a=mM(a,n.pendingProps,_i),a!==null?(n.stateNode=a,xn=n,Ze=null,t=!0):t=!1),t||Na(n)),null;case 13:return h_(t,n,a);case 4:return U(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ds(n,null,s,a):_n(t,n,s,a),n.child;case 11:return i_(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Sr(t,n),_n(t,n,s,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return m_(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,bs(n),u=bn(u),s=s(u),n.flags|=1,_n(t,n,s,a),n.child;case 14:return a_(t,n,n.type,n.pendingProps,a);case 15:return s_(t,n,n.type,n.pendingProps,a);case 19:return th(t,n,a);case 31:return vx(t,n,a);case 22:return r_(t,n,a,n.pendingProps);case 24:return bs(n),s=bn(un),t===null?(u=vf(),u===null&&(u=Ye,c=gf(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:s,cache:u},yf(n),La(n,un,u)):((t.lanes&a)!==0&&(xf(t,n),Lo(n,null,null,a),No()),u=t.memoizedState,c=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,un,s)):(s=c.cache,La(n,un,s),s!==u.cache&&mf(n,[un],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&kl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Sr(t,n),_n(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ma(t){t.flags|=4}function nh(t,n,a,s,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?q0(n,s):q0(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Q_())t.flags|=8192;else throw ws=Ql,Sf}else t.flags&=-16777217}function __(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Y0(n))if(Q_())t.flags|=8192;else throw ws=Ql,Sf}function gu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Cl():536870912,t.lanes|=n,Tr|=n)}function Fo(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function xx(t,n,a){var s=n.pendingProps;switch(ff(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),fa(un),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(hr(n)?ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,df())),Ke(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(ma(n),c!==null?(Ke(n),__(n,c)):(Ke(n),nh(n,u,null,s,a))):c?c!==t.memoizedState?(ma(n),Ke(n),__(n,c)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ma(n),Ke(n),nh(n,u,t,s,a)),null;case 27:if(dt(n),a=qe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ma(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=Bt.current,hr(n)?Zm(n):(t=I0(u,s,a),n.stateNode=t,ma(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(dt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ma(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(c=Bt.current,hr(n))Zm(n);else{var _=Ko(qe.current);switch(c){case 1:c=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=_.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}c[Ct]=n,c[Xt]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)c.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=c;t:switch(wn(c,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ma(n)}}return Ke(n),n.subtreeFlags&=-33554433,nh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ma(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=qe.current,hr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=xn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Ct]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||g0(t.nodeValue,a)),t||Na(n,!0)}else t=Ko(t).createTextNode(s),t[Ct]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=hr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ct]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ii(n),n):(ii(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=hr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Ct]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ii(n),n):(ii(n),null)}return ii(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),gu(n,n.updateQueue),Ke(n),null);case 4:return T(),t===null&&Ih(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return fa(n.type),Ke(n),null;case 19:if(Rf(n),s=n.memoizedState,s===null)return Ke(n),null;if(u=(n.flags&128)!==0,c=s.rendering,c===null)if(u)Fo(s,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=eu(t),c!==null){for(n.flags|=128,Fo(s,!1),t=c.updateQueue,n.updateQueue=t,gu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)km(a,t),a=a.sibling;return Oo(n,Rn.current&1|2),_e&&ua(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&G()>Cu&&(n.flags|=128,u=!0,Fo(s,!1),n.lanes=4194304)}else{if(!u)if(t=eu(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,gu(n,t),Fo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!_e)return Ke(n),null}else 2*G()-s.renderingStartTime>Cu&&a!==536870912&&(n.flags|=128,u=!0,Fo(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=G(),t.sibling=null,c=Rn.current,c=u?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||_e?Oo(n,c):(a=c,ie(An,n),ie(Rn,a),On===null&&(On=n)),_e&&ua(n,s.treeForkCount),t}return Ke(n),null;case 22:case 23:return ii(n),bf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&gu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Nt(Rs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),fa(un),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(r(156,n.tag))}function Mx(t,n){switch(ff(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return fa(un),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(ii(n),n.alternate===null)throw Error(r(340));Ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ii(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Rf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return fa(n.type),null;case 22:case 23:return ii(n),bf(),t!==null&&Nt(Rs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return fa(un),null;case 25:return null;default:return null}}function v_(t,n){switch(ff(n),n.tag){case 3:fa(un),T();break;case 26:case 27:case 5:dt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&ii(n);break;case 13:ii(n);break;case 19:Rf(n);break;case 10:fa(n.type);break;case 22:case 23:ii(n),bf(),t!==null&&Nt(Rs);break;case 24:fa(un)}}function Ho(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var c=a.create,_=a.inst;s=c(),_.destroy=s}a=a.next}while(a!==u)}}catch(E){Be(n,n.return,E)}}function Ga(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var c=u.next;s=c;do{if((s.tag&t)===t){var _=s.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,u=n;var N=a,W=E;try{W()}catch(nt){Be(u,N,nt)}}}s=s.next}while(s!==c)}}catch(nt){Be(n,n.return,nt)}}function S_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{lg(n,a)}catch(s){Be(t,t.return,s)}}}function y_(t,n,a){a.props=Ns(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function Gi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,c=ra(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=R0(c)),s=u.ref;break;case 7:if(t.stateNode===null){var _=new li(t);p(t.child,!1,hM,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(E){Be(t,n,E)}}function Cn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Be(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(t,n,u)}else a.current=null}function _u(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)L0(t.stateNode,n[a])}function x_(t){for(var n=t.return;n!==null&&(ah(n)&&L0(t.stateNode,n.stateNode),!ih(n));)n=n.return}function Go(t){for(var n=t.return;n!==null&&(ah(n)&&dM(t.stateNode,n.stateNode),!ih(n));)n=n.return}function ih(t){return t.tag===5||t.tag===3||t.tag===27}function ah(t){return t&&t.tag===7&&t.stateNode!==null}function sh(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Be(t,t.return,u)}}function rh(t,n,a){try{var s=t.stateNode;jx(s,t.type,a,n),s[Xt]=n}catch(u){Be(t,t.return,u)}}function M_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function oh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||M_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lh(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi)),_u(t,s),De=!0;else if(u!==4&&(u===27&&(_u(t,s),s=null,ja(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(lh(t,n,a,s),t=t.sibling;t!==null;)lh(t,n,a,s),t=t.sibling}function vu(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),_u(t,s),De=!0;else if(u!==4&&(u===27&&(_u(t,s),s=null,ja(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(vu(t,n,a,s),t=t.sibling;t!==null;)vu(t,n,a,s),t=t.sibling}function E_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,s,a),n[Ct]=t,n[Xt]=a}catch(c){Be(t,t.return,c)}}var Su=!1,ai=null;function T_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Su=!0)}var Vi=null;function b_(){var t=Vi;return Vi=null,t}var qn=0;function yr(t,n,a,s,u){return qn=0,A_(t.child,n,a,s,u)}function A_(t,n,a,s,u){for(var c=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var E=qh(_);s.push(E),E.view&&(c=!0)}else c||qh(_).view&&(c=!0);Su=!0,b0(_,qn===0?n:n+"_"+qn,a),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||A_(t.child,n,a,s,u)&&(c=!0));t=t.sibling}return c}function Xi(t,n){for(;t!==null;)t.tag===5?A0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Xi(t.child,n)),t=t.sibling}function yu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(yu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=oa(n.default,n.share),n!=="none"&&(yr(t,a,n,null,!1)||Xi(t.child,!1))}t=t.sibling}}function uh(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=ra(s,a),c=oa(s.default,a.paired?s.share:s.enter);c!=="none"?yr(t,u,c,null,!1)?(yu(t),a.paired||n||Cr(t,s.onEnter)):Xi(t.child,!1):yu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)uh(t,n),t=t.sibling;else yu(t)}function ch(t){if(ai!==null&&ai.size!==0){var n=ai;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var c=oa(a.default,a.share);if(c!=="none"&&(yr(t,s,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,Cr(t,a.onShare)):Xi(t.child,!1)),n.delete(s),n.size===0)break}}}ch(t)}t=t.sibling}}}function fh(t){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode),s=ai!==null?ai.get(a):void 0,u=oa(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(yr(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,ai.delete(a),Cr(t,n.onShare)):Cr(t,n.onExit):Xi(t.child,!1)),ai!==null&&ch(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)fh(t),t=t.sibling;else ai!==null&&ch(t)}function R_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode);n=oa(n.default,n.update),t.flags&=-5,n!=="none"&&yr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&R_(t);t=t.sibling}}function hh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Xi(t.child,!1))}hh(t)}t=t.sibling}}function xu(t){if(t.tag===30)t.stateNode.paired=null,Xi(t.child,!1),hh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)xu(t),t=t.sibling;else hh(t)}function C_(t){for(t=t.child;t!==null;)t.tag===30?Xi(t.child,!1):(t.subtreeFlags&33554432)!==0&&C_(t),t=t.sibling}function dh(t,n,a,s,u,c,_){for(var E=!1;n!==null;){if(n.tag===5){var N=n.stateNode;if(c!==null&&qn<c.length){var W=c[qn],nt=qh(N);(W.view||nt.view)&&(E=!0);var pt;if(pt=(t.flags&4)===0)if(nt.clip)pt=!0;else{pt=W.rect;var X=nt.rect;pt=pt.y!==X.y||pt.x!==X.x||pt.height!==X.height||pt.width!==X.width}pt&&(t.flags|=4),nt.abs?nt=!W.abs:(W=W.rect,nt=nt.rect,nt=W.height!==nt.height||W.width!==nt.width),nt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&b0(N,qn===0?a:a+"_"+qn,u),E&&(t.flags&4)!==0||(Vi===null&&(Vi=[]),Vi.push(N,qn===0?s:s+"_"+qn,n.memoizedProps)),qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:dh(t,n.child,a,s,u,c,_)&&(E=!0));n=n.sibling}return E}function w_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=ra(a,s),c=oa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var E=t.child;qn=0,u=dh(s,E,u,u,c,_,!1),(t.flags&4)!==0&&u&&Cr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&w_(t);t=t.sibling}}var Mn=!1,ze=!1,ki=!1,ph=!1,D_=typeof WeakSet=="function"?WeakSet:Set,En=null,qi=!1,Vo=!1,Mu=!1,mh=!1;function Ex(t,n,a){if(t=t.containerInfo,Hh=Br,t=Om(t),tf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var c=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var E=0,N=-1,W=-1,nt=0,pt=0,X=t,tt=null;e:for(;;){for(var Dt;X!==s||c!==0&&X.nodeType!==3||(N=E+c),X!==_||u!==0&&X.nodeType!==3||(W=E+u),X.nodeType===3&&(E+=X.nodeValue.length),(Dt=X.firstChild)!==null;)tt=X,X=Dt;for(;;){if(X===t)break e;if(tt===s&&++nt===c&&(N=E),tt===_&&++pt===u&&(W=E),(Dt=X.nextSibling)!==null)break;X=tt,tt=X.parentNode}X=Dt}s=N===-1||W===-1?null:{start:N,end:W}}else s=null}s=s||{start:0,end:0}}else s=null;for(Gh={focusedElem:t,selectionRange:s},Br=!1,a=(a&335544064)===a,En=n,n=a?9270:1024;En!==null;){if(t=En,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&fh(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&T_(t),Eu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&fh(s),Eu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&T_(t),Eu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,En=s):(a&&R_(t),Eu(a))}}ai=null}function Eu(t){for(;En!==null;){var n=En,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var _=Ns(n.type,u);a=c.getSnapshotBeforeUpdate(_,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){Be(n,n.return,E)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)jh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":jh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ra(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=oa(u.default,u.update),u!=="none"&&yr(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,En=s;break}En=n.return}}function U_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),s&4&&Ho(5,a);break;case 1:if(Yi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Be(a,a.return,_)}else{var u=Ns(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Be(a,a.return,_)}}s&64&&S_(a),s&512&&Gi(a,a.return);break;case 3:if(Yi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{lg(t,n)}catch(_){Be(a,a.return,_)}}break;case 27:n===null&&s&4&&E_(a);case 26:case 5:Yi(t,a),n===null&&s&4&&sh(a),s&512&&Gi(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),s&4&&P_(t,a);break;case 13:Yi(t,a),s&4&&z_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Px.bind(null,a),gM(t,a))));break;case 22:if(s=a.memoizedState!==null||Mn,!s){var c=n!==null&&n.memoizedState!==null||ze;n=Mn,u=ze,Mn=s,(ze=c)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ci(t,a,s)):Yi(t,a),Mn=n,ze=u}break;case 30:Yi(t,a),s&512&&Gi(a,a.return);break;case 7:s&512&&Gi(a,a.return);default:Yi(t,a)}}function gh(t,n){for(t=t.child;t!==null;)N_(t,n),t=t.sibling}function N_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,_=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(N){Be(t,t.return,N)}_h(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,De=!0}catch(N){Be(t,t.return,N)}break;case 18:try{var E=t.stateNode;n?T0(E,!0):T0(t.stateNode,!1)}catch(N){Be(t,t.return,N)}break;case 22:case 23:t.memoizedState===null&&gh(t,n);break;default:gh(t,n)}}function _h(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:N_(a,s);break t;case 22:a.memoizedState===null&&_h(a,s);break t;default:_h(a,s)}}t=t.sibling}}function L_(t){var n=t.alternate;n!==null&&(t.alternate=null,L_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&te(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,Yn=!1;function Ai(t,n,a){for(a=a.child;a!==null;)O_(t,n,a),a=a.sibling}function O_(t,n,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:ze||Cn(a,n),Ai(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ze&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ze||Cn(a,n),Go(a);var s=Je,u=Yn;ja(a.type)&&(Je=a.stateNode,Yn=!1),Ai(t,n,a),B0(a.stateNode,a.type,a.memoizedProps),Je=s,Yn=u;break;case 5:ze||Cn(a,n),Go(a);case 6:if(a.tag===6&&Go(a),s=Je,u=Yn,Je=null,Ai(t,n,a),Je=s,Yn=u,Je!==null)if(Yn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode),De=!0}catch(c){Be(a,n,c)}else try{Je.removeChild(a.stateNode),De=!0}catch(c){Be(a,n,c)}break;case 18:Je!==null&&(Yn?(t=Je,E0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Fr(t)):E0(Je,a.stateNode));break;case 4:s=Je,u=Yn,Je=a.stateNode.containerInfo,Yn=!0,Ai(t,n,a),Je=s,Yn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),ze||Ga(4,a,n),Ai(t,n,a);break;case 1:ze||(Cn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&y_(a,n,s)),Ai(t,n,a);break;case 21:Ai(t,n,a);break;case 22:ze=(s=ze)||a.memoizedState!==null,Ai(t,n,a),ze=s;break;case 30:Cn(a,n),Ai(t,n,a);break;case 7:ze||Cn(a,n),Ai(t,n,a);break;default:Ai(t,n,a)}}function P_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fr(t)}catch(a){Be(n,n.return,a)}}}function z_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fr(t)}catch(a){Be(n,n.return,a)}}function Tx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new D_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new D_),n;default:throw Error(r(435,t.tag))}}function Tu(t,n){var a=Tx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=zx.bind(null,t,s);s.then(u,u)}})}function Hn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var c=s[u],_=t,E=n,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(ja(N.type)){Je=N.stateNode,Yn=!1;break t}break;case 5:Je=N.stateNode,Yn=!1;break t;case 3:case 4:Je=N.stateNode.containerInfo,Yn=!0;break t}N=N.return}if(Je===null)throw Error(r(160));O_(_,E,c),Je=null,Yn=!1,_=c.alternate,_!==null&&(_.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)I_(n,t,a),n=n.sibling}var Ri=null;function I_(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var _=s[c];_.ref.impl=_.nextImpl}Hn(n,t,a),Gn(t),u&4&&(Ga(3,t,t.return),Ho(3,t),Ga(5,t,t.return));break;case 1:Hn(n,t,a),Gn(t),u&512&&(ze||s===null||Cn(s,s.return)),u&64&&Mn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ri,Hn(n,t,a),Gn(t),u&512&&(ze||s===null||Cn(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(Mn)t.stateNode=y0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Ne]||s[Ct]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),wn(s,n,a),s[Ct]=t,we(s),n=s;break t;case"link":if(c=k0("link","href",u).get(n+(a.href||""))){for(_=0;_<c.length;_++)if(s=c[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(_,1);break e}}s=u.createElement(n),wn(s,n,a),u.head.appendChild(s);break;case"meta":if(c=k0("meta","content",u).get(n+(a.content||""))){for(_=0;_<c.length;_++)if(s=c[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(_,1);break e}}s=u.createElement(n),wn(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[Ct]=t,we(s),n=s}t.stateNode=n}else Mn||ed(c,t.type,t.stateNode);else t.stateNode=X0(c,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||ze||n.parentNode.removeChild(n)):u.count--,a===null?Mn||ed(c,t.type,t.stateNode):X0(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&rh(t,t.memoizedProps,s.memoizedProps);break;case 27:Hn(n,t,a),Gn(t),u&512&&(ze||s===null||Cn(s,s.return)),s!==null&&u&4&&rh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=ki,ki=!1,Hn(n,t,a),ki=c,Gn(t),u&512&&(ze||s===null||Cn(s,s.return)),t.flags&32){n=t.stateNode;try{nr(n,""),De=!0}catch(nt){Be(t,t.return,nt)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,rh(t,n,s!==null?s.memoizedProps:n)),u&1024&&(ph=!0);break;case 6:if(Hn(n,t,a),Gn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,De=!0}catch(nt){Be(t,t.return,nt)}}break;case 3:if(De=!1,Fu=null,c=Ri,Ri=Qo(n.containerInfo),Hn(n,t,a),Ri=c,Gn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Fr(n.containerInfo)}catch(nt){Be(t,t.return,nt)}ph&&(ph=!1,B_(t)),De=!1;break;case 4:u=ki,ki=Mn,s=am(),c=Ri,Ri=Qo(t.stateNode.containerInfo),Hn(n,t,a),Gn(t),Ri=c,De&&Vo&&(Mu=!0),De=s,ki=u;break;case 12:Hn(n,t,a),Gn(t);break;case 31:Hn(n,t,a),Gn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tu(t,n)));break;case 13:Hn(n,t,a),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ru=G()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tu(t,n)));break;case 22:c=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var E=Mn,N=ze,W=ki;Mn=E||c,ki=W||c,ze=N||_,Hn(n,t,a),ze=N,ki=W,Mn=E,Gn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||_||Mn||ze||(n=_||ze,a=Mn,s=ze,Mn=c||Mn,ze=n,Va(t,2),Mn=a,ze=s),!c&&ki||gh(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Tu(t,a))));break;case 19:Hn(n,t,a),Gn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tu(t,n)));break;case 30:u&512&&(ze||s===null||Cn(s,s.return)),u=am(),c=Vo,_=(a&335544064)===a,E=t.memoizedProps,Vo=_&&oa(E.default,E.update)!=="none",Hn(n,t,a),Gn(t),_&&s!==null&&De&&(t.flags|=4),Vo=c,De=u;break;case 21:break;case 7:u&512&&(ze||s===null||Cn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Hn(n,t,a),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(M_(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(ah(u)){var c=u.stateNode;s===null?s=[c]:s.push(c)}if(ih(u))break;u=u.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var E=a.stateNode,N=oh(t);vu(t,N,E,_);break;case 5:var W=a.stateNode;a.flags&32&&(nr(W,""),a.flags&=-33);var nt=oh(t);vu(t,nt,W,_);break;case 3:case 4:var pt=a.stateNode.containerInfo,X=oh(t);lh(t,X,pt,_);break;default:throw Error(r(161))}}catch(tt){Be(t,t.return,tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function B_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;B_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Br=!0,n.reset(),Br=!1),t=t.sibling}}function xr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)F_(n,t),n=n.sibling;else w_(n)}function F_(t,n){var a=t.alternate;if(a===null)uh(t,!1);else switch(t.tag){case 3:if(mh=qi=!1,b_(),xr(n,t),!qi&&!Mu){if(t=Vi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];A0(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),mh=!0}Vi=null;break;case 5:xr(n,t);break;case 4:s=qi,qi=!1,xr(n,t),qi&&(Mu=!0),qi=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?uh(t,!1):xr(n,t));break;case 30:s=qi,u=b_(),qi=!1,xr(n,t),qi&&(t.flags|=4);var c=t.memoizedProps,_=t.stateNode;n=ra(c,_),_=ra(a.memoizedProps,_);var E=oa(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,qn=0,n=dh(t,a,n,_,E,c,!0),qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Cr(t,t.memoizedProps.onUpdate),Vi=u):u!==null&&(u.push.apply(u,Vi),Vi=u),qi=(t.flags&32)!==0?!0:s;break;default:xr(n,t)}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)U_(t,n.alternate,n),n=n.sibling}function Va(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:Ga(4,a,a.return),Va(a,s);break;case 1:Cn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&y_(a,a.return,u),Va(a,s);break;case 27:(s&2)!==0&&B0(a.stateNode,a.type,a.memoizedProps);case 5:Cn(a,a.return),a.tag!==5&&a.tag!==27||Go(a),Va(a,s);break;case 6:Go(a);break;case 26:Cn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||ze||u.parentNode.removeChild(u),Va(a,s);break;case 22:a.memoizedState===null&&Va(a,s);break;case 30:Cn(a,a.return),Va(a,s);break;case 7:Cn(a,a.return);default:Va(a,s)}t=t.sibling}}function Ci(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,c=n,_=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ci(u,c,a),Ho(4,c);break;case 1:if(Ci(u,c,a),s=c,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Be(s,s.return,nt)}if(s=c,u=s.updateQueue,u!==null){var N=s.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)og(W[u],N)}catch(nt){Be(s,s.return,nt)}}E&&_&64&&S_(c),Gi(c,c.return);break;case 27:(a&2)!==0&&E_(c);case 5:c.tag!==5&&c.tag!==27||x_(c),Ci(u,c,a),E&&s===null&&_&4&&sh(c),Gi(c,c.return);break;case 6:x_(c);break;case 26:N=c.stateNode,c.memoizedState!==null||N===null||Mn||ed(Qo(N.ownerDocument),c.type,N),Ci(u,c,a),E&&s===null&&_&4&&sh(c),Gi(c,c.return);break;case 12:Ci(u,c,a);break;case 31:Ci(u,c,a),E&&_&4&&P_(u,c);break;case 13:Ci(u,c,a),E&&_&4&&z_(u,c);break;case 22:c.memoizedState===null&&Ci(u,c,a),Gi(c,c.return);break;case 30:Ci(u,c,a),Gi(c,c.return);break;case 7:Gi(c,c.return);default:Ci(u,c,a)}n=n.sibling}}function vh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ro(a))}function Sh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ro(t))}function vi(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)H_(t,n,a,s),n=n.sibling;else u&&C_(n)}function H_(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&xu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),c&2048&&Ho(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),u&&mh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Ro(c)));break;case 12:if(c&2048){vi(t,n,a,s),c=n.stateNode;try{var _=n.memoizedProps,E=_.id,N=_.onPostCommit;typeof N=="function"&&N(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(W){Be(n,n.return,W)}}else vi(t,n,a,s);break;case 31:vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,E=n.alternate,n.memoizedState!==null?(u&&E!==null&&E.memoizedState===null&&xu(E),_._visibility&2?vi(t,n,a,s):Xo(t,n)):(u&&E!==null&&E.memoizedState!==null&&xu(n),_._visibility&2?vi(t,n,a,s):(_._visibility|=2,Mr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&vh(E,n);break;case 24:vi(t,n,a,s),c&2048&&Sh(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(Xi(c.child,!0),Xi(n.child,!0))),vi(t,n,a,s);break;default:vi(t,n,a,s)}}function Mr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,_=n,E=a,N=s,W=_.flags;switch(_.tag){case 0:case 11:case 15:Mr(c,_,E,N,u),Ho(8,_);break;case 23:break;case 22:var nt=_.stateNode;_.memoizedState!==null?nt._visibility&2?Mr(c,_,E,N,u):Xo(c,_):(nt._visibility|=2,Mr(c,_,E,N,u)),u&&W&2048&&vh(_.alternate,_);break;case 24:Mr(c,_,E,N,u),u&&W&2048&&Sh(_.alternate,_);break;default:Mr(c,_,E,N,u)}n=n.sibling}}function Xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:Xo(a,s),u&2048&&vh(s.alternate,s);break;case 24:Xo(a,s),u&2048&&Sh(s.alternate,s);break;default:Xo(a,s)}n=n.sibling}}var Ls=8192;function Os(t,n,a){if(t.subtreeFlags&Ls)for(t=t.child;t!==null;)G_(t,n,a),t=t.sibling}function G_(t,n,a){switch(t.tag){case 26:Os(t,n,a),t.flags&Ls&&(t.memoizedState!==null?DM(a,Ri,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&j0(a,t)));break;case 5:Os(t,n,a),t.flags&Ls&&(t=t.stateNode,(n&335544128)===n&&j0(a,t));break;case 3:case 4:var s=Ri;Ri=Qo(t.stateNode.containerInfo),Os(t,n,a),Ri=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Ls,Ls=16777216,Os(t,n,a),Ls=s):Os(t,n,a));break;case 30:if((t.flags&Ls)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,ai===null&&(ai=new Map),ai.set(s,u)}Os(t,n,a);break;default:Os(t,n,a)}}function V_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ko(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];En=s,k_(s,t)}V_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)X_(t),t=t.sibling}function X_(t){switch(t.tag){case 0:case 11:case 15:ko(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:ko(t);break;case 12:ko(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bu(t)):ko(t);break;default:ko(t)}}function bu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];En=s,k_(s,t)}V_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),bu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bu(n));break;default:bu(n)}t=t.sibling}}function k_(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ro(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,En=s;else t:for(a=t;En!==null;){s=En;var u=s.sibling,c=s.return;if(L_(s),s===a){En=null;break t}if(u!==null){u.return=c,En=u;break t}En=c}}}var bx={getCacheForType:function(t){var n=bn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return bn(un).controller.signal}},Ax=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,ye=null,Ee=0,Ie=0,si=null,Xa=!1,Er=!1,yh=!1,ga=0,sn=0,ka=0,Ps=0,Au=0,ri=0,Tr=0,qo=null,Wn=null,xh=!1,Ru=0,q_=0,Cu=1/0,wu=null,qa=null,tn=0,wi=null,zs=null,Wi=0,Mh=0,Eh=null,Y_=null,br=null,Ar=null,Rr=null,Yo=0,Du=null;function oi(){return(Oe&2)!==0&&Ee!==0?Ee&-Ee:Mt.T!==null?Lh():Et()}function W_(){if(ri===0)if((Ee&536870912)===0||_e){var t=ia;ia<<=1,(ia&3932160)===0&&(ia=262144),ri=t}else ri=536870912;return t=An.current,t!==null&&(t.flags|=32),ri}function Cr(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=R0(ra(t.memoizedProps,a))),Ar===null&&(Ar=[]),Ar.push(n.bind(null,s))}}function jn(t,n,a){(t===Ye&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(wr(t,0),Ya(t,Ee,ri,!1)),_s(t,a),((Oe&2)===0||t!==Ye)&&(t===Ye&&((Oe&2)===0&&(Ps|=a),sn===4&&Ya(t,Ee,ri,!1)),ji(t))}function j_(t,n,a){if((Oe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Aa(t,n),u=s?wx(t,n):bh(t,n,!0),c=s;do{if(u===0){Er&&!s&&Ya(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!Rx(a)){u=bh(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;u=qo;var N=E.current.memoizedState.isDehydrated;if(N&&(wr(E,_).flags|=256),_=bh(E,_,!1),_!==2&&_!==6){if(yh&&!N){E.errorRecoveryDisabledLanes|=c,Ps|=c,u=4;break t}c=Wn,Wn=u,c!==null&&(Wn===null?Wn=c:Wn.push.apply(Wn,c))}u=_}if(c=!1,u!==2)continue}}if(u===1){wr(t,0),Ya(t,n,0,!0);break}t:{switch(s=t,c=u,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ya(s,n,ri,!Xa);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ru+300-G(),10<u)){if(Ya(s,n,ri,!Xa),gs(s,0,!0)!==0)break t;Wi=n,s.timeoutHandle=kh(Z_.bind(null,s,a,Wn,wu,xh,n,ri,Ps,Tr,Xa,c,"Throttled",-0,0),u);break t}Z_(s,a,Wn,wu,xh,n,ri,Ps,Tr,Xa,c,null,-0,0)}}break}while(!0);ji(t)}function Z_(t,n,a,s,u,c,_,E,N,W,nt,pt,X,tt){t.timeoutHandle=-1;var Dt=n.subtreeFlags,kt=(c&335544064)===c;if(pt=null,(kt||Dt&8192||(Dt&16785408)===16785408)&&(pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},ai=null,G_(n,c,pt),kt&&(Dt=pt,kt=t.containerInfo,kt=(kt.nodeType===9?kt:kt.ownerDocument).__reactViewTransition,kt!=null&&(Dt.count++,Dt.waitingForViewTransition=!0,Dt=tl.bind(Dt),kt.finished.then(Dt,Dt))),Dt=(c&62914560)===c?Ru-G():(c&4194048)===c?q_-G():0,Dt=UM(pt,Dt),Dt!==null)){Wi=c,t.cancelPendingCommit=Dt(i0.bind(null,t,n,c,a,s,u,_,E,N,W,nt,pt,null,X,tt)),Ya(t,c,_,!W);return}i0(t,n,c,a,s,u,_,E,N,W,nt,pt)}function Rx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],c=u.getSnapshot;u=u.value;try{if(!ni(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,a,s){n=Rl(t,n),n&=~Au,n&=~Ps,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var c=31-Nn(u),_=1<<c;s[c]=-1,u&=~_}a!==0&&R(t,a,n)}function Uu(){return(Oe&6)===0?(Wo(0),!1):!0}function Th(){if(ye!==null){if(Ie===0)var t=ye.return;else t=ye,ca=Es=null,Nf(t),mr=null,Do=0,t=ye;for(;t!==null;)v_(t.alternate,t),t=t.return;ye=null}}function wr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Qx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,Th(),Ye=t,ye=a=la(t.current,null),Ee=n,Ie=0,si=null,Xa=!1,Er=Aa(t,n),yh=!1,Tr=ri=Au=Ps=ka=sn=0,Wn=qo=null,xh=!1,ga=Rl(t,n),Fl(),a}function K_(t,n){he=null,Mt.H=cu,n===pr||n===Kl?(n=ig(),Ie=3):n===Sf?(n=ig(),Ie=4):Ie=n===Wf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,ye===null&&(sn=1,fu(t,pi(n,t.current)))}function Q_(){var t=An.current;return t===null?!0:(Ee&4194048)===Ee?On===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===On:!1}function J_(){var t=Mt.H;return Mt.H=cu,t===null?cu:t}function $_(){var t=Mt.A;return Mt.A=bx,t}function Nu(){sn=4,Xa||(Ee&4194048)!==Ee&&An.current!==null||(Er=!0),(ka&134217727)===0&&(Ps&134217727)===0||Ye===null||Ya(Ye,Ee,ri,!1)}function bh(t,n,a){var s=Oe;Oe|=2;var u=J_(),c=$_();(Ye!==t||Ee!==n)&&(wu=null,wr(t,n)),n=!1;var _=sn;t:do try{if(Ie!==0&&ye!==null){var E=ye,N=si;switch(Ie){case 8:Th(),_=6;break t;case 3:case 2:case 9:case 6:An.current===null&&(n=!0);var W=Ie;if(Ie=0,si=null,Dr(t,E,N,W),a&&Er){_=0;break t}break;default:W=Ie,Ie=0,si=null,Dr(t,E,N,W)}}Cx(),_=sn;break}catch(nt){K_(t,nt)}while(!0);return n&&t.shellSuspendCounter++,ca=Es=null,Oe=s,Mt.H=u,Mt.A=c,ye===null&&(Ye=null,Ee=0,Fl()),_}function Cx(){for(;ye!==null;)t0(ye)}function wx(t,n){var a=Oe;Oe|=2;var s=J_(),u=$_();Ye!==t||Ee!==n?(wu=null,Cu=G()+500,wr(t,n)):Er=Aa(t,n);t:do try{if(Ie!==0&&ye!==null){n=ye;var c=si;e:switch(Ie){case 1:Ie=0,si=null,Dr(t,n,c,1);break;case 2:case 9:if(eg(c)){Ie=0,si=null,e0(n);break}n=function(){Ie!==2&&Ie!==9||Ye!==t||(Ie=7),ji(t)},c.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:eg(c)?(Ie=0,si=null,e0(n)):(Ie=0,si=null,Dr(t,n,c,7));break;case 5:var _=null;switch(ye.tag){case 26:_=ye.memoizedState;case 5:case 27:var E=ye;if(_?Y0(_):E.stateNode.complete){Ie=0,si=null;var N=E.sibling;if(N!==null)ye=N;else{var W=E.return;W!==null?(ye=W,Lu(W)):ye=null}break e}}Ie=0,si=null,Dr(t,n,c,5);break;case 6:Ie=0,si=null,Dr(t,n,c,6);break;case 8:Th(),sn=6;break t;default:throw Error(r(462))}}Dx();break}catch(nt){K_(t,nt)}while(!0);return ca=Es=null,Mt.H=s,Mt.A=u,Oe=a,ye!==null?0:(Ye=null,Ee=0,Fl(),sn)}function Dx(){for(;ye!==null&&!Ot();)t0(ye)}function t0(t){var n=g_(t.alternate,t,ga);t.memoizedProps=t.pendingProps,n===null?Lu(t):ye=n}function e0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=u_(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=u_(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Nf(n);var s=n;s===xn&&(_e?(ql(s),s.tag===5&&s.stateNode!=null&&(Ze=s.stateNode)):(ql(s),_e=!0));default:v_(a,n),n=ye=km(n,ga),n=g_(a,n,ga)}t.memoizedProps=t.pendingProps,n===null?Lu(t):ye=n}function Dr(t,n,a,s){ca=Es=null,Nf(n),mr=null,Do=0;var u=n.return;try{if(_x(t,u,n,a,Ee)){sn=1,fu(t,pi(a,t.current)),ye=null;return}}catch(c){if(u!==null)throw ye=u,c;sn=1,fu(t,pi(a,t.current)),ye=null;return}n.flags&32768?(_e||s===1?t=!0:Er||(Ee&536870912)!==0?t=!1:(Xa=t=!0,(s===2||s===9||s===3||s===6)&&(s=An.current,s!==null&&s.tag===13&&(s.flags|=16384))),n0(n,t)):Lu(n)}function Lu(t){var n=t;do{if((n.flags&32768)!==0){n0(n,Xa);return}t=n.return;var a=xx(n.alternate,n,ga);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);sn===0&&(sn=5)}function n0(t,n){do{var a=Mx(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);sn=6,ye=null}function i0(t,n,a,s,u,c,_,E,N,W,nt,pt){t.cancelPendingCommit=null;do Ou();while(tn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Ye&&(ye=Ye=null,Ee=0),zs=n,wi=t,Wi=a,Eh=u,Y_=s,Ux(t,n,a,_,E,N,pt)}}function Ux(t,n,a,s,u,c,_){var E=n.lanes|n.childLanes;if(Mh=E,E|=rf,zc(t,a,E,s,u,c),Ar=null,(a&335544064)===a?(Rr=sx(t),s=10262):(Rr=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,Ix(yt,function(){return wh(),null})):(t.callbackNode=null,t.callbackPriority=0),Su=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Mt.T,Mt.T=null,u=qt.p,qt.p=2,c=Oe,Oe|=4;try{Ex(t,n,a)}finally{Oe=c,qt.p=u,Mt.T=s}}tn=1,Su?br=iM(_,t.containerInfo,Rr,Ah,Rh,Lx,Ch,wh,Nx):(Ah(),Rh(),Ch())}function Nx(t){if(tn!==0){var n=wi.onRecoverableError;n(t,{componentStack:null})}}function Lx(){tn===3&&(tn=0,F_(zs,wi),tn=4)}function Ah(){if(tn===1){tn=0;var t=wi,n=zs,a=Wi,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Mt.T,Mt.T=null;var u=qt.p;qt.p=2;var c=Oe;Oe|=4;try{Vo=Mu=!1,I_(n,t,a),a=Gh;var _=Om(t.containerInfo),E=a.focusedElem,N=a.selectionRange;if(_!==E&&E&&E.ownerDocument&&Lm(E.ownerDocument.documentElement,E)){if(N!==null&&tf(E)){var W=N.start,nt=N.end;if(nt===void 0&&(nt=W),"selectionStart"in E)E.selectionStart=W,E.selectionEnd=Math.min(nt,E.value.length);else{var pt=E.ownerDocument||document,X=pt&&pt.defaultView||window;if(X.getSelection){var tt=X.getSelection(),Dt=E.textContent.length,kt=Math.min(N.start,Dt),de=N.end===void 0?kt:Math.min(N.end,Dt);!tt.extend&&kt>de&&(_=de,de=kt,kt=_);var Y=Nm(E,kt),H=Nm(E,de);if(Y&&H&&(tt.rangeCount!==1||tt.anchorNode!==Y.node||tt.anchorOffset!==Y.offset||tt.focusNode!==H.node||tt.focusOffset!==H.offset)){var J=pt.createRange();J.setStart(Y.node,Y.offset),tt.removeAllRanges(),kt>de?(tt.addRange(J),tt.extend(H.node,H.offset)):(J.setEnd(H.node,H.offset),tt.addRange(J))}}}}for(pt=[],tt=E;tt=tt.parentNode;)tt.nodeType===1&&pt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pt.length;E++){var ht=pt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Br=!!Hh,Gh=Hh=null}finally{Oe=c,qt.p=u,Mt.T=s}}t.current=n,tn=2}}function Rh(){if(tn===2){tn=0;var t=wi,n=zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Mt.T,Mt.T=null;var s=qt.p;qt.p=2;var u=Oe;Oe|=4;try{U_(t,n.alternate,n)}finally{Oe=u,qt.p=s,Mt.T=a}}tn=3}}function Ch(){if(tn===4||tn===3){tn=0;var t=br;br=null,fe();var n=wi,a=zs,s=Wi,u=Y_,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?tn=5:(tn=0,zs=wi=null,a0(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(qa=null),Q(s),a=a.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Me,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Mt.T,c=qt.p,qt.p=2,Mt.T=null;try{for(var _=n.onRecoverableError,E=0;E<u.length;E++){var N=u[E];_(N.value,{componentStack:N.stack})}}finally{Mt.T=a,qt.p=c}}if(u=Ar,_=Rr,Rr=null,u!==null&&(Ar=null,_===null&&(_=[]),t!==null))for(N=0;N<u.length;N++)a=(0,u[N])(_),a!==void 0&&t.finished.finally(a);(Wi&3)!==0&&Ou(),ji(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===Du?Yo++:(Yo=0,Du=n):(Yo=0,Du=null),Wo(0)}}function a0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ro(n)))}function Ou(){return br!==null&&(br.skipTransition(),br=null),Ah(),Rh(),Ch(),wh()}function wh(){if(tn!==5)return!1;var t=wi,n=Mh;Mh=0;var a=Q(Wi),s=Mt.T,u=qt.p;try{qt.p=32>a?32:a,Mt.T=null,a=Eh,Eh=null;var c=wi,_=Wi;if(tn=0,zs=wi=null,Wi=0,(Oe&6)!==0)throw Error(r(331));var E=Oe;if(Oe|=4,X_(c.current),H_(c,c.current,_,a),Oe=E,Wo(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Me,c)}catch{}return!0}finally{qt.p=u,Mt.T=s,a0(t,n)}}function s0(t,n,a){n=pi(a,n),n=Yf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(_s(t,2),ji(t))}function Be(t,n,a){if(t.tag===3)s0(t,t,a);else for(;n!==null;){if(n.tag===3){s0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(qa===null||!qa.has(s))){t=pi(a,t),a=e_(2),s=Ia(n,a,2),s!==null&&(n_(a,s,n,t),_s(s,2),ji(s));break}}n=n.return}}function Dh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Ax;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(yh=!0,u.add(a),t=Ox.bind(null,t,n,a),n.then(t,t))}function Ox(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(Ee&a)===a&&((sn===4||sn===3&&(Ee&62914560)===Ee&&300>G()-Ru)&&(Oe&2)===0?wr(t,0):Au|=a,Tr===Ee&&(Tr=0)),ji(t)}function r0(t,n){n===0&&(n=Cl()),t=ys(t,n),t!==null&&(_s(t,n),ji(t))}function Px(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),r0(t,a)}function zx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),r0(t,a)}function Ix(t,n){return ne(t,n)}var Ur=null,Nr=null,Uh=!1,Pu=!1,Nh=!1,Wa=0;function ji(t){t!==Nr&&t.next===null&&(Nr===null?Ur=Nr=t:Nr=Nr.next=t),Pu=!0,Uh||(Uh=!0,Fx())}function Wo(t,n){if(!Nh&&Pu){Nh=!0;do for(var a=!1,s=Ur;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var c=0;else{var _=s.suspendedLanes,E=s.pingedLanes;c=(1<<31-Nn(42|t)+1)-1,c&=u&~(_&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,c0(s,c))}else c=Ee,c=gs(s,s===Ye?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Aa(s,c)||(a=!0,c0(s,c));s=s.next}while(a);Nh=!1}}function Bx(){o0()}function o0(){Pu=Uh=!1;var t=0;Wa!==0&&Kx()&&(t=Wa);for(var n=G(),a=null,s=Ur;s!==null;){var u=s.next,c=l0(s,n);c===0?(s.next=null,a===null?Ur=u:a.next=u,u===null&&(Nr=a)):(a=s,(t!==0||(c&3)!==0)&&(Pu=!0)),s=u}tn!==0&&tn!==5||Wo(t),Wa!==0&&(Wa=0)}function l0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var _=31-Nn(c),E=1<<_,N=u[_];N===-1?((E&a)===0||(E&s)!==0)&&(u[_]=Pc(E,n)):N<=n&&(t.expiredLanes|=E),c&=~E}if(n=Ye,a=Ee,a=gs(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&jt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Aa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&jt(s),Q(a)){case 2:case 8:a=Gt;break;case 32:a=yt;break;case 268435456:a=Yt;break;default:a=yt}return s=u0.bind(null,t),a=ne(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&jt(s),t.callbackPriority=2,t.callbackNode=null,2}function u0(t,n){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ou()&&t.callbackNode!==a)return null;var s=Ee;return s=gs(t,t===Ye?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(j_(t,s,n),l0(t,G()),t.callbackNode!=null&&t.callbackNode===a?u0.bind(null,t):null)}function c0(t,n){if(Ou())return null;j_(t,n,!0)}function Fx(){Jx(function(){(Oe&6)!==0?ne(wt,Bx):o0()})}function Lh(){if(Wa===0){var t=As;t===0&&(t=ps,ps<<=1,(ps&261888)===0&&(ps=256)),Wa=t}return Wa}function f0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ul(t)}function Hx(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var c=f0((u[Xt]||null).action),_=s.submitter;_&&(n=(n=_[Xt]||null)?f0(n.formAction):_.getAttribute("formAction"),n!==null&&(c=n,_=null));var E=new Pl("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Wa!==0){var N=new FormData(u,_);Gf(a,{pending:!0,data:N,method:u.method,action:c},null,N)}}else typeof c=="function"&&(E.preventDefault(),N=new FormData(u,_),Gf(a,{pending:!0,data:N,method:u.method,action:c},c,N))},currentTarget:u}]})}}for(var Oh=0;Oh<sf.length;Oh++){var Ph=sf[Oh],Gx=Ph.toLowerCase(),Vx=Ph[0].toUpperCase()+Ph.slice(1);bi(Gx,"on"+Vx)}bi(Im,"onAnimationEnd"),bi(Bm,"onAnimationIteration"),bi(Fm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(Qy,"onTransitionRun"),bi(Jy,"onTransitionStart"),bi($y,"onTransitionCancel"),bi(Hm,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function h0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var _=s.length-1;0<=_;_--){var E=s[_],N=E.instance,W=E.currentTarget;if(E=E.listener,N!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=W;try{c(u)}catch(nt){Bl(nt)}u.currentTarget=null,c=N}else for(_=0;_<s.length;_++){if(E=s[_],N=E.instance,W=E.currentTarget,E=E.listener,N!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=W;try{c(u)}catch(nt){Bl(nt)}u.currentTarget=null,c=N}}}}function xe(t,n){var a=n[$t];a===void 0&&(a=n[$t]=new Set);var s=t+"__bubble";a.has(s)||(d0(n,t,2,!1),a.add(s))}function zh(t,n,a){var s=0;n&&(s|=4),d0(a,t,s,n)}var zu="_reactListening"+Math.random().toString(36).slice(2);function Ih(t){if(!t[zu]){t[zu]=!0,je.forEach(function(a){a!=="selectionchange"&&(Xx.has(a)||zh(a,!1,t),zh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zu]||(n[zu]=!0,zh("selectionchange",!1,n))}}function d0(t,n,a,s){switch(nv(n)){case 2:var u=PM;break;case 8:u=zM;break;default:u=id}a=u.bind(null,n,a,t),u=void 0,!kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Bh(t,n,a,s,u){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var E=s.stateNode.containerInfo;if(E===u)break;if(_===4)for(_=s.return;_!==null;){var N=_.tag;if((N===3||N===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;E!==null;){if(_=Le(E),_===null)return;if(N=_.tag,N===5||N===6||N===26||N===27){s=c=_;continue t}E=E.parentNode}}s=s.return}dm(function(){var W=c,nt=Vc(a),pt=[];t:{var X=Gm.get(t);if(X!==void 0){var tt=Pl,Dt=t;switch(t){case"keypress":if(Ll(a)===0)break t;case"keydown":case"keyup":tt=Ry;break;case"focusin":Dt="focus",tt=jc;break;case"focusout":Dt="blur",tt=jc;break;case"beforeblur":case"afterblur":tt=jc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=my;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=Ny;break;case Im:case Bm:case Fm:tt=vy;break;case Hm:tt=Oy;break;case"scroll":case"scrollend":tt=dy;break;case"wheel":tt=zy;break;case"copy":case"cut":case"paste":tt=yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=vm;break;case"submit":tt=Dy;break;case"toggle":case"beforetoggle":tt=By}var kt=(n&4)!==0,de=!kt&&(t==="scroll"||t==="scrollend"),Y=kt?X!==null?X+"Capture":null:X;kt=[];for(var H=W,J;H!==null;){var ht=H;if(J=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||J===null||Y===null||(ht=go(H,Y),ht!=null&&kt.push(Zo(H,ht,J))),de)break;H=H.return}0<kt.length&&(X=new tt(X,Dt,null,a,nt),pt.push({event:X,listeners:kt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",tt&&a!==Gc&&(Dt=a.relatedTarget||a.fromElement)&&(Le(Dt)||Dt[ee]))break t;(X||tt)&&(Dt=nt.window===nt?nt:(tt=nt.ownerDocument)?tt.defaultView||tt.parentWindow:window,X?(tt=a.relatedTarget||a.toElement,X=W,tt=tt?Le(tt):null,tt!==null&&(de=f(tt),kt=tt.tag,tt!==de||kt!==5&&kt!==27&&kt!==6)&&(tt=null)):(X=null,tt=W),X!==tt&&(kt=gm,ht="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(kt=vm,ht="onPointerLeave",Y="onPointerEnter",H="pointer"),de=X==null?Dt:gn(X),J=tt==null?Dt:gn(tt),Dt=new kt(ht,H+"leave",X,a,nt),Dt.target=de,Dt.relatedTarget=J,ht=null,Le(nt)===W&&(kt=new kt(Y,H+"enter",tt,a,nt),kt.target=J,kt.relatedTarget=de,ht=kt),de=ht,kt=X&&tt?B(X,tt,kx):null,X!==null&&p0(pt,Dt,X,kt,!1),tt!==null&&de!==null&&p0(pt,de,tt,kt,!0)))}t:{if(X=W?gn(W):window,tt=X.nodeName&&X.nodeName.toLowerCase(),tt==="select"||tt==="input"&&X.type==="file")var Ft=Am;else if(Tm(X))if(Rm)Ft=jy;else{Ft=Yy;var Te=qy}else tt=X.nodeName,!tt||tt.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?W&&Hc(W.elementType)&&(Ft=Am):Ft=Wy;if(Ft&&(Ft=Ft(t,W))){bm(pt,Ft,a,nt);break t}Te&&Te(t,X,W)}switch(Te=W?gn(W):window,t){case"focusin":(Tm(Te)||Te.contentEditable==="true")&&(rr=Te,ef=W,To=null);break;case"focusout":To=ef=rr=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,Pm(pt,a,nt);break;case"selectionchange":if(Ky)break;case"keydown":case"keyup":Pm(pt,a,nt)}var Jt;if(Kc)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else sr?Mm(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Sm&&a.locale!=="ko"&&(sr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&sr&&(Jt=pm()):(Ca=nt,qc="value"in Ca?Ca.value:Ca.textContent,sr=!0)),Te=Iu(W,ae),0<Te.length&&(ae=new _m(ae,t,null,a,nt),pt.push({event:ae,listeners:Te}),Jt?ae.data=Jt:(Jt=Em(a),Jt!==null&&(ae.data=Jt)))),(Jt=Hy?Gy(t,a):Vy(t,a))&&(ae=Iu(W,"onBeforeInput"),0<ae.length&&(Te=new _m("onBeforeInput","beforeinput",null,a,nt),pt.push({event:Te,listeners:ae}),Te.data=Jt)),Hx(pt,t,W,a,nt)}h0(pt,n)})}function Zo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Iu(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=go(t,a),u!=null&&s.unshift(Zo(t,u,c)),u=go(t,n),u!=null&&s.push(Zo(t,u,c))),t.tag===3)return s;t=t.return}return[]}function kx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function p0(t,n,a,s,u){for(var c=n._reactName,_=[];a!==null&&a!==s;){var E=a,N=E.alternate,W=E.stateNode;if(E=E.tag,N!==null&&N===s)break;E!==5&&E!==26&&E!==27||W===null||(N=W,u?(W=go(a,c),W!=null&&_.unshift(Zo(a,W,N))):u||(W=go(a,c),W!=null&&_.push(Zo(a,W,N)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var qx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function m0(t){return(typeof t=="string"?t:""+t).replace(qx,`
`).replace(Yx,"")}function g0(t,n){return n=m0(n),m0(t)===n}function Fe(t,n,a,s,u,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||nr(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&nr(t,""+s);else return;break;case"className":Dl(t,"class",s);break;case"tabIndex":Dl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Dl(t,a,s);break;case"style":fm(t,s,c);return;case"data":if(n!=="object"){Dl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ul(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Fe(t,n,"name",u.name,u,null),Fe(t,n,"formEncType",u.formEncType,u,null),Fe(t,n,"formMethod",u.formMethod,u,null),Fe(t,n,"formTarget",u.formTarget,u,null)):(Fe(t,n,"encType",u.encType,u,null),Fe(t,n,"method",u.method,u,null),Fe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ul(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Bi);return;case"onScroll":s!=null&&xe("scroll",t);return;case"onScrollEnd":s!=null&&xe("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ul(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),wl(t,"popover",s);break;case"xlinkActuate":aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":aa(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":aa(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":aa(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":aa(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":wl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=fy.get(a)||a,wl(t,a,s);else return}De=!0}function Fh(t,n,a,s,u,c){switch(a){case"style":fm(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")nr(t,s);else if(typeof s=="number"||typeof s=="bigint")nr(t,""+s);else return;break;case"onScroll":s!=null&&xe("scroll",t);return;case"onScrollEnd":s!=null&&xe("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Bi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!In.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[Xt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,u);break t}De=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):wl(t,a,s)}return}De=!0}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var _=a[c];if(_!=null)switch(c){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,c,_,a,null)}}u&&Fe(t,n,"srcSet",a.srcSet,a,null),s&&Fe(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var E=c=_=u=null,N=null,W=null;for(s in a)if(a.hasOwnProperty(s)){var nt=a[s];if(nt!=null)switch(s){case"name":u=nt;break;case"type":_=nt;break;case"checked":N=nt;break;case"defaultChecked":W=nt;break;case"value":c=nt;break;case"defaultValue":E=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Fe(t,n,s,nt,a,null)}}om(t,c,E,N,W,_,u,!1);return;case"select":xe("invalid",t),s=_=c=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":c=E;break;case"defaultValue":_=E;break;case"multiple":s=E;default:Fe(t,n,u,E,a,null)}n=c,a=_,t.multiple=!!s,n!=null?er(t,!!s,n,!1):a!=null&&er(t,!!s,a,!0);return;case"textarea":xe("invalid",t),c=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":s=E;break;case"defaultValue":u=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Fe(t,n,_,E,a,null)}um(t,s,u,c);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Fe(t,n,N,s,a,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<jo.length;s++)xe(jo[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in a)if(a.hasOwnProperty(W)&&(s=a[W],s!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,W,s,a,null)}return;default:if(Hc(n)){for(nt in a)a.hasOwnProperty(nt)&&(s=a[nt],s!==void 0&&Fh(t,n,nt,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Fe(t,n,E,s,a,null))}var Wx={};function jx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,_=null,E=null,N=null,W=null,nt=null;for(tt in a){var pt=a[tt];if(a.hasOwnProperty(tt)&&pt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":N=pt;default:s.hasOwnProperty(tt)||Fe(t,n,tt,null,s,pt)}}for(var X in s){var tt=s[X];if(pt=a[X],s.hasOwnProperty(X)&&(tt!=null||pt!=null))switch(X){case"type":tt!==pt&&(De=!0),c=tt;break;case"name":tt!==pt&&(De=!0),u=tt;break;case"checked":tt!==pt&&(De=!0),W=tt;break;case"defaultChecked":tt!==pt&&(De=!0),nt=tt;break;case"value":tt!==pt&&(De=!0),_=tt;break;case"defaultValue":tt!==pt&&(De=!0),E=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:tt!==pt&&Fe(t,n,X,tt,s,pt)}}Bc(t,_,E,N,W,nt,c,u);return;case"select":tt=_=E=X=null;for(c in a)if(N=a[c],a.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":tt=N;default:s.hasOwnProperty(c)||Fe(t,n,c,null,s,N)}for(u in s)if(c=s[u],N=a[u],s.hasOwnProperty(u)&&(c!=null||N!=null))switch(u){case"value":c!==N&&(De=!0),X=c;break;case"defaultValue":c!==N&&(De=!0),E=c;break;case"multiple":c!==N&&(De=!0),_=c;default:c!==N&&Fe(t,n,u,c,s,N)}n=E,a=_,s=tt,X!=null?er(t,!!a,X,!1):!!s!=!!a&&(n!=null?er(t,!!a,n,!0):er(t,!!a,a?[]:"",!1));return;case"textarea":tt=X=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Fe(t,n,E,null,s,u)}for(_ in s)if(u=s[_],c=a[_],s.hasOwnProperty(_)&&(u!=null||c!=null))switch(_){case"value":u!==c&&(De=!0),X=u;break;case"defaultValue":u!==c&&(De=!0),tt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==c&&Fe(t,n,_,u,s,c)}lm(t,X,tt);return;case"option":for(var Dt in a)if(X=a[Dt],a.hasOwnProperty(Dt)&&X!=null&&!s.hasOwnProperty(Dt))switch(Dt){case"selected":t.selected=!1;break;default:Fe(t,n,Dt,null,s,X)}for(N in s)if(X=s[N],tt=a[N],s.hasOwnProperty(N)&&X!==tt&&(X!=null||tt!=null))switch(N){case"selected":X!==tt&&(De=!0),t.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:Fe(t,n,N,X,s,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var kt in a)X=a[kt],a.hasOwnProperty(kt)&&X!=null&&!s.hasOwnProperty(kt)&&Fe(t,n,kt,null,s,X);for(W in s)if(X=s[W],tt=a[W],s.hasOwnProperty(W)&&X!==tt&&(X!=null||tt!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,n));break;default:Fe(t,n,W,X,s,tt)}return;default:if(Hc(n)){for(var de in a)X=a[de],a.hasOwnProperty(de)&&X!==void 0&&!s.hasOwnProperty(de)&&Fh(t,n,de,void 0,s,X);for(nt in s)X=s[nt],tt=a[nt],!s.hasOwnProperty(nt)||X===tt||X===void 0&&tt===void 0||Fh(t,n,nt,X,s,tt);return}}for(var Y in a)X=a[Y],a.hasOwnProperty(Y)&&X!=null&&!s.hasOwnProperty(Y)&&Fe(t,n,Y,null,s,X);for(pt in s)X=s[pt],tt=a[pt],!s.hasOwnProperty(pt)||X===tt||X==null&&tt==null||Fe(t,n,pt,X,s,tt)}function _0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],c=u.transferSize,_=u.initiatorType,E=u.duration;if(c&&E&&_0(_)){for(_=0,E=u.responseEnd,s+=1;s<a.length;s++){var N=a[s],W=N.startTime;if(W>E)break;var nt=N.transferSize,pt=N.initiatorType;nt&&_0(pt)&&(N=N.responseEnd,_+=nt*(N<E?1:(E-W)/(N-W)))}if(--s,n+=8*(c+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Hh=null,Gh=null;function Ko(t){return t.nodeType===9?t:t.ownerDocument}function v0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function y0(t,n,a,s){return a=Ko(a).createElement(t),a[Ct]=s,a[Xt]=n,wn(a,t,n),we(a),a}function Vh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xh=null;function Kx(){var t=window.event;return t&&t.type==="popstate"?t===Xh?!1:(Xh=t,!0):(Xh=null,!1)}var kh=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,x0=typeof Promise=="function"?Promise:void 0,M0=typeof requestAnimationFrame=="function"?requestAnimationFrame:kh,Jx=typeof queueMicrotask=="function"?queueMicrotask:typeof x0<"u"?function(t){return x0.resolve(null).then(t).catch($x)}:kh;function $x(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function E0(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Fr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Jh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Jh(a);for(var c=a.firstChild;c;){var _=c.nextSibling,E=c.nodeName;c[Ne]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=_}}else a==="body"&&Jh(t.ownerDocument.body);a=u}while(a);Fr(n)}function T0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function b0(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function A0(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function tM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function qh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return tM(n,a,t)}function eM(t){return t.documentElement.clientHeight}function nM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function iM(t,n,a,s,u,c,_,E,N){var W=n.nodeType===9?n:n.ownerDocument;try{var nt=W.startViewTransition({update:function(){var X=W.defaultView,tt=X.navigation&&X.navigation.transition,Dt=W.fonts.status;s();var kt=[];if(Dt==="loaded"&&(eM(W),W.fonts.status==="loading"&&kt.push(W.fonts.ready)),Dt=kt.length,t!==null)for(var de=t.suspenseyImages,Y=0,H=0;H<de.length;H++){var J=de[H];if(!J.complete){var ht=J.getBoundingClientRect();if(0<ht.bottom&&0<ht.right&&ht.top<X.innerHeight&&ht.left<X.innerWidth){if(Y+=W0(J),Y>Hu){kt.length=Dt;break}J=new Promise(nM.bind(J)),kt.push(J)}}}if(0<kt.length)return X=Promise.race([Promise.all(kt),new Promise(function(Ft){return setTimeout(Ft,500)})]).then(u,u),(tt?Promise.allSettled([tt.finished,X]):X).then(c,c);if(u(),tt)return tt.finished.then(c,c);c()},types:a});W.__reactViewTransition=nt;var pt=[];return nt.ready.then(function(){for(var X=W.documentElement.getAnimations({subtree:!0}),tt=0;tt<X.length;tt++){var Dt=X[tt],kt=Dt.effect,de=kt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){pt.push(Dt),Dt=kt.getKeyframes();for(var Y=de=void 0,H=!0,J=0;J<Dt.length;J++){var ht=Dt[J],Ft=ht.width;if(de===void 0)de=Ft;else if(de!==Ft){H=!1;break}if(Ft=ht.height,Y===void 0)Y=Ft;else if(Y!==Ft){H=!1;break}delete ht.width,delete ht.height,ht.transform==="none"&&delete ht.transform}H&&de!==void 0&&Y!==void 0&&(kt.setKeyframes(Dt),H=getComputedStyle(kt.target,kt.pseudoElement),H.width!==de||H.height!==Y)&&(H=Dt[0],H.width=de,H.height=Y,H=Dt[Dt.length-1],H.width=de,H.height=Y,kt.setKeyframes(Dt))}}_()},function(X){W.__reactViewTransition===nt&&(W.__reactViewTransition=null);try{if(typeof X=="object"&&X!==null)switch(X.name){case"InvalidStateError":(X.message==="View transition was skipped because document visibility state is hidden."||X.message==="Skipping view transition because document visibility state has become hidden."||X.message==="Skipping view transition because viewport size changed."||X.message==="Transition was aborted because of invalid state")&&(X=null)}X!==null&&N(X)}finally{s(),u(),_()}}),nt.finished.finally(function(){for(var X=0;X<pt.length;X++)pt[X].cancel();W.__reactViewTransition===nt&&(W.__reactViewTransition=null),E()}),nt}catch{return s(),u(),_(),null}}function Is(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Is.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Is.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[u])}return s},Is.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function R0(t){return{name:t,group:new Is("group",t),imagePair:new Is("image-pair",t),old:new Is("old",t),new:new Is("new",t)}}function li(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}li.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(w0(c,t,n,a)===-1){var _=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(N){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,N):n.handleEvent(N)}),s!==null&&(u=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=Lr(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:u}),p(this._fragmentFiber.child,!1,aM,t,E,s)}this._eventListeners=c}};function aM(t,n,a,s){return x(t).addEventListener(n,a,s),!1}li.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=w0(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var c=u.cleanup;u=Lr(u.optionsOrUseCapture),p(this._fragmentFiber.child,!1,sM,t,a,u),s.splice(n,1),c!==null&&c()}};function sM(t,n,a,s){return x(t).removeEventListener(n,a,s),!1}function Lr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function C0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function w0(t,n,a,s){if(t.length===0)return-1;s=C0(s);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&C0(c.optionsOrUseCapture)===s)return u}return-1}li.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=x(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];s.addEventListener(c.type,c.attachedListener,Lr(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],s.removeEventListener(c.type,c.attachedListener,Lr(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},li.prototype.focus=function(t){p(this._fragmentFiber.child,!0,D0,t,void 0,void 0)};function D0(t,n){return t.tag===6?!1:(t=x(t),_M(t,n))}li.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,Yh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!D0(n[a],t);a--);};function Yh(t,n){return n.push(t),!1}li.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=x(t),t=Ko(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,rM,t,void 0,void 0))};function rM(t,n){return t.tag===6?!1:(t=x(t),t===n||t.contains(n)?(n.blur(),!0):!1)}li.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,oM,t,void 0,void 0)};function oM(t,n){return t.tag===6||(t=x(t),n.observe(t)),!1}li.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,lM,t,void 0,void 0);for(var a=n=0;a<Di.length;a++){var s=Di[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Di[n++]=s}Di.length=n}};function lM(t,n){return t.tag===6||(t=x(t),n.unobserve(t)),!1}var Di=[],Wh=!1;function uM(t,n,a){Di.push({fragmentInstance:t,observer:n,instance:a}),Wh||(Wh=!0,vM(function(){Wh=!1;var s=Di;Di=[];for(var u=0;u<s.length;u++){var c=s[u];c.observer.unobserve(c.instance)}}))}li.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,cM,t,void 0,void 0),t};function cM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=x(t),n.push.apply(n,t.getClientRects());return!1}li.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:x(n).getRootNode(t)},li.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,Yh,a,void 0,void 0);var s=x(n);if(a.length===0){if(a=s,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=x(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=x(a[0]),u=x(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),E=u.compareDocumentPosition(t),N=_&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=s&&c&&_&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&u===t||N||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||fM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function fM(t,n,a,s,u){var c=Le(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=S(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=B(a,c,F),n===null?n=!1:(p(n,!0,O,c,a),c=y,y=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=B(s,c,F),n===null?n=!1:(p(n,!0,w,c,s),c=y,P=y=null,n=c!==null)),n):!1}function U0(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}li.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];p(this._fragmentFiber.child,!1,Yh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=b(this._fragmentFiber);if(s=a?s[1]||s[0]||S(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=x(s),U0(t,a);return}if(s=x(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=x(u),U0(u,a)):x(u).scrollIntoView(t),s+=a?-1:1}};function hM(t,n){return t=x(t),N0(t,n),!1}function N0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function L0(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,Lr(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var _=0,E=0;E<Di.length;E++){var N=Di[E];(N.fragmentInstance!==n||N.observer!==c||N.instance!==t)&&(Di[_++]=N)}Di.length=_,c.observe(t)}),N0(t,n))}function dM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,Lr(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?uM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function jh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jh(a),te(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function pM(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ne])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function mM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Si(t.nextSibling),t===null))return null;return t}function O0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Si(t.nextSibling),t===null))return null;return t}function Zh(t){return t.data==="$?"||t.data==="$~"}function Kh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function gM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Qh=null;function P0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function z0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function _M(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function vM(t){M0(function(){M0(function(n){return t(n)})})}function I0(t,n,a){switch(n=Ko(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function B0(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&Fe(t,n,s,null,Wx,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Bi&&(t.onclick=null),te(t)}function Jh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);te(t)}var yi=new Map,F0=new Set;function Qo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var _a=qt.d;qt.d={f:SM,r:yM,D:xM,C:MM,L:EM,m:TM,X:AM,S:bM,M:RM};function SM(){var t=_a.f(),n=Uu();return t||n}function yM(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?Gg(n):_a.r(t)}var Or=typeof document>"u"?null:document;function H0(t,n,a){var s=Or;if(s&&typeof n=="string"&&n){var u=hi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),F0.has(u)||(F0.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),wn(n,"link",t),we(n),s.head.appendChild(n)))}}function xM(t){_a.D(t),H0("dns-prefetch",t,null)}function MM(t,n){_a.C(t,n),H0("preconnect",t,n)}function EM(t,n,a){_a.L(t,n,a);var s=Or;if(s&&t&&n){var u='link[rel="preload"][as="'+hi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+hi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+hi(a.imageSizes)+'"]')):u+='[href="'+hi(t)+'"]';var c=u;switch(n){case"style":c=Pr(t);break;case"script":c=zr(t)}if(!(yi.has(c)||(t=L({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(c,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Jo(c))||n==="script"&&s.querySelector($o(c))))){var _=s.createElement("link");wn(_,"link",t),n==="style"&&(_[Ce]=!0,_.onload=_.onerror=function(){Ra(_)}),we(_),s.head.appendChild(_)}}}function TM(t,n){_a.m(t,n);var a=Or;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+hi(s)+'"][href="'+hi(t)+'"]',c=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=zr(t)}if(!yi.has(c)&&(t=L({rel:"modulepreload",href:t},n),yi.set(c,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($o(c)))return}s=a.createElement("link"),wn(s,"link",t),we(s),a.head.appendChild(s)}}}function bM(t,n,a){_a.S(t,n,a);var s=Or;if(s&&t){var u=ti(s).hoistableStyles,c=Pr(t);n=n||"default";var _=u.get(c);if(!_){var E={loading:0,preload:null};if(_=s.querySelector(Jo(c)))E.loading=5;else{t=L({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(c))&&$h(t,a);var N=_=s.createElement("link");we(N),wn(N,"link",t),N._p=new Promise(function(W,nt){N.onload=W,N.onerror=nt}),N.addEventListener("load",function(){E.loading|=1}),N.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Bu(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:E},u.set(c,_)}}}function AM(t,n){_a.X(t,n);var a=Or;if(a&&t){var s=ti(a).hoistableScripts,u=zr(t),c=s.get(u);c||(c=a.querySelector($o(u)),c||(t=L({src:t,async:!0},n),(n=yi.get(u))&&td(t,n),c=a.createElement("script"),we(c),wn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function RM(t,n){_a.M(t,n);var a=Or;if(a&&t){var s=ti(a).hoistableScripts,u=zr(t),c=s.get(u);c||(c=a.querySelector($o(u)),c||(t=L({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&td(t,n),c=a.createElement("script"),we(c),wn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function G0(t,n,a,s){var u=(u=qe.current)?Qo(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Pr(a.href),n=ti(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Pr(a.href);var c=ti(u).hoistableStyles,_=c.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,_),(c=u.querySelector(Jo(t)))?c._p||(_.instance=c,_.state.loading=5):(c=yi.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,c)),CM(u,t,c,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=zr(a),n=ti(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Pr(t){return'href="'+hi(t)+'"'}function Jo(t){return'link[rel="stylesheet"]['+t+"]"}function V0(t){return L({},t,{"data-precedence":t.precedence,precedence:null})}function CM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ce]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Ce]=!0,n.onload=n.onerror=Ra.bind(null,n),wn(n,"link",a),we(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function zr(t){return'[src="'+hi(t)+'"]'}function $o(t){return"script[async]"+t}function X0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+hi(a.href)+'"]');if(s)return n.instance=s,we(s),s;var u=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),we(s),wn(s,"style",u),Bu(s,a.precedence,t),n.instance=s;case"stylesheet":u=Pr(a.href);var c=t.querySelector(Jo(u));if(c)return n.state.loading|=4,n.instance=c,we(c),c;s=V0(a),(u=yi.get(u))&&$h(s,u),c=(t.ownerDocument||t).createElement("link"),we(c);var _=c;return _._p=new Promise(function(E,N){_.onload=E,_.onerror=N}),wn(c,"link",s),n.state.loading|=4,Bu(c,a.precedence,t),n.instance=c;case"script":return c=zr(a.src),(u=t.querySelector($o(c)))?(n.instance=u,we(u),u):(s=a,(u=yi.get(c))&&(s=L({},a),td(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),we(u),wn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Bu(s,a.precedence,t));return n.instance}function Bu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,c=u,_=0;_<s.length;_++){var E=s[_];if(E.dataset.precedence===n)c=E;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function $h(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fu=null;function k0(t,n,a){if(Fu===null){var s=new Map,u=Fu=new Map;u.set(a,s)}else u=Fu,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Ne]||c[Ct]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var _=c.getAttribute(n)||"";_=t+_;var E=s.get(_);E?E.push(c):s.set(_,[c])}}return s}function ed(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function wM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function q0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Y0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function W0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function j0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=W0(n),t.suspenseyImages.push(n)),t=NM.bind(t),n.decode().then(t,t))}function DM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Pr(s.href),c=n.querySelector(Jo(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,we(c);return}c=n.ownerDocument||n,s=V0(s),(u=yi.get(u))&&$h(s,u),c=c.createElement("link"),we(c);var _=c;_._p=new Promise(function(E,N){_.onload=E,_.onerror=N}),wn(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=tl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hu=0;function UM(t,n){return t.stylesheets&&t.count===0&&Vu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Vu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Hu===0&&(Hu=62500*Zx());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Vu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Hu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Z0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Vu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function tl(){this.count--,Z0(this)}function NM(){this.imgCount--,Z0(this)}var Gu=null;function Vu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gu=new Map,n.forEach(LM,t),Gu=null,tl.call(t))}function LM(t,n){if(!(n.state.loading&4)){var a=Gu.get(t);if(a)var s=a.get(null);else{a=new Map,Gu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var _=u[c];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),c=a.get(_)||s,c===s&&a.set(null,u),a.set(_,u),this.count++,s=tl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ir={$$typeof:lt,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function OM(t,n,a,s,u,c,_,E,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mo(0),this.hiddenUpdates=mo(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.transitionTypes=null,this.incompleteTransitions=new Map}function K0(t,n,a,s,u,c,_,E,N,W,nt,pt){return t=new OM(t,n,a,_,N,W,nt,pt,E),n=1,c===!0&&(n|=24),c=kn(3,null,null,n),t.current=c,c.stateNode=t,n=gf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},yf(c),t}function Q0(t){return t?(t=ur,t):ur}function J0(t,n,a,s,u,c){u=Q0(u),s.context===null?s.context=u:s.pendingContext=u,s=za(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=Ia(t,s,n),a!==null&&(jn(a,t,n),Uo(a,t,n))}function $0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function nd(t,n){$0(t,n),(t=t.alternate)&&$0(t,n)}function tv(t){if(t.tag===13||t.tag===31){var n=ys(t,67108864);n!==null&&jn(n,t,67108864),nd(t,67108864)}}function ev(t){if(t.tag===13||t.tag===31){var n=oi();n=ot(n);var a=ys(t,n);a!==null&&jn(a,t,n),nd(t,n)}}var Br=!0;function PM(t,n,a,s){var u=Mt.T;Mt.T=null;var c=qt.p;try{qt.p=2,id(t,n,a,s)}finally{qt.p=c,Mt.T=u}}function zM(t,n,a,s){var u=Mt.T;Mt.T=null;var c=qt.p;try{qt.p=8,id(t,n,a,s)}finally{qt.p=c,Mt.T=u}}function id(t,n,a,s){if(Br){var u=ad(s);if(u===null)Bh(t,n,s,Xu,a),iv(t,s);else if(BM(u,t,n,a,s))s.stopPropagation();else if(iv(t,s),n&4&&-1<IM.indexOf(t)){for(;u!==null;){var c=ge(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var _=fi(c.pendingLanes);if(_!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var N=1<<31-Nn(_);E.entanglements[1]|=N,_&=~N}ji(c),(Oe&6)===0&&(Cu=G()+500,Wo(0))}}break;case 31:case 13:E=ys(c,2),E!==null&&jn(E,c,2),Uu(),nd(c,2)}if(c=ad(s),c===null&&Bh(t,n,s,Xu,a),c===u)break;u=c}u!==null&&s.stopPropagation()}else Bh(t,n,s,null,a)}}function ad(t){return t=Vc(t),sd(t)}var Xu=null;function sd(t){if(Xu=null,t=Le(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Xu=t,null}function nv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case wt:return 2;case Gt:return 8;case yt:case mt:return 32;case Yt:return 268435456;default:return 32}default:return 32}}var rd=!1,Za=null,Ka=null,Qa=null,el=new Map,nl=new Map,Ja=[],IM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function iv(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":el.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(n.pointerId)}}function il(t,n,a,s,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[u]},n!==null&&(n=ge(n),n!==null&&tv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function BM(t,n,a,s,u){switch(n){case"focusin":return Za=il(Za,t,n,a,s,u),!0;case"dragenter":return Ka=il(Ka,t,n,a,s,u),!0;case"mouseover":return Qa=il(Qa,t,n,a,s,u),!0;case"pointerover":var c=u.pointerId;return el.set(c,il(el.get(c)||null,t,n,a,s,u)),!0;case"gotpointercapture":return c=u.pointerId,nl.set(c,il(nl.get(c)||null,t,n,a,s,u)),!0}return!1}function av(t){var n=Le(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Pt(t.priority,function(){ev(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Pt(t.priority,function(){ev(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ku(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ad(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Gc=s,a.target.dispatchEvent(s),Gc=null}else return n=ge(a),n!==null&&tv(n),t.blockedOn=a,!1;n.shift()}return!0}function sv(t,n,a){ku(t)&&a.delete(n)}function FM(){rd=!1,Za!==null&&ku(Za)&&(Za=null),Ka!==null&&ku(Ka)&&(Ka=null),Qa!==null&&ku(Qa)&&(Qa=null),el.forEach(sv),nl.forEach(sv)}function qu(t,n){t.blockedOn===n&&(t.blockedOn=null,rd||(rd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,FM)))}var Yu=null;function rv(t){Yu!==t&&(Yu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Yu===t&&(Yu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(sd(s||a)===null)continue;break}var c=ge(a);c!==null&&(t.splice(n,3),n-=3,Gf(c,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Fr(t){function n(N){return qu(N,t)}Za!==null&&qu(Za,t),Ka!==null&&qu(Ka,t),Qa!==null&&qu(Qa,t),el.forEach(n),nl.forEach(n);for(var a=0;a<Ja.length;a++){var s=Ja[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)av(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],c=a[s+1],_=u[Xt]||null;if(typeof c=="function")_||rv(a);else if(_){var E=null;if(c&&c.hasAttribute("formAction")){if(u=c,_=c[Xt]||null)E=_.formAction;else if(sd(u)!==null)continue}else E=_.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),rv(a)}}}function ov(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function od(t){this._internalRoot=t}Wu.prototype.render=od.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=oi();J0(a,s,t,n,null,null)},Wu.prototype.unmount=od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;J0(t.current,2,null,t,null,null),Uu(),n[ee]=null}};function Wu(t){this._internalRoot=t}Wu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Et();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&av(t)}};var lv=e.version;if(lv!=="19.3.0")throw Error(r(527,lv,"19.3.0"));qt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=g(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var HM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ju.isDisabled&&ju.supportsFiber)try{Me=ju.inject(HM),$e=ju}catch{}}return sl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Qg,c=Jg,_=$g;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=K0(t,1,!1,null,null,a,s,null,u,c,_,ov),t[ee]=n.current,Ih(t),new od(n)},sl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",c=Qg,_=Jg,E=$g,N=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(N=a.formState)),n=K0(t,1,!0,n,a??null,s,u,N,c,_,E,ov),n.context=Q0(null),a=n.current,s=oi(),s=ot(s),u=za(s),u.callback=null,Ia(a,u,s),a=s,n.current.lanes=a,_s(n,a),ji(n),t[ee]=n.current,Ih(t),new Wu(n)},sl.version="19.3.0",sl}var vv;function KM(){if(vv)return cd.exports;vv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),cd.exports=ZM(),cd.exports}var QM=KM();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vp="180",io={ROTATE:0,DOLLY:1,PAN:2},eo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},JM=0,Sv=1,$M=2,bS=1,tE=2,Ea=3,cs=0,Jn=1,Qn=2,ls=0,ao=1,yv=2,xv=3,Mv=4,eE=5,qs=100,nE=101,iE=102,aE=103,sE=104,rE=200,oE=201,lE=202,uE=203,Kd=204,Qd=205,cE=206,fE=207,hE=208,dE=209,pE=210,mE=211,gE=212,_E=213,vE=214,Jd=0,$d=1,tp=2,ro=3,ep=4,np=5,ip=6,ap=7,AS=0,SE=1,yE=2,us=0,xE=1,ME=2,EE=3,TE=4,bE=5,AE=6,RE=7,RS=300,oo=301,lo=302,sp=303,rp=304,Uc=306,op=1e3,Ws=1001,lp=1002,zi=1003,CE=1004,Zu=1005,Ki=1006,pd=1007,js=1008,$i=1009,CS=1010,wS=1011,dl=1012,Xp=1013,Zs=1014,Ta=1015,Sl=1016,kp=1017,qp=1018,pl=1020,DS=35902,US=35899,NS=1021,LS=1022,Pi=1023,ml=1026,gl=1027,OS=1028,Yp=1029,PS=1030,Wp=1031,jp=1033,Mc=33776,Ec=33777,Tc=33778,bc=33779,up=35840,cp=35841,fp=35842,hp=35843,dp=36196,pp=37492,mp=37496,gp=37808,_p=37809,vp=37810,Sp=37811,yp=37812,xp=37813,Mp=37814,Ep=37815,Tp=37816,bp=37817,Ap=37818,Rp=37819,Cp=37820,wp=37821,Dp=36492,Up=36494,Np=36495,Lp=36283,Op=36284,Pp=36285,zp=36286,wE=3200,DE=3201,zS=0,UE=1,os="",Mi="srgb",uo="srgb-linear",Cc="linear",Xe="srgb",Hr=7680,Ev=519,NE=512,LE=513,OE=514,IS=515,PE=516,zE=517,IE=518,BE=519,Tv=35044,bv="300 es",Qi=2e3,wc=2001;class $s{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=Math.PI/180,Ip=180/Math.PI;function yl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function FE(o,e){return(o%e+e)%e}function md(o,e,i){return(1-i)*o+i*e}function rl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const HE={DEG2RAD:Ac};class ce{constructor(e=0,i=0){ce.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*l+e.x,this.y=f*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ks{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,h,d){let m=r[l+0],g=r[l+1],v=r[l+2],p=r[l+3];const S=f[h+0],M=f[h+1],b=f[h+2],A=f[h+3];if(d===0){e[i+0]=m,e[i+1]=g,e[i+2]=v,e[i+3]=p;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=b,e[i+3]=A;return}if(p!==A||m!==S||g!==M||v!==b){let x=1-d;const y=m*S+g*M+v*b+p*A,P=y>=0?1:-1,O=1-y*y;if(O>Number.EPSILON){const F=Math.sqrt(O),B=Math.atan2(F,y*P);x=Math.sin(x*B)/F,d=Math.sin(d*B)/F}const w=d*P;if(m=m*x+S*w,g=g*x+M*w,v=v*x+b*w,p=p*x+A*w,x===1-d){const F=1/Math.sqrt(m*m+g*g+v*v+p*p);m*=F,g*=F,v*=F,p*=F}}e[i]=m,e[i+1]=g,e[i+2]=v,e[i+3]=p}static multiplyQuaternionsFlat(e,i,r,l,f,h){const d=r[l],m=r[l+1],g=r[l+2],v=r[l+3],p=f[h],S=f[h+1],M=f[h+2],b=f[h+3];return e[i]=d*b+v*p+m*M-g*S,e[i+1]=m*b+v*S+g*p-d*M,e[i+2]=g*b+v*M+d*S-m*p,e[i+3]=v*b-d*p-m*S-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,m=Math.sin,g=d(r/2),v=d(l/2),p=d(f/2),S=m(r/2),M=m(l/2),b=m(f/2);switch(h){case"XYZ":this._x=S*v*p+g*M*b,this._y=g*M*p-S*v*b,this._z=g*v*b+S*M*p,this._w=g*v*p-S*M*b;break;case"YXZ":this._x=S*v*p+g*M*b,this._y=g*M*p-S*v*b,this._z=g*v*b-S*M*p,this._w=g*v*p+S*M*b;break;case"ZXY":this._x=S*v*p-g*M*b,this._y=g*M*p+S*v*b,this._z=g*v*b+S*M*p,this._w=g*v*p-S*M*b;break;case"ZYX":this._x=S*v*p-g*M*b,this._y=g*M*p+S*v*b,this._z=g*v*b-S*M*p,this._w=g*v*p+S*M*b;break;case"YZX":this._x=S*v*p+g*M*b,this._y=g*M*p+S*v*b,this._z=g*v*b-S*M*p,this._w=g*v*p-S*M*b;break;case"XZY":this._x=S*v*p-g*M*b,this._y=g*M*p-S*v*b,this._z=g*v*b+S*M*p,this._w=g*v*p+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],h=i[1],d=i[5],m=i[9],g=i[2],v=i[6],p=i[10],S=r+d+p;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(f-g)*M,this._z=(h-l)*M}else if(r>d&&r>p){const M=2*Math.sqrt(1+r-d-p);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(f+g)/M}else if(d>p){const M=2*Math.sqrt(1+d-r-p);this._w=(f-g)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+p-r-d);this._w=(h-l)/M,this._x=(f+g)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,h=e._w,d=i._x,m=i._y,g=i._z,v=i._w;return this._x=r*v+h*d+l*g-f*m,this._y=l*v+h*m+f*d-r*g,this._z=f*v+h*g+r*m-l*d,this._w=h*v-r*d-l*m-f*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=f,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const g=Math.sqrt(m),v=Math.atan2(g,d),p=Math.sin((1-i)*v)/g,S=Math.sin(i*v)/g;return this._w=h*p+this._w*S,this._x=r*p+this._x*S,this._y=l*p+this._y*S,this._z=f*p+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,i=0,r=0){k.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Av.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Av.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,h=e.y,d=e.z,m=e.w,g=2*(h*l-d*r),v=2*(d*i-f*l),p=2*(f*r-h*i);return this.x=i+m*g+h*p-d*v,this.y=r+m*v+d*g-f*p,this.z=l+m*p+f*v-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-f*d,this.y=f*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return gd.copy(this).projectOnVector(e),this.sub(gd)}reflect(e){return this.sub(gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gd=new k,Av=new Ks;class pe{constructor(e,i,r,l,f,h,d,m,g){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,m,g)}set(e,i,r,l,f,h,d,m,g){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=f,v[5]=m,v[6]=r,v[7]=h,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[3],m=r[6],g=r[1],v=r[4],p=r[7],S=r[2],M=r[5],b=r[8],A=l[0],x=l[3],y=l[6],P=l[1],O=l[4],w=l[7],F=l[2],B=l[5],L=l[8];return f[0]=h*A+d*P+m*F,f[3]=h*x+d*O+m*B,f[6]=h*y+d*w+m*L,f[1]=g*A+v*P+p*F,f[4]=g*x+v*O+p*B,f[7]=g*y+v*w+p*L,f[2]=S*A+M*P+b*F,f[5]=S*x+M*O+b*B,f[8]=S*y+M*w+b*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],m=e[6],g=e[7],v=e[8];return i*h*v-i*d*g-r*f*v+r*d*m+l*f*g-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],m=e[6],g=e[7],v=e[8],p=v*h-d*g,S=d*m-v*f,M=g*f-h*m,b=i*p+r*S+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=p*A,e[1]=(l*g-v*r)*A,e[2]=(d*r-l*h)*A,e[3]=S*A,e[4]=(v*i-l*m)*A,e[5]=(l*f-d*i)*A,e[6]=M*A,e[7]=(r*m-g*i)*A,e[8]=(h*i-r*f)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,h,d){const m=Math.cos(f),g=Math.sin(f);return this.set(r*m,r*g,-r*(m*h+g*d)+h+e,-l*g,l*m,-l*(-g*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(_d.makeScale(e,i)),this}rotate(e){return this.premultiply(_d.makeRotation(-e)),this}translate(e,i){return this.premultiply(_d.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _d=new pe;function BS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Dc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function GE(){const o=Dc("canvas");return o.style.display="block",o}const Rv={};function _l(o){o in Rv||(Rv[o]=!0,console.warn(o))}function VE(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const Cv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XE(){const o={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Xe&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=so(l.r),l.g=so(l.g),l.b=so(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===os?Cc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return _l("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return _l("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[uo]:{primaries:e,whitePoint:r,transfer:Cc,toXYZ:Cv,fromXYZ:wv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:r,transfer:Xe,toXYZ:Cv,fromXYZ:wv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),o}const Ue=XE();function ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function so(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Gr;class kE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Gr===void 0&&(Gr=Dc("canvas")),Gr.width=e.width,Gr.height=e.height;const l=Gr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Gr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Dc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=ba(f[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qE=0;class Zp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=yl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(vd(l[h].image)):f.push(vd(l[h]))}else f=vd(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function vd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?kE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YE=0;const Sd=new k;class $n extends $s{constructor(e=$n.DEFAULT_IMAGE,i=$n.DEFAULT_MAPPING,r=Ws,l=Ws,f=Ki,h=js,d=Pi,m=$i,g=$n.DEFAULT_ANISOTROPY,v=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=yl(),this.name="",this.source=new Zp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Sd).x}get height(){return this.source.getSize(Sd).y}get depth(){return this.source.getSize(Sd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==RS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case op:e.x=e.x-Math.floor(e.x);break;case Ws:e.x=e.x<0?0:1;break;case lp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case op:e.y=e.y-Math.floor(e.y);break;case Ws:e.y=e.y<0?0:1;break;case lp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=RS;$n.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const m=e.elements,g=m[0],v=m[4],p=m[8],S=m[1],M=m[5],b=m[9],A=m[2],x=m[6],y=m[10];if(Math.abs(v-S)<.01&&Math.abs(p-A)<.01&&Math.abs(b-x)<.01){if(Math.abs(v+S)<.1&&Math.abs(p+A)<.1&&Math.abs(b+x)<.1&&Math.abs(g+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(g+1)/2,w=(M+1)/2,F=(y+1)/2,B=(v+S)/4,L=(p+A)/4,q=(b+x)/4;return O>w&&O>F?O<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(O),l=B/r,f=L/r):w>F?w<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(w),r=B/l,f=q/l):F<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(F),r=L/f,l=q/f),this.set(r,l,f,i),this}let P=Math.sqrt((x-b)*(x-b)+(p-A)*(p-A)+(S-v)*(S-v));return Math.abs(P)<.001&&(P=1),this.x=(x-b)/P,this.y=(p-A)/P,this.z=(S-v)/P,this.w=Math.acos((g+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WE extends $s{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new $n(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ki,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Zp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qs extends WE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class FS extends $n{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zi,this.minFilter=zi,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jE extends $n{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zi,this.minFilter=zi,this.wrapR=Ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xl{constructor(e=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ui):Ui.fromBufferAttribute(f,h),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ku.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ku.copy(r.boundingBox)),Ku.applyMatrix4(e.matrixWorld),this.union(Ku)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ol),Qu.subVectors(this.max,ol),Vr.subVectors(e.a,ol),Xr.subVectors(e.b,ol),kr.subVectors(e.c,ol),ts.subVectors(Xr,Vr),es.subVectors(kr,Xr),Bs.subVectors(Vr,kr);let i=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Bs.z,Bs.y,ts.z,0,-ts.x,es.z,0,-es.x,Bs.z,0,-Bs.x,-ts.y,ts.x,0,-es.y,es.x,0,-Bs.y,Bs.x,0];return!yd(i,Vr,Xr,kr,Qu)||(i=[1,0,0,0,1,0,0,0,1],!yd(i,Vr,Xr,kr,Qu))?!1:(Ju.crossVectors(ts,es),i=[Ju.x,Ju.y,Ju.z],yd(i,Vr,Xr,kr,Qu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new k,new k,new k,new k,new k,new k,new k,new k],Ui=new k,Ku=new xl,Vr=new k,Xr=new k,kr=new k,ts=new k,es=new k,Bs=new k,ol=new k,Qu=new k,Ju=new k,Fs=new k;function yd(o,e,i,r,l){for(let f=0,h=o.length-3;f<=h;f+=3){Fs.fromArray(o,f);const d=l.x*Math.abs(Fs.x)+l.y*Math.abs(Fs.y)+l.z*Math.abs(Fs.z),m=e.dot(Fs),g=i.dot(Fs),v=r.dot(Fs);if(Math.max(-Math.max(m,g,v),Math.min(m,g,v))>d)return!1}return!0}const ZE=new xl,ll=new k,xd=new k;class Kp{constructor(e=new k,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ZE.setFromPoints(e).getCenter(r);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ll.subVectors(e,this.center);const i=ll.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ll,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ll.copy(e.center).add(xd)),this.expandByPoint(ll.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sa=new k,Md=new k,$u=new k,ns=new k,Ed=new k,tc=new k,Td=new k;class Qp{constructor(e=new k,i=new k(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Md.copy(e).add(i).multiplyScalar(.5),$u.copy(i).sub(e).normalize(),ns.copy(this.origin).sub(Md);const f=e.distanceTo(i)*.5,h=-this.direction.dot($u),d=ns.dot(this.direction),m=-ns.dot($u),g=ns.lengthSq(),v=Math.abs(1-h*h);let p,S,M,b;if(v>0)if(p=h*m-d,S=h*d-m,b=f*v,p>=0)if(S>=-b)if(S<=b){const A=1/v;p*=A,S*=A,M=p*(p+h*S+2*d)+S*(h*p+S+2*m)+g}else S=f,p=Math.max(0,-(h*S+d)),M=-p*p+S*(S+2*m)+g;else S=-f,p=Math.max(0,-(h*S+d)),M=-p*p+S*(S+2*m)+g;else S<=-b?(p=Math.max(0,-(-h*f+d)),S=p>0?-f:Math.min(Math.max(-f,-m),f),M=-p*p+S*(S+2*m)+g):S<=b?(p=0,S=Math.min(Math.max(-f,-m),f),M=S*(S+2*m)+g):(p=Math.max(0,-(h*f+d)),S=p>0?f:Math.min(Math.max(-f,-m),f),M=-p*p+S*(S+2*m)+g);else S=h>0?-f:f,p=Math.max(0,-(h*S+d)),M=-p*p+S*(S+2*m)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,p),l&&l.copy(Md).addScaledVector($u,S),M}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const r=Sa.dot(this.direction),l=Sa.dot(Sa)-r*r,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,h,d,m;const g=1/this.direction.x,v=1/this.direction.y,p=1/this.direction.z,S=this.origin;return g>=0?(r=(e.min.x-S.x)*g,l=(e.max.x-S.x)*g):(r=(e.max.x-S.x)*g,l=(e.min.x-S.x)*g),v>=0?(f=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(f=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),r>h||f>l||((f>r||isNaN(r))&&(r=f),(h<l||isNaN(l))&&(l=h),p>=0?(d=(e.min.z-S.z)*p,m=(e.max.z-S.z)*p):(d=(e.max.z-S.z)*p,m=(e.min.z-S.z)*p),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,r,l,f){Ed.subVectors(i,e),tc.subVectors(r,e),Td.crossVectors(Ed,tc);let h=this.direction.dot(Td),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ns.subVectors(this.origin,e);const m=d*this.direction.dot(tc.crossVectors(ns,tc));if(m<0)return null;const g=d*this.direction.dot(Ed.cross(ns));if(g<0||m+g>h)return null;const v=-d*ns.dot(Td);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,r,l,f,h,d,m,g,v,p,S,M,b,A,x){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,m,g,v,p,S,M,b,A,x)}set(e,i,r,l,f,h,d,m,g,v,p,S,M,b,A,x){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=f,y[5]=h,y[9]=d,y[13]=m,y[2]=g,y[6]=v,y[10]=p,y[14]=S,y[3]=M,y[7]=b,y[11]=A,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/qr.setFromMatrixColumn(e,0).length(),f=1/qr.setFromMatrixColumn(e,1).length(),h=1/qr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),g=Math.sin(l),v=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const S=h*v,M=h*p,b=d*v,A=d*p;i[0]=m*v,i[4]=-m*p,i[8]=g,i[1]=M+b*g,i[5]=S-A*g,i[9]=-d*m,i[2]=A-S*g,i[6]=b+M*g,i[10]=h*m}else if(e.order==="YXZ"){const S=m*v,M=m*p,b=g*v,A=g*p;i[0]=S+A*d,i[4]=b*d-M,i[8]=h*g,i[1]=h*p,i[5]=h*v,i[9]=-d,i[2]=M*d-b,i[6]=A+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*v,M=m*p,b=g*v,A=g*p;i[0]=S-A*d,i[4]=-h*p,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*v,i[9]=A-S*d,i[2]=-h*g,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*v,M=h*p,b=d*v,A=d*p;i[0]=m*v,i[4]=b*g-M,i[8]=S*g+A,i[1]=m*p,i[5]=A*g+S,i[9]=M*g-b,i[2]=-g,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*g,b=d*m,A=d*g;i[0]=m*v,i[4]=A-S*p,i[8]=b*p+M,i[1]=p,i[5]=h*v,i[9]=-d*v,i[2]=-g*v,i[6]=M*p+b,i[10]=S-A*p}else if(e.order==="XZY"){const S=h*m,M=h*g,b=d*m,A=d*g;i[0]=m*v,i[4]=-p,i[8]=g*v,i[1]=S*p+A,i[5]=h*v,i[9]=M*p-b,i[2]=b*p-M,i[6]=d*v,i[10]=A*p+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KE,e,QE)}lookAt(e,i,r){const l=this.elements;return ui.subVectors(e,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),is.crossVectors(r,ui),is.lengthSq()===0&&(Math.abs(r.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),is.crossVectors(r,ui)),is.normalize(),ec.crossVectors(ui,is),l[0]=is.x,l[4]=ec.x,l[8]=ui.x,l[1]=is.y,l[5]=ec.y,l[9]=ui.y,l[2]=is.z,l[6]=ec.z,l[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[4],m=r[8],g=r[12],v=r[1],p=r[5],S=r[9],M=r[13],b=r[2],A=r[6],x=r[10],y=r[14],P=r[3],O=r[7],w=r[11],F=r[15],B=l[0],L=l[4],q=l[8],D=l[12],C=l[1],V=l[5],at=l[9],ut=l[13],gt=l[2],lt=l[6],j=l[10],st=l[14],K=l[3],_t=l[7],St=l[11],Ht=l[15];return f[0]=h*B+d*C+m*gt+g*K,f[4]=h*L+d*V+m*lt+g*_t,f[8]=h*q+d*at+m*j+g*St,f[12]=h*D+d*ut+m*st+g*Ht,f[1]=v*B+p*C+S*gt+M*K,f[5]=v*L+p*V+S*lt+M*_t,f[9]=v*q+p*at+S*j+M*St,f[13]=v*D+p*ut+S*st+M*Ht,f[2]=b*B+A*C+x*gt+y*K,f[6]=b*L+A*V+x*lt+y*_t,f[10]=b*q+A*at+x*j+y*St,f[14]=b*D+A*ut+x*st+y*Ht,f[3]=P*B+O*C+w*gt+F*K,f[7]=P*L+O*V+w*lt+F*_t,f[11]=P*q+O*at+w*j+F*St,f[15]=P*D+O*ut+w*st+F*Ht,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],h=e[1],d=e[5],m=e[9],g=e[13],v=e[2],p=e[6],S=e[10],M=e[14],b=e[3],A=e[7],x=e[11],y=e[15];return b*(+f*m*p-l*g*p-f*d*S+r*g*S+l*d*M-r*m*M)+A*(+i*m*M-i*g*S+f*h*S-l*h*M+l*g*v-f*m*v)+x*(+i*g*p-i*d*M-f*h*p+r*h*M+f*d*v-r*g*v)+y*(-l*d*v-i*m*p+i*d*S+l*h*p-r*h*S+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],m=e[6],g=e[7],v=e[8],p=e[9],S=e[10],M=e[11],b=e[12],A=e[13],x=e[14],y=e[15],P=p*x*g-A*S*g+A*m*M-d*x*M-p*m*y+d*S*y,O=b*S*g-v*x*g-b*m*M+h*x*M+v*m*y-h*S*y,w=v*A*g-b*p*g+b*d*M-h*A*M-v*d*y+h*p*y,F=b*p*m-v*A*m-b*d*S+h*A*S+v*d*x-h*p*x,B=i*P+r*O+l*w+f*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/B;return e[0]=P*L,e[1]=(A*S*f-p*x*f-A*l*M+r*x*M+p*l*y-r*S*y)*L,e[2]=(d*x*f-A*m*f+A*l*g-r*x*g-d*l*y+r*m*y)*L,e[3]=(p*m*f-d*S*f-p*l*g+r*S*g+d*l*M-r*m*M)*L,e[4]=O*L,e[5]=(v*x*f-b*S*f+b*l*M-i*x*M-v*l*y+i*S*y)*L,e[6]=(b*m*f-h*x*f-b*l*g+i*x*g+h*l*y-i*m*y)*L,e[7]=(h*S*f-v*m*f+v*l*g-i*S*g-h*l*M+i*m*M)*L,e[8]=w*L,e[9]=(b*p*f-v*A*f-b*r*M+i*A*M+v*r*y-i*p*y)*L,e[10]=(h*A*f-b*d*f+b*r*g-i*A*g-h*r*y+i*d*y)*L,e[11]=(v*d*f-h*p*f-v*r*g+i*p*g+h*r*M-i*d*M)*L,e[12]=F*L,e[13]=(v*A*l-b*p*l+b*r*S-i*A*S-v*r*x+i*p*x)*L,e[14]=(b*d*l-h*A*l-b*r*m+i*A*m+h*r*x-i*d*x)*L,e[15]=(h*p*l-v*d*l+v*r*m-i*p*m-h*r*S+i*d*S)*L,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,h=e.x,d=e.y,m=e.z,g=f*h,v=f*d;return this.set(g*h+r,g*d-l*m,g*m+l*d,0,g*d+l*m,v*d+r,v*m-l*h,0,g*m-l*d,v*m+l*h,f*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,h){return this.set(1,r,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,h=i._y,d=i._z,m=i._w,g=f+f,v=h+h,p=d+d,S=f*g,M=f*v,b=f*p,A=h*v,x=h*p,y=d*p,P=m*g,O=m*v,w=m*p,F=r.x,B=r.y,L=r.z;return l[0]=(1-(A+y))*F,l[1]=(M+w)*F,l[2]=(b-O)*F,l[3]=0,l[4]=(M-w)*B,l[5]=(1-(S+y))*B,l[6]=(x+P)*B,l[7]=0,l[8]=(b+O)*L,l[9]=(x-P)*L,l[10]=(1-(S+A))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=qr.set(l[0],l[1],l[2]).length();const h=qr.set(l[4],l[5],l[6]).length(),d=qr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Ni.copy(this);const g=1/f,v=1/h,p=1/d;return Ni.elements[0]*=g,Ni.elements[1]*=g,Ni.elements[2]*=g,Ni.elements[4]*=v,Ni.elements[5]*=v,Ni.elements[6]*=v,Ni.elements[8]*=p,Ni.elements[9]*=p,Ni.elements[10]*=p,i.setFromRotationMatrix(Ni),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,l,f,h,d=Qi,m=!1){const g=this.elements,v=2*f/(i-e),p=2*f/(r-l),S=(i+e)/(i-e),M=(r+l)/(r-l);let b,A;if(m)b=f/(h-f),A=h*f/(h-f);else if(d===Qi)b=-(h+f)/(h-f),A=-2*h*f/(h-f);else if(d===wc)b=-h/(h-f),A=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=S,g[12]=0,g[1]=0,g[5]=p,g[9]=M,g[13]=0,g[2]=0,g[6]=0,g[10]=b,g[14]=A,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,r,l,f,h,d=Qi,m=!1){const g=this.elements,v=2/(i-e),p=2/(r-l),S=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,A;if(m)b=1/(h-f),A=h/(h-f);else if(d===Qi)b=-2/(h-f),A=-(h+f)/(h-f);else if(d===wc)b=-1/(h-f),A=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=0,g[12]=S,g[1]=0,g[5]=p,g[9]=0,g[13]=M,g[2]=0,g[6]=0,g[10]=b,g[14]=A,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const qr=new k,Ni=new en,KE=new k(0,0,0),QE=new k(1,1,1),is=new k,ec=new k,ui=new k,Dv=new en,Uv=new Ks;class ta{constructor(e=0,i=0,r=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],m=l[1],g=l[5],v=l[9],p=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,g),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,g)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(ve(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-p,M),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,g),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Uv.setFromEuler(this),this.setFromQuaternion(Uv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class Jp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JE=0;const Nv=new k,Yr=new Ks,ya=new en,nc=new k,ul=new k,$E=new k,tT=new Ks,Lv=new k(1,0,0),Ov=new k(0,1,0),Pv=new k(0,0,1),zv={type:"added"},eT={type:"removed"},Wr={type:"childadded",child:null},bd={type:"childremoved",child:null};class Un extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new k,i=new ta,r=new Ks,l=new k(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new pe}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Yr.setFromAxisAngle(e,i),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,i){return Yr.setFromAxisAngle(e,i),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Lv,e)}rotateY(e){return this.rotateOnAxis(Ov,e)}rotateZ(e){return this.rotateOnAxis(Pv,e)}translateOnAxis(e,i){return Nv.copy(e).applyQuaternion(this.quaternion),this.position.add(Nv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Lv,e)}translateY(e){return this.translateOnAxis(Ov,e)}translateZ(e){return this.translateOnAxis(Pv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?nc.copy(e):nc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(ul,nc,this.up):ya.lookAt(nc,ul,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Yr.setFromRotationMatrix(ya),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zv),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(eT),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zv),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,e,$E),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,tT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let g=0,v=m.length;g<v;g++){const p=m[g];f(e.shapes,p)}else f(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,g=this.material.length;m<g;m++)d.push(f(e.materials,this.material[m]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(f(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),g=h(e.textures),v=h(e.images),p=h(e.shapes),S=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),g.length>0&&(r.textures=g),v.length>0&&(r.images=v),p.length>0&&(r.shapes=p),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const g in d){const v=d[g];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Un.DEFAULT_UP=new k(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new k,xa=new k,Ad=new k,Ma=new k,jr=new k,Zr=new k,Iv=new k,Rd=new k,Cd=new k,wd=new k,Dd=new rn,Ud=new rn,Nd=new rn;class Oi{constructor(e=new k,i=new k,r=new k){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Li.subVectors(e,i),l.cross(Li);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Li.subVectors(l,i),xa.subVectors(r,i),Ad.subVectors(e,i);const h=Li.dot(Li),d=Li.dot(xa),m=Li.dot(Ad),g=xa.dot(xa),v=xa.dot(Ad),p=h*g-d*d;if(p===0)return f.set(0,0,0),null;const S=1/p,M=(g*m-d*v)*S,b=(h*v-d*m)*S;return f.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(e,i,r,l,f,h,d,m){return this.getBarycoord(e,i,r,l,Ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,Ma.x),m.addScaledVector(h,Ma.y),m.addScaledVector(d,Ma.z),m)}static getInterpolatedAttribute(e,i,r,l,f,h){return Dd.setScalar(0),Ud.setScalar(0),Nd.setScalar(0),Dd.fromBufferAttribute(e,i),Ud.fromBufferAttribute(e,r),Nd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Dd,f.x),h.addScaledVector(Ud,f.y),h.addScaledVector(Nd,f.z),h}static isFrontFacing(e,i,r,l){return Li.subVectors(r,i),xa.subVectors(e,i),Li.cross(xa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Li.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return Oi.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let h,d;jr.subVectors(l,r),Zr.subVectors(f,r),Rd.subVectors(e,r);const m=jr.dot(Rd),g=Zr.dot(Rd);if(m<=0&&g<=0)return i.copy(r);Cd.subVectors(e,l);const v=jr.dot(Cd),p=Zr.dot(Cd);if(v>=0&&p<=v)return i.copy(l);const S=m*p-v*g;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(jr,h);wd.subVectors(e,f);const M=jr.dot(wd),b=Zr.dot(wd);if(b>=0&&M<=b)return i.copy(f);const A=M*g-m*b;if(A<=0&&g>=0&&b<=0)return d=g/(g-b),i.copy(r).addScaledVector(Zr,d);const x=v*b-M*p;if(x<=0&&p-v>=0&&M-b>=0)return Iv.subVectors(f,l),d=(p-v)/(p-v+(M-b)),i.copy(l).addScaledVector(Iv,d);const y=1/(x+A+S);return h=A*y,d=S*y,i.copy(r).addScaledVector(jr,h).addScaledVector(Zr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const HS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},ic={h:0,s:0,l:0};function Ld(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Re{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ue.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ue.workingColorSpace){if(e=FE(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=Ld(h,f,e+1/3),this.g=Ld(h,f,e),this.b=Ld(h,f,e-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(e,i=Mi){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Mi){const r=HS[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Ue.workingToColorSpace(zn.copy(this),e),Math.round(ve(zn.r*255,0,255))*65536+Math.round(ve(zn.g*255,0,255))*256+Math.round(ve(zn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,f=zn.b,h=Math.max(r,l,f),d=Math.min(r,l,f);let m,g;const v=(d+h)/2;if(d===h)m=0,g=0;else{const p=h-d;switch(g=v<=.5?p/(h+d):p/(2-h-d),h){case r:m=(l-f)/p+(l<f?6:0);break;case l:m=(f-r)/p+2;break;case f:m=(r-l)/p+4;break}m/=6}return e.h=m,e.s=g,e.l=v,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Mi){Ue.workingToColorSpace(zn.copy(this),e);const i=zn.r,r=zn.g,l=zn.b;return e!==Mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(as),this.setHSL(as.h+e,as.s+i,as.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(as),e.getHSL(ic);const r=md(as.h,ic.h,i),l=md(as.s,ic.s,i),f=md(as.l,ic.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Re;Re.NAMES=HS;let nT=0;class Ml extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=ao,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Qd,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ev,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(r.blending=this.blending),this.side!==cs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kd&&(r.blendSrc=this.blendSrc),this.blendDst!==Qd&&(r.blendDst=this.blendDst),this.blendEquation!==qs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ev&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const h=[];for(const d in f){const m=f[d];delete m.metadata,h.push(m)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class GS extends Ml{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=AS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new k,ac=new ce;let iT=0;class Ji{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Tv,this.updateRanges=[],this.gpuType=Ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ac.fromBufferAttribute(this,i),ac.applyMatrix3(e),this.setXY(i,ac.x,ac.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=rl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=rl(i,this.array)),i}setX(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=rl(i,this.array)),i}setY(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=rl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=rl(i,this.array)),i}setW(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array),f=Zn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tv&&(e.usage=this.usage),e}}class VS extends Ji{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class XS extends Ji{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Xn extends Ji{constructor(e,i,r){super(new Float32Array(e),i,r)}}let aT=0;const xi=new en,Od=new Un,Kr=new k,ci=new xl,cl=new xl,Tn=new k;class ea extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(BS(e)?XS:VS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new pe().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,r){return xi.makeTranslation(e,i,r),this.applyMatrix4(xi),this}scale(e,i,r){return xi.makeScale(e,i,r),this.applyMatrix4(xi),this}lookAt(e){return Od.lookAt(e),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Xn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];ci.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const r=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];cl.setFromBufferAttribute(d),this.morphTargetsRelative?(Tn.addVectors(ci.min,cl.min),ci.expandByPoint(Tn),Tn.addVectors(ci.max,cl.max),ci.expandByPoint(Tn)):(ci.expandByPoint(cl.min),ci.expandByPoint(cl.max))}ci.getCenter(r);let l=0;for(let f=0,h=e.count;f<h;f++)Tn.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(Tn));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],m=this.morphTargetsRelative;for(let g=0,v=d.count;g<v;g++)Tn.fromBufferAttribute(d,g),m&&(Kr.fromBufferAttribute(e,g),Tn.add(Kr)),l=Math.max(l,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<r.count;q++)d[q]=new k,m[q]=new k;const g=new k,v=new k,p=new k,S=new ce,M=new ce,b=new ce,A=new k,x=new k;function y(q,D,C){g.fromBufferAttribute(r,q),v.fromBufferAttribute(r,D),p.fromBufferAttribute(r,C),S.fromBufferAttribute(f,q),M.fromBufferAttribute(f,D),b.fromBufferAttribute(f,C),v.sub(g),p.sub(g),M.sub(S),b.sub(S);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(A.copy(v).multiplyScalar(b.y).addScaledVector(p,-M.y).multiplyScalar(V),x.copy(p).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(V),d[q].add(A),d[D].add(A),d[C].add(A),m[q].add(x),m[D].add(x),m[C].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let q=0,D=P.length;q<D;++q){const C=P[q],V=C.start,at=C.count;for(let ut=V,gt=V+at;ut<gt;ut+=3)y(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const O=new k,w=new k,F=new k,B=new k;function L(q){F.fromBufferAttribute(l,q),B.copy(F);const D=d[q];O.copy(D),O.sub(F.multiplyScalar(F.dot(D))).normalize(),w.crossVectors(B,D);const V=w.dot(m[q])<0?-1:1;h.setXYZW(q,O.x,O.y,O.z,V)}for(let q=0,D=P.length;q<D;++q){const C=P[q],V=C.start,at=C.count;for(let ut=V,gt=V+at;ut<gt;ut+=3)L(e.getX(ut+0)),L(e.getX(ut+1)),L(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new k,f=new k,h=new k,d=new k,m=new k,g=new k,v=new k,p=new k;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),A=e.getX(S+1),x=e.getX(S+2);l.fromBufferAttribute(i,b),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,x),v.subVectors(h,f),p.subVectors(l,f),v.cross(p),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),g.fromBufferAttribute(r,x),d.add(v),m.add(v),g.add(v),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(x,g.x,g.y,g.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),f.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,f),p.subVectors(l,f),v.cross(p),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Tn.fromBufferAttribute(e,i),Tn.normalize(),e.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(d,m){const g=d.array,v=d.itemSize,p=d.normalized,S=new g.constructor(m.length*v);let M=0,b=0;for(let A=0,x=m.length;A<x;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*v;for(let y=0;y<v;y++)S[b++]=g[M++]}return new Ji(S,v,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ea,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],g=e(m,r);i.setAttribute(d,g)}const f=this.morphAttributes;for(const d in f){const m=[],g=f[d];for(let v=0,p=g.length;v<p;v++){const S=g[v],M=e(S,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const g in m)m[g]!==void 0&&(e[g]=m[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const g=r[m];e.data.attributes[m]=g.toJSON(e.data)}const l={};let f=!1;for(const m in this.morphAttributes){const g=this.morphAttributes[m],v=[];for(let p=0,S=g.length;p<S;p++){const M=g[p];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const g in l){const v=l[g];this.setAttribute(g,v.clone(i))}const f=e.morphAttributes;for(const g in f){const v=[],p=f[g];for(let S=0,M=p.length;S<M;S++)v.push(p[S].clone(i));this.morphAttributes[g]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,v=h.length;g<v;g++){const p=h[g];this.addGroup(p.start,p.count,p.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bv=new en,Hs=new Qp,sc=new Kp,Fv=new k,rc=new k,oc=new k,lc=new k,Pd=new k,uc=new k,Hv=new k,cc=new k;class pn extends Un{constructor(e=new ea,i=new GS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){uc.set(0,0,0);for(let m=0,g=f.length;m<g;m++){const v=d[m],p=f[m];v!==0&&(Pd.fromBufferAttribute(p,e),h?uc.addScaledVector(Pd,v):uc.addScaledVector(Pd.sub(i),v))}i.add(uc)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),sc.copy(r.boundingSphere),sc.applyMatrix4(f),Hs.copy(e.ray).recast(e.near),!(sc.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(sc,Fv)===null||Hs.origin.distanceToSquared(Fv)>(e.far-e.near)**2))&&(Bv.copy(f).invert(),Hs.copy(e.ray).applyMatrix4(Bv),!(r.boundingBox!==null&&Hs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Hs)))}_computeIntersections(e,i,r){let l;const f=this.geometry,h=this.material,d=f.index,m=f.attributes.position,g=f.attributes.uv,v=f.attributes.uv1,p=f.attributes.normal,S=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,A=S.length;b<A;b++){const x=S[b],y=h[x.materialIndex],P=Math.max(x.start,M.start),O=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let w=P,F=O;w<F;w+=3){const B=d.getX(w),L=d.getX(w+1),q=d.getX(w+2);l=fc(this,y,e,r,g,v,p,B,L,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let x=b,y=A;x<y;x+=3){const P=d.getX(x),O=d.getX(x+1),w=d.getX(x+2);l=fc(this,h,e,r,g,v,p,P,O,w),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,A=S.length;b<A;b++){const x=S[b],y=h[x.materialIndex],P=Math.max(x.start,M.start),O=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let w=P,F=O;w<F;w+=3){const B=w,L=w+1,q=w+2;l=fc(this,y,e,r,g,v,p,B,L,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let x=b,y=A;x<y;x+=3){const P=x,O=x+1,w=x+2;l=fc(this,h,e,r,g,v,p,P,O,w),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function sT(o,e,i,r,l,f,h,d){let m;if(e.side===Jn?m=r.intersectTriangle(h,f,l,!0,d):m=r.intersectTriangle(l,f,h,e.side===cs,d),m===null)return null;cc.copy(d),cc.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(cc);return g<i.near||g>i.far?null:{distance:g,point:cc.clone(),object:o}}function fc(o,e,i,r,l,f,h,d,m,g){o.getVertexPosition(d,rc),o.getVertexPosition(m,oc),o.getVertexPosition(g,lc);const v=sT(o,e,i,r,rc,oc,lc,Hv);if(v){const p=new k;Oi.getBarycoord(Hv,rc,oc,lc,p),l&&(v.uv=Oi.getInterpolatedAttribute(l,d,m,g,p,new ce)),f&&(v.uv1=Oi.getInterpolatedAttribute(f,d,m,g,p,new ce)),h&&(v.normal=Oi.getInterpolatedAttribute(h,d,m,g,p,new k),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:g,normal:new k,materialIndex:0};Oi.getNormal(rc,oc,lc,S.normal),v.face=S,v.barycoord=p}return v}class El extends ea{constructor(e=1,i=1,r=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const m=[],g=[],v=[],p=[];let S=0,M=0;b("z","y","x",-1,-1,r,i,e,h,f,0),b("z","y","x",1,-1,r,i,-e,h,f,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,f,4),b("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(m),this.setAttribute("position",new Xn(g,3)),this.setAttribute("normal",new Xn(v,3)),this.setAttribute("uv",new Xn(p,2));function b(A,x,y,P,O,w,F,B,L,q,D){const C=w/L,V=F/q,at=w/2,ut=F/2,gt=B/2,lt=L+1,j=q+1;let st=0,K=0;const _t=new k;for(let St=0;St<j;St++){const Ht=St*V-ut;for(let re=0;re<lt;re++){const be=re*C-at;_t[A]=be*P,_t[x]=Ht*O,_t[y]=gt,g.push(_t.x,_t.y,_t.z),_t[A]=0,_t[x]=0,_t[y]=B>0?1:-1,v.push(_t.x,_t.y,_t.z),p.push(re/L),p.push(1-St/q),st+=1}}for(let St=0;St<q;St++)for(let Ht=0;Ht<L;Ht++){const re=S+Ht+lt*St,be=S+Ht+lt*(St+1),I=S+(Ht+1)+lt*(St+1),ct=S+(Ht+1)+lt*St;m.push(re,be,ct),m.push(be,I,ct),K+=6}d.addGroup(M,K,D),M+=K,S+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Vn(o){const e={};for(let i=0;i<o.length;i++){const r=co(o[i]);for(const l in r)e[l]=r[l]}return e}function rT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function kS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const oT={clone:co,merge:Vn};var lT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fs extends Ml{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lT,this.fragmentShader=uT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=rT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class qS extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new k,Gv=new ce,Vv=new ce;class Ei extends qS{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ip*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ip*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,i){return this.getViewBounds(e,Gv,Vv),i.subVectors(Vv,Gv)}setViewOffset(e,i,r,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ac*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,g=h.fullHeight;f+=h.offsetX*l/m,i-=h.offsetY*r/g,l*=h.width/m,r*=h.height/g}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Qr=-90,Jr=1;class cT extends Un{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Qr,Jr,e,i);l.layers=this.layers,this.add(l);const f=new Ei(Qr,Jr,e,i);f.layers=this.layers,this.add(f);const h=new Ei(Qr,Jr,e,i);h.layers=this.layers,this.add(h);const d=new Ei(Qr,Jr,e,i);d.layers=this.layers,this.add(d);const m=new Ei(Qr,Jr,e,i);m.layers=this.layers,this.add(m);const g=new Ei(Qr,Jr,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,h,d,m]=i;for(const g of i)this.remove(g);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,m,g,v]=this.children,p=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,g),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(p,S,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class YS extends $n{constructor(e=[],i=oo,r,l,f,h,d,m,g,v){super(e,i,r,l,f,h,d,m,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fT extends Qs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new YS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new El(5,5,5),f=new fs({name:"CubemapFromEquirect",uniforms:co(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:ls});f.uniforms.tEquirect.value=i;const h=new pn(l,f),d=i.minFilter;return i.minFilter===js&&(i.minFilter=Ki),new cT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(f)}}class Ti extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hT={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,h=null;const d=this._targetRay,m=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const A of e.hand.values()){const x=i.getJointPose(A,r),y=this._getHandJoint(g,A);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const v=g.joints["index-finger-tip"],p=g.joints["thumb-tip"],S=v.position.distanceTo(p.position),M=.02,b=.005;g.inputState.pinching&&S>M+b?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&S<=M-b&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(hT)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=f!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ti;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class dT extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Id=new k,pT=new k,mT=new pe;class rs{constructor(e=new k(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Id.subVectors(r,i).cross(pT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Id),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||mT.getNormalMatrix(e),l=this.coplanarPoint(Id).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new Kp,gT=new ce(.5,.5),hc=new k;class $p{constructor(e=new rs,i=new rs,r=new rs,l=new rs,f=new rs,h=new rs){this.planes=[e,i,r,l,f,h]}set(e,i,r,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Qi,r=!1){const l=this.planes,f=e.elements,h=f[0],d=f[1],m=f[2],g=f[3],v=f[4],p=f[5],S=f[6],M=f[7],b=f[8],A=f[9],x=f[10],y=f[11],P=f[12],O=f[13],w=f[14],F=f[15];if(l[0].setComponents(g-h,M-v,y-b,F-P).normalize(),l[1].setComponents(g+h,M+v,y+b,F+P).normalize(),l[2].setComponents(g+d,M+p,y+A,F+O).normalize(),l[3].setComponents(g-d,M-p,y-A,F-O).normalize(),r)l[4].setComponents(m,S,x,w).normalize(),l[5].setComponents(g-m,M-S,y-x,F-w).normalize();else if(l[4].setComponents(g-m,M-S,y-x,F-w).normalize(),i===Qi)l[5].setComponents(g+m,M+S,y+x,F+w).normalize();else if(i===wc)l[5].setComponents(m,S,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){Gs.center.set(0,0,0);const i=gT.distanceTo(e.center);return Gs.radius=.7071067811865476+i,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(hc.x=l.normal.x>0?e.max.x:e.min.x,hc.y=l.normal.y>0?e.max.y:e.min.y,hc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class WS extends $n{constructor(e,i,r=Zs,l,f,h,d=zi,m=zi,g,v=ml,p=1){if(v!==ml&&v!==gl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:p};super(S,l,f,h,d,m,v,r,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class jS extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class tm extends ea{constructor(e=1,i=32,r=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:r,thetaLength:l},i=Math.max(3,i);const f=[],h=[],d=[],m=[],g=new k,v=new ce;h.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let p=0,S=3;p<=i;p++,S+=3){const M=r+p/i*l;g.x=e*Math.cos(M),g.y=e*Math.sin(M),h.push(g.x,g.y,g.z),d.push(0,0,1),v.x=(h[S]/e+1)/2,v.y=(h[S+1]/e+1)/2,m.push(v.x,v.y)}for(let p=1;p<=i;p++)f.push(p,p+1,0);this.setIndex(f),this.setAttribute("position",new Xn(h,3)),this.setAttribute("normal",new Xn(d,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tm(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class _T{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),f=0;i.push(0);for(let h=1;h<=e;h++)r=this.getPoint(h/e),f+=r.distanceTo(l),i.push(f),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let l=0;const f=r.length;let h;i?h=i:h=e*r[f-1];let d=0,m=f-1,g;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),g=r[l]-h,g<0)d=l+1;else if(g>0)m=l-1;else{m=l;break}if(l=m,r[l]===h)return l/(f-1);const v=r[l],S=r[l+1]-v,M=(h-v)/S;return(l+M)/(f-1)}getTangent(e,i){let l=e-1e-4,f=e+1e-4;l<0&&(l=0),f>1&&(f=1);const h=this.getPoint(l),d=this.getPoint(f),m=i||(h.isVector2?new ce:new k);return m.copy(d).sub(h).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new k,l=[],f=[],h=[],d=new k,m=new en;for(let M=0;M<=e;M++){const b=M/e;l[M]=this.getTangentAt(b,new k)}f[0]=new k,h[0]=new k;let g=Number.MAX_VALUE;const v=Math.abs(l[0].x),p=Math.abs(l[0].y),S=Math.abs(l[0].z);v<=g&&(g=v,r.set(1,0,0)),p<=g&&(g=p,r.set(0,1,0)),S<=g&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),f[0].crossVectors(l[0],d),h[0].crossVectors(l[0],f[0]);for(let M=1;M<=e;M++){if(f[M]=f[M-1].clone(),h[M]=h[M-1].clone(),d.crossVectors(l[M-1],l[M]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(ve(l[M-1].dot(l[M]),-1,1));f[M].applyMatrix4(m.makeRotationAxis(d,b))}h[M].crossVectors(l[M],f[M])}if(i===!0){let M=Math.acos(ve(f[0].dot(f[e]),-1,1));M/=e,l[0].dot(d.crossVectors(f[0],f[e]))>0&&(M=-M);for(let b=1;b<=e;b++)f[b].applyMatrix4(m.makeRotationAxis(l[b],M*b)),h[b].crossVectors(l[b],f[b])}return{tangents:l,normals:f,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function em(){let o=0,e=0,i=0,r=0;function l(f,h,d,m){o=f,e=d,i=-3*f+3*h-2*d-m,r=2*f-2*h+d+m}return{initCatmullRom:function(f,h,d,m,g){l(h,d,g*(d-f),g*(m-h))},initNonuniformCatmullRom:function(f,h,d,m,g,v,p){let S=(h-f)/g-(d-f)/(g+v)+(d-h)/v,M=(d-h)/v-(m-h)/(v+p)+(m-d)/p;S*=v,M*=v,l(h,d,S,M)},calc:function(f){const h=f*f,d=h*f;return o+e*f+i*h+r*d}}}const dc=new k,Bd=new em,Fd=new em,Hd=new em;class vT extends _T{constructor(e=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=l}getPoint(e,i=new k){const r=i,l=this.points,f=l.length,h=(f-(this.closed?0:1))*e;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/f)+1)*f:m===0&&d===f-1&&(d=f-2,m=1);let g,v;this.closed||d>0?g=l[(d-1)%f]:(dc.subVectors(l[0],l[1]).add(l[0]),g=dc);const p=l[d%f],S=l[(d+1)%f];if(this.closed||d+2<f?v=l[(d+2)%f]:(dc.subVectors(l[f-1],l[f-2]).add(l[f-1]),v=dc),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let b=Math.pow(g.distanceToSquared(p),M),A=Math.pow(p.distanceToSquared(S),M),x=Math.pow(S.distanceToSquared(v),M);A<1e-4&&(A=1),b<1e-4&&(b=A),x<1e-4&&(x=A),Bd.initNonuniformCatmullRom(g.x,p.x,S.x,v.x,b,A,x),Fd.initNonuniformCatmullRom(g.y,p.y,S.y,v.y,b,A,x),Hd.initNonuniformCatmullRom(g.z,p.z,S.z,v.z,b,A,x)}else this.curveType==="catmullrom"&&(Bd.initCatmullRom(g.x,p.x,S.x,v.x,this.tension),Fd.initCatmullRom(g.y,p.y,S.y,v.y,this.tension),Hd.initCatmullRom(g.z,p.z,S.z,v.z,this.tension));return r.set(Bd.calc(m),Fd.calc(m),Hd.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(new k().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Nc extends ea{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),g=d+1,v=m+1,p=e/d,S=i/m,M=[],b=[],A=[],x=[];for(let y=0;y<v;y++){const P=y*S-h;for(let O=0;O<g;O++){const w=O*p-f;b.push(w,-P,0),A.push(0,0,1),x.push(O/d),x.push(1-y/m)}}for(let y=0;y<m;y++)for(let P=0;P<d;P++){const O=P+g*y,w=P+g*(y+1),F=P+1+g*(y+1),B=P+1+g*y;M.push(O,w,B),M.push(w,F,B)}this.setIndex(M),this.setAttribute("position",new Xn(b,3)),this.setAttribute("normal",new Xn(A,3)),this.setAttribute("uv",new Xn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.width,e.height,e.widthSegments,e.heightSegments)}}class fo extends Ml{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zS,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ST extends Ml{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yT extends Ml{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ZS extends Un{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class xT extends ZS{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Gd=new en,Xv=new k,kv=new k;class MT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $p,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Xv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xv),kv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(kv),i.updateMatrixWorld(),Gd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class KS extends qS{constructor(e=-1,i=1,r=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,h=f+g*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ET extends MT{constructor(){super(new KS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class TT extends ZS{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new ET}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bT extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const qv=new en;class AT{constructor(e,i,r=0,l=1/0){this.ray=new Qp(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Jp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return qv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qv),this}intersectObject(e,i=!0,r=[]){return Bp(e,this,r,i),r.sort(Yv),r}intersectObjects(e,i=!0,r=[]){for(let l=0,f=e.length;l<f;l++)Bp(e[l],this,r,i);return r.sort(Yv),r}}function Yv(o,e){return o.distance-e.distance}function Bp(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Bp(f[h],e,i,!0)}}class Wv{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class RT extends $s{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function jv(o,e,i,r){const l=CT(r);switch(i){case NS:return o*e;case OS:return o*e/l.components*l.byteLength;case Yp:return o*e/l.components*l.byteLength;case PS:return o*e*2/l.components*l.byteLength;case Wp:return o*e*2/l.components*l.byteLength;case LS:return o*e*3/l.components*l.byteLength;case Pi:return o*e*4/l.components*l.byteLength;case jp:return o*e*4/l.components*l.byteLength;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tc:case bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cp:case hp:return Math.max(o,16)*Math.max(e,8)/4;case up:case fp:return Math.max(o,8)*Math.max(e,8)/2;case dp:case pp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case mp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _p:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case vp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case yp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case xp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case bp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Cp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Dp:case Up:case Np:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Lp:case Op:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Pp:case zp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function CT(o){switch(o){case $i:case CS:return{byteLength:1,components:1};case dl:case wS:case Sl:return{byteLength:2,components:1};case kp:case qp:return{byteLength:2,components:4};case Zs:case Xp:case Ta:return{byteLength:4,components:1};case DS:case US:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function QS(){let o=null,e=!1,i=null,r=null;function l(f,h){i(f,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function wT(o){const e=new WeakMap;function i(d,m){const g=d.array,v=d.usage,p=g.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,g,v),d.onUploadCallback();let M;if(g instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)M=o.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=o.SHORT;else if(g instanceof Uint32Array)M=o.UNSIGNED_INT;else if(g instanceof Int32Array)M=o.INT;else if(g instanceof Int8Array)M=o.BYTE;else if(g instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:p}}function r(d,m,g){const v=m.array,p=m.updateRanges;if(o.bindBuffer(g,d),p.length===0)o.bufferSubData(g,0,v);else{p.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<p.length;M++){const b=p[S],A=p[M];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++S,p[S]=A)}p.length=S+1;for(let M=0,b=p.length;M<b;M++){const A=p[M];o.bufferSubData(g,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,i(d,m));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,d,m),g.version=d.version}}return{get:l,remove:f,update:h}}var DT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UT=`#ifdef USE_ALPHAHASH
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
#endif`,NT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zT=`#ifdef USE_AOMAP
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
#endif`,IT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BT=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,XT=`#ifdef USE_IRIDESCENCE
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
#endif`,kT=`#ifdef USE_BUMPMAP
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
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$T=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,tb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eb=`vec3 transformedNormal = objectNormal;
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
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lb=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
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
#endif`,db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_b=`#ifdef USE_GRADIENTMAP
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
}`,vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xb=`uniform bool receiveShadow;
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
#endif`,Mb=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Cb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wb=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Ub=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fb=`#if defined( USE_POINTS_UV )
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
#endif`,Hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qb=`#ifdef USE_MORPHTARGETS
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
#endif`,Yb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jb=`#ifdef USE_NORMALMAP
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
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,s1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,p1=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,m1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g1=`#ifdef USE_SKINNING
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
#endif`,_1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v1=`#ifdef USE_SKINNING
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
#endif`,S1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E1=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T1=`#ifdef USE_TRANSMISSION
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D1=`uniform sampler2D t2D;
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
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`#include <common>
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
}`,z1=`#if DEPTH_PACKING == 3200
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
}`,I1=`#define DISTANCE
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
}`,B1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`uniform float scale;
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
}`,V1=`uniform vec3 diffuse;
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
}`,X1=`#include <common>
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
}`,k1=`uniform vec3 diffuse;
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
}`,q1=`#define LAMBERT
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
}`,Y1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,W1=`#define MATCAP
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
}`,j1=`#define MATCAP
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
}`,Z1=`#define NORMAL
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
}`,K1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Q1=`#define PHONG
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
}`,J1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,$1=`#define STANDARD
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
}`,tA=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,eA=`#define TOON
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
}`,nA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,iA=`uniform float size;
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
}`,aA=`uniform vec3 diffuse;
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
}`,sA=`#include <common>
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
}`,rA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,oA=`uniform float rotation;
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
}`,lA=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:DT,alphahash_pars_fragment:UT,alphamap_fragment:NT,alphamap_pars_fragment:LT,alphatest_fragment:OT,alphatest_pars_fragment:PT,aomap_fragment:zT,aomap_pars_fragment:IT,batching_pars_vertex:BT,batching_vertex:FT,begin_vertex:HT,beginnormal_vertex:GT,bsdfs:VT,iridescence_fragment:XT,bumpmap_pars_fragment:kT,clipping_planes_fragment:qT,clipping_planes_pars_fragment:YT,clipping_planes_pars_vertex:WT,clipping_planes_vertex:jT,color_fragment:ZT,color_pars_fragment:KT,color_pars_vertex:QT,color_vertex:JT,common:$T,cube_uv_reflection_fragment:tb,defaultnormal_vertex:eb,displacementmap_pars_vertex:nb,displacementmap_vertex:ib,emissivemap_fragment:ab,emissivemap_pars_fragment:sb,colorspace_fragment:rb,colorspace_pars_fragment:ob,envmap_fragment:lb,envmap_common_pars_fragment:ub,envmap_pars_fragment:cb,envmap_pars_vertex:fb,envmap_physical_pars_fragment:Mb,envmap_vertex:hb,fog_vertex:db,fog_pars_vertex:pb,fog_fragment:mb,fog_pars_fragment:gb,gradientmap_pars_fragment:_b,lightmap_pars_fragment:vb,lights_lambert_fragment:Sb,lights_lambert_pars_fragment:yb,lights_pars_begin:xb,lights_toon_fragment:Eb,lights_toon_pars_fragment:Tb,lights_phong_fragment:bb,lights_phong_pars_fragment:Ab,lights_physical_fragment:Rb,lights_physical_pars_fragment:Cb,lights_fragment_begin:wb,lights_fragment_maps:Db,lights_fragment_end:Ub,logdepthbuf_fragment:Nb,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Ob,logdepthbuf_vertex:Pb,map_fragment:zb,map_pars_fragment:Ib,map_particle_fragment:Bb,map_particle_pars_fragment:Fb,metalnessmap_fragment:Hb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:Vb,morphcolor_vertex:Xb,morphnormal_vertex:kb,morphtarget_pars_vertex:qb,morphtarget_vertex:Yb,normal_fragment_begin:Wb,normal_fragment_maps:jb,normal_pars_fragment:Zb,normal_pars_vertex:Kb,normal_vertex:Qb,normalmap_pars_fragment:Jb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:t1,clearcoat_pars_fragment:e1,iridescence_pars_fragment:n1,opaque_fragment:i1,packing:a1,premultiplied_alpha_fragment:s1,project_vertex:r1,dithering_fragment:o1,dithering_pars_fragment:l1,roughnessmap_fragment:u1,roughnessmap_pars_fragment:c1,shadowmap_pars_fragment:f1,shadowmap_pars_vertex:h1,shadowmap_vertex:d1,shadowmask_pars_fragment:p1,skinbase_vertex:m1,skinning_pars_vertex:g1,skinning_vertex:_1,skinnormal_vertex:v1,specularmap_fragment:S1,specularmap_pars_fragment:y1,tonemapping_fragment:x1,tonemapping_pars_fragment:M1,transmission_fragment:E1,transmission_pars_fragment:T1,uv_pars_fragment:b1,uv_pars_vertex:A1,uv_vertex:R1,worldpos_vertex:C1,background_vert:w1,background_frag:D1,backgroundCube_vert:U1,backgroundCube_frag:N1,cube_vert:L1,cube_frag:O1,depth_vert:P1,depth_frag:z1,distanceRGBA_vert:I1,distanceRGBA_frag:B1,equirect_vert:F1,equirect_frag:H1,linedashed_vert:G1,linedashed_frag:V1,meshbasic_vert:X1,meshbasic_frag:k1,meshlambert_vert:q1,meshlambert_frag:Y1,meshmatcap_vert:W1,meshmatcap_frag:j1,meshnormal_vert:Z1,meshnormal_frag:K1,meshphong_vert:Q1,meshphong_frag:J1,meshphysical_vert:$1,meshphysical_frag:tA,meshtoon_vert:eA,meshtoon_frag:nA,points_vert:iA,points_frag:aA,shadow_vert:sA,shadow_frag:rA,sprite_vert:oA,sprite_frag:lA},zt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Zi={basic:{uniforms:Vn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Vn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Re(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Vn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Vn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Vn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Re(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Vn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Vn([zt.points,zt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Vn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Vn([zt.common,zt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Vn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Vn([zt.sprite,zt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Vn([zt.common,zt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Vn([zt.lights,zt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Zi.physical={uniforms:Vn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const pc={r:0,b:0,g:0},Vs=new ta,uA=new en;function cA(o,e,i,r,l,f,h){const d=new Re(0);let m=f===!0?0:1,g,v,p=null,S=0,M=null;function b(O){let w=O.isScene===!0?O.background:null;return w&&w.isTexture&&(w=(O.backgroundBlurriness>0?i:e).get(w)),w}function A(O){let w=!1;const F=b(O);F===null?y(d,m):F&&F.isColor&&(y(F,1),w=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(O,w){const F=b(w);F&&(F.isCubeTexture||F.mapping===Uc)?(v===void 0&&(v=new pn(new El(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:co(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,L,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Vs.copy(w.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(uA.makeRotationFromEuler(Vs)),v.material.toneMapped=Ue.getTransfer(F.colorSpace)!==Xe,(p!==F||S!==F.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,p=F,S=F.version,M=o.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(g===void 0&&(g=new pn(new Nc(2,2),new fs({name:"BackgroundMaterial",uniforms:co(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=F,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.toneMapped=Ue.getTransfer(F.colorSpace)!==Xe,F.matrixAutoUpdate===!0&&F.updateMatrix(),g.material.uniforms.uvTransform.value.copy(F.matrix),(p!==F||S!==F.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,p=F,S=F.version,M=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null))}function y(O,w){O.getRGB(pc,kS(o)),r.buffers.color.setClear(pc.r,pc.g,pc.b,w,h)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,w=1){d.set(O),m=w,y(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,y(d,m)},render:A,addToRenderList:x,dispose:P}}function fA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let f=l,h=!1;function d(C,V,at,ut,gt){let lt=!1;const j=p(ut,at,V);f!==j&&(f=j,g(f.object)),lt=M(C,ut,at,gt),lt&&b(C,ut,at,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,w(C,V,at,ut),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function g(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function p(C,V,at){const ut=at.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let lt=gt[V.id];lt===void 0&&(lt={},gt[V.id]=lt);let j=lt[ut];return j===void 0&&(j=S(m()),lt[ut]=j),j}function S(C){const V=[],at=[],ut=[];for(let gt=0;gt<i;gt++)V[gt]=0,at[gt]=0,ut[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:at,attributeDivisors:ut,object:C,attributes:{},index:null}}function M(C,V,at,ut){const gt=f.attributes,lt=V.attributes;let j=0;const st=at.getAttributes();for(const K in st)if(st[K].location>=0){const St=gt[K];let Ht=lt[K];if(Ht===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Ht=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Ht=C.instanceColor)),St===void 0||St.attribute!==Ht||Ht&&St.data!==Ht.data)return!0;j++}return f.attributesNum!==j||f.index!==ut}function b(C,V,at,ut){const gt={},lt=V.attributes;let j=0;const st=at.getAttributes();for(const K in st)if(st[K].location>=0){let St=lt[K];St===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(St=C.instanceColor));const Ht={};Ht.attribute=St,St&&St.data&&(Ht.data=St.data),gt[K]=Ht,j++}f.attributes=gt,f.attributesNum=j,f.index=ut}function A(){const C=f.newAttributes;for(let V=0,at=C.length;V<at;V++)C[V]=0}function x(C){y(C,0)}function y(C,V){const at=f.newAttributes,ut=f.enabledAttributes,gt=f.attributeDivisors;at[C]=1,ut[C]===0&&(o.enableVertexAttribArray(C),ut[C]=1),gt[C]!==V&&(o.vertexAttribDivisor(C,V),gt[C]=V)}function P(){const C=f.newAttributes,V=f.enabledAttributes;for(let at=0,ut=V.length;at<ut;at++)V[at]!==C[at]&&(o.disableVertexAttribArray(at),V[at]=0)}function O(C,V,at,ut,gt,lt,j){j===!0?o.vertexAttribIPointer(C,V,at,gt,lt):o.vertexAttribPointer(C,V,at,ut,gt,lt)}function w(C,V,at,ut){A();const gt=ut.attributes,lt=at.getAttributes(),j=V.defaultAttributeValues;for(const st in lt){const K=lt[st];if(K.location>=0){let _t=gt[st];if(_t===void 0&&(st==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),st==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),_t!==void 0){const St=_t.normalized,Ht=_t.itemSize,re=e.get(_t);if(re===void 0)continue;const be=re.buffer,I=re.type,ct=re.bytesPerElement,$=I===o.INT||I===o.UNSIGNED_INT||_t.gpuType===Xp;if(_t.isInterleavedBufferAttribute){const it=_t.data,xt=it.stride,Ut=_t.offset;if(it.isInstancedInterleavedBuffer){for(let At=0;At<K.locationSize;At++)y(K.location+At,it.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let At=0;At<K.locationSize;At++)x(K.location+At);o.bindBuffer(o.ARRAY_BUFFER,be);for(let At=0;At<K.locationSize;At++)O(K.location+At,Ht/K.locationSize,I,St,xt*ct,(Ut+Ht/K.locationSize*At)*ct,$)}else{if(_t.isInstancedBufferAttribute){for(let it=0;it<K.locationSize;it++)y(K.location+it,_t.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let it=0;it<K.locationSize;it++)x(K.location+it);o.bindBuffer(o.ARRAY_BUFFER,be);for(let it=0;it<K.locationSize;it++)O(K.location+it,Ht/K.locationSize,I,St,Ht*ct,Ht/K.locationSize*it*ct,$)}}else if(j!==void 0){const St=j[st];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(K.location,St);break;case 3:o.vertexAttrib3fv(K.location,St);break;case 4:o.vertexAttrib4fv(K.location,St);break;default:o.vertexAttrib1fv(K.location,St)}}}}P()}function F(){q();for(const C in r){const V=r[C];for(const at in V){const ut=V[at];for(const gt in ut)v(ut[gt].object),delete ut[gt];delete V[at]}delete r[C]}}function B(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const at in V){const ut=V[at];for(const gt in ut)v(ut[gt].object),delete ut[gt];delete V[at]}delete r[C.id]}function L(C){for(const V in r){const at=r[V];if(at[C.id]===void 0)continue;const ut=at[C.id];for(const gt in ut)v(ut[gt].object),delete ut[gt];delete at[C.id]}}function q(){D(),h=!0,f!==l&&(f=l,g(f.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:L,initAttributes:A,enableAttribute:x,disableUnusedAttributes:P}}function hA(o,e,i){let r;function l(g){r=g}function f(g,v){o.drawArrays(r,g,v),i.update(v,r,1)}function h(g,v,p){p!==0&&(o.drawArraysInstanced(r,g,v,p),i.update(v,r,p))}function d(g,v,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,v,0,p);let M=0;for(let b=0;b<p;b++)M+=v[b];i.update(M,r,1)}function m(g,v,p,S){if(p===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<g.length;b++)h(g[b],v[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,v,0,S,0,p);let b=0;for(let A=0;A<p;A++)b+=v[A]*S[A];i.update(b,r,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function dA(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(L){return!(L!==Pi&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const q=L===Sl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==$i&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ta&&!q)}function m(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const v=m(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const p=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=b>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:p,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:w,vertexTextures:F,maxSamples:B}}function pA(o){const e=this;let i=null,r=0,l=!1,f=!1;const h=new rs,d=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(p,S){const M=p.length!==0||S||r!==0||l;return l=S,r=p.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,S){i=v(p,S,0)},this.setState=function(p,S,M){const b=p.clippingPlanes,A=p.clipIntersection,x=p.clipShadows,y=o.get(p);if(!l||b===null||b.length===0||f&&!x)f?v(null):g();else{const P=f?0:r,O=P*4;let w=y.clippingState||null;m.value=w,w=v(b,S,O,M);for(let F=0;F!==O;++F)w[F]=i[F];y.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function g(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(p,S,M,b){const A=p!==null?p.length:0;let x=null;if(A!==0){if(x=m.value,b!==!0||x===null){const y=M+A*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(x===null||x.length<y)&&(x=new Float32Array(y));for(let O=0,w=M;O!==A;++O,w+=4)h.copy(p[O]).applyMatrix4(P,d),h.normal.toArray(x,w),x[w+3]=h.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function mA(o){let e=new WeakMap;function i(h,d){return d===sp?h.mapping=oo:d===rp&&(h.mapping=lo),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===sp||d===rp)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const g=new fT(m.height);return g.fromEquirectangularTexture(o,h),e.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const no=4,Zv=[.125,.215,.35,.446,.526,.582],Ys=20,Vd=new KS,Kv=new Re;let Xd=null,kd=0,qd=0,Yd=!1;const ks=(1+Math.sqrt(5))/2,$r=1/ks,Qv=[new k(-ks,$r,0),new k(ks,$r,0),new k(-$r,0,ks),new k($r,0,ks),new k(0,ks,-$r),new k(0,ks,$r),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],gA=new k;class Jv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,f={}){const{size:h=256,position:d=gA}=f;Xd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,kd,qd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,mc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===oo||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:Sl,format:Pi,colorSpace:uo,depthBuffer:!1},l=$v(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$v(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_A(f)),this._blurMaterial=vA(f,e,i)}return l}_compileMaterial(e){const i=new pn(this._lodPlanes[0],e);this._renderer.compile(i,Vd)}_sceneToCubeUV(e,i,r,l,f){const m=new Ei(90,1,i,r),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],p=this._renderer,S=p.autoClear,M=p.toneMapping;p.getClearColor(Kv),p.toneMapping=us,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(l),p.clearDepth(),p.setRenderTarget(null));const A=new GS({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),x=new pn(new El,A);let y=!1;const P=e.background;P?P.isColor&&(A.color.copy(P),e.background=null,y=!0):(A.color.copy(Kv),y=!0);for(let O=0;O<6;O++){const w=O%3;w===0?(m.up.set(0,g[O],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+v[O],f.y,f.z)):w===1?(m.up.set(0,0,g[O]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+v[O],f.z)):(m.up.set(0,g[O],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+v[O]));const F=this._cubeSize;mc(l,w*F,O>2?F:0,F,F),p.setRenderTarget(l),y&&p.render(x,m),p.render(e,m)}x.geometry.dispose(),x.material.dispose(),p.toneMapping=M,p.autoClear=S,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===oo||e.mapping===lo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=eS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tS());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new pn(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const m=this._cubeSize;mc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Vd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=Qv[(l-f-1)%Qv.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",f),this._halfBlur(h,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,h,d){const m=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,p=new pn(this._lodPlanes[l],g),S=g.uniforms,M=this._sizeLods[r]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Ys-1),A=f/b,x=isFinite(f)?1+Math.floor(v*A):Ys;x>Ys&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ys}`);const y=[];let P=0;for(let L=0;L<Ys;++L){const q=L/A,D=Math.exp(-q*q/2);y.push(D),L===0?P+=D:L<x&&(P+=2*D)}for(let L=0;L<y.length;L++)y[L]=y[L]/P;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=y,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=b,S.mipInt.value=O-r;const w=this._sizeLods[l],F=3*w*(l>O-no?l-O+no:0),B=4*(this._cubeSize-w);mc(i,F,B,3*w,2*w),m.setRenderTarget(i),m.render(p,Vd)}}function _A(o){const e=[],i=[],r=[];let l=o;const f=o-no+1+Zv.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-no?m=Zv[h-o+no-1]:h===0&&(m=0),r.push(m);const g=1/(d-2),v=-g,p=1+g,S=[v,v,p,v,p,p,v,v,p,p,v,p],M=6,b=6,A=3,x=2,y=1,P=new Float32Array(A*b*M),O=new Float32Array(x*b*M),w=new Float32Array(y*b*M);for(let B=0;B<M;B++){const L=B%3*2/3-1,q=B>2?0:-1,D=[L,q,0,L+2/3,q,0,L+2/3,q+1,0,L,q,0,L+2/3,q+1,0,L,q+1,0];P.set(D,A*b*B),O.set(S,x*b*B);const C=[B,B,B,B,B,B];w.set(C,y*b*B)}const F=new ea;F.setAttribute("position",new Ji(P,A)),F.setAttribute("uv",new Ji(O,x)),F.setAttribute("faceIndex",new Ji(w,y)),e.push(F),l>no&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function $v(o,e,i){const r=new Qs(o,e,i);return r.texture.mapping=Uc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function mc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function vA(o,e,i){const r=new Float32Array(Ys),l=new k(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:nm(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function tS(){return new fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nm(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function eS(){return new fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function nm(){return`

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
	`}function SA(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,g=m===sp||m===rp,v=m===oo||m===lo;if(g||v){let p=e.get(d);const S=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Jv(o)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new Jv(o)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function l(d){let m=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&m++;return m===g}function f(d){const m=d.target;m.removeEventListener("dispose",f);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function yA(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&_l("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function xA(o,e,i,r){const l={},f=new WeakMap;function h(p){const S=p.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const M=f.get(S);M&&(e.remove(M),f.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(p,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(p){const S=p.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function g(p){const S=[],M=p.index,b=p.attributes.position;let A=0;if(M!==null){const P=M.array;A=M.version;for(let O=0,w=P.length;O<w;O+=3){const F=P[O+0],B=P[O+1],L=P[O+2];S.push(F,B,B,L,L,F)}}else if(b!==void 0){const P=b.array;A=b.version;for(let O=0,w=P.length/3-1;O<w;O+=3){const F=O+0,B=O+1,L=O+2;S.push(F,B,B,L,L,F)}}else return;const x=new(BS(S)?XS:VS)(S,1);x.version=A;const y=f.get(p);y&&e.remove(y),f.set(p,x)}function v(p){const S=f.get(p);if(S){const M=p.index;M!==null&&S.version<M.version&&g(p)}else g(p);return f.get(p)}return{get:d,update:m,getWireframeAttribute:v}}function MA(o,e,i){let r;function l(S){r=S}let f,h;function d(S){f=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(r,M,f,S*h),i.update(M,r,1)}function g(S,M,b){b!==0&&(o.drawElementsInstanced(r,M,f,S*h,b),i.update(M,r,b))}function v(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,f,S,0,b);let x=0;for(let y=0;y<b;y++)x+=M[y];i.update(x,r,1)}function p(S,M,b,A){if(b===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<S.length;y++)g(S[y]/h,M[y],A[y]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,f,S,0,A,0,b);let y=0;for(let P=0;P<b;P++)y+=M[P]*A[P];i.update(y,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=p}function EA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function TA(o,e,i){const r=new WeakMap,l=new rn;function f(h,d,m){const g=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=v!==void 0?v.length:0;let S=r.get(d);if(S===void 0||S.count!==p){let C=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let w=0;b===!0&&(w=1),A===!0&&(w=2),x===!0&&(w=3);let F=d.attributes.position.count*w,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const L=new Float32Array(F*B*4*p),q=new FS(L,F,B,p);q.type=Ta,q.needsUpdate=!0;const D=w*4;for(let V=0;V<p;V++){const at=y[V],ut=P[V],gt=O[V],lt=F*B*4*V;for(let j=0;j<at.count;j++){const st=j*D;b===!0&&(l.fromBufferAttribute(at,j),L[lt+st+0]=l.x,L[lt+st+1]=l.y,L[lt+st+2]=l.z,L[lt+st+3]=0),A===!0&&(l.fromBufferAttribute(ut,j),L[lt+st+4]=l.x,L[lt+st+5]=l.y,L[lt+st+6]=l.z,L[lt+st+7]=0),x===!0&&(l.fromBufferAttribute(gt,j),L[lt+st+8]=l.x,L[lt+st+9]=l.y,L[lt+st+10]=l.z,L[lt+st+11]=gt.itemSize===4?l.w:1)}}S={count:p,texture:q,size:new ce(F,B)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let x=0;x<g.length;x++)b+=g[x];const A=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",g)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function bA(o,e,i,r){let l=new WeakMap;function f(m){const g=r.render.frame,v=m.geometry,p=e.get(m,v);if(l.get(p)!==g&&(e.update(p),l.set(p,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==g&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,g))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==g&&(S.update(),l.set(S,g))}return p}function h(){l=new WeakMap}function d(m){const g=m.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:h}}const JS=new $n,nS=new WS(1,1),$S=new FS,ty=new jE,ey=new YS,iS=[],aS=[],sS=new Float32Array(16),rS=new Float32Array(9),oS=new Float32Array(4);function ho(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=iS[l];if(f===void 0&&(f=new Float32Array(l),iS[l]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Lc(o,e){let i=aS[e];i===void 0&&(i=new Int32Array(e),aS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function AA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function RA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function CA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function wA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function DA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;oS.set(r),o.uniformMatrix2fv(this.addr,!1,oS),yn(i,r)}}function UA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;rS.set(r),o.uniformMatrix3fv(this.addr,!1,rS),yn(i,r)}}function NA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;sS.set(r),o.uniformMatrix4fv(this.addr,!1,sS),yn(i,r)}}function LA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function OA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function PA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function zA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function IA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function BA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function FA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function HA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function GA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(nS.compareFunction=IS,f=nS):f=JS,i.setTexture2D(e||f,l)}function VA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||ty,l)}function XA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||ey,l)}function kA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||$S,l)}function qA(o){switch(o){case 5126:return AA;case 35664:return RA;case 35665:return CA;case 35666:return wA;case 35674:return DA;case 35675:return UA;case 35676:return NA;case 5124:case 35670:return LA;case 35667:case 35671:return OA;case 35668:case 35672:return PA;case 35669:case 35673:return zA;case 5125:return IA;case 36294:return BA;case 36295:return FA;case 36296:return HA;case 35678:case 36198:case 36298:case 36306:case 35682:return GA;case 35679:case 36299:case 36307:return VA;case 35680:case 36300:case 36308:case 36293:return XA;case 36289:case 36303:case 36311:case 36292:return kA}}function YA(o,e){o.uniform1fv(this.addr,e)}function WA(o,e){const i=ho(e,this.size,2);o.uniform2fv(this.addr,i)}function jA(o,e){const i=ho(e,this.size,3);o.uniform3fv(this.addr,i)}function ZA(o,e){const i=ho(e,this.size,4);o.uniform4fv(this.addr,i)}function KA(o,e){const i=ho(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function QA(o,e){const i=ho(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function JA(o,e){const i=ho(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function $A(o,e){o.uniform1iv(this.addr,e)}function tR(o,e){o.uniform2iv(this.addr,e)}function eR(o,e){o.uniform3iv(this.addr,e)}function nR(o,e){o.uniform4iv(this.addr,e)}function iR(o,e){o.uniform1uiv(this.addr,e)}function aR(o,e){o.uniform2uiv(this.addr,e)}function sR(o,e){o.uniform3uiv(this.addr,e)}function rR(o,e){o.uniform4uiv(this.addr,e)}function oR(o,e,i){const r=this.cache,l=e.length,f=Lc(i,l);Sn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||JS,f[h])}function lR(o,e,i){const r=this.cache,l=e.length,f=Lc(i,l);Sn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||ty,f[h])}function uR(o,e,i){const r=this.cache,l=e.length,f=Lc(i,l);Sn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||ey,f[h])}function cR(o,e,i){const r=this.cache,l=e.length,f=Lc(i,l);Sn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||$S,f[h])}function fR(o){switch(o){case 5126:return YA;case 35664:return WA;case 35665:return jA;case 35666:return ZA;case 35674:return KA;case 35675:return QA;case 35676:return JA;case 5124:case 35670:return $A;case 35667:case 35671:return tR;case 35668:case 35672:return eR;case 35669:case 35673:return nR;case 5125:return iR;case 36294:return aR;case 36295:return sR;case 36296:return rR;case 35678:case 36198:case 36298:case 36306:case 35682:return oR;case 35679:case 36299:case 36307:return lR;case 35680:case 36300:case 36308:case 36293:return uR;case 36289:case 36303:case 36311:case 36292:return cR}}class hR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=qA(i.type)}}class dR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=fR(i.type)}}class pR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],r)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function lS(o,e){o.seq.push(e),o.map[e.id]=e}function mR(o,e,i){const r=o.name,l=r.length;for(Wd.lastIndex=0;;){const f=Wd.exec(r),h=Wd.lastIndex;let d=f[1];const m=f[2]==="]",g=f[3];if(m&&(d=d|0),g===void 0||g==="["&&h+2===l){lS(i,g===void 0?new hR(d,o,e):new dR(d,o,e));break}else{let p=i.map[d];p===void 0&&(p=new pR(d),lS(i,p)),i=p}}}class Rc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);mR(f,h,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function uS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const gR=37297;let _R=0;function vR(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const cS=new pe;function SR(o){Ue._getMatrix(cS,Ue.workingColorSpace,o);const e=`mat3( ${cS.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case Cc:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function fS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+vR(o.getShaderSource(e),d)}else return f}function yR(o,e){const i=SR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function xR(o,e){let i;switch(e){case xE:i="Linear";break;case ME:i="Reinhard";break;case EE:i="Cineon";break;case TE:i="ACESFilmic";break;case AE:i="AgX";break;case RE:i="Neutral";break;case bE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const gc=new k;function MR(){Ue.getLuminanceCoefficients(gc);const o=gc.x.toFixed(4),e=gc.y.toFixed(4),i=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ER(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function TR(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function bR(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function hl(o){return o!==""}function hS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fp(o){return o.replace(AR,CR)}const RR=new Map;function CR(o,e){let i=me[e];if(i===void 0){const r=RR.get(e);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Fp(i)}const wR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pS(o){return o.replace(wR,DR)}function DR(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function mS(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===bS?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===tE?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ea&&(e="SHADOWMAP_TYPE_VSM"),e}function NR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case oo:case lo:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function OR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case AS:e="ENVMAP_BLENDING_MULTIPLY";break;case SE:e="ENVMAP_BLENDING_MIX";break;case yE:e="ENVMAP_BLENDING_ADD";break}return e}function PR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function zR(o,e,i,r){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=UR(i),g=NR(i),v=LR(i),p=OR(i),S=PR(i),M=ER(i),b=TR(f),A=l.createProgram();let x,y,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(hl).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(hl).join(`
`),y.length>0&&(y+=`
`)):(x=[mS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),y=[mS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",i.envMap?"#define "+p:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==us?"#define TONE_MAPPING":"",i.toneMapping!==us?me.tonemapping_pars_fragment:"",i.toneMapping!==us?xR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,yR("linearToOutputTexel",i.outputColorSpace),MR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(hl).join(`
`)),h=Fp(h),h=hS(h,i),h=dS(h,i),d=Fp(d),d=hS(d,i),d=dS(d,i),h=pS(h),d=pS(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",i.glslVersion===bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const O=P+x+h,w=P+y+d,F=uS(l,l.VERTEX_SHADER,O),B=uS(l,l.FRAGMENT_SHADER,w);l.attachShader(A,F),l.attachShader(A,B),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function L(V){if(o.debug.checkShaderErrors){const at=l.getProgramInfoLog(A)||"",ut=l.getShaderInfoLog(F)||"",gt=l.getShaderInfoLog(B)||"",lt=at.trim(),j=ut.trim(),st=gt.trim();let K=!0,_t=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,F,B);else{const St=fS(l,F,"vertex"),Ht=fS(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+St+`
`+Ht)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(j===""||st==="")&&(_t=!1);_t&&(V.diagnostics={runnable:K,programLog:lt,vertexShader:{log:j,prefix:x},fragmentShader:{log:st,prefix:y}})}l.deleteShader(F),l.deleteShader(B),q=new Rc(l,A),D=bR(l,A)}let q;this.getUniforms=function(){return q===void 0&&L(this),q};let D;this.getAttributes=function(){return D===void 0&&L(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,gR)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=_R++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=B,this}let IR=0;class BR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new FR(e),i.set(e,r)),r}}class FR{constructor(e){this.id=IR++,this.code=e,this.usedTimes=0}}function HR(o,e,i,r,l,f,h){const d=new Jp,m=new BR,g=new Set,v=[],p=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return g.add(D),D===0?"uv":`uv${D}`}function x(D,C,V,at,ut){const gt=at.fog,lt=ut.geometry,j=D.isMeshStandardMaterial?at.environment:null,st=(D.isMeshStandardMaterial?i:e).get(D.envMap||j),K=st&&st.mapping===Uc?st.image.height:null,_t=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const St=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ht=St!==void 0?St.length:0;let re=0;lt.morphAttributes.position!==void 0&&(re=1),lt.morphAttributes.normal!==void 0&&(re=2),lt.morphAttributes.color!==void 0&&(re=3);let be,I,ct,$;if(_t){const Me=Zi[_t];be=Me.vertexShader,I=Me.fragmentShader}else be=D.vertexShader,I=D.fragmentShader,m.update(D),ct=m.getVertexShaderID(D),$=m.getFragmentShaderID(D);const it=o.getRenderTarget(),xt=o.state.buffers.depth.getReversed(),Ut=ut.isInstancedMesh===!0,At=ut.isBatchedMesh===!0,Mt=!!D.map,qt=!!D.matcap,z=!!st,He=!!D.aoMap,se=!!D.lightMap,Qt=!!D.bumpMap,Nt=!!D.normalMap,ie=!!D.displacementMap,Bt=!!D.emissiveMap,oe=!!D.metalnessMap,qe=!!D.roughnessMap,We=D.anisotropy>0,U=D.clearcoat>0,T=D.dispersion>0,et=D.iridescence>0,dt=D.sheen>0,vt=D.transmission>0,ft=We&&!!D.anisotropyMap,Vt=U&&!!D.clearcoatMap,Rt=U&&!!D.clearcoatNormalMap,Wt=U&&!!D.clearcoatRoughnessMap,Zt=et&&!!D.iridescenceMap,Tt=et&&!!D.iridescenceThicknessMap,Lt=dt&&!!D.sheenColorMap,ne=dt&&!!D.sheenRoughnessMap,jt=!!D.specularMap,Ot=!!D.specularColorMap,fe=!!D.specularIntensityMap,G=vt&&!!D.transmissionMap,bt=vt&&!!D.thicknessMap,wt=!!D.gradientMap,Gt=!!D.alphaMap,yt=D.alphaTest>0,mt=!!D.alphaHash,Yt=!!D.extensions;let ue=us;D.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ge={shaderID:_t,shaderType:D.type,shaderName:D.name,vertexShader:be,fragmentShader:I,defines:D.defines,customVertexShaderID:ct,customFragmentShaderID:$,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:At,batchingColor:At&&ut._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&ut.instanceColor!==null,instancingMorph:Ut&&ut.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:it===null?o.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:uo,alphaToCoverage:!!D.alphaToCoverage,map:Mt,matcap:qt,envMap:z,envMapMode:z&&st.mapping,envMapCubeUVHeight:K,aoMap:He,lightMap:se,bumpMap:Qt,normalMap:Nt,displacementMap:S&&ie,emissiveMap:Bt,normalMapObjectSpace:Nt&&D.normalMapType===UE,normalMapTangentSpace:Nt&&D.normalMapType===zS,metalnessMap:oe,roughnessMap:qe,anisotropy:We,anisotropyMap:ft,clearcoat:U,clearcoatMap:Vt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:et,iridescenceMap:Zt,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:Lt,sheenRoughnessMap:ne,specularMap:jt,specularColorMap:Ot,specularIntensityMap:fe,transmission:vt,transmissionMap:G,thicknessMap:bt,gradientMap:wt,opaque:D.transparent===!1&&D.blending===ao&&D.alphaToCoverage===!1,alphaMap:Gt,alphaTest:yt,alphaHash:mt,combine:D.combine,mapUv:Mt&&A(D.map.channel),aoMapUv:He&&A(D.aoMap.channel),lightMapUv:se&&A(D.lightMap.channel),bumpMapUv:Qt&&A(D.bumpMap.channel),normalMapUv:Nt&&A(D.normalMap.channel),displacementMapUv:ie&&A(D.displacementMap.channel),emissiveMapUv:Bt&&A(D.emissiveMap.channel),metalnessMapUv:oe&&A(D.metalnessMap.channel),roughnessMapUv:qe&&A(D.roughnessMap.channel),anisotropyMapUv:ft&&A(D.anisotropyMap.channel),clearcoatMapUv:Vt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:ne&&A(D.sheenRoughnessMap.channel),specularMapUv:jt&&A(D.specularMap.channel),specularColorMapUv:Ot&&A(D.specularColorMap.channel),specularIntensityMapUv:fe&&A(D.specularIntensityMap.channel),transmissionMapUv:G&&A(D.transmissionMap.channel),thicknessMapUv:bt&&A(D.thicknessMap.channel),alphaMapUv:Gt&&A(D.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Nt||We),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!lt.attributes.uv&&(Mt||Gt),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xt,skinning:ut.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:Mt&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===Xe,decodeVideoTextureEmissive:Bt&&D.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(D.emissiveMap.colorSpace)===Xe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Qn,flipSided:D.side===Jn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Yt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&D.extensions.multiDraw===!0||At)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ge.vertexUv1s=g.has(1),Ge.vertexUv2s=g.has(2),Ge.vertexUv3s=g.has(3),g.clear(),Ge}function y(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(P(C,D),O(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function P(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function O(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=b[D.type];let V;if(C){const at=Zi[C];V=oT.clone(at.uniforms)}else V=D.uniforms;return V}function F(D,C){let V;for(let at=0,ut=v.length;at<ut;at++){const gt=v[at];if(gt.cacheKey===C){V=gt,++V.usedTimes;break}}return V===void 0&&(V=new zR(o,C,D,f),v.push(V)),V}function B(D){if(--D.usedTimes===0){const C=v.indexOf(D);v[C]=v[v.length-1],v.pop(),D.destroy()}}function L(D){m.remove(D)}function q(){m.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:w,acquireProgram:F,releaseProgram:B,releaseShaderCache:L,programs:v,dispose:q}}function GR(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function VR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function gS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function _S(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function h(p,S,M,b,A,x){let y=o[e];return y===void 0?(y={id:p.id,object:p,geometry:S,material:M,groupOrder:b,renderOrder:p.renderOrder,z:A,group:x},o[e]=y):(y.id=p.id,y.object=p,y.geometry=S,y.material=M,y.groupOrder=b,y.renderOrder=p.renderOrder,y.z=A,y.group=x),e++,y}function d(p,S,M,b,A,x){const y=h(p,S,M,b,A,x);M.transmission>0?r.push(y):M.transparent===!0?l.push(y):i.push(y)}function m(p,S,M,b,A,x){const y=h(p,S,M,b,A,x);M.transmission>0?r.unshift(y):M.transparent===!0?l.unshift(y):i.unshift(y)}function g(p,S){i.length>1&&i.sort(p||VR),r.length>1&&r.sort(S||gS),l.length>1&&l.sort(S||gS)}function v(){for(let p=e,S=o.length;p<S;p++){const M=o[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:d,unshift:m,finish:v,sort:g}}function XR(){let o=new WeakMap;function e(r,l){const f=o.get(r);let h;return f===void 0?(h=new _S,o.set(r,[h])):l>=f.length?(h=new _S,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function kR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new k,color:new Re};break;case"SpotLight":i={position:new k,direction:new k,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=i,i}}}function qR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let YR=0;function WR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function jR(o){const e=new kR,i=qR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new k);const l=new k,f=new en,h=new en;function d(g){let v=0,p=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,b=0,A=0,x=0,y=0,P=0,O=0,w=0,F=0,B=0,L=0;g.sort(WR);for(let D=0,C=g.length;D<C;D++){const V=g[D],at=V.color,ut=V.intensity,gt=V.distance,lt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=at.r*ut,p+=at.g*ut,S+=at.b*ut;else if(V.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(V.sh.coefficients[j],ut);L++}else if(V.isDirectionalLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const st=V.shadow,K=i.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,r.directionalShadow[M]=K,r.directionalShadowMap[M]=lt,r.directionalShadowMatrix[M]=V.shadow.matrix,P++}r.directional[M]=j,M++}else if(V.isSpotLight){const j=e.get(V);j.position.setFromMatrixPosition(V.matrixWorld),j.color.copy(at).multiplyScalar(ut),j.distance=gt,j.coneCos=Math.cos(V.angle),j.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),j.decay=V.decay,r.spot[A]=j;const st=V.shadow;if(V.map&&(r.spotLightMap[F]=V.map,F++,st.updateMatrices(V),V.castShadow&&B++),r.spotLightMatrix[A]=st.matrix,V.castShadow){const K=i.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,r.spotShadow[A]=K,r.spotShadowMap[A]=lt,w++}A++}else if(V.isRectAreaLight){const j=e.get(V);j.color.copy(at).multiplyScalar(ut),j.halfWidth.set(V.width*.5,0,0),j.halfHeight.set(0,V.height*.5,0),r.rectArea[x]=j,x++}else if(V.isPointLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity),j.distance=V.distance,j.decay=V.decay,V.castShadow){const st=V.shadow,K=i.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,K.shadowCameraNear=st.camera.near,K.shadowCameraFar=st.camera.far,r.pointShadow[b]=K,r.pointShadowMap[b]=lt,r.pointShadowMatrix[b]=V.shadow.matrix,O++}r.point[b]=j,b++}else if(V.isHemisphereLight){const j=e.get(V);j.skyColor.copy(V.color).multiplyScalar(ut),j.groundColor.copy(V.groundColor).multiplyScalar(ut),r.hemi[y]=j,y++}}x>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=zt.LTC_FLOAT_1,r.rectAreaLTC2=zt.LTC_FLOAT_2):(r.rectAreaLTC1=zt.LTC_HALF_1,r.rectAreaLTC2=zt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=p,r.ambient[2]=S;const q=r.hash;(q.directionalLength!==M||q.pointLength!==b||q.spotLength!==A||q.rectAreaLength!==x||q.hemiLength!==y||q.numDirectionalShadows!==P||q.numPointShadows!==O||q.numSpotShadows!==w||q.numSpotMaps!==F||q.numLightProbes!==L)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=x,r.point.length=b,r.hemi.length=y,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=w+F-B,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=L,q.directionalLength=M,q.pointLength=b,q.spotLength=A,q.rectAreaLength=x,q.hemiLength=y,q.numDirectionalShadows=P,q.numPointShadows=O,q.numSpotShadows=w,q.numSpotMaps=F,q.numLightProbes=L,r.version=YR++)}function m(g,v){let p=0,S=0,M=0,b=0,A=0;const x=v.matrixWorldInverse;for(let y=0,P=g.length;y<P;y++){const O=g[y];if(O.isDirectionalLight){const w=r.directional[p];w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(x),p++}else if(O.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(x),M++}else if(O.isRectAreaLight){const w=r.rectArea[b];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(x),h.identity(),f.copy(O.matrixWorld),f.premultiply(x),h.extractRotation(f),w.halfWidth.set(O.width*.5,0,0),w.halfHeight.set(0,O.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const w=r.point[S];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(x),S++}else if(O.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(O.matrixWorld),w.direction.transformDirection(x),A++}}}return{setup:d,setupView:m,state:r}}function vS(o){const e=new jR(o),i=[],r=[];function l(v){g.camera=v,i.length=0,r.length=0}function f(v){i.push(v)}function h(v){r.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const g={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:m,pushLight:f,pushShadow:h}}function ZR(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new vS(o),e.set(l,[d])):f>=h.length?(d=new vS(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const KR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JR(o,e,i){let r=new $p;const l=new ce,f=new ce,h=new rn,d=new ST({depthPacking:DE}),m=new yT,g={},v=i.maxTextureSize,p={[cs]:Jn,[Jn]:cs,[Qn]:Qn},S=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:KR,fragmentShader:QR}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new ea;b.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new pn(b,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bS;let y=this.type;this.render=function(B,L,q){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),at=o.state;at.setBlending(ls),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ut=y!==Ea&&this.type===Ea,gt=y===Ea&&this.type!==Ea;for(let lt=0,j=B.length;lt<j;lt++){const st=B[lt],K=st.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const _t=K.getFrameExtents();if(l.multiply(_t),f.copy(K.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(f.x=Math.floor(v/_t.x),l.x=f.x*_t.x,K.mapSize.x=f.x),l.y>v&&(f.y=Math.floor(v/_t.y),l.y=f.y*_t.y,K.mapSize.y=f.y)),K.map===null||ut===!0||gt===!0){const Ht=this.type!==Ea?{minFilter:zi,magFilter:zi}:{};K.map!==null&&K.map.dispose(),K.map=new Qs(l.x,l.y,Ht),K.map.texture.name=st.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const St=K.getViewportCount();for(let Ht=0;Ht<St;Ht++){const re=K.getViewport(Ht);h.set(f.x*re.x,f.y*re.y,f.x*re.z,f.y*re.w),at.viewport(h),K.updateMatrices(st,Ht),r=K.getFrustum(),w(L,q,K.camera,st,this.type)}K.isPointLightShadow!==!0&&this.type===Ea&&P(K,q),K.needsUpdate=!1}y=this.type,x.needsUpdate=!1,o.setRenderTarget(D,C,V)};function P(B,L){const q=e.update(A);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Qs(l.x,l.y)),S.uniforms.shadow_pass.value=B.map.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(L,null,q,S,A,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(L,null,q,M,A,null)}function O(B,L,q,D){let C=null;const V=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)C=V;else if(C=q.isPointLight===!0?m:d,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const at=C.uuid,ut=L.uuid;let gt=g[at];gt===void 0&&(gt={},g[at]=gt);let lt=gt[ut];lt===void 0&&(lt=C.clone(),gt[ut]=lt,L.addEventListener("dispose",F)),C=lt}if(C.visible=L.visible,C.wireframe=L.wireframe,D===Ea?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:p[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const at=o.properties.get(C);at.light=q}return C}function w(B,L,q,D,C){if(B.visible===!1)return;if(B.layers.test(L.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Ea)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const ut=e.update(B),gt=B.material;if(Array.isArray(gt)){const lt=ut.groups;for(let j=0,st=lt.length;j<st;j++){const K=lt[j],_t=gt[K.materialIndex];if(_t&&_t.visible){const St=O(B,_t,D,C);B.onBeforeShadow(o,B,L,q,ut,St,K),o.renderBufferDirect(q,null,ut,St,B,K),B.onAfterShadow(o,B,L,q,ut,St,K)}}}else if(gt.visible){const lt=O(B,gt,D,C);B.onBeforeShadow(o,B,L,q,ut,lt,null),o.renderBufferDirect(q,null,ut,lt,B,null),B.onAfterShadow(o,B,L,q,ut,lt,null)}}const at=B.children;for(let ut=0,gt=at.length;ut<gt;ut++)w(at[ut],L,q,D,C)}function F(B){B.target.removeEventListener("dispose",F);for(const q in g){const D=g[q],C=B.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const $R={[Jd]:$d,[tp]:ip,[ep]:ap,[ro]:np,[$d]:Jd,[ip]:tp,[ap]:ep,[np]:ro};function tC(o,e){function i(){let G=!1;const bt=new rn;let wt=null;const Gt=new rn(0,0,0,0);return{setMask:function(yt){wt!==yt&&!G&&(o.colorMask(yt,yt,yt,yt),wt=yt)},setLocked:function(yt){G=yt},setClear:function(yt,mt,Yt,ue,Ge){Ge===!0&&(yt*=ue,mt*=ue,Yt*=ue),bt.set(yt,mt,Yt,ue),Gt.equals(bt)===!1&&(o.clearColor(yt,mt,Yt,ue),Gt.copy(bt))},reset:function(){G=!1,wt=null,Gt.set(-1,0,0,0)}}}function r(){let G=!1,bt=!1,wt=null,Gt=null,yt=null;return{setReversed:function(mt){if(bt!==mt){const Yt=e.get("EXT_clip_control");mt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),bt=mt;const ue=yt;yt=null,this.setClear(ue)}},getReversed:function(){return bt},setTest:function(mt){mt?it(o.DEPTH_TEST):xt(o.DEPTH_TEST)},setMask:function(mt){wt!==mt&&!G&&(o.depthMask(mt),wt=mt)},setFunc:function(mt){if(bt&&(mt=$R[mt]),Gt!==mt){switch(mt){case Jd:o.depthFunc(o.NEVER);break;case $d:o.depthFunc(o.ALWAYS);break;case tp:o.depthFunc(o.LESS);break;case ro:o.depthFunc(o.LEQUAL);break;case ep:o.depthFunc(o.EQUAL);break;case np:o.depthFunc(o.GEQUAL);break;case ip:o.depthFunc(o.GREATER);break;case ap:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Gt=mt}},setLocked:function(mt){G=mt},setClear:function(mt){yt!==mt&&(bt&&(mt=1-mt),o.clearDepth(mt),yt=mt)},reset:function(){G=!1,wt=null,Gt=null,yt=null,bt=!1}}}function l(){let G=!1,bt=null,wt=null,Gt=null,yt=null,mt=null,Yt=null,ue=null,Ge=null;return{setTest:function(Me){G||(Me?it(o.STENCIL_TEST):xt(o.STENCIL_TEST))},setMask:function(Me){bt!==Me&&!G&&(o.stencilMask(Me),bt=Me)},setFunc:function(Me,$e,mn){(wt!==Me||Gt!==$e||yt!==mn)&&(o.stencilFunc(Me,$e,mn),wt=Me,Gt=$e,yt=mn)},setOp:function(Me,$e,mn){(mt!==Me||Yt!==$e||ue!==mn)&&(o.stencilOp(Me,$e,mn),mt=Me,Yt=$e,ue=mn)},setLocked:function(Me){G=Me},setClear:function(Me){Ge!==Me&&(o.clearStencil(Me),Ge=Me)},reset:function(){G=!1,bt=null,wt=null,Gt=null,yt=null,mt=null,Yt=null,ue=null,Ge=null}}}const f=new i,h=new r,d=new l,m=new WeakMap,g=new WeakMap;let v={},p={},S=new WeakMap,M=[],b=null,A=!1,x=null,y=null,P=null,O=null,w=null,F=null,B=null,L=new Re(0,0,0),q=0,D=!1,C=null,V=null,at=null,ut=null,gt=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,st=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=st>=1):K.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=st>=2);let _t=null,St={};const Ht=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),be=new rn().fromArray(Ht),I=new rn().fromArray(re);function ct(G,bt,wt,Gt){const yt=new Uint8Array(4),mt=o.createTexture();o.bindTexture(G,mt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Yt=0;Yt<wt;Yt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Gt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(bt+Yt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return mt}const $={};$[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),it(o.DEPTH_TEST),h.setFunc(ro),Qt(!1),Nt(Sv),it(o.CULL_FACE),He(ls);function it(G){v[G]!==!0&&(o.enable(G),v[G]=!0)}function xt(G){v[G]!==!1&&(o.disable(G),v[G]=!1)}function Ut(G,bt){return p[G]!==bt?(o.bindFramebuffer(G,bt),p[G]=bt,G===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=bt),G===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function At(G,bt){let wt=M,Gt=!1;if(G){wt=S.get(bt),wt===void 0&&(wt=[],S.set(bt,wt));const yt=G.textures;if(wt.length!==yt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let mt=0,Yt=yt.length;mt<Yt;mt++)wt[mt]=o.COLOR_ATTACHMENT0+mt;wt.length=yt.length,Gt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Gt=!0);Gt&&o.drawBuffers(wt)}function Mt(G){return b!==G?(o.useProgram(G),b=G,!0):!1}const qt={[qs]:o.FUNC_ADD,[nE]:o.FUNC_SUBTRACT,[iE]:o.FUNC_REVERSE_SUBTRACT};qt[aE]=o.MIN,qt[sE]=o.MAX;const z={[rE]:o.ZERO,[oE]:o.ONE,[lE]:o.SRC_COLOR,[Kd]:o.SRC_ALPHA,[pE]:o.SRC_ALPHA_SATURATE,[hE]:o.DST_COLOR,[cE]:o.DST_ALPHA,[uE]:o.ONE_MINUS_SRC_COLOR,[Qd]:o.ONE_MINUS_SRC_ALPHA,[dE]:o.ONE_MINUS_DST_COLOR,[fE]:o.ONE_MINUS_DST_ALPHA,[mE]:o.CONSTANT_COLOR,[gE]:o.ONE_MINUS_CONSTANT_COLOR,[_E]:o.CONSTANT_ALPHA,[vE]:o.ONE_MINUS_CONSTANT_ALPHA};function He(G,bt,wt,Gt,yt,mt,Yt,ue,Ge,Me){if(G===ls){A===!0&&(xt(o.BLEND),A=!1);return}if(A===!1&&(it(o.BLEND),A=!0),G!==eE){if(G!==x||Me!==D){if((y!==qs||w!==qs)&&(o.blendEquation(o.FUNC_ADD),y=qs,w=qs),Me)switch(G){case ao:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yv:o.blendFunc(o.ONE,o.ONE);break;case xv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Mv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ao:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case xv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}P=null,O=null,F=null,B=null,L.set(0,0,0),q=0,x=G,D=Me}return}yt=yt||bt,mt=mt||wt,Yt=Yt||Gt,(bt!==y||yt!==w)&&(o.blendEquationSeparate(qt[bt],qt[yt]),y=bt,w=yt),(wt!==P||Gt!==O||mt!==F||Yt!==B)&&(o.blendFuncSeparate(z[wt],z[Gt],z[mt],z[Yt]),P=wt,O=Gt,F=mt,B=Yt),(ue.equals(L)===!1||Ge!==q)&&(o.blendColor(ue.r,ue.g,ue.b,Ge),L.copy(ue),q=Ge),x=G,D=!1}function se(G,bt){G.side===Qn?xt(o.CULL_FACE):it(o.CULL_FACE);let wt=G.side===Jn;bt&&(wt=!wt),Qt(wt),G.blending===ao&&G.transparent===!1?He(ls):He(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),f.setMask(G.colorWrite);const Gt=G.stencilWrite;d.setTest(Gt),Gt&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Bt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?it(o.SAMPLE_ALPHA_TO_COVERAGE):xt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(G){C!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),C=G)}function Nt(G){G!==JM?(it(o.CULL_FACE),G!==V&&(G===Sv?o.cullFace(o.BACK):G===$M?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):xt(o.CULL_FACE),V=G}function ie(G){G!==at&&(j&&o.lineWidth(G),at=G)}function Bt(G,bt,wt){G?(it(o.POLYGON_OFFSET_FILL),(ut!==bt||gt!==wt)&&(o.polygonOffset(bt,wt),ut=bt,gt=wt)):xt(o.POLYGON_OFFSET_FILL)}function oe(G){G?it(o.SCISSOR_TEST):xt(o.SCISSOR_TEST)}function qe(G){G===void 0&&(G=o.TEXTURE0+lt-1),_t!==G&&(o.activeTexture(G),_t=G)}function We(G,bt,wt){wt===void 0&&(_t===null?wt=o.TEXTURE0+lt-1:wt=_t);let Gt=St[wt];Gt===void 0&&(Gt={type:void 0,texture:void 0},St[wt]=Gt),(Gt.type!==G||Gt.texture!==bt)&&(_t!==wt&&(o.activeTexture(wt),_t=wt),o.bindTexture(G,bt||$[G]),Gt.type=G,Gt.texture=bt)}function U(){const G=St[_t];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Vt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Wt(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Zt(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Lt(G){be.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),be.copy(G))}function ne(G){I.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),I.copy(G))}function jt(G,bt){let wt=g.get(bt);wt===void 0&&(wt=new WeakMap,g.set(bt,wt));let Gt=wt.get(G);Gt===void 0&&(Gt=o.getUniformBlockIndex(bt,G.name),wt.set(G,Gt))}function Ot(G,bt){const Gt=g.get(bt).get(G);m.get(bt)!==Gt&&(o.uniformBlockBinding(bt,Gt,G.__bindingPointIndex),m.set(bt,Gt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},_t=null,St={},p={},S=new WeakMap,M=[],b=null,A=!1,x=null,y=null,P=null,O=null,w=null,F=null,B=null,L=new Re(0,0,0),q=0,D=!1,C=null,V=null,at=null,ut=null,gt=null,be.set(0,0,o.canvas.width,o.canvas.height),I.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:it,disable:xt,bindFramebuffer:Ut,drawBuffers:At,useProgram:Mt,setBlending:He,setMaterial:se,setFlipSided:Qt,setCullFace:Nt,setLineWidth:ie,setPolygonOffset:Bt,setScissorTest:oe,activeTexture:qe,bindTexture:We,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:et,texImage2D:Zt,texImage3D:Tt,updateUBOMapping:jt,uniformBlockBinding:Ot,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:dt,texSubImage3D:vt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Vt,scissor:Lt,viewport:ne,reset:fe}}function eC(o,e,i,r,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ce,v=new WeakMap;let p;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):Dc("canvas")}function A(U,T,et){let dt=1;const vt=We(U);if((vt.width>et||vt.height>et)&&(dt=et/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ft=Math.floor(dt*vt.width),Vt=Math.floor(dt*vt.height);p===void 0&&(p=b(ft,Vt));const Rt=T?b(ft,Vt):p;return Rt.width=ft,Rt.height=Vt,Rt.getContext("2d").drawImage(U,0,0,ft,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Vt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function x(U){return U.generateMipmaps}function y(U){o.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,T,et,dt,vt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ft=T;if(T===o.RED&&(et===o.FLOAT&&(ft=o.R32F),et===o.HALF_FLOAT&&(ft=o.R16F),et===o.UNSIGNED_BYTE&&(ft=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.R8UI),et===o.UNSIGNED_SHORT&&(ft=o.R16UI),et===o.UNSIGNED_INT&&(ft=o.R32UI),et===o.BYTE&&(ft=o.R8I),et===o.SHORT&&(ft=o.R16I),et===o.INT&&(ft=o.R32I)),T===o.RG&&(et===o.FLOAT&&(ft=o.RG32F),et===o.HALF_FLOAT&&(ft=o.RG16F),et===o.UNSIGNED_BYTE&&(ft=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RG8UI),et===o.UNSIGNED_SHORT&&(ft=o.RG16UI),et===o.UNSIGNED_INT&&(ft=o.RG32UI),et===o.BYTE&&(ft=o.RG8I),et===o.SHORT&&(ft=o.RG16I),et===o.INT&&(ft=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),et===o.UNSIGNED_INT&&(ft=o.RGB32UI),et===o.BYTE&&(ft=o.RGB8I),et===o.SHORT&&(ft=o.RGB16I),et===o.INT&&(ft=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),et===o.UNSIGNED_INT&&(ft=o.RGBA32UI),et===o.BYTE&&(ft=o.RGBA8I),et===o.SHORT&&(ft=o.RGBA16I),et===o.INT&&(ft=o.RGBA32I)),T===o.RGB&&(et===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),T===o.RGBA){const Vt=vt?Cc:Ue.getTransfer(dt);et===o.FLOAT&&(ft=o.RGBA32F),et===o.HALF_FLOAT&&(ft=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ft=Vt===Xe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function w(U,T){let et;return U?T===null||T===Zs||T===pl?et=o.DEPTH24_STENCIL8:T===Ta?et=o.DEPTH32F_STENCIL8:T===dl&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Zs||T===pl?et=o.DEPTH_COMPONENT24:T===Ta?et=o.DEPTH_COMPONENT32F:T===dl&&(et=o.DEPTH_COMPONENT16),et}function F(U,T){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==zi&&U.minFilter!==Ki?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function B(U){const T=U.target;T.removeEventListener("dispose",B),q(T),T.isVideoTexture&&v.delete(T)}function L(U){const T=U.target;T.removeEventListener("dispose",L),C(T)}function q(U){const T=r.get(U);if(T.__webglInit===void 0)return;const et=U.source,dt=S.get(et);if(dt){const vt=dt[T.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&D(U),Object.keys(dt).length===0&&S.delete(et)}r.remove(U)}function D(U){const T=r.get(U);o.deleteTexture(T.__webglTexture);const et=U.source,dt=S.get(et);delete dt[T.__cacheKey],h.memory.textures--}function C(U){const T=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let vt=0;vt<T.__webglFramebuffer[dt].length;vt++)o.deleteFramebuffer(T.__webglFramebuffer[dt][vt]);else o.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)o.deleteFramebuffer(T.__webglFramebuffer[dt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=U.textures;for(let dt=0,vt=et.length;dt<vt;dt++){const ft=r.get(et[dt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(et[dt])}r.remove(U)}let V=0;function at(){V=0}function ut(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function gt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function lt(U,T){const et=r.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&et.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(et,U,T);return}}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function j(U,T){const et=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){$(et,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function st(U,T){const et=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){$(et,U,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function K(U,T){const et=r.get(U);if(U.version>0&&et.__version!==U.version){it(et,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const _t={[op]:o.REPEAT,[Ws]:o.CLAMP_TO_EDGE,[lp]:o.MIRRORED_REPEAT},St={[zi]:o.NEAREST,[CE]:o.NEAREST_MIPMAP_NEAREST,[Zu]:o.NEAREST_MIPMAP_LINEAR,[Ki]:o.LINEAR,[pd]:o.LINEAR_MIPMAP_NEAREST,[js]:o.LINEAR_MIPMAP_LINEAR},Ht={[NE]:o.NEVER,[BE]:o.ALWAYS,[LE]:o.LESS,[IS]:o.LEQUAL,[OE]:o.EQUAL,[IE]:o.GEQUAL,[PE]:o.GREATER,[zE]:o.NOTEQUAL};function re(U,T){if(T.type===Ta&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ki||T.magFilter===pd||T.magFilter===Zu||T.magFilter===js||T.minFilter===Ki||T.minFilter===pd||T.minFilter===Zu||T.minFilter===js)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,_t[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,_t[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,_t[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Ht[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===zi||T.minFilter!==Zu&&T.minFilter!==js||T.type===Ta&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function be(U,T){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",B));const dt=T.source;let vt=S.get(dt);vt===void 0&&(vt={},S.set(dt,vt));const ft=gt(T);if(ft!==U.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),vt[ft].usedTimes++;const Vt=vt[U.__cacheKey];Vt!==void 0&&(vt[U.__cacheKey].usedTimes--,Vt.usedTimes===0&&D(T)),U.__cacheKey=ft,U.__webglTexture=vt[ft].texture}return et}function I(U,T,et){return Math.floor(Math.floor(U/et)/T)}function ct(U,T,et,dt){const ft=U.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,et,dt,T.data);else{ft.sort((Tt,Lt)=>Tt.start-Lt.start);let Vt=0;for(let Tt=1;Tt<ft.length;Tt++){const Lt=ft[Vt],ne=ft[Tt],jt=Lt.start+Lt.count,Ot=I(ne.start,T.width,4),fe=I(Lt.start,T.width,4);ne.start<=jt+1&&Ot===fe&&I(ne.start+ne.count-1,T.width,4)===Ot?Lt.count=Math.max(Lt.count,ne.start+ne.count-Lt.start):(++Vt,ft[Vt]=ne)}ft.length=Vt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),Zt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Tt=0,Lt=ft.length;Tt<Lt;Tt++){const ne=ft[Tt],jt=Math.floor(ne.start/4),Ot=Math.ceil(ne.count/4),fe=jt%T.width,G=Math.floor(jt/T.width),bt=Ot,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,fe,G,bt,wt,et,dt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Zt)}}function $(U,T,et){let dt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=o.TEXTURE_3D);const vt=be(U,T),ft=T.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+et);const Vt=r.get(ft);if(ft.version!==Vt.__version||vt===!0){i.activeTexture(o.TEXTURE0+et);const Rt=Ue.getPrimaries(Ue.workingColorSpace),Wt=T.colorSpace===os?null:Ue.getPrimaries(T.colorSpace),Zt=T.colorSpace===os||Rt===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Tt=A(T.image,!1,l.maxTextureSize);Tt=qe(T,Tt);const Lt=f.convert(T.format,T.colorSpace),ne=f.convert(T.type);let jt=O(T.internalFormat,Lt,ne,T.colorSpace,T.isVideoTexture);re(dt,T);let Ot;const fe=T.mipmaps,G=T.isVideoTexture!==!0,bt=Vt.__version===void 0||vt===!0,wt=ft.dataReady,Gt=F(T,Tt);if(T.isDepthTexture)jt=w(T.format===gl,T.type),bt&&(G?i.texStorage2D(o.TEXTURE_2D,1,jt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Lt,ne,null));else if(T.isDataTexture)if(fe.length>0){G&&bt&&i.texStorage2D(o.TEXTURE_2D,Gt,jt,fe[0].width,fe[0].height);for(let yt=0,mt=fe.length;yt<mt;yt++)Ot=fe[yt],G?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Lt,ne,Ot.data):i.texImage2D(o.TEXTURE_2D,yt,jt,Ot.width,Ot.height,0,Lt,ne,Ot.data);T.generateMipmaps=!1}else G?(bt&&i.texStorage2D(o.TEXTURE_2D,Gt,jt,Tt.width,Tt.height),wt&&ct(T,Tt,Lt,ne)):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Lt,ne,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){G&&bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,jt,fe[0].width,fe[0].height,Tt.depth);for(let yt=0,mt=fe.length;yt<mt;yt++)if(Ot=fe[yt],T.format!==Pi)if(Lt!==null)if(G){if(wt)if(T.layerUpdates.size>0){const Yt=jv(Ot.width,Ot.height,T.format,T.type);for(const ue of T.layerUpdates){const Ge=Ot.data.subarray(ue*Yt/Ot.data.BYTES_PER_ELEMENT,(ue+1)*Yt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ue,Ot.width,Ot.height,1,Lt,Ge)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,Tt.depth,Lt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,jt,Ot.width,Ot.height,Tt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,Tt.depth,Lt,ne,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,jt,Ot.width,Ot.height,Tt.depth,0,Lt,ne,Ot.data)}else{G&&bt&&i.texStorage2D(o.TEXTURE_2D,Gt,jt,fe[0].width,fe[0].height);for(let yt=0,mt=fe.length;yt<mt;yt++)Ot=fe[yt],T.format!==Pi?Lt!==null?G?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Lt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,jt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Lt,ne,Ot.data):i.texImage2D(o.TEXTURE_2D,yt,jt,Ot.width,Ot.height,0,Lt,ne,Ot.data)}else if(T.isDataArrayTexture)if(G){if(bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,jt,Tt.width,Tt.height,Tt.depth),wt)if(T.layerUpdates.size>0){const yt=jv(Tt.width,Tt.height,T.format,T.type);for(const mt of T.layerUpdates){const Yt=Tt.data.subarray(mt*yt/Tt.data.BYTES_PER_ELEMENT,(mt+1)*yt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,Tt.width,Tt.height,1,Lt,ne,Yt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Lt,ne,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,Lt,ne,Tt.data);else if(T.isData3DTexture)G?(bt&&i.texStorage3D(o.TEXTURE_3D,Gt,jt,Tt.width,Tt.height,Tt.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Lt,ne,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,Lt,ne,Tt.data);else if(T.isFramebufferTexture){if(bt)if(G)i.texStorage2D(o.TEXTURE_2D,Gt,jt,Tt.width,Tt.height);else{let yt=Tt.width,mt=Tt.height;for(let Yt=0;Yt<Gt;Yt++)i.texImage2D(o.TEXTURE_2D,Yt,jt,yt,mt,0,Lt,ne,null),yt>>=1,mt>>=1}}else if(fe.length>0){if(G&&bt){const yt=We(fe[0]);i.texStorage2D(o.TEXTURE_2D,Gt,jt,yt.width,yt.height)}for(let yt=0,mt=fe.length;yt<mt;yt++)Ot=fe[yt],G?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Lt,ne,Ot):i.texImage2D(o.TEXTURE_2D,yt,jt,Lt,ne,Ot);T.generateMipmaps=!1}else if(G){if(bt){const yt=We(Tt);i.texStorage2D(o.TEXTURE_2D,Gt,jt,yt.width,yt.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,ne,Tt)}else i.texImage2D(o.TEXTURE_2D,0,jt,Lt,ne,Tt);x(T)&&y(dt),Vt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function it(U,T,et){if(T.image.length!==6)return;const dt=be(U,T),vt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const ft=r.get(vt);if(vt.version!==ft.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Vt=Ue.getPrimaries(Ue.workingColorSpace),Rt=T.colorSpace===os?null:Ue.getPrimaries(T.colorSpace),Wt=T.colorSpace===os||Vt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Zt=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Lt=[];for(let mt=0;mt<6;mt++)!Zt&&!Tt?Lt[mt]=A(T.image[mt],!0,l.maxCubemapSize):Lt[mt]=Tt?T.image[mt].image:T.image[mt],Lt[mt]=qe(T,Lt[mt]);const ne=Lt[0],jt=f.convert(T.format,T.colorSpace),Ot=f.convert(T.type),fe=O(T.internalFormat,jt,Ot,T.colorSpace),G=T.isVideoTexture!==!0,bt=ft.__version===void 0||dt===!0,wt=vt.dataReady;let Gt=F(T,ne);re(o.TEXTURE_CUBE_MAP,T);let yt;if(Zt){G&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,fe,ne.width,ne.height);for(let mt=0;mt<6;mt++){yt=Lt[mt].mipmaps;for(let Yt=0;Yt<yt.length;Yt++){const ue=yt[Yt];T.format!==Pi?jt!==null?G?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt,0,0,ue.width,ue.height,jt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt,fe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt,0,0,ue.width,ue.height,jt,Ot,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt,fe,ue.width,ue.height,0,jt,Ot,ue.data)}}}else{if(yt=T.mipmaps,G&&bt){yt.length>0&&Gt++;const mt=We(Lt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,fe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Tt){G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Lt[mt].width,Lt[mt].height,jt,Ot,Lt[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,fe,Lt[mt].width,Lt[mt].height,0,jt,Ot,Lt[mt].data);for(let Yt=0;Yt<yt.length;Yt++){const Ge=yt[Yt].image[mt].image;G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt+1,0,0,Ge.width,Ge.height,jt,Ot,Ge.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt+1,fe,Ge.width,Ge.height,0,jt,Ot,Ge.data)}}else{G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,jt,Ot,Lt[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,fe,jt,Ot,Lt[mt]);for(let Yt=0;Yt<yt.length;Yt++){const ue=yt[Yt];G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt+1,0,0,jt,Ot,ue.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt+1,fe,jt,Ot,ue.image[mt])}}}x(T)&&y(o.TEXTURE_CUBE_MAP),ft.__version=vt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function xt(U,T,et,dt,vt,ft){const Vt=f.convert(et.format,et.colorSpace),Rt=f.convert(et.type),Wt=O(et.internalFormat,Vt,Rt,et.colorSpace),Zt=r.get(T),Tt=r.get(et);if(Tt.__renderTarget=T,!Zt.__hasExternalTextures){const Lt=Math.max(1,T.width>>ft),ne=Math.max(1,T.height>>ft);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ft,Wt,Lt,ne,T.depth,0,Vt,Rt,null):i.texImage2D(vt,ft,Wt,Lt,ne,0,Vt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Bt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,vt,Tt.__webglTexture,0,ie(T)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,vt,Tt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(U,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const dt=T.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,ft=w(T.stencilBuffer,vt),Vt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=ie(T);Bt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ft,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ft,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ft,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,U)}else{const dt=T.textures;for(let vt=0;vt<dt.length;vt++){const ft=dt[vt],Vt=f.convert(ft.format,ft.colorSpace),Rt=f.convert(ft.type),Wt=O(ft.internalFormat,Vt,Rt,ft.colorSpace),Zt=ie(T);et&&Bt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Wt,T.width,T.height):Bt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Zt,Wt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt(T.depthTexture,0);const vt=dt.__webglTexture,ft=ie(T);if(T.depthTexture.format===ml)Bt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(T.depthTexture.format===gl)Bt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Mt(U){const T=r.get(U),et=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const vt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",vt)};dt.addEventListener("dispose",vt),T.__depthDisposeCallback=vt}T.__boundDepthTexture=dt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const dt=U.texture.mipmaps;dt&&dt.length>0?At(T.__webglFramebuffer[0],U):At(T.__webglFramebuffer,U)}else if(et){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=o.createRenderbuffer(),Ut(T.__webglDepthbuffer[dt],U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ft)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Ut(T.__webglDepthbuffer,U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function qt(U,T,et){const dt=r.get(U);T!==void 0&&xt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Mt(U)}function z(U){const T=U.texture,et=r.get(U),dt=r.get(T);U.addEventListener("dispose",L);const vt=U.textures,ft=U.isWebGLCubeRenderTarget===!0,Vt=vt.length>1;if(Vt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=T.version,h.memory.textures++),ft){et.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)et.__webglFramebuffer[Rt][Wt]=o.createFramebuffer()}else et.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)et.__webglFramebuffer[Rt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let Rt=0,Wt=vt.length;Rt<Wt;Rt++){const Zt=r.get(vt[Rt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Bt(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Wt=vt[Rt];et.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt]);const Zt=f.convert(Wt.format,Wt.colorSpace),Tt=f.convert(Wt.type),Lt=O(Wt.internalFormat,Zt,Tt,Wt.colorSpace,U.isXRRenderTarget===!0),ne=ie(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Lt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),re(o.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)xt(et.__webglFramebuffer[Rt][Wt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else xt(et.__webglFramebuffer[Rt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);x(T)&&y(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Rt=0,Wt=vt.length;Rt<Wt;Rt++){const Zt=vt[Rt],Tt=r.get(Zt);let Lt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Lt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Tt.__webglTexture),re(Lt,Zt),xt(et.__webglFramebuffer,U,Zt,o.COLOR_ATTACHMENT0+Rt,Lt,0),x(Zt)&&y(Lt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),re(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)xt(et.__webglFramebuffer[Wt],U,T,o.COLOR_ATTACHMENT0,Rt,Wt);else xt(et.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Rt,0);x(T)&&y(Rt),i.unbindTexture()}U.depthBuffer&&Mt(U)}function He(U){const T=U.textures;for(let et=0,dt=T.length;et<dt;et++){const vt=T[et];if(x(vt)){const ft=P(U),Vt=r.get(vt).__webglTexture;i.bindTexture(ft,Vt),y(ft),i.unbindTexture()}}}const se=[],Qt=[];function Nt(U){if(U.samples>0){if(Bt(U)===!1){const T=U.textures,et=U.width,dt=U.height;let vt=o.COLOR_BUFFER_BIT;const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=r.get(U),Rt=T.length>1;if(Rt)for(let Zt=0;Zt<T.length;Zt++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const Wt=U.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Zt=0;Zt<T.length;Zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Zt]);const Tt=r.get(T[Zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,et,dt,0,0,et,dt,vt,o.NEAREST),m===!0&&(se.length=0,Qt.length=0,se.push(o.COLOR_ATTACHMENT0+Zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(se.push(ft),Qt.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Zt=0;Zt<T.length;Zt++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Zt]);const Tt=r.get(T[Zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,Tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ie(U){return Math.min(l.maxSamples,U.samples)}function Bt(U){const T=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function qe(U,T){const et=U.colorSpace,dt=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==uo&&et!==os&&(Ue.getTransfer(et)===Xe?(dt!==Pi||vt!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(g.width=U.naturalWidth||U.width,g.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(g.width=U.displayWidth,g.height=U.displayHeight):(g.width=U.width,g.height=U.height),g}this.allocateTextureUnit=ut,this.resetTextureUnits=at,this.setTexture2D=lt,this.setTexture2DArray=j,this.setTexture3D=st,this.setTextureCube=K,this.rebindTextures=qt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Bt}function nC(o,e){function i(r,l=os){let f;const h=Ue.getTransfer(l);if(r===$i)return o.UNSIGNED_BYTE;if(r===kp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===qp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===DS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===US)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===CS)return o.BYTE;if(r===wS)return o.SHORT;if(r===dl)return o.UNSIGNED_SHORT;if(r===Xp)return o.INT;if(r===Zs)return o.UNSIGNED_INT;if(r===Ta)return o.FLOAT;if(r===Sl)return o.HALF_FLOAT;if(r===NS)return o.ALPHA;if(r===LS)return o.RGB;if(r===Pi)return o.RGBA;if(r===ml)return o.DEPTH_COMPONENT;if(r===gl)return o.DEPTH_STENCIL;if(r===OS)return o.RED;if(r===Yp)return o.RED_INTEGER;if(r===PS)return o.RG;if(r===Wp)return o.RG_INTEGER;if(r===jp)return o.RGBA_INTEGER;if(r===Mc||r===Ec||r===Tc||r===bc)if(h===Xe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Mc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ec)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Mc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ec)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===up||r===cp||r===fp||r===hp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===up)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dp||r===pp||r===mp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===dp||r===pp)return h===Xe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===mp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gp||r===_p||r===vp||r===Sp||r===yp||r===xp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap||r===Rp||r===Cp||r===wp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===gp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_p)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ep)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===bp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ap)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dp||r===Up||r===Np)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Dp)return h===Xe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Up)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Np)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Lp||r===Op||r===Pp||r===zp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Lp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Op)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===pl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const iC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aC=`
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

}`;class sC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new jS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new fs({vertexShader:iC,fragmentShader:aC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new pn(new Nc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rC extends $s{constructor(e,i){super();const r=this;let l=null,f=1,h=null,d="local-floor",m=1,g=null,v=null,p=null,S=null,M=null,b=null;const A=typeof XRWebGLBinding<"u",x=new sC,y={},P=i.getContextAttributes();let O=null,w=null;const F=[],B=[],L=new ce;let q=null;const D=new Ei;D.viewport=new rn;const C=new Ei;C.viewport=new rn;const V=[D,C],at=new bT;let ut=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=F[$];return it===void 0&&(it=new zd,F[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=F[$];return it===void 0&&(it=new zd,F[$]=it),it.getGripSpace()},this.getHand=function($){let it=F[$];return it===void 0&&(it=new zd,F[$]=it),it.getHandSpace()};function lt($){const it=B.indexOf($.inputSource);if(it===-1)return;const xt=F[it];xt!==void 0&&(xt.update($.inputSource,$.frame,g||h),xt.dispatchEvent({type:$.type,data:$.inputSource}))}function j(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",j),l.removeEventListener("inputsourceschange",st);for(let $=0;$<F.length;$++){const it=B[$];it!==null&&(B[$]=null,F[$].disconnect(it))}ut=null,gt=null,x.reset();for(const $ in y)delete y[$];e.setRenderTarget(O),M=null,S=null,p=null,l=null,w=null,ct.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){f=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function($){g=$},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return p===null&&A&&(p=new XRWebGLBinding(l,i)),p},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",j),l.addEventListener("inputsourceschange",st),P.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(L),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ut=null,At=null;P.depth&&(At=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=P.stencil?gl:ml,Ut=P.stencil?pl:Zs);const Mt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:f};p=this.getBinding(),S=p.createProjectionLayer(Mt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),w=new Qs(S.textureWidth,S.textureHeight,{format:Pi,type:$i,depthTexture:new WS(S.textureWidth,S.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const xt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new Qs(M.framebufferWidth,M.framebufferHeight,{format:Pi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),g=null,h=await l.requestReferenceSpace(d),ct.setContext(l),ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function st($){for(let it=0;it<$.removed.length;it++){const xt=$.removed[it],Ut=B.indexOf(xt);Ut>=0&&(B[Ut]=null,F[Ut].disconnect(xt))}for(let it=0;it<$.added.length;it++){const xt=$.added[it];let Ut=B.indexOf(xt);if(Ut===-1){for(let Mt=0;Mt<F.length;Mt++)if(Mt>=B.length){B.push(xt),Ut=Mt;break}else if(B[Mt]===null){B[Mt]=xt,Ut=Mt;break}if(Ut===-1)break}const At=F[Ut];At&&At.connect(xt)}}const K=new k,_t=new k;function St($,it,xt){K.setFromMatrixPosition(it.matrixWorld),_t.setFromMatrixPosition(xt.matrixWorld);const Ut=K.distanceTo(_t),At=it.projectionMatrix.elements,Mt=xt.projectionMatrix.elements,qt=At[14]/(At[10]-1),z=At[14]/(At[10]+1),He=(At[9]+1)/At[5],se=(At[9]-1)/At[5],Qt=(At[8]-1)/At[0],Nt=(Mt[8]+1)/Mt[0],ie=qt*Qt,Bt=qt*Nt,oe=Ut/(-Qt+Nt),qe=oe*-Qt;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(qe),$.translateZ(oe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const We=qt+oe,U=z+oe,T=ie-qe,et=Bt+(Ut-qe),dt=He*z/U*We,vt=se*z/U*We;$.projectionMatrix.makePerspective(T,et,dt,vt,We,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ht($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let it=$.near,xt=$.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),at.near=C.near=D.near=it,at.far=C.far=D.far=xt,(ut!==at.near||gt!==at.far)&&(l.updateRenderState({depthNear:at.near,depthFar:at.far}),ut=at.near,gt=at.far),at.layers.mask=$.layers.mask|6,D.layers.mask=at.layers.mask&3,C.layers.mask=at.layers.mask&5;const Ut=$.parent,At=at.cameras;Ht(at,Ut);for(let Mt=0;Mt<At.length;Mt++)Ht(At[Mt],Ut);At.length===2?St(at,D,C):at.projectionMatrix.copy(D.projectionMatrix),re($,at,Ut)};function re($,it,xt){xt===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(xt.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ip*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function($){m=$,S!==null&&(S.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(at)},this.getCameraTexture=function($){return y[$]};let be=null;function I($,it){if(v=it.getViewerPose(g||h),b=it,v!==null){const xt=v.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let Ut=!1;xt.length!==at.cameras.length&&(at.cameras.length=0,Ut=!0);for(let z=0;z<xt.length;z++){const He=xt[z];let se=null;if(M!==null)se=M.getViewport(He);else{const Nt=p.getViewSubImage(S,He);se=Nt.viewport,z===0&&(e.setRenderTargetTextures(w,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(w))}let Qt=V[z];Qt===void 0&&(Qt=new Ei,Qt.layers.enable(z),Qt.viewport=new rn,V[z]=Qt),Qt.matrix.fromArray(He.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(He.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(se.x,se.y,se.width,se.height),z===0&&(at.matrix.copy(Qt.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Ut===!0&&at.cameras.push(Qt)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){p=r.getBinding();const z=p.getDepthInformation(xt[0]);z&&z.isValid&&z.texture&&x.init(z,l.renderState)}if(At&&At.includes("camera-access")&&A){e.state.unbindTexture(),p=r.getBinding();for(let z=0;z<xt.length;z++){const He=xt[z].camera;if(He){let se=y[He];se||(se=new jS,y[He]=se);const Qt=p.getCameraImage(He);se.sourceTexture=Qt}}}}for(let xt=0;xt<F.length;xt++){const Ut=B[xt],At=F[xt];Ut!==null&&At!==void 0&&At.update(Ut,it,g||h)}be&&be($,it),it.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:it}),b=null}const ct=new QS;ct.setAnimationLoop(I),this.setAnimationLoop=function($){be=$},this.dispose=function(){}}}const Xs=new ta,oC=new en;function lC(o,e){function i(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,kS(o)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function l(x,y,P,O,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?f(x,y):y.isMeshToonMaterial?(f(x,y),p(x,y)):y.isMeshPhongMaterial?(f(x,y),v(x,y)):y.isMeshStandardMaterial?(f(x,y),S(x,y),y.isMeshPhysicalMaterial&&M(x,y,w)):y.isMeshMatcapMaterial?(f(x,y),b(x,y)):y.isMeshDepthMaterial?f(x,y):y.isMeshDistanceMaterial?(f(x,y),A(x,y)):y.isMeshNormalMaterial?f(x,y):y.isLineBasicMaterial?(h(x,y),y.isLineDashedMaterial&&d(x,y)):y.isPointsMaterial?m(x,y,P,O):y.isSpriteMaterial?g(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function f(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,i(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Jn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,i(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Jn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,i(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,i(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const P=e.get(y),O=P.envMap,w=P.envMapRotation;O&&(x.envMap.value=O,Xs.copy(w),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),x.envMapRotation.value.setFromMatrix4(oC.makeRotationFromEuler(Xs)),x.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,x.aoMapTransform))}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform))}function d(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function m(x,y,P,O){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*P,x.scale.value=O*.5,y.map&&(x.map.value=y.map,i(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,i(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,i(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function v(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function p(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function S(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function M(x,y,P){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Jn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,y){y.matcap&&(x.matcap.value=y.matcap)}function A(x,y){const P=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function uC(o,e,i,r){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const w=O.program;r.uniformBlockBinding(P,w)}function g(P,O){let w=l[P.id];w===void 0&&(b(P),w=v(P),l[P.id]=w,P.addEventListener("dispose",x));const F=O.program;r.updateUBOMapping(P,F);const B=e.render.frame;f[P.id]!==B&&(S(P),f[P.id]=B)}function v(P){const O=p();P.__bindingPointIndex=O;const w=o.createBuffer(),F=P.__size,B=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,F,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,w),w}function p(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const O=l[P.id],w=P.uniforms,F=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let B=0,L=w.length;B<L;B++){const q=Array.isArray(w[B])?w[B]:[w[B]];for(let D=0,C=q.length;D<C;D++){const V=q[D];if(M(V,B,D,F)===!0){const at=V.__offset,ut=Array.isArray(V.value)?V.value:[V.value];let gt=0;for(let lt=0;lt<ut.length;lt++){const j=ut[lt],st=A(j);typeof j=="number"||typeof j=="boolean"?(V.__data[0]=j,o.bufferSubData(o.UNIFORM_BUFFER,at+gt,V.__data)):j.isMatrix3?(V.__data[0]=j.elements[0],V.__data[1]=j.elements[1],V.__data[2]=j.elements[2],V.__data[3]=0,V.__data[4]=j.elements[3],V.__data[5]=j.elements[4],V.__data[6]=j.elements[5],V.__data[7]=0,V.__data[8]=j.elements[6],V.__data[9]=j.elements[7],V.__data[10]=j.elements[8],V.__data[11]=0):(j.toArray(V.__data,gt),gt+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,O,w,F){const B=P.value,L=O+"_"+w;if(F[L]===void 0)return typeof B=="number"||typeof B=="boolean"?F[L]=B:F[L]=B.clone(),!0;{const q=F[L];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return F[L]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function b(P){const O=P.uniforms;let w=0;const F=16;for(let L=0,q=O.length;L<q;L++){const D=Array.isArray(O[L])?O[L]:[O[L]];for(let C=0,V=D.length;C<V;C++){const at=D[C],ut=Array.isArray(at.value)?at.value:[at.value];for(let gt=0,lt=ut.length;gt<lt;gt++){const j=ut[gt],st=A(j),K=w%F,_t=K%st.boundary,St=K+_t;w+=_t,St!==0&&F-St<st.storage&&(w+=F-St),at.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=w,w+=st.storage}}}const B=w%F;return B>0&&(w+=F-B),P.__size=w,P.__cache={},this}function A(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function x(P){const O=P.target;O.removeEventListener("dispose",x);const w=h.indexOf(O.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete f[O.id]}function y(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},f={}}return{bind:m,update:g,dispose:y}}class cC{constructor(e={}){const{canvas:i=GE(),context:r=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),A=new Int32Array(4);let x=null,y=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=Mi;let B=0,L=0,q=null,D=-1,C=null;const V=new rn,at=new rn;let ut=null;const gt=new Re(0);let lt=0,j=i.width,st=i.height,K=1,_t=null,St=null;const Ht=new rn(0,0,j,st),re=new rn(0,0,j,st);let be=!1;const I=new $p;let ct=!1,$=!1;const it=new en,xt=new k,Ut=new rn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function qt(){return q===null?K:1}let z=r;function He(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Vp}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Gt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),z===null){const Z="webgl2";if(z=He(Z,R),z===null)throw He(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,Qt,Nt,ie,Bt,oe,qe,We,U,T,et,dt,vt,ft,Vt,Rt,Wt,Zt,Tt,Lt,ne,jt,Ot,fe;function G(){se=new yA(z),se.init(),jt=new nC(z,se),Qt=new dA(z,se,e,jt),Nt=new tC(z,se),Qt.reversedDepthBuffer&&S&&Nt.buffers.depth.setReversed(!0),ie=new EA(z),Bt=new GR,oe=new eC(z,se,Nt,Bt,Qt,jt,ie),qe=new mA(w),We=new SA(w),U=new wT(z),Ot=new fA(z,U),T=new xA(z,U,ie,Ot),et=new bA(z,T,U,ie),Tt=new TA(z,Qt,oe),Rt=new pA(Bt),dt=new HR(w,qe,We,se,Qt,Ot,Rt),vt=new lC(w,Bt),ft=new XR,Vt=new ZR(se),Zt=new cA(w,qe,We,Nt,et,M,m),Wt=new JR(w,et,Qt),fe=new uC(z,ie,Qt,Nt),Lt=new hA(z,se,ie),ne=new MA(z,se,ie),ie.programs=dt.programs,w.capabilities=Qt,w.extensions=se,w.properties=Bt,w.renderLists=ft,w.shadowMap=Wt,w.state=Nt,w.info=ie}G();const bt=new rC(w,z);this.xr=bt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(j,st,!1))},this.getSize=function(R){return R.set(j,st)},this.setSize=function(R,Z,rt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=R,st=Z,i.width=Math.floor(R*K),i.height=Math.floor(Z*K),rt===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(j*K,st*K).floor()},this.setDrawingBufferSize=function(R,Z,rt){j=R,st=Z,K=rt,i.width=Math.floor(R*rt),i.height=Math.floor(Z*rt),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(Ht)},this.setViewport=function(R,Z,rt,ot){R.isVector4?Ht.set(R.x,R.y,R.z,R.w):Ht.set(R,Z,rt,ot),Nt.viewport(V.copy(Ht).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,Z,rt,ot){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,Z,rt,ot),Nt.scissor(at.copy(re).multiplyScalar(K).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){Nt.setScissorTest(be=R)},this.setOpaqueSort=function(R){_t=R},this.setTransparentSort=function(R){St=R},this.getClearColor=function(R){return R.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,rt=!0){let ot=0;if(R){let Q=!1;if(q!==null){const Et=q.texture.format;Q=Et===jp||Et===Wp||Et===Yp}if(Q){const Et=q.texture.type,Pt=Et===$i||Et===Zs||Et===dl||Et===pl||Et===kp||Et===qp,It=Zt.getClearColor(),Ct=Zt.getClearAlpha(),Xt=It.r,ee=It.g,$t=It.b;Pt?(b[0]=Xt,b[1]=ee,b[2]=$t,b[3]=Ct,z.clearBufferuiv(z.COLOR,0,b)):(A[0]=Xt,A[1]=ee,A[2]=$t,A[3]=Ct,z.clearBufferiv(z.COLOR,0,A))}else ot|=z.COLOR_BUFFER_BIT}Z&&(ot|=z.DEPTH_BUFFER_BIT),rt&&(ot|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Gt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),Zt.dispose(),ft.dispose(),Vt.dispose(),Bt.dispose(),qe.dispose(),We.dispose(),et.dispose(),Ot.dispose(),fe.dispose(),dt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",mn),bt.removeEventListener("sessionend",Nn),na.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=ie.autoReset,Z=Wt.enabled,rt=Wt.autoUpdate,ot=Wt.needsUpdate,Q=Wt.type;G(),ie.autoReset=R,Wt.enabled=Z,Wt.autoUpdate=rt,Wt.needsUpdate=ot,Wt.type=Q}function yt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function mt(R){const Z=R.target;Z.removeEventListener("dispose",mt),Yt(Z)}function Yt(R){ue(R),Bt.remove(R)}function ue(R){const Z=Bt.get(R).programs;Z!==void 0&&(Z.forEach(function(rt){dt.releaseProgram(rt)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,rt,ot,Q,Et){Z===null&&(Z=At);const Pt=Q.isMesh&&Q.matrixWorld.determinant()<0,It=Rl(R,Z,rt,ot,Q);Nt.setMaterial(ot,Pt);let Ct=rt.index,Xt=1;if(ot.wireframe===!0){if(Ct=T.getWireframeAttribute(rt),Ct===void 0)return;Xt=2}const ee=rt.drawRange,$t=rt.attributes.position;let Se=ee.start*Xt,Pe=(ee.start+ee.count)*Xt;Et!==null&&(Se=Math.max(Se,Et.start*Xt),Pe=Math.min(Pe,(Et.start+Et.count)*Xt)),Ct!==null?(Se=Math.max(Se,0),Pe=Math.min(Pe,Ct.count)):$t!=null&&(Se=Math.max(Se,0),Pe=Math.min(Pe,$t.count));const Qe=Pe-Se;if(Qe<0||Qe===1/0)return;Ot.setup(Q,ot,It,rt,Ct);let Ne,Ce=Lt;if(Ct!==null&&(Ne=U.get(Ct),Ce=ne,Ce.setIndex(Ne)),Q.isMesh)ot.wireframe===!0?(Nt.setLineWidth(ot.wireframeLinewidth*qt()),Ce.setMode(z.LINES)):Ce.setMode(z.TRIANGLES);else if(Q.isLine){let te=ot.linewidth;te===void 0&&(te=1),Nt.setLineWidth(te*qt()),Q.isLineSegments?Ce.setMode(z.LINES):Q.isLineLoop?Ce.setMode(z.LINE_LOOP):Ce.setMode(z.LINE_STRIP)}else Q.isPoints?Ce.setMode(z.POINTS):Q.isSprite&&Ce.setMode(z.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)_l("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const te=Q._multiDrawStarts,Le=Q._multiDrawCounts,ge=Q._multiDrawCount,gn=Ct?U.get(Ct).bytesPerElement:1,ti=Bt.get(ot).currentProgram.getUniforms();for(let we=0;we<ge;we++)ti.setValue(z,"_gl_DrawID",we),Ce.render(te[we]/gn,Le[we])}else if(Q.isInstancedMesh)Ce.renderInstances(Se,Qe,Q.count);else if(rt.isInstancedBufferGeometry){const te=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Le=Math.min(rt.instanceCount,te);Ce.renderInstances(Se,Qe,Le)}else Ce.render(Se,Qe)};function Ge(R,Z,rt){R.transparent===!0&&R.side===Qn&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,fi(R,Z,rt),R.side=cs,R.needsUpdate=!0,fi(R,Z,rt),R.side=Qn):fi(R,Z,rt)}this.compile=function(R,Z,rt=null){rt===null&&(rt=R),y=Vt.get(rt),y.init(Z),O.push(y),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),R!==rt&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const ot=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Et=Q.material;if(Et)if(Array.isArray(Et))for(let Pt=0;Pt<Et.length;Pt++){const It=Et[Pt];Ge(It,rt,Q),ot.add(It)}else Ge(Et,rt,Q),ot.add(Et)}),y=O.pop(),ot},this.compileAsync=function(R,Z,rt=null){const ot=this.compile(R,Z,rt);return new Promise(Q=>{function Et(){if(ot.forEach(function(Pt){Bt.get(Pt).currentProgram.isReady()&&ot.delete(Pt)}),ot.size===0){Q(R);return}setTimeout(Et,10)}se.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Me=null;function $e(R){Me&&Me(R)}function mn(){na.stop()}function Nn(){na.start()}const na=new QS;na.setAnimationLoop($e),typeof self<"u"&&na.setContext(self),this.setAnimationLoop=function(R){Me=R,bt.setAnimationLoop(R),R===null?na.stop():na.start()},bt.addEventListener("sessionstart",mn),bt.addEventListener("sessionend",Nn),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(Z),Z=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Z,q),y=Vt.get(R,O.length),y.init(Z),O.push(y),it.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),I.setFromProjectionMatrix(it,Qi,Z.reversedDepth),$=this.localClippingEnabled,ct=Rt.init(this.clippingPlanes,$),x=ft.get(R,P.length),x.init(),P.push(x),bt.enabled===!0&&bt.isPresenting===!0){const Et=w.xr.getDepthSensingMesh();Et!==null&&po(Et,Z,-1/0,w.sortObjects)}po(R,Z,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(_t,St),Mt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Mt&&Zt.addToRenderList(x,R),this.info.render.frame++,ct===!0&&Rt.beginShadows();const rt=y.state.shadowsArray;Wt.render(rt,R,Z),ct===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=x.opaque,Q=x.transmissive;if(y.setupLights(),Z.isArrayCamera){const Et=Z.cameras;if(Q.length>0)for(let Pt=0,It=Et.length;Pt<It;Pt++){const Ct=Et[Pt];ps(ot,Q,R,Ct)}Mt&&Zt.render(R);for(let Pt=0,It=Et.length;Pt<It;Pt++){const Ct=Et[Pt];Al(x,R,Ct,Ct.viewport)}}else Q.length>0&&ps(ot,Q,R,Z),Mt&&Zt.render(R),Al(x,R,Z);q!==null&&L===0&&(oe.updateMultisampleRenderTarget(q),oe.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(w,R,Z),Ot.resetDefaultState(),D=-1,C=null,O.pop(),O.length>0?(y=O[O.length-1],ct===!0&&Rt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?x=P[P.length-1]:x=null};function po(R,Z,rt,ot){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||I.intersectsSprite(R)){ot&&Ut.setFromMatrixPosition(R.matrixWorld).applyMatrix4(it);const Pt=et.update(R),It=R.material;It.visible&&x.push(R,Pt,It,rt,Ut.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||I.intersectsObject(R))){const Pt=et.update(R),It=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ut.copy(R.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ut.copy(Pt.boundingSphere.center)),Ut.applyMatrix4(R.matrixWorld).applyMatrix4(it)),Array.isArray(It)){const Ct=Pt.groups;for(let Xt=0,ee=Ct.length;Xt<ee;Xt++){const $t=Ct[Xt],Se=It[$t.materialIndex];Se&&Se.visible&&x.push(R,Pt,Se,rt,Ut.z,$t)}}else It.visible&&x.push(R,Pt,It,rt,Ut.z,null)}}const Et=R.children;for(let Pt=0,It=Et.length;Pt<It;Pt++)po(Et[Pt],Z,rt,ot)}function Al(R,Z,rt,ot){const Q=R.opaque,Et=R.transmissive,Pt=R.transparent;y.setupLightsView(rt),ct===!0&&Rt.setGlobalState(w.clippingPlanes,rt),ot&&Nt.viewport(V.copy(ot)),Q.length>0&&ia(Q,Z,rt),Et.length>0&&ia(Et,Z,rt),Pt.length>0&&ia(Pt,Z,rt),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function ps(R,Z,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ot.id]===void 0&&(y.state.transmissionRenderTarget[ot.id]=new Qs(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Sl:$i,minFilter:js,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Et=y.state.transmissionRenderTarget[ot.id],Pt=ot.viewport||V;Et.setSize(Pt.z*w.transmissionResolutionScale,Pt.w*w.transmissionResolutionScale);const It=w.getRenderTarget(),Ct=w.getActiveCubeFace(),Xt=w.getActiveMipmapLevel();w.setRenderTarget(Et),w.getClearColor(gt),lt=w.getClearAlpha(),lt<1&&w.setClearColor(16777215,.5),w.clear(),Mt&&Zt.render(rt);const ee=w.toneMapping;w.toneMapping=us;const $t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),y.setupLightsView(ot),ct===!0&&Rt.setGlobalState(w.clippingPlanes,ot),ia(R,rt,ot),oe.updateMultisampleRenderTarget(Et),oe.updateRenderTargetMipmap(Et),se.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Pe=0,Qe=Z.length;Pe<Qe;Pe++){const Ne=Z[Pe],Ce=Ne.object,te=Ne.geometry,Le=Ne.material,ge=Ne.group;if(Le.side===Qn&&Ce.layers.test(ot.layers)){const gn=Le.side;Le.side=Jn,Le.needsUpdate=!0,ms(Ce,rt,ot,te,Le,ge),Le.side=gn,Le.needsUpdate=!0,Se=!0}}Se===!0&&(oe.updateMultisampleRenderTarget(Et),oe.updateRenderTargetMipmap(Et))}w.setRenderTarget(It,Ct,Xt),w.setClearColor(gt,lt),$t!==void 0&&(ot.viewport=$t),w.toneMapping=ee}function ia(R,Z,rt){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Et=R.length;Q<Et;Q++){const Pt=R[Q],It=Pt.object,Ct=Pt.geometry,Xt=Pt.group;let ee=Pt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),It.layers.test(rt.layers)&&ms(It,Z,rt,Ct,ee,Xt)}}function ms(R,Z,rt,ot,Q,Et){R.onBeforeRender(w,Z,rt,ot,Q,Et),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(w,Z,rt,ot,R,Et),Q.transparent===!0&&Q.side===Qn&&Q.forceSinglePass===!1?(Q.side=Jn,Q.needsUpdate=!0,w.renderBufferDirect(rt,Z,ot,Q,R,Et),Q.side=cs,Q.needsUpdate=!0,w.renderBufferDirect(rt,Z,ot,Q,R,Et),Q.side=Qn):w.renderBufferDirect(rt,Z,ot,Q,R,Et),R.onAfterRender(w,Z,rt,ot,Q,Et)}function fi(R,Z,rt){Z.isScene!==!0&&(Z=At);const ot=Bt.get(R),Q=y.state.lights,Et=y.state.shadowsArray,Pt=Q.state.version,It=dt.getParameters(R,Q.state,Et,Z,rt),Ct=dt.getProgramCacheKey(It);let Xt=ot.programs;ot.environment=R.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(R.isMeshStandardMaterial?We:qe).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",mt),Xt=new Map,ot.programs=Xt);let ee=Xt.get(Ct);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Pt)return Aa(R,It),ee}else It.uniforms=dt.getUniforms(R),R.onBeforeCompile(It,w),ee=dt.acquireProgram(It,Ct),Xt.set(Ct,ee),ot.uniforms=It.uniforms;const $t=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=Rt.uniform),Aa(R,It),ot.needsLights=Cl(R),ot.lightsStateVersion=Pt,ot.needsLights&&($t.ambientLightColor.value=Q.state.ambient,$t.lightProbe.value=Q.state.probe,$t.directionalLights.value=Q.state.directional,$t.directionalLightShadows.value=Q.state.directionalShadow,$t.spotLights.value=Q.state.spot,$t.spotLightShadows.value=Q.state.spotShadow,$t.rectAreaLights.value=Q.state.rectArea,$t.ltc_1.value=Q.state.rectAreaLTC1,$t.ltc_2.value=Q.state.rectAreaLTC2,$t.pointLights.value=Q.state.point,$t.pointLightShadows.value=Q.state.pointShadow,$t.hemisphereLights.value=Q.state.hemi,$t.directionalShadowMap.value=Q.state.directionalShadowMap,$t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$t.spotShadowMap.value=Q.state.spotShadowMap,$t.spotLightMatrix.value=Q.state.spotLightMatrix,$t.spotLightMap.value=Q.state.spotLightMap,$t.pointShadowMap.value=Q.state.pointShadowMap,$t.pointShadowMatrix.value=Q.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function gs(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Rc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Aa(R,Z){const rt=Bt.get(R);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function Rl(R,Z,rt,ot,Q){Z.isScene!==!0&&(Z=At),oe.resetTextureUnits();const Et=Z.fog,Pt=ot.isMeshStandardMaterial?Z.environment:null,It=q===null?w.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:uo,Ct=(ot.isMeshStandardMaterial?We:qe).get(ot.envMap||Pt),Xt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),$t=!!rt.morphAttributes.position,Se=!!rt.morphAttributes.normal,Pe=!!rt.morphAttributes.color;let Qe=us;ot.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Qe=w.toneMapping);const Ne=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ce=Ne!==void 0?Ne.length:0,te=Bt.get(ot),Le=y.state.lights;if(ct===!0&&($===!0||R!==C)){const nn=R===C&&ot.id===D;Rt.setState(ot,R,nn)}let ge=!1;ot.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Le.state.version||te.outputColorSpace!==It||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==Ct||ot.fog===!0&&te.fog!==Et||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Rt.numPlanes||te.numIntersection!==Rt.numIntersection)||te.vertexAlphas!==Xt||te.vertexTangents!==ee||te.morphTargets!==$t||te.morphNormals!==Se||te.morphColors!==Pe||te.toneMapping!==Qe||te.morphTargetsCount!==Ce)&&(ge=!0):(ge=!0,te.__version=ot.version);let gn=te.currentProgram;ge===!0&&(gn=fi(ot,Z,Q));let ti=!1,we=!1,Ra=!1;const je=gn.getUniforms(),In=te.uniforms;if(Nt.useProgram(gn.program)&&(ti=!0,we=!0,Ra=!0),ot.id!==D&&(D=ot.id,we=!0),ti||C!==R){Nt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),je.setValue(z,"projectionMatrix",R.projectionMatrix),je.setValue(z,"viewMatrix",R.matrixWorldInverse);const Ln=je.map.cameraPosition;Ln!==void 0&&Ln.setValue(z,xt.setFromMatrixPosition(R.matrixWorld)),Qt.logarithmicDepthBuffer&&je.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&je.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,we=!0,Ra=!0)}if(Q.isSkinnedMesh){je.setOptional(z,Q,"bindMatrix"),je.setOptional(z,Q,"bindMatrixInverse");const nn=Q.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),je.setValue(z,"boneTexture",nn.boneTexture,oe))}Q.isBatchedMesh&&(je.setOptional(z,Q,"batchingTexture"),je.setValue(z,"batchingTexture",Q._matricesTexture,oe),je.setOptional(z,Q,"batchingIdTexture"),je.setValue(z,"batchingIdTexture",Q._indirectTexture,oe),je.setOptional(z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&je.setValue(z,"batchingColorTexture",Q._colorsTexture,oe));const ln=rt.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Tt.update(Q,rt,gn),(we||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,je.setValue(z,"receiveShadow",Q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(In.envMap.value=Ct,In.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(In.envMapIntensity.value=Z.environmentIntensity),we&&(je.setValue(z,"toneMappingExposure",w.toneMappingExposure),te.needsLights&&Pc(In,Ra),Et&&ot.fog===!0&&vt.refreshFogUniforms(In,Et),vt.refreshMaterialUniforms(In,ot,K,st,y.state.transmissionRenderTarget[R.id]),Rc.upload(z,gs(te),In,oe)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Rc.upload(z,gs(te),In,oe),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&je.setValue(z,"center",Q.center),je.setValue(z,"modelViewMatrix",Q.modelViewMatrix),je.setValue(z,"normalMatrix",Q.normalMatrix),je.setValue(z,"modelMatrix",Q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const nn=ot.uniformsGroups;for(let Ln=0,tr=nn.length;Ln<tr;Ln++){const Ii=nn[Ln];fe.update(Ii,gn),fe.bind(Ii,gn)}}return gn}function Pc(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Cl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,Z,rt){const ot=Bt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Bt.get(R.texture).__webglTexture=Z,Bt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const rt=Bt.get(R);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const mo=z.createFramebuffer();this.setRenderTarget=function(R,Z=0,rt=0){q=R,B=Z,L=rt;let ot=!0,Q=null,Et=!1,Pt=!1;if(R){const Ct=Bt.get(R);if(Ct.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(z.FRAMEBUFFER,null),ot=!1;else if(Ct.__webglFramebuffer===void 0)oe.setupRenderTarget(R);else if(Ct.__hasExternalTextures)oe.rebindTextures(R,Bt.get(R.texture).__webglTexture,Bt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(Ct.__boundDepthTexture!==$t){if($t!==null&&Bt.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const ee=Bt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?Q=ee[Z][rt]:Q=ee[Z],Et=!0):R.samples>0&&oe.useMultisampledRTT(R)===!1?Q=Bt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[rt]:Q=ee,V.copy(R.viewport),at.copy(R.scissor),ut=R.scissorTest}else V.copy(Ht).multiplyScalar(K).floor(),at.copy(re).multiplyScalar(K).floor(),ut=be;if(rt!==0&&(Q=mo),Nt.bindFramebuffer(z.FRAMEBUFFER,Q)&&ot&&Nt.drawBuffers(R,Q),Nt.viewport(V),Nt.scissor(at),Nt.setScissorTest(ut),Et){const Ct=Bt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct.__webglTexture,rt)}else if(Pt){const Ct=Z;for(let Xt=0;Xt<R.textures.length;Xt++){const ee=Bt.get(R.textures[Xt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Xt,ee.__webglTexture,rt,Ct)}}else if(R!==null&&rt!==0){const Ct=Bt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ct.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,Z,rt,ot,Q,Et,Pt,It=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ct=Ct[Pt]),Ct){Nt.bindFramebuffer(z.FRAMEBUFFER,Ct);try{const Xt=R.textures[It],ee=Xt.format,$t=Xt.type;if(!Qt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ot&&rt>=0&&rt<=R.height-Q&&(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It),z.readPixels(Z,rt,ot,Q,jt.convert(ee),jt.convert($t),Et))}finally{const Xt=q!==null?Bt.get(q).__webglFramebuffer:null;Nt.bindFramebuffer(z.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,rt,ot,Q,Et,Pt,It=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ct=Ct[Pt]),Ct)if(Z>=0&&Z<=R.width-ot&&rt>=0&&rt<=R.height-Q){Nt.bindFramebuffer(z.FRAMEBUFFER,Ct);const Xt=R.textures[It],ee=Xt.format,$t=Xt.type;if(!Qt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.bufferData(z.PIXEL_PACK_BUFFER,Et.byteLength,z.STREAM_READ),R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It),z.readPixels(Z,rt,ot,Q,jt.convert(ee),jt.convert($t),0);const Pe=q!==null?Bt.get(q).__webglFramebuffer:null;Nt.bindFramebuffer(z.FRAMEBUFFER,Pe);const Qe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await VE(z,Qe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Et),z.deleteBuffer(Se),z.deleteSync(Qe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,rt=0){const ot=Math.pow(2,-rt),Q=Math.floor(R.image.width*ot),Et=Math.floor(R.image.height*ot),Pt=Z!==null?Z.x:0,It=Z!==null?Z.y:0;oe.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,rt,0,0,Pt,It,Q,Et),Nt.unbindTexture()};const _s=z.createFramebuffer(),zc=z.createFramebuffer();this.copyTextureToTexture=function(R,Z,rt=null,ot=null,Q=0,Et=null){Et===null&&(Q!==0?(_l("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Q,Q=0):Et=0);let Pt,It,Ct,Xt,ee,$t,Se,Pe,Qe;const Ne=R.isCompressedTexture?R.mipmaps[Et]:R.image;if(rt!==null)Pt=rt.max.x-rt.min.x,It=rt.max.y-rt.min.y,Ct=rt.isBox3?rt.max.z-rt.min.z:1,Xt=rt.min.x,ee=rt.min.y,$t=rt.isBox3?rt.min.z:0;else{const ln=Math.pow(2,-Q);Pt=Math.floor(Ne.width*ln),It=Math.floor(Ne.height*ln),R.isDataArrayTexture?Ct=Ne.depth:R.isData3DTexture?Ct=Math.floor(Ne.depth*ln):Ct=1,Xt=0,ee=0,$t=0}ot!==null?(Se=ot.x,Pe=ot.y,Qe=ot.z):(Se=0,Pe=0,Qe=0);const Ce=jt.convert(Z.format),te=jt.convert(Z.type);let Le;Z.isData3DTexture?(oe.setTexture3D(Z,0),Le=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(oe.setTexture2DArray(Z,0),Le=z.TEXTURE_2D_ARRAY):(oe.setTexture2D(Z,0),Le=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const ge=z.getParameter(z.UNPACK_ROW_LENGTH),gn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ti=z.getParameter(z.UNPACK_SKIP_PIXELS),we=z.getParameter(z.UNPACK_SKIP_ROWS),Ra=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ne.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ne.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Xt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$t);const je=R.isDataArrayTexture||R.isData3DTexture,In=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const ln=Bt.get(R),nn=Bt.get(Z),Ln=Bt.get(ln.__renderTarget),tr=Bt.get(nn.__renderTarget);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let Ii=0;Ii<Ct;Ii++)je&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.get(R).__webglTexture,Q,$t+Ii),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.get(Z).__webglTexture,Et,Qe+Ii)),z.blitFramebuffer(Xt,ee,Pt,It,Se,Pe,Pt,It,z.DEPTH_BUFFER_BIT,z.NEAREST);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Bt.has(R)){const ln=Bt.get(R),nn=Bt.get(Z);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,_s),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,zc);for(let Ln=0;Ln<Ct;Ln++)je?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ln.__webglTexture,Q,$t+Ln):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ln.__webglTexture,Q),In?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,Et,Qe+Ln):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,Et),Q!==0?z.blitFramebuffer(Xt,ee,Pt,It,Se,Pe,Pt,It,z.COLOR_BUFFER_BIT,z.NEAREST):In?z.copyTexSubImage3D(Le,Et,Se,Pe,Qe+Ln,Xt,ee,Pt,It):z.copyTexSubImage2D(Le,Et,Se,Pe,Xt,ee,Pt,It);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else In?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Le,Et,Se,Pe,Qe,Pt,It,Ct,Ce,te,Ne.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(Le,Et,Se,Pe,Qe,Pt,It,Ct,Ce,Ne.data):z.texSubImage3D(Le,Et,Se,Pe,Qe,Pt,It,Ct,Ce,te,Ne):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Et,Se,Pe,Pt,It,Ce,te,Ne.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Et,Se,Pe,Ne.width,Ne.height,Ce,Ne.data):z.texSubImage2D(z.TEXTURE_2D,Et,Se,Pe,Pt,It,Ce,te,Ne);z.pixelStorei(z.UNPACK_ROW_LENGTH,ge),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ti),z.pixelStorei(z.UNPACK_SKIP_ROWS,we),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ra),Et===0&&Z.generateMipmaps&&z.generateMipmap(Le),Nt.unbindTexture()},this.initRenderTarget=function(R){Bt.get(R).__webglFramebuffer===void 0&&oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?oe.setTextureCube(R,0):R.isData3DTexture?oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?oe.setTexture2DArray(R,0):oe.setTexture2D(R,0),Nt.unbindTexture()},this.resetState=function(){B=0,L=0,q=null,Nt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const SS={type:"change"},im={type:"start"},ny={type:"end"},_c=new Qp,yS=new rs,fC=Math.cos(70*HE.DEG2RAD),vn=new k,Kn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jd=1e-6;class hC extends RT{constructor(e,i=null){super(e,i),this.state=ke.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:io.ROTATE,MIDDLE:io.DOLLY,RIGHT:io.PAN},this.touches={ONE:eo.ROTATE,TWO:eo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Ks,this._lastTargetPosition=new k,this._quat=new Ks().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wv,this._sphericalDelta=new Wv,this._scale=1,this._panOffset=new k,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new k,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pC.bind(this),this._onPointerDown=dC.bind(this),this._onPointerUp=mC.bind(this),this._onContextMenu=MC.bind(this),this._onMouseWheel=vC.bind(this),this._onKeyDown=SC.bind(this),this._onTouchStart=yC.bind(this),this._onTouchMove=xC.bind(this),this._onMouseDown=gC.bind(this),this._onMouseMove=_C.bind(this),this._interceptControlDown=EC.bind(this),this._interceptControlUp=TC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(SS),this.update(),this.state=ke.NONE}update(e=null){const i=this.object.position;vn.copy(i).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Kn:r>Math.PI&&(r-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),i.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=vn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),f=!!m}else if(this.object.isOrthographicCamera){const d=new k(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=m!==this.object.zoom;const g=new k(this._mouse.x,this._mouse.y,0);g.unproject(this.object),this.object.position.sub(g).add(d),this.object.updateMatrixWorld(),h=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(_c.origin.copy(this.object.position),_c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_c.direction))<fC?this.object.lookAt(this.target):(yS.setFromNormalAndCoplanarPoint(this.object.up,this.target),_c.intersectPlane(yS,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>jd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jd||this._lastTargetPosition.distanceToSquared(this.target)>jd?(this.dispatchEvent(SS),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kn/60*this.autoRotateSpeed*e:Kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){vn.setFromMatrixColumn(i,0),vn.multiplyScalar(-e),this._panOffset.add(vn)}_panUp(e,i){this.screenSpacePanning===!0?vn.setFromMatrixColumn(i,1):(vn.setFromMatrixColumn(i,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(e),this._panOffset.add(vn)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;vn.copy(l).sub(this.target);let f=vn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=e-r.left,f=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),l=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ce,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function dC(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function pC(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function mC(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ny),this.state=ke.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function gC(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case io.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=ke.DOLLY;break;case io.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ke.ROTATE}break;case io.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(im)}function _C(o){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function vC(o){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(o.preventDefault(),this.dispatchEvent(im),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(ny))}function SC(o){this.enabled!==!1&&this._handleKeyDown(o)}function yC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case eo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=ke.TOUCH_ROTATE;break;case eo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case eo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=ke.TOUCH_DOLLY_PAN;break;case eo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(im)}function xC(o){switch(this._trackPointer(o),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=ke.NONE}}function MC(o){this.enabled!==!1&&o.preventDefault()}function EC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function TC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bC(o){const e=o.length,i=new Array(e);for(let m=0;m<e;m++){const g=o[Math.max(m-1,0)],v=o[Math.min(m+1,e-1)];i[m]=v.clone().sub(g).normalize()}const r=i[0],l=Math.abs(r.x)<.9?new k(1,0,0):new k(0,1,0);let f=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),h=r.clone().cross(f).normalize();const d=[{point:o[0],tangent:r,normal:f,binormal:h}];for(let m=1;m<e;m++){const g=d[m-1],v=o[m].clone().sub(o[m-1]),p=v.dot(v);if(p<1e-10){d.push({...g,point:o[m],tangent:i[m]});continue}const S=g.normal.clone().sub(v.clone().multiplyScalar(2/p*v.dot(g.normal))),M=g.tangent.clone().sub(v.clone().multiplyScalar(2/p*v.dot(g.tangent))),b=i[m].clone().sub(M),A=b.dot(b),x=A<1e-10?S:S.clone().sub(b.clone().multiplyScalar(2/A*b.dot(S)));x.normalize();const y=i[m].clone().cross(x).normalize();d.push({point:o[m],tangent:i[m],normal:x,binormal:y})}return d}function hs(o,e,i,r={}){const l=r.radialSegments??8,f=o.getPoints(i),h=bC(f),d=[],m=[],g=[],v=[],p=new k,S=new k;for(let A=0;A<h.length;A++){const x=A/(h.length-1),y=Math.max(e(x),1e-5),{point:P,normal:O,binormal:w}=h[A];for(let F=0;F<=l;F++){const B=F/l*Math.PI*2,L=Math.cos(B),q=Math.sin(B);S.set(0,0,0).addScaledVector(O,L).addScaledVector(w,q).normalize(),p.copy(P).addScaledVector(S,y),d.push(p.x,p.y,p.z),m.push(S.x,S.y,S.z),g.push(F/l,x)}}const M=l+1;for(let A=0;A<h.length-1;A++)for(let x=0;x<l;x++){const y=A*M+x,P=A*M+x+1,O=(A+1)*M+x,w=(A+1)*M+x+1;v.push(y,O,P,P,O,w)}if(r.caps??!0){const A=d.length/3;d.push(f[0].x,f[0].y,f[0].z),m.push(-h[0].tangent.x,-h[0].tangent.y,-h[0].tangent.z),g.push(.5,.5);for(let w=0;w<l;w++)v.push(A,w,w+1);const x=(h.length-1)*M,y=d.length/3,P=f[f.length-1];d.push(P.x,P.y,P.z);const O=h[h.length-1].tangent;m.push(O.x,O.y,O.z),g.push(.5,.5);for(let w=0;w<l;w++)v.push(y,x+w+1,x+w)}const b=new ea;return b.setAttribute("position",new Xn(d,3)),b.setAttribute("normal",new Xn(m,3)),b.setAttribute("uv",new Xn(g,2)),b.setIndex(v),b}function Js(o,e){return i=>o+(e-o)*i}function AC(o,e){return i=>{const r=Math.sin(Math.PI*i);return o+(e-o)*r}}function iy(o){const{length:e,maxWidth:i,widthPeakT:r=.55,foldDepth:l=.06,droop:f=.08,lengthSegments:h=12,widthSegments:d=6}=o,m=[],g=[],v=[],p=b=>{const A=b<r?b/r:(1-b)/(1-r);return i*Math.max(A,0)**.7};for(let b=0;b<=h;b++){const A=b/h,x=p(A),y=f*e*A*A;for(let P=0;P<=d;P++){const O=P/d*2-1,w=O*x,B=l*i*(1-O*O)-y,L=A*e;m.push(w,B,L),g.push(P/d,A)}}const S=d+1;for(let b=0;b<h;b++)for(let A=0;A<d;A++){const x=b*S+A,y=b*S+A+1,P=(b+1)*S+A,O=(b+1)*S+A+1;v.push(x,P,y,y,P,O)}const M=new ea;return M.setAttribute("position",new Xn(m,3)),M.setAttribute("uv",new Xn(g,2)),M.setIndex(v),M.computeVertexNormals(),M}const RC={sourceName:"Col-0",compactness:.6637,roundness:88.22,eccentricity:.0577,relativeAreaVsCol0:1,n:60},CC={sourceName:"Ler-0",compactness:.7617,roundness:55.6,eccentricity:.0755,relativeAreaVsCol0:1.258,n:60},wC={sourceName:"WS-0",compactness:.6729,roundness:90.66,eccentricity:.0547,relativeAreaVsCol0:1.56,n:60},DC={sourceName:"Tsu-0",compactness:.6106,roundness:112.84,eccentricity:.0402,relativeAreaVsCol0:1.466,n:60},UC={sourceName:"EDi-0",compactness:.6517,roundness:104.32,eccentricity:.0547,relativeAreaVsCol0:1.775,n:60},NC={col0:RC,ler:CC,ws:wC,tsu0:DC,edi0:UC},Zd="https://figshare.com/s/e18a978267675059578f";function Tl(o){const e=NC[o];return{compactness:e.compactness,radiusScale:Math.sqrt(e.relativeAreaVsCol0),sourceName:e.sourceName}}const fl=Tl("col0"),vc=Tl("ler"),Sc=Tl("ws"),yc=Tl("tsu0"),xc=Tl("edi0"),Hp=[{id:"col0",label:"Col-0 (Columbia)",sourceName:fl.sourceName,rosetteLeafCount:12,rosetteCompactness:fl.compactness,rosetteRadiusScale:fl.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${fl.compactness} (n=60 images, Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"ERECTA (ER) wild-type reference background (Torii et al. 1996)",citationKey:"Torii1996"},leaf:{value:"Reference/baseline leaf count in this project; not itself drawn from a comparative count study",citationKey:"none"}},referencePhoto:{url:Zd,citationKey:"Namin2018"}},{id:"ler",label:"Ler (Landsberg erecta)",sourceName:vc.sourceName,rosetteLeafCount:12,rosetteCompactness:vc.compactness,rosetteRadiusScale:vc.radiusScale,pedicelLengthScale:1/2.6,siliqueBluntness:.9,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${vc.compactness} (n=60), the highest of the 5 ecotypes measured here (Camargo et al. 2014) -- independently consistent with Ler's known compact habit`,citationKey:"Camargo2014"},pedicel:{value:'Ler carries the natural `er` mutation (Torii et al. 1996: "compact inflorescence, blunt fruits, and short petioles"). Quantitative proxy from Bundy et al. 2012: mature wild-type pedicel 7.90±0.14mm vs. induced er-105 mutant ~2.6x shorter -- that number is for er-105 in a Columbia background, not a direct field measurement of natural Ler vs. Col, and is used here as the best available quantitative proxy for what the mutation does.',citationKey:"Bundy2012"},leaf:{value:"Coneva & Chitwood 2018 report Cvi has ~2 more leaves than Ler in long days -- Ler itself is this comparison's baseline, not independently varied here",citationKey:"Coneva2018"}},referencePhoto:{url:Zd,citationKey:"Namin2018"}},{id:"ws",label:"Ws (Wassilewskija)",sourceName:Sc.sourceName,rosetteLeafCount:12,rosetteCompactness:Sc.compactness,rosetteRadiusScale:Sc.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${Sc.compactness} (n=60, Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"ERECTA (ER) wild-type background (Torii et al. 1996 separately isolated induced er alleles from Wassilewskija, implying the natural Ws accession is itself ER)",citationKey:"Torii1996"},leaf:{value:"No dedicated leaf-count comparison found for Ws in the sources used here",citationKey:"none"}},referencePhoto:null},{id:"cvi0",label:"Cvi-0 (Cape Verde Islands)",sourceName:"Cvi-0",rosetteLeafCount:14,rosetteCompactness:fl.compactness,rosetteRadiusScale:1,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1.25,provenance:{compactness:{value:"No rosette-compactness measurement found for Cvi-0 (it is not one of the 19 MAGIC founders in the Camargo et al. 2014 dataset used here) -- defaulted to the Col-0 value rather than estimated",citationKey:"none"},pedicel:{value:"No ERECTA-specific data found for Cvi-0; assumed ER wild-type by default (most non-Landsberg accessions are), not directly confirmed",citationKey:"none"},leaf:{value:"Real: Coneva & Chitwood 2018 report Cvi makes ~2 more leaves than Ler in long-day conditions, is thicker-leaved, and grows more slowly. Leaf-count and thickness reflect this; the thickness multiplier (1.25x) is an illustrative choice, not a value read directly from the paper's figures.",citationKey:"Coneva2018"}},referencePhoto:{url:Zd,citationKey:"Namin2018"}},{id:"tsu0",label:"Tsu-0 (Tsu)",sourceName:yc.sourceName,rosetteLeafCount:12,rosetteCompactness:yc.compactness,rosetteRadiusScale:yc.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${yc.compactness} (n=60), the lowest of the 5 ecotypes measured here (Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"No ERECTA-specific data found for Tsu-0; assumed ER wild-type by default, not directly confirmed",citationKey:"none"},leaf:{value:"No dedicated leaf-count comparison found for Tsu-0 in the sources used here",citationKey:"none"}},referencePhoto:null},{id:"edi0",label:"Edi-0 (Edinburgh)",sourceName:xc.sourceName,rosetteLeafCount:12,rosetteCompactness:xc.compactness,rosetteRadiusScale:xc.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${xc.compactness} (n=60, Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"No ERECTA-specific data found for Edi-0; assumed ER wild-type by default, not directly confirmed",citationKey:"none"},leaf:{value:"No dedicated leaf-count comparison found for Edi-0 in the sources used here",citationKey:"none"}},referencePhoto:null}],Oc=Hp[0],ay=137.5*(Math.PI/180);function bl(o,e){return o.userData.organId=e,o.traverse(i=>i.userData.organId=e),o}const LC=new fo({color:4881471,roughness:.85,side:Qn}),vl=new fo({color:7048266,roughness:.8,side:Qn}),xS=new fo({color:14271626,roughness:.9,side:Qn}),OC=new fo({color:16119280,roughness:.6,side:Qn}),PC=new fo({color:9083466,roughness:.75,side:Qn});function ds(o){return new vT(o,!1,"catmullrom",.5)}function zC(o){const e=new Ti,i=[new k(0,0,0),new k(.05,-.9,.03),new k(-.03,-1.9,-.02),new k(.02,-2.9,.01),new k(0,-3.2,0)],r=hs(ds(i),Js(.05,.008),24,{radialSegments:8});e.add(new pn(r,xS));const l=10;for(let f=0;f<l;f++){const h=.4+f/l*2.6,d=(.5+Math.random()*.4)*(.85+.3*o.rosetteCompactness),m=f%2===0?1:-1,g=.9+Math.random()*.3,v=new k(0,-h,0),p=v.clone().add(new k(m*Math.cos(g)*d,-d*.25,m*Math.sin(g)*d*.6)),S=v.clone().lerp(p,.5).add(new k(0,-.05,0)),M=hs(ds([v,S,p]),Js(.012,.003),6,{radialSegments:6});e.add(new pn(M,xS))}return bl(e,"root")}function IC(o){const e=new Ti,i=o.rosetteLeafCount;for(let r=0;r<i;r++){const l=r*ay,f=.35+.5*(r/i),h=.55*f*o.rosetteRadiusScale,d=.35*f*o.rosetteRadiusScale,m=new pn(iy({length:h,maxWidth:d,foldDepth:.05*o.leafThicknessScale}),LC),g=.1+.1*f,v=new pn(hs(ds([new k(0,0,0),new k(0,.01,g)]),Js(.012,.02),4,{radialSegments:6}),vl),p=new Ti;m.position.z=g,p.add(v,m);const S=(.1+.3*f)*o.rosetteRadiusScale*(1-.3*o.rosetteCompactness),M=.15+.9*o.rosetteCompactness;p.position.set(Math.cos(l)*S*.3,.02*r,Math.sin(l)*S*.3),p.rotation.y=-l,p.rotation.x=-M,e.add(p)}return bl(e,"rosette_leaf")}function BC(o){const e=[new k(0,0,0),new k(-.02,o*.4,.01),new k(.015,o*.75,-.01),new k(0,o,0)],i=hs(ds(e),Js(.05,.02),20,{radialSegments:8});return bl(new pn(i,vl),"inflorescence_axis")}function FC(o){const e=new Ti,i=new pn(hs(ds([new k(0,0,0),new k(0,0,o)]),Js(.012,.008),4,{radialSegments:6}),vl);e.add(i);const r=new Ti;r.position.z=o;const l=4;for(let h=0;h<l;h++){const d=new pn(iy({length:.09,maxWidth:.045,widthPeakT:.7,foldDepth:.15,lengthSegments:4,widthSegments:4}),OC),m=h/l*Math.PI*2;d.position.set(Math.cos(m)*.01,Math.sin(m)*.01,0),d.rotation.z=m,d.rotation.x=-Math.PI/2+.3,r.add(d)}const f=new pn(hs(ds([new k(0,0,0),new k(0,0,.15)]),Js(.02,.015),4,{radialSegments:6}),vl);return r.add(f),e.add(r),bl(e,"flower")}function HC(o,e){const i=new Ti,r=new pn(hs(ds([new k(0,0,0),new k(0,0,o)]),Js(.014,.01),4,{radialSegments:6}),vl);i.add(r);const l=.55,f=.025*(.3+.7*e),h=hs(ds([new k(0,0,o),new k(0,0,o+l)]),AC(f,.028),8,{radialSegments:8});return i.add(new pn(h,PC)),bl(i,"silique")}function GC(o,e){const i=new Ti,r=9;for(let l=0;l<r;l++){const f=l/(r-1),h=o*(.35+.6*f),d=l*ay,m=.05,g=new k(Math.cos(d)*m,h,Math.sin(d)*m),v=.18*e.pedicelLengthScale;let p;f>.75?p=FC(v):(p=HC(v,e.siliqueBluntness),p.rotation.x=Math.PI/2+(Math.random()-.5)*.3),p.position.copy(g),p.rotation.y+=d,i.add(p)}return i}function MS(o=Oc){const e=new Ti,i=2.4;return e.add(zC(o)),e.add(IC(o)),e.add(BC(i)),e.add(GC(i,o)),e}function ES(o){o.traverse(e=>{const i=e;i.geometry&&i.geometry.dispose()})}function VC(o){let e=o;for(;e;){if(e.userData.organId)return e.userData.organId;e=e.parent}return null}function XC(o,e){const i=new dT;i.background=new Re(988176);const r=new Ei(45,1,.01,1e3);r.position.set(4,3,4);const l=new cC({antialias:!0});l.setPixelRatio(Math.min(devicePixelRatio,2)),o.appendChild(l.domElement),i.add(new xT(16777215,3158826,1.1));const f=new TT(16777215,1.6);f.position.set(3,6,4),i.add(f);const h=new pn(new tm(3,32),new fo({color:2827287,roughness:1}));h.rotation.x=-Math.PI/2,h.position.y=-.01,i.add(h);let d=MS(Oc);i.add(d);const m=new hC(r,l.domElement);m.enableDamping=!0,m.target.set(0,.8,0),m.update();const g=new AT,v=new ce;let p=[];const S=new Map;function M(){for(const w of p){const F=w,B=F.material,L=S.get(F);B&&L&&(B.emissive=L)}p=[]}function b(w){M(),d.traverse(F=>{if(F.userData.organId===w&&F.isMesh){const B=F,L=B.material;L&&L.emissive&&(S.has(B)||S.set(B,L.emissive.clone()),L.emissive=new Re(3108175),p.push(B))}})}function A(w){const F=l.domElement.getBoundingClientRect();v.x=(w.clientX-F.left)/F.width*2-1,v.y=-((w.clientY-F.top)/F.height)*2+1,g.setFromCamera(v,r);const B=g.intersectObject(d,!0),L=B.length>0?VC(B[0].object):null;L?b(L):M(),e(L)}l.domElement.addEventListener("click",A);let x=0;const y=()=>{x=requestAnimationFrame(y),m.update(),l.render(i,r)};y();const P=()=>{const w=o.clientWidth||1,F=o.clientHeight||1;l.setSize(w,F),r.aspect=w/F,r.updateProjectionMatrix()};P();const O=new ResizeObserver(P);return O.observe(o),{setEcotype(w){M(),i.remove(d),ES(d),d=MS(w),i.add(d),e(null)},dispose(){cancelAnimationFrame(x),O.disconnect(),l.domElement.removeEventListener("click",A),ES(d),m.dispose(),l.dispose(),l.domElement.remove()}}}const kC={"OSD-120":{organism_part:"root",comparison:"Spaceflight vs. ground control (Day 13 root, GLDS/OSD-120)",n_genes_total:32833,top_upregulated:[{gene_id:"AT2G01422",log2fc:4.751},{gene_id:"AT2G05510",log2fc:4.645},{gene_id:"AT5G19890",log2fc:3.911},{gene_id:"AT2G26400",log2fc:2.714},{gene_id:"AT2G34317",log2fc:2.557},{gene_id:"AT2G30670",log2fc:2.504},{gene_id:"AT2G43920",log2fc:2.465},{gene_id:"AT4G11650",log2fc:2.411}],top_downregulated:[{gene_id:"AT5G13930",log2fc:-5.27},{gene_id:"AT5G09570",log2fc:-4.253},{gene_id:"AT3G51240",log2fc:-3.024},{gene_id:"AT5G33355",log2fc:-2.759},{gene_id:"AT2G04050",log2fc:-2.587},{gene_id:"AT3G30720",log2fc:-2.387},{gene_id:"AT2G21640",log2fc:-2.384},{gene_id:"AT1G01060",log2fc:-2.322}],source_file:"data/processed/OSD-120_root_flight_vs_ground_log2fc.csv"},"OSD-314":{organism_part:"whole seedling",comparison:"Microgravity (0g) vs. 1g ground control, whole seedling (OSD-314)",n_genes_total:32833,top_upregulated:[{gene_id:"AT4G28520",log2fc:5.543},{gene_id:"AT5G44120",log2fc:5.536},{gene_id:"AT1G73190",log2fc:5.527},{gene_id:"AT5G40420",log2fc:5.407},{gene_id:"ATCG00040",log2fc:4.739},{gene_id:"AT4G25140",log2fc:4.693},{gene_id:"AT3G54940",log2fc:4.684},{gene_id:"AT2G28490",log2fc:4.533}],top_downregulated:[{gene_id:"AT2G32810",log2fc:-4.873},{gene_id:"AT3G01345",log2fc:-4.445},{gene_id:"AT1G53480",log2fc:-4.437},{gene_id:"AT4G17090",log2fc:-4.174},{gene_id:"AT3G05727",log2fc:-4.08},{gene_id:"AT2G30750",log2fc:-3.878},{gene_id:"AT3G45140",log2fc:-3.76},{gene_id:"AT3G05730",log2fc:-3.694}],source_file:"data/processed/OSD-314_seedling_microgravity_vs_1g_log2fc.csv"}};function sy(o){const e=kC[o];return{studyId:o,comparison:e.comparison,nGenesTotal:e.n_genes_total,topUpregulated:e.top_upregulated,topDownregulated:e.top_downregulated,sourceFile:e.source_file}}const qC=[{id:"root",label:"Root system",travaCategory:"Root (root apex / root without apex)",geometryNote:"Branching pattern and primary/lateral proportions follow the single-cell root developmental atlas, not a scan of a specimen.",geometryCitations:["Shahan2022"],spaceflight:sy("OSD-120")},{id:"rosette_leaf",label:"Rosette leaf",travaCategory:"Third leaf (petiole / leaf blade / central vein)",geometryNote:"Leaf arrangement uses the ~137.5° golden-angle phyllotaxy widely reported for Arabidopsis rosettes; blade shape is a simplified obovate approximation, not a scan.",geometryCitations:[],spaceflight:null,spaceflightCaveat:"OSD-314 profiled whole seedlings, not dissected rosette leaves -- shown on Root only, where the tissue match is exact."},{id:"inflorescence_axis",label:"Inflorescence axis",travaCategory:"Axes (peduncles / inflorescence axis / internode)",geometryNote:"Simplified tapering-cylinder approximation of the bolting stem; proportions are illustrative, not measured.",geometryCitations:[],spaceflight:null},{id:"flower",label:"Flower",travaCategory:"Flower / Flower part (sepals, anthers, carpels, ovules, stigmatic tissue)",geometryNote:"Whorl arrangement (sepals/petals/stamens/carpels) is schematic; internal carpel/ovule proportions are informed by the digital 3D ovule-development atlas.",geometryCitations:["Vijayan2021"],spaceflight:null},{id:"silique",label:"Silique",travaCategory:"Silique development",geometryNote:"Elongated bicarpellate capsule approximation; internal seed-row layout informed by the same ovule-development atlas used for the flower.",geometryCitations:["Vijayan2021"],spaceflight:null}],YC=sy("OSD-314"),ry="https://travadb.org",WC=o=>`https://osdr.nasa.gov/bio/repo/data/studies/${o}`;function TS({title:o,genes:e}){return Kt.jsxs("div",{className:"gene-panel",children:[Kt.jsx("h4",{children:o}),Kt.jsx("ul",{children:e.map(i=>Kt.jsxs("li",{children:[Kt.jsx("a",{href:`${ry}`,target:"_blank",rel:"noreferrer",title:"Look this locus up on TraVA",children:i.gene_id}),Kt.jsxs("span",{className:i.log2fc>=0?"up":"down",children:[i.log2fc>0?"+":"",i.log2fc.toFixed(2)]})]},i.gene_id))})]})}function jC({organ:o}){return Kt.jsxs("div",{className:"organ-info",children:[Kt.jsx("h2",{children:o.label}),Kt.jsxs("p",{className:"trava-category",children:["TraVA category: ",Kt.jsx("em",{children:o.travaCategory})," —"," ",Kt.jsx("a",{href:ry,target:"_blank",rel:"noreferrer",children:"browse real developmental expression on TraVA →"})]}),Kt.jsx("p",{className:"geometry-note",children:o.geometryNote}),o.geometryCitations.length>0&&Kt.jsxs("p",{className:"citations",children:["Geometry citations: ",o.geometryCitations.join(", ")]}),o.spaceflight?Kt.jsxs("div",{className:"spaceflight-block",children:[Kt.jsxs("h3",{children:["Real spaceflight response — ",o.spaceflight.studyId]}),Kt.jsx("p",{children:o.spaceflight.comparison}),Kt.jsxs("p",{className:"n-genes",children:[o.spaceflight.nGenesTotal.toLocaleString()," genes quantified. Log2 fold-change is a raw mean-CPM ratio, not a statistically tested DE call (no DESeq2, no p-values) — see methods."]}),Kt.jsxs("div",{className:"gene-panels",children:[Kt.jsx(TS,{title:"Highest flight/ground ratio",genes:o.spaceflight.topUpregulated}),Kt.jsx(TS,{title:"Lowest flight/ground ratio",genes:o.spaceflight.topDownregulated})]}),Kt.jsxs("p",{className:"source-link",children:["Source: ",Kt.jsx("code",{children:o.spaceflight.sourceFile})," ·"," ",Kt.jsxs("a",{href:WC(o.spaceflight.studyId),target:"_blank",rel:"noreferrer",children:[o.spaceflight.studyId," on NASA OSDR ↗"]})]})]}):Kt.jsxs("p",{className:"no-spaceflight",children:["No organ-specific spaceflight dataset is wired up for this organ yet.",o.spaceflightCaveat?` ${o.spaceflightCaveat}`:""]})]})}function ZC({value:o,onChange:e}){return Kt.jsxs("div",{className:"ecotype-picker",children:[Kt.jsx("label",{htmlFor:"ecotype-select",children:"Ecotype"}),Kt.jsx("select",{id:"ecotype-select",value:o.id,onChange:i=>e(Hp.find(r=>r.id===i.target.value)??Oc),children:Hp.map(i=>Kt.jsx("option",{value:i.id,children:i.label},i.id))})]})}function KC({ecotype:o}){return Kt.jsxs("div",{className:"ecotype-info",children:[Kt.jsx("h3",{children:o.label}),Kt.jsxs("p",{className:"source-name",children:["Source accession id: ",Kt.jsx("code",{children:o.sourceName})]}),Kt.jsxs("dl",{children:[Kt.jsx("dt",{children:"Rosette compactness"}),Kt.jsx("dd",{children:o.provenance.compactness.value}),Kt.jsx("dt",{children:"Inflorescence / pedicel"}),Kt.jsx("dd",{children:o.provenance.pedicel.value}),Kt.jsx("dt",{children:"Leaf count / thickness"}),Kt.jsx("dd",{children:o.provenance.leaf.value})]}),o.referencePhoto&&Kt.jsx("p",{className:"reference-photo",children:Kt.jsx("a",{href:o.referencePhoto.url,target:"_blank",rel:"noreferrer",children:"Real accession-labeled reference photos (Namin et al. 2018, CC BY 4.0) ↗"})})]})}function QC(){const o=to.useRef(null),e=to.useRef(null),[i,r]=to.useState(null),[l,f]=to.useState(Oc);to.useEffect(()=>{if(!o.current)return;const m=XC(o.current,r);return e.current=m,()=>{e.current=null,m.dispose()}},[]);const h=m=>{var g;f(m),r(null),(g=e.current)==null||g.setEcotype(m)},d=qC.find(m=>m.id===i)??null;return Kt.jsxs("div",{className:"app",children:[Kt.jsxs("header",{className:"app-header",children:[Kt.jsx("h1",{children:"Arabidopsis Atlas"}),Kt.jsxs("p",{children:["Click an organ to explore it. Started from"," ",Kt.jsx("a",{href:"https://github.com/dr-richard-barker/rice-atlas",target:"_blank",rel:"noreferrer",children:"rice-atlas"})," ","— see the ",Kt.jsx("a",{href:"https://github.com/dr-richard-barker/arabidopsis-atlas#readme",target:"_blank",rel:"noreferrer",children:"README"})," for what's actually real data here vs. simplified geometry."]}),Kt.jsx(ZC,{value:l,onChange:h})]}),Kt.jsxs("div",{className:"app-body",children:[Kt.jsx("div",{className:"viewer-container",ref:o}),Kt.jsxs("aside",{className:"sidebar",children:[Kt.jsx(KC,{ecotype:l}),d?Kt.jsx(jC,{organ:d}):Kt.jsxs("div",{className:"welcome",children:[Kt.jsx("p",{children:"No organ selected. Click any part of the plant."}),Kt.jsxs("p",{className:"hint",children:["Whole-seedling spaceflight coverage (",YC.studyId,", real data, not organ-specific) is documented in ",Kt.jsx("code",{children:"data/README.md"})," rather than shown here, since it isn't tissue-specific."]})]})]})]})]})}QM.createRoot(document.getElementById("root")).render(Kt.jsx(to.StrictMode,{children:Kt.jsx(QC,{})}));
