(self.webpackChunkhospital=self.webpackChunkhospital||[]).push([[1708,9327],{9327:(D,u,r)=>{r.r(u),r.d(u,{BreakpointObserver:()=>E,Breakpoints:()=>g,LayoutModule:()=>M,MediaMatcher:()=>_});var n=r(4119),x=r(6753),h=r(4866),o=r(2778),w=r(1683);let M=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=n.\u0275\u0275defineNgModule({type:t});static \u0275inj=n.\u0275\u0275defineInjector({})}return t})();const f=new Set;let d,_=(()=>{class t{_platform=(0,n.inject)(w.Platform);_nonce=(0,n.inject)(n.CSP_NONCE,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):y}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&function v(t,i){if(!f.has(t))try{d||(d=document.createElement("style"),i&&d.setAttribute("nonce",i),d.setAttribute("type","text/css"),document.head.appendChild(d)),d.sheet&&(d.sheet.insertRule(`@media ${t} {body{ }}`,0),f.add(t))}catch(e){console.error(e)}}(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(a){return new(a||t)};static \u0275prov=n.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function y(t){return{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{}}}let E=(()=>{class t{_mediaMatcher=(0,n.inject)(_);_zone=(0,n.inject)(n.NgZone);_queries=new Map;_destroySubject=new h.Subject;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return b((0,x.coerceArray)(e)).some(m=>this._registerQuery(m).mql.matches)}observe(e){const m=b((0,x.coerceArray)(e)).map(c=>this._registerQuery(c).observable);let s=(0,h.combineLatest)(m);return s=(0,h.concat)(s.pipe((0,o.take)(1)),s.pipe((0,o.skip)(1),(0,o.debounceTime)(0))),s.pipe((0,o.map)(c=>{const p={matches:!1,breakpoints:{}};return c.forEach(({matches:l,query:L})=>{p.matches=p.matches||l,p.breakpoints[L]=l}),p}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);const a=this._mediaMatcher.matchMedia(e),s={observable:new h.Observable(c=>{const p=l=>this._zone.run(()=>c.next(l));return a.addListener(p),()=>{a.removeListener(p)}}).pipe((0,o.startWith)(a),(0,o.map)(({matches:c})=>({query:e,matches:c})),(0,o.takeUntil)(this._destroySubject)),mql:a};return this._queries.set(e,s),s}static \u0275fac=function(a){return new(a||t)};static \u0275prov=n.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function b(t){return t.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}const g={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"}}}]);