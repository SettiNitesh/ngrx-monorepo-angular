(self.webpackChunkflights=self.webpackChunkflights||[]).push([[3097],{5478:(N,y,_)=>{_.r(y),_.d(y,{CdkFixedSizeVirtualScroll:()=>P,CdkScrollable:()=>R,CdkScrollableModule:()=>w,CdkVirtualForOf:()=>I,CdkVirtualScrollViewport:()=>z,CdkVirtualScrollable:()=>S,CdkVirtualScrollableElement:()=>A,CdkVirtualScrollableWindow:()=>j,DEFAULT_RESIZE_TIME:()=>O,DEFAULT_SCROLL_TIME:()=>D,FixedSizeVirtualScrollStrategy:()=>k,ScrollDispatcher:()=>b,ScrollingModule:()=>W,VIRTUAL_SCROLLABLE:()=>m,VIRTUAL_SCROLL_STRATEGY:()=>C,ViewportRuler:()=>T,_fixedSizeVirtualScrollStrategyFactory:()=>E});var g=_(6753),r=_(4119),a=_(4866),f=_(2778),h=_(1683),v=_(8537),p=_(5843),x=_(1945);const M=["contentWrapper"],F=["*"],C=new r.InjectionToken("VIRTUAL_SCROLL_STRATEGY");class k{_scrolledIndexChange=new a.Subject;scrolledIndexChange=this._scrolledIndexChange.pipe((0,f.distinctUntilChanged)());_viewport=null;_itemSize;_minBufferPx;_maxBufferPx;constructor(c,e,t){this._itemSize=c,this._minBufferPx=e,this._maxBufferPx=t}attach(c){this._viewport=c,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(c,e,t){this._itemSize=c,this._minBufferPx=e,this._maxBufferPx=t,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(c,e){this._viewport&&this._viewport.scrollToOffset(c*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const c=this._viewport.getRenderedRange(),e={start:c.start,end:c.end},t=this._viewport.getViewportSize(),i=this._viewport.getDataLength();let o=this._viewport.measureScrollOffset(),s=this._itemSize>0?o/this._itemSize:0;if(e.end>i){const l=Math.ceil(t/this._itemSize),d=Math.max(0,Math.min(s,i-l));s!=d&&(s=d,o=d*this._itemSize,e.start=Math.floor(s)),e.end=Math.max(0,Math.min(i,e.start+l))}const u=o-e.start*this._itemSize;if(u<this._minBufferPx&&0!=e.start){const l=Math.ceil((this._maxBufferPx-u)/this._itemSize);e.start=Math.max(0,e.start-l),e.end=Math.min(i,Math.ceil(s+(t+this._minBufferPx)/this._itemSize))}else{const l=e.end*this._itemSize-(o+t);if(l<this._minBufferPx&&e.end!=i){const d=Math.ceil((this._maxBufferPx-l)/this._itemSize);d>0&&(e.end=Math.min(i,e.end+d),e.start=Math.max(0,Math.floor(s-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(s))}}function E(n){return n._scrollStrategy}let P=(()=>{class n{get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=(0,g.coerceNumberProperty)(e)}_itemSize=20;get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=(0,g.coerceNumberProperty)(e)}_minBufferPx=100;get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=(0,g.coerceNumberProperty)(e)}_maxBufferPx=200;_scrollStrategy=new k(this.itemSize,this.minBufferPx,this.maxBufferPx);ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[r.\u0275\u0275ProvidersFeature([{provide:C,useFactory:E,deps:[(0,r.forwardRef)(()=>n)]}]),r.\u0275\u0275NgOnChangesFeature]})}return n})();const D=20;let b=(()=>{class n{_ngZone=(0,r.inject)(r.NgZone);_platform=(0,r.inject)(h.Platform);_renderer=(0,r.inject)(r.RendererFactory2).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new a.Subject;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=D){return this._platform.isBrowser?new a.Observable(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));const i=e>0?this._scrolled.pipe((0,f.auditTime)(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):(0,a.of)()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe((0,f.filter)(o=>!o||i.indexOf(o)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((i,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let i=(0,g.coerceElement)(t),o=e.getElementRef().nativeElement;do{if(i==o)return!0}while(i=i.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),R=(()=>{class n{elementRef=(0,r.inject)(r.ElementRef);scrollDispatcher=(0,r.inject)(b);ngZone=(0,r.inject)(r.NgZone);dir=(0,r.inject)(v.Directionality,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new a.Subject;_renderer=(0,r.inject)(r.Renderer2);_cleanupScroll;_elementScrolled=new a.Subject;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const t=this.elementRef.nativeElement,i=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=i?e.end:e.start),null==e.right&&(e.right=i?e.start:e.end),null!=e.bottom&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),i&&(0,h.getRtlScrollAxisType)()!=h.RtlScrollAxisType.NORMAL?(null!=e.left&&(e.right=t.scrollWidth-t.clientWidth-e.left),(0,h.getRtlScrollAxisType)()==h.RtlScrollAxisType.INVERTED?e.left=e.right:(0,h.getRtlScrollAxisType)()==h.RtlScrollAxisType.NEGATED&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const t=this.elementRef.nativeElement;(0,h.supportsScrollBehavior)()?t.scrollTo(e):(null!=e.top&&(t.scrollTop=e.top),null!=e.left&&(t.scrollLeft=e.left))}measureScrollOffset(e){const t="left",i="right",o=this.elementRef.nativeElement;if("top"==e)return o.scrollTop;if("bottom"==e)return o.scrollHeight-o.clientHeight-o.scrollTop;const s=this.dir&&"rtl"==this.dir.value;return"start"==e?e=s?i:t:"end"==e&&(e=s?t:i),s&&(0,h.getRtlScrollAxisType)()==h.RtlScrollAxisType.INVERTED?e==t?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&(0,h.getRtlScrollAxisType)()==h.RtlScrollAxisType.NEGATED?e==t?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==t?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})();const O=20;let T=(()=>{class n{_platform=(0,r.inject)(h.Platform);_listeners;_viewportSize;_change=new a.Subject;_document=(0,r.inject)(x.DOCUMENT,{optional:!0});constructor(){const e=(0,r.inject)(r.NgZone),t=(0,r.inject)(r.RendererFactory2).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){const i=o=>this._change.next(o);this._listeners=[t.listen("window","resize",i),t.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),i=e.documentElement,o=i.getBoundingClientRect();return{top:-o.top||e.body.scrollTop||t.scrollY||i.scrollTop||0,left:-o.left||e.body.scrollLeft||t.scrollX||i.scrollLeft||0}}change(e=O){return e>0?this._change.pipe((0,f.auditTime)(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=r.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const m=new r.InjectionToken("VIRTUAL_SCROLLABLE");let S=(()=>{class n extends R{constructor(){super()}measureViewportSize(e){const t=this.elementRef.nativeElement;return"horizontal"===e?t.clientWidth:t.clientHeight}static \u0275fac=function(t){return new(t||n)};static \u0275dir=r.\u0275\u0275defineDirective({type:n,features:[r.\u0275\u0275InheritDefinitionFeature]})}return n})();const L=typeof requestAnimationFrame<"u"?a.animationFrameScheduler:a.asapScheduler;let z=(()=>{class n extends S{elementRef=(0,r.inject)(r.ElementRef);_changeDetectorRef=(0,r.inject)(r.ChangeDetectorRef);_scrollStrategy=(0,r.inject)(C,{optional:!0});scrollable=(0,r.inject)(m,{optional:!0});_platform=(0,r.inject)(h.Platform);_detachedSubject=new a.Subject;_renderedRangeSubject=new a.Subject;get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}_orientation="vertical";appendOnly=!1;scrolledIndexChange=new a.Observable(e=>this._scrollStrategy.scrolledIndexChange.subscribe(t=>Promise.resolve().then(()=>this.ngZone.run(()=>e.next(t)))));_contentWrapper;renderedRangeStream=this._renderedRangeSubject;_totalContentSize=0;_totalContentWidth="";_totalContentHeight="";_renderedContentTransform;_renderedRange={start:0,end:0};_dataLength=0;_viewportSize=0;_forOf;_renderedContentOffset=0;_renderedContentOffsetNeedsRewrite=!1;_isChangeDetectionPending=!1;_runAfterChangeDetection=[];_viewportChanges=a.Subscription.EMPTY;_injector=(0,r.inject)(r.Injector);_isDestroyed=!1;constructor(){super();const e=(0,r.inject)(T);this._viewportChanges=e.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this)}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe((0,f.startWith)(null),(0,f.auditTime)(0,L),(0,f.takeUntil)(this._destroyed)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),this._isDestroyed=!0,super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,f.takeUntil)(this._detachedSubject)).subscribe(t=>{const i=t.length;i!==this._dataLength&&(this._dataLength=i,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function B(n,c){return n.start==c.start&&n.end==c.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){e=this.appendOnly&&"to-start"===t?0:e;const o="horizontal"==this.orientation,s=o?"X":"Y";let l=`translate${s}(${Number((o&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===t&&(l+=` translate${s}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=l&&(this._renderedContentTransform=l,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){const i={behavior:t};"horizontal"===this.orientation?i.start=e:i.top=e,this.scrollable.scrollTo(i)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){let t;return t=this.scrollable==this?i=>super.measureScrollOffset(i):i=>this.scrollable.measureScrollOffset(i),Math.max(0,t(e??("horizontal"===this.orientation?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let t;const i="left",o="right",s="rtl"==this.dir?.value;t="start"==e?s?o:i:"end"==e?s?i:o:e||("horizontal"===this.orientation?"left":"top");const u=this.scrollable.measureBoundingClientRectWithScrollOffset(t);return this.elementRef.nativeElement.getBoundingClientRect()[t]-u}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isDestroyed||this.ngZone.run(()=>{this._changeDetectorRef.markForCheck(),this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,(0,r.afterNextRender)(()=>{this._isChangeDetectionPending=!1;const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const t of e)t()},{injector:this._injector})})}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=r.\u0275\u0275defineComponent({type:n,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(t,i){if(1&t&&r.\u0275\u0275viewQuery(M,7),2&t){let o;r.\u0275\u0275queryRefresh(o=r.\u0275\u0275loadQuery())&&(i._contentWrapper=o.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(t,i){2&t&&r.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal","horizontal"===i.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==i.orientation)},inputs:{orientation:"orientation",appendOnly:[2,"appendOnly","appendOnly",r.booleanAttribute]},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[r.\u0275\u0275ProvidersFeature([{provide:R,useFactory:(e,t)=>e||t,deps:[[new r.Optional,new r.Inject(m)],n]}]),r.\u0275\u0275InputTransformsFeature,r.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:F,decls:4,vars:4,consts:[["contentWrapper",""],[1,"cdk-virtual-scroll-content-wrapper"],[1,"cdk-virtual-scroll-spacer"]],template:function(t,i){1&t&&(r.\u0275\u0275projectionDef(),r.\u0275\u0275elementStart(0,"div",1,0),r.\u0275\u0275projection(2),r.\u0275\u0275elementEnd(),r.\u0275\u0275element(3,"div",2)),2&t&&(r.\u0275\u0275advance(3),r.\u0275\u0275styleProp("width",i._totalContentWidth)("height",i._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0})}return n})();function V(n,c,e){if(!e.getBoundingClientRect)return 0;const i=e.getBoundingClientRect();return"horizontal"===n?"start"===c?i.left:i.right:"start"===c?i.top:i.bottom}let I=(()=>{class n{_viewContainerRef=(0,r.inject)(r.ViewContainerRef);_template=(0,r.inject)(r.TemplateRef);_differs=(0,r.inject)(r.IterableDiffers);_viewRepeater=(0,r.inject)(p._VIEW_REPEATER_STRATEGY);_viewport=(0,r.inject)(z,{skipSelf:!0});viewChange=new a.Subject;_dataSourceChanges=new a.Subject;get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,(0,p.isDataSource)(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new p.ArrayDataSource((0,a.isObservable)(e)?e:Array.from(e||[])))}_cdkVirtualForOf;get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(t,i)=>e(t+(this._renderedRange?this._renderedRange.start:0),i):void 0}_cdkVirtualForTrackBy;set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=(0,g.coerceNumberProperty)(e)}dataStream=this._dataSourceChanges.pipe((0,f.startWith)(null),(0,f.pairwise)(),(0,f.switchMap)(([e,t])=>this._changeDataSource(e,t)),(0,f.shareReplay)(1));_differ=null;_data;_renderedItems;_renderedRange;_needsUpdate=!1;_destroyed=new a.Subject;constructor(){const e=(0,r.inject)(r.NgZone);this.dataStream.subscribe(t=>{this._data=t,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,f.takeUntil)(this._destroyed)).subscribe(t=>{this._renderedRange=t,this.viewChange.observers.length&&e.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}measureRangeSize(e,t){if(e.start>=e.end)return 0;const i=e.start-this._renderedRange.start,o=e.end-e.start;let s,u;for(let l=0;l<o;l++){const d=this._viewContainerRef.get(l+i);if(d&&d.rootNodes.length){s=u=d.rootNodes[0];break}}for(let l=o-1;l>-1;l--){const d=this._viewContainerRef.get(l+i);if(d&&d.rootNodes.length){u=d.rootNodes[d.rootNodes.length-1];break}}return s&&u?V(t,"end",u)-V(t,"start",s):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,t)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,t):t)),this._needsUpdate=!0)}_changeDataSource(e,t){return e&&e.disconnect(this),this._needsUpdate=!0,t?t.connect(this):(0,a.of)()}_updateContext(){const e=this._data.length;let t=this._viewContainerRef.length;for(;t--;){const i=this._viewContainerRef.get(t);i.context.index=this._renderedRange.start+t,i.context.count=e,this._updateComputedContextProperties(i.context),i.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(o,s,u)=>this._getEmbeddedViewArgs(o,u),o=>o.item),e.forEachIdentityChange(o=>{this._viewContainerRef.get(o.currentIndex).context.$implicit=o.item});const t=this._data.length;let i=this._viewContainerRef.length;for(;i--;){const o=this._viewContainerRef.get(i);o.context.index=this._renderedRange.start+i,o.context.count=t,this._updateComputedContextProperties(o.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,t){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:t}}static ngTemplateContextGuard(e,t){return!0}static \u0275fac=function(t){return new(t||n)};static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},features:[r.\u0275\u0275ProvidersFeature([{provide:p._VIEW_REPEATER_STRATEGY,useClass:p._RecycleViewRepeaterStrategy}])]})}return n})(),A=(()=>{class n extends S{constructor(){super()}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]-this.measureScrollOffset(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","cdkVirtualScrollingElement",""]],hostAttrs:[1,"cdk-virtual-scrollable"],features:[r.\u0275\u0275ProvidersFeature([{provide:m,useExisting:n}]),r.\u0275\u0275InheritDefinitionFeature]})}return n})(),j=(()=>{class n extends S{constructor(){super();const e=(0,r.inject)(x.DOCUMENT);this.elementRef=new r.ElementRef(e.documentElement),this._scrollElement=e}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}static \u0275fac=function(t){return new(t||n)};static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["cdk-virtual-scroll-viewport","scrollWindow",""]],features:[r.\u0275\u0275ProvidersFeature([{provide:m,useExisting:n}]),r.\u0275\u0275InheritDefinitionFeature]})}return n})(),w=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=r.\u0275\u0275defineNgModule({type:n});static \u0275inj=r.\u0275\u0275defineInjector({})}return n})(),W=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=r.\u0275\u0275defineNgModule({type:n});static \u0275inj=r.\u0275\u0275defineInjector({imports:[v.BidiModule,w,v.BidiModule,w]})}return n})()}}]);