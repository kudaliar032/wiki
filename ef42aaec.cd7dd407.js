(window.webpackJsonp=window.webpackJsonp||[]).push([[876],{1016:function(e,a,n){"use strict";n.d(a,"a",(function(){return d})),n.d(a,"b",(function(){return k}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function b(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var a=r.a.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):m(m({},a),e)),n},d=function(e){var a=l(e.components);return r.a.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},c=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),d=l(n),c=t,k=d["".concat(o,".").concat(c)]||d[c]||p[c]||i;return n?r.a.createElement(k,m(m({ref:a},u),{},{components:n})):r.a.createElement(k,m({ref:a},u))}));function k(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=c;var m={};for(var b in a)hasOwnProperty.call(a,b)&&(m[b]=a[b]);m.originalType=e,m.mdxType="string"==typeof e?e:t,o[1]=m;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},932:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return m})),n.d(a,"rightToc",(function(){return b})),n.d(a,"default",(function(){return l}));var t=n(2),r=n(6),i=(n(0),n(1016)),o={},m={unversionedId:"TimPengembang/Pemaket/PanduanPaketKhasBromoTheme",id:"TimPengembang/Pemaket/PanduanPaketKhasBromoTheme",isDocsHomePage:!1,title:"PanduanPaketKhasBromoTheme",description:"PANDUAN PEMAKETAN BROMO THEME MENGGUNAKAN KOMPUTER LOKAL",source:"@site/wiki/TimPengembang/Pemaket/PanduanPaketKhasBromoTheme.md",slug:"/TimPengembang/Pemaket/PanduanPaketKhasBromoTheme",permalink:"/TimPengembang/Pemaket/PanduanPaketKhasBromoTheme",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Pemaket/PanduanPaketKhasBromoTheme.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},b=[],u={rightToc:b};function l(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"panduan-pemaketan-bromo-theme-menggunakan-komputer-lokal"},"PANDUAN PEMAKETAN BROMO THEME MENGGUNAKAN KOMPUTER LOKAL"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Sebelum melakukan pemaketan Bromo Theme silahkan persiapkan alatnya. Bisa\ndibaca di Wiki atau \u200bBuku_Panduan_Pemaketan. Pada proses persiapan alat,\nbaca panduan sampai pada pembuatan kunci."),Object(i.b)("li",{parentName:"ol"},"Buka terminal, buat folder Paket di home dan masuk ke folder Paket/\ndengan ketik perintah\n$mkdir Paket/\n$cd Paket/\ndan kemudian ketik\n$bzr branch ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/bromo-theme"}),"http://dev.blankonlinux.or.id/browser/tambora/bromo-theme"),"\nuntuk mengunduh folder kode sumber dari bromo-theme dari bzr BlankOn.\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"#"_attached_to_Pemaket/PanduanPaketKhasBromoTheme]'),Object(i.b)("li",{parentName:"ol"},"Di folder Paket, masuk ke folder bromo-theme, apabila melakukan perubahan\npada kode sumber silahkan lakukan perubahan sesuai dengan kebutuhan.\nKemudian ketik\n$dch -i\ndi dalam direktori bromo-theme. Sesuaikan dengan kebutuhan mulai dari\npemversian, komen, nama dan email anda. Untuk versi")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis\n  versi terbaru)\n* -0 adalah versi dari debian\n* blankon1 adalah versi yang digunakan blankon, apabila ada penambahan\n  patch maka versi akan naik.\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Pada berkas format difolder debian/source isikan 3.0 (native)"),Object(i.b)("li",{parentName:"ol"},"Lakukan\n$debuild -S"),Object(i.b)("li",{parentName:"ol"},"Ketik\n$cd ..\n$sudo pbuilder build namapaket.dsc"),Object(i.b)("li",{parentName:"ol"},"Untuk melihat hasil pemaketan berupa file dapat dilihat di cd /var/cache/\npbuilder/result/"),Object(i.b)("li",{parentName:"ol"},"Selanjutnya bisa dilanjutkan ke IRSGH.\nPEMAKETAN DI IRGSH"),Object(i.b)("li",{parentName:"ol"},"Ketik\n$bzr branch ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/bromo-theme"}),"http://dev.blankonlinux.or.id/browser/tambora/bromo-theme"),"\nuntuk mengunduh kode sumber dari bromo-theme dari bzr BlankOn."),Object(i.b)("li",{parentName:"ol"},"Masuk ke folder bromo-theme dan apabila melakukan perubahan pada kode\nsumber silahkan lakukan perubahan sesuai dengan kebutuhan. Kemudian ketik\n$dch -i\ndi dalam direktori bromo-theme. Sesuaikan dengan kebutuhan mulai dari\npemversian, komen, nama dan email anda. Untuk versi")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis\n  versi terbaru)\n* -0 adalah versi dari debian\n* blankon1 adalah versi yang digunakan blankon, apabila ada penambahan\n  patch maka versi akan naik.\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Kirim berkas bromo-theme ke bzr\n$bzr init (apabila belum ada folder .bzr atau belom dilakukan initiasi\nbzr)\n$bzr add *\n$bzr commit -m \u201cisikan pesan perubahan\u201d\n$bzr push bzr+ssh://",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"mailto:bzr@dev.blankonlinux.or.id"}),"bzr@dev.blankonlinux.or.id"),":2222/bzr/tambora/nama-\npaket\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"irgsh.png"_attached_to_Pemaket/PanduanPaketKhasBromoTheme]'),Object(i.b)("li",{parentName:"ol"},"Buka IRGSH \u200b",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://irgsh.blankonlinux.or.id"}),"http://irgsh.blankonlinux.or.id"),", login menggunakan akun\naku.blankonlinux.or.id anda (hubungi system adminitrator untuk\nmendaftarkan akun anda sebagai team pemaket).\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"login.png"_attached_to_Pemaket/PanduanPaketKhasBromoTheme]',"\nKlik Login"),Object(i.b)("li",{parentName:"ol"},"Klik New Build, maka akan muncul halaman Submit Build job\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"build.png"_attached_to_Pemaket/PanduanPaketKhasBromoTheme]',"\n6, Isikan")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* Distribution = Tambora (sesuai dengan nama kode rilis).\n* Source URL = Alamat source yang ada di bzr blankon.\n* Source Type = Bazar repository\n* Source Option = Last version\n* Original Source = Alamat source code upstream bisa dari github ataupun\n  akun pendekar (file berbentuk .tar.gz)\n* Additional Original Source = menambahkan source code upstream jika\n  diperlukan.\n")),Object(i.b)("p",null,"[No",Object(i.b)("em",{parentName:"p"},"image"),'"submit.png"_attached_to_Pemaket/PanduanPaketKhasBromoTheme]',"\n7.Klik Submit\nLast_modified 7 months ago Last modified on 10/11/2016 02:21:13 PM"),Object(i.b)("h4",{id:""}),Object(i.b)("hr",null))}l.isMDXComponent=!0}}]);