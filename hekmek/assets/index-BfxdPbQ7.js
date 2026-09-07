(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=globalThis,De=he.ShadowRoot&&(he.ShadyCSS===void 0||he.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),We=new WeakMap;let ut=class{constructor(t,r,a){if(this._$cssResult$=!0,a!==je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(De&&t===void 0){const a=r!==void 0&&r.length===1;a&&(t=We.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&We.set(r,t))}return t}toString(){return this.cssText}};const k=e=>new ut(typeof e=="string"?e:e+"",void 0,je),Mt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((a,s,o)=>a+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[o+1],e[0]);return new ut(r,e,je)},Ot=(e,t)=>{if(De)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const a=document.createElement("style"),s=he.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=r.cssText,e.appendChild(a)}},Ve=De?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const a of t.cssRules)r+=a.cssText;return k(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Dt,defineProperty:jt,getOwnPropertyDescriptor:Ut,getOwnPropertyNames:Tt,getOwnPropertySymbols:Nt,getPrototypeOf:Ht}=Object,U=globalThis,Ge=U.trustedTypes,Bt=Ge?Ge.emptyScript:"",ke=U.reactiveElementPolyfillSupport,ee=(e,t)=>e,me={toAttribute(e,t){switch(t){case Boolean:e=e?Bt:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Ue=(e,t)=>!Dt(e,t),Ke={attribute:!0,type:String,converter:me,reflect:!1,useDefault:!1,hasChanged:Ue};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),U.litPropertyMetadata??(U.litPropertyMetadata=new WeakMap);let K=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Ke){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const a=Symbol(),s=this.getPropertyDescriptor(t,a,r);s!==void 0&&jt(this.prototype,t,s)}}static getPropertyDescriptor(t,r,a){const{get:s,set:o}=Ut(this.prototype,t)??{get(){return this[r]},set(i){this[r]=i}};return{get:s,set(i){const n=s==null?void 0:s.call(this);o==null||o.call(this,i),this.requestUpdate(t,n,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ke}static _$Ei(){if(this.hasOwnProperty(ee("elementProperties")))return;const t=Ht(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ee("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee("properties"))){const r=this.properties,a=[...Tt(r),...Nt(r)];for(const s of a)this.createProperty(s,r[s])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[a,s]of r)this.elementProperties.set(a,s)}this._$Eh=new Map;for(const[r,a]of this.elementProperties){const s=this._$Eu(r,a);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const s of a)r.unshift(Ve(s))}else t!==void 0&&r.push(Ve(t));return r}static _$Eu(t,r){const a=r.attribute;return a===!1?void 0:typeof a=="string"?a:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const a of r.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ot(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var a;return(a=r.hostConnected)==null?void 0:a.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var a;return(a=r.hostDisconnected)==null?void 0:a.call(r)})}attributeChangedCallback(t,r,a){this._$AK(t,a)}_$ET(t,r){var o;const a=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,a);if(s!==void 0&&a.reflect===!0){const i=(((o=a.converter)==null?void 0:o.toAttribute)!==void 0?a.converter:me).toAttribute(r,a.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,r){var o,i;const a=this.constructor,s=a._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=a.getPropertyOptions(s),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:me;this._$Em=s;const h=d.fromAttribute(r,n.type);this[s]=h??((i=this._$Ej)==null?void 0:i.get(s))??h,this._$Em=null}}requestUpdate(t,r,a,s=!1,o){var i;if(t!==void 0){const n=this.constructor;if(s===!1&&(o=this[t]),a??(a=n.getPropertyOptions(t)),!((a.hasChanged??Ue)(o,r)||a.useDefault&&a.reflect&&o===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(n._$Eu(t,a))))return;this.C(t,r,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:a,reflect:s,wrapped:o},i){a&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,i??r??this[t]),o!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||a||(r=void 0),this._$AL.set(t,r)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,i]of s){const{wrapped:n}=i,d=this[o];n!==!0||this._$AL.has(o)||d===void 0||this.C(o,void 0,i,d)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(a=this._$EO)==null||a.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(a=>{var s;return(s=a.hostUpdated)==null?void 0:s.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}};K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[ee("elementProperties")]=new Map,K[ee("finalized")]=new Map,ke==null||ke({ReactiveElement:K}),(U.reactiveElementVersions??(U.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=globalThis,Je=e=>e,pe=te.trustedTypes,Ze=pe?pe.createPolicy("lit-html",{createHTML:e=>e}):void 0,ft="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,vt="?"+j,zt=`<${vt}>`,I=document,re=()=>I.createComment(""),se=e=>e===null||typeof e!="object"&&typeof e!="function",Te=Array.isArray,Ft=e=>Te(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Se=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ye=/-->/g,Qe=/>/g,H=RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xe=/'/g,et=/"/g,bt=/^(?:script|style|textarea|title)$/i,yt=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),l=yt(1),A=yt(2),W=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),tt=new WeakMap,F=I.createTreeWalker(I,129);function wt(e,t){if(!Te(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ze!==void 0?Ze.createHTML(t):t}const qt=(e,t)=>{const r=e.length-1,a=[];let s,o=t===2?"<svg>":t===3?"<math>":"",i=Q;for(let n=0;n<r;n++){const d=e[n];let h,u,c=-1,g=0;for(;g<d.length&&(i.lastIndex=g,u=i.exec(d),u!==null);)g=i.lastIndex,i===Q?u[1]==="!--"?i=Ye:u[1]!==void 0?i=Qe:u[2]!==void 0?(bt.test(u[2])&&(s=RegExp("</"+u[2],"g")),i=H):u[3]!==void 0&&(i=H):i===H?u[0]===">"?(i=s??Q,c=-1):u[1]===void 0?c=-2:(c=i.lastIndex-u[2].length,h=u[1],i=u[3]===void 0?H:u[3]==='"'?et:Xe):i===et||i===Xe?i=H:i===Ye||i===Qe?i=Q:(i=H,s=void 0);const m=i===H&&e[n+1].startsWith("/>")?" ":"";o+=i===Q?d+zt:c>=0?(a.push(h),d.slice(0,c)+ft+d.slice(c)+j+m):d+j+(c===-2?n:m)}return[wt(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),a]};class ae{constructor({strings:t,_$litType$:r},a){let s;this.parts=[];let o=0,i=0;const n=t.length-1,d=this.parts,[h,u]=qt(t,r);if(this.el=ae.createElement(h,a),F.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=F.nextNode())!==null&&d.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(ft)){const g=u[i++],m=s.getAttribute(c).split(j),f=/([.?@])?(.*)/.exec(g);d.push({type:1,index:o,name:f[2],strings:m,ctor:f[1]==="."?Wt:f[1]==="?"?Vt:f[1]==="@"?Gt:be}),s.removeAttribute(c)}else c.startsWith(j)&&(d.push({type:6,index:o}),s.removeAttribute(c));if(bt.test(s.tagName)){const c=s.textContent.split(j),g=c.length-1;if(g>0){s.textContent=pe?pe.emptyScript:"";for(let m=0;m<g;m++)s.append(c[m],re()),F.nextNode(),d.push({type:2,index:++o});s.append(c[g],re())}}}else if(s.nodeType===8)if(s.data===vt)d.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(j,c+1))!==-1;)d.push({type:7,index:o}),c+=j.length-1}o++}}static createElement(t,r){const a=I.createElement("template");return a.innerHTML=t,a}}function J(e,t,r=e,a){var i,n;if(t===W)return t;let s=a!==void 0?(i=r._$Co)==null?void 0:i[a]:r._$Cl;const o=se(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((n=s==null?void 0:s._$AO)==null||n.call(s,!1),o===void 0?s=void 0:(s=new o(e),s._$AT(e,r,a)),a!==void 0?(r._$Co??(r._$Co=[]))[a]=s:r._$Cl=s),s!==void 0&&(t=J(e,s._$AS(e,t.values),s,a)),t}class It{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:a}=this._$AD,s=((t==null?void 0:t.creationScope)??I).importNode(r,!0);F.currentNode=s;let o=F.nextNode(),i=0,n=0,d=a[0];for(;d!==void 0;){if(i===d.index){let h;d.type===2?h=new Y(o,o.nextSibling,this,t):d.type===1?h=new d.ctor(o,d.name,d.strings,this,t):d.type===6&&(h=new Kt(o,this,t)),this._$AV.push(h),d=a[++n]}i!==(d==null?void 0:d.index)&&(o=F.nextNode(),i++)}return F.currentNode=I,s}p(t){let r=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(t,a,r),r+=a.strings.length-2):a._$AI(t[r])),r++}}class Y{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,a,s){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=a,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=J(this,t,r),se(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==W&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ft(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&se(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){var o;const{values:r,_$litType$:a}=t,s=typeof a=="number"?this._$AC(t):(a.el===void 0&&(a.el=ae.createElement(wt(a.h,a.h[0]),this.options)),a);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(r);else{const i=new It(s,this),n=i.u(this.options);i.p(r),this.T(n),this._$AH=i}}_$AC(t){let r=tt.get(t.strings);return r===void 0&&tt.set(t.strings,r=new ae(t)),r}k(t){Te(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let a,s=0;for(const o of t)s===r.length?r.push(a=new Y(this.O(re()),this.O(re()),this,this.options)):a=r[s],a._$AI(o),s++;s<r.length&&(this._$AR(a&&a._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,r);t!==this._$AB;){const s=Je(t).nextSibling;Je(t).remove(),t=s}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class be{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,a,s,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=o,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=v}_$AI(t,r=this,a,s){const o=this.strings;let i=!1;if(o===void 0)t=J(this,t,r,0),i=!se(t)||t!==this._$AH&&t!==W,i&&(this._$AH=t);else{const n=t;let d,h;for(t=o[0],d=0;d<o.length-1;d++)h=J(this,n[a+d],r,d),h===W&&(h=this._$AH[d]),i||(i=!se(h)||h!==this._$AH[d]),h===v?t=v:t!==v&&(t+=(h??"")+o[d+1]),this._$AH[d]=h}i&&!s&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Wt extends be{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}class Vt extends be{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}}class Gt extends be{constructor(t,r,a,s,o){super(t,r,a,s,o),this.type=5}_$AI(t,r=this){if((t=J(this,t,r,0)??v)===W)return;const a=this._$AH,s=t===v&&a!==v||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,o=t!==v&&(a===v||s);s&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class Kt{constructor(t,r,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const Jt={I:Y},_e=te.litHtmlPolyfillSupport;_e==null||_e(ae,Y),(te.litHtmlVersions??(te.litHtmlVersions=[])).push("3.3.3");const Zt=(e,t,r)=>{const a=(r==null?void 0:r.renderBefore)??t;let s=a._$litPart$;if(s===void 0){const o=(r==null?void 0:r.renderBefore)??null;a._$litPart$=s=new Y(t.insertBefore(re(),o),o,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis;let y=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Zt(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return W}};var gt;y._$litElement$=!0,y.finalized=!0,(gt=q.litElementHydrateSupport)==null||gt.call(q,{LitElement:y});const Ce=q.litElementPolyfillSupport;Ce==null||Ce({LitElement:y});(q.litElementVersions??(q.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt={CHILD:2},Qt=e=>(...t)=>({_$litDirective$:e,values:t});let Xt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,a){this._$Ct=t,this._$AM=r,this._$Ci=a}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:er}=Jt,rt=e=>e,st=()=>document.createComment(""),X=(e,t,r)=>{var o;const a=e._$AA.parentNode,s=t===void 0?e._$AB:t._$AA;if(r===void 0){const i=a.insertBefore(st(),s),n=a.insertBefore(st(),s);r=new er(i,n,e,e.options)}else{const i=r._$AB.nextSibling,n=r._$AM,d=n!==e;if(d){let h;(o=r._$AQ)==null||o.call(r,e),r._$AM=e,r._$AP!==void 0&&(h=e._$AU)!==n._$AU&&r._$AP(h)}if(i!==s||d){let h=r._$AA;for(;h!==i;){const u=rt(h).nextSibling;rt(a).insertBefore(h,s),h=u}}}return r},B=(e,t,r=e)=>(e._$AI(t,r),e),tr={},rr=(e,t=tr)=>e._$AH=t,sr=e=>e._$AH,Re=e=>{e._$AR(),e._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=(e,t,r)=>{const a=new Map;for(let s=t;s<=r;s++)a.set(e[s],s);return a},ot=Qt(class extends Xt{constructor(e){if(super(e),e.type!==Yt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,r){let a;r===void 0?r=t:t!==void 0&&(a=t);const s=[],o=[];let i=0;for(const n of e)s[i]=a?a(n,i):i,o[i]=r(n,i),i++;return{values:o,keys:s}}render(e,t,r){return this.dt(e,t,r).values}update(e,[t,r,a]){const s=sr(e),{values:o,keys:i}=this.dt(t,r,a);if(!Array.isArray(s))return this.ut=i,o;const n=this.ut??(this.ut=[]),d=[];let h,u,c=0,g=s.length-1,m=0,f=o.length-1;for(;c<=g&&m<=f;)if(s[c]===null)c++;else if(s[g]===null)g--;else if(n[c]===i[m])d[m]=B(s[c],o[m]),c++,m++;else if(n[g]===i[f])d[f]=B(s[g],o[f]),g--,f--;else if(n[c]===i[f])d[f]=B(s[c],o[f]),X(e,d[f+1],s[c]),c++,f--;else if(n[g]===i[m])d[m]=B(s[g],o[m]),X(e,s[c],s[g]),g--,m++;else if(h===void 0&&(h=at(i,m,f),u=at(n,c,g)),h.has(n[c]))if(h.has(n[g])){const M=u.get(i[m]),xe=M!==void 0?s[M]:null;if(xe===null){const Ie=X(e,s[c]);B(Ie,o[m]),d[m]=Ie}else d[m]=B(xe,o[m]),X(e,s[c],xe),s[M]=null;m++}else Re(s[g]),g--;else Re(s[c]),c++;for(;m<=f;){const M=X(e,d[f+1]);B(M,o[m]),d[m++]=M}for(;c<=g;){const M=s[c++];M!==null&&Re(M)}return this.ut=i,rr(e,d),W}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ar={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:Ue},or=(e=ar,t,r)=>{const{kind:a,metadata:s}=r;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),a==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(r.name,e),a==="accessor"){const{name:i}=r;return{set(n){const d=t.get.call(this);t.set.call(this,n),this.requestUpdate(i,d,e,!0,n)},init(n){return n!==void 0&&this.C(i,void 0,e,n),n}}}if(a==="setter"){const{name:i}=r;return function(n){const d=this[i];t.call(this,n),this.requestUpdate(i,d,e,!0,n)}}throw Error("Unsupported decorator location: "+a)};function p(e){return(t,r)=>typeof r=="object"?or(e,t,r):((a,s,o)=>{const i=s.hasOwnProperty(o);return s.constructor.createProperty(o,a),i?Object.getOwnPropertyDescriptor(s,o):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(e){return p({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(e,t){return(r,a,s)=>{const o=i=>{var n;return((n=i.renderRoot)==null?void 0:n.querySelector(e))??null};return $t(r,a,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ir;function ye(e){return(t,r)=>$t(t,r,{get(){return(this.renderRoot??ir??(ir=document.createDocumentFragment())).querySelectorAll(e)}})}const Oe=[{name:"Archer",variant:"ARC-1A",weight:70,move:3,torso:["lrm6","lrm6"],armLeft:["laser"],armRight:["laser"]},{name:"Annihilator",variant:"ANH-1A",weight:100,move:2,heatSinks:4,torso:["laser","laser","ac","ac"],armLeft:["laser","ac"],armRight:["laser","ac"]},{name:"Assassin",variant:"ASN-21",weight:40,move:7,torso:["lrm3","srm3"],armRight:["laser"],legs:["jump"]},{name:"Atlas",variant:"AS7-D",weight:100,move:3,heatSinks:4,torso:["ac_heavy","lrm6","laser","srm6","laser"],armLeft:["laser"],armRight:["laser"]},{name:"Awesome",variant:"AWS-8Q",weight:80,move:3,heatSinks:6,torso:["ppc","ppc","laser"],armRight:["ppc"]},{name:"Blackjack",variant:"BJ1",weight:45,move:4,heatSinks:3,torso:["laser","laser"],armLeft:["ac_light","laser"],armRight:["ac_light","laser"],legs:["jump"]},{name:"Black Knight",variant:"BL-6-KNT",weight:75,move:4,heatSinks:5,torso:["laser_L","laser_L","laser","laser"],armLeft:["laser"],armRight:["ppc","laser"]},{name:"Battlemaster",variant:"BLR-1GHE",weight:85,move:4,heatSinks:6,torso:["laser","laser","laser","laser","srm6"],armLeft:["mg","mg"],armRight:["ppc"]},{name:"Banshee",variant:"BNC-3M",weight:95,move:4,heatSinks:5,torso:["laser"],armLeft:["ppc","laser"],armRight:["ppc","laser"]},{name:"Centurion",variant:"CN9-A",weight:50,move:4,torso:["laser","laser","lrm3"],armRight:["ac"]},{name:"Cicada",variant:"CDA-2A",weight:40,move:8,heatSinks:4,torso:["laser"],armLeft:["laser"],armRight:["laser"]},{name:"Charger",variant:"CGR-1A2",weight:80,move:4,heatSinks:5,torso:["laser","laser","laser"],armLeft:["ppc"],armRight:["laser_L"]},{name:"Clint",variant:"CLNT-2-3T",weight:40,move:6,heatSinks:3,torso:["laser"],armLeft:["ac_light"],armRight:["laser"],legs:["jump"]},{name:"Commando",variant:"COM-2D",weight:25,move:6,torso:["srm6"],armLeft:["laser"],armRight:["srm3"]},{name:"Cyclops",variant:"CP-10-Z",weight:90,move:4,torso:["lrm3","ac_heavy","srm3"],armLeft:["laser"],armRight:["laser"]},{name:"Catapult",variant:"CTPL-A1",weight:65,move:4,heatSinks:4,torso:["laser","laser","laser","laser"],armLeft:["lrm6"],armRight:["lrm6"],legs:["jump"]},{name:"Catapult",variant:"CPTL-K2",weight:65,move:4,heatSinks:4,torso:["mg","mg","laser","laser"],armLeft:["ppc"],armRight:["ppc"]},{name:"Crab",variant:"CRB-20",weight:50,move:5,heatSinks:4,torso:["laser","laser"],armLeft:["laser_L"],armRight:["laser_L"]},{name:"Crusader",variant:"CRD-3K",weight:65,move:4,torso:["srm6","srm6"],armLeft:["lrm6","laser"],armRight:["lrm6","laser"]},{name:"Hunchback",variant:"HBK-4G",weight:50,move:4,torso:["ac_heavy"],armLeft:["laser"],armRight:["laser"]},{name:"Jenner",variant:"JR7-F",weight:35,move:7,heatSinks:4,armLeft:["laser","laser"],armRight:["laser","laser"],legs:["jump"]},{name:"Marauder",variant:"MAD-1R",weight:75,heatSinks:6,move:4,torso:["ac_light"],armLeft:["ppc","laser"],armRight:["ppc","laser"]},{name:"Panther",variant:"PNT-9R",weight:35,heatSinks:3,move:4,torso:["srm3"],armRight:["ppc"],legs:["jump"]},{name:"Raven",variant:"RVN-3L",weight:35,heatSinks:3,move:6,torso:["srm6"],armRight:["laser","laser"]},{name:"Rifleman",variant:"RFL-3N",weight:60,heatSinks:3,move:4,torso:["laser","laser"],armLeft:["ac_light","laser_L"],armRight:["ac_light","laser_L"]},{name:"Rifleman",variant:"RFL-6D",weight:60,heatSinks:2,move:4,torso:["laser","laser"],armLeft:["ac_light","ac_light"],armRight:["ac_light","ac_light"]},{name:"Shadowhawk",variant:"SHD-2H",weight:55,heatSinks:3,move:5,torso:["srm3","lrm3","ac_light"],armLeft:["laser"],legs:["jump"]},{name:"TimberWolf",variant:"TBR-Prime",weight:75,heatSinks:6,move:4,torso:["lrm6","lrm6","mg","mg","laser"],armLeft:["laser_L","laser"],armRight:["laser_L","laser"]},{name:"UrbanMech",variant:"UM-R60L",weight:30,move:2,armRight:["ac_heavy"],armLeft:["laser"],legs:["jump"]},{name:"Uziel",variant:"UZL-2S",weight:50,heatSinks:4,move:5,torso:["srm6"],armLeft:["ppc"],armRight:["ppc"],legs:["jump"]},{name:"Warhammer",variant:"WHM-6K",weight:70,heatSinks:6,move:4,torso:["srm6","laser","laser","mg","mg"],armLeft:["ppc"],armRight:["ppc"]},{name:"Cataphract",variant:"CTF-3D",weight:70,heatSinks:5,move:4,torso:["ppc","laser","laser"],armLeft:["laser"],armRight:["ac","laser"],legs:["jump"]},{name:"Dragon",variant:"DRG-1N",weight:60,heatSinks:3,move:5,torso:["laser","lrm3"],armLeft:["laser"],armRight:["ac_light"]},{name:"Enforcer",variant:"ENF-4R",weight:50,heatSinks:3,move:4,torso:["laser"],armLeft:["laser_L"],armRight:["ac"],legs:["jump"]},{name:"Firestarter",variant:"FS9-H",weight:35,heatSinks:3,move:6,torso:["mg","mg"],armLeft:["laser","laser"],armRight:["laser","laser"],legs:["jump"]},{name:"Flea",variant:"FLE-15",weight:20,move:6,torso:["laser"],armLeft:["mg"],armRight:["mg"]},{name:"Grasshopper",variant:"GHR-5H",weight:70,heatSinks:6,move:4,torso:["laser_L","laser","laser"],armLeft:["laser"],armRight:["laser"],legs:["jump"]},{name:"Griffin",variant:"GRF-1N",weight:55,heatSinks:3,move:5,torso:["lrm3"],armRight:["ppc"],legs:["jump"]},{name:"Highlander",variant:"HGN-733",weight:90,heatSinks:4,move:3,torso:["lrm6","laser","laser"],armLeft:["srm6"],armRight:["ac"],legs:["jump"]},{name:"Highlander",variant:"HGN-733C",weight:90,heatSinks:4,move:3,torso:["lrm6","laser","laser"],armLeft:["srm6"],armRight:["ac_heavy"],legs:["jump"]},{name:"Highlander",variant:"HGN-733P",weight:90,heatSinks:6,move:3,torso:["lrm6","laser","laser"],armLeft:["srm6"],armRight:["ppc"],legs:["jump"]},{name:"JagerMech",variant:"JM6-S",weight:65,heatSinks:3,move:4,torso:["laser","laser"],armLeft:["ac_light","ac_light"],armRight:["ac_light","ac_light"]},{name:"Javelin",variant:"JVN-10N",weight:30,move:6,torso:["srm6","srm6"],legs:["jump"]},{name:"King Crab",variant:"KGC-000",weight:100,heatSinks:5,move:3,torso:["ac_heavy","ac_heavy","lrm6"],armLeft:["laser_L"],armRight:["laser_L"]},{name:"Kintaro",variant:"KTO-18",weight:55,move:5,torso:["srm6","srm6","lrm3"],armLeft:["srm6","laser"],armRight:["laser"]},{name:"Locust",variant:"LCT-1V",weight:20,move:8,torso:["laser"],armLeft:["mg"],armRight:["mg"]},{name:"Mauler",variant:"MAL-1R",weight:90,heatSinks:6,move:3,torso:["ac_light","ac_light","ac_light","ac_light","lrm6","lrm6"],armLeft:["laser_L"],armRight:["laser_L"]},{name:"Nightstar",variant:"NSR-9J",weight:95,heatSinks:6,move:3,torso:["ppc","laser"],armLeft:["ac_heavy","laser"],armRight:["ac_heavy","laser"]},{name:"Orion",variant:"ON1-K",weight:75,heatSinks:3,move:4,torso:["lrm6","srm6","ac"],armLeft:["laser"],armRight:["laser"]},{name:"Phoenix Hawk",variant:"PXH-1",weight:45,move:6,torso:["laser"],armLeft:["laser","mg"],armRight:["laser_L","mg"],legs:["jump"]},{name:"Quickdraw",variant:"QKD-4G",weight:60,heatSinks:4,move:5,torso:["lrm3","srm6","laser"],armLeft:["laser"],armRight:["laser"],legs:["jump"]},{name:"Spider",variant:"SDR-5V",weight:30,move:8,torso:["laser","laser"],legs:["jump"]},{name:"Stalker",variant:"STK-3F",weight:85,heatSinks:6,move:3,torso:["laser_L","laser_L","srm6","srm6","laser"],armLeft:["lrm3","laser"],armRight:["lrm3","laser"]},{name:"Thunderbolt",variant:"TDR-5S",weight:65,heatSinks:4,move:4,torso:["lrm6","srm3","laser","laser"],armLeft:["mg","mg"],armRight:["laser_L"]},{name:"Trebuchet",variant:"TBT-5N",weight:50,move:5,torso:["laser"],armLeft:["lrm6","laser"],armRight:["lrm6","laser"]},{name:"Victor",variant:"VTR-9B",weight:80,heatSinks:4,move:4,torso:["srm6"],armLeft:["laser","laser"],armRight:["ac_heavy"],legs:["jump"]},{name:"Vindicator",variant:"VND-1R",weight:45,heatSinks:5,move:4,torso:["lrm3","laser"],armLeft:["laser"],armRight:["ppc"],legs:["jump"]},{name:"Wolfhound",variant:"WLF-1",weight:35,move:6,torso:["laser","laser"],armLeft:["laser","laser"],armRight:["laser_L"]},{name:"Wolverine",variant:"WVR-6R",weight:55,heatSinks:3,move:5,torso:["srm6","laser"],armLeft:["laser"],armRight:["ac_light"],legs:["jump"]},{name:"Zeus",variant:"ZEU-6S",weight:80,heatSinks:4,move:4,torso:["ppc","laser_L","laser"],armLeft:["ac_light"],armRight:["lrm6"]}],nr={20:{armor:{head:1,torsoFront:2,torsoBack:1,arm:1,legs:1},systemSlots:{head:1,torso:3,arm:1,legs:3}},25:{armor:{head:1,torsoFront:2,torsoBack:1,arm:1,legs:1},systemSlots:{head:1,torso:3,arm:1,legs:3}},30:{armor:{head:1,torsoFront:3,torsoBack:1,arm:2,legs:2},systemSlots:{head:1,torso:4,arm:1,legs:3}},35:{armor:{head:1,torsoFront:3,torsoBack:1,arm:2,legs:2},systemSlots:{head:1,torso:4,arm:2,legs:3}},40:{armor:{head:1,torsoFront:4,torsoBack:1,arm:2,legs:3},systemSlots:{head:1,torso:4,arm:2,legs:3}},45:{armor:{head:1,torsoFront:4,torsoBack:1,arm:3,legs:3},systemSlots:{head:1,torso:5,arm:2,legs:3}},50:{armor:{head:1,torsoFront:5,torsoBack:1,arm:3,legs:4},systemSlots:{head:1,torso:5,arm:2,legs:3}},55:{armor:{head:1,torsoFront:6,torsoBack:1,arm:4,legs:4},systemSlots:{head:1,torso:5,arm:2,legs:3}},60:{armor:{head:2,torsoFront:6,torsoBack:2,arm:4,legs:5},systemSlots:{head:1,torso:6,arm:2,legs:3}},65:{armor:{head:2,torsoFront:7,torsoBack:2,arm:4,legs:5},systemSlots:{head:1,torso:6,arm:2,legs:3}},70:{armor:{head:2,torsoFront:8,torsoBack:2,arm:5,legs:6},systemSlots:{head:1,torso:6,arm:3,legs:3}},75:{armor:{head:2,torsoFront:8,torsoBack:2,arm:5,legs:6},systemSlots:{head:1,torso:7,arm:3,legs:3}},80:{armor:{head:2,torsoFront:9,torsoBack:2,arm:5,legs:7},systemSlots:{head:1,torso:7,arm:3,legs:3}},85:{armor:{head:2,torsoFront:9,torsoBack:2,arm:6,legs:7},systemSlots:{head:1,torso:7,arm:4,legs:3}},90:{armor:{head:2,torsoFront:10,torsoBack:2,arm:6,legs:8},systemSlots:{head:1,torso:8,arm:4,legs:3}},95:{armor:{head:2,torsoFront:10,torsoBack:2,arm:6,legs:8},systemSlots:{head:1,torso:8,arm:4,legs:3}},100:{armor:{head:2,torsoFront:11,torsoBack:2,arm:6,legs:8},systemSlots:{head:1,torso:8,arm:4,legs:3}}};function lr(e){return e<=35?"light":e<=55?"medium":e<=75?"heavy":"assault"}const Ne={laser:{name:"Laser",type:"energy",short:2,medium:1,damage:1,heat:1},laser_L:{name:"Laser(L)",type:"energy",short:2,medium:3,long:1,damage:1,heat:2},ppc:{name:"PPC",type:"energy",medium:1,long:2,damage:2,heat:2},mg:{name:"MG",type:"ballistic",short:1,damage:1,ammo:8},ac_light:{name:"light AC",type:"ballistic",medium:1,long:2,damage:1,ammo:8},ac:{name:"AC",type:"ballistic",short:1,medium:2,damage:2,ammo:6},ac_heavy:{name:"heavy AC",type:"ballistic",short:2,damage:4,ammo:4},srm3:{name:"SRM-3",type:"missile",short:"D3",damage:1,ammo:6},srm6:{name:"SRM-6",type:"missile",short:"D6",damage:1,ammo:6},lrm3:{name:"LRM-3",type:"missile",medium:1,long:"D3",damage:1,ammo:6},lrm6:{name:"LRM-6",type:"missile",medium:"D3",long:"D6",damage:1,ammo:6}};function He(){return`${Math.random().toString(36).slice(2,9)}`}function xt(e){const t=nr[e.weight],r=(e.legs??[]).some(a=>a==="jump");return{id:`${e.variant}-${He()}`,variant:e.variant,name:e.name,tonnage:e.weight,state:"nominal",armor:{head:{value:t.armor.head,spent:0},torso:{value:t.armor.torsoFront,spent:0},torsoBack:{value:t.armor.torsoBack,spent:0},armLeft:{value:t.armor.arm,spent:0},armRight:{value:t.armor.arm,spent:0},legs:{value:t.armor.legs,spent:0}},systems:{head:[{name:"cockpit",state:"online",type:"active"}],torso:[{name:"reactor",state:"online",type:"active"},{name:"heatSinks",state:"online",type:"active",value:e.heatSinks??2,spent:0},...Ae(t.systemSlots.torso-2,[...e.torso??[]])],armLeft:Ae(t.systemSlots.arm,e.armLeft),armRight:Ae(t.systemSlots.arm,e.armRight),legs:[{name:"move",state:"offline",type:"movement",value:e.move??1,heat:1},{name:"run",state:"offline",type:"movement",value:Math.round((e.move??1)*1.5),heat:2},{name:r?"jump":"-",state:"offline",type:r?"movement":"active",value:e.move??1,heat:3}]}}}function Ae(e,t){return t||(t=[]),Array(e).fill("").map((r,a)=>{if(!t[a])return{name:"-",state:"offline",type:"active"};const s=t[a],o=Ne[s];let i;return o.type!=="energy"&&(i=o.ammo),{name:s,state:"online",type:o.type,value:i,spent:i?0:void 0,heat:o.type==="energy"?o.heat??0:void 0}})}function Ee(e){const t={};return Object.keys(e.systems).forEach(r=>{t[r]=e.systems[r].map(a=>({state:a.state||void 0,spent:a.spent||void 0}))}),{variant:e.variant,state:e.state,systems:t}}function it(e){if(!e||typeof e.variant!="string"||typeof e.systems!="object"||"armor"in e||"tonnage"in e)return;const t=Oe.find(a=>a.variant===e.variant);if(!t)return;const r=xt(t);return e.state&&(r.state=e.state),Object.keys(r.systems).forEach(a=>{const s=e.systems[a];Array.isArray(s)&&r.systems[a].forEach((o,i)=>{const n=s[i];n&&(n.state&&(o.state=n.state),typeof n.spent=="number"&&o.spent!==void 0&&(o.spent=n.spent))})}),r}const nt=["nominal","overheated","critical","shutdown","destroyed"],dr=["move","run","jump"],kt=["energy","ballistic","missile"];function cr(e){e&&(e.state=(e.spent??0)<(e.value??0)?"online":"offline")}function ge(e){switch(e){case"nominal":return"ok";case"overheated":return"warning";default:return"critical"}}function St(e){return Object.values(e.systems).flat().filter(t=>t.state==="online").reduce((t,r)=>t+(r.heat??0),0)}function hr(e){Object.values(e.systems).flat().filter(t=>t.state==="online"&&kt.includes(t.type)).forEach(t=>{t.state="offline"})}function ue(e,t,r){const a=nt.indexOf(e),s=Math.sign(t-r),o=nt[Math.max(0,a+s)];return o==="shutdown"?"destroyed":o}async function mr(e,t,r,a){let s=ue(e,t,r.value-r.spent);return["critical","shutdown"].includes(s)&&(await a()?s="shutdown":(s="critical",r.spent<r.value?r.spent++:s="destroyed")),{state:s,heatSinks:r}}const pr=new Set(["cockpit","reactor"]);function gr(e,t){if(oe(e.systems[t]))return"destroyed";const r=t==="torso"?[e.armor.torso,e.armor.torsoBack]:[e.armor[t]];return r.some(a=>a.spent>=a.value)?"breached":r.some(a=>a.spent>0)?"damaged":"ok"}function oe(e){return e.every(t=>t.state==="destroyed")||e.some(t=>t.state==="destroyed"&&pr.has(t.name))}function fe(e){return e.state==="destroyed"||oe(e.systems.head)||oe(e.systems.torso)}function _t(e){return fe(e)?"destroyed":ge(e.state)}function ur(e){let t=e.filter(a=>a.state!=="destroyed");return t.some(a=>["run"].includes(a.name))&&(t=t.filter(a=>a.name!=="move")),t[Math.floor(Math.random()*t.length)]}function fr(e){const t=Object.values(e.systems).flat(),r=t.some(o=>o.state==="destroyed"),a=t.some(o=>(o.spent??0)>0),s=Object.values(e.armor).some(o=>o.spent>0);return r||a||s||e.state!=="nominal"}const vr="hekmek-roster",br=1;function yr(e){const t={format:vr,version:br,name:e.name,cards:e.cards};return`${JSON.stringify(t,null,2)}
`}function wr(e){return`${e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"roster"}.hekmek.json`}function $r(e){return typeof e=="object"&&e!==null&&typeof e.variant=="string"}function xr(e){if(typeof e!="object"||e===null)return;const t=e;if(!Array.isArray(t.cards))return;const r=t.cards.filter($r);if(r.length)return{id:He(),name:typeof t.name=="string"&&t.name.trim()?t.name.trim():"IMPORTED ROSTER",cards:r}}function kr(e){let t;try{t=JSON.parse(e)}catch{throw new Error("That file isn't valid JSON.")}const a=(Array.isArray(t)?t:[t]).map(xr).filter(s=>s!==void 0);if(!a.length)throw new Error("No roster found in that file.");return a}function lt(e,t){const r=new Set(t.map(a=>a.toLowerCase()));if(!r.has(e.toLowerCase()))return e;for(let a=2;;a+=1){const s=`${e} (${a})`;if(!r.has(s.toLowerCase()))return s}}function Le(e){const t={};Object.keys(e.armor).forEach(a=>{t[a]=e.armor[a].spent});const r={};return Object.keys(e.systems).forEach(a=>{r[a]=e.systems[a].map(s=>({state:s.state,spent:s.spent}))}),{state:e.state,armor:t,systems:r}}function Sr(e,t){e.state=t.state,Object.keys(e.armor).forEach(r=>{const a=t.armor[r];typeof a=="number"&&(e.armor[r].spent=a)}),Object.keys(e.systems).forEach(r=>{const a=t.systems[r];a&&e.systems[r].forEach((s,o)=>{const i=a[o];i&&(s.state=i.state,typeof i.spent=="number"&&(s.spent=i.spent))})})}function _r(e,t){if(e.state!==t.state)return!1;const r=Object.keys(e.armor);if(r.length!==Object.keys(t.armor).length||r.some(s=>e.armor[s]!==t.armor[s]))return!1;const a=Object.keys(e.systems);return a.length!==Object.keys(t.systems).length?!1:a.every(s=>{const o=e.systems[s],i=t.systems[s];return i&&o.length===i.length&&o.every((n,d)=>n.state===i[d].state&&n.spent===i[d].spent)})}const Cr="*,*:before,*:after{box-sizing:border-box;margin:0;padding:0;-webkit-user-select:none;user-select:none}:focus-visible{outline:2px solid var(--color-steel);outline-offset:1px;border-radius:var(--radius-sm)}@keyframes popAndShrink{0%{transform:scale(1.5)}to{transform:scale(1)}}.frame{--frame-accent: var(--color-ok);border:1px solid var(--color-border);border-radius:var(--radius-sm);padding:.45rem;box-shadow:inset 0 0 5px #00000080;transition:filter .15s ease}.frame:hover:not(.critical):not(.destroyed):not(.disabled){filter:drop-shadow(0 0 8px color-mix(in srgb,var(--frame-accent) 55%,transparent))}.frame.warning{--frame-accent: var(--color-warning);box-shadow:inset 0 0 5px var(--color-warning-glow)}.frame.critical{--frame-accent: var(--color-critical);box-shadow:inset 0 0 5px var(--color-critical-glow)}.frame.destroyed{--frame-accent: var(--color-destroyed);box-shadow:inset 0 0 5px var(--color-destroyed-glow)}.consumable-boxes{display:grid;grid-template-columns:repeat(10,auto);align-content:center;justify-content:start;gap:.15em;cursor:pointer}.consumable-boxes.readonly{cursor:default}@media print{.frame,.frame.warning,.frame.critical,.frame.destroyed{box-shadow:none}}",R=k(Cr),Ct=Mt`
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

  .btn:hover:not(:disabled) {
    border-color: var(--color-brand);
    transform: translateY(-1px);
    color: #fff;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.18),
      0 0 11px rgba(255, 107, 0, 0.32);
  }

  /* Nothing to act on. The control keeps its place in the row rather than
     disappearing, so the header does not reflow as history empties. */
  .btn:disabled {
    opacity: 0.45;
    cursor: default;
    border-color: var(--color-border);
    box-shadow: none;
  }

  .btn.primary {
    border-color: var(--color-brand);
    background:
      linear-gradient(180deg, rgba(255, 223, 183, 0.2), rgba(255, 223, 183, 0) 52%),
      linear-gradient(155deg, #6a3000, #321600);
  }
`,Rr=":host{display:block}.error{margin:1rem auto;width:min(980px,calc(100% - 2rem));border:1px solid #7f1d1d;border-radius:var(--radius-sm);background:#7f1d1d59;color:#fecaca;padding:.7rem}.cards{display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;padding:1rem}.card-slide{flex:none;scroll-snap-align:center}.card-rail{display:none}@media (max-width: 818px){.cards{box-sizing:border-box;padding:.6rem;gap:.6rem;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;height:var(--cards-fit-height, 100dvh);overflow-y:auto;overscroll-behavior-y:contain;scroll-snap-type:y mandatory}.cards.has-rail{padding-right:3.4rem}.card-slide{flex:0 0 auto;min-height:100%;display:flex;align-items:center;justify-content:center;scroll-snap-align:center;scroll-snap-stop:always;overflow:clip;overflow-clip-margin:18px}.card-slide mech-card{flex:none;transform:scale(var(--card-scale, 1));transform-origin:center}.card-rail{position:fixed;right:2px;top:50%;transform:translateY(-50%);z-index:5;display:flex;flex-direction:column;gap:.3rem;max-height:82dvh;padding:.3rem;overflow-y:auto;scrollbar-width:none;border:1px solid var(--color-border);border-radius:1.4rem;background:color-mix(in srgb,var(--color-bg-alt) 82%,transparent);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);box-shadow:var(--shadow-panel)}.card-rail::-webkit-scrollbar{display:none}.rail-dot{flex:none;width:calc(34px + .3rem);height:calc(34px + .3rem);padding:.15rem;display:grid;place-items:center;border:1px solid transparent;border-radius:50%;background:transparent;color:var(--color-muted);opacity:.45;cursor:pointer;transition:opacity .15s ease,color .15s ease,border-color .15s ease,transform .15s ease}.rail-dot mech-figure{width:32px;height:32px}.rail-dot.state-ok{--rail-accent: var(--color-ok);--rail-glow: var(--color-ok-glow)}.rail-dot.state-warning{--rail-accent: var(--color-warning);--rail-glow: var(--color-warning-glow)}.rail-dot.state-critical{--rail-accent: var(--color-critical);--rail-glow: var(--color-critical-glow)}.rail-dot.state-destroyed{--rail-accent: var(--color-wreck);--rail-glow: var(--color-wreck-glow)}.rail-dot.active{opacity:1;color:var(--rail-accent);border-color:var(--rail-accent);transform:scale(1.14);box-shadow:0 0 7px var(--rail-glow)}}.disclaimer{margin:0 auto;max-width:60rem;padding:1.2rem 1.5rem 1.6rem;border-top:1px solid var(--color-border);text-align:center;font:400 .66rem/1.55 var(--font-body);letter-spacing:.02em;color:var(--color-border-strong)}.empty{border:1px dashed var(--color-border-strong);border-radius:var(--radius-md);background:linear-gradient(170deg,#1c242cb8,#0e141ab8);padding:1.2rem;color:var(--color-muted);font-family:var(--font-mono);letter-spacing:.03em}@media print{app-header,aside-panel,rules-panel,.card-rail,.disclaimer,.error{display:none}.cards,.cards.has-rail{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;gap:0;padding:0;height:auto;overflow:visible;scroll-snap-type:none}.card-slide{display:block;min-height:0;overflow:visible;break-inside:avoid}.card-slide mech-card{transform:none}}",Ar=[{zone:"torso",section:"torso"},{zone:"head",section:"head"},{zone:"la",section:"armLeft"},{zone:"ra",section:"armRight"},{zone:"legs",section:"legs"}],Er="_default";function Lr(e){const t=e.toLowerCase().replace(/[^a-z0-9]/g,"");return t.charAt(0).toUpperCase()+t.slice(1)}function Rt(e,t){return`./Mechs/${e}/${t}.png`}function Pr(e){return new Promise(t=>{const r=new Image;r.onload=()=>t(!0),r.onerror=()=>t(!1),r.src=e})}const dt=new Map;function Mr(e){const t=Lr(e);let r=dt.get(t);return r||(r=Pr(Rt(t,"torso")).then(a=>a?t:Er),dt.set(t,r)),r}const Or=":host{display:block;aspect-ratio:1}.figure{position:relative;width:100%;height:100%}.zone{position:absolute;top:0;right:0;bottom:0;left:0;background-color:var(--zone-tint, var(--color-muted));transition:background-color .2s ease;mask-image:var(--zone-src);mask-size:contain;mask-repeat:no-repeat;mask-position:center;-webkit-mask-image:var(--zone-src);-webkit-mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center}.zone.ok{--zone-tint: var(--color-steel)}.zone.damaged{--zone-tint: var(--color-warning)}.zone.breached{--zone-tint: var(--color-destroyed)}.zone.destroyed{--zone-tint: var(--color-border-strong)}";var Dr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,Be=(e,t,r,a)=>{for(var s=a>1?void 0:a?jr(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&Dr(t,r,s),s};let ie=class extends y{constructor(){super(...arguments),this.folder="",this.resolvedFor=""}willUpdate(){var t;const e=(t=this.card)==null?void 0:t.name;!e||e===this.resolvedFor||(this.resolvedFor=e,this.folder="",Mr(e).then(r=>{this.resolvedFor===e&&(this.folder=r)}))}render(){return!this.card||!this.folder?l``:l`<div class="figure" aria-hidden="true">
      ${Ar.map(({zone:e,section:t})=>l`<span
          class="zone ${gr(this.card,t)}"
          style=${`--zone-src:url("${Rt(this.folder,e)}")`}
        ></span>`)}
    </div>`}};ie.styles=[R,k(Or)];Be([p({attribute:!1})],ie.prototype,"card",2);Be([b()],ie.prototype,"folder",2);ie=Be([C("mech-figure")],ie);const Ur=":host{display:block}header{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem 1.2rem;border-bottom:2px solid var(--color-brand);background:linear-gradient(180deg,#242d35,#12181e);box-shadow:var(--shadow-panel)}.brand{display:flex;align-items:center;gap:.8rem}.stripe{width:10px;height:2rem;background:repeating-linear-gradient(-45deg,var(--color-warning),var(--color-warning) 8px,var(--color-bg) 8px,var(--color-bg) 16px);border:1px solid var(--color-warning);box-shadow:0 0 8px var(--color-warning-glow)}h1{margin:0;font:900 1.55rem/1 var(--font-heading);letter-spacing:.08em;text-shadow:0 0 10px rgba(255,107,0,.55)}.subtitle{display:block;font:400 .67rem/1.3 var(--font-mono);color:var(--color-warning);letter-spacing:.11em}.actions{display:flex;align-items:center;gap:.6rem;flex:none}.label-short{display:none}@media (max-width: 700px){header{gap:.6rem;padding:.6rem .7rem}.subtitle{display:none}.brand{min-width:0;gap:.5rem}h1{font-size:1.15rem;white-space:nowrap}.stripe{height:1.5rem}.actions{gap:.4rem}.btn{padding:.45rem .5rem;font-size:.66rem;letter-spacing:.02em}.label-long{display:none}.label-short{display:inline}}";var Tr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,At=(e,t,r,a)=>{for(var s=a>1?void 0:a?Nr(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&Tr(t,r,s),s};let ve=class extends y{constructor(){super(...arguments),this.canUndo=!1}emit(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}render(){return l`
      <header>
        <div class="brand">
          <span class="stripe" aria-hidden="true"></span>
          <div>
            <h1>HEK-MEK</h1>
            <span class="subtitle">mech card roster</span>
          </div>
        </div>
        <div class="actions">
          <button
            type="button"
            class="btn"
            ?disabled=${!this.canUndo}
            title=${this.canUndo?"Undo the last hit (Ctrl+Z)":"Nothing to undo"}
            @click=${()=>this.emit("undo")}
          >
            Undo
          </button>
          <button type="button" class="btn" @click=${()=>this.emit("open-rules")}>
            Rules
          </button>
          <button
            type="button"
            class="btn primary"
            aria-label="Manage cards"
            @click=${()=>this.emit("open-manage")}
          >
            <span class="label-long">Manage cards</span>
            <span class="label-short">Cards</span>
          </button>
        </div>
      </header>
    `}};ve.styles=[R,Ct,k(Ur)];At([p({type:Boolean})],ve.prototype,"canUndo",2);ve=At([C("app-header")],ve);const Hr=":host{position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none;z-index:20}.backdrop{position:absolute;top:0;right:0;bottom:0;left:0;background:#000000ad;opacity:0;transition:opacity .2s ease}aside{position:absolute;top:0;right:0;width:min(92vw,370px);height:100%;background:linear-gradient(180deg,#1b232b,#0e1318);border-left:2px solid var(--color-brand);box-shadow:-12px 0 30px #00000073;transform:translate(104%);transition:transform .24s ease;display:flex;flex-direction:column}.active{pointer-events:auto}.active .backdrop{opacity:1}.active aside{transform:translate(0)}.head{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid var(--color-border);background:linear-gradient(180deg,#ff6b0014,#ff6b0000)}.head h2{margin:0;font:700 .95rem/1 var(--font-heading);text-transform:uppercase;letter-spacing:.08em;color:var(--color-warning)}.body{padding:1rem;overflow:auto;display:grid;gap:1rem}label,.label{font:700 .66rem/1 var(--font-heading);color:var(--color-muted);text-transform:uppercase;letter-spacing:.06em}select,input{width:100%;margin-top:.35rem;border:1px solid var(--color-border-strong);background:var(--color-bg-alt);color:var(--color-text);font-family:var(--font-body);padding:.58rem;border-radius:var(--radius-sm)}.add-card{display:grid;gap:.7rem}.select-row{display:grid;grid-template-columns:1.7fr 1fr;gap:.6rem;align-items:start}.select-row select{min-width:0}select:disabled{opacity:.5;cursor:not-allowed}.row{display:grid;grid-template-columns:1fr auto auto;gap:.45rem}.label-row{display:flex;align-items:center;justify-content:space-between;gap:.5rem}#import-file{display:none}.manage-list,.saved-list{display:grid;gap:.45rem}.item{border:1px solid var(--color-border-strong);background:linear-gradient(160deg,#212932c2,#141a21c2);border-radius:var(--radius-sm);padding:.58rem;display:grid;gap:.45rem}.item.draggable{grid-template-columns:auto minmax(0,1fr);align-items:center;cursor:grab}.item.draggable:active{cursor:grabbing}.item.dragging{opacity:.4}.item.drag-over{border-color:var(--color-brand);box-shadow:inset 0 3px 0 var(--color-brand)}.drag-grip{color:var(--color-muted);font-size:.95rem;line-height:1;letter-spacing:-.12em}.item-body{display:grid;gap:.45rem;min-width:0}.item-head{display:flex;justify-content:space-between;gap:.5rem;align-items:baseline}.name{font:700 .82rem/1.2 var(--font-heading)}.name-button{min-width:0;padding:0;border:0;border-bottom:1px dashed transparent;background:none;color:inherit;text-align:left;cursor:text}.name-button:hover,.name-button:focus-visible{border-bottom-color:var(--color-border-strong)}.name-edit{width:auto;min-width:0;flex:1;margin:0;padding:.05rem .25rem;border:1px solid var(--color-brand);border-radius:var(--radius-sm);background:var(--color-bg);color:var(--color-text);font:700 .82rem/1.2 var(--font-heading)}.name-edit:focus{outline:none;box-shadow:0 0 6px var(--color-brand)}.meta{font:400 .68rem/1.2 var(--font-mono);color:var(--color-muted)}.actions{display:flex;flex-wrap:wrap;gap:.38rem}.btn.small{font-size:.6rem;padding:.33rem .45rem}.btn.danger{border-color:var(--color-brand)}.btn.danger:hover{border-color:var(--color-critical)}";var Br=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,S=(e,t,r,a)=>{for(var s=a>1?void 0:a?zr(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&Br(t,r,s),s};let w=class extends y{constructor(){super(...arguments),this.open=!1,this.loadouts=[],this.cards=[],this.savedRosters=[],this.selectedMech="",this.selectedVariant="",this.saveName="",this.drag=null,this.editingRoster=null,this.editName=""}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}onDragStart(e,t,r){this.drag={list:t,from:r,over:r},e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",String(r)))}onDragOver(e,t,r){var a;((a=this.drag)==null?void 0:a.list)===t&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this.drag.over!==r&&(this.drag={...this.drag,over:r}))}onDrop(e,t,r){var s;if(((s=this.drag)==null?void 0:s.list)!==t)return;e.preventDefault();const{from:a}=this.drag;this.drag=null,a!==r&&this.emit(t==="cards"?"reorder-cards":"reorder-rosters",{from:a,to:r})}renderItem(e,t,r,a=!0){var o;const s=((o=this.drag)==null?void 0:o.list)===e;return l`<div
      class="item draggable ${s&&this.drag.from===t?"dragging":""} ${s&&this.drag.over===t&&this.drag.from!==t?"drag-over":""}"
      draggable=${a?"true":"false"}
      @dragstart=${i=>this.onDragStart(i,e,t)}
      @dragover=${i=>this.onDragOver(i,e,t)}
      @drop=${i=>this.onDrop(i,e,t)}
      @dragend=${()=>this.drag=null}
    >
      <span class="drag-grip" aria-hidden="true">⠿</span>
      <div class="item-body">${r}</div>
    </div>`}close(){this.emit("close-manage")}get mechOptions(){const e=new Map;for(const t of this.loadouts)e.has(t.name)||e.set(t.name,t.weight);return[...e.entries()].map(([t,r])=>({name:t,weight:r})).sort((t,r)=>t.name.localeCompare(r.name))}get variantOptions(){return this.loadouts.filter(e=>e.name===this.selectedMech)}onMechChange(e){var t;this.selectedMech=e.currentTarget.value,this.selectedVariant=((t=this.variantOptions[0])==null?void 0:t.variant)??""}onVariantChange(e){this.selectedVariant=e.currentTarget.value}addCard(){this.selectedVariant&&(this.emit("add-card",{variant:this.selectedVariant}),this.selectedMech="",this.selectedVariant="")}saveRoster(){this.emit("save-roster",{name:this.saveName.trim()}),this.saveName=""}async startRename(e){var t,r;this.editingRoster=e.id,this.editName=e.name,await this.updateComplete,(t=this.nameInput)==null||t.focus(),(r=this.nameInput)==null||r.select()}commitRename(){var a;const e=this.editingRoster,t=this.editName.trim();if(this.editingRoster=null,!e||!t)return;const r=(a=this.savedRosters.find(s=>s.id===e))==null?void 0:a.name;t!==r&&this.emit("rename-roster",{id:e,name:t})}onRenameKey(e){e.key==="Enter"?(e.preventDefault(),e.currentTarget.blur()):e.key==="Escape"&&(e.preventDefault(),this.editingRoster=null)}async onImportFile(e){var a;const t=e.currentTarget,r=(a=t.files)==null?void 0:a[0];t.value="",r&&this.emit("import-rosters",{text:await r.text(),fileName:r.name})}render(){return l`
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
                    ${this.mechOptions.map(e=>l`<option value=${e.name}>
                          ${e.name} — ${e.weight} t
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
                    ${this.selectedMech?this.variantOptions.map(e=>l`<option value=${e.variant}>
                                ${e.variant}
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
                ${this.cards.length?this.cards.map((e,t)=>this.renderItem("cards",t,l`
                            <div class="item-head">
                              <span class="name">${e.name}</span>
                              <span class="meta">${e.id}</span>
                            </div>
                            <div class="actions">
                              ${fr(e)?l`<button
                                      class="btn small"
                                      type="button"
                                      @click=${()=>this.emit("repair-card",{id:e.id})}
                                    >
                                      Repair
                                    </button>`:""}
                              <button
                                class="btn small danger"
                                type="button"
                                @click=${()=>this.emit("remove-card",{id:e.id})}
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
                  @input=${e=>{const t=e.currentTarget;this.saveName=t.value}}
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
                ${this.savedRosters.length?this.savedRosters.map((e,t)=>this.renderItem("rosters",t,l`
                            <div class="item-head">
                              ${this.editingRoster===e.id?l`<input
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
                                      @click=${()=>this.startRename(e)}
                                    >
                                      ${e.name}
                                    </button>`}
                              <span class="meta">${e.cards.length} cards</span>
                            </div>
                            <div class="actions">
                              <button
                                class="btn small"
                                @click=${()=>this.emit("load-roster",{id:e.id})}
                              >
                                Load
                              </button>
                              <button
                                class="btn small"
                                @click=${()=>this.emit("save-roster-as",{id:e.id})}
                              >
                                Save
                              </button>
                              <button
                                class="btn small"
                                @click=${()=>this.emit("export-roster",{id:e.id})}
                              >
                                Export
                              </button>
                              <button
                                class="btn small danger"
                                @click=${()=>this.emit("delete-roster",{id:e.id})}
                              >
                                Delete
                              </button>
                            </div>
                          `,this.editingRoster!==e.id)):l`<div class="item">
                        <span class="meta">No saved rosters</span>
                      </div>`}
              </div>
            </div>
          </div>
        </aside>
      </div>
    `}};w.styles=[R,Ct,k(Hr)];S([p({type:Boolean})],w.prototype,"open",2);S([p({attribute:!1})],w.prototype,"loadouts",2);S([p({attribute:!1})],w.prototype,"cards",2);S([p({attribute:!1})],w.prototype,"savedRosters",2);S([b()],w.prototype,"selectedMech",2);S([b()],w.prototype,"selectedVariant",2);S([b()],w.prototype,"saveName",2);S([b()],w.prototype,"drag",2);S([b()],w.prototype,"editingRoster",2);S([b()],w.prototype,"editName",2);S([T("#import-file")],w.prototype,"importInput",2);S([T(".name-edit")],w.prototype,"nameInput",2);w=S([C("aside-panel")],w);function Fr(e){return kt.includes(e.type)}function Et(e){const r=Object.values(e.systems).flat().filter(Fr).reduce((a,s)=>{const o=s.name;return a[o]||(a[o]={...Object.assign({},Ne[o]),count:0,entries:[],activeCount:0}),a[o].entries.push(s),a[o].count=a[o].entries.length,a[o].activeCount=a[o].entries.filter(i=>i.state==="online").length,a},{});return Object.values(r).sort((a,s)=>+!!s.heat-+!!a.heat)}function we(e){return e.value===e.spent}function ct(e){return(e.value??0)-(e.spent??0)}function qr(e){const t=s=>typeof e.ammo!="number"||!we(s),[r]=e.entries.filter(s=>s.state==="offline"&&t(s)).sort((s,o)=>ct(o)-ct(s));if(r)return r.state="online",[r];const a=e.entries.filter(s=>s.state==="online");return a.forEach(s=>s.state="offline"),a}function Ir(e){const t=s=>typeof e.ammo!="number"||!we(s),r=e.entries.some(s=>s.state==="online"),a=r?e.entries.filter(s=>s.state==="online"):e.entries.filter(s=>s.state==="offline"&&t(s));return a.forEach(s=>s.state=r?"offline":"online"),a}function Wr(e){const t=e.some(a=>a.entries.some(s=>s.state==="online")),r=[];for(const a of e){const s=o=>typeof a.ammo!="number"||!we(o);for(const o of a.entries){if(t){if(o.state!=="online")continue;o.state="offline"}else{if(o.state!=="offline"||!s(o))continue;o.state="online"}r.push(o)}}return r}function Vr(e){for(const t of e)if(typeof t.ammo=="number")for(const r of t.entries)r.state!=="online"||we(r)||(r.spent+=1,r.spent>=r.value&&(r.state="offline"))}function Pe(e,t=0){return typeof e=="number"?`${e*t}`:typeof e=="string"?t.toString()+e:"-"}const Gr=':host{display:block;width:100mm;aspect-ratio:1 / 1.41421356237}article{--card-accent: var(--color-steel);--card-glow: var(--color-steel-glow);--card-hover-border: var(--color-ok);--card-hover-glow: var(--color-ok-glow);--system-online-color: var(--color-ok);--card-bg-image: none;border:3px solid var(--color-border);border-radius:var(--radius-md);background:linear-gradient(180deg,#ffffff12,#fff0 26%),linear-gradient(145deg,var(--color-panel-strong) 0%,var(--color-bg-alt) 100%);display:grid;grid-template-rows:1fr auto auto;gap:.5em;padding:.75em;height:100%;position:relative}article:before,article:after{content:"";position:absolute;width:6px;height:6px;background:radial-gradient(circle at 30% 30%,#a0acb8,#2a3138);border-radius:50%;box-shadow:0 0 2px #000}article:before{top:4px;left:4px}article:after{top:4px;right:4px}article.state-warning{--card-hover-border: var(--color-warning);--card-hover-glow: var(--color-warning-glow);--system-online-color: var(--color-warning)}article.state-critical{--card-hover-border: var(--color-critical);--card-hover-glow: var(--color-critical-glow);--system-online-color: var(--color-critical)}article.state-destroyed{--card-hover-border: var(--color-wreck);--card-hover-glow: var(--color-wreck-glow);--system-online-color: var(--color-wreck)}@media (hover: hover){article:hover{border-color:var(--card-hover-border);box-shadow:0 15px 30px #000000e6,0 0 16px var(--card-hover-glow)}article[data-disabled=true]:hover{border-color:var(--card-hover-border)}}article[data-disabled=true]{filter:brightness(.72);opacity:.82;border-color:#969696bf;cursor:pointer}.header{display:grid;grid-template-columns:2fr 1fr;align-items:center;gap:.5em;background:linear-gradient(90deg,var(--color-surface) 0%,var(--color-panel) 100%);border:1px solid var(--card-accent);border-radius:var(--radius-sm);box-sizing:border-box;min-height:3.2em;padding:.35em .6em;box-shadow:inset 0 0 8px #000c;overflow:hidden}.header-id{display:flex;align-items:center;gap:.55em;min-width:0}.header-svg{flex:none;display:flex;align-items:center;justify-content:center;width:2.4em;height:2.4em;color:var(--card-accent);border:1px solid var(--color-border-strong);border-radius:var(--radius-sm);background:#00000059;box-shadow:inset 0 0 6px #000000a6}.header-svg mech-figure{width:88%;height:88%}.header-mech{min-width:0;display:flex;flex-direction:column;gap:.12em;overflow:hidden}.name{margin:0;font:900 1.05rem/1 var(--font-heading);letter-spacing:.02em;color:var(--color-text);text-shadow:0 0 6px var(--card-accent);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.meta-row{display:flex;align-items:center;gap:.42em;min-width:0}.meta{font:400 .62rem/1 var(--font-mono);letter-spacing:.06em;color:var(--color-muted);white-space:nowrap}.meta.weight-class{text-transform:uppercase;color:var(--color-steel);letter-spacing:.1em}.meta-sep{color:var(--color-border-strong);font-size:.6rem;line-height:1}.header-status-cluster{justify-self:end;flex:none;display:flex;flex-direction:column;align-items:center;gap:.3em;width:100%}.header-status{flex:none;padding:.32em .7em;border:1px solid currentColor;border-radius:999px;background:#00000052;font:700 .6rem/1 var(--font-mono);letter-spacing:.16em}.header-status.mech-state{gap:.45em}.status-gauge{width:2.6rem;height:auto;flex:none;overflow:visible}.gauge-face{fill:none;stroke:var(--color-border-strong);stroke-width:2;stroke-linecap:round}.gauge-tick{stroke:var(--color-border-strong);stroke-width:1;stroke-linecap:round}.gauge-needle{stroke:var(--needle-color, var(--color-muted));stroke-width:2.6;stroke-linecap:round;filter:drop-shadow(0 0 2px var(--needle-color));transition:transform .45s cubic-bezier(.34,1.56,.64,1)}.gauge-hub{fill:var(--needle-color, var(--color-muted))}.layout{display:grid;grid-template-rows:auto 1fr;gap:.4em}.body-block{position:relative;display:grid;gap:.4em;align-content:start}.card-art{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;background-image:var(--card-bg-image);background-repeat:no-repeat;background-position:center;background-size:contain;mix-blend-mode:screen;opacity:.42;filter:blur(.5px);pointer-events:none}.body-block>.row{position:relative;z-index:1}.row{display:grid;gap:.45em}.row-head{justify-content:center;align-items:start}.row-core,.row-legs{grid-template-columns:minmax(0,1fr) minmax(0,2fr) minmax(0,1fr);align-items:start}.row-legs body-section{grid-column:2}.row-legs heat-section{grid-column:3}.row-full{grid-template-columns:minmax(0,1fr)}.footer{border-top:1px solid rgba(255,255,255,.12);padding-top:.35em;display:flex;justify-content:center;align-items:center;font-family:var(--font-mono);font-size:.62em;letter-spacing:.28em;color:var(--color-muted)}.end-activation{--bar-accent: var(--color-ok);flex:1;display:flex;align-items:center;justify-content:space-between;gap:.6em;border:1px solid var(--bar-accent);border-radius:var(--radius-sm);background:color-mix(in srgb,var(--bar-accent) 12%,transparent);padding:.3em .7em;color:var(--color-text);font:700 .95em/1 var(--font-heading);letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:filter .15s ease,border-color .15s ease}.end-activation:hover:not(:disabled){filter:brightness(1.25)}.end-activation:disabled{--bar-accent: var(--color-border-strong);cursor:default;opacity:.45}.end-activation.warning{--bar-accent: var(--color-warning)}.end-activation.critical{--bar-accent: var(--color-critical)}.end-activation.destroyed{--bar-accent: var(--color-wreck)}.end-activation .predicted{font-family:var(--font-mono);font-weight:700;letter-spacing:.05em;color:var(--bar-accent)}.wordmark{display:none}.mech-state{display:inline-flex;align-items:center;gap:.5em;font-weight:700;letter-spacing:.12em;color:var(--color-ok)}.mech-state:before{content:"";width:.5em;height:.5em;border-radius:50%;background:currentColor;box-shadow:0 0 4px currentColor}.mech-state.warning{color:var(--color-warning)}.mech-state.critical{color:var(--color-critical)}.mech-state.destroyed{color:var(--color-wreck)}@media print{.header-status-cluster,.end-activation{display:none}.wordmark{display:block}.header-svg{background:none;box-shadow:none}article:before,article:after,.header,.name{box-shadow:none;text-shadow:none}.card-art{mix-blend-mode:multiply;filter:invert(1);opacity:.3}}',Kr={1:[[10,10]],2:[[6,6],[14,14]],3:[[6,6],[10,10],[14,14]],4:[[6,6],[6,14],[14,6],[14,14]],5:[[6,6],[6,14],[10,10],[14,6],[14,14]],6:[[6,6],[6,10],[6,14],[14,6],[14,10],[14,14]]};function _(e){return l`<svg class="dice-svg" viewBox="0 0 20 20" aria-hidden="true">
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
    ${Kr[e].map(([t,r])=>A`<circle cx=${t} cy=${r} r="2" fill="currentColor" />`)}
  </svg>`}const Jr={head:[6,5],torso:[4,5],armLeft:[2],armRight:[3],legs:[1]};function Zr(e){const t=Jr[e];if(t.length===1)return _(t[0]);const r=e==="head",a=l`<span
    class="die-connector ${r?"die-arrow":"die-slash"}"
    aria-hidden="true"
    >${r?"→":"/"}</span
  >`;return l`<div class="die-group ${r?"die-group-head":""}">
    ${_(t[0])}${a}${_(t[1])}${r?l`<span class="die-connector die-plus" aria-hidden="true">+</span>`:""}
  </div>`}const Yr=":host{display:block}.section-head{display:flex;justify-content:space-between;align-items:center;gap:.4rem;margin-bottom:.28rem;color:var(--color-text)}.section-head.stacked{flex-direction:column;align-items:flex-start;gap:.24rem}.section-head.stacked .meta-block{align-self:flex-end}.section-title{display:flex;align-items:center;gap:.35rem;min-width:0}.section-dice{display:inline-flex;align-items:center;flex:none}.head-systems{display:flex;align-items:center;gap:.4rem}.head-systems system-list{flex:1;min-width:0}.section-label{font-family:var(--font-heading);letter-spacing:.05em;font-size:.7rem;font-weight:700;white-space:nowrap;text-shadow:0 1px 3px rgba(0,0,0,.85)}.meta{display:flex;align-items:center;gap:.2rem}.meta-block{display:inline-flex;align-items:flex-start;gap:.25rem}.frame{cursor:pointer;border-color:var(--color-border-strong);box-shadow:0 0 0 1px #0000008c,inset 0 0 0 1px #00000073,inset 0 0 5px #00000080}.frame.destroyed{opacity:.5}.frame.destroyed .section-label{color:var(--color-muted);font-weight:500;text-shadow:none;opacity:.7}.armor-separator{color:var(--color-muted);font-family:var(--font-mono);font-size:.72rem;line-height:1;padding:0 .03rem}.dice-svg{width:16px;height:16px;color:var(--color-warning);vertical-align:middle}.dice-svg rect{fill:var(--color-panel-strong)}.die-group{display:inline-flex;align-items:center;gap:.12rem}.die-group-head{gap:.16rem}.die-connector{color:var(--color-warning);font-family:var(--font-heading);font-size:.62rem;line-height:1;text-shadow:0 0 4px rgba(0,0,0,.55)}@media print{.section-label,.meta{text-shadow:none}.frame{box-shadow:none}}",Qr=":host{display:block}.defs{position:absolute;width:0;height:0}.shields{display:flex;flex-wrap:nowrap;gap:.1rem;width:max-content;cursor:pointer}.shields.disabled{cursor:default}.shield{width:.58rem;height:.66rem;flex:none;overflow:visible;filter:drop-shadow(0 0 3px rgba(0,240,255,.45))}.shield.spent{animation:popAndShrink .25s ease-out;filter:none;opacity:.45}.shield-shape{stroke:#a0eef8e6;stroke-width:1.1;stroke-linejoin:round}.shield.spent .shield-shape{stroke:var(--color-border-strong)}.shield-cross{stroke:#0a0c0ee6;stroke-width:2.2;stroke-linecap:round}@media (max-width: 818px) and (hover: none){.shields{padding-block:calc(9px / var(--card-scale, 1));margin-block:calc(-9px / var(--card-scale, 1))}}@media print{.shield{filter:none}.shield-shape{fill:#fff;stroke:#000}.shield-cross{stroke:#000}}";var Xr=Object.defineProperty,es=Object.getOwnPropertyDescriptor,ze=(e,t,r,a)=>{for(var s=a>1?void 0:a?es(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&Xr(t,r,s),s};const ts="M2,2 H20 V13 Q20,20 11,25 Q2,20 2,13 Z";let ne=class extends y{constructor(){super(...arguments),this.armor={value:0,spent:0},this.disabled=!1,this.onKeyDown=e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.handleClick(e))}}render(){return l`${this.iconGradients}
      <div
        class="shields ${this.disabled?"disabled":""}"
        role="button"
        title=${this.label}
        aria-label=${this.label}
        @click=${this.handleClick}
        @keydown=${this.onKeyDown}
        tabindex=${this.disabled?-1:0}
        aria-disabled=${this.disabled?"true":"false"}
      >
        ${Array.from({length:this.armor.value},(e,t)=>{const r=t<this.armor.spent;return l`<svg
          class="shield ${r?"spent":""}"
          viewBox="0 0 22 25"
          aria-hidden="true"
        >
          <path
            class="shield-shape"
            d=${ts}
            fill=${r?"url(#shield-fill-spent)":"url(#shield-fill)"}
            vector-effect="non-scaling-stroke"
          />
          ${r?A`<path class="shield-cross" d="M7,9 L15,17 M15,9 L7,17" vector-effect="non-scaling-stroke" />`:""}
        </svg>`})}
      </div>`}get label(){const e=this.armor.value-this.armor.spent;return this.disabled?`Armour ${e}/${this.armor.value}`:e>0?`Spend 1 armour (${e} of ${this.armor.value} left)`:"Armour gone — take an internal hit"}get iconGradients(){return l`<svg class="defs" width="0" height="0" aria-hidden="true">
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
    </svg>`}handleClick(e){if(this.disabled)return;e.stopPropagation();const t=this.armor.spent>=this.armor.value;t||(this.armor.spent+=1),this.dispatchEvent(new CustomEvent("armor-changed",{detail:{breached:t},bubbles:!0,composed:!0})),this.requestUpdate()}};ne.styles=[R,k(Qr)];ze([p()],ne.prototype,"armor",2);ze([p({type:Boolean})],ne.prototype,"disabled",2);ne=ze([C("armor-points")],ne);const rs=":host{display:contents}dialog{margin:auto;padding:0;border:none;background:transparent;color:var(--color-text);max-width:min(90vw,22rem);overflow:visible}dialog::backdrop{background:#0406089e;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.panel{border:1px solid var(--color-border-strong);border-top:3px solid var(--color-steel);border-radius:var(--radius-md);background:linear-gradient(160deg,var(--color-panel-strong),var(--color-bg-alt));box-shadow:var(--shadow-panel);padding:1.05rem 1.15rem .95rem}.panel.warning{border-top-color:var(--color-warning)}.panel.critical{border-top-color:var(--color-critical)}h2{margin:0 0 .5rem;font:700 .82rem/1.2 var(--font-heading);letter-spacing:.05em;text-transform:uppercase;color:var(--color-text)}p{margin:0 0 1rem;font:400 .78rem/1.5 var(--font-body);color:var(--color-muted);white-space:pre-line}.actions{display:flex;justify-content:flex-end;gap:.5rem}.btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid var(--color-border-strong);border-radius:var(--radius-sm);background:#0000004d;color:var(--color-text);font:700 .66rem/1 var(--font-mono);text-transform:uppercase;letter-spacing:.05em;padding:.5rem .9rem;cursor:pointer;transition:filter .15s ease,border-color .15s ease,background-color .15s ease}.btn:hover{filter:brightness(1.3)}.btn.confirm{border-color:var(--color-steel);color:#fff}.btn.confirm.warning{border-color:var(--color-warning);background:color-mix(in srgb,var(--color-warning) 18%,transparent)}.btn.confirm.critical{border-color:var(--color-critical);background:color-mix(in srgb,var(--color-critical) 20%,transparent)}@media print{:host{display:none}}";var ss=Object.defineProperty,as=Object.getOwnPropertyDescriptor,N=(e,t,r,a)=>{for(var s=a>1?void 0:a?as(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&ss(t,r,s),s};let E=class extends y{constructor(){super(...arguments),this.open=!1,this.heading="",this.message="",this.confirmLabel="Confirm",this.cancelLabel="Cancel",this.tone="default"}updated(e){!e.has("open")||!this.dialog||(this.open&&!this.dialog.open&&this.dialog.showModal(),!this.open&&this.dialog.open&&this.dialog.close())}finish(e){this.dispatchEvent(new CustomEvent(e?"modal-confirm":"modal-cancel",{bubbles:!0,composed:!0}))}render(){return l`<dialog
      @cancel=${e=>{e.preventDefault(),this.finish(!1)}}
      @click=${e=>{e.stopPropagation(),e.target===this.dialog&&this.finish(!1)}}
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
    </dialog>`}};E.styles=[R,k(rs)];N([p({type:Boolean})],E.prototype,"open",2);N([p()],E.prototype,"heading",2);N([p()],E.prototype,"message",2);N([p()],E.prototype,"confirmLabel",2);N([p()],E.prototype,"cancelLabel",2);N([p()],E.prototype,"tone",2);N([T("dialog")],E.prototype,"dialog",2);E=N([C("confirm-modal")],E);const os=':host{display:block}ul{list-style:none;margin:0;padding:0;display:grid;gap:.14rem;grid-template-columns:repeat(var(--columns),minmax(0,1fr))}li{font:500 .66rem/1.2 var(--font-mono);cursor:pointer;display:flex;align-items:baseline;gap:.4rem;white-space:nowrap;overflow:hidden;text-transform:uppercase;letter-spacing:.05em;background-color:var(--color-panel-strong);transition:color .12s ease,border-color .12s ease,opacity .12s ease}.sys-name{min-width:0;overflow:hidden;text-overflow:ellipsis}li.movement{display:grid;grid-template-rows:auto auto;align-content:center;justify-items:center;gap:.1rem;text-align:center}li.movement.frame{padding-left:.15rem;padding-right:.15rem}li.movement>div{display:flex;align-items:center;gap:.16rem;font-size:.82em;letter-spacing:0}.sys-speed{display:inline-flex;align-items:center;gap:.08rem}.sys-heat{opacity:.85}li.frame{padding:.13rem .26rem .13rem .3rem;border-left:3px solid var(--frame-accent)}li.online{color:var(--system-online-color, var(--color-ok));--frame-accent: var(--system-online-color, var(--color-ok))}li.offline{color:var(--color-muted);--frame-accent: var(--color-border-strong)}li.empty{color:var(--color-muted);--frame-accent: var(--color-border);cursor:default;opacity:.7}li.fixed{cursor:default}li.destroyed{text-decoration:line-through;text-decoration-thickness:2px;text-decoration-color:var(--color-destroyed);color:var(--color-destroyed);--frame-accent: var(--color-destroyed);opacity:.7;cursor:default;background-image:repeating-linear-gradient(-45deg,color-mix(in srgb,var(--color-destroyed) 16%,transparent),color-mix(in srgb,var(--color-destroyed) 16%,transparent) 2px,transparent 2px,transparent 6px);animation:popAndShrink .25s ease-out}:host([columns="2"]) li{font-size:.6rem;letter-spacing:.02em}@media print{.sys-heat{filter:grayscale(1)}}.sys-speed.reduced{color:var(--color-warning)}@media (max-width: 818px) and (hover: none){ul{height:100%;grid-auto-rows:minmax(min-content,1fr)}li.frame{align-items:center}}';var is=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,ce=(e,t,r,a)=>{for(var s=a>1?void 0:a?ns(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&is(t,r,s),s};let V=class extends y{constructor(){super(...arguments),this.disabled=!1,this.systems=[],this.columns=1,this.movePenalty=0}render(){return l`<ul style="--columns: ${this.columns}">
      ${this.systems.map(e=>{const t=e.name==="-",r=e.name==="heatSinks",a=this.canToggle(e);return l`<li
          class="frame ${e.state} ${t?"empty":""} ${r?"fixed":""} ${this.isMovementMode(e)?"movement":""}"
          title=${this.describe(e)}
          aria-label=${this.describe(e)}
          role=${a?"button":"presentation"}
          tabindex=${a?0:-1}
          @click=${s=>this.toggle(s,e)}
          @keydown=${s=>this.onKeyDown(s,e)}
        >
          <span class="sys-name">${e.name}</span>
          ${this.isMovementMode(e)?l`
                  <div>
                    <span class="sys-speed ${this.movePenalty?"reduced":""}"
                      >⬡${this.hexes(e)}</span
                    >
                    <span class="sys-heat">🔥${e.heat}</span>
                  </div>
                `:""}
        </li>`})}
    </ul>`}hexes(e){return Math.max(0,(e.value??0)-this.movePenalty)}canToggle(e){return!this.disabled&&e.name!=="-"&&e.name!=="heatSinks"&&e.state!=="destroyed"}describe(e){return e.name==="-"?"Empty mount":e.state==="destroyed"?`${e.name} — destroyed`:e.name==="heatSinks"?"Heat sinks":this.disabled?e.name:e.name==="cockpit"?"Eject pilot":this.isMovementMode(e)?e.state==="online"?`Cancel ${e.name}`:`Move by ${e.name}`:e.state==="online"?`Hold ${e.name}`:`Fire ${e.name}`}onKeyDown(e,t){e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.toggle(e,t))}toggle(e,t){if(this.disabled||t.state==="destroyed"||t.name==="-"){e.stopPropagation();return}if(e.stopPropagation(),t.name==="cockpit"){this.dispatchEvent(new CustomEvent("eject-request",{bubbles:!0,composed:!0}));return}t.name!=="heatSinks"&&(t.state==="online"?t.state="offline":t.state==="offline"&&(this.resetMoveSystems(),t.state="online"),this.dispatchEvent(new CustomEvent("system-changed",{detail:t,bubbles:!0,composed:!0})),this.requestUpdate())}isMovementMode(e){return e.type==="movement"&&dr.includes(e.name)}resetMoveSystems(){this.systems.filter(e=>e.type==="movement").forEach(e=>{e.state="offline"})}};V.styles=[R,k(os)];ce([p({type:Boolean})],V.prototype,"disabled",2);ce([p()],V.prototype,"systems",2);ce([p({type:Number})],V.prototype,"columns",2);ce([p({type:Number})],V.prototype,"movePenalty",2);V=ce([C("system-list")],V);var ls=Object.defineProperty,ds=Object.getOwnPropertyDescriptor,L=(e,t,r,a)=>{for(var s=a>1?void 0:a?ds(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&ls(t,r,s),s};let $=class extends y{constructor(){super(...arguments),this.systems=[],this.armor=[],this.locked=!1,this.movePenalty=0,this.destroyed=!1,this.restorePrompt=!1,this.onKeyDown=e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.handleClick(e))}}get sectionLabel(){return($.LABELS[this.section]??this.section).toUpperCase()}render(){const e=this.destroyed||this.locked,t=this.section==="head",r=l`<span class="section-dice">${Zr(this.section)}</span>`,a=l`<system-list
      .systems=${this.systems}
      columns=${this.columns}
      .movePenalty=${this.movePenalty}
      @system-changed=${this.handleSystemChanged}
    ></system-list>`;return l`
      <div
        class="frame ${this.destroyed?"destroyed":""}"
        title=${this.describeClick()}
        aria-label=${`${this.sectionLabel}: ${this.describeClick()}`}
        role=${e?"presentation":"button"}
        tabindex=${e?-1:0}
        @click=${this.handleClick}
        @keydown=${this.onKeyDown}
      >
        <div class="section-head ${this.stackArmor?"stacked":""}">
          <div class="section-title">
            ${t?l``:r}
            <span class="section-label">${this.sectionLabel}</span>
          </div>
          <div class="meta meta-block">
            ${this.armor.map((s,o)=>l`
                ${o>0?l`<span class="armor-separator" aria-hidden="true">|</span>`:l``}
                <armor-points
                  .armor=${s}
                  .disabled=${e}
                  @armor-changed=${this.handleArmorChanged}
                ></armor-points>
              `)}
          </div>
        </div>
        ${t?l`<div class="head-systems">${r}${a}</div>`:a}
      </div>

      <confirm-modal
        ?open=${this.restorePrompt}
        heading="Restore section"
        message=${`Repair the ${this.sectionLabel} section? Restores all its systems and armour.`}
        confirmLabel="Restore"
        @modal-confirm=${()=>{this.restorePrompt=!1,this.repairSection()}}
        @modal-cancel=${()=>this.restorePrompt=!1}
      ></confirm-modal>
    `}get columns(){switch(this.section){case"torso":return 2;case"legs":return 3;default:return 1}}get stackArmor(){return this.section==="torso"||this.section==="armLeft"||this.section==="armRight"}describeClick(){return this.locked?this.sectionLabel:this.destroyed?"Restore section":this.armorBreached?"Take an internal hit":"Spend 1 armour"}get armorBreached(){return this.armor.some(e=>e.spent>=e.value)}handleClick(e){var t;if(!this.locked){if(this.destroyed){this.restorePrompt=!0;return}this.armorBreached?this.takeInternalHit():(t=this.armorPoints[0])==null||t.handleClick(e),e.stopPropagation()}}handleArmorChanged(e){var t;e.stopPropagation(),(t=e.detail)!=null&&t.breached&&!this.destroyed&&!this.locked&&this.takeInternalHit(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("armor-changed",{bubbles:!0,composed:!0}))}takeInternalHit(){const e=ur(this.systems);e&&(e.state="destroyed",this.dispatchEvent(new CustomEvent("system-changed",{detail:e,bubbles:!0,composed:!0})),this.syncDestroyed())}handleSystemChanged(){var e;(e=this.systemList)==null||e.requestUpdate(),this.requestUpdate()}refresh(){var e,t;this.destroyed=oe(this.systems),(e=this.armorPoints)==null||e.forEach(r=>r.requestUpdate()),(t=this.systemList)==null||t.requestUpdate(),this.requestUpdate()}syncDestroyed(){var t;const e=this.destroyed;this.destroyed=oe(this.systems),(t=this.systemList)==null||t.requestUpdate(),this.requestUpdate(),e!==this.destroyed&&this.dispatchEvent(new CustomEvent("section-destroyed",{detail:{section:this.section,destroyed:this.destroyed},bubbles:!0,composed:!0}))}repairSection(){this.systems.forEach(e=>{e.spent&&(e.spent=0);const t=e.name==="-"||e.type==="movement";e.state=t?"offline":"online"}),this.armor.forEach(e=>{e.spent=0}),this.destroyed=!1,this.systemList.requestUpdate(),this.armorPoints.forEach(e=>e.requestUpdate()),this.requestUpdate(),this.dispatchEvent(new CustomEvent("section-destroyed",{detail:{section:this.section,destroyed:!1},bubbles:!0,composed:!0}))}};$.styles=[R,k(Yr)];$.LABELS={armLeft:"ARM",armRight:"ARM"};L([p({type:String})],$.prototype,"section",2);L([p({attribute:!1})],$.prototype,"systems",2);L([p({attribute:!1})],$.prototype,"armor",2);L([p({type:Boolean})],$.prototype,"locked",2);L([p({type:Number})],$.prototype,"movePenalty",2);L([T("system-list")],$.prototype,"systemList",2);L([ye("armor-points")],$.prototype,"armorPoints",2);L([b()],$.prototype,"destroyed",2);L([b()],$.prototype,"restorePrompt",2);$=L([C("body-section")],$);const cs=":host{display:block;align-self:start}.heat-frame{box-sizing:border-box;display:flex;flex-direction:column;align-items:center;gap:.3rem;padding:.35rem .45rem;overflow:hidden;transition:border-color .15s ease}.heat-frame.disabled{opacity:.45}.heat-frame.ok{border-color:var(--color-ok)}.heat-frame.warning{border-color:var(--color-warning)}.heat-frame.critical{border-color:var(--color-critical);background:color-mix(in srgb,var(--color-critical) 12%,transparent)}.heat-frame.destroyed{border-color:var(--color-wreck);background:color-mix(in srgb,var(--color-wreck) 12%,transparent)}.section-label{font:700 .62rem/1 var(--font-heading);letter-spacing:.06em;color:var(--color-text);flex:none}.gauge{display:grid;grid-template-columns:repeat(4,auto);justify-content:center;gap:.1rem}.sink{position:relative;box-sizing:border-box;flex:none;width:.95rem;height:.85rem;border:1px solid var(--color-border-strong);border-radius:1px;background:#ffffff0a;box-shadow:inset 0 0 3px #00000080}.sink.ok{border-color:color-mix(in srgb,var(--color-ok) 55%,transparent);background:color-mix(in srgb,var(--color-ok) 8%,transparent)}.sink.warning{border-color:color-mix(in srgb,var(--color-warning) 55%,transparent);background:color-mix(in srgb,var(--color-warning) 8%,transparent)}.sink.critical{border-color:color-mix(in srgb,var(--color-critical) 55%,transparent);background:color-mix(in srgb,var(--color-critical) 8%,transparent)}.sink.hot.ok{border-color:var(--color-ok);background:color-mix(in srgb,var(--color-ok) 32%,transparent)}.sink.hot.warning{border-color:var(--color-warning);background:color-mix(in srgb,var(--color-warning) 32%,transparent)}.sink.hot.critical{border-color:var(--color-critical);background:color-mix(in srgb,var(--color-critical) 32%,transparent)}.flame{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:.7rem;line-height:1;pointer-events:none}.sink.spent{border-color:var(--color-border);background:repeating-linear-gradient(-45deg,var(--color-border) 0 1px,transparent 1px 3px);opacity:.5}@media print{.flame{display:none}.sink{box-shadow:none}}";var hs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,$e=(e,t,r,a)=>{for(var s=a>1?void 0:a?ms(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&hs(t,r,s),s};let Z=class extends y{constructor(){super(...arguments),this.shutdownPrompt=!1,this.shutdownResolver=null}get totalHeat(){return St(this.card)}get capacity(){return(this.heatSinks.value??0)-(this.heatSinks.spent??0)}get disabled(){return this.card.state==="destroyed"||this.card.state==="shutdown"}get predictedState(){return this.disabled?this.card.state:ue(this.card.state,this.totalHeat,this.capacity)}askShutdown(){return new Promise(e=>{this.shutdownResolver=e,this.shutdownPrompt=!0})}answerShutdown(e){var t;this.shutdownPrompt=!1,(t=this.shutdownResolver)==null||t.call(this,e),this.shutdownResolver=null}async endActivation(){if(this.disabled||this.shutdownPrompt)return;const e=this.card.state,t=await mr(this.card.state,this.totalHeat,this.heatSinks,()=>this.askShutdown());this.card.state=t.state,cr(this.heatSinks),Vr(Et(this.card)),hr(this.card),t.state!==e&&this.dispatchEvent(new CustomEvent("mech-state-changed",{detail:{state:t.state,destroyReactor:t.state==="destroyed"},bubbles:!0,composed:!0})),this.emitChanged()}emitChanged(){this.dispatchEvent(new CustomEvent("heat-changed",{bubbles:!0,composed:!0})),this.requestUpdate()}render(){if(!this.card)return l``;const e=this.heatSinks.value??0,t=this.heatSinks.spent??0,r=this.totalHeat,a=Math.max(e,r),s=this.predictedState==="destroyed"?"destroyed":ge(this.predictedState);return l`
      <div
        class="frame heat-frame ${s} ${this.disabled?"disabled":""}"
        title=${`Heat ${r} of ${this.capacity} sink capacity`}
        aria-label=${`Heat ${r} of ${this.capacity} sink capacity`}
      >
        <span class="section-label">HEAT</span>

        <div class="gauge" title="${r} heat vs ${this.capacity} sink capacity">
          ${Array.from({length:a},(o,i)=>{const n=i<r,h=i>=e-t&&i<e&&!n?"spent":ge(ue(this.card.state,i+1,this.capacity));return l`<span class="sink ${h} ${n?"hot":""}">
              ${n?l`<span class="flame">🔥</span>`:""}
            </span>`})}
        </div>

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
    `}};Z.styles=[R,k(cs)];$e([p({attribute:!1})],Z.prototype,"card",2);$e([p({attribute:!1})],Z.prototype,"heatSinks",2);$e([b()],Z.prototype,"shutdownPrompt",2);Z=$e([C("heat-section")],Z);const ps=":host{display:block}.weapons{display:grid;gap:.22em;font-size:.7em;font-family:var(--font-mono);text-transform:uppercase;cursor:pointer}.weapons.locked{cursor:default}.weapons.frame{padding:.4rem}.weapon.frame{padding:.26rem .4rem}.weapon-header{display:grid;grid-template-columns:1.6fr 3.6fr 1.7fr 1.7fr 1.7fr 2.4fr 5fr;gap:.25em;color:var(--color-muted);padding:0 calc(.4rem + 1px)}.weapon-header .name{grid-column:span 2;font-family:var(--font-heading);letter-spacing:.06em;font-size:.73rem}.weapon-header .short{color:var(--color-ok);text-align:center}.weapon-header .medium{color:var(--color-steel);text-align:center}.weapon-header .long{color:var(--color-critical);text-align:center}.weapon-header .dmg{text-align:center}.weapon{--frame-accent: var(--color-ok);display:grid;grid-template-columns:1.6fr 3.6fr 1.7fr 1.7fr 1.7fr 2.4fr 5fr;align-items:center;gap:.25em;cursor:pointer;transition:filter .15s ease,opacity .15s ease}.weapon .count{text-align:center}.weapon .count.cyclable{text-decoration-line:underline;text-decoration-style:dotted;text-decoration-color:color-mix(in srgb,currentColor 45%,transparent);text-underline-offset:2px}.weapon .short{color:var(--color-ok);text-align:center}.weapon .medium{color:var(--color-steel);text-align:center}.weapon .long{color:var(--color-critical);text-align:center}.weapon .dmg{text-align:center}.weapon:hover:not(.locked){filter:brightness(1.25)}.weapon:not(.locked) .count.cyclable:hover{text-decoration-style:solid;text-decoration-color:currentColor}.weapon.locked{cursor:default}.weapon.locked .count.cyclable{text-decoration-line:none}.weapon.off{--frame-accent: var(--color-muted);opacity:.55}.weapon-count-max{color:var(--color-muted)}.weapon .consumable-boxes{grid-template-columns:none;gap:.12em}.ammo-run{display:grid;grid-auto-flow:column;justify-content:start;gap:.15em}.ammo-box{width:.75em;height:.75em;color:var(--color-muted)}.ammo-box.spent{color:var(--color-warning)}.heat-value{display:inline-flex;align-items:center;gap:.15em;color:var(--color-warning)}@media (max-width: 818px) and (hover: none){.count.cyclable{display:inline-flex;align-items:center;justify-content:center;min-height:24px;min-width:24px}}@media print{.heat-value{filter:grayscale(1)}}";function gs(e,t){return l`<svg
    class="${t} ${e?"spent":""}"
    viewBox="0 0 16 16"
    aria-hidden="true"
  >
    <rect
      x="1"
      y="1"
      width="14"
      height="14"
      rx="2"
      fill=${e?"currentColor":"none"}
      stroke="currentColor"
      stroke-width="1.4"
    />
    ${e?l`<path
            d="M4 8.5 L7 11 L12 5"
            fill="none"
            stroke="#0a0c0e"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>`:""}
  </svg>`}var us=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,Fe=(e,t,r,a)=>{for(var s=a>1?void 0:a?fs(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&us(t,r,s),s};let le=class extends y{constructor(){super(...arguments),this.weapons=[],this.locked=!1}toggleEveryWeapon(){this.locked||this.announce(Wr(this.weapons))}toggleAll(e,t){this.locked||(e.stopPropagation(),this.announce(Ir(t)))}cycleCount(e,t){this.locked||t.count<=1||(e.stopPropagation(),this.announce(qr(t)))}announce(e){e.length&&(this.dispatchEvent(new CustomEvent("system-changed",{detail:e[e.length-1],bubbles:!0,composed:!0})),this.requestUpdate())}renderAmmoBoxes(e){const t=e.filter(r=>r.value);return l`<div class="consumable-boxes readonly">
      ${t.map(r=>l`<div class="ammo-run">
          ${Array.from({length:r.value??0},(a,s)=>gs(s<(r.spent??0),"ammo-box"))}
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
        ${this.weapons.length?this.weapons.map(e=>this.renderWeaponRow(e)):l`<span class="meta">No active weapons</span>`}
      </div>
    `}renderWeaponRow(e){const t=e.count>1;return l`<div
      class="weapon frame ${e.activeCount===0?"off":""} ${this.locked?"locked":""}"
      @click=${r=>this.toggleAll(r,e)}
    >
      <span
        class="count ${t?"cyclable":""}"
        title=${t?"Step through copies one at a time":""}
        @click=${r=>this.cycleCount(r,e)}
        >${e.activeCount}${t?l`<span class="weapon-count-max">/${e.count}</span>`:""}</span
      >
      <span class="weapon-name">${e.name}</span>
      <span class="short">${Pe(e.short,e.activeCount)}</span>
      <span class="medium">${Pe(e.medium,e.activeCount)}</span>
      <span class="long">${Pe(e.long,e.activeCount)}</span>

      <span class="dmg">${e.damage??"-"}</span>
      ${typeof e.ammo=="number"?this.renderAmmoBoxes(e.entries):l`<span class="heat-value">
              ${e.heat?l`🔥${e.heat*e.activeCount}`:"-"}
            </span>`}
    </div>`}};le.styles=[R,k(ps)];Fe([p({attribute:!1})],le.prototype,"weapons",2);Fe([p({type:Boolean})],le.prototype,"locked",2);le=Fe([C("weapon-table")],le);var vs=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,G=(e,t,r,a)=>{for(var s=a>1?void 0:a?bs(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&vs(t,r,s),s};let O=class extends y{constructor(){super(...arguments),this.prompt=null,this.endActivation=async e=>{var t;e.stopPropagation(),await((t=this.heatSection)==null?void 0:t.endActivation()),this.notifyCardChanged()},this.handleChildChanged=e=>{var r,a;const t=e==null?void 0:e.detail;(t==null?void 0:t.name)==="reactor"&&!this.destroyed&&(t.state==="offline"&&this.card.state!=="shutdown"?this.card.state="shutdown":t.state==="online"&&this.card.state==="shutdown"&&(this.card.state="nominal")),this.requestUpdate(),(r=this.heatSection)==null||r.requestUpdate(),(a=this.mechFigure)==null||a.requestUpdate()},this.handleEjectRequest=()=>{this.destroyed||(this.prompt="eject")},this.handleMechStateChanged=e=>{var r,a,s,o;const t=this.reactor;(r=e.detail)!=null&&r.destroyReactor?(t&&(t.state="destroyed"),(a=this.torsoSection)==null||a.syncDestroyed()):((s=e.detail)==null?void 0:s.state)==="shutdown"&&(t==null?void 0:t.state)==="online"&&(t.state="offline",(o=this.torsoSection)==null||o.syncDestroyed()),this.handleChildChanged()},this.resyncBodySections=()=>{this.bodySections.forEach(e=>e.syncDestroyed()),this.handleChildChanged()},this.handleArticleClick=()=>{if(this.card.state==="shutdown"){this.prompt="startup";return}this.destroyed&&(this.prompt="repair")}}get destroyed(){return fe(this.card)}get disabled(){return this.destroyed||this.card.state==="shutdown"}get heatSinks(){return this.card.systems.torso.find(e=>e.name==="heatSinks")}get predictedState(){if(this.disabled)return this.card.state;const e=this.heatSinks,t=((e==null?void 0:e.value)??0)-((e==null?void 0:e.spent)??0);return ue(this.card.state,St(this.card),t)}get movePenalty(){return this.card.state==="overheated"||this.card.state==="critical"?1:0}get displayState(){return this.destroyed?"destroyed":this.card.state}get stateClass(){return _t(this.card)}get reactor(){return this.card.systems.torso.find(e=>e.name==="reactor")}get cockpit(){return this.card.systems.head.find(e=>e.name==="cockpit")}ejectPilot(){var e,t;this.cockpit&&(this.cockpit.state="destroyed"),this.card.state="destroyed",this.bodySections.forEach(r=>r.syncDestroyed()),this.requestUpdate(),(e=this.heatSection)==null||e.requestUpdate(),(t=this.mechFigure)==null||t.requestUpdate(),this.notifyCardChanged()}get torsoSection(){return Array.from(this.bodySections).find(e=>e.section==="torso")}confirmPrompt(){const e=this.prompt;this.prompt=null,e==="startup"?this.startUpMech():e==="repair"?this.repairMech():e==="eject"&&this.ejectPilot()}get promptCopy(){switch(this.prompt){case"startup":return{tone:"warning",heading:"Start up mech",message:`Bring ${this.card.name} back online? Heat is vented; battle damage stays.`,confirmLabel:"Start up"};case"repair":return{tone:"default",heading:"Repair mech",message:`Fully repair ${this.card.name}? Restores all armour, systems and heat sinks.`,confirmLabel:"Repair"};case"eject":return{tone:"critical",heading:"Eject pilot",message:`Punch the pilot out of ${this.card.name}? The abandoned mech counts as destroyed.`,confirmLabel:"Eject"};default:return null}}startUpMech(){var e,t,r,a;this.card.state="nominal",((e=this.reactor)==null?void 0:e.state)==="offline"&&(this.reactor.state="online"),(t=this.torsoSection)==null||t.syncDestroyed(),this.requestUpdate(),(r=this.heatSection)==null||r.requestUpdate(),(a=this.mechFigure)==null||a.requestUpdate(),this.notifyCardChanged()}repairMech(){var e,t;this.card.state="nominal",this.bodySections.forEach(r=>r.repairSection()),this.requestUpdate(),(e=this.heatSection)==null||e.requestUpdate(),(t=this.mechFigure)==null||t.requestUpdate(),this.notifyCardChanged()}refresh(){var e,t,r;this.bodySections.forEach(a=>a.refresh()),(e=this.heatSection)==null||e.requestUpdate(),(t=this.mechFigure)==null||t.requestUpdate(),(r=this.weaponTable)==null||r.requestUpdate(),this.requestUpdate()}notifyCardChanged(){this.dispatchEvent(new CustomEvent("card-changed",{bubbles:!0,composed:!0}))}get gaugeConfig(){switch(this.displayState){case"overheated":return{angle:-45,color:"var(--color-warning)"};case"critical":return{angle:45,color:"var(--color-critical)"};case"destroyed":return{angle:90,color:"var(--color-wreck)"};case"shutdown":return{angle:-90,color:"var(--color-muted)"};default:return{angle:-90,color:"var(--color-ok)"}}}renderStatusGauge(){const{angle:a,color:s}=this.gaugeConfig,o=[-90,-45,0,45,90].map(i=>{const n=i*Math.PI/180,d=Math.sin(n),h=-Math.cos(n);return A`<line
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
    </svg>`}render(){var a,s,o,i;const e=Et(this.card),t=this.disabled,r=`--card-bg-image: url("./images/${encodeURIComponent(this.card.name)}.png")`;return l`
      <article
        class="state-${this.stateClass}"
        data-disabled=${t}
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
                      ${lr(this.card.tonnage)}
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
                .locked=${t}
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
                .locked=${t}
                @system-changed=${this.handleChildChanged}
                @section-destroyed=${this.handleChildChanged}
                @armor-changed=${this.handleChildChanged}
              ></body-section>

              <body-section
                section="torso"
                .systems=${this.card.systems.torso}
                .armor=${[this.card.armor.torso,this.card.armor.torsoBack]}
                .locked=${t}
                @system-changed=${this.handleChildChanged}
                @section-destroyed=${this.handleChildChanged}
                @armor-changed=${this.handleChildChanged}
              ></body-section>

              <body-section
                section="armLeft"
                .systems=${this.card.systems.armLeft}
                .armor=${[this.card.armor.armLeft]}
                .locked=${t}
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
                .locked=${t}
                .movePenalty=${this.movePenalty}
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
            .weapons=${e}
            .locked=${t}
            @system-changed=${this.resyncBodySections}
          ></weapon-table>
        </div>

        <div class="footer">
          <button
            type="button"
            class="end-activation ${ge(this.predictedState)}"
            ?disabled=${t}
            title=${t?"The mech is out of play":"End activation: apply heat, spend a round from every weapon that fired, and clear what was declared this turn"}
            @click=${this.endActivation}
          >
            <span>End activation</span>
            <span class="predicted">➔${this.predictedState.toUpperCase()}</span>
          </button>
          <span class="wordmark">HEK-MEK</span>
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
    `}};O.styles=[R,k(Gr)];G([p({attribute:!1})],O.prototype,"card",2);G([ye("body-section")],O.prototype,"bodySections",2);G([T("heat-section")],O.prototype,"heatSection",2);G([T("mech-figure")],O.prototype,"mechFigure",2);G([T("weapon-table")],O.prototype,"weaponTable",2);G([b()],O.prototype,"prompt",2);O=G([C("mech-card")],O);const D=e=>l`<span class="tn"
    >${_(e)}<span class="tn-plus" aria-hidden="true">+</span></span
  >`,z=(e,t)=>l`<span class="ex-die ${t?"ex-hit":"ex-miss"}">${_(e)}</span>`,Lt=e=>A`
  <marker id=${e} viewBox="0 0 10 10" refX="8" refY="5"
    markerWidth="5" markerHeight="5" orient="auto-start-reverse">
    <path d="M0 0 L10 5 L0 10 Z" class="d-fill" />
  </marker>`,ht=(e,t)=>A`<polygon class="d-hex" points="${e} ${t-13} ${e+11.26} ${t-6.5} ${e+11.26} ${t+6.5} ${e} ${t+13} ${e-11.26} ${t+6.5} ${e-11.26} ${t-6.5}" />`,Pt=[[22.52,0],[11.26,-19.5],[-11.26,-19.5],[-22.52,0],[-11.26,19.5],[11.26,19.5]],ys=(e,t)=>A`${ht(e,t)}${Pt.map(([r,a])=>ht(e+r,t+a))}`,ws=l`<svg
  class="diagram"
  viewBox="0 0 336 90"
  role="img"
  aria-label="A mech resolves Initiative, Movement, Shooting and Apply Heat in order before the next mech acts"
>
  <defs>${Lt("ah-turn")}</defs>
  <path
    class="d-stroke"
    fill="none"
    d="M 285 30 V 14 Q 285 8 279 8 H 45 Q 39 8 39 14 V 28"
    marker-end="url(#ah-turn)"
  />
  ${["Initiative","Movement","Shooting","Apply Heat"].map((e,t)=>{const r=4+t*82;return A`
      <rect class="d-box" x=${r} y="30" width="70" height="30" rx="4" />
      <text class="d-accent d-mono-sm" x=${r+8} y="49">${t+1}</text>
      <text class="d-text d-mono-sm" x=${r+19} y="49">${e}</text>
      ${t<3?A`<line class="d-stroke" x1=${r+71} y1="45" x2=${r+81} y2="45"
              marker-end="url(#ah-turn)" />`:""}`})}
  <text class="d-muted d-cap" x="168" y="80" text-anchor="middle">
    one mech finishes all four, then the next activates
  </text>
</svg>`,$s=l`<svg
  class="diagram"
  viewBox="0 0 336 132"
  role="img"
  aria-label="Movement is counted in hexes. Move steps one hex forwards or backwards along the mech's facing and turns freely. Run drives straight forwards. Jump travels a straight line along any one of the six hex directions."
>
  <defs>${Lt("ah-move")}</defs>
  <line class="d-divider" x1="112" y1="20" x2="112" y2="116" />
  <line class="d-divider" x1="224" y1="20" x2="224" y2="116" />
  ${[{cx:56,title:"MOVE",cap:"forward or back"},{cx:168,title:"RUN",cap:"forward only"},{cx:280,title:"JUMP",cap:"straight · 6 ways"}].map(({cx:e,title:t,cap:r})=>A`
      <text class="d-accent d-mono-sm" x=${e} y="14" text-anchor="middle">${t}</text>
      ${ys(e,64)}
      <text class="d-muted d-cap" x=${e} y="126" text-anchor="middle">${r}</text>`)}

  <path class="d-token" d="M 52 57 L 52 71 L 64 64 Z" />
  <line class="d-stroke" x1="66" y1="64" x2="82" y2="64" marker-end="url(#ah-move)" />
  <line class="d-stroke" x1="50" y1="64" x2="32" y2="64" marker-end="url(#ah-move)" />

  <path class="d-token" d="M 156 57 L 156 71 L 168 64 Z" />
  <line class="d-stroke" x1="170" y1="64" x2="208" y2="64" marker-end="url(#ah-move)" />

  <circle class="d-token" cx="280" cy="64" r="3.6" />
  ${Pt.map(([e,t])=>A`<line class="d-stroke d-dash" x1=${280+e*.3} y1=${64+t*.3} x2=${280+e*.9} y2=${64+t*.9} marker-end="url(#ah-move)" />`)}
</svg>`,xs=l`<svg
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
</svg>`,ks=l`<div class="example">
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
        <strong>Attack roll.</strong> Stood still, so ${D(2)}. Four dice:
        ${z(5,!0)}${z(3,!0)}${z(1,!1)}${z(4,!0)} →
        <strong>3 hits</strong>
      </span>
    </li>
    <li>
      <span class="ex-n">③</span>
      <span>
        <strong>Defense.</strong> Target moved, so ${D(4)}. Three dice:
        ${z(6,!0)}${z(5,!0)}${z(2,!1)} →
        <strong>2 blocked</strong>, 1 gets through
      </span>
    </li>
    <li>
      <span class="ex-n">④</span>
      <span>
        <strong>Location.</strong> One die for the hit that landed:
        <span class="ex-die">${_(4)}</span> → <strong>Torso</strong>
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
</div>`,Me=e=>e===void 0?"–":String(e),Ss=[{type:"energy",label:"Energy — generates heat"},{type:"ballistic",label:"Ballistic — consumes ammo"},{type:"missile",label:"Missile — consumes ammo"}],_s=l`<div class="wpn-frame">
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
    ${Ss.map(e=>l`<tbody>
          <tr class="wpn-group">
            <th colspan="6">${e.label}</th>
          </tr>
          ${Object.values(Ne).filter(t=>t.type===e.type).map(t=>l`<tr>
                  <td class="wpn-name">${t.name}</td>
                  <td class="c s">${Me(t.short)}</td>
                  <td class="c m">${Me(t.medium)}</td>
                  <td class="c l">${Me(t.long)}</td>
                  <td class="c dmg">${t.damage??"–"}</td>
                  <td class="c">
                    ${t.heat?l`<span class="wpn-heat">🔥${t.heat}</span>`:l`<span class="wpn-ammo">${t.ammo} ⁍</span>`}
                  </td>
                </tr>`)}
        </tbody>`)}
  </table>
</div>`,Cs=":host{display:contents}dialog{margin:auto;padding:0;border:none;background:transparent;color:var(--color-text);width:min(92vw,40rem);max-height:min(88vh,52rem);overflow:visible}dialog::backdrop{background:#0406089e;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.panel{display:flex;flex-direction:column;max-height:inherit;border:1px solid var(--color-border-strong);border-top:3px solid var(--color-brand);border-radius:var(--radius-md);background:linear-gradient(160deg,var(--color-panel-strong),var(--color-bg-alt));box-shadow:var(--shadow-panel);overflow:hidden}.head{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.85rem 1.1rem;border-bottom:1px solid var(--color-border);background:linear-gradient(180deg,#ff6b0017,#ff6b0000)}h2{margin:0;font:700 .9rem/1 var(--font-heading);letter-spacing:.08em;text-transform:uppercase;color:var(--color-text)}.btn.small{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid var(--color-border-strong);border-radius:var(--radius-sm);background:#0000004d;color:var(--color-text);font:700 .62rem/1 var(--font-mono);text-transform:uppercase;letter-spacing:.06em;padding:.4rem .8rem;cursor:pointer;transition:filter .15s ease}.btn.small:hover{filter:brightness(1.35);border-color:var(--color-brand)}.body{overflow-y:auto;padding:1rem 1.1rem 1.2rem;display:grid;gap:1.3rem}section{display:grid;gap:.5rem}h3{margin:0;font:700 .78rem/1.2 var(--font-heading);letter-spacing:.05em;text-transform:uppercase;color:var(--color-steel)}h4{margin:.35rem 0 0;font:700 .72rem/1.2 var(--font-mono);letter-spacing:.04em;color:var(--color-text)}p{margin:0;font:400 .76rem/1.55 var(--font-body);color:var(--color-muted)}p strong,dd strong,li strong{color:var(--color-text);font-weight:700}em{color:var(--color-steel);font-style:normal}ol,ul{margin:0;padding-left:1.1rem;display:grid;gap:.28rem;font:400 .76rem/1.5 var(--font-body);color:var(--color-muted)}.steps{list-style:decimal}.diagram{display:block;width:100%;height:auto;margin:.15rem 0 .1rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);background:#00000038;padding:.5rem .6rem}.diagram text{font-family:var(--font-mono);fill:var(--color-muted)}.diagram .d-mono-sm{font-size:8.5px;font-weight:700;letter-spacing:.02em}.diagram .d-cap{font-size:8px}.diagram .d-text{fill:var(--color-text)}.diagram .d-muted{fill:var(--color-muted)}.diagram .d-accent,.d-fill{fill:var(--color-steel)}.d-box{fill:color-mix(in srgb,var(--color-steel) 9%,transparent);stroke:var(--color-border-strong);stroke-width:1}.d-stroke{stroke:var(--color-steel);stroke-width:1.6;fill:none}.d-dash{stroke-dasharray:3 3}.d-divider{stroke:var(--color-border-strong);stroke-width:1}.d-outline{fill:none;stroke:var(--color-border-strong);stroke-width:1}.d-token{fill:var(--color-warning)}.d-hex{fill:color-mix(in srgb,var(--color-steel) 6%,transparent);stroke:var(--color-border-strong);stroke-width:1}.d-band-s{fill:color-mix(in srgb,var(--color-ok) 24%,transparent)}.d-band-m{fill:color-mix(in srgb,var(--color-steel) 22%,transparent)}.d-band-l{fill:color-mix(in srgb,var(--color-critical) 20%,transparent)}.diagram .d-s{fill:var(--color-ok)}.diagram .d-m{fill:var(--color-steel)}.diagram .d-l{fill:var(--color-critical)}.weight-order,.ladder{list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:.4rem;align-items:center}.wc{display:inline-block;padding:.12em .5em;border:1px solid currentColor;border-radius:999px;font:700 .62rem/1.3 var(--font-mono);letter-spacing:.08em;text-transform:uppercase}.wc.light{color:var(--color-ok)}.wc.medium{color:var(--color-steel)}.wc.heavy{color:var(--color-warning)}.wc.assault{color:var(--color-critical)}.modes{margin:0;display:grid;grid-template-columns:max-content 1fr;gap:.3rem .7rem;font:400 .76rem/1.5 var(--font-body)}.modes dt{font:700 .68rem/1.5 var(--font-mono);letter-spacing:.06em;color:var(--color-steel)}.modes dd{margin:0;color:var(--color-muted)}.tn{display:inline-flex;align-items:center;gap:.15rem;padding:.15em .4em;border-radius:var(--radius-sm);background:color-mix(in srgb,var(--color-steel) 18%,transparent);color:var(--color-steel);font:700 .7rem/1 var(--font-mono)}.tn .dice-svg{width:1.15rem;height:1.15rem}.tn-plus{font-size:.82rem}.mods{list-style:none;padding:0}.mod{display:inline-block;min-width:2.2em;margin-right:.5rem;text-align:center;padding:.05em .3em;border-radius:var(--radius-sm);font:700 .68rem/1.4 var(--font-mono)}.mod.minus{background:color-mix(in srgb,var(--color-critical) 16%,transparent);color:var(--color-critical)}.mod.plus{background:color-mix(in srgb,var(--color-ok) 16%,transparent);color:var(--color-ok)}.mod.info{background:color-mix(in srgb,var(--color-steel) 16%,transparent);color:var(--color-steel)}.d-heat{margin-left:.35rem;padding:.02em .4em;border-radius:var(--radius-sm);background:color-mix(in srgb,var(--color-warning) 15%,transparent);color:var(--color-warning);font:700 .6rem/1.4 var(--font-mono);white-space:nowrap}.kill{padding:.5rem .7rem;border-left:3px solid var(--color-critical);background:color-mix(in srgb,var(--color-critical) 8%,transparent);border-radius:var(--radius-sm)}.heat-table{border-collapse:collapse;width:100%;font:400 .74rem/1.4 var(--font-body)}.heat-table td{border:1px solid var(--color-border);padding:.35rem .6rem;color:var(--color-muted)}.heat-table td:first-child{white-space:nowrap;font-family:var(--font-mono);color:var(--color-text);width:1%}.loc-table{border-collapse:collapse;width:100%;font:400 .74rem/1.45 var(--font-body)}.loc-table th{text-align:left;padding:.3rem .6rem;border-bottom:1px solid var(--color-border);font:700 .58rem/1.4 var(--font-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--color-muted)}.loc-table td{border:1px solid var(--color-border);padding:.3rem .6rem;color:var(--color-muted);vertical-align:middle}.loc-table td:first-child{width:1%}.loc-roll{display:inline-flex;align-items:center;gap:.25rem;color:var(--color-warning)}.loc-roll .dice-svg{width:1.2rem;height:1.2rem}.example{display:grid;gap:.5rem;padding:.7rem .8rem;border:1px solid var(--color-border-strong);border-left:3px solid var(--color-steel);border-radius:var(--radius-sm);background:color-mix(in srgb,var(--color-steel) 7%,transparent)}.ex-head{font:700 .7rem/1.2 var(--font-heading);letter-spacing:.05em;text-transform:uppercase;color:var(--color-steel)}.ex-steps{list-style:none;margin:0;padding:0;display:grid;gap:.4rem}.ex-steps li{display:grid;grid-template-columns:1.3rem 1fr;gap:.4rem;align-items:baseline;font:400 .75rem/1.6 var(--font-body);color:var(--color-muted)}.ex-n{font:700 .82rem/1.6 var(--font-mono);color:var(--color-steel);text-align:center}.ex-die{display:inline-flex;vertical-align:middle;color:var(--color-text)}.ex-die .dice-svg{width:1rem;height:1rem;margin:0 .06rem}.ex-hit{color:var(--color-ok)}.ex-miss{color:var(--color-muted);opacity:.6}.wpn-frame{display:flex;justify-content:center;width:max-content;max-width:100%;margin:.15rem auto .1rem;padding:.5rem .7rem;border:1px solid var(--color-border);border-radius:var(--radius-sm);background:#00000038;overflow-x:auto}.wpn-table{border-collapse:collapse;width:auto;font:400 .72rem/1.4 var(--font-body)}.wpn-table th{text-align:left;padding:.28rem .45rem;border-bottom:1px solid var(--color-border);font:700 .56rem/1.4 var(--font-mono);letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;color:var(--color-muted)}.wpn-table td{border:1px solid var(--color-border);padding:.26rem .45rem;color:var(--color-muted)}.wpn-table .c{text-align:center}.wpn-table td.c{font-family:var(--font-mono);white-space:nowrap}.wpn-table .s{color:var(--color-ok)}.wpn-table .m{color:var(--color-steel)}.wpn-table .l{color:var(--color-critical)}.wpn-table td.dmg{color:var(--color-text)}.wpn-name{font-family:var(--font-mono);color:var(--color-text);white-space:nowrap}.wpn-group th{padding-top:.7rem;border-bottom:none;color:var(--color-steel);text-transform:none;letter-spacing:.04em}.wpn-heat{color:var(--color-warning)}.wpn-ammo{color:var(--color-muted)}";var Rs=Object.defineProperty,As=Object.getOwnPropertyDescriptor,qe=(e,t,r,a)=>{for(var s=a>1?void 0:a?As(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&Rs(t,r,s),s};let de=class extends y{constructor(){super(...arguments),this.open=!1}updated(e){!e.has("open")||!this.dialog||(this.open&&!this.dialog.open&&this.dialog.showModal(),!this.open&&this.dialog.open&&this.dialog.close())}close(){this.dispatchEvent(new CustomEvent("close-rules",{bubbles:!0,composed:!0}))}render(){return l`<dialog
      @cancel=${e=>{e.preventDefault(),this.close()}}
      @click=${e=>{e.stopPropagation(),e.target===this.dialog&&this.close()}}
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
            ${ws}
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
            <ul class="mods">
              <li>
                <span class="mod minus">−1</span> hex to the chosen mode's speed while the
                mech is Overheated or Critical
              </li>
            </ul>
            ${$s}
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
            ${xs}
            <p>
              A hit carries the <strong>DMG</strong> of the weapon that threw it, so roll
              <strong>DMG 1</strong> and <strong>DMG 2</strong> weapons as two
              <strong>different dice</strong> — a colour or a size — and every die in the
              pool still shows the damage it deals when hits reach ⑤.
            </p>
            ${_s}

            <h4>② Attack roll</h4>
            <p>
              Roll the whole pool. Each die that
              <strong>meets the target number</strong> is a hit. The TN is set by how the
              <em>attacker</em> moved this turn:
            </p>
            <dl class="modes">
              <dt>Stood still</dt>
              <dd>${D(2)}</dd>
              <dt>Move</dt>
              <dd>${D(3)}</dd>
              <dt>Run / Jump</dt>
              <dd>${D(4)}</dd>
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
              <dd>${D(5)}</dd>
              <dt>Move</dt>
              <dd>${D(4)}</dd>
              <dt>Run 6 hexes/ Jump</dt>
              <dd>${D(3)}</dd>
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
                  <td><span class="loc-roll">${_(1)}</span></td>
                  <td>Legs</td>
                </tr>
                <tr>
                  <td><span class="loc-roll">${_(2)}</span></td>
                  <td>Left arm</td>
                </tr>
                <tr>
                  <td><span class="loc-roll">${_(3)}</span></td>
                  <td>Right arm</td>
                </tr>
                <tr>
                  <td>
                    <span class="loc-roll">${_(4)}${_(5)}</span>
                  </td>
                  <td>Torso</td>
                </tr>
                <tr>
                  <td><span class="loc-roll">${_(6)}</span></td>
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

            ${ks}
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
    </dialog>`}};de.styles=[R,k(Cs)];qe([p({type:Boolean})],de.prototype,"open",2);qe([T("dialog")],de.prototype,"dialog",2);de=qe([C("rules-panel")],de);var Es=Object.defineProperty,Ls=Object.getOwnPropertyDescriptor,P=(e,t,r,a)=>{for(var s=a>1?void 0:a?Ls(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(s=(a?i(t,r,s):i(s))||s);return a&&s&&Es(t,r,s),s};const mt="hekmek-saved-rosters",Ps=1.41421356237,pt=40;let x=class extends y{constructor(){super(...arguments),this.cards=[],this.savedRosters=[],this.dataError="",this.showManage=!1,this.showRules=!1,this.activeCard=0,this.undoStack=[],this.taken=new Map,this.undoing=!1,this.canUndo=!1,this.scrollFrame=0,this.onViewportResize=()=>this.updateCardScale(),this.onCardsScroll=()=>{this.scrollFrame||(this.scrollFrame=requestAnimationFrame(()=>{this.scrollFrame=0;const e=this.renderRoot.querySelector(".cards");if(!e)return;const t=e.getBoundingClientRect().top+e.clientHeight/2;let r=0,a=1/0;e.querySelectorAll(".card-slide").forEach((s,o)=>{const i=s.getBoundingClientRect(),n=Math.abs(i.top+i.height/2-t);n<a&&(a=n,r=o)}),this.activeCard=r}))},this.onKeyDown=e=>{e.key==="Escape"&&(this.showManage=!1,this.showRules=!1),(e.ctrlKey||e.metaKey)&&!e.shiftKey&&e.key==="z"&&(e.preventDefault(),this.undo())},this.deadIds=new Set,this.onRosterDamage=()=>{this.recordChanges(),this.refreshRailFigures(),this.sinkDestroyedCards(),this.requestUpdate()},this.undo=()=>{var r;const e=this.undoStack.pop();if(this.canUndo=this.undoStack.length>0,!e)return;const t=this.cards.find(a=>a.id===e.id);t&&(this.undoing=!0,Sr(t,e.snapshot),this.taken.set(t.id,Le(t)),(r=this.mechCards)==null||r.forEach(a=>{var s;((s=a.card)==null?void 0:s.id)===t.id&&a.refresh()}),this.refreshRailFigures(),this.markDestroyed(),this.requestUpdate(),this.undoing=!1)},this.refreshRailFigures=()=>{var e;(e=this.railFigures)==null||e.forEach(t=>t.requestUpdate())},this.onCardsWheel=e=>{const t=e.currentTarget;e.deltaY===0||t.scrollWidth<=t.clientWidth||(e.preventDefault(),t.scrollLeft+=Math.sign(e.deltaY)*400)}}connectedCallback(){var e;super.connectedCallback(),this.initialize(),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("resize",this.onViewportResize),(e=window.visualViewport)==null||e.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){var e,t,r;super.disconnectedCallback(),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("resize",this.onViewportResize),(e=window.visualViewport)==null||e.removeEventListener("resize",this.onViewportResize),(t=this.cardScaleObserver)==null||t.disconnect(),(r=this.renderRoot.querySelector(".cards"))==null||r.removeEventListener("scroll",this.onCardsScroll),this.scrollFrame&&cancelAnimationFrame(this.scrollFrame)}firstUpdated(){const e=this.renderRoot.querySelector(".cards");e&&(this.cardScaleObserver=new ResizeObserver(()=>this.updateCardScale()),this.cardScaleObserver.observe(e),e.addEventListener("scroll",this.onCardsScroll,{passive:!0}))}scrollToCard(e){const t=this.renderRoot.querySelector(".cards"),r=t==null?void 0:t.querySelectorAll(".card-slide")[e];!t||!r||(t.scrollTop+=r.getBoundingClientRect().top-t.getBoundingClientRect().top)}updated(){this.updateCardScale(),this.onCardsScroll()}updateCardScale(){var m,f;const e=this.renderRoot.querySelector(".cards"),t=e==null?void 0:e.querySelector("mech-card");if(!e||!t||!t.offsetWidth)return;if(!window.matchMedia("(max-width: 818px)").matches){e.style.removeProperty("--card-scale"),e.style.removeProperty("--cards-fit-height");return}const a=t.offsetWidth,s=a*Ps,o=getComputedStyle(e),i=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),d=((m=this.renderRoot.querySelector("app-header"))==null?void 0:m.getBoundingClientRect().height)??0,h=((f=window.visualViewport)==null?void 0:f.height)??window.innerHeight,u=e.clientWidth-i,c=h-d-n,g=Math.max(0,Math.min(u/a,c/s));e.style.setProperty("--card-scale",String(g)),e.style.setProperty("--cards-fit-height",`${Math.max(0,h-d)}px`)}async initialize(){this.dataError="";try{this.savedRosters=this.loadSavedRosters();const e=this.savedRosters.find(t=>t.cards.length>0);e&&(this.cards=e.cards.map(it).filter(t=>t!==void 0),this.markDestroyed()),this.resetUndo()}catch(e){this.cards=[],this.dataError=e instanceof Error?e.message:"Unable to load required game data."}}onAddCard(e){var a;const t=(a=e.detail)==null?void 0:a.variant,r=Oe.find(s=>s.variant===t);r&&(this.cards=[...this.cards,xt(r)])}onRemoveCard(e){this.cards=this.cards.filter(t=>t.id!==e.detail.id)}static move(e,t,r){if(t===r||t<0||r<0||t>=e.length||r>=e.length)return e;const a=[...e],[s]=a.splice(t,1);return a.splice(r,0,s),a}onReorderCards(e){this.cards=x.move(this.cards,e.detail.from,e.detail.to)}onReorderRosters(e){this.savedRosters=x.move(this.savedRosters,e.detail.from,e.detail.to),this.persistSavedRosters()}onRepairCard(e){var s;const t=(s=e.detail)==null?void 0:s.id;if(!t)return;const r=this.renderRoot.querySelectorAll("mech-card"),a=Array.from(r).find(o=>{var i;return((i=o.card)==null?void 0:i.id)===t});a&&(a.repairMech(),this.cards=[...this.cards],this.refreshRailFigures(),this.markDestroyed())}markDestroyed(){this.deadIds=new Set(this.cards.filter(fe).map(e=>e.id))}sinkDestroyedCards(){const e=this.cards.filter(r=>fe(r)&&!this.deadIds.has(r.id));if(this.markDestroyed(),!e.length)return;const t=new Set(e.map(r=>r.id));this.cards=[...this.cards.filter(r=>!t.has(r.id)),...e]}recordChanges(){if(!this.undoing){for(const e of this.cards){const t=Le(e),r=this.taken.get(e.id);this.taken.set(e.id,t),!(!r||_r(r,t))&&this.undoStack.push({id:e.id,snapshot:r})}this.undoStack.length>pt&&this.undoStack.splice(0,this.undoStack.length-pt),this.canUndo=this.undoStack.length>0}}resetUndo(){this.undoStack=[],this.taken=new Map(this.cards.map(e=>[e.id,Le(e)])),this.canUndo=!1}exportRoster(e,t=""){const r=e?this.savedRosters.find(o=>o.id===e):{name:t||"Roster",cards:this.cards.map(Ee)};if(!(r!=null&&r.cards.length))return;const a=URL.createObjectURL(new Blob([yr(r)],{type:"application/json"})),s=document.createElement("a");s.href=a,s.download=wr(r.name),s.click(),URL.revokeObjectURL(a)}importRosters(e){let t;try{t=kr(e)}catch(a){this.dataError=a instanceof Error?a.message:"Could not read that file.";return}const r=this.savedRosters.map(a=>a.name);for(const a of t)a.name=lt(a.name,r),r.push(a.name);this.dataError="",this.savedRosters=[...t,...this.savedRosters],this.persistSavedRosters()}loadSavedRosters(){try{const e=window.localStorage.getItem(mt);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t.filter(r=>r&&typeof r=="object"&&typeof r.id=="string"&&typeof r.name=="string"&&Array.isArray(r.cards)):[]}catch{return[]}}persistSavedRosters(){window.localStorage.setItem(mt,JSON.stringify(this.savedRosters))}renameRoster(e,t){const r=this.savedRosters.find(s=>s.id===e);if(!r)return;const a=this.savedRosters.filter(s=>s.id!==e).map(s=>s.name);r.name=lt(t,a),this.savedRosters=[...this.savedRosters],this.persistSavedRosters()}saveRoster(e){if(!this.cards.length)return;const t=e||`ROSTER ${this.savedRosters.length+1}`,r=this.savedRosters.find(a=>a.name.toLowerCase()===t.toLowerCase());if(r){r.cards=this.cards.map(Ee),this.savedRosters=[...this.savedRosters],this.persistSavedRosters();return}this.savedRosters=[{id:He(),name:t,cards:this.cards.map(Ee)},...this.savedRosters],this.persistSavedRosters()}render(){return l`
      <app-header
        .canUndo=${this.canUndo}
        @open-manage=${()=>this.showManage=!0}
        @open-rules=${()=>this.showRules=!0}
        @undo=${this.undo}
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
        ${this.cards.length?ot(this.cards,e=>e.id,e=>l`<div class="card-slide">
                    <mech-card .card=${e}></mech-card>
                  </div>`):l`<div class="empty">No cards loaded.</div>`}
      </main>

      ${this.cards.length>1&&!this.showManage&&!this.showRules?l`<nav class="card-rail" aria-label="Jump to card">
              ${ot(this.cards,e=>e.id,(e,t)=>{const r=t===Math.min(this.activeCard,this.cards.length-1);return l`<button
                    type="button"
                    class="rail-dot state-${_t(e)} ${r?"active":""}"
                    title=${e.name}
                    aria-label=${e.name}
                    aria-current=${r?"true":"false"}
                    @click=${()=>this.scrollToCard(t)}
                  >
                    <mech-figure .card=${e}></mech-figure>
                  </button>`})}
            </nav>`:""}

      <aside-panel
        .open=${this.showManage}
        .loadouts=${Oe}
        .cards=${this.cards}
        .savedRosters=${this.savedRosters}
        @close-manage=${()=>this.showManage=!1}
        @add-card=${this.onAddCard}
        @remove-card=${this.onRemoveCard}
        @repair-card=${this.onRepairCard}
        @reorder-cards=${this.onReorderCards}
        @reorder-rosters=${this.onReorderRosters}
        @save-roster=${e=>this.saveRoster(e.detail.name)}
        @rename-roster=${e=>this.renameRoster(e.detail.id,e.detail.name)}
        @export-roster=${e=>this.exportRoster(e.detail.id,e.detail.name)}
        @import-rosters=${e=>this.importRosters(e.detail.text)}
        @save-roster-as=${e=>{const t=this.savedRosters.find(r=>r.id===e.detail.id);t&&this.saveRoster(t.name)}}
        @load-roster=${e=>{const t=this.savedRosters.find(r=>r.id===e.detail.id);t&&(this.cards=t.cards.map(it).filter(r=>r!==void 0),this.markDestroyed(),this.resetUndo(),this.showManage=!1)}}
        @delete-roster=${e=>{this.savedRosters=this.savedRosters.filter(t=>t.id!==e.detail.id),this.persistSavedRosters()}}
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
    `}};x.styles=[R,k(Rr)];P([b()],x.prototype,"cards",2);P([b()],x.prototype,"savedRosters",2);P([b()],x.prototype,"dataError",2);P([b()],x.prototype,"showManage",2);P([b()],x.prototype,"showRules",2);P([b()],x.prototype,"activeCard",2);P([ye(".rail-dot mech-figure")],x.prototype,"railFigures",2);P([ye("mech-card")],x.prototype,"mechCards",2);P([b()],x.prototype,"canUndo",2);x=P([C("app-root")],x);
