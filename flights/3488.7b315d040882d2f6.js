(self.webpackChunkflights=self.webpackChunkflights||[]).push([[3488],{3488:(le,V,F)=>{function g(e,r){return Object.is(e,r)}F.r(V),F.d(V,{REACTIVE_NODE:()=>m,SIGNAL:()=>a,SIGNAL_NODE:()=>j,consumerAfterComputation:()=>S,consumerBeforeComputation:()=>I,consumerDestroy:()=>M,consumerMarkDirty:()=>R,consumerPollProducersForChange:()=>x,createComputed:()=>H,createLinkedSignal:()=>ee,createSignal:()=>Q,createWatch:()=>te,defaultEquals:()=>g,getActiveConsumer:()=>B,isInNotificationPhase:()=>P,isReactive:()=>$,linkedSignalSetFn:()=>re,linkedSignalUpdateFn:()=>ne,producerAccessed:()=>h,producerIncrementEpoch:()=>L,producerMarkClean:()=>v,producerNotifyConsumers:()=>T,producerUpdateValueVersion:()=>f,producerUpdatesAllowed:()=>A,runPostSignalSetFn:()=>Y,setActiveConsumer:()=>C,setAlternateWeakRefImpl:()=>ie,setPostSignalSetFn:()=>X,setThrowInvalidWriteToSignalError:()=>J,signalSetFn:()=>k,signalUpdateFn:()=>q});let t=null,p=!1,w=1;const a=Symbol("SIGNAL");function C(e){const r=t;return t=e,r}function B(){return t}function P(){return p}function $(e){return void 0!==e[a]}const m={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function h(e){if(p)throw new Error("");if(null===t)return;t.consumerOnSignalRead(e);const r=t.nextProducerIndex++;O(t),r<t.producerNode.length&&t.producerNode[r]!==e&&N(t)&&y(t.producerNode[r],t.producerIndexOfThis[r]),t.producerNode[r]!==e&&(t.producerNode[r]=e,t.producerIndexOfThis[r]=N(t)?W(e,t,r):0),t.producerLastReadVersion[r]=e.version}function L(){w++}function f(e){if((!N(e)||e.dirty)&&(e.dirty||e.lastCleanEpoch!==w)){if(!e.producerMustRecompute(e)&&!x(e))return void v(e);e.producerRecomputeValue(e),v(e)}}function T(e){if(void 0===e.liveConsumerNode)return;const r=p;p=!0;try{for(const u of e.liveConsumerNode)u.dirty||R(u)}finally{p=r}}function A(){return!1!==t?.consumerAllowSignalWrites}function R(e){e.dirty=!0,T(e),e.consumerMarkedDirty?.(e)}function v(e){e.dirty=!1,e.lastCleanEpoch=w}function I(e){return e&&(e.nextProducerIndex=0),C(e)}function S(e,r){if(C(r),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(N(e))for(let u=e.nextProducerIndex;u<e.producerNode.length;u++)y(e.producerNode[u],e.producerIndexOfThis[u]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function x(e){O(e);for(let r=0;r<e.producerNode.length;r++){const u=e.producerNode[r],n=e.producerLastReadVersion[r];if(n!==u.version||(f(u),n!==u.version))return!0}return!1}function M(e){if(O(e),N(e))for(let r=0;r<e.producerNode.length;r++)y(e.producerNode[r],e.producerIndexOfThis[r]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function W(e,r,u){if(U(e),0===e.liveConsumerNode.length&&b(e))for(let n=0;n<e.producerNode.length;n++)e.producerIndexOfThis[n]=W(e.producerNode[n],e,n);return e.liveConsumerIndexOfThis.push(u),e.liveConsumerNode.push(r)-1}function y(e,r){if(U(e),1===e.liveConsumerNode.length&&b(e))for(let n=0;n<e.producerNode.length;n++)y(e.producerNode[n],e.producerIndexOfThis[n]);const u=e.liveConsumerNode.length-1;if(e.liveConsumerNode[r]=e.liveConsumerNode[u],e.liveConsumerIndexOfThis[r]=e.liveConsumerIndexOfThis[u],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,r<e.liveConsumerNode.length){const n=e.liveConsumerIndexOfThis[r],o=e.liveConsumerNode[r];O(o),o.producerIndexOfThis[n]=r}}function N(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function O(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function U(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function b(e){return void 0!==e.producerNode}function H(e){const r=Object.create(K);r.computation=e;const u=()=>{if(f(r),h(r),r.value===c)throw r.error;return r.value};return u[a]=r,u}const l=Symbol("UNSET"),d=Symbol("COMPUTING"),c=Symbol("ERRORED"),K={...m,value:l,dirty:!0,error:null,equal:g,kind:"computed",producerMustRecompute:e=>e.value===l||e.value===d,producerRecomputeValue(e){if(e.value===d)throw new Error("Detected cycle in computations.");const r=e.value;e.value=d;const u=I(e);let n,o=!1;try{n=e.computation(),C(null),o=r!==l&&r!==c&&n!==c&&e.equal(r,n)}catch(s){n=c,e.error=s}finally{S(e,u)}o?e.value=r:(e.value=n,e.version++)}};let G=function z(){throw new Error};function _(){G()}function J(e){G=e}let E=null;function Q(e){const r=Object.create(j);r.value=e;const u=()=>(h(r),r.value);return u[a]=r,u}function X(e){const r=E;return E=e,r}function k(e,r){A()||_(),e.equal(e.value,r)||(e.value=r,function Z(e){e.version++,L(),T(e),E?.()}(e))}function q(e,r){A()||_(),k(e,r(e.value))}function Y(){E?.()}const j={...m,equal:g,value:void 0,kind:"signal"};function ee(e,r,u){const n=Object.create(ue);n.source=e,n.computation=r,null!=u&&(n.equal=u);const s=()=>{if(f(n),h(n),n.value===c)throw n.error;return n.value};return s[a]=n,s}function re(e,r){f(e),k(e,r),v(e)}function ne(e,r){f(e),q(e,r),v(e)}const ue={...m,value:l,dirty:!0,error:null,equal:g,producerMustRecompute:e=>e.value===l||e.value===d,producerRecomputeValue(e){if(e.value===d)throw new Error("Detected cycle in computations.");const r=e.value;e.value=d;const u=I(e);let n;try{const o=e.source();n=e.computation(o,r===l||r===c?void 0:{source:e.sourceValue,value:r}),e.sourceValue=o}catch(o){n=c,e.error=o}finally{S(e,u)}r!==l&&n!==c&&e.equal(r,n)?e.value=r:(e.value=n,e.version++)}};function te(e,r,u){const n=Object.create(oe);u&&(n.consumerAllowSignalWrites=!0),n.fn=e,n.schedule=r;const o=i=>{n.cleanupFn=i};return n.ref={notify:()=>R(n),run:()=>{if(null===n.fn)return;if(P())throw new Error("Schedulers cannot synchronously execute watches while scheduling.");if(n.dirty=!1,n.hasRun&&!x(n))return;n.hasRun=!0;const i=I(n);try{n.cleanupFn(),n.cleanupFn=D,n.fn(o)}finally{S(n,i)}},cleanup:()=>n.cleanupFn(),destroy:()=>function ce(i){(function s(i){return null===i.fn&&null===i.schedule})(i)||(M(i),i.cleanupFn(),i.fn=null,i.schedule=null,i.cleanupFn=D)}(n),[a]:n},n.ref}const D=()=>{},oe={...m,consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!1,consumerMarkedDirty:e=>{null!==e.schedule&&e.schedule(e.ref)},hasRun:!1,cleanupFn:D};function ie(e){}}}]);