(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1016:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=b(n),p=i,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},367:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var i=n(2),a=n(6),r=(n(0),n(1016)),c={},l={unversionedId:"TimPengembang/Pemaket/BibitPaket/Blacklist",id:"TimPengembang/Pemaket/BibitPaket/Blacklist",isDocsHomePage:!1,title:"Blacklist",description:"Bibit Paket - blacklist",source:"@site/wiki/TimPengembang/Pemaket/BibitPaket/Blacklist.md",slug:"/TimPengembang/Pemaket/BibitPaket/Blacklist",permalink:"/TimPengembang/Pemaket/BibitPaket/Blacklist",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Pemaket/BibitPaket/Blacklist.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},o=[{value:"Bibit Paket - blacklist",id:"bibit-paket---blacklist",children:[]},{value:"mdz: Packages noticed in 2004-06-14 review of germinate output",id:"mdz-packages-noticed-in-2004-06-14-review-of-germinate-output",children:[]},{value:"Packages which haven&#39;t shown up yet; make sure they don&#39;t sneak in",id:"packages-which-havent-shown-up-yet-make-sure-they-dont-sneak-in",children:[]}],s={rightToc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"bibit-paket---blacklist"},"Bibit Paket - blacklist"),Object(r.b)("h1",{id:"blacklist-gnome1"},"blacklist: gnome1"),Object(r.b)("h1",{id:"we-want-to-avoid-shipping-gnome-1x-components-if-possible"},"We want to avoid shipping GNOME 1.x components if possible"),Object(r.b)("p",null,"gconf\nlibxml\nlibcapplet\ngnome-bin\ngnome-libs"),Object(r.b)("h1",{id:"blacklist-misc"},"blacklist: misc"),Object(r.b)("h1",{id:"packages-which-are-pulled-in-incidentally-typically-by-build-dependencies"},"Packages which are pulled in incidentally (typically by build-dependencies)"),Object(r.b)("h1",{id:"and-could-be-trivially-replaced-with-something-that-we-ship"},"and could be trivially replaced with something that we ship"),Object(r.b)("h1",{id:"java-common-build-depends"},"java-common build-depends"),Object(r.b)("p",null,"#dpsyco"),Object(r.b)("h1",{id:"various-build-depends-pulls-in-lua-consider-standarizing-html-text"},"various build-depends, pulls in lua, consider standarizing html->text"),Object(r.b)("p",null,"#elinks"),Object(r.b)("h1",{id:"could-be-removed-by-getting-rid-of-chill-which-nothing-uses"},"could be removed by getting rid of CHILL, which nothing uses"),Object(r.b)("p",null,"gcc-2.95"),Object(r.b)("h1",{id:"tcl83-and-tcl84-is-more-than-enough-consider-dropping-tcl83-too"},"tcl8.3 and tcl8.4 is more than enough, consider dropping tcl8.3 too"),Object(r.b)("p",null,"tcl8.0"),Object(r.b)("h1",{id:"no-one-actually-uses-this-anymore"},"no one actually uses this anymore"),Object(r.b)("p",null,"#zephyr"),Object(r.b)("h1",{id:"mdz-2004-06-15-only-pulled-in-by-vim"},"mdz, 2004-06-15: only pulled in by vim"),Object(r.b)("p",null,"ruby1.8"),Object(r.b)("h1",{id:"blacklist-security"},"blacklist: security"),Object(r.b)("h1",{id:""}),Object(r.b)("h1",{id:"packages-which-are-not-supportable-from-a-security-standpoint"},"Packages which are not supportable from a security standpoint"),Object(r.b)("h1",{id:"-1"}),Object(r.b)("h2",{id:"mdz-packages-noticed-in-2004-06-14-review-of-germinate-output"},"mdz: Packages noticed in 2004-06-14 review of germinate output"),Object(r.b)("p",null,"uw-imap"),Object(r.b)("h1",{id:"we-shall-only-ship-current-kernel-source"},"We shall only ship current kernel-source"),Object(r.b)("p",null,"kernel-source-2.4.22\nkernel-source-2.4.23\nkernel-source-2.4.24\nkernel-source-2.4.25\nkernel-source-2.2.25"),Object(r.b)("h1",{id:"results-in-lots-of-unwanted-setuid-ness-modern-stuff-uses-x-or-fb"},"results in lots of unwanted setuid-ness; modern stuff uses X or fb"),Object(r.b)("p",null,"svgalib"),Object(r.b)("h1",{id:"we-ship-server-software-with-tls-built-in"},"we ship server software with TLS built-in"),Object(r.b)("p",null,"stunnel"),Object(r.b)("h1",{id:"mdz-2004-06-15"},"mdz, 2004-06-15"),Object(r.b)("p",null,"apache"),Object(r.b)("h2",{id:"packages-which-havent-shown-up-yet-make-sure-they-dont-sneak-in"},"Packages which haven't shown up yet; make sure they don't sneak in"),Object(r.b)("h1",{id:"mdz-2004-06-14-many-many-bugs-and-unmaintained-both-debian-and-upstream"},"mdz, 2004-06-14: many, many bugs and unmaintained (both debian and upstream)"),Object(r.b)("p",null,"metamail"),Object(r.b)("h1",{id:"mdz-2004-06-14-lots-of-unsafe-string-handling-cve-2002-0789"},"mdz, 2004-06-14: lots of unsafe string handling, CVE-2002-0789,"),Object(r.b)("h1",{id:"can-2003-0436-can-2003-0437"},"CAN-2003-0436, CAN-2003-0437"),Object(r.b)("p",null,"mnogosearch"),Object(r.b)("h1",{id:"mdz-2004-06-14-requires-no-explanation"},"mdz, 2004-06-14: requires no explanation"),Object(r.b)("p",null,"wu-ftpd"),Object(r.b)("h1",{id:"mdz-2004-06-14-can-2003-0781-unmaintained-upstream-debian210444"},"mdz, 2004-06-14: CAN-2003-0781, unmaintained upstream, Debian#210444"),Object(r.b)("p",null,"ecartis"),Object(r.b)("h1",{id:"mdz-2004-06-14-lots-of-dos-and-other-badness-can-2003-0946-can-2004-0270"},"mdz, 2004-06-14: lots of DoS and other badness, CAN-2003-0946, CAN-2004-0270,"),Object(r.b)("h1",{id:"debian209084"},"debian#209084"),Object(r.b)("p",null,"clamav"),Object(r.b)("h1",{id:"mdz-2004-06-14-upstream-deliberately-obfuscates-vulnerabilities"},"mdz, 2004-06-14: upstream deliberately obfuscates vulnerabilities"),Object(r.b)("h1",{id:"mdz-2004-06-20-can-2002-0757-can-2003-0101-sns-74-sns-75"},"mdz, 2004-06-20: CAN-2002-0757, CAN-2003-0101, SNS 74, SNS 75"),Object(r.b)("p",null,"webmin"),Object(r.b)("p",null,"Last modified on 06/16/2008 10:53:59 AM"),Object(r.b)("hr",null))}b.isMDXComponent=!0}}]);