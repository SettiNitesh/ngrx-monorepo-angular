(self.webpackChunkflights=self.webpackChunkflights||[]).push([[345,2726],{345:(Ze,H,E)=>{E.r(H),E.d(H,{BrowserModule:()=>Re,By:()=>Ne,DomSanitizer:()=>ne,EVENT_MANAGER_PLUGINS:()=>v,EventManager:()=>D,EventManagerPlugin:()=>S,HAMMER_GESTURE_CONFIG:()=>w,HAMMER_LOADER:()=>N,HammerGestureConfig:()=>ee,HammerModule:()=>ke,HydrationFeatureKind:()=>p,Meta:()=>Ce,REMOVE_STYLES_ON_COMPONENT_DESTROY:()=>F,Title:()=>Ae,VERSION:()=>$e,bootstrapApplication:()=>Me,createApplication:()=>_e,disableDebugTools:()=>Le,enableDebugTools:()=>Pe,platformBrowser:()=>De,provideClientHydration:()=>Ge,provideProtractorTestingSupport:()=>Se,withEventReplay:()=>Fe,withHttpTransferCacheOptions:()=>je,withI18nSupport:()=>xe,withIncrementalHydration:()=>Ve,withNoHttpTransferCache:()=>Be,\u0275BrowserDomAdapter:()=>_,\u0275BrowserGetTestability:()=>k,\u0275DomEventsPlugin:()=>Z,\u0275DomRendererFactory2:()=>b,\u0275DomSanitizerImpl:()=>re,\u0275HammerGesturesPlugin:()=>te,\u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS:()=>L,\u0275KeyEventsPlugin:()=>K,\u0275SharedStylesHost:()=>C,\u0275getDOM:()=>l.\u0275getDOM,\u0275initDomAdapter:()=>Y});var l=E(1945),o=E(4119),U=E(8687);class oe extends l.\u0275DomAdapter{supportsDOMEvents=!0}class _ extends oe{static makeCurrent(){(0,l.\u0275setRootDomAdapter)(new _)}onAndCancel(r,e,t,s){return r.addEventListener(e,t,s),()=>{r.removeEventListener(e,t,s)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return(e=e||this.getDefaultDocument()).createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return"window"===e?window:"document"===e?r:"body"===e?r.body:null}getBaseHref(r){const e=function se(){return y=y||document.querySelector("base"),y?y.getAttribute("href"):null}();return null==e?null:function ie(n){return new URL(n,document.baseURI).pathname}(e)}resetBaseElement(){y=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return(0,l.\u0275parseCookieValue)(document.cookie,r)}}let y=null;class k{addToWindow(r){o.\u0275global.getAngularTestability=(t,s=!0)=>{const i=r.findTestabilityInTree(t,s);if(null==i)throw new o.\u0275RuntimeError(5103,!1);return i},o.\u0275global.getAllAngularTestabilities=()=>r.getAllTestabilities(),o.\u0275global.getAllAngularRootElements=()=>r.getAllRootElements(),o.\u0275global.frameworkStabilizers||(o.\u0275global.frameworkStabilizers=[]),o.\u0275global.frameworkStabilizers.push(t=>{const s=o.\u0275global.getAllAngularTestabilities();let i=s.length;const a=function(){i--,0==i&&t()};s.forEach(c=>{c.whenStable(a)})})}findTestabilityInTree(r,e,t){return null==e?null:r.getTestability(e)??(t?(0,l.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(r,e.host,!0):this.findTestabilityInTree(r,e.parentElement,!0):null)}}let ae=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(t){return new(t||n)};static \u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const v=new o.InjectionToken("");let D=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(s=>{s.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,s,i){return this._findPluginFor(t).addEventListener(e,t,s,i)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(i=>i.supports(e)),!t)throw new o.\u0275RuntimeError(5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(v),o.\u0275\u0275inject(o.NgZone))};static \u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();class S{_doc;constructor(r){this._doc=r}manager}const T="ng-app-id";function B(n){for(const r of n)r.remove()}function j(n,r){const e=r.createElement("style");return e.textContent=n,e}function R(n,r){const e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",n),e}let C=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,t,s,i={}){this.doc=e,this.appId=t,this.nonce=s,this.isServer=(0,l.isPlatformServer)(i),function ce(n,r,e,t){const s=n.head?.querySelectorAll(`style[${T}="${r}"],link[${T}="${r}"]`);if(s)for(const i of s)i.removeAttribute(T),i instanceof HTMLLinkElement?t.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&e.set(i.textContent,{usage:0,elements:[i]})}(e,t,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,t){for(const s of e)this.addUsage(s,this.inline,j);t?.forEach(s=>this.addUsage(s,this.external,R))}removeStyles(e,t){for(const s of e)this.removeUsage(s,this.inline);t?.forEach(s=>this.removeUsage(s,this.external))}addUsage(e,t,s){const i=t.get(e);i?i.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,s(e,this.doc)))})}removeUsage(e,t){const s=t.get(e);s&&(s.usage--,s.usage<=0&&(B(s.elements),t.delete(e)))}ngOnDestroy(){for(const[,{elements:e}]of[...this.inline,...this.external])B(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(const[t,{elements:s}]of this.inline)s.push(this.addElement(e,j(t,this.doc)));for(const[t,{elements:s}]of this.external)s.push(this.addElement(e,R(t,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),this.isServer&&t.setAttribute(T,this.appId),e.appendChild(t)}static \u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT),o.\u0275\u0275inject(o.APP_ID),o.\u0275\u0275inject(o.CSP_NONCE,8),o.\u0275\u0275inject(o.PLATFORM_ID))};static \u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const O={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},A=/%COMP%/g,x="%COMP%",de=`_nghost-${x}`,fe=`_ngcontent-${x}`,F=new o.InjectionToken("",{providedIn:"root",factory:()=>!0});function V(n,r){return r.map(e=>e.replace(A,n))}let b=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,t,s,i,a,c,u,f=null,d=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=s,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=c,this.ngZone=u,this.nonce=f,this.tracingService=d,this.platformIsServer=(0,l.isPlatformServer)(c),this.defaultRenderer=new I(e,a,u,this.platformIsServer,this.tracingService)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===o.ViewEncapsulation.ShadowDom&&(t={...t,encapsulation:o.ViewEncapsulation.Emulated});const s=this.getOrCreateRenderer(e,t);return s instanceof $?s.applyToHost(e):s instanceof P&&s.applyStyles(),s}getOrCreateRenderer(e,t){const s=this.rendererByCompId;let i=s.get(t.id);if(!i){const a=this.doc,c=this.ngZone,u=this.eventManager,f=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.platformIsServer,h=this.tracingService;switch(t.encapsulation){case o.ViewEncapsulation.Emulated:i=new $(u,f,t,this.appId,d,a,c,m,h);break;case o.ViewEncapsulation.ShadowDom:return new Ee(u,f,e,t,a,c,this.nonce,m,h);default:i=new P(u,f,t,d,a,c,m,h)}s.set(t.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(D),o.\u0275\u0275inject(C),o.\u0275\u0275inject(o.APP_ID),o.\u0275\u0275inject(F),o.\u0275\u0275inject(l.DOCUMENT),o.\u0275\u0275inject(o.PLATFORM_ID),o.\u0275\u0275inject(o.NgZone),o.\u0275\u0275inject(o.CSP_NONCE),o.\u0275\u0275inject(o.\u0275TracingService,8))};static \u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();class I{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,t,s,i){this.eventManager=r,this.doc=e,this.ngZone=t,this.platformIsServer=s,this.tracingService=i}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(O[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(G(r)?r.content:r).appendChild(e)}insertBefore(r,e,t){r&&(G(r)?r.content:r).insertBefore(e,t)}removeChild(r,e){e.remove()}selectRootElement(r,e){let t="string"==typeof r?this.doc.querySelector(r):r;if(!t)throw new o.\u0275RuntimeError(-5104,!1);return e||(t.textContent=""),t}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,t,s){if(s){e=s+":"+e;const i=O[s];i?r.setAttributeNS(i,e,t):r.setAttribute(e,t)}else r.setAttribute(e,t)}removeAttribute(r,e,t){if(t){const s=O[t];s?r.removeAttributeNS(s,e):r.removeAttribute(`${t}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,t,s){s&(o.RendererStyleFlags2.DashCase|o.RendererStyleFlags2.Important)?r.style.setProperty(e,t,s&o.RendererStyleFlags2.Important?"important":""):r.style[e]=t}removeStyle(r,e,t){t&o.RendererStyleFlags2.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,t){null!=r&&(r[e]=t)}setValue(r,e){r.nodeValue=e}listen(r,e,t,s){if("string"==typeof r&&!(r=(0,l.\u0275getDOM)().getGlobalEventTarget(this.doc,r)))throw new Error(`Unsupported event target ${r} for event ${e}`);let i=this.decoratePreventDefault(t);return null!==this.tracingService&&this.tracingService.wrapEventListener&&(i=this.tracingService.wrapEventListener(r,e,i)),this.eventManager.addEventListener(r,e,i,s)}decoratePreventDefault(r){return e=>{if("__ngUnwrap__"===e)return r;!1===(this.platformIsServer?this.ngZone.runGuarded(()=>r(e)):r(e))&&e.preventDefault()}}}function G(n){return"TEMPLATE"===n.tagName&&void 0!==n.content}class Ee extends I{sharedStylesHost;hostEl;shadowRoot;constructor(r,e,t,s,i,a,c,u,f){super(r,i,a,u,f),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=s.styles;d=V(s.id,d);for(const h of d){const g=document.createElement("style");c&&g.setAttribute("nonce",c),g.textContent=h,this.shadowRoot.appendChild(g)}const m=s.getExternalStyles?.();if(m)for(const h of m){const g=R(h,i);c&&g.setAttribute("nonce",c),this.shadowRoot.appendChild(g)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,t){return super.insertBefore(this.nodeOrShadowRoot(r),e,t)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class P extends I{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,t,s,i,a,c,u,f){super(r,i,a,c,u),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=s;let d=t.styles;this.styles=f?V(f,d):d,this.styleUrls=t.getExternalStyles?.(f)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}}class $ extends P{contentAttr;hostAttr;constructor(r,e,t,s,i,a,c,u,f){const d=s+"-"+t.id;super(r,e,t,i,a,c,u,f,d),this.contentAttr=function he(n){return fe.replace(A,n)}(d),this.hostAttr=function me(n){return de.replace(A,n)}(d)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){const t=super.createElement(r,e);return super.setAttribute(t,this.contentAttr,""),t}}let Z=(()=>{class n extends S{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,s,i){return e.addEventListener(t,s,i),()=>this.removeEventListener(e,t,s,i)}removeEventListener(e,t,s,i){return e.removeEventListener(t,s,i)}static \u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT))};static \u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const z=["alt","control","meta","shift"],ye={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ve={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey};let K=(()=>{class n extends S{constructor(e){super(e)}supports(e){return null!=n.parseEventName(e)}addEventListener(e,t,s,i){const a=n.parseEventName(t),c=n.eventCallback(a.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,l.\u0275getDOM)().onAndCancel(e,a.domEventName,c,i))}static parseEventName(e){const t=e.toLowerCase().split("."),s=t.shift();if(0===t.length||"keydown"!==s&&"keyup"!==s)return null;const i=n._normalizeKey(t.pop());let a="",c=t.indexOf("code");if(c>-1&&(t.splice(c,1),a="code."),z.forEach(f=>{const d=t.indexOf(f);d>-1&&(t.splice(d,1),a+=f+".")}),a+=i,0!=t.length||0===i.length)return null;const u={};return u.domEventName=s,u.fullKey=a,u}static matchEventFullKeyCode(e,t){let s=ye[e.key]||e.key,i="";return t.indexOf("code.")>-1&&(s=e.code,i="code."),!(null==s||!s)&&(s=s.toLowerCase()," "===s?s="space":"."===s&&(s="dot"),z.forEach(a=>{a!==s&&(0,ve[a])(e)&&(i+=a+".")}),i+=s,i===t)}static eventCallback(e,t,s){return i=>{n.matchEventFullKeyCode(i,e)&&s.runGuarded(()=>t(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}static \u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT))};static \u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();function Me(n,r){return(0,o.\u0275internalCreateApplication)({rootComponent:n,...W(r)})}function _e(n){return(0,o.\u0275internalCreateApplication)(W(n))}function W(n){return{appProviders:[...J,...n?.providers??[]],platformProviders:L}}function Se(){return[...X]}function Y(){_.makeCurrent()}const L=[{provide:o.PLATFORM_ID,useValue:l.\u0275PLATFORM_BROWSER_ID},{provide:o.PLATFORM_INITIALIZER,useValue:Y,multi:!0},{provide:l.DOCUMENT,useFactory:function we(){return(0,o.\u0275setDocument)(document),document},deps:[]}],De=(0,o.createPlatformFactory)(o.platformCore,"browser",L),X=[{provide:o.\u0275TESTABILITY_GETTER,useClass:k,deps:[]},{provide:o.\u0275TESTABILITY,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]},{provide:o.Testability,useClass:o.Testability,deps:[o.NgZone,o.TestabilityRegistry,o.\u0275TESTABILITY_GETTER]}],J=[{provide:o.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:o.ErrorHandler,useFactory:function Te(){return new o.ErrorHandler},deps:[]},{provide:v,useClass:Z,multi:!0,deps:[l.DOCUMENT,o.NgZone,o.PLATFORM_ID]},{provide:v,useClass:K,multi:!0,deps:[l.DOCUMENT]},b,C,D,{provide:o.RendererFactory2,useExisting:b},{provide:l.XhrFactory,useClass:ae,deps:[]},[]];let Re=(()=>{class n{constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275mod=o.\u0275\u0275defineNgModule({type:n});static \u0275inj=o.\u0275\u0275defineInjector({providers:[...J,...X],imports:[l.CommonModule,o.ApplicationModule]})}return n})(),Ce=(()=>{class n{_doc;_dom;constructor(e){this._doc=e,this._dom=(0,l.\u0275getDOM)()}addTag(e,t=!1){return e?this._getOrCreateElement(e,t):null}addTags(e,t=!1){return e?e.reduce((s,i)=>(i&&s.push(this._getOrCreateElement(i,t)),s),[]):[]}getTag(e){return e&&this._doc.querySelector(`meta[${e}]`)||null}getTags(e){if(!e)return[];const t=this._doc.querySelectorAll(`meta[${e}]`);return t?[].slice.call(t):[]}updateTag(e,t){if(!e)return null;t=t||this._parseSelector(e);const s=this.getTag(t);return s?this._setMetaElementAttributes(e,s):this._getOrCreateElement(e,!0)}removeTag(e){this.removeTagElement(this.getTag(e))}removeTagElement(e){e&&this._dom.remove(e)}_getOrCreateElement(e,t=!1){if(!t){const a=this._parseSelector(e),c=this.getTags(a).filter(u=>this._containsAttributes(e,u))[0];if(void 0!==c)return c}const s=this._dom.createElement("meta");return this._setMetaElementAttributes(e,s),this._doc.getElementsByTagName("head")[0].appendChild(s),s}_setMetaElementAttributes(e,t){return Object.keys(e).forEach(s=>t.setAttribute(this._getMetaKeyMap(s),e[s])),t}_parseSelector(e){const t=e.name?"name":"property";return`${t}="${e[t]}"`}_containsAttributes(e,t){return Object.keys(e).every(s=>t.getAttribute(this._getMetaKeyMap(s))===e[s])}_getMetaKeyMap(e){return Oe[e]||e}static \u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT))};static \u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const Oe={httpEquiv:"http-equiv"};let Ae=(()=>{class n{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT))};static \u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function q(n,r){(typeof COMPILED>"u"||!COMPILED)&&((o.\u0275global.ng=o.\u0275global.ng||{})[n]=r)}class be{msPerTick;numTicks;constructor(r,e){this.msPerTick=r,this.numTicks=e}}class Ie{appRef;constructor(r){this.appRef=r.injector.get(o.ApplicationRef)}timeChangeDetection(r){const e=r&&r.record,t="Change Detection";e&&"profile"in console&&"function"==typeof console.profile&&console.profile(t);const s=performance.now();let i=0;for(;i<5||performance.now()-s<500;)this.appRef.tick(),i++;const a=performance.now();e&&"profileEnd"in console&&"function"==typeof console.profileEnd&&console.profileEnd(t);const c=(a-s)/i;return console.log(`ran ${i} change detection cycles`),console.log(`${c.toFixed(2)} ms per check`),new be(c,i)}}const Q="profiler";function Pe(n){return q(Q,new Ie(n)),n}function Le(){q(Q,null)}class Ne{static all(){return()=>!0}static css(r){return e=>null!=e.nativeElement&&function He(n,r){return!!(0,l.\u0275getDOM)().isElementNode(n)&&(n.matches&&n.matches(r)||n.msMatchesSelector&&n.msMatchesSelector(r)||n.webkitMatchesSelector&&n.webkitMatchesSelector(r))}(e.nativeElement,r)}static directive(r){return e=>-1!==e.providerTokens.indexOf(r)}}const Ue={pan:!0,panstart:!0,panmove:!0,panend:!0,pancancel:!0,panleft:!0,panright:!0,panup:!0,pandown:!0,pinch:!0,pinchstart:!0,pinchmove:!0,pinchend:!0,pinchcancel:!0,pinchin:!0,pinchout:!0,press:!0,pressup:!0,rotate:!0,rotatestart:!0,rotatemove:!0,rotateend:!0,rotatecancel:!0,swipe:!0,swipeleft:!0,swiperight:!0,swipeup:!0,swipedown:!0,tap:!0,doubletap:!0},w=new o.InjectionToken(""),N=new o.InjectionToken("");let ee=(()=>{class n{events=[];overrides={};options;buildHammer(e){const t=new Hammer(e,this.options);t.get("pinch").set({enable:!0}),t.get("rotate").set({enable:!0});for(const s in this.overrides)t.get(s).set(this.overrides[s]);return t}static \u0275fac=function(t){return new(t||n)};static \u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})(),te=(()=>{class n extends S{_config;_injector;loader;_loaderPromise=null;constructor(e,t,s,i){super(e),this._config=t,this._injector=s,this.loader=i}supports(e){return!(!Ue.hasOwnProperty(e.toLowerCase())&&!this.isCustomEvent(e)||!window.Hammer&&!this.loader)}addEventListener(e,t,s){const i=this.manager.getZone();if(t=t.toLowerCase(),!window.Hammer&&this.loader){this._loaderPromise=this._loaderPromise||i.runOutsideAngular(()=>this.loader());let a=!1,c=()=>{a=!0};return i.runOutsideAngular(()=>this._loaderPromise.then(()=>{window.Hammer?a||(c=this.addEventListener(e,t,s)):c=()=>{}}).catch(()=>{c=()=>{}})),()=>{c()}}return i.runOutsideAngular(()=>{const a=this._config.buildHammer(e),c=function(u){i.runGuarded(function(){s(u)})};return a.on(t,c),()=>{a.off(t,c),"function"==typeof a.destroy&&a.destroy()}})}isCustomEvent(e){return this._config.events.indexOf(e)>-1}static \u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT),o.\u0275\u0275inject(w),o.\u0275\u0275inject(o.Injector),o.\u0275\u0275inject(N,8))};static \u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})(),ke=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=o.\u0275\u0275defineNgModule({type:n});static \u0275inj=o.\u0275\u0275defineInjector({providers:[{provide:v,useClass:te,multi:!0,deps:[l.DOCUMENT,w,o.Injector,[new o.Optional,N]]},{provide:w,useClass:ee,deps:[]}]})}return n})(),ne=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:function(t){let s=null;return s=t?new(t||n):o.\u0275\u0275inject(re),s},providedIn:"root"})}return n})(),re=(()=>{class n extends ne{_doc;constructor(e){super(),this._doc=e}sanitize(e,t){if(null==t)return null;switch(e){case o.SecurityContext.NONE:return t;case o.SecurityContext.HTML:return(0,o.\u0275allowSanitizationBypassAndThrow)(t,"HTML")?(0,o.\u0275unwrapSafeValue)(t):(0,o.\u0275_sanitizeHtml)(this._doc,String(t)).toString();case o.SecurityContext.STYLE:return(0,o.\u0275allowSanitizationBypassAndThrow)(t,"Style")?(0,o.\u0275unwrapSafeValue)(t):t;case o.SecurityContext.SCRIPT:if((0,o.\u0275allowSanitizationBypassAndThrow)(t,"Script"))return(0,o.\u0275unwrapSafeValue)(t);throw new o.\u0275RuntimeError(5200,!1);case o.SecurityContext.URL:return(0,o.\u0275allowSanitizationBypassAndThrow)(t,"URL")?(0,o.\u0275unwrapSafeValue)(t):(0,o.\u0275_sanitizeUrl)(String(t));case o.SecurityContext.RESOURCE_URL:if((0,o.\u0275allowSanitizationBypassAndThrow)(t,"ResourceURL"))return(0,o.\u0275unwrapSafeValue)(t);throw new o.\u0275RuntimeError(5201,!1);default:throw new o.\u0275RuntimeError(5202,!1)}}bypassSecurityTrustHtml(e){return(0,o.\u0275bypassSanitizationTrustHtml)(e)}bypassSecurityTrustStyle(e){return(0,o.\u0275bypassSanitizationTrustStyle)(e)}bypassSecurityTrustScript(e){return(0,o.\u0275bypassSanitizationTrustScript)(e)}bypassSecurityTrustUrl(e){return(0,o.\u0275bypassSanitizationTrustUrl)(e)}bypassSecurityTrustResourceUrl(e){return(0,o.\u0275bypassSanitizationTrustResourceUrl)(e)}static \u0275fac=function(t){return new(t||n)(o.\u0275\u0275inject(l.DOCUMENT))};static \u0275prov=o.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var p=function(n){return n[n.NoHttpTransferCache=0]="NoHttpTransferCache",n[n.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",n[n.I18nSupport=2]="I18nSupport",n[n.EventReplay=3]="EventReplay",n[n.IncrementalHydration=4]="IncrementalHydration",n}(p||{});function M(n,r=[],e={}){return{\u0275kind:n,\u0275providers:r}}function Be(){return M(p.NoHttpTransferCache)}function je(n){return M(p.HttpTransferCacheOptions,(0,U.\u0275withHttpTransferCache)(n))}function xe(){return M(p.I18nSupport,(0,o.\u0275withI18nSupport)())}function Fe(){return M(p.EventReplay,(0,o.\u0275withEventReplay)())}function Ve(){return M(p.IncrementalHydration,(0,o.\u0275withIncrementalHydration)())}function Ge(...n){const r=[],e=new Set,t=e.has(p.HttpTransferCacheOptions);for(const{\u0275providers:s,\u0275kind:i}of n)e.add(i),s.length&&r.push(s);return(0,o.makeEnvironmentProviders)([[],(0,o.\u0275withDomHydration)(),e.has(p.NoHttpTransferCache)||t?[]:(0,U.\u0275withHttpTransferCache)({}),r])}const $e=new o.Version("19.1.4")}}]);