(self.webpackChunkmfe=self.webpackChunkmfe||[]).push([[6661],{9042:(C,p,a)=>{a.r(p),a.d(p,{MAT_INPUT_CONFIG:()=>v,MAT_INPUT_VALUE_ACCESSOR:()=>m,MatError:()=>l.MatError,MatFormField:()=>l.MatFormField,MatHint:()=>l.MatHint,MatInput:()=>b,MatInputModule:()=>E,MatLabel:()=>l.MatLabel,MatPrefix:()=>l.MatPrefix,MatSuffix:()=>l.MatSuffix,getMatInputUnsupportedTypeError:()=>I});var h=a(6753),c=a(1683),f=a(5589),i=a(4119),g=a(2309),u=a(5699),_=a(5749),l=a(1301),y=a(4866);function I(s){return Error(`Input type "${s}" isn't supported by matInput.`)}const m=new i.InjectionToken("MAT_INPUT_VALUE_ACCESSOR"),M=["button","checkbox","file","hidden","image","radio","range","reset","submit"],v=new i.InjectionToken("MAT_INPUT_CONFIG");let b=(()=>{class s{_elementRef=(0,i.inject)(i.ElementRef);_platform=(0,i.inject)(c.Platform);ngControl=(0,i.inject)(u.NgControl,{optional:!0,self:!0});_autofillMonitor=(0,i.inject)(f.AutofillMonitor);_ngZone=(0,i.inject)(i.NgZone);_formField=(0,i.inject)(l.MAT_FORM_FIELD,{optional:!0});_renderer=(0,i.inject)(i.Renderer2);_uid=(0,i.inject)(g._IdGenerator).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder;_errorStateTracker;_config=(0,i.inject)(v,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_formFieldDescribedBy;_isServer;_isNativeSelect;_isTextarea;_isInFormField;focused=!1;stateChanges=new y.Subject;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=(0,h.coerceBooleanProperty)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(u.Validators.required)??!1}set required(e){this._required=(0,h.coerceBooleanProperty)(e)}_required;get type(){return this._type}set type(e){const t=this._type;this._type=e||"text",this._validateType(),!this._isTextarea&&(0,c.getSupportedInputTypes)().has(this._type)&&(this._elementRef.nativeElement.type=this._type),this._type!==t&&this._ensureWheelDefaultBehavior()}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,h.coerceBooleanProperty)(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>(0,c.getSupportedInputTypes)().has(e));constructor(){const e=(0,i.inject)(u.NgForm,{optional:!0}),t=(0,i.inject)(u.FormGroupDirective,{optional:!0}),r=(0,i.inject)(_.ErrorStateMatcher),n=(0,i.inject)(m,{optional:!0,self:!0}),o=this._elementRef.nativeElement,d=o.nodeName.toLowerCase();n?(0,i.isSignal)(n.value)?this._signalBasedValueAccessor=n:this._inputValueAccessor=n:this._inputValueAccessor=o,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(o,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new _._ErrorStateTracker(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===d,this._isTextarea="textarea"===d,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=o.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&(0,i.effect)(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),null!==this.ngControl.disabled&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){const t=this._elementRef.nativeElement;"number"===t.type?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){const e=this._getPlaceholder();if(e!==this._previousPlaceholder){const t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){M.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused&&!this.disabled||!this.empty}setDescribedByIds(e){const t=this._elementRef.nativeElement,r=t.getAttribute("aria-describedby");let n;if(r){const o=this._formFieldDescribedBy||e;n=e.concat(r.split(" ").filter(d=>d&&!o.includes(d)))}else n=e;this._formFieldDescribedBy=e,n.length?t.setAttribute("aria-describedby",n.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{const t=e.target;!t.value&&0===t.selectionStart&&0===t.selectionEnd&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_webkitBlinkWheelListener=()=>{};_ensureWheelDefaultBehavior(){this._cleanupWebkitWheel?.(),"number"===this._type&&(this._platform.BLINK||this._platform.WEBKIT)&&(this._cleanupWebkitWheel=this._renderer.listen(this._elementRef.nativeElement,"wheel",this._webkitBlinkWheelListener))}_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||s)};static \u0275dir=i.\u0275\u0275defineDirective({type:s,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){1&t&&i.\u0275\u0275listener("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),2&t&&(i.\u0275\u0275hostProperty("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),i.\u0275\u0275attribute("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),i.\u0275\u0275classProp("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",i.booleanAttribute]},exportAs:["matInput"],features:[i.\u0275\u0275ProvidersFeature([{provide:l.MatFormFieldControl,useExisting:s}]),i.\u0275\u0275InputTransformsFeature,i.\u0275\u0275NgOnChangesFeature]})}return s})(),E=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275mod=i.\u0275\u0275defineNgModule({type:s});static \u0275inj=i.\u0275\u0275defineInjector({imports:[_.MatCommonModule,l.MatFormFieldModule,l.MatFormFieldModule,f.TextFieldModule,_.MatCommonModule]})}return s})()}}]);