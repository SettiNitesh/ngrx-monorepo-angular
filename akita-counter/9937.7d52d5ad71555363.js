(self.webpackChunkakita_counter=self.webpackChunkakita_counter||[]).push([[2318,9937],{2318:(g,a,i)=>{i.r(a),i.d(a,{CdkObserveContent:()=>h,ContentObserver:()=>l,MutationObserverFactory:()=>d,ObserversModule:()=>m});var b=i(6753),n=i(4119),v=i(4866),u=i(2778);let d=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(s){return new(s||t)};static \u0275prov=n.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),l=(()=>{class t{_mutationObserverFactory=(0,n.inject)(d);_observedElements=new Map;_ngZone=(0,n.inject)(n.NgZone);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,s)=>this._cleanupObserver(s))}observe(e){const s=(0,b.coerceElement)(e);return new v.Observable(o=>{const p=this._observeElement(s).pipe((0,u.map)(c=>c.filter(E=>!function _(t){if("characterData"===t.type&&t.target instanceof Comment)return!0;if("childList"===t.type){for(let r=0;r<t.addedNodes.length;r++)if(!(t.addedNodes[r]instanceof Comment))return!1;for(let r=0;r<t.removedNodes.length;r++)if(!(t.removedNodes[r]instanceof Comment))return!1;return!0}return!1}(E))),(0,u.filter)(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{o.next(c)})});return()=>{p.unsubscribe(),this._unobserveElement(s)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{const s=new v.Subject,o=this._mutationObserverFactory.create(f=>s.next(f));o&&o.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:o,stream:s,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){const{observer:s,stream:o}=this._observedElements.get(e);s&&s.disconnect(),o.complete(),this._observedElements.delete(e)}}static \u0275fac=function(s){return new(s||t)};static \u0275prov=n.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),h=(()=>{class t{_contentObserver=(0,n.inject)(l);_elementRef=(0,n.inject)(n.ElementRef);event=new n.EventEmitter;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=(0,b.coerceNumberProperty)(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();const e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe((0,u.debounceTime)(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(s){return new(s||t)};static \u0275dir=n.\u0275\u0275defineDirective({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",n.booleanAttribute],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"],features:[n.\u0275\u0275InputTransformsFeature]})}return t})(),m=(()=>{class t{static \u0275fac=function(s){return new(s||t)};static \u0275mod=n.\u0275\u0275defineNgModule({type:t});static \u0275inj=n.\u0275\u0275defineInjector({providers:[d]})}return t})()}}]);