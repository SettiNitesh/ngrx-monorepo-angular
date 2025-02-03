(self.webpackChunkmfe=self.webpackChunkmfe||[]).push([[4268],{4268:(Bt,G,_)=>{_.r(G),_.d(G,{INITIAL_OPTIONS:()=>z,RECOMPUTE:()=>lt,REDUX_DEVTOOLS_EXTENSION:()=>j,StoreDevtools:()=>F,StoreDevtoolsConfig:()=>Ct,StoreDevtoolsModule:()=>zt,provideStoreDevtools:()=>ft});var f=_(4119),A=_(3294),C=_(4866),h=_(2778),pt=_(4339);const R="PERFORM_ACTION",W="RESET",H="ROLLBACK",V="COMMIT",X="SWEEP",Z="TOGGLE_ACTION",Y="JUMP_TO_STATE",Q="JUMP_TO_ACTION",$="IMPORT_STATE",q="LOCK_CHANGES",tt="PAUSE_RECORDING";class M{constructor(n,e){if(this.action=n,this.timestamp=e,this.type=R,typeof n.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}}class St{constructor(){this.type="REFRESH"}}class It{constructor(n){this.timestamp=n,this.type=W}}class mt{constructor(n){this.timestamp=n,this.type=H}}class Et{constructor(n){this.timestamp=n,this.type=V}}class Tt{constructor(){this.type=X}}class Ot{constructor(n){this.id=n,this.type=Z}}class At{constructor(n){this.index=n,this.type=Y}}class xt{constructor(n){this.actionId=n,this.type=Q}}class yt{constructor(n){this.nextLiftedState=n,this.type=$}}class vt{constructor(n){this.status=n,this.type=q}}class bt{constructor(n){this.status=n,this.type=tt}}class Ct{constructor(){this.maxAge=!1}}const P=new f.InjectionToken("@ngrx/store-devtools Options"),z=new f.InjectionToken("@ngrx/store-devtools Initial Config");function et(){return null}const Dt="NgRx Store DevTools";function _t(t){const n={maxAge:!1,monitor:et,actionSanitizer:void 0,stateSanitizer:void 0,name:Dt,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},e="function"==typeof t?t():t,i=e.features||!!e.logOnly&&{pause:!0,export:!0,test:!0}||n.features;!0===i.import&&(i.import="custom");const a=Object.assign({},n,{features:i},e);if(a.maxAge&&a.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${a.maxAge}`);return a}function nt(t,n){return t.filter(e=>n.indexOf(e)<0)}function st(t){const{computedStates:n,currentStateIndex:e}=t;if(e>=n.length){const{state:i}=n[n.length-1];return i}const{state:s}=n[e];return s}function w(t){return new M(t,+Date.now())}function Rt(t,n){return Object.keys(n).reduce((e,s)=>{const i=Number(s);return e[i]=it(t,n[i],i),e},{})}function it(t,n,e){return{...n,action:t(n.action,e)}}function wt(t,n){return n.map((e,s)=>({state:ot(t,e.state,s),error:e.error}))}function ot(t,n,e){return t(n,e)}function rt(t){return t.predicate||t.actionsSafelist||t.actionsBlocklist}function B(t,n,e,s,i){const a=e&&!e(t,n.action),I=s&&!n.action.type.match(s.map(m=>ct(m)).join("|")),l=i&&n.action.type.match(i.map(m=>ct(m)).join("|"));return a||I||l}function ct(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function at(t){return{ngZone:t?(0,f.inject)(f.NgZone):null,connectInZone:t}}let k=(()=>{class t extends A.ActionsSubject{static{this.\u0275fac=(()=>{let e;return function(i){return(e||(e=f.\u0275\u0275getInheritedFactory(t)))(i||t)}})()}static{this.\u0275prov=f.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac})}}return t})();const j=new f.InjectionToken("@ngrx/store-devtools Redux Devtools Extension");let ut=(()=>{class t{constructor(e,s,i){this.config=s,this.dispatcher=i,this.zoneConfig=at(this.config.connectInZone),this.devtoolsExtension=e,this.createActionStreams()}notify(e,s){if(this.devtoolsExtension)if(e.type===R){if(s.isLocked||s.isPaused)return;const i=st(s);if(rt(this.config)&&B(i,e,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;const a=this.config.stateSanitizer?ot(this.config.stateSanitizer,i,s.currentStateIndex):i,I=this.config.actionSanitizer?it(this.config.actionSanitizer,e,s.nextActionId):e;this.sendToReduxDevtools(()=>this.extensionConnection.send(I,a))}else{const i={...s,stagedActionIds:s.stagedActionIds,actionsById:this.config.actionSanitizer?Rt(this.config.actionSanitizer,s.actionsById):s.actionsById,computedStates:this.config.stateSanitizer?wt(this.config.stateSanitizer,s.computedStates):s.computedStates};this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,i,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new C.Observable(e=>{const s=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=s,s.init(),s.subscribe(i=>e.next(i)),s.unsubscribe}):C.EMPTY}createActionStreams(){const e=this.createChangesObservable().pipe((0,h.share)()),s=e.pipe((0,h.filter)(o=>"START"===o.type)),i=e.pipe((0,h.filter)(o=>"STOP"===o.type)),a=e.pipe((0,h.filter)(o=>"DISPATCH"===o.type),(0,h.map)(o=>this.unwrapAction(o.payload)),(0,h.concatMap)(o=>o.type===$?this.dispatcher.pipe((0,h.filter)(E=>E.type===A.UPDATE),(0,h.timeout)(1e3),(0,h.debounceTime)(1e3),(0,h.map)(()=>o),(0,h.catchError)(()=>(0,C.of)(o)),(0,h.take)(1)):(0,C.of)(o))),l=e.pipe((0,h.filter)(o=>"ACTION"===o.type),(0,h.map)(o=>this.unwrapAction(o.payload))).pipe((0,h.takeUntil)(i)),m=a.pipe((0,h.takeUntil)(i));this.start$=s.pipe((0,h.takeUntil)(i)),this.actions$=this.start$.pipe((0,h.switchMap)(()=>l)),this.liftedActions$=this.start$.pipe((0,h.switchMap)(()=>m))}unwrapAction(e){return"string"==typeof e?(0,eval)(`(${e})`):e}getExtensionConfig(e){const s={name:e.name,features:e.features,serialize:e.serialize,autoPause:e.autoPause??!1,trace:e.trace??!1,traceLimit:e.traceLimit??75};return!1!==e.maxAge&&(s.maxAge=e.maxAge),s}sendToReduxDevtools(e){try{e()}catch(s){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",s)}}static{this.\u0275fac=function(s){return new(s||t)(f.\u0275\u0275inject(j),f.\u0275\u0275inject(P),f.\u0275\u0275inject(k))}}static{this.\u0275prov=f.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac})}}return t})();const L={type:A.INIT},lt="@ngrx/store-devtools/recompute",Pt={type:lt};function dt(t,n,e,s,i){if(s)return{state:e,error:"Interrupted by an error up the chain"};let I,a=e;try{a=t(e,n)}catch(l){I=l.toString(),i.handleError(l)}return{state:a,error:I}}function U(t,n,e,s,i,a,I,l,m){if(n>=t.length&&t.length===a.length)return t;const o=t.slice(0,n),E=a.length-(m?1:0);for(let r=n;r<E;r++){const d=a[r],O=i[d].action,u=o[r-1],c=u?u.state:s,y=u?u.error:void 0,v=I.indexOf(d)>-1?u:dt(e,O,c,y,l);o.push(v)}return m&&o.push(t[t.length-1]),o}let F=(()=>{class t{constructor(e,s,i,a,I,l,m,o){const E=function kt(t,n){return{monitorState:n(void 0,{}),nextActionId:1,actionsById:{0:w(L)},stagedActionIds:[0],skippedActionIds:[],committedState:t,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}(m,o.monitor),r=function Nt(t,n,e,s,i={}){return a=>(I,l)=>{let{monitorState:m,actionsById:o,nextActionId:E,stagedActionIds:r,skippedActionIds:d,committedState:O,currentStateIndex:u,computedStates:c,isLocked:y,isPaused:T}=I||n;function v(S){let g=S,D=r.slice(1,g+1);for(let x=0;x<D.length;x++){if(c[x+1].error){g=x,D=r.slice(1,g+1);break}delete o[D[x]]}d=d.filter(x=>-1===D.indexOf(x)),r=[0,...r.slice(g+1)],O=c[g].state,c=c.slice(g),u=u>g?u-g:0}function b(){o={0:w(L)},E=1,r=[0],d=[],O=c[u].state,u=0,c=[]}I||(o=Object.create(o));let p=0;switch(l.type){case q:y=l.status,p=1/0;break;case tt:T=l.status,T?(r=[...r,E],o[E]=new M({type:"@ngrx/devtools/pause"},+Date.now()),E++,p=r.length-1,c=c.concat(c[c.length-1]),u===r.length-2&&u++,p=1/0):b();break;case W:o={0:w(L)},E=1,r=[0],d=[],O=t,u=0,c=[];break;case V:b();break;case H:o={0:w(L)},E=1,r=[0],d=[],u=0,c=[];break;case Z:{const{id:S}=l;d=-1===d.indexOf(S)?[S,...d]:d.filter(D=>D!==S),p=r.indexOf(S);break}case"SET_ACTIONS_ACTIVE":{const{start:S,end:g,active:D}=l,x=[];for(let K=S;K<g;K++)x.push(K);d=D?nt(d,x):[...d,...x],p=r.indexOf(S);break}case Y:u=l.index,p=1/0;break;case Q:{const S=r.indexOf(l.actionId);-1!==S&&(u=S),p=1/0;break}case X:r=nt(r,d),d=[],u=Math.min(u,r.length-1);break;case R:{if(y)return I||n;if(T||I&&B(I.computedStates[u],l,i.predicate,i.actionsSafelist,i.actionsBlocklist)){const g=c[c.length-1];c=[...c.slice(0,-1),dt(a,l.action,g.state,g.error,e)],p=1/0;break}i.maxAge&&r.length===i.maxAge&&v(1),u===r.length-1&&u++;const S=E++;o[S]=l,r=[...r,S],p=r.length-1;break}case $:({monitorState:m,actionsById:o,nextActionId:E,stagedActionIds:r,skippedActionIds:d,committedState:O,currentStateIndex:u,computedStates:c,isLocked:y,isPaused:T}=l.nextLiftedState);break;case A.INIT:p=0,i.maxAge&&r.length>i.maxAge&&(c=U(c,p,a,O,o,r,d,e,T),v(r.length-i.maxAge),p=1/0);break;case A.UPDATE:if(c.filter(g=>g.error).length>0)p=0,i.maxAge&&r.length>i.maxAge&&(c=U(c,p,a,O,o,r,d,e,T),v(r.length-i.maxAge),p=1/0);else{if(!T&&!y){u===r.length-1&&u++;const g=E++;o[g]=new M(l,+Date.now()),r=[...r,g],p=r.length-1,c=U(c,p,a,O,o,r,d,e,T)}c=c.map(g=>({...g,state:a(g.state,Pt)})),u=r.length-1,i.maxAge&&r.length>i.maxAge&&v(r.length-i.maxAge),p=1/0}break;default:p=1/0}return c=U(c,p,a,O,o,r,d,e,T),m=s(m,l),{monitorState:m,actionsById:o,nextActionId:E,stagedActionIds:r,skippedActionIds:d,committedState:O,currentStateIndex:u,computedStates:c,isLocked:y,isPaused:T}}}(m,E,l,o.monitor,o),d=(0,C.merge)((0,C.merge)(s.asObservable().pipe((0,h.skip)(1)),a.actions$).pipe((0,h.map)(w)),e,a.liftedActions$).pipe((0,h.observeOn)(C.queueScheduler)),O=i.pipe((0,h.map)(r)),u=at(o.connectInZone),c=new C.ReplaySubject(1);this.liftedStateSubscription=d.pipe((0,h.withLatestFrom)(O),ht(u),(0,h.scan)(({state:v},[b,p])=>{let S=p(v,b);return b.type!==R&&rt(o)&&(S=function Mt(t,n,e,s){const i=[],a={},I=[];return t.stagedActionIds.forEach((l,m)=>{const o=t.actionsById[l];o&&(m&&B(t.computedStates[m],o,n,e,s)||(a[l]=o,i.push(l),I.push(t.computedStates[m])))}),{...t,stagedActionIds:i,actionsById:a,computedStates:I}}(S,o.predicate,o.actionsSafelist,o.actionsBlocklist)),a.notify(b,S),{state:S,action:b}},{state:E,action:null})).subscribe(({state:v,action:b})=>{c.next(v),b.type===R&&I.next(b.action)}),this.extensionStartSubscription=a.start$.pipe(ht(u)).subscribe(()=>{this.refresh()});const y=c.asObservable(),T=y.pipe((0,h.map)(st));Object.defineProperty(T,"state",{value:(0,pt.toSignal)(T,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=e,this.liftedState=y,this.state=T}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(e){this.dispatcher.next(e)}next(e){this.dispatcher.next(e)}error(e){}complete(){}performAction(e){this.dispatch(new M(e,+Date.now()))}refresh(){this.dispatch(new St)}reset(){this.dispatch(new It(+Date.now()))}rollback(){this.dispatch(new mt(+Date.now()))}commit(){this.dispatch(new Et(+Date.now()))}sweep(){this.dispatch(new Tt)}toggleAction(e){this.dispatch(new Ot(e))}jumpToAction(e){this.dispatch(new xt(e))}jumpToState(e){this.dispatch(new At(e))}importState(e){this.dispatch(new yt(e))}lockChanges(e){this.dispatch(new vt(e))}pauseRecording(e){this.dispatch(new bt(e))}static{this.\u0275fac=function(s){return new(s||t)(f.\u0275\u0275inject(k),f.\u0275\u0275inject(A.ActionsSubject),f.\u0275\u0275inject(A.ReducerObservable),f.\u0275\u0275inject(ut),f.\u0275\u0275inject(A.ScannedActionsSubject),f.\u0275\u0275inject(f.ErrorHandler),f.\u0275\u0275inject(A.INITIAL_STATE),f.\u0275\u0275inject(P))}}static{this.\u0275prov=f.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac})}}return t})();function ht({ngZone:t,connectInZone:n}){return e=>n?new C.Observable(s=>e.subscribe({next:i=>t.run(()=>s.next(i)),error:i=>t.run(()=>s.error(i)),complete:()=>t.run(()=>s.complete())})):e}const jt=new f.InjectionToken("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function Lt(t,n){return!!t||n.monitor!==et}function Ut(){const t="__REDUX_DEVTOOLS_EXTENSION__";return"object"==typeof window&&typeof window[t]<"u"?window[t]:null}function ft(t={}){return(0,f.makeEnvironmentProviders)([ut,k,F,{provide:z,useValue:t},{provide:jt,deps:[j,P],useFactory:Lt},{provide:j,useFactory:Ut},{provide:P,deps:[z],useFactory:_t},{provide:A.StateObservable,deps:[F],useFactory:$t},{provide:A.ReducerManagerDispatcher,useExisting:k}])}function $t(t){return t.state}let zt=(()=>{class t{static instrument(e={}){return{ngModule:t,providers:[ft(e)]}}static{this.\u0275fac=function(s){return new(s||t)}}static{this.\u0275mod=f.\u0275\u0275defineNgModule({type:t})}static{this.\u0275inj=f.\u0275\u0275defineInjector({})}}return t})()}}]);