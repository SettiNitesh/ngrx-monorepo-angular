(self.webpackChunkflights=self.webpackChunkflights||[]).push([[4479],{6860:(M,h,u)=>{u.r(h),u.d(h,{Platform:()=>I,PlatformModule:()=>D,RtlScrollAxisType:()=>d,_bindEventWithOptions:()=>L,_getEventTarget:()=>P,_getFocusedElementPierceShadowDom:()=>B,_getShadowRoot:()=>A,_isTestEnvironment:()=>N,_supportsShadowDom:()=>w,getRtlScrollAxisType:()=>R,getSupportedInputTypes:()=>S,normalizePassiveListenerOptions:()=>T,supportsPassiveEventListeners:()=>v,supportsScrollBehavior:()=>_});var r=u(4119),y=u(1945);let l;try{l=typeof Intl<"u"&&Intl.v8BreakIterator}catch{l=!1}let s,I=(()=>{class e{_platformId=(0,r.inject)(r.PLATFORM_ID);isBrowser=this._platformId?(0,y.isPlatformBrowser)(this._platformId):"object"==typeof document&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!(!window.chrome&&!l)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||e)};static \u0275prov=r.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),D=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=r.\u0275\u0275defineNgModule({type:e});static \u0275inj=r.\u0275\u0275defineInjector({})}return e})();const E=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function S(){if(s)return s;if("object"!=typeof document||!document)return s=new Set(E),s;let e=document.createElement("input");return s=new Set(E.filter(t=>(e.setAttribute("type",t),e.type===t))),s}let a;function v(){if(null==a&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>a=!0}))}finally{a=a||!1}return a}function T(e){return v()?e:!!e.capture}var d=function(e){return e[e.NORMAL=0]="NORMAL",e[e.NEGATED=1]="NEGATED",e[e.INVERTED=2]="INVERTED",e}(d||{});let c,i,f;function _(){if(null==i){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return i=!1,i;if("scrollBehavior"in document.documentElement.style)i=!0;else{const e=Element.prototype.scrollTo;i=!!e&&!/\{\s*\[native code\]\s*\}/.test(e.toString())}}return i}function R(){if("object"!=typeof document||!document)return d.NORMAL;if(null==c){const e=document.createElement("div"),t=e.style;e.dir="rtl",t.width="1px",t.overflow="auto",t.visibility="hidden",t.pointerEvents="none",t.position="absolute";const o=document.createElement("div"),n=o.style;n.width="2px",n.height="1px",e.appendChild(o),document.body.appendChild(e),c=d.NORMAL,0===e.scrollLeft&&(e.scrollLeft=1,c=0===e.scrollLeft?d.NEGATED:d.INVERTED),e.remove()}return c}function w(){if(null==f){const e=typeof document<"u"?document.head:null;f=!(!e||!e.createShadowRoot&&!e.attachShadow)}return f}function A(e){if(w()){const t=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function B(){let e=typeof document<"u"&&document?document.activeElement:null;for(;e&&e.shadowRoot;){const t=e.shadowRoot.activeElement;if(t===e)break;e=t}return e}function P(e){return e.composedPath?e.composedPath()[0]:e.target}function N(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function L(e,t,o,n,p){const m=parseInt(r.VERSION.major),g=parseInt(r.VERSION.minor);return m>19||19===m&&g>0||0===m&&0===g?e.listen(t,o,n,p):(t.addEventListener(o,n,p),()=>{t.removeEventListener(o,n,p)})}}}]);