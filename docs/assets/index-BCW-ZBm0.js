(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var cd={exports:{}},sl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function qM(){if(fv)return sl;fv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var d in l)d!=="key"&&(f[d]=l[d])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:f}}return sl.Fragment=e,sl.jsx=i,sl.jsxs=i,sl}var hv;function YM(){return hv||(hv=1,cd.exports=qM()),cd.exports}var Zt=YM(),fd={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function WM(){if(dv)return le;dv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),x=Symbol.iterator;function T(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function P(I,ct,$){this.props=I,this.context=ct,this.refs=y,this.updater=$||A}P.prototype.isReactComponent={},P.prototype.setState=function(I,ct){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ct,"setState")},P.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function O(){}O.prototype=P.prototype;function w(I,ct,$){this.props=I,this.context=ct,this.refs=y,this.updater=$||A}var F=w.prototype=new O;F.constructor=w,M(F,P.prototype),F.isPureReactComponent=!0;var B=Array.isArray;function L(){}var q={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function C(I,ct,$){var it=$.ref;return{$$typeof:o,type:I,key:ct,ref:it!==void 0?it:null,props:$}}function V(I,ct){return C(I.type,ct,I.props)}function at(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function ut(I){var ct={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function($){return ct[$]})}var gt=/\/+/g;function lt(I,ct){return typeof I=="object"&&I!==null&&I.key!=null?ut(""+I.key):ct.toString(36)}function j(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(ct){I.status==="pending"&&(I.status="fulfilled",I.value=ct)},function(ct){I.status==="pending"&&(I.status="rejected",I.reason=ct)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function st(I,ct,$,it,xt){var Ut=typeof I;(Ut==="undefined"||Ut==="boolean")&&(I=null);var At=!1;if(I===null)At=!0;else switch(Ut){case"bigint":case"string":case"number":At=!0;break;case"object":switch(I.$$typeof){case o:case e:At=!0;break;case v:return At=I._init,st(At(I._payload),ct,$,it,xt)}}if(At)return xt=xt(I),At=it===""?"."+lt(I,0):it,B(xt)?($="",At!=null&&($=At.replace(gt,"$&/")+"/"),st(xt,ct,$,"",function(z){return z})):xt!=null&&(at(xt)&&(xt=V(xt,$+(xt.key==null||I&&I.key===xt.key?"":(""+xt.key).replace(gt,"$&/")+"/")+At)),ct.push(xt)),1;At=0;var Mt=it===""?".":it+":";if(B(I))for(var qt=0;qt<I.length;qt++)it=I[qt],Ut=Mt+lt(it,qt),At+=st(it,ct,$,Ut,xt);else if(qt=T(I),typeof qt=="function")for(I=qt.call(I),qt=0;!(it=I.next()).done;)it=it.value,Ut=Mt+lt(it,qt++),At+=st(it,ct,$,Ut,xt);else if(Ut==="object"){if(typeof I.then=="function")return st(j(I),ct,$,it,xt);throw ct=String(I),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return At}function K(I,ct,$){if(I==null)return I;var it=[],xt=0;return st(I,it,"","",function(Ut){return ct.call($,Ut,xt++)}),it}function _t(I){if(I._status===-1){var ct=I._result,$=ct();$.then(function(it){(I._status===0||I._status===-1)&&(I._status=1,I._result=it,$.status===void 0&&($.status="fulfilled",$.value=it))},function(it){(I._status===0||I._status===-1)&&(I._status=2,I._result=it,$.status===void 0&&($.status="rejected",$.reason=it))}),I._status===-1&&(I._status=0,I._result=$)}if(I._status===1)return I._result.default;throw I._result}var St=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Ht(I){var ct=q.T,$={};$.types=ct!==null?ct.types:null,q.T=$;try{var it=I(),xt=q.S;xt!==null&&xt($,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(L,St)}catch(Ut){St(Ut)}finally{ct!==null&&$.types!==null&&(ct.types=$.types),q.T=ct}}function re(I){var ct=q.T;if(ct!==null){var $=ct.types;$===null?ct.types=[I]:$.indexOf(I)===-1&&$.push(I)}else Ht(re.bind(null,I))}var be={map:K,forEach:function(I,ct,$){K(I,function(){ct.apply(this,arguments)},$)},count:function(I){var ct=0;return K(I,function(){ct++}),ct},toArray:function(I){return K(I,function(ct){return ct})||[]},only:function(I){if(!at(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return le.Activity=g,le.Children=be,le.Component=P,le.Fragment=i,le.Profiler=l,le.PureComponent=w,le.StrictMode=r,le.Suspense=p,le.ViewTransition=S,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,le.__COMPILER_RUNTIME={__proto__:null,c:function(I){return q.H.useMemoCache(I)}},le.addTransitionType=re,le.cache=function(I){return function(){return I.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(I,ct,$){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var it=M({},I.props),xt=I.key;if(ct!=null)for(Ut in ct.key!==void 0&&(xt=""+ct.key),ct)!D.call(ct,Ut)||Ut==="key"||Ut==="__self"||Ut==="__source"||Ut==="ref"&&ct.ref===void 0||(it[Ut]=ct[Ut]);var Ut=arguments.length-2;if(Ut===1)it.children=$;else if(1<Ut){for(var At=Array(Ut),Mt=0;Mt<Ut;Mt++)At[Mt]=arguments[Mt+2];it.children=At}return C(I.type,xt,it)},le.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:f,_context:I},I},le.createElement=function(I,ct,$){var it,xt={},Ut=null;if(ct!=null)for(it in ct.key!==void 0&&(Ut=""+ct.key),ct)D.call(ct,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(xt[it]=ct[it]);var At=arguments.length-2;if(At===1)xt.children=$;else if(1<At){for(var Mt=Array(At),qt=0;qt<At;qt++)Mt[qt]=arguments[qt+2];xt.children=Mt}if(I&&I.defaultProps)for(it in At=I.defaultProps,At)xt[it]===void 0&&(xt[it]=At[it]);return C(I,Ut,xt)},le.createRef=function(){return{current:null}},le.forwardRef=function(I){return{$$typeof:d,render:I}},le.isValidElement=at,le.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:_t}},le.memo=function(I,ct){return{$$typeof:m,type:I,compare:ct===void 0?null:ct}},le.startTransition=Ht,le.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},le.use=function(I){return q.H.use(I)},le.useActionState=function(I,ct,$){return q.H.useActionState(I,ct,$)},le.useCallback=function(I,ct){return q.H.useCallback(I,ct)},le.useContext=function(I){return q.H.useContext(I)},le.useDebugValue=function(){},le.useDeferredValue=function(I,ct){return q.H.useDeferredValue(I,ct)},le.useEffect=function(I,ct){return q.H.useEffect(I,ct)},le.useEffectEvent=function(I){return q.H.useEffectEvent(I)},le.useId=function(){return q.H.useId()},le.useImperativeHandle=function(I,ct,$){return q.H.useImperativeHandle(I,ct,$)},le.useInsertionEffect=function(I,ct){return q.H.useInsertionEffect(I,ct)},le.useLayoutEffect=function(I,ct){return q.H.useLayoutEffect(I,ct)},le.useMemo=function(I,ct){return q.H.useMemo(I,ct)},le.useOptimistic=function(I,ct){return q.H.useOptimistic(I,ct)},le.useReducer=function(I,ct,$){return q.H.useReducer(I,ct,$)},le.useRef=function(I){return q.H.useRef(I)},le.useState=function(I){return q.H.useState(I)},le.useSyncExternalStore=function(I,ct,$){return q.H.useSyncExternalStore(I,ct,$)},le.useTransition=function(){return q.H.useTransition()},le.version="19.3.0",le}var pv;function Xp(){return pv||(pv=1,fd.exports=WM()),fd.exports}var eo=Xp(),hd={exports:{}},rl={},dd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function jM(){return mv||(mv=1,(function(o){function e(j,st){var K=j.length;j.push(st);t:for(;0<K;){var _t=K-1>>>1,St=j[_t];if(0<l(St,st))j[_t]=st,j[K]=St,K=_t;else break t}}function i(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var st=j[0],K=j.pop();if(K!==st){j[0]=K;t:for(var _t=0,St=j.length,Ht=St>>>1;_t<Ht;){var re=2*(_t+1)-1,be=j[re],I=re+1,ct=j[I];if(0>l(be,K))I<St&&0>l(ct,be)?(j[_t]=ct,j[I]=K,_t=I):(j[_t]=be,j[re]=K,_t=re);else if(I<St&&0>l(ct,K))j[_t]=ct,j[I]=K,_t=I;else break t}}return st}function l(j,st){var K=j.sortIndex-st.sortIndex;return K!==0?K:j.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],v=1,g=null,S=3,x=!1,T=!1,A=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function w(j){for(var st=i(m);st!==null;){if(st.callback===null)r(m);else if(st.startTime<=j)r(m),st.sortIndex=st.expirationTime,e(p,st);else break;st=i(m)}}function F(j){if(A=!1,w(j),!T)if(i(p)!==null)T=!0,B||(B=!0,at());else{var st=i(m);st!==null&&lt(F,st.startTime-j)}}var B=!1,L=-1,q=5,D=-1;function C(){return M?!0:!(o.unstable_now()-D<q)}function V(){if(M=!1,B){var j=o.unstable_now();D=j;var st=!0;try{t:{T=!1,A&&(A=!1,P(L),L=-1),x=!0;var K=S;try{e:{for(w(j),g=i(p);g!==null&&!(g.expirationTime>j&&C());){var _t=g.callback;if(typeof _t=="function"){g.callback=null,S=g.priorityLevel;var St=_t(g.expirationTime<=j);if(j=o.unstable_now(),typeof St=="function"){g.callback=St,w(j),st=!0;break e}g===i(p)&&r(p),w(j)}else r(p);g=i(p)}if(g!==null)st=!0;else{var Ht=i(m);Ht!==null&&lt(F,Ht.startTime-j),st=!1}}break t}finally{g=null,S=K,x=!1}st=void 0}}finally{st?at():B=!1}}}var at;if(typeof O=="function")at=function(){O(V)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,gt=ut.port2;ut.port1.onmessage=V,at=function(){gt.postMessage(null)}}else at=function(){y(V,0)};function lt(j,st){L=y(function(){j(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(j){j.callback=null},o.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<j?Math.floor(1e3/j):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(j){switch(S){case 1:case 2:case 3:var st=3;break;default:st=S}var K=S;S=st;try{return j()}finally{S=K}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(j,st){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=S;S=j;try{return st()}finally{S=K}},o.unstable_scheduleCallback=function(j,st,K){var _t=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?_t+K:_t):K=_t,j){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=K+St,j={id:v++,callback:st,priorityLevel:j,startTime:K,expirationTime:St,sortIndex:-1},K>_t?(j.sortIndex=K,e(m,j),i(p)===null&&j===i(m)&&(A?(P(L),L=-1):A=!0,lt(F,K-_t))):(j.sortIndex=St,e(p,j),T||x||(T=!0,B||(B=!0,at()))),j},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(j){var st=S;return function(){var K=S;S=st;try{return j.apply(this,arguments)}finally{S=K}}}})(pd)),pd}var gv;function ZM(){return gv||(gv=1,dd.exports=jM()),dd.exports}var md={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function KM(){if(_v)return wn;_v=1;var o=Xp();function e(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,g,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:x===h?h:""+x,children:v,containerInfo:g,implementation:S}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.browser=function(v){return{$$typeof:f,_reason:v}},wn.createPortal=function(v,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(v,g,null,S)},wn.flushSync=function(v){var g=p.T,S=r.p;try{if(p.T=null,r.p=2,v)return v()}finally{p.T=g,r.p=S,r.d.f()}},wn.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(v,g))},wn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},wn.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var S=g.as,x=m(S,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?r.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:T,fetchPriority:A}):S==="script"&&r.d.X(v,{crossOrigin:x,integrity:T,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},wn.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=m(g.as,g.crossOrigin);r.d.M(v,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(v)},wn.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,x=m(S,g.crossOrigin);r.d.L(v,S,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},wn.preloadModule=function(v,g){if(typeof v=="string")if(g){var S=m(g.as,g.crossOrigin);r.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(v)},wn.requestFormReset=function(v){r.d.r(v)},wn.unstable_batchedUpdates=function(v,g){return v(g)},wn.useFormState=function(v,g,S){return p.H.useFormState(v,g,S)},wn.useFormStatus=function(){return p.H.useHostTransitionStatus()},wn.version="19.3.0",wn}var vv;function QM(){if(vv)return md.exports;vv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),md.exports=KM(),md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function JM(){if(Sv)return rl;Sv=1;var o=ZM(),e=Xp(),i=QM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return p(u),t;if(c===s)return p(u),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=c;else{for(var _=!1,E=u.child;E;){if(E===a){_=!0,a=u,s=c;break}if(E===s){_=!0,s=u,a=c;break}E=E.sibling}if(!_){for(E=c.child;E;){if(E===a){_=!0,a=c,s=u;break}if(E===s){_=!0,s=c,a=u;break}E=E.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,s,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,s,u,c))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function x(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function T(t){var n=[null,null],a=S(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var y=null,P=null;function O(t,n,a){return t===a?!0:t===n?(y=t,!0):!1}function w(t,n,a){return t===a?(P=t,!1):t===n?(P!==null&&(y=t),!0):!1}function F(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function B(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var c=n;c;c=a(c))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var L=Object.assign,q=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),gt=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Ht=Symbol.for("react.activity"),re=Symbol.for("react.legacy_hidden"),be=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),ct=Symbol.for("react.recoverable"),$=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Symbol.for("react.client.reference");function Ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===xt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case ut:return"Profiler";case at:return"StrictMode";case st:return"Suspense";case K:return"SuspenseList";case Ht:return"Activity";case I:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case lt:return t.displayName||"Context";case gt:return(t._context.displayName||"Context")+".Consumer";case j:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _t:return n=t.displayName||null,n!==null?n:Ut(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return Ut(t(n))}catch{}}return null}var At=Array.isArray,Mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},He=[],se=-1;function Qt(t){return{current:t}}function Nt(t){0>se||(t.current=He[se],He[se]=null,se--)}function ie(t,n){se++,He[se]=t.current,t.current=n}var Bt=Qt(null),oe=Qt(null),qe=Qt(null),We=Qt(null);function U(t,n){switch(ie(qe,n),ie(oe,t),ie(Bt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?y0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=y0(n),t=x0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Nt(Bt),ie(Bt,t)}function b(){Nt(Bt),Nt(oe),Nt(qe)}function et(t){var n=t.memoizedState;n!==null&&(Br._currentValue=n.memoizedState,ie(We,t)),n=Bt.current;var a=x0(n,t.type);n!==a&&(ie(oe,t),ie(Bt,a))}function dt(t){oe.current===t&&(Nt(Bt),Nt(oe)),We.current===t&&(Nt(We),Br._currentValue=z)}var vt,ft;function Vt(t){if(vt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);vt=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+t+ft}var Rt=!1;function Wt(t,n){if(!t||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(Dt){var X=Dt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(Dt){X=Dt}pt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),pt=!0,new t}finally{pt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Dt){X=Dt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(Dt){if(Dt&&X&&typeof Dt.stack=="string")return[Dt.stack,X.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),_=c[0],E=c[1];if(_&&E){var N=_.split(`
`),W=E.split(`
`);for(u=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;u<W.length&&!W[u].includes("DetermineComponentFrameRoot");)u++;if(s===N.length||u===W.length)for(s=N.length-1,u=W.length-1;1<=s&&0<=u&&N[s]!==W[u];)u--;for(;1<=s&&0<=u;s--,u--)if(N[s]!==W[u]){if(s!==1||u!==1)do if(s--,u--,0>u||N[s]!==W[u]){var nt=`
`+N[s].replace(" at new "," at ");return t.displayName&&nt.includes("<anonymous>")&&(nt=nt.replace("<anonymous>",t.displayName)),nt}while(1<=s&&0<=u);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Vt(a):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return Vt(t.type);case 16:return Vt("Lazy");case 13:return t.child!==n&&n!==null?Vt("Suspense Fallback"):Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return Wt(t.type,!1);case 11:return Wt(t.type.render,!1);case 1:return Wt(t.type,!0);case 31:return Vt("Activity");case 30:return Vt("ViewTransition");default:return""}}function Tt(t){try{var n="",a=null;do n+=Kt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Lt=Object.prototype.hasOwnProperty,ne=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,Ot=o.unstable_shouldYield,fe=o.unstable_requestPaint,G=o.unstable_now,bt=o.unstable_getCurrentPriorityLevel,wt=o.unstable_ImmediatePriority,Gt=o.unstable_UserBlockingPriority,yt=o.unstable_NormalPriority,mt=o.unstable_LowPriority,Yt=o.unstable_IdlePriority,ue=o.log,Ge=o.unstable_setDisableYieldValue,Me=null,$e=null;function pn(t){if(typeof ue=="function"&&Ge(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Me,t)}catch{}}var Un=Math.clz32?Math.clz32:Rl,na=Math.log,mo=Math.LN2;function Rl(t){return t>>>=0,t===0?32:31-(na(t)/mo|0)|0}var ms=256,ia=262144,gs=4194304;function fi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _s(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,c=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~c,s!==0?u=fi(s):(_&=E,_!==0?u=fi(_):a||(a=E&~t,a!==0&&(u=fi(a))))):(E=s&~c,E!==0?u=fi(E):_!==0?u=fi(_):a||(a=s&~t,a!==0&&(u=fi(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Aa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Cl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Un(a),u=1<<s;n|=t[s],a&=~u}return n}function Ic(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wl(){var t=gs;return gs<<=1,(gs&62914560)===0&&(gs=4194304),t}function go(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function vs(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bc(t,n,a,s,u,c){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,N=t.expirationTimes,W=t.hiddenUpdates;for(a=_&~a;0<a;){var nt=31-Un(a),pt=1<<nt;E[nt]=0,N[nt]=-1;var X=W[nt];if(X!==null)for(W[nt]=null,nt=0;nt<X.length;nt++){var tt=X[nt];tt!==null&&(tt.lane&=-536870913)}a&=~pt}s!==0&&R(t,s,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(_&~n))}function R(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Un(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Z(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Un(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function rt(t,n){var a=n&-n;return a=(a&42)!==0?1:ot(a),(a&(t.suspendedLanes|n))!==0?0:a}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Q(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Et(){var t=qt.p;return t!==0?t:(t=window.event,t===void 0?32:av(t.type))}function Pt(t,n){var a=qt.p;try{return qt.p=t,n()}finally{qt.p=a}}var It=Math.random().toString(36).slice(2),Ct="__reactFiber$"+It,Xt="__reactProps$"+It,ee="__reactContainer$"+It,$t="__reactEvents$"+It,Se="__reactListeners$"+It,Pe="__reactHandles$"+It,Qe="__reactResources$"+It,Ne="__reactMarker$"+It,Ce="__reactLoad$"+It;function te(t){delete t[Ct],delete t[Xt],delete t[Se],delete t[Pe]}function Le(t){var n;if(n=t[Ct])return n;for(var a=t.parentNode;a;){if(n=a[ee]||a[Ct]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=B0(t);t!==null;){if(a=t[Ct])return a;t=B0(t)}return n}t=a,a=t.parentNode}return null}function ge(t){if(t=t[Ct]||t[ee]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function $n(t){var n=t[Qe];return n||(n=t[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function we(t){t[Ne]=!0}function Ra(t){t[Ce]=void 0}var je=new Set,zn={};function ln(t,n){nn(t,n),nn(t+"Capture",n)}function nn(t,n){for(zn[t]=n,t=0;t<n.length;t++)je.add(n[t])}var Nn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),er={},Ii={};function cy(t){return Lt.call(Ii,t)?!0:Lt.call(er,t)?!1:Nn.test(t)?Ii[t]=!0:(er[t]=!0,!1)}var De=!1;function rm(){var t=De;return De=!1,t}function Dl(t,n,a){if(cy(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Ul(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function aa(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ti(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function om(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fy(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,c.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Fc(t){if(!t._valueTracker){var n=om(t)?"checked":"value";t._valueTracker=fy(t,n,""+t[n])}}function lm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=om(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var hy=/[\n"\\]/g;function hi(t){return t.replace(hy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Hc(t,n,a,s,u,c,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ti(n)):t.value!==""+ti(n)&&(t.value=""+ti(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Gc(t,ti(t.value)):Gc(t,ti(n)):a!=null?Gc(t,ti(a)):s!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ti(E):t.removeAttribute("name")}function um(t,n,a,s,u,c,_,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Fc(t);return}a=a!=null?""+ti(a):"",n=n!=null?""+ti(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Fc(t)}function Gc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function nr(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ti(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function cm(t,n,a){if(n!=null&&(n=""+ti(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ti(a):""}function fm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ti(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Fc(t)}function ir(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var dy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||dy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function dm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",De=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(hm(t,u,s),De=!0)}else for(var c in n)n.hasOwnProperty(c)&&hm(t,c,n[c])}function Vc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var py=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),my=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nl(t){return my.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bi(){}var Xc=null;function kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ar=null,sr=null;function pm(t){var n=ge(t);if(n&&(t=n.stateNode)){var a=t[Xt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Hc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[Xt]||null;if(!u)throw Error(r(90));Hc(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&lm(s)}break t;case"textarea":cm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&nr(t,!!a.multiple,n,!1)}}}var qc=!1;function mm(t,n,a){if(qc)return t(n,a);qc=!0;try{var s=t(n);return s}finally{if(qc=!1,(ar!==null||sr!==null)&&(Nu(),ar&&(n=ar,t=sr,sr=ar=null,pm(n),t)))for(n=0;n<t.length;n++)pm(t[n])}}function _o(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Xt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yc=!1;if(sa)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Yc=!1}var Ca=null,Wc=null,Ll=null;function gm(){if(Ll)return Ll;var t,n=Wc,a=n.length,s,u="value"in Ca?Ca.value:Ca.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===u[c-s];s++);return Ll=u.slice(t,1<s?1-s:void 0)}function Ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function _m(){return!1}function In(t){function n(a,s,u,c,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=c,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Pl:_m,this.isPropagationStopped=_m,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),n}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=In(wa),So=L({},wa,{view:0,detail:0}),gy=In(So),jc,Zc,yo,Il=L({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(jc=t.screenX-yo.screenX,Zc=t.screenY-yo.screenY):Zc=jc=0,yo=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Zc}}),vm=In(Il),_y=L({},Il,{dataTransfer:0}),vy=In(_y),Sy=L({},So,{relatedTarget:0}),Kc=In(Sy),yy=L({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),xy=In(yy),My=L({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ey=In(My),Ty=L({},wa,{data:0}),Sm=In(Ty),by={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ry={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ry[t])?!!n[t]:!1}function Qc(){return Cy}var wy=L({},So,{key:function(t){if(t.key){var n=by[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ay[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dy=In(wy),Uy=L({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=In(Uy),Ny=L({},wa,{submitter:0}),Ly=In(Ny),Oy=L({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),Py=In(Oy),zy=L({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=In(zy),By=L({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fy=In(By),Hy=L({},wa,{newState:0,oldState:0,source:0}),Gy=In(Hy),Vy=[9,13,27,32],Jc=sa&&"CompositionEvent"in window,xo=null;sa&&"documentMode"in document&&(xo=document.documentMode);var Xy=sa&&"TextEvent"in window&&!xo,xm=sa&&(!Jc||xo&&8<xo&&11>=xo),Mm=" ",Em=!1;function Tm(t,n){switch(t){case"keyup":return Vy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rr=!1;function ky(t,n){switch(t){case"compositionend":return bm(n);case"keypress":return n.which!==32?null:(Em=!0,Mm);case"textInput":return t=n.data,t===Mm&&Em?null:t;default:return null}}function qy(t,n){if(rr)return t==="compositionend"||!Jc&&Tm(t,n)?(t=gm(),Ll=Wc=Ca=null,rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xm&&n.locale!=="ko"?null:n.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Yy[t.type]:n==="textarea"}function Rm(t,n,a,s){ar?sr?sr.push(s):sr=[s]:ar=s,n=Bu(n,"onChange"),0<n.length&&(a=new zl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Mo=null,Eo=null;function Wy(t){p0(t,0)}function Bl(t){var n=mn(t);if(lm(n))return t}function Cm(t,n){if(t==="change")return n}var wm=!1;if(sa){var $c;if(sa){var tf="oninput"in document;if(!tf){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),tf=typeof Dm.oninput=="function"}$c=tf}else $c=!1;wm=$c&&(!document.documentMode||9<document.documentMode)}function Um(){Mo&&(Mo.detachEvent("onpropertychange",Nm),Eo=Mo=null)}function Nm(t){if(t.propertyName==="value"&&Bl(Eo)){var n=[];Rm(n,Eo,t,kc(t)),mm(Wy,n)}}function jy(t,n,a){t==="focusin"?(Um(),Mo=n,Eo=a,Mo.attachEvent("onpropertychange",Nm)):t==="focusout"&&Um()}function Zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(Eo)}function Ky(t,n){if(t==="click")return Bl(n)}function Qy(t,n){if(t==="input"||t==="change")return Bl(n)}function Jy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:Jy;function To(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Lt.call(n,u)||!ei(t[u],n[u]))return!1}return!0}function ef(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Om(t,n){var a=Lm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Lm(a)}}function Pm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Pm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function zm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ef(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ef(t.document)}return n}function nf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $y=sa&&"documentMode"in document&&11>=document.documentMode,or=null,af=null,bo=null,sf=!1;function Im(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sf||or==null||or!==ef(s)||(s=or,"selectionStart"in s&&nf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),bo&&To(bo,s)||(bo=s,s=Bu(af,"onSelect"),0<s.length&&(n=new zl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=or)))}function Ss(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var lr={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},rf={},Bm={};sa&&(Bm=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function ys(t){if(rf[t])return rf[t];if(!lr[t])return t;var n=lr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Bm)return rf[t]=n[a];return t}var Fm=ys("animationend"),Hm=ys("animationiteration"),Gm=ys("animationstart"),tx=ys("transitionrun"),ex=ys("transitionstart"),nx=ys("transitioncancel"),Vm=ys("transitionend"),Xm=new Map,of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");of.push("scrollEnd");function bi(t,n){Xm.set(t,n),ln(n,[t])}var ix=0;function ra(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=wi.identifierPrefix;var a=ix++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function km(t){if(t==null||typeof t=="string")return t;var n=null,a=Cr;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function oa(t,n){return t=km(t),n=km(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],ur=0,lf=0;function Hl(){for(var t=ur,n=lf=ur=0;n<t;){var a=di[n];di[n++]=null;var s=di[n];di[n++]=null;var u=di[n];di[n++]=null;var c=di[n];if(di[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}c!==0&&qm(a,u,c)}}function Gl(t,n,a,s){di[ur++]=t,di[ur++]=n,di[ur++]=a,di[ur++]=s,lf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function uf(t,n,a,s){return Gl(t,n,a,s),Vl(t)}function xs(t,n){return Gl(t,null,null,n),Vl(t)}function qm(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-Un(a),t=c.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),c):null}function Vl(t){if(50<Wo)throw Wo=0,Uu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var cr={};function ax(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,s){return new ax(t,n,a,s)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ym(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Xl(t,n,a,s,u,c){var _=0;if(s=t,typeof s=="function")cf(s)&&(_=1);else if(typeof s=="string")_=NM(t,a,Bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Ht:return t=Xn(31,a,n,u),t.elementType=Ht,t.lanes=c,t;case V:return Ms(a.children,u,c,n);case at:_=8,u|=24;break;case ut:return t=Xn(12,a,n,u|2),t.elementType=ut,t.lanes=c,t;case st:return t=Xn(13,a,n,u),t.elementType=st,t.lanes=c,t;case K:return t=Xn(19,a,n,u),t.elementType=K,t.lanes=c,t;case re:case I:return t=u|32,t=Xn(30,a,n,t),t.elementType=I,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case lt:_=10;break t;case gt:_=9;break t;case j:_=11;break t;case _t:_=14;break t;case St:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Xn(_,a,n,u),n.elementType=t,n.type=s,n.lanes=c,n}function Ms(t,n,a,s){return t=Xn(7,t,s,n),t.lanes=a,t}function ff(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function Wm(t){var n=Xn(18,null,null,0);return n.stateNode=t,n}function hf(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var jm=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=jm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Tt(n)},jm.set(t,n),n)}return{value:t,source:n,stack:Tt(n)}}var fr=[],hr=0,kl=null,Ao=0,mi=[],gi=0,Da=null,Fi=1,Hi="";function ua(t,n){fr[hr++]=Ao,fr[hr++]=kl,kl=t,Ao=n}function Zm(t,n,a){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Da,Da=t;var s=Fi;t=Hi;var u=32-Un(s)-1;s&=~(1<<u),a+=1;var c=32-Un(n)+u;if(30<c){var _=u-u%5;c=(s&(1<<_)-1).toString(32),s>>=_,u-=_,Fi=1<<32-Un(n)+u|a<<u|s,Hi=c+t}else Fi=1<<c|a<<u|s,Hi=t}function ql(t){t.return!==null&&(ua(t,1),Zm(t,1,0))}function df(t){for(;t===kl;)kl=fr[--hr],fr[hr]=null,Ao=fr[--hr],fr[hr]=null;for(;t===Da;)Da=mi[--gi],mi[gi]=null,Hi=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null}function Km(t,n){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Da,Fi=n.id,Hi=n.overflow,Da=t}var yn=null,Ze=null,_e=!1,Ua=null,_i=!1,pf=Error(r(519));function Na(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ro(pi(n,t)),pf}function Qm(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ct]=t,n[Xt]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Zo.length;a++)xe(Zo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),um(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),fm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||v0(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||Na(t,!0)}function Yl(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:yn=yn.return}}function dr(t){if(t!==yn)return!1;if(!_e)return Yl(t),_e=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||kh(t.type,t.memoizedProps)),a=!a),a&&Ze&&Na(t),Yl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=I0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=I0(t)}else n===27?(n=Ze,ja(t.type)?(t=$h,$h=null,Ze=t):Ze=n):Ze=yn?Si(t.stateNode.nextSibling):null;return!0}function Es(){Ze=yn=null,_e=!1}function mf(){var t=Ua;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Ua=null),t}function Ro(t){Ua===null?Ua=[t]:Ua.push(t)}var gf=Qt(null),Ts=null,ca=null;function La(t,n,a){ie(gf,n._currentValue),n._currentValue=a}function fa(t){t._currentValue=gf.current,Nt(gf)}function Wl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function _f(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var _=u.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=u;for(var N=0;N<n.length;N++)if(E.context===n[N]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),Wl(c.return,a,t),s||(_=null);break t}c=E.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,c=_.alternate,c!==null&&(c.lanes|=a),Wl(_,a,t),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),Wl(u.return,a,t),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function bs(t,n,a,s){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=u.type;ei(u.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(u===We.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Br):t=[Br])}u=u.return}return t!==null&&_f(n,t,a,s),n.flags|=262144,t!==null}function jl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function As(t){Ts=t,ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Jm(Ts,t)}function Zl(t,n){return Ts===null&&As(t),Jm(t,n)}function Jm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ca===null){if(t===null)throw Error(r(308));ca=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ca=ca.next=n;return a}var sx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},rx=o.unstable_scheduleCallback,ox=o.unstable_NormalPriority,un={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vf(){return{controller:new sx,data:new Map,refCount:0}}function Co(t){t.refCount--,t.refCount===0&&rx(ox,function(){t.controller.abort()})}function $m(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var wo=null;function lx(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Do=null,Sf=0,Rs=0,pr=null;function ux(t,n){if(Do===null){var a=Do=[];Sf=0,Rs=Ph(),pr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Sf++,n.then(tg,tg),n}function tg(){if(--Sf===0&&(wo=null,Do!==null)){pr!==null&&(pr.status="fulfilled");var t=Do;Do=null,Rs=0,pr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function cx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var eg=Mt.S;Mt.S=function(t,n){if(W_=G(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ux(t,n),wo!==null)for(var a=Nr;a!==null;)$m(a,wo),a=a.next;if(a=t.types,a!==null){for(var s=Nr;s!==null;)$m(s,a),s=s.next;if(Rs!==0){s=wo,s===null&&(s=wo=[]);for(var u=0;u<a.length;u++){var c=a[u];s.indexOf(c)===-1&&s.push(c)}}}eg!==null&&eg(t,n)};var Cs=Qt(null);function yf(){var t=Cs.current;return t!==null?t:Ye.pooledCache}function Kl(t,n){n===null?ie(Cs,Cs.current):ie(Cs,n.pool)}function ng(){var t=yf();return t===null?null:{parent:un._currentValue,pool:t}}var mr=Error(r(460)),xf=Error(r(474)),Ql=Error(r(542)),Jl={then:function(){}};function ig(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ag(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rg(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,rg(t),t}throw Ds=n,mr}}function ws(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ds=a,mr):a}}var Ds=null;function sg(){if(Ds===null)throw Error(r(459));var t=Ds;return Ds=null,t}function rg(t){if(t===mr||t===Ql)throw Error(r(483))}var gr=null,Uo=0;function $l(t){var n=Uo;return Uo+=1,gr===null&&(gr=[]),ag(gr,t,n)}function Oa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function tu(t,n){throw n.$$typeof===q?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function og(t){function n(Y,H){if(t){var J=Y.deletions;J===null?(Y.deletions=[H],Y.flags|=16):J.push(H)}}function a(Y,H){if(!t)return null;for(;H!==null;)n(Y,H),H=H.sibling;return null}function s(Y){for(var H=new Map;Y!==null;)Y.key===null?H.set(Y.index,Y):H.set(Y.key,Y),Y=Y.sibling;return H}function u(Y,H){return Y=la(Y,H),Y.index=0,Y.sibling=null,Y}function c(Y,H,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<H?(Y.flags|=2,H):J):(Y.flags|=134217730,H)):(Y.flags|=1048576,H)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function E(Y,H,J,ht){return H===null||H.tag!==6?(H=ff(J,Y.mode,ht),H.return=Y,H):(H=u(H,J),H.return=Y,H)}function N(Y,H,J,ht){var Ft=J.type;return Ft===V?(Y=nt(Y,H,J.props.children,ht,J.key),Oa(Y,J),Y):H!==null&&(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===St&&ws(Ft)===H.type)?(H=u(H,J.props),Oa(H,J),H.return=Y,H):(H=Xl(J.type,J.key,J.props,null,Y.mode,ht),Oa(H,J),H.return=Y,H)}function W(Y,H,J,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=hf(J,Y.mode,ht),H.return=Y,H):(H=u(H,J.children||[]),H.return=Y,H)}function nt(Y,H,J,ht,Ft){return H===null||H.tag!==7?(H=Ms(J,Y.mode,ht,Ft),H.return=Y,H):(H=u(H,J),H.return=Y,H)}function pt(Y,H,J){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=ff(""+H,Y.mode,J),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return J=Xl(H.type,H.key,H.props,null,Y.mode,J),Oa(J,H),J.return=Y,J;case C:return H=hf(H,Y.mode,J),H.return=Y,H;case St:return H=ws(H),pt(Y,H,J)}if(At(H)||it(H))return H=Ms(H,Y.mode,J,null),H.return=Y,H;if(typeof H.then=="function")return pt(Y,$l(H),J);if(H.$$typeof===lt)return pt(Y,Zl(Y,H),J);tu(Y,H)}return null}function X(Y,H,J,ht){var Ft=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ft!==null?null:E(Y,H,""+J,ht);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Ft?N(Y,H,J,ht):null;case C:return J.key===Ft?W(Y,H,J,ht):null;case St:return J=ws(J),X(Y,H,J,ht)}if(At(J)||it(J))return Ft!==null?null:nt(Y,H,J,ht,null);if(typeof J.then=="function")return X(Y,H,$l(J),ht);if(J.$$typeof===lt)return X(Y,H,Zl(Y,J),ht);tu(Y,J)}return null}function tt(Y,H,J,ht,Ft){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get(J)||null,E(H,Y,""+ht,Ft);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case D:return Y=Y.get(ht.key===null?J:ht.key)||null,N(H,Y,ht,Ft);case C:return Y=Y.get(ht.key===null?J:ht.key)||null,W(H,Y,ht,Ft);case St:return ht=ws(ht),tt(Y,H,J,ht,Ft)}if(At(ht)||it(ht))return Y=Y.get(J)||null,nt(H,Y,ht,Ft,null);if(typeof ht.then=="function")return tt(Y,H,J,$l(ht),Ft);if(ht.$$typeof===lt)return tt(Y,H,J,Zl(H,ht),Ft);tu(H,ht)}return null}function Dt(Y,H,J,ht){for(var Ft=null,Te=null,Jt=H,ae=H=0,hn=null;Jt!==null&&ae<J.length;ae++){Jt.index>ae?(hn=Jt,Jt=null):hn=Jt.sibling;var Ae=X(Y,Jt,J[ae],ht);if(Ae===null){Jt===null&&(Jt=hn);break}t&&Jt&&Ae.alternate===null&&n(Y,Jt),H=c(Ae,H,ae),Te===null?Ft=Ae:Te.sibling=Ae,Te=Ae,Jt=hn}if(ae===J.length)return a(Y,Jt),_e&&ua(Y,ae),Ft;if(Jt===null){for(;ae<J.length;ae++)Jt=pt(Y,J[ae],ht),Jt!==null&&(H=c(Jt,H,ae),Te===null?Ft=Jt:Te.sibling=Jt,Te=Jt);return _e&&ua(Y,ae),Ft}for(Jt=s(Jt);ae<J.length;ae++)hn=tt(Jt,Y,ae,J[ae],ht),hn!==null&&(t&&(Ae=hn.alternate,Ae!==null&&Jt.delete(Ae.key===null?ae:Ae.key)),H=c(hn,H,ae),Te===null?Ft=hn:Te.sibling=hn,Te=hn);return t&&Jt.forEach(function($a){return n(Y,$a)}),_e&&ua(Y,ae),Ft}function kt(Y,H,J,ht){if(J==null)throw Error(r(151));for(var Ft=null,Te=null,Jt=H,ae=H=0,hn=null,Ae=J.next();Jt!==null&&!Ae.done;ae++,Ae=J.next()){Jt.index>ae?(hn=Jt,Jt=null):hn=Jt.sibling;var $a=X(Y,Jt,Ae.value,ht);if($a===null){Jt===null&&(Jt=hn);break}t&&Jt&&$a.alternate===null&&n(Y,Jt),H=c($a,H,ae),Te===null?Ft=$a:Te.sibling=$a,Te=$a,Jt=hn}if(Ae.done)return a(Y,Jt),_e&&ua(Y,ae),Ft;if(Jt===null){for(;!Ae.done;ae++,Ae=J.next())Ae=pt(Y,Ae.value,ht),Ae!==null&&(H=c(Ae,H,ae),Te===null?Ft=Ae:Te.sibling=Ae,Te=Ae);return _e&&ua(Y,ae),Ft}for(Jt=s(Jt);!Ae.done;ae++,Ae=J.next())Ae=tt(Jt,Y,ae,Ae.value,ht),Ae!==null&&(t&&(hn=Ae.alternate,hn!==null&&Jt.delete(hn.key===null?ae:hn.key)),H=c(Ae,H,ae),Te===null?Ft=Ae:Te.sibling=Ae,Te=Ae);return t&&Jt.forEach(function(kM){return n(Y,kM)}),_e&&ua(Y,ae),Ft}function de(Y,H,J,ht){if(typeof J=="object"&&J!==null&&J.type===V&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:t:{for(var Ft=J.key;H!==null;){if(H.key===Ft){if(Ft=J.type,Ft===V){if(H.tag===7){a(Y,H.sibling),ht=u(H,J.props.children),Oa(ht,J),ht.return=Y,Y=ht;break t}}else if(H.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===St&&ws(Ft)===H.type){a(Y,H.sibling),ht=u(H,J.props),Oa(ht,J),ht.return=Y,Y=ht;break t}a(Y,H);break}else n(Y,H);H=H.sibling}J.type===V?(ht=Ms(J.props.children,Y.mode,ht,J.key),Oa(ht,J),ht.return=Y,Y=ht):(ht=Xl(J.type,J.key,J.props,null,Y.mode,ht),Oa(ht,J),ht.return=Y,Y=ht)}return _(Y);case C:t:{for(Ft=J.key;H!==null;){if(H.key===Ft)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a(Y,H.sibling),ht=u(H,J.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,H);break}else n(Y,H);H=H.sibling}ht=hf(J,Y.mode,ht),ht.return=Y,Y=ht}return _(Y);case St:return J=ws(J),de(Y,H,J,ht)}if(At(J))return Dt(Y,H,J,ht);if(it(J)){if(Ft=it(J),typeof Ft!="function")throw Error(r(150));return J=Ft.call(J),kt(Y,H,J,ht)}if(typeof J.then=="function")return de(Y,H,$l(J),ht);if(J.$$typeof===lt)return de(Y,H,Zl(Y,J),ht);tu(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,H!==null&&H.tag===6?(a(Y,H.sibling),ht=u(H,J),ht.return=Y,Y=ht):(a(Y,H),ht=ff(J,Y.mode,ht),ht.return=Y,Y=ht),_(Y)):a(Y,H)}return function(Y,H,J,ht){try{Uo=0;var Ft=de(Y,H,J,ht);return gr=null,Ft}catch(Jt){if(Jt===mr||Jt===Ql)throw Jt;var Te=Xn(29,Jt,null,Y.mode);return Te.lanes=ht,Te.return=Y,Te}finally{}}}var Us=og(!0),lg=og(!1),Pa=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ef(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Oe&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Vl(t),qm(t,null,a),n}return Gl(t,s,n,a),Vl(t)}function No(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Z(t,a)}}function Tf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=_:c=c.next=_,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var bf=!1;function Lo(){if(bf){var t=pr;if(t!==null)throw t}}function Oo(t,n,a,s){bf=!1;var u=t.updateQueue;Pa=!1;var c=u.firstBaseUpdate,_=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var N=E,W=N.next;N.next=null,_===null?c=W:_.next=W,_=N;var nt=t.alternate;nt!==null&&(nt=nt.updateQueue,E=nt.lastBaseUpdate,E!==_&&(E===null?nt.firstBaseUpdate=W:E.next=W,nt.lastBaseUpdate=N))}if(c!==null){var pt=u.baseState;_=0,nt=W=N=null,E=c;do{var X=E.lane&-536870913,tt=X!==E.lane;if(tt?(Ee&X)===X:(s&X)===X){X!==0&&X===Rs&&(bf=!0),nt!==null&&(nt=nt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Dt=t,kt=E;X=n;var de=a;switch(kt.tag){case 1:if(Dt=kt.payload,typeof Dt=="function"){pt=Dt.call(de,pt,X);break t}pt=Dt;break t;case 3:Dt.flags=Dt.flags&-65537|128;case 0:if(Dt=kt.payload,X=typeof Dt=="function"?Dt.call(de,pt,X):Dt,X==null)break t;pt=L({},pt,X);break t;case 2:Pa=!0}}X=E.callback,X!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=u.callbacks,tt===null?u.callbacks=[X]:tt.push(X))}else tt={lane:X,tag:E.tag,payload:E.payload,callback:E.callback,next:null},nt===null?(W=nt=tt,N=pt):nt=nt.next=tt,_|=X;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;tt=E,E=tt.next,tt.next=null,u.lastBaseUpdate=tt,u.shared.pending=null}}while(!0);nt===null&&(N=pt),u.baseState=N,u.firstBaseUpdate=W,u.lastBaseUpdate=nt,c===null&&(u.shared.lanes=0),ka|=_,t.lanes=_,t.memoizedState=pt}}function ug(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function cg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ug(a[t],n)}var Ba=Qt(null),eu=Qt(0);function fg(t,n){t=ga,ie(eu,t),ie(Ba,n),ga=t|n.baseLanes}function Af(){ie(eu,ga),ie(Ba,Ba.current)}function Rf(){ga=eu.current,Nt(Ba),Nt(eu)}var bn=Qt(null),Ln=null;function Fa(t){var n=t.alternate;ie(An,An.current&1),ie(bn,t),Ln===null&&(n===null||Ba.current!==null||n.memoizedState!==null)&&(Ln=t)}function Cf(t){ie(An,An.current),ie(bn,t),Ln===null&&(Ln=t)}function hg(t){t.tag===22?(ie(An,An.current),ie(bn,t),Ln===null&&(Ln=t)):Ha()}function Ha(){ie(An,An.current),ie(bn,bn.current)}function ni(t){Nt(bn),Ln===t&&(Ln=null),Nt(An)}var An=Qt(0);function Po(t,n){ie(bn,bn.current),ie(An,n)}function wf(t){Nt(An),Nt(bn),Ln===t&&(Ln=null)}function nu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qh(a)||Jh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,he=null,Ve=null,cn=null,iu=!1,_r=!1,Ns=!1,au=0,zo=0,vr=null,fx=0;function an(){throw Error(r(321))}function Df(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function Uf(t,n,a,s,u,c){return ha=c,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=t===null||t.memoizedState===null?Zg:Kg,Ns=!1,c=a(s,u),Ns=!1,_r&&(c=pg(n,a,s,u)),dg(t),c}function dg(t){Mt.H=fu;var n=Ve!==null&&Ve.next!==null;if(ha=0,cn=Ve=he=null,iu=!1,zo=0,vr=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&jl(t)&&(fn=!0))}function pg(t,n,a,s){he=t;var u=0;do{if(_r&&(vr=null),zo=0,_r=!1,25<=u)throw Error(r(301));if(u+=1,cn=Ve=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Mt.H=Sx,c=n(a,s)}while(_r);return c}function hx(){var t=Mt.H,n=t.useState()[0];return n=typeof n.then=="function"?Io(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(he.flags|=1024),n}function Nf(){var t=au!==0;return au=0,t}function Lf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Of(t){if(iu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}iu=!1}ha=0,cn=Ve=he=null,_r=!1,zo=au=0,vr=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?he.memoizedState=cn=t:cn=cn.next=t,cn}function on(){if(Ve===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=cn===null?he.memoizedState:cn.next;if(n!==null)cn=n,Ve=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},cn===null?he.memoizedState=cn=t:cn=cn.next=t}return cn}function su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(t){var n=zo;return zo+=1,vr===null&&(vr=[]),t=ag(vr,t,n),n=he,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?Zg:Kg),t}function ru(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Io(t);if(t.$$typeof===ct)return;if(t.$$typeof===lt)return Tn(t)}throw Error(r(438,String(t)))}function Pf(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=su(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=be;return n.index++,a}function da(t,n){return typeof n=="function"?n(t):n}function ou(t){var n=on();return zf(n,Ve,t)}function zf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,c=s.pending;if(c!==null){if(u!==null){var _=u.next;u.next=c.next,c.next=_}n.baseQueue=u=c,s.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var E=_=null,N=null,W=n,nt=!1;do{var pt=W.lane&-536870913;if(pt!==W.lane?(Ee&pt)===pt:(ha&pt)===pt){var X=W.revertLane;if(X===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),pt===Rs&&(nt=!0);else if((ha&X)===X){W=W.next,X===Rs&&(nt=!0);continue}else pt={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},N===null?(E=N=pt,_=c):N=N.next=pt,he.lanes|=X,ka|=X;pt=W.action,Ns&&a(c,pt),c=W.hasEagerState?W.eagerState:a(c,pt)}else X={lane:pt,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},N===null?(E=N=X,_=c):N=N.next=X,he.lanes|=pt,ka|=pt;W=W.next}while(W!==null&&W!==n);if(N===null?_=c:N.next=E,!ei(c,t.memoizedState)&&(fn=!0,nt&&(a=pr,a!==null)))throw a;t.memoizedState=c,t.baseState=_,t.baseQueue=N,s.lastRenderedState=c}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function If(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do c=t(c,_.action),_=_.next;while(_!==u);ei(c,n.memoizedState)||(fn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function mg(t,n,a){var s=he,u=on(),c=_e;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ei((Ve||u).memoizedState,a);if(_&&(u.memoizedState=a,fn=!0),u=u.queue,Hf(vg.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||_||cn!==null&&(cn.memoizedState.tag&1)!==0,Sr(t?9:8,{destroy:void 0},_g.bind(null,s,u,a,n),null),t){if(s.flags|=2048,Ye===null)throw Error(r(349));c||(ha&127)!==0||gg(s,n,a)}return a}function gg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=su(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function _g(t,n,a,s){n.value=a,n.getSnapshot=s,Sg(n)&&yg(t)}function vg(t,n,a){return a(function(){Sg(n)&&yg(t)})}function Sg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function yg(t){var n=xs(t,2);n!==null&&Wn(n,t,2)}function Bf(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),Ns){pn(!0);try{a()}finally{pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function xg(t,n,a,s){return t.baseState=a,zf(t,Ve,typeof s=="function"?s:da)}function dx(t,n,a,s,u){if(cu(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){c.listeners.push(_)}};Mt.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,Mg(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Mg(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var c=Mt.T,_={};_.types=c!==null?c.types:null,Mt.T=_;try{var E=a(u,s),N=Mt.S;N!==null&&N(_,E),Eg(t,n,E)}catch(W){Ff(t,n,W)}finally{c!==null&&_.types!==null&&(c.types=_.types),Mt.T=c}}else try{c=a(u,s),Eg(t,n,c)}catch(W){Ff(t,n,W)}}function Eg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Tg(t,n,s)},function(s){return Ff(t,n,s)}):Tg(t,n,a)}function Tg(t,n,a){n.status="fulfilled",n.value=a,bg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Mg(t,a)))}function Ff(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,bg(n),n=n.next;while(n!==s)}t.action=null}function bg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ag(t,n){return n}function Rg(t,n){if(_e){var a=Ye.formState;if(a!==null){t:{var s=he;if(_e){if(Ze){e:{for(var u=Ze,c=_i;u.nodeType!==8;){if(!c){u=null;break e}if(u=Si(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Ze=Si(u.nextSibling),s=u.data==="F!";break t}}Na(s)}s=!1}s&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ag,lastRenderedState:n},a.queue=s,a=Yg.bind(null,he,s),s.dispatch=a,s=Bf(!1),c=qf.bind(null,he,!1,s.queue),s=Bn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=dx.bind(null,he,u,c,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Cg(t){var n=on();return wg(n,Ve,t)}function wg(t,n,a){if(n=zf(t,n,Ag)[0],t=ou(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Io(n)}catch(_){throw _===mr?Ql:_}else s=n;n=on();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Sr(9,{destroy:void 0},px.bind(null,u,a),null)),[s,c,t]}function px(t,n){t.action=n}function Dg(t){var n=on(),a=Ve;if(a!==null)return wg(n,a,t);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Sr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=su(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Ug(){return on().memoizedState}function lu(t,n,a,s){var u=Bn();he.flags|=t,u.memoizedState=Sr(1|n,{destroy:void 0},a,s===void 0?null:s)}function uu(t,n,a,s){var u=on();s=s===void 0?null:s;var c=u.memoizedState.inst;Ve!==null&&s!==null&&Df(s,Ve.memoizedState.deps)?u.memoizedState=Sr(n,c,a,s):(he.flags|=t,u.memoizedState=Sr(1|n,c,a,s))}function Ng(t,n){lu(8390656,8,t,n)}function Hf(t,n){uu(2048,8,t,n)}function mx(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=su(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Lg(t){var n=on().memoizedState;return mx({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Og(t,n){return uu(4,2,t,n)}function Pg(t,n){return uu(4,4,t,n)}function zg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ig(t,n,a){a=a!=null?a.concat([t]):null,uu(4,4,zg.bind(null,n,t),a)}function Gf(){}function Bg(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Df(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Fg(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Df(n,s[1]))return s[0];if(s=t(),Ns){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s}function Vf(t,n,a){return a===void 0||(ha&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Z_(),he.lanes|=t,ka|=t,a)}function Hg(t,n,a,s){return ei(a,n)?a:Ba.current!==null?(t=Vf(t,a,s),ei(t,n)||(fn=!0),t):(ha&106)===0||(ha&1073741824)!==0&&(Ee&261930)===0?(fn=!0,t.memoizedState=a):(t=Z_(),he.lanes|=t,ka|=t,n)}function Gg(t,n,a,s,u){var c=qt.p;qt.p=c!==0&&8>c?c:8;var _=Mt.T,E={};E.types=_!==null?_.types:null,Mt.T=E,qf(t,!1,n,a);try{var N=u(),W=Mt.S;if(W!==null&&W(E,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var nt=cx(N,s);Bo(t,n,nt,ri(t))}else Bo(t,n,s,ri(t))}catch(pt){Bo(t,n,{then:function(){},status:"rejected",reason:pt},ri())}finally{qt.p=c,_!==null&&E.types!==null&&(_.types=E.types),Mt.T=_}}function gx(){}function Xf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Vg(t).queue;Gg(t,u,n,z,a===null?gx:function(){return Xg(t),a(s)})}function Vg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Xg(t){var n=Vg(t);n.next===null&&(n=t.alternate.memoizedState),Bo(t,n.next.queue,{},ri())}function kf(){return Tn(Br)}function kg(){return on().memoizedState}function qg(){return on().memoizedState}function _x(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=za(a);var s=Ia(n,t,a);s!==null&&(Wn(s,n,a),No(s,n,a)),n={cache:vf()},t.payload=n;return}n=n.return}}function vx(t,n,a){var s=ri();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cu(t)?Wg(n,a):(a=uf(t,n,a,s),a!==null&&(Wn(a,t,s),jg(a,n,s)))}function Yg(t,n,a){var s=ri();Bo(t,n,a,s)}function Bo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cu(t))Wg(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var _=n.lastRenderedState,E=c(_,a);if(u.hasEagerState=!0,u.eagerState=E,ei(E,_))return Gl(t,n,u,0),Ye===null&&Hl(),!1}catch{}finally{}if(a=uf(t,n,u,s),a!==null)return Wn(a,t,s),jg(a,n,s),!0}return!1}function qf(t,n,a,s){if(s={lane:2,revertLane:Ph(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},cu(t)){if(n)throw Error(r(479))}else n=uf(t,a,s,2),n!==null&&Wn(n,t,2)}function cu(t){var n=t.alternate;return t===he||n!==null&&n===he}function Wg(t,n){_r=iu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function jg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Z(t,a)}}var fu={readContext:Tn,use:ru,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},Zg={readContext:Tn,use:ru,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Ng,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,lu(4194308,4,zg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return lu(4194308,4,t,n)},useInsertionEffect:function(t,n){lu(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var s=t();if(Ns){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Bn();if(a!==void 0){var u=a(n);if(Ns){pn(!0);try{a(n)}finally{pn(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=vx.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=Bf(t);var n=t.queue,a=Yg.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Gf,useDeferredValue:function(t,n){var a=Bn();return Vf(a,t,n)},useTransition:function(){var t=Bf(!1);return t=Gg.bind(null,he,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,u=Bn();if(_e){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));(Ee&127)!==0||gg(s,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,Ng(vg.bind(null,s,c,t),[t]),s.flags|=2048,Sr(9,{destroy:void 0},_g.bind(null,s,c,a,n),null),a},useId:function(){var t=Bn(),n=Ye.identifierPrefix;if(_e){var a=Hi,s=Fi;a=(s&~(1<<32-Un(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=au++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:kf,useFormState:Rg,useActionState:Rg,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qf.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:Pf,useCacheRefresh:function(){return Bn().memoizedState=_x.bind(null,he)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Kg={readContext:Tn,use:ru,useCallback:Bg,useContext:Tn,useEffect:Hf,useImperativeHandle:Ig,useInsertionEffect:Og,useLayoutEffect:Pg,useMemo:Fg,useReducer:ou,useRef:Ug,useState:function(){return ou(da)},useDebugValue:Gf,useDeferredValue:function(t,n){var a=on();return Hg(a,Ve.memoizedState,t,n)},useTransition:function(){var t=ou(da)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Io(t),n]},useSyncExternalStore:mg,useId:kg,useHostTransitionStatus:kf,useFormState:Cg,useActionState:Cg,useOptimistic:function(t,n){var a=on();return xg(a,Ve,t,n)},useMemoCache:Pf,useCacheRefresh:qg,useEffectEvent:Lg},Sx={readContext:Tn,use:ru,useCallback:Bg,useContext:Tn,useEffect:Hf,useImperativeHandle:Ig,useInsertionEffect:Og,useLayoutEffect:Pg,useMemo:Fg,useReducer:If,useRef:Ug,useState:function(){return If(da)},useDebugValue:Gf,useDeferredValue:function(t,n){var a=on();return Ve===null?Vf(a,t,n):Hg(a,Ve.memoizedState,t,n)},useTransition:function(){var t=If(da)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Io(t),n]},useSyncExternalStore:mg,useId:kg,useHostTransitionStatus:kf,useFormState:Dg,useActionState:Dg,useOptimistic:function(t,n){var a=on();return Ve!==null?xg(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Pf,useCacheRefresh:qg,useEffectEvent:Lg};function Yf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:L({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Wf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ri(),u=za(s);u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,s),n!==null&&(Wn(n,t,s),No(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ri(),u=za(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,s),n!==null&&(Wn(n,t,s),No(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),s=za(a);s.tag=2,n!=null&&(s.callback=n),n=Ia(t,s,a),n!==null&&(Wn(n,t,a),No(n,t,a))}};function Qg(t,n,a,s,u,c,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,_):n.prototype&&n.prototype.isPureReactComponent?!To(a,s)||!To(u,c):!0}function Jg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Wf.enqueueReplaceState(n,n.state,null)}function Ls(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=L({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function $g(t){Fl(t)}function t_(t){console.error(t)}function e_(t){Fl(t)}function hu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function n_(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function jf(t,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){hu(t,n)},a}function i_(t){return t=za(t),t.tag=3,t}function a_(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=s.value;t.payload=function(){return u(c)},t.callback=function(){n_(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){n_(n,a,s),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function yx(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&bs(n,a,u,!0),a=bn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ln===null?Lu():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Jl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Nh(t,s,u)),!1;case 22:return a.flags|=65536,s===Jl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Nh(t,s,u)),!1}throw Error(r(435,a.tag))}return Nh(t,s,u),Lu(),!1}if(_e)return n=bn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==pf&&(t=Error(r(422),{cause:s}),Ro(pi(t,a)))):(s!==pf&&(n=Error(r(423),{cause:s}),Ro(pi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=pi(s,a),u=jf(t.stateNode,s,u),Tf(t,u),sn!==4&&(sn=2)),!1;var c=Error(r(520),{cause:s});if(c=pi(c,a),Yo===null?Yo=[c]:Yo.push(c),sn!==4&&(sn=2),n===null)return!0;s=pi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=jf(a.stateNode,s,t),Tf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(qa===null||!qa.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=i_(u),a_(u,t,a,s),Tf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Zf=Error(r(461)),fn=!1;function gn(t,n,a,s){n.child=t===null?lg(n,null,a,s):Us(n,t.child,a,s)}function s_(t,n,a,s,u){a=a.render;var c=n.ref;if("ref"in s){var _={};for(var E in s)E!=="ref"&&(_[E]=s[E])}else _=s;return As(n),s=Uf(t,n,a,_,c,u),E=Nf(),t!==null&&!fn?(Lf(t,n,u),pa(t,n,u)):(_e&&E&&ql(n),n.flags|=1,gn(t,n,s,u),n.child)}function r_(t,n,a,s,u){if(t===null){var c=a.type;return typeof c=="function"&&!cf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,o_(t,n,c,s,u)):(t=Xl(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!ih(t,u)){var _=c.memoizedProps;if(a=a.compare,a=a!==null?a:To,a(_,s)&&t.ref===n.ref)return pa(t,n,u)}return n.flags|=1,t=la(c,s),t.ref=n.ref,t.return=n,n.child=t}function o_(t,n,a,s,u){if(t!==null){var c=t.memoizedProps;if(To(c,s)&&t.ref===n.ref)if(fn=!1,n.pendingProps=s=c,ih(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,pa(t,n,u)}return Kf(t,n,a,s,u)}function l_(t,n,a,s){var u=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~c}else s=0,n.child=null;return u_(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Kl(n,c!==null?c.cachePool:null),c!==null?fg(n,c):Af(),hg(n);else return s=n.lanes=536870912,u_(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(Kl(n,c.cachePool),fg(n,c),Ha(),n.memoizedState=null):(t!==null&&Kl(n,null),Af(),Ha());return gn(t,n,u,a),n.child}function Fo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function u_(t,n,a,s,u){var c=yf();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Kl(n,null),Af(),hg(n),t!==null&&bs(t,n,s,!0),n.childLanes=u,null}function du(t,n){return n=pu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function c_(t,n,a){return Us(n,t.child,null,a),t=du(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function xx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(s.mode==="hidden")return t=du(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Fo(null,t);if(Cf(n),(t=Ze)?(t=z0(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Wm(t),a.return=n,n.child=a,yn=n,Ze=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return du(n,s)}var c=t.memoizedState;if(c!==null){var _=c.dehydrated;if(Cf(n),u)if(n.flags&256)n.flags&=-257,n=c_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||bs(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(Ba.current===null){if(s=Ye,s!==null&&(_=rt(s,a),_!==0&&_!==c.retryLane))throw c.retryLane=_,xs(t,_),Wn(s,t,_),Zf;Lu()}n=c_(t,n,a)}else t=c.treeContext,Ze=Si(_.nextSibling),yn=n,_e=!0,Ua=null,_i=!1,t!==null&&Km(n,t),n=du(n,s),n.flags|=134221824;return n}return t=la(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function yr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Kf(t,n,a,s,u){return As(n),a=Uf(t,n,a,s,void 0,u),s=Nf(),t!==null&&!fn?(Lf(t,n,u),pa(t,n,u)):(_e&&s&&ql(n),n.flags|=1,gn(t,n,a,u),n.child)}function f_(t,n,a,s,u,c){return As(n),n.updateQueue=null,a=pg(n,s,a,u),dg(t),s=Nf(),t!==null&&!fn?(Lf(t,n,c),pa(t,n,c)):(_e&&s&&ql(n),n.flags|=1,gn(t,n,a,c),n.child)}function h_(t,n,a,s,u){if(As(n),n.stateNode===null){var c=cr,_=a.contextType;typeof _=="object"&&_!==null&&(c=Tn(_)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Wf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},Mf(n),_=a.contextType,c.context=typeof _=="object"&&_!==null?Tn(_):cr,c.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Yf(n,a,_,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(_=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),_!==c.state&&Wf.enqueueReplaceState(c,c.state,null),Oo(n,s,c,u),Lo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,N=Ls(a,E);c.props=N;var W=c.context,nt=a.contextType;_=cr,typeof nt=="object"&&nt!==null&&(_=Tn(nt));var pt=a.getDerivedStateFromProps;nt=typeof pt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,nt||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||W!==_)&&Jg(n,c,s,_),Pa=!1;var X=n.memoizedState;c.state=X,Oo(n,s,c,u),Lo(),W=n.memoizedState,E||X!==W||Pa?(typeof pt=="function"&&(Yf(n,a,pt,s),W=n.memoizedState),(N=Pa||Qg(n,a,N,s,X,W,_))?(nt||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=W),c.props=s,c.state=W,c.context=_,s=N):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,Ef(t,n),_=n.memoizedProps,nt=Ls(a,_),c.props=nt,pt=n.pendingProps,X=c.context,W=a.contextType,N=cr,typeof W=="object"&&W!==null&&(N=Tn(W)),E=a.getDerivedStateFromProps,(W=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==pt||X!==N)&&Jg(n,c,s,N),Pa=!1,X=n.memoizedState,c.state=X,Oo(n,s,c,u),Lo();var tt=n.memoizedState;_!==pt||X!==tt||Pa||t!==null&&t.dependencies!==null&&jl(t.dependencies)?(typeof E=="function"&&(Yf(n,a,E,s),tt=n.memoizedState),(nt=Pa||Qg(n,a,nt,s,X,tt,N)||t!==null&&t.dependencies!==null&&jl(t.dependencies))?(W||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,tt,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,tt,N)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=tt),c.props=s,c.state=tt,c.context=N,s=nt):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,yr(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=Us(n,t.child,null,u),n.child=Us(n,null,a,u)):gn(t,n,a,u),n.memoizedState=c.state,t=n.child):t=pa(t,n,u),t}function d_(t,n,a,s){return Es(),n.flags|=256,gn(t,n,a,s),n.child}var Qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jf(t){return{baseLanes:t,cachePool:ng()}}function $f(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function p_(t,n,a){var s=n.pendingProps,u=!1,c=(n.flags&128)!==0,_;if((_=c)||(_=t!==null&&t.memoizedState===null?!1:(An.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(u?Fa(n):Ha(),(t=Ze)?(t=z0(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Wm(t),a.return=n,n.child=a,yn=n,Ze=null)):t=null,t===null)throw Na(n);return Jh(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,u?(Ha(),u=n.mode,c=pu({mode:"hidden",children:c},u),s=Ms(s,u,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=Jf(a),s.childLanes=$f(t,_,a),n.memoizedState=Qf,Fo(null,s)):(Fa(n),th(n,c))}var E=t.memoizedState;if(E!==null){var N=E.dehydrated;if(N!==null)return Mx(t,n,c,_,s,N,E,a)}return u?(Ha(),u=s.fallback,c=n.mode,E=t.child,N=E.sibling,s=la(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&1206910976,N!==null?u=la(N,u):(u=Ms(u,c,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,Fo(null,s),s=n.child,u=t.child.memoizedState,u===null?u=Jf(a):(c=u.cachePool,c!==null?(E=un._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=ng(),u={baseLanes:u.baseLanes|a,cachePool:c}),s.memoizedState=u,s.childLanes=$f(t,_,a),n.memoizedState=Qf,Fo(t.child,s)):(Fa(n),a=t.child,t=a.sibling,a=la(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function th(t,n){return n=pu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function pu(t,n){return t=Xn(22,t,null,n),t.lanes=0,t}function mu(t,n,a){return Us(n,t.child,null,a),t=th(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Mx(t,n,a,s,u,c,_,E){if(a)return n.flags&256?(Fa(n),n.flags&=-257,mu(t,n,E)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,null):(Ha(),c=u.fallback,_=n.mode,u=pu({mode:"visible",children:u.children},_),c=Ms(c,_,E,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,Us(n,t.child,null,E),u=n.child,u.memoizedState=Jf(E),u.childLanes=$f(t,s,E),n.memoizedState=Qf,Fo(null,u));if(Fa(n),Jh(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var N=s.dgst;return s=N,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,Ro({value:u,source:null,stack:null})),mu(t,n,E)}if(fn||bs(t,n,E,!1),s=(E&t.childLanes)!==0,fn||s){if(Ba.current!==null)return mu(t,n,E);if(s=Ye,s!==null&&(u=rt(s,E),u!==0&&u!==_.retryLane))throw _.retryLane=u,xs(t,u),Wn(s,t,u),Zf;return Qh(c)||Lu(),mu(t,n,E)}return Qh(c)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Ze=Si(c.nextSibling),yn=n,_e=!0,Ua=null,_i=!1,t!==null&&Km(n,t),n=th(n,u.children),n.flags|=134221824,n)}function m_(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Wl(t.return,n,a)}function g_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&nu(a)===null&&(n=t),t=t.sibling}return n}function gu(t,n,a,s,u,c){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:c}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=c)}function eh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function nh(t,n,a){var s=n.pendingProps,u=s.revealOrder,c=s.tail;s=s.children;var _=An.current;if(n.flags&128)return Po(n,_),null;var E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,Po(n,_),u==="backwards"&&t!==null?(eh(t),gn(t,n,s,a),eh(t)):gn(t,n,s,a),s=_e?Ao:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&m_(t,a,n);else if(t.tag===19)m_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=g_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,eh(n)),gu(n,!0,u,null,c,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&nu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}gu(n,!0,a,null,c,s);break;case"together":gu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=g_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gu(n,!1,u,a,c,s)}return n.child}function __(t,n,a){var s=n.pendingProps;return La(n,n.type,s.value),gn(t,n,s.children,a),n.child}function pa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(bs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=la(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=la(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ih(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&jl(t)))}function Ex(t,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),La(n,un,t.memoizedState.cache),Es();break;case 27:case 5:et(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Fa(n),n.flags|=128,null;s=bs(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?p_(t,n,a):(Fa(n),t=pa(t,n,a),t!==null?t.sibling:null)}Fa(n);break;case 19:if(n.flags&128)return nh(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(bs(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return nh(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Po(n,An.current),s)break;return null;case 22:return n.lanes=0,l_(t,n,a,n.pendingProps);case 24:La(n,un,t.memoizedState.cache)}return pa(t,n,a)}function v_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!ih(t,a)&&(n.flags&128)===0)return fn=!1,Ex(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,_e&&(n.flags&1048576)!==0&&Zm(n,Ao,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=ws(n.elementType),n.type=t,typeof t=="function")cf(t)?(s=Ls(t,s),n.tag=1,n=h_(null,n,t,s,a)):(n.tag=0,n=Kf(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===j){n.tag=11,n=s_(null,n,t,s,a);break t}else if(u===_t){n.tag=14,n=r_(null,n,t,s,a);break t}else if(u===lt){n.tag=10,n.type=t,n=__(null,n,a);break t}}throw n=Ut(t)||t,Error(r(306,n,""))}}return n;case 0:return Kf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Ls(s,n.pendingProps),h_(t,n,s,u,a);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;u=c.element,Ef(t,n),Oo(n,s,null,a);var _=n.memoizedState;if(s=_.cache,La(n,un,s),s!==c.cache&&_f(n,[un],a,!0),Lo(),s=_.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=d_(t,n,s,a);break t}else if(s!==u){u=pi(Error(r(424)),n),Ro(u),n=d_(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=Si(t.firstChild),yn=n,_e=!0,Ua=null,_i=!0,a=lg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Es(),s===u){n=pa(t,n,a);break t}gn(t,n,s,a)}n=n.child}return n;case 26:return yr(t,n),t===null?(a=X0(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(n.stateNode=M0(n.type,n.pendingProps,qe.current,n)):n.memoizedState=X0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&_e&&(s=n.stateNode=F0(n.type,n.pendingProps,qe.current),yn=n,_i=!0,u=Ze,ja(n.type)?($h=u,Ze=Si(s.firstChild)):Ze=u),gn(t,n,n.pendingProps.children,a),yr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((u=s=Ze)&&(s=_M(s,n.type,n.pendingProps,_i),s!==null?(n.stateNode=s,yn=n,Ze=Si(s.firstChild),_i=!1,u=!0):u=!1),u||Na(n)),et(n),u=n.type,c=n.pendingProps,_=t!==null?t.memoizedProps:null,s=c.children,kh(u,c)?s=null:_!==null&&kh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Uf(t,n,hx,null,null,a),Br._currentValue=u),yr(t,n),gn(t,n,s,a),n.child;case 6:return t===null&&_e&&((t=a=Ze)&&(a=vM(a,n.pendingProps,_i),a!==null?(n.stateNode=a,yn=n,Ze=null,t=!0):t=!1),t||Na(n)),null;case 13:return p_(t,n,a);case 4:return U(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Us(n,null,s,a):gn(t,n,s,a),n.child;case 11:return s_(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,yr(t,n),gn(t,n,s,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return __(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,As(n),u=Tn(u),s=s(u),n.flags|=1,gn(t,n,s,a),n.child;case 14:return r_(t,n,n.type,n.pendingProps,a);case 15:return o_(t,n,n.type,n.pendingProps,a);case 19:return nh(t,n,a);case 31:return xx(t,n,a);case 22:return l_(t,n,a,n.pendingProps);case 24:return As(n),s=Tn(un),t===null?(u=yf(),u===null&&(u=Ye,c=vf(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:s,cache:u},Mf(n),La(n,un,u)):((t.lanes&a)!==0&&(Ef(t,n),Oo(n,null,null,a),Lo()),u=t.memoizedState,c=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,un,s)):(s=c.cache,La(n,un,s),s!==u.cache&&_f(n,[un],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&ql(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:yr(t,n),gn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ma(t){t.flags|=4}function ah(t,n,a,s,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?W0(n,s):W0(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if($_())t.flags|=8192;else throw Ds=Jl,xf}else t.flags&=-16777217}function S_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!j0(n))if($_())t.flags|=8192;else throw Ds=Jl,xf}function _u(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?wl():536870912,t.lanes|=n,br|=n)}function Ho(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Tx(t,n,a){var s=n.pendingProps;switch(df(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),fa(un),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(dr(n)?ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,mf())),Ke(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(ma(n),c!==null?(Ke(n),S_(n,c)):(Ke(n),ah(n,u,null,s,a))):c?c!==t.memoizedState?(ma(n),Ke(n),S_(n,c)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ma(n),Ke(n),ah(n,u,t,s,a)),null;case 27:if(dt(n),a=qe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ma(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=Bt.current,dr(n)?Qm(n):(t=F0(u,s,a),n.stateNode=t,ma(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(dt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ma(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(c=Bt.current,dr(n))Qm(n);else{var _=Qo(qe.current);switch(c){case 1:c=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=_.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}c[Ct]=n,c[Xt]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)c.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=c;t:switch(Cn(c,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ma(n)}}return Ke(n),n.subtreeFlags&=-33554433,ah(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ma(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=qe.current,dr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=yn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Ct]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||v0(t.nodeValue,a)),t||Na(n,!0)}else t=Qo(t).createTextNode(s),t[Ct]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=dr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ct]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=dr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Ct]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),_u(n,n.updateQueue),Ke(n),null);case 4:return b(),t===null&&Fh(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return fa(n.type),Ke(n),null;case 19:if(wf(n),s=n.memoizedState,s===null)return Ke(n),null;if(u=(n.flags&128)!==0,c=s.rendering,c===null)if(u)Ho(s,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=nu(t),c!==null){for(n.flags|=128,Ho(s,!1),t=c.updateQueue,n.updateQueue=t,_u(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ym(a,t),a=a.sibling;return Po(n,An.current&1|2),_e&&ua(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&G()>wu&&(n.flags|=128,u=!0,Ho(s,!1),n.lanes=4194304)}else{if(!u)if(t=nu(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,_u(n,t),Ho(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!_e)return Ke(n),null}else 2*G()-s.renderingStartTime>wu&&a!==536870912&&(n.flags|=128,u=!0,Ho(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=G(),t.sibling=null,c=An.current,c=u?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||_e?Po(n,c):(a=c,ie(bn,n),ie(An,a),Ln===null&&(Ln=n)),_e&&ua(n,s.treeForkCount),t}return Ke(n),null;case 22:case 23:return ni(n),Rf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&_u(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Nt(Cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),fa(un),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(r(156,n.tag))}function bx(t,n){switch(df(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return fa(un),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(r(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return wf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return fa(n.type),null;case 22:case 23:return ni(n),Rf(),t!==null&&Nt(Cs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return fa(un),null;case 25:return null;default:return null}}function y_(t,n){switch(df(n),n.tag){case 3:fa(un),b();break;case 26:case 27:case 5:dt(n);break;case 4:b();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:wf(n);break;case 10:fa(n.type);break;case 22:case 23:ni(n),Rf(),t!==null&&Nt(Cs);break;case 24:fa(un)}}function Go(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var c=a.create,_=a.inst;s=c(),_.destroy=s}a=a.next}while(a!==u)}}catch(E){Be(n,n.return,E)}}function Ga(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var c=u.next;s=c;do{if((s.tag&t)===t){var _=s.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,u=n;var N=a,W=E;try{W()}catch(nt){Be(u,N,nt)}}}s=s.next}while(s!==c)}}catch(nt){Be(n,n.return,nt)}}function x_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{cg(n,a)}catch(s){Be(t,t.return,s)}}}function M_(t,n,a){a.props=Ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function Gi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,c=ra(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=w0(c)),s=u.ref;break;case 7:if(t.stateNode===null){var _=new oi(t);g(t.child,!1,mM,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(E){Be(t,n,E)}}function Rn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Be(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(t,n,u)}else a.current=null}function vu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)P0(t.stateNode,n[a])}function E_(t){for(var n=t.return;n!==null&&(rh(n)&&P0(t.stateNode,n.stateNode),!sh(n));)n=n.return}function Vo(t){for(var n=t.return;n!==null&&(rh(n)&&gM(t.stateNode,n.stateNode),!sh(n));)n=n.return}function sh(t){return t.tag===5||t.tag===3||t.tag===27}function rh(t){return t&&t.tag===7&&t.stateNode!==null}function oh(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Be(t,t.return,u)}}function lh(t,n,a){try{var s=t.stateNode;Qx(s,t.type,a,n),s[Xt]=n}catch(u){Be(t,t.return,u)}}function T_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function uh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||T_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ch(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi)),vu(t,s),De=!0;else if(u!==4&&(u===27&&(vu(t,s),s=null,ja(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(ch(t,n,a,s),t=t.sibling;t!==null;)ch(t,n,a,s),t=t.sibling}function Su(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),vu(t,s),De=!0;else if(u!==4&&(u===27&&(vu(t,s),s=null,ja(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Su(t,n,a,s),t=t.sibling;t!==null;)Su(t,n,a,s),t=t.sibling}function b_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,s,a),n[Ct]=t,n[Xt]=a}catch(c){Be(t,t.return,c)}}var yu=!1,ii=null;function A_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(yu=!0)}var Vi=null;function R_(){var t=Vi;return Vi=null,t}var kn=0;function xr(t,n,a,s,u){return kn=0,C_(t.child,n,a,s,u)}function C_(t,n,a,s,u){for(var c=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var E=Wh(_);s.push(E),E.view&&(c=!0)}else c||Wh(_).view&&(c=!0);yu=!0,R0(_,kn===0?n:n+"_"+kn,a),kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||C_(t.child,n,a,s,u)&&(c=!0));t=t.sibling}return c}function Xi(t,n){for(;t!==null;)t.tag===5?C0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Xi(t.child,n)),t=t.sibling}function xu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(xu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=oa(n.default,n.share),n!=="none"&&(xr(t,a,n,null,!1)||Xi(t.child,!1))}t=t.sibling}}function fh(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=ra(s,a),c=oa(s.default,a.paired?s.share:s.enter);c!=="none"?xr(t,u,c,null,!1)?(xu(t),a.paired||n||wr(t,s.onEnter)):Xi(t.child,!1):xu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)fh(t,n),t=t.sibling;else xu(t)}function hh(t){if(ii!==null&&ii.size!==0){var n=ii;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var c=oa(a.default,a.share);if(c!=="none"&&(xr(t,s,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,wr(t,a.onShare)):Xi(t.child,!1)),n.delete(s),n.size===0)break}}}hh(t)}t=t.sibling}}}function dh(t){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode),s=ii!==null?ii.get(a):void 0,u=oa(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(xr(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,ii.delete(a),wr(t,n.onShare)):wr(t,n.onExit):Xi(t.child,!1)),ii!==null&&hh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)dh(t),t=t.sibling;else ii!==null&&hh(t)}function w_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode);n=oa(n.default,n.update),t.flags&=-5,n!=="none"&&xr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&w_(t);t=t.sibling}}function ph(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Xi(t.child,!1))}ph(t)}t=t.sibling}}function Mu(t){if(t.tag===30)t.stateNode.paired=null,Xi(t.child,!1),ph(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Mu(t),t=t.sibling;else ph(t)}function D_(t){for(t=t.child;t!==null;)t.tag===30?Xi(t.child,!1):(t.subtreeFlags&33554432)!==0&&D_(t),t=t.sibling}function mh(t,n,a,s,u,c,_){for(var E=!1;n!==null;){if(n.tag===5){var N=n.stateNode;if(c!==null&&kn<c.length){var W=c[kn],nt=Wh(N);(W.view||nt.view)&&(E=!0);var pt;if(pt=(t.flags&4)===0)if(nt.clip)pt=!0;else{pt=W.rect;var X=nt.rect;pt=pt.y!==X.y||pt.x!==X.x||pt.height!==X.height||pt.width!==X.width}pt&&(t.flags|=4),nt.abs?nt=!W.abs:(W=W.rect,nt=nt.rect,nt=W.height!==nt.height||W.width!==nt.width),nt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&R0(N,kn===0?a:a+"_"+kn,u),E&&(t.flags&4)!==0||(Vi===null&&(Vi=[]),Vi.push(N,kn===0?s:s+"_"+kn,n.memoizedProps)),kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:mh(t,n.child,a,s,u,c,_)&&(E=!0));n=n.sibling}return E}function U_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=ra(a,s),c=oa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var E=t.child;kn=0,u=mh(s,E,u,u,c,_,!1),(t.flags&4)!==0&&u&&wr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&U_(t);t=t.sibling}}var xn=!1,ze=!1,ki=!1,gh=!1,N_=typeof WeakSet=="function"?WeakSet:Set,Mn=null,qi=!1,Xo=!1,Eu=!1,_h=!1;function Ax(t,n,a){if(t=t.containerInfo,Vh=Fr,t=zm(t),nf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var c=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var E=0,N=-1,W=-1,nt=0,pt=0,X=t,tt=null;e:for(;;){for(var Dt;X!==s||c!==0&&X.nodeType!==3||(N=E+c),X!==_||u!==0&&X.nodeType!==3||(W=E+u),X.nodeType===3&&(E+=X.nodeValue.length),(Dt=X.firstChild)!==null;)tt=X,X=Dt;for(;;){if(X===t)break e;if(tt===s&&++nt===c&&(N=E),tt===_&&++pt===u&&(W=E),(Dt=X.nextSibling)!==null)break;X=tt,tt=X.parentNode}X=Dt}s=N===-1||W===-1?null:{start:N,end:W}}else s=null}s=s||{start:0,end:0}}else s=null;for(Xh={focusedElem:t,selectionRange:s},Fr=!1,a=(a&335544064)===a,Mn=n,n=a?9270:1024;Mn!==null;){if(t=Mn,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&dh(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&A_(t),Tu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&dh(s),Tu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&A_(t),Tu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Mn=s):(a&&w_(t),Tu(a))}}ii=null}function Tu(t){for(;Mn!==null;){var n=Mn,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var _=Ls(n.type,u);a=c.getSnapshotBeforeUpdate(_,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){Be(n,n.return,E)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Kh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Kh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ra(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=oa(u.default,u.update),u!=="none"&&xr(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Mn=s;break}Mn=n.return}}function L_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),s&4&&Go(5,a);break;case 1:if(Yi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Be(a,a.return,_)}else{var u=Ls(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Be(a,a.return,_)}}s&64&&x_(a),s&512&&Gi(a,a.return);break;case 3:if(Yi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{cg(t,n)}catch(_){Be(a,a.return,_)}}break;case 27:n===null&&s&4&&b_(a);case 26:case 5:Yi(t,a),n===null&&s&4&&oh(a),s&512&&Gi(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),s&4&&I_(t,a);break;case 13:Yi(t,a),s&4&&B_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Bx.bind(null,a),SM(t,a))));break;case 22:if(s=a.memoizedState!==null||xn,!s){var c=n!==null&&n.memoizedState!==null||ze;n=xn,u=ze,xn=s,(ze=c)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ci(t,a,s)):Yi(t,a),xn=n,ze=u}break;case 30:Yi(t,a),s&512&&Gi(a,a.return);break;case 7:s&512&&Gi(a,a.return);default:Yi(t,a)}}function vh(t,n){for(t=t.child;t!==null;)O_(t,n),t=t.sibling}function O_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,_=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(N){Be(t,t.return,N)}Sh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,De=!0}catch(N){Be(t,t.return,N)}break;case 18:try{var E=t.stateNode;n?A0(E,!0):A0(t.stateNode,!1)}catch(N){Be(t,t.return,N)}break;case 22:case 23:t.memoizedState===null&&vh(t,n);break;default:vh(t,n)}}function Sh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:O_(a,s);break t;case 22:a.memoizedState===null&&Sh(a,s);break t;default:Sh(a,s)}}t=t.sibling}}function P_(t){var n=t.alternate;n!==null&&(t.alternate=null,P_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&te(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,qn=!1;function Ai(t,n,a){for(a=a.child;a!==null;)z_(t,n,a),a=a.sibling}function z_(t,n,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:ze||Rn(a,n),Ai(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ze&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ze||Rn(a,n),Vo(a);var s=Je,u=qn;ja(a.type)&&(Je=a.stateNode,qn=!1),Ai(t,n,a),H0(a.stateNode,a.type,a.memoizedProps),Je=s,qn=u;break;case 5:ze||Rn(a,n),Vo(a);case 6:if(a.tag===6&&Vo(a),s=Je,u=qn,Je=null,Ai(t,n,a),Je=s,qn=u,Je!==null)if(qn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode),De=!0}catch(c){Be(a,n,c)}else try{Je.removeChild(a.stateNode),De=!0}catch(c){Be(a,n,c)}break;case 18:Je!==null&&(qn?(t=Je,b0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Hr(t)):b0(Je,a.stateNode));break;case 4:s=Je,u=qn,Je=a.stateNode.containerInfo,qn=!0,Ai(t,n,a),Je=s,qn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),ze||Ga(4,a,n),Ai(t,n,a);break;case 1:ze||(Rn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&M_(a,n,s)),Ai(t,n,a);break;case 21:Ai(t,n,a);break;case 22:ze=(s=ze)||a.memoizedState!==null,Ai(t,n,a),ze=s;break;case 30:Rn(a,n),Ai(t,n,a);break;case 7:ze||Rn(a,n),Ai(t,n,a);break;default:Ai(t,n,a)}}function I_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Hr(t)}catch(a){Be(n,n.return,a)}}}function B_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Hr(t)}catch(a){Be(n,n.return,a)}}function Rx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new N_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new N_),n;default:throw Error(r(435,t.tag))}}function bu(t,n){var a=Rx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Fx.bind(null,t,s);s.then(u,u)}})}function Fn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var c=s[u],_=t,E=n,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(ja(N.type)){Je=N.stateNode,qn=!1;break t}break;case 5:Je=N.stateNode,qn=!1;break t;case 3:case 4:Je=N.stateNode.containerInfo,qn=!0;break t}N=N.return}if(Je===null)throw Error(r(160));z_(_,E,c),Je=null,qn=!1,_=c.alternate,_!==null&&(_.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)F_(n,t,a),n=n.sibling}var Ri=null;function F_(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var _=s[c];_.ref.impl=_.nextImpl}Fn(n,t,a),Hn(t),u&4&&(Ga(3,t,t.return),Go(3,t),Ga(5,t,t.return));break;case 1:Fn(n,t,a),Hn(t),u&512&&(ze||s===null||Rn(s,s.return)),u&64&&xn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ri,Fn(n,t,a),Hn(t),u&512&&(ze||s===null||Rn(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(xn)t.stateNode=M0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[Ne]||s[Ct]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),Cn(s,n,a),s[Ct]=t,we(s),n=s;break t;case"link":if(c=Y0("link","href",u).get(n+(a.href||""))){for(_=0;_<c.length;_++)if(s=c[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(_,1);break e}}s=u.createElement(n),Cn(s,n,a),u.head.appendChild(s);break;case"meta":if(c=Y0("meta","content",u).get(n+(a.content||""))){for(_=0;_<c.length;_++)if(s=c[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(_,1);break e}}s=u.createElement(n),Cn(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[Ct]=t,we(s),n=s}t.stateNode=n}else xn||id(c,t.type,t.stateNode);else t.stateNode=q0(c,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||ze||n.parentNode.removeChild(n)):u.count--,a===null?xn||id(c,t.type,t.stateNode):q0(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&lh(t,t.memoizedProps,s.memoizedProps);break;case 27:Fn(n,t,a),Hn(t),u&512&&(ze||s===null||Rn(s,s.return)),s!==null&&u&4&&lh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=ki,ki=!1,Fn(n,t,a),ki=c,Hn(t),u&512&&(ze||s===null||Rn(s,s.return)),t.flags&32){n=t.stateNode;try{ir(n,""),De=!0}catch(nt){Be(t,t.return,nt)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,lh(t,n,s!==null?s.memoizedProps:n)),u&1024&&(gh=!0);break;case 6:if(Fn(n,t,a),Hn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,De=!0}catch(nt){Be(t,t.return,nt)}}break;case 3:if(De=!1,Hu=null,c=Ri,Ri=Jo(n.containerInfo),Fn(n,t,a),Ri=c,Hn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Hr(n.containerInfo)}catch(nt){Be(t,t.return,nt)}gh&&(gh=!1,H_(t)),De=!1;break;case 4:u=ki,ki=xn,s=rm(),c=Ri,Ri=Jo(t.stateNode.containerInfo),Fn(n,t,a),Hn(t),Ri=c,De&&Xo&&(Eu=!0),De=s,ki=u;break;case 12:Fn(n,t,a),Hn(t);break;case 31:Fn(n,t,a),Hn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bu(t,n)));break;case 13:Fn(n,t,a),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Cu=G()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bu(t,n)));break;case 22:c=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var E=xn,N=ze,W=ki;xn=E||c,ki=W||c,ze=N||_,Fn(n,t,a),ze=N,ki=W,xn=E,Hn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||_||xn||ze||(n=_||ze,a=xn,s=ze,xn=c||xn,ze=n,Va(t,2),xn=a,ze=s),!c&&ki||vh(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,bu(t,a))));break;case 19:Fn(n,t,a),Hn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bu(t,n)));break;case 30:u&512&&(ze||s===null||Rn(s,s.return)),u=rm(),c=Xo,_=(a&335544064)===a,E=t.memoizedProps,Xo=_&&oa(E.default,E.update)!=="none",Fn(n,t,a),Hn(t),_&&s!==null&&De&&(t.flags|=4),Xo=c,De=u;break;case 21:break;case 7:u&512&&(ze||s===null||Rn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Fn(n,t,a),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(T_(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(rh(u)){var c=u.stateNode;s===null?s=[c]:s.push(c)}if(sh(u))break;u=u.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var E=a.stateNode,N=uh(t);Su(t,N,E,_);break;case 5:var W=a.stateNode;a.flags&32&&(ir(W,""),a.flags&=-33);var nt=uh(t);Su(t,nt,W,_);break;case 3:case 4:var pt=a.stateNode.containerInfo,X=uh(t);ch(t,X,pt,_);break;default:throw Error(r(161))}}catch(tt){Be(t,t.return,tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function H_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;H_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Fr=!0,n.reset(),Fr=!1),t=t.sibling}}function Mr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)G_(n,t),n=n.sibling;else U_(n)}function G_(t,n){var a=t.alternate;if(a===null)fh(t,!1);else switch(t.tag){case 3:if(_h=qi=!1,R_(),Mr(n,t),!qi&&!Eu){if(t=Vi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];C0(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),_h=!0}Vi=null;break;case 5:Mr(n,t);break;case 4:s=qi,qi=!1,Mr(n,t),qi&&(Eu=!0),qi=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?fh(t,!1):Mr(n,t));break;case 30:s=qi,u=R_(),qi=!1,Mr(n,t),qi&&(t.flags|=4);var c=t.memoizedProps,_=t.stateNode;n=ra(c,_),_=ra(a.memoizedProps,_);var E=oa(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,kn=0,n=mh(t,a,n,_,E,c,!0),kn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(wr(t,t.memoizedProps.onUpdate),Vi=u):u!==null&&(u.push.apply(u,Vi),Vi=u),qi=(t.flags&32)!==0?!0:s;break;default:Mr(n,t)}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)L_(t,n.alternate,n),n=n.sibling}function Va(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:Ga(4,a,a.return),Va(a,s);break;case 1:Rn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&M_(a,a.return,u),Va(a,s);break;case 27:(s&2)!==0&&H0(a.stateNode,a.type,a.memoizedProps);case 5:Rn(a,a.return),a.tag!==5&&a.tag!==27||Vo(a),Va(a,s);break;case 6:Vo(a);break;case 26:Rn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||ze||u.parentNode.removeChild(u),Va(a,s);break;case 22:a.memoizedState===null&&Va(a,s);break;case 30:Rn(a,a.return),Va(a,s);break;case 7:Rn(a,a.return);default:Va(a,s)}t=t.sibling}}function Ci(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,c=n,_=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ci(u,c,a),Go(4,c);break;case 1:if(Ci(u,c,a),s=c,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Be(s,s.return,nt)}if(s=c,u=s.updateQueue,u!==null){var N=s.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)ug(W[u],N)}catch(nt){Be(s,s.return,nt)}}E&&_&64&&x_(c),Gi(c,c.return);break;case 27:(a&2)!==0&&b_(c);case 5:c.tag!==5&&c.tag!==27||E_(c),Ci(u,c,a),E&&s===null&&_&4&&oh(c),Gi(c,c.return);break;case 6:E_(c);break;case 26:N=c.stateNode,c.memoizedState!==null||N===null||xn||id(Jo(N.ownerDocument),c.type,N),Ci(u,c,a),E&&s===null&&_&4&&oh(c),Gi(c,c.return);break;case 12:Ci(u,c,a);break;case 31:Ci(u,c,a),E&&_&4&&I_(u,c);break;case 13:Ci(u,c,a),E&&_&4&&B_(u,c);break;case 22:c.memoizedState===null&&Ci(u,c,a),Gi(c,c.return);break;case 30:Ci(u,c,a),Gi(c,c.return);break;case 7:Gi(c,c.return);default:Ci(u,c,a)}n=n.sibling}}function yh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Co(a))}function xh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Co(t))}function vi(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)V_(t,n,a,s),n=n.sibling;else u&&D_(n)}function V_(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Mu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),c&2048&&Go(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),u&&_h&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Co(c)));break;case 12:if(c&2048){vi(t,n,a,s),c=n.stateNode;try{var _=n.memoizedProps,E=_.id,N=_.onPostCommit;typeof N=="function"&&N(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(W){Be(n,n.return,W)}}else vi(t,n,a,s);break;case 31:vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,E=n.alternate,n.memoizedState!==null?(u&&E!==null&&E.memoizedState===null&&Mu(E),_._visibility&2?vi(t,n,a,s):ko(t,n)):(u&&E!==null&&E.memoizedState!==null&&Mu(n),_._visibility&2?vi(t,n,a,s):(_._visibility|=2,Er(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&yh(E,n);break;case 24:vi(t,n,a,s),c&2048&&xh(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(Xi(c.child,!0),Xi(n.child,!0))),vi(t,n,a,s);break;default:vi(t,n,a,s)}}function Er(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,_=n,E=a,N=s,W=_.flags;switch(_.tag){case 0:case 11:case 15:Er(c,_,E,N,u),Go(8,_);break;case 23:break;case 22:var nt=_.stateNode;_.memoizedState!==null?nt._visibility&2?Er(c,_,E,N,u):ko(c,_):(nt._visibility|=2,Er(c,_,E,N,u)),u&&W&2048&&yh(_.alternate,_);break;case 24:Er(c,_,E,N,u),u&&W&2048&&xh(_.alternate,_);break;default:Er(c,_,E,N,u)}n=n.sibling}}function ko(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:ko(a,s),u&2048&&yh(s.alternate,s);break;case 24:ko(a,s),u&2048&&xh(s.alternate,s);break;default:ko(a,s)}n=n.sibling}}var Os=8192;function Ps(t,n,a){if(t.subtreeFlags&Os)for(t=t.child;t!==null;)X_(t,n,a),t=t.sibling}function X_(t,n,a){switch(t.tag){case 26:Ps(t,n,a),t.flags&Os&&(t.memoizedState!==null?LM(a,Ri,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&K0(a,t)));break;case 5:Ps(t,n,a),t.flags&Os&&(t=t.stateNode,(n&335544128)===n&&K0(a,t));break;case 3:case 4:var s=Ri;Ri=Jo(t.stateNode.containerInfo),Ps(t,n,a),Ri=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Os,Os=16777216,Ps(t,n,a),Os=s):Ps(t,n,a));break;case 30:if((t.flags&Os)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,ii===null&&(ii=new Map),ii.set(s,u)}Ps(t,n,a);break;default:Ps(t,n,a)}}function k_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,Y_(s,t)}k_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)q_(t),t=t.sibling}function q_(t){switch(t.tag){case 0:case 11:case 15:qo(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:qo(t);break;case 12:qo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Au(t)):qo(t);break;default:qo(t)}}function Au(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,Y_(s,t)}k_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),Au(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Au(n));break;default:Au(n)}t=t.sibling}}function Y_(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Co(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Mn=s;else t:for(a=t;Mn!==null;){s=Mn;var u=s.sibling,c=s.return;if(P_(s),s===a){Mn=null;break t}if(u!==null){u.return=c,Mn=u;break t}Mn=c}}}var Cx={getCacheForType:function(t){var n=Tn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(un).controller.signal}},wx=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,ye=null,Ee=0,Ie=0,ai=null,Xa=!1,Tr=!1,Mh=!1,ga=0,sn=0,ka=0,zs=0,Ru=0,si=0,br=0,Yo=null,Yn=null,Eh=!1,Cu=0,W_=0,wu=1/0,Du=null,qa=null,tn=0,wi=null,Is=null,Wi=0,Th=0,bh=null,j_=null,Ar=null,Rr=null,Cr=null,Wo=0,Uu=null;function ri(){return(Oe&2)!==0&&Ee!==0?Ee&-Ee:Mt.T!==null?Ph():Et()}function Z_(){if(si===0)if((Ee&536870912)===0||_e){var t=ia;ia<<=1,(ia&3932160)===0&&(ia=262144),si=t}else si=536870912;return t=bn.current,t!==null&&(t.flags|=32),si}function wr(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=w0(ra(t.memoizedProps,a))),Rr===null&&(Rr=[]),Rr.push(n.bind(null,s))}}function Wn(t,n,a){(t===Ye&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(Dr(t,0),Ya(t,Ee,si,!1)),vs(t,a),((Oe&2)===0||t!==Ye)&&(t===Ye&&((Oe&2)===0&&(zs|=a),sn===4&&Ya(t,Ee,si,!1)),ji(t))}function K_(t,n,a){if((Oe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Aa(t,n),u=s?Nx(t,n):Rh(t,n,!0),c=s;do{if(u===0){Tr&&!s&&Ya(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!Dx(a)){u=Rh(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;u=Yo;var N=E.current.memoizedState.isDehydrated;if(N&&(Dr(E,_).flags|=256),_=Rh(E,_,!1),_!==2&&_!==6){if(Mh&&!N){E.errorRecoveryDisabledLanes|=c,zs|=c,u=4;break t}c=Yn,Yn=u,c!==null&&(Yn===null?Yn=c:Yn.push.apply(Yn,c))}u=_}if(c=!1,u!==2)continue}}if(u===1){Dr(t,0),Ya(t,n,0,!0);break}t:{switch(s=t,c=u,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ya(s,n,si,!Xa);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Cu+300-G(),10<u)){if(Ya(s,n,si,!Xa),_s(s,0,!0)!==0)break t;Wi=n,s.timeoutHandle=Yh(Q_.bind(null,s,a,Yn,Du,Eh,n,si,zs,br,Xa,c,"Throttled",-0,0),u);break t}Q_(s,a,Yn,Du,Eh,n,si,zs,br,Xa,c,null,-0,0)}}break}while(!0);ji(t)}function Q_(t,n,a,s,u,c,_,E,N,W,nt,pt,X,tt){t.timeoutHandle=-1;var Dt=n.subtreeFlags,kt=(c&335544064)===c;if(pt=null,(kt||Dt&8192||(Dt&16785408)===16785408)&&(pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},ii=null,X_(n,c,pt),kt&&(Dt=pt,kt=t.containerInfo,kt=(kt.nodeType===9?kt:kt.ownerDocument).__reactViewTransition,kt!=null&&(Dt.count++,Dt.waitingForViewTransition=!0,Dt=el.bind(Dt),kt.finished.then(Dt,Dt))),Dt=(c&62914560)===c?Cu-G():(c&4194048)===c?W_-G():0,Dt=OM(pt,Dt),Dt!==null)){Wi=c,t.cancelPendingCommit=Dt(s0.bind(null,t,n,c,a,s,u,_,E,N,W,nt,pt,null,X,tt)),Ya(t,c,_,!W);return}s0(t,n,c,a,s,u,_,E,N,W,nt,pt)}function Dx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],c=u.getSnapshot;u=u.value;try{if(!ei(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,a,s){n=Cl(t,n),n&=~Ru,n&=~zs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var c=31-Un(u),_=1<<c;s[c]=-1,u&=~_}a!==0&&R(t,a,n)}function Nu(){return(Oe&6)===0?(jo(0),!1):!0}function Ah(){if(ye!==null){if(Ie===0)var t=ye.return;else t=ye,ca=Ts=null,Of(t),gr=null,Uo=0,t=ye;for(;t!==null;)y_(t.alternate,t),t=t.return;ye=null}}function Dr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,tM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,Ah(),Ye=t,ye=a=la(t.current,null),Ee=n,Ie=0,ai=null,Xa=!1,Tr=Aa(t,n),Mh=!1,br=si=Ru=zs=ka=sn=0,Yn=Yo=null,Eh=!1,ga=Cl(t,n),Hl(),a}function J_(t,n){he=null,Mt.H=fu,n===mr||n===Ql?(n=sg(),Ie=3):n===xf?(n=sg(),Ie=4):Ie=n===Zf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,ye===null&&(sn=1,hu(t,pi(n,t.current)))}function $_(){var t=bn.current;return t===null?!0:(Ee&4194048)===Ee?Ln===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===Ln:!1}function t0(){var t=Mt.H;return Mt.H=fu,t===null?fu:t}function e0(){var t=Mt.A;return Mt.A=Cx,t}function Lu(){sn=4,Xa||(Ee&4194048)!==Ee&&bn.current!==null||(Tr=!0),(ka&134217727)===0&&(zs&134217727)===0||Ye===null||Ya(Ye,Ee,si,!1)}function Rh(t,n,a){var s=Oe;Oe|=2;var u=t0(),c=e0();(Ye!==t||Ee!==n)&&(Du=null,Dr(t,n)),n=!1;var _=sn;t:do try{if(Ie!==0&&ye!==null){var E=ye,N=ai;switch(Ie){case 8:Ah(),_=6;break t;case 3:case 2:case 9:case 6:bn.current===null&&(n=!0);var W=Ie;if(Ie=0,ai=null,Ur(t,E,N,W),a&&Tr){_=0;break t}break;default:W=Ie,Ie=0,ai=null,Ur(t,E,N,W)}}Ux(),_=sn;break}catch(nt){J_(t,nt)}while(!0);return n&&t.shellSuspendCounter++,ca=Ts=null,Oe=s,Mt.H=u,Mt.A=c,ye===null&&(Ye=null,Ee=0,Hl()),_}function Ux(){for(;ye!==null;)n0(ye)}function Nx(t,n){var a=Oe;Oe|=2;var s=t0(),u=e0();Ye!==t||Ee!==n?(Du=null,wu=G()+500,Dr(t,n)):Tr=Aa(t,n);t:do try{if(Ie!==0&&ye!==null){n=ye;var c=ai;e:switch(Ie){case 1:Ie=0,ai=null,Ur(t,n,c,1);break;case 2:case 9:if(ig(c)){Ie=0,ai=null,i0(n);break}n=function(){Ie!==2&&Ie!==9||Ye!==t||(Ie=7),ji(t)},c.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:ig(c)?(Ie=0,ai=null,i0(n)):(Ie=0,ai=null,Ur(t,n,c,7));break;case 5:var _=null;switch(ye.tag){case 26:_=ye.memoizedState;case 5:case 27:var E=ye;if(_?j0(_):E.stateNode.complete){Ie=0,ai=null;var N=E.sibling;if(N!==null)ye=N;else{var W=E.return;W!==null?(ye=W,Ou(W)):ye=null}break e}}Ie=0,ai=null,Ur(t,n,c,5);break;case 6:Ie=0,ai=null,Ur(t,n,c,6);break;case 8:Ah(),sn=6;break t;default:throw Error(r(462))}}Lx();break}catch(nt){J_(t,nt)}while(!0);return ca=Ts=null,Mt.H=s,Mt.A=u,Oe=a,ye!==null?0:(Ye=null,Ee=0,Hl(),sn)}function Lx(){for(;ye!==null&&!Ot();)n0(ye)}function n0(t){var n=v_(t.alternate,t,ga);t.memoizedProps=t.pendingProps,n===null?Ou(t):ye=n}function i0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=f_(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=f_(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Of(n);var s=n;s===yn&&(_e?(Yl(s),s.tag===5&&s.stateNode!=null&&(Ze=s.stateNode)):(Yl(s),_e=!0));default:y_(a,n),n=ye=Ym(n,ga),n=v_(a,n,ga)}t.memoizedProps=t.pendingProps,n===null?Ou(t):ye=n}function Ur(t,n,a,s){ca=Ts=null,Of(n),gr=null,Uo=0;var u=n.return;try{if(yx(t,u,n,a,Ee)){sn=1,hu(t,pi(a,t.current)),ye=null;return}}catch(c){if(u!==null)throw ye=u,c;sn=1,hu(t,pi(a,t.current)),ye=null;return}n.flags&32768?(_e||s===1?t=!0:Tr||(Ee&536870912)!==0?t=!1:(Xa=t=!0,(s===2||s===9||s===3||s===6)&&(s=bn.current,s!==null&&s.tag===13&&(s.flags|=16384))),a0(n,t)):Ou(n)}function Ou(t){var n=t;do{if((n.flags&32768)!==0){a0(n,Xa);return}t=n.return;var a=Tx(n.alternate,n,ga);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);sn===0&&(sn=5)}function a0(t,n){do{var a=bx(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);sn=6,ye=null}function s0(t,n,a,s,u,c,_,E,N,W,nt,pt){t.cancelPendingCommit=null;do Pu();while(tn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Ye&&(ye=Ye=null,Ee=0),Is=n,wi=t,Wi=a,bh=u,j_=s,Ox(t,n,a,_,E,N,pt)}}function Ox(t,n,a,s,u,c,_){var E=n.lanes|n.childLanes;if(Th=E,E|=lf,Bc(t,a,E,s,u,c),Rr=null,(a&335544064)===a?(Cr=lx(t),s=10262):(Cr=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,Hx(yt,function(){return Uh(),null})):(t.callbackNode=null,t.callbackPriority=0),yu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Mt.T,Mt.T=null,u=qt.p,qt.p=2,c=Oe,Oe|=4;try{Ax(t,n,a)}finally{Oe=c,qt.p=u,Mt.T=s}}tn=1,yu?Ar=rM(_,t.containerInfo,Cr,Ch,wh,zx,Dh,Uh,Px):(Ch(),wh(),Dh())}function Px(t){if(tn!==0){var n=wi.onRecoverableError;n(t,{componentStack:null})}}function zx(){tn===3&&(tn=0,G_(Is,wi),tn=4)}function Ch(){if(tn===1){tn=0;var t=wi,n=Is,a=Wi,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Mt.T,Mt.T=null;var u=qt.p;qt.p=2;var c=Oe;Oe|=4;try{Xo=Eu=!1,F_(n,t,a),a=Xh;var _=zm(t.containerInfo),E=a.focusedElem,N=a.selectionRange;if(_!==E&&E&&E.ownerDocument&&Pm(E.ownerDocument.documentElement,E)){if(N!==null&&nf(E)){var W=N.start,nt=N.end;if(nt===void 0&&(nt=W),"selectionStart"in E)E.selectionStart=W,E.selectionEnd=Math.min(nt,E.value.length);else{var pt=E.ownerDocument||document,X=pt&&pt.defaultView||window;if(X.getSelection){var tt=X.getSelection(),Dt=E.textContent.length,kt=Math.min(N.start,Dt),de=N.end===void 0?kt:Math.min(N.end,Dt);!tt.extend&&kt>de&&(_=de,de=kt,kt=_);var Y=Om(E,kt),H=Om(E,de);if(Y&&H&&(tt.rangeCount!==1||tt.anchorNode!==Y.node||tt.anchorOffset!==Y.offset||tt.focusNode!==H.node||tt.focusOffset!==H.offset)){var J=pt.createRange();J.setStart(Y.node,Y.offset),tt.removeAllRanges(),kt>de?(tt.addRange(J),tt.extend(H.node,H.offset)):(J.setEnd(H.node,H.offset),tt.addRange(J))}}}}for(pt=[],tt=E;tt=tt.parentNode;)tt.nodeType===1&&pt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pt.length;E++){var ht=pt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Fr=!!Vh,Xh=Vh=null}finally{Oe=c,qt.p=u,Mt.T=s}}t.current=n,tn=2}}function wh(){if(tn===2){tn=0;var t=wi,n=Is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Mt.T,Mt.T=null;var s=qt.p;qt.p=2;var u=Oe;Oe|=4;try{L_(t,n.alternate,n)}finally{Oe=u,qt.p=s,Mt.T=a}}tn=3}}function Dh(){if(tn===4||tn===3){tn=0;var t=Ar;Ar=null,fe();var n=wi,a=Is,s=Wi,u=j_,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?tn=5:(tn=0,Is=wi=null,r0(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(qa=null),Q(s),a=a.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Me,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Mt.T,c=qt.p,qt.p=2,Mt.T=null;try{for(var _=n.onRecoverableError,E=0;E<u.length;E++){var N=u[E];_(N.value,{componentStack:N.stack})}}finally{Mt.T=a,qt.p=c}}if(u=Rr,_=Cr,Cr=null,u!==null&&(Rr=null,_===null&&(_=[]),t!==null))for(N=0;N<u.length;N++)a=(0,u[N])(_),a!==void 0&&t.finished.finally(a);(Wi&3)!==0&&Pu(),ji(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===Uu?Wo++:(Wo=0,Uu=n):(Wo=0,Uu=null),jo(0)}}function r0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Co(n)))}function Pu(){return Ar!==null&&(Ar.skipTransition(),Ar=null),Ch(),wh(),Dh(),Uh()}function Uh(){if(tn!==5)return!1;var t=wi,n=Th;Th=0;var a=Q(Wi),s=Mt.T,u=qt.p;try{qt.p=32>a?32:a,Mt.T=null,a=bh,bh=null;var c=wi,_=Wi;if(tn=0,Is=wi=null,Wi=0,(Oe&6)!==0)throw Error(r(331));var E=Oe;if(Oe|=4,q_(c.current),V_(c,c.current,_,a),Oe=E,jo(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Me,c)}catch{}return!0}finally{qt.p=u,Mt.T=s,r0(t,n)}}function o0(t,n,a){n=pi(a,n),n=jf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(vs(t,2),ji(t))}function Be(t,n,a){if(t.tag===3)o0(t,t,a);else for(;n!==null;){if(n.tag===3){o0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(qa===null||!qa.has(s))){t=pi(a,t),a=i_(2),s=Ia(n,a,2),s!==null&&(a_(a,s,n,t),vs(s,2),ji(s));break}}n=n.return}}function Nh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new wx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Mh=!0,u.add(a),t=Ix.bind(null,t,n,a),n.then(t,t))}function Ix(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(Ee&a)===a&&((sn===4||sn===3&&(Ee&62914560)===Ee&&300>G()-Cu)&&(Oe&2)===0?Dr(t,0):Ru|=a,br===Ee&&(br=0)),ji(t)}function l0(t,n){n===0&&(n=wl()),t=xs(t,n),t!==null&&(vs(t,n),ji(t))}function Bx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),l0(t,a)}function Fx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),l0(t,a)}function Hx(t,n){return ne(t,n)}var Nr=null,Lr=null,Lh=!1,zu=!1,Oh=!1,Wa=0;function ji(t){t!==Lr&&t.next===null&&(Lr===null?Nr=Lr=t:Lr=Lr.next=t),zu=!0,Lh||(Lh=!0,Vx())}function jo(t,n){if(!Oh&&zu){Oh=!0;do for(var a=!1,s=Nr;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var c=0;else{var _=s.suspendedLanes,E=s.pingedLanes;c=(1<<31-Un(42|t)+1)-1,c&=u&~(_&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,h0(s,c))}else c=Ee,c=_s(s,s===Ye?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Aa(s,c)||(a=!0,h0(s,c));s=s.next}while(a);Oh=!1}}function Gx(){u0()}function u0(){zu=Lh=!1;var t=0;Wa!==0&&$x()&&(t=Wa);for(var n=G(),a=null,s=Nr;s!==null;){var u=s.next,c=c0(s,n);c===0?(s.next=null,a===null?Nr=u:a.next=u,u===null&&(Lr=a)):(a=s,(t!==0||(c&3)!==0)&&(zu=!0)),s=u}tn!==0&&tn!==5||jo(t),Wa!==0&&(Wa=0)}function c0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var _=31-Un(c),E=1<<_,N=u[_];N===-1?((E&a)===0||(E&s)!==0)&&(u[_]=Ic(E,n)):N<=n&&(t.expiredLanes|=E),c&=~E}if(n=Ye,a=Ee,a=_s(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&jt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Aa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&jt(s),Q(a)){case 2:case 8:a=Gt;break;case 32:a=yt;break;case 268435456:a=Yt;break;default:a=yt}return s=f0.bind(null,t),a=ne(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&jt(s),t.callbackPriority=2,t.callbackNode=null,2}function f0(t,n){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Pu()&&t.callbackNode!==a)return null;var s=Ee;return s=_s(t,t===Ye?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(K_(t,s,n),c0(t,G()),t.callbackNode!=null&&t.callbackNode===a?f0.bind(null,t):null)}function h0(t,n){if(Pu())return null;K_(t,n,!0)}function Vx(){eM(function(){(Oe&6)!==0?ne(wt,Gx):u0()})}function Ph(){if(Wa===0){var t=Rs;t===0&&(t=ms,ms<<=1,(ms&261888)===0&&(ms=256)),Wa=t}return Wa}function d0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nl(t)}function Xx(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var c=d0((u[Xt]||null).action),_=s.submitter;_&&(n=(n=_[Xt]||null)?d0(n.formAction):_.getAttribute("formAction"),n!==null&&(c=n,_=null));var E=new zl("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Wa!==0){var N=new FormData(u,_);Xf(a,{pending:!0,data:N,method:u.method,action:c},null,N)}}else typeof c=="function"&&(E.preventDefault(),N=new FormData(u,_),Xf(a,{pending:!0,data:N,method:u.method,action:c},c,N))},currentTarget:u}]})}}for(var zh=0;zh<of.length;zh++){var Ih=of[zh],kx=Ih.toLowerCase(),qx=Ih[0].toUpperCase()+Ih.slice(1);bi(kx,"on"+qx)}bi(Fm,"onAnimationEnd"),bi(Hm,"onAnimationIteration"),bi(Gm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(tx,"onTransitionRun"),bi(ex,"onTransitionStart"),bi(nx,"onTransitionCancel"),bi(Vm,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zo));function p0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var _=s.length-1;0<=_;_--){var E=s[_],N=E.instance,W=E.currentTarget;if(E=E.listener,N!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=W;try{c(u)}catch(nt){Fl(nt)}u.currentTarget=null,c=N}else for(_=0;_<s.length;_++){if(E=s[_],N=E.instance,W=E.currentTarget,E=E.listener,N!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=W;try{c(u)}catch(nt){Fl(nt)}u.currentTarget=null,c=N}}}}function xe(t,n){var a=n[$t];a===void 0&&(a=n[$t]=new Set);var s=t+"__bubble";a.has(s)||(m0(n,t,2,!1),a.add(s))}function Bh(t,n,a){var s=0;n&&(s|=4),m0(a,t,s,n)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function Fh(t){if(!t[Iu]){t[Iu]=!0,je.forEach(function(a){a!=="selectionchange"&&(Yx.has(a)||Bh(a,!1,t),Bh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Iu]||(n[Iu]=!0,Bh("selectionchange",!1,n))}}function m0(t,n,a,s){switch(av(n)){case 2:var u=BM;break;case 8:u=FM;break;default:u=sd}a=u.bind(null,n,a,t),u=void 0,!Yc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Hh(t,n,a,s,u){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var E=s.stateNode.containerInfo;if(E===u)break;if(_===4)for(_=s.return;_!==null;){var N=_.tag;if((N===3||N===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;E!==null;){if(_=Le(E),_===null)return;if(N=_.tag,N===5||N===6||N===26||N===27){s=c=_;continue t}E=E.parentNode}}s=s.return}mm(function(){var W=c,nt=kc(a),pt=[];t:{var X=Xm.get(t);if(X!==void 0){var tt=zl,Dt=t;switch(t){case"keypress":if(Ol(a)===0)break t;case"keydown":case"keyup":tt=Dy;break;case"focusin":Dt="focus",tt=Kc;break;case"focusout":Dt="blur",tt=Kc;break;case"beforeblur":case"afterblur":tt=Kc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=vy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=Py;break;case Fm:case Hm:case Gm:tt=xy;break;case Vm:tt=Iy;break;case"scroll":case"scrollend":tt=gy;break;case"wheel":tt=Fy;break;case"copy":case"cut":case"paste":tt=Ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=ym;break;case"submit":tt=Ly;break;case"toggle":case"beforetoggle":tt=Gy}var kt=(n&4)!==0,de=!kt&&(t==="scroll"||t==="scrollend"),Y=kt?X!==null?X+"Capture":null:X;kt=[];for(var H=W,J;H!==null;){var ht=H;if(J=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||J===null||Y===null||(ht=_o(H,Y),ht!=null&&kt.push(Ko(H,ht,J))),de)break;H=H.return}0<kt.length&&(X=new tt(X,Dt,null,a,nt),pt.push({event:X,listeners:kt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",tt&&a!==Xc&&(Dt=a.relatedTarget||a.fromElement)&&(Le(Dt)||Dt[ee]))break t;(X||tt)&&(Dt=nt.window===nt?nt:(tt=nt.ownerDocument)?tt.defaultView||tt.parentWindow:window,X?(tt=a.relatedTarget||a.toElement,X=W,tt=tt?Le(tt):null,tt!==null&&(de=f(tt),kt=tt.tag,tt!==de||kt!==5&&kt!==27&&kt!==6)&&(tt=null)):(X=null,tt=W),X!==tt&&(kt=vm,ht="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(kt=ym,ht="onPointerLeave",Y="onPointerEnter",H="pointer"),de=X==null?Dt:mn(X),J=tt==null?Dt:mn(tt),Dt=new kt(ht,H+"leave",X,a,nt),Dt.target=de,Dt.relatedTarget=J,ht=null,Le(nt)===W&&(kt=new kt(Y,H+"enter",tt,a,nt),kt.target=J,kt.relatedTarget=de,ht=kt),de=ht,kt=X&&tt?B(X,tt,Wx):null,X!==null&&g0(pt,Dt,X,kt,!1),tt!==null&&de!==null&&g0(pt,de,tt,kt,!0)))}t:{if(X=W?mn(W):window,tt=X.nodeName&&X.nodeName.toLowerCase(),tt==="select"||tt==="input"&&X.type==="file")var Ft=Cm;else if(Am(X))if(wm)Ft=Qy;else{Ft=Zy;var Te=jy}else tt=X.nodeName,!tt||tt.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?W&&Vc(W.elementType)&&(Ft=Cm):Ft=Ky;if(Ft&&(Ft=Ft(t,W))){Rm(pt,Ft,a,nt);break t}Te&&Te(t,X,W)}switch(Te=W?mn(W):window,t){case"focusin":(Am(Te)||Te.contentEditable==="true")&&(or=Te,af=W,bo=null);break;case"focusout":bo=af=or=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Im(pt,a,nt);break;case"selectionchange":if($y)break;case"keydown":case"keyup":Im(pt,a,nt)}var Jt;if(Jc)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else rr?Tm(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(xm&&a.locale!=="ko"&&(rr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&rr&&(Jt=gm()):(Ca=nt,Wc="value"in Ca?Ca.value:Ca.textContent,rr=!0)),Te=Bu(W,ae),0<Te.length&&(ae=new Sm(ae,t,null,a,nt),pt.push({event:ae,listeners:Te}),Jt?ae.data=Jt:(Jt=bm(a),Jt!==null&&(ae.data=Jt)))),(Jt=Xy?ky(t,a):qy(t,a))&&(ae=Bu(W,"onBeforeInput"),0<ae.length&&(Te=new Sm("onBeforeInput","beforeinput",null,a,nt),pt.push({event:Te,listeners:ae}),Te.data=Jt)),Xx(pt,t,W,a,nt)}p0(pt,n)})}function Ko(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Bu(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=_o(t,a),u!=null&&s.unshift(Ko(t,u,c)),u=_o(t,n),u!=null&&s.push(Ko(t,u,c))),t.tag===3)return s;t=t.return}return[]}function Wx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function g0(t,n,a,s,u){for(var c=n._reactName,_=[];a!==null&&a!==s;){var E=a,N=E.alternate,W=E.stateNode;if(E=E.tag,N!==null&&N===s)break;E!==5&&E!==26&&E!==27||W===null||(N=W,u?(W=_o(a,c),W!=null&&_.unshift(Ko(a,W,N))):u||(W=_o(a,c),W!=null&&_.push(Ko(a,W,N)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var jx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function _0(t){return(typeof t=="string"?t:""+t).replace(jx,`
`).replace(Zx,"")}function v0(t,n){return n=_0(n),_0(t)===n}function Fe(t,n,a,s,u,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||ir(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&ir(t,""+s);else return;break;case"className":Ul(t,"class",s);break;case"tabIndex":Ul(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ul(t,a,s);break;case"style":dm(t,s,c);return;case"data":if(n!=="object"){Ul(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Nl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Fe(t,n,"name",u.name,u,null),Fe(t,n,"formEncType",u.formEncType,u,null),Fe(t,n,"formMethod",u.formMethod,u,null),Fe(t,n,"formTarget",u.formTarget,u,null)):(Fe(t,n,"encType",u.encType,u,null),Fe(t,n,"method",u.method,u,null),Fe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Nl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Bi);return;case"onScroll":s!=null&&xe("scroll",t);return;case"onScrollEnd":s!=null&&xe("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Nl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),Dl(t,"popover",s);break;case"xlinkActuate":aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":aa(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":aa(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":aa(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":aa(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Dl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=py.get(a)||a,Dl(t,a,s);else return}De=!0}function Gh(t,n,a,s,u,c){switch(a){case"style":dm(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")ir(t,s);else if(typeof s=="number"||typeof s=="bigint")ir(t,""+s);else return;break;case"onScroll":s!=null&&xe("scroll",t);return;case"onScrollEnd":s!=null&&xe("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Bi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!zn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[Xt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,u);break t}De=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Dl(t,a,s)}return}De=!0}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var _=a[c];if(_!=null)switch(c){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,c,_,a,null)}}u&&Fe(t,n,"srcSet",a.srcSet,a,null),s&&Fe(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var E=c=_=u=null,N=null,W=null;for(s in a)if(a.hasOwnProperty(s)){var nt=a[s];if(nt!=null)switch(s){case"name":u=nt;break;case"type":_=nt;break;case"checked":N=nt;break;case"defaultChecked":W=nt;break;case"value":c=nt;break;case"defaultValue":E=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Fe(t,n,s,nt,a,null)}}um(t,c,E,N,W,_,u,!1);return;case"select":xe("invalid",t),s=_=c=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":c=E;break;case"defaultValue":_=E;break;case"multiple":s=E;default:Fe(t,n,u,E,a,null)}n=c,a=_,t.multiple=!!s,n!=null?nr(t,!!s,n,!1):a!=null&&nr(t,!!s,a,!0);return;case"textarea":xe("invalid",t),c=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":s=E;break;case"defaultValue":u=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Fe(t,n,_,E,a,null)}fm(t,s,u,c);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Fe(t,n,N,s,a,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<Zo.length;s++)xe(Zo[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in a)if(a.hasOwnProperty(W)&&(s=a[W],s!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,W,s,a,null)}return;default:if(Vc(n)){for(nt in a)a.hasOwnProperty(nt)&&(s=a[nt],s!==void 0&&Gh(t,n,nt,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Fe(t,n,E,s,a,null))}var Kx={};function Qx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,_=null,E=null,N=null,W=null,nt=null;for(tt in a){var pt=a[tt];if(a.hasOwnProperty(tt)&&pt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":N=pt;default:s.hasOwnProperty(tt)||Fe(t,n,tt,null,s,pt)}}for(var X in s){var tt=s[X];if(pt=a[X],s.hasOwnProperty(X)&&(tt!=null||pt!=null))switch(X){case"type":tt!==pt&&(De=!0),c=tt;break;case"name":tt!==pt&&(De=!0),u=tt;break;case"checked":tt!==pt&&(De=!0),W=tt;break;case"defaultChecked":tt!==pt&&(De=!0),nt=tt;break;case"value":tt!==pt&&(De=!0),_=tt;break;case"defaultValue":tt!==pt&&(De=!0),E=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:tt!==pt&&Fe(t,n,X,tt,s,pt)}}Hc(t,_,E,N,W,nt,c,u);return;case"select":tt=_=E=X=null;for(c in a)if(N=a[c],a.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":tt=N;default:s.hasOwnProperty(c)||Fe(t,n,c,null,s,N)}for(u in s)if(c=s[u],N=a[u],s.hasOwnProperty(u)&&(c!=null||N!=null))switch(u){case"value":c!==N&&(De=!0),X=c;break;case"defaultValue":c!==N&&(De=!0),E=c;break;case"multiple":c!==N&&(De=!0),_=c;default:c!==N&&Fe(t,n,u,c,s,N)}n=E,a=_,s=tt,X!=null?nr(t,!!a,X,!1):!!s!=!!a&&(n!=null?nr(t,!!a,n,!0):nr(t,!!a,a?[]:"",!1));return;case"textarea":tt=X=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Fe(t,n,E,null,s,u)}for(_ in s)if(u=s[_],c=a[_],s.hasOwnProperty(_)&&(u!=null||c!=null))switch(_){case"value":u!==c&&(De=!0),X=u;break;case"defaultValue":u!==c&&(De=!0),tt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==c&&Fe(t,n,_,u,s,c)}cm(t,X,tt);return;case"option":for(var Dt in a)if(X=a[Dt],a.hasOwnProperty(Dt)&&X!=null&&!s.hasOwnProperty(Dt))switch(Dt){case"selected":t.selected=!1;break;default:Fe(t,n,Dt,null,s,X)}for(N in s)if(X=s[N],tt=a[N],s.hasOwnProperty(N)&&X!==tt&&(X!=null||tt!=null))switch(N){case"selected":X!==tt&&(De=!0),t.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:Fe(t,n,N,X,s,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var kt in a)X=a[kt],a.hasOwnProperty(kt)&&X!=null&&!s.hasOwnProperty(kt)&&Fe(t,n,kt,null,s,X);for(W in s)if(X=s[W],tt=a[W],s.hasOwnProperty(W)&&X!==tt&&(X!=null||tt!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,n));break;default:Fe(t,n,W,X,s,tt)}return;default:if(Vc(n)){for(var de in a)X=a[de],a.hasOwnProperty(de)&&X!==void 0&&!s.hasOwnProperty(de)&&Gh(t,n,de,void 0,s,X);for(nt in s)X=s[nt],tt=a[nt],!s.hasOwnProperty(nt)||X===tt||X===void 0&&tt===void 0||Gh(t,n,nt,X,s,tt);return}}for(var Y in a)X=a[Y],a.hasOwnProperty(Y)&&X!=null&&!s.hasOwnProperty(Y)&&Fe(t,n,Y,null,s,X);for(pt in s)X=s[pt],tt=a[pt],!s.hasOwnProperty(pt)||X===tt||X==null&&tt==null||Fe(t,n,pt,X,s,tt)}function S0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],c=u.transferSize,_=u.initiatorType,E=u.duration;if(c&&E&&S0(_)){for(_=0,E=u.responseEnd,s+=1;s<a.length;s++){var N=a[s],W=N.startTime;if(W>E)break;var nt=N.transferSize,pt=N.initiatorType;nt&&S0(pt)&&(N=N.responseEnd,_+=nt*(N<E?1:(E-W)/(N-W)))}if(--s,n+=8*(c+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Vh=null,Xh=null;function Qo(t){return t.nodeType===9?t:t.ownerDocument}function y0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function M0(t,n,a,s){return a=Qo(a).createElement(t),a[Ct]=s,a[Xt]=n,Cn(a,t,n),we(a),a}function kh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qh=null;function $x(){var t=window.event;return t&&t.type==="popstate"?t===qh?!1:(qh=t,!0):(qh=null,!1)}var Yh=typeof setTimeout=="function"?setTimeout:void 0,tM=typeof clearTimeout=="function"?clearTimeout:void 0,E0=typeof Promise=="function"?Promise:void 0,T0=typeof requestAnimationFrame=="function"?requestAnimationFrame:Yh,eM=typeof queueMicrotask=="function"?queueMicrotask:typeof E0<"u"?function(t){return E0.resolve(null).then(t).catch(nM)}:Yh;function nM(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function b0(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Hr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")td(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,td(a);for(var c=a.firstChild;c;){var _=c.nextSibling,E=c.nodeName;c[Ne]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=_}}else a==="body"&&td(t.ownerDocument.body);a=u}while(a);Hr(n)}function A0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function R0(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function C0(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function iM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Wh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return iM(n,a,t)}function aM(t){return t.documentElement.clientHeight}function sM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function rM(t,n,a,s,u,c,_,E,N){var W=n.nodeType===9?n:n.ownerDocument;try{var nt=W.startViewTransition({update:function(){var X=W.defaultView,tt=X.navigation&&X.navigation.transition,Dt=W.fonts.status;s();var kt=[];if(Dt==="loaded"&&(aM(W),W.fonts.status==="loading"&&kt.push(W.fonts.ready)),Dt=kt.length,t!==null)for(var de=t.suspenseyImages,Y=0,H=0;H<de.length;H++){var J=de[H];if(!J.complete){var ht=J.getBoundingClientRect();if(0<ht.bottom&&0<ht.right&&ht.top<X.innerHeight&&ht.left<X.innerWidth){if(Y+=Z0(J),Y>Gu){kt.length=Dt;break}J=new Promise(sM.bind(J)),kt.push(J)}}}if(0<kt.length)return X=Promise.race([Promise.all(kt),new Promise(function(Ft){return setTimeout(Ft,500)})]).then(u,u),(tt?Promise.allSettled([tt.finished,X]):X).then(c,c);if(u(),tt)return tt.finished.then(c,c);c()},types:a});W.__reactViewTransition=nt;var pt=[];return nt.ready.then(function(){for(var X=W.documentElement.getAnimations({subtree:!0}),tt=0;tt<X.length;tt++){var Dt=X[tt],kt=Dt.effect,de=kt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){pt.push(Dt),Dt=kt.getKeyframes();for(var Y=de=void 0,H=!0,J=0;J<Dt.length;J++){var ht=Dt[J],Ft=ht.width;if(de===void 0)de=Ft;else if(de!==Ft){H=!1;break}if(Ft=ht.height,Y===void 0)Y=Ft;else if(Y!==Ft){H=!1;break}delete ht.width,delete ht.height,ht.transform==="none"&&delete ht.transform}H&&de!==void 0&&Y!==void 0&&(kt.setKeyframes(Dt),H=getComputedStyle(kt.target,kt.pseudoElement),H.width!==de||H.height!==Y)&&(H=Dt[0],H.width=de,H.height=Y,H=Dt[Dt.length-1],H.width=de,H.height=Y,kt.setKeyframes(Dt))}}_()},function(X){W.__reactViewTransition===nt&&(W.__reactViewTransition=null);try{if(typeof X=="object"&&X!==null)switch(X.name){case"InvalidStateError":(X.message==="View transition was skipped because document visibility state is hidden."||X.message==="Skipping view transition because document visibility state has become hidden."||X.message==="Skipping view transition because viewport size changed."||X.message==="Transition was aborted because of invalid state")&&(X=null)}X!==null&&N(X)}finally{s(),u(),_()}}),nt.finished.finally(function(){for(var X=0;X<pt.length;X++)pt[X].cancel();W.__reactViewTransition===nt&&(W.__reactViewTransition=null),E()}),nt}catch{return s(),u(),_(),null}}function Bs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Bs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Bs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[u])}return s},Bs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function w0(t){return{name:t,group:new Bs("group",t),imagePair:new Bs("image-pair",t),old:new Bs("old",t),new:new Bs("new",t)}}function oi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}oi.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(U0(c,t,n,a)===-1){var _=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(N){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,N):n.handleEvent(N)}),s!==null&&(u=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=Or(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:u}),g(this._fragmentFiber.child,!1,oM,t,E,s)}this._eventListeners=c}};function oM(t,n,a,s){return M(t).addEventListener(n,a,s),!1}oi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=U0(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var c=u.cleanup;u=Or(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,lM,t,a,u),s.splice(n,1),c!==null&&c()}};function lM(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Or(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function D0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function U0(t,n,a,s){if(t.length===0)return-1;s=D0(s);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&D0(c.optionsOrUseCapture)===s)return u}return-1}oi.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];s.addEventListener(c.type,c.attachedListener,Or(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],s.removeEventListener(c.type,c.attachedListener,Or(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},oi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,N0,t,void 0,void 0)};function N0(t,n){return t.tag===6?!1:(t=M(t),yM(t,n))}oi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,jh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!N0(n[a],t);a--);};function jh(t,n){return n.push(t),!1}oi.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=M(t),t=Qo(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,uM,t,void 0,void 0))};function uM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}oi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,cM,t,void 0,void 0)};function cM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}oi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,fM,t,void 0,void 0);for(var a=n=0;a<Di.length;a++){var s=Di[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Di[n++]=s}Di.length=n}};function fM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Di=[],Zh=!1;function hM(t,n,a){Di.push({fragmentInstance:t,observer:n,instance:a}),Zh||(Zh=!0,xM(function(){Zh=!1;var s=Di;Di=[];for(var u=0;u<s.length;u++){var c=s[u];c.observer.unobserve(c.instance)}}))}oi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,dM,t,void 0,void 0),t};function dM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}oi.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},oi.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,jh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,x(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var c=x(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),E=u.compareDocumentPosition(t),N=_&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=s&&c&&_&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&u===t||N||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||pM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function pM(t,n,a,s,u){var c=Le(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=S(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=B(a,c,F),n===null?n=!1:(g(n,!0,O,c,a),c=y,y=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=B(s,c,F),n===null?n=!1:(g(n,!0,w,c,s),c=y,P=y=null,n=c!==null)),n):!1}function L0(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}oi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,jh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=T(this._fragmentFiber);if(s=a?s[1]||s[0]||S(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),L0(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=M(u),L0(u,a)):M(u).scrollIntoView(t),s+=a?-1:1}};function mM(t,n){return t=M(t),O0(t,n),!1}function O0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function P0(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,Or(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var _=0,E=0;E<Di.length;E++){var N=Di[E];(N.fragmentInstance!==n||N.observer!==c||N.instance!==t)&&(Di[_++]=N)}Di.length=_,c.observe(t)}),O0(t,n))}function gM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,Or(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?hM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Kh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kh(a),te(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _M(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ne])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function vM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Si(t.nextSibling),t===null))return null;return t}function z0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Si(t.nextSibling),t===null))return null;return t}function Qh(t){return t.data==="$?"||t.data==="$~"}function Jh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function SM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var $h=null;function I0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function B0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function yM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function xM(t){T0(function(){T0(function(n){return t(n)})})}function F0(t,n,a){switch(n=Qo(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function H0(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&Fe(t,n,s,null,Kx,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Bi&&(t.onclick=null),te(t)}function td(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);te(t)}var yi=new Map,G0=new Set;function Jo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var _a=qt.d;qt.d={f:MM,r:EM,D:TM,C:bM,L:AM,m:RM,X:wM,S:CM,M:DM};function MM(){var t=_a.f(),n=Nu();return t||n}function EM(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?Xg(n):_a.r(t)}var Pr=typeof document>"u"?null:document;function V0(t,n,a){var s=Pr;if(s&&typeof n=="string"&&n){var u=hi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),G0.has(u)||(G0.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Cn(n,"link",t),we(n),s.head.appendChild(n)))}}function TM(t){_a.D(t),V0("dns-prefetch",t,null)}function bM(t,n){_a.C(t,n),V0("preconnect",t,n)}function AM(t,n,a){_a.L(t,n,a);var s=Pr;if(s&&t&&n){var u='link[rel="preload"][as="'+hi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+hi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+hi(a.imageSizes)+'"]')):u+='[href="'+hi(t)+'"]';var c=u;switch(n){case"style":c=zr(t);break;case"script":c=Ir(t)}if(!(yi.has(c)||(t=L({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(c,t),s.querySelector(u)!==null||n==="style"&&s.querySelector($o(c))||n==="script"&&s.querySelector(tl(c))))){var _=s.createElement("link");Cn(_,"link",t),n==="style"&&(_[Ce]=!0,_.onload=_.onerror=function(){Ra(_)}),we(_),s.head.appendChild(_)}}}function RM(t,n){_a.m(t,n);var a=Pr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+hi(s)+'"][href="'+hi(t)+'"]',c=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ir(t)}if(!yi.has(c)&&(t=L({rel:"modulepreload",href:t},n),yi.set(c,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(tl(c)))return}s=a.createElement("link"),Cn(s,"link",t),we(s),a.head.appendChild(s)}}}function CM(t,n,a){_a.S(t,n,a);var s=Pr;if(s&&t){var u=$n(s).hoistableStyles,c=zr(t);n=n||"default";var _=u.get(c);if(!_){var E={loading:0,preload:null};if(_=s.querySelector($o(c)))E.loading=5;else{t=L({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(c))&&ed(t,a);var N=_=s.createElement("link");we(N),Cn(N,"link",t),N._p=new Promise(function(W,nt){N.onload=W,N.onerror=nt}),N.addEventListener("load",function(){E.loading|=1}),N.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Fu(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:E},u.set(c,_)}}}function wM(t,n){_a.X(t,n);var a=Pr;if(a&&t){var s=$n(a).hoistableScripts,u=Ir(t),c=s.get(u);c||(c=a.querySelector(tl(u)),c||(t=L({src:t,async:!0},n),(n=yi.get(u))&&nd(t,n),c=a.createElement("script"),we(c),Cn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function DM(t,n){_a.M(t,n);var a=Pr;if(a&&t){var s=$n(a).hoistableScripts,u=Ir(t),c=s.get(u);c||(c=a.querySelector(tl(u)),c||(t=L({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&nd(t,n),c=a.createElement("script"),we(c),Cn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(u,c))}}function X0(t,n,a,s){var u=(u=qe.current)?Jo(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=zr(a.href),n=$n(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=zr(a.href);var c=$n(u).hoistableStyles,_=c.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,_),(c=u.querySelector($o(t)))?c._p||(_.instance=c,_.state.loading=5):(c=yi.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,c)),UM(u,t,c,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ir(a),n=$n(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function zr(t){return'href="'+hi(t)+'"'}function $o(t){return'link[rel="stylesheet"]['+t+"]"}function k0(t){return L({},t,{"data-precedence":t.precedence,precedence:null})}function UM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ce]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Ce]=!0,n.onload=n.onerror=Ra.bind(null,n),Cn(n,"link",a),we(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Ir(t){return'[src="'+hi(t)+'"]'}function tl(t){return"script[async]"+t}function q0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+hi(a.href)+'"]');if(s)return n.instance=s,we(s),s;var u=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),we(s),Cn(s,"style",u),Fu(s,a.precedence,t),n.instance=s;case"stylesheet":u=zr(a.href);var c=t.querySelector($o(u));if(c)return n.state.loading|=4,n.instance=c,we(c),c;s=k0(a),(u=yi.get(u))&&ed(s,u),c=(t.ownerDocument||t).createElement("link"),we(c);var _=c;return _._p=new Promise(function(E,N){_.onload=E,_.onerror=N}),Cn(c,"link",s),n.state.loading|=4,Fu(c,a.precedence,t),n.instance=c;case"script":return c=Ir(a.src),(u=t.querySelector(tl(c)))?(n.instance=u,we(u),u):(s=a,(u=yi.get(c))&&(s=L({},a),nd(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),we(u),Cn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Fu(s,a.precedence,t));return n.instance}function Fu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,c=u,_=0;_<s.length;_++){var E=s[_];if(E.dataset.precedence===n)c=E;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Hu=null;function Y0(t,n,a){if(Hu===null){var s=new Map,u=Hu=new Map;u.set(a,s)}else u=Hu,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Ne]||c[Ct]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var _=c.getAttribute(n)||"";_=t+_;var E=s.get(_);E?E.push(c):s.set(_,[c])}}return s}function id(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function NM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function W0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function j0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Z0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function K0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Z0(n),t.suspenseyImages.push(n)),t=PM.bind(t),n.decode().then(t,t))}function LM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=zr(s.href),c=n.querySelector($o(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=el.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,we(c);return}c=n.ownerDocument||n,s=k0(s),(u=yi.get(u))&&ed(s,u),c=c.createElement("link"),we(c);var _=c;_._p=new Promise(function(E,N){_.onload=E,_.onerror=N}),Cn(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=el.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Gu=0;function OM(t,n){return t.stylesheets&&t.count===0&&Xu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Xu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Gu===0&&(Gu=62500*Jx());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Gu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Q0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Xu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function el(){this.count--,Q0(this)}function PM(){this.imgCount--,Q0(this)}var Vu=null;function Xu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vu=new Map,n.forEach(zM,t),Vu=null,el.call(t))}function zM(t,n){if(!(n.state.loading&4)){var a=Vu.get(t);if(a)var s=a.get(null);else{a=new Map,Vu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var _=u[c];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),c=a.get(_)||s,c===s&&a.set(null,u),a.set(_,u),this.count++,s=el.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Br={$$typeof:lt,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function IM(t,n,a,s,u,c,_,E,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=go(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=go(0),this.hiddenUpdates=go(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.transitionTypes=null,this.incompleteTransitions=new Map}function J0(t,n,a,s,u,c,_,E,N,W,nt,pt){return t=new IM(t,n,a,_,N,W,nt,pt,E),n=1,c===!0&&(n|=24),c=Xn(3,null,null,n),t.current=c,c.stateNode=t,n=vf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},Mf(c),t}function $0(t){return t?(t=cr,t):cr}function tv(t,n,a,s,u,c){u=$0(u),s.context===null?s.context=u:s.pendingContext=u,s=za(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=Ia(t,s,n),a!==null&&(Wn(a,t,n),No(a,t,n))}function ev(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ad(t,n){ev(t,n),(t=t.alternate)&&ev(t,n)}function nv(t){if(t.tag===13||t.tag===31){var n=xs(t,67108864);n!==null&&Wn(n,t,67108864),ad(t,67108864)}}function iv(t){if(t.tag===13||t.tag===31){var n=ri();n=ot(n);var a=xs(t,n);a!==null&&Wn(a,t,n),ad(t,n)}}var Fr=!0;function BM(t,n,a,s){var u=Mt.T;Mt.T=null;var c=qt.p;try{qt.p=2,sd(t,n,a,s)}finally{qt.p=c,Mt.T=u}}function FM(t,n,a,s){var u=Mt.T;Mt.T=null;var c=qt.p;try{qt.p=8,sd(t,n,a,s)}finally{qt.p=c,Mt.T=u}}function sd(t,n,a,s){if(Fr){var u=rd(s);if(u===null)Hh(t,n,s,ku,a),sv(t,s);else if(GM(u,t,n,a,s))s.stopPropagation();else if(sv(t,s),n&4&&-1<HM.indexOf(t)){for(;u!==null;){var c=ge(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var _=fi(c.pendingLanes);if(_!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var N=1<<31-Un(_);E.entanglements[1]|=N,_&=~N}ji(c),(Oe&6)===0&&(wu=G()+500,jo(0))}}break;case 31:case 13:E=xs(c,2),E!==null&&Wn(E,c,2),Nu(),ad(c,2)}if(c=rd(s),c===null&&Hh(t,n,s,ku,a),c===u)break;u=c}u!==null&&s.stopPropagation()}else Hh(t,n,s,null,a)}}function rd(t){return t=kc(t),od(t)}var ku=null;function od(t){if(ku=null,t=Le(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ku=t,null}function av(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case wt:return 2;case Gt:return 8;case yt:case mt:return 32;case Yt:return 268435456;default:return 32}default:return 32}}var ld=!1,Za=null,Ka=null,Qa=null,nl=new Map,il=new Map,Ja=[],HM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sv(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":nl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(n.pointerId)}}function al(t,n,a,s,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[u]},n!==null&&(n=ge(n),n!==null&&nv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function GM(t,n,a,s,u){switch(n){case"focusin":return Za=al(Za,t,n,a,s,u),!0;case"dragenter":return Ka=al(Ka,t,n,a,s,u),!0;case"mouseover":return Qa=al(Qa,t,n,a,s,u),!0;case"pointerover":var c=u.pointerId;return nl.set(c,al(nl.get(c)||null,t,n,a,s,u)),!0;case"gotpointercapture":return c=u.pointerId,il.set(c,al(il.get(c)||null,t,n,a,s,u)),!0}return!1}function rv(t){var n=Le(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Pt(t.priority,function(){iv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Pt(t.priority,function(){iv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=rd(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Xc=s,a.target.dispatchEvent(s),Xc=null}else return n=ge(a),n!==null&&nv(n),t.blockedOn=a,!1;n.shift()}return!0}function ov(t,n,a){qu(t)&&a.delete(n)}function VM(){ld=!1,Za!==null&&qu(Za)&&(Za=null),Ka!==null&&qu(Ka)&&(Ka=null),Qa!==null&&qu(Qa)&&(Qa=null),nl.forEach(ov),il.forEach(ov)}function Yu(t,n){t.blockedOn===n&&(t.blockedOn=null,ld||(ld=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,VM)))}var Wu=null;function lv(t){Wu!==t&&(Wu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wu===t&&(Wu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(od(s||a)===null)continue;break}var c=ge(a);c!==null&&(t.splice(n,3),n-=3,Xf(c,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Hr(t){function n(N){return Yu(N,t)}Za!==null&&Yu(Za,t),Ka!==null&&Yu(Ka,t),Qa!==null&&Yu(Qa,t),nl.forEach(n),il.forEach(n);for(var a=0;a<Ja.length;a++){var s=Ja[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)rv(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],c=a[s+1],_=u[Xt]||null;if(typeof c=="function")_||lv(a);else if(_){var E=null;if(c&&c.hasAttribute("formAction")){if(u=c,_=c[Xt]||null)E=_.formAction;else if(od(u)!==null)continue}else E=_.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),lv(a)}}}function uv(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ud(t){this._internalRoot=t}ju.prototype.render=ud.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ri();tv(a,s,t,n,null,null)},ju.prototype.unmount=ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;tv(t.current,2,null,t,null,null),Nu(),n[ee]=null}};function ju(t){this._internalRoot=t}ju.prototype.unstable_scheduleHydration=function(t){if(t){var n=Et();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&rv(t)}};var cv=e.version;if(cv!=="19.3.0")throw Error(r(527,cv,"19.3.0"));qt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var XM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zu.isDisabled&&Zu.supportsFiber)try{Me=Zu.inject(XM),$e=Zu}catch{}}return rl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=$g,c=t_,_=e_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=J0(t,1,!1,null,null,a,s,null,u,c,_,uv),t[ee]=n.current,Fh(t),new ud(n)},rl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",c=$g,_=t_,E=e_,N=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(N=a.formState)),n=J0(t,1,!0,n,a??null,s,u,N,c,_,E,uv),n.context=$0(null),a=n.current,s=ri(),s=ot(s),u=za(s),u.callback=null,Ia(a,u,s),a=s,n.current.lanes=a,vs(n,a),ji(n),t[ee]=n.current,Fh(t),new ju(n)},rl.version="19.3.0",rl}var yv;function $M(){if(yv)return hd.exports;yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hd.exports=JM(),hd.exports}var tE=$M();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kp="180",ao={ROTATE:0,DOLLY:1,PAN:2},no={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eE=0,xv=1,nE=2,RS=1,iE=2,Ea=3,cs=0,Qn=1,Kn=2,ls=0,so=1,Mv=2,Ev=3,Tv=4,aE=5,Ys=100,sE=101,rE=102,oE=103,lE=104,uE=200,cE=201,fE=202,hE=203,Jd=204,$d=205,dE=206,pE=207,mE=208,gE=209,_E=210,vE=211,SE=212,yE=213,xE=214,tp=0,ep=1,np=2,oo=3,ip=4,ap=5,sp=6,rp=7,CS=0,ME=1,EE=2,us=0,TE=1,bE=2,AE=3,RE=4,CE=5,wE=6,DE=7,wS=300,lo=301,uo=302,op=303,lp=304,Nc=306,up=1e3,js=1001,cp=1002,zi=1003,UE=1004,Ku=1005,Ki=1006,gd=1007,Zs=1008,$i=1009,DS=1010,US=1011,pl=1012,qp=1013,Ks=1014,Ta=1015,yl=1016,Yp=1017,Wp=1018,ml=1020,NS=35902,LS=35899,OS=1021,PS=1022,Pi=1023,gl=1026,_l=1027,zS=1028,jp=1029,IS=1030,Zp=1031,Kp=1033,Ec=33776,Tc=33777,bc=33778,Ac=33779,fp=35840,hp=35841,dp=35842,pp=35843,mp=36196,gp=37492,_p=37496,vp=37808,Sp=37809,yp=37810,xp=37811,Mp=37812,Ep=37813,Tp=37814,bp=37815,Ap=37816,Rp=37817,Cp=37818,wp=37819,Dp=37820,Up=37821,Np=36492,Lp=36494,Op=36495,Pp=36283,zp=36284,Ip=36285,Bp=36286,NE=3200,LE=3201,BS=0,OE=1,os="",Mi="srgb",co="srgb-linear",wc="linear",Xe="srgb",Gr=7680,bv=519,PE=512,zE=513,IE=514,FS=515,BE=516,FE=517,HE=518,GE=519,Av=35044,Rv="300 es",Qi=2e3,Dc=2001;class tr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,Fp=180/Math.PI;function xl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function VE(o,e){return(o%e+e)%e}function _d(o,e,i){return(1-i)*o+i*e}function ol(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const XE={DEG2RAD:Rc};class ce{constructor(e=0,i=0){ce.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*l+e.x,this.y=f*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,h,d){let p=r[l+0],m=r[l+1],v=r[l+2],g=r[l+3];const S=f[h+0],x=f[h+1],T=f[h+2],A=f[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=v,e[i+3]=g;return}if(d===1){e[i+0]=S,e[i+1]=x,e[i+2]=T,e[i+3]=A;return}if(g!==A||p!==S||m!==x||v!==T){let M=1-d;const y=p*S+m*x+v*T+g*A,P=y>=0?1:-1,O=1-y*y;if(O>Number.EPSILON){const F=Math.sqrt(O),B=Math.atan2(F,y*P);M=Math.sin(M*B)/F,d=Math.sin(d*B)/F}const w=d*P;if(p=p*M+S*w,m=m*M+x*w,v=v*M+T*w,g=g*M+A*w,M===1-d){const F=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=F,m*=F,v*=F,g*=F}}e[i]=p,e[i+1]=m,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,f,h){const d=r[l],p=r[l+1],m=r[l+2],v=r[l+3],g=f[h],S=f[h+1],x=f[h+2],T=f[h+3];return e[i]=d*T+v*g+p*x-m*S,e[i+1]=p*T+v*S+m*g-d*x,e[i+2]=m*T+v*x+d*S-p*g,e[i+3]=v*T-d*g-p*S-m*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(l/2),g=d(f/2),S=p(r/2),x=p(l/2),T=p(f/2);switch(h){case"XYZ":this._x=S*v*g+m*x*T,this._y=m*x*g-S*v*T,this._z=m*v*T+S*x*g,this._w=m*v*g-S*x*T;break;case"YXZ":this._x=S*v*g+m*x*T,this._y=m*x*g-S*v*T,this._z=m*v*T-S*x*g,this._w=m*v*g+S*x*T;break;case"ZXY":this._x=S*v*g-m*x*T,this._y=m*x*g+S*v*T,this._z=m*v*T+S*x*g,this._w=m*v*g-S*x*T;break;case"ZYX":this._x=S*v*g-m*x*T,this._y=m*x*g+S*v*T,this._z=m*v*T-S*x*g,this._w=m*v*g+S*x*T;break;case"YZX":this._x=S*v*g+m*x*T,this._y=m*x*g+S*v*T,this._z=m*v*T-S*x*g,this._w=m*v*g-S*x*T;break;case"XZY":this._x=S*v*g-m*x*T,this._y=m*x*g-S*v*T,this._z=m*v*T+S*x*g,this._w=m*v*g+S*x*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],h=i[1],d=i[5],p=i[9],m=i[2],v=i[6],g=i[10],S=r+d+g;if(S>0){const x=.5/Math.sqrt(S+1);this._w=.25/x,this._x=(v-p)*x,this._y=(f-m)*x,this._z=(h-l)*x}else if(r>d&&r>g){const x=2*Math.sqrt(1+r-d-g);this._w=(v-p)/x,this._x=.25*x,this._y=(l+h)/x,this._z=(f+m)/x}else if(d>g){const x=2*Math.sqrt(1+d-r-g);this._w=(f-m)/x,this._x=(l+h)/x,this._y=.25*x,this._z=(p+v)/x}else{const x=2*Math.sqrt(1+g-r-d);this._w=(h-l)/x,this._x=(f+m)/x,this._y=(p+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,h=e._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=r*v+h*d+l*m-f*p,this._y=l*v+h*p+f*d-r*m,this._z=f*v+h*m+r*p-l*d,this._w=h*v-r*d-l*p-f*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=f,this;const p=1-d*d;if(p<=Number.EPSILON){const x=1-i;return this._w=x*h+i*this._w,this._x=x*r+i*this._x,this._y=x*l+i*this._y,this._z=x*f+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),g=Math.sin((1-i)*v)/m,S=Math.sin(i*v)/m;return this._w=h*g+this._w*S,this._x=r*g+this._x*S,this._y=l*g+this._y*S,this._z=f*g+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,i=0,r=0){k.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Cv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Cv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),v=2*(d*i-f*l),g=2*(f*r-h*i);return this.x=i+p*m+h*g-d*v,this.y=r+p*v+d*m-f*g,this.z=l+p*g+f*v-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-f*d,this.y=f*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return vd.copy(this).projectOnVector(e),this.sub(vd)}reflect(e){return this.sub(vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vd=new k,Cv=new Qs;class pe{constructor(e,i,r,l,f,h,d,p,m){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,p,m)}set(e,i,r,l,f,h,d,p,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=f,v[5]=p,v[6]=r,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],v=r[4],g=r[7],S=r[2],x=r[5],T=r[8],A=l[0],M=l[3],y=l[6],P=l[1],O=l[4],w=l[7],F=l[2],B=l[5],L=l[8];return f[0]=h*A+d*P+p*F,f[3]=h*M+d*O+p*B,f[6]=h*y+d*w+p*L,f[1]=m*A+v*P+g*F,f[4]=m*M+v*O+g*B,f[7]=m*y+v*w+g*L,f[2]=S*A+x*P+T*F,f[5]=S*M+x*O+T*B,f[8]=S*y+x*w+T*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return i*h*v-i*d*m-r*f*v+r*d*p+l*f*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=v*h-d*m,S=d*p-v*f,x=m*f-h*p,T=i*g+r*S+l*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=g*A,e[1]=(l*m-v*r)*A,e[2]=(d*r-l*h)*A,e[3]=S*A,e[4]=(v*i-l*p)*A,e[5]=(l*f-d*i)*A,e[6]=x*A,e[7]=(r*p-m*i)*A,e[8]=(h*i-r*f)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,h,d){const p=Math.cos(f),m=Math.sin(f);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Sd.makeScale(e,i)),this}rotate(e){return this.premultiply(Sd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Sd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sd=new pe;function HS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Uc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function kE(){const o=Uc("canvas");return o.style.display="block",o}const wv={};function vl(o){o in wv||(wv[o]=!0,console.warn(o))}function qE(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const Dv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YE(){const o={enabled:!0,workingColorSpace:co,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Xe&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=ro(l.r),l.g=ro(l.g),l.b=ro(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===os?wc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return vl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return vl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[co]:{primaries:e,whitePoint:r,transfer:wc,toXYZ:Dv,fromXYZ:Uv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:r,transfer:Xe,toXYZ:Dv,fromXYZ:Uv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),o}const Ue=YE();function ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ro(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Vr;class WE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Vr===void 0&&(Vr=Uc("canvas")),Vr.width=e.width,Vr.height=e.height;const l=Vr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Vr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=ba(f[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jE=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=xl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(yd(l[h].image)):f.push(yd(l[h]))}else f=yd(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function yd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?WE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZE=0;const xd=new k;class Jn extends tr{constructor(e=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,r=js,l=js,f=Ki,h=Zs,d=Pi,p=$i,m=Jn.DEFAULT_ANISOTROPY,v=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=xl(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xd).x}get height(){return this.source.getSize(xd).y}get depth(){return this.source.getSize(xd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case up:e.x=e.x-Math.floor(e.x);break;case js:e.x=e.x<0?0:1;break;case cp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case up:e.y=e.y-Math.floor(e.y);break;case js:e.y=e.y<0?0:1;break;case cp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=wS;Jn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const p=e.elements,m=p[0],v=p[4],g=p[8],S=p[1],x=p[5],T=p[9],A=p[2],M=p[6],y=p[10];if(Math.abs(v-S)<.01&&Math.abs(g-A)<.01&&Math.abs(T-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+A)<.1&&Math.abs(T+M)<.1&&Math.abs(m+x+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,w=(x+1)/2,F=(y+1)/2,B=(v+S)/4,L=(g+A)/4,q=(T+M)/4;return O>w&&O>F?O<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(O),l=B/r,f=L/r):w>F?w<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(w),r=B/l,f=q/l):F<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(F),r=L/f,l=q/f),this.set(r,l,f,i),this}let P=Math.sqrt((M-T)*(M-T)+(g-A)*(g-A)+(S-v)*(S-v));return Math.abs(P)<.001&&(P=1),this.x=(M-T)/P,this.y=(g-A)/P,this.z=(S-v)/P,this.w=Math.acos((m+x+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KE extends tr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new Jn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ki,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Qp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Js extends KE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class GS extends Jn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zi,this.minFilter=zi,this.wrapR=js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QE extends Jn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zi,this.minFilter=zi,this.wrapR=js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ml{constructor(e=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ui):Ui.fromBufferAttribute(f,h),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qu.copy(r.boundingBox)),Qu.applyMatrix4(e.matrixWorld),this.union(Qu)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ll),Ju.subVectors(this.max,ll),Xr.subVectors(e.a,ll),kr.subVectors(e.b,ll),qr.subVectors(e.c,ll),ts.subVectors(kr,Xr),es.subVectors(qr,kr),Fs.subVectors(Xr,qr);let i=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Fs.z,Fs.y,ts.z,0,-ts.x,es.z,0,-es.x,Fs.z,0,-Fs.x,-ts.y,ts.x,0,-es.y,es.x,0,-Fs.y,Fs.x,0];return!Md(i,Xr,kr,qr,Ju)||(i=[1,0,0,0,1,0,0,0,1],!Md(i,Xr,kr,qr,Ju))?!1:($u.crossVectors(ts,es),i=[$u.x,$u.y,$u.z],Md(i,Xr,kr,qr,Ju))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new k,new k,new k,new k,new k,new k,new k,new k],Ui=new k,Qu=new Ml,Xr=new k,kr=new k,qr=new k,ts=new k,es=new k,Fs=new k,ll=new k,Ju=new k,$u=new k,Hs=new k;function Md(o,e,i,r,l){for(let f=0,h=o.length-3;f<=h;f+=3){Hs.fromArray(o,f);const d=l.x*Math.abs(Hs.x)+l.y*Math.abs(Hs.y)+l.z*Math.abs(Hs.z),p=e.dot(Hs),m=i.dot(Hs),v=r.dot(Hs);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const JE=new Ml,ul=new k,Ed=new k;class Jp{constructor(e=new k,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):JE.setFromPoints(e).getCenter(r);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ul.subVectors(e,this.center);const i=ul.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ul,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ul.copy(e.center).add(Ed)),this.expandByPoint(ul.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sa=new k,Td=new k,tc=new k,ns=new k,bd=new k,ec=new k,Ad=new k;class $p{constructor(e=new k,i=new k(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Td.copy(e).add(i).multiplyScalar(.5),tc.copy(i).sub(e).normalize(),ns.copy(this.origin).sub(Td);const f=e.distanceTo(i)*.5,h=-this.direction.dot(tc),d=ns.dot(this.direction),p=-ns.dot(tc),m=ns.lengthSq(),v=Math.abs(1-h*h);let g,S,x,T;if(v>0)if(g=h*p-d,S=h*d-p,T=f*v,g>=0)if(S>=-T)if(S<=T){const A=1/v;g*=A,S*=A,x=g*(g+h*S+2*d)+S*(h*g+S+2*p)+m}else S=f,g=Math.max(0,-(h*S+d)),x=-g*g+S*(S+2*p)+m;else S=-f,g=Math.max(0,-(h*S+d)),x=-g*g+S*(S+2*p)+m;else S<=-T?(g=Math.max(0,-(-h*f+d)),S=g>0?-f:Math.min(Math.max(-f,-p),f),x=-g*g+S*(S+2*p)+m):S<=T?(g=0,S=Math.min(Math.max(-f,-p),f),x=S*(S+2*p)+m):(g=Math.max(0,-(h*f+d)),S=g>0?f:Math.min(Math.max(-f,-p),f),x=-g*g+S*(S+2*p)+m);else S=h>0?-f:f,g=Math.max(0,-(h*S+d)),x=-g*g+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Td).addScaledVector(tc,S),x}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const r=Sa.dot(this.direction),l=Sa.dot(Sa)-r*r,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,h,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),v>=0?(f=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(f=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),r>h||f>l||((f>r||isNaN(r))&&(r=f),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-S.z)*g,p=(e.max.z-S.z)*g):(d=(e.max.z-S.z)*g,p=(e.min.z-S.z)*g),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,r,l,f){bd.subVectors(i,e),ec.subVectors(r,e),Ad.crossVectors(bd,ec);let h=this.direction.dot(Ad),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ns.subVectors(this.origin,e);const p=d*this.direction.dot(ec.crossVectors(ns,ec));if(p<0)return null;const m=d*this.direction.dot(bd.cross(ns));if(m<0||p+m>h)return null;const v=-d*ns.dot(Ad);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,r,l,f,h,d,p,m,v,g,S,x,T,A,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,p,m,v,g,S,x,T,A,M)}set(e,i,r,l,f,h,d,p,m,v,g,S,x,T,A,M){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=f,y[5]=h,y[9]=d,y[13]=p,y[2]=m,y[6]=v,y[10]=g,y[14]=S,y[3]=x,y[7]=T,y[11]=A,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Yr.setFromMatrixColumn(e,0).length(),f=1/Yr.setFromMatrixColumn(e,1).length(),h=1/Yr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),v=Math.cos(f),g=Math.sin(f);if(e.order==="XYZ"){const S=h*v,x=h*g,T=d*v,A=d*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=x+T*m,i[5]=S-A*m,i[9]=-d*p,i[2]=A-S*m,i[6]=T+x*m,i[10]=h*p}else if(e.order==="YXZ"){const S=p*v,x=p*g,T=m*v,A=m*g;i[0]=S+A*d,i[4]=T*d-x,i[8]=h*m,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=x*d-T,i[6]=A+S*d,i[10]=h*p}else if(e.order==="ZXY"){const S=p*v,x=p*g,T=m*v,A=m*g;i[0]=S-A*d,i[4]=-h*g,i[8]=T+x*d,i[1]=x+T*d,i[5]=h*v,i[9]=A-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const S=h*v,x=h*g,T=d*v,A=d*g;i[0]=p*v,i[4]=T*m-x,i[8]=S*m+A,i[1]=p*g,i[5]=A*m+S,i[9]=x*m-T,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const S=h*p,x=h*m,T=d*p,A=d*m;i[0]=p*v,i[4]=A-S*g,i[8]=T*g+x,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-m*v,i[6]=x*g+T,i[10]=S-A*g}else if(e.order==="XZY"){const S=h*p,x=h*m,T=d*p,A=d*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=S*g+A,i[5]=h*v,i[9]=x*g-T,i[2]=T*g-x,i[6]=d*v,i[10]=A*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose($E,e,tT)}lookAt(e,i,r){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),is.crossVectors(r,li),is.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),is.crossVectors(r,li)),is.normalize(),nc.crossVectors(li,is),l[0]=is.x,l[4]=nc.x,l[8]=li.x,l[1]=is.y,l[5]=nc.y,l[9]=li.y,l[2]=is.z,l[6]=nc.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],v=r[1],g=r[5],S=r[9],x=r[13],T=r[2],A=r[6],M=r[10],y=r[14],P=r[3],O=r[7],w=r[11],F=r[15],B=l[0],L=l[4],q=l[8],D=l[12],C=l[1],V=l[5],at=l[9],ut=l[13],gt=l[2],lt=l[6],j=l[10],st=l[14],K=l[3],_t=l[7],St=l[11],Ht=l[15];return f[0]=h*B+d*C+p*gt+m*K,f[4]=h*L+d*V+p*lt+m*_t,f[8]=h*q+d*at+p*j+m*St,f[12]=h*D+d*ut+p*st+m*Ht,f[1]=v*B+g*C+S*gt+x*K,f[5]=v*L+g*V+S*lt+x*_t,f[9]=v*q+g*at+S*j+x*St,f[13]=v*D+g*ut+S*st+x*Ht,f[2]=T*B+A*C+M*gt+y*K,f[6]=T*L+A*V+M*lt+y*_t,f[10]=T*q+A*at+M*j+y*St,f[14]=T*D+A*ut+M*st+y*Ht,f[3]=P*B+O*C+w*gt+F*K,f[7]=P*L+O*V+w*lt+F*_t,f[11]=P*q+O*at+w*j+F*St,f[15]=P*D+O*ut+w*st+F*Ht,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],h=e[1],d=e[5],p=e[9],m=e[13],v=e[2],g=e[6],S=e[10],x=e[14],T=e[3],A=e[7],M=e[11],y=e[15];return T*(+f*p*g-l*m*g-f*d*S+r*m*S+l*d*x-r*p*x)+A*(+i*p*x-i*m*S+f*h*S-l*h*x+l*m*v-f*p*v)+M*(+i*m*g-i*d*x-f*h*g+r*h*x+f*d*v-r*m*v)+y*(-l*d*v-i*p*g+i*d*S+l*h*g-r*h*S+r*p*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],m=e[7],v=e[8],g=e[9],S=e[10],x=e[11],T=e[12],A=e[13],M=e[14],y=e[15],P=g*M*m-A*S*m+A*p*x-d*M*x-g*p*y+d*S*y,O=T*S*m-v*M*m-T*p*x+h*M*x+v*p*y-h*S*y,w=v*A*m-T*g*m+T*d*x-h*A*x-v*d*y+h*g*y,F=T*g*p-v*A*p-T*d*S+h*A*S+v*d*M-h*g*M,B=i*P+r*O+l*w+f*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/B;return e[0]=P*L,e[1]=(A*S*f-g*M*f-A*l*x+r*M*x+g*l*y-r*S*y)*L,e[2]=(d*M*f-A*p*f+A*l*m-r*M*m-d*l*y+r*p*y)*L,e[3]=(g*p*f-d*S*f-g*l*m+r*S*m+d*l*x-r*p*x)*L,e[4]=O*L,e[5]=(v*M*f-T*S*f+T*l*x-i*M*x-v*l*y+i*S*y)*L,e[6]=(T*p*f-h*M*f-T*l*m+i*M*m+h*l*y-i*p*y)*L,e[7]=(h*S*f-v*p*f+v*l*m-i*S*m-h*l*x+i*p*x)*L,e[8]=w*L,e[9]=(T*g*f-v*A*f-T*r*x+i*A*x+v*r*y-i*g*y)*L,e[10]=(h*A*f-T*d*f+T*r*m-i*A*m-h*r*y+i*d*y)*L,e[11]=(v*d*f-h*g*f-v*r*m+i*g*m+h*r*x-i*d*x)*L,e[12]=F*L,e[13]=(v*A*l-T*g*l+T*r*S-i*A*S-v*r*M+i*g*M)*L,e[14]=(T*d*l-h*A*l-T*r*p+i*A*p+h*r*M-i*d*M)*L,e[15]=(h*g*l-v*d*l+v*r*p-i*g*p-h*r*S+i*d*S)*L,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,h=e.x,d=e.y,p=e.z,m=f*h,v=f*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+r,v*p-l*h,0,m*p-l*d,v*p+l*h,f*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,h){return this.set(1,r,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,h=i._y,d=i._z,p=i._w,m=f+f,v=h+h,g=d+d,S=f*m,x=f*v,T=f*g,A=h*v,M=h*g,y=d*g,P=p*m,O=p*v,w=p*g,F=r.x,B=r.y,L=r.z;return l[0]=(1-(A+y))*F,l[1]=(x+w)*F,l[2]=(T-O)*F,l[3]=0,l[4]=(x-w)*B,l[5]=(1-(S+y))*B,l[6]=(M+P)*B,l[7]=0,l[8]=(T+O)*L,l[9]=(M-P)*L,l[10]=(1-(S+A))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=Yr.set(l[0],l[1],l[2]).length();const h=Yr.set(l[4],l[5],l[6]).length(),d=Yr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Ni.copy(this);const m=1/f,v=1/h,g=1/d;return Ni.elements[0]*=m,Ni.elements[1]*=m,Ni.elements[2]*=m,Ni.elements[4]*=v,Ni.elements[5]*=v,Ni.elements[6]*=v,Ni.elements[8]*=g,Ni.elements[9]*=g,Ni.elements[10]*=g,i.setFromRotationMatrix(Ni),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,l,f,h,d=Qi,p=!1){const m=this.elements,v=2*f/(i-e),g=2*f/(r-l),S=(i+e)/(i-e),x=(r+l)/(r-l);let T,A;if(p)T=f/(h-f),A=h*f/(h-f);else if(d===Qi)T=-(h+f)/(h-f),A=-2*h*f/(h-f);else if(d===Dc)T=-h/(h-f),A=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,f,h,d=Qi,p=!1){const m=this.elements,v=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),x=-(r+l)/(r-l);let T,A;if(p)T=1/(h-f),A=h/(h-f);else if(d===Qi)T=-2/(h-f),A=-(h+f)/(h-f);else if(d===Dc)T=-1/(h-f),A=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=g,m[9]=0,m[13]=x,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Yr=new k,Ni=new en,$E=new k(0,0,0),tT=new k(1,1,1),is=new k,nc=new k,li=new k,Nv=new en,Lv=new Qs;class ta{constructor(e=0,i=0,r=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],p=l[1],m=l[5],v=l[9],g=l[2],S=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(ve(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,x),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Nv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Lv.setFromEuler(this),this.setFromQuaternion(Lv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class tm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eT=0;const Ov=new k,Wr=new Qs,ya=new en,ic=new k,cl=new k,nT=new k,iT=new Qs,Pv=new k(1,0,0),zv=new k(0,1,0),Iv=new k(0,0,1),Bv={type:"added"},aT={type:"removed"},jr={type:"childadded",child:null},Rd={type:"childremoved",child:null};class Dn extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new k,i=new ta,r=new Qs,l=new k(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new pe}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Wr.setFromAxisAngle(e,i),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,i){return Wr.setFromAxisAngle(e,i),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Pv,e)}rotateY(e){return this.rotateOnAxis(zv,e)}rotateZ(e){return this.rotateOnAxis(Iv,e)}translateOnAxis(e,i){return Ov.copy(e).applyQuaternion(this.quaternion),this.position.add(Ov.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Pv,e)}translateY(e){return this.translateOnAxis(zv,e)}translateZ(e){return this.translateOnAxis(Iv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ic.copy(e):ic.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(cl,ic,this.up):ya.lookAt(ic,cl,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Wr.setFromRotationMatrix(ya),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bv),jr.child=e,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(aT),Rd.child=e,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bv),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,e,nT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cl,iT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];f(e.shapes,g)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(f(e.materials,this.material[p]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(f(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),v=h(e.images),g=h(e.shapes),S=h(e.skeletons),x=h(e.animations),T=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),x.length>0&&(r.animations=x),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new k(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new k,xa=new k,Cd=new k,Ma=new k,Zr=new k,Kr=new k,Fv=new k,wd=new k,Dd=new k,Ud=new k,Nd=new rn,Ld=new rn,Od=new rn;class Oi{constructor(e=new k,i=new k,r=new k){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Li.subVectors(e,i),l.cross(Li);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Li.subVectors(l,i),xa.subVectors(r,i),Cd.subVectors(e,i);const h=Li.dot(Li),d=Li.dot(xa),p=Li.dot(Cd),m=xa.dot(xa),v=xa.dot(Cd),g=h*m-d*d;if(g===0)return f.set(0,0,0),null;const S=1/g,x=(m*p-d*v)*S,T=(h*v-d*p)*S;return f.set(1-x-T,T,x)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(e,i,r,l,f,h,d,p){return this.getBarycoord(e,i,r,l,Ma)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Ma.x),p.addScaledVector(h,Ma.y),p.addScaledVector(d,Ma.z),p)}static getInterpolatedAttribute(e,i,r,l,f,h){return Nd.setScalar(0),Ld.setScalar(0),Od.setScalar(0),Nd.fromBufferAttribute(e,i),Ld.fromBufferAttribute(e,r),Od.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Nd,f.x),h.addScaledVector(Ld,f.y),h.addScaledVector(Od,f.z),h}static isFrontFacing(e,i,r,l){return Li.subVectors(r,i),xa.subVectors(e,i),Li.cross(xa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Li.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return Oi.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let h,d;Zr.subVectors(l,r),Kr.subVectors(f,r),wd.subVectors(e,r);const p=Zr.dot(wd),m=Kr.dot(wd);if(p<=0&&m<=0)return i.copy(r);Dd.subVectors(e,l);const v=Zr.dot(Dd),g=Kr.dot(Dd);if(v>=0&&g<=v)return i.copy(l);const S=p*g-v*m;if(S<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(r).addScaledVector(Zr,h);Ud.subVectors(e,f);const x=Zr.dot(Ud),T=Kr.dot(Ud);if(T>=0&&x<=T)return i.copy(f);const A=x*m-p*T;if(A<=0&&m>=0&&T<=0)return d=m/(m-T),i.copy(r).addScaledVector(Kr,d);const M=v*T-x*g;if(M<=0&&g-v>=0&&x-T>=0)return Fv.subVectors(f,l),d=(g-v)/(g-v+(x-T)),i.copy(l).addScaledVector(Fv,d);const y=1/(M+A+S);return h=A*y,d=S*y,i.copy(r).addScaledVector(Zr,h).addScaledVector(Kr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const VS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},ac={h:0,s:0,l:0};function Pd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Re{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ue.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ue.workingColorSpace){if(e=VE(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=Pd(h,f,e+1/3),this.g=Pd(h,f,e),this.b=Pd(h,f,e-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(e,i=Mi){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Mi){const r=VS[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Ue.workingToColorSpace(Pn.copy(this),e),Math.round(ve(Pn.r*255,0,255))*65536+Math.round(ve(Pn.g*255,0,255))*256+Math.round(ve(Pn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,f=Pn.b,h=Math.max(r,l,f),d=Math.min(r,l,f);let p,m;const v=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=v<=.5?g/(h+d):g/(2-h-d),h){case r:p=(l-f)/g+(l<f?6:0);break;case l:p=(f-r)/g+2;break;case f:p=(r-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Mi){Ue.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,r=Pn.g,l=Pn.b;return e!==Mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(as),this.setHSL(as.h+e,as.s+i,as.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(as),e.getHSL(ac);const r=_d(as.h,ac.h,i),l=_d(as.s,ac.s,i),f=_d(as.l,ac.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Re;Re.NAMES=VS;let sT=0;class El extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=xl(),this.name="",this.type="Material",this.blending=so,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=$d,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(r.blending=this.blending),this.side!==cs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Jd&&(r.blendSrc=this.blendSrc),this.blendDst!==$d&&(r.blendDst=this.blendDst),this.blendEquation!==Ys&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const h=[];for(const d in f){const p=f[d];delete p.metadata,h.push(p)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class XS extends El{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=CS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new k,sc=new ce;let rT=0;class Ji{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Av,this.updateRanges=[],this.gpuType=Ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)sc.fromBufferAttribute(this,i),sc.applyMatrix3(e),this.setXY(i,sc.x,sc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ol(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ol(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ol(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ol(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ol(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array),f=jn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Av&&(e.usage=this.usage),e}}class kS extends Ji{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class qS extends Ji{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Vn extends Ji{constructor(e,i,r){super(new Float32Array(e),i,r)}}let oT=0;const xi=new en,zd=new Dn,Qr=new k,ui=new Ml,fl=new Ml,En=new k;class ea extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(HS(e)?qS:kS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new pe().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,r){return xi.makeTranslation(e,i,r),this.applyMatrix4(xi),this}scale(e,i,r){return xi.makeScale(e,i,r),this.applyMatrix4(xi),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Vn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ml);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];ui.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];fl.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ui.min,fl.min),ui.expandByPoint(En),En.addVectors(ui.max,fl.max),ui.expandByPoint(En)):(ui.expandByPoint(fl.min),ui.expandByPoint(fl.max))}ui.getCenter(r);let l=0;for(let f=0,h=e.count;f<h;f++)En.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(En));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)En.fromBufferAttribute(d,m),p&&(Qr.fromBufferAttribute(e,m),En.add(Qr)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let q=0;q<r.count;q++)d[q]=new k,p[q]=new k;const m=new k,v=new k,g=new k,S=new ce,x=new ce,T=new ce,A=new k,M=new k;function y(q,D,C){m.fromBufferAttribute(r,q),v.fromBufferAttribute(r,D),g.fromBufferAttribute(r,C),S.fromBufferAttribute(f,q),x.fromBufferAttribute(f,D),T.fromBufferAttribute(f,C),v.sub(m),g.sub(m),x.sub(S),T.sub(S);const V=1/(x.x*T.y-T.x*x.y);isFinite(V)&&(A.copy(v).multiplyScalar(T.y).addScaledVector(g,-x.y).multiplyScalar(V),M.copy(g).multiplyScalar(x.x).addScaledVector(v,-T.x).multiplyScalar(V),d[q].add(A),d[D].add(A),d[C].add(A),p[q].add(M),p[D].add(M),p[C].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let q=0,D=P.length;q<D;++q){const C=P[q],V=C.start,at=C.count;for(let ut=V,gt=V+at;ut<gt;ut+=3)y(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const O=new k,w=new k,F=new k,B=new k;function L(q){F.fromBufferAttribute(l,q),B.copy(F);const D=d[q];O.copy(D),O.sub(F.multiplyScalar(F.dot(D))).normalize(),w.crossVectors(B,D);const V=w.dot(p[q])<0?-1:1;h.setXYZW(q,O.x,O.y,O.z,V)}for(let q=0,D=P.length;q<D;++q){const C=P[q],V=C.start,at=C.count;for(let ut=V,gt=V+at;ut<gt;ut+=3)L(e.getX(ut+0)),L(e.getX(ut+1)),L(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,x=r.count;S<x;S++)r.setXYZ(S,0,0,0);const l=new k,f=new k,h=new k,d=new k,p=new k,m=new k,v=new k,g=new k;if(e)for(let S=0,x=e.count;S<x;S+=3){const T=e.getX(S+0),A=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,T),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),v.subVectors(h,f),g.subVectors(l,f),v.cross(g),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,M),d.add(v),p.add(v),m.add(v),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,x=i.count;S<x;S+=3)l.fromBufferAttribute(i,S+0),f.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,f),g.subVectors(l,f),v.cross(g),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,g=d.normalized,S=new m.constructor(p.length*v);let x=0,T=0;for(let A=0,M=p.length;A<M;A++){d.isInterleavedBufferAttribute?x=p[A]*d.data.stride+d.offset:x=p[A]*v;for(let y=0;y<v;y++)S[T++]=m[x++]}return new Ji(S,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ea,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const f=this.morphAttributes;for(const d in f){const p=[],m=f[d];for(let v=0,g=m.length;v<g;v++){const S=m[v],x=e(S,r);p.push(x)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let f=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,S=m.length;g<S;g++){const x=m[g];v.push(x.toJSON(e.data))}v.length>0&&(l[p]=v,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const f=e.morphAttributes;for(const m in f){const v=[],g=f[m];for(let S=0,x=g.length;S<x;S++)v.push(g[S].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,v=h.length;m<v;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hv=new en,Gs=new $p,rc=new Jp,Gv=new k,oc=new k,lc=new k,uc=new k,Id=new k,cc=new k,Vv=new k,fc=new k;class ci extends Dn{constructor(e=new ea,i=new XS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){cc.set(0,0,0);for(let p=0,m=f.length;p<m;p++){const v=d[p],g=f[p];v!==0&&(Id.fromBufferAttribute(g,e),h?cc.addScaledVector(Id,v):cc.addScaledVector(Id.sub(i),v))}i.add(cc)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),rc.copy(r.boundingSphere),rc.applyMatrix4(f),Gs.copy(e.ray).recast(e.near),!(rc.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(rc,Gv)===null||Gs.origin.distanceToSquared(Gv)>(e.far-e.near)**2))&&(Hv.copy(f).invert(),Gs.copy(e.ray).applyMatrix4(Hv),!(r.boundingBox!==null&&Gs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Gs)))}_computeIntersections(e,i,r){let l;const f=this.geometry,h=this.material,d=f.index,p=f.attributes.position,m=f.attributes.uv,v=f.attributes.uv1,g=f.attributes.normal,S=f.groups,x=f.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=S.length;T<A;T++){const M=S[T],y=h[M.materialIndex],P=Math.max(M.start,x.start),O=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let w=P,F=O;w<F;w+=3){const B=d.getX(w),L=d.getX(w+1),q=d.getX(w+2);l=hc(this,y,e,r,m,v,g,B,L,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let M=T,y=A;M<y;M+=3){const P=d.getX(M),O=d.getX(M+1),w=d.getX(M+2);l=hc(this,h,e,r,m,v,g,P,O,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,A=S.length;T<A;T++){const M=S[T],y=h[M.materialIndex],P=Math.max(M.start,x.start),O=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let w=P,F=O;w<F;w+=3){const B=w,L=w+1,q=w+2;l=hc(this,y,e,r,m,v,g,B,L,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,x.start),A=Math.min(p.count,x.start+x.count);for(let M=T,y=A;M<y;M+=3){const P=M,O=M+1,w=M+2;l=hc(this,h,e,r,m,v,g,P,O,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function lT(o,e,i,r,l,f,h,d){let p;if(e.side===Qn?p=r.intersectTriangle(h,f,l,!0,d):p=r.intersectTriangle(l,f,h,e.side===cs,d),p===null)return null;fc.copy(d),fc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(fc);return m<i.near||m>i.far?null:{distance:m,point:fc.clone(),object:o}}function hc(o,e,i,r,l,f,h,d,p,m){o.getVertexPosition(d,oc),o.getVertexPosition(p,lc),o.getVertexPosition(m,uc);const v=lT(o,e,i,r,oc,lc,uc,Vv);if(v){const g=new k;Oi.getBarycoord(Vv,oc,lc,uc,g),l&&(v.uv=Oi.getInterpolatedAttribute(l,d,p,m,g,new ce)),f&&(v.uv1=Oi.getInterpolatedAttribute(f,d,p,m,g,new ce)),h&&(v.normal=Oi.getInterpolatedAttribute(h,d,p,m,g,new k),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new k,materialIndex:0};Oi.getNormal(oc,lc,uc,S.normal),v.face=S,v.barycoord=g}return v}class Tl extends ea{constructor(e=1,i=1,r=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const p=[],m=[],v=[],g=[];let S=0,x=0;T("z","y","x",-1,-1,r,i,e,h,f,0),T("z","y","x",1,-1,r,i,-e,h,f,1),T("x","z","y",1,1,e,r,i,l,h,2),T("x","z","y",1,-1,e,r,-i,l,h,3),T("x","y","z",1,-1,e,i,r,l,f,4),T("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(p),this.setAttribute("position",new Vn(m,3)),this.setAttribute("normal",new Vn(v,3)),this.setAttribute("uv",new Vn(g,2));function T(A,M,y,P,O,w,F,B,L,q,D){const C=w/L,V=F/q,at=w/2,ut=F/2,gt=B/2,lt=L+1,j=q+1;let st=0,K=0;const _t=new k;for(let St=0;St<j;St++){const Ht=St*V-ut;for(let re=0;re<lt;re++){const be=re*C-at;_t[A]=be*P,_t[M]=Ht*O,_t[y]=gt,m.push(_t.x,_t.y,_t.z),_t[A]=0,_t[M]=0,_t[y]=B>0?1:-1,v.push(_t.x,_t.y,_t.z),g.push(re/L),g.push(1-St/q),st+=1}}for(let St=0;St<q;St++)for(let Ht=0;Ht<L;Ht++){const re=S+Ht+lt*St,be=S+Ht+lt*(St+1),I=S+(Ht+1)+lt*(St+1),ct=S+(Ht+1)+lt*St;p.push(re,be,ct),p.push(be,I,ct),K+=6}d.addGroup(x,K,D),x+=K,S+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Gn(o){const e={};for(let i=0;i<o.length;i++){const r=fo(o[i]);for(const l in r)e[l]=r[l]}return e}function uT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function YS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const cT={clone:fo,merge:Gn};var fT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fs extends El{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fT,this.fragmentShader=hT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=uT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class WS extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new k,Xv=new ce,kv=new ce;class Ei extends WS{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Fp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fp*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,i){return this.getViewBounds(e,Xv,kv),i.subVectors(kv,Xv)}setViewOffset(e,i,r,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Rc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;f+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Jr=-90,$r=1;class dT extends Dn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Jr,$r,e,i);l.layers=this.layers,this.add(l);const f=new Ei(Jr,$r,e,i);f.layers=this.layers,this.add(f);const h=new Ei(Jr,$r,e,i);h.layers=this.layers,this.add(h);const d=new Ei(Jr,$r,e,i);d.layers=this.layers,this.add(d);const p=new Ei(Jr,$r,e,i);p.layers=this.layers,this.add(p);const m=new Ei(Jr,$r,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,h,d,p]=i;for(const m of i)this.remove(m);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Dc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,p,m,v]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(g,S,x),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class jS extends Jn{constructor(e=[],i=lo,r,l,f,h,d,p,m,v){super(e,i,r,l,f,h,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pT extends Js{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new jS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Tl(5,5,5),f=new fs({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:ls});f.uniforms.tEquirect.value=i;const h=new ci(l,f),d=i.minFilter;return i.minFilter===Zs&&(i.minFilter=Ki),new dT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(f)}}class Ti extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mT={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const A of e.hand.values()){const M=i.getJointPose(A,r),y=this._getHandJoint(m,A);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],S=v.position.distanceTo(g.position),x=.02,T=.005;m.inputState.pinching&&S>x+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=x-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(mT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=f!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ti;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class gT extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Fd=new k,_T=new k,vT=new pe;class rs{constructor(e=new k(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Fd.subVectors(r,i).cross(_T.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Fd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||vT.getNormalMatrix(e),l=this.coplanarPoint(Fd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new Jp,ST=new ce(.5,.5),dc=new k;class em{constructor(e=new rs,i=new rs,r=new rs,l=new rs,f=new rs,h=new rs){this.planes=[e,i,r,l,f,h]}set(e,i,r,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Qi,r=!1){const l=this.planes,f=e.elements,h=f[0],d=f[1],p=f[2],m=f[3],v=f[4],g=f[5],S=f[6],x=f[7],T=f[8],A=f[9],M=f[10],y=f[11],P=f[12],O=f[13],w=f[14],F=f[15];if(l[0].setComponents(m-h,x-v,y-T,F-P).normalize(),l[1].setComponents(m+h,x+v,y+T,F+P).normalize(),l[2].setComponents(m+d,x+g,y+A,F+O).normalize(),l[3].setComponents(m-d,x-g,y-A,F-O).normalize(),r)l[4].setComponents(p,S,M,w).normalize(),l[5].setComponents(m-p,x-S,y-M,F-w).normalize();else if(l[4].setComponents(m-p,x-S,y-M,F-w).normalize(),i===Qi)l[5].setComponents(m+p,x+S,y+M,F+w).normalize();else if(i===Dc)l[5].setComponents(p,S,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);const i=ST.distanceTo(e.center);return Vs.radius=.7071067811865476+i,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(dc.x=l.normal.x>0?e.max.x:e.min.x,dc.y=l.normal.y>0?e.max.y:e.min.y,dc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ZS extends Jn{constructor(e,i,r=Ks,l,f,h,d=zi,p=zi,m,v=gl,g=1){if(v!==gl&&v!==_l)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,f,h,d,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class KS extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class nm extends ea{constructor(e=1,i=32,r=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:r,thetaLength:l},i=Math.max(3,i);const f=[],h=[],d=[],p=[],m=new k,v=new ce;h.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let g=0,S=3;g<=i;g++,S+=3){const x=r+g/i*l;m.x=e*Math.cos(x),m.y=e*Math.sin(x),h.push(m.x,m.y,m.z),d.push(0,0,1),v.x=(h[S]/e+1)/2,v.y=(h[S+1]/e+1)/2,p.push(v.x,v.y)}for(let g=1;g<=i;g++)f.push(g,g+1,0);this.setIndex(f),this.setAttribute("position",new Vn(h,3)),this.setAttribute("normal",new Vn(d,3)),this.setAttribute("uv",new Vn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nm(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yT{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),f=0;i.push(0);for(let h=1;h<=e;h++)r=this.getPoint(h/e),f+=r.distanceTo(l),i.push(f),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let l=0;const f=r.length;let h;i?h=i:h=e*r[f-1];let d=0,p=f-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===h)return l/(f-1);const v=r[l],S=r[l+1]-v,x=(h-v)/S;return(l+x)/(f-1)}getTangent(e,i){let l=e-1e-4,f=e+1e-4;l<0&&(l=0),f>1&&(f=1);const h=this.getPoint(l),d=this.getPoint(f),p=i||(h.isVector2?new ce:new k);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new k,l=[],f=[],h=[],d=new k,p=new en;for(let x=0;x<=e;x++){const T=x/e;l[x]=this.getTangentAt(T,new k)}f[0]=new k,h[0]=new k;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),S=Math.abs(l[0].z);v<=m&&(m=v,r.set(1,0,0)),g<=m&&(m=g,r.set(0,1,0)),S<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),f[0].crossVectors(l[0],d),h[0].crossVectors(l[0],f[0]);for(let x=1;x<=e;x++){if(f[x]=f[x-1].clone(),h[x]=h[x-1].clone(),d.crossVectors(l[x-1],l[x]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(ve(l[x-1].dot(l[x]),-1,1));f[x].applyMatrix4(p.makeRotationAxis(d,T))}h[x].crossVectors(l[x],f[x])}if(i===!0){let x=Math.acos(ve(f[0].dot(f[e]),-1,1));x/=e,l[0].dot(d.crossVectors(f[0],f[e]))>0&&(x=-x);for(let T=1;T<=e;T++)f[T].applyMatrix4(p.makeRotationAxis(l[T],x*T)),h[T].crossVectors(l[T],f[T])}return{tangents:l,normals:f,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function im(){let o=0,e=0,i=0,r=0;function l(f,h,d,p){o=f,e=d,i=-3*f+3*h-2*d-p,r=2*f-2*h+d+p}return{initCatmullRom:function(f,h,d,p,m){l(h,d,m*(d-f),m*(p-h))},initNonuniformCatmullRom:function(f,h,d,p,m,v,g){let S=(h-f)/m-(d-f)/(m+v)+(d-h)/v,x=(d-h)/v-(p-h)/(v+g)+(p-d)/g;S*=v,x*=v,l(h,d,S,x)},calc:function(f){const h=f*f,d=h*f;return o+e*f+i*h+r*d}}}const pc=new k,Hd=new im,Gd=new im,Vd=new im;class xT extends yT{constructor(e=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=l}getPoint(e,i=new k){const r=i,l=this.points,f=l.length,h=(f-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/f)+1)*f:p===0&&d===f-1&&(d=f-2,p=1);let m,v;this.closed||d>0?m=l[(d-1)%f]:(pc.subVectors(l[0],l[1]).add(l[0]),m=pc);const g=l[d%f],S=l[(d+1)%f];if(this.closed||d+2<f?v=l[(d+2)%f]:(pc.subVectors(l[f-1],l[f-2]).add(l[f-1]),v=pc),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let T=Math.pow(m.distanceToSquared(g),x),A=Math.pow(g.distanceToSquared(S),x),M=Math.pow(S.distanceToSquared(v),x);A<1e-4&&(A=1),T<1e-4&&(T=A),M<1e-4&&(M=A),Hd.initNonuniformCatmullRom(m.x,g.x,S.x,v.x,T,A,M),Gd.initNonuniformCatmullRom(m.y,g.y,S.y,v.y,T,A,M),Vd.initNonuniformCatmullRom(m.z,g.z,S.z,v.z,T,A,M)}else this.curveType==="catmullrom"&&(Hd.initCatmullRom(m.x,g.x,S.x,v.x,this.tension),Gd.initCatmullRom(m.y,g.y,S.y,v.y,this.tension),Vd.initCatmullRom(m.z,g.z,S.z,v.z,this.tension));return r.set(Hd.calc(p),Gd.calc(p),Vd.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(new k().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Lc extends ea{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,v=p+1,g=e/d,S=i/p,x=[],T=[],A=[],M=[];for(let y=0;y<v;y++){const P=y*S-h;for(let O=0;O<m;O++){const w=O*g-f;T.push(w,-P,0),A.push(0,0,1),M.push(O/d),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let P=0;P<d;P++){const O=P+m*y,w=P+m*(y+1),F=P+1+m*(y+1),B=P+1+m*y;x.push(O,w,B),x.push(w,F,B)}this.setIndex(x),this.setAttribute("position",new Vn(T,3)),this.setAttribute("normal",new Vn(A,3)),this.setAttribute("uv",new Vn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class ho extends El{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=BS,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MT extends El{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ET extends El{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class QS extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class TT extends QS{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Xd=new en,qv=new k,Yv=new k;class bT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new em,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;qv.setFromMatrixPosition(e.matrixWorld),i.position.copy(qv),Yv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Yv),i.updateMatrixWorld(),Xd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class JS extends WS{constructor(e=-1,i=1,r=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,h=f+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class AT extends bT{constructor(){super(new JS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RT extends QS{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new AT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CT extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Wv=new en;class wT{constructor(e,i,r=0,l=1/0){this.ray=new $p(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new tm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Wv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wv),this}intersectObject(e,i=!0,r=[]){return Hp(e,this,r,i),r.sort(jv),r}intersectObjects(e,i=!0,r=[]){for(let l=0,f=e.length;l<f;l++)Hp(e[l],this,r,i);return r.sort(jv),r}}function jv(o,e){return o.distance-e.distance}function Hp(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Hp(f[h],e,i,!0)}}class Zv{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class DT extends tr{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Kv(o,e,i,r){const l=UT(r);switch(i){case OS:return o*e;case zS:return o*e/l.components*l.byteLength;case jp:return o*e/l.components*l.byteLength;case IS:return o*e*2/l.components*l.byteLength;case Zp:return o*e*2/l.components*l.byteLength;case PS:return o*e*3/l.components*l.byteLength;case Pi:return o*e*4/l.components*l.byteLength;case Kp:return o*e*4/l.components*l.byteLength;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bc:case Ac:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hp:case pp:return Math.max(o,16)*Math.max(e,8)/4;case fp:case dp:return Math.max(o,8)*Math.max(e,8)/2;case mp:case gp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _p:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case yp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case xp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case bp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ap:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Cp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case wp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Dp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Up:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Np:case Lp:case Op:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Pp:case zp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Ip:case Bp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function UT(o){switch(o){case $i:case DS:return{byteLength:1,components:1};case pl:case US:case yl:return{byteLength:2,components:1};case Yp:case Wp:return{byteLength:2,components:4};case Ks:case qp:case Ta:return{byteLength:4,components:1};case NS:case LS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $S(){let o=null,e=!1,i=null,r=null;function l(f,h){i(f,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function NT(o){const e=new WeakMap;function i(d,p){const m=d.array,v=d.usage,g=m.byteLength,S=o.createBuffer();o.bindBuffer(p,S),o.bufferData(p,m,v),d.onUploadCallback();let x;if(m instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)x=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=o.SHORT;else if(m instanceof Uint32Array)x=o.UNSIGNED_INT;else if(m instanceof Int32Array)x=o.INT;else if(m instanceof Int8Array)x=o.BYTE;else if(m instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const v=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,v);else{g.sort((x,T)=>x.start-T.start);let S=0;for(let x=1;x<g.length;x++){const T=g[S],A=g[x];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++S,g[S]=A)}g.length=S+1;for(let x=0,T=g.length;x<T;x++){const A=g[x];o.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:f,update:h}}var LT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OT=`#ifdef USE_ALPHAHASH
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
#endif`,PT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FT=`#ifdef USE_AOMAP
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
#endif`,HT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GT=`#ifdef USE_BATCHING
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
#endif`,VT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,YT=`#ifdef USE_IRIDESCENCE
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
#endif`,WT=`#ifdef USE_BUMPMAP
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
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nb=`#define PI 3.141592653589793
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
} // validated`,ib=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ab=`vec3 transformedNormal = objectNormal;
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
#endif`,sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ob=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",cb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fb=`#ifdef USE_ENVMAP
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
#endif`,hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,db=`#ifdef USE_ENVMAP
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
#endif`,pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_b=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yb=`#ifdef USE_GRADIENTMAP
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
}`,xb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tb=`uniform bool receiveShadow;
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
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Db=`PhysicalMaterial material;
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
#endif`,Ub=`struct PhysicalMaterial {
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
}`,Nb=`
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
#endif`,Lb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vb=`#if defined( USE_POINTS_UV )
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
#endif`,Xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`#ifdef USE_MORPHTARGETS
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
#endif`,Zb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e1=`#ifdef USE_NORMALMAP
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
#endif`,n1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_1=`float getShadowMask() {
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
}`,v1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S1=`#ifdef USE_SKINNING
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
#endif`,y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x1=`#ifdef USE_SKINNING
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
#endif`,M1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,A1=`#ifdef USE_TRANSMISSION
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
#endif`,R1=`#ifdef USE_TRANSMISSION
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L1=`uniform sampler2D t2D;
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`#include <common>
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
}`,F1=`#if DEPTH_PACKING == 3200
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
}`,H1=`#define DISTANCE
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
}`,G1=`#define DISTANCE
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`uniform float scale;
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
}`,q1=`uniform vec3 diffuse;
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
}`,Y1=`#include <common>
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
}`,W1=`uniform vec3 diffuse;
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
}`,j1=`#define LAMBERT
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
}`,Z1=`#define LAMBERT
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
}`,K1=`#define MATCAP
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
}`,Q1=`#define MATCAP
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
}`,J1=`#define NORMAL
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
}`,$1=`#define NORMAL
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
}`,tA=`#define PHONG
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
}`,eA=`#define PHONG
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
}`,nA=`#define STANDARD
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
}`,iA=`#define STANDARD
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
}`,aA=`#define TOON
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
}`,sA=`#define TOON
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
}`,rA=`uniform float size;
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
}`,oA=`uniform vec3 diffuse;
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
}`,lA=`#include <common>
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
}`,uA=`uniform vec3 color;
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
}`,cA=`uniform float rotation;
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
}`,fA=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:LT,alphahash_pars_fragment:OT,alphamap_fragment:PT,alphamap_pars_fragment:zT,alphatest_fragment:IT,alphatest_pars_fragment:BT,aomap_fragment:FT,aomap_pars_fragment:HT,batching_pars_vertex:GT,batching_vertex:VT,begin_vertex:XT,beginnormal_vertex:kT,bsdfs:qT,iridescence_fragment:YT,bumpmap_pars_fragment:WT,clipping_planes_fragment:jT,clipping_planes_pars_fragment:ZT,clipping_planes_pars_vertex:KT,clipping_planes_vertex:QT,color_fragment:JT,color_pars_fragment:$T,color_pars_vertex:tb,color_vertex:eb,common:nb,cube_uv_reflection_fragment:ib,defaultnormal_vertex:ab,displacementmap_pars_vertex:sb,displacementmap_vertex:rb,emissivemap_fragment:ob,emissivemap_pars_fragment:lb,colorspace_fragment:ub,colorspace_pars_fragment:cb,envmap_fragment:fb,envmap_common_pars_fragment:hb,envmap_pars_fragment:db,envmap_pars_vertex:pb,envmap_physical_pars_fragment:bb,envmap_vertex:mb,fog_vertex:gb,fog_pars_vertex:_b,fog_fragment:vb,fog_pars_fragment:Sb,gradientmap_pars_fragment:yb,lightmap_pars_fragment:xb,lights_lambert_fragment:Mb,lights_lambert_pars_fragment:Eb,lights_pars_begin:Tb,lights_toon_fragment:Ab,lights_toon_pars_fragment:Rb,lights_phong_fragment:Cb,lights_phong_pars_fragment:wb,lights_physical_fragment:Db,lights_physical_pars_fragment:Ub,lights_fragment_begin:Nb,lights_fragment_maps:Lb,lights_fragment_end:Ob,logdepthbuf_fragment:Pb,logdepthbuf_pars_fragment:zb,logdepthbuf_pars_vertex:Ib,logdepthbuf_vertex:Bb,map_fragment:Fb,map_pars_fragment:Hb,map_particle_fragment:Gb,map_particle_pars_fragment:Vb,metalnessmap_fragment:Xb,metalnessmap_pars_fragment:kb,morphinstance_vertex:qb,morphcolor_vertex:Yb,morphnormal_vertex:Wb,morphtarget_pars_vertex:jb,morphtarget_vertex:Zb,normal_fragment_begin:Kb,normal_fragment_maps:Qb,normal_pars_fragment:Jb,normal_pars_vertex:$b,normal_vertex:t1,normalmap_pars_fragment:e1,clearcoat_normal_fragment_begin:n1,clearcoat_normal_fragment_maps:i1,clearcoat_pars_fragment:a1,iridescence_pars_fragment:s1,opaque_fragment:r1,packing:o1,premultiplied_alpha_fragment:l1,project_vertex:u1,dithering_fragment:c1,dithering_pars_fragment:f1,roughnessmap_fragment:h1,roughnessmap_pars_fragment:d1,shadowmap_pars_fragment:p1,shadowmap_pars_vertex:m1,shadowmap_vertex:g1,shadowmask_pars_fragment:_1,skinbase_vertex:v1,skinning_pars_vertex:S1,skinning_vertex:y1,skinnormal_vertex:x1,specularmap_fragment:M1,specularmap_pars_fragment:E1,tonemapping_fragment:T1,tonemapping_pars_fragment:b1,transmission_fragment:A1,transmission_pars_fragment:R1,uv_pars_fragment:C1,uv_pars_vertex:w1,uv_vertex:D1,worldpos_vertex:U1,background_vert:N1,background_frag:L1,backgroundCube_vert:O1,backgroundCube_frag:P1,cube_vert:z1,cube_frag:I1,depth_vert:B1,depth_frag:F1,distanceRGBA_vert:H1,distanceRGBA_frag:G1,equirect_vert:V1,equirect_frag:X1,linedashed_vert:k1,linedashed_frag:q1,meshbasic_vert:Y1,meshbasic_frag:W1,meshlambert_vert:j1,meshlambert_frag:Z1,meshmatcap_vert:K1,meshmatcap_frag:Q1,meshnormal_vert:J1,meshnormal_frag:$1,meshphong_vert:tA,meshphong_frag:eA,meshphysical_vert:nA,meshphysical_frag:iA,meshtoon_vert:aA,meshtoon_frag:sA,points_vert:rA,points_frag:oA,shadow_vert:lA,shadow_frag:uA,sprite_vert:cA,sprite_frag:fA},zt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Zi={basic:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Re(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Gn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Gn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Gn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Re(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Gn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Gn([zt.points,zt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Gn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Gn([zt.common,zt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Gn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Gn([zt.sprite,zt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Gn([zt.common,zt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Gn([zt.lights,zt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Zi.physical={uniforms:Gn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const mc={r:0,b:0,g:0},Xs=new ta,hA=new en;function dA(o,e,i,r,l,f,h){const d=new Re(0);let p=f===!0?0:1,m,v,g=null,S=0,x=null;function T(O){let w=O.isScene===!0?O.background:null;return w&&w.isTexture&&(w=(O.backgroundBlurriness>0?i:e).get(w)),w}function A(O){let w=!1;const F=T(O);F===null?y(d,p):F&&F.isColor&&(y(F,1),w=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,w){const F=T(w);F&&(F.isCubeTexture||F.mapping===Nc)?(v===void 0&&(v=new ci(new Tl(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:fo(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,L,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Xs.copy(w.backgroundRotation),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(hA.makeRotationFromEuler(Xs)),v.material.toneMapped=Ue.getTransfer(F.colorSpace)!==Xe,(g!==F||S!==F.version||x!==o.toneMapping)&&(v.material.needsUpdate=!0,g=F,S=F.version,x=o.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new ci(new Lc(2,2),new fs({name:"BackgroundMaterial",uniforms:fo(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Ue.getTransfer(F.colorSpace)!==Xe,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||S!==F.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,g=F,S=F.version,x=o.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function y(O,w){O.getRGB(mc,YS(o)),r.buffers.color.setClear(mc.r,mc.g,mc.b,w,h)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,w=1){d.set(O),p=w,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,y(d,p)},render:A,addToRenderList:M,dispose:P}}function pA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let f=l,h=!1;function d(C,V,at,ut,gt){let lt=!1;const j=g(ut,at,V);f!==j&&(f=j,m(f.object)),lt=x(C,ut,at,gt),lt&&T(C,ut,at,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,w(C,V,at,ut),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function p(){return o.createVertexArray()}function m(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function g(C,V,at){const ut=at.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let lt=gt[V.id];lt===void 0&&(lt={},gt[V.id]=lt);let j=lt[ut];return j===void 0&&(j=S(p()),lt[ut]=j),j}function S(C){const V=[],at=[],ut=[];for(let gt=0;gt<i;gt++)V[gt]=0,at[gt]=0,ut[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:at,attributeDivisors:ut,object:C,attributes:{},index:null}}function x(C,V,at,ut){const gt=f.attributes,lt=V.attributes;let j=0;const st=at.getAttributes();for(const K in st)if(st[K].location>=0){const St=gt[K];let Ht=lt[K];if(Ht===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Ht=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Ht=C.instanceColor)),St===void 0||St.attribute!==Ht||Ht&&St.data!==Ht.data)return!0;j++}return f.attributesNum!==j||f.index!==ut}function T(C,V,at,ut){const gt={},lt=V.attributes;let j=0;const st=at.getAttributes();for(const K in st)if(st[K].location>=0){let St=lt[K];St===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(St=C.instanceColor));const Ht={};Ht.attribute=St,St&&St.data&&(Ht.data=St.data),gt[K]=Ht,j++}f.attributes=gt,f.attributesNum=j,f.index=ut}function A(){const C=f.newAttributes;for(let V=0,at=C.length;V<at;V++)C[V]=0}function M(C){y(C,0)}function y(C,V){const at=f.newAttributes,ut=f.enabledAttributes,gt=f.attributeDivisors;at[C]=1,ut[C]===0&&(o.enableVertexAttribArray(C),ut[C]=1),gt[C]!==V&&(o.vertexAttribDivisor(C,V),gt[C]=V)}function P(){const C=f.newAttributes,V=f.enabledAttributes;for(let at=0,ut=V.length;at<ut;at++)V[at]!==C[at]&&(o.disableVertexAttribArray(at),V[at]=0)}function O(C,V,at,ut,gt,lt,j){j===!0?o.vertexAttribIPointer(C,V,at,gt,lt):o.vertexAttribPointer(C,V,at,ut,gt,lt)}function w(C,V,at,ut){A();const gt=ut.attributes,lt=at.getAttributes(),j=V.defaultAttributeValues;for(const st in lt){const K=lt[st];if(K.location>=0){let _t=gt[st];if(_t===void 0&&(st==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),st==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),_t!==void 0){const St=_t.normalized,Ht=_t.itemSize,re=e.get(_t);if(re===void 0)continue;const be=re.buffer,I=re.type,ct=re.bytesPerElement,$=I===o.INT||I===o.UNSIGNED_INT||_t.gpuType===qp;if(_t.isInterleavedBufferAttribute){const it=_t.data,xt=it.stride,Ut=_t.offset;if(it.isInstancedInterleavedBuffer){for(let At=0;At<K.locationSize;At++)y(K.location+At,it.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let At=0;At<K.locationSize;At++)M(K.location+At);o.bindBuffer(o.ARRAY_BUFFER,be);for(let At=0;At<K.locationSize;At++)O(K.location+At,Ht/K.locationSize,I,St,xt*ct,(Ut+Ht/K.locationSize*At)*ct,$)}else{if(_t.isInstancedBufferAttribute){for(let it=0;it<K.locationSize;it++)y(K.location+it,_t.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let it=0;it<K.locationSize;it++)M(K.location+it);o.bindBuffer(o.ARRAY_BUFFER,be);for(let it=0;it<K.locationSize;it++)O(K.location+it,Ht/K.locationSize,I,St,Ht*ct,Ht/K.locationSize*it*ct,$)}}else if(j!==void 0){const St=j[st];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(K.location,St);break;case 3:o.vertexAttrib3fv(K.location,St);break;case 4:o.vertexAttrib4fv(K.location,St);break;default:o.vertexAttrib1fv(K.location,St)}}}}P()}function F(){q();for(const C in r){const V=r[C];for(const at in V){const ut=V[at];for(const gt in ut)v(ut[gt].object),delete ut[gt];delete V[at]}delete r[C]}}function B(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const at in V){const ut=V[at];for(const gt in ut)v(ut[gt].object),delete ut[gt];delete V[at]}delete r[C.id]}function L(C){for(const V in r){const at=r[V];if(at[C.id]===void 0)continue;const ut=at[C.id];for(const gt in ut)v(ut[gt].object),delete ut[gt];delete at[C.id]}}function q(){D(),h=!0,f!==l&&(f=l,m(f.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:L,initAttributes:A,enableAttribute:M,disableUnusedAttributes:P}}function mA(o,e,i){let r;function l(m){r=m}function f(m,v){o.drawArrays(r,m,v),i.update(v,r,1)}function h(m,v,g){g!==0&&(o.drawArraysInstanced(r,m,v,g),i.update(v,r,g))}function d(m,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,g);let x=0;for(let T=0;T<g;T++)x+=v[T];i.update(x,r,1)}function p(m,v,g,S){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let T=0;T<m.length;T++)h(m[T],v[T],S[T]);else{x.multiDrawArraysInstancedWEBGL(r,m,0,v,0,S,0,g);let T=0;for(let A=0;A<g;A++)T+=v[A]*S[A];i.update(T,r,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function gA(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(L){return!(L!==Pi&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const q=L===yl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==$i&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ta&&!q)}function p(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=T>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:x,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:w,vertexTextures:F,maxSamples:B}}function _A(o){const e=this;let i=null,r=0,l=!1,f=!1;const h=new rs,d=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const x=g.length!==0||S||r!==0||l;return l=S,r=g.length,x},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,x){const T=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,y=o.get(g);if(!l||T===null||T.length===0||f&&!M)f?v(null):m();else{const P=f?0:r,O=P*4;let w=y.clippingState||null;p.value=w,w=v(T,S,O,x);for(let F=0;F!==O;++F)w[F]=i[F];y.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,S,x,T){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=p.value,T!==!0||M===null){const y=x+A*4,P=S.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<y)&&(M=new Float32Array(y));for(let O=0,w=x;O!==A;++O,w+=4)h.copy(g[O]).applyMatrix4(P,d),h.normal.toArray(M,w),M[w+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function vA(o){let e=new WeakMap;function i(h,d){return d===op?h.mapping=lo:d===lp&&(h.mapping=uo),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===op||d===lp)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new pT(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const io=4,Qv=[.125,.215,.35,.446,.526,.582],Ws=20,kd=new JS,Jv=new Re;let qd=null,Yd=0,Wd=0,jd=!1;const qs=(1+Math.sqrt(5))/2,to=1/qs,$v=[new k(-qs,to,0),new k(qs,to,0),new k(-to,0,qs),new k(to,0,qs),new k(0,qs,-to),new k(0,qs,to),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],SA=new k;class tS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,f={}){const{size:h=256,position:d=SA}=f;qd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qd,Yd,Wd),this._renderer.xr.enabled=jd,e.scissorTest=!1,gc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===lo||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:yl,format:Pi,colorSpace:co,depthBuffer:!1},l=eS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eS(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yA(f)),this._blurMaterial=xA(f,e,i)}return l}_compileMaterial(e){const i=new ci(this._lodPlanes[0],e);this._renderer.compile(i,kd)}_sceneToCubeUV(e,i,r,l,f){const p=new Ei(90,1,i,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,x=g.toneMapping;g.getClearColor(Jv),g.toneMapping=us,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const A=new XS({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),M=new ci(new Tl,A);let y=!1;const P=e.background;P?P.isColor&&(A.color.copy(P),e.background=null,y=!0):(A.color.copy(Jv),y=!0);for(let O=0;O<6;O++){const w=O%3;w===0?(p.up.set(0,m[O],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+v[O],f.y,f.z)):w===1?(p.up.set(0,0,m[O]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+v[O],f.z)):(p.up.set(0,m[O],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+v[O]));const F=this._cubeSize;gc(l,w*F,O>2?F:0,F,F),g.setRenderTarget(l),y&&g.render(M,p),g.render(e,p)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=S,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===lo||e.mapping===uo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=iS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nS());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new ci(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const p=this._cubeSize;gc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,kd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=$v[(l-f-1)%$v.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",f),this._halfBlur(h,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new ci(this._lodPlanes[l],m),S=m.uniforms,x=this._sizeLods[r]-1,T=isFinite(f)?Math.PI/(2*x):2*Math.PI/(2*Ws-1),A=f/T,M=isFinite(f)?1+Math.floor(v*A):Ws;M>Ws&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ws}`);const y=[];let P=0;for(let L=0;L<Ws;++L){const q=L/A,D=Math.exp(-q*q/2);y.push(D),L===0?P+=D:L<M&&(P+=2*D)}for(let L=0;L<y.length;L++)y[L]=y[L]/P;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=y,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=T,S.mipInt.value=O-r;const w=this._sizeLods[l],F=3*w*(l>O-io?l-O+io:0),B=4*(this._cubeSize-w);gc(i,F,B,3*w,2*w),p.setRenderTarget(i),p.render(g,kd)}}function yA(o){const e=[],i=[],r=[];let l=o;const f=o-io+1+Qv.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-io?p=Qv[h-o+io-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,g=1+m,S=[v,v,g,v,g,g,v,v,g,g,v,g],x=6,T=6,A=3,M=2,y=1,P=new Float32Array(A*T*x),O=new Float32Array(M*T*x),w=new Float32Array(y*T*x);for(let B=0;B<x;B++){const L=B%3*2/3-1,q=B>2?0:-1,D=[L,q,0,L+2/3,q,0,L+2/3,q+1,0,L,q,0,L+2/3,q+1,0,L,q+1,0];P.set(D,A*T*B),O.set(S,M*T*B);const C=[B,B,B,B,B,B];w.set(C,y*T*B)}const F=new ea;F.setAttribute("position",new Ji(P,A)),F.setAttribute("uv",new Ji(O,M)),F.setAttribute("faceIndex",new Ji(w,y)),e.push(F),l>io&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function eS(o,e,i){const r=new Js(o,e,i);return r.texture.mapping=Nc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function xA(o,e,i){const r=new Float32Array(Ws),l=new k(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:am(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function nS(){return new fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:am(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function iS(){return new fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:am(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function am(){return`

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
	`}function MA(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===op||p===lp,v=p===lo||p===uo;if(m||v){let g=e.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new tS(o)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return m&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new tS(o)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function f(d){const p=d.target;p.removeEventListener("dispose",f);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function EA(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&vl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function TA(o,e,i,r){const l={},f=new WeakMap;function h(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",h),delete l[S.id];const x=f.get(S);x&&(e.remove(x),f.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(g){const S=g.attributes;for(const x in S)e.update(S[x],o.ARRAY_BUFFER)}function m(g){const S=[],x=g.index,T=g.attributes.position;let A=0;if(x!==null){const P=x.array;A=x.version;for(let O=0,w=P.length;O<w;O+=3){const F=P[O+0],B=P[O+1],L=P[O+2];S.push(F,B,B,L,L,F)}}else if(T!==void 0){const P=T.array;A=T.version;for(let O=0,w=P.length/3-1;O<w;O+=3){const F=O+0,B=O+1,L=O+2;S.push(F,B,B,L,L,F)}}else return;const M=new(HS(S)?qS:kS)(S,1);M.version=A;const y=f.get(g);y&&e.remove(y),f.set(g,M)}function v(g){const S=f.get(g);if(S){const x=g.index;x!==null&&S.version<x.version&&m(g)}else m(g);return f.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function bA(o,e,i){let r;function l(S){r=S}let f,h;function d(S){f=S.type,h=S.bytesPerElement}function p(S,x){o.drawElements(r,x,f,S*h),i.update(x,r,1)}function m(S,x,T){T!==0&&(o.drawElementsInstanced(r,x,f,S*h,T),i.update(x,r,T))}function v(S,x,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,f,S,0,T);let M=0;for(let y=0;y<T;y++)M+=x[y];i.update(M,r,1)}function g(S,x,T,A){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<S.length;y++)m(S[y]/h,x[y],A[y]);else{M.multiDrawElementsInstancedWEBGL(r,x,0,f,S,0,A,0,T);let y=0;for(let P=0;P<T;P++)y+=x[P]*A[P];i.update(y,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function AA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function RA(o,e,i){const r=new WeakMap,l=new rn;function f(h,d,p){const m=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let S=r.get(d);if(S===void 0||S.count!==g){let C=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var x=C;S!==void 0&&S.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let w=0;T===!0&&(w=1),A===!0&&(w=2),M===!0&&(w=3);let F=d.attributes.position.count*w,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const L=new Float32Array(F*B*4*g),q=new GS(L,F,B,g);q.type=Ta,q.needsUpdate=!0;const D=w*4;for(let V=0;V<g;V++){const at=y[V],ut=P[V],gt=O[V],lt=F*B*4*V;for(let j=0;j<at.count;j++){const st=j*D;T===!0&&(l.fromBufferAttribute(at,j),L[lt+st+0]=l.x,L[lt+st+1]=l.y,L[lt+st+2]=l.z,L[lt+st+3]=0),A===!0&&(l.fromBufferAttribute(ut,j),L[lt+st+4]=l.x,L[lt+st+5]=l.y,L[lt+st+6]=l.z,L[lt+st+7]=0),M===!0&&(l.fromBufferAttribute(gt,j),L[lt+st+8]=l.x,L[lt+st+9]=l.y,L[lt+st+10]=l.z,L[lt+st+11]=gt.itemSize===4?l.w:1)}}S={count:g,texture:q,size:new ce(F,B)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<m.length;M++)T+=m[M];const A=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function CA(o,e,i,r){let l=new WeakMap;function f(p){const m=r.render.frame,v=p.geometry,g=e.get(p,v);if(l.get(g)!==m&&(e.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return g}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:f,dispose:h}}const ty=new Jn,aS=new ZS(1,1),ey=new GS,ny=new QE,iy=new jS,sS=[],rS=[],oS=new Float32Array(16),lS=new Float32Array(9),uS=new Float32Array(4);function po(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=sS[l];if(f===void 0&&(f=new Float32Array(l),sS[l]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function vn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Sn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Oc(o,e){let i=rS[e];i===void 0&&(i=new Int32Array(e),rS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function wA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function DA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2fv(this.addr,e),Sn(i,e)}}function UA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;o.uniform3fv(this.addr,e),Sn(i,e)}}function NA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4fv(this.addr,e),Sn(i,e)}}function LA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(vn(i,r))return;uS.set(r),o.uniformMatrix2fv(this.addr,!1,uS),Sn(i,r)}}function OA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(vn(i,r))return;lS.set(r),o.uniformMatrix3fv(this.addr,!1,lS),Sn(i,r)}}function PA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(vn(i,r))return;oS.set(r),o.uniformMatrix4fv(this.addr,!1,oS),Sn(i,r)}}function zA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function IA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2iv(this.addr,e),Sn(i,e)}}function BA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3iv(this.addr,e),Sn(i,e)}}function FA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4iv(this.addr,e),Sn(i,e)}}function HA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function GA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2uiv(this.addr,e),Sn(i,e)}}function VA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3uiv(this.addr,e),Sn(i,e)}}function XA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4uiv(this.addr,e),Sn(i,e)}}function kA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(aS.compareFunction=FS,f=aS):f=ty,i.setTexture2D(e||f,l)}function qA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||ny,l)}function YA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||iy,l)}function WA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||ey,l)}function jA(o){switch(o){case 5126:return wA;case 35664:return DA;case 35665:return UA;case 35666:return NA;case 35674:return LA;case 35675:return OA;case 35676:return PA;case 5124:case 35670:return zA;case 35667:case 35671:return IA;case 35668:case 35672:return BA;case 35669:case 35673:return FA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return XA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return qA;case 35680:case 36300:case 36308:case 36293:return YA;case 36289:case 36303:case 36311:case 36292:return WA}}function ZA(o,e){o.uniform1fv(this.addr,e)}function KA(o,e){const i=po(e,this.size,2);o.uniform2fv(this.addr,i)}function QA(o,e){const i=po(e,this.size,3);o.uniform3fv(this.addr,i)}function JA(o,e){const i=po(e,this.size,4);o.uniform4fv(this.addr,i)}function $A(o,e){const i=po(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function tR(o,e){const i=po(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function eR(o,e){const i=po(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function nR(o,e){o.uniform1iv(this.addr,e)}function iR(o,e){o.uniform2iv(this.addr,e)}function aR(o,e){o.uniform3iv(this.addr,e)}function sR(o,e){o.uniform4iv(this.addr,e)}function rR(o,e){o.uniform1uiv(this.addr,e)}function oR(o,e){o.uniform2uiv(this.addr,e)}function lR(o,e){o.uniform3uiv(this.addr,e)}function uR(o,e){o.uniform4uiv(this.addr,e)}function cR(o,e,i){const r=this.cache,l=e.length,f=Oc(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),Sn(r,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||ty,f[h])}function fR(o,e,i){const r=this.cache,l=e.length,f=Oc(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),Sn(r,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||ny,f[h])}function hR(o,e,i){const r=this.cache,l=e.length,f=Oc(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),Sn(r,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||iy,f[h])}function dR(o,e,i){const r=this.cache,l=e.length,f=Oc(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),Sn(r,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||ey,f[h])}function pR(o){switch(o){case 5126:return ZA;case 35664:return KA;case 35665:return QA;case 35666:return JA;case 35674:return $A;case 35675:return tR;case 35676:return eR;case 5124:case 35670:return nR;case 35667:case 35671:return iR;case 35668:case 35672:return aR;case 35669:case 35673:return sR;case 5125:return rR;case 36294:return oR;case 36295:return lR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return cR;case 35679:case 36299:case 36307:return fR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return dR}}class mR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=jA(i.type)}}class gR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pR(i.type)}}class _R{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],r)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function cS(o,e){o.seq.push(e),o.map[e.id]=e}function vR(o,e,i){const r=o.name,l=r.length;for(Zd.lastIndex=0;;){const f=Zd.exec(r),h=Zd.lastIndex;let d=f[1];const p=f[2]==="]",m=f[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){cS(i,m===void 0?new mR(d,o,e):new gR(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new _R(d),cS(i,g)),i=g}}}class Cc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);vR(f,h,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function fS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const SR=37297;let yR=0;function xR(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const hS=new pe;function MR(o){Ue._getMatrix(hS,Ue.workingColorSpace,o);const e=`mat3( ${hS.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case wc:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function dS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+xR(o.getShaderSource(e),d)}else return f}function ER(o,e){const i=MR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function TR(o,e){let i;switch(e){case TE:i="Linear";break;case bE:i="Reinhard";break;case AE:i="Cineon";break;case RE:i="ACESFilmic";break;case wE:i="AgX";break;case DE:i="Neutral";break;case CE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _c=new k;function bR(){Ue.getLuminanceCoefficients(_c);const o=_c.x.toFixed(4),e=_c.y.toFixed(4),i=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function RR(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function CR(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function dl(o){return o!==""}function pS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gp(o){return o.replace(wR,UR)}const DR=new Map;function UR(o,e){let i=me[e];if(i===void 0){const r=DR.get(e);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Gp(i)}const NR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gS(o){return o.replace(NR,LR)}function LR(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function _S(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function OR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===RS?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===iE?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ea&&(e="SHADOWMAP_TYPE_VSM"),e}function PR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case lo:case uo:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function IR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case CS:e="ENVMAP_BLENDING_MULTIPLY";break;case ME:e="ENVMAP_BLENDING_MIX";break;case EE:e="ENVMAP_BLENDING_ADD";break}return e}function BR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function FR(o,e,i,r){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=OR(i),m=PR(i),v=zR(i),g=IR(i),S=BR(i),x=AR(i),T=RR(f),A=l.createProgram();let M,y,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(dl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(dl).join(`
`),y.length>0&&(y+=`
`)):(M=[_S(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),y=[_S(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==us?"#define TONE_MAPPING":"",i.toneMapping!==us?me.tonemapping_pars_fragment:"",i.toneMapping!==us?TR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,ER("linearToOutputTexel",i.outputColorSpace),bR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(dl).join(`
`)),h=Gp(h),h=pS(h,i),h=mS(h,i),d=Gp(d),d=pS(d,i),d=mS(d,i),h=gS(h),d=gS(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===Rv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Rv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const O=P+M+h,w=P+y+d,F=fS(l,l.VERTEX_SHADER,O),B=fS(l,l.FRAGMENT_SHADER,w);l.attachShader(A,F),l.attachShader(A,B),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function L(V){if(o.debug.checkShaderErrors){const at=l.getProgramInfoLog(A)||"",ut=l.getShaderInfoLog(F)||"",gt=l.getShaderInfoLog(B)||"",lt=at.trim(),j=ut.trim(),st=gt.trim();let K=!0,_t=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,F,B);else{const St=dS(l,F,"vertex"),Ht=dS(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+St+`
`+Ht)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(j===""||st==="")&&(_t=!1);_t&&(V.diagnostics={runnable:K,programLog:lt,vertexShader:{log:j,prefix:M},fragmentShader:{log:st,prefix:y}})}l.deleteShader(F),l.deleteShader(B),q=new Cc(l,A),D=CR(l,A)}let q;this.getUniforms=function(){return q===void 0&&L(this),q};let D;this.getAttributes=function(){return D===void 0&&L(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,SR)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yR++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=B,this}let HR=0;class GR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new VR(e),i.set(e,r)),r}}class VR{constructor(e){this.id=HR++,this.code=e,this.usedTimes=0}}function XR(o,e,i,r,l,f,h){const d=new tm,p=new GR,m=new Set,v=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let x=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,C,V,at,ut){const gt=at.fog,lt=ut.geometry,j=D.isMeshStandardMaterial?at.environment:null,st=(D.isMeshStandardMaterial?i:e).get(D.envMap||j),K=st&&st.mapping===Nc?st.image.height:null,_t=T[D.type];D.precision!==null&&(x=l.getMaxPrecision(D.precision),x!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const St=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ht=St!==void 0?St.length:0;let re=0;lt.morphAttributes.position!==void 0&&(re=1),lt.morphAttributes.normal!==void 0&&(re=2),lt.morphAttributes.color!==void 0&&(re=3);let be,I,ct,$;if(_t){const Me=Zi[_t];be=Me.vertexShader,I=Me.fragmentShader}else be=D.vertexShader,I=D.fragmentShader,p.update(D),ct=p.getVertexShaderID(D),$=p.getFragmentShaderID(D);const it=o.getRenderTarget(),xt=o.state.buffers.depth.getReversed(),Ut=ut.isInstancedMesh===!0,At=ut.isBatchedMesh===!0,Mt=!!D.map,qt=!!D.matcap,z=!!st,He=!!D.aoMap,se=!!D.lightMap,Qt=!!D.bumpMap,Nt=!!D.normalMap,ie=!!D.displacementMap,Bt=!!D.emissiveMap,oe=!!D.metalnessMap,qe=!!D.roughnessMap,We=D.anisotropy>0,U=D.clearcoat>0,b=D.dispersion>0,et=D.iridescence>0,dt=D.sheen>0,vt=D.transmission>0,ft=We&&!!D.anisotropyMap,Vt=U&&!!D.clearcoatMap,Rt=U&&!!D.clearcoatNormalMap,Wt=U&&!!D.clearcoatRoughnessMap,Kt=et&&!!D.iridescenceMap,Tt=et&&!!D.iridescenceThicknessMap,Lt=dt&&!!D.sheenColorMap,ne=dt&&!!D.sheenRoughnessMap,jt=!!D.specularMap,Ot=!!D.specularColorMap,fe=!!D.specularIntensityMap,G=vt&&!!D.transmissionMap,bt=vt&&!!D.thicknessMap,wt=!!D.gradientMap,Gt=!!D.alphaMap,yt=D.alphaTest>0,mt=!!D.alphaHash,Yt=!!D.extensions;let ue=us;D.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ge={shaderID:_t,shaderType:D.type,shaderName:D.name,vertexShader:be,fragmentShader:I,defines:D.defines,customVertexShaderID:ct,customFragmentShaderID:$,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:At,batchingColor:At&&ut._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&ut.instanceColor!==null,instancingMorph:Ut&&ut.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:it===null?o.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:co,alphaToCoverage:!!D.alphaToCoverage,map:Mt,matcap:qt,envMap:z,envMapMode:z&&st.mapping,envMapCubeUVHeight:K,aoMap:He,lightMap:se,bumpMap:Qt,normalMap:Nt,displacementMap:S&&ie,emissiveMap:Bt,normalMapObjectSpace:Nt&&D.normalMapType===OE,normalMapTangentSpace:Nt&&D.normalMapType===BS,metalnessMap:oe,roughnessMap:qe,anisotropy:We,anisotropyMap:ft,clearcoat:U,clearcoatMap:Vt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:b,iridescence:et,iridescenceMap:Kt,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:Lt,sheenRoughnessMap:ne,specularMap:jt,specularColorMap:Ot,specularIntensityMap:fe,transmission:vt,transmissionMap:G,thicknessMap:bt,gradientMap:wt,opaque:D.transparent===!1&&D.blending===so&&D.alphaToCoverage===!1,alphaMap:Gt,alphaTest:yt,alphaHash:mt,combine:D.combine,mapUv:Mt&&A(D.map.channel),aoMapUv:He&&A(D.aoMap.channel),lightMapUv:se&&A(D.lightMap.channel),bumpMapUv:Qt&&A(D.bumpMap.channel),normalMapUv:Nt&&A(D.normalMap.channel),displacementMapUv:ie&&A(D.displacementMap.channel),emissiveMapUv:Bt&&A(D.emissiveMap.channel),metalnessMapUv:oe&&A(D.metalnessMap.channel),roughnessMapUv:qe&&A(D.roughnessMap.channel),anisotropyMapUv:ft&&A(D.anisotropyMap.channel),clearcoatMapUv:Vt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:ne&&A(D.sheenRoughnessMap.channel),specularMapUv:jt&&A(D.specularMap.channel),specularColorMapUv:Ot&&A(D.specularColorMap.channel),specularIntensityMapUv:fe&&A(D.specularIntensityMap.channel),transmissionMapUv:G&&A(D.transmissionMap.channel),thicknessMapUv:bt&&A(D.thicknessMap.channel),alphaMapUv:Gt&&A(D.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Nt||We),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!lt.attributes.uv&&(Mt||Gt),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:xt,skinning:ut.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:Mt&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===Xe,decodeVideoTextureEmissive:Bt&&D.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(D.emissiveMap.colorSpace)===Xe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Kn,flipSided:D.side===Qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Yt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&D.extensions.multiDraw===!0||At)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ge.vertexUv1s=m.has(1),Ge.vertexUv2s=m.has(2),Ge.vertexUv3s=m.has(3),m.clear(),Ge}function y(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(P(C,D),O(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function P(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function O(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=T[D.type];let V;if(C){const at=Zi[C];V=cT.clone(at.uniforms)}else V=D.uniforms;return V}function F(D,C){let V;for(let at=0,ut=v.length;at<ut;at++){const gt=v[at];if(gt.cacheKey===C){V=gt,++V.usedTimes;break}}return V===void 0&&(V=new FR(o,C,D,f),v.push(V)),V}function B(D){if(--D.usedTimes===0){const C=v.indexOf(D);v[C]=v[v.length-1],v.pop(),D.destroy()}}function L(D){p.remove(D)}function q(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:w,acquireProgram:F,releaseProgram:B,releaseShaderCache:L,programs:v,dispose:q}}function kR(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function qR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function vS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function SS(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function h(g,S,x,T,A,M){let y=o[e];return y===void 0?(y={id:g.id,object:g,geometry:S,material:x,groupOrder:T,renderOrder:g.renderOrder,z:A,group:M},o[e]=y):(y.id=g.id,y.object=g,y.geometry=S,y.material=x,y.groupOrder=T,y.renderOrder=g.renderOrder,y.z=A,y.group=M),e++,y}function d(g,S,x,T,A,M){const y=h(g,S,x,T,A,M);x.transmission>0?r.push(y):x.transparent===!0?l.push(y):i.push(y)}function p(g,S,x,T,A,M){const y=h(g,S,x,T,A,M);x.transmission>0?r.unshift(y):x.transparent===!0?l.unshift(y):i.unshift(y)}function m(g,S){i.length>1&&i.sort(g||qR),r.length>1&&r.sort(S||vS),l.length>1&&l.sort(S||vS)}function v(){for(let g=e,S=o.length;g<S;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:d,unshift:p,finish:v,sort:m}}function YR(){let o=new WeakMap;function e(r,l){const f=o.get(r);let h;return f===void 0?(h=new SS,o.set(r,[h])):l>=f.length?(h=new SS,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function WR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new k,color:new Re};break;case"SpotLight":i={position:new k,direction:new k,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=i,i}}}function jR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let ZR=0;function KR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function QR(o){const e=new WR,i=jR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new k);const l=new k,f=new en,h=new en;function d(m){let v=0,g=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let x=0,T=0,A=0,M=0,y=0,P=0,O=0,w=0,F=0,B=0,L=0;m.sort(KR);for(let D=0,C=m.length;D<C;D++){const V=m[D],at=V.color,ut=V.intensity,gt=V.distance,lt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=at.r*ut,g+=at.g*ut,S+=at.b*ut;else if(V.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(V.sh.coefficients[j],ut);L++}else if(V.isDirectionalLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const st=V.shadow,K=i.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,r.directionalShadow[x]=K,r.directionalShadowMap[x]=lt,r.directionalShadowMatrix[x]=V.shadow.matrix,P++}r.directional[x]=j,x++}else if(V.isSpotLight){const j=e.get(V);j.position.setFromMatrixPosition(V.matrixWorld),j.color.copy(at).multiplyScalar(ut),j.distance=gt,j.coneCos=Math.cos(V.angle),j.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),j.decay=V.decay,r.spot[A]=j;const st=V.shadow;if(V.map&&(r.spotLightMap[F]=V.map,F++,st.updateMatrices(V),V.castShadow&&B++),r.spotLightMatrix[A]=st.matrix,V.castShadow){const K=i.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,r.spotShadow[A]=K,r.spotShadowMap[A]=lt,w++}A++}else if(V.isRectAreaLight){const j=e.get(V);j.color.copy(at).multiplyScalar(ut),j.halfWidth.set(V.width*.5,0,0),j.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=j,M++}else if(V.isPointLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity),j.distance=V.distance,j.decay=V.decay,V.castShadow){const st=V.shadow,K=i.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,K.shadowCameraNear=st.camera.near,K.shadowCameraFar=st.camera.far,r.pointShadow[T]=K,r.pointShadowMap[T]=lt,r.pointShadowMatrix[T]=V.shadow.matrix,O++}r.point[T]=j,T++}else if(V.isHemisphereLight){const j=e.get(V);j.skyColor.copy(V.color).multiplyScalar(ut),j.groundColor.copy(V.groundColor).multiplyScalar(ut),r.hemi[y]=j,y++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=zt.LTC_FLOAT_1,r.rectAreaLTC2=zt.LTC_FLOAT_2):(r.rectAreaLTC1=zt.LTC_HALF_1,r.rectAreaLTC2=zt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=S;const q=r.hash;(q.directionalLength!==x||q.pointLength!==T||q.spotLength!==A||q.rectAreaLength!==M||q.hemiLength!==y||q.numDirectionalShadows!==P||q.numPointShadows!==O||q.numSpotShadows!==w||q.numSpotMaps!==F||q.numLightProbes!==L)&&(r.directional.length=x,r.spot.length=A,r.rectArea.length=M,r.point.length=T,r.hemi.length=y,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=w+F-B,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=L,q.directionalLength=x,q.pointLength=T,q.spotLength=A,q.rectAreaLength=M,q.hemiLength=y,q.numDirectionalShadows=P,q.numPointShadows=O,q.numSpotShadows=w,q.numSpotMaps=F,q.numLightProbes=L,r.version=ZR++)}function p(m,v){let g=0,S=0,x=0,T=0,A=0;const M=v.matrixWorldInverse;for(let y=0,P=m.length;y<P;y++){const O=m[y];if(O.isDirectionalLight){const w=r.directional[g];w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),g++}else if(O.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),x++}else if(O.isRectAreaLight){const w=r.rectArea[T];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(M),h.identity(),f.copy(O.matrixWorld),f.premultiply(M),h.extractRotation(f),w.halfWidth.set(O.width*.5,0,0),w.halfHeight.set(0,O.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),T++}else if(O.isPointLight){const w=r.point[S];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(M),S++}else if(O.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(O.matrixWorld),w.direction.transformDirection(M),A++}}}return{setup:d,setupView:p,state:r}}function yS(o){const e=new QR(o),i=[],r=[];function l(v){m.camera=v,i.length=0,r.length=0}function f(v){i.push(v)}function h(v){r.push(v)}function d(){e.setup(i)}function p(v){e.setupView(i,v)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:f,pushShadow:h}}function JR(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new yS(o),e.set(l,[d])):f>=h.length?(d=new yS(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const $R=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tC=`uniform sampler2D shadow_pass;
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
}`;function eC(o,e,i){let r=new em;const l=new ce,f=new ce,h=new rn,d=new MT({depthPacking:LE}),p=new ET,m={},v=i.maxTextureSize,g={[cs]:Qn,[Qn]:cs,[Kn]:Kn},S=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:$R,fragmentShader:tC}),x=S.clone();x.defines.HORIZONTAL_PASS=1;const T=new ea;T.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ci(T,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=RS;let y=this.type;this.render=function(B,L,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),at=o.state;at.setBlending(ls),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ut=y!==Ea&&this.type===Ea,gt=y===Ea&&this.type!==Ea;for(let lt=0,j=B.length;lt<j;lt++){const st=B[lt],K=st.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const _t=K.getFrameExtents();if(l.multiply(_t),f.copy(K.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(f.x=Math.floor(v/_t.x),l.x=f.x*_t.x,K.mapSize.x=f.x),l.y>v&&(f.y=Math.floor(v/_t.y),l.y=f.y*_t.y,K.mapSize.y=f.y)),K.map===null||ut===!0||gt===!0){const Ht=this.type!==Ea?{minFilter:zi,magFilter:zi}:{};K.map!==null&&K.map.dispose(),K.map=new Js(l.x,l.y,Ht),K.map.texture.name=st.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const St=K.getViewportCount();for(let Ht=0;Ht<St;Ht++){const re=K.getViewport(Ht);h.set(f.x*re.x,f.y*re.y,f.x*re.z,f.y*re.w),at.viewport(h),K.updateMatrices(st,Ht),r=K.getFrustum(),w(L,q,K.camera,st,this.type)}K.isPointLightShadow!==!0&&this.type===Ea&&P(K,q),K.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(D,C,V)};function P(B,L){const q=e.update(A);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Js(l.x,l.y)),S.uniforms.shadow_pass.value=B.map.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(L,null,q,S,A,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(L,null,q,x,A,null)}function O(B,L,q,D){let C=null;const V=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)C=V;else if(C=q.isPointLight===!0?p:d,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const at=C.uuid,ut=L.uuid;let gt=m[at];gt===void 0&&(gt={},m[at]=gt);let lt=gt[ut];lt===void 0&&(lt=C.clone(),gt[ut]=lt,L.addEventListener("dispose",F)),C=lt}if(C.visible=L.visible,C.wireframe=L.wireframe,D===Ea?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:g[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const at=o.properties.get(C);at.light=q}return C}function w(B,L,q,D,C){if(B.visible===!1)return;if(B.layers.test(L.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Ea)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const ut=e.update(B),gt=B.material;if(Array.isArray(gt)){const lt=ut.groups;for(let j=0,st=lt.length;j<st;j++){const K=lt[j],_t=gt[K.materialIndex];if(_t&&_t.visible){const St=O(B,_t,D,C);B.onBeforeShadow(o,B,L,q,ut,St,K),o.renderBufferDirect(q,null,ut,St,B,K),B.onAfterShadow(o,B,L,q,ut,St,K)}}}else if(gt.visible){const lt=O(B,gt,D,C);B.onBeforeShadow(o,B,L,q,ut,lt,null),o.renderBufferDirect(q,null,ut,lt,B,null),B.onAfterShadow(o,B,L,q,ut,lt,null)}}const at=B.children;for(let ut=0,gt=at.length;ut<gt;ut++)w(at[ut],L,q,D,C)}function F(B){B.target.removeEventListener("dispose",F);for(const q in m){const D=m[q],C=B.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const nC={[tp]:ep,[np]:sp,[ip]:rp,[oo]:ap,[ep]:tp,[sp]:np,[rp]:ip,[ap]:oo};function iC(o,e){function i(){let G=!1;const bt=new rn;let wt=null;const Gt=new rn(0,0,0,0);return{setMask:function(yt){wt!==yt&&!G&&(o.colorMask(yt,yt,yt,yt),wt=yt)},setLocked:function(yt){G=yt},setClear:function(yt,mt,Yt,ue,Ge){Ge===!0&&(yt*=ue,mt*=ue,Yt*=ue),bt.set(yt,mt,Yt,ue),Gt.equals(bt)===!1&&(o.clearColor(yt,mt,Yt,ue),Gt.copy(bt))},reset:function(){G=!1,wt=null,Gt.set(-1,0,0,0)}}}function r(){let G=!1,bt=!1,wt=null,Gt=null,yt=null;return{setReversed:function(mt){if(bt!==mt){const Yt=e.get("EXT_clip_control");mt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),bt=mt;const ue=yt;yt=null,this.setClear(ue)}},getReversed:function(){return bt},setTest:function(mt){mt?it(o.DEPTH_TEST):xt(o.DEPTH_TEST)},setMask:function(mt){wt!==mt&&!G&&(o.depthMask(mt),wt=mt)},setFunc:function(mt){if(bt&&(mt=nC[mt]),Gt!==mt){switch(mt){case tp:o.depthFunc(o.NEVER);break;case ep:o.depthFunc(o.ALWAYS);break;case np:o.depthFunc(o.LESS);break;case oo:o.depthFunc(o.LEQUAL);break;case ip:o.depthFunc(o.EQUAL);break;case ap:o.depthFunc(o.GEQUAL);break;case sp:o.depthFunc(o.GREATER);break;case rp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Gt=mt}},setLocked:function(mt){G=mt},setClear:function(mt){yt!==mt&&(bt&&(mt=1-mt),o.clearDepth(mt),yt=mt)},reset:function(){G=!1,wt=null,Gt=null,yt=null,bt=!1}}}function l(){let G=!1,bt=null,wt=null,Gt=null,yt=null,mt=null,Yt=null,ue=null,Ge=null;return{setTest:function(Me){G||(Me?it(o.STENCIL_TEST):xt(o.STENCIL_TEST))},setMask:function(Me){bt!==Me&&!G&&(o.stencilMask(Me),bt=Me)},setFunc:function(Me,$e,pn){(wt!==Me||Gt!==$e||yt!==pn)&&(o.stencilFunc(Me,$e,pn),wt=Me,Gt=$e,yt=pn)},setOp:function(Me,$e,pn){(mt!==Me||Yt!==$e||ue!==pn)&&(o.stencilOp(Me,$e,pn),mt=Me,Yt=$e,ue=pn)},setLocked:function(Me){G=Me},setClear:function(Me){Ge!==Me&&(o.clearStencil(Me),Ge=Me)},reset:function(){G=!1,bt=null,wt=null,Gt=null,yt=null,mt=null,Yt=null,ue=null,Ge=null}}}const f=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let v={},g={},S=new WeakMap,x=[],T=null,A=!1,M=null,y=null,P=null,O=null,w=null,F=null,B=null,L=new Re(0,0,0),q=0,D=!1,C=null,V=null,at=null,ut=null,gt=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,st=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=st>=1):K.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=st>=2);let _t=null,St={};const Ht=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),be=new rn().fromArray(Ht),I=new rn().fromArray(re);function ct(G,bt,wt,Gt){const yt=new Uint8Array(4),mt=o.createTexture();o.bindTexture(G,mt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Yt=0;Yt<wt;Yt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Gt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(bt+Yt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return mt}const $={};$[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),it(o.DEPTH_TEST),h.setFunc(oo),Qt(!1),Nt(xv),it(o.CULL_FACE),He(ls);function it(G){v[G]!==!0&&(o.enable(G),v[G]=!0)}function xt(G){v[G]!==!1&&(o.disable(G),v[G]=!1)}function Ut(G,bt){return g[G]!==bt?(o.bindFramebuffer(G,bt),g[G]=bt,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=bt),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function At(G,bt){let wt=x,Gt=!1;if(G){wt=S.get(bt),wt===void 0&&(wt=[],S.set(bt,wt));const yt=G.textures;if(wt.length!==yt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let mt=0,Yt=yt.length;mt<Yt;mt++)wt[mt]=o.COLOR_ATTACHMENT0+mt;wt.length=yt.length,Gt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Gt=!0);Gt&&o.drawBuffers(wt)}function Mt(G){return T!==G?(o.useProgram(G),T=G,!0):!1}const qt={[Ys]:o.FUNC_ADD,[sE]:o.FUNC_SUBTRACT,[rE]:o.FUNC_REVERSE_SUBTRACT};qt[oE]=o.MIN,qt[lE]=o.MAX;const z={[uE]:o.ZERO,[cE]:o.ONE,[fE]:o.SRC_COLOR,[Jd]:o.SRC_ALPHA,[_E]:o.SRC_ALPHA_SATURATE,[mE]:o.DST_COLOR,[dE]:o.DST_ALPHA,[hE]:o.ONE_MINUS_SRC_COLOR,[$d]:o.ONE_MINUS_SRC_ALPHA,[gE]:o.ONE_MINUS_DST_COLOR,[pE]:o.ONE_MINUS_DST_ALPHA,[vE]:o.CONSTANT_COLOR,[SE]:o.ONE_MINUS_CONSTANT_COLOR,[yE]:o.CONSTANT_ALPHA,[xE]:o.ONE_MINUS_CONSTANT_ALPHA};function He(G,bt,wt,Gt,yt,mt,Yt,ue,Ge,Me){if(G===ls){A===!0&&(xt(o.BLEND),A=!1);return}if(A===!1&&(it(o.BLEND),A=!0),G!==aE){if(G!==M||Me!==D){if((y!==Ys||w!==Ys)&&(o.blendEquation(o.FUNC_ADD),y=Ys,w=Ys),Me)switch(G){case so:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mv:o.blendFunc(o.ONE,o.ONE);break;case Ev:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Tv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case so:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ev:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}P=null,O=null,F=null,B=null,L.set(0,0,0),q=0,M=G,D=Me}return}yt=yt||bt,mt=mt||wt,Yt=Yt||Gt,(bt!==y||yt!==w)&&(o.blendEquationSeparate(qt[bt],qt[yt]),y=bt,w=yt),(wt!==P||Gt!==O||mt!==F||Yt!==B)&&(o.blendFuncSeparate(z[wt],z[Gt],z[mt],z[Yt]),P=wt,O=Gt,F=mt,B=Yt),(ue.equals(L)===!1||Ge!==q)&&(o.blendColor(ue.r,ue.g,ue.b,Ge),L.copy(ue),q=Ge),M=G,D=!1}function se(G,bt){G.side===Kn?xt(o.CULL_FACE):it(o.CULL_FACE);let wt=G.side===Qn;bt&&(wt=!wt),Qt(wt),G.blending===so&&G.transparent===!1?He(ls):He(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),f.setMask(G.colorWrite);const Gt=G.stencilWrite;d.setTest(Gt),Gt&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Bt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?it(o.SAMPLE_ALPHA_TO_COVERAGE):xt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(G){C!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),C=G)}function Nt(G){G!==eE?(it(o.CULL_FACE),G!==V&&(G===xv?o.cullFace(o.BACK):G===nE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):xt(o.CULL_FACE),V=G}function ie(G){G!==at&&(j&&o.lineWidth(G),at=G)}function Bt(G,bt,wt){G?(it(o.POLYGON_OFFSET_FILL),(ut!==bt||gt!==wt)&&(o.polygonOffset(bt,wt),ut=bt,gt=wt)):xt(o.POLYGON_OFFSET_FILL)}function oe(G){G?it(o.SCISSOR_TEST):xt(o.SCISSOR_TEST)}function qe(G){G===void 0&&(G=o.TEXTURE0+lt-1),_t!==G&&(o.activeTexture(G),_t=G)}function We(G,bt,wt){wt===void 0&&(_t===null?wt=o.TEXTURE0+lt-1:wt=_t);let Gt=St[wt];Gt===void 0&&(Gt={type:void 0,texture:void 0},St[wt]=Gt),(Gt.type!==G||Gt.texture!==bt)&&(_t!==wt&&(o.activeTexture(wt),_t=wt),o.bindTexture(G,bt||$[G]),Gt.type=G,Gt.texture=bt)}function U(){const G=St[_t];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Vt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Wt(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Kt(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Lt(G){be.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),be.copy(G))}function ne(G){I.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),I.copy(G))}function jt(G,bt){let wt=m.get(bt);wt===void 0&&(wt=new WeakMap,m.set(bt,wt));let Gt=wt.get(G);Gt===void 0&&(Gt=o.getUniformBlockIndex(bt,G.name),wt.set(G,Gt))}function Ot(G,bt){const Gt=m.get(bt).get(G);p.get(bt)!==Gt&&(o.uniformBlockBinding(bt,Gt,G.__bindingPointIndex),p.set(bt,Gt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},_t=null,St={},g={},S=new WeakMap,x=[],T=null,A=!1,M=null,y=null,P=null,O=null,w=null,F=null,B=null,L=new Re(0,0,0),q=0,D=!1,C=null,V=null,at=null,ut=null,gt=null,be.set(0,0,o.canvas.width,o.canvas.height),I.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:it,disable:xt,bindFramebuffer:Ut,drawBuffers:At,useProgram:Mt,setBlending:He,setMaterial:se,setFlipSided:Qt,setCullFace:Nt,setLineWidth:ie,setPolygonOffset:Bt,setScissorTest:oe,activeTexture:qe,bindTexture:We,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:Kt,texImage3D:Tt,updateUBOMapping:jt,uniformBlockBinding:Ot,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:dt,texSubImage3D:vt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Vt,scissor:Lt,viewport:ne,reset:fe}}function aC(o,e,i,r,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ce,v=new WeakMap;let g;const S=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,b){return x?new OffscreenCanvas(U,b):Uc("canvas")}function A(U,b,et){let dt=1;const vt=We(U);if((vt.width>et||vt.height>et)&&(dt=et/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ft=Math.floor(dt*vt.width),Vt=Math.floor(dt*vt.height);g===void 0&&(g=T(ft,Vt));const Rt=b?T(ft,Vt):g;return Rt.width=ft,Rt.height=Vt,Rt.getContext("2d").drawImage(U,0,0,ft,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Vt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function M(U){return U.generateMipmaps}function y(U){o.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,b,et,dt,vt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ft=b;if(b===o.RED&&(et===o.FLOAT&&(ft=o.R32F),et===o.HALF_FLOAT&&(ft=o.R16F),et===o.UNSIGNED_BYTE&&(ft=o.R8)),b===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.R8UI),et===o.UNSIGNED_SHORT&&(ft=o.R16UI),et===o.UNSIGNED_INT&&(ft=o.R32UI),et===o.BYTE&&(ft=o.R8I),et===o.SHORT&&(ft=o.R16I),et===o.INT&&(ft=o.R32I)),b===o.RG&&(et===o.FLOAT&&(ft=o.RG32F),et===o.HALF_FLOAT&&(ft=o.RG16F),et===o.UNSIGNED_BYTE&&(ft=o.RG8)),b===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RG8UI),et===o.UNSIGNED_SHORT&&(ft=o.RG16UI),et===o.UNSIGNED_INT&&(ft=o.RG32UI),et===o.BYTE&&(ft=o.RG8I),et===o.SHORT&&(ft=o.RG16I),et===o.INT&&(ft=o.RG32I)),b===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),et===o.UNSIGNED_INT&&(ft=o.RGB32UI),et===o.BYTE&&(ft=o.RGB8I),et===o.SHORT&&(ft=o.RGB16I),et===o.INT&&(ft=o.RGB32I)),b===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),et===o.UNSIGNED_INT&&(ft=o.RGBA32UI),et===o.BYTE&&(ft=o.RGBA8I),et===o.SHORT&&(ft=o.RGBA16I),et===o.INT&&(ft=o.RGBA32I)),b===o.RGB&&(et===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),b===o.RGBA){const Vt=vt?wc:Ue.getTransfer(dt);et===o.FLOAT&&(ft=o.RGBA32F),et===o.HALF_FLOAT&&(ft=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ft=Vt===Xe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function w(U,b){let et;return U?b===null||b===Ks||b===ml?et=o.DEPTH24_STENCIL8:b===Ta?et=o.DEPTH32F_STENCIL8:b===pl&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ks||b===ml?et=o.DEPTH_COMPONENT24:b===Ta?et=o.DEPTH_COMPONENT32F:b===pl&&(et=o.DEPTH_COMPONENT16),et}function F(U,b){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==zi&&U.minFilter!==Ki?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function B(U){const b=U.target;b.removeEventListener("dispose",B),q(b),b.isVideoTexture&&v.delete(b)}function L(U){const b=U.target;b.removeEventListener("dispose",L),C(b)}function q(U){const b=r.get(U);if(b.__webglInit===void 0)return;const et=U.source,dt=S.get(et);if(dt){const vt=dt[b.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&D(U),Object.keys(dt).length===0&&S.delete(et)}r.remove(U)}function D(U){const b=r.get(U);o.deleteTexture(b.__webglTexture);const et=U.source,dt=S.get(et);delete dt[b.__cacheKey],h.memory.textures--}function C(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let vt=0;vt<b.__webglFramebuffer[dt].length;vt++)o.deleteFramebuffer(b.__webglFramebuffer[dt][vt]);else o.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)o.deleteFramebuffer(b.__webglFramebuffer[dt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=U.textures;for(let dt=0,vt=et.length;dt<vt;dt++){const ft=r.get(et[dt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(et[dt])}r.remove(U)}let V=0;function at(){V=0}function ut(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function gt(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function lt(U,b){const et=r.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&et.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(et,U,b);return}}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+b)}function j(U,b){const et=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){$(et,U,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+b)}function st(U,b){const et=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){$(et,U,b);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+b)}function K(U,b){const et=r.get(U);if(U.version>0&&et.__version!==U.version){it(et,U,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+b)}const _t={[up]:o.REPEAT,[js]:o.CLAMP_TO_EDGE,[cp]:o.MIRRORED_REPEAT},St={[zi]:o.NEAREST,[UE]:o.NEAREST_MIPMAP_NEAREST,[Ku]:o.NEAREST_MIPMAP_LINEAR,[Ki]:o.LINEAR,[gd]:o.LINEAR_MIPMAP_NEAREST,[Zs]:o.LINEAR_MIPMAP_LINEAR},Ht={[PE]:o.NEVER,[GE]:o.ALWAYS,[zE]:o.LESS,[FS]:o.LEQUAL,[IE]:o.EQUAL,[HE]:o.GEQUAL,[BE]:o.GREATER,[FE]:o.NOTEQUAL};function re(U,b){if(b.type===Ta&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ki||b.magFilter===gd||b.magFilter===Ku||b.magFilter===Zs||b.minFilter===Ki||b.minFilter===gd||b.minFilter===Ku||b.minFilter===Zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,_t[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,_t[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,_t[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[b.minFilter]),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Ht[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===zi||b.minFilter!==Ku&&b.minFilter!==Zs||b.type===Ta&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function be(U,b){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",B));const dt=b.source;let vt=S.get(dt);vt===void 0&&(vt={},S.set(dt,vt));const ft=gt(b);if(ft!==U.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),vt[ft].usedTimes++;const Vt=vt[U.__cacheKey];Vt!==void 0&&(vt[U.__cacheKey].usedTimes--,Vt.usedTimes===0&&D(b)),U.__cacheKey=ft,U.__webglTexture=vt[ft].texture}return et}function I(U,b,et){return Math.floor(Math.floor(U/et)/b)}function ct(U,b,et,dt){const ft=U.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,et,dt,b.data);else{ft.sort((Tt,Lt)=>Tt.start-Lt.start);let Vt=0;for(let Tt=1;Tt<ft.length;Tt++){const Lt=ft[Vt],ne=ft[Tt],jt=Lt.start+Lt.count,Ot=I(ne.start,b.width,4),fe=I(Lt.start,b.width,4);ne.start<=jt+1&&Ot===fe&&I(ne.start+ne.count-1,b.width,4)===Ot?Lt.count=Math.max(Lt.count,ne.start+ne.count-Lt.start):(++Vt,ft[Vt]=ne)}ft.length=Vt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Tt=0,Lt=ft.length;Tt<Lt;Tt++){const ne=ft[Tt],jt=Math.floor(ne.start/4),Ot=Math.ceil(ne.count/4),fe=jt%b.width,G=Math.floor(jt/b.width),bt=Ot,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,fe,G,bt,wt,et,dt,b.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function $(U,b,et){let dt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=o.TEXTURE_3D);const vt=be(U,b),ft=b.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+et);const Vt=r.get(ft);if(ft.version!==Vt.__version||vt===!0){i.activeTexture(o.TEXTURE0+et);const Rt=Ue.getPrimaries(Ue.workingColorSpace),Wt=b.colorSpace===os?null:Ue.getPrimaries(b.colorSpace),Kt=b.colorSpace===os||Rt===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let Tt=A(b.image,!1,l.maxTextureSize);Tt=qe(b,Tt);const Lt=f.convert(b.format,b.colorSpace),ne=f.convert(b.type);let jt=O(b.internalFormat,Lt,ne,b.colorSpace,b.isVideoTexture);re(dt,b);let Ot;const fe=b.mipmaps,G=b.isVideoTexture!==!0,bt=Vt.__version===void 0||vt===!0,wt=ft.dataReady,Gt=F(b,Tt);if(b.isDepthTexture)jt=w(b.format===_l,b.type),bt&&(G?i.texStorage2D(o.TEXTURE_2D,1,jt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Lt,ne,null));else if(b.isDataTexture)if(fe.length>0){G&&bt&&i.texStorage2D(o.TEXTURE_2D,Gt,jt,fe[0].width,fe[0].height);for(let yt=0,mt=fe.length;yt<mt;yt++)Ot=fe[yt],G?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Lt,ne,Ot.data):i.texImage2D(o.TEXTURE_2D,yt,jt,Ot.width,Ot.height,0,Lt,ne,Ot.data);b.generateMipmaps=!1}else G?(bt&&i.texStorage2D(o.TEXTURE_2D,Gt,jt,Tt.width,Tt.height),wt&&ct(b,Tt,Lt,ne)):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Lt,ne,Tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,jt,fe[0].width,fe[0].height,Tt.depth);for(let yt=0,mt=fe.length;yt<mt;yt++)if(Ot=fe[yt],b.format!==Pi)if(Lt!==null)if(G){if(wt)if(b.layerUpdates.size>0){const Yt=Kv(Ot.width,Ot.height,b.format,b.type);for(const ue of b.layerUpdates){const Ge=Ot.data.subarray(ue*Yt/Ot.data.BYTES_PER_ELEMENT,(ue+1)*Yt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ue,Ot.width,Ot.height,1,Lt,Ge)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,Tt.depth,Lt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,jt,Ot.width,Ot.height,Tt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,Tt.depth,Lt,ne,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,jt,Ot.width,Ot.height,Tt.depth,0,Lt,ne,Ot.data)}else{G&&bt&&i.texStorage2D(o.TEXTURE_2D,Gt,jt,fe[0].width,fe[0].height);for(let yt=0,mt=fe.length;yt<mt;yt++)Ot=fe[yt],b.format!==Pi?Lt!==null?G?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Lt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,jt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Lt,ne,Ot.data):i.texImage2D(o.TEXTURE_2D,yt,jt,Ot.width,Ot.height,0,Lt,ne,Ot.data)}else if(b.isDataArrayTexture)if(G){if(bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,jt,Tt.width,Tt.height,Tt.depth),wt)if(b.layerUpdates.size>0){const yt=Kv(Tt.width,Tt.height,b.format,b.type);for(const mt of b.layerUpdates){const Yt=Tt.data.subarray(mt*yt/Tt.data.BYTES_PER_ELEMENT,(mt+1)*yt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,Tt.width,Tt.height,1,Lt,ne,Yt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Lt,ne,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,Lt,ne,Tt.data);else if(b.isData3DTexture)G?(bt&&i.texStorage3D(o.TEXTURE_3D,Gt,jt,Tt.width,Tt.height,Tt.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Lt,ne,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,Lt,ne,Tt.data);else if(b.isFramebufferTexture){if(bt)if(G)i.texStorage2D(o.TEXTURE_2D,Gt,jt,Tt.width,Tt.height);else{let yt=Tt.width,mt=Tt.height;for(let Yt=0;Yt<Gt;Yt++)i.texImage2D(o.TEXTURE_2D,Yt,jt,yt,mt,0,Lt,ne,null),yt>>=1,mt>>=1}}else if(fe.length>0){if(G&&bt){const yt=We(fe[0]);i.texStorage2D(o.TEXTURE_2D,Gt,jt,yt.width,yt.height)}for(let yt=0,mt=fe.length;yt<mt;yt++)Ot=fe[yt],G?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Lt,ne,Ot):i.texImage2D(o.TEXTURE_2D,yt,jt,Lt,ne,Ot);b.generateMipmaps=!1}else if(G){if(bt){const yt=We(Tt);i.texStorage2D(o.TEXTURE_2D,Gt,jt,yt.width,yt.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,ne,Tt)}else i.texImage2D(o.TEXTURE_2D,0,jt,Lt,ne,Tt);M(b)&&y(dt),Vt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function it(U,b,et){if(b.image.length!==6)return;const dt=be(U,b),vt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const ft=r.get(vt);if(vt.version!==ft.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Vt=Ue.getPrimaries(Ue.workingColorSpace),Rt=b.colorSpace===os?null:Ue.getPrimaries(b.colorSpace),Wt=b.colorSpace===os||Vt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,Tt=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let mt=0;mt<6;mt++)!Kt&&!Tt?Lt[mt]=A(b.image[mt],!0,l.maxCubemapSize):Lt[mt]=Tt?b.image[mt].image:b.image[mt],Lt[mt]=qe(b,Lt[mt]);const ne=Lt[0],jt=f.convert(b.format,b.colorSpace),Ot=f.convert(b.type),fe=O(b.internalFormat,jt,Ot,b.colorSpace),G=b.isVideoTexture!==!0,bt=ft.__version===void 0||dt===!0,wt=vt.dataReady;let Gt=F(b,ne);re(o.TEXTURE_CUBE_MAP,b);let yt;if(Kt){G&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,fe,ne.width,ne.height);for(let mt=0;mt<6;mt++){yt=Lt[mt].mipmaps;for(let Yt=0;Yt<yt.length;Yt++){const ue=yt[Yt];b.format!==Pi?jt!==null?G?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt,0,0,ue.width,ue.height,jt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt,fe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt,0,0,ue.width,ue.height,jt,Ot,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt,fe,ue.width,ue.height,0,jt,Ot,ue.data)}}}else{if(yt=b.mipmaps,G&&bt){yt.length>0&&Gt++;const mt=We(Lt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,fe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Tt){G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Lt[mt].width,Lt[mt].height,jt,Ot,Lt[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,fe,Lt[mt].width,Lt[mt].height,0,jt,Ot,Lt[mt].data);for(let Yt=0;Yt<yt.length;Yt++){const Ge=yt[Yt].image[mt].image;G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt+1,0,0,Ge.width,Ge.height,jt,Ot,Ge.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt+1,fe,Ge.width,Ge.height,0,jt,Ot,Ge.data)}}else{G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,jt,Ot,Lt[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,fe,jt,Ot,Lt[mt]);for(let Yt=0;Yt<yt.length;Yt++){const ue=yt[Yt];G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt+1,0,0,jt,Ot,ue.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Yt+1,fe,jt,Ot,ue.image[mt])}}}M(b)&&y(o.TEXTURE_CUBE_MAP),ft.__version=vt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function xt(U,b,et,dt,vt,ft){const Vt=f.convert(et.format,et.colorSpace),Rt=f.convert(et.type),Wt=O(et.internalFormat,Vt,Rt,et.colorSpace),Kt=r.get(b),Tt=r.get(et);if(Tt.__renderTarget=b,!Kt.__hasExternalTextures){const Lt=Math.max(1,b.width>>ft),ne=Math.max(1,b.height>>ft);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ft,Wt,Lt,ne,b.depth,0,Vt,Rt,null):i.texImage2D(vt,ft,Wt,Lt,ne,0,Vt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Bt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,vt,Tt.__webglTexture,0,ie(b)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,vt,Tt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(U,b,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer){const dt=b.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,ft=w(b.stencilBuffer,vt),Vt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=ie(b);Bt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ft,b.width,b.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ft,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ft,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,U)}else{const dt=b.textures;for(let vt=0;vt<dt.length;vt++){const ft=dt[vt],Vt=f.convert(ft.format,ft.colorSpace),Rt=f.convert(ft.type),Wt=O(ft.internalFormat,Vt,Rt,ft.colorSpace),Kt=ie(b);et&&Bt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Wt,b.width,b.height):Bt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,Wt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),lt(b.depthTexture,0);const vt=dt.__webglTexture,ft=ie(b);if(b.depthTexture.format===gl)Bt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(b.depthTexture.format===_l)Bt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Mt(U){const b=r.get(U),et=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const vt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",vt)};dt.addEventListener("dispose",vt),b.__depthDisposeCallback=vt}b.__boundDepthTexture=dt}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const dt=U.texture.mipmaps;dt&&dt.length>0?At(b.__webglFramebuffer[0],U):At(b.__webglFramebuffer,U)}else if(et){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=o.createRenderbuffer(),Ut(b.__webglDepthbuffer[dt],U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ft)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Ut(b.__webglDepthbuffer,U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function qt(U,b,et){const dt=r.get(U);b!==void 0&&xt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Mt(U)}function z(U){const b=U.texture,et=r.get(U),dt=r.get(b);U.addEventListener("dispose",L);const vt=U.textures,ft=U.isWebGLCubeRenderTarget===!0,Vt=vt.length>1;if(Vt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=b.version,h.memory.textures++),ft){et.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<b.mipmaps.length;Wt++)et.__webglFramebuffer[Rt][Wt]=o.createFramebuffer()}else et.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)et.__webglFramebuffer[Rt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let Rt=0,Wt=vt.length;Rt<Wt;Rt++){const Kt=r.get(vt[Rt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Bt(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Wt=vt[Rt];et.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt]);const Kt=f.convert(Wt.format,Wt.colorSpace),Tt=f.convert(Wt.type),Lt=O(Wt.internalFormat,Kt,Tt,Wt.colorSpace,U.isXRRenderTarget===!0),ne=ie(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Lt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),re(o.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)xt(et.__webglFramebuffer[Rt][Wt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else xt(et.__webglFramebuffer[Rt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(b)&&y(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Rt=0,Wt=vt.length;Rt<Wt;Rt++){const Kt=vt[Rt],Tt=r.get(Kt);let Lt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Lt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Tt.__webglTexture),re(Lt,Kt),xt(et.__webglFramebuffer,U,Kt,o.COLOR_ATTACHMENT0+Rt,Lt,0),M(Kt)&&y(Lt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),re(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)xt(et.__webglFramebuffer[Wt],U,b,o.COLOR_ATTACHMENT0,Rt,Wt);else xt(et.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,Rt,0);M(b)&&y(Rt),i.unbindTexture()}U.depthBuffer&&Mt(U)}function He(U){const b=U.textures;for(let et=0,dt=b.length;et<dt;et++){const vt=b[et];if(M(vt)){const ft=P(U),Vt=r.get(vt).__webglTexture;i.bindTexture(ft,Vt),y(ft),i.unbindTexture()}}}const se=[],Qt=[];function Nt(U){if(U.samples>0){if(Bt(U)===!1){const b=U.textures,et=U.width,dt=U.height;let vt=o.COLOR_BUFFER_BIT;const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=r.get(U),Rt=b.length>1;if(Rt)for(let Kt=0;Kt<b.length;Kt++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const Wt=U.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Kt=0;Kt<b.length;Kt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Kt]);const Tt=r.get(b[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,et,dt,0,0,et,dt,vt,o.NEAREST),p===!0&&(se.length=0,Qt.length=0,se.push(o.COLOR_ATTACHMENT0+Kt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(se.push(ft),Qt.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Kt=0;Kt<b.length;Kt++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Kt]);const Tt=r.get(b[Kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,Tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const b=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ie(U){return Math.min(l.maxSamples,U.samples)}function Bt(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function oe(U){const b=h.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function qe(U,b){const et=U.colorSpace,dt=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==co&&et!==os&&(Ue.getTransfer(et)===Xe?(dt!==Pi||vt!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=ut,this.resetTextureUnits=at,this.setTexture2D=lt,this.setTexture2DArray=j,this.setTexture3D=st,this.setTextureCube=K,this.rebindTextures=qt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Bt}function sC(o,e){function i(r,l=os){let f;const h=Ue.getTransfer(l);if(r===$i)return o.UNSIGNED_BYTE;if(r===Yp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Wp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===NS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===LS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===DS)return o.BYTE;if(r===US)return o.SHORT;if(r===pl)return o.UNSIGNED_SHORT;if(r===qp)return o.INT;if(r===Ks)return o.UNSIGNED_INT;if(r===Ta)return o.FLOAT;if(r===yl)return o.HALF_FLOAT;if(r===OS)return o.ALPHA;if(r===PS)return o.RGB;if(r===Pi)return o.RGBA;if(r===gl)return o.DEPTH_COMPONENT;if(r===_l)return o.DEPTH_STENCIL;if(r===zS)return o.RED;if(r===jp)return o.RED_INTEGER;if(r===IS)return o.RG;if(r===Zp)return o.RG_INTEGER;if(r===Kp)return o.RGBA_INTEGER;if(r===Ec||r===Tc||r===bc||r===Ac)if(h===Xe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Ec)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Tc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ac)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Ec)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Tc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ac)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fp||r===hp||r===dp||r===pp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===fp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mp||r===gp||r===_p)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===mp||r===gp)return h===Xe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===_p)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vp||r===Sp||r===yp||r===xp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap||r===Rp||r===Cp||r===wp||r===Dp||r===Up)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===vp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ep)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Tp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ap)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Up)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Np||r===Lp||r===Op)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Np)return h===Xe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Lp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Op)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pp||r===zp||r===Ip||r===Bp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Pp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===zp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ip)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ml?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const rC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oC=`
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

}`;class lC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new KS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new fs({vertexShader:rC,fragmentShader:oC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ci(new Lc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uC extends tr{constructor(e,i){super();const r=this;let l=null,f=1,h=null,d="local-floor",p=1,m=null,v=null,g=null,S=null,x=null,T=null;const A=typeof XRWebGLBinding<"u",M=new lC,y={},P=i.getContextAttributes();let O=null,w=null;const F=[],B=[],L=new ce;let q=null;const D=new Ei;D.viewport=new rn;const C=new Ei;C.viewport=new rn;const V=[D,C],at=new CT;let ut=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=F[$];return it===void 0&&(it=new Bd,F[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=F[$];return it===void 0&&(it=new Bd,F[$]=it),it.getGripSpace()},this.getHand=function($){let it=F[$];return it===void 0&&(it=new Bd,F[$]=it),it.getHandSpace()};function lt($){const it=B.indexOf($.inputSource);if(it===-1)return;const xt=F[it];xt!==void 0&&(xt.update($.inputSource,$.frame,m||h),xt.dispatchEvent({type:$.type,data:$.inputSource}))}function j(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",j),l.removeEventListener("inputsourceschange",st);for(let $=0;$<F.length;$++){const it=B[$];it!==null&&(B[$]=null,F[$].disconnect(it))}ut=null,gt=null,M.reset();for(const $ in y)delete y[$];e.setRenderTarget(O),x=null,S=null,g=null,l=null,w=null,ct.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){f=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return S!==null?S:x},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",j),l.addEventListener("inputsourceschange",st),P.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(L),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ut=null,At=null;P.depth&&(At=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=P.stencil?_l:gl,Ut=P.stencil?ml:Ks);const Mt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:f};g=this.getBinding(),S=g.createProjectionLayer(Mt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),w=new Js(S.textureWidth,S.textureHeight,{format:Pi,type:$i,depthTexture:new ZS(S.textureWidth,S.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const xt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:f};x=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new Js(x.framebufferWidth,x.framebufferHeight,{format:Pi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),ct.setContext(l),ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function st($){for(let it=0;it<$.removed.length;it++){const xt=$.removed[it],Ut=B.indexOf(xt);Ut>=0&&(B[Ut]=null,F[Ut].disconnect(xt))}for(let it=0;it<$.added.length;it++){const xt=$.added[it];let Ut=B.indexOf(xt);if(Ut===-1){for(let Mt=0;Mt<F.length;Mt++)if(Mt>=B.length){B.push(xt),Ut=Mt;break}else if(B[Mt]===null){B[Mt]=xt,Ut=Mt;break}if(Ut===-1)break}const At=F[Ut];At&&At.connect(xt)}}const K=new k,_t=new k;function St($,it,xt){K.setFromMatrixPosition(it.matrixWorld),_t.setFromMatrixPosition(xt.matrixWorld);const Ut=K.distanceTo(_t),At=it.projectionMatrix.elements,Mt=xt.projectionMatrix.elements,qt=At[14]/(At[10]-1),z=At[14]/(At[10]+1),He=(At[9]+1)/At[5],se=(At[9]-1)/At[5],Qt=(At[8]-1)/At[0],Nt=(Mt[8]+1)/Mt[0],ie=qt*Qt,Bt=qt*Nt,oe=Ut/(-Qt+Nt),qe=oe*-Qt;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(qe),$.translateZ(oe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const We=qt+oe,U=z+oe,b=ie-qe,et=Bt+(Ut-qe),dt=He*z/U*We,vt=se*z/U*We;$.projectionMatrix.makePerspective(b,et,dt,vt,We,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ht($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let it=$.near,xt=$.far;M.texture!==null&&(M.depthNear>0&&(it=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),at.near=C.near=D.near=it,at.far=C.far=D.far=xt,(ut!==at.near||gt!==at.far)&&(l.updateRenderState({depthNear:at.near,depthFar:at.far}),ut=at.near,gt=at.far),at.layers.mask=$.layers.mask|6,D.layers.mask=at.layers.mask&3,C.layers.mask=at.layers.mask&5;const Ut=$.parent,At=at.cameras;Ht(at,Ut);for(let Mt=0;Mt<At.length;Mt++)Ht(At[Mt],Ut);At.length===2?St(at,D,C):at.projectionMatrix.copy(D.projectionMatrix),re($,at,Ut)};function re($,it,xt){xt===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(xt.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Fp*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(S===null&&x===null))return p},this.setFoveation=function($){p=$,S!==null&&(S.fixedFoveation=$),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(at)},this.getCameraTexture=function($){return y[$]};let be=null;function I($,it){if(v=it.getViewerPose(m||h),T=it,v!==null){const xt=v.views;x!==null&&(e.setRenderTargetFramebuffer(w,x.framebuffer),e.setRenderTarget(w));let Ut=!1;xt.length!==at.cameras.length&&(at.cameras.length=0,Ut=!0);for(let z=0;z<xt.length;z++){const He=xt[z];let se=null;if(x!==null)se=x.getViewport(He);else{const Nt=g.getViewSubImage(S,He);se=Nt.viewport,z===0&&(e.setRenderTargetTextures(w,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(w))}let Qt=V[z];Qt===void 0&&(Qt=new Ei,Qt.layers.enable(z),Qt.viewport=new rn,V[z]=Qt),Qt.matrix.fromArray(He.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(He.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(se.x,se.y,se.width,se.height),z===0&&(at.matrix.copy(Qt.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Ut===!0&&at.cameras.push(Qt)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const z=g.getDepthInformation(xt[0]);z&&z.isValid&&z.texture&&M.init(z,l.renderState)}if(At&&At.includes("camera-access")&&A){e.state.unbindTexture(),g=r.getBinding();for(let z=0;z<xt.length;z++){const He=xt[z].camera;if(He){let se=y[He];se||(se=new KS,y[He]=se);const Qt=g.getCameraImage(He);se.sourceTexture=Qt}}}}for(let xt=0;xt<F.length;xt++){const Ut=B[xt],At=F[xt];Ut!==null&&At!==void 0&&At.update(Ut,it,m||h)}be&&be($,it),it.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:it}),T=null}const ct=new $S;ct.setAnimationLoop(I),this.setAnimationLoop=function($){be=$},this.dispose=function(){}}}const ks=new ta,cC=new en;function fC(o,e){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,YS(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,P,O,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?f(M,y):y.isMeshToonMaterial?(f(M,y),g(M,y)):y.isMeshPhongMaterial?(f(M,y),v(M,y)):y.isMeshStandardMaterial?(f(M,y),S(M,y),y.isMeshPhysicalMaterial&&x(M,y,w)):y.isMeshMatcapMaterial?(f(M,y),T(M,y)):y.isMeshDepthMaterial?f(M,y):y.isMeshDistanceMaterial?(f(M,y),A(M,y)):y.isMeshNormalMaterial?f(M,y):y.isLineBasicMaterial?(h(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?p(M,y,P,O):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function f(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Qn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Qn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const P=e.get(y),O=P.envMap,w=P.envMapRotation;O&&(M.envMap.value=O,ks.copy(w),ks.x*=-1,ks.y*=-1,ks.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),M.envMapRotation.value.setFromMatrix4(cC.makeRotationFromEuler(ks)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,P,O){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*P,M.scale.value=O*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function v(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function g(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function S(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,P){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Qn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function A(M,y){const P=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function hC(o,e,i,r){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,O){const w=O.program;r.uniformBlockBinding(P,w)}function m(P,O){let w=l[P.id];w===void 0&&(T(P),w=v(P),l[P.id]=w,P.addEventListener("dispose",M));const F=O.program;r.updateUBOMapping(P,F);const B=e.render.frame;f[P.id]!==B&&(S(P),f[P.id]=B)}function v(P){const O=g();P.__bindingPointIndex=O;const w=o.createBuffer(),F=P.__size,B=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,F,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,w),w}function g(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const O=l[P.id],w=P.uniforms,F=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let B=0,L=w.length;B<L;B++){const q=Array.isArray(w[B])?w[B]:[w[B]];for(let D=0,C=q.length;D<C;D++){const V=q[D];if(x(V,B,D,F)===!0){const at=V.__offset,ut=Array.isArray(V.value)?V.value:[V.value];let gt=0;for(let lt=0;lt<ut.length;lt++){const j=ut[lt],st=A(j);typeof j=="number"||typeof j=="boolean"?(V.__data[0]=j,o.bufferSubData(o.UNIFORM_BUFFER,at+gt,V.__data)):j.isMatrix3?(V.__data[0]=j.elements[0],V.__data[1]=j.elements[1],V.__data[2]=j.elements[2],V.__data[3]=0,V.__data[4]=j.elements[3],V.__data[5]=j.elements[4],V.__data[6]=j.elements[5],V.__data[7]=0,V.__data[8]=j.elements[6],V.__data[9]=j.elements[7],V.__data[10]=j.elements[8],V.__data[11]=0):(j.toArray(V.__data,gt),gt+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(P,O,w,F){const B=P.value,L=O+"_"+w;if(F[L]===void 0)return typeof B=="number"||typeof B=="boolean"?F[L]=B:F[L]=B.clone(),!0;{const q=F[L];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return F[L]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function T(P){const O=P.uniforms;let w=0;const F=16;for(let L=0,q=O.length;L<q;L++){const D=Array.isArray(O[L])?O[L]:[O[L]];for(let C=0,V=D.length;C<V;C++){const at=D[C],ut=Array.isArray(at.value)?at.value:[at.value];for(let gt=0,lt=ut.length;gt<lt;gt++){const j=ut[gt],st=A(j),K=w%F,_t=K%st.boundary,St=K+_t;w+=_t,St!==0&&F-St<st.storage&&(w+=F-St),at.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=w,w+=st.storage}}}const B=w%F;return B>0&&(w+=F-B),P.__size=w,P.__cache={},this}function A(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function M(P){const O=P.target;O.removeEventListener("dispose",M);const w=h.indexOf(O.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete f[O.id]}function y(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},f={}}return{bind:p,update:m,dispose:y}}class dC{constructor(e={}){const{canvas:i=kE(),context:r=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=h;const T=new Uint32Array(4),A=new Int32Array(4);let M=null,y=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=Mi;let B=0,L=0,q=null,D=-1,C=null;const V=new rn,at=new rn;let ut=null;const gt=new Re(0);let lt=0,j=i.width,st=i.height,K=1,_t=null,St=null;const Ht=new rn(0,0,j,st),re=new rn(0,0,j,st);let be=!1;const I=new em;let ct=!1,$=!1;const it=new en,xt=new k,Ut=new rn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function qt(){return q===null?K:1}let z=r;function He(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kp}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Gt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),z===null){const Z="webgl2";if(z=He(Z,R),z===null)throw He(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,Qt,Nt,ie,Bt,oe,qe,We,U,b,et,dt,vt,ft,Vt,Rt,Wt,Kt,Tt,Lt,ne,jt,Ot,fe;function G(){se=new EA(z),se.init(),jt=new sC(z,se),Qt=new gA(z,se,e,jt),Nt=new iC(z,se),Qt.reversedDepthBuffer&&S&&Nt.buffers.depth.setReversed(!0),ie=new AA(z),Bt=new kR,oe=new aC(z,se,Nt,Bt,Qt,jt,ie),qe=new vA(w),We=new MA(w),U=new NT(z),Ot=new pA(z,U),b=new TA(z,U,ie,Ot),et=new CA(z,b,U,ie),Tt=new RA(z,Qt,oe),Rt=new _A(Bt),dt=new XR(w,qe,We,se,Qt,Ot,Rt),vt=new fC(w,Bt),ft=new YR,Vt=new JR(se),Kt=new dA(w,qe,We,Nt,et,x,p),Wt=new eC(w,et,Qt),fe=new hC(z,ie,Qt,Nt),Lt=new mA(z,se,ie),ne=new bA(z,se,ie),ie.programs=dt.programs,w.capabilities=Qt,w.extensions=se,w.properties=Bt,w.renderLists=ft,w.shadowMap=Wt,w.state=Nt,w.info=ie}G();const bt=new uC(w,z);this.xr=bt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(j,st,!1))},this.getSize=function(R){return R.set(j,st)},this.setSize=function(R,Z,rt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=R,st=Z,i.width=Math.floor(R*K),i.height=Math.floor(Z*K),rt===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(j*K,st*K).floor()},this.setDrawingBufferSize=function(R,Z,rt){j=R,st=Z,K=rt,i.width=Math.floor(R*rt),i.height=Math.floor(Z*rt),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(Ht)},this.setViewport=function(R,Z,rt,ot){R.isVector4?Ht.set(R.x,R.y,R.z,R.w):Ht.set(R,Z,rt,ot),Nt.viewport(V.copy(Ht).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,Z,rt,ot){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,Z,rt,ot),Nt.scissor(at.copy(re).multiplyScalar(K).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){Nt.setScissorTest(be=R)},this.setOpaqueSort=function(R){_t=R},this.setTransparentSort=function(R){St=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,rt=!0){let ot=0;if(R){let Q=!1;if(q!==null){const Et=q.texture.format;Q=Et===Kp||Et===Zp||Et===jp}if(Q){const Et=q.texture.type,Pt=Et===$i||Et===Ks||Et===pl||Et===ml||Et===Yp||Et===Wp,It=Kt.getClearColor(),Ct=Kt.getClearAlpha(),Xt=It.r,ee=It.g,$t=It.b;Pt?(T[0]=Xt,T[1]=ee,T[2]=$t,T[3]=Ct,z.clearBufferuiv(z.COLOR,0,T)):(A[0]=Xt,A[1]=ee,A[2]=$t,A[3]=Ct,z.clearBufferiv(z.COLOR,0,A))}else ot|=z.COLOR_BUFFER_BIT}Z&&(ot|=z.DEPTH_BUFFER_BIT),rt&&(ot|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Gt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),Kt.dispose(),ft.dispose(),Vt.dispose(),Bt.dispose(),qe.dispose(),We.dispose(),et.dispose(),Ot.dispose(),fe.dispose(),dt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",pn),bt.removeEventListener("sessionend",Un),na.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=ie.autoReset,Z=Wt.enabled,rt=Wt.autoUpdate,ot=Wt.needsUpdate,Q=Wt.type;G(),ie.autoReset=R,Wt.enabled=Z,Wt.autoUpdate=rt,Wt.needsUpdate=ot,Wt.type=Q}function yt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function mt(R){const Z=R.target;Z.removeEventListener("dispose",mt),Yt(Z)}function Yt(R){ue(R),Bt.remove(R)}function ue(R){const Z=Bt.get(R).programs;Z!==void 0&&(Z.forEach(function(rt){dt.releaseProgram(rt)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,rt,ot,Q,Et){Z===null&&(Z=At);const Pt=Q.isMesh&&Q.matrixWorld.determinant()<0,It=Cl(R,Z,rt,ot,Q);Nt.setMaterial(ot,Pt);let Ct=rt.index,Xt=1;if(ot.wireframe===!0){if(Ct=b.getWireframeAttribute(rt),Ct===void 0)return;Xt=2}const ee=rt.drawRange,$t=rt.attributes.position;let Se=ee.start*Xt,Pe=(ee.start+ee.count)*Xt;Et!==null&&(Se=Math.max(Se,Et.start*Xt),Pe=Math.min(Pe,(Et.start+Et.count)*Xt)),Ct!==null?(Se=Math.max(Se,0),Pe=Math.min(Pe,Ct.count)):$t!=null&&(Se=Math.max(Se,0),Pe=Math.min(Pe,$t.count));const Qe=Pe-Se;if(Qe<0||Qe===1/0)return;Ot.setup(Q,ot,It,rt,Ct);let Ne,Ce=Lt;if(Ct!==null&&(Ne=U.get(Ct),Ce=ne,Ce.setIndex(Ne)),Q.isMesh)ot.wireframe===!0?(Nt.setLineWidth(ot.wireframeLinewidth*qt()),Ce.setMode(z.LINES)):Ce.setMode(z.TRIANGLES);else if(Q.isLine){let te=ot.linewidth;te===void 0&&(te=1),Nt.setLineWidth(te*qt()),Q.isLineSegments?Ce.setMode(z.LINES):Q.isLineLoop?Ce.setMode(z.LINE_LOOP):Ce.setMode(z.LINE_STRIP)}else Q.isPoints?Ce.setMode(z.POINTS):Q.isSprite&&Ce.setMode(z.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)vl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const te=Q._multiDrawStarts,Le=Q._multiDrawCounts,ge=Q._multiDrawCount,mn=Ct?U.get(Ct).bytesPerElement:1,$n=Bt.get(ot).currentProgram.getUniforms();for(let we=0;we<ge;we++)$n.setValue(z,"_gl_DrawID",we),Ce.render(te[we]/mn,Le[we])}else if(Q.isInstancedMesh)Ce.renderInstances(Se,Qe,Q.count);else if(rt.isInstancedBufferGeometry){const te=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Le=Math.min(rt.instanceCount,te);Ce.renderInstances(Se,Qe,Le)}else Ce.render(Se,Qe)};function Ge(R,Z,rt){R.transparent===!0&&R.side===Kn&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,fi(R,Z,rt),R.side=cs,R.needsUpdate=!0,fi(R,Z,rt),R.side=Kn):fi(R,Z,rt)}this.compile=function(R,Z,rt=null){rt===null&&(rt=R),y=Vt.get(rt),y.init(Z),O.push(y),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),R!==rt&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const ot=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Et=Q.material;if(Et)if(Array.isArray(Et))for(let Pt=0;Pt<Et.length;Pt++){const It=Et[Pt];Ge(It,rt,Q),ot.add(It)}else Ge(Et,rt,Q),ot.add(Et)}),y=O.pop(),ot},this.compileAsync=function(R,Z,rt=null){const ot=this.compile(R,Z,rt);return new Promise(Q=>{function Et(){if(ot.forEach(function(Pt){Bt.get(Pt).currentProgram.isReady()&&ot.delete(Pt)}),ot.size===0){Q(R);return}setTimeout(Et,10)}se.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Me=null;function $e(R){Me&&Me(R)}function pn(){na.stop()}function Un(){na.start()}const na=new $S;na.setAnimationLoop($e),typeof self<"u"&&na.setContext(self),this.setAnimationLoop=function(R){Me=R,bt.setAnimationLoop(R),R===null?na.stop():na.start()},bt.addEventListener("sessionstart",pn),bt.addEventListener("sessionend",Un),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(Z),Z=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Z,q),y=Vt.get(R,O.length),y.init(Z),O.push(y),it.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),I.setFromProjectionMatrix(it,Qi,Z.reversedDepth),$=this.localClippingEnabled,ct=Rt.init(this.clippingPlanes,$),M=ft.get(R,P.length),M.init(),P.push(M),bt.enabled===!0&&bt.isPresenting===!0){const Et=w.xr.getDepthSensingMesh();Et!==null&&mo(Et,Z,-1/0,w.sortObjects)}mo(R,Z,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(_t,St),Mt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Mt&&Kt.addToRenderList(M,R),this.info.render.frame++,ct===!0&&Rt.beginShadows();const rt=y.state.shadowsArray;Wt.render(rt,R,Z),ct===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,Q=M.transmissive;if(y.setupLights(),Z.isArrayCamera){const Et=Z.cameras;if(Q.length>0)for(let Pt=0,It=Et.length;Pt<It;Pt++){const Ct=Et[Pt];ms(ot,Q,R,Ct)}Mt&&Kt.render(R);for(let Pt=0,It=Et.length;Pt<It;Pt++){const Ct=Et[Pt];Rl(M,R,Ct,Ct.viewport)}}else Q.length>0&&ms(ot,Q,R,Z),Mt&&Kt.render(R),Rl(M,R,Z);q!==null&&L===0&&(oe.updateMultisampleRenderTarget(q),oe.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(w,R,Z),Ot.resetDefaultState(),D=-1,C=null,O.pop(),O.length>0?(y=O[O.length-1],ct===!0&&Rt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?M=P[P.length-1]:M=null};function mo(R,Z,rt,ot){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||I.intersectsSprite(R)){ot&&Ut.setFromMatrixPosition(R.matrixWorld).applyMatrix4(it);const Pt=et.update(R),It=R.material;It.visible&&M.push(R,Pt,It,rt,Ut.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||I.intersectsObject(R))){const Pt=et.update(R),It=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ut.copy(R.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ut.copy(Pt.boundingSphere.center)),Ut.applyMatrix4(R.matrixWorld).applyMatrix4(it)),Array.isArray(It)){const Ct=Pt.groups;for(let Xt=0,ee=Ct.length;Xt<ee;Xt++){const $t=Ct[Xt],Se=It[$t.materialIndex];Se&&Se.visible&&M.push(R,Pt,Se,rt,Ut.z,$t)}}else It.visible&&M.push(R,Pt,It,rt,Ut.z,null)}}const Et=R.children;for(let Pt=0,It=Et.length;Pt<It;Pt++)mo(Et[Pt],Z,rt,ot)}function Rl(R,Z,rt,ot){const Q=R.opaque,Et=R.transmissive,Pt=R.transparent;y.setupLightsView(rt),ct===!0&&Rt.setGlobalState(w.clippingPlanes,rt),ot&&Nt.viewport(V.copy(ot)),Q.length>0&&ia(Q,Z,rt),Et.length>0&&ia(Et,Z,rt),Pt.length>0&&ia(Pt,Z,rt),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function ms(R,Z,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ot.id]===void 0&&(y.state.transmissionRenderTarget[ot.id]=new Js(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?yl:$i,minFilter:Zs,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Et=y.state.transmissionRenderTarget[ot.id],Pt=ot.viewport||V;Et.setSize(Pt.z*w.transmissionResolutionScale,Pt.w*w.transmissionResolutionScale);const It=w.getRenderTarget(),Ct=w.getActiveCubeFace(),Xt=w.getActiveMipmapLevel();w.setRenderTarget(Et),w.getClearColor(gt),lt=w.getClearAlpha(),lt<1&&w.setClearColor(16777215,.5),w.clear(),Mt&&Kt.render(rt);const ee=w.toneMapping;w.toneMapping=us;const $t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),y.setupLightsView(ot),ct===!0&&Rt.setGlobalState(w.clippingPlanes,ot),ia(R,rt,ot),oe.updateMultisampleRenderTarget(Et),oe.updateRenderTargetMipmap(Et),se.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Pe=0,Qe=Z.length;Pe<Qe;Pe++){const Ne=Z[Pe],Ce=Ne.object,te=Ne.geometry,Le=Ne.material,ge=Ne.group;if(Le.side===Kn&&Ce.layers.test(ot.layers)){const mn=Le.side;Le.side=Qn,Le.needsUpdate=!0,gs(Ce,rt,ot,te,Le,ge),Le.side=mn,Le.needsUpdate=!0,Se=!0}}Se===!0&&(oe.updateMultisampleRenderTarget(Et),oe.updateRenderTargetMipmap(Et))}w.setRenderTarget(It,Ct,Xt),w.setClearColor(gt,lt),$t!==void 0&&(ot.viewport=$t),w.toneMapping=ee}function ia(R,Z,rt){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Et=R.length;Q<Et;Q++){const Pt=R[Q],It=Pt.object,Ct=Pt.geometry,Xt=Pt.group;let ee=Pt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),It.layers.test(rt.layers)&&gs(It,Z,rt,Ct,ee,Xt)}}function gs(R,Z,rt,ot,Q,Et){R.onBeforeRender(w,Z,rt,ot,Q,Et),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(w,Z,rt,ot,R,Et),Q.transparent===!0&&Q.side===Kn&&Q.forceSinglePass===!1?(Q.side=Qn,Q.needsUpdate=!0,w.renderBufferDirect(rt,Z,ot,Q,R,Et),Q.side=cs,Q.needsUpdate=!0,w.renderBufferDirect(rt,Z,ot,Q,R,Et),Q.side=Kn):w.renderBufferDirect(rt,Z,ot,Q,R,Et),R.onAfterRender(w,Z,rt,ot,Q,Et)}function fi(R,Z,rt){Z.isScene!==!0&&(Z=At);const ot=Bt.get(R),Q=y.state.lights,Et=y.state.shadowsArray,Pt=Q.state.version,It=dt.getParameters(R,Q.state,Et,Z,rt),Ct=dt.getProgramCacheKey(It);let Xt=ot.programs;ot.environment=R.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(R.isMeshStandardMaterial?We:qe).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",mt),Xt=new Map,ot.programs=Xt);let ee=Xt.get(Ct);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===Pt)return Aa(R,It),ee}else It.uniforms=dt.getUniforms(R),R.onBeforeCompile(It,w),ee=dt.acquireProgram(It,Ct),Xt.set(Ct,ee),ot.uniforms=It.uniforms;const $t=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=Rt.uniform),Aa(R,It),ot.needsLights=wl(R),ot.lightsStateVersion=Pt,ot.needsLights&&($t.ambientLightColor.value=Q.state.ambient,$t.lightProbe.value=Q.state.probe,$t.directionalLights.value=Q.state.directional,$t.directionalLightShadows.value=Q.state.directionalShadow,$t.spotLights.value=Q.state.spot,$t.spotLightShadows.value=Q.state.spotShadow,$t.rectAreaLights.value=Q.state.rectArea,$t.ltc_1.value=Q.state.rectAreaLTC1,$t.ltc_2.value=Q.state.rectAreaLTC2,$t.pointLights.value=Q.state.point,$t.pointLightShadows.value=Q.state.pointShadow,$t.hemisphereLights.value=Q.state.hemi,$t.directionalShadowMap.value=Q.state.directionalShadowMap,$t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$t.spotShadowMap.value=Q.state.spotShadowMap,$t.spotLightMatrix.value=Q.state.spotLightMatrix,$t.spotLightMap.value=Q.state.spotLightMap,$t.pointShadowMap.value=Q.state.pointShadowMap,$t.pointShadowMatrix.value=Q.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function _s(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Cc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Aa(R,Z){const rt=Bt.get(R);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function Cl(R,Z,rt,ot,Q){Z.isScene!==!0&&(Z=At),oe.resetTextureUnits();const Et=Z.fog,Pt=ot.isMeshStandardMaterial?Z.environment:null,It=q===null?w.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:co,Ct=(ot.isMeshStandardMaterial?We:qe).get(ot.envMap||Pt),Xt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),$t=!!rt.morphAttributes.position,Se=!!rt.morphAttributes.normal,Pe=!!rt.morphAttributes.color;let Qe=us;ot.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Qe=w.toneMapping);const Ne=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ce=Ne!==void 0?Ne.length:0,te=Bt.get(ot),Le=y.state.lights;if(ct===!0&&($===!0||R!==C)){const nn=R===C&&ot.id===D;Rt.setState(ot,R,nn)}let ge=!1;ot.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Le.state.version||te.outputColorSpace!==It||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==Ct||ot.fog===!0&&te.fog!==Et||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Rt.numPlanes||te.numIntersection!==Rt.numIntersection)||te.vertexAlphas!==Xt||te.vertexTangents!==ee||te.morphTargets!==$t||te.morphNormals!==Se||te.morphColors!==Pe||te.toneMapping!==Qe||te.morphTargetsCount!==Ce)&&(ge=!0):(ge=!0,te.__version=ot.version);let mn=te.currentProgram;ge===!0&&(mn=fi(ot,Z,Q));let $n=!1,we=!1,Ra=!1;const je=mn.getUniforms(),zn=te.uniforms;if(Nt.useProgram(mn.program)&&($n=!0,we=!0,Ra=!0),ot.id!==D&&(D=ot.id,we=!0),$n||C!==R){Nt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),je.setValue(z,"projectionMatrix",R.projectionMatrix),je.setValue(z,"viewMatrix",R.matrixWorldInverse);const Nn=je.map.cameraPosition;Nn!==void 0&&Nn.setValue(z,xt.setFromMatrixPosition(R.matrixWorld)),Qt.logarithmicDepthBuffer&&je.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&je.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,we=!0,Ra=!0)}if(Q.isSkinnedMesh){je.setOptional(z,Q,"bindMatrix"),je.setOptional(z,Q,"bindMatrixInverse");const nn=Q.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),je.setValue(z,"boneTexture",nn.boneTexture,oe))}Q.isBatchedMesh&&(je.setOptional(z,Q,"batchingTexture"),je.setValue(z,"batchingTexture",Q._matricesTexture,oe),je.setOptional(z,Q,"batchingIdTexture"),je.setValue(z,"batchingIdTexture",Q._indirectTexture,oe),je.setOptional(z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&je.setValue(z,"batchingColorTexture",Q._colorsTexture,oe));const ln=rt.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Tt.update(Q,rt,mn),(we||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,je.setValue(z,"receiveShadow",Q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(zn.envMap.value=Ct,zn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(zn.envMapIntensity.value=Z.environmentIntensity),we&&(je.setValue(z,"toneMappingExposure",w.toneMappingExposure),te.needsLights&&Ic(zn,Ra),Et&&ot.fog===!0&&vt.refreshFogUniforms(zn,Et),vt.refreshMaterialUniforms(zn,ot,K,st,y.state.transmissionRenderTarget[R.id]),Cc.upload(z,_s(te),zn,oe)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Cc.upload(z,_s(te),zn,oe),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&je.setValue(z,"center",Q.center),je.setValue(z,"modelViewMatrix",Q.modelViewMatrix),je.setValue(z,"normalMatrix",Q.normalMatrix),je.setValue(z,"modelMatrix",Q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const nn=ot.uniformsGroups;for(let Nn=0,er=nn.length;Nn<er;Nn++){const Ii=nn[Nn];fe.update(Ii,mn),fe.bind(Ii,mn)}}return mn}function Ic(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function wl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,Z,rt){const ot=Bt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Bt.get(R.texture).__webglTexture=Z,Bt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const rt=Bt.get(R);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const go=z.createFramebuffer();this.setRenderTarget=function(R,Z=0,rt=0){q=R,B=Z,L=rt;let ot=!0,Q=null,Et=!1,Pt=!1;if(R){const Ct=Bt.get(R);if(Ct.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(z.FRAMEBUFFER,null),ot=!1;else if(Ct.__webglFramebuffer===void 0)oe.setupRenderTarget(R);else if(Ct.__hasExternalTextures)oe.rebindTextures(R,Bt.get(R.texture).__webglTexture,Bt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(Ct.__boundDepthTexture!==$t){if($t!==null&&Bt.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const ee=Bt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?Q=ee[Z][rt]:Q=ee[Z],Et=!0):R.samples>0&&oe.useMultisampledRTT(R)===!1?Q=Bt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[rt]:Q=ee,V.copy(R.viewport),at.copy(R.scissor),ut=R.scissorTest}else V.copy(Ht).multiplyScalar(K).floor(),at.copy(re).multiplyScalar(K).floor(),ut=be;if(rt!==0&&(Q=go),Nt.bindFramebuffer(z.FRAMEBUFFER,Q)&&ot&&Nt.drawBuffers(R,Q),Nt.viewport(V),Nt.scissor(at),Nt.setScissorTest(ut),Et){const Ct=Bt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct.__webglTexture,rt)}else if(Pt){const Ct=Z;for(let Xt=0;Xt<R.textures.length;Xt++){const ee=Bt.get(R.textures[Xt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Xt,ee.__webglTexture,rt,Ct)}}else if(R!==null&&rt!==0){const Ct=Bt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ct.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,Z,rt,ot,Q,Et,Pt,It=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ct=Ct[Pt]),Ct){Nt.bindFramebuffer(z.FRAMEBUFFER,Ct);try{const Xt=R.textures[It],ee=Xt.format,$t=Xt.type;if(!Qt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ot&&rt>=0&&rt<=R.height-Q&&(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It),z.readPixels(Z,rt,ot,Q,jt.convert(ee),jt.convert($t),Et))}finally{const Xt=q!==null?Bt.get(q).__webglFramebuffer:null;Nt.bindFramebuffer(z.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,rt,ot,Q,Et,Pt,It=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Bt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ct=Ct[Pt]),Ct)if(Z>=0&&Z<=R.width-ot&&rt>=0&&rt<=R.height-Q){Nt.bindFramebuffer(z.FRAMEBUFFER,Ct);const Xt=R.textures[It],ee=Xt.format,$t=Xt.type;if(!Qt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.bufferData(z.PIXEL_PACK_BUFFER,Et.byteLength,z.STREAM_READ),R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+It),z.readPixels(Z,rt,ot,Q,jt.convert(ee),jt.convert($t),0);const Pe=q!==null?Bt.get(q).__webglFramebuffer:null;Nt.bindFramebuffer(z.FRAMEBUFFER,Pe);const Qe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await qE(z,Qe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Et),z.deleteBuffer(Se),z.deleteSync(Qe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,rt=0){const ot=Math.pow(2,-rt),Q=Math.floor(R.image.width*ot),Et=Math.floor(R.image.height*ot),Pt=Z!==null?Z.x:0,It=Z!==null?Z.y:0;oe.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,rt,0,0,Pt,It,Q,Et),Nt.unbindTexture()};const vs=z.createFramebuffer(),Bc=z.createFramebuffer();this.copyTextureToTexture=function(R,Z,rt=null,ot=null,Q=0,Et=null){Et===null&&(Q!==0?(vl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Q,Q=0):Et=0);let Pt,It,Ct,Xt,ee,$t,Se,Pe,Qe;const Ne=R.isCompressedTexture?R.mipmaps[Et]:R.image;if(rt!==null)Pt=rt.max.x-rt.min.x,It=rt.max.y-rt.min.y,Ct=rt.isBox3?rt.max.z-rt.min.z:1,Xt=rt.min.x,ee=rt.min.y,$t=rt.isBox3?rt.min.z:0;else{const ln=Math.pow(2,-Q);Pt=Math.floor(Ne.width*ln),It=Math.floor(Ne.height*ln),R.isDataArrayTexture?Ct=Ne.depth:R.isData3DTexture?Ct=Math.floor(Ne.depth*ln):Ct=1,Xt=0,ee=0,$t=0}ot!==null?(Se=ot.x,Pe=ot.y,Qe=ot.z):(Se=0,Pe=0,Qe=0);const Ce=jt.convert(Z.format),te=jt.convert(Z.type);let Le;Z.isData3DTexture?(oe.setTexture3D(Z,0),Le=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(oe.setTexture2DArray(Z,0),Le=z.TEXTURE_2D_ARRAY):(oe.setTexture2D(Z,0),Le=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const ge=z.getParameter(z.UNPACK_ROW_LENGTH),mn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),$n=z.getParameter(z.UNPACK_SKIP_PIXELS),we=z.getParameter(z.UNPACK_SKIP_ROWS),Ra=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ne.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ne.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Xt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$t);const je=R.isDataArrayTexture||R.isData3DTexture,zn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const ln=Bt.get(R),nn=Bt.get(Z),Nn=Bt.get(ln.__renderTarget),er=Bt.get(nn.__renderTarget);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let Ii=0;Ii<Ct;Ii++)je&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.get(R).__webglTexture,Q,$t+Ii),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.get(Z).__webglTexture,Et,Qe+Ii)),z.blitFramebuffer(Xt,ee,Pt,It,Se,Pe,Pt,It,z.DEPTH_BUFFER_BIT,z.NEAREST);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Bt.has(R)){const ln=Bt.get(R),nn=Bt.get(Z);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,vs),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Bc);for(let Nn=0;Nn<Ct;Nn++)je?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ln.__webglTexture,Q,$t+Nn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ln.__webglTexture,Q),zn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,Et,Qe+Nn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,Et),Q!==0?z.blitFramebuffer(Xt,ee,Pt,It,Se,Pe,Pt,It,z.COLOR_BUFFER_BIT,z.NEAREST):zn?z.copyTexSubImage3D(Le,Et,Se,Pe,Qe+Nn,Xt,ee,Pt,It):z.copyTexSubImage2D(Le,Et,Se,Pe,Xt,ee,Pt,It);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else zn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Le,Et,Se,Pe,Qe,Pt,It,Ct,Ce,te,Ne.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(Le,Et,Se,Pe,Qe,Pt,It,Ct,Ce,Ne.data):z.texSubImage3D(Le,Et,Se,Pe,Qe,Pt,It,Ct,Ce,te,Ne):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Et,Se,Pe,Pt,It,Ce,te,Ne.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Et,Se,Pe,Ne.width,Ne.height,Ce,Ne.data):z.texSubImage2D(z.TEXTURE_2D,Et,Se,Pe,Pt,It,Ce,te,Ne);z.pixelStorei(z.UNPACK_ROW_LENGTH,ge),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$n),z.pixelStorei(z.UNPACK_SKIP_ROWS,we),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ra),Et===0&&Z.generateMipmaps&&z.generateMipmap(Le),Nt.unbindTexture()},this.initRenderTarget=function(R){Bt.get(R).__webglFramebuffer===void 0&&oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?oe.setTextureCube(R,0):R.isData3DTexture?oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?oe.setTexture2DArray(R,0):oe.setTexture2D(R,0),Nt.unbindTexture()},this.resetState=function(){B=0,L=0,q=null,Nt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const xS={type:"change"},sm={type:"start"},ay={type:"end"},vc=new $p,MS=new rs,pC=Math.cos(70*XE.DEG2RAD),_n=new k,Zn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kd=1e-6;class mC extends DT{constructor(e,i=null){super(e,i),this.state=ke.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:no.ROTATE,TWO:no.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Qs,this._lastTargetPosition=new k,this._quat=new Qs().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zv,this._sphericalDelta=new Zv,this._scale=1,this._panOffset=new k,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new k,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_C.bind(this),this._onPointerDown=gC.bind(this),this._onPointerUp=vC.bind(this),this._onContextMenu=bC.bind(this),this._onMouseWheel=xC.bind(this),this._onKeyDown=MC.bind(this),this._onTouchStart=EC.bind(this),this._onTouchMove=TC.bind(this),this._onMouseDown=SC.bind(this),this._onMouseMove=yC.bind(this),this._interceptControlDown=AC.bind(this),this._interceptControlUp=RC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xS),this.update(),this.state=ke.NONE}update(e=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Zn:r>Math.PI&&(r-=Zn),l<-Math.PI?l+=Zn:l>Math.PI&&(l-=Zn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const p=d-h;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),f=!!p}else if(this.object.isOrthographicCamera){const d=new k(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=p!==this.object.zoom;const m=new k(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(vc.origin.copy(this.object.position),vc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vc.direction))<pC?this.object.lookAt(this.target):(MS.setFromNormalAndCoplanarPoint(this.object.up,this.target),vc.intersectPlane(MS,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>Kd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kd||this._lastTargetPosition.distanceToSquared(this.target)>Kd?(this.dispatchEvent(xS),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zn/60*this.autoRotateSpeed*e:Zn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-e),this._panOffset.add(_n)}_panUp(e,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(e),this._panOffset.add(_n)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let f=_n.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=e-r.left,f=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),l=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ce,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function gC(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function _C(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function vC(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ay),this.state=ke.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function SC(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=ke.DOLLY;break;case ao.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ke.ROTATE}break;case ao.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(sm)}function yC(o){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function xC(o){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(o.preventDefault(),this.dispatchEvent(sm),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(ay))}function MC(o){this.enabled!==!1&&this._handleKeyDown(o)}function EC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case no.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=ke.TOUCH_ROTATE;break;case no.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case no.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=ke.TOUCH_DOLLY_PAN;break;case no.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(sm)}function TC(o){switch(this._trackPointer(o),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=ke.NONE}}function bC(o){this.enabled!==!1&&o.preventDefault()}function AC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CC(o){const e=o.length,i=new Array(e);for(let p=0;p<e;p++){const m=o[Math.max(p-1,0)],v=o[Math.min(p+1,e-1)];i[p]=v.clone().sub(m).normalize()}const r=i[0],l=Math.abs(r.x)<.9?new k(1,0,0):new k(0,1,0);let f=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),h=r.clone().cross(f).normalize();const d=[{point:o[0],tangent:r,normal:f,binormal:h}];for(let p=1;p<e;p++){const m=d[p-1],v=o[p].clone().sub(o[p-1]),g=v.dot(v);if(g<1e-10){d.push({...m,point:o[p],tangent:i[p]});continue}const S=m.normal.clone().sub(v.clone().multiplyScalar(2/g*v.dot(m.normal))),x=m.tangent.clone().sub(v.clone().multiplyScalar(2/g*v.dot(m.tangent))),T=i[p].clone().sub(x),A=T.dot(T),M=A<1e-10?S:S.clone().sub(T.clone().multiplyScalar(2/A*T.dot(S)));M.normalize();const y=i[p].clone().cross(M).normalize();d.push({point:o[p],tangent:i[p],normal:M,binormal:y})}return d}function hs(o,e,i,r={}){const l=r.radialSegments??8,f=o.getPoints(i),h=CC(f),d=[],p=[],m=[],v=[],g=new k,S=new k;for(let A=0;A<h.length;A++){const M=A/(h.length-1),y=Math.max(e(M),1e-5),{point:P,normal:O,binormal:w}=h[A];for(let F=0;F<=l;F++){const B=F/l*Math.PI*2,L=Math.cos(B),q=Math.sin(B);S.set(0,0,0).addScaledVector(O,L).addScaledVector(w,q).normalize(),g.copy(P).addScaledVector(S,y),d.push(g.x,g.y,g.z),p.push(S.x,S.y,S.z),m.push(F/l,M)}}const x=l+1;for(let A=0;A<h.length-1;A++)for(let M=0;M<l;M++){const y=A*x+M,P=A*x+M+1,O=(A+1)*x+M,w=(A+1)*x+M+1;v.push(y,P,O,P,w,O)}if(r.caps??!0){const A=d.length/3;d.push(f[0].x,f[0].y,f[0].z),p.push(-h[0].tangent.x,-h[0].tangent.y,-h[0].tangent.z),m.push(.5,.5);for(let w=0;w<l;w++)v.push(A,w,w+1);const M=(h.length-1)*x,y=d.length/3,P=f[f.length-1];d.push(P.x,P.y,P.z);const O=h[h.length-1].tangent;p.push(O.x,O.y,O.z),m.push(.5,.5);for(let w=0;w<l;w++)v.push(y,M+w+1,M+w)}const T=new ea;return T.setAttribute("position",new Vn(d,3)),T.setAttribute("normal",new Vn(p,3)),T.setAttribute("uv",new Vn(m,2)),T.setIndex(v),T}function $s(o,e){return i=>o+(e-o)*i}function wC(o,e){return i=>{const r=Math.sin(Math.PI*i);return o+(e-o)*r}}function sy(o){const{length:e,maxWidth:i,widthPeakT:r=.55,foldDepth:l=.06,droop:f=.08,lengthSegments:h=12,widthSegments:d=6}=o,p=[],m=[],v=[],g=T=>{const A=T<r?T/r:(1-T)/(1-r);return i*Math.max(A,0)**.7};for(let T=0;T<=h;T++){const A=T/h,M=g(A),y=f*e*A*A;for(let P=0;P<=d;P++){const O=P/d*2-1,w=O*M,B=l*i*(1-O*O)-y,L=A*e;p.push(w,B,L),m.push(P/d,A)}}const S=d+1;for(let T=0;T<h;T++)for(let A=0;A<d;A++){const M=T*S+A,y=T*S+A+1,P=(T+1)*S+A,O=(T+1)*S+A+1;v.push(M,P,y,y,P,O)}const x=new ea;return x.setAttribute("position",new Vn(p,3)),x.setAttribute("uv",new Vn(m,2)),x.setIndex(v),x.computeVertexNormals(),x}const DC={sourceName:"Col-0",compactness:.6637,roundness:88.22,eccentricity:.0577,relativeAreaVsCol0:1,n:60},UC={sourceName:"Ler-0",compactness:.7617,roundness:55.6,eccentricity:.0755,relativeAreaVsCol0:1.258,n:60},NC={sourceName:"WS-0",compactness:.6729,roundness:90.66,eccentricity:.0547,relativeAreaVsCol0:1.56,n:60},LC={sourceName:"Tsu-0",compactness:.6106,roundness:112.84,eccentricity:.0402,relativeAreaVsCol0:1.466,n:60},OC={sourceName:"EDi-0",compactness:.6517,roundness:104.32,eccentricity:.0547,relativeAreaVsCol0:1.775,n:60},PC={col0:DC,ler:UC,ws:NC,tsu0:LC,edi0:OC},Qd="https://figshare.com/s/e18a978267675059578f";function bl(o){const e=PC[o];return{compactness:e.compactness,radiusScale:Math.sqrt(e.relativeAreaVsCol0),sourceName:e.sourceName}}const hl=bl("col0"),Sc=bl("ler"),yc=bl("ws"),xc=bl("tsu0"),Mc=bl("edi0"),Vp=[{id:"col0",label:"Col-0 (Columbia)",sourceName:hl.sourceName,rosetteLeafCount:12,rosetteCompactness:hl.compactness,rosetteRadiusScale:hl.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${hl.compactness} (n=60 images, Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"ERECTA (ER) wild-type reference background (Torii et al. 1996)",citationKey:"Torii1996"},leaf:{value:"Reference/baseline leaf count in this project; not itself drawn from a comparative count study",citationKey:"none"}},referencePhoto:{url:Qd,citationKey:"Namin2018"}},{id:"ler",label:"Ler (Landsberg erecta)",sourceName:Sc.sourceName,rosetteLeafCount:12,rosetteCompactness:Sc.compactness,rosetteRadiusScale:Sc.radiusScale,pedicelLengthScale:1/2.6,siliqueBluntness:.9,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${Sc.compactness} (n=60), the highest of the 5 ecotypes measured here (Camargo et al. 2014) -- independently consistent with Ler's known compact habit`,citationKey:"Camargo2014"},pedicel:{value:'Ler carries the natural `er` mutation (Torii et al. 1996: "compact inflorescence, blunt fruits, and short petioles"). Quantitative proxy from Bundy et al. 2012: mature wild-type pedicel 7.90±0.14mm vs. induced er-105 mutant ~2.6x shorter -- that number is for er-105 in a Columbia background, not a direct field measurement of natural Ler vs. Col, and is used here as the best available quantitative proxy for what the mutation does.',citationKey:"Bundy2012"},leaf:{value:"Coneva & Chitwood 2018 report Cvi has ~2 more leaves than Ler in long days -- Ler itself is this comparison's baseline, not independently varied here",citationKey:"Coneva2018"}},referencePhoto:{url:Qd,citationKey:"Namin2018"}},{id:"ws",label:"Ws (Wassilewskija)",sourceName:yc.sourceName,rosetteLeafCount:12,rosetteCompactness:yc.compactness,rosetteRadiusScale:yc.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${yc.compactness} (n=60, Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"ERECTA (ER) wild-type background (Torii et al. 1996 separately isolated induced er alleles from Wassilewskija, implying the natural Ws accession is itself ER)",citationKey:"Torii1996"},leaf:{value:"No dedicated leaf-count comparison found for Ws in the sources used here",citationKey:"none"}},referencePhoto:null},{id:"cvi0",label:"Cvi-0 (Cape Verde Islands)",sourceName:"Cvi-0",rosetteLeafCount:14,rosetteCompactness:hl.compactness,rosetteRadiusScale:1,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1.25,provenance:{compactness:{value:"No rosette-compactness measurement found for Cvi-0 (it is not one of the 19 MAGIC founders in the Camargo et al. 2014 dataset used here) -- defaulted to the Col-0 value rather than estimated",citationKey:"none"},pedicel:{value:"No ERECTA-specific data found for Cvi-0; assumed ER wild-type by default (most non-Landsberg accessions are), not directly confirmed",citationKey:"none"},leaf:{value:"Real: Coneva & Chitwood 2018 report Cvi makes ~2 more leaves than Ler in long-day conditions, is thicker-leaved, and grows more slowly. Leaf-count and thickness reflect this; the thickness multiplier (1.25x) is an illustrative choice, not a value read directly from the paper's figures.",citationKey:"Coneva2018"}},referencePhoto:{url:Qd,citationKey:"Namin2018"}},{id:"tsu0",label:"Tsu-0 (Tsu)",sourceName:xc.sourceName,rosetteLeafCount:12,rosetteCompactness:xc.compactness,rosetteRadiusScale:xc.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${xc.compactness} (n=60), the lowest of the 5 ecotypes measured here (Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"No ERECTA-specific data found for Tsu-0; assumed ER wild-type by default, not directly confirmed",citationKey:"none"},leaf:{value:"No dedicated leaf-count comparison found for Tsu-0 in the sources used here",citationKey:"none"}},referencePhoto:null},{id:"edi0",label:"Edi-0 (Edinburgh)",sourceName:Mc.sourceName,rosetteLeafCount:12,rosetteCompactness:Mc.compactness,rosetteRadiusScale:Mc.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${Mc.compactness} (n=60, Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"No ERECTA-specific data found for Edi-0; assumed ER wild-type by default, not directly confirmed",citationKey:"none"},leaf:{value:"No dedicated leaf-count comparison found for Edi-0 in the sources used here",citationKey:"none"}},referencePhoto:null}],Pc=Vp[0],zc=[{stage:"0",description:"Seed imbibition",day:3,table:"plate"},{stage:"0.50",description:"Radicle emergence",day:4.3,table:"plate"},{stage:"0.70",description:"Hypocotyl and cotyledon emergence",day:5.5,table:"plate"},{stage:"1.00",description:"Cotyledons fully opened",day:6,table:"plate"},{stage:"1.02",description:"2 rosette leaves >1mm",day:12.5,table:"soil"},{stage:"1.03",description:"3 rosette leaves >1mm",day:15.9,table:"soil"},{stage:"1.04",description:"4 rosette leaves >1mm",day:16.5,table:"soil"},{stage:"1.05",description:"5 rosette leaves >1mm",day:17.7,table:"soil"},{stage:"1.06",description:"6 rosette leaves >1mm",day:18.4,table:"soil"},{stage:"1.07",description:"7 rosette leaves >1mm",day:19.4,table:"soil"},{stage:"1.08",description:"8 rosette leaves >1mm",day:20,table:"soil"},{stage:"1.09",description:"9 rosette leaves >1mm",day:21.1,table:"soil"},{stage:"1.10",description:"10 rosette leaves >1mm",day:21.6,table:"soil"},{stage:"1.11",description:"11 rosette leaves >1mm",day:22.2,table:"soil"},{stage:"1.12",description:"12 rosette leaves >1mm",day:23.3,table:"soil"},{stage:"1.13",description:"13 rosette leaves >1mm",day:24.8,table:"soil"},{stage:"1.14",description:"14 rosette leaves >1mm",day:25.5,table:"soil"},{stage:"3.20",description:"Rosette 20% of final size",day:18.9,table:"soil"},{stage:"3.50",description:"Rosette 50% of final size",day:24,table:"soil"},{stage:"3.70",description:"Rosette 70% of final size",day:27.4,table:"soil"},{stage:"3.90",description:"Rosette growth complete",day:29.3,table:"soil"},{stage:"5.10",description:"First flower buds visible",day:26,table:"soil"},{stage:"6.00",description:"First flower open",day:31.8,table:"soil"},{stage:"6.10",description:"10% of flowers produced have opened",day:35.9,table:"soil"},{stage:"6.30",description:"30% of flowers produced have opened",day:40.1,table:"soil"},{stage:"6.50",description:"50% of flowers produced have opened",day:43.5,table:"soil"},{stage:"6.90",description:"Flowering complete",day:49.4,table:"soil"},{stage:"8.00",description:"First silique shattered",day:48,table:"soil"}];zc.filter(o=>/^1\.\d\d$/.test(o.stage)&&o.table==="soil");zc.find(o=>o.stage==="5.10").day;zc.find(o=>o.stage==="6.90").day;zc[0].day;const ry=137.5*(Math.PI/180);function Al(o,e){return o.userData.organId=e,o.traverse(i=>i.userData.organId=e),o}const zC=new ho({color:4881471,roughness:.85,side:Kn}),Sl=new ho({color:7048266,roughness:.8,side:Kn}),ES=new ho({color:14271626,roughness:.9,side:Kn}),IC=new ho({color:16119280,roughness:.6,side:Kn}),BC=new ho({color:9083466,roughness:.75,side:Kn});function ds(o){return new xT(o,!1,"catmullrom",.5)}function ps(o,e,i){const r=new ci(o,e);return r.name=i,r}function FC(o,e=1){const i=new Ti,r=[new k(0,0,0),new k(.05,-.9,.03),new k(-.03,-1.9,-.02),new k(.02,-2.9,.01),new k(0,-3.2,0)],l=hs(ds(r),$s(.05,.008),24,{radialSegments:8});i.add(ps(l,ES,"Root_primary")),i.scale.set(1,Math.max(.06,e),1);const f=Math.round(10*Math.max(0,Math.min(1,e)));for(let h=0;h<f;h++){const d=.4+h/f*2.6,p=(.5+Math.random()*.4)*(.85+.3*o.rosetteCompactness),m=h%2===0?1:-1,v=.9+Math.random()*.3,g=new k(0,-d,0),S=g.clone().add(new k(m*Math.cos(v)*p,-p*.25,m*Math.sin(v)*p*.6)),x=g.clone().lerp(S,.5).add(new k(0,-.05,0)),T=hs(ds([g,x,S]),$s(.012,.003),6,{radialSegments:6});i.add(ps(T,ES,"Root_lateral"))}return Al(i,"root")}function HC(o,e){const i=new Ti,r=o.rosetteLeafCount;for(let l=0;l<r;l++){const h=l*ry,d=(.35+.5*(l/r))*1,p=.55*d*o.rosetteRadiusScale,m=.35*d*o.rosetteRadiusScale,v=(.15+.35*d)*o.rosetteRadiusScale*(1-.3*o.rosetteCompactness),g=.15+.9*o.rosetteCompactness,S=new ci(sy({length:p,maxWidth:m,foldDepth:.05*o.leafThicknessScale}),zC);S.name="LeafBlade_rosette",S.position.z=v;const x=ps(hs(ds([new k(0,0,0),new k(0,.01,v)]),$s(.012,.02),4,{radialSegments:6}),Sl,"Stem_petiole"),T=new Ti;T.add(x,S),T.position.set(0,.02*l,0),T.rotation.y=-h,T.rotation.x=-g,i.add(T)}return Al(i,"rosette_leaf")}const oy=$s(.05,.02);function GC(o){const e=[new k(0,0,0),new k(-.02,o*.4,.01),new k(.015,o*.75,-.01),new k(0,o,0)],i=hs(ds(e),oy,20,{radialSegments:8});return Al(ps(i,Sl,"Stem_axis"),"inflorescence_axis")}function VC(o){const e=new Ti,i=ps(hs(ds([new k(0,0,0),new k(0,0,o)]),$s(.012,.008),4,{radialSegments:6}),Sl,"Stem_pedicel");e.add(i);const r=new Ti;r.position.z=o;const l=4;for(let h=0;h<l;h++){const d=new ci(sy({length:.09,maxWidth:.045,widthPeakT:.7,foldDepth:.15,lengthSegments:4,widthSegments:4}),IC);d.name="LeafBlade_petal";const p=h/l*Math.PI*2;d.position.set(Math.cos(p)*.01,Math.sin(p)*.01,0),d.rotation.z=p,d.rotation.x=-Math.PI/2+.3,r.add(d)}const f=ps(hs(ds([new k(0,0,0),new k(0,0,.15)]),$s(.02,.015),4,{radialSegments:6}),Sl,"Stem_carpel");return r.add(f),e.add(r),Al(e,"flower")}function XC(o,e){const i=new Ti,r=ps(hs(ds([new k(0,0,0),new k(0,0,o)]),$s(.014,.01),4,{radialSegments:6}),Sl,"Stem_pedicel");i.add(r);const l=.55,f=.025*(.3+.7*e),h=hs(ds([new k(0,0,o),new k(0,0,o+l)]),wC(f,.028),8,{radialSegments:8});return i.add(ps(h,BC,"Silique_pod")),Al(i,"silique")}function kC(o,e,i){const r=new Ti,l=9,f=1,h=.75;for(let d=0;d<l;d++){const p=d/(l-1);if(p>f)continue;const m=o*(.35+.6*p),v=d*ry,g=oy(m/o),S=new k(Math.cos(v)*g,m,Math.sin(v)*g),x=.18*e.pedicelLengthScale;let T;p>h?T=VC(x):(T=XC(x,e.siliqueBluntness),T.rotation.x=Math.PI/2+(Math.random()-.5)*.3),T.position.copy(S),T.rotation.y+=v,r.add(T)}return r}function TS(o=Pc){const e=new Ti,i=2.4;return e.add(FC(o)),e.add(HC(o)),e.add(GC(i)),e.add(kC(i,o)),e}function bS(o){o.traverse(e=>{const i=e;i.geometry&&i.geometry.dispose()})}function qC(o){let e=o;for(;e;){if(e.userData.organId)return e.userData.organId;e=e.parent}return null}function YC(o,e){const i=new gT;i.background=new Re(988176);const r=new Ei(45,1,.01,1e3);r.position.set(4,3,4);const l=new dC({antialias:!0});l.setPixelRatio(Math.min(devicePixelRatio,2)),o.appendChild(l.domElement),i.add(new TT(16777215,3158826,1.1));const f=new RT(16777215,1.6);f.position.set(3,6,4),i.add(f);const h=new ci(new nm(3,32),new ho({color:2827287,roughness:1}));h.rotation.x=-Math.PI/2,h.position.y=-.01,i.add(h);let d=TS(Pc);i.add(d);const p=new mC(r,l.domElement);p.enableDamping=!0,p.target.set(0,.8,0),p.update();const m=new wT,v=new ce;let g=[];const S=new Map;function x(){for(const w of g){const F=w,B=F.material,L=S.get(F);B&&L&&(B.emissive=L)}g=[]}function T(w){x(),d.traverse(F=>{if(F.userData.organId===w&&F.isMesh){const B=F,L=B.material;L&&L.emissive&&(S.has(B)||S.set(B,L.emissive.clone()),L.emissive=new Re(3108175),g.push(B))}})}function A(w){const F=l.domElement.getBoundingClientRect();v.x=(w.clientX-F.left)/F.width*2-1,v.y=-((w.clientY-F.top)/F.height)*2+1,m.setFromCamera(v,r);const B=m.intersectObject(d,!0),L=B.length>0?qC(B[0].object):null;L?T(L):x(),e(L)}l.domElement.addEventListener("click",A);let M=0;const y=()=>{M=requestAnimationFrame(y),p.update(),l.render(i,r)};y();const P=()=>{const w=o.clientWidth||1,F=o.clientHeight||1;l.setSize(w,F),r.aspect=w/F,r.updateProjectionMatrix()};P();const O=new ResizeObserver(P);return O.observe(o),{setEcotype(w){x(),i.remove(d),bS(d),d=TS(w),i.add(d),e(null)},dispose(){cancelAnimationFrame(M),O.disconnect(),l.domElement.removeEventListener("click",A),bS(d),p.dispose(),l.dispose(),l.domElement.remove()}}}const WC={"OSD-120":{organism_part:"root",comparison:"Spaceflight vs. ground control (Day 13 root, GLDS/OSD-120)",n_genes_total:32833,top_upregulated:[{gene_id:"AT2G01422",log2fc:4.751},{gene_id:"AT2G05510",log2fc:4.645},{gene_id:"AT5G19890",log2fc:3.911},{gene_id:"AT2G26400",log2fc:2.714},{gene_id:"AT2G34317",log2fc:2.557},{gene_id:"AT2G30670",log2fc:2.504},{gene_id:"AT2G43920",log2fc:2.465},{gene_id:"AT4G11650",log2fc:2.411}],top_downregulated:[{gene_id:"AT5G13930",log2fc:-5.27},{gene_id:"AT5G09570",log2fc:-4.253},{gene_id:"AT3G51240",log2fc:-3.024},{gene_id:"AT5G33355",log2fc:-2.759},{gene_id:"AT2G04050",log2fc:-2.587},{gene_id:"AT3G30720",log2fc:-2.387},{gene_id:"AT2G21640",log2fc:-2.384},{gene_id:"AT1G01060",log2fc:-2.322}],source_file:"data/processed/OSD-120_root_flight_vs_ground_log2fc.csv"},"OSD-314":{organism_part:"whole seedling",comparison:"Microgravity (0g) vs. 1g ground control, whole seedling (OSD-314)",n_genes_total:32833,top_upregulated:[{gene_id:"AT4G28520",log2fc:5.543},{gene_id:"AT5G44120",log2fc:5.536},{gene_id:"AT1G73190",log2fc:5.527},{gene_id:"AT5G40420",log2fc:5.407},{gene_id:"ATCG00040",log2fc:4.739},{gene_id:"AT4G25140",log2fc:4.693},{gene_id:"AT3G54940",log2fc:4.684},{gene_id:"AT2G28490",log2fc:4.533}],top_downregulated:[{gene_id:"AT2G32810",log2fc:-4.873},{gene_id:"AT3G01345",log2fc:-4.445},{gene_id:"AT1G53480",log2fc:-4.437},{gene_id:"AT4G17090",log2fc:-4.174},{gene_id:"AT3G05727",log2fc:-4.08},{gene_id:"AT2G30750",log2fc:-3.878},{gene_id:"AT3G45140",log2fc:-3.76},{gene_id:"AT3G05730",log2fc:-3.694}],source_file:"data/processed/OSD-314_seedling_microgravity_vs_1g_log2fc.csv"}};function ly(o){const e=WC[o];return{studyId:o,comparison:e.comparison,nGenesTotal:e.n_genes_total,topUpregulated:e.top_upregulated,topDownregulated:e.top_downregulated,sourceFile:e.source_file}}const jC=[{id:"root",label:"Root system",travaCategory:"Root (root apex / root without apex)",geometryNote:"Branching pattern and primary/lateral proportions follow the single-cell root developmental atlas, not a scan of a specimen.",geometryCitations:["Shahan2022"],spaceflight:ly("OSD-120")},{id:"rosette_leaf",label:"Rosette leaf",travaCategory:"Third leaf (petiole / leaf blade / central vein)",geometryNote:"Leaf arrangement uses the ~137.5° golden-angle phyllotaxy widely reported for Arabidopsis rosettes; blade shape is a simplified obovate approximation, not a scan.",geometryCitations:[],spaceflight:null,spaceflightCaveat:"OSD-314 profiled whole seedlings, not dissected rosette leaves -- shown on Root only, where the tissue match is exact."},{id:"inflorescence_axis",label:"Inflorescence axis",travaCategory:"Axes (peduncles / inflorescence axis / internode)",geometryNote:"Simplified tapering-cylinder approximation of the bolting stem; proportions are illustrative, not measured.",geometryCitations:[],spaceflight:null},{id:"flower",label:"Flower",travaCategory:"Flower / Flower part (sepals, anthers, carpels, ovules, stigmatic tissue)",geometryNote:"Whorl arrangement (sepals/petals/stamens/carpels) is schematic; internal carpel/ovule proportions are informed by the digital 3D ovule-development atlas.",geometryCitations:["Vijayan2021"],spaceflight:null},{id:"silique",label:"Silique",travaCategory:"Silique development",geometryNote:"Elongated bicarpellate capsule approximation; internal seed-row layout informed by the same ovule-development atlas used for the flower.",geometryCitations:["Vijayan2021"],spaceflight:null}],ZC=ly("OSD-314"),uy="https://travadb.org",KC=o=>`https://osdr.nasa.gov/bio/repo/data/studies/${o}`;function AS({title:o,genes:e}){return Zt.jsxs("div",{className:"gene-panel",children:[Zt.jsx("h4",{children:o}),Zt.jsx("ul",{children:e.map(i=>Zt.jsxs("li",{children:[Zt.jsx("a",{href:`${uy}`,target:"_blank",rel:"noreferrer",title:"Look this locus up on TraVA",children:i.gene_id}),Zt.jsxs("span",{className:i.log2fc>=0?"up":"down",children:[i.log2fc>0?"+":"",i.log2fc.toFixed(2)]})]},i.gene_id))})]})}function QC({organ:o}){return Zt.jsxs("div",{className:"organ-info",children:[Zt.jsx("h2",{children:o.label}),Zt.jsxs("p",{className:"trava-category",children:["TraVA category: ",Zt.jsx("em",{children:o.travaCategory})," —"," ",Zt.jsx("a",{href:uy,target:"_blank",rel:"noreferrer",children:"browse real developmental expression on TraVA →"})]}),Zt.jsx("p",{className:"geometry-note",children:o.geometryNote}),o.geometryCitations.length>0&&Zt.jsxs("p",{className:"citations",children:["Geometry citations: ",o.geometryCitations.join(", ")]}),o.spaceflight?Zt.jsxs("div",{className:"spaceflight-block",children:[Zt.jsxs("h3",{children:["Real spaceflight response — ",o.spaceflight.studyId]}),Zt.jsx("p",{children:o.spaceflight.comparison}),Zt.jsxs("p",{className:"n-genes",children:[o.spaceflight.nGenesTotal.toLocaleString()," genes quantified. Log2 fold-change is a raw mean-CPM ratio, not a statistically tested DE call (no DESeq2, no p-values) — see methods."]}),Zt.jsxs("div",{className:"gene-panels",children:[Zt.jsx(AS,{title:"Highest flight/ground ratio",genes:o.spaceflight.topUpregulated}),Zt.jsx(AS,{title:"Lowest flight/ground ratio",genes:o.spaceflight.topDownregulated})]}),Zt.jsxs("p",{className:"source-link",children:["Source: ",Zt.jsx("code",{children:o.spaceflight.sourceFile})," ·"," ",Zt.jsxs("a",{href:KC(o.spaceflight.studyId),target:"_blank",rel:"noreferrer",children:[o.spaceflight.studyId," on NASA OSDR ↗"]})]})]}):Zt.jsxs("p",{className:"no-spaceflight",children:["No organ-specific spaceflight dataset is wired up for this organ yet.",o.spaceflightCaveat?` ${o.spaceflightCaveat}`:""]})]})}function JC({value:o,onChange:e}){return Zt.jsxs("div",{className:"ecotype-picker",children:[Zt.jsx("label",{htmlFor:"ecotype-select",children:"Ecotype"}),Zt.jsx("select",{id:"ecotype-select",value:o.id,onChange:i=>e(Vp.find(r=>r.id===i.target.value)??Pc),children:Vp.map(i=>Zt.jsx("option",{value:i.id,children:i.label},i.id))})]})}function $C({ecotype:o}){return Zt.jsxs("div",{className:"ecotype-info",children:[Zt.jsx("h3",{children:o.label}),Zt.jsxs("p",{className:"source-name",children:["Source accession id: ",Zt.jsx("code",{children:o.sourceName})]}),Zt.jsxs("dl",{children:[Zt.jsx("dt",{children:"Rosette compactness"}),Zt.jsx("dd",{children:o.provenance.compactness.value}),Zt.jsx("dt",{children:"Inflorescence / pedicel"}),Zt.jsx("dd",{children:o.provenance.pedicel.value}),Zt.jsx("dt",{children:"Leaf count / thickness"}),Zt.jsx("dd",{children:o.provenance.leaf.value})]}),o.referencePhoto&&Zt.jsx("p",{className:"reference-photo",children:Zt.jsx("a",{href:o.referencePhoto.url,target:"_blank",rel:"noreferrer",children:"Real accession-labeled reference photos (Namin et al. 2018, CC BY 4.0) ↗"})})]})}function t2(){const o=eo.useRef(null),e=eo.useRef(null),[i,r]=eo.useState(null),[l,f]=eo.useState(Pc);eo.useEffect(()=>{if(!o.current)return;const p=YC(o.current,r);return e.current=p,()=>{e.current=null,p.dispose()}},[]);const h=p=>{var m;f(p),r(null),(m=e.current)==null||m.setEcotype(p)},d=jC.find(p=>p.id===i)??null;return Zt.jsxs("div",{className:"app",children:[Zt.jsxs("header",{className:"app-header",children:[Zt.jsx("h1",{children:"Arabidopsis Atlas"}),Zt.jsxs("p",{children:["Click an organ to explore it. Started from"," ",Zt.jsx("a",{href:"https://github.com/dr-richard-barker/rice-atlas",target:"_blank",rel:"noreferrer",children:"rice-atlas"})," ","— see the ",Zt.jsx("a",{href:"https://github.com/dr-richard-barker/arabidopsis-atlas#readme",target:"_blank",rel:"noreferrer",children:"README"})," for what's actually real data here vs. simplified geometry."," ","Also see the ",Zt.jsx("a",{href:"growth.html",children:"seed-to-flowering growth animation →"})]}),Zt.jsx(JC,{value:l,onChange:h})]}),Zt.jsxs("div",{className:"app-body",children:[Zt.jsx("div",{className:"viewer-container",ref:o}),Zt.jsxs("aside",{className:"sidebar",children:[Zt.jsx($C,{ecotype:l}),d?Zt.jsx(QC,{organ:d}):Zt.jsxs("div",{className:"welcome",children:[Zt.jsx("p",{children:"No organ selected. Click any part of the plant."}),Zt.jsxs("p",{className:"hint",children:["Whole-seedling spaceflight coverage (",ZC.studyId,", real data, not organ-specific) is documented in ",Zt.jsx("code",{children:"data/README.md"})," rather than shown here, since it isn't tissue-specific."]})]})]})]})]})}tE.createRoot(document.getElementById("root")).render(Zt.jsx(eo.StrictMode,{children:Zt.jsx(t2,{})}));
