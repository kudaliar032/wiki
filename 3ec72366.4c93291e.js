(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{1016:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),l=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=l(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(t),s=r,b=m["".concat(o,".").concat(s)]||m[s]||d[s]||i;return t?a.a.createElement(b,p(p({ref:n},c),{},{components:t})):a.a.createElement(b,p({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},309:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(6),i=(t(0),t(1016)),o={},p={unversionedId:"TimPengembang/Pemaket/PanduanPaketImpor/Kernel",id:"TimPengembang/Pemaket/PanduanPaketImpor/Kernel",isDocsHomePage:!1,title:"Kernel",description:"Panduan Paket Impor  Kernel",source:"@site/wiki/TimPengembang/Pemaket/PanduanPaketImpor/Kernel.md",slug:"/TimPengembang/Pemaket/PanduanPaketImpor/Kernel",permalink:"/TimPengembang/Pemaket/PanduanPaketImpor/Kernel",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Pemaket/PanduanPaketImpor/Kernel.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},u=[{value:"Panduan Paket Impor # Kernel",id:"panduan-paket-impor--kernel",children:[]}],c={rightToc:u};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"panduan-paket-impor--kernel"},"Panduan Paket Impor # Kernel"),Object(i.b)("p",null,"Source berada di git rani\ngit clone git@rani/pattimura/linux\nCara merge dengan beberapa Pohon\nMenambahkan pohon\n",Object(i.b)("inlineCode",{parentName:"p"},"git remote add <nama-pemilik-pohon> <tautan-pohon>"),"\nMisal\ngit remote add linus git://git.kernel.org/pub/scm/linux/kernel/git/torvalds/\nlinux-2.6.git\nMenarik dari pohon\ngit fetch nama-pemilik-pohon\ngit reberse nama-pemilik-pohon\nPerawatan BlankOn\nBermain di debian.master\ndan jika ada perubahan di linus maka dan ini disimpan di debian.master/config/\nfakeroot debian/rules updateconfigs\nPemaketan\nfakeroot debian/rules clean\nfakeroot debian/rules startnewrelease\nJIka ingin membuat linux-image saja\nfakeroot debian/rules binary-generic\nMembuat KOmplit untuk masuk repo\n",Object(i.b)("inlineCode",{parentName:"p"},"CONCURENCY_LEVEL=<jumlah-prosesor> skipabi=true dpkg-buildpackage -rfakeroot  -\nI.git -I.gitignore -i'\\.git.*'")))}l.isMDXComponent=!0}}]);