(window.webpackJsonp=window.webpackJsonp||[]).push([[629],{1016:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return s}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(r),m=t,s=d["".concat(i,".").concat(m)]||d[m]||b[m]||o;return r?a.a.createElement(s,l(l({ref:n},c),{},{components:r})):a.a.createElement(s,l({ref:n},c))}));function s(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},685:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return p}));var t=r(2),a=r(6),o=(r(0),r(1016)),i={},l={unversionedId:"ProdukBlankOn/BlankBerry/BlankBerry",id:"ProdukBlankOn/BlankBerry/BlankBerry",isDocsHomePage:!1,title:"BlankBerry",description:"BlankBerry",source:"@site/wiki/ProdukBlankOn/BlankBerry/BlankBerry.md",slug:"/ProdukBlankOn/BlankBerry/BlankBerry",permalink:"/ProdukBlankOn/BlankBerry/BlankBerry",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/ProdukBlankOn/BlankBerry/BlankBerry.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},u=[{value:"Tautan Unduh :",id:"tautan-unduh-",children:[]},{value:"Cara Pemasangan Di Qemu",id:"cara-pemasangan-di-qemu",children:[]}],c={rightToc:u};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"blankberry"},"BlankBerry"),Object(o.b)("p",null,"BlankBerry adalah BlankOn untuk Raspberry Pi \u200b",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"http://www.raspberrypi.org/"}),"http://www.raspberrypi.org/")," meski\nditujukan untuk board Raspberry Pi tetapi bisa juga dipasang di qemu jika Anda\nbelum punya board Raspberry Pi atau sedang menunggunya datang dikirim oleh\npenjual."),Object(o.b)("h2",{id:"tautan-unduh-"},"Tautan Unduh :"),Object(o.b)("p",null,"\u200b",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"http://cdimage.blankonlinux.or.id/blankon/blankberry/rote/"}),"http://cdimage.blankonlinux.or.id/blankon/blankberry/rote/")),Object(o.b)("p",null,"atau di cermin cd BlankOn.\nUnduh kernel dari: \u200b",Object(o.b)("a",Object(t.a)({parentName:"p"},{href:"http://xecdesign.com/downloads/linux-qemu/kernel-qemu"}),"http://xecdesign.com/downloads/linux-qemu/kernel-qemu")),Object(o.b)("h2",{id:"cara-pemasangan-di-qemu"},"Cara Pemasangan Di Qemu"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),'sudo apt-get install qemu lzma\nxz -d blankberry-rote-armhf-20120826-01.img.xz\nsudo qemu-system-arm -M versatilepb -cpu arm1136 -kernel kernel-qemu -m 256 -\ndrive file=blankberry-rote-armhf-20120827-01.img -serial stdio -append\n"dwc_otg.lpm_enable=0 console=ttyAMA0,115200 kgdboc=tty1,115200 console=tty2\nroot=/dev/sda2 elevator=noop quiet"\n')),Object(o.b)("p",null,"Selamat menikmati"),Object(o.b)("p",null,"Last modified on 08/31/2012 04:23:26 PM"))}p.isMDXComponent=!0}}]);