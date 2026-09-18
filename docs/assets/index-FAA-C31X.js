(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var Jh={exports:{}},el={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function bM(){if(j0)return el;j0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:r,key:h,ref:u!==void 0?u:null,props:f}}return el.Fragment=e,el.jsx=i,el.jsxs=i,el}var Z0;function AM(){return Z0||(Z0=1,Jh.exports=bM()),Jh.exports}var me=AM(),$h={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function RM(){if(K0)return oe;K0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),M=Symbol.iterator;function A(F){return F===null||typeof F!="object"?null:(F=M&&F[M]||F["@@iterator"],typeof F=="function"?F:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,v={};function O(F,ct,$){this.props=F,this.context=ct,this.refs=v,this.updater=$||w}O.prototype.isReactComponent={},O.prototype.setState=function(F,ct){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ct,"setState")},O.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function P(){}P.prototype=O.prototype;function D(F,ct,$){this.props=F,this.context=ct,this.refs=v,this.updater=$||w}var I=D.prototype=new P;I.constructor=D,x(I,O.prototype),I.isPureReactComponent=!0;var z=Array.isArray;function N(){}var X={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function R(F,ct,$){var at=$.ref;return{$$typeof:o,type:F,key:ct,ref:at!==void 0?at:null,props:$}}function H(F,ct){return R(F.type,ct,F.props)}function Q(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function rt(F){var ct={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function($){return ct[$]})}var mt=/\/+/g;function ut(F,ct){return typeof F=="object"&&F!==null&&F.key!=null?rt(""+F.key):ct.toString(36)}function Y(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(N,N):(F.status="pending",F.then(function(ct){F.status==="pending"&&(F.status="fulfilled",F.value=ct)},function(ct){F.status==="pending"&&(F.status="rejected",F.reason=ct)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function st(F,ct,$,at,xt){var Ut=typeof F;(Ut==="undefined"||Ut==="boolean")&&(F=null);var At=!1;if(F===null)At=!0;else switch(Ut){case"bigint":case"string":case"number":At=!0;break;case"object":switch(F.$$typeof){case o:case e:At=!0;break;case S:return At=F._init,st(At(F._payload),ct,$,at,xt)}}if(At)return xt=xt(F),At=at===""?"."+ut(F,0):at,z(xt)?($="",At!=null&&($=At.replace(mt,"$&/")+"/"),st(xt,ct,$,"",function(B){return B})):xt!=null&&(Q(xt)&&(xt=H(xt,$+(xt.key==null||F&&F.key===xt.key?"":(""+xt.key).replace(mt,"$&/")+"/")+At)),ct.push(xt)),1;At=0;var Mt=at===""?".":at+":";if(z(F))for(var Yt=0;Yt<F.length;Yt++)at=F[Yt],Ut=Mt+ut(at,Yt),At+=st(at,ct,$,Ut,xt);else if(Yt=A(F),typeof Yt=="function")for(F=Yt.call(F),Yt=0;!(at=F.next()).done;)at=at.value,Ut=Mt+ut(at,Yt++),At+=st(at,ct,$,Ut,xt);else if(Ut==="object"){if(typeof F.then=="function")return st(Y(F),ct,$,at,xt);throw ct=String(F),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return At}function Z(F,ct,$){if(F==null)return F;var at=[],xt=0;return st(F,at,"","",function(Ut){return ct.call($,Ut,xt++)}),at}function gt(F){if(F._status===-1){var ct=F._result,$=ct();$.then(function(at){(F._status===0||F._status===-1)&&(F._status=1,F._result=at,$.status===void 0&&($.status="fulfilled",$.value=at))},function(at){(F._status===0||F._status===-1)&&(F._status=2,F._result=at,$.status===void 0&&($.status="rejected",$.reason=at))}),F._status===-1&&(F._status=0,F._result=$)}if(F._status===1)return F._result.default;throw F._result}var St=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function Ht(F){var ct=X.T,$={};$.types=ct!==null?ct.types:null,X.T=$;try{var at=F(),xt=X.S;xt!==null&&xt($,at),typeof at=="object"&&at!==null&&typeof at.then=="function"&&at.then(N,St)}catch(Ut){St(Ut)}finally{ct!==null&&$.types!==null&&(ct.types=$.types),X.T=ct}}function se(F){var ct=X.T;if(ct!==null){var $=ct.types;$===null?ct.types=[F]:$.indexOf(F)===-1&&$.push(F)}else Ht(se.bind(null,F))}var be={map:Z,forEach:function(F,ct,$){Z(F,function(){ct.apply(this,arguments)},$)},count:function(F){var ct=0;return Z(F,function(){ct++}),ct},toArray:function(F){return Z(F,function(ct){return ct})||[]},only:function(F){if(!Q(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return oe.Activity=p,oe.Children=be,oe.Component=O,oe.Fragment=i,oe.Profiler=u,oe.PureComponent=D,oe.StrictMode=r,oe.Suspense=g,oe.ViewTransition=y,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,oe.__COMPILER_RUNTIME={__proto__:null,c:function(F){return X.H.useMemoCache(F)}},oe.addTransitionType=se,oe.cache=function(F){return function(){return F.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(F,ct,$){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var at=x({},F.props),xt=F.key;if(ct!=null)for(Ut in ct.key!==void 0&&(xt=""+ct.key),ct)!C.call(ct,Ut)||Ut==="key"||Ut==="__self"||Ut==="__source"||Ut==="ref"&&ct.ref===void 0||(at[Ut]=ct[Ut]);var Ut=arguments.length-2;if(Ut===1)at.children=$;else if(1<Ut){for(var At=Array(Ut),Mt=0;Mt<Ut;Mt++)At[Mt]=arguments[Mt+2];at.children=At}return R(F.type,xt,at)},oe.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:f,_context:F},F},oe.createElement=function(F,ct,$){var at,xt={},Ut=null;if(ct!=null)for(at in ct.key!==void 0&&(Ut=""+ct.key),ct)C.call(ct,at)&&at!=="key"&&at!=="__self"&&at!=="__source"&&(xt[at]=ct[at]);var At=arguments.length-2;if(At===1)xt.children=$;else if(1<At){for(var Mt=Array(At),Yt=0;Yt<At;Yt++)Mt[Yt]=arguments[Yt+2];xt.children=Mt}if(F&&F.defaultProps)for(at in At=F.defaultProps,At)xt[at]===void 0&&(xt[at]=At[at]);return R(F,Ut,xt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(F){return{$$typeof:d,render:F}},oe.isValidElement=Q,oe.lazy=function(F){return{$$typeof:S,_payload:{_status:-1,_result:F},_init:gt}},oe.memo=function(F,ct){return{$$typeof:_,type:F,compare:ct===void 0?null:ct}},oe.startTransition=Ht,oe.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},oe.use=function(F){return X.H.use(F)},oe.useActionState=function(F,ct,$){return X.H.useActionState(F,ct,$)},oe.useCallback=function(F,ct){return X.H.useCallback(F,ct)},oe.useContext=function(F){return X.H.useContext(F)},oe.useDebugValue=function(){},oe.useDeferredValue=function(F,ct){return X.H.useDeferredValue(F,ct)},oe.useEffect=function(F,ct){return X.H.useEffect(F,ct)},oe.useEffectEvent=function(F){return X.H.useEffectEvent(F)},oe.useId=function(){return X.H.useId()},oe.useImperativeHandle=function(F,ct,$){return X.H.useImperativeHandle(F,ct,$)},oe.useInsertionEffect=function(F,ct){return X.H.useInsertionEffect(F,ct)},oe.useLayoutEffect=function(F,ct){return X.H.useLayoutEffect(F,ct)},oe.useMemo=function(F,ct){return X.H.useMemo(F,ct)},oe.useOptimistic=function(F,ct){return X.H.useOptimistic(F,ct)},oe.useReducer=function(F,ct,$){return X.H.useReducer(F,ct,$)},oe.useRef=function(F){return X.H.useRef(F)},oe.useState=function(F){return X.H.useState(F)},oe.useSyncExternalStore=function(F,ct,$){return X.H.useSyncExternalStore(F,ct,$)},oe.useTransition=function(){return X.H.useTransition()},oe.version="19.3.0",oe}var Q0;function Ap(){return Q0||(Q0=1,$h.exports=RM()),$h.exports}var fc=Ap(),td={exports:{}},nl={},ed={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function CM(){return J0||(J0=1,(function(o){function e(Y,st){var Z=Y.length;Y.push(st);t:for(;0<Z;){var gt=Z-1>>>1,St=Y[gt];if(0<u(St,st))Y[gt]=st,Y[Z]=St,Z=gt;else break t}}function i(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var st=Y[0],Z=Y.pop();if(Z!==st){Y[0]=Z;t:for(var gt=0,St=Y.length,Ht=St>>>1;gt<Ht;){var se=2*(gt+1)-1,be=Y[se],F=se+1,ct=Y[F];if(0>u(be,Z))F<St&&0>u(ct,be)?(Y[gt]=ct,Y[F]=Z,gt=F):(Y[gt]=be,Y[se]=Z,gt=se);else if(F<St&&0>u(ct,Z))Y[gt]=ct,Y[F]=Z,gt=F;else break t}}return st}function u(Y,st){var Z=Y.sortIndex-st.sortIndex;return Z!==0?Z:Y.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var g=[],_=[],S=1,p=null,y=3,M=!1,A=!1,w=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function D(Y){for(var st=i(_);st!==null;){if(st.callback===null)r(_);else if(st.startTime<=Y)r(_),st.sortIndex=st.expirationTime,e(g,st);else break;st=i(_)}}function I(Y){if(w=!1,D(Y),!A)if(i(g)!==null)A=!0,z||(z=!0,Q());else{var st=i(_);st!==null&&ut(I,st.startTime-Y)}}var z=!1,N=-1,X=5,C=-1;function R(){return x?!0:!(o.unstable_now()-C<X)}function H(){if(x=!1,z){var Y=o.unstable_now();C=Y;var st=!0;try{t:{A=!1,w&&(w=!1,O(N),N=-1),M=!0;var Z=y;try{e:{for(D(Y),p=i(g);p!==null&&!(p.expirationTime>Y&&R());){var gt=p.callback;if(typeof gt=="function"){p.callback=null,y=p.priorityLevel;var St=gt(p.expirationTime<=Y);if(Y=o.unstable_now(),typeof St=="function"){p.callback=St,D(Y),st=!0;break e}p===i(g)&&r(g),D(Y)}else r(g);p=i(g)}if(p!==null)st=!0;else{var Ht=i(_);Ht!==null&&ut(I,Ht.startTime-Y),st=!1}}break t}finally{p=null,y=Z,M=!1}st=void 0}}finally{st?Q():z=!1}}}var Q;if(typeof P=="function")Q=function(){P(H)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,mt=rt.port2;rt.port1.onmessage=H,Q=function(){mt.postMessage(null)}}else Q=function(){v(H,0)};function ut(Y,st){N=v(function(){Y(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(Y){switch(y){case 1:case 2:case 3:var st=3;break;default:st=y}var Z=y;y=st;try{return Y()}finally{y=Z}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(Y,st){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var Z=y;y=Y;try{return st()}finally{y=Z}},o.unstable_scheduleCallback=function(Y,st,Z){var gt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?gt+Z:gt):Z=gt,Y){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=Z+St,Y={id:S++,callback:st,priorityLevel:Y,startTime:Z,expirationTime:St,sortIndex:-1},Z>gt?(Y.sortIndex=Z,e(_,Y),i(g)===null&&Y===i(_)&&(w?(O(N),N=-1):w=!0,ut(I,Z-gt))):(Y.sortIndex=St,e(g,Y),A||M||(A=!0,z||(z=!0,Q()))),Y},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(Y){var st=y;return function(){var Z=y;y=st;try{return Y.apply(this,arguments)}finally{y=Z}}}})(nd)),nd}var $0;function wM(){return $0||($0=1,ed.exports=CM()),ed.exports}var id={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function DM(){if(tv)return Dn;tv=1;var o=Ap();function e(S){var p="https://react.dev/errors/"+S;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+S+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(S,p,y){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:S,containerInfo:p,implementation:y}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(S,p){if(S==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.browser=function(S){return{$$typeof:f,_reason:S}},Dn.createPortal=function(S,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return d(S,p,null,y)},Dn.flushSync=function(S){var p=g.T,y=r.p;try{if(g.T=null,r.p=2,S)return S()}finally{g.T=p,r.p=y,r.d.f()}},Dn.preconnect=function(S,p){typeof S=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(S,p))},Dn.prefetchDNS=function(S){typeof S=="string"&&r.d.D(S)},Dn.preinit=function(S,p){if(typeof S=="string"&&p&&typeof p.as=="string"){var y=p.as,M=_(y,p.crossOrigin),A=typeof p.integrity=="string"?p.integrity:void 0,w=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?r.d.S(S,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:A,fetchPriority:w}):y==="script"&&r.d.X(S,{crossOrigin:M,integrity:A,fetchPriority:w,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(S,p){if(typeof S=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=_(p.as,p.crossOrigin);r.d.M(S,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&r.d.M(S)},Dn.preload=function(S,p){if(typeof S=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,M=_(y,p.crossOrigin);r.d.L(S,y,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(S,p){if(typeof S=="string")if(p){var y=_(p.as,p.crossOrigin);r.d.m(S,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else r.d.m(S)},Dn.requestFormReset=function(S){r.d.r(S)},Dn.unstable_batchedUpdates=function(S,p){return S(p)},Dn.useFormState=function(S,p,y){return g.H.useFormState(S,p,y)},Dn.useFormStatus=function(){return g.H.useHostTransitionStatus()},Dn.version="19.3.0",Dn}var ev;function UM(){if(ev)return id.exports;ev=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),id.exports=DM(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function NM(){if(nv)return nl;nv=1;var o=wM(),e=Ap(),i=UM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(r(188))}function _(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(s=l.return,s!==null){a=s;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return g(l),t;if(c===s)return g(l),n;c=c.sibling}throw Error(r(188))}if(a.return!==s.return)a=l,s=c;else{for(var m=!1,E=l.child;E;){if(E===a){m=!0,a=l,s=c;break}if(E===s){m=!0,s=l,a=c;break}E=E.sibling}if(!m){for(E=c.child;E;){if(E===a){m=!0,a=c,s=l;break}if(E===s){m=!0,s=c,a=l;break}E=E.sibling}if(!m)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function p(t,n,a,s,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,a,s,l,c))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function A(t){var n=[null,null],a=y(t);return a===null||w(n,t,a.child,{foundSelf:!1}),n}function w(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(t,n,a.child,s))return!0;a=a.sibling}return!1}function x(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var v=null,O=null;function P(t,n,a){return t===a?!0:t===n?(v=t,!0):!1}function D(t,n,a){return t===a?(O=t,!1):t===n?(O!==null&&(v=t),!0):!1}function I(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function z(t,n,a){for(var s=0,l=t;l;l=a(l))s++;l=0;for(var c=n;c;c=a(c))l++;for(;0<s-l;)t=a(t),s--;for(;0<l-s;)n=a(n),l--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var N=Object.assign,X=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),mt=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Ht=Symbol.for("react.activity"),se=Symbol.for("react.legacy_hidden"),be=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),ct=Symbol.for("react.recoverable"),$=Symbol.iterator;function at(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Symbol.for("react.client.reference");function Ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===xt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case rt:return"Profiler";case Q:return"StrictMode";case st:return"Suspense";case Z:return"SuspenseList";case Ht:return"Activity";case F:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case ut:return t.displayName||"Context";case mt:return(t._context.displayName||"Context")+".Consumer";case Y:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gt:return n=t.displayName||null,n!==null?n:Ut(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return Ut(t(n))}catch{}}return null}var At=Array.isArray,Mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Yt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},He=[],ae=-1;function Kt(t){return{current:t}}function Nt(t){0>ae||(t.current=He[ae],He[ae]=null,ae--)}function ne(t,n){ae++,He[ae]=t.current,t.current=n}var Bt=Kt(null),re=Kt(null),Ye=Kt(null),We=Kt(null);function U(t,n){switch(ne(Ye,n),ne(re,t),ne(Bt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?i0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=i0(n),t=a0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Nt(Bt),ne(Bt,t)}function T(){Nt(Bt),Nt(re),Nt(Ye)}function nt(t){var n=t.memoizedState;n!==null&&(Or._currentValue=n.memoizedState,ne(We,t)),n=Bt.current;var a=a0(n,t.type);n!==a&&(ne(re,t),ne(Bt,a))}function dt(t){re.current===t&&(Nt(Bt),Nt(re)),We.current===t&&(Nt(We),Or._currentValue=B)}var vt,ft;function Vt(t){if(vt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);vt=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vt+t+ft}var Rt=!1;function Wt(t,n){if(!t||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(Dt){var k=Dt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(Dt){k=Dt}pt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),pt=!0,new t}finally{pt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Dt){k=Dt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(Dt){if(Dt&&k&&typeof Dt.stack=="string")return[Dt.stack,k.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=s.DetermineComponentFrameRoot(),m=c[0],E=c[1];if(m&&E){var L=m.split(`
`),W=E.split(`
`);for(l=s=0;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;for(;l<W.length&&!W[l].includes("DetermineComponentFrameRoot");)l++;if(s===L.length||l===W.length)for(s=L.length-1,l=W.length-1;1<=s&&0<=l&&L[s]!==W[l];)l--;for(;1<=s&&0<=l;s--,l--)if(L[s]!==W[l]){if(s!==1||l!==1)do if(s--,l--,0>l||L[s]!==W[l]){var it=`
`+L[s].replace(" at new "," at ");return t.displayName&&it.includes("<anonymous>")&&(it=it.replace("<anonymous>",t.displayName)),it}while(1<=s&&0<=l);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Vt(a):""}function Zt(t,n){switch(t.tag){case 26:case 27:case 5:return Vt(t.type);case 16:return Vt("Lazy");case 13:return t.child!==n&&n!==null?Vt("Suspense Fallback"):Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return Wt(t.type,!1);case 11:return Wt(t.type.render,!1);case 1:return Wt(t.type,!0);case 31:return Vt("Activity");case 30:return Vt("ViewTransition");default:return""}}function Tt(t){try{var n="",a=null;do n+=Zt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Lt=Object.prototype.hasOwnProperty,ee=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,Ot=o.unstable_shouldYield,ce=o.unstable_requestPaint,V=o.unstable_now,bt=o.unstable_getCurrentPriorityLevel,wt=o.unstable_ImmediatePriority,Gt=o.unstable_UserBlockingPriority,yt=o.unstable_NormalPriority,_t=o.unstable_LowPriority,qt=o.unstable_IdlePriority,le=o.log,Ge=o.unstable_setDisableYieldValue,Me=null,$e=null;function pn(t){if(typeof le=="function"&&Ge(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Me,t)}catch{}}var Ln=Math.clz32?Math.clz32:yl,ea=Math.log,co=Math.LN2;function yl(t){return t>>>=0,t===0?32:31-(ea(t)/co|0)|0}var hs=256,na=262144,ds=4194304;function ci(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ps(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~c,s!==0?l=ci(s):(m&=E,m!==0?l=ci(m):a||(a=E&~t,a!==0&&(l=ci(a))))):(E=s&~c,E!==0?l=ci(E):m!==0?l=ci(m):a||(a=s&~t,a!==0&&(l=ci(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function Aa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function xl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Ln(a),l=1<<s;n|=t[s],a&=~l}return n}function bc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ml(){var t=ds;return ds<<=1,(ds&62914560)===0&&(ds=4194304),t}function fo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ms(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ac(t,n,a,s,l,c){var m=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,L=t.expirationTimes,W=t.hiddenUpdates;for(a=m&~a;0<a;){var it=31-Ln(a),pt=1<<it;E[it]=0,L[it]=-1;var k=W[it];if(k!==null)for(W[it]=null,it=0;it<k.length;it++){var tt=k[it];tt!==null&&(tt.lane&=-536870913)}a&=~pt}s!==0&&b(t,s,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(m&~n))}function b(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ln(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function j(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ln(a),l=1<<s;l&n|t[s]&n&&(t[s]|=n),a&=~l}}function ot(t,n){var a=n&-n;return a=(a&42)!==0?1:lt(a),(a&(t.suspendedLanes|n))!==0?0:a}function lt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function K(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Et(){var t=Yt.p;return t!==0?t:(t=window.event,t===void 0?32:G0(t.type))}function Pt(t,n){var a=Yt.p;try{return Yt.p=t,n()}finally{Yt.p=a}}var It=Math.random().toString(36).slice(2),Ct="__reactFiber$"+It,Xt="__reactProps$"+It,te="__reactContainer$"+It,Jt="__reactEvents$"+It,ve="__reactListeners$"+It,Pe="__reactHandles$"+It,Qe="__reactResources$"+It,Ne="__reactMarker$"+It,Ce="__reactLoad$"+It;function $t(t){delete t[Ct],delete t[Xt],delete t[ve],delete t[Pe]}function Le(t){var n;if(n=t[Ct])return n;for(var a=t.parentNode;a;){if(n=a[te]||a[Ct]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=x0(t);t!==null;){if(a=t[Ct])return a;t=x0(t)}return n}t=a,a=t.parentNode}return null}function _e(t){if(t=t[Ct]||t[te]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function $n(t){var n=t[Qe];return n||(n=t[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function we(t){t[Ne]=!0}function Ra(t){t[Ce]=void 0}var je=new Set,Bn={};function ln(t,n){en(t,n),en(t+"Capture",n)}function en(t,n){for(Bn[t]=n,t=0;t<n.length;t++)je.add(n[t])}var On=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qs={},zi={};function kS(t){return Lt.call(zi,t)?!0:Lt.call(Qs,t)?!1:On.test(t)?zi[t]=!0:(Qs[t]=!0,!1)}var De=!1;function Xp(){var t=De;return De=!1,t}function El(t,n,a){if(kS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Tl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ia(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ti(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function YS(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var l=s.get,c=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(m){a=""+m,c.call(this,m)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Rc(t){if(!t._valueTracker){var n=kp(t)?"checked":"value";t._valueTracker=YS(t,n,""+t[n])}}function Yp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=kp(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var qS=/[\n"\\]/g;function fi(t){return t.replace(qS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cc(t,n,a,s,l,c,m,E){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),n!=null?m==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ti(n)):t.value!==""+ti(n)&&(t.value=""+ti(n)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),n!=null?m==="number"&&t.value==n?wc(t,ti(t.value)):wc(t,ti(n)):a!=null?wc(t,ti(a)):s!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ti(E):t.removeAttribute("name")}function qp(t,n,a,s,l,c,m,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Rc(t);return}a=a!=null?""+ti(a):"",n=n!=null?""+ti(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??l,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m),Rc(t)}function wc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Js(t,n,a,s){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ti(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,s&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Wp(t,n,a){if(n!=null&&(n=""+ti(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ti(a):""}function jp(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ti(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Rc(t)}function $s(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var WS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zp(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||WS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Kp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",De=!0);for(var l in n)s=n[l],n.hasOwnProperty(l)&&a[l]!==s&&(Zp(t,l,s),De=!0)}else for(var c in n)n.hasOwnProperty(c)&&Zp(t,c,n[c])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ZS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(t){return ZS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var Uc=null;function Nc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tr=null,er=null;function Qp(t){var n=_e(t);if(n&&(t=n.stateNode)){var a=t[Xt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Cc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var l=s[Xt]||null;if(!l)throw Error(r(90));Cc(s,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Yp(s)}break t;case"textarea":Wp(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Js(t,!!a.multiple,n,!1)}}}var Lc=!1;function Jp(t,n,a){if(Lc)return t(n,a);Lc=!0;try{var s=t(n);return s}finally{if(Lc=!1,(tr!==null||er!==null)&&(bu(),tr&&(n=tr,t=er,er=tr=null,Qp(n),t)))for(n=0;n<t.length;n++)Qp(t[n])}}function ho(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Xt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=!1;if(aa)try{var po={};Object.defineProperty(po,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Oc=!1}var Ca=null,Pc=null,Al=null;function $p(){if(Al)return Al;var t,n=Pc,a=n.length,s,l="value"in Ca?Ca.value:Ca.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var m=a-t;for(s=1;s<=m&&n[a-s]===l[c-s];s++);return Al=l.slice(t,1<s?1-s:void 0)}function Rl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Cl(){return!0}function tm(){return!1}function Fn(t){function n(a,s,l,c,m){this._reactName=a,this._targetInst=l,this.type=s,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Cl:tm,this.isPropagationStopped=tm,this}return N(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Cl)},persist:function(){},isPersistent:Cl}),n}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=Fn(wa),mo=N({},wa,{view:0,detail:0}),KS=Fn(mo),zc,Ic,_o,Dl=N({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(zc=t.screenX-_o.screenX,Ic=t.screenY-_o.screenY):Ic=zc=0,_o=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),em=Fn(Dl),QS=N({},Dl,{dataTransfer:0}),JS=Fn(QS),$S=N({},mo,{relatedTarget:0}),Bc=Fn($S),ty=N({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),ey=Fn(ty),ny=N({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iy=Fn(ny),ay=N({},wa,{data:0}),nm=Fn(ay),sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ly(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=oy[t])?!!n[t]:!1}function Fc(){return ly}var uy=N({},mo,{key:function(t){if(t.key){var n=sy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ry[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cy=Fn(uy),fy=N({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=Fn(fy),hy=N({},wa,{submitter:0}),dy=Fn(hy),py=N({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),my=Fn(py),_y=N({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),gy=Fn(_y),vy=N({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=Fn(vy),yy=N({},wa,{newState:0,oldState:0,source:0}),xy=Fn(yy),My=[9,13,27,32],Hc=aa&&"CompositionEvent"in window,go=null;aa&&"documentMode"in document&&(go=document.documentMode);var Ey=aa&&"TextEvent"in window&&!go,am=aa&&(!Hc||go&&8<go&&11>=go),sm=" ",rm=!1;function om(t,n){switch(t){case"keyup":return My.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var nr=!1;function Ty(t,n){switch(t){case"compositionend":return lm(n);case"keypress":return n.which!==32?null:(rm=!0,sm);case"textInput":return t=n.data,t===sm&&rm?null:t;default:return null}}function by(t,n){if(nr)return t==="compositionend"||!Hc&&om(t,n)?(t=$p(),Al=Pc=Ca=null,nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return am&&n.locale!=="ko"?null:n.data;default:return null}}var Ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ay[t.type]:n==="textarea"}function cm(t,n,a,s){tr?er?er.push(s):er=[s]:tr=s,n=Uu(n,"onChange"),0<n.length&&(a=new wl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var vo=null,So=null;function Ry(t){Qg(t,0)}function Ul(t){var n=mn(t);if(Yp(n))return t}function fm(t,n){if(t==="change")return n}var hm=!1;if(aa){var Gc;if(aa){var Vc="oninput"in document;if(!Vc){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),Vc=typeof dm.oninput=="function"}Gc=Vc}else Gc=!1;hm=Gc&&(!document.documentMode||9<document.documentMode)}function pm(){vo&&(vo.detachEvent("onpropertychange",mm),So=vo=null)}function mm(t){if(t.propertyName==="value"&&Ul(So)){var n=[];cm(n,So,t,Nc(t)),Jp(Ry,n)}}function Cy(t,n,a){t==="focusin"?(pm(),vo=n,So=a,vo.attachEvent("onpropertychange",mm)):t==="focusout"&&pm()}function wy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(So)}function Dy(t,n){if(t==="click")return Ul(n)}function Uy(t,n){if(t==="input"||t==="change")return Ul(n)}function Ny(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:Ny;function yo(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var l=a[s];if(!Lt.call(n,l)||!ei(t[l],n[l]))return!1}return!0}function Xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gm(t,n){var a=_m(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=_m(a)}}function vm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?vm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Sm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xc(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Xc(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ly=aa&&"documentMode"in document&&11>=document.documentMode,ir=null,Yc=null,xo=null,qc=!1;function ym(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||ir==null||ir!==Xc(s)||(s=ir,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),xo&&yo(xo,s)||(xo=s,s=Uu(Yc,"onSelect"),0<s.length&&(n=new wl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ir)))}function _s(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ar={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},Wc={},xm={};aa&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function gs(t){if(Wc[t])return Wc[t];if(!ar[t])return t;var n=ar[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in xm)return Wc[t]=n[a];return t}var Mm=gs("animationend"),Em=gs("animationiteration"),Tm=gs("animationstart"),Oy=gs("transitionrun"),Py=gs("transitionstart"),zy=gs("transitioncancel"),bm=gs("transitionend"),Am=new Map,jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jc.push("scrollEnd");function Ei(t,n){Am.set(t,n),ln(n,[t])}var Iy=0;function sa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ri.identifierPrefix;var a=Iy++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Rm(t){if(t==null||typeof t=="string")return t;var n=null,a=Tr;if(a!==null)for(var s=0;s<a.length;s++){var l=t[a[s]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function ra(t,n){return t=Rm(t),n=Rm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Nl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],sr=0,Zc=0;function Ll(){for(var t=sr,n=Zc=sr=0;n<t;){var a=hi[n];hi[n++]=null;var s=hi[n];hi[n++]=null;var l=hi[n];hi[n++]=null;var c=hi[n];if(hi[n++]=null,s!==null&&l!==null){var m=s.pending;m===null?l.next=l:(l.next=m.next,m.next=l),s.pending=l}c!==0&&Cm(a,l,c)}}function Ol(t,n,a,s){hi[sr++]=t,hi[sr++]=n,hi[sr++]=a,hi[sr++]=s,Zc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Kc(t,n,a,s){return Ol(t,n,a,s),Pl(t)}function vs(t,n){return Ol(t,null,null,n),Pl(t)}function Cm(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,s=c.alternate,s!==null&&(s.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-Ln(a),t=c.hiddenUpdates,s=t[l],s===null?t[l]=[n]:s.push(n),n.lane=a|536870912),c):null}function Pl(t){if(50<Xo)throw Xo=0,Tu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var rr={};function By(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,s){return new By(t,n,a,s)}function Qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function wm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function zl(t,n,a,s,l,c){var m=0;if(s=t,typeof s=="function")Qc(s)&&(m=1);else if(typeof s=="string")m=hM(t,a,Bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Ht:return t=kn(31,a,n,l),t.elementType=Ht,t.lanes=c,t;case H:return Ss(a.children,l,c,n);case Q:m=8,l|=24;break;case rt:return t=kn(12,a,n,l|2),t.elementType=rt,t.lanes=c,t;case st:return t=kn(13,a,n,l),t.elementType=st,t.lanes=c,t;case Z:return t=kn(19,a,n,l),t.elementType=Z,t.lanes=c,t;case se:case F:return t=l|32,t=kn(30,a,n,t),t.elementType=F,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ut:m=10;break t;case mt:m=9;break t;case Y:m=11;break t;case gt:m=14;break t;case St:m=16,s=null;break t}m=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=kn(m,a,n,l),n.elementType=t,n.type=s,n.lanes=c,n}function Ss(t,n,a,s){return t=kn(7,t,s,n),t.lanes=a,t}function Jc(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function Dm(t){var n=kn(18,null,null,0);return n.stateNode=t,n}function $c(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Um=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=Um.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Tt(n)},Um.set(t,n),n)}return{value:t,source:n,stack:Tt(n)}}var or=[],lr=0,Il=null,Mo=0,pi=[],mi=0,Da=null,Bi=1,Fi="";function la(t,n){or[lr++]=Mo,or[lr++]=Il,Il=t,Mo=n}function Nm(t,n,a){pi[mi++]=Bi,pi[mi++]=Fi,pi[mi++]=Da,Da=t;var s=Bi;t=Fi;var l=32-Ln(s)-1;s&=~(1<<l),a+=1;var c=32-Ln(n)+l;if(30<c){var m=l-l%5;c=(s&(1<<m)-1).toString(32),s>>=m,l-=m,Bi=1<<32-Ln(n)+l|a<<l|s,Fi=c+t}else Bi=1<<c|a<<l|s,Fi=t}function Bl(t){t.return!==null&&(la(t,1),Nm(t,1,0))}function tf(t){for(;t===Il;)Il=or[--lr],or[lr]=null,Mo=or[--lr],or[lr]=null;for(;t===Da;)Da=pi[--mi],pi[mi]=null,Fi=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null}function Lm(t,n){pi[mi++]=Bi,pi[mi++]=Fi,pi[mi++]=Da,Bi=n.id,Fi=n.overflow,Da=t}var xn=null,Ze=null,ge=!1,Ua=null,_i=!1,ef=Error(r(519));function Na(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(di(n,t)),ef}function Om(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ct]=t,n[Xt]=s,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<Yo.length;a++)ye(Yo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),qp(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),jp(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||e0(n.textContent,a)?(s.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),s.onScroll!=null&&ye("scroll",n),s.onScrollEnd!=null&&ye("scrollend",n),s.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||Na(t,!0)}function Fl(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:xn=xn.return}}function ur(t){if(t!==xn)return!1;if(!ge)return Fl(t),ge=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Nh(t.type,t.memoizedProps)),a=!a),a&&Ze&&Na(t),Fl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=y0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=y0(t)}else n===27?(n=Ze,ja(t.type)?(t=Gh,Gh=null,Ze=t):Ze=n):Ze=xn?vi(t.stateNode.nextSibling):null;return!0}function ys(){Ze=xn=null,ge=!1}function nf(){var t=Ua;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Ua=null),t}function Eo(t){Ua===null?Ua=[t]:Ua.push(t)}var af=Kt(null),xs=null,ua=null;function La(t,n,a){ne(af,n._currentValue),n._currentValue=a}function ca(t){t._currentValue=af.current,Nt(af)}function Hl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function sf(t,n,a,s){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var m=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var L=0;L<n.length;L++)if(E.context===n[L]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),Hl(c.return,a,t),s||(m=null);break t}c=E.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(r(341));m.lanes|=a,c=m.alternate,c!==null&&(c.lanes|=a),Hl(m,a,t),m=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,m=l.alternate,m!==null&&(m.lanes|=a),Hl(l.return,a,t),m=l.child,m=m!==null?m.sibling:null):m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===t){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Ms(t,n,a,s){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(r(387));if(m=m.memoizedProps,m!==null){var E=l.type;ei(l.pendingProps.value,m.value)||(t!==null?t.push(E):t=[E])}}else if(l===We.current){if(m=l.alternate,m===null)throw Error(r(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Or):t=[Or])}l=l.return}return t!==null&&sf(n,t,a,s),n.flags|=262144,t!==null}function Gl(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Es(t){xs=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return Pm(xs,t)}function Vl(t,n){return xs===null&&Es(t),Pm(t,n)}function Pm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(r(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return a}var Fy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Hy=o.unstable_scheduleCallback,Gy=o.unstable_NormalPriority,un={$$typeof:ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new Fy,data:new Map,refCount:0}}function To(t){t.refCount--,t.refCount===0&&Hy(Gy,function(){t.controller.abort()})}function zm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var bo=null;function Vy(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Ao=null,of=0,Ts=0,cr=null;function Xy(t,n){if(Ao===null){var a=Ao=[];of=0,Ts=Eh(),cr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return of++,n.then(Im,Im),n}function Im(){if(--of===0&&(bo=null,Ao!==null)){cr!==null&&(cr.status="fulfilled");var t=Ao;Ao=null,Ts=0,cr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ky(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(s.status="rejected",s.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),s}var Bm=Mt.S;Mt.S=function(t,n){if(Dg=V(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Xy(t,n),bo!==null)for(var a=Cr;a!==null;)zm(a,bo),a=a.next;if(a=t.types,a!==null){for(var s=Cr;s!==null;)zm(s,a),s=s.next;if(Ts!==0){s=bo,s===null&&(s=bo=[]);for(var l=0;l<a.length;l++){var c=a[l];s.indexOf(c)===-1&&s.push(c)}}}Bm!==null&&Bm(t,n)};var bs=Kt(null);function lf(){var t=bs.current;return t!==null?t:qe.pooledCache}function Xl(t,n){n===null?ne(bs,bs.current):ne(bs,n.pool)}function Fm(){var t=lf();return t===null?null:{parent:un._currentValue,pool:t}}var fr=Error(r(460)),uf=Error(r(474)),kl=Error(r(542)),Yl={then:function(){}};function Hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xm(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=s}},function(s){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xm(t),t}throw Rs=n,fr}}function As(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Rs=a,fr):a}}var Rs=null;function Vm(){if(Rs===null)throw Error(r(459));var t=Rs;return Rs=null,t}function Xm(t){if(t===fr||t===kl)throw Error(r(483))}var hr=null,Ro=0;function ql(t){var n=Ro;return Ro+=1,hr===null&&(hr=[]),Gm(hr,t,n)}function Oa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Wl(t,n){throw n.$$typeof===X?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function km(t){function n(q,G){if(t){var J=q.deletions;J===null?(q.deletions=[G],q.flags|=16):J.push(G)}}function a(q,G){if(!t)return null;for(;G!==null;)n(q,G),G=G.sibling;return null}function s(q){for(var G=new Map;q!==null;)q.key===null?G.set(q.index,q):G.set(q.key,q),q=q.sibling;return G}function l(q,G){return q=oa(q,G),q.index=0,q.sibling=null,q}function c(q,G,J){return q.index=J,t?(J=q.alternate,J!==null?(J=J.index,J<G?(q.flags|=2,G):J):(q.flags|=134217730,G)):(q.flags|=1048576,G)}function m(q){return t&&q.alternate===null&&(q.flags|=134217730),q}function E(q,G,J,ht){return G===null||G.tag!==6?(G=Jc(J,q.mode,ht),G.return=q,G):(G=l(G,J),G.return=q,G)}function L(q,G,J,ht){var Ft=J.type;return Ft===H?(q=it(q,G,J.props.children,ht,J.key),Oa(q,J),q):G!==null&&(G.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===St&&As(Ft)===G.type)?(G=l(G,J.props),Oa(G,J),G.return=q,G):(G=zl(J.type,J.key,J.props,null,q.mode,ht),Oa(G,J),G.return=q,G)}function W(q,G,J,ht){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=$c(J,q.mode,ht),G.return=q,G):(G=l(G,J.children||[]),G.return=q,G)}function it(q,G,J,ht,Ft){return G===null||G.tag!==7?(G=Ss(J,q.mode,ht,Ft),G.return=q,G):(G=l(G,J),G.return=q,G)}function pt(q,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Jc(""+G,q.mode,J),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case C:return J=zl(G.type,G.key,G.props,null,q.mode,J),Oa(J,G),J.return=q,J;case R:return G=$c(G,q.mode,J),G.return=q,G;case St:return G=As(G),pt(q,G,J)}if(At(G)||at(G))return G=Ss(G,q.mode,J,null),G.return=q,G;if(typeof G.then=="function")return pt(q,ql(G),J);if(G.$$typeof===ut)return pt(q,Vl(q,G),J);Wl(q,G)}return null}function k(q,G,J,ht){var Ft=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ft!==null?null:E(q,G,""+J,ht);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case C:return J.key===Ft?L(q,G,J,ht):null;case R:return J.key===Ft?W(q,G,J,ht):null;case St:return J=As(J),k(q,G,J,ht)}if(At(J)||at(J))return Ft!==null?null:it(q,G,J,ht,null);if(typeof J.then=="function")return k(q,G,ql(J),ht);if(J.$$typeof===ut)return k(q,G,Vl(q,J),ht);Wl(q,J)}return null}function tt(q,G,J,ht,Ft){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return q=q.get(J)||null,E(G,q,""+ht,Ft);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case C:return q=q.get(ht.key===null?J:ht.key)||null,L(G,q,ht,Ft);case R:return q=q.get(ht.key===null?J:ht.key)||null,W(G,q,ht,Ft);case St:return ht=As(ht),tt(q,G,J,ht,Ft)}if(At(ht)||at(ht))return q=q.get(J)||null,it(G,q,ht,Ft,null);if(typeof ht.then=="function")return tt(q,G,J,ql(ht),Ft);if(ht.$$typeof===ut)return tt(q,G,J,Vl(G,ht),Ft);Wl(G,ht)}return null}function Dt(q,G,J,ht){for(var Ft=null,Te=null,Qt=G,ie=G=0,hn=null;Qt!==null&&ie<J.length;ie++){Qt.index>ie?(hn=Qt,Qt=null):hn=Qt.sibling;var Ae=k(q,Qt,J[ie],ht);if(Ae===null){Qt===null&&(Qt=hn);break}t&&Qt&&Ae.alternate===null&&n(q,Qt),G=c(Ae,G,ie),Te===null?Ft=Ae:Te.sibling=Ae,Te=Ae,Qt=hn}if(ie===J.length)return a(q,Qt),ge&&la(q,ie),Ft;if(Qt===null){for(;ie<J.length;ie++)Qt=pt(q,J[ie],ht),Qt!==null&&(G=c(Qt,G,ie),Te===null?Ft=Qt:Te.sibling=Qt,Te=Qt);return ge&&la(q,ie),Ft}for(Qt=s(Qt);ie<J.length;ie++)hn=tt(Qt,q,ie,J[ie],ht),hn!==null&&(t&&(Ae=hn.alternate,Ae!==null&&Qt.delete(Ae.key===null?ie:Ae.key)),G=c(hn,G,ie),Te===null?Ft=hn:Te.sibling=hn,Te=hn);return t&&Qt.forEach(function($a){return n(q,$a)}),ge&&la(q,ie),Ft}function kt(q,G,J,ht){if(J==null)throw Error(r(151));for(var Ft=null,Te=null,Qt=G,ie=G=0,hn=null,Ae=J.next();Qt!==null&&!Ae.done;ie++,Ae=J.next()){Qt.index>ie?(hn=Qt,Qt=null):hn=Qt.sibling;var $a=k(q,Qt,Ae.value,ht);if($a===null){Qt===null&&(Qt=hn);break}t&&Qt&&$a.alternate===null&&n(q,Qt),G=c($a,G,ie),Te===null?Ft=$a:Te.sibling=$a,Te=$a,Qt=hn}if(Ae.done)return a(q,Qt),ge&&la(q,ie),Ft;if(Qt===null){for(;!Ae.done;ie++,Ae=J.next())Ae=pt(q,Ae.value,ht),Ae!==null&&(G=c(Ae,G,ie),Te===null?Ft=Ae:Te.sibling=Ae,Te=Ae);return ge&&la(q,ie),Ft}for(Qt=s(Qt);!Ae.done;ie++,Ae=J.next())Ae=tt(Qt,q,ie,Ae.value,ht),Ae!==null&&(t&&(hn=Ae.alternate,hn!==null&&Qt.delete(hn.key===null?ie:hn.key)),G=c(Ae,G,ie),Te===null?Ft=Ae:Te.sibling=Ae,Te=Ae);return t&&Qt.forEach(function(TM){return n(q,TM)}),ge&&la(q,ie),Ft}function he(q,G,J,ht){if(typeof J=="object"&&J!==null&&J.type===H&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case C:t:{for(var Ft=J.key;G!==null;){if(G.key===Ft){if(Ft=J.type,Ft===H){if(G.tag===7){a(q,G.sibling),ht=l(G,J.props.children),Oa(ht,J),ht.return=q,q=ht;break t}}else if(G.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===St&&As(Ft)===G.type){a(q,G.sibling),ht=l(G,J.props),Oa(ht,J),ht.return=q,q=ht;break t}a(q,G);break}else n(q,G);G=G.sibling}J.type===H?(ht=Ss(J.props.children,q.mode,ht,J.key),Oa(ht,J),ht.return=q,q=ht):(ht=zl(J.type,J.key,J.props,null,q.mode,ht),Oa(ht,J),ht.return=q,q=ht)}return m(q);case R:t:{for(Ft=J.key;G!==null;){if(G.key===Ft)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(q,G.sibling),ht=l(G,J.children||[]),ht.return=q,q=ht;break t}else{a(q,G);break}else n(q,G);G=G.sibling}ht=$c(J,q.mode,ht),ht.return=q,q=ht}return m(q);case St:return J=As(J),he(q,G,J,ht)}if(At(J))return Dt(q,G,J,ht);if(at(J)){if(Ft=at(J),typeof Ft!="function")throw Error(r(150));return J=Ft.call(J),kt(q,G,J,ht)}if(typeof J.then=="function")return he(q,G,ql(J),ht);if(J.$$typeof===ut)return he(q,G,Vl(q,J),ht);Wl(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(q,G.sibling),ht=l(G,J),ht.return=q,q=ht):(a(q,G),ht=Jc(J,q.mode,ht),ht.return=q,q=ht),m(q)):a(q,G)}return function(q,G,J,ht){try{Ro=0;var Ft=he(q,G,J,ht);return hr=null,Ft}catch(Qt){if(Qt===fr||Qt===kl)throw Qt;var Te=kn(29,Qt,null,q.mode);return Te.lanes=ht,Te.return=q,Te}finally{}}}var Cs=km(!0),Ym=km(!1),Pa=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Oe&2)!==0){var l=s.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),s.pending=n,n=Pl(t),Cm(t,null,a),n}return Ol(t,s,n,a),Pl(t)}function Co(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,j(t,a)}}function hf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=m:c=c.next=m,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var df=!1;function wo(){if(df){var t=cr;if(t!==null)throw t}}function Do(t,n,a,s){df=!1;var l=t.updateQueue;Pa=!1;var c=l.firstBaseUpdate,m=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var L=E,W=L.next;L.next=null,m===null?c=W:m.next=W,m=L;var it=t.alternate;it!==null&&(it=it.updateQueue,E=it.lastBaseUpdate,E!==m&&(E===null?it.firstBaseUpdate=W:E.next=W,it.lastBaseUpdate=L))}if(c!==null){var pt=l.baseState;m=0,it=W=L=null,E=c;do{var k=E.lane&-536870913,tt=k!==E.lane;if(tt?(Ee&k)===k:(s&k)===k){k!==0&&k===Ts&&(df=!0),it!==null&&(it=it.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Dt=t,kt=E;k=n;var he=a;switch(kt.tag){case 1:if(Dt=kt.payload,typeof Dt=="function"){pt=Dt.call(he,pt,k);break t}pt=Dt;break t;case 3:Dt.flags=Dt.flags&-65537|128;case 0:if(Dt=kt.payload,k=typeof Dt=="function"?Dt.call(he,pt,k):Dt,k==null)break t;pt=N({},pt,k);break t;case 2:Pa=!0}}k=E.callback,k!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=l.callbacks,tt===null?l.callbacks=[k]:tt.push(k))}else tt={lane:k,tag:E.tag,payload:E.payload,callback:E.callback,next:null},it===null?(W=it=tt,L=pt):it=it.next=tt,m|=k;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;tt=E,E=tt.next,tt.next=null,l.lastBaseUpdate=tt,l.shared.pending=null}}while(!0);it===null&&(L=pt),l.baseState=L,l.firstBaseUpdate=W,l.lastBaseUpdate=it,c===null&&(l.shared.lanes=0),ka|=m,t.lanes=m,t.memoizedState=pt}}function qm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Wm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)qm(a[t],n)}var Ba=Kt(null),jl=Kt(0);function jm(t,n){t=ma,ne(jl,t),ne(Ba,n),ma=t|n.baseLanes}function pf(){ne(jl,ma),ne(Ba,Ba.current)}function mf(){ma=jl.current,Nt(Ba),Nt(jl)}var An=Kt(null),Pn=null;function Fa(t){var n=t.alternate;ne(Rn,Rn.current&1),ne(An,t),Pn===null&&(n===null||Ba.current!==null||n.memoizedState!==null)&&(Pn=t)}function _f(t){ne(Rn,Rn.current),ne(An,t),Pn===null&&(Pn=t)}function Zm(t){t.tag===22?(ne(Rn,Rn.current),ne(An,t),Pn===null&&(Pn=t)):Ha()}function Ha(){ne(Rn,Rn.current),ne(An,An.current)}function ni(t){Nt(An),Pn===t&&(Pn=null),Nt(Rn)}var Rn=Kt(0);function Uo(t,n){ne(An,An.current),ne(Rn,n)}function gf(t){Nt(Rn),Nt(An),Pn===t&&(Pn=null)}function Zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Fh(a)||Hh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,fe=null,Ve=null,cn=null,Kl=!1,dr=!1,ws=!1,Ql=0,No=0,pr=null,Yy=0;function nn(){throw Error(r(321))}function vf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function Sf(t,n,a,s,l,c){return fa=c,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=t===null||t.memoizedState===null?N_:L_,ws=!1,c=a(s,l),ws=!1,dr&&(c=Qm(n,a,s,l)),Km(t),c}function Km(t){Mt.H=au;var n=Ve!==null&&Ve.next!==null;if(fa=0,cn=Ve=fe=null,Kl=!1,No=0,pr=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&Gl(t)&&(fn=!0))}function Qm(t,n,a,s){fe=t;var l=0;do{if(dr&&(pr=null),No=0,dr=!1,25<=l)throw Error(r(301));if(l+=1,cn=Ve=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Mt.H=$y,c=n(a,s)}while(dr);return c}function qy(){var t=Mt.H,n=t.useState()[0];return n=typeof n.then=="function"?Lo(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(fe.flags|=1024),n}function yf(){var t=Ql!==0;return Ql=0,t}function xf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Mf(t){if(Kl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Kl=!1}fa=0,cn=Ve=fe=null,dr=!1,No=Ql=0,pr=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?fe.memoizedState=cn=t:cn=cn.next=t,cn}function on(){if(Ve===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=cn===null?fe.memoizedState:cn.next;if(n!==null)cn=n,Ve=t;else{if(t===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},cn===null?fe.memoizedState=cn=t:cn=cn.next=t}return cn}function Jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(t){var n=No;return No+=1,pr===null&&(pr=[]),t=Gm(pr,t,n),n=fe,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?N_:L_),t}function $l(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Lo(t);if(t.$$typeof===ct)return;if(t.$$typeof===ut)return bn(t)}throw Error(r(438,String(t)))}function Ef(t){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=fe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Jl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=be;return n.index++,a}function ha(t,n){return typeof n=="function"?n(t):n}function tu(t){var n=on();return Tf(n,Ve,t)}function Tf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var l=t.baseQueue,c=s.pending;if(c!==null){if(l!==null){var m=l.next;l.next=c.next,c.next=m}n.baseQueue=l=c,s.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var E=m=null,L=null,W=n,it=!1;do{var pt=W.lane&-536870913;if(pt!==W.lane?(Ee&pt)===pt:(fa&pt)===pt){var k=W.revertLane;if(k===0)L!==null&&(L=L.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),pt===Ts&&(it=!0);else if((fa&k)===k){W=W.next,k===Ts&&(it=!0);continue}else pt={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},L===null?(E=L=pt,m=c):L=L.next=pt,fe.lanes|=k,ka|=k;pt=W.action,ws&&a(c,pt),c=W.hasEagerState?W.eagerState:a(c,pt)}else k={lane:pt,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},L===null?(E=L=k,m=c):L=L.next=k,fe.lanes|=pt,ka|=pt;W=W.next}while(W!==null&&W!==n);if(L===null?m=c:L.next=E,!ei(c,t.memoizedState)&&(fn=!0,it&&(a=cr,a!==null)))throw a;t.memoizedState=c,t.baseState=m,t.baseQueue=L,s.lastRenderedState=c}return l===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function bf(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var m=l=l.next;do c=t(c,m.action),m=m.next;while(m!==l);ei(c,n.memoizedState)||(fn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,s]}function Jm(t,n,a){var s=fe,l=on(),c=ge;if(c){if(a===void 0)throw Error(r(407));a=a()}else a=n();var m=!ei((Ve||l).memoizedState,a);if(m&&(l.memoizedState=a,fn=!0),l=l.queue,Cf(e_.bind(null,s,l,t),[t]),t=l.getSnapshot!==n||m||cn!==null&&(cn.memoizedState.tag&1)!==0,mr(t?9:8,{destroy:void 0},t_.bind(null,s,l,a,n),null),t){if(s.flags|=2048,qe===null)throw Error(r(349));c||(fa&127)!==0||$m(s,n,a)}return a}function $m(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Jl(),fe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function t_(t,n,a,s){n.value=a,n.getSnapshot=s,n_(n)&&i_(t)}function e_(t,n,a){return a(function(){n_(n)&&i_(t)})}function n_(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function i_(t){var n=vs(t,2);n!==null&&jn(n,t,2)}function Af(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),ws){pn(!0);try{a()}finally{pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},n}function a_(t,n,a,s){return t.baseState=a,Tf(t,Ve,typeof s=="function"?s:ha)}function Wy(t,n,a,s,l){if(iu(t))throw Error(r(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};Mt.T!==null?a(!0):c.isTransition=!1,s(c),a=n.pending,a===null?(c.next=n.pending=c,s_(n,c)):(c.next=a.next,n.pending=a.next=c)}}function s_(t,n){var a=n.action,s=n.payload,l=t.state;if(n.isTransition){var c=Mt.T,m={};m.types=c!==null?c.types:null,Mt.T=m;try{var E=a(l,s),L=Mt.S;L!==null&&L(m,E),r_(t,n,E)}catch(W){Rf(t,n,W)}finally{c!==null&&m.types!==null&&(c.types=m.types),Mt.T=c}}else try{c=a(l,s),r_(t,n,c)}catch(W){Rf(t,n,W)}}function r_(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){o_(t,n,s)},function(s){return Rf(t,n,s)}):o_(t,n,a)}function o_(t,n,a){n.status="fulfilled",n.value=a,l_(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,s_(t,a)))}function Rf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,l_(n),n=n.next;while(n!==s)}t.action=null}function l_(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function u_(t,n){return n}function c_(t,n){if(ge){var a=qe.formState;if(a!==null){t:{var s=fe;if(ge){if(Ze){e:{for(var l=Ze,c=_i;l.nodeType!==8;){if(!c){l=null;break e}if(l=vi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ze=vi(l.nextSibling),s=l.data==="F!";break t}}Na(s)}s=!1}s&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:u_,lastRenderedState:n},a.queue=s,a=w_.bind(null,fe,s),s.dispatch=a,s=Af(!1),c=Lf.bind(null,fe,!1,s.queue),s=Hn(),l={state:n,dispatch:null,action:t,pending:null},s.queue=l,a=Wy.bind(null,fe,l,c,a),l.dispatch=a,s.memoizedState=t,[n,a,!1]}function f_(t){var n=on();return h_(n,Ve,t)}function h_(t,n,a){if(n=Tf(t,n,u_)[0],t=tu(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Lo(n)}catch(m){throw m===fr?kl:m}else s=n;n=on();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,mr(9,{destroy:void 0},jy.bind(null,l,a),null)),[s,c,t]}function jy(t,n){t.action=n}function d_(t){var n=on(),a=Ve;if(a!==null)return h_(n,a,t);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function mr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Jl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function p_(){return on().memoizedState}function eu(t,n,a,s){var l=Hn();fe.flags|=t,l.memoizedState=mr(1|n,{destroy:void 0},a,s===void 0?null:s)}function nu(t,n,a,s){var l=on();s=s===void 0?null:s;var c=l.memoizedState.inst;Ve!==null&&s!==null&&vf(s,Ve.memoizedState.deps)?l.memoizedState=mr(n,c,a,s):(fe.flags|=t,l.memoizedState=mr(1|n,c,a,s))}function m_(t,n){eu(8390656,8,t,n)}function Cf(t,n){nu(2048,8,t,n)}function Zy(t){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Jl(),fe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function __(t){var n=on().memoizedState;return Zy({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function g_(t,n){return nu(4,2,t,n)}function v_(t,n){return nu(4,4,t,n)}function S_(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function y_(t,n,a){a=a!=null?a.concat([t]):null,nu(4,4,S_.bind(null,n,t),a)}function wf(){}function x_(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&vf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function M_(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&vf(n,s[1]))return s[0];if(s=t(),ws){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s}function Df(t,n,a){return a===void 0||(fa&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Ng(),fe.lanes|=t,ka|=t,a)}function E_(t,n,a,s){return ei(a,n)?a:Ba.current!==null?(t=Df(t,a,s),ei(t,n)||(fn=!0),t):(fa&106)===0||(fa&1073741824)!==0&&(Ee&261930)===0?(fn=!0,t.memoizedState=a):(t=Ng(),fe.lanes|=t,ka|=t,n)}function T_(t,n,a,s,l){var c=Yt.p;Yt.p=c!==0&&8>c?c:8;var m=Mt.T,E={};E.types=m!==null?m.types:null,Mt.T=E,Lf(t,!1,n,a);try{var L=l(),W=Mt.S;if(W!==null&&W(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var it=ky(L,s);Oo(t,n,it,ri(t))}else Oo(t,n,s,ri(t))}catch(pt){Oo(t,n,{then:function(){},status:"rejected",reason:pt},ri())}finally{Yt.p=c,m!==null&&E.types!==null&&(m.types=E.types),Mt.T=m}}function Ky(){}function Uf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var l=b_(t).queue;T_(t,l,n,B,a===null?Ky:function(){return A_(t),a(s)})}function b_(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:B},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function A_(t){var n=b_(t);n.next===null&&(n=t.alternate.memoizedState),Oo(t,n.next.queue,{},ri())}function Nf(){return bn(Or)}function R_(){return on().memoizedState}function C_(){return on().memoizedState}function Qy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=za(a);var s=Ia(n,t,a);s!==null&&(jn(s,n,a),Co(s,n,a)),n={cache:rf()},t.payload=n;return}n=n.return}}function Jy(t,n,a){var s=ri();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},iu(t)?D_(n,a):(a=Kc(t,n,a,s),a!==null&&(jn(a,t,s),U_(a,n,s)))}function w_(t,n,a){var s=ri();Oo(t,n,a,s)}function Oo(t,n,a,s){var l={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(iu(t))D_(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var m=n.lastRenderedState,E=c(m,a);if(l.hasEagerState=!0,l.eagerState=E,ei(E,m))return Ol(t,n,l,0),qe===null&&Ll(),!1}catch{}finally{}if(a=Kc(t,n,l,s),a!==null)return jn(a,t,s),U_(a,n,s),!0}return!1}function Lf(t,n,a,s){if(s={lane:2,revertLane:Eh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},iu(t)){if(n)throw Error(r(479))}else n=Kc(t,a,s,2),n!==null&&jn(n,t,2)}function iu(t){var n=t.alternate;return t===fe||n!==null&&n===fe}function D_(t,n){dr=Kl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function U_(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,j(t,a)}}var au={readContext:bn,use:$l,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn,useEffectEvent:nn},N_={readContext:bn,use:$l,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:m_,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,eu(4194308,4,S_.bind(null,n,t),a)},useLayoutEffect:function(t,n){return eu(4194308,4,t,n)},useInsertionEffect:function(t,n){eu(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var s=t();if(ws){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Hn();if(a!==void 0){var l=a(n);if(ws){pn(!0);try{a(n)}finally{pn(!1)}}}else l=n;return s.memoizedState=s.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},s.queue=t,t=t.dispatch=Jy.bind(null,fe,t),[s.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=Af(t);var n=t.queue,a=w_.bind(null,fe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:wf,useDeferredValue:function(t,n){var a=Hn();return Df(a,t,n)},useTransition:function(){var t=Af(!1);return t=T_.bind(null,fe,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=fe,l=Hn();if(ge){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(Ee&127)!==0||$m(s,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,m_(e_.bind(null,s,c,t),[t]),s.flags|=2048,mr(9,{destroy:void 0},t_.bind(null,s,c,a,n),null),a},useId:function(){var t=Hn(),n=qe.identifierPrefix;if(ge){var a=Fi,s=Bi;a=(s&~(1<<32-Ln(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ql++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Yy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Nf,useFormState:c_,useActionState:c_,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Lf.bind(null,fe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ef,useCacheRefresh:function(){return Hn().memoizedState=Qy.bind(null,fe)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},L_={readContext:bn,use:$l,useCallback:x_,useContext:bn,useEffect:Cf,useImperativeHandle:y_,useInsertionEffect:g_,useLayoutEffect:v_,useMemo:M_,useReducer:tu,useRef:p_,useState:function(){return tu(ha)},useDebugValue:wf,useDeferredValue:function(t,n){var a=on();return E_(a,Ve.memoizedState,t,n)},useTransition:function(){var t=tu(ha)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:Jm,useId:R_,useHostTransitionStatus:Nf,useFormState:f_,useActionState:f_,useOptimistic:function(t,n){var a=on();return a_(a,Ve,t,n)},useMemoCache:Ef,useCacheRefresh:C_,useEffectEvent:__},$y={readContext:bn,use:$l,useCallback:x_,useContext:bn,useEffect:Cf,useImperativeHandle:y_,useInsertionEffect:g_,useLayoutEffect:v_,useMemo:M_,useReducer:bf,useRef:p_,useState:function(){return bf(ha)},useDebugValue:wf,useDeferredValue:function(t,n){var a=on();return Ve===null?Df(a,t,n):E_(a,Ve.memoizedState,t,n)},useTransition:function(){var t=bf(ha)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:Jm,useId:R_,useHostTransitionStatus:Nf,useFormState:d_,useActionState:d_,useOptimistic:function(t,n){var a=on();return Ve!==null?a_(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ef,useCacheRefresh:C_,useEffectEvent:__};function Of(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:N({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Pf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ri(),l=za(s);l.payload=n,a!=null&&(l.callback=a),n=Ia(t,l,s),n!==null&&(jn(n,t,s),Co(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ri(),l=za(s);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ia(t,l,s),n!==null&&(jn(n,t,s),Co(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),s=za(a);s.tag=2,n!=null&&(s.callback=n),n=Ia(t,s,a),n!==null&&(jn(n,t,a),Co(n,t,a))}};function O_(t,n,a,s,l,c,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,c,m):n.prototype&&n.prototype.isPureReactComponent?!yo(a,s)||!yo(l,c):!0}function P_(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Pf.enqueueReplaceState(n,n.state,null)}function Ds(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=N({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function z_(t){Nl(t)}function I_(t){console.error(t)}function B_(t){Nl(t)}function su(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function F_(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function zf(t,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){su(t,n)},a}function H_(t){return t=za(t),t.tag=3,t}function G_(t,n,a,s){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=s.value;t.payload=function(){return l(c)},t.callback=function(){F_(n,a,s)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){F_(n,a,s),typeof l!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function tx(t,n,a,s,l){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ms(n,a,l,!0),a=An.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Pn===null?Au():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=l,s===Yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),yh(t,s,l)),!1;case 22:return a.flags|=65536,s===Yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),yh(t,s,l)),!1}throw Error(r(435,a.tag))}return yh(t,s,l),Au(),!1}if(ge)return n=An.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,s!==ef&&(t=Error(r(422),{cause:s}),Eo(di(t,a)))):(s!==ef&&(n=Error(r(423),{cause:s}),Eo(di(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,s=di(s,a),l=zf(t.stateNode,s,l),hf(t,l),an!==4&&(an=2)),!1;var c=Error(r(520),{cause:s});if(c=di(c,a),Vo===null?Vo=[c]:Vo.push(c),an!==4&&(an=2),n===null)return!0;s=di(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=zf(a.stateNode,s,t),hf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ya===null||!Ya.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=H_(l),G_(l,t,a,s),hf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var If=Error(r(461)),fn=!1;function _n(t,n,a,s){n.child=t===null?Ym(n,null,a,s):Cs(n,t.child,a,s)}function V_(t,n,a,s,l){a=a.render;var c=n.ref;if("ref"in s){var m={};for(var E in s)E!=="ref"&&(m[E]=s[E])}else m=s;return Es(n),s=Sf(t,n,a,m,c,l),E=yf(),t!==null&&!fn?(xf(t,n,l),da(t,n,l)):(ge&&E&&Bl(n),n.flags|=1,_n(t,n,s,l),n.child)}function X_(t,n,a,s,l){if(t===null){var c=a.type;return typeof c=="function"&&!Qc(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,k_(t,n,c,s,l)):(t=zl(a.type,null,s,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!Yf(t,l)){var m=c.memoizedProps;if(a=a.compare,a=a!==null?a:yo,a(m,s)&&t.ref===n.ref)return da(t,n,l)}return n.flags|=1,t=oa(c,s),t.ref=n.ref,t.return=n,n.child=t}function k_(t,n,a,s,l){if(t!==null){var c=t.memoizedProps;if(yo(c,s)&&t.ref===n.ref)if(fn=!1,n.pendingProps=s=c,Yf(t,l))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,da(t,n,l)}return Bf(t,n,a,s,l)}function Y_(t,n,a,s){var l=s.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(s=n.child=t.child,l=0;s!==null;)l=l|s.lanes|s.childLanes,s=s.sibling;s=l&~c}else s=0,n.child=null;return q_(t,n,c,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Xl(n,c!==null?c.cachePool:null),c!==null?jm(n,c):pf(),Zm(n);else return s=n.lanes=536870912,q_(t,n,c!==null?c.baseLanes|a:a,a,s)}else c!==null?(Xl(n,c.cachePool),jm(n,c),Ha(),n.memoizedState=null):(t!==null&&Xl(n,null),pf(),Ha());return _n(t,n,l,a),n.child}function Po(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function q_(t,n,a,s,l){var c=lf();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Xl(n,null),pf(),Zm(n),t!==null&&Ms(t,n,s,!0),n.childLanes=l,null}function ru(t,n){return n=ou({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function W_(t,n,a){return Cs(n,t.child,null,a),t=ru(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function ex(t,n,a){var s=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ge){if(s.mode==="hidden")return t=ru(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Po(null,t);if(_f(n),(t=Ze)?(t=S0(t,_i),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Dm(t),a.return=n,n.child=a,xn=n,Ze=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return ru(n,s)}var c=t.memoizedState;if(c!==null){var m=c.dehydrated;if(_f(n),l)if(n.flags&256)n.flags&=-257,n=W_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||Ms(t,n,a,!1),l=(a&t.childLanes)!==0,fn||l){if(Ba.current===null){if(s=qe,s!==null&&(m=ot(s,a),m!==0&&m!==c.retryLane))throw c.retryLane=m,vs(t,m),jn(s,t,m),If;Au()}n=W_(t,n,a)}else t=c.treeContext,Ze=vi(m.nextSibling),xn=n,ge=!0,Ua=null,_i=!1,t!==null&&Lm(n,t),n=ru(n,s),n.flags|=134221824;return n}return t=oa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function _r(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Bf(t,n,a,s,l){return Es(n),a=Sf(t,n,a,s,void 0,l),s=yf(),t!==null&&!fn?(xf(t,n,l),da(t,n,l)):(ge&&s&&Bl(n),n.flags|=1,_n(t,n,a,l),n.child)}function j_(t,n,a,s,l,c){return Es(n),n.updateQueue=null,a=Qm(n,s,a,l),Km(t),s=yf(),t!==null&&!fn?(xf(t,n,c),da(t,n,c)):(ge&&s&&Bl(n),n.flags|=1,_n(t,n,a,c),n.child)}function Z_(t,n,a,s,l){if(Es(n),n.stateNode===null){var c=rr,m=a.contextType;typeof m=="object"&&m!==null&&(c=bn(m)),c=new a(s,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Pf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=s,c.state=n.memoizedState,c.refs={},cf(n),m=a.contextType,c.context=typeof m=="object"&&m!==null?bn(m):rr,c.state=n.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(Of(n,a,m,s),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&Pf.enqueueReplaceState(c,c.state,null),Do(n,s,c,l),wo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,L=Ds(a,E);c.props=L;var W=c.context,it=a.contextType;m=rr,typeof it=="object"&&it!==null&&(m=bn(it));var pt=a.getDerivedStateFromProps;it=typeof pt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,it||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||W!==m)&&P_(n,c,s,m),Pa=!1;var k=n.memoizedState;c.state=k,Do(n,s,c,l),wo(),W=n.memoizedState,E||k!==W||Pa?(typeof pt=="function"&&(Of(n,a,pt,s),W=n.memoizedState),(L=Pa||O_(n,a,L,s,k,W,m))?(it||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=W),c.props=s,c.state=W,c.context=m,s=L):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{c=n.stateNode,ff(t,n),m=n.memoizedProps,it=Ds(a,m),c.props=it,pt=n.pendingProps,k=c.context,W=a.contextType,L=rr,typeof W=="object"&&W!==null&&(L=bn(W)),E=a.getDerivedStateFromProps,(W=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==pt||k!==L)&&P_(n,c,s,L),Pa=!1,k=n.memoizedState,c.state=k,Do(n,s,c,l),wo();var tt=n.memoizedState;m!==pt||k!==tt||Pa||t!==null&&t.dependencies!==null&&Gl(t.dependencies)?(typeof E=="function"&&(Of(n,a,E,s),tt=n.memoizedState),(it=Pa||O_(n,a,it,s,k,tt,L)||t!==null&&t.dependencies!==null&&Gl(t.dependencies))?(W||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(s,tt,L),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(s,tt,L)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&k===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&k===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=tt),c.props=s,c.state=tt,c.context=L,s=it):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&k===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&k===t.memoizedState||(n.flags|=1024),s=!1)}return c=s,_r(t,n),s=(n.flags&128)!==0,c||s?(c=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&s?(n.child=Cs(n,t.child,null,l),n.child=Cs(n,null,a,l)):_n(t,n,a,l),n.memoizedState=c.state,t=n.child):t=da(t,n,l),t}function K_(t,n,a,s){return ys(),n.flags|=256,_n(t,n,a,s),n.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(t){return{baseLanes:t,cachePool:Fm()}}function Gf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function Q_(t,n,a){var s=n.pendingProps,l=!1,c=(n.flags&128)!==0,m;if((m=c)||(m=t!==null&&t.memoizedState===null?!1:(Rn.current&2)!==0),m&&(l=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,t===null){if(ge){if(l?Fa(n):Ha(),(t=Ze)?(t=S0(t,_i),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Dm(t),a.return=n,n.child=a,xn=n,Ze=null)):t=null,t===null)throw Na(n);return Hh(t)?n.lanes=32:n.lanes=536870912,null}return c=s.children,s=s.fallback,l?(Ha(),l=n.mode,c=ou({mode:"hidden",children:c},l),s=Ss(s,l,a,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=Hf(a),s.childLanes=Gf(t,m,a),n.memoizedState=Ff,Po(null,s)):(Fa(n),Vf(n,c))}var E=t.memoizedState;if(E!==null){var L=E.dehydrated;if(L!==null)return nx(t,n,c,m,s,L,E,a)}return l?(Ha(),l=s.fallback,c=n.mode,E=t.child,L=E.sibling,s=oa(E,{mode:"hidden",children:s.children}),s.subtreeFlags=E.subtreeFlags&1206910976,L!==null?l=oa(L,l):(l=Ss(l,c,a,null),l.flags|=2),l.return=n,s.return=n,s.sibling=l,n.child=s,Po(null,s),s=n.child,l=t.child.memoizedState,l===null?l=Hf(a):(c=l.cachePool,c!==null?(E=un._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Fm(),l={baseLanes:l.baseLanes|a,cachePool:c}),s.memoizedState=l,s.childLanes=Gf(t,m,a),n.memoizedState=Ff,Po(t.child,s)):(Fa(n),a=t.child,t=a.sibling,a=oa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(m=n.deletions,m===null?(n.deletions=[t],n.flags|=16):m.push(t)),n.child=a,n.memoizedState=null,a)}function Vf(t,n){return n=ou({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ou(t,n){return t=kn(22,t,null,n),t.lanes=0,t}function lu(t,n,a){return Cs(n,t.child,null,a),t=Vf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function nx(t,n,a,s,l,c,m,E){if(a)return n.flags&256?(Fa(n),n.flags&=-257,lu(t,n,E)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,null):(Ha(),c=l.fallback,m=n.mode,l=ou({mode:"visible",children:l.children},m),c=Ss(c,m,E,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Cs(n,t.child,null,E),l=n.child,l.memoizedState=Hf(E),l.childLanes=Gf(t,s,E),n.memoizedState=Ff,Po(null,l));if(Fa(n),Hh(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var L=s.dgst;return s=L,s!==""&&(l=Error(r(419)),l.stack="",l.digest=s,Eo({value:l,source:null,stack:null})),lu(t,n,E)}if(fn||Ms(t,n,E,!1),s=(E&t.childLanes)!==0,fn||s){if(Ba.current!==null)return lu(t,n,E);if(s=qe,s!==null&&(l=ot(s,E),l!==0&&l!==m.retryLane))throw m.retryLane=l,vs(t,l),jn(s,t,l),If;return Fh(c)||Au(),lu(t,n,E)}return Fh(c)?(n.flags|=192,n.child=t.child,null):(t=m.treeContext,Ze=vi(c.nextSibling),xn=n,ge=!0,Ua=null,_i=!1,t!==null&&Lm(n,t),n=Vf(n,l.children),n.flags|=134221824,n)}function J_(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Hl(t.return,n,a)}function $_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&Zl(a)===null&&(n=t),t=t.sibling}return n}function uu(t,n,a,s,l,c){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:l,treeForkCount:c}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=s,m.tail=a,m.tailMode=l,m.treeForkCount=c)}function Xf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function kf(t,n,a){var s=n.pendingProps,l=s.revealOrder,c=s.tail;s=s.children;var m=Rn.current;if(n.flags&128)return Uo(n,m),null;var E=(m&2)!==0;if(E?(m=m&1|2,n.flags|=128):m&=1,Uo(n,m),l==="backwards"&&t!==null?(Xf(t),_n(t,n,s,a),Xf(t)):_n(t,n,s,a),s=ge?Mo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&J_(t,a,n);else if(t.tag===19)J_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=$_(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,Xf(n)),uu(n,!0,l,null,c,s);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Zl(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}uu(n,!0,a,null,c,s);break;case"together":uu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=$_(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),uu(n,!1,l,a,c,s)}return n.child}function tg(t,n,a){var s=n.pendingProps;return La(n,n.type,s.value),_n(t,n,s.children,a),n.child}function da(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ms(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=oa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=oa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Yf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Gl(t)))}function ix(t,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),La(n,un,t.memoizedState.cache),ys();break;case 27:case 5:nt(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,_f(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Fa(n),n.flags|=128,null;s=Ms(t,n,a,!1);var l=n.child.childLanes;return s||(a&l)!==0?Q_(t,n,a):(Fa(n),t=da(t,n,a),t!==null?t.sibling:null)}Fa(n);break;case 19:if(n.flags&128)return kf(t,n,a);if(l=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Ms(t,n,a,!1),s=(a&n.childLanes)!==0),l){if(s)return kf(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Uo(n,Rn.current),s)break;return null;case 22:return n.lanes=0,Y_(t,n,a,n.pendingProps);case 24:La(n,un,t.memoizedState.cache)}return da(t,n,a)}function eg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Yf(t,a)&&(n.flags&128)===0)return fn=!1,ix(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,ge&&(n.flags&1048576)!==0&&Nm(n,Mo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=As(n.elementType),n.type=t,typeof t=="function")Qc(t)?(s=Ds(t,s),n.tag=1,n=Z_(null,n,t,s,a)):(n.tag=0,n=Bf(null,n,t,s,a));else{if(t!=null){var l=t.$$typeof;if(l===Y){n.tag=11,n=V_(null,n,t,s,a);break t}else if(l===gt){n.tag=14,n=X_(null,n,t,s,a);break t}else if(l===ut){n.tag=10,n.type=t,n=tg(null,n,a);break t}}throw n=Ut(t)||t,Error(r(306,n,""))}}return n;case 0:return Bf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,l=Ds(s,n.pendingProps),Z_(t,n,s,l,a);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var c=n.memoizedState;l=c.element,ff(t,n),Do(n,s,null,a);var m=n.memoizedState;if(s=m.cache,La(n,un,s),s!==c.cache&&sf(n,[un],a,!0),wo(),s=m.element,c.isDehydrated)if(c={element:s,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=K_(t,n,s,a);break t}else if(s!==l){l=di(Error(r(424)),n),Eo(l),n=K_(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=vi(t.firstChild),xn=n,ge=!0,Ua=null,_i=!0,a=Ym(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(ys(),s===l){n=da(t,n,a);break t}_n(t,n,s,a)}n=n.child}return n;case 26:return _r(t,n),t===null?(a=A0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ge||(n.stateNode=s0(n.type,n.pendingProps,Ye.current,n)):n.memoizedState=A0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&ge&&(s=n.stateNode=M0(n.type,n.pendingProps,Ye.current),xn=n,_i=!0,l=Ze,ja(n.type)?(Gh=l,Ze=vi(s.firstChild)):Ze=l),_n(t,n,n.pendingProps.children,a),_r(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ge&&((l=s=Ze)&&(s=Qx(s,n.type,n.pendingProps,_i),s!==null?(n.stateNode=s,xn=n,Ze=vi(s.firstChild),_i=!1,l=!0):l=!1),l||Na(n)),nt(n),l=n.type,c=n.pendingProps,m=t!==null?t.memoizedProps:null,s=c.children,Nh(l,c)?s=null:m!==null&&Nh(l,m)&&(n.flags|=32),n.memoizedState!==null&&(l=Sf(t,n,qy,null,null,a),Or._currentValue=l),_r(t,n),_n(t,n,s,a),n.child;case 6:return t===null&&ge&&((t=a=Ze)&&(a=Jx(a,n.pendingProps,_i),a!==null?(n.stateNode=a,xn=n,Ze=null,t=!0):t=!1),t||Na(n)),null;case 13:return Q_(t,n,a);case 4:return U(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Cs(n,null,s,a):_n(t,n,s,a),n.child;case 11:return V_(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,_r(t,n),_n(t,n,s,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return tg(t,n,a);case 9:return l=n.type._context,s=n.pendingProps.children,Es(n),l=bn(l),s=s(l),n.flags|=1,_n(t,n,s,a),n.child;case 14:return X_(t,n,n.type,n.pendingProps,a);case 15:return k_(t,n,n.type,n.pendingProps,a);case 19:return kf(t,n,a);case 31:return ex(t,n,a);case 22:return Y_(t,n,a,n.pendingProps);case 24:return Es(n),s=bn(un),t===null?(l=lf(),l===null&&(l=qe,c=rf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:s,cache:l},cf(n),La(n,un,l)):((t.lanes&a)!==0&&(ff(t,n),Do(n,null,null,a),wo()),l=t.memoizedState,c=n.memoizedState,l.parent!==s?(l={parent:s,cache:s},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),La(n,un,s)):(s=c.cache,La(n,un,s),s!==l.cache&&sf(n,[un],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:ge&&Bl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:_r(t,n),_n(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function pa(t){t.flags|=4}function qf(t,n,a,s,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?D0(n,s):D0(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(zg())t.flags|=8192;else throw Rs=Yl,uf}else t.flags&=-16777217}function ng(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!U0(n))if(zg())t.flags|=8192;else throw Rs=Yl,uf}function cu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ml():536870912,t.lanes|=n,xr|=n)}function zo(t,n){if(!ge)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags&1206910976,s|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function ax(t,n,a){var s=n.pendingProps;switch(tf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ca(un),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ur(n)?pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,nf())),Ke(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(pa(n),c!==null?(Ke(n),ng(n,c)):(Ke(n),qf(n,l,null,s,a))):c?c!==t.memoizedState?(pa(n),Ke(n),ng(n,c)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&pa(n),Ke(n),qf(n,l,t,s,a)),null;case 27:if(dt(n),a=Ye.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=Bt.current,ur(n)?Om(n):(t=M0(l,s,a),n.stateNode=t,pa(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(dt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(c=Bt.current,ur(n))Om(n);else{var m=Wo(Ye.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof s.is=="string"?m.createElement("select",{is:s.is}):m.createElement("select"),s.multiple?c.multiple=!0:s.size&&(c.size=s.size);break;default:c=typeof s.is=="string"?m.createElement(l,{is:s.is}):m.createElement(l)}}c[Ct]=n,c[Xt]=s;t:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break t;for(;m.sibling===null;){if(m.return===null||m.return===n)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=c;t:switch(wn(c,l,s),l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&pa(n)}}return Ke(n),n.subtreeFlags&=-33554433,qf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&pa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ye.current,ur(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,l=xn,l!==null)switch(l.tag){case 27:case 5:s=l.memoizedProps}t[Ct]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||e0(t.nodeValue,a)),t||Na(n,!0)}else t=Wo(t).createTextNode(s),t[Ct]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=ur(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ct]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=nf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ur(n),s!==null&&s.dehydrated!==null){if(t===null){if(!l)throw Error(r(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(r(317));l[Ct]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),l=!1}else l=nf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,l=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(l=s.alternate.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),cu(n,n.updateQueue),Ke(n),null);case 4:return T(),t===null&&Rh(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return ca(n.type),Ke(n),null;case 19:if(gf(n),s=n.memoizedState,s===null)return Ke(n),null;if(l=(n.flags&128)!==0,c=s.rendering,c===null)if(l)zo(s,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=Zl(t),c!==null){for(n.flags|=128,zo(s,!1),t=c.updateQueue,n.updateQueue=t,cu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)wm(a,t),a=a.sibling;return Uo(n,Rn.current&1|2),ge&&la(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&V()>Mu&&(n.flags|=128,l=!0,zo(s,!1),n.lanes=4194304)}else{if(!l)if(t=Zl(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,cu(n,t),zo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!c.alternate&&!ge)return Ke(n),null}else 2*V()-s.renderingStartTime>Mu&&a!==536870912&&(n.flags|=128,l=!0,zo(s,!1),n.lanes=4194304);s.isBackwards?(c.sibling=n.child,n.child=c):(t=s.last,t!==null?t.sibling=c:n.child=c,s.last=c)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=V(),t.sibling=null,c=Rn.current,c=l?c&1|2:c&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||ge?Uo(n,c):(a=c,ne(An,n),ne(Rn,a),Pn===null&&(Pn=n)),ge&&la(n,s.treeForkCount),t}return Ke(n),null;case 22:case 23:return ni(n),mf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&cu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Nt(bs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(un),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(r(156,n.tag))}function sx(t,n){switch(tf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(un),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(r(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return gf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return ca(n.type),null;case 22:case 23:return ni(n),mf(),t!==null&&Nt(bs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(un),null;case 25:return null;default:return null}}function ig(t,n){switch(tf(n),n.tag){case 3:ca(un),T();break;case 26:case 27:case 5:dt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:gf(n);break;case 10:ca(n.type);break;case 22:case 23:ni(n),mf(),t!==null&&Nt(bs);break;case 24:ca(un)}}function Io(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var l=s.next;a=l;do{if((a.tag&t)===t){s=void 0;var c=a.create,m=a.inst;s=c(),m.destroy=s}a=a.next}while(a!==l)}}catch(E){Be(n,n.return,E)}}function Ga(t,n,a){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var c=l.next;s=c;do{if((s.tag&t)===t){var m=s.inst,E=m.destroy;if(E!==void 0){m.destroy=void 0,l=n;var L=a,W=E;try{W()}catch(it){Be(l,L,it)}}}s=s.next}while(s!==c)}}catch(it){Be(n,n.return,it)}}function ag(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Wm(n,a)}catch(s){Be(t,t.return,s)}}}function sg(t,n,a){a.props=Ds(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function Hi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var l=t.stateNode,c=sa(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=h0(c)),s=l.ref;break;case 7:if(t.stateNode===null){var m=new oi(t);p(t.child,!1,Zx,m,void 0,void 0),t.stateNode=m}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(E){Be(t,n,E)}}function Cn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(l){Be(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Be(t,n,l)}else a.current=null}function fu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)v0(t.stateNode,n[a])}function rg(t){for(var n=t.return;n!==null&&(jf(n)&&v0(t.stateNode,n.stateNode),!Wf(n));)n=n.return}function Bo(t){for(var n=t.return;n!==null&&(jf(n)&&Kx(t.stateNode,n.stateNode),!Wf(n));)n=n.return}function Wf(t){return t.tag===5||t.tag===3||t.tag===27}function jf(t){return t&&t.tag===7&&t.stateNode!==null}function Zf(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(l){Be(t,t.return,l)}}function Kf(t,n,a){try{var s=t.stateNode;Ux(s,t.type,a,n),s[Xt]=n}catch(l){Be(t,t.return,l)}}function og(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function Qf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||og(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jf(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii)),fu(t,s),De=!0;else if(l!==4&&(l===27&&(fu(t,s),s=null,ja(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Jf(t,n,a,s),t=t.sibling;t!==null;)Jf(t,n,a,s),t=t.sibling}function hu(t,n,a,s){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),fu(t,s),De=!0;else if(l!==4&&(l===27&&(fu(t,s),s=null,ja(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(hu(t,n,a,s),t=t.sibling;t!==null;)hu(t,n,a,s),t=t.sibling}function lg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);wn(n,s,a),n[Ct]=t,n[Xt]=a}catch(c){Be(t,t.return,c)}}var du=!1,ii=null;function ug(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(du=!0)}var Gi=null;function cg(){var t=Gi;return Gi=null,t}var Yn=0;function gr(t,n,a,s,l){return Yn=0,fg(t.child,n,a,s,l)}function fg(t,n,a,s,l){for(var c=!1;t!==null;){if(t.tag===5){var m=t.stateNode;if(s!==null){var E=Ph(m);s.push(E),E.view&&(c=!0)}else c||Ph(m).view&&(c=!0);du=!0,c0(m,Yn===0?n:n+"_"+Yn,a),Yn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||fg(t.child,n,a,s,l)&&(c=!0));t=t.sibling}return c}function Vi(t,n){for(;t!==null;)t.tag===5?f0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Vi(t.child,n)),t=t.sibling}function pu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(pu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ra(n.default,n.share),n!=="none"&&(gr(t,a,n,null,!1)||Vi(t.child,!1))}t=t.sibling}}function $f(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,l=sa(s,a),c=ra(s.default,a.paired?s.share:s.enter);c!=="none"?gr(t,l,c,null,!1)?(pu(t),a.paired||n||br(t,s.onEnter)):Vi(t.child,!1):pu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)$f(t,n),t=t.sibling;else pu(t)}function th(t){if(ii!==null&&ii.size!==0){var n=ii;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var l=n.get(s);if(l!==void 0){var c=ra(a.default,a.share);if(c!=="none"&&(gr(t,s,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,br(t,a.onShare)):Vi(t.child,!1)),n.delete(s),n.size===0)break}}}th(t)}t=t.sibling}}}function eh(t){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode),s=ii!==null?ii.get(a):void 0,l=ra(n.default,s!==void 0?n.share:n.exit);l!=="none"&&(gr(t,a,l,null,!1)?s!==void 0?(l=t.stateNode,s.paired=l,l.paired=s,ii.delete(a),br(t,n.onShare)):br(t,n.onExit):Vi(t.child,!1)),ii!==null&&th(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)eh(t),t=t.sibling;else ii!==null&&th(t)}function hg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode);n=ra(n.default,n.update),t.flags&=-5,n!=="none"&&gr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&hg(t);t=t.sibling}}function nh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Vi(t.child,!1))}nh(t)}t=t.sibling}}function mu(t){if(t.tag===30)t.stateNode.paired=null,Vi(t.child,!1),nh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)mu(t),t=t.sibling;else nh(t)}function dg(t){for(t=t.child;t!==null;)t.tag===30?Vi(t.child,!1):(t.subtreeFlags&33554432)!==0&&dg(t),t=t.sibling}function ih(t,n,a,s,l,c,m){for(var E=!1;n!==null;){if(n.tag===5){var L=n.stateNode;if(c!==null&&Yn<c.length){var W=c[Yn],it=Ph(L);(W.view||it.view)&&(E=!0);var pt;if(pt=(t.flags&4)===0)if(it.clip)pt=!0;else{pt=W.rect;var k=it.rect;pt=pt.y!==k.y||pt.x!==k.x||pt.height!==k.height||pt.width!==k.width}pt&&(t.flags|=4),it.abs?it=!W.abs:(W=W.rect,it=it.rect,it=W.height!==it.height||W.width!==it.width),it&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&c0(L,Yn===0?a:a+"_"+Yn,l),E&&(t.flags&4)!==0||(Gi===null&&(Gi=[]),Gi.push(L,Yn===0?s:s+"_"+Yn,n.memoizedProps)),Yn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&m?t.flags|=n.flags&32:ih(t,n.child,a,s,l,c,m)&&(E=!0));n=n.sibling}return E}function pg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,l=sa(a,s),c=ra(a.default,a.update),m;m=t.memoizedState,t.memoizedState=null,s=t;var E=t.child;Yn=0,l=ih(s,E,l,l,c,m,!1),(t.flags&4)!==0&&l&&br(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&pg(t);t=t.sibling}}var Mn=!1,ze=!1,Xi=!1,ah=!1,mg=typeof WeakSet=="function"?WeakSet:Set,En=null,ki=!1,Fo=!1,_u=!1,sh=!1;function rx(t,n,a){if(t=t.containerInfo,Dh=Pr,t=Sm(t),kc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,L=-1,W=-1,it=0,pt=0,k=t,tt=null;e:for(;;){for(var Dt;k!==s||c!==0&&k.nodeType!==3||(L=E+c),k!==m||l!==0&&k.nodeType!==3||(W=E+l),k.nodeType===3&&(E+=k.nodeValue.length),(Dt=k.firstChild)!==null;)tt=k,k=Dt;for(;;){if(k===t)break e;if(tt===s&&++it===c&&(L=E),tt===m&&++pt===l&&(W=E),(Dt=k.nextSibling)!==null)break;k=tt,tt=k.parentNode}k=Dt}s=L===-1||W===-1?null:{start:L,end:W}}else s=null}s=s||{start:0,end:0}}else s=null;for(Uh={focusedElem:t,selectionRange:s},Pr=!1,a=(a&335544064)===a,En=n,n=a?9270:1024;En!==null;){if(t=En,a&&(s=t.deletions,s!==null))for(c=0;c<s.length;c++)a&&eh(s[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&ug(t),gu(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&eh(s),gu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&ug(t),gu(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,En=s):(a&&hg(t),gu(a))}}ii=null}function gu(t){for(;En!==null;){var n=En,a=t,s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&s!==null){a=void 0,l=s.memoizedProps,s=s.memoizedState;var c=n.stateNode;try{var m=Ds(n.type,l);a=c.getSnapshotBeforeUpdate(m,s),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){Be(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Bh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Bh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=sa(s.memoizedProps,s.stateNode),l=n.memoizedProps,l=ra(l.default,l.update),l!=="none"&&gr(s,a,l,s.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,En=s;break}En=n.return}}function _g(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),s&4&&Io(5,a);break;case 1:if(Yi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(m){Be(a,a.return,m)}else{var l=Ds(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Be(a,a.return,m)}}s&64&&ag(a),s&512&&Hi(a,a.return);break;case 3:if(Yi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Wm(t,n)}catch(m){Be(a,a.return,m)}}break;case 27:n===null&&s&4&&lg(a);case 26:case 5:Yi(t,a),n===null&&s&4&&Zf(a),s&512&&Hi(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),s&4&&yg(t,a);break;case 13:Yi(t,a),s&4&&xg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=vx.bind(null,a),$x(t,a))));break;case 22:if(s=a.memoizedState!==null||Mn,!s){var c=n!==null&&n.memoizedState!==null||ze;n=Mn,l=ze,Mn=s,(ze=c)&&!l?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ai(t,a,s)):Yi(t,a),Mn=n,ze=l}break;case 30:Yi(t,a),s&512&&Hi(a,a.return);break;case 7:s&512&&Hi(a,a.return);default:Yi(t,a)}}function rh(t,n){for(t=t.child;t!==null;)gg(t,n),t=t.sibling}function gg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,m=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(L){Be(t,t.return,L)}oh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,De=!0}catch(L){Be(t,t.return,L)}break;case 18:try{var E=t.stateNode;n?u0(E,!0):u0(t.stateNode,!1)}catch(L){Be(t,t.return,L)}break;case 22:case 23:t.memoizedState===null&&rh(t,n);break;default:rh(t,n)}}function oh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:gg(a,s);break t;case 22:a.memoizedState===null&&oh(a,s);break t;default:oh(a,s)}}t=t.sibling}}function vg(t){var n=t.alternate;n!==null&&(t.alternate=null,vg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$t(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,qn=!1;function Ti(t,n,a){for(a=a.child;a!==null;)Sg(t,n,a),a=a.sibling}function Sg(t,n,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:ze||Cn(a,n),Ti(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ze&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ze||Cn(a,n),Bo(a);var s=Je,l=qn;ja(a.type)&&(Je=a.stateNode,qn=!1),Ti(t,n,a),E0(a.stateNode,a.type,a.memoizedProps),Je=s,qn=l;break;case 5:ze||Cn(a,n),Bo(a);case 6:if(a.tag===6&&Bo(a),s=Je,l=qn,Je=null,Ti(t,n,a),Je=s,qn=l,Je!==null)if(qn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode),De=!0}catch(c){Be(a,n,c)}else try{Je.removeChild(a.stateNode),De=!0}catch(c){Be(a,n,c)}break;case 18:Je!==null&&(qn?(t=Je,l0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),zr(t)):l0(Je,a.stateNode));break;case 4:s=Je,l=qn,Je=a.stateNode.containerInfo,qn=!0,Ti(t,n,a),Je=s,qn=l;break;case 0:case 11:case 14:case 15:Ga(2,a,n),ze||Ga(4,a,n),Ti(t,n,a);break;case 1:ze||(Cn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&sg(a,n,s)),Ti(t,n,a);break;case 21:Ti(t,n,a);break;case 22:ze=(s=ze)||a.memoizedState!==null,Ti(t,n,a),ze=s;break;case 30:Cn(a,n),Ti(t,n,a);break;case 7:ze||Cn(a,n),Ti(t,n,a);break;default:Ti(t,n,a)}}function yg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zr(t)}catch(a){Be(n,n.return,a)}}}function xg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zr(t)}catch(a){Be(n,n.return,a)}}function ox(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new mg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new mg),n;default:throw Error(r(435,t.tag))}}function vu(t,n){var a=ox(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var l=Sx.bind(null,t,s);s.then(l,l)}})}function Gn(t,n,a){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l],m=t,E=n,L=E;t:for(;L!==null;){switch(L.tag){case 27:if(ja(L.type)){Je=L.stateNode,qn=!1;break t}break;case 5:Je=L.stateNode,qn=!1;break t;case 3:case 4:Je=L.stateNode.containerInfo,qn=!0;break t}L=L.return}if(Je===null)throw Error(r(160));Sg(m,E,c),Je=null,qn=!1,m=c.alternate,m!==null&&(m.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Mg(n,t,a),n=n.sibling}var bi=null;function Mg(t,n,a){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var c=0;c<s.length;c++){var m=s[c];m.ref.impl=m.nextImpl}Gn(n,t,a),Vn(t),l&4&&(Ga(3,t,t.return),Io(3,t),Ga(5,t,t.return));break;case 1:Gn(n,t,a),Vn(t),l&512&&(ze||s===null||Cn(s,s.return)),l&64&&Mn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=bi,Gn(n,t,a),Vn(t),l&512&&(ze||s===null||Cn(s,s.return)),l&4)if(l=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(Mn)t.stateNode=s0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":s=l.getElementsByTagName("title")[0],(!s||s[Ne]||s[Ct]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(n),l.head.insertBefore(s,l.querySelector("head > title"))),wn(s,n,a),s[Ct]=t,we(s),n=s;break t;case"link":if(c=w0("link","href",l).get(n+(a.href||""))){for(m=0;m<c.length;m++)if(s=c[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(m,1);break e}}s=l.createElement(n),wn(s,n,a),l.head.appendChild(s);break;case"meta":if(c=w0("meta","content",l).get(n+(a.content||""))){for(m=0;m<c.length;m++)if(s=c[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(m,1);break e}}s=l.createElement(n),wn(s,n,a),l.head.appendChild(s);break;default:throw Error(r(468,n))}s[Ct]=t,we(s),n=s}t.stateNode=n}else Mn||Yh(c,t.type,t.stateNode);else t.stateNode=C0(c,a,t.memoizedProps);else l!==a?(l===null?(n=s.stateNode,n===null||ze||n.parentNode.removeChild(n)):l.count--,a===null?Mn||Yh(c,t.type,t.stateNode):C0(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Kf(t,t.memoizedProps,s.memoizedProps);break;case 27:Gn(n,t,a),Vn(t),l&512&&(ze||s===null||Cn(s,s.return)),s!==null&&l&4&&Kf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(c=Xi,Xi=!1,Gn(n,t,a),Xi=c,Vn(t),l&512&&(ze||s===null||Cn(s,s.return)),t.flags&32){n=t.stateNode;try{$s(n,""),De=!0}catch(it){Be(t,t.return,it)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Kf(t,n,s!==null?s.memoizedProps:n)),l&1024&&(ah=!0);break;case 6:if(Gn(n,t,a),Vn(t),l&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,De=!0}catch(it){Be(t,t.return,it)}}break;case 3:if(De=!1,Lu=null,c=bi,bi=jo(n.containerInfo),Gn(n,t,a),bi=c,Vn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{zr(n.containerInfo)}catch(it){Be(t,t.return,it)}ah&&(ah=!1,Eg(t)),De=!1;break;case 4:l=Xi,Xi=Mn,s=Xp(),c=bi,bi=jo(t.stateNode.containerInfo),Gn(n,t,a),Vn(t),bi=c,De&&Fo&&(_u=!0),De=s,Xi=l;break;case 12:Gn(n,t,a),Vn(t);break;case 31:Gn(n,t,a),Vn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 13:Gn(n,t,a),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(xu=V()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 22:c=t.memoizedState!==null,m=s!==null&&s.memoizedState!==null;var E=Mn,L=ze,W=Xi;Mn=E||c,Xi=W||c,ze=L||m,Gn(n,t,a),ze=L,Xi=W,Mn=E,Vn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||s===null||m||Mn||ze||(n=m||ze,a=Mn,s=ze,Mn=c||Mn,ze=n,Va(t,2),Mn=a,ze=s),!c&&Xi||rh(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,vu(t,a))));break;case 19:Gn(n,t,a),Vn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,vu(t,n)));break;case 30:l&512&&(ze||s===null||Cn(s,s.return)),l=Xp(),c=Fo,m=(a&335544064)===a,E=t.memoizedProps,Fo=m&&ra(E.default,E.update)!=="none",Gn(n,t,a),Vn(t),m&&s!==null&&De&&(t.flags|=4),Fo=c,De=l;break;case 21:break;case 7:l&512&&(ze||s===null||Cn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Gn(n,t,a),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(og(s)){a=s;break}s=s.return}s=null;for(var l=t.return;l!==null;){if(jf(l)){var c=l.stateNode;s===null?s=[c]:s.push(c)}if(Wf(l))break;l=l.return}var m=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var E=a.stateNode,L=Qf(t);hu(t,L,E,m);break;case 5:var W=a.stateNode;a.flags&32&&($s(W,""),a.flags&=-33);var it=Qf(t);hu(t,it,W,m);break;case 3:case 4:var pt=a.stateNode.containerInfo,k=Qf(t);Jf(t,k,pt,m);break;default:throw Error(r(161))}}catch(tt){Be(t,t.return,tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Eg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Eg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Pr=!0,n.reset(),Pr=!1),t=t.sibling}}function vr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Tg(n,t),n=n.sibling;else pg(n)}function Tg(t,n){var a=t.alternate;if(a===null)$f(t,!1);else switch(t.tag){case 3:if(sh=ki=!1,cg(),vr(n,t),!ki&&!_u){if(t=Gi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var l=t[s+1];f0(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),sh=!0}Gi=null;break;case 5:vr(n,t);break;case 4:s=ki,ki=!1,vr(n,t),ki&&(_u=!0),ki=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?$f(t,!1):vr(n,t));break;case 30:s=ki,l=cg(),ki=!1,vr(n,t),ki&&(t.flags|=4);var c=t.memoizedProps,m=t.stateNode;n=sa(c,m),m=sa(a.memoizedProps,m);var E=ra(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Yn=0,n=ih(t,a,n,m,E,c,!0),Yn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(br(t,t.memoizedProps.onUpdate),Gi=l):l!==null&&(l.push.apply(l,Gi),Gi=l),ki=(t.flags&32)!==0?!0:s;break;default:vr(n,t)}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_g(t,n.alternate,n),n=n.sibling}function Va(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:Ga(4,a,a.return),Va(a,s);break;case 1:Cn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&sg(a,a.return,l),Va(a,s);break;case 27:(s&2)!==0&&E0(a.stateNode,a.type,a.memoizedProps);case 5:Cn(a,a.return),a.tag!==5&&a.tag!==27||Bo(a),Va(a,s);break;case 6:Bo(a);break;case 26:Cn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||ze||l.parentNode.removeChild(l),Va(a,s);break;case 22:a.memoizedState===null&&Va(a,s);break;case 30:Cn(a,a.return),Va(a,s);break;case 7:Cn(a,a.return);default:Va(a,s)}t=t.sibling}}function Ai(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,l=t,c=n,m=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ai(l,c,a),Io(4,c);break;case 1:if(Ai(l,c,a),s=c,l=s.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(it){Be(s,s.return,it)}if(s=c,l=s.updateQueue,l!==null){var L=s.stateNode;try{var W=l.shared.hiddenCallbacks;if(W!==null)for(l.shared.hiddenCallbacks=null,l=0;l<W.length;l++)qm(W[l],L)}catch(it){Be(s,s.return,it)}}E&&m&64&&ag(c),Hi(c,c.return);break;case 27:(a&2)!==0&&lg(c);case 5:c.tag!==5&&c.tag!==27||rg(c),Ai(l,c,a),E&&s===null&&m&4&&Zf(c),Hi(c,c.return);break;case 6:rg(c);break;case 26:L=c.stateNode,c.memoizedState!==null||L===null||Mn||Yh(jo(L.ownerDocument),c.type,L),Ai(l,c,a),E&&s===null&&m&4&&Zf(c),Hi(c,c.return);break;case 12:Ai(l,c,a);break;case 31:Ai(l,c,a),E&&m&4&&yg(l,c);break;case 13:Ai(l,c,a),E&&m&4&&xg(l,c);break;case 22:c.memoizedState===null&&Ai(l,c,a),Hi(c,c.return);break;case 30:Ai(l,c,a),Hi(c,c.return);break;case 7:Hi(c,c.return);default:Ai(l,c,a)}n=n.sibling}}function lh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&To(a))}function uh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&To(t))}function gi(t,n,a,s){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)bg(t,n,a,s),n=n.sibling;else l&&dg(n)}function bg(t,n,a,s){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&mu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:gi(t,n,a,s),c&2048&&Io(9,n);break;case 1:gi(t,n,a,s);break;case 3:gi(t,n,a,s),l&&sh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&To(c)));break;case 12:if(c&2048){gi(t,n,a,s),c=n.stateNode;try{var m=n.memoizedProps,E=m.id,L=m.onPostCommit;typeof L=="function"&&L(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(W){Be(n,n.return,W)}}else gi(t,n,a,s);break;case 31:gi(t,n,a,s);break;case 13:gi(t,n,a,s);break;case 23:break;case 22:m=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&mu(E),m._visibility&2?gi(t,n,a,s):Ho(t,n)):(l&&E!==null&&E.memoizedState!==null&&mu(n),m._visibility&2?gi(t,n,a,s):(m._visibility|=2,Sr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),c&2048&&lh(E,n);break;case 24:gi(t,n,a,s),c&2048&&uh(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Vi(c.child,!0),Vi(n.child,!0))),gi(t,n,a,s);break;default:gi(t,n,a,s)}}function Sr(t,n,a,s,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,m=n,E=a,L=s,W=m.flags;switch(m.tag){case 0:case 11:case 15:Sr(c,m,E,L,l),Io(8,m);break;case 23:break;case 22:var it=m.stateNode;m.memoizedState!==null?it._visibility&2?Sr(c,m,E,L,l):Ho(c,m):(it._visibility|=2,Sr(c,m,E,L,l)),l&&W&2048&&lh(m.alternate,m);break;case 24:Sr(c,m,E,L,l),l&&W&2048&&uh(m.alternate,m);break;default:Sr(c,m,E,L,l)}n=n.sibling}}function Ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,l=s.flags;switch(s.tag){case 22:Ho(a,s),l&2048&&lh(s.alternate,s);break;case 24:Ho(a,s),l&2048&&uh(s.alternate,s);break;default:Ho(a,s)}n=n.sibling}}var Us=8192;function Ns(t,n,a){if(t.subtreeFlags&Us)for(t=t.child;t!==null;)Ag(t,n,a),t=t.sibling}function Ag(t,n,a){switch(t.tag){case 26:Ns(t,n,a),t.flags&Us&&(t.memoizedState!==null?dM(a,bi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&L0(a,t)));break;case 5:Ns(t,n,a),t.flags&Us&&(t=t.stateNode,(n&335544128)===n&&L0(a,t));break;case 3:case 4:var s=bi;bi=jo(t.stateNode.containerInfo),Ns(t,n,a),bi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Us,Us=16777216,Ns(t,n,a),Us=s):Ns(t,n,a));break;case 30:if((t.flags&Us)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var l=t.stateNode;l.paired=null,ii===null&&(ii=new Map),ii.set(s,l)}Ns(t,n,a);break;default:Ns(t,n,a)}}function Rg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];En=s,wg(s,t)}Rg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cg(t),t=t.sibling}function Cg(t){switch(t.tag){case 0:case 11:case 15:Go(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Go(t);break;case 12:Go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Su(t)):Go(t);break;default:Go(t)}}function Su(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];En=s,wg(s,t)}Rg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),Su(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Su(n));break;default:Su(n)}t=t.sibling}}function wg(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:To(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,En=s;else t:for(a=t;En!==null;){s=En;var l=s.sibling,c=s.return;if(vg(s),s===a){En=null;break t}if(l!==null){l.return=c,En=l;break t}En=c}}}var lx={getCacheForType:function(t){var n=bn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return bn(un).controller.signal}},ux=typeof WeakMap=="function"?WeakMap:Map,Oe=0,qe=null,Se=null,Ee=0,Ie=0,ai=null,Xa=!1,yr=!1,ch=!1,ma=0,an=0,ka=0,Ls=0,yu=0,si=0,xr=0,Vo=null,Wn=null,fh=!1,xu=0,Dg=0,Mu=1/0,Eu=null,Ya=null,tn=0,Ri=null,Os=null,qi=0,hh=0,dh=null,Ug=null,Mr=null,Er=null,Tr=null,Xo=0,Tu=null;function ri(){return(Oe&2)!==0&&Ee!==0?Ee&-Ee:Mt.T!==null?Eh():Et()}function Ng(){if(si===0)if((Ee&536870912)===0||ge){var t=na;na<<=1,(na&3932160)===0&&(na=262144),si=t}else si=536870912;return t=An.current,t!==null&&(t.flags|=32),si}function br(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=h0(sa(t.memoizedProps,a))),Er===null&&(Er=[]),Er.push(n.bind(null,s))}}function jn(t,n,a){(t===qe&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(Ar(t,0),qa(t,Ee,si,!1)),ms(t,a),((Oe&2)===0||t!==qe)&&(t===qe&&((Oe&2)===0&&(Ls|=a),an===4&&qa(t,Ee,si,!1)),Wi(t))}function Lg(t,n,a){if((Oe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Aa(t,n),l=s?hx(t,n):mh(t,n,!0),c=s;do{if(l===0){yr&&!s&&qa(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!cx(a)){l=mh(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;t:{var E=t;l=Vo;var L=E.current.memoizedState.isDehydrated;if(L&&(Ar(E,m).flags|=256),m=mh(E,m,!1),m!==2&&m!==6){if(ch&&!L){E.errorRecoveryDisabledLanes|=c,Ls|=c,l=4;break t}c=Wn,Wn=l,c!==null&&(Wn===null?Wn=c:Wn.push.apply(Wn,c))}l=m}if(c=!1,l!==2)continue}}if(l===1){Ar(t,0),qa(t,n,0,!0);break}t:{switch(s=t,c=l,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:qa(s,n,si,!Xa);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(l=xu+300-V(),10<l)){if(qa(s,n,si,!Xa),ps(s,0,!0)!==0)break t;qi=n,s.timeoutHandle=Oh(Og.bind(null,s,a,Wn,Eu,fh,n,si,Ls,xr,Xa,c,"Throttled",-0,0),l);break t}Og(s,a,Wn,Eu,fh,n,si,Ls,xr,Xa,c,null,-0,0)}}break}while(!0);Wi(t)}function Og(t,n,a,s,l,c,m,E,L,W,it,pt,k,tt){t.timeoutHandle=-1;var Dt=n.subtreeFlags,kt=(c&335544064)===c;if(pt=null,(kt||Dt&8192||(Dt&16785408)===16785408)&&(pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},ii=null,Ag(n,c,pt),kt&&(Dt=pt,kt=t.containerInfo,kt=(kt.nodeType===9?kt:kt.ownerDocument).__reactViewTransition,kt!=null&&(Dt.count++,Dt.waitingForViewTransition=!0,Dt=Qo.bind(Dt),kt.finished.then(Dt,Dt))),Dt=(c&62914560)===c?xu-V():(c&4194048)===c?Dg-V():0,Dt=pM(pt,Dt),Dt!==null)){qi=c,t.cancelPendingCommit=Dt(Vg.bind(null,t,n,c,a,s,l,m,E,L,W,it,pt,null,k,tt)),qa(t,c,m,!W);return}Vg(t,n,c,a,s,l,m,E,L,W,it,pt)}function cx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var l=a[s],c=l.getSnapshot;l=l.value;try{if(!ei(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,a,s){n=xl(t,n),n&=~yu,n&=~Ls,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var l=n;0<l;){var c=31-Ln(l),m=1<<c;s[c]=-1,l&=~m}a!==0&&b(t,a,n)}function bu(){return(Oe&6)===0?(ko(0),!1):!0}function ph(){if(Se!==null){if(Ie===0)var t=Se.return;else t=Se,ua=xs=null,Mf(t),hr=null,Ro=0,t=Se;for(;t!==null;)ig(t.alternate,t),t=t.return;Se=null}}function Ar(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Ox(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),qi=0,ph(),qe=t,Se=a=oa(t.current,null),Ee=n,Ie=0,ai=null,Xa=!1,yr=Aa(t,n),ch=!1,xr=si=yu=Ls=ka=an=0,Wn=Vo=null,fh=!1,ma=xl(t,n),Ll(),a}function Pg(t,n){fe=null,Mt.H=au,n===fr||n===kl?(n=Vm(),Ie=3):n===uf?(n=Vm(),Ie=4):Ie=n===If?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,Se===null&&(an=1,su(t,di(n,t.current)))}function zg(){var t=An.current;return t===null?!0:(Ee&4194048)===Ee?Pn===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===Pn:!1}function Ig(){var t=Mt.H;return Mt.H=au,t===null?au:t}function Bg(){var t=Mt.A;return Mt.A=lx,t}function Au(){an=4,Xa||(Ee&4194048)!==Ee&&An.current!==null||(yr=!0),(ka&134217727)===0&&(Ls&134217727)===0||qe===null||qa(qe,Ee,si,!1)}function mh(t,n,a){var s=Oe;Oe|=2;var l=Ig(),c=Bg();(qe!==t||Ee!==n)&&(Eu=null,Ar(t,n)),n=!1;var m=an;t:do try{if(Ie!==0&&Se!==null){var E=Se,L=ai;switch(Ie){case 8:ph(),m=6;break t;case 3:case 2:case 9:case 6:An.current===null&&(n=!0);var W=Ie;if(Ie=0,ai=null,Rr(t,E,L,W),a&&yr){m=0;break t}break;default:W=Ie,Ie=0,ai=null,Rr(t,E,L,W)}}fx(),m=an;break}catch(it){Pg(t,it)}while(!0);return n&&t.shellSuspendCounter++,ua=xs=null,Oe=s,Mt.H=l,Mt.A=c,Se===null&&(qe=null,Ee=0,Ll()),m}function fx(){for(;Se!==null;)Fg(Se)}function hx(t,n){var a=Oe;Oe|=2;var s=Ig(),l=Bg();qe!==t||Ee!==n?(Eu=null,Mu=V()+500,Ar(t,n)):yr=Aa(t,n);t:do try{if(Ie!==0&&Se!==null){n=Se;var c=ai;e:switch(Ie){case 1:Ie=0,ai=null,Rr(t,n,c,1);break;case 2:case 9:if(Hm(c)){Ie=0,ai=null,Hg(n);break}n=function(){Ie!==2&&Ie!==9||qe!==t||(Ie=7),Wi(t)},c.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Hm(c)?(Ie=0,ai=null,Hg(n)):(Ie=0,ai=null,Rr(t,n,c,7));break;case 5:var m=null;switch(Se.tag){case 26:m=Se.memoizedState;case 5:case 27:var E=Se;if(m?U0(m):E.stateNode.complete){Ie=0,ai=null;var L=E.sibling;if(L!==null)Se=L;else{var W=E.return;W!==null?(Se=W,Ru(W)):Se=null}break e}}Ie=0,ai=null,Rr(t,n,c,5);break;case 6:Ie=0,ai=null,Rr(t,n,c,6);break;case 8:ph(),an=6;break t;default:throw Error(r(462))}}dx();break}catch(it){Pg(t,it)}while(!0);return ua=xs=null,Mt.H=s,Mt.A=l,Oe=a,Se!==null?0:(qe=null,Ee=0,Ll(),an)}function dx(){for(;Se!==null&&!Ot();)Fg(Se)}function Fg(t){var n=eg(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?Ru(t):Se=n}function Hg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=j_(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=j_(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Mf(n);var s=n;s===xn&&(ge?(Fl(s),s.tag===5&&s.stateNode!=null&&(Ze=s.stateNode)):(Fl(s),ge=!0));default:ig(a,n),n=Se=wm(n,ma),n=eg(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?Ru(t):Se=n}function Rr(t,n,a,s){ua=xs=null,Mf(n),hr=null,Ro=0;var l=n.return;try{if(tx(t,l,n,a,Ee)){an=1,su(t,di(a,t.current)),Se=null;return}}catch(c){if(l!==null)throw Se=l,c;an=1,su(t,di(a,t.current)),Se=null;return}n.flags&32768?(ge||s===1?t=!0:yr||(Ee&536870912)!==0?t=!1:(Xa=t=!0,(s===2||s===9||s===3||s===6)&&(s=An.current,s!==null&&s.tag===13&&(s.flags|=16384))),Gg(n,t)):Ru(n)}function Ru(t){var n=t;do{if((n.flags&32768)!==0){Gg(n,Xa);return}t=n.return;var a=ax(n.alternate,n,ma);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);an===0&&(an=5)}function Gg(t,n){do{var a=sx(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);an=6,Se=null}function Vg(t,n,a,s,l,c,m,E,L,W,it,pt){t.cancelPendingCommit=null;do Cu();while(tn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===qe&&(Se=qe=null,Ee=0),Os=n,Ri=t,qi=a,dh=l,Ug=s,px(t,n,a,m,E,L,pt)}}function px(t,n,a,s,l,c,m){var E=n.lanes|n.childLanes;if(hh=E,E|=Zc,Ac(t,a,E,s,l,c),Er=null,(a&335544064)===a?(Tr=Vy(t),s=10262):(Tr=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,yx(yt,function(){return Sh(),null})):(t.callbackNode=null,t.callbackPriority=0),du=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Mt.T,Mt.T=null,l=Yt.p,Yt.p=2,c=Oe,Oe|=4;try{rx(t,n,a)}finally{Oe=c,Yt.p=l,Mt.T=s}}tn=1,du?Mr=Hx(m,t.containerInfo,Tr,_h,gh,_x,vh,Sh,mx):(_h(),gh(),vh())}function mx(t){if(tn!==0){var n=Ri.onRecoverableError;n(t,{componentStack:null})}}function _x(){tn===3&&(tn=0,Tg(Os,Ri),tn=4)}function _h(){if(tn===1){tn=0;var t=Ri,n=Os,a=qi,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Mt.T,Mt.T=null;var l=Yt.p;Yt.p=2;var c=Oe;Oe|=4;try{Fo=_u=!1,Mg(n,t,a),a=Uh;var m=Sm(t.containerInfo),E=a.focusedElem,L=a.selectionRange;if(m!==E&&E&&E.ownerDocument&&vm(E.ownerDocument.documentElement,E)){if(L!==null&&kc(E)){var W=L.start,it=L.end;if(it===void 0&&(it=W),"selectionStart"in E)E.selectionStart=W,E.selectionEnd=Math.min(it,E.value.length);else{var pt=E.ownerDocument||document,k=pt&&pt.defaultView||window;if(k.getSelection){var tt=k.getSelection(),Dt=E.textContent.length,kt=Math.min(L.start,Dt),he=L.end===void 0?kt:Math.min(L.end,Dt);!tt.extend&&kt>he&&(m=he,he=kt,kt=m);var q=gm(E,kt),G=gm(E,he);if(q&&G&&(tt.rangeCount!==1||tt.anchorNode!==q.node||tt.anchorOffset!==q.offset||tt.focusNode!==G.node||tt.focusOffset!==G.offset)){var J=pt.createRange();J.setStart(q.node,q.offset),tt.removeAllRanges(),kt>he?(tt.addRange(J),tt.extend(G.node,G.offset)):(J.setEnd(G.node,G.offset),tt.addRange(J))}}}}for(pt=[],tt=E;tt=tt.parentNode;)tt.nodeType===1&&pt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pt.length;E++){var ht=pt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Pr=!!Dh,Uh=Dh=null}finally{Oe=c,Yt.p=l,Mt.T=s}}t.current=n,tn=2}}function gh(){if(tn===2){tn=0;var t=Ri,n=Os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Mt.T,Mt.T=null;var s=Yt.p;Yt.p=2;var l=Oe;Oe|=4;try{_g(t,n.alternate,n)}finally{Oe=l,Yt.p=s,Mt.T=a}}tn=3}}function vh(){if(tn===4||tn===3){tn=0;var t=Mr;Mr=null,ce();var n=Ri,a=Os,s=qi,l=Ug,c=(s&335544064)===s?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?tn=5:(tn=0,Os=Ri=null,Xg(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(Ya=null),K(s),a=a.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Me,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=Mt.T,c=Yt.p,Yt.p=2,Mt.T=null;try{for(var m=n.onRecoverableError,E=0;E<l.length;E++){var L=l[E];m(L.value,{componentStack:L.stack})}}finally{Mt.T=a,Yt.p=c}}if(l=Er,m=Tr,Tr=null,l!==null&&(Er=null,m===null&&(m=[]),t!==null))for(L=0;L<l.length;L++)a=(0,l[L])(m),a!==void 0&&t.finished.finally(a);(qi&3)!==0&&Cu(),Wi(n),c=n.pendingLanes,(s&261930)!==0&&(c&42)!==0?n===Tu?Xo++:(Xo=0,Tu=n):(Xo=0,Tu=null),ko(0)}}function Xg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,To(n)))}function Cu(){return Mr!==null&&(Mr.skipTransition(),Mr=null),_h(),gh(),vh(),Sh()}function Sh(){if(tn!==5)return!1;var t=Ri,n=hh;hh=0;var a=K(qi),s=Mt.T,l=Yt.p;try{Yt.p=32>a?32:a,Mt.T=null,a=dh,dh=null;var c=Ri,m=qi;if(tn=0,Os=Ri=null,qi=0,(Oe&6)!==0)throw Error(r(331));var E=Oe;if(Oe|=4,Cg(c.current),bg(c,c.current,m,a),Oe=E,ko(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Me,c)}catch{}return!0}finally{Yt.p=l,Mt.T=s,Xg(t,n)}}function kg(t,n,a){n=di(a,n),n=zf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(ms(t,2),Wi(t))}function Be(t,n,a){if(t.tag===3)kg(t,t,a);else for(;n!==null;){if(n.tag===3){kg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ya===null||!Ya.has(s))){t=di(a,t),a=H_(2),s=Ia(n,a,2),s!==null&&(G_(a,s,n,t),ms(s,2),Wi(s));break}}n=n.return}}function yh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new ux;var l=new Set;s.set(n,l)}else l=s.get(n),l===void 0&&(l=new Set,s.set(n,l));l.has(a)||(ch=!0,l.add(a),t=gx.bind(null,t,n,a),n.then(t,t))}function gx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(Ee&a)===a&&((an===4||an===3&&(Ee&62914560)===Ee&&300>V()-xu)&&(Oe&2)===0?Ar(t,0):yu|=a,xr===Ee&&(xr=0)),Wi(t)}function Yg(t,n){n===0&&(n=Ml()),t=vs(t,n),t!==null&&(ms(t,n),Wi(t))}function vx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Yg(t,a)}function Sx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Yg(t,a)}function yx(t,n){return ee(t,n)}var Cr=null,wr=null,xh=!1,wu=!1,Mh=!1,Wa=0;function Wi(t){t!==wr&&t.next===null&&(wr===null?Cr=wr=t:wr=wr.next=t),wu=!0,xh||(xh=!0,Mx())}function ko(t,n){if(!Mh&&wu){Mh=!0;do for(var a=!1,s=Cr;s!==null;){if(t!==0){var l=s.pendingLanes;if(l===0)var c=0;else{var m=s.suspendedLanes,E=s.pingedLanes;c=(1<<31-Ln(42|t)+1)-1,c&=l&~(m&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Zg(s,c))}else c=Ee,c=ps(s,s===qe?c:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(c&3)===0||Aa(s,c)||(a=!0,Zg(s,c));s=s.next}while(a);Mh=!1}}function xx(){qg()}function qg(){wu=xh=!1;var t=0;Wa!==0&&Lx()&&(t=Wa);for(var n=V(),a=null,s=Cr;s!==null;){var l=s.next,c=Wg(s,n);c===0?(s.next=null,a===null?Cr=l:a.next=l,l===null&&(wr=a)):(a=s,(t!==0||(c&3)!==0)&&(wu=!0)),s=l}tn!==0&&tn!==5||ko(t),Wa!==0&&(Wa=0)}function Wg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var m=31-Ln(c),E=1<<m,L=l[m];L===-1?((E&a)===0||(E&s)!==0)&&(l[m]=bc(E,n)):L<=n&&(t.expiredLanes|=E),c&=~E}if(n=qe,a=Ee,a=ps(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&jt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Aa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&jt(s),K(a)){case 2:case 8:a=Gt;break;case 32:a=yt;break;case 268435456:a=qt;break;default:a=yt}return s=jg.bind(null,t),a=ee(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&jt(s),t.callbackPriority=2,t.callbackNode=null,2}function jg(t,n){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cu()&&t.callbackNode!==a)return null;var s=Ee;return s=ps(t,t===qe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Lg(t,s,n),Wg(t,V()),t.callbackNode!=null&&t.callbackNode===a?jg.bind(null,t):null)}function Zg(t,n){if(Cu())return null;Lg(t,n,!0)}function Mx(){Px(function(){(Oe&6)!==0?ee(wt,xx):qg()})}function Eh(){if(Wa===0){var t=Ts;t===0&&(t=hs,hs<<=1,(hs&261888)===0&&(hs=256)),Wa=t}return Wa}function Kg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bl(t)}function Ex(t,n,a,s,l){if(n==="submit"&&a&&a.stateNode===l){var c=Kg((l[Xt]||null).action),m=s.submitter;m&&(n=(n=m[Xt]||null)?Kg(n.formAction):m.getAttribute("formAction"),n!==null&&(c=n,m=null));var E=new wl("action","action",null,s,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Wa!==0){var L=new FormData(l,m);Uf(a,{pending:!0,data:L,method:l.method,action:c},null,L)}}else typeof c=="function"&&(E.preventDefault(),L=new FormData(l,m),Uf(a,{pending:!0,data:L,method:l.method,action:c},c,L))},currentTarget:l}]})}}for(var Th=0;Th<jc.length;Th++){var bh=jc[Th],Tx=bh.toLowerCase(),bx=bh[0].toUpperCase()+bh.slice(1);Ei(Tx,"on"+bx)}Ei(Mm,"onAnimationEnd"),Ei(Em,"onAnimationIteration"),Ei(Tm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Oy,"onTransitionRun"),Ei(Py,"onTransitionStart"),Ei(zy,"onTransitionCancel"),Ei(bm,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yo));function Qg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],l=s.event;s=s.listeners;t:{var c=void 0;if(n)for(var m=s.length-1;0<=m;m--){var E=s[m],L=E.instance,W=E.currentTarget;if(E=E.listener,L!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=W;try{c(l)}catch(it){Nl(it)}l.currentTarget=null,c=L}else for(m=0;m<s.length;m++){if(E=s[m],L=E.instance,W=E.currentTarget,E=E.listener,L!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=W;try{c(l)}catch(it){Nl(it)}l.currentTarget=null,c=L}}}}function ye(t,n){var a=n[Jt];a===void 0&&(a=n[Jt]=new Set);var s=t+"__bubble";a.has(s)||(Jg(n,t,2,!1),a.add(s))}function Ah(t,n,a){var s=0;n&&(s|=4),Jg(a,t,s,n)}var Du="_reactListening"+Math.random().toString(36).slice(2);function Rh(t){if(!t[Du]){t[Du]=!0,je.forEach(function(a){a!=="selectionchange"&&(Ax.has(a)||Ah(a,!1,t),Ah(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Du]||(n[Du]=!0,Ah("selectionchange",!1,n))}}function Jg(t,n,a,s){switch(G0(n)){case 2:var l=vM;break;case 8:l=SM;break;default:l=Wh}a=l.bind(null,n,a,t),l=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),s?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function Ch(t,n,a,s,l){var c=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var m=s.tag;if(m===3||m===4){var E=s.stateNode.containerInfo;if(E===l)break;if(m===4)for(m=s.return;m!==null;){var L=m.tag;if((L===3||L===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;E!==null;){if(m=Le(E),m===null)return;if(L=m.tag,L===5||L===6||L===26||L===27){s=c=m;continue t}E=E.parentNode}}s=s.return}Jp(function(){var W=c,it=Nc(a),pt=[];t:{var k=Am.get(t);if(k!==void 0){var tt=wl,Dt=t;switch(t){case"keypress":if(Rl(a)===0)break t;case"keydown":case"keyup":tt=cy;break;case"focusin":Dt="focus",tt=Bc;break;case"focusout":Dt="blur",tt=Bc;break;case"beforeblur":case"afterblur":tt=Bc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=JS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=my;break;case Mm:case Em:case Tm:tt=ey;break;case bm:tt=gy;break;case"scroll":case"scrollend":tt=KS;break;case"wheel":tt=Sy;break;case"copy":case"cut":case"paste":tt=iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=im;break;case"submit":tt=dy;break;case"toggle":case"beforetoggle":tt=xy}var kt=(n&4)!==0,he=!kt&&(t==="scroll"||t==="scrollend"),q=kt?k!==null?k+"Capture":null:k;kt=[];for(var G=W,J;G!==null;){var ht=G;if(J=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||J===null||q===null||(ht=ho(G,q),ht!=null&&kt.push(qo(G,ht,J))),he)break;G=G.return}0<kt.length&&(k=new tt(k,Dt,null,a,it),pt.push({event:k,listeners:kt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",tt&&a!==Uc&&(Dt=a.relatedTarget||a.fromElement)&&(Le(Dt)||Dt[te]))break t;(k||tt)&&(Dt=it.window===it?it:(tt=it.ownerDocument)?tt.defaultView||tt.parentWindow:window,k?(tt=a.relatedTarget||a.toElement,k=W,tt=tt?Le(tt):null,tt!==null&&(he=f(tt),kt=tt.tag,tt!==he||kt!==5&&kt!==27&&kt!==6)&&(tt=null)):(k=null,tt=W),k!==tt&&(kt=em,ht="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(kt=im,ht="onPointerLeave",q="onPointerEnter",G="pointer"),he=k==null?Dt:mn(k),J=tt==null?Dt:mn(tt),Dt=new kt(ht,G+"leave",k,a,it),Dt.target=he,Dt.relatedTarget=J,ht=null,Le(it)===W&&(kt=new kt(q,G+"enter",tt,a,it),kt.target=J,kt.relatedTarget=he,ht=kt),he=ht,kt=k&&tt?z(k,tt,Rx):null,k!==null&&$g(pt,Dt,k,kt,!1),tt!==null&&he!==null&&$g(pt,he,tt,kt,!0)))}t:{if(k=W?mn(W):window,tt=k.nodeName&&k.nodeName.toLowerCase(),tt==="select"||tt==="input"&&k.type==="file")var Ft=fm;else if(um(k))if(hm)Ft=Uy;else{Ft=wy;var Te=Cy}else tt=k.nodeName,!tt||tt.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?W&&Dc(W.elementType)&&(Ft=fm):Ft=Dy;if(Ft&&(Ft=Ft(t,W))){cm(pt,Ft,a,it);break t}Te&&Te(t,k,W)}switch(Te=W?mn(W):window,t){case"focusin":(um(Te)||Te.contentEditable==="true")&&(ir=Te,Yc=W,xo=null);break;case"focusout":xo=Yc=ir=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,ym(pt,a,it);break;case"selectionchange":if(Ly)break;case"keydown":case"keyup":ym(pt,a,it)}var Qt;if(Hc)t:{switch(t){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else nr?om(t,a)&&(ie="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(am&&a.locale!=="ko"&&(nr||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&nr&&(Qt=$p()):(Ca=it,Pc="value"in Ca?Ca.value:Ca.textContent,nr=!0)),Te=Uu(W,ie),0<Te.length&&(ie=new nm(ie,t,null,a,it),pt.push({event:ie,listeners:Te}),Qt?ie.data=Qt:(Qt=lm(a),Qt!==null&&(ie.data=Qt)))),(Qt=Ey?Ty(t,a):by(t,a))&&(ie=Uu(W,"onBeforeInput"),0<ie.length&&(Te=new nm("onBeforeInput","beforeinput",null,a,it),pt.push({event:Te,listeners:ie}),Te.data=Qt)),Ex(pt,t,W,a,it)}Qg(pt,n)})}function qo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Uu(t,n){for(var a=n+"Capture",s=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=ho(t,a),l!=null&&s.unshift(qo(t,l,c)),l=ho(t,n),l!=null&&s.push(qo(t,l,c))),t.tag===3)return s;t=t.return}return[]}function Rx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function $g(t,n,a,s,l){for(var c=n._reactName,m=[];a!==null&&a!==s;){var E=a,L=E.alternate,W=E.stateNode;if(E=E.tag,L!==null&&L===s)break;E!==5&&E!==26&&E!==27||W===null||(L=W,l?(W=ho(a,c),W!=null&&m.unshift(qo(a,W,L))):l||(W=ho(a,c),W!=null&&m.push(qo(a,W,L)))),a=a.return}m.length!==0&&t.push({event:n,listeners:m})}var Cx=/\r\n?/g,wx=/\u0000|\uFFFD/g;function t0(t){return(typeof t=="string"?t:""+t).replace(Cx,`
`).replace(wx,"")}function e0(t,n){return n=t0(n),t0(t)===n}function Fe(t,n,a,s,l,c){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||$s(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&$s(t,""+s);else return;break;case"className":Tl(t,"class",s);break;case"tabIndex":Tl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Tl(t,a,s);break;case"style":Kp(t,s,c);return;case"data":if(n!=="object"){Tl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=bl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Fe(t,n,"name",l.name,l,null),Fe(t,n,"formEncType",l.formEncType,l,null),Fe(t,n,"formMethod",l.formMethod,l,null),Fe(t,n,"formTarget",l.formTarget,l,null)):(Fe(t,n,"encType",l.encType,l,null),Fe(t,n,"method",l.method,l,null),Fe(t,n,"target",l.target,l,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=bl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ii);return;case"onScroll":s!=null&&ye("scroll",t);return;case"onScrollEnd":s!=null&&ye("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=bl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ye("beforetoggle",t),ye("toggle",t),El(t,"popover",s);break;case"xlinkActuate":ia(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ia(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ia(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ia(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ia(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ia(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ia(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ia(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ia(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":El(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=jS.get(a)||a,El(t,a,s);else return}De=!0}function wh(t,n,a,s,l,c){switch(a){case"style":Kp(t,s,c);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(l.children!=null)throw Error(r(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")$s(t,s);else if(typeof s=="number"||typeof s=="bigint")$s(t,""+s);else return;break;case"onScroll":s!=null&&ye("scroll",t);return;case"onScrollEnd":s!=null&&ye("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Ii);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Bn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[Xt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,s,l);break t}De=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):El(t,a,s)}return}De=!0}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var s=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var m=a[c];if(m!=null)switch(c){case"src":s=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,c,m,a,null)}}l&&Fe(t,n,"srcSet",a.srcSet,a,null),s&&Fe(t,n,"src",a.src,a,null);return;case"input":ye("invalid",t);var E=c=m=l=null,L=null,W=null;for(s in a)if(a.hasOwnProperty(s)){var it=a[s];if(it!=null)switch(s){case"name":l=it;break;case"type":m=it;break;case"checked":L=it;break;case"defaultChecked":W=it;break;case"value":c=it;break;case"defaultValue":E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Fe(t,n,s,it,a,null)}}qp(t,c,E,L,W,m,l,!1);return;case"select":ye("invalid",t),s=m=c=null;for(l in a)if(a.hasOwnProperty(l)&&(E=a[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":m=E;break;case"multiple":s=E;default:Fe(t,n,l,E,a,null)}n=c,a=m,t.multiple=!!s,n!=null?Js(t,!!s,n,!1):a!=null&&Js(t,!!s,a,!0);return;case"textarea":ye("invalid",t),c=l=s=null;for(m in a)if(a.hasOwnProperty(m)&&(E=a[m],E!=null))switch(m){case"value":s=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Fe(t,n,m,E,a,null)}jp(t,s,l,c);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(s=a[L],s!=null))switch(L){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Fe(t,n,L,s,a,null)}return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(s=0;s<Yo.length;s++)ye(Yo[s],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in a)if(a.hasOwnProperty(W)&&(s=a[W],s!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,W,s,a,null)}return;default:if(Dc(n)){for(it in a)a.hasOwnProperty(it)&&(s=a[it],s!==void 0&&wh(t,n,it,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Fe(t,n,E,s,a,null))}var Dx={};function Ux(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,m=null,E=null,L=null,W=null,it=null;for(tt in a){var pt=a[tt];if(a.hasOwnProperty(tt)&&pt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":L=pt;default:s.hasOwnProperty(tt)||Fe(t,n,tt,null,s,pt)}}for(var k in s){var tt=s[k];if(pt=a[k],s.hasOwnProperty(k)&&(tt!=null||pt!=null))switch(k){case"type":tt!==pt&&(De=!0),c=tt;break;case"name":tt!==pt&&(De=!0),l=tt;break;case"checked":tt!==pt&&(De=!0),W=tt;break;case"defaultChecked":tt!==pt&&(De=!0),it=tt;break;case"value":tt!==pt&&(De=!0),m=tt;break;case"defaultValue":tt!==pt&&(De=!0),E=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:tt!==pt&&Fe(t,n,k,tt,s,pt)}}Cc(t,m,E,L,W,it,c,l);return;case"select":tt=m=E=k=null;for(c in a)if(L=a[c],a.hasOwnProperty(c)&&L!=null)switch(c){case"value":break;case"multiple":tt=L;default:s.hasOwnProperty(c)||Fe(t,n,c,null,s,L)}for(l in s)if(c=s[l],L=a[l],s.hasOwnProperty(l)&&(c!=null||L!=null))switch(l){case"value":c!==L&&(De=!0),k=c;break;case"defaultValue":c!==L&&(De=!0),E=c;break;case"multiple":c!==L&&(De=!0),m=c;default:c!==L&&Fe(t,n,l,c,s,L)}n=E,a=m,s=tt,k!=null?Js(t,!!a,k,!1):!!s!=!!a&&(n!=null?Js(t,!!a,n,!0):Js(t,!!a,a?[]:"",!1));return;case"textarea":tt=k=null;for(E in a)if(l=a[E],a.hasOwnProperty(E)&&l!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Fe(t,n,E,null,s,l)}for(m in s)if(l=s[m],c=a[m],s.hasOwnProperty(m)&&(l!=null||c!=null))switch(m){case"value":l!==c&&(De=!0),k=l;break;case"defaultValue":l!==c&&(De=!0),tt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(r(91));break;default:l!==c&&Fe(t,n,m,l,s,c)}Wp(t,k,tt);return;case"option":for(var Dt in a)if(k=a[Dt],a.hasOwnProperty(Dt)&&k!=null&&!s.hasOwnProperty(Dt))switch(Dt){case"selected":t.selected=!1;break;default:Fe(t,n,Dt,null,s,k)}for(L in s)if(k=s[L],tt=a[L],s.hasOwnProperty(L)&&k!==tt&&(k!=null||tt!=null))switch(L){case"selected":k!==tt&&(De=!0),t.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Fe(t,n,L,k,s,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var kt in a)k=a[kt],a.hasOwnProperty(kt)&&k!=null&&!s.hasOwnProperty(kt)&&Fe(t,n,kt,null,s,k);for(W in s)if(k=s[W],tt=a[W],s.hasOwnProperty(W)&&k!==tt&&(k!=null||tt!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(137,n));break;default:Fe(t,n,W,k,s,tt)}return;default:if(Dc(n)){for(var he in a)k=a[he],a.hasOwnProperty(he)&&k!==void 0&&!s.hasOwnProperty(he)&&wh(t,n,he,void 0,s,k);for(it in s)k=s[it],tt=a[it],!s.hasOwnProperty(it)||k===tt||k===void 0&&tt===void 0||wh(t,n,it,k,s,tt);return}}for(var q in a)k=a[q],a.hasOwnProperty(q)&&k!=null&&!s.hasOwnProperty(q)&&Fe(t,n,q,null,s,k);for(pt in s)k=s[pt],tt=a[pt],!s.hasOwnProperty(pt)||k===tt||k==null&&tt==null||Fe(t,n,pt,k,s,tt)}function n0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var l=a[s],c=l.transferSize,m=l.initiatorType,E=l.duration;if(c&&E&&n0(m)){for(m=0,E=l.responseEnd,s+=1;s<a.length;s++){var L=a[s],W=L.startTime;if(W>E)break;var it=L.transferSize,pt=L.initiatorType;it&&n0(pt)&&(L=L.responseEnd,m+=it*(L<E?1:(E-W)/(L-W)))}if(--s,n+=8*(c+m)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Dh=null,Uh=null;function Wo(t){return t.nodeType===9?t:t.ownerDocument}function i0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function a0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function s0(t,n,a,s){return a=Wo(a).createElement(t),a[Ct]=s,a[Xt]=n,wn(a,t,n),we(a),a}function Nh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lh=null;function Lx(){var t=window.event;return t&&t.type==="popstate"?t===Lh?!1:(Lh=t,!0):(Lh=null,!1)}var Oh=typeof setTimeout=="function"?setTimeout:void 0,Ox=typeof clearTimeout=="function"?clearTimeout:void 0,r0=typeof Promise=="function"?Promise:void 0,o0=typeof requestAnimationFrame=="function"?requestAnimationFrame:Oh,Px=typeof queueMicrotask=="function"?queueMicrotask:typeof r0<"u"?function(t){return r0.resolve(null).then(t).catch(zx)}:Oh;function zx(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function l0(t,n){var a=n,s=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(l),zr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Vh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Vh(a);for(var c=a.firstChild;c;){var m=c.nextSibling,E=c.nodeName;c[Ne]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=m}}else a==="body"&&Vh(t.ownerDocument.body);a=l}while(a);zr(n)}function u0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function c0(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var l=s=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function f0(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Ix(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Ph(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Ix(n,a,t)}function Bx(t){return t.documentElement.clientHeight}function Fx(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Hx(t,n,a,s,l,c,m,E,L){var W=n.nodeType===9?n:n.ownerDocument;try{var it=W.startViewTransition({update:function(){var k=W.defaultView,tt=k.navigation&&k.navigation.transition,Dt=W.fonts.status;s();var kt=[];if(Dt==="loaded"&&(Bx(W),W.fonts.status==="loading"&&kt.push(W.fonts.ready)),Dt=kt.length,t!==null)for(var he=t.suspenseyImages,q=0,G=0;G<he.length;G++){var J=he[G];if(!J.complete){var ht=J.getBoundingClientRect();if(0<ht.bottom&&0<ht.right&&ht.top<k.innerHeight&&ht.left<k.innerWidth){if(q+=N0(J),q>Ou){kt.length=Dt;break}J=new Promise(Fx.bind(J)),kt.push(J)}}}if(0<kt.length)return k=Promise.race([Promise.all(kt),new Promise(function(Ft){return setTimeout(Ft,500)})]).then(l,l),(tt?Promise.allSettled([tt.finished,k]):k).then(c,c);if(l(),tt)return tt.finished.then(c,c);c()},types:a});W.__reactViewTransition=it;var pt=[];return it.ready.then(function(){for(var k=W.documentElement.getAnimations({subtree:!0}),tt=0;tt<k.length;tt++){var Dt=k[tt],kt=Dt.effect,he=kt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){pt.push(Dt),Dt=kt.getKeyframes();for(var q=he=void 0,G=!0,J=0;J<Dt.length;J++){var ht=Dt[J],Ft=ht.width;if(he===void 0)he=Ft;else if(he!==Ft){G=!1;break}if(Ft=ht.height,q===void 0)q=Ft;else if(q!==Ft){G=!1;break}delete ht.width,delete ht.height,ht.transform==="none"&&delete ht.transform}G&&he!==void 0&&q!==void 0&&(kt.setKeyframes(Dt),G=getComputedStyle(kt.target,kt.pseudoElement),G.width!==he||G.height!==q)&&(G=Dt[0],G.width=he,G.height=q,G=Dt[Dt.length-1],G.width=he,G.height=q,kt.setKeyframes(Dt))}}m()},function(k){W.__reactViewTransition===it&&(W.__reactViewTransition=null);try{if(typeof k=="object"&&k!==null)switch(k.name){case"InvalidStateError":(k.message==="View transition was skipped because document visibility state is hidden."||k.message==="Skipping view transition because document visibility state has become hidden."||k.message==="Skipping view transition because viewport size changed."||k.message==="Transition was aborted because of invalid state")&&(k=null)}k!==null&&L(k)}finally{s(),l(),m()}}),it.finished.finally(function(){for(var k=0;k<pt.length;k++)pt[k].cancel();W.__reactViewTransition===it&&(W.__reactViewTransition=null),E()}),it}catch{return s(),l(),m(),null}}function Ps(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Ps.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:N({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Ps.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&s.push(a[l])}return s},Ps.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function h0(t){return{name:t,group:new Ps("group",t),imagePair:new Ps("image-pair",t),old:new Ps("old",t),new:new Ps("new",t)}}function oi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}oi.prototype.addEventListener=function(t,n,a){var s=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(p0(c,t,n,a)===-1){var m=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(L){m.removeEventListener(t,n,a),typeof n=="function"?n.call(this,L):n.handleEvent(L)}),s!==null&&(l=m.removeEventListener.bind(m,t,n,a),s.addEventListener("abort",l,{once:!0}),l=s.removeEventListener.bind(s,"abort",l)),s=Dr(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:l}),p(this._fragmentFiber.child,!1,Gx,t,E,s)}this._eventListeners=c}};function Gx(t,n,a,s){return x(t).addEventListener(n,a,s),!1}oi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=p0(s,t,n,a),n!==-1)){var l=s[n];a=l.attachedListener;var c=l.cleanup;l=Dr(l.optionsOrUseCapture),p(this._fragmentFiber.child,!1,Vx,t,a,l),s.splice(n,1),c!==null&&c()}};function Vx(t,n,a,s){return x(t).removeEventListener(n,a,s),!1}function Dr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function d0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function p0(t,n,a,s){if(t.length===0)return-1;s=d0(s);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&d0(c.optionsOrUseCapture)===s)return l}return-1}oi.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=x(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];s.addEventListener(c.type,c.attachedListener,Dr(c.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],s.removeEventListener(c.type,c.attachedListener,Dr(c.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},oi.prototype.focus=function(t){p(this._fragmentFiber.child,!0,m0,t,void 0,void 0)};function m0(t,n){return t.tag===6?!1:(t=x(t),tM(t,n))}oi.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,zh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!m0(n[a],t);a--);};function zh(t,n){return n.push(t),!1}oi.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=x(t),t=Wo(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,Xx,t,void 0,void 0))};function Xx(t,n){return t.tag===6?!1:(t=x(t),t===n||t.contains(n)?(n.blur(),!0):!1)}oi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,kx,t,void 0,void 0)};function kx(t,n){return t.tag===6||(t=x(t),n.observe(t)),!1}oi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,Yx,t,void 0,void 0);for(var a=n=0;a<Ci.length;a++){var s=Ci[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Ci[n++]=s}Ci.length=n}};function Yx(t,n){return t.tag===6||(t=x(t),n.unobserve(t)),!1}var Ci=[],Ih=!1;function qx(t,n,a){Ci.push({fragmentInstance:t,observer:n,instance:a}),Ih||(Ih=!0,eM(function(){Ih=!1;var s=Ci;Ci=[];for(var l=0;l<s.length;l++){var c=s[l];c.observer.unobserve(c.instance)}}))}oi.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,Wx,t,void 0,void 0),t};function Wx(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=x(t),n.push.apply(n,t.getClientRects());return!1}oi.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:x(n).getRootNode(t)},oi.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,zh,a,void 0,void 0);var s=x(n);if(a.length===0){if(a=s,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=s=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=A(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=x(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=x(a[0]),l=x(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:s;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),L=m&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=s&&c&&m&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||c&&l===t||L||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||jx(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function jx(t,n,a,s,l){var c=Le(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=y(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=z(a,c,I),n===null?n=!1:(p(n,!0,P,c,a),c=v,v=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===s)&&(n=z(s,c,I),n===null?n=!1:(p(n,!0,D,c,s),c=v,O=v=null,n=c!==null)),n):!1}function _0(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}oi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];p(this._fragmentFiber.child,!1,zh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=A(this._fragmentFiber);if(s=a?s[1]||s[0]||y(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=x(s),_0(t,a);return}if(s=x(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var l=n[s];l.tag===6?(l=x(l),_0(l,a)):x(l).scrollIntoView(t),s+=a?-1:1}};function Zx(t,n){return t=x(t),g0(t,n),!1}function g0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function v0(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.addEventListener(l.type,l.attachedListener,Dr(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var m=0,E=0;E<Ci.length;E++){var L=Ci[E];(L.fragmentInstance!==n||L.observer!==c||L.instance!==t)&&(Ci[m++]=L)}Ci.length=m,c.observe(t)}),g0(t,n))}function Kx(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];t.removeEventListener(l.type,l.attachedListener,Dr(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?qx(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Bh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bh(a),$t(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Qx(t,n,a,s){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ne])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function Jx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function S0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Fh(t){return t.data==="$?"||t.data==="$~"}function Hh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function $x(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Gh=null;function y0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function x0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function tM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function eM(t){o0(function(){o0(function(n){return t(n)})})}function M0(t,n,a){switch(n=Wo(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function E0(t,n,a){for(var s in a){var l=a[s];a.hasOwnProperty(s)&&l!=null&&Fe(t,n,s,null,Dx,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Ii&&(t.onclick=null),$t(t)}function Vh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$t(t)}var Si=new Map,T0=new Set;function jo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var _a=Yt.d;Yt.d={f:nM,r:iM,D:aM,C:sM,L:rM,m:oM,X:uM,S:lM,M:cM};function nM(){var t=_a.f(),n=bu();return t||n}function iM(t){var n=_e(t);n!==null&&n.tag===5&&n.type==="form"?A_(n):_a.r(t)}var Ur=typeof document>"u"?null:document;function b0(t,n,a){var s=Ur;if(s&&typeof n=="string"&&n){var l=fi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),T0.has(l)||(T0.add(l),t={rel:t,crossOrigin:a,href:n},s.querySelector(l)===null&&(n=s.createElement("link"),wn(n,"link",t),we(n),s.head.appendChild(n)))}}function aM(t){_a.D(t),b0("dns-prefetch",t,null)}function sM(t,n){_a.C(t,n),b0("preconnect",t,n)}function rM(t,n,a){_a.L(t,n,a);var s=Ur;if(s&&t&&n){var l='link[rel="preload"][as="'+fi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+fi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+fi(a.imageSizes)+'"]')):l+='[href="'+fi(t)+'"]';var c=l;switch(n){case"style":c=Nr(t);break;case"script":c=Lr(t)}if(!(Si.has(c)||(t=N({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Si.set(c,t),s.querySelector(l)!==null||n==="style"&&s.querySelector(Zo(c))||n==="script"&&s.querySelector(Ko(c))))){var m=s.createElement("link");wn(m,"link",t),n==="style"&&(m[Ce]=!0,m.onload=m.onerror=function(){Ra(m)}),we(m),s.head.appendChild(m)}}}function oM(t,n){_a.m(t,n);var a=Ur;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+fi(s)+'"][href="'+fi(t)+'"]',c=l;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Lr(t)}if(!Si.has(c)&&(t=N({rel:"modulepreload",href:t},n),Si.set(c,t),a.querySelector(l)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ko(c)))return}s=a.createElement("link"),wn(s,"link",t),we(s),a.head.appendChild(s)}}}function lM(t,n,a){_a.S(t,n,a);var s=Ur;if(s&&t){var l=$n(s).hoistableStyles,c=Nr(t);n=n||"default";var m=l.get(c);if(!m){var E={loading:0,preload:null};if(m=s.querySelector(Zo(c)))E.loading=5;else{t=N({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Si.get(c))&&Xh(t,a);var L=m=s.createElement("link");we(L),wn(L,"link",t),L._p=new Promise(function(W,it){L.onload=W,L.onerror=it}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Nu(m,n,s)}m={type:"stylesheet",instance:m,count:1,state:E},l.set(c,m)}}}function uM(t,n){_a.X(t,n);var a=Ur;if(a&&t){var s=$n(a).hoistableScripts,l=Lr(t),c=s.get(l);c||(c=a.querySelector(Ko(l)),c||(t=N({src:t,async:!0},n),(n=Si.get(l))&&kh(t,n),c=a.createElement("script"),we(c),wn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function cM(t,n){_a.M(t,n);var a=Ur;if(a&&t){var s=$n(a).hoistableScripts,l=Lr(t),c=s.get(l);c||(c=a.querySelector(Ko(l)),c||(t=N({src:t,async:!0,type:"module"},n),(n=Si.get(l))&&kh(t,n),c=a.createElement("script"),we(c),wn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},s.set(l,c))}}function A0(t,n,a,s){var l=(l=Ye.current)?jo(l):null;if(!l)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Nr(a.href),n=$n(l).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Nr(a.href);var c=$n(l).hoistableStyles,m=c.get(t);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,m),(c=l.querySelector(Zo(t)))?c._p||(m.instance=c,m.state.loading=5):(c=Si.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(t,c)),fM(l,t,c,m.state))),n&&s===null)throw Error(r(528,""));return m}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Lr(a),n=$n(l).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Nr(t){return'href="'+fi(t)+'"'}function Zo(t){return'link[rel="stylesheet"]['+t+"]"}function R0(t){return N({},t,{"data-precedence":t.precedence,precedence:null})}function fM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ce]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Ce]=!0,n.onload=n.onerror=Ra.bind(null,n),wn(n,"link",a),we(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Lr(t){return'[src="'+fi(t)+'"]'}function Ko(t){return"script[async]"+t}function C0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+fi(a.href)+'"]');if(s)return n.instance=s,we(s),s;var l=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),we(s),wn(s,"style",l),Nu(s,a.precedence,t),n.instance=s;case"stylesheet":l=Nr(a.href);var c=t.querySelector(Zo(l));if(c)return n.state.loading|=4,n.instance=c,we(c),c;s=R0(a),(l=Si.get(l))&&Xh(s,l),c=(t.ownerDocument||t).createElement("link"),we(c);var m=c;return m._p=new Promise(function(E,L){m.onload=E,m.onerror=L}),wn(c,"link",s),n.state.loading|=4,Nu(c,a.precedence,t),n.instance=c;case"script":return c=Lr(a.src),(l=t.querySelector(Ko(c)))?(n.instance=l,we(l),l):(s=a,(l=Si.get(c))&&(s=N({},a),kh(s,l)),t=t.ownerDocument||t,l=t.createElement("script"),we(l),wn(l,"link",s),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Nu(s,a.precedence,t));return n.instance}function Nu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=s.length?s[s.length-1]:null,c=l,m=0;m<s.length;m++){var E=s[m];if(E.dataset.precedence===n)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Xh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function kh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Lu=null;function w0(t,n,a){if(Lu===null){var s=new Map,l=Lu=new Map;l.set(a,s)}else l=Lu,s=l.get(a),s||(s=new Map,l.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Ne]||c[Ct]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(n)||"";m=t+m;var E=s.get(m);E?E.push(c):s.set(m,[c])}}return s}function Yh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function hM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function D0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function U0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function N0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function L0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=N0(n),t.suspenseyImages.push(n)),t=mM.bind(t),n.decode().then(t,t))}function dM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Nr(s.href),c=n.querySelector(Zo(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Qo.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,we(c);return}c=n.ownerDocument||n,s=R0(s),(l=Si.get(l))&&Xh(s,l),c=c.createElement("link"),we(c);var m=c;m._p=new Promise(function(E,L){m.onload=E,m.onerror=L}),wn(c,"link",s),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Qo.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ou=0;function pM(t,n){return t.stylesheets&&t.count===0&&zu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&zu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Ou===0&&(Ou=62500*Nx());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&zu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Ou?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(l)}}:null}function O0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)zu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Qo(){this.count--,O0(this)}function mM(){this.imgCount--,O0(this)}var Pu=null;function zu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pu=new Map,n.forEach(_M,t),Pu=null,Qo.call(t))}function _M(t,n){if(!(n.state.loading&4)){var a=Pu.get(t);if(a)var s=a.get(null);else{a=new Map,Pu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var m=l[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),s=m)}s&&a.set(null,s)}l=n.instance,m=l.getAttribute("data-precedence"),c=a.get(m)||s,c===s&&a.set(null,l),a.set(m,l),this.count++,s=Qo.bind(this),l.addEventListener("load",s),l.addEventListener("error",s),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Or={$$typeof:ut,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function gM(t,n,a,s,l,c,m,E,L){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.hiddenUpdates=fo(null),this.identifierPrefix=s,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.transitionTypes=null,this.incompleteTransitions=new Map}function P0(t,n,a,s,l,c,m,E,L,W,it,pt){return t=new gM(t,n,a,m,L,W,it,pt,E),n=1,c===!0&&(n|=24),c=kn(3,null,null,n),t.current=c,c.stateNode=t,n=rf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:s,isDehydrated:a,cache:n},cf(c),t}function z0(t){return t?(t=rr,t):rr}function I0(t,n,a,s,l,c){l=z0(l),s.context===null?s.context=l:s.pendingContext=l,s=za(n),s.payload={element:a},c=c===void 0?null:c,c!==null&&(s.callback=c),a=Ia(t,s,n),a!==null&&(jn(a,t,n),Co(a,t,n))}function B0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function qh(t,n){B0(t,n),(t=t.alternate)&&B0(t,n)}function F0(t){if(t.tag===13||t.tag===31){var n=vs(t,67108864);n!==null&&jn(n,t,67108864),qh(t,67108864)}}function H0(t){if(t.tag===13||t.tag===31){var n=ri();n=lt(n);var a=vs(t,n);a!==null&&jn(a,t,n),qh(t,n)}}var Pr=!0;function vM(t,n,a,s){var l=Mt.T;Mt.T=null;var c=Yt.p;try{Yt.p=2,Wh(t,n,a,s)}finally{Yt.p=c,Mt.T=l}}function SM(t,n,a,s){var l=Mt.T;Mt.T=null;var c=Yt.p;try{Yt.p=8,Wh(t,n,a,s)}finally{Yt.p=c,Mt.T=l}}function Wh(t,n,a,s){if(Pr){var l=jh(s);if(l===null)Ch(t,n,s,Iu,a),V0(t,s);else if(xM(l,t,n,a,s))s.stopPropagation();else if(V0(t,s),n&4&&-1<yM.indexOf(t)){for(;l!==null;){var c=_e(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=ci(c.pendingLanes);if(m!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;m;){var L=1<<31-Ln(m);E.entanglements[1]|=L,m&=~L}Wi(c),(Oe&6)===0&&(Mu=V()+500,ko(0))}}break;case 31:case 13:E=vs(c,2),E!==null&&jn(E,c,2),bu(),qh(c,2)}if(c=jh(s),c===null&&Ch(t,n,s,Iu,a),c===l)break;l=c}l!==null&&s.stopPropagation()}else Ch(t,n,s,null,a)}}function jh(t){return t=Nc(t),Zh(t)}var Iu=null;function Zh(t){if(Iu=null,t=Le(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Iu=t,null}function G0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bt()){case wt:return 2;case Gt:return 8;case yt:case _t:return 32;case qt:return 268435456;default:return 32}default:return 32}}var Kh=!1,Za=null,Ka=null,Qa=null,Jo=new Map,$o=new Map,Ja=[],yM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function V0(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(n.pointerId)}}function tl(t,n,a,s,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:c,targetContainers:[l]},n!==null&&(n=_e(n),n!==null&&F0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function xM(t,n,a,s,l){switch(n){case"focusin":return Za=tl(Za,t,n,a,s,l),!0;case"dragenter":return Ka=tl(Ka,t,n,a,s,l),!0;case"mouseover":return Qa=tl(Qa,t,n,a,s,l),!0;case"pointerover":var c=l.pointerId;return Jo.set(c,tl(Jo.get(c)||null,t,n,a,s,l)),!0;case"gotpointercapture":return c=l.pointerId,$o.set(c,tl($o.get(c)||null,t,n,a,s,l)),!0}return!1}function X0(t){var n=Le(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Pt(t.priority,function(){H0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Pt(t.priority,function(){H0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=jh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Uc=s,a.target.dispatchEvent(s),Uc=null}else return n=_e(a),n!==null&&F0(n),t.blockedOn=a,!1;n.shift()}return!0}function k0(t,n,a){Bu(t)&&a.delete(n)}function MM(){Kh=!1,Za!==null&&Bu(Za)&&(Za=null),Ka!==null&&Bu(Ka)&&(Ka=null),Qa!==null&&Bu(Qa)&&(Qa=null),Jo.forEach(k0),$o.forEach(k0)}function Fu(t,n){t.blockedOn===n&&(t.blockedOn=null,Kh||(Kh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,MM)))}var Hu=null;function Y0(t){Hu!==t&&(Hu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Hu===t&&(Hu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],l=t[n+2];if(typeof s!="function"){if(Zh(s||a)===null)continue;break}var c=_e(a);c!==null&&(t.splice(n,3),n-=3,Uf(c,{pending:!0,data:l,method:a.method,action:s},s,l))}}))}function zr(t){function n(L){return Fu(L,t)}Za!==null&&Fu(Za,t),Ka!==null&&Fu(Ka,t),Qa!==null&&Fu(Qa,t),Jo.forEach(n),$o.forEach(n);for(var a=0;a<Ja.length;a++){var s=Ja[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)X0(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var l=a[s],c=a[s+1],m=l[Xt]||null;if(typeof c=="function")m||Y0(a);else if(m){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,m=c[Xt]||null)E=m.formAction;else if(Zh(l)!==null)continue}else E=m.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),Y0(a)}}}function q0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Qh(t){this._internalRoot=t}Gu.prototype.render=Qh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ri();I0(a,s,t,n,null,null)},Gu.prototype.unmount=Qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;I0(t.current,2,null,t,null,null),bu(),n[te]=null}};function Gu(t){this._internalRoot=t}Gu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Et();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&X0(t)}};var W0=e.version;if(W0!=="19.3.0")throw Error(r(527,W0,"19.3.0"));Yt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=_(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var EM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vu.isDisabled&&Vu.supportsFiber)try{Me=Vu.inject(EM),$e=Vu}catch{}}return nl.createRoot=function(t,n){if(!u(t))throw Error(r(299));var a=!1,s="",l=z_,c=I_,m=B_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=P0(t,1,!1,null,null,a,s,null,l,c,m,q0),t[te]=n.current,Rh(t),new Qh(n)},nl.hydrateRoot=function(t,n,a){if(!u(t))throw Error(r(299));var s=!1,l="",c=z_,m=I_,E=B_,L=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(L=a.formState)),n=P0(t,1,!0,n,a??null,s,l,L,c,m,E,q0),n.context=z0(null),a=n.current,s=ri(),s=lt(s),l=za(s),l.callback=null,Ia(a,l,s),a=s,n.current.lanes=a,ms(n,a),Wi(n),t[te]=n.current,Rh(t),new Gu(n)},nl.version="19.3.0",nl}var iv;function LM(){if(iv)return td.exports;iv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),td.exports=NM(),td.exports}var OM=LM();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rp="180",$r={ROTATE:0,DOLLY:1,PAN:2},Qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},PM=0,av=1,zM=2,lS=1,IM=2,Ma=3,cs=0,Qn=1,Zi=2,ls=0,to=1,sv=2,rv=3,ov=4,BM=5,Xs=100,FM=101,HM=102,GM=103,VM=104,XM=200,kM=201,YM=202,qM=203,zd=204,Id=205,WM=206,jM=207,ZM=208,KM=209,QM=210,JM=211,$M=212,tE=213,eE=214,Bd=0,Fd=1,Hd=2,no=3,Gd=4,Vd=5,Xd=6,kd=7,uS=0,nE=1,iE=2,us=0,aE=1,sE=2,rE=3,oE=4,lE=5,uE=6,cE=7,cS=300,io=301,ao=302,Yd=303,qd=304,xc=306,Wd=1e3,Ys=1001,jd=1002,Oi=1003,fE=1004,Xu=1005,Ki=1006,ad=1007,qs=1008,$i=1009,fS=1010,hS=1011,ul=1012,Cp=1013,Ws=1014,Ea=1015,pl=1016,wp=1017,Dp=1018,cl=1020,dS=35902,pS=35899,mS=1021,_S=1022,Li=1023,fl=1026,hl=1027,gS=1028,Up=1029,vS=1030,Np=1031,Lp=1033,hc=33776,dc=33777,pc=33778,mc=33779,Zd=35840,Kd=35841,Qd=35842,Jd=35843,$d=36196,tp=37492,ep=37496,np=37808,ip=37809,ap=37810,sp=37811,rp=37812,op=37813,lp=37814,up=37815,cp=37816,fp=37817,hp=37818,dp=37819,pp=37820,mp=37821,_p=36492,gp=36494,vp=36495,Sp=36283,yp=36284,xp=36285,Mp=36286,hE=3200,dE=3201,SS=0,pE=1,os="",xi="srgb",so="srgb-linear",vc="linear",Xe="srgb",Ir=7680,lv=519,mE=512,_E=513,gE=514,yS=515,vE=516,SE=517,yE=518,xE=519,uv=35044,cv="300 es",Qi=2e3,Sc=2001;class Ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const u=r[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const u=r.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=Math.PI/180,Ep=180/Math.PI;function ml(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function xe(o,e,i){return Math.max(e,Math.min(i,o))}function ME(o,e){return(o%e+e)%e}function sd(o,e,i){return(1-i)*o+i*e}function il(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const EE={DEG2RAD:_c};class ue{constructor(e=0,i=0){ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6],this.y=u[1]*i+u[4]*r+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),u=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*u+e.x,this.y=f*u+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class js{constructor(e=0,i=0,r=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=u}static slerpFlat(e,i,r,u,f,h,d){let g=r[u+0],_=r[u+1],S=r[u+2],p=r[u+3];const y=f[h+0],M=f[h+1],A=f[h+2],w=f[h+3];if(d===0){e[i+0]=g,e[i+1]=_,e[i+2]=S,e[i+3]=p;return}if(d===1){e[i+0]=y,e[i+1]=M,e[i+2]=A,e[i+3]=w;return}if(p!==w||g!==y||_!==M||S!==A){let x=1-d;const v=g*y+_*M+S*A+p*w,O=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const I=Math.sqrt(P),z=Math.atan2(I,v*O);x=Math.sin(x*z)/I,d=Math.sin(d*z)/I}const D=d*O;if(g=g*x+y*D,_=_*x+M*D,S=S*x+A*D,p=p*x+w*D,x===1-d){const I=1/Math.sqrt(g*g+_*_+S*S+p*p);g*=I,_*=I,S*=I,p*=I}}e[i]=g,e[i+1]=_,e[i+2]=S,e[i+3]=p}static multiplyQuaternionsFlat(e,i,r,u,f,h){const d=r[u],g=r[u+1],_=r[u+2],S=r[u+3],p=f[h],y=f[h+1],M=f[h+2],A=f[h+3];return e[i]=d*A+S*p+g*M-_*y,e[i+1]=g*A+S*y+_*p-d*M,e[i+2]=_*A+S*M+d*y-g*p,e[i+3]=S*A-d*p-g*y-_*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,u){return this._x=e,this._y=i,this._z=r,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,u=e._y,f=e._z,h=e._order,d=Math.cos,g=Math.sin,_=d(r/2),S=d(u/2),p=d(f/2),y=g(r/2),M=g(u/2),A=g(f/2);switch(h){case"XYZ":this._x=y*S*p+_*M*A,this._y=_*M*p-y*S*A,this._z=_*S*A+y*M*p,this._w=_*S*p-y*M*A;break;case"YXZ":this._x=y*S*p+_*M*A,this._y=_*M*p-y*S*A,this._z=_*S*A-y*M*p,this._w=_*S*p+y*M*A;break;case"ZXY":this._x=y*S*p-_*M*A,this._y=_*M*p+y*S*A,this._z=_*S*A+y*M*p,this._w=_*S*p-y*M*A;break;case"ZYX":this._x=y*S*p-_*M*A,this._y=_*M*p+y*S*A,this._z=_*S*A-y*M*p,this._w=_*S*p+y*M*A;break;case"YZX":this._x=y*S*p+_*M*A,this._y=_*M*p+y*S*A,this._z=_*S*A-y*M*p,this._w=_*S*p-y*M*A;break;case"XZY":this._x=y*S*p-_*M*A,this._y=_*M*p-y*S*A,this._z=_*S*A+y*M*p,this._w=_*S*p+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,u=Math.sin(r);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],u=i[4],f=i[8],h=i[1],d=i[5],g=i[9],_=i[2],S=i[6],p=i[10],y=r+d+p;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(S-g)*M,this._y=(f-_)*M,this._z=(h-u)*M}else if(r>d&&r>p){const M=2*Math.sqrt(1+r-d-p);this._w=(S-g)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+_)/M}else if(d>p){const M=2*Math.sqrt(1+d-r-p);this._w=(f-_)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(g+S)/M}else{const M=2*Math.sqrt(1+p-r-d);this._w=(h-u)/M,this._x=(f+_)/M,this._y=(g+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const u=Math.min(1,i/r);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,u=e._y,f=e._z,h=e._w,d=i._x,g=i._y,_=i._z,S=i._w;return this._x=r*S+h*d+u*_-f*g,this._y=u*S+h*g+f*d-r*_,this._z=f*S+h*_+r*g-u*d,this._w=h*S-r*d-u*g-f*_,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,u=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+u*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=u,this._z=f,this;const g=1-d*d;if(g<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*u+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const _=Math.sqrt(g),S=Math.atan2(_,d),p=Math.sin((1-i)*S)/_,y=Math.sin(i*S)/_;return this._w=h*p+this._w*y,this._x=r*p+this._x*y,this._y=u*p+this._y*y,this._z=f*p+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),u=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(e=0,i=0,r=0){et.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(fv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(fv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*u,this.y=f[1]*i+f[4]*r+f[7]*u,this.z=f[2]*i+f[5]*r+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,u=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*u+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*u+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*u+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,u=this.z,f=e.x,h=e.y,d=e.z,g=e.w,_=2*(h*u-d*r),S=2*(d*i-f*u),p=2*(f*r-h*i);return this.x=i+g*_+h*p-d*S,this.y=r+g*S+d*_-f*p,this.z=u+g*p+f*S-h*_,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*u,this.y=f[1]*i+f[5]*r+f[9]*u,this.z=f[2]*i+f[6]*r+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,u=e.y,f=e.z,h=i.x,d=i.y,g=i.z;return this.x=u*g-f*d,this.y=f*h-r*g,this.z=r*d-u*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rd.copy(this).projectOnVector(e),this.sub(rd)}reflect(e){return this.sub(rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,u=this.z-e.z;return i*i+r*r+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const u=Math.sin(i)*e;return this.x=u*Math.sin(r),this.y=Math.cos(i)*e,this.z=u*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new et,fv=new js;class de{constructor(e,i,r,u,f,h,d,g,_){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,u,f,h,d,g,_)}set(e,i,r,u,f,h,d,g,_){const S=this.elements;return S[0]=e,S[1]=u,S[2]=d,S[3]=i,S[4]=f,S[5]=g,S[6]=r,S[7]=h,S[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,u=i.elements,f=this.elements,h=r[0],d=r[3],g=r[6],_=r[1],S=r[4],p=r[7],y=r[2],M=r[5],A=r[8],w=u[0],x=u[3],v=u[6],O=u[1],P=u[4],D=u[7],I=u[2],z=u[5],N=u[8];return f[0]=h*w+d*O+g*I,f[3]=h*x+d*P+g*z,f[6]=h*v+d*D+g*N,f[1]=_*w+S*O+p*I,f[4]=_*x+S*P+p*z,f[7]=_*v+S*D+p*N,f[2]=y*w+M*O+A*I,f[5]=y*x+M*P+A*z,f[8]=y*v+M*D+A*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],_=e[7],S=e[8];return i*h*S-i*d*_-r*f*S+r*d*g+u*f*_-u*h*g}invert(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],_=e[7],S=e[8],p=S*h-d*_,y=d*g-S*f,M=_*f-h*g,A=i*p+r*y+u*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=p*w,e[1]=(u*_-S*r)*w,e[2]=(d*r-u*h)*w,e[3]=y*w,e[4]=(S*i-u*g)*w,e[5]=(u*f-d*i)*w,e[6]=M*w,e[7]=(r*g-_*i)*w,e[8]=(h*i-r*f)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,u,f,h,d){const g=Math.cos(f),_=Math.sin(f);return this.set(r*g,r*_,-r*(g*h+_*d)+h+e,-u*_,u*g,-u*(-_*h+g*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(od.makeScale(e,i)),this}rotate(e){return this.premultiply(od.makeRotation(-e)),this}translate(e,i){return this.premultiply(od.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let u=0;u<9;u++)if(i[u]!==r[u])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const od=new de;function xS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function yc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function TE(){const o=yc("canvas");return o.style.display="block",o}const hv={};function dl(o){o in hv||(hv[o]=!0,console.warn(o))}function bE(o,e,i){return new Promise(function(r,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const dv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pv=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AE(){const o={enabled:!0,workingColorSpace:so,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Xe&&(u.r=ba(u.r),u.g=ba(u.g),u.b=ba(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(u.r=eo(u.r),u.g=eo(u.g),u.b=eo(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===os?vc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return dl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return dl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[so]:{primaries:e,whitePoint:r,transfer:vc,toXYZ:dv,fromXYZ:pv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:Xe,toXYZ:dv,fromXYZ:pv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),o}const Ue=AE();function ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function eo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Br;class RE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Br===void 0&&(Br=yc("canvas")),Br.width=e.width,Br.height=e.height;const u=Br.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),r=Br}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=yc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const u=r.getImageData(0,0,e.width,e.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=ba(f[h]/255)*255;return r.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ba(i[r]/255)*255):i[r]=ba(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CE=0;class Op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(ld(u[h].image)):f.push(ld(u[h]))}else f=ld(u);r.url=f}return i||(e.images[this.uuid]=r),r}}function ld(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?RE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wE=0;const ud=new et;class Jn extends Ks{constructor(e=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,r=Ys,u=Ys,f=Ki,h=qs,d=Li,g=$i,_=Jn.DEFAULT_ANISOTROPY,S=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=ml(),this.name="",this.source=new Op(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=_,this.format=d,this.internalFormat=null,this.type=g,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}u&&r&&u.isVector2&&r.isVector2||u&&r&&u.isVector3&&r.isVector3||u&&r&&u.isMatrix3&&r.isMatrix3?u.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wd:e.x=e.x-Math.floor(e.x);break;case Ys:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wd:e.y=e.y-Math.floor(e.y);break;case Ys:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=cS;Jn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,r=0,u=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,u){return this.x=e,this.y=i,this.z=r,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,u=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*u+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*u+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*u+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*u+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,u,f;const g=e.elements,_=g[0],S=g[4],p=g[8],y=g[1],M=g[5],A=g[9],w=g[2],x=g[6],v=g[10];if(Math.abs(S-y)<.01&&Math.abs(p-w)<.01&&Math.abs(A-x)<.01){if(Math.abs(S+y)<.1&&Math.abs(p+w)<.1&&Math.abs(A+x)<.1&&Math.abs(_+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(_+1)/2,D=(M+1)/2,I=(v+1)/2,z=(S+y)/4,N=(p+w)/4,X=(A+x)/4;return P>D&&P>I?P<.01?(r=0,u=.707106781,f=.707106781):(r=Math.sqrt(P),u=z/r,f=N/r):D>I?D<.01?(r=.707106781,u=0,f=.707106781):(u=Math.sqrt(D),r=z/u,f=X/u):I<.01?(r=.707106781,u=.707106781,f=0):(f=Math.sqrt(I),r=N/f,u=X/f),this.set(r,u,f,i),this}let O=Math.sqrt((x-A)*(x-A)+(p-w)*(p-w)+(y-S)*(y-S));return Math.abs(O)<.001&&(O=1),this.x=(x-A)/O,this.y=(p-w)/O,this.z=(y-S)/O,this.w=Math.acos((_+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DE extends Ks{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const u={width:e,height:i,depth:r.depth},f=new Jn(u);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ki,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=r,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new Op(u)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zs extends DE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class MS extends Jn{constructor(e=null,i=1,r=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:u},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class UE extends Jn{constructor(e=null,i=1,r=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:u},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l{constructor(e=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,wi):wi.fromBufferAttribute(f,h),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ku.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ku.copy(r.boundingBox)),ku.applyMatrix4(e.matrixWorld),this.union(ku)}const u=e.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(al),Yu.subVectors(this.max,al),Fr.subVectors(e.a,al),Hr.subVectors(e.b,al),Gr.subVectors(e.c,al),ts.subVectors(Hr,Fr),es.subVectors(Gr,Hr),zs.subVectors(Fr,Gr);let i=[0,-ts.z,ts.y,0,-es.z,es.y,0,-zs.z,zs.y,ts.z,0,-ts.x,es.z,0,-es.x,zs.z,0,-zs.x,-ts.y,ts.x,0,-es.y,es.x,0,-zs.y,zs.x,0];return!cd(i,Fr,Hr,Gr,Yu)||(i=[1,0,0,0,1,0,0,0,1],!cd(i,Fr,Hr,Gr,Yu))?!1:(qu.crossVectors(ts,es),i=[qu.x,qu.y,qu.z],cd(i,Fr,Hr,Gr,Yu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ga=[new et,new et,new et,new et,new et,new et,new et,new et],wi=new et,ku=new _l,Fr=new et,Hr=new et,Gr=new et,ts=new et,es=new et,zs=new et,al=new et,Yu=new et,qu=new et,Is=new et;function cd(o,e,i,r,u){for(let f=0,h=o.length-3;f<=h;f+=3){Is.fromArray(o,f);const d=u.x*Math.abs(Is.x)+u.y*Math.abs(Is.y)+u.z*Math.abs(Is.z),g=e.dot(Is),_=i.dot(Is),S=r.dot(Is);if(Math.max(-Math.max(g,_,S),Math.min(g,_,S))>d)return!1}return!0}const NE=new _l,sl=new et,fd=new et;class Pp{constructor(e=new et,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):NE.setFromPoints(e).getCenter(r);let u=0;for(let f=0,h=e.length;f<h;f++)u=Math.max(u,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sl.subVectors(e,this.center);const i=sl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),u=(r-this.radius)*.5;this.center.addScaledVector(sl,u/r),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sl.copy(e.center).add(fd)),this.expandByPoint(sl.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new et,hd=new et,Wu=new et,ns=new et,dd=new et,ju=new et,pd=new et;class zp{constructor(e=new et,i=new et(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=va.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(e))}distanceSqToSegment(e,i,r,u){hd.copy(e).add(i).multiplyScalar(.5),Wu.copy(i).sub(e).normalize(),ns.copy(this.origin).sub(hd);const f=e.distanceTo(i)*.5,h=-this.direction.dot(Wu),d=ns.dot(this.direction),g=-ns.dot(Wu),_=ns.lengthSq(),S=Math.abs(1-h*h);let p,y,M,A;if(S>0)if(p=h*g-d,y=h*d-g,A=f*S,p>=0)if(y>=-A)if(y<=A){const w=1/S;p*=w,y*=w,M=p*(p+h*y+2*d)+y*(h*p+y+2*g)+_}else y=f,p=Math.max(0,-(h*y+d)),M=-p*p+y*(y+2*g)+_;else y=-f,p=Math.max(0,-(h*y+d)),M=-p*p+y*(y+2*g)+_;else y<=-A?(p=Math.max(0,-(-h*f+d)),y=p>0?-f:Math.min(Math.max(-f,-g),f),M=-p*p+y*(y+2*g)+_):y<=A?(p=0,y=Math.min(Math.max(-f,-g),f),M=y*(y+2*g)+_):(p=Math.max(0,-(h*f+d)),y=p>0?f:Math.min(Math.max(-f,-g),f),M=-p*p+y*(y+2*g)+_);else y=h>0?-f:f,p=Math.max(0,-(h*y+d)),M=-p*p+y*(y+2*g)+_;return r&&r.copy(this.origin).addScaledVector(this.direction,p),u&&u.copy(hd).addScaledVector(Wu,y),M}intersectSphere(e,i){va.subVectors(e.center,this.origin);const r=va.dot(this.direction),u=va.dot(va)-r*r,f=e.radius*e.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=r-h,g=r+h;return g<0?null:d<0?this.at(g,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,u,f,h,d,g;const _=1/this.direction.x,S=1/this.direction.y,p=1/this.direction.z,y=this.origin;return _>=0?(r=(e.min.x-y.x)*_,u=(e.max.x-y.x)*_):(r=(e.max.x-y.x)*_,u=(e.min.x-y.x)*_),S>=0?(f=(e.min.y-y.y)*S,h=(e.max.y-y.y)*S):(f=(e.max.y-y.y)*S,h=(e.min.y-y.y)*S),r>h||f>u||((f>r||isNaN(r))&&(r=f),(h<u||isNaN(u))&&(u=h),p>=0?(d=(e.min.z-y.z)*p,g=(e.max.z-y.z)*p):(d=(e.max.z-y.z)*p,g=(e.min.z-y.z)*p),r>g||d>u)||((d>r||r!==r)&&(r=d),(g<u||u!==u)&&(u=g),u<0)?null:this.at(r>=0?r:u,i)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,i,r,u,f){dd.subVectors(i,e),ju.subVectors(r,e),pd.crossVectors(dd,ju);let h=this.direction.dot(pd),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ns.subVectors(this.origin,e);const g=d*this.direction.dot(ju.crossVectors(ns,ju));if(g<0)return null;const _=d*this.direction.dot(dd.cross(ns));if(_<0||g+_>h)return null;const S=-d*ns.dot(pd);return S<0?null:this.at(S/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,i,r,u,f,h,d,g,_,S,p,y,M,A,w,x){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,u,f,h,d,g,_,S,p,y,M,A,w,x)}set(e,i,r,u,f,h,d,g,_,S,p,y,M,A,w,x){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=u,v[1]=f,v[5]=h,v[9]=d,v[13]=g,v[2]=_,v[6]=S,v[10]=p,v[14]=y,v[3]=M,v[7]=A,v[11]=w,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,u=1/Vr.setFromMatrixColumn(e,0).length(),f=1/Vr.setFromMatrixColumn(e,1).length(),h=1/Vr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*u,i[1]=r[1]*u,i[2]=r[2]*u,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,u=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),g=Math.cos(u),_=Math.sin(u),S=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const y=h*S,M=h*p,A=d*S,w=d*p;i[0]=g*S,i[4]=-g*p,i[8]=_,i[1]=M+A*_,i[5]=y-w*_,i[9]=-d*g,i[2]=w-y*_,i[6]=A+M*_,i[10]=h*g}else if(e.order==="YXZ"){const y=g*S,M=g*p,A=_*S,w=_*p;i[0]=y+w*d,i[4]=A*d-M,i[8]=h*_,i[1]=h*p,i[5]=h*S,i[9]=-d,i[2]=M*d-A,i[6]=w+y*d,i[10]=h*g}else if(e.order==="ZXY"){const y=g*S,M=g*p,A=_*S,w=_*p;i[0]=y-w*d,i[4]=-h*p,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*S,i[9]=w-y*d,i[2]=-h*_,i[6]=d,i[10]=h*g}else if(e.order==="ZYX"){const y=h*S,M=h*p,A=d*S,w=d*p;i[0]=g*S,i[4]=A*_-M,i[8]=y*_+w,i[1]=g*p,i[5]=w*_+y,i[9]=M*_-A,i[2]=-_,i[6]=d*g,i[10]=h*g}else if(e.order==="YZX"){const y=h*g,M=h*_,A=d*g,w=d*_;i[0]=g*S,i[4]=w-y*p,i[8]=A*p+M,i[1]=p,i[5]=h*S,i[9]=-d*S,i[2]=-_*S,i[6]=M*p+A,i[10]=y-w*p}else if(e.order==="XZY"){const y=h*g,M=h*_,A=d*g,w=d*_;i[0]=g*S,i[4]=-p,i[8]=_*S,i[1]=y*p+w,i[5]=h*S,i[9]=M*p-A,i[2]=A*p-M,i[6]=d*S,i[10]=w*p+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LE,e,OE)}lookAt(e,i,r){const u=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),is.crossVectors(r,li),is.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),is.crossVectors(r,li)),is.normalize(),Zu.crossVectors(li,is),u[0]=is.x,u[4]=Zu.x,u[8]=li.x,u[1]=is.y,u[5]=Zu.y,u[9]=li.y,u[2]=is.z,u[6]=Zu.z,u[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,u=i.elements,f=this.elements,h=r[0],d=r[4],g=r[8],_=r[12],S=r[1],p=r[5],y=r[9],M=r[13],A=r[2],w=r[6],x=r[10],v=r[14],O=r[3],P=r[7],D=r[11],I=r[15],z=u[0],N=u[4],X=u[8],C=u[12],R=u[1],H=u[5],Q=u[9],rt=u[13],mt=u[2],ut=u[6],Y=u[10],st=u[14],Z=u[3],gt=u[7],St=u[11],Ht=u[15];return f[0]=h*z+d*R+g*mt+_*Z,f[4]=h*N+d*H+g*ut+_*gt,f[8]=h*X+d*Q+g*Y+_*St,f[12]=h*C+d*rt+g*st+_*Ht,f[1]=S*z+p*R+y*mt+M*Z,f[5]=S*N+p*H+y*ut+M*gt,f[9]=S*X+p*Q+y*Y+M*St,f[13]=S*C+p*rt+y*st+M*Ht,f[2]=A*z+w*R+x*mt+v*Z,f[6]=A*N+w*H+x*ut+v*gt,f[10]=A*X+w*Q+x*Y+v*St,f[14]=A*C+w*rt+x*st+v*Ht,f[3]=O*z+P*R+D*mt+I*Z,f[7]=O*N+P*H+D*ut+I*gt,f[11]=O*X+P*Q+D*Y+I*St,f[15]=O*C+P*rt+D*st+I*Ht,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],u=e[8],f=e[12],h=e[1],d=e[5],g=e[9],_=e[13],S=e[2],p=e[6],y=e[10],M=e[14],A=e[3],w=e[7],x=e[11],v=e[15];return A*(+f*g*p-u*_*p-f*d*y+r*_*y+u*d*M-r*g*M)+w*(+i*g*M-i*_*y+f*h*y-u*h*M+u*_*S-f*g*S)+x*(+i*_*p-i*d*M-f*h*p+r*h*M+f*d*S-r*_*S)+v*(-u*d*S-i*g*p+i*d*y+u*h*p-r*h*y+r*g*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],u=e[2],f=e[3],h=e[4],d=e[5],g=e[6],_=e[7],S=e[8],p=e[9],y=e[10],M=e[11],A=e[12],w=e[13],x=e[14],v=e[15],O=p*x*_-w*y*_+w*g*M-d*x*M-p*g*v+d*y*v,P=A*y*_-S*x*_-A*g*M+h*x*M+S*g*v-h*y*v,D=S*w*_-A*p*_+A*d*M-h*w*M-S*d*v+h*p*v,I=A*p*g-S*w*g-A*d*y+h*w*y+S*d*x-h*p*x,z=i*O+r*P+u*D+f*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return e[0]=O*N,e[1]=(w*y*f-p*x*f-w*u*M+r*x*M+p*u*v-r*y*v)*N,e[2]=(d*x*f-w*g*f+w*u*_-r*x*_-d*u*v+r*g*v)*N,e[3]=(p*g*f-d*y*f-p*u*_+r*y*_+d*u*M-r*g*M)*N,e[4]=P*N,e[5]=(S*x*f-A*y*f+A*u*M-i*x*M-S*u*v+i*y*v)*N,e[6]=(A*g*f-h*x*f-A*u*_+i*x*_+h*u*v-i*g*v)*N,e[7]=(h*y*f-S*g*f+S*u*_-i*y*_-h*u*M+i*g*M)*N,e[8]=D*N,e[9]=(A*p*f-S*w*f-A*r*M+i*w*M+S*r*v-i*p*v)*N,e[10]=(h*w*f-A*d*f+A*r*_-i*w*_-h*r*v+i*d*v)*N,e[11]=(S*d*f-h*p*f-S*r*_+i*p*_+h*r*M-i*d*M)*N,e[12]=I*N,e[13]=(S*w*u-A*p*u+A*r*y-i*w*y-S*r*x+i*p*x)*N,e[14]=(A*d*u-h*w*u-A*r*g+i*w*g+h*r*x-i*d*x)*N,e[15]=(h*p*u-S*d*u+S*r*g-i*p*g-h*r*y+i*d*y)*N,this}scale(e){const i=this.elements,r=e.x,u=e.y,f=e.z;return i[0]*=r,i[4]*=u,i[8]*=f,i[1]*=r,i[5]*=u,i[9]*=f,i[2]*=r,i[6]*=u,i[10]*=f,i[3]*=r,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,u))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),u=Math.sin(i),f=1-r,h=e.x,d=e.y,g=e.z,_=f*h,S=f*d;return this.set(_*h+r,_*d-u*g,_*g+u*d,0,_*d+u*g,S*d+r,S*g-u*h,0,_*g-u*d,S*g+u*h,f*g*g+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,u,f,h){return this.set(1,r,f,0,e,1,h,0,i,u,1,0,0,0,0,1),this}compose(e,i,r){const u=this.elements,f=i._x,h=i._y,d=i._z,g=i._w,_=f+f,S=h+h,p=d+d,y=f*_,M=f*S,A=f*p,w=h*S,x=h*p,v=d*p,O=g*_,P=g*S,D=g*p,I=r.x,z=r.y,N=r.z;return u[0]=(1-(w+v))*I,u[1]=(M+D)*I,u[2]=(A-P)*I,u[3]=0,u[4]=(M-D)*z,u[5]=(1-(y+v))*z,u[6]=(x+O)*z,u[7]=0,u[8]=(A+P)*N,u[9]=(x-O)*N,u[10]=(1-(y+w))*N,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,r){const u=this.elements;let f=Vr.set(u[0],u[1],u[2]).length();const h=Vr.set(u[4],u[5],u[6]).length(),d=Vr.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],Di.copy(this);const _=1/f,S=1/h,p=1/d;return Di.elements[0]*=_,Di.elements[1]*=_,Di.elements[2]*=_,Di.elements[4]*=S,Di.elements[5]*=S,Di.elements[6]*=S,Di.elements[8]*=p,Di.elements[9]*=p,Di.elements[10]*=p,i.setFromRotationMatrix(Di),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,u,f,h,d=Qi,g=!1){const _=this.elements,S=2*f/(i-e),p=2*f/(r-u),y=(i+e)/(i-e),M=(r+u)/(r-u);let A,w;if(g)A=f/(h-f),w=h*f/(h-f);else if(d===Qi)A=-(h+f)/(h-f),w=-2*h*f/(h-f);else if(d===Sc)A=-h/(h-f),w=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return _[0]=S,_[4]=0,_[8]=y,_[12]=0,_[1]=0,_[5]=p,_[9]=M,_[13]=0,_[2]=0,_[6]=0,_[10]=A,_[14]=w,_[3]=0,_[7]=0,_[11]=-1,_[15]=0,this}makeOrthographic(e,i,r,u,f,h,d=Qi,g=!1){const _=this.elements,S=2/(i-e),p=2/(r-u),y=-(i+e)/(i-e),M=-(r+u)/(r-u);let A,w;if(g)A=1/(h-f),w=h/(h-f);else if(d===Qi)A=-2/(h-f),w=-(h+f)/(h-f);else if(d===Sc)A=-1/(h-f),w=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return _[0]=S,_[4]=0,_[8]=0,_[12]=y,_[1]=0,_[5]=p,_[9]=0,_[13]=M,_[2]=0,_[6]=0,_[10]=A,_[14]=w,_[3]=0,_[7]=0,_[11]=0,_[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let u=0;u<16;u++)if(i[u]!==r[u])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Vr=new et,Di=new rn,LE=new et(0,0,0),OE=new et(1,1,1),is=new et,Zu=new et,li=new et,mv=new rn,_v=new js;class ta{constructor(e=0,i=0,r=0,u=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,u=this._order){return this._x=e,this._y=i,this._z=r,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const u=e.elements,f=u[0],h=u[4],d=u[8],g=u[1],_=u[5],S=u[9],p=u[2],y=u[6],M=u[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(y,_),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(g,_)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(xe(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-p,M),this._z=Math.atan2(-h,_)):(this._y=0,this._z=Math.atan2(g,f));break;case"ZYX":this._y=Math.asin(-xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(g,f)):(this._x=0,this._z=Math.atan2(-h,_));break;case"YZX":this._z=Math.asin(xe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-S,_),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,_),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return mv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return _v.setFromEuler(this),this.setFromQuaternion(_v,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class Ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PE=0;const gv=new et,Xr=new js,Sa=new rn,Ku=new et,rl=new et,zE=new et,IE=new js,vv=new et(1,0,0),Sv=new et(0,1,0),yv=new et(0,0,1),xv={type:"added"},BE={type:"removed"},kr={type:"childadded",child:null},md={type:"childremoved",child:null};class Nn extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new et,i=new ta,r=new js,u=new et(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new rn},normalMatrix:{value:new de}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Xr.setFromAxisAngle(e,i),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,i){return Xr.setFromAxisAngle(e,i),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(vv,e)}rotateY(e){return this.rotateOnAxis(Sv,e)}rotateZ(e){return this.rotateOnAxis(yv,e)}translateOnAxis(e,i){return gv.copy(e).applyQuaternion(this.quaternion),this.position.add(gv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(vv,e)}translateY(e){return this.translateOnAxis(Sv,e)}translateZ(e){return this.translateOnAxis(yv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Ku.copy(e):Ku.set(e,i,r);const u=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(rl,Ku,this.up):Sa.lookAt(Ku,rl,this.up),this.quaternion.setFromRotationMatrix(Sa),u&&(Sa.extractRotation(u.matrixWorld),Xr.setFromRotationMatrix(Sa),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xv),kr.child=e,this.dispatchEvent(kr),kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(BE),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xv),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,u=this.children.length;r<u;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,zE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,IE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,u=i.length;r<u;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(d=>({...d})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(d,g){return d[g.uuid]===void 0&&(d[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const g=d.shapes;if(Array.isArray(g))for(let _=0,S=g.length;_<S;_++){const p=g[_];f(e.shapes,p)}else f(e.shapes,g)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let g=0,_=this.material.length;g<_;g++)d.push(f(e.materials,this.material[g]));u.material=d}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const g=this.animations[d];u.animations.push(f(e.animations,g))}}if(i){const d=h(e.geometries),g=h(e.materials),_=h(e.textures),S=h(e.images),p=h(e.shapes),y=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),g.length>0&&(r.materials=g),_.length>0&&(r.textures=_),S.length>0&&(r.images=S),p.length>0&&(r.shapes=p),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=u,r;function h(d){const g=[];for(const _ in d){const S=d[_];delete S.metadata,g.push(S)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const u=e.children[r];this.add(u.clone())}return this}}Nn.DEFAULT_UP=new et(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new et,ya=new et,_d=new et,xa=new et,Yr=new et,qr=new et,Mv=new et,gd=new et,vd=new et,Sd=new et,yd=new sn,xd=new sn,Md=new sn;class Ni{constructor(e=new et,i=new et,r=new et){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,u){u.subVectors(r,i),Ui.subVectors(e,i),u.cross(Ui);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,r,u,f){Ui.subVectors(u,i),ya.subVectors(r,i),_d.subVectors(e,i);const h=Ui.dot(Ui),d=Ui.dot(ya),g=Ui.dot(_d),_=ya.dot(ya),S=ya.dot(_d),p=h*_-d*d;if(p===0)return f.set(0,0,0),null;const y=1/p,M=(_*g-d*S)*y,A=(h*S-d*g)*y;return f.set(1-M-A,A,M)}static containsPoint(e,i,r,u){return this.getBarycoord(e,i,r,u,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,i,r,u,f,h,d,g){return this.getBarycoord(e,i,r,u,xa)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(f,xa.x),g.addScaledVector(h,xa.y),g.addScaledVector(d,xa.z),g)}static getInterpolatedAttribute(e,i,r,u,f,h){return yd.setScalar(0),xd.setScalar(0),Md.setScalar(0),yd.fromBufferAttribute(e,i),xd.fromBufferAttribute(e,r),Md.fromBufferAttribute(e,u),h.setScalar(0),h.addScaledVector(yd,f.x),h.addScaledVector(xd,f.y),h.addScaledVector(Md,f.z),h}static isFrontFacing(e,i,r,u){return Ui.subVectors(r,i),ya.subVectors(e,i),Ui.cross(ya).dot(u)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,u){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,r,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Ui.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ni.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,u,f){return Ni.getInterpolation(e,this.a,this.b,this.c,i,r,u,f)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,u=this.b,f=this.c;let h,d;Yr.subVectors(u,r),qr.subVectors(f,r),gd.subVectors(e,r);const g=Yr.dot(gd),_=qr.dot(gd);if(g<=0&&_<=0)return i.copy(r);vd.subVectors(e,u);const S=Yr.dot(vd),p=qr.dot(vd);if(S>=0&&p<=S)return i.copy(u);const y=g*p-S*_;if(y<=0&&g>=0&&S<=0)return h=g/(g-S),i.copy(r).addScaledVector(Yr,h);Sd.subVectors(e,f);const M=Yr.dot(Sd),A=qr.dot(Sd);if(A>=0&&M<=A)return i.copy(f);const w=M*_-g*A;if(w<=0&&_>=0&&A<=0)return d=_/(_-A),i.copy(r).addScaledVector(qr,d);const x=S*A-M*p;if(x<=0&&p-S>=0&&M-A>=0)return Mv.subVectors(f,u),d=(p-S)/(p-S+(M-A)),i.copy(u).addScaledVector(Mv,d);const v=1/(x+w+y);return h=w*v,d=y*v,i.copy(r).addScaledVector(Yr,h).addScaledVector(qr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ES={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Qu={h:0,s:0,l:0};function Ed(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Re{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,r,u=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ue.colorSpaceToWorking(this,u),this}setHSL(e,i,r,u=Ue.workingColorSpace){if(e=ME(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=Ed(h,f,e+1/3),this.g=Ed(h,f,e),this.b=Ed(h,f,e-1/3)}return Ue.colorSpaceToWorking(this,u),this}setStyle(e,i=xi){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const r=ES[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Ue.workingToColorSpace(In.copy(this),e),Math.round(xe(In.r*255,0,255))*65536+Math.round(xe(In.g*255,0,255))*256+Math.round(xe(In.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(In.copy(this),i);const r=In.r,u=In.g,f=In.b,h=Math.max(r,u,f),d=Math.min(r,u,f);let g,_;const S=(d+h)/2;if(d===h)g=0,_=0;else{const p=h-d;switch(_=S<=.5?p/(h+d):p/(2-h-d),h){case r:g=(u-f)/p+(u<f?6:0);break;case u:g=(f-r)/p+2;break;case f:g=(r-u)/p+4;break}g/=6}return e.h=g,e.s=_,e.l=S,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=xi){Ue.workingToColorSpace(In.copy(this),e);const i=In.r,r=In.g,u=In.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(u*255)})`}offsetHSL(e,i,r){return this.getHSL(as),this.setHSL(as.h+e,as.s+i,as.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(as),e.getHSL(Qu);const r=sd(as.h,Qu.h,i),u=sd(as.s,Qu.s,i),f=sd(as.l,Qu.l,i);return this.setHSL(r,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*u,this.g=f[1]*i+f[4]*r+f[7]*u,this.b=f[2]*i+f[5]*r+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Re;Re.NAMES=ES;let FE=0;class gl extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=ml(),this.name="",this.type="Material",this.blending=to,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Id,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(r):u&&u.isVector3&&r&&r.isVector3?u.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(r.blending=this.blending),this.side!==cs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zd&&(r.blendSrc=this.blendSrc),this.blendDst!==Id&&(r.blendDst=this.blendDst),this.blendEquation!==Xs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function u(f){const h=[];for(const d in f){const g=f[d];delete g.metadata,h.push(g)}return h}if(i){const f=u(e.textures),h=u(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const u=i.length;r=new Array(u);for(let f=0;f!==u;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class TS extends gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=uS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new et,Ju=new ue;let HE=0;class Ji{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=uv,this.updateRanges=[],this.gpuType=Ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[r+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ju.fromBufferAttribute(this,i),Ju.applyMatrix3(e),this.setXY(i,Ju.x,Ju.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=il(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=il(i,this.array)),i}setX(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=il(i,this.array)),i}setY(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=il(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=il(i,this.array)),i}setW(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,u){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),u=Zn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=u,this}setXYZW(e,i,r,u,f){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),u=Zn(u,this.array),f=Zn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uv&&(e.usage=this.usage),e}}class bS extends Ji{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class AS extends Ji{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class vn extends Ji{constructor(e,i,r){super(new Float32Array(e),i,r)}}let GE=0;const yi=new rn,Td=new Nn,Wr=new et,ui=new _l,ol=new _l,Tn=new et;class Pi extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xS(e)?AS:bS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new de().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,i,r){return yi.makeTranslation(e,i,r),this.applyMatrix4(yi),this}scale(e,i,r){return yi.makeScale(e,i,r),this.applyMatrix4(yi),this}lookAt(e){return Td.lookAt(e),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vn(r,3))}else{const r=Math.min(e.length,i.count);for(let u=0;u<r;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,u=i.length;r<u;r++){const f=i[r];ui.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(e){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];ol.setFromBufferAttribute(d),this.morphTargetsRelative?(Tn.addVectors(ui.min,ol.min),ui.expandByPoint(Tn),Tn.addVectors(ui.max,ol.max),ui.expandByPoint(Tn)):(ui.expandByPoint(ol.min),ui.expandByPoint(ol.max))}ui.getCenter(r);let u=0;for(let f=0,h=e.count;f<h;f++)Tn.fromBufferAttribute(e,f),u=Math.max(u,r.distanceToSquared(Tn));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],g=this.morphTargetsRelative;for(let _=0,S=d.count;_<S;_++)Tn.fromBufferAttribute(d,_),g&&(Wr.fromBufferAttribute(e,_),Tn.add(Wr)),u=Math.max(u,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,u=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],g=[];for(let X=0;X<r.count;X++)d[X]=new et,g[X]=new et;const _=new et,S=new et,p=new et,y=new ue,M=new ue,A=new ue,w=new et,x=new et;function v(X,C,R){_.fromBufferAttribute(r,X),S.fromBufferAttribute(r,C),p.fromBufferAttribute(r,R),y.fromBufferAttribute(f,X),M.fromBufferAttribute(f,C),A.fromBufferAttribute(f,R),S.sub(_),p.sub(_),M.sub(y),A.sub(y);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(w.copy(S).multiplyScalar(A.y).addScaledVector(p,-M.y).multiplyScalar(H),x.copy(p).multiplyScalar(M.x).addScaledVector(S,-A.x).multiplyScalar(H),d[X].add(w),d[C].add(w),d[R].add(w),g[X].add(x),g[C].add(x),g[R].add(x))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let X=0,C=O.length;X<C;++X){const R=O[X],H=R.start,Q=R.count;for(let rt=H,mt=H+Q;rt<mt;rt+=3)v(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const P=new et,D=new et,I=new et,z=new et;function N(X){I.fromBufferAttribute(u,X),z.copy(I);const C=d[X];P.copy(C),P.sub(I.multiplyScalar(I.dot(C))).normalize(),D.crossVectors(z,C);const H=D.dot(g[X])<0?-1:1;h.setXYZW(X,P.x,P.y,P.z,H)}for(let X=0,C=O.length;X<C;++X){const R=O[X],H=R.start,Q=R.count;for(let rt=H,mt=H+Q;rt<mt;rt+=3)N(e.getX(rt+0)),N(e.getX(rt+1)),N(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const u=new et,f=new et,h=new et,d=new et,g=new et,_=new et,S=new et,p=new et;if(e)for(let y=0,M=e.count;y<M;y+=3){const A=e.getX(y+0),w=e.getX(y+1),x=e.getX(y+2);u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,x),S.subVectors(h,f),p.subVectors(u,f),S.cross(p),d.fromBufferAttribute(r,A),g.fromBufferAttribute(r,w),_.fromBufferAttribute(r,x),d.add(S),g.add(S),_.add(S),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(w,g.x,g.y,g.z),r.setXYZ(x,_.x,_.y,_.z)}else for(let y=0,M=i.count;y<M;y+=3)u.fromBufferAttribute(i,y+0),f.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),S.subVectors(h,f),p.subVectors(u,f),S.cross(p),r.setXYZ(y+0,S.x,S.y,S.z),r.setXYZ(y+1,S.x,S.y,S.z),r.setXYZ(y+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Tn.fromBufferAttribute(e,i),Tn.normalize(),e.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(d,g){const _=d.array,S=d.itemSize,p=d.normalized,y=new _.constructor(g.length*S);let M=0,A=0;for(let w=0,x=g.length;w<x;w++){d.isInterleavedBufferAttribute?M=g[w]*d.data.stride+d.offset:M=g[w]*S;for(let v=0;v<S;v++)y[A++]=_[M++]}return new Ji(y,S,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Pi,r=this.index.array,u=this.attributes;for(const d in u){const g=u[d],_=e(g,r);i.setAttribute(d,_)}const f=this.morphAttributes;for(const d in f){const g=[],_=f[d];for(let S=0,p=_.length;S<p;S++){const y=_[S],M=e(y,r);g.push(M)}i.morphAttributes[d]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.addGroup(_.start,_.count,_.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const _ in g)g[_]!==void 0&&(e[_]=g[_]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const g in r){const _=r[g];e.data.attributes[g]=_.toJSON(e.data)}const u={};let f=!1;for(const g in this.morphAttributes){const _=this.morphAttributes[g],S=[];for(let p=0,y=_.length;p<y;p++){const M=_[p];S.push(M.toJSON(e.data))}S.length>0&&(u[g]=S,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const u=e.attributes;for(const _ in u){const S=u[_];this.setAttribute(_,S.clone(i))}const f=e.morphAttributes;for(const _ in f){const S=[],p=f[_];for(let y=0,M=p.length;y<M;y++)S.push(p[y].clone(i));this.morphAttributes[_]=S}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let _=0,S=h.length;_<S;_++){const p=h[_];this.addGroup(p.start,p.count,p.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ev=new rn,Bs=new zp,$u=new Pp,Tv=new et,tc=new et,ec=new et,nc=new et,bd=new et,ic=new et,bv=new et,ac=new et;class Un extends Nn{constructor(e=new Pi,i=new TS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const u=i[r[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,u=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(u,e);const d=this.morphTargetInfluences;if(f&&d){ic.set(0,0,0);for(let g=0,_=f.length;g<_;g++){const S=d[g],p=f[g];S!==0&&(bd.fromBufferAttribute(p,e),h?ic.addScaledVector(bd,S):ic.addScaledVector(bd.sub(i),S))}i.add(ic)}return i}raycast(e,i){const r=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),$u.copy(r.boundingSphere),$u.applyMatrix4(f),Bs.copy(e.ray).recast(e.near),!($u.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere($u,Tv)===null||Bs.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(Ev.copy(f).invert(),Bs.copy(e.ray).applyMatrix4(Ev),!(r.boundingBox!==null&&Bs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Bs)))}_computeIntersections(e,i,r){let u;const f=this.geometry,h=this.material,d=f.index,g=f.attributes.position,_=f.attributes.uv,S=f.attributes.uv1,p=f.attributes.normal,y=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,w=y.length;A<w;A++){const x=y[A],v=h[x.materialIndex],O=Math.max(x.start,M.start),P=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let D=O,I=P;D<I;D+=3){const z=d.getX(D),N=d.getX(D+1),X=d.getX(D+2);u=sc(this,v,e,r,_,S,p,z,N,X),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=x.materialIndex,i.push(u))}}else{const A=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let x=A,v=w;x<v;x+=3){const O=d.getX(x),P=d.getX(x+1),D=d.getX(x+2);u=sc(this,h,e,r,_,S,p,O,P,D),u&&(u.faceIndex=Math.floor(x/3),i.push(u))}}else if(g!==void 0)if(Array.isArray(h))for(let A=0,w=y.length;A<w;A++){const x=y[A],v=h[x.materialIndex],O=Math.max(x.start,M.start),P=Math.min(g.count,Math.min(x.start+x.count,M.start+M.count));for(let D=O,I=P;D<I;D+=3){const z=D,N=D+1,X=D+2;u=sc(this,v,e,r,_,S,p,z,N,X),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=x.materialIndex,i.push(u))}}else{const A=Math.max(0,M.start),w=Math.min(g.count,M.start+M.count);for(let x=A,v=w;x<v;x+=3){const O=x,P=x+1,D=x+2;u=sc(this,h,e,r,_,S,p,O,P,D),u&&(u.faceIndex=Math.floor(x/3),i.push(u))}}}}function VE(o,e,i,r,u,f,h,d){let g;if(e.side===Qn?g=r.intersectTriangle(h,f,u,!0,d):g=r.intersectTriangle(u,f,h,e.side===cs,d),g===null)return null;ac.copy(d),ac.applyMatrix4(o.matrixWorld);const _=i.ray.origin.distanceTo(ac);return _<i.near||_>i.far?null:{distance:_,point:ac.clone(),object:o}}function sc(o,e,i,r,u,f,h,d,g,_){o.getVertexPosition(d,tc),o.getVertexPosition(g,ec),o.getVertexPosition(_,nc);const S=VE(o,e,i,r,tc,ec,nc,bv);if(S){const p=new et;Ni.getBarycoord(bv,tc,ec,nc,p),u&&(S.uv=Ni.getInterpolatedAttribute(u,d,g,_,p,new ue)),f&&(S.uv1=Ni.getInterpolatedAttribute(f,d,g,_,p,new ue)),h&&(S.normal=Ni.getInterpolatedAttribute(h,d,g,_,p,new et),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const y={a:d,b:g,c:_,normal:new et,materialIndex:0};Ni.getNormal(tc,ec,nc,y.normal),S.face=y,S.barycoord=p}return S}class vl extends Pi{constructor(e=1,i=1,r=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const g=[],_=[],S=[],p=[];let y=0,M=0;A("z","y","x",-1,-1,r,i,e,h,f,0),A("z","y","x",1,-1,r,i,-e,h,f,1),A("x","z","y",1,1,e,r,i,u,h,2),A("x","z","y",1,-1,e,r,-i,u,h,3),A("x","y","z",1,-1,e,i,r,u,f,4),A("x","y","z",-1,-1,e,i,-r,u,f,5),this.setIndex(g),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(S,3)),this.setAttribute("uv",new vn(p,2));function A(w,x,v,O,P,D,I,z,N,X,C){const R=D/N,H=I/X,Q=D/2,rt=I/2,mt=z/2,ut=N+1,Y=X+1;let st=0,Z=0;const gt=new et;for(let St=0;St<Y;St++){const Ht=St*H-rt;for(let se=0;se<ut;se++){const be=se*R-Q;gt[w]=be*O,gt[x]=Ht*P,gt[v]=mt,_.push(gt.x,gt.y,gt.z),gt[w]=0,gt[x]=0,gt[v]=z>0?1:-1,S.push(gt.x,gt.y,gt.z),p.push(se/N),p.push(1-St/X),st+=1}}for(let St=0;St<X;St++)for(let Ht=0;Ht<N;Ht++){const se=y+Ht+ut*St,be=y+Ht+ut*(St+1),F=y+(Ht+1)+ut*(St+1),ct=y+(Ht+1)+ut*St;g.push(se,be,ct),g.push(be,F,ct),Z+=6}d.addGroup(M,Z,C),M+=Z,y+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const u=o[i][r];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=u.clone():Array.isArray(u)?e[i][r]=u.slice():e[i][r]=u}}return e}function Xn(o){const e={};for(let i=0;i<o.length;i++){const r=ro(o[i]);for(const u in r)e[u]=r[u]}return e}function XE(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function RS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const kE={clone:ro,merge:Xn};var YE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fs extends gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YE,this.fragmentShader=qE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=XE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?i.uniforms[u]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[u]={type:"m4",value:h.toArray()}:i.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const u in this.extensions)this.extensions[u]===!0&&(r[u]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class CS extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new et,Av=new ue,Rv=new ue;class Mi extends CS{constructor(e=50,i=1,r=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ep*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ep*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,i){return this.getViewBounds(e,Av,Rv),i.subVectors(Rv,Av)}setViewOffset(e,i,r,u,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(_c*.5*this.fov)/this.zoom,r=2*i,u=this.aspect*r,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,_=h.fullHeight;f+=h.offsetX*u/g,i-=h.offsetY*r/_,u*=h.width/g,r*=h.height/_}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const jr=-90,Zr=1;class WE extends Nn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Mi(jr,Zr,e,i);u.layers=this.layers,this.add(u);const f=new Mi(jr,Zr,e,i);f.layers=this.layers,this.add(f);const h=new Mi(jr,Zr,e,i);h.layers=this.layers,this.add(h);const d=new Mi(jr,Zr,e,i);d.layers=this.layers,this.add(d);const g=new Mi(jr,Zr,e,i);g.layers=this.layers,this.add(g);const _=new Mi(jr,Zr,e,i);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,u,f,h,d,g]=i;for(const _ of i)this.remove(_);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Sc)r.up.set(0,-1,0),r.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const _ of i)this.add(_),_.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,g,_,S]=this.children,p=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,u),e.render(i,f),e.setRenderTarget(r,1,u),e.render(i,h),e.setRenderTarget(r,2,u),e.render(i,d),e.setRenderTarget(r,3,u),e.render(i,g),e.setRenderTarget(r,4,u),e.render(i,_),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,u),e.render(i,S),e.setRenderTarget(p,y,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class wS extends Jn{constructor(e=[],i=io,r,u,f,h,d,g,_,S){super(e,i,r,u,f,h,d,g,_,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jE extends Zs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},u=[r,r,r,r,r,r];this.texture=new wS(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new vl(5,5,5),f=new fs({name:"CubemapFromEquirect",uniforms:ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:ls});f.uniforms.tEquirect.value=i;const h=new Un(u,f),d=i.minFilter;return i.minFilter===qs&&(i.minFilter=Ki),new WE(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,u=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,u);e.setRenderTarget(f)}}class Ta extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZE={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let u=null,f=null,h=null;const d=this._targetRay,g=this._grip,_=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(_&&e.hand){h=!0;for(const w of e.hand.values()){const x=i.getJointPose(w,r),v=this._getHandJoint(_,w);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const S=_.joints["index-finger-tip"],p=_.joints["thumb-tip"],y=S.position.distanceTo(p.position),M=.02,A=.005;_.inputState.pinching&&y>M+A?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!_.inputState.pinching&&y<=M-A&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,f.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(f.linearVelocity)):g.hasLinearVelocity=!1,f.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(f.angularVelocity)):g.hasAngularVelocity=!1));d!==null&&(u=i.getPose(e.targetRaySpace,r),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ZE)))}return d!==null&&(d.visible=u!==null),g!==null&&(g.visible=f!==null),_!==null&&(_.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ta;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class KE extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Rd=new et,QE=new et,JE=new de;class rs{constructor(e=new et(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,u){return this.normal.set(e,i,r),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const u=Rd.subVectors(r,i).cross(QE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Rd),u=this.normal.dot(r);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||JE.getNormalMatrix(e),u=this.coplanarPoint(Rd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new Pp,$E=new ue(.5,.5),rc=new et;class Bp{constructor(e=new rs,i=new rs,r=new rs,u=new rs,f=new rs,h=new rs){this.planes=[e,i,r,u,f,h]}set(e,i,r,u,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Qi,r=!1){const u=this.planes,f=e.elements,h=f[0],d=f[1],g=f[2],_=f[3],S=f[4],p=f[5],y=f[6],M=f[7],A=f[8],w=f[9],x=f[10],v=f[11],O=f[12],P=f[13],D=f[14],I=f[15];if(u[0].setComponents(_-h,M-S,v-A,I-O).normalize(),u[1].setComponents(_+h,M+S,v+A,I+O).normalize(),u[2].setComponents(_+d,M+p,v+w,I+P).normalize(),u[3].setComponents(_-d,M-p,v-w,I-P).normalize(),r)u[4].setComponents(g,y,x,D).normalize(),u[5].setComponents(_-g,M-y,v-x,I-D).normalize();else if(u[4].setComponents(_-g,M-y,v-x,I-D).normalize(),i===Qi)u[5].setComponents(_+g,M+y,v+x,I+D).normalize();else if(i===Sc)u[5].setComponents(g,y,x,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);const i=$E.distanceTo(e.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const i=this.planes,r=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const u=i[r];if(rc.x=u.normal.x>0?e.max.x:e.min.x,rc.y=u.normal.y>0?e.max.y:e.min.y,rc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class DS extends Jn{constructor(e,i,r=Ws,u,f,h,d=Oi,g=Oi,_,S=fl,p=1){if(S!==fl&&S!==hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:p};super(y,u,f,h,d,g,S,r,_),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class US extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fp extends Pi{constructor(e=1,i=1,r=4,u=8,f=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:i,capSegments:r,radialSegments:u,heightSegments:f},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),u=Math.max(3,Math.floor(u)),f=Math.max(1,Math.floor(f));const h=[],d=[],g=[],_=[],S=i/2,p=Math.PI/2*e,y=i,M=2*p+y,A=r*2+f,w=u+1,x=new et,v=new et;for(let O=0;O<=A;O++){let P=0,D=0,I=0,z=0;if(O<=r){const C=O/r,R=C*Math.PI/2;D=-S-e*Math.cos(R),I=e*Math.sin(R),z=-e*Math.cos(R),P=C*p}else if(O<=r+f){const C=(O-r)/f;D=-S+C*i,I=e,z=0,P=p+C*y}else{const C=(O-r-f)/r,R=C*Math.PI/2;D=S+e*Math.sin(R),I=e*Math.cos(R),z=e*Math.sin(R),P=p+y+C*p}const N=Math.max(0,Math.min(1,P/M));let X=0;O===0?X=.5/u:O===A&&(X=-.5/u);for(let C=0;C<=u;C++){const R=C/u,H=R*Math.PI*2,Q=Math.sin(H),rt=Math.cos(H);v.x=-I*rt,v.y=D,v.z=I*Q,d.push(v.x,v.y,v.z),x.set(-I*rt,z,I*Q),x.normalize(),g.push(x.x,x.y,x.z),_.push(R+X,N)}if(O>0){const C=(O-1)*w;for(let R=0;R<u;R++){const H=C+R,Q=C+R+1,rt=O*w+R,mt=O*w+R+1;h.push(H,Q,rt),h.push(Q,mt,rt)}}}this.setIndex(h),this.setAttribute("position",new vn(d,3)),this.setAttribute("normal",new vn(g,3)),this.setAttribute("uv",new vn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fp(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Hp extends Pi{constructor(e=1,i=32,r=0,u=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:r,thetaLength:u},i=Math.max(3,i);const f=[],h=[],d=[],g=[],_=new et,S=new ue;h.push(0,0,0),d.push(0,0,1),g.push(.5,.5);for(let p=0,y=3;p<=i;p++,y+=3){const M=r+p/i*u;_.x=e*Math.cos(M),_.y=e*Math.sin(M),h.push(_.x,_.y,_.z),d.push(0,0,1),S.x=(h[y]/e+1)/2,S.y=(h[y+1]/e+1)/2,g.push(S.x,S.y)}for(let p=1;p<=i;p++)f.push(p,p+1,0);this.setIndex(f),this.setAttribute("position",new vn(h,3)),this.setAttribute("normal",new vn(d,3)),this.setAttribute("uv",new vn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class oo extends Pi{constructor(e=1,i=1,r=1,u=32,f=1,h=!1,d=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:u,heightSegments:f,openEnded:h,thetaStart:d,thetaLength:g};const _=this;u=Math.floor(u),f=Math.floor(f);const S=[],p=[],y=[],M=[];let A=0;const w=[],x=r/2;let v=0;O(),h===!1&&(e>0&&P(!0),i>0&&P(!1)),this.setIndex(S),this.setAttribute("position",new vn(p,3)),this.setAttribute("normal",new vn(y,3)),this.setAttribute("uv",new vn(M,2));function O(){const D=new et,I=new et;let z=0;const N=(i-e)/r;for(let X=0;X<=f;X++){const C=[],R=X/f,H=R*(i-e)+e;for(let Q=0;Q<=u;Q++){const rt=Q/u,mt=rt*g+d,ut=Math.sin(mt),Y=Math.cos(mt);I.x=H*ut,I.y=-R*r+x,I.z=H*Y,p.push(I.x,I.y,I.z),D.set(ut,N,Y).normalize(),y.push(D.x,D.y,D.z),M.push(rt,1-R),C.push(A++)}w.push(C)}for(let X=0;X<u;X++)for(let C=0;C<f;C++){const R=w[C][X],H=w[C+1][X],Q=w[C+1][X+1],rt=w[C][X+1];(e>0||C!==0)&&(S.push(R,H,rt),z+=3),(i>0||C!==f-1)&&(S.push(H,Q,rt),z+=3)}_.addGroup(v,z,0),v+=z}function P(D){const I=A,z=new ue,N=new et;let X=0;const C=D===!0?e:i,R=D===!0?1:-1;for(let Q=1;Q<=u;Q++)p.push(0,x*R,0),y.push(0,R,0),M.push(.5,.5),A++;const H=A;for(let Q=0;Q<=u;Q++){const mt=Q/u*g+d,ut=Math.cos(mt),Y=Math.sin(mt);N.x=C*Y,N.y=x*R,N.z=C*ut,p.push(N.x,N.y,N.z),y.push(0,R,0),z.x=ut*.5+.5,z.y=Y*.5*R+.5,M.push(z.x,z.y),A++}for(let Q=0;Q<u;Q++){const rt=I+Q,mt=H+Q;D===!0?S.push(mt,mt+1,rt):S.push(mt+1,mt,rt),X+=3}_.addGroup(v,X,D===!0?1:2),v+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mc extends Pi{constructor(e=1,i=1,r=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:u};const f=e/2,h=i/2,d=Math.floor(r),g=Math.floor(u),_=d+1,S=g+1,p=e/d,y=i/g,M=[],A=[],w=[],x=[];for(let v=0;v<S;v++){const O=v*y-h;for(let P=0;P<_;P++){const D=P*p-f;A.push(D,-O,0),w.push(0,0,1),x.push(P/d),x.push(1-v/g)}}for(let v=0;v<g;v++)for(let O=0;O<d;O++){const P=O+_*v,D=O+_*(v+1),I=O+1+_*(v+1),z=O+1+_*v;M.push(P,D,z),M.push(D,I,z)}this.setIndex(M),this.setAttribute("position",new vn(A,3)),this.setAttribute("normal",new vn(w,3)),this.setAttribute("uv",new vn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ec extends Pi{constructor(e=1,i=32,r=16,u=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:u,phiLength:f,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const g=Math.min(h+d,Math.PI);let _=0;const S=[],p=new et,y=new et,M=[],A=[],w=[],x=[];for(let v=0;v<=r;v++){const O=[],P=v/r;let D=0;v===0&&h===0?D=.5/i:v===r&&g===Math.PI&&(D=-.5/i);for(let I=0;I<=i;I++){const z=I/i;p.x=-e*Math.cos(u+z*f)*Math.sin(h+P*d),p.y=e*Math.cos(h+P*d),p.z=e*Math.sin(u+z*f)*Math.sin(h+P*d),A.push(p.x,p.y,p.z),y.copy(p).normalize(),w.push(y.x,y.y,y.z),x.push(z+D,1-P),O.push(_++)}S.push(O)}for(let v=0;v<r;v++)for(let O=0;O<i;O++){const P=S[v][O+1],D=S[v][O],I=S[v+1][O],z=S[v+1][O+1];(v!==0||h>0)&&M.push(P,D,z),(v!==r-1||g<Math.PI)&&M.push(D,I,z)}this.setIndex(M),this.setAttribute("position",new vn(A,3)),this.setAttribute("normal",new vn(w,3)),this.setAttribute("uv",new vn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lo extends gl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=SS,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tT extends gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eT extends gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class NS extends Nn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class nT extends NS{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Cd=new rn,Cv=new et,wv=new et;class iT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bp,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Cv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cv),wv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(wv),i.updateMatrixWorld(),Cd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class LS extends CS{constructor(e=-1,i=1,r=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=u+i,g=u-i;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=_*this.view.offsetX,h=f+_*this.view.width,d-=S*this.view.offsetY,g=d-S*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class aT extends iT{constructor(){super(new LS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sT extends NS{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new aT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rT extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dv=new rn;class oT{constructor(e,i,r=0,u=1/0){this.ray=new zp(e,i),this.near=r,this.far=u,this.camera=null,this.layers=new Ip,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Dv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dv),this}intersectObject(e,i=!0,r=[]){return Tp(e,this,r,i),r.sort(Uv),r}intersectObjects(e,i=!0,r=[]){for(let u=0,f=e.length;u<f;u++)Tp(e[u],this,r,i);return r.sort(Uv),r}}function Uv(o,e){return o.distance-e.distance}function Tp(o,e,i,r){let u=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(u=!1),u===!0&&r===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Tp(f[h],e,i,!0)}}class Nv{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lT extends Ks{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Lv(o,e,i,r){const u=uT(r);switch(i){case mS:return o*e;case gS:return o*e/u.components*u.byteLength;case Up:return o*e/u.components*u.byteLength;case vS:return o*e*2/u.components*u.byteLength;case Np:return o*e*2/u.components*u.byteLength;case _S:return o*e*3/u.components*u.byteLength;case Li:return o*e*4/u.components*u.byteLength;case Lp:return o*e*4/u.components*u.byteLength;case hc:case dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case pc:case mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kd:case Jd:return Math.max(o,16)*Math.max(e,8)/4;case Zd:case Qd:return Math.max(o,8)*Math.max(e,8)/2;case $d:case tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case np:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ip:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ap:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case sp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case rp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case op:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case lp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case up:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case cp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case fp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case hp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case dp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case pp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case mp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case _p:case gp:case vp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Sp:case yp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case xp:case Mp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function uT(o){switch(o){case $i:case fS:return{byteLength:1,components:1};case ul:case hS:case pl:return{byteLength:2,components:1};case wp:case Dp:return{byteLength:2,components:4};case Ws:case Cp:case Ea:return{byteLength:4,components:1};case dS:case pS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function OS(){let o=null,e=!1,i=null,r=null;function u(f,h){i(f,h),r=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function cT(o){const e=new WeakMap;function i(d,g){const _=d.array,S=d.usage,p=_.byteLength,y=o.createBuffer();o.bindBuffer(g,y),o.bufferData(g,_,S),d.onUploadCallback();let M;if(_ instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&_ instanceof Float16Array)M=o.HALF_FLOAT;else if(_ instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)M=o.SHORT;else if(_ instanceof Uint32Array)M=o.UNSIGNED_INT;else if(_ instanceof Int32Array)M=o.INT;else if(_ instanceof Int8Array)M=o.BYTE;else if(_ instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:y,type:M,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:p}}function r(d,g,_){const S=g.array,p=g.updateRanges;if(o.bindBuffer(_,d),p.length===0)o.bufferSubData(_,0,S);else{p.sort((M,A)=>M.start-A.start);let y=0;for(let M=1;M<p.length;M++){const A=p[y],w=p[M];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++y,p[y]=w)}p.length=y+1;for(let M=0,A=p.length;M<A;M++){const w=p[M];o.bufferSubData(_,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}g.clearUpdateRanges()}g.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const g=e.get(d);g&&(o.deleteBuffer(g.buffer),e.delete(d))}function h(d,g){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const _=e.get(d);if(_===void 0)e.set(d,i(d,g));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(_.buffer,d,g),_.version=d.version}}return{get:u,remove:f,update:h}}var fT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hT=`#ifdef USE_ALPHAHASH
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
#endif`,dT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_T=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gT=`#ifdef USE_AOMAP
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
#endif`,vT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ST=`#ifdef USE_BATCHING
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
#endif`,yT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ET=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TT=`#ifdef USE_IRIDESCENCE
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
#endif`,bT=`#ifdef USE_BUMPMAP
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
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,OT=`#define PI 3.141592653589793
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
} // validated`,PT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zT=`vec3 transformedNormal = objectNormal;
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
#endif`,IT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GT="gl_FragColor = linearToOutputTexel( gl_FragColor );",VT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YT=`#ifdef USE_ENVMAP
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
#endif`,qT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WT=`#ifdef USE_ENVMAP
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
#endif`,jT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JT=`#ifdef USE_GRADIENTMAP
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
}`,$T=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nb=`uniform bool receiveShadow;
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
#endif`,ib=`#ifdef USE_ENVMAP
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
#endif`,ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lb=`PhysicalMaterial material;
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
#endif`,ub=`struct PhysicalMaterial {
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
}`,cb=`
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
#endif`,fb=`#if defined( RE_IndirectDiffuse )
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
#endif`,hb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yb=`#if defined( USE_POINTS_UV )
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
#endif`,xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ab=`#ifdef USE_MORPHTARGETS
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
#endif`,Rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lb=`#ifdef USE_NORMALMAP
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
#endif`,Ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zb=`float getShadowMask() {
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
}`,Kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qb=`#ifdef USE_SKINNING
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
#endif`,Jb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$b=`#ifdef USE_SKINNING
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
#endif`,tA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aA=`#ifdef USE_TRANSMISSION
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
#endif`,sA=`#ifdef USE_TRANSMISSION
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
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fA=`uniform sampler2D t2D;
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`#include <common>
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
}`,gA=`#if DEPTH_PACKING == 3200
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
}`,vA=`#define DISTANCE
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
}`,SA=`#define DISTANCE
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
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`uniform float scale;
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
}`,EA=`uniform vec3 diffuse;
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
}`,TA=`#include <common>
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
}`,bA=`uniform vec3 diffuse;
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
}`,AA=`#define LAMBERT
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
}`,RA=`#define LAMBERT
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
}`,CA=`#define MATCAP
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
}`,wA=`#define MATCAP
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
}`,DA=`#define NORMAL
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
}`,UA=`#define NORMAL
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
}`,NA=`#define PHONG
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
}`,LA=`#define PHONG
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
}`,OA=`#define STANDARD
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
}`,PA=`#define STANDARD
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
}`,zA=`#define TOON
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
}`,IA=`#define TOON
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
}`,BA=`uniform float size;
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
}`,FA=`uniform vec3 diffuse;
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
}`,HA=`#include <common>
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
}`,GA=`uniform vec3 color;
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
}`,VA=`uniform float rotation;
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
}`,XA=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:fT,alphahash_pars_fragment:hT,alphamap_fragment:dT,alphamap_pars_fragment:pT,alphatest_fragment:mT,alphatest_pars_fragment:_T,aomap_fragment:gT,aomap_pars_fragment:vT,batching_pars_vertex:ST,batching_vertex:yT,begin_vertex:xT,beginnormal_vertex:MT,bsdfs:ET,iridescence_fragment:TT,bumpmap_pars_fragment:bT,clipping_planes_fragment:AT,clipping_planes_pars_fragment:RT,clipping_planes_pars_vertex:CT,clipping_planes_vertex:wT,color_fragment:DT,color_pars_fragment:UT,color_pars_vertex:NT,color_vertex:LT,common:OT,cube_uv_reflection_fragment:PT,defaultnormal_vertex:zT,displacementmap_pars_vertex:IT,displacementmap_vertex:BT,emissivemap_fragment:FT,emissivemap_pars_fragment:HT,colorspace_fragment:GT,colorspace_pars_fragment:VT,envmap_fragment:XT,envmap_common_pars_fragment:kT,envmap_pars_fragment:YT,envmap_pars_vertex:qT,envmap_physical_pars_fragment:ib,envmap_vertex:WT,fog_vertex:jT,fog_pars_vertex:ZT,fog_fragment:KT,fog_pars_fragment:QT,gradientmap_pars_fragment:JT,lightmap_pars_fragment:$T,lights_lambert_fragment:tb,lights_lambert_pars_fragment:eb,lights_pars_begin:nb,lights_toon_fragment:ab,lights_toon_pars_fragment:sb,lights_phong_fragment:rb,lights_phong_pars_fragment:ob,lights_physical_fragment:lb,lights_physical_pars_fragment:ub,lights_fragment_begin:cb,lights_fragment_maps:fb,lights_fragment_end:hb,logdepthbuf_fragment:db,logdepthbuf_pars_fragment:pb,logdepthbuf_pars_vertex:mb,logdepthbuf_vertex:_b,map_fragment:gb,map_pars_fragment:vb,map_particle_fragment:Sb,map_particle_pars_fragment:yb,metalnessmap_fragment:xb,metalnessmap_pars_fragment:Mb,morphinstance_vertex:Eb,morphcolor_vertex:Tb,morphnormal_vertex:bb,morphtarget_pars_vertex:Ab,morphtarget_vertex:Rb,normal_fragment_begin:Cb,normal_fragment_maps:wb,normal_pars_fragment:Db,normal_pars_vertex:Ub,normal_vertex:Nb,normalmap_pars_fragment:Lb,clearcoat_normal_fragment_begin:Ob,clearcoat_normal_fragment_maps:Pb,clearcoat_pars_fragment:zb,iridescence_pars_fragment:Ib,opaque_fragment:Bb,packing:Fb,premultiplied_alpha_fragment:Hb,project_vertex:Gb,dithering_fragment:Vb,dithering_pars_fragment:Xb,roughnessmap_fragment:kb,roughnessmap_pars_fragment:Yb,shadowmap_pars_fragment:qb,shadowmap_pars_vertex:Wb,shadowmap_vertex:jb,shadowmask_pars_fragment:Zb,skinbase_vertex:Kb,skinning_pars_vertex:Qb,skinning_vertex:Jb,skinnormal_vertex:$b,specularmap_fragment:tA,specularmap_pars_fragment:eA,tonemapping_fragment:nA,tonemapping_pars_fragment:iA,transmission_fragment:aA,transmission_pars_fragment:sA,uv_pars_fragment:rA,uv_pars_vertex:oA,uv_vertex:lA,worldpos_vertex:uA,background_vert:cA,background_frag:fA,backgroundCube_vert:hA,backgroundCube_frag:dA,cube_vert:pA,cube_frag:mA,depth_vert:_A,depth_frag:gA,distanceRGBA_vert:vA,distanceRGBA_frag:SA,equirect_vert:yA,equirect_frag:xA,linedashed_vert:MA,linedashed_frag:EA,meshbasic_vert:TA,meshbasic_frag:bA,meshlambert_vert:AA,meshlambert_frag:RA,meshmatcap_vert:CA,meshmatcap_frag:wA,meshnormal_vert:DA,meshnormal_frag:UA,meshphong_vert:NA,meshphong_frag:LA,meshphysical_vert:OA,meshphysical_frag:PA,meshtoon_vert:zA,meshtoon_frag:IA,points_vert:BA,points_frag:FA,shadow_vert:HA,shadow_frag:GA,sprite_vert:VA,sprite_frag:XA},zt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},ji={basic:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Re(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Xn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Xn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Re(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Xn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Xn([zt.points,zt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Xn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Xn([zt.common,zt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Xn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Xn([zt.sprite,zt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Xn([zt.common,zt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Xn([zt.lights,zt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};ji.physical={uniforms:Xn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const oc={r:0,b:0,g:0},Hs=new ta,kA=new rn;function YA(o,e,i,r,u,f,h){const d=new Re(0);let g=f===!0?0:1,_,S,p=null,y=0,M=null;function A(P){let D=P.isScene===!0?P.background:null;return D&&D.isTexture&&(D=(P.backgroundBlurriness>0?i:e).get(D)),D}function w(P){let D=!1;const I=A(P);I===null?v(d,g):I&&I.isColor&&(v(I,1),D=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(P,D){const I=A(D);I&&(I.isCubeTexture||I.mapping===xc)?(S===void 0&&(S=new Un(new vl(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:ro(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(z,N,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(S)),Hs.copy(D.backgroundRotation),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),S.material.uniforms.envMap.value=I,S.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(kA.makeRotationFromEuler(Hs)),S.material.toneMapped=Ue.getTransfer(I.colorSpace)!==Xe,(p!==I||y!==I.version||M!==o.toneMapping)&&(S.material.needsUpdate=!0,p=I,y=I.version,M=o.toneMapping),S.layers.enableAll(),P.unshift(S,S.geometry,S.material,0,0,null)):I&&I.isTexture&&(_===void 0&&(_=new Un(new Mc(2,2),new fs({name:"BackgroundMaterial",uniforms:ro(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(_)),_.material.uniforms.t2D.value=I,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.toneMapped=Ue.getTransfer(I.colorSpace)!==Xe,I.matrixAutoUpdate===!0&&I.updateMatrix(),_.material.uniforms.uvTransform.value.copy(I.matrix),(p!==I||y!==I.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,p=I,y=I.version,M=o.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null))}function v(P,D){P.getRGB(oc,RS(o)),r.buffers.color.setClear(oc.r,oc.g,oc.b,D,h)}function O(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,D=1){d.set(P),g=D,v(d,g)},getClearAlpha:function(){return g},setClearAlpha:function(P){g=P,v(d,g)},render:w,addToRenderList:x,dispose:O}}function qA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},u=y(null);let f=u,h=!1;function d(R,H,Q,rt,mt){let ut=!1;const Y=p(rt,Q,H);f!==Y&&(f=Y,_(f.object)),ut=M(R,rt,Q,mt),ut&&A(R,rt,Q,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,D(R,H,Q,rt),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function g(){return o.createVertexArray()}function _(R){return o.bindVertexArray(R)}function S(R){return o.deleteVertexArray(R)}function p(R,H,Q){const rt=Q.wireframe===!0;let mt=r[R.id];mt===void 0&&(mt={},r[R.id]=mt);let ut=mt[H.id];ut===void 0&&(ut={},mt[H.id]=ut);let Y=ut[rt];return Y===void 0&&(Y=y(g()),ut[rt]=Y),Y}function y(R){const H=[],Q=[],rt=[];for(let mt=0;mt<i;mt++)H[mt]=0,Q[mt]=0,rt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:rt,object:R,attributes:{},index:null}}function M(R,H,Q,rt){const mt=f.attributes,ut=H.attributes;let Y=0;const st=Q.getAttributes();for(const Z in st)if(st[Z].location>=0){const St=mt[Z];let Ht=ut[Z];if(Ht===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Ht=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Ht=R.instanceColor)),St===void 0||St.attribute!==Ht||Ht&&St.data!==Ht.data)return!0;Y++}return f.attributesNum!==Y||f.index!==rt}function A(R,H,Q,rt){const mt={},ut=H.attributes;let Y=0;const st=Q.getAttributes();for(const Z in st)if(st[Z].location>=0){let St=ut[Z];St===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(St=R.instanceColor));const Ht={};Ht.attribute=St,St&&St.data&&(Ht.data=St.data),mt[Z]=Ht,Y++}f.attributes=mt,f.attributesNum=Y,f.index=rt}function w(){const R=f.newAttributes;for(let H=0,Q=R.length;H<Q;H++)R[H]=0}function x(R){v(R,0)}function v(R,H){const Q=f.newAttributes,rt=f.enabledAttributes,mt=f.attributeDivisors;Q[R]=1,rt[R]===0&&(o.enableVertexAttribArray(R),rt[R]=1),mt[R]!==H&&(o.vertexAttribDivisor(R,H),mt[R]=H)}function O(){const R=f.newAttributes,H=f.enabledAttributes;for(let Q=0,rt=H.length;Q<rt;Q++)H[Q]!==R[Q]&&(o.disableVertexAttribArray(Q),H[Q]=0)}function P(R,H,Q,rt,mt,ut,Y){Y===!0?o.vertexAttribIPointer(R,H,Q,mt,ut):o.vertexAttribPointer(R,H,Q,rt,mt,ut)}function D(R,H,Q,rt){w();const mt=rt.attributes,ut=Q.getAttributes(),Y=H.defaultAttributeValues;for(const st in ut){const Z=ut[st];if(Z.location>=0){let gt=mt[st];if(gt===void 0&&(st==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),st==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),gt!==void 0){const St=gt.normalized,Ht=gt.itemSize,se=e.get(gt);if(se===void 0)continue;const be=se.buffer,F=se.type,ct=se.bytesPerElement,$=F===o.INT||F===o.UNSIGNED_INT||gt.gpuType===Cp;if(gt.isInterleavedBufferAttribute){const at=gt.data,xt=at.stride,Ut=gt.offset;if(at.isInstancedInterleavedBuffer){for(let At=0;At<Z.locationSize;At++)v(Z.location+At,at.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let At=0;At<Z.locationSize;At++)x(Z.location+At);o.bindBuffer(o.ARRAY_BUFFER,be);for(let At=0;At<Z.locationSize;At++)P(Z.location+At,Ht/Z.locationSize,F,St,xt*ct,(Ut+Ht/Z.locationSize*At)*ct,$)}else{if(gt.isInstancedBufferAttribute){for(let at=0;at<Z.locationSize;at++)v(Z.location+at,gt.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let at=0;at<Z.locationSize;at++)x(Z.location+at);o.bindBuffer(o.ARRAY_BUFFER,be);for(let at=0;at<Z.locationSize;at++)P(Z.location+at,Ht/Z.locationSize,F,St,Ht*ct,Ht/Z.locationSize*at*ct,$)}}else if(Y!==void 0){const St=Y[st];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(Z.location,St);break;case 3:o.vertexAttrib3fv(Z.location,St);break;case 4:o.vertexAttrib4fv(Z.location,St);break;default:o.vertexAttrib1fv(Z.location,St)}}}}O()}function I(){X();for(const R in r){const H=r[R];for(const Q in H){const rt=H[Q];for(const mt in rt)S(rt[mt].object),delete rt[mt];delete H[Q]}delete r[R]}}function z(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const Q in H){const rt=H[Q];for(const mt in rt)S(rt[mt].object),delete rt[mt];delete H[Q]}delete r[R.id]}function N(R){for(const H in r){const Q=r[H];if(Q[R.id]===void 0)continue;const rt=Q[R.id];for(const mt in rt)S(rt[mt].object),delete rt[mt];delete Q[R.id]}}function X(){C(),h=!0,f!==u&&(f=u,_(f.object))}function C(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:X,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:x,disableUnusedAttributes:O}}function WA(o,e,i){let r;function u(_){r=_}function f(_,S){o.drawArrays(r,_,S),i.update(S,r,1)}function h(_,S,p){p!==0&&(o.drawArraysInstanced(r,_,S,p),i.update(S,r,p))}function d(_,S,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,_,0,S,0,p);let M=0;for(let A=0;A<p;A++)M+=S[A];i.update(M,r,1)}function g(_,S,p,y){if(p===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<_.length;A++)h(_[A],S[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(r,_,0,S,0,y,0,p);let A=0;for(let w=0;w<p;w++)A+=S[w]*y[w];i.update(A,r,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function jA(o,e,i,r){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(N){return!(N!==Li&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const X=N===pl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==$i&&r.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ea&&!X)}function g(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=i.precision!==void 0?i.precision:"highp";const S=g(_);S!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",S,"instead."),_=S);const p=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=A>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:d,precision:_,logarithmicDepthBuffer:p,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:O,maxVaryings:P,maxFragmentUniforms:D,vertexTextures:I,maxSamples:z}}function ZA(o){const e=this;let i=null,r=0,u=!1,f=!1;const h=new rs,d=new de,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(p,y){const M=p.length!==0||y||r!==0||u;return u=y,r=p.length,M},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,y){i=S(p,y,0)},this.setState=function(p,y,M){const A=p.clippingPlanes,w=p.clipIntersection,x=p.clipShadows,v=o.get(p);if(!u||A===null||A.length===0||f&&!x)f?S(null):_();else{const O=f?0:r,P=O*4;let D=v.clippingState||null;g.value=D,D=S(A,y,P,M);for(let I=0;I!==P;++I)D[I]=i[I];v.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function _(){g.value!==i&&(g.value=i,g.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(p,y,M,A){const w=p!==null?p.length:0;let x=null;if(w!==0){if(x=g.value,A!==!0||x===null){const v=M+w*4,O=y.matrixWorldInverse;d.getNormalMatrix(O),(x===null||x.length<v)&&(x=new Float32Array(v));for(let P=0,D=M;P!==w;++P,D+=4)h.copy(p[P]).applyMatrix4(O,d),h.normal.toArray(x,D),x[D+3]=h.constant}g.value=x,g.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function KA(o){let e=new WeakMap;function i(h,d){return d===Yd?h.mapping=io:d===qd&&(h.mapping=ao),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Yd||d===qd)if(e.has(h)){const g=e.get(h).texture;return i(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new jE(g.height);return _.fromEquirectangularTexture(o,h),e.set(h,_),h.addEventListener("dispose",u),i(_.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const Jr=4,Ov=[.125,.215,.35,.446,.526,.582],ks=20,wd=new LS,Pv=new Re;let Dd=null,Ud=0,Nd=0,Ld=!1;const Vs=(1+Math.sqrt(5))/2,Kr=1/Vs,zv=[new et(-Vs,Kr,0),new et(Vs,Kr,0),new et(-Kr,0,Vs),new et(Kr,0,Vs),new et(0,Vs,-Kr),new et(0,Vs,Kr),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],QA=new et;class Iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,u=100,f={}){const{size:h=256,position:d=QA}=f;Dd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,r,u,g,d),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dd,Ud,Nd),this._renderer.xr.enabled=Ld,e.scissorTest=!1,lc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===io||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:pl,format:Li,colorSpace:so,depthBuffer:!1},u=Bv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bv(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JA(f)),this._blurMaterial=$A(f,e,i)}return u}_compileMaterial(e){const i=new Un(this._lodPlanes[0],e);this._renderer.compile(i,wd)}_sceneToCubeUV(e,i,r,u,f){const g=new Mi(90,1,i,r),_=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],p=this._renderer,y=p.autoClear,M=p.toneMapping;p.getClearColor(Pv),p.toneMapping=us,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(u),p.clearDepth(),p.setRenderTarget(null));const w=new TS({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),x=new Un(new vl,w);let v=!1;const O=e.background;O?O.isColor&&(w.color.copy(O),e.background=null,v=!0):(w.color.copy(Pv),v=!0);for(let P=0;P<6;P++){const D=P%3;D===0?(g.up.set(0,_[P],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x+S[P],f.y,f.z)):D===1?(g.up.set(0,0,_[P]),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y+S[P],f.z)):(g.up.set(0,_[P],0),g.position.set(f.x,f.y,f.z),g.lookAt(f.x,f.y,f.z+S[P]));const I=this._cubeSize;lc(u,D*I,P>2?I:0,I,I),p.setRenderTarget(u),v&&p.render(x,g),p.render(e,g)}x.geometry.dispose(),x.material.dispose(),p.toneMapping=M,p.autoClear=y,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,u=e.mapping===io||e.mapping===ao;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fv());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new Un(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const g=this._cubeSize;lc(i,0,0,3*g,2*g),r.setRenderTarget(i),r.render(h,wd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=zv[(u-f-1)%zv.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,u,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,u,"latitudinal",f),this._halfBlur(h,e,r,r,u,"longitudinal",f)}_halfBlur(e,i,r,u,f,h,d){const g=this._renderer,_=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,p=new Un(this._lodPlanes[u],_),y=_.uniforms,M=this._sizeLods[r]-1,A=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*ks-1),w=f/A,x=isFinite(f)?1+Math.floor(S*w):ks;x>ks&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ks}`);const v=[];let O=0;for(let N=0;N<ks;++N){const X=N/w,C=Math.exp(-X*X/2);v.push(C),N===0?O+=C:N<x&&(O+=2*C)}for(let N=0;N<v.length;N++)v[N]=v[N]/O;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=A,y.mipInt.value=P-r;const D=this._sizeLods[u],I=3*D*(u>P-Jr?u-P+Jr:0),z=4*(this._cubeSize-D);lc(i,I,z,3*D,2*D),g.setRenderTarget(i),g.render(p,wd)}}function JA(o){const e=[],i=[],r=[];let u=o;const f=o-Jr+1+Ov.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);i.push(d);let g=1/d;h>o-Jr?g=Ov[h-o+Jr-1]:h===0&&(g=0),r.push(g);const _=1/(d-2),S=-_,p=1+_,y=[S,S,p,S,p,p,S,S,p,p,S,p],M=6,A=6,w=3,x=2,v=1,O=new Float32Array(w*A*M),P=new Float32Array(x*A*M),D=new Float32Array(v*A*M);for(let z=0;z<M;z++){const N=z%3*2/3-1,X=z>2?0:-1,C=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];O.set(C,w*A*z),P.set(y,x*A*z);const R=[z,z,z,z,z,z];D.set(R,v*A*z)}const I=new Pi;I.setAttribute("position",new Ji(O,w)),I.setAttribute("uv",new Ji(P,x)),I.setAttribute("faceIndex",new Ji(D,v)),e.push(I),u>Jr&&u--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Bv(o,e,i){const r=new Zs(o,e,i);return r.texture.mapping=xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function lc(o,e,i,r,u){o.viewport.set(e,i,r,u),o.scissor.set(e,i,r,u)}function $A(o,e,i){const r=new Float32Array(ks),u=new et(0,1,0);return new fs({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Gp(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Fv(){return new fs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gp(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Hv(){return new fs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function Gp(){return`

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
	`}function t1(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const g=d.mapping,_=g===Yd||g===qd,S=g===io||g===ao;if(_||S){let p=e.get(d);const y=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new Iv(o)),p=_?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return _&&M&&M.height>0||S&&M&&u(M)?(i===null&&(i=new Iv(o)),p=_?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function u(d){let g=0;const _=6;for(let S=0;S<_;S++)d[S]!==void 0&&g++;return g===_}function f(d){const g=d.target;g.removeEventListener("dispose",f);const _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function e1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let u;switch(r){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(r)}return e[r]=u,u}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const u=i(r);return u===null&&dl("THREE.WebGLRenderer: "+r+" extension not supported."),u}}}function n1(o,e,i,r){const u={},f=new WeakMap;function h(p){const y=p.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);y.removeEventListener("dispose",h),delete u[y.id];const M=f.get(y);M&&(e.remove(M),f.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(p,y){return u[y.id]===!0||(y.addEventListener("dispose",h),u[y.id]=!0,i.memory.geometries++),y}function g(p){const y=p.attributes;for(const M in y)e.update(y[M],o.ARRAY_BUFFER)}function _(p){const y=[],M=p.index,A=p.attributes.position;let w=0;if(M!==null){const O=M.array;w=M.version;for(let P=0,D=O.length;P<D;P+=3){const I=O[P+0],z=O[P+1],N=O[P+2];y.push(I,z,z,N,N,I)}}else if(A!==void 0){const O=A.array;w=A.version;for(let P=0,D=O.length/3-1;P<D;P+=3){const I=P+0,z=P+1,N=P+2;y.push(I,z,z,N,N,I)}}else return;const x=new(xS(y)?AS:bS)(y,1);x.version=w;const v=f.get(p);v&&e.remove(v),f.set(p,x)}function S(p){const y=f.get(p);if(y){const M=p.index;M!==null&&y.version<M.version&&_(p)}else _(p);return f.get(p)}return{get:d,update:g,getWireframeAttribute:S}}function i1(o,e,i){let r;function u(y){r=y}let f,h;function d(y){f=y.type,h=y.bytesPerElement}function g(y,M){o.drawElements(r,M,f,y*h),i.update(M,r,1)}function _(y,M,A){A!==0&&(o.drawElementsInstanced(r,M,f,y*h,A),i.update(M,r,A))}function S(y,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,f,y,0,A);let x=0;for(let v=0;v<A;v++)x+=M[v];i.update(x,r,1)}function p(y,M,A,w){if(A===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<y.length;v++)_(y[v]/h,M[v],w[v]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,f,y,0,w,0,A);let v=0;for(let O=0;O<A;O++)v+=M[O]*w[O];i.update(v,r,1)}}this.setMode=u,this.setIndex=d,this.render=g,this.renderInstances=_,this.renderMultiDraw=S,this.renderMultiDrawInstances=p}function a1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:r}}function s1(o,e,i){const r=new WeakMap,u=new sn;function f(h,d,g){const _=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=S!==void 0?S.length:0;let y=r.get(d);if(y===void 0||y.count!==p){let R=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;y!==void 0&&y.texture.dispose();const A=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let D=0;A===!0&&(D=1),w===!0&&(D=2),x===!0&&(D=3);let I=d.attributes.position.count*D,z=1;I>e.maxTextureSize&&(z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const N=new Float32Array(I*z*4*p),X=new MS(N,I,z,p);X.type=Ea,X.needsUpdate=!0;const C=D*4;for(let H=0;H<p;H++){const Q=v[H],rt=O[H],mt=P[H],ut=I*z*4*H;for(let Y=0;Y<Q.count;Y++){const st=Y*C;A===!0&&(u.fromBufferAttribute(Q,Y),N[ut+st+0]=u.x,N[ut+st+1]=u.y,N[ut+st+2]=u.z,N[ut+st+3]=0),w===!0&&(u.fromBufferAttribute(rt,Y),N[ut+st+4]=u.x,N[ut+st+5]=u.y,N[ut+st+6]=u.z,N[ut+st+7]=0),x===!0&&(u.fromBufferAttribute(mt,Y),N[ut+st+8]=u.x,N[ut+st+9]=u.y,N[ut+st+10]=u.z,N[ut+st+11]=mt.itemSize===4?u.w:1)}}y={count:p,texture:X,size:new ue(I,z)},r.set(d,y),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let x=0;x<_.length;x++)A+=_[x];const w=d.morphTargetsRelative?1:1-A;g.getUniforms().setValue(o,"morphTargetBaseInfluence",w),g.getUniforms().setValue(o,"morphTargetInfluences",_)}g.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function r1(o,e,i,r){let u=new WeakMap;function f(g){const _=r.render.frame,S=g.geometry,p=e.get(g,S);if(u.get(p)!==_&&(e.update(p),u.set(p,_)),g.isInstancedMesh&&(g.hasEventListener("dispose",d)===!1&&g.addEventListener("dispose",d),u.get(g)!==_&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),u.set(g,_))),g.isSkinnedMesh){const y=g.skeleton;u.get(y)!==_&&(y.update(),u.set(y,_))}return p}function h(){u=new WeakMap}function d(g){const _=g.target;_.removeEventListener("dispose",d),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const PS=new Jn,Gv=new DS(1,1),zS=new MS,IS=new UE,BS=new wS,Vv=[],Xv=[],kv=new Float32Array(16),Yv=new Float32Array(9),qv=new Float32Array(4);function uo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const u=e*i;let f=Vv[u];if(f===void 0&&(f=new Float32Array(u),Vv[u]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Tc(o,e){let i=Xv[e];i===void 0&&(i=new Int32Array(e),Xv[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function o1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function l1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function u1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function c1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function f1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;qv.set(r),o.uniformMatrix2fv(this.addr,!1,qv),yn(i,r)}}function h1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;Yv.set(r),o.uniformMatrix3fv(this.addr,!1,Yv),yn(i,r)}}function d1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,r))return;kv.set(r),o.uniformMatrix4fv(this.addr,!1,kv),yn(i,r)}}function p1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function m1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function _1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function g1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function v1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function S1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function y1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function x1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function M1(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Gv.compareFunction=yS,f=Gv):f=PS,i.setTexture2D(e||f,u)}function E1(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTexture3D(e||IS,u)}function T1(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTextureCube(e||BS,u)}function b1(o,e,i){const r=this.cache,u=i.allocateTextureUnit();r[0]!==u&&(o.uniform1i(this.addr,u),r[0]=u),i.setTexture2DArray(e||zS,u)}function A1(o){switch(o){case 5126:return o1;case 35664:return l1;case 35665:return u1;case 35666:return c1;case 35674:return f1;case 35675:return h1;case 35676:return d1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return _1;case 35669:case 35673:return g1;case 5125:return v1;case 36294:return S1;case 36295:return y1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return b1}}function R1(o,e){o.uniform1fv(this.addr,e)}function C1(o,e){const i=uo(e,this.size,2);o.uniform2fv(this.addr,i)}function w1(o,e){const i=uo(e,this.size,3);o.uniform3fv(this.addr,i)}function D1(o,e){const i=uo(e,this.size,4);o.uniform4fv(this.addr,i)}function U1(o,e){const i=uo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function N1(o,e){const i=uo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function L1(o,e){const i=uo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function O1(o,e){o.uniform1iv(this.addr,e)}function P1(o,e){o.uniform2iv(this.addr,e)}function z1(o,e){o.uniform3iv(this.addr,e)}function I1(o,e){o.uniform4iv(this.addr,e)}function B1(o,e){o.uniform1uiv(this.addr,e)}function F1(o,e){o.uniform2uiv(this.addr,e)}function H1(o,e){o.uniform3uiv(this.addr,e)}function G1(o,e){o.uniform4uiv(this.addr,e)}function V1(o,e,i){const r=this.cache,u=e.length,f=Tc(i,u);Sn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==u;++h)i.setTexture2D(e[h]||PS,f[h])}function X1(o,e,i){const r=this.cache,u=e.length,f=Tc(i,u);Sn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==u;++h)i.setTexture3D(e[h]||IS,f[h])}function k1(o,e,i){const r=this.cache,u=e.length,f=Tc(i,u);Sn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==u;++h)i.setTextureCube(e[h]||BS,f[h])}function Y1(o,e,i){const r=this.cache,u=e.length,f=Tc(i,u);Sn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==u;++h)i.setTexture2DArray(e[h]||zS,f[h])}function q1(o){switch(o){case 5126:return R1;case 35664:return C1;case 35665:return w1;case 35666:return D1;case 35674:return U1;case 35675:return N1;case 35676:return L1;case 5124:case 35670:return O1;case 35667:case 35671:return P1;case 35668:case 35672:return z1;case 35669:case 35673:return I1;case 5125:return B1;case 36294:return F1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return Y1}}class W1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=A1(i.type)}}class j1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=q1(i.type)}}class Z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(e,i[d.id],r)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function Wv(o,e){o.seq.push(e),o.map[e.id]=e}function K1(o,e,i){const r=o.name,u=r.length;for(Od.lastIndex=0;;){const f=Od.exec(r),h=Od.lastIndex;let d=f[1];const g=f[2]==="]",_=f[3];if(g&&(d=d|0),_===void 0||_==="["&&h+2===u){Wv(i,_===void 0?new W1(d,o,e):new j1(d,o,e));break}else{let p=i.map[d];p===void 0&&(p=new Z1(d),Wv(i,p)),i=p}}}class gc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(i,u),h=e.getUniformLocation(i,f.name);K1(f,h,this)}}setValue(e,i,r,u){const f=this.map[i];f!==void 0&&f.setValue(e,r,u)}setOptional(e,i,r){const u=i[r];u!==void 0&&this.setValue(e,r,u)}static upload(e,i,r,u){for(let f=0,h=i.length;f!==h;++f){const d=i[f],g=r[d.id];g.needsUpdate!==!1&&d.setValue(e,g.value,u)}}static seqWithValue(e,i){const r=[];for(let u=0,f=e.length;u!==f;++u){const h=e[u];h.id in i&&r.push(h)}return r}}function jv(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Q1=37297;let J1=0;function $1(o,e){const i=o.split(`
`),r=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=u;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Zv=new de;function tR(o){Ue._getMatrix(Zv,Ue.workingColorSpace,o);const e=`mat3( ${Zv.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case vc:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Kv(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+$1(o.getShaderSource(e),d)}else return f}function eR(o,e){const i=tR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function nR(o,e){let i;switch(e){case aE:i="Linear";break;case sE:i="Reinhard";break;case rE:i="Cineon";break;case oE:i="ACESFilmic";break;case uE:i="AgX";break;case cE:i="Neutral";break;case lE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const uc=new et;function iR(){Ue.getLuminanceCoefficients(uc);const o=uc.x.toFixed(4),e=uc.y.toFixed(4),i=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function sR(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function rR(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<r;u++){const f=o.getActiveAttrib(e,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function ll(o){return o!==""}function Qv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oR=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(o){return o.replace(oR,uR)}const lR=new Map;function uR(o,e){let i=pe[e];if(i===void 0){const r=lR.get(e);if(r!==void 0)i=pe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bp(i)}const cR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $v(o){return o.replace(cR,fR)}function fR(o,e,i,r){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function tS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function hR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===lS?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===IM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ma&&(e="SHADOWMAP_TYPE_VSM"),e}function dR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case io:case ao:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ao:e="ENVMAP_MODE_REFRACTION";break}return e}function mR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case uS:e="ENVMAP_BLENDING_MULTIPLY";break;case nE:e="ENVMAP_BLENDING_MIX";break;case iE:e="ENVMAP_BLENDING_ADD";break}return e}function _R(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function gR(o,e,i,r){const u=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const g=hR(i),_=dR(i),S=pR(i),p=mR(i),y=_R(i),M=aR(i),A=sR(f),w=u.createProgram();let x,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(ll).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(ll).join(`
`),v.length>0&&(v+=`
`)):(x=[tS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),v=[tS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.envMap?"#define "+S:"",i.envMap?"#define "+p:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==us?"#define TONE_MAPPING":"",i.toneMapping!==us?pe.tonemapping_pars_fragment:"",i.toneMapping!==us?nR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,eR("linearToOutputTexel",i.outputColorSpace),iR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ll).join(`
`)),h=bp(h),h=Qv(h,i),h=Jv(h,i),d=bp(d),d=Qv(d,i),d=Jv(d,i),h=$v(h),d=$v(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",i.glslVersion===cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=O+x+h,D=O+v+d,I=jv(u,u.VERTEX_SHADER,P),z=jv(u,u.FRAGMENT_SHADER,D);u.attachShader(w,I),u.attachShader(w,z),i.index0AttributeName!==void 0?u.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&u.bindAttribLocation(w,0,"position"),u.linkProgram(w);function N(H){if(o.debug.checkShaderErrors){const Q=u.getProgramInfoLog(w)||"",rt=u.getShaderInfoLog(I)||"",mt=u.getShaderInfoLog(z)||"",ut=Q.trim(),Y=rt.trim(),st=mt.trim();let Z=!0,gt=!0;if(u.getProgramParameter(w,u.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,w,I,z);else{const St=Kv(u,I,"vertex"),Ht=Kv(u,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(w,u.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ut+`
`+St+`
`+Ht)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(Y===""||st==="")&&(gt=!1);gt&&(H.diagnostics={runnable:Z,programLog:ut,vertexShader:{log:Y,prefix:x},fragmentShader:{log:st,prefix:v}})}u.deleteShader(I),u.deleteShader(z),X=new gc(u,w),C=rR(u,w)}let X;this.getUniforms=function(){return X===void 0&&N(this),X};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=u.getProgramParameter(w,Q1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),u.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=J1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=z,this}let vR=0;class SR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,u=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new yR(e),i.set(e,r)),r}}class yR{constructor(e){this.id=vR++,this.code=e,this.usedTimes=0}}function xR(o,e,i,r,u,f,h){const d=new Ip,g=new SR,_=new Set,S=[],p=u.logarithmicDepthBuffer,y=u.vertexTextures;let M=u.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return _.add(C),C===0?"uv":`uv${C}`}function x(C,R,H,Q,rt){const mt=Q.fog,ut=rt.geometry,Y=C.isMeshStandardMaterial?Q.environment:null,st=(C.isMeshStandardMaterial?i:e).get(C.envMap||Y),Z=st&&st.mapping===xc?st.image.height:null,gt=A[C.type];C.precision!==null&&(M=u.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const St=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Ht=St!==void 0?St.length:0;let se=0;ut.morphAttributes.position!==void 0&&(se=1),ut.morphAttributes.normal!==void 0&&(se=2),ut.morphAttributes.color!==void 0&&(se=3);let be,F,ct,$;if(gt){const Me=ji[gt];be=Me.vertexShader,F=Me.fragmentShader}else be=C.vertexShader,F=C.fragmentShader,g.update(C),ct=g.getVertexShaderID(C),$=g.getFragmentShaderID(C);const at=o.getRenderTarget(),xt=o.state.buffers.depth.getReversed(),Ut=rt.isInstancedMesh===!0,At=rt.isBatchedMesh===!0,Mt=!!C.map,Yt=!!C.matcap,B=!!st,He=!!C.aoMap,ae=!!C.lightMap,Kt=!!C.bumpMap,Nt=!!C.normalMap,ne=!!C.displacementMap,Bt=!!C.emissiveMap,re=!!C.metalnessMap,Ye=!!C.roughnessMap,We=C.anisotropy>0,U=C.clearcoat>0,T=C.dispersion>0,nt=C.iridescence>0,dt=C.sheen>0,vt=C.transmission>0,ft=We&&!!C.anisotropyMap,Vt=U&&!!C.clearcoatMap,Rt=U&&!!C.clearcoatNormalMap,Wt=U&&!!C.clearcoatRoughnessMap,Zt=nt&&!!C.iridescenceMap,Tt=nt&&!!C.iridescenceThicknessMap,Lt=dt&&!!C.sheenColorMap,ee=dt&&!!C.sheenRoughnessMap,jt=!!C.specularMap,Ot=!!C.specularColorMap,ce=!!C.specularIntensityMap,V=vt&&!!C.transmissionMap,bt=vt&&!!C.thicknessMap,wt=!!C.gradientMap,Gt=!!C.alphaMap,yt=C.alphaTest>0,_t=!!C.alphaHash,qt=!!C.extensions;let le=us;C.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(le=o.toneMapping);const Ge={shaderID:gt,shaderType:C.type,shaderName:C.name,vertexShader:be,fragmentShader:F,defines:C.defines,customVertexShaderID:ct,customFragmentShaderID:$,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:At,batchingColor:At&&rt._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&rt.instanceColor!==null,instancingMorph:Ut&&rt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:at===null?o.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:so,alphaToCoverage:!!C.alphaToCoverage,map:Mt,matcap:Yt,envMap:B,envMapMode:B&&st.mapping,envMapCubeUVHeight:Z,aoMap:He,lightMap:ae,bumpMap:Kt,normalMap:Nt,displacementMap:y&&ne,emissiveMap:Bt,normalMapObjectSpace:Nt&&C.normalMapType===pE,normalMapTangentSpace:Nt&&C.normalMapType===SS,metalnessMap:re,roughnessMap:Ye,anisotropy:We,anisotropyMap:ft,clearcoat:U,clearcoatMap:Vt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:nt,iridescenceMap:Zt,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:Lt,sheenRoughnessMap:ee,specularMap:jt,specularColorMap:Ot,specularIntensityMap:ce,transmission:vt,transmissionMap:V,thicknessMap:bt,gradientMap:wt,opaque:C.transparent===!1&&C.blending===to&&C.alphaToCoverage===!1,alphaMap:Gt,alphaTest:yt,alphaHash:_t,combine:C.combine,mapUv:Mt&&w(C.map.channel),aoMapUv:He&&w(C.aoMap.channel),lightMapUv:ae&&w(C.lightMap.channel),bumpMapUv:Kt&&w(C.bumpMap.channel),normalMapUv:Nt&&w(C.normalMap.channel),displacementMapUv:ne&&w(C.displacementMap.channel),emissiveMapUv:Bt&&w(C.emissiveMap.channel),metalnessMapUv:re&&w(C.metalnessMap.channel),roughnessMapUv:Ye&&w(C.roughnessMap.channel),anisotropyMapUv:ft&&w(C.anisotropyMap.channel),clearcoatMapUv:Vt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:ee&&w(C.sheenRoughnessMap.channel),specularMapUv:jt&&w(C.specularMap.channel),specularColorMapUv:Ot&&w(C.specularColorMap.channel),specularIntensityMapUv:ce&&w(C.specularIntensityMap.channel),transmissionMapUv:V&&w(C.transmissionMap.channel),thicknessMapUv:bt&&w(C.thicknessMap.channel),alphaMapUv:Gt&&w(C.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Nt||We),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ut.attributes.uv&&(Mt||Gt),fog:!!mt,useFog:C.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xt,skinning:rt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:le,decodeVideoTexture:Mt&&C.map.isVideoTexture===!0&&Ue.getTransfer(C.map.colorSpace)===Xe,decodeVideoTextureEmissive:Bt&&C.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(C.emissiveMap.colorSpace)===Xe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Zi,flipSided:C.side===Qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:qt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&C.extensions.multiDraw===!0||At)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ge.vertexUv1s=_.has(1),Ge.vertexUv2s=_.has(2),Ge.vertexUv3s=_.has(3),_.clear(),Ge}function v(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)R.push(H),R.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(O(R,C),P(R,C),R.push(o.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function O(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function P(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const R=A[C.type];let H;if(R){const Q=ji[R];H=kE.clone(Q.uniforms)}else H=C.uniforms;return H}function I(C,R){let H;for(let Q=0,rt=S.length;Q<rt;Q++){const mt=S[Q];if(mt.cacheKey===R){H=mt,++H.usedTimes;break}}return H===void 0&&(H=new gR(o,R,C,f),S.push(H)),H}function z(C){if(--C.usedTimes===0){const R=S.indexOf(C);S[R]=S[S.length-1],S.pop(),C.destroy()}}function N(C){g.remove(C)}function X(){g.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:D,acquireProgram:I,releaseProgram:z,releaseShaderCache:N,programs:S,dispose:X}}function MR(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function u(h,d,g){o.get(h)[d]=g}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:u,dispose:f}}function ER(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function eS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function nS(){const o=[];let e=0;const i=[],r=[],u=[];function f(){e=0,i.length=0,r.length=0,u.length=0}function h(p,y,M,A,w,x){let v=o[e];return v===void 0?(v={id:p.id,object:p,geometry:y,material:M,groupOrder:A,renderOrder:p.renderOrder,z:w,group:x},o[e]=v):(v.id=p.id,v.object=p,v.geometry=y,v.material=M,v.groupOrder=A,v.renderOrder=p.renderOrder,v.z=w,v.group=x),e++,v}function d(p,y,M,A,w,x){const v=h(p,y,M,A,w,x);M.transmission>0?r.push(v):M.transparent===!0?u.push(v):i.push(v)}function g(p,y,M,A,w,x){const v=h(p,y,M,A,w,x);M.transmission>0?r.unshift(v):M.transparent===!0?u.unshift(v):i.unshift(v)}function _(p,y){i.length>1&&i.sort(p||ER),r.length>1&&r.sort(y||eS),u.length>1&&u.sort(y||eS)}function S(){for(let p=e,y=o.length;p<y;p++){const M=o[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:u,init:f,push:d,unshift:g,finish:S,sort:_}}function TR(){let o=new WeakMap;function e(r,u){const f=o.get(r);let h;return f===void 0?(h=new nS,o.set(r,[h])):u>=f.length?(h=new nS,f.push(h)):h=f[u],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function bR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new et,color:new Re};break;case"SpotLight":i={position:new et,direction:new et,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new et,halfWidth:new et,halfHeight:new et};break}return o[e.id]=i,i}}}function AR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let RR=0;function CR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function wR(o){const e=new bR,i=AR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)r.probe.push(new et);const u=new et,f=new rn,h=new rn;function d(_){let S=0,p=0,y=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,A=0,w=0,x=0,v=0,O=0,P=0,D=0,I=0,z=0,N=0;_.sort(CR);for(let C=0,R=_.length;C<R;C++){const H=_[C],Q=H.color,rt=H.intensity,mt=H.distance,ut=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)S+=Q.r*rt,p+=Q.g*rt,y+=Q.b*rt;else if(H.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(H.sh.coefficients[Y],rt);N++}else if(H.isDirectionalLight){const Y=e.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const st=H.shadow,Z=i.get(H);Z.shadowIntensity=st.intensity,Z.shadowBias=st.bias,Z.shadowNormalBias=st.normalBias,Z.shadowRadius=st.radius,Z.shadowMapSize=st.mapSize,r.directionalShadow[M]=Z,r.directionalShadowMap[M]=ut,r.directionalShadowMatrix[M]=H.shadow.matrix,O++}r.directional[M]=Y,M++}else if(H.isSpotLight){const Y=e.get(H);Y.position.setFromMatrixPosition(H.matrixWorld),Y.color.copy(Q).multiplyScalar(rt),Y.distance=mt,Y.coneCos=Math.cos(H.angle),Y.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Y.decay=H.decay,r.spot[w]=Y;const st=H.shadow;if(H.map&&(r.spotLightMap[I]=H.map,I++,st.updateMatrices(H),H.castShadow&&z++),r.spotLightMatrix[w]=st.matrix,H.castShadow){const Z=i.get(H);Z.shadowIntensity=st.intensity,Z.shadowBias=st.bias,Z.shadowNormalBias=st.normalBias,Z.shadowRadius=st.radius,Z.shadowMapSize=st.mapSize,r.spotShadow[w]=Z,r.spotShadowMap[w]=ut,D++}w++}else if(H.isRectAreaLight){const Y=e.get(H);Y.color.copy(Q).multiplyScalar(rt),Y.halfWidth.set(H.width*.5,0,0),Y.halfHeight.set(0,H.height*.5,0),r.rectArea[x]=Y,x++}else if(H.isPointLight){const Y=e.get(H);if(Y.color.copy(H.color).multiplyScalar(H.intensity),Y.distance=H.distance,Y.decay=H.decay,H.castShadow){const st=H.shadow,Z=i.get(H);Z.shadowIntensity=st.intensity,Z.shadowBias=st.bias,Z.shadowNormalBias=st.normalBias,Z.shadowRadius=st.radius,Z.shadowMapSize=st.mapSize,Z.shadowCameraNear=st.camera.near,Z.shadowCameraFar=st.camera.far,r.pointShadow[A]=Z,r.pointShadowMap[A]=ut,r.pointShadowMatrix[A]=H.shadow.matrix,P++}r.point[A]=Y,A++}else if(H.isHemisphereLight){const Y=e.get(H);Y.skyColor.copy(H.color).multiplyScalar(rt),Y.groundColor.copy(H.groundColor).multiplyScalar(rt),r.hemi[v]=Y,v++}}x>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=zt.LTC_FLOAT_1,r.rectAreaLTC2=zt.LTC_FLOAT_2):(r.rectAreaLTC1=zt.LTC_HALF_1,r.rectAreaLTC2=zt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=p,r.ambient[2]=y;const X=r.hash;(X.directionalLength!==M||X.pointLength!==A||X.spotLength!==w||X.rectAreaLength!==x||X.hemiLength!==v||X.numDirectionalShadows!==O||X.numPointShadows!==P||X.numSpotShadows!==D||X.numSpotMaps!==I||X.numLightProbes!==N)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=x,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=D+I-z,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=N,X.directionalLength=M,X.pointLength=A,X.spotLength=w,X.rectAreaLength=x,X.hemiLength=v,X.numDirectionalShadows=O,X.numPointShadows=P,X.numSpotShadows=D,X.numSpotMaps=I,X.numLightProbes=N,r.version=RR++)}function g(_,S){let p=0,y=0,M=0,A=0,w=0;const x=S.matrixWorldInverse;for(let v=0,O=_.length;v<O;v++){const P=_[v];if(P.isDirectionalLight){const D=r.directional[p];D.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(x),p++}else if(P.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(x),M++}else if(P.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(x),h.identity(),f.copy(P.matrixWorld),f.premultiply(x),h.extractRotation(f),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),A++}else if(P.isPointLight){const D=r.point[y];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(x),y++}else if(P.isHemisphereLight){const D=r.hemi[w];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(x),w++}}}return{setup:d,setupView:g,state:r}}function iS(o){const e=new wR(o),i=[],r=[];function u(S){_.camera=S,i.length=0,r.length=0}function f(S){i.push(S)}function h(S){r.push(S)}function d(){e.setup(i)}function g(S){e.setupView(i,S)}const _={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:_,setupLights:d,setupLightsView:g,pushLight:f,pushShadow:h}}function DR(o){let e=new WeakMap;function i(u,f=0){const h=e.get(u);let d;return h===void 0?(d=new iS(o),e.set(u,[d])):f>=h.length?(d=new iS(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const UR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NR=`uniform sampler2D shadow_pass;
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
}`;function LR(o,e,i){let r=new Bp;const u=new ue,f=new ue,h=new sn,d=new tT({depthPacking:dE}),g=new eT,_={},S=i.maxTextureSize,p={[cs]:Qn,[Qn]:cs,[Zi]:Zi},y=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:UR,fragmentShader:NR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new Pi;A.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Un(A,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lS;let v=this.type;this.render=function(z,N,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||z.length===0)return;const C=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(ls),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const rt=v!==Ma&&this.type===Ma,mt=v===Ma&&this.type!==Ma;for(let ut=0,Y=z.length;ut<Y;ut++){const st=z[ut],Z=st.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;u.copy(Z.mapSize);const gt=Z.getFrameExtents();if(u.multiply(gt),f.copy(Z.mapSize),(u.x>S||u.y>S)&&(u.x>S&&(f.x=Math.floor(S/gt.x),u.x=f.x*gt.x,Z.mapSize.x=f.x),u.y>S&&(f.y=Math.floor(S/gt.y),u.y=f.y*gt.y,Z.mapSize.y=f.y)),Z.map===null||rt===!0||mt===!0){const Ht=this.type!==Ma?{minFilter:Oi,magFilter:Oi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Zs(u.x,u.y,Ht),Z.map.texture.name=st.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const St=Z.getViewportCount();for(let Ht=0;Ht<St;Ht++){const se=Z.getViewport(Ht);h.set(f.x*se.x,f.y*se.y,f.x*se.z,f.y*se.w),Q.viewport(h),Z.updateMatrices(st,Ht),r=Z.getFrustum(),D(N,X,Z.camera,st,this.type)}Z.isPointLightShadow!==!0&&this.type===Ma&&O(Z,X),Z.needsUpdate=!1}v=this.type,x.needsUpdate=!1,o.setRenderTarget(C,R,H)};function O(z,N){const X=e.update(w);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Zs(u.x,u.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(N,null,X,y,w,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(N,null,X,M,w,null)}function P(z,N,X,C){let R=null;const H=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)R=H;else if(R=X.isPointLight===!0?g:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const Q=R.uuid,rt=N.uuid;let mt=_[Q];mt===void 0&&(mt={},_[Q]=mt);let ut=mt[rt];ut===void 0&&(ut=R.clone(),mt[rt]=ut,N.addEventListener("dispose",I)),R=ut}if(R.visible=N.visible,R.wireframe=N.wireframe,C===Ma?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:p[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Q=o.properties.get(R);Q.light=X}return R}function D(z,N,X,C,R){if(z.visible===!1)return;if(z.layers.test(N.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Ma)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const rt=e.update(z),mt=z.material;if(Array.isArray(mt)){const ut=rt.groups;for(let Y=0,st=ut.length;Y<st;Y++){const Z=ut[Y],gt=mt[Z.materialIndex];if(gt&&gt.visible){const St=P(z,gt,C,R);z.onBeforeShadow(o,z,N,X,rt,St,Z),o.renderBufferDirect(X,null,rt,St,z,Z),z.onAfterShadow(o,z,N,X,rt,St,Z)}}}else if(mt.visible){const ut=P(z,mt,C,R);z.onBeforeShadow(o,z,N,X,rt,ut,null),o.renderBufferDirect(X,null,rt,ut,z,null),z.onAfterShadow(o,z,N,X,rt,ut,null)}}const Q=z.children;for(let rt=0,mt=Q.length;rt<mt;rt++)D(Q[rt],N,X,C,R)}function I(z){z.target.removeEventListener("dispose",I);for(const X in _){const C=_[X],R=z.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const OR={[Bd]:Fd,[Hd]:Xd,[Gd]:kd,[no]:Vd,[Fd]:Bd,[Xd]:Hd,[kd]:Gd,[Vd]:no};function PR(o,e){function i(){let V=!1;const bt=new sn;let wt=null;const Gt=new sn(0,0,0,0);return{setMask:function(yt){wt!==yt&&!V&&(o.colorMask(yt,yt,yt,yt),wt=yt)},setLocked:function(yt){V=yt},setClear:function(yt,_t,qt,le,Ge){Ge===!0&&(yt*=le,_t*=le,qt*=le),bt.set(yt,_t,qt,le),Gt.equals(bt)===!1&&(o.clearColor(yt,_t,qt,le),Gt.copy(bt))},reset:function(){V=!1,wt=null,Gt.set(-1,0,0,0)}}}function r(){let V=!1,bt=!1,wt=null,Gt=null,yt=null;return{setReversed:function(_t){if(bt!==_t){const qt=e.get("EXT_clip_control");_t?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),bt=_t;const le=yt;yt=null,this.setClear(le)}},getReversed:function(){return bt},setTest:function(_t){_t?at(o.DEPTH_TEST):xt(o.DEPTH_TEST)},setMask:function(_t){wt!==_t&&!V&&(o.depthMask(_t),wt=_t)},setFunc:function(_t){if(bt&&(_t=OR[_t]),Gt!==_t){switch(_t){case Bd:o.depthFunc(o.NEVER);break;case Fd:o.depthFunc(o.ALWAYS);break;case Hd:o.depthFunc(o.LESS);break;case no:o.depthFunc(o.LEQUAL);break;case Gd:o.depthFunc(o.EQUAL);break;case Vd:o.depthFunc(o.GEQUAL);break;case Xd:o.depthFunc(o.GREATER);break;case kd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Gt=_t}},setLocked:function(_t){V=_t},setClear:function(_t){yt!==_t&&(bt&&(_t=1-_t),o.clearDepth(_t),yt=_t)},reset:function(){V=!1,wt=null,Gt=null,yt=null,bt=!1}}}function u(){let V=!1,bt=null,wt=null,Gt=null,yt=null,_t=null,qt=null,le=null,Ge=null;return{setTest:function(Me){V||(Me?at(o.STENCIL_TEST):xt(o.STENCIL_TEST))},setMask:function(Me){bt!==Me&&!V&&(o.stencilMask(Me),bt=Me)},setFunc:function(Me,$e,pn){(wt!==Me||Gt!==$e||yt!==pn)&&(o.stencilFunc(Me,$e,pn),wt=Me,Gt=$e,yt=pn)},setOp:function(Me,$e,pn){(_t!==Me||qt!==$e||le!==pn)&&(o.stencilOp(Me,$e,pn),_t=Me,qt=$e,le=pn)},setLocked:function(Me){V=Me},setClear:function(Me){Ge!==Me&&(o.clearStencil(Me),Ge=Me)},reset:function(){V=!1,bt=null,wt=null,Gt=null,yt=null,_t=null,qt=null,le=null,Ge=null}}}const f=new i,h=new r,d=new u,g=new WeakMap,_=new WeakMap;let S={},p={},y=new WeakMap,M=[],A=null,w=!1,x=null,v=null,O=null,P=null,D=null,I=null,z=null,N=new Re(0,0,0),X=0,C=!1,R=null,H=null,Q=null,rt=null,mt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,st=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=st>=1):Z.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=st>=2);let gt=null,St={};const Ht=o.getParameter(o.SCISSOR_BOX),se=o.getParameter(o.VIEWPORT),be=new sn().fromArray(Ht),F=new sn().fromArray(se);function ct(V,bt,wt,Gt){const yt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(V,_t),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qt=0;qt<wt;qt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Gt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(bt+qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return _t}const $={};$[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),at(o.DEPTH_TEST),h.setFunc(no),Kt(!1),Nt(av),at(o.CULL_FACE),He(ls);function at(V){S[V]!==!0&&(o.enable(V),S[V]=!0)}function xt(V){S[V]!==!1&&(o.disable(V),S[V]=!1)}function Ut(V,bt){return p[V]!==bt?(o.bindFramebuffer(V,bt),p[V]=bt,V===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=bt),V===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function At(V,bt){let wt=M,Gt=!1;if(V){wt=y.get(bt),wt===void 0&&(wt=[],y.set(bt,wt));const yt=V.textures;if(wt.length!==yt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,qt=yt.length;_t<qt;_t++)wt[_t]=o.COLOR_ATTACHMENT0+_t;wt.length=yt.length,Gt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Gt=!0);Gt&&o.drawBuffers(wt)}function Mt(V){return A!==V?(o.useProgram(V),A=V,!0):!1}const Yt={[Xs]:o.FUNC_ADD,[FM]:o.FUNC_SUBTRACT,[HM]:o.FUNC_REVERSE_SUBTRACT};Yt[GM]=o.MIN,Yt[VM]=o.MAX;const B={[XM]:o.ZERO,[kM]:o.ONE,[YM]:o.SRC_COLOR,[zd]:o.SRC_ALPHA,[QM]:o.SRC_ALPHA_SATURATE,[ZM]:o.DST_COLOR,[WM]:o.DST_ALPHA,[qM]:o.ONE_MINUS_SRC_COLOR,[Id]:o.ONE_MINUS_SRC_ALPHA,[KM]:o.ONE_MINUS_DST_COLOR,[jM]:o.ONE_MINUS_DST_ALPHA,[JM]:o.CONSTANT_COLOR,[$M]:o.ONE_MINUS_CONSTANT_COLOR,[tE]:o.CONSTANT_ALPHA,[eE]:o.ONE_MINUS_CONSTANT_ALPHA};function He(V,bt,wt,Gt,yt,_t,qt,le,Ge,Me){if(V===ls){w===!0&&(xt(o.BLEND),w=!1);return}if(w===!1&&(at(o.BLEND),w=!0),V!==BM){if(V!==x||Me!==C){if((v!==Xs||D!==Xs)&&(o.blendEquation(o.FUNC_ADD),v=Xs,D=Xs),Me)switch(V){case to:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case sv:o.blendFunc(o.ONE,o.ONE);break;case rv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ov:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case to:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case sv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case rv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ov:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}O=null,P=null,I=null,z=null,N.set(0,0,0),X=0,x=V,C=Me}return}yt=yt||bt,_t=_t||wt,qt=qt||Gt,(bt!==v||yt!==D)&&(o.blendEquationSeparate(Yt[bt],Yt[yt]),v=bt,D=yt),(wt!==O||Gt!==P||_t!==I||qt!==z)&&(o.blendFuncSeparate(B[wt],B[Gt],B[_t],B[qt]),O=wt,P=Gt,I=_t,z=qt),(le.equals(N)===!1||Ge!==X)&&(o.blendColor(le.r,le.g,le.b,Ge),N.copy(le),X=Ge),x=V,C=!1}function ae(V,bt){V.side===Zi?xt(o.CULL_FACE):at(o.CULL_FACE);let wt=V.side===Qn;bt&&(wt=!wt),Kt(wt),V.blending===to&&V.transparent===!1?He(ls):He(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),f.setMask(V.colorWrite);const Gt=V.stencilWrite;d.setTest(Gt),Gt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Bt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?at(o.SAMPLE_ALPHA_TO_COVERAGE):xt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(V){R!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),R=V)}function Nt(V){V!==PM?(at(o.CULL_FACE),V!==H&&(V===av?o.cullFace(o.BACK):V===zM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):xt(o.CULL_FACE),H=V}function ne(V){V!==Q&&(Y&&o.lineWidth(V),Q=V)}function Bt(V,bt,wt){V?(at(o.POLYGON_OFFSET_FILL),(rt!==bt||mt!==wt)&&(o.polygonOffset(bt,wt),rt=bt,mt=wt)):xt(o.POLYGON_OFFSET_FILL)}function re(V){V?at(o.SCISSOR_TEST):xt(o.SCISSOR_TEST)}function Ye(V){V===void 0&&(V=o.TEXTURE0+ut-1),gt!==V&&(o.activeTexture(V),gt=V)}function We(V,bt,wt){wt===void 0&&(gt===null?wt=o.TEXTURE0+ut-1:wt=gt);let Gt=St[wt];Gt===void 0&&(Gt={type:void 0,texture:void 0},St[wt]=Gt),(Gt.type!==V||Gt.texture!==bt)&&(gt!==wt&&(o.activeTexture(wt),gt=wt),o.bindTexture(V,bt||$[V]),Gt.type=V,Gt.texture=bt)}function U(){const V=St[gt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Vt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Zt(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(V){be.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),be.copy(V))}function ee(V){F.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),F.copy(V))}function jt(V,bt){let wt=_.get(bt);wt===void 0&&(wt=new WeakMap,_.set(bt,wt));let Gt=wt.get(V);Gt===void 0&&(Gt=o.getUniformBlockIndex(bt,V.name),wt.set(V,Gt))}function Ot(V,bt){const Gt=_.get(bt).get(V);g.get(bt)!==Gt&&(o.uniformBlockBinding(bt,Gt,V.__bindingPointIndex),g.set(bt,Gt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},gt=null,St={},p={},y=new WeakMap,M=[],A=null,w=!1,x=null,v=null,O=null,P=null,D=null,I=null,z=null,N=new Re(0,0,0),X=0,C=!1,R=null,H=null,Q=null,rt=null,mt=null,be.set(0,0,o.canvas.width,o.canvas.height),F.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:at,disable:xt,bindFramebuffer:Ut,drawBuffers:At,useProgram:Mt,setBlending:He,setMaterial:ae,setFlipSided:Kt,setCullFace:Nt,setLineWidth:ne,setPolygonOffset:Bt,setScissorTest:re,activeTexture:Ye,bindTexture:We,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:nt,texImage2D:Zt,texImage3D:Tt,updateUBOMapping:jt,uniformBlockBinding:Ot,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:dt,texSubImage3D:vt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Vt,scissor:Lt,viewport:ee,reset:ce}}function zR(o,e,i,r,u,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new ue,S=new WeakMap;let p;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,T){return M?new OffscreenCanvas(U,T):yc("canvas")}function w(U,T,nt){let dt=1;const vt=We(U);if((vt.width>nt||vt.height>nt)&&(dt=nt/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ft=Math.floor(dt*vt.width),Vt=Math.floor(dt*vt.height);p===void 0&&(p=A(ft,Vt));const Rt=T?A(ft,Vt):p;return Rt.width=ft,Rt.height=Vt,Rt.getContext("2d").drawImage(U,0,0,ft,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Vt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function x(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function O(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(U,T,nt,dt,vt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ft=T;if(T===o.RED&&(nt===o.FLOAT&&(ft=o.R32F),nt===o.HALF_FLOAT&&(ft=o.R16F),nt===o.UNSIGNED_BYTE&&(ft=o.R8)),T===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.R8UI),nt===o.UNSIGNED_SHORT&&(ft=o.R16UI),nt===o.UNSIGNED_INT&&(ft=o.R32UI),nt===o.BYTE&&(ft=o.R8I),nt===o.SHORT&&(ft=o.R16I),nt===o.INT&&(ft=o.R32I)),T===o.RG&&(nt===o.FLOAT&&(ft=o.RG32F),nt===o.HALF_FLOAT&&(ft=o.RG16F),nt===o.UNSIGNED_BYTE&&(ft=o.RG8)),T===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RG16UI),nt===o.UNSIGNED_INT&&(ft=o.RG32UI),nt===o.BYTE&&(ft=o.RG8I),nt===o.SHORT&&(ft=o.RG16I),nt===o.INT&&(ft=o.RG32I)),T===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),nt===o.UNSIGNED_INT&&(ft=o.RGB32UI),nt===o.BYTE&&(ft=o.RGB8I),nt===o.SHORT&&(ft=o.RGB16I),nt===o.INT&&(ft=o.RGB32I)),T===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ft=o.RGBA32UI),nt===o.BYTE&&(ft=o.RGBA8I),nt===o.SHORT&&(ft=o.RGBA16I),nt===o.INT&&(ft=o.RGBA32I)),T===o.RGB&&(nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),T===o.RGBA){const Vt=vt?vc:Ue.getTransfer(dt);nt===o.FLOAT&&(ft=o.RGBA32F),nt===o.HALF_FLOAT&&(ft=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ft=Vt===Xe?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function D(U,T){let nt;return U?T===null||T===Ws||T===cl?nt=o.DEPTH24_STENCIL8:T===Ea?nt=o.DEPTH32F_STENCIL8:T===ul&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ws||T===cl?nt=o.DEPTH_COMPONENT24:T===Ea?nt=o.DEPTH_COMPONENT32F:T===ul&&(nt=o.DEPTH_COMPONENT16),nt}function I(U,T){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Oi&&U.minFilter!==Ki?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function z(U){const T=U.target;T.removeEventListener("dispose",z),X(T),T.isVideoTexture&&S.delete(T)}function N(U){const T=U.target;T.removeEventListener("dispose",N),R(T)}function X(U){const T=r.get(U);if(T.__webglInit===void 0)return;const nt=U.source,dt=y.get(nt);if(dt){const vt=dt[T.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(U),Object.keys(dt).length===0&&y.delete(nt)}r.remove(U)}function C(U){const T=r.get(U);o.deleteTexture(T.__webglTexture);const nt=U.source,dt=y.get(nt);delete dt[T.__cacheKey],h.memory.textures--}function R(U){const T=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let vt=0;vt<T.__webglFramebuffer[dt].length;vt++)o.deleteFramebuffer(T.__webglFramebuffer[dt][vt]);else o.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)o.deleteFramebuffer(T.__webglFramebuffer[dt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=U.textures;for(let dt=0,vt=nt.length;dt<vt;dt++){const ft=r.get(nt[dt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(nt[dt])}r.remove(U)}let H=0;function Q(){H=0}function rt(){const U=H;return U>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+u.maxTextures),H+=1,U}function mt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ut(U,T){const nt=r.get(U);if(U.isVideoTexture&&re(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&nt.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(nt,U,T);return}}else U.isExternalTexture&&(nt.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+T)}function Y(U,T){const nt=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){$(nt,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+T)}function st(U,T){const nt=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){$(nt,U,T);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+T)}function Z(U,T){const nt=r.get(U);if(U.version>0&&nt.__version!==U.version){at(nt,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+T)}const gt={[Wd]:o.REPEAT,[Ys]:o.CLAMP_TO_EDGE,[jd]:o.MIRRORED_REPEAT},St={[Oi]:o.NEAREST,[fE]:o.NEAREST_MIPMAP_NEAREST,[Xu]:o.NEAREST_MIPMAP_LINEAR,[Ki]:o.LINEAR,[ad]:o.LINEAR_MIPMAP_NEAREST,[qs]:o.LINEAR_MIPMAP_LINEAR},Ht={[mE]:o.NEVER,[xE]:o.ALWAYS,[_E]:o.LESS,[yS]:o.LEQUAL,[gE]:o.EQUAL,[yE]:o.GEQUAL,[vE]:o.GREATER,[SE]:o.NOTEQUAL};function se(U,T){if(T.type===Ea&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ki||T.magFilter===ad||T.magFilter===Xu||T.magFilter===qs||T.minFilter===Ki||T.minFilter===ad||T.minFilter===Xu||T.minFilter===qs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,gt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,gt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,gt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Ht[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Oi||T.minFilter!==Xu&&T.minFilter!==qs||T.type===Ea&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function be(U,T){let nt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",z));const dt=T.source;let vt=y.get(dt);vt===void 0&&(vt={},y.set(dt,vt));const ft=mt(T);if(ft!==U.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),vt[ft].usedTimes++;const Vt=vt[U.__cacheKey];Vt!==void 0&&(vt[U.__cacheKey].usedTimes--,Vt.usedTimes===0&&C(T)),U.__cacheKey=ft,U.__webglTexture=vt[ft].texture}return nt}function F(U,T,nt){return Math.floor(Math.floor(U/nt)/T)}function ct(U,T,nt,dt){const ft=U.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,nt,dt,T.data);else{ft.sort((Tt,Lt)=>Tt.start-Lt.start);let Vt=0;for(let Tt=1;Tt<ft.length;Tt++){const Lt=ft[Vt],ee=ft[Tt],jt=Lt.start+Lt.count,Ot=F(ee.start,T.width,4),ce=F(Lt.start,T.width,4);ee.start<=jt+1&&Ot===ce&&F(ee.start+ee.count-1,T.width,4)===Ot?Lt.count=Math.max(Lt.count,ee.start+ee.count-Lt.start):(++Vt,ft[Vt]=ee)}ft.length=Vt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),Zt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Tt=0,Lt=ft.length;Tt<Lt;Tt++){const ee=ft[Tt],jt=Math.floor(ee.start/4),Ot=Math.ceil(ee.count/4),ce=jt%T.width,V=Math.floor(jt/T.width),bt=Ot,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,ce,V,bt,wt,nt,dt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Zt)}}function $(U,T,nt){let dt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=o.TEXTURE_3D);const vt=be(U,T),ft=T.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+nt);const Vt=r.get(ft);if(ft.version!==Vt.__version||vt===!0){i.activeTexture(o.TEXTURE0+nt);const Rt=Ue.getPrimaries(Ue.workingColorSpace),Wt=T.colorSpace===os?null:Ue.getPrimaries(T.colorSpace),Zt=T.colorSpace===os||Rt===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Tt=w(T.image,!1,u.maxTextureSize);Tt=Ye(T,Tt);const Lt=f.convert(T.format,T.colorSpace),ee=f.convert(T.type);let jt=P(T.internalFormat,Lt,ee,T.colorSpace,T.isVideoTexture);se(dt,T);let Ot;const ce=T.mipmaps,V=T.isVideoTexture!==!0,bt=Vt.__version===void 0||vt===!0,wt=ft.dataReady,Gt=I(T,Tt);if(T.isDepthTexture)jt=D(T.format===hl,T.type),bt&&(V?i.texStorage2D(o.TEXTURE_2D,1,jt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Lt,ee,null));else if(T.isDataTexture)if(ce.length>0){V&&bt&&i.texStorage2D(o.TEXTURE_2D,Gt,jt,ce[0].width,ce[0].height);for(let yt=0,_t=ce.length;yt<_t;yt++)Ot=ce[yt],V?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Lt,ee,Ot.data):i.texImage2D(o.TEXTURE_2D,yt,jt,Ot.width,Ot.height,0,Lt,ee,Ot.data);T.generateMipmaps=!1}else V?(bt&&i.texStorage2D(o.TEXTURE_2D,Gt,jt,Tt.width,Tt.height),wt&&ct(T,Tt,Lt,ee)):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Lt,ee,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,jt,ce[0].width,ce[0].height,Tt.depth);for(let yt=0,_t=ce.length;yt<_t;yt++)if(Ot=ce[yt],T.format!==Li)if(Lt!==null)if(V){if(wt)if(T.layerUpdates.size>0){const qt=Lv(Ot.width,Ot.height,T.format,T.type);for(const le of T.layerUpdates){const Ge=Ot.data.subarray(le*qt/Ot.data.BYTES_PER_ELEMENT,(le+1)*qt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,le,Ot.width,Ot.height,1,Lt,Ge)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,Tt.depth,Lt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,jt,Ot.width,Ot.height,Tt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ot.width,Ot.height,Tt.depth,Lt,ee,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,jt,Ot.width,Ot.height,Tt.depth,0,Lt,ee,Ot.data)}else{V&&bt&&i.texStorage2D(o.TEXTURE_2D,Gt,jt,ce[0].width,ce[0].height);for(let yt=0,_t=ce.length;yt<_t;yt++)Ot=ce[yt],T.format!==Li?Lt!==null?V?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Lt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,jt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ot.width,Ot.height,Lt,ee,Ot.data):i.texImage2D(o.TEXTURE_2D,yt,jt,Ot.width,Ot.height,0,Lt,ee,Ot.data)}else if(T.isDataArrayTexture)if(V){if(bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,jt,Tt.width,Tt.height,Tt.depth),wt)if(T.layerUpdates.size>0){const yt=Lv(Tt.width,Tt.height,T.format,T.type);for(const _t of T.layerUpdates){const qt=Tt.data.subarray(_t*yt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*yt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,Lt,ee,qt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Lt,ee,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,Lt,ee,Tt.data);else if(T.isData3DTexture)V?(bt&&i.texStorage3D(o.TEXTURE_3D,Gt,jt,Tt.width,Tt.height,Tt.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Lt,ee,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,Lt,ee,Tt.data);else if(T.isFramebufferTexture){if(bt)if(V)i.texStorage2D(o.TEXTURE_2D,Gt,jt,Tt.width,Tt.height);else{let yt=Tt.width,_t=Tt.height;for(let qt=0;qt<Gt;qt++)i.texImage2D(o.TEXTURE_2D,qt,jt,yt,_t,0,Lt,ee,null),yt>>=1,_t>>=1}}else if(ce.length>0){if(V&&bt){const yt=We(ce[0]);i.texStorage2D(o.TEXTURE_2D,Gt,jt,yt.width,yt.height)}for(let yt=0,_t=ce.length;yt<_t;yt++)Ot=ce[yt],V?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Lt,ee,Ot):i.texImage2D(o.TEXTURE_2D,yt,jt,Lt,ee,Ot);T.generateMipmaps=!1}else if(V){if(bt){const yt=We(Tt);i.texStorage2D(o.TEXTURE_2D,Gt,jt,yt.width,yt.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,ee,Tt)}else i.texImage2D(o.TEXTURE_2D,0,jt,Lt,ee,Tt);x(T)&&v(dt),Vt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function at(U,T,nt){if(T.image.length!==6)return;const dt=be(U,T),vt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+nt);const ft=r.get(vt);if(vt.version!==ft.__version||dt===!0){i.activeTexture(o.TEXTURE0+nt);const Vt=Ue.getPrimaries(Ue.workingColorSpace),Rt=T.colorSpace===os?null:Ue.getPrimaries(T.colorSpace),Wt=T.colorSpace===os||Vt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Zt=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Lt=[];for(let _t=0;_t<6;_t++)!Zt&&!Tt?Lt[_t]=w(T.image[_t],!0,u.maxCubemapSize):Lt[_t]=Tt?T.image[_t].image:T.image[_t],Lt[_t]=Ye(T,Lt[_t]);const ee=Lt[0],jt=f.convert(T.format,T.colorSpace),Ot=f.convert(T.type),ce=P(T.internalFormat,jt,Ot,T.colorSpace),V=T.isVideoTexture!==!0,bt=ft.__version===void 0||dt===!0,wt=vt.dataReady;let Gt=I(T,ee);se(o.TEXTURE_CUBE_MAP,T);let yt;if(Zt){V&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,ce,ee.width,ee.height);for(let _t=0;_t<6;_t++){yt=Lt[_t].mipmaps;for(let qt=0;qt<yt.length;qt++){const le=yt[qt];T.format!==Li?jt!==null?V?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,qt,0,0,le.width,le.height,jt,le.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,qt,ce,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,qt,0,0,le.width,le.height,jt,Ot,le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,qt,ce,le.width,le.height,0,jt,Ot,le.data)}}}else{if(yt=T.mipmaps,V&&bt){yt.length>0&&Gt++;const _t=We(Lt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,ce,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt[_t].width,Lt[_t].height,jt,Ot,Lt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,Lt[_t].width,Lt[_t].height,0,jt,Ot,Lt[_t].data);for(let qt=0;qt<yt.length;qt++){const Ge=yt[qt].image[_t].image;V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,qt+1,0,0,Ge.width,Ge.height,jt,Ot,Ge.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,qt+1,ce,Ge.width,Ge.height,0,jt,Ot,Ge.data)}}else{V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,jt,Ot,Lt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,jt,Ot,Lt[_t]);for(let qt=0;qt<yt.length;qt++){const le=yt[qt];V?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,qt+1,0,0,jt,Ot,le.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,qt+1,ce,jt,Ot,le.image[_t])}}}x(T)&&v(o.TEXTURE_CUBE_MAP),ft.__version=vt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function xt(U,T,nt,dt,vt,ft){const Vt=f.convert(nt.format,nt.colorSpace),Rt=f.convert(nt.type),Wt=P(nt.internalFormat,Vt,Rt,nt.colorSpace),Zt=r.get(T),Tt=r.get(nt);if(Tt.__renderTarget=T,!Zt.__hasExternalTextures){const Lt=Math.max(1,T.width>>ft),ee=Math.max(1,T.height>>ft);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ft,Wt,Lt,ee,T.depth,0,Vt,Rt,null):i.texImage2D(vt,ft,Wt,Lt,ee,0,Vt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Bt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,vt,Tt.__webglTexture,0,ne(T)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,vt,Tt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(U,T,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const dt=T.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,ft=D(T.stencilBuffer,vt),Vt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=ne(T);Bt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ft,T.width,T.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ft,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ft,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,U)}else{const dt=T.textures;for(let vt=0;vt<dt.length;vt++){const ft=dt[vt],Vt=f.convert(ft.format,ft.colorSpace),Rt=f.convert(ft.type),Wt=P(ft.internalFormat,Vt,Rt,ft.colorSpace),Zt=ne(T);nt&&Bt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Wt,T.width,T.height):Bt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Zt,Wt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const vt=dt.__webglTexture,ft=ne(T);if(T.depthTexture.format===fl)Bt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(T.depthTexture.format===hl)Bt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Mt(U){const T=r.get(U),nt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const vt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",vt)};dt.addEventListener("dispose",vt),T.__depthDisposeCallback=vt}T.__boundDepthTexture=dt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const dt=U.texture.mipmaps;dt&&dt.length>0?At(T.__webglFramebuffer[0],U):At(T.__webglFramebuffer,U)}else if(nt){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=o.createRenderbuffer(),Ut(T.__webglDepthbuffer[dt],U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ft)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Ut(T.__webglDepthbuffer,U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(U,T,nt){const dt=r.get(U);T!==void 0&&xt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Mt(U)}function B(U){const T=U.texture,nt=r.get(U),dt=r.get(T);U.addEventListener("dispose",N);const vt=U.textures,ft=U.isWebGLCubeRenderTarget===!0,Vt=vt.length>1;if(Vt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=T.version,h.memory.textures++),ft){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)nt.__webglFramebuffer[Rt][Wt]=o.createFramebuffer()}else nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let Rt=0,Wt=vt.length;Rt<Wt;Rt++){const Zt=r.get(vt[Rt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Bt(U)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Wt=vt[Rt];nt.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);const Zt=f.convert(Wt.format,Wt.colorSpace),Tt=f.convert(Wt.type),Lt=P(Wt.internalFormat,Zt,Tt,Wt.colorSpace,U.isXRRenderTarget===!0),ee=ne(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,Lt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut(nt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),se(o.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)xt(nt.__webglFramebuffer[Rt][Wt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else xt(nt.__webglFramebuffer[Rt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);x(T)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Rt=0,Wt=vt.length;Rt<Wt;Rt++){const Zt=vt[Rt],Tt=r.get(Zt);let Lt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Lt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Tt.__webglTexture),se(Lt,Zt),xt(nt.__webglFramebuffer,U,Zt,o.COLOR_ATTACHMENT0+Rt,Lt,0),x(Zt)&&v(Lt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),se(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)xt(nt.__webglFramebuffer[Wt],U,T,o.COLOR_ATTACHMENT0,Rt,Wt);else xt(nt.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Rt,0);x(T)&&v(Rt),i.unbindTexture()}U.depthBuffer&&Mt(U)}function He(U){const T=U.textures;for(let nt=0,dt=T.length;nt<dt;nt++){const vt=T[nt];if(x(vt)){const ft=O(U),Vt=r.get(vt).__webglTexture;i.bindTexture(ft,Vt),v(ft),i.unbindTexture()}}}const ae=[],Kt=[];function Nt(U){if(U.samples>0){if(Bt(U)===!1){const T=U.textures,nt=U.width,dt=U.height;let vt=o.COLOR_BUFFER_BIT;const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=r.get(U),Rt=T.length>1;if(Rt)for(let Zt=0;Zt<T.length;Zt++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const Wt=U.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Zt=0;Zt<T.length;Zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Zt]);const Tt=r.get(T[Zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,nt,dt,0,0,nt,dt,vt,o.NEAREST),g===!0&&(ae.length=0,Kt.length=0,ae.push(o.COLOR_ATTACHMENT0+Zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ae.push(ft),Kt.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Kt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Zt=0;Zt<T.length;Zt++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Zt]);const Tt=r.get(T[Zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,Tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&g){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ne(U){return Math.min(u.maxSamples,U.samples)}function Bt(U){const T=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function re(U){const T=h.render.frame;S.get(U)!==T&&(S.set(U,T),U.update())}function Ye(U,T){const nt=U.colorSpace,dt=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||nt!==so&&nt!==os&&(Ue.getTransfer(nt)===Xe?(dt!==Li||vt!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),T}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(_.width=U.naturalWidth||U.width,_.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(_.width=U.displayWidth,_.height=U.displayHeight):(_.width=U.width,_.height=U.height),_}this.allocateTextureUnit=rt,this.resetTextureUnits=Q,this.setTexture2D=ut,this.setTexture2DArray=Y,this.setTexture3D=st,this.setTextureCube=Z,this.rebindTextures=Yt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Bt}function IR(o,e){function i(r,u=os){let f;const h=Ue.getTransfer(u);if(r===$i)return o.UNSIGNED_BYTE;if(r===wp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Dp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===dS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===pS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===fS)return o.BYTE;if(r===hS)return o.SHORT;if(r===ul)return o.UNSIGNED_SHORT;if(r===Cp)return o.INT;if(r===Ws)return o.UNSIGNED_INT;if(r===Ea)return o.FLOAT;if(r===pl)return o.HALF_FLOAT;if(r===mS)return o.ALPHA;if(r===_S)return o.RGB;if(r===Li)return o.RGBA;if(r===fl)return o.DEPTH_COMPONENT;if(r===hl)return o.DEPTH_STENCIL;if(r===gS)return o.RED;if(r===Up)return o.RED_INTEGER;if(r===vS)return o.RG;if(r===Np)return o.RG_INTEGER;if(r===Lp)return o.RGBA_INTEGER;if(r===hc||r===dc||r===pc||r===mc)if(h===Xe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===hc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===dc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===hc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===dc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zd||r===Kd||r===Qd||r===Jd)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===Zd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$d||r===tp||r===ep)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===$d||r===tp)return h===Xe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===ep)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===np||r===ip||r===ap||r===sp||r===rp||r===op||r===lp||r===up||r===cp||r===fp||r===hp||r===dp||r===pp||r===mp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===np)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ip)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ap)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===op)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===up)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===cp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_p||r===gp||r===vp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===_p)return h===Xe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sp||r===yp||r===xp||r===Mp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Sp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===yp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const BR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FR=`
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

}`;class HR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new US(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new fs({vertexShader:BR,fragmentShader:FR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Un(new Mc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GR extends Ks{constructor(e,i){super();const r=this;let u=null,f=1,h=null,d="local-floor",g=1,_=null,S=null,p=null,y=null,M=null,A=null;const w=typeof XRWebGLBinding<"u",x=new HR,v={},O=i.getContextAttributes();let P=null,D=null;const I=[],z=[],N=new ue;let X=null;const C=new Mi;C.viewport=new sn;const R=new Mi;R.viewport=new sn;const H=[C,R],Q=new rT;let rt=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=I[$];return at===void 0&&(at=new Ad,I[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=I[$];return at===void 0&&(at=new Ad,I[$]=at),at.getGripSpace()},this.getHand=function($){let at=I[$];return at===void 0&&(at=new Ad,I[$]=at),at.getHandSpace()};function ut($){const at=z.indexOf($.inputSource);if(at===-1)return;const xt=I[at];xt!==void 0&&(xt.update($.inputSource,$.frame,_||h),xt.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){u.removeEventListener("select",ut),u.removeEventListener("selectstart",ut),u.removeEventListener("selectend",ut),u.removeEventListener("squeeze",ut),u.removeEventListener("squeezestart",ut),u.removeEventListener("squeezeend",ut),u.removeEventListener("end",Y),u.removeEventListener("inputsourceschange",st);for(let $=0;$<I.length;$++){const at=z[$];at!==null&&(z[$]=null,I[$].disconnect(at))}rt=null,mt=null,x.reset();for(const $ in v)delete v[$];e.setRenderTarget(P),M=null,y=null,p=null,u=null,D=null,ct.stop(),r.isPresenting=!1,e.setPixelRatio(X),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){f=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||h},this.setReferenceSpace=function($){_=$},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(u,i)),p},this.getFrame=function(){return A},this.getSession=function(){return u},this.setSession=async function($){if(u=$,u!==null){if(P=e.getRenderTarget(),u.addEventListener("select",ut),u.addEventListener("selectstart",ut),u.addEventListener("selectend",ut),u.addEventListener("squeeze",ut),u.addEventListener("squeezestart",ut),u.addEventListener("squeezeend",ut),u.addEventListener("end",Y),u.addEventListener("inputsourceschange",st),O.xrCompatible!==!0&&await i.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(N),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ut=null,At=null;O.depth&&(At=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=O.stencil?hl:fl,Ut=O.stencil?cl:Ws);const Mt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:f};p=this.getBinding(),y=p.createProjectionLayer(Mt),u.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),D=new Zs(y.textureWidth,y.textureHeight,{format:Li,type:$i,depthTexture:new DS(y.textureWidth,y.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const xt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,i,xt),u.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Zs(M.framebufferWidth,M.framebufferHeight,{format:Li,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(g),_=null,h=await u.requestReferenceSpace(d),ct.setContext(u),ct.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function st($){for(let at=0;at<$.removed.length;at++){const xt=$.removed[at],Ut=z.indexOf(xt);Ut>=0&&(z[Ut]=null,I[Ut].disconnect(xt))}for(let at=0;at<$.added.length;at++){const xt=$.added[at];let Ut=z.indexOf(xt);if(Ut===-1){for(let Mt=0;Mt<I.length;Mt++)if(Mt>=z.length){z.push(xt),Ut=Mt;break}else if(z[Mt]===null){z[Mt]=xt,Ut=Mt;break}if(Ut===-1)break}const At=I[Ut];At&&At.connect(xt)}}const Z=new et,gt=new et;function St($,at,xt){Z.setFromMatrixPosition(at.matrixWorld),gt.setFromMatrixPosition(xt.matrixWorld);const Ut=Z.distanceTo(gt),At=at.projectionMatrix.elements,Mt=xt.projectionMatrix.elements,Yt=At[14]/(At[10]-1),B=At[14]/(At[10]+1),He=(At[9]+1)/At[5],ae=(At[9]-1)/At[5],Kt=(At[8]-1)/At[0],Nt=(Mt[8]+1)/Mt[0],ne=Yt*Kt,Bt=Yt*Nt,re=Ut/(-Kt+Nt),Ye=re*-Kt;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ye),$.translateZ(re),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const We=Yt+re,U=B+re,T=ne-Ye,nt=Bt+(Ut-Ye),dt=He*B/U*We,vt=ae*B/U*We;$.projectionMatrix.makePerspective(T,nt,dt,vt,We,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ht($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(u===null)return;let at=$.near,xt=$.far;x.texture!==null&&(x.depthNear>0&&(at=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),Q.near=R.near=C.near=at,Q.far=R.far=C.far=xt,(rt!==Q.near||mt!==Q.far)&&(u.updateRenderState({depthNear:Q.near,depthFar:Q.far}),rt=Q.near,mt=Q.far),Q.layers.mask=$.layers.mask|6,C.layers.mask=Q.layers.mask&3,R.layers.mask=Q.layers.mask&5;const Ut=$.parent,At=Q.cameras;Ht(Q,Ut);for(let Mt=0;Mt<At.length;Mt++)Ht(At[Mt],Ut);At.length===2?St(Q,C,R):Q.projectionMatrix.copy(C.projectionMatrix),se($,Q,Ut)};function se($,at,xt){xt===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(xt.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ep*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(y===null&&M===null))return g},this.setFoveation=function($){g=$,y!==null&&(y.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Q)},this.getCameraTexture=function($){return v[$]};let be=null;function F($,at){if(S=at.getViewerPose(_||h),A=at,S!==null){const xt=S.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Ut=!1;xt.length!==Q.cameras.length&&(Q.cameras.length=0,Ut=!0);for(let B=0;B<xt.length;B++){const He=xt[B];let ae=null;if(M!==null)ae=M.getViewport(He);else{const Nt=p.getViewSubImage(y,He);ae=Nt.viewport,B===0&&(e.setRenderTargetTextures(D,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(D))}let Kt=H[B];Kt===void 0&&(Kt=new Mi,Kt.layers.enable(B),Kt.viewport=new sn,H[B]=Kt),Kt.matrix.fromArray(He.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(He.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(ae.x,ae.y,ae.width,ae.height),B===0&&(Q.matrix.copy(Kt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ut===!0&&Q.cameras.push(Kt)}const At=u.enabledFeatures;if(At&&At.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&w){p=r.getBinding();const B=p.getDepthInformation(xt[0]);B&&B.isValid&&B.texture&&x.init(B,u.renderState)}if(At&&At.includes("camera-access")&&w){e.state.unbindTexture(),p=r.getBinding();for(let B=0;B<xt.length;B++){const He=xt[B].camera;if(He){let ae=v[He];ae||(ae=new US,v[He]=ae);const Kt=p.getCameraImage(He);ae.sourceTexture=Kt}}}}for(let xt=0;xt<I.length;xt++){const Ut=z[xt],At=I[xt];Ut!==null&&At!==void 0&&At.update(Ut,at,_||h)}be&&be($,at),at.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:at}),A=null}const ct=new OS;ct.setAnimationLoop(F),this.setAnimationLoop=function($){be=$},this.dispose=function(){}}}const Gs=new ta,VR=new rn;function XR(o,e){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,RS(o)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function u(x,v,O,P,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?f(x,v):v.isMeshToonMaterial?(f(x,v),p(x,v)):v.isMeshPhongMaterial?(f(x,v),S(x,v)):v.isMeshStandardMaterial?(f(x,v),y(x,v),v.isMeshPhysicalMaterial&&M(x,v,D)):v.isMeshMatcapMaterial?(f(x,v),A(x,v)):v.isMeshDepthMaterial?f(x,v):v.isMeshDistanceMaterial?(f(x,v),w(x,v)):v.isMeshNormalMaterial?f(x,v):v.isLineBasicMaterial?(h(x,v),v.isLineDashedMaterial&&d(x,v)):v.isPointsMaterial?g(x,v,O,P):v.isSpriteMaterial?_(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function f(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Qn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Qn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const O=e.get(v),P=O.envMap,D=O.envMapRotation;P&&(x.envMap.value=P,Gs.copy(D),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),x.envMapRotation.value.setFromMatrix4(VR.makeRotationFromEuler(Gs)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function d(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function g(x,v,O,P){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*O,x.scale.value=P*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function S(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function p(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,O){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Qn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=O.texture,x.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,v){v.matcap&&(x.matcap.value=v.matcap)}function w(x,v){const O=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(O.matrixWorld),x.nearDistance.value=O.shadow.camera.near,x.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:u}}function kR(o,e,i,r){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(O,P){const D=P.program;r.uniformBlockBinding(O,D)}function _(O,P){let D=u[O.id];D===void 0&&(A(O),D=S(O),u[O.id]=D,O.addEventListener("dispose",x));const I=P.program;r.updateUBOMapping(O,I);const z=e.render.frame;f[O.id]!==z&&(y(O),f[O.id]=z)}function S(O){const P=p();O.__bindingPointIndex=P;const D=o.createBuffer(),I=O.__size,z=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,I,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,D),D}function p(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const P=u[O.id],D=O.uniforms,I=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let z=0,N=D.length;z<N;z++){const X=Array.isArray(D[z])?D[z]:[D[z]];for(let C=0,R=X.length;C<R;C++){const H=X[C];if(M(H,z,C,I)===!0){const Q=H.__offset,rt=Array.isArray(H.value)?H.value:[H.value];let mt=0;for(let ut=0;ut<rt.length;ut++){const Y=rt[ut],st=w(Y);typeof Y=="number"||typeof Y=="boolean"?(H.__data[0]=Y,o.bufferSubData(o.UNIFORM_BUFFER,Q+mt,H.__data)):Y.isMatrix3?(H.__data[0]=Y.elements[0],H.__data[1]=Y.elements[1],H.__data[2]=Y.elements[2],H.__data[3]=0,H.__data[4]=Y.elements[3],H.__data[5]=Y.elements[4],H.__data[6]=Y.elements[5],H.__data[7]=0,H.__data[8]=Y.elements[6],H.__data[9]=Y.elements[7],H.__data[10]=Y.elements[8],H.__data[11]=0):(Y.toArray(H.__data,mt),mt+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(O,P,D,I){const z=O.value,N=P+"_"+D;if(I[N]===void 0)return typeof z=="number"||typeof z=="boolean"?I[N]=z:I[N]=z.clone(),!0;{const X=I[N];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return I[N]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function A(O){const P=O.uniforms;let D=0;const I=16;for(let N=0,X=P.length;N<X;N++){const C=Array.isArray(P[N])?P[N]:[P[N]];for(let R=0,H=C.length;R<H;R++){const Q=C[R],rt=Array.isArray(Q.value)?Q.value:[Q.value];for(let mt=0,ut=rt.length;mt<ut;mt++){const Y=rt[mt],st=w(Y),Z=D%I,gt=Z%st.boundary,St=Z+gt;D+=gt,St!==0&&I-St<st.storage&&(D+=I-St),Q.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=st.storage}}}const z=D%I;return z>0&&(D+=I-z),O.__size=D,O.__cache={},this}function w(O){const P={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(P.boundary=4,P.storage=4):O.isVector2?(P.boundary=8,P.storage=8):O.isVector3||O.isColor?(P.boundary=16,P.storage=12):O.isVector4?(P.boundary=16,P.storage=16):O.isMatrix3?(P.boundary=48,P.storage=48):O.isMatrix4?(P.boundary=64,P.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),P}function x(O){const P=O.target;P.removeEventListener("dispose",x);const D=h.indexOf(P.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(u[P.id]),delete u[P.id],delete f[P.id]}function v(){for(const O in u)o.deleteBuffer(u[O]);h=[],u={},f={}}return{bind:g,update:_,dispose:v}}class YR{constructor(e={}){const{canvas:i=TE(),context:r=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:_=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const A=new Uint32Array(4),w=new Int32Array(4);let x=null,v=null;const O=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1;this._outputColorSpace=xi;let z=0,N=0,X=null,C=-1,R=null;const H=new sn,Q=new sn;let rt=null;const mt=new Re(0);let ut=0,Y=i.width,st=i.height,Z=1,gt=null,St=null;const Ht=new sn(0,0,Y,st),se=new sn(0,0,Y,st);let be=!1;const F=new Bp;let ct=!1,$=!1;const at=new rn,xt=new et,Ut=new sn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Yt(){return X===null?Z:1}let B=r;function He(b,j){return i.getContext(b,j)}try{const b={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:g,preserveDrawingBuffer:_,powerPreference:S,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rp}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Gt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),B===null){const j="webgl2";if(B=He(j,b),B===null)throw He(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ae,Kt,Nt,ne,Bt,re,Ye,We,U,T,nt,dt,vt,ft,Vt,Rt,Wt,Zt,Tt,Lt,ee,jt,Ot,ce;function V(){ae=new e1(B),ae.init(),jt=new IR(B,ae),Kt=new jA(B,ae,e,jt),Nt=new PR(B,ae),Kt.reversedDepthBuffer&&y&&Nt.buffers.depth.setReversed(!0),ne=new a1(B),Bt=new MR,re=new zR(B,ae,Nt,Bt,Kt,jt,ne),Ye=new KA(D),We=new t1(D),U=new cT(B),Ot=new qA(B,U),T=new n1(B,U,ne,Ot),nt=new r1(B,T,U,ne),Tt=new s1(B,Kt,re),Rt=new ZA(Bt),dt=new xR(D,Ye,We,ae,Kt,Ot,Rt),vt=new XR(D,Bt),ft=new TR,Vt=new DR(ae),Zt=new YA(D,Ye,We,Nt,nt,M,g),Wt=new LR(D,nt,Kt),ce=new kR(B,ne,Kt,Nt),Lt=new WA(B,ae,ne),ee=new i1(B,ae,ne),ne.programs=dt.programs,D.capabilities=Kt,D.extensions=ae,D.properties=Bt,D.renderLists=ft,D.shadowMap=Wt,D.state=Nt,D.info=ne}V();const bt=new GR(D,B);this.xr=bt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=ae.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ae.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(Y,st,!1))},this.getSize=function(b){return b.set(Y,st)},this.setSize=function(b,j,ot=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=b,st=j,i.width=Math.floor(b*Z),i.height=Math.floor(j*Z),ot===!0&&(i.style.width=b+"px",i.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(Y*Z,st*Z).floor()},this.setDrawingBufferSize=function(b,j,ot){Y=b,st=j,Z=ot,i.width=Math.floor(b*ot),i.height=Math.floor(j*ot),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(Ht)},this.setViewport=function(b,j,ot,lt){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,j,ot,lt),Nt.viewport(H.copy(Ht).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,j,ot,lt){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,j,ot,lt),Nt.scissor(Q.copy(se).multiplyScalar(Z).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(b){Nt.setScissorTest(be=b)},this.setOpaqueSort=function(b){gt=b},this.setTransparentSort=function(b){St=b},this.getClearColor=function(b){return b.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(b=!0,j=!0,ot=!0){let lt=0;if(b){let K=!1;if(X!==null){const Et=X.texture.format;K=Et===Lp||Et===Np||Et===Up}if(K){const Et=X.texture.type,Pt=Et===$i||Et===Ws||Et===ul||Et===cl||Et===wp||Et===Dp,It=Zt.getClearColor(),Ct=Zt.getClearAlpha(),Xt=It.r,te=It.g,Jt=It.b;Pt?(A[0]=Xt,A[1]=te,A[2]=Jt,A[3]=Ct,B.clearBufferuiv(B.COLOR,0,A)):(w[0]=Xt,w[1]=te,w[2]=Jt,w[3]=Ct,B.clearBufferiv(B.COLOR,0,w))}else lt|=B.COLOR_BUFFER_BIT}j&&(lt|=B.DEPTH_BUFFER_BIT),ot&&(lt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Gt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),Zt.dispose(),ft.dispose(),Vt.dispose(),Bt.dispose(),Ye.dispose(),We.dispose(),nt.dispose(),Ot.dispose(),ce.dispose(),dt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",pn),bt.removeEventListener("sessionend",Ln),ea.stop()};function wt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const b=ne.autoReset,j=Wt.enabled,ot=Wt.autoUpdate,lt=Wt.needsUpdate,K=Wt.type;V(),ne.autoReset=b,Wt.enabled=j,Wt.autoUpdate=ot,Wt.needsUpdate=lt,Wt.type=K}function yt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _t(b){const j=b.target;j.removeEventListener("dispose",_t),qt(j)}function qt(b){le(b),Bt.remove(b)}function le(b){const j=Bt.get(b).programs;j!==void 0&&(j.forEach(function(ot){dt.releaseProgram(ot)}),b.isShaderMaterial&&dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,ot,lt,K,Et){j===null&&(j=At);const Pt=K.isMesh&&K.matrixWorld.determinant()<0,It=xl(b,j,ot,lt,K);Nt.setMaterial(lt,Pt);let Ct=ot.index,Xt=1;if(lt.wireframe===!0){if(Ct=T.getWireframeAttribute(ot),Ct===void 0)return;Xt=2}const te=ot.drawRange,Jt=ot.attributes.position;let ve=te.start*Xt,Pe=(te.start+te.count)*Xt;Et!==null&&(ve=Math.max(ve,Et.start*Xt),Pe=Math.min(Pe,(Et.start+Et.count)*Xt)),Ct!==null?(ve=Math.max(ve,0),Pe=Math.min(Pe,Ct.count)):Jt!=null&&(ve=Math.max(ve,0),Pe=Math.min(Pe,Jt.count));const Qe=Pe-ve;if(Qe<0||Qe===1/0)return;Ot.setup(K,lt,It,ot,Ct);let Ne,Ce=Lt;if(Ct!==null&&(Ne=U.get(Ct),Ce=ee,Ce.setIndex(Ne)),K.isMesh)lt.wireframe===!0?(Nt.setLineWidth(lt.wireframeLinewidth*Yt()),Ce.setMode(B.LINES)):Ce.setMode(B.TRIANGLES);else if(K.isLine){let $t=lt.linewidth;$t===void 0&&($t=1),Nt.setLineWidth($t*Yt()),K.isLineSegments?Ce.setMode(B.LINES):K.isLineLoop?Ce.setMode(B.LINE_LOOP):Ce.setMode(B.LINE_STRIP)}else K.isPoints?Ce.setMode(B.POINTS):K.isSprite&&Ce.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)dl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Ce.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const $t=K._multiDrawStarts,Le=K._multiDrawCounts,_e=K._multiDrawCount,mn=Ct?U.get(Ct).bytesPerElement:1,$n=Bt.get(lt).currentProgram.getUniforms();for(let we=0;we<_e;we++)$n.setValue(B,"_gl_DrawID",we),Ce.render($t[we]/mn,Le[we])}else if(K.isInstancedMesh)Ce.renderInstances(ve,Qe,K.count);else if(ot.isInstancedBufferGeometry){const $t=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Le=Math.min(ot.instanceCount,$t);Ce.renderInstances(ve,Qe,Le)}else Ce.render(ve,Qe)};function Ge(b,j,ot){b.transparent===!0&&b.side===Zi&&b.forceSinglePass===!1?(b.side=Qn,b.needsUpdate=!0,ci(b,j,ot),b.side=cs,b.needsUpdate=!0,ci(b,j,ot),b.side=Zi):ci(b,j,ot)}this.compile=function(b,j,ot=null){ot===null&&(ot=b),v=Vt.get(ot),v.init(j),P.push(v),ot.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),b!==ot&&b.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const lt=new Set;return b.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Et=K.material;if(Et)if(Array.isArray(Et))for(let Pt=0;Pt<Et.length;Pt++){const It=Et[Pt];Ge(It,ot,K),lt.add(It)}else Ge(Et,ot,K),lt.add(Et)}),v=P.pop(),lt},this.compileAsync=function(b,j,ot=null){const lt=this.compile(b,j,ot);return new Promise(K=>{function Et(){if(lt.forEach(function(Pt){Bt.get(Pt).currentProgram.isReady()&&lt.delete(Pt)}),lt.size===0){K(b);return}setTimeout(Et,10)}ae.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Me=null;function $e(b){Me&&Me(b)}function pn(){ea.stop()}function Ln(){ea.start()}const ea=new OS;ea.setAnimationLoop($e),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(b){Me=b,bt.setAnimationLoop(b),b===null?ea.stop():ea.start()},bt.addEventListener("sessionstart",pn),bt.addEventListener("sessionend",Ln),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(j),j=bt.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,j,X),v=Vt.get(b,P.length),v.init(j),P.push(v),at.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),F.setFromProjectionMatrix(at,Qi,j.reversedDepth),$=this.localClippingEnabled,ct=Rt.init(this.clippingPlanes,$),x=ft.get(b,O.length),x.init(),O.push(x),bt.enabled===!0&&bt.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&co(Et,j,-1/0,D.sortObjects)}co(b,j,0,D.sortObjects),x.finish(),D.sortObjects===!0&&x.sort(gt,St),Mt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Mt&&Zt.addToRenderList(x,b),this.info.render.frame++,ct===!0&&Rt.beginShadows();const ot=v.state.shadowsArray;Wt.render(ot,b,j),ct===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=x.opaque,K=x.transmissive;if(v.setupLights(),j.isArrayCamera){const Et=j.cameras;if(K.length>0)for(let Pt=0,It=Et.length;Pt<It;Pt++){const Ct=Et[Pt];hs(lt,K,b,Ct)}Mt&&Zt.render(b);for(let Pt=0,It=Et.length;Pt<It;Pt++){const Ct=Et[Pt];yl(x,b,Ct,Ct.viewport)}}else K.length>0&&hs(lt,K,b,j),Mt&&Zt.render(b),yl(x,b,j);X!==null&&N===0&&(re.updateMultisampleRenderTarget(X),re.updateRenderTargetMipmap(X)),b.isScene===!0&&b.onAfterRender(D,b,j),Ot.resetDefaultState(),C=-1,R=null,P.pop(),P.length>0?(v=P[P.length-1],ct===!0&&Rt.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,O.pop(),O.length>0?x=O[O.length-1]:x=null};function co(b,j,ot,lt){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)ot=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||F.intersectsSprite(b)){lt&&Ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(at);const Pt=nt.update(b),It=b.material;It.visible&&x.push(b,Pt,It,ot,Ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||F.intersectsObject(b))){const Pt=nt.update(b),It=b.material;if(lt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ut.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ut.copy(Pt.boundingSphere.center)),Ut.applyMatrix4(b.matrixWorld).applyMatrix4(at)),Array.isArray(It)){const Ct=Pt.groups;for(let Xt=0,te=Ct.length;Xt<te;Xt++){const Jt=Ct[Xt],ve=It[Jt.materialIndex];ve&&ve.visible&&x.push(b,Pt,ve,ot,Ut.z,Jt)}}else It.visible&&x.push(b,Pt,It,ot,Ut.z,null)}}const Et=b.children;for(let Pt=0,It=Et.length;Pt<It;Pt++)co(Et[Pt],j,ot,lt)}function yl(b,j,ot,lt){const K=b.opaque,Et=b.transmissive,Pt=b.transparent;v.setupLightsView(ot),ct===!0&&Rt.setGlobalState(D.clippingPlanes,ot),lt&&Nt.viewport(H.copy(lt)),K.length>0&&na(K,j,ot),Et.length>0&&na(Et,j,ot),Pt.length>0&&na(Pt,j,ot),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function hs(b,j,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[lt.id]===void 0&&(v.state.transmissionRenderTarget[lt.id]=new Zs(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?pl:$i,minFilter:qs,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Et=v.state.transmissionRenderTarget[lt.id],Pt=lt.viewport||H;Et.setSize(Pt.z*D.transmissionResolutionScale,Pt.w*D.transmissionResolutionScale);const It=D.getRenderTarget(),Ct=D.getActiveCubeFace(),Xt=D.getActiveMipmapLevel();D.setRenderTarget(Et),D.getClearColor(mt),ut=D.getClearAlpha(),ut<1&&D.setClearColor(16777215,.5),D.clear(),Mt&&Zt.render(ot);const te=D.toneMapping;D.toneMapping=us;const Jt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),v.setupLightsView(lt),ct===!0&&Rt.setGlobalState(D.clippingPlanes,lt),na(b,ot,lt),re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Pe=0,Qe=j.length;Pe<Qe;Pe++){const Ne=j[Pe],Ce=Ne.object,$t=Ne.geometry,Le=Ne.material,_e=Ne.group;if(Le.side===Zi&&Ce.layers.test(lt.layers)){const mn=Le.side;Le.side=Qn,Le.needsUpdate=!0,ds(Ce,ot,lt,$t,Le,_e),Le.side=mn,Le.needsUpdate=!0,ve=!0}}ve===!0&&(re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et))}D.setRenderTarget(It,Ct,Xt),D.setClearColor(mt,ut),Jt!==void 0&&(lt.viewport=Jt),D.toneMapping=te}function na(b,j,ot){const lt=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Et=b.length;K<Et;K++){const Pt=b[K],It=Pt.object,Ct=Pt.geometry,Xt=Pt.group;let te=Pt.material;te.allowOverride===!0&&lt!==null&&(te=lt),It.layers.test(ot.layers)&&ds(It,j,ot,Ct,te,Xt)}}function ds(b,j,ot,lt,K,Et){b.onBeforeRender(D,j,ot,lt,K,Et),b.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(D,j,ot,lt,b,Et),K.transparent===!0&&K.side===Zi&&K.forceSinglePass===!1?(K.side=Qn,K.needsUpdate=!0,D.renderBufferDirect(ot,j,lt,K,b,Et),K.side=cs,K.needsUpdate=!0,D.renderBufferDirect(ot,j,lt,K,b,Et),K.side=Zi):D.renderBufferDirect(ot,j,lt,K,b,Et),b.onAfterRender(D,j,ot,lt,K,Et)}function ci(b,j,ot){j.isScene!==!0&&(j=At);const lt=Bt.get(b),K=v.state.lights,Et=v.state.shadowsArray,Pt=K.state.version,It=dt.getParameters(b,K.state,Et,j,ot),Ct=dt.getProgramCacheKey(It);let Xt=lt.programs;lt.environment=b.isMeshStandardMaterial?j.environment:null,lt.fog=j.fog,lt.envMap=(b.isMeshStandardMaterial?We:Ye).get(b.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,Xt===void 0&&(b.addEventListener("dispose",_t),Xt=new Map,lt.programs=Xt);let te=Xt.get(Ct);if(te!==void 0){if(lt.currentProgram===te&&lt.lightsStateVersion===Pt)return Aa(b,It),te}else It.uniforms=dt.getUniforms(b),b.onBeforeCompile(It,D),te=dt.acquireProgram(It,Ct),Xt.set(Ct,te),lt.uniforms=It.uniforms;const Jt=lt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Jt.clippingPlanes=Rt.uniform),Aa(b,It),lt.needsLights=Ml(b),lt.lightsStateVersion=Pt,lt.needsLights&&(Jt.ambientLightColor.value=K.state.ambient,Jt.lightProbe.value=K.state.probe,Jt.directionalLights.value=K.state.directional,Jt.directionalLightShadows.value=K.state.directionalShadow,Jt.spotLights.value=K.state.spot,Jt.spotLightShadows.value=K.state.spotShadow,Jt.rectAreaLights.value=K.state.rectArea,Jt.ltc_1.value=K.state.rectAreaLTC1,Jt.ltc_2.value=K.state.rectAreaLTC2,Jt.pointLights.value=K.state.point,Jt.pointLightShadows.value=K.state.pointShadow,Jt.hemisphereLights.value=K.state.hemi,Jt.directionalShadowMap.value=K.state.directionalShadowMap,Jt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Jt.spotShadowMap.value=K.state.spotShadowMap,Jt.spotLightMatrix.value=K.state.spotLightMatrix,Jt.spotLightMap.value=K.state.spotLightMap,Jt.pointShadowMap.value=K.state.pointShadowMap,Jt.pointShadowMatrix.value=K.state.pointShadowMatrix),lt.currentProgram=te,lt.uniformsList=null,te}function ps(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=gc.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function Aa(b,j){const ot=Bt.get(b);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function xl(b,j,ot,lt,K){j.isScene!==!0&&(j=At),re.resetTextureUnits();const Et=j.fog,Pt=lt.isMeshStandardMaterial?j.environment:null,It=X===null?D.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:so,Ct=(lt.isMeshStandardMaterial?We:Ye).get(lt.envMap||Pt),Xt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,te=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Jt=!!ot.morphAttributes.position,ve=!!ot.morphAttributes.normal,Pe=!!ot.morphAttributes.color;let Qe=us;lt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Qe=D.toneMapping);const Ne=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ce=Ne!==void 0?Ne.length:0,$t=Bt.get(lt),Le=v.state.lights;if(ct===!0&&($===!0||b!==R)){const en=b===R&&lt.id===C;Rt.setState(lt,b,en)}let _e=!1;lt.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Le.state.version||$t.outputColorSpace!==It||K.isBatchedMesh&&$t.batching===!1||!K.isBatchedMesh&&$t.batching===!0||K.isBatchedMesh&&$t.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&$t.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&$t.instancing===!1||!K.isInstancedMesh&&$t.instancing===!0||K.isSkinnedMesh&&$t.skinning===!1||!K.isSkinnedMesh&&$t.skinning===!0||K.isInstancedMesh&&$t.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$t.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&$t.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&$t.instancingMorph===!1&&K.morphTexture!==null||$t.envMap!==Ct||lt.fog===!0&&$t.fog!==Et||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Rt.numPlanes||$t.numIntersection!==Rt.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==te||$t.morphTargets!==Jt||$t.morphNormals!==ve||$t.morphColors!==Pe||$t.toneMapping!==Qe||$t.morphTargetsCount!==Ce)&&(_e=!0):(_e=!0,$t.__version=lt.version);let mn=$t.currentProgram;_e===!0&&(mn=ci(lt,j,K));let $n=!1,we=!1,Ra=!1;const je=mn.getUniforms(),Bn=$t.uniforms;if(Nt.useProgram(mn.program)&&($n=!0,we=!0,Ra=!0),lt.id!==C&&(C=lt.id,we=!0),$n||R!==b){Nt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),je.setValue(B,"projectionMatrix",b.projectionMatrix),je.setValue(B,"viewMatrix",b.matrixWorldInverse);const On=je.map.cameraPosition;On!==void 0&&On.setValue(B,xt.setFromMatrixPosition(b.matrixWorld)),Kt.logarithmicDepthBuffer&&je.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&je.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,we=!0,Ra=!0)}if(K.isSkinnedMesh){je.setOptional(B,K,"bindMatrix"),je.setOptional(B,K,"bindMatrixInverse");const en=K.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),je.setValue(B,"boneTexture",en.boneTexture,re))}K.isBatchedMesh&&(je.setOptional(B,K,"batchingTexture"),je.setValue(B,"batchingTexture",K._matricesTexture,re),je.setOptional(B,K,"batchingIdTexture"),je.setValue(B,"batchingIdTexture",K._indirectTexture,re),je.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&je.setValue(B,"batchingColorTexture",K._colorsTexture,re));const ln=ot.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Tt.update(K,ot,mn),(we||$t.receiveShadow!==K.receiveShadow)&&($t.receiveShadow=K.receiveShadow,je.setValue(B,"receiveShadow",K.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Bn.envMap.value=Ct,Bn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&j.environment!==null&&(Bn.envMapIntensity.value=j.environmentIntensity),we&&(je.setValue(B,"toneMappingExposure",D.toneMappingExposure),$t.needsLights&&bc(Bn,Ra),Et&&lt.fog===!0&&vt.refreshFogUniforms(Bn,Et),vt.refreshMaterialUniforms(Bn,lt,Z,st,v.state.transmissionRenderTarget[b.id]),gc.upload(B,ps($t),Bn,re)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(gc.upload(B,ps($t),Bn,re),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&je.setValue(B,"center",K.center),je.setValue(B,"modelViewMatrix",K.modelViewMatrix),je.setValue(B,"normalMatrix",K.normalMatrix),je.setValue(B,"modelMatrix",K.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const en=lt.uniformsGroups;for(let On=0,Qs=en.length;On<Qs;On++){const zi=en[On];ce.update(zi,mn),ce.bind(zi,mn)}}return mn}function bc(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function Ml(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,j,ot){const lt=Bt.get(b);lt.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Bt.get(b.texture).__webglTexture=j,Bt.get(b.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,j){const ot=Bt.get(b);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0};const fo=B.createFramebuffer();this.setRenderTarget=function(b,j=0,ot=0){X=b,z=j,N=ot;let lt=!0,K=null,Et=!1,Pt=!1;if(b){const Ct=Bt.get(b);if(Ct.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(B.FRAMEBUFFER,null),lt=!1;else if(Ct.__webglFramebuffer===void 0)re.setupRenderTarget(b);else if(Ct.__hasExternalTextures)re.rebindTextures(b,Bt.get(b.texture).__webglTexture,Bt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Jt=b.depthTexture;if(Ct.__boundDepthTexture!==Jt){if(Jt!==null&&Bt.has(Jt)&&(b.width!==Jt.image.width||b.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(b)}}const Xt=b.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const te=Bt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(te[j])?K=te[j][ot]:K=te[j],Et=!0):b.samples>0&&re.useMultisampledRTT(b)===!1?K=Bt.get(b).__webglMultisampledFramebuffer:Array.isArray(te)?K=te[ot]:K=te,H.copy(b.viewport),Q.copy(b.scissor),rt=b.scissorTest}else H.copy(Ht).multiplyScalar(Z).floor(),Q.copy(se).multiplyScalar(Z).floor(),rt=be;if(ot!==0&&(K=fo),Nt.bindFramebuffer(B.FRAMEBUFFER,K)&&lt&&Nt.drawBuffers(b,K),Nt.viewport(H),Nt.scissor(Q),Nt.setScissorTest(rt),Et){const Ct=Bt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ct.__webglTexture,ot)}else if(Pt){const Ct=j;for(let Xt=0;Xt<b.textures.length;Xt++){const te=Bt.get(b.textures[Xt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Xt,te.__webglTexture,ot,Ct)}}else if(b!==null&&ot!==0){const Ct=Bt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ct.__webglTexture,ot)}C=-1},this.readRenderTargetPixels=function(b,j,ot,lt,K,Et,Pt,It=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ct=Ct[Pt]),Ct){Nt.bindFramebuffer(B.FRAMEBUFFER,Ct);try{const Xt=b.textures[It],te=Xt.format,Jt=Xt.type;if(!Kt.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-lt&&ot>=0&&ot<=b.height-K&&(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+It),B.readPixels(j,ot,lt,K,jt.convert(te),jt.convert(Jt),Et))}finally{const Xt=X!==null?Bt.get(X).__webglFramebuffer:null;Nt.bindFramebuffer(B.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(b,j,ot,lt,K,Et,Pt,It=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Bt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ct=Ct[Pt]),Ct)if(j>=0&&j<=b.width-lt&&ot>=0&&ot<=b.height-K){Nt.bindFramebuffer(B.FRAMEBUFFER,Ct);const Xt=b.textures[It],te=Xt.format,Jt=Xt.type;if(!Kt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.bufferData(B.PIXEL_PACK_BUFFER,Et.byteLength,B.STREAM_READ),b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+It),B.readPixels(j,ot,lt,K,jt.convert(te),jt.convert(Jt),0);const Pe=X!==null?Bt.get(X).__webglFramebuffer:null;Nt.bindFramebuffer(B.FRAMEBUFFER,Pe);const Qe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await bE(B,Qe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Et),B.deleteBuffer(ve),B.deleteSync(Qe),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,j=null,ot=0){const lt=Math.pow(2,-ot),K=Math.floor(b.image.width*lt),Et=Math.floor(b.image.height*lt),Pt=j!==null?j.x:0,It=j!==null?j.y:0;re.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,ot,0,0,Pt,It,K,Et),Nt.unbindTexture()};const ms=B.createFramebuffer(),Ac=B.createFramebuffer();this.copyTextureToTexture=function(b,j,ot=null,lt=null,K=0,Et=null){Et===null&&(K!==0?(dl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=K,K=0):Et=0);let Pt,It,Ct,Xt,te,Jt,ve,Pe,Qe;const Ne=b.isCompressedTexture?b.mipmaps[Et]:b.image;if(ot!==null)Pt=ot.max.x-ot.min.x,It=ot.max.y-ot.min.y,Ct=ot.isBox3?ot.max.z-ot.min.z:1,Xt=ot.min.x,te=ot.min.y,Jt=ot.isBox3?ot.min.z:0;else{const ln=Math.pow(2,-K);Pt=Math.floor(Ne.width*ln),It=Math.floor(Ne.height*ln),b.isDataArrayTexture?Ct=Ne.depth:b.isData3DTexture?Ct=Math.floor(Ne.depth*ln):Ct=1,Xt=0,te=0,Jt=0}lt!==null?(ve=lt.x,Pe=lt.y,Qe=lt.z):(ve=0,Pe=0,Qe=0);const Ce=jt.convert(j.format),$t=jt.convert(j.type);let Le;j.isData3DTexture?(re.setTexture3D(j,0),Le=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(re.setTexture2DArray(j,0),Le=B.TEXTURE_2D_ARRAY):(re.setTexture2D(j,0),Le=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const _e=B.getParameter(B.UNPACK_ROW_LENGTH),mn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$n=B.getParameter(B.UNPACK_SKIP_PIXELS),we=B.getParameter(B.UNPACK_SKIP_ROWS),Ra=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ne.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ne.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xt),B.pixelStorei(B.UNPACK_SKIP_ROWS,te),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Jt);const je=b.isDataArrayTexture||b.isData3DTexture,Bn=j.isDataArrayTexture||j.isData3DTexture;if(b.isDepthTexture){const ln=Bt.get(b),en=Bt.get(j),On=Bt.get(ln.__renderTarget),Qs=Bt.get(en.__renderTarget);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,On.__webglFramebuffer),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Qs.__webglFramebuffer);for(let zi=0;zi<Ct;zi++)je&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Bt.get(b).__webglTexture,K,Jt+zi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Bt.get(j).__webglTexture,Et,Qe+zi)),B.blitFramebuffer(Xt,te,Pt,It,ve,Pe,Pt,It,B.DEPTH_BUFFER_BIT,B.NEAREST);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(K!==0||b.isRenderTargetTexture||Bt.has(b)){const ln=Bt.get(b),en=Bt.get(j);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,ms),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ac);for(let On=0;On<Ct;On++)je?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ln.__webglTexture,K,Jt+On):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ln.__webglTexture,K),Bn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,en.__webglTexture,Et,Qe+On):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,en.__webglTexture,Et),K!==0?B.blitFramebuffer(Xt,te,Pt,It,ve,Pe,Pt,It,B.COLOR_BUFFER_BIT,B.NEAREST):Bn?B.copyTexSubImage3D(Le,Et,ve,Pe,Qe+On,Xt,te,Pt,It):B.copyTexSubImage2D(Le,Et,ve,Pe,Xt,te,Pt,It);Nt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Bn?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Le,Et,ve,Pe,Qe,Pt,It,Ct,Ce,$t,Ne.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(Le,Et,ve,Pe,Qe,Pt,It,Ct,Ce,Ne.data):B.texSubImage3D(Le,Et,ve,Pe,Qe,Pt,It,Ct,Ce,$t,Ne):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Et,ve,Pe,Pt,It,Ce,$t,Ne.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Et,ve,Pe,Ne.width,Ne.height,Ce,Ne.data):B.texSubImage2D(B.TEXTURE_2D,Et,ve,Pe,Pt,It,Ce,$t,Ne);B.pixelStorei(B.UNPACK_ROW_LENGTH,_e),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,mn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$n),B.pixelStorei(B.UNPACK_SKIP_ROWS,we),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ra),Et===0&&j.generateMipmaps&&B.generateMipmap(Le),Nt.unbindTexture()},this.initRenderTarget=function(b){Bt.get(b).__webglFramebuffer===void 0&&re.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?re.setTextureCube(b,0):b.isData3DTexture?re.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?re.setTexture2DArray(b,0):re.setTexture2D(b,0),Nt.unbindTexture()},this.resetState=function(){z=0,N=0,X=null,Nt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const aS={type:"change"},Vp={type:"start"},FS={type:"end"},cc=new zp,sS=new rs,qR=Math.cos(70*EE.DEG2RAD),gn=new et,Kn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pd=1e-6;class WR extends lT{constructor(e,i=null){super(e,i),this.state=ke.NONE,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$r.ROTATE,MIDDLE:$r.DOLLY,RIGHT:$r.PAN},this.touches={ONE:Qr.ROTATE,TWO:Qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new js,this._lastTargetPosition=new et,this._quat=new js().setFromUnitVectors(e.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nv,this._sphericalDelta=new Nv,this._scale=1,this._panOffset=new et,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new et,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ZR.bind(this),this._onPointerDown=jR.bind(this),this._onPointerUp=KR.bind(this),this._onContextMenu=iC.bind(this),this._onMouseWheel=$R.bind(this),this._onKeyDown=tC.bind(this),this._onTouchStart=eC.bind(this),this._onTouchMove=nC.bind(this),this._onMouseDown=QR.bind(this),this._onMouseMove=JR.bind(this),this._interceptControlDown=aC.bind(this),this._interceptControlUp=sC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(aS),this.update(),this.state=ke.NONE}update(e=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,u=this.maxAzimuthAngle;isFinite(r)&&isFinite(u)&&(r<-Math.PI?r+=Kn:r>Math.PI&&(r-=Kn),u<-Math.PI?u+=Kn:u>Math.PI&&(u-=Kn),r<=u?this._spherical.theta=Math.max(r,Math.min(u,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+u)/2?Math.max(r,this._spherical.theta):Math.min(u,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=gn.length();h=this._clampDistance(d*this._scale);const g=d-h;this.object.position.addScaledVector(this._dollyDirection,g),this.object.updateMatrixWorld(),f=!!g}else if(this.object.isOrthographicCamera){const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const g=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=g!==this.object.zoom;const _=new et(this._mouse.x,this._mouse.y,0);_.unproject(this.object),this.object.position.sub(_).add(d),this.object.updateMatrixWorld(),h=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(cc.origin.copy(this.object.position),cc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cc.direction))<qR?this.object.lookAt(this.target):(sS.setFromNormalAndCoplanarPoint(this.object.up,this.target),cc.intersectPlane(sS,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>Pd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pd||this._lastTargetPosition.distanceToSquared(this.target)>Pd?(this.dispatchEvent(aS),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kn/60*this.autoRotateSpeed*e:Kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const u=this.object.position;gn.copy(u).sub(this.target);let f=gn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),u=e-r.left,f=i-r.top,h=r.width,d=r.height;this._mouse.x=u/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),u=.5*(e.pageY+i.y);this._rotateStart.set(r,u)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),u=.5*(e.pageY+i.y);this._panStart.set(r,u)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,u=e.pageY-i.y,f=Math.sqrt(r*r+u*u);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),u=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(u,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),u=.5*(e.pageY+i.y);this._panEnd.set(r,u)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,u=e.pageY-i.y,f=Math.sqrt(r*r+u*u);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ue,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function jR(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function ZR(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function KR(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(FS),this.state=ke.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function QR(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=ke.DOLLY;break;case $r.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ke.ROTATE}break;case $r.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Vp)}function JR(o){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function $R(o){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(o.preventDefault(),this.dispatchEvent(Vp),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(FS))}function tC(o){this.enabled!==!1&&this._handleKeyDown(o)}function eC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=ke.TOUCH_ROTATE;break;case Qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=ke.TOUCH_DOLLY_PAN;break;case Qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(Vp)}function nC(o){switch(this._trackPointer(o),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=ke.NONE}}function iC(o){this.enabled!==!1&&o.preventDefault()}function aC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const HS=137.5*(Math.PI/180);function Sl(o,e){return o.userData.organId=e,o.traverse(i=>i.userData.organId=e),o}const rC=new lo({color:4881471,roughness:.85,side:Zi}),GS=new lo({color:7048266,roughness:.8}),rS=new lo({color:14271626,roughness:.9}),oC=new lo({color:16119280,roughness:.6}),lC=new lo({color:9083466,roughness:.75});function uC(){const o=new Ta,e=new Un(new oo(.05,.015,3.2,8),rS);e.position.y=-1.6,o.add(e);const i=10;for(let r=0;r<i;r++){const u=.4+r/i*2.6,f=.5+Math.random()*.4,h=new Un(new oo(.012,.004,f,6),rS),d=r%2===0?1:-1,g=.9+Math.random()*.3;h.position.set(d*Math.cos(g)*f*.5,-u,d*Math.sin(g)*f*.3),h.rotation.z=d*g,o.add(h)}return Sl(o,"root")}function cC(){const o=new Ta,e=12;for(let i=0;i<e;i++){const r=i*HS,u=.35+.5*(i/e),f=new Un(new Ec(.5,12,8),rC);f.scale.set(.35*u,.06,.55*u);const h=.15+.35*u;f.position.set(Math.cos(r)*h,.02*i,Math.sin(r)*h),f.rotation.y=-r,f.rotation.z=.15,o.add(f)}return Sl(o,"rosette_leaf")}function fC(o){const e=new Un(new oo(.035,.05,o,8),GS);return e.position.y=o/2,Sl(e,"inflorescence_axis")}function hC(){const o=new Ta,e=4;for(let r=0;r<e;r++){const u=new Un(new Ec(.09,8,6),oC);u.scale.set(1,.15,2.2);const f=r/e*Math.PI*2;u.position.set(Math.cos(f)*.09,0,Math.sin(f)*.09),u.rotation.y=f,o.add(u)}const i=new Un(new oo(.015,.02,.15,6),GS);return i.position.y=.02,o.add(i),Sl(o,"flower")}function dC(){const o=new Un(new Fp(.025,.55,4,8),lC);return Sl(o,"silique")}function pC(o){const e=new Ta,i=9;for(let r=0;r<i;r++){const u=r/(i-1),f=o*(.35+.6*u),h=r*HS,d=.12,g=new et(Math.cos(h)*d,f,Math.sin(h)*d);if(u>.75){const _=hC();_.position.copy(g),e.add(_)}else{const _=dC();_.position.copy(g),_.rotation.z=Math.PI/2+(Math.random()-.5)*.3,_.rotation.y=h,e.add(_)}}return e}function mC(){const o=new Ta,e=2.4;return o.add(uC()),o.add(cC()),o.add(fC(e)),o.add(pC(e)),o}function _C(o){let e=o;for(;e;){if(e.userData.organId)return e.userData.organId;e=e.parent}return null}function gC(o,e){const i=new KE;i.background=new Re(988176);const r=new Mi(45,1,.01,1e3);r.position.set(4,3,4);const u=new YR({antialias:!0});u.setPixelRatio(Math.min(devicePixelRatio,2)),o.appendChild(u.domElement),i.add(new nT(16777215,3158826,1.1));const f=new sT(16777215,1.6);f.position.set(3,6,4),i.add(f);const h=new Un(new Hp(3,32),new lo({color:2827287,roughness:1}));h.rotation.x=-Math.PI/2,h.position.y=-.01,i.add(h);const d=mC();i.add(d);const g=new WR(r,u.domElement);g.enableDamping=!0,g.target.set(0,.8,0),g.update();const _=new oT,S=new ue;let p=[];const y=new Map;function M(){for(const D of p){const I=D,z=I.material,N=y.get(I);z&&N&&(z.emissive=N)}p=[]}function A(D){M(),d.traverse(I=>{if(I.userData.organId===D&&I.isMesh){const z=I,N=z.material;N&&N.emissive&&(y.has(z)||y.set(z,N.emissive.clone()),N.emissive=new Re(3108175),p.push(z))}})}function w(D){const I=u.domElement.getBoundingClientRect();S.x=(D.clientX-I.left)/I.width*2-1,S.y=-((D.clientY-I.top)/I.height)*2+1,_.setFromCamera(S,r);const z=_.intersectObject(d,!0),N=z.length>0?_C(z[0].object):null;N?A(N):M(),e(N)}u.domElement.addEventListener("click",w);let x=0;const v=()=>{x=requestAnimationFrame(v),g.update(),u.render(i,r)};v();const O=()=>{const D=o.clientWidth||1,I=o.clientHeight||1;u.setSize(D,I),r.aspect=D/I,r.updateProjectionMatrix()};O();const P=new ResizeObserver(O);return P.observe(o),{dispose(){cancelAnimationFrame(x),P.disconnect(),u.domElement.removeEventListener("click",w),g.dispose(),u.dispose(),u.domElement.remove()}}}const vC={"OSD-120":{organism_part:"root",comparison:"Spaceflight vs. ground control (Day 13 root, GLDS/OSD-120)",n_genes_total:32833,top_upregulated:[{gene_id:"AT2G01422",log2fc:4.751},{gene_id:"AT2G05510",log2fc:4.645},{gene_id:"AT5G19890",log2fc:3.911},{gene_id:"AT2G26400",log2fc:2.714},{gene_id:"AT2G34317",log2fc:2.557},{gene_id:"AT2G30670",log2fc:2.504},{gene_id:"AT2G43920",log2fc:2.465},{gene_id:"AT4G11650",log2fc:2.411}],top_downregulated:[{gene_id:"AT5G13930",log2fc:-5.27},{gene_id:"AT5G09570",log2fc:-4.253},{gene_id:"AT3G51240",log2fc:-3.024},{gene_id:"AT5G33355",log2fc:-2.759},{gene_id:"AT2G04050",log2fc:-2.587},{gene_id:"AT3G30720",log2fc:-2.387},{gene_id:"AT2G21640",log2fc:-2.384},{gene_id:"AT1G01060",log2fc:-2.322}],source_file:"data/processed/OSD-120_root_flight_vs_ground_log2fc.csv"},"OSD-314":{organism_part:"whole seedling",comparison:"Microgravity (0g) vs. 1g ground control, whole seedling (OSD-314)",n_genes_total:32833,top_upregulated:[{gene_id:"AT4G28520",log2fc:5.543},{gene_id:"AT5G44120",log2fc:5.536},{gene_id:"AT1G73190",log2fc:5.527},{gene_id:"AT5G40420",log2fc:5.407},{gene_id:"ATCG00040",log2fc:4.739},{gene_id:"AT4G25140",log2fc:4.693},{gene_id:"AT3G54940",log2fc:4.684},{gene_id:"AT2G28490",log2fc:4.533}],top_downregulated:[{gene_id:"AT2G32810",log2fc:-4.873},{gene_id:"AT3G01345",log2fc:-4.445},{gene_id:"AT1G53480",log2fc:-4.437},{gene_id:"AT4G17090",log2fc:-4.174},{gene_id:"AT3G05727",log2fc:-4.08},{gene_id:"AT2G30750",log2fc:-3.878},{gene_id:"AT3G45140",log2fc:-3.76},{gene_id:"AT3G05730",log2fc:-3.694}],source_file:"data/processed/OSD-314_seedling_microgravity_vs_1g_log2fc.csv"}};function VS(o){const e=vC[o];return{studyId:o,comparison:e.comparison,nGenesTotal:e.n_genes_total,topUpregulated:e.top_upregulated,topDownregulated:e.top_downregulated,sourceFile:e.source_file}}const SC=[{id:"root",label:"Root system",travaCategory:"Root (root apex / root without apex)",geometryNote:"Branching pattern and primary/lateral proportions follow the single-cell root developmental atlas, not a scan of a specimen.",geometryCitations:["Shahan2022"],spaceflight:VS("OSD-120")},{id:"rosette_leaf",label:"Rosette leaf",travaCategory:"Third leaf (petiole / leaf blade / central vein)",geometryNote:"Leaf arrangement uses the ~137.5° golden-angle phyllotaxy widely reported for Arabidopsis rosettes; blade shape is a simplified obovate approximation, not a scan.",geometryCitations:[],spaceflight:null,spaceflightCaveat:"OSD-314 profiled whole seedlings, not dissected rosette leaves -- shown on Root only, where the tissue match is exact."},{id:"inflorescence_axis",label:"Inflorescence axis",travaCategory:"Axes (peduncles / inflorescence axis / internode)",geometryNote:"Simplified tapering-cylinder approximation of the bolting stem; proportions are illustrative, not measured.",geometryCitations:[],spaceflight:null},{id:"flower",label:"Flower",travaCategory:"Flower / Flower part (sepals, anthers, carpels, ovules, stigmatic tissue)",geometryNote:"Whorl arrangement (sepals/petals/stamens/carpels) is schematic; internal carpel/ovule proportions are informed by the digital 3D ovule-development atlas.",geometryCitations:["Vijayan2021"],spaceflight:null},{id:"silique",label:"Silique",travaCategory:"Silique development",geometryNote:"Elongated bicarpellate capsule approximation; internal seed-row layout informed by the same ovule-development atlas used for the flower.",geometryCitations:["Vijayan2021"],spaceflight:null}],yC=VS("OSD-314"),XS="https://travadb.org",xC=o=>`https://osdr.nasa.gov/bio/repo/data/studies/${o}`;function oS({title:o,genes:e}){return me.jsxs("div",{className:"gene-panel",children:[me.jsx("h4",{children:o}),me.jsx("ul",{children:e.map(i=>me.jsxs("li",{children:[me.jsx("a",{href:`${XS}`,target:"_blank",rel:"noreferrer",title:"Look this locus up on TraVA",children:i.gene_id}),me.jsxs("span",{className:i.log2fc>=0?"up":"down",children:[i.log2fc>0?"+":"",i.log2fc.toFixed(2)]})]},i.gene_id))})]})}function MC({organ:o}){return me.jsxs("div",{className:"organ-info",children:[me.jsx("h2",{children:o.label}),me.jsxs("p",{className:"trava-category",children:["TraVA category: ",me.jsx("em",{children:o.travaCategory})," —"," ",me.jsx("a",{href:XS,target:"_blank",rel:"noreferrer",children:"browse real developmental expression on TraVA →"})]}),me.jsx("p",{className:"geometry-note",children:o.geometryNote}),o.geometryCitations.length>0&&me.jsxs("p",{className:"citations",children:["Geometry citations: ",o.geometryCitations.join(", ")]}),o.spaceflight?me.jsxs("div",{className:"spaceflight-block",children:[me.jsxs("h3",{children:["Real spaceflight response — ",o.spaceflight.studyId]}),me.jsx("p",{children:o.spaceflight.comparison}),me.jsxs("p",{className:"n-genes",children:[o.spaceflight.nGenesTotal.toLocaleString()," genes quantified. Log2 fold-change is a raw mean-CPM ratio, not a statistically tested DE call (no DESeq2, no p-values) — see methods."]}),me.jsxs("div",{className:"gene-panels",children:[me.jsx(oS,{title:"Highest flight/ground ratio",genes:o.spaceflight.topUpregulated}),me.jsx(oS,{title:"Lowest flight/ground ratio",genes:o.spaceflight.topDownregulated})]}),me.jsxs("p",{className:"source-link",children:["Source: ",me.jsx("code",{children:o.spaceflight.sourceFile})," ·"," ",me.jsxs("a",{href:xC(o.spaceflight.studyId),target:"_blank",rel:"noreferrer",children:[o.spaceflight.studyId," on NASA OSDR ↗"]})]})]}):me.jsxs("p",{className:"no-spaceflight",children:["No organ-specific spaceflight dataset is wired up for this organ yet.",o.spaceflightCaveat?` ${o.spaceflightCaveat}`:""]})]})}function EC(){const o=fc.useRef(null),[e,i]=fc.useState(null);fc.useEffect(()=>{if(!o.current)return;const u=gC(o.current,i);return()=>u.dispose()},[]);const r=SC.find(u=>u.id===e)??null;return me.jsxs("div",{className:"app",children:[me.jsxs("header",{className:"app-header",children:[me.jsx("h1",{children:"Arabidopsis Atlas"}),me.jsxs("p",{children:["Click an organ to explore it. Started from"," ",me.jsx("a",{href:"https://github.com/dr-richard-barker/rice-atlas",target:"_blank",rel:"noreferrer",children:"rice-atlas"})," ","— see the ",me.jsx("a",{href:"https://github.com/dr-richard-barker/arabidopsis-atlas#readme",target:"_blank",rel:"noreferrer",children:"README"})," for what's actually real data here vs. simplified geometry."]})]}),me.jsxs("div",{className:"app-body",children:[me.jsx("div",{className:"viewer-container",ref:o}),me.jsx("aside",{className:"sidebar",children:r?me.jsx(MC,{organ:r}):me.jsxs("div",{className:"welcome",children:[me.jsx("p",{children:"No organ selected. Click any part of the plant."}),me.jsxs("p",{className:"hint",children:["Whole-seedling spaceflight coverage (",yC.studyId,", real data, not organ-specific) is documented in ",me.jsx("code",{children:"data/README.md"})," rather than shown here, since it isn't tissue-specific."]})]})})]})]})}OM.createRoot(document.getElementById("root")).render(me.jsx(fc.StrictMode,{children:me.jsx(EC,{})}));
