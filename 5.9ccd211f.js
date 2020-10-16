/*! For license information please see 5.9ccd211f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1025:function(e,t,a){"use strict";var n=a(0),r=a(1028);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},1027:function(e,t,a){"use strict";var n,r=a(2),o=a(6),c=a(0),l=a.n(c),i=a(1018),s=a(1019),u=a(1020);var d=function(){if(void 0!==n)return n;var e=!1,t={get passive(){e=!0}},a=function(){};return window.addEventListener("t",a,t),window.removeEventListener("t",a,t),n=e,e},f=c.useLayoutEffect,m=function(e){var t=Object(c.useRef)(e);return f((function(){t.current=e})),t},h="touchstart",v=["mousedown",h],b=function(e){if(e===h)return d()?{passive:!0}:void 0};var p=function(e,t){var a=m(t);Object(c.useEffect)((function(){if(t){var n=function(t){e.current&&a.current&&!e.current.contains(t.target)&&a.current(t)};return v.forEach((function(e){document.addEventListener(e,n,b(e))})),function(){v.forEach((function(e){document.removeEventListener(e,n,b(e))}))}}}),[!t])};function g(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,i=e.label,d=e.activeClassName,f=void 0===d?"navbar__link--active":d,m=e.prependBaseUrlToHref,h=Object(o.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(u.a)(n),b=Object(u.a)(t),p=Object(u.a)(c,{forcePrependBaseUrl:!0});return l.a.createElement(s.a,Object(r.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:m?p:c}:Object.assign({isNavLink:!0,activeClassName:f,to:v},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(b)}}:null),h),i)}function k(e){var t=e.items,a=e.position,n=e.className,s=Object(o.a)(e,["items","position","className"]),u=l.a.useRef(null),d=l.a.useRef(null),f=Object(c.useState)(!1),m=f[0],h=f[1];function v(e){if(e){var t,a,n=null==d||null===(t=d.current)||void 0===t||null===(a=t.firstChild)||void 0===a?void 0:a.firstChild;n&&n.focus()}h(e)}p(u,(function(){return v(!1)}));var b=function(e,t){return void 0===t&&(t=!1),Object(i.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?l.a.createElement("div",{ref:u,className:Object(i.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":m})},l.a.createElement(g,Object(r.a)({className:b(n)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){("Enter"===e.key&&!s.to||"Tab"===e.key)&&(e.preventDefault(),v(!0))}}),s.label),l.a.createElement("ul",{ref:d,className:"dropdown__menu"},t.map((function(e,a){var n=e.className,c=Object(o.a)(e,["className"]);return l.a.createElement("li",{key:a},l.a.createElement(g,Object(r.a)({onKeyDown:function(e){a===t.length-1&&"Tab"===e.key&&(e.preventDefault(),v(!1))},activeClassName:"dropdown__link--active",className:b(n,!0)},c)))})))):l.a.createElement(g,Object(r.a)({className:b(n)},s))}function E(e){var t=e.items,a=(e.position,e.className),n=Object(o.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),Object(i.a)("menu__link",{"menu__link--sublist":t},e)};return t?l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(g,Object(r.a)({className:c(a,!0)},n),n.label),l.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,i=Object(o.a)(e,["className"]);return l.a.createElement("li",{className:"menu__list-item",key:t},l.a.createElement(g,Object(r.a)({activeClassName:"menu__link--active",className:c(a)},i,{onClick:n.onClick})))})))):l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(g,Object(r.a)({className:c(a)},n)))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(o.a)(e,["mobile"]),r=a?E:k;return l.a.createElement(r,n)}},1028:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},1029:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},1030:function(e,t,a){"use strict";var n=a(0),r=a(1029);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1031:function(e,t,a){"use strict";var n=a(0),r=a(9),o=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(o()),r=a[0],c=a[1],l=function(){var t=o();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r}},1032:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},1033:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),o=a[0],c=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){c(t())}}),[]),o}},1034:function(e,t,a){"use strict";var n=a(1017),r=a(1025),o=a(1020),c=a(1021);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).navbar,l=(a=void 0===a?{}:a).logo,i=void 0===l?{}:l,s=Object(r.a)().isDarkTheme,u=Object(o.a)(i.href||"/"),d={};i.target?d={target:i.target}:Object(c.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var f=i.srcDark&&s?i.srcDark:i.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(o.a)(f),logoAlt:i.alt}}},1035:function(e,t,a){"use strict";var n=a(2),r=a(0),o=a.n(r),c=a(1018),l=a(1024),i=a(1017),s=a(1020),u=a(9),d="light",f="dark",m=function(e){return e===f?f:d},h=function(){return u.a.canUseDOM?m(document.documentElement.getAttribute("data-theme")):d},v=function(e){try{localStorage.setItem("theme",m(e))}catch(t){console.error(t)}},b=function(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).colorMode,n=(a=void 0===a?{}:a).disableSwitch,o=void 0!==n&&n,c=Object(r.useState)(h),l=c[0],s=c[1],u=Object(r.useCallback)((function(){s(d),v(d)}),[]),b=Object(r.useCallback)((function(){s(f),v(f)}),[]);return Object(r.useEffect)((function(){document.documentElement.setAttribute("data-theme",m(l))}),[l]),Object(r.useEffect)((function(){if(!o)try{var e=localStorage.getItem("theme");null!==e&&s(m(e))}catch(t){console.error(t)}}),[s]),Object(r.useEffect)((function(){o||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;s(t?f:d)}))}),[]),{isDarkTheme:l===f,setLightTheme:u,setDarkTheme:b}},p=a(1028);var g=function(e){var t=b(),a=t.isDarkTheme,n=t.setLightTheme,r=t.setDarkTheme;return o.a.createElement(p.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:r}},e.children)},k="docusaurus.tab.",E=function(){var e=Object(r.useState)({}),t=e[0],a=e[1],n=Object(r.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(r.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith(k))e[n.substring(k.length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),n(e,t)}}},O="docusaurus.announcement.dismiss",j="docusaurus.announcement.id",y=function(){var e=Object(i.a)().siteConfig.themeConfig.announcementBar,t=Object(r.useState)(!0),a=t[0],n=t[1],o=Object(r.useCallback)((function(){localStorage.setItem(O,"true"),n(!0)}),[]);return Object(r.useEffect)((function(){if(e){var t=e.id,a=localStorage.getItem(j);"annoucement-bar"===a&&(a="announcement-bar");var r=t!==a;localStorage.setItem(j,t),r&&localStorage.setItem(O,"false"),(r||"false"===localStorage.getItem(O))&&n(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:o}},_=a(1029);var w=function(e){var t=E(),a=t.tabGroupChoices,n=t.setTabGroupChoices,r=y(),c=r.isAnnouncementBarClosed,l=r.closeAnnouncementBar;return o.a.createElement(_.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:c,closeAnnouncementBar:l}},e.children)},C=a(1030),N=a(50),S=a.n(N);var T=function(){var e,t=Object(i.a)().siteConfig,a=(t=void 0===t?{}:t).themeConfig,n=(a=void 0===a?{}:a).announcementBar,r=void 0===n?{}:n,l=r.content,s=r.backgroundColor,u=r.textColor,d=r.isCloseable,f=Object(C.a)(),m=f.isAnnouncementBarClosed,h=f.closeAnnouncementBar;return!l||d&&m?null:o.a.createElement("div",{className:S.a.announcementBar,style:{backgroundColor:s,color:u},role:"banner"},o.a.createElement("div",{className:Object(c.a)(S.a.announcementBarContent,(e={},e[S.a.announcementBarCloseable]=d,e)),dangerouslySetInnerHTML:{__html:l}}),d?o.a.createElement("button",{type:"button",className:S.a.announcementBarClose,onClick:h,"aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},L=a(1019),B=function(){return null},x=a(1040),I=a.n(x),D=a(51),P=a.n(D),M=function(e){var t=e.icon,a=e.style;return o.a.createElement("span",{className:Object(c.a)(P.a.toggle,P.a.dark),style:a},t)},A=function(e){var t=e.icon,a=e.style;return o.a.createElement("span",{className:Object(c.a)(P.a.toggle,P.a.light),style:a},t)},X=function(e){var t=Object(i.a)(),a=t.siteConfig.themeConfig.colorMode.switchConfig,r=a.darkIcon,c=a.darkIconStyle,l=a.lightIcon,s=a.lightIconStyle,u=t.isClient;return o.a.createElement(I.a,Object(n.a)({disabled:!u,icons:{checked:o.a.createElement(M,{icon:r,style:c}),unchecked:o.a.createElement(A,{icon:l,style:s})}},e))},F=a(1025),U=a(1022);var R=function(e){var t=Object(r.useState)(e),a=t[0],n=t[1];return Object(r.useEffect)((function(){var e=function(){return n(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,n]},V=a(1031),H=function(e){var t=Object(r.useState)(!0),a=t[0],n=t[1],o=Object(r.useState)(!1),c=o[0],l=o[1],i=Object(r.useState)(0),s=i[0],u=i[1],d=Object(r.useState)(0),f=d[0],m=d[1],h=Object(r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]),v=Object(U.useLocation)(),b=R(v.hash),p=b[0],g=b[1];return Object(V.a)((function(t){var a=t.scrollY;if(e&&(0===a&&n(!0),!(a<f))){if(c)return l(!1),n(!1),void u(a);var r=document.documentElement.scrollHeight-f,o=window.innerHeight;s&&a>=s?n(!1):a+o<r&&n(!0),u(a)}}),[s,f]),Object(r.useEffect)((function(){e&&(n(!0),g(v.hash))}),[v]),Object(r.useEffect)((function(){e&&p&&l(!0)}),[p]),{navbarRef:h,isNavbarVisible:a}},G=a(1032),W=a(1033),Y=a(1034),K=a(52),z=a.n(K),J=a(6),q=a(1027),Q={default:function(){return q.a},docsVersion:function(){return a(1045).default},docsVersionDropdown:function(){return a(1049).default}};function Z(e){var t=e.type,a=Object(J.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=Q[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return o.a.createElement(n,a)}var $="right";var ee=function(){var e,t,a=Object(i.a)(),l=a.siteConfig.themeConfig,s=l.navbar,u=(s=void 0===s?{}:s).title,d=void 0===u?"":u,f=s.items,m=void 0===f?[]:f,h=s.hideOnScroll,v=void 0!==h&&h,b=s.style,p=void 0===b?void 0:b,g=l.colorMode,k=(g=void 0===g?{}:g).disableSwitch,E=void 0!==k&&k,O=a.isClient,j=Object(r.useState)(!1),y=j[0],_=j[1],w=Object(r.useState)(!1),C=w[0],N=w[1],S=Object(F.a)(),T=S.isDarkTheme,x=S.setLightTheme,I=S.setDarkTheme,D=H(v),P=D.navbarRef,M=D.isNavbarVisible,A=Object(Y.a)(),U=A.logoLink,R=A.logoLinkProps,V=A.logoImageUrl,K=A.logoAlt;Object(G.a)(y);var J=Object(r.useCallback)((function(){_(!0)}),[_]),q=Object(r.useCallback)((function(){_(!1)}),[_]),Q=Object(r.useCallback)((function(e){return e.target.checked?I():x()}),[x,I]),ee=Object(W.a)();Object(r.useEffect)((function(){ee===W.b.desktop&&_(!1)}),[ee]);var te=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:$)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:$)}))}}(m),ae=te.leftItems,ne=te.rightItems;return o.a.createElement("nav",{ref:P,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===p,"navbar--primary":"primary"===p,"navbar-sidebar--show":y},e[z.a.navbarHideable]=v,e[z.a.navbarHidden]=!M,e))},o.a.createElement("div",{className:"navbar__inner"},o.a.createElement("div",{className:"navbar__items"},null!=m&&0!==m.length&&o.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:J,onKeyDown:J},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),o.a.createElement(L.a,Object(n.a)({className:"navbar__brand",to:U},R),null!=V&&o.a.createElement("img",{key:O,className:"navbar__logo",src:V,alt:K}),null!=d&&o.a.createElement("strong",{className:Object(c.a)("navbar__title",(t={},t[z.a.hideLogoText]=C,t))},d)),ae.map((function(e,t){return o.a.createElement(Z,Object(n.a)({},e,{key:t}))}))),o.a.createElement("div",{className:"navbar__items navbar__items--right"},ne.map((function(e,t){return o.a.createElement(Z,Object(n.a)({},e,{key:t}))})),!E&&o.a.createElement(X,{className:z.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:Q}),o.a.createElement(B,{handleSearchBarToggle:N,isSearchBarExpanded:C}))),o.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:q}),o.a.createElement("div",{className:"navbar-sidebar"},o.a.createElement("div",{className:"navbar-sidebar__brand"},o.a.createElement(L.a,Object(n.a)({className:"navbar__brand",onClick:q,to:U},R),null!=V&&o.a.createElement("img",{key:O,className:"navbar__logo",src:V,alt:K}),null!=d&&o.a.createElement("strong",{className:"navbar__title"},d)),!E&&y&&o.a.createElement(X,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:Q})),o.a.createElement("div",{className:"navbar-sidebar__items"},o.a.createElement("div",{className:"menu"},o.a.createElement("ul",{className:"menu__list"},m.map((function(e,t){return o.a.createElement(Z,Object(n.a)({mobile:!0},e,{onClick:q,key:t}))})))))))},te=a(53),ae=a.n(te);function ne(e){var t=e.to,a=e.href,r=e.label,c=e.prependBaseUrlToHref,l=Object(J.a)(e,["to","href","label","prependBaseUrlToHref"]),i=Object(s.a)(t),u=Object(s.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(L.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?u:a}:{to:i},l),r)}var re=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var oe=function(){var e=Object(i.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,l=n.links,u=void 0===l?[]:l,d=n.logo,f=void 0===d?{}:d,m=Object(s.a)(f.src);return a?o.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===a.style})},o.a.createElement("div",{className:"container"},u&&u.length>0&&o.a.createElement("div",{className:"row footer__links"},u.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(ne,e))}))):null)}))),(f||r)&&o.a.createElement("div",{className:"text--center"},f&&f.src&&o.a.createElement("div",{className:"margin-bottom--sm"},f.href?o.a.createElement("a",{href:f.href,target:"_blank",rel:"noopener noreferrer",className:ae.a.footerLogoLink},o.a.createElement(re,{alt:f.alt,url:m})):o.a.createElement(re,{alt:f.alt,url:m})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null};a(54);function ce(e){var t=e.children;return o.a.createElement(g,null,o.a.createElement(w,null,t))}t.a=function(e){var t=Object(i.a)().siteConfig,a=t.favicon,r=t.title,u=t.themeConfig,d=u.image,f=u.metadatas,m=t.url,h=t.titleDelimiter,v=e.children,b=e.title,p=e.noFooter,g=e.description,k=e.image,E=e.keywords,O=e.permalink,j=e.wrapperClassName,y=b?b+" "+h+" "+r:r,_=k||d,w=Object(s.a)(_,{absolute:!0}),C=Object(s.a)(a);return o.a.createElement(ce,null,o.a.createElement(l.a,null,o.a.createElement("html",{lang:"en"}),y&&o.a.createElement("title",null,y),y&&o.a.createElement("meta",{property:"og:title",content:y}),a&&o.a.createElement("link",{rel:"shortcut icon",href:C}),g&&o.a.createElement("meta",{name:"description",content:g}),g&&o.a.createElement("meta",{property:"og:description",content:g}),E&&E.length&&o.a.createElement("meta",{name:"keywords",content:E.join(",")}),_&&o.a.createElement("meta",{property:"og:image",content:w}),_&&o.a.createElement("meta",{property:"twitter:image",content:w}),_&&o.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y}),O&&o.a.createElement("meta",{property:"og:url",content:m+O}),O&&o.a.createElement("link",{rel:"canonical",href:m+O}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o.a.createElement(l.a,null,f.map((function(e,t){return o.a.createElement("meta",Object(n.a)({key:"metadata_"+t},e))}))),o.a.createElement(T,null),o.a.createElement(ee,null),o.a.createElement("div",{className:Object(c.a)("main-wrapper",j)},v),!p&&o.a.createElement(oe,null))}},1036:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1035);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},1040:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),c=f(o),l=f(a(1041)),i=f(a(7)),s=f(a(1042)),u=f(a(1043)),d=a(1044);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),o=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},1041:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},1042:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},1043:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},1044:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},1045:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),o=a(0),c=a.n(o),l=a(1027),i=a(1023);function s(e){var t=e.label,a=e.to,o=e.docsPluginId,s=Object(r.a)(e,["label","to","docsPluginId"]),u=Object(i.useActiveVersion)(o),d=Object(i.useLatestVersion)(o),f=null!=u?u:d,m=null!=t?t:f.label,h=null!=a?a:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(f).path;return c.a.createElement(l.a,Object(n.a)({},s,{label:m,to:h}))}},1049:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),o=a(0),c=a.n(o),l=a(1027),i=a(1023),s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function u(e){var t,a=e.mobile,o=e.docsPluginId,u=Object(r.a)(e,["mobile","docsPluginId"]),d=Object(i.useActiveDocContext)(o),f=Object(i.useVersions)(o),m=Object(i.useLatestVersion)(o);var h=null!==(t=d.activeVersion)&&void 0!==t?t:m,v=a?"Versions":h.label,b=a?void 0:s(h).path;return c.a.createElement(l.a,Object(n.a)({},u,{mobile:a,label:v,to:b,items:function(){if(!(f.length<=1))return f.map((function(e){var t=(null==d?void 0:d.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==d?void 0:d.activeVersion)}}}))}()}))}}}]);