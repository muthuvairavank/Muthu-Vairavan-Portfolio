var nx=Object.create;var bp=Object.defineProperty;var ix=Object.getOwnPropertyDescriptor;var rx=Object.getOwnPropertyNames;var sx=Object.getPrototypeOf,ox=Object.prototype.hasOwnProperty;var tr=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var ax=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of rx(e))!ox.call(n,r)&&r!==t&&bp(n,r,{get:()=>e[r],enumerable:!(i=ix(e,r))||i.enumerable});return n};var Is=(n,e,t)=>(t=n!=null?nx(sx(n)):{},ax(e||!n||!n.__esModule?bp(t,"default",{value:n,enumerable:!0}):t,n));var zp=tr(ct=>{"use strict";var Oo=Symbol.for("react.element"),lx=Symbol.for("react.portal"),cx=Symbol.for("react.fragment"),ux=Symbol.for("react.strict_mode"),hx=Symbol.for("react.profiler"),dx=Symbol.for("react.provider"),fx=Symbol.for("react.context"),px=Symbol.for("react.forward_ref"),mx=Symbol.for("react.suspense"),gx=Symbol.for("react.memo"),yx=Symbol.for("react.lazy"),Ep=Symbol.iterator;function vx(n){return n===null||typeof n!="object"?null:(n=Ep&&n[Ep]||n["@@iterator"],typeof n=="function"?n:null)}var Cp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rp=Object.assign,Pp={};function Ds(n,e,t){this.props=n,this.context=e,this.refs=Pp,this.updater=t||Cp}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ds.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Lp(){}Lp.prototype=Ds.prototype;function Au(n,e,t){this.props=n,this.context=e,this.refs=Pp,this.updater=t||Cp}var Cu=Au.prototype=new Lp;Cu.constructor=Au;Rp(Cu,Ds.prototype);Cu.isPureReactComponent=!0;var Tp=Array.isArray,kp=Object.prototype.hasOwnProperty,Ru={current:null},Ip={key:!0,ref:!0,__self:!0,__source:!0};function Dp(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)kp.call(e,i)&&!Ip.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Oo,type:n,key:s,ref:o,props:r,_owner:Ru.current}}function xx(n,e){return{$$typeof:Oo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Pu(n){return typeof n=="object"&&n!==null&&n.$$typeof===Oo}function _x(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Ap=/\/+/g;function Tu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?_x(""+n.key):e.toString(36)}function ol(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Oo:case lx:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Tu(o,0):i,Tp(r)?(t="",n!=null&&(t=n.replace(Ap,"$&/")+"/"),ol(r,e,t,"",function(c){return c})):r!=null&&(Pu(r)&&(r=xx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ap,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Tp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Tu(s,a);o+=ol(s,e,t,l,r)}else if(l=vx(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Tu(s,a++),o+=ol(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sl(n,e,t){if(n==null)return n;var i=[],r=0;return ol(n,i,"","",function(s){return e.call(t,s,r++)}),i}function wx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Ln={current:null},al={transition:null},Sx={ReactCurrentDispatcher:Ln,ReactCurrentBatchConfig:al,ReactCurrentOwner:Ru};function Np(){throw Error("act(...) is not supported in production builds of React.")}ct.Children={map:sl,forEach:function(n,e,t){sl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return sl(n,function(){e++}),e},toArray:function(n){return sl(n,function(e){return e})||[]},only:function(n){if(!Pu(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ct.Component=Ds;ct.Fragment=cx;ct.Profiler=hx;ct.PureComponent=Au;ct.StrictMode=ux;ct.Suspense=mx;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx;ct.act=Np;ct.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Rp({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ru.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)kp.call(e,l)&&!Ip.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Oo,type:n.type,key:r,ref:s,props:i,_owner:o}};ct.createContext=function(n){return n={$$typeof:fx,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:dx,_context:n},n.Consumer=n};ct.createElement=Dp;ct.createFactory=function(n){var e=Dp.bind(null,n);return e.type=n,e};ct.createRef=function(){return{current:null}};ct.forwardRef=function(n){return{$$typeof:px,render:n}};ct.isValidElement=Pu;ct.lazy=function(n){return{$$typeof:yx,_payload:{_status:-1,_result:n},_init:wx}};ct.memo=function(n,e){return{$$typeof:gx,type:n,compare:e===void 0?null:e}};ct.startTransition=function(n){var e=al.transition;al.transition={};try{n()}finally{al.transition=e}};ct.unstable_act=Np;ct.useCallback=function(n,e){return Ln.current.useCallback(n,e)};ct.useContext=function(n){return Ln.current.useContext(n)};ct.useDebugValue=function(){};ct.useDeferredValue=function(n){return Ln.current.useDeferredValue(n)};ct.useEffect=function(n,e){return Ln.current.useEffect(n,e)};ct.useId=function(){return Ln.current.useId()};ct.useImperativeHandle=function(n,e,t){return Ln.current.useImperativeHandle(n,e,t)};ct.useInsertionEffect=function(n,e){return Ln.current.useInsertionEffect(n,e)};ct.useLayoutEffect=function(n,e){return Ln.current.useLayoutEffect(n,e)};ct.useMemo=function(n,e){return Ln.current.useMemo(n,e)};ct.useReducer=function(n,e,t){return Ln.current.useReducer(n,e,t)};ct.useRef=function(n){return Ln.current.useRef(n)};ct.useState=function(n){return Ln.current.useState(n)};ct.useSyncExternalStore=function(n,e,t){return Ln.current.useSyncExternalStore(n,e,t)};ct.useTransition=function(){return Ln.current.useTransition()};ct.version="18.3.1"});var ll=tr((AE,Fp)=>{"use strict";Fp.exports=zp()});var Yp=tr(Pt=>{"use strict";function Du(n,e){var t=n.length;n.push(e);e:for(;0<t;){var i=t-1>>>1,r=n[i];if(0<cl(r,e))n[i]=e,n[t]=r,t=i;else break e}}function bi(n){return n.length===0?null:n[0]}function hl(n){if(n.length===0)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;e:for(var i=0,r=n.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=n[o],l=o+1,c=n[l];if(0>cl(a,t))l<r&&0>cl(c,a)?(n[i]=c,n[l]=t,i=l):(n[i]=a,n[o]=t,i=o);else if(l<r&&0>cl(c,t))n[i]=c,n[l]=t,i=l;else break e}}return e}function cl(n,e){var t=n.sortIndex-e.sortIndex;return t!==0?t:n.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Op=performance,Pt.unstable_now=function(){return Op.now()}):(Lu=Date,Up=Lu.now(),Pt.unstable_now=function(){return Lu.now()-Up});var Op,Lu,Up,Bi=[],Mr=[],Mx=1,fi=null,wn=3,dl=!1,Kr=!1,Bo=!1,Vp=typeof setTimeout=="function"?setTimeout:null,Wp=typeof clearTimeout=="function"?clearTimeout:null,Bp=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Nu(n){for(var e=bi(Mr);e!==null;){if(e.callback===null)hl(Mr);else if(e.startTime<=n)hl(Mr),e.sortIndex=e.expirationTime,Du(Bi,e);else break;e=bi(Mr)}}function zu(n){if(Bo=!1,Nu(n),!Kr)if(bi(Bi)!==null)Kr=!0,Ou(Fu);else{var e=bi(Mr);e!==null&&Uu(zu,e.startTime-n)}}function Fu(n,e){Kr=!1,Bo&&(Bo=!1,Wp(Ho),Ho=-1),dl=!0;var t=wn;try{for(Nu(e),fi=bi(Bi);fi!==null&&(!(fi.expirationTime>e)||n&&!Xp());){var i=fi.callback;if(typeof i=="function"){fi.callback=null,wn=fi.priorityLevel;var r=i(fi.expirationTime<=e);e=Pt.unstable_now(),typeof r=="function"?fi.callback=r:fi===bi(Bi)&&hl(Bi),Nu(e)}else hl(Bi);fi=bi(Bi)}if(fi!==null)var s=!0;else{var o=bi(Mr);o!==null&&Uu(zu,o.startTime-e),s=!1}return s}finally{fi=null,wn=t,dl=!1}}var fl=!1,ul=null,Ho=-1,Gp=5,qp=-1;function Xp(){return!(Pt.unstable_now()-qp<Gp)}function ku(){if(ul!==null){var n=Pt.unstable_now();qp=n;var e=!0;try{e=ul(!0,n)}finally{e?Uo():(fl=!1,ul=null)}}else fl=!1}var Uo;typeof Bp=="function"?Uo=function(){Bp(ku)}:typeof MessageChannel<"u"?(Iu=new MessageChannel,Hp=Iu.port2,Iu.port1.onmessage=ku,Uo=function(){Hp.postMessage(null)}):Uo=function(){Vp(ku,0)};var Iu,Hp;function Ou(n){ul=n,fl||(fl=!0,Uo())}function Uu(n,e){Ho=Vp(function(){n(Pt.unstable_now())},e)}Pt.unstable_IdlePriority=5;Pt.unstable_ImmediatePriority=1;Pt.unstable_LowPriority=4;Pt.unstable_NormalPriority=3;Pt.unstable_Profiling=null;Pt.unstable_UserBlockingPriority=2;Pt.unstable_cancelCallback=function(n){n.callback=null};Pt.unstable_continueExecution=function(){Kr||dl||(Kr=!0,Ou(Fu))};Pt.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Gp=0<n?Math.floor(1e3/n):5};Pt.unstable_getCurrentPriorityLevel=function(){return wn};Pt.unstable_getFirstCallbackNode=function(){return bi(Bi)};Pt.unstable_next=function(n){switch(wn){case 1:case 2:case 3:var e=3;break;default:e=wn}var t=wn;wn=e;try{return n()}finally{wn=t}};Pt.unstable_pauseExecution=function(){};Pt.unstable_requestPaint=function(){};Pt.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=wn;wn=n;try{return e()}finally{wn=t}};Pt.unstable_scheduleCallback=function(n,e,t){var i=Pt.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?i+t:i):t=i,n){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=t+r,n={id:Mx++,callback:e,priorityLevel:n,startTime:t,expirationTime:r,sortIndex:-1},t>i?(n.sortIndex=t,Du(Mr,n),bi(Bi)===null&&n===bi(Mr)&&(Bo?(Wp(Ho),Ho=-1):Bo=!0,Uu(zu,t-i))):(n.sortIndex=r,Du(Bi,n),Kr||dl||(Kr=!0,Ou(Fu))),n};Pt.unstable_shouldYield=Xp;Pt.unstable_wrapCallback=function(n){var e=wn;return function(){var t=wn;wn=e;try{return n.apply(this,arguments)}finally{wn=t}}}});var $p=tr((RE,Zp)=>{"use strict";Zp.exports=Yp()});var Qg=tr(Qn=>{"use strict";var bx=ll(),Jn=$p();function Me(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n0=new Set,ca={};function hs(n,e){to(n,e),to(n+"Capture",e)}function to(n,e){for(ca[n]=e,n=0;n<e.length;n++)n0.add(e[n])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lh=Object.prototype.hasOwnProperty,Ex=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jp={},Jp={};function Tx(n){return lh.call(Jp,n)?!0:lh.call(jp,n)?!1:Ex.test(n)?Jp[n]=!0:(jp[n]=!0,!1)}function Ax(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Cx(n,e,t,i){if(e===null||typeof e>"u"||Ax(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){pn[n]=new Dn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];pn[e]=new Dn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){pn[n]=new Dn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){pn[n]=new Dn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){pn[n]=new Dn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){pn[n]=new Dn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){pn[n]=new Dn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){pn[n]=new Dn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){pn[n]=new Dn(n,5,!1,n.toLowerCase(),null,!1,!1)});var ed=/[\-:]([a-z])/g;function td(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(ed,td);pn[e]=new Dn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(ed,td);pn[e]=new Dn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(ed,td);pn[e]=new Dn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){pn[n]=new Dn(n,1,!1,n.toLowerCase(),null,!1,!1)});pn.xlinkHref=new Dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){pn[n]=new Dn(n,1,!1,n.toLowerCase(),null,!0,!0)});function nd(n,e,t,i){var r=pn.hasOwnProperty(e)?pn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cx(e,t,r,i)&&(t=null),i||r===null?Tx(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var hr=bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),i0=Symbol.for("react.provider"),r0=Symbol.for("react.context"),rd=Symbol.for("react.forward_ref"),uh=Symbol.for("react.suspense"),hh=Symbol.for("react.suspense_list"),sd=Symbol.for("react.memo"),Er=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var s0=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Kp=Symbol.iterator;function Vo(n){return n===null||typeof n!="object"?null:(n=Kp&&n[Kp]||n["@@iterator"],typeof n=="function"?n:null)}var Vt=Object.assign,Bu;function jo(n){if(Bu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Bu=e&&e[1]||""}return`
`+Bu+n}var Hu=!1;function Vu(n,e){if(!n||Hu)return"";Hu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?jo(n):""}function Rx(n){switch(n.tag){case 5:return jo(n.type);case 16:return jo("Lazy");case 13:return jo("Suspense");case 19:return jo("SuspenseList");case 0:case 2:case 15:return n=Vu(n.type,!1),n;case 11:return n=Vu(n.type.render,!1),n;case 1:return n=Vu(n.type,!0),n;default:return""}}function dh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Os:return"Fragment";case Fs:return"Portal";case ch:return"Profiler";case id:return"StrictMode";case uh:return"Suspense";case hh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case r0:return(n.displayName||"Context")+".Consumer";case i0:return(n._context.displayName||"Context")+".Provider";case rd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case sd:return e=n.displayName||null,e!==null?e:dh(n.type)||"Memo";case Er:e=n._payload,n=n._init;try{return dh(n(e))}catch{}}return null}function Px(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dh(e);case 8:return e===id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function o0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lx(n){var e=o0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ml(n){n._valueTracker||(n._valueTracker=Lx(n))}function a0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=o0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Wl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function fh(n,e){var t=e.checked;return Vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Qp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ur(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function l0(n,e){e=e.checked,e!=null&&nd(n,"checked",e,!1)}function ph(n,e){l0(n,e);var t=Ur(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?mh(n,e.type,t):e.hasOwnProperty("defaultValue")&&mh(n,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function em(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function mh(n,e,t){(e!=="number"||Wl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Jo=Array.isArray;function $s(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ur(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function gh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Me(91));return Vt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function tm(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Me(92));if(Jo(t)){if(1<t.length)throw Error(Me(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ur(t)}}function c0(n,e){var t=Ur(e.value),i=Ur(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function nm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function u0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?u0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var gl,h0=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n})(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ua(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kx=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(n){kx.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ea[e]=ea[n]})});function d0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ea.hasOwnProperty(n)&&ea[n]?(""+e).trim():e+"px"}function f0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=d0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Ix=Vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vh(n,e){if(e){if(Ix[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Me(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Me(62))}}function xh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _h=null;function od(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var wh=null,js=null,Js=null;function im(n){if(n=Ca(n)){if(typeof wh!="function")throw Error(Me(280));var e=n.stateNode;e&&(e=yc(e),wh(n.stateNode,n.type,e))}}function p0(n){js?Js?Js.push(n):Js=[n]:js=n}function m0(){if(js){var n=js,e=Js;if(Js=js=null,im(n),e)for(n=0;n<e.length;n++)im(e[n])}}function g0(n,e){return n(e)}function y0(){}var Wu=!1;function v0(n,e,t){if(Wu)return n(e,t);Wu=!0;try{return g0(n,e,t)}finally{Wu=!1,(js!==null||Js!==null)&&(y0(),m0())}}function ha(n,e){var t=n.stateNode;if(t===null)return null;var i=yc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Me(231,e,typeof t));return t}var Sh=!1;if(ar)try{Ns={},Object.defineProperty(Ns,"passive",{get:function(){Sh=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{Sh=!1}var Ns;function Dx(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(h){this.onError(h)}}var ta=!1,Gl=null,ql=!1,Mh=null,Nx={onError:function(n){ta=!0,Gl=n}};function zx(n,e,t,i,r,s,o,a,l){ta=!1,Gl=null,Dx.apply(Nx,arguments)}function Fx(n,e,t,i,r,s,o,a,l){if(zx.apply(this,arguments),ta){if(ta){var c=Gl;ta=!1,Gl=null}else throw Error(Me(198));ql||(ql=!0,Mh=c)}}function ds(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function x0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function rm(n){if(ds(n)!==n)throw Error(Me(188))}function Ox(n){var e=n.alternate;if(!e){if(e=ds(n),e===null)throw Error(Me(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return rm(r),n;if(s===i)return rm(r),e;s=s.sibling}throw Error(Me(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Me(189))}}if(t.alternate!==i)throw Error(Me(190))}if(t.tag!==3)throw Error(Me(188));return t.stateNode.current===t?n:e}function _0(n){return n=Ox(n),n!==null?w0(n):null}function w0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=w0(n);if(e!==null)return e;n=n.sibling}return null}var S0=Jn.unstable_scheduleCallback,sm=Jn.unstable_cancelCallback,Ux=Jn.unstable_shouldYield,Bx=Jn.unstable_requestPaint,Xt=Jn.unstable_now,Hx=Jn.unstable_getCurrentPriorityLevel,ad=Jn.unstable_ImmediatePriority,M0=Jn.unstable_UserBlockingPriority,Xl=Jn.unstable_NormalPriority,Vx=Jn.unstable_LowPriority,b0=Jn.unstable_IdlePriority,fc=null,Gi=null;function Wx(n){if(Gi&&typeof Gi.onCommitFiberRoot=="function")try{Gi.onCommitFiberRoot(fc,n,void 0,(n.current.flags&128)===128)}catch{}}var Ri=Math.clz32?Math.clz32:Xx,Gx=Math.log,qx=Math.LN2;function Xx(n){return n>>>=0,n===0?32:31-(Gx(n)/qx|0)|0}var yl=64,vl=4194304;function Ko(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Yl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ko(a):(s&=o,s!==0&&(i=Ko(s)))}else o=t&~r,o!==0?i=Ko(o):s!==0&&(i=Ko(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Ri(e),r=1<<t,i|=n[t],e&=~r;return i}function Yx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zx(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Ri(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=Yx(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function bh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function E0(){var n=yl;return yl<<=1,(yl&4194240)===0&&(yl=64),n}function Gu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ta(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Ri(e),n[e]=t}function $x(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Ri(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function ld(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Ri(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var _t=0;function T0(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var A0,cd,C0,R0,P0,Eh=!1,xl=[],Lr=null,kr=null,Ir=null,da=new Map,fa=new Map,Ar=[],jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function om(n,e){switch(n){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function Wo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ca(e),e!==null&&cd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Jx(n,e,t,i,r){switch(e){case"focusin":return Lr=Wo(Lr,n,e,t,i,r),!0;case"dragenter":return kr=Wo(kr,n,e,t,i,r),!0;case"mouseover":return Ir=Wo(Ir,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return da.set(s,Wo(da.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fa.set(s,Wo(fa.get(s)||null,n,e,t,i,r)),!0}return!1}function L0(n){var e=ts(n.target);if(e!==null){var t=ds(e);if(t!==null){if(e=t.tag,e===13){if(e=x0(t),e!==null){n.blockedOn=e,P0(n.priority,function(){C0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Il(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Th(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);_h=i,t.target.dispatchEvent(i),_h=null}else return e=Ca(t),e!==null&&cd(e),n.blockedOn=t,!1;e.shift()}return!0}function am(n,e,t){Il(n)&&t.delete(e)}function Kx(){Eh=!1,Lr!==null&&Il(Lr)&&(Lr=null),kr!==null&&Il(kr)&&(kr=null),Ir!==null&&Il(Ir)&&(Ir=null),da.forEach(am),fa.forEach(am)}function Go(n,e){n.blockedOn===e&&(n.blockedOn=null,Eh||(Eh=!0,Jn.unstable_scheduleCallback(Jn.unstable_NormalPriority,Kx)))}function pa(n){function e(r){return Go(r,n)}if(0<xl.length){Go(xl[0],n);for(var t=1;t<xl.length;t++){var i=xl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Lr!==null&&Go(Lr,n),kr!==null&&Go(kr,n),Ir!==null&&Go(Ir,n),da.forEach(e),fa.forEach(e),t=0;t<Ar.length;t++)i=Ar[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ar.length&&(t=Ar[0],t.blockedOn===null);)L0(t),t.blockedOn===null&&Ar.shift()}var Ks=hr.ReactCurrentBatchConfig,Zl=!0;function Qx(n,e,t,i){var r=_t,s=Ks.transition;Ks.transition=null;try{_t=1,ud(n,e,t,i)}finally{_t=r,Ks.transition=s}}function e_(n,e,t,i){var r=_t,s=Ks.transition;Ks.transition=null;try{_t=4,ud(n,e,t,i)}finally{_t=r,Ks.transition=s}}function ud(n,e,t,i){if(Zl){var r=Th(n,e,t,i);if(r===null)Ju(n,e,i,$l,t),om(n,i);else if(Jx(r,n,e,t,i))i.stopPropagation();else if(om(n,i),e&4&&-1<jx.indexOf(n)){for(;r!==null;){var s=Ca(r);if(s!==null&&A0(s),s=Th(n,e,t,i),s===null&&Ju(n,e,i,$l,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ju(n,e,i,null,t)}}var $l=null;function Th(n,e,t,i){if($l=null,n=od(i),n=ts(n),n!==null)if(e=ds(n),e===null)n=null;else if(t=e.tag,t===13){if(n=x0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return $l=n,null}function k0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hx()){case ad:return 1;case M0:return 4;case Xl:case Vx:return 16;case b0:return 536870912;default:return 16}default:return 16}}var Rr=null,hd=null,Dl=null;function I0(){if(Dl)return Dl;var n,e=hd,t=e.length,i,r="value"in Rr?Rr.value:Rr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Dl=r.slice(n,1<i?1-i:void 0)}function Nl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function _l(){return!0}function lm(){return!1}function Kn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_l:lm,this.isPropagationStopped=lm,this}return Vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dd=Kn(lo),Aa=Vt({},lo,{view:0,detail:0}),t_=Kn(Aa),qu,Xu,qo,pc=Vt({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qo&&(qo&&n.type==="mousemove"?(qu=n.screenX-qo.screenX,Xu=n.screenY-qo.screenY):Xu=qu=0,qo=n),qu)},movementY:function(n){return"movementY"in n?n.movementY:Xu}}),cm=Kn(pc),n_=Vt({},pc,{dataTransfer:0}),i_=Kn(n_),r_=Vt({},Aa,{relatedTarget:0}),Yu=Kn(r_),s_=Vt({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),o_=Kn(s_),a_=Vt({},lo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l_=Kn(a_),c_=Vt({},lo,{data:0}),um=Kn(c_),u_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f_(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=d_[n])?!!e[n]:!1}function fd(){return f_}var p_=Vt({},Aa,{key:function(n){if(n.key){var e=u_[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Nl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?h_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(n){return n.type==="keypress"?Nl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Nl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),m_=Kn(p_),g_=Vt({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hm=Kn(g_),y_=Vt({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),v_=Kn(y_),x_=Vt({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),__=Kn(x_),w_=Vt({},pc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),S_=Kn(w_),M_=[9,13,27,32],pd=ar&&"CompositionEvent"in window,na=null;ar&&"documentMode"in document&&(na=document.documentMode);var b_=ar&&"TextEvent"in window&&!na,D0=ar&&(!pd||na&&8<na&&11>=na),dm=" ",fm=!1;function N0(n,e){switch(n){case"keyup":return M_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Us=!1;function E_(n,e){switch(n){case"compositionend":return z0(e);case"keypress":return e.which!==32?null:(fm=!0,dm);case"textInput":return n=e.data,n===dm&&fm?null:n;default:return null}}function T_(n,e){if(Us)return n==="compositionend"||!pd&&N0(n,e)?(n=I0(),Dl=hd=Rr=null,Us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return D0&&e.locale!=="ko"?null:e.data;default:return null}}var A_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!A_[n.type]:e==="textarea"}function F0(n,e,t,i){p0(i),e=jl(e,"onChange"),0<e.length&&(t=new dd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ia=null,ma=null;function C_(n){Z0(n,0)}function mc(n){var e=Vs(n);if(a0(e))return n}function R_(n,e){if(n==="change")return e}var O0=!1;ar&&(ar?(Sl="oninput"in document,Sl||(Zu=document.createElement("div"),Zu.setAttribute("oninput","return;"),Sl=typeof Zu.oninput=="function"),wl=Sl):wl=!1,O0=wl&&(!document.documentMode||9<document.documentMode));var wl,Sl,Zu;function mm(){ia&&(ia.detachEvent("onpropertychange",U0),ma=ia=null)}function U0(n){if(n.propertyName==="value"&&mc(ma)){var e=[];F0(e,ma,n,od(n)),v0(C_,e)}}function P_(n,e,t){n==="focusin"?(mm(),ia=e,ma=t,ia.attachEvent("onpropertychange",U0)):n==="focusout"&&mm()}function L_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return mc(ma)}function k_(n,e){if(n==="click")return mc(e)}function I_(n,e){if(n==="input"||n==="change")return mc(e)}function D_(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Li=typeof Object.is=="function"?Object.is:D_;function ga(n,e){if(Li(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!lh.call(e,r)||!Li(n[r],e[r]))return!1}return!0}function gm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ym(n,e){var t=gm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=gm(t)}}function B0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?B0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function H0(){for(var n=window,e=Wl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Wl(n.document)}return e}function md(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function N_(n){var e=H0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&B0(t.ownerDocument.documentElement,t)){if(i!==null&&md(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=ym(t,s);var o=ym(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var z_=ar&&"documentMode"in document&&11>=document.documentMode,Bs=null,Ah=null,ra=null,Ch=!1;function vm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ch||Bs==null||Bs!==Wl(i)||(i=Bs,"selectionStart"in i&&md(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ra&&ga(ra,i)||(ra=i,i=jl(Ah,"onSelect"),0<i.length&&(e=new dd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Bs)))}function Ml(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Hs={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionend:Ml("Transition","TransitionEnd")},$u={},V0={};ar&&(V0=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function gc(n){if($u[n])return $u[n];if(!Hs[n])return n;var e=Hs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in V0)return $u[n]=e[t];return n}var W0=gc("animationend"),G0=gc("animationiteration"),q0=gc("animationstart"),X0=gc("transitionend"),Y0=new Map,xm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(n,e){Y0.set(n,e),hs(e,[n])}for(bl=0;bl<xm.length;bl++)El=xm[bl],_m=El.toLowerCase(),wm=El[0].toUpperCase()+El.slice(1),Hr(_m,"on"+wm);var El,_m,wm,bl;Hr(W0,"onAnimationEnd");Hr(G0,"onAnimationIteration");Hr(q0,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(X0,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function Sm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Fx(i,e,void 0,n),n.currentTarget=null}function Z0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Sm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Sm(r,a,c),s=l}}}if(ql)throw n=Mh,ql=!1,Mh=null,n}function kt(n,e){var t=e[Ih];t===void 0&&(t=e[Ih]=new Set);var i=n+"__bubble";t.has(i)||($0(e,n,2,!1),t.add(i))}function ju(n,e,t){var i=0;e&&(i|=4),$0(t,n,i,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function ya(n){if(!n[Tl]){n[Tl]=!0,n0.forEach(function(t){t!=="selectionchange"&&(F_.has(t)||ju(t,!1,n),ju(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,ju("selectionchange",!1,e))}}function $0(n,e,t,i){switch(k0(e)){case 1:var r=Qx;break;case 4:r=e_;break;default:r=ud}t=r.bind(null,e,t,n),r=void 0,!Sh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ju(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ts(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}v0(function(){var c=s,h=od(t),d=[];e:{var u=Y0.get(n);if(u!==void 0){var m=dd,x=n;switch(n){case"keypress":if(Nl(t)===0)break e;case"keydown":case"keyup":m=m_;break;case"focusin":x="focus",m=Yu;break;case"focusout":x="blur",m=Yu;break;case"beforeblur":case"afterblur":m=Yu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=i_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=v_;break;case W0:case G0:case q0:m=o_;break;case X0:m=__;break;case"scroll":m=t_;break;case"wheel":m=S_;break;case"copy":case"cut":case"paste":m=l_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=hm}var f=(e&4)!==0,p=!f&&n==="scroll",g=f?u!==null?u+"Capture":null:u;f=[];for(var y=c,v;y!==null;){v=y;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,g!==null&&(_=ha(y,g),_!=null&&f.push(va(y,_,v)))),p)break;y=y.return}0<f.length&&(u=new m(u,x,null,t,h),d.push({event:u,listeners:f}))}}if((e&7)===0){e:{if(u=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",u&&t!==_h&&(x=t.relatedTarget||t.fromElement)&&(ts(x)||x[lr]))break e;if((m||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=c,x=x?ts(x):null,x!==null&&(p=ds(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(f=cm,_="onMouseLeave",g="onMouseEnter",y="mouse",(n==="pointerout"||n==="pointerover")&&(f=hm,_="onPointerLeave",g="onPointerEnter",y="pointer"),p=m==null?u:Vs(m),v=x==null?u:Vs(x),u=new f(_,y+"leave",m,t,h),u.target=p,u.relatedTarget=v,_=null,ts(h)===c&&(f=new f(g,y+"enter",x,t,h),f.target=v,f.relatedTarget=p,_=f),p=_,m&&x)t:{for(f=m,g=x,y=0,v=f;v;v=zs(v))y++;for(v=0,_=g;_;_=zs(_))v++;for(;0<y-v;)f=zs(f),y--;for(;0<v-y;)g=zs(g),v--;for(;y--;){if(f===g||g!==null&&f===g.alternate)break t;f=zs(f),g=zs(g)}f=null}else f=null;m!==null&&Mm(d,u,m,f,!1),x!==null&&p!==null&&Mm(d,p,x,f,!0)}}e:{if(u=c?Vs(c):window,m=u.nodeName&&u.nodeName.toLowerCase(),m==="select"||m==="input"&&u.type==="file")var b=R_;else if(pm(u))if(O0)b=I_;else{b=L_;var C=P_}else(m=u.nodeName)&&m.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(b=k_);if(b&&(b=b(n,c))){F0(d,b,t,h);break e}C&&C(n,u,c),n==="focusout"&&(C=u._wrapperState)&&C.controlled&&u.type==="number"&&mh(u,"number",u.value)}switch(C=c?Vs(c):window,n){case"focusin":(pm(C)||C.contentEditable==="true")&&(Bs=C,Ah=c,ra=null);break;case"focusout":ra=Ah=Bs=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,vm(d,t,h);break;case"selectionchange":if(z_)break;case"keydown":case"keyup":vm(d,t,h)}var D;if(pd)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Us?N0(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(D0&&t.locale!=="ko"&&(Us||S!=="onCompositionStart"?S==="onCompositionEnd"&&Us&&(D=I0()):(Rr=h,hd="value"in Rr?Rr.value:Rr.textContent,Us=!0)),C=jl(c,S),0<C.length&&(S=new um(S,n,null,t,h),d.push({event:S,listeners:C}),D?S.data=D:(D=z0(t),D!==null&&(S.data=D)))),(D=b_?E_(n,t):T_(n,t))&&(c=jl(c,"onBeforeInput"),0<c.length&&(h=new um("onBeforeInput","beforeinput",null,t,h),d.push({event:h,listeners:c}),h.data=D))}Z0(d,e)})}function va(n,e,t){return{instance:n,listener:e,currentTarget:t}}function jl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(n,t),s!=null&&i.unshift(va(n,s,r)),s=ha(n,e),s!=null&&i.push(va(n,s,r))),n=n.return}return i}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Mm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ha(t,s),l!=null&&o.unshift(va(t,l,a))):r||(l=ha(t,s),l!=null&&o.push(va(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var O_=/\r\n?/g,U_=/\u0000|\uFFFD/g;function bm(n){return(typeof n=="string"?n:""+n).replace(O_,`
`).replace(U_,"")}function Al(n,e,t){if(e=bm(e),bm(n)!==e&&t)throw Error(Me(425))}function Jl(){}var Rh=null,Ph=null;function Lh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kh=typeof setTimeout=="function"?setTimeout:void 0,B_=typeof clearTimeout=="function"?clearTimeout:void 0,Em=typeof Promise=="function"?Promise:void 0,H_=typeof queueMicrotask=="function"?queueMicrotask:typeof Em<"u"?function(n){return Em.resolve(null).then(n).catch(V_)}:kh;function V_(n){setTimeout(function(){throw n})}function Ku(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),pa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);pa(e)}function Dr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Tm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var co=Math.random().toString(36).slice(2),Wi="__reactFiber$"+co,xa="__reactProps$"+co,lr="__reactContainer$"+co,Ih="__reactEvents$"+co,W_="__reactListeners$"+co,G_="__reactHandles$"+co;function ts(n){var e=n[Wi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[lr]||t[Wi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Tm(n);n!==null;){if(t=n[Wi])return t;n=Tm(n)}return e}n=t,t=n.parentNode}return null}function Ca(n){return n=n[Wi]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Me(33))}function yc(n){return n[xa]||null}var Dh=[],Ws=-1;function Vr(n){return{current:n}}function It(n){0>Ws||(n.current=Dh[Ws],Dh[Ws]=null,Ws--)}function Lt(n,e){Ws++,Dh[Ws]=n.current,n.current=e}var Br={},En=Vr(Br),Vn=Vr(!1),os=Br;function no(n,e){var t=n.type.contextTypes;if(!t)return Br;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Wn(n){return n=n.childContextTypes,n!=null}function Kl(){It(Vn),It(En)}function Am(n,e,t){if(En.current!==Br)throw Error(Me(168));Lt(En,e),Lt(Vn,t)}function j0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Me(108,Px(n)||"Unknown",r));return Vt({},t,i)}function Ql(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,os=En.current,Lt(En,n),Lt(Vn,Vn.current),!0}function Cm(n,e,t){var i=n.stateNode;if(!i)throw Error(Me(169));t?(n=j0(n,e,os),i.__reactInternalMemoizedMergedChildContext=n,It(Vn),It(En),Lt(En,n)):It(Vn),Lt(Vn,t)}var ir=null,vc=!1,Qu=!1;function J0(n){ir===null?ir=[n]:ir.push(n)}function q_(n){vc=!0,J0(n)}function Wr(){if(!Qu&&ir!==null){Qu=!0;var n=0,e=_t;try{var t=ir;for(_t=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ir=null,vc=!1}catch(r){throw ir!==null&&(ir=ir.slice(n+1)),S0(ad,Wr),r}finally{_t=e,Qu=!1}}return null}var Gs=[],qs=0,ec=null,tc=0,pi=[],mi=0,as=null,rr=1,sr="";function Qr(n,e){Gs[qs++]=tc,Gs[qs++]=ec,ec=n,tc=e}function K0(n,e,t){pi[mi++]=rr,pi[mi++]=sr,pi[mi++]=as,as=n;var i=rr;n=sr;var r=32-Ri(i)-1;i&=~(1<<r),t+=1;var s=32-Ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,rr=1<<32-Ri(e)+r|t<<r|i,sr=s+n}else rr=1<<s|t<<r|i,sr=n}function gd(n){n.return!==null&&(Qr(n,1),K0(n,1,0))}function yd(n){for(;n===ec;)ec=Gs[--qs],Gs[qs]=null,tc=Gs[--qs],Gs[qs]=null;for(;n===as;)as=pi[--mi],pi[mi]=null,sr=pi[--mi],pi[mi]=null,rr=pi[--mi],pi[mi]=null}var jn=null,$n=null,Dt=!1,Ci=null;function Q0(n,e){var t=gi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Rm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,jn=n,$n=Dr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,jn=n,$n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=as!==null?{id:rr,overflow:sr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=gi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,jn=n,$n=null,!0):!1;default:return!1}}function Nh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zh(n){if(Dt){var e=$n;if(e){var t=e;if(!Rm(n,e)){if(Nh(n))throw Error(Me(418));e=Dr(t.nextSibling);var i=jn;e&&Rm(n,e)?Q0(i,t):(n.flags=n.flags&-4097|2,Dt=!1,jn=n)}}else{if(Nh(n))throw Error(Me(418));n.flags=n.flags&-4097|2,Dt=!1,jn=n}}}function Pm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jn=n}function Cl(n){if(n!==jn)return!1;if(!Dt)return Pm(n),Dt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Lh(n.type,n.memoizedProps)),e&&(e=$n)){if(Nh(n))throw eg(),Error(Me(418));for(;e;)Q0(n,e),e=Dr(e.nextSibling)}if(Pm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Me(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){$n=Dr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}$n=null}}else $n=jn?Dr(n.stateNode.nextSibling):null;return!0}function eg(){for(var n=$n;n;)n=Dr(n.nextSibling)}function io(){$n=jn=null,Dt=!1}function vd(n){Ci===null?Ci=[n]:Ci.push(n)}var X_=hr.ReactCurrentBatchConfig;function Xo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Me(309));var i=t.stateNode}if(!i)throw Error(Me(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Me(284));if(!t._owner)throw Error(Me(290,n))}return n}function Rl(n,e){throw n=Object.prototype.toString.call(e),Error(Me(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Lm(n){var e=n._init;return e(n._payload)}function tg(n){function e(g,y){if(n){var v=g.deletions;v===null?(g.deletions=[y],g.flags|=16):v.push(y)}}function t(g,y){if(!n)return null;for(;y!==null;)e(g,y),y=y.sibling;return null}function i(g,y){for(g=new Map;y!==null;)y.key!==null?g.set(y.key,y):g.set(y.index,y),y=y.sibling;return g}function r(g,y){return g=Or(g,y),g.index=0,g.sibling=null,g}function s(g,y,v){return g.index=v,n?(v=g.alternate,v!==null?(v=v.index,v<y?(g.flags|=2,y):v):(g.flags|=2,y)):(g.flags|=1048576,y)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function a(g,y,v,_){return y===null||y.tag!==6?(y=oh(v,g.mode,_),y.return=g,y):(y=r(y,v),y.return=g,y)}function l(g,y,v,_){var b=v.type;return b===Os?h(g,y,v.props.children,_,v.key):y!==null&&(y.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Er&&Lm(b)===y.type)?(_=r(y,v.props),_.ref=Xo(g,y,v),_.return=g,_):(_=Vl(v.type,v.key,v.props,null,g.mode,_),_.ref=Xo(g,y,v),_.return=g,_)}function c(g,y,v,_){return y===null||y.tag!==4||y.stateNode.containerInfo!==v.containerInfo||y.stateNode.implementation!==v.implementation?(y=ah(v,g.mode,_),y.return=g,y):(y=r(y,v.children||[]),y.return=g,y)}function h(g,y,v,_,b){return y===null||y.tag!==7?(y=ss(v,g.mode,_,b),y.return=g,y):(y=r(y,v),y.return=g,y)}function d(g,y,v){if(typeof y=="string"&&y!==""||typeof y=="number")return y=oh(""+y,g.mode,v),y.return=g,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pl:return v=Vl(y.type,y.key,y.props,null,g.mode,v),v.ref=Xo(g,null,y),v.return=g,v;case Fs:return y=ah(y,g.mode,v),y.return=g,y;case Er:var _=y._init;return d(g,_(y._payload),v)}if(Jo(y)||Vo(y))return y=ss(y,g.mode,v,null),y.return=g,y;Rl(g,y)}return null}function u(g,y,v,_){var b=y!==null?y.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(g,y,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pl:return v.key===b?l(g,y,v,_):null;case Fs:return v.key===b?c(g,y,v,_):null;case Er:return b=v._init,u(g,y,b(v._payload),_)}if(Jo(v)||Vo(v))return b!==null?null:h(g,y,v,_,null);Rl(g,v)}return null}function m(g,y,v,_,b){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(v)||null,a(y,g,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case pl:return g=g.get(_.key===null?v:_.key)||null,l(y,g,_,b);case Fs:return g=g.get(_.key===null?v:_.key)||null,c(y,g,_,b);case Er:var C=_._init;return m(g,y,v,C(_._payload),b)}if(Jo(_)||Vo(_))return g=g.get(v)||null,h(y,g,_,b,null);Rl(y,_)}return null}function x(g,y,v,_){for(var b=null,C=null,D=y,S=y=0,A=null;D!==null&&S<v.length;S++){D.index>S?(A=D,D=null):A=D.sibling;var z=u(g,D,v[S],_);if(z===null){D===null&&(D=A);break}n&&D&&z.alternate===null&&e(g,D),y=s(z,y,S),C===null?b=z:C.sibling=z,C=z,D=A}if(S===v.length)return t(g,D),Dt&&Qr(g,S),b;if(D===null){for(;S<v.length;S++)D=d(g,v[S],_),D!==null&&(y=s(D,y,S),C===null?b=D:C.sibling=D,C=D);return Dt&&Qr(g,S),b}for(D=i(g,D);S<v.length;S++)A=m(D,g,S,v[S],_),A!==null&&(n&&A.alternate!==null&&D.delete(A.key===null?S:A.key),y=s(A,y,S),C===null?b=A:C.sibling=A,C=A);return n&&D.forEach(function(re){return e(g,re)}),Dt&&Qr(g,S),b}function f(g,y,v,_){var b=Vo(v);if(typeof b!="function")throw Error(Me(150));if(v=b.call(v),v==null)throw Error(Me(151));for(var C=b=null,D=y,S=y=0,A=null,z=v.next();D!==null&&!z.done;S++,z=v.next()){D.index>S?(A=D,D=null):A=D.sibling;var re=u(g,D,z.value,_);if(re===null){D===null&&(D=A);break}n&&D&&re.alternate===null&&e(g,D),y=s(re,y,S),C===null?b=re:C.sibling=re,C=re,D=A}if(z.done)return t(g,D),Dt&&Qr(g,S),b;if(D===null){for(;!z.done;S++,z=v.next())z=d(g,z.value,_),z!==null&&(y=s(z,y,S),C===null?b=z:C.sibling=z,C=z);return Dt&&Qr(g,S),b}for(D=i(g,D);!z.done;S++,z=v.next())z=m(D,g,S,z.value,_),z!==null&&(n&&z.alternate!==null&&D.delete(z.key===null?S:z.key),y=s(z,y,S),C===null?b=z:C.sibling=z,C=z);return n&&D.forEach(function(se){return e(g,se)}),Dt&&Qr(g,S),b}function p(g,y,v,_){if(typeof v=="object"&&v!==null&&v.type===Os&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case pl:e:{for(var b=v.key,C=y;C!==null;){if(C.key===b){if(b=v.type,b===Os){if(C.tag===7){t(g,C.sibling),y=r(C,v.props.children),y.return=g,g=y;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Er&&Lm(b)===C.type){t(g,C.sibling),y=r(C,v.props),y.ref=Xo(g,C,v),y.return=g,g=y;break e}t(g,C);break}else e(g,C);C=C.sibling}v.type===Os?(y=ss(v.props.children,g.mode,_,v.key),y.return=g,g=y):(_=Vl(v.type,v.key,v.props,null,g.mode,_),_.ref=Xo(g,y,v),_.return=g,g=_)}return o(g);case Fs:e:{for(C=v.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===v.containerInfo&&y.stateNode.implementation===v.implementation){t(g,y.sibling),y=r(y,v.children||[]),y.return=g,g=y;break e}else{t(g,y);break}else e(g,y);y=y.sibling}y=ah(v,g.mode,_),y.return=g,g=y}return o(g);case Er:return C=v._init,p(g,y,C(v._payload),_)}if(Jo(v))return x(g,y,v,_);if(Vo(v))return f(g,y,v,_);Rl(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,y!==null&&y.tag===6?(t(g,y.sibling),y=r(y,v),y.return=g,g=y):(t(g,y),y=oh(v,g.mode,_),y.return=g,g=y),o(g)):t(g,y)}return p}var ro=tg(!0),ng=tg(!1),nc=Vr(null),ic=null,Xs=null,xd=null;function _d(){xd=Xs=ic=null}function wd(n){var e=nc.current;It(nc),n._currentValue=e}function Fh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Qs(n,e){ic=n,xd=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Hn=!0),n.firstContext=null)}function vi(n){var e=n._currentValue;if(xd!==n)if(n={context:n,memoizedValue:e,next:null},Xs===null){if(ic===null)throw Error(Me(308));Xs=n,ic.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return e}var ns=null;function Sd(n){ns===null?ns=[n]:ns.push(n)}function ig(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Sd(e)):(t.next=r.next,r.next=t),e.interleaved=t,cr(n,i)}function cr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Tr=!1;function Md(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function or(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(mt&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,cr(n,t)}return r=i.interleaved,r===null?(e.next=e,Sd(i)):(e.next=r.next,r.next=e),i.interleaved=e,cr(n,t)}function zl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ld(n,t)}}function km(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function rc(n,e,t,i){var r=n.updateQueue;Tr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=n.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,h=c=l=null,a=s;do{var u=a.lane,m=a.eventTime;if((i&u)===u){h!==null&&(h=h.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,f=a;switch(u=e,m=t,f.tag){case 1:if(x=f.payload,typeof x=="function"){d=x.call(m,d,u);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=f.payload,u=typeof x=="function"?x.call(m,d,u):x,u==null)break e;d=Vt({},d,u);break e;case 2:Tr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else m={eventTime:m,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=m,l=d):h=h.next=m,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);cs|=o,n.lanes=o,n.memoizedState=d}}function Im(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Me(191,r));r.call(i)}}}var Ra={},qi=Vr(Ra),_a=Vr(Ra),wa=Vr(Ra);function is(n){if(n===Ra)throw Error(Me(174));return n}function bd(n,e){switch(Lt(wa,e),Lt(_a,n),Lt(qi,Ra),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=yh(e,n)}It(qi),Lt(qi,e)}function so(){It(qi),It(_a),It(wa)}function sg(n){is(wa.current);var e=is(qi.current),t=yh(e,n.type);e!==t&&(Lt(_a,n),Lt(qi,t))}function Ed(n){_a.current===n&&(It(qi),It(_a))}var Bt=Vr(0);function sc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eh=[];function Td(){for(var n=0;n<eh.length;n++)eh[n]._workInProgressVersionPrimary=null;eh.length=0}var Fl=hr.ReactCurrentDispatcher,th=hr.ReactCurrentBatchConfig,ls=0,Ht=null,Jt=null,on=null,oc=!1,sa=!1,Sa=0,Y_=0;function Sn(){throw Error(Me(321))}function Ad(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Li(n[t],e[t]))return!1;return!0}function Cd(n,e,t,i,r,s){if(ls=s,Ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fl.current=n===null||n.memoizedState===null?J_:K_,n=t(i,r),sa){s=0;do{if(sa=!1,Sa=0,25<=s)throw Error(Me(301));s+=1,on=Jt=null,e.updateQueue=null,Fl.current=Q_,n=t(i,r)}while(sa)}if(Fl.current=ac,e=Jt!==null&&Jt.next!==null,ls=0,on=Jt=Ht=null,oc=!1,e)throw Error(Me(300));return n}function Rd(){var n=Sa!==0;return Sa=0,n}function Vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Ht.memoizedState=on=n:on=on.next=n,on}function xi(){if(Jt===null){var n=Ht.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var e=on===null?Ht.memoizedState:on.next;if(e!==null)on=e,Jt=n;else{if(n===null)throw Error(Me(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},on===null?Ht.memoizedState=on=n:on=on.next=n}return on}function Ma(n,e){return typeof e=="function"?e(n):e}function nh(n){var e=xi(),t=e.queue;if(t===null)throw Error(Me(311));t.lastRenderedReducer=n;var i=Jt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((ls&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ht.lanes|=h,cs|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Li(i,e.memoizedState)||(Hn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ht.lanes|=s,cs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ih(n){var e=xi(),t=e.queue;if(t===null)throw Error(Me(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Li(s,e.memoizedState)||(Hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function og(){}function ag(n,e){var t=Ht,i=xi(),r=e(),s=!Li(i.memoizedState,r);if(s&&(i.memoizedState=r,Hn=!0),i=i.queue,Pd(ug.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||on!==null&&on.memoizedState.tag&1){if(t.flags|=2048,ba(9,cg.bind(null,t,i,r,e),void 0,null),an===null)throw Error(Me(349));(ls&30)!==0||lg(t,e,r)}return r}function lg(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function cg(n,e,t,i){e.value=t,e.getSnapshot=i,hg(e)&&dg(n)}function ug(n,e,t){return t(function(){hg(e)&&dg(n)})}function hg(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Li(n,t)}catch{return!0}}function dg(n){var e=cr(n,1);e!==null&&Pi(e,n,1,-1)}function Dm(n){var e=Vi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:n},e.queue=n,n=n.dispatch=j_.bind(null,Ht,n),[e.memoizedState,n]}function ba(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function fg(){return xi().memoizedState}function Ol(n,e,t,i){var r=Vi();Ht.flags|=n,r.memoizedState=ba(1|e,t,void 0,i===void 0?null:i)}function xc(n,e,t,i){var r=xi();i=i===void 0?null:i;var s=void 0;if(Jt!==null){var o=Jt.memoizedState;if(s=o.destroy,i!==null&&Ad(i,o.deps)){r.memoizedState=ba(e,t,s,i);return}}Ht.flags|=n,r.memoizedState=ba(1|e,t,s,i)}function Nm(n,e){return Ol(8390656,8,n,e)}function Pd(n,e){return xc(2048,8,n,e)}function pg(n,e){return xc(4,2,n,e)}function mg(n,e){return xc(4,4,n,e)}function gg(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function yg(n,e,t){return t=t!=null?t.concat([n]):null,xc(4,4,gg.bind(null,e,n),t)}function Ld(){}function vg(n,e){var t=xi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ad(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function xg(n,e){var t=xi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ad(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function _g(n,e,t){return(ls&21)===0?(n.baseState&&(n.baseState=!1,Hn=!0),n.memoizedState=t):(Li(t,e)||(t=E0(),Ht.lanes|=t,cs|=t,n.baseState=!0),e)}function Z_(n,e){var t=_t;_t=t!==0&&4>t?t:4,n(!0);var i=th.transition;th.transition={};try{n(!1),e()}finally{_t=t,th.transition=i}}function wg(){return xi().memoizedState}function $_(n,e,t){var i=Fr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Sg(n))Mg(e,t);else if(t=ig(n,e,t,i),t!==null){var r=In();Pi(t,n,i,r),bg(t,e,i)}}function j_(n,e,t){var i=Fr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sg(n))Mg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Li(a,o)){var l=e.interleaved;l===null?(r.next=r,Sd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=ig(n,e,r,i),t!==null&&(r=In(),Pi(t,n,i,r),bg(t,e,i))}}function Sg(n){var e=n.alternate;return n===Ht||e!==null&&e===Ht}function Mg(n,e){sa=oc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function bg(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ld(n,t)}}var ac={readContext:vi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},J_={readContext:vi,useCallback:function(n,e){return Vi().memoizedState=[n,e===void 0?null:e],n},useContext:vi,useEffect:Nm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ol(4194308,4,gg.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ol(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ol(4,2,n,e)},useMemo:function(n,e){var t=Vi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Vi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=$_.bind(null,Ht,n),[i.memoizedState,n]},useRef:function(n){var e=Vi();return n={current:n},e.memoizedState=n},useState:Dm,useDebugValue:Ld,useDeferredValue:function(n){return Vi().memoizedState=n},useTransition:function(){var n=Dm(!1),e=n[0];return n=Z_.bind(null,n[1]),Vi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ht,r=Vi();if(Dt){if(t===void 0)throw Error(Me(407));t=t()}else{if(t=e(),an===null)throw Error(Me(349));(ls&30)!==0||lg(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Nm(ug.bind(null,i,s,n),[n]),i.flags|=2048,ba(9,cg.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Vi(),e=an.identifierPrefix;if(Dt){var t=sr,i=rr;t=(i&~(1<<32-Ri(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Sa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Y_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},K_={readContext:vi,useCallback:vg,useContext:vi,useEffect:Pd,useImperativeHandle:yg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:nh,useRef:fg,useState:function(){return nh(Ma)},useDebugValue:Ld,useDeferredValue:function(n){var e=xi();return _g(e,Jt.memoizedState,n)},useTransition:function(){var n=nh(Ma)[0],e=xi().memoizedState;return[n,e]},useMutableSource:og,useSyncExternalStore:ag,useId:wg,unstable_isNewReconciler:!1},Q_={readContext:vi,useCallback:vg,useContext:vi,useEffect:Pd,useImperativeHandle:yg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:xg,useReducer:ih,useRef:fg,useState:function(){return ih(Ma)},useDebugValue:Ld,useDeferredValue:function(n){var e=xi();return Jt===null?e.memoizedState=n:_g(e,Jt.memoizedState,n)},useTransition:function(){var n=ih(Ma)[0],e=xi().memoizedState;return[n,e]},useMutableSource:og,useSyncExternalStore:ag,useId:wg,unstable_isNewReconciler:!1};function Ti(n,e){if(n&&n.defaultProps){e=Vt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Oh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Vt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var _c={isMounted:function(n){return(n=n._reactInternals)?ds(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=In(),r=Fr(n),s=or(i,r);s.payload=e,t!=null&&(s.callback=t),e=Nr(n,s,r),e!==null&&(Pi(e,n,r,i),zl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=In(),r=Fr(n),s=or(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Nr(n,s,r),e!==null&&(Pi(e,n,r,i),zl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=In(),i=Fr(n),r=or(t,i);r.tag=2,e!=null&&(r.callback=e),e=Nr(n,r,i),e!==null&&(Pi(e,n,i,t),zl(e,n,i))}};function zm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(t,i)||!ga(r,s):!0}function Eg(n,e,t){var i=!1,r=Br,s=e.contextType;return typeof s=="object"&&s!==null?s=vi(s):(r=Wn(e)?os:En.current,i=e.contextTypes,s=(i=i!=null)?no(n,r):Br),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Fm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&_c.enqueueReplaceState(e,e.state,null)}function Uh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Md(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=vi(s):(s=Wn(e)?os:En.current,r.context=no(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_c.enqueueReplaceState(r,r.state,null),rc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function oo(n,e){try{var t="",i=e;do t+=Rx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function rh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Bh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var e1=typeof WeakMap=="function"?WeakMap:Map;function Tg(n,e,t){t=or(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){cc||(cc=!0,jh=i),Bh(n,e)},t}function Ag(n,e,t){t=or(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Bh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Bh(n,e),typeof i!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Om(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new e1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=p1.bind(null,n,e,t),e.then(n,n))}function Um(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Bm(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=or(-1,1),e.tag=2,Nr(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var t1=hr.ReactCurrentOwner,Hn=!1;function kn(n,e,t,i){e.child=n===null?ng(e,null,t,i):ro(e,n.child,t,i)}function Hm(n,e,t,i,r){t=t.render;var s=e.ref;return Qs(e,r),i=Cd(n,e,t,i,s,r),t=Rd(),n!==null&&!Hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ur(n,e,r)):(Dt&&t&&gd(e),e.flags|=1,kn(n,e,i,r),e.child)}function Vm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Ud(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Cg(n,e,s,i,r)):(n=Vl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ga,t(o,i)&&n.ref===e.ref)return ur(n,e,r)}return e.flags|=1,n=Or(s,i),n.ref=e.ref,n.return=e,e.child=n}function Cg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ga(s,i)&&n.ref===e.ref)if(Hn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Hn=!0);else return e.lanes=n.lanes,ur(n,e,r)}return Hh(n,e,t,i,r)}function Rg(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(Zs,Zn),Zn|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Lt(Zs,Zn),Zn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Lt(Zs,Zn),Zn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Lt(Zs,Zn),Zn|=i;return kn(n,e,r,t),e.child}function Pg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Hh(n,e,t,i,r){var s=Wn(t)?os:En.current;return s=no(e,s),Qs(e,r),t=Cd(n,e,t,i,s,r),i=Rd(),n!==null&&!Hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ur(n,e,r)):(Dt&&i&&gd(e),e.flags|=1,kn(n,e,t,r),e.child)}function Wm(n,e,t,i,r){if(Wn(t)){var s=!0;Ql(e)}else s=!1;if(Qs(e,r),e.stateNode===null)Ul(n,e),Eg(e,t,i),Uh(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=vi(c):(c=Wn(t)?os:En.current,c=no(e,c));var h=t.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Fm(e,o,i,c),Tr=!1;var u=e.memoizedState;o.state=u,rc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||Vn.current||Tr?(typeof h=="function"&&(Oh(e,t,h,i),l=e.memoizedState),(a=Tr||zm(e,t,a,i,u,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,rg(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Ti(e.type,a),o.props=c,d=e.pendingProps,u=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=vi(l):(l=Wn(t)?os:En.current,l=no(e,l));var m=t.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||u!==l)&&Fm(e,o,i,l),Tr=!1,u=e.memoizedState,o.state=u,rc(e,i,o,r);var x=e.memoizedState;a!==d||u!==x||Vn.current||Tr?(typeof m=="function"&&(Oh(e,t,m,i),x=e.memoizedState),(c=Tr||zm(e,t,c,i,u,x,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=1024),i=!1)}return Vh(n,e,t,i,s,r)}function Vh(n,e,t,i,r,s){Pg(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Cm(e,t,!1),ur(n,e,s);i=e.stateNode,t1.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ro(e,n.child,null,s),e.child=ro(e,null,a,s)):kn(n,e,a,s),e.memoizedState=i.state,r&&Cm(e,t,!0),e.child}function Lg(n){var e=n.stateNode;e.pendingContext?Am(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Am(n,e.context,!1),bd(n,e.containerInfo)}function Gm(n,e,t,i,r){return io(),vd(r),e.flags|=256,kn(n,e,t,i),e.child}var Wh={dehydrated:null,treeContext:null,retryLane:0};function Gh(n){return{baseLanes:n,cachePool:null,transitions:null}}function kg(n,e,t){var i=e.pendingProps,r=Bt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Lt(Bt,r&1),n===null)return zh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mc(o,i,0,null),n=ss(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Gh(t),e.memoizedState=Wh,n):kd(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return n1(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Or(a,s):(s=ss(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Gh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Wh,i}return s=n.child,n=s.sibling,i=Or(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function kd(n,e){return e=Mc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Pl(n,e,t,i){return i!==null&&vd(i),ro(e,n.child,null,t),n=kd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function n1(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=rh(Error(Me(422))),Pl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mc({mode:"visible",children:i.children},r,0,null),s=ss(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&ro(e,n.child,null,o),e.child.memoizedState=Gh(o),e.memoizedState=Wh,s);if((e.mode&1)===0)return Pl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Me(419)),i=rh(s,i,void 0),Pl(n,e,o,i)}if(a=(o&n.childLanes)!==0,Hn||a){if(i=an,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,cr(n,r),Pi(i,n,r,-1))}return Od(),i=rh(Error(Me(421))),Pl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=m1.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,$n=Dr(r.nextSibling),jn=e,Dt=!0,Ci=null,n!==null&&(pi[mi++]=rr,pi[mi++]=sr,pi[mi++]=as,rr=n.id,sr=n.overflow,as=e),e=kd(e,i.children),e.flags|=4096,e)}function qm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Fh(n.return,e,t)}function sh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Ig(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(kn(n,e,i.children,t),i=Bt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qm(n,t,e);else if(n.tag===19)qm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Lt(Bt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&sc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),sh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&sc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}sh(e,!0,t,null,s);break;case"together":sh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ur(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),cs|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(Me(153));if(e.child!==null){for(n=e.child,t=Or(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Or(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function i1(n,e,t){switch(e.tag){case 3:Lg(e),io();break;case 5:sg(e);break;case 1:Wn(e.type)&&Ql(e);break;case 4:bd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Lt(nc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Lt(Bt,Bt.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?kg(n,e,t):(Lt(Bt,Bt.current&1),n=ur(n,e,t),n!==null?n.sibling:null);Lt(Bt,Bt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return Ig(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Lt(Bt,Bt.current),i)break;return null;case 22:case 23:return e.lanes=0,Rg(n,e,t)}return ur(n,e,t)}var Dg,qh,Ng,zg;Dg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};qh=function(){};Ng=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,is(qi.current);var s=null;switch(t){case"input":r=fh(n,r),i=fh(n,i),s=[];break;case"select":r=Vt({},r,{value:void 0}),i=Vt({},i,{value:void 0}),s=[];break;case"textarea":r=gh(n,r),i=gh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Jl)}vh(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&kt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};zg=function(n,e,t,i){t!==i&&(e.flags|=4)};function Yo(n,e){if(!Dt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Mn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function r1(n,e,t){var i=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(e),null;case 1:return Wn(e.type)&&Kl(),Mn(e),null;case 3:return i=e.stateNode,so(),It(Vn),It(En),Td(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Cl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ci!==null&&(Qh(Ci),Ci=null))),qh(n,e),Mn(e),null;case 5:Ed(e);var r=is(wa.current);if(t=e.type,n!==null&&e.stateNode!=null)Ng(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Me(166));return Mn(e),null}if(n=is(qi.current),Cl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Wi]=e,i[xa]=s,n=(e.mode&1)!==0,t){case"dialog":kt("cancel",i),kt("close",i);break;case"iframe":case"object":case"embed":kt("load",i);break;case"video":case"audio":for(r=0;r<Qo.length;r++)kt(Qo[r],i);break;case"source":kt("error",i);break;case"img":case"image":case"link":kt("error",i),kt("load",i);break;case"details":kt("toggle",i);break;case"input":Qp(i,s),kt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},kt("invalid",i);break;case"textarea":tm(i,s),kt("invalid",i)}vh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Al(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Al(i.textContent,a,n),r=["children",""+a]):ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&kt("scroll",i)}switch(t){case"input":ml(i),em(i,s,!0);break;case"textarea":ml(i),nm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Jl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=u0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Wi]=e,n[xa]=i,Dg(n,e,!1,!1),e.stateNode=n;e:{switch(o=xh(t,i),t){case"dialog":kt("cancel",n),kt("close",n),r=i;break;case"iframe":case"object":case"embed":kt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Qo.length;r++)kt(Qo[r],n);r=i;break;case"source":kt("error",n),r=i;break;case"img":case"image":case"link":kt("error",n),kt("load",n),r=i;break;case"details":kt("toggle",n),r=i;break;case"input":Qp(n,i),r=fh(n,i),kt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Vt({},i,{value:void 0}),kt("invalid",n);break;case"textarea":tm(n,i),r=gh(n,i),kt("invalid",n);break;default:r=i}vh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?f0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&h0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ua(n,l):typeof l=="number"&&ua(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&kt("scroll",n):l!=null&&nd(n,s,l,o))}switch(t){case"input":ml(n),em(n,i,!1);break;case"textarea":ml(n),nm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ur(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?$s(n,!!i.multiple,s,!1):i.defaultValue!=null&&$s(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Jl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mn(e),null;case 6:if(n&&e.stateNode!=null)zg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Me(166));if(t=is(wa.current),is(qi.current),Cl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Wi]=e,(s=i.nodeValue!==t)&&(n=jn,n!==null))switch(n.tag){case 3:Al(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Al(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Wi]=e,e.stateNode=i}return Mn(e),null;case 13:if(It(Bt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Dt&&$n!==null&&(e.mode&1)!==0&&(e.flags&128)===0)eg(),io(),e.flags|=98560,s=!1;else if(s=Cl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Me(317));s[Wi]=e}else io(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Mn(e),s=!1}else Ci!==null&&(Qh(Ci),Ci=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(Bt.current&1)!==0?Kt===0&&(Kt=3):Od())),e.updateQueue!==null&&(e.flags|=4),Mn(e),null);case 4:return so(),qh(n,e),n===null&&ya(e.stateNode.containerInfo),Mn(e),null;case 10:return wd(e.type._context),Mn(e),null;case 17:return Wn(e.type)&&Kl(),Mn(e),null;case 19:if(It(Bt),s=e.memoizedState,s===null)return Mn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Yo(s,!1);else{if(Kt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=sc(n),o!==null){for(e.flags|=128,Yo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Lt(Bt,Bt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Xt()>ao&&(e.flags|=128,i=!0,Yo(s,!1),e.lanes=4194304)}else{if(!i)if(n=sc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Dt)return Mn(e),null}else 2*Xt()-s.renderingStartTime>ao&&t!==1073741824&&(e.flags|=128,i=!0,Yo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xt(),e.sibling=null,t=Bt.current,Lt(Bt,i?t&1|2:t&1),e):(Mn(e),null);case 22:case 23:return Fd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Zn&1073741824)!==0&&(Mn(e),e.subtreeFlags&6&&(e.flags|=8192)):Mn(e),null;case 24:return null;case 25:return null}throw Error(Me(156,e.tag))}function s1(n,e){switch(yd(e),e.tag){case 1:return Wn(e.type)&&Kl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return so(),It(Vn),It(En),Td(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Ed(e),null;case 13:if(It(Bt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Me(340));io()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return It(Bt),null;case 4:return so(),null;case 10:return wd(e.type._context),null;case 22:case 23:return Fd(),null;case 24:return null;default:return null}}var Ll=!1,bn=!1,o1=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ys(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Gt(n,e,i)}else t.current=null}function Xh(n,e,t){try{t()}catch(i){Gt(n,e,i)}}var Xm=!1;function a1(n,e){if(Rh=Zl,n=H0(),md(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=n,u=null;t:for(;;){for(var m;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)u=d,d=m;for(;;){if(d===n)break t;if(u===t&&++c===r&&(a=o),u===s&&++h===i&&(l=o),(m=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ph={focusedElem:n,selectionRange:t},Zl=!1,Oe=e;Oe!==null;)if(e=Oe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Oe=n;else for(;Oe!==null;){e=Oe;try{var x=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var f=x.memoizedProps,p=x.memoizedState,g=e.stateNode,y=g.getSnapshotBeforeUpdate(e.elementType===e.type?f:Ti(e.type,f),p);g.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Me(163))}}catch(_){Gt(e,e.return,_)}if(n=e.sibling,n!==null){n.return=e.return,Oe=n;break}Oe=e.return}return x=Xm,Xm=!1,x}function oa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xh(e,t,s)}r=r.next}while(r!==i)}}function wc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Yh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Fg(n){var e=n.alternate;e!==null&&(n.alternate=null,Fg(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Wi],delete e[xa],delete e[Ih],delete e[W_],delete e[G_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Og(n){return n.tag===5||n.tag===3||n.tag===4}function Ym(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Og(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Zh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Jl));else if(i!==4&&(n=n.child,n!==null))for(Zh(n,e,t),n=n.sibling;n!==null;)Zh(n,e,t),n=n.sibling}function $h(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for($h(n,e,t),n=n.sibling;n!==null;)$h(n,e,t),n=n.sibling}var dn=null,Ai=!1;function br(n,e,t){for(t=t.child;t!==null;)Ug(n,e,t),t=t.sibling}function Ug(n,e,t){if(Gi&&typeof Gi.onCommitFiberUnmount=="function")try{Gi.onCommitFiberUnmount(fc,t)}catch{}switch(t.tag){case 5:bn||Ys(t,e);case 6:var i=dn,r=Ai;dn=null,br(n,e,t),dn=i,Ai=r,dn!==null&&(Ai?(n=dn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):dn.removeChild(t.stateNode));break;case 18:dn!==null&&(Ai?(n=dn,t=t.stateNode,n.nodeType===8?Ku(n.parentNode,t):n.nodeType===1&&Ku(n,t),pa(n)):Ku(dn,t.stateNode));break;case 4:i=dn,r=Ai,dn=t.stateNode.containerInfo,Ai=!0,br(n,e,t),dn=i,Ai=r;break;case 0:case 11:case 14:case 15:if(!bn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Xh(t,e,o),r=r.next}while(r!==i)}br(n,e,t);break;case 1:if(!bn&&(Ys(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Gt(t,e,a)}br(n,e,t);break;case 21:br(n,e,t);break;case 22:t.mode&1?(bn=(i=bn)||t.memoizedState!==null,br(n,e,t),bn=i):br(n,e,t);break;default:br(n,e,t)}}function Zm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new o1),e.forEach(function(i){var r=g1.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ei(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:dn=a.stateNode,Ai=!1;break e;case 3:dn=a.stateNode.containerInfo,Ai=!0;break e;case 4:dn=a.stateNode.containerInfo,Ai=!0;break e}a=a.return}if(dn===null)throw Error(Me(160));Ug(s,o,r),dn=null,Ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Bg(e,n),e=e.sibling}function Bg(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ei(e,n),Hi(n),i&4){try{oa(3,n,n.return),wc(3,n)}catch(f){Gt(n,n.return,f)}try{oa(5,n,n.return)}catch(f){Gt(n,n.return,f)}}break;case 1:Ei(e,n),Hi(n),i&512&&t!==null&&Ys(t,t.return);break;case 5:if(Ei(e,n),Hi(n),i&512&&t!==null&&Ys(t,t.return),n.flags&32){var r=n.stateNode;try{ua(r,"")}catch(f){Gt(n,n.return,f)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&l0(r,s),xh(a,o);var c=xh(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?f0(r,d):h==="dangerouslySetInnerHTML"?h0(r,d):h==="children"?ua(r,d):nd(r,h,d,c)}switch(a){case"input":ph(r,s);break;case"textarea":c0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?$s(r,!!s.multiple,m,!1):u!==!!s.multiple&&(s.defaultValue!=null?$s(r,!!s.multiple,s.defaultValue,!0):$s(r,!!s.multiple,s.multiple?[]:"",!1))}r[xa]=s}catch(f){Gt(n,n.return,f)}}break;case 6:if(Ei(e,n),Hi(n),i&4){if(n.stateNode===null)throw Error(Me(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(f){Gt(n,n.return,f)}}break;case 3:if(Ei(e,n),Hi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(f){Gt(n,n.return,f)}break;case 4:Ei(e,n),Hi(n);break;case 13:Ei(e,n),Hi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nd=Xt())),i&4&&Zm(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(bn=(c=bn)||h,Ei(e,n),bn=c):Ei(e,n),Hi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!h&&(n.mode&1)!==0)for(Oe=n,h=n.child;h!==null;){for(d=Oe=h;Oe!==null;){switch(u=Oe,m=u.child,u.tag){case 0:case 11:case 14:case 15:oa(4,u,u.return);break;case 1:Ys(u,u.return);var x=u.stateNode;if(typeof x.componentWillUnmount=="function"){i=u,t=u.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(f){Gt(i,t,f)}}break;case 5:Ys(u,u.return);break;case 22:if(u.memoizedState!==null){jm(d);continue}}m!==null?(m.return=u,Oe=m):jm(d)}h=h.sibling}e:for(h=null,d=n;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=d0("display",o))}catch(f){Gt(n,n.return,f)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(f){Gt(n,n.return,f)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ei(e,n),Hi(n),i&4&&Zm(n);break;case 21:break;default:Ei(e,n),Hi(n)}}function Hi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Og(t)){var i=t;break e}t=t.return}throw Error(Me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ua(r,""),i.flags&=-33);var s=Ym(n);$h(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ym(n);Zh(n,a,o);break;default:throw Error(Me(161))}}catch(l){Gt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function l1(n,e,t){Oe=n,Hg(n,e,t)}function Hg(n,e,t){for(var i=(n.mode&1)!==0;Oe!==null;){var r=Oe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ll;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||bn;a=Ll;var c=bn;if(Ll=o,(bn=l)&&!c)for(Oe=r;Oe!==null;)o=Oe,l=o.child,o.tag===22&&o.memoizedState!==null?Jm(r):l!==null?(l.return=o,Oe=l):Jm(r);for(;s!==null;)Oe=s,Hg(s,e,t),s=s.sibling;Oe=r,Ll=a,bn=c}$m(n,e,t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,Oe=s):$m(n,e,t)}}function $m(n){for(;Oe!==null;){var e=Oe;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:bn||wc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!bn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Ti(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Im(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Im(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&pa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Me(163))}bn||e.flags&512&&Yh(e)}catch(u){Gt(e,e.return,u)}}if(e===n){Oe=null;break}if(t=e.sibling,t!==null){t.return=e.return,Oe=t;break}Oe=e.return}}function jm(n){for(;Oe!==null;){var e=Oe;if(e===n){Oe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Oe=t;break}Oe=e.return}}function Jm(n){for(;Oe!==null;){var e=Oe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{wc(4,e)}catch(l){Gt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Gt(e,r,l)}}var s=e.return;try{Yh(e)}catch(l){Gt(e,s,l)}break;case 5:var o=e.return;try{Yh(e)}catch(l){Gt(e,o,l)}}}catch(l){Gt(e,e.return,l)}if(e===n){Oe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Oe=a;break}Oe=e.return}}var c1=Math.ceil,lc=hr.ReactCurrentDispatcher,Id=hr.ReactCurrentOwner,yi=hr.ReactCurrentBatchConfig,mt=0,an=null,$t=null,fn=0,Zn=0,Zs=Vr(0),Kt=0,Ea=null,cs=0,Sc=0,Dd=0,aa=null,Bn=null,Nd=0,ao=1/0,nr=null,cc=!1,jh=null,zr=null,kl=!1,Pr=null,uc=0,la=0,Jh=null,Bl=-1,Hl=0;function In(){return(mt&6)!==0?Xt():Bl!==-1?Bl:Bl=Xt()}function Fr(n){return(n.mode&1)===0?1:(mt&2)!==0&&fn!==0?fn&-fn:X_.transition!==null?(Hl===0&&(Hl=E0()),Hl):(n=_t,n!==0||(n=window.event,n=n===void 0?16:k0(n.type)),n)}function Pi(n,e,t,i){if(50<la)throw la=0,Jh=null,Error(Me(185));Ta(n,t,i),((mt&2)===0||n!==an)&&(n===an&&((mt&2)===0&&(Sc|=t),Kt===4&&Cr(n,fn)),Gn(n,i),t===1&&mt===0&&(e.mode&1)===0&&(ao=Xt()+500,vc&&Wr()))}function Gn(n,e){var t=n.callbackNode;Zx(n,e);var i=Yl(n,n===an?fn:0);if(i===0)t!==null&&sm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&sm(t),e===1)n.tag===0?q_(Km.bind(null,n)):J0(Km.bind(null,n)),H_(function(){(mt&6)===0&&Wr()}),t=null;else{switch(T0(i)){case 1:t=ad;break;case 4:t=M0;break;case 16:t=Xl;break;case 536870912:t=b0;break;default:t=Xl}t=$g(t,Vg.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Vg(n,e){if(Bl=-1,Hl=0,(mt&6)!==0)throw Error(Me(327));var t=n.callbackNode;if(eo()&&n.callbackNode!==t)return null;var i=Yl(n,n===an?fn:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=hc(n,i);else{e=i;var r=mt;mt|=2;var s=Gg();(an!==n||fn!==e)&&(nr=null,ao=Xt()+500,rs(n,e));do try{d1();break}catch(a){Wg(n,a)}while(!0);_d(),lc.current=s,mt=r,$t!==null?e=0:(an=null,fn=0,e=Kt)}if(e!==0){if(e===2&&(r=bh(n),r!==0&&(i=r,e=Kh(n,r))),e===1)throw t=Ea,rs(n,0),Cr(n,i),Gn(n,Xt()),t;if(e===6)Cr(n,i);else{if(r=n.current.alternate,(i&30)===0&&!u1(r)&&(e=hc(n,i),e===2&&(s=bh(n),s!==0&&(i=s,e=Kh(n,s))),e===1))throw t=Ea,rs(n,0),Cr(n,i),Gn(n,Xt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Me(345));case 2:es(n,Bn,nr);break;case 3:if(Cr(n,i),(i&130023424)===i&&(e=Nd+500-Xt(),10<e)){if(Yl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){In(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=kh(es.bind(null,n,Bn,nr),e);break}es(n,Bn,nr);break;case 4:if(Cr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*c1(i/1960))-i,10<i){n.timeoutHandle=kh(es.bind(null,n,Bn,nr),i);break}es(n,Bn,nr);break;case 5:es(n,Bn,nr);break;default:throw Error(Me(329))}}}return Gn(n,Xt()),n.callbackNode===t?Vg.bind(null,n):null}function Kh(n,e){var t=aa;return n.current.memoizedState.isDehydrated&&(rs(n,e).flags|=256),n=hc(n,e),n!==2&&(e=Bn,Bn=t,e!==null&&Qh(e)),n}function Qh(n){Bn===null?Bn=n:Bn.push.apply(Bn,n)}function u1(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Li(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cr(n,e){for(e&=~Dd,e&=~Sc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Ri(e),i=1<<t;n[t]=-1,e&=~i}}function Km(n){if((mt&6)!==0)throw Error(Me(327));eo();var e=Yl(n,0);if((e&1)===0)return Gn(n,Xt()),null;var t=hc(n,e);if(n.tag!==0&&t===2){var i=bh(n);i!==0&&(e=i,t=Kh(n,i))}if(t===1)throw t=Ea,rs(n,0),Cr(n,e),Gn(n,Xt()),t;if(t===6)throw Error(Me(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,es(n,Bn,nr),Gn(n,Xt()),null}function zd(n,e){var t=mt;mt|=1;try{return n(e)}finally{mt=t,mt===0&&(ao=Xt()+500,vc&&Wr())}}function us(n){Pr!==null&&Pr.tag===0&&(mt&6)===0&&eo();var e=mt;mt|=1;var t=yi.transition,i=_t;try{if(yi.transition=null,_t=1,n)return n()}finally{_t=i,yi.transition=t,mt=e,(mt&6)===0&&Wr()}}function Fd(){Zn=Zs.current,It(Zs)}function rs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,B_(t)),$t!==null)for(t=$t.return;t!==null;){var i=t;switch(yd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Kl();break;case 3:so(),It(Vn),It(En),Td();break;case 5:Ed(i);break;case 4:so();break;case 13:It(Bt);break;case 19:It(Bt);break;case 10:wd(i.type._context);break;case 22:case 23:Fd()}t=t.return}if(an=n,$t=n=Or(n.current,null),fn=Zn=e,Kt=0,Ea=null,Dd=Sc=cs=0,Bn=aa=null,ns!==null){for(e=0;e<ns.length;e++)if(t=ns[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ns=null}return n}function Wg(n,e){do{var t=$t;try{if(_d(),Fl.current=ac,oc){for(var i=Ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}oc=!1}if(ls=0,on=Jt=Ht=null,sa=!1,Sa=0,Id.current=null,t===null||t.return===null){Kt=1,Ea=e,$t=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=fn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if((h.mode&1)===0&&(d===0||d===11||d===15)){var u=h.alternate;u?(h.updateQueue=u.updateQueue,h.memoizedState=u.memoizedState,h.lanes=u.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Um(o);if(m!==null){m.flags&=-257,Bm(m,o,a,s,e),m.mode&1&&Om(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var f=new Set;f.add(l),e.updateQueue=f}else x.add(l);break e}else{if((e&1)===0){Om(s,c,e),Od();break e}l=Error(Me(426))}}else if(Dt&&a.mode&1){var p=Um(o);if(p!==null){(p.flags&65536)===0&&(p.flags|=256),Bm(p,o,a,s,e),vd(oo(l,a));break e}}s=l=oo(l,a),Kt!==4&&(Kt=2),aa===null?aa=[s]:aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Tg(s,l,e);km(s,g);break e;case 1:a=l;var y=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(zr===null||!zr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Ag(s,a,e);km(s,_);break e}}s=s.return}while(s!==null)}Xg(t)}catch(b){e=b,$t===t&&t!==null&&($t=t=t.return);continue}break}while(!0)}function Gg(){var n=lc.current;return lc.current=ac,n===null?ac:n}function Od(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),an===null||(cs&268435455)===0&&(Sc&268435455)===0||Cr(an,fn)}function hc(n,e){var t=mt;mt|=2;var i=Gg();(an!==n||fn!==e)&&(nr=null,rs(n,e));do try{h1();break}catch(r){Wg(n,r)}while(!0);if(_d(),mt=t,lc.current=i,$t!==null)throw Error(Me(261));return an=null,fn=0,Kt}function h1(){for(;$t!==null;)qg($t)}function d1(){for(;$t!==null&&!Ux();)qg($t)}function qg(n){var e=Zg(n.alternate,n,Zn);n.memoizedProps=n.pendingProps,e===null?Xg(n):$t=e,Id.current=null}function Xg(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=r1(t,e,Zn),t!==null){$t=t;return}}else{if(t=s1(t,e),t!==null){t.flags&=32767,$t=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Kt=6,$t=null;return}}if(e=e.sibling,e!==null){$t=e;return}$t=e=n}while(e!==null);Kt===0&&(Kt=5)}function es(n,e,t){var i=_t,r=yi.transition;try{yi.transition=null,_t=1,f1(n,e,t,i)}finally{yi.transition=r,_t=i}return null}function f1(n,e,t,i){do eo();while(Pr!==null);if((mt&6)!==0)throw Error(Me(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Me(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if($x(n,s),n===an&&($t=an=null,fn=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||kl||(kl=!0,$g(Xl,function(){return eo(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=yi.transition,yi.transition=null;var o=_t;_t=1;var a=mt;mt|=4,Id.current=null,a1(n,t),Bg(t,n),N_(Ph),Zl=!!Rh,Ph=Rh=null,n.current=t,l1(t,n,r),Bx(),mt=a,_t=o,yi.transition=s}else n.current=t;if(kl&&(kl=!1,Pr=n,uc=r),s=n.pendingLanes,s===0&&(zr=null),Wx(t.stateNode,i),Gn(n,Xt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(cc)throw cc=!1,n=jh,jh=null,n;return(uc&1)!==0&&n.tag!==0&&eo(),s=n.pendingLanes,(s&1)!==0?n===Jh?la++:(la=0,Jh=n):la=0,Wr(),null}function eo(){if(Pr!==null){var n=T0(uc),e=yi.transition,t=_t;try{if(yi.transition=null,_t=16>n?16:n,Pr===null)var i=!1;else{if(n=Pr,Pr=null,uc=0,(mt&6)!==0)throw Error(Me(331));var r=mt;for(mt|=4,Oe=n.current;Oe!==null;){var s=Oe,o=s.child;if((Oe.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Oe=c;Oe!==null;){var h=Oe;switch(h.tag){case 0:case 11:case 15:oa(8,h,s)}var d=h.child;if(d!==null)d.return=h,Oe=d;else for(;Oe!==null;){h=Oe;var u=h.sibling,m=h.return;if(Fg(h),h===c){Oe=null;break}if(u!==null){u.return=m,Oe=u;break}Oe=m}}}var x=s.alternate;if(x!==null){var f=x.child;if(f!==null){x.child=null;do{var p=f.sibling;f.sibling=null,f=p}while(f!==null)}}Oe=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,Oe=o;else e:for(;Oe!==null;){if(s=Oe,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,Oe=g;break e}Oe=s.return}}var y=n.current;for(Oe=y;Oe!==null;){o=Oe;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,Oe=v;else e:for(o=y;Oe!==null;){if(a=Oe,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:wc(9,a)}}catch(b){Gt(a,a.return,b)}if(a===o){Oe=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Oe=_;break e}Oe=a.return}}if(mt=r,Wr(),Gi&&typeof Gi.onPostCommitFiberRoot=="function")try{Gi.onPostCommitFiberRoot(fc,n)}catch{}i=!0}return i}finally{_t=t,yi.transition=e}}return!1}function Qm(n,e,t){e=oo(t,e),e=Tg(n,e,1),n=Nr(n,e,1),e=In(),n!==null&&(Ta(n,1,e),Gn(n,e))}function Gt(n,e,t){if(n.tag===3)Qm(n,n,t);else for(;e!==null;){if(e.tag===3){Qm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zr===null||!zr.has(i))){n=oo(t,n),n=Ag(e,n,1),e=Nr(e,n,1),n=In(),e!==null&&(Ta(e,1,n),Gn(e,n));break}}e=e.return}}function p1(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=In(),n.pingedLanes|=n.suspendedLanes&t,an===n&&(fn&t)===t&&(Kt===4||Kt===3&&(fn&130023424)===fn&&500>Xt()-Nd?rs(n,0):Dd|=t),Gn(n,e)}function Yg(n,e){e===0&&((n.mode&1)===0?e=1:(e=vl,vl<<=1,(vl&130023424)===0&&(vl=4194304)));var t=In();n=cr(n,e),n!==null&&(Ta(n,e,t),Gn(n,t))}function m1(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Yg(n,t)}function g1(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Me(314))}i!==null&&i.delete(e),Yg(n,t)}var Zg;Zg=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Vn.current)Hn=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Hn=!1,i1(n,e,t);Hn=(n.flags&131072)!==0}else Hn=!1,Dt&&(e.flags&1048576)!==0&&K0(e,tc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ul(n,e),n=e.pendingProps;var r=no(e,En.current);Qs(e,t),r=Cd(null,e,i,n,r,t);var s=Rd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wn(i)?(s=!0,Ql(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Md(e),r.updater=_c,e.stateNode=r,r._reactInternals=e,Uh(e,i,n,t),e=Vh(null,e,i,!0,s,t)):(e.tag=0,Dt&&s&&gd(e),kn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ul(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=v1(i),n=Ti(i,n),r){case 0:e=Hh(null,e,i,n,t);break e;case 1:e=Wm(null,e,i,n,t);break e;case 11:e=Hm(null,e,i,n,t);break e;case 14:e=Vm(null,e,i,Ti(i.type,n),t);break e}throw Error(Me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),Hh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),Wm(n,e,i,r,t);case 3:e:{if(Lg(e),n===null)throw Error(Me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,rg(n,e),rc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oo(Error(Me(423)),e),e=Gm(n,e,i,t,r);break e}else if(i!==r){r=oo(Error(Me(424)),e),e=Gm(n,e,i,t,r);break e}else for($n=Dr(e.stateNode.containerInfo.firstChild),jn=e,Dt=!0,Ci=null,t=ng(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(io(),i===r){e=ur(n,e,t);break e}kn(n,e,i,t)}e=e.child}return e;case 5:return sg(e),n===null&&zh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Lh(i,r)?o=null:s!==null&&Lh(i,s)&&(e.flags|=32),Pg(n,e),kn(n,e,o,t),e.child;case 6:return n===null&&zh(e),null;case 13:return kg(n,e,t);case 4:return bd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ro(e,null,i,t):kn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),Hm(n,e,i,r,t);case 7:return kn(n,e,e.pendingProps,t),e.child;case 8:return kn(n,e,e.pendingProps.children,t),e.child;case 12:return kn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Lt(nc,i._currentValue),i._currentValue=o,s!==null)if(Li(s.value,o)){if(s.children===r.children&&!Vn.current){e=ur(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=or(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Fh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Me(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Fh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,t),r=vi(r),i=i(r),e.flags|=1,kn(n,e,i,t),e.child;case 14:return i=e.type,r=Ti(i,e.pendingProps),r=Ti(i.type,r),Vm(n,e,i,r,t);case 15:return Cg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ti(i,r),Ul(n,e),e.tag=1,Wn(i)?(n=!0,Ql(e)):n=!1,Qs(e,t),Eg(e,i,r),Uh(e,i,r,t),Vh(null,e,i,!0,n,t);case 19:return Ig(n,e,t);case 22:return Rg(n,e,t)}throw Error(Me(156,e.tag))};function $g(n,e){return S0(n,e)}function y1(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,e,t,i){return new y1(n,e,t,i)}function Ud(n){return n=n.prototype,!(!n||!n.isReactComponent)}function v1(n){if(typeof n=="function")return Ud(n)?1:0;if(n!=null){if(n=n.$$typeof,n===rd)return 11;if(n===sd)return 14}return 2}function Or(n,e){var t=n.alternate;return t===null?(t=gi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Vl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Ud(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Os:return ss(t.children,r,s,e);case id:o=8,r|=8;break;case ch:return n=gi(12,t,e,r|2),n.elementType=ch,n.lanes=s,n;case uh:return n=gi(13,t,e,r),n.elementType=uh,n.lanes=s,n;case hh:return n=gi(19,t,e,r),n.elementType=hh,n.lanes=s,n;case s0:return Mc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case i0:o=10;break e;case r0:o=9;break e;case rd:o=11;break e;case sd:o=14;break e;case Er:o=16,i=null;break e}throw Error(Me(130,n==null?n:typeof n,""))}return e=gi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ss(n,e,t,i){return n=gi(7,n,i,e),n.lanes=t,n}function Mc(n,e,t,i){return n=gi(22,n,i,e),n.elementType=s0,n.lanes=t,n.stateNode={isHidden:!1},n}function oh(n,e,t){return n=gi(6,n,null,e),n.lanes=t,n}function ah(n,e,t){return e=gi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function x1(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bd(n,e,t,i,r,s,o,a,l){return n=new x1(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Md(s),n}function _1(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function jg(n){if(!n)return Br;n=n._reactInternals;e:{if(ds(n)!==n||n.tag!==1)throw Error(Me(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Me(171))}if(n.tag===1){var t=n.type;if(Wn(t))return j0(n,t,e)}return e}function Jg(n,e,t,i,r,s,o,a,l){return n=Bd(t,i,!0,n,r,s,o,a,l),n.context=jg(null),t=n.current,i=In(),r=Fr(t),s=or(i,r),s.callback=e??null,Nr(t,s,r),n.current.lanes=r,Ta(n,r,i),Gn(n,i),n}function bc(n,e,t,i){var r=e.current,s=In(),o=Fr(r);return t=jg(t),e.context===null?e.context=t:e.pendingContext=t,e=or(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Nr(r,e,o),n!==null&&(Pi(n,r,o,s),zl(n,r,o)),o}function dc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function e0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Hd(n,e){e0(n,e),(n=n.alternate)&&e0(n,e)}function w1(){return null}var Kg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vd(n){this._internalRoot=n}Ec.prototype.render=Vd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Me(409));bc(n,e,null,null)};Ec.prototype.unmount=Vd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;us(function(){bc(null,n,null,null)}),e[lr]=null}};function Ec(n){this._internalRoot=n}Ec.prototype.unstable_scheduleHydration=function(n){if(n){var e=R0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ar.length&&e!==0&&e<Ar[t].priority;t++);Ar.splice(t,0,n),t===0&&L0(n)}};function Wd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function t0(){}function S1(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=dc(o);s.call(c)}}var o=Jg(e,i,n,0,null,!1,!1,"",t0);return n._reactRootContainer=o,n[lr]=o.current,ya(n.nodeType===8?n.parentNode:n),us(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=dc(l);a.call(c)}}var l=Bd(n,0,!1,null,null,!1,!1,"",t0);return n._reactRootContainer=l,n[lr]=l.current,ya(n.nodeType===8?n.parentNode:n),us(function(){bc(e,l,t,i)}),l}function Ac(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=dc(o);a.call(l)}}bc(e,o,n,r)}else o=S1(t,e,n,r,i);return dc(o)}A0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ko(e.pendingLanes);t!==0&&(ld(e,t|1),Gn(e,Xt()),(mt&6)===0&&(ao=Xt()+500,Wr()))}break;case 13:us(function(){var i=cr(n,1);if(i!==null){var r=In();Pi(i,n,1,r)}}),Hd(n,1)}};cd=function(n){if(n.tag===13){var e=cr(n,134217728);if(e!==null){var t=In();Pi(e,n,134217728,t)}Hd(n,134217728)}};C0=function(n){if(n.tag===13){var e=Fr(n),t=cr(n,e);if(t!==null){var i=In();Pi(t,n,e,i)}Hd(n,e)}};R0=function(){return _t};P0=function(n,e){var t=_t;try{return _t=n,e()}finally{_t=t}};wh=function(n,e,t){switch(e){case"input":if(ph(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=yc(i);if(!r)throw Error(Me(90));a0(i),ph(i,r)}}}break;case"textarea":c0(n,t);break;case"select":e=t.value,e!=null&&$s(n,!!t.multiple,e,!1)}};g0=zd;y0=us;var M1={usingClientEntryPoint:!1,Events:[Ca,Vs,yc,p0,m0,zd]},Zo={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b1={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_0(n),n===null?null:n.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||w1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&($o=__REACT_DEVTOOLS_GLOBAL_HOOK__,!$o.isDisabled&&$o.supportsFiber))try{fc=$o.inject(b1),Gi=$o}catch{}var $o;Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M1;Qn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(e))throw Error(Me(200));return _1(n,e,null,t)};Qn.createRoot=function(n,e){if(!Wd(n))throw Error(Me(299));var t=!1,i="",r=Kg;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bd(n,1,!1,null,null,t,!1,i,r),n[lr]=e.current,ya(n.nodeType===8?n.parentNode:n),new Vd(e)};Qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Me(188)):(n=Object.keys(n).join(","),Error(Me(268,n)));return n=_0(e),n=n===null?null:n.stateNode,n};Qn.flushSync=function(n){return us(n)};Qn.hydrate=function(n,e,t){if(!Tc(e))throw Error(Me(200));return Ac(null,n,e,!0,t)};Qn.hydrateRoot=function(n,e,t){if(!Wd(n))throw Error(Me(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Kg;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Jg(e,null,n,1,t??null,r,!1,s,o),n[lr]=e.current,ya(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ec(e)};Qn.render=function(n,e,t){if(!Tc(e))throw Error(Me(200));return Ac(null,n,e,!1,t)};Qn.unmountComponentAtNode=function(n){if(!Tc(n))throw Error(Me(40));return n._reactRootContainer?(us(function(){Ac(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1};Qn.unstable_batchedUpdates=zd;Qn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Tc(t))throw Error(Me(200));if(n==null||n._reactInternals===void 0)throw Error(Me(38));return Ac(n,e,t,!1,i)};Qn.version="18.3.1-next-f1338f8080-20240426"});var ny=tr((LE,ty)=>{"use strict";function ey(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ey)}catch(n){console.error(n)}}ey(),ty.exports=Qg()});var ry=tr(Gd=>{"use strict";var iy=ny();Gd.createRoot=iy.createRoot,Gd.hydrateRoot=iy.hydrateRoot;var kE});var Zv=tr(Su=>{"use strict";var pE=ll(),mE=Symbol.for("react.element"),gE=Symbol.for("react.fragment"),yE=Object.prototype.hasOwnProperty,vE=pE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xE={key:!0,ref:!0,__self:!0,__source:!0};function Yv(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)yE.call(e,i)&&!xE.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:mE,type:n,key:s,ref:o,props:r,_owner:vE.current}}Su.Fragment=gE;Su.jsx=Yv;Su.jsxs=Yv});var nl=tr((FE,$v)=>{"use strict";$v.exports=Zv()});var Jv=Is(ry(),1);var An=Is(ll(),1);var E1=0,sy=1,T1=2;var Pv=1,pp=2,Ua=3,$r=0,oi=1,ri=2;var Zi=0,Ao=1,qn=2,oy=3,ay=4,A1=5,Eo=100,C1=101,R1=102,ly=103,cy=104,P1=200,L1=201,k1=202,I1=203,Lv=204,kv=205,D1=206,N1=207,z1=208,F1=209,O1=210,U1=0,B1=1,H1=2,Lf=3,V1=4,W1=5,G1=6,q1=7,Iv=0,X1=1,Y1=2,Fi=0,Z1=1,$1=2,j1=3,mp=4,J1=5,Dv=300,Po=301,Lo=302,kf=303,If=304,_u=306,ai=1e3,ii=1001,Df=1002,Fn=1003,uy=1004;var qd=1005;var On=1006,K1=1007;var Wa=1008;var Ss=1009,Q1=1010,ew=1011,Nv=1012,tw=1013,vs=1014,xs=1015,Ms=1016,nw=1017,iw=1018,Co=1020,rw=1021,Ni=1023,sw=1024,ow=1025,_s=1026,ko=1027,aw=1028,lw=1029,cw=1030,uw=1031,hw=1033,Xd=33776,Yd=33777,Zd=33778,$d=33779,hy=35840,dy=35841,fy=35842,py=35843,dw=36196,my=37492,gy=37496,yy=37808,vy=37809,xy=37810,_y=37811,wy=37812,Sy=37813,My=37814,by=37815,Ey=37816,Ty=37817,Ay=37818,Cy=37819,Ry=37820,Py=37821,jd=36492,fw=36283,Ly=36284,ky=36285,Iy=36286;var eu=2300,tu=2301,Jd=2302,Dy=2400,Ny=2401,zy=2402;var vr=3e3,St=3001,pw=3200,mw=3201,zv=0,gw=1;var Xi="srgb",Ga="srgb-linear";var Kd=7680;var yw=519,Fy=35044;var Oy="300 es",Nf=1035,jr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qd=Math.PI/180,Uy=180/Math.PI;function tl(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function Un(n,e,t){return Math.max(e,Math.min(t,n))}function vw(n,e){return(n%e+e)%e}function ef(n,e,t){return(1-t)*n+t*e}function By(n){return(n&n-1)===0&&n!==0}function zf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cc(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var rt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},si=class n{constructor(){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],m=i[5],x=i[8],f=r[0],p=r[3],g=r[6],y=r[1],v=r[4],_=r[7],b=r[2],C=r[5],D=r[8];return s[0]=o*f+a*y+l*b,s[3]=o*p+a*v+l*C,s[6]=o*g+a*_+l*D,s[1]=c*f+h*y+d*b,s[4]=c*p+h*v+d*C,s[7]=c*g+h*_+d*D,s[2]=u*f+m*y+x*b,s[5]=u*p+m*v+x*C,s[8]=u*g+m*_+x*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,m=c*s-o*l,x=t*d+i*u+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/x;return e[0]=d*f,e[1]=(r*c-h*i)*f,e[2]=(a*i-r*o)*f,e[3]=u*f,e[4]=(h*t-r*l)*f,e[5]=(r*s-a*t)*f,e[6]=m*f,e[7]=(i*l-c*t)*f,e[8]=(o*t-i*s)*f,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tf.makeScale(e,t)),this}rotate(e){return this.premultiply(tf.makeRotation(-e)),this}translate(e,t){return this.premultiply(tf.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tf=new si;function Fv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function nu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ws(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var nf={[Xi]:{[Ga]:ws},[Ga]:{[Xi]:Qc}},Nn={legacyMode:!0,get workingColorSpace(){return Ga},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(nf[e]&&nf[e][t]!==void 0){let i=nf[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={r:0,g:0,b:0},ki={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function rf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Pc(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}var ht=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Nn.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Nn.workingColorSpace){if(e=vw(e,1),t=Un(t,0,1),i=Un(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=rf(o,s,e+1/3),this.g=rf(o,s,e),this.b=rf(o,s,e-1/3)}return Nn.toWorkingColorSpace(this,r),this}setStyle(e,t=Xi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Nn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Nn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,h,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Nn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Nn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Xi){let i=Ov[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=Qc(e.r),this.g=Qc(e.g),this.b=Qc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xi){return Nn.fromWorkingColorSpace(Pc(this,Qt),e),Un(Qt.r*255,0,255)<<16^Un(Qt.g*255,0,255)<<8^Un(Qt.b*255,0,255)<<0}getHexString(e=Xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nn.workingColorSpace){Nn.fromWorkingColorSpace(Pc(this,Qt),t);let i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Nn.workingColorSpace){return Nn.fromWorkingColorSpace(Pc(this,Qt),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Xi){return Nn.fromWorkingColorSpace(Pc(this,Qt),e),e!==Xi?`color(${e} ${Qt.r} ${Qt.g} ${Qt.b})`:`rgb(${Qt.r*255|0},${Qt.g*255|0},${Qt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(ki),ki.h+=e,ki.s+=t,ki.l+=i,this.setHSL(ki.h,ki.s,ki.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Rc);let i=ef(ki.h,Rc.h,t),r=ef(ki.s,Rc.s,t),s=ef(ki.l,Rc.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};ht.NAMES=Ov;var uo,iu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{uo===void 0&&(uo=nu("canvas")),uo.width=e.width,uo.height=e.height;let i=uo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=uo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=nu("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ws(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ws(t[i]/255)*255):t[i]=ws(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ru=class{constructor(e=null){this.isSource=!0,this.uuid=tl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sf(r[o].image)):s.push(sf(r[o]))}else s=sf(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function sf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?iu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xw=0,wi=class n extends jr{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ii,r=ii,s=On,o=Wa,a=Ni,l=Ss,c=n.DEFAULT_ANISOTROPY,h=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=tl(),this.name="",this.source=new ru(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new si,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ai:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ai:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};wi.DEFAULT_IMAGE=null;wi.DEFAULT_MAPPING=Dv;wi.DEFAULT_ANISOTROPY=1;var zt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],x=l[9],f=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-f)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+f)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(m+1)/2,b=(g+1)/2,C=(h+u)/4,D=(d+f)/4,S=(x+p)/4;return v>_&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=D/i):_>b?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=C/r,s=S/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=D/s,r=S/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-x)*(p-x)+(d-f)*(d-f)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-x)/y,this.y=(d-f)/y,this.z=(u-h)/y,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},li=class extends jr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let r={width:e,height:t,depth:1};this.texture=new wi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:On,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ru(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},su=class extends wi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ff=class extends wi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Si=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3],u=s[o+0],m=s[o+1],x=s[o+2],f=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=x,e[t+3]=f;return}if(d!==f||l!==u||c!==m||h!==x){let p=1-a,g=l*u+c*m+h*x+d*f,y=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){let b=Math.sqrt(v),C=Math.atan2(b,g*y);p=Math.sin(p*C)/b,a=Math.sin(a*C)/b}let _=a*y;if(l=l*p+u*_,c=c*p+m*_,h=h*p+x*_,d=d*p+f*_,p===1-a){let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[o],u=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+h*d+l*m-c*u,e[t+1]=l*x+h*u+c*d-a*m,e[t+2]=c*x+h*m+a*u-l*d,e[t+3]=h*x-a*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),d=a(s/2),u=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d-u*m*x;break;case"YXZ":this._x=u*h*d+c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d+u*m*x;break;case"ZXY":this._x=u*h*d-c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d-u*m*x;break;case"ZYX":this._x=u*h*d-c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d+u*m*x;break;case"YZX":this._x=u*h*d+c*m*x,this._y=c*m*d+u*h*x,this._z=c*h*x-u*m*d,this._w=c*h*d-u*m*x;break;case"XZY":this._x=u*h*d-c*m*x,this._y=c*m*d-u*h*x,this._z=c*h*x+u*m*d,this._w=c*h*d+u*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hy.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hy.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,h=l*i+a*t-s*r,d=l*r+s*i-o*t,u=-s*t-o*i-a*r;return this.x=c*l+u*-s+h*-a-d*-o,this.y=h*l+u*-o+d*-s-c*-a,this.z=d*l+u*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return of.copy(this).projectOnVector(e),this.sub(of)}reflect(e){return this.sub(of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},of=new F,Hy=new Si,bs=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){let h=e[l],d=e[l+1],u=e[l+2];h<t&&(t=h),d<i&&(i=d),u<r&&(r=u),h>s&&(s=h),d>o&&(o=d),u>a&&(a=u)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){let h=e.getX(l),d=e.getY(l),u=e.getZ(l);h<t&&(t=h),d<i&&(i=d),u<r&&(r=u),h>s&&(s=h),d>o&&(o=d),u>a&&(a=u)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=fs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){let s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)fs.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(fs)}else i.boundingBox===null&&i.computeBoundingBox(),af.copy(i.boundingBox),af.applyMatrix4(e.matrixWorld),this.union(af);let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fs),fs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),Lc.subVectors(this.max,Pa),ho.subVectors(e.a,Pa),fo.subVectors(e.b,Pa),po.subVectors(e.c,Pa),Gr.subVectors(fo,ho),qr.subVectors(po,fo),ps.subVectors(ho,po);let t=[0,-Gr.z,Gr.y,0,-qr.z,qr.y,0,-ps.z,ps.y,Gr.z,0,-Gr.x,qr.z,0,-qr.x,ps.z,0,-ps.x,-Gr.y,Gr.x,0,-qr.y,qr.x,0,-ps.y,ps.x,0];return!lf(t,ho,fo,po,Lc)||(t=[1,0,0,0,1,0,0,0,1],!lf(t,ho,fo,po,Lc))?!1:(kc.crossVectors(Gr,qr),t=[kc.x,kc.y,kc.z],lf(t,ho,fo,po,Lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return fs.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(fs).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},dr=[new F,new F,new F,new F,new F,new F,new F,new F],fs=new F,af=new bs,ho=new F,fo=new F,po=new F,Gr=new F,qr=new F,ps=new F,Pa=new F,Lc=new F,kc=new F,ms=new F;function lf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ms.fromArray(n,s);let a=r.x*Math.abs(ms.x)+r.y*Math.abs(ms.y)+r.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),h=i.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var _w=new bs,La=new F,cf=new F,Es=class{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):_w.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;La.subVectors(e,this.center);let t=La.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(La,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(La.copy(e.center).add(cf)),this.expandByPoint(La.copy(e.center).sub(cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fr=new F,uf=new F,Ic=new F,Xr=new F,hf=new F,Dc=new F,df=new F,qa=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fr.copy(this.direction).multiplyScalar(t).add(this.origin),fr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){uf.copy(e).add(t).multiplyScalar(.5),Ic.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(uf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ic),a=Xr.dot(this.direction),l=-Xr.dot(Ic),c=Xr.lengthSq(),h=Math.abs(1-o*o),d,u,m,x;if(h>0)if(d=o*l-a,u=o*a-l,x=s*h,d>=0)if(u>=-x)if(u<=x){let f=1/h;d*=f,u*=f,m=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(Ic).multiplyScalar(u).add(uf),m}intersectSphere(e,t){fr.subVectors(e.center,this.origin);let i=fr.dot(this.direction),r=fr.dot(fr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,t,i,r,s){hf.subVectors(t,e),Dc.subVectors(i,e),df.crossVectors(hf,Dc);let o=this.direction.dot(df),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xr.subVectors(this.origin,e);let l=a*this.direction.dot(Dc.crossVectors(Xr,Dc));if(l<0)return null;let c=a*this.direction.dot(hf.cross(Xr));if(c<0||l+c>o)return null;let h=-a*Xr.dot(df);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class n{constructor(){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,c,h,d,u,m,x,f,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=m,g[7]=x,g[11]=f,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/mo.setFromMatrixColumn(e,0).length(),s=1/mo.setFromMatrixColumn(e,1).length(),o=1/mo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=o*h,m=o*d,x=a*h,f=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+x*c,t[5]=u-f*c,t[9]=-a*l,t[2]=f-u*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,m=l*d,x=c*h,f=c*d;t[0]=u+f*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-x,t[6]=f+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,m=l*d,x=c*h,f=c*d;t[0]=u-f*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*h,t[9]=f-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,m=o*d,x=a*h,f=a*d;t[0]=l*h,t[4]=x*c-m,t[8]=u*c+f,t[1]=l*d,t[5]=f*c+u,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,m=o*c,x=a*l,f=a*c;t[0]=l*h,t[4]=f-u*d,t[8]=x*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+x,t[10]=u-f*d}else if(e.order==="XZY"){let u=o*l,m=o*c,x=a*l,f=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+f,t[5]=o*h,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*h,t[10]=f*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ww,e,Sw)}lookAt(e,t,i){let r=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Yr.crossVectors(i,ti),Yr.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Yr.crossVectors(i,ti)),Yr.normalize(),Nc.crossVectors(ti,Yr),r[0]=Yr.x,r[4]=Nc.x,r[8]=ti.x,r[1]=Yr.y,r[5]=Nc.y,r[9]=ti.y,r[2]=Yr.z,r[6]=Nc.z,r[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],m=i[13],x=i[2],f=i[6],p=i[10],g=i[14],y=i[3],v=i[7],_=i[11],b=i[15],C=r[0],D=r[4],S=r[8],A=r[12],z=r[1],re=r[5],se=r[9],Z=r[13],G=r[2],de=r[6],ve=r[10],Ce=r[14],ge=r[3],Ae=r[7],Se=r[11],We=r[15];return s[0]=o*C+a*z+l*G+c*ge,s[4]=o*D+a*re+l*de+c*Ae,s[8]=o*S+a*se+l*ve+c*Se,s[12]=o*A+a*Z+l*Ce+c*We,s[1]=h*C+d*z+u*G+m*ge,s[5]=h*D+d*re+u*de+m*Ae,s[9]=h*S+d*se+u*ve+m*Se,s[13]=h*A+d*Z+u*Ce+m*We,s[2]=x*C+f*z+p*G+g*ge,s[6]=x*D+f*re+p*de+g*Ae,s[10]=x*S+f*se+p*ve+g*Se,s[14]=x*A+f*Z+p*Ce+g*We,s[3]=y*C+v*z+_*G+b*ge,s[7]=y*D+v*re+_*de+b*Ae,s[11]=y*S+v*se+_*ve+b*Se,s[15]=y*A+v*Z+_*Ce+b*We,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],x=e[3],f=e[7],p=e[11],g=e[15];return x*(+s*l*d-r*c*d-s*a*u+i*c*u+r*a*m-i*l*m)+f*(+t*l*m-t*c*u+s*o*u-r*o*m+r*c*h-s*l*h)+p*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*h-i*c*h)+g*(-r*a*h-t*l*d+t*a*u+r*o*d-i*o*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],x=e[12],f=e[13],p=e[14],g=e[15],y=d*p*c-f*u*c+f*l*m-a*p*m-d*l*g+a*u*g,v=x*u*c-h*p*c-x*l*m+o*p*m+h*l*g-o*u*g,_=h*f*c-x*d*c+x*a*m-o*f*m-h*a*g+o*d*g,b=x*d*l-h*f*l-x*a*u+o*f*u+h*a*p-o*d*p,C=t*y+i*v+r*_+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=y*D,e[1]=(f*u*s-d*p*s-f*r*m+i*p*m+d*r*g-i*u*g)*D,e[2]=(a*p*s-f*l*s+f*r*c-i*p*c-a*r*g+i*l*g)*D,e[3]=(d*l*s-a*u*s-d*r*c+i*u*c+a*r*m-i*l*m)*D,e[4]=v*D,e[5]=(h*p*s-x*u*s+x*r*m-t*p*m-h*r*g+t*u*g)*D,e[6]=(x*l*s-o*p*s-x*r*c+t*p*c+o*r*g-t*l*g)*D,e[7]=(o*u*s-h*l*s+h*r*c-t*u*c-o*r*m+t*l*m)*D,e[8]=_*D,e[9]=(x*d*s-h*f*s-x*i*m+t*f*m+h*i*g-t*d*g)*D,e[10]=(o*f*s-x*a*s+x*i*c-t*f*c-o*i*g+t*a*g)*D,e[11]=(h*a*s-o*d*s-h*i*c+t*d*c+o*i*m-t*a*m)*D,e[12]=b*D,e[13]=(h*f*r-x*d*r+x*i*u-t*f*u-h*i*p+t*d*p)*D,e[14]=(x*a*r-o*f*r-x*i*l+t*f*l+o*i*p-t*a*p)*D,e[15]=(o*d*r-h*a*r+h*i*l-t*d*l-o*i*u+t*a*u)*D,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,m=s*h,x=s*d,f=o*h,p=o*d,g=a*d,y=l*c,v=l*h,_=l*d,b=i.x,C=i.y,D=i.z;return r[0]=(1-(f+g))*b,r[1]=(m+_)*b,r[2]=(x-v)*b,r[3]=0,r[4]=(m-_)*C,r[5]=(1-(u+g))*C,r[6]=(p+y)*C,r[7]=0,r[8]=(x+v)*D,r[9]=(p-y)*D,r[10]=(1-(u+f))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=mo.set(r[0],r[1],r[2]).length(),o=mo.set(r[4],r[5],r[6]).length(),a=mo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ii.copy(this);let c=1/s,h=1/o,d=1/a;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=d,Ii.elements[9]*=d,Ii.elements[10]*=d,t.setFromRotationMatrix(Ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){let a=this.elements,l=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r),u=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){let a=this.elements,l=1/(t-e),c=1/(i-r),h=1/(o-s),d=(t+e)*l,u=(i+r)*c,m=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},mo=new F,Ii=new wt,ww=new F(0,0,0),Sw=new F(1,1,1),Yr=new F,Nc=new F,ti=new F,Vy=new wt,Wy=new Si,Ts=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vy,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wy.setFromEuler(this),this.setFromQuaternion(Wy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ts.DEFAULT_ORDER="XYZ";var ou=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mw=0,Gy=new F,go=new Si,pr=new wt,zc=new F,ka=new F,bw=new F,Ew=new Si,qy=new F(1,0,0),Xy=new F(0,1,0),Yy=new F(0,0,1),Tw={type:"added"},Zy={type:"removed"},gn=class n extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new Ts,i=new Si,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new si}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(qy,e)}rotateY(e){return this.rotateOnAxis(Xy,e)}rotateZ(e){return this.rotateOnAxis(Yy,e)}translateOnAxis(e,t){return Gy.copy(e).applyQuaternion(this.quaternion),this.position.add(Gy.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qy,e)}translateY(e){return this.translateOnAxis(Xy,e)}translateZ(e){return this.translateOnAxis(Yy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zc.copy(e):zc.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(ka,zc,this.up):pr.lookAt(zc,ka,this.up),this.quaternion.setFromRotationMatrix(pr),r&&(pr.extractRotation(r.matrixWorld),go.setFromRotationMatrix(pr),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zy)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Zy)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){let o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,bw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,Ew,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++){let s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++){let a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};gn.DEFAULT_UP=new F(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Di=new F,mr=new F,ff=new F,gr=new F,yo=new F,vo=new F,$y=new F,pf=new F,mf=new F,gf=new F,Ha=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Di.subVectors(e,t),r.cross(Di);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Di.subVectors(r,t),mr.subVectors(i,t),ff.subVectors(e,t);let o=Di.dot(Di),a=Di.dot(mr),l=Di.dot(ff),c=mr.dot(mr),h=mr.dot(ff),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);let u=1/d,m=(c*l-a*h)*u,x=(o*h-a*l)*u;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gr),gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,gr),l.set(0,0),l.addScaledVector(s,gr.x),l.addScaledVector(o,gr.y),l.addScaledVector(a,gr.z),l}static isFrontFacing(e,t,i,r){return Di.subVectors(i,t),mr.subVectors(e,t),Di.cross(mr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),mr.subVectors(this.a,this.b),Di.cross(mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return n.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;yo.subVectors(r,i),vo.subVectors(s,i),pf.subVectors(e,i);let l=yo.dot(pf),c=vo.dot(pf);if(l<=0&&c<=0)return t.copy(i);mf.subVectors(e,r);let h=yo.dot(mf),d=vo.dot(mf);if(h>=0&&d<=h)return t.copy(r);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(yo,o);gf.subVectors(e,s);let m=yo.dot(gf),x=vo.dot(gf);if(x>=0&&m<=x)return t.copy(s);let f=m*c-l*x;if(f<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(vo,a);let p=h*x-m*d;if(p<=0&&d-h>=0&&m-x>=0)return $y.subVectors(s,r),a=(d-h)/(d-h+(m-x)),t.copy(r).addScaledVector($y,a);let g=1/(p+f+u);return o=f*g,a=u*g,t.copy(i).addScaledVector(yo,o).addScaledVector(vo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Aw=0,xr=class extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=Ao,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lv,this.blendDst=kv,this.blendEquation=Eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Lf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kd,this.stencilZFail=Kd,this.stencilZPass=Kd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ao&&(i.blending=this.blending),this.side!==$r&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},cn=class extends xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jt=new F,Fc=new rt,Tt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Fy,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fc.fromBufferAttribute(this,t),Fc.applyMatrix3(e),this.setXY(t,Fc.x,Fc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cc(t,this.array)),t}setX(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cc(t,this.array)),t}setY(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cc(t,this.array)),t}setW(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array),r=ei(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array),r=ei(r,this.array),s=ei(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fy&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var au=class extends Tt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var lu=class extends Tt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var At=class extends Tt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Cw=0,_i=new wt,yf=new gn,xo=new F,ni=new bs,Ia=new bs,ln=new F,en=class n extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fv(e)?lu:au)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new si().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,i){return _i.makeTranslation(e,t,i),this.applyMatrix4(_i),this}scale(e,t,i){return _i.makeScale(e,t,i),this.applyMatrix4(_i),this}lookAt(e){return yf.lookAt(e),yf.updateMatrix(),this.applyMatrix4(yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ia.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(ni.min,Ia.min),ni.expandByPoint(ln),ln.addVectors(ni.max,Ia.max),ni.expandByPoint(ln)):(ni.expandByPoint(Ia.min),ni.expandByPoint(Ia.max))}ni.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ln));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ln.fromBufferAttribute(a,c),l&&(xo.fromBufferAttribute(e,c),ln.add(xo)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let z=0;z<a;z++)c[z]=new F,h[z]=new F;let d=new F,u=new F,m=new F,x=new rt,f=new rt,p=new rt,g=new F,y=new F;function v(z,re,se){d.fromArray(r,z*3),u.fromArray(r,re*3),m.fromArray(r,se*3),x.fromArray(o,z*2),f.fromArray(o,re*2),p.fromArray(o,se*2),u.sub(d),m.sub(d),f.sub(x),p.sub(x);let Z=1/(f.x*p.y-p.x*f.y);isFinite(Z)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(Z),y.copy(m).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(Z),c[z].add(g),c[re].add(g),c[se].add(g),h[z].add(y),h[re].add(y),h[se].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let z=0,re=_.length;z<re;++z){let se=_[z],Z=se.start,G=se.count;for(let de=Z,ve=Z+G;de<ve;de+=3)v(i[de+0],i[de+1],i[de+2])}let b=new F,C=new F,D=new F,S=new F;function A(z){D.fromArray(s,z*3),S.copy(D);let re=c[z];b.copy(re),b.sub(D.multiplyScalar(D.dot(re))).normalize(),C.crossVectors(S,re);let Z=C.dot(h[z])<0?-1:1;l[z*4]=b.x,l[z*4+1]=b.y,l[z*4+2]=b.z,l[z*4+3]=Z}for(let z=0,re=_.length;z<re;++z){let se=_[z],Z=se.start,G=se.count;for(let de=Z,ve=Z+G;de<ve;de+=3)A(i[de+0]),A(i[de+1]),A(i[de+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);let r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let u=0,m=e.count;u<m;u+=3){let x=e.getX(u+0),f=e.getX(u+1),p=e.getX(u+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,f),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,f),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),m=0,x=0;for(let f=0,p=l.length;f<p;f++){a.isInterleavedBufferAttribute?m=l[f]*a.data.stride+a.offset:m=l[f]*h;for(let g=0;g<h;g++)u[x++]=c[m++]}return new Tt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=e(u,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},jy=new wt,_o=new qa,vf=new Es,Da=new F,Na=new F,za=new F,xf=new F,Oc=new F,Uc=new rt,Bc=new rt,Hc=new rt,_f=new F,Vc=new F,De=class extends gn{constructor(e=new en,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Oc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(xf.fromBufferAttribute(d,e),o?Oc.addScaledVector(xf,h):Oc.addScaledVector(xf.sub(t),h))}t.add(Oc)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),vf.copy(i.boundingSphere),vf.applyMatrix4(s),e.ray.intersectsSphere(vf)===!1)||(jy.copy(s).invert(),_o.copy(e.ray).applyMatrix4(jy),i.boundingBox!==null&&_o.intersectsBox(i.boundingBox)===!1))return;let o,a=i.index,l=i.attributes.position,c=i.attributes.uv,h=i.attributes.uv2,d=i.groups,u=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){let f=d[m],p=r[f.materialIndex],g=Math.max(f.start,u.start),y=Math.min(a.count,Math.min(f.start+f.count,u.start+u.count));for(let v=g,_=y;v<_;v+=3){let b=a.getX(v),C=a.getX(v+1),D=a.getX(v+2);o=Wc(this,p,e,_o,c,h,b,C,D),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{let m=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let f=m,p=x;f<p;f+=3){let g=a.getX(f),y=a.getX(f+1),v=a.getX(f+2);o=Wc(this,r,e,_o,c,h,g,y,v),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){let f=d[m],p=r[f.materialIndex],g=Math.max(f.start,u.start),y=Math.min(l.count,Math.min(f.start+f.count,u.start+u.count));for(let v=g,_=y;v<_;v+=3){let b=v,C=v+1,D=v+2;o=Wc(this,p,e,_o,c,h,b,C,D),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{let m=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let f=m,p=x;f<p;f+=3){let g=f,y=f+1,v=f+2;o=Wc(this,r,e,_o,c,h,g,y,v),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}}};function Rw(n,e,t,i,r,s,o,a){let l;if(e.side===oi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===$r,a),l===null)return null;Vc.copy(a),Vc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Vc);return c<t.near||c>t.far?null:{distance:c,point:Vc.clone(),object:n}}function Wc(n,e,t,i,r,s,o,a,l){n.getVertexPosition(o,Da),n.getVertexPosition(a,Na),n.getVertexPosition(l,za);let c=Rw(n,e,t,i,Da,Na,za,_f);if(c){r&&(Uc.fromBufferAttribute(r,o),Bc.fromBufferAttribute(r,a),Hc.fromBufferAttribute(r,l),c.uv=Ha.getUV(_f,Da,Na,za,Uc,Bc,Hc,new rt)),s&&(Uc.fromBufferAttribute(s,o),Bc.fromBufferAttribute(s,a),Hc.fromBufferAttribute(s,l),c.uv2=Ha.getUV(_f,Da,Na,za,Uc,Bc,Hc,new rt));let h={a:o,b:a,c:l,normal:new F,materialIndex:0};Ha.getNormal(Da,Na,za,h.normal),c.face=h}return c}var yt=class n extends en{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(d,2));function x(f,p,g,y,v,_,b,C,D,S,A){let z=_/D,re=b/S,se=_/2,Z=b/2,G=C/2,de=D+1,ve=S+1,Ce=0,ge=0,Ae=new F;for(let Se=0;Se<ve;Se++){let We=Se*re-Z;for(let $=0;$<de;$++){let le=$*z-se;Ae[f]=le*y,Ae[p]=We*v,Ae[g]=G,c.push(Ae.x,Ae.y,Ae.z),Ae[f]=0,Ae[p]=0,Ae[g]=C>0?1:-1,h.push(Ae.x,Ae.y,Ae.z),d.push($/D),d.push(1-Se/S),Ce+=1}}for(let Se=0;Se<S;Se++)for(let We=0;We<D;We++){let $=u+We+de*Se,le=u+We+de*(Se+1),fe=u+(We+1)+de*(Se+1),we=u+(We+1)+de*Se;l.push($,le,we),l.push(le,fe,we),ge+=6}a.addGroup(m,ge,A),m+=ge,u+=Ce}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Io(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zn(n){let e={};for(let t=0;t<n.length;t++){let i=Io(n[t]);for(let r in i)e[r]=i[r]}return e}function Pw(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uv(n){return n.getRenderTarget()===null&&n.outputEncoding===St?Xi:Ga}var Lw={clone:Io,merge:zn},kw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kw,this.fragmentShader=Iw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=Pw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},cu=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mn=class extends cu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Uy*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uy*2*Math.atan(Math.tan(Qd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qd*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wo=-90,So=1,Of=class extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;let r=new mn(wo,So,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);let s=new mn(wo,So,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let o=new mn(wo,So,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);let a=new mn(wo,So,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);let l=new mn(wo,So,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);let c=new mn(wo,So,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[r,s,o,a,l,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=Fi,e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}},uu=class extends wi{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Po,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Uf=class extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new uu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yt(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:Io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:oi,blending:Zi});s.uniforms.tEquirect.value=t;let o=new De(r,s),a=t.minFilter;return t.minFilter===Wa&&(t.minFilter=On),new Of(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},wf=new F,Dw=new F,Nw=new si,yr=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=wf.subVectors(i,t).cross(Dw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let i=e.delta(wf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Nw.getNormalMatrix(e),r=this.coplanarPoint(wf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mo=new Es,Gc=new F,Xa=class{constructor(e=new yr,t=new yr,i=new yr,r=new yr,s=new yr,o=new yr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],d=i[7],u=i[8],m=i[9],x=i[10],f=i[11],p=i[12],g=i[13],y=i[14],v=i[15];return t[0].setComponents(a-r,d-l,f-u,v-p).normalize(),t[1].setComponents(a+r,d+l,f+u,v+p).normalize(),t[2].setComponents(a+s,d+c,f+m,v+g).normalize(),t[3].setComponents(a-s,d-c,f-m,v-g).normalize(),t[4].setComponents(a-o,d-h,f-x,v-y).normalize(),t[5].setComponents(a+o,d+h,f+x,v+y).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Mo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Mo)}intersectsSprite(e){return Mo.center.set(0,0,0),Mo.radius=.7071067811865476,Mo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mo)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Gc.x=r.normal.x>0?e.max.x:e.min.x,Gc.y=r.normal.y>0?e.max.y:e.min.y,Gc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function zw(n,e){let t=e.isWebGL2,i=new WeakMap;function r(c,h){let d=c.array,u=c.usage,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,d,u),c.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){let u=h.array,m=h.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,u):(t?n.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):n.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);d===void 0?i.set(c,r(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}var Yt=class n extends en{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,d=e/a,u=t/l,m=[],x=[],f=[],p=[];for(let g=0;g<h;g++){let y=g*u-o;for(let v=0;v<c;v++){let _=v*d-s;x.push(_,-y,0),f.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let v=y+c*g,_=y+c*(g+1),b=y+1+c*(g+1),C=y+1+c*g;m.push(v,_,C),m.push(_,b,C)}this.setIndex(m),this.setAttribute("position",new At(x,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(p,2))}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Fw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ow=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ww="vec3 transformed = vec3( position );",Gw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qw=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Xw=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Yw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,$w=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nS=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,iS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,rS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cS="gl_FragColor = linearToOutputTexel( gl_FragColor );",uS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,dS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fS=`#ifdef USE_ENVMAP
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
#endif`,pS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mS=`#ifdef USE_ENVMAP
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
#endif`,gS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_S=`#ifdef USE_GRADIENTMAP
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
}`,wS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,SS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ES=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,TS=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,AS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,kS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,IS=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,zS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,BS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ZS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$S=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,JS=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,nM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,iM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,rM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,sM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,lM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,_M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wM=`#ifdef USE_SKINNING
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
#endif`,SM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,AM=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,CM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,RM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,PM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,LM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,kM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,IM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,DM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,NM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zM=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,HM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,VM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,WM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,GM=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,YM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$M=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,KM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,eb=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ib=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,rb=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ob=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,lb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,ub=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,fb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,lt={alphamap_fragment:Fw,alphamap_pars_fragment:Ow,alphatest_fragment:Uw,alphatest_pars_fragment:Bw,aomap_fragment:Hw,aomap_pars_fragment:Vw,begin_vertex:Ww,beginnormal_vertex:Gw,bsdfs:qw,iridescence_fragment:Xw,bumpmap_pars_fragment:Yw,clipping_planes_fragment:Zw,clipping_planes_pars_fragment:$w,clipping_planes_pars_vertex:jw,clipping_planes_vertex:Jw,color_fragment:Kw,color_pars_fragment:Qw,color_pars_vertex:eS,color_vertex:tS,common:nS,cube_uv_reflection_fragment:iS,defaultnormal_vertex:rS,displacementmap_pars_vertex:sS,displacementmap_vertex:oS,emissivemap_fragment:aS,emissivemap_pars_fragment:lS,encodings_fragment:cS,encodings_pars_fragment:uS,envmap_fragment:hS,envmap_common_pars_fragment:dS,envmap_pars_fragment:fS,envmap_pars_vertex:pS,envmap_physical_pars_fragment:TS,envmap_vertex:mS,fog_vertex:gS,fog_pars_vertex:yS,fog_fragment:vS,fog_pars_fragment:xS,gradientmap_pars_fragment:_S,lightmap_fragment:wS,lightmap_pars_fragment:SS,lights_lambert_fragment:MS,lights_lambert_pars_fragment:bS,lights_pars_begin:ES,lights_toon_fragment:AS,lights_toon_pars_fragment:CS,lights_phong_fragment:RS,lights_phong_pars_fragment:PS,lights_physical_fragment:LS,lights_physical_pars_fragment:kS,lights_fragment_begin:IS,lights_fragment_maps:DS,lights_fragment_end:NS,logdepthbuf_fragment:zS,logdepthbuf_pars_fragment:FS,logdepthbuf_pars_vertex:OS,logdepthbuf_vertex:US,map_fragment:BS,map_pars_fragment:HS,map_particle_fragment:VS,map_particle_pars_fragment:WS,metalnessmap_fragment:GS,metalnessmap_pars_fragment:qS,morphcolor_vertex:XS,morphnormal_vertex:YS,morphtarget_pars_vertex:ZS,morphtarget_vertex:$S,normal_fragment_begin:jS,normal_fragment_maps:JS,normal_pars_fragment:KS,normal_pars_vertex:QS,normal_vertex:eM,normalmap_pars_fragment:tM,clearcoat_normal_fragment_begin:nM,clearcoat_normal_fragment_maps:iM,clearcoat_pars_fragment:rM,iridescence_pars_fragment:sM,output_fragment:oM,packing:aM,premultiplied_alpha_fragment:lM,project_vertex:cM,dithering_fragment:uM,dithering_pars_fragment:hM,roughnessmap_fragment:dM,roughnessmap_pars_fragment:fM,shadowmap_pars_fragment:pM,shadowmap_pars_vertex:mM,shadowmap_vertex:gM,shadowmask_pars_fragment:yM,skinbase_vertex:vM,skinning_pars_vertex:xM,skinning_vertex:_M,skinnormal_vertex:wM,specularmap_fragment:SM,specularmap_pars_fragment:MM,tonemapping_fragment:bM,tonemapping_pars_fragment:EM,transmission_fragment:TM,transmission_pars_fragment:AM,uv_pars_fragment:CM,uv_pars_vertex:RM,uv_vertex:PM,uv2_pars_fragment:LM,uv2_pars_vertex:kM,uv2_vertex:IM,worldpos_vertex:DM,background_vert:NM,background_frag:zM,backgroundCube_vert:FM,backgroundCube_frag:OM,cube_vert:UM,cube_frag:BM,depth_vert:HM,depth_frag:VM,distanceRGBA_vert:WM,distanceRGBA_frag:GM,equirect_vert:qM,equirect_frag:XM,linedashed_vert:YM,linedashed_frag:ZM,meshbasic_vert:$M,meshbasic_frag:jM,meshlambert_vert:JM,meshlambert_frag:KM,meshmatcap_vert:QM,meshmatcap_frag:eb,meshnormal_vert:tb,meshnormal_frag:nb,meshphong_vert:ib,meshphong_frag:rb,meshphysical_vert:sb,meshphysical_frag:ob,meshtoon_vert:ab,meshtoon_frag:lb,points_vert:cb,points_frag:ub,shadow_vert:hb,shadow_frag:db,sprite_vert:fb,sprite_frag:pb},Pe={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new si},uv2Transform:{value:new si},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new si}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new si}}},Yi={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new si},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Yi.physical={uniforms:zn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new rt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var qc={r:0,b:0,g:0};function mb(n,e,t,i,r,s,o){let a=new ht(0),l=s===!0?0:1,c,h,d=null,u=0,m=null;function x(p,g){let y=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));let _=n.xr,b=_.getSession&&_.getSession();b&&b.environmentBlendMode==="additive"&&(v=null),v===null?f(a,l):v&&v.isColor&&(f(v,1),y=!0),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_u)?(h===void 0&&(h=new De(new yt(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Io(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,D,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=v.encoding!==St,(d!==v||u!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new De(new Yt(2,2),new yn({name:"BackgroundMaterial",uniforms:Io(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.encoding!==St,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function f(p,g){p.getRGB(qc,Uv(n)),i.buffers.color.setClear(qc.r,qc.g,qc.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,f(a,l)},render:x}}function gb(n,e,t,i){let r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null),c=l,h=!1;function d(G,de,ve,Ce,ge){let Ae=!1;if(o){let Se=f(Ce,ve,de);c!==Se&&(c=Se,m(c.object)),Ae=g(G,Ce,ve,ge),Ae&&y(G,Ce,ve,ge)}else{let Se=de.wireframe===!0;(c.geometry!==Ce.id||c.program!==ve.id||c.wireframe!==Se)&&(c.geometry=Ce.id,c.program=ve.id,c.wireframe=Se,Ae=!0)}ge!==null&&t.update(ge,34963),(Ae||h)&&(h=!1,S(G,de,ve,Ce),ge!==null&&n.bindBuffer(34963,t.get(ge).buffer))}function u(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(G){return i.isWebGL2?n.bindVertexArray(G):s.bindVertexArrayOES(G)}function x(G){return i.isWebGL2?n.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function f(G,de,ve){let Ce=ve.wireframe===!0,ge=a[G.id];ge===void 0&&(ge={},a[G.id]=ge);let Ae=ge[de.id];Ae===void 0&&(Ae={},ge[de.id]=Ae);let Se=Ae[Ce];return Se===void 0&&(Se=p(u()),Ae[Ce]=Se),Se}function p(G){let de=[],ve=[],Ce=[];for(let ge=0;ge<r;ge++)de[ge]=0,ve[ge]=0,Ce[ge]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:de,enabledAttributes:ve,attributeDivisors:Ce,object:G,attributes:{},index:null}}function g(G,de,ve,Ce){let ge=c.attributes,Ae=de.attributes,Se=0,We=ve.getAttributes();for(let $ in We)if(We[$].location>=0){let fe=ge[$],we=Ae[$];if(we===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(we=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(we=G.instanceColor)),fe===void 0||fe.attribute!==we||we&&fe.data!==we.data)return!0;Se++}return c.attributesNum!==Se||c.index!==Ce}function y(G,de,ve,Ce){let ge={},Ae=de.attributes,Se=0,We=ve.getAttributes();for(let $ in We)if(We[$].location>=0){let fe=Ae[$];fe===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(fe=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(fe=G.instanceColor));let we={};we.attribute=fe,fe&&fe.data&&(we.data=fe.data),ge[$]=we,Se++}c.attributes=ge,c.attributesNum=Se,c.index=Ce}function v(){let G=c.newAttributes;for(let de=0,ve=G.length;de<ve;de++)G[de]=0}function _(G){b(G,0)}function b(G,de){let ve=c.newAttributes,Ce=c.enabledAttributes,ge=c.attributeDivisors;ve[G]=1,Ce[G]===0&&(n.enableVertexAttribArray(G),Ce[G]=1),ge[G]!==de&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,de),ge[G]=de)}function C(){let G=c.newAttributes,de=c.enabledAttributes;for(let ve=0,Ce=de.length;ve<Ce;ve++)de[ve]!==G[ve]&&(n.disableVertexAttribArray(ve),de[ve]=0)}function D(G,de,ve,Ce,ge,Ae){i.isWebGL2===!0&&(ve===5124||ve===5125)?n.vertexAttribIPointer(G,de,ve,ge,Ae):n.vertexAttribPointer(G,de,ve,Ce,ge,Ae)}function S(G,de,ve,Ce){if(i.isWebGL2===!1&&(G.isInstancedMesh||Ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let ge=Ce.attributes,Ae=ve.getAttributes(),Se=de.defaultAttributeValues;for(let We in Ae){let $=Ae[We];if($.location>=0){let le=ge[We];if(le===void 0&&(We==="instanceMatrix"&&G.instanceMatrix&&(le=G.instanceMatrix),We==="instanceColor"&&G.instanceColor&&(le=G.instanceColor)),le!==void 0){let fe=le.normalized,we=le.itemSize,K=t.get(le);if(K===void 0)continue;let et=K.buffer,Fe=K.type,Be=K.bytesPerElement;if(le.isInterleavedBufferAttribute){let Ne=le.data,vt=Ne.stride,Ge=le.offset;if(Ne.isInstancedInterleavedBuffer){for(let Je=0;Je<$.locationSize;Je++)b($.location+Je,Ne.meshPerAttribute);G.isInstancedMesh!==!0&&Ce._maxInstanceCount===void 0&&(Ce._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Je=0;Je<$.locationSize;Je++)_($.location+Je);n.bindBuffer(34962,et);for(let Je=0;Je<$.locationSize;Je++)D($.location+Je,we/$.locationSize,Fe,fe,vt*Be,(Ge+we/$.locationSize*Je)*Be)}else{if(le.isInstancedBufferAttribute){for(let Ne=0;Ne<$.locationSize;Ne++)b($.location+Ne,le.meshPerAttribute);G.isInstancedMesh!==!0&&Ce._maxInstanceCount===void 0&&(Ce._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ne=0;Ne<$.locationSize;Ne++)_($.location+Ne);n.bindBuffer(34962,et);for(let Ne=0;Ne<$.locationSize;Ne++)D($.location+Ne,we/$.locationSize,Fe,fe,we*Be,we/$.locationSize*Ne*Be)}}else if(Se!==void 0){let fe=Se[We];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv($.location,fe);break;case 3:n.vertexAttrib3fv($.location,fe);break;case 4:n.vertexAttrib4fv($.location,fe);break;default:n.vertexAttrib1fv($.location,fe)}}}}C()}function A(){se();for(let G in a){let de=a[G];for(let ve in de){let Ce=de[ve];for(let ge in Ce)x(Ce[ge].object),delete Ce[ge];delete de[ve]}delete a[G]}}function z(G){if(a[G.id]===void 0)return;let de=a[G.id];for(let ve in de){let Ce=de[ve];for(let ge in Ce)x(Ce[ge].object),delete Ce[ge];delete de[ve]}delete a[G.id]}function re(G){for(let de in a){let ve=a[de];if(ve[G.id]===void 0)continue;let Ce=ve[G.id];for(let ge in Ce)x(Ce[ge].object),delete Ce[ge];delete ve[G.id]}}function se(){Z(),h=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:se,resetDefaultState:Z,dispose:A,releaseStatesOfGeometry:z,releaseStatesOfProgram:re,initAttributes:v,enableAttribute:_,disableUnusedAttributes:C}}function yb(n,e,t,i){let r=i.isWebGL2,s;function o(c){s=c}function a(c,h){n.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,m;if(r)u=n,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,c,h,d),t.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function vb(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(D){if(D==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext,a=t.precision!==void 0?t.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),u=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),f=n.getParameter(34921),p=n.getParameter(36347),g=n.getParameter(36348),y=n.getParameter(36349),v=u>0,_=o||e.has("OES_texture_float"),b=v&&_,C=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:b,maxSamples:C}}function xb(n){let e=this,t=null,i=0,r=!1,s=!1,o=new yr,a=new si,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||i!==0||r;return r=u,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){let x=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!r||x===null||x.length===0||s&&!p)s?h(null):c();else{let y=s?0:i,v=y*4,_=g.clippingState||null;l.value=_,_=h(x,u,v,m);for(let b=0;b!==v;++b)_[b]=t[b];g.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,m,x){let f=d!==null?d.length:0,p=null;if(f!==0){if(p=l.value,x!==!0||p===null){let g=m+f*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,_=m;v!==f;++v,_+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,p}}function _b(n){let e=new WeakMap;function t(o,a){return a===kf?o.mapping=Po:a===If&&(o.mapping=Lo),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let a=o.mapping;if(a===kf||a===If)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Uf(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Do=class extends cu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},To=4,Jy=[.125,.215,.35,.446,.526,.582],ys=20,Sf=new Do,Ky=new ht,Mf=null,gs=(1+Math.sqrt(5))/2,bo=1/gs,Qy=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,gs,bo),new F(0,gs,-bo),new F(bo,0,gs),new F(-bo,0,gs),new F(gs,bo,0),new F(-gs,bo,0)],hu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Mf=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mf),e.scissorTest=!1,Xc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Po||e.mapping===Lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mf=this._renderer.getRenderTarget();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ms,format:Ni,encoding:vr,depthBuffer:!1},r=ev(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ev(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wb(s)),this._blurMaterial=Sb(s,e,t)}return r}_compileMaterial(e){let t=new De(this._lodPlanes[0],e);this._renderer.compile(t,Sf)}_sceneToCubeUV(e,t,i,r){let a=new mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ky),h.toneMapping=Fi,h.autoClear=!1;let m=new cn({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),x=new De(new yt,m),f=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,f=!0):(m.color.copy(Ky),f=!0);for(let g=0;g<6;g++){let y=g%3;y===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):y===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let v=this._cubeSize;Xc(r,y*v,g>2?v:0,v,v),h.setRenderTarget(r),f&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Po||e.mapping===Lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tv());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Xc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Sf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qy[(r-1)%Qy.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new De(this._lodPlanes[r],c),u=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ys-1),f=s/x,p=isFinite(s)?1+Math.floor(h*f):ys;p>ys&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ys}`);let g=[],y=0;for(let D=0;D<ys;++D){let S=D/f,A=Math.exp(-S*S/2);g.push(A),D===0?y+=A:D<p&&(y+=2*A)}for(let D=0;D<g.length;D++)g[D]=g[D]/y;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=x,u.mipInt.value=v-i;let _=this._sizeLods[r],b=3*_*(r>v-To?r-v+To:0),C=4*(this._cubeSize-_);Xc(t,b,C,3*_,2*_),l.setRenderTarget(t),l.render(d,Sf)}};function wb(n){let e=[],t=[],i=[],r=n,s=n-To+1+Jy.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-To?l=Jy[o-n+To-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,x=6,f=3,p=2,g=1,y=new Float32Array(f*x*m),v=new Float32Array(p*x*m),_=new Float32Array(g*x*m);for(let C=0;C<m;C++){let D=C%3*2/3-1,S=C>2?0:-1,A=[D,S,0,D+2/3,S,0,D+2/3,S+1,0,D,S,0,D+2/3,S+1,0,D,S+1,0];y.set(A,f*x*C),v.set(u,p*x*C);let z=[C,C,C,C,C,C];_.set(z,g*x*C)}let b=new en;b.setAttribute("position",new Tt(y,f)),b.setAttribute("uv",new Tt(v,p)),b.setAttribute("faceIndex",new Tt(_,g)),e.push(b),r>To&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ev(n,e,t){let i=new li(n,e,t);return i.texture.mapping=_u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Sb(n,e,t){let i=new Float32Array(ys),r=new F(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gp(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function tv(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gp(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function nv(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function gp(){return`

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
	`}function Mb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===kf||l===If,h=l===Po||l===Lo;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new hu(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new hu(n));let u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function bb(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Eb(n,e,t,i){let r={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete r[u.id];let m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let x in u)e.update(u[x],34962);let m=d.morphAttributes;for(let x in m){let f=m[x];for(let p=0,g=f.length;p<g;p++)e.update(f[p],34962)}}function c(d){let u=[],m=d.index,x=d.attributes.position,f=0;if(m!==null){let y=m.array;f=m.version;for(let v=0,_=y.length;v<_;v+=3){let b=y[v+0],C=y[v+1],D=y[v+2];u.push(b,C,C,D,D,b)}}else{let y=x.array;f=x.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let b=v+0,C=v+1,D=v+2;u.push(b,C,C,D,D,b)}}let p=new(Fv(u)?lu:au)(u,1);p.version=f;let g=s.get(d);g&&e.remove(g),s.set(d,p)}function h(d){let u=s.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Tb(n,e,t,i){let r=i.isWebGL2,s;function o(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,m){n.drawElements(s,m,a,u*l),t.update(m,s,1)}function d(u,m,x){if(x===0)return;let f,p;if(r)f=n,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,m,a,u*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function Ab(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Cb(n,e){return n[0]-e[0]}function Rb(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Pb(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d,u){let m=c.morphTargetInfluences;if(e.isWebGL2===!0){let x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=x!==void 0?x.length:0,p=s.get(h);if(p===void 0||p.count!==f){let de=function(){Z.dispose(),s.delete(h),h.removeEventListener("dispose",de)};p!==void 0&&p.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],A=0;v===!0&&(A=1),_===!0&&(A=2),b===!0&&(A=3);let z=h.attributes.position.count*A,re=1;z>e.maxTextureSize&&(re=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);let se=new Float32Array(z*re*4*f),Z=new su(se,z,re,f);Z.type=xs,Z.needsUpdate=!0;let G=A*4;for(let ve=0;ve<f;ve++){let Ce=C[ve],ge=D[ve],Ae=S[ve],Se=z*re*4*ve;for(let We=0;We<Ce.count;We++){let $=We*G;v===!0&&(o.fromBufferAttribute(Ce,We),se[Se+$+0]=o.x,se[Se+$+1]=o.y,se[Se+$+2]=o.z,se[Se+$+3]=0),_===!0&&(o.fromBufferAttribute(ge,We),se[Se+$+4]=o.x,se[Se+$+5]=o.y,se[Se+$+6]=o.z,se[Se+$+7]=0),b===!0&&(o.fromBufferAttribute(Ae,We),se[Se+$+8]=o.x,se[Se+$+9]=o.y,se[Se+$+10]=o.z,se[Se+$+11]=Ae.itemSize===4?o.w:1)}}p={count:f,texture:Z,size:new rt(z,re)},s.set(h,p),h.addEventListener("dispose",de)}let g=0;for(let v=0;v<m.length;v++)g+=m[v];let y=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(n,"morphTargetBaseInfluence",y),u.getUniforms().setValue(n,"morphTargetInfluences",m),u.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{let x=m===void 0?0:m.length,f=i[h.id];if(f===void 0||f.length!==x){f=[];for(let _=0;_<x;_++)f[_]=[_,0];i[h.id]=f}for(let _=0;_<x;_++){let b=f[_];b[0]=_,b[1]=m[_]}f.sort(Rb);for(let _=0;_<8;_++)_<x&&f[_][1]?(a[_][0]=f[_][0],a[_][1]=f[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Cb);let p=h.morphAttributes.position,g=h.morphAttributes.normal,y=0;for(let _=0;_<8;_++){let b=a[_],C=b[0],D=b[1];C!==Number.MAX_SAFE_INTEGER&&D?(p&&h.getAttribute("morphTarget"+_)!==p[C]&&h.setAttribute("morphTarget"+_,p[C]),g&&h.getAttribute("morphNormal"+_)!==g[C]&&h.setAttribute("morphNormal"+_,g[C]),r[_]=D,y+=D):(p&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),r[_]=0)}let v=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Lb(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Hv=new wi,Vv=new su,Wv=new Ff,Gv=new uu,iv=[],rv=[],sv=new Float32Array(16),ov=new Float32Array(9),av=new Float32Array(4);function zo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=iv[r];if(s===void 0&&(s=new Float32Array(r),iv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wu(n,e){let t=rv[e];t===void 0&&(t=new Int32Array(e),rv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ib(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function Db(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function Nb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function zb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;av.set(i),n.uniformMatrix2fv(this.addr,!1,av),nn(t,i)}}function Fb(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;ov.set(i),n.uniformMatrix3fv(this.addr,!1,ov),nn(t,i)}}function Ob(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;sv.set(i),n.uniformMatrix4fv(this.addr,!1,sv),nn(t,i)}}function Ub(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Bb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function Hb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function Vb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function Wb(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Gb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function qb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function Xb(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function Yb(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Hv,r)}function Zb(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wv,r)}function $b(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Gv,r)}function jb(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vv,r)}function Jb(n){switch(n){case 5126:return kb;case 35664:return Ib;case 35665:return Db;case 35666:return Nb;case 35674:return zb;case 35675:return Fb;case 35676:return Ob;case 5124:case 35670:return Ub;case 35667:case 35671:return Bb;case 35668:case 35672:return Hb;case 35669:case 35673:return Vb;case 5125:return Wb;case 36294:return Gb;case 36295:return qb;case 36296:return Xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return jb}}function Kb(n,e){n.uniform1fv(this.addr,e)}function Qb(n,e){let t=zo(e,this.size,2);n.uniform2fv(this.addr,t)}function e2(n,e){let t=zo(e,this.size,3);n.uniform3fv(this.addr,t)}function t2(n,e){let t=zo(e,this.size,4);n.uniform4fv(this.addr,t)}function n2(n,e){let t=zo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function i2(n,e){let t=zo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function r2(n,e){let t=zo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function s2(n,e){n.uniform1iv(this.addr,e)}function o2(n,e){n.uniform2iv(this.addr,e)}function a2(n,e){n.uniform3iv(this.addr,e)}function l2(n,e){n.uniform4iv(this.addr,e)}function c2(n,e){n.uniform1uiv(this.addr,e)}function u2(n,e){n.uniform2uiv(this.addr,e)}function h2(n,e){n.uniform3uiv(this.addr,e)}function d2(n,e){n.uniform4uiv(this.addr,e)}function f2(n,e,t){let i=this.cache,r=e.length,s=wu(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Hv,s[o])}function p2(n,e,t){let i=this.cache,r=e.length,s=wu(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wv,s[o])}function m2(n,e,t){let i=this.cache,r=e.length,s=wu(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Gv,s[o])}function g2(n,e,t){let i=this.cache,r=e.length,s=wu(t,r);tn(i,s)||(n.uniform1iv(this.addr,s),nn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vv,s[o])}function y2(n){switch(n){case 5126:return Kb;case 35664:return Qb;case 35665:return e2;case 35666:return t2;case 35674:return n2;case 35675:return i2;case 35676:return r2;case 5124:case 35670:return s2;case 35667:case 35671:return o2;case 35668:case 35672:return a2;case 35669:case 35673:return l2;case 5125:return c2;case 36294:return u2;case 36295:return h2;case 36296:return d2;case 35678:case 36198:case 36298:case 36306:case 35682:return f2;case 35679:case 36299:case 36307:return p2;case 35680:case 36300:case 36308:case 36293:return m2;case 36289:case 36303:case 36311:case 36292:return g2}}var Bf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Jb(t.type)}},Hf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=y2(t.type)}},Vf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},bf=/(\w+)(\])?(\[|\.)?/g;function lv(n,e){n.seq.push(e),n.map[e.id]=e}function v2(n,e,t){let i=n.name,r=i.length;for(bf.lastIndex=0;;){let s=bf.exec(i),o=bf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){lv(t,c===void 0?new Bf(a,n,e):new Hf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Vf(a),lv(t,d)),t=d}}}var Ro=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);v2(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function cv(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var x2=0;function _2(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function w2(n){switch(n){case vr:return["Linear","( value )"];case St:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function uv(n,e,t){let i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+_2(n.getShaderSource(e),o)}else return r}function S2(n,e){let t=w2(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function M2(n,e){let t;switch(e){case Z1:t="Linear";break;case $1:t="Reinhard";break;case j1:t="OptimizedCineon";break;case mp:t="ACESFilmic";break;case J1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function b2(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ba).join(`
`)}function E2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function T2(n,e){let t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ba(n){return n!==""}function hv(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var A2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wf(n){return n.replace(A2,C2)}function C2(n,e){let t=lt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wf(t)}var R2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fv(n){return n.replace(R2,P2)}function P2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pv(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===pp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ua&&(e="SHADOWMAP_TYPE_VSM"),e}function k2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Po:case Lo:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Lo:e="ENVMAP_MODE_REFRACTION";break}return e}function D2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Iv:e="ENVMAP_BLENDING_MULTIPLY";break;case X1:e="ENVMAP_BLENDING_MIX";break;case Y1:e="ENVMAP_BLENDING_ADD";break}return e}function N2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function z2(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=L2(t),c=k2(t),h=I2(t),d=D2(t),u=N2(t),m=t.isWebGL2?"":b2(t),x=E2(s),f=r.createProgram(),p,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[x].filter(Ba).join(`
`),p.length>0&&(p+=`
`),g=[m,x].filter(Ba).join(`
`),g.length>0&&(g+=`
`)):(p=[pv(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),g=[m,pv(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?lt.tonemapping_pars_fragment:"",t.toneMapping!==Fi?M2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.encodings_pars_fragment,S2("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),o=Wf(o),o=hv(o,t),o=dv(o,t),a=Wf(a),a=hv(a,t),a=dv(a,t),o=fv(o),a=fv(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Oy?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=y+p+o,_=y+g+a,b=cv(r,35633,v),C=cv(r,35632,_);if(r.attachShader(f,b),r.attachShader(f,C),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f),n.debug.checkShaderErrors){let A=r.getProgramInfoLog(f).trim(),z=r.getShaderInfoLog(b).trim(),re=r.getShaderInfoLog(C).trim(),se=!0,Z=!0;if(r.getProgramParameter(f,35714)===!1){se=!1;let G=uv(r,b,"vertex"),de=uv(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,35715)+`

Program Info Log: `+A+`
`+G+`
`+de)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(z===""||re==="")&&(Z=!1);Z&&(this.diagnostics={runnable:se,programLog:A,vertexShader:{log:z,prefix:p},fragmentShader:{log:re,prefix:g}})}r.deleteShader(b),r.deleteShader(C);let D;this.getUniforms=function(){return D===void 0&&(D=new Ro(r,f)),D};let S;return this.getAttributes=function(){return S===void 0&&(S=T2(r,f)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=x2++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=C,this}var F2=0,Gf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new qf(e),t.set(e,i)),i}},qf=class{constructor(e){this.id=F2++,this.code=e,this.usedTimes=0}};function O2(n,e,t,i,r,s,o){let a=new ou,l=new Gf,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,u=r.vertexTextures,m=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(S,A,z,re,se){let Z=re.fog,G=se.geometry,de=S.isMeshStandardMaterial?re.environment:null,ve=(S.isMeshStandardMaterial?t:e).get(S.envMap||de),Ce=ve&&ve.mapping===_u?ve.image.height:null,ge=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let Ae=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Se=Ae!==void 0?Ae.length:0,We=0;G.morphAttributes.position!==void 0&&(We=1),G.morphAttributes.normal!==void 0&&(We=2),G.morphAttributes.color!==void 0&&(We=3);let $,le,fe,we;if(ge){let vt=Yi[ge];$=vt.vertexShader,le=vt.fragmentShader}else $=S.vertexShader,le=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),we=l.getFragmentShaderID(S);let K=n.getRenderTarget(),et=S.alphaTest>0,Fe=S.clearcoat>0,Be=S.iridescence>0;return{isWebGL2:h,shaderID:ge,shaderName:S.type,vertexShader:$,fragmentShader:le,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:se.isInstancedMesh===!0,instancingColor:se.isInstancedMesh===!0&&se.instanceColor!==null,supportsVertexTextures:u,outputEncoding:K===null?n.outputEncoding:K.isXRRenderTarget===!0?K.texture.encoding:vr,map:!!S.map,matcap:!!S.matcap,envMap:!!ve,envMapMode:ve&&ve.mapping,envMapCubeUVHeight:Ce,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===gw,tangentSpaceNormalMap:S.normalMapType===zv,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===St,clearcoat:Fe,clearcoatMap:Fe&&!!S.clearcoatMap,clearcoatRoughnessMap:Fe&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:Fe&&!!S.clearcoatNormalMap,iridescence:Be,iridescenceMap:Be&&!!S.iridescenceMap,iridescenceThicknessMap:Be&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===Ao,alphaMap:!!S.alphaMap,alphaTest:et,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!G.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!Z,useFog:S.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:d,skinning:se.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:We,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:Fi,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ri,flipSided:S.side===oi,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let z in S.defines)A.push(z),A.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(g(A,S),y(A,S),A.push(n.outputEncoding)),A.push(S.customProgramCacheKey),A.join()}function g(S,A){S.push(A.precision),S.push(A.outputEncoding),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.combine),S.push(A.vertexUvs),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function y(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),S.push(a.mask)}function v(S){let A=x[S.type],z;if(A){let re=Yi[A];z=Lw.clone(re.uniforms)}else z=S.uniforms;return z}function _(S,A){let z;for(let re=0,se=c.length;re<se;re++){let Z=c[re];if(Z.cacheKey===A){z=Z,++z.usedTimes;break}}return z===void 0&&(z=new z2(n,A,S,s),c.push(z)),z}function b(S){if(--S.usedTimes===0){let A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:v,acquireProgram:_,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:D}}function U2(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function B2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gv(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,u,m,x,f,p){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:u,material:m,groupOrder:x,renderOrder:d.renderOrder,z:f,group:p},n[e]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=m,g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=f,g.group=p),e++,g}function a(d,u,m,x,f,p){let g=o(d,u,m,x,f,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(d,u,m,x,f,p){let g=o(d,u,m,x,f,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function c(d,u){t.length>1&&t.sort(d||B2),i.length>1&&i.sort(u||mv),r.length>1&&r.sort(u||mv)}function h(){for(let d=e,u=n.length;d<u;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function H2(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new gv,n.set(i,[o])):r>=s.length?(o=new gv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function V2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ht};break;case"SpotLight":t={position:new F,direction:new F,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function W2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var G2=0;function q2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function X2(n,e){let t=new V2,i=W2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new F);let s=new F,o=new wt,a=new wt;function l(h,d){let u=0,m=0,x=0;for(let re=0;re<9;re++)r.probe[re].set(0,0,0);let f=0,p=0,g=0,y=0,v=0,_=0,b=0,C=0,D=0,S=0;h.sort(q2);let A=d!==!0?Math.PI:1;for(let re=0,se=h.length;re<se;re++){let Z=h[re],G=Z.color,de=Z.intensity,ve=Z.distance,Ce=Z.shadow&&Z.shadow.map?Z.shadow.map.texture:null;if(Z.isAmbientLight)u+=G.r*de*A,m+=G.g*de*A,x+=G.b*de*A;else if(Z.isLightProbe)for(let ge=0;ge<9;ge++)r.probe[ge].addScaledVector(Z.sh.coefficients[ge],de);else if(Z.isDirectionalLight){let ge=t.get(Z);if(ge.color.copy(Z.color).multiplyScalar(Z.intensity*A),Z.castShadow){let Ae=Z.shadow,Se=i.get(Z);Se.shadowBias=Ae.bias,Se.shadowNormalBias=Ae.normalBias,Se.shadowRadius=Ae.radius,Se.shadowMapSize=Ae.mapSize,r.directionalShadow[f]=Se,r.directionalShadowMap[f]=Ce,r.directionalShadowMatrix[f]=Z.shadow.matrix,_++}r.directional[f]=ge,f++}else if(Z.isSpotLight){let ge=t.get(Z);ge.position.setFromMatrixPosition(Z.matrixWorld),ge.color.copy(G).multiplyScalar(de*A),ge.distance=ve,ge.coneCos=Math.cos(Z.angle),ge.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),ge.decay=Z.decay,r.spot[g]=ge;let Ae=Z.shadow;if(Z.map&&(r.spotLightMap[D]=Z.map,D++,Ae.updateMatrices(Z),Z.castShadow&&S++),r.spotLightMatrix[g]=Ae.matrix,Z.castShadow){let Se=i.get(Z);Se.shadowBias=Ae.bias,Se.shadowNormalBias=Ae.normalBias,Se.shadowRadius=Ae.radius,Se.shadowMapSize=Ae.mapSize,r.spotShadow[g]=Se,r.spotShadowMap[g]=Ce,C++}g++}else if(Z.isRectAreaLight){let ge=t.get(Z);ge.color.copy(G).multiplyScalar(de),ge.halfWidth.set(Z.width*.5,0,0),ge.halfHeight.set(0,Z.height*.5,0),r.rectArea[y]=ge,y++}else if(Z.isPointLight){let ge=t.get(Z);if(ge.color.copy(Z.color).multiplyScalar(Z.intensity*A),ge.distance=Z.distance,ge.decay=Z.decay,Z.castShadow){let Ae=Z.shadow,Se=i.get(Z);Se.shadowBias=Ae.bias,Se.shadowNormalBias=Ae.normalBias,Se.shadowRadius=Ae.radius,Se.shadowMapSize=Ae.mapSize,Se.shadowCameraNear=Ae.camera.near,Se.shadowCameraFar=Ae.camera.far,r.pointShadow[p]=Se,r.pointShadowMap[p]=Ce,r.pointShadowMatrix[p]=Z.shadow.matrix,b++}r.point[p]=ge,p++}else if(Z.isHemisphereLight){let ge=t.get(Z);ge.skyColor.copy(Z.color).multiplyScalar(de*A),ge.groundColor.copy(Z.groundColor).multiplyScalar(de*A),r.hemi[v]=ge,v++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=m,r.ambient[2]=x;let z=r.hash;(z.directionalLength!==f||z.pointLength!==p||z.spotLength!==g||z.rectAreaLength!==y||z.hemiLength!==v||z.numDirectionalShadows!==_||z.numPointShadows!==b||z.numSpotShadows!==C||z.numSpotMaps!==D)&&(r.directional.length=f,r.spot.length=g,r.rectArea.length=y,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+D-S,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=S,z.directionalLength=f,z.pointLength=p,z.spotLength=g,z.rectAreaLength=y,z.hemiLength=v,z.numDirectionalShadows=_,z.numPointShadows=b,z.numSpotShadows=C,z.numSpotMaps=D,r.version=G2++)}function c(h,d){let u=0,m=0,x=0,f=0,p=0,g=d.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){let _=h[y];if(_.isDirectionalLight){let b=r.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(_.isSpotLight){let b=r.spot[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),x++}else if(_.isRectAreaLight){let b=r.rectArea[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),a.identity(),o.copy(_.matrixWorld),o.premultiply(g),a.extractRotation(o),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),f++}else if(_.isPointLight){let b=r.point[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(g),m++}else if(_.isHemisphereLight){let b=r.hemi[p];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:r}}function yv(n,e){let t=new X2(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Y2(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),l;return a===void 0?(l=new yv(n,e),t.set(s,[l])):o>=a.length?(l=new yv(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}var Xf=class extends xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yf=class extends xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Z2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$2=`uniform sampler2D shadow_pass;
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
}`;function j2(n,e,t){let i=new Xa,r=new rt,s=new rt,o=new zt,a=new Xf({depthPacking:mw}),l=new Yf,c={},h=t.maxTextureSize,d={[$r]:oi,[oi]:$r,[ri]:ri},u=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Z2,fragmentShader:$2}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new en;x.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new De(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pv,this.render=function(_,b,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||_.length===0)return;let D=n.getRenderTarget(),S=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Zi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let re=0,se=_.length;re<se;re++){let Z=_[re],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let de=G.getFrameExtents();if(r.multiply(de),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/de.x),r.x=s.x*de.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/de.y),r.y=s.y*de.y,G.mapSize.y=s.y)),G.map===null){let Ce=this.type!==Ua?{minFilter:Fn,magFilter:Fn}:{};G.map=new li(r.x,r.y,Ce),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let ve=G.getViewportCount();for(let Ce=0;Ce<ve;Ce++){let ge=G.getViewport(Ce);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),z.viewport(o),G.updateMatrices(Z,Ce),i=G.getFrustum(),v(b,C,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Ua&&g(G,C),G.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(D,S,A)};function g(_,b){let C=e.update(f);u.defines.VSM_SAMPLES!==_.blurSamples&&(u.defines.VSM_SAMPLES=_.blurSamples,m.defines.VSM_SAMPLES=_.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new li(r.x,r.y)),u.uniforms.shadow_pass.value=_.map.texture,u.uniforms.resolution.value=_.mapSize,u.uniforms.radius.value=_.radius,n.setRenderTarget(_.mapPass),n.clear(),n.renderBufferDirect(b,null,C,u,f,null),m.uniforms.shadow_pass.value=_.mapPass.texture,m.uniforms.resolution.value=_.mapSize,m.uniforms.radius.value=_.radius,n.setRenderTarget(_.map),n.clear(),n.renderBufferDirect(b,null,C,m,f,null)}function y(_,b,C,D,S,A){let z=null,re=C.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(re!==void 0)z=re;else if(z=C.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let se=z.uuid,Z=b.uuid,G=c[se];G===void 0&&(G={},c[se]=G);let de=G[Z];de===void 0&&(de=z.clone(),G[Z]=de),z=de}return z.visible=b.visible,z.wireframe=b.wireframe,A===Ua?z.side=b.shadowSide!==null?b.shadowSide:b.side:z.side=b.shadowSide!==null?b.shadowSide:d[b.side],z.alphaMap=b.alphaMap,z.alphaTest=b.alphaTest,z.map=b.map,z.clipShadows=b.clipShadows,z.clippingPlanes=b.clippingPlanes,z.clipIntersection=b.clipIntersection,z.displacementMap=b.displacementMap,z.displacementScale=b.displacementScale,z.displacementBias=b.displacementBias,z.wireframeLinewidth=b.wireframeLinewidth,z.linewidth=b.linewidth,C.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(C.matrixWorld),z.nearDistance=D,z.farDistance=S),z}function v(_,b,C,D,S){if(_.visible===!1)return;if(_.layers.test(b.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&S===Ua)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,_.matrixWorld);let re=e.update(_),se=_.material;if(Array.isArray(se)){let Z=re.groups;for(let G=0,de=Z.length;G<de;G++){let ve=Z[G],Ce=se[ve.materialIndex];if(Ce&&Ce.visible){let ge=y(_,Ce,D,C.near,C.far,S);n.renderBufferDirect(C,null,re,ge,_,ve)}}}else if(se.visible){let Z=y(_,se,D,C.near,C.far,S);n.renderBufferDirect(C,null,re,Z,_,null)}}let z=_.children;for(let re=0,se=z.length;re<se;re++)v(z[re],b,C,D,S)}}function J2(n,e,t){let i=t.isWebGL2;function r(){let H=!1,te=new zt,be=null,ze=new zt(0,0,0,0);return{setMask:function(qe){be!==qe&&!H&&(n.colorMask(qe,qe,qe,qe),be=qe)},setLocked:function(qe){H=qe},setClear:function(qe,ft,Zt,bt,$i){$i===!0&&(qe*=bt,ft*=bt,Zt*=bt),te.set(qe,ft,Zt,bt),ze.equals(te)===!1&&(n.clearColor(qe,ft,Zt,bt),ze.copy(te))},reset:function(){H=!1,be=null,ze.set(-1,0,0,0)}}}function s(){let H=!1,te=null,be=null,ze=null;return{setTest:function(qe){qe?et(2929):Fe(2929)},setMask:function(qe){te!==qe&&!H&&(n.depthMask(qe),te=qe)},setFunc:function(qe){if(be!==qe){switch(qe){case U1:n.depthFunc(512);break;case B1:n.depthFunc(519);break;case H1:n.depthFunc(513);break;case Lf:n.depthFunc(515);break;case V1:n.depthFunc(514);break;case W1:n.depthFunc(518);break;case G1:n.depthFunc(516);break;case q1:n.depthFunc(517);break;default:n.depthFunc(515)}be=qe}},setLocked:function(qe){H=qe},setClear:function(qe){ze!==qe&&(n.clearDepth(qe),ze=qe)},reset:function(){H=!1,te=null,be=null,ze=null}}}function o(){let H=!1,te=null,be=null,ze=null,qe=null,ft=null,Zt=null,bt=null,$i=null;return{setTest:function(Et){H||(Et?et(2960):Fe(2960))},setMask:function(Et){te!==Et&&!H&&(n.stencilMask(Et),te=Et)},setFunc:function(Et,hi,Pn){(be!==Et||ze!==hi||qe!==Pn)&&(n.stencilFunc(Et,hi,Pn),be=Et,ze=hi,qe=Pn)},setOp:function(Et,hi,Pn){(ft!==Et||Zt!==hi||bt!==Pn)&&(n.stencilOp(Et,hi,Pn),ft=Et,Zt=hi,bt=Pn)},setLocked:function(Et){H=Et},setClear:function(Et){$i!==Et&&(n.clearStencil(Et),$i=Et)},reset:function(){H=!1,te=null,be=null,ze=null,qe=null,ft=null,Zt=null,bt=null,$i=null}}}let a=new r,l=new s,c=new o,h=new WeakMap,d=new WeakMap,u={},m={},x=new WeakMap,f=[],p=null,g=!1,y=null,v=null,_=null,b=null,C=null,D=null,S=null,A=!1,z=null,re=null,se=null,Z=null,G=null,de=n.getParameter(35661),ve=!1,Ce=0,ge=n.getParameter(7938);ge.indexOf("WebGL")!==-1?(Ce=parseFloat(/^WebGL (\d)/.exec(ge)[1]),ve=Ce>=1):ge.indexOf("OpenGL ES")!==-1&&(Ce=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),ve=Ce>=2);let Ae=null,Se={},We=n.getParameter(3088),$=n.getParameter(2978),le=new zt().fromArray(We),fe=new zt().fromArray($);function we(H,te,be){let ze=new Uint8Array(4),qe=n.createTexture();n.bindTexture(H,qe),n.texParameteri(H,10241,9728),n.texParameteri(H,10240,9728);for(let ft=0;ft<be;ft++)n.texImage2D(te+ft,0,6408,1,1,0,6408,5121,ze);return qe}let K={};K[3553]=we(3553,3553,1),K[34067]=we(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),et(2929),l.setFunc(Lf),Ft(!1),Cn(sy),et(2884),nt(Zi);function et(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function Fe(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function Be(H,te){return m[H]!==te?(n.bindFramebuffer(H,te),m[H]=te,i&&(H===36009&&(m[36160]=te),H===36160&&(m[36009]=te)),!0):!1}function Ne(H,te){let be=f,ze=!1;if(H)if(be=x.get(te),be===void 0&&(be=[],x.set(te,be)),H.isWebGLMultipleRenderTargets){let qe=H.texture;if(be.length!==qe.length||be[0]!==36064){for(let ft=0,Zt=qe.length;ft<Zt;ft++)be[ft]=36064+ft;be.length=qe.length,ze=!0}}else be[0]!==36064&&(be[0]=36064,ze=!0);else be[0]!==1029&&(be[0]=1029,ze=!0);ze&&(t.isWebGL2?n.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function vt(H){return p!==H?(n.useProgram(H),p=H,!0):!1}let Ge={[Eo]:32774,[C1]:32778,[R1]:32779};if(i)Ge[ly]=32775,Ge[cy]=32776;else{let H=e.get("EXT_blend_minmax");H!==null&&(Ge[ly]=H.MIN_EXT,Ge[cy]=H.MAX_EXT)}let Je={[P1]:0,[L1]:1,[k1]:768,[Lv]:770,[O1]:776,[z1]:774,[D1]:772,[I1]:769,[kv]:771,[F1]:775,[N1]:773};function nt(H,te,be,ze,qe,ft,Zt,bt){if(H===Zi){g===!0&&(Fe(3042),g=!1);return}if(g===!1&&(et(3042),g=!0),H!==A1){if(H!==y||bt!==A){if((v!==Eo||C!==Eo)&&(n.blendEquation(32774),v=Eo,C=Eo),bt)switch(H){case Ao:n.blendFuncSeparate(1,771,1,771);break;case qn:n.blendFunc(1,1);break;case oy:n.blendFuncSeparate(0,769,0,1);break;case ay:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ao:n.blendFuncSeparate(770,771,1,771);break;case qn:n.blendFunc(770,1);break;case oy:n.blendFuncSeparate(0,769,0,1);break;case ay:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}_=null,b=null,D=null,S=null,y=H,A=bt}return}qe=qe||te,ft=ft||be,Zt=Zt||ze,(te!==v||qe!==C)&&(n.blendEquationSeparate(Ge[te],Ge[qe]),v=te,C=qe),(be!==_||ze!==b||ft!==D||Zt!==S)&&(n.blendFuncSeparate(Je[be],Je[ze],Je[ft],Je[Zt]),_=be,b=ze,D=ft,S=Zt),y=H,A=!1}function rn(H,te){H.side===ri?Fe(2884):et(2884);let be=H.side===oi;te&&(be=!be),Ft(be),H.blending===Ao&&H.transparent===!1?nt(Zi):nt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);let ze=H.stencilWrite;c.setTest(ze),ze&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),gt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?et(32926):Fe(32926)}function Ft(H){z!==H&&(H?n.frontFace(2304):n.frontFace(2305),z=H)}function Cn(H){H!==E1?(et(2884),H!==re&&(H===sy?n.cullFace(1029):H===T1?n.cullFace(1028):n.cullFace(1032))):Fe(2884),re=H}function Mt(H){H!==se&&(ve&&n.lineWidth(H),se=H)}function gt(H,te,be){H?(et(32823),(Z!==te||G!==be)&&(n.polygonOffset(te,be),Z=te,G=be)):Fe(32823)}function ui(H){H?et(3089):Fe(3089)}function Rn(H){H===void 0&&(H=33984+de-1),Ae!==H&&(n.activeTexture(H),Ae=H)}function I(H,te,be){be===void 0&&(Ae===null?be=33984+de-1:be=Ae);let ze=Se[be];ze===void 0&&(ze={type:void 0,texture:void 0},Se[be]=ze),(ze.type!==H||ze.texture!==te)&&(Ae!==be&&(n.activeTexture(be),Ae=be),n.bindTexture(H,te||K[H]),ze.type=H,ze.texture=te)}function E(){let H=Se[Ae];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $e(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(H){le.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),le.copy(H))}function Xe(H){fe.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),fe.copy(H))}function dt(H,te){let be=d.get(te);be===void 0&&(be=new WeakMap,d.set(te,be));let ze=be.get(H);ze===void 0&&(ze=n.getUniformBlockIndex(te,H.name),be.set(H,ze))}function Ct(H,te){let ze=d.get(te).get(H);h.get(te)!==ze&&(n.uniformBlockBinding(te,ze,H.__bindingPointIndex),h.set(te,ze))}function Ot(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Ae=null,Se={},m={},x=new WeakMap,f=[],p=null,g=!1,y=null,v=null,_=null,b=null,C=null,D=null,S=null,A=!1,z=null,re=null,se=null,Z=null,G=null,le.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:et,disable:Fe,bindFramebuffer:Be,drawBuffers:Ne,useProgram:vt,setBlending:nt,setMaterial:rn,setFlipSided:Ft,setCullFace:Cn,setLineWidth:Mt,setPolygonOffset:gt,setScissorTest:ui,activeTexture:Rn,bindTexture:I,unbindTexture:E,compressedTexImage2D:O,compressedTexImage3D:Te,texImage2D:$e,texImage3D:Ve,updateUBOMapping:dt,uniformBlockBinding:Ct,texStorage2D:pe,texStorage3D:Le,texSubImage2D:Ee,texSubImage3D:ke,compressedTexSubImage2D:Qe,compressedTexSubImage3D:Ie,scissor:He,viewport:Xe,reset:Ot}}function K2(n,e,t,i,r,s,o){let a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,E){return g?new OffscreenCanvas(I,E):nu("canvas")}function v(I,E,O,Te){let Ee=1;if((I.width>Te||I.height>Te)&&(Ee=Te/Math.max(I.width,I.height)),Ee<1||E===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){let ke=E?zf:Math.floor,Qe=ke(Ee*I.width),Ie=ke(Ee*I.height);f===void 0&&(f=y(Qe,Ie));let pe=O?y(Qe,Ie):f;return pe.width=Qe,pe.height=Ie,pe.getContext("2d").drawImage(I,0,0,Qe,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+Qe+"x"+Ie+")."),pe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function _(I){return By(I.width)&&By(I.height)}function b(I){return a?!1:I.wrapS!==ii||I.wrapT!==ii||I.minFilter!==Fn&&I.minFilter!==On}function C(I,E){return I.generateMipmaps&&E&&I.minFilter!==Fn&&I.minFilter!==On}function D(I){n.generateMipmap(I)}function S(I,E,O,Te,Ee=!1){if(a===!1)return E;if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ke=E;return E===6403&&(O===5126&&(ke=33326),O===5131&&(ke=33325),O===5121&&(ke=33321)),E===33319&&(O===5126&&(ke=33328),O===5131&&(ke=33327),O===5121&&(ke=33323)),E===6408&&(O===5126&&(ke=34836),O===5131&&(ke=34842),O===5121&&(ke=Te===St&&Ee===!1?35907:32856),O===32819&&(ke=32854),O===32820&&(ke=32855)),(ke===33325||ke===33326||ke===33327||ke===33328||ke===34842||ke===34836)&&e.get("EXT_color_buffer_float"),ke}function A(I,E,O){return C(I,O)===!0||I.isFramebufferTexture&&I.minFilter!==Fn&&I.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function z(I){return I===Fn||I===uy||I===qd?9728:9729}function re(I){let E=I.target;E.removeEventListener("dispose",re),Z(E),E.isVideoTexture&&x.delete(E)}function se(I){let E=I.target;E.removeEventListener("dispose",se),de(E)}function Z(I){let E=i.get(I);if(E.__webglInit===void 0)return;let O=I.source,Te=p.get(O);if(Te){let Ee=Te[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&G(I),Object.keys(Te).length===0&&p.delete(O)}i.remove(I)}function G(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let O=I.source,Te=p.get(O);delete Te[E.__cacheKey],o.memory.textures--}function de(I){let E=I.texture,O=i.get(I),Te=i.get(E);if(Te.__webglTexture!==void 0&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++)n.deleteFramebuffer(O.__webglFramebuffer[Ee]),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[Ee]);else{if(n.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Ee=0;Ee<O.__webglColorRenderbuffer.length;Ee++)O.__webglColorRenderbuffer[Ee]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[Ee]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let Ee=0,ke=E.length;Ee<ke;Ee++){let Qe=i.get(E[Ee]);Qe.__webglTexture&&(n.deleteTexture(Qe.__webglTexture),o.memory.textures--),i.remove(E[Ee])}i.remove(E),i.remove(I)}let ve=0;function Ce(){ve=0}function ge(){let I=ve;return I>=l&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l),ve+=1,I}function Ae(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.encoding),E.join()}function Se(I,E){let O=i.get(I);if(I.isVideoTexture&&ui(I),I.isRenderTargetTexture===!1&&I.version>0&&O.__version!==I.version){let Te=I.image;if(Te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(O,I,E);return}}t.bindTexture(3553,O.__webglTexture,33984+E)}function We(I,E){let O=i.get(I);if(I.version>0&&O.__version!==I.version){Fe(O,I,E);return}t.bindTexture(35866,O.__webglTexture,33984+E)}function $(I,E){let O=i.get(I);if(I.version>0&&O.__version!==I.version){Fe(O,I,E);return}t.bindTexture(32879,O.__webglTexture,33984+E)}function le(I,E){let O=i.get(I);if(I.version>0&&O.__version!==I.version){Be(O,I,E);return}t.bindTexture(34067,O.__webglTexture,33984+E)}let fe={[ai]:10497,[ii]:33071,[Df]:33648},we={[Fn]:9728,[uy]:9984,[qd]:9986,[On]:9729,[K1]:9985,[Wa]:9987};function K(I,E,O){if(O?(n.texParameteri(I,10242,fe[E.wrapS]),n.texParameteri(I,10243,fe[E.wrapT]),(I===32879||I===35866)&&n.texParameteri(I,32882,fe[E.wrapR]),n.texParameteri(I,10240,we[E.magFilter]),n.texParameteri(I,10241,we[E.minFilter])):(n.texParameteri(I,10242,33071),n.texParameteri(I,10243,33071),(I===32879||I===35866)&&n.texParameteri(I,32882,33071),(E.wrapS!==ii||E.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(I,10240,z(E.magFilter)),n.texParameteri(I,10241,z(E.minFilter)),E.minFilter!==Fn&&E.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let Te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Fn||E.minFilter!==qd&&E.minFilter!==Wa||E.type===xs&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ms&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(I,Te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function et(I,E){let O=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",re));let Te=E.source,Ee=p.get(Te);Ee===void 0&&(Ee={},p.set(Te,Ee));let ke=Ae(E);if(ke!==I.__cacheKey){Ee[ke]===void 0&&(Ee[ke]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Ee[ke].usedTimes++;let Qe=Ee[I.__cacheKey];Qe!==void 0&&(Ee[I.__cacheKey].usedTimes--,Qe.usedTimes===0&&G(E)),I.__cacheKey=ke,I.__webglTexture=Ee[ke].texture}return O}function Fe(I,E,O){let Te=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Te=35866),E.isData3DTexture&&(Te=32879);let Ee=et(I,E),ke=E.source;t.bindTexture(Te,I.__webglTexture,33984+O);let Qe=i.get(ke);if(ke.version!==Qe.__version||Ee===!0){t.activeTexture(33984+O),n.pixelStorei(37440,E.flipY),n.pixelStorei(37441,E.premultiplyAlpha),n.pixelStorei(3317,E.unpackAlignment),n.pixelStorei(37443,0);let Ie=b(E)&&_(E.image)===!1,pe=v(E.image,Ie,!1,h);pe=Rn(E,pe);let Le=_(pe)||a,$e=s.convert(E.format,E.encoding),Ve=s.convert(E.type),He=S(E.internalFormat,$e,Ve,E.encoding,E.isVideoTexture);K(Te,E,Le);let Xe,dt=E.mipmaps,Ct=a&&E.isVideoTexture!==!0,Ot=Qe.__version===void 0||Ee===!0,H=A(E,pe,Le);if(E.isDepthTexture)He=6402,a?E.type===xs?He=36012:E.type===vs?He=33190:E.type===Co?He=35056:He=33189:E.type===xs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===_s&&He===6402&&E.type!==Nv&&E.type!==vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=vs,Ve=s.convert(E.type)),E.format===ko&&He===6402&&(He=34041,E.type!==Co&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Co,Ve=s.convert(E.type))),Ot&&(Ct?t.texStorage2D(3553,1,He,pe.width,pe.height):t.texImage2D(3553,0,He,pe.width,pe.height,0,$e,Ve,null));else if(E.isDataTexture)if(dt.length>0&&Le){Ct&&Ot&&t.texStorage2D(3553,H,He,dt[0].width,dt[0].height);for(let te=0,be=dt.length;te<be;te++)Xe=dt[te],Ct?t.texSubImage2D(3553,te,0,0,Xe.width,Xe.height,$e,Ve,Xe.data):t.texImage2D(3553,te,He,Xe.width,Xe.height,0,$e,Ve,Xe.data);E.generateMipmaps=!1}else Ct?(Ot&&t.texStorage2D(3553,H,He,pe.width,pe.height),t.texSubImage2D(3553,0,0,0,pe.width,pe.height,$e,Ve,pe.data)):t.texImage2D(3553,0,He,pe.width,pe.height,0,$e,Ve,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ct&&Ot&&t.texStorage3D(35866,H,He,dt[0].width,dt[0].height,pe.depth);for(let te=0,be=dt.length;te<be;te++)Xe=dt[te],E.format!==Ni?$e!==null?Ct?t.compressedTexSubImage3D(35866,te,0,0,0,Xe.width,Xe.height,pe.depth,$e,Xe.data,0,0):t.compressedTexImage3D(35866,te,He,Xe.width,Xe.height,pe.depth,0,Xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage3D(35866,te,0,0,0,Xe.width,Xe.height,pe.depth,$e,Ve,Xe.data):t.texImage3D(35866,te,He,Xe.width,Xe.height,pe.depth,0,$e,Ve,Xe.data)}else{Ct&&Ot&&t.texStorage2D(3553,H,He,dt[0].width,dt[0].height);for(let te=0,be=dt.length;te<be;te++)Xe=dt[te],E.format!==Ni?$e!==null?Ct?t.compressedTexSubImage2D(3553,te,0,0,Xe.width,Xe.height,$e,Xe.data):t.compressedTexImage2D(3553,te,He,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?t.texSubImage2D(3553,te,0,0,Xe.width,Xe.height,$e,Ve,Xe.data):t.texImage2D(3553,te,He,Xe.width,Xe.height,0,$e,Ve,Xe.data)}else if(E.isDataArrayTexture)Ct?(Ot&&t.texStorage3D(35866,H,He,pe.width,pe.height,pe.depth),t.texSubImage3D(35866,0,0,0,0,pe.width,pe.height,pe.depth,$e,Ve,pe.data)):t.texImage3D(35866,0,He,pe.width,pe.height,pe.depth,0,$e,Ve,pe.data);else if(E.isData3DTexture)Ct?(Ot&&t.texStorage3D(32879,H,He,pe.width,pe.height,pe.depth),t.texSubImage3D(32879,0,0,0,0,pe.width,pe.height,pe.depth,$e,Ve,pe.data)):t.texImage3D(32879,0,He,pe.width,pe.height,pe.depth,0,$e,Ve,pe.data);else if(E.isFramebufferTexture){if(Ot)if(Ct)t.texStorage2D(3553,H,He,pe.width,pe.height);else{let te=pe.width,be=pe.height;for(let ze=0;ze<H;ze++)t.texImage2D(3553,ze,He,te,be,0,$e,Ve,null),te>>=1,be>>=1}}else if(dt.length>0&&Le){Ct&&Ot&&t.texStorage2D(3553,H,He,dt[0].width,dt[0].height);for(let te=0,be=dt.length;te<be;te++)Xe=dt[te],Ct?t.texSubImage2D(3553,te,0,0,$e,Ve,Xe):t.texImage2D(3553,te,He,$e,Ve,Xe);E.generateMipmaps=!1}else Ct?(Ot&&t.texStorage2D(3553,H,He,pe.width,pe.height),t.texSubImage2D(3553,0,0,0,$e,Ve,pe)):t.texImage2D(3553,0,He,$e,Ve,pe);C(E,Le)&&D(Te),Qe.__version=ke.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Be(I,E,O){if(E.image.length!==6)return;let Te=et(I,E),Ee=E.source;t.bindTexture(34067,I.__webglTexture,33984+O);let ke=i.get(Ee);if(Ee.version!==ke.__version||Te===!0){t.activeTexture(33984+O),n.pixelStorei(37440,E.flipY),n.pixelStorei(37441,E.premultiplyAlpha),n.pixelStorei(3317,E.unpackAlignment),n.pixelStorei(37443,0);let Qe=E.isCompressedTexture||E.image[0].isCompressedTexture,Ie=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!Qe&&!Ie?pe[te]=v(E.image[te],!1,!0,c):pe[te]=Ie?E.image[te].image:E.image[te],pe[te]=Rn(E,pe[te]);let Le=pe[0],$e=_(Le)||a,Ve=s.convert(E.format,E.encoding),He=s.convert(E.type),Xe=S(E.internalFormat,Ve,He,E.encoding),dt=a&&E.isVideoTexture!==!0,Ct=ke.__version===void 0||Te===!0,Ot=A(E,Le,$e);K(34067,E,$e);let H;if(Qe){dt&&Ct&&t.texStorage2D(34067,Ot,Xe,Le.width,Le.height);for(let te=0;te<6;te++){H=pe[te].mipmaps;for(let be=0;be<H.length;be++){let ze=H[be];E.format!==Ni?Ve!==null?dt?t.compressedTexSubImage2D(34069+te,be,0,0,ze.width,ze.height,Ve,ze.data):t.compressedTexImage2D(34069+te,be,Xe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?t.texSubImage2D(34069+te,be,0,0,ze.width,ze.height,Ve,He,ze.data):t.texImage2D(34069+te,be,Xe,ze.width,ze.height,0,Ve,He,ze.data)}}}else{H=E.mipmaps,dt&&Ct&&(H.length>0&&Ot++,t.texStorage2D(34067,Ot,Xe,pe[0].width,pe[0].height));for(let te=0;te<6;te++)if(Ie){dt?t.texSubImage2D(34069+te,0,0,0,pe[te].width,pe[te].height,Ve,He,pe[te].data):t.texImage2D(34069+te,0,Xe,pe[te].width,pe[te].height,0,Ve,He,pe[te].data);for(let be=0;be<H.length;be++){let qe=H[be].image[te].image;dt?t.texSubImage2D(34069+te,be+1,0,0,qe.width,qe.height,Ve,He,qe.data):t.texImage2D(34069+te,be+1,Xe,qe.width,qe.height,0,Ve,He,qe.data)}}else{dt?t.texSubImage2D(34069+te,0,0,0,Ve,He,pe[te]):t.texImage2D(34069+te,0,Xe,Ve,He,pe[te]);for(let be=0;be<H.length;be++){let ze=H[be];dt?t.texSubImage2D(34069+te,be+1,0,0,Ve,He,ze.image[te]):t.texImage2D(34069+te,be+1,Xe,Ve,He,ze.image[te])}}}C(E,$e)&&D(34067),ke.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Ne(I,E,O,Te,Ee){let ke=s.convert(O.format,O.encoding),Qe=s.convert(O.type),Ie=S(O.internalFormat,ke,Qe,O.encoding);i.get(E).__hasExternalTextures||(Ee===32879||Ee===35866?t.texImage3D(Ee,0,Ie,E.width,E.height,E.depth,0,ke,Qe,null):t.texImage2D(Ee,0,Ie,E.width,E.height,0,ke,Qe,null)),t.bindFramebuffer(36160,I),gt(E)?u.framebufferTexture2DMultisampleEXT(36160,Te,Ee,i.get(O).__webglTexture,0,Mt(E)):(Ee===3553||Ee>=34069&&Ee<=34074)&&n.framebufferTexture2D(36160,Te,Ee,i.get(O).__webglTexture,0),t.bindFramebuffer(36160,null)}function vt(I,E,O){if(n.bindRenderbuffer(36161,I),E.depthBuffer&&!E.stencilBuffer){let Te=33189;if(O||gt(E)){let Ee=E.depthTexture;Ee&&Ee.isDepthTexture&&(Ee.type===xs?Te=36012:Ee.type===vs&&(Te=33190));let ke=Mt(E);gt(E)?u.renderbufferStorageMultisampleEXT(36161,ke,Te,E.width,E.height):n.renderbufferStorageMultisample(36161,ke,Te,E.width,E.height)}else n.renderbufferStorage(36161,Te,E.width,E.height);n.framebufferRenderbuffer(36160,36096,36161,I)}else if(E.depthBuffer&&E.stencilBuffer){let Te=Mt(E);O&&gt(E)===!1?n.renderbufferStorageMultisample(36161,Te,35056,E.width,E.height):gt(E)?u.renderbufferStorageMultisampleEXT(36161,Te,35056,E.width,E.height):n.renderbufferStorage(36161,34041,E.width,E.height),n.framebufferRenderbuffer(36160,33306,36161,I)}else{let Te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Ee=0;Ee<Te.length;Ee++){let ke=Te[Ee],Qe=s.convert(ke.format,ke.encoding),Ie=s.convert(ke.type),pe=S(ke.internalFormat,Qe,Ie,ke.encoding),Le=Mt(E);O&&gt(E)===!1?n.renderbufferStorageMultisample(36161,Le,pe,E.width,E.height):gt(E)?u.renderbufferStorageMultisampleEXT(36161,Le,pe,E.width,E.height):n.renderbufferStorage(36161,pe,E.width,E.height)}}n.bindRenderbuffer(36161,null)}function Ge(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Se(E.depthTexture,0);let Te=i.get(E.depthTexture).__webglTexture,Ee=Mt(E);if(E.depthTexture.format===_s)gt(E)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,Te,0,Ee):n.framebufferTexture2D(36160,36096,3553,Te,0);else if(E.depthTexture.format===ko)gt(E)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,Te,0,Ee):n.framebufferTexture2D(36160,33306,3553,Te,0);else throw new Error("Unknown depthTexture format")}function Je(I){let E=i.get(I),O=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ge(E.__webglFramebuffer,I)}else if(O){E.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)t.bindFramebuffer(36160,E.__webglFramebuffer[Te]),E.__webglDepthbuffer[Te]=n.createRenderbuffer(),vt(E.__webglDepthbuffer[Te],I,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),vt(E.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}function nt(I,E,O){let Te=i.get(I);E!==void 0&&Ne(Te.__webglFramebuffer,I,I.texture,36064,3553),O!==void 0&&Je(I)}function rn(I){let E=I.texture,O=i.get(I),Te=i.get(E);I.addEventListener("dispose",se),I.isWebGLMultipleRenderTargets!==!0&&(Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture()),Te.__version=E.version,o.memory.textures++);let Ee=I.isWebGLCubeRenderTarget===!0,ke=I.isWebGLMultipleRenderTargets===!0,Qe=_(I)||a;if(Ee){O.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)O.__webglFramebuffer[Ie]=n.createFramebuffer()}else{if(O.__webglFramebuffer=n.createFramebuffer(),ke)if(r.drawBuffers){let Ie=I.texture;for(let pe=0,Le=Ie.length;pe<Le;pe++){let $e=i.get(Ie[pe]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&I.samples>0&&gt(I)===!1){let Ie=ke?E:[E];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer);for(let pe=0;pe<Ie.length;pe++){let Le=Ie[pe];O.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(36161,O.__webglColorRenderbuffer[pe]);let $e=s.convert(Le.format,Le.encoding),Ve=s.convert(Le.type),He=S(Le.internalFormat,$e,Ve,Le.encoding,I.isXRRenderTarget===!0),Xe=Mt(I);n.renderbufferStorageMultisample(36161,Xe,He,I.width,I.height),n.framebufferRenderbuffer(36160,36064+pe,36161,O.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(36161,null),I.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),vt(O.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(36160,null)}}if(Ee){t.bindTexture(34067,Te.__webglTexture),K(34067,E,Qe);for(let Ie=0;Ie<6;Ie++)Ne(O.__webglFramebuffer[Ie],I,E,36064,34069+Ie);C(E,Qe)&&D(34067),t.unbindTexture()}else if(ke){let Ie=I.texture;for(let pe=0,Le=Ie.length;pe<Le;pe++){let $e=Ie[pe],Ve=i.get($e);t.bindTexture(3553,Ve.__webglTexture),K(3553,$e,Qe),Ne(O.__webglFramebuffer,I,$e,36064+pe,3553),C($e,Qe)&&D(3553)}t.unbindTexture()}else{let Ie=3553;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(a?Ie=I.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ie,Te.__webglTexture),K(Ie,E,Qe),Ne(O.__webglFramebuffer,I,E,36064,Ie),C(E,Qe)&&D(Ie),t.unbindTexture()}I.depthBuffer&&Je(I)}function Ft(I){let E=_(I)||a,O=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let Te=0,Ee=O.length;Te<Ee;Te++){let ke=O[Te];if(C(ke,E)){let Qe=I.isWebGLCubeRenderTarget?34067:3553,Ie=i.get(ke).__webglTexture;t.bindTexture(Qe,Ie),D(Qe),t.unbindTexture()}}}function Cn(I){if(a&&I.samples>0&&gt(I)===!1){let E=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],O=I.width,Te=I.height,Ee=16384,ke=[],Qe=I.stencilBuffer?33306:36096,Ie=i.get(I),pe=I.isWebGLMultipleRenderTargets===!0;if(pe)for(let Le=0;Le<E.length;Le++)t.bindFramebuffer(36160,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Le,36161,null),t.bindFramebuffer(36160,Ie.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Le,3553,null,0);t.bindFramebuffer(36008,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Ie.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){ke.push(36064+Le),I.depthBuffer&&ke.push(Qe);let $e=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if($e===!1&&(I.depthBuffer&&(Ee|=256),I.stencilBuffer&&(Ee|=1024)),pe&&n.framebufferRenderbuffer(36008,36064,36161,Ie.__webglColorRenderbuffer[Le]),$e===!0&&(n.invalidateFramebuffer(36008,[Qe]),n.invalidateFramebuffer(36009,[Qe])),pe){let Ve=i.get(E[Le]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ve,0)}n.blitFramebuffer(0,0,O,Te,0,0,O,Te,Ee,9728),m&&n.invalidateFramebuffer(36008,ke)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),pe)for(let Le=0;Le<E.length;Le++){t.bindFramebuffer(36160,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Le,36161,Ie.__webglColorRenderbuffer[Le]);let $e=i.get(E[Le]).__webglTexture;t.bindFramebuffer(36160,Ie.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Le,3553,$e,0)}t.bindFramebuffer(36009,Ie.__webglMultisampledFramebuffer)}}function Mt(I){return Math.min(d,I.samples)}function gt(I){let E=i.get(I);return a&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ui(I){let E=o.render.frame;x.get(I)!==E&&(x.set(I,E),I.update())}function Rn(I,E){let O=I.encoding,Te=I.format,Ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Nf||O!==vr&&(O===St?a===!1?e.has("EXT_sRGB")===!0&&Te===Ni?(I.format=Nf,I.minFilter=On,I.generateMipmaps=!1):E=iu.sRGBToLinear(E):(Te!==Ni||Ee!==Ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),E}this.allocateTextureUnit=ge,this.resetTextureUnits=Ce,this.setTexture2D=Se,this.setTexture2DArray=We,this.setTexture3D=$,this.setTextureCube=le,this.rebindTextures=nt,this.setupRenderTarget=rn,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=gt}function Q2(n,e,t){let i=t.isWebGL2;function r(s,o=null){let a;if(s===Ss)return 5121;if(s===nw)return 32819;if(s===iw)return 32820;if(s===Q1)return 5120;if(s===ew)return 5122;if(s===Nv)return 5123;if(s===tw)return 5124;if(s===vs)return 5125;if(s===xs)return 5126;if(s===Ms)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rw)return 6406;if(s===Ni)return 6408;if(s===sw)return 6409;if(s===ow)return 6410;if(s===_s)return 6402;if(s===ko)return 34041;if(s===Nf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===aw)return 6403;if(s===lw)return 36244;if(s===cw)return 33319;if(s===uw)return 33320;if(s===hw)return 36249;if(s===Xd||s===Yd||s===Zd||s===$d)if(o===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xd)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$d)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$d)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hy||s===dy||s===fy||s===py)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===hy)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dy)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fy)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===py)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dw)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===my||s===gy)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===my)return o===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===gy)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yy||s===vy||s===xy||s===_y||s===wy||s===Sy||s===My||s===by||s===Ey||s===Ty||s===Ay||s===Cy||s===Ry||s===Py)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===yy)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vy)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xy)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_y)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wy)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sy)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===My)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===by)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ey)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ty)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ay)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Cy)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ry)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Py)return o===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===jd)return o===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===fw||s===Ly||s===ky||s===Iy)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===jd)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ly)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ky)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Iy)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Co?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Zf=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},zi=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},eE={type:"move"},Va=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let f of e.hand.values()){let p=t.getJointPose(f,i),g=this._getHandJoint(c,f);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},$f=class extends wi{constructor(e,t,i,r,s,o,a,l,c,h){if(h=h!==void 0?h:_s,h!==_s&&h!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_s&&(i=vs),i===void 0&&h===ko&&(i=Co),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1}},jf=class extends jr{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,x=null,f=t.getContextAttributes(),p=null,g=null,y=[],v=[],_=new Set,b=new Map,C=new mn;C.layers.enable(1),C.viewport=new zt;let D=new mn;D.layers.enable(2),D.viewport=new zt;let S=[C,D],A=new Zf;A.layers.enable(1),A.layers.enable(2);let z=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let le=y[$];return le===void 0&&(le=new Va,y[$]=le),le.getTargetRaySpace()},this.getControllerGrip=function($){let le=y[$];return le===void 0&&(le=new Va,y[$]=le),le.getGripSpace()},this.getHand=function($){let le=y[$];return le===void 0&&(le=new Va,y[$]=le),le.getHandSpace()};function se($){let le=v.indexOf($.inputSource);if(le===-1)return;let fe=y[le];fe!==void 0&&fe.dispatchEvent({type:$.type,data:$.inputSource})}function Z(){r.removeEventListener("select",se),r.removeEventListener("selectstart",se),r.removeEventListener("selectend",se),r.removeEventListener("squeeze",se),r.removeEventListener("squeezestart",se),r.removeEventListener("squeezeend",se),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",G);for(let $=0;$<y.length;$++){let le=v[$];le!==null&&(v[$]=null,y[$].disconnect(le))}z=null,re=null,e.setRenderTarget(p),m=null,u=null,d=null,r=null,g=null,We.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",se),r.addEventListener("selectstart",se),r.addEventListener("selectend",se),r.addEventListener("squeeze",se),r.addEventListener("squeezestart",se),r.addEventListener("squeezeend",se),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",G),f.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let le={antialias:r.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),g=new li(m.framebufferWidth,m.framebufferHeight,{format:Ni,type:Ss,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let le=null,fe=null,we=null;f.depth&&(we=f.stencil?35056:33190,le=f.stencil?ko:_s,fe=f.stencil?Co:vs);let K={colorFormat:32856,depthFormat:we,scaleFactor:s};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(K),r.updateRenderState({layers:[u]}),g=new li(u.textureWidth,u.textureHeight,{format:Ni,type:Ss,depthTexture:new $f(u.textureWidth,u.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});let et=e.properties.get(g);et.__ignoreDepthValues=u.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function G($){for(let le=0;le<$.removed.length;le++){let fe=$.removed[le],we=v.indexOf(fe);we>=0&&(v[we]=null,y[we].disconnect(fe))}for(let le=0;le<$.added.length;le++){let fe=$.added[le],we=v.indexOf(fe);if(we===-1){for(let et=0;et<y.length;et++)if(et>=v.length){v.push(fe),we=et;break}else if(v[et]===null){v[et]=fe,we=et;break}if(we===-1)break}let K=y[we];K&&K.connect(fe)}}let de=new F,ve=new F;function Ce($,le,fe){de.setFromMatrixPosition(le.matrixWorld),ve.setFromMatrixPosition(fe.matrixWorld);let we=de.distanceTo(ve),K=le.projectionMatrix.elements,et=fe.projectionMatrix.elements,Fe=K[14]/(K[10]-1),Be=K[14]/(K[10]+1),Ne=(K[9]+1)/K[5],vt=(K[9]-1)/K[5],Ge=(K[8]-1)/K[0],Je=(et[8]+1)/et[0],nt=Fe*Ge,rn=Fe*Je,Ft=we/(-Ge+Je),Cn=Ft*-Ge;le.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Cn),$.translateZ(Ft),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();let Mt=Fe+Ft,gt=Be+Ft,ui=nt-Cn,Rn=rn+(we-Cn),I=Ne*Be/gt*Mt,E=vt*Be/gt*Mt;$.projectionMatrix.makePerspective(ui,Rn,I,E,Mt,gt)}function ge($,le){le===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(le.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;A.near=D.near=C.near=$.near,A.far=D.far=C.far=$.far,(z!==A.near||re!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,re=A.far);let le=$.parent,fe=A.cameras;ge(A,le);for(let K=0;K<fe.length;K++)ge(fe[K],le);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),$.matrix.copy(A.matrix),$.matrix.decompose($.position,$.quaternion,$.scale);let we=$.children;for(let K=0,et=we.length;K<et;K++)we[K].updateMatrixWorld(!0);fe.length===2?Ce(A,C,D):A.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.getPlanes=function(){return _};let Ae=null;function Se($,le){if(h=le.getViewerPose(c||o),x=le,h!==null){let fe=h.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let we=!1;fe.length!==A.cameras.length&&(A.cameras.length=0,we=!0);for(let K=0;K<fe.length;K++){let et=fe[K],Fe=null;if(m!==null)Fe=m.getViewport(et);else{let Ne=d.getViewSubImage(u,et);Fe=Ne.viewport,K===0&&(e.setRenderTargetTextures(g,Ne.colorTexture,u.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(g))}let Be=S[K];Be===void 0&&(Be=new mn,Be.layers.enable(K),Be.viewport=new zt,S[K]=Be),Be.matrix.fromArray(et.transform.matrix),Be.projectionMatrix.fromArray(et.projectionMatrix),Be.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),K===0&&A.matrix.copy(Be.matrix),we===!0&&A.cameras.push(Be)}}for(let fe=0;fe<y.length;fe++){let we=v[fe],K=y[fe];we!==null&&K!==void 0&&K.update(we,le,c||o)}if(Ae&&Ae($,le),le.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:le.detectedPlanes});let fe=null;for(let we of _)le.detectedPlanes.has(we)||(fe===null&&(fe=[]),fe.push(we));if(fe!==null)for(let we of fe)_.delete(we),b.delete(we),i.dispatchEvent({type:"planeremoved",data:we});for(let we of le.detectedPlanes)if(!_.has(we))_.add(we),b.set(we,le.lastChangedTime),i.dispatchEvent({type:"planeadded",data:we});else{let K=b.get(we);we.lastChangedTime>K&&(b.set(we,we.lastChangedTime),i.dispatchEvent({type:"planechanged",data:we}))}}x=null}let We=new Bv;We.setAnimationLoop(Se),this.setAnimationLoop=function($){Ae=$},this.dispose=function(){}}};function tE(n,e){function t(f,p){p.color.getRGB(f.fogColor.value,Uv(n)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,g,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),h(f,p)):p.isMeshPhongMaterial?(r(f,p),c(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&u(f,p,v)):p.isMeshMatcapMaterial?(r(f,p),m(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),x(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?a(f,p,g,y):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===oi&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===oi&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let g=e.get(p).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;let _=n.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*_}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uv2Transform.value.copy(v.matrix))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function a(f,p,g,y){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*g,f.scale.value=y*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),f.uvTransform.value.copy(g.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function u(f,p,g){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===oi&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function x(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function nE(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(35375):0;function l(y,v){let _=v.program;i.uniformBlockBinding(y,_)}function c(y,v){let _=r[y.id];_===void 0&&(x(y),_=h(y),r[y.id]=_,y.addEventListener("dispose",p));let b=v.program;i.updateUBOMapping(y,b);let C=e.render.frame;s[y.id]!==C&&(u(y),s[y.id]=C)}function h(y){let v=d();y.__bindingPointIndex=v;let _=n.createBuffer(),b=y.__size,C=y.usage;return n.bindBuffer(35345,_),n.bufferData(35345,b,C),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,_),_}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let v=r[y.id],_=y.uniforms,b=y.__cache;n.bindBuffer(35345,v);for(let C=0,D=_.length;C<D;C++){let S=_[C];if(m(S,C,b)===!0){let A=S.__offset,z=Array.isArray(S.value)?S.value:[S.value],re=0;for(let se=0;se<z.length;se++){let Z=z[se],G=f(Z);typeof Z=="number"?(S.__data[0]=Z,n.bufferSubData(35345,A+re,S.__data)):Z.isMatrix3?(S.__data[0]=Z.elements[0],S.__data[1]=Z.elements[1],S.__data[2]=Z.elements[2],S.__data[3]=Z.elements[0],S.__data[4]=Z.elements[3],S.__data[5]=Z.elements[4],S.__data[6]=Z.elements[5],S.__data[7]=Z.elements[0],S.__data[8]=Z.elements[6],S.__data[9]=Z.elements[7],S.__data[10]=Z.elements[8],S.__data[11]=Z.elements[0]):(Z.toArray(S.__data,re),re+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,A,S.__data)}}n.bindBuffer(35345,null)}function m(y,v,_){let b=y.value;if(_[v]===void 0){if(typeof b=="number")_[v]=b;else{let C=Array.isArray(b)?b:[b],D=[];for(let S=0;S<C.length;S++)D.push(C[S].clone());_[v]=D}return!0}else if(typeof b=="number"){if(_[v]!==b)return _[v]=b,!0}else{let C=Array.isArray(_[v])?_[v]:[_[v]],D=Array.isArray(b)?b:[b];for(let S=0;S<C.length;S++){let A=C[S];if(A.equals(D[S])===!1)return A.copy(D[S]),!0}}return!1}function x(y){let v=y.uniforms,_=0,b=16,C=0;for(let D=0,S=v.length;D<S;D++){let A=v[D],z={boundary:0,storage:0},re=Array.isArray(A.value)?A.value:[A.value];for(let se=0,Z=re.length;se<Z;se++){let G=re[se],de=f(G);z.boundary+=de.boundary,z.storage+=de.storage}if(A.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=_,D>0){C=_%b;let se=b-C;C!==0&&se-z.boundary<0&&(_+=b-C,A.__offset=_)}_+=z.storage}return C=_%b,C>0&&(_+=b-C),y.__size=_,y.__cache={},this}function f(y){let v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){let v=y.target;v.removeEventListener("dispose",p);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function g(){for(let y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}function iE(){let n=nu("canvas");return n.style.display="block",n}function yp(n={}){this.isWebGLRenderer=!0;let e=n.canvas!==void 0?n.canvas:iE(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1,h;t!==null?h=t.getContextAttributes().alpha:h=n.alpha!==void 0?n.alpha:!1;let d=null,u=null,m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vr,this.physicallyCorrectLights=!1,this.toneMapping=Fi,this.toneMappingExposure=1;let f=this,p=!1,g=0,y=0,v=null,_=-1,b=null,C=new zt,D=new zt,S=null,A=e.width,z=e.height,re=1,se=null,Z=null,G=new zt(0,0,A,z),de=new zt(0,0,A,z),ve=!1,Ce=new Xa,ge=!1,Ae=!1,Se=null,We=new wt,$=new rt,le=new F,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return v===null?re:1}let K=t;function et(T,V){for(let ne=0;ne<T.length;ne++){let q=T[ne],ce=e.getContext(q,V);if(ce!==null)return ce}return null}try{let T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r149"),e.addEventListener("webglcontextlost",He,!1),e.addEventListener("webglcontextrestored",Xe,!1),e.addEventListener("webglcontextcreationerror",dt,!1),K===null){let V=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&V.shift(),K=et(V,T),K===null)throw et(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Fe,Be,Ne,vt,Ge,Je,nt,rn,Ft,Cn,Mt,gt,ui,Rn,I,E,O,Te,Ee,ke,Qe,Ie,pe,Le;function $e(){Fe=new bb(K),Be=new vb(K,Fe,n),Fe.init(Be),Ie=new Q2(K,Fe,Be),Ne=new J2(K,Fe,Be),vt=new Ab,Ge=new U2,Je=new K2(K,Fe,Ne,Ge,Be,Ie,vt),nt=new _b(f),rn=new Mb(f),Ft=new zw(K,Be),pe=new gb(K,Fe,Ft,Be),Cn=new Eb(K,Ft,vt,pe),Mt=new Lb(K,Cn,Ft,vt),Ee=new Pb(K,Be,Je),E=new xb(Ge),gt=new O2(f,nt,rn,Fe,Be,pe,E),ui=new tE(f,Ge),Rn=new H2,I=new Y2(Fe,Be),Te=new mb(f,nt,rn,Ne,Mt,h,o),O=new j2(f,Mt,Be),Le=new nE(K,vt,Be,Ne),ke=new yb(K,Fe,vt,Be),Qe=new Tb(K,Fe,vt,Be),vt.programs=gt.programs,f.capabilities=Be,f.extensions=Fe,f.properties=Ge,f.renderLists=Rn,f.shadowMap=O,f.state=Ne,f.info=vt}$e();let Ve=new jf(f,K);this.xr=Ve,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let T=Fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(A,z,!1))},this.getSize=function(T){return T.set(A,z)},this.setSize=function(T,V,ne){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=T,z=V,e.width=Math.floor(T*re),e.height=Math.floor(V*re),ne!==!1&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(A*re,z*re).floor()},this.setDrawingBufferSize=function(T,V,ne){A=T,z=V,re=ne,e.width=Math.floor(T*ne),e.height=Math.floor(V*ne),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(G)},this.setViewport=function(T,V,ne,q){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,V,ne,q),Ne.viewport(C.copy(G).multiplyScalar(re).floor())},this.getScissor=function(T){return T.copy(de)},this.setScissor=function(T,V,ne,q){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,V,ne,q),Ne.scissor(D.copy(de).multiplyScalar(re).floor())},this.getScissorTest=function(){return ve},this.setScissorTest=function(T){Ne.setScissorTest(ve=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(T=!0,V=!0,ne=!0){let q=0;T&&(q|=16384),V&&(q|=256),ne&&(q|=1024),K.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",He,!1),e.removeEventListener("webglcontextrestored",Xe,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Rn.dispose(),I.dispose(),Ge.dispose(),nt.dispose(),rn.dispose(),Mt.dispose(),pe.dispose(),Le.dispose(),gt.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",ze),Ve.removeEventListener("sessionend",qe),Se&&(Se.dispose(),Se=null),ft.stop()};function He(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let T=vt.autoReset,V=O.enabled,ne=O.autoUpdate,q=O.needsUpdate,ce=O.type;$e(),vt.autoReset=T,O.enabled=V,O.autoUpdate=ne,O.needsUpdate=q,O.type=ce}function dt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ct(T){let V=T.target;V.removeEventListener("dispose",Ct),Ot(V)}function Ot(T){H(T),Ge.remove(T)}function H(T){let V=Ge.get(T).programs;V!==void 0&&(V.forEach(function(ne){gt.releaseProgram(ne)}),T.isShaderMaterial&&gt.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,ne,q,ce,Ye){V===null&&(V=fe);let _e=ce.isMesh&&ce.matrixWorld.determinant()<0,tt=il(T,V,ne,q,ce);Ne.setMaterial(q,_e);let ot=ne.index,at=1;q.wireframe===!0&&(ot=Cn.getWireframeAttribute(ne),at=2);let ut=ne.drawRange,st=ne.attributes.position,Ke=ut.start*at,vn=(ut.start+ut.count)*at;Ye!==null&&(Ke=Math.max(Ke,Ye.start*at),vn=Math.min(vn,(Ye.start+Ye.count)*at)),ot!==null?(Ke=Math.max(Ke,0),vn=Math.min(vn,ot.count)):st!=null&&(Ke=Math.max(Ke,0),vn=Math.min(vn,st.count));let di=vn-Ke;if(di<0||di===1/0)return;pe.setup(ce,q,tt,ne,ot);let Ji,Wt=ke;if(ot!==null&&(Ji=Ft.get(ot),Wt=Qe,Wt.setIndex(Ji)),ce.isMesh)q.wireframe===!0?(Ne.setLineWidth(q.wireframeLinewidth*we()),Wt.setMode(1)):Wt.setMode(4);else if(ce.isLine){let it=q.linewidth;it===void 0&&(it=1),Ne.setLineWidth(it*we()),ce.isLineSegments?Wt.setMode(1):ce.isLineLoop?Wt.setMode(2):Wt.setMode(3)}else ce.isPoints?Wt.setMode(0):ce.isSprite&&Wt.setMode(4);if(ce.isInstancedMesh)Wt.renderInstances(Ke,di,ce.count);else if(ne.isInstancedBufferGeometry){let it=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Ki=Math.min(ne.instanceCount,it);Wt.renderInstances(Ke,di,Ki)}else Wt.render(Ke,di)},this.compile=function(T,V){function ne(q,ce,Ye){q.transparent===!0&&q.side===ri&&q.forceSinglePass===!1?(q.side=oi,q.needsUpdate=!0,Pn(q,ce,Ye),q.side=$r,q.needsUpdate=!0,Pn(q,ce,Ye),q.side=ri):Pn(q,ce,Ye)}u=I.get(T),u.init(),x.push(u),T.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(u.pushLight(q),q.castShadow&&u.pushShadow(q))}),u.setupLights(f.physicallyCorrectLights),T.traverse(function(q){let ce=q.material;if(ce)if(Array.isArray(ce))for(let Ye=0;Ye<ce.length;Ye++){let _e=ce[Ye];ne(_e,T,q)}else ne(ce,T,q)}),x.pop(),u=null};let te=null;function be(T){te&&te(T)}function ze(){ft.stop()}function qe(){ft.start()}let ft=new Bv;ft.setAnimationLoop(be),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(T){te=T,Ve.setAnimationLoop(T),T===null?ft.stop():ft.start()},Ve.addEventListener("sessionstart",ze),Ve.addEventListener("sessionend",qe),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(V),V=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,V,v),u=I.get(T,x.length),u.init(),x.push(u),We.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ce.setFromProjectionMatrix(We),Ae=this.localClippingEnabled,ge=E.init(this.clippingPlanes,Ae),d=Rn.get(T,m.length),d.init(),m.push(d),Zt(T,V,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(se,Z),ge===!0&&E.beginShadows();let ne=u.state.shadowsArray;if(O.render(ne,T,V),ge===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),Te.render(d,T),u.setupLights(f.physicallyCorrectLights),V.isArrayCamera){let q=V.cameras;for(let ce=0,Ye=q.length;ce<Ye;ce++){let _e=q[ce];bt(d,T,_e,_e.viewport)}}else bt(d,T,V);v!==null&&(Je.updateMultisampleRenderTarget(v),Je.updateRenderTargetMipmap(v)),T.isScene===!0&&T.onAfterRender(f,T,V),pe.resetDefaultState(),_=-1,b=null,x.pop(),x.length>0?u=x[x.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Zt(T,V,ne,q){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)ne=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ce.intersectsSprite(T)){q&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(We);let _e=Mt.update(T),tt=T.material;tt.visible&&d.push(T,_e,tt,ne,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==vt.render.frame&&(T.skeleton.update(),T.skeleton.frame=vt.render.frame),!T.frustumCulled||Ce.intersectsObject(T))){q&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(We);let _e=Mt.update(T),tt=T.material;if(Array.isArray(tt)){let ot=_e.groups;for(let at=0,ut=ot.length;at<ut;at++){let st=ot[at],Ke=tt[st.materialIndex];Ke&&Ke.visible&&d.push(T,_e,Ke,ne,le.z,st)}}else tt.visible&&d.push(T,_e,tt,ne,le.z,null)}}let Ye=T.children;for(let _e=0,tt=Ye.length;_e<tt;_e++)Zt(Ye[_e],V,ne,q)}function bt(T,V,ne,q){let ce=T.opaque,Ye=T.transmissive,_e=T.transparent;u.setupLightsView(ne),ge===!0&&E.setGlobalState(f.clippingPlanes,ne),Ye.length>0&&$i(ce,V,ne),q&&Ne.viewport(C.copy(q)),ce.length>0&&Et(ce,V,ne),Ye.length>0&&Et(Ye,V,ne),_e.length>0&&Et(_e,V,ne),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function $i(T,V,ne){let q=Be.isWebGL2;Se===null&&(Se=new li(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")?Ms:Ss,minFilter:Wa,samples:q&&s===!0?4:0})),f.getDrawingBufferSize($),q?Se.setSize($.x,$.y):Se.setSize(zf($.x),zf($.y));let ce=f.getRenderTarget();f.setRenderTarget(Se),f.clear();let Ye=f.toneMapping;f.toneMapping=Fi,Et(T,V,ne),f.toneMapping=Ye,Je.updateMultisampleRenderTarget(Se),Je.updateRenderTargetMipmap(Se),f.setRenderTarget(ce)}function Et(T,V,ne){let q=V.isScene===!0?V.overrideMaterial:null;for(let ce=0,Ye=T.length;ce<Ye;ce++){let _e=T[ce],tt=_e.object,ot=_e.geometry,at=q===null?_e.material:q,ut=_e.group;tt.layers.test(ne.layers)&&hi(tt,V,ne,ot,at,ut)}}function hi(T,V,ne,q,ce,Ye){T.onBeforeRender(f,V,ne,q,ce,Ye),T.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ce.onBeforeRender(f,V,ne,q,T,Ye),ce.transparent===!0&&ce.side===ri&&ce.forceSinglePass===!1?(ce.side=oi,ce.needsUpdate=!0,f.renderBufferDirect(ne,V,q,ce,T,Ye),ce.side=$r,ce.needsUpdate=!0,f.renderBufferDirect(ne,V,q,ce,T,Ye),ce.side=ri):f.renderBufferDirect(ne,V,q,ce,T,Ye),T.onAfterRender(f,V,ne,q,ce,Ye)}function Pn(T,V,ne){V.isScene!==!0&&(V=fe);let q=Ge.get(T),ce=u.state.lights,Ye=u.state.shadowsArray,_e=ce.state.version,tt=gt.getParameters(T,ce.state,Ye,V,ne),ot=gt.getProgramCacheKey(tt),at=q.programs;q.environment=T.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(T.isMeshStandardMaterial?rn:nt).get(T.envMap||q.environment),at===void 0&&(T.addEventListener("dispose",Ct),at=new Map,q.programs=at);let ut=at.get(ot);if(ut!==void 0){if(q.currentProgram===ut&&q.lightsStateVersion===_e)return Fo(T,tt),ut}else tt.uniforms=gt.getUniforms(T),T.onBuild(ne,tt,f),T.onBeforeCompile(tt,f),ut=gt.acquireProgram(tt,ot),at.set(ot,ut),q.uniforms=tt.uniforms;let st=q.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(st.clippingPlanes=E.uniform),Fo(T,tt),q.needsLights=bu(T),q.lightsStateVersion=_e,q.needsLights&&(st.ambientLightColor.value=ce.state.ambient,st.lightProbe.value=ce.state.probe,st.directionalLights.value=ce.state.directional,st.directionalLightShadows.value=ce.state.directionalShadow,st.spotLights.value=ce.state.spot,st.spotLightShadows.value=ce.state.spotShadow,st.rectAreaLights.value=ce.state.rectArea,st.ltc_1.value=ce.state.rectAreaLTC1,st.ltc_2.value=ce.state.rectAreaLTC2,st.pointLights.value=ce.state.point,st.pointLightShadows.value=ce.state.pointShadow,st.hemisphereLights.value=ce.state.hemi,st.directionalShadowMap.value=ce.state.directionalShadowMap,st.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,st.spotShadowMap.value=ce.state.spotShadowMap,st.spotLightMatrix.value=ce.state.spotLightMatrix,st.spotLightMap.value=ce.state.spotLightMap,st.pointShadowMap.value=ce.state.pointShadowMap,st.pointShadowMatrix.value=ce.state.pointShadowMatrix);let Ke=ut.getUniforms(),vn=Ro.seqWithValue(Ke.seq,st);return q.currentProgram=ut,q.uniformsList=vn,ut}function Fo(T,V){let ne=Ge.get(T);ne.outputEncoding=V.outputEncoding,ne.instancing=V.instancing,ne.skinning=V.skinning,ne.morphTargets=V.morphTargets,ne.morphNormals=V.morphNormals,ne.morphColors=V.morphColors,ne.morphTargetsCount=V.morphTargetsCount,ne.numClippingPlanes=V.numClippingPlanes,ne.numIntersection=V.numClipIntersection,ne.vertexAlphas=V.vertexAlphas,ne.vertexTangents=V.vertexTangents,ne.toneMapping=V.toneMapping}function il(T,V,ne,q,ce){V.isScene!==!0&&(V=fe),Je.resetTextureUnits();let Ye=V.fog,_e=q.isMeshStandardMaterial?V.environment:null,tt=v===null?f.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:vr,ot=(q.isMeshStandardMaterial?rn:nt).get(q.envMap||_e),at=q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ut=!!q.normalMap&&!!ne.attributes.tangent,st=!!ne.morphAttributes.position,Ke=!!ne.morphAttributes.normal,vn=!!ne.morphAttributes.color,di=q.toneMapped?f.toneMapping:Fi,Ji=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Wt=Ji!==void 0?Ji.length:0,it=Ge.get(q),Ki=u.state.lights;if(ge===!0&&(Ae===!0||T!==b)){let un=T===b&&q.id===_;E.setState(q,T,un)}let qt=!1;q.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Ki.state.version||it.outputEncoding!==tt||ce.isInstancedMesh&&it.instancing===!1||!ce.isInstancedMesh&&it.instancing===!0||ce.isSkinnedMesh&&it.skinning===!1||!ce.isSkinnedMesh&&it.skinning===!0||it.envMap!==ot||q.fog===!0&&it.fog!==Ye||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==E.numPlanes||it.numIntersection!==E.numIntersection)||it.vertexAlphas!==at||it.vertexTangents!==ut||it.morphTargets!==st||it.morphNormals!==Ke||it.morphColors!==vn||it.toneMapping!==di||Be.isWebGL2===!0&&it.morphTargetsCount!==Wt)&&(qt=!0):(qt=!0,it.__version=q.version);let Ui=it.currentProgram;qt===!0&&(Ui=Pn(q,V,ce));let rl=!1,wr=!1,Sr=!1,sn=Ui.getUniforms(),Qi=it.uniforms;if(Ne.useProgram(Ui.program)&&(rl=!0,wr=!0,Sr=!0),q.id!==_&&(_=q.id,wr=!0),rl||b!==T){if(sn.setValue(K,"projectionMatrix",T.projectionMatrix),Be.logarithmicDepthBuffer&&sn.setValue(K,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,wr=!0,Sr=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){let un=sn.map.cameraPosition;un!==void 0&&un.setValue(K,le.setFromMatrixPosition(T.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&sn.setValue(K,"isOrthographic",T.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||ce.isSkinnedMesh)&&sn.setValue(K,"viewMatrix",T.matrixWorldInverse)}if(ce.isSkinnedMesh){sn.setOptional(K,ce,"bindMatrix"),sn.setOptional(K,ce,"bindMatrixInverse");let un=ce.skeleton;un&&(Be.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),sn.setValue(K,"boneTexture",un.boneTexture,Je),sn.setValue(K,"boneTextureSize",un.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let Rs=ne.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0&&Be.isWebGL2===!0)&&Ee.update(ce,ne,q,Ui),(wr||it.receiveShadow!==ce.receiveShadow)&&(it.receiveShadow=ce.receiveShadow,sn.setValue(K,"receiveShadow",ce.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Qi.envMap.value=ot,Qi.flipEnvMap.value=ot.isCubeTexture&&ot.isRenderTargetTexture===!1?-1:1),wr&&(sn.setValue(K,"toneMappingExposure",f.toneMappingExposure),it.needsLights&&ji(Qi,Sr),Ye&&q.fog===!0&&ui.refreshFogUniforms(Qi,Ye),ui.refreshMaterialUniforms(Qi,q,re,z,Se),Ro.upload(K,it.uniformsList,Qi,Je)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ro.upload(K,it.uniformsList,Qi,Je),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&sn.setValue(K,"center",ce.center),sn.setValue(K,"modelViewMatrix",ce.modelViewMatrix),sn.setValue(K,"normalMatrix",ce.normalMatrix),sn.setValue(K,"modelMatrix",ce.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let un=q.uniformsGroups;for(let Jr=0,xn=un.length;Jr<xn;Jr++)if(Be.isWebGL2){let Ps=un[Jr];Le.update(Ps,Ui),Le.bind(Ps,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function ji(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function bu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(T,V,ne){Ge.get(T.texture).__webglTexture=V,Ge.get(T.depthTexture).__webglTexture=ne;let q=Ge.get(T);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=ne===void 0,q.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){let ne=Ge.get(T);ne.__webglFramebuffer=V,ne.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,ne=0){v=T,g=V,y=ne;let q=!0,ce=null,Ye=!1,_e=!1;if(T){let ot=Ge.get(T);ot.__useDefaultFramebuffer!==void 0?(Ne.bindFramebuffer(36160,null),q=!1):ot.__webglFramebuffer===void 0?Je.setupRenderTarget(T):ot.__hasExternalTextures&&Je.rebindTextures(T,Ge.get(T.texture).__webglTexture,Ge.get(T.depthTexture).__webglTexture);let at=T.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(_e=!0);let ut=Ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ce=ut[V],Ye=!0):Be.isWebGL2&&T.samples>0&&Je.useMultisampledRTT(T)===!1?ce=Ge.get(T).__webglMultisampledFramebuffer:ce=ut,C.copy(T.viewport),D.copy(T.scissor),S=T.scissorTest}else C.copy(G).multiplyScalar(re).floor(),D.copy(de).multiplyScalar(re).floor(),S=ve;if(Ne.bindFramebuffer(36160,ce)&&Be.drawBuffers&&q&&Ne.drawBuffers(T,ce),Ne.viewport(C),Ne.scissor(D),Ne.setScissorTest(S),Ye){let ot=Ge.get(T.texture);K.framebufferTexture2D(36160,36064,34069+V,ot.__webglTexture,ne)}else if(_e){let ot=Ge.get(T.texture),at=V||0;K.framebufferTextureLayer(36160,36064,ot.__webglTexture,ne||0,at)}_=-1},this.readRenderTargetPixels=function(T,V,ne,q,ce,Ye,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(tt=tt[_e]),tt){Ne.bindFramebuffer(36160,tt);try{let ot=T.texture,at=ot.format,ut=ot.type;if(at!==Ni&&Ie.convert(at)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let st=ut===Ms&&(Fe.has("EXT_color_buffer_half_float")||Be.isWebGL2&&Fe.has("EXT_color_buffer_float"));if(ut!==Ss&&Ie.convert(ut)!==K.getParameter(35738)&&!(ut===xs&&(Be.isWebGL2||Fe.has("OES_texture_float")||Fe.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-q&&ne>=0&&ne<=T.height-ce&&K.readPixels(V,ne,q,ce,Ie.convert(at),Ie.convert(ut),Ye)}finally{let ot=v!==null?Ge.get(v).__webglFramebuffer:null;Ne.bindFramebuffer(36160,ot)}}},this.copyFramebufferToTexture=function(T,V,ne=0){let q=Math.pow(2,-ne),ce=Math.floor(V.image.width*q),Ye=Math.floor(V.image.height*q);Je.setTexture2D(V,0),K.copyTexSubImage2D(3553,ne,0,0,T.x,T.y,ce,Ye),Ne.unbindTexture()},this.copyTextureToTexture=function(T,V,ne,q=0){let ce=V.image.width,Ye=V.image.height,_e=Ie.convert(ne.format),tt=Ie.convert(ne.type);Je.setTexture2D(ne,0),K.pixelStorei(37440,ne.flipY),K.pixelStorei(37441,ne.premultiplyAlpha),K.pixelStorei(3317,ne.unpackAlignment),V.isDataTexture?K.texSubImage2D(3553,q,T.x,T.y,ce,Ye,_e,tt,V.image.data):V.isCompressedTexture?K.compressedTexSubImage2D(3553,q,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,_e,V.mipmaps[0].data):K.texSubImage2D(3553,q,T.x,T.y,_e,tt,V.image),q===0&&ne.generateMipmaps&&K.generateMipmap(3553),Ne.unbindTexture()},this.copyTextureToTexture3D=function(T,V,ne,q,ce=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ye=T.max.x-T.min.x+1,_e=T.max.y-T.min.y+1,tt=T.max.z-T.min.z+1,ot=Ie.convert(q.format),at=Ie.convert(q.type),ut;if(q.isData3DTexture)Je.setTexture3D(q,0),ut=32879;else if(q.isDataArrayTexture)Je.setTexture2DArray(q,0),ut=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,q.flipY),K.pixelStorei(37441,q.premultiplyAlpha),K.pixelStorei(3317,q.unpackAlignment);let st=K.getParameter(3314),Ke=K.getParameter(32878),vn=K.getParameter(3316),di=K.getParameter(3315),Ji=K.getParameter(32877),Wt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;K.pixelStorei(3314,Wt.width),K.pixelStorei(32878,Wt.height),K.pixelStorei(3316,T.min.x),K.pixelStorei(3315,T.min.y),K.pixelStorei(32877,T.min.z),ne.isDataTexture||ne.isData3DTexture?K.texSubImage3D(ut,ce,V.x,V.y,V.z,Ye,_e,tt,ot,at,Wt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(ut,ce,V.x,V.y,V.z,Ye,_e,tt,ot,Wt.data)):K.texSubImage3D(ut,ce,V.x,V.y,V.z,Ye,_e,tt,ot,at,Wt),K.pixelStorei(3314,st),K.pixelStorei(32878,Ke),K.pixelStorei(3316,vn),K.pixelStorei(3315,di),K.pixelStorei(32877,Ji),ce===0&&q.generateMipmaps&&K.generateMipmap(ut),Ne.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Je.setTextureCube(T,0):T.isData3DTexture?Je.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Je.setTexture2DArray(T,0):Je.setTexture2D(T,0),Ne.unbindTexture()},this.resetState=function(){g=0,y=0,v=null,Ne.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Jf=class extends yp{};Jf.prototype.isWebGL1Renderer=!0;var du=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};var Ya=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};var fu=class extends Tt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vv=new wt,xv=new wt,Yc=[],rE=new wt,Fa=new De,Za=class extends De{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fu(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let r=0;r<i;r++)this.setMatrixAt(r,rE)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Fa.geometry=this.geometry,Fa.material=this.material,Fa.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,vv),xv.multiplyMatrices(i,vv),Fa.matrixWorld=xv,Fa.raycast(e,Yc);for(let o=0,a=Yc.length;o<a;o++){let l=Yc[o];l.instanceId=s,l.object=this,t.push(l)}Yc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Kf=class extends xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_v=new F,wv=new F,Sv=new wt,Ef=new qa,Zc=new Es,Qf=class extends gn{constructor(e=new en,t=new Kf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)_v.fromBufferAttribute(t,r-1),wv.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=_v.distanceTo(wv);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zc.copy(i.boundingSphere),Zc.applyMatrix4(r),Zc.radius+=s,e.ray.intersectsSphere(Zc)===!1)return;Sv.copy(r).invert(),Ef.copy(e.ray).applyMatrix4(Sv);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,h=new F,d=new F,u=new F,m=this.isLineSegments?2:1,x=i.index,p=i.attributes.position;if(x!==null){let g=Math.max(0,o.start),y=Math.min(x.count,o.start+o.count);for(let v=g,_=y-1;v<_;v+=m){let b=x.getX(v),C=x.getX(v+1);if(c.fromBufferAttribute(p,b),h.fromBufferAttribute(p,C),Ef.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(u);S<e.near||S>e.far||t.push({distance:S,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let g=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let v=g,_=y-1;v<_;v+=m){if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Ef.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(u);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},Mv=new F,bv=new F,pu=class extends Qf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Mv.fromBufferAttribute(t,r),bv.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Mv.distanceTo(bv);e.setAttribute("lineDistance",new At(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ep=class extends xr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ev=new wt,tp=new qa,$c=new Es,jc=new F,$a=class extends gn{constructor(e=new en,t=new ep){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$c.copy(i.boundingSphere),$c.applyMatrix4(r),$c.radius+=s,e.ray.intersectsSphere($c)===!1)return;Ev.copy(r).invert(),tp.copy(e.ray).applyMatrix4(Ev);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=u,f=m;x<f;x++){let p=c.getX(x);jc.fromBufferAttribute(d,p),Tv(jc,p,l,r,e,t,this)}}else{let u=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=u,f=m;x<f;x++)jc.fromBufferAttribute(d,x),Tv(jc,x,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Tv(n,e,t,i,r,s,o){let a=tp.distanceSqToPoint(n);if(a<t){let l=new F;tp.closestPointToPoint(n,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}var mu=class extends wi{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},np=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let h=i[r],u=i[r+1]-h,m=(o-h)/u;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new rt:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new F,r=[],s=[],o=[],a=new F,l=new wt;for(let m=0;m<=e;m++){let x=m/e;r[m]=this.getTangentAt(x,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Un(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Un(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function vp(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,m*=h,r(o,a,u,m)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Jc=new F,Tf=new vp,Af=new vp,Cf=new vp,ja=class extends np{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new F){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Jc.subVectors(r[0],r[1]).add(r[0]),c=Jc);let d=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Jc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Jc),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(h),m);f<1e-4&&(f=1),x<1e-4&&(x=f),p<1e-4&&(p=f),Tf.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,x,f,p),Af.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,x,f,p),Cf.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,x,f,p)}else this.curveType==="catmullrom"&&(Tf.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Af.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Cf.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Tf.calc(l),Af.calc(l),Cf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var Xn=class n extends en{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],u=[],m=[],x=0,f=[],p=i/2,g=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new At(d,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(m,2));function y(){let _=new F,b=new F,C=0,D=(t-e)/i;for(let S=0;S<=s;S++){let A=[],z=S/s,re=z*(t-e)+e;for(let se=0;se<=r;se++){let Z=se/r,G=Z*l+a,de=Math.sin(G),ve=Math.cos(G);b.x=re*de,b.y=-z*i+p,b.z=re*ve,d.push(b.x,b.y,b.z),_.set(de,D,ve).normalize(),u.push(_.x,_.y,_.z),m.push(Z,1-z),A.push(x++)}f.push(A)}for(let S=0;S<r;S++)for(let A=0;A<s;A++){let z=f[A][S],re=f[A+1][S],se=f[A+1][S+1],Z=f[A][S+1];h.push(z,re,Z),h.push(re,se,Z),C+=6}c.addGroup(g,C,0),g+=C}function v(_){let b=x,C=new rt,D=new F,S=0,A=_===!0?e:t,z=_===!0?1:-1;for(let se=1;se<=r;se++)d.push(0,p*z,0),u.push(0,z,0),m.push(.5,.5),x++;let re=x;for(let se=0;se<=r;se++){let G=se/r*l+a,de=Math.cos(G),ve=Math.sin(G);D.x=A*ve,D.y=p*z,D.z=A*de,d.push(D.x,D.y,D.z),u.push(0,z,0),C.x=de*.5+.5,C.y=ve*.5*z+.5,m.push(C.x,C.y),x++}for(let se=0;se<r;se++){let Z=b+se,G=re+se;_===!0?h.push(G,G+1,Z):h.push(G+1,G,Z),S+=3}c.addGroup(g,S,_===!0?1:2),g+=S}}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ja=class n extends Xn{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ip=class n extends en{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new At(s,3)),this.setAttribute("normal",new At(s.slice(),3)),this.setAttribute("uv",new At(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new F,_=new F,b=new F;for(let C=0;C<t.length;C+=3)m(t[C+0],v),m(t[C+1],_),m(t[C+2],b),l(v,_,b,y)}function l(y,v,_,b){let C=b+1,D=[];for(let S=0;S<=C;S++){D[S]=[];let A=y.clone().lerp(_,S/C),z=v.clone().lerp(_,S/C),re=C-S;for(let se=0;se<=re;se++)se===0&&S===C?D[S][se]=A:D[S][se]=A.clone().lerp(z,se/re)}for(let S=0;S<C;S++)for(let A=0;A<2*(C-S)-1;A++){let z=Math.floor(A/2);A%2===0?(u(D[S][z+1]),u(D[S+1][z]),u(D[S][z])):(u(D[S][z+1]),u(D[S+1][z+1]),u(D[S+1][z]))}}function c(y){let v=new F;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(y),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function h(){let y=new F;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];let _=p(y)/2/Math.PI+.5,b=g(y)/Math.PI+.5;o.push(_,1-b)}x(),d()}function d(){for(let y=0;y<o.length;y+=6){let v=o[y+0],_=o[y+2],b=o[y+4],C=Math.max(v,_,b),D=Math.min(v,_,b);C>.9&&D<.1&&(v<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function m(y,v){let _=y*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function x(){let y=new F,v=new F,_=new F,b=new F,C=new rt,D=new rt,S=new rt;for(let A=0,z=0;A<s.length;A+=9,z+=6){y.set(s[A+0],s[A+1],s[A+2]),v.set(s[A+3],s[A+4],s[A+5]),_.set(s[A+6],s[A+7],s[A+8]),C.set(o[z+0],o[z+1]),D.set(o[z+2],o[z+3]),S.set(o[z+4],o[z+5]),b.copy(y).add(v).add(_).divideScalar(3);let re=p(b);f(C,z+0,y,re),f(D,z+2,v,re),f(S,z+4,_,re)}}function f(y,v,_,b){b<0&&y.x===1&&(o[v]=y.x-1),_.x===0&&_.z===0&&(o[v]=b/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var gu=class n extends ip{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var yu=class n extends en{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new F,u=new F,m=[],x=[],f=[],p=[];for(let g=0;g<=i;g++){let y=[],v=g/i,_=0;g==0&&o==0?_=.5/t:g==i&&l==Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){let C=b/t;d.x=-e*Math.cos(r+C*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),u.copy(d).normalize(),f.push(u.x,u.y,u.z),p.push(C+_,1-v),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let v=h[g][y+1],_=h[g][y],b=h[g+1][y],C=h[g+1][y+1];(g!==0||o>0)&&m.push(v,_,C),(g!==i-1||l<Math.PI)&&m.push(_,b,C)}this.setIndex(m),this.setAttribute("position",new At(x,3)),this.setAttribute("normal",new At(f,3)),this.setAttribute("uv",new At(p,2))}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Yn=class extends xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zv,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Zr(n,e,t){return qv(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)}function Kc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function qv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var No=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rp=class extends No{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dy,endingEnd:Dy}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ny:s=e,a=2*t-i;break;case zy:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ny:o=e,l=2*i-t;break;case zy:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,x=(i-t)/(r-t),f=x*x,p=f*x,g=-u*p+2*u*f-u*x,y=(1+u)*p+(-1.5-2*u)*f+(-.5+u)*x+1,v=(-1-m)*p+(1.5+m)*f+.5*x,_=m*p-m*f;for(let b=0;b!==a;++b)s[b]=g*o[h+b]+y*o[c+b]+v*o[l+b]+_*o[d+b];return s}},sp=class extends No{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(r-t),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},op=class extends No{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Oi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kc(t,this.TimeBufferType),this.values=Kc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Kc(e.times,Array),values:Kc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new op(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case eu:t=this.InterpolantFactoryMethodDiscrete;break;case tu:t=this.InterpolantFactoryMethodLinear;break;case Jd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eu;case this.InterpolantFactoryMethodLinear:return tu;case this.InterpolantFactoryMethodSmooth:return Jd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=Zr(i,s,o),this.values=Zr(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&qv(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=Zr(this.times),t=Zr(this.values),i=this.getValueSize(),r=this.getInterpolation()===Jd,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,u=d-i,m=d+i;for(let x=0;x!==i;++x){let f=t[d+x];if(f!==t[u+x]||f!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let m=0;m!==i;++m)t[u+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Zr(e,0,o),this.values=Zr(t,0,o*i)):(this.times=e,this.values=t),this}clone(){let e=Zr(this.times,0),t=Zr(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=tu;var As=class extends Oi{};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=eu;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var ap=class extends Oi{};ap.prototype.ValueTypeName="color";var lp=class extends Oi{};lp.prototype.ValueTypeName="number";var cp=class extends No{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)Si.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ka=class extends Oi{InterpolantFactoryMethodLinear(e){return new cp(this.times,this.values,this.getValueSize(),e)}};Ka.prototype.ValueTypeName="quaternion";Ka.prototype.DefaultInterpolation=tu;Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends Oi{};Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=eu;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var up=class extends Oi{};up.prototype.ValueTypeName="vector";var Qa=class extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},vu=class extends Qa{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Rf=new wt,Av=new F,Cv=new F,xu=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Av.setFromMatrixPosition(e.matrixWorld),t.position.copy(Av),Cv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cv),t.updateMatrixWorld(),Rf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Rv=new wt,Oa=new F,Pf=new F,hp=class extends xu{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new zt(2,1,1,1),new zt(0,1,1,1),new zt(3,1,1,1),new zt(1,1,1,1),new zt(3,0,1,1),new zt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Oa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Oa),Pf.copy(i.position),Pf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Pf),i.updateMatrixWorld(),r.makeTranslation(-Oa.x,-Oa.y,-Oa.z),Rv.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rv)}},_r=class extends Qa{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new hp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},dp=class extends xu{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},el=class extends Qa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new dp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var xp="\\[\\]\\.:\\/",sE=new RegExp("["+xp+"]","g"),_p="[^"+xp+"]",oE="[^"+xp.replace("\\.","")+"]",aE=/((?:WC+[\/:])*)/.source.replace("WC",_p),lE=/(WCOD+)?/.source.replace("WCOD",oE),cE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_p),uE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_p),hE=new RegExp("^"+aE+lE+cE+uE+"$"),dE=["material","materials","bones","map"],fp=class{constructor(e,t,i){let r=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sE,"")}static parseTrackName(e){let t=hE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);dE.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=fp;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"149"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="149");function Xv(n){let e=new URLSearchParams(location.search),t=(k,P)=>{let M=e.get(k);return M===null?P:M},i=(k,P)=>{let M=e.get(k);return M===null?P:parseFloat(M)},r=matchMedia("(prefers-reduced-motion: reduce)").matches,s=matchMedia("(hover: none)").matches,o=(k,P,M)=>k<P?P:k>M?M:k,a=k=>o(k,0,1),l=(k,P,M)=>k+(P-k)*M,c=(k,P,M)=>{let w=a((M-k)/(P-k));return w*w*(3-2*w)},h=k=>1-Math.pow(1-k,3),d=k=>k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2,u=Math.PI*2,m=(k,P,M,w)=>l(k,P,1-Math.exp(-M*w));function x(k){return function(){k|=0,k=k+1831565813|0;let P=Math.imul(k^k>>>15,1|k);return P=P+Math.imul(P^P>>>7,61|P)^P,((P^P>>>14)>>>0)/4294967296}}function f(k){let P=x(k),M=new Uint8Array(256),w=new Uint8Array(512);for(let L=0;L<256;L++)M[L]=L;for(let L=255;L>0;L--){let Y=P()*(L+1)|0,U=M[L];M[L]=M[Y],M[Y]=U}for(let L=0;L<512;L++)w[L]=M[L&255];let R=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],N=L=>L*L*L*(L*(L*6-15)+10);return function(L,Y){let U=Math.floor(L),X=Math.floor(Y),W=U&255,B=X&255,ae=L-U,ue=Y-X,ye=N(ae),xe=N(ue),Q=(me,oe,ie)=>{let Re=R[me&7];return Re[0]*oe+Re[1]*ie},he=w[w[W]+B],J=w[w[W]+B+1],ee=w[w[W+1]+B],j=w[w[W+1]+B+1];return l(l(Q(he,ae,ue),Q(ee,ae-1,ue),ye),l(Q(J,ae,ue-1),Q(j,ae-1,ue-1),ye),xe)}}function p(k,P,M,w,R,N){let L=.5,Y=1,U=0,X=0;for(let W=0;W<(w||4);W++)U+=L*k(P*Y,M*Y),X+=L,L*=N||.5,Y*=R||2;return U/X}function g(k,P){let M=document.createElement("canvas");return M.width=k,M.height=P,M}let y=(k,P,M)=>"rgb("+(k|0)+","+(P|0)+","+(M|0)+")";function v(k,P,M,w,R,N){let L=g(k,P),Y=L.getContext("2d");Y.fillStyle="#808080",Y.fillRect(0,0,k,P);let U=R||3,X=1;for(let W=0;W<(w||5);W++){let B=g(U,U),ae=B.getContext("2d"),ue=ae.createImageData(U,U),ye=ue.data,xe=x(M+W*977);for(let Q=0;Q<U*U;Q++){let he=128+(xe()-.5)*255*(N||1);ye[Q*4]=ye[Q*4+1]=ye[Q*4+2]=o(he,0,255),ye[Q*4+3]=255}ae.putImageData(ue,0,0),Y.globalAlpha=X,Y.globalCompositeOperation=W===0?"source-over":"overlay",Y.imageSmoothingEnabled=!0,Y.imageSmoothingQuality="high",Y.drawImage(B,0,0,k,P),U*=2,X*=.62}return Y.globalAlpha=1,Y.globalCompositeOperation="source-over",L}function _(k,P){let M=k.width,w=k.height,R=g(M,w),N=R.getContext("2d");N.filter="blur(1.1px)",N.drawImage(k,0,0),N.filter="none";let L=N.getImageData(0,0,M,w).data,Y=g(M,w),U=Y.getContext("2d"),X=U.createImageData(M,w),W=X.data,B=(ue,ye)=>L[((ye+w)%w*M+(ue+M)%M)*4]/255,ae=P||2.4;for(let ue=0;ue<w;ue++)for(let ye=0;ye<M;ye++){let xe=(B(ye+1,ue)-B(ye-1,ue))*ae,Q=(B(ye,ue+1)-B(ye,ue-1))*ae,he=-xe,J=Q,ee=1,j=1/Math.hypot(he,J,ee),me=(ue*M+ye)*4;W[me]=(he*j*.5+.5)*255,W[me+1]=(J*j*.5+.5)*255,W[me+2]=(ee*j*.5+.5)*255,W[me+3]=255}return U.putImageData(X,0,0),Y}function b(){let M=g(1024,1024),w=M.getContext("2d");w.fillStyle="#10161a",w.fillRect(0,0,1024,1024),w.globalCompositeOperation="overlay",w.globalAlpha=.82,w.drawImage(v(1024,1024,41,6,3,1),0,0),w.globalAlpha=1,w.globalCompositeOperation="source-over";let R=x(7);for(let Y=1;Y<6;Y++){let U=170.66666666666666*Y;w.fillStyle="rgba(0,0,0,.45)",w.fillRect(0,U-1.5,1024,3),w.fillStyle="rgba(190,205,205,.05)",w.fillRect(0,U+2,1024,2)}for(let Y=0;Y<6;Y++)for(let U=0;U<4;U++){let X=256*(U+.5)+(R()-.5)*14,W=1024/6*(Y+.5),B=w.createRadialGradient(X,W,1,X,W,11);B.addColorStop(0,"rgba(0,0,0,.5)"),B.addColorStop(.7,"rgba(0,0,0,.18)"),B.addColorStop(1,"rgba(0,0,0,0)"),w.fillStyle=B,w.beginPath(),w.arc(X,W,11,0,u),w.fill()}for(let Y=0;Y<190;Y++){let U=R()*1024,X=.6+R()*3.4,W=R()*1024*.5,B=1024*(.4+R()*.7),ae=w.createLinearGradient(0,W,0,W+B),ue=R()>.45;ae.addColorStop(0,"rgba(0,0,0,0)"),ae.addColorStop(.25,ue?"rgba(0,0,0,.20)":"rgba(170,195,200,.045)"),ae.addColorStop(1,"rgba(0,0,0,0)"),w.fillStyle=ae,w.fillRect(U,W,X,B)}w.globalAlpha=.16,w.globalCompositeOperation="overlay",w.drawImage(v(512,512,91,3,128,1.4),0,0,1024,1024),w.globalAlpha=1,w.globalCompositeOperation="source-over";let N=g(1024,1024),L=N.getContext("2d");L.fillStyle="#808080",L.fillRect(0,0,1024,1024),L.globalAlpha=.5,L.drawImage(v(1024,1024,41,5,6,1),0,0),L.globalAlpha=1;for(let Y=1;Y<6;Y++)L.fillStyle="#2a2a2a",L.fillRect(0,1024/6*Y-2,1024,4);return{map:M,normal:_(N,2)}}function C(){let M=g(1024,1024),w=M.getContext("2d"),R=x(23);w.fillStyle="#0a0f12",w.fillRect(0,0,1024,1024);let N=4,L=1024/N;for(let B=0;B<N;B++)for(let ae=0;ae<N;ae++){let ue=.82+R()*.36;w.fillStyle=y(12*ue,17*ue,20*ue),w.fillRect(ae*L+1.5,B*L+1.5,L-3,L-3)}w.globalCompositeOperation="overlay",w.globalAlpha=.55,w.drawImage(v(1024,1024,63,6,4,1),0,0),w.globalAlpha=1,w.globalCompositeOperation="source-over",w.strokeStyle="rgba(0,0,0,.72)",w.lineWidth=3;for(let B=0;B<=N;B++)w.beginPath(),w.moveTo(B*L,0),w.lineTo(B*L,1024),w.stroke(),w.beginPath(),w.moveTo(0,B*L),w.lineTo(1024,B*L),w.stroke();let Y=g(1024,1024),U=Y.getContext("2d");U.fillStyle="#8c8c8c",U.fillRect(0,0,1024,1024),U.globalAlpha=.35,U.drawImage(v(1024,1024,63,5,8,1),0,0),U.globalAlpha=1,U.strokeStyle="#303030",U.lineWidth=5;for(let B=0;B<=N;B++)U.beginPath(),U.moveTo(B*L,0),U.lineTo(B*L,1024),U.stroke(),U.beginPath(),U.moveTo(0,B*L),U.lineTo(1024,B*L),U.stroke();let X=g(512,512),W=X.getContext("2d");return W.fillStyle="#1c1c1c",W.fillRect(0,0,512,512),W.globalAlpha=.95,W.globalCompositeOperation="lighten",W.drawImage(v(512,512,77,4,3,1.5),0,0),W.globalAlpha=1,W.globalCompositeOperation="source-over",{map:M,normal:_(Y,1.5),rough:X}}function D(k,P){let M=P||{},w=512,R=512,N=g(w,R),L=N.getContext("2d"),Y=g(w,R),U=Y.getContext("2d"),X=g(w,R),W=X.getContext("2d"),B=x(k||3),ae=M.base||[30,23,19];L.fillStyle=y(ae[0],ae[1],ae[2]),L.fillRect(0,0,w,R),U.fillStyle="#808080",U.fillRect(0,0,w,R),W.fillStyle=M.rough||"#d6d6d6",W.fillRect(0,0,w,R);let ue=M.boards===void 0?7:M.boards,ye=[0];if(ue>0){let Q=[],he=0;for(let ee=0;ee<ue;ee++){let j=.7+B()*.6;Q.push(j),he+=j}let J=0;Q.forEach(ee=>{J+=ee/he*w,ye.push(J)})}else ye.push(w);let xe=(Q,he,J,ee)=>{if(!(Q.length<2)){he.beginPath(),he.moveTo(Q[0][0],Q[0][1]);for(let j=1;j<Q.length;j++)he.lineTo(Q[j][0],Q[j][1]);he.strokeStyle=J,he.lineWidth=ee,he.lineCap="round",he.stroke()}};for(let Q=0;Q<ye.length-1;Q++){let he=ye[Q],J=ye[Q+1],ee=J-he,j=.8+B()*.44,me=he+ee*(B()*2.8-.9),oe=ee*(.12+B()*1.7),ie=ee*(.1+B()*.4),Re=1+(B()*2|0),Ue=B()*u,je=Ze=>oe+Math.sin(Ze/R*u*Re+Ue)*ie,pt=2.4+B()*5;[L,U,W].forEach(Ze=>{Ze.save(),Ze.beginPath(),Ze.rect(he,0,ee,R),Ze.clip()}),L.fillStyle=y(ae[0]*j,ae[1]*j,ae[2]*j),L.fillRect(he,0,ee,R);for(let Ze=1;Ze*pt<ee*3.4+oe+ie;Ze++){let xt=Ze*pt*(.88+B()*.24),Ut=.42+B()*.38,Rt=.8+B()*1.9;for(let hn of[-1,1]){let _n=[],Mi=()=>{xe(_n,L,"rgba(0,0,0,"+Ut.toFixed(2)+")",Rt),xe(_n,U,"rgba(0,0,0,"+(Ut*.8).toFixed(2)+")",Rt),xe(_n.map(er=>[er[0]+hn*(Rt+.6),er[1]]),L,"rgba(150,120,96,"+(Ut*.3).toFixed(2)+")",Rt*.7),_n=[]};for(let er=-3;er<=R+3;er+=3){let Ls=je(er),ks=xt*xt-Ls*Ls;if(ks<=0){Mi();continue}_n.push([me+hn*Math.sqrt(ks),er])}Mi()}}for(let Ze=0;Ze<220;Ze++){let xt=he+B()*ee,Ut=B()*R,Rt=1.5+B()*6;L.fillStyle="rgba(0,0,0,"+(.1+B()*.22)+")",L.fillRect(xt,Ut,.7+B()*.7,Rt),U.fillStyle="rgba(0,0,0,.22)",U.fillRect(xt,Ut,.8,Rt)}if(B()>.55){let Ze=he+ee*(.2+B()*.6),xt=B()*R,Ut=2.5+B()*5;for(let Rt=5;Rt>=1;Rt--){let hn=Rt/5;L.strokeStyle="rgba(0,0,0,"+(.5-hn*.25).toFixed(2)+")",L.lineWidth=1.1,L.beginPath(),L.ellipse(Ze,xt,Ut*hn*1.5,Ut*hn*2.4,0,0,u),L.stroke(),U.strokeStyle="rgba(0,0,0,.30)",U.lineWidth=1.1,U.beginPath(),U.ellipse(Ze,xt,Ut*hn*1.5,Ut*hn*2.4,0,0,u),U.stroke()}}for(let Ze=0;Ze<5;Ze++){let xt=he+B()*ee,Ut=B()*R,Rt=20+B()*120,hn=[];for(let _n=Ut;_n<Ut+Rt;_n+=6)hn.push([xt+Math.sin(_n*.07)*1.4,_n]);xe(hn,L,"rgba(0,0,0,.62)",.7+B()*1.2),xe(hn,U,"rgba(0,0,0,.55)",.7+B()*1.2)}[L,U,W].forEach(Ze=>Ze.restore()),ue>0&&(L.fillStyle="rgba(0,0,0,.80)",L.fillRect(J-1.1,0,2.2,R),L.fillStyle="rgba(158,130,106,.14)",L.fillRect(J+1.1,0,1.1,R),U.fillStyle="rgba(0,0,0,.85)",U.fillRect(J-1.3,0,2.6,R),U.fillStyle="rgba(255,255,255,.35)",U.fillRect(J+1.3,0,1.6,R),W.fillStyle="rgba(255,255,255,.5)",W.fillRect(J-1.6,0,3.2,R))}for(let Q=0;Q<90;Q++){let he=B()*w,J=B()*R,ee=R*(.15+B()*.5),j=L.createLinearGradient(0,J,0,J+ee);j.addColorStop(0,"rgba(0,0,0,0)"),j.addColorStop(.3,"rgba(0,0,0,"+(.1+B()*.16)+")"),j.addColorStop(1,"rgba(0,0,0,0)"),L.fillStyle=j,L.fillRect(he,J,.8+B()*3.4,ee)}return{map:N,normal:_(Y,M.relief||2.4),rough:X}}function S(k,P){let M=P||{},w=512,R=512,N=g(w,R),L=N.getContext("2d"),Y=g(w,R),U=Y.getContext("2d"),X=g(w,R),W=X.getContext("2d"),B=x(k||17),ae=M.base||[46,51,53];L.fillStyle=y(ae[0],ae[1],ae[2]),L.fillRect(0,0,w,R),U.fillStyle="#808080",U.fillRect(0,0,w,R),W.fillStyle="#e8e8e8",W.fillRect(0,0,w,R);let ue=(J,ee,j,me,oe)=>{for(let ie=0;ie<J;ie++){let Re=j+B()*(me-j),Ue=B()*w,je=B()*R;L.fillStyle=ee(B),L.beginPath(),L.ellipse(Ue,je,Re,Re*(.55+B()*.85),B()*u,0,u),L.fill(),oe&&(U.fillStyle=oe,U.beginPath(),U.ellipse(Ue,je,Re,Re*.8,0,0,u),U.fill())}};ue(3400,J=>"rgba(206,210,204,"+(.06+J()*.2)+")",.6,2.8,"rgba(255,255,255,.13)"),ue(2e3,J=>"rgba(126,136,134,"+(.07+J()*.2)+")",.8,3.4,null),ue(1300,J=>"rgba(8,10,12,"+(.14+J()*.38)+")",.5,2.4,"rgba(0,0,0,.16)");for(let J=0;J<220;J++){let ee=B()*R,j=B()*w,me=5+B()*24,oe=-.26+B()*.52;[[L,"rgba(0,0,0,.22)","rgba(210,216,212,.08)"],[U,"rgba(0,0,0,.34)","rgba(255,255,255,.26)"]].forEach(([ie,Re,Ue])=>{ie.save(),ie.translate(j,ee),ie.rotate(oe),ie.fillStyle=Re,ie.fillRect(0,0,me,1.5),ie.fillStyle=Ue,ie.fillRect(0,1.5,me,1),ie.restore()})}for(let J=0;J<260;J++){let ee=B()*w,j=B()*R,me=.8+B()*B()*5,oe=L.createRadialGradient(ee-me*.3,j-me*.3,me*.1,ee,j,me);oe.addColorStop(0,"rgba(0,0,0,.42)"),oe.addColorStop(.7,"rgba(0,0,0,.16)"),oe.addColorStop(1,"rgba(198,204,198,.10)"),L.fillStyle=oe,L.beginPath(),L.arc(ee,j,me,0,u),L.fill(),U.fillStyle="rgba(0,0,0,.40)",U.beginPath(),U.arc(ee,j,me*.8,0,u),U.fill()}for(let J=0;J<16;J++){let ee=B()*w,j=B()*R,me=B()*u,oe=[[ee,j]];for(let ie=0;ie<24;ie++)me+=(B()-.5)*.9,ee+=Math.cos(me)*9,j+=Math.sin(me)*9,oe.push([ee,j]);[[L,"rgba(0,0,0,.46)"],[U,"rgba(0,0,0,.55)"]].forEach(([ie,Re])=>{ie.beginPath(),ie.moveTo(oe[0][0],oe[0][1]),oe.forEach(Ue=>ie.lineTo(Ue[0],Ue[1])),ie.strokeStyle=Re,ie.lineWidth=.7+B()*.9,ie.stroke()})}let ye=U.getImageData(0,0,w,R).data,xe=L.getImageData(0,0,w,R),Q=W.getImageData(0,0,w,R),he=M.moss===void 0?1:M.moss;for(let J=0;J<w*R;J++){let ee=o((.5-ye[J*4]/255)*4.2,0,1)*he;if(ee<=0)continue;let j=J*4;xe.data[j]=l(xe.data[j],30,ee*.75),xe.data[j+1]=l(xe.data[j+1],44,ee*.95),xe.data[j+2]=l(xe.data[j+2],28,ee*.85),Q.data[j]=Q.data[j+1]=Q.data[j+2]=l(Q.data[j],255,ee*.5)}return L.putImageData(xe,0,0),W.putImageData(Q,0,0),{map:N,normal:_(Y,M.relief||3.2),rough:X}}function A(){let M=D(131,{base:[34,22,17],boards:0}),w=g(512,512),R=w.getContext("2d"),N=g(512,512),L=N.getContext("2d"),Y=g(512,512),U=Y.getContext("2d"),X=x(5);R.drawImage(M.map,0,0),L.fillStyle="#808080",L.fillRect(0,0,512,512),U.fillStyle="#8c8c8c",U.fillRect(0,0,512,512),R.globalAlpha=.8,R.fillStyle="#7c1610",R.fillRect(0,0,512,512),R.globalAlpha=1,R.globalCompositeOperation="multiply",R.globalAlpha=.42,R.drawImage(M.map,0,0),R.globalAlpha=1,R.globalCompositeOperation="source-over",R.globalCompositeOperation="overlay",R.globalAlpha=.5,R.drawImage(v(512,512,313,5,3,1),0,0),R.globalAlpha=1,R.globalCompositeOperation="source-over";for(let W=0;W<190;W++){let B=X()*512,ae=X()*512,ue=X()*u;R.strokeStyle="rgba(24,8,6,"+(.28+X()*.4)+")",L.strokeStyle="rgba(0,0,0,.42)",R.lineWidth=L.lineWidth=.5+X()*.7,R.beginPath(),L.beginPath(),R.moveTo(B,ae),L.moveTo(B,ae);for(let ye=0;ye<5+X()*9;ye++)ue+=(X()-.5)*1.5,B+=Math.cos(ue)*(5+X()*9),ae+=Math.sin(ue)*(5+X()*9),R.lineTo(B,ae),L.lineTo(B,ae);R.stroke(),L.stroke()}for(let W=0;W<40;W++){let B=X()*512,ae=X()*512,ue=2+X()*X()*17,ye=[];for(let Q=0;Q<9;Q++){let he=Q/9*u,J=ue*(.55+X()*.75);ye.push([B+Math.cos(he)*J,ae+Math.sin(he)*J])}let xe=Q=>{Q.beginPath(),Q.moveTo(ye[0][0],ye[0][1]);for(let he=1;he<ye.length;he++){let J=ye[he],ee=ye[(he+1)%ye.length];Q.quadraticCurveTo(J[0],J[1],(J[0]+ee[0])/2,(J[1]+ee[1])/2)}Q.closePath()};R.save(),xe(R),R.clip(),R.drawImage(M.map,0,0),R.fillStyle="rgba(0,0,0,.22)",R.fillRect(0,0,512,512),R.restore(),xe(R),R.strokeStyle="rgba(196,110,76,.30)",R.lineWidth=1.2,R.stroke(),xe(L),L.fillStyle="rgba(0,0,0,.34)",L.fill(),L.strokeStyle="rgba(255,255,255,.30)",L.lineWidth=1.6,L.stroke(),xe(U),U.fillStyle="rgba(240,240,240,.75)",U.fill()}for(let W=0;W<120;W++){let B=X()*512,ae=.6+X()*2.6,ue=X()*512,ye=512*(.2+X()*.6),xe=R.createLinearGradient(0,ue,0,ue+ye);xe.addColorStop(0,"rgba(0,0,0,0)"),xe.addColorStop(.3,X()>.5?"rgba(12,4,4,.24)":"rgba(210,150,120,.05)"),xe.addColorStop(1,"rgba(0,0,0,0)"),R.fillStyle=xe,R.fillRect(B,ue,ae,ye)}return U.globalAlpha=.6,U.globalCompositeOperation="multiply",U.drawImage(v(512,512,401,4,6,1.2),0,0),U.globalAlpha=1,U.globalCompositeOperation="source-over",{map:w,normal:_(N,2.2),rough:Y}}function z(){let M=g(1024,768),w=M.getContext("2d");w.clearRect(0,0,1024,768),w.fillStyle="rgba(228,222,206,.055)",w.fillRect(0,0,1024,768),w.strokeStyle="rgba(10,8,7,.88)";let R=12,N=9;w.lineWidth=5;for(let L=1;L<R;L++)w.beginPath(),w.moveTo(1024/R*L,0),w.lineTo(1024/R*L,768),w.stroke();for(let L=1;L<N;L++)w.beginPath(),w.moveTo(0,768/N*L),w.lineTo(1024,768/N*L),w.stroke();return w.lineWidth=13,w.strokeStyle="rgba(8,6,5,.95)",w.strokeRect(0,0,1024,768),w.beginPath(),w.moveTo(1024/2,0),w.lineTo(1024/2,768),w.stroke(),M}function re(){let P=g(128,128),M=P.getContext("2d");M.translate(128/2,128*.92),M.scale(128/2.2,-128/2.2),M.beginPath();let w=5,R=1.9;for(let L=0;L<w;L++){let Y=-R/2+R*(L/(w-1))+Math.PI/2,U=L===2?.96:L===1||L===3?.82:.6,X=.17;M.moveTo(0,.02),M.lineTo(Math.cos(Y-X)*U*.55,Math.sin(Y-X)*U*.55),M.lineTo(Math.cos(Y)*U,Math.sin(Y)*U),M.lineTo(Math.cos(Y+X)*U*.55,Math.sin(Y+X)*U*.55),M.closePath()}M.fillStyle="#fff",M.fill(),M.lineWidth=.05,M.strokeStyle="#fff",M.stroke(),M.setTransform(1,0,0,1,0,0),M.globalCompositeOperation="destination-out";let N=x(3);for(let L=0;L<40;L++)M.beginPath(),M.arc(N()*128,N()*128,N()*3,0,u),M.fill();return P}function se(){let M=g(512,512),w=M.getContext("2d"),R=w.createLinearGradient(0,0,0,512);R.addColorStop(0,"rgb(6,10,15)"),R.addColorStop(.34,"rgb(13,22,31)"),R.addColorStop(.66,"rgb(17,26,34)"),R.addColorStop(.88,"rgb(24,35,42)"),R.addColorStop(1,"rgb(14,22,28)"),w.fillStyle=R,w.fillRect(0,0,512,512),w.globalAlpha=.34,w.globalCompositeOperation="overlay",w.drawImage(v(512,512,313,5,3,.9),0,0),w.globalAlpha=1,w.globalCompositeOperation="source-over";let N=w.createRadialGradient(512*.68,512*.95,4,512*.68,512*.95,512*.44);N.addColorStop(0,"rgba(150,66,26,.30)"),N.addColorStop(.5,"rgba(96,44,22,.12)"),N.addColorStop(1,"rgba(0,0,0,0)"),w.fillStyle=N,w.fillRect(0,0,512,512);let L=x(881);for(let Y=0;Y<420;Y++){let U=L()*512,X=L()*512*.78,W=.5+L()*L()*1.7;w.fillStyle="rgba(214,232,240,"+(.12+L()*.42)*(1-X/512)+")",w.beginPath(),w.arc(U,X,W,0,u),w.fill()}return M}function Z(){let M=g(2048,512),w=M.getContext("2d"),R=f(1207),N=x(1207);w.beginPath(),w.moveTo(0,512);for(let L=0;L<=2048;L+=4){let Y=L/2048,U=.46+.3*(p(R,Y*2.4,.5,4,2.1,.55)*.5+.5)+.16*(p(R,Y*7.5,3.1,3,2.2,.5)*.5+.5);w.lineTo(L,512-U*512*.84)}w.lineTo(2048,512),w.closePath(),w.fillStyle="#050809",w.fill(),w.fillStyle="#050809";for(let L=0;L<460;L++){let Y=N()*2048,U=Y/2048,W=512-(.46+.3*(p(R,U*2.4,.5,4,2.1,.55)*.5+.5)+.16*(p(R,U*7.5,3.1,3,2.2,.5)*.5+.5))*512*.84,B=8+N()*30,ae=3+N()*6;w.beginPath(),w.moveTo(Y,W-B),w.lineTo(Y+ae,W+4),w.lineTo(Y-ae,W+4),w.closePath(),w.fill()}return M}function G(){let M=g(512,512),w=M.getContext("2d"),R=g(512,512),N=R.getContext("2d");w.fillStyle="#151c20",w.fillRect(0,0,512,512),N.fillStyle="#606060",N.fillRect(0,0,512,512);let L=14,Y=512/L;for(let X=0;X<L;X++){let W=w.createLinearGradient(X*Y,0,(X+1)*Y,0);W.addColorStop(0,"rgba(0,0,0,.62)"),W.addColorStop(.3,"rgba(148,178,192,.13)"),W.addColorStop(.66,"rgba(84,110,124,.05)"),W.addColorStop(1,"rgba(0,0,0,.62)"),w.fillStyle=W,w.fillRect(X*Y,0,Y,512),w.fillStyle="rgba(0,0,0,.50)",w.fillRect(X*Y-3,0,6,512),w.fillStyle="rgba(168,196,208,.09)",w.fillRect(X*Y-1.2,0,1.6,512);let B=N.createLinearGradient(X*Y,0,(X+1)*Y,0);B.addColorStop(0,"#2c2c2c"),B.addColorStop(.5,"#eaeaea"),B.addColorStop(1,"#2c2c2c"),N.fillStyle=B,N.fillRect(X*Y,0,Y,512)}let U=x(211);for(let X=0;X<512;X+=512/9){w.fillStyle="rgba(0,0,0,.34)",w.fillRect(0,X,512,3.5),N.fillStyle="rgba(0,0,0,.55)",N.fillRect(0,X,512,3.5),N.fillStyle="rgba(255,255,255,.28)",N.fillRect(0,X+3.5,512,2);for(let W=0;W<26;W++)w.fillStyle=U()>.5?"rgba(0,0,0,.30)":"rgba(96,116,92,.10)",w.fillRect(U()*512,X+1,2+U()*9,2+U()*3)}return w.globalCompositeOperation="overlay",w.globalAlpha=.46,w.drawImage(v(256,256,211,5,3,1),0,0,512,512),w.globalAlpha=1,w.globalCompositeOperation="source-over",N.globalAlpha=.3,N.drawImage(v(256,256,213,4,16,1.2),0,0,512,512),N.globalAlpha=1,{map:M,normal:_(R,2.2)}}function de(){let P=g(512,512),M=P.getContext("2d"),w=512/2-1,R=x(91),N=(xe,Q)=>[512/2+xe*w,512/2+Q*w];M.beginPath(),M.arc(512/2,512/2,w,0,u),M.closePath(),M.save(),M.clip();let L=M.createRadialGradient(512*.46,512*.44,512*.05,512/2,512/2,w);L.addColorStop(0,"rgb(150,150,150)"),L.addColorStop(.55,"rgb(158,158,158)"),L.addColorStop(.86,"rgb(178,178,178)"),L.addColorStop(1,"rgb(196,196,196)"),M.fillStyle=L,M.fillRect(0,0,512,512),M.globalCompositeOperation="overlay",M.globalAlpha=.5,M.drawImage(v(256,256,517,6,4,1.1),0,0,512,512),M.globalAlpha=1,M.globalCompositeOperation="source-over";let Y=[[-.52,-.06,.46,.8],[-.26,-.38,.31,.92],[.13,-.31,.2,.88],[.3,-.08,.23,.84],[.45,.12,.15,.78],[.27,.27,.12,.74],[.57,-.3,.12,.95],[-.27,.3,.19,.7],[-.47,.25,.13,.72]],U=g(512,512),X=U.getContext("2d");Y.forEach(([xe,Q,he,J])=>{for(let ee=0;ee<22;ee++){let j=R()*u,me=R()*he*.66,[oe,ie]=N(xe+Math.cos(j)*me,Q+Math.sin(j)*me*.8),Re=he*w*(.3+R()*.46),Ue=X.createRadialGradient(oe,ie,Re*.2,oe,ie,Re);Ue.addColorStop(0,"rgba(0,0,0,"+(J*.14).toFixed(3)+")"),Ue.addColorStop(1,"rgba(0,0,0,0)"),X.fillStyle=Ue,X.beginPath(),X.arc(oe,ie,Re,0,u),X.fill()}}),M.save(),M.filter="blur(9px)",M.globalAlpha=.9,M.drawImage(U,0,0),M.restore(),M.globalCompositeOperation="overlay",M.globalAlpha=.18,M.drawImage(v(256,256,811,4,11,1.2),0,0,512,512),M.globalAlpha=1,M.globalCompositeOperation="source-over";let W=g(512,512),B=W.getContext("2d");[[-.1,.54,150,1],[-.28,-.07,80,.6],[-.46,-.04,60,.45]].forEach(([xe,Q,he,J])=>{let[ee,j]=N(xe,Q);for(let me=0;me<he;me++){let oe=R()*u,ie=w*(.3+R()*R()*1.3),Re=w*(.08+R()*.06),Ue=[ee+Math.cos(oe)*Re,j+Math.sin(oe)*Re],je=[ee+Math.cos(oe)*ie,j+Math.sin(oe)*ie],pt=B.createLinearGradient(Ue[0],Ue[1],je[0],je[1]);pt.addColorStop(0,"rgba(255,255,255,"+(.085*J).toFixed(3)+")"),pt.addColorStop(.4,"rgba(255,255,255,"+(.055*J).toFixed(3)+")"),pt.addColorStop(1,"rgba(255,255,255,0)"),B.strokeStyle=pt,B.lineWidth=.8+R()*2.4,B.lineCap="round",B.beginPath(),B.moveTo(Ue[0],Ue[1]),B.quadraticCurveTo(ee+Math.cos(oe+.06)*ie*.55,j+Math.sin(oe+.06)*ie*.55,je[0],je[1]),B.stroke()}}),M.save(),M.filter="blur(2.4px)",M.globalCompositeOperation="lighter",M.globalAlpha=.62,M.drawImage(W,0,0),M.restore();let ae=(xe,Q)=>Y.some(([he,J,ee])=>Math.hypot(xe-he,(Q-J)*1.15)<ee*.82);for(let xe=0;xe<620;xe++){let Q=R()*u,he=Math.sqrt(R())*.97,J=Math.cos(Q)*he,ee=Math.sin(Q)*he;if(ae(J,ee)&&R()>.12)continue;let[j,me]=N(J,ee),oe=R()>.975,ie=(1+R()*R()*R()*(oe?34:11))*(512/512),Re=.55+.45*Math.sqrt(Math.max(0,1-he*he)),Ue=Math.sqrt(Math.max(0,1-he*he))*.72+.28;M.save(),M.translate(j,me),M.rotate(Math.atan2(ee,J)),M.scale(Ue,1),M.rotate(-Math.atan2(ee,J));let je=Math.max(.8,ie*.26),pt=M.createLinearGradient(-ie,-ie,ie,ie);if(pt.addColorStop(0,"rgba(255,255,255,"+(.34*Re).toFixed(3)+")"),pt.addColorStop(.5,"rgba(255,255,255,0)"),pt.addColorStop(1,"rgba(0,0,0,"+(.38*Re).toFixed(3)+")"),M.strokeStyle=pt,M.lineWidth=je,M.beginPath(),M.arc(0,0,Math.max(.6,ie-je*.5),0,u),M.stroke(),ie>3){let Ze=M.createLinearGradient(-ie,-ie,ie,ie);Ze.addColorStop(0,"rgba(0,0,0,"+(.21*Re).toFixed(3)+")"),Ze.addColorStop(1,"rgba(255,255,255,"+(.07*Re).toFixed(3)+")"),M.fillStyle=Ze,M.beginPath(),M.arc(0,0,ie-je,0,u),M.fill()}ie>13&&(M.fillStyle="rgba(255,255,255,"+(.14*Re).toFixed(3)+")",M.beginPath(),M.arc(-ie*.04,-ie*.04,ie*.11,0,u),M.fill()),M.restore()}M.globalCompositeOperation="overlay",M.globalAlpha=.13,M.drawImage(v(512,512,977,2,210,1.3),0,0,512,512),M.globalAlpha=1,M.globalCompositeOperation="source-over";let ue=M.createRadialGradient(512*.4,512*.38,512*.18,512*.52,512*.56,512*.72);ue.addColorStop(0,"rgba(0,0,0,0)"),ue.addColorStop(1,"rgba(0,0,0,.30)"),M.fillStyle=ue,M.fillRect(0,0,512,512),M.restore();let ye=M.createRadialGradient(512/2,512/2,w-2.5,512/2,512/2,w);return ye.addColorStop(0,"rgba(0,0,0,1)"),ye.addColorStop(1,"rgba(0,0,0,0)"),M.globalCompositeOperation="destination-in",M.fillStyle=ye,M.fillRect(0,0,512,512),M.globalCompositeOperation="source-over",P}function ve(k,P){let w=g(256,256),R=w.getContext("2d"),N=R.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);return N.addColorStop(0,k||"rgba(255,255,255,1)"),N.addColorStop(.28,P||"rgba(255,255,255,.36)"),N.addColorStop(.62,"rgba(255,255,255,.07)"),N.addColorStop(1,"rgba(255,255,255,0)"),R.fillStyle=N,R.fillRect(0,0,256,256),w}function Ce(){let P=g(128,128),M=P.getContext("2d"),w=M.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return w.addColorStop(0,"rgba(255,255,255,1)"),w.addColorStop(.07,"rgba(236,250,250,.92)"),w.addColorStop(.16,"rgba(190,230,238,.40)"),w.addColorStop(.34,"rgba(132,192,212,.13)"),w.addColorStop(.62,"rgba(88,146,172,.035)"),w.addColorStop(1,"rgba(70,120,142,0)"),M.fillStyle=w,M.fillRect(0,0,128,128),P}function ge(k,P){P=P||{};let M=P.w||2048,w=P.h||1024,R=g(M,w),N=R.getContext("2d"),L=x(k),Y=f(k*13+5),U=P.crest!==void 0?P.crest:.46,X=P.peak!==void 0?P.peak:.6,W=P.wide!==void 0?P.wide:.4,B=new Float32Array(M);for(let me=0;me<M;me++){let oe=me/M,ie=Math.exp(-Math.pow((oe-U)/W,2)*2.1);ie+=.46*Math.exp(-Math.pow((oe-U-(P.crest2||.4))/(W*.62),2)*3.1),ie+=.3*Math.exp(-Math.pow((oe-U+(P.crest3||.46))/(W*.7),2)*3.4);let Re=p(Y,oe*4.2,.5,4,2.05,.52)*.5+.5;B[me]=ie*(.8+.38*Re)}let ae=0;for(let me=0;me<M;me++)ae=Math.max(ae,B[me]);for(let me=0;me<M;me++)B[me]*=w*X/ae;let ue=me=>w-B[o(me|0,0,M-1)];N.beginPath(),N.moveTo(0,w);for(let me=0;me<M;me+=3)N.lineTo(me,ue(me));N.lineTo(M,ue(M-1)),N.lineTo(M,w),N.closePath();let ye=N.createLinearGradient(0,w-w*X,0,w);ye.addColorStop(0,"#1a2416"),ye.addColorStop(.38,"#0e150c"),ye.addColorStop(1,"#040604"),N.fillStyle=ye,N.fill(),N.save(),N.clip(),N.globalCompositeOperation="overlay",N.globalAlpha=.5,N.drawImage(v(1024,512,k+3,5,3,1),0,0,M,w),N.restore(),N.globalAlpha=1,N.globalCompositeOperation="source-over";let xe=P.light||[-.42,-.91],Q=P.blades||15e3,he=[];for(let me=0;me<Q;me++){let oe=L()*M|0,ie=ue(oe),Re=Math.pow(L(),2.3),Ue=ie+Re*(w-ie)+(L()-.5)*6;Ue>w+20||he.push({i:oe,by:Ue,depth:Re,r:L(),r2:L(),r3:L()})}he.sort((me,oe)=>me.by-oe.by);let J=(P.len||46)*(M/2048);for(let me=0;me<he.length;me++){let oe=he[me],ie=oe.i+(oe.r-.5)*5,Re=1-.52*oe.depth,Ue=J*(.36+1.05*oe.r2*oe.r2)*Re,je=(oe.r3-.5)*1.5+(P.wind||.16),pt=ie+je*Ue*.95,Ze=oe.by-Ue,xt=ie+je*Ue*.3,Ut=oe.by-Ue*.62,Rt=(.9+1.9*oe.r)*Re*(M/2048),hn=pt-ie,_n=Ze-oe.by,Mi=1/Math.hypot(hn,_n),er=a((-(hn*Mi)*xe[0]-_n*Mi*xe[1])*.5+.5),Ls=Math.pow(1-oe.depth,1.35),ks=.1+.46*Ls+.34*er*Ls,Eu=a(Ls*1.25-.42)*(P.warm!==void 0?P.warm:1),Qv=(10+78*ks+44*Eu)*(P.tintR||1),ex=(16+106*ks+24*Eu)*(P.tintG||1),tx=(12+80*ks+16*Eu)*(P.tintB||1);N.fillStyle=y(Qv,ex,tx),N.beginPath(),N.moveTo(ie-Rt,oe.by),N.quadraticCurveTo(xt-Rt*.35,Ut,pt,Ze),N.quadraticCurveTo(xt+Rt*.35,Ut,ie+Rt,oe.by),N.closePath(),N.fill()}N.globalCompositeOperation="source-atop";let ee=N.createLinearGradient(P.bounceFrom||M,0,P.bounceTo||0,0);ee.addColorStop(0,"rgba(180,40,16,.24)"),ee.addColorStop(.55,"rgba(140,32,14,.07)"),ee.addColorStop(1,"rgba(0,0,0,0)"),N.fillStyle=ee,N.fillRect(0,0,M,w);let j=N.createLinearGradient(0,w-w*X*1.05,0,w);return j.addColorStop(0,"rgba(146,182,180,.13)"),j.addColorStop(.5,"rgba(0,0,0,0)"),j.addColorStop(1,"rgba(0,0,0,.70)"),N.fillStyle=j,N.fillRect(0,0,M,w),N.globalCompositeOperation="source-over",R}function Ae(k,P){P=P||{};let M=P.w||1536,w=P.h||1024,R=g(M,w),N=R.getContext("2d"),L=x(k),Y=f(k*7+11);(P.blobs||[[.3,.7,.4,.34],[.66,.82,.38,.28],[.46,.96,.52,.34]]).forEach((W,B)=>{let ae=W[0]*M,ue=W[1]*w,ye=W[2]*M*.5,xe=W[3]*w*.8;N.beginPath();for(let J=0;J<=128;J++){let ee=J/128*u,j=1+.17*p(Y,Math.cos(ee)*1.7+B*9,Math.sin(ee)*1.7,4,2.1,.55),me=ae+Math.cos(ee)*ye*j,oe=ue+Math.sin(ee)*xe*j;J===0?N.moveTo(me,oe):N.lineTo(me,oe)}N.closePath();let Q=N.createLinearGradient(ae-ye,ue-xe,ae+ye*.4,ue+xe),he=1-B*.16;Q.addColorStop(0,y(30*he,39*he,40*he)),Q.addColorStop(.42,y(14*he,19*he,20*he)),Q.addColorStop(1,y(6,9,9)),N.fillStyle=Q,N.fill(),N.save(),N.clip(),N.globalCompositeOperation="overlay",N.globalAlpha=.62,N.drawImage(v(768,512,k+B*31,6,4,1.1),0,0,M,w),N.globalAlpha=1,N.globalCompositeOperation="source-over";for(let J=0;J<26;J++){N.beginPath();let ee=ae+(L()-.5)*ye*2,j=ue+(L()-.5)*xe*1.6;N.moveTo(ee,j);for(let me=0;me<3;me++)N.lineTo(ee+(L()-.5)*ye*.8,j+(L()-.5)*xe*.6);N.closePath(),N.fillStyle=L()>.5?"rgba(255,255,255,.030)":"rgba(0,0,0,.14)",N.fill()}N.lineWidth=3+L()*4,N.strokeStyle="rgba(178,206,206,.20)",N.beginPath();for(let J=0;J<=60;J++){let ee=Math.PI+J/60*Math.PI*.78,j=1+.17*p(Y,Math.cos(ee)*1.7+B*9,Math.sin(ee)*1.7,4,2.1,.55),me=ae+Math.cos(ee)*ye*j*.97,oe=ue+Math.sin(ee)*xe*j*.97;J===0?N.moveTo(me,oe):N.lineTo(me,oe)}N.stroke(),N.restore()}),N.globalCompositeOperation="source-atop";for(let W=0;W<2600;W++){let B=L()*M,ae=w-Math.pow(L(),1.7)*w*.5;N.fillStyle="rgba("+(40+L()*40|0)+","+(60+L()*46|0)+",34,"+(.05+L()*.22)+")",N.fillRect(B,ae,1.6+L()*2.4,3+L()*9)}let X=N.createLinearGradient(M,0,0,0);return X.addColorStop(0,"rgba(190,48,22,.16)"),X.addColorStop(.7,"rgba(0,0,0,0)"),N.fillStyle=X,N.fillRect(0,0,M,w),N.globalCompositeOperation="source-over",R}function Se(k){let w=g(1536,1024),R=w.getContext("2d"),N=x(k),L=[];function Y(B,ae,ue,ye,xe,Q){let J=B,ee=ae,j=ue;R.beginPath(),R.moveTo(J,ee);for(let me=0;me<7;me++)j+=(N()-.5)*.3,J+=Math.cos(j)*ye/7,ee+=Math.sin(j)*ye/7,R.lineTo(J,ee);if(R.lineCap="round",R.lineWidth=xe,R.strokeStyle="rgba("+(26+Q*5|0)+","+(22+Q*4|0)+","+(22+Q*4|0)+",1)",R.stroke(),Q<4&&ye>34){let me=Q===0?3:2;for(let oe=0;oe<me;oe++)Y(J,ee,j+(N()-.5)*1.25,ye*(.58+N()*.18),xe*.58,Q+1)}else for(let me=0;me<9;me++)L.push([J+(N()-.5)*78,ee+(N()-.5)*78,N()*u,12+N()*20,N()])}Y(1536*1.02,1024*.06,Math.PI*.78,420,26,0),Y(1536*.86,-1024*.02,Math.PI*.62,330,18,1);let U=re(),X=g(128,128),W=X.getContext("2d");return L.forEach(B=>{W.clearRect(0,0,128,128),W.drawImage(U,0,0),W.globalCompositeOperation="source-in";let ae=B[4];W.fillStyle=y(96+ae*96,14+ae*22,16+ae*18),W.fillRect(0,0,128,128),W.globalCompositeOperation="source-over",R.save(),R.translate(B[0],B[1]),R.rotate(B[2]),R.globalAlpha=.78+ae*.22,R.drawImage(X,-B[3],-B[3],B[3]*2,B[3]*2),R.restore()}),R.globalAlpha=1,w}let We=()=>Math.max(1,n.clientWidth),$=()=>Math.max(1,n.clientHeight),le,fe,we,K=1,Fe=t("q",s?"low":"high")==="low",Be=t("post","1")!=="0",Ne=t("shadow",Fe?"0":"1")!=="0",vt=i("dpr",Fe?1.4:1.8),Ge={scale:1,acc:0,n:0,locked:t("adapt","1")==="0"};function Je(){if(t("nogl","0")!=="0")throw new Error("webgl disabled");le=new yp({canvas:n,antialias:!Be,alpha:!1,powerPreference:"high-performance"}),le.setPixelRatio(Math.min(devicePixelRatio||1,vt)),le.setSize(We(),$(),!0),le.outputEncoding=Be?vr:St,le.toneMapping=Be?Fi:mp,le.toneMappingExposure=1,le.setClearColor(329482,1),Ne&&(le.shadowMap.enabled=!0,le.shadowMap.type=pp),K=le.capabilities.getMaxAnisotropy(),fe=new Ya,fe.fog=new du(330254,.0168),fe.background=new ht(395789),we=new mn(36,We()/$(),.35,220),fe.add(we)}function nt(k,P){P=P||{};let M=new mu(k);return M.wrapS=M.wrapT=P.wrap||ii,P.repeat&&M.repeat.set(P.repeat[0],P.repeat[1]),M.anisotropy=Math.min(P.aniso||8,K),P.srgb!==!1&&(M.encoding=St),M.needsUpdate=!0,M}let rn=(k,P,M)=>new ht().setRGB(k,P,M);function Ft(k,P,M){M=M||{};let w=ai,R=M.aniso||8,N=new Yn({map:nt(k.map,{wrap:w,repeat:P,aniso:R}),normalMap:nt(k.normal,{wrap:w,repeat:P,srgb:!1,aniso:R}),normalScale:new rt(M.normal===void 0?.8:M.normal,M.normal===void 0?.8:M.normal),color:M.color===void 0?16777215:M.color,roughness:M.roughness===void 0?1:M.roughness,metalness:M.metalness===void 0?.02:M.metalness});return k.rough&&(N.roughnessMap=nt(k.rough,{wrap:w,repeat:P,srgb:!1})),N}let Cn={},Mt=(k,P)=>Cn[k]||(Cn[k]=P()),gt=()=>Mt("wallWood",()=>D(3,{boards:7})),ui=()=>Mt("postWood",()=>D(29,{boards:0}));function Rn(k,P){let M=k.length,w=P.length,R=[],N=[],L=[],Y=[],U=new F,X=new F,W=new F,B=new F(0,1,0);for(let ue=0;ue<M;ue++){let ye=k[ue],xe=k[Math.max(0,ue-1)],Q=k[Math.min(M-1,ue+1)];U.subVectors(Q,xe).normalize(),W.crossVectors(U,B).normalize(),X.crossVectors(W,U).normalize();for(let he=0;he<w;he++){let J=P[he][0],ee=P[he][1],j=Math.hypot(J,ee)||1;R.push(ye.x+W.x*J+X.x*ee,ye.y+W.y*J+X.y*ee,ye.z+W.z*J+X.z*ee),N.push(W.x*J/j+X.x*ee/j,W.y*J/j+X.y*ee/j,W.z*J/j+X.z*ee/j),L.push(he/w,ue/(M-1))}}for(let ue=0;ue<M-1;ue++)for(let ye=0;ye<w;ye++){let xe=(ye+1)%w,Q=ue*w+ye,he=ue*w+xe,J=(ue+1)*w+xe,ee=(ue+1)*w+ye;Y.push(Q,he,J,Q,J,ee)}[0,M-1].forEach((ue,ye)=>{let xe=R.length/3,Q=k[ue];R.push(Q.x,Q.y,Q.z),N.push(0,0,ye?1:-1),L.push(.5,.5);for(let he=0;he<w;he++){let J=ue*w+he,ee=ue*w+(he+1)%w;ye?Y.push(xe,J,ee):Y.push(xe,ee,J)}});let ae=new en;return ae.setAttribute("position",new At(R,3)),ae.setAttribute("normal",new At(N,3)),ae.setAttribute("uv",new At(L,2)),ae.setIndex(Y),ae}function I(k,P,M,w,R,N){let U=N===void 0?.3:N,X=.001,W=(j,me)=>{let oe=Math.min(1,Math.abs(j)/k),ie=Math.min(1,Math.abs(me)/P),Re=Math.max(0,(Math.abs(j)-M)/Math.max(k-M,1e-4)),Ue=Math.min(1,Math.max(Re,ie));return w*Math.pow(1-Ue,1.45)+U*w*c(.72,1,Ue)*(.52+.68*Math.min(oe,ie))},B=[],ae=[],ue=[],ye=[],xe=new F,Q=1855;for(let j=0;j<2;j++){for(let me=0;me<=34;me++)for(let oe=0;oe<=52;oe++){let ie=-k+2*k*oe/52,Re=-P+2*P*me/34;xe.set(-(W(ie+X,Re)-W(ie-X,Re))/(2*X),1,-(W(ie,Re+X)-W(ie,Re-X))/(2*X)).normalize(),j&&xe.negate(),B.push(ie,W(ie,Re)-(j?R:0),Re),ae.push(xe.x,xe.y,xe.z),ue.push(ie*.14,Re*.14)}for(let me=0;me<34;me++)for(let oe=0;oe<52;oe++){let ie=j*Q+me*53+oe,Re=ie+1,Ue=ie+52+2,je=ie+52+1;j?ye.push(ie,Ue,Re,ie,je,Ue):ye.push(ie,Re,Ue,ie,Ue,je)}}let he=[];for(let j=0;j<=52;j++)he.push([j,0]);for(let j=1;j<=34;j++)he.push([52,j]);for(let j=51;j>=0;j--)he.push([j,34]);for(let j=33;j>=1;j--)he.push([0,j]);let J=B.length/3;he.forEach(j=>{let me=-k+2*k*j[0]/52,oe=-P+2*P*j[1]/34,ie=j[0]===0?-1:j[0]===52?1:0,Re=j[1]===0?-1:j[1]===34?1:0,Ue=Math.hypot(ie,Re)||1,je=W(me,oe);B.push(me,je,oe,me,je-R,oe),ae.push(ie/Ue,0,Re/Ue,ie/Ue,0,Re/Ue),ue.push(0,0,0,1)});for(let j=0;j<he.length;j++){let me=J+j*2,oe=me+1,ie=J+(j+1)%he.length*2,Re=ie+1;ye.push(me,oe,Re,me,Re,ie)}let ee=new en;return ee.setAttribute("position",new At(B,3)),ee.setAttribute("normal",new At(ae,3)),ee.setAttribute("uv",new At(ue,2)),ee.setIndex(ye),ee}function E(k){let P=0,M=0;k.forEach(W=>{P+=W.attributes.position.count,M+=W.index.count});let w=new Float32Array(P*3),R=new Float32Array(P*3),N=new Float32Array(P*2),L=P>65535?new Uint32Array(M):new Uint16Array(M),Y=0,U=0;k.forEach(W=>{w.set(W.attributes.position.array,Y*3),R.set(W.attributes.normal.array,Y*3),N.set(W.attributes.uv.array,Y*2);let B=W.index.array;for(let ae=0;ae<B.length;ae++)L[U+ae]=B[ae]+Y;U+=B.length,Y+=W.attributes.position.count,W.dispose()});let X=new en;return X.setAttribute("position",new Tt(w,3)),X.setAttribute("normal",new Tt(R,3)),X.setAttribute("uv",new Tt(N,2)),X.setIndex(new Tt(L,1)),X}let O={},Te=[],Ee=7,ke=40,Qe=-11,Ie=.55,pe=8.4,Le=-44;function $e(){let k=b(),P=nt(k.map,{wrap:ai,repeat:[4,1.4]}),M=nt(k.normal,{wrap:ai,repeat:[4,1.4],srgb:!1}),w=new Yn({map:P,normalMap:M,normalScale:new rt(.85,.85),roughness:.78,metalness:.05,color:5397600}),R=new De(new Yt(360,190),new cn({color:rn(.6,.7,.8),map:nt(se()),depthWrite:!1,fog:!1,toneMapped:!1}));R.position.set(0,62,-108),R.renderOrder=0,fe.add(R),O.sky=R;let N=nt(Z(),{wrap:ai,repeat:[1.7,1]});[[-90,13,300,26,0],[-63,9.5,210,19,16]].forEach((Q,he)=>{let J=new De(new Yt(Q[2],Q[3]),new cn({map:he?nt(Z()):N,transparent:!0,color:he?659477:395533,depthWrite:!1,fog:!1}));J.position.set(Q[4],Q[1],Q[0]),J.renderOrder=1,fe.add(J)});let L=C(),Y=new Yn({map:nt(L.map,{wrap:ai,repeat:[7,7],aniso:16}),normalMap:nt(L.normal,{wrap:ai,repeat:[7,7],srgb:!1,aniso:16}),roughnessMap:nt(L.rough,{wrap:ai,repeat:[3.4,3.4],srgb:!1}),normalScale:new rt(.3,.3),roughness:.74,metalness:.06,color:6911354}),U=new De(new Yt(150,150),Y);U.rotation.x=-Math.PI/2,U.position.set(0,0,-18),U.receiveShadow=!0,fe.add(U),O.floor=U,O.floorMat=Y;let X=new Yn({map:nt(L.map,{wrap:ai,repeat:[3,1.2],aniso:16}),normalMap:nt(L.normal,{wrap:ai,repeat:[3,1.2],srgb:!1,aniso:16}),normalScale:new rt(.18,.18),roughness:.93,metalness:.02,color:5792618}),W=new De(new yt(42,Ee,24),X);W.position.set(0,Ee/2,-45),W.receiveShadow=!0,W.castShadow=!0,fe.add(W);let B=new De(new yt(43,.34,25),w);B.position.set(0,Ee-.17,-45),B.receiveShadow=!0,fe.add(B);let ae=[],ue=[];for(let Q=0;Q<ke;Q++){let he=(Q+1)*(Ee/ke),J=Qe-(Q+.5)*Ie,ee=pe+(ke-Q)*.052;ae.push(new yt(ee,Ee/ke+.04,Ie+.04).translate(0,he-Ee/ke/2,J)),[-1,1].forEach(j=>ue.push(new yt(.9,1.5,Ie+.06).translate(j*(ee/2+.45),he-.3,J)))}let ye=new De(E(ae),X);ye.receiveShadow=!0,ye.castShadow=!0,fe.add(ye);let xe=new De(E(ue),w);xe.receiveShadow=!0,xe.castShadow=!0,fe.add(xe)}function Ve(){let k=new zi,P=Ft(gt(),[4,1.6],{color:5656912,normal:1.5}),M=Ft(ui(),[1.1,1],{color:9073773,normal:1.05,metalness:.03}),w=new Yn({color:9400110,roughness:.38,metalness:.78}),R=Mt("roof",()=>G()),N=Ft(R,[1,1],{color:2831418,roughness:.74,metalness:.1,normal:1.4}),L=new cn({color:rn(1.06,.48,.18),fog:!0,toneMapped:!1}),Y=new cn({map:nt(z()),transparent:!0,depthWrite:!1,fog:!0});O.paper=L;function U(oe,ie,Re,Ue,je){let pt=new De(new Yt(oe,ie),L);pt.position.set(Re,Ue,je),k.add(pt);let Ze=new De(new Yt(oe,ie),Y);Ze.position.set(Re,Ue,je+.06),Ze.renderOrder=3,k.add(Ze)}function X(oe,ie,Re,Ue){let je=[];for(let Ze=-oe;Ze<=oe+.001;Ze+=Ue)[-ie,ie].forEach(xt=>{je.push(new yt(.34,.46,.34).translate(Ze,Re,Le+xt)),je.push(new yt(.92,.17,.24).translate(Ze,Re+.3,Le+xt))});for(let Ze=-ie+Ue;Ze<ie-.001;Ze+=Ue)[-oe,oe].forEach(xt=>{je.push(new yt(.34,.46,.34).translate(xt,Re,Le+Ze)),je.push(new yt(.24,.17,.92).translate(xt,Re+.3,Le+Ze))});let pt=new De(E(je),M);pt.castShadow=!1,k.add(pt)}let W=Ee,B=new De(new yt(13.6,5,8.2),P);B.position.set(0,W+2.5,Le),B.castShadow=!0,k.add(B);for(let oe=0;oe<5;oe++){let ie=-5.6+oe*2.8;U(1.55,2.5,ie,W+2.6,Le+4.16)}for(let oe=0;oe<6;oe++){let ie=new De(new Xn(.3,.34,5,14),M);ie.position.set(-7+oe*2.8,W+2.5,Le+4.24),ie.castShadow=!0,k.add(ie)}let ae=new De(new yt(14.6,.4,8.9),M);ae.position.set(0,W+.2,Le),k.add(ae),X(7,4.4,W+5.15,1.4);let ue=new De(I(9.6,6.4,3.2,2.9,.4,.26),N);ue.position.set(0,W+5.6,Le),ue.castShadow=!0,k.add(ue);let ye=new De(new yt(10,3.4,6),P);ye.position.set(0,W+9.4,Le),ye.castShadow=!0,k.add(ye);let xe=new De(new yt(12.4,.26,8.4),M);xe.position.set(0,W+7.72,Le),k.add(xe),[.1,.94].forEach(oe=>[4.2,-4.2].forEach(ie=>{let Re=new De(new yt(12.4,.17,.17),M);Re.position.set(0,W+7.85+oe,Le+ie),k.add(Re)}));for(let oe=0;oe<=16;oe++){let ie=new De(new yt(.1,1.05,.1),M);ie.position.set(-6.2+oe*.775,W+8.42,Le+4.2),k.add(ie)}for(let oe=0;oe<4;oe++)U(1,1.35,-4.5+oe*3,W+9.5,Le+3.06);let Q=new De(new yt(1.9,1.3,.16),w);Q.position.set(0,W+9.7,Le+3.12),k.add(Q);let he=new De(new yt(1.52,.98,.18),P);he.position.set(0,W+9.7,Le+3.16),k.add(he),X(5.2,3.3,W+11.2,1.3);let J=new De(I(10.8,7.2,3.6,5.2,.48,.26),N);J.position.set(0,W+11.7,Le),J.castShadow=!0,k.add(J);let ee=new De(new yt(7.6,.6,1.05),N);ee.position.set(0,W+17.1,Le),k.add(ee),[-1,1].forEach(oe=>{let ie=new De(new Ja(.46,1.15,4),N);ie.position.set(oe*3.9,W+17.6,Le),ie.rotation.y=Math.PI/4,k.add(ie)}),O.templeTop=W+18.2,[-1,1].forEach(oe=>{let ie=new De(new yt(7.6,3.4,5.2),P);ie.position.set(oe*10.6,W+1.7,Le+1.4),ie.castShadow=!0,k.add(ie);for(let Ue=0;Ue<3;Ue++)U(1.3,1.6,oe*10.6+(Ue-1)*2.4,W+1.8,Le+4.06);let Re=new De(I(5,4,1.4,1.9,.32,.26),N);Re.position.set(oe*10.6,W+3.4,Le+1.4),Re.castShadow=!0,k.add(Re)}),fe.add(k),O.temple=k;let j=new De(new Yt(30,16),new cn({map:nt(ve("rgba(255,150,66,.80)","rgba(240,96,26,.24)")),transparent:!0,blending:qn,depthWrite:!1,fog:!1,opacity:.3}));j.position.set(0,W+3,Le+5.6),j.renderOrder=2,fe.add(j),O.hallHalo=j;let me=new De(new Yt(64,20),new cn({map:nt(ve("rgba(150,178,190,.62)","rgba(104,138,154,.20)")),transparent:!0,blending:qn,depthWrite:!1,fog:!1,opacity:.17}));me.position.set(0,W-1.4,Le+10),me.renderOrder=2,fe.add(me)}let He={x:17.9,y:31.9,z:-72,r:8.6};function Xe(){let k=new De(new Yt(He.r*2,He.r*2),new cn({map:nt(de()),color:rn(3.6,.64,.61),transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1}));k.position.set(He.x,He.y,He.z),k.renderOrder=1,fe.add(k),O.moon=k;let P=new De(new Yt(He.r*6.4,He.r*6.4),new cn({map:nt(ve("rgba(255,124,112,.90)","rgba(206,52,48,.26)")),transparent:!0,blending:qn,depthWrite:!1,fog:!1,opacity:.44}));P.position.set(He.x,He.y,He.z-.3),P.renderOrder=0,fe.add(P),O.moonHalo=P}function dt(){if(!O.moon)return;let k=He.x*(1-.4*Ui());O.moon.position.x=k,O.moonHalo.position.x=k}function Ct(){let k=Ft(Mt("lacquer",()=>A()),[2,2],{color:rn(1.72,1.02,.94),roughness:.92,metalness:.05,normal:.75}),P=new Yn({color:8019242,roughness:.5,metalness:.6}),M=new zi,w=.78,R=8.2,N=3.55;[-1,1].forEach(ye=>{let xe=new De(new Xn(.3,.38,R,26),k);xe.position.set(ye*N,w+R/2,0),xe.castShadow=!0,M.add(xe);let Q=new De(new Xn(.46,.5,.52,26),P);Q.position.set(ye*N,w+.26,0),Q.castShadow=!0,M.add(Q);let he=new De(new Xn(.345,.345,.26,26),P);he.position.set(ye*N,w+R-1.42,0),M.add(he);let J=new De(new yt(.86,.3,.86),P);J.position.set(ye*N,w+R-.72,0),M.add(J);let ee=new De(new yt(.6,.52,.6),P);ee.position.set(ye*N,w+R-.34,0),M.add(ee),[-1,1].forEach(j=>{let me=new De(new yt(.24,.7,.18),P);me.position.set(ye*N+j*.4,w+R-.62,.3),M.add(me);let oe=me.clone();oe.position.z=-.3,M.add(oe)})});let L=new De(new yt(9.4,.52,.46),k);L.position.set(0,w+R-2.15,0),L.castShadow=!0,M.add(L);let Y=new De(new yt(.46,1.22,.4),k);Y.position.set(0,w+R+.1,0),M.add(Y);let U=new De(new yt(.6,.18,.5),P);U.position.set(0,w+R+.68,0),M.add(U);function X(ye,xe,Q){let he=[];for(let J=0;J<=26;J++){let ee=J/26*2-1;he.push(new F(ee*ye,Math.pow(Math.abs(ee),Q)*xe,0))}return he}let W=new De(Rn(X(5.05,.4,2.6),[[-.3,-.19],[.3,-.19],[.32,.06],[.28,.21],[-.28,.21],[-.32,.06]]),k);W.position.set(0,w+R-.52,0),W.castShadow=!0,M.add(W);let B=new De(Rn(X(5.85,.62,2.4),[[-.42,-.24],[.42,-.24],[.46,.04],[.3,.28],[-.3,.28],[-.46,.04]]),k);B.position.set(0,w+R+.96,0),B.castShadow=!0,M.add(B);let ae=new De(Rn(X(5.95,.62,2.4),[[-.48,.22],[.48,.22],[.48,.34],[-.48,.34]]),new Yn({color:1182732,roughness:.42,metalness:.14}));ae.position.set(0,w+R+.96,0),M.add(ae);let ue=.72;M.position.set(0,-w*ue,-8.6),M.scale.setScalar(ue),fe.add(M),O.torii=M}function Ot(k,P,M,w){let R=Mt("lanternStone",()=>Ft(Mt("granite",()=>S(17)),[1.5,1.5],{color:10134949,metalness:0,normal:1.45})),N=Mt("lanternDark",()=>Ft(ui(),[.9,.9],{color:14205622,metalness:.1,normal:.7})),L=new zi,Y=new De(new Xn(.44,.52,.26,20),R);Y.position.y=.13,Y.castShadow=!0,L.add(Y);let U=new De(new Xn(.15,.18,1.02,16),R);U.position.y=.77,U.castShadow=!0,L.add(U);let X=new De(new Xn(.42,.34,.13,20),R);X.position.y=1.34,X.castShadow=!0,L.add(X);let W=new De(new yt(.5,.5,.5),N);W.position.y=1.66,W.castShadow=!0,L.add(W);let B=new cn({color:rn(2.3,.3,.085),fog:!1,toneMapped:!1});[[0,0,.256,0],[0,0,-.256,Math.PI],[.256,0,0,Math.PI/2],[-.256,0,0,-Math.PI/2]].forEach(J=>{let ee=new De(new Yt(.34,.34),B);ee.position.set(J[0],1.66,J[2]),ee.rotation.y=J[3],L.add(ee)}),O.lanternPane=O.lanternPane||B;let ae=new De(new Xn(.1,.62,.34,4,1),R);ae.position.y=2.06,ae.rotation.y=Math.PI/4,ae.castShadow=!0,L.add(ae);let ue=new De(new Xn(.66,.7,.07,4,1),R);ue.position.y=1.93,ue.rotation.y=Math.PI/4,L.add(ue);let ye=new De(new yu(.09,12,10),R);ye.position.y=2.28,L.add(ye);let xe=new De(new Ja(.055,.16,10),R);xe.position.y=2.4,L.add(xe);let Q=new De(new Yt(3.4,3.4),new cn({map:nt(ve("rgba(255,120,60,.9)","rgba(255,60,24,.28)")),transparent:!0,blending:qn,depthWrite:!1,fog:!1,opacity:.5}));Q.position.y=1.66,Q.renderOrder=2,L.add(Q),Q.userData.billboard=!0;let he=new _r(16734756,2.6,9,2);return he.position.set(0,1.66,0),L.add(he),O.lanternLights=O.lanternLights||[],O.lanternLights.push(he),O.lanternGlows=O.lanternGlows||[],O.lanternGlows.push(Q),L.position.set(k,w||0,P),L.scale.setScalar(M||1),fe.add(L),L}function H(k,P,M,w){let R=x(k),N=[],L=[],Y=new wt,U=new Si,X=new F(0,1,0),W=new F,B=new F;function ae(je,pt,Ze,xt){W.subVectors(pt,je);let Ut=W.length();W.normalize();let Rt=new Xn(xt,Ze,Ut,6,1,!0);U.setFromUnitVectors(X,W),B.addVectors(je,pt).multiplyScalar(.5),Y.compose(B,U,new F(1,1,1)),Rt.applyMatrix4(Y),N.push(Rt)}function ue(je,pt,Ze,xt,Ut){let Rt=je.clone().addScaledVector(pt,Ze);if(Rt.y+=Ze*.1,ae(je,Rt,xt,xt*.68),Ut>=4||Ze<.34){L.push(Rt.clone());return}let hn=Ut<2?3:2;for(let _n=0;_n<hn;_n++){let Mi=pt.clone();Mi.x+=(R()-.5)*1.25,Mi.z+=(R()-.5)*1.25,Mi.y+=.3+R()*.5,Mi.normalize(),ue(Rt,Mi,Ze*(.62+R()*.16),xt*.66,Ut+1)}}let ye=new F(0,0,0);ae(ye,new F(0,1.5,0),.22,.16);for(let je=0;je<4;je++){let pt=je/4*u+R();ue(new F(0,1.5,0),new F(Math.cos(pt)*.8,.8,Math.sin(pt)*.8).normalize(),1.45,.155,0)}let xe=new De(E(N),new Yn({color:1512467,roughness:.94,metalness:0,side:ri}));xe.castShadow=!0;let Q=new Yt(.36,.36),he=new Yn({map:nt(re()),color:2819078,alphaTest:.42,side:ri,roughness:.86,metalness:0,emissive:524288,emissiveIntensity:.12}),J=Fe?5:9,ee=new Za(Q,he,L.length*J),j=new wt,me=new Ts,oe=new Si,ie=new F,Re=0;L.forEach(je=>{for(let pt=0;pt<J;pt++){let Ze=new F(je.x+(R()-.5)*.95,je.y+(R()-.5)*.8,je.z+(R()-.5)*.95);me.set(R()*u,R()*u,R()*u),oe.setFromEuler(me);let xt=.7+R()*.75;ie.set(xt,xt,xt),j.compose(Ze,oe,ie),ee.setMatrixAt(Re++,j)}}),ee.instanceMatrix.needsUpdate=!0,ee.castShadow=!1,ee.frustumCulled=!1;let Ue=new zi;return Ue.add(xe),Ue.add(ee),Ue.position.set(P,0,M),Ue.scale.setScalar(w||1),Ue.rotation.y=R()*u,fe.add(Ue),he.onBeforeCompile=je=>{je.uniforms.uT=O.uT,je.vertexShader=`uniform float uT;
`+je.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vec3 wp = (instanceMatrix * vec4(0.0,0.0,0.0,1.0)).xyz;
float ph = wp.x*1.7 + wp.z*1.3 + wp.y*.7;
transformed.x += sin(uT*1.35 + ph)*0.055;
transformed.z += cos(uT*1.05 + ph*1.3)*0.045;
`)},Ue}function te(){let k=new Yn({color:1317404,roughness:.46,metalness:.1}),P=x(404),M=f(88);[[-6.2,-5.4,.95],[-7.4,-2.1,.7],[6.6,-7.2,.8],[8,-4,1.05],[-9,-8.4,1.15],[9.6,-9.2,.9],[3.4,-7.8,.55],[-3.2,-8.6,.6]].forEach((R,N)=>{let L=new gu(R[2],2),Y=L.attributes.position;for(let X=0;X<Y.count;X++){let W=Y.getX(X),B=Y.getY(X),ae=Y.getZ(X),ue=1+.34*p(M,W*1.6+N*7,ae*1.6+B,3,2.2,.5);Y.setXYZ(X,W*ue,B*ue*.68,ae*ue)}L.computeVertexNormals();let U=new De(L,k);U.position.set(R[0],R[2]*.3,R[1]),U.rotation.set(P(),P()*u,P()*.4),U.castShadow=!0,U.receiveShadow=!0,fe.add(U)})}function be(k,P){let M=new cn({map:nt(k,{aniso:16}),transparent:!0,depthWrite:!0,alphaTest:.012,side:ri,fog:!0,color:16777215});return M.onBeforeCompile=w=>{w.uniforms.uT=O.uT,w.uniforms.uSway={value:P||.07},w.vertexShader=`uniform float uT;
uniform float uSway;
`+w.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
float h = uv.y;
float ph = position.x*0.30 + float(gl_InstanceID)*0.0;
transformed.x += sin(uT*0.85 + ph)*uSway*h*h;
transformed.y += cos(uT*0.62 + ph*1.7)*uSway*0.35*h*h;
`),w.fragmentShader=w.fragmentShader.replace("#include <alphatest_fragment>",`float feX = smoothstep(0.0, 0.11, vUv.x) * (1.0 - smoothstep(0.89, 1.0, vUv.x));
float feY = smoothstep(0.0, 0.07, vUv.y);
diffuseColor.a *= feX * feY;
#include <alphatest_fragment>`)},M}function ze(){let k=[["grassFar",ge(101,{crest:.3,peak:.46,wide:.42,blades:11e3,len:34,warm:.7,crest2:.46,crest3:.4}),-3.4,2.85,-.4,24,12,.04],["rockLeft",Ae(404,{blobs:[[.24,.78,.48,.38],[.58,.94,.46,.3],[.84,1.06,.42,.28]]}),-7.2,2.55,1.8,17,11.3,.01],["grassMid",ge(202,{crest:.6,peak:.55,wide:.4,blades:13e3,len:40,warm:.95,crest2:-.44,crest3:.34}),3.9,2.86,3.6,15,7.5,.062],["grassNear",ge(303,{crest:.42,peak:.62,wide:.48,blades:16e3,len:50,warm:.85,crest2:.42,crest3:.44}),-1.9,2.92,5.6,12,6,.092],["bough",Se(505),4.6,2.95,6.4,13,8.7,.045],["rockNear",Ae(606,{blobs:[[.18,.86,.54,.44],[.54,1.02,.5,.36],[.86,.92,.4,.32]]}),-6.6,1.7,6,9,6,.008]];O.fg=[],k.forEach(P=>{let M=new De(new Yt(P[5],P[6],12,12),be(P[1],P[7]));M.position.set(P[2],P[3],P[4]),M.renderOrder=20+O.fg.length,M.name=P[0],M.frustumCulled=!1,fe.add(M),O.fg.push(M)})}function qe(){let k=nt(ve("rgba(160,205,210,.55)","rgba(110,165,175,.18)"));O.haze=[];let P=x(66);for(let B=0;B<(Fe?4:6);B++){let ae=12+P()*15,ue=new De(new Yt(ae,ae*.55),new cn({map:k,transparent:!0,blending:qn,depthWrite:!1,fog:!1,opacity:.05+P()*.07}));ue.position.set((P()-.5)*44,1.5+P()*10,-38+P()*40),ue.renderOrder=4,ue.userData={sp:.06+P()*.12,ph:P()*u,x0:ue.position.x},fe.add(ue),O.haze.push(ue)}let M=Fe?220:460,w=new Float32Array(M*3),R=new Float32Array(M);for(let B=0;B<M;B++)w[B*3]=(P()-.5)*30,w[B*3+1]=P()*11,w[B*3+2]=-26+P()*36,R[B]=P();let N=new en;N.setAttribute("position",new Tt(w,3)),N.setAttribute("aSeed",new Tt(R,1));let L=new $a(N,new yn({uniforms:{uT:O.uT,uTex:{value:nt(ve("rgba(255,190,140,1)","rgba(255,120,60,.35)"))},uSize:{value:$()*.5}},transparent:!0,blending:qn,depthWrite:!1,vertexShader:`attribute float aSeed; uniform float uT; uniform float uSize; varying float vA;
void main(){ vec3 p=position;
 p.y = mod(p.y + uT*(0.14+aSeed*0.28), 11.5);
 p.x += sin(uT*0.36 + aSeed*22.0)*0.85;
 p.z += cos(uT*0.29 + aSeed*17.0)*0.7;
 vec4 mv = modelViewMatrix * vec4(p,1.0);
 vA = (0.25+aSeed*0.75) * smoothstep(11.5,7.0,p.y) * smoothstep(0.0,1.4,p.y);
 gl_PointSize = uSize*(0.010+aSeed*0.020)/max(-mv.z,0.6);
 gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D uTex; varying float vA;
void main(){ vec4 t=texture2D(uTex, gl_PointCoord);
 gl_FragColor = vec4(t.rgb*vec3(1.6,0.78,0.42), t.a*vA*0.75); }`}));if(L.frustumCulled=!1,L.renderOrder=5,fe.add(L),O.embers=L,!Fe){let ae=new Float32Array(5400),ue=new Float32Array(900*2),ye=new Float32Array(900*2),xe=new Float32Array(900*2);for(let J=0;J<900;J++){let ee=(P()-.5)*40,j=-30+P()*34,me=P()*17,oe=7+P()*9,ie=.3+P()*.55;for(let Re=0;Re<2;Re++){let Ue=(J*2+Re)*3;ae[Ue]=ee,ae[Ue+1]=me,ae[Ue+2]=j,ue[J*2+Re]=Re,ye[J*2+Re]=oe,xe[J*2+Re]=ie}}let Q=new en;Q.setAttribute("position",new Tt(ae,3)),Q.setAttribute("aTop",new Tt(ue,1)),Q.setAttribute("aSpeed",new Tt(ye,1)),Q.setAttribute("aLen",new Tt(xe,1));let he=new pu(Q,new yn({uniforms:{uT:O.uT},transparent:!0,blending:qn,depthWrite:!1,vertexShader:`attribute float aTop; attribute float aSpeed; attribute float aLen; uniform float uT; varying float vA;
void main(){ vec3 p=position;
 float y = mod(p.y - uT*aSpeed, 17.0);
 p.y = y + aTop*aLen;
 vA = smoothstep(0.0,3.0,y)*smoothstep(17.0,11.0,y);
 gl_Position = projectionMatrix * modelViewMatrix * vec4(p,1.0); }`,fragmentShader:`varying float vA;
void main(){ gl_FragColor = vec4(0.55,0.74,0.82, vA*0.024); }`}));he.frustumCulled=!1,he.renderOrder=6,fe.add(he),O.rain=he}let Y=g(256,256),U=Y.getContext("2d"),X=U.createRadialGradient(128,128,84,128,128,128);X.addColorStop(0,"rgba(255,255,255,0)"),X.addColorStop(.62,"rgba(255,255,255,.55)"),X.addColorStop(.86,"rgba(255,255,255,.22)"),X.addColorStop(1,"rgba(255,255,255,0)"),U.fillStyle=X,U.fillRect(0,0,256,256);let W=nt(Y);O.ripples=[];for(let B=0;B<(Fe?6:13);B++){let ae=new De(new Yt(1,1),new cn({map:W,transparent:!0,blending:qn,depthWrite:!1,fog:!0,opacity:0}));ae.rotation.x=-Math.PI/2,ae.renderOrder=7,ae.userData={t:P()*4,x:(P()-.5)*22,z:-8+P()*22,sp:.5+P()*.5},fe.add(ae),O.ripples.push(ae)}}let ft=11,Zt=12,bt=30;function $i(){let k=Fe?110:260,P=new Yn({map:nt(re()),alphaTest:.42,side:ri,color:4196362,roughness:.84,metalness:0,emissive:7864832,emissiveIntensity:.72}),M=new Za(new Yt(.4,.4),P,k);M.frustumCulled=!1,M.renderOrder=5,M.castShadow=M.receiveShadow=!1;let w=x(404),R=[];for(let N=0;N<k;N++)R.push({x:(w()-.5)*2*bt,z:(w()-.5)*2*bt,y:w()*26,fall:.5+w()*.9,sway:.45+w()*1.5,swayPh:w()*u,swayAmp:.3+w()*.95,spin:(w()-.5)*2.6,roll:w()*u,rollSp:.5+w()*2,tilt:w()*u,s:.55+w()*.9});fe.add(M),O.leaves={mesh:M,list:R}}let Et=new wt,hi=new Si,Pn=new Ts,Fo=new F,il=new F,ji=new F;function bu(k){let P=O.leaves;if(!P)return;let M=we.position.y,w=P.list;we.getWorldDirection(ji),ji.y=0,ji.lengthSq()<1e-6?ji.set(0,0,-1):ji.normalize();let R=we.position.x+ji.x*ft,N=we.position.z+ji.z*ft,L=!P.seeded;P.seeded=!0;for(let Y=0;Y<w.length;Y++){let U=w[Y];if(U.y-=U.fall*k,U.roll+=U.rollSp*k,U.tilt+=U.spin*k,L||U.y<M-10){U.y=L?M-10+Math.random()*26:M+16;let ae=Math.random()*u,ue=Math.sqrt(Math.random())*Zt;U.x=R+Math.cos(ae)*ue,U.z=N+Math.sin(ae)*ue}let X=we.position.x,W=we.position.z;U.x-X>bt?U.x-=2*bt:U.x-X<-bt&&(U.x+=2*bt),U.z-W>bt?U.z-=2*bt:U.z-W<-bt&&(U.z+=2*bt);let B=Math.sin(xn*U.sway+U.swayPh);Fo.set(U.x+B*U.swayAmp,U.y,U.z+Math.cos(xn*U.sway*.7+U.swayPh)*U.swayAmp*.6),Pn.set(U.roll,U.tilt,B*.55),hi.setFromEuler(Pn),il.setScalar(U.s),Et.compose(Fo,hi,il),P.mesh.setMatrixAt(Y,Et)}P.mesh.instanceMatrix.needsUpdate=!0}let T=3.4,V={list:[],i:0,acc:0,ex:0,ey:0,lx:0,ly:0,idle:0,seen:!1};function ne(){if(s)return;let k=Fe?90:190,P=new en;P.setAttribute("position",new Tt(new Float32Array(k*3),3)),P.setAttribute("aA",new Tt(new Float32Array(k),1)),P.setAttribute("aS",new Tt(new Float32Array(k),1));let M=new $a(P,new yn({uniforms:{uTex:{value:nt(Ce())},uPx:{value:$()}},transparent:!0,blending:qn,depthWrite:!1,depthTest:!1,fog:!1,vertexShader:`attribute float aA; attribute float aS;
uniform float uPx; varying float vA;
void main(){ vA = aA;
 vec4 mv = modelViewMatrix * vec4(position,1.0);
 gl_PointSize = uPx * aS / max(-mv.z, 0.4);
 gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D uTex; varying float vA;
void main(){ if (vA <= 0.0) discard;
 vec4 t = texture2D(uTex, gl_PointCoord);
 gl_FragColor = vec4(t.rgb, t.a * vA); }`}));M.frustumCulled=!1,M.renderOrder=9,M.layers.set(1),we.add(M),V.mesh=M;for(let w=0;w<k;w++)V.list.push({life:0,max:1,vx:0,vy:0,sz:0,ph:0})}function q(k,P){let M=Math.tan(we.fov*Math.PI/360)*T;return[k*M*we.aspect,P*M]}function ce(k){if(!V.mesh)return;let P=V.mesh.geometry,M=P.attributes.position.array,w=P.attributes.aA.array,R=P.attributes.aS.array,N=V.list,L=N.length,Y=q(Ke.tmx,Ke.tmy);V.seen||(V.ex=V.lx=Y[0],V.ey=V.ly=Y[1],V.seen=!0),V.ex=m(V.ex,Y[0],16,k),V.ey=m(V.ey,Y[1],16,k);let U=V.ex-V.lx,X=V.ey-V.ly,W=Math.hypot(U,X),B=W>1e-5?Math.atan2(X,U):0,ae=(xe,Q,he,J)=>{let ee=V.i;V.i=(ee+1)%L;let j=N[ee],me=ee*3;M[me]=xe+(Math.random()+Math.random()-1)*.3,M[me+1]=Q+(Math.random()+Math.random()-1)*.3,M[me+2]=-T+(Math.random()-.5)*.9,j.life=0,j.max=(J?2.1:1.45)+Math.random()*1.3,j.vx=-Math.cos(he)*.09+(Math.random()-.5)*.38,j.vy=-Math.sin(he)*.09+(Math.random()-.5)*.32+.02,j.sz=(J?.018:.024)+Math.random()*.026,j.ph=Math.random()*u};V.acc+=W;let ue=.03,ye=0;for(;V.acc>=ue&&ye++<14;){V.acc-=ue;let xe=W>1e-6?Math.min(1,ye*ue/W):0;ae(V.lx+U*xe,V.ly+X*xe,B,!1)}V.idle+=k,V.idle>.42&&(V.idle=0,ae(V.ex,V.ey,Math.random()*u,!0)),V.lx=V.ex,V.ly=V.ey;for(let xe=0;xe<L;xe++){let Q=N[xe],he=xe*3;if(Q.life>=Q.max){w[xe]=0;continue}Q.life+=k;let J=Q.life/Q.max;M[he]+=(Q.vx+Math.sin(xn*1.3+Q.ph)*.17)*k,M[he+1]+=(Q.vy+Math.cos(xn*1.1+Q.ph*1.7)*.14)*k,Q.vx*=1-.5*k,Q.vy=Q.vy*(1-.5*k)+.022*k,w[xe]=c(0,.12,J)*(1-c(.22,1,J))*.9,R[xe]=Q.sz*(1+J*.55)}P.attributes.position.needsUpdate=!0,P.attributes.aA.needsUpdate=!0,P.attributes.aS.needsUpdate=!0}function Ye(){fe.add(new vu(5473167,395784,.13));let k=new el(11983844,1.22);if(k.position.set(2.6,21,2.5),k.target.position.set(0,2.2,-12.5),fe.add(k.target),Ne){k.castShadow=!0;let L=Fe?1024:2048;k.shadow.mapSize.set(L,L);let Y=k.shadow.camera;Y.left=-26,Y.right=26,Y.top=34,Y.bottom=-16,Y.near=3,Y.far=78,k.shadow.bias=-.0012,k.shadow.normalBias=.035,k.shadow.radius=2.2}fe.add(k),O.key=k;let P=new el(16738882,.52);P.position.set(26,30,-60),P.target.position.set(0,8,-40),fe.add(P.target),fe.add(P);let M=new _r(16747046,2.3,15,2);M.position.set(0,Ee+1.2,Le+8.6),fe.add(M),O.hallLight=M,[-1,1].forEach(L=>{let Y=new _r(16745504,2.2,11,2);Y.position.set(L*11.4,Ee+1.2,Le+5.6),fe.add(Y)});let w=new _r(16726556,3,46,2);w.position.set(11,17,-24),fe.add(w),O.moonLight=w;let R=new _r(8832722,.95,30,2);R.position.set(-1,13.5,-16),fe.add(R);let N=new _r(16752713,4.2,17,2);N.position.set(0,7.6,-26),fe.add(N)}let _e={levels:[]},tt=`varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4( position.xy, 0.0, 1.0 ); }`;function ot(){if(_e.cam=new Do(-1,1,1,-1,0,1),_e.quad=new De(new Yt(2,2),null),_e.quad.frustumCulled=!1,_e.qScene=new Ya,_e.qScene.add(_e.quad),_e.up=new yn({uniforms:{tS:{value:null},uAmt:{value:1}},vertexShader:tt,fragmentShader:`uniform sampler2D tS; uniform float uAmt; varying vec2 vUv;
void main(){ gl_FragColor = vec4(texture2D(tS,vUv).rgb*uAmt, 1.0); }`,blending:qn,transparent:!0,depthTest:!1,depthWrite:!1}),!Be)return;let k=le.domElement.width,P=le.domElement.height,M={minFilter:On,magFilter:On,type:Ms,depthBuffer:!1,stencilBuffer:!1};_e.scene=new li(k,P,Object.assign({},M,{depthBuffer:!0,samples:Fe?0:2}));let w=Math.max(2,k>>1),R=Math.max(2,P>>1),N=4;for(let L=0;L<N;L++)_e.levels.push({a:new li(w,R,M),b:new li(w,R,M),w,h:R}),w=Math.max(2,w>>1),R=Math.max(2,R>>1);_e.bright=new yn({uniforms:{tS:{value:null},uThr:{value:.86},uKnee:{value:.5}},vertexShader:tt,fragmentShader:`uniform sampler2D tS; uniform float uThr; uniform float uKnee; varying vec2 vUv;
void main(){ vec3 c = texture2D(tS, vUv).rgb;
 float l = dot(c, vec3(0.2126,0.7152,0.0722));
 float k = smoothstep(uThr, uThr+uKnee, l);
 gl_FragColor = vec4(c*k, 1.0); }`}),_e.blur=new yn({uniforms:{tS:{value:null},uDir:{value:new rt(1,0)}},vertexShader:tt,fragmentShader:`uniform sampler2D tS; uniform vec2 uDir; varying vec2 vUv;
void main(){ vec3 c = texture2D(tS, vUv).rgb * 0.2270270270;
 c += texture2D(tS, vUv + uDir*1.3846153846).rgb * 0.3162162162;
 c += texture2D(tS, vUv - uDir*1.3846153846).rgb * 0.3162162162;
 c += texture2D(tS, vUv + uDir*3.2307692308).rgb * 0.0702702703;
 c += texture2D(tS, vUv - uDir*3.2307692308).rgb * 0.0702702703;
 gl_FragColor = vec4(c, 1.0); }`}),_e.comp=new yn({uniforms:{tS:{value:null},tB:{value:null},uRes:{value:new rt(k,P)},uT:{value:0},uBloom:{value:.34},uCA:{value:1},uGrain:{value:.02},uVig:{value:1},uExp:{value:.62},uFade:{value:1},uSat:{value:1.05}},vertexShader:tt,fragmentShader:`uniform sampler2D tS; uniform sampler2D tB; uniform vec2 uRes;
uniform float uT, uBloom, uCA, uGrain, uVig, uExp, uFade, uSat;
varying vec2 vUv;
vec3 aces(vec3 x){ return clamp((x*(2.51*x+0.03))/(x*(2.43*x+0.59)+0.14), 0.0, 1.0); }
void main(){
 vec2 d = vUv - 0.5; float r2 = dot(d,d);
 float ca = uCA * (0.30 + r2*2.6) * 0.0013;
 vec3 c;
 c.r = texture2D(tS, vUv + d*ca).r;
 c.g = texture2D(tS, vUv).g;
 c.b = texture2D(tS, vUv - d*ca).b;
 c += texture2D(tB, vUv).rgb * uBloom;
 c *= uExp;
 c = aces(c);
 float l = dot(c, vec3(0.2126,0.7152,0.0722));
 c = mix(vec3(l), c, uSat);
 c = mix(c, c*vec3(0.74,1.03,1.11), smoothstep(0.55,0.0,l)*0.80);
 c = mix(c, c*vec3(1.035,0.995,0.968), smoothstep(0.50,1.0,l)*0.26);
 float v = smoothstep(1.22, 0.26, length(d*vec2(1.0,0.94))*1.42);
 c *= mix(1.0, v, uVig);
 float g = fract(sin(dot(vUv*uRes + uT*137.0, vec2(12.9898,78.233)))*43758.5453);
 c += (g-0.5)*uGrain;
 c *= uFade;
 vec3 e = pow(max(c,0.0), vec3(1.0/2.2));
 e = clamp((e - 0.30) * 1.00 + 0.30, 0.0, 1.0);
 gl_FragColor = vec4( e, 1.0 );
}`})}function at(k,P,M){_e.quad.material=k,le.setRenderTarget(P||null),M||le.clear(!0,!1,!1),le.render(_e.qScene,_e.cam)}function ut(){let k=_e.levels;_e.bright.uniforms.tS.value=_e.scene.texture,at(_e.bright,k[0].a);for(let P=0;P<k.length;P++)P>0&&(_e.up.blending=Zi,_e.up.uniforms.uAmt.value=1,_e.up.uniforms.tS.value=k[P-1].a,at(_e.up,k[P].a)),_e.blur.uniforms.tS.value=k[P].a,_e.blur.uniforms.uDir.value.set(1/k[P].w,0),at(_e.blur,k[P].b),_e.blur.uniforms.tS.value=k[P].b,_e.blur.uniforms.uDir.value.set(0,1/k[P].h),at(_e.blur,k[P].a);_e.up.blending=qn,_e.up.uniforms.uAmt.value=.52;for(let P=k.length-1;P>0;P--)_e.up.uniforms.tS.value=k[P].a,at(_e.up,k[P-1].a,!0);_e.comp.uniforms.tS.value=_e.scene.texture,_e.comp.uniforms.tB.value=k[0].a,at(_e.comp,null)}let st=[{p:[0,4.05,13.6],t:[0,6.6,-18],fov:36},{p:[-5.6,2.35,11.6],t:[1.2,5.6,-14],fov:48},{p:[1.2,3.6,2.2],t:[-.6,7.5,-22],fov:40},{p:[5.2,2.1,-3.4],t:[-2.6,7,-20],fov:46},{p:[0,7.6,-16],t:[0,13,-40],fov:42},{p:[0,10.5,-20],t:[0,3,-34],fov:46}],Ke={prog:0,smooth:0,mx:0,my:0,tmx:0,tmy:0,intro:0,focus:-1,focusAmt:0},vn,di,Ji;function Wt(){vn=new ja(st.map(k=>new F(k.p[0],k.p[1],k.p[2])),!1,"catmullrom",.42),di=new ja(st.map(k=>new F(k.t[0],k.t[1],k.t[2])),!1,"catmullrom",.42),Ji=new mn(st[0].fov,We()/$(),.35,220),we.layers.enable(1),we.layers.enable(2)}let it=new F,Ki=new F,qt=new F;function Ui(){return o((1.62-We()/$())/1.05,0,1)}function rl(k,P,M){let w=Ui();return w<=0?M:(qt.subVectors(k,P).normalize(),k.addScaledVector(qt,w*8.2),k.y+=w*1.1,M*(1+w*.4))}function wr(){let k=st.length-1,P=o(Ke.smooth/k,0,1);vn.getPoint(P,it),di.getPoint(P,Ki);let M=o(Math.floor(Ke.smooth),0,k-1),w=o(Ke.smooth-M,0,1),R=l(st[M].fov,st[M+1].fov,w);R=rl(it,Ki,R);let N=1-Ke.intro;it.z+=N*5.6,it.y+=N*.65,R+=N*8;let L=1-c(0,1.6,Ke.smooth)*.55;it.x+=Ke.mx*.62*L,it.y+=Ke.my*.34*L,Ki.x-=Ke.mx*.2*L,Ki.y-=Ke.my*.12*L,we.position.copy(it),we.lookAt(Ki),Math.abs(we.fov-R)>1e-4&&(we.fov=R,we.updateProjectionMatrix())}function Sr(){let k=We(),P=$();le.setPixelRatio(Math.min(devicePixelRatio||1,vt)*Ge.scale),le.setSize(k,P,!0),we.aspect=k/P,we.updateProjectionMatrix();let M=le.domElement.width,w=le.domElement.height;if(Be&&_e.scene){_e.scene.setSize(M,w),_e.comp.uniforms.uRes.value.set(M,w);let R=Math.max(2,M>>1),N=Math.max(2,w>>1);_e.levels.forEach(L=>{L.a.setSize(R,N),L.b.setSize(R,N),L.w=R,L.h=N,R=Math.max(2,R>>1),N=Math.max(2,N>>1)})}if(_e.scene){let R=!Fe&&Ge.scale>.78?2:0;_e.scene.samples!==R&&(_e.scene.samples=R,_e.scene.dispose())}Ne&&O.key&&(O.key.shadow.needsUpdate=!0),O.embers&&(O.embers.material.uniforms.uSize.value=P*le.getPixelRatio()*.5),V.mesh&&(V.mesh.material.uniforms.uPx.value=P*le.getPixelRatio()),dt()}function sn(k){O.uT.value=xn,Ke.focusAmt=m(Ke.focusAmt,Ke.focus>=0?1:0,5,k);let P=Math.sin(xn*1.9)*.5+.5,M=Ke.focusAmt;O.hallHalo&&(O.hallHalo.material.opacity=.3+M*.14+Math.sin(xn*.6)*.035),O.hallLight&&(O.hallLight.intensity=3.4*(1+M*.3)*(1+Math.sin(xn*.43)*.045)),O.moonHalo&&(O.moonHalo.material.opacity=.44+M*.1+Math.sin(xn*.34)*.05),O.lanternLights&&O.lanternLights.forEach((w,R)=>{w.intensity=2.6*(1+M*.55)*(.86+.22*Math.sin(xn*(2.3+R*.7)+R*2.1)+.1*P)}),O.lanternGlows&&O.lanternGlows.forEach(w=>{w.quaternion.copy(we.quaternion)}),O.haze&&O.haze.forEach(w=>{w.position.x=w.userData.x0+Math.sin(xn*w.userData.sp+w.userData.ph)*5.5,w.quaternion.copy(we.quaternion)}),O.ripples&&O.ripples.forEach(w=>{let R=w.userData;R.t+=k*R.sp,R.t>4&&(R.t=0,R.x=(Math.random()-.5)*22,R.z=-8+Math.random()*22);let N=R.t/4,L=.3+N*4.2;w.scale.set(L,L,1),w.position.set(R.x,.02,R.z),w.material.opacity=Math.sin(N*Math.PI)*.16}),O.fg&&O.fg.forEach(w=>{let R=c(.9,4.6,we.position.z-w.position.z);w.material.opacity=R,w.visible=R>.006}),bu(k),ce(k)}let Qi=0;function Rs(){Qi++,le.setRenderTarget(Be?_e.scene:null),le.clear(!0,!0,!1),le.render(fe,we),le.setRenderTarget(null),Be&&(_e.comp.uniforms.uT.value=xn,_e.comp.uniforms.uFade.value=Ps,ut())}let un=!1,Jr=0,xn=0,Ps=1;function Kv(k){if(un)return;let P=Jr?(k-Jr)/1e3:0,M=Math.min(P,.05);if(Jr=k,xn+=M,Ps=1,!Ge.locked&&xn>2.2&&(Ge.acc+=P,Ge.n++,Ge.n>=40||Ge.acc>.9)){let w=Ge.acc/Ge.n;Ge.acc=0,Ge.n=0,w>.023&&Ge.scale>.55?(Ge.scale=Math.max(.55,Ge.scale*(w>.05?.64:.85)),Sr()):w<.0138&&Ge.scale<1&&(Ge.scale=Math.min(1,Ge.scale+.08),Sr())}Ke.prog=0,Ke.smooth=0,Ke.intro=1,Ke.mx=m(Ke.mx,Ke.tmx,2.6,M),Ke.my=m(Ke.my,Ke.tmy,2.6,M),wr(),sn(M),Rs()}function Sp(k,P){for(let M of Object.values(k))M?.isTexture&&P.add(M);for(let M of Object.values(k.uniforms||{})){let w=M?.value;w?.isTexture&&P.add(w)}k.dispose?.()}function Mp(){if(un)return;un=!0;let k=new Set,P=new Set,M=new Set;fe?.traverse(w=>{w.geometry&&k.add(w.geometry),(Array.isArray(w.material)?w.material:w.material?[w.material]:[]).forEach(N=>P.add(N))});for(let w of k)w.dispose?.();for(let w of P)Sp(w,M);for(let w of[_e.up,_e.bright,_e.blur,_e.comp])w&&!P.has(w)&&Sp(w,M);_e.quad?.geometry?.dispose?.(),_e.scene?.dispose?.(),_e.levels.forEach(w=>{w.a.dispose(),w.b.dispose()});for(let w of M)w.dispose?.();le?.dispose?.()}try{Je(),O.uT={value:0},Wt(),Ye(),$e(),Ve(),Xe(),Ct(),te(),Ot(7.4,-7,1.15),Ot(-7.6,-5.2,1);let k=w=>Math.max(0,(Qe-w)/Ie-.5),P=w=>(k(w)+1)*(Ee/ke)+.45,M=w=>(pe+(ke-k(w))*.052)/2+.45;[-14.4,-23.5].forEach((w,R)=>{let N=R?.95:.9;Ot(M(w),w,N,P(w)),Ot(-M(w),w,N,P(w))}),H(71,12.6,-13,1.05),H(72,-11.8,-9.4,.95),H(73,9.2,-19,.82),H(74,-14.5,-17.5,1),H(75,16.5,-6,.88),ze(),qe(),$i(),ne(),ot(),O.fg.forEach(w=>w.layers.set(1)),O.rain&&O.rain.layers.set(1),O.leaves&&O.leaves.mesh.layers.set(1),O.ripples.forEach(w=>w.layers.set(1)),Ne&&O.key&&(O.key.shadow.autoUpdate=!1,O.key.shadow.needsUpdate=!0),Ke.intro=1,Ps=1,Sr(),wr(),sn(0),Rs()}catch(k){throw console.error("Kage world could not create its Three.js renderer.",k),Mp(),k}return{render:Kv,resize:Sr,reducedMotion:r,setPointer(k,P,M=!0){Ke.tmx=M?o(k,-1,1):0,Ke.tmy=M?o(P,-1,1):0},dispose:Mp}}var ci=Is(nl(),1),_E=(0,An.lazy)(()=>import("../yosemite-sunset/YosemiteSunsetScene").then(n=>({default:n.YosemiteSunsetScene}))),wE=(0,An.lazy)(()=>import("../presidio-sunset/PresidioSunsetScene").then(n=>({default:n.PresidioSunsetScene}))),SE=(0,An.lazy)(()=>import("../lake-louise/LakeLouiseScene").then(n=>({default:n.LakeLouiseScene})));function wp({className:n="",variant:e="temple-night"}){let t=(0,ci.jsx)("div",{className:`temple-night-scene${n?` ${n}`:""}`,"data-state":"loading"});return e==="yosemite-sunset"?(0,ci.jsx)(An.Suspense,{fallback:t,children:(0,ci.jsx)(_E,{className:n})}):e==="presidio-sunset"?(0,ci.jsx)(An.Suspense,{fallback:t,children:(0,ci.jsx)(wE,{className:n})}):e==="lake-louise"?(0,ci.jsx)(An.Suspense,{fallback:t,children:(0,ci.jsx)(SE,{className:n})}):(0,ci.jsx)(ME,{className:n})}function ME({className:n=""}){let e=(0,An.useRef)(null),t=(0,An.useRef)(null),[i,r]=(0,An.useState)("loading"),[s,o]=(0,An.useState)("");return(0,An.useEffect)(()=>{let a=e.current,l=t.current;if(!a||!l)return;let c;try{c=Xv(l)}catch(C){o(C instanceof Error?C.message:"Unknown renderer error"),r("unavailable");return}if(!c){r("unavailable");return}let h=0,d=!0,u=!1,m=!1,x=()=>{!u&&d&&!document.hidden&&!h&&(h=requestAnimationFrame(f))},f=C=>{h=0,c.render(C),m||(m=!0,r("ready")),c.reducedMotion||x()},p=()=>{c.resize(),x()},g=C=>{let D=l.getBoundingClientRect(),S=(C.clientX-D.left)/Math.max(1,D.width)*2-1,A=1-(C.clientY-D.top)/Math.max(1,D.height)*2;c.setPointer(S,A,!0),x()},y=()=>{c.setPointer(0,0,!1),x()},v=()=>{document.hidden&&h?(cancelAnimationFrame(h),h=0):x()},_=new ResizeObserver(p);_.observe(a);let b=new IntersectionObserver(([C])=>{d=C?.isIntersecting??!0,!d&&h?(cancelAnimationFrame(h),h=0):x()});return b.observe(a),l.addEventListener("pointermove",g,{passive:!0}),l.addEventListener("pointerenter",g,{passive:!0}),l.addEventListener("pointerleave",y,{passive:!0}),window.addEventListener("blur",y),document.addEventListener("visibilitychange",v),p(),()=>{u=!0,h&&cancelAnimationFrame(h),_.disconnect(),b.disconnect(),l.removeEventListener("pointermove",g),l.removeEventListener("pointerenter",g),l.removeEventListener("pointerleave",y),window.removeEventListener("blur",y),document.removeEventListener("visibilitychange",v),c.dispose()}},[]),(0,ci.jsxs)("div",{className:`temple-night-scene${n?` ${n}`:""}`,ref:e,"data-state":i,children:[(0,ci.jsx)("canvas",{ref:t,className:`temple-night-canvas${i==="ready"?" is-ready":""}`,"aria-label":"Interactive Kage mountain temple world after dark"}),i==="unavailable"?(0,ci.jsxs)("p",{className:"temple-night-unavailable",role:"status",children:["WebGL is unavailable: ",s||"unsupported context","."]}):null]})}var Mu=Is(nl(),1);function bE(){return(0,Mu.jsx)("div",{className:"shader-frame",children:(0,Mu.jsx)(wp,{variant:"temple-night"})})}var jv=document.getElementById("temple-scene-root");jv&&(0,Jv.createRoot)(jv).render((0,Mu.jsx)(bE,{}));export{bE as Scene};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
