(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1016:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return d}));var r=n(0),t=n.n(r);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function b(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?b(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var u=t.a.createContext({}),c=function(e){var a=t.a.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=c(e.components);return t.a.createElement(u.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},s=t.a.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),s=r,d=p["".concat(b,".").concat(s)]||p[s]||m[s]||i;return n?t.a.createElement(d,o(o({ref:a},u),{},{components:n})):t.a.createElement(d,o({ref:a},u))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,b=new Array(i);b[0]=s;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var u=2;u<i;u++)b[u]=n[u];return t.a.createElement.apply(null,b)}return t.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},163:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return b})),n.d(a,"metadata",(function(){return o})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return c}));var r=n(2),t=n(6),i=(n(0),n(1016)),b={},o={unversionedId:"TimPengembang/Pemaket/PanduanMengirimPaketKePabrikPaketVersi1",id:"TimPengembang/Pemaket/PanduanMengirimPaketKePabrikPaketVersi1",isDocsHomePage:!1,title:"PanduanMengirimPaketKePabrikPaketVersi1",description:"Panduan Mengirim Paket Ke Pabrik Paket Versi 1",source:"@site/wiki/TimPengembang/Pemaket/PanduanMengirimPaketKePabrikPaketVersi1.md",slug:"/TimPengembang/Pemaket/PanduanMengirimPaketKePabrikPaketVersi1",permalink:"/TimPengembang/Pemaket/PanduanMengirimPaketKePabrikPaketVersi1",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Pemaket/PanduanMengirimPaketKePabrikPaketVersi1.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},l=[],u={rightToc:l};function c(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"panduan-mengirim-paket-ke-pabrik-paket-versi-1"},"Panduan Mengirim Paket Ke Pabrik Paket Versi 1"),Object(i.b)("p",null,"Pengrimiman paket ke pabrik paket versi 1 dengan versi 0. ada sedikit\nperbedaan, mari kita bahas :"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Kirim code ke bzr\nbzr push bzr+ssh://",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:bzr@dev.blankonlinux.or.id"}),"bzr@dev.blankonlinux.or.id"),":2222/bzr/DIST/nama_paket\nMisal\nbzr push bzr+ssh://",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:bzr@dev.blankonlinux.or.id"}),"bzr@dev.blankonlinux.or.id"),":2222/bzr/pattimura/gwibber"),Object(i.b)("li",{parentName:"ol"},"Buka laman web\n",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://irgsh.blankonlinux.or.id/"}),"http://irgsh.blankonlinux.or.id/"),"\nPerbedaan dengan pabrik Versi 0 adalah pabrik paket versi 1 sudah\nbisa mengirim sebanyak 5 pekerjaan. Sebelum mengirim pastikan dulu\nbahwa paket anda sudah terdaftar, untuk mengetahuinya silahkan\nmenghubungi Koordinator Tim Pemaket atau Manajer Rilis.\n",Object(i.b)("em",{parentName:"li"},". Pilih distro\nSesuai distro yang telah anda kirim ke gudang kode/bzr\n"),". Package's URL : isi dengan url dari gudangcode/bzr, semisal\n",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/bzr/pattimura/gwibber"}),"http://dev.blankonlinux.or.id/bzr/pattimura/gwibber"),Object(i.b)("em",{parentName:"li"},". Package's VCS pilih sesuai VCS yang sesuai dengan pekerjaan anda.\n"),". Package's Tag, Isi tag sesuai dengan tag yang telah anda berikan\npada paket\n*. Original source's URL isi dengan sumber asli, semisal\n",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://arsip-dev.blankonlinux.or.id/blankon/pool/main/g/gwibber/"}),"http://arsip-dev.blankonlinux.or.id/blankon/pool/main/g/gwibber/"),"\ngwibber_2.91.2.orig.tar.gz")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"* Klik Submit\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Tunggu surel dari irgsh apakah paket anda berhasil atau gagal.\nLast modified on 02/24/2011 06:10:23 PM")),Object(i.b)("h4",{id:""}),Object(i.b)("hr",null))}c.isMDXComponent=!0}}]);