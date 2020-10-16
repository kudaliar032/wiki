(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1016:function(e,a,n){"use strict";n.d(a,"a",(function(){return c})),n.d(a,"b",(function(){return d}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var a=r.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=u(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),b=t,d=c["".concat(o,".").concat(b)]||c[b]||m[b]||i;return n?r.a.createElement(d,l(l({ref:a},s),{},{components:n})):r.a.createElement(d,l({ref:a},s))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},216:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return p})),n.d(a,"default",(function(){return u}));var t=n(2),r=n(6),i=(n(0),n(1016)),o={},l={unversionedId:"TimPengembang/Dokumentasi/Draf/InstallProgramDeb",id:"TimPengembang/Dokumentasi/Draf/InstallProgramDeb",isDocsHomePage:!1,title:"InstallProgramDeb",description:"Memasang paket dari berkas .deb",source:"@site/wiki/TimPengembang/Dokumentasi/Draf/InstallProgramDeb.md",slug:"/TimPengembang/Dokumentasi/Draf/InstallProgramDeb",permalink:"/TimPengembang/Dokumentasi/Draf/InstallProgramDeb",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Dokumentasi/Draf/InstallProgramDeb.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},p=[{value:"Studi kasus",id:"studi-kasus",children:[]},{value:"Unduh paket",id:"unduh-paket",children:[]},{value:"Pasang paket dalam sistem",id:"pasang-paket-dalam-sistem",children:[]},{value:"Problem",id:"problem",children:[]}],s={rightToc:p};function u(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"memasang-paket-dari-berkas-deb"},"Memasang paket dari berkas .deb"),Object(i.b)("p",null,"Di BlankOn anda dapat menambah paket dari sebuah/beberapa berkas yang mempunyai format .deb (debian package). Untuk melakukan instalasi paket, Anda\ndapat menggunakan dpkg."),Object(i.b)("h2",{id:"studi-kasus"},"Studi kasus"),Object(i.b)("p",null,"Apabila kita ingin mengingankan memasang paket \u200btema_ikon_kamonesan maka caranya adalah:"),Object(i.b)("h2",{id:"unduh-paket"},"Unduh paket"),Object(i.b)("p",null,"Unduh paket dari Repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{})," $ wget -c http://arsip.blankonlinux.or.id/blankon/pool/main/k/kamonesan-icon- theme/kamonesan-icon-theme_0.1-0blankon1_all.deb\n\n")),Object(i.b)("h2",{id:"pasang-paket-dalam-sistem"},"Pasang paket dalam sistem"),Object(i.b)("p",null,"Silakan pasang paket tersebut ke dalam sistem Anda\n",Object(i.b)("inlineCode",{parentName:"p"},"$ sudo dpkg -i kamonesan-icon-theme_0.1-0blankon1_all.deb")),Object(i.b)("h2",{id:"problem"},"Problem"),Object(i.b)("p",null,"Bila paket tersebut gagal dipasang pada sistem Anda, maka permasalahanya adalah:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Ketergantungan paket, silakan install paket-paket yang diperlukan oleh paket tersebut"),Object(i.b)("li",{parentName:"ol"},"Anda tidak mempunyai hak root, silakan coba dengan  sudo dpkg -i paket_yang_akan_di_install"),Object(i.b)("li",{parentName:"ol"},"Ruang kosong dalam harddisk Anda.\nLast modified on 01/05/2009 08:21:10 PM")),Object(i.b)("hr",null))}u.isMDXComponent=!0}}]);