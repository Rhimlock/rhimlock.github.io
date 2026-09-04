(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=globalThis,Me=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Oe=Symbol(),qe=new WeakMap;let mt=class{constructor(e,r,a){if(this._$cssResult$=!0,a!==Oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Me&&e===void 0){const a=r!==void 0&&r.length===1;a&&(e=qe.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&qe.set(r,e))}return e}toString(){return this.cssText}};const $=t=>new mt(typeof t=="string"?t:t+"",void 0,Oe),Ct=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((a,s,o)=>a+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new mt(r,t,Oe)},At=(t,e)=>{if(Me)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const a=document.createElement("style"),s=de.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=r.cssText,t.appendChild(a)}},We=Me?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const a of e.cssRules)r+=a.cssText;return $(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Et,defineProperty:Lt,getOwnPropertyDescriptor:Pt,getOwnPropertyNames:Mt,getOwnPropertySymbols:Ot,getPrototypeOf:Dt}=Object,D=globalThis,Ve=D.trustedTypes,jt=Ve?Ve.emptyScript:"",ye=D.reactiveElementPolyfillSupport,ee=(t,e)=>t,ce={toAttribute(t,e){switch(e){case Boolean:t=t?jt:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},De=(t,e)=>!Et(t,e),Ge={attribute:!0,type:String,converter:ce,reflect:!1,useDefault:!1,hasChanged:De};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),D.litPropertyMetadata??(D.litPropertyMetadata=new WeakMap);let V=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Ge){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const a=Symbol(),s=this.getPropertyDescriptor(e,a,r);s!==void 0&&Lt(this.prototype,e,s)}}static getPropertyDescriptor(e,r,a){const{get:s,set:o}=Pt(this.prototype,e)??{get(){return this[r]},set(i){this[r]=i}};return{get:s,set(i){const n=s==null?void 0:s.call(this);o==null||o.call(this,i),this.requestUpdate(e,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ge}static _$Ei(){if(this.hasOwnProperty(ee("elementProperties")))return;const e=Dt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ee("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee("properties"))){const r=this.properties,a=[...Mt(r),...Ot(r)];for(const s of a)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[a,s]of r)this.elementProperties.set(a,s)}this._$Eh=new Map;for(const[r,a]of this.elementProperties){const s=this._$Eu(r,a);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const s of a)r.unshift(We(s))}else e!==void 0&&r.push(We(e));return r}static _$Eu(e,r){const a=r.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const a of r.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return At(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var a;return(a=r.hostConnected)==null?void 0:a.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var a;return(a=r.hostDisconnected)==null?void 0:a.call(r)})}attributeChangedCallback(e,r,a){this._$AK(e,a)}_$ET(e,r){var o;const a=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,a);if(s!==void 0&&a.reflect===!0){const i=(((o=a.converter)==null?void 0:o.toAttribute)!==void 0?a.converter:ce).toAttribute(r,a.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,r){var o,i;const a=this.constructor,s=a._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=a.getPropertyOptions(s),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:ce;this._$Em=s;const h=d.fromAttribute(r,n.type);this[s]=h??((i=this._$Ej)==null?void 0:i.get(s))??h,this._$Em=null}}requestUpdate(e,r,a,s=!1,o){var i;if(e!==void 0){const n=this.constructor;if(s===!1&&(o=this[e]),a??(a=n.getPropertyOptions(e)),!((a.hasChanged??De)(o,r)||a.useDefault&&a.reflect&&o===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(n._$Eu(e,a))))return;this.C(e,r,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:a,reflect:s,wrapped:o},i){a&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??r??this[e]),o!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(r=void 0),this._$AL.set(e,r)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,i]of s){const{wrapped:n}=i,d=this[o];n!==!0||this._$AL.has(o)||d===void 0||this.C(o,void 0,i,d)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(a=this._$EO)==null||a.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(r)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(a=>{var s;return(s=a.hostUpdated)==null?void 0:s.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};V.elementStyles=[],V.shadowRootOptions={mode:"open"},V[ee("elementProperties")]=new Map,V[ee("finalized")]=new Map,ye==null||ye({ReactiveElement:V}),(D.reactiveElementVersions??(D.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=globalThis,Ke=t=>t,he=te.trustedTypes,Je=he?he.createPolicy("lit-html",{createHTML:t=>t}):void 0,pt="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,gt="?"+O,Tt=`<${gt}>`,I=document,re=()=>I.createComment(""),se=t=>t===null||typeof t!="object"&&typeof t!="function",je=Array.isArray,Nt=t=>je(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",we=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ze=/-->/g,Ye=/>/g,H=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qe=/'/g,Xe=/"/g,ut=/^(?:script|style|textarea|title)$/i,ft=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),l=ft(1),A=ft(2),q=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),et=new WeakMap,z=I.createTreeWalker(I,129);function vt(t,e){if(!je(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Je!==void 0?Je.createHTML(e):e}const Ht=(t,e)=>{const r=t.length-1,a=[];let s,o=e===2?"<svg>":e===3?"<math>":"",i=Q;for(let n=0;n<r;n++){const d=t[n];let h,u,c=-1,p=0;for(;p<d.length&&(i.lastIndex=p,u=i.exec(d),u!==null);)p=i.lastIndex,i===Q?u[1]==="!--"?i=Ze:u[1]!==void 0?i=Ye:u[2]!==void 0?(ut.test(u[2])&&(s=RegExp("</"+u[2],"g")),i=H):u[3]!==void 0&&(i=H):i===H?u[0]===">"?(i=s??Q,c=-1):u[1]===void 0?c=-2:(c=i.lastIndex-u[2].length,h=u[1],i=u[3]===void 0?H:u[3]==='"'?Xe:Qe):i===Xe||i===Qe?i=H:i===Ze||i===Ye?i=Q:(i=H,s=void 0);const m=i===H&&t[n+1].startsWith("/>")?" ":"";o+=i===Q?d+Tt:c>=0?(a.push(h),d.slice(0,c)+pt+d.slice(c)+O+m):d+O+(c===-2?n:m)}return[vt(t,o+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]};class ae{constructor({strings:e,_$litType$:r},a){let s;this.parts=[];let o=0,i=0;const n=e.length-1,d=this.parts,[h,u]=Ht(e,r);if(this.el=ae.createElement(h,a),z.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=z.nextNode())!==null&&d.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(pt)){const p=u[i++],m=s.getAttribute(c).split(O),f=/([.?@])?(.*)/.exec(p);d.push({type:1,index:o,name:f[2],strings:m,ctor:f[1]==="."?Bt:f[1]==="?"?zt:f[1]==="@"?Ft:ge}),s.removeAttribute(c)}else c.startsWith(O)&&(d.push({type:6,index:o}),s.removeAttribute(c));if(ut.test(s.tagName)){const c=s.textContent.split(O),p=c.length-1;if(p>0){s.textContent=he?he.emptyScript:"";for(let m=0;m<p;m++)s.append(c[m],re()),z.nextNode(),d.push({type:2,index:++o});s.append(c[p],re())}}}else if(s.nodeType===8)if(s.data===gt)d.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(O,c+1))!==-1;)d.push({type:7,index:o}),c+=O.length-1}o++}}static createElement(e,r){const a=I.createElement("template");return a.innerHTML=e,a}}function G(t,e,r=t,a){var i,n;if(e===q)return e;let s=a!==void 0?(i=r._$Co)==null?void 0:i[a]:r._$Cl;const o=se(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((n=s==null?void 0:s._$AO)==null||n.call(s,!1),o===void 0?s=void 0:(s=new o(t),s._$AT(t,r,a)),a!==void 0?(r._$Co??(r._$Co=[]))[a]=s:r._$Cl=s),s!==void 0&&(e=G(t,s._$AS(t,e.values),s,a)),e}class Ut{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:a}=this._$AD,s=((e==null?void 0:e.creationScope)??I).importNode(r,!0);z.currentNode=s;let o=z.nextNode(),i=0,n=0,d=a[0];for(;d!==void 0;){if(i===d.index){let h;d.type===2?h=new Z(o,o.nextSibling,this,e):d.type===1?h=new d.ctor(o,d.name,d.strings,this,e):d.type===6&&(h=new It(o,this,e)),this._$AV.push(h),d=a[++n]}i!==(d==null?void 0:d.index)&&(o=z.nextNode(),i++)}return z.currentNode=I,s}p(e){let r=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,r),r+=a.strings.length-2):a._$AI(e[r])),r++}}class Z{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,a,s){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=a,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=G(this,e,r),se(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==q&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Nt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&se(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){var o;const{values:r,_$litType$:a}=e,s=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=ae.createElement(vt(a.h,a.h[0]),this.options)),a);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(r);else{const i=new Ut(s,this),n=i.u(this.options);i.p(r),this.T(n),this._$AH=i}}_$AC(e){let r=et.get(e.strings);return r===void 0&&et.set(e.strings,r=new ae(e)),r}k(e){je(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let a,s=0;for(const o of e)s===r.length?r.push(a=new Z(this.O(re()),this.O(re()),this,this.options)):a=r[s],a._$AI(o),s++;s<r.length&&(this._$AR(a&&a._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,r);e!==this._$AB;){const s=Ke(e).nextSibling;Ke(e).remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class ge{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,a,s,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=o,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=v}_$AI(e,r=this,a,s){const o=this.strings;let i=!1;if(o===void 0)e=G(this,e,r,0),i=!se(e)||e!==this._$AH&&e!==q,i&&(this._$AH=e);else{const n=e;let d,h;for(e=o[0],d=0;d<o.length-1;d++)h=G(this,n[a+d],r,d),h===q&&(h=this._$AH[d]),i||(i=!se(h)||h!==this._$AH[d]),h===v?e=v:e!==v&&(e+=(h??"")+o[d+1]),this._$AH[d]=h}i&&!s&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Bt extends ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}class zt extends ge{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}}class Ft extends ge{constructor(e,r,a,s,o){super(e,r,a,s,o),this.type=5}_$AI(e,r=this){if((e=G(this,e,r,0)??v)===q)return;const a=this._$AH,s=e===v&&a!==v||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,o=e!==v&&(a===v||s);s&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class It{constructor(e,r,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const qt={I:Z},$e=te.litHtmlPolyfillSupport;$e==null||$e(ae,Z),(te.litHtmlVersions??(te.litHtmlVersions=[])).push("3.3.3");const Wt=(t,e,r)=>{const a=(r==null?void 0:r.renderBefore)??e;let s=a._$litPart$;if(s===void 0){const o=(r==null?void 0:r.renderBefore)??null;a._$litPart$=s=new Z(e.insertBefore(re(),o),o,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=globalThis;let y=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wt(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return q}};var ht;y._$litElement$=!0,y.finalized=!0,(ht=F.litElementHydrateSupport)==null||ht.call(F,{LitElement:y});const xe=F.litElementPolyfillSupport;xe==null||xe({LitElement:y});(F.litElementVersions??(F.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt={CHILD:2},Gt=t=>(...e)=>({_$litDirective$:t,values:e});let Kt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,a){this._$Ct=e,this._$AM=r,this._$Ci=a}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Jt}=qt,tt=t=>t,rt=()=>document.createComment(""),X=(t,e,r)=>{var o;const a=t._$AA.parentNode,s=e===void 0?t._$AB:e._$AA;if(r===void 0){const i=a.insertBefore(rt(),s),n=a.insertBefore(rt(),s);r=new Jt(i,n,t,t.options)}else{const i=r._$AB.nextSibling,n=r._$AM,d=n!==t;if(d){let h;(o=r._$AQ)==null||o.call(r,t),r._$AM=t,r._$AP!==void 0&&(h=t._$AU)!==n._$AU&&r._$AP(h)}if(i!==s||d){let h=r._$AA;for(;h!==i;){const u=tt(h).nextSibling;tt(a).insertBefore(h,s),h=u}}}return r},U=(t,e,r=t)=>(t._$AI(e,r),t),Zt={},Yt=(t,e=Zt)=>t._$AH=e,Qt=t=>t._$AH,ke=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=(t,e,r)=>{const a=new Map;for(let s=e;s<=r;s++)a.set(t[s],s);return a},at=Gt(class extends Kt{constructor(t){if(super(t),t.type!==Vt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let a;r===void 0?r=e:e!==void 0&&(a=e);const s=[],o=[];let i=0;for(const n of t)s[i]=a?a(n,i):i,o[i]=r(n,i),i++;return{values:o,keys:s}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,a]){const s=Qt(t),{values:o,keys:i}=this.dt(e,r,a);if(!Array.isArray(s))return this.ut=i,o;const n=this.ut??(this.ut=[]),d=[];let h,u,c=0,p=s.length-1,m=0,f=o.length-1;for(;c<=p&&m<=f;)if(s[c]===null)c++;else if(s[p]===null)p--;else if(n[c]===i[m])d[m]=U(s[c],o[m]),c++,m++;else if(n[p]===i[f])d[f]=U(s[p],o[f]),p--,f--;else if(n[c]===i[f])d[f]=U(s[c],o[f]),X(t,d[f+1],s[c]),c++,f--;else if(n[p]===i[m])d[m]=U(s[p],o[m]),X(t,s[c],s[p]),p--,m++;else if(h===void 0&&(h=st(i,m,f),u=st(n,c,p)),h.has(n[c]))if(h.has(n[p])){const L=u.get(i[m]),be=L!==void 0?s[L]:null;if(be===null){const Ie=X(t,s[c]);U(Ie,o[m]),d[m]=Ie}else d[m]=U(be,o[m]),X(t,s[c],be),s[L]=null;m++}else ke(s[p]),p--;else ke(s[c]),c++;for(;m<=f;){const L=X(t,d[f+1]);U(L,o[m]),d[m++]=L}for(;c<=p;){const L=s[c++];L!==null&&ke(L)}return this.ut=i,Yt(t,d),q}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:De},er=(t=Xt,e,r)=>{const{kind:a,metadata:s}=r;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),a==="accessor"){const{name:i}=r;return{set(n){const d=e.get.call(this);e.set.call(this,n),this.requestUpdate(i,d,t,!0,n)},init(n){return n!==void 0&&this.C(i,void 0,t,n),n}}}if(a==="setter"){const{name:i}=r;return function(n){const d=this[i];e.call(this,n),this.requestUpdate(i,d,t,!0,n)}}throw Error("Unsupported decorator location: "+a)};function g(t){return(e,r)=>typeof r=="object"?er(t,e,r):((a,s,o)=>{const i=s.hasOwnProperty(o);return s.constructor.createProperty(o,a),i?Object.getOwnPropertyDescriptor(s,o):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(t){return g({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function W(t,e){return(r,a,s)=>{const o=i=>{var n;return((n=i.renderRoot)==null?void 0:n.querySelector(t))??null};return bt(r,a,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tr;function Te(t){return(e,r)=>bt(e,r,{get(){return(this.renderRoot??tr??(tr=document.createDocumentFragment())).querySelectorAll(t)}})}const Ae=[{name:"Archer",variant:"ARC-1A",weight:70,move:3,torso:["lrm6","lrm6"],armLeft:["laser"],armRight:["laser"]},{name:"Annihilator",variant:"ANH-1A",weight:100,move:2,heatSinks:4,torso:["laser","laser","ac","ac"],armLeft:["laser","ac"],armRight:["laser","ac"]},{name:"Assassin",variant:"ASN-21",weight:40,move:7,torso:["lrm3","srm3"],armRight:["laser"],legs:["jump"]},{name:"Atlas",variant:"AS7-D",weight:100,move:3,heatSinks:4,torso:["ac_heavy","lrm6","laser","srm6","laser"],armLeft:["laser"],armRight:["laser"]},{name:"Awesome",variant:"AWS-8Q",weight:80,move:3,heatSinks:6,torso:["ppc","ppc","laser"],armRight:["ppc"]},{name:"Blackjack",variant:"BJ1",weight:45,move:4,heatSinks:3,torso:["laser","laser"],armLeft:["ac_light","laser"],armRight:["ac_light","laser"],legs:["jump"]},{name:"Black Knight",variant:"BL-6-KNT",weight:75,move:4,heatSinks:5,torso:["laser_L","laser_L","laser","laser"],armLeft:["laser"],armRight:["ppc","laser"]},{name:"Battlemaster",variant:"BLR-1GHE",weight:85,move:4,heatSinks:6,torso:["laser","laser","laser","laser","srm6"],armLeft:["mg","mg"],armRight:["ppc"]},{name:"Banshee",variant:"BNC-3M",weight:95,move:4,heatSinks:5,torso:["laser"],armLeft:["ppc","laser"],armRight:["ppc","laser"]},{name:"Centurion",variant:"CN9-A",weight:50,move:4,torso:["laser","laser","lrm3"],armRight:["ac"]},{name:"Cicada",variant:"CDA-2A",weight:40,move:8,heatSinks:4,torso:["laser"],armLeft:["laser"],armRight:["laser"]},{name:"Charger",variant:"CGR-1A2",weight:80,move:4,heatSinks:5,torso:["laser","laser","laser"],armLeft:["ppc"],armRight:["laser_L"]},{name:"Clint",variant:"CLNT-2-3T",weight:40,move:6,heatSinks:3,torso:["laser"],armLeft:["ac_light"],armRight:["laser"],legs:["jump"]},{name:"Commando",variant:"COM-2D",weight:25,move:6,torso:["srm6"],armLeft:["laser"],armRight:["srm3"]},{name:"Cyclops",variant:"CP-10-Z",weight:90,move:4,torso:["lrm3","ac_heavy","srm3"],armLeft:["laser"],armRight:["laser"]},{name:"Catapult",variant:"CTPL-A1",weight:65,move:4,heatSinks:4,torso:["laser","laser","laser","laser"],armLeft:["lrm6"],armRight:["lrm6"],legs:["jump"]},{name:"Catapult",variant:"CPTL-K2",weight:65,move:4,heatSinks:4,torso:["mg","mg","laser","laser"],armLeft:["ppc"],armRight:["ppc"]},{name:"Crab",variant:"CRB-20",weight:50,move:5,heatSinks:4,torso:["laser","laser"],armLeft:["laser_L"],armRight:["laser_L"]},{name:"Crusader",variant:"CRD-3K",weight:65,move:4,torso:["srm6","srm6"],armLeft:["lrm6","laser"],armRight:["lrm6","laser"]},{name:"Hunchback",variant:"HBK-4G",weight:50,move:4,torso:["ac_heavy"],armLeft:["laser"],armRight:["laser"]},{name:"Jenner",variant:"JR7-F",weight:35,move:7,heatSinks:4,armLeft:["laser","laser"],armRight:["laser","laser"],legs:["jump"]},{name:"Marauder",variant:"MAD-1R",weight:75,heatSinks:6,move:4,torso:["ac_light"],armLeft:["ppc","laser"],armRight:["ppc","laser"]},{name:"Panther",variant:"PNT-9R",weight:35,heatSinks:3,move:4,torso:["srm3"],armRight:["ppc"],legs:["jump"]},{name:"Raven",variant:"RVN-3L",weight:35,heatSinks:3,move:6,torso:["srm6"],armRight:["laser","laser"]},{name:"Rifleman",variant:"RFL-3N",weight:60,heatSinks:3,move:4,torso:["laser","laser"],armLeft:["ac_light","laser_L"],armRight:["ac_light","laser_L"]},{name:"Rifleman",variant:"RFL-6D",weight:60,heatSinks:2,move:4,torso:["laser","laser"],armLeft:["ac_light","ac_light"],armRight:["ac_light","ac_light"]},{name:"Shadowhawk",variant:"SHD-2H",weight:55,heatSinks:3,move:5,torso:["srm3","lrm3","ac_light"],armLeft:["laser"],legs:["jump"]},{name:"TimberWolf",variant:"TBR-Prime",weight:75,heatSinks:6,move:4,torso:["lrm6","lrm6","mg","mg","laser"],armLeft:["laser_L","laser"],armRight:["laser_L","laser"]},{name:"UrbanMech",variant:"UM-R60L",weight:30,move:2,armRight:["ac_heavy"],armLeft:["laser"],legs:["jump"]},{name:"Uziel",variant:"UZL-2S",weight:50,heatSinks:4,move:5,torso:["srm6"],armLeft:["ppc"],armRight:["ppc"],legs:["jump"]},{name:"Warhammer",variant:"WHM-6K",weight:70,heatSinks:6,move:4,torso:["srm6","laser","laser"],armLeft:["ppc"],armRight:["ppc"]},{name:"Cataphract",variant:"CTF-3D",weight:70,heatSinks:5,move:4,torso:["ppc","laser","laser"],armLeft:["laser"],armRight:["ac","laser"],legs:["jump"]},{name:"Dragon",variant:"DRG-1N",weight:60,heatSinks:3,move:5,torso:["laser","lrm3"],armLeft:["laser"],armRight:["ac_light"]},{name:"Enforcer",variant:"ENF-4R",weight:50,heatSinks:3,move:4,torso:["laser"],armLeft:["laser_L"],armRight:["ac"],legs:["jump"]},{name:"Firestarter",variant:"FS9-H",weight:35,heatSinks:3,move:6,torso:["mg","mg"],armLeft:["laser","laser"],armRight:["laser","laser"],legs:["jump"]},{name:"Flea",variant:"FLE-15",weight:20,move:6,torso:["laser"],armLeft:["mg"],armRight:["mg"]},{name:"Grasshopper",variant:"GHR-5H",weight:70,heatSinks:6,move:4,torso:["laser_L","laser","laser"],armLeft:["laser"],armRight:["laser"],legs:["jump"]},{name:"Griffin",variant:"GRF-1N",weight:55,heatSinks:3,move:5,torso:["lrm3"],armRight:["ppc"],legs:["jump"]},{name:"Highlander",variant:"HGN-733",weight:90,heatSinks:4,move:3,torso:["lrm6","laser","laser"],armLeft:["srm6"],armRight:["ac"],legs:["jump"]},{name:"Highlander",variant:"HGN-733C",weight:90,heatSinks:4,move:3,torso:["lrm6","laser","laser"],armLeft:["srm6"],armRight:["ac_heavy"],legs:["jump"]},{name:"Highlander",variant:"HGN-733P",weight:90,heatSinks:6,move:3,torso:["lrm6","laser","laser"],armLeft:["srm6"],armRight:["ppc"],legs:["jump"]},{name:"JagerMech",variant:"JM6-S",weight:65,heatSinks:3,move:4,torso:["laser","laser"],armLeft:["ac_light","ac_light"],armRight:["ac_light","ac_light"]},{name:"Javelin",variant:"JVN-10N",weight:30,move:6,torso:["srm6","srm6"],legs:["jump"]},{name:"King Crab",variant:"KGC-000",weight:100,heatSinks:5,move:3,torso:["ac_heavy","ac_heavy","lrm6"],armLeft:["laser_L"],armRight:["laser_L"]},{name:"Kintaro",variant:"KTO-18",weight:55,move:5,torso:["srm6","srm6","lrm3"],armLeft:["srm6","laser"],armRight:["laser"]},{name:"Locust",variant:"LCT-1V",weight:20,move:8,torso:["laser"],armLeft:["mg"],armRight:["mg"]},{name:"Mauler",variant:"MAL-1R",weight:90,heatSinks:6,move:3,torso:["ac_light","ac_light","ac_light","ac_light","lrm6","lrm6"],armLeft:["laser_L"],armRight:["laser_L"]},{name:"Nightstar",variant:"NSR-9J",weight:95,heatSinks:6,move:3,torso:["ppc","laser"],armLeft:["ac_heavy","laser"],armRight:["ac_heavy","laser"]},{name:"Orion",variant:"ON1-K",weight:75,heatSinks:3,move:4,torso:["lrm6","srm6","ac"],armLeft:["laser"],armRight:["laser"]},{name:"Phoenix Hawk",variant:"PXH-1",weight:45,move:6,torso:["laser"],armLeft:["laser","mg"],armRight:["laser_L","mg"],legs:["jump"]},{name:"Quickdraw",variant:"QKD-4G",weight:60,heatSinks:4,move:5,torso:["lrm3","srm6","laser"],armLeft:["laser"],armRight:["laser"],legs:["jump"]},{name:"Spider",variant:"SDR-5V",weight:30,move:8,torso:["laser","laser"],legs:["jump"]},{name:"Stalker",variant:"STK-3F",weight:85,heatSinks:6,move:3,torso:["laser_L","laser_L","srm6","srm6","laser"],armLeft:["lrm3","laser"],armRight:["lrm3","laser"]},{name:"Thunderbolt",variant:"TDR-5S",weight:65,heatSinks:4,move:4,torso:["lrm6","srm3","laser","laser"],armLeft:["mg","mg"],armRight:["laser_L"]},{name:"Trebuchet",variant:"TBT-5N",weight:50,move:5,torso:["laser"],armLeft:["lrm6","laser"],armRight:["lrm6","laser"]},{name:"Victor",variant:"VTR-9B",weight:80,heatSinks:4,move:4,torso:["srm6"],armLeft:["laser","laser"],armRight:["ac_heavy"],legs:["jump"]},{name:"Vindicator",variant:"VND-1R",weight:45,heatSinks:5,move:4,torso:["lrm3","laser"],armLeft:["laser"],armRight:["ppc"],legs:["jump"]},{name:"Wolfhound",variant:"WLF-1",weight:35,move:6,torso:["laser","laser"],armLeft:["laser","laser"],armRight:["laser_L"]},{name:"Wolverine",variant:"WVR-6R",weight:55,heatSinks:3,move:5,torso:["srm6","laser"],armLeft:["laser"],armRight:["ac_light"],legs:["jump"]},{name:"Zeus",variant:"ZEU-6S",weight:80,heatSinks:4,move:4,torso:["ppc","laser_L","laser"],armLeft:["ac_light"],armRight:["lrm6"]}],rr={20:{armor:{head:1,torsoFront:2,torsoBack:1,arm:1,legs:1},systemSlots:{head:1,torso:3,arm:1,legs:3}},25:{armor:{head:1,torsoFront:3,torsoBack:1,arm:1,legs:1},systemSlots:{head:1,torso:3,arm:1,legs:3}},30:{armor:{head:1,torsoFront:3,torsoBack:1,arm:1,legs:1},systemSlots:{head:1,torso:4,arm:1,legs:3}},35:{armor:{head:1,torsoFront:4,torsoBack:1,arm:1,legs:1},systemSlots:{head:1,torso:4,arm:2,legs:3}},40:{armor:{head:1,torsoFront:4,torsoBack:1,arm:2,legs:2},systemSlots:{head:1,torso:4,arm:2,legs:3}},45:{armor:{head:1,torsoFront:5,torsoBack:1,arm:2,legs:2},systemSlots:{head:1,torso:5,arm:2,legs:3}},50:{armor:{head:1,torsoFront:5,torsoBack:1,arm:2,legs:2},systemSlots:{head:1,torso:5,arm:2,legs:3}},55:{armor:{head:1,torsoFront:6,torsoBack:1,arm:2,legs:2},systemSlots:{head:1,torso:5,arm:2,legs:3}},60:{armor:{head:2,torsoFront:6,torsoBack:2,arm:3,legs:3},systemSlots:{head:1,torso:6,arm:2,legs:3}},65:{armor:{head:2,torsoFront:7,torsoBack:2,arm:3,legs:3},systemSlots:{head:1,torso:6,arm:2,legs:3}},70:{armor:{head:2,torsoFront:7,torsoBack:2,arm:3,legs:3},systemSlots:{head:1,torso:6,arm:3,legs:3}},75:{armor:{head:2,torsoFront:8,torsoBack:2,arm:3,legs:3},systemSlots:{head:1,torso:7,arm:3,legs:3}},80:{armor:{head:2,torsoFront:8,torsoBack:2,arm:4,legs:4},systemSlots:{head:1,torso:7,arm:3,legs:3}},85:{armor:{head:2,torsoFront:9,torsoBack:2,arm:4,legs:4},systemSlots:{head:1,torso:7,arm:4,legs:3}},90:{armor:{head:2,torsoFront:9,torsoBack:2,arm:4,legs:4},systemSlots:{head:1,torso:8,arm:4,legs:3}},95:{armor:{head:2,torsoFront:10,torsoBack:2,arm:4,legs:4},systemSlots:{head:1,torso:8,arm:4,legs:3}},100:{armor:{head:2,torsoFront:10,torsoBack:2,arm:5,legs:4},systemSlots:{head:1,torso:8,arm:4,legs:3}}};function sr(t){return t<=35?"light":t<=55?"medium":t<=75?"heavy":"assault"}const Ne={laser:{name:"Laser",type:"energy",short:2,medium:1,damage:1,heat:1},laser_L:{name:"Laser(L)",type:"energy",short:2,medium:3,long:1,damage:1,heat:2},ppc:{name:"PPC",type:"energy",medium:2,long:1,damage:2,heat:2},mg:{name:"MG",type:"ballistic",short:1,damage:1,ammo:8},ac_light:{name:"light AC",type:"ballistic",medium:1,long:2,damage:1,ammo:8},ac:{name:"AC",type:"ballistic",short:1,medium:2,damage:2,ammo:6},ac_heavy:{name:"heavy AC",type:"ballistic",short:2,damage:4,ammo:4},srm3:{name:"SRM-3",type:"missile",short:"D3",damage:1,ammo:6},srm6:{name:"SRM-6",type:"missile",short:"D6",damage:1,ammo:6},lrm3:{name:"LRM-3",type:"missile",medium:1,long:"D3",damage:1,ammo:6},lrm6:{name:"LRM-6",type:"missile",medium:"D3",long:"D6",damage:1,ammo:6}};function He(){return`${Math.random().toString(36).slice(2,9)}`}function yt(t){const e=rr[t.weight],r=(t.legs??[]).some(a=>a==="jump");return{id:`${t.variant}-${He()}`,variant:t.variant,name:t.name,tonnage:t.weight,state:"nominal",armor:{head:{value:e.armor.head,spent:0},torso:{value:e.armor.torsoFront,spent:0},torsoBack:{value:e.armor.torsoBack,spent:0},armLeft:{value:e.armor.arm,spent:0},armRight:{value:e.armor.arm,spent:0},legs:{value:e.armor.legs,spent:0}},systems:{head:[{name:"cockpit",state:"online",type:"active"}],torso:[{name:"reactor",state:"online",type:"active"},{name:"heatSinks",state:"online",type:"active",value:t.heatSinks??2,spent:0},...Se(e.systemSlots.torso-2,[...t.torso??[]])],armLeft:Se(e.systemSlots.arm,t.armLeft),armRight:Se(e.systemSlots.arm,t.armRight),legs:[{name:"move",state:"offline",type:"movement",value:t.move??1,heat:1},{name:"run",state:"offline",type:"movement",value:Math.round((t.move??1)*1.5),heat:2},{name:r?"jump":"-",state:"offline",type:r?"movement":"active",value:t.move??1,heat:3}]}}}function Se(t,e){return e||(e=[]),Array(t).fill("").map((r,a)=>{if(!e[a])return{name:"-",state:"offline",type:"active"};const s=e[a],o=Ne[s];let i;return o.type!=="energy"&&(i=o.ammo),{name:s,state:"online",type:o.type,value:i,spent:i?0:void 0,heat:o.type==="energy"?o.heat??0:void 0}})}function _e(t){const e={};return Object.keys(t.systems).forEach(r=>{e[r]=t.systems[r].map(a=>({state:a.state||void 0,spent:a.spent||void 0}))}),{variant:t.variant,state:t.state,systems:e}}function ot(t){if(!t||typeof t.variant!="string"||typeof t.systems!="object"||"armor"in t||"tonnage"in t)return;const e=Ae.find(a=>a.variant===t.variant);if(!e)return;const r=yt(e);return t.state&&(r.state=t.state),Object.keys(r.systems).forEach(a=>{const s=t.systems[a];Array.isArray(s)&&r.systems[a].forEach((o,i)=>{const n=s[i];n&&(n.state&&(o.state=n.state),typeof n.spent=="number"&&o.spent!==void 0&&(o.spent=n.spent))})}),r}const it=["nominal","overheated","critical","shutdown","destroyed"],ar=["move","run","jump"],wt=["energy","ballistic","missile"];function or(t){t&&(t.state=(t.spent??0)<(t.value??0)?"online":"offline")}function Ee(t){switch(t){case"nominal":return"ok";case"overheated":return"warning";default:return"critical"}}function ir(t){return Object.values(t.systems).flat().filter(e=>e.state==="online").reduce((e,r)=>e+(r.heat??0),0)}function nr(t){Object.values(t.systems).flat().filter(e=>e.state==="online"&&wt.includes(e.type)).forEach(e=>{e.state="offline"})}function Le(t,e,r){const a=it.indexOf(t),s=Math.sign(e-r),o=it[Math.max(0,a+s)];return o==="shutdown"?"destroyed":o}async function lr(t,e,r,a){let s=Le(t,e,r.value-r.spent);return["critical","shutdown"].includes(s)&&(await a()?s="shutdown":(s="critical",r.spent<r.value?r.spent++:s="destroyed")),{state:s,heatSinks:r}}const dr=new Set(["cockpit","reactor"]);function cr(t,e){if(me(t.systems[e]))return"destroyed";const r=e==="torso"?[t.armor.torso,t.armor.torsoBack]:[t.armor[e]];return r.some(a=>a.spent>=a.value)?"breached":r.some(a=>a.spent>0)?"damaged":"ok"}function me(t){return t.every(e=>e.state==="destroyed")||t.some(e=>e.state==="destroyed"&&dr.has(e.name))}function pe(t){return t.state==="destroyed"||me(t.systems.head)||me(t.systems.torso)}function $t(t){return pe(t)?"destroyed":Ee(t.state)}function hr(t){let e=t.filter(a=>a.state!=="destroyed");return e.some(a=>["run"].includes(a.name))&&(e=e.filter(a=>a.name!=="move")),e[Math.floor(Math.random()*e.length)]}function mr(t){const e=Object.values(t.systems).flat(),r=e.some(o=>o.state==="destroyed"),a=e.some(o=>(o.spent??0)>0),s=Object.values(t.armor).some(o=>o.spent>0);return r||a||s||t.state!=="nominal"}const pr="hekmek-roster",gr=1;function ur(t){const e={format:pr,version:gr,name:t.name,cards:t.cards};return`${JSON.stringify(e,null,2)}
`}function fr(t){return`${t.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"roster"}.hekmek.json`}function vr(t){return typeof t=="object"&&t!==null&&typeof t.variant=="string"}function br(t){if(typeof t!="object"||t===null)return;const e=t;if(!Array.isArray(e.cards))return;const r=e.cards.filter(vr);if(r.length)return{id:He(),name:typeof e.name=="string"&&e.name.trim()?e.name.trim():"IMPORTED ROSTER",cards:r}}function yr(t){let e;try{e=JSON.parse(t)}catch{throw new Error("That file isn't valid JSON.")}const a=(Array.isArray(e)?e:[e]).map(br).filter(s=>s!==void 0);if(!a.length)throw new Error("No roster found in that file.");return a}function nt(t,e){const r=new Set(e.map(a=>a.toLowerCase()));if(!r.has(t.toLowerCase()))return t;for(let a=2;;a+=1){const s=`${t} (${a})`;if(!r.has(s.toLowerCase()))return s}}const wr="*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;-webkit-user-select:none;user-select:none}@keyframes popAndShrink{0%{transform:scale(1.5)}to{transform:scale(1)}}.frame{--frame-accent: var(--color-ok);border:1px solid var(--color-border);border-radius:var(--radius-sm);padding:.45rem;box-shadow:inset 0 0 5px #00000080;transition:filter .15s ease}.frame:hover:not(.critical):not(.destroyed):not(.disabled){filter:drop-shadow(0 0 8px color-mix(in srgb,var(--frame-accent) 55%,transparent))}.frame.warning{--frame-accent: var(--color-warning);box-shadow:inset 0 0 5px var(--color-warning-glow)}.frame.critical{--frame-accent: var(--color-critical);box-shadow:inset 0 0 5px var(--color-critical-glow)}.frame.destroyed{--frame-accent: var(--color-destroyed);box-shadow:inset 0 0 5px var(--color-destroyed-glow)}.consumable-boxes{display:grid;grid-template-columns:repeat(10,auto);align-content:center;justify-content:start;gap:.15em;cursor:pointer}.consumable-boxes.readonly{cursor:default}@media print{.frame,.frame.warning,.frame.critical,.frame.destroyed{box-shadow:none}}",C=$(wr),xt=Ct`
  .btn {
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-sm);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0) 45%),
      linear-gradient(160deg, #343f4a, #1a2128);
    color: var(--color-text);
    font-family: var(--font-heading);
    font-size: 0.75rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding: 0.55rem 0.8rem;
    cursor: pointer;
    transition:
      transform 0.15s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      color 0.2s ease;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 5px 12px rgba(0, 0, 0, 0.36);
  }

  .btn:hover {
    border-color: var(--color-brand);
    transform: translateY(-1px);
    color: #fff;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.18),
      0 0 11px rgba(255, 107, 0, 0.32);
  }

  .btn.primary {
    border-color: var(--color-brand);
    background:
      linear-gradient(180deg, rgba(255, 223, 183, 0.2), rgba(255, 223, 183, 0) 52%),
      linear-gradient(155deg, #6a3000, #321600);
  }
`,$r=":host{display:block}.error{margin:1rem auto;width:min(980px,calc(100% - 2rem));border:1px solid #7f1d1d;border-radius:var(--radius-sm);background:#7f1d1d59;color:#fecaca;padding:.7rem}.cards{display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;padding:1rem}.card-slide{flex:none;scroll-snap-align:center}.card-rail{display:none}@media (max-width: 818px){.cards{box-sizing:border-box;padding:.6rem;gap:.6rem;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;height:var(--cards-fit-height, 100dvh);overflow-y:auto;overscroll-behavior-y:contain;scroll-snap-type:y mandatory}.cards.has-rail{padding-right:3.4rem}.card-slide{flex:0 0 auto;min-height:100%;display:flex;align-items:center;justify-content:center;scroll-snap-align:center;scroll-snap-stop:always;overflow:clip;overflow-clip-margin:18px}.card-slide mech-card{flex:none;transform:scale(var(--card-scale, 1));transform-origin:center}.card-rail{position:fixed;right:2px;top:50%;transform:translateY(-50%);z-index:5;display:flex;flex-direction:column;gap:.3rem;max-height:82dvh;padding:.3rem;overflow-y:auto;scrollbar-width:none;border:1px solid var(--color-border);border-radius:1.4rem;background:color-mix(in srgb,var(--color-bg-alt) 82%,transparent);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);box-shadow:var(--shadow-panel)}.card-rail::-webkit-scrollbar{display:none}.rail-dot{flex:none;width:calc(34px + .3rem);height:calc(34px + .3rem);padding:.15rem;display:grid;place-items:center;border:1px solid transparent;border-radius:50%;background:transparent;color:var(--color-muted);opacity:.45;cursor:pointer;transition:opacity .15s ease,color .15s ease,border-color .15s ease,transform .15s ease}.rail-dot mech-figure{width:32px;height:32px}.rail-dot.state-ok{--rail-accent: var(--color-ok);--rail-glow: var(--color-ok-glow)}.rail-dot.state-warning{--rail-accent: var(--color-warning);--rail-glow: var(--color-warning-glow)}.rail-dot.state-critical{--rail-accent: var(--color-critical);--rail-glow: var(--color-critical-glow)}.rail-dot.state-destroyed{--rail-accent: var(--color-wreck);--rail-glow: var(--color-wreck-glow)}.rail-dot.active{opacity:1;color:var(--rail-accent);border-color:var(--rail-accent);transform:scale(1.14);box-shadow:0 0 7px var(--rail-glow)}}.disclaimer{margin:0 auto;max-width:60rem;padding:1.2rem 1.5rem 1.6rem;border-top:1px solid var(--color-border);text-align:center;font:400 .66rem/1.55 var(--font-body);letter-spacing:.02em;color:var(--color-border-strong)}.empty{border:1px dashed var(--color-border-strong);border-radius:var(--radius-md);background:linear-gradient(170deg,#1c242cb8,#0e141ab8);padding:1.2rem;color:var(--color-muted);font-family:var(--font-mono);letter-spacing:.03em}@media print{app-header,aside-panel,rules-panel,.card-rail,.disclaimer,.error{display:none}.cards,.cards.has-rail{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;gap:0;padding:0;height:auto;overflow:visible;scroll-snap-type:none}.card-slide{display:block;min-height:0;overflow:visible;break-inside:avoid}.card-slide mech-card{transform:none}}",xr=[{zone:"torso",section:"torso"},{zone:"head",section:"head"},{zone:"la",section:"armLeft"},{zone:"ra",section:"armRight"},{zone:"legs",section:"legs"}],kr="_default";function Sr(t){const e=t.toLowerCase().replace(/[^a-z0-9]/g,"");return e.charAt(0).toUpperCase()+e.slice(1)}function kt(t,e){return`./Mechs/${t}/${e}.png`}function _r(t){return new Promise(e=>{const r=new Image;r.onload=()=>e(!0),r.onerror=()=>e(!1),r.src=t})}const lt=new Map;function Rr(t){const e=Sr(t);let r=lt.get(e);return r||(r=_r(kt(e,"torso")).then(a=>a?e:kr),lt.set(e,r)),r}const Cr=":host{display:block;aspect-ratio:1}.figure{position:relative;width:100%;height:100%}.zone{position:absolute;top:0;right:0;bottom:0;left:0;background-color:var(--zone-tint, var(--color-muted));transition:background-color .2s ease;mask-image:var(--zone-src);mask-size:contain;mask-repeat:no-repeat;mask-position:center;-webkit-mask-image:var(--zone-src);-webkit-mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center}.zone.ok{--zone-tint: var(--color-steel)}.zone.damaged{--zone-tint: var(--color-warning)}.zone.breached{--zone-tint: var(--color-destroyed)}.zone.destroyed{--zone-tint: var(--color-border-strong)}";var Ar=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,Ue=(t,e,r,a)=>{for(var s=a>1?void 0:a?Er(e,r):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&Ar(e,r,s),s};let oe=class extends y{constructor(){super(...arguments),this.folder="",this.resolvedFor=""}willUpdate(){var e;const t=(e=this.card)==null?void 0:e.name;!t||t===this.resolvedFor||(this.resolvedFor=t,this.folder="",Rr(t).then(r=>{this.resolvedFor===t&&(this.folder=r)}))}render(){return!this.card||!this.folder?l``:l`<div class="figure" aria-hidden="true">
      ${xr.map(({zone:t,section:e})=>l`<span
          class="zone ${cr(this.card,e)}"
          style=${`--zone-src:url("${kt(this.folder,t)}")`}
        ></span>`)}
    </div>`}};oe.styles=[C,$(Cr)];Ue([g({attribute:!1})],oe.prototype,"card",2);Ue([b()],oe.prototype,"folder",2);oe=Ue([R("mech-figure")],oe);const Lr=":host{display:block}header{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem 1.2rem;border-bottom:2px solid var(--color-brand);background:linear-gradient(180deg,#242d35,#12181e);box-shadow:var(--shadow-panel)}.brand{display:flex;align-items:center;gap:.8rem}.stripe{width:10px;height:2rem;background:repeating-linear-gradient(-45deg,var(--color-warning),var(--color-warning) 8px,var(--color-bg) 8px,var(--color-bg) 16px);border:1px solid var(--color-warning);box-shadow:0 0 8px var(--color-warning-glow)}h1{margin:0;font:900 1.55rem/1 var(--font-heading);letter-spacing:.08em;text-shadow:0 0 10px rgba(255,107,0,.55)}.subtitle{display:block;font:400 .67rem/1.3 var(--font-mono);color:var(--color-warning);letter-spacing:.11em}.actions{display:flex;align-items:center;gap:.6rem;flex:none}@media (max-width: 700px){.subtitle{display:none}}";var Pr=Object.getOwnPropertyDescriptor,Mr=(t,e,r,a)=>{for(var s=a>1?void 0:a?Pr(e,r):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=i(s)||s);return s};let Pe=class extends y{emit(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}render(){return l`
      <header>
        <div class="brand">
          <span class="stripe" aria-hidden="true"></span>
          <div>
            <h1>HEK-MEK</h1>
            <span class="subtitle">mech card roster</span>
          </div>
        </div>
        <div class="actions">
          <button type="button" class="btn" @click=${()=>this.emit("open-rules")}>
            Rules
          </button>
          <button
            type="button"
            class="btn primary"
            @click=${()=>this.emit("open-manage")}
          >
            Manage cards
          </button>
        </div>
      </header>
    `}};Pe.styles=[C,xt,$(Lr)];Pe=Mr([R("app-header")],Pe);const Or=":host{position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none;z-index:20}.backdrop{position:absolute;top:0;right:0;bottom:0;left:0;background:#000000ad;opacity:0;transition:opacity .2s ease}aside{position:absolute;top:0;right:0;width:min(92vw,370px);height:100%;background:linear-gradient(180deg,#1b232b,#0e1318);border-left:2px solid var(--color-brand);box-shadow:-12px 0 30px #00000073;transform:translate(104%);transition:transform .24s ease;display:flex;flex-direction:column}.active{pointer-events:auto}.active .backdrop{opacity:1}.active aside{transform:translate(0)}.head{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid var(--color-border);background:linear-gradient(180deg,#ff6b0014,#ff6b0000)}.head h2{margin:0;font:700 .95rem/1 var(--font-heading);text-transform:uppercase;letter-spacing:.08em;color:var(--color-warning)}.body{padding:1rem;overflow:auto;display:grid;gap:1rem}label,.label{font:700 .66rem/1 var(--font-heading);color:var(--color-muted);text-transform:uppercase;letter-spacing:.06em}select,input{width:100%;margin-top:.35rem;border:1px solid var(--color-border-strong);background:var(--color-bg-alt);color:var(--color-text);font-family:var(--font-body);padding:.58rem;border-radius:var(--radius-sm)}.add-card{display:grid;gap:.7rem}.select-row{display:grid;grid-template-columns:1.7fr 1fr;gap:.6rem;align-items:start}.select-row select{min-width:0}select:disabled{opacity:.5;cursor:not-allowed}.row{display:grid;grid-template-columns:1fr auto auto;gap:.45rem}.label-row{display:flex;align-items:center;justify-content:space-between;gap:.5rem}#import-file{display:none}.manage-list,.saved-list{display:grid;gap:.45rem}.item{border:1px solid var(--color-border-strong);background:linear-gradient(160deg,#212932c2,#141a21c2);border-radius:var(--radius-sm);padding:.58rem;display:grid;gap:.45rem}.item.draggable{grid-template-columns:auto minmax(0,1fr);align-items:center;cursor:grab}.item.draggable:active{cursor:grabbing}.item.dragging{opacity:.4}.item.drag-over{border-color:var(--color-brand);box-shadow:inset 0 3px 0 var(--color-brand)}.drag-grip{color:var(--color-muted);font-size:.95rem;line-height:1;letter-spacing:-.12em}.item-body{display:grid;gap:.45rem;min-width:0}.item-head{display:flex;justify-content:space-between;gap:.5rem;align-items:baseline}.name{font:700 .82rem/1.2 var(--font-heading)}.name-button{min-width:0;padding:0;border:0;border-bottom:1px dashed transparent;background:none;color:inherit;text-align:left;cursor:text}.name-button:hover,.name-button:focus-visible{border-bottom-color:var(--color-border-strong)}.name-edit{width:auto;min-width:0;flex:1;margin:0;padding:.05rem .25rem;border:1px solid var(--color-brand);border-radius:var(--radius-sm);background:var(--color-bg);color:var(--color-text);font:700 .82rem/1.2 var(--font-heading)}.name-edit:focus{outline:none;box-shadow:0 0 6px var(--color-brand)}.meta{font:400 .68rem/1.2 var(--font-mono);color:var(--color-muted)}.actions{display:flex;flex-wrap:wrap;gap:.38rem}.btn.small{font-size:.6rem;padding:.33rem .45rem}.btn.danger{border-color:var(--color-brand)}.btn.danger:hover{border-color:var(--color-critical)}";var Dr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,k=(t,e,r,a)=>{for(var s=a>1?void 0:a?jr(e,r):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&Dr(e,r,s),s};let w=class extends y{constructor(){super(...arguments),this.open=!1,this.loadouts=[],this.cards=[],this.savedRosters=[],this.selectedMech="",this.selectedVariant="",this.saveName="",this.drag=null,this.editingRoster=null,this.editName=""}emit(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}onDragStart(t,e,r){this.drag={list:e,from:r,over:r},t.dataTransfer&&(t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",String(r)))}onDragOver(t,e,r){var a;((a=this.drag)==null?void 0:a.list)===e&&(t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect="move"),this.drag.over!==r&&(this.drag={...this.drag,over:r}))}onDrop(t,e,r){var s;if(((s=this.drag)==null?void 0:s.list)!==e)return;t.preventDefault();const{from:a}=this.drag;this.drag=null,a!==r&&this.emit(e==="cards"?"reorder-cards":"reorder-rosters",{from:a,to:r})}renderItem(t,e,r,a=!0){var o;const s=((o=this.drag)==null?void 0:o.list)===t;return l`<div
      class="item draggable ${s&&this.drag.from===e?"dragging":""} ${s&&this.drag.over===e&&this.drag.from!==e?"drag-over":""}"
      draggable=${a?"true":"false"}
      @dragstart=${i=>this.onDragStart(i,t,e)}
      @dragover=${i=>this.onDragOver(i,t,e)}
      @drop=${i=>this.onDrop(i,t,e)}
      @dragend=${()=>this.drag=null}
    >
      <span class="drag-grip" aria-hidden="true">⠿</span>
      <div class="item-body">${r}</div>
    </div>`}close(){this.emit("close-manage")}get mechOptions(){const t=new Map;for(const e of this.loadouts)t.has(e.name)||t.set(e.name,e.weight);return[...t.entries()].map(([e,r])=>({name:e,weight:r})).sort((e,r)=>e.name.localeCompare(r.name))}get variantOptions(){return this.loadouts.filter(t=>t.name===this.selectedMech)}onMechChange(t){var e;this.selectedMech=t.currentTarget.value,this.selectedVariant=((e=this.variantOptions[0])==null?void 0:e.variant)??""}onVariantChange(t){this.selectedVariant=t.currentTarget.value}addCard(){this.selectedVariant&&(this.emit("add-card",{variant:this.selectedVariant}),this.selectedMech="",this.selectedVariant="")}saveRoster(){this.emit("save-roster",{name:this.saveName.trim()}),this.saveName=""}async startRename(t){var e,r;this.editingRoster=t.id,this.editName=t.name,await this.updateComplete,(e=this.nameInput)==null||e.focus(),(r=this.nameInput)==null||r.select()}commitRename(){var a;const t=this.editingRoster,e=this.editName.trim();if(this.editingRoster=null,!t||!e)return;const r=(a=this.savedRosters.find(s=>s.id===t))==null?void 0:a.name;e!==r&&this.emit("rename-roster",{id:t,name:e})}onRenameKey(t){t.key==="Enter"?(t.preventDefault(),t.currentTarget.blur()):t.key==="Escape"&&(t.preventDefault(),this.editingRoster=null)}async onImportFile(t){var a;const e=t.currentTarget,r=(a=e.files)==null?void 0:a[0];e.value="",r&&this.emit("import-rosters",{text:await r.text(),fileName:r.name})}render(){return l`
      <div class=${this.open?"active":""}>
        <button
          class="backdrop"
          type="button"
          @click=${this.close}
          aria-label="Close"
        ></button>
        <aside>
          <div class="head">
            <h2>Card Terminal</h2>
            <button class="btn small" @click=${this.close}>Close</button>
          </div>
          <div class="body">
            <div class="add-card">
              <div class="select-row">
                <div>
                  <label for="mech">Select mech</label>
                  <select
                    id="mech"
                    .value=${this.selectedMech}
                    @change=${this.onMechChange}
                  >
                    <option value="">Select mech</option>
                    ${this.mechOptions.map(t=>l`<option value=${t.name}>
                          ${t.name} — ${t.weight} t
                        </option>`)}
                  </select>
                </div>

                <div>
                  <label for="variant">Variant</label>
                  <select
                    id="variant"
                    .value=${this.selectedVariant}
                    ?disabled=${!this.selectedMech}
                    @change=${this.onVariantChange}
                  >
                    ${this.selectedMech?this.variantOptions.map(t=>l`<option value=${t.variant}>
                                ${t.variant}
                              </option>`):l`<option value="">—</option>`}
                  </select>
                </div>
              </div>

              <button class="btn primary" type="button" @click=${this.addCard}>
                Add card
              </button>
            </div>

            <div>
              <div class="label">Current roster</div>
              <div class="manage-list">
                ${this.cards.length?this.cards.map((t,e)=>this.renderItem("cards",e,l`
                            <div class="item-head">
                              <span class="name">${t.name}</span>
                              <span class="meta">${t.id}</span>
                            </div>
                            <div class="actions">
                              ${mr(t)?l`<button
                                      class="btn small"
                                      type="button"
                                      @click=${()=>this.emit("repair-card",{id:t.id})}
                                    >
                                      Repair
                                    </button>`:""}
                              <button
                                class="btn small danger"
                                type="button"
                                @click=${()=>this.emit("remove-card",{id:t.id})}
                              >
                                Delete
                              </button>
                            </div>
                          `)):l`<div class="item"><span class="meta">No cards yet</span></div>`}
              </div>
            </div>

            <div>
              <label for="save-name">Save current roster</label>
              <div class="row">
                <input
                  id="save-name"
                  placeholder="Ex: Alpha Lance"
                  .value=${this.saveName}
                  @input=${t=>{const e=t.currentTarget;this.saveName=e.value}}
                />
                <button class="btn" type="button" @click=${this.saveRoster}>Save</button>
                <button
                  class="btn"
                  type="button"
                  ?disabled=${!this.cards.length}
                  @click=${()=>this.emit("export-roster",{id:null,name:this.saveName.trim()})}
                >
                  Export
                </button>
              </div>
            </div>

            <div>
              <div class="label-row">
                <div class="label">Saved rosters</div>
                <button
                  class="btn small"
                  type="button"
                  @click=${()=>this.importInput.click()}
                >
                  Import
                </button>
                <input
                  id="import-file"
                  type="file"
                  accept="application/json,.json"
                  @change=${this.onImportFile}
                />
              </div>
              <div class="saved-list">
                ${this.savedRosters.length?this.savedRosters.map((t,e)=>this.renderItem("rosters",e,l`
                            <div class="item-head">
                              ${this.editingRoster===t.id?l`<input
                                      class="name-edit"
                                      aria-label="Roster name"
                                      .value=${this.editName}
                                      @input=${r=>{this.editName=r.currentTarget.value}}
                                      @keydown=${this.onRenameKey}
                                      @blur=${this.commitRename}
                                    />`:l`<button
                                      class="name name-button"
                                      type="button"
                                      title="Rename roster"
                                      @click=${()=>this.startRename(t)}
                                    >
                                      ${t.name}
                                    </button>`}
                              <span class="meta">${t.cards.length} cards</span>
                            </div>
                            <div class="actions">
                              <button
                                class="btn small"
                                @click=${()=>this.emit("load-roster",{id:t.id})}
                              >
                                Load
                              </button>
                              <button
                                class="btn small"
                                @click=${()=>this.emit("save-roster-as",{id:t.id})}
                              >
                                Save
                              </button>
                              <button
                                class="btn small"
                                @click=${()=>this.emit("export-roster",{id:t.id})}
                              >
                                Export
                              </button>
                              <button
                                class="btn small danger"
                                @click=${()=>this.emit("delete-roster",{id:t.id})}
                              >
                                Delete
                              </button>
                            </div>
                          `,this.editingRoster!==t.id)):l`<div class="item">
                        <span class="meta">No saved rosters</span>
                      </div>`}
              </div>
            </div>
          </div>
        </aside>
      </div>
    `}};w.styles=[C,xt,$(Or)];k([g({type:Boolean})],w.prototype,"open",2);k([g({attribute:!1})],w.prototype,"loadouts",2);k([g({attribute:!1})],w.prototype,"cards",2);k([g({attribute:!1})],w.prototype,"savedRosters",2);k([b()],w.prototype,"selectedMech",2);k([b()],w.prototype,"selectedVariant",2);k([b()],w.prototype,"saveName",2);k([b()],w.prototype,"drag",2);k([b()],w.prototype,"editingRoster",2);k([b()],w.prototype,"editName",2);k([W("#import-file")],w.prototype,"importInput",2);k([W(".name-edit")],w.prototype,"nameInput",2);w=k([R("aside-panel")],w);function Tr(t){return wt.includes(t.type)}function St(t){const r=Object.values(t.systems).flat().filter(Tr).reduce((a,s)=>{const o=s.name;return a[o]||(a[o]={...Object.assign({},Ne[o]),count:0,entries:[],activeCount:0}),a[o].entries.push(s),a[o].count=a[o].entries.length,a[o].activeCount=a[o].entries.filter(i=>i.state==="online").length,a},{});return Object.values(r).sort((a,s)=>+!!s.heat-+!!a.heat)}function ue(t){return t.value===t.spent}function Nr(t){const e=s=>typeof t.ammo!="number"||!ue(s),r=t.entries.find(s=>s.state==="offline"&&e(s));if(r)return r.state="online",[r];const a=t.entries.filter(s=>s.state==="online");return a.forEach(s=>s.state="offline"),a}function Hr(t){const e=s=>typeof t.ammo!="number"||!ue(s),r=t.entries.some(s=>s.state==="online"),a=r?t.entries.filter(s=>s.state==="online"):t.entries.filter(s=>s.state==="offline"&&e(s));return a.forEach(s=>s.state=r?"offline":"online"),a}function Ur(t){const e=t.some(a=>a.entries.some(s=>s.state==="online")),r=[];for(const a of t){const s=o=>typeof a.ammo!="number"||!ue(o);for(const o of a.entries){if(e){if(o.state!=="online")continue;o.state="offline"}else{if(o.state!=="offline"||!s(o))continue;o.state="online"}r.push(o)}}return r}function Br(t){for(const e of t)if(typeof e.ammo=="number")for(const r of e.entries)r.state!=="online"||ue(r)||(r.spent+=1,r.spent>=r.value&&(r.state="offline"))}function Re(t,e=0){return typeof t=="number"?`${t*e}`:typeof t=="string"?e.toString()+t:"-"}const zr=':host{display:block;width:100mm;aspect-ratio:1 / 1.41421356237}article{--card-accent: var(--color-steel);--card-glow: var(--color-steel-glow);--card-hover-border: var(--color-ok);--card-hover-glow: var(--color-ok-glow);--system-online-color: var(--color-ok);--card-bg-image: none;border:3px solid var(--color-border);border-radius:var(--radius-md);background:linear-gradient(180deg,#ffffff12,#fff0 26%),linear-gradient(145deg,var(--color-panel-strong) 0%,var(--color-bg-alt) 100%);display:grid;grid-template-rows:1fr auto auto;gap:.5em;padding:.75em;height:100%;position:relative}article:before,article:after{content:"";position:absolute;width:6px;height:6px;background:radial-gradient(circle at 30% 30%,#a0acb8,#2a3138);border-radius:50%;box-shadow:0 0 2px #000}article:before{top:4px;left:4px}article:after{top:4px;right:4px}article.state-warning{--card-hover-border: var(--color-warning);--card-hover-glow: var(--color-warning-glow);--system-online-color: var(--color-warning)}article.state-critical{--card-hover-border: var(--color-critical);--card-hover-glow: var(--color-critical-glow);--system-online-color: var(--color-critical)}article.state-destroyed{--card-hover-border: var(--color-wreck);--card-hover-glow: var(--color-wreck-glow);--system-online-color: var(--color-wreck)}@media (hover: hover){article:hover{transform:translateY(-4px);border-color:var(--card-hover-border);box-shadow:0 15px 30px #000000e6,0 0 16px var(--card-hover-glow)}article[data-disabled=true]:hover{border-color:var(--card-hover-border)}}article[data-disabled=true]{filter:brightness(.72);opacity:.82;border-color:#969696bf;cursor:pointer}.header{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:.5em;background:linear-gradient(90deg,var(--color-surface) 0%,var(--color-panel) 100%);border:1px solid var(--card-accent);border-radius:var(--radius-sm);box-sizing:border-box;min-height:3.2em;padding:.35em .6em;box-shadow:inset 0 0 8px #000c;overflow:hidden}.header-id{display:flex;align-items:center;gap:.55em;min-width:0}.header-svg{flex:none;display:flex;align-items:center;justify-content:center;width:2.4em;height:2.4em;color:var(--card-accent);border:1px solid var(--color-border-strong);border-radius:var(--radius-sm);background:#00000059;box-shadow:inset 0 0 6px #000000a6}.header-svg mech-figure{width:88%;height:88%}.header-mech{min-width:0;display:flex;flex-direction:column;gap:.12em;overflow:hidden}.name{margin:0;font:900 1.05rem/1 var(--font-heading);letter-spacing:.02em;color:var(--color-text);text-shadow:0 0 6px var(--card-accent);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.meta-row{display:flex;align-items:center;gap:.42em;min-width:0}.meta{font:400 .62rem/1 var(--font-mono);letter-spacing:.06em;color:var(--color-muted);white-space:nowrap}.meta.weight-class{text-transform:uppercase;color:var(--color-steel);letter-spacing:.1em}.meta-sep{color:var(--color-border-strong);font-size:.6rem;line-height:1}.header-status-cluster{justify-self:end;flex:none;display:flex;flex-direction:column;align-items:center;gap:.3em}.header-status{flex:none;padding:.32em .7em;border:1px solid currentColor;border-radius:999px;background:#00000052;font:700 .6rem/1 var(--font-mono);letter-spacing:.16em}.header-status.mech-state{gap:.45em}.status-gauge{width:2.6rem;height:auto;flex:none;overflow:visible}.gauge-face{fill:none;stroke:var(--color-border-strong);stroke-width:2;stroke-linecap:round}.gauge-tick{stroke:var(--color-border-strong);stroke-width:1;stroke-linecap:round}.gauge-needle{stroke:var(--needle-color, var(--color-muted));stroke-width:2.6;stroke-linecap:round;filter:drop-shadow(0 0 2px var(--needle-color));transition:transform .45s cubic-bezier(.34,1.56,.64,1)}.gauge-hub{fill:var(--needle-color, var(--color-muted))}.layout{display:grid;grid-template-rows:auto 1fr;gap:.4em}.body-block{position:relative;display:grid;gap:.4em;align-content:start}.card-art{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;background-image:var(--card-bg-image);background-repeat:no-repeat;background-position:center;background-size:contain;mix-blend-mode:screen;opacity:.42;filter:blur(.5px);pointer-events:none}.body-block>.row{position:relative;z-index:1}.row{display:grid;gap:.45em}.row-head{justify-content:center;align-items:start}.row-core,.row-legs{grid-template-columns:minmax(0,1fr) minmax(0,2fr) minmax(0,1fr);align-items:start}.row-legs body-section{grid-column:2}.row-legs heat-section{grid-column:3}.row-full{grid-template-columns:minmax(0,1fr)}.footer{border-top:1px solid rgba(255,255,255,.12);padding-top:.35em;display:flex;justify-content:center;align-items:center;font-family:var(--font-mono);font-size:.62em;letter-spacing:.28em;color:var(--color-muted)}.mech-state{display:inline-flex;align-items:center;gap:.5em;font-weight:700;letter-spacing:.12em;color:var(--color-ok)}.mech-state:before{content:"";width:.5em;height:.5em;border-radius:50%;background:currentColor;box-shadow:0 0 4px currentColor}.mech-state.warning{color:var(--color-warning)}.mech-state.critical{color:var(--color-critical)}.mech-state.destroyed{color:var(--color-wreck)}@media print{.header-status-cluster{display:none}.header-svg{background:none;box-shadow:none}article:before,article:after,.header,.name{box-shadow:none;text-shadow:none}.card-art{mix-blend-mode:multiply;filter:invert(1);opacity:.3}}',Fr={1:[[10,10]],2:[[6,6],[14,14]],3:[[6,6],[10,10],[14,14]],4:[[6,6],[6,14],[14,6],[14,14]],5:[[6,6],[6,14],[10,10],[14,6],[14,14]],6:[[6,6],[6,10],[6,14],[14,6],[14,10],[14,14]]};function S(t){return l`<svg class="dice-svg" viewBox="0 0 20 20" aria-hidden="true">
    <rect
      x="1"
      y="1"
      width="18"
      height="18"
      rx="3"
      fill="none"
      stroke="currentColor"
      stroke-width="0.8"
    />
    ${Fr[t].map(([e,r])=>A`<circle cx=${e} cy=${r} r="2" fill="currentColor" />`)}
  </svg>`}const Ir={head:[6,5],torso:[4,5],armLeft:[2],armRight:[3],legs:[1]};function qr(t){const e=Ir[t];if(e.length===1)return S(e[0]);const r=t==="head",a=l`<span
    class="die-connector ${r?"die-arrow":"die-slash"}"
    aria-hidden="true"
    >${r?"→":"/"}</span
  >`;return l`<div class="die-group ${r?"die-group-head":""}">
    ${S(e[0])}${a}${S(e[1])}${r?l`<span class="die-connector die-plus" aria-hidden="true">+</span>`:""}
  </div>`}const Wr=":host{display:block}.section-head{display:flex;justify-content:space-between;align-items:center;gap:.4rem;margin-bottom:.28rem;color:var(--color-text)}.section-head.stacked{flex-direction:column;align-items:flex-start;gap:.24rem}.section-head.stacked .meta-block{align-self:flex-end}.section-title{display:flex;align-items:center;gap:.35rem;min-width:0}.section-dice{display:inline-flex;align-items:center;flex:none}.head-systems{display:flex;align-items:center;gap:.4rem}.head-systems system-list{flex:1;min-width:0}.section-label{font-family:var(--font-heading);letter-spacing:.05em;font-size:.7rem;font-weight:700;white-space:nowrap;text-shadow:0 1px 3px rgba(0,0,0,.85)}.meta{display:flex;align-items:center;gap:.2rem}.meta-block{display:inline-flex;align-items:flex-start;gap:.25rem}.frame{cursor:pointer}.frame.destroyed{opacity:.5}.frame.destroyed .section-label{color:var(--color-muted);font-weight:500;text-shadow:none;opacity:.7}.armor-separator{color:var(--color-muted);font-family:var(--font-mono);font-size:.72rem;line-height:1;padding:0 .03rem}.dice-svg{width:16px;height:16px;color:var(--color-warning);vertical-align:middle}.dice-svg rect{fill:var(--color-panel-strong)}.die-group{display:inline-flex;align-items:center;gap:.12rem}.die-group-head{gap:.16rem}.die-connector{color:var(--color-warning);font-family:var(--font-heading);font-size:.62rem;line-height:1;text-shadow:0 0 4px rgba(0,0,0,.55)}@media print{.section-label,.meta{text-shadow:none}}",Vr=":host{display:block}.defs{position:absolute;width:0;height:0}.shields{display:flex;flex-wrap:nowrap;gap:.1rem;width:max-content;cursor:pointer}.shields.disabled{cursor:default}.shield{width:.58rem;height:.66rem;flex:none;overflow:visible;filter:drop-shadow(0 0 3px rgba(0,240,255,.45))}.shield.spent{animation:popAndShrink .25s ease-out;filter:none;opacity:.45}.shield-shape{stroke:#a0eef8e6;stroke-width:1.1;stroke-linejoin:round}.shield.spent .shield-shape{stroke:var(--color-border-strong)}.shield-cross{stroke:#0a0c0ee6;stroke-width:2.2;stroke-linecap:round}@media print{.shield{filter:none}.shield-shape{fill:#fff;stroke:#000}.shield-cross{stroke:#000}}";var Gr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Be=(t,e,r,a)=>{for(var s=a>1?void 0:a?Kr(e,r):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&Gr(e,r,s),s};const Jr="M2,2 H20 V13 Q20,20 11,25 Q2,20 2,13 Z";let ie=class extends y{constructor(){super(...arguments),this.armor={value:0,spent:0},this.disabled=!1}render(){return l`${this.iconGradients}
      <div
        class="shields ${this.disabled?"disabled":""}"
        role="button"
        @click=${this.handleClick}
        tabindex=${this.disabled?-1:0}
        aria-disabled=${this.disabled?"true":"false"}
      >
        ${Array.from({length:this.armor.value},(t,e)=>{const r=e<this.armor.spent;return l`<svg
          class="shield ${r?"spent":""}"
          viewBox="0 0 22 25"
          aria-hidden="true"
        >
          <path
            class="shield-shape"
            d=${Jr}
            fill=${r?"url(#shield-fill-spent)":"url(#shield-fill)"}
            vector-effect="non-scaling-stroke"
          />
          ${r?A`<path class="shield-cross" d="M7,9 L15,17 M15,9 L7,17" vector-effect="non-scaling-stroke" />`:""}
        </svg>`})}
      </div>`}get iconGradients(){return l`<svg class="defs" width="0" height="0" aria-hidden="true">
      <defs>
        <linearGradient id="shield-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7ceef8" />
          <stop offset="100%" stop-color="#1e6670" />
        </linearGradient>
        <linearGradient id="shield-fill-spent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6b7682" />
          <stop offset="100%" stop-color="#39424b" />
        </linearGradient>
      </defs>
    </svg>`}handleClick(t){if(this.disabled)return;t.stopPropagation();const e=this.armor.spent>=this.armor.value;e||(this.armor.spent+=1),this.dispatchEvent(new CustomEvent("armor-changed",{detail:{breached:e},bubbles:!0,composed:!0})),this.requestUpdate()}};ie.styles=[C,$(Vr)];Be([g()],ie.prototype,"armor",2);Be([g({type:Boolean})],ie.prototype,"disabled",2);ie=Be([R("armor-points")],ie);const Zr=":host{display:contents}dialog{margin:auto;padding:0;border:none;background:transparent;color:var(--color-text);max-width:min(90vw,22rem);overflow:visible}dialog::backdrop{background:#0406089e;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.panel{border:1px solid var(--color-border-strong);border-top:3px solid var(--color-steel);border-radius:var(--radius-md);background:linear-gradient(160deg,var(--color-panel-strong),var(--color-bg-alt));box-shadow:var(--shadow-panel);padding:1.05rem 1.15rem .95rem}.panel.warning{border-top-color:var(--color-warning)}.panel.critical{border-top-color:var(--color-critical)}h2{margin:0 0 .5rem;font:700 .82rem/1.2 var(--font-heading);letter-spacing:.05em;text-transform:uppercase;color:var(--color-text)}p{margin:0 0 1rem;font:400 .78rem/1.5 var(--font-body);color:var(--color-muted);white-space:pre-line}.actions{display:flex;justify-content:flex-end;gap:.5rem}.btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid var(--color-border-strong);border-radius:var(--radius-sm);background:#0000004d;color:var(--color-text);font:700 .66rem/1 var(--font-mono);text-transform:uppercase;letter-spacing:.05em;padding:.5rem .9rem;cursor:pointer;transition:filter .15s ease,border-color .15s ease,background-color .15s ease}.btn:hover{filter:brightness(1.3)}.btn.confirm{border-color:var(--color-steel);color:#fff}.btn.confirm.warning{border-color:var(--color-warning);background:color-mix(in srgb,var(--color-warning) 18%,transparent)}.btn.confirm.critical{border-color:var(--color-critical);background:color-mix(in srgb,var(--color-critical) 20%,transparent)}@media print{:host{display:none}}";var Yr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,T=(t,e,r,a)=>{for(var s=a>1?void 0:a?Qr(e,r):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&Yr(e,r,s),s};let E=class extends y{constructor(){super(...arguments),this.open=!1,this.heading="",this.message="",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.tone="default"}updated(t){!t.has("open")||!this.dialog||(this.open&&!this.dialog.open&&this.dialog.showModal(),!this.open&&this.dialog.open&&this.dialog.close())}finish(t){this.dispatchEvent(new CustomEvent(t?"modal-confirm":"modal-cancel",{bubbles:!0,composed:!0}))}render(){return l`<dialog
      @cancel=${t=>{t.preventDefault(),this.finish(!1)}}
      @click=${t=>{t.stopPropagation(),t.target===this.dialog&&this.finish(!1)}}
    >
      <div class="panel ${this.tone}">
        ${this.heading?l`<h2>${this.heading}</h2>`:""}
        ${this.message?l`<p>${this.message}</p>`:""}
        <slot></slot>
        <div class="actions">
          <button type="button" class="btn cancel" @click=${()=>this.finish(!1)}>
            ${this.cancelLabel}
          </button>
          <button
            type="button"
            class="btn confirm ${this.tone}"
            @click=${()=>this.finish(!0)}
          >
            ${this.confirmLabel}
          </button>
        </div>
      </div>
    </dialog>`}};E.styles=[C,$(Zr)];T([g({type:Boolean})],E.prototype,"open",2);T([g()],E.prototype,"heading",2);T([g()],E.prototype,"message",2);T([g()],E.prototype,"confirmLabel",2);T([g()],E.prototype,"cancelLabel",2);T([g()],E.prototype,"tone",2);T([W("dialog")],E.prototype,"dialog",2);E=T([R("confirm-modal")],E);const Xr=':host{display:block}ul{list-style:none;margin:0;padding:0;display:grid;gap:.14rem;grid-template-columns:repeat(var(--columns),minmax(0,1fr))}li{font:500 .66rem/1.2 var(--font-mono);cursor:pointer;display:flex;align-items:baseline;gap:.4rem;white-space:nowrap;overflow:hidden;text-transform:uppercase;letter-spacing:.05em;background-color:var(--color-panel-strong);transition:color .12s ease,border-color .12s ease,opacity .12s ease}.sys-name{min-width:0;overflow:hidden;text-overflow:ellipsis}li.movement{display:grid;grid-template-rows:auto auto;align-content:center;justify-items:center;gap:.1rem;text-align:center}li.movement.frame{padding-left:.15rem;padding-right:.15rem}li.movement>div{display:flex;align-items:center;gap:.16rem;font-size:.82em;letter-spacing:0}.sys-speed{display:inline-flex;align-items:center;gap:.08rem}.sys-heat{opacity:.85}li.frame{padding:.13rem .26rem .13rem .3rem;border-left:3px solid var(--frame-accent)}li.online{color:var(--system-online-color, var(--color-ok));--frame-accent: var(--system-online-color, var(--color-ok))}li.offline{color:var(--color-muted);--frame-accent: var(--color-border-strong)}li.empty{color:var(--color-muted);--frame-accent: var(--color-border);cursor:default;opacity:.7}li.fixed{cursor:default}li.destroyed{text-decoration:line-through;text-decoration-thickness:2px;text-decoration-color:var(--color-destroyed);color:var(--color-destroyed);--frame-accent: var(--color-destroyed);opacity:.7;cursor:default;background-image:repeating-linear-gradient(-45deg,color-mix(in srgb,var(--color-destroyed) 16%,transparent),color-mix(in srgb,var(--color-destroyed) 16%,transparent) 2px,transparent 2px,transparent 6px);animation:popAndShrink .25s ease-out}:host([columns="2"]) li{font-size:.6rem;letter-spacing:.02em}@media print{.sys-heat{filter:grayscale(1)}}';var es=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,fe=(t,e,r,a)=>{for(var s=a>1?void 0:a?ts(e,r):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&es(e,r,s),s};let K=class extends y{constructor(){super(...arguments),this.disabled=!1,this.systems=[],this.columns=1}render(){return l`<ul style="--columns: ${this.columns}">
      ${this.systems.map(t=>{const e=t.name==="-",r=t.name==="heatSinks";return l`<li
          class="frame ${t.state} ${e?"empty":""} ${r?"fixed":""} ${this.isMovementMode(t)?"movement":""}"
          title=${t.name}
          @click=${a=>this.toggle(a,t)}
        >
          <span class="sys-name">${t.name}</span>
          ${this.isMovementMode(t)?l`
                  <div>
                    <span class="sys-speed">⬡${t.value}</span>
                    <span class="sys-heat">🔥${t.heat}</span>
                  </div>
                `:""}
        </li>`})}
    </ul>`}toggle(t,e){if(!(this.disabled||e.state==="destroyed"||e.name==="-")){if(t.stopPropagation(),e.name==="cockpit"){this.dispatchEvent(new CustomEvent("eject-request",{bubbles:!0,composed:!0}));return}e.name!=="heatSinks"&&(e.state==="online"?e.state="offline":e.state==="offline"&&(this.resetMoveSystems(),e.state="online"),this.dispatchEvent(new CustomEvent("system-changed",{detail:e,bubbles:!0,composed:!0})),this.requestUpdate())}}isMovementMode(t){return t.type==="movement"&&ar.includes(t.name)}resetMoveSystems(){this.systems.filter(t=>t.type==="movement").forEach(t=>{t.state="offline"})}};K.styles=[C,$(Xr)];fe([g({type:Boolean})],K.prototype,"disabled",2);fe([g()],K.prototype,"systems",2);fe([g({type:Number})],K.prototype,"columns",2);K=fe([R("system-list")],K);var rs=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,P=(t,e,r,a)=>{for(var s=a>1?void 0:a?ss(e,r):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&rs(e,r,s),s};let x=class extends y{constructor(){super(...arguments),this.systems=[],this.armor=[],this.locked=!1,this.destroyed=!1,this.restorePrompt=!1}get sectionLabel(){return(x.LABELS[this.section]??this.section).toUpperCase()}render(){const t=this.destroyed||this.locked,e=this.section==="head",r=l`<span class="section-dice">${qr(this.section)}</span>`,a=l`<system-list
      .systems=${this.systems}
      columns=${this.columns}
      @system-changed=${this.handleSystemChanged}
    ></system-list>`;return l`
      <div class="frame ${this.destroyed?"destroyed":""}" @click=${this.handleClick}>
        <div class="section-head ${this.stackArmor?"stacked":""}">
          <div class="section-title">
            ${e?l``:r}
            <span class="section-label">${this.sectionLabel}</span>
          </div>
          <div class="meta meta-block">
            ${this.armor.map((s,o)=>l`
                ${o>0?l`<span class="armor-separator" aria-hidden="true">|</span>`:l``}
                <armor-points
                  .armor=${s}
                  .disabled=${t}
                  @armor-changed=${this.handleArmorChanged}
                ></armor-points>
              `)}
          </div>
        </div>
        ${e?l`<div class="head-systems">${r}${a}</div>`:a}
      </div>

      <confirm-modal
        ?open=${this.restorePrompt}
        heading="Restore section"
        message=${`Repair the ${this.sectionLabel} section? Restores all its systems and armour.`}
        confirmLabel="Restore"
        @modal-confirm=${()=>{this.restorePrompt=!1,this.repairSection()}}
        @modal-cancel=${()=>this.restorePrompt=!1}
      ></confirm-modal>
    `}get columns(){switch(this.section){case"torso":return 2;case"legs":return 3;default:return 1}}get stackArmor(){return this.section==="torso"||this.section==="armLeft"||this.section==="armRight"}get armorBreached(){return this.armor.some(t=>t.spent>=t.value)}handleClick(t){var e;if(!this.locked){if(this.destroyed){this.restorePrompt=!0;return}this.armorBreached?this.takeInternalHit():(e=this.armorPoints[0])==null||e.handleClick(t),t.stopPropagation()}}handleArmorChanged(t){var e;t.stopPropagation(),(e=t.detail)!=null&&e.breached&&!this.destroyed&&!this.locked&&this.takeInternalHit(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("armor-changed",{bubbles:!0,composed:!0}))}takeInternalHit(){const t=hr(this.systems);t&&(t.state="destroyed",this.dispatchEvent(new CustomEvent("system-changed",{detail:t,bubbles:!0,composed:!0})),this.syncDestroyed())}handleSystemChanged(){var t;(t=this.systemList)==null||t.requestUpdate(),this.requestUpdate()}syncDestroyed(){var e;const t=this.destroyed;this.destroyed=me(this.systems),(e=this.systemList)==null||e.requestUpdate(),this.requestUpdate(),t!==this.destroyed&&this.dispatchEvent(new CustomEvent("section-destroyed",{detail:{section:this.section,destroyed:this.destroyed},bubbles:!0,composed:!0}))}repairSection(){this.systems.forEach(t=>{t.spent&&(t.spent=0);const e=t.name==="-"||t.type==="movement";t.state=e?"offline":"online"}),this.armor.forEach(t=>{t.spent=0}),this.destroyed=!1,this.systemList.requestUpdate(),this.armorPoints.forEach(t=>t.requestUpdate()),this.requestUpdate(),this.dispatchEvent(new CustomEvent("section-destroyed",{detail:{section:this.section,destroyed:!1},bubbles:!0,composed:!0}))}};x.styles=[C,$(Wr)];x.LABELS={armLeft:"ARM",armRight:"ARM"};P([g({type:String})],x.prototype,"section",2);P([g({attribute:!1})],x.prototype,"systems",2);P([g({attribute:!1})],x.prototype,"armor",2);P([g({type:Boolean})],x.prototype,"locked",2);P([W("system-list")],x.prototype,"systemList",2);P([Te("armor-points")],x.prototype,"armorPoints",2);P([b()],x.prototype,"destroyed",2);P([b()],x.prototype,"restorePrompt",2);x=P([R("body-section")],x);const as=":host{display:block;align-self:start}.heat-frame{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:.3rem;padding:.35rem .45rem;cursor:pointer;overflow:hidden;transition:filter .15s ease,border-color .15s ease}.heat-frame:hover:not(.disabled){filter:brightness(1.25)}.heat-frame.disabled{cursor:default;opacity:.45}.heat-frame.ok{border-color:var(--color-ok)}.heat-frame.warning{border-color:var(--color-warning)}.heat-frame.critical{border-color:var(--color-critical);background:color-mix(in srgb,var(--color-critical) 12%,transparent)}.heat-frame.destroyed{border-color:var(--color-wreck);background:color-mix(in srgb,var(--color-wreck) 12%,transparent)}.section-label{font:700 .62rem/1 var(--font-heading);letter-spacing:.06em;color:var(--color-text);flex:none}.gauge{display:grid;grid-template-columns:repeat(4,auto);justify-content:center;gap:.1rem}.sink{position:relative;box-sizing:border-box;flex:none;width:.95rem;height:.85rem;border:1px solid var(--color-border-strong);border-radius:1px;background:#ffffff0a;box-shadow:inset 0 0 3px #00000080}.sink.ok{border-color:color-mix(in srgb,var(--color-ok) 55%,transparent);background:color-mix(in srgb,var(--color-ok) 8%,transparent)}.sink.warning{border-color:color-mix(in srgb,var(--color-warning) 55%,transparent);background:color-mix(in srgb,var(--color-warning) 8%,transparent)}.sink.critical{border-color:color-mix(in srgb,var(--color-critical) 55%,transparent);background:color-mix(in srgb,var(--color-critical) 8%,transparent)}.sink.hot.ok{border-color:var(--color-ok);background:color-mix(in srgb,var(--color-ok) 32%,transparent)}.sink.hot.warning{border-color:var(--color-warning);background:color-mix(in srgb,var(--color-warning) 32%,transparent)}.sink.hot.critical{border-color:var(--color-critical);background:color-mix(in srgb,var(--color-critical) 32%,transparent)}.flame{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:.7rem;line-height:1;pointer-events:none}.sink.spent{border-color:var(--color-border);background:repeating-linear-gradient(-45deg,var(--color-border) 0 1px,transparent 1px 3px);opacity:.5}.predicted{flex:none;font:700 .62rem/1 var(--font-mono);letter-spacing:.05em}.predicted.ok{color:var(--color-ok)}.predicted.warning{color:var(--color-warning)}.predicted.critical{color:var(--color-critical)}.predicted.destroyed{color:var(--color-wreck)}@media print{.flame,.predicted{display:none}.sink{box-shadow:none}}";var os=Object.defineProperty,is=Object.getOwnPropertyDescriptor,ve=(t,e,r,a)=>{for(var s=a>1?void 0:a?is(e,r):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&os(e,r,s),s};let J=class extends y{constructor(){super(...arguments),this.shutdownPrompt=!1,this.shutdownResolver=null}get totalHeat(){return ir(this.card)}get capacity(){return(this.heatSinks.value??0)-(this.heatSinks.spent??0)}get disabled(){return this.card.state==="destroyed"||this.card.state==="shutdown"}get predictedState(){return this.disabled?this.card.state:Le(this.card.state,this.totalHeat,this.capacity)}askShutdown(){return new Promise(t=>{this.shutdownResolver=t,this.shutdownPrompt=!0})}answerShutdown(t){var e;this.shutdownPrompt=!1,(e=this.shutdownResolver)==null||e.call(this,t),this.shutdownResolver=null}async applyHeat(t){if(t.stopPropagation(),this.disabled||this.shutdownPrompt)return;const e=this.card.state,r=await lr(this.card.state,this.totalHeat,this.heatSinks,()=>this.askShutdown());this.card.state=r.state,or(this.heatSinks),Br(St(this.card)),nr(this.card),r.state!==e&&this.dispatchEvent(new CustomEvent("mech-state-changed",{detail:{state:r.state,destroyReactor:r.state==="destroyed"},bubbles:!0,composed:!0})),this.emitChanged()}emitChanged(){this.dispatchEvent(new CustomEvent("heat-changed",{bubbles:!0,composed:!0})),this.requestUpdate()}render(){if(!this.card)return l``;const t=this.heatSinks.value??0,e=this.heatSinks.spent??0,r=this.totalHeat,a=Math.max(t,r),s=this.predictedState==="destroyed"?"destroyed":Ee(this.predictedState);return l`
      <div
        class="frame heat-frame ${s} ${this.disabled?"disabled":""}"
        role="button"
        title="Apply heat"
        @click=${this.applyHeat}
      >
        <span class="section-label">HEAT</span>

        <div class="gauge" title="${r} heat vs ${this.capacity} sink capacity">
          ${Array.from({length:a},(o,i)=>{const n=i<r,h=i>=t-e&&i<t&&!n?"spent":Ee(Le(this.card.state,i+1,this.capacity));return l`<span class="sink ${h} ${n?"hot":""}">
              ${n?l`<span class="flame">🔥</span>`:""}
            </span>`})}
        </div>

        <span class="predicted ${s}">
          ➔${this.predictedState.toUpperCase()}
        </span>
      </div>

      <confirm-modal
        ?open=${this.shutdownPrompt}
        tone="critical"
        heading="Heat level critical"
        message=${`${this.card.name} is entering critical heat.

Shut the reactor down, or override and hold at critical — an override burns one heat sink.`}
        confirmLabel="Shut down"
        cancelLabel="Override"
        @modal-confirm=${()=>this.answerShutdown(!0)}
        @modal-cancel=${()=>this.answerShutdown(!1)}
      ></confirm-modal>
    `}};J.styles=[C,$(as)];ve([g({attribute:!1})],J.prototype,"card",2);ve([g({attribute:!1})],J.prototype,"heatSinks",2);ve([b()],J.prototype,"shutdownPrompt",2);J=ve([R("heat-section")],J);const ns=":host{display:block}.weapons{display:grid;gap:.22em;font-size:.7em;font-family:var(--font-mono);text-transform:uppercase;cursor:pointer}.weapons.locked{cursor:default}.weapons.frame{padding:.4rem}.weapon.frame{padding:.26rem .4rem}.weapon-header{display:grid;grid-template-columns:1.6fr 3.6fr 1.7fr 1.7fr 1.7fr 2.4fr 5fr;gap:.25em;color:var(--color-muted);padding:0 calc(.4rem + 1px)}.weapon-header .name{grid-column:span 2;font-family:var(--font-heading);letter-spacing:.06em;font-size:.73rem}.weapon-header .short{color:var(--color-ok);text-align:center}.weapon-header .medium{color:var(--color-steel);text-align:center}.weapon-header .long{color:var(--color-critical);text-align:center}.weapon-header .dmg{text-align:center}.weapon{--frame-accent: var(--color-ok);display:grid;grid-template-columns:1.6fr 3.6fr 1.7fr 1.7fr 1.7fr 2.4fr 5fr;align-items:center;gap:.25em;cursor:pointer;transition:filter .15s ease,opacity .15s ease}.weapon .count{text-align:center}.weapon .count.cyclable{text-decoration-line:underline;text-decoration-style:dotted;text-decoration-color:color-mix(in srgb,currentColor 45%,transparent);text-underline-offset:2px}.weapon .short{color:var(--color-ok);text-align:center}.weapon .medium{color:var(--color-steel);text-align:center}.weapon .long{color:var(--color-critical);text-align:center}.weapon .dmg{text-align:center}.weapon:hover:not(.locked){filter:brightness(1.25)}.weapon:not(.locked) .count.cyclable:hover{text-decoration-style:solid;text-decoration-color:currentColor}.weapon.locked{cursor:default}.weapon.locked .count.cyclable{text-decoration-line:none}.weapon.off{--frame-accent: var(--color-muted);opacity:.55}.weapon-count-max{color:var(--color-muted)}.weapon .consumable-boxes{grid-template-columns:none;gap:.12em}.ammo-run{display:grid;grid-auto-flow:column;justify-content:start;gap:.15em}.ammo-box{width:.75em;height:.75em;color:var(--color-muted)}.ammo-box.spent{color:var(--color-warning)}.heat-value{display:inline-flex;align-items:center;gap:.15em;color:var(--color-warning)}@media print{.heat-value{filter:grayscale(1)}}";function ls(t,e){return l`<svg
    class="${e} ${t?"spent":""}"
    viewBox="0 0 16 16"
    aria-hidden="true"
  >
    <rect
      x="1"
      y="1"
      width="14"
      height="14"
      rx="2"
      fill=${t?"currentColor":"none"}
      stroke="currentColor"
      stroke-width="1.4"
    />
    ${t?l`<path
            d="M4 8.5 L7 11 L12 5"
            fill="none"
            stroke="#0a0c0e"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>`:""}
  </svg>`}var ds=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,ze=(t,e,r,a)=>{for(var s=a>1?void 0:a?cs(e,r):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&ds(e,r,s),s};let ne=class extends y{constructor(){super(...arguments),this.weapons=[],this.locked=!1}toggleEveryWeapon(){this.locked||this.announce(Ur(this.weapons))}toggleAll(t,e){this.locked||(t.stopPropagation(),this.announce(Hr(e)))}cycleCount(t,e){this.locked||e.count<=1||(t.stopPropagation(),this.announce(Nr(e)))}announce(t){t.length&&(this.dispatchEvent(new CustomEvent("system-changed",{detail:t[t.length-1],bubbles:!0,composed:!0})),this.requestUpdate())}renderAmmoBoxes(t){const e=t.filter(r=>r.value);return l`<div class="consumable-boxes readonly">
      ${e.map(r=>l`<div class="ammo-run">
          ${Array.from({length:r.value??0},(a,s)=>ls(s<(r.spent??0),"ammo-box"))}
        </div>`)}
    </div>`}render(){return l`
      <div
        class="weapons frame ${this.locked?"locked":""}"
        @click=${()=>this.toggleEveryWeapon()}
      >
        <div class="weapon-header">
          <span class="name">WEAPONS</span>

          <span class="short">S</span>
          <span class="medium">M</span>
          <span class="long">L</span>
          <span class="dmg">DMG</span>
          <span>AMMO</span>
        </div>
        ${this.weapons.length?this.weapons.map(t=>this.renderWeaponRow(t)):l`<span class="meta">No active weapons</span>`}
      </div>
    `}renderWeaponRow(t){const e=t.count>1;return l`<div
      class="weapon frame ${t.activeCount===0?"off":""} ${this.locked?"locked":""}"
      @click=${r=>this.toggleAll(r,t)}
    >
      <span
        class="count ${e?"cyclable":""}"
        title=${e?"Step through copies one at a time":""}
        @click=${r=>this.cycleCount(r,t)}
        >${t.activeCount}${e?l`<span class="weapon-count-max">/${t.count}</span>`:""}</span
      >
      <span class="weapon-name">${t.name}</span>
      <span class="short">${Re(t.short,t.activeCount)}</span>
      <span class="medium">${Re(t.medium,t.activeCount)}</span>
      <span class="long">${Re(t.long,t.activeCount)}</span>

      <span class="dmg">${t.damage??"-"}</span>
      ${typeof t.ammo=="number"?this.renderAmmoBoxes(t.entries):l`<span class="heat-value">
              ${t.heat?l`🔥${t.heat*t.activeCount}`:"-"}
            </span>`}
    </div>`}};ne.styles=[C,$(ns)];ze([g({attribute:!1})],ne.prototype,"weapons",2);ze([g({type:Boolean})],ne.prototype,"locked",2);ne=ze([R("weapon-table")],ne);var hs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,Y=(t,e,r,a)=>{for(var s=a>1?void 0:a?ms(e,r):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&hs(e,r,s),s};let j=class extends y{constructor(){super(...arguments),this.prompt=null,this.handleChildChanged=t=>{var r,a;const e=t==null?void 0:t.detail;(e==null?void 0:e.name)==="reactor"&&!this.destroyed&&(e.state==="offline"&&this.card.state!=="shutdown"?this.card.state="shutdown":e.state==="online"&&this.card.state==="shutdown"&&(this.card.state="nominal")),this.requestUpdate(),(r=this.heatSection)==null||r.requestUpdate(),(a=this.mechFigure)==null||a.requestUpdate()},this.handleEjectRequest=()=>{this.destroyed||(this.prompt="eject")},this.handleMechStateChanged=t=>{var r,a,s,o;const e=this.reactor;(r=t.detail)!=null&&r.destroyReactor?(e&&(e.state="destroyed"),(a=this.torsoSection)==null||a.syncDestroyed()):((s=t.detail)==null?void 0:s.state)==="shutdown"&&(e==null?void 0:e.state)==="online"&&(e.state="offline",(o=this.torsoSection)==null||o.syncDestroyed()),this.handleChildChanged()},this.resyncBodySections=()=>{this.bodySections.forEach(t=>t.syncDestroyed()),this.handleChildChanged()},this.handleArticleClick=()=>{if(this.card.state==="shutdown"){this.prompt="startup";return}this.destroyed&&(this.prompt="repair")}}get destroyed(){return pe(this.card)}get disabled(){return this.destroyed||this.card.state==="shutdown"}get displayState(){return this.destroyed?"destroyed":this.card.state}get stateClass(){return $t(this.card)}get reactor(){return this.card.systems.torso.find(t=>t.name==="reactor")}get cockpit(){return this.card.systems.head.find(t=>t.name==="cockpit")}ejectPilot(){var t,e;this.cockpit&&(this.cockpit.state="destroyed"),this.card.state="destroyed",this.bodySections.forEach(r=>r.syncDestroyed()),this.requestUpdate(),(t=this.heatSection)==null||t.requestUpdate(),(e=this.mechFigure)==null||e.requestUpdate(),this.notifyCardChanged()}get torsoSection(){return Array.from(this.bodySections).find(t=>t.section==="torso")}confirmPrompt(){const t=this.prompt;this.prompt=null,t==="startup"?this.startUpMech():t==="repair"?this.repairMech():t==="eject"&&this.ejectPilot()}get promptCopy(){switch(this.prompt){case"startup":return{tone:"warning",heading:"Start up mech",message:`Bring ${this.card.name} back online? Heat is vented; battle damage stays.`,confirmLabel:"Start up"};case"repair":return{tone:"default",heading:"Repair mech",message:`Fully repair ${this.card.name}? Restores all armour, systems and heat sinks.`,confirmLabel:"Repair"};case"eject":return{tone:"critical",heading:"Eject pilot",message:`Punch the pilot out of ${this.card.name}? The abandoned mech counts as destroyed.`,confirmLabel:"Eject"};default:return null}}startUpMech(){var t,e,r,a;this.card.state="nominal",((t=this.reactor)==null?void 0:t.state)==="offline"&&(this.reactor.state="online"),(e=this.torsoSection)==null||e.syncDestroyed(),this.requestUpdate(),(r=this.heatSection)==null||r.requestUpdate(),(a=this.mechFigure)==null||a.requestUpdate(),this.notifyCardChanged()}repairMech(){var t,e;this.card.state="nominal",this.bodySections.forEach(r=>r.repairSection()),this.requestUpdate(),(t=this.heatSection)==null||t.requestUpdate(),(e=this.mechFigure)==null||e.requestUpdate(),this.notifyCardChanged()}notifyCardChanged(){this.dispatchEvent(new CustomEvent("card-changed",{bubbles:!0,composed:!0}))}get gaugeConfig(){switch(this.displayState){case"overheated":return{angle:-45,color:"var(--color-warning)"};case"critical":return{angle:45,color:"var(--color-critical)"};case"destroyed":return{angle:90,color:"var(--color-wreck)"};case"shutdown":return{angle:-90,color:"var(--color-muted)"};default:return{angle:-90,color:"var(--color-ok)"}}}renderStatusGauge(){const{angle:a,color:s}=this.gaugeConfig,o=[-90,-45,0,45,90].map(i=>{const n=i*Math.PI/180,d=Math.sin(n),h=-Math.cos(n);return A`<line
        class="gauge-tick"
        x1=${22+d*19}
        y1=${22+h*19}
        x2=${22+d*16}
        y2=${22+h*16}
      />`});return l`<svg
      class="status-gauge"
      viewBox="0 0 44 25"
      aria-hidden="true"
      style=${`--needle-color:${s}`}
    >
      <path class="gauge-face" d="M ${3} ${22} A ${19} ${19} 0 0 1 ${41} ${22}" />
      ${o}
      <line
        class="gauge-needle"
        x1=${22}
        y1=${22}
        x2=${22}
        y2=${7}
        style=${`transform:rotate(${a}deg);transform-origin:22px 22px`}
      />
      <circle class="gauge-hub" cx=${22} cy=${22} r="2.6" />
    </svg>`}render(){var a,s,o,i;const t=St(this.card),e=this.disabled,r=`--card-bg-image: url("./images/${encodeURIComponent(this.card.name)}.png")`;return l`
      <article
        class="state-${this.stateClass}"
        data-disabled=${e}
        @click=${this.handleArticleClick}
      >
        <div class="layout">
          <div class="row row-full">
            <header class="header">
              <div class="header-id">
                <div class="header-svg">
                  <mech-figure .card=${this.card}></mech-figure>
                </div>
                <div class="header-mech">
                  <h3 class="name">${this.card.name}</h3>
                  <div class="meta-row">
                    <span class="meta">${this.card.variant}</span>
                    <span class="meta-sep" aria-hidden="true">·</span>
                    <span class="meta">${this.card.tonnage} t</span>
                    <span class="meta-sep" aria-hidden="true">·</span>
                    <span class="meta weight-class">
                      ${sr(this.card.tonnage)}
                    </span>
                  </div>
                </div>
              </div>
              <div class="header-status-cluster">
                ${this.renderStatusGauge()}
                <span class="header-status mech-state ${this.stateClass}">
                  ${this.displayState.toUpperCase()}
                </span>
              </div>
            </header>
          </div>

          <div class="body-block">
            <div class="card-art" style=${r}></div>
            <div class="row row-head">
              <body-section
                section="head"
                .systems=${this.card.systems.head}
                .armor=${[this.card.armor.head]}
                .locked=${e}
                @system-changed=${this.handleChildChanged}
                @section-destroyed=${this.handleChildChanged}
                @armor-changed=${this.handleChildChanged}
                @eject-request=${this.handleEjectRequest}
              ></body-section>
            </div>

            <div class="row row-core">
              <body-section
                section="armRight"
                .systems=${this.card.systems.armRight}
                .armor=${[this.card.armor.armRight]}
                .locked=${e}
                @system-changed=${this.handleChildChanged}
                @section-destroyed=${this.handleChildChanged}
                @armor-changed=${this.handleChildChanged}
              ></body-section>

              <body-section
                section="torso"
                .systems=${this.card.systems.torso}
                .armor=${[this.card.armor.torso,this.card.armor.torsoBack]}
                .locked=${e}
                @system-changed=${this.handleChildChanged}
                @section-destroyed=${this.handleChildChanged}
                @armor-changed=${this.handleChildChanged}
              ></body-section>

              <body-section
                section="armLeft"
                .systems=${this.card.systems.armLeft}
                .armor=${[this.card.armor.armLeft]}
                .locked=${e}
                @system-changed=${this.handleChildChanged}
                @section-destroyed=${this.handleChildChanged}
                @armor-changed=${this.handleChildChanged}
              ></body-section>
            </div>

            <div class="row row-legs">
              <body-section
                section="legs"
                .systems=${this.card.systems.legs}
                .armor=${[this.card.armor.legs]}
                .locked=${e}
                @system-changed=${this.handleChildChanged}
                @section-destroyed=${this.handleChildChanged}
                @armor-changed=${this.handleChildChanged}
              ></body-section>

              <heat-section
                .card=${this.card}
                .heatSinks=${this.card.systems.torso.find(n=>n.name==="heatSinks")}
                @heat-changed=${this.resyncBodySections}
                @mech-state-changed=${this.handleMechStateChanged}
              ></heat-section>
            </div>
          </div>
        </div>
        <div class="row row-full">
          <weapon-table
            .weapons=${t}
            .locked=${e}
            @system-changed=${this.resyncBodySections}
          ></weapon-table>
        </div>

        <div class="footer">
          <span>HEK-MEK</span>
        </div>

        <confirm-modal
          ?open=${this.prompt!==null}
          tone=${((a=this.promptCopy)==null?void 0:a.tone)??"default"}
          heading=${((s=this.promptCopy)==null?void 0:s.heading)??""}
          message=${((o=this.promptCopy)==null?void 0:o.message)??""}
          confirmLabel=${((i=this.promptCopy)==null?void 0:i.confirmLabel)??"Confirm"}
          @modal-confirm=${()=>this.confirmPrompt()}
          @modal-cancel=${()=>this.prompt=null}
        ></confirm-modal>
      </article>
    `}};j.styles=[C,$(zr)];Y([g({attribute:!1})],j.prototype,"card",2);Y([Te("body-section")],j.prototype,"bodySections",2);Y([W("heat-section")],j.prototype,"heatSection",2);Y([W("mech-figure")],j.prototype,"mechFigure",2);Y([b()],j.prototype,"prompt",2);j=Y([R("mech-card")],j);const M=t=>l`<span class="tn"
    >${S(t)}<span class="tn-plus" aria-hidden="true">+</span></span
  >`,B=(t,e)=>l`<span class="ex-die ${e?"ex-hit":"ex-miss"}">${S(t)}</span>`,_t=t=>A`
  <marker id=${t} viewBox="0 0 10 10" refX="8" refY="5"
    markerWidth="5" markerHeight="5" orient="auto-start-reverse">
    <path d="M0 0 L10 5 L0 10 Z" class="d-fill" />
  </marker>`,dt=(t,e)=>A`<polygon class="d-hex" points="${t} ${e-13} ${t+11.26} ${e-6.5} ${t+11.26} ${e+6.5} ${t} ${e+13} ${t-11.26} ${e+6.5} ${t-11.26} ${e-6.5}" />`,Rt=[[22.52,0],[11.26,-19.5],[-11.26,-19.5],[-22.52,0],[-11.26,19.5],[11.26,19.5]],ps=(t,e)=>A`${dt(t,e)}${Rt.map(([r,a])=>dt(t+r,e+a))}`,gs=l`<svg
  class="diagram"
  viewBox="0 0 336 90"
  role="img"
  aria-label="A mech resolves Initiative, Movement, Shooting and Apply Heat in order before the next mech acts"
>
  <defs>${_t("ah-turn")}</defs>
  <path
    class="d-stroke"
    fill="none"
    d="M 285 30 V 14 Q 285 8 279 8 H 45 Q 39 8 39 14 V 28"
    marker-end="url(#ah-turn)"
  />
  ${["Initiative","Movement","Shooting","Apply Heat"].map((t,e)=>{const r=4+e*82;return A`
      <rect class="d-box" x=${r} y="30" width="70" height="30" rx="4" />
      <text class="d-accent d-mono-sm" x=${r+8} y="49">${e+1}</text>
      <text class="d-text d-mono-sm" x=${r+19} y="49">${t}</text>
      ${e<3?A`<line class="d-stroke" x1=${r+71} y1="45" x2=${r+81} y2="45"
              marker-end="url(#ah-turn)" />`:""}`})}
  <text class="d-muted d-cap" x="168" y="80" text-anchor="middle">
    one mech finishes all four, then the next activates
  </text>
</svg>`,us=l`<svg
  class="diagram"
  viewBox="0 0 336 132"
  role="img"
  aria-label="Movement is counted in hexes. Move steps one hex forwards or backwards along the mech's facing and turns freely. Run drives straight forwards. Jump travels a straight line along any one of the six hex directions."
>
  <defs>${_t("ah-move")}</defs>
  <line class="d-divider" x1="112" y1="20" x2="112" y2="116" />
  <line class="d-divider" x1="224" y1="20" x2="224" y2="116" />
  ${[{cx:56,title:"MOVE",cap:"forward or back"},{cx:168,title:"RUN",cap:"forward only"},{cx:280,title:"JUMP",cap:"straight · 6 ways"}].map(({cx:t,title:e,cap:r})=>A`
      <text class="d-accent d-mono-sm" x=${t} y="14" text-anchor="middle">${e}</text>
      ${ps(t,64)}
      <text class="d-muted d-cap" x=${t} y="126" text-anchor="middle">${r}</text>`)}

  <path class="d-token" d="M 52 57 L 52 71 L 64 64 Z" />
  <line class="d-stroke" x1="66" y1="64" x2="82" y2="64" marker-end="url(#ah-move)" />
  <line class="d-stroke" x1="50" y1="64" x2="32" y2="64" marker-end="url(#ah-move)" />

  <path class="d-token" d="M 156 57 L 156 71 L 168 64 Z" />
  <line class="d-stroke" x1="170" y1="64" x2="208" y2="64" marker-end="url(#ah-move)" />

  <circle class="d-token" cx="280" cy="64" r="3.6" />
  ${Rt.map(([t,e])=>A`<line class="d-stroke d-dash" x1=${280+t*.3} y1=${64+e*.3} x2=${280+t*.9} y2=${64+e*.9} marker-end="url(#ah-move)" />`)}
</svg>`,fs=l`<svg
  class="diagram"
  viewBox="0 0 300 66"
  role="img"
  aria-label="Range to the target: up to 6 inches is Short, up to 12 inches Medium, past 12 inches Long"
>
  <path class="d-token" d="M 8 18 L 22 28 L 8 38 Z" />
  <rect class="d-band-s" x="28" y="19" width="70" height="18" />
  <rect class="d-band-m" x="98" y="19" width="76" height="18" />
  <rect class="d-band-l" x="174" y="19" width="106" height="18" />
  <rect class="d-outline" x="28" y="19" width="252" height="18" />
  <line class="d-divider" x1="98" y1="19" x2="98" y2="37" />
  <line class="d-divider" x1="174" y1="19" x2="174" y2="37" />
  <text class="d-s d-mono-sm" x="63" y="32" text-anchor="middle">S</text>
  <text class="d-m d-mono-sm" x="136" y="32" text-anchor="middle">M</text>
  <text class="d-l d-mono-sm" x="227" y="32" text-anchor="middle">L</text>
  <text class="d-mono-sm" x="63" y="50" text-anchor="middle">6"</text>
  <text class="d-mono-sm" x="136" y="50" text-anchor="middle">12"</text>
  <text class="d-mono-sm" x="227" y="50" text-anchor="middle">&gt;12"</text>
  <text class="d-muted d-cap" x="154" y="62" text-anchor="middle">
    each weapon's S / M / L pool is on its card row
  </text>
</svg>`,vs=l`<div class="example">
  <p class="ex-head">Example — Griffin at Long range</p>
  <p>
    The <strong>Griffin</strong> (PPC + LRM-3) stands still and fires on a target that
    <strong>moved</strong>, out in the open.
  </p>
  <ol class="ex-steps">
    <li>
      <span class="ex-n">①</span>
      <span>
        <strong>Pool.</strong> Neither weapon reaches at Short. At Long the PPC gives
        <strong>2</strong>; the LRM-3 rolls its D3 → <strong>2</strong>. →
        <strong>4 attacks</strong>
      </span>
    </li>
    <li>
      <span class="ex-n">②</span>
      <span>
        <strong>Attack roll.</strong> Stood still, so ${M(2)}. Four dice:
        ${B(5,!0)}${B(3,!0)}${B(1,!1)}${B(4,!0)} →
        <strong>3 hits</strong>
      </span>
    </li>
    <li>
      <span class="ex-n">③</span>
      <span>
        <strong>Defense.</strong> Target moved, so ${M(4)}. Three dice:
        ${B(6,!0)}${B(5,!0)}${B(2,!1)} →
        <strong>2 blocked</strong>, 1 gets through
      </span>
    </li>
    <li>
      <span class="ex-n">④</span>
      <span>
        <strong>Location.</strong> One die for the hit that landed:
        <span class="ex-die">${S(4)}</span> → <strong>Torso</strong>
      </span>
    </li>
    <li>
      <span class="ex-n">⑤</span>
      <span>
        <strong>Damage.</strong> The die that got through is a PPC die —
        <strong>DMG 2</strong> → strip <strong>2 torso armour</strong> (a missile hit
        would take just <strong>1</strong>). With the armour there already gone, the hit
        wrecks a random torso system instead.
      </span>
    </li>
  </ol>
</div>`,Ce=t=>t===void 0?"–":String(t),bs=[{type:"energy",label:"Energy — generates heat"},{type:"ballistic",label:"Ballistic — consumes ammo"},{type:"missile",label:"Missile — consumes ammo"}],ys=l`<div class="wpn-frame">
  <table class="wpn-table">
    <thead>
      <tr>
        <th>Weapon</th>
        <th class="c s">S</th>
        <th class="c m">M</th>
        <th class="c l">L</th>
        <th class="c">Dmg</th>
        <th class="c">Heat / Ammo</th>
      </tr>
    </thead>
    ${bs.map(t=>l`<tbody>
          <tr class="wpn-group">
            <th colspan="6">${t.label}</th>
          </tr>
          ${Object.values(Ne).filter(e=>e.type===t.type).map(e=>l`<tr>
                  <td class="wpn-name">${e.name}</td>
                  <td class="c s">${Ce(e.short)}</td>
                  <td class="c m">${Ce(e.medium)}</td>
                  <td class="c l">${Ce(e.long)}</td>
                  <td class="c dmg">${e.damage??"–"}</td>
                  <td class="c">
                    ${e.heat?l`<span class="wpn-heat">🔥${e.heat}</span>`:l`<span class="wpn-ammo">${e.ammo} ⁍</span>`}
                  </td>
                </tr>`)}
        </tbody>`)}
  </table>
</div>`,ws=":host{display:contents}dialog{margin:auto;padding:0;border:none;background:transparent;color:var(--color-text);width:min(92vw,40rem);max-height:min(88vh,52rem);overflow:visible}dialog::backdrop{background:#0406089e;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.panel{display:flex;flex-direction:column;max-height:inherit;border:1px solid var(--color-border-strong);border-top:3px solid var(--color-brand);border-radius:var(--radius-md);background:linear-gradient(160deg,var(--color-panel-strong),var(--color-bg-alt));box-shadow:var(--shadow-panel);overflow:hidden}.head{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.85rem 1.1rem;border-bottom:1px solid var(--color-border);background:linear-gradient(180deg,#ff6b0017,#ff6b0000)}h2{margin:0;font:700 .9rem/1 var(--font-heading);letter-spacing:.08em;text-transform:uppercase;color:var(--color-text)}.btn.small{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid var(--color-border-strong);border-radius:var(--radius-sm);background:#0000004d;color:var(--color-text);font:700 .62rem/1 var(--font-mono);text-transform:uppercase;letter-spacing:.06em;padding:.4rem .8rem;cursor:pointer;transition:filter .15s ease}.btn.small:hover{filter:brightness(1.35);border-color:var(--color-brand)}.body{overflow-y:auto;padding:1rem 1.1rem 1.2rem;display:grid;gap:1.3rem}section{display:grid;gap:.5rem}h3{margin:0;font:700 .78rem/1.2 var(--font-heading);letter-spacing:.05em;text-transform:uppercase;color:var(--color-steel)}h4{margin:.35rem 0 0;font:700 .72rem/1.2 var(--font-mono);letter-spacing:.04em;color:var(--color-text)}p{margin:0;font:400 .76rem/1.55 var(--font-body);color:var(--color-muted)}p strong,dd strong,li strong{color:var(--color-text);font-weight:700}em{color:var(--color-steel);font-style:normal}ol,ul{margin:0;padding-left:1.1rem;display:grid;gap:.28rem;font:400 .76rem/1.5 var(--font-body);color:var(--color-muted)}.steps{list-style:decimal}.diagram{display:block;width:100%;height:auto;margin:.15rem 0 .1rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);background:#00000038;padding:.5rem .6rem}.diagram text{font-family:var(--font-mono);fill:var(--color-muted)}.diagram .d-mono-sm{font-size:8.5px;font-weight:700;letter-spacing:.02em}.diagram .d-cap{font-size:8px}.diagram .d-text{fill:var(--color-text)}.diagram .d-muted{fill:var(--color-muted)}.diagram .d-accent,.d-fill{fill:var(--color-steel)}.d-box{fill:color-mix(in srgb,var(--color-steel) 9%,transparent);stroke:var(--color-border-strong);stroke-width:1}.d-stroke{stroke:var(--color-steel);stroke-width:1.6;fill:none}.d-dash{stroke-dasharray:3 3}.d-divider{stroke:var(--color-border-strong);stroke-width:1}.d-outline{fill:none;stroke:var(--color-border-strong);stroke-width:1}.d-token{fill:var(--color-warning)}.d-hex{fill:color-mix(in srgb,var(--color-steel) 6%,transparent);stroke:var(--color-border-strong);stroke-width:1}.d-band-s{fill:color-mix(in srgb,var(--color-ok) 24%,transparent)}.d-band-m{fill:color-mix(in srgb,var(--color-steel) 22%,transparent)}.d-band-l{fill:color-mix(in srgb,var(--color-critical) 20%,transparent)}.diagram .d-s{fill:var(--color-ok)}.diagram .d-m{fill:var(--color-steel)}.diagram .d-l{fill:var(--color-critical)}.weight-order,.ladder{list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:.4rem;align-items:center}.wc{display:inline-block;padding:.12em .5em;border:1px solid currentColor;border-radius:999px;font:700 .62rem/1.3 var(--font-mono);letter-spacing:.08em;text-transform:uppercase}.wc.light{color:var(--color-ok)}.wc.medium{color:var(--color-steel)}.wc.heavy{color:var(--color-warning)}.wc.assault{color:var(--color-critical)}.modes{margin:0;display:grid;grid-template-columns:max-content 1fr;gap:.3rem .7rem;font:400 .76rem/1.5 var(--font-body)}.modes dt{font:700 .68rem/1.5 var(--font-mono);letter-spacing:.06em;color:var(--color-steel)}.modes dd{margin:0;color:var(--color-muted)}.tn{display:inline-flex;align-items:center;gap:.15rem;padding:.15em .4em;border-radius:var(--radius-sm);background:color-mix(in srgb,var(--color-steel) 18%,transparent);color:var(--color-steel);font:700 .7rem/1 var(--font-mono)}.tn .dice-svg{width:1.15rem;height:1.15rem}.tn-plus{font-size:.82rem}.mods{list-style:none;padding:0}.mod{display:inline-block;min-width:2.2em;margin-right:.5rem;text-align:center;padding:.05em .3em;border-radius:var(--radius-sm);font:700 .68rem/1.4 var(--font-mono)}.mod.minus{background:color-mix(in srgb,var(--color-critical) 16%,transparent);color:var(--color-critical)}.mod.plus{background:color-mix(in srgb,var(--color-ok) 16%,transparent);color:var(--color-ok)}.mod.info{background:color-mix(in srgb,var(--color-steel) 16%,transparent);color:var(--color-steel)}.d-heat{margin-left:.35rem;padding:.02em .4em;border-radius:var(--radius-sm);background:color-mix(in srgb,var(--color-warning) 15%,transparent);color:var(--color-warning);font:700 .6rem/1.4 var(--font-mono);white-space:nowrap}.kill{padding:.5rem .7rem;border-left:3px solid var(--color-critical);background:color-mix(in srgb,var(--color-critical) 8%,transparent);border-radius:var(--radius-sm)}.heat-table{border-collapse:collapse;width:100%;font:400 .74rem/1.4 var(--font-body)}.heat-table td{border:1px solid var(--color-border);padding:.35rem .6rem;color:var(--color-muted)}.heat-table td:first-child{white-space:nowrap;font-family:var(--font-mono);color:var(--color-text);width:1%}.loc-table{border-collapse:collapse;width:100%;font:400 .74rem/1.45 var(--font-body)}.loc-table th{text-align:left;padding:.3rem .6rem;border-bottom:1px solid var(--color-border);font:700 .58rem/1.4 var(--font-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--color-muted)}.loc-table td{border:1px solid var(--color-border);padding:.3rem .6rem;color:var(--color-muted);vertical-align:middle}.loc-table td:first-child{width:1%}.loc-roll{display:inline-flex;align-items:center;gap:.25rem;color:var(--color-warning)}.loc-roll .dice-svg{width:1.2rem;height:1.2rem}.example{display:grid;gap:.5rem;padding:.7rem .8rem;border:1px solid var(--color-border-strong);border-left:3px solid var(--color-steel);border-radius:var(--radius-sm);background:color-mix(in srgb,var(--color-steel) 7%,transparent)}.ex-head{font:700 .7rem/1.2 var(--font-heading);letter-spacing:.05em;text-transform:uppercase;color:var(--color-steel)}.ex-steps{list-style:none;margin:0;padding:0;display:grid;gap:.4rem}.ex-steps li{display:grid;grid-template-columns:1.3rem 1fr;gap:.4rem;align-items:baseline;font:400 .75rem/1.6 var(--font-body);color:var(--color-muted)}.ex-n{font:700 .82rem/1.6 var(--font-mono);color:var(--color-steel);text-align:center}.ex-die{display:inline-flex;vertical-align:middle;color:var(--color-text)}.ex-die .dice-svg{width:1rem;height:1rem;margin:0 .06rem}.ex-hit{color:var(--color-ok)}.ex-miss{color:var(--color-muted);opacity:.6}.wpn-frame{display:flex;justify-content:center;width:max-content;max-width:100%;margin:.15rem auto .1rem;padding:.5rem .7rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);background:#00000038;overflow-x:auto}.wpn-table{border-collapse:collapse;width:auto;font:400 .72rem/1.4 var(--font-body)}.wpn-table th{text-align:left;padding:.28rem .45rem;border-bottom:1px solid var(--color-border);font:700 .56rem/1.4 var(--font-mono);letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;color:var(--color-muted)}.wpn-table td{border:1px solid var(--color-border);padding:.26rem .45rem;color:var(--color-muted)}.wpn-table .c{text-align:center}.wpn-table td.c{font-family:var(--font-mono);white-space:nowrap}.wpn-table .s{color:var(--color-ok)}.wpn-table .m{color:var(--color-steel)}.wpn-table .l{color:var(--color-critical)}.wpn-table td.dmg{color:var(--color-text)}.wpn-name{font-family:var(--font-mono);color:var(--color-text);white-space:nowrap}.wpn-group th{padding-top:.7rem;border-bottom:none;color:var(--color-steel);text-transform:none;letter-spacing:.04em}.wpn-heat{color:var(--color-warning)}.wpn-ammo{color:var(--color-muted)}";var $s=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,Fe=(t,e,r,a)=>{for(var s=a>1?void 0:a?xs(e,r):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&$s(e,r,s),s};let le=class extends y{constructor(){super(...arguments),this.open=!1}updated(t){!t.has("open")||!this.dialog||(this.open&&!this.dialog.open&&this.dialog.showModal(),!this.open&&this.dialog.open&&this.dialog.close())}close(){this.dispatchEvent(new CustomEvent("close-rules",{bubbles:!0,composed:!0}))}render(){return l`<dialog
      @cancel=${t=>{t.preventDefault(),this.close()}}
      @click=${t=>{t.stopPropagation(),t.target===this.dialog&&this.close()}}
    >
      <div class="panel">
        <header class="head">
          <h2>Rules Reference</h2>
          <button type="button" class="btn small" @click=${this.close}>Close</button>
        </header>

        <div class="body">
          <section>
            <h3>The turn</h3>
            <p>
              Each turn, <strong>every mech is activated once</strong>. An activation runs
              all four phases in order before the next mech acts — so the heat a mech
              builds moving and shooting is only paid at the
              <em>end of its own activation</em>.
            </p>
            ${gs}
          </section>

          <section>
            <h3>1 · Initiative</h3>
            <p>
              Mechs activate in weight-class order, lightest first, the two sides
              alternating within each class:
            </p>
            <ol class="weight-order">
              <li><span class="wc light">Light</span></li>
              <li><span class="wc medium">Medium</span></li>
              <li><span class="wc heavy">Heavy</span></li>
              <li><span class="wc assault">Assault</span></li>
            </ol>
          </section>

          <section>
            <h3>2 · Movement</h3>
            <p>
              The board is a <strong>hex grid</strong> and movement is counted in hexes.
              Pick <strong>one</strong> movement mode, or stand still. Its speed is how
              many hexes it covers; its heat is paid in Apply Heat.
            </p>
            <dl class="modes">
              <dt>MOVE</dt>
              <dd>
                Forwards or backwards; turn freely, each facing change costs 1 hex of
                movement. <span class="d-heat">heat 1</span>
              </dd>
              <dt>RUN</dt>
              <dd>
                Forwards only; at most <strong>1 turn</strong> after each hex moved.
                <span class="d-heat">heat 2</span>
              </dd>
              <dt>JUMP</dt>
              <dd>
                A straight line along any one of the 6 hex directions — never across a
                half hex; no turning, and it lands facing the way it set off.
                <span class="d-heat">heat 3</span>
              </dd>
            </dl>
            ${us}
            <p>
              Standing still costs nothing and makes no heat — the mech may still turn
              <strong>up to 1 hex-side</strong> — but it is the easiest stance both to hit
              from and to be hit in (§3).
            </p>
          </section>

          <section>
            <h3>3 · Shooting</h3>
            <p>Resolved one target at a time, in five steps:</p>
            <ol class="steps">
              <li>build the <strong>attack pool</strong></li>
              <li>roll it — every die on target is a <strong>hit</strong></li>
              <li>
                the target rolls <strong>defense</strong> — each success cancels a hit
              </li>
              <li>roll <strong>location</strong> for every hit that gets through</li>
              <li>apply <strong>damage</strong></li>
            </ol>

            <h4>① Attack pool</h4>
            <p>
              Measure the range to the target: within <strong>6"</strong> is
              <strong>S</strong>hort, within <strong>12"</strong> <strong>M</strong>edium,
              past <strong>12"</strong> <strong>L</strong>ong. Every weapon switched on
              and in range adds the dice from its column for that band, times the copies
              firing. A <strong>D3</strong> / <strong>D6</strong> entry is rolled for its
              count; <strong>–</strong> means it can't reach. The total is the pool of
              "attacks".
            </p>
            ${fs}
            <p>
              A hit carries the <strong>DMG</strong> of the weapon that threw it, so roll
              <strong>DMG 1</strong> and <strong>DMG 2</strong> weapons as two
              <strong>different dice</strong> — a colour or a size — and every die in the
              pool still shows the damage it deals when hits reach ⑤.
            </p>
            ${ys}

            <h4>② Attack roll</h4>
            <p>
              Roll the whole pool. Each die that
              <strong>meets the target number</strong> is a hit. The TN is set by how the
              <em>attacker</em> moved this turn:
            </p>
            <dl class="modes">
              <dt>Stood still</dt>
              <dd>${M(2)}</dd>
              <dt>Move</dt>
              <dd>${M(3)}</dd>
              <dt>Run / Jump</dt>
              <dd>${M(4)}</dd>
            </dl>
            <ul class="mods">
              <li>
                <span class="mod minus">−1</span> per die while the attacker is Overheated
                or Critical
              </li>
            </ul>

            <h4>③ Defense roll</h4>
            <p>
              The target rolls <strong>one die per incoming hit</strong>. Each success
              <strong>cancels one hit</strong>; the rest carry through. The TN is set by
              how the <em>target</em> moved — the faster it ran, the harder it is to pin
              down (for any stance, attack TN + defense TN = 7):
            </p>
            <dl class="modes">
              <dt>Stood still</dt>
              <dd>${M(5)}</dd>
              <dt>Move</dt>
              <dd>${M(4)}</dd>
              <dt>Run 6 hexes/ Jump</dt>
              <dd>${M(3)}</dd>
            </dl>
            <ul class="mods">
              <li>
                <span class="mod minus">−1</span> per die while the target is Overheated
                or Critical
              </li>
              <li>
                <span class="mod plus">+1</span> per die while the target is in cover
              </li>
            </ul>

            <h4>④ Hit location</h4>
            <p>Roll <strong>1d6</strong> for every hit that got through:</p>
            <table class="loc-table">
              <thead>
                <tr>
                  <th>Roll</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span class="loc-roll">${S(1)}</span></td>
                  <td>Legs</td>
                </tr>
                <tr>
                  <td><span class="loc-roll">${S(2)}</span></td>
                  <td>Left arm</td>
                </tr>
                <tr>
                  <td><span class="loc-roll">${S(3)}</span></td>
                  <td>Right arm</td>
                </tr>
                <tr>
                  <td>
                    <span class="loc-roll">${S(4)}${S(5)}</span>
                  </td>
                  <td>Torso</td>
                </tr>
                <tr>
                  <td><span class="loc-roll">${S(6)}</span></td>
                  <td>
                    Head — roll again: <strong>5+</strong> confirms the head, a
                    <strong>1–4</strong> hits the torso instead
                  </td>
                </tr>
              </tbody>
            </table>

            <h4>⑤ Damage</h4>
            <p>
              Each hit carries its weapon's <strong>DMG</strong>. It strips that many
              <strong>armour points</strong> from the struck section; a hit with no armour
              left to absorb it <strong>destroys a random system</strong> there instead.
            </p>
            <ul class="mods">
              <li>
                <span class="mod minus">+D3</span> a destroyed weapon that still had
                loaded <strong>ammo</strong> cooks off — extra damage to that section
              </li>
              <li>
                <span class="mod info">→T</span> a destroyed <strong>arm</strong> or
                <strong>leg</strong>, or a hit onto one already gone, sends the damage to
                the <strong>torso</strong>
              </li>
            </ul>
            <p class="kill">
              Losing the <em>Cockpit</em> or the <em>Reactor</em> — to a system hit, a
              gutted head/torso, or heat — <strong>destroys</strong> the mech outright.
            </p>

            ${vs}
          </section>

          <section>
            <h3>4 · Apply Heat</h3>
            <p>
              Total the heat made this activation — the
              <strong>movement mode</strong> used (Move 1 / Run 2 / Jump 3) plus every
              <strong>energy weapon</strong> that fired — and compare it to
              <em>sink capacity</em> (heat-sink rating minus sinks already burned).
            </p>
            <table class="heat-table">
              <tbody>
                <tr>
                  <td>heat &lt; capacity</td>
                  <td>cool one step toward Nominal</td>
                </tr>
                <tr>
                  <td>heat = capacity</td>
                  <td>no change</td>
                </tr>
                <tr>
                  <td>heat &gt; capacity</td>
                  <td>heat up one step</td>
                </tr>
              </tbody>
            </table>
            <p>
              The state ladder:
              <span class="ladder">
                <span class="wc light">Nominal</span> →
                <span class="wc medium">Overheated</span> →
                <span class="wc heavy">Critical</span> →
                <span class="wc assault">Shutdown / Destroyed</span>
              </span>
            </p>
            <p>Stepping <em>into</em> Critical (or worse) forces a choice:</p>
            <ul class="mods">
              <li>
                <strong>Shut down</strong> — the reactor spins down; the mech is out of
                play (not destroyed) until the pilot restarts it. Heat vents; battle
                damage stays.
              </li>
              <li>
                <strong>Override</strong> — hold at Critical but permanently burn one heat
                sink. With none left to burn, an override destroys the mech.
              </li>
            </ul>
            <p>
              Apply Heat also spends one round from every ammo weapon that fired; a weapon
              that runs dry switches itself off.
            </p>
          </section>
        </div>
      </div>
    </dialog>`}};le.styles=[C,$(ws)];Fe([g({type:Boolean})],le.prototype,"open",2);Fe([W("dialog")],le.prototype,"dialog",2);le=Fe([R("rules-panel")],le);var ks=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,N=(t,e,r,a)=>{for(var s=a>1?void 0:a?Ss(e,r):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(s=(a?i(e,r,s):i(s))||s);return a&&s&&ks(e,r,s),s};const ct="hekmek-saved-rosters",_s=1.41421356237;let _=class extends y{constructor(){super(...arguments),this.cards=[],this.savedRosters=[],this.dataError="",this.showManage=!1,this.showRules=!1,this.activeCard=0,this.scrollFrame=0,this.onViewportResize=()=>this.updateCardScale(),this.onCardsScroll=()=>{this.scrollFrame||(this.scrollFrame=requestAnimationFrame(()=>{this.scrollFrame=0;const t=this.renderRoot.querySelector(".cards");if(!t)return;const e=t.getBoundingClientRect().top+t.clientHeight/2;let r=0,a=1/0;t.querySelectorAll(".card-slide").forEach((s,o)=>{const i=s.getBoundingClientRect(),n=Math.abs(i.top+i.height/2-e);n<a&&(a=n,r=o)}),this.activeCard=r}))},this.onKeyDown=t=>{t.key==="Escape"&&(this.showManage=!1,this.showRules=!1)},this.deadIds=new Set,this.onRosterDamage=()=>{this.refreshRailFigures(),this.sinkDestroyedCards(),this.requestUpdate()},this.refreshRailFigures=()=>{var t;(t=this.railFigures)==null||t.forEach(e=>e.requestUpdate())},this.onCardsWheel=t=>{const e=t.currentTarget;t.deltaY===0||e.scrollWidth<=e.clientWidth||(t.preventDefault(),e.scrollLeft+=Math.sign(t.deltaY)*400)}}connectedCallback(){var t;super.connectedCallback(),this.initialize(),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("resize",this.onViewportResize),(t=window.visualViewport)==null||t.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){var t,e,r;super.disconnectedCallback(),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("resize",this.onViewportResize),(t=window.visualViewport)==null||t.removeEventListener("resize",this.onViewportResize),(e=this.cardScaleObserver)==null||e.disconnect(),(r=this.renderRoot.querySelector(".cards"))==null||r.removeEventListener("scroll",this.onCardsScroll),this.scrollFrame&&cancelAnimationFrame(this.scrollFrame)}firstUpdated(){const t=this.renderRoot.querySelector(".cards");t&&(this.cardScaleObserver=new ResizeObserver(()=>this.updateCardScale()),this.cardScaleObserver.observe(t),t.addEventListener("scroll",this.onCardsScroll,{passive:!0}))}scrollToCard(t){const e=this.renderRoot.querySelector(".cards"),r=e==null?void 0:e.querySelectorAll(".card-slide")[t];!e||!r||(e.scrollTop+=r.getBoundingClientRect().top-e.getBoundingClientRect().top)}updated(){this.updateCardScale(),this.onCardsScroll()}updateCardScale(){var m,f;const t=this.renderRoot.querySelector(".cards"),e=t==null?void 0:t.querySelector("mech-card");if(!t||!e||!e.offsetWidth)return;if(!window.matchMedia("(max-width: 818px)").matches){t.style.removeProperty("--card-scale"),t.style.removeProperty("--cards-fit-height");return}const a=e.offsetWidth,s=a*_s,o=getComputedStyle(t),i=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),d=((m=this.renderRoot.querySelector("app-header"))==null?void 0:m.getBoundingClientRect().height)??0,h=((f=window.visualViewport)==null?void 0:f.height)??window.innerHeight,u=t.clientWidth-i,c=h-d-n,p=Math.max(0,Math.min(u/a,c/s));t.style.setProperty("--card-scale",String(p)),t.style.setProperty("--cards-fit-height",`${Math.max(0,h-d)}px`)}async initialize(){this.dataError="";try{this.savedRosters=this.loadSavedRosters();const t=this.savedRosters.find(e=>e.cards.length>0);t&&(this.cards=t.cards.map(ot).filter(e=>e!==void 0),this.markDestroyed())}catch(t){this.cards=[],this.dataError=t instanceof Error?t.message:"Unable to load required game data."}}onAddCard(t){var a;const e=(a=t.detail)==null?void 0:a.variant,r=Ae.find(s=>s.variant===e);r&&(this.cards=[...this.cards,yt(r)])}onRemoveCard(t){this.cards=this.cards.filter(e=>e.id!==t.detail.id)}static move(t,e,r){if(e===r||e<0||r<0||e>=t.length||r>=t.length)return t;const a=[...t],[s]=a.splice(e,1);return a.splice(r,0,s),a}onReorderCards(t){this.cards=_.move(this.cards,t.detail.from,t.detail.to)}onReorderRosters(t){this.savedRosters=_.move(this.savedRosters,t.detail.from,t.detail.to),this.persistSavedRosters()}onRepairCard(t){var s;const e=(s=t.detail)==null?void 0:s.id;if(!e)return;const r=this.renderRoot.querySelectorAll("mech-card"),a=Array.from(r).find(o=>{var i;return((i=o.card)==null?void 0:i.id)===e});a&&(a.repairMech(),this.cards=[...this.cards],this.refreshRailFigures(),this.markDestroyed())}markDestroyed(){this.deadIds=new Set(this.cards.filter(pe).map(t=>t.id))}sinkDestroyedCards(){const t=this.cards.filter(r=>pe(r)&&!this.deadIds.has(r.id));if(this.markDestroyed(),!t.length)return;const e=new Set(t.map(r=>r.id));this.cards=[...this.cards.filter(r=>!e.has(r.id)),...t]}exportRoster(t,e=""){const r=t?this.savedRosters.find(o=>o.id===t):{name:e||"Roster",cards:this.cards.map(_e)};if(!(r!=null&&r.cards.length))return;const a=URL.createObjectURL(new Blob([ur(r)],{type:"application/json"})),s=document.createElement("a");s.href=a,s.download=fr(r.name),s.click(),URL.revokeObjectURL(a)}importRosters(t){let e;try{e=yr(t)}catch(a){this.dataError=a instanceof Error?a.message:"Could not read that file.";return}const r=this.savedRosters.map(a=>a.name);for(const a of e)a.name=nt(a.name,r),r.push(a.name);this.dataError="",this.savedRosters=[...e,...this.savedRosters],this.persistSavedRosters()}loadSavedRosters(){try{const t=window.localStorage.getItem(ct);if(!t)return[];const e=JSON.parse(t);return Array.isArray(e)?e.filter(r=>r&&typeof r=="object"&&typeof r.id=="string"&&typeof r.name=="string"&&Array.isArray(r.cards)):[]}catch{return[]}}persistSavedRosters(){window.localStorage.setItem(ct,JSON.stringify(this.savedRosters))}renameRoster(t,e){const r=this.savedRosters.find(s=>s.id===t);if(!r)return;const a=this.savedRosters.filter(s=>s.id!==t).map(s=>s.name);r.name=nt(e,a),this.savedRosters=[...this.savedRosters],this.persistSavedRosters()}saveRoster(t){if(!this.cards.length)return;const e=t||`ROSTER ${this.savedRosters.length+1}`,r=this.savedRosters.find(a=>a.name.toLowerCase()===e.toLowerCase());if(r){r.cards=this.cards.map(_e),this.savedRosters=[...this.savedRosters],this.persistSavedRosters();return}this.savedRosters=[{id:He(),name:e,cards:this.cards.map(_e)},...this.savedRosters],this.persistSavedRosters()}render(){return l`
      <app-header
        @open-manage=${()=>this.showManage=!0}
        @open-rules=${()=>this.showRules=!0}
      ></app-header>

      ${this.dataError?l`<div class="error">${this.dataError}</div>`:l``}

      <main
        class="cards ${this.cards.length>1?"has-rail":""}"
        @wheel=${this.onCardsWheel}
        @system-changed=${this.onRosterDamage}
        @section-destroyed=${this.onRosterDamage}
        @armor-changed=${this.onRosterDamage}
        @card-changed=${this.onRosterDamage}
        @mech-state-changed=${this.onRosterDamage}
      >
        ${this.cards.length?at(this.cards,t=>t.id,t=>l`<div class="card-slide">
                    <mech-card .card=${t}></mech-card>
                  </div>`):l`<div class="empty">No cards loaded.</div>`}
      </main>

      ${this.cards.length>1&&!this.showManage&&!this.showRules?l`<nav class="card-rail" aria-label="Jump to card">
              ${at(this.cards,t=>t.id,(t,e)=>{const r=e===Math.min(this.activeCard,this.cards.length-1);return l`<button
                    type="button"
                    class="rail-dot state-${$t(t)} ${r?"active":""}"
                    title=${t.name}
                    aria-label=${t.name}
                    aria-current=${r?"true":"false"}
                    @click=${()=>this.scrollToCard(e)}
                  >
                    <mech-figure .card=${t}></mech-figure>
                  </button>`})}
            </nav>`:""}

      <aside-panel
        .open=${this.showManage}
        .loadouts=${Ae}
        .cards=${this.cards}
        .savedRosters=${this.savedRosters}
        @close-manage=${()=>this.showManage=!1}
        @add-card=${this.onAddCard}
        @remove-card=${this.onRemoveCard}
        @repair-card=${this.onRepairCard}
        @reorder-cards=${this.onReorderCards}
        @reorder-rosters=${this.onReorderRosters}
        @save-roster=${t=>this.saveRoster(t.detail.name)}
        @rename-roster=${t=>this.renameRoster(t.detail.id,t.detail.name)}
        @export-roster=${t=>this.exportRoster(t.detail.id,t.detail.name)}
        @import-rosters=${t=>this.importRosters(t.detail.text)}
        @save-roster-as=${t=>{const e=this.savedRosters.find(r=>r.id===t.detail.id);e&&this.saveRoster(e.name)}}
        @load-roster=${t=>{const e=this.savedRosters.find(r=>r.id===t.detail.id);e&&(this.cards=e.cards.map(ot).filter(r=>r!==void 0),this.markDestroyed(),this.showManage=!1)}}
        @delete-roster=${t=>{this.savedRosters=this.savedRosters.filter(e=>e.id!==t.detail.id),this.persistSavedRosters()}}
      ></aside-panel>

      <rules-panel
        .open=${this.showRules}
        @close-rules=${()=>this.showRules=!1}
      ></rules-panel>

      <footer class="disclaimer">
        A fan-made, non-commercial BattleTech-inspired rules project. Not affiliated with
        or endorsed by Catalyst Game Labs, The Topps Company, or their licensors.
        BattleTech and associated trademarks are property of their respective owners.
      </footer>
    `}};_.styles=[C,$($r)];N([b()],_.prototype,"cards",2);N([b()],_.prototype,"savedRosters",2);N([b()],_.prototype,"dataError",2);N([b()],_.prototype,"showManage",2);N([b()],_.prototype,"showRules",2);N([b()],_.prototype,"activeCard",2);N([Te(".rail-dot mech-figure")],_.prototype,"railFigures",2);_=N([R("app-root")],_);
