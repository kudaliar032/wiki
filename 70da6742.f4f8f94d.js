(window.webpackJsonp=window.webpackJsonp||[]).push([[417],{1016:function(a,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return s}));var t=e(0),r=e.n(t);function i(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function o(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function u(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){i(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function b(a,n){if(null==a)return{};var e,t,r=function(a,n){if(null==a)return{};var e,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||(r[e]=a[e]);return r}(a,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var l=r.a.createContext({}),p=function(a){var n=r.a.useContext(l),e=n;return a&&(e="function"==typeof a?a(n):u(u({},n),a)),e},c=function(a){var n=p(a.components);return r.a.createElement(l.Provider,{value:n},a.children)},m={inlineCode:"code",wrapper:function(a){var n=a.children;return r.a.createElement(r.a.Fragment,{},n)}},k=r.a.forwardRef((function(a,n){var e=a.components,t=a.mdxType,i=a.originalType,o=a.parentName,l=b(a,["components","mdxType","originalType","parentName"]),c=p(e),k=t,s=c["".concat(o,".").concat(k)]||c[k]||m[k]||i;return e?r.a.createElement(s,u(u({ref:n},l),{},{components:e})):r.a.createElement(s,u({ref:n},l))}));function s(a,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof a||t){var i=e.length,o=new Array(i);o[0]=k;var u={};for(var b in n)hasOwnProperty.call(n,b)&&(u[b]=n[b]);u.originalType=a,u.mdxType="string"==typeof a?a:t,o[1]=u;for(var l=2;l<i;l++)o[l]=e[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},473:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return o})),e.d(n,"metadata",(function(){return u})),e.d(n,"rightToc",(function(){return b})),e.d(n,"default",(function(){return p}));var t=e(2),r=e(6),i=(e(0),e(1016)),o={},u={unversionedId:"Acara/Tantangan/PabrikPaketOtomatis",id:"Acara/Tantangan/PabrikPaketOtomatis",isDocsHomePage:!1,title:"PabrikPaketOtomatis",description:"Pabrik Paket Otomatis",source:"@site/wiki/Acara/Tantangan/PabrikPaketOtomatis.md",slug:"/Acara/Tantangan/PabrikPaketOtomatis",permalink:"/Acara/Tantangan/PabrikPaketOtomatis",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/Acara/Tantangan/PabrikPaketOtomatis.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},b=[{value:"Tantangan BlankOn 2009",id:"tantangan-blankon-2009",children:[]}],l={rightToc:b};function p(a){var n=a.components,e=Object(r.a)(a,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,e,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"pabrik-paket-otomatis"},"Pabrik Paket Otomatis"),Object(i.b)("h2",{id:"tantangan-blankon-2009"},"Tantangan BlankOn 2009"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pendahuluan")),Object(i.b)("p",null,"Ubuntu mensyaratkan semua distribusi turunannya untuk melakukan rebranding atau\npengalihan merek, dalam arti tidak boleh menggunakan kata dan logo Ubuntu.\nUntuk keperluan ini, maka tiap paket yang memiliki logo Ubuntu harus diganti\ndengan logo BlankOn. Saat ini para pemaket dialokasikan untuk menangani paket-\npaket semacam ini. Pekerjaan yang dilakukan pemaket kadang membosankan karena\nhanya mengganti logo saja dan harus siap sedia memerbarui paket di BlankOn bila\npaket Ubuntu terbit."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Tantangan")),Object(i.b)("p",null,"Perlu ada pabrik paket otomatis yang bekerja saat paket yang dimaksud\nditerbitkan di Ubuntu. Pabrik ini kemudian mengganti logo Ubuntu menjadi logo\nBlankOn dan mengirimkannya ke pabrik paket hingga masuk ke repositori BlankOn.\nPabrik harus dapat bekerja mandiri tanpa campur tangan manusia."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Persyaratan")),Object(i.b)("p",null,"Peserta wajib mengerti konsep paket, repositori dan cara pengembangan di\nDebian."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Kriteria keberhasilan")),Object(i.b)("p",null,"Tantangan dianggap berhasil bila memenuhi 100% dari kriteria wajib dan 80% dari\nkriteria tambahan"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Wajib")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Pabrik paket dibuat dengan rancangan yang sederhana, mudah diinstal dan\ndijalankan"),Object(i.b)("li",{parentName:"ol"},"Menggunakan bahasa pemrograman skrip Python atau skrip shell"),Object(i.b)("li",{parentName:"ol"},"Bila menggunakan basis data, hanya boleh menggunakan sqlite"),Object(i.b)("li",{parentName:"ol"},"Dirancang untuk dapat diinstal pada lebih dari 1 komputer"),Object(i.b)("li",{parentName:"ol"},"Dirancang untuk dapat bekerja begitu ada paket baru dari Ubuntu"),Object(i.b)("li",{parentName:"ol"},"Terdokumentasi penuh, mulai dari rancangan hingga cara pakai")))}p.isMDXComponent=!0}}]);