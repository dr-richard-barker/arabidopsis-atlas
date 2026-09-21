(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var fd={exports:{}},rl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function KM(){if(gv)return rl;gv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var d in l)d!=="key"&&(f[d]=l[d])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:f}}return rl.Fragment=e,rl.jsx=i,rl.jsxs=i,rl}var _v;function QM(){return _v||(_v=1,fd.exports=KM()),fd.exports}var Ut=QM(),hd={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function JM(){if(vv)return le;vv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.for("react.view_transition"),x=Symbol.iterator;function E(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function O(I,ut,$){this.props=I,this.context=ut,this.refs=y,this.updater=$||A}O.prototype.isReactComponent={},O.prototype.setState=function(I,ut){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ut,"setState")},O.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function P(){}P.prototype=O.prototype;function w(I,ut,$){this.props=I,this.context=ut,this.refs=y,this.updater=$||A}var F=w.prototype=new P;F.constructor=w,M(F,O.prototype),F.isPureReactComponent=!0;var B=Array.isArray;function L(){}var q={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function C(I,ut,$){var it=$.ref;return{$$typeof:o,type:I,key:ut,ref:it!==void 0?it:null,props:$}}function V(I,ut){return C(I.type,ut,I.props)}function at(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function ct(I){var ut={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function($){return ut[$]})}var gt=/\/+/g;function lt(I,ut){return typeof I=="object"&&I!==null&&I.key!=null?ct(""+I.key):ut.toString(36)}function j(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(ut){I.status==="pending"&&(I.status="fulfilled",I.value=ut)},function(ut){I.status==="pending"&&(I.status="rejected",I.reason=ut)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function st(I,ut,$,it,xt){var Nt=typeof I;(Nt==="undefined"||Nt==="boolean")&&(I=null);var At=!1;if(I===null)At=!0;else switch(Nt){case"bigint":case"string":case"number":At=!0;break;case"object":switch(I.$$typeof){case o:case e:At=!0;break;case v:return At=I._init,st(At(I._payload),ut,$,it,xt)}}if(At)return xt=xt(I),At=it===""?"."+lt(I,0):it,B(xt)?($="",At!=null&&($=At.replace(gt,"$&/")+"/"),st(xt,ut,$,"",function(z){return z})):xt!=null&&(at(xt)&&(xt=V(xt,$+(xt.key==null||I&&I.key===xt.key?"":(""+xt.key).replace(gt,"$&/")+"/")+At)),ut.push(xt)),1;At=0;var Mt=it===""?".":it+":";if(B(I))for(var Yt=0;Yt<I.length;Yt++)it=I[Yt],Nt=Mt+lt(it,Yt),At+=st(it,ut,$,Nt,xt);else if(Yt=E(I),typeof Yt=="function")for(I=Yt.call(I),Yt=0;!(it=I.next()).done;)it=it.value,Nt=Mt+lt(it,Yt++),At+=st(it,ut,$,Nt,xt);else if(Nt==="object"){if(typeof I.then=="function")return st(j(I),ut,$,it,xt);throw ut=String(I),Error("Objects are not valid as a React child (found: "+(ut==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ut)+"). If you meant to render a collection of children, use an array instead.")}return At}function K(I,ut,$){if(I==null)return I;var it=[],xt=0;return st(I,it,"","",function(Nt){return ut.call($,Nt,xt++)}),it}function _t(I){if(I._status===-1){var ut=I._result,$=ut();$.then(function(it){(I._status===0||I._status===-1)&&(I._status=1,I._result=it,$.status===void 0&&($.status="fulfilled",$.value=it))},function(it){(I._status===0||I._status===-1)&&(I._status=2,I._result=it,$.status===void 0&&($.status="rejected",$.reason=it))}),I._status===-1&&(I._status=0,I._result=$)}if(I._status===1)return I._result.default;throw I._result}var St=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ut=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ut))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Gt(I){var ut=q.T,$={};$.types=ut!==null?ut.types:null,q.T=$;try{var it=I(),xt=q.S;xt!==null&&xt($,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(L,St)}catch(Nt){St(Nt)}finally{ut!==null&&$.types!==null&&(ut.types=$.types),q.T=ut}}function re(I){var ut=q.T;if(ut!==null){var $=ut.types;$===null?ut.types=[I]:$.indexOf(I)===-1&&$.push(I)}else Gt(re.bind(null,I))}var be={map:K,forEach:function(I,ut,$){K(I,function(){ut.apply(this,arguments)},$)},count:function(I){var ut=0;return K(I,function(){ut++}),ut},toArray:function(I){return K(I,function(ut){return ut})||[]},only:function(I){if(!at(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return le.Activity=g,le.Children=be,le.Component=O,le.Fragment=i,le.Profiler=l,le.PureComponent=w,le.StrictMode=r,le.Suspense=m,le.ViewTransition=S,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,le.__COMPILER_RUNTIME={__proto__:null,c:function(I){return q.H.useMemoCache(I)}},le.addTransitionType=re,le.cache=function(I){return function(){return I.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(I,ut,$){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var it=M({},I.props),xt=I.key;if(ut!=null)for(Nt in ut.key!==void 0&&(xt=""+ut.key),ut)!D.call(ut,Nt)||Nt==="key"||Nt==="__self"||Nt==="__source"||Nt==="ref"&&ut.ref===void 0||(it[Nt]=ut[Nt]);var Nt=arguments.length-2;if(Nt===1)it.children=$;else if(1<Nt){for(var At=Array(Nt),Mt=0;Mt<Nt;Mt++)At[Mt]=arguments[Mt+2];it.children=At}return C(I.type,xt,it)},le.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:f,_context:I},I},le.createElement=function(I,ut,$){var it,xt={},Nt=null;if(ut!=null)for(it in ut.key!==void 0&&(Nt=""+ut.key),ut)D.call(ut,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(xt[it]=ut[it]);var At=arguments.length-2;if(At===1)xt.children=$;else if(1<At){for(var Mt=Array(At),Yt=0;Yt<At;Yt++)Mt[Yt]=arguments[Yt+2];xt.children=Mt}if(I&&I.defaultProps)for(it in At=I.defaultProps,At)xt[it]===void 0&&(xt[it]=At[it]);return C(I,Nt,xt)},le.createRef=function(){return{current:null}},le.forwardRef=function(I){return{$$typeof:d,render:I}},le.isValidElement=at,le.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:_t}},le.memo=function(I,ut){return{$$typeof:p,type:I,compare:ut===void 0?null:ut}},le.startTransition=Gt,le.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},le.use=function(I){return q.H.use(I)},le.useActionState=function(I,ut,$){return q.H.useActionState(I,ut,$)},le.useCallback=function(I,ut){return q.H.useCallback(I,ut)},le.useContext=function(I){return q.H.useContext(I)},le.useDebugValue=function(){},le.useDeferredValue=function(I,ut){return q.H.useDeferredValue(I,ut)},le.useEffect=function(I,ut){return q.H.useEffect(I,ut)},le.useEffectEvent=function(I){return q.H.useEffectEvent(I)},le.useId=function(){return q.H.useId()},le.useImperativeHandle=function(I,ut,$){return q.H.useImperativeHandle(I,ut,$)},le.useInsertionEffect=function(I,ut){return q.H.useInsertionEffect(I,ut)},le.useLayoutEffect=function(I,ut){return q.H.useLayoutEffect(I,ut)},le.useMemo=function(I,ut){return q.H.useMemo(I,ut)},le.useOptimistic=function(I,ut){return q.H.useOptimistic(I,ut)},le.useReducer=function(I,ut,$){return q.H.useReducer(I,ut,$)},le.useRef=function(I){return q.H.useRef(I)},le.useState=function(I){return q.H.useState(I)},le.useSyncExternalStore=function(I,ut,$){return q.H.useSyncExternalStore(I,ut,$)},le.useTransition=function(){return q.H.useTransition()},le.version="19.3.0",le}var Sv;function jp(){return Sv||(Sv=1,hd.exports=JM()),hd.exports}var Ta=jp(),dd={exports:{}},ol={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function $M(){return yv||(yv=1,(function(o){function e(j,st){var K=j.length;j.push(st);t:for(;0<K;){var _t=K-1>>>1,St=j[_t];if(0<l(St,st))j[_t]=st,j[K]=St,K=_t;else break t}}function i(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var st=j[0],K=j.pop();if(K!==st){j[0]=K;t:for(var _t=0,St=j.length,Gt=St>>>1;_t<Gt;){var re=2*(_t+1)-1,be=j[re],I=re+1,ut=j[I];if(0>l(be,K))I<St&&0>l(ut,be)?(j[_t]=ut,j[I]=K,_t=I):(j[_t]=be,j[re]=K,_t=re);else if(I<St&&0>l(ut,K))j[_t]=ut,j[I]=K,_t=I;else break t}}return st}function l(j,st){var K=j.sortIndex-st.sortIndex;return K!==0?K:j.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,g=null,S=3,x=!1,E=!1,A=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function w(j){for(var st=i(p);st!==null;){if(st.callback===null)r(p);else if(st.startTime<=j)r(p),st.sortIndex=st.expirationTime,e(m,st);else break;st=i(p)}}function F(j){if(A=!1,w(j),!E)if(i(m)!==null)E=!0,B||(B=!0,at());else{var st=i(p);st!==null&&lt(F,st.startTime-j)}}var B=!1,L=-1,q=5,D=-1;function C(){return M?!0:!(o.unstable_now()-D<q)}function V(){if(M=!1,B){var j=o.unstable_now();D=j;var st=!0;try{t:{E=!1,A&&(A=!1,O(L),L=-1),x=!0;var K=S;try{e:{for(w(j),g=i(m);g!==null&&!(g.expirationTime>j&&C());){var _t=g.callback;if(typeof _t=="function"){g.callback=null,S=g.priorityLevel;var St=_t(g.expirationTime<=j);if(j=o.unstable_now(),typeof St=="function"){g.callback=St,w(j),st=!0;break e}g===i(m)&&r(m),w(j)}else r(m);g=i(m)}if(g!==null)st=!0;else{var Gt=i(p);Gt!==null&&lt(F,Gt.startTime-j),st=!1}}break t}finally{g=null,S=K,x=!1}st=void 0}}finally{st?at():B=!1}}}var at;if(typeof P=="function")at=function(){P(V)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,gt=ct.port2;ct.port1.onmessage=V,at=function(){gt.postMessage(null)}}else at=function(){y(V,0)};function lt(j,st){L=y(function(){j(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(j){j.callback=null},o.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<j?Math.floor(1e3/j):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(j){switch(S){case 1:case 2:case 3:var st=3;break;default:st=S}var K=S;S=st;try{return j()}finally{S=K}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(j,st){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=S;S=j;try{return st()}finally{S=K}},o.unstable_scheduleCallback=function(j,st,K){var _t=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?_t+K:_t):K=_t,j){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=K+St,j={id:v++,callback:st,priorityLevel:j,startTime:K,expirationTime:St,sortIndex:-1},K>_t?(j.sortIndex=K,e(p,j),i(m)===null&&j===i(p)&&(A?(O(L),L=-1):A=!0,lt(F,K-_t))):(j.sortIndex=St,e(m,j),E||x||(E=!0,B||(B=!0,at()))),j},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(j){var st=S;return function(){var K=S;S=st;try{return j.apply(this,arguments)}finally{S=K}}}})(md)),md}var xv;function tE(){return xv||(xv=1,pd.exports=$M()),pd.exports}var gd={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function eE(){if(Mv)return wn;Mv=1;var o=jp();function e(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,g,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:x===h?h:""+x,children:v,containerInfo:g,implementation:S}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.browser=function(v){return{$$typeof:f,_reason:v}},wn.createPortal=function(v,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(v,g,null,S)},wn.flushSync=function(v){var g=m.T,S=r.p;try{if(m.T=null,r.p=2,v)return v()}finally{m.T=g,r.p=S,r.d.f()}},wn.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(v,g))},wn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},wn.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var S=g.as,x=p(S,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,A=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?r.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:E,fetchPriority:A}):S==="script"&&r.d.X(v,{crossOrigin:x,integrity:E,fetchPriority:A,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},wn.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=p(g.as,g.crossOrigin);r.d.M(v,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(v)},wn.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,x=p(S,g.crossOrigin);r.d.L(v,S,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},wn.preloadModule=function(v,g){if(typeof v=="string")if(g){var S=p(g.as,g.crossOrigin);r.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(v)},wn.requestFormReset=function(v){r.d.r(v)},wn.unstable_batchedUpdates=function(v,g){return v(g)},wn.useFormState=function(v,g,S){return m.H.useFormState(v,g,S)},wn.useFormStatus=function(){return m.H.useHostTransitionStatus()},wn.version="19.3.0",wn}var Ev;function nE(){if(Ev)return gd.exports;Ev=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),gd.exports=eE(),gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function iE(){if(Tv)return ol;Tv=1;var o=tE(),e=jp(),i=nE();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return m(c),t;if(u===s)return m(c),n;u=u.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=u;else{for(var _=!1,T=c.child;T;){if(T===a){_=!0,a=c,s=u;break}if(T===s){_=!0,s=c,a=u;break}T=T.sibling}if(!_){for(T=u.child;T;){if(T===a){_=!0,a=u,s=c;break}if(T===s){_=!0,s=u,a=c;break}T=T.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,s,c,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,c,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,s,c,u))return!0;t=t.sibling}return!1}function S(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function x(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=S(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var y=null,O=null;function P(t,n,a){return t===a?!0:t===n?(y=t,!0):!1}function w(t,n,a){return t===a?(O=t,!1):t===n?(O!==null&&(y=t),!0):!1}function F(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function B(t,n,a){for(var s=0,c=t;c;c=a(c))s++;c=0;for(var u=n;u;u=a(u))c++;for(;0<s-c;)t=a(t),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var L=Object.assign,q=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),ct=Symbol.for("react.profiler"),gt=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Gt=Symbol.for("react.activity"),re=Symbol.for("react.legacy_hidden"),be=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),ut=Symbol.for("react.recoverable"),$=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Symbol.for("react.client.reference");function Nt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===xt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case ct:return"Profiler";case at:return"StrictMode";case st:return"Suspense";case K:return"SuspenseList";case Gt:return"Activity";case I:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case lt:return t.displayName||"Context";case gt:return(t._context.displayName||"Context")+".Consumer";case j:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _t:return n=t.displayName||null,n!==null?n:Nt(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return Nt(t(n))}catch{}}return null}var At=Array.isArray,Mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Yt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},He=[],se=-1;function Qt(t){return{current:t}}function Lt(t){0>se||(t.current=He[se],He[se]=null,se--)}function ie(t,n){se++,He[se]=t.current,t.current=n}var Ft=Qt(null),oe=Qt(null),qe=Qt(null),We=Qt(null);function U(t,n){switch(ie(qe,n),ie(oe,t),ie(Ft,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?b0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=b0(n),t=A0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ft),ie(Ft,t)}function b(){Lt(Ft),Lt(oe),Lt(qe)}function et(t){var n=t.memoizedState;n!==null&&(Hr._currentValue=n.memoizedState,ie(We,t)),n=Ft.current;var a=A0(n,t.type);n!==a&&(ie(oe,t),ie(Ft,a))}function dt(t){oe.current===t&&(Lt(Ft),Lt(oe)),We.current===t&&(Lt(We),Hr._currentValue=z)}var vt,ft;function Xt(t){if(vt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);vt=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+t+ft}var Rt=!1;function jt(t,n){if(!t||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(Dt){var X=Dt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(Dt){X=Dt}pt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),pt=!0,new t}finally{pt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Dt){X=Dt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(Dt){if(Dt&&X&&typeof Dt.stack=="string")return[Dt.stack,X.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),_=u[0],T=u[1];if(_&&T){var N=_.split(`
`),W=T.split(`
`);for(c=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;c<W.length&&!W[c].includes("DetermineComponentFrameRoot");)c++;if(s===N.length||c===W.length)for(s=N.length-1,c=W.length-1;1<=s&&0<=c&&N[s]!==W[c];)c--;for(;1<=s&&0<=c;s--,c--)if(N[s]!==W[c]){if(s!==1||c!==1)do if(s--,c--,0>c||N[s]!==W[c]){var nt=`
`+N[s].replace(" at new "," at ");return t.displayName&&nt.includes("<anonymous>")&&(nt=nt.replace("<anonymous>",t.displayName)),nt}while(1<=s&&0<=c);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xt(a):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return Xt(t.type);case 16:return Xt("Lazy");case 13:return t.child!==n&&n!==null?Xt("Suspense Fallback"):Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return jt(t.type,!1);case 11:return jt(t.type.render,!1);case 1:return jt(t.type,!0);case 31:return Xt("Activity");case 30:return Xt("ViewTransition");default:return""}}function Tt(t){try{var n="",a=null;do n+=Kt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ot=Object.prototype.hasOwnProperty,ne=o.unstable_scheduleCallback,Zt=o.unstable_cancelCallback,Pt=o.unstable_shouldYield,fe=o.unstable_requestPaint,G=o.unstable_now,bt=o.unstable_getCurrentPriorityLevel,wt=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,yt=o.unstable_NormalPriority,mt=o.unstable_LowPriority,Wt=o.unstable_IdlePriority,ce=o.log,Ge=o.unstable_setDisableYieldValue,Me=null,$e=null;function pn(t){if(typeof ce=="function"&&Ge(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Me,t)}catch{}}var Un=Math.clz32?Math.clz32:wl,na=Math.log,go=Math.LN2;function wl(t){return t>>>=0,t===0?32:31-(na(t)/go|0)|0}var gs=256,ia=262144,_s=4194304;function fi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vs(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,u=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~u,s!==0?c=fi(s):(_&=T,_!==0?c=fi(_):a||(a=T&~t,a!==0&&(c=fi(a))))):(T=s&~u,T!==0?c=fi(T):_!==0?c=fi(_):a||(a=s&~t,a!==0&&(c=fi(a)))),c===0?0:n!==0&&n!==c&&(n&u)===0&&(u=c&-c,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:c}function Ra(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Dl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Un(a),c=1<<s;n|=t[s],a&=~c}return n}function Bu(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ul(){var t=_s;return _s<<=1,(_s&62914560)===0&&(_s=4194304),t}function _o(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ss(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Fu(t,n,a,s,c,u){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,N=t.expirationTimes,W=t.hiddenUpdates;for(a=_&~a;0<a;){var nt=31-Un(a),pt=1<<nt;T[nt]=0,N[nt]=-1;var X=W[nt];if(X!==null)for(W[nt]=null,nt=0;nt<X.length;nt++){var tt=X[nt];tt!==null&&(tt.lane&=-536870913)}a&=~pt}s!==0&&R(t,s,0),u!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=u&~(_&~n))}function R(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Un(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Z(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Un(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function rt(t,n){var a=n&-n;return a=(a&42)!==0?1:ot(a),(a&(t.suspendedLanes|n))!==0?0:a}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Q(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Et(){var t=Yt.p;return t!==0?t:(t=window.event,t===void 0?32:cv(t.type))}function zt(t,n){var a=Yt.p;try{return Yt.p=t,n()}finally{Yt.p=a}}var Bt=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Bt,kt="__reactProps$"+Bt,ee="__reactContainer$"+Bt,$t="__reactEvents$"+Bt,Se="__reactListeners$"+Bt,Pe="__reactHandles$"+Bt,Qe="__reactResources$"+Bt,Ne="__reactMarker$"+Bt,Ce="__reactLoad$"+Bt;function te(t){delete t[Ct],delete t[kt],delete t[Se],delete t[Pe]}function Le(t){var n;if(n=t[Ct])return n;for(var a=t.parentNode;a;){if(n=a[ee]||a[Ct]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=X0(t);t!==null;){if(a=t[Ct])return a;t=X0(t)}return n}t=a,a=t.parentNode}return null}function ge(t){if(t=t[Ct]||t[ee]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function $n(t){var n=t[Qe];return n||(n=t[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function we(t){t[Ne]=!0}function Ca(t){t[Ce]=void 0}var je=new Set,zn={};function ln(t,n){nn(t,n),nn(t+"Capture",n)}function nn(t,n){for(zn[t]=n,t=0;t<n.length;t++)je.add(n[t])}var Nn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ir={},Ii={};function my(t){return Ot.call(Ii,t)?!0:Ot.call(ir,t)?!1:Nn.test(t)?Ii[t]=!0:(ir[t]=!0,!1)}var De=!1;function fm(){var t=De;return De=!1,t}function Nl(t,n,a){if(my(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Ll(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function aa(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ti(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gy(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,u=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,u.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Hu(t){if(!t._valueTracker){var n=hm(t)?"checked":"value";t._valueTracker=gy(t,n,""+t[n])}}function dm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=hm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var _y=/[\n"\\]/g;function hi(t){return t.replace(_y,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gu(t,n,a,s,c,u,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ti(n)):t.value!==""+ti(n)&&(t.value=""+ti(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Vu(t,ti(t.value)):Vu(t,ti(n)):a!=null?Vu(t,ti(a)):s!=null&&t.removeAttribute("value"),c==null&&u!=null&&(t.defaultChecked=!!u),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ti(T):t.removeAttribute("name")}function pm(t,n,a,s,c,u,_,T){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Hu(t);return}a=a!=null?""+ti(a):"",n=n!=null?""+ti(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Hu(t)}function Vu(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ar(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ti(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function mm(t,n,a){if(n!=null&&(n=""+ti(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ti(a):""}function gm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ti(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Hu(t)}function sr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var vy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _m(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||vy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function vm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",De=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(_m(t,c,s),De=!0)}else for(var u in n)n.hasOwnProperty(u)&&_m(t,u,n[u])}function Xu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ol(t){return yy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bi(){}var ku=null;function qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rr=null,or=null;function Sm(t){var n=ge(t);if(n&&(t=n.stateNode)){var a=t[kt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Gu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[kt]||null;if(!c)throw Error(r(90));Gu(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&dm(s)}break t;case"textarea":mm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ar(t,!!a.multiple,n,!1)}}}var Yu=!1;function ym(t,n,a){if(Yu)return t(n,a);Yu=!0;try{var s=t(n);return s}finally{if(Yu=!1,(rr!==null||or!==null)&&(Oc(),rr&&(n=rr,t=or,or=rr=null,Sm(n),t)))for(n=0;n<t.length;n++)Sm(t[n])}}function vo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[kt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wu=!1;if(sa)try{var So={};Object.defineProperty(So,"passive",{get:function(){Wu=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Wu=!1}var wa=null,ju=null,Pl=null;function xm(){if(Pl)return Pl;var t,n=ju,a=n.length,s,c="value"in wa?wa.value:wa.textContent,u=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===c[u-s];s++);return Pl=c.slice(t,1<s?1-s:void 0)}function zl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Il(){return!0}function Mm(){return!1}function In(t){function n(a,s,c,u,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=u,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(u):u[T]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Il:Mm,this.isPropagationStopped=Mm,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),n}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=In(Da),yo=L({},Da,{view:0,detail:0}),xy=In(yo),Zu,Ku,xo,Fl=L({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(Zu=t.screenX-xo.screenX,Ku=t.screenY-xo.screenY):Ku=Zu=0,xo=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:Ku}}),Em=In(Fl),My=L({},Fl,{dataTransfer:0}),Ey=In(My),Ty=L({},yo,{relatedTarget:0}),Qu=In(Ty),by=L({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),Ay=In(by),Ry=L({},Da,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cy=In(Ry),wy=L({},Da,{data:0}),Tm=In(wy),Dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ly(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ny[t])?!!n[t]:!1}function Ju(){return Ly}var Oy=L({},yo,{key:function(t){if(t.key){var n=Dy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ju,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Py=In(Oy),zy=L({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bm=In(zy),Iy=L({},Da,{submitter:0}),By=In(Iy),Fy=L({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ju}),Hy=In(Fy),Gy=L({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vy=In(Gy),Xy=L({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ky=In(Xy),qy=L({},Da,{newState:0,oldState:0,source:0}),Yy=In(qy),Wy=[9,13,27,32],$u=sa&&"CompositionEvent"in window,Mo=null;sa&&"documentMode"in document&&(Mo=document.documentMode);var jy=sa&&"TextEvent"in window&&!Mo,Am=sa&&(!$u||Mo&&8<Mo&&11>=Mo),Rm=" ",Cm=!1;function wm(t,n){switch(t){case"keyup":return Wy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lr=!1;function Zy(t,n){switch(t){case"compositionend":return Dm(n);case"keypress":return n.which!==32?null:(Cm=!0,Rm);case"textInput":return t=n.data,t===Rm&&Cm?null:t;default:return null}}function Ky(t,n){if(lr)return t==="compositionend"||!$u&&wm(t,n)?(t=xm(),Pl=ju=wa=null,lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Am&&n.locale!=="ko"?null:n.data;default:return null}}var Qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Um(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Qy[t.type]:n==="textarea"}function Nm(t,n,a,s){rr?or?or.push(s):or=[s]:rr=s,n=Hc(n,"onChange"),0<n.length&&(a=new Bl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Eo=null,To=null;function Jy(t){S0(t,0)}function Hl(t){var n=mn(t);if(dm(n))return t}function Lm(t,n){if(t==="change")return n}var Om=!1;if(sa){var tf;if(sa){var ef="oninput"in document;if(!ef){var Pm=document.createElement("div");Pm.setAttribute("oninput","return;"),ef=typeof Pm.oninput=="function"}tf=ef}else tf=!1;Om=tf&&(!document.documentMode||9<document.documentMode)}function zm(){Eo&&(Eo.detachEvent("onpropertychange",Im),To=Eo=null)}function Im(t){if(t.propertyName==="value"&&Hl(To)){var n=[];Nm(n,To,t,qu(t)),ym(Jy,n)}}function $y(t,n,a){t==="focusin"?(zm(),Eo=n,To=a,Eo.attachEvent("onpropertychange",Im)):t==="focusout"&&zm()}function tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(To)}function ex(t,n){if(t==="click")return Hl(n)}function nx(t,n){if(t==="input"||t==="change")return Hl(n)}function ix(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:ix;function bo(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ot.call(n,c)||!ei(t[c],n[c]))return!1}return!0}function nf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fm(t,n){var a=Bm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Bm(a)}}function Hm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Hm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Gm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=nf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=nf(t.document)}return n}function af(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ax=sa&&"documentMode"in document&&11>=document.documentMode,cr=null,sf=null,Ao=null,rf=!1;function Vm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rf||cr==null||cr!==nf(s)||(s=cr,"selectionStart"in s&&af(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ao&&bo(Ao,s)||(Ao=s,s=Hc(sf,"onSelect"),0<s.length&&(n=new Bl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=cr)))}function ys(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ur={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},of={},Xm={};sa&&(Xm=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function xs(t){if(of[t])return of[t];if(!ur[t])return t;var n=ur[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xm)return of[t]=n[a];return t}var km=xs("animationend"),qm=xs("animationiteration"),Ym=xs("animationstart"),sx=xs("transitionrun"),rx=xs("transitionstart"),ox=xs("transitioncancel"),Wm=xs("transitionend"),jm=new Map,lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lf.push("scrollEnd");function bi(t,n){jm.set(t,n),ln(n,[t])}var lx=0;function ra(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=wi.identifierPrefix;var a=lx++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Zm(t){if(t==null||typeof t=="string")return t;var n=null,a=Dr;if(a!==null)for(var s=0;s<a.length;s++){var c=t[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function oa(t,n){return t=Zm(t),n=Zm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],fr=0,cf=0;function Vl(){for(var t=fr,n=cf=fr=0;n<t;){var a=di[n];di[n++]=null;var s=di[n];di[n++]=null;var c=di[n];di[n++]=null;var u=di[n];if(di[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}u!==0&&Km(a,c,u)}}function Xl(t,n,a,s){di[fr++]=t,di[fr++]=n,di[fr++]=a,di[fr++]=s,cf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function uf(t,n,a,s){return Xl(t,n,a,s),kl(t)}function Ms(t,n){return Xl(t,null,null,n),kl(t)}function Km(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,u=t.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(c=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,c&&n!==null&&(c=31-Un(a),t=u.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),u):null}function kl(t){if(50<jo)throw jo=0,Lc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var hr={};function cx(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,s){return new cx(t,n,a,s)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Qm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ql(t,n,a,s,c,u){var _=0;if(s=t,typeof s=="function")ff(s)&&(_=1);else if(typeof s=="string")_=IM(t,a,Ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Gt:return t=Xn(31,a,n,c),t.elementType=Gt,t.lanes=u,t;case V:return Es(a.children,c,u,n);case at:_=8,c|=24;break;case ct:return t=Xn(12,a,n,c|2),t.elementType=ct,t.lanes=u,t;case st:return t=Xn(13,a,n,c),t.elementType=st,t.lanes=u,t;case K:return t=Xn(19,a,n,c),t.elementType=K,t.lanes=u,t;case re:case I:return t=c|32,t=Xn(30,a,n,t),t.elementType=I,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case lt:_=10;break t;case gt:_=9;break t;case j:_=11;break t;case _t:_=14;break t;case St:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Xn(_,a,n,c),n.elementType=t,n.type=s,n.lanes=u,n}function Es(t,n,a,s){return t=Xn(7,t,s,n),t.lanes=a,t}function hf(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function Jm(t){var n=Xn(18,null,null,0);return n.stateNode=t,n}function df(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var $m=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=$m.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Tt(n)},$m.set(t,n),n)}return{value:t,source:n,stack:Tt(n)}}var dr=[],pr=0,Yl=null,Ro=0,mi=[],gi=0,Ua=null,Fi=1,Hi="";function ca(t,n){dr[pr++]=Ro,dr[pr++]=Yl,Yl=t,Ro=n}function tg(t,n,a){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Ua,Ua=t;var s=Fi;t=Hi;var c=32-Un(s)-1;s&=~(1<<c),a+=1;var u=32-Un(n)+c;if(30<u){var _=c-c%5;u=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Fi=1<<32-Un(n)+c|a<<c|s,Hi=u+t}else Fi=1<<u|a<<c|s,Hi=t}function Wl(t){t.return!==null&&(ca(t,1),tg(t,1,0))}function pf(t){for(;t===Yl;)Yl=dr[--pr],dr[pr]=null,Ro=dr[--pr],dr[pr]=null;for(;t===Ua;)Ua=mi[--gi],mi[gi]=null,Hi=mi[--gi],mi[gi]=null,Fi=mi[--gi],mi[gi]=null}function eg(t,n){mi[gi++]=Fi,mi[gi++]=Hi,mi[gi++]=Ua,Fi=n.id,Hi=n.overflow,Ua=t}var yn=null,Ze=null,_e=!1,Na=null,_i=!1,mf=Error(r(519));function La(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(pi(n,t)),mf}function ng(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ct]=t,n[kt]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Ko.length;a++)xe(Ko[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),pm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),gm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||E0(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||La(t,!0)}function jl(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:yn=yn.return}}function mr(t){if(t!==yn)return!1;if(!_e)return jl(t),_e=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qh(t.type,t.memoizedProps)),a=!a),a&&Ze&&La(t),jl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=V0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=V0(t)}else n===27?(n=Ze,Za(t.type)?(t=td,td=null,Ze=t):Ze=n):Ze=yn?Si(t.stateNode.nextSibling):null;return!0}function Ts(){Ze=yn=null,_e=!1}function gf(){var t=Na;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Na=null),t}function Co(t){Na===null?Na=[t]:Na.push(t)}var _f=Qt(null),bs=null,ua=null;function Oa(t,n,a){ie(_f,n._currentValue),n._currentValue=a}function fa(t){t._currentValue=_f.current,Lt(_f)}function Zl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function vf(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var u=c.dependencies;if(u!==null){var _=c.child;u=u.firstContext;t:for(;u!==null;){var T=u;u=c;for(var N=0;N<n.length;N++)if(T.context===n[N]){u.lanes|=a,T=u.alternate,T!==null&&(T.lanes|=a),Zl(u.return,a,t),s||(_=null);break t}u=T.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,u=_.alternate,u!==null&&(u.lanes|=a),Zl(_,a,t),_=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),Zl(c.return,a,t),_=c.child,_=_!==null?_.sibling:null):_=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function As(t,n,a,s){t=null;for(var c=n,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var T=c.type;ei(c.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(c===We.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Hr):t=[Hr])}c=c.return}return t!==null&&vf(n,t,a,s),n.flags|=262144,t!==null}function Kl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rs(t){bs=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return ig(bs,t)}function Ql(t,n){return bs===null&&Rs(t),ig(t,n)}function ig(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(r(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return a}var ux=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},fx=o.unstable_scheduleCallback,hx=o.unstable_NormalPriority,cn={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sf(){return{controller:new ux,data:new Map,refCount:0}}function wo(t){t.refCount--,t.refCount===0&&fx(hx,function(){t.controller.abort()})}function ag(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var Do=null;function dx(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Uo=null,yf=0,Cs=0,gr=null;function px(t,n){if(Uo===null){var a=Uo=[];yf=0,Cs=zh(),gr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return yf++,n.then(sg,sg),n}function sg(){if(--yf===0&&(Do=null,Uo!==null)){gr!==null&&(gr.status="fulfilled");var t=Uo;Uo=null,Cs=0,gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function mx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var rg=Mt.S;Mt.S=function(t,n){if(J_=G(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&px(t,n),Do!==null)for(var a=Or;a!==null;)ag(a,Do),a=a.next;if(a=t.types,a!==null){for(var s=Or;s!==null;)ag(s,a),s=s.next;if(Cs!==0){s=Do,s===null&&(s=Do=[]);for(var c=0;c<a.length;c++){var u=a[c];s.indexOf(u)===-1&&s.push(u)}}}rg!==null&&rg(t,n)};var ws=Qt(null);function xf(){var t=ws.current;return t!==null?t:Ye.pooledCache}function Jl(t,n){n===null?ie(ws,ws.current):ie(ws,n.pool)}function og(){var t=xf();return t===null?null:{parent:cn._currentValue,pool:t}}var _r=Error(r(460)),Mf=Error(r(474)),$l=Error(r(542)),tc={then:function(){}};function lg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function cg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fg(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,fg(t),t}throw Us=n,_r}}function Ds(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Us=a,_r):a}}var Us=null;function ug(){if(Us===null)throw Error(r(459));var t=Us;return Us=null,t}function fg(t){if(t===_r||t===$l)throw Error(r(483))}var vr=null,No=0;function ec(t){var n=No;return No+=1,vr===null&&(vr=[]),cg(vr,t,n)}function Pa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function nc(t,n){throw n.$$typeof===q?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function hg(t){function n(Y,H){if(t){var J=Y.deletions;J===null?(Y.deletions=[H],Y.flags|=16):J.push(H)}}function a(Y,H){if(!t)return null;for(;H!==null;)n(Y,H),H=H.sibling;return null}function s(Y){for(var H=new Map;Y!==null;)Y.key===null?H.set(Y.index,Y):H.set(Y.key,Y),Y=Y.sibling;return H}function c(Y,H){return Y=la(Y,H),Y.index=0,Y.sibling=null,Y}function u(Y,H,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<H?(Y.flags|=2,H):J):(Y.flags|=134217730,H)):(Y.flags|=1048576,H)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function T(Y,H,J,ht){return H===null||H.tag!==6?(H=hf(J,Y.mode,ht),H.return=Y,H):(H=c(H,J),H.return=Y,H)}function N(Y,H,J,ht){var Ht=J.type;return Ht===V?(Y=nt(Y,H,J.props.children,ht,J.key),Pa(Y,J),Y):H!==null&&(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===St&&Ds(Ht)===H.type)?(H=c(H,J.props),Pa(H,J),H.return=Y,H):(H=ql(J.type,J.key,J.props,null,Y.mode,ht),Pa(H,J),H.return=Y,H)}function W(Y,H,J,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=df(J,Y.mode,ht),H.return=Y,H):(H=c(H,J.children||[]),H.return=Y,H)}function nt(Y,H,J,ht,Ht){return H===null||H.tag!==7?(H=Es(J,Y.mode,ht,Ht),H.return=Y,H):(H=c(H,J),H.return=Y,H)}function pt(Y,H,J){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=hf(""+H,Y.mode,J),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return J=ql(H.type,H.key,H.props,null,Y.mode,J),Pa(J,H),J.return=Y,J;case C:return H=df(H,Y.mode,J),H.return=Y,H;case St:return H=Ds(H),pt(Y,H,J)}if(At(H)||it(H))return H=Es(H,Y.mode,J,null),H.return=Y,H;if(typeof H.then=="function")return pt(Y,ec(H),J);if(H.$$typeof===lt)return pt(Y,Ql(Y,H),J);nc(Y,H)}return null}function X(Y,H,J,ht){var Ht=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:T(Y,H,""+J,ht);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Ht?N(Y,H,J,ht):null;case C:return J.key===Ht?W(Y,H,J,ht):null;case St:return J=Ds(J),X(Y,H,J,ht)}if(At(J)||it(J))return Ht!==null?null:nt(Y,H,J,ht,null);if(typeof J.then=="function")return X(Y,H,ec(J),ht);if(J.$$typeof===lt)return X(Y,H,Ql(Y,J),ht);nc(Y,J)}return null}function tt(Y,H,J,ht,Ht){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get(J)||null,T(H,Y,""+ht,Ht);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case D:return Y=Y.get(ht.key===null?J:ht.key)||null,N(H,Y,ht,Ht);case C:return Y=Y.get(ht.key===null?J:ht.key)||null,W(H,Y,ht,Ht);case St:return ht=Ds(ht),tt(Y,H,J,ht,Ht)}if(At(ht)||it(ht))return Y=Y.get(J)||null,nt(H,Y,ht,Ht,null);if(typeof ht.then=="function")return tt(Y,H,J,ec(ht),Ht);if(ht.$$typeof===lt)return tt(Y,H,J,Ql(H,ht),Ht);nc(H,ht)}return null}function Dt(Y,H,J,ht){for(var Ht=null,Te=null,Jt=H,ae=H=0,hn=null;Jt!==null&&ae<J.length;ae++){Jt.index>ae?(hn=Jt,Jt=null):hn=Jt.sibling;var Ae=X(Y,Jt,J[ae],ht);if(Ae===null){Jt===null&&(Jt=hn);break}t&&Jt&&Ae.alternate===null&&n(Y,Jt),H=u(Ae,H,ae),Te===null?Ht=Ae:Te.sibling=Ae,Te=Ae,Jt=hn}if(ae===J.length)return a(Y,Jt),_e&&ca(Y,ae),Ht;if(Jt===null){for(;ae<J.length;ae++)Jt=pt(Y,J[ae],ht),Jt!==null&&(H=u(Jt,H,ae),Te===null?Ht=Jt:Te.sibling=Jt,Te=Jt);return _e&&ca(Y,ae),Ht}for(Jt=s(Jt);ae<J.length;ae++)hn=tt(Jt,Y,ae,J[ae],ht),hn!==null&&(t&&(Ae=hn.alternate,Ae!==null&&Jt.delete(Ae.key===null?ae:Ae.key)),H=u(hn,H,ae),Te===null?Ht=hn:Te.sibling=hn,Te=hn);return t&&Jt.forEach(function(ts){return n(Y,ts)}),_e&&ca(Y,ae),Ht}function qt(Y,H,J,ht){if(J==null)throw Error(r(151));for(var Ht=null,Te=null,Jt=H,ae=H=0,hn=null,Ae=J.next();Jt!==null&&!Ae.done;ae++,Ae=J.next()){Jt.index>ae?(hn=Jt,Jt=null):hn=Jt.sibling;var ts=X(Y,Jt,Ae.value,ht);if(ts===null){Jt===null&&(Jt=hn);break}t&&Jt&&ts.alternate===null&&n(Y,Jt),H=u(ts,H,ae),Te===null?Ht=ts:Te.sibling=ts,Te=ts,Jt=hn}if(Ae.done)return a(Y,Jt),_e&&ca(Y,ae),Ht;if(Jt===null){for(;!Ae.done;ae++,Ae=J.next())Ae=pt(Y,Ae.value,ht),Ae!==null&&(H=u(Ae,H,ae),Te===null?Ht=Ae:Te.sibling=Ae,Te=Ae);return _e&&ca(Y,ae),Ht}for(Jt=s(Jt);!Ae.done;ae++,Ae=J.next())Ae=tt(Jt,Y,ae,Ae.value,ht),Ae!==null&&(t&&(hn=Ae.alternate,hn!==null&&Jt.delete(hn.key===null?ae:hn.key)),H=u(Ae,H,ae),Te===null?Ht=Ae:Te.sibling=Ae,Te=Ae);return t&&Jt.forEach(function(ZM){return n(Y,ZM)}),_e&&ca(Y,ae),Ht}function de(Y,H,J,ht){if(typeof J=="object"&&J!==null&&J.type===V&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:t:{for(var Ht=J.key;H!==null;){if(H.key===Ht){if(Ht=J.type,Ht===V){if(H.tag===7){a(Y,H.sibling),ht=c(H,J.props.children),Pa(ht,J),ht.return=Y,Y=ht;break t}}else if(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===St&&Ds(Ht)===H.type){a(Y,H.sibling),ht=c(H,J.props),Pa(ht,J),ht.return=Y,Y=ht;break t}a(Y,H);break}else n(Y,H);H=H.sibling}J.type===V?(ht=Es(J.props.children,Y.mode,ht,J.key),Pa(ht,J),ht.return=Y,Y=ht):(ht=ql(J.type,J.key,J.props,null,Y.mode,ht),Pa(ht,J),ht.return=Y,Y=ht)}return _(Y);case C:t:{for(Ht=J.key;H!==null;){if(H.key===Ht)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a(Y,H.sibling),ht=c(H,J.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,H);break}else n(Y,H);H=H.sibling}ht=df(J,Y.mode,ht),ht.return=Y,Y=ht}return _(Y);case St:return J=Ds(J),de(Y,H,J,ht)}if(At(J))return Dt(Y,H,J,ht);if(it(J)){if(Ht=it(J),typeof Ht!="function")throw Error(r(150));return J=Ht.call(J),qt(Y,H,J,ht)}if(typeof J.then=="function")return de(Y,H,ec(J),ht);if(J.$$typeof===lt)return de(Y,H,Ql(Y,J),ht);nc(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,H!==null&&H.tag===6?(a(Y,H.sibling),ht=c(H,J),ht.return=Y,Y=ht):(a(Y,H),ht=hf(J,Y.mode,ht),ht.return=Y,Y=ht),_(Y)):a(Y,H)}return function(Y,H,J,ht){try{No=0;var Ht=de(Y,H,J,ht);return vr=null,Ht}catch(Jt){if(Jt===_r||Jt===$l)throw Jt;var Te=Xn(29,Jt,null,Y.mode);return Te.lanes=ht,Te.return=Y,Te}finally{}}}var Ns=hg(!0),dg=hg(!1),za=!1;function Ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Oe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=kl(t),Km(t,null,a),n}return Xl(t,s,n,a),kl(t)}function Lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Z(t,a)}}function bf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=_:u=u.next=_,a=a.next}while(a!==null);u===null?c=u=n:u=u.next=n}else c=u=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Af=!1;function Oo(){if(Af){var t=gr;if(t!==null)throw t}}function Po(t,n,a,s){Af=!1;var c=t.updateQueue;za=!1;var u=c.firstBaseUpdate,_=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var N=T,W=N.next;N.next=null,_===null?u=W:_.next=W,_=N;var nt=t.alternate;nt!==null&&(nt=nt.updateQueue,T=nt.lastBaseUpdate,T!==_&&(T===null?nt.firstBaseUpdate=W:T.next=W,nt.lastBaseUpdate=N))}if(u!==null){var pt=c.baseState;_=0,nt=W=N=null,T=u;do{var X=T.lane&-536870913,tt=X!==T.lane;if(tt?(Ee&X)===X:(s&X)===X){X!==0&&X===Cs&&(Af=!0),nt!==null&&(nt=nt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Dt=t,qt=T;X=n;var de=a;switch(qt.tag){case 1:if(Dt=qt.payload,typeof Dt=="function"){pt=Dt.call(de,pt,X);break t}pt=Dt;break t;case 3:Dt.flags=Dt.flags&-65537|128;case 0:if(Dt=qt.payload,X=typeof Dt=="function"?Dt.call(de,pt,X):Dt,X==null)break t;pt=L({},pt,X);break t;case 2:za=!0}}X=T.callback,X!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=c.callbacks,tt===null?c.callbacks=[X]:tt.push(X))}else tt={lane:X,tag:T.tag,payload:T.payload,callback:T.callback,next:null},nt===null?(W=nt=tt,N=pt):nt=nt.next=tt,_|=X;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;tt=T,T=tt.next,tt.next=null,c.lastBaseUpdate=tt,c.shared.pending=null}}while(!0);nt===null&&(N=pt),c.baseState=N,c.firstBaseUpdate=W,c.lastBaseUpdate=nt,u===null&&(c.shared.lanes=0),qa|=_,t.lanes=_,t.memoizedState=pt}}function pg(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function mg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)pg(a[t],n)}var Fa=Qt(null),ic=Qt(0);function gg(t,n){t=ga,ie(ic,t),ie(Fa,n),ga=t|n.baseLanes}function Rf(){ie(ic,ga),ie(Fa,Fa.current)}function Cf(){ga=ic.current,Lt(Fa),Lt(ic)}var bn=Qt(null),Ln=null;function Ha(t){var n=t.alternate;ie(An,An.current&1),ie(bn,t),Ln===null&&(n===null||Fa.current!==null||n.memoizedState!==null)&&(Ln=t)}function wf(t){ie(An,An.current),ie(bn,t),Ln===null&&(Ln=t)}function _g(t){t.tag===22?(ie(An,An.current),ie(bn,t),Ln===null&&(Ln=t)):Ga()}function Ga(){ie(An,An.current),ie(bn,bn.current)}function ni(t){Lt(bn),Ln===t&&(Ln=null),Lt(An)}var An=Qt(0);function zo(t,n){ie(bn,bn.current),ie(An,n)}function Df(t){Lt(An),Lt(bn),Ln===t&&(Ln=null)}function ac(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jh(a)||$h(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,he=null,Ve=null,un=null,sc=!1,Sr=!1,Ls=!1,rc=0,Io=0,yr=null,gx=0;function an(){throw Error(r(321))}function Uf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function Nf(t,n,a,s,c,u){return ha=u,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=t===null||t.memoizedState===null?t_:e_,Ls=!1,u=a(s,c),Ls=!1,Sr&&(u=Sg(n,a,s,c)),vg(t),u}function vg(t){Mt.H=dc;var n=Ve!==null&&Ve.next!==null;if(ha=0,un=Ve=he=null,sc=!1,Io=0,yr=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&Kl(t)&&(fn=!0))}function Sg(t,n,a,s){he=t;var c=0;do{if(Sr&&(yr=null),Io=0,Sr=!1,25<=c)throw Error(r(301));if(c+=1,un=Ve=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Mt.H=Tx,u=n(a,s)}while(Sr);return u}function _x(){var t=Mt.H,n=t.useState()[0];return n=typeof n.then=="function"?Bo(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(he.flags|=1024),n}function Lf(){var t=rc!==0;return rc=0,t}function Of(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Pf(t){if(sc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}sc=!1}ha=0,un=Ve=he=null,Sr=!1,Io=rc=0,yr=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?he.memoizedState=un=t:un=un.next=t,un}function on(){if(Ve===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=un===null?he.memoizedState:un.next;if(n!==null)un=n,Ve=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},un===null?he.memoizedState=un=t:un=un.next=t}return un}function oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(t){var n=Io;return Io+=1,yr===null&&(yr=[]),t=cg(yr,t,n),n=he,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?t_:e_),t}function lc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bo(t);if(t.$$typeof===ut)return;if(t.$$typeof===lt)return Tn(t)}throw Error(r(438,String(t)))}function zf(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=oc(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=be;return n.index++,a}function da(t,n){return typeof n=="function"?n(t):n}function cc(t){var n=on();return If(n,Ve,t)}function If(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,u=s.pending;if(u!==null){if(c!==null){var _=c.next;c.next=u.next,u.next=_}n.baseQueue=c=u,s.pending=null}if(u=t.baseState,c===null)t.memoizedState=u;else{n=c.next;var T=_=null,N=null,W=n,nt=!1;do{var pt=W.lane&-536870913;if(pt!==W.lane?(Ee&pt)===pt:(ha&pt)===pt){var X=W.revertLane;if(X===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),pt===Cs&&(nt=!0);else if((ha&X)===X){W=W.next,X===Cs&&(nt=!0);continue}else pt={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},N===null?(T=N=pt,_=u):N=N.next=pt,he.lanes|=X,qa|=X;pt=W.action,Ls&&a(u,pt),u=W.hasEagerState?W.eagerState:a(u,pt)}else X={lane:pt,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},N===null?(T=N=X,_=u):N=N.next=X,he.lanes|=pt,qa|=pt;W=W.next}while(W!==null&&W!==n);if(N===null?_=u:N.next=T,!ei(u,t.memoizedState)&&(fn=!0,nt&&(a=gr,a!==null)))throw a;t.memoizedState=u,t.baseState=_,t.baseQueue=N,s.lastRenderedState=u}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Bf(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,u=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do u=t(u,_.action),_=_.next;while(_!==c);ei(u,n.memoizedState)||(fn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,s]}function yg(t,n,a){var s=he,c=on(),u=_e;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!ei((Ve||c).memoizedState,a);if(_&&(c.memoizedState=a,fn=!0),c=c.queue,Gf(Eg.bind(null,s,c,t),[t]),t=c.getSnapshot!==n||_||un!==null&&(un.memoizedState.tag&1)!==0,xr(t?9:8,{destroy:void 0},Mg.bind(null,s,c,a,n),null),t){if(s.flags|=2048,Ye===null)throw Error(r(349));u||(ha&127)!==0||xg(s,n,a)}return a}function xg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=oc(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Mg(t,n,a,s){n.value=a,n.getSnapshot=s,Tg(n)&&bg(t)}function Eg(t,n,a){return a(function(){Tg(n)&&bg(t)})}function Tg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function bg(t){var n=Ms(t,2);n!==null&&Wn(n,t,2)}function Ff(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),Ls){pn(!0);try{a()}finally{pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function Ag(t,n,a,s){return t.baseState=a,If(t,Ve,typeof s=="function"?s:da)}function vx(t,n,a,s,c){if(hc(t))throw Error(r(485));if(t=n.action,t!==null){var u={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){u.listeners.push(_)}};Mt.T!==null?a(!0):u.isTransition=!1,s(u),a=n.pending,a===null?(u.next=n.pending=u,Rg(n,u)):(u.next=a.next,n.pending=a.next=u)}}function Rg(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var u=Mt.T,_={};_.types=u!==null?u.types:null,Mt.T=_;try{var T=a(c,s),N=Mt.S;N!==null&&N(_,T),Cg(t,n,T)}catch(W){Hf(t,n,W)}finally{u!==null&&_.types!==null&&(u.types=_.types),Mt.T=u}}else try{u=a(c,s),Cg(t,n,u)}catch(W){Hf(t,n,W)}}function Cg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){wg(t,n,s)},function(s){return Hf(t,n,s)}):wg(t,n,a)}function wg(t,n,a){n.status="fulfilled",n.value=a,Dg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Rg(t,a)))}function Hf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Dg(n),n=n.next;while(n!==s)}t.action=null}function Dg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ug(t,n){return n}function Ng(t,n){if(_e){var a=Ye.formState;if(a!==null){t:{var s=he;if(_e){if(Ze){e:{for(var c=Ze,u=_i;c.nodeType!==8;){if(!u){c=null;break e}if(c=Si(c.nextSibling),c===null){c=null;break e}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Ze=Si(c.nextSibling),s=c.data==="F!";break t}}La(s)}s=!1}s&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ug,lastRenderedState:n},a.queue=s,a=Qg.bind(null,he,s),s.dispatch=a,s=Ff(!1),u=Yf.bind(null,he,!1,s.queue),s=Bn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=vx.bind(null,he,c,u,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Lg(t){var n=on();return Og(n,Ve,t)}function Og(t,n,a){if(n=If(t,n,Ug)[0],t=cc(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Bo(n)}catch(_){throw _===_r?$l:_}else s=n;n=on();var c=n.queue,u=c.dispatch;return a!==n.memoizedState&&(he.flags|=2048,xr(9,{destroy:void 0},Sx.bind(null,c,a),null)),[s,u,t]}function Sx(t,n){t.action=n}function Pg(t){var n=on(),a=Ve;if(a!==null)return Og(n,a,t);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function xr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=oc(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function zg(){return on().memoizedState}function uc(t,n,a,s){var c=Bn();he.flags|=t,c.memoizedState=xr(1|n,{destroy:void 0},a,s===void 0?null:s)}function fc(t,n,a,s){var c=on();s=s===void 0?null:s;var u=c.memoizedState.inst;Ve!==null&&s!==null&&Uf(s,Ve.memoizedState.deps)?c.memoizedState=xr(n,u,a,s):(he.flags|=t,c.memoizedState=xr(1|n,u,a,s))}function Ig(t,n){uc(8390656,8,t,n)}function Gf(t,n){fc(2048,8,t,n)}function yx(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=oc(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Bg(t){var n=on().memoizedState;return yx({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Fg(t,n){return fc(4,2,t,n)}function Hg(t,n){return fc(4,4,t,n)}function Gg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Vg(t,n,a){a=a!=null?a.concat([t]):null,fc(4,4,Gg.bind(null,n,t),a)}function Vf(){}function Xg(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Uf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function kg(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Uf(n,s[1]))return s[0];if(s=t(),Ls){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s}function Xf(t,n,a){return a===void 0||(ha&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=t0(),he.lanes|=t,qa|=t,a)}function qg(t,n,a,s){return ei(a,n)?a:Fa.current!==null?(t=Xf(t,a,s),ei(t,n)||(fn=!0),t):(ha&106)===0||(ha&1073741824)!==0&&(Ee&261930)===0?(fn=!0,t.memoizedState=a):(t=t0(),he.lanes|=t,qa|=t,n)}function Yg(t,n,a,s,c){var u=Yt.p;Yt.p=u!==0&&8>u?u:8;var _=Mt.T,T={};T.types=_!==null?_.types:null,Mt.T=T,Yf(t,!1,n,a);try{var N=c(),W=Mt.S;if(W!==null&&W(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var nt=mx(N,s);Fo(t,n,nt,ri(t))}else Fo(t,n,s,ri(t))}catch(pt){Fo(t,n,{then:function(){},status:"rejected",reason:pt},ri())}finally{Yt.p=u,_!==null&&T.types!==null&&(_.types=T.types),Mt.T=_}}function xx(){}function kf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Wg(t).queue;Yg(t,c,n,z,a===null?xx:function(){return jg(t),a(s)})}function Wg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function jg(t){var n=Wg(t);n.next===null&&(n=t.alternate.memoizedState),Fo(t,n.next.queue,{},ri())}function qf(){return Tn(Hr)}function Zg(){return on().memoizedState}function Kg(){return on().memoizedState}function Mx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=Ia(a);var s=Ba(n,t,a);s!==null&&(Wn(s,n,a),Lo(s,n,a)),n={cache:Sf()},t.payload=n;return}n=n.return}}function Ex(t,n,a){var s=ri();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hc(t)?Jg(n,a):(a=uf(t,n,a,s),a!==null&&(Wn(a,t,s),$g(a,n,s)))}function Qg(t,n,a){var s=ri();Fo(t,n,a,s)}function Fo(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hc(t))Jg(n,c);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var _=n.lastRenderedState,T=u(_,a);if(c.hasEagerState=!0,c.eagerState=T,ei(T,_))return Xl(t,n,c,0),Ye===null&&Vl(),!1}catch{}finally{}if(a=uf(t,n,c,s),a!==null)return Wn(a,t,s),$g(a,n,s),!0}return!1}function Yf(t,n,a,s){if(s={lane:2,revertLane:zh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hc(t)){if(n)throw Error(r(479))}else n=uf(t,a,s,2),n!==null&&Wn(n,t,2)}function hc(t){var n=t.alternate;return t===he||n!==null&&n===he}function Jg(t,n){Sr=sc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function $g(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Z(t,a)}}var dc={readContext:Tn,use:lc,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},t_={readContext:Tn,use:lc,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Ig,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,uc(4194308,4,Gg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return uc(4194308,4,t,n)},useInsertionEffect:function(t,n){uc(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var s=t();if(Ls){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Bn();if(a!==void 0){var c=a(n);if(Ls){pn(!0);try{a(n)}finally{pn(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Ex.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ff(t);var n=t.queue,a=Qg.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Vf,useDeferredValue:function(t,n){var a=Bn();return Xf(a,t,n)},useTransition:function(){var t=Ff(!1);return t=Yg.bind(null,he,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,c=Bn();if(_e){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));(Ee&127)!==0||xg(s,n,a)}c.memoizedState=a;var u={value:a,getSnapshot:n};return c.queue=u,Ig(Eg.bind(null,s,u,t),[t]),s.flags|=2048,xr(9,{destroy:void 0},Mg.bind(null,s,u,a,n),null),a},useId:function(){var t=Bn(),n=Ye.identifierPrefix;if(_e){var a=Hi,s=Fi;a=(s&~(1<<32-Un(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=rc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qf,useFormState:Ng,useActionState:Ng,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yf.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:zf,useCacheRefresh:function(){return Bn().memoizedState=Mx.bind(null,he)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},e_={readContext:Tn,use:lc,useCallback:Xg,useContext:Tn,useEffect:Gf,useImperativeHandle:Vg,useInsertionEffect:Fg,useLayoutEffect:Hg,useMemo:kg,useReducer:cc,useRef:zg,useState:function(){return cc(da)},useDebugValue:Vf,useDeferredValue:function(t,n){var a=on();return qg(a,Ve.memoizedState,t,n)},useTransition:function(){var t=cc(da)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:yg,useId:Zg,useHostTransitionStatus:qf,useFormState:Lg,useActionState:Lg,useOptimistic:function(t,n){var a=on();return Ag(a,Ve,t,n)},useMemoCache:zf,useCacheRefresh:Kg,useEffectEvent:Bg},Tx={readContext:Tn,use:lc,useCallback:Xg,useContext:Tn,useEffect:Gf,useImperativeHandle:Vg,useInsertionEffect:Fg,useLayoutEffect:Hg,useMemo:kg,useReducer:Bf,useRef:zg,useState:function(){return Bf(da)},useDebugValue:Vf,useDeferredValue:function(t,n){var a=on();return Ve===null?Xf(a,t,n):qg(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Bf(da)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:yg,useId:Zg,useHostTransitionStatus:qf,useFormState:Pg,useActionState:Pg,useOptimistic:function(t,n){var a=on();return Ve!==null?Ag(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:zf,useCacheRefresh:Kg,useEffectEvent:Bg};function Wf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:L({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var jf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ri(),c=Ia(s);c.payload=n,a!=null&&(c.callback=a),n=Ba(t,c,s),n!==null&&(Wn(n,t,s),Lo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ri(),c=Ia(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ba(t,c,s),n!==null&&(Wn(n,t,s),Lo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),s=Ia(a);s.tag=2,n!=null&&(s.callback=n),n=Ba(t,s,a),n!==null&&(Wn(n,t,a),Lo(n,t,a))}};function n_(t,n,a,s,c,u,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,_):n.prototype&&n.prototype.isPureReactComponent?!bo(a,s)||!bo(c,u):!0}function i_(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&jf.enqueueReplaceState(n,n.state,null)}function Os(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=L({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function a_(t){Gl(t)}function s_(t){console.error(t)}function r_(t){Gl(t)}function pc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function o_(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Zf(t,n,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){pc(t,n)},a}function l_(t){return t=Ia(t),t.tag=3,t}function c_(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=s.value;t.payload=function(){return c(u)},t.callback=function(){o_(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){o_(n,a,s),typeof c!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function bx(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&As(n,a,c,!0),a=bn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ln===null?Pc():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===tc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Lh(t,s,c)),!1;case 22:return a.flags|=65536,s===tc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Lh(t,s,c)),!1}throw Error(r(435,a.tag))}return Lh(t,s,c),Pc(),!1}if(_e)return n=bn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==mf&&(t=Error(r(422),{cause:s}),Co(pi(t,a)))):(s!==mf&&(n=Error(r(423),{cause:s}),Co(pi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=pi(s,a),c=Zf(t.stateNode,s,c),bf(t,c),sn!==4&&(sn=2)),!1;var u=Error(r(520),{cause:s});if(u=pi(u,a),Wo===null?Wo=[u]:Wo.push(u),sn!==4&&(sn=2),n===null)return!0;s=pi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Zf(a.stateNode,s,t),bf(a,t),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ya===null||!Ya.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=l_(c),c_(c,t,a,s),bf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Kf=Error(r(461)),fn=!1;function gn(t,n,a,s){n.child=t===null?dg(n,null,a,s):Ns(n,t.child,a,s)}function u_(t,n,a,s,c){a=a.render;var u=n.ref;if("ref"in s){var _={};for(var T in s)T!=="ref"&&(_[T]=s[T])}else _=s;return Rs(n),s=Nf(t,n,a,_,u,c),T=Lf(),t!==null&&!fn?(Of(t,n,c),pa(t,n,c)):(_e&&T&&Wl(n),n.flags|=1,gn(t,n,s,c),n.child)}function f_(t,n,a,s,c){if(t===null){var u=a.type;return typeof u=="function"&&!ff(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,h_(t,n,u,s,c)):(t=ql(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!ah(t,c)){var _=u.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(_,s)&&t.ref===n.ref)return pa(t,n,c)}return n.flags|=1,t=la(u,s),t.ref=n.ref,t.return=n,n.child=t}function h_(t,n,a,s,c){if(t!==null){var u=t.memoizedProps;if(bo(u,s)&&t.ref===n.ref)if(fn=!1,n.pendingProps=s=u,ah(t,c))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,pa(t,n,c)}return Qf(t,n,a,s,c)}function d_(t,n,a,s){var c=s.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~u}else s=0,n.child=null;return p_(t,n,u,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jl(n,u!==null?u.cachePool:null),u!==null?gg(n,u):Rf(),_g(n);else return s=n.lanes=536870912,p_(t,n,u!==null?u.baseLanes|a:a,a,s)}else u!==null?(Jl(n,u.cachePool),gg(n,u),Ga(),n.memoizedState=null):(t!==null&&Jl(n,null),Rf(),Ga());return gn(t,n,c,a),n.child}function Ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function p_(t,n,a,s,c){var u=xf();return u=u===null?null:{parent:cn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Jl(n,null),Rf(),_g(n),t!==null&&As(t,n,s,!0),n.childLanes=c,null}function mc(t,n){return n=gc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function m_(t,n,a){return Ns(n,t.child,null,a),t=mc(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function Ax(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(s.mode==="hidden")return t=mc(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Ho(null,t);if(wf(n),(t=Ze)?(t=G0(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Jm(t),a.return=n,n.child=a,yn=n,Ze=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return mc(n,s)}var u=t.memoizedState;if(u!==null){var _=u.dehydrated;if(wf(n),c)if(n.flags&256)n.flags&=-257,n=m_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||As(t,n,a,!1),c=(a&t.childLanes)!==0,fn||c){if(Fa.current===null){if(s=Ye,s!==null&&(_=rt(s,a),_!==0&&_!==u.retryLane))throw u.retryLane=_,Ms(t,_),Wn(s,t,_),Kf;Pc()}n=m_(t,n,a)}else t=u.treeContext,Ze=Si(_.nextSibling),yn=n,_e=!0,Na=null,_i=!1,t!==null&&eg(n,t),n=mc(n,s),n.flags|=134221824;return n}return t=la(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Mr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Qf(t,n,a,s,c){return Rs(n),a=Nf(t,n,a,s,void 0,c),s=Lf(),t!==null&&!fn?(Of(t,n,c),pa(t,n,c)):(_e&&s&&Wl(n),n.flags|=1,gn(t,n,a,c),n.child)}function g_(t,n,a,s,c,u){return Rs(n),n.updateQueue=null,a=Sg(n,s,a,c),vg(t),s=Lf(),t!==null&&!fn?(Of(t,n,u),pa(t,n,u)):(_e&&s&&Wl(n),n.flags|=1,gn(t,n,a,u),n.child)}function __(t,n,a,s,c){if(Rs(n),n.stateNode===null){var u=hr,_=a.contextType;typeof _=="object"&&_!==null&&(u=Tn(_)),u=new a(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=jf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},Ef(n),_=a.contextType,u.context=typeof _=="object"&&_!==null?Tn(_):hr,u.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Wf(n,a,_,s),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(_=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),_!==u.state&&jf.enqueueReplaceState(u,u.state,null),Po(n,s,u,c),Oo(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){u=n.stateNode;var T=n.memoizedProps,N=Os(a,T);u.props=N;var W=u.context,nt=a.contextType;_=hr,typeof nt=="object"&&nt!==null&&(_=Tn(nt));var pt=a.getDerivedStateFromProps;nt=typeof pt=="function"||typeof u.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,nt||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(T||W!==_)&&i_(n,u,s,_),za=!1;var X=n.memoizedState;u.state=X,Po(n,s,u,c),Oo(),W=n.memoizedState,T||X!==W||za?(typeof pt=="function"&&(Wf(n,a,pt,s),W=n.memoizedState),(N=za||n_(n,a,N,s,X,W,_))?(nt||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=W),u.props=s,u.state=W,u.context=_,s=N):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,Tf(t,n),_=n.memoizedProps,nt=Os(a,_),u.props=nt,pt=n.pendingProps,X=u.context,W=a.contextType,N=hr,typeof W=="object"&&W!==null&&(N=Tn(W)),T=a.getDerivedStateFromProps,(W=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(_!==pt||X!==N)&&i_(n,u,s,N),za=!1,X=n.memoizedState,u.state=X,Po(n,s,u,c),Oo();var tt=n.memoizedState;_!==pt||X!==tt||za||t!==null&&t.dependencies!==null&&Kl(t.dependencies)?(typeof T=="function"&&(Wf(n,a,T,s),tt=n.memoizedState),(nt=za||n_(n,a,nt,s,X,tt,N)||t!==null&&t.dependencies!==null&&Kl(t.dependencies))?(W||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,tt,N),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,tt,N)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=tt),u.props=s,u.state=tt,u.context=N,s=nt):(typeof u.componentDidUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),s=!1)}return u=s,Mr(t,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&s?(n.child=Ns(n,t.child,null,c),n.child=Ns(n,null,a,c)):gn(t,n,a,c),n.memoizedState=u.state,t=n.child):t=pa(t,n,c),t}function v_(t,n,a,s){return Ts(),n.flags|=256,gn(t,n,a,s),n.child}var Jf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $f(t){return{baseLanes:t,cachePool:og()}}function th(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function S_(t,n,a){var s=n.pendingProps,c=!1,u=(n.flags&128)!==0,_;if((_=u)||(_=t!==null&&t.memoizedState===null?!1:(An.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(c?Ha(n):Ga(),(t=Ze)?(t=G0(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Jm(t),a.return=n,n.child=a,yn=n,Ze=null)):t=null,t===null)throw La(n);return $h(t)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,c?(Ga(),c=n.mode,u=gc({mode:"hidden",children:u},c),s=Es(s,c,a,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=$f(a),s.childLanes=th(t,_,a),n.memoizedState=Jf,Ho(null,s)):(Ha(n),eh(n,u))}var T=t.memoizedState;if(T!==null){var N=T.dehydrated;if(N!==null)return Rx(t,n,u,_,s,N,T,a)}return c?(Ga(),c=s.fallback,u=n.mode,T=t.child,N=T.sibling,s=la(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&1206910976,N!==null?c=la(N,c):(c=Es(c,u,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,Ho(null,s),s=n.child,c=t.child.memoizedState,c===null?c=$f(a):(u=c.cachePool,u!==null?(T=cn._currentValue,u=u.parent!==T?{parent:T,pool:T}:u):u=og(),c={baseLanes:c.baseLanes|a,cachePool:u}),s.memoizedState=c,s.childLanes=th(t,_,a),n.memoizedState=Jf,Ho(t.child,s)):(Ha(n),a=t.child,t=a.sibling,a=la(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function eh(t,n){return n=gc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function gc(t,n){return t=Xn(22,t,null,n),t.lanes=0,t}function _c(t,n,a){return Ns(n,t.child,null,a),t=eh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Rx(t,n,a,s,c,u,_,T){if(a)return n.flags&256?(Ha(n),n.flags&=-257,_c(t,n,T)):n.memoizedState!==null?(Ga(),n.child=t.child,n.flags|=128,null):(Ga(),u=c.fallback,_=n.mode,c=gc({mode:"visible",children:c.children},_),u=Es(u,_,T,null),u.flags|=2,c.return=n,u.return=n,c.sibling=u,n.child=c,Ns(n,t.child,null,T),c=n.child,c.memoizedState=$f(T),c.childLanes=th(t,s,T),n.memoizedState=Jf,Ho(null,c));if(Ha(n),$h(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var N=s.dgst;return s=N,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,Co({value:c,source:null,stack:null})),_c(t,n,T)}if(fn||As(t,n,T,!1),s=(T&t.childLanes)!==0,fn||s){if(Fa.current!==null)return _c(t,n,T);if(s=Ye,s!==null&&(c=rt(s,T),c!==0&&c!==_.retryLane))throw _.retryLane=c,Ms(t,c),Wn(s,t,c),Kf;return Jh(u)||Pc(),_c(t,n,T)}return Jh(u)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Ze=Si(u.nextSibling),yn=n,_e=!0,Na=null,_i=!1,t!==null&&eg(n,t),n=eh(n,c.children),n.flags|=134221824,n)}function y_(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Zl(t.return,n,a)}function x_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&ac(a)===null&&(n=t),t=t.sibling}return n}function vc(t,n,a,s,c,u){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:u}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=u)}function nh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function ih(t,n,a){var s=n.pendingProps,c=s.revealOrder,u=s.tail;s=s.children;var _=An.current;if(n.flags&128)return zo(n,_),null;var T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,zo(n,_),c==="backwards"&&t!==null?(nh(t),gn(t,n,s,a),nh(t)):gn(t,n,s,a),s=_e?Ro:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&y_(t,a,n);else if(t.tag===19)y_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=x_(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,nh(n)),vc(n,!0,c,null,u,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ac(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}vc(n,!0,a,null,u,s);break;case"together":vc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=x_(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),vc(n,!1,c,a,u,s)}return n.child}function M_(t,n,a){var s=n.pendingProps;return Oa(n,n.type,s.value),gn(t,n,s.children,a),n.child}function pa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(As(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=la(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=la(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ah(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Kl(t)))}function Cx(t,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),Oa(n,cn,t.memoizedState.cache),Ts();break;case 27:case 5:et(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,wf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ha(n),n.flags|=128,null;s=As(t,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?S_(t,n,a):(Ha(n),t=pa(t,n,a),t!==null?t.sibling:null)}Ha(n);break;case 19:if(n.flags&128)return ih(t,n,a);if(c=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(As(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return ih(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),zo(n,An.current),s)break;return null;case 22:return n.lanes=0,d_(t,n,a,n.pendingProps);case 24:Oa(n,cn,t.memoizedState.cache)}return pa(t,n,a)}function E_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!ah(t,a)&&(n.flags&128)===0)return fn=!1,Cx(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,_e&&(n.flags&1048576)!==0&&tg(n,Ro,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Ds(n.elementType),n.type=t,typeof t=="function")ff(t)?(s=Os(t,s),n.tag=1,n=__(null,n,t,s,a)):(n.tag=0,n=Qf(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===j){n.tag=11,n=u_(null,n,t,s,a);break t}else if(c===_t){n.tag=14,n=f_(null,n,t,s,a);break t}else if(c===lt){n.tag=10,n.type=t,n=M_(null,n,a);break t}}throw n=Nt(t)||t,Error(r(306,n,""))}}return n;case 0:return Qf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Os(s,n.pendingProps),__(t,n,s,c,a);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;c=u.element,Tf(t,n),Po(n,s,null,a);var _=n.memoizedState;if(s=_.cache,Oa(n,cn,s),s!==u.cache&&vf(n,[cn],a,!0),Oo(),s=_.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=v_(t,n,s,a);break t}else if(s!==c){c=pi(Error(r(424)),n),Co(c),n=v_(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=Si(t.firstChild),yn=n,_e=!0,Na=null,_i=!0,a=dg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ts(),s===c){n=pa(t,n,a);break t}gn(t,n,s,a)}n=n.child}return n;case 26:return Mr(t,n),t===null?(a=j0(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(n.stateNode=R0(n.type,n.pendingProps,qe.current,n)):n.memoizedState=j0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&_e&&(s=n.stateNode=k0(n.type,n.pendingProps,qe.current),yn=n,_i=!0,c=Ze,Za(n.type)?(td=c,Ze=Si(s.firstChild)):Ze=c),gn(t,n,n.pendingProps.children,a),Mr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((c=s=Ze)&&(s=MM(s,n.type,n.pendingProps,_i),s!==null?(n.stateNode=s,yn=n,Ze=Si(s.firstChild),_i=!1,c=!0):c=!1),c||La(n)),et(n),c=n.type,u=n.pendingProps,_=t!==null?t.memoizedProps:null,s=u.children,qh(c,u)?s=null:_!==null&&qh(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Nf(t,n,_x,null,null,a),Hr._currentValue=c),Mr(t,n),gn(t,n,s,a),n.child;case 6:return t===null&&_e&&((t=a=Ze)&&(a=EM(a,n.pendingProps,_i),a!==null?(n.stateNode=a,yn=n,Ze=null,t=!0):t=!1),t||La(n)),null;case 13:return S_(t,n,a);case 4:return U(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ns(n,null,s,a):gn(t,n,s,a),n.child;case 11:return u_(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Mr(t,n),gn(t,n,s,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return M_(t,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,Rs(n),c=Tn(c),s=s(c),n.flags|=1,gn(t,n,s,a),n.child;case 14:return f_(t,n,n.type,n.pendingProps,a);case 15:return h_(t,n,n.type,n.pendingProps,a);case 19:return ih(t,n,a);case 31:return Ax(t,n,a);case 22:return d_(t,n,a,n.pendingProps);case 24:return Rs(n),s=Tn(cn),t===null?(c=xf(),c===null&&(c=Ye,u=Sf(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),n.memoizedState={parent:s,cache:c},Ef(n),Oa(n,cn,c)):((t.lanes&a)!==0&&(Tf(t,n),Po(n,null,null,a),Oo()),c=t.memoizedState,u=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Oa(n,cn,s)):(s=u.cache,Oa(n,cn,s),s!==c.cache&&vf(n,[cn],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&Wl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Mr(t,n),gn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ma(t){t.flags|=4}function sh(t,n,a,s,c){var u;if((u=(t.mode&32)!==0)&&(u=a===null?J0(n,s):J0(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(a0())t.flags|=8192;else throw Us=tc,Mf}else t.flags&=-16777217}function T_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!$0(n))if(a0())t.flags|=8192;else throw Us=tc,Mf}function Sc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ul():536870912,t.lanes|=n,Rr|=n)}function Go(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function wx(t,n,a){var s=n.pendingProps;switch(pf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),fa(cn),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(mr(n)?ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gf())),Ke(n),null;case 26:var c=n.type,u=n.memoizedState;return t===null?(ma(n),u!==null?(Ke(n),T_(n,u)):(Ke(n),sh(n,c,null,s,a))):u?u!==t.memoizedState?(ma(n),Ke(n),T_(n,u)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ma(n),Ke(n),sh(n,c,t,s,a)),null;case 27:if(dt(n),a=qe.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ma(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=Ft.current,mr(n)?ng(n):(t=k0(c,s,a),n.stateNode=t,ma(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(dt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ma(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(u=Ft.current,mr(n))ng(n);else{var _=Jo(qe.current);switch(u){case 1:u=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=_.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}u[Ct]=n,u[kt]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)u.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=u;t:switch(Cn(u,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ma(n)}}return Ke(n),n.subtreeFlags&=-33554433,sh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ma(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=qe.current,mr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=yn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Ct]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||E0(t.nodeValue,a)),t||La(n,!0)}else t=Jo(t).createTextNode(s),t[Ct]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=mr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ct]=n}else Ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=mr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Ct]=n}else Ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Sc(n,n.updateQueue),Ke(n),null);case 4:return b(),t===null&&Hh(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return fa(n.type),Ke(n),null;case 19:if(Df(n),s=n.memoizedState,s===null)return Ke(n),null;if(c=(n.flags&128)!==0,u=s.rendering,u===null)if(c)Go(s,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=ac(t),u!==null){for(n.flags|=128,Go(s,!1),t=u.updateQueue,n.updateQueue=t,Sc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Qm(a,t),a=a.sibling;return zo(n,An.current&1|2),_e&&ca(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&G()>Uc&&(n.flags|=128,c=!0,Go(s,!1),n.lanes=4194304)}else{if(!c)if(t=ac(u),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Sc(n,t),Go(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!_e)return Ke(n),null}else 2*G()-s.renderingStartTime>Uc&&a!==536870912&&(n.flags|=128,c=!0,Go(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(t=s.last,t!==null?t.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=G(),t.sibling=null,u=An.current,u=c?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||_e?zo(n,u):(a=u,ie(bn,n),ie(An,a),Ln===null&&(Ln=n)),_e&&ca(n,s.treeForkCount),t}return Ke(n),null;case 22:case 23:return ni(n),Cf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Sc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Lt(ws),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),fa(cn),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(r(156,n.tag))}function Dx(t,n){switch(pf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return fa(cn),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(r(340));Ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ts()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Df(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return fa(n.type),null;case 22:case 23:return ni(n),Cf(),t!==null&&Lt(ws),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return fa(cn),null;case 25:return null;default:return null}}function b_(t,n){switch(pf(n),n.tag){case 3:fa(cn),b();break;case 26:case 27:case 5:dt(n);break;case 4:b();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:Df(n);break;case 10:fa(n.type);break;case 22:case 23:ni(n),Cf(),t!==null&&Lt(ws);break;case 24:fa(cn)}}function Vo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var u=a.create,_=a.inst;s=u(),_.destroy=s}a=a.next}while(a!==c)}}catch(T){Be(n,n.return,T)}}function Va(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var u=c.next;s=u;do{if((s.tag&t)===t){var _=s.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,c=n;var N=a,W=T;try{W()}catch(nt){Be(c,N,nt)}}}s=s.next}while(s!==u)}}catch(nt){Be(n,n.return,nt)}}function A_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{mg(n,a)}catch(s){Be(t,t.return,s)}}}function R_(t,n,a){a.props=Os(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function Gi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var c=t.stateNode,u=ra(t.memoizedProps,c);(c.ref===null||c.ref.name!==u)&&(c.ref=O0(u)),s=c.ref;break;case 7:if(t.stateNode===null){var _=new oi(t);g(t.child,!1,yM,_,void 0,void 0),t.stateNode=_}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(T){Be(t,n,T)}}function Rn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Be(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(t,n,c)}else a.current=null}function yc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)H0(t.stateNode,n[a])}function C_(t){for(var n=t.return;n!==null&&(oh(n)&&H0(t.stateNode,n.stateNode),!rh(n));)n=n.return}function Xo(t){for(var n=t.return;n!==null&&(oh(n)&&xM(t.stateNode,n.stateNode),!rh(n));)n=n.return}function rh(t){return t.tag===5||t.tag===3||t.tag===27}function oh(t){return t&&t.tag===7&&t.stateNode!==null}function lh(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Be(t,t.return,c)}}function ch(t,n,a){try{var s=t.stateNode;nM(s,t.type,a,n),s[kt]=n}catch(c){Be(t,t.return,c)}}function w_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function uh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||w_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fh(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi)),yc(t,s),De=!0;else if(c!==4&&(c===27&&(yc(t,s),s=null,Za(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(fh(t,n,a,s),t=t.sibling;t!==null;)fh(t,n,a,s),t=t.sibling}function xc(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),yc(t,s),De=!0;else if(c!==4&&(c===27&&(yc(t,s),s=null,Za(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(xc(t,n,a,s),t=t.sibling;t!==null;)xc(t,n,a,s),t=t.sibling}function D_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,s,a),n[Ct]=t,n[kt]=a}catch(u){Be(t,t.return,u)}}var Mc=!1,ii=null;function U_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Mc=!0)}var Vi=null;function N_(){var t=Vi;return Vi=null,t}var kn=0;function Er(t,n,a,s,c){return kn=0,L_(t.child,n,a,s,c)}function L_(t,n,a,s,c){for(var u=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(s!==null){var T=jh(_);s.push(T),T.view&&(u=!0)}else u||jh(_).view&&(u=!0);Mc=!0,N0(_,kn===0?n:n+"_"+kn,a),kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||L_(t.child,n,a,s,c)&&(u=!0));t=t.sibling}return u}function Xi(t,n){for(;t!==null;)t.tag===5?L0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Xi(t.child,n)),t=t.sibling}function Ec(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Ec(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=oa(n.default,n.share),n!=="none"&&(Er(t,a,n,null,!1)||Xi(t.child,!1))}t=t.sibling}}function hh(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,c=ra(s,a),u=oa(s.default,a.paired?s.share:s.enter);u!=="none"?Er(t,c,u,null,!1)?(Ec(t),a.paired||n||Ur(t,s.onEnter)):Xi(t.child,!1):Ec(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)hh(t,n),t=t.sibling;else Ec(t)}function dh(t){if(ii!==null&&ii.size!==0){var n=ii;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var u=oa(a.default,a.share);if(u!=="none"&&(Er(t,s,u,null,!1)?(u=t.stateNode,c.paired=u,u.paired=c,Ur(t,a.onShare)):Xi(t.child,!1)),n.delete(s),n.size===0)break}}}dh(t)}t=t.sibling}}}function ph(t){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode),s=ii!==null?ii.get(a):void 0,c=oa(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(Er(t,a,c,null,!1)?s!==void 0?(c=t.stateNode,s.paired=c,c.paired=s,ii.delete(a),Ur(t,n.onShare)):Ur(t,n.onExit):Xi(t.child,!1)),ii!==null&&dh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ph(t),t=t.sibling;else ii!==null&&dh(t)}function O_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode);n=oa(n.default,n.update),t.flags&=-5,n!=="none"&&Er(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&O_(t);t=t.sibling}}function mh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Xi(t.child,!1))}mh(t)}t=t.sibling}}function Tc(t){if(t.tag===30)t.stateNode.paired=null,Xi(t.child,!1),mh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Tc(t),t=t.sibling;else mh(t)}function P_(t){for(t=t.child;t!==null;)t.tag===30?Xi(t.child,!1):(t.subtreeFlags&33554432)!==0&&P_(t),t=t.sibling}function gh(t,n,a,s,c,u,_){for(var T=!1;n!==null;){if(n.tag===5){var N=n.stateNode;if(u!==null&&kn<u.length){var W=u[kn],nt=jh(N);(W.view||nt.view)&&(T=!0);var pt;if(pt=(t.flags&4)===0)if(nt.clip)pt=!0;else{pt=W.rect;var X=nt.rect;pt=pt.y!==X.y||pt.x!==X.x||pt.height!==X.height||pt.width!==X.width}pt&&(t.flags|=4),nt.abs?nt=!W.abs:(W=W.rect,nt=nt.rect,nt=W.height!==nt.height||W.width!==nt.width),nt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&N0(N,kn===0?a:a+"_"+kn,c),T&&(t.flags&4)!==0||(Vi===null&&(Vi=[]),Vi.push(N,kn===0?s:s+"_"+kn,n.memoizedProps)),kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:gh(t,n.child,a,s,c,u,_)&&(T=!0));n=n.sibling}return T}function z_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,c=ra(a,s),u=oa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,s=t;var T=t.child;kn=0,c=gh(s,T,c,c,u,_,!1),(t.flags&4)!==0&&c&&Ur(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&z_(t);t=t.sibling}}var xn=!1,ze=!1,ki=!1,_h=!1,I_=typeof WeakSet=="function"?WeakSet:Set,Mn=null,qi=!1,ko=!1,bc=!1,vh=!1;function Ux(t,n,a){if(t=t.containerInfo,Xh=Gr,t=Gm(t),af(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var u=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var T=0,N=-1,W=-1,nt=0,pt=0,X=t,tt=null;e:for(;;){for(var Dt;X!==s||u!==0&&X.nodeType!==3||(N=T+u),X!==_||c!==0&&X.nodeType!==3||(W=T+c),X.nodeType===3&&(T+=X.nodeValue.length),(Dt=X.firstChild)!==null;)tt=X,X=Dt;for(;;){if(X===t)break e;if(tt===s&&++nt===u&&(N=T),tt===_&&++pt===c&&(W=T),(Dt=X.nextSibling)!==null)break;X=tt,tt=X.parentNode}X=Dt}s=N===-1||W===-1?null:{start:N,end:W}}else s=null}s=s||{start:0,end:0}}else s=null;for(kh={focusedElem:t,selectionRange:s},Gr=!1,a=(a&335544064)===a,Mn=n,n=a?9270:1024;Mn!==null;){if(t=Mn,a&&(s=t.deletions,s!==null))for(u=0;u<s.length;u++)a&&ph(s[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&U_(t),Ac(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&ph(s),Ac(a);continue}else if(s!==null&&s.memoizedState!==null){a&&U_(t),Ac(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Mn=s):(a&&O_(t),Ac(a))}}ii=null}function Ac(t){for(;Mn!==null;){var n=Mn,a=t,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var _=Os(n.type,c);a=u.getSnapshotBeforeUpdate(_,s),u.__reactInternalSnapshotBeforeUpdate=a}catch(T){Be(n,n.return,T)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Qh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Qh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ra(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=oa(c.default,c.update),c!=="none"&&Er(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Mn=s;break}Mn=n.return}}function B_(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),s&4&&Vo(5,a);break;case 1:if(Yi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Be(a,a.return,_)}else{var c=Os(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Be(a,a.return,_)}}s&64&&A_(a),s&512&&Gi(a,a.return);break;case 3:if(Yi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{mg(t,n)}catch(_){Be(a,a.return,_)}}break;case 27:n===null&&s&4&&D_(a);case 26:case 5:Yi(t,a),n===null&&s&4&&lh(a),s&512&&Gi(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),s&4&&V_(t,a);break;case 13:Yi(t,a),s&4&&X_(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Xx.bind(null,a),TM(t,a))));break;case 22:if(s=a.memoizedState!==null||xn,!s){var u=n!==null&&n.memoizedState!==null||ze;n=xn,c=ze,xn=s,(ze=u)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ci(t,a,s)):Yi(t,a),xn=n,ze=c}break;case 30:Yi(t,a),s&512&&Gi(a,a.return);break;case 7:s&512&&Gi(a,a.return);default:Yi(t,a)}}function Sh(t,n){for(t=t.child;t!==null;)F_(t,n),t=t.sibling}function F_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=t.stateNode,u=t.memoizedProps.style,_=u!=null&&u.hasOwnProperty("display")?u.display:null;c.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(N){Be(t,t.return,N)}yh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,De=!0}catch(N){Be(t,t.return,N)}break;case 18:try{var T=t.stateNode;n?U0(T,!0):U0(t.stateNode,!1)}catch(N){Be(t,t.return,N)}break;case 22:case 23:t.memoizedState===null&&Sh(t,n);break;default:Sh(t,n)}}function yh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:F_(a,s);break t;case 22:a.memoizedState===null&&yh(a,s);break t;default:yh(a,s)}}t=t.sibling}}function H_(t){var n=t.alternate;n!==null&&(t.alternate=null,H_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&te(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,qn=!1;function Ai(t,n,a){for(a=a.child;a!==null;)G_(t,n,a),a=a.sibling}function G_(t,n,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:ze||Rn(a,n),Ai(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ze&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ze||Rn(a,n),Xo(a);var s=Je,c=qn;Za(a.type)&&(Je=a.stateNode,qn=!1),Ai(t,n,a),q0(a.stateNode,a.type,a.memoizedProps),Je=s,qn=c;break;case 5:ze||Rn(a,n),Xo(a);case 6:if(a.tag===6&&Xo(a),s=Je,c=qn,Je=null,Ai(t,n,a),Je=s,qn=c,Je!==null)if(qn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode),De=!0}catch(u){Be(a,n,u)}else try{Je.removeChild(a.stateNode),De=!0}catch(u){Be(a,n,u)}break;case 18:Je!==null&&(qn?(t=Je,D0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Vr(t)):D0(Je,a.stateNode));break;case 4:s=Je,c=qn,Je=a.stateNode.containerInfo,qn=!0,Ai(t,n,a),Je=s,qn=c;break;case 0:case 11:case 14:case 15:Va(2,a,n),ze||Va(4,a,n),Ai(t,n,a);break;case 1:ze||(Rn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&R_(a,n,s)),Ai(t,n,a);break;case 21:Ai(t,n,a);break;case 22:ze=(s=ze)||a.memoizedState!==null,Ai(t,n,a),ze=s;break;case 30:Rn(a,n),Ai(t,n,a);break;case 7:ze||Rn(a,n),Ai(t,n,a);break;default:Ai(t,n,a)}}function V_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Vr(t)}catch(a){Be(n,n.return,a)}}}function X_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Vr(t)}catch(a){Be(n,n.return,a)}}function Nx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new I_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new I_),n;default:throw Error(r(435,t.tag))}}function Rc(t,n){var a=Nx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=kx.bind(null,t,s);s.then(c,c)}})}function Fn(t,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var u=s[c],_=t,T=n,N=T;t:for(;N!==null;){switch(N.tag){case 27:if(Za(N.type)){Je=N.stateNode,qn=!1;break t}break;case 5:Je=N.stateNode,qn=!1;break t;case 3:case 4:Je=N.stateNode.containerInfo,qn=!0;break t}N=N.return}if(Je===null)throw Error(r(160));G_(_,T,u),Je=null,qn=!1,_=u.alternate,_!==null&&(_.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)k_(n,t,a),n=n.sibling}var Ri=null;function k_(t,n,a){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var _=s[u];_.ref.impl=_.nextImpl}Fn(n,t,a),Hn(t),c&4&&(Va(3,t,t.return),Vo(3,t),Va(5,t,t.return));break;case 1:Fn(n,t,a),Hn(t),c&512&&(ze||s===null||Rn(s,s.return)),c&64&&xn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ri,Fn(n,t,a),Hn(t),c&512&&(ze||s===null||Rn(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(xn)t.stateNode=R0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=u.ownerDocument||u;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[Ne]||s[Ct]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),Cn(s,n,a),s[Ct]=t,we(s),n=s;break t;case"link":if(u=Q0("link","href",c).get(n+(a.href||""))){for(_=0;_<u.length;_++)if(s=u[_],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(_,1);break e}}s=c.createElement(n),Cn(s,n,a),c.head.appendChild(s);break;case"meta":if(u=Q0("meta","content",c).get(n+(a.content||""))){for(_=0;_<u.length;_++)if(s=u[_],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(_,1);break e}}s=c.createElement(n),Cn(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[Ct]=t,we(s),n=s}t.stateNode=n}else xn||ad(u,t.type,t.stateNode);else t.stateNode=K0(u,a,t.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||ze||n.parentNode.removeChild(n)):c.count--,a===null?xn||ad(u,t.type,t.stateNode):K0(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&ch(t,t.memoizedProps,s.memoizedProps);break;case 27:Fn(n,t,a),Hn(t),c&512&&(ze||s===null||Rn(s,s.return)),s!==null&&c&4&&ch(t,t.memoizedProps,s.memoizedProps);break;case 5:if(u=ki,ki=!1,Fn(n,t,a),ki=u,Hn(t),c&512&&(ze||s===null||Rn(s,s.return)),t.flags&32){n=t.stateNode;try{sr(n,""),De=!0}catch(nt){Be(t,t.return,nt)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,ch(t,n,s!==null?s.memoizedProps:n)),c&1024&&(_h=!0);break;case 6:if(Fn(n,t,a),Hn(t),c&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,De=!0}catch(nt){Be(t,t.return,nt)}}break;case 3:if(De=!1,Vc=null,u=Ri,Ri=$o(n.containerInfo),Fn(n,t,a),Ri=u,Hn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Vr(n.containerInfo)}catch(nt){Be(t,t.return,nt)}_h&&(_h=!1,q_(t)),De=!1;break;case 4:c=ki,ki=xn,s=fm(),u=Ri,Ri=$o(t.stateNode.containerInfo),Fn(n,t,a),Hn(t),Ri=u,De&&ko&&(bc=!0),De=s,ki=c;break;case 12:Fn(n,t,a),Hn(t);break;case 31:Fn(n,t,a),Hn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Rc(t,n)));break;case 13:Fn(n,t,a),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Dc=G()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Rc(t,n)));break;case 22:u=t.memoizedState!==null,_=s!==null&&s.memoizedState!==null;var T=xn,N=ze,W=ki;xn=T||u,ki=W||u,ze=N||_,Fn(n,t,a),ze=N,ki=W,xn=T,Hn(t),c&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||_||xn||ze||(n=_||ze,a=xn,s=ze,xn=u||xn,ze=n,Xa(t,2),xn=a,ze=s),!u&&ki||Sh(t,u)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Rc(t,a))));break;case 19:Fn(n,t,a),Hn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Rc(t,n)));break;case 30:c&512&&(ze||s===null||Rn(s,s.return)),c=fm(),u=ko,_=(a&335544064)===a,T=t.memoizedProps,ko=_&&oa(T.default,T.update)!=="none",Fn(n,t,a),Hn(t),_&&s!==null&&De&&(t.flags|=4),ko=u,De=c;break;case 21:break;case 7:c&512&&(ze||s===null||Rn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Fn(n,t,a),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(w_(s)){a=s;break}s=s.return}s=null;for(var c=t.return;c!==null;){if(oh(c)){var u=c.stateNode;s===null?s=[u]:s.push(u)}if(rh(c))break;c=c.return}var _=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var T=a.stateNode,N=uh(t);xc(t,N,T,_);break;case 5:var W=a.stateNode;a.flags&32&&(sr(W,""),a.flags&=-33);var nt=uh(t);xc(t,nt,W,_);break;case 3:case 4:var pt=a.stateNode.containerInfo,X=uh(t);fh(t,X,pt,_);break;default:throw Error(r(161))}}catch(tt){Be(t,t.return,tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function q_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;q_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Gr=!0,n.reset(),Gr=!1),t=t.sibling}}function Tr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Y_(n,t),n=n.sibling;else z_(n)}function Y_(t,n){var a=t.alternate;if(a===null)hh(t,!1);else switch(t.tag){case 3:if(vh=qi=!1,N_(),Tr(n,t),!qi&&!bc){if(t=Vi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var c=t[s+1];L0(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),vh=!0}Vi=null;break;case 5:Tr(n,t);break;case 4:s=qi,qi=!1,Tr(n,t),qi&&(bc=!0),qi=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?hh(t,!1):Tr(n,t));break;case 30:s=qi,c=N_(),qi=!1,Tr(n,t),qi&&(t.flags|=4);var u=t.memoizedProps,_=t.stateNode;n=ra(u,_),_=ra(a.memoizedProps,_);var T=oa(u.default,u.update);T==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,kn=0,n=gh(t,a,n,_,T,u,!0),kn!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ur(t,t.memoizedProps.onUpdate),Vi=c):c!==null&&(c.push.apply(c,Vi),Vi=c),qi=(t.flags&32)!==0?!0:s;break;default:Tr(n,t)}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)B_(t,n.alternate,n),n=n.sibling}function Xa(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:Va(4,a,a.return),Xa(a,s);break;case 1:Rn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&R_(a,a.return,c),Xa(a,s);break;case 27:(s&2)!==0&&q0(a.stateNode,a.type,a.memoizedProps);case 5:Rn(a,a.return),a.tag!==5&&a.tag!==27||Xo(a),Xa(a,s);break;case 6:Xo(a);break;case 26:Rn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||ze||c.parentNode.removeChild(c),Xa(a,s);break;case 22:a.memoizedState===null&&Xa(a,s);break;case 30:Rn(a,a.return),Xa(a,s);break;case 7:Rn(a,a.return);default:Xa(a,s)}t=t.sibling}}function Ci(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=t,u=n,_=u.flags,T=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Ci(c,u,a),Vo(4,u);break;case 1:if(Ci(c,u,a),s=u,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){Be(s,s.return,nt)}if(s=u,c=s.updateQueue,c!==null){var N=s.stateNode;try{var W=c.shared.hiddenCallbacks;if(W!==null)for(c.shared.hiddenCallbacks=null,c=0;c<W.length;c++)pg(W[c],N)}catch(nt){Be(s,s.return,nt)}}T&&_&64&&A_(u),Gi(u,u.return);break;case 27:(a&2)!==0&&D_(u);case 5:u.tag!==5&&u.tag!==27||C_(u),Ci(c,u,a),T&&s===null&&_&4&&lh(u),Gi(u,u.return);break;case 6:C_(u);break;case 26:N=u.stateNode,u.memoizedState!==null||N===null||xn||ad($o(N.ownerDocument),u.type,N),Ci(c,u,a),T&&s===null&&_&4&&lh(u),Gi(u,u.return);break;case 12:Ci(c,u,a);break;case 31:Ci(c,u,a),T&&_&4&&V_(c,u);break;case 13:Ci(c,u,a),T&&_&4&&X_(c,u);break;case 22:u.memoizedState===null&&Ci(c,u,a),Gi(u,u.return);break;case 30:Ci(c,u,a),Gi(u,u.return);break;case 7:Gi(u,u.return);default:Ci(c,u,a)}n=n.sibling}}function xh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&wo(a))}function Mh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&wo(t))}function vi(t,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)W_(t,n,a,s),n=n.sibling;else c&&P_(n)}function W_(t,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Tc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),u&2048&&Vo(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),c&&vh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&wo(u)));break;case 12:if(u&2048){vi(t,n,a,s),u=n.stateNode;try{var _=n.memoizedProps,T=_.id,N=_.onPostCommit;typeof N=="function"&&N(T,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(W){Be(n,n.return,W)}}else vi(t,n,a,s);break;case 31:vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:_=n.stateNode,T=n.alternate,n.memoizedState!==null?(c&&T!==null&&T.memoizedState===null&&Tc(T),_._visibility&2?vi(t,n,a,s):qo(t,n)):(c&&T!==null&&T.memoizedState!==null&&Tc(n),_._visibility&2?vi(t,n,a,s):(_._visibility|=2,br(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&xh(T,n);break;case 24:vi(t,n,a,s),u&2048&&Mh(n.alternate,n);break;case 30:c&&(u=n.alternate,u!==null&&(Xi(u.child,!0),Xi(n.child,!0))),vi(t,n,a,s);break;default:vi(t,n,a,s)}}function br(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,_=n,T=a,N=s,W=_.flags;switch(_.tag){case 0:case 11:case 15:br(u,_,T,N,c),Vo(8,_);break;case 23:break;case 22:var nt=_.stateNode;_.memoizedState!==null?nt._visibility&2?br(u,_,T,N,c):qo(u,_):(nt._visibility|=2,br(u,_,T,N,c)),c&&W&2048&&xh(_.alternate,_);break;case 24:br(u,_,T,N,c),c&&W&2048&&Mh(_.alternate,_);break;default:br(u,_,T,N,c)}n=n.sibling}}function qo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:qo(a,s),c&2048&&xh(s.alternate,s);break;case 24:qo(a,s),c&2048&&Mh(s.alternate,s);break;default:qo(a,s)}n=n.sibling}}var Ps=8192;function zs(t,n,a){if(t.subtreeFlags&Ps)for(t=t.child;t!==null;)j_(t,n,a),t=t.sibling}function j_(t,n,a){switch(t.tag){case 26:zs(t,n,a),t.flags&Ps&&(t.memoizedState!==null?BM(a,Ri,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&ev(a,t)));break;case 5:zs(t,n,a),t.flags&Ps&&(t=t.stateNode,(n&335544128)===n&&ev(a,t));break;case 3:case 4:var s=Ri;Ri=$o(t.stateNode.containerInfo),zs(t,n,a),Ri=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Ps,Ps=16777216,zs(t,n,a),Ps=s):zs(t,n,a));break;case 30:if((t.flags&Ps)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var c=t.stateNode;c.paired=null,ii===null&&(ii=new Map),ii.set(s,c)}zs(t,n,a);break;default:zs(t,n,a)}}function Z_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,Q_(s,t)}Z_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)K_(t),t=t.sibling}function K_(t){switch(t.tag){case 0:case 11:case 15:Yo(t),t.flags&2048&&Va(9,t,t.return);break;case 3:Yo(t);break;case 12:Yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Cc(t)):Yo(t);break;default:Yo(t)}}function Cc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,Q_(s,t)}Z_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Va(8,n,n.return),Cc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cc(n));break;default:Cc(n)}t=t.sibling}}function Q_(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:wo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Mn=s;else t:for(a=t;Mn!==null;){s=Mn;var c=s.sibling,u=s.return;if(H_(s),s===a){Mn=null;break t}if(c!==null){c.return=u,Mn=c;break t}Mn=u}}}var Lx={getCacheForType:function(t){var n=Tn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(cn).controller.signal}},Ox=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,ye=null,Ee=0,Ie=0,ai=null,ka=!1,Ar=!1,Eh=!1,ga=0,sn=0,qa=0,Is=0,wc=0,si=0,Rr=0,Wo=null,Yn=null,Th=!1,Dc=0,J_=0,Uc=1/0,Nc=null,Ya=null,tn=0,wi=null,Bs=null,Wi=0,bh=0,Ah=null,$_=null,Cr=null,wr=null,Dr=null,jo=0,Lc=null;function ri(){return(Oe&2)!==0&&Ee!==0?Ee&-Ee:Mt.T!==null?zh():Et()}function t0(){if(si===0)if((Ee&536870912)===0||_e){var t=ia;ia<<=1,(ia&3932160)===0&&(ia=262144),si=t}else si=536870912;return t=bn.current,t!==null&&(t.flags|=32),si}function Ur(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=O0(ra(t.memoizedProps,a))),wr===null&&(wr=[]),wr.push(n.bind(null,s))}}function Wn(t,n,a){(t===Ye&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(Nr(t,0),Wa(t,Ee,si,!1)),Ss(t,a),((Oe&2)===0||t!==Ye)&&(t===Ye&&((Oe&2)===0&&(Is|=a),sn===4&&Wa(t,Ee,si,!1)),ji(t))}function e0(t,n,a){if((Oe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ra(t,n),c=s?Ix(t,n):Ch(t,n,!0),u=s;do{if(c===0){Ar&&!s&&Wa(t,n,0,!1);break}else{if(a=t.current.alternate,u&&!Px(a)){c=Ch(t,n,!1),u=!1;continue}if(c===2){if(u=n,t.errorRecoveryDisabledLanes&u)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var T=t;c=Wo;var N=T.current.memoizedState.isDehydrated;if(N&&(Nr(T,_).flags|=256),_=Ch(T,_,!1),_!==2&&_!==6){if(Eh&&!N){T.errorRecoveryDisabledLanes|=u,Is|=u,c=4;break t}u=Yn,Yn=c,u!==null&&(Yn===null?Yn=u:Yn.push.apply(Yn,u))}c=_}if(u=!1,c!==2)continue}}if(c===1){Nr(t,0),Wa(t,n,0,!0);break}t:{switch(s=t,u=c,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Wa(s,n,si,!ka);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Dc+300-G(),10<c)){if(Wa(s,n,si,!ka),vs(s,0,!0)!==0)break t;Wi=n,s.timeoutHandle=Wh(n0.bind(null,s,a,Yn,Nc,Th,n,si,Is,Rr,ka,u,"Throttled",-0,0),c);break t}n0(s,a,Yn,Nc,Th,n,si,Is,Rr,ka,u,null,-0,0)}}break}while(!0);ji(t)}function n0(t,n,a,s,c,u,_,T,N,W,nt,pt,X,tt){t.timeoutHandle=-1;var Dt=n.subtreeFlags,qt=(u&335544064)===u;if(pt=null,(qt||Dt&8192||(Dt&16785408)===16785408)&&(pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},ii=null,j_(n,u,pt),qt&&(Dt=pt,qt=t.containerInfo,qt=(qt.nodeType===9?qt:qt.ownerDocument).__reactViewTransition,qt!=null&&(Dt.count++,Dt.waitingForViewTransition=!0,Dt=nl.bind(Dt),qt.finished.then(Dt,Dt))),Dt=(u&62914560)===u?Dc-G():(u&4194048)===u?J_-G():0,Dt=FM(pt,Dt),Dt!==null)){Wi=u,t.cancelPendingCommit=Dt(u0.bind(null,t,n,u,a,s,c,_,T,N,W,nt,pt,null,X,tt)),Wa(t,u,_,!W);return}u0(t,n,u,a,s,c,_,T,N,W,nt,pt)}function Px(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],u=c.getSnapshot;c=c.value;try{if(!ei(u(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(t,n,a,s){n=Dl(t,n),n&=~wc,n&=~Is,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var u=31-Un(c),_=1<<u;s[u]=-1,c&=~_}a!==0&&R(t,a,n)}function Oc(){return(Oe&6)===0?(Zo(0),!1):!0}function Rh(){if(ye!==null){if(Ie===0)var t=ye.return;else t=ye,ua=bs=null,Pf(t),vr=null,No=0,t=ye;for(;t!==null;)b_(t.alternate,t),t=t.return;ye=null}}function Nr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,sM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,Rh(),Ye=t,ye=a=la(t.current,null),Ee=n,Ie=0,ai=null,ka=!1,Ar=Ra(t,n),Eh=!1,Rr=si=wc=Is=qa=sn=0,Yn=Wo=null,Th=!1,ga=Dl(t,n),Vl(),a}function i0(t,n){he=null,Mt.H=dc,n===_r||n===$l?(n=ug(),Ie=3):n===Mf?(n=ug(),Ie=4):Ie=n===Kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,ye===null&&(sn=1,pc(t,pi(n,t.current)))}function a0(){var t=bn.current;return t===null?!0:(Ee&4194048)===Ee?Ln===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===Ln:!1}function s0(){var t=Mt.H;return Mt.H=dc,t===null?dc:t}function r0(){var t=Mt.A;return Mt.A=Lx,t}function Pc(){sn=4,ka||(Ee&4194048)!==Ee&&bn.current!==null||(Ar=!0),(qa&134217727)===0&&(Is&134217727)===0||Ye===null||Wa(Ye,Ee,si,!1)}function Ch(t,n,a){var s=Oe;Oe|=2;var c=s0(),u=r0();(Ye!==t||Ee!==n)&&(Nc=null,Nr(t,n)),n=!1;var _=sn;t:do try{if(Ie!==0&&ye!==null){var T=ye,N=ai;switch(Ie){case 8:Rh(),_=6;break t;case 3:case 2:case 9:case 6:bn.current===null&&(n=!0);var W=Ie;if(Ie=0,ai=null,Lr(t,T,N,W),a&&Ar){_=0;break t}break;default:W=Ie,Ie=0,ai=null,Lr(t,T,N,W)}}zx(),_=sn;break}catch(nt){i0(t,nt)}while(!0);return n&&t.shellSuspendCounter++,ua=bs=null,Oe=s,Mt.H=c,Mt.A=u,ye===null&&(Ye=null,Ee=0,Vl()),_}function zx(){for(;ye!==null;)o0(ye)}function Ix(t,n){var a=Oe;Oe|=2;var s=s0(),c=r0();Ye!==t||Ee!==n?(Nc=null,Uc=G()+500,Nr(t,n)):Ar=Ra(t,n);t:do try{if(Ie!==0&&ye!==null){n=ye;var u=ai;e:switch(Ie){case 1:Ie=0,ai=null,Lr(t,n,u,1);break;case 2:case 9:if(lg(u)){Ie=0,ai=null,l0(n);break}n=function(){Ie!==2&&Ie!==9||Ye!==t||(Ie=7),ji(t)},u.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:lg(u)?(Ie=0,ai=null,l0(n)):(Ie=0,ai=null,Lr(t,n,u,7));break;case 5:var _=null;switch(ye.tag){case 26:_=ye.memoizedState;case 5:case 27:var T=ye;if(_?$0(_):T.stateNode.complete){Ie=0,ai=null;var N=T.sibling;if(N!==null)ye=N;else{var W=T.return;W!==null?(ye=W,zc(W)):ye=null}break e}}Ie=0,ai=null,Lr(t,n,u,5);break;case 6:Ie=0,ai=null,Lr(t,n,u,6);break;case 8:Rh(),sn=6;break t;default:throw Error(r(462))}}Bx();break}catch(nt){i0(t,nt)}while(!0);return ua=bs=null,Mt.H=s,Mt.A=c,Oe=a,ye!==null?0:(Ye=null,Ee=0,Vl(),sn)}function Bx(){for(;ye!==null&&!Pt();)o0(ye)}function o0(t){var n=E_(t.alternate,t,ga);t.memoizedProps=t.pendingProps,n===null?zc(t):ye=n}function l0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=g_(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=g_(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Pf(n);var s=n;s===yn&&(_e?(jl(s),s.tag===5&&s.stateNode!=null&&(Ze=s.stateNode)):(jl(s),_e=!0));default:b_(a,n),n=ye=Qm(n,ga),n=E_(a,n,ga)}t.memoizedProps=t.pendingProps,n===null?zc(t):ye=n}function Lr(t,n,a,s){ua=bs=null,Pf(n),vr=null,No=0;var c=n.return;try{if(bx(t,c,n,a,Ee)){sn=1,pc(t,pi(a,t.current)),ye=null;return}}catch(u){if(c!==null)throw ye=c,u;sn=1,pc(t,pi(a,t.current)),ye=null;return}n.flags&32768?(_e||s===1?t=!0:Ar||(Ee&536870912)!==0?t=!1:(ka=t=!0,(s===2||s===9||s===3||s===6)&&(s=bn.current,s!==null&&s.tag===13&&(s.flags|=16384))),c0(n,t)):zc(n)}function zc(t){var n=t;do{if((n.flags&32768)!==0){c0(n,ka);return}t=n.return;var a=wx(n.alternate,n,ga);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);sn===0&&(sn=5)}function c0(t,n){do{var a=Dx(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);sn=6,ye=null}function u0(t,n,a,s,c,u,_,T,N,W,nt,pt){t.cancelPendingCommit=null;do Ic();while(tn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Ye&&(ye=Ye=null,Ee=0),Bs=n,wi=t,Wi=a,Ah=c,$_=s,Fx(t,n,a,_,T,N,pt)}}function Fx(t,n,a,s,c,u,_){var T=n.lanes|n.childLanes;if(bh=T,T|=cf,Fu(t,a,T,s,c,u),wr=null,(a&335544064)===a?(Dr=dx(t),s=10262):(Dr=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,qx(yt,function(){return Nh(),null})):(t.callbackNode=null,t.callbackPriority=0),Mc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Mt.T,Mt.T=null,c=Yt.p,Yt.p=2,u=Oe,Oe|=4;try{Ux(t,n,a)}finally{Oe=u,Yt.p=c,Mt.T=s}}tn=1,Mc?Cr=fM(_,t.containerInfo,Dr,wh,Dh,Gx,Uh,Nh,Hx):(wh(),Dh(),Uh())}function Hx(t){if(tn!==0){var n=wi.onRecoverableError;n(t,{componentStack:null})}}function Gx(){tn===3&&(tn=0,Y_(Bs,wi),tn=4)}function wh(){if(tn===1){tn=0;var t=wi,n=Bs,a=Wi,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Mt.T,Mt.T=null;var c=Yt.p;Yt.p=2;var u=Oe;Oe|=4;try{ko=bc=!1,k_(n,t,a),a=kh;var _=Gm(t.containerInfo),T=a.focusedElem,N=a.selectionRange;if(_!==T&&T&&T.ownerDocument&&Hm(T.ownerDocument.documentElement,T)){if(N!==null&&af(T)){var W=N.start,nt=N.end;if(nt===void 0&&(nt=W),"selectionStart"in T)T.selectionStart=W,T.selectionEnd=Math.min(nt,T.value.length);else{var pt=T.ownerDocument||document,X=pt&&pt.defaultView||window;if(X.getSelection){var tt=X.getSelection(),Dt=T.textContent.length,qt=Math.min(N.start,Dt),de=N.end===void 0?qt:Math.min(N.end,Dt);!tt.extend&&qt>de&&(_=de,de=qt,qt=_);var Y=Fm(T,qt),H=Fm(T,de);if(Y&&H&&(tt.rangeCount!==1||tt.anchorNode!==Y.node||tt.anchorOffset!==Y.offset||tt.focusNode!==H.node||tt.focusOffset!==H.offset)){var J=pt.createRange();J.setStart(Y.node,Y.offset),tt.removeAllRanges(),qt>de?(tt.addRange(J),tt.extend(H.node,H.offset)):(J.setEnd(H.node,H.offset),tt.addRange(J))}}}}for(pt=[],tt=T;tt=tt.parentNode;)tt.nodeType===1&&pt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<pt.length;T++){var ht=pt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Gr=!!Xh,kh=Xh=null}finally{Oe=u,Yt.p=c,Mt.T=s}}t.current=n,tn=2}}function Dh(){if(tn===2){tn=0;var t=wi,n=Bs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Mt.T,Mt.T=null;var s=Yt.p;Yt.p=2;var c=Oe;Oe|=4;try{B_(t,n.alternate,n)}finally{Oe=c,Yt.p=s,Mt.T=a}}tn=3}}function Uh(){if(tn===4||tn===3){tn=0;var t=Cr;Cr=null,fe();var n=wi,a=Bs,s=Wi,c=$_,u=(s&335544064)===s?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?tn=5:(tn=0,Bs=wi=null,f0(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(Ya=null),Q(s),a=a.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Me,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Mt.T,u=Yt.p,Yt.p=2,Mt.T=null;try{for(var _=n.onRecoverableError,T=0;T<c.length;T++){var N=c[T];_(N.value,{componentStack:N.stack})}}finally{Mt.T=a,Yt.p=u}}if(c=wr,_=Dr,Dr=null,c!==null&&(wr=null,_===null&&(_=[]),t!==null))for(N=0;N<c.length;N++)a=(0,c[N])(_),a!==void 0&&t.finished.finally(a);(Wi&3)!==0&&Ic(),ji(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===Lc?jo++:(jo=0,Lc=n):(jo=0,Lc=null),Zo(0)}}function f0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,wo(n)))}function Ic(){return Cr!==null&&(Cr.skipTransition(),Cr=null),wh(),Dh(),Uh(),Nh()}function Nh(){if(tn!==5)return!1;var t=wi,n=bh;bh=0;var a=Q(Wi),s=Mt.T,c=Yt.p;try{Yt.p=32>a?32:a,Mt.T=null,a=Ah,Ah=null;var u=wi,_=Wi;if(tn=0,Bs=wi=null,Wi=0,(Oe&6)!==0)throw Error(r(331));var T=Oe;if(Oe|=4,K_(u.current),W_(u,u.current,_,a),Oe=T,Zo(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Me,u)}catch{}return!0}finally{Yt.p=c,Mt.T=s,f0(t,n)}}function h0(t,n,a){n=pi(a,n),n=Zf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(Ss(t,2),ji(t))}function Be(t,n,a){if(t.tag===3)h0(t,t,a);else for(;n!==null;){if(n.tag===3){h0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ya===null||!Ya.has(s))){t=pi(a,t),a=l_(2),s=Ba(n,a,2),s!==null&&(c_(a,s,n,t),Ss(s,2),ji(s));break}}n=n.return}}function Lh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Ox;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Eh=!0,c.add(a),t=Vx.bind(null,t,n,a),n.then(t,t))}function Vx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(Ee&a)===a&&((sn===4||sn===3&&(Ee&62914560)===Ee&&300>G()-Dc)&&(Oe&2)===0?Nr(t,0):wc|=a,Rr===Ee&&(Rr=0)),ji(t)}function d0(t,n){n===0&&(n=Ul()),t=Ms(t,n),t!==null&&(Ss(t,n),ji(t))}function Xx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),d0(t,a)}function kx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),d0(t,a)}function qx(t,n){return ne(t,n)}var Or=null,Pr=null,Oh=!1,Bc=!1,Ph=!1,ja=0;function ji(t){t!==Pr&&t.next===null&&(Pr===null?Or=Pr=t:Pr=Pr.next=t),Bc=!0,Oh||(Oh=!0,Wx())}function Zo(t,n){if(!Ph&&Bc){Ph=!0;do for(var a=!1,s=Or;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var u=0;else{var _=s.suspendedLanes,T=s.pingedLanes;u=(1<<31-Un(42|t)+1)-1,u&=c&~(_&~T),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,_0(s,u))}else u=Ee,u=vs(s,s===Ye?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Ra(s,u)||(a=!0,_0(s,u));s=s.next}while(a);Ph=!1}}function Yx(){p0()}function p0(){Bc=Oh=!1;var t=0;ja!==0&&aM()&&(t=ja);for(var n=G(),a=null,s=Or;s!==null;){var c=s.next,u=m0(s,n);u===0?(s.next=null,a===null?Or=c:a.next=c,c===null&&(Pr=a)):(a=s,(t!==0||(u&3)!==0)&&(Bc=!0)),s=c}tn!==0&&tn!==5||Zo(t),ja!==0&&(ja=0)}function m0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var _=31-Un(u),T=1<<_,N=c[_];N===-1?((T&a)===0||(T&s)!==0)&&(c[_]=Bu(T,n)):N<=n&&(t.expiredLanes|=T),u&=~T}if(n=Ye,a=Ee,a=vs(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Zt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ra(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Zt(s),Q(a)){case 2:case 8:a=Vt;break;case 32:a=yt;break;case 268435456:a=Wt;break;default:a=yt}return s=g0.bind(null,t),a=ne(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Zt(s),t.callbackPriority=2,t.callbackNode=null,2}function g0(t,n){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ic()&&t.callbackNode!==a)return null;var s=Ee;return s=vs(t,t===Ye?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(e0(t,s,n),m0(t,G()),t.callbackNode!=null&&t.callbackNode===a?g0.bind(null,t):null)}function _0(t,n){if(Ic())return null;e0(t,n,!0)}function Wx(){rM(function(){(Oe&6)!==0?ne(wt,Yx):p0()})}function zh(){if(ja===0){var t=Cs;t===0&&(t=gs,gs<<=1,(gs&261888)===0&&(gs=256)),ja=t}return ja}function v0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ol(t)}function jx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var u=v0((c[kt]||null).action),_=s.submitter;_&&(n=(n=_[kt]||null)?v0(n.formAction):_.getAttribute("formAction"),n!==null&&(u=n,_=null));var T=new Bl("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ja!==0){var N=new FormData(c,_);kf(a,{pending:!0,data:N,method:c.method,action:u},null,N)}}else typeof u=="function"&&(T.preventDefault(),N=new FormData(c,_),kf(a,{pending:!0,data:N,method:c.method,action:u},u,N))},currentTarget:c}]})}}for(var Ih=0;Ih<lf.length;Ih++){var Bh=lf[Ih],Zx=Bh.toLowerCase(),Kx=Bh[0].toUpperCase()+Bh.slice(1);bi(Zx,"on"+Kx)}bi(km,"onAnimationEnd"),bi(qm,"onAnimationIteration"),bi(Ym,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(sx,"onTransitionRun"),bi(rx,"onTransitionStart"),bi(ox,"onTransitionCancel"),bi(Wm,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function S0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var u=void 0;if(n)for(var _=s.length-1;0<=_;_--){var T=s[_],N=T.instance,W=T.currentTarget;if(T=T.listener,N!==u&&c.isPropagationStopped())break t;u=T,c.currentTarget=W;try{u(c)}catch(nt){Gl(nt)}c.currentTarget=null,u=N}else for(_=0;_<s.length;_++){if(T=s[_],N=T.instance,W=T.currentTarget,T=T.listener,N!==u&&c.isPropagationStopped())break t;u=T,c.currentTarget=W;try{u(c)}catch(nt){Gl(nt)}c.currentTarget=null,u=N}}}}function xe(t,n){var a=n[$t];a===void 0&&(a=n[$t]=new Set);var s=t+"__bubble";a.has(s)||(y0(n,t,2,!1),a.add(s))}function Fh(t,n,a){var s=0;n&&(s|=4),y0(a,t,s,n)}var Fc="_reactListening"+Math.random().toString(36).slice(2);function Hh(t){if(!t[Fc]){t[Fc]=!0,je.forEach(function(a){a!=="selectionchange"&&(Qx.has(a)||Fh(a,!1,t),Fh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Fc]||(n[Fc]=!0,Fh("selectionchange",!1,n))}}function y0(t,n,a,s){switch(cv(n)){case 2:var c=XM;break;case 8:c=kM;break;default:c=rd}a=c.bind(null,n,a,t),c=void 0,!Wu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Gh(t,n,a,s,c){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var T=s.stateNode.containerInfo;if(T===c)break;if(_===4)for(_=s.return;_!==null;){var N=_.tag;if((N===3||N===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;T!==null;){if(_=Le(T),_===null)return;if(N=_.tag,N===5||N===6||N===26||N===27){s=u=_;continue t}T=T.parentNode}}s=s.return}ym(function(){var W=u,nt=qu(a),pt=[];t:{var X=jm.get(t);if(X!==void 0){var tt=Bl,Dt=t;switch(t){case"keypress":if(zl(a)===0)break t;case"keydown":case"keyup":tt=Py;break;case"focusin":Dt="focus",tt=Qu;break;case"focusout":Dt="blur",tt=Qu;break;case"beforeblur":case"afterblur":tt=Qu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=Em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=Ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=Hy;break;case km:case qm:case Ym:tt=Ay;break;case Wm:tt=Vy;break;case"scroll":case"scrollend":tt=xy;break;case"wheel":tt=ky;break;case"copy":case"cut":case"paste":tt=Cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=bm;break;case"submit":tt=By;break;case"toggle":case"beforetoggle":tt=Yy}var qt=(n&4)!==0,de=!qt&&(t==="scroll"||t==="scrollend"),Y=qt?X!==null?X+"Capture":null:X;qt=[];for(var H=W,J;H!==null;){var ht=H;if(J=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||J===null||Y===null||(ht=vo(H,Y),ht!=null&&qt.push(Qo(H,ht,J))),de)break;H=H.return}0<qt.length&&(X=new tt(X,Dt,null,a,nt),pt.push({event:X,listeners:qt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",tt&&a!==ku&&(Dt=a.relatedTarget||a.fromElement)&&(Le(Dt)||Dt[ee]))break t;(X||tt)&&(Dt=nt.window===nt?nt:(tt=nt.ownerDocument)?tt.defaultView||tt.parentWindow:window,X?(tt=a.relatedTarget||a.toElement,X=W,tt=tt?Le(tt):null,tt!==null&&(de=f(tt),qt=tt.tag,tt!==de||qt!==5&&qt!==27&&qt!==6)&&(tt=null)):(X=null,tt=W),X!==tt&&(qt=Em,ht="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(qt=bm,ht="onPointerLeave",Y="onPointerEnter",H="pointer"),de=X==null?Dt:mn(X),J=tt==null?Dt:mn(tt),Dt=new qt(ht,H+"leave",X,a,nt),Dt.target=de,Dt.relatedTarget=J,ht=null,Le(nt)===W&&(qt=new qt(Y,H+"enter",tt,a,nt),qt.target=J,qt.relatedTarget=de,ht=qt),de=ht,qt=X&&tt?B(X,tt,Jx):null,X!==null&&x0(pt,Dt,X,qt,!1),tt!==null&&de!==null&&x0(pt,de,tt,qt,!0)))}t:{if(X=W?mn(W):window,tt=X.nodeName&&X.nodeName.toLowerCase(),tt==="select"||tt==="input"&&X.type==="file")var Ht=Lm;else if(Um(X))if(Om)Ht=nx;else{Ht=tx;var Te=$y}else tt=X.nodeName,!tt||tt.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?W&&Xu(W.elementType)&&(Ht=Lm):Ht=ex;if(Ht&&(Ht=Ht(t,W))){Nm(pt,Ht,a,nt);break t}Te&&Te(t,X,W)}switch(Te=W?mn(W):window,t){case"focusin":(Um(Te)||Te.contentEditable==="true")&&(cr=Te,sf=W,Ao=null);break;case"focusout":Ao=sf=cr=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,Vm(pt,a,nt);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":Vm(pt,a,nt)}var Jt;if($u)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else lr?wm(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Am&&a.locale!=="ko"&&(lr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&lr&&(Jt=xm()):(wa=nt,ju="value"in wa?wa.value:wa.textContent,lr=!0)),Te=Hc(W,ae),0<Te.length&&(ae=new Tm(ae,t,null,a,nt),pt.push({event:ae,listeners:Te}),Jt?ae.data=Jt:(Jt=Dm(a),Jt!==null&&(ae.data=Jt)))),(Jt=jy?Zy(t,a):Ky(t,a))&&(ae=Hc(W,"onBeforeInput"),0<ae.length&&(Te=new Tm("onBeforeInput","beforeinput",null,a,nt),pt.push({event:Te,listeners:ae}),Te.data=Jt)),jx(pt,t,W,a,nt)}S0(pt,n)})}function Qo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Hc(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=vo(t,a),c!=null&&s.unshift(Qo(t,c,u)),c=vo(t,n),c!=null&&s.push(Qo(t,c,u))),t.tag===3)return s;t=t.return}return[]}function Jx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function x0(t,n,a,s,c){for(var u=n._reactName,_=[];a!==null&&a!==s;){var T=a,N=T.alternate,W=T.stateNode;if(T=T.tag,N!==null&&N===s)break;T!==5&&T!==26&&T!==27||W===null||(N=W,c?(W=vo(a,u),W!=null&&_.unshift(Qo(a,W,N))):c||(W=vo(a,u),W!=null&&_.push(Qo(a,W,N)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var $x=/\r\n?/g,tM=/\u0000|\uFFFD/g;function M0(t){return(typeof t=="string"?t:""+t).replace($x,`
`).replace(tM,"")}function E0(t,n){return n=M0(n),M0(t)===n}function Fe(t,n,a,s,c,u){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||sr(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&sr(t,""+s);else return;break;case"className":Ll(t,"class",s);break;case"tabIndex":Ll(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ll(t,a,s);break;case"style":vm(t,s,u);return;case"data":if(n!=="object"){Ll(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ol(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Fe(t,n,"name",c.name,c,null),Fe(t,n,"formEncType",c.formEncType,c,null),Fe(t,n,"formMethod",c.formMethod,c,null),Fe(t,n,"formTarget",c.formTarget,c,null)):(Fe(t,n,"encType",c.encType,c,null),Fe(t,n,"method",c.method,c,null),Fe(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ol(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Bi);return;case"onScroll":s!=null&&xe("scroll",t);return;case"onScrollEnd":s!=null&&xe("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ol(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),Nl(t,"popover",s);break;case"xlinkActuate":aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":aa(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":aa(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":aa(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":aa(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Nl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Sy.get(a)||a,Nl(t,a,s);else return}De=!0}function Vh(t,n,a,s,c,u){switch(a){case"style":vm(t,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")sr(t,s);else if(typeof s=="number"||typeof s=="bigint")sr(t,""+s);else return;break;case"onScroll":s!=null&&xe("scroll",t);return;case"onScrollEnd":s!=null&&xe("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Bi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!zn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),u=a.slice(2,c?a.length-7:void 0),n=t[kt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(u,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,s,c);break t}De=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Nl(t,a,s)}return}De=!0}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var _=a[u];if(_!=null)switch(u){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,u,_,a,null)}}c&&Fe(t,n,"srcSet",a.srcSet,a,null),s&&Fe(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var T=u=_=c=null,N=null,W=null;for(s in a)if(a.hasOwnProperty(s)){var nt=a[s];if(nt!=null)switch(s){case"name":c=nt;break;case"type":_=nt;break;case"checked":N=nt;break;case"defaultChecked":W=nt;break;case"value":u=nt;break;case"defaultValue":T=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Fe(t,n,s,nt,a,null)}}pm(t,u,T,N,W,_,c,!1);return;case"select":xe("invalid",t),s=_=u=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":u=T;break;case"defaultValue":_=T;break;case"multiple":s=T;default:Fe(t,n,c,T,a,null)}n=u,a=_,t.multiple=!!s,n!=null?ar(t,!!s,n,!1):a!=null&&ar(t,!!s,a,!0);return;case"textarea":xe("invalid",t),u=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":s=T;break;case"defaultValue":c=T;break;case"children":u=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Fe(t,n,_,T,a,null)}gm(t,s,c,u);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Fe(t,n,N,s,a,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<Ko.length;s++)xe(Ko[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in a)if(a.hasOwnProperty(W)&&(s=a[W],s!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,W,s,a,null)}return;default:if(Xu(n)){for(nt in a)a.hasOwnProperty(nt)&&(s=a[nt],s!==void 0&&Vh(t,n,nt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Fe(t,n,T,s,a,null))}var eM={};function nM(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,_=null,T=null,N=null,W=null,nt=null;for(tt in a){var pt=a[tt];if(a.hasOwnProperty(tt)&&pt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":N=pt;default:s.hasOwnProperty(tt)||Fe(t,n,tt,null,s,pt)}}for(var X in s){var tt=s[X];if(pt=a[X],s.hasOwnProperty(X)&&(tt!=null||pt!=null))switch(X){case"type":tt!==pt&&(De=!0),u=tt;break;case"name":tt!==pt&&(De=!0),c=tt;break;case"checked":tt!==pt&&(De=!0),W=tt;break;case"defaultChecked":tt!==pt&&(De=!0),nt=tt;break;case"value":tt!==pt&&(De=!0),_=tt;break;case"defaultValue":tt!==pt&&(De=!0),T=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:tt!==pt&&Fe(t,n,X,tt,s,pt)}}Gu(t,_,T,N,W,nt,u,c);return;case"select":tt=_=T=X=null;for(u in a)if(N=a[u],a.hasOwnProperty(u)&&N!=null)switch(u){case"value":break;case"multiple":tt=N;default:s.hasOwnProperty(u)||Fe(t,n,u,null,s,N)}for(c in s)if(u=s[c],N=a[c],s.hasOwnProperty(c)&&(u!=null||N!=null))switch(c){case"value":u!==N&&(De=!0),X=u;break;case"defaultValue":u!==N&&(De=!0),T=u;break;case"multiple":u!==N&&(De=!0),_=u;default:u!==N&&Fe(t,n,c,u,s,N)}n=T,a=_,s=tt,X!=null?ar(t,!!a,X,!1):!!s!=!!a&&(n!=null?ar(t,!!a,n,!0):ar(t,!!a,a?[]:"",!1));return;case"textarea":tt=X=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Fe(t,n,T,null,s,c)}for(_ in s)if(c=s[_],u=a[_],s.hasOwnProperty(_)&&(c!=null||u!=null))switch(_){case"value":c!==u&&(De=!0),X=c;break;case"defaultValue":c!==u&&(De=!0),tt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==u&&Fe(t,n,_,c,s,u)}mm(t,X,tt);return;case"option":for(var Dt in a)if(X=a[Dt],a.hasOwnProperty(Dt)&&X!=null&&!s.hasOwnProperty(Dt))switch(Dt){case"selected":t.selected=!1;break;default:Fe(t,n,Dt,null,s,X)}for(N in s)if(X=s[N],tt=a[N],s.hasOwnProperty(N)&&X!==tt&&(X!=null||tt!=null))switch(N){case"selected":X!==tt&&(De=!0),t.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:Fe(t,n,N,X,s,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qt in a)X=a[qt],a.hasOwnProperty(qt)&&X!=null&&!s.hasOwnProperty(qt)&&Fe(t,n,qt,null,s,X);for(W in s)if(X=s[W],tt=a[W],s.hasOwnProperty(W)&&X!==tt&&(X!=null||tt!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,n));break;default:Fe(t,n,W,X,s,tt)}return;default:if(Xu(n)){for(var de in a)X=a[de],a.hasOwnProperty(de)&&X!==void 0&&!s.hasOwnProperty(de)&&Vh(t,n,de,void 0,s,X);for(nt in s)X=s[nt],tt=a[nt],!s.hasOwnProperty(nt)||X===tt||X===void 0&&tt===void 0||Vh(t,n,nt,X,s,tt);return}}for(var Y in a)X=a[Y],a.hasOwnProperty(Y)&&X!=null&&!s.hasOwnProperty(Y)&&Fe(t,n,Y,null,s,X);for(pt in s)X=s[pt],tt=a[pt],!s.hasOwnProperty(pt)||X===tt||X==null&&tt==null||Fe(t,n,pt,X,s,tt)}function T0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],u=c.transferSize,_=c.initiatorType,T=c.duration;if(u&&T&&T0(_)){for(_=0,T=c.responseEnd,s+=1;s<a.length;s++){var N=a[s],W=N.startTime;if(W>T)break;var nt=N.transferSize,pt=N.initiatorType;nt&&T0(pt)&&(N=N.responseEnd,_+=nt*(N<T?1:(T-W)/(N-W)))}if(--s,n+=8*(u+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Xh=null,kh=null;function Jo(t){return t.nodeType===9?t:t.ownerDocument}function b0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function R0(t,n,a,s){return a=Jo(a).createElement(t),a[Ct]=s,a[kt]=n,Cn(a,t,n),we(a),a}function qh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yh=null;function aM(){var t=window.event;return t&&t.type==="popstate"?t===Yh?!1:(Yh=t,!0):(Yh=null,!1)}var Wh=typeof setTimeout=="function"?setTimeout:void 0,sM=typeof clearTimeout=="function"?clearTimeout:void 0,C0=typeof Promise=="function"?Promise:void 0,w0=typeof requestAnimationFrame=="function"?requestAnimationFrame:Wh,rM=typeof queueMicrotask=="function"?queueMicrotask:typeof C0<"u"?function(t){return C0.resolve(null).then(t).catch(oM)}:Wh;function oM(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function D0(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),Vr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")ed(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ed(a);for(var u=a.firstChild;u;){var _=u.nextSibling,T=u.nodeName;u[Ne]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=_}}else a==="body"&&ed(t.ownerDocument.body);a=c}while(a);Vr(n)}function U0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function N0(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var u=n[c];0<u.width&&0<u.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function L0(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function lM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function jh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return lM(n,a,t)}function cM(t){return t.documentElement.clientHeight}function uM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function fM(t,n,a,s,c,u,_,T,N){var W=n.nodeType===9?n:n.ownerDocument;try{var nt=W.startViewTransition({update:function(){var X=W.defaultView,tt=X.navigation&&X.navigation.transition,Dt=W.fonts.status;s();var qt=[];if(Dt==="loaded"&&(cM(W),W.fonts.status==="loading"&&qt.push(W.fonts.ready)),Dt=qt.length,t!==null)for(var de=t.suspenseyImages,Y=0,H=0;H<de.length;H++){var J=de[H];if(!J.complete){var ht=J.getBoundingClientRect();if(0<ht.bottom&&0<ht.right&&ht.top<X.innerHeight&&ht.left<X.innerWidth){if(Y+=tv(J),Y>Xc){qt.length=Dt;break}J=new Promise(uM.bind(J)),qt.push(J)}}}if(0<qt.length)return X=Promise.race([Promise.all(qt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(c,c),(tt?Promise.allSettled([tt.finished,X]):X).then(u,u);if(c(),tt)return tt.finished.then(u,u);u()},types:a});W.__reactViewTransition=nt;var pt=[];return nt.ready.then(function(){for(var X=W.documentElement.getAnimations({subtree:!0}),tt=0;tt<X.length;tt++){var Dt=X[tt],qt=Dt.effect,de=qt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){pt.push(Dt),Dt=qt.getKeyframes();for(var Y=de=void 0,H=!0,J=0;J<Dt.length;J++){var ht=Dt[J],Ht=ht.width;if(de===void 0)de=Ht;else if(de!==Ht){H=!1;break}if(Ht=ht.height,Y===void 0)Y=Ht;else if(Y!==Ht){H=!1;break}delete ht.width,delete ht.height,ht.transform==="none"&&delete ht.transform}H&&de!==void 0&&Y!==void 0&&(qt.setKeyframes(Dt),H=getComputedStyle(qt.target,qt.pseudoElement),H.width!==de||H.height!==Y)&&(H=Dt[0],H.width=de,H.height=Y,H=Dt[Dt.length-1],H.width=de,H.height=Y,qt.setKeyframes(Dt))}}_()},function(X){W.__reactViewTransition===nt&&(W.__reactViewTransition=null);try{if(typeof X=="object"&&X!==null)switch(X.name){case"InvalidStateError":(X.message==="View transition was skipped because document visibility state is hidden."||X.message==="Skipping view transition because document visibility state has become hidden."||X.message==="Skipping view transition because viewport size changed."||X.message==="Transition was aborted because of invalid state")&&(X=null)}X!==null&&N(X)}finally{s(),c(),_()}}),nt.finished.finally(function(){for(var X=0;X<pt.length;X++)pt[X].cancel();W.__reactViewTransition===nt&&(W.__reactViewTransition=null),T()}),nt}catch{return s(),c(),_(),null}}function Fs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Fs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Fs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var u=a[c].effect;u!==null&&u.target===t&&u.pseudoElement===n&&s.push(a[c])}return s},Fs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function O0(t){return{name:t,group:new Fs("group",t),imagePair:new Fs("image-pair",t),old:new Fs("old",t),new:new Fs("new",t)}}function oi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}oi.prototype.addEventListener=function(t,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(z0(u,t,n,a)===-1){var _=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(N){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,N):n.handleEvent(N)}),s!==null&&(c=_.removeEventListener.bind(_,t,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=zr(a),u.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:c}),g(this._fragmentFiber.child,!1,hM,t,T,s)}this._eventListeners=u}};function hM(t,n,a,s){return M(t).addEventListener(n,a,s),!1}oi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=z0(s,t,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var u=c.cleanup;c=zr(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,dM,t,a,c),s.splice(n,1),u!==null&&u()}};function dM(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function zr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function P0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function z0(t,n,a,s){if(t.length===0)return-1;s=P0(s);for(var c=0;c<t.length;c++){var u=t[c];if(u.type===n&&u.listener===a&&P0(u.optionsOrUseCapture)===s)return c}return-1}oi.prototype.dispatchEvent=function(t){var n=S(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var u=a[c];s.addEventListener(u.type,u.attachedListener,zr(u.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(c=0;c<a.length;c++)u=a[c],s.removeEventListener(u.type,u.attachedListener,zr(u.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},oi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,I0,t,void 0,void 0)};function I0(t,n){return t.tag===6?!1:(t=M(t),bM(t,n))}oi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,Zh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!I0(n[a],t);a--);};function Zh(t,n){return n.push(t),!1}oi.prototype.blur=function(){var t=S(this._fragmentFiber);t!==null&&(t=M(t),t=Jo(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,pM,t,void 0,void 0))};function pM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}oi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,mM,t,void 0,void 0)};function mM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}oi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,gM,t,void 0,void 0);for(var a=n=0;a<Di.length;a++){var s=Di[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Di[n++]=s}Di.length=n}};function gM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Di=[],Kh=!1;function _M(t,n,a){Di.push({fragmentInstance:t,observer:n,instance:a}),Kh||(Kh=!0,AM(function(){Kh=!1;var s=Di;Di=[];for(var c=0;c<s.length;c++){var u=s[c];u.observer.unobserve(u.instance)}}))}oi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,vM,t,void 0,void 0),t};function vM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}oi.prototype.getRootNode=function(t){var n=S(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},oi.prototype.compareDocumentPosition=function(t){var n=S(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,Zh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,x(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var u=x(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),T=c.compareDocumentPosition(t),N=_&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=s&&u&&_&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||u&&c===t||N||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!u&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||SM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function SM(t,n,a,s,c){var u=Le(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=c.ownerDocument,c===u||c===u.documentElement||c===u.body;t:{for(u=n,n=S(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=B(a,u,F),n===null?n=!1:(g(n,!0,P,u,a),u=y,y=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=B(s,u,F),n===null?n=!1:(g(n,!0,w,u,s),u=y,O=y=null,n=u!==null)),n):!1}function B0(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}oi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,Zh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=E(this._fragmentFiber);if(s=a?s[1]||s[0]||S(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),B0(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=M(c),B0(c,a)):M(c).scrollIntoView(t),s+=a?-1:1}};function yM(t,n){return t=M(t),F0(t,n),!1}function F0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function H0(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.addEventListener(c.type,c.attachedListener,zr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var _=0,T=0;T<Di.length;T++){var N=Di[T];(N.fragmentInstance!==n||N.observer!==u||N.instance!==t)&&(Di[_++]=N)}Di.length=_,u.observe(t)}),F0(t,n))}function xM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.removeEventListener(c.type,c.attachedListener,zr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?_M(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Qh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qh(a),te(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function MM(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ne])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function EM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Si(t.nextSibling),t===null))return null;return t}function G0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Si(t.nextSibling),t===null))return null;return t}function Jh(t){return t.data==="$?"||t.data==="$~"}function $h(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function TM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var td=null;function V0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function X0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function bM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function AM(t){w0(function(){w0(function(n){return t(n)})})}function k0(t,n,a){switch(n=Jo(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function q0(t,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&Fe(t,n,s,null,eM,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Bi&&(t.onclick=null),te(t)}function ed(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);te(t)}var yi=new Map,Y0=new Set;function $o(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var _a=Yt.d;Yt.d={f:RM,r:CM,D:wM,C:DM,L:UM,m:NM,X:OM,S:LM,M:PM};function RM(){var t=_a.f(),n=Oc();return t||n}function CM(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?jg(n):_a.r(t)}var Ir=typeof document>"u"?null:document;function W0(t,n,a){var s=Ir;if(s&&typeof n=="string"&&n){var c=hi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Y0.has(c)||(Y0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Cn(n,"link",t),we(n),s.head.appendChild(n)))}}function wM(t){_a.D(t),W0("dns-prefetch",t,null)}function DM(t,n){_a.C(t,n),W0("preconnect",t,n)}function UM(t,n,a){_a.L(t,n,a);var s=Ir;if(s&&t&&n){var c='link[rel="preload"][as="'+hi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+hi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+hi(a.imageSizes)+'"]')):c+='[href="'+hi(t)+'"]';var u=c;switch(n){case"style":u=Br(t);break;case"script":u=Fr(t)}if(!(yi.has(u)||(t=L({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(u,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(tl(u))||n==="script"&&s.querySelector(el(u))))){var _=s.createElement("link");Cn(_,"link",t),n==="style"&&(_[Ce]=!0,_.onload=_.onerror=function(){Ca(_)}),we(_),s.head.appendChild(_)}}}function NM(t,n){_a.m(t,n);var a=Ir;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+hi(s)+'"][href="'+hi(t)+'"]',u=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Fr(t)}if(!yi.has(u)&&(t=L({rel:"modulepreload",href:t},n),yi.set(u,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(el(u)))return}s=a.createElement("link"),Cn(s,"link",t),we(s),a.head.appendChild(s)}}}function LM(t,n,a){_a.S(t,n,a);var s=Ir;if(s&&t){var c=$n(s).hoistableStyles,u=Br(t);n=n||"default";var _=c.get(u);if(!_){var T={loading:0,preload:null};if(_=s.querySelector(tl(u)))T.loading=5;else{t=L({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(u))&&nd(t,a);var N=_=s.createElement("link");we(N),Cn(N,"link",t),N._p=new Promise(function(W,nt){N.onload=W,N.onerror=nt}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Gc(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:T},c.set(u,_)}}}function OM(t,n){_a.X(t,n);var a=Ir;if(a&&t){var s=$n(a).hoistableScripts,c=Fr(t),u=s.get(c);u||(u=a.querySelector(el(c)),u||(t=L({src:t,async:!0},n),(n=yi.get(c))&&id(t,n),u=a.createElement("script"),we(u),Cn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function PM(t,n){_a.M(t,n);var a=Ir;if(a&&t){var s=$n(a).hoistableScripts,c=Fr(t),u=s.get(c);u||(u=a.querySelector(el(c)),u||(t=L({src:t,async:!0,type:"module"},n),(n=yi.get(c))&&id(t,n),u=a.createElement("script"),we(u),Cn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function j0(t,n,a,s){var c=(c=qe.current)?$o(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Br(a.href),n=$n(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Br(a.href);var u=$n(c).hoistableStyles,_=u.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,_),(u=c.querySelector(tl(t)))?u._p||(_.instance=u,_.state.loading=5):(u=yi.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,u)),zM(c,t,u,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Fr(a),n=$n(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Br(t){return'href="'+hi(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function Z0(t){return L({},t,{"data-precedence":t.precedence,precedence:null})}function zM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ce]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Ce]=!0,n.onload=n.onerror=Ca.bind(null,n),Cn(n,"link",a),we(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Fr(t){return'[src="'+hi(t)+'"]'}function el(t){return"script[async]"+t}function K0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+hi(a.href)+'"]');if(s)return n.instance=s,we(s),s;var c=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),we(s),Cn(s,"style",c),Gc(s,a.precedence,t),n.instance=s;case"stylesheet":c=Br(a.href);var u=t.querySelector(tl(c));if(u)return n.state.loading|=4,n.instance=u,we(u),u;s=Z0(a),(c=yi.get(c))&&nd(s,c),u=(t.ownerDocument||t).createElement("link"),we(u);var _=u;return _._p=new Promise(function(T,N){_.onload=T,_.onerror=N}),Cn(u,"link",s),n.state.loading|=4,Gc(u,a.precedence,t),n.instance=u;case"script":return u=Fr(a.src),(c=t.querySelector(el(u)))?(n.instance=c,we(c),c):(s=a,(c=yi.get(u))&&(s=L({},a),id(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),we(c),Cn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Gc(s,a.precedence,t));return n.instance}function Gc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,u=c,_=0;_<s.length;_++){var T=s[_];if(T.dataset.precedence===n)u=T;else if(u!==c)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Vc=null;function Q0(t,n,a){if(Vc===null){var s=new Map,c=Vc=new Map;c.set(a,s)}else c=Vc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var u=a[c];if(!(u[Ne]||u[Ct]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var _=u.getAttribute(n)||"";_=t+_;var T=s.get(_);T?T.push(u):s.set(_,[u])}}return s}function ad(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function IM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function J0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function $0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function tv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function ev(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=tv(n),t.suspenseyImages.push(n)),t=HM.bind(t),n.decode().then(t,t))}function BM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Br(s.href),u=n.querySelector(tl(c));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=u,we(u);return}u=n.ownerDocument||n,s=Z0(s),(c=yi.get(c))&&nd(s,c),u=u.createElement("link"),we(u);var _=u;_._p=new Promise(function(T,N){_.onload=T,_.onerror=N}),Cn(u,"link",s),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xc=0;function FM(t,n){return t.stylesheets&&t.count===0&&qc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&qc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&Xc===0&&(Xc=62500*iM());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Xc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function nv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)qc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function nl(){this.count--,nv(this)}function HM(){this.imgCount--,nv(this)}var kc=null;function qc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kc=new Map,n.forEach(GM,t),kc=null,nl.call(t))}function GM(t,n){if(!(n.state.loading&4)){var a=kc.get(t);if(a)var s=a.get(null);else{a=new Map,kc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var _=c[u];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),u=a.get(_)||s,u===s&&a.set(null,c),a.set(_,c),this.count++,s=nl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),u?u.parentNode.insertBefore(c,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Hr={$$typeof:lt,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function VM(t,n,a,s,c,u,_,T,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_o(0),this.hiddenUpdates=_o(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.transitionTypes=null,this.incompleteTransitions=new Map}function iv(t,n,a,s,c,u,_,T,N,W,nt,pt){return t=new VM(t,n,a,_,N,W,nt,pt,T),n=1,u===!0&&(n|=24),u=Xn(3,null,null,n),t.current=u,u.stateNode=t,n=Sf(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:n},Ef(u),t}function av(t){return t?(t=hr,t):hr}function sv(t,n,a,s,c,u){c=av(c),s.context===null?s.context=c:s.pendingContext=c,s=Ia(n),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=Ba(t,s,n),a!==null&&(Wn(a,t,n),Lo(a,t,n))}function rv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function sd(t,n){rv(t,n),(t=t.alternate)&&rv(t,n)}function ov(t){if(t.tag===13||t.tag===31){var n=Ms(t,67108864);n!==null&&Wn(n,t,67108864),sd(t,67108864)}}function lv(t){if(t.tag===13||t.tag===31){var n=ri();n=ot(n);var a=Ms(t,n);a!==null&&Wn(a,t,n),sd(t,n)}}var Gr=!0;function XM(t,n,a,s){var c=Mt.T;Mt.T=null;var u=Yt.p;try{Yt.p=2,rd(t,n,a,s)}finally{Yt.p=u,Mt.T=c}}function kM(t,n,a,s){var c=Mt.T;Mt.T=null;var u=Yt.p;try{Yt.p=8,rd(t,n,a,s)}finally{Yt.p=u,Mt.T=c}}function rd(t,n,a,s){if(Gr){var c=od(s);if(c===null)Gh(t,n,s,Yc,a),uv(t,s);else if(YM(c,t,n,a,s))s.stopPropagation();else if(uv(t,s),n&4&&-1<qM.indexOf(t)){for(;c!==null;){var u=ge(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var _=fi(u.pendingLanes);if(_!==0){var T=u;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var N=1<<31-Un(_);T.entanglements[1]|=N,_&=~N}ji(u),(Oe&6)===0&&(Uc=G()+500,Zo(0))}}break;case 31:case 13:T=Ms(u,2),T!==null&&Wn(T,u,2),Oc(),sd(u,2)}if(u=od(s),u===null&&Gh(t,n,s,Yc,a),u===c)break;c=u}c!==null&&s.stopPropagation()}else Gh(t,n,s,null,a)}}function od(t){return t=qu(t),ld(t)}var Yc=null;function ld(t){if(Yc=null,t=Le(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Yc=t,null}function cv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case wt:return 2;case Vt:return 8;case yt:case mt:return 32;case Wt:return 268435456;default:return 32}default:return 32}}var cd=!1,Ka=null,Qa=null,Ja=null,il=new Map,al=new Map,$a=[],qM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uv(t,n){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(n.pointerId)}}function sl(t,n,a,s,c,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[c]},n!==null&&(n=ge(n),n!==null&&ov(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function YM(t,n,a,s,c){switch(n){case"focusin":return Ka=sl(Ka,t,n,a,s,c),!0;case"dragenter":return Qa=sl(Qa,t,n,a,s,c),!0;case"mouseover":return Ja=sl(Ja,t,n,a,s,c),!0;case"pointerover":var u=c.pointerId;return il.set(u,sl(il.get(u)||null,t,n,a,s,c)),!0;case"gotpointercapture":return u=c.pointerId,al.set(u,sl(al.get(u)||null,t,n,a,s,c)),!0}return!1}function fv(t){var n=Le(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,zt(t.priority,function(){lv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,zt(t.priority,function(){lv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=od(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);ku=s,a.target.dispatchEvent(s),ku=null}else return n=ge(a),n!==null&&ov(n),t.blockedOn=a,!1;n.shift()}return!0}function hv(t,n,a){Wc(t)&&a.delete(n)}function WM(){cd=!1,Ka!==null&&Wc(Ka)&&(Ka=null),Qa!==null&&Wc(Qa)&&(Qa=null),Ja!==null&&Wc(Ja)&&(Ja=null),il.forEach(hv),al.forEach(hv)}function jc(t,n){t.blockedOn===n&&(t.blockedOn=null,cd||(cd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,WM)))}var Zc=null;function dv(t){Zc!==t&&(Zc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zc===t&&(Zc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(ld(s||a)===null)continue;break}var u=ge(a);u!==null&&(t.splice(n,3),n-=3,kf(u,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Vr(t){function n(N){return jc(N,t)}Ka!==null&&jc(Ka,t),Qa!==null&&jc(Qa,t),Ja!==null&&jc(Ja,t),il.forEach(n),al.forEach(n);for(var a=0;a<$a.length;a++){var s=$a[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)fv(a),a.blockedOn===null&&$a.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],u=a[s+1],_=c[kt]||null;if(typeof u=="function")_||dv(a);else if(_){var T=null;if(u&&u.hasAttribute("formAction")){if(c=u,_=u[kt]||null)T=_.formAction;else if(ld(c)!==null)continue}else T=_.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),dv(a)}}}function pv(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ud(t){this._internalRoot=t}Kc.prototype.render=ud.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ri();sv(a,s,t,n,null,null)},Kc.prototype.unmount=ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;sv(t.current,2,null,t,null,null),Oc(),n[ee]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Et();t={blockedOn:null,target:t,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,t),a===0&&fv(t)}};var mv=e.version;if(mv!=="19.3.0")throw Error(r(527,mv,"19.3.0"));Yt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var jM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qc.isDisabled&&Qc.supportsFiber)try{Me=Qc.inject(jM),$e=Qc}catch{}}return ol.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=a_,u=s_,_=r_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=iv(t,1,!1,null,null,a,s,null,c,u,_,pv),t[ee]=n.current,Hh(t),new ud(n)},ol.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",u=a_,_=s_,T=r_,N=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(N=a.formState)),n=iv(t,1,!0,n,a??null,s,c,N,u,_,T,pv),n.context=av(null),a=n.current,s=ri(),s=ot(s),c=Ia(s),c.callback=null,Ba(a,c,s),a=s,n.current.lanes=a,Ss(n,a),ji(n),t[ee]=n.current,Hh(t),new Kc(n)},ol.version="19.3.0",ol}var bv;function aE(){if(bv)return dd.exports;bv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),dd.exports=iE(),dd.exports}var sE=aE();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zp="180",so={ROTATE:0,DOLLY:1,PAN:2},io={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rE=0,Av=1,oE=2,NS=1,lE=2,Ea=3,fs=0,Qn=1,Kn=2,cs=0,ro=1,Rv=2,Cv=3,wv=4,cE=5,Ws=100,uE=101,fE=102,hE=103,dE=104,pE=200,mE=201,gE=202,_E=203,tp=204,ep=205,vE=206,SE=207,yE=208,xE=209,ME=210,EE=211,TE=212,bE=213,AE=214,np=0,ip=1,ap=2,lo=3,sp=4,rp=5,op=6,lp=7,LS=0,RE=1,CE=2,us=0,wE=1,DE=2,UE=3,NE=4,LE=5,OE=6,PE=7,OS=300,co=301,uo=302,cp=303,up=304,Ou=306,fp=1e3,Zs=1001,hp=1002,zi=1003,zE=1004,Jc=1005,Ki=1006,_d=1007,Ks=1008,$i=1009,PS=1010,zS=1011,gl=1012,Kp=1013,Qs=1014,ba=1015,Ml=1016,Qp=1017,Jp=1018,_l=1020,IS=35902,BS=35899,FS=1021,HS=1022,Pi=1023,vl=1026,Sl=1027,GS=1028,$p=1029,VS=1030,tm=1031,em=1033,bu=33776,Au=33777,Ru=33778,Cu=33779,dp=35840,pp=35841,mp=35842,gp=35843,_p=36196,vp=37492,Sp=37496,yp=37808,xp=37809,Mp=37810,Ep=37811,Tp=37812,bp=37813,Ap=37814,Rp=37815,Cp=37816,wp=37817,Dp=37818,Up=37819,Np=37820,Lp=37821,Op=36492,Pp=36494,zp=36495,Ip=36283,Bp=36284,Fp=36285,Hp=36286,IE=3200,BE=3201,XS=0,FE=1,ls="",Mi="srgb",fo="srgb-linear",Uu="linear",Xe="srgb",Xr=7680,Dv=519,HE=512,GE=513,VE=514,kS=515,XE=516,kE=517,qE=518,YE=519,Uv=35044,Nv="300 es",Qi=2e3,Nu=2001;class nr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=Math.PI/180,Gp=180/Math.PI;function El(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function WE(o,e){return(o%e+e)%e}function vd(o,e,i){return(1-i)*o+i*e}function ll(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const jE={DEG2RAD:wu};class ue{constructor(e=0,i=0){ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*l+e.x,this.y=f*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Js{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,h,d){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3];const S=f[h+0],x=f[h+1],E=f[h+2],A=f[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(d===1){e[i+0]=S,e[i+1]=x,e[i+2]=E,e[i+3]=A;return}if(g!==A||m!==S||p!==x||v!==E){let M=1-d;const y=m*S+p*x+v*E+g*A,O=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const F=Math.sqrt(P),B=Math.atan2(F,y*O);M=Math.sin(M*B)/F,d=Math.sin(d*B)/F}const w=d*O;if(m=m*M+S*w,p=p*M+x*w,v=v*M+E*w,g=g*M+A*w,M===1-d){const F=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=F,p*=F,v*=F,g*=F}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,f,h){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=f[h],S=f[h+1],x=f[h+2],E=f[h+3];return e[i]=d*E+v*g+m*x-p*S,e[i+1]=m*E+v*S+p*g-d*x,e[i+2]=p*E+v*x+d*S-m*g,e[i+3]=v*E-d*g-m*S-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),g=d(f/2),S=m(r/2),x=m(l/2),E=m(f/2);switch(h){case"XYZ":this._x=S*v*g+p*x*E,this._y=p*x*g-S*v*E,this._z=p*v*E+S*x*g,this._w=p*v*g-S*x*E;break;case"YXZ":this._x=S*v*g+p*x*E,this._y=p*x*g-S*v*E,this._z=p*v*E-S*x*g,this._w=p*v*g+S*x*E;break;case"ZXY":this._x=S*v*g-p*x*E,this._y=p*x*g+S*v*E,this._z=p*v*E+S*x*g,this._w=p*v*g-S*x*E;break;case"ZYX":this._x=S*v*g-p*x*E,this._y=p*x*g+S*v*E,this._z=p*v*E-S*x*g,this._w=p*v*g+S*x*E;break;case"YZX":this._x=S*v*g+p*x*E,this._y=p*x*g+S*v*E,this._z=p*v*E-S*x*g,this._w=p*v*g-S*x*E;break;case"XZY":this._x=S*v*g-p*x*E,this._y=p*x*g-S*v*E,this._z=p*v*E+S*x*g,this._w=p*v*g+S*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],S=r+d+g;if(S>0){const x=.5/Math.sqrt(S+1);this._w=.25/x,this._x=(v-m)*x,this._y=(f-p)*x,this._z=(h-l)*x}else if(r>d&&r>g){const x=2*Math.sqrt(1+r-d-g);this._w=(v-m)/x,this._x=.25*x,this._y=(l+h)/x,this._z=(f+p)/x}else if(d>g){const x=2*Math.sqrt(1+d-r-g);this._w=(f-p)/x,this._x=(l+h)/x,this._y=.25*x,this._z=(m+v)/x}else{const x=2*Math.sqrt(1+g-r-d);this._w=(h-l)/x,this._x=(f+p)/x,this._y=(m+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+h*d+l*p-f*m,this._y=l*v+h*m+f*d-r*p,this._z=f*v+h*p+r*m-l*d,this._w=h*v-r*d-l*m-f*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=f,this;const m=1-d*d;if(m<=Number.EPSILON){const x=1-i;return this._w=x*h+i*this._w,this._x=x*r+i*this._x,this._y=x*l+i*this._y,this._z=x*f+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),g=Math.sin((1-i)*v)/p,S=Math.sin(i*v)/p;return this._w=h*g+this._w*S,this._x=r*g+this._x*S,this._y=l*g+this._y*S,this._z=f*g+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,i=0,r=0){k.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Lv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Lv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),v=2*(d*i-f*l),g=2*(f*r-h*i);return this.x=i+m*p+h*g-d*v,this.y=r+m*v+d*p-f*g,this.z=l+m*g+f*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-f*d,this.y=f*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sd=new k,Lv=new Js;class pe{constructor(e,i,r,l,f,h,d,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,m,p)}set(e,i,r,l,f,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=f,v[5]=m,v[6]=r,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],v=r[4],g=r[7],S=r[2],x=r[5],E=r[8],A=l[0],M=l[3],y=l[6],O=l[1],P=l[4],w=l[7],F=l[2],B=l[5],L=l[8];return f[0]=h*A+d*O+m*F,f[3]=h*M+d*P+m*B,f[6]=h*y+d*w+m*L,f[1]=p*A+v*O+g*F,f[4]=p*M+v*P+g*B,f[7]=p*y+v*w+g*L,f[2]=S*A+x*O+E*F,f[5]=S*M+x*P+E*B,f[8]=S*y+x*w+E*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-r*f*v+r*d*m+l*f*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=v*h-d*p,S=d*m-v*f,x=p*f-h*m,E=i*g+r*S+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=g*A,e[1]=(l*p-v*r)*A,e[2]=(d*r-l*h)*A,e[3]=S*A,e[4]=(v*i-l*m)*A,e[5]=(l*f-d*i)*A,e[6]=x*A,e[7]=(r*m-p*i)*A,e[8]=(h*i-r*f)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,h,d){const m=Math.cos(f),p=Math.sin(f);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(yd.makeScale(e,i)),this}rotate(e){return this.premultiply(yd.makeRotation(-e)),this}translate(e,i){return this.premultiply(yd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yd=new pe;function qS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Lu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ZE(){const o=Lu("canvas");return o.style.display="block",o}const Ov={};function yl(o){o in Ov||(Ov[o]=!0,console.warn(o))}function KE(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const Pv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QE(){const o={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Xe&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=oo(l.r),l.g=oo(l.g),l.b=oo(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ls?Uu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return yl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return yl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[fo]:{primaries:e,whitePoint:r,transfer:Uu,toXYZ:Pv,fromXYZ:zv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:r,transfer:Xe,toXYZ:Pv,fromXYZ:zv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),o}const Ue=QE();function Aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function oo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let kr;class JE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{kr===void 0&&(kr=Lu("canvas")),kr.width=e.width,kr.height=e.height;const l=kr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=kr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Lu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=Aa(f[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Aa(i[r]/255)*255):i[r]=Aa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $E=0;class nm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=El(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(xd(l[h].image)):f.push(xd(l[h]))}else f=xd(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function xd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?JE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tT=0;const Md=new k;class Jn extends nr{constructor(e=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,r=Zs,l=Zs,f=Ki,h=Ks,d=Pi,m=$i,p=Jn.DEFAULT_ANISOTROPY,v=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=El(),this.name="",this.source=new nm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==OS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fp:e.x=e.x-Math.floor(e.x);break;case Zs:e.x=e.x<0?0:1;break;case hp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fp:e.y=e.y-Math.floor(e.y);break;case Zs:e.y=e.y<0?0:1;break;case hp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=OS;Jn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const m=e.elements,p=m[0],v=m[4],g=m[8],S=m[1],x=m[5],E=m[9],A=m[2],M=m[6],y=m[10];if(Math.abs(v-S)<.01&&Math.abs(g-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+A)<.1&&Math.abs(E+M)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,w=(x+1)/2,F=(y+1)/2,B=(v+S)/4,L=(g+A)/4,q=(E+M)/4;return P>w&&P>F?P<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(P),l=B/r,f=L/r):w>F?w<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(w),r=B/l,f=q/l):F<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(F),r=L/f,l=q/f),this.set(r,l,f,i),this}let O=Math.sqrt((M-E)*(M-E)+(g-A)*(g-A)+(S-v)*(S-v));return Math.abs(O)<.001&&(O=1),this.x=(M-E)/O,this.y=(g-A)/O,this.z=(S-v)/O,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eT extends nr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new Jn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ki,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new nm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $s extends eT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class YS extends Jn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zi,this.minFilter=zi,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nT extends Jn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zi,this.minFilter=zi,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tl{constructor(e=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ui):Ui.fromBufferAttribute(f,h),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$c.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$c.copy(r.boundingBox)),$c.applyMatrix4(e.matrixWorld),this.union($c)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cl),tu.subVectors(this.max,cl),qr.subVectors(e.a,cl),Yr.subVectors(e.b,cl),Wr.subVectors(e.c,cl),es.subVectors(Yr,qr),ns.subVectors(Wr,Yr),Hs.subVectors(qr,Wr);let i=[0,-es.z,es.y,0,-ns.z,ns.y,0,-Hs.z,Hs.y,es.z,0,-es.x,ns.z,0,-ns.x,Hs.z,0,-Hs.x,-es.y,es.x,0,-ns.y,ns.x,0,-Hs.y,Hs.x,0];return!Ed(i,qr,Yr,Wr,tu)||(i=[1,0,0,0,1,0,0,0,1],!Ed(i,qr,Yr,Wr,tu))?!1:(eu.crossVectors(es,ns),i=[eu.x,eu.y,eu.z],Ed(i,qr,Yr,Wr,tu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new k,new k,new k,new k,new k,new k,new k,new k],Ui=new k,$c=new Tl,qr=new k,Yr=new k,Wr=new k,es=new k,ns=new k,Hs=new k,cl=new k,tu=new k,eu=new k,Gs=new k;function Ed(o,e,i,r,l){for(let f=0,h=o.length-3;f<=h;f+=3){Gs.fromArray(o,f);const d=l.x*Math.abs(Gs.x)+l.y*Math.abs(Gs.y)+l.z*Math.abs(Gs.z),m=e.dot(Gs),p=i.dot(Gs),v=r.dot(Gs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const iT=new Tl,ul=new k,Td=new k;class im{constructor(e=new k,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):iT.setFromPoints(e).getCenter(r);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ul.subVectors(e,this.center);const i=ul.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ul,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ul.copy(e.center).add(Td)),this.expandByPoint(ul.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sa=new k,bd=new k,nu=new k,is=new k,Ad=new k,iu=new k,Rd=new k;class am{constructor(e=new k,i=new k(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){bd.copy(e).add(i).multiplyScalar(.5),nu.copy(i).sub(e).normalize(),is.copy(this.origin).sub(bd);const f=e.distanceTo(i)*.5,h=-this.direction.dot(nu),d=is.dot(this.direction),m=-is.dot(nu),p=is.lengthSq(),v=Math.abs(1-h*h);let g,S,x,E;if(v>0)if(g=h*m-d,S=h*d-m,E=f*v,g>=0)if(S>=-E)if(S<=E){const A=1/v;g*=A,S*=A,x=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=f,g=Math.max(0,-(h*S+d)),x=-g*g+S*(S+2*m)+p;else S=-f,g=Math.max(0,-(h*S+d)),x=-g*g+S*(S+2*m)+p;else S<=-E?(g=Math.max(0,-(-h*f+d)),S=g>0?-f:Math.min(Math.max(-f,-m),f),x=-g*g+S*(S+2*m)+p):S<=E?(g=0,S=Math.min(Math.max(-f,-m),f),x=S*(S+2*m)+p):(g=Math.max(0,-(h*f+d)),S=g>0?f:Math.min(Math.max(-f,-m),f),x=-g*g+S*(S+2*m)+p);else S=h>0?-f:f,g=Math.max(0,-(h*S+d)),x=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(bd).addScaledVector(nu,S),x}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const r=Sa.dot(this.direction),l=Sa.dot(Sa)-r*r,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(f=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(f=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),r>h||f>l||((f>r||isNaN(r))&&(r=f),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(d=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,r,l,f){Ad.subVectors(i,e),iu.subVectors(r,e),Rd.crossVectors(Ad,iu);let h=this.direction.dot(Rd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;is.subVectors(this.origin,e);const m=d*this.direction.dot(iu.crossVectors(is,iu));if(m<0)return null;const p=d*this.direction.dot(Ad.cross(is));if(p<0||m+p>h)return null;const v=-d*is.dot(Rd);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,r,l,f,h,d,m,p,v,g,S,x,E,A,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,m,p,v,g,S,x,E,A,M)}set(e,i,r,l,f,h,d,m,p,v,g,S,x,E,A,M){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=f,y[5]=h,y[9]=d,y[13]=m,y[2]=p,y[6]=v,y[10]=g,y[14]=S,y[3]=x,y[7]=E,y[11]=A,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/jr.setFromMatrixColumn(e,0).length(),f=1/jr.setFromMatrixColumn(e,1).length(),h=1/jr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(f),g=Math.sin(f);if(e.order==="XYZ"){const S=h*v,x=h*g,E=d*v,A=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=x+E*p,i[5]=S-A*p,i[9]=-d*m,i[2]=A-S*p,i[6]=E+x*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*v,x=m*g,E=p*v,A=p*g;i[0]=S+A*d,i[4]=E*d-x,i[8]=h*p,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=x*d-E,i[6]=A+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*v,x=m*g,E=p*v,A=p*g;i[0]=S-A*d,i[4]=-h*g,i[8]=E+x*d,i[1]=x+E*d,i[5]=h*v,i[9]=A-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*v,x=h*g,E=d*v,A=d*g;i[0]=m*v,i[4]=E*p-x,i[8]=S*p+A,i[1]=m*g,i[5]=A*p+S,i[9]=x*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,x=h*p,E=d*m,A=d*p;i[0]=m*v,i[4]=A-S*g,i[8]=E*g+x,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=x*g+E,i[10]=S-A*g}else if(e.order==="XZY"){const S=h*m,x=h*p,E=d*m,A=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=S*g+A,i[5]=h*v,i[9]=x*g-E,i[2]=E*g-x,i[6]=d*v,i[10]=A*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aT,e,sT)}lookAt(e,i,r){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),as.crossVectors(r,li),as.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),as.crossVectors(r,li)),as.normalize(),au.crossVectors(li,as),l[0]=as.x,l[4]=au.x,l[8]=li.x,l[1]=as.y,l[5]=au.y,l[9]=li.y,l[2]=as.z,l[6]=au.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],v=r[1],g=r[5],S=r[9],x=r[13],E=r[2],A=r[6],M=r[10],y=r[14],O=r[3],P=r[7],w=r[11],F=r[15],B=l[0],L=l[4],q=l[8],D=l[12],C=l[1],V=l[5],at=l[9],ct=l[13],gt=l[2],lt=l[6],j=l[10],st=l[14],K=l[3],_t=l[7],St=l[11],Gt=l[15];return f[0]=h*B+d*C+m*gt+p*K,f[4]=h*L+d*V+m*lt+p*_t,f[8]=h*q+d*at+m*j+p*St,f[12]=h*D+d*ct+m*st+p*Gt,f[1]=v*B+g*C+S*gt+x*K,f[5]=v*L+g*V+S*lt+x*_t,f[9]=v*q+g*at+S*j+x*St,f[13]=v*D+g*ct+S*st+x*Gt,f[2]=E*B+A*C+M*gt+y*K,f[6]=E*L+A*V+M*lt+y*_t,f[10]=E*q+A*at+M*j+y*St,f[14]=E*D+A*ct+M*st+y*Gt,f[3]=O*B+P*C+w*gt+F*K,f[7]=O*L+P*V+w*lt+F*_t,f[11]=O*q+P*at+w*j+F*St,f[15]=O*D+P*ct+w*st+F*Gt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],g=e[6],S=e[10],x=e[14],E=e[3],A=e[7],M=e[11],y=e[15];return E*(+f*m*g-l*p*g-f*d*S+r*p*S+l*d*x-r*m*x)+A*(+i*m*x-i*p*S+f*h*S-l*h*x+l*p*v-f*m*v)+M*(+i*p*g-i*d*x-f*h*g+r*h*x+f*d*v-r*p*v)+y*(-l*d*v-i*m*g+i*d*S+l*h*g-r*h*S+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],g=e[9],S=e[10],x=e[11],E=e[12],A=e[13],M=e[14],y=e[15],O=g*M*p-A*S*p+A*m*x-d*M*x-g*m*y+d*S*y,P=E*S*p-v*M*p-E*m*x+h*M*x+v*m*y-h*S*y,w=v*A*p-E*g*p+E*d*x-h*A*x-v*d*y+h*g*y,F=E*g*m-v*A*m-E*d*S+h*A*S+v*d*M-h*g*M,B=i*O+r*P+l*w+f*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/B;return e[0]=O*L,e[1]=(A*S*f-g*M*f-A*l*x+r*M*x+g*l*y-r*S*y)*L,e[2]=(d*M*f-A*m*f+A*l*p-r*M*p-d*l*y+r*m*y)*L,e[3]=(g*m*f-d*S*f-g*l*p+r*S*p+d*l*x-r*m*x)*L,e[4]=P*L,e[5]=(v*M*f-E*S*f+E*l*x-i*M*x-v*l*y+i*S*y)*L,e[6]=(E*m*f-h*M*f-E*l*p+i*M*p+h*l*y-i*m*y)*L,e[7]=(h*S*f-v*m*f+v*l*p-i*S*p-h*l*x+i*m*x)*L,e[8]=w*L,e[9]=(E*g*f-v*A*f-E*r*x+i*A*x+v*r*y-i*g*y)*L,e[10]=(h*A*f-E*d*f+E*r*p-i*A*p-h*r*y+i*d*y)*L,e[11]=(v*d*f-h*g*f-v*r*p+i*g*p+h*r*x-i*d*x)*L,e[12]=F*L,e[13]=(v*A*l-E*g*l+E*r*S-i*A*S-v*r*M+i*g*M)*L,e[14]=(E*d*l-h*A*l-E*r*m+i*A*m+h*r*M-i*d*M)*L,e[15]=(h*g*l-v*d*l+v*r*m-i*g*m-h*r*S+i*d*S)*L,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,h=e.x,d=e.y,m=e.z,p=f*h,v=f*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*h,0,p*m-l*d,v*m+l*h,f*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,h){return this.set(1,r,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,h=i._y,d=i._z,m=i._w,p=f+f,v=h+h,g=d+d,S=f*p,x=f*v,E=f*g,A=h*v,M=h*g,y=d*g,O=m*p,P=m*v,w=m*g,F=r.x,B=r.y,L=r.z;return l[0]=(1-(A+y))*F,l[1]=(x+w)*F,l[2]=(E-P)*F,l[3]=0,l[4]=(x-w)*B,l[5]=(1-(S+y))*B,l[6]=(M+O)*B,l[7]=0,l[8]=(E+P)*L,l[9]=(M-O)*L,l[10]=(1-(S+A))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=jr.set(l[0],l[1],l[2]).length();const h=jr.set(l[4],l[5],l[6]).length(),d=jr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Ni.copy(this);const p=1/f,v=1/h,g=1/d;return Ni.elements[0]*=p,Ni.elements[1]*=p,Ni.elements[2]*=p,Ni.elements[4]*=v,Ni.elements[5]*=v,Ni.elements[6]*=v,Ni.elements[8]*=g,Ni.elements[9]*=g,Ni.elements[10]*=g,i.setFromRotationMatrix(Ni),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,l,f,h,d=Qi,m=!1){const p=this.elements,v=2*f/(i-e),g=2*f/(r-l),S=(i+e)/(i-e),x=(r+l)/(r-l);let E,A;if(m)E=f/(h-f),A=h*f/(h-f);else if(d===Qi)E=-(h+f)/(h-f),A=-2*h*f/(h-f);else if(d===Nu)E=-h/(h-f),A=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,f,h,d=Qi,m=!1){const p=this.elements,v=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),x=-(r+l)/(r-l);let E,A;if(m)E=1/(h-f),A=h/(h-f);else if(d===Qi)E=-2/(h-f),A=-(h+f)/(h-f);else if(d===Nu)E=-1/(h-f),A=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const jr=new k,Ni=new en,aT=new k(0,0,0),sT=new k(1,1,1),as=new k,au=new k,li=new k,Iv=new en,Bv=new Js;class ta{constructor(e=0,i=0,r=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],S=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(ve(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,x),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Iv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Bv.setFromEuler(this),this.setFromQuaternion(Bv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class sm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rT=0;const Fv=new k,Zr=new Js,ya=new en,su=new k,fl=new k,oT=new k,lT=new Js,Hv=new k(1,0,0),Gv=new k(0,1,0),Vv=new k(0,0,1),Xv={type:"added"},cT={type:"removed"},Kr={type:"childadded",child:null},Cd={type:"childremoved",child:null};class Dn extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=El(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new k,i=new ta,r=new Js,l=new k(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new pe}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Zr.setFromAxisAngle(e,i),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,i){return Zr.setFromAxisAngle(e,i),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Hv,e)}rotateY(e){return this.rotateOnAxis(Gv,e)}rotateZ(e){return this.rotateOnAxis(Vv,e)}translateOnAxis(e,i){return Fv.copy(e).applyQuaternion(this.quaternion),this.position.add(Fv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Hv,e)}translateY(e){return this.translateOnAxis(Gv,e)}translateZ(e){return this.translateOnAxis(Vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?su.copy(e):su.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(fl,su,this.up):ya.lookAt(su,fl,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Zr.setFromRotationMatrix(ya),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xv),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cT),Cd.child=e,this.dispatchEvent(Cd),Cd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xv),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,e,oT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,lT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];f(e.shapes,g)}else f(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(f(e.materials,this.material[m]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(f(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),g=h(e.shapes),S=h(e.skeletons),x=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new k(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new k,xa=new k,wd=new k,Ma=new k,Qr=new k,Jr=new k,kv=new k,Dd=new k,Ud=new k,Nd=new k,Ld=new rn,Od=new rn,Pd=new rn;class Oi{constructor(e=new k,i=new k,r=new k){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Li.subVectors(e,i),l.cross(Li);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Li.subVectors(l,i),xa.subVectors(r,i),wd.subVectors(e,i);const h=Li.dot(Li),d=Li.dot(xa),m=Li.dot(wd),p=xa.dot(xa),v=xa.dot(wd),g=h*p-d*d;if(g===0)return f.set(0,0,0),null;const S=1/g,x=(p*m-d*v)*S,E=(h*v-d*m)*S;return f.set(1-x-E,E,x)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(e,i,r,l,f,h,d,m){return this.getBarycoord(e,i,r,l,Ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,Ma.x),m.addScaledVector(h,Ma.y),m.addScaledVector(d,Ma.z),m)}static getInterpolatedAttribute(e,i,r,l,f,h){return Ld.setScalar(0),Od.setScalar(0),Pd.setScalar(0),Ld.fromBufferAttribute(e,i),Od.fromBufferAttribute(e,r),Pd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Ld,f.x),h.addScaledVector(Od,f.y),h.addScaledVector(Pd,f.z),h}static isFrontFacing(e,i,r,l){return Li.subVectors(r,i),xa.subVectors(e,i),Li.cross(xa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Li.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return Oi.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let h,d;Qr.subVectors(l,r),Jr.subVectors(f,r),Dd.subVectors(e,r);const m=Qr.dot(Dd),p=Jr.dot(Dd);if(m<=0&&p<=0)return i.copy(r);Ud.subVectors(e,l);const v=Qr.dot(Ud),g=Jr.dot(Ud);if(v>=0&&g<=v)return i.copy(l);const S=m*g-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(Qr,h);Nd.subVectors(e,f);const x=Qr.dot(Nd),E=Jr.dot(Nd);if(E>=0&&x<=E)return i.copy(f);const A=x*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Jr,d);const M=v*E-x*g;if(M<=0&&g-v>=0&&x-E>=0)return kv.subVectors(f,l),d=(g-v)/(g-v+(x-E)),i.copy(l).addScaledVector(kv,d);const y=1/(M+A+S);return h=A*y,d=S*y,i.copy(r).addScaledVector(Qr,h).addScaledVector(Jr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const WS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},ru={h:0,s:0,l:0};function zd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Re{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ue.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ue.workingColorSpace){if(e=WE(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=zd(h,f,e+1/3),this.g=zd(h,f,e),this.b=zd(h,f,e-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(e,i=Mi){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Mi){const r=WS[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Ue.workingToColorSpace(Pn.copy(this),e),Math.round(ve(Pn.r*255,0,255))*65536+Math.round(ve(Pn.g*255,0,255))*256+Math.round(ve(Pn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,f=Pn.b,h=Math.max(r,l,f),d=Math.min(r,l,f);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=v<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-f)/g+(l<f?6:0);break;case l:m=(f-r)/g+2;break;case f:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Mi){Ue.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,r=Pn.g,l=Pn.b;return e!==Mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+i,ss.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ss),e.getHSL(ru);const r=vd(ss.h,ru.h,i),l=vd(ss.s,ru.s,i),f=vd(ss.l,ru.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Re;Re.NAMES=WS;let uT=0;class bl extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=El(),this.name="",this.type="Material",this.blending=ro,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tp,this.blendDst=ep,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(r.blending=this.blending),this.side!==fs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==tp&&(r.blendSrc=this.blendSrc),this.blendDst!==ep&&(r.blendDst=this.blendDst),this.blendEquation!==Ws&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const h=[];for(const d in f){const m=f[d];delete m.metadata,h.push(m)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jS extends bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=LS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new k,ou=new ue;let fT=0;class Ji{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Uv,this.updateRanges=[],this.gpuType=ba,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ou.fromBufferAttribute(this,i),ou.applyMatrix3(e),this.setXY(i,ou.x,ou.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ll(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ll(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ll(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ll(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ll(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array),f=jn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uv&&(e.usage=this.usage),e}}class ZS extends Ji{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class KS extends Ji{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Vn extends Ji{constructor(e,i,r){super(new Float32Array(e),i,r)}}let hT=0;const xi=new en,Id=new Dn,$r=new k,ci=new Tl,hl=new Tl,En=new k;class ea extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=El(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qS(e)?KS:ZS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new pe().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,r){return xi.makeTranslation(e,i,r),this.applyMatrix4(xi),this}scale(e,i,r){return xi.makeScale(e,i,r),this.applyMatrix4(xi),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Vn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];ci.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new im);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const r=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];hl.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ci.min,hl.min),ci.expandByPoint(En),En.addVectors(ci.max,hl.max),ci.expandByPoint(En)):(ci.expandByPoint(hl.min),ci.expandByPoint(hl.max))}ci.getCenter(r);let l=0;for(let f=0,h=e.count;f<h;f++)En.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(En));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)En.fromBufferAttribute(d,p),m&&($r.fromBufferAttribute(e,p),En.add($r)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<r.count;q++)d[q]=new k,m[q]=new k;const p=new k,v=new k,g=new k,S=new ue,x=new ue,E=new ue,A=new k,M=new k;function y(q,D,C){p.fromBufferAttribute(r,q),v.fromBufferAttribute(r,D),g.fromBufferAttribute(r,C),S.fromBufferAttribute(f,q),x.fromBufferAttribute(f,D),E.fromBufferAttribute(f,C),v.sub(p),g.sub(p),x.sub(S),E.sub(S);const V=1/(x.x*E.y-E.x*x.y);isFinite(V)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(V),M.copy(g).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(V),d[q].add(A),d[D].add(A),d[C].add(A),m[q].add(M),m[D].add(M),m[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let q=0,D=O.length;q<D;++q){const C=O[q],V=C.start,at=C.count;for(let ct=V,gt=V+at;ct<gt;ct+=3)y(e.getX(ct+0),e.getX(ct+1),e.getX(ct+2))}const P=new k,w=new k,F=new k,B=new k;function L(q){F.fromBufferAttribute(l,q),B.copy(F);const D=d[q];P.copy(D),P.sub(F.multiplyScalar(F.dot(D))).normalize(),w.crossVectors(B,D);const V=w.dot(m[q])<0?-1:1;h.setXYZW(q,P.x,P.y,P.z,V)}for(let q=0,D=O.length;q<D;++q){const C=O[q],V=C.start,at=C.count;for(let ct=V,gt=V+at;ct<gt;ct+=3)L(e.getX(ct+0)),L(e.getX(ct+1)),L(e.getX(ct+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,x=r.count;S<x;S++)r.setXYZ(S,0,0,0);const l=new k,f=new k,h=new k,d=new k,m=new k,p=new k,v=new k,g=new k;if(e)for(let S=0,x=e.count;S<x;S+=3){const E=e.getX(S+0),A=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,E),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),v.subVectors(h,f),g.subVectors(l,f),v.cross(g),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),d.add(v),m.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,x=i.count;S<x;S+=3)l.fromBufferAttribute(i,S+0),f.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,f),g.subVectors(l,f),v.cross(g),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,g=d.normalized,S=new p.constructor(m.length*v);let x=0,E=0;for(let A=0,M=m.length;A<M;A++){d.isInterleavedBufferAttribute?x=m[A]*d.data.stride+d.offset:x=m[A]*v;for(let y=0;y<v;y++)S[E++]=p[x++]}return new Ji(S,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ea,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const f=this.morphAttributes;for(const d in f){const m=[],p=f[d];for(let v=0,g=p.length;v<g;v++){const S=p[v],x=e(S,r);m.push(x)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let f=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,S=p.length;g<S;g++){const x=p[g];v.push(x.toJSON(e.data))}v.length>0&&(l[m]=v,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const f=e.morphAttributes;for(const p in f){const v=[],g=f[p];for(let S=0,x=g.length;S<x;S++)v.push(g[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qv=new en,Vs=new am,lu=new im,Yv=new k,cu=new k,uu=new k,fu=new k,Bd=new k,hu=new k,Wv=new k,du=new k;class ui extends Dn{constructor(e=new ea,i=new jS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){hu.set(0,0,0);for(let m=0,p=f.length;m<p;m++){const v=d[m],g=f[m];v!==0&&(Bd.fromBufferAttribute(g,e),h?hu.addScaledVector(Bd,v):hu.addScaledVector(Bd.sub(i),v))}i.add(hu)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lu.copy(r.boundingSphere),lu.applyMatrix4(f),Vs.copy(e.ray).recast(e.near),!(lu.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(lu,Yv)===null||Vs.origin.distanceToSquared(Yv)>(e.far-e.near)**2))&&(qv.copy(f).invert(),Vs.copy(e.ray).applyMatrix4(qv),!(r.boundingBox!==null&&Vs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Vs)))}_computeIntersections(e,i,r){let l;const f=this.geometry,h=this.material,d=f.index,m=f.attributes.position,p=f.attributes.uv,v=f.attributes.uv1,g=f.attributes.normal,S=f.groups,x=f.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=S.length;E<A;E++){const M=S[E],y=h[M.materialIndex],O=Math.max(M.start,x.start),P=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let w=O,F=P;w<F;w+=3){const B=d.getX(w),L=d.getX(w+1),q=d.getX(w+2);l=pu(this,y,e,r,p,v,g,B,L,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let M=E,y=A;M<y;M+=3){const O=d.getX(M),P=d.getX(M+1),w=d.getX(M+2);l=pu(this,h,e,r,p,v,g,O,P,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=S.length;E<A;E++){const M=S[E],y=h[M.materialIndex],O=Math.max(M.start,x.start),P=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let w=O,F=P;w<F;w+=3){const B=w,L=w+1,q=w+2;l=pu(this,y,e,r,p,v,g,B,L,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),A=Math.min(m.count,x.start+x.count);for(let M=E,y=A;M<y;M+=3){const O=M,P=M+1,w=M+2;l=pu(this,h,e,r,p,v,g,O,P,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function dT(o,e,i,r,l,f,h,d){let m;if(e.side===Qn?m=r.intersectTriangle(h,f,l,!0,d):m=r.intersectTriangle(l,f,h,e.side===fs,d),m===null)return null;du.copy(d),du.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(du);return p<i.near||p>i.far?null:{distance:p,point:du.clone(),object:o}}function pu(o,e,i,r,l,f,h,d,m,p){o.getVertexPosition(d,cu),o.getVertexPosition(m,uu),o.getVertexPosition(p,fu);const v=dT(o,e,i,r,cu,uu,fu,Wv);if(v){const g=new k;Oi.getBarycoord(Wv,cu,uu,fu,g),l&&(v.uv=Oi.getInterpolatedAttribute(l,d,m,p,g,new ue)),f&&(v.uv1=Oi.getInterpolatedAttribute(f,d,m,p,g,new ue)),h&&(v.normal=Oi.getInterpolatedAttribute(h,d,m,p,g,new k),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new k,materialIndex:0};Oi.getNormal(cu,uu,fu,S.normal),v.face=S,v.barycoord=g}return v}class Al extends ea{constructor(e=1,i=1,r=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const m=[],p=[],v=[],g=[];let S=0,x=0;E("z","y","x",-1,-1,r,i,e,h,f,0),E("z","y","x",1,-1,r,i,-e,h,f,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,f,4),E("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(m),this.setAttribute("position",new Vn(p,3)),this.setAttribute("normal",new Vn(v,3)),this.setAttribute("uv",new Vn(g,2));function E(A,M,y,O,P,w,F,B,L,q,D){const C=w/L,V=F/q,at=w/2,ct=F/2,gt=B/2,lt=L+1,j=q+1;let st=0,K=0;const _t=new k;for(let St=0;St<j;St++){const Gt=St*V-ct;for(let re=0;re<lt;re++){const be=re*C-at;_t[A]=be*O,_t[M]=Gt*P,_t[y]=gt,p.push(_t.x,_t.y,_t.z),_t[A]=0,_t[M]=0,_t[y]=B>0?1:-1,v.push(_t.x,_t.y,_t.z),g.push(re/L),g.push(1-St/q),st+=1}}for(let St=0;St<q;St++)for(let Gt=0;Gt<L;Gt++){const re=S+Gt+lt*St,be=S+Gt+lt*(St+1),I=S+(Gt+1)+lt*(St+1),ut=S+(Gt+1)+lt*St;m.push(re,be,ut),m.push(be,I,ut),K+=6}d.addGroup(x,K,D),x+=K,S+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Gn(o){const e={};for(let i=0;i<o.length;i++){const r=ho(o[i]);for(const l in r)e[l]=r[l]}return e}function pT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function QS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const mT={clone:ho,merge:Gn};var gT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_T=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gT,this.fragmentShader=_T,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=pT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class JS extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new k,jv=new ue,Zv=new ue;class Ei extends JS{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Gp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gp*2*Math.atan(Math.tan(wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,i){return this.getViewBounds(e,jv,Zv),i.subVectors(Zv,jv)}setViewOffset(e,i,r,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(wu*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;f+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const to=-90,eo=1;class vT extends Dn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(to,eo,e,i);l.layers=this.layers,this.add(l);const f=new Ei(to,eo,e,i);f.layers=this.layers,this.add(f);const h=new Ei(to,eo,e,i);h.layers=this.layers,this.add(h);const d=new Ei(to,eo,e,i);d.layers=this.layers,this.add(d);const m=new Ei(to,eo,e,i);m.layers=this.layers,this.add(m);const p=new Ei(to,eo,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,h,d,m]=i;for(const p of i)this.remove(p);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Nu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,m,p,v]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(g,S,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class $S extends Jn{constructor(e=[],i=co,r,l,f,h,d,m,p,v){super(e,i,r,l,f,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ST extends $s{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new $S(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Al(5,5,5),f=new hs({name:"CubemapFromEquirect",uniforms:ho(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:cs});f.uniforms.tEquirect.value=i;const h=new ui(l,f),d=i.minFilter;return i.minFilter===Ks&&(i.minFilter=Ki),new vT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(f)}}class Ti extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yT={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const A of e.hand.values()){const M=i.getJointPose(A,r),y=this._getHandJoint(p,A);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=v.position.distanceTo(g.position),x=.02,E=.005;p.inputState.pinching&&S>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(yT)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=f!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ti;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class xT extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Hd=new k,MT=new k,ET=new pe;class os{constructor(e=new k(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Hd.subVectors(r,i).cross(MT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Hd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||ET.getNormalMatrix(e),l=this.coplanarPoint(Hd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new im,TT=new ue(.5,.5),mu=new k;class rm{constructor(e=new os,i=new os,r=new os,l=new os,f=new os,h=new os){this.planes=[e,i,r,l,f,h]}set(e,i,r,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Qi,r=!1){const l=this.planes,f=e.elements,h=f[0],d=f[1],m=f[2],p=f[3],v=f[4],g=f[5],S=f[6],x=f[7],E=f[8],A=f[9],M=f[10],y=f[11],O=f[12],P=f[13],w=f[14],F=f[15];if(l[0].setComponents(p-h,x-v,y-E,F-O).normalize(),l[1].setComponents(p+h,x+v,y+E,F+O).normalize(),l[2].setComponents(p+d,x+g,y+A,F+P).normalize(),l[3].setComponents(p-d,x-g,y-A,F-P).normalize(),r)l[4].setComponents(m,S,M,w).normalize(),l[5].setComponents(p-m,x-S,y-M,F-w).normalize();else if(l[4].setComponents(p-m,x-S,y-M,F-w).normalize(),i===Qi)l[5].setComponents(p+m,x+S,y+M,F+w).normalize();else if(i===Nu)l[5].setComponents(m,S,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);const i=TT.distanceTo(e.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(mu.x=l.normal.x>0?e.max.x:e.min.x,mu.y=l.normal.y>0?e.max.y:e.min.y,mu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(mu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ty extends Jn{constructor(e,i,r=Qs,l,f,h,d=zi,m=zi,p,v=vl,g=1){if(v!==vl&&v!==Sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,f,h,d,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ey extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class om extends ea{constructor(e=1,i=32,r=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:r,thetaLength:l},i=Math.max(3,i);const f=[],h=[],d=[],m=[],p=new k,v=new ue;h.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let g=0,S=3;g<=i;g++,S+=3){const x=r+g/i*l;p.x=e*Math.cos(x),p.y=e*Math.sin(x),h.push(p.x,p.y,p.z),d.push(0,0,1),v.x=(h[S]/e+1)/2,v.y=(h[S+1]/e+1)/2,m.push(v.x,v.y)}for(let g=1;g<=i;g++)f.push(g,g+1,0);this.setIndex(f),this.setAttribute("position",new Vn(h,3)),this.setAttribute("normal",new Vn(d,3)),this.setAttribute("uv",new Vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new om(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class bT{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),f=0;i.push(0);for(let h=1;h<=e;h++)r=this.getPoint(h/e),f+=r.distanceTo(l),i.push(f),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let l=0;const f=r.length;let h;i?h=i:h=e*r[f-1];let d=0,m=f-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=r[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,r[l]===h)return l/(f-1);const v=r[l],S=r[l+1]-v,x=(h-v)/S;return(l+x)/(f-1)}getTangent(e,i){let l=e-1e-4,f=e+1e-4;l<0&&(l=0),f>1&&(f=1);const h=this.getPoint(l),d=this.getPoint(f),m=i||(h.isVector2?new ue:new k);return m.copy(d).sub(h).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new k,l=[],f=[],h=[],d=new k,m=new en;for(let x=0;x<=e;x++){const E=x/e;l[x]=this.getTangentAt(E,new k)}f[0]=new k,h[0]=new k;let p=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),S=Math.abs(l[0].z);v<=p&&(p=v,r.set(1,0,0)),g<=p&&(p=g,r.set(0,1,0)),S<=p&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),f[0].crossVectors(l[0],d),h[0].crossVectors(l[0],f[0]);for(let x=1;x<=e;x++){if(f[x]=f[x-1].clone(),h[x]=h[x-1].clone(),d.crossVectors(l[x-1],l[x]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(ve(l[x-1].dot(l[x]),-1,1));f[x].applyMatrix4(m.makeRotationAxis(d,E))}h[x].crossVectors(l[x],f[x])}if(i===!0){let x=Math.acos(ve(f[0].dot(f[e]),-1,1));x/=e,l[0].dot(d.crossVectors(f[0],f[e]))>0&&(x=-x);for(let E=1;E<=e;E++)f[E].applyMatrix4(m.makeRotationAxis(l[E],x*E)),h[E].crossVectors(l[E],f[E])}return{tangents:l,normals:f,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function lm(){let o=0,e=0,i=0,r=0;function l(f,h,d,m){o=f,e=d,i=-3*f+3*h-2*d-m,r=2*f-2*h+d+m}return{initCatmullRom:function(f,h,d,m,p){l(h,d,p*(d-f),p*(m-h))},initNonuniformCatmullRom:function(f,h,d,m,p,v,g){let S=(h-f)/p-(d-f)/(p+v)+(d-h)/v,x=(d-h)/v-(m-h)/(v+g)+(m-d)/g;S*=v,x*=v,l(h,d,S,x)},calc:function(f){const h=f*f,d=h*f;return o+e*f+i*h+r*d}}}const gu=new k,Gd=new lm,Vd=new lm,Xd=new lm;class AT extends bT{constructor(e=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=l}getPoint(e,i=new k){const r=i,l=this.points,f=l.length,h=(f-(this.closed?0:1))*e;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/f)+1)*f:m===0&&d===f-1&&(d=f-2,m=1);let p,v;this.closed||d>0?p=l[(d-1)%f]:(gu.subVectors(l[0],l[1]).add(l[0]),p=gu);const g=l[d%f],S=l[(d+1)%f];if(this.closed||d+2<f?v=l[(d+2)%f]:(gu.subVectors(l[f-1],l[f-2]).add(l[f-1]),v=gu),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(g),x),A=Math.pow(g.distanceToSquared(S),x),M=Math.pow(S.distanceToSquared(v),x);A<1e-4&&(A=1),E<1e-4&&(E=A),M<1e-4&&(M=A),Gd.initNonuniformCatmullRom(p.x,g.x,S.x,v.x,E,A,M),Vd.initNonuniformCatmullRom(p.y,g.y,S.y,v.y,E,A,M),Xd.initNonuniformCatmullRom(p.z,g.z,S.z,v.z,E,A,M)}else this.curveType==="catmullrom"&&(Gd.initCatmullRom(p.x,g.x,S.x,v.x,this.tension),Vd.initCatmullRom(p.y,g.y,S.y,v.y,this.tension),Xd.initCatmullRom(p.z,g.z,S.z,v.z,this.tension));return r.set(Gd.calc(m),Vd.calc(m),Xd.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(new k().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Pu extends ea{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,g=e/d,S=i/m,x=[],E=[],A=[],M=[];for(let y=0;y<v;y++){const O=y*S-h;for(let P=0;P<p;P++){const w=P*g-f;E.push(w,-O,0),A.push(0,0,1),M.push(P/d),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let O=0;O<d;O++){const P=O+p*y,w=O+p*(y+1),F=O+1+p*(y+1),B=O+1+p*y;x.push(P,w,B),x.push(w,F,B)}this.setIndex(x),this.setAttribute("position",new Vn(E,3)),this.setAttribute("normal",new Vn(A,3)),this.setAttribute("uv",new Vn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.width,e.height,e.widthSegments,e.heightSegments)}}class po extends bl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=XS,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class RT extends bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CT extends bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ny extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class wT extends ny{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const kd=new en,Kv=new k,Qv=new k;class DT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rm,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Kv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Kv),Qv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Qv),i.updateMatrixWorld(),kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iy extends JS{constructor(e=-1,i=1,r=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,h=f+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class UT extends DT{constructor(){super(new iy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class NT extends ny{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new UT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class LT extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Jv=new en;class OT{constructor(e,i,r=0,l=1/0){this.ray=new am(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new sm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Jv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jv),this}intersectObject(e,i=!0,r=[]){return Vp(e,this,r,i),r.sort($v),r}intersectObjects(e,i=!0,r=[]){for(let l=0,f=e.length;l<f;l++)Vp(e[l],this,r,i);return r.sort($v),r}}function $v(o,e){return o.distance-e.distance}function Vp(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Vp(f[h],e,i,!0)}}class tS{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class PT extends nr{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function eS(o,e,i,r){const l=zT(r);switch(i){case FS:return o*e;case GS:return o*e/l.components*l.byteLength;case $p:return o*e/l.components*l.byteLength;case VS:return o*e*2/l.components*l.byteLength;case tm:return o*e*2/l.components*l.byteLength;case HS:return o*e*3/l.components*l.byteLength;case Pi:return o*e*4/l.components*l.byteLength;case em:return o*e*4/l.components*l.byteLength;case bu:case Au:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ru:case Cu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pp:case gp:return Math.max(o,16)*Math.max(e,8)/4;case dp:case mp:return Math.max(o,8)*Math.max(e,8)/2;case _p:case vp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Sp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Mp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case bp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Ap:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Rp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Cp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case wp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Up:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Np:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Lp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Op:case Pp:case zp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ip:case Bp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Fp:case Hp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function zT(o){switch(o){case $i:case PS:return{byteLength:1,components:1};case gl:case zS:case Ml:return{byteLength:2,components:1};case Qp:case Jp:return{byteLength:2,components:4};case Qs:case Kp:case ba:return{byteLength:4,components:1};case IS:case BS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ay(){let o=null,e=!1,i=null,r=null;function l(f,h){i(f,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function IT(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),d.onUploadCallback();let x;if(p instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=o.SHORT;else if(p instanceof Uint32Array)x=o.UNSIGNED_INT;else if(p instanceof Int32Array)x=o.INT;else if(p instanceof Int8Array)x=o.BYTE;else if(p instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const v=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,v);else{g.sort((x,E)=>x.start-E.start);let S=0;for(let x=1;x<g.length;x++){const E=g[S],A=g[x];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++S,g[S]=A)}g.length=S+1;for(let x=0,E=g.length;x<E;x++){const A=g[x];o.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:f,update:h}}var BT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FT=`#ifdef USE_ALPHAHASH
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
#endif`,HT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kT=`#ifdef USE_AOMAP
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
#endif`,qT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YT=`#ifdef USE_BATCHING
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
#endif`,WT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QT=`#ifdef USE_IRIDESCENCE
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
#endif`,JT=`#ifdef USE_BUMPMAP
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
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ob=`#define PI 3.141592653589793
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
} // validated`,lb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cb=`vec3 transformedNormal = objectNormal;
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
#endif`,ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pb="gl_FragColor = linearToOutputTexel( gl_FragColor );",mb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
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
}`,Ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wb=`uniform bool receiveShadow;
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
#endif`,Db=`#ifdef USE_ENVMAP
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
#endif`,Ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pb=`PhysicalMaterial material;
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
#endif`,zb=`struct PhysicalMaterial {
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
}`,Ib=`
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
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wb=`#if defined( USE_POINTS_UV )
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
#endif`,jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`#ifdef USE_MORPHTARGETS
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
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r1=`#ifdef USE_NORMALMAP
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
#endif`,o1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M1=`float getShadowMask() {
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
}`,E1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,R1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,N1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B1=`uniform sampler2D t2D;
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`#include <common>
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
}`,k1=`#if DEPTH_PACKING == 3200
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
}`,q1=`#define DISTANCE
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
}`,Y1=`#define DISTANCE
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
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`uniform float scale;
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
}`,K1=`uniform vec3 diffuse;
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
}`,Q1=`#include <common>
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
}`,J1=`uniform vec3 diffuse;
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
}`,$1=`#define LAMBERT
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
}`,tA=`#define LAMBERT
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
}`,eA=`#define MATCAP
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
}`,nA=`#define MATCAP
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
}`,iA=`#define NORMAL
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
}`,aA=`#define NORMAL
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
}`,sA=`#define PHONG
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
}`,rA=`#define PHONG
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
}`,oA=`#define STANDARD
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
}`,lA=`#define STANDARD
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
}`,cA=`#define TOON
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
}`,uA=`#define TOON
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
}`,fA=`uniform float size;
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
}`,hA=`uniform vec3 diffuse;
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
}`,dA=`#include <common>
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
}`,pA=`uniform vec3 color;
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
}`,mA=`uniform float rotation;
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
}`,gA=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:BT,alphahash_pars_fragment:FT,alphamap_fragment:HT,alphamap_pars_fragment:GT,alphatest_fragment:VT,alphatest_pars_fragment:XT,aomap_fragment:kT,aomap_pars_fragment:qT,batching_pars_vertex:YT,batching_vertex:WT,begin_vertex:jT,beginnormal_vertex:ZT,bsdfs:KT,iridescence_fragment:QT,bumpmap_pars_fragment:JT,clipping_planes_fragment:$T,clipping_planes_pars_fragment:tb,clipping_planes_pars_vertex:eb,clipping_planes_vertex:nb,color_fragment:ib,color_pars_fragment:ab,color_pars_vertex:sb,color_vertex:rb,common:ob,cube_uv_reflection_fragment:lb,defaultnormal_vertex:cb,displacementmap_pars_vertex:ub,displacementmap_vertex:fb,emissivemap_fragment:hb,emissivemap_pars_fragment:db,colorspace_fragment:pb,colorspace_pars_fragment:mb,envmap_fragment:gb,envmap_common_pars_fragment:_b,envmap_pars_fragment:vb,envmap_pars_vertex:Sb,envmap_physical_pars_fragment:Db,envmap_vertex:yb,fog_vertex:xb,fog_pars_vertex:Mb,fog_fragment:Eb,fog_pars_fragment:Tb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:Ab,lights_lambert_fragment:Rb,lights_lambert_pars_fragment:Cb,lights_pars_begin:wb,lights_toon_fragment:Ub,lights_toon_pars_fragment:Nb,lights_phong_fragment:Lb,lights_phong_pars_fragment:Ob,lights_physical_fragment:Pb,lights_physical_pars_fragment:zb,lights_fragment_begin:Ib,lights_fragment_maps:Bb,lights_fragment_end:Fb,logdepthbuf_fragment:Hb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:Xb,map_fragment:kb,map_pars_fragment:qb,map_particle_fragment:Yb,map_particle_pars_fragment:Wb,metalnessmap_fragment:jb,metalnessmap_pars_fragment:Zb,morphinstance_vertex:Kb,morphcolor_vertex:Qb,morphnormal_vertex:Jb,morphtarget_pars_vertex:$b,morphtarget_vertex:t1,normal_fragment_begin:e1,normal_fragment_maps:n1,normal_pars_fragment:i1,normal_pars_vertex:a1,normal_vertex:s1,normalmap_pars_fragment:r1,clearcoat_normal_fragment_begin:o1,clearcoat_normal_fragment_maps:l1,clearcoat_pars_fragment:c1,iridescence_pars_fragment:u1,opaque_fragment:f1,packing:h1,premultiplied_alpha_fragment:d1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:g1,roughnessmap_fragment:_1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:S1,shadowmap_pars_vertex:y1,shadowmap_vertex:x1,shadowmask_pars_fragment:M1,skinbase_vertex:E1,skinning_pars_vertex:T1,skinning_vertex:b1,skinnormal_vertex:A1,specularmap_fragment:R1,specularmap_pars_fragment:C1,tonemapping_fragment:w1,tonemapping_pars_fragment:D1,transmission_fragment:U1,transmission_pars_fragment:N1,uv_pars_fragment:L1,uv_pars_vertex:O1,uv_vertex:P1,worldpos_vertex:z1,background_vert:I1,background_frag:B1,backgroundCube_vert:F1,backgroundCube_frag:H1,cube_vert:G1,cube_frag:V1,depth_vert:X1,depth_frag:k1,distanceRGBA_vert:q1,distanceRGBA_frag:Y1,equirect_vert:W1,equirect_frag:j1,linedashed_vert:Z1,linedashed_frag:K1,meshbasic_vert:Q1,meshbasic_frag:J1,meshlambert_vert:$1,meshlambert_frag:tA,meshmatcap_vert:eA,meshmatcap_frag:nA,meshnormal_vert:iA,meshnormal_frag:aA,meshphong_vert:sA,meshphong_frag:rA,meshphysical_vert:oA,meshphysical_frag:lA,meshtoon_vert:cA,meshtoon_frag:uA,points_vert:fA,points_frag:hA,shadow_vert:dA,shadow_frag:pA,sprite_vert:mA,sprite_frag:gA},It={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Zi={basic:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Re(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Gn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Gn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Re(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Gn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Gn([It.points,It.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Gn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Gn([It.common,It.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Gn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Gn([It.sprite,It.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Gn([It.common,It.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Gn([It.lights,It.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Zi.physical={uniforms:Gn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const _u={r:0,b:0,g:0},ks=new ta,_A=new en;function vA(o,e,i,r,l,f,h){const d=new Re(0);let m=f===!0?0:1,p,v,g=null,S=0,x=null;function E(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?i:e).get(w)),w}function A(P){let w=!1;const F=E(P);F===null?y(d,m):F&&F.isColor&&(y(F,1),w=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,w){const F=E(w);F&&(F.isCubeTexture||F.mapping===Ou)?(v===void 0&&(v=new ui(new Al(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:ho(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,L,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),ks.copy(w.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(_A.makeRotationFromEuler(ks)),v.material.toneMapped=Ue.getTransfer(F.colorSpace)!==Xe,(g!==F||S!==F.version||x!==o.toneMapping)&&(v.material.needsUpdate=!0,g=F,S=F.version,x=o.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new ui(new Pu(2,2),new hs({name:"BackgroundMaterial",uniforms:ho(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(F.colorSpace)!==Xe,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||S!==F.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,g=F,S=F.version,x=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function y(P,w){P.getRGB(_u,QS(o)),r.buffers.color.setClear(_u.r,_u.g,_u.b,w,h)}function O(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,w=1){d.set(P),m=w,y(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,y(d,m)},render:A,addToRenderList:M,dispose:O}}function SA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let f=l,h=!1;function d(C,V,at,ct,gt){let lt=!1;const j=g(ct,at,V);f!==j&&(f=j,p(f.object)),lt=x(C,ct,at,gt),lt&&E(C,ct,at,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,w(C,V,at,ct),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function g(C,V,at){const ct=at.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let lt=gt[V.id];lt===void 0&&(lt={},gt[V.id]=lt);let j=lt[ct];return j===void 0&&(j=S(m()),lt[ct]=j),j}function S(C){const V=[],at=[],ct=[];for(let gt=0;gt<i;gt++)V[gt]=0,at[gt]=0,ct[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:at,attributeDivisors:ct,object:C,attributes:{},index:null}}function x(C,V,at,ct){const gt=f.attributes,lt=V.attributes;let j=0;const st=at.getAttributes();for(const K in st)if(st[K].location>=0){const St=gt[K];let Gt=lt[K];if(Gt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Gt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Gt=C.instanceColor)),St===void 0||St.attribute!==Gt||Gt&&St.data!==Gt.data)return!0;j++}return f.attributesNum!==j||f.index!==ct}function E(C,V,at,ct){const gt={},lt=V.attributes;let j=0;const st=at.getAttributes();for(const K in st)if(st[K].location>=0){let St=lt[K];St===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(St=C.instanceColor));const Gt={};Gt.attribute=St,St&&St.data&&(Gt.data=St.data),gt[K]=Gt,j++}f.attributes=gt,f.attributesNum=j,f.index=ct}function A(){const C=f.newAttributes;for(let V=0,at=C.length;V<at;V++)C[V]=0}function M(C){y(C,0)}function y(C,V){const at=f.newAttributes,ct=f.enabledAttributes,gt=f.attributeDivisors;at[C]=1,ct[C]===0&&(o.enableVertexAttribArray(C),ct[C]=1),gt[C]!==V&&(o.vertexAttribDivisor(C,V),gt[C]=V)}function O(){const C=f.newAttributes,V=f.enabledAttributes;for(let at=0,ct=V.length;at<ct;at++)V[at]!==C[at]&&(o.disableVertexAttribArray(at),V[at]=0)}function P(C,V,at,ct,gt,lt,j){j===!0?o.vertexAttribIPointer(C,V,at,gt,lt):o.vertexAttribPointer(C,V,at,ct,gt,lt)}function w(C,V,at,ct){A();const gt=ct.attributes,lt=at.getAttributes(),j=V.defaultAttributeValues;for(const st in lt){const K=lt[st];if(K.location>=0){let _t=gt[st];if(_t===void 0&&(st==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),st==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),_t!==void 0){const St=_t.normalized,Gt=_t.itemSize,re=e.get(_t);if(re===void 0)continue;const be=re.buffer,I=re.type,ut=re.bytesPerElement,$=I===o.INT||I===o.UNSIGNED_INT||_t.gpuType===Kp;if(_t.isInterleavedBufferAttribute){const it=_t.data,xt=it.stride,Nt=_t.offset;if(it.isInstancedInterleavedBuffer){for(let At=0;At<K.locationSize;At++)y(K.location+At,it.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let At=0;At<K.locationSize;At++)M(K.location+At);o.bindBuffer(o.ARRAY_BUFFER,be);for(let At=0;At<K.locationSize;At++)P(K.location+At,Gt/K.locationSize,I,St,xt*ut,(Nt+Gt/K.locationSize*At)*ut,$)}else{if(_t.isInstancedBufferAttribute){for(let it=0;it<K.locationSize;it++)y(K.location+it,_t.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let it=0;it<K.locationSize;it++)M(K.location+it);o.bindBuffer(o.ARRAY_BUFFER,be);for(let it=0;it<K.locationSize;it++)P(K.location+it,Gt/K.locationSize,I,St,Gt*ut,Gt/K.locationSize*it*ut,$)}}else if(j!==void 0){const St=j[st];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(K.location,St);break;case 3:o.vertexAttrib3fv(K.location,St);break;case 4:o.vertexAttrib4fv(K.location,St);break;default:o.vertexAttrib1fv(K.location,St)}}}}O()}function F(){q();for(const C in r){const V=r[C];for(const at in V){const ct=V[at];for(const gt in ct)v(ct[gt].object),delete ct[gt];delete V[at]}delete r[C]}}function B(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const at in V){const ct=V[at];for(const gt in ct)v(ct[gt].object),delete ct[gt];delete V[at]}delete r[C.id]}function L(C){for(const V in r){const at=r[V];if(at[C.id]===void 0)continue;const ct=at[C.id];for(const gt in ct)v(ct[gt].object),delete ct[gt];delete at[C.id]}}function q(){D(),h=!0,f!==l&&(f=l,p(f.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:L,initAttributes:A,enableAttribute:M,disableUnusedAttributes:O}}function yA(o,e,i){let r;function l(p){r=p}function f(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function h(p,v,g){g!==0&&(o.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let x=0;for(let E=0;E<g;E++)x+=v[E];i.update(x,r,1)}function m(p,v,g,S){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)h(p[E],v[E],S[E]);else{x.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,g);let E=0;for(let A=0;A<g;A++)E+=v[A]*S[A];i.update(E,r,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function xA(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(L){return!(L!==Pi&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const q=L===Ml&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==$i&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ba&&!q)}function m(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:x,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:O,maxVaryings:P,maxFragmentUniforms:w,vertexTextures:F,maxSamples:B}}function MA(o){const e=this;let i=null,r=0,l=!1,f=!1;const h=new os,d=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const x=g.length!==0||S||r!==0||l;return l=S,r=g.length,x},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,x){const E=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,y=o.get(g);if(!l||E===null||E.length===0||f&&!M)f?v(null):p();else{const O=f?0:r,P=O*4;let w=y.clippingState||null;m.value=w,w=v(E,S,P,x);for(let F=0;F!==P;++F)w[F]=i[F];y.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,S,x,E){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=m.value,E!==!0||M===null){const y=x+A*4,O=S.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<y)&&(M=new Float32Array(y));for(let P=0,w=x;P!==A;++P,w+=4)h.copy(g[P]).applyMatrix4(O,d),h.normal.toArray(M,w),M[w+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function EA(o){let e=new WeakMap;function i(h,d){return d===cp?h.mapping=co:d===up&&(h.mapping=uo),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===cp||d===up)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new ST(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const ao=4,nS=[.125,.215,.35,.446,.526,.582],js=20,qd=new iy,iS=new Re;let Yd=null,Wd=0,jd=0,Zd=!1;const Ys=(1+Math.sqrt(5))/2,no=1/Ys,aS=[new k(-Ys,no,0),new k(Ys,no,0),new k(-no,0,Ys),new k(no,0,Ys),new k(0,Ys,-no),new k(0,Ys,no),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],TA=new k;class sS{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,f={}){const{size:h=256,position:d=TA}=f;Yd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yd,Wd,jd),this._renderer.xr.enabled=Zd,e.scissorTest=!1,vu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===co||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:Ml,format:Pi,colorSpace:fo,depthBuffer:!1},l=rS(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rS(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bA(f)),this._blurMaterial=AA(f,e,i)}return l}_compileMaterial(e){const i=new ui(this._lodPlanes[0],e);this._renderer.compile(i,qd)}_sceneToCubeUV(e,i,r,l,f){const m=new Ei(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,x=g.toneMapping;g.getClearColor(iS),g.toneMapping=us,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const A=new jS({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),M=new ui(new Al,A);let y=!1;const O=e.background;O?O.isColor&&(A.color.copy(O),e.background=null,y=!0):(A.color.copy(iS),y=!0);for(let P=0;P<6;P++){const w=P%3;w===0?(m.up.set(0,p[P],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+v[P],f.y,f.z)):w===1?(m.up.set(0,0,p[P]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+v[P],f.z)):(m.up.set(0,p[P],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+v[P]));const F=this._cubeSize;vu(l,w*F,P>2?F:0,F,F),g.setRenderTarget(l),y&&g.render(M,m),g.render(e,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=S,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===co||e.mapping===uo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=lS()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oS());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new ui(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const m=this._cubeSize;vu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,qd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=aS[(l-f-1)%aS.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",f),this._halfBlur(h,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new ui(this._lodPlanes[l],p),S=p.uniforms,x=this._sizeLods[r]-1,E=isFinite(f)?Math.PI/(2*x):2*Math.PI/(2*js-1),A=f/E,M=isFinite(f)?1+Math.floor(v*A):js;M>js&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${js}`);const y=[];let O=0;for(let L=0;L<js;++L){const q=L/A,D=Math.exp(-q*q/2);y.push(D),L===0?O+=D:L<M&&(O+=2*D)}for(let L=0;L<y.length;L++)y[L]=y[L]/O;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=y,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:P}=this;S.dTheta.value=E,S.mipInt.value=P-r;const w=this._sizeLods[l],F=3*w*(l>P-ao?l-P+ao:0),B=4*(this._cubeSize-w);vu(i,F,B,3*w,2*w),m.setRenderTarget(i),m.render(g,qd)}}function bA(o){const e=[],i=[],r=[];let l=o;const f=o-ao+1+nS.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-ao?m=nS[h-o+ao-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),v=-p,g=1+p,S=[v,v,g,v,g,g,v,v,g,g,v,g],x=6,E=6,A=3,M=2,y=1,O=new Float32Array(A*E*x),P=new Float32Array(M*E*x),w=new Float32Array(y*E*x);for(let B=0;B<x;B++){const L=B%3*2/3-1,q=B>2?0:-1,D=[L,q,0,L+2/3,q,0,L+2/3,q+1,0,L,q,0,L+2/3,q+1,0,L,q+1,0];O.set(D,A*E*B),P.set(S,M*E*B);const C=[B,B,B,B,B,B];w.set(C,y*E*B)}const F=new ea;F.setAttribute("position",new Ji(O,A)),F.setAttribute("uv",new Ji(P,M)),F.setAttribute("faceIndex",new Ji(w,y)),e.push(F),l>ao&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function rS(o,e,i){const r=new $s(o,e,i);return r.texture.mapping=Ou,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function AA(o,e,i){const r=new Float32Array(js),l=new k(0,1,0);return new hs({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:cm(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function oS(){return new hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cm(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function lS(){return new hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function cm(){return`

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
	`}function RA(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===cp||m===up,v=m===co||m===uo;if(p||v){let g=e.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new sS(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return p&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new sS(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function f(d){const m=d.target;m.removeEventListener("dispose",f);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function CA(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&yl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function wA(o,e,i,r){const l={},f=new WeakMap;function h(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);S.removeEventListener("dispose",h),delete l[S.id];const x=f.get(S);x&&(e.remove(x),f.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const x in S)e.update(S[x],o.ARRAY_BUFFER)}function p(g){const S=[],x=g.index,E=g.attributes.position;let A=0;if(x!==null){const O=x.array;A=x.version;for(let P=0,w=O.length;P<w;P+=3){const F=O[P+0],B=O[P+1],L=O[P+2];S.push(F,B,B,L,L,F)}}else if(E!==void 0){const O=E.array;A=E.version;for(let P=0,w=O.length/3-1;P<w;P+=3){const F=P+0,B=P+1,L=P+2;S.push(F,B,B,L,L,F)}}else return;const M=new(qS(S)?KS:ZS)(S,1);M.version=A;const y=f.get(g);y&&e.remove(y),f.set(g,M)}function v(g){const S=f.get(g);if(S){const x=g.index;x!==null&&S.version<x.version&&p(g)}else p(g);return f.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function DA(o,e,i){let r;function l(S){r=S}let f,h;function d(S){f=S.type,h=S.bytesPerElement}function m(S,x){o.drawElements(r,x,f,S*h),i.update(x,r,1)}function p(S,x,E){E!==0&&(o.drawElementsInstanced(r,x,f,S*h,E),i.update(x,r,E))}function v(S,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,f,S,0,E);let M=0;for(let y=0;y<E;y++)M+=x[y];i.update(M,r,1)}function g(S,x,E,A){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<S.length;y++)p(S[y]/h,x[y],A[y]);else{M.multiDrawElementsInstancedWEBGL(r,x,0,f,S,0,A,0,E);let y=0;for(let O=0;O<E;O++)y+=x[O]*A[O];i.update(y,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function UA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function NA(o,e,i){const r=new WeakMap,l=new rn;function f(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let S=r.get(d);if(S===void 0||S.count!==g){let C=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var x=C;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),M===!0&&(w=3);let F=d.attributes.position.count*w,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const L=new Float32Array(F*B*4*g),q=new YS(L,F,B,g);q.type=ba,q.needsUpdate=!0;const D=w*4;for(let V=0;V<g;V++){const at=y[V],ct=O[V],gt=P[V],lt=F*B*4*V;for(let j=0;j<at.count;j++){const st=j*D;E===!0&&(l.fromBufferAttribute(at,j),L[lt+st+0]=l.x,L[lt+st+1]=l.y,L[lt+st+2]=l.z,L[lt+st+3]=0),A===!0&&(l.fromBufferAttribute(ct,j),L[lt+st+4]=l.x,L[lt+st+5]=l.y,L[lt+st+6]=l.z,L[lt+st+7]=0),M===!0&&(l.fromBufferAttribute(gt,j),L[lt+st+8]=l.x,L[lt+st+9]=l.y,L[lt+st+10]=l.z,L[lt+st+11]=gt.itemSize===4?l.w:1)}}S={count:g,texture:q,size:new ue(F,B)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:f}}function LA(o,e,i,r){let l=new WeakMap;function f(m){const p=r.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:f,dispose:h}}const sy=new Jn,cS=new ty(1,1),ry=new YS,oy=new nT,ly=new $S,uS=[],fS=[],hS=new Float32Array(16),dS=new Float32Array(9),pS=new Float32Array(4);function mo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=uS[l];if(f===void 0&&(f=new Float32Array(l),uS[l]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function vn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Sn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function zu(o,e){let i=fS[e];i===void 0&&(i=new Int32Array(e),fS[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function OA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function PA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2fv(this.addr,e),Sn(i,e)}}function zA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;o.uniform3fv(this.addr,e),Sn(i,e)}}function IA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4fv(this.addr,e),Sn(i,e)}}function BA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(vn(i,r))return;pS.set(r),o.uniformMatrix2fv(this.addr,!1,pS),Sn(i,r)}}function FA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(vn(i,r))return;dS.set(r),o.uniformMatrix3fv(this.addr,!1,dS),Sn(i,r)}}function HA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(vn(i,r))return;hS.set(r),o.uniformMatrix4fv(this.addr,!1,hS),Sn(i,r)}}function GA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function VA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2iv(this.addr,e),Sn(i,e)}}function XA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3iv(this.addr,e),Sn(i,e)}}function kA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4iv(this.addr,e),Sn(i,e)}}function qA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function YA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2uiv(this.addr,e),Sn(i,e)}}function WA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3uiv(this.addr,e),Sn(i,e)}}function jA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4uiv(this.addr,e),Sn(i,e)}}function ZA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(cS.compareFunction=kS,f=cS):f=sy,i.setTexture2D(e||f,l)}function KA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||oy,l)}function QA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||ly,l)}function JA(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||ry,l)}function $A(o){switch(o){case 5126:return OA;case 35664:return PA;case 35665:return zA;case 35666:return IA;case 35674:return BA;case 35675:return FA;case 35676:return HA;case 5124:case 35670:return GA;case 35667:case 35671:return VA;case 35668:case 35672:return XA;case 35669:case 35673:return kA;case 5125:return qA;case 36294:return YA;case 36295:return WA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return ZA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return QA;case 36289:case 36303:case 36311:case 36292:return JA}}function tR(o,e){o.uniform1fv(this.addr,e)}function eR(o,e){const i=mo(e,this.size,2);o.uniform2fv(this.addr,i)}function nR(o,e){const i=mo(e,this.size,3);o.uniform3fv(this.addr,i)}function iR(o,e){const i=mo(e,this.size,4);o.uniform4fv(this.addr,i)}function aR(o,e){const i=mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function sR(o,e){const i=mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function rR(o,e){const i=mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function oR(o,e){o.uniform1iv(this.addr,e)}function lR(o,e){o.uniform2iv(this.addr,e)}function cR(o,e){o.uniform3iv(this.addr,e)}function uR(o,e){o.uniform4iv(this.addr,e)}function fR(o,e){o.uniform1uiv(this.addr,e)}function hR(o,e){o.uniform2uiv(this.addr,e)}function dR(o,e){o.uniform3uiv(this.addr,e)}function pR(o,e){o.uniform4uiv(this.addr,e)}function mR(o,e,i){const r=this.cache,l=e.length,f=zu(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),Sn(r,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||sy,f[h])}function gR(o,e,i){const r=this.cache,l=e.length,f=zu(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),Sn(r,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||oy,f[h])}function _R(o,e,i){const r=this.cache,l=e.length,f=zu(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),Sn(r,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||ly,f[h])}function vR(o,e,i){const r=this.cache,l=e.length,f=zu(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),Sn(r,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||ry,f[h])}function SR(o){switch(o){case 5126:return tR;case 35664:return eR;case 35665:return nR;case 35666:return iR;case 35674:return aR;case 35675:return sR;case 35676:return rR;case 5124:case 35670:return oR;case 35667:case 35671:return lR;case 35668:case 35672:return cR;case 35669:case 35673:return uR;case 5125:return fR;case 36294:return hR;case 36295:return dR;case 36296:return pR;case 35678:case 36198:case 36298:case 36306:case 35682:return mR;case 35679:case 36299:case 36307:return gR;case 35680:case 36300:case 36308:case 36293:return _R;case 36289:case 36303:case 36311:case 36292:return vR}}class yR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=$A(i.type)}}class xR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=SR(i.type)}}class MR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],r)}}}const Kd=/(\w+)(\])?(\[|\.)?/g;function mS(o,e){o.seq.push(e),o.map[e.id]=e}function ER(o,e,i){const r=o.name,l=r.length;for(Kd.lastIndex=0;;){const f=Kd.exec(r),h=Kd.lastIndex;let d=f[1];const m=f[2]==="]",p=f[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){mS(i,p===void 0?new yR(d,o,e):new xR(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new MR(d),mS(i,g)),i=g}}}class Du{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);ER(f,h,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function gS(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const TR=37297;let bR=0;function AR(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const _S=new pe;function RR(o){Ue._getMatrix(_S,Ue.workingColorSpace,o);const e=`mat3( ${_S.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case Uu:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function vS(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+AR(o.getShaderSource(e),d)}else return f}function CR(o,e){const i=RR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function wR(o,e){let i;switch(e){case wE:i="Linear";break;case DE:i="Reinhard";break;case UE:i="Cineon";break;case NE:i="ACESFilmic";break;case OE:i="AgX";break;case PE:i="Neutral";break;case LE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Su=new k;function DR(){Ue.getLuminanceCoefficients(Su);const o=Su.x.toFixed(4),e=Su.y.toFixed(4),i=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function NR(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function LR(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function ml(o){return o!==""}function SS(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yS(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xp(o){return o.replace(OR,zR)}const PR=new Map;function zR(o,e){let i=me[e];if(i===void 0){const r=PR.get(e);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Xp(i)}const IR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xS(o){return o.replace(IR,BR)}function BR(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function MS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function FR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===NS?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===lE?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ea&&(e="SHADOWMAP_TYPE_VSM"),e}function HR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case co:case uo:e="ENVMAP_TYPE_CUBE";break;case Ou:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function VR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case LS:e="ENVMAP_BLENDING_MULTIPLY";break;case RE:e="ENVMAP_BLENDING_MIX";break;case CE:e="ENVMAP_BLENDING_ADD";break}return e}function XR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function kR(o,e,i,r){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=FR(i),p=HR(i),v=GR(i),g=VR(i),S=XR(i),x=UR(i),E=NR(f),A=l.createProgram();let M,y,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ml).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ml).join(`
`),y.length>0&&(y+=`
`)):(M=[MS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),y=[MS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==us?"#define TONE_MAPPING":"",i.toneMapping!==us?me.tonemapping_pars_fragment:"",i.toneMapping!==us?wR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,CR("linearToOutputTexel",i.outputColorSpace),DR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ml).join(`
`)),h=Xp(h),h=SS(h,i),h=yS(h,i),d=Xp(d),d=SS(d,i),d=yS(d,i),h=xS(h),d=xS(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===Nv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Nv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=O+M+h,w=O+y+d,F=gS(l,l.VERTEX_SHADER,P),B=gS(l,l.FRAGMENT_SHADER,w);l.attachShader(A,F),l.attachShader(A,B),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function L(V){if(o.debug.checkShaderErrors){const at=l.getProgramInfoLog(A)||"",ct=l.getShaderInfoLog(F)||"",gt=l.getShaderInfoLog(B)||"",lt=at.trim(),j=ct.trim(),st=gt.trim();let K=!0,_t=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,F,B);else{const St=vS(l,F,"vertex"),Gt=vS(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+St+`
`+Gt)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(j===""||st==="")&&(_t=!1);_t&&(V.diagnostics={runnable:K,programLog:lt,vertexShader:{log:j,prefix:M},fragmentShader:{log:st,prefix:y}})}l.deleteShader(F),l.deleteShader(B),q=new Du(l,A),D=LR(l,A)}let q;this.getUniforms=function(){return q===void 0&&L(this),q};let D;this.getAttributes=function(){return D===void 0&&L(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,TR)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=bR++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=B,this}let qR=0;class YR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new WR(e),i.set(e,r)),r}}class WR{constructor(e){this.id=qR++,this.code=e,this.usedTimes=0}}function jR(o,e,i,r,l,f,h){const d=new sm,m=new YR,p=new Set,v=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,C,V,at,ct){const gt=at.fog,lt=ct.geometry,j=D.isMeshStandardMaterial?at.environment:null,st=(D.isMeshStandardMaterial?i:e).get(D.envMap||j),K=st&&st.mapping===Ou?st.image.height:null,_t=E[D.type];D.precision!==null&&(x=l.getMaxPrecision(D.precision),x!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const St=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Gt=St!==void 0?St.length:0;let re=0;lt.morphAttributes.position!==void 0&&(re=1),lt.morphAttributes.normal!==void 0&&(re=2),lt.morphAttributes.color!==void 0&&(re=3);let be,I,ut,$;if(_t){const Me=Zi[_t];be=Me.vertexShader,I=Me.fragmentShader}else be=D.vertexShader,I=D.fragmentShader,m.update(D),ut=m.getVertexShaderID(D),$=m.getFragmentShaderID(D);const it=o.getRenderTarget(),xt=o.state.buffers.depth.getReversed(),Nt=ct.isInstancedMesh===!0,At=ct.isBatchedMesh===!0,Mt=!!D.map,Yt=!!D.matcap,z=!!st,He=!!D.aoMap,se=!!D.lightMap,Qt=!!D.bumpMap,Lt=!!D.normalMap,ie=!!D.displacementMap,Ft=!!D.emissiveMap,oe=!!D.metalnessMap,qe=!!D.roughnessMap,We=D.anisotropy>0,U=D.clearcoat>0,b=D.dispersion>0,et=D.iridescence>0,dt=D.sheen>0,vt=D.transmission>0,ft=We&&!!D.anisotropyMap,Xt=U&&!!D.clearcoatMap,Rt=U&&!!D.clearcoatNormalMap,jt=U&&!!D.clearcoatRoughnessMap,Kt=et&&!!D.iridescenceMap,Tt=et&&!!D.iridescenceThicknessMap,Ot=dt&&!!D.sheenColorMap,ne=dt&&!!D.sheenRoughnessMap,Zt=!!D.specularMap,Pt=!!D.specularColorMap,fe=!!D.specularIntensityMap,G=vt&&!!D.transmissionMap,bt=vt&&!!D.thicknessMap,wt=!!D.gradientMap,Vt=!!D.alphaMap,yt=D.alphaTest>0,mt=!!D.alphaHash,Wt=!!D.extensions;let ce=us;D.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Ge={shaderID:_t,shaderType:D.type,shaderName:D.name,vertexShader:be,fragmentShader:I,defines:D.defines,customVertexShaderID:ut,customFragmentShaderID:$,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:At,batchingColor:At&&ct._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&ct.instanceColor!==null,instancingMorph:Nt&&ct.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:it===null?o.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:fo,alphaToCoverage:!!D.alphaToCoverage,map:Mt,matcap:Yt,envMap:z,envMapMode:z&&st.mapping,envMapCubeUVHeight:K,aoMap:He,lightMap:se,bumpMap:Qt,normalMap:Lt,displacementMap:S&&ie,emissiveMap:Ft,normalMapObjectSpace:Lt&&D.normalMapType===FE,normalMapTangentSpace:Lt&&D.normalMapType===XS,metalnessMap:oe,roughnessMap:qe,anisotropy:We,anisotropyMap:ft,clearcoat:U,clearcoatMap:Xt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:jt,dispersion:b,iridescence:et,iridescenceMap:Kt,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:Ot,sheenRoughnessMap:ne,specularMap:Zt,specularColorMap:Pt,specularIntensityMap:fe,transmission:vt,transmissionMap:G,thicknessMap:bt,gradientMap:wt,opaque:D.transparent===!1&&D.blending===ro&&D.alphaToCoverage===!1,alphaMap:Vt,alphaTest:yt,alphaHash:mt,combine:D.combine,mapUv:Mt&&A(D.map.channel),aoMapUv:He&&A(D.aoMap.channel),lightMapUv:se&&A(D.lightMap.channel),bumpMapUv:Qt&&A(D.bumpMap.channel),normalMapUv:Lt&&A(D.normalMap.channel),displacementMapUv:ie&&A(D.displacementMap.channel),emissiveMapUv:Ft&&A(D.emissiveMap.channel),metalnessMapUv:oe&&A(D.metalnessMap.channel),roughnessMapUv:qe&&A(D.roughnessMap.channel),anisotropyMapUv:ft&&A(D.anisotropyMap.channel),clearcoatMapUv:Xt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:ne&&A(D.sheenRoughnessMap.channel),specularMapUv:Zt&&A(D.specularMap.channel),specularColorMapUv:Pt&&A(D.specularColorMap.channel),specularIntensityMapUv:fe&&A(D.specularIntensityMap.channel),transmissionMapUv:G&&A(D.transmissionMap.channel),thicknessMapUv:bt&&A(D.thicknessMap.channel),alphaMapUv:Vt&&A(D.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Lt||We),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!lt.attributes.uv&&(Mt||Vt),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:xt,skinning:ct.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:Mt&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ft&&D.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(D.emissiveMap.colorSpace)===Xe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Kn,flipSided:D.side===Qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Wt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&D.extensions.multiDraw===!0||At)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ge.vertexUv1s=p.has(1),Ge.vertexUv2s=p.has(2),Ge.vertexUv3s=p.has(3),p.clear(),Ge}function y(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(O(C,D),P(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function P(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=E[D.type];let V;if(C){const at=Zi[C];V=mT.clone(at.uniforms)}else V=D.uniforms;return V}function F(D,C){let V;for(let at=0,ct=v.length;at<ct;at++){const gt=v[at];if(gt.cacheKey===C){V=gt,++V.usedTimes;break}}return V===void 0&&(V=new kR(o,C,D,f),v.push(V)),V}function B(D){if(--D.usedTimes===0){const C=v.indexOf(D);v[C]=v[v.length-1],v.pop(),D.destroy()}}function L(D){m.remove(D)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:w,acquireProgram:F,releaseProgram:B,releaseShaderCache:L,programs:v,dispose:q}}function ZR(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function KR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ES(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function TS(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function h(g,S,x,E,A,M){let y=o[e];return y===void 0?(y={id:g.id,object:g,geometry:S,material:x,groupOrder:E,renderOrder:g.renderOrder,z:A,group:M},o[e]=y):(y.id=g.id,y.object=g,y.geometry=S,y.material=x,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=A,y.group=M),e++,y}function d(g,S,x,E,A,M){const y=h(g,S,x,E,A,M);x.transmission>0?r.push(y):x.transparent===!0?l.push(y):i.push(y)}function m(g,S,x,E,A,M){const y=h(g,S,x,E,A,M);x.transmission>0?r.unshift(y):x.transparent===!0?l.unshift(y):i.unshift(y)}function p(g,S){i.length>1&&i.sort(g||KR),r.length>1&&r.sort(S||ES),l.length>1&&l.sort(S||ES)}function v(){for(let g=e,S=o.length;g<S;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:d,unshift:m,finish:v,sort:p}}function QR(){let o=new WeakMap;function e(r,l){const f=o.get(r);let h;return f===void 0?(h=new TS,o.set(r,[h])):l>=f.length?(h=new TS,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function JR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new k,color:new Re};break;case"SpotLight":i={position:new k,direction:new k,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=i,i}}}function $R(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let tC=0;function eC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function nC(o){const e=new JR,i=$R(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new k);const l=new k,f=new en,h=new en;function d(p){let v=0,g=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let x=0,E=0,A=0,M=0,y=0,O=0,P=0,w=0,F=0,B=0,L=0;p.sort(eC);for(let D=0,C=p.length;D<C;D++){const V=p[D],at=V.color,ct=V.intensity,gt=V.distance,lt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=at.r*ct,g+=at.g*ct,S+=at.b*ct;else if(V.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(V.sh.coefficients[j],ct);L++}else if(V.isDirectionalLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const st=V.shadow,K=i.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,r.directionalShadow[x]=K,r.directionalShadowMap[x]=lt,r.directionalShadowMatrix[x]=V.shadow.matrix,O++}r.directional[x]=j,x++}else if(V.isSpotLight){const j=e.get(V);j.position.setFromMatrixPosition(V.matrixWorld),j.color.copy(at).multiplyScalar(ct),j.distance=gt,j.coneCos=Math.cos(V.angle),j.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),j.decay=V.decay,r.spot[A]=j;const st=V.shadow;if(V.map&&(r.spotLightMap[F]=V.map,F++,st.updateMatrices(V),V.castShadow&&B++),r.spotLightMatrix[A]=st.matrix,V.castShadow){const K=i.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,r.spotShadow[A]=K,r.spotShadowMap[A]=lt,w++}A++}else if(V.isRectAreaLight){const j=e.get(V);j.color.copy(at).multiplyScalar(ct),j.halfWidth.set(V.width*.5,0,0),j.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=j,M++}else if(V.isPointLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity),j.distance=V.distance,j.decay=V.decay,V.castShadow){const st=V.shadow,K=i.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,K.shadowCameraNear=st.camera.near,K.shadowCameraFar=st.camera.far,r.pointShadow[E]=K,r.pointShadowMap[E]=lt,r.pointShadowMatrix[E]=V.shadow.matrix,P++}r.point[E]=j,E++}else if(V.isHemisphereLight){const j=e.get(V);j.skyColor.copy(V.color).multiplyScalar(ct),j.groundColor.copy(V.groundColor).multiplyScalar(ct),r.hemi[y]=j,y++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=It.LTC_FLOAT_1,r.rectAreaLTC2=It.LTC_FLOAT_2):(r.rectAreaLTC1=It.LTC_HALF_1,r.rectAreaLTC2=It.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=S;const q=r.hash;(q.directionalLength!==x||q.pointLength!==E||q.spotLength!==A||q.rectAreaLength!==M||q.hemiLength!==y||q.numDirectionalShadows!==O||q.numPointShadows!==P||q.numSpotShadows!==w||q.numSpotMaps!==F||q.numLightProbes!==L)&&(r.directional.length=x,r.spot.length=A,r.rectArea.length=M,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=w+F-B,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=L,q.directionalLength=x,q.pointLength=E,q.spotLength=A,q.rectAreaLength=M,q.hemiLength=y,q.numDirectionalShadows=O,q.numPointShadows=P,q.numSpotShadows=w,q.numSpotMaps=F,q.numLightProbes=L,r.version=tC++)}function m(p,v){let g=0,S=0,x=0,E=0,A=0;const M=v.matrixWorldInverse;for(let y=0,O=p.length;y<O;y++){const P=p[y];if(P.isDirectionalLight){const w=r.directional[g];w.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),g++}else if(P.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),x++}else if(P.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(M),h.identity(),f.copy(P.matrixWorld),f.premultiply(M),h.extractRotation(f),w.halfWidth.set(P.width*.5,0,0),w.halfHeight.set(0,P.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(P.isPointLight){const w=r.point[S];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(M),S++}else if(P.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(P.matrixWorld),w.direction.transformDirection(M),A++}}}return{setup:d,setupView:m,state:r}}function bS(o){const e=new nC(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function f(v){i.push(v)}function h(v){r.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:f,pushShadow:h}}function iC(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new bS(o),e.set(l,[d])):f>=h.length?(d=new bS(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const aC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sC=`uniform sampler2D shadow_pass;
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
}`;function rC(o,e,i){let r=new rm;const l=new ue,f=new ue,h=new rn,d=new RT({depthPacking:BE}),m=new CT,p={},v=i.maxTextureSize,g={[fs]:Qn,[Qn]:fs,[Kn]:Kn},S=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:aC,fragmentShader:sC}),x=S.clone();x.defines.HORIZONTAL_PASS=1;const E=new ea;E.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ui(E,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=NS;let y=this.type;this.render=function(B,L,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),at=o.state;at.setBlending(cs),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ct=y!==Ea&&this.type===Ea,gt=y===Ea&&this.type!==Ea;for(let lt=0,j=B.length;lt<j;lt++){const st=B[lt],K=st.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const _t=K.getFrameExtents();if(l.multiply(_t),f.copy(K.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(f.x=Math.floor(v/_t.x),l.x=f.x*_t.x,K.mapSize.x=f.x),l.y>v&&(f.y=Math.floor(v/_t.y),l.y=f.y*_t.y,K.mapSize.y=f.y)),K.map===null||ct===!0||gt===!0){const Gt=this.type!==Ea?{minFilter:zi,magFilter:zi}:{};K.map!==null&&K.map.dispose(),K.map=new $s(l.x,l.y,Gt),K.map.texture.name=st.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const St=K.getViewportCount();for(let Gt=0;Gt<St;Gt++){const re=K.getViewport(Gt);h.set(f.x*re.x,f.y*re.y,f.x*re.z,f.y*re.w),at.viewport(h),K.updateMatrices(st,Gt),r=K.getFrustum(),w(L,q,K.camera,st,this.type)}K.isPointLightShadow!==!0&&this.type===Ea&&O(K,q),K.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(D,C,V)};function O(B,L){const q=e.update(A);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new $s(l.x,l.y)),S.uniforms.shadow_pass.value=B.map.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(L,null,q,S,A,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(L,null,q,x,A,null)}function P(B,L,q,D){let C=null;const V=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)C=V;else if(C=q.isPointLight===!0?m:d,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const at=C.uuid,ct=L.uuid;let gt=p[at];gt===void 0&&(gt={},p[at]=gt);let lt=gt[ct];lt===void 0&&(lt=C.clone(),gt[ct]=lt,L.addEventListener("dispose",F)),C=lt}if(C.visible=L.visible,C.wireframe=L.wireframe,D===Ea?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:g[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const at=o.properties.get(C);at.light=q}return C}function w(B,L,q,D,C){if(B.visible===!1)return;if(B.layers.test(L.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Ea)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const ct=e.update(B),gt=B.material;if(Array.isArray(gt)){const lt=ct.groups;for(let j=0,st=lt.length;j<st;j++){const K=lt[j],_t=gt[K.materialIndex];if(_t&&_t.visible){const St=P(B,_t,D,C);B.onBeforeShadow(o,B,L,q,ct,St,K),o.renderBufferDirect(q,null,ct,St,B,K),B.onAfterShadow(o,B,L,q,ct,St,K)}}}else if(gt.visible){const lt=P(B,gt,D,C);B.onBeforeShadow(o,B,L,q,ct,lt,null),o.renderBufferDirect(q,null,ct,lt,B,null),B.onAfterShadow(o,B,L,q,ct,lt,null)}}const at=B.children;for(let ct=0,gt=at.length;ct<gt;ct++)w(at[ct],L,q,D,C)}function F(B){B.target.removeEventListener("dispose",F);for(const q in p){const D=p[q],C=B.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const oC={[np]:ip,[ap]:op,[sp]:lp,[lo]:rp,[ip]:np,[op]:ap,[lp]:sp,[rp]:lo};function lC(o,e){function i(){let G=!1;const bt=new rn;let wt=null;const Vt=new rn(0,0,0,0);return{setMask:function(yt){wt!==yt&&!G&&(o.colorMask(yt,yt,yt,yt),wt=yt)},setLocked:function(yt){G=yt},setClear:function(yt,mt,Wt,ce,Ge){Ge===!0&&(yt*=ce,mt*=ce,Wt*=ce),bt.set(yt,mt,Wt,ce),Vt.equals(bt)===!1&&(o.clearColor(yt,mt,Wt,ce),Vt.copy(bt))},reset:function(){G=!1,wt=null,Vt.set(-1,0,0,0)}}}function r(){let G=!1,bt=!1,wt=null,Vt=null,yt=null;return{setReversed:function(mt){if(bt!==mt){const Wt=e.get("EXT_clip_control");mt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),bt=mt;const ce=yt;yt=null,this.setClear(ce)}},getReversed:function(){return bt},setTest:function(mt){mt?it(o.DEPTH_TEST):xt(o.DEPTH_TEST)},setMask:function(mt){wt!==mt&&!G&&(o.depthMask(mt),wt=mt)},setFunc:function(mt){if(bt&&(mt=oC[mt]),Vt!==mt){switch(mt){case np:o.depthFunc(o.NEVER);break;case ip:o.depthFunc(o.ALWAYS);break;case ap:o.depthFunc(o.LESS);break;case lo:o.depthFunc(o.LEQUAL);break;case sp:o.depthFunc(o.EQUAL);break;case rp:o.depthFunc(o.GEQUAL);break;case op:o.depthFunc(o.GREATER);break;case lp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Vt=mt}},setLocked:function(mt){G=mt},setClear:function(mt){yt!==mt&&(bt&&(mt=1-mt),o.clearDepth(mt),yt=mt)},reset:function(){G=!1,wt=null,Vt=null,yt=null,bt=!1}}}function l(){let G=!1,bt=null,wt=null,Vt=null,yt=null,mt=null,Wt=null,ce=null,Ge=null;return{setTest:function(Me){G||(Me?it(o.STENCIL_TEST):xt(o.STENCIL_TEST))},setMask:function(Me){bt!==Me&&!G&&(o.stencilMask(Me),bt=Me)},setFunc:function(Me,$e,pn){(wt!==Me||Vt!==$e||yt!==pn)&&(o.stencilFunc(Me,$e,pn),wt=Me,Vt=$e,yt=pn)},setOp:function(Me,$e,pn){(mt!==Me||Wt!==$e||ce!==pn)&&(o.stencilOp(Me,$e,pn),mt=Me,Wt=$e,ce=pn)},setLocked:function(Me){G=Me},setClear:function(Me){Ge!==Me&&(o.clearStencil(Me),Ge=Me)},reset:function(){G=!1,bt=null,wt=null,Vt=null,yt=null,mt=null,Wt=null,ce=null,Ge=null}}}const f=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},S=new WeakMap,x=[],E=null,A=!1,M=null,y=null,O=null,P=null,w=null,F=null,B=null,L=new Re(0,0,0),q=0,D=!1,C=null,V=null,at=null,ct=null,gt=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,st=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=st>=1):K.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=st>=2);let _t=null,St={};const Gt=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),be=new rn().fromArray(Gt),I=new rn().fromArray(re);function ut(G,bt,wt,Vt){const yt=new Uint8Array(4),mt=o.createTexture();o.bindTexture(G,mt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Wt=0;Wt<wt;Wt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Vt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(bt+Wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return mt}const $={};$[o.TEXTURE_2D]=ut(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),it(o.DEPTH_TEST),h.setFunc(lo),Qt(!1),Lt(Av),it(o.CULL_FACE),He(cs);function it(G){v[G]!==!0&&(o.enable(G),v[G]=!0)}function xt(G){v[G]!==!1&&(o.disable(G),v[G]=!1)}function Nt(G,bt){return g[G]!==bt?(o.bindFramebuffer(G,bt),g[G]=bt,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=bt),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function At(G,bt){let wt=x,Vt=!1;if(G){wt=S.get(bt),wt===void 0&&(wt=[],S.set(bt,wt));const yt=G.textures;if(wt.length!==yt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let mt=0,Wt=yt.length;mt<Wt;mt++)wt[mt]=o.COLOR_ATTACHMENT0+mt;wt.length=yt.length,Vt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Vt=!0);Vt&&o.drawBuffers(wt)}function Mt(G){return E!==G?(o.useProgram(G),E=G,!0):!1}const Yt={[Ws]:o.FUNC_ADD,[uE]:o.FUNC_SUBTRACT,[fE]:o.FUNC_REVERSE_SUBTRACT};Yt[hE]=o.MIN,Yt[dE]=o.MAX;const z={[pE]:o.ZERO,[mE]:o.ONE,[gE]:o.SRC_COLOR,[tp]:o.SRC_ALPHA,[ME]:o.SRC_ALPHA_SATURATE,[yE]:o.DST_COLOR,[vE]:o.DST_ALPHA,[_E]:o.ONE_MINUS_SRC_COLOR,[ep]:o.ONE_MINUS_SRC_ALPHA,[xE]:o.ONE_MINUS_DST_COLOR,[SE]:o.ONE_MINUS_DST_ALPHA,[EE]:o.CONSTANT_COLOR,[TE]:o.ONE_MINUS_CONSTANT_COLOR,[bE]:o.CONSTANT_ALPHA,[AE]:o.ONE_MINUS_CONSTANT_ALPHA};function He(G,bt,wt,Vt,yt,mt,Wt,ce,Ge,Me){if(G===cs){A===!0&&(xt(o.BLEND),A=!1);return}if(A===!1&&(it(o.BLEND),A=!0),G!==cE){if(G!==M||Me!==D){if((y!==Ws||w!==Ws)&&(o.blendEquation(o.FUNC_ADD),y=Ws,w=Ws),Me)switch(G){case ro:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rv:o.blendFunc(o.ONE,o.ONE);break;case Cv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case wv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ro:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Cv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}O=null,P=null,F=null,B=null,L.set(0,0,0),q=0,M=G,D=Me}return}yt=yt||bt,mt=mt||wt,Wt=Wt||Vt,(bt!==y||yt!==w)&&(o.blendEquationSeparate(Yt[bt],Yt[yt]),y=bt,w=yt),(wt!==O||Vt!==P||mt!==F||Wt!==B)&&(o.blendFuncSeparate(z[wt],z[Vt],z[mt],z[Wt]),O=wt,P=Vt,F=mt,B=Wt),(ce.equals(L)===!1||Ge!==q)&&(o.blendColor(ce.r,ce.g,ce.b,Ge),L.copy(ce),q=Ge),M=G,D=!1}function se(G,bt){G.side===Kn?xt(o.CULL_FACE):it(o.CULL_FACE);let wt=G.side===Qn;bt&&(wt=!wt),Qt(wt),G.blending===ro&&G.transparent===!1?He(cs):He(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),f.setMask(G.colorWrite);const Vt=G.stencilWrite;d.setTest(Vt),Vt&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ft(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?it(o.SAMPLE_ALPHA_TO_COVERAGE):xt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(G){C!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),C=G)}function Lt(G){G!==rE?(it(o.CULL_FACE),G!==V&&(G===Av?o.cullFace(o.BACK):G===oE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):xt(o.CULL_FACE),V=G}function ie(G){G!==at&&(j&&o.lineWidth(G),at=G)}function Ft(G,bt,wt){G?(it(o.POLYGON_OFFSET_FILL),(ct!==bt||gt!==wt)&&(o.polygonOffset(bt,wt),ct=bt,gt=wt)):xt(o.POLYGON_OFFSET_FILL)}function oe(G){G?it(o.SCISSOR_TEST):xt(o.SCISSOR_TEST)}function qe(G){G===void 0&&(G=o.TEXTURE0+lt-1),_t!==G&&(o.activeTexture(G),_t=G)}function We(G,bt,wt){wt===void 0&&(_t===null?wt=o.TEXTURE0+lt-1:wt=_t);let Vt=St[wt];Vt===void 0&&(Vt={type:void 0,texture:void 0},St[wt]=Vt),(Vt.type!==G||Vt.texture!==bt)&&(_t!==wt&&(o.activeTexture(wt),_t=wt),o.bindTexture(G,bt||$[G]),Vt.type=G,Vt.texture=bt)}function U(){const G=St[_t];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Kt(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ot(G){be.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),be.copy(G))}function ne(G){I.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),I.copy(G))}function Zt(G,bt){let wt=p.get(bt);wt===void 0&&(wt=new WeakMap,p.set(bt,wt));let Vt=wt.get(G);Vt===void 0&&(Vt=o.getUniformBlockIndex(bt,G.name),wt.set(G,Vt))}function Pt(G,bt){const Vt=p.get(bt).get(G);m.get(bt)!==Vt&&(o.uniformBlockBinding(bt,Vt,G.__bindingPointIndex),m.set(bt,Vt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},_t=null,St={},g={},S=new WeakMap,x=[],E=null,A=!1,M=null,y=null,O=null,P=null,w=null,F=null,B=null,L=new Re(0,0,0),q=0,D=!1,C=null,V=null,at=null,ct=null,gt=null,be.set(0,0,o.canvas.width,o.canvas.height),I.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:it,disable:xt,bindFramebuffer:Nt,drawBuffers:At,useProgram:Mt,setBlending:He,setMaterial:se,setFlipSided:Qt,setCullFace:Lt,setLineWidth:ie,setPolygonOffset:Ft,setScissorTest:oe,activeTexture:qe,bindTexture:We,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:Kt,texImage3D:Tt,updateUBOMapping:Zt,uniformBlockBinding:Pt,texStorage2D:Rt,texStorage3D:jt,texSubImage2D:dt,texSubImage3D:vt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Xt,scissor:Ot,viewport:ne,reset:fe}}function cC(o,e,i,r,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ue,v=new WeakMap;let g;const S=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,b){return x?new OffscreenCanvas(U,b):Lu("canvas")}function A(U,b,et){let dt=1;const vt=We(U);if((vt.width>et||vt.height>et)&&(dt=et/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ft=Math.floor(dt*vt.width),Xt=Math.floor(dt*vt.height);g===void 0&&(g=E(ft,Xt));const Rt=b?E(ft,Xt):g;return Rt.width=ft,Rt.height=Xt,Rt.getContext("2d").drawImage(U,0,0,ft,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Xt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function M(U){return U.generateMipmaps}function y(U){o.generateMipmap(U)}function O(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(U,b,et,dt,vt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ft=b;if(b===o.RED&&(et===o.FLOAT&&(ft=o.R32F),et===o.HALF_FLOAT&&(ft=o.R16F),et===o.UNSIGNED_BYTE&&(ft=o.R8)),b===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.R8UI),et===o.UNSIGNED_SHORT&&(ft=o.R16UI),et===o.UNSIGNED_INT&&(ft=o.R32UI),et===o.BYTE&&(ft=o.R8I),et===o.SHORT&&(ft=o.R16I),et===o.INT&&(ft=o.R32I)),b===o.RG&&(et===o.FLOAT&&(ft=o.RG32F),et===o.HALF_FLOAT&&(ft=o.RG16F),et===o.UNSIGNED_BYTE&&(ft=o.RG8)),b===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RG8UI),et===o.UNSIGNED_SHORT&&(ft=o.RG16UI),et===o.UNSIGNED_INT&&(ft=o.RG32UI),et===o.BYTE&&(ft=o.RG8I),et===o.SHORT&&(ft=o.RG16I),et===o.INT&&(ft=o.RG32I)),b===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),et===o.UNSIGNED_INT&&(ft=o.RGB32UI),et===o.BYTE&&(ft=o.RGB8I),et===o.SHORT&&(ft=o.RGB16I),et===o.INT&&(ft=o.RGB32I)),b===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),et===o.UNSIGNED_INT&&(ft=o.RGBA32UI),et===o.BYTE&&(ft=o.RGBA8I),et===o.SHORT&&(ft=o.RGBA16I),et===o.INT&&(ft=o.RGBA32I)),b===o.RGB&&(et===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),b===o.RGBA){const Xt=vt?Uu:Ue.getTransfer(dt);et===o.FLOAT&&(ft=o.RGBA32F),et===o.HALF_FLOAT&&(ft=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ft=Xt===Xe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function w(U,b){let et;return U?b===null||b===Qs||b===_l?et=o.DEPTH24_STENCIL8:b===ba?et=o.DEPTH32F_STENCIL8:b===gl&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qs||b===_l?et=o.DEPTH_COMPONENT24:b===ba?et=o.DEPTH_COMPONENT32F:b===gl&&(et=o.DEPTH_COMPONENT16),et}function F(U,b){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==zi&&U.minFilter!==Ki?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function B(U){const b=U.target;b.removeEventListener("dispose",B),q(b),b.isVideoTexture&&v.delete(b)}function L(U){const b=U.target;b.removeEventListener("dispose",L),C(b)}function q(U){const b=r.get(U);if(b.__webglInit===void 0)return;const et=U.source,dt=S.get(et);if(dt){const vt=dt[b.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&D(U),Object.keys(dt).length===0&&S.delete(et)}r.remove(U)}function D(U){const b=r.get(U);o.deleteTexture(b.__webglTexture);const et=U.source,dt=S.get(et);delete dt[b.__cacheKey],h.memory.textures--}function C(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let vt=0;vt<b.__webglFramebuffer[dt].length;vt++)o.deleteFramebuffer(b.__webglFramebuffer[dt][vt]);else o.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)o.deleteFramebuffer(b.__webglFramebuffer[dt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=U.textures;for(let dt=0,vt=et.length;dt<vt;dt++){const ft=r.get(et[dt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(et[dt])}r.remove(U)}let V=0;function at(){V=0}function ct(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function gt(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function lt(U,b){const et=r.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&et.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(et,U,b);return}}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+b)}function j(U,b){const et=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){$(et,U,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+b)}function st(U,b){const et=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){$(et,U,b);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+b)}function K(U,b){const et=r.get(U);if(U.version>0&&et.__version!==U.version){it(et,U,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+b)}const _t={[fp]:o.REPEAT,[Zs]:o.CLAMP_TO_EDGE,[hp]:o.MIRRORED_REPEAT},St={[zi]:o.NEAREST,[zE]:o.NEAREST_MIPMAP_NEAREST,[Jc]:o.NEAREST_MIPMAP_LINEAR,[Ki]:o.LINEAR,[_d]:o.LINEAR_MIPMAP_NEAREST,[Ks]:o.LINEAR_MIPMAP_LINEAR},Gt={[HE]:o.NEVER,[YE]:o.ALWAYS,[GE]:o.LESS,[kS]:o.LEQUAL,[VE]:o.EQUAL,[qE]:o.GEQUAL,[XE]:o.GREATER,[kE]:o.NOTEQUAL};function re(U,b){if(b.type===ba&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ki||b.magFilter===_d||b.magFilter===Jc||b.magFilter===Ks||b.minFilter===Ki||b.minFilter===_d||b.minFilter===Jc||b.minFilter===Ks)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,_t[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,_t[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,_t[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[b.minFilter]),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Gt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===zi||b.minFilter!==Jc&&b.minFilter!==Ks||b.type===ba&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function be(U,b){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",B));const dt=b.source;let vt=S.get(dt);vt===void 0&&(vt={},S.set(dt,vt));const ft=gt(b);if(ft!==U.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),vt[ft].usedTimes++;const Xt=vt[U.__cacheKey];Xt!==void 0&&(vt[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(b)),U.__cacheKey=ft,U.__webglTexture=vt[ft].texture}return et}function I(U,b,et){return Math.floor(Math.floor(U/et)/b)}function ut(U,b,et,dt){const ft=U.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,et,dt,b.data);else{ft.sort((Tt,Ot)=>Tt.start-Ot.start);let Xt=0;for(let Tt=1;Tt<ft.length;Tt++){const Ot=ft[Xt],ne=ft[Tt],Zt=Ot.start+Ot.count,Pt=I(ne.start,b.width,4),fe=I(Ot.start,b.width,4);ne.start<=Zt+1&&Pt===fe&&I(ne.start+ne.count-1,b.width,4)===Pt?Ot.count=Math.max(Ot.count,ne.start+ne.count-Ot.start):(++Xt,ft[Xt]=ne)}ft.length=Xt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Tt=0,Ot=ft.length;Tt<Ot;Tt++){const ne=ft[Tt],Zt=Math.floor(ne.start/4),Pt=Math.ceil(ne.count/4),fe=Zt%b.width,G=Math.floor(Zt/b.width),bt=Pt,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,fe,G,bt,wt,et,dt,b.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function $(U,b,et){let dt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=o.TEXTURE_3D);const vt=be(U,b),ft=b.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+et);const Xt=r.get(ft);if(ft.version!==Xt.__version||vt===!0){i.activeTexture(o.TEXTURE0+et);const Rt=Ue.getPrimaries(Ue.workingColorSpace),jt=b.colorSpace===ls?null:Ue.getPrimaries(b.colorSpace),Kt=b.colorSpace===ls||Rt===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let Tt=A(b.image,!1,l.maxTextureSize);Tt=qe(b,Tt);const Ot=f.convert(b.format,b.colorSpace),ne=f.convert(b.type);let Zt=P(b.internalFormat,Ot,ne,b.colorSpace,b.isVideoTexture);re(dt,b);let Pt;const fe=b.mipmaps,G=b.isVideoTexture!==!0,bt=Xt.__version===void 0||vt===!0,wt=ft.dataReady,Vt=F(b,Tt);if(b.isDepthTexture)Zt=w(b.format===Sl,b.type),bt&&(G?i.texStorage2D(o.TEXTURE_2D,1,Zt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,Zt,Tt.width,Tt.height,0,Ot,ne,null));else if(b.isDataTexture)if(fe.length>0){G&&bt&&i.texStorage2D(o.TEXTURE_2D,Vt,Zt,fe[0].width,fe[0].height);for(let yt=0,mt=fe.length;yt<mt;yt++)Pt=fe[yt],G?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,Ot,ne,Pt.data):i.texImage2D(o.TEXTURE_2D,yt,Zt,Pt.width,Pt.height,0,Ot,ne,Pt.data);b.generateMipmaps=!1}else G?(bt&&i.texStorage2D(o.TEXTURE_2D,Vt,Zt,Tt.width,Tt.height),wt&&ut(b,Tt,Ot,ne)):i.texImage2D(o.TEXTURE_2D,0,Zt,Tt.width,Tt.height,0,Ot,ne,Tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Zt,fe[0].width,fe[0].height,Tt.depth);for(let yt=0,mt=fe.length;yt<mt;yt++)if(Pt=fe[yt],b.format!==Pi)if(Ot!==null)if(G){if(wt)if(b.layerUpdates.size>0){const Wt=eS(Pt.width,Pt.height,b.format,b.type);for(const ce of b.layerUpdates){const Ge=Pt.data.subarray(ce*Wt/Pt.data.BYTES_PER_ELEMENT,(ce+1)*Wt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ce,Pt.width,Pt.height,1,Ot,Ge)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Pt.width,Pt.height,Tt.depth,Ot,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Zt,Pt.width,Pt.height,Tt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Pt.width,Pt.height,Tt.depth,Ot,ne,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Zt,Pt.width,Pt.height,Tt.depth,0,Ot,ne,Pt.data)}else{G&&bt&&i.texStorage2D(o.TEXTURE_2D,Vt,Zt,fe[0].width,fe[0].height);for(let yt=0,mt=fe.length;yt<mt;yt++)Pt=fe[yt],b.format!==Pi?Ot!==null?G?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,Ot,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Zt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,Ot,ne,Pt.data):i.texImage2D(o.TEXTURE_2D,yt,Zt,Pt.width,Pt.height,0,Ot,ne,Pt.data)}else if(b.isDataArrayTexture)if(G){if(bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Zt,Tt.width,Tt.height,Tt.depth),wt)if(b.layerUpdates.size>0){const yt=eS(Tt.width,Tt.height,b.format,b.type);for(const mt of b.layerUpdates){const Wt=Tt.data.subarray(mt*yt/Tt.data.BYTES_PER_ELEMENT,(mt+1)*yt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,Tt.width,Tt.height,1,Ot,ne,Wt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ot,ne,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,Tt.width,Tt.height,Tt.depth,0,Ot,ne,Tt.data);else if(b.isData3DTexture)G?(bt&&i.texStorage3D(o.TEXTURE_3D,Vt,Zt,Tt.width,Tt.height,Tt.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ot,ne,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,Zt,Tt.width,Tt.height,Tt.depth,0,Ot,ne,Tt.data);else if(b.isFramebufferTexture){if(bt)if(G)i.texStorage2D(o.TEXTURE_2D,Vt,Zt,Tt.width,Tt.height);else{let yt=Tt.width,mt=Tt.height;for(let Wt=0;Wt<Vt;Wt++)i.texImage2D(o.TEXTURE_2D,Wt,Zt,yt,mt,0,Ot,ne,null),yt>>=1,mt>>=1}}else if(fe.length>0){if(G&&bt){const yt=We(fe[0]);i.texStorage2D(o.TEXTURE_2D,Vt,Zt,yt.width,yt.height)}for(let yt=0,mt=fe.length;yt<mt;yt++)Pt=fe[yt],G?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ot,ne,Pt):i.texImage2D(o.TEXTURE_2D,yt,Zt,Ot,ne,Pt);b.generateMipmaps=!1}else if(G){if(bt){const yt=We(Tt);i.texStorage2D(o.TEXTURE_2D,Vt,Zt,yt.width,yt.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ne,Tt)}else i.texImage2D(o.TEXTURE_2D,0,Zt,Ot,ne,Tt);M(b)&&y(dt),Xt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function it(U,b,et){if(b.image.length!==6)return;const dt=be(U,b),vt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const ft=r.get(vt);if(vt.version!==ft.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Xt=Ue.getPrimaries(Ue.workingColorSpace),Rt=b.colorSpace===ls?null:Ue.getPrimaries(b.colorSpace),jt=b.colorSpace===ls||Xt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,Tt=b.image[0]&&b.image[0].isDataTexture,Ot=[];for(let mt=0;mt<6;mt++)!Kt&&!Tt?Ot[mt]=A(b.image[mt],!0,l.maxCubemapSize):Ot[mt]=Tt?b.image[mt].image:b.image[mt],Ot[mt]=qe(b,Ot[mt]);const ne=Ot[0],Zt=f.convert(b.format,b.colorSpace),Pt=f.convert(b.type),fe=P(b.internalFormat,Zt,Pt,b.colorSpace),G=b.isVideoTexture!==!0,bt=ft.__version===void 0||dt===!0,wt=vt.dataReady;let Vt=F(b,ne);re(o.TEXTURE_CUBE_MAP,b);let yt;if(Kt){G&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,fe,ne.width,ne.height);for(let mt=0;mt<6;mt++){yt=Ot[mt].mipmaps;for(let Wt=0;Wt<yt.length;Wt++){const ce=yt[Wt];b.format!==Pi?Zt!==null?G?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,0,0,ce.width,ce.height,Zt,ce.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,0,0,ce.width,ce.height,Zt,Pt,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,fe,ce.width,ce.height,0,Zt,Pt,ce.data)}}}else{if(yt=b.mipmaps,G&&bt){yt.length>0&&Vt++;const mt=We(Ot[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,fe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Tt){G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ot[mt].width,Ot[mt].height,Zt,Pt,Ot[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,fe,Ot[mt].width,Ot[mt].height,0,Zt,Pt,Ot[mt].data);for(let Wt=0;Wt<yt.length;Wt++){const Ge=yt[Wt].image[mt].image;G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,0,0,Ge.width,Ge.height,Zt,Pt,Ge.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,fe,Ge.width,Ge.height,0,Zt,Pt,Ge.data)}}else{G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Zt,Pt,Ot[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,fe,Zt,Pt,Ot[mt]);for(let Wt=0;Wt<yt.length;Wt++){const ce=yt[Wt];G?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,0,0,Zt,Pt,ce.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,fe,Zt,Pt,ce.image[mt])}}}M(b)&&y(o.TEXTURE_CUBE_MAP),ft.__version=vt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function xt(U,b,et,dt,vt,ft){const Xt=f.convert(et.format,et.colorSpace),Rt=f.convert(et.type),jt=P(et.internalFormat,Xt,Rt,et.colorSpace),Kt=r.get(b),Tt=r.get(et);if(Tt.__renderTarget=b,!Kt.__hasExternalTextures){const Ot=Math.max(1,b.width>>ft),ne=Math.max(1,b.height>>ft);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ft,jt,Ot,ne,b.depth,0,Xt,Rt,null):i.texImage2D(vt,ft,jt,Ot,ne,0,Xt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,vt,Tt.__webglTexture,0,ie(b)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,vt,Tt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(U,b,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer){const dt=b.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,ft=w(b.stencilBuffer,vt),Xt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=ie(b);Ft(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ft,b.width,b.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ft,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ft,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,U)}else{const dt=b.textures;for(let vt=0;vt<dt.length;vt++){const ft=dt[vt],Xt=f.convert(ft.format,ft.colorSpace),Rt=f.convert(ft.type),jt=P(ft.internalFormat,Xt,Rt,ft.colorSpace),Kt=ie(b);et&&Ft(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,jt,b.width,b.height):Ft(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,jt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,jt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),lt(b.depthTexture,0);const vt=dt.__webglTexture,ft=ie(b);if(b.depthTexture.format===vl)Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(b.depthTexture.format===Sl)Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Mt(U){const b=r.get(U),et=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const vt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",vt)};dt.addEventListener("dispose",vt),b.__depthDisposeCallback=vt}b.__boundDepthTexture=dt}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const dt=U.texture.mipmaps;dt&&dt.length>0?At(b.__webglFramebuffer[0],U):At(b.__webglFramebuffer,U)}else if(et){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=o.createRenderbuffer(),Nt(b.__webglDepthbuffer[dt],U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ft)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Nt(b.__webglDepthbuffer,U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(U,b,et){const dt=r.get(U);b!==void 0&&xt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Mt(U)}function z(U){const b=U.texture,et=r.get(U),dt=r.get(b);U.addEventListener("dispose",L);const vt=U.textures,ft=U.isWebGLCubeRenderTarget===!0,Xt=vt.length>1;if(Xt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=b.version,h.memory.textures++),ft){et.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Rt]=[];for(let jt=0;jt<b.mipmaps.length;jt++)et.__webglFramebuffer[Rt][jt]=o.createFramebuffer()}else et.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)et.__webglFramebuffer[Rt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Rt=0,jt=vt.length;Rt<jt;Rt++){const Kt=r.get(vt[Rt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ft(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const jt=vt[Rt];et.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt]);const Kt=f.convert(jt.format,jt.colorSpace),Tt=f.convert(jt.type),Ot=P(jt.internalFormat,Kt,Tt,jt.colorSpace,U.isXRRenderTarget===!0),ne=ie(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Ot,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),re(o.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let jt=0;jt<b.mipmaps.length;jt++)xt(et.__webglFramebuffer[Rt][jt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,jt);else xt(et.__webglFramebuffer[Rt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(b)&&y(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Rt=0,jt=vt.length;Rt<jt;Rt++){const Kt=vt[Rt],Tt=r.get(Kt);let Ot=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ot,Tt.__webglTexture),re(Ot,Kt),xt(et.__webglFramebuffer,U,Kt,o.COLOR_ATTACHMENT0+Rt,Ot,0),M(Kt)&&y(Ot)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),re(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let jt=0;jt<b.mipmaps.length;jt++)xt(et.__webglFramebuffer[jt],U,b,o.COLOR_ATTACHMENT0,Rt,jt);else xt(et.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,Rt,0);M(b)&&y(Rt),i.unbindTexture()}U.depthBuffer&&Mt(U)}function He(U){const b=U.textures;for(let et=0,dt=b.length;et<dt;et++){const vt=b[et];if(M(vt)){const ft=O(U),Xt=r.get(vt).__webglTexture;i.bindTexture(ft,Xt),y(ft),i.unbindTexture()}}}const se=[],Qt=[];function Lt(U){if(U.samples>0){if(Ft(U)===!1){const b=U.textures,et=U.width,dt=U.height;let vt=o.COLOR_BUFFER_BIT;const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=r.get(U),Rt=b.length>1;if(Rt)for(let Kt=0;Kt<b.length;Kt++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const jt=U.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Kt=0;Kt<b.length;Kt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Kt]);const Tt=r.get(b[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,et,dt,0,0,et,dt,vt,o.NEAREST),m===!0&&(se.length=0,Qt.length=0,se.push(o.COLOR_ATTACHMENT0+Kt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(se.push(ft),Qt.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Kt=0;Kt<b.length;Kt++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Kt]);const Tt=r.get(b[Kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,Tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const b=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ie(U){return Math.min(l.maxSamples,U.samples)}function Ft(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function oe(U){const b=h.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function qe(U,b){const et=U.colorSpace,dt=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==fo&&et!==ls&&(Ue.getTransfer(et)===Xe?(dt!==Pi||vt!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ct,this.resetTextureUnits=at,this.setTexture2D=lt,this.setTexture2DArray=j,this.setTexture3D=st,this.setTextureCube=K,this.rebindTextures=Yt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ft}function uC(o,e){function i(r,l=ls){let f;const h=Ue.getTransfer(l);if(r===$i)return o.UNSIGNED_BYTE;if(r===Qp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Jp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===IS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===BS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===PS)return o.BYTE;if(r===zS)return o.SHORT;if(r===gl)return o.UNSIGNED_SHORT;if(r===Kp)return o.INT;if(r===Qs)return o.UNSIGNED_INT;if(r===ba)return o.FLOAT;if(r===Ml)return o.HALF_FLOAT;if(r===FS)return o.ALPHA;if(r===HS)return o.RGB;if(r===Pi)return o.RGBA;if(r===vl)return o.DEPTH_COMPONENT;if(r===Sl)return o.DEPTH_STENCIL;if(r===GS)return o.RED;if(r===$p)return o.RED_INTEGER;if(r===VS)return o.RG;if(r===tm)return o.RG_INTEGER;if(r===em)return o.RGBA_INTEGER;if(r===bu||r===Au||r===Ru||r===Cu)if(h===Xe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===bu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Au)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ru)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===bu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Au)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ru)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dp||r===pp||r===mp||r===gp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===dp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_p||r===vp||r===Sp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===_p||r===vp)return h===Xe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===Sp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yp||r===xp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap||r===Rp||r===Cp||r===wp||r===Dp||r===Up||r===Np||r===Lp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===yp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ep)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Tp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ap)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Dp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Up)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Np)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Op||r===Pp||r===zp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Op)return h===Xe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ip||r===Bp||r===Fp||r===Hp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Ip)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Bp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_l?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const fC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hC=`
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

}`;class dC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new ey(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new hs({vertexShader:fC,fragmentShader:hC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ui(new Pu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pC extends nr{constructor(e,i){super();const r=this;let l=null,f=1,h=null,d="local-floor",m=1,p=null,v=null,g=null,S=null,x=null,E=null;const A=typeof XRWebGLBinding<"u",M=new dC,y={},O=i.getContextAttributes();let P=null,w=null;const F=[],B=[],L=new ue;let q=null;const D=new Ei;D.viewport=new rn;const C=new Ei;C.viewport=new rn;const V=[D,C],at=new LT;let ct=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=F[$];return it===void 0&&(it=new Fd,F[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=F[$];return it===void 0&&(it=new Fd,F[$]=it),it.getGripSpace()},this.getHand=function($){let it=F[$];return it===void 0&&(it=new Fd,F[$]=it),it.getHandSpace()};function lt($){const it=B.indexOf($.inputSource);if(it===-1)return;const xt=F[it];xt!==void 0&&(xt.update($.inputSource,$.frame,p||h),xt.dispatchEvent({type:$.type,data:$.inputSource}))}function j(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",j),l.removeEventListener("inputsourceschange",st);for(let $=0;$<F.length;$++){const it=B[$];it!==null&&(B[$]=null,F[$].disconnect(it))}ct=null,gt=null,M.reset();for(const $ in y)delete y[$];e.setRenderTarget(P),x=null,S=null,g=null,l=null,w=null,ut.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){f=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return S!==null?S:x},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",j),l.addEventListener("inputsourceschange",st),O.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(L),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Nt=null,At=null;O.depth&&(At=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=O.stencil?Sl:vl,Nt=O.stencil?_l:Qs);const Mt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:f};g=this.getBinding(),S=g.createProjectionLayer(Mt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),w=new $s(S.textureWidth,S.textureHeight,{format:Pi,type:$i,depthTexture:new ty(S.textureWidth,S.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const xt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:f};x=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new $s(x.framebufferWidth,x.framebufferHeight,{format:Pi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),ut.setContext(l),ut.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function st($){for(let it=0;it<$.removed.length;it++){const xt=$.removed[it],Nt=B.indexOf(xt);Nt>=0&&(B[Nt]=null,F[Nt].disconnect(xt))}for(let it=0;it<$.added.length;it++){const xt=$.added[it];let Nt=B.indexOf(xt);if(Nt===-1){for(let Mt=0;Mt<F.length;Mt++)if(Mt>=B.length){B.push(xt),Nt=Mt;break}else if(B[Mt]===null){B[Mt]=xt,Nt=Mt;break}if(Nt===-1)break}const At=F[Nt];At&&At.connect(xt)}}const K=new k,_t=new k;function St($,it,xt){K.setFromMatrixPosition(it.matrixWorld),_t.setFromMatrixPosition(xt.matrixWorld);const Nt=K.distanceTo(_t),At=it.projectionMatrix.elements,Mt=xt.projectionMatrix.elements,Yt=At[14]/(At[10]-1),z=At[14]/(At[10]+1),He=(At[9]+1)/At[5],se=(At[9]-1)/At[5],Qt=(At[8]-1)/At[0],Lt=(Mt[8]+1)/Mt[0],ie=Yt*Qt,Ft=Yt*Lt,oe=Nt/(-Qt+Lt),qe=oe*-Qt;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(qe),$.translateZ(oe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const We=Yt+oe,U=z+oe,b=ie-qe,et=Ft+(Nt-qe),dt=He*z/U*We,vt=se*z/U*We;$.projectionMatrix.makePerspective(b,et,dt,vt,We,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Gt($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let it=$.near,xt=$.far;M.texture!==null&&(M.depthNear>0&&(it=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),at.near=C.near=D.near=it,at.far=C.far=D.far=xt,(ct!==at.near||gt!==at.far)&&(l.updateRenderState({depthNear:at.near,depthFar:at.far}),ct=at.near,gt=at.far),at.layers.mask=$.layers.mask|6,D.layers.mask=at.layers.mask&3,C.layers.mask=at.layers.mask&5;const Nt=$.parent,At=at.cameras;Gt(at,Nt);for(let Mt=0;Mt<At.length;Mt++)Gt(At[Mt],Nt);At.length===2?St(at,D,C):at.projectionMatrix.copy(D.projectionMatrix),re($,at,Nt)};function re($,it,xt){xt===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(xt.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Gp*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(S===null&&x===null))return m},this.setFoveation=function($){m=$,S!==null&&(S.fixedFoveation=$),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(at)},this.getCameraTexture=function($){return y[$]};let be=null;function I($,it){if(v=it.getViewerPose(p||h),E=it,v!==null){const xt=v.views;x!==null&&(e.setRenderTargetFramebuffer(w,x.framebuffer),e.setRenderTarget(w));let Nt=!1;xt.length!==at.cameras.length&&(at.cameras.length=0,Nt=!0);for(let z=0;z<xt.length;z++){const He=xt[z];let se=null;if(x!==null)se=x.getViewport(He);else{const Lt=g.getViewSubImage(S,He);se=Lt.viewport,z===0&&(e.setRenderTargetTextures(w,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(w))}let Qt=V[z];Qt===void 0&&(Qt=new Ei,Qt.layers.enable(z),Qt.viewport=new rn,V[z]=Qt),Qt.matrix.fromArray(He.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(He.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(se.x,se.y,se.width,se.height),z===0&&(at.matrix.copy(Qt.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Nt===!0&&at.cameras.push(Qt)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const z=g.getDepthInformation(xt[0]);z&&z.isValid&&z.texture&&M.init(z,l.renderState)}if(At&&At.includes("camera-access")&&A){e.state.unbindTexture(),g=r.getBinding();for(let z=0;z<xt.length;z++){const He=xt[z].camera;if(He){let se=y[He];se||(se=new ey,y[He]=se);const Qt=g.getCameraImage(He);se.sourceTexture=Qt}}}}for(let xt=0;xt<F.length;xt++){const Nt=B[xt],At=F[xt];Nt!==null&&At!==void 0&&At.update(Nt,it,p||h)}be&&be($,it),it.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:it}),E=null}const ut=new ay;ut.setAnimationLoop(I),this.setAnimationLoop=function($){be=$},this.dispose=function(){}}}const qs=new ta,mC=new en;function gC(o,e){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,QS(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,O,P,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?f(M,y):y.isMeshToonMaterial?(f(M,y),g(M,y)):y.isMeshPhongMaterial?(f(M,y),v(M,y)):y.isMeshStandardMaterial?(f(M,y),S(M,y),y.isMeshPhysicalMaterial&&x(M,y,w)):y.isMeshMatcapMaterial?(f(M,y),E(M,y)):y.isMeshDepthMaterial?f(M,y):y.isMeshDistanceMaterial?(f(M,y),A(M,y)):y.isMeshNormalMaterial?f(M,y):y.isLineBasicMaterial?(h(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?m(M,y,O,P):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function f(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Qn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Qn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const O=e.get(y),P=O.envMap,w=O.envMapRotation;P&&(M.envMap.value=P,qs.copy(w),qs.x*=-1,qs.y*=-1,qs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),M.envMapRotation.value.setFromMatrix4(mC.makeRotationFromEuler(qs)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,O,P){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*O,M.scale.value=P*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function v(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function g(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function S(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,O){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Qn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function A(M,y){const O=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function _C(o,e,i,r){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,P){const w=P.program;r.uniformBlockBinding(O,w)}function p(O,P){let w=l[O.id];w===void 0&&(E(O),w=v(O),l[O.id]=w,O.addEventListener("dispose",M));const F=P.program;r.updateUBOMapping(O,F);const B=e.render.frame;f[O.id]!==B&&(S(O),f[O.id]=B)}function v(O){const P=g();O.__bindingPointIndex=P;const w=o.createBuffer(),F=O.__size,B=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,F,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,w),w}function g(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const P=l[O.id],w=O.uniforms,F=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let B=0,L=w.length;B<L;B++){const q=Array.isArray(w[B])?w[B]:[w[B]];for(let D=0,C=q.length;D<C;D++){const V=q[D];if(x(V,B,D,F)===!0){const at=V.__offset,ct=Array.isArray(V.value)?V.value:[V.value];let gt=0;for(let lt=0;lt<ct.length;lt++){const j=ct[lt],st=A(j);typeof j=="number"||typeof j=="boolean"?(V.__data[0]=j,o.bufferSubData(o.UNIFORM_BUFFER,at+gt,V.__data)):j.isMatrix3?(V.__data[0]=j.elements[0],V.__data[1]=j.elements[1],V.__data[2]=j.elements[2],V.__data[3]=0,V.__data[4]=j.elements[3],V.__data[5]=j.elements[4],V.__data[6]=j.elements[5],V.__data[7]=0,V.__data[8]=j.elements[6],V.__data[9]=j.elements[7],V.__data[10]=j.elements[8],V.__data[11]=0):(j.toArray(V.__data,gt),gt+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(O,P,w,F){const B=O.value,L=P+"_"+w;if(F[L]===void 0)return typeof B=="number"||typeof B=="boolean"?F[L]=B:F[L]=B.clone(),!0;{const q=F[L];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return F[L]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function E(O){const P=O.uniforms;let w=0;const F=16;for(let L=0,q=P.length;L<q;L++){const D=Array.isArray(P[L])?P[L]:[P[L]];for(let C=0,V=D.length;C<V;C++){const at=D[C],ct=Array.isArray(at.value)?at.value:[at.value];for(let gt=0,lt=ct.length;gt<lt;gt++){const j=ct[gt],st=A(j),K=w%F,_t=K%st.boundary,St=K+_t;w+=_t,St!==0&&F-St<st.storage&&(w+=F-St),at.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=w,w+=st.storage}}}const B=w%F;return B>0&&(w+=F-B),O.__size=w,O.__cache={},this}function A(O){const P={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(P.boundary=4,P.storage=4):O.isVector2?(P.boundary=8,P.storage=8):O.isVector3||O.isColor?(P.boundary=16,P.storage=12):O.isVector4?(P.boundary=16,P.storage=16):O.isMatrix3?(P.boundary=48,P.storage=48):O.isMatrix4?(P.boundary=64,P.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),P}function M(O){const P=O.target;P.removeEventListener("dispose",M);const w=h.indexOf(P.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete f[P.id]}function y(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},f={}}return{bind:m,update:p,dispose:y}}class vC{constructor(e={}){const{canvas:i=ZE(),context:r=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=h;const E=new Uint32Array(4),A=new Int32Array(4);let M=null,y=null;const O=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=Mi;let B=0,L=0,q=null,D=-1,C=null;const V=new rn,at=new rn;let ct=null;const gt=new Re(0);let lt=0,j=i.width,st=i.height,K=1,_t=null,St=null;const Gt=new rn(0,0,j,st),re=new rn(0,0,j,st);let be=!1;const I=new rm;let ut=!1,$=!1;const it=new en,xt=new k,Nt=new rn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Yt(){return q===null?K:1}let z=r;function He(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zp}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Vt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),z===null){const Z="webgl2";if(z=He(Z,R),z===null)throw He(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,Qt,Lt,ie,Ft,oe,qe,We,U,b,et,dt,vt,ft,Xt,Rt,jt,Kt,Tt,Ot,ne,Zt,Pt,fe;function G(){se=new CA(z),se.init(),Zt=new uC(z,se),Qt=new xA(z,se,e,Zt),Lt=new lC(z,se),Qt.reversedDepthBuffer&&S&&Lt.buffers.depth.setReversed(!0),ie=new UA(z),Ft=new ZR,oe=new cC(z,se,Lt,Ft,Qt,Zt,ie),qe=new EA(w),We=new RA(w),U=new IT(z),Pt=new SA(z,U),b=new wA(z,U,ie,Pt),et=new LA(z,b,U,ie),Tt=new NA(z,Qt,oe),Rt=new MA(Ft),dt=new jR(w,qe,We,se,Qt,Pt,Rt),vt=new gC(w,Ft),ft=new QR,Xt=new iC(se),Kt=new vA(w,qe,We,Lt,et,x,m),jt=new rC(w,et,Qt),fe=new _C(z,ie,Qt,Lt),Ot=new yA(z,se,ie),ne=new DA(z,se,ie),ie.programs=dt.programs,w.capabilities=Qt,w.extensions=se,w.properties=Ft,w.renderLists=ft,w.shadowMap=jt,w.state=Lt,w.info=ie}G();const bt=new pC(w,z);this.xr=bt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(j,st,!1))},this.getSize=function(R){return R.set(j,st)},this.setSize=function(R,Z,rt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=R,st=Z,i.width=Math.floor(R*K),i.height=Math.floor(Z*K),rt===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(j*K,st*K).floor()},this.setDrawingBufferSize=function(R,Z,rt){j=R,st=Z,K=rt,i.width=Math.floor(R*rt),i.height=Math.floor(Z*rt),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(Gt)},this.setViewport=function(R,Z,rt,ot){R.isVector4?Gt.set(R.x,R.y,R.z,R.w):Gt.set(R,Z,rt,ot),Lt.viewport(V.copy(Gt).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,Z,rt,ot){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,Z,rt,ot),Lt.scissor(at.copy(re).multiplyScalar(K).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){Lt.setScissorTest(be=R)},this.setOpaqueSort=function(R){_t=R},this.setTransparentSort=function(R){St=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,rt=!0){let ot=0;if(R){let Q=!1;if(q!==null){const Et=q.texture.format;Q=Et===em||Et===tm||Et===$p}if(Q){const Et=q.texture.type,zt=Et===$i||Et===Qs||Et===gl||Et===_l||Et===Qp||Et===Jp,Bt=Kt.getClearColor(),Ct=Kt.getClearAlpha(),kt=Bt.r,ee=Bt.g,$t=Bt.b;zt?(E[0]=kt,E[1]=ee,E[2]=$t,E[3]=Ct,z.clearBufferuiv(z.COLOR,0,E)):(A[0]=kt,A[1]=ee,A[2]=$t,A[3]=Ct,z.clearBufferiv(z.COLOR,0,A))}else ot|=z.COLOR_BUFFER_BIT}Z&&(ot|=z.DEPTH_BUFFER_BIT),rt&&(ot|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Vt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),Kt.dispose(),ft.dispose(),Xt.dispose(),Ft.dispose(),qe.dispose(),We.dispose(),et.dispose(),Pt.dispose(),fe.dispose(),dt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",pn),bt.removeEventListener("sessionend",Un),na.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=ie.autoReset,Z=jt.enabled,rt=jt.autoUpdate,ot=jt.needsUpdate,Q=jt.type;G(),ie.autoReset=R,jt.enabled=Z,jt.autoUpdate=rt,jt.needsUpdate=ot,jt.type=Q}function yt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function mt(R){const Z=R.target;Z.removeEventListener("dispose",mt),Wt(Z)}function Wt(R){ce(R),Ft.remove(R)}function ce(R){const Z=Ft.get(R).programs;Z!==void 0&&(Z.forEach(function(rt){dt.releaseProgram(rt)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,rt,ot,Q,Et){Z===null&&(Z=At);const zt=Q.isMesh&&Q.matrixWorld.determinant()<0,Bt=Dl(R,Z,rt,ot,Q);Lt.setMaterial(ot,zt);let Ct=rt.index,kt=1;if(ot.wireframe===!0){if(Ct=b.getWireframeAttribute(rt),Ct===void 0)return;kt=2}const ee=rt.drawRange,$t=rt.attributes.position;let Se=ee.start*kt,Pe=(ee.start+ee.count)*kt;Et!==null&&(Se=Math.max(Se,Et.start*kt),Pe=Math.min(Pe,(Et.start+Et.count)*kt)),Ct!==null?(Se=Math.max(Se,0),Pe=Math.min(Pe,Ct.count)):$t!=null&&(Se=Math.max(Se,0),Pe=Math.min(Pe,$t.count));const Qe=Pe-Se;if(Qe<0||Qe===1/0)return;Pt.setup(Q,ot,Bt,rt,Ct);let Ne,Ce=Ot;if(Ct!==null&&(Ne=U.get(Ct),Ce=ne,Ce.setIndex(Ne)),Q.isMesh)ot.wireframe===!0?(Lt.setLineWidth(ot.wireframeLinewidth*Yt()),Ce.setMode(z.LINES)):Ce.setMode(z.TRIANGLES);else if(Q.isLine){let te=ot.linewidth;te===void 0&&(te=1),Lt.setLineWidth(te*Yt()),Q.isLineSegments?Ce.setMode(z.LINES):Q.isLineLoop?Ce.setMode(z.LINE_LOOP):Ce.setMode(z.LINE_STRIP)}else Q.isPoints?Ce.setMode(z.POINTS):Q.isSprite&&Ce.setMode(z.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)yl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const te=Q._multiDrawStarts,Le=Q._multiDrawCounts,ge=Q._multiDrawCount,mn=Ct?U.get(Ct).bytesPerElement:1,$n=Ft.get(ot).currentProgram.getUniforms();for(let we=0;we<ge;we++)$n.setValue(z,"_gl_DrawID",we),Ce.render(te[we]/mn,Le[we])}else if(Q.isInstancedMesh)Ce.renderInstances(Se,Qe,Q.count);else if(rt.isInstancedBufferGeometry){const te=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Le=Math.min(rt.instanceCount,te);Ce.renderInstances(Se,Qe,Le)}else Ce.render(Se,Qe)};function Ge(R,Z,rt){R.transparent===!0&&R.side===Kn&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,fi(R,Z,rt),R.side=fs,R.needsUpdate=!0,fi(R,Z,rt),R.side=Kn):fi(R,Z,rt)}this.compile=function(R,Z,rt=null){rt===null&&(rt=R),y=Xt.get(rt),y.init(Z),P.push(y),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),R!==rt&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const ot=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Et=Q.material;if(Et)if(Array.isArray(Et))for(let zt=0;zt<Et.length;zt++){const Bt=Et[zt];Ge(Bt,rt,Q),ot.add(Bt)}else Ge(Et,rt,Q),ot.add(Et)}),y=P.pop(),ot},this.compileAsync=function(R,Z,rt=null){const ot=this.compile(R,Z,rt);return new Promise(Q=>{function Et(){if(ot.forEach(function(zt){Ft.get(zt).currentProgram.isReady()&&ot.delete(zt)}),ot.size===0){Q(R);return}setTimeout(Et,10)}se.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Me=null;function $e(R){Me&&Me(R)}function pn(){na.stop()}function Un(){na.start()}const na=new ay;na.setAnimationLoop($e),typeof self<"u"&&na.setContext(self),this.setAnimationLoop=function(R){Me=R,bt.setAnimationLoop(R),R===null?na.stop():na.start()},bt.addEventListener("sessionstart",pn),bt.addEventListener("sessionend",Un),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(Z),Z=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Z,q),y=Xt.get(R,P.length),y.init(Z),P.push(y),it.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),I.setFromProjectionMatrix(it,Qi,Z.reversedDepth),$=this.localClippingEnabled,ut=Rt.init(this.clippingPlanes,$),M=ft.get(R,O.length),M.init(),O.push(M),bt.enabled===!0&&bt.isPresenting===!0){const Et=w.xr.getDepthSensingMesh();Et!==null&&go(Et,Z,-1/0,w.sortObjects)}go(R,Z,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(_t,St),Mt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Mt&&Kt.addToRenderList(M,R),this.info.render.frame++,ut===!0&&Rt.beginShadows();const rt=y.state.shadowsArray;jt.render(rt,R,Z),ut===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,Q=M.transmissive;if(y.setupLights(),Z.isArrayCamera){const Et=Z.cameras;if(Q.length>0)for(let zt=0,Bt=Et.length;zt<Bt;zt++){const Ct=Et[zt];gs(ot,Q,R,Ct)}Mt&&Kt.render(R);for(let zt=0,Bt=Et.length;zt<Bt;zt++){const Ct=Et[zt];wl(M,R,Ct,Ct.viewport)}}else Q.length>0&&gs(ot,Q,R,Z),Mt&&Kt.render(R),wl(M,R,Z);q!==null&&L===0&&(oe.updateMultisampleRenderTarget(q),oe.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(w,R,Z),Pt.resetDefaultState(),D=-1,C=null,P.pop(),P.length>0?(y=P[P.length-1],ut===!0&&Rt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function go(R,Z,rt,ot){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||I.intersectsSprite(R)){ot&&Nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(it);const zt=et.update(R),Bt=R.material;Bt.visible&&M.push(R,zt,Bt,rt,Nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||I.intersectsObject(R))){const zt=et.update(R),Bt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Nt.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Nt.copy(zt.boundingSphere.center)),Nt.applyMatrix4(R.matrixWorld).applyMatrix4(it)),Array.isArray(Bt)){const Ct=zt.groups;for(let kt=0,ee=Ct.length;kt<ee;kt++){const $t=Ct[kt],Se=Bt[$t.materialIndex];Se&&Se.visible&&M.push(R,zt,Se,rt,Nt.z,$t)}}else Bt.visible&&M.push(R,zt,Bt,rt,Nt.z,null)}}const Et=R.children;for(let zt=0,Bt=Et.length;zt<Bt;zt++)go(Et[zt],Z,rt,ot)}function wl(R,Z,rt,ot){const Q=R.opaque,Et=R.transmissive,zt=R.transparent;y.setupLightsView(rt),ut===!0&&Rt.setGlobalState(w.clippingPlanes,rt),ot&&Lt.viewport(V.copy(ot)),Q.length>0&&ia(Q,Z,rt),Et.length>0&&ia(Et,Z,rt),zt.length>0&&ia(zt,Z,rt),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function gs(R,Z,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ot.id]===void 0&&(y.state.transmissionRenderTarget[ot.id]=new $s(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Ml:$i,minFilter:Ks,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Et=y.state.transmissionRenderTarget[ot.id],zt=ot.viewport||V;Et.setSize(zt.z*w.transmissionResolutionScale,zt.w*w.transmissionResolutionScale);const Bt=w.getRenderTarget(),Ct=w.getActiveCubeFace(),kt=w.getActiveMipmapLevel();w.setRenderTarget(Et),w.getClearColor(gt),lt=w.getClearAlpha(),lt<1&&w.setClearColor(16777215,.5),w.clear(),Mt&&Kt.render(rt);const ee=w.toneMapping;w.toneMapping=us;const $t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),y.setupLightsView(ot),ut===!0&&Rt.setGlobalState(w.clippingPlanes,ot),ia(R,rt,ot),oe.updateMultisampleRenderTarget(Et),oe.updateRenderTargetMipmap(Et),se.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Pe=0,Qe=Z.length;Pe<Qe;Pe++){const Ne=Z[Pe],Ce=Ne.object,te=Ne.geometry,Le=Ne.material,ge=Ne.group;if(Le.side===Kn&&Ce.layers.test(ot.layers)){const mn=Le.side;Le.side=Qn,Le.needsUpdate=!0,_s(Ce,rt,ot,te,Le,ge),Le.side=mn,Le.needsUpdate=!0,Se=!0}}Se===!0&&(oe.updateMultisampleRenderTarget(Et),oe.updateRenderTargetMipmap(Et))}w.setRenderTarget(Bt,Ct,kt),w.setClearColor(gt,lt),$t!==void 0&&(ot.viewport=$t),w.toneMapping=ee}function ia(R,Z,rt){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Et=R.length;Q<Et;Q++){const zt=R[Q],Bt=zt.object,Ct=zt.geometry,kt=zt.group;let ee=zt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),Bt.layers.test(rt.layers)&&_s(Bt,Z,rt,Ct,ee,kt)}}function _s(R,Z,rt,ot,Q,Et){R.onBeforeRender(w,Z,rt,ot,Q,Et),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(w,Z,rt,ot,R,Et),Q.transparent===!0&&Q.side===Kn&&Q.forceSinglePass===!1?(Q.side=Qn,Q.needsUpdate=!0,w.renderBufferDirect(rt,Z,ot,Q,R,Et),Q.side=fs,Q.needsUpdate=!0,w.renderBufferDirect(rt,Z,ot,Q,R,Et),Q.side=Kn):w.renderBufferDirect(rt,Z,ot,Q,R,Et),R.onAfterRender(w,Z,rt,ot,Q,Et)}function fi(R,Z,rt){Z.isScene!==!0&&(Z=At);const ot=Ft.get(R),Q=y.state.lights,Et=y.state.shadowsArray,zt=Q.state.version,Bt=dt.getParameters(R,Q.state,Et,Z,rt),Ct=dt.getProgramCacheKey(Bt);let kt=ot.programs;ot.environment=R.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(R.isMeshStandardMaterial?We:qe).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,kt===void 0&&(R.addEventListener("dispose",mt),kt=new Map,ot.programs=kt);let ee=kt.get(Ct);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===zt)return Ra(R,Bt),ee}else Bt.uniforms=dt.getUniforms(R),R.onBeforeCompile(Bt,w),ee=dt.acquireProgram(Bt,Ct),kt.set(Ct,ee),ot.uniforms=Bt.uniforms;const $t=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=Rt.uniform),Ra(R,Bt),ot.needsLights=Ul(R),ot.lightsStateVersion=zt,ot.needsLights&&($t.ambientLightColor.value=Q.state.ambient,$t.lightProbe.value=Q.state.probe,$t.directionalLights.value=Q.state.directional,$t.directionalLightShadows.value=Q.state.directionalShadow,$t.spotLights.value=Q.state.spot,$t.spotLightShadows.value=Q.state.spotShadow,$t.rectAreaLights.value=Q.state.rectArea,$t.ltc_1.value=Q.state.rectAreaLTC1,$t.ltc_2.value=Q.state.rectAreaLTC2,$t.pointLights.value=Q.state.point,$t.pointLightShadows.value=Q.state.pointShadow,$t.hemisphereLights.value=Q.state.hemi,$t.directionalShadowMap.value=Q.state.directionalShadowMap,$t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$t.spotShadowMap.value=Q.state.spotShadowMap,$t.spotLightMatrix.value=Q.state.spotLightMatrix,$t.spotLightMap.value=Q.state.spotLightMap,$t.pointShadowMap.value=Q.state.pointShadowMap,$t.pointShadowMatrix.value=Q.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function vs(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Du.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Ra(R,Z){const rt=Ft.get(R);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function Dl(R,Z,rt,ot,Q){Z.isScene!==!0&&(Z=At),oe.resetTextureUnits();const Et=Z.fog,zt=ot.isMeshStandardMaterial?Z.environment:null,Bt=q===null?w.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:fo,Ct=(ot.isMeshStandardMaterial?We:qe).get(ot.envMap||zt),kt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),$t=!!rt.morphAttributes.position,Se=!!rt.morphAttributes.normal,Pe=!!rt.morphAttributes.color;let Qe=us;ot.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Qe=w.toneMapping);const Ne=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ce=Ne!==void 0?Ne.length:0,te=Ft.get(ot),Le=y.state.lights;if(ut===!0&&($===!0||R!==C)){const nn=R===C&&ot.id===D;Rt.setState(ot,R,nn)}let ge=!1;ot.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Le.state.version||te.outputColorSpace!==Bt||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==Ct||ot.fog===!0&&te.fog!==Et||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Rt.numPlanes||te.numIntersection!==Rt.numIntersection)||te.vertexAlphas!==kt||te.vertexTangents!==ee||te.morphTargets!==$t||te.morphNormals!==Se||te.morphColors!==Pe||te.toneMapping!==Qe||te.morphTargetsCount!==Ce)&&(ge=!0):(ge=!0,te.__version=ot.version);let mn=te.currentProgram;ge===!0&&(mn=fi(ot,Z,Q));let $n=!1,we=!1,Ca=!1;const je=mn.getUniforms(),zn=te.uniforms;if(Lt.useProgram(mn.program)&&($n=!0,we=!0,Ca=!0),ot.id!==D&&(D=ot.id,we=!0),$n||C!==R){Lt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),je.setValue(z,"projectionMatrix",R.projectionMatrix),je.setValue(z,"viewMatrix",R.matrixWorldInverse);const Nn=je.map.cameraPosition;Nn!==void 0&&Nn.setValue(z,xt.setFromMatrixPosition(R.matrixWorld)),Qt.logarithmicDepthBuffer&&je.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&je.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,we=!0,Ca=!0)}if(Q.isSkinnedMesh){je.setOptional(z,Q,"bindMatrix"),je.setOptional(z,Q,"bindMatrixInverse");const nn=Q.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),je.setValue(z,"boneTexture",nn.boneTexture,oe))}Q.isBatchedMesh&&(je.setOptional(z,Q,"batchingTexture"),je.setValue(z,"batchingTexture",Q._matricesTexture,oe),je.setOptional(z,Q,"batchingIdTexture"),je.setValue(z,"batchingIdTexture",Q._indirectTexture,oe),je.setOptional(z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&je.setValue(z,"batchingColorTexture",Q._colorsTexture,oe));const ln=rt.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Tt.update(Q,rt,mn),(we||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,je.setValue(z,"receiveShadow",Q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(zn.envMap.value=Ct,zn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(zn.envMapIntensity.value=Z.environmentIntensity),we&&(je.setValue(z,"toneMappingExposure",w.toneMappingExposure),te.needsLights&&Bu(zn,Ca),Et&&ot.fog===!0&&vt.refreshFogUniforms(zn,Et),vt.refreshMaterialUniforms(zn,ot,K,st,y.state.transmissionRenderTarget[R.id]),Du.upload(z,vs(te),zn,oe)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Du.upload(z,vs(te),zn,oe),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&je.setValue(z,"center",Q.center),je.setValue(z,"modelViewMatrix",Q.modelViewMatrix),je.setValue(z,"normalMatrix",Q.normalMatrix),je.setValue(z,"modelMatrix",Q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const nn=ot.uniformsGroups;for(let Nn=0,ir=nn.length;Nn<ir;Nn++){const Ii=nn[Nn];fe.update(Ii,mn),fe.bind(Ii,mn)}}return mn}function Bu(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Ul(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,Z,rt){const ot=Ft.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Ft.get(R.texture).__webglTexture=Z,Ft.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const rt=Ft.get(R);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const _o=z.createFramebuffer();this.setRenderTarget=function(R,Z=0,rt=0){q=R,B=Z,L=rt;let ot=!0,Q=null,Et=!1,zt=!1;if(R){const Ct=Ft.get(R);if(Ct.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(z.FRAMEBUFFER,null),ot=!1;else if(Ct.__webglFramebuffer===void 0)oe.setupRenderTarget(R);else if(Ct.__hasExternalTextures)oe.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(Ct.__boundDepthTexture!==$t){if($t!==null&&Ft.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(zt=!0);const ee=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?Q=ee[Z][rt]:Q=ee[Z],Et=!0):R.samples>0&&oe.useMultisampledRTT(R)===!1?Q=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[rt]:Q=ee,V.copy(R.viewport),at.copy(R.scissor),ct=R.scissorTest}else V.copy(Gt).multiplyScalar(K).floor(),at.copy(re).multiplyScalar(K).floor(),ct=be;if(rt!==0&&(Q=_o),Lt.bindFramebuffer(z.FRAMEBUFFER,Q)&&ot&&Lt.drawBuffers(R,Q),Lt.viewport(V),Lt.scissor(at),Lt.setScissorTest(ct),Et){const Ct=Ft.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct.__webglTexture,rt)}else if(zt){const Ct=Z;for(let kt=0;kt<R.textures.length;kt++){const ee=Ft.get(R.textures[kt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+kt,ee.__webglTexture,rt,Ct)}}else if(R!==null&&rt!==0){const Ct=Ft.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ct.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,Z,rt,ot,Q,Et,zt,Bt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Ct=Ct[zt]),Ct){Lt.bindFramebuffer(z.FRAMEBUFFER,Ct);try{const kt=R.textures[Bt],ee=kt.format,$t=kt.type;if(!Qt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ot&&rt>=0&&rt<=R.height-Q&&(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Bt),z.readPixels(Z,rt,ot,Q,Zt.convert(ee),Zt.convert($t),Et))}finally{const kt=q!==null?Ft.get(q).__webglFramebuffer:null;Lt.bindFramebuffer(z.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,rt,ot,Q,Et,zt,Bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Ct=Ct[zt]),Ct)if(Z>=0&&Z<=R.width-ot&&rt>=0&&rt<=R.height-Q){Lt.bindFramebuffer(z.FRAMEBUFFER,Ct);const kt=R.textures[Bt],ee=kt.format,$t=kt.type;if(!Qt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Se=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.bufferData(z.PIXEL_PACK_BUFFER,Et.byteLength,z.STREAM_READ),R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Bt),z.readPixels(Z,rt,ot,Q,Zt.convert(ee),Zt.convert($t),0);const Pe=q!==null?Ft.get(q).__webglFramebuffer:null;Lt.bindFramebuffer(z.FRAMEBUFFER,Pe);const Qe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await KE(z,Qe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Se),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Et),z.deleteBuffer(Se),z.deleteSync(Qe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,rt=0){const ot=Math.pow(2,-rt),Q=Math.floor(R.image.width*ot),Et=Math.floor(R.image.height*ot),zt=Z!==null?Z.x:0,Bt=Z!==null?Z.y:0;oe.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,rt,0,0,zt,Bt,Q,Et),Lt.unbindTexture()};const Ss=z.createFramebuffer(),Fu=z.createFramebuffer();this.copyTextureToTexture=function(R,Z,rt=null,ot=null,Q=0,Et=null){Et===null&&(Q!==0?(yl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Q,Q=0):Et=0);let zt,Bt,Ct,kt,ee,$t,Se,Pe,Qe;const Ne=R.isCompressedTexture?R.mipmaps[Et]:R.image;if(rt!==null)zt=rt.max.x-rt.min.x,Bt=rt.max.y-rt.min.y,Ct=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,ee=rt.min.y,$t=rt.isBox3?rt.min.z:0;else{const ln=Math.pow(2,-Q);zt=Math.floor(Ne.width*ln),Bt=Math.floor(Ne.height*ln),R.isDataArrayTexture?Ct=Ne.depth:R.isData3DTexture?Ct=Math.floor(Ne.depth*ln):Ct=1,kt=0,ee=0,$t=0}ot!==null?(Se=ot.x,Pe=ot.y,Qe=ot.z):(Se=0,Pe=0,Qe=0);const Ce=Zt.convert(Z.format),te=Zt.convert(Z.type);let Le;Z.isData3DTexture?(oe.setTexture3D(Z,0),Le=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(oe.setTexture2DArray(Z,0),Le=z.TEXTURE_2D_ARRAY):(oe.setTexture2D(Z,0),Le=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const ge=z.getParameter(z.UNPACK_ROW_LENGTH),mn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),$n=z.getParameter(z.UNPACK_SKIP_PIXELS),we=z.getParameter(z.UNPACK_SKIP_ROWS),Ca=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ne.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ne.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,kt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$t);const je=R.isDataArrayTexture||R.isData3DTexture,zn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const ln=Ft.get(R),nn=Ft.get(Z),Nn=Ft.get(ln.__renderTarget),ir=Ft.get(nn.__renderTarget);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let Ii=0;Ii<Ct;Ii++)je&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,Q,$t+Ii),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(Z).__webglTexture,Et,Qe+Ii)),z.blitFramebuffer(kt,ee,zt,Bt,Se,Pe,zt,Bt,z.DEPTH_BUFFER_BIT,z.NEAREST);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Ft.has(R)){const ln=Ft.get(R),nn=Ft.get(Z);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,Ss),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Fu);for(let Nn=0;Nn<Ct;Nn++)je?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ln.__webglTexture,Q,$t+Nn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ln.__webglTexture,Q),zn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,Et,Qe+Nn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,Et),Q!==0?z.blitFramebuffer(kt,ee,zt,Bt,Se,Pe,zt,Bt,z.COLOR_BUFFER_BIT,z.NEAREST):zn?z.copyTexSubImage3D(Le,Et,Se,Pe,Qe+Nn,kt,ee,zt,Bt):z.copyTexSubImage2D(Le,Et,Se,Pe,kt,ee,zt,Bt);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else zn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Le,Et,Se,Pe,Qe,zt,Bt,Ct,Ce,te,Ne.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(Le,Et,Se,Pe,Qe,zt,Bt,Ct,Ce,Ne.data):z.texSubImage3D(Le,Et,Se,Pe,Qe,zt,Bt,Ct,Ce,te,Ne):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Et,Se,Pe,zt,Bt,Ce,te,Ne.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Et,Se,Pe,Ne.width,Ne.height,Ce,Ne.data):z.texSubImage2D(z.TEXTURE_2D,Et,Se,Pe,zt,Bt,Ce,te,Ne);z.pixelStorei(z.UNPACK_ROW_LENGTH,ge),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$n),z.pixelStorei(z.UNPACK_SKIP_ROWS,we),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ca),Et===0&&Z.generateMipmaps&&z.generateMipmap(Le),Lt.unbindTexture()},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?oe.setTextureCube(R,0):R.isData3DTexture?oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?oe.setTexture2DArray(R,0):oe.setTexture2D(R,0),Lt.unbindTexture()},this.resetState=function(){B=0,L=0,q=null,Lt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const AS={type:"change"},um={type:"start"},cy={type:"end"},yu=new am,RS=new os,SC=Math.cos(70*jE.DEG2RAD),_n=new k,Zn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qd=1e-6;class yC extends PT{constructor(e,i=null){super(e,i),this.state=ke.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:so.ROTATE,MIDDLE:so.DOLLY,RIGHT:so.PAN},this.touches={ONE:io.ROTATE,TWO:io.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new Js,this._lastTargetPosition=new k,this._quat=new Js().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tS,this._sphericalDelta=new tS,this._scale=1,this._panOffset=new k,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new k,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=MC.bind(this),this._onPointerDown=xC.bind(this),this._onPointerUp=EC.bind(this),this._onContextMenu=DC.bind(this),this._onMouseWheel=AC.bind(this),this._onKeyDown=RC.bind(this),this._onTouchStart=CC.bind(this),this._onTouchMove=wC.bind(this),this._onMouseDown=TC.bind(this),this._onMouseMove=bC.bind(this),this._interceptControlDown=UC.bind(this),this._interceptControlUp=NC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(AS),this.update(),this.state=ke.NONE}update(e=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Zn:r>Math.PI&&(r-=Zn),l<-Math.PI?l+=Zn:l>Math.PI&&(l-=Zn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),f=!!m}else if(this.object.isOrthographicCamera){const d=new k(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=m!==this.object.zoom;const p=new k(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(yu.origin.copy(this.object.position),yu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yu.direction))<SC?this.object.lookAt(this.target):(RS.setFromNormalAndCoplanarPoint(this.object.up,this.target),yu.intersectPlane(RS,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>Qd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qd||this._lastTargetPosition.distanceToSquared(this.target)>Qd?(this.dispatchEvent(AS),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zn/60*this.autoRotateSpeed*e:Zn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-e),this._panOffset.add(_n)}_panUp(e,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(e),this._panOffset.add(_n)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let f=_n.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=e-r.left,f=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),l=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ue,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function xC(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function MC(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function EC(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cy),this.state=ke.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function TC(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case so.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=ke.DOLLY;break;case so.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ke.ROTATE}break;case so.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(um)}function bC(o){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function AC(o){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(o.preventDefault(),this.dispatchEvent(um),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(cy))}function RC(o){this.enabled!==!1&&this._handleKeyDown(o)}function CC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case io.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=ke.TOUCH_ROTATE;break;case io.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case io.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=ke.TOUCH_DOLLY_PAN;break;case io.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(um)}function wC(o){switch(this._trackPointer(o),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=ke.NONE}}function DC(o){this.enabled!==!1&&o.preventDefault()}function UC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function NC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LC(o){const e=o.length,i=new Array(e);for(let m=0;m<e;m++){const p=o[Math.max(m-1,0)],v=o[Math.min(m+1,e-1)];i[m]=v.clone().sub(p).normalize()}const r=i[0],l=Math.abs(r.x)<.9?new k(1,0,0):new k(0,1,0);let f=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),h=r.clone().cross(f).normalize();const d=[{point:o[0],tangent:r,normal:f,binormal:h}];for(let m=1;m<e;m++){const p=d[m-1],v=o[m].clone().sub(o[m-1]),g=v.dot(v);if(g<1e-10){d.push({...p,point:o[m],tangent:i[m]});continue}const S=p.normal.clone().sub(v.clone().multiplyScalar(2/g*v.dot(p.normal))),x=p.tangent.clone().sub(v.clone().multiplyScalar(2/g*v.dot(p.tangent))),E=i[m].clone().sub(x),A=E.dot(E),M=A<1e-10?S:S.clone().sub(E.clone().multiplyScalar(2/A*E.dot(S)));M.normalize();const y=i[m].clone().cross(M).normalize();d.push({point:o[m],tangent:i[m],normal:M,binormal:y})}return d}function ds(o,e,i,r={}){const l=r.radialSegments??8,f=o.getPoints(i),h=LC(f),d=[],m=[],p=[],v=[],g=new k,S=new k;for(let A=0;A<h.length;A++){const M=A/(h.length-1),y=Math.max(e(M),1e-5),{point:O,normal:P,binormal:w}=h[A];for(let F=0;F<=l;F++){const B=F/l*Math.PI*2,L=Math.cos(B),q=Math.sin(B);S.set(0,0,0).addScaledVector(P,L).addScaledVector(w,q).normalize(),g.copy(O).addScaledVector(S,y),d.push(g.x,g.y,g.z),m.push(S.x,S.y,S.z),p.push(F/l,M)}}const x=l+1;for(let A=0;A<h.length-1;A++)for(let M=0;M<l;M++){const y=A*x+M,O=A*x+M+1,P=(A+1)*x+M,w=(A+1)*x+M+1;v.push(y,O,P,O,w,P)}if(r.caps??!0){const A=d.length/3;d.push(f[0].x,f[0].y,f[0].z),m.push(-h[0].tangent.x,-h[0].tangent.y,-h[0].tangent.z),p.push(.5,.5);for(let w=0;w<l;w++)v.push(A,w,w+1);const M=(h.length-1)*x,y=d.length/3,O=f[f.length-1];d.push(O.x,O.y,O.z);const P=h[h.length-1].tangent;m.push(P.x,P.y,P.z),p.push(.5,.5);for(let w=0;w<l;w++)v.push(y,M+w+1,M+w)}const E=new ea;return E.setAttribute("position",new Vn(d,3)),E.setAttribute("normal",new Vn(m,3)),E.setAttribute("uv",new Vn(p,2)),E.setIndex(v),E}function tr(o,e){return i=>o+(e-o)*i}function OC(o,e){return i=>{const r=Math.sin(Math.PI*i);return o+(e-o)*r}}function uy(o){const{length:e,maxWidth:i,widthPeakT:r=.55,foldDepth:l=.06,droop:f=.08,lengthSegments:h=12,widthSegments:d=6}=o,m=[],p=[],v=[],g=E=>{const A=E<r?E/r:(1-E)/(1-r);return i*Math.max(A,0)**.7};for(let E=0;E<=h;E++){const A=E/h,M=g(A),y=f*e*A*A;for(let O=0;O<=d;O++){const P=O/d*2-1,w=P*M,B=l*i*(1-P*P)-y,L=A*e;m.push(w,B,L),p.push(O/d,A)}}const S=d+1;for(let E=0;E<h;E++)for(let A=0;A<d;A++){const M=E*S+A,y=E*S+A+1,O=(E+1)*S+A,P=(E+1)*S+A+1;v.push(M,O,y,y,O,P)}const x=new ea;return x.setAttribute("position",new Vn(m,3)),x.setAttribute("uv",new Vn(p,2)),x.setIndex(v),x.computeVertexNormals(),x}const PC={sourceName:"Col-0",compactness:.6637,roundness:88.22,eccentricity:.0577,relativeAreaVsCol0:1,n:60},zC={sourceName:"Ler-0",compactness:.7617,roundness:55.6,eccentricity:.0755,relativeAreaVsCol0:1.258,n:60},IC={sourceName:"WS-0",compactness:.6729,roundness:90.66,eccentricity:.0547,relativeAreaVsCol0:1.56,n:60},BC={sourceName:"Tsu-0",compactness:.6106,roundness:112.84,eccentricity:.0402,relativeAreaVsCol0:1.466,n:60},FC={sourceName:"EDi-0",compactness:.6517,roundness:104.32,eccentricity:.0547,relativeAreaVsCol0:1.775,n:60},HC={col0:PC,ler:zC,ws:IC,tsu0:BC,edi0:FC},Jd="https://figshare.com/s/e18a978267675059578f";function Rl(o){const e=HC[o];return{compactness:e.compactness,radiusScale:Math.sqrt(e.relativeAreaVsCol0),sourceName:e.sourceName}}const dl=Rl("col0"),xu=Rl("ler"),Mu=Rl("ws"),Eu=Rl("tsu0"),Tu=Rl("edi0"),kp=[{id:"col0",label:"Col-0 (Columbia)",sourceName:dl.sourceName,rosetteLeafCount:12,rosetteCompactness:dl.compactness,rosetteRadiusScale:dl.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${dl.compactness} (n=60 images, Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"ERECTA (ER) wild-type reference background (Torii et al. 1996)",citationKey:"Torii1996"},leaf:{value:"Reference/baseline leaf count in this project; not itself drawn from a comparative count study",citationKey:"none"}},referencePhoto:{url:Jd,citationKey:"Namin2018"}},{id:"ler",label:"Ler (Landsberg erecta)",sourceName:xu.sourceName,rosetteLeafCount:12,rosetteCompactness:xu.compactness,rosetteRadiusScale:xu.radiusScale,pedicelLengthScale:1/2.6,siliqueBluntness:.9,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${xu.compactness} (n=60), the highest of the 5 ecotypes measured here (Camargo et al. 2014) -- independently consistent with Ler's known compact habit`,citationKey:"Camargo2014"},pedicel:{value:'Ler carries the natural `er` mutation (Torii et al. 1996: "compact inflorescence, blunt fruits, and short petioles"). Quantitative proxy from Bundy et al. 2012: mature wild-type pedicel 7.90±0.14mm vs. induced er-105 mutant ~2.6x shorter -- that number is for er-105 in a Columbia background, not a direct field measurement of natural Ler vs. Col, and is used here as the best available quantitative proxy for what the mutation does.',citationKey:"Bundy2012"},leaf:{value:"Coneva & Chitwood 2018 report Cvi has ~2 more leaves than Ler in long days -- Ler itself is this comparison's baseline, not independently varied here",citationKey:"Coneva2018"}},referencePhoto:{url:Jd,citationKey:"Namin2018"}},{id:"ws",label:"Ws (Wassilewskija)",sourceName:Mu.sourceName,rosetteLeafCount:12,rosetteCompactness:Mu.compactness,rosetteRadiusScale:Mu.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${Mu.compactness} (n=60, Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"ERECTA (ER) wild-type background (Torii et al. 1996 separately isolated induced er alleles from Wassilewskija, implying the natural Ws accession is itself ER)",citationKey:"Torii1996"},leaf:{value:"No dedicated leaf-count comparison found for Ws in the sources used here",citationKey:"none"}},referencePhoto:null},{id:"cvi0",label:"Cvi-0 (Cape Verde Islands)",sourceName:"Cvi-0",rosetteLeafCount:14,rosetteCompactness:dl.compactness,rosetteRadiusScale:1,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1.25,provenance:{compactness:{value:"No rosette-compactness measurement found for Cvi-0 (it is not one of the 19 MAGIC founders in the Camargo et al. 2014 dataset used here) -- defaulted to the Col-0 value rather than estimated",citationKey:"none"},pedicel:{value:"No ERECTA-specific data found for Cvi-0; assumed ER wild-type by default (most non-Landsberg accessions are), not directly confirmed",citationKey:"none"},leaf:{value:"Real: Coneva & Chitwood 2018 report Cvi makes ~2 more leaves than Ler in long-day conditions, is thicker-leaved, and grows more slowly. Leaf-count and thickness reflect this; the thickness multiplier (1.25x) is an illustrative choice, not a value read directly from the paper's figures.",citationKey:"Coneva2018"}},referencePhoto:{url:Jd,citationKey:"Namin2018"}},{id:"tsu0",label:"Tsu-0 (Tsu)",sourceName:Eu.sourceName,rosetteLeafCount:12,rosetteCompactness:Eu.compactness,rosetteRadiusScale:Eu.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${Eu.compactness} (n=60), the lowest of the 5 ecotypes measured here (Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"No ERECTA-specific data found for Tsu-0; assumed ER wild-type by default, not directly confirmed",citationKey:"none"},leaf:{value:"No dedicated leaf-count comparison found for Tsu-0 in the sources used here",citationKey:"none"}},referencePhoto:null},{id:"edi0",label:"Edi-0 (Edinburgh)",sourceName:Tu.sourceName,rosetteLeafCount:12,rosetteCompactness:Tu.compactness,rosetteRadiusScale:Tu.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${Tu.compactness} (n=60, Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"No ERECTA-specific data found for Edi-0; assumed ER wild-type by default, not directly confirmed",citationKey:"none"},leaf:{value:"No dedicated leaf-count comparison found for Edi-0 in the sources used here",citationKey:"none"}},referencePhoto:null}],Iu=kp[0],er=[{stage:"0",description:"Seed imbibition",day:3,table:"plate"},{stage:"0.50",description:"Radicle emergence",day:4.3,table:"plate"},{stage:"0.70",description:"Hypocotyl and cotyledon emergence",day:5.5,table:"plate"},{stage:"1.00",description:"Cotyledons fully opened",day:6,table:"plate"},{stage:"1.02",description:"2 rosette leaves >1mm",day:12.5,table:"soil"},{stage:"1.03",description:"3 rosette leaves >1mm",day:15.9,table:"soil"},{stage:"1.04",description:"4 rosette leaves >1mm",day:16.5,table:"soil"},{stage:"1.05",description:"5 rosette leaves >1mm",day:17.7,table:"soil"},{stage:"1.06",description:"6 rosette leaves >1mm",day:18.4,table:"soil"},{stage:"1.07",description:"7 rosette leaves >1mm",day:19.4,table:"soil"},{stage:"1.08",description:"8 rosette leaves >1mm",day:20,table:"soil"},{stage:"1.09",description:"9 rosette leaves >1mm",day:21.1,table:"soil"},{stage:"1.10",description:"10 rosette leaves >1mm",day:21.6,table:"soil"},{stage:"1.11",description:"11 rosette leaves >1mm",day:22.2,table:"soil"},{stage:"1.12",description:"12 rosette leaves >1mm",day:23.3,table:"soil"},{stage:"1.13",description:"13 rosette leaves >1mm",day:24.8,table:"soil"},{stage:"1.14",description:"14 rosette leaves >1mm",day:25.5,table:"soil"},{stage:"3.20",description:"Rosette 20% of final size",day:18.9,table:"soil"},{stage:"3.50",description:"Rosette 50% of final size",day:24,table:"soil"},{stage:"3.70",description:"Rosette 70% of final size",day:27.4,table:"soil"},{stage:"3.90",description:"Rosette growth complete",day:29.3,table:"soil"},{stage:"5.10",description:"First flower buds visible",day:26,table:"soil"},{stage:"6.00",description:"First flower open",day:31.8,table:"soil"},{stage:"6.10",description:"10% of flowers produced have opened",day:35.9,table:"soil"},{stage:"6.30",description:"30% of flowers produced have opened",day:40.1,table:"soil"},{stage:"6.50",description:"50% of flowers produced have opened",day:43.5,table:"soil"},{stage:"6.90",description:"Flowering complete",day:49.4,table:"soil"},{stage:"8.00",description:"First silique shattered",day:48,table:"soil"}];er.filter(o=>/^1\.\d\d$/.test(o.stage)&&o.table==="soil");er.find(o=>o.stage==="5.10").day;er.find(o=>o.stage==="6.90").day;er[0].day;const fy=137.5*(Math.PI/180);function Cl(o,e){return o.userData.organId=e,o.traverse(i=>i.userData.organId=e),o}const GC=new po({color:4881471,roughness:.85,side:Kn}),xl=new po({color:7048266,roughness:.8,side:Kn}),CS=new po({color:14271626,roughness:.9,side:Kn}),VC=new po({color:16119280,roughness:.6,side:Kn}),XC=new po({color:9083466,roughness:.75,side:Kn});function ps(o){return new AT(o,!1,"catmullrom",.5)}function qp(o){let e=2166136261;for(let r=0;r<o.length;r++)e^=o.charCodeAt(r),e=Math.imul(e,16777619);e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}function ms(o,e,i){const r=new ui(o,e);return r.name=i,r}function kC(o,e=1){const i=new Ti,r=[new k(0,0,0),new k(.05,-.9,.03),new k(-.03,-1.9,-.02),new k(.02,-2.9,.01),new k(0,-3.2,0)],l=ds(ps(r),tr(.05,.008),24,{radialSegments:8});i.add(ms(l,CS,"Root_primary")),i.scale.set(1,Math.max(.06,e),1);const f=10,h=f*Math.max(0,Math.min(1,e)),d=Math.ceil(h);for(let m=0;m<d;m++){const p=Math.max(0,Math.min(1,h-m)),v=.4+m/f*2.6,g=(.5+qp(`lateral-len-${m}`)*.4)*(.85+.3*o.rosetteCompactness),S=m%2===0?1:-1,x=.9+qp(`lateral-angle-${m}`)*.3,E=new k(0,-v,0),A=E.clone().add(new k(S*Math.cos(x)*g,-g*.25,S*Math.sin(x)*g*.6)),M=E.clone().lerp(A,.5).add(new k(0,-.05,0)),y=ds(ps([E,M,A]),tr(.012,.003),6,{radialSegments:6}),O=ms(y,CS,"Root_lateral");O.scale.setScalar(p),i.add(O)}return Cl(i,"root")}function qC(o,e){const i=new Ti,r=o.rosetteLeafCount;for(let l=0;l<r;l++){const h=l*fy,d=(.35+.5*(l/r))*1,m=.55*d*o.rosetteRadiusScale,p=.35*d*o.rosetteRadiusScale,v=(.15+.35*d)*o.rosetteRadiusScale*(1-.3*o.rosetteCompactness),g=.15+.9*o.rosetteCompactness,S=new ui(uy({length:m,maxWidth:p,foldDepth:.05*o.leafThicknessScale}),GC);S.name="LeafBlade_rosette",S.position.z=v;const x=ms(ds(ps([new k(0,0,0),new k(0,.01,v)]),tr(.012,.02),4,{radialSegments:6}),xl,"Stem_petiole"),E=new Ti;E.add(x,S),E.position.set(0,.02*l,0),E.rotation.y=-h,E.rotation.x=-g,i.add(E)}return Cl(i,"rosette_leaf")}const hy=tr(.05,.02);function YC(o){const e=[new k(0,0,0),new k(-.02,o*.4,.01),new k(.015,o*.75,-.01),new k(0,o,0)],i=ds(ps(e),hy,20,{radialSegments:8});return Cl(ms(i,xl,"Stem_axis"),"inflorescence_axis")}function WC(o){const e=new Ti,i=ms(ds(ps([new k(0,0,0),new k(0,0,o)]),tr(.012,.008),4,{radialSegments:6}),xl,"Stem_pedicel");e.add(i);const r=new Ti;r.position.z=o;const l=4;for(let h=0;h<l;h++){const d=new ui(uy({length:.09,maxWidth:.045,widthPeakT:.7,foldDepth:.15,lengthSegments:4,widthSegments:4}),VC);d.name="LeafBlade_petal";const m=h/l*Math.PI*2;d.position.set(Math.cos(m)*.01,Math.sin(m)*.01,0),d.rotation.z=m,d.rotation.x=-Math.PI/2+.3,r.add(d)}const f=ms(ds(ps([new k(0,0,0),new k(0,0,.15)]),tr(.02,.015),4,{radialSegments:6}),xl,"Stem_carpel");return r.add(f),e.add(r),Cl(e,"flower")}function jC(o,e){const i=new Ti,r=ms(ds(ps([new k(0,0,0),new k(0,0,o)]),tr(.014,.01),4,{radialSegments:6}),xl,"Stem_pedicel");i.add(r);const l=.55,f=.025*(.3+.7*e),h=ds(ps([new k(0,0,o),new k(0,0,o+l)]),OC(f,.028),8,{radialSegments:8});return i.add(ms(h,XC,"Silique_pod")),Cl(i,"silique")}function ZC(o,e,i){const r=new Ti,l=9,f=.75;for(let h=0;h<l;h++){const d=h/(l-1),m=1,p=o*(.35+.6*d),v=h*fy,g=hy(p/o),S=new k(Math.cos(v)*g,p,Math.sin(v)*g),x=.18*e.pedicelLengthScale;let E;d>f?E=WC(x):(E=jC(x,e.siliqueBluntness),E.rotation.x=Math.PI/2+(qp(`silique-tilt-${h}`)-.5)*.3),E.position.copy(S),E.rotation.y+=v,E.scale.setScalar(m),r.add(E)}return r}function wS(o=Iu){const e=new Ti,i=2.4;return e.add(kC(o)),e.add(qC(o)),e.add(YC(i)),e.add(ZC(i,o)),e}function DS(o){o.traverse(e=>{const i=e;i.geometry&&i.geometry.dispose()})}function KC(o){let e=o;for(;e;){if(e.userData.organId)return e.userData.organId;e=e.parent}return null}function QC(o,e){const i=new xT;i.background=new Re(988176);const r=new Ei(45,1,.01,1e3);r.position.set(4,3,4);const l=new vC({antialias:!0});l.setPixelRatio(Math.min(devicePixelRatio,2)),o.appendChild(l.domElement),i.add(new wT(16777215,3158826,1.1));const f=new NT(16777215,1.6);f.position.set(3,6,4),i.add(f);const h=new ui(new om(3,32),new po({color:2827287,roughness:1}));h.rotation.x=-Math.PI/2,h.position.y=-.01,i.add(h);let d=wS(Iu);i.add(d);const m=new yC(r,l.domElement);m.enableDamping=!0,m.target.set(0,.8,0),m.update();const p=new OT,v=new ue;let g=[];const S=new Map;function x(){for(const w of g){const F=w,B=F.material,L=S.get(F);B&&L&&(B.emissive=L)}g=[]}function E(w){x(),d.traverse(F=>{if(F.userData.organId===w&&F.isMesh){const B=F,L=B.material;L&&L.emissive&&(S.has(B)||S.set(B,L.emissive.clone()),L.emissive=new Re(3108175),g.push(B))}})}function A(w){const F=l.domElement.getBoundingClientRect();v.x=(w.clientX-F.left)/F.width*2-1,v.y=-((w.clientY-F.top)/F.height)*2+1,p.setFromCamera(v,r);const B=p.intersectObject(d,!0),L=B.length>0?KC(B[0].object):null;L?E(L):x(),e(L)}l.domElement.addEventListener("click",A);let M=0;const y=()=>{M=requestAnimationFrame(y),m.update(),l.render(i,r)};y();const O=()=>{const w=o.clientWidth||1,F=o.clientHeight||1;l.setSize(w,F),r.aspect=w/F,r.updateProjectionMatrix()};O();const P=new ResizeObserver(O);return P.observe(o),{setEcotype(w){x(),i.remove(d),DS(d),d=wS(w),i.add(d),e(null)},dispose(){cancelAnimationFrame(M),P.disconnect(),l.domElement.removeEventListener("click",A),DS(d),m.dispose(),l.dispose(),l.domElement.remove()}}}const JC={"OSD-120":{organism_part:"root",comparison:"Spaceflight vs. ground control (Day 13 root, GLDS/OSD-120)",n_genes_total:32833,top_upregulated:[{gene_id:"AT2G01422",log2fc:4.751},{gene_id:"AT2G05510",log2fc:4.645},{gene_id:"AT5G19890",log2fc:3.911},{gene_id:"AT2G26400",log2fc:2.714},{gene_id:"AT2G34317",log2fc:2.557},{gene_id:"AT2G30670",log2fc:2.504},{gene_id:"AT2G43920",log2fc:2.465},{gene_id:"AT4G11650",log2fc:2.411}],top_downregulated:[{gene_id:"AT5G13930",log2fc:-5.27},{gene_id:"AT5G09570",log2fc:-4.253},{gene_id:"AT3G51240",log2fc:-3.024},{gene_id:"AT5G33355",log2fc:-2.759},{gene_id:"AT2G04050",log2fc:-2.587},{gene_id:"AT3G30720",log2fc:-2.387},{gene_id:"AT2G21640",log2fc:-2.384},{gene_id:"AT1G01060",log2fc:-2.322}],source_file:"data/processed/OSD-120_root_flight_vs_ground_log2fc.csv"},"OSD-314":{organism_part:"whole seedling",comparison:"Microgravity (0g) vs. 1g ground control, whole seedling (OSD-314)",n_genes_total:32833,top_upregulated:[{gene_id:"AT4G28520",log2fc:5.543},{gene_id:"AT5G44120",log2fc:5.536},{gene_id:"AT1G73190",log2fc:5.527},{gene_id:"AT5G40420",log2fc:5.407},{gene_id:"ATCG00040",log2fc:4.739},{gene_id:"AT4G25140",log2fc:4.693},{gene_id:"AT3G54940",log2fc:4.684},{gene_id:"AT2G28490",log2fc:4.533}],top_downregulated:[{gene_id:"AT2G32810",log2fc:-4.873},{gene_id:"AT3G01345",log2fc:-4.445},{gene_id:"AT1G53480",log2fc:-4.437},{gene_id:"AT4G17090",log2fc:-4.174},{gene_id:"AT3G05727",log2fc:-4.08},{gene_id:"AT2G30750",log2fc:-3.878},{gene_id:"AT3G45140",log2fc:-3.76},{gene_id:"AT3G05730",log2fc:-3.694}],source_file:"data/processed/OSD-314_seedling_microgravity_vs_1g_log2fc.csv"}};function dy(o){const e=JC[o];return{studyId:o,comparison:e.comparison,nGenesTotal:e.n_genes_total,topUpregulated:e.top_upregulated,topDownregulated:e.top_downregulated,sourceFile:e.source_file}}const $C=[{id:"root",label:"Root system",travaCategory:"Root (root apex / root without apex)",geometryNote:"Branching pattern and primary/lateral proportions follow the single-cell root developmental atlas, not a scan of a specimen.",geometryCitations:["Shahan2022"],spaceflight:dy("OSD-120")},{id:"rosette_leaf",label:"Rosette leaf",travaCategory:"Third leaf (petiole / leaf blade / central vein)",geometryNote:"Leaf arrangement uses the ~137.5° golden-angle phyllotaxy widely reported for Arabidopsis rosettes; blade shape is a simplified obovate approximation, not a scan.",geometryCitations:[],spaceflight:null,spaceflightCaveat:"OSD-314 profiled whole seedlings, not dissected rosette leaves -- shown on Root only, where the tissue match is exact."},{id:"inflorescence_axis",label:"Inflorescence axis",travaCategory:"Axes (peduncles / inflorescence axis / internode)",geometryNote:"Simplified tapering-cylinder approximation of the bolting stem; proportions are illustrative, not measured.",geometryCitations:[],spaceflight:null},{id:"flower",label:"Flower",travaCategory:"Flower / Flower part (sepals, anthers, carpels, ovules, stigmatic tissue)",geometryNote:"Whorl arrangement (sepals/petals/stamens/carpels) is schematic; internal carpel/ovule proportions are informed by the digital 3D ovule-development atlas.",geometryCitations:["Vijayan2021"],spaceflight:null},{id:"silique",label:"Silique",travaCategory:"Silique development",geometryNote:"Elongated bicarpellate capsule approximation; internal seed-row layout informed by the same ovule-development atlas used for the flower.",geometryCitations:["Vijayan2021"],spaceflight:null}],t2=dy("OSD-314"),$d={geoAccession:"GSE226097",webTool:"https://arabidopsisdevatlas.salk.edu/"},e2={root:["Columella","Lateral root cap","Epidermis/atrichoblast","Epidermis/trichoblast","Cortex","Endodermis","Pericycle","Stele/vasculature","Root cap"],rosette_leaf:["Epidermis (pavement/guard cells)","Palisade mesophyll","Spongy mesophyll","Vasculature (leaf)","Trichome"],inflorescence_axis:["Epidermis (stem)","Cortex (stem)","Vasculature (stem)","Pith"],flower:["Sepal","Petal","Stamen/anther","Carpel/ovule","Receptacle"],silique:["Valve","Replum","Septum","Seed coat","Funiculus"]},Yp=er[0].day,Wp=er[er.length-1].day,pl={min:Yp,max:Wp};function n2(o,e){var g,S;const i=o.split(/\r?\n/).filter(x=>x.trim().length>0);if(i.length<2)return{dataset:null,errors:["File has no data rows (need a header plus at least one row)."],rowsAccepted:0,rowsRejected:0};const r=i[0].split(",").map(x=>x.trim().toLowerCase()),l=r.indexOf("gene_or_label"),f=r.indexOf("day"),h=r.indexOf("value"),d=r.indexOf("condition");if(l===-1||f===-1||h===-1)return{dataset:null,errors:[`Missing required column(s). Found header: [${r.join(", ")}]. Required: gene_or_label, day, value (optional: condition).`],rowsAccepted:0,rowsRejected:0};const m=[],p=[];let v=0;for(let x=1;x<i.length;x++){const E=i[x].split(","),A=x+1,M=(g=E[l])==null?void 0:g.trim(),y=Number(E[f]),O=Number(E[h]);if(!M){p.push(`Row ${A}: empty gene_or_label, skipped.`),v++;continue}if(!Number.isFinite(y)){p.push(`Row ${A}: "day" is not a number ("${E[f]}"), skipped.`),v++;continue}if(!Number.isFinite(O)){p.push(`Row ${A}: "value" is not a number ("${E[h]}"), skipped.`),v++;continue}(y<Yp||y>Wp)&&p.push(`Row ${A}: day=${y} is outside this atlas's real timeline (${Yp}-${Wp}); kept, but it will never be the nearest day to any point on the growth slider.`),m.push({geneOrLabel:M,day:y,value:O,condition:d>=0?(S=E[d])==null?void 0:S.trim():void 0})}return m.length===0?{dataset:null,errors:[...p,"No valid rows found."],rowsAccepted:0,rowsRejected:v}:{dataset:{name:e,sourceDescription:`uploaded CSV: ${e}`,points:m},errors:p,rowsAccepted:m.length,rowsRejected:v}}function i2(o,e,i=10){return[...o.points].map(r=>({point:r,dayGap:Math.abs(r.day-e)})).sort((r,l)=>r.dayGap-l.dayGap).slice(0,i)}const py="https://travadb.org",a2=o=>`https://osdr.nasa.gov/bio/repo/data/studies/${o}`,s2="https://osdr.nasa.gov/bio/repo/search";function US({title:o,genes:e}){return Ut.jsxs("div",{className:"gene-panel",children:[Ut.jsx("h4",{children:o}),Ut.jsx("ul",{children:e.map(i=>Ut.jsxs("li",{children:[Ut.jsx("a",{href:`${py}`,target:"_blank",rel:"noreferrer",title:"Look this locus up on TraVA",children:i.gene_id}),Ut.jsxs("span",{className:i.log2fc>=0?"up":"down",children:[i.log2fc>0?"+":"",i.log2fc.toFixed(2)]})]},i.gene_id))})]})}function r2({organId:o}){const[e,i]=Ta.useState(null),[r,l]=Ta.useState([]),[f,h]=Ta.useState(pl.max),d=e2[o]??[],m=p=>{const v=new FileReader;v.onload=()=>{const g=n2(String(v.result??""),p.name);i(g.dataset),l(g.errors)},v.readAsText(p)};return Ut.jsxs("div",{className:"digital-twin-panel",children:[Ut.jsx("h3",{children:"Digital twin data overlay"}),d.length>0&&Ut.jsxs("p",{className:"celltype-breakdown",children:["Real cell types this organ's mesh aggregates (Lee et al. 2025): ",d.join(", "),". Shown as a list because this atlas's own geometry has no sub-organ mesh regions to paint them onto individually."]}),Ut.jsxs("p",{className:"external-links",children:[Ut.jsx("a",{href:$d.webTool,target:"_blank",rel:"noreferrer",children:"Explore real single-cell/spatial data for this stage on the Salk atlas ↗"})," · ",Ut.jsxs("a",{href:`https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=${$d.geoAccession}`,target:"_blank",rel:"noreferrer",children:[$d.geoAccession," on GEO ↗"]})," · ",Ut.jsx("a",{href:s2,target:"_blank",rel:"noreferrer",children:"Browse NASA OSDR ↗"})]}),Ut.jsxs("div",{className:"csv-upload",children:[Ut.jsx("label",{htmlFor:"twin-csv-upload",children:"Upload your own data (CSV: gene_or_label, day, value, condition):"}),Ut.jsx("input",{id:"twin-csv-upload",type:"file",accept:".csv,text/csv",onChange:p=>{var g;const v=(g=p.target.files)==null?void 0:g[0];v&&m(v)}})]}),r.length>0&&Ut.jsx("ul",{className:"csv-errors",children:r.map((p,v)=>Ut.jsx("li",{children:p},v))}),e&&Ut.jsxs("div",{className:"overlay-results",children:[Ut.jsxs("label",{htmlFor:"twin-day-slider",children:["Day ",f.toFixed(1)," (real range this atlas covers: ",pl.min,"–",pl.max,")"]}),Ut.jsx("input",{id:"twin-day-slider",type:"range",min:pl.min,max:pl.max,step:.1,value:f,onChange:p=>h(Number(p.target.value))}),Ut.jsxs("p",{className:"provenance",children:["Source: ",e.sourceDescription," · ",e.points.length," points loaded."]}),Ut.jsx("ul",{className:"overlay-points",children:i2(e,f,8).map(({point:p,dayGap:v},g)=>Ut.jsxs("li",{children:[p.geneOrLabel,": ",p.value.toFixed(3),p.condition?` (${p.condition})`:""," — ",Ut.jsxs("span",{className:v>2?"day-gap-warning":"day-gap-ok",children:["measured day ",p.day.toFixed(1)," (",v.toFixed(1)," days from slider)"]})]},g))})]})]})}function o2({organ:o}){return Ut.jsxs("div",{className:"organ-info",children:[Ut.jsx("h2",{children:o.label}),Ut.jsxs("p",{className:"trava-category",children:["TraVA category: ",Ut.jsx("em",{children:o.travaCategory})," —"," ",Ut.jsx("a",{href:py,target:"_blank",rel:"noreferrer",children:"browse real developmental expression on TraVA →"})]}),Ut.jsx("p",{className:"geometry-note",children:o.geometryNote}),o.geometryCitations.length>0&&Ut.jsxs("p",{className:"citations",children:["Geometry citations: ",o.geometryCitations.join(", ")]}),o.spaceflight?Ut.jsxs("div",{className:"spaceflight-block",children:[Ut.jsxs("h3",{children:["Real spaceflight response — ",o.spaceflight.studyId]}),Ut.jsx("p",{children:o.spaceflight.comparison}),Ut.jsxs("p",{className:"n-genes",children:[o.spaceflight.nGenesTotal.toLocaleString()," genes quantified. Log2 fold-change is a raw mean-CPM ratio, not a statistically tested DE call (no DESeq2, no p-values) — see methods."]}),Ut.jsxs("div",{className:"gene-panels",children:[Ut.jsx(US,{title:"Highest flight/ground ratio",genes:o.spaceflight.topUpregulated}),Ut.jsx(US,{title:"Lowest flight/ground ratio",genes:o.spaceflight.topDownregulated})]}),Ut.jsxs("p",{className:"source-link",children:["Source: ",Ut.jsx("code",{children:o.spaceflight.sourceFile})," ·"," ",Ut.jsxs("a",{href:a2(o.spaceflight.studyId),target:"_blank",rel:"noreferrer",children:[o.spaceflight.studyId," on NASA OSDR ↗"]})]})]}):Ut.jsxs("p",{className:"no-spaceflight",children:["No organ-specific spaceflight dataset is wired up for this organ yet.",o.spaceflightCaveat?` ${o.spaceflightCaveat}`:""]}),Ut.jsx(r2,{organId:o.id})]})}function l2({value:o,onChange:e}){return Ut.jsxs("div",{className:"ecotype-picker",children:[Ut.jsx("label",{htmlFor:"ecotype-select",children:"Ecotype"}),Ut.jsx("select",{id:"ecotype-select",value:o.id,onChange:i=>e(kp.find(r=>r.id===i.target.value)??Iu),children:kp.map(i=>Ut.jsx("option",{value:i.id,children:i.label},i.id))})]})}function c2({ecotype:o}){return Ut.jsxs("div",{className:"ecotype-info",children:[Ut.jsx("h3",{children:o.label}),Ut.jsxs("p",{className:"source-name",children:["Source accession id: ",Ut.jsx("code",{children:o.sourceName})]}),Ut.jsxs("dl",{children:[Ut.jsx("dt",{children:"Rosette compactness"}),Ut.jsx("dd",{children:o.provenance.compactness.value}),Ut.jsx("dt",{children:"Inflorescence / pedicel"}),Ut.jsx("dd",{children:o.provenance.pedicel.value}),Ut.jsx("dt",{children:"Leaf count / thickness"}),Ut.jsx("dd",{children:o.provenance.leaf.value})]}),o.referencePhoto&&Ut.jsx("p",{className:"reference-photo",children:Ut.jsx("a",{href:o.referencePhoto.url,target:"_blank",rel:"noreferrer",children:"Real accession-labeled reference photos (Namin et al. 2018, CC BY 4.0) ↗"})})]})}function u2(){const o=Ta.useRef(null),e=Ta.useRef(null),[i,r]=Ta.useState(null),[l,f]=Ta.useState(Iu);Ta.useEffect(()=>{if(!o.current)return;const m=QC(o.current,r);return e.current=m,()=>{e.current=null,m.dispose()}},[]);const h=m=>{var p;f(m),r(null),(p=e.current)==null||p.setEcotype(m)},d=$C.find(m=>m.id===i)??null;return Ut.jsxs("div",{className:"app",children:[Ut.jsxs("header",{className:"app-header",children:[Ut.jsx("h1",{children:"Arabidopsis Atlas"}),Ut.jsxs("p",{children:["Click an organ to explore it. Started from"," ",Ut.jsx("a",{href:"https://github.com/dr-richard-barker/rice-atlas",target:"_blank",rel:"noreferrer",children:"rice-atlas"})," ","— see the ",Ut.jsx("a",{href:"https://github.com/dr-richard-barker/arabidopsis-atlas#readme",target:"_blank",rel:"noreferrer",children:"README"})," for what's actually real data here vs. simplified geometry."," ","Also see the ",Ut.jsx("a",{href:"growth.html",children:"seed-to-flowering growth animation →"})]}),Ut.jsx(l2,{value:l,onChange:h})]}),Ut.jsxs("div",{className:"app-body",children:[Ut.jsx("div",{className:"viewer-container",ref:o}),Ut.jsxs("aside",{className:"sidebar",children:[Ut.jsx(c2,{ecotype:l}),d?Ut.jsx(o2,{organ:d}):Ut.jsxs("div",{className:"welcome",children:[Ut.jsx("p",{children:"No organ selected. Click any part of the plant."}),Ut.jsxs("p",{className:"hint",children:["Whole-seedling spaceflight coverage (",t2.studyId,", real data, not organ-specific) is documented in ",Ut.jsx("code",{children:"data/README.md"})," rather than shown here, since it isn't tissue-specific."]})]})]})]})]})}sE.createRoot(document.getElementById("root")).render(Ut.jsx(Ta.StrictMode,{children:Ut.jsx(u2,{})}));
