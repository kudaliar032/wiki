(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{1016:function(a,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return k}));var t=n(0),r=n.n(t);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function o(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function b(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var u=r.a.createContext({}),m=function(a){var e=r.a.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},d=function(a){var e=m(a.components);return r.a.createElement(u.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return r.a.createElement(r.a.Fragment,{},e)}},p=r.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,o=a.parentName,u=b(a,["components","mdxType","originalType","parentName"]),d=m(n),p=t,k=d["".concat(o,".").concat(p)]||d[p]||c[p]||i;return n?r.a.createElement(k,l(l({ref:e},u),{},{components:n})):r.a.createElement(k,l({ref:e},u))}));function k(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var b in e)hasOwnProperty.call(e,b)&&(l[b]=e[b]);l.originalType=a,l.mdxType="string"==typeof a?a:t,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},716:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return b})),n.d(e,"default",(function(){return m}));var t=n(2),r=n(6),i=(n(0),n(1016)),o={},l={unversionedId:"TimPengembang/Pemaket/PanduanPaketKhasMaleo",id:"TimPengembang/Pemaket/PanduanPaketKhasMaleo",isDocsHomePage:!1,title:"PanduanPaketKhasMaleo",description:"PANDUAN PEMAKETAN MALEO MENGGUNAKAN KOMPUTER LOKAL",source:"@site/wiki/TimPengembang/Pemaket/PanduanPaketKhasMaleo.md",slug:"/TimPengembang/Pemaket/PanduanPaketKhasMaleo",permalink:"/TimPengembang/Pemaket/PanduanPaketKhasMaleo",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Pemaket/PanduanPaketKhasMaleo.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},b=[],u={rightToc:b};function m(a){var e=a.components,n=Object(r.a)(a,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"panduan-pemaketan-maleo-menggunakan-komputer-lokal"},"PANDUAN PEMAKETAN MALEO MENGGUNAKAN KOMPUTER LOKAL"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Sebelum melakukan pemaketan Maleo silahkan persiapkan alatnya. Bisa\ndibaca di Wiki atau \u200bBuku_Panduan_Pemaketan. Pada proses persiapan alat,\nbaca panduan sampai pada pembuatan kunci."),Object(i.b)("li",{parentName:"ol"},"Buka terminal, buat folder Paket di home dan masuk ke folder Paket/\ndengan ketik perintah\n$mkdir Paket/\n$cd Paket/\ndan kemudian ketik\n$bzr branch ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/maleo"}),"http://dev.blankonlinux.or.id/browser/tambora/maleo"),"\nuntuk mengunduh folder kode sumber dari Maleo dari bzr BlankOn.\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"#"_attached_to_Pemaket/PanduanPaketKhasMaleo]'),Object(i.b)("li",{parentName:"ol"},"Di folder Paket, masuk ke folder maleo, ketik\n$dch -i\nlalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email\nanda.\nUntuk versi")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis\n  versi terbaru)\n* -0 adalah versi dari debian\n* blankon1 adalah versi yang digunakan blankon, apabila ada penambahan\n  patch maka versi akan naik.\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Pada berkas format difolder debian/source isikan 3.0 (native)"),Object(i.b)("li",{parentName:"ol"},"Lakukan\n$debuild -S"),Object(i.b)("li",{parentName:"ol"},"Ketik\n$cd ..\n$sudo pbuilder build namapaket.dsc"),Object(i.b)("li",{parentName:"ol"},"Untuk melihat hasil pemaketan berupa file dapat dilihat di cd /var/cache/\npbuilder/result/"),Object(i.b)("li",{parentName:"ol"},"Selanjutnya bisa dilanjutkan ke IRSGH.\nPEMAKETAN DI IRGSH"),Object(i.b)("li",{parentName:"ol"},"Ketik\n$bzr branch ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/maleo"}),"http://dev.blankonlinux.or.id/browser/tambora/maleo"),"\nuntuk mengunduh kode sumber dari Maleo dari bzr BlankOn."),Object(i.b)("li",{parentName:"ol"},"Masuk ke folder maleo dan lakukan pemversian. Ketik\n$dch -i\nlalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email\nanda. Untuk versi")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis\n  versi terbaru)\n* -0 adalah versi dari debian\n* blankon1 adalah versi yang digunakan blankon, apabila ada penambahan\n  patch maka versi akan naik.\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Kirim berkas maleo ke bzr\n$bzr init (apabila belum ada folder .bzr atau belom dilakukan initiasi\nbzr)\n$bzr add *\n$bzr commit -m \u201cisikan pesan perubahan\u201d\n$bzr push bzr+ssh://",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"mailto:bzr@dev.blankonlinux.or.id"}),"bzr@dev.blankonlinux.or.id"),":2222/bzr/tambora/nama-\npaket\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"irgsh.png"_attached_to_Pemaket/PanduanPaketKhasMaleo]'),Object(i.b)("li",{parentName:"ol"},"Buka IRGSH \u200b",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://irgsh.blankonlinux.or.id"}),"http://irgsh.blankonlinux.or.id"),", login menggunakan akun\naku.blankonlinux.or.id anda (hubungi system adminitrator untuk\nmendaftarkan akun anda sebagai team pemaket).\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"login.png"_attached_to_Pemaket/PanduanPaketKhasMaleo]',"\nKlik Login"),Object(i.b)("li",{parentName:"ol"},"Klik New Build, maka akan muncul halaman Submit Build job\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"build.png"_attached_to_Pemaket/PanduanPaketKhasMaleo]',"\n6, Isikan")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* Distribution = Tambora (sesuai dengan nama kode rilis).\n* Source URL = Alamat source yang ada di bzr blankon.\n* Source Type = Bazar repository\n* Source Option = Last version\n* Original Source = Alamat source code upstream bisa dari github ataupun\n  akun pendekar (file berbentuk .tar.gz)\n* Additional Original Source = menambahkan source code upstream jika\n  diperlukan.\n")),Object(i.b)("p",null,"[No",Object(i.b)("em",{parentName:"p"},"image"),'"submit.png"_attached_to_Pemaket/PanduanPaketKhasMaleo]',"\n7.Klik Submit\nLast_modified 7 months ago Last modified on 10/11/2016 02:20:20 PM"),Object(i.b)("h4",{id:""}),Object(i.b)("hr",null))}m.isMDXComponent=!0}}]);