(self.webpackChunkhospital=self.webpackChunkhospital||[]).push([[8268],{5887:(pe,V,f)=>{f.r(V),f.d(V,{BaseCdkCell:()=>v,BaseRowDef:()=>T,CDK_ROW_TEMPLATE:()=>we,CDK_TABLE:()=>y,CDK_TABLE_TEMPLATE:()=>Re,CdkCell:()=>I,CdkCellDef:()=>k,CdkCellOutlet:()=>g,CdkColumnDef:()=>R,CdkFooterCell:()=>Y,CdkFooterCellDef:()=>x,CdkFooterRow:()=>X,CdkFooterRowDef:()=>b,CdkHeaderCell:()=>N,CdkHeaderCellDef:()=>S,CdkHeaderRow:()=>G,CdkHeaderRowDef:()=>E,CdkNoDataRow:()=>P,CdkRecycleRows:()=>ee,CdkRow:()=>q,CdkRowDef:()=>j,CdkTable:()=>W,CdkTableModule:()=>De,CdkTextColumn:()=>oe,DataRowOutlet:()=>B,DataSource:()=>m.DataSource,FooterRowOutlet:()=>U,HeaderRowOutlet:()=>z,NoDataRowOutlet:()=>Q,STICKY_DIRECTIONS:()=>L,STICKY_POSITIONING_LISTENER:()=>H,StickyStyler:()=>J,TEXT_COLUMN_OPTIONS:()=>$,_COALESCED_STYLE_SCHEDULER:()=>A,_CoalescedStyleScheduler:()=>Z,_Schedule:()=>F,mixinHasStickyInput:()=>ge});var re=f(8537),m=f(5843),ae=f(1683),K=f(4743),le=f(1945),o=f(4119),p=f(4866),M=f(2778),ce=f(6753);const de=[[["caption"]],[["colgroup"],["col"]],"*"],ue=["caption","colgroup, col","*"];function fe(s,r){1&s&&o.\u0275\u0275projection(0,2)}function he(s,r){1&s&&(o.\u0275\u0275elementStart(0,"thead",0),o.\u0275\u0275elementContainer(1,1),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(2,"tbody",0),o.\u0275\u0275elementContainer(3,2)(4,3),o.\u0275\u0275elementEnd(),o.\u0275\u0275elementStart(5,"tfoot",0),o.\u0275\u0275elementContainer(6,4),o.\u0275\u0275elementEnd())}function _e(s,r){1&s&&o.\u0275\u0275elementContainer(0,1)(1,2)(2,3)(3,4)}function me(s,r){if(1&s&&(o.\u0275\u0275elementStart(0,"th",3),o.\u0275\u0275text(1),o.\u0275\u0275elementEnd()),2&s){const e=o.\u0275\u0275nextContext();o.\u0275\u0275styleProp("text-align",e.justify),o.\u0275\u0275advance(),o.\u0275\u0275textInterpolate1(" ",e.headerText," ")}}function ye(s,r){if(1&s&&(o.\u0275\u0275elementStart(0,"td",4),o.\u0275\u0275text(1),o.\u0275\u0275elementEnd()),2&s){const e=r.$implicit,t=o.\u0275\u0275nextContext();o.\u0275\u0275styleProp("text-align",t.justify),o.\u0275\u0275advance(),o.\u0275\u0275textInterpolate1(" ",t.dataAccessor(e,t.name)," ")}}const y=new o.InjectionToken("CDK_TABLE"),$=new o.InjectionToken("text-column-options");let k=(()=>{class s{template=(0,o.inject)(o.TemplateRef);constructor(){}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","cdkCellDef",""]]})}return s})(),S=(()=>{class s{template=(0,o.inject)(o.TemplateRef);constructor(){}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","cdkHeaderCellDef",""]]})}return s})(),x=(()=>{class s{template=(0,o.inject)(o.TemplateRef);constructor(){}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","cdkFooterCellDef",""]]})}return s})(),R=(()=>{class s{_table=(0,o.inject)(y,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){const e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,n,i){if(1&t&&(o.\u0275\u0275contentQuery(i,k,5),o.\u0275\u0275contentQuery(i,S,5),o.\u0275\u0275contentQuery(i,x,5)),2&t){let a;o.\u0275\u0275queryRefresh(a=o.\u0275\u0275loadQuery())&&(n.cell=a.first),o.\u0275\u0275queryRefresh(a=o.\u0275\u0275loadQuery())&&(n.headerCell=a.first),o.\u0275\u0275queryRefresh(a=o.\u0275\u0275loadQuery())&&(n.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",o.booleanAttribute],stickyEnd:[2,"stickyEnd","stickyEnd",o.booleanAttribute]},features:[o.\u0275\u0275ProvidersFeature([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:s}]),o.\u0275\u0275InputTransformsFeature]})}return s})();class v{constructor(r,e){e.nativeElement.classList.add(...r._columnCssClassName)}}let N=(()=>{class s extends v{constructor(){super((0,o.inject)(R),(0,o.inject)(o.ElementRef))}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[o.\u0275\u0275InheritDefinitionFeature]})}return s})(),Y=(()=>{class s extends v{constructor(){const e=(0,o.inject)(R),t=(0,o.inject)(o.ElementRef);super(e,t);const n=e._table?._getCellRole();n&&t.nativeElement.setAttribute("role",n)}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["cdk-footer-cell"],["td","cdk-footer-cell",""]],hostAttrs:[1,"cdk-footer-cell"],features:[o.\u0275\u0275InheritDefinitionFeature]})}return s})(),I=(()=>{class s extends v{constructor(){const e=(0,o.inject)(R),t=(0,o.inject)(o.ElementRef);super(e,t);const n=e._table?._getCellRole();n&&t.nativeElement.setAttribute("role",n)}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[o.\u0275\u0275InheritDefinitionFeature]})}return s})();class F{tasks=[];endTasks=[]}const A=new o.InjectionToken("_COALESCED_STYLE_SCHEDULER");let Z=(()=>{class s{_currentSchedule=null;_ngZone=(0,o.inject)(o.NgZone);constructor(){}schedule(e){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(e)}scheduleEnd(e){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(e)}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new F,this._ngZone.runOutsideAngular(()=>queueMicrotask(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){const e=this._currentSchedule;this._currentSchedule=new F;for(const t of e.tasks)t();for(const t of e.endTasks)t()}this._currentSchedule=null})))}static \u0275fac=function(t){return new(t||s)};static \u0275prov=o.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac})}return s})();const we="<ng-container cdkCellOutlet></ng-container>";let T=(()=>{class s{template=(0,o.inject)(o.TemplateRef);_differs=(0,o.inject)(o.IterableDiffers);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){const t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof E?e.headerCell.template:this instanceof b?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,features:[o.\u0275\u0275NgOnChangesFeature]})}return s})(),E=(()=>{class s extends T{_table=(0,o.inject)(y,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super((0,o.inject)(o.TemplateRef),(0,o.inject)(o.IterableDiffers))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){const e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",o.booleanAttribute]},features:[o.\u0275\u0275InputTransformsFeature,o.\u0275\u0275InheritDefinitionFeature,o.\u0275\u0275NgOnChangesFeature]})}return s})(),b=(()=>{class s extends T{_table=(0,o.inject)(y,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super((0,o.inject)(o.TemplateRef),(0,o.inject)(o.IterableDiffers))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){const e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",o.booleanAttribute]},features:[o.\u0275\u0275InputTransformsFeature,o.\u0275\u0275InheritDefinitionFeature,o.\u0275\u0275NgOnChangesFeature]})}return s})(),j=(()=>{class s extends T{_table=(0,o.inject)(y,{optional:!0});when;constructor(){super((0,o.inject)(o.TemplateRef),(0,o.inject)(o.IterableDiffers))}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[o.\u0275\u0275InheritDefinitionFeature]})}return s})(),g=(()=>{class s{_viewContainer=(0,o.inject)(o.ViewContainerRef);cells;context;static mostRecentCellOutlet=null;constructor(){s.mostRecentCellOutlet=this}ngOnDestroy(){s.mostRecentCellOutlet===this&&(s.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","cdkCellOutlet",""]]})}return s})(),G=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275cmp=o.\u0275\u0275defineComponent({type:s,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){1&t&&o.\u0275\u0275elementContainer(0,0)},dependencies:[g],encapsulation:2})}return s})(),X=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275cmp=o.\u0275\u0275defineComponent({type:s,selectors:[["cdk-footer-row"],["tr","cdk-footer-row",""]],hostAttrs:["role","row",1,"cdk-footer-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){1&t&&o.\u0275\u0275elementContainer(0,0)},dependencies:[g],encapsulation:2})}return s})(),q=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275cmp=o.\u0275\u0275defineComponent({type:s,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){1&t&&o.\u0275\u0275elementContainer(0,0)},dependencies:[g],encapsulation:2})}return s})(),P=(()=>{class s{templateRef=(0,o.inject)(o.TemplateRef);_contentClassName="cdk-no-data-row";constructor(){}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["ng-template","cdkNoDataRow",""]]})}return s})();const L=["top","bottom","left","right"];class J{_isNativeHtmlTable;_stickCellCss;direction;_coalescedStyleScheduler;_isBrowser;_needsPositionStickyOnElement;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(r=>this._updateCachedSizes(r)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(r,e,t,n,i=!0,a=!0,l,c){this._isNativeHtmlTable=r,this._stickCellCss=e,this.direction=t,this._coalescedStyleScheduler=n,this._isBrowser=i,this._needsPositionStickyOnElement=a,this._positionListener=l,this._tableInjector=c,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(r,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(r);const t=[];for(const n of r)n.nodeType===n.ELEMENT_NODE&&t.push(n,...Array.from(n.children));this._afterNextRender({write:()=>{for(const n of t)this._removeStickyStyle(n,e)}})}updateStickyColumns(r,e,t,n=!0,i=!0){if(i&&this._updateStickyColumnReplayQueue({rows:[...r],stickyStartStates:[...e],stickyEndStates:[...t]}),!r.length||!this._isBrowser||!e.some(_=>_)&&!t.some(_=>_))return void(this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:[]}),this._positionListener.stickyEndColumnsUpdated({sizes:[]})));const a=r[0],l=a.children.length,c="rtl"===this.direction,d=c?"right":"left",h=c?"left":"right",w=e.lastIndexOf(!0),C=t.indexOf(!0);let D,se,ne;this._afterNextRender({earlyRead:()=>{D=this._getCellWidths(a,n),se=this._getStickyStartColumnPositions(D,e),ne=this._getStickyEndColumnPositions(D,t)},write:()=>{for(const _ of r)for(let u=0;u<l;u++){const ie=_.children[u];e[u]&&this._addStickyStyle(ie,d,se[u],u===w),t[u]&&this._addStickyStyle(ie,h,ne[u],u===C)}this._positionListener&&D.some(_=>!!_)&&(this._positionListener.stickyColumnsUpdated({sizes:-1===w?[]:D.slice(0,w+1).map((_,u)=>e[u]?_:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:-1===C?[]:D.slice(C).map((_,u)=>t[u+C]?_:null).reverse()}))}})}stickRows(r,e,t){if(!this._isBrowser)return;const n="bottom"===t?r.slice().reverse():r,i="bottom"===t?e.slice().reverse():e,a=[],l=[],c=[];this._afterNextRender({earlyRead:()=>{for(let d=0,h=0;d<n.length;d++){if(!i[d])continue;a[d]=h;const w=n[d];c[d]=this._isNativeHtmlTable?Array.from(w.children):[w];const C=this._retrieveElementSize(w).height;h+=C,l[d]=C}},write:()=>{const d=i.lastIndexOf(!0);for(let h=0;h<n.length;h++){if(!i[h])continue;const w=a[h],C=h===d;for(const D of c[h])this._addStickyStyle(D,t,w,C)}"top"===t?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:a,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:a,elements:c})}})}updateStickyFooterContainer(r,e){this._isNativeHtmlTable&&this._afterNextRender({write:()=>{const t=r.querySelector("tfoot");t&&(e.some(n=>!n)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._destroyed=!0}_removeStickyStyle(r,e){for(const n of e)r.style[n]="",r.classList.remove(this._borderCellCss[n]);L.some(n=>-1===e.indexOf(n)&&r.style[n])?r.style.zIndex=this._getCalculatedZIndex(r):(r.style.zIndex="",this._needsPositionStickyOnElement&&(r.style.position=""),r.classList.remove(this._stickCellCss))}_addStickyStyle(r,e,t,n){r.classList.add(this._stickCellCss),n&&r.classList.add(this._borderCellCss[e]),r.style[e]=`${t}px`,r.style.zIndex=this._getCalculatedZIndex(r),this._needsPositionStickyOnElement&&(r.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(r){const e={top:100,bottom:10,left:1,right:1};let t=0;for(const n of L)r.style[n]&&(t+=e[n]);return t?`${t}`:""}_getCellWidths(r,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;const t=[],n=r.children;for(let i=0;i<n.length;i++)t.push(this._retrieveElementSize(n[i]).width);return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(r,e){const t=[];let n=0;for(let i=0;i<r.length;i++)e[i]&&(t[i]=n,n+=r[i]);return t}_getStickyEndColumnPositions(r,e){const t=[];let n=0;for(let i=r.length;i>0;i--)e[i]&&(t[i]=n,n+=r[i]);return t}_retrieveElementSize(r){const e=this._elemSizeCache.get(r);if(e)return e;const t=r.getBoundingClientRect(),n={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(r,n),this._resizeObserver.observe(r,{box:"border-box"})),n}_updateStickyColumnReplayQueue(r){this._removeFromStickyColumnReplayQueue(r.rows),!this._stickyColumnsReplayTimeout&&this._updatedStickyColumnsParamsToReplay.push(r)}_removeFromStickyColumnReplayQueue(r){const e=new Set(r);for(const t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(r){let e=!1;for(const t of r){const n=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};n.width!==this._elemSizeCache.get(t.target)?.width&&Ce(t.target)&&(e=!0),this._elemSizeCache.set(t.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(const t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}_afterNextRender(r){this._tableInjector?(0,o.afterNextRender)(r,{injector:this._tableInjector}):this._coalescedStyleScheduler.schedule(()=>{r.earlyRead?.(),r.write()})}}function Ce(s){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(r=>s.classList.contains(r))}const H=new o.InjectionToken("CDK_SPL");let ee=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["cdk-table","recycleRows",""],["table","cdk-table","","recycleRows",""]],features:[o.\u0275\u0275ProvidersFeature([{provide:m._VIEW_REPEATER_STRATEGY,useClass:m._RecycleViewRepeaterStrategy}])]})}return s})(),B=(()=>{class s{viewContainer=(0,o.inject)(o.ViewContainerRef);elementRef=(0,o.inject)(o.ElementRef);constructor(){const e=(0,o.inject)(y);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","rowOutlet",""]]})}return s})(),z=(()=>{class s{viewContainer=(0,o.inject)(o.ViewContainerRef);elementRef=(0,o.inject)(o.ElementRef);constructor(){const e=(0,o.inject)(y);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","headerRowOutlet",""]]})}return s})(),U=(()=>{class s{viewContainer=(0,o.inject)(o.ViewContainerRef);elementRef=(0,o.inject)(o.ElementRef);constructor(){const e=(0,o.inject)(y);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","footerRowOutlet",""]]})}return s})(),Q=(()=>{class s{viewContainer=(0,o.inject)(o.ViewContainerRef);elementRef=(0,o.inject)(o.ElementRef);constructor(){const e=(0,o.inject)(y);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||s)};static \u0275dir=o.\u0275\u0275defineDirective({type:s,selectors:[["","noDataRowOutlet",""]]})}return s})();const Re='\n  <ng-content select="caption"/>\n  <ng-content select="colgroup, col"/>\n\n  \x3c!--\n    Unprojected content throws a hydration error so we need this to capture it.\n    It gets removed on the client so it doesn\'t affect the layout.\n  --\x3e\n  @if (_isServer) {\n    <ng-content/>\n  }\n\n  @if (_isNativeHtmlTable) {\n    <thead role="rowgroup">\n      <ng-container headerRowOutlet/>\n    </thead>\n    <tbody role="rowgroup">\n      <ng-container rowOutlet/>\n      <ng-container noDataRowOutlet/>\n    </tbody>\n    <tfoot role="rowgroup">\n      <ng-container footerRowOutlet/>\n    </tfoot>\n  } @else {\n    <ng-container headerRowOutlet/>\n    <ng-container rowOutlet/>\n    <ng-container noDataRowOutlet/>\n    <ng-container footerRowOutlet/>\n  }\n';let W=(()=>{class s{_differs=(0,o.inject)(o.IterableDiffers);_changeDetectorRef=(0,o.inject)(o.ChangeDetectorRef);_elementRef=(0,o.inject)(o.ElementRef);_dir=(0,o.inject)(re.Directionality,{optional:!0});_platform=(0,o.inject)(ae.Platform);_viewRepeater=(0,o.inject)(m._VIEW_REPEATER_STRATEGY);_coalescedStyleScheduler=(0,o.inject)(A);_viewportRuler=(0,o.inject)(K.ViewportRuler);_stickyPositioningListener=(0,o.inject)(H,{optional:!0,skipSelf:!0});_document=(0,o.inject)(le.DOCUMENT);_data;_onDestroy=new p.Subject;_renderRows;_renderChangeSubscription;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_getCellRole(){if(void 0===this._cellRoleInternal){const e=this._elementRef.nativeElement.getAttribute("role");return"grid"===e||"treegrid"===e?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}_dataSource;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;contentChanged=new o.EventEmitter;viewChange=new p.BehaviorSubject({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;_injector=(0,o.inject)(o.Injector);constructor(){(0,o.inject)(new o.HostAttributeToken("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}ngOnInit(){this._setupStickyStyler(),this._dataDiffer=this._differs.find([]).create((e,t)=>this.trackBy?this.trackBy(t.dataIndex,t.data):t),this._viewportRuler.change().pipe((0,M.takeUntil)(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._onDestroy.next(),this._onDestroy.complete(),(0,m.isDataSource)(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const e=this._dataDiffer.diff(this._renderRows);if(!e)return this._updateNoDataRow(),void this.contentChanged.next();const t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(n,i,a)=>this._getEmbeddedViewArgs(n.item,a),n=>n.item.data,n=>{n.operation===m._ViewRepeaterOperation.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{t.get(n.currentIndex).context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){const e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){const n=te(this._headerRowOutlet,"thead");n&&(n.style.display=e.length?"":"none")}const t=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){const e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){const n=te(this._footerRowOutlet,"tfoot");n&&(n.style.display=e.length?"":"none")}const t=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){const e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...n],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((i,a)=>{this._addStickyColumnStyles([i],this._headerRowDefs[a])}),this._rowDefs.forEach(i=>{const a=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===i&&a.push(t[l]);this._addStickyColumnStyles(a,i)}),n.forEach((i,a)=>{this._addStickyColumnStyles([i],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(i=>i.resetStickyChanged())}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs();const t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){const e=[],t=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let n=0;n<this._data.length;n++){let i=this._data[n];const a=this._getRenderRowsForData(i,n,t.get(i));this._cachedRenderRowsMap.has(i)||this._cachedRenderRowsMap.set(i,new WeakMap);for(let l=0;l<a.length;l++){let c=a[l];const d=this._cachedRenderRowsMap.get(c.data);d.has(c.rowDef)?d.get(c.rowDef).push(c):d.set(c.rowDef,[c]),e.push(c)}}return e}_getRenderRowsForData(e,t,n){return this._getRowDefs(e,t).map(a=>{const l=n&&n.has(a)?n.get(a):[];if(l.length){const c=l.shift();return c.dataIndex=t,c}return{data:e,rowDef:a,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),O(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=O(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=O(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=O(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){const e=(a,l)=>{const c=!!l.getColumnsDiff();return a||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();const n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();const i=this._footerRowDefs.reduce(e,!1);return i&&this._forceRenderFooterRows(),t||n||i}_switchDataSource(e){this._data=[],(0,m.isDataSource)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;(0,m.isDataSource)(this.dataSource)?e=this.dataSource.connect(this):(0,p.isObservable)(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=(0,p.of)(this.dataSource)),this._renderChangeSubscription=e.pipe((0,M.takeUntil)(this._onDestroy)).subscribe(t=>{this._data=t||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){const n=Array.from(t?.columns||[]).map(l=>this._columnDefsByName.get(l)),i=n.map(l=>l.sticky),a=n.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,i,a,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){const t=[];for(let n=0;n<e.viewContainer.length;n++){const i=e.viewContainer.get(n);t.push(i.rootNodes[0])}return t}_getRowDefs(e,t){if(1==this._rowDefs.length)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(i=>!i.when||i.when(t,e));else{let i=this._rowDefs.find(a=>a.when&&a.when(t,e))||this._defaultRowDef;i&&n.push(i)}return n}_getEmbeddedViewArgs(e,t){return{templateRef:e.rowDef.template,context:{$implicit:e.data},index:t}}_renderRow(e,t,n,i={}){const a=e.viewContainer.createEmbeddedView(t.template,i,n);return this._renderCellTemplateForItem(t,i),a}_renderCellTemplateForItem(e,t){for(let n of this._getCellTemplates(e))g.mostRecentCellOutlet&&g.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const e=this._rowOutlet.viewContainer;for(let t=0,n=e.length;t<n;t++){const a=e.get(t).context;a.count=n,a.first=0===t,a.last=t===n-1,a.even=t%2==0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[t].dataIndex,a.renderIndex=t):a.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return e&&e.columns?Array.from(e.columns,t=>{const n=this._columnDefsByName.get(t);return e.extractCellTemplate(n)}):[]}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const e=(t,n)=>t||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){this._stickyStyler=new J(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener,this._injector),(this._dir?this._dir.change:(0,p.of)()).pipe((0,M.takeUntil)(this._onDestroy)).subscribe(t=>{this._stickyStyler.direction=t,this.updateStickyColumnStyles()})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){const e=this._customNoDataRow||this._noDataRow;if(!e)return;const t=0===this._rowOutlet.viewContainer.length;if(t===this._isShowingNoDataRow)return;const n=this._noDataRowOutlet.viewContainer;if(t){const i=n.createEmbeddedView(e.templateRef),a=i.rootNodes[0];1===i.rootNodes.length&&a?.nodeType===this._document.ELEMENT_NODE&&(a.setAttribute("role","row"),a.classList.add(e._contentClassName))}else n.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=o.\u0275\u0275defineComponent({type:s,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,n,i){if(1&t&&(o.\u0275\u0275contentQuery(i,P,5),o.\u0275\u0275contentQuery(i,R,5),o.\u0275\u0275contentQuery(i,j,5),o.\u0275\u0275contentQuery(i,E,5),o.\u0275\u0275contentQuery(i,b,5)),2&t){let a;o.\u0275\u0275queryRefresh(a=o.\u0275\u0275loadQuery())&&(n._noDataRow=a.first),o.\u0275\u0275queryRefresh(a=o.\u0275\u0275loadQuery())&&(n._contentColumnDefs=a),o.\u0275\u0275queryRefresh(a=o.\u0275\u0275loadQuery())&&(n._contentRowDefs=a),o.\u0275\u0275queryRefresh(a=o.\u0275\u0275loadQuery())&&(n._contentHeaderRowDefs=a),o.\u0275\u0275queryRefresh(a=o.\u0275\u0275loadQuery())&&(n._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,n){2&t&&o.\u0275\u0275classProp("cdk-table-fixed-layout",n.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",o.booleanAttribute],fixedLayout:[2,"fixedLayout","fixedLayout",o.booleanAttribute]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[o.\u0275\u0275ProvidersFeature([{provide:y,useExisting:s},{provide:m._VIEW_REPEATER_STRATEGY,useClass:m._DisposeViewRepeaterStrategy},{provide:A,useClass:Z},{provide:H,useValue:null}]),o.\u0275\u0275InputTransformsFeature],ngContentSelectors:ue,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){1&t&&(o.\u0275\u0275projectionDef(de),o.\u0275\u0275projection(0),o.\u0275\u0275projection(1,1),o.\u0275\u0275template(2,fe,1,0)(3,he,7,0)(4,_e,4,0)),2&t&&(o.\u0275\u0275advance(2),o.\u0275\u0275conditional(n._isServer?2:-1),o.\u0275\u0275advance(),o.\u0275\u0275conditional(n._isNativeHtmlTable?3:4))},dependencies:[z,B,Q,U],styles:[".cdk-table-fixed-layout{table-layout:fixed}"],encapsulation:2})}return s})();function O(s,r){return s.concat(Array.from(r))}function te(s,r){const e=r.toUpperCase();let t=s.viewContainer.element.nativeElement;for(;t;){const n=1===t.nodeType?t.nodeName:null;if(n===e)return t;if("TABLE"===n)break;t=t.parentNode}return null}let oe=(()=>{class s{_table=(0,o.inject)(W,{optional:!0});_options=(0,o.inject)($,{optional:!0});get name(){return this._name}set name(e){this._name=e,this._syncColumnDefName()}_name;headerText;dataAccessor;justify="start";columnDef;cell;headerCell;constructor(){this._options=this._options||{}}ngOnInit(){this._syncColumnDefName(),void 0===this.headerText&&(this.headerText=this._createDefaultHeaderText()),this.dataAccessor||(this.dataAccessor=this._options.defaultDataAccessor||((e,t)=>e[t])),this._table&&(this.columnDef.cell=this.cell,this.columnDef.headerCell=this.headerCell,this._table.addColumnDef(this.columnDef))}ngOnDestroy(){this._table&&this._table.removeColumnDef(this.columnDef)}_createDefaultHeaderText(){const e=this.name;return this._options&&this._options.defaultHeaderTextTransform?this._options.defaultHeaderTextTransform(e):e[0].toUpperCase()+e.slice(1)}_syncColumnDefName(){this.columnDef&&(this.columnDef.name=this.name)}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=o.\u0275\u0275defineComponent({type:s,selectors:[["cdk-text-column"]],viewQuery:function(t,n){if(1&t&&(o.\u0275\u0275viewQuery(R,7),o.\u0275\u0275viewQuery(k,7),o.\u0275\u0275viewQuery(S,7)),2&t){let i;o.\u0275\u0275queryRefresh(i=o.\u0275\u0275loadQuery())&&(n.columnDef=i.first),o.\u0275\u0275queryRefresh(i=o.\u0275\u0275loadQuery())&&(n.cell=i.first),o.\u0275\u0275queryRefresh(i=o.\u0275\u0275loadQuery())&&(n.headerCell=i.first)}},inputs:{name:"name",headerText:"headerText",dataAccessor:"dataAccessor",justify:"justify"},decls:3,vars:0,consts:[["cdkColumnDef",""],["cdk-header-cell","",3,"text-align",4,"cdkHeaderCellDef"],["cdk-cell","",3,"text-align",4,"cdkCellDef"],["cdk-header-cell",""],["cdk-cell",""]],template:function(t,n){1&t&&(o.\u0275\u0275elementContainerStart(0,0),o.\u0275\u0275template(1,me,2,3,"th",1)(2,ye,2,3,"td",2),o.\u0275\u0275elementContainerEnd())},dependencies:[R,S,N,k,I],encapsulation:2})}return s})(),De=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275mod=o.\u0275\u0275defineNgModule({type:s});static \u0275inj=o.\u0275\u0275defineInjector({imports:[K.ScrollingModule]})}return s})();function ge(s){return class extends s{get sticky(){return this._sticky}set sticky(r){const e=this._sticky;this._sticky=(0,ce.coerceBooleanProperty)(r),this._hasStickyChanged=e!==this._sticky}_sticky=!1;_hasStickyChanged=!1;hasStickyChanged(){const r=this._hasStickyChanged;return this._hasStickyChanged=!1,r}resetStickyChanged(){this._hasStickyChanged=!1}constructor(...r){super(...r)}}}}}]);