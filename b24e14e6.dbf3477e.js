(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{1016:function(n,a,e){"use strict";e.d(a,"a",(function(){return k})),e.d(a,"b",(function(){return d}));var t=e(0),i=e.n(t);function r(n,a,e){return a in n?Object.defineProperty(n,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[a]=e,n}function u(n,a){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),e.push.apply(e,t)}return e}function l(n){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?u(Object(e),!0).forEach((function(a){r(n,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))}))}return n}function o(n,a){if(null==n)return{};var e,t,i=function(n,a){if(null==n)return{};var e,t,i={},r=Object.keys(n);for(t=0;t<r.length;t++)e=r[t],a.indexOf(e)>=0||(i[e]=n[e]);return i}(n,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)e=r[t],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var m=i.a.createContext({}),p=function(n){var a=i.a.useContext(m),e=a;return n&&(e="function"==typeof n?n(a):l(l({},a),n)),e},k=function(n){var a=p(n.components);return i.a.createElement(m.Provider,{value:a},n.children)},b={inlineCode:"code",wrapper:function(n){var a=n.children;return i.a.createElement(i.a.Fragment,{},a)}},s=i.a.forwardRef((function(n,a){var e=n.components,t=n.mdxType,r=n.originalType,u=n.parentName,m=o(n,["components","mdxType","originalType","parentName"]),k=p(e),s=t,d=k["".concat(u,".").concat(s)]||k[s]||b[s]||r;return e?i.a.createElement(d,l(l({ref:a},m),{},{components:e})):i.a.createElement(d,l({ref:a},m))}));function d(n,a){var e=arguments,t=a&&a.mdxType;if("string"==typeof n||t){var r=e.length,u=new Array(r);u[0]=s;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=n,l.mdxType="string"==typeof n?n:t,u[1]=l;for(var m=2;m<r;m++)u[m]=e[m];return i.a.createElement.apply(null,u)}return i.a.createElement.apply(null,e)}s.displayName="MDXCreateElement"},707:function(n,a,e){"use strict";e.r(a),e.d(a,"frontMatter",(function(){return u})),e.d(a,"metadata",(function(){return l})),e.d(a,"rightToc",(function(){return o})),e.d(a,"default",(function(){return p}));var t=e(2),i=e(6),r=(e(0),e(1016)),u={},l={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanMenulisTiket",id:"TimPengembang/Dokumentasi/Panduan/PanduanMenulisTiket",isDocsHomePage:!1,title:"PanduanMenulisTiket",description:"Panduan Pembuatan Tiket",source:"@site/wiki/TimPengembang/Dokumentasi/Panduan/PanduanMenulisTiket.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanMenulisTiket",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanMenulisTiket",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Dokumentasi/Panduan/PanduanMenulisTiket.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},o=[{value:"Panduan Pembuatan Tiket",id:"panduan-pembuatan-tiket",children:[]}],m={rightToc:o};function p(n){var a=n.components,e=Object(i.a)(n,["components"]);return Object(r.b)("wrapper",Object(t.a)({},m,e,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"panduan-pembuatan-tiket"},"Panduan Pembuatan Tiket"),Object(r.b)("h4",{id:"pengertian"},"Pengertian"),Object(r.b)("p",null,"Aplikasi Tiket merupakan media yang digunakan oleh pengembang BlankOn untuk\nsaling berkomunikasi satu sama lain terutama mengenai penugasan sehubungan\ndengan perbaikan maupun penyempurnaan rilis BlankOn. Selain itu media ini juga\ndigunakan untuk menampung informasi usulan serta masalah yang ditemukan baik\nsebelum maupun setelah rilis BlankOn."),Object(r.b)("h4",{id:"cara-membuat-tiket"},"Cara Membuat Tiket"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Pastikan anda login ke \u200b",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://aku.blankonlinux.or.id"}),"http://aku.blankonlinux.or.id")," kemudian menuju\nlaman \u200b",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id"}),"http://dev.blankonlinux.or.id")),Object(r.b)("li",{parentName:"ol"},"Pada menu kanan atas pilih new ticket atau bisa merujuk ke tautan \u200bhttp:/\n/dev.blankonlinux.or.id/newticket"),Object(r.b)("li",{parentName:"ol"},"Isian")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"* Summary = Berisi judul, buatlah singkat, padat, jelas dan unik\n* Deskripsi = Detail apa yang ingin anda jelaskan dan laporkan.\n* Type (katagori)\n      o Masalah = Berisi kendala yang ditemukan, bisa kegagalan perangkat\n        atau kemungkinan kutu.\n      o Usulan = Berisi usulan yang ingin anda sampaikan.\n      o Tugas = Penegasan tugas kepada bagian tertentu di tim pengembang\n        BlankOn\n* Version = Spesifikasi rilis Blankon yang anda bahas,(Ombilin, Pattimura,\n  Rote, Suroboyo)\n* Priorty = Prioritas untuk menindaklanjuti tiket (prioritas pengerjaan).\n* Component = Tiket yang anda buat merujuk ke bagian apa di BlankOn (riset,\n  umum, kesenian, dll)\n* Keywords = Kata kunci, hal yang kusus tentang laporan anda, unik\n  (misalkan : manokwari, sound, error)\n* Cc = Pertimbangan untuk meneruskan tiket kepada yang dirasa harus tahu.\n  Format penulisan berupa username ataupun email\n* Owner = Pemilik keluhan, atau tanggungjawab dibidang apa tiket ini\n  dibuat, misal infra kepada pak budi, manokwari ke pak mdamt, paket ke pak\n  dotovr dll\n")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Jika ada berkas tambahan silahkan dilampirkan, file ini bisa berupa\nsketsa, tangkapan layar, log maupun langkah-langkah yang anda gunakan.\nAnda bisa menggunakan layanan tempel.blankon.in dan lampirkan tautan di\nkolom deskripsi jika diperlukan."),Object(r.b)("li",{parentName:"ol"},"Priview untuk melihat tampilan tiket"),Object(r.b)("li",{parentName:"ol"},"Tekan tombol Create Ticket jika isian tadi dianggap cukup benar."),Object(r.b)("li",{parentName:"ol"},"Satu tiket untuk satu masalah\nDemikianlah, selamat mengirim tiket")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"* nb : Hasil tiket dikirim ke pemilik tiket, penanggungjawab tiket, dan\n  milis BlankOn-Tiket\n")),Object(r.b)("p",null,"Last modified on 05/26/2013 12:38:51 PM"),Object(r.b)("h4",{id:"attachments-2"},"Attachments (2)"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"* Penulisan_Tiket.png\u200b (59.9 KB) - added by tuanpembual 4 years ago.\n  Menulis Tiket\n* PenulisanTiket.png\u200b (59.9 KB) - added by tuanpembual 4 years ago. Menulis\n  Tiket\n")),Object(r.b)("hr",null))}p.isMDXComponent=!0}}]);