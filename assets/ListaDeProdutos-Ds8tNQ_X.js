import{j as c,L as Y,g as H,r as S,R,a as oe}from"./index-CdejFm4q.js";import{F as ie}from"./Footer-Csc9Ols1.js";const ae="/best-crochet/assets/banner_best_crochet.png_1-Cmpz9y-O.jpg",se="/best-crochet/assets/banner_best_crochet.png_2-CG5LfiJm.jpg",ce="/best-crochet/assets/banner_best_crochet.png_3-BKi2YW_P.jpg",le="/best-crochet/assets/banner_best_crochet.png_4-BBDQMLp2.jpg",ue=t=>c.jsxs("div",{className:"item",children:[c.jsx(Y,{to:`/product/${t.id}`,children:c.jsx("img",{className:"img-item-display",src:t.img,alt:t.name})}),c.jsx("p",{children:t.name}),c.jsxs("div",{className:"info-itens",children:[c.jsx("p",{id:"preco-embaixo",children:c.jsxs("span",{className:"preco-novo",children:["R$",t.new_price.toFixed(2)]})}),c.jsx(Y,{to:`/product/${t.id}`,children:c.jsx("button",{id:"btn-comprar",type:"button",children:"Comprar"})})]})]});var X={exports:{}},fe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",de=fe,pe=de;function J(){}function Q(){}Q.resetWarningCache=J;var me=function(){function t(r,o,i,f,s,l){if(l!==pe){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Q,resetWarningCache:J};return n.PropTypes=n,n};X.exports=me();var he=X.exports;const v=H(he);function ve(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Z=S,Te=ve(Z);function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ge(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var ye=!!(typeof window<"u"&&window.document&&window.document.createElement);function Ee(t,e,n){if(typeof t!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(i){if(typeof i!="function")throw new Error("Expected WrappedComponent to be a React component.");var f=[],s;function l(){s=t(f.map(function(u){return u.props})),a.canUseDOM?e(s):n&&(s=n(s))}var a=function(u){ge(p,u);function p(){return u.apply(this,arguments)||this}p.peek=function(){return s},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var y=s;return s=void 0,f=[],y};var m=p.prototype;return m.UNSAFE_componentWillMount=function(){f.push(this),l()},m.componentDidUpdate=function(){l()},m.componentWillUnmount=function(){var y=f.indexOf(this);f.splice(y,1),l()},m.render=function(){return Te.createElement(i,this.props)},p}(Z.PureComponent);return $(a,"displayName","SideEffect("+r(i)+")"),$(a,"canUseDOM",ye),a}}var be=Ee;const Ae=H(be);var je=typeof Element<"u",xe=typeof Map=="function",Oe=typeof Set=="function",Ce=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function I(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,o;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!I(t[r],e[r]))return!1;return!0}var i;if(xe&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!I(r.value[1],e.get(r.value[0])))return!1;return!0}if(Oe&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Ce&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(o=Object.keys(t),n=o.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[r]))return!1;if(je&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&t.$$typeof)&&!I(t[o[r]],e[o[r]]))return!1;return!0}return t!==t&&e!==e}var Se=function(e,n){try{return I(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const we=H(Se);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var G=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;function Ne(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Re(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(i){return e[i]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(i){o[i]=i}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Le=Re()?Object.assign:function(t,e){for(var n,r=Ne(t),o,i=1;i<arguments.length;i++){n=Object(arguments[i]);for(var f in n)Pe.call(n,f)&&(r[f]=n[f]);if(G){o=G(n);for(var s=0;s<o.length;s++)_e.call(n,o[s])&&(r[o[s]]=n[o[s]])}}return r};const Ie=H(Le);var O={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},d={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(d).map(function(t){return d[t]});var T={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},Me=Object.keys(M).reduce(function(t,e){return t[M[e]]=e,t},{}),He=[d.NOSCRIPT,d.SCRIPT,d.STYLE],E="data-react-helmet",ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fe=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},De=function(){function t(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Be=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},W=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},Ue=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},F=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},qe=function(e){var n=w(e,d.TITLE),r=w(e,L.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=w(e,L.DEFAULT_TITLE);return n||o||void 0},Ye=function(e){return w(e,L.ON_CHANGE_CLIENT_STATE)||function(){}},k=function(e,n){return n.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,o){return g({},r,o)},{})},$e=function(e,n){return n.filter(function(r){return typeof r[d.BASE]<"u"}).map(function(r){return r[d.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var i=Object.keys(o),f=0;f<i.length;f++){var s=i[f],l=s.toLowerCase();if(e.indexOf(l)!==-1&&o[l])return r.concat(o)}return r},[])},_=function(e,n,r){var o={};return r.filter(function(i){return Array.isArray(i[e])?!0:(typeof i[e]<"u"&&Ve("Helmet: "+e+' should be of type "Array". Instead found type "'+ke(i[e])+'"'),!1)}).map(function(i){return i[e]}).reverse().reduce(function(i,f){var s={};f.filter(function(m){for(var h=void 0,y=Object.keys(m),b=0;b<y.length;b++){var A=y[b],j=A.toLowerCase();n.indexOf(j)!==-1&&!(h===T.REL&&m[h].toLowerCase()==="canonical")&&!(j===T.REL&&m[j].toLowerCase()==="stylesheet")&&(h=j),n.indexOf(A)!==-1&&(A===T.INNER_HTML||A===T.CSS_TEXT||A===T.ITEM_PROP)&&(h=A)}if(!h||!m[h])return!1;var P=m[h].toLowerCase();return o[h]||(o[h]={}),s[h]||(s[h]={}),o[h][P]?!1:(s[h][P]=!0,!0)}).reverse().forEach(function(m){return i.push(m)});for(var l=Object.keys(s),a=0;a<l.length;a++){var u=l[a],p=Ie({},o[u],s[u]);o[u]=p}return i},[]).reverse()},w=function(e,n){for(var r=e.length-1;r>=0;r--){var o=e[r];if(o.hasOwnProperty(n))return o[n]}return null},Ge=function(e){return{baseTag:$e([T.HREF,T.TARGET],e),bodyAttributes:k(O.BODY,e),defer:w(e,L.DEFER),encode:w(e,L.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:k(O.HTML,e),linkTags:_(d.LINK,[T.REL,T.HREF],e),metaTags:_(d.META,[T.NAME,T.CHARSET,T.HTTPEQUIV,T.PROPERTY,T.ITEM_PROP],e),noscriptTags:_(d.NOSCRIPT,[T.INNER_HTML],e),onChangeClientState:Ye(e),scriptTags:_(d.SCRIPT,[T.SRC,T.INNER_HTML],e),styleTags:_(d.STYLE,[T.CSS_TEXT],e),title:qe(e),titleAttributes:k(O.TITLE,e)}},D=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){D(e)},0)}}(),z=function(e){return clearTimeout(e)},We=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||D:global.requestAnimationFrame||D,ze=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||z:global.cancelAnimationFrame||z,Ve=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},N=null,Xe=function(e){N&&ze(N),e.defer?N=We(function(){V(e,function(){N=null})}):(V(e),N=null)},V=function(e,n){var r=e.baseTag,o=e.bodyAttributes,i=e.htmlAttributes,f=e.linkTags,s=e.metaTags,l=e.noscriptTags,a=e.onChangeClientState,u=e.scriptTags,p=e.styleTags,m=e.title,h=e.titleAttributes;B(d.BODY,o),B(d.HTML,i),Je(m,h);var y={baseTag:C(d.BASE,r),linkTags:C(d.LINK,f),metaTags:C(d.META,s),noscriptTags:C(d.NOSCRIPT,l),scriptTags:C(d.SCRIPT,u),styleTags:C(d.STYLE,p)},b={},A={};Object.keys(y).forEach(function(j){var P=y[j],q=P.newTags,ne=P.oldTags;q.length&&(b[j]=q),ne.length&&(A[j]=y[j].oldTags)}),n&&n(),a(e,b,A)},K=function(e){return Array.isArray(e)?e.join(""):e},Je=function(e,n){typeof e<"u"&&document.title!==e&&(document.title=K(e)),B(d.TITLE,n)},B=function(e,n){var r=document.getElementsByTagName(e)[0];if(r){for(var o=r.getAttribute(E),i=o?o.split(","):[],f=[].concat(i),s=Object.keys(n),l=0;l<s.length;l++){var a=s[l],u=n[a]||"";r.getAttribute(a)!==u&&r.setAttribute(a,u),i.indexOf(a)===-1&&i.push(a);var p=f.indexOf(a);p!==-1&&f.splice(p,1)}for(var m=f.length-1;m>=0;m--)r.removeAttribute(f[m]);i.length===f.length?r.removeAttribute(E):r.getAttribute(E)!==s.join(",")&&r.setAttribute(E,s.join(","))}},C=function(e,n){var r=document.head||document.querySelector(d.HEAD),o=r.querySelectorAll(e+"["+E+"]"),i=Array.prototype.slice.call(o),f=[],s=void 0;return n&&n.length&&n.forEach(function(l){var a=document.createElement(e);for(var u in l)if(l.hasOwnProperty(u))if(u===T.INNER_HTML)a.innerHTML=l.innerHTML;else if(u===T.CSS_TEXT)a.styleSheet?a.styleSheet.cssText=l.cssText:a.appendChild(document.createTextNode(l.cssText));else{var p=typeof l[u]>"u"?"":l[u];a.setAttribute(u,p)}a.setAttribute(E,"true"),i.some(function(m,h){return s=h,a.isEqualNode(m)})?i.splice(s,1):f.push(a)}),i.forEach(function(l){return l.parentNode.removeChild(l)}),f.forEach(function(l){return r.appendChild(l)}),{oldTags:i,newTags:f}},ee=function(e){return Object.keys(e).reduce(function(n,r){var o=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return n?n+" "+o:o},"")},Qe=function(e,n,r,o){var i=ee(r),f=K(n);return i?"<"+e+" "+E+'="true" '+i+">"+F(f,o)+"</"+e+">":"<"+e+" "+E+'="true">'+F(f,o)+"</"+e+">"},Ze=function(e,n,r){return n.reduce(function(o,i){var f=Object.keys(i).filter(function(a){return!(a===T.INNER_HTML||a===T.CSS_TEXT)}).reduce(function(a,u){var p=typeof i[u]>"u"?u:u+'="'+F(i[u],r)+'"';return a?a+" "+p:p},""),s=i.innerHTML||i.cssText||"",l=He.indexOf(e)===-1;return o+"<"+e+" "+E+'="true" '+f+(l?"/>":">"+s+"</"+e+">")},"")},te=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[M[o]||o]=e[o],r},n)},Ke=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[Me[o]||o]=e[o],r},n)},et=function(e,n,r){var o,i=(o={key:n},o[E]=!0,o),f=te(r,i);return[R.createElement(d.TITLE,f,n)]},tt=function(e,n){return n.map(function(r,o){var i,f=(i={key:o},i[E]=!0,i);return Object.keys(r).forEach(function(s){var l=M[s]||s;if(l===T.INNER_HTML||l===T.CSS_TEXT){var a=r.innerHTML||r.cssText;f.dangerouslySetInnerHTML={__html:a}}else f[l]=r[s]}),R.createElement(e,f)})},x=function(e,n,r){switch(e){case d.TITLE:return{toComponent:function(){return et(e,n.title,n.titleAttributes)},toString:function(){return Qe(e,n.title,n.titleAttributes,r)}};case O.BODY:case O.HTML:return{toComponent:function(){return te(n)},toString:function(){return ee(n)}};default:return{toComponent:function(){return tt(e,n)},toString:function(){return Ze(e,n,r)}}}},re=function(e){var n=e.baseTag,r=e.bodyAttributes,o=e.encode,i=e.htmlAttributes,f=e.linkTags,s=e.metaTags,l=e.noscriptTags,a=e.scriptTags,u=e.styleTags,p=e.title,m=p===void 0?"":p,h=e.titleAttributes;return{base:x(d.BASE,n,o),bodyAttributes:x(O.BODY,r,o),htmlAttributes:x(O.HTML,i,o),link:x(d.LINK,f,o),meta:x(d.META,s,o),noscript:x(d.NOSCRIPT,l,o),script:x(d.SCRIPT,a,o),style:x(d.STYLE,u,o),title:x(d.TITLE,{title:m,titleAttributes:h},o)}},rt=function(e){var n,r;return r=n=function(o){Be(i,o);function i(){return Fe(this,i),Ue(this,o.apply(this,arguments))}return i.prototype.shouldComponentUpdate=function(s){return!we(this.props,s)},i.prototype.mapNestedChildrenToProps=function(s,l){if(!l)return null;switch(s.type){case d.SCRIPT:case d.NOSCRIPT:return{innerHTML:l};case d.STYLE:return{cssText:l}}throw new Error("<"+s.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},i.prototype.flattenArrayTypeChildren=function(s){var l,a=s.child,u=s.arrayTypeChildren,p=s.newChildProps,m=s.nestedChildren;return g({},u,(l={},l[a.type]=[].concat(u[a.type]||[],[g({},p,this.mapNestedChildrenToProps(a,m))]),l))},i.prototype.mapObjectTypeChildren=function(s){var l,a,u=s.child,p=s.newProps,m=s.newChildProps,h=s.nestedChildren;switch(u.type){case d.TITLE:return g({},p,(l={},l[u.type]=h,l.titleAttributes=g({},m),l));case d.BODY:return g({},p,{bodyAttributes:g({},m)});case d.HTML:return g({},p,{htmlAttributes:g({},m)})}return g({},p,(a={},a[u.type]=g({},m),a))},i.prototype.mapArrayTypeChildrenToProps=function(s,l){var a=g({},l);return Object.keys(s).forEach(function(u){var p;a=g({},a,(p={},p[u]=s[u],p))}),a},i.prototype.warnOnInvalidChildren=function(s,l){return!0},i.prototype.mapChildrenToProps=function(s,l){var a=this,u={};return R.Children.forEach(s,function(p){if(!(!p||!p.props)){var m=p.props,h=m.children,y=W(m,["children"]),b=Ke(y);switch(a.warnOnInvalidChildren(p,h),p.type){case d.LINK:case d.META:case d.NOSCRIPT:case d.SCRIPT:case d.STYLE:u=a.flattenArrayTypeChildren({child:p,arrayTypeChildren:u,newChildProps:b,nestedChildren:h});break;default:l=a.mapObjectTypeChildren({child:p,newProps:l,newChildProps:b,nestedChildren:h});break}}}),l=this.mapArrayTypeChildrenToProps(u,l),l},i.prototype.render=function(){var s=this.props,l=s.children,a=W(s,["children"]),u=g({},a);return l&&(u=this.mapChildrenToProps(l,u)),R.createElement(e,u)},De(i,null,[{key:"canUseDOM",set:function(s){e.canUseDOM=s}}]),i}(R.Component),n.propTypes={base:v.object,bodyAttributes:v.object,children:v.oneOfType([v.arrayOf(v.node),v.node]),defaultTitle:v.string,defer:v.bool,encodeSpecialCharacters:v.bool,htmlAttributes:v.object,link:v.arrayOf(v.object),meta:v.arrayOf(v.object),noscript:v.arrayOf(v.object),onChangeClientState:v.func,script:v.arrayOf(v.object),style:v.arrayOf(v.object),title:v.string,titleAttributes:v.object,titleTemplate:v.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=e.peek,n.rewind=function(){var o=e.rewind();return o||(o=re({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},nt=function(){return null},ot=Ae(Ge,Xe,re)(nt),U=rt(ot);U.renderStatic=U.rewind;const st=()=>{const[t,e]=S.useState(""),[n,r]=S.useState("sem filtro");S.useRef(null);const o=[ae,se,ce,le],[i,f]=S.useState(0);S.useEffect(()=>{const a=setInterval(()=>{f(u=>(u+1)%o.length)},2e3);return()=>clearInterval(a)},[o.length]);const s=a=>{r(a.target.value)},l=oe.filter(a=>a.name.toLowerCase().includes(t.toLowerCase())).sort((a,u)=>n==="alfabetica"?a.name.localeCompare(u.name):n==="preco"?a.new_price-u.new_price:0);return c.jsxs("div",{className:"lista-produtos-main",children:[c.jsxs(U,{children:[c.jsx("title",{children:"Best Crochet - Loja de Crochê em Joinville, SC"}),c.jsx("meta",{name:"description",content:"Explore a melhor loja de crochê artesanal em Joinville, SC. Descubra bolsas, cachecóis, cestos e muito mais. Envio rápido e várias opções de pagamento."}),c.jsx("meta",{name:"keywords",content:"crochê, artesanato, bolsas de crochê, cachecóis de crochê, cestos de crochê, loja de crochê em Joinville"})]}),c.jsxs("div",{className:"banner-container",children:[c.jsx("img",{className:"banner-img",src:o[i],alt:`Banner ${i+1}`}),c.jsx("div",{className:"banner-indicators",children:o.map((a,u)=>c.jsx("span",{className:`indicator ${u===i?"active":""}`},u))})]}),c.jsx("nav",{className:"breadcrumb-home",children:c.jsx("span",{children:"Home"})}),c.jsx("div",{className:"geral-service-conteiner",children:c.jsxs("div",{className:"service-container",children:[c.jsxs("div",{className:"service-item",children:[c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z"}),c.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),c.jsxs("div",{className:"service-text",children:[c.jsx("div",{className:"service-title",children:"LOCALIZAÇÃO PARA ENTREGAS"}),c.jsx("div",{className:"service-description",children:"Joinville e Região"})]})]}),c.jsxs("div",{className:"service-item",children:[c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M3 3h18v13H3z"}),c.jsx("path",{d:"M1 8h22"}),c.jsx("path",{d:"M3 21h18"})]}),c.jsxs("div",{className:"service-text",children:[c.jsx("div",{className:"service-title",children:"ENVIO RÁPIDO"}),c.jsx("div",{className:"service-description",children:"Enviamos rapidamente após a compra"})]})]}),c.jsxs("div",{className:"service-item",children:[c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}),c.jsx("path",{d:"M1 10h22"}),c.jsx("path",{d:"M7 6v4"}),c.jsx("path",{d:"M17 6v4"})]}),c.jsxs("div",{className:"service-text",children:[c.jsx("div",{className:"service-title",children:"PAGAMENTO FÁCIL"}),c.jsx("div",{className:"service-description",children:"Várias opções"})]})]}),c.jsxs("div",{className:"service-item",children:[c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"3",y:"11",width:"18",height:"10",rx:"2",ry:"2"}),c.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),c.jsxs("div",{className:"service-text",children:[c.jsx("div",{className:"service-title",children:"COMPRA SEGURA"}),c.jsx("div",{className:"service-description",children:"Dados Privados"})]})]})]})}),c.jsx("div",{id:"text-crochet",children:c.jsx("p",{children:"crochet"})}),c.jsx("div",{id:"global-main-header",children:c.jsx("div",{id:"global-search",children:c.jsx("div",{className:"filter-item",children:c.jsxs("select",{value:n,onChange:s,children:[c.jsx("option",{value:"sem filtro",children:"Sem Filtro"}),c.jsx("option",{value:"alfabetica",children:"Order Alfabética [A-Z]"}),c.jsx("option",{value:"preco",children:"Ordenar Por Menor Preço"})]})})})}),c.jsxs("div",{className:"conteudos-geral-lista-produtos",children:[c.jsx("h2",{className:"conteudos-titulo",children:"Todos Produtos"}),c.jsxs("p",{id:"texto-exibindo",children:["Exibindo ",l.length," resultados"]})]}),c.jsx("div",{id:"lista-de-produtos",className:"lista-de-produtos",children:l.map((a,u)=>c.jsx(ue,{id:a.id,name:a.name,img:a.img,new_price:a.new_price,old_price:a.old_price,qnt:a.qnt},u))}),c.jsx(ie,{})]})};export{st as L};
