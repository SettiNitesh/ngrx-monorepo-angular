(self.webpackChunkmfe=self.webpackChunkmfe||[]).push([[4584],{4584:(L,M,r)=>{r.r(M),r.d(M,{ButtonComponent:()=>k,SharedComponent:()=>A,SharedService:()=>T,addCategory:()=>_,addToCounter:()=>S,categories:()=>v,categoriesSelector:()=>B,categoryReducer:()=>R,counterReducer:()=>O,decrement:()=>h,getCategories:()=>f,getCounter:()=>W,increment:()=>y,initialCounterState:()=>p,initialState:()=>D,reset:()=>E});var e=r(4119),n=r(3294),i=r(5699),u=r(3037),d=r(3497),m=r(1301),g=r(5753);function b(t,s){if(1&t&&(e.\u0275\u0275elementStart(0,"li"),e.\u0275\u0275text(1," You chose: "),e.\u0275\u0275elementStart(2,"em"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()()),2&t){const l=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(l.animal())}}let A=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["lib-shared"]],decls:2,vars:0,template:function(o,a){1&o&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1," shared works! "),e.\u0275\u0275elementEnd())},encapsulation:2})}return t})(),T=(()=>{class t{constructor(){}getCategories(){return[{name:"Horror"},{name:"Drama"},{name:"Romance"}]}static \u0275fac=function(o){return new(o||t)};static \u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const f=(0,n.createAction)("[Category Component] GetCategories"),_=(0,n.createAction)("[Category Component] Add Category",(0,n.props)()),D={categories:[{name:"Horror"},{name:"Drama"},{name:"Romance"}]},v="categories",R=(0,n.createReducer)(D,(0,n.on)(f,t=>({...t,categories:t.categories})),(0,n.on)(_,(t,s)=>({...t,categories:[...t.categories,s.category]}))),P=(0,n.createFeatureSelector)(v),B=(0,n.createSelector)(P,t=>t.categories),y=(0,n.createAction)("[Counter] Increment"),h=(0,n.createAction)("[Counter] Decrement"),E=(0,n.createAction)("reset"),S=(0,n.createAction)("addToCounter",(0,n.props)()),p={counter:0},I=(0,n.createReducer)(p,(0,n.on)(y,t=>({...t,counter:t.counter+1})),(0,n.on)(h,t=>({...t,counter:t.counter-1})),(0,n.on)(E,t=>({...t,counter:0})),(0,n.on)(S,(t,s)=>({...t,counter:t.counter+s.value}))),O=(t=p,s)=>I(t,s),F=(0,n.createFeatureSelector)("counter"),W=(0,n.createSelector)(F,t=>t.counter);let x=(()=>{class t{dialogRef=(0,e.inject)(d.MatDialogRef);data=(0,e.inject)(d.MAT_DIALOG_DATA);animal=(0,e.model)(this.data.animal);onNoClick(){this.dialogRef.close()}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["lib-dialog"]],inputs:{animal:[1,"animal"]},outputs:{animal:"animalChange"},decls:12,vars:2,consts:[["matInput","",3,"ngModelChange","ngModel"],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(o,a){1&o&&(e.\u0275\u0275elementStart(0,"mat-dialog-content")(1,"p"),e.\u0275\u0275text(2,"What's your favorite animal?"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"mat-form-field")(4,"mat-label"),e.\u0275\u0275text(5,"Favorite Animal"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"input",0),e.\u0275\u0275twoWayListener("ngModelChange",function(c){return e.\u0275\u0275twoWayBindingSet(a.animal,c)||(a.animal=c),c}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(7,"mat-dialog-actions")(8,"button",1),e.\u0275\u0275listener("click",function(){return a.onNoClick()}),e.\u0275\u0275text(9,"No Thanks"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"button",2),e.\u0275\u0275text(11,"Ok"),e.\u0275\u0275elementEnd()()),2&o&&(e.\u0275\u0275advance(6),e.\u0275\u0275twoWayProperty("ngModel",a.animal),e.\u0275\u0275advance(4),e.\u0275\u0275property("mat-dialog-close",a.animal()))},dependencies:[d.MatDialogActions,d.MatDialogClose,d.MatDialogContent,m.MatFormFieldModule,m.MatFormField,m.MatLabel,i.FormsModule,i.DefaultValueAccessor,i.NgControlStatus,i.NgModel,u.MatButtonModule,u.MatButton,g.MatInputModule,g.MatInput],encapsulation:2})}return t})(),k=(()=>{class t{color="primary";variant="basic";disabled=!1;icon;animal=(0,e.signal)("");name=(0,e.model)("");dialog=(0,e.inject)(d.MatDialog);openDialog(){this.dialog.open(x,{data:{name:this.name(),animal:this.animal()}}).afterClosed().subscribe(o=>{console.log("The dialog was closed"),void 0!==o&&this.animal.set(o)})}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["lib-button"]],inputs:{color:"color",variant:"variant",disabled:"disabled",icon:"icon",name:[1,"name"]},outputs:{name:"nameChange"},decls:10,vars:2,consts:[["matInput","",3,"ngModelChange","ngModel"],["mat-raised-button","",3,"click"]],template:function(o,a){1&o&&(e.\u0275\u0275elementStart(0,"ol")(1,"li")(2,"mat-form-field")(3,"mat-label"),e.\u0275\u0275text(4,"What's your name?"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"input",0),e.\u0275\u0275twoWayListener("ngModelChange",function(c){return e.\u0275\u0275twoWayBindingSet(a.name,c)||(a.name=c),c}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(6,"li")(7,"button",1),e.\u0275\u0275listener("click",function(){return a.openDialog()}),e.\u0275\u0275text(8,"Pick one"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(9,b,4,1,"li"),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275advance(5),e.\u0275\u0275twoWayProperty("ngModel",a.name),e.\u0275\u0275advance(4),e.\u0275\u0275conditional(a.animal()?9:-1))},dependencies:[u.MatButtonModule,u.MatButton,m.MatFormFieldModule,m.MatFormField,m.MatLabel,g.MatInputModule,g.MatInput,i.FormsModule,i.DefaultValueAccessor,i.NgControlStatus,i.NgModel],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px;color:#fff}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.example-card-footer[_ngcontent-%COMP%]{padding:16px}"]})}return t})()}}]);