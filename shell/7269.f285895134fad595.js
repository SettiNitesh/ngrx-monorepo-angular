(self.webpackChunkshell=self.webpackChunkshell||[]).push([[7269,7963,9650],{9650:(O,u,r)=>{r.r(u),r.d(u,{ANIMATION_MODULE_TYPE:()=>e.ANIMATION_MODULE_TYPE,BrowserAnimationsModule:()=>v,NoopAnimationsModule:()=>D,provideAnimations:()=>E,provideNoopAnimations:()=>f,\u0275InjectableAnimationEngine:()=>c});var e=r(4119),a=r(6618),o=r(7963),A=r(1945);let c=(()=>{class n extends o.\u0275AnimationEngine{constructor(i,t,N){super(i,t,N)}ngOnDestroy(){this.flush()}static \u0275fac=function(t){return new(t||n)(e.\u0275\u0275inject(A.DOCUMENT),e.\u0275\u0275inject(o.AnimationDriver),e.\u0275\u0275inject(o.\u0275AnimationStyleNormalizer))};static \u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac})}return n})();const l=[{provide:o.\u0275AnimationStyleNormalizer,useFactory:function m(){return new o.\u0275WebAnimationsStyleNormalizer}},{provide:o.\u0275AnimationEngine,useClass:c},{provide:e.RendererFactory2,useFactory:function M(n,p,i){return new o.\u0275AnimationRendererFactory(n,p,i)},deps:[a.\u0275DomRendererFactory2,o.\u0275AnimationEngine,e.NgZone]}],s=[{provide:o.AnimationDriver,useFactory:()=>new o.\u0275WebAnimationsDriver},{provide:e.ANIMATION_MODULE_TYPE,useValue:"BrowserAnimations"},...l],d=[{provide:o.AnimationDriver,useClass:o.NoopAnimationDriver},{provide:e.ANIMATION_MODULE_TYPE,useValue:"NoopAnimations"},...l];let v=(()=>{class n{static withConfig(i){return{ngModule:n,providers:i.disableAnimations?d:s}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=e.\u0275\u0275defineNgModule({type:n});static \u0275inj=e.\u0275\u0275defineInjector({providers:s,imports:[a.BrowserModule]})}return n})();function E(){return(0,e.\u0275performanceMarkFeature)("NgEagerAnimations"),[...s]}let D=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=e.\u0275\u0275defineNgModule({type:n});static \u0275inj=e.\u0275\u0275defineInjector({providers:d,imports:[a.BrowserModule]})}return n})();function f(){return[...d]}}}]);