(self.webpackChunkmfe=self.webpackChunkmfe||[]).push([[4910],{2529:(M,C,c)=>{c.r(C),c.d(C,{CdkDialogContainer:()=>A,DEFAULT_DIALOG_CONFIG:()=>b,DIALOG_DATA:()=>E,DIALOG_SCROLL_STRATEGY:()=>y,DIALOG_SCROLL_STRATEGY_PROVIDER:()=>j,DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY:()=>T,Dialog:()=>I,DialogConfig:()=>f,DialogModule:()=>F,DialogRef:()=>g,throwDialogContentAlreadyAttachedError:()=>P});var u=c(2309),d=c(8663),p=c(1683),h=c(5301),R=c(1945),o=c(4119),m=c(8595),_=c(4866),O=c(8537),k=c(2778);function L(a,l){}class f{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;componentFactoryResolver;providers;container;templateContext}function P(){throw Error("Attempting to attach dialog content after content is already attached")}let A=(()=>{class a extends h.BasePortalOutlet{_elementRef=(0,o.inject)(o.ElementRef);_focusTrapFactory=(0,o.inject)(u.FocusTrapFactory);_config;_interactivityChecker=(0,o.inject)(u.InteractivityChecker);_ngZone=(0,o.inject)(o.NgZone);_overlayRef=(0,o.inject)(d.OverlayRef);_focusMonitor=(0,o.inject)(u.FocusMonitor);_renderer=(0,o.inject)(o.Renderer2);_platform=(0,o.inject)(p.Platform);_document=(0,o.inject)(R.DOCUMENT,{optional:!0});_portalOutlet;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_changeDetectorRef=(0,o.inject)(o.ChangeDetectorRef);_injector=(0,o.inject)(o.Injector);_isDestroyed=!1;constructor(){super(),this._config=(0,o.inject)(f,{optional:!0})||new f,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){const t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();const t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();const t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();const t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const i=()=>{n(),r(),e.removeAttribute("tabindex")},n=this._renderer.listen(e,"blur",i),r=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(){this._isDestroyed||(0,o.afterNextRender)(()=>{const e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement()||this._focusDialogContainer();break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}},{injector:this._injector})}_restoreFocus(){const e=this._config.restoreFocus;let t=null;if("string"==typeof e?t=this._document.querySelector(e):"boolean"==typeof e?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&"function"==typeof t.focus){const i=(0,p._getFocusedElementPierceShadowDom)(),n=this._elementRef.nativeElement;(!i||i===this._document.body||i===n||n.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const e=this._elementRef.nativeElement,t=(0,p._getFocusedElementPierceShadowDom)();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,p._getFocusedElementPierceShadowDom)()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=o.\u0275\u0275defineComponent({type:a,selectors:[["cdk-dialog-container"]],viewQuery:function(t,i){if(1&t&&o.\u0275\u0275viewQuery(h.CdkPortalOutlet,7),2&t){let n;o.\u0275\u0275queryRefresh(n=o.\u0275\u0275loadQuery())&&(i._portalOutlet=n.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,i){2&t&&o.\u0275\u0275attribute("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[o.\u0275\u0275InheritDefinitionFeature],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,i){1&t&&o.\u0275\u0275template(0,L,0,0,"ng-template",0)},dependencies:[h.CdkPortalOutlet],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}return a})();class g{overlayRef;config;componentInstance;componentRef;containerInstance;disableClose;closed=new _.Subject;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(l,e){this.overlayRef=l,this.config=e,this.disableClose=e.disableClose,this.backdropClick=l.backdropClick(),this.keydownEvents=l.keydownEvents(),this.outsidePointerEvents=l.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===m.ESCAPE&&!this.disableClose&&!(0,m.hasModifierKey)(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=l.detachments().subscribe(()=>{!1!==e.closeOnOverlayDetachments&&this.close()})}close(l,e){if(this.containerInstance){const t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(l),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(l="",e=""){return this.overlayRef.updateSize({width:l,height:e}),this}addPanelClass(l){return this.overlayRef.addPanelClass(l),this}removePanelClass(l){return this.overlayRef.removePanelClass(l),this}}const y=new o.InjectionToken("DialogScrollStrategy",{providedIn:"root",factory:()=>{const a=(0,o.inject)(d.Overlay);return()=>a.scrollStrategies.block()}}),E=new o.InjectionToken("DialogData"),b=new o.InjectionToken("DefaultDialogConfig");function T(a){return()=>a.scrollStrategies.block()}const j={provide:y,deps:[d.Overlay],useFactory:T};let I=(()=>{class a{_overlay=(0,o.inject)(d.Overlay);_injector=(0,o.inject)(o.Injector);_defaultOptions=(0,o.inject)(b,{optional:!0});_parentDialog=(0,o.inject)(a,{optional:!0,skipSelf:!0});_overlayContainer=(0,o.inject)(d.OverlayContainer);_idGenerator=(0,o.inject)(u._IdGenerator);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new _.Subject;_afterOpenedAtThisLevel=new _.Subject;_ariaHiddenElements=new Map;_scrollStrategy=(0,o.inject)(y);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=(0,_.defer)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,k.startWith)(void 0)));constructor(){}open(e,t){(t={...this._defaultOptions||new f,...t}).id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);const n=this._getOverlayConfig(t),r=this._overlay.create(n),s=new g(r,t),D=this._attachContainer(r,s,t);return s.containerInstance=D,this._attachDialogContent(e,s,D,t),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){v(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){v(this._openDialogsAtThisLevel,e=>{!1===e.config.closeOnDestroy&&this._removeOpenDialog(e,!1)}),v(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){const t=new d.OverlayConfig({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){const n=i.injector||i.viewContainerRef?.injector,r=[{provide:f,useValue:i},{provide:g,useValue:t},{provide:d.OverlayRef,useValue:e}];let s;i.container?"function"==typeof i.container?s=i.container:(s=i.container.type,r.push(...i.container.providers(i))):s=A;const D=new h.ComponentPortal(s,i.viewContainerRef,o.Injector.create({parent:n||this._injector,providers:r}));return e.attach(D).instance}_attachDialogContent(e,t,i,n){if(e instanceof o.TemplateRef){const r=this._createInjector(n,t,i,void 0);let s={$implicit:n.data,dialogRef:t};n.templateContext&&(s={...s,..."function"==typeof n.templateContext?n.templateContext():n.templateContext}),i.attachTemplatePortal(new h.TemplatePortal(e,null,s,r))}else{const r=this._createInjector(n,t,i,this._injector),s=i.attachComponentPortal(new h.ComponentPortal(e,n.viewContainerRef,r));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,i,n){const r=e.injector||e.viewContainerRef?.injector,s=[{provide:E,useValue:e.data},{provide:g,useValue:t}];return e.providers&&("function"==typeof e.providers?s.push(...e.providers(t,e,i)):s.push(...e.providers)),e.direction&&(!r||!r.get(O.Directionality,null,{optional:!0}))&&s.push({provide:O.Directionality,useValue:{value:e.direction,change:(0,_.of)()}}),o.Injector.create({parent:r||n,providers:s})}_removeOpenDialog(e,t){const i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((n,r)=>{n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const e=this._overlayContainer.getContainerElement();if(e.parentElement){const t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){const n=t[i];n!==e&&"SCRIPT"!==n.nodeName&&"STYLE"!==n.nodeName&&!n.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||a)};static \u0275prov=o.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function v(a,l){let e=a.length;for(;e--;)l(a[e])}let F=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=o.\u0275\u0275defineNgModule({type:a});static \u0275inj=o.\u0275\u0275defineInjector({providers:[I],imports:[d.OverlayModule,h.PortalModule,u.A11yModule,h.PortalModule]})}return a})()}}]);