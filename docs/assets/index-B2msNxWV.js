(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();var hd={exports:{}},ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function eE(){if(vv)return ol;vv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var d in l)d!=="key"&&(f[d]=l[d])}else f=l;return l=f.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:f}}return ol.Fragment=e,ol.jsx=i,ol.jsxs=i,ol}var yv;function nE(){return yv||(yv=1,hd.exports=eE()),hd.exports}var mt=nE(),dd={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function iE(){if(Sv)return le;Sv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),x=Symbol.iterator;function E(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function O(I,ut,$){this.props=I,this.context=ut,this.refs=S,this.updater=$||A}O.prototype.isReactComponent={},O.prototype.setState=function(I,ut){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ut,"setState")},O.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function P(){}P.prototype=O.prototype;function w(I,ut,$){this.props=I,this.context=ut,this.refs=S,this.updater=$||A}var F=w.prototype=new P;F.constructor=w,M(F,O.prototype),F.isPureReactComponent=!0;var B=Array.isArray;function L(){}var q={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function C(I,ut,$){var it=$.ref;return{$$typeof:o,type:I,key:ut,ref:it!==void 0?it:null,props:$}}function V(I,ut){return C(I.type,ut,I.props)}function at(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function ct(I){var ut={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function($){return ut[$]})}var gt=/\/+/g;function lt(I,ut){return typeof I=="object"&&I!==null&&I.key!=null?ct(""+I.key):ut.toString(36)}function j(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(ut){I.status==="pending"&&(I.status="fulfilled",I.value=ut)},function(ut){I.status==="pending"&&(I.status="rejected",I.reason=ut)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function st(I,ut,$,it,Mt){var Ut=typeof I;(Ut==="undefined"||Ut==="boolean")&&(I=null);var Rt=!1;if(I===null)Rt=!0;else switch(Ut){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(I.$$typeof){case o:case e:Rt=!0;break;case v:return Rt=I._init,st(Rt(I._payload),ut,$,it,Mt)}}if(Rt)return Mt=Mt(I),Rt=it===""?"."+lt(I,0):it,B(Mt)?($="",Rt!=null&&($=Rt.replace(gt,"$&/")+"/"),st(Mt,ut,$,"",function(z){return z})):Mt!=null&&(at(Mt)&&(Mt=V(Mt,$+(Mt.key==null||I&&I.key===Mt.key?"":(""+Mt.key).replace(gt,"$&/")+"/")+Rt)),ut.push(Mt)),1;Rt=0;var Et=it===""?".":it+":";if(B(I))for(var Yt=0;Yt<I.length;Yt++)it=I[Yt],Ut=Et+lt(it,Yt),Rt+=st(it,ut,$,Ut,Mt);else if(Yt=E(I),typeof Yt=="function")for(I=Yt.call(I),Yt=0;!(it=I.next()).done;)it=it.value,Ut=Et+lt(it,Yt++),Rt+=st(it,ut,$,Ut,Mt);else if(Ut==="object"){if(typeof I.then=="function")return st(j(I),ut,$,it,Mt);throw ut=String(I),Error("Objects are not valid as a React child (found: "+(ut==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ut)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function K(I,ut,$){if(I==null)return I;var it=[],Mt=0;return st(I,it,"","",function(Ut){return ut.call($,Ut,Mt++)}),it}function vt(I){if(I._status===-1){var ut=I._result,$=ut();$.then(function(it){(I._status===0||I._status===-1)&&(I._status=1,I._result=it,$.status===void 0&&($.status="fulfilled",$.value=it))},function(it){(I._status===0||I._status===-1)&&(I._status=2,I._result=it,$.status===void 0&&($.status="rejected",$.reason=it))}),I._status===-1&&(I._status=0,I._result=$)}if(I._status===1)return I._result.default;throw I._result}var St=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ut=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ut))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Gt(I){var ut=q.T,$={};$.types=ut!==null?ut.types:null,q.T=$;try{var it=I(),Mt=q.S;Mt!==null&&Mt($,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(L,St)}catch(Ut){St(Ut)}finally{ut!==null&&$.types!==null&&(ut.types=$.types),q.T=ut}}function re(I){var ut=q.T;if(ut!==null){var $=ut.types;$===null?ut.types=[I]:$.indexOf(I)===-1&&$.push(I)}else Gt(re.bind(null,I))}var be={map:K,forEach:function(I,ut,$){K(I,function(){ut.apply(this,arguments)},$)},count:function(I){var ut=0;return K(I,function(){ut++}),ut},toArray:function(I){return K(I,function(ut){return ut})||[]},only:function(I){if(!at(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return le.Activity=_,le.Children=be,le.Component=O,le.Fragment=i,le.Profiler=l,le.PureComponent=w,le.StrictMode=r,le.Suspense=m,le.ViewTransition=y,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,le.__COMPILER_RUNTIME={__proto__:null,c:function(I){return q.H.useMemoCache(I)}},le.addTransitionType=re,le.cache=function(I){return function(){return I.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(I,ut,$){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var it=M({},I.props),Mt=I.key;if(ut!=null)for(Ut in ut.key!==void 0&&(Mt=""+ut.key),ut)!D.call(ut,Ut)||Ut==="key"||Ut==="__self"||Ut==="__source"||Ut==="ref"&&ut.ref===void 0||(it[Ut]=ut[Ut]);var Ut=arguments.length-2;if(Ut===1)it.children=$;else if(1<Ut){for(var Rt=Array(Ut),Et=0;Et<Ut;Et++)Rt[Et]=arguments[Et+2];it.children=Rt}return C(I.type,Mt,it)},le.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:f,_context:I},I},le.createElement=function(I,ut,$){var it,Mt={},Ut=null;if(ut!=null)for(it in ut.key!==void 0&&(Ut=""+ut.key),ut)D.call(ut,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(Mt[it]=ut[it]);var Rt=arguments.length-2;if(Rt===1)Mt.children=$;else if(1<Rt){for(var Et=Array(Rt),Yt=0;Yt<Rt;Yt++)Et[Yt]=arguments[Yt+2];Mt.children=Et}if(I&&I.defaultProps)for(it in Rt=I.defaultProps,Rt)Mt[it]===void 0&&(Mt[it]=Rt[it]);return C(I,Ut,Mt)},le.createRef=function(){return{current:null}},le.forwardRef=function(I){return{$$typeof:d,render:I}},le.isValidElement=at,le.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:vt}},le.memo=function(I,ut){return{$$typeof:p,type:I,compare:ut===void 0?null:ut}},le.startTransition=Gt,le.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},le.use=function(I){return q.H.use(I)},le.useActionState=function(I,ut,$){return q.H.useActionState(I,ut,$)},le.useCallback=function(I,ut){return q.H.useCallback(I,ut)},le.useContext=function(I){return q.H.useContext(I)},le.useDebugValue=function(){},le.useDeferredValue=function(I,ut){return q.H.useDeferredValue(I,ut)},le.useEffect=function(I,ut){return q.H.useEffect(I,ut)},le.useEffectEvent=function(I){return q.H.useEffectEvent(I)},le.useId=function(){return q.H.useId()},le.useImperativeHandle=function(I,ut,$){return q.H.useImperativeHandle(I,ut,$)},le.useInsertionEffect=function(I,ut){return q.H.useInsertionEffect(I,ut)},le.useLayoutEffect=function(I,ut){return q.H.useLayoutEffect(I,ut)},le.useMemo=function(I,ut){return q.H.useMemo(I,ut)},le.useOptimistic=function(I,ut){return q.H.useOptimistic(I,ut)},le.useReducer=function(I,ut,$){return q.H.useReducer(I,ut,$)},le.useRef=function(I){return q.H.useRef(I)},le.useState=function(I){return q.H.useState(I)},le.useSyncExternalStore=function(I,ut,$){return q.H.useSyncExternalStore(I,ut,$)},le.useTransition=function(){return q.H.useTransition()},le.version="19.3.0",le}var xv;function Kp(){return xv||(xv=1,dd.exports=iE()),dd.exports}var Ta=Kp(),pd={exports:{}},ll={},md={exports:{}},_d={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function aE(){return Mv||(Mv=1,(function(o){function e(j,st){var K=j.length;j.push(st);t:for(;0<K;){var vt=K-1>>>1,St=j[vt];if(0<l(St,st))j[vt]=st,j[K]=St,K=vt;else break t}}function i(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var st=j[0],K=j.pop();if(K!==st){j[0]=K;t:for(var vt=0,St=j.length,Gt=St>>>1;vt<Gt;){var re=2*(vt+1)-1,be=j[re],I=re+1,ut=j[I];if(0>l(be,K))I<St&&0>l(ut,be)?(j[vt]=ut,j[I]=K,vt=I):(j[vt]=be,j[re]=K,vt=re);else if(I<St&&0>l(ut,K))j[vt]=ut,j[I]=K,vt=I;else break t}}return st}function l(j,st){var K=j.sortIndex-st.sortIndex;return K!==0?K:j.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,_=null,y=3,x=!1,E=!1,A=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function w(j){for(var st=i(p);st!==null;){if(st.callback===null)r(p);else if(st.startTime<=j)r(p),st.sortIndex=st.expirationTime,e(m,st);else break;st=i(p)}}function F(j){if(A=!1,w(j),!E)if(i(m)!==null)E=!0,B||(B=!0,at());else{var st=i(p);st!==null&&lt(F,st.startTime-j)}}var B=!1,L=-1,q=5,D=-1;function C(){return M?!0:!(o.unstable_now()-D<q)}function V(){if(M=!1,B){var j=o.unstable_now();D=j;var st=!0;try{t:{E=!1,A&&(A=!1,O(L),L=-1),x=!0;var K=y;try{e:{for(w(j),_=i(m);_!==null&&!(_.expirationTime>j&&C());){var vt=_.callback;if(typeof vt=="function"){_.callback=null,y=_.priorityLevel;var St=vt(_.expirationTime<=j);if(j=o.unstable_now(),typeof St=="function"){_.callback=St,w(j),st=!0;break e}_===i(m)&&r(m),w(j)}else r(m);_=i(m)}if(_!==null)st=!0;else{var Gt=i(p);Gt!==null&&lt(F,Gt.startTime-j),st=!1}}break t}finally{_=null,y=K,x=!1}st=void 0}}finally{st?at():B=!1}}}var at;if(typeof P=="function")at=function(){P(V)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,gt=ct.port2;ct.port1.onmessage=V,at=function(){gt.postMessage(null)}}else at=function(){S(V,0)};function lt(j,st){L=S(function(){j(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(j){j.callback=null},o.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<j?Math.floor(1e3/j):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(j){switch(y){case 1:case 2:case 3:var st=3;break;default:st=y}var K=y;y=st;try{return j()}finally{y=K}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(j,st){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var K=y;y=j;try{return st()}finally{y=K}},o.unstable_scheduleCallback=function(j,st,K){var vt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?vt+K:vt):K=vt,j){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=K+St,j={id:v++,callback:st,priorityLevel:j,startTime:K,expirationTime:St,sortIndex:-1},K>vt?(j.sortIndex=K,e(p,j),i(m)===null&&j===i(p)&&(A?(O(L),L=-1):A=!0,lt(F,K-vt))):(j.sortIndex=St,e(m,j),E||x||(E=!0,B||(B=!0,at()))),j},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(j){var st=y;return function(){var K=y;y=st;try{return j.apply(this,arguments)}finally{y=K}}}})(_d)),_d}var Ev;function sE(){return Ev||(Ev=1,md.exports=aE()),md.exports}var gd={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function rE(){if(Tv)return wn;Tv=1;var o=Kp();function e(v){var _="https://react.dev/errors/"+v;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)_+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,_,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:x===h?h:""+x,children:v,containerInfo:_,implementation:y}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(v,_){if(v==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.browser=function(v){return{$$typeof:f,_reason:v}},wn.createPortal=function(v,_){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return d(v,_,null,y)},wn.flushSync=function(v){var _=m.T,y=r.p;try{if(m.T=null,r.p=2,v)return v()}finally{m.T=_,r.p=y,r.d.f()}},wn.preconnect=function(v,_){typeof v=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(v,_))},wn.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},wn.preinit=function(v,_){if(typeof v=="string"&&_&&typeof _.as=="string"){var y=_.as,x=p(y,_.crossOrigin),E=typeof _.integrity=="string"?_.integrity:void 0,A=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;y==="style"?r.d.S(v,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:x,integrity:E,fetchPriority:A}):y==="script"&&r.d.X(v,{crossOrigin:x,integrity:E,fetchPriority:A,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},wn.preinitModule=function(v,_){if(typeof v=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var y=p(_.as,_.crossOrigin);r.d.M(v,{crossOrigin:y,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&r.d.M(v)},wn.preload=function(v,_){if(typeof v=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var y=_.as,x=p(y,_.crossOrigin);r.d.L(v,y,{crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},wn.preloadModule=function(v,_){if(typeof v=="string")if(_){var y=p(_.as,_.crossOrigin);r.d.m(v,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:y,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else r.d.m(v)},wn.requestFormReset=function(v){r.d.r(v)},wn.unstable_batchedUpdates=function(v,_){return v(_)},wn.useFormState=function(v,_,y){return m.H.useFormState(v,_,y)},wn.useFormStatus=function(){return m.H.useHostTransitionStatus()},wn.version="19.3.0",wn}var bv;function oE(){if(bv)return gd.exports;bv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),gd.exports=rE(),gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function lE(){if(Av)return ll;Av=1;var o=sE(),e=Kp(),i=oE();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(f(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return m(c),t;if(u===s)return m(c),n;u=u.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=u;else{for(var g=!1,T=c.child;T;){if(T===a){g=!0,a=c,s=u;break}if(T===s){g=!0,s=c,a=u;break}T=T.sibling}if(!g){for(T=u.child;T;){if(T===a){g=!0,a=u,s=c;break}if(T===s){g=!0,s=u,a=c;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function _(t,n,a,s,c,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,c,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&_(t.child,n,a,s,c,u))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function x(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=y(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var S=null,O=null;function P(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function w(t,n,a){return t===a?(O=t,!1):t===n?(O!==null&&(S=t),!0):!1}function F(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function B(t,n,a){for(var s=0,c=t;c;c=a(c))s++;c=0;for(var u=n;u;u=a(u))c++;for(;0<s-c;)t=a(t),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var L=Object.assign,q=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),ct=Symbol.for("react.profiler"),gt=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Gt=Symbol.for("react.activity"),re=Symbol.for("react.legacy_hidden"),be=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),ut=Symbol.for("react.recoverable"),$=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function Ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case ct:return"Profiler";case at:return"StrictMode";case st:return"Suspense";case K:return"SuspenseList";case Gt:return"Activity";case I:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case lt:return t.displayName||"Context";case gt:return(t._context.displayName||"Context")+".Consumer";case j:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return n=t.displayName||null,n!==null?n:Ut(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return Ut(t(n))}catch{}}return null}var Rt=Array.isArray,Et=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Yt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},He=[],se=-1;function Qt(t){return{current:t}}function Lt(t){0>se||(t.current=He[se],He[se]=null,se--)}function ie(t,n){se++,He[se]=t.current,t.current=n}var Ft=Qt(null),oe=Qt(null),qe=Qt(null),We=Qt(null);function N(t,n){switch(ie(qe,n),ie(oe,t),ie(Ft,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?R0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=R0(n),t=C0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ft),ie(Ft,t)}function b(){Lt(Ft),Lt(oe),Lt(qe)}function et(t){var n=t.memoizedState;n!==null&&(Gr._currentValue=n.memoizedState,ie(We,t)),n=Ft.current;var a=C0(n,t.type);n!==a&&(ie(oe,t),ie(Ft,a))}function dt(t){oe.current===t&&(Lt(Ft),Lt(oe)),We.current===t&&(Lt(We),Gr._currentValue=z)}var yt,ft;function Xt(t){if(yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);yt=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+t+ft}var Ct=!1;function jt(t,n){if(!t||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(Nt){var X=Nt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(Nt){X=Nt}pt=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),pt=!0,new t}finally{pt&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Nt){X=Nt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(Nt){if(Nt&&X&&typeof Nt.stack=="string")return[Nt.stack,X.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),g=u[0],T=u[1];if(g&&T){var U=g.split(`
`),W=T.split(`
`);for(c=s=0;s<U.length&&!U[s].includes("DetermineComponentFrameRoot");)s++;for(;c<W.length&&!W[c].includes("DetermineComponentFrameRoot");)c++;if(s===U.length||c===W.length)for(s=U.length-1,c=W.length-1;1<=s&&0<=c&&U[s]!==W[c];)c--;for(;1<=s&&0<=c;s--,c--)if(U[s]!==W[c]){if(s!==1||c!==1)do if(s--,c--,0>c||U[s]!==W[c]){var nt=`
`+U[s].replace(" at new "," at ");return t.displayName&&nt.includes("<anonymous>")&&(nt=nt.replace("<anonymous>",t.displayName)),nt}while(1<=s&&0<=c);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xt(a):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return Xt(t.type);case 16:return Xt("Lazy");case 13:return t.child!==n&&n!==null?Xt("Suspense Fallback"):Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return jt(t.type,!1);case 11:return jt(t.type.render,!1);case 1:return jt(t.type,!0);case 31:return Xt("Activity");case 30:return Xt("ViewTransition");default:return""}}function bt(t){try{var n="",a=null;do n+=Kt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ot=Object.prototype.hasOwnProperty,ne=o.unstable_scheduleCallback,Zt=o.unstable_cancelCallback,Pt=o.unstable_shouldYield,fe=o.unstable_requestPaint,G=o.unstable_now,At=o.unstable_getCurrentPriorityLevel,Dt=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,xt=o.unstable_NormalPriority,_t=o.unstable_LowPriority,Wt=o.unstable_IdlePriority,ce=o.log,Ge=o.unstable_setDisableYieldValue,Me=null,$e=null;function pn(t){if(typeof ce=="function"&&Ge(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Me,t)}catch{}}var Nn=Math.clz32?Math.clz32:Dl,na=Math.log,go=Math.LN2;function Dl(t){return t>>>=0,t===0?32:31-(na(t)/go|0)|0}var gs=256,ia=262144,vs=4194304;function fi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ys(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,u=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~u,s!==0?c=fi(s):(g&=T,g!==0?c=fi(g):a||(a=T&~t,a!==0&&(c=fi(a))))):(T=s&~u,T!==0?c=fi(T):g!==0?c=fi(g):a||(a=s&~t,a!==0&&(c=fi(a)))),c===0?0:n!==0&&n!==c&&(n&u)===0&&(u=c&-c,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:c}function Ca(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Nl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-Nn(a),c=1<<s;n|=t[s],a&=~c}return n}function Fu(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ul(){var t=vs;return vs<<=1,(vs&62914560)===0&&(vs=4194304),t}function vo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ss(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Hu(t,n,a,s,c,u){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,U=t.expirationTimes,W=t.hiddenUpdates;for(a=g&~a;0<a;){var nt=31-Nn(a),pt=1<<nt;T[nt]=0,U[nt]=-1;var X=W[nt];if(X!==null)for(W[nt]=null,nt=0;nt<X.length;nt++){var tt=X[nt];tt!==null&&(tt.lane&=-536870913)}a&=~pt}s!==0&&R(t,s,0),u!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=u&~(g&~n))}function R(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Nn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Z(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Nn(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function rt(t,n){var a=n&-n;return a=(a&42)!==0?1:ot(a),(a&(t.suspendedLanes|n))!==0?0:a}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Q(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=Yt.p;return t!==0?t:(t=window.event,t===void 0?32:fv(t.type))}function zt(t,n){var a=Yt.p;try{return Yt.p=t,n()}finally{Yt.p=a}}var Bt=Math.random().toString(36).slice(2),wt="__reactFiber$"+Bt,kt="__reactProps$"+Bt,ee="__reactContainer$"+Bt,$t="__reactEvents$"+Bt,ye="__reactListeners$"+Bt,Pe="__reactHandles$"+Bt,Qe="__reactResources$"+Bt,Ue="__reactMarker$"+Bt,Ce="__reactLoad$"+Bt;function te(t){delete t[wt],delete t[kt],delete t[ye],delete t[Pe]}function Le(t){var n;if(n=t[wt])return n;for(var a=t.parentNode;a;){if(n=a[ee]||a[wt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=q0(t);t!==null;){if(a=t[wt])return a;t=q0(t)}return n}t=a,a=t.parentNode}return null}function _e(t){if(t=t[wt]||t[ee]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function $n(t){var n=t[Qe];return n||(n=t[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function we(t){t[Ue]=!0}function wa(t){t[Ce]=void 0}var je=new Set,zn={};function ln(t,n){nn(t,n),nn(t+"Capture",n)}function nn(t,n){for(zn[t]=n,t=0;t<n.length;t++)je.add(n[t])}var Un=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ar={},Ii={};function SS(t){return Ot.call(Ii,t)?!0:Ot.call(ar,t)?!1:Un.test(t)?Ii[t]=!0:(ar[t]=!0,!1)}var De=!1;function dm(){var t=De;return De=!1,t}function Ll(t,n,a){if(SS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Ol(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function aa(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ti(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xS(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,u=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,u.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Gu(t){if(!t._valueTracker){var n=pm(t)?"checked":"value";t._valueTracker=xS(t,n,""+t[n])}}function mm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=pm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var MS=/[\n"\\]/g;function hi(t){return t.replace(MS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Vu(t,n,a,s,c,u,g,T){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ti(n)):t.value!==""+ti(n)&&(t.value=""+ti(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Xu(t,ti(t.value)):Xu(t,ti(n)):a!=null?Xu(t,ti(a)):s!=null&&t.removeAttribute("value"),c==null&&u!=null&&(t.defaultChecked=!!u),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ti(T):t.removeAttribute("name")}function _m(t,n,a,s,c,u,g,T){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Gu(t);return}a=a!=null?""+ti(a):"",n=n!=null?""+ti(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Gu(t)}function Xu(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function sr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ti(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function gm(t,n,a){if(n!=null&&(n=""+ti(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ti(a):""}function vm(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Rt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ti(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Gu(t)}function rr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var ES=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ym(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||ES.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Sm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",De=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(ym(t,c,s),De=!0)}else for(var u in n)n.hasOwnProperty(u)&&ym(t,u,n[u])}function ku(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var TS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(t){return bS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bi(){}var qu=null;function Yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var or=null,lr=null;function xm(t){var n=_e(t);if(n&&(t=n.stateNode)){var a=t[kt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Vu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[kt]||null;if(!c)throw Error(r(90));Vu(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&mm(s)}break t;case"textarea":gm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sr(t,!!a.multiple,n,!1)}}}var Wu=!1;function Mm(t,n,a){if(Wu)return t(n,a);Wu=!0;try{var s=t(n);return s}finally{if(Wu=!1,(or!==null||lr!==null)&&(Pc(),or&&(n=or,t=lr,lr=or=null,xm(n),t)))for(n=0;n<t.length;n++)xm(t[n])}}function yo(t,n){var a=t.stateNode;if(a===null)return null;var s=a[kt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(sa)try{var So={};Object.defineProperty(So,"passive",{get:function(){ju=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{ju=!1}var Da=null,Zu=null,zl=null;function Em(){if(zl)return zl;var t,n=Zu,a=n.length,s,c="value"in Da?Da.value:Da.textContent,u=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[u-s];s++);return zl=c.slice(t,1<s?1-s:void 0)}function Il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Bl(){return!0}function Tm(){return!1}function In(t){function n(a,s,c,u,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(u):u[T]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Bl:Tm,this.isPropagationStopped=Tm,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bl)},persist:function(){},isPersistent:Bl}),n}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=In(Na),xo=L({},Na,{view:0,detail:0}),AS=In(xo),Ku,Qu,Mo,Hl=L({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(Ku=t.screenX-Mo.screenX,Qu=t.screenY-Mo.screenY):Qu=Ku=0,Mo=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),bm=In(Hl),RS=L({},Hl,{dataTransfer:0}),CS=In(RS),wS=L({},xo,{relatedTarget:0}),Ju=In(wS),DS=L({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),NS=In(DS),US=L({},Na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LS=In(US),OS=L({},Na,{data:0}),Am=In(OS),PS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=IS[t])?!!n[t]:!1}function $u(){return BS}var FS=L({},xo,{key:function(t){if(t.key){var n=PS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$u,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),HS=In(FS),GS=L({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=In(GS),VS=L({},Na,{submitter:0}),XS=In(VS),kS=L({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$u}),qS=In(kS),YS=L({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),WS=In(YS),jS=L({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZS=In(jS),KS=L({},Na,{newState:0,oldState:0,source:0}),QS=In(KS),JS=[9,13,27,32],tf=sa&&"CompositionEvent"in window,Eo=null;sa&&"documentMode"in document&&(Eo=document.documentMode);var $S=sa&&"TextEvent"in window&&!Eo,Cm=sa&&(!tf||Eo&&8<Eo&&11>=Eo),wm=" ",Dm=!1;function Nm(t,n){switch(t){case"keyup":return JS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Um(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cr=!1;function tx(t,n){switch(t){case"compositionend":return Um(n);case"keypress":return n.which!==32?null:(Dm=!0,wm);case"textInput":return t=n.data,t===wm&&Dm?null:t;default:return null}}function ex(t,n){if(cr)return t==="compositionend"||!tf&&Nm(t,n)?(t=Em(),zl=Zu=Da=null,cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cm&&n.locale!=="ko"?null:n.data;default:return null}}var nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!nx[t.type]:n==="textarea"}function Om(t,n,a,s){or?lr?lr.push(s):lr=[s]:or=s,n=Gc(n,"onChange"),0<n.length&&(a=new Fl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var To=null,bo=null;function ix(t){x0(t,0)}function Gl(t){var n=mn(t);if(mm(n))return t}function Pm(t,n){if(t==="change")return n}var zm=!1;if(sa){var ef;if(sa){var nf="oninput"in document;if(!nf){var Im=document.createElement("div");Im.setAttribute("oninput","return;"),nf=typeof Im.oninput=="function"}ef=nf}else ef=!1;zm=ef&&(!document.documentMode||9<document.documentMode)}function Bm(){To&&(To.detachEvent("onpropertychange",Fm),bo=To=null)}function Fm(t){if(t.propertyName==="value"&&Gl(bo)){var n=[];Om(n,bo,t,Yu(t)),Mm(ix,n)}}function ax(t,n,a){t==="focusin"?(Bm(),To=n,bo=a,To.attachEvent("onpropertychange",Fm)):t==="focusout"&&Bm()}function sx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(bo)}function rx(t,n){if(t==="click")return Gl(n)}function ox(t,n){if(t==="input"||t==="change")return Gl(n)}function lx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:lx;function Ao(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ot.call(n,c)||!ei(t[c],n[c]))return!1}return!0}function af(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gm(t,n){var a=Hm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hm(a)}}function Vm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Vm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=af(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=af(t.document)}return n}function sf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var cx=sa&&"documentMode"in document&&11>=document.documentMode,ur=null,rf=null,Ro=null,of=!1;function km(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;of||ur==null||ur!==af(s)||(s=ur,"selectionStart"in s&&sf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ro&&Ao(Ro,s)||(Ro=s,s=Gc(rf,"onSelect"),0<s.length&&(n=new Fl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ur)))}function xs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var fr={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},lf={},qm={};sa&&(qm=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Ms(t){if(lf[t])return lf[t];if(!fr[t])return t;var n=fr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in qm)return lf[t]=n[a];return t}var Ym=Ms("animationend"),Wm=Ms("animationiteration"),jm=Ms("animationstart"),ux=Ms("transitionrun"),fx=Ms("transitionstart"),hx=Ms("transitioncancel"),Zm=Ms("transitionend"),Km=new Map,cf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cf.push("scrollEnd");function bi(t,n){Km.set(t,n),ln(n,[t])}var dx=0;function ra(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=wi.identifierPrefix;var a=dx++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Qm(t){if(t==null||typeof t=="string")return t;var n=null,a=Nr;if(a!==null)for(var s=0;s<a.length;s++){var c=t[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function oa(t,n){return t=Qm(t),n=Qm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],hr=0,uf=0;function Xl(){for(var t=hr,n=uf=hr=0;n<t;){var a=di[n];di[n++]=null;var s=di[n];di[n++]=null;var c=di[n];di[n++]=null;var u=di[n];if(di[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}u!==0&&Jm(a,c,u)}}function kl(t,n,a,s){di[hr++]=t,di[hr++]=n,di[hr++]=a,di[hr++]=s,uf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function ff(t,n,a,s){return kl(t,n,a,s),ql(t)}function Es(t,n){return kl(t,null,null,n),ql(t)}function Jm(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,u=t.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(c=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,c&&n!==null&&(c=31-Nn(a),t=u.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),u):null}function ql(t){if(50<Zo)throw Zo=0,Oc=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var dr={};function px(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,s){return new px(t,n,a,s)}function hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function $m(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Yl(t,n,a,s,c,u){var g=0;if(s=t,typeof s=="function")hf(s)&&(g=1);else if(typeof s=="string")g=VM(t,a,Ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Gt:return t=Xn(31,a,n,c),t.elementType=Gt,t.lanes=u,t;case V:return Ts(a.children,c,u,n);case at:g=8,c|=24;break;case ct:return t=Xn(12,a,n,c|2),t.elementType=ct,t.lanes=u,t;case st:return t=Xn(13,a,n,c),t.elementType=st,t.lanes=u,t;case K:return t=Xn(19,a,n,c),t.elementType=K,t.lanes=u,t;case re:case I:return t=c|32,t=Xn(30,a,n,t),t.elementType=I,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case lt:g=10;break t;case gt:g=9;break t;case j:g=11;break t;case vt:g=14;break t;case St:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Xn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=u,n}function Ts(t,n,a,s){return t=Xn(7,t,s,n),t.lanes=a,t}function df(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function t_(t){var n=Xn(18,null,null,0);return n.stateNode=t,n}function pf(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var e_=new WeakMap;function pi(t,n){if(typeof t=="object"&&t!==null){var a=e_.get(t);return a!==void 0?a:(n={value:t,source:n,stack:bt(n)},e_.set(t,n),n)}return{value:t,source:n,stack:bt(n)}}var pr=[],mr=0,Wl=null,Co=0,mi=[],_i=0,Ua=null,Fi=1,Hi="";function ca(t,n){pr[mr++]=Co,pr[mr++]=Wl,Wl=t,Co=n}function n_(t,n,a){mi[_i++]=Fi,mi[_i++]=Hi,mi[_i++]=Ua,Ua=t;var s=Fi;t=Hi;var c=32-Nn(s)-1;s&=~(1<<c),a+=1;var u=32-Nn(n)+c;if(30<u){var g=c-c%5;u=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Fi=1<<32-Nn(n)+c|a<<c|s,Hi=u+t}else Fi=1<<u|a<<c|s,Hi=t}function jl(t){t.return!==null&&(ca(t,1),n_(t,1,0))}function mf(t){for(;t===Wl;)Wl=pr[--mr],pr[mr]=null,Co=pr[--mr],pr[mr]=null;for(;t===Ua;)Ua=mi[--_i],mi[_i]=null,Hi=mi[--_i],mi[_i]=null,Fi=mi[--_i],mi[_i]=null}function i_(t,n){mi[_i++]=Fi,mi[_i++]=Hi,mi[_i++]=Ua,Fi=n.id,Hi=n.overflow,Ua=t}var Sn=null,Ze=null,ge=!1,La=null,gi=!1,_f=Error(r(519));function Oa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(pi(n,t)),_f}function a_(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[wt]=t,n[kt]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Qo.length;a++)xe(Qo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),_m(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),vm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||b0(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||Oa(t,!0)}function Zl(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Sn=Sn.return}}function _r(t){if(t!==Sn)return!1;if(!ge)return Zl(t),ge=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Yh(t.type,t.memoizedProps)),a=!a),a&&Ze&&Oa(t),Zl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=k0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ze=k0(t)}else n===27?(n=Ze,Ka(t.type)?(t=ed,ed=null,Ze=t):Ze=n):Ze=Sn?yi(t.stateNode.nextSibling):null;return!0}function bs(){Ze=Sn=null,ge=!1}function gf(){var t=La;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),La=null),t}function wo(t){La===null?La=[t]:La.push(t)}var vf=Qt(null),As=null,ua=null;function Pa(t,n,a){ie(vf,n._currentValue),n._currentValue=a}function fa(t){t._currentValue=vf.current,Lt(vf)}function Kl(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function yf(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var u=c.dependencies;if(u!==null){var g=c.child;u=u.firstContext;t:for(;u!==null;){var T=u;u=c;for(var U=0;U<n.length;U++)if(T.context===n[U]){u.lanes|=a,T=u.alternate,T!==null&&(T.lanes|=a),Kl(u.return,a,t),s||(g=null);break t}u=T.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,u=g.alternate,u!==null&&(u.lanes|=a),Kl(g,a,t),g=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,g=c.alternate,g!==null&&(g.lanes|=a),Kl(c.return,a,t),g=c.child,g=g!==null?g.sibling:null):g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Rs(t,n,a,s){t=null;for(var c=n,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=c.type;ei(c.pendingProps.value,g.value)||(t!==null?t.push(T):t=[T])}}else if(c===We.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Gr):t=[Gr])}c=c.return}return t!==null&&yf(n,t,a,s),n.flags|=262144,t!==null}function Ql(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cs(t){As=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return s_(As,t)}function Jl(t,n){return As===null&&Cs(t),s_(t,n)}function s_(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ua===null){if(t===null)throw Error(r(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return a}var mx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},_x=o.unstable_scheduleCallback,gx=o.unstable_NormalPriority,cn={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sf(){return{controller:new mx,data:new Map,refCount:0}}function Do(t){t.refCount--,t.refCount===0&&_x(gx,function(){t.controller.abort()})}function r_(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var No=null;function vx(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Uo=null,xf=0,ws=0,gr=null;function yx(t,n){if(Uo===null){var a=Uo=[];xf=0,ws=Ih(),gr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return xf++,n.then(o_,o_),n}function o_(){if(--xf===0&&(No=null,Uo!==null)){gr!==null&&(gr.status="fulfilled");var t=Uo;Uo=null,ws=0,gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Sx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var l_=Et.S;Et.S=function(t,n){if(t0=G(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yx(t,n),No!==null)for(var a=Pr;a!==null;)r_(a,No),a=a.next;if(a=t.types,a!==null){for(var s=Pr;s!==null;)r_(s,a),s=s.next;if(ws!==0){s=No,s===null&&(s=No=[]);for(var c=0;c<a.length;c++){var u=a[c];s.indexOf(u)===-1&&s.push(u)}}}l_!==null&&l_(t,n)};var Ds=Qt(null);function Mf(){var t=Ds.current;return t!==null?t:Ye.pooledCache}function $l(t,n){n===null?ie(Ds,Ds.current):ie(Ds,n.pool)}function c_(){var t=Mf();return t===null?null:{parent:cn._currentValue,pool:t}}var vr=Error(r(460)),Ef=Error(r(474)),tc=Error(r(542)),ec={then:function(){}};function u_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function f_(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,d_(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,d_(t),t}throw Us=n,vr}}function Ns(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Us=a,vr):a}}var Us=null;function h_(){if(Us===null)throw Error(r(459));var t=Us;return Us=null,t}function d_(t){if(t===vr||t===tc)throw Error(r(483))}var yr=null,Lo=0;function nc(t){var n=Lo;return Lo+=1,yr===null&&(yr=[]),f_(yr,t,n)}function za(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ic(t,n){throw n.$$typeof===q?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function p_(t){function n(Y,H){if(t){var J=Y.deletions;J===null?(Y.deletions=[H],Y.flags|=16):J.push(H)}}function a(Y,H){if(!t)return null;for(;H!==null;)n(Y,H),H=H.sibling;return null}function s(Y){for(var H=new Map;Y!==null;)Y.key===null?H.set(Y.index,Y):H.set(Y.key,Y),Y=Y.sibling;return H}function c(Y,H){return Y=la(Y,H),Y.index=0,Y.sibling=null,Y}function u(Y,H,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<H?(Y.flags|=2,H):J):(Y.flags|=134217730,H)):(Y.flags|=1048576,H)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function T(Y,H,J,ht){return H===null||H.tag!==6?(H=df(J,Y.mode,ht),H.return=Y,H):(H=c(H,J),H.return=Y,H)}function U(Y,H,J,ht){var Ht=J.type;return Ht===V?(Y=nt(Y,H,J.props.children,ht,J.key),za(Y,J),Y):H!==null&&(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===St&&Ns(Ht)===H.type)?(H=c(H,J.props),za(H,J),H.return=Y,H):(H=Yl(J.type,J.key,J.props,null,Y.mode,ht),za(H,J),H.return=Y,H)}function W(Y,H,J,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=pf(J,Y.mode,ht),H.return=Y,H):(H=c(H,J.children||[]),H.return=Y,H)}function nt(Y,H,J,ht,Ht){return H===null||H.tag!==7?(H=Ts(J,Y.mode,ht,Ht),H.return=Y,H):(H=c(H,J),H.return=Y,H)}function pt(Y,H,J){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=df(""+H,Y.mode,J),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return J=Yl(H.type,H.key,H.props,null,Y.mode,J),za(J,H),J.return=Y,J;case C:return H=pf(H,Y.mode,J),H.return=Y,H;case St:return H=Ns(H),pt(Y,H,J)}if(Rt(H)||it(H))return H=Ts(H,Y.mode,J,null),H.return=Y,H;if(typeof H.then=="function")return pt(Y,nc(H),J);if(H.$$typeof===lt)return pt(Y,Jl(Y,H),J);ic(Y,H)}return null}function X(Y,H,J,ht){var Ht=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:T(Y,H,""+J,ht);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Ht?U(Y,H,J,ht):null;case C:return J.key===Ht?W(Y,H,J,ht):null;case St:return J=Ns(J),X(Y,H,J,ht)}if(Rt(J)||it(J))return Ht!==null?null:nt(Y,H,J,ht,null);if(typeof J.then=="function")return X(Y,H,nc(J),ht);if(J.$$typeof===lt)return X(Y,H,Jl(Y,J),ht);ic(Y,J)}return null}function tt(Y,H,J,ht,Ht){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get(J)||null,T(H,Y,""+ht,Ht);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case D:return Y=Y.get(ht.key===null?J:ht.key)||null,U(H,Y,ht,Ht);case C:return Y=Y.get(ht.key===null?J:ht.key)||null,W(H,Y,ht,Ht);case St:return ht=Ns(ht),tt(Y,H,J,ht,Ht)}if(Rt(ht)||it(ht))return Y=Y.get(J)||null,nt(H,Y,ht,Ht,null);if(typeof ht.then=="function")return tt(Y,H,J,nc(ht),Ht);if(ht.$$typeof===lt)return tt(Y,H,J,Jl(H,ht),Ht);ic(H,ht)}return null}function Nt(Y,H,J,ht){for(var Ht=null,Te=null,Jt=H,ae=H=0,hn=null;Jt!==null&&ae<J.length;ae++){Jt.index>ae?(hn=Jt,Jt=null):hn=Jt.sibling;var Ae=X(Y,Jt,J[ae],ht);if(Ae===null){Jt===null&&(Jt=hn);break}t&&Jt&&Ae.alternate===null&&n(Y,Jt),H=u(Ae,H,ae),Te===null?Ht=Ae:Te.sibling=Ae,Te=Ae,Jt=hn}if(ae===J.length)return a(Y,Jt),ge&&ca(Y,ae),Ht;if(Jt===null){for(;ae<J.length;ae++)Jt=pt(Y,J[ae],ht),Jt!==null&&(H=u(Jt,H,ae),Te===null?Ht=Jt:Te.sibling=Jt,Te=Jt);return ge&&ca(Y,ae),Ht}for(Jt=s(Jt);ae<J.length;ae++)hn=tt(Jt,Y,ae,J[ae],ht),hn!==null&&(t&&(Ae=hn.alternate,Ae!==null&&Jt.delete(Ae.key===null?ae:Ae.key)),H=u(hn,H,ae),Te===null?Ht=hn:Te.sibling=hn,Te=hn);return t&&Jt.forEach(function(es){return n(Y,es)}),ge&&ca(Y,ae),Ht}function qt(Y,H,J,ht){if(J==null)throw Error(r(151));for(var Ht=null,Te=null,Jt=H,ae=H=0,hn=null,Ae=J.next();Jt!==null&&!Ae.done;ae++,Ae=J.next()){Jt.index>ae?(hn=Jt,Jt=null):hn=Jt.sibling;var es=X(Y,Jt,Ae.value,ht);if(es===null){Jt===null&&(Jt=hn);break}t&&Jt&&es.alternate===null&&n(Y,Jt),H=u(es,H,ae),Te===null?Ht=es:Te.sibling=es,Te=es,Jt=hn}if(Ae.done)return a(Y,Jt),ge&&ca(Y,ae),Ht;if(Jt===null){for(;!Ae.done;ae++,Ae=J.next())Ae=pt(Y,Ae.value,ht),Ae!==null&&(H=u(Ae,H,ae),Te===null?Ht=Ae:Te.sibling=Ae,Te=Ae);return ge&&ca(Y,ae),Ht}for(Jt=s(Jt);!Ae.done;ae++,Ae=J.next())Ae=tt(Jt,Y,ae,Ae.value,ht),Ae!==null&&(t&&(hn=Ae.alternate,hn!==null&&Jt.delete(hn.key===null?ae:hn.key)),H=u(Ae,H,ae),Te===null?Ht=Ae:Te.sibling=Ae,Te=Ae);return t&&Jt.forEach(function(tE){return n(Y,tE)}),ge&&ca(Y,ae),Ht}function de(Y,H,J,ht){if(typeof J=="object"&&J!==null&&J.type===V&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:t:{for(var Ht=J.key;H!==null;){if(H.key===Ht){if(Ht=J.type,Ht===V){if(H.tag===7){a(Y,H.sibling),ht=c(H,J.props.children),za(ht,J),ht.return=Y,Y=ht;break t}}else if(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===St&&Ns(Ht)===H.type){a(Y,H.sibling),ht=c(H,J.props),za(ht,J),ht.return=Y,Y=ht;break t}a(Y,H);break}else n(Y,H);H=H.sibling}J.type===V?(ht=Ts(J.props.children,Y.mode,ht,J.key),za(ht,J),ht.return=Y,Y=ht):(ht=Yl(J.type,J.key,J.props,null,Y.mode,ht),za(ht,J),ht.return=Y,Y=ht)}return g(Y);case C:t:{for(Ht=J.key;H!==null;){if(H.key===Ht)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a(Y,H.sibling),ht=c(H,J.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,H);break}else n(Y,H);H=H.sibling}ht=pf(J,Y.mode,ht),ht.return=Y,Y=ht}return g(Y);case St:return J=Ns(J),de(Y,H,J,ht)}if(Rt(J))return Nt(Y,H,J,ht);if(it(J)){if(Ht=it(J),typeof Ht!="function")throw Error(r(150));return J=Ht.call(J),qt(Y,H,J,ht)}if(typeof J.then=="function")return de(Y,H,nc(J),ht);if(J.$$typeof===lt)return de(Y,H,Jl(Y,J),ht);ic(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,H!==null&&H.tag===6?(a(Y,H.sibling),ht=c(H,J),ht.return=Y,Y=ht):(a(Y,H),ht=df(J,Y.mode,ht),ht.return=Y,Y=ht),g(Y)):a(Y,H)}return function(Y,H,J,ht){try{Lo=0;var Ht=de(Y,H,J,ht);return yr=null,Ht}catch(Jt){if(Jt===vr||Jt===tc)throw Jt;var Te=Xn(29,Jt,null,Y.mode);return Te.lanes=ht,Te.return=Y,Te}finally{}}}var Ls=p_(!0),m_=p_(!1),Ia=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Oe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ql(t),Jm(t,null,a),n}return kl(t,s,n,a),ql(t)}function Oo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Z(t,a)}}function Af(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=g:u=u.next=g,a=a.next}while(a!==null);u===null?c=u=n:u=u.next=n}else c=u=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Rf=!1;function Po(){if(Rf){var t=gr;if(t!==null)throw t}}function zo(t,n,a,s){Rf=!1;var c=t.updateQueue;Ia=!1;var u=c.firstBaseUpdate,g=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var U=T,W=U.next;U.next=null,g===null?u=W:g.next=W,g=U;var nt=t.alternate;nt!==null&&(nt=nt.updateQueue,T=nt.lastBaseUpdate,T!==g&&(T===null?nt.firstBaseUpdate=W:T.next=W,nt.lastBaseUpdate=U))}if(u!==null){var pt=c.baseState;g=0,nt=W=U=null,T=u;do{var X=T.lane&-536870913,tt=X!==T.lane;if(tt?(Ee&X)===X:(s&X)===X){X!==0&&X===ws&&(Rf=!0),nt!==null&&(nt=nt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Nt=t,qt=T;X=n;var de=a;switch(qt.tag){case 1:if(Nt=qt.payload,typeof Nt=="function"){pt=Nt.call(de,pt,X);break t}pt=Nt;break t;case 3:Nt.flags=Nt.flags&-65537|128;case 0:if(Nt=qt.payload,X=typeof Nt=="function"?Nt.call(de,pt,X):Nt,X==null)break t;pt=L({},pt,X);break t;case 2:Ia=!0}}X=T.callback,X!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=c.callbacks,tt===null?c.callbacks=[X]:tt.push(X))}else tt={lane:X,tag:T.tag,payload:T.payload,callback:T.callback,next:null},nt===null?(W=nt=tt,U=pt):nt=nt.next=tt,g|=X;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;tt=T,T=tt.next,tt.next=null,c.lastBaseUpdate=tt,c.shared.pending=null}}while(!0);nt===null&&(U=pt),c.baseState=U,c.firstBaseUpdate=W,c.lastBaseUpdate=nt,u===null&&(c.shared.lanes=0),Ya|=g,t.lanes=g,t.memoizedState=pt}}function __(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function g_(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)__(a[t],n)}var Ha=Qt(null),ac=Qt(0);function v_(t,n){t=_a,ie(ac,t),ie(Ha,n),_a=t|n.baseLanes}function Cf(){ie(ac,_a),ie(Ha,Ha.current)}function wf(){_a=ac.current,Lt(Ha),Lt(ac)}var bn=Qt(null),Ln=null;function Ga(t){var n=t.alternate;ie(An,An.current&1),ie(bn,t),Ln===null&&(n===null||Ha.current!==null||n.memoizedState!==null)&&(Ln=t)}function Df(t){ie(An,An.current),ie(bn,t),Ln===null&&(Ln=t)}function y_(t){t.tag===22?(ie(An,An.current),ie(bn,t),Ln===null&&(Ln=t)):Va()}function Va(){ie(An,An.current),ie(bn,bn.current)}function ni(t){Lt(bn),Ln===t&&(Ln=null),Lt(An)}var An=Qt(0);function Io(t,n){ie(bn,bn.current),ie(An,n)}function Nf(t){Lt(An),Lt(bn),Ln===t&&(Ln=null)}function sc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$h(a)||td(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,he=null,Ve=null,un=null,rc=!1,Sr=!1,Os=!1,oc=0,Bo=0,xr=null,xx=0;function an(){throw Error(r(321))}function Uf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function Lf(t,n,a,s,c,u){return ha=u,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Et.H=t===null||t.memoizedState===null?ng:ig,Os=!1,u=a(s,c),Os=!1,Sr&&(u=x_(n,a,s,c)),S_(t),u}function S_(t){Et.H=pc;var n=Ve!==null&&Ve.next!==null;if(ha=0,un=Ve=he=null,rc=!1,Bo=0,xr=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&Ql(t)&&(fn=!0))}function x_(t,n,a,s){he=t;var c=0;do{if(Sr&&(xr=null),Bo=0,Sr=!1,25<=c)throw Error(r(301));if(c+=1,un=Ve=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Et.H=wx,u=n(a,s)}while(Sr);return u}function Mx(){var t=Et.H,n=t.useState()[0];return n=typeof n.then=="function"?Fo(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(he.flags|=1024),n}function Of(){var t=oc!==0;return oc=0,t}function Pf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zf(t){if(rc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rc=!1}ha=0,un=Ve=he=null,Sr=!1,Bo=oc=0,xr=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?he.memoizedState=un=t:un=un.next=t,un}function on(){if(Ve===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=un===null?he.memoizedState:un.next;if(n!==null)un=n,Ve=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},un===null?he.memoizedState=un=t:un=un.next=t}return un}function lc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(t){var n=Bo;return Bo+=1,xr===null&&(xr=[]),t=f_(xr,t,n),n=he,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,Et.H=n===null||n.memoizedState===null?ng:ig),t}function cc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Fo(t);if(t.$$typeof===ut)return;if(t.$$typeof===lt)return Tn(t)}throw Error(r(438,String(t)))}function If(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=lc(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=be;return n.index++,a}function da(t,n){return typeof n=="function"?n(t):n}function uc(t){var n=on();return Bf(n,Ve,t)}function Bf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,u=s.pending;if(u!==null){if(c!==null){var g=c.next;c.next=u.next,u.next=g}n.baseQueue=c=u,s.pending=null}if(u=t.baseState,c===null)t.memoizedState=u;else{n=c.next;var T=g=null,U=null,W=n,nt=!1;do{var pt=W.lane&-536870913;if(pt!==W.lane?(Ee&pt)===pt:(ha&pt)===pt){var X=W.revertLane;if(X===0)U!==null&&(U=U.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),pt===ws&&(nt=!0);else if((ha&X)===X){W=W.next,X===ws&&(nt=!0);continue}else pt={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},U===null?(T=U=pt,g=u):U=U.next=pt,he.lanes|=X,Ya|=X;pt=W.action,Os&&a(u,pt),u=W.hasEagerState?W.eagerState:a(u,pt)}else X={lane:pt,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},U===null?(T=U=X,g=u):U=U.next=X,he.lanes|=pt,Ya|=pt;W=W.next}while(W!==null&&W!==n);if(U===null?g=u:U.next=T,!ei(u,t.memoizedState)&&(fn=!0,nt&&(a=gr,a!==null)))throw a;t.memoizedState=u,t.baseState=g,t.baseQueue=U,s.lastRenderedState=u}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ff(t){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,u=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do u=t(u,g.action),g=g.next;while(g!==c);ei(u,n.memoizedState)||(fn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,s]}function M_(t,n,a){var s=he,c=on(),u=ge;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!ei((Ve||c).memoizedState,a);if(g&&(c.memoizedState=a,fn=!0),c=c.queue,Vf(b_.bind(null,s,c,t),[t]),t=c.getSnapshot!==n||g||un!==null&&(un.memoizedState.tag&1)!==0,Mr(t?9:8,{destroy:void 0},T_.bind(null,s,c,a,n),null),t){if(s.flags|=2048,Ye===null)throw Error(r(349));u||(ha&127)!==0||E_(s,n,a)}return a}function E_(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=lc(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function T_(t,n,a,s){n.value=a,n.getSnapshot=s,A_(n)&&R_(t)}function b_(t,n,a){return a(function(){A_(n)&&R_(t)})}function A_(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function R_(t){var n=Es(t,2);n!==null&&Wn(n,t,2)}function Hf(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),Os){pn(!0);try{a()}finally{pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function C_(t,n,a,s){return t.baseState=a,Bf(t,Ve,typeof s=="function"?s:da)}function Ex(t,n,a,s,c){if(dc(t))throw Error(r(485));if(t=n.action,t!==null){var u={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){u.listeners.push(g)}};Et.T!==null?a(!0):u.isTransition=!1,s(u),a=n.pending,a===null?(u.next=n.pending=u,w_(n,u)):(u.next=a.next,n.pending=a.next=u)}}function w_(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var u=Et.T,g={};g.types=u!==null?u.types:null,Et.T=g;try{var T=a(c,s),U=Et.S;U!==null&&U(g,T),D_(t,n,T)}catch(W){Gf(t,n,W)}finally{u!==null&&g.types!==null&&(u.types=g.types),Et.T=u}}else try{u=a(c,s),D_(t,n,u)}catch(W){Gf(t,n,W)}}function D_(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){N_(t,n,s)},function(s){return Gf(t,n,s)}):N_(t,n,a)}function N_(t,n,a){n.status="fulfilled",n.value=a,U_(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,w_(t,a)))}function Gf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,U_(n),n=n.next;while(n!==s)}t.action=null}function U_(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function L_(t,n){return n}function O_(t,n){if(ge){var a=Ye.formState;if(a!==null){t:{var s=he;if(ge){if(Ze){e:{for(var c=Ze,u=gi;c.nodeType!==8;){if(!u){c=null;break e}if(c=yi(c.nextSibling),c===null){c=null;break e}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Ze=yi(c.nextSibling),s=c.data==="F!";break t}}Oa(s)}s=!1}s&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:L_,lastRenderedState:n},a.queue=s,a=$_.bind(null,he,s),s.dispatch=a,s=Hf(!1),u=Wf.bind(null,he,!1,s.queue),s=Bn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Ex.bind(null,he,c,u,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function P_(t){var n=on();return z_(n,Ve,t)}function z_(t,n,a){if(n=Bf(t,n,L_)[0],t=uc(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Fo(n)}catch(g){throw g===vr?tc:g}else s=n;n=on();var c=n.queue,u=c.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Mr(9,{destroy:void 0},Tx.bind(null,c,a),null)),[s,u,t]}function Tx(t,n){t.action=n}function I_(t){var n=on(),a=Ve;if(a!==null)return z_(n,a,t);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Mr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=lc(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function B_(){return on().memoizedState}function fc(t,n,a,s){var c=Bn();he.flags|=t,c.memoizedState=Mr(1|n,{destroy:void 0},a,s===void 0?null:s)}function hc(t,n,a,s){var c=on();s=s===void 0?null:s;var u=c.memoizedState.inst;Ve!==null&&s!==null&&Uf(s,Ve.memoizedState.deps)?c.memoizedState=Mr(n,u,a,s):(he.flags|=t,c.memoizedState=Mr(1|n,u,a,s))}function F_(t,n){fc(8390656,8,t,n)}function Vf(t,n){hc(2048,8,t,n)}function bx(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=lc(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function H_(t){var n=on().memoizedState;return bx({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function G_(t,n){return hc(4,2,t,n)}function V_(t,n){return hc(4,4,t,n)}function X_(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function k_(t,n,a){a=a!=null?a.concat([t]):null,hc(4,4,X_.bind(null,n,t),a)}function Xf(){}function q_(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Uf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Y_(t,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Uf(n,s[1]))return s[0];if(s=t(),Os){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s}function kf(t,n,a){return a===void 0||(ha&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=n0(),he.lanes|=t,Ya|=t,a)}function W_(t,n,a,s){return ei(a,n)?a:Ha.current!==null?(t=kf(t,a,s),ei(t,n)||(fn=!0),t):(ha&106)===0||(ha&1073741824)!==0&&(Ee&261930)===0?(fn=!0,t.memoizedState=a):(t=n0(),he.lanes|=t,Ya|=t,n)}function j_(t,n,a,s,c){var u=Yt.p;Yt.p=u!==0&&8>u?u:8;var g=Et.T,T={};T.types=g!==null?g.types:null,Et.T=T,Wf(t,!1,n,a);try{var U=c(),W=Et.S;if(W!==null&&W(T,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var nt=Sx(U,s);Ho(t,n,nt,ri(t))}else Ho(t,n,s,ri(t))}catch(pt){Ho(t,n,{then:function(){},status:"rejected",reason:pt},ri())}finally{Yt.p=u,g!==null&&T.types!==null&&(g.types=T.types),Et.T=g}}function Ax(){}function qf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Z_(t).queue;j_(t,c,n,z,a===null?Ax:function(){return K_(t),a(s)})}function Z_(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function K_(t){var n=Z_(t);n.next===null&&(n=t.alternate.memoizedState),Ho(t,n.next.queue,{},ri())}function Yf(){return Tn(Gr)}function Q_(){return on().memoizedState}function J_(){return on().memoizedState}function Rx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=Ba(a);var s=Fa(n,t,a);s!==null&&(Wn(s,n,a),Oo(s,n,a)),n={cache:Sf()},t.payload=n;return}n=n.return}}function Cx(t,n,a){var s=ri();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},dc(t)?tg(n,a):(a=ff(t,n,a,s),a!==null&&(Wn(a,t,s),eg(a,n,s)))}function $_(t,n,a){var s=ri();Ho(t,n,a,s)}function Ho(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(dc(t))tg(n,c);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var g=n.lastRenderedState,T=u(g,a);if(c.hasEagerState=!0,c.eagerState=T,ei(T,g))return kl(t,n,c,0),Ye===null&&Xl(),!1}catch{}finally{}if(a=ff(t,n,c,s),a!==null)return Wn(a,t,s),eg(a,n,s),!0}return!1}function Wf(t,n,a,s){if(s={lane:2,revertLane:Ih(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},dc(t)){if(n)throw Error(r(479))}else n=ff(t,a,s,2),n!==null&&Wn(n,t,2)}function dc(t){var n=t.alternate;return t===he||n!==null&&n===he}function tg(t,n){Sr=rc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function eg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Z(t,a)}}var pc={readContext:Tn,use:cc,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},ng={readContext:Tn,use:cc,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:F_,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,fc(4194308,4,X_.bind(null,n,t),a)},useLayoutEffect:function(t,n){return fc(4194308,4,t,n)},useInsertionEffect:function(t,n){fc(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var s=t();if(Os){pn(!0);try{t()}finally{pn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Bn();if(a!==void 0){var c=a(n);if(Os){pn(!0);try{a(n)}finally{pn(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Cx.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=Hf(t);var n=t.queue,a=$_.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Xf,useDeferredValue:function(t,n){var a=Bn();return kf(a,t,n)},useTransition:function(){var t=Hf(!1);return t=j_.bind(null,he,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,c=Bn();if(ge){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));(Ee&127)!==0||E_(s,n,a)}c.memoizedState=a;var u={value:a,getSnapshot:n};return c.queue=u,F_(b_.bind(null,s,u,t),[t]),s.flags|=2048,Mr(9,{destroy:void 0},T_.bind(null,s,u,a,n),null),a},useId:function(){var t=Bn(),n=Ye.identifierPrefix;if(ge){var a=Hi,s=Fi;a=(s&~(1<<32-Nn(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=oc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=xx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Yf,useFormState:O_,useActionState:O_,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wf.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:If,useCacheRefresh:function(){return Bn().memoizedState=Rx.bind(null,he)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ig={readContext:Tn,use:cc,useCallback:q_,useContext:Tn,useEffect:Vf,useImperativeHandle:k_,useInsertionEffect:G_,useLayoutEffect:V_,useMemo:Y_,useReducer:uc,useRef:B_,useState:function(){return uc(da)},useDebugValue:Xf,useDeferredValue:function(t,n){var a=on();return W_(a,Ve.memoizedState,t,n)},useTransition:function(){var t=uc(da)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:M_,useId:Q_,useHostTransitionStatus:Yf,useFormState:P_,useActionState:P_,useOptimistic:function(t,n){var a=on();return C_(a,Ve,t,n)},useMemoCache:If,useCacheRefresh:J_,useEffectEvent:H_},wx={readContext:Tn,use:cc,useCallback:q_,useContext:Tn,useEffect:Vf,useImperativeHandle:k_,useInsertionEffect:G_,useLayoutEffect:V_,useMemo:Y_,useReducer:Ff,useRef:B_,useState:function(){return Ff(da)},useDebugValue:Xf,useDeferredValue:function(t,n){var a=on();return Ve===null?kf(a,t,n):W_(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Ff(da)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Fo(t),n]},useSyncExternalStore:M_,useId:Q_,useHostTransitionStatus:Yf,useFormState:I_,useActionState:I_,useOptimistic:function(t,n){var a=on();return Ve!==null?C_(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:If,useCacheRefresh:J_,useEffectEvent:H_};function jf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:L({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ri(),c=Ba(s);c.payload=n,a!=null&&(c.callback=a),n=Fa(t,c,s),n!==null&&(Wn(n,t,s),Oo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ri(),c=Ba(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Fa(t,c,s),n!==null&&(Wn(n,t,s),Oo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),s=Ba(a);s.tag=2,n!=null&&(s.callback=n),n=Fa(t,s,a),n!==null&&(Wn(n,t,a),Oo(n,t,a))}};function ag(t,n,a,s,c,u,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,u,g):n.prototype&&n.prototype.isPureReactComponent?!Ao(a,s)||!Ao(c,u):!0}function sg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Zf.enqueueReplaceState(n,n.state,null)}function Ps(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=L({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function rg(t){Vl(t)}function og(t){console.error(t)}function lg(t){Vl(t)}function mc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function cg(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Kf(t,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){mc(t,n)},a}function ug(t){return t=Ba(t),t.tag=3,t}function fg(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=s.value;t.payload=function(){return c(u)},t.callback=function(){cg(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){cg(n,a,s),typeof c!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Dx(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Rs(n,a,c,!0),a=bn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ln===null?zc():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ec?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Oh(t,s,c)),!1;case 22:return a.flags|=65536,s===ec?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Oh(t,s,c)),!1}throw Error(r(435,a.tag))}return Oh(t,s,c),zc(),!1}if(ge)return n=bn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==_f&&(t=Error(r(422),{cause:s}),wo(pi(t,a)))):(s!==_f&&(n=Error(r(423),{cause:s}),wo(pi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=pi(s,a),c=Kf(t.stateNode,s,c),Af(t,c),sn!==4&&(sn=2)),!1;var u=Error(r(520),{cause:s});if(u=pi(u,a),jo===null?jo=[u]:jo.push(u),sn!==4&&(sn=2),n===null)return!0;s=pi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Kf(a.stateNode,s,t),Af(a,t),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Wa===null||!Wa.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=ug(c),fg(c,t,a,s),Af(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Qf=Error(r(461)),fn=!1;function _n(t,n,a,s){n.child=t===null?m_(n,null,a,s):Ls(n,t.child,a,s)}function hg(t,n,a,s,c){a=a.render;var u=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return Cs(n),s=Lf(t,n,a,g,u,c),T=Of(),t!==null&&!fn?(Pf(t,n,c),pa(t,n,c)):(ge&&T&&jl(n),n.flags|=1,_n(t,n,s,c),n.child)}function dg(t,n,a,s,c){if(t===null){var u=a.type;return typeof u=="function"&&!hf(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,pg(t,n,u,s,c)):(t=Yl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!sh(t,c)){var g=u.memoizedProps;if(a=a.compare,a=a!==null?a:Ao,a(g,s)&&t.ref===n.ref)return pa(t,n,c)}return n.flags|=1,t=la(u,s),t.ref=n.ref,t.return=n,n.child=t}function pg(t,n,a,s,c){if(t!==null){var u=t.memoizedProps;if(Ao(u,s)&&t.ref===n.ref)if(fn=!1,n.pendingProps=s=u,sh(t,c))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,pa(t,n,c)}return Jf(t,n,a,s,c)}function mg(t,n,a,s){var c=s.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~u}else s=0,n.child=null;return _g(t,n,u,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&$l(n,u!==null?u.cachePool:null),u!==null?v_(n,u):Cf(),y_(n);else return s=n.lanes=536870912,_g(t,n,u!==null?u.baseLanes|a:a,a,s)}else u!==null?($l(n,u.cachePool),v_(n,u),Va(),n.memoizedState=null):(t!==null&&$l(n,null),Cf(),Va());return _n(t,n,c,a),n.child}function Go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _g(t,n,a,s,c){var u=Mf();return u=u===null?null:{parent:cn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&$l(n,null),Cf(),y_(n),t!==null&&Rs(t,n,s,!0),n.childLanes=c,null}function _c(t,n){return n=gc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function gg(t,n,a){return Ls(n,t.child,null,a),t=_c(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function Nx(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ge){if(s.mode==="hidden")return t=_c(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Go(null,t);if(Df(n),(t=Ze)?(t=X0(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=t_(t),a.return=n,n.child=a,Sn=n,Ze=null)):t=null,t===null)throw Oa(n);return n.lanes=536870912,null}return _c(n,s)}var u=t.memoizedState;if(u!==null){var g=u.dehydrated;if(Df(n),c)if(n.flags&256)n.flags&=-257,n=gg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||Rs(t,n,a,!1),c=(a&t.childLanes)!==0,fn||c){if(Ha.current===null){if(s=Ye,s!==null&&(g=rt(s,a),g!==0&&g!==u.retryLane))throw u.retryLane=g,Es(t,g),Wn(s,t,g),Qf;zc()}n=gg(t,n,a)}else t=u.treeContext,Ze=yi(g.nextSibling),Sn=n,ge=!0,La=null,gi=!1,t!==null&&i_(n,t),n=_c(n,s),n.flags|=134221824;return n}return t=la(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Er(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Jf(t,n,a,s,c){return Cs(n),a=Lf(t,n,a,s,void 0,c),s=Of(),t!==null&&!fn?(Pf(t,n,c),pa(t,n,c)):(ge&&s&&jl(n),n.flags|=1,_n(t,n,a,c),n.child)}function vg(t,n,a,s,c,u){return Cs(n),n.updateQueue=null,a=x_(n,s,a,c),S_(t),s=Of(),t!==null&&!fn?(Pf(t,n,u),pa(t,n,u)):(ge&&s&&jl(n),n.flags|=1,_n(t,n,a,u),n.child)}function yg(t,n,a,s,c){if(Cs(n),n.stateNode===null){var u=dr,g=a.contextType;typeof g=="object"&&g!==null&&(u=Tn(g)),u=new a(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Zf,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},Tf(n),g=a.contextType,u.context=typeof g=="object"&&g!==null?Tn(g):dr,u.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(jf(n,a,g,s),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(g=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),g!==u.state&&Zf.enqueueReplaceState(u,u.state,null),zo(n,s,u,c),Po(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){u=n.stateNode;var T=n.memoizedProps,U=Ps(a,T);u.props=U;var W=u.context,nt=a.contextType;g=dr,typeof nt=="object"&&nt!==null&&(g=Tn(nt));var pt=a.getDerivedStateFromProps;nt=typeof pt=="function"||typeof u.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,nt||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(T||W!==g)&&sg(n,u,s,g),Ia=!1;var X=n.memoizedState;u.state=X,zo(n,s,u,c),Po(),W=n.memoizedState,T||X!==W||Ia?(typeof pt=="function"&&(jf(n,a,pt,s),W=n.memoizedState),(U=Ia||ag(n,a,U,s,X,W,g))?(nt||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=W),u.props=s,u.state=W,u.context=g,s=U):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,bf(t,n),g=n.memoizedProps,nt=Ps(a,g),u.props=nt,pt=n.pendingProps,X=u.context,W=a.contextType,U=dr,typeof W=="object"&&W!==null&&(U=Tn(W)),T=a.getDerivedStateFromProps,(W=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==pt||X!==U)&&sg(n,u,s,U),Ia=!1,X=n.memoizedState,u.state=X,zo(n,s,u,c),Po();var tt=n.memoizedState;g!==pt||X!==tt||Ia||t!==null&&t.dependencies!==null&&Ql(t.dependencies)?(typeof T=="function"&&(jf(n,a,T,s),tt=n.memoizedState),(nt=Ia||ag(n,a,nt,s,X,tt,U)||t!==null&&t.dependencies!==null&&Ql(t.dependencies))?(W||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,tt,U),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,tt,U)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=tt),u.props=s,u.state=tt,u.context=U,s=nt):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&X===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&X===t.memoizedState||(n.flags|=1024),s=!1)}return u=s,Er(t,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&s?(n.child=Ls(n,t.child,null,c),n.child=Ls(n,null,a,c)):_n(t,n,a,c),n.memoizedState=u.state,t=n.child):t=pa(t,n,c),t}function Sg(t,n,a,s){return bs(),n.flags|=256,_n(t,n,a,s),n.child}var $f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function th(t){return{baseLanes:t,cachePool:c_()}}function eh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function xg(t,n,a){var s=n.pendingProps,c=!1,u=(n.flags&128)!==0,g;if((g=u)||(g=t!==null&&t.memoizedState===null?!1:(An.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ge){if(c?Ga(n):Va(),(t=Ze)?(t=X0(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=t_(t),a.return=n,n.child=a,Sn=n,Ze=null)):t=null,t===null)throw Oa(n);return td(t)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,c?(Va(),c=n.mode,u=gc({mode:"hidden",children:u},c),s=Ts(s,c,a,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=th(a),s.childLanes=eh(t,g,a),n.memoizedState=$f,Go(null,s)):(Ga(n),nh(n,u))}var T=t.memoizedState;if(T!==null){var U=T.dehydrated;if(U!==null)return Ux(t,n,u,g,s,U,T,a)}return c?(Va(),c=s.fallback,u=n.mode,T=t.child,U=T.sibling,s=la(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&1206910976,U!==null?c=la(U,c):(c=Ts(c,u,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,Go(null,s),s=n.child,c=t.child.memoizedState,c===null?c=th(a):(u=c.cachePool,u!==null?(T=cn._currentValue,u=u.parent!==T?{parent:T,pool:T}:u):u=c_(),c={baseLanes:c.baseLanes|a,cachePool:u}),s.memoizedState=c,s.childLanes=eh(t,g,a),n.memoizedState=$f,Go(t.child,s)):(Ga(n),a=t.child,t=a.sibling,a=la(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function nh(t,n){return n=gc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function gc(t,n){return t=Xn(22,t,null,n),t.lanes=0,t}function vc(t,n,a){return Ls(n,t.child,null,a),t=nh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ux(t,n,a,s,c,u,g,T){if(a)return n.flags&256?(Ga(n),n.flags&=-257,vc(t,n,T)):n.memoizedState!==null?(Va(),n.child=t.child,n.flags|=128,null):(Va(),u=c.fallback,g=n.mode,c=gc({mode:"visible",children:c.children},g),u=Ts(u,g,T,null),u.flags|=2,c.return=n,u.return=n,c.sibling=u,n.child=c,Ls(n,t.child,null,T),c=n.child,c.memoizedState=th(T),c.childLanes=eh(t,s,T),n.memoizedState=$f,Go(null,c));if(Ga(n),td(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var U=s.dgst;return s=U,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,wo({value:c,source:null,stack:null})),vc(t,n,T)}if(fn||Rs(t,n,T,!1),s=(T&t.childLanes)!==0,fn||s){if(Ha.current!==null)return vc(t,n,T);if(s=Ye,s!==null&&(c=rt(s,T),c!==0&&c!==g.retryLane))throw g.retryLane=c,Es(t,c),Wn(s,t,c),Qf;return $h(u)||zc(),vc(t,n,T)}return $h(u)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,Ze=yi(u.nextSibling),Sn=n,ge=!0,La=null,gi=!1,t!==null&&i_(n,t),n=nh(n,c.children),n.flags|=134221824,n)}function Mg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Kl(t.return,n,a)}function Eg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&sc(a)===null&&(n=t),t=t.sibling}return n}function yc(t,n,a,s,c,u){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:u}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=u)}function ih(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function ah(t,n,a){var s=n.pendingProps,c=s.revealOrder,u=s.tail;s=s.children;var g=An.current;if(n.flags&128)return Io(n,g),null;var T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,Io(n,g),c==="backwards"&&t!==null?(ih(t),_n(t,n,s,a),ih(t)):_n(t,n,s,a),s=ge?Co:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mg(t,a,n);else if(t.tag===19)Mg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=Eg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,ih(n)),yc(n,!0,c,null,u,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&sc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}yc(n,!0,a,null,u,s);break;case"together":yc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=Eg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),yc(n,!1,c,a,u,s)}return n.child}function Tg(t,n,a){var s=n.pendingProps;return Pa(n,n.type,s.value),_n(t,n,s.children,a),n.child}function pa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Rs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=la(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=la(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function sh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ql(t)))}function Lx(t,n,a){switch(n.tag){case 3:N(n,n.stateNode.containerInfo),Pa(n,cn,t.memoizedState.cache),bs();break;case 27:case 5:et(n);break;case 4:N(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Df(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ga(n),n.flags|=128,null;s=Rs(t,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?xg(t,n,a):(Ga(n),t=pa(t,n,a),t!==null?t.sibling:null)}Ga(n);break;case 19:if(n.flags&128)return ah(t,n,a);if(c=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Rs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return ah(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Io(n,An.current),s)break;return null;case 22:return n.lanes=0,mg(t,n,a,n.pendingProps);case 24:Pa(n,cn,t.memoizedState.cache)}return pa(t,n,a)}function bg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!sh(t,a)&&(n.flags&128)===0)return fn=!1,Lx(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,ge&&(n.flags&1048576)!==0&&n_(n,Co,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Ns(n.elementType),n.type=t,typeof t=="function")hf(t)?(s=Ps(t,s),n.tag=1,n=yg(null,n,t,s,a)):(n.tag=0,n=Jf(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===j){n.tag=11,n=hg(null,n,t,s,a);break t}else if(c===vt){n.tag=14,n=dg(null,n,t,s,a);break t}else if(c===lt){n.tag=10,n.type=t,n=Tg(null,n,a);break t}}throw n=Ut(t)||t,Error(r(306,n,""))}}return n;case 0:return Jf(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ps(s,n.pendingProps),yg(t,n,s,c,a);case 3:t:{if(N(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;c=u.element,bf(t,n),zo(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Pa(n,cn,s),s!==u.cache&&yf(n,[cn],a,!0),Po(),s=g.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=Sg(t,n,s,a);break t}else if(s!==c){c=pi(Error(r(424)),n),wo(c),n=Sg(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=yi(t.firstChild),Sn=n,ge=!0,La=null,gi=!0,a=m_(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(bs(),s===c){n=pa(t,n,a);break t}_n(t,n,s,a)}n=n.child}return n;case 26:return Er(t,n),t===null?(a=K0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ge||(n.stateNode=w0(n.type,n.pendingProps,qe.current,n)):n.memoizedState=K0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return et(n),t===null&&ge&&(s=n.stateNode=Y0(n.type,n.pendingProps,qe.current),Sn=n,gi=!0,c=Ze,Ka(n.type)?(ed=c,Ze=yi(s.firstChild)):Ze=c),_n(t,n,n.pendingProps.children,a),Er(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ge&&((c=s=Ze)&&(s=RM(s,n.type,n.pendingProps,gi),s!==null?(n.stateNode=s,Sn=n,Ze=yi(s.firstChild),gi=!1,c=!0):c=!1),c||Oa(n)),et(n),c=n.type,u=n.pendingProps,g=t!==null?t.memoizedProps:null,s=u.children,Yh(c,u)?s=null:g!==null&&Yh(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Lf(t,n,Mx,null,null,a),Gr._currentValue=c),Er(t,n),_n(t,n,s,a),n.child;case 6:return t===null&&ge&&((t=a=Ze)&&(a=CM(a,n.pendingProps,gi),a!==null?(n.stateNode=a,Sn=n,Ze=null,t=!0):t=!1),t||Oa(n)),null;case 13:return xg(t,n,a);case 4:return N(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ls(n,null,s,a):_n(t,n,s,a),n.child;case 11:return hg(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Er(t,n),_n(t,n,s,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return Tg(t,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,Cs(n),c=Tn(c),s=s(c),n.flags|=1,_n(t,n,s,a),n.child;case 14:return dg(t,n,n.type,n.pendingProps,a);case 15:return pg(t,n,n.type,n.pendingProps,a);case 19:return ah(t,n,a);case 31:return Nx(t,n,a);case 22:return mg(t,n,a,n.pendingProps);case 24:return Cs(n),s=Tn(cn),t===null?(c=Mf(),c===null&&(c=Ye,u=Sf(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),n.memoizedState={parent:s,cache:c},Tf(n),Pa(n,cn,c)):((t.lanes&a)!==0&&(bf(t,n),zo(n,null,null,a),Po()),c=t.memoizedState,u=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Pa(n,cn,s)):(s=u.cache,Pa(n,cn,s),s!==c.cache&&yf(n,[cn],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:ge&&jl(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Er(t,n),_n(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ma(t){t.flags|=4}function rh(t,n,a,s,c){var u;if((u=(t.mode&32)!==0)&&(u=a===null?tv(n,s):tv(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(r0())t.flags|=8192;else throw Us=ec,Ef}else t.flags&=-16777217}function Ag(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ev(n))if(r0())t.flags|=8192;else throw Us=ec,Ef}function Sc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ul():536870912,t.lanes|=n,Cr|=n)}function Vo(t,n){if(!ge)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Ox(t,n,a){var s=n.pendingProps;switch(mf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),fa(cn),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(_r(n)?ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gf())),Ke(n),null;case 26:var c=n.type,u=n.memoizedState;return t===null?(ma(n),u!==null?(Ke(n),Ag(n,u)):(Ke(n),rh(n,c,null,s,a))):u?u!==t.memoizedState?(ma(n),Ke(n),Ag(n,u)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ma(n),Ke(n),rh(n,c,t,s,a)),null;case 27:if(dt(n),a=qe.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ma(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=Ft.current,_r(n)?a_(n):(t=Y0(c,s,a),n.stateNode=t,ma(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(dt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ma(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(u=Ft.current,_r(n))a_(n);else{var g=$o(qe.current);switch(u){case 1:u=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=g.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}u[wt]=n,u[kt]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)u.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=u;t:switch(Cn(u,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ma(n)}}return Ke(n),n.subtreeFlags&=-33554433,rh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ma(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=qe.current,_r(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[wt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||b0(t.nodeValue,a)),t||Oa(n,!0)}else t=$o(t).createTextNode(s),t[wt]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=_r(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[wt]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=_r(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[wt]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),c=!1}else c=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Sc(n,n.updateQueue),Ke(n),null);case 4:return b(),t===null&&Gh(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return fa(n.type),Ke(n),null;case 19:if(Nf(n),s=n.memoizedState,s===null)return Ke(n),null;if(c=(n.flags&128)!==0,u=s.rendering,u===null)if(c)Vo(s,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=sc(t),u!==null){for(n.flags|=128,Vo(s,!1),t=u.updateQueue,n.updateQueue=t,Sc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)$m(a,t),a=a.sibling;return Io(n,An.current&1|2),ge&&ca(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&G()>Uc&&(n.flags|=128,c=!0,Vo(s,!1),n.lanes=4194304)}else{if(!c)if(t=sc(u),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Sc(n,t),Vo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!ge)return Ke(n),null}else 2*G()-s.renderingStartTime>Uc&&a!==536870912&&(n.flags|=128,c=!0,Vo(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(t=s.last,t!==null?t.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=G(),t.sibling=null,u=An.current,u=c?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||ge?Io(n,u):(a=u,ie(bn,n),ie(An,a),Ln===null&&(Ln=n)),ge&&ca(n,s.treeForkCount),t}return Ke(n),null;case 22:case 23:return ni(n),wf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Sc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Lt(Ds),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),fa(cn),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(r(156,n.tag))}function Px(t,n){switch(mf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return fa(cn),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(r(340));bs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));bs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Nf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return fa(n.type),null;case 22:case 23:return ni(n),wf(),t!==null&&Lt(Ds),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return fa(cn),null;case 25:return null;default:return null}}function Rg(t,n){switch(mf(n),n.tag){case 3:fa(cn),b();break;case 26:case 27:case 5:dt(n);break;case 4:b();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:Nf(n);break;case 10:fa(n.type);break;case 22:case 23:ni(n),wf(),t!==null&&Lt(Ds);break;case 24:fa(cn)}}function Xo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var u=a.create,g=a.inst;s=u(),g.destroy=s}a=a.next}while(a!==c)}}catch(T){Be(n,n.return,T)}}function Xa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var u=c.next;s=u;do{if((s.tag&t)===t){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,c=n;var U=a,W=T;try{W()}catch(nt){Be(c,U,nt)}}}s=s.next}while(s!==u)}}catch(nt){Be(n,n.return,nt)}}function Cg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{g_(n,a)}catch(s){Be(t,t.return,s)}}}function wg(t,n,a){a.props=Ps(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function Gi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var c=t.stateNode,u=ra(t.memoizedProps,c);(c.ref===null||c.ref.name!==u)&&(c.ref=z0(u)),s=c.ref;break;case 7:if(t.stateNode===null){var g=new oi(t);_(t.child,!1,bM,g,void 0,void 0),t.stateNode=g}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(T){Be(t,n,T)}}function Rn(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Be(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(t,n,c)}else a.current=null}function xc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)V0(t.stateNode,n[a])}function Dg(t){for(var n=t.return;n!==null&&(lh(n)&&V0(t.stateNode,n.stateNode),!oh(n));)n=n.return}function ko(t){for(var n=t.return;n!==null&&(lh(n)&&AM(t.stateNode,n.stateNode),!oh(n));)n=n.return}function oh(t){return t.tag===5||t.tag===3||t.tag===27}function lh(t){return t&&t.tag===7&&t.stateNode!==null}function ch(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Be(t,t.return,c)}}function uh(t,n,a){try{var s=t.stateNode;oM(s,t.type,a,n),s[kt]=n}catch(c){Be(t,t.return,c)}}function Ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ka(t.type)||t.tag===4}function fh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hh(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi)),xc(t,s),De=!0;else if(c!==4&&(c===27&&(xc(t,s),s=null,Ka(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(hh(t,n,a,s),t=t.sibling;t!==null;)hh(t,n,a,s),t=t.sibling}function Mc(t,n,a,s){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),xc(t,s),De=!0;else if(c!==4&&(c===27&&(xc(t,s),s=null,Ka(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Mc(t,n,a,s),t=t.sibling;t!==null;)Mc(t,n,a,s),t=t.sibling}function Ug(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,s,a),n[wt]=t,n[kt]=a}catch(u){Be(t,t.return,u)}}var Ec=!1,ii=null;function Lg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Ec=!0)}var Vi=null;function Og(){var t=Vi;return Vi=null,t}var kn=0;function Tr(t,n,a,s,c){return kn=0,Pg(t.child,n,a,s,c)}function Pg(t,n,a,s,c){for(var u=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(s!==null){var T=Zh(g);s.push(T),T.view&&(u=!0)}else u||Zh(g).view&&(u=!0);Ec=!0,O0(g,kn===0?n:n+"_"+kn,a),kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||Pg(t.child,n,a,s,c)&&(u=!0));t=t.sibling}return u}function Xi(t,n){for(;t!==null;)t.tag===5?P0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Xi(t.child,n)),t=t.sibling}function Tc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Tc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=oa(n.default,n.share),n!=="none"&&(Tr(t,a,n,null,!1)||Xi(t.child,!1))}t=t.sibling}}function dh(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,c=ra(s,a),u=oa(s.default,a.paired?s.share:s.enter);u!=="none"?Tr(t,c,u,null,!1)?(Tc(t),a.paired||n||Ur(t,s.onEnter)):Xi(t.child,!1):Tc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)dh(t,n),t=t.sibling;else Tc(t)}function ph(t){if(ii!==null&&ii.size!==0){var n=ii;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var u=oa(a.default,a.share);if(u!=="none"&&(Tr(t,s,u,null,!1)?(u=t.stateNode,c.paired=u,u.paired=c,Ur(t,a.onShare)):Xi(t.child,!1)),n.delete(s),n.size===0)break}}}ph(t)}t=t.sibling}}}function mh(t){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode),s=ii!==null?ii.get(a):void 0,c=oa(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(Tr(t,a,c,null,!1)?s!==void 0?(c=t.stateNode,s.paired=c,c.paired=s,ii.delete(a),Ur(t,n.onShare)):Ur(t,n.onExit):Xi(t.child,!1)),ii!==null&&ph(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)mh(t),t=t.sibling;else ii!==null&&ph(t)}function zg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode);n=oa(n.default,n.update),t.flags&=-5,n!=="none"&&Tr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&zg(t);t=t.sibling}}function _h(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Xi(t.child,!1))}_h(t)}t=t.sibling}}function bc(t){if(t.tag===30)t.stateNode.paired=null,Xi(t.child,!1),_h(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)bc(t),t=t.sibling;else _h(t)}function Ig(t){for(t=t.child;t!==null;)t.tag===30?Xi(t.child,!1):(t.subtreeFlags&33554432)!==0&&Ig(t),t=t.sibling}function gh(t,n,a,s,c,u,g){for(var T=!1;n!==null;){if(n.tag===5){var U=n.stateNode;if(u!==null&&kn<u.length){var W=u[kn],nt=Zh(U);(W.view||nt.view)&&(T=!0);var pt;if(pt=(t.flags&4)===0)if(nt.clip)pt=!0;else{pt=W.rect;var X=nt.rect;pt=pt.y!==X.y||pt.x!==X.x||pt.height!==X.height||pt.width!==X.width}pt&&(t.flags|=4),nt.abs?nt=!W.abs:(W=W.rect,nt=nt.rect,nt=W.height!==nt.height||W.width!==nt.width),nt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&O0(U,kn===0?a:a+"_"+kn,c),T&&(t.flags&4)!==0||(Vi===null&&(Vi=[]),Vi.push(U,kn===0?s:s+"_"+kn,n.memoizedProps)),kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:gh(t,n.child,a,s,c,u,g)&&(T=!0));n=n.sibling}return T}function Bg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,c=ra(a,s),u=oa(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,s=t;var T=t.child;kn=0,c=gh(s,T,c,c,u,g,!1),(t.flags&4)!==0&&c&&Ur(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Bg(t);t=t.sibling}}var xn=!1,ze=!1,ki=!1,vh=!1,Fg=typeof WeakSet=="function"?WeakSet:Set,Mn=null,qi=!1,qo=!1,Ac=!1,yh=!1;function zx(t,n,a){if(t=t.containerInfo,kh=Vr,t=Xm(t),sf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var u=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break t}var T=0,U=-1,W=-1,nt=0,pt=0,X=t,tt=null;e:for(;;){for(var Nt;X!==s||u!==0&&X.nodeType!==3||(U=T+u),X!==g||c!==0&&X.nodeType!==3||(W=T+c),X.nodeType===3&&(T+=X.nodeValue.length),(Nt=X.firstChild)!==null;)tt=X,X=Nt;for(;;){if(X===t)break e;if(tt===s&&++nt===u&&(U=T),tt===g&&++pt===c&&(W=T),(Nt=X.nextSibling)!==null)break;X=tt,tt=X.parentNode}X=Nt}s=U===-1||W===-1?null:{start:U,end:W}}else s=null}s=s||{start:0,end:0}}else s=null;for(qh={focusedElem:t,selectionRange:s},Vr=!1,a=(a&335544064)===a,Mn=n,n=a?9270:1024;Mn!==null;){if(t=Mn,a&&(s=t.deletions,s!==null))for(u=0;u<s.length;u++)a&&mh(s[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&Lg(t),Rc(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&mh(s),Rc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&Lg(t),Rc(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Mn=s):(a&&zg(t),Rc(a))}}ii=null}function Rc(t){for(;Mn!==null;){var n=Mn,a=t,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var g=Ps(n.type,c);a=u.getSnapshotBeforeUpdate(g,s),u.__reactInternalSnapshotBeforeUpdate=a}catch(T){Be(n,n.return,T)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)Jh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Jh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ra(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=oa(c.default,c.update),c!=="none"&&Tr(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Mn=s;break}Mn=n.return}}function Hg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),s&4&&Xo(5,a);break;case 1:if(Yi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Be(a,a.return,g)}else{var c=Ps(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Be(a,a.return,g)}}s&64&&Cg(a),s&512&&Gi(a,a.return);break;case 3:if(Yi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{g_(t,n)}catch(g){Be(a,a.return,g)}}break;case 27:n===null&&s&4&&Ug(a);case 26:case 5:Yi(t,a),n===null&&s&4&&ch(a),s&512&&Gi(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),s&4&&kg(t,a);break;case 13:Yi(t,a),s&4&&qg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=jx.bind(null,a),wM(t,a))));break;case 22:if(s=a.memoizedState!==null||xn,!s){var u=n!==null&&n.memoizedState!==null||ze;n=xn,c=ze,xn=s,(ze=u)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ci(t,a,s)):Yi(t,a),xn=n,ze=c}break;case 30:Yi(t,a),s&512&&Gi(a,a.return);break;case 7:s&512&&Gi(a,a.return);default:Yi(t,a)}}function Sh(t,n){for(t=t.child;t!==null;)Gg(t,n),t=t.sibling}function Gg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=t.stateNode,u=t.memoizedProps.style,g=u!=null&&u.hasOwnProperty("display")?u.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(U){Be(t,t.return,U)}xh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,De=!0}catch(U){Be(t,t.return,U)}break;case 18:try{var T=t.stateNode;n?L0(T,!0):L0(t.stateNode,!1)}catch(U){Be(t,t.return,U)}break;case 22:case 23:t.memoizedState===null&&Sh(t,n);break;default:Sh(t,n)}}function xh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:Gg(a,s);break t;case 22:a.memoizedState===null&&xh(a,s);break t;default:xh(a,s)}}t=t.sibling}}function Vg(t){var n=t.alternate;n!==null&&(t.alternate=null,Vg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&te(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,qn=!1;function Ai(t,n,a){for(a=a.child;a!==null;)Xg(t,n,a),a=a.sibling}function Xg(t,n,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:ze||Rn(a,n),Ai(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ze&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ze||Rn(a,n),ko(a);var s=Je,c=qn;Ka(a.type)&&(Je=a.stateNode,qn=!1),Ai(t,n,a),W0(a.stateNode,a.type,a.memoizedProps),Je=s,qn=c;break;case 5:ze||Rn(a,n),ko(a);case 6:if(a.tag===6&&ko(a),s=Je,c=qn,Je=null,Ai(t,n,a),Je=s,qn=c,Je!==null)if(qn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode),De=!0}catch(u){Be(a,n,u)}else try{Je.removeChild(a.stateNode),De=!0}catch(u){Be(a,n,u)}break;case 18:Je!==null&&(qn?(t=Je,U0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Xr(t)):U0(Je,a.stateNode));break;case 4:s=Je,c=qn,Je=a.stateNode.containerInfo,qn=!0,Ai(t,n,a),Je=s,qn=c;break;case 0:case 11:case 14:case 15:Xa(2,a,n),ze||Xa(4,a,n),Ai(t,n,a);break;case 1:ze||(Rn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&wg(a,n,s)),Ai(t,n,a);break;case 21:Ai(t,n,a);break;case 22:ze=(s=ze)||a.memoizedState!==null,Ai(t,n,a),ze=s;break;case 30:Rn(a,n),Ai(t,n,a);break;case 7:ze||Rn(a,n),Ai(t,n,a);break;default:Ai(t,n,a)}}function kg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xr(t)}catch(a){Be(n,n.return,a)}}}function qg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xr(t)}catch(a){Be(n,n.return,a)}}function Ix(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Fg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Fg),n;default:throw Error(r(435,t.tag))}}function Cc(t,n){var a=Ix(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Zx.bind(null,t,s);s.then(c,c)}})}function Fn(t,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var u=s[c],g=t,T=n,U=T;t:for(;U!==null;){switch(U.tag){case 27:if(Ka(U.type)){Je=U.stateNode,qn=!1;break t}break;case 5:Je=U.stateNode,qn=!1;break t;case 3:case 4:Je=U.stateNode.containerInfo,qn=!0;break t}U=U.return}if(Je===null)throw Error(r(160));Xg(g,T,u),Je=null,qn=!1,g=u.alternate,g!==null&&(g.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Yg(n,t,a),n=n.sibling}var Ri=null;function Yg(t,n,a){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var g=s[u];g.ref.impl=g.nextImpl}Fn(n,t,a),Hn(t),c&4&&(Xa(3,t,t.return),Xo(3,t),Xa(5,t,t.return));break;case 1:Fn(n,t,a),Hn(t),c&512&&(ze||s===null||Rn(s,s.return)),c&64&&xn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ri,Fn(n,t,a),Hn(t),c&512&&(ze||s===null||Rn(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(xn)t.stateNode=w0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=u.ownerDocument||u;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[Ue]||s[wt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),Cn(s,n,a),s[wt]=t,we(s),n=s;break t;case"link":if(u=$0("link","href",c).get(n+(a.href||""))){for(g=0;g<u.length;g++)if(s=u[g],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(g,1);break e}}s=c.createElement(n),Cn(s,n,a),c.head.appendChild(s);break;case"meta":if(u=$0("meta","content",c).get(n+(a.content||""))){for(g=0;g<u.length;g++)if(s=u[g],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(g,1);break e}}s=c.createElement(n),Cn(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[wt]=t,we(s),n=s}t.stateNode=n}else xn||sd(u,t.type,t.stateNode);else t.stateNode=J0(u,a,t.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||ze||n.parentNode.removeChild(n)):c.count--,a===null?xn||sd(u,t.type,t.stateNode):J0(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&uh(t,t.memoizedProps,s.memoizedProps);break;case 27:Fn(n,t,a),Hn(t),c&512&&(ze||s===null||Rn(s,s.return)),s!==null&&c&4&&uh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(u=ki,ki=!1,Fn(n,t,a),ki=u,Hn(t),c&512&&(ze||s===null||Rn(s,s.return)),t.flags&32){n=t.stateNode;try{rr(n,""),De=!0}catch(nt){Be(t,t.return,nt)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,uh(t,n,s!==null?s.memoizedProps:n)),c&1024&&(vh=!0);break;case 6:if(Fn(n,t,a),Hn(t),c&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,De=!0}catch(nt){Be(t,t.return,nt)}}break;case 3:if(De=!1,Xc=null,u=Ri,Ri=tl(n.containerInfo),Fn(n,t,a),Ri=u,Hn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Xr(n.containerInfo)}catch(nt){Be(t,t.return,nt)}vh&&(vh=!1,Wg(t)),De=!1;break;case 4:c=ki,ki=xn,s=dm(),u=Ri,Ri=tl(t.stateNode.containerInfo),Fn(n,t,a),Hn(t),Ri=u,De&&qo&&(Ac=!0),De=s,ki=c;break;case 12:Fn(n,t,a),Hn(t);break;case 31:Fn(n,t,a),Hn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Cc(t,n)));break;case 13:Fn(n,t,a),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Nc=G()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Cc(t,n)));break;case 22:u=t.memoizedState!==null,g=s!==null&&s.memoizedState!==null;var T=xn,U=ze,W=ki;xn=T||u,ki=W||u,ze=U||g,Fn(n,t,a),ze=U,ki=W,xn=T,Hn(t),c&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||g||xn||ze||(n=g||ze,a=xn,s=ze,xn=u||xn,ze=n,ka(t,2),xn=a,ze=s),!u&&ki||Sh(t,u)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Cc(t,a))));break;case 19:Fn(n,t,a),Hn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Cc(t,n)));break;case 30:c&512&&(ze||s===null||Rn(s,s.return)),c=dm(),u=qo,g=(a&335544064)===a,T=t.memoizedProps,qo=g&&oa(T.default,T.update)!=="none",Fn(n,t,a),Hn(t),g&&s!==null&&De&&(t.flags|=4),qo=u,De=c;break;case 21:break;case 7:c&512&&(ze||s===null||Rn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Fn(n,t,a),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Ng(s)){a=s;break}s=s.return}s=null;for(var c=t.return;c!==null;){if(lh(c)){var u=c.stateNode;s===null?s=[u]:s.push(u)}if(oh(c))break;c=c.return}var g=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var T=a.stateNode,U=fh(t);Mc(t,U,T,g);break;case 5:var W=a.stateNode;a.flags&32&&(rr(W,""),a.flags&=-33);var nt=fh(t);Mc(t,nt,W,g);break;case 3:case 4:var pt=a.stateNode.containerInfo,X=fh(t);hh(t,X,pt,g);break;default:throw Error(r(161))}}catch(tt){Be(t,t.return,tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Wg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Wg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Vr=!0,n.reset(),Vr=!1),t=t.sibling}}function br(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)jg(n,t),n=n.sibling;else Bg(n)}function jg(t,n){var a=t.alternate;if(a===null)dh(t,!1);else switch(t.tag){case 3:if(yh=qi=!1,Og(),br(n,t),!qi&&!Ac){if(t=Vi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var c=t[s+1];P0(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),yh=!0}Vi=null;break;case 5:br(n,t);break;case 4:s=qi,qi=!1,br(n,t),qi&&(Ac=!0),qi=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?dh(t,!1):br(n,t));break;case 30:s=qi,c=Og(),qi=!1,br(n,t),qi&&(t.flags|=4);var u=t.memoizedProps,g=t.stateNode;n=ra(u,g),g=ra(a.memoizedProps,g);var T=oa(u.default,u.update);T==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,kn=0,n=gh(t,a,n,g,T,u,!0),kn!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ur(t,t.memoizedProps.onUpdate),Vi=c):c!==null&&(c.push.apply(c,Vi),Vi=c),qi=(t.flags&32)!==0?!0:s;break;default:br(n,t)}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hg(t,n.alternate,n),n=n.sibling}function ka(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:Xa(4,a,a.return),ka(a,s);break;case 1:Rn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&wg(a,a.return,c),ka(a,s);break;case 27:(s&2)!==0&&W0(a.stateNode,a.type,a.memoizedProps);case 5:Rn(a,a.return),a.tag!==5&&a.tag!==27||ko(a),ka(a,s);break;case 6:ko(a);break;case 26:Rn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||ze||c.parentNode.removeChild(c),ka(a,s);break;case 22:a.memoizedState===null&&ka(a,s);break;case 30:Rn(a,a.return),ka(a,s);break;case 7:Rn(a,a.return);default:ka(a,s)}t=t.sibling}}function Ci(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=t,u=n,g=u.flags,T=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Ci(c,u,a),Xo(4,u);break;case 1:if(Ci(c,u,a),s=u,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){Be(s,s.return,nt)}if(s=u,c=s.updateQueue,c!==null){var U=s.stateNode;try{var W=c.shared.hiddenCallbacks;if(W!==null)for(c.shared.hiddenCallbacks=null,c=0;c<W.length;c++)__(W[c],U)}catch(nt){Be(s,s.return,nt)}}T&&g&64&&Cg(u),Gi(u,u.return);break;case 27:(a&2)!==0&&Ug(u);case 5:u.tag!==5&&u.tag!==27||Dg(u),Ci(c,u,a),T&&s===null&&g&4&&ch(u),Gi(u,u.return);break;case 6:Dg(u);break;case 26:U=u.stateNode,u.memoizedState!==null||U===null||xn||sd(tl(U.ownerDocument),u.type,U),Ci(c,u,a),T&&s===null&&g&4&&ch(u),Gi(u,u.return);break;case 12:Ci(c,u,a);break;case 31:Ci(c,u,a),T&&g&4&&kg(c,u);break;case 13:Ci(c,u,a),T&&g&4&&qg(c,u);break;case 22:u.memoizedState===null&&Ci(c,u,a),Gi(u,u.return);break;case 30:Ci(c,u,a),Gi(u,u.return);break;case 7:Gi(u,u.return);default:Ci(c,u,a)}n=n.sibling}}function Mh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Do(a))}function Eh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Do(t))}function vi(t,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Zg(t,n,a,s),n=n.sibling;else c&&Ig(n)}function Zg(t,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&bc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),u&2048&&Xo(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),c&&yh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Do(u)));break;case 12:if(u&2048){vi(t,n,a,s),u=n.stateNode;try{var g=n.memoizedProps,T=g.id,U=g.onPostCommit;typeof U=="function"&&U(T,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(W){Be(n,n.return,W)}}else vi(t,n,a,s);break;case 31:vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:g=n.stateNode,T=n.alternate,n.memoizedState!==null?(c&&T!==null&&T.memoizedState===null&&bc(T),g._visibility&2?vi(t,n,a,s):Yo(t,n)):(c&&T!==null&&T.memoizedState!==null&&bc(n),g._visibility&2?vi(t,n,a,s):(g._visibility|=2,Ar(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&Mh(T,n);break;case 24:vi(t,n,a,s),u&2048&&Eh(n.alternate,n);break;case 30:c&&(u=n.alternate,u!==null&&(Xi(u.child,!0),Xi(n.child,!0))),vi(t,n,a,s);break;default:vi(t,n,a,s)}}function Ar(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,g=n,T=a,U=s,W=g.flags;switch(g.tag){case 0:case 11:case 15:Ar(u,g,T,U,c),Xo(8,g);break;case 23:break;case 22:var nt=g.stateNode;g.memoizedState!==null?nt._visibility&2?Ar(u,g,T,U,c):Yo(u,g):(nt._visibility|=2,Ar(u,g,T,U,c)),c&&W&2048&&Mh(g.alternate,g);break;case 24:Ar(u,g,T,U,c),c&&W&2048&&Eh(g.alternate,g);break;default:Ar(u,g,T,U,c)}n=n.sibling}}function Yo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Yo(a,s),c&2048&&Mh(s.alternate,s);break;case 24:Yo(a,s),c&2048&&Eh(s.alternate,s);break;default:Yo(a,s)}n=n.sibling}}var zs=8192;function Is(t,n,a){if(t.subtreeFlags&zs)for(t=t.child;t!==null;)Kg(t,n,a),t=t.sibling}function Kg(t,n,a){switch(t.tag){case 26:Is(t,n,a),t.flags&zs&&(t.memoizedState!==null?XM(a,Ri,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&iv(a,t)));break;case 5:Is(t,n,a),t.flags&zs&&(t=t.stateNode,(n&335544128)===n&&iv(a,t));break;case 3:case 4:var s=Ri;Ri=tl(t.stateNode.containerInfo),Is(t,n,a),Ri=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=zs,zs=16777216,Is(t,n,a),zs=s):Is(t,n,a));break;case 30:if((t.flags&zs)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var c=t.stateNode;c.paired=null,ii===null&&(ii=new Map),ii.set(s,c)}Is(t,n,a);break;default:Is(t,n,a)}}function Qg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,$g(s,t)}Qg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jg(t),t=t.sibling}function Jg(t){switch(t.tag){case 0:case 11:case 15:Wo(t),t.flags&2048&&Xa(9,t,t.return);break;case 3:Wo(t);break;case 12:Wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,wc(t)):Wo(t);break;default:Wo(t)}}function wc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,$g(s,t)}Qg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),wc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,wc(n));break;default:wc(n)}t=t.sibling}}function $g(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Do(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Mn=s;else t:for(a=t;Mn!==null;){s=Mn;var c=s.sibling,u=s.return;if(Vg(s),s===a){Mn=null;break t}if(c!==null){c.return=u,Mn=c;break t}Mn=u}}}var Bx={getCacheForType:function(t){var n=Tn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(cn).controller.signal}},Fx=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ye=null,Se=null,Ee=0,Ie=0,ai=null,qa=!1,Rr=!1,Th=!1,_a=0,sn=0,Ya=0,Bs=0,Dc=0,si=0,Cr=0,jo=null,Yn=null,bh=!1,Nc=0,t0=0,Uc=1/0,Lc=null,Wa=null,tn=0,wi=null,Fs=null,Wi=0,Ah=0,Rh=null,e0=null,wr=null,Dr=null,Nr=null,Zo=0,Oc=null;function ri(){return(Oe&2)!==0&&Ee!==0?Ee&-Ee:Et.T!==null?Ih():Tt()}function n0(){if(si===0)if((Ee&536870912)===0||ge){var t=ia;ia<<=1,(ia&3932160)===0&&(ia=262144),si=t}else si=536870912;return t=bn.current,t!==null&&(t.flags|=32),si}function Ur(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=z0(ra(t.memoizedProps,a))),Dr===null&&(Dr=[]),Dr.push(n.bind(null,s))}}function Wn(t,n,a){(t===Ye&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(Lr(t,0),ja(t,Ee,si,!1)),Ss(t,a),((Oe&2)===0||t!==Ye)&&(t===Ye&&((Oe&2)===0&&(Bs|=a),sn===4&&ja(t,Ee,si,!1)),ji(t))}function i0(t,n,a){if((Oe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ca(t,n),c=s?Vx(t,n):wh(t,n,!0),u=s;do{if(c===0){Rr&&!s&&ja(t,n,0,!1);break}else{if(a=t.current.alternate,u&&!Hx(a)){c=wh(t,n,!1),u=!1;continue}if(c===2){if(u=n,t.errorRecoveryDisabledLanes&u)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=t;c=jo;var U=T.current.memoizedState.isDehydrated;if(U&&(Lr(T,g).flags|=256),g=wh(T,g,!1),g!==2&&g!==6){if(Th&&!U){T.errorRecoveryDisabledLanes|=u,Bs|=u,c=4;break t}u=Yn,Yn=c,u!==null&&(Yn===null?Yn=u:Yn.push.apply(Yn,u))}c=g}if(u=!1,c!==2)continue}}if(c===1){Lr(t,0),ja(t,n,0,!0);break}t:{switch(s=t,u=c,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ja(s,n,si,!qa);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Nc+300-G(),10<c)){if(ja(s,n,si,!qa),ys(s,0,!0)!==0)break t;Wi=n,s.timeoutHandle=jh(a0.bind(null,s,a,Yn,Lc,bh,n,si,Bs,Cr,qa,u,"Throttled",-0,0),c);break t}a0(s,a,Yn,Lc,bh,n,si,Bs,Cr,qa,u,null,-0,0)}}break}while(!0);ji(t)}function a0(t,n,a,s,c,u,g,T,U,W,nt,pt,X,tt){t.timeoutHandle=-1;var Nt=n.subtreeFlags,qt=(u&335544064)===u;if(pt=null,(qt||Nt&8192||(Nt&16785408)===16785408)&&(pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},ii=null,Kg(n,u,pt),qt&&(Nt=pt,qt=t.containerInfo,qt=(qt.nodeType===9?qt:qt.ownerDocument).__reactViewTransition,qt!=null&&(Nt.count++,Nt.waitingForViewTransition=!0,Nt=il.bind(Nt),qt.finished.then(Nt,Nt))),Nt=(u&62914560)===u?Nc-G():(u&4194048)===u?t0-G():0,Nt=kM(pt,Nt),Nt!==null)){Wi=u,t.cancelPendingCommit=Nt(h0.bind(null,t,n,u,a,s,c,g,T,U,W,nt,pt,null,X,tt)),ja(t,u,g,!W);return}h0(t,n,u,a,s,c,g,T,U,W,nt,pt)}function Hx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],u=c.getSnapshot;c=c.value;try{if(!ei(u(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(t,n,a,s){n=Nl(t,n),n&=~Dc,n&=~Bs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var u=31-Nn(c),g=1<<u;s[u]=-1,c&=~g}a!==0&&R(t,a,n)}function Pc(){return(Oe&6)===0?(Ko(0),!1):!0}function Ch(){if(Se!==null){if(Ie===0)var t=Se.return;else t=Se,ua=As=null,zf(t),yr=null,Lo=0,t=Se;for(;t!==null;)Rg(t.alternate,t),t=t.return;Se=null}}function Lr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,uM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,Ch(),Ye=t,Se=a=la(t.current,null),Ee=n,Ie=0,ai=null,qa=!1,Rr=Ca(t,n),Th=!1,Cr=si=Dc=Bs=Ya=sn=0,Yn=jo=null,bh=!1,_a=Nl(t,n),Xl(),a}function s0(t,n){he=null,Et.H=pc,n===vr||n===tc?(n=h_(),Ie=3):n===Ef?(n=h_(),Ie=4):Ie=n===Qf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,Se===null&&(sn=1,mc(t,pi(n,t.current)))}function r0(){var t=bn.current;return t===null?!0:(Ee&4194048)===Ee?Ln===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===Ln:!1}function o0(){var t=Et.H;return Et.H=pc,t===null?pc:t}function l0(){var t=Et.A;return Et.A=Bx,t}function zc(){sn=4,qa||(Ee&4194048)!==Ee&&bn.current!==null||(Rr=!0),(Ya&134217727)===0&&(Bs&134217727)===0||Ye===null||ja(Ye,Ee,si,!1)}function wh(t,n,a){var s=Oe;Oe|=2;var c=o0(),u=l0();(Ye!==t||Ee!==n)&&(Lc=null,Lr(t,n)),n=!1;var g=sn;t:do try{if(Ie!==0&&Se!==null){var T=Se,U=ai;switch(Ie){case 8:Ch(),g=6;break t;case 3:case 2:case 9:case 6:bn.current===null&&(n=!0);var W=Ie;if(Ie=0,ai=null,Or(t,T,U,W),a&&Rr){g=0;break t}break;default:W=Ie,Ie=0,ai=null,Or(t,T,U,W)}}Gx(),g=sn;break}catch(nt){s0(t,nt)}while(!0);return n&&t.shellSuspendCounter++,ua=As=null,Oe=s,Et.H=c,Et.A=u,Se===null&&(Ye=null,Ee=0,Xl()),g}function Gx(){for(;Se!==null;)c0(Se)}function Vx(t,n){var a=Oe;Oe|=2;var s=o0(),c=l0();Ye!==t||Ee!==n?(Lc=null,Uc=G()+500,Lr(t,n)):Rr=Ca(t,n);t:do try{if(Ie!==0&&Se!==null){n=Se;var u=ai;e:switch(Ie){case 1:Ie=0,ai=null,Or(t,n,u,1);break;case 2:case 9:if(u_(u)){Ie=0,ai=null,u0(n);break}n=function(){Ie!==2&&Ie!==9||Ye!==t||(Ie=7),ji(t)},u.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:u_(u)?(Ie=0,ai=null,u0(n)):(Ie=0,ai=null,Or(t,n,u,7));break;case 5:var g=null;switch(Se.tag){case 26:g=Se.memoizedState;case 5:case 27:var T=Se;if(g?ev(g):T.stateNode.complete){Ie=0,ai=null;var U=T.sibling;if(U!==null)Se=U;else{var W=T.return;W!==null?(Se=W,Ic(W)):Se=null}break e}}Ie=0,ai=null,Or(t,n,u,5);break;case 6:Ie=0,ai=null,Or(t,n,u,6);break;case 8:Ch(),sn=6;break t;default:throw Error(r(462))}}Xx();break}catch(nt){s0(t,nt)}while(!0);return ua=As=null,Et.H=s,Et.A=c,Oe=a,Se!==null?0:(Ye=null,Ee=0,Xl(),sn)}function Xx(){for(;Se!==null&&!Pt();)c0(Se)}function c0(t){var n=bg(t.alternate,t,_a);t.memoizedProps=t.pendingProps,n===null?Ic(t):Se=n}function u0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=vg(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=vg(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:zf(n);var s=n;s===Sn&&(ge?(Zl(s),s.tag===5&&s.stateNode!=null&&(Ze=s.stateNode)):(Zl(s),ge=!0));default:Rg(a,n),n=Se=$m(n,_a),n=bg(a,n,_a)}t.memoizedProps=t.pendingProps,n===null?Ic(t):Se=n}function Or(t,n,a,s){ua=As=null,zf(n),yr=null,Lo=0;var c=n.return;try{if(Dx(t,c,n,a,Ee)){sn=1,mc(t,pi(a,t.current)),Se=null;return}}catch(u){if(c!==null)throw Se=c,u;sn=1,mc(t,pi(a,t.current)),Se=null;return}n.flags&32768?(ge||s===1?t=!0:Rr||(Ee&536870912)!==0?t=!1:(qa=t=!0,(s===2||s===9||s===3||s===6)&&(s=bn.current,s!==null&&s.tag===13&&(s.flags|=16384))),f0(n,t)):Ic(n)}function Ic(t){var n=t;do{if((n.flags&32768)!==0){f0(n,qa);return}t=n.return;var a=Ox(n.alternate,n,_a);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);sn===0&&(sn=5)}function f0(t,n){do{var a=Px(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);sn=6,Se=null}function h0(t,n,a,s,c,u,g,T,U,W,nt,pt){t.cancelPendingCommit=null;do Bc();while(tn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Ye&&(Se=Ye=null,Ee=0),Fs=n,wi=t,Wi=a,Rh=c,e0=s,kx(t,n,a,g,T,U,pt)}}function kx(t,n,a,s,c,u,g){var T=n.lanes|n.childLanes;if(Ah=T,T|=uf,Hu(t,a,T,s,c,u),Dr=null,(a&335544064)===a?(Nr=vx(t),s=10262):(Nr=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,Kx(xt,function(){return Lh(),null})):(t.callbackNode=null,t.callbackPriority=0),Ec=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Et.T,Et.T=null,c=Yt.p,Yt.p=2,u=Oe,Oe|=4;try{zx(t,n,a)}finally{Oe=u,Yt.p=c,Et.T=s}}tn=1,Ec?wr=_M(g,t.containerInfo,Nr,Dh,Nh,Yx,Uh,Lh,qx):(Dh(),Nh(),Uh())}function qx(t){if(tn!==0){var n=wi.onRecoverableError;n(t,{componentStack:null})}}function Yx(){tn===3&&(tn=0,jg(Fs,wi),tn=4)}function Dh(){if(tn===1){tn=0;var t=wi,n=Fs,a=Wi,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Et.T,Et.T=null;var c=Yt.p;Yt.p=2;var u=Oe;Oe|=4;try{qo=Ac=!1,Yg(n,t,a),a=qh;var g=Xm(t.containerInfo),T=a.focusedElem,U=a.selectionRange;if(g!==T&&T&&T.ownerDocument&&Vm(T.ownerDocument.documentElement,T)){if(U!==null&&sf(T)){var W=U.start,nt=U.end;if(nt===void 0&&(nt=W),"selectionStart"in T)T.selectionStart=W,T.selectionEnd=Math.min(nt,T.value.length);else{var pt=T.ownerDocument||document,X=pt&&pt.defaultView||window;if(X.getSelection){var tt=X.getSelection(),Nt=T.textContent.length,qt=Math.min(U.start,Nt),de=U.end===void 0?qt:Math.min(U.end,Nt);!tt.extend&&qt>de&&(g=de,de=qt,qt=g);var Y=Gm(T,qt),H=Gm(T,de);if(Y&&H&&(tt.rangeCount!==1||tt.anchorNode!==Y.node||tt.anchorOffset!==Y.offset||tt.focusNode!==H.node||tt.focusOffset!==H.offset)){var J=pt.createRange();J.setStart(Y.node,Y.offset),tt.removeAllRanges(),qt>de?(tt.addRange(J),tt.extend(H.node,H.offset)):(J.setEnd(H.node,H.offset),tt.addRange(J))}}}}for(pt=[],tt=T;tt=tt.parentNode;)tt.nodeType===1&&pt.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<pt.length;T++){var ht=pt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Vr=!!kh,qh=kh=null}finally{Oe=u,Yt.p=c,Et.T=s}}t.current=n,tn=2}}function Nh(){if(tn===2){tn=0;var t=wi,n=Fs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Et.T,Et.T=null;var s=Yt.p;Yt.p=2;var c=Oe;Oe|=4;try{Hg(t,n.alternate,n)}finally{Oe=c,Yt.p=s,Et.T=a}}tn=3}}function Uh(){if(tn===4||tn===3){tn=0;var t=wr;wr=null,fe();var n=wi,a=Fs,s=Wi,c=e0,u=(s&335544064)===s?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?tn=5:(tn=0,Fs=wi=null,d0(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(Wa=null),Q(s),a=a.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Me,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Et.T,u=Yt.p,Yt.p=2,Et.T=null;try{for(var g=n.onRecoverableError,T=0;T<c.length;T++){var U=c[T];g(U.value,{componentStack:U.stack})}}finally{Et.T=a,Yt.p=u}}if(c=Dr,g=Nr,Nr=null,c!==null&&(Dr=null,g===null&&(g=[]),t!==null))for(U=0;U<c.length;U++)a=(0,c[U])(g),a!==void 0&&t.finished.finally(a);(Wi&3)!==0&&Bc(),ji(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===Oc?Zo++:(Zo=0,Oc=n):(Zo=0,Oc=null),Ko(0)}}function d0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Do(n)))}function Bc(){return wr!==null&&(wr.skipTransition(),wr=null),Dh(),Nh(),Uh(),Lh()}function Lh(){if(tn!==5)return!1;var t=wi,n=Ah;Ah=0;var a=Q(Wi),s=Et.T,c=Yt.p;try{Yt.p=32>a?32:a,Et.T=null,a=Rh,Rh=null;var u=wi,g=Wi;if(tn=0,Fs=wi=null,Wi=0,(Oe&6)!==0)throw Error(r(331));var T=Oe;if(Oe|=4,Jg(u.current),Zg(u,u.current,g,a),Oe=T,Ko(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Me,u)}catch{}return!0}finally{Yt.p=c,Et.T=s,d0(t,n)}}function p0(t,n,a){n=pi(a,n),n=Kf(t.stateNode,n,2),t=Fa(t,n,2),t!==null&&(Ss(t,2),ji(t))}function Be(t,n,a){if(t.tag===3)p0(t,t,a);else for(;n!==null;){if(n.tag===3){p0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Wa===null||!Wa.has(s))){t=pi(a,t),a=ug(2),s=Fa(n,a,2),s!==null&&(fg(a,s,n,t),Ss(s,2),ji(s));break}}n=n.return}}function Oh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Fx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Th=!0,c.add(a),t=Wx.bind(null,t,n,a),n.then(t,t))}function Wx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(Ee&a)===a&&((sn===4||sn===3&&(Ee&62914560)===Ee&&300>G()-Nc)&&(Oe&2)===0?Lr(t,0):Dc|=a,Cr===Ee&&(Cr=0)),ji(t)}function m0(t,n){n===0&&(n=Ul()),t=Es(t,n),t!==null&&(Ss(t,n),ji(t))}function jx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),m0(t,a)}function Zx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),m0(t,a)}function Kx(t,n){return ne(t,n)}var Pr=null,zr=null,Ph=!1,Fc=!1,zh=!1,Za=0;function ji(t){t!==zr&&t.next===null&&(zr===null?Pr=zr=t:zr=zr.next=t),Fc=!0,Ph||(Ph=!0,Jx())}function Ko(t,n){if(!zh&&Fc){zh=!0;do for(var a=!1,s=Pr;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var u=0;else{var g=s.suspendedLanes,T=s.pingedLanes;u=(1<<31-Nn(42|t)+1)-1,u&=c&~(g&~T),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,y0(s,u))}else u=Ee,u=ys(s,s===Ye?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Ca(s,u)||(a=!0,y0(s,u));s=s.next}while(a);zh=!1}}function Qx(){_0()}function _0(){Fc=Ph=!1;var t=0;Za!==0&&cM()&&(t=Za);for(var n=G(),a=null,s=Pr;s!==null;){var c=s.next,u=g0(s,n);u===0?(s.next=null,a===null?Pr=c:a.next=c,c===null&&(zr=a)):(a=s,(t!==0||(u&3)!==0)&&(Fc=!0)),s=c}tn!==0&&tn!==5||Ko(t),Za!==0&&(Za=0)}function g0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var g=31-Nn(u),T=1<<g,U=c[g];U===-1?((T&a)===0||(T&s)!==0)&&(c[g]=Fu(T,n)):U<=n&&(t.expiredLanes|=T),u&=~T}if(n=Ye,a=Ee,a=ys(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Zt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ca(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Zt(s),Q(a)){case 2:case 8:a=Vt;break;case 32:a=xt;break;case 268435456:a=Wt;break;default:a=xt}return s=v0.bind(null,t),a=ne(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Zt(s),t.callbackPriority=2,t.callbackNode=null,2}function v0(t,n){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Bc()&&t.callbackNode!==a)return null;var s=Ee;return s=ys(t,t===Ye?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(i0(t,s,n),g0(t,G()),t.callbackNode!=null&&t.callbackNode===a?v0.bind(null,t):null)}function y0(t,n){if(Bc())return null;i0(t,n,!0)}function Jx(){fM(function(){(Oe&6)!==0?ne(Dt,Qx):_0()})}function Ih(){if(Za===0){var t=ws;t===0&&(t=gs,gs<<=1,(gs&261888)===0&&(gs=256)),Za=t}return Za}function S0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Pl(t)}function $x(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var u=S0((c[kt]||null).action),g=s.submitter;g&&(n=(n=g[kt]||null)?S0(n.formAction):g.getAttribute("formAction"),n!==null&&(u=n,g=null));var T=new Fl("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Za!==0){var U=new FormData(c,g);qf(a,{pending:!0,data:U,method:c.method,action:u},null,U)}}else typeof u=="function"&&(T.preventDefault(),U=new FormData(c,g),qf(a,{pending:!0,data:U,method:c.method,action:u},u,U))},currentTarget:c}]})}}for(var Bh=0;Bh<cf.length;Bh++){var Fh=cf[Bh],tM=Fh.toLowerCase(),eM=Fh[0].toUpperCase()+Fh.slice(1);bi(tM,"on"+eM)}bi(Ym,"onAnimationEnd"),bi(Wm,"onAnimationIteration"),bi(jm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(ux,"onTransitionRun"),bi(fx,"onTransitionStart"),bi(hx,"onTransitionCancel"),bi(Zm,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qo));function x0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var u=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],U=T.instance,W=T.currentTarget;if(T=T.listener,U!==u&&c.isPropagationStopped())break t;u=T,c.currentTarget=W;try{u(c)}catch(nt){Vl(nt)}c.currentTarget=null,u=U}else for(g=0;g<s.length;g++){if(T=s[g],U=T.instance,W=T.currentTarget,T=T.listener,U!==u&&c.isPropagationStopped())break t;u=T,c.currentTarget=W;try{u(c)}catch(nt){Vl(nt)}c.currentTarget=null,u=U}}}}function xe(t,n){var a=n[$t];a===void 0&&(a=n[$t]=new Set);var s=t+"__bubble";a.has(s)||(M0(n,t,2,!1),a.add(s))}function Hh(t,n,a){var s=0;n&&(s|=4),M0(a,t,s,n)}var Hc="_reactListening"+Math.random().toString(36).slice(2);function Gh(t){if(!t[Hc]){t[Hc]=!0,je.forEach(function(a){a!=="selectionchange"&&(nM.has(a)||Hh(a,!1,t),Hh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Hc]||(n[Hc]=!0,Hh("selectionchange",!1,n))}}function M0(t,n,a,s){switch(fv(n)){case 2:var c=jM;break;case 8:c=ZM;break;default:c=od}a=c.bind(null,n,a,t),c=void 0,!ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Vh(t,n,a,s,c){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===c)break;if(g===4)for(g=s.return;g!==null;){var U=g.tag;if((U===3||U===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;T!==null;){if(g=Le(T),g===null)return;if(U=g.tag,U===5||U===6||U===26||U===27){s=u=g;continue t}T=T.parentNode}}s=s.return}Mm(function(){var W=u,nt=Yu(a),pt=[];t:{var X=Km.get(t);if(X!==void 0){var tt=Fl,Nt=t;switch(t){case"keypress":if(Il(a)===0)break t;case"keydown":case"keyup":tt=HS;break;case"focusin":Nt="focus",tt=Ju;break;case"focusout":Nt="blur",tt=Ju;break;case"beforeblur":case"afterblur":tt=Ju;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=CS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=qS;break;case Ym:case Wm:case jm:tt=NS;break;case Zm:tt=WS;break;case"scroll":case"scrollend":tt=AS;break;case"wheel":tt=ZS;break;case"copy":case"cut":case"paste":tt=LS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=Rm;break;case"submit":tt=XS;break;case"toggle":case"beforetoggle":tt=QS}var qt=(n&4)!==0,de=!qt&&(t==="scroll"||t==="scrollend"),Y=qt?X!==null?X+"Capture":null:X;qt=[];for(var H=W,J;H!==null;){var ht=H;if(J=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||J===null||Y===null||(ht=yo(H,Y),ht!=null&&qt.push(Jo(H,ht,J))),de)break;H=H.return}0<qt.length&&(X=new tt(X,Nt,null,a,nt),pt.push({event:X,listeners:qt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",X=t==="mouseout"||t==="pointerout",tt&&a!==qu&&(Nt=a.relatedTarget||a.fromElement)&&(Le(Nt)||Nt[ee]))break t;(X||tt)&&(Nt=nt.window===nt?nt:(tt=nt.ownerDocument)?tt.defaultView||tt.parentWindow:window,X?(tt=a.relatedTarget||a.toElement,X=W,tt=tt?Le(tt):null,tt!==null&&(de=f(tt),qt=tt.tag,tt!==de||qt!==5&&qt!==27&&qt!==6)&&(tt=null)):(X=null,tt=W),X!==tt&&(qt=bm,ht="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(qt=Rm,ht="onPointerLeave",Y="onPointerEnter",H="pointer"),de=X==null?Nt:mn(X),J=tt==null?Nt:mn(tt),Nt=new qt(ht,H+"leave",X,a,nt),Nt.target=de,Nt.relatedTarget=J,ht=null,Le(nt)===W&&(qt=new qt(Y,H+"enter",tt,a,nt),qt.target=J,qt.relatedTarget=de,ht=qt),de=ht,qt=X&&tt?B(X,tt,iM):null,X!==null&&E0(pt,Nt,X,qt,!1),tt!==null&&de!==null&&E0(pt,de,tt,qt,!0)))}t:{if(X=W?mn(W):window,tt=X.nodeName&&X.nodeName.toLowerCase(),tt==="select"||tt==="input"&&X.type==="file")var Ht=Pm;else if(Lm(X))if(zm)Ht=ox;else{Ht=sx;var Te=ax}else tt=X.nodeName,!tt||tt.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?W&&ku(W.elementType)&&(Ht=Pm):Ht=rx;if(Ht&&(Ht=Ht(t,W))){Om(pt,Ht,a,nt);break t}Te&&Te(t,X,W)}switch(Te=W?mn(W):window,t){case"focusin":(Lm(Te)||Te.contentEditable==="true")&&(ur=Te,rf=W,Ro=null);break;case"focusout":Ro=rf=ur=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,km(pt,a,nt);break;case"selectionchange":if(cx)break;case"keydown":case"keyup":km(pt,a,nt)}var Jt;if(tf)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else cr?Nm(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Cm&&a.locale!=="ko"&&(cr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&cr&&(Jt=Em()):(Da=nt,Zu="value"in Da?Da.value:Da.textContent,cr=!0)),Te=Gc(W,ae),0<Te.length&&(ae=new Am(ae,t,null,a,nt),pt.push({event:ae,listeners:Te}),Jt?ae.data=Jt:(Jt=Um(a),Jt!==null&&(ae.data=Jt)))),(Jt=$S?tx(t,a):ex(t,a))&&(ae=Gc(W,"onBeforeInput"),0<ae.length&&(Te=new Am("onBeforeInput","beforeinput",null,a,nt),pt.push({event:Te,listeners:ae}),Te.data=Jt)),$x(pt,t,W,a,nt)}x0(pt,n)})}function Jo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Gc(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=yo(t,a),c!=null&&s.unshift(Jo(t,c,u)),c=yo(t,n),c!=null&&s.push(Jo(t,c,u))),t.tag===3)return s;t=t.return}return[]}function iM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function E0(t,n,a,s,c){for(var u=n._reactName,g=[];a!==null&&a!==s;){var T=a,U=T.alternate,W=T.stateNode;if(T=T.tag,U!==null&&U===s)break;T!==5&&T!==26&&T!==27||W===null||(U=W,c?(W=yo(a,u),W!=null&&g.unshift(Jo(a,W,U))):c||(W=yo(a,u),W!=null&&g.push(Jo(a,W,U)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var aM=/\r\n?/g,sM=/\u0000|\uFFFD/g;function T0(t){return(typeof t=="string"?t:""+t).replace(aM,`
`).replace(sM,"")}function b0(t,n){return n=T0(n),T0(t)===n}function Fe(t,n,a,s,c,u){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||rr(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&rr(t,""+s);else return;break;case"className":Ol(t,"class",s);break;case"tabIndex":Ol(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ol(t,a,s);break;case"style":Sm(t,s,u);return;case"data":if(n!=="object"){Ol(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Pl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Fe(t,n,"name",c.name,c,null),Fe(t,n,"formEncType",c.formEncType,c,null),Fe(t,n,"formMethod",c.formMethod,c,null),Fe(t,n,"formTarget",c.formTarget,c,null)):(Fe(t,n,"encType",c.encType,c,null),Fe(t,n,"method",c.method,c,null),Fe(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Pl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Bi);return;case"onScroll":s!=null&&xe("scroll",t);return;case"onScrollEnd":s!=null&&xe("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Pl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),Ll(t,"popover",s);break;case"xlinkActuate":aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":aa(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":aa(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":aa(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":aa(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ll(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=TS.get(a)||a,Ll(t,a,s);else return}De=!0}function Xh(t,n,a,s,c,u){switch(a){case"style":Sm(t,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")rr(t,s);else if(typeof s=="number"||typeof s=="bigint")rr(t,""+s);else return;break;case"onScroll":s!=null&&xe("scroll",t);return;case"onScrollEnd":s!=null&&xe("scrollend",t);return;case"onClick":s!=null&&(t.onclick=Bi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!zn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),u=a.slice(2,c?a.length-7:void 0),n=t[kt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(u,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,s,c);break t}De=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ll(t,a,s)}return}De=!0}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var g=a[u];if(g!=null)switch(u){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,u,g,a,null)}}c&&Fe(t,n,"srcSet",a.srcSet,a,null),s&&Fe(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var T=u=g=c=null,U=null,W=null;for(s in a)if(a.hasOwnProperty(s)){var nt=a[s];if(nt!=null)switch(s){case"name":c=nt;break;case"type":g=nt;break;case"checked":U=nt;break;case"defaultChecked":W=nt;break;case"value":u=nt;break;case"defaultValue":T=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Fe(t,n,s,nt,a,null)}}_m(t,u,T,U,W,g,c,!1);return;case"select":xe("invalid",t),s=g=u=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":u=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:Fe(t,n,c,T,a,null)}n=u,a=g,t.multiple=!!s,n!=null?sr(t,!!s,n,!1):a!=null&&sr(t,!!s,a,!0);return;case"textarea":xe("invalid",t),u=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":c=T;break;case"children":u=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Fe(t,n,g,T,a,null)}vm(t,s,c,u);return;case"option":for(U in a)if(a.hasOwnProperty(U)&&(s=a[U],s!=null))switch(U){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Fe(t,n,U,s,a,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<Qo.length;s++)xe(Qo[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in a)if(a.hasOwnProperty(W)&&(s=a[W],s!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Fe(t,n,W,s,a,null)}return;default:if(ku(n)){for(nt in a)a.hasOwnProperty(nt)&&(s=a[nt],s!==void 0&&Xh(t,n,nt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Fe(t,n,T,s,a,null))}var rM={};function oM(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,g=null,T=null,U=null,W=null,nt=null;for(tt in a){var pt=a[tt];if(a.hasOwnProperty(tt)&&pt!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":U=pt;default:s.hasOwnProperty(tt)||Fe(t,n,tt,null,s,pt)}}for(var X in s){var tt=s[X];if(pt=a[X],s.hasOwnProperty(X)&&(tt!=null||pt!=null))switch(X){case"type":tt!==pt&&(De=!0),u=tt;break;case"name":tt!==pt&&(De=!0),c=tt;break;case"checked":tt!==pt&&(De=!0),W=tt;break;case"defaultChecked":tt!==pt&&(De=!0),nt=tt;break;case"value":tt!==pt&&(De=!0),g=tt;break;case"defaultValue":tt!==pt&&(De=!0),T=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:tt!==pt&&Fe(t,n,X,tt,s,pt)}}Vu(t,g,T,U,W,nt,u,c);return;case"select":tt=g=T=X=null;for(u in a)if(U=a[u],a.hasOwnProperty(u)&&U!=null)switch(u){case"value":break;case"multiple":tt=U;default:s.hasOwnProperty(u)||Fe(t,n,u,null,s,U)}for(c in s)if(u=s[c],U=a[c],s.hasOwnProperty(c)&&(u!=null||U!=null))switch(c){case"value":u!==U&&(De=!0),X=u;break;case"defaultValue":u!==U&&(De=!0),T=u;break;case"multiple":u!==U&&(De=!0),g=u;default:u!==U&&Fe(t,n,c,u,s,U)}n=T,a=g,s=tt,X!=null?sr(t,!!a,X,!1):!!s!=!!a&&(n!=null?sr(t,!!a,n,!0):sr(t,!!a,a?[]:"",!1));return;case"textarea":tt=X=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Fe(t,n,T,null,s,c)}for(g in s)if(c=s[g],u=a[g],s.hasOwnProperty(g)&&(c!=null||u!=null))switch(g){case"value":c!==u&&(De=!0),X=c;break;case"defaultValue":c!==u&&(De=!0),tt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==u&&Fe(t,n,g,c,s,u)}gm(t,X,tt);return;case"option":for(var Nt in a)if(X=a[Nt],a.hasOwnProperty(Nt)&&X!=null&&!s.hasOwnProperty(Nt))switch(Nt){case"selected":t.selected=!1;break;default:Fe(t,n,Nt,null,s,X)}for(U in s)if(X=s[U],tt=a[U],s.hasOwnProperty(U)&&X!==tt&&(X!=null||tt!=null))switch(U){case"selected":X!==tt&&(De=!0),t.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:Fe(t,n,U,X,s,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var qt in a)X=a[qt],a.hasOwnProperty(qt)&&X!=null&&!s.hasOwnProperty(qt)&&Fe(t,n,qt,null,s,X);for(W in s)if(X=s[W],tt=a[W],s.hasOwnProperty(W)&&X!==tt&&(X!=null||tt!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,n));break;default:Fe(t,n,W,X,s,tt)}return;default:if(ku(n)){for(var de in a)X=a[de],a.hasOwnProperty(de)&&X!==void 0&&!s.hasOwnProperty(de)&&Xh(t,n,de,void 0,s,X);for(nt in s)X=s[nt],tt=a[nt],!s.hasOwnProperty(nt)||X===tt||X===void 0&&tt===void 0||Xh(t,n,nt,X,s,tt);return}}for(var Y in a)X=a[Y],a.hasOwnProperty(Y)&&X!=null&&!s.hasOwnProperty(Y)&&Fe(t,n,Y,null,s,X);for(pt in s)X=s[pt],tt=a[pt],!s.hasOwnProperty(pt)||X===tt||X==null&&tt==null||Fe(t,n,pt,X,s,tt)}function A0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],u=c.transferSize,g=c.initiatorType,T=c.duration;if(u&&T&&A0(g)){for(g=0,T=c.responseEnd,s+=1;s<a.length;s++){var U=a[s],W=U.startTime;if(W>T)break;var nt=U.transferSize,pt=U.initiatorType;nt&&A0(pt)&&(U=U.responseEnd,g+=nt*(U<T?1:(T-W)/(U-W)))}if(--s,n+=8*(u+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var kh=null,qh=null;function $o(t){return t.nodeType===9?t:t.ownerDocument}function R0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function w0(t,n,a,s){return a=$o(a).createElement(t),a[wt]=s,a[kt]=n,Cn(a,t,n),we(a),a}function Yh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wh=null;function cM(){var t=window.event;return t&&t.type==="popstate"?t===Wh?!1:(Wh=t,!0):(Wh=null,!1)}var jh=typeof setTimeout=="function"?setTimeout:void 0,uM=typeof clearTimeout=="function"?clearTimeout:void 0,D0=typeof Promise=="function"?Promise:void 0,N0=typeof requestAnimationFrame=="function"?requestAnimationFrame:jh,fM=typeof queueMicrotask=="function"?queueMicrotask:typeof D0<"u"?function(t){return D0.resolve(null).then(t).catch(hM)}:jh;function hM(t){setTimeout(function(){throw t})}function Ka(t){return t==="head"}function U0(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),Xr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")nd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,nd(a);for(var u=a.firstChild;u;){var g=u.nextSibling,T=u.nodeName;u[Ue]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=g}}else a==="body"&&nd(t.ownerDocument.body);a=c}while(a);Xr(n)}function L0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function O0(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var u=n[c];0<u.width&&0<u.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function P0(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function dM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Zh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return dM(n,a,t)}function pM(t){return t.documentElement.clientHeight}function mM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function _M(t,n,a,s,c,u,g,T,U){var W=n.nodeType===9?n:n.ownerDocument;try{var nt=W.startViewTransition({update:function(){var X=W.defaultView,tt=X.navigation&&X.navigation.transition,Nt=W.fonts.status;s();var qt=[];if(Nt==="loaded"&&(pM(W),W.fonts.status==="loading"&&qt.push(W.fonts.ready)),Nt=qt.length,t!==null)for(var de=t.suspenseyImages,Y=0,H=0;H<de.length;H++){var J=de[H];if(!J.complete){var ht=J.getBoundingClientRect();if(0<ht.bottom&&0<ht.right&&ht.top<X.innerHeight&&ht.left<X.innerWidth){if(Y+=nv(J),Y>kc){qt.length=Nt;break}J=new Promise(mM.bind(J)),qt.push(J)}}}if(0<qt.length)return X=Promise.race([Promise.all(qt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(c,c),(tt?Promise.allSettled([tt.finished,X]):X).then(u,u);if(c(),tt)return tt.finished.then(u,u);u()},types:a});W.__reactViewTransition=nt;var pt=[];return nt.ready.then(function(){for(var X=W.documentElement.getAnimations({subtree:!0}),tt=0;tt<X.length;tt++){var Nt=X[tt],qt=Nt.effect,de=qt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){pt.push(Nt),Nt=qt.getKeyframes();for(var Y=de=void 0,H=!0,J=0;J<Nt.length;J++){var ht=Nt[J],Ht=ht.width;if(de===void 0)de=Ht;else if(de!==Ht){H=!1;break}if(Ht=ht.height,Y===void 0)Y=Ht;else if(Y!==Ht){H=!1;break}delete ht.width,delete ht.height,ht.transform==="none"&&delete ht.transform}H&&de!==void 0&&Y!==void 0&&(qt.setKeyframes(Nt),H=getComputedStyle(qt.target,qt.pseudoElement),H.width!==de||H.height!==Y)&&(H=Nt[0],H.width=de,H.height=Y,H=Nt[Nt.length-1],H.width=de,H.height=Y,qt.setKeyframes(Nt))}}g()},function(X){W.__reactViewTransition===nt&&(W.__reactViewTransition=null);try{if(typeof X=="object"&&X!==null)switch(X.name){case"InvalidStateError":(X.message==="View transition was skipped because document visibility state is hidden."||X.message==="Skipping view transition because document visibility state has become hidden."||X.message==="Skipping view transition because viewport size changed."||X.message==="Transition was aborted because of invalid state")&&(X=null)}X!==null&&U(X)}finally{s(),c(),g()}}),nt.finished.finally(function(){for(var X=0;X<pt.length;X++)pt[X].cancel();W.__reactViewTransition===nt&&(W.__reactViewTransition=null),T()}),nt}catch{return s(),c(),g(),null}}function Hs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Hs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:L({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Hs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var u=a[c].effect;u!==null&&u.target===t&&u.pseudoElement===n&&s.push(a[c])}return s},Hs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function z0(t){return{name:t,group:new Hs("group",t),imagePair:new Hs("image-pair",t),old:new Hs("old",t),new:new Hs("new",t)}}function oi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}oi.prototype.addEventListener=function(t,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(B0(u,t,n,a)===-1){var g=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(U){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,U):n.handleEvent(U)}),s!==null&&(c=g.removeEventListener.bind(g,t,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Ir(a),u.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:c}),_(this._fragmentFiber.child,!1,gM,t,T,s)}this._eventListeners=u}};function gM(t,n,a,s){return M(t).addEventListener(n,a,s),!1}oi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=B0(s,t,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var u=c.cleanup;c=Ir(c.optionsOrUseCapture),_(this._fragmentFiber.child,!1,vM,t,a,c),s.splice(n,1),u!==null&&u()}};function vM(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Ir(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function I0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function B0(t,n,a,s){if(t.length===0)return-1;s=I0(s);for(var c=0;c<t.length;c++){var u=t[c];if(u.type===n&&u.listener===a&&I0(u.optionsOrUseCapture)===s)return c}return-1}oi.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var u=a[c];s.addEventListener(u.type,u.attachedListener,Ir(u.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(c=0;c<a.length;c++)u=a[c],s.removeEventListener(u.type,u.attachedListener,Ir(u.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},oi.prototype.focus=function(t){_(this._fragmentFiber.child,!0,F0,t,void 0,void 0)};function F0(t,n){return t.tag===6?!1:(t=M(t),DM(t,n))}oi.prototype.focusLast=function(t){var n=[];_(this._fragmentFiber.child,!0,Kh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!F0(n[a],t);a--);};function Kh(t,n){return n.push(t),!1}oi.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=M(t),t=$o(t).activeElement,t!==null&&_(this._fragmentFiber.child,!1,yM,t,void 0,void 0))};function yM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}oi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),_(this._fragmentFiber.child,!1,SM,t,void 0,void 0)};function SM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}oi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),_(this._fragmentFiber.child,!1,xM,t,void 0,void 0);for(var a=n=0;a<Di.length;a++){var s=Di[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Di[n++]=s}Di.length=n}};function xM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Di=[],Qh=!1;function MM(t,n,a){Di.push({fragmentInstance:t,observer:n,instance:a}),Qh||(Qh=!0,NM(function(){Qh=!1;var s=Di;Di=[];for(var c=0;c<s.length;c++){var u=s[c];u.observer.unobserve(u.instance)}}))}oi.prototype.getClientRects=function(){var t=[];return _(this._fragmentFiber.child,!1,EM,t,void 0,void 0),t};function EM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}oi.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},oi.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,Kh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,x(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var u=x(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),T=c.compareDocumentPosition(t),U=g&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=s&&u&&g&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||u&&c===t||U||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!u&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||TM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function TM(t,n,a,s,c){var u=Le(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=c.ownerDocument,c===u||c===u.documentElement||c===u.body;t:{for(u=n,n=y(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=B(a,u,F),n===null?n=!1:(_(n,!0,P,u,a),u=S,S=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=B(s,u,F),n===null?n=!1:(_(n,!0,w,u,s),u=S,O=S=null,n=u!==null)),n):!1}function H0(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}oi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];_(this._fragmentFiber.child,!1,Kh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=E(this._fragmentFiber);if(s=a?s[1]||s[0]||y(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),H0(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=M(c),H0(c,a)):M(c).scrollIntoView(t),s+=a?-1:1}};function bM(t,n){return t=M(t),G0(t,n),!1}function G0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function V0(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.addEventListener(c.type,c.attachedListener,Ir(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var g=0,T=0;T<Di.length;T++){var U=Di[T];(U.fragmentInstance!==n||U.observer!==u||U.instance!==t)&&(Di[g++]=U)}Di.length=g,u.observe(t)}),G0(t,n))}function AM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];t.removeEventListener(c.type,c.attachedListener,Ir(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?MM(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Jh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jh(a),te(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function RM(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ue])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function CM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yi(t.nextSibling),t===null))return null;return t}function X0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function $h(t){return t.data==="$?"||t.data==="$~"}function td(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function wM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ed=null;function k0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return yi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function q0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function DM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function NM(t){N0(function(){N0(function(n){return t(n)})})}function Y0(t,n,a){switch(n=$o(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function W0(t,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&Fe(t,n,s,null,rM,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Bi&&(t.onclick=null),te(t)}function nd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);te(t)}var Si=new Map,j0=new Set;function tl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ga=Yt.d;Yt.d={f:UM,r:LM,D:OM,C:PM,L:zM,m:IM,X:FM,S:BM,M:HM};function UM(){var t=ga.f(),n=Pc();return t||n}function LM(t){var n=_e(t);n!==null&&n.tag===5&&n.type==="form"?K_(n):ga.r(t)}var Br=typeof document>"u"?null:document;function Z0(t,n,a){var s=Br;if(s&&typeof n=="string"&&n){var c=hi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),j0.has(c)||(j0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Cn(n,"link",t),we(n),s.head.appendChild(n)))}}function OM(t){ga.D(t),Z0("dns-prefetch",t,null)}function PM(t,n){ga.C(t,n),Z0("preconnect",t,n)}function zM(t,n,a){ga.L(t,n,a);var s=Br;if(s&&t&&n){var c='link[rel="preload"][as="'+hi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+hi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+hi(a.imageSizes)+'"]')):c+='[href="'+hi(t)+'"]';var u=c;switch(n){case"style":u=Fr(t);break;case"script":u=Hr(t)}if(!(Si.has(u)||(t=L({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Si.set(u,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(el(u))||n==="script"&&s.querySelector(nl(u))))){var g=s.createElement("link");Cn(g,"link",t),n==="style"&&(g[Ce]=!0,g.onload=g.onerror=function(){wa(g)}),we(g),s.head.appendChild(g)}}}function IM(t,n){ga.m(t,n);var a=Br;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+hi(s)+'"][href="'+hi(t)+'"]',u=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Hr(t)}if(!Si.has(u)&&(t=L({rel:"modulepreload",href:t},n),Si.set(u,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(nl(u)))return}s=a.createElement("link"),Cn(s,"link",t),we(s),a.head.appendChild(s)}}}function BM(t,n,a){ga.S(t,n,a);var s=Br;if(s&&t){var c=$n(s).hoistableStyles,u=Fr(t);n=n||"default";var g=c.get(u);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(el(u)))T.loading=5;else{t=L({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Si.get(u))&&id(t,a);var U=g=s.createElement("link");we(U),Cn(U,"link",t),U._p=new Promise(function(W,nt){U.onload=W,U.onerror=nt}),U.addEventListener("load",function(){T.loading|=1}),U.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Vc(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},c.set(u,g)}}}function FM(t,n){ga.X(t,n);var a=Br;if(a&&t){var s=$n(a).hoistableScripts,c=Hr(t),u=s.get(c);u||(u=a.querySelector(nl(c)),u||(t=L({src:t,async:!0},n),(n=Si.get(c))&&ad(t,n),u=a.createElement("script"),we(u),Cn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function HM(t,n){ga.M(t,n);var a=Br;if(a&&t){var s=$n(a).hoistableScripts,c=Hr(t),u=s.get(c);u||(u=a.querySelector(nl(c)),u||(t=L({src:t,async:!0,type:"module"},n),(n=Si.get(c))&&ad(t,n),u=a.createElement("script"),we(u),Cn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function K0(t,n,a,s){var c=(c=qe.current)?tl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Fr(a.href),n=$n(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Fr(a.href);var u=$n(c).hoistableStyles,g=u.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,g),(u=c.querySelector(el(t)))?u._p||(g.instance=u,g.state.loading=5):(u=Si.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(t,u)),GM(c,t,u,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Hr(a),n=$n(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Fr(t){return'href="'+hi(t)+'"'}function el(t){return'link[rel="stylesheet"]['+t+"]"}function Q0(t){return L({},t,{"data-precedence":t.precedence,precedence:null})}function GM(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ce]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Ce]=!0,n.onload=n.onerror=wa.bind(null,n),Cn(n,"link",a),we(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Hr(t){return'[src="'+hi(t)+'"]'}function nl(t){return"script[async]"+t}function J0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+hi(a.href)+'"]');if(s)return n.instance=s,we(s),s;var c=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),we(s),Cn(s,"style",c),Vc(s,a.precedence,t),n.instance=s;case"stylesheet":c=Fr(a.href);var u=t.querySelector(el(c));if(u)return n.state.loading|=4,n.instance=u,we(u),u;s=Q0(a),(c=Si.get(c))&&id(s,c),u=(t.ownerDocument||t).createElement("link"),we(u);var g=u;return g._p=new Promise(function(T,U){g.onload=T,g.onerror=U}),Cn(u,"link",s),n.state.loading|=4,Vc(u,a.precedence,t),n.instance=u;case"script":return u=Hr(a.src),(c=t.querySelector(nl(u)))?(n.instance=c,we(c),c):(s=a,(c=Si.get(u))&&(s=L({},a),ad(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),we(c),Cn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Vc(s,a.precedence,t));return n.instance}function Vc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,u=c,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)u=T;else if(u!==c)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Xc=null;function $0(t,n,a){if(Xc===null){var s=new Map,c=Xc=new Map;c.set(a,s)}else c=Xc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var u=a[c];if(!(u[Ue]||u[wt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var g=u.getAttribute(n)||"";g=t+g;var T=s.get(g);T?T.push(u):s.set(g,[u])}}return s}function sd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function VM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function tv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function ev(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function nv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function iv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=nv(n),t.suspenseyImages.push(n)),t=qM.bind(t),n.decode().then(t,t))}function XM(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Fr(s.href),u=n.querySelector(el(c));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=il.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=u,we(u);return}u=n.ownerDocument||n,s=Q0(s),(c=Si.get(c))&&id(s,c),u=u.createElement("link"),we(u);var g=u;g._p=new Promise(function(T,U){g.onload=T,g.onerror=U}),Cn(u,"link",s),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=il.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var kc=0;function kM(t,n){return t.stylesheets&&t.count===0&&Yc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Yc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&kc===0&&(kc=62500*lM());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>kc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function av(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Yc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function il(){this.count--,av(this)}function qM(){this.imgCount--,av(this)}var qc=null;function Yc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,qc=new Map,n.forEach(YM,t),qc=null,il.call(t))}function YM(t,n){if(!(n.state.loading&4)){var a=qc.get(t);if(a)var s=a.get(null);else{a=new Map,qc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var g=c[u];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),u=a.get(g)||s,u===s&&a.set(null,c),a.set(g,c),this.count++,s=il.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),u?u.parentNode.insertBefore(c,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Gr={$$typeof:lt,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function WM(t,n,a,s,c,u,g,T,U){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vo(0),this.hiddenUpdates=vo(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=U,this.transitionTypes=null,this.incompleteTransitions=new Map}function sv(t,n,a,s,c,u,g,T,U,W,nt,pt){return t=new WM(t,n,a,g,U,W,nt,pt,T),n=1,u===!0&&(n|=24),u=Xn(3,null,null,n),t.current=u,u.stateNode=t,n=Sf(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:n},Tf(u),t}function rv(t){return t?(t=dr,t):dr}function ov(t,n,a,s,c,u){c=rv(c),s.context===null?s.context=c:s.pendingContext=c,s=Ba(n),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=Fa(t,s,n),a!==null&&(Wn(a,t,n),Oo(a,t,n))}function lv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function rd(t,n){lv(t,n),(t=t.alternate)&&lv(t,n)}function cv(t){if(t.tag===13||t.tag===31){var n=Es(t,67108864);n!==null&&Wn(n,t,67108864),rd(t,67108864)}}function uv(t){if(t.tag===13||t.tag===31){var n=ri();n=ot(n);var a=Es(t,n);a!==null&&Wn(a,t,n),rd(t,n)}}var Vr=!0;function jM(t,n,a,s){var c=Et.T;Et.T=null;var u=Yt.p;try{Yt.p=2,od(t,n,a,s)}finally{Yt.p=u,Et.T=c}}function ZM(t,n,a,s){var c=Et.T;Et.T=null;var u=Yt.p;try{Yt.p=8,od(t,n,a,s)}finally{Yt.p=u,Et.T=c}}function od(t,n,a,s){if(Vr){var c=ld(s);if(c===null)Vh(t,n,s,Wc,a),hv(t,s);else if(QM(c,t,n,a,s))s.stopPropagation();else if(hv(t,s),n&4&&-1<KM.indexOf(t)){for(;c!==null;){var u=_e(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var g=fi(u.pendingLanes);if(g!==0){var T=u;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var U=1<<31-Nn(g);T.entanglements[1]|=U,g&=~U}ji(u),(Oe&6)===0&&(Uc=G()+500,Ko(0))}}break;case 31:case 13:T=Es(u,2),T!==null&&Wn(T,u,2),Pc(),rd(u,2)}if(u=ld(s),u===null&&Vh(t,n,s,Wc,a),u===c)break;c=u}c!==null&&s.stopPropagation()}else Vh(t,n,s,null,a)}}function ld(t){return t=Yu(t),cd(t)}var Wc=null;function cd(t){if(Wc=null,t=Le(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Wc=t,null}function fv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case Dt:return 2;case Vt:return 8;case xt:case _t:return 32;case Wt:return 268435456;default:return 32}default:return 32}}var ud=!1,Qa=null,Ja=null,$a=null,al=new Map,sl=new Map,ts=[],KM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hv(t,n){switch(t){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":al.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(n.pointerId)}}function rl(t,n,a,s,c,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[c]},n!==null&&(n=_e(n),n!==null&&cv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function QM(t,n,a,s,c){switch(n){case"focusin":return Qa=rl(Qa,t,n,a,s,c),!0;case"dragenter":return Ja=rl(Ja,t,n,a,s,c),!0;case"mouseover":return $a=rl($a,t,n,a,s,c),!0;case"pointerover":var u=c.pointerId;return al.set(u,rl(al.get(u)||null,t,n,a,s,c)),!0;case"gotpointercapture":return u=c.pointerId,sl.set(u,rl(sl.get(u)||null,t,n,a,s,c)),!0}return!1}function dv(t){var n=Le(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,zt(t.priority,function(){uv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,zt(t.priority,function(){uv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ld(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);qu=s,a.target.dispatchEvent(s),qu=null}else return n=_e(a),n!==null&&cv(n),t.blockedOn=a,!1;n.shift()}return!0}function pv(t,n,a){jc(t)&&a.delete(n)}function JM(){ud=!1,Qa!==null&&jc(Qa)&&(Qa=null),Ja!==null&&jc(Ja)&&(Ja=null),$a!==null&&jc($a)&&($a=null),al.forEach(pv),sl.forEach(pv)}function Zc(t,n){t.blockedOn===n&&(t.blockedOn=null,ud||(ud=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,JM)))}var Kc=null;function mv(t){Kc!==t&&(Kc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Kc===t&&(Kc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(cd(s||a)===null)continue;break}var u=_e(a);u!==null&&(t.splice(n,3),n-=3,qf(u,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Xr(t){function n(U){return Zc(U,t)}Qa!==null&&Zc(Qa,t),Ja!==null&&Zc(Ja,t),$a!==null&&Zc($a,t),al.forEach(n),sl.forEach(n);for(var a=0;a<ts.length;a++){var s=ts[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<ts.length&&(a=ts[0],a.blockedOn===null);)dv(a),a.blockedOn===null&&ts.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],u=a[s+1],g=c[kt]||null;if(typeof u=="function")g||mv(a);else if(g){var T=null;if(u&&u.hasAttribute("formAction")){if(c=u,g=u[kt]||null)T=g.formAction;else if(cd(c)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),mv(a)}}}function _v(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function fd(t){this._internalRoot=t}Qc.prototype.render=fd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ri();ov(a,s,t,n,null,null)},Qc.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ov(t.current,2,null,t,null,null),Pc(),n[ee]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ts.length&&n!==0&&n<ts[a].priority;a++);ts.splice(a,0,t),a===0&&dv(t)}};var gv=e.version;if(gv!=="19.3.0")throw Error(r(527,gv,"19.3.0"));Yt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var $M={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Et,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jc.isDisabled&&Jc.supportsFiber)try{Me=Jc.inject($M),$e=Jc}catch{}}return ll.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=rg,u=og,g=lg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=sv(t,1,!1,null,null,a,s,null,c,u,g,_v),t[ee]=n.current,Gh(t),new fd(n)},ll.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",u=rg,g=og,T=lg,U=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(U=a.formState)),n=sv(t,1,!0,n,a??null,s,c,U,u,g,T,_v),n.context=rv(null),a=n.current,s=ri(),s=ot(s),c=Ba(s),c.callback=null,Fa(a,c,s),a=s,n.current.lanes=a,Ss(n,a),ji(n),t[ee]=n.current,Gh(t),new Qc(n)},ll.version="19.3.0",ll}var Rv;function cE(){if(Rv)return pd.exports;Rv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),pd.exports=lE(),pd.exports}var uE=cE();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qp="180",ro={ROTATE:0,DOLLY:1,PAN:2},ao={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fE=0,Cv=1,hE=2,Iy=1,dE=2,Ea=3,hs=0,Qn=1,Kn=2,us=0,oo=1,wv=2,Dv=3,Nv=4,pE=5,js=100,mE=101,_E=102,gE=103,vE=104,yE=200,SE=201,xE=202,ME=203,ep=204,np=205,EE=206,TE=207,bE=208,AE=209,RE=210,CE=211,wE=212,DE=213,NE=214,ip=0,ap=1,sp=2,co=3,rp=4,op=5,lp=6,cp=7,By=0,UE=1,LE=2,fs=0,OE=1,PE=2,zE=3,IE=4,BE=5,FE=6,HE=7,Fy=300,uo=301,fo=302,up=303,fp=304,Pu=306,hp=1e3,Ks=1001,dp=1002,zi=1003,GE=1004,$c=1005,Ki=1006,vd=1007,Qs=1008,$i=1009,Hy=1010,Gy=1011,gl=1012,Jp=1013,Js=1014,Aa=1015,El=1016,$p=1017,tm=1018,vl=1020,Vy=35902,Xy=35899,ky=1021,qy=1022,Pi=1023,yl=1026,Sl=1027,Yy=1028,em=1029,Wy=1030,nm=1031,im=1033,Au=33776,Ru=33777,Cu=33778,wu=33779,pp=35840,mp=35841,_p=35842,gp=35843,vp=36196,yp=37492,Sp=37496,xp=37808,Mp=37809,Ep=37810,Tp=37811,bp=37812,Ap=37813,Rp=37814,Cp=37815,wp=37816,Dp=37817,Np=37818,Up=37819,Lp=37820,Op=37821,Pp=36492,zp=36494,Ip=36495,Bp=36283,Fp=36284,Hp=36285,Gp=36286,VE=3200,XE=3201,jy=0,kE=1,cs="",Mi="srgb",ho="srgb-linear",Uu="linear",Xe="srgb",kr=7680,Uv=519,qE=512,YE=513,WE=514,Zy=515,jE=516,ZE=517,KE=518,QE=519,Lv=35044,Ov="300 es",Qi=2e3,Lu=2001;class ir{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Du=Math.PI/180,Vp=180/Math.PI;function Tl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function ve(o,e,i){return Math.max(e,Math.min(i,o))}function JE(o,e){return(o%e+e)%e}function yd(o,e,i){return(1-i)*o+i*e}function cl(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const $E={DEG2RAD:Du};class ue{constructor(e=0,i=0){ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*r-h*l+e.x,this.y=f*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $s{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,f,h,d){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3];const y=f[h+0],x=f[h+1],E=f[h+2],A=f[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_;return}if(d===1){e[i+0]=y,e[i+1]=x,e[i+2]=E,e[i+3]=A;return}if(_!==A||m!==y||p!==x||v!==E){let M=1-d;const S=m*y+p*x+v*E+_*A,O=S>=0?1:-1,P=1-S*S;if(P>Number.EPSILON){const F=Math.sqrt(P),B=Math.atan2(F,S*O);M=Math.sin(M*B)/F,d=Math.sin(d*B)/F}const w=d*O;if(m=m*M+y*w,p=p*M+x*w,v=v*M+E*w,_=_*M+A*w,M===1-d){const F=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=F,p*=F,v*=F,_*=F}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,f,h){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=f[h],y=f[h+1],x=f[h+2],E=f[h+3];return e[i]=d*E+v*_+m*x-p*y,e[i+1]=m*E+v*y+p*_-d*x,e[i+2]=p*E+v*x+d*y-m*_,e[i+3]=v*E-d*_-m*y-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),_=d(f/2),y=m(r/2),x=m(l/2),E=m(f/2);switch(h){case"XYZ":this._x=y*v*_+p*x*E,this._y=p*x*_-y*v*E,this._z=p*v*E+y*x*_,this._w=p*v*_-y*x*E;break;case"YXZ":this._x=y*v*_+p*x*E,this._y=p*x*_-y*v*E,this._z=p*v*E-y*x*_,this._w=p*v*_+y*x*E;break;case"ZXY":this._x=y*v*_-p*x*E,this._y=p*x*_+y*v*E,this._z=p*v*E+y*x*_,this._w=p*v*_-y*x*E;break;case"ZYX":this._x=y*v*_-p*x*E,this._y=p*x*_+y*v*E,this._z=p*v*E-y*x*_,this._w=p*v*_+y*x*E;break;case"YZX":this._x=y*v*_+p*x*E,this._y=p*x*_+y*v*E,this._z=p*v*E-y*x*_,this._w=p*v*_-y*x*E;break;case"XZY":this._x=y*v*_-p*x*E,this._y=p*x*_-y*v*E,this._z=p*v*E+y*x*_,this._w=p*v*_+y*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],f=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],_=i[10],y=r+d+_;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(v-m)*x,this._y=(f-p)*x,this._z=(h-l)*x}else if(r>d&&r>_){const x=2*Math.sqrt(1+r-d-_);this._w=(v-m)/x,this._x=.25*x,this._y=(l+h)/x,this._z=(f+p)/x}else if(d>_){const x=2*Math.sqrt(1+d-r-_);this._w=(f-p)/x,this._x=(l+h)/x,this._y=.25*x,this._z=(m+v)/x}else{const x=2*Math.sqrt(1+_-r-d);this._w=(h-l)/x,this._x=(f+p)/x,this._y=(m+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ve(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,f=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+h*d+l*p-f*m,this._y=l*v+h*m+f*d-r*p,this._z=f*v+h*p+r*m-l*d,this._w=h*v-r*d-l*m-f*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,f=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=f,this;const m=1-d*d;if(m<=Number.EPSILON){const x=1-i;return this._w=x*h+i*this._w,this._x=x*r+i*this._x,this._y=x*l+i*this._y,this._z=x*f+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),_=Math.sin((1-i)*v)/p,y=Math.sin(i*v)/p;return this._w=h*_+this._w*y,this._x=r*_+this._x*y,this._y=l*_+this._y*y,this._z=f*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,i=0,r=0){k.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Pv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Pv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*r+f[6]*l,this.y=f[1]*i+f[4]*r+f[7]*l,this.z=f[2]*i+f[5]*r+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*r+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*r+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*r+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*r+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,f=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),v=2*(d*i-f*l),_=2*(f*r-h*i);return this.x=i+m*p+h*_-d*v,this.y=r+m*v+d*p-f*_,this.z=l+m*_+f*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l,this.y=f[1]*i+f[5]*r+f[9]*l,this.z=f[2]*i+f[6]*r+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,f=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-f*d,this.y=f*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ve(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sd=new k,Pv=new $s;class pe{constructor(e,i,r,l,f,h,d,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,m,p)}set(e,i,r,l,f,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=f,v[5]=m,v[6]=r,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],v=r[4],_=r[7],y=r[2],x=r[5],E=r[8],A=l[0],M=l[3],S=l[6],O=l[1],P=l[4],w=l[7],F=l[2],B=l[5],L=l[8];return f[0]=h*A+d*O+m*F,f[3]=h*M+d*P+m*B,f[6]=h*S+d*w+m*L,f[1]=p*A+v*O+_*F,f[4]=p*M+v*P+_*B,f[7]=p*S+v*w+_*L,f[2]=y*A+x*O+E*F,f[5]=y*M+x*P+E*B,f[8]=y*S+x*w+E*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-r*f*v+r*d*m+l*f*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],_=v*h-d*p,y=d*m-v*f,x=p*f-h*m,E=i*_+r*y+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(l*p-v*r)*A,e[2]=(d*r-l*h)*A,e[3]=y*A,e[4]=(v*i-l*m)*A,e[5]=(l*f-d*i)*A,e[6]=x*A,e[7]=(r*m-p*i)*A,e[8]=(h*i-r*f)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,f,h,d){const m=Math.cos(f),p=Math.sin(f);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(xd.makeScale(e,i)),this}rotate(e){return this.premultiply(xd.makeRotation(-e)),this}translate(e,i){return this.premultiply(xd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xd=new pe;function Ky(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ou(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function tT(){const o=Ou("canvas");return o.style.display="block",o}const zv={};function xl(o){o in zv||(zv[o]=!0,console.warn(o))}function eT(o,e,i){return new Promise(function(r,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:r()}}setTimeout(f,i)})}const Iv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nT(){const o={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Xe&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=lo(l.r),l.g=lo(l.g),l.b=lo(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cs?Uu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return xl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return xl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ho]:{primaries:e,whitePoint:r,transfer:Uu,toXYZ:Iv,fromXYZ:Bv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:r,transfer:Xe,toXYZ:Iv,fromXYZ:Bv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),o}const Ne=nT();function Ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function lo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let qr;class iT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{qr===void 0&&(qr=Ou("canvas")),qr.width=e.width,qr.height=e.height;const l=qr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=qr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ou("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=Ra(f[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ra(i[r]/255)*255):i[r]=Ra(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aT=0;class am{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=Tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(Md(l[h].image)):f.push(Md(l[h]))}else f=Md(l);r.url=f}return i||(e.images[this.uuid]=r),r}}function Md(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?iT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sT=0;const Ed=new k;class Jn extends ir{constructor(e=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,r=Ks,l=Ks,f=Ki,h=Qs,d=Pi,m=$i,p=Jn.DEFAULT_ANISOTROPY,v=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=Tl(),this.name="",this.source=new am(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hp:e.x=e.x-Math.floor(e.x);break;case Ks:e.x=e.x<0?0:1;break;case dp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hp:e.y=e.y-Math.floor(e.y);break;case Ks:e.y=e.y<0?0:1;break;case dp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Fy;Jn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,f;const m=e.elements,p=m[0],v=m[4],_=m[8],y=m[1],x=m[5],E=m[9],A=m[2],M=m[6],S=m[10];if(Math.abs(v-y)<.01&&Math.abs(_-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+y)<.1&&Math.abs(_+A)<.1&&Math.abs(E+M)<.1&&Math.abs(p+x+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,w=(x+1)/2,F=(S+1)/2,B=(v+y)/4,L=(_+A)/4,q=(E+M)/4;return P>w&&P>F?P<.01?(r=0,l=.707106781,f=.707106781):(r=Math.sqrt(P),l=B/r,f=L/r):w>F?w<.01?(r=.707106781,l=0,f=.707106781):(l=Math.sqrt(w),r=B/l,f=q/l):F<.01?(r=.707106781,l=.707106781,f=0):(f=Math.sqrt(F),r=L/f,l=q/f),this.set(r,l,f,i),this}let O=Math.sqrt((M-E)*(M-E)+(_-A)*(_-A)+(y-v)*(y-v));return Math.abs(O)<.001&&(O=1),this.x=(M-E)/O,this.y=(_-A)/O,this.z=(y-v)/O,this.w=Math.acos((p+x+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ve(this.x,e.x,i.x),this.y=ve(this.y,e.y,i.y),this.z=ve(this.z,e.z,i.z),this.w=ve(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ve(this.x,e,i),this.y=ve(this.y,e,i),this.z=ve(this.z,e,i),this.w=ve(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rT extends ir{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},f=new Jn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ki,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new am(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends rT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Qy extends Jn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zi,this.minFilter=zi,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oT extends Jn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=zi,this.minFilter=zi,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bl{constructor(e=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ni.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ni.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ni.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const f=r.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ni):Ni.fromBufferAttribute(f,h),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tu.copy(r.boundingBox)),tu.applyMatrix4(e.matrixWorld),this.union(tu)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ul),eu.subVectors(this.max,ul),Yr.subVectors(e.a,ul),Wr.subVectors(e.b,ul),jr.subVectors(e.c,ul),ns.subVectors(Wr,Yr),is.subVectors(jr,Wr),Gs.subVectors(Yr,jr);let i=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Gs.z,Gs.y,ns.z,0,-ns.x,is.z,0,-is.x,Gs.z,0,-Gs.x,-ns.y,ns.x,0,-is.y,is.x,0,-Gs.y,Gs.x,0];return!Td(i,Yr,Wr,jr,eu)||(i=[1,0,0,0,1,0,0,0,1],!Td(i,Yr,Wr,jr,eu))?!1:(nu.crossVectors(ns,is),i=[nu.x,nu.y,nu.z],Td(i,Yr,Wr,jr,eu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new k,new k,new k,new k,new k,new k,new k,new k],Ni=new k,tu=new bl,Yr=new k,Wr=new k,jr=new k,ns=new k,is=new k,Gs=new k,ul=new k,eu=new k,nu=new k,Vs=new k;function Td(o,e,i,r,l){for(let f=0,h=o.length-3;f<=h;f+=3){Vs.fromArray(o,f);const d=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),m=e.dot(Vs),p=i.dot(Vs),v=r.dot(Vs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const lT=new bl,fl=new k,bd=new k;class sm{constructor(e=new k,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):lT.setFromPoints(e).getCenter(r);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,r.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fl.subVectors(e,this.center);const i=fl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(fl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fl.copy(e.center).add(bd)),this.expandByPoint(fl.copy(e.center).sub(bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ya=new k,Ad=new k,iu=new k,as=new k,Rd=new k,au=new k,Cd=new k;class rm{constructor(e=new k,i=new k(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ya)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ya.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ad.copy(e).add(i).multiplyScalar(.5),iu.copy(i).sub(e).normalize(),as.copy(this.origin).sub(Ad);const f=e.distanceTo(i)*.5,h=-this.direction.dot(iu),d=as.dot(this.direction),m=-as.dot(iu),p=as.lengthSq(),v=Math.abs(1-h*h);let _,y,x,E;if(v>0)if(_=h*m-d,y=h*d-m,E=f*v,_>=0)if(y>=-E)if(y<=E){const A=1/v;_*=A,y*=A,x=_*(_+h*y+2*d)+y*(h*_+y+2*m)+p}else y=f,_=Math.max(0,-(h*y+d)),x=-_*_+y*(y+2*m)+p;else y=-f,_=Math.max(0,-(h*y+d)),x=-_*_+y*(y+2*m)+p;else y<=-E?(_=Math.max(0,-(-h*f+d)),y=_>0?-f:Math.min(Math.max(-f,-m),f),x=-_*_+y*(y+2*m)+p):y<=E?(_=0,y=Math.min(Math.max(-f,-m),f),x=y*(y+2*m)+p):(_=Math.max(0,-(h*f+d)),y=_>0?f:Math.min(Math.max(-f,-m),f),x=-_*_+y*(y+2*m)+p);else y=h>0?-f:f,_=Math.max(0,-(h*y+d)),x=-_*_+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Ad).addScaledVector(iu,y),x}intersectSphere(e,i){ya.subVectors(e.center,this.origin);const r=ya.dot(this.direction),l=ya.dot(ya)-r*r,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,f,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),v>=0?(f=(e.min.y-y.y)*v,h=(e.max.y-y.y)*v):(f=(e.max.y-y.y)*v,h=(e.min.y-y.y)*v),r>h||f>l||((f>r||isNaN(r))&&(r=f),(h<l||isNaN(l))&&(l=h),_>=0?(d=(e.min.z-y.z)*_,m=(e.max.z-y.z)*_):(d=(e.max.z-y.z)*_,m=(e.min.z-y.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ya)!==null}intersectTriangle(e,i,r,l,f){Rd.subVectors(i,e),au.subVectors(r,e),Cd.crossVectors(Rd,au);let h=this.direction.dot(Cd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;as.subVectors(this.origin,e);const m=d*this.direction.dot(au.crossVectors(as,au));if(m<0)return null;const p=d*this.direction.dot(Rd.cross(as));if(p<0||m+p>h)return null;const v=-d*as.dot(Cd);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,r,l,f,h,d,m,p,v,_,y,x,E,A,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,f,h,d,m,p,v,_,y,x,E,A,M)}set(e,i,r,l,f,h,d,m,p,v,_,y,x,E,A,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=f,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=_,S[14]=y,S[3]=x,S[7]=E,S[11]=A,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Zr.setFromMatrixColumn(e,0).length(),f=1/Zr.setFromMatrixColumn(e,1).length(),h=1/Zr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*f,i[5]=r[5]*f,i[6]=r[6]*f,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,f=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(f),_=Math.sin(f);if(e.order==="XYZ"){const y=h*v,x=h*_,E=d*v,A=d*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=x+E*p,i[5]=y-A*p,i[9]=-d*m,i[2]=A-y*p,i[6]=E+x*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*v,x=m*_,E=p*v,A=p*_;i[0]=y+A*d,i[4]=E*d-x,i[8]=h*p,i[1]=h*_,i[5]=h*v,i[9]=-d,i[2]=x*d-E,i[6]=A+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*v,x=m*_,E=p*v,A=p*_;i[0]=y-A*d,i[4]=-h*_,i[8]=E+x*d,i[1]=x+E*d,i[5]=h*v,i[9]=A-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*v,x=h*_,E=d*v,A=d*_;i[0]=m*v,i[4]=E*p-x,i[8]=y*p+A,i[1]=m*_,i[5]=A*p+y,i[9]=x*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,x=h*p,E=d*m,A=d*p;i[0]=m*v,i[4]=A-y*_,i[8]=E*_+x,i[1]=_,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=x*_+E,i[10]=y-A*_}else if(e.order==="XZY"){const y=h*m,x=h*p,E=d*m,A=d*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=y*_+A,i[5]=h*v,i[9]=x*_-E,i[2]=E*_-x,i[6]=d*v,i[10]=A*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cT,e,uT)}lookAt(e,i,r){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),ss.crossVectors(r,li),ss.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ss.crossVectors(r,li)),ss.normalize(),su.crossVectors(li,ss),l[0]=ss.x,l[4]=su.x,l[8]=li.x,l[1]=ss.y,l[5]=su.y,l[9]=li.y,l[2]=ss.z,l[6]=su.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,f=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],v=r[1],_=r[5],y=r[9],x=r[13],E=r[2],A=r[6],M=r[10],S=r[14],O=r[3],P=r[7],w=r[11],F=r[15],B=l[0],L=l[4],q=l[8],D=l[12],C=l[1],V=l[5],at=l[9],ct=l[13],gt=l[2],lt=l[6],j=l[10],st=l[14],K=l[3],vt=l[7],St=l[11],Gt=l[15];return f[0]=h*B+d*C+m*gt+p*K,f[4]=h*L+d*V+m*lt+p*vt,f[8]=h*q+d*at+m*j+p*St,f[12]=h*D+d*ct+m*st+p*Gt,f[1]=v*B+_*C+y*gt+x*K,f[5]=v*L+_*V+y*lt+x*vt,f[9]=v*q+_*at+y*j+x*St,f[13]=v*D+_*ct+y*st+x*Gt,f[2]=E*B+A*C+M*gt+S*K,f[6]=E*L+A*V+M*lt+S*vt,f[10]=E*q+A*at+M*j+S*St,f[14]=E*D+A*ct+M*st+S*Gt,f[3]=O*B+P*C+w*gt+F*K,f[7]=O*L+P*V+w*lt+F*vt,f[11]=O*q+P*at+w*j+F*St,f[15]=O*D+P*ct+w*st+F*Gt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],f=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],_=e[6],y=e[10],x=e[14],E=e[3],A=e[7],M=e[11],S=e[15];return E*(+f*m*_-l*p*_-f*d*y+r*p*y+l*d*x-r*m*x)+A*(+i*m*x-i*p*y+f*h*y-l*h*x+l*p*v-f*m*v)+M*(+i*p*_-i*d*x-f*h*_+r*h*x+f*d*v-r*p*v)+S*(-l*d*v-i*m*_+i*d*y+l*h*_-r*h*y+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],f=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],_=e[9],y=e[10],x=e[11],E=e[12],A=e[13],M=e[14],S=e[15],O=_*M*p-A*y*p+A*m*x-d*M*x-_*m*S+d*y*S,P=E*y*p-v*M*p-E*m*x+h*M*x+v*m*S-h*y*S,w=v*A*p-E*_*p+E*d*x-h*A*x-v*d*S+h*_*S,F=E*_*m-v*A*m-E*d*y+h*A*y+v*d*M-h*_*M,B=i*O+r*P+l*w+f*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/B;return e[0]=O*L,e[1]=(A*y*f-_*M*f-A*l*x+r*M*x+_*l*S-r*y*S)*L,e[2]=(d*M*f-A*m*f+A*l*p-r*M*p-d*l*S+r*m*S)*L,e[3]=(_*m*f-d*y*f-_*l*p+r*y*p+d*l*x-r*m*x)*L,e[4]=P*L,e[5]=(v*M*f-E*y*f+E*l*x-i*M*x-v*l*S+i*y*S)*L,e[6]=(E*m*f-h*M*f-E*l*p+i*M*p+h*l*S-i*m*S)*L,e[7]=(h*y*f-v*m*f+v*l*p-i*y*p-h*l*x+i*m*x)*L,e[8]=w*L,e[9]=(E*_*f-v*A*f-E*r*x+i*A*x+v*r*S-i*_*S)*L,e[10]=(h*A*f-E*d*f+E*r*p-i*A*p-h*r*S+i*d*S)*L,e[11]=(v*d*f-h*_*f-v*r*p+i*_*p+h*r*x-i*d*x)*L,e[12]=F*L,e[13]=(v*A*l-E*_*l+E*r*y-i*A*y-v*r*M+i*_*M)*L,e[14]=(E*d*l-h*A*l-E*r*m+i*A*m+h*r*M-i*d*M)*L,e[15]=(h*_*l-v*d*l+v*r*m-i*_*m-h*r*y+i*d*y)*L,this}scale(e){const i=this.elements,r=e.x,l=e.y,f=e.z;return i[0]*=r,i[4]*=l,i[8]*=f,i[1]*=r,i[5]*=l,i[9]*=f,i[2]*=r,i[6]*=l,i[10]*=f,i[3]*=r,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),f=1-r,h=e.x,d=e.y,m=e.z,p=f*h,v=f*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*h,0,p*m-l*d,v*m+l*h,f*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,f,h){return this.set(1,r,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,f=i._x,h=i._y,d=i._z,m=i._w,p=f+f,v=h+h,_=d+d,y=f*p,x=f*v,E=f*_,A=h*v,M=h*_,S=d*_,O=m*p,P=m*v,w=m*_,F=r.x,B=r.y,L=r.z;return l[0]=(1-(A+S))*F,l[1]=(x+w)*F,l[2]=(E-P)*F,l[3]=0,l[4]=(x-w)*B,l[5]=(1-(y+S))*B,l[6]=(M+O)*B,l[7]=0,l[8]=(E+P)*L,l[9]=(M-O)*L,l[10]=(1-(y+A))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let f=Zr.set(l[0],l[1],l[2]).length();const h=Zr.set(l[4],l[5],l[6]).length(),d=Zr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Ui.copy(this);const p=1/f,v=1/h,_=1/d;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,i.setFromRotationMatrix(Ui),r.x=f,r.y=h,r.z=d,this}makePerspective(e,i,r,l,f,h,d=Qi,m=!1){const p=this.elements,v=2*f/(i-e),_=2*f/(r-l),y=(i+e)/(i-e),x=(r+l)/(r-l);let E,A;if(m)E=f/(h-f),A=h*f/(h-f);else if(d===Qi)E=-(h+f)/(h-f),A=-2*h*f/(h-f);else if(d===Lu)E=-h/(h-f),A=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,f,h,d=Qi,m=!1){const p=this.elements,v=2/(i-e),_=2/(r-l),y=-(i+e)/(i-e),x=-(r+l)/(r-l);let E,A;if(m)E=1/(h-f),A=h/(h-f);else if(d===Qi)E=-2/(h-f),A=-(h+f)/(h-f);else if(d===Lu)E=-1/(h-f),A=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Zr=new k,Ui=new en,cT=new k(0,0,0),uT=new k(1,1,1),ss=new k,su=new k,li=new k,Fv=new en,Hv=new $s;class ta{constructor(e=0,i=0,r=0,l=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],_=l[2],y=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,f),this._z=0);break;case"ZXY":this._x=Math.asin(ve(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,f)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Fv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Hv.setFromEuler(this),this.setFromQuaternion(Hv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class om{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fT=0;const Gv=new k,Kr=new $s,Sa=new en,ru=new k,hl=new k,hT=new k,dT=new $s,Vv=new k(1,0,0),Xv=new k(0,1,0),kv=new k(0,0,1),qv={type:"added"},pT={type:"removed"},Qr={type:"childadded",child:null},wd={type:"childremoved",child:null};class Dn extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=Tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new k,i=new ta,r=new $s,l=new k(1,1,1);function f(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(f),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new pe}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new om,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Kr.setFromAxisAngle(e,i),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,i){return Kr.setFromAxisAngle(e,i),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Vv,e)}rotateY(e){return this.rotateOnAxis(Xv,e)}rotateZ(e){return this.rotateOnAxis(kv,e)}translateOnAxis(e,i){return Gv.copy(e).applyQuaternion(this.quaternion),this.position.add(Gv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Vv,e)}translateY(e){return this.translateOnAxis(Xv,e)}translateZ(e){return this.translateOnAxis(kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ru.copy(e):ru.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(hl,ru,this.up):Sa.lookAt(ru,hl,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),Kr.setFromRotationMatrix(Sa),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qv),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(pT),wd.child=e,this.dispatchEvent(wd),wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qv),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,e,hT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,dT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];f(e.shapes,_)}else f(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(f(e.materials,this.material[m]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(f(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),_=h(e.shapes),y=h(e.skeletons),x=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new k(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new k,xa=new k,Dd=new k,Ma=new k,Jr=new k,$r=new k,Yv=new k,Nd=new k,Ud=new k,Ld=new k,Od=new rn,Pd=new rn,zd=new rn;class Oi{constructor(e=new k,i=new k,r=new k){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Li.subVectors(e,i),l.cross(Li);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,r,l,f){Li.subVectors(l,i),xa.subVectors(r,i),Dd.subVectors(e,i);const h=Li.dot(Li),d=Li.dot(xa),m=Li.dot(Dd),p=xa.dot(xa),v=xa.dot(Dd),_=h*p-d*d;if(_===0)return f.set(0,0,0),null;const y=1/_,x=(p*m-d*v)*y,E=(h*v-d*m)*y;return f.set(1-x-E,E,x)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(e,i,r,l,f,h,d,m){return this.getBarycoord(e,i,r,l,Ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,Ma.x),m.addScaledVector(h,Ma.y),m.addScaledVector(d,Ma.z),m)}static getInterpolatedAttribute(e,i,r,l,f,h){return Od.setScalar(0),Pd.setScalar(0),zd.setScalar(0),Od.fromBufferAttribute(e,i),Pd.fromBufferAttribute(e,r),zd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Od,f.x),h.addScaledVector(Pd,f.y),h.addScaledVector(zd,f.z),h}static isFrontFacing(e,i,r,l){return Li.subVectors(r,i),xa.subVectors(e,i),Li.cross(xa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Li.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,f){return Oi.getInterpolation(e,this.a,this.b,this.c,i,r,l,f)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,f=this.c;let h,d;Jr.subVectors(l,r),$r.subVectors(f,r),Nd.subVectors(e,r);const m=Jr.dot(Nd),p=$r.dot(Nd);if(m<=0&&p<=0)return i.copy(r);Ud.subVectors(e,l);const v=Jr.dot(Ud),_=$r.dot(Ud);if(v>=0&&_<=v)return i.copy(l);const y=m*_-v*p;if(y<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(Jr,h);Ld.subVectors(e,f);const x=Jr.dot(Ld),E=$r.dot(Ld);if(E>=0&&x<=E)return i.copy(f);const A=x*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector($r,d);const M=v*E-x*_;if(M<=0&&_-v>=0&&x-E>=0)return Yv.subVectors(f,l),d=(_-v)/(_-v+(x-E)),i.copy(l).addScaledVector(Yv,d);const S=1/(M+A+y);return h=A*S,d=y*S,i.copy(r).addScaledVector(Jr,h).addScaledVector($r,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},ou={h:0,s:0,l:0};function Id(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Re{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ne.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ne.workingColorSpace){if(e=JE(e,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+i):r+i-r*i,h=2*r-f;this.r=Id(h,f,e+1/3),this.g=Id(h,f,e),this.b=Id(h,f,e-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(e,i=Mi){function r(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Mi){const r=Jy[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Ne.workingToColorSpace(Pn.copy(this),e),Math.round(ve(Pn.r*255,0,255))*65536+Math.round(ve(Pn.g*255,0,255))*256+Math.round(ve(Pn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,f=Pn.b,h=Math.max(r,l,f),d=Math.min(r,l,f);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=v<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-f)/_+(l<f?6:0);break;case l:m=(f-r)/_+2;break;case f:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ne.workingColorSpace){return Ne.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Mi){Ne.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,r=Pn.g,l=Pn.b;return e!==Mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+i,rs.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(rs),e.getHSL(ou);const r=yd(rs.h,ou.h,i),l=yd(rs.s,ou.s,i),f=yd(rs.l,ou.l,i);return this.setHSL(r,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*r+f[6]*l,this.g=f[1]*i+f[4]*r+f[7]*l,this.b=f[2]*i+f[5]*r+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Re;Re.NAMES=Jy;let mT=0;class Al extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=Tl(),this.name="",this.type="Material",this.blending=oo,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ep,this.blendDst=np,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(r.blending=this.blending),this.side!==hs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ep&&(r.blendSrc=this.blendSrc),this.blendDst!==np&&(r.blendDst=this.blendDst),this.blendEquation!==js&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(f){const h=[];for(const d in f){const m=f[d];delete m.metadata,h.push(m)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(r.textures=f),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let f=0;f!==l;++f)r[f]=i[f].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $y extends Al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=By,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new k,lu=new ue;let _T=0;class Ji{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_T++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Lv,this.updateRanges=[],this.gpuType=Aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)lu.fromBufferAttribute(this,i),lu.applyMatrix3(e),this.setXY(i,lu.x,lu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=cl(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=cl(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=cl(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=cl(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=cl(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,f){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),r=jn(r,this.array),l=jn(l,this.array),f=jn(f,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lv&&(e.usage=this.usage),e}}class tS extends Ji{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class eS extends Ji{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Vn extends Ji{constructor(e,i,r){super(new Float32Array(e),i,r)}}let gT=0;const xi=new en,Bd=new Dn,to=new k,ci=new bl,dl=new bl,En=new k;class ea extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=Tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ky(e)?eS:tS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new pe().getNormalMatrix(e);r.applyNormalMatrix(f),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,r){return xi.makeTranslation(e,i,r),this.applyMatrix4(xi),this}scale(e,i,r){return xi.makeScale(e,i,r),this.applyMatrix4(xi),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Vn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const f=i[r];ci.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sm);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const r=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];dl.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ci.min,dl.min),ci.expandByPoint(En),En.addVectors(ci.max,dl.max),ci.expandByPoint(En)):(ci.expandByPoint(dl.min),ci.expandByPoint(dl.max))}ci.getCenter(r);let l=0;for(let f=0,h=e.count;f<h;f++)En.fromBufferAttribute(e,f),l=Math.max(l,r.distanceToSquared(En));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)En.fromBufferAttribute(d,p),m&&(to.fromBufferAttribute(e,p),En.add(to)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<r.count;q++)d[q]=new k,m[q]=new k;const p=new k,v=new k,_=new k,y=new ue,x=new ue,E=new ue,A=new k,M=new k;function S(q,D,C){p.fromBufferAttribute(r,q),v.fromBufferAttribute(r,D),_.fromBufferAttribute(r,C),y.fromBufferAttribute(f,q),x.fromBufferAttribute(f,D),E.fromBufferAttribute(f,C),v.sub(p),_.sub(p),x.sub(y),E.sub(y);const V=1/(x.x*E.y-E.x*x.y);isFinite(V)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(V),M.copy(_).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(V),d[q].add(A),d[D].add(A),d[C].add(A),m[q].add(M),m[D].add(M),m[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let q=0,D=O.length;q<D;++q){const C=O[q],V=C.start,at=C.count;for(let ct=V,gt=V+at;ct<gt;ct+=3)S(e.getX(ct+0),e.getX(ct+1),e.getX(ct+2))}const P=new k,w=new k,F=new k,B=new k;function L(q){F.fromBufferAttribute(l,q),B.copy(F);const D=d[q];P.copy(D),P.sub(F.multiplyScalar(F.dot(D))).normalize(),w.crossVectors(B,D);const V=w.dot(m[q])<0?-1:1;h.setXYZW(q,P.x,P.y,P.z,V)}for(let q=0,D=O.length;q<D;++q){const C=O[q],V=C.start,at=C.count;for(let ct=V,gt=V+at;ct<gt;ct+=3)L(e.getX(ct+0)),L(e.getX(ct+1)),L(e.getX(ct+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,x=r.count;y<x;y++)r.setXYZ(y,0,0,0);const l=new k,f=new k,h=new k,d=new k,m=new k,p=new k,v=new k,_=new k;if(e)for(let y=0,x=e.count;y<x;y+=3){const E=e.getX(y+0),A=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,E),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),v.subVectors(h,f),_.subVectors(l,f),v.cross(_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),d.add(v),m.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,x=i.count;y<x;y+=3)l.fromBufferAttribute(i,y+0),f.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),v.subVectors(h,f),_.subVectors(l,f),v.cross(_),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,_=d.normalized,y=new p.constructor(m.length*v);let x=0,E=0;for(let A=0,M=m.length;A<M;A++){d.isInterleavedBufferAttribute?x=m[A]*d.data.stride+d.offset:x=m[A]*v;for(let S=0;S<v;S++)y[E++]=p[x++]}return new Ji(y,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ea,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const f=this.morphAttributes;for(const d in f){const m=[],p=f[d];for(let v=0,_=p.length;v<_;v++){const y=p[v],x=e(y,r);m.push(x)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let f=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,y=p.length;_<y;_++){const x=p[_];v.push(x.toJSON(e.data))}v.length>0&&(l[m]=v,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const f=e.morphAttributes;for(const p in f){const v=[],_=f[p];for(let y=0,x=_.length;y<x;y++)v.push(_[y].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wv=new en,Xs=new rm,cu=new sm,jv=new k,uu=new k,fu=new k,hu=new k,Fd=new k,du=new k,Zv=new k,pu=new k;class ui extends Dn{constructor(e=new ea,i=new $y){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,f=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){du.set(0,0,0);for(let m=0,p=f.length;m<p;m++){const v=d[m],_=f[m];v!==0&&(Fd.fromBufferAttribute(_,e),h?du.addScaledVector(Fd,v):du.addScaledVector(Fd.sub(i),v))}i.add(du)}return i}raycast(e,i){const r=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cu.copy(r.boundingSphere),cu.applyMatrix4(f),Xs.copy(e.ray).recast(e.near),!(cu.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(cu,jv)===null||Xs.origin.distanceToSquared(jv)>(e.far-e.near)**2))&&(Wv.copy(f).invert(),Xs.copy(e.ray).applyMatrix4(Wv),!(r.boundingBox!==null&&Xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Xs)))}_computeIntersections(e,i,r){let l;const f=this.geometry,h=this.material,d=f.index,m=f.attributes.position,p=f.attributes.uv,v=f.attributes.uv1,_=f.attributes.normal,y=f.groups,x=f.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=y.length;E<A;E++){const M=y[E],S=h[M.materialIndex],O=Math.max(M.start,x.start),P=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let w=O,F=P;w<F;w+=3){const B=d.getX(w),L=d.getX(w+1),q=d.getX(w+2);l=mu(this,S,e,r,p,v,_,B,L,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let M=E,S=A;M<S;M+=3){const O=d.getX(M),P=d.getX(M+1),w=d.getX(M+2);l=mu(this,h,e,r,p,v,_,O,P,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=y.length;E<A;E++){const M=y[E],S=h[M.materialIndex],O=Math.max(M.start,x.start),P=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let w=O,F=P;w<F;w+=3){const B=w,L=w+1,q=w+2;l=mu(this,S,e,r,p,v,_,B,L,q),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),A=Math.min(m.count,x.start+x.count);for(let M=E,S=A;M<S;M+=3){const O=M,P=M+1,w=M+2;l=mu(this,h,e,r,p,v,_,O,P,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function vT(o,e,i,r,l,f,h,d){let m;if(e.side===Qn?m=r.intersectTriangle(h,f,l,!0,d):m=r.intersectTriangle(l,f,h,e.side===hs,d),m===null)return null;pu.copy(d),pu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(pu);return p<i.near||p>i.far?null:{distance:p,point:pu.clone(),object:o}}function mu(o,e,i,r,l,f,h,d,m,p){o.getVertexPosition(d,uu),o.getVertexPosition(m,fu),o.getVertexPosition(p,hu);const v=vT(o,e,i,r,uu,fu,hu,Zv);if(v){const _=new k;Oi.getBarycoord(Zv,uu,fu,hu,_),l&&(v.uv=Oi.getInterpolatedAttribute(l,d,m,p,_,new ue)),f&&(v.uv1=Oi.getInterpolatedAttribute(f,d,m,p,_,new ue)),h&&(v.normal=Oi.getInterpolatedAttribute(h,d,m,p,_,new k),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new k,materialIndex:0};Oi.getNormal(uu,fu,hu,y.normal),v.face=y,v.barycoord=_}return v}class Rl extends ea{constructor(e=1,i=1,r=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const m=[],p=[],v=[],_=[];let y=0,x=0;E("z","y","x",-1,-1,r,i,e,h,f,0),E("z","y","x",1,-1,r,i,-e,h,f,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,f,4),E("x","y","z",-1,-1,e,i,-r,l,f,5),this.setIndex(m),this.setAttribute("position",new Vn(p,3)),this.setAttribute("normal",new Vn(v,3)),this.setAttribute("uv",new Vn(_,2));function E(A,M,S,O,P,w,F,B,L,q,D){const C=w/L,V=F/q,at=w/2,ct=F/2,gt=B/2,lt=L+1,j=q+1;let st=0,K=0;const vt=new k;for(let St=0;St<j;St++){const Gt=St*V-ct;for(let re=0;re<lt;re++){const be=re*C-at;vt[A]=be*O,vt[M]=Gt*P,vt[S]=gt,p.push(vt.x,vt.y,vt.z),vt[A]=0,vt[M]=0,vt[S]=B>0?1:-1,v.push(vt.x,vt.y,vt.z),_.push(re/L),_.push(1-St/q),st+=1}}for(let St=0;St<q;St++)for(let Gt=0;Gt<L;Gt++){const re=y+Gt+lt*St,be=y+Gt+lt*(St+1),I=y+(Gt+1)+lt*(St+1),ut=y+(Gt+1)+lt*St;m.push(re,be,ut),m.push(be,I,ut),K+=6}d.addGroup(x,K,D),x+=K,y+=st}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function po(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Gn(o){const e={};for(let i=0;i<o.length;i++){const r=po(o[i]);for(const l in r)e[l]=r[l]}return e}function yT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function nS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const ST={clone:po,merge:Gn};var xT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ds extends Al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xT,this.fragmentShader=MT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=yT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class iS extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const os=new k,Kv=new ue,Qv=new ue;class Ei extends iS{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Vp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Du*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vp*2*Math.atan(Math.tan(Du*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,i){return this.getViewBounds(e,Kv,Qv),i.subVectors(Qv,Kv)}setViewOffset(e,i,r,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Du*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;f+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const eo=-90,no=1;class ET extends Dn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(eo,no,e,i);l.layers=this.layers,this.add(l);const f=new Ei(eo,no,e,i);f.layers=this.layers,this.add(f);const h=new Ei(eo,no,e,i);h.layers=this.layers,this.add(h);const d=new Ei(eo,no,e,i);d.layers=this.layers,this.add(d);const m=new Ei(eo,no,e,i);m.layers=this.layers,this.add(m);const p=new Ei(eo,no,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,f,h,d,m]=i;for(const p of i)this.remove(p);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Lu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,m,p,v]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,f),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(_,y,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class aS extends Jn{constructor(e=[],i=uo,r,l,f,h,d,m,p,v){super(e,i,r,l,f,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TT extends tr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new aS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Rl(5,5,5),f=new ds({name:"CubemapFromEquirect",uniforms:po(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:us});f.uniforms.tEquirect.value=i;const h=new ui(l,f),d=i.minFilter;return i.minFilter===Qs&&(i.minFilter=Ki),new ET(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(f)}}class Ti extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bT={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,f=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const A of e.hand.values()){const M=i.getJointPose(A,r),S=this._getHandJoint(p,A);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=v.position.distanceTo(_.position),x=.02,E=.005;p.inputState.pinching&&y>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,r),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(bT)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=f!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ti;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class AT extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Gd=new k,RT=new k,CT=new pe;class ls{constructor(e=new k(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Gd.subVectors(r,i).cross(RT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Gd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(r,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||CT.getNormalMatrix(e),l=this.coplanarPoint(Gd).applyMatrix4(e),f=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ks=new sm,wT=new ue(.5,.5),_u=new k;class lm{constructor(e=new ls,i=new ls,r=new ls,l=new ls,f=new ls,h=new ls){this.planes=[e,i,r,l,f,h]}set(e,i,r,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Qi,r=!1){const l=this.planes,f=e.elements,h=f[0],d=f[1],m=f[2],p=f[3],v=f[4],_=f[5],y=f[6],x=f[7],E=f[8],A=f[9],M=f[10],S=f[11],O=f[12],P=f[13],w=f[14],F=f[15];if(l[0].setComponents(p-h,x-v,S-E,F-O).normalize(),l[1].setComponents(p+h,x+v,S+E,F+O).normalize(),l[2].setComponents(p+d,x+_,S+A,F+P).normalize(),l[3].setComponents(p-d,x-_,S-A,F-P).normalize(),r)l[4].setComponents(m,y,M,w).normalize(),l[5].setComponents(p-m,x-y,S-M,F-w).normalize();else if(l[4].setComponents(p-m,x-y,S-M,F-w).normalize(),i===Qi)l[5].setComponents(p+m,x+y,S+M,F+w).normalize();else if(i===Lu)l[5].setComponents(m,y,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ks)}intersectsSprite(e){ks.center.set(0,0,0);const i=wT.distanceTo(e.center);return ks.radius=.7071067811865476+i,ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(ks)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(_u.x=l.normal.x>0?e.max.x:e.min.x,_u.y=l.normal.y>0?e.max.y:e.min.y,_u.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(_u)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sS extends Jn{constructor(e,i,r=Js,l,f,h,d=zi,m=zi,p,v=yl,_=1){if(v!==yl&&v!==Sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:_};super(y,l,f,h,d,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new am(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class rS extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cm extends ea{constructor(e=1,i=32,r=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:r,thetaLength:l},i=Math.max(3,i);const f=[],h=[],d=[],m=[],p=new k,v=new ue;h.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let _=0,y=3;_<=i;_++,y+=3){const x=r+_/i*l;p.x=e*Math.cos(x),p.y=e*Math.sin(x),h.push(p.x,p.y,p.z),d.push(0,0,1),v.x=(h[y]/e+1)/2,v.y=(h[y+1]/e+1)/2,m.push(v.x,v.y)}for(let _=1;_<=i;_++)f.push(_,_+1,0);this.setIndex(f),this.setAttribute("position",new Vn(h,3)),this.setAttribute("normal",new Vn(d,3)),this.setAttribute("uv",new Vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cm(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class DT{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),f=0;i.push(0);for(let h=1;h<=e;h++)r=this.getPoint(h/e),f+=r.distanceTo(l),i.push(f),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let l=0;const f=r.length;let h;i?h=i:h=e*r[f-1];let d=0,m=f-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=r[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,r[l]===h)return l/(f-1);const v=r[l],y=r[l+1]-v,x=(h-v)/y;return(l+x)/(f-1)}getTangent(e,i){let l=e-1e-4,f=e+1e-4;l<0&&(l=0),f>1&&(f=1);const h=this.getPoint(l),d=this.getPoint(f),m=i||(h.isVector2?new ue:new k);return m.copy(d).sub(h).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new k,l=[],f=[],h=[],d=new k,m=new en;for(let x=0;x<=e;x++){const E=x/e;l[x]=this.getTangentAt(E,new k)}f[0]=new k,h[0]=new k;let p=Number.MAX_VALUE;const v=Math.abs(l[0].x),_=Math.abs(l[0].y),y=Math.abs(l[0].z);v<=p&&(p=v,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),y<=p&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),f[0].crossVectors(l[0],d),h[0].crossVectors(l[0],f[0]);for(let x=1;x<=e;x++){if(f[x]=f[x-1].clone(),h[x]=h[x-1].clone(),d.crossVectors(l[x-1],l[x]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(ve(l[x-1].dot(l[x]),-1,1));f[x].applyMatrix4(m.makeRotationAxis(d,E))}h[x].crossVectors(l[x],f[x])}if(i===!0){let x=Math.acos(ve(f[0].dot(f[e]),-1,1));x/=e,l[0].dot(d.crossVectors(f[0],f[e]))>0&&(x=-x);for(let E=1;E<=e;E++)f[E].applyMatrix4(m.makeRotationAxis(l[E],x*E)),h[E].crossVectors(l[E],f[E])}return{tangents:l,normals:f,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function um(){let o=0,e=0,i=0,r=0;function l(f,h,d,m){o=f,e=d,i=-3*f+3*h-2*d-m,r=2*f-2*h+d+m}return{initCatmullRom:function(f,h,d,m,p){l(h,d,p*(d-f),p*(m-h))},initNonuniformCatmullRom:function(f,h,d,m,p,v,_){let y=(h-f)/p-(d-f)/(p+v)+(d-h)/v,x=(d-h)/v-(m-h)/(v+_)+(m-d)/_;y*=v,x*=v,l(h,d,y,x)},calc:function(f){const h=f*f,d=h*f;return o+e*f+i*h+r*d}}}const gu=new k,Vd=new um,Xd=new um,kd=new um;class NT extends DT{constructor(e=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=l}getPoint(e,i=new k){const r=i,l=this.points,f=l.length,h=(f-(this.closed?0:1))*e;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/f)+1)*f:m===0&&d===f-1&&(d=f-2,m=1);let p,v;this.closed||d>0?p=l[(d-1)%f]:(gu.subVectors(l[0],l[1]).add(l[0]),p=gu);const _=l[d%f],y=l[(d+1)%f];if(this.closed||d+2<f?v=l[(d+2)%f]:(gu.subVectors(l[f-1],l[f-2]).add(l[f-1]),v=gu),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),x),A=Math.pow(_.distanceToSquared(y),x),M=Math.pow(y.distanceToSquared(v),x);A<1e-4&&(A=1),E<1e-4&&(E=A),M<1e-4&&(M=A),Vd.initNonuniformCatmullRom(p.x,_.x,y.x,v.x,E,A,M),Xd.initNonuniformCatmullRom(p.y,_.y,y.y,v.y,E,A,M),kd.initNonuniformCatmullRom(p.z,_.z,y.z,v.z,E,A,M)}else this.curveType==="catmullrom"&&(Vd.initCatmullRom(p.x,_.x,y.x,v.x,this.tension),Xd.initCatmullRom(p.y,_.y,y.y,v.y,this.tension),kd.initCatmullRom(p.z,_.z,y.z,v.z,this.tension));return r.set(Vd.calc(m),Xd.calc(m),kd.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(new k().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class zu extends ea{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,_=e/d,y=i/m,x=[],E=[],A=[],M=[];for(let S=0;S<v;S++){const O=S*y-h;for(let P=0;P<p;P++){const w=P*_-f;E.push(w,-O,0),A.push(0,0,1),M.push(P/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let O=0;O<d;O++){const P=O+p*S,w=O+p*(S+1),F=O+1+p*(S+1),B=O+1+p*S;x.push(P,w,B),x.push(w,F,B)}this.setIndex(x),this.setAttribute("position",new Vn(E,3)),this.setAttribute("normal",new Vn(A,3)),this.setAttribute("uv",new Vn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zu(e.width,e.height,e.widthSegments,e.heightSegments)}}class mo extends Al{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jy,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class UT extends Al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LT extends Al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class oS extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class OT extends oS{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const qd=new en,Jv=new k,$v=new k;class PT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lm,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Jv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Jv),$v.setFromMatrixPosition(e.target.matrixWorld),i.lookAt($v),i.updateMatrixWorld(),qd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lS extends iS{constructor(e=-1,i=1,r=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=p*this.view.offsetX,h=f+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class zT extends PT{constructor(){super(new lS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class IT extends oS{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new zT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class BT extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ty=new en;class FT{constructor(e,i,r=0,l=1/0){this.ray=new rm(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new om,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return ty.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ty),this}intersectObject(e,i=!0,r=[]){return Xp(e,this,r,i),r.sort(ey),r}intersectObjects(e,i=!0,r=[]){for(let l=0,f=e.length;l<f;l++)Xp(e[l],this,r,i);return r.sort(ey),r}}function ey(o,e){return o.distance-e.distance}function Xp(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Xp(f[h],e,i,!0)}}class ny{constructor(e=1,i=0,r=0){this.radius=e,this.phi=i,this.theta=r}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class HT extends ir{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function iy(o,e,i,r){const l=GT(r);switch(i){case ky:return o*e;case Yy:return o*e/l.components*l.byteLength;case em:return o*e/l.components*l.byteLength;case Wy:return o*e*2/l.components*l.byteLength;case nm:return o*e*2/l.components*l.byteLength;case qy:return o*e*3/l.components*l.byteLength;case Pi:return o*e*4/l.components*l.byteLength;case im:return o*e*4/l.components*l.byteLength;case Au:case Ru:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Cu:case wu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mp:case gp:return Math.max(o,16)*Math.max(e,8)/4;case pp:case _p:return Math.max(o,8)*Math.max(e,8)/2;case vp:case yp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Sp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Mp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ep:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Tp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case bp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Cp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case wp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Np:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Up:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Lp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Op:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Pp:case zp:case Ip:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Bp:case Fp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Hp:case Gp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function GT(o){switch(o){case $i:case Hy:return{byteLength:1,components:1};case gl:case Gy:case El:return{byteLength:2,components:1};case $p:case tm:return{byteLength:2,components:4};case Js:case Jp:case Aa:return{byteLength:4,components:1};case Vy:case Xy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cS(){let o=null,e=!1,i=null,r=null;function l(f,h){i(f,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function VT(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,_=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,v),d.onUploadCallback();let x;if(p instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=o.SHORT;else if(p instanceof Uint32Array)x=o.UNSIGNED_INT;else if(p instanceof Int32Array)x=o.INT;else if(p instanceof Int8Array)x=o.BYTE;else if(p instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const v=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,v);else{_.sort((x,E)=>x.start-E.start);let y=0;for(let x=1;x<_.length;x++){const E=_[y],A=_[x];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++y,_[y]=A)}_.length=y+1;for(let x=0,E=_.length;x<E;x++){const A=_[x];o.bufferSubData(p,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:f,update:h}}var XT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kT=`#ifdef USE_ALPHAHASH
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
#endif`,qT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZT=`#ifdef USE_AOMAP
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
#endif`,KT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QT=`#ifdef USE_BATCHING
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
#endif`,JT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$T=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nb=`#ifdef USE_IRIDESCENCE
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
#endif`,ib=`#ifdef USE_BUMPMAP
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
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hb=`#define PI 3.141592653589793
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
} // validated`,db=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pb=`vec3 transformedNormal = objectNormal;
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
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Db=`#ifdef USE_GRADIENTMAP
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
}`,Nb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ub=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ob=`uniform bool receiveShadow;
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
#endif`,Pb=`#ifdef USE_ENVMAP
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
#endif`,zb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hb=`PhysicalMaterial material;
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
#endif`,Gb=`struct PhysicalMaterial {
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
}`,Vb=`
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
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
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
#endif`,kb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jb=`#if defined( USE_POINTS_UV )
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
#endif`,$b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
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
#endif`,s1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f1=`#ifdef USE_NORMALMAP
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
#endif`,h1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,R1=`float getShadowMask() {
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
}`,C1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w1=`#ifdef USE_SKINNING
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
#endif`,D1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N1=`#ifdef USE_SKINNING
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
#endif`,U1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z1=`#ifdef USE_TRANSMISSION
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
#endif`,I1=`#ifdef USE_TRANSMISSION
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X1=`uniform sampler2D t2D;
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`#include <common>
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
}`,Z1=`#if DEPTH_PACKING == 3200
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
}`,K1=`#define DISTANCE
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
}`,Q1=`#define DISTANCE
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
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`uniform float scale;
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
}`,eA=`uniform vec3 diffuse;
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
}`,nA=`#include <common>
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
}`,iA=`uniform vec3 diffuse;
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
}`,aA=`#define LAMBERT
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
}`,sA=`#define LAMBERT
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
}`,rA=`#define MATCAP
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
}`,oA=`#define MATCAP
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
}`,lA=`#define NORMAL
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
}`,cA=`#define NORMAL
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
}`,uA=`#define PHONG
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
}`,fA=`#define PHONG
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
}`,hA=`#define STANDARD
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
}`,dA=`#define STANDARD
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
}`,pA=`#define TOON
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
}`,mA=`#define TOON
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
}`,_A=`uniform float size;
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
}`,gA=`uniform vec3 diffuse;
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
}`,vA=`#include <common>
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
}`,yA=`uniform vec3 color;
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
}`,SA=`uniform float rotation;
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
}`,xA=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:XT,alphahash_pars_fragment:kT,alphamap_fragment:qT,alphamap_pars_fragment:YT,alphatest_fragment:WT,alphatest_pars_fragment:jT,aomap_fragment:ZT,aomap_pars_fragment:KT,batching_pars_vertex:QT,batching_vertex:JT,begin_vertex:$T,beginnormal_vertex:tb,bsdfs:eb,iridescence_fragment:nb,bumpmap_pars_fragment:ib,clipping_planes_fragment:ab,clipping_planes_pars_fragment:sb,clipping_planes_pars_vertex:rb,clipping_planes_vertex:ob,color_fragment:lb,color_pars_fragment:cb,color_pars_vertex:ub,color_vertex:fb,common:hb,cube_uv_reflection_fragment:db,defaultnormal_vertex:pb,displacementmap_pars_vertex:mb,displacementmap_vertex:_b,emissivemap_fragment:gb,emissivemap_pars_fragment:vb,colorspace_fragment:yb,colorspace_pars_fragment:Sb,envmap_fragment:xb,envmap_common_pars_fragment:Mb,envmap_pars_fragment:Eb,envmap_pars_vertex:Tb,envmap_physical_pars_fragment:Pb,envmap_vertex:bb,fog_vertex:Ab,fog_pars_vertex:Rb,fog_fragment:Cb,fog_pars_fragment:wb,gradientmap_pars_fragment:Db,lightmap_pars_fragment:Nb,lights_lambert_fragment:Ub,lights_lambert_pars_fragment:Lb,lights_pars_begin:Ob,lights_toon_fragment:zb,lights_toon_pars_fragment:Ib,lights_phong_fragment:Bb,lights_phong_pars_fragment:Fb,lights_physical_fragment:Hb,lights_physical_pars_fragment:Gb,lights_fragment_begin:Vb,lights_fragment_maps:Xb,lights_fragment_end:kb,logdepthbuf_fragment:qb,logdepthbuf_pars_fragment:Yb,logdepthbuf_pars_vertex:Wb,logdepthbuf_vertex:jb,map_fragment:Zb,map_pars_fragment:Kb,map_particle_fragment:Qb,map_particle_pars_fragment:Jb,metalnessmap_fragment:$b,metalnessmap_pars_fragment:t1,morphinstance_vertex:e1,morphcolor_vertex:n1,morphnormal_vertex:i1,morphtarget_pars_vertex:a1,morphtarget_vertex:s1,normal_fragment_begin:r1,normal_fragment_maps:o1,normal_pars_fragment:l1,normal_pars_vertex:c1,normal_vertex:u1,normalmap_pars_fragment:f1,clearcoat_normal_fragment_begin:h1,clearcoat_normal_fragment_maps:d1,clearcoat_pars_fragment:p1,iridescence_pars_fragment:m1,opaque_fragment:_1,packing:g1,premultiplied_alpha_fragment:v1,project_vertex:y1,dithering_fragment:S1,dithering_pars_fragment:x1,roughnessmap_fragment:M1,roughnessmap_pars_fragment:E1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:b1,shadowmap_vertex:A1,shadowmask_pars_fragment:R1,skinbase_vertex:C1,skinning_pars_vertex:w1,skinning_vertex:D1,skinnormal_vertex:N1,specularmap_fragment:U1,specularmap_pars_fragment:L1,tonemapping_fragment:O1,tonemapping_pars_fragment:P1,transmission_fragment:z1,transmission_pars_fragment:I1,uv_pars_fragment:B1,uv_pars_vertex:F1,uv_vertex:H1,worldpos_vertex:G1,background_vert:V1,background_frag:X1,backgroundCube_vert:k1,backgroundCube_frag:q1,cube_vert:Y1,cube_frag:W1,depth_vert:j1,depth_frag:Z1,distanceRGBA_vert:K1,distanceRGBA_frag:Q1,equirect_vert:J1,equirect_frag:$1,linedashed_vert:tA,linedashed_frag:eA,meshbasic_vert:nA,meshbasic_frag:iA,meshlambert_vert:aA,meshlambert_frag:sA,meshmatcap_vert:rA,meshmatcap_frag:oA,meshnormal_vert:lA,meshnormal_frag:cA,meshphong_vert:uA,meshphong_frag:fA,meshphysical_vert:hA,meshphysical_frag:dA,meshtoon_vert:pA,meshtoon_frag:mA,points_vert:_A,points_frag:gA,shadow_vert:vA,shadow_frag:yA,sprite_vert:SA,sprite_frag:xA},It={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Zi={basic:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Re(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Gn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Gn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Re(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Gn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Gn([It.points,It.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Gn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Gn([It.common,It.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Gn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Gn([It.sprite,It.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Gn([It.common,It.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Gn([It.lights,It.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Zi.physical={uniforms:Gn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const vu={r:0,b:0,g:0},qs=new ta,MA=new en;function EA(o,e,i,r,l,f,h){const d=new Re(0);let m=f===!0?0:1,p,v,_=null,y=0,x=null;function E(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?i:e).get(w)),w}function A(P){let w=!1;const F=E(P);F===null?S(d,m):F&&F.isColor&&(S(F,1),w=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,w){const F=E(w);F&&(F.isCubeTexture||F.mapping===Pu)?(v===void 0&&(v=new ui(new Rl(1,1,1),new ds({name:"BackgroundCubeMaterial",uniforms:po(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,L,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),qs.copy(w.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(MA.makeRotationFromEuler(qs)),v.material.toneMapped=Ne.getTransfer(F.colorSpace)!==Xe,(_!==F||y!==F.version||x!==o.toneMapping)&&(v.material.needsUpdate=!0,_=F,y=F.version,x=o.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new ui(new zu(2,2),new ds({name:"BackgroundMaterial",uniforms:po(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(F.colorSpace)!==Xe,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||y!==F.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,_=F,y=F.version,x=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function S(P,w){P.getRGB(vu,nS(o)),r.buffers.color.setClear(vu.r,vu.g,vu.b,w,h)}function O(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,w=1){d.set(P),m=w,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,S(d,m)},render:A,addToRenderList:M,dispose:O}}function TA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let f=l,h=!1;function d(C,V,at,ct,gt){let lt=!1;const j=_(ct,at,V);f!==j&&(f=j,p(f.object)),lt=x(C,ct,at,gt),lt&&E(C,ct,at,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,w(C,V,at,ct),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function _(C,V,at){const ct=at.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let lt=gt[V.id];lt===void 0&&(lt={},gt[V.id]=lt);let j=lt[ct];return j===void 0&&(j=y(m()),lt[ct]=j),j}function y(C){const V=[],at=[],ct=[];for(let gt=0;gt<i;gt++)V[gt]=0,at[gt]=0,ct[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:at,attributeDivisors:ct,object:C,attributes:{},index:null}}function x(C,V,at,ct){const gt=f.attributes,lt=V.attributes;let j=0;const st=at.getAttributes();for(const K in st)if(st[K].location>=0){const St=gt[K];let Gt=lt[K];if(Gt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Gt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Gt=C.instanceColor)),St===void 0||St.attribute!==Gt||Gt&&St.data!==Gt.data)return!0;j++}return f.attributesNum!==j||f.index!==ct}function E(C,V,at,ct){const gt={},lt=V.attributes;let j=0;const st=at.getAttributes();for(const K in st)if(st[K].location>=0){let St=lt[K];St===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(St=C.instanceColor));const Gt={};Gt.attribute=St,St&&St.data&&(Gt.data=St.data),gt[K]=Gt,j++}f.attributes=gt,f.attributesNum=j,f.index=ct}function A(){const C=f.newAttributes;for(let V=0,at=C.length;V<at;V++)C[V]=0}function M(C){S(C,0)}function S(C,V){const at=f.newAttributes,ct=f.enabledAttributes,gt=f.attributeDivisors;at[C]=1,ct[C]===0&&(o.enableVertexAttribArray(C),ct[C]=1),gt[C]!==V&&(o.vertexAttribDivisor(C,V),gt[C]=V)}function O(){const C=f.newAttributes,V=f.enabledAttributes;for(let at=0,ct=V.length;at<ct;at++)V[at]!==C[at]&&(o.disableVertexAttribArray(at),V[at]=0)}function P(C,V,at,ct,gt,lt,j){j===!0?o.vertexAttribIPointer(C,V,at,gt,lt):o.vertexAttribPointer(C,V,at,ct,gt,lt)}function w(C,V,at,ct){A();const gt=ct.attributes,lt=at.getAttributes(),j=V.defaultAttributeValues;for(const st in lt){const K=lt[st];if(K.location>=0){let vt=gt[st];if(vt===void 0&&(st==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),st==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor)),vt!==void 0){const St=vt.normalized,Gt=vt.itemSize,re=e.get(vt);if(re===void 0)continue;const be=re.buffer,I=re.type,ut=re.bytesPerElement,$=I===o.INT||I===o.UNSIGNED_INT||vt.gpuType===Jp;if(vt.isInterleavedBufferAttribute){const it=vt.data,Mt=it.stride,Ut=vt.offset;if(it.isInstancedInterleavedBuffer){for(let Rt=0;Rt<K.locationSize;Rt++)S(K.location+Rt,it.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Rt=0;Rt<K.locationSize;Rt++)M(K.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,be);for(let Rt=0;Rt<K.locationSize;Rt++)P(K.location+Rt,Gt/K.locationSize,I,St,Mt*ut,(Ut+Gt/K.locationSize*Rt)*ut,$)}else{if(vt.isInstancedBufferAttribute){for(let it=0;it<K.locationSize;it++)S(K.location+it,vt.meshPerAttribute);C.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let it=0;it<K.locationSize;it++)M(K.location+it);o.bindBuffer(o.ARRAY_BUFFER,be);for(let it=0;it<K.locationSize;it++)P(K.location+it,Gt/K.locationSize,I,St,Gt*ut,Gt/K.locationSize*it*ut,$)}}else if(j!==void 0){const St=j[st];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(K.location,St);break;case 3:o.vertexAttrib3fv(K.location,St);break;case 4:o.vertexAttrib4fv(K.location,St);break;default:o.vertexAttrib1fv(K.location,St)}}}}O()}function F(){q();for(const C in r){const V=r[C];for(const at in V){const ct=V[at];for(const gt in ct)v(ct[gt].object),delete ct[gt];delete V[at]}delete r[C]}}function B(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const at in V){const ct=V[at];for(const gt in ct)v(ct[gt].object),delete ct[gt];delete V[at]}delete r[C.id]}function L(C){for(const V in r){const at=r[V];if(at[C.id]===void 0)continue;const ct=at[C.id];for(const gt in ct)v(ct[gt].object),delete ct[gt];delete at[C.id]}}function q(){D(),h=!0,f!==l&&(f=l,p(f.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:L,initAttributes:A,enableAttribute:M,disableUnusedAttributes:O}}function bA(o,e,i){let r;function l(p){r=p}function f(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function h(p,v,_){_!==0&&(o.drawArraysInstanced(r,p,v,_),i.update(v,r,_))}function d(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let x=0;for(let E=0;E<_;E++)x+=v[E];i.update(x,r,1)}function m(p,v,_,y){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)h(p[E],v[E],y[E]);else{x.multiDrawArraysInstancedWEBGL(r,p,0,v,0,y,0,_);let E=0;for(let A=0;A<_;A++)E+=v[A]*y[A];i.update(E,r,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function AA(o,e,i,r){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(L){return!(L!==Pi&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(L){const q=L===El&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==$i&&r.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Aa&&!q)}function m(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:x,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:O,maxVaryings:P,maxFragmentUniforms:w,vertexTextures:F,maxSamples:B}}function RA(o){const e=this;let i=null,r=0,l=!1,f=!1;const h=new ls,d=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const x=_.length!==0||y||r!==0||l;return l=y,r=_.length,x},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(_,y){i=v(_,y,0)},this.setState=function(_,y,x){const E=_.clippingPlanes,A=_.clipIntersection,M=_.clipShadows,S=o.get(_);if(!l||E===null||E.length===0||f&&!M)f?v(null):p();else{const O=f?0:r,P=O*4;let w=S.clippingState||null;m.value=w,w=v(E,y,P,x);for(let F=0;F!==P;++F)w[F]=i[F];S.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,y,x,E){const A=_!==null?_.length:0;let M=null;if(A!==0){if(M=m.value,E!==!0||M===null){const S=x+A*4,O=y.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<S)&&(M=new Float32Array(S));for(let P=0,w=x;P!==A;++P,w+=4)h.copy(_[P]).applyMatrix4(O,d),h.normal.toArray(M,w),M[w+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function CA(o){let e=new WeakMap;function i(h,d){return d===up?h.mapping=uo:d===fp&&(h.mapping=fo),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===up||d===fp)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new TT(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){e=new WeakMap}return{get:r,dispose:f}}const so=4,ay=[.125,.215,.35,.446,.526,.582],Zs=20,Yd=new lS,sy=new Re;let Wd=null,jd=0,Zd=0,Kd=!1;const Ws=(1+Math.sqrt(5))/2,io=1/Ws,ry=[new k(-Ws,io,0),new k(Ws,io,0),new k(-io,0,Ws),new k(io,0,Ws),new k(0,Ws,-io),new k(0,Ws,io),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],wA=new k;class oy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,f={}){const{size:h=256,position:d=wA}=f;Wd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd,jd,Zd),this._renderer.xr.enabled=Kd,e.scissorTest=!1,yu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===uo||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:El,format:Pi,colorSpace:ho,depthBuffer:!1},l=ly(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ly(e,i,r);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DA(f)),this._blurMaterial=NA(f,e,i)}return l}_compileMaterial(e){const i=new ui(this._lodPlanes[0],e);this._renderer.compile(i,Yd)}_sceneToCubeUV(e,i,r,l,f){const m=new Ei(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(sy),_.toneMapping=fs,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const A=new $y({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1}),M=new ui(new Rl,A);let S=!1;const O=e.background;O?O.isColor&&(A.color.copy(O),e.background=null,S=!0):(A.color.copy(sy),S=!0);for(let P=0;P<6;P++){const w=P%3;w===0?(m.up.set(0,p[P],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+v[P],f.y,f.z)):w===1?(m.up.set(0,0,p[P]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+v[P],f.z)):(m.up.set(0,p[P],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+v[P]));const F=this._cubeSize;yu(l,w*F,P>2?F:0,F,F),_.setRenderTarget(l),S&&_.render(M,m),_.render(e,m)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=x,_.autoClear=y,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===uo||e.mapping===fo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=uy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cy());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new ui(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const m=this._cubeSize;yu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Yd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=ry[(l-f-1)%ry.length];this._blur(e,f-1,f,h,d)}i.autoClear=r}_blur(e,i,r,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",f),this._halfBlur(h,e,r,r,l,"longitudinal",f)}_halfBlur(e,i,r,l,f,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new ui(this._lodPlanes[l],p),y=p.uniforms,x=this._sizeLods[r]-1,E=isFinite(f)?Math.PI/(2*x):2*Math.PI/(2*Zs-1),A=f/E,M=isFinite(f)?1+Math.floor(v*A):Zs;M>Zs&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Zs}`);const S=[];let O=0;for(let L=0;L<Zs;++L){const q=L/A,D=Math.exp(-q*q/2);S.push(D),L===0?O+=D:L<M&&(O+=2*D)}for(let L=0;L<S.length;L++)S[L]=S[L]/O;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=S,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=E,y.mipInt.value=P-r;const w=this._sizeLods[l],F=3*w*(l>P-so?l-P+so:0),B=4*(this._cubeSize-w);yu(i,F,B,3*w,2*w),m.setRenderTarget(i),m.render(_,Yd)}}function DA(o){const e=[],i=[],r=[];let l=o;const f=o-so+1+ay.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-so?m=ay[h-o+so-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),v=-p,_=1+p,y=[v,v,_,v,_,_,v,v,_,_,v,_],x=6,E=6,A=3,M=2,S=1,O=new Float32Array(A*E*x),P=new Float32Array(M*E*x),w=new Float32Array(S*E*x);for(let B=0;B<x;B++){const L=B%3*2/3-1,q=B>2?0:-1,D=[L,q,0,L+2/3,q,0,L+2/3,q+1,0,L,q,0,L+2/3,q+1,0,L,q+1,0];O.set(D,A*E*B),P.set(y,M*E*B);const C=[B,B,B,B,B,B];w.set(C,S*E*B)}const F=new ea;F.setAttribute("position",new Ji(O,A)),F.setAttribute("uv",new Ji(P,M)),F.setAttribute("faceIndex",new Ji(w,S)),e.push(F),l>so&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function ly(o,e,i){const r=new tr(o,e,i);return r.texture.mapping=Pu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function NA(o,e,i){const r=new Float32Array(Zs),l=new k(0,1,0);return new ds({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:fm(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function cy(){return new ds({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fm(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function uy(){return new ds({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function fm(){return`

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
	`}function UA(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===up||m===fp,v=m===uo||m===fo;if(p||v){let _=e.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new oy(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const x=d.image;return p&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new oy(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",f),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function f(d){const m=d.target;m.removeEventListener("dispose",f);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function LA(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&xl("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function OA(o,e,i,r){const l={},f=new WeakMap;function h(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const x=f.get(y);x&&(e.remove(x),f.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(_,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(_){const y=_.attributes;for(const x in y)e.update(y[x],o.ARRAY_BUFFER)}function p(_){const y=[],x=_.index,E=_.attributes.position;let A=0;if(x!==null){const O=x.array;A=x.version;for(let P=0,w=O.length;P<w;P+=3){const F=O[P+0],B=O[P+1],L=O[P+2];y.push(F,B,B,L,L,F)}}else if(E!==void 0){const O=E.array;A=E.version;for(let P=0,w=O.length/3-1;P<w;P+=3){const F=P+0,B=P+1,L=P+2;y.push(F,B,B,L,L,F)}}else return;const M=new(Ky(y)?eS:tS)(y,1);M.version=A;const S=f.get(_);S&&e.remove(S),f.set(_,M)}function v(_){const y=f.get(_);if(y){const x=_.index;x!==null&&y.version<x.version&&p(_)}else p(_);return f.get(_)}return{get:d,update:m,getWireframeAttribute:v}}function PA(o,e,i){let r;function l(y){r=y}let f,h;function d(y){f=y.type,h=y.bytesPerElement}function m(y,x){o.drawElements(r,x,f,y*h),i.update(x,r,1)}function p(y,x,E){E!==0&&(o.drawElementsInstanced(r,x,f,y*h,E),i.update(x,r,E))}function v(y,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,f,y,0,E);let M=0;for(let S=0;S<E;S++)M+=x[S];i.update(M,r,1)}function _(y,x,E,A){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<y.length;S++)p(y[S]/h,x[S],A[S]);else{M.multiDrawElementsInstancedWEBGL(r,x,0,f,y,0,A,0,E);let S=0;for(let O=0;O<E;O++)S+=x[O]*A[O];i.update(S,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function zA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function IA(o,e,i){const r=new WeakMap,l=new rn;function f(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let y=r.get(d);if(y===void 0||y.count!==_){let C=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var x=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),M===!0&&(w=3);let F=d.attributes.position.count*w,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const L=new Float32Array(F*B*4*_),q=new Qy(L,F,B,_);q.type=Aa,q.needsUpdate=!0;const D=w*4;for(let V=0;V<_;V++){const at=S[V],ct=O[V],gt=P[V],lt=F*B*4*V;for(let j=0;j<at.count;j++){const st=j*D;E===!0&&(l.fromBufferAttribute(at,j),L[lt+st+0]=l.x,L[lt+st+1]=l.y,L[lt+st+2]=l.z,L[lt+st+3]=0),A===!0&&(l.fromBufferAttribute(ct,j),L[lt+st+4]=l.x,L[lt+st+5]=l.y,L[lt+st+6]=l.z,L[lt+st+7]=0),M===!0&&(l.fromBufferAttribute(gt,j),L[lt+st+8]=l.x,L[lt+st+9]=l.y,L[lt+st+10]=l.z,L[lt+st+11]=gt.itemSize===4?l.w:1)}}y={count:_,texture:q,size:new ue(F,B)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function BA(o,e,i,r){let l=new WeakMap;function f(m){const p=r.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:f,dispose:h}}const uS=new Jn,fy=new sS(1,1),fS=new Qy,hS=new oT,dS=new aS,hy=[],dy=[],py=new Float32Array(16),my=new Float32Array(9),_y=new Float32Array(4);function _o(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let f=hy[l];if(f===void 0&&(f=new Float32Array(l),hy[l]=f),e!==0){r.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function vn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function yn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Iu(o,e){let i=dy[e];i===void 0&&(i=new Int32Array(e),dy[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function FA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function HA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2fv(this.addr,e),yn(i,e)}}function GA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;o.uniform3fv(this.addr,e),yn(i,e)}}function VA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4fv(this.addr,e),yn(i,e)}}function XA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(vn(i,r))return;_y.set(r),o.uniformMatrix2fv(this.addr,!1,_y),yn(i,r)}}function kA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(vn(i,r))return;my.set(r),o.uniformMatrix3fv(this.addr,!1,my),yn(i,r)}}function qA(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(vn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(vn(i,r))return;py.set(r),o.uniformMatrix4fv(this.addr,!1,py),yn(i,r)}}function YA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function WA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2iv(this.addr,e),yn(i,e)}}function jA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3iv(this.addr,e),yn(i,e)}}function ZA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4iv(this.addr,e),yn(i,e)}}function KA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function QA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2uiv(this.addr,e),yn(i,e)}}function JA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3uiv(this.addr,e),yn(i,e)}}function $A(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4uiv(this.addr,e),yn(i,e)}}function tR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(fy.compareFunction=Zy,f=fy):f=uS,i.setTexture2D(e||f,l)}function eR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||hS,l)}function nR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||dS,l)}function iR(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||fS,l)}function aR(o){switch(o){case 5126:return FA;case 35664:return HA;case 35665:return GA;case 35666:return VA;case 35674:return XA;case 35675:return kA;case 35676:return qA;case 5124:case 35670:return YA;case 35667:case 35671:return WA;case 35668:case 35672:return jA;case 35669:case 35673:return ZA;case 5125:return KA;case 36294:return QA;case 36295:return JA;case 36296:return $A;case 35678:case 36198:case 36298:case 36306:case 35682:return tR;case 35679:case 36299:case 36307:return eR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}function sR(o,e){o.uniform1fv(this.addr,e)}function rR(o,e){const i=_o(e,this.size,2);o.uniform2fv(this.addr,i)}function oR(o,e){const i=_o(e,this.size,3);o.uniform3fv(this.addr,i)}function lR(o,e){const i=_o(e,this.size,4);o.uniform4fv(this.addr,i)}function cR(o,e){const i=_o(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function uR(o,e){const i=_o(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function fR(o,e){const i=_o(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function hR(o,e){o.uniform1iv(this.addr,e)}function dR(o,e){o.uniform2iv(this.addr,e)}function pR(o,e){o.uniform3iv(this.addr,e)}function mR(o,e){o.uniform4iv(this.addr,e)}function _R(o,e){o.uniform1uiv(this.addr,e)}function gR(o,e){o.uniform2uiv(this.addr,e)}function vR(o,e){o.uniform3uiv(this.addr,e)}function yR(o,e){o.uniform4uiv(this.addr,e)}function SR(o,e,i){const r=this.cache,l=e.length,f=Iu(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||uS,f[h])}function xR(o,e,i){const r=this.cache,l=e.length,f=Iu(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||hS,f[h])}function MR(o,e,i){const r=this.cache,l=e.length,f=Iu(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||dS,f[h])}function ER(o,e,i){const r=this.cache,l=e.length,f=Iu(i,l);vn(r,f)||(o.uniform1iv(this.addr,f),yn(r,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||fS,f[h])}function TR(o){switch(o){case 5126:return sR;case 35664:return rR;case 35665:return oR;case 35666:return lR;case 35674:return cR;case 35675:return uR;case 35676:return fR;case 5124:case 35670:return hR;case 35667:case 35671:return dR;case 35668:case 35672:return pR;case 35669:case 35673:return mR;case 5125:return _R;case 36294:return gR;case 36295:return vR;case 36296:return yR;case 35678:case 36198:case 36298:case 36306:case 35682:return SR;case 35679:case 36299:case 36307:return xR;case 35680:case 36300:case 36308:case 36293:return MR;case 36289:case 36303:case 36311:case 36292:return ER}}class bR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=aR(i.type)}}class AR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=TR(i.type)}}class RR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],r)}}}const Qd=/(\w+)(\])?(\[|\.)?/g;function gy(o,e){o.seq.push(e),o.map[e.id]=e}function CR(o,e,i){const r=o.name,l=r.length;for(Qd.lastIndex=0;;){const f=Qd.exec(r),h=Qd.lastIndex;let d=f[1];const m=f[2]==="]",p=f[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){gy(i,p===void 0?new bR(d,o,e):new AR(d,o,e));break}else{let _=i.map[d];_===void 0&&(_=new RR(d),gy(i,_)),i=_}}}class Nu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);CR(f,h,this)}}setValue(e,i,r,l){const f=this.map[i];f!==void 0&&f.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function vy(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const wR=37297;let DR=0;function NR(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const yy=new pe;function UR(o){Ne._getMatrix(yy,Ne.workingColorSpace,o);const e=`mat3( ${yy.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(o)){case Uu:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Sy(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(r&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+NR(o.getShaderSource(e),d)}else return f}function LR(o,e){const i=UR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function OR(o,e){let i;switch(e){case OE:i="Linear";break;case PE:i="Reinhard";break;case zE:i="Cineon";break;case IE:i="ACESFilmic";break;case FE:i="AgX";break;case HE:i="Neutral";break;case BE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Su=new k;function PR(){Ne.getLuminanceCoefficients(Su);const o=Su.x.toFixed(4),e=Su.y.toFixed(4),i=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_l).join(`
`)}function IR(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function BR(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function _l(o){return o!==""}function xy(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function My(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FR=/^[ \t]*#include +<([\w\d./]+)>/gm;function kp(o){return o.replace(FR,GR)}const HR=new Map;function GR(o,e){let i=me[e];if(i===void 0){const r=HR.get(e);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kp(i)}const VR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ey(o){return o.replace(VR,XR)}function XR(o,e,i,r){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function Ty(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function kR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Iy?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===dE?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ea&&(e="SHADOWMAP_TYPE_VSM"),e}function qR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case uo:case fo:e="ENVMAP_TYPE_CUBE";break;case Pu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case fo:e="ENVMAP_MODE_REFRACTION";break}return e}function WR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case By:e="ENVMAP_BLENDING_MULTIPLY";break;case UE:e="ENVMAP_BLENDING_MIX";break;case LE:e="ENVMAP_BLENDING_ADD";break}return e}function jR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function ZR(o,e,i,r){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=kR(i),p=qR(i),v=YR(i),_=WR(i),y=jR(i),x=zR(i),E=IR(f),A=l.createProgram();let M,S,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(_l).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(_l).join(`
`),S.length>0&&(S+=`
`)):(M=[Ty(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_l).join(`
`),S=[Ty(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fs?"#define TONE_MAPPING":"",i.toneMapping!==fs?me.tonemapping_pars_fragment:"",i.toneMapping!==fs?OR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,LR("linearToOutputTexel",i.outputColorSpace),PR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(_l).join(`
`)),h=kp(h),h=xy(h,i),h=My(h,i),d=kp(d),d=xy(d,i),d=My(d,i),h=Ey(h),d=Ey(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=O+M+h,w=O+S+d,F=vy(l,l.VERTEX_SHADER,P),B=vy(l,l.FRAGMENT_SHADER,w);l.attachShader(A,F),l.attachShader(A,B),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function L(V){if(o.debug.checkShaderErrors){const at=l.getProgramInfoLog(A)||"",ct=l.getShaderInfoLog(F)||"",gt=l.getShaderInfoLog(B)||"",lt=at.trim(),j=ct.trim(),st=gt.trim();let K=!0,vt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,F,B);else{const St=Sy(l,F,"vertex"),Gt=Sy(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+St+`
`+Gt)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(j===""||st==="")&&(vt=!1);vt&&(V.diagnostics={runnable:K,programLog:lt,vertexShader:{log:j,prefix:M},fragmentShader:{log:st,prefix:S}})}l.deleteShader(F),l.deleteShader(B),q=new Nu(l,A),D=BR(l,A)}let q;this.getUniforms=function(){return q===void 0&&L(this),q};let D;this.getAttributes=function(){return D===void 0&&L(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,wR)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=DR++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=B,this}let KR=0;class QR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new JR(e),i.set(e,r)),r}}class JR{constructor(e){this.id=KR++,this.code=e,this.usedTimes=0}}function $R(o,e,i,r,l,f,h){const d=new om,m=new QR,p=new Set,v=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,C,V,at,ct){const gt=at.fog,lt=ct.geometry,j=D.isMeshStandardMaterial?at.environment:null,st=(D.isMeshStandardMaterial?i:e).get(D.envMap||j),K=st&&st.mapping===Pu?st.image.height:null,vt=E[D.type];D.precision!==null&&(x=l.getMaxPrecision(D.precision),x!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const St=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Gt=St!==void 0?St.length:0;let re=0;lt.morphAttributes.position!==void 0&&(re=1),lt.morphAttributes.normal!==void 0&&(re=2),lt.morphAttributes.color!==void 0&&(re=3);let be,I,ut,$;if(vt){const Me=Zi[vt];be=Me.vertexShader,I=Me.fragmentShader}else be=D.vertexShader,I=D.fragmentShader,m.update(D),ut=m.getVertexShaderID(D),$=m.getFragmentShaderID(D);const it=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Ut=ct.isInstancedMesh===!0,Rt=ct.isBatchedMesh===!0,Et=!!D.map,Yt=!!D.matcap,z=!!st,He=!!D.aoMap,se=!!D.lightMap,Qt=!!D.bumpMap,Lt=!!D.normalMap,ie=!!D.displacementMap,Ft=!!D.emissiveMap,oe=!!D.metalnessMap,qe=!!D.roughnessMap,We=D.anisotropy>0,N=D.clearcoat>0,b=D.dispersion>0,et=D.iridescence>0,dt=D.sheen>0,yt=D.transmission>0,ft=We&&!!D.anisotropyMap,Xt=N&&!!D.clearcoatMap,Ct=N&&!!D.clearcoatNormalMap,jt=N&&!!D.clearcoatRoughnessMap,Kt=et&&!!D.iridescenceMap,bt=et&&!!D.iridescenceThicknessMap,Ot=dt&&!!D.sheenColorMap,ne=dt&&!!D.sheenRoughnessMap,Zt=!!D.specularMap,Pt=!!D.specularColorMap,fe=!!D.specularIntensityMap,G=yt&&!!D.transmissionMap,At=yt&&!!D.thicknessMap,Dt=!!D.gradientMap,Vt=!!D.alphaMap,xt=D.alphaTest>0,_t=!!D.alphaHash,Wt=!!D.extensions;let ce=fs;D.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Ge={shaderID:vt,shaderType:D.type,shaderName:D.name,vertexShader:be,fragmentShader:I,defines:D.defines,customVertexShaderID:ut,customFragmentShaderID:$,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:Rt,batchingColor:Rt&&ct._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&ct.instanceColor!==null,instancingMorph:Ut&&ct.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:it===null?o.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ho,alphaToCoverage:!!D.alphaToCoverage,map:Et,matcap:Yt,envMap:z,envMapMode:z&&st.mapping,envMapCubeUVHeight:K,aoMap:He,lightMap:se,bumpMap:Qt,normalMap:Lt,displacementMap:y&&ie,emissiveMap:Ft,normalMapObjectSpace:Lt&&D.normalMapType===kE,normalMapTangentSpace:Lt&&D.normalMapType===jy,metalnessMap:oe,roughnessMap:qe,anisotropy:We,anisotropyMap:ft,clearcoat:N,clearcoatMap:Xt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:jt,dispersion:b,iridescence:et,iridescenceMap:Kt,iridescenceThicknessMap:bt,sheen:dt,sheenColorMap:Ot,sheenRoughnessMap:ne,specularMap:Zt,specularColorMap:Pt,specularIntensityMap:fe,transmission:yt,transmissionMap:G,thicknessMap:At,gradientMap:Dt,opaque:D.transparent===!1&&D.blending===oo&&D.alphaToCoverage===!1,alphaMap:Vt,alphaTest:xt,alphaHash:_t,combine:D.combine,mapUv:Et&&A(D.map.channel),aoMapUv:He&&A(D.aoMap.channel),lightMapUv:se&&A(D.lightMap.channel),bumpMapUv:Qt&&A(D.bumpMap.channel),normalMapUv:Lt&&A(D.normalMap.channel),displacementMapUv:ie&&A(D.displacementMap.channel),emissiveMapUv:Ft&&A(D.emissiveMap.channel),metalnessMapUv:oe&&A(D.metalnessMap.channel),roughnessMapUv:qe&&A(D.roughnessMap.channel),anisotropyMapUv:ft&&A(D.anisotropyMap.channel),clearcoatMapUv:Xt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:ne&&A(D.sheenRoughnessMap.channel),specularMapUv:Zt&&A(D.specularMap.channel),specularColorMapUv:Pt&&A(D.specularColorMap.channel),specularIntensityMapUv:fe&&A(D.specularIntensityMap.channel),transmissionMapUv:G&&A(D.transmissionMap.channel),thicknessMapUv:At&&A(D.thicknessMap.channel),alphaMapUv:Vt&&A(D.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Lt||We),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!lt.attributes.uv&&(Et||Vt),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Mt,skinning:ct.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:Et&&D.map.isVideoTexture===!0&&Ne.getTransfer(D.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ft&&D.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(D.emissiveMap.colorSpace)===Xe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Kn,flipSided:D.side===Qn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Wt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&D.extensions.multiDraw===!0||Rt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ge.vertexUv1s=p.has(1),Ge.vertexUv2s=p.has(2),Ge.vertexUv3s=p.has(3),p.clear(),Ge}function S(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(O(C,D),P(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function O(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function P(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=E[D.type];let V;if(C){const at=Zi[C];V=ST.clone(at.uniforms)}else V=D.uniforms;return V}function F(D,C){let V;for(let at=0,ct=v.length;at<ct;at++){const gt=v[at];if(gt.cacheKey===C){V=gt,++V.usedTimes;break}}return V===void 0&&(V=new ZR(o,C,D,f),v.push(V)),V}function B(D){if(--D.usedTimes===0){const C=v.indexOf(D);v[C]=v[v.length-1],v.pop(),D.destroy()}}function L(D){m.remove(D)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:w,acquireProgram:F,releaseProgram:B,releaseShaderCache:L,programs:v,dispose:q}}function tC(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function f(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:f}}function eC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function by(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ay(){const o=[];let e=0;const i=[],r=[],l=[];function f(){e=0,i.length=0,r.length=0,l.length=0}function h(_,y,x,E,A,M){let S=o[e];return S===void 0?(S={id:_.id,object:_,geometry:y,material:x,groupOrder:E,renderOrder:_.renderOrder,z:A,group:M},o[e]=S):(S.id=_.id,S.object=_,S.geometry=y,S.material=x,S.groupOrder=E,S.renderOrder=_.renderOrder,S.z=A,S.group=M),e++,S}function d(_,y,x,E,A,M){const S=h(_,y,x,E,A,M);x.transmission>0?r.push(S):x.transparent===!0?l.push(S):i.push(S)}function m(_,y,x,E,A,M){const S=h(_,y,x,E,A,M);x.transmission>0?r.unshift(S):x.transparent===!0?l.unshift(S):i.unshift(S)}function p(_,y){i.length>1&&i.sort(_||eC),r.length>1&&r.sort(y||by),l.length>1&&l.sort(y||by)}function v(){for(let _=e,y=o.length;_<y;_++){const x=o[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:l,init:f,push:d,unshift:m,finish:v,sort:p}}function nC(){let o=new WeakMap;function e(r,l){const f=o.get(r);let h;return f===void 0?(h=new Ay,o.set(r,[h])):l>=f.length?(h=new Ay,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function iC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new k,color:new Re};break;case"SpotLight":i={position:new k,direction:new k,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new k,halfWidth:new k,halfHeight:new k};break}return o[e.id]=i,i}}}function aC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let sC=0;function rC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function oC(o){const e=new iC,i=aC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new k);const l=new k,f=new en,h=new en;function d(p){let v=0,_=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let x=0,E=0,A=0,M=0,S=0,O=0,P=0,w=0,F=0,B=0,L=0;p.sort(rC);for(let D=0,C=p.length;D<C;D++){const V=p[D],at=V.color,ct=V.intensity,gt=V.distance,lt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=at.r*ct,_+=at.g*ct,y+=at.b*ct;else if(V.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(V.sh.coefficients[j],ct);L++}else if(V.isDirectionalLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const st=V.shadow,K=i.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,r.directionalShadow[x]=K,r.directionalShadowMap[x]=lt,r.directionalShadowMatrix[x]=V.shadow.matrix,O++}r.directional[x]=j,x++}else if(V.isSpotLight){const j=e.get(V);j.position.setFromMatrixPosition(V.matrixWorld),j.color.copy(at).multiplyScalar(ct),j.distance=gt,j.coneCos=Math.cos(V.angle),j.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),j.decay=V.decay,r.spot[A]=j;const st=V.shadow;if(V.map&&(r.spotLightMap[F]=V.map,F++,st.updateMatrices(V),V.castShadow&&B++),r.spotLightMatrix[A]=st.matrix,V.castShadow){const K=i.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,r.spotShadow[A]=K,r.spotShadowMap[A]=lt,w++}A++}else if(V.isRectAreaLight){const j=e.get(V);j.color.copy(at).multiplyScalar(ct),j.halfWidth.set(V.width*.5,0,0),j.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=j,M++}else if(V.isPointLight){const j=e.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity),j.distance=V.distance,j.decay=V.decay,V.castShadow){const st=V.shadow,K=i.get(V);K.shadowIntensity=st.intensity,K.shadowBias=st.bias,K.shadowNormalBias=st.normalBias,K.shadowRadius=st.radius,K.shadowMapSize=st.mapSize,K.shadowCameraNear=st.camera.near,K.shadowCameraFar=st.camera.far,r.pointShadow[E]=K,r.pointShadowMap[E]=lt,r.pointShadowMatrix[E]=V.shadow.matrix,P++}r.point[E]=j,E++}else if(V.isHemisphereLight){const j=e.get(V);j.skyColor.copy(V.color).multiplyScalar(ct),j.groundColor.copy(V.groundColor).multiplyScalar(ct),r.hemi[S]=j,S++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=It.LTC_FLOAT_1,r.rectAreaLTC2=It.LTC_FLOAT_2):(r.rectAreaLTC1=It.LTC_HALF_1,r.rectAreaLTC2=It.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=y;const q=r.hash;(q.directionalLength!==x||q.pointLength!==E||q.spotLength!==A||q.rectAreaLength!==M||q.hemiLength!==S||q.numDirectionalShadows!==O||q.numPointShadows!==P||q.numSpotShadows!==w||q.numSpotMaps!==F||q.numLightProbes!==L)&&(r.directional.length=x,r.spot.length=A,r.rectArea.length=M,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=w+F-B,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=L,q.directionalLength=x,q.pointLength=E,q.spotLength=A,q.rectAreaLength=M,q.hemiLength=S,q.numDirectionalShadows=O,q.numPointShadows=P,q.numSpotShadows=w,q.numSpotMaps=F,q.numLightProbes=L,r.version=sC++)}function m(p,v){let _=0,y=0,x=0,E=0,A=0;const M=v.matrixWorldInverse;for(let S=0,O=p.length;S<O;S++){const P=p[S];if(P.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),_++}else if(P.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),x++}else if(P.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(M),h.identity(),f.copy(P.matrixWorld),f.premultiply(M),h.extractRotation(f),w.halfWidth.set(P.width*.5,0,0),w.halfHeight.set(0,P.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(P.isPointLight){const w=r.point[y];w.position.setFromMatrixPosition(P.matrixWorld),w.position.applyMatrix4(M),y++}else if(P.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(P.matrixWorld),w.direction.transformDirection(M),A++}}}return{setup:d,setupView:m,state:r}}function Ry(o){const e=new oC(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function f(v){i.push(v)}function h(v){r.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:f,pushShadow:h}}function lC(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new Ry(o),e.set(l,[d])):f>=h.length?(d=new Ry(o),h.push(d)):d=h[f],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const cC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uC=`uniform sampler2D shadow_pass;
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
}`;function fC(o,e,i){let r=new lm;const l=new ue,f=new ue,h=new rn,d=new UT({depthPacking:XE}),m=new LT,p={},v=i.maxTextureSize,_={[hs]:Qn,[Qn]:hs,[Kn]:Kn},y=new ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:cC,fragmentShader:uC}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const E=new ea;E.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ui(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iy;let S=this.type;this.render=function(B,L,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),at=o.state;at.setBlending(us),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ct=S!==Ea&&this.type===Ea,gt=S===Ea&&this.type!==Ea;for(let lt=0,j=B.length;lt<j;lt++){const st=B[lt],K=st.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const vt=K.getFrameExtents();if(l.multiply(vt),f.copy(K.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(f.x=Math.floor(v/vt.x),l.x=f.x*vt.x,K.mapSize.x=f.x),l.y>v&&(f.y=Math.floor(v/vt.y),l.y=f.y*vt.y,K.mapSize.y=f.y)),K.map===null||ct===!0||gt===!0){const Gt=this.type!==Ea?{minFilter:zi,magFilter:zi}:{};K.map!==null&&K.map.dispose(),K.map=new tr(l.x,l.y,Gt),K.map.texture.name=st.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const St=K.getViewportCount();for(let Gt=0;Gt<St;Gt++){const re=K.getViewport(Gt);h.set(f.x*re.x,f.y*re.y,f.x*re.z,f.y*re.w),at.viewport(h),K.updateMatrices(st,Gt),r=K.getFrustum(),w(L,q,K.camera,st,this.type)}K.isPointLightShadow!==!0&&this.type===Ea&&O(K,q),K.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(D,C,V)};function O(B,L){const q=e.update(A);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,x.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new tr(l.x,l.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(L,null,q,y,A,null),x.uniforms.shadow_pass.value=B.mapPass.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(L,null,q,x,A,null)}function P(B,L,q,D){let C=null;const V=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)C=V;else if(C=q.isPointLight===!0?m:d,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const at=C.uuid,ct=L.uuid;let gt=p[at];gt===void 0&&(gt={},p[at]=gt);let lt=gt[ct];lt===void 0&&(lt=C.clone(),gt[ct]=lt,L.addEventListener("dispose",F)),C=lt}if(C.visible=L.visible,C.wireframe=L.wireframe,D===Ea?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:_[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const at=o.properties.get(C);at.light=q}return C}function w(B,L,q,D,C){if(B.visible===!1)return;if(B.layers.test(L.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Ea)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const ct=e.update(B),gt=B.material;if(Array.isArray(gt)){const lt=ct.groups;for(let j=0,st=lt.length;j<st;j++){const K=lt[j],vt=gt[K.materialIndex];if(vt&&vt.visible){const St=P(B,vt,D,C);B.onBeforeShadow(o,B,L,q,ct,St,K),o.renderBufferDirect(q,null,ct,St,B,K),B.onAfterShadow(o,B,L,q,ct,St,K)}}}else if(gt.visible){const lt=P(B,gt,D,C);B.onBeforeShadow(o,B,L,q,ct,lt,null),o.renderBufferDirect(q,null,ct,lt,B,null),B.onAfterShadow(o,B,L,q,ct,lt,null)}}const at=B.children;for(let ct=0,gt=at.length;ct<gt;ct++)w(at[ct],L,q,D,C)}function F(B){B.target.removeEventListener("dispose",F);for(const q in p){const D=p[q],C=B.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const hC={[ip]:ap,[sp]:lp,[rp]:cp,[co]:op,[ap]:ip,[lp]:sp,[cp]:rp,[op]:co};function dC(o,e){function i(){let G=!1;const At=new rn;let Dt=null;const Vt=new rn(0,0,0,0);return{setMask:function(xt){Dt!==xt&&!G&&(o.colorMask(xt,xt,xt,xt),Dt=xt)},setLocked:function(xt){G=xt},setClear:function(xt,_t,Wt,ce,Ge){Ge===!0&&(xt*=ce,_t*=ce,Wt*=ce),At.set(xt,_t,Wt,ce),Vt.equals(At)===!1&&(o.clearColor(xt,_t,Wt,ce),Vt.copy(At))},reset:function(){G=!1,Dt=null,Vt.set(-1,0,0,0)}}}function r(){let G=!1,At=!1,Dt=null,Vt=null,xt=null;return{setReversed:function(_t){if(At!==_t){const Wt=e.get("EXT_clip_control");_t?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),At=_t;const ce=xt;xt=null,this.setClear(ce)}},getReversed:function(){return At},setTest:function(_t){_t?it(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(_t){Dt!==_t&&!G&&(o.depthMask(_t),Dt=_t)},setFunc:function(_t){if(At&&(_t=hC[_t]),Vt!==_t){switch(_t){case ip:o.depthFunc(o.NEVER);break;case ap:o.depthFunc(o.ALWAYS);break;case sp:o.depthFunc(o.LESS);break;case co:o.depthFunc(o.LEQUAL);break;case rp:o.depthFunc(o.EQUAL);break;case op:o.depthFunc(o.GEQUAL);break;case lp:o.depthFunc(o.GREATER);break;case cp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Vt=_t}},setLocked:function(_t){G=_t},setClear:function(_t){xt!==_t&&(At&&(_t=1-_t),o.clearDepth(_t),xt=_t)},reset:function(){G=!1,Dt=null,Vt=null,xt=null,At=!1}}}function l(){let G=!1,At=null,Dt=null,Vt=null,xt=null,_t=null,Wt=null,ce=null,Ge=null;return{setTest:function(Me){G||(Me?it(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(Me){At!==Me&&!G&&(o.stencilMask(Me),At=Me)},setFunc:function(Me,$e,pn){(Dt!==Me||Vt!==$e||xt!==pn)&&(o.stencilFunc(Me,$e,pn),Dt=Me,Vt=$e,xt=pn)},setOp:function(Me,$e,pn){(_t!==Me||Wt!==$e||ce!==pn)&&(o.stencilOp(Me,$e,pn),_t=Me,Wt=$e,ce=pn)},setLocked:function(Me){G=Me},setClear:function(Me){Ge!==Me&&(o.clearStencil(Me),Ge=Me)},reset:function(){G=!1,At=null,Dt=null,Vt=null,xt=null,_t=null,Wt=null,ce=null,Ge=null}}}const f=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},_={},y=new WeakMap,x=[],E=null,A=!1,M=null,S=null,O=null,P=null,w=null,F=null,B=null,L=new Re(0,0,0),q=0,D=!1,C=null,V=null,at=null,ct=null,gt=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,st=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=st>=1):K.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=st>=2);let vt=null,St={};const Gt=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),be=new rn().fromArray(Gt),I=new rn().fromArray(re);function ut(G,At,Dt,Vt){const xt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(G,_t),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Wt=0;Wt<Dt;Wt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,Vt,0,o.RGBA,o.UNSIGNED_BYTE,xt):o.texImage2D(At+Wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,xt);return _t}const $={};$[o.TEXTURE_2D]=ut(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),it(o.DEPTH_TEST),h.setFunc(co),Qt(!1),Lt(Cv),it(o.CULL_FACE),He(us);function it(G){v[G]!==!0&&(o.enable(G),v[G]=!0)}function Mt(G){v[G]!==!1&&(o.disable(G),v[G]=!1)}function Ut(G,At){return _[G]!==At?(o.bindFramebuffer(G,At),_[G]=At,G===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=At),G===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=At),!0):!1}function Rt(G,At){let Dt=x,Vt=!1;if(G){Dt=y.get(At),Dt===void 0&&(Dt=[],y.set(At,Dt));const xt=G.textures;if(Dt.length!==xt.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Wt=xt.length;_t<Wt;_t++)Dt[_t]=o.COLOR_ATTACHMENT0+_t;Dt.length=xt.length,Vt=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Vt=!0);Vt&&o.drawBuffers(Dt)}function Et(G){return E!==G?(o.useProgram(G),E=G,!0):!1}const Yt={[js]:o.FUNC_ADD,[mE]:o.FUNC_SUBTRACT,[_E]:o.FUNC_REVERSE_SUBTRACT};Yt[gE]=o.MIN,Yt[vE]=o.MAX;const z={[yE]:o.ZERO,[SE]:o.ONE,[xE]:o.SRC_COLOR,[ep]:o.SRC_ALPHA,[RE]:o.SRC_ALPHA_SATURATE,[bE]:o.DST_COLOR,[EE]:o.DST_ALPHA,[ME]:o.ONE_MINUS_SRC_COLOR,[np]:o.ONE_MINUS_SRC_ALPHA,[AE]:o.ONE_MINUS_DST_COLOR,[TE]:o.ONE_MINUS_DST_ALPHA,[CE]:o.CONSTANT_COLOR,[wE]:o.ONE_MINUS_CONSTANT_COLOR,[DE]:o.CONSTANT_ALPHA,[NE]:o.ONE_MINUS_CONSTANT_ALPHA};function He(G,At,Dt,Vt,xt,_t,Wt,ce,Ge,Me){if(G===us){A===!0&&(Mt(o.BLEND),A=!1);return}if(A===!1&&(it(o.BLEND),A=!0),G!==pE){if(G!==M||Me!==D){if((S!==js||w!==js)&&(o.blendEquation(o.FUNC_ADD),S=js,w=js),Me)switch(G){case oo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wv:o.blendFunc(o.ONE,o.ONE);break;case Dv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Nv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case oo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Dv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}O=null,P=null,F=null,B=null,L.set(0,0,0),q=0,M=G,D=Me}return}xt=xt||At,_t=_t||Dt,Wt=Wt||Vt,(At!==S||xt!==w)&&(o.blendEquationSeparate(Yt[At],Yt[xt]),S=At,w=xt),(Dt!==O||Vt!==P||_t!==F||Wt!==B)&&(o.blendFuncSeparate(z[Dt],z[Vt],z[_t],z[Wt]),O=Dt,P=Vt,F=_t,B=Wt),(ce.equals(L)===!1||Ge!==q)&&(o.blendColor(ce.r,ce.g,ce.b,Ge),L.copy(ce),q=Ge),M=G,D=!1}function se(G,At){G.side===Kn?Mt(o.CULL_FACE):it(o.CULL_FACE);let Dt=G.side===Qn;At&&(Dt=!Dt),Qt(Dt),G.blending===oo&&G.transparent===!1?He(us):He(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),h.setFunc(G.depthFunc),h.setTest(G.depthTest),h.setMask(G.depthWrite),f.setMask(G.colorWrite);const Vt=G.stencilWrite;d.setTest(Vt),Vt&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ft(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?it(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(G){C!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),C=G)}function Lt(G){G!==fE?(it(o.CULL_FACE),G!==V&&(G===Cv?o.cullFace(o.BACK):G===hE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),V=G}function ie(G){G!==at&&(j&&o.lineWidth(G),at=G)}function Ft(G,At,Dt){G?(it(o.POLYGON_OFFSET_FILL),(ct!==At||gt!==Dt)&&(o.polygonOffset(At,Dt),ct=At,gt=Dt)):Mt(o.POLYGON_OFFSET_FILL)}function oe(G){G?it(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function qe(G){G===void 0&&(G=o.TEXTURE0+lt-1),vt!==G&&(o.activeTexture(G),vt=G)}function We(G,At,Dt){Dt===void 0&&(vt===null?Dt=o.TEXTURE0+lt-1:Dt=vt);let Vt=St[Dt];Vt===void 0&&(Vt={type:void 0,texture:void 0},St[Dt]=Vt),(Vt.type!==G||Vt.texture!==At)&&(vt!==Dt&&(o.activeTexture(Dt),vt=Dt),o.bindTexture(G,At||$[G]),Vt.type=G,Vt.texture=At)}function N(){const G=St[vt];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{o.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(){try{o.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ct(){try{o.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(){try{o.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Kt(){try{o.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{o.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ot(G){be.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),be.copy(G))}function ne(G){I.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),I.copy(G))}function Zt(G,At){let Dt=p.get(At);Dt===void 0&&(Dt=new WeakMap,p.set(At,Dt));let Vt=Dt.get(G);Vt===void 0&&(Vt=o.getUniformBlockIndex(At,G.name),Dt.set(G,Vt))}function Pt(G,At){const Vt=p.get(At).get(G);m.get(At)!==Vt&&(o.uniformBlockBinding(At,Vt,G.__bindingPointIndex),m.set(At,Vt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},vt=null,St={},_={},y=new WeakMap,x=[],E=null,A=!1,M=null,S=null,O=null,P=null,w=null,F=null,B=null,L=new Re(0,0,0),q=0,D=!1,C=null,V=null,at=null,ct=null,gt=null,be.set(0,0,o.canvas.width,o.canvas.height),I.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:it,disable:Mt,bindFramebuffer:Ut,drawBuffers:Rt,useProgram:Et,setBlending:He,setMaterial:se,setFlipSided:Qt,setCullFace:Lt,setLineWidth:ie,setPolygonOffset:Ft,setScissorTest:oe,activeTexture:qe,bindTexture:We,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:et,texImage2D:Kt,texImage3D:bt,updateUBOMapping:Zt,uniformBlockBinding:Pt,texStorage2D:Ct,texStorage3D:jt,texSubImage2D:dt,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Xt,scissor:Ot,viewport:ne,reset:fe}}function pC(o,e,i,r,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ue,v=new WeakMap;let _;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return x?new OffscreenCanvas(N,b):Ou("canvas")}function A(N,b,et){let dt=1;const yt=We(N);if((yt.width>et||yt.height>et)&&(dt=et/Math.max(yt.width,yt.height)),dt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ft=Math.floor(dt*yt.width),Xt=Math.floor(dt*yt.height);_===void 0&&(_=E(ft,Xt));const Ct=b?E(ft,Xt):_;return Ct.width=ft,Ct.height=Xt,Ct.getContext("2d").drawImage(N,0,0,ft,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ft+"x"+Xt+")."),Ct}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),N;return N}function M(N){return N.generateMipmaps}function S(N){o.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(N,b,et,dt,yt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ft=b;if(b===o.RED&&(et===o.FLOAT&&(ft=o.R32F),et===o.HALF_FLOAT&&(ft=o.R16F),et===o.UNSIGNED_BYTE&&(ft=o.R8)),b===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.R8UI),et===o.UNSIGNED_SHORT&&(ft=o.R16UI),et===o.UNSIGNED_INT&&(ft=o.R32UI),et===o.BYTE&&(ft=o.R8I),et===o.SHORT&&(ft=o.R16I),et===o.INT&&(ft=o.R32I)),b===o.RG&&(et===o.FLOAT&&(ft=o.RG32F),et===o.HALF_FLOAT&&(ft=o.RG16F),et===o.UNSIGNED_BYTE&&(ft=o.RG8)),b===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RG8UI),et===o.UNSIGNED_SHORT&&(ft=o.RG16UI),et===o.UNSIGNED_INT&&(ft=o.RG32UI),et===o.BYTE&&(ft=o.RG8I),et===o.SHORT&&(ft=o.RG16I),et===o.INT&&(ft=o.RG32I)),b===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),et===o.UNSIGNED_INT&&(ft=o.RGB32UI),et===o.BYTE&&(ft=o.RGB8I),et===o.SHORT&&(ft=o.RGB16I),et===o.INT&&(ft=o.RGB32I)),b===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),et===o.UNSIGNED_INT&&(ft=o.RGBA32UI),et===o.BYTE&&(ft=o.RGBA8I),et===o.SHORT&&(ft=o.RGBA16I),et===o.INT&&(ft=o.RGBA32I)),b===o.RGB&&(et===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),et===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),b===o.RGBA){const Xt=yt?Uu:Ne.getTransfer(dt);et===o.FLOAT&&(ft=o.RGBA32F),et===o.HALF_FLOAT&&(ft=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ft=Xt===Xe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function w(N,b){let et;return N?b===null||b===Js||b===vl?et=o.DEPTH24_STENCIL8:b===Aa?et=o.DEPTH32F_STENCIL8:b===gl&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Js||b===vl?et=o.DEPTH_COMPONENT24:b===Aa?et=o.DEPTH_COMPONENT32F:b===gl&&(et=o.DEPTH_COMPONENT16),et}function F(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==zi&&N.minFilter!==Ki?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function B(N){const b=N.target;b.removeEventListener("dispose",B),q(b),b.isVideoTexture&&v.delete(b)}function L(N){const b=N.target;b.removeEventListener("dispose",L),C(b)}function q(N){const b=r.get(N);if(b.__webglInit===void 0)return;const et=N.source,dt=y.get(et);if(dt){const yt=dt[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&D(N),Object.keys(dt).length===0&&y.delete(et)}r.remove(N)}function D(N){const b=r.get(N);o.deleteTexture(b.__webglTexture);const et=N.source,dt=y.get(et);delete dt[b.__cacheKey],h.memory.textures--}function C(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(b.__webglFramebuffer[dt]))for(let yt=0;yt<b.__webglFramebuffer[dt].length;yt++)o.deleteFramebuffer(b.__webglFramebuffer[dt][yt]);else o.deleteFramebuffer(b.__webglFramebuffer[dt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[dt])}else{if(Array.isArray(b.__webglFramebuffer))for(let dt=0;dt<b.__webglFramebuffer.length;dt++)o.deleteFramebuffer(b.__webglFramebuffer[dt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let dt=0;dt<b.__webglColorRenderbuffer.length;dt++)b.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[dt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=N.textures;for(let dt=0,yt=et.length;dt<yt;dt++){const ft=r.get(et[dt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),r.remove(et[dt])}r.remove(N)}let V=0;function at(){V=0}function ct(){const N=V;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),V+=1,N}function gt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function lt(N,b){const et=r.get(N);if(N.isVideoTexture&&oe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&et.__version!==N.version){const dt=N.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(et,N,b);return}}else N.isExternalTexture&&(et.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+b)}function j(N,b){const et=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){$(et,N,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+b)}function st(N,b){const et=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&et.__version!==N.version){$(et,N,b);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+b)}function K(N,b){const et=r.get(N);if(N.version>0&&et.__version!==N.version){it(et,N,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+b)}const vt={[hp]:o.REPEAT,[Ks]:o.CLAMP_TO_EDGE,[dp]:o.MIRRORED_REPEAT},St={[zi]:o.NEAREST,[GE]:o.NEAREST_MIPMAP_NEAREST,[$c]:o.NEAREST_MIPMAP_LINEAR,[Ki]:o.LINEAR,[vd]:o.LINEAR_MIPMAP_NEAREST,[Qs]:o.LINEAR_MIPMAP_LINEAR},Gt={[qE]:o.NEVER,[QE]:o.ALWAYS,[YE]:o.LESS,[Zy]:o.LEQUAL,[WE]:o.EQUAL,[KE]:o.GEQUAL,[jE]:o.GREATER,[ZE]:o.NOTEQUAL};function re(N,b){if(b.type===Aa&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ki||b.magFilter===vd||b.magFilter===$c||b.magFilter===Qs||b.minFilter===Ki||b.minFilter===vd||b.minFilter===$c||b.minFilter===Qs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,vt[b.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,vt[b.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,vt[b.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,St[b.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,St[b.minFilter]),b.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,Gt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===zi||b.minFilter!==$c&&b.minFilter!==Qs||b.type===Aa&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function be(N,b){let et=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",B));const dt=b.source;let yt=y.get(dt);yt===void 0&&(yt={},y.set(dt,yt));const ft=gt(b);if(ft!==N.__cacheKey){yt[ft]===void 0&&(yt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),yt[ft].usedTimes++;const Xt=yt[N.__cacheKey];Xt!==void 0&&(yt[N.__cacheKey].usedTimes--,Xt.usedTimes===0&&D(b)),N.__cacheKey=ft,N.__webglTexture=yt[ft].texture}return et}function I(N,b,et){return Math.floor(Math.floor(N/et)/b)}function ut(N,b,et,dt){const ft=N.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,et,dt,b.data);else{ft.sort((bt,Ot)=>bt.start-Ot.start);let Xt=0;for(let bt=1;bt<ft.length;bt++){const Ot=ft[Xt],ne=ft[bt],Zt=Ot.start+Ot.count,Pt=I(ne.start,b.width,4),fe=I(Ot.start,b.width,4);ne.start<=Zt+1&&Pt===fe&&I(ne.start+ne.count-1,b.width,4)===Pt?Ot.count=Math.max(Ot.count,ne.start+ne.count-Ot.start):(++Xt,ft[Xt]=ne)}ft.length=Xt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let bt=0,Ot=ft.length;bt<Ot;bt++){const ne=ft[bt],Zt=Math.floor(ne.start/4),Pt=Math.ceil(ne.count/4),fe=Zt%b.width,G=Math.floor(Zt/b.width),At=Pt,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,fe,G,At,Dt,et,dt,b.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function $(N,b,et){let dt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(dt=o.TEXTURE_3D);const yt=be(N,b),ft=b.source;i.bindTexture(dt,N.__webglTexture,o.TEXTURE0+et);const Xt=r.get(ft);if(ft.version!==Xt.__version||yt===!0){i.activeTexture(o.TEXTURE0+et);const Ct=Ne.getPrimaries(Ne.workingColorSpace),jt=b.colorSpace===cs?null:Ne.getPrimaries(b.colorSpace),Kt=b.colorSpace===cs||Ct===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let bt=A(b.image,!1,l.maxTextureSize);bt=qe(b,bt);const Ot=f.convert(b.format,b.colorSpace),ne=f.convert(b.type);let Zt=P(b.internalFormat,Ot,ne,b.colorSpace,b.isVideoTexture);re(dt,b);let Pt;const fe=b.mipmaps,G=b.isVideoTexture!==!0,At=Xt.__version===void 0||yt===!0,Dt=ft.dataReady,Vt=F(b,bt);if(b.isDepthTexture)Zt=w(b.format===Sl,b.type),At&&(G?i.texStorage2D(o.TEXTURE_2D,1,Zt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Zt,bt.width,bt.height,0,Ot,ne,null));else if(b.isDataTexture)if(fe.length>0){G&&At&&i.texStorage2D(o.TEXTURE_2D,Vt,Zt,fe[0].width,fe[0].height);for(let xt=0,_t=fe.length;xt<_t;xt++)Pt=fe[xt],G?Dt&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Pt.width,Pt.height,Ot,ne,Pt.data):i.texImage2D(o.TEXTURE_2D,xt,Zt,Pt.width,Pt.height,0,Ot,ne,Pt.data);b.generateMipmaps=!1}else G?(At&&i.texStorage2D(o.TEXTURE_2D,Vt,Zt,bt.width,bt.height),Dt&&ut(b,bt,Ot,ne)):i.texImage2D(o.TEXTURE_2D,0,Zt,bt.width,bt.height,0,Ot,ne,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){G&&At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Zt,fe[0].width,fe[0].height,bt.depth);for(let xt=0,_t=fe.length;xt<_t;xt++)if(Pt=fe[xt],b.format!==Pi)if(Ot!==null)if(G){if(Dt)if(b.layerUpdates.size>0){const Wt=iy(Pt.width,Pt.height,b.format,b.type);for(const ce of b.layerUpdates){const Ge=Pt.data.subarray(ce*Wt/Pt.data.BYTES_PER_ELEMENT,(ce+1)*Wt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,ce,Pt.width,Pt.height,1,Ot,Ge)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Pt.width,Pt.height,bt.depth,Ot,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,xt,Zt,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Dt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,xt,0,0,0,Pt.width,Pt.height,bt.depth,Ot,ne,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,xt,Zt,Pt.width,Pt.height,bt.depth,0,Ot,ne,Pt.data)}else{G&&At&&i.texStorage2D(o.TEXTURE_2D,Vt,Zt,fe[0].width,fe[0].height);for(let xt=0,_t=fe.length;xt<_t;xt++)Pt=fe[xt],b.format!==Pi?Ot!==null?G?Dt&&i.compressedTexSubImage2D(o.TEXTURE_2D,xt,0,0,Pt.width,Pt.height,Ot,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,xt,Zt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Dt&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Pt.width,Pt.height,Ot,ne,Pt.data):i.texImage2D(o.TEXTURE_2D,xt,Zt,Pt.width,Pt.height,0,Ot,ne,Pt.data)}else if(b.isDataArrayTexture)if(G){if(At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Zt,bt.width,bt.height,bt.depth),Dt)if(b.layerUpdates.size>0){const xt=iy(bt.width,bt.height,b.format,b.type);for(const _t of b.layerUpdates){const Wt=bt.data.subarray(_t*xt/bt.data.BYTES_PER_ELEMENT,(_t+1)*xt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,Ot,ne,Wt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ot,ne,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,bt.width,bt.height,bt.depth,0,Ot,ne,bt.data);else if(b.isData3DTexture)G?(At&&i.texStorage3D(o.TEXTURE_3D,Vt,Zt,bt.width,bt.height,bt.depth),Dt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ot,ne,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Zt,bt.width,bt.height,bt.depth,0,Ot,ne,bt.data);else if(b.isFramebufferTexture){if(At)if(G)i.texStorage2D(o.TEXTURE_2D,Vt,Zt,bt.width,bt.height);else{let xt=bt.width,_t=bt.height;for(let Wt=0;Wt<Vt;Wt++)i.texImage2D(o.TEXTURE_2D,Wt,Zt,xt,_t,0,Ot,ne,null),xt>>=1,_t>>=1}}else if(fe.length>0){if(G&&At){const xt=We(fe[0]);i.texStorage2D(o.TEXTURE_2D,Vt,Zt,xt.width,xt.height)}for(let xt=0,_t=fe.length;xt<_t;xt++)Pt=fe[xt],G?Dt&&i.texSubImage2D(o.TEXTURE_2D,xt,0,0,Ot,ne,Pt):i.texImage2D(o.TEXTURE_2D,xt,Zt,Ot,ne,Pt);b.generateMipmaps=!1}else if(G){if(At){const xt=We(bt);i.texStorage2D(o.TEXTURE_2D,Vt,Zt,xt.width,xt.height)}Dt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ne,bt)}else i.texImage2D(o.TEXTURE_2D,0,Zt,Ot,ne,bt);M(b)&&S(dt),Xt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function it(N,b,et){if(b.image.length!==6)return;const dt=be(N,b),yt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+et);const ft=r.get(yt);if(yt.version!==ft.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Xt=Ne.getPrimaries(Ne.workingColorSpace),Ct=b.colorSpace===cs?null:Ne.getPrimaries(b.colorSpace),jt=b.colorSpace===cs||Xt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Ot=[];for(let _t=0;_t<6;_t++)!Kt&&!bt?Ot[_t]=A(b.image[_t],!0,l.maxCubemapSize):Ot[_t]=bt?b.image[_t].image:b.image[_t],Ot[_t]=qe(b,Ot[_t]);const ne=Ot[0],Zt=f.convert(b.format,b.colorSpace),Pt=f.convert(b.type),fe=P(b.internalFormat,Zt,Pt,b.colorSpace),G=b.isVideoTexture!==!0,At=ft.__version===void 0||dt===!0,Dt=yt.dataReady;let Vt=F(b,ne);re(o.TEXTURE_CUBE_MAP,b);let xt;if(Kt){G&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,fe,ne.width,ne.height);for(let _t=0;_t<6;_t++){xt=Ot[_t].mipmaps;for(let Wt=0;Wt<xt.length;Wt++){const ce=xt[Wt];b.format!==Pi?Zt!==null?G?Dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,ce.width,ce.height,Zt,ce.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,ce.width,ce.height,Zt,Pt,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,fe,ce.width,ce.height,0,Zt,Pt,ce.data)}}}else{if(xt=b.mipmaps,G&&At){xt.length>0&&Vt++;const _t=We(Ot[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,fe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){G?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot[_t].width,Ot[_t].height,Zt,Pt,Ot[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,Ot[_t].width,Ot[_t].height,0,Zt,Pt,Ot[_t].data);for(let Wt=0;Wt<xt.length;Wt++){const Ge=xt[Wt].image[_t].image;G?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,Ge.width,Ge.height,Zt,Pt,Ge.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,fe,Ge.width,Ge.height,0,Zt,Pt,Ge.data)}}else{G?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Zt,Pt,Ot[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,Zt,Pt,Ot[_t]);for(let Wt=0;Wt<xt.length;Wt++){const ce=xt[Wt];G?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,Zt,Pt,ce.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,fe,Zt,Pt,ce.image[_t])}}}M(b)&&S(o.TEXTURE_CUBE_MAP),ft.__version=yt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Mt(N,b,et,dt,yt,ft){const Xt=f.convert(et.format,et.colorSpace),Ct=f.convert(et.type),jt=P(et.internalFormat,Xt,Ct,et.colorSpace),Kt=r.get(b),bt=r.get(et);if(bt.__renderTarget=b,!Kt.__hasExternalTextures){const Ot=Math.max(1,b.width>>ft),ne=Math.max(1,b.height>>ft);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,ft,jt,Ot,ne,b.depth,0,Xt,Ct,null):i.texImage2D(yt,ft,jt,Ot,ne,0,Xt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,yt,bt.__webglTexture,0,ie(b)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,yt,bt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(N,b,et){if(o.bindRenderbuffer(o.RENDERBUFFER,N),b.depthBuffer){const dt=b.depthTexture,yt=dt&&dt.isDepthTexture?dt.type:null,ft=w(b.stencilBuffer,yt),Xt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=ie(b);Ft(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ft,b.width,b.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ft,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ft,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,N)}else{const dt=b.textures;for(let yt=0;yt<dt.length;yt++){const ft=dt[yt],Xt=f.convert(ft.format,ft.colorSpace),Ct=f.convert(ft.type),jt=P(ft.internalFormat,Xt,Ct,ft.colorSpace),Kt=ie(b);et&&Ft(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,jt,b.width,b.height):Ft(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,jt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,jt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(b.depthTexture);dt.__renderTarget=b,(!dt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),lt(b.depthTexture,0);const yt=dt.__webglTexture,ft=ie(b);if(b.depthTexture.format===yl)Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(b.depthTexture.format===Sl)Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Et(N){const b=r.get(N),et=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const dt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),dt){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,dt.removeEventListener("dispose",yt)};dt.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=dt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const dt=N.texture.mipmaps;dt&&dt.length>0?Rt(b.__webglFramebuffer[0],N):Rt(b.__webglFramebuffer,N)}else if(et){b.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[dt]),b.__webglDepthbuffer[dt]===void 0)b.__webglDepthbuffer[dt]=o.createRenderbuffer(),Ut(b.__webglDepthbuffer[dt],N,!1);else{const yt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ft)}}else{const dt=N.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Ut(b.__webglDepthbuffer,N,!1);else{const yt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(N,b,et){const dt=r.get(N);b!==void 0&&Mt(dt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Et(N)}function z(N){const b=N.texture,et=r.get(N),dt=r.get(b);N.addEventListener("dispose",L);const yt=N.textures,ft=N.isWebGLCubeRenderTarget===!0,Xt=yt.length>1;if(Xt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=b.version,h.memory.textures++),ft){et.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[Ct]=[];for(let jt=0;jt<b.mipmaps.length;jt++)et.__webglFramebuffer[Ct][jt]=o.createFramebuffer()}else et.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)et.__webglFramebuffer[Ct]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Ct=0,jt=yt.length;Ct<jt;Ct++){const Kt=r.get(yt[Ct]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Ft(N)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Ct=0;Ct<yt.length;Ct++){const jt=yt[Ct];et.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Ct]);const Kt=f.convert(jt.format,jt.colorSpace),bt=f.convert(jt.type),Ot=P(jt.internalFormat,Kt,bt,jt.colorSpace,N.isXRRenderTarget===!0),ne=ie(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Ot,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,et.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut(et.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),re(o.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let jt=0;jt<b.mipmaps.length;jt++)Mt(et.__webglFramebuffer[Ct][jt],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,jt);else Mt(et.__webglFramebuffer[Ct],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(b)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ct=0,jt=yt.length;Ct<jt;Ct++){const Kt=yt[Ct],bt=r.get(Kt);let Ot=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ot=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ot,bt.__webglTexture),re(Ot,Kt),Mt(et.__webglFramebuffer,N,Kt,o.COLOR_ATTACHMENT0+Ct,Ot,0),M(Kt)&&S(Ot)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,dt.__webglTexture),re(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let jt=0;jt<b.mipmaps.length;jt++)Mt(et.__webglFramebuffer[jt],N,b,o.COLOR_ATTACHMENT0,Ct,jt);else Mt(et.__webglFramebuffer,N,b,o.COLOR_ATTACHMENT0,Ct,0);M(b)&&S(Ct),i.unbindTexture()}N.depthBuffer&&Et(N)}function He(N){const b=N.textures;for(let et=0,dt=b.length;et<dt;et++){const yt=b[et];if(M(yt)){const ft=O(N),Xt=r.get(yt).__webglTexture;i.bindTexture(ft,Xt),S(ft),i.unbindTexture()}}}const se=[],Qt=[];function Lt(N){if(N.samples>0){if(Ft(N)===!1){const b=N.textures,et=N.width,dt=N.height;let yt=o.COLOR_BUFFER_BIT;const ft=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=r.get(N),Ct=b.length>1;if(Ct)for(let Kt=0;Kt<b.length;Kt++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const jt=N.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Kt=0;Kt<b.length;Kt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Kt]);const bt=r.get(b[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,et,dt,0,0,et,dt,yt,o.NEAREST),m===!0&&(se.length=0,Qt.length=0,se.push(o.COLOR_ATTACHMENT0+Kt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(se.push(ft),Qt.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Kt=0;Kt<b.length;Kt++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Kt]);const bt=r.get(b[Kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ie(N){return Math.min(l.maxSamples,N.samples)}function Ft(N){const b=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function oe(N){const b=h.render.frame;v.get(N)!==b&&(v.set(N,b),N.update())}function qe(N,b){const et=N.colorSpace,dt=N.format,yt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||et!==ho&&et!==cs&&(Ne.getTransfer(et)===Xe?(dt!==Pi||yt!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function We(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=ct,this.resetTextureUnits=at,this.setTexture2D=lt,this.setTexture2DArray=j,this.setTexture3D=st,this.setTextureCube=K,this.rebindTextures=Yt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ft}function mC(o,e){function i(r,l=cs){let f;const h=Ne.getTransfer(l);if(r===$i)return o.UNSIGNED_BYTE;if(r===$p)return o.UNSIGNED_SHORT_4_4_4_4;if(r===tm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Vy)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Xy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Hy)return o.BYTE;if(r===Gy)return o.SHORT;if(r===gl)return o.UNSIGNED_SHORT;if(r===Jp)return o.INT;if(r===Js)return o.UNSIGNED_INT;if(r===Aa)return o.FLOAT;if(r===El)return o.HALF_FLOAT;if(r===ky)return o.ALPHA;if(r===qy)return o.RGB;if(r===Pi)return o.RGBA;if(r===yl)return o.DEPTH_COMPONENT;if(r===Sl)return o.DEPTH_STENCIL;if(r===Yy)return o.RED;if(r===em)return o.RED_INTEGER;if(r===Wy)return o.RG;if(r===nm)return o.RG_INTEGER;if(r===im)return o.RGBA_INTEGER;if(r===Au||r===Ru||r===Cu||r===wu)if(h===Xe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===Au)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ru)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===Au)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ru)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pp||r===mp||r===_p||r===gp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===pp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_p)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vp||r===yp||r===Sp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(r===vp||r===yp)return h===Xe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===Sp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap||r===Rp||r===Cp||r===wp||r===Dp||r===Np||r===Up||r===Lp||r===Op)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(r===xp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ep)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ap)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Dp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Np)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Up)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Op)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pp||r===zp||r===Ip)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(r===Pp)return h===Xe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ip)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bp||r===Fp||r===Hp||r===Gp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(r===Bp)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Fp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const _C=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gC=`
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

}`;class vC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new rS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ds({vertexShader:_C,fragmentShader:gC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ui(new zu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yC extends ir{constructor(e,i){super();const r=this;let l=null,f=1,h=null,d="local-floor",m=1,p=null,v=null,_=null,y=null,x=null,E=null;const A=typeof XRWebGLBinding<"u",M=new vC,S={},O=i.getContextAttributes();let P=null,w=null;const F=[],B=[],L=new ue;let q=null;const D=new Ei;D.viewport=new rn;const C=new Ei;C.viewport=new rn;const V=[D,C],at=new BT;let ct=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=F[$];return it===void 0&&(it=new Hd,F[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=F[$];return it===void 0&&(it=new Hd,F[$]=it),it.getGripSpace()},this.getHand=function($){let it=F[$];return it===void 0&&(it=new Hd,F[$]=it),it.getHandSpace()};function lt($){const it=B.indexOf($.inputSource);if(it===-1)return;const Mt=F[it];Mt!==void 0&&(Mt.update($.inputSource,$.frame,p||h),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function j(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",j),l.removeEventListener("inputsourceschange",st);for(let $=0;$<F.length;$++){const it=B[$];it!==null&&(B[$]=null,F[$].disconnect(it))}ct=null,gt=null,M.reset();for(const $ in S)delete S[$];e.setRenderTarget(P),x=null,y=null,_=null,l=null,w=null,ut.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){f=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",j),l.addEventListener("inputsourceschange",st),O.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(L),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ut=null,Rt=null;O.depth&&(Rt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=O.stencil?Sl:yl,Ut=O.stencil?vl:Js);const Et={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:f};_=this.getBinding(),y=_.createProjectionLayer(Et),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),w=new tr(y.textureWidth,y.textureHeight,{format:Pi,type:$i,depthTexture:new sS(y.textureWidth,y.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Mt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:f};x=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new tr(x.framebufferWidth,x.framebufferHeight,{format:Pi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),ut.setContext(l),ut.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function st($){for(let it=0;it<$.removed.length;it++){const Mt=$.removed[it],Ut=B.indexOf(Mt);Ut>=0&&(B[Ut]=null,F[Ut].disconnect(Mt))}for(let it=0;it<$.added.length;it++){const Mt=$.added[it];let Ut=B.indexOf(Mt);if(Ut===-1){for(let Et=0;Et<F.length;Et++)if(Et>=B.length){B.push(Mt),Ut=Et;break}else if(B[Et]===null){B[Et]=Mt,Ut=Et;break}if(Ut===-1)break}const Rt=F[Ut];Rt&&Rt.connect(Mt)}}const K=new k,vt=new k;function St($,it,Mt){K.setFromMatrixPosition(it.matrixWorld),vt.setFromMatrixPosition(Mt.matrixWorld);const Ut=K.distanceTo(vt),Rt=it.projectionMatrix.elements,Et=Mt.projectionMatrix.elements,Yt=Rt[14]/(Rt[10]-1),z=Rt[14]/(Rt[10]+1),He=(Rt[9]+1)/Rt[5],se=(Rt[9]-1)/Rt[5],Qt=(Rt[8]-1)/Rt[0],Lt=(Et[8]+1)/Et[0],ie=Yt*Qt,Ft=Yt*Lt,oe=Ut/(-Qt+Lt),qe=oe*-Qt;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(qe),$.translateZ(oe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Rt[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const We=Yt+oe,N=z+oe,b=ie-qe,et=Ft+(Ut-qe),dt=He*z/N*We,yt=se*z/N*We;$.projectionMatrix.makePerspective(b,et,dt,yt,We,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Gt($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let it=$.near,Mt=$.far;M.texture!==null&&(M.depthNear>0&&(it=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),at.near=C.near=D.near=it,at.far=C.far=D.far=Mt,(ct!==at.near||gt!==at.far)&&(l.updateRenderState({depthNear:at.near,depthFar:at.far}),ct=at.near,gt=at.far),at.layers.mask=$.layers.mask|6,D.layers.mask=at.layers.mask&3,C.layers.mask=at.layers.mask&5;const Ut=$.parent,Rt=at.cameras;Gt(at,Ut);for(let Et=0;Et<Rt.length;Et++)Gt(Rt[Et],Ut);Rt.length===2?St(at,D,C):at.projectionMatrix.copy(D.projectionMatrix),re($,at,Ut)};function re($,it,Mt){Mt===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vp*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(y===null&&x===null))return m},this.setFoveation=function($){m=$,y!==null&&(y.fixedFoveation=$),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(at)},this.getCameraTexture=function($){return S[$]};let be=null;function I($,it){if(v=it.getViewerPose(p||h),E=it,v!==null){const Mt=v.views;x!==null&&(e.setRenderTargetFramebuffer(w,x.framebuffer),e.setRenderTarget(w));let Ut=!1;Mt.length!==at.cameras.length&&(at.cameras.length=0,Ut=!0);for(let z=0;z<Mt.length;z++){const He=Mt[z];let se=null;if(x!==null)se=x.getViewport(He);else{const Lt=_.getViewSubImage(y,He);se=Lt.viewport,z===0&&(e.setRenderTargetTextures(w,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(w))}let Qt=V[z];Qt===void 0&&(Qt=new Ei,Qt.layers.enable(z),Qt.viewport=new rn,V[z]=Qt),Qt.matrix.fromArray(He.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(He.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(se.x,se.y,se.width,se.height),z===0&&(at.matrix.copy(Qt.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Ut===!0&&at.cameras.push(Qt)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const z=_.getDepthInformation(Mt[0]);z&&z.isValid&&z.texture&&M.init(z,l.renderState)}if(Rt&&Rt.includes("camera-access")&&A){e.state.unbindTexture(),_=r.getBinding();for(let z=0;z<Mt.length;z++){const He=Mt[z].camera;if(He){let se=S[He];se||(se=new rS,S[He]=se);const Qt=_.getCameraImage(He);se.sourceTexture=Qt}}}}for(let Mt=0;Mt<F.length;Mt++){const Ut=B[Mt],Rt=F[Mt];Ut!==null&&Rt!==void 0&&Rt.update(Ut,it,p||h)}be&&be($,it),it.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:it}),E=null}const ut=new cS;ut.setAnimationLoop(I),this.setAnimationLoop=function($){be=$},this.dispose=function(){}}}const Ys=new ta,SC=new en;function xC(o,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function r(M,S){S.color.getRGB(M.fogColor.value,nS(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,O,P,w){S.isMeshBasicMaterial||S.isMeshLambertMaterial?f(M,S):S.isMeshToonMaterial?(f(M,S),_(M,S)):S.isMeshPhongMaterial?(f(M,S),v(M,S)):S.isMeshStandardMaterial?(f(M,S),y(M,S),S.isMeshPhysicalMaterial&&x(M,S,w)):S.isMeshMatcapMaterial?(f(M,S),E(M,S)):S.isMeshDepthMaterial?f(M,S):S.isMeshDistanceMaterial?(f(M,S),A(M,S)):S.isMeshNormalMaterial?f(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,O,P):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Qn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Qn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const O=e.get(S),P=O.envMap,w=O.envMapRotation;P&&(M.envMap.value=P,Ys.copy(w),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),M.envMapRotation.value.setFromMatrix4(SC.makeRotationFromEuler(Ys)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,O,P){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*O,M.scale.value=P*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function v(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function _(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function y(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function x(M,S,O){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,S){S.matcap&&(M.matcap.value=S.matcap)}function A(M,S){const O=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function MC(o,e,i,r){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,P){const w=P.program;r.uniformBlockBinding(O,w)}function p(O,P){let w=l[O.id];w===void 0&&(E(O),w=v(O),l[O.id]=w,O.addEventListener("dispose",M));const F=P.program;r.updateUBOMapping(O,F);const B=e.render.frame;f[O.id]!==B&&(y(O),f[O.id]=B)}function v(O){const P=_();O.__bindingPointIndex=P;const w=o.createBuffer(),F=O.__size,B=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,F,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,w),w}function _(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const P=l[O.id],w=O.uniforms,F=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let B=0,L=w.length;B<L;B++){const q=Array.isArray(w[B])?w[B]:[w[B]];for(let D=0,C=q.length;D<C;D++){const V=q[D];if(x(V,B,D,F)===!0){const at=V.__offset,ct=Array.isArray(V.value)?V.value:[V.value];let gt=0;for(let lt=0;lt<ct.length;lt++){const j=ct[lt],st=A(j);typeof j=="number"||typeof j=="boolean"?(V.__data[0]=j,o.bufferSubData(o.UNIFORM_BUFFER,at+gt,V.__data)):j.isMatrix3?(V.__data[0]=j.elements[0],V.__data[1]=j.elements[1],V.__data[2]=j.elements[2],V.__data[3]=0,V.__data[4]=j.elements[3],V.__data[5]=j.elements[4],V.__data[6]=j.elements[5],V.__data[7]=0,V.__data[8]=j.elements[6],V.__data[9]=j.elements[7],V.__data[10]=j.elements[8],V.__data[11]=0):(j.toArray(V.__data,gt),gt+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(O,P,w,F){const B=O.value,L=P+"_"+w;if(F[L]===void 0)return typeof B=="number"||typeof B=="boolean"?F[L]=B:F[L]=B.clone(),!0;{const q=F[L];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return F[L]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function E(O){const P=O.uniforms;let w=0;const F=16;for(let L=0,q=P.length;L<q;L++){const D=Array.isArray(P[L])?P[L]:[P[L]];for(let C=0,V=D.length;C<V;C++){const at=D[C],ct=Array.isArray(at.value)?at.value:[at.value];for(let gt=0,lt=ct.length;gt<lt;gt++){const j=ct[gt],st=A(j),K=w%F,vt=K%st.boundary,St=K+vt;w+=vt,St!==0&&F-St<st.storage&&(w+=F-St),at.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=w,w+=st.storage}}}const B=w%F;return B>0&&(w+=F-B),O.__size=w,O.__cache={},this}function A(O){const P={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(P.boundary=4,P.storage=4):O.isVector2?(P.boundary=8,P.storage=8):O.isVector3||O.isColor?(P.boundary=16,P.storage=12):O.isVector4?(P.boundary=16,P.storage=16):O.isMatrix3?(P.boundary=48,P.storage=48):O.isMatrix4?(P.boundary=64,P.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),P}function M(O){const P=O.target;P.removeEventListener("dispose",M);const w=h.indexOf(P.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete f[P.id]}function S(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},f={}}return{bind:m,update:p,dispose:S}}class EC{constructor(e={}){const{canvas:i=tT(),context:r=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=h;const E=new Uint32Array(4),A=new Int32Array(4);let M=null,S=null;const O=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=Mi;let B=0,L=0,q=null,D=-1,C=null;const V=new rn,at=new rn;let ct=null;const gt=new Re(0);let lt=0,j=i.width,st=i.height,K=1,vt=null,St=null;const Gt=new rn(0,0,j,st),re=new rn(0,0,j,st);let be=!1;const I=new lm;let ut=!1,$=!1;const it=new en,Mt=new k,Ut=new rn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Yt(){return q===null?K:1}let z=r;function He(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qp}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Vt,!1),i.addEventListener("webglcontextcreationerror",xt,!1),z===null){const Z="webgl2";if(z=He(Z,R),z===null)throw He(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,Qt,Lt,ie,Ft,oe,qe,We,N,b,et,dt,yt,ft,Xt,Ct,jt,Kt,bt,Ot,ne,Zt,Pt,fe;function G(){se=new LA(z),se.init(),Zt=new mC(z,se),Qt=new AA(z,se,e,Zt),Lt=new dC(z,se),Qt.reversedDepthBuffer&&y&&Lt.buffers.depth.setReversed(!0),ie=new zA(z),Ft=new tC,oe=new pC(z,se,Lt,Ft,Qt,Zt,ie),qe=new CA(w),We=new UA(w),N=new VT(z),Pt=new TA(z,N),b=new OA(z,N,ie,Pt),et=new BA(z,b,N,ie),bt=new IA(z,Qt,oe),Ct=new RA(Ft),dt=new $R(w,qe,We,se,Qt,Pt,Ct),yt=new xC(w,Ft),ft=new nC,Xt=new lC(se),Kt=new EA(w,qe,We,Lt,et,x,m),jt=new fC(w,et,Qt),fe=new MC(z,ie,Qt,Lt),Ot=new bA(z,se,ie),ne=new PA(z,se,ie),ie.programs=dt.programs,w.capabilities=Qt,w.extensions=se,w.properties=Ft,w.renderLists=ft,w.shadowMap=jt,w.state=Lt,w.info=ie}G();const At=new yC(w,z);this.xr=At,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(j,st,!1))},this.getSize=function(R){return R.set(j,st)},this.setSize=function(R,Z,rt=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=R,st=Z,i.width=Math.floor(R*K),i.height=Math.floor(Z*K),rt===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(j*K,st*K).floor()},this.setDrawingBufferSize=function(R,Z,rt){j=R,st=Z,K=rt,i.width=Math.floor(R*rt),i.height=Math.floor(Z*rt),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(Gt)},this.setViewport=function(R,Z,rt,ot){R.isVector4?Gt.set(R.x,R.y,R.z,R.w):Gt.set(R,Z,rt,ot),Lt.viewport(V.copy(Gt).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,Z,rt,ot){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,Z,rt,ot),Lt.scissor(at.copy(re).multiplyScalar(K).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){Lt.setScissorTest(be=R)},this.setOpaqueSort=function(R){vt=R},this.setTransparentSort=function(R){St=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,rt=!0){let ot=0;if(R){let Q=!1;if(q!==null){const Tt=q.texture.format;Q=Tt===im||Tt===nm||Tt===em}if(Q){const Tt=q.texture.type,zt=Tt===$i||Tt===Js||Tt===gl||Tt===vl||Tt===$p||Tt===tm,Bt=Kt.getClearColor(),wt=Kt.getClearAlpha(),kt=Bt.r,ee=Bt.g,$t=Bt.b;zt?(E[0]=kt,E[1]=ee,E[2]=$t,E[3]=wt,z.clearBufferuiv(z.COLOR,0,E)):(A[0]=kt,A[1]=ee,A[2]=$t,A[3]=wt,z.clearBufferiv(z.COLOR,0,A))}else ot|=z.COLOR_BUFFER_BIT}Z&&(ot|=z.DEPTH_BUFFER_BIT),rt&&(ot|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Vt,!1),i.removeEventListener("webglcontextcreationerror",xt,!1),Kt.dispose(),ft.dispose(),Xt.dispose(),Ft.dispose(),qe.dispose(),We.dispose(),et.dispose(),Pt.dispose(),fe.dispose(),dt.dispose(),At.dispose(),At.removeEventListener("sessionstart",pn),At.removeEventListener("sessionend",Nn),na.stop()};function Dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=ie.autoReset,Z=jt.enabled,rt=jt.autoUpdate,ot=jt.needsUpdate,Q=jt.type;G(),ie.autoReset=R,jt.enabled=Z,jt.autoUpdate=rt,jt.needsUpdate=ot,jt.type=Q}function xt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const Z=R.target;Z.removeEventListener("dispose",_t),Wt(Z)}function Wt(R){ce(R),Ft.remove(R)}function ce(R){const Z=Ft.get(R).programs;Z!==void 0&&(Z.forEach(function(rt){dt.releaseProgram(rt)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,rt,ot,Q,Tt){Z===null&&(Z=Rt);const zt=Q.isMesh&&Q.matrixWorld.determinant()<0,Bt=Nl(R,Z,rt,ot,Q);Lt.setMaterial(ot,zt);let wt=rt.index,kt=1;if(ot.wireframe===!0){if(wt=b.getWireframeAttribute(rt),wt===void 0)return;kt=2}const ee=rt.drawRange,$t=rt.attributes.position;let ye=ee.start*kt,Pe=(ee.start+ee.count)*kt;Tt!==null&&(ye=Math.max(ye,Tt.start*kt),Pe=Math.min(Pe,(Tt.start+Tt.count)*kt)),wt!==null?(ye=Math.max(ye,0),Pe=Math.min(Pe,wt.count)):$t!=null&&(ye=Math.max(ye,0),Pe=Math.min(Pe,$t.count));const Qe=Pe-ye;if(Qe<0||Qe===1/0)return;Pt.setup(Q,ot,Bt,rt,wt);let Ue,Ce=Ot;if(wt!==null&&(Ue=N.get(wt),Ce=ne,Ce.setIndex(Ue)),Q.isMesh)ot.wireframe===!0?(Lt.setLineWidth(ot.wireframeLinewidth*Yt()),Ce.setMode(z.LINES)):Ce.setMode(z.TRIANGLES);else if(Q.isLine){let te=ot.linewidth;te===void 0&&(te=1),Lt.setLineWidth(te*Yt()),Q.isLineSegments?Ce.setMode(z.LINES):Q.isLineLoop?Ce.setMode(z.LINE_LOOP):Ce.setMode(z.LINE_STRIP)}else Q.isPoints?Ce.setMode(z.POINTS):Q.isSprite&&Ce.setMode(z.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)xl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const te=Q._multiDrawStarts,Le=Q._multiDrawCounts,_e=Q._multiDrawCount,mn=wt?N.get(wt).bytesPerElement:1,$n=Ft.get(ot).currentProgram.getUniforms();for(let we=0;we<_e;we++)$n.setValue(z,"_gl_DrawID",we),Ce.render(te[we]/mn,Le[we])}else if(Q.isInstancedMesh)Ce.renderInstances(ye,Qe,Q.count);else if(rt.isInstancedBufferGeometry){const te=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Le=Math.min(rt.instanceCount,te);Ce.renderInstances(ye,Qe,Le)}else Ce.render(ye,Qe)};function Ge(R,Z,rt){R.transparent===!0&&R.side===Kn&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,fi(R,Z,rt),R.side=hs,R.needsUpdate=!0,fi(R,Z,rt),R.side=Kn):fi(R,Z,rt)}this.compile=function(R,Z,rt=null){rt===null&&(rt=R),S=Xt.get(rt),S.init(Z),P.push(S),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),R!==rt&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),S.setupLights();const ot=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let zt=0;zt<Tt.length;zt++){const Bt=Tt[zt];Ge(Bt,rt,Q),ot.add(Bt)}else Ge(Tt,rt,Q),ot.add(Tt)}),S=P.pop(),ot},this.compileAsync=function(R,Z,rt=null){const ot=this.compile(R,Z,rt);return new Promise(Q=>{function Tt(){if(ot.forEach(function(zt){Ft.get(zt).currentProgram.isReady()&&ot.delete(zt)}),ot.size===0){Q(R);return}setTimeout(Tt,10)}se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Me=null;function $e(R){Me&&Me(R)}function pn(){na.stop()}function Nn(){na.start()}const na=new cS;na.setAnimationLoop($e),typeof self<"u"&&na.setContext(self),this.setAnimationLoop=function(R){Me=R,At.setAnimationLoop(R),R===null?na.stop():na.start()},At.addEventListener("sessionstart",pn),At.addEventListener("sessionend",Nn),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(Z),Z=At.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Z,q),S=Xt.get(R,P.length),S.init(Z),P.push(S),it.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),I.setFromProjectionMatrix(it,Qi,Z.reversedDepth),$=this.localClippingEnabled,ut=Ct.init(this.clippingPlanes,$),M=ft.get(R,O.length),M.init(),O.push(M),At.enabled===!0&&At.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&go(Tt,Z,-1/0,w.sortObjects)}go(R,Z,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(vt,St),Et=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Et&&Kt.addToRenderList(M,R),this.info.render.frame++,ut===!0&&Ct.beginShadows();const rt=S.state.shadowsArray;jt.render(rt,R,Z),ut===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,Q=M.transmissive;if(S.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(Q.length>0)for(let zt=0,Bt=Tt.length;zt<Bt;zt++){const wt=Tt[zt];gs(ot,Q,R,wt)}Et&&Kt.render(R);for(let zt=0,Bt=Tt.length;zt<Bt;zt++){const wt=Tt[zt];Dl(M,R,wt,wt.viewport)}}else Q.length>0&&gs(ot,Q,R,Z),Et&&Kt.render(R),Dl(M,R,Z);q!==null&&L===0&&(oe.updateMultisampleRenderTarget(q),oe.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(w,R,Z),Pt.resetDefaultState(),D=-1,C=null,P.pop(),P.length>0?(S=P[P.length-1],ut===!0&&Ct.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function go(R,Z,rt,ot){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||I.intersectsSprite(R)){ot&&Ut.setFromMatrixPosition(R.matrixWorld).applyMatrix4(it);const zt=et.update(R),Bt=R.material;Bt.visible&&M.push(R,zt,Bt,rt,Ut.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||I.intersectsObject(R))){const zt=et.update(R),Bt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ut.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Ut.copy(zt.boundingSphere.center)),Ut.applyMatrix4(R.matrixWorld).applyMatrix4(it)),Array.isArray(Bt)){const wt=zt.groups;for(let kt=0,ee=wt.length;kt<ee;kt++){const $t=wt[kt],ye=Bt[$t.materialIndex];ye&&ye.visible&&M.push(R,zt,ye,rt,Ut.z,$t)}}else Bt.visible&&M.push(R,zt,Bt,rt,Ut.z,null)}}const Tt=R.children;for(let zt=0,Bt=Tt.length;zt<Bt;zt++)go(Tt[zt],Z,rt,ot)}function Dl(R,Z,rt,ot){const Q=R.opaque,Tt=R.transmissive,zt=R.transparent;S.setupLightsView(rt),ut===!0&&Ct.setGlobalState(w.clippingPlanes,rt),ot&&Lt.viewport(V.copy(ot)),Q.length>0&&ia(Q,Z,rt),Tt.length>0&&ia(Tt,Z,rt),zt.length>0&&ia(zt,Z,rt),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function gs(R,Z,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[ot.id]===void 0&&(S.state.transmissionRenderTarget[ot.id]=new tr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?El:$i,minFilter:Qs,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Tt=S.state.transmissionRenderTarget[ot.id],zt=ot.viewport||V;Tt.setSize(zt.z*w.transmissionResolutionScale,zt.w*w.transmissionResolutionScale);const Bt=w.getRenderTarget(),wt=w.getActiveCubeFace(),kt=w.getActiveMipmapLevel();w.setRenderTarget(Tt),w.getClearColor(gt),lt=w.getClearAlpha(),lt<1&&w.setClearColor(16777215,.5),w.clear(),Et&&Kt.render(rt);const ee=w.toneMapping;w.toneMapping=fs;const $t=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),S.setupLightsView(ot),ut===!0&&Ct.setGlobalState(w.clippingPlanes,ot),ia(R,rt,ot),oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt),se.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Pe=0,Qe=Z.length;Pe<Qe;Pe++){const Ue=Z[Pe],Ce=Ue.object,te=Ue.geometry,Le=Ue.material,_e=Ue.group;if(Le.side===Kn&&Ce.layers.test(ot.layers)){const mn=Le.side;Le.side=Qn,Le.needsUpdate=!0,vs(Ce,rt,ot,te,Le,_e),Le.side=mn,Le.needsUpdate=!0,ye=!0}}ye===!0&&(oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt))}w.setRenderTarget(Bt,wt,kt),w.setClearColor(gt,lt),$t!==void 0&&(ot.viewport=$t),w.toneMapping=ee}function ia(R,Z,rt){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Tt=R.length;Q<Tt;Q++){const zt=R[Q],Bt=zt.object,wt=zt.geometry,kt=zt.group;let ee=zt.material;ee.allowOverride===!0&&ot!==null&&(ee=ot),Bt.layers.test(rt.layers)&&vs(Bt,Z,rt,wt,ee,kt)}}function vs(R,Z,rt,ot,Q,Tt){R.onBeforeRender(w,Z,rt,ot,Q,Tt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(w,Z,rt,ot,R,Tt),Q.transparent===!0&&Q.side===Kn&&Q.forceSinglePass===!1?(Q.side=Qn,Q.needsUpdate=!0,w.renderBufferDirect(rt,Z,ot,Q,R,Tt),Q.side=hs,Q.needsUpdate=!0,w.renderBufferDirect(rt,Z,ot,Q,R,Tt),Q.side=Kn):w.renderBufferDirect(rt,Z,ot,Q,R,Tt),R.onAfterRender(w,Z,rt,ot,Q,Tt)}function fi(R,Z,rt){Z.isScene!==!0&&(Z=Rt);const ot=Ft.get(R),Q=S.state.lights,Tt=S.state.shadowsArray,zt=Q.state.version,Bt=dt.getParameters(R,Q.state,Tt,Z,rt),wt=dt.getProgramCacheKey(Bt);let kt=ot.programs;ot.environment=R.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(R.isMeshStandardMaterial?We:qe).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,kt===void 0&&(R.addEventListener("dispose",_t),kt=new Map,ot.programs=kt);let ee=kt.get(wt);if(ee!==void 0){if(ot.currentProgram===ee&&ot.lightsStateVersion===zt)return Ca(R,Bt),ee}else Bt.uniforms=dt.getUniforms(R),R.onBeforeCompile(Bt,w),ee=dt.acquireProgram(Bt,wt),kt.set(wt,ee),ot.uniforms=Bt.uniforms;const $t=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=Ct.uniform),Ca(R,Bt),ot.needsLights=Ul(R),ot.lightsStateVersion=zt,ot.needsLights&&($t.ambientLightColor.value=Q.state.ambient,$t.lightProbe.value=Q.state.probe,$t.directionalLights.value=Q.state.directional,$t.directionalLightShadows.value=Q.state.directionalShadow,$t.spotLights.value=Q.state.spot,$t.spotLightShadows.value=Q.state.spotShadow,$t.rectAreaLights.value=Q.state.rectArea,$t.ltc_1.value=Q.state.rectAreaLTC1,$t.ltc_2.value=Q.state.rectAreaLTC2,$t.pointLights.value=Q.state.point,$t.pointLightShadows.value=Q.state.pointShadow,$t.hemisphereLights.value=Q.state.hemi,$t.directionalShadowMap.value=Q.state.directionalShadowMap,$t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$t.spotShadowMap.value=Q.state.spotShadowMap,$t.spotLightMatrix.value=Q.state.spotLightMatrix,$t.spotLightMap.value=Q.state.spotLightMap,$t.pointShadowMap.value=Q.state.pointShadowMap,$t.pointShadowMatrix.value=Q.state.pointShadowMatrix),ot.currentProgram=ee,ot.uniformsList=null,ee}function ys(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Nu.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Ca(R,Z){const rt=Ft.get(R);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function Nl(R,Z,rt,ot,Q){Z.isScene!==!0&&(Z=Rt),oe.resetTextureUnits();const Tt=Z.fog,zt=ot.isMeshStandardMaterial?Z.environment:null,Bt=q===null?w.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ho,wt=(ot.isMeshStandardMaterial?We:qe).get(ot.envMap||zt),kt=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ee=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),$t=!!rt.morphAttributes.position,ye=!!rt.morphAttributes.normal,Pe=!!rt.morphAttributes.color;let Qe=fs;ot.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Qe=w.toneMapping);const Ue=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ce=Ue!==void 0?Ue.length:0,te=Ft.get(ot),Le=S.state.lights;if(ut===!0&&($===!0||R!==C)){const nn=R===C&&ot.id===D;Ct.setState(ot,R,nn)}let _e=!1;ot.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Le.state.version||te.outputColorSpace!==Bt||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==wt||ot.fog===!0&&te.fog!==Tt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ct.numPlanes||te.numIntersection!==Ct.numIntersection)||te.vertexAlphas!==kt||te.vertexTangents!==ee||te.morphTargets!==$t||te.morphNormals!==ye||te.morphColors!==Pe||te.toneMapping!==Qe||te.morphTargetsCount!==Ce)&&(_e=!0):(_e=!0,te.__version=ot.version);let mn=te.currentProgram;_e===!0&&(mn=fi(ot,Z,Q));let $n=!1,we=!1,wa=!1;const je=mn.getUniforms(),zn=te.uniforms;if(Lt.useProgram(mn.program)&&($n=!0,we=!0,wa=!0),ot.id!==D&&(D=ot.id,we=!0),$n||C!==R){Lt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),je.setValue(z,"projectionMatrix",R.projectionMatrix),je.setValue(z,"viewMatrix",R.matrixWorldInverse);const Un=je.map.cameraPosition;Un!==void 0&&Un.setValue(z,Mt.setFromMatrixPosition(R.matrixWorld)),Qt.logarithmicDepthBuffer&&je.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&je.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,we=!0,wa=!0)}if(Q.isSkinnedMesh){je.setOptional(z,Q,"bindMatrix"),je.setOptional(z,Q,"bindMatrixInverse");const nn=Q.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),je.setValue(z,"boneTexture",nn.boneTexture,oe))}Q.isBatchedMesh&&(je.setOptional(z,Q,"batchingTexture"),je.setValue(z,"batchingTexture",Q._matricesTexture,oe),je.setOptional(z,Q,"batchingIdTexture"),je.setValue(z,"batchingIdTexture",Q._indirectTexture,oe),je.setOptional(z,Q,"batchingColorTexture"),Q._colorsTexture!==null&&je.setValue(z,"batchingColorTexture",Q._colorsTexture,oe));const ln=rt.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&bt.update(Q,rt,mn),(we||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,je.setValue(z,"receiveShadow",Q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(zn.envMap.value=wt,zn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(zn.envMapIntensity.value=Z.environmentIntensity),we&&(je.setValue(z,"toneMappingExposure",w.toneMappingExposure),te.needsLights&&Fu(zn,wa),Tt&&ot.fog===!0&&yt.refreshFogUniforms(zn,Tt),yt.refreshMaterialUniforms(zn,ot,K,st,S.state.transmissionRenderTarget[R.id]),Nu.upload(z,ys(te),zn,oe)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Nu.upload(z,ys(te),zn,oe),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&je.setValue(z,"center",Q.center),je.setValue(z,"modelViewMatrix",Q.modelViewMatrix),je.setValue(z,"normalMatrix",Q.normalMatrix),je.setValue(z,"modelMatrix",Q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const nn=ot.uniformsGroups;for(let Un=0,ar=nn.length;Un<ar;Un++){const Ii=nn[Un];fe.update(Ii,mn),fe.bind(Ii,mn)}}return mn}function Fu(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Ul(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,Z,rt){const ot=Ft.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Ft.get(R.texture).__webglTexture=Z,Ft.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const rt=Ft.get(R);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const vo=z.createFramebuffer();this.setRenderTarget=function(R,Z=0,rt=0){q=R,B=Z,L=rt;let ot=!0,Q=null,Tt=!1,zt=!1;if(R){const wt=Ft.get(R);if(wt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(z.FRAMEBUFFER,null),ot=!1;else if(wt.__webglFramebuffer===void 0)oe.setupRenderTarget(R);else if(wt.__hasExternalTextures)oe.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(wt.__boundDepthTexture!==$t){if($t!==null&&Ft.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(zt=!0);const ee=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?Q=ee[Z][rt]:Q=ee[Z],Tt=!0):R.samples>0&&oe.useMultisampledRTT(R)===!1?Q=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[rt]:Q=ee,V.copy(R.viewport),at.copy(R.scissor),ct=R.scissorTest}else V.copy(Gt).multiplyScalar(K).floor(),at.copy(re).multiplyScalar(K).floor(),ct=be;if(rt!==0&&(Q=vo),Lt.bindFramebuffer(z.FRAMEBUFFER,Q)&&ot&&Lt.drawBuffers(R,Q),Lt.viewport(V),Lt.scissor(at),Lt.setScissorTest(ct),Tt){const wt=Ft.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,wt.__webglTexture,rt)}else if(zt){const wt=Z;for(let kt=0;kt<R.textures.length;kt++){const ee=Ft.get(R.textures[kt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+kt,ee.__webglTexture,rt,wt)}}else if(R!==null&&rt!==0){const wt=Ft.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,wt.__webglTexture,rt)}D=-1},this.readRenderTargetPixels=function(R,Z,rt,ot,Q,Tt,zt,Bt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(wt=wt[zt]),wt){Lt.bindFramebuffer(z.FRAMEBUFFER,wt);try{const kt=R.textures[Bt],ee=kt.format,$t=kt.type;if(!Qt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ot&&rt>=0&&rt<=R.height-Q&&(R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Bt),z.readPixels(Z,rt,ot,Q,Zt.convert(ee),Zt.convert($t),Tt))}finally{const kt=q!==null?Ft.get(q).__webglFramebuffer:null;Lt.bindFramebuffer(z.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,rt,ot,Q,Tt,zt,Bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(wt=wt[zt]),wt)if(Z>=0&&Z<=R.width-ot&&rt>=0&&rt<=R.height-Q){Lt.bindFramebuffer(z.FRAMEBUFFER,wt);const kt=R.textures[Bt],ee=kt.format,$t=kt.type;if(!Qt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ye),z.bufferData(z.PIXEL_PACK_BUFFER,Tt.byteLength,z.STREAM_READ),R.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Bt),z.readPixels(Z,rt,ot,Q,Zt.convert(ee),Zt.convert($t),0);const Pe=q!==null?Ft.get(q).__webglFramebuffer:null;Lt.bindFramebuffer(z.FRAMEBUFFER,Pe);const Qe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await eT(z,Qe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ye),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Tt),z.deleteBuffer(ye),z.deleteSync(Qe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,rt=0){const ot=Math.pow(2,-rt),Q=Math.floor(R.image.width*ot),Tt=Math.floor(R.image.height*ot),zt=Z!==null?Z.x:0,Bt=Z!==null?Z.y:0;oe.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,rt,0,0,zt,Bt,Q,Tt),Lt.unbindTexture()};const Ss=z.createFramebuffer(),Hu=z.createFramebuffer();this.copyTextureToTexture=function(R,Z,rt=null,ot=null,Q=0,Tt=null){Tt===null&&(Q!==0?(xl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Q,Q=0):Tt=0);let zt,Bt,wt,kt,ee,$t,ye,Pe,Qe;const Ue=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(rt!==null)zt=rt.max.x-rt.min.x,Bt=rt.max.y-rt.min.y,wt=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,ee=rt.min.y,$t=rt.isBox3?rt.min.z:0;else{const ln=Math.pow(2,-Q);zt=Math.floor(Ue.width*ln),Bt=Math.floor(Ue.height*ln),R.isDataArrayTexture?wt=Ue.depth:R.isData3DTexture?wt=Math.floor(Ue.depth*ln):wt=1,kt=0,ee=0,$t=0}ot!==null?(ye=ot.x,Pe=ot.y,Qe=ot.z):(ye=0,Pe=0,Qe=0);const Ce=Zt.convert(Z.format),te=Zt.convert(Z.type);let Le;Z.isData3DTexture?(oe.setTexture3D(Z,0),Le=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(oe.setTexture2DArray(Z,0),Le=z.TEXTURE_2D_ARRAY):(oe.setTexture2D(Z,0),Le=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);const _e=z.getParameter(z.UNPACK_ROW_LENGTH),mn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),$n=z.getParameter(z.UNPACK_SKIP_PIXELS),we=z.getParameter(z.UNPACK_SKIP_ROWS),wa=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ue.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ue.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,kt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,$t);const je=R.isDataArrayTexture||R.isData3DTexture,zn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const ln=Ft.get(R),nn=Ft.get(Z),Un=Ft.get(ln.__renderTarget),ar=Ft.get(nn.__renderTarget);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,Un.__webglFramebuffer),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let Ii=0;Ii<wt;Ii++)je&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,Q,$t+Ii),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(Z).__webglTexture,Tt,Qe+Ii)),z.blitFramebuffer(kt,ee,zt,Bt,ye,Pe,zt,Bt,z.DEPTH_BUFFER_BIT,z.NEAREST);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Ft.has(R)){const ln=Ft.get(R),nn=Ft.get(Z);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,Ss),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Hu);for(let Un=0;Un<wt;Un++)je?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ln.__webglTexture,Q,$t+Un):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ln.__webglTexture,Q),zn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,Tt,Qe+Un):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,Tt),Q!==0?z.blitFramebuffer(kt,ee,zt,Bt,ye,Pe,zt,Bt,z.COLOR_BUFFER_BIT,z.NEAREST):zn?z.copyTexSubImage3D(Le,Tt,ye,Pe,Qe+Un,kt,ee,zt,Bt):z.copyTexSubImage2D(Le,Tt,ye,Pe,kt,ee,zt,Bt);Lt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else zn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D(Le,Tt,ye,Pe,Qe,zt,Bt,wt,Ce,te,Ue.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(Le,Tt,ye,Pe,Qe,zt,Bt,wt,Ce,Ue.data):z.texSubImage3D(Le,Tt,ye,Pe,Qe,zt,Bt,wt,Ce,te,Ue):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Tt,ye,Pe,zt,Bt,Ce,te,Ue.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Tt,ye,Pe,Ue.width,Ue.height,Ce,Ue.data):z.texSubImage2D(z.TEXTURE_2D,Tt,ye,Pe,zt,Bt,Ce,te,Ue);z.pixelStorei(z.UNPACK_ROW_LENGTH,_e),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$n),z.pixelStorei(z.UNPACK_SKIP_ROWS,we),z.pixelStorei(z.UNPACK_SKIP_IMAGES,wa),Tt===0&&Z.generateMipmaps&&z.generateMipmap(Le),Lt.unbindTexture()},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?oe.setTextureCube(R,0):R.isData3DTexture?oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?oe.setTexture2DArray(R,0):oe.setTexture2D(R,0),Lt.unbindTexture()},this.resetState=function(){B=0,L=0,q=null,Lt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ne._getUnpackColorSpace()}}const Cy={type:"change"},hm={type:"start"},pS={type:"end"},xu=new rm,wy=new ls,TC=Math.cos(70*$E.DEG2RAD),gn=new k,Zn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jd=1e-6;class bC extends HT{constructor(e,i=null){super(e,i),this.state=ke.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ro.ROTATE,MIDDLE:ro.DOLLY,RIGHT:ro.PAN},this.touches={ONE:ao.ROTATE,TWO:ao.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new $s,this._lastTargetPosition=new k,this._quat=new $s().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ny,this._sphericalDelta=new ny,this._scale=1,this._panOffset=new k,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new k,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RC.bind(this),this._onPointerDown=AC.bind(this),this._onPointerUp=CC.bind(this),this._onContextMenu=PC.bind(this),this._onMouseWheel=NC.bind(this),this._onKeyDown=UC.bind(this),this._onTouchStart=LC.bind(this),this._onTouchMove=OC.bind(this),this._onMouseDown=wC.bind(this),this._onMouseMove=DC.bind(this),this._interceptControlDown=zC.bind(this),this._interceptControlUp=IC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cy),this.update(),this.state=ke.NONE}update(e=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Zn:r>Math.PI&&(r-=Zn),l<-Math.PI?l+=Zn:l>Math.PI&&(l-=Zn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=gn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),f=!!m}else if(this.object.isOrthographicCamera){const d=new k(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=m!==this.object.zoom;const p=new k(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(xu.origin.copy(this.object.position),xu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xu.direction))<TC?this.object.lookAt(this.target):(wy.setFromNormalAndCoplanarPoint(this.object.up,this.target),xu.intersectPlane(wy,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>Jd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jd||this._lastTargetPosition.distanceToSquared(this.target)>Jd?(this.dispatchEvent(Cy),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zn/60*this.autoRotateSpeed*e:Zn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-e),this._panOffset.add(gn)}_panUp(e,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(e),this._panOffset.add(gn)}_pan(e,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let f=gn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/r.clientHeight,this.object.matrix),this._panUp(2*i*f/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=e-r.left,f=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),l=.5*(e.pageX+r.x),f=.5*(e.pageY+r.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),r=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ue,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function AC(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function RC(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function CC(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pS),this.state=ke.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function wC(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ro.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=ke.DOLLY;break;case ro.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ke.ROTATE}break;case ro.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(hm)}function DC(o){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function NC(o){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(o.preventDefault(),this.dispatchEvent(hm),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(pS))}function UC(o){this.enabled!==!1&&this._handleKeyDown(o)}function LC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case ao.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=ke.TOUCH_ROTATE;break;case ao.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case ao.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=ke.TOUCH_DOLLY_PAN;break;case ao.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(hm)}function OC(o){switch(this._trackPointer(o),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=ke.NONE}}function PC(o){this.enabled!==!1&&o.preventDefault()}function zC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function IC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BC(o){const e=o.length,i=new Array(e);for(let m=0;m<e;m++){const p=o[Math.max(m-1,0)],v=o[Math.min(m+1,e-1)];i[m]=v.clone().sub(p).normalize()}const r=i[0],l=Math.abs(r.x)<.9?new k(1,0,0):new k(0,1,0);let f=l.clone().sub(r.clone().multiplyScalar(l.dot(r))).normalize(),h=r.clone().cross(f).normalize();const d=[{point:o[0],tangent:r,normal:f,binormal:h}];for(let m=1;m<e;m++){const p=d[m-1],v=o[m].clone().sub(o[m-1]),_=v.dot(v);if(_<1e-10){d.push({...p,point:o[m],tangent:i[m]});continue}const y=p.normal.clone().sub(v.clone().multiplyScalar(2/_*v.dot(p.normal))),x=p.tangent.clone().sub(v.clone().multiplyScalar(2/_*v.dot(p.tangent))),E=i[m].clone().sub(x),A=E.dot(E),M=A<1e-10?y:y.clone().sub(E.clone().multiplyScalar(2/A*E.dot(y)));M.normalize();const S=i[m].clone().cross(M).normalize();d.push({point:o[m],tangent:i[m],normal:M,binormal:S})}return d}function ps(o,e,i,r={}){const l=r.radialSegments??8,f=o.getPoints(i),h=BC(f),d=[],m=[],p=[],v=[],_=new k,y=new k;for(let A=0;A<h.length;A++){const M=A/(h.length-1),S=Math.max(e(M),1e-5),{point:O,normal:P,binormal:w}=h[A];for(let F=0;F<=l;F++){const B=F/l*Math.PI*2,L=Math.cos(B),q=Math.sin(B);y.set(0,0,0).addScaledVector(P,L).addScaledVector(w,q).normalize(),_.copy(O).addScaledVector(y,S),d.push(_.x,_.y,_.z),m.push(y.x,y.y,y.z),p.push(F/l,M)}}const x=l+1;for(let A=0;A<h.length-1;A++)for(let M=0;M<l;M++){const S=A*x+M,O=A*x+M+1,P=(A+1)*x+M,w=(A+1)*x+M+1;v.push(S,O,P,O,w,P)}if(r.caps??!0){const A=d.length/3;d.push(f[0].x,f[0].y,f[0].z),m.push(-h[0].tangent.x,-h[0].tangent.y,-h[0].tangent.z),p.push(.5,.5);for(let w=0;w<l;w++)v.push(A,w,w+1);const M=(h.length-1)*x,S=d.length/3,O=f[f.length-1];d.push(O.x,O.y,O.z);const P=h[h.length-1].tangent;m.push(P.x,P.y,P.z),p.push(.5,.5);for(let w=0;w<l;w++)v.push(S,M+w+1,M+w)}const E=new ea;return E.setAttribute("position",new Vn(d,3)),E.setAttribute("normal",new Vn(m,3)),E.setAttribute("uv",new Vn(p,2)),E.setIndex(v),E}function er(o,e){return i=>o+(e-o)*i}function FC(o,e){return i=>{const r=Math.sin(Math.PI*i);return o+(e-o)*r}}function mS(o){const{length:e,maxWidth:i,widthPeakT:r=.55,foldDepth:l=.06,droop:f=.08,lengthSegments:h=12,widthSegments:d=6}=o,m=[],p=[],v=[],_=E=>{const A=E<r?E/r:(1-E)/(1-r);return i*Math.max(A,0)**.7};for(let E=0;E<=h;E++){const A=E/h,M=_(A),S=f*e*A*A;for(let O=0;O<=d;O++){const P=O/d*2-1,w=P*M,B=l*i*(1-P*P)-S,L=A*e;m.push(w,B,L),p.push(O/d,A)}}const y=d+1;for(let E=0;E<h;E++)for(let A=0;A<d;A++){const M=E*y+A,S=E*y+A+1,O=(E+1)*y+A,P=(E+1)*y+A+1;v.push(M,O,S,S,O,P)}const x=new ea;return x.setAttribute("position",new Vn(m,3)),x.setAttribute("uv",new Vn(p,2)),x.setIndex(v),x.computeVertexNormals(),x}const HC={sourceName:"Col-0",compactness:.6637,roundness:88.22,eccentricity:.0577,relativeAreaVsCol0:1,n:60},GC={sourceName:"Ler-0",compactness:.7617,roundness:55.6,eccentricity:.0755,relativeAreaVsCol0:1.258,n:60},VC={sourceName:"WS-0",compactness:.6729,roundness:90.66,eccentricity:.0547,relativeAreaVsCol0:1.56,n:60},XC={sourceName:"Tsu-0",compactness:.6106,roundness:112.84,eccentricity:.0402,relativeAreaVsCol0:1.466,n:60},kC={sourceName:"EDi-0",compactness:.6517,roundness:104.32,eccentricity:.0547,relativeAreaVsCol0:1.775,n:60},qC={col0:HC,ler:GC,ws:VC,tsu0:XC,edi0:kC},$d="https://figshare.com/s/e18a978267675059578f";function Cl(o){const e=qC[o];return{compactness:e.compactness,radiusScale:Math.sqrt(e.relativeAreaVsCol0),sourceName:e.sourceName}}const pl=Cl("col0"),Mu=Cl("ler"),Eu=Cl("ws"),Tu=Cl("tsu0"),bu=Cl("edi0"),qp=[{id:"col0",label:"Col-0 (Columbia)",sourceName:pl.sourceName,rosetteLeafCount:12,rosetteCompactness:pl.compactness,rosetteRadiusScale:pl.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${pl.compactness} (n=60 images, Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"ERECTA (ER) wild-type reference background (Torii et al. 1996)",citationKey:"Torii1996"},leaf:{value:"Reference/baseline leaf count in this project; not itself drawn from a comparative count study",citationKey:"none"}},referencePhoto:{url:$d,citationKey:"Namin2018"}},{id:"ler",label:"Ler (Landsberg erecta)",sourceName:Mu.sourceName,rosetteLeafCount:12,rosetteCompactness:Mu.compactness,rosetteRadiusScale:Mu.radiusScale,pedicelLengthScale:1/2.6,siliqueBluntness:.9,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${Mu.compactness} (n=60), the highest of the 5 ecotypes measured here (Camargo et al. 2014) -- independently consistent with Ler's known compact habit`,citationKey:"Camargo2014"},pedicel:{value:'Ler carries the natural `er` mutation (Torii et al. 1996: "compact inflorescence, blunt fruits, and short petioles"). Quantitative proxy from Bundy et al. 2012: mature wild-type pedicel 7.90±0.14mm vs. induced er-105 mutant ~2.6x shorter -- that number is for er-105 in a Columbia background, not a direct field measurement of natural Ler vs. Col, and is used here as the best available quantitative proxy for what the mutation does.',citationKey:"Bundy2012"},leaf:{value:"Coneva & Chitwood 2018 report Cvi has ~2 more leaves than Ler in long days -- Ler itself is this comparison's baseline, not independently varied here",citationKey:"Coneva2018"}},referencePhoto:{url:$d,citationKey:"Namin2018"}},{id:"ws",label:"Ws (Wassilewskija)",sourceName:Eu.sourceName,rosetteLeafCount:12,rosetteCompactness:Eu.compactness,rosetteRadiusScale:Eu.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${Eu.compactness} (n=60, Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"ERECTA (ER) wild-type background (Torii et al. 1996 separately isolated induced er alleles from Wassilewskija, implying the natural Ws accession is itself ER)",citationKey:"Torii1996"},leaf:{value:"No dedicated leaf-count comparison found for Ws in the sources used here",citationKey:"none"}},referencePhoto:null},{id:"cvi0",label:"Cvi-0 (Cape Verde Islands)",sourceName:"Cvi-0",rosetteLeafCount:14,rosetteCompactness:pl.compactness,rosetteRadiusScale:1,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1.25,provenance:{compactness:{value:"No rosette-compactness measurement found for Cvi-0 (it is not one of the 19 MAGIC founders in the Camargo et al. 2014 dataset used here) -- defaulted to the Col-0 value rather than estimated",citationKey:"none"},pedicel:{value:"No ERECTA-specific data found for Cvi-0; assumed ER wild-type by default (most non-Landsberg accessions are), not directly confirmed",citationKey:"none"},leaf:{value:"Real: Coneva & Chitwood 2018 report Cvi makes ~2 more leaves than Ler in long-day conditions, is thicker-leaved, and grows more slowly. Leaf-count and thickness reflect this; the thickness multiplier (1.25x) is an illustrative choice, not a value read directly from the paper's figures.",citationKey:"Coneva2018"}},referencePhoto:{url:$d,citationKey:"Namin2018"}},{id:"tsu0",label:"Tsu-0 (Tsu)",sourceName:Tu.sourceName,rosetteLeafCount:12,rosetteCompactness:Tu.compactness,rosetteRadiusScale:Tu.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${Tu.compactness} (n=60), the lowest of the 5 ecotypes measured here (Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"No ERECTA-specific data found for Tsu-0; assumed ER wild-type by default, not directly confirmed",citationKey:"none"},leaf:{value:"No dedicated leaf-count comparison found for Tsu-0 in the sources used here",citationKey:"none"}},referencePhoto:null},{id:"edi0",label:"Edi-0 (Edinburgh)",sourceName:bu.sourceName,rosetteLeafCount:12,rosetteCompactness:bu.compactness,rosetteRadiusScale:bu.radiusScale,pedicelLengthScale:1,siliqueBluntness:.1,leafThicknessScale:1,provenance:{compactness:{value:`Real: mean Compactness ${bu.compactness} (n=60, Camargo et al. 2014)`,citationKey:"Camargo2014"},pedicel:{value:"No ERECTA-specific data found for Edi-0; assumed ER wild-type by default, not directly confirmed",citationKey:"none"},leaf:{value:"No dedicated leaf-count comparison found for Edi-0 in the sources used here",citationKey:"none"}},referencePhoto:null}],Bu=qp[0],nr=[{stage:"0",description:"Seed imbibition",day:3,table:"plate"},{stage:"0.50",description:"Radicle emergence",day:4.3,table:"plate"},{stage:"0.70",description:"Hypocotyl and cotyledon emergence",day:5.5,table:"plate"},{stage:"1.00",description:"Cotyledons fully opened",day:6,table:"plate"},{stage:"1.02",description:"2 rosette leaves >1mm",day:12.5,table:"soil"},{stage:"1.03",description:"3 rosette leaves >1mm",day:15.9,table:"soil"},{stage:"1.04",description:"4 rosette leaves >1mm",day:16.5,table:"soil"},{stage:"1.05",description:"5 rosette leaves >1mm",day:17.7,table:"soil"},{stage:"1.06",description:"6 rosette leaves >1mm",day:18.4,table:"soil"},{stage:"1.07",description:"7 rosette leaves >1mm",day:19.4,table:"soil"},{stage:"1.08",description:"8 rosette leaves >1mm",day:20,table:"soil"},{stage:"1.09",description:"9 rosette leaves >1mm",day:21.1,table:"soil"},{stage:"1.10",description:"10 rosette leaves >1mm",day:21.6,table:"soil"},{stage:"1.11",description:"11 rosette leaves >1mm",day:22.2,table:"soil"},{stage:"1.12",description:"12 rosette leaves >1mm",day:23.3,table:"soil"},{stage:"1.13",description:"13 rosette leaves >1mm",day:24.8,table:"soil"},{stage:"1.14",description:"14 rosette leaves >1mm",day:25.5,table:"soil"},{stage:"3.20",description:"Rosette 20% of final size",day:18.9,table:"soil"},{stage:"3.50",description:"Rosette 50% of final size",day:24,table:"soil"},{stage:"3.70",description:"Rosette 70% of final size",day:27.4,table:"soil"},{stage:"3.90",description:"Rosette growth complete",day:29.3,table:"soil"},{stage:"5.10",description:"First flower buds visible",day:26,table:"soil"},{stage:"6.00",description:"First flower open",day:31.8,table:"soil"},{stage:"6.10",description:"10% of flowers produced have opened",day:35.9,table:"soil"},{stage:"6.30",description:"30% of flowers produced have opened",day:40.1,table:"soil"},{stage:"6.50",description:"50% of flowers produced have opened",day:43.5,table:"soil"},{stage:"6.90",description:"Flowering complete",day:49.4,table:"soil"},{stage:"8.00",description:"First silique shattered",day:48,table:"soil"}];nr.filter(o=>/^1\.\d\d$/.test(o.stage)&&o.table==="soil");nr.find(o=>o.stage==="5.10").day;nr.find(o=>o.stage==="6.90").day;nr[0].day;const _S=137.5*(Math.PI/180);function wl(o,e){return o.userData.organId=e,o.traverse(i=>i.userData.organId=e),o}const YC=new mo({color:4881471,roughness:.85,side:Kn}),Ml=new mo({color:7048266,roughness:.8,side:Kn}),Dy=new mo({color:14271626,roughness:.9,side:Kn}),WC=new mo({color:16119280,roughness:.6,side:Kn}),jC=new mo({color:9083466,roughness:.75,side:Kn});function ms(o){return new NT(o,!1,"catmullrom",.5)}function Yp(o){let e=2166136261;for(let r=0;r<o.length;r++)e^=o.charCodeAt(r),e=Math.imul(e,16777619);e|=0,e=e+1831565813|0;let i=Math.imul(e^e>>>15,1|e);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}function _s(o,e,i){const r=new ui(o,e);return r.name=i,r}function ZC(o,e=1){const i=new Ti,r=[new k(0,0,0),new k(.05,-.9,.03),new k(-.03,-1.9,-.02),new k(.02,-2.9,.01),new k(0,-3.2,0)],l=ps(ms(r),er(.05,.008),24,{radialSegments:8});i.add(_s(l,Dy,"Root_primary")),i.scale.set(1,Math.max(.06,e),1);const f=10,h=f*Math.max(0,Math.min(1,e)),d=Math.ceil(h);for(let m=0;m<d;m++){const p=Math.max(0,Math.min(1,h-m)),v=.4+m/f*2.6,_=(.5+Yp(`lateral-len-${m}`)*.4)*(.85+.3*o.rosetteCompactness),y=m%2===0?1:-1,x=.9+Yp(`lateral-angle-${m}`)*.3,E=new k(0,-v,0),A=E.clone().add(new k(y*Math.cos(x)*_,-_*.25,y*Math.sin(x)*_*.6)),M=E.clone().lerp(A,.5).add(new k(0,-.05,0)),S=ps(ms([E,M,A]),er(.012,.003),6,{radialSegments:6}),O=_s(S,Dy,"Root_lateral");O.scale.setScalar(p),i.add(O)}return wl(i,"root")}function KC(o,e){const i=new Ti,r=o.rosetteLeafCount;for(let l=0;l<r;l++){const h=l*_S,d=(.35+.5*(l/r))*1,m=.55*d*o.rosetteRadiusScale,p=.35*d*o.rosetteRadiusScale,v=(.15+.35*d)*o.rosetteRadiusScale*(1-.3*o.rosetteCompactness),_=.15+.9*o.rosetteCompactness,y=new ui(mS({length:m,maxWidth:p,foldDepth:.05*o.leafThicknessScale}),YC);y.name="LeafBlade_rosette",y.position.z=v;const x=_s(ps(ms([new k(0,0,0),new k(0,.01,v)]),er(.012,.02),4,{radialSegments:6}),Ml,"Stem_petiole"),E=new Ti;E.add(x,y),E.position.set(0,.02*l,0),E.rotation.y=-h,E.rotation.x=-_,i.add(E)}return wl(i,"rosette_leaf")}const gS=er(.05,.02);function QC(o){const e=[new k(0,0,0),new k(-.02,o*.4,.01),new k(.015,o*.75,-.01),new k(0,o,0)],i=ps(ms(e),gS,20,{radialSegments:8});return wl(_s(i,Ml,"Stem_axis"),"inflorescence_axis")}function JC(o){const e=new Ti,i=_s(ps(ms([new k(0,0,0),new k(0,0,o)]),er(.012,.008),4,{radialSegments:6}),Ml,"Stem_pedicel");e.add(i);const r=new Ti;r.position.z=o;const l=4;for(let h=0;h<l;h++){const d=new ui(mS({length:.09,maxWidth:.045,widthPeakT:.7,foldDepth:.15,lengthSegments:4,widthSegments:4}),WC);d.name="LeafBlade_petal";const m=h/l*Math.PI*2;d.position.set(Math.cos(m)*.01,Math.sin(m)*.01,0),d.rotation.z=m,d.rotation.x=-Math.PI/2+.3,r.add(d)}const f=_s(ps(ms([new k(0,0,0),new k(0,0,.15)]),er(.02,.015),4,{radialSegments:6}),Ml,"Stem_carpel");return r.add(f),e.add(r),wl(e,"flower")}function $C(o,e){const i=new Ti,r=_s(ps(ms([new k(0,0,0),new k(0,0,o)]),er(.014,.01),4,{radialSegments:6}),Ml,"Stem_pedicel");i.add(r);const l=.55,f=.025*(.3+.7*e),h=ps(ms([new k(0,0,o),new k(0,0,o+l)]),FC(f,.028),8,{radialSegments:8});return i.add(_s(h,jC,"Silique_pod")),wl(i,"silique")}function t2(o,e,i){const r=new Ti,l=9,f=.75;for(let h=0;h<l;h++){const d=h/(l-1),m=1,p=o*(.35+.6*d),v=h*_S,_=gS(p/o),y=new k(Math.cos(v)*_,p,Math.sin(v)*_),x=.18*e.pedicelLengthScale;let E;d>f?E=JC(x):(E=$C(x,e.siliqueBluntness),E.rotation.x=Math.PI/2+(Yp(`silique-tilt-${h}`)-.5)*.3),E.position.copy(y),E.rotation.y+=v,E.scale.setScalar(m),r.add(E)}return r}function Ny(o=Bu){const e=new Ti,i=2.4;return e.add(ZC(o)),e.add(KC(o)),e.add(QC(i)),e.add(t2(i,o)),e}function Uy(o){o.traverse(e=>{const i=e;i.geometry&&i.geometry.dispose()})}function e2(o){let e=o;for(;e;){if(e.userData.organId)return e.userData.organId;e=e.parent}return null}function n2(o,e){const i=new AT;i.background=new Re(988176);const r=new Ei(45,1,.01,1e3);r.position.set(4,3,4);const l=new EC({antialias:!0});l.setPixelRatio(Math.min(devicePixelRatio,2)),o.appendChild(l.domElement),i.add(new OT(16777215,3158826,1.1));const f=new IT(16777215,1.6);f.position.set(3,6,4),i.add(f);const h=new ui(new cm(3,32),new mo({color:2827287,roughness:1}));h.rotation.x=-Math.PI/2,h.position.y=-.01,i.add(h);let d=Ny(Bu);i.add(d);const m=new bC(r,l.domElement);m.enableDamping=!0,m.target.set(0,.8,0),m.update();const p=new FT,v=new ue;let _=[];const y=new Map;function x(){for(const w of _){const F=w,B=F.material,L=y.get(F);B&&L&&(B.emissive=L)}_=[]}function E(w){x(),d.traverse(F=>{if(F.userData.organId===w&&F.isMesh){const B=F,L=B.material;L&&L.emissive&&(y.has(B)||y.set(B,L.emissive.clone()),L.emissive=new Re(3108175),_.push(B))}})}function A(w){const F=l.domElement.getBoundingClientRect();v.x=(w.clientX-F.left)/F.width*2-1,v.y=-((w.clientY-F.top)/F.height)*2+1,p.setFromCamera(v,r);const B=p.intersectObject(d,!0),L=B.length>0?e2(B[0].object):null;L?E(L):x(),e(L)}l.domElement.addEventListener("click",A);let M=0;const S=()=>{M=requestAnimationFrame(S),m.update(),l.render(i,r)};S();const O=()=>{const w=o.clientWidth||1,F=o.clientHeight||1;l.setSize(w,F),r.aspect=w/F,r.updateProjectionMatrix()};O();const P=new ResizeObserver(O);return P.observe(o),{setEcotype(w){x(),i.remove(d),Uy(d),d=Ny(w),i.add(d),e(null)},dispose(){cancelAnimationFrame(M),P.disconnect(),l.domElement.removeEventListener("click",A),Uy(d),m.dispose(),l.dispose(),l.domElement.remove()}}}const i2={"OSD-120":{organism_part:"root",comparison:"Spaceflight vs. ground control (Day 13 root, GLDS/OSD-120)",n_genes_total:32833,top_upregulated:[{gene_id:"AT2G01422",log2fc:4.751},{gene_id:"AT2G05510",log2fc:4.645},{gene_id:"AT5G19890",log2fc:3.911},{gene_id:"AT2G26400",log2fc:2.714},{gene_id:"AT2G34317",log2fc:2.557},{gene_id:"AT2G30670",log2fc:2.504},{gene_id:"AT2G43920",log2fc:2.465},{gene_id:"AT4G11650",log2fc:2.411}],top_downregulated:[{gene_id:"AT5G13930",log2fc:-5.27},{gene_id:"AT5G09570",log2fc:-4.253},{gene_id:"AT3G51240",log2fc:-3.024},{gene_id:"AT5G33355",log2fc:-2.759},{gene_id:"AT2G04050",log2fc:-2.587},{gene_id:"AT3G30720",log2fc:-2.387},{gene_id:"AT2G21640",log2fc:-2.384},{gene_id:"AT1G01060",log2fc:-2.322}],source_file:"data/processed/OSD-120_root_flight_vs_ground_log2fc.csv"},"OSD-314":{organism_part:"whole seedling",comparison:"Microgravity (0g) vs. 1g ground control, whole seedling (OSD-314)",n_genes_total:32833,top_upregulated:[{gene_id:"AT4G28520",log2fc:5.543},{gene_id:"AT5G44120",log2fc:5.536},{gene_id:"AT1G73190",log2fc:5.527},{gene_id:"AT5G40420",log2fc:5.407},{gene_id:"ATCG00040",log2fc:4.739},{gene_id:"AT4G25140",log2fc:4.693},{gene_id:"AT3G54940",log2fc:4.684},{gene_id:"AT2G28490",log2fc:4.533}],top_downregulated:[{gene_id:"AT2G32810",log2fc:-4.873},{gene_id:"AT3G01345",log2fc:-4.445},{gene_id:"AT1G53480",log2fc:-4.437},{gene_id:"AT4G17090",log2fc:-4.174},{gene_id:"AT3G05727",log2fc:-4.08},{gene_id:"AT2G30750",log2fc:-3.878},{gene_id:"AT3G45140",log2fc:-3.76},{gene_id:"AT3G05730",log2fc:-3.694}],source_file:"data/processed/OSD-314_seedling_microgravity_vs_1g_log2fc.csv"}};function vS(o){const e=i2[o];return{studyId:o,comparison:e.comparison,nGenesTotal:e.n_genes_total,topUpregulated:e.top_upregulated,topDownregulated:e.top_downregulated,sourceFile:e.source_file}}const a2=[{id:"root",label:"Root system",travaCategory:"Root (root apex / root without apex)",geometryNote:"Branching pattern and primary/lateral proportions follow the single-cell root developmental atlas, not a scan of a specimen.",geometryCitations:["Shahan2022"],spaceflight:vS("OSD-120")},{id:"rosette_leaf",label:"Rosette leaf",travaCategory:"Third leaf (petiole / leaf blade / central vein)",geometryNote:"Leaf arrangement uses the ~137.5° golden-angle phyllotaxy widely reported for Arabidopsis rosettes; blade shape is a simplified obovate approximation, not a scan.",geometryCitations:[],spaceflight:null,spaceflightCaveat:"OSD-314 profiled whole seedlings, not dissected rosette leaves -- shown on Root only, where the tissue match is exact."},{id:"inflorescence_axis",label:"Inflorescence axis",travaCategory:"Axes (peduncles / inflorescence axis / internode)",geometryNote:"Simplified tapering-cylinder approximation of the bolting stem; proportions are illustrative, not measured.",geometryCitations:[],spaceflight:null},{id:"flower",label:"Flower",travaCategory:"Flower / Flower part (sepals, anthers, carpels, ovules, stigmatic tissue)",geometryNote:"Whorl arrangement (sepals/petals/stamens/carpels) is schematic; internal carpel/ovule proportions are informed by the digital 3D ovule-development atlas.",geometryCitations:["Vijayan2021"],spaceflight:null},{id:"silique",label:"Silique",travaCategory:"Silique development",geometryNote:"Elongated bicarpellate capsule approximation; internal seed-row layout informed by the same ovule-development atlas used for the flower.",geometryCitations:["Vijayan2021"],spaceflight:null}],s2=vS("OSD-314"),tp={geoAccession:"GSE226097",webTool:"https://arabidopsisdevatlas.salk.edu/"},r2={root:["Columella","Lateral root cap","Epidermis/atrichoblast","Epidermis/trichoblast","Cortex","Endodermis","Pericycle","Stele/vasculature","Root cap"],rosette_leaf:["Epidermis (pavement/guard cells)","Palisade mesophyll","Spongy mesophyll","Vasculature (leaf)","Trichome"],inflorescence_axis:["Epidermis (stem)","Cortex (stem)","Vasculature (stem)","Pith"],flower:["Sepal","Petal","Stamen/anther","Carpel/ovule","Receptacle"],silique:["Valve","Replum","Septum","Seed coat","Funiculus"]},Wp=nr[0].day,jp=nr[nr.length-1].day,ml={min:Wp,max:jp};function o2(o,e){var _,y;const i=o.split(/\r?\n/).filter(x=>x.trim().length>0);if(i.length<2)return{dataset:null,errors:["File has no data rows (need a header plus at least one row)."],rowsAccepted:0,rowsRejected:0};const r=i[0].split(",").map(x=>x.trim().toLowerCase()),l=r.indexOf("gene_or_label"),f=r.indexOf("day"),h=r.indexOf("value"),d=r.indexOf("condition");if(l===-1||f===-1||h===-1)return{dataset:null,errors:[`Missing required column(s). Found header: [${r.join(", ")}]. Required: gene_or_label, day, value (optional: condition).`],rowsAccepted:0,rowsRejected:0};const m=[],p=[];let v=0;for(let x=1;x<i.length;x++){const E=i[x].split(","),A=x+1,M=(_=E[l])==null?void 0:_.trim(),S=Number(E[f]),O=Number(E[h]);if(!M){p.push(`Row ${A}: empty gene_or_label, skipped.`),v++;continue}if(!Number.isFinite(S)){p.push(`Row ${A}: "day" is not a number ("${E[f]}"), skipped.`),v++;continue}if(!Number.isFinite(O)){p.push(`Row ${A}: "value" is not a number ("${E[h]}"), skipped.`),v++;continue}(S<Wp||S>jp)&&p.push(`Row ${A}: day=${S} is outside this atlas's real timeline (${Wp}-${jp}); kept, but it will never be the nearest day to any point on the growth slider.`),m.push({geneOrLabel:M,day:S,value:O,condition:d>=0?(y=E[d])==null?void 0:y.trim():void 0})}return m.length===0?{dataset:null,errors:[...p,"No valid rows found."],rowsAccepted:0,rowsRejected:v}:{dataset:{name:e,sourceDescription:`uploaded CSV: ${e}`,points:m},errors:p,rowsAccepted:m.length,rowsRejected:v}}function l2(o,e,i=10){return[...o.points].map(r=>({point:r,dayGap:Math.abs(r.day-e)})).sort((r,l)=>r.dayGap-l.dayGap).slice(0,i)}const c2="OSD-522",u2=["Glucosinolate","Flavonoid","Phenylpropanoid","Amino acid","Amine"],f2=301,h2=259,d2={MEM:.038,SOL:-.033},p2={Glucosinolate:{rna_median_log2fc:-.219,rna_q_permutation:.0469,rna_n:144,rna_up:1,rna_down:18,protein:{MEM:{median_log2fc:-.145,n:76,up:19,down:28},SOL:{median_log2fc:-.16,n:86,up:7,down:25}}},Flavonoid:{rna_median_log2fc:-.142,rna_q_permutation:.0469,rna_n:85,rna_up:2,rna_down:8,protein:{MEM:{median_log2fc:0,n:21,up:5,down:3},SOL:{median_log2fc:-.045,n:26,up:1,down:1}}},Phenylpropanoid:{rna_median_log2fc:-.092,rna_q_permutation:.0216,rna_n:71,rna_up:0,rna_down:8,protein:{MEM:{median_log2fc:.32,n:17,up:7,down:3},SOL:{median_log2fc:-.1,n:24,up:0,down:2}}},"Amino acid":{rna_median_log2fc:-.064,rna_q_permutation:.0216,rna_n:533,rna_up:4,rna_down:44,protein:{MEM:{median_log2fc:.12,n:278,up:67,down:41},SOL:{median_log2fc:.055,n:346,up:26,down:31}}},Amine:{rna_median_log2fc:-.053,rna_q_permutation:.0731,rna_n:195,rna_up:3,rna_down:7,protein:{MEM:{median_log2fc:-.1,n:69,up:10,down:18},SOL:{median_log2fc:-.06,n:89,up:1,down:10}}}},m2={col0:{wu_accession_name:"Col-0",accession_id:"ecotype.6909",in_wu_control:!0,in_zhu:!1,classes:{Glucosinolate:{wu_control_pct_median:36.5,wu_n_metabolites:27,zhu_dark_response_pct_median:null,zhu_n_metabolites:0},Flavonoid:{wu_control_pct_median:73.1,wu_n_metabolites:11,zhu_dark_response_pct_median:null,zhu_n_metabolites:0},Phenylpropanoid:{wu_control_pct_median:57,wu_n_metabolites:6,zhu_dark_response_pct_median:null,zhu_n_metabolites:0},"Amino acid":{wu_control_pct_median:17.6,wu_n_metabolites:17,zhu_dark_response_pct_median:null,zhu_n_metabolites:0},Amine:{wu_control_pct_median:52.2,wu_n_metabolites:5,zhu_dark_response_pct_median:null,zhu_n_metabolites:0}}},ler:{wu_accession_name:"Ler-1",accession_id:"ecotype.6932",in_wu_control:!0,in_zhu:!0,classes:{Glucosinolate:{wu_control_pct_median:43,wu_n_metabolites:24,zhu_dark_response_pct_median:9.8,zhu_n_metabolites:2},Flavonoid:{wu_control_pct_median:57.5,wu_n_metabolites:11,zhu_dark_response_pct_median:42.5,zhu_n_metabolites:5},Phenylpropanoid:{wu_control_pct_median:74.3,wu_n_metabolites:6,zhu_dark_response_pct_median:null,zhu_n_metabolites:0},"Amino acid":{wu_control_pct_median:57.5,wu_n_metabolites:17,zhu_dark_response_pct_median:17.6,zhu_n_metabolites:4},Amine:{wu_control_pct_median:79,wu_n_metabolites:5,zhu_dark_response_pct_median:64.9,zhu_n_metabolites:1}}},ws:{wu_accession_name:"Ws-0",accession_id:"ecotype.6980",in_wu_control:!0,in_zhu:!0,classes:{Glucosinolate:{wu_control_pct_median:37.5,wu_n_metabolites:23,zhu_dark_response_pct_median:34.6,zhu_n_metabolites:2},Flavonoid:{wu_control_pct_median:30.9,wu_n_metabolites:11,zhu_dark_response_pct_median:83,zhu_n_metabolites:5},Phenylpropanoid:{wu_control_pct_median:51.1,wu_n_metabolites:6,zhu_dark_response_pct_median:null,zhu_n_metabolites:0},"Amino acid":{wu_control_pct_median:57.5,wu_n_metabolites:17,zhu_dark_response_pct_median:89.2,zhu_n_metabolites:4},Amine:{wu_control_pct_median:36,wu_n_metabolites:5,zhu_dark_response_pct_median:56.8,zhu_n_metabolites:1}}},cvi0:{wu_accession_name:"Cvi-0",accession_id:"ecotype.6911",in_wu_control:!0,in_zhu:!0,classes:{Glucosinolate:{wu_control_pct_median:78.1,wu_n_metabolites:26,zhu_dark_response_pct_median:66,zhu_n_metabolites:2},Flavonoid:{wu_control_pct_median:33.6,wu_n_metabolites:9,zhu_dark_response_pct_median:51,zhu_n_metabolites:5},Phenylpropanoid:{wu_control_pct_median:20.1,wu_n_metabolites:6,zhu_dark_response_pct_median:null,zhu_n_metabolites:0},"Amino acid":{wu_control_pct_median:38.2,wu_n_metabolites:17,zhu_dark_response_pct_median:98.5,zhu_n_metabolites:4},Amine:{wu_control_pct_median:21.6,wu_n_metabolites:5,zhu_dark_response_pct_median:90.7,zhu_n_metabolites:1}}},tsu0:{wu_accession_name:"Tsu-0",accession_id:"ecotype.7373",in_wu_control:!0,in_zhu:!0,classes:{Glucosinolate:{wu_control_pct_median:17.3,wu_n_metabolites:23,zhu_dark_response_pct_median:36.3,zhu_n_metabolites:2},Flavonoid:{wu_control_pct_median:12,wu_n_metabolites:11,zhu_dark_response_pct_median:84.6,zhu_n_metabolites:5},Phenylpropanoid:{wu_control_pct_median:24.8,wu_n_metabolites:6,zhu_dark_response_pct_median:null,zhu_n_metabolites:0},"Amino acid":{wu_control_pct_median:10.3,wu_n_metabolites:17,zhu_dark_response_pct_median:18.5,zhu_n_metabolites:4},Amine:{wu_control_pct_median:6.3,wu_n_metabolites:5,zhu_dark_response_pct_median:35.1,zhu_n_metabolites:1}}},edi0:{wu_accession_name:"Edi-0",accession_id:"ecotype.6914",in_wu_control:!0,in_zhu:!0,classes:{Glucosinolate:{wu_control_pct_median:66.2,wu_n_metabolites:24,zhu_dark_response_pct_median:25.3,zhu_n_metabolites:2},Flavonoid:{wu_control_pct_median:79.4,wu_n_metabolites:11,zhu_dark_response_pct_median:46.7,zhu_n_metabolites:5},Phenylpropanoid:{wu_control_pct_median:70.2,wu_n_metabolites:6,zhu_dark_response_pct_median:null,zhu_n_metabolites:0},"Amino acid":{wu_control_pct_median:78.4,wu_n_metabolites:17,zhu_dark_response_pct_median:50.6,zhu_n_metabolites:4},Amine:{wu_control_pct_median:72.4,wu_n_metabolites:5,zhu_dark_response_pct_median:6.2,zhu_n_metabolites:1}}}},_2={osd:c2,classes:u2,n_wu_control_accessions:f2,n_zhu_accessions:h2,transcript_protein_spearman:d2,flight:p2,ecotypes:m2},g2="https://github.com/dr-richard-barker/arabidopsis-atlas/blob/main",ba=_2;function Ly(o){return o<0?"down":o>0?"up":""}function Oy(o){return`${o>0?"+":""}${o.toFixed(2)}`}function Zp(o){const e=Math.round(o),i=e%100>=11&&e%100<=13?"th":{1:"st",2:"nd",3:"rd"}[e%10]??"th";return`${e}${i}`}function Py({value:o,label:e}){return mt.jsxs("div",{className:"pct-bar",role:"img","aria-label":`${e}: ${Zp(o)} percentile`,children:[mt.jsx("div",{className:"pct-track"}),mt.jsx("div",{className:"pct-mid"}),mt.jsx("div",{className:"pct-marker",style:{left:`${o}%`}})]})}function v2({cls:o,ecotype:e}){const i=ba.flight[o],r=i.protein,l=ba.ecotypes[e.id],f=l==null?void 0:l.classes[o],h=i.rna_q_permutation<.05;return mt.jsxs("li",{className:"met-class",children:[mt.jsx("h4",{children:o}),mt.jsxs("p",{className:"met-line",children:[mt.jsx("span",{className:"met-key",children:"Flight transcripts"}),mt.jsx("span",{className:Ly(i.rna_median_log2fc),children:Oy(i.rna_median_log2fc)})," ","log2 · ",i.rna_down,"↓ ",i.rna_up,"↑ of ",i.rna_n," genes ·"," ",mt.jsxs("span",{className:h?"":"muted",children:["q ",i.rna_q_permutation.toFixed(3),h?"":" (n.s.)"]})]}),mt.jsxs("p",{className:"met-line",children:[mt.jsx("span",{className:"met-key",children:"Flight proteins"}),["SOL","MEM"].filter(d=>r[d]).map((d,m)=>mt.jsxs("span",{children:[m>0?" · ":"",d==="SOL"?"soluble":"membrane"," ",mt.jsx("span",{className:Ly(r[d].median_log2fc),children:Oy(r[d].median_log2fc)})," ","(",r[d].down,"↓ ",r[d].up,"↑ of ",r[d].n,")"]},d))]}),f&&f.wu_control_pct_median!==null?mt.jsxs("div",{className:"met-eco",children:[mt.jsxs("p",{className:"met-line",children:[mt.jsxs("span",{className:"met-key",children:[l.wu_accession_name," baseline"]}),Zp(f.wu_control_pct_median)," percentile of ",ba.n_wu_control_accessions," accessions"," ",mt.jsxs("span",{className:"muted",children:["(Wu, median of ",f.wu_n_metabolites," metabolites)"]})]}),mt.jsx(Py,{value:f.wu_control_pct_median,label:`${l.wu_accession_name} baseline`})]}):mt.jsx("p",{className:"met-line muted",children:"No Wu baseline for this ecotype."}),f&&f.zhu_dark_response_pct_median!==null?mt.jsxs("div",{className:"met-eco",children:[mt.jsxs("p",{className:"met-line",children:[mt.jsx("span",{className:"met-key",children:"Darkness response"}),Zp(f.zhu_dark_response_pct_median)," percentile of ",ba.n_zhu_accessions," ",mt.jsxs("span",{className:"muted",children:["(Zhu, ",f.zhu_n_metabolites," metabolite",f.zhu_n_metabolites===1?"":"s",")"]})]}),mt.jsx(Py,{value:f.zhu_dark_response_pct_median,label:"Darkness response"})]}):mt.jsxs("p",{className:"met-line muted",children:["Darkness response: ",l&&!l.in_zhu?`${l.wu_accession_name} is not in the Zhu 2024 panel`:"no matched metabolites with both timepoints","."]})]})}function y2({ecotype:o}){const e=ba.ecotypes[o.id];return mt.jsxs("div",{className:"metabolome-panel",children:[mt.jsxs("h3",{children:["Metabolome × spaceflight (",ba.osd,")"]}),mt.jsx("p",{className:"met-intro",children:"OSD-522 flew Col-0 seedlings; their shoots were profiled for transcripts and proteins, but not metabolites. Each card asks whether the genes Wu et al. 2018 assign to a metabolite class shifted in flight, and where the selected ecotype sits in two terrestrial leaf metabolome panels."}),(e==null?void 0:e.wu_accession_name)&&e.wu_accession_name!==o.sourceName&&mt.jsxs("p",{className:"met-note",children:["Metabolome values are for ",mt.jsx("strong",{children:e.wu_accession_name}),", the closest accession in Wu's panel; this ecotype's 3D shape uses ",o.sourceName,"."]}),mt.jsx("ul",{className:"met-classes",children:ba.classes.map(i=>mt.jsx(v2,{cls:i,ecotype:o},i))}),mt.jsxs("p",{className:"met-foot",children:["Transcript shifts: DESeq2, set q from a 924-relabelling permutation test. Protein shifts: provider TMT statistics, 3 vs 3 per fraction, descriptive only; overall protein–transcript correlation is near zero (ρ ",ba.transcript_protein_spearman.SOL," soluble, ",ba.transcript_protein_spearman.MEM," membrane). Lower pathway transcripts do not tell you which way metabolite pools moved."," ",mt.jsx("a",{href:`${g2}/results/osd522_metabolome_link/README.md`,target:"_blank",rel:"noreferrer",children:"Methods and caveats ↗"})]})]})}const yS="https://travadb.org",S2=o=>`https://osdr.nasa.gov/bio/repo/data/studies/${o}`,x2="https://osdr.nasa.gov/bio/repo/search";function zy({title:o,genes:e}){return mt.jsxs("div",{className:"gene-panel",children:[mt.jsx("h4",{children:o}),mt.jsx("ul",{children:e.map(i=>mt.jsxs("li",{children:[mt.jsx("a",{href:`${yS}`,target:"_blank",rel:"noreferrer",title:"Look this locus up on TraVA",children:i.gene_id}),mt.jsxs("span",{className:i.log2fc>=0?"up":"down",children:[i.log2fc>0?"+":"",i.log2fc.toFixed(2)]})]},i.gene_id))})]})}function M2({organId:o}){const[e,i]=Ta.useState(null),[r,l]=Ta.useState([]),[f,h]=Ta.useState(ml.max),d=r2[o]??[],m=p=>{const v=new FileReader;v.onload=()=>{const _=o2(String(v.result??""),p.name);i(_.dataset),l(_.errors)},v.readAsText(p)};return mt.jsxs("div",{className:"digital-twin-panel",children:[mt.jsx("h3",{children:"Digital twin data overlay"}),d.length>0&&mt.jsxs("p",{className:"celltype-breakdown",children:["Real cell types this organ's mesh aggregates (Lee et al. 2025): ",d.join(", "),". Shown as a list because this atlas's own geometry has no sub-organ mesh regions to paint them onto individually."]}),mt.jsxs("p",{className:"external-links",children:[mt.jsx("a",{href:tp.webTool,target:"_blank",rel:"noreferrer",children:"Explore real single-cell/spatial data for this stage on the Salk atlas ↗"})," · ",mt.jsxs("a",{href:`https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=${tp.geoAccession}`,target:"_blank",rel:"noreferrer",children:[tp.geoAccession," on GEO ↗"]})," · ",mt.jsx("a",{href:x2,target:"_blank",rel:"noreferrer",children:"Browse NASA OSDR ↗"})]}),mt.jsxs("div",{className:"csv-upload",children:[mt.jsx("label",{htmlFor:"twin-csv-upload",children:"Upload your own data (CSV: gene_or_label, day, value, condition):"}),mt.jsx("input",{id:"twin-csv-upload",type:"file",accept:".csv,text/csv",onChange:p=>{var _;const v=(_=p.target.files)==null?void 0:_[0];v&&m(v)}})]}),r.length>0&&mt.jsx("ul",{className:"csv-errors",children:r.map((p,v)=>mt.jsx("li",{children:p},v))}),e&&mt.jsxs("div",{className:"overlay-results",children:[mt.jsxs("label",{htmlFor:"twin-day-slider",children:["Day ",f.toFixed(1)," (real range this atlas covers: ",ml.min,"–",ml.max,")"]}),mt.jsx("input",{id:"twin-day-slider",type:"range",min:ml.min,max:ml.max,step:.1,value:f,onChange:p=>h(Number(p.target.value))}),mt.jsxs("p",{className:"provenance",children:["Source: ",e.sourceDescription," · ",e.points.length," points loaded."]}),mt.jsx("ul",{className:"overlay-points",children:l2(e,f,8).map(({point:p,dayGap:v},_)=>mt.jsxs("li",{children:[p.geneOrLabel,": ",p.value.toFixed(3),p.condition?` (${p.condition})`:""," — ",mt.jsxs("span",{className:v>2?"day-gap-warning":"day-gap-ok",children:["measured day ",p.day.toFixed(1)," (",v.toFixed(1)," days from slider)"]})]},_))})]})]})}function E2({organ:o,ecotype:e}){return mt.jsxs("div",{className:"organ-info",children:[mt.jsx("h2",{children:o.label}),mt.jsxs("p",{className:"trava-category",children:["TraVA category: ",mt.jsx("em",{children:o.travaCategory})," —"," ",mt.jsx("a",{href:yS,target:"_blank",rel:"noreferrer",children:"browse real developmental expression on TraVA →"})]}),mt.jsx("p",{className:"geometry-note",children:o.geometryNote}),o.geometryCitations.length>0&&mt.jsxs("p",{className:"citations",children:["Geometry citations: ",o.geometryCitations.join(", ")]}),o.spaceflight?mt.jsxs("div",{className:"spaceflight-block",children:[mt.jsxs("h3",{children:["Real spaceflight response — ",o.spaceflight.studyId]}),mt.jsx("p",{children:o.spaceflight.comparison}),mt.jsxs("p",{className:"n-genes",children:[o.spaceflight.nGenesTotal.toLocaleString()," genes quantified. Log2 fold-change is a raw mean-CPM ratio, not a statistically tested DE call (no DESeq2, no p-values) — see methods."]}),mt.jsxs("div",{className:"gene-panels",children:[mt.jsx(zy,{title:"Highest flight/ground ratio",genes:o.spaceflight.topUpregulated}),mt.jsx(zy,{title:"Lowest flight/ground ratio",genes:o.spaceflight.topDownregulated})]}),mt.jsxs("p",{className:"source-link",children:["Source: ",mt.jsx("code",{children:o.spaceflight.sourceFile})," ·"," ",mt.jsxs("a",{href:S2(o.spaceflight.studyId),target:"_blank",rel:"noreferrer",children:[o.spaceflight.studyId," on NASA OSDR ↗"]})]})]}):mt.jsxs("p",{className:"no-spaceflight",children:["No organ-specific spaceflight dataset is wired up for this organ yet.",o.spaceflightCaveat?` ${o.spaceflightCaveat}`:""]}),mt.jsx(M2,{organId:o.id}),o.id==="rosette_leaf"&&mt.jsx(y2,{ecotype:e})]})}function T2({value:o,onChange:e}){return mt.jsxs("div",{className:"ecotype-picker",children:[mt.jsx("label",{htmlFor:"ecotype-select",children:"Ecotype"}),mt.jsx("select",{id:"ecotype-select",value:o.id,onChange:i=>e(qp.find(r=>r.id===i.target.value)??Bu),children:qp.map(i=>mt.jsx("option",{value:i.id,children:i.label},i.id))})]})}function b2({ecotype:o}){return mt.jsxs("div",{className:"ecotype-info",children:[mt.jsx("h3",{children:o.label}),mt.jsxs("p",{className:"source-name",children:["Source accession id: ",mt.jsx("code",{children:o.sourceName})]}),mt.jsxs("dl",{children:[mt.jsx("dt",{children:"Rosette compactness"}),mt.jsx("dd",{children:o.provenance.compactness.value}),mt.jsx("dt",{children:"Inflorescence / pedicel"}),mt.jsx("dd",{children:o.provenance.pedicel.value}),mt.jsx("dt",{children:"Leaf count / thickness"}),mt.jsx("dd",{children:o.provenance.leaf.value})]}),o.referencePhoto&&mt.jsx("p",{className:"reference-photo",children:mt.jsx("a",{href:o.referencePhoto.url,target:"_blank",rel:"noreferrer",children:"Real accession-labeled reference photos (Namin et al. 2018, CC BY 4.0) ↗"})})]})}function A2(){const o=Ta.useRef(null),e=Ta.useRef(null),[i,r]=Ta.useState(null),[l,f]=Ta.useState(Bu);Ta.useEffect(()=>{if(!o.current)return;const m=n2(o.current,r);return e.current=m,()=>{e.current=null,m.dispose()}},[]);const h=m=>{var p;f(m),r(null),(p=e.current)==null||p.setEcotype(m)},d=a2.find(m=>m.id===i)??null;return mt.jsxs("div",{className:"app",children:[mt.jsxs("header",{className:"app-header",children:[mt.jsx("h1",{children:"Arabidopsis Atlas"}),mt.jsxs("p",{children:["Click an organ to explore it. Started from"," ",mt.jsx("a",{href:"https://github.com/dr-richard-barker/rice-atlas",target:"_blank",rel:"noreferrer",children:"rice-atlas"})," ","— see the ",mt.jsx("a",{href:"https://github.com/dr-richard-barker/arabidopsis-atlas#readme",target:"_blank",rel:"noreferrer",children:"README"})," for what's actually real data here vs. simplified geometry."," ","Also see the ",mt.jsx("a",{href:"growth.html",children:"seed-to-flowering growth animation →"})," ","and the ",mt.jsx("a",{href:"metabolome.html",children:"metabolome × spaceflight showcase →"})]}),mt.jsx(T2,{value:l,onChange:h})]}),mt.jsxs("div",{className:"app-body",children:[mt.jsx("div",{className:"viewer-container",ref:o}),mt.jsxs("aside",{className:"sidebar",children:[mt.jsx(b2,{ecotype:l}),d?mt.jsx(E2,{organ:d,ecotype:l}):mt.jsxs("div",{className:"welcome",children:[mt.jsx("p",{children:"No organ selected. Click any part of the plant."}),mt.jsxs("p",{className:"hint",children:["Whole-seedling spaceflight coverage (",s2.studyId,", real data, not organ-specific) is documented in ",mt.jsx("code",{children:"data/README.md"})," rather than shown here, since it isn't tissue-specific."]})]})]})]})]})}uE.createRoot(document.getElementById("root")).render(mt.jsx(Ta.StrictMode,{children:mt.jsx(A2,{})}));
