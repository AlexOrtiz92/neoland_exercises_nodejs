(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s}));var a=n(0),r=n.n(a),o=n(19),i=n(146),c=n.n(i);function l(e){var t=e.children,n=e.title,a=void 0===n?null:n;return a=a?"".concat(a," - PokéAPI"):"PokéAPI",r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Head,null,r.a.createElement("title",null,a)),t)}function u(e){var t=e.children,n=e.title,a=void 0===n?null:n;return r.a.createElement(l,{title:a},r.a.createElement("div",{className:c.a.page},r.a.createElement("div",{className:c.a.constrain_width},t)))}function s(e){var t=e.children;return r.a.createElement("div",{className:c.a.page},r.a.createElement("div",{className:c.a.constrain_width},t))}},160:function(e){e.exports=JSON.parse('{"scheme":"tomorrow","author":"chris kempson (http://chriskempson.com)","base00":"#000000","base01":"#282a2e","base02":"#373b41","base03":"#969896","base04":"#b4b7b4","base05":"#c5c8c6","base06":"#e0e0e0","base07":"#ffffff","base08":"#cc6666","base09":"#de935f","base0A":"#f0c674","base0B":"#b5bd68","base0C":"#8abeb7","base0D":"#cccccc","base0E":"#b294bb","base0F":"#a3685a"}')},161:function(e,t){if("undefined"==typeof TextEncoder){TextEncoder=function(){},TextEncoder.prototype.encode=function(e){"use strict";for(var t=e.length,n=-1,a="undefined"==typeof Uint8Array?new Array(2*t):new Uint8Array(3*t),r=0,o=0,i=0;i!==t;){if(r=e.charCodeAt(i),i+=1,r>=55296&&r<=56319){if(i===t){a[n+=1]=239,a[n+=1]=191,a[n+=1]=189;break}if(!((o=e.charCodeAt(i))>=56320&&o<=57343)){a[n+=1]=239,a[n+=1]=191,a[n+=1]=189;continue}if(i+=1,(r=1024*(r-55296)+o-56320+65536)>65535){a[n+=1]=240|r>>>18,a[n+=1]=128|r>>>12&63,a[n+=1]=128|r>>>6&63,a[n+=1]=128|63&r;continue}}r<=127?a[n+=1]=0|r:r<=2047?(a[n+=1]=192|r>>>6,a[n+=1]=128|63&r):(a[n+=1]=224|r>>>12,a[n+=1]=128|r>>>6&63,a[n+=1]=128|63&r)}return"undefined"!=typeof Uint8Array?new Uint8Array(a.buffer.slice(0,n+1)):a.length===n+1?a:a.slice(0,n+1)},TextEncoder.prototype.toString=function(){return"[object TextEncoder]"};try{Object.defineProperty(TextEncoder.prototype,"encoding",{get:function(){if(TextEncoder.prototype.isPrototypeOf(this))return"utf-8";throw TypeError("Illegal invocation")}})}catch(n){TextEncoder.prototype.encoding="utf-8"}"undefined"!=typeof Symbol&&(TextEncoder.prototype[Symbol.toStringTag]="TextEncoder")}},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(12),r=n.n(a),o=n(0),i=n.n(o),c=n(163),l=n.n(c),u=n(160),s=n(148),m=n.n(s);n(161);function d(e){var t=e.data;return i.a.createElement(l.a,{data:t,hideRoot:!0,theme:u,shouldExpandNode:function(e,t,n){return!(Array.isArray(t)&&t.length>3||!Number.isInteger(e[0])&&Object.keys(t).length>3||Number.isInteger(e[1])&&Array.isArray(t))}})}function f(e){var t=e.data,n=Object(o.useState)(!1),a=r()(n,2),c=a[0],l=a[1],u=Object(o.useState)(!0),s=r()(u,2),f=s[0],p=s[1];Object(o.useEffect)((function(){l(!0),p(!1)}),[]);var h=JSON.stringify(t,null,2)||"",v=new TextEncoder("utf-8").encode(h).length/1e3,E=(h.match(/\r?\n/g)||"").length+1;return i.a.createElement("div",{className:m.a.jsonviewer},i.a.createElement("div",{className:m.a.json},!c||f?i.a.createElement("pre",{className:m.a.code},i.a.createElement("code",null,h)):i.a.createElement(d,{data:t})),i.a.createElement("div",{className:m.a.toolbar},i.a.createElement("label",{title:c?null:"Disabled until JavaScript loads"},i.a.createElement("input",{type:"checkbox",checked:f,disabled:!c,onChange:function(e){return p(e.target.checked)}})," ","View raw JSON (",v," kB, ",E," lines)")))}},226:function(e,t){var n=0;e.exports={resetUniqueIds:function(){n=0},enableUniqueIds:function(e){var t;arguments.length>1&&"string"!=typeof(t=arguments[1])&&(console.log("Warning: Expected string as second argument passed to `injectUniqueness`"),t=""+t);var a=e.render,r={},o=0,i=t||++n;e.render=function(){return o=0,a.apply(e)},e.nextUniqueId=function(){return++o,"id-"+i+"-"+o},e.lastUniqueId=function(){return"id-"+i+"-"+o},e.getUniqueId=function(e){return"string"!=typeof e&&(console.log("Warning: Expected string identifer passed to `getUniqueId`"),e=""+e),r[e]||(r[e]="id-"+i+"-"+e),r[e]}}}},78:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ce}));var a=n(1),r=n.n(a),o=n(20),i=n.n(o),c=n(71),l=n.n(c),u=n(0),s=n.n(u),m=n(19),d=n(22),f=n(158),p=n(12),h=n.n(p);function v(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(u.useState)(null),n=h()(t,2),a=n[0],r=n[1];function o(){var t,n=v(e.slice().reverse());try{for(n.s();!(t=n.n()).done;){var a=t.value;if(null!==a){var o=document.getElementById(a);if((null==o?void 0:o.getBoundingClientRect().top)<100)return void r(a)}}}catch(i){n.e(i)}finally{n.f()}r(null)}return Object(u.useEffect)((function(){return o(),window.addEventListener("scroll",o),window.addEventListener("resize",o),function(){window.removeEventListener("scroll",o),window.removeEventListener("resize",o)}}),[e]),a||e[0]}var b=n(147),g=n.n(b),k=n(65),w=n.n(k),I=n(66),P=n.n(I),N=n(68),A=n.n(N),S=n(70),x=n.n(S),T=n(67),D=n.n(T),O=n(69),_=n.n(O),j=n(13),C=n.n(j),R=n(226),L=n.n(R);function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=_()(e);if(t){var r=_()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return D()(this,n)}}var F=function(e){x()(n,e);var t=U(n);function n(){var e;return w()(this,n),e=t.call(this),C()(A()(e),"handleKeyDown",(function(t){var n=t.key;"ArrowDown"===n?(console.log("down"),t.preventDefault(),e.nextItem.focus()):"ArrowUp"===n?(t.preventDefault(),e.previousItem.focus()):"Home"===n?(t.preventDefault(),e.firstItem.focus()):"End"===n&&(t.preventDefault(),e.lastItem.focus())})),C()(A()(e),"addProps",(function(t){var n=e.nextUniqueId();return s.a.cloneElement(t,{id:n,key:n,ref:function(n){n&&(e.menuItems.push(n),"function"==typeof t.ref&&t.ref(n))}})})),L.a.enableUniqueIds(A()(e)),e}return P()(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){this.menuItems=[];var e=this.props.id;return s.a.createElement("ul",{id:e,className:g.a.menu},s.a.Children.map(this.props.children,this.addProps))}},{key:"firstItem",get:function(){return this.menuItems[0]}},{key:"lastItem",get:function(){return this.menuItems[this.menuItems.length-1]}},{key:"currentIndex",get:function(){return this.menuItems.findIndex((function(e){return document.activeElement.id===e.props.id}))}},{key:"nextItem",get:function(){var e=this.currentIndex;return-1!==e&&this.menuItems[e+1]||this.firstItem}},{key:"previousItem",get:function(){var e=this.currentIndex;return-1!==e&&this.menuItems[e-1]||this.lastItem}}]),n}(s.a.Component),H=n(28),q=n.n(H);function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=_()(e);if(t){var r=_()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return D()(this,n)}}var B=function(e){x()(n,e);var t=z(n);function n(){var e;w()(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),C()(A()(e),"focus",(function(){e.domNode.focus()})),C()(A()(e),"handleKeyDown",(function(t){"Enter"!==t.key&&"Space"!==t.key||e.domNode.click()})),e}return P()(n,[{key:"render",value:function(){var e,t=this,n=this.props,a=n.id,r=n.sectionId,o=n.name,i=n.isActive,c=n.done,l=n.endOfSection;return s.a.createElement("li",{className:q()((e={},C()(e,g.a.menuitem,!0),C()(e,g.a.active,i),C()(e,g.a.endofsection,l),e))},s.a.createElement("a",{ref:function(e){return t.domNode=e},id:a,onClick:c,onKeyDown:this.handleKeyDown,href:"#"+r},o||a))}}]),n}(s.a.Component);function K(e){var t=e.activeEntry,n=e.entries,a=Object(u.useState)(!1),r=h()(a,2),o=r[0],i=r[1],c=Object(u.useRef)(null),l=Object(u.useRef)(null);function m(e){o&&"Escape"===e.key&&(e.preventDefault(),f()),"ArrowDown"!==e.key||document.activeElement!==l.current||o||(e.preventDefault(),i(!0))}function d(e){o&&c.current&&!c.current.contains(e.target)&&f()}function f(){var e;i(!1),null===(e=l.current)||void 0===e||e.focus()}return Object(u.useEffect)((function(){return window.addEventListener("keydown",m),window.addEventListener("click",d),function(){window.removeEventListener("keydown",m),window.removeEventListener("click",d)}})),s.a.createElement("div",{ref:c,className:g.a.crumb},s.a.createElement("button",{ref:l,className:g.a.button,onClick:function(){return o?f():i(!0)},"aria-expanded":o,"aria-controls":"breadcrumb-menu"},t.name),o&&s.a.createElement(F,{id:"breadcrumb-menu"},n.map((function(e){return s.a.createElement(B,{key:e.id,isActive:e===t,sectionId:e.id,name:e.name,done:f,endOfSection:e.endOfSection})}))))}var J=n(154),M=n.n(J);function G(e){var t=e.entries,n=y(t.map((function(e){return e.id}))),a=t.find((function(e){return e.id===n}))||t[0];return s.a.createElement(s.a.Fragment,null,s.a.createElement(K,{activeEntry:a,entries:t}),a.children&&s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:M.a.arrow}),s.a.createElement(G,{entries:a.children})))}var W=n(155),V=n.n(W);function Y(e){var t=e.entries,n=e.hidden,a=y(t.map((function(e){return e.id})));return t.length>0?s.a.createElement("ul",{className:V.a.toc,hidden:n},t.map((function(e){return s.a.createElement(s.a.Fragment,{key:e.id},s.a.createElement($,i()({isActive:a===e.id},e)),e.endOfSection&&s.a.createElement(Q,null))}))):null}var Q=function(){return s.a.createElement("li",{className:V.a.divider+" "+V.a.entry})},$=function(e){var t,n=e.id,a=e.name,r=e.children,o=e.isActive;return s.a.createElement("li",{className:q()((t={},C()(t,V.a.entry,!0),C()(t,V.a.active,o),t))},s.a.createElement("a",{href:"#"+n},a),r&&s.a.createElement(Y,{entries:r,hidden:!o}))},X=n(156),Z=n.n(X);function ee(e){var t=e.children,n=e.toc,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(u.useState)(t),a=h()(n,2),r=a[0],o=a[1];return Object(u.useEffect)((function(){function t(e){return o(e.matches)}var n=window.matchMedia(e);return t(n),n.addListener(t),function(){n.removeListener(t)}}),[e]),r}("(max-width: 55em)",!1);return s.a.createElement("div",{className:Z.a.container},s.a.createElement("nav",{className:Z.a.nav},a?s.a.createElement("div",{className:Z.a.breadcrumbs},s.a.createElement("h2",{hidden:!0,"aria-hidden":"false"},"Contents (breadcrumbs navigation)"),s.a.createElement(G,{entries:n})):s.a.createElement("div",{className:Z.a.tableofcontents},s.a.createElement("h2",{className:Z.a.title},"Contents"),s.a.createElement(Y,{entries:n}))),s.a.createElement("div",{className:Z.a.content},t))}var te=n(162);function ne(e){return e&&e===e.toUpperCase()&&e!==e.toLowerCase()}function ae(e){return e.split("").map((function(t,n){return"_"===t&&n>0?s.a.createElement(s.a.Fragment,{key:n},"_",s.a.createElement("wbr",null)):!(n>0&&ne(t))||ne(e[n+1])&&ne(e[n-1])?t:s.a.createElement(s.a.Fragment,{key:n},s.a.createElement("wbr",null),t)}))}var re=n(157),oe=n.n(re),ie=[{description:"Node Server-side with auto caching",name:"Pokedex Promise v2",link:"https://github.com/PokeAPI/pokedex-promise-v2",author:"Thomas Asadurian and Alessandro Pezzé"},{description:"Browser-side with auto caching",name:"pokeapi-js-wrapper",link:"https://github.com/PokeAPI/pokeapi-js-wrapper",author:"Alessandro Pezzé"},{description:"Python 3 with auto caching",name:"PokeBase",link:"https://github.com/GregHilmes/pokebase",author:"Greg Hilmes"},{description:"Python 2/3 with auto caching",name:"Pokepy",link:"https://github.com/PokeAPI/pokepy",author:"Paul Hallett"},{description:"Kotlin (and Java)",name:"PokeKotlin",link:"https://github.com/PokeAPI/pokekotlin",author:"sargunster"},{description:".NET (C#, VB, etc)",name:"PokeApi.NET",link:"https://gitlab.com/PoroCYon/PokeApi.NET",author:"PoroCYon"},{description:".NET Standard",name:"PokeApiNet",link:"https://github.com/mtrdp642/PokeApiNet",author:"mtrdp642"},{description:"Swift",name:"PokemonAPI",link:"https://github.com/kinkofer/PokemonAPI",author:"kinkofer"},{description:"PHP",name:"PokePHP",link:"https://github.com/danrovito/pokephp",author:"Dan Rovito"},{description:"PHP",name:"PHPokéAPI",link:"https://github.com/lmerotta/phpokeapi",author:"lmerotta"},{description:"Ruby",name:"Poke-Api-V2",link:"https://github.com/rdavid1099/poke-api-v2",author:"rdavid1099"},{description:"Go",name:"pokeapi-go",link:"https://github.com/mtslzr/pokeapi-go",author:"mtslzr"}];function ce(){var e=Object(m.useRouteData)().docs,t=[{name:"Information",id:"info"},{name:"Fair Use Policy",id:"fairuse"},{name:"Slack",id:"slack"},{name:"Wrapper Libraries",id:"wrap",endOfSection:!0}].concat(l()(e.map((function(e){var t;return{name:e.name,id:e.id,children:null===(t=e.resources)||void 0===t?void 0:t.map((function(e){return{name:e.name,id:e.id}})),endOfSection:e.endOfSection}}))));return s.a.createElement(f.a,{title:"Documentation"},s.a.createElement(ee,{toc:t},s.a.createElement("p",null,"If you were using v1 of this API, please switch to v2 (this page). ",s.a.createElement(d.a,{to:"/docs/v1"},"Read more…")),s.a.createElement("p",null,s.a.createElement("strong",null,"Quick tip:"),' Use your browser\'s "find on page" feature to search for specific resource types (',s.a.createElement("kbd",null,"Ctrl+F")," or ",s.a.createElement("kbd",null,"Cmd+F"),")."),s.a.createElement("h2",{id:"info"},"Information"),s.a.createElement("p",null,"This is a ",s.a.createElement("strong",null,"consumption-only")," API — only the HTTP GET method is available on resources."),s.a.createElement("p",null,"No authentication is required to access this API, and all resources are fully open and available. Since the move to static hosting in November 2018, rate limiting has been removed entirely, but we still encourage you to limit the frequency of requests to limit our hosting costs."),s.a.createElement("h2",{id:"fairuse"},"Fair Use Policy"),s.a.createElement("p",null,"PokéAPI is free and open to use. It is also very popular. Because of this, we ask every developer to abide by our fair use policy. People not complying with the fair use policy will have their IP address permanently banned."),s.a.createElement("p",null,"PokéAPI is primarily an educational tool, and we will not tolerate denial of service attacks preventing people from learning."),s.a.createElement("p",null,"Rules:"),s.a.createElement("ul",null,s.a.createElement("li",null,"Locally cache resources whenever you request them."),s.a.createElement("li",null,"Be nice and friendly to your fellow PokéAPI developers.")),s.a.createElement("h2",{id:"slack"},"Slack"),s.a.createElement("p",null,"Have questions? Ideas? Notice something amiss here in the docs? Hit us up on Slack. Sign up right"," ",s.a.createElement("a",{href:"https://pokeapi-slack-invite.herokuapp.com/"},"here")," ","then visit our ",s.a.createElement("a",{href:"https://pokeapi.slack.com"},"Slack")," ","team. We encourage you to come here before opening a ticket on GitHub, so we can keep our issues nice and organized. There are also a solid group of people using the API who may already have answers or plans from experience."),s.a.createElement("h2",{id:"wrap"},"Wrapper Libraries"),s.a.createElement("ul",null,ie.map((function(e){return s.a.createElement("li",{key:e.link},s.a.createElement("strong",null,e.description),":"," ",s.a.createElement("a",{href:e.link,rel:"nofollow"},e.name)," ","by ",e.author)}))),e.map((function(e){return null===e?null:s.a.createElement(s.a.Fragment,{key:e.name},s.a.createElement("h2",{className:oe.a.title_section_name,id:e.id},e.name," ",s.a.createElement("span",{className:oe.a.section_type},"(group)")),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.htmlDescription}}),e.resources.map((function(e){return s.a.createElement(le,i()({key:e.name},e))})))}))))}function le(e){var t=e.name,n=e.id,a=e.htmlDescription,r=e.exampleRequest,o=e.exampleResponse,i=e.responseModels;return s.a.createElement(s.a.Fragment,{key:t},s.a.createElement("h3",{className:oe.a.section_name,id:n},t," ",s.a.createElement("span",{className:oe.a.section_type},"(endpoint)")),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),r&&s.a.createElement("p",{className:oe.a.resource_url},s.a.createElement("span",{className:oe.a.resource_url_method},"GET")," ",r),o&&s.a.createElement(te.a,{data:o}),i.map((function(e){return s.a.createElement(s.a.Fragment,{key:e.name},s.a.createElement("h4",{id:e.id,className:oe.a.model_name},e.name," ",s.a.createElement("span",{className:oe.a.section_type},"(type)")),s.a.createElement("table",{className:oe.a.table},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:oe.a.name_column},"Name"),s.a.createElement("th",{className:oe.a.desc_column},"Description"),s.a.createElement("th",{className:oe.a.type_column},"Type"))),s.a.createElement("tbody",null,e.fields.map((function(e){return s.a.createElement("tr",{key:e.name},s.a.createElement("td",{className:oe.a.type_column_body},ae(e.name)),s.a.createElement("td",{dangerouslySetInnerHTML:{__html:e.htmlDescription}}),s.a.createElement("td",null,s.a.createElement(se,{type:e.type})))})))))})))}var ue=["string","integer","boolean"];function se(e){var t=e.type;return ue.includes(t)?s.a.createElement("i",null,t):"object"===r()(t)?"list"===t.type?s.a.createElement(s.a.Fragment,null,"list ",s.a.createElement("i",null,s.a.createElement(se,{type:t.of}))):s.a.createElement(s.a.Fragment,null,s.a.createElement("i",null,s.a.createElement(se,{type:t.type}))," (",s.a.createElement("i",null,s.a.createElement(se,{type:t.of})),")"):s.a.createElement("a",{href:"#"+t.toLowerCase()},ae(t))}}}]);