(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{1016:function(e,a,n){"use strict";n.d(a,"a",(function(){return m})),n.d(a,"b",(function(){return c}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function b(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),d=function(e){var a=r.a.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},m=function(e){var a=d(e.components);return r.a.createElement(u.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},k=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),m=d(n),k=t,c=m["".concat(o,".").concat(k)]||m[k]||s[k]||i;return n?r.a.createElement(c,l(l({ref:a},u),{},{components:n})):r.a.createElement(c,l({ref:a},u))}));function c(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var b in a)hasOwnProperty.call(a,b)&&(l[b]=a[b]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},412:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return b})),n.d(a,"default",(function(){return d}));var t=n(2),r=n(6),i=(n(0),n(1016)),o={},l={unversionedId:"TimPengembang/Pemaket/PanduanPaketFonts",id:"TimPengembang/Pemaket/PanduanPaketFonts",isDocsHomePage:!1,title:"PanduanPaketFonts",description:"PANDUAN PAKET FONTS",source:"@site/wiki/TimPengembang/Pemaket/PanduanPaketFonts.md",slug:"/TimPengembang/Pemaket/PanduanPaketFonts",permalink:"/TimPengembang/Pemaket/PanduanPaketFonts",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Pemaket/PanduanPaketFonts.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},b=[],u={rightToc:b};function d(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"panduan-paket-fonts"},"PANDUAN PAKET FONTS"),Object(i.b)("p",null,"========================================================\nLOKAL"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Unduh Fonta yang mau dipaketkan (cth : \u200b",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.google.com/get/noto/"}),"https://www.google.com/get/noto/"),"\n#sans-java)"),Object(i.b)("li",{parentName:"ol"},"Buat Direktori Paket/ di home dan masuk ke direktori Paket/ dan buat\ndirektori nama fonta (fonts-sans-java) .\n$mkdir Paket/\n$cd Paket/\n$mkdir Fonts-nama-font-0.1"),Object(i.b)("li",{parentName:"ol"},"Masukkan berkas .ttf ke direktori fonts-nama-font-0.1"),Object(i.b)("li",{parentName:"ol"},"Compress direktori fonts-nama-font-0.1 menjadi fonts-nama-font-0.1.tar.gz"),Object(i.b)("li",{parentName:"ol"},"Masuk ke direktori fonts-nama-font-0.1 dan lakukan debianisasi. Ketik\n$dh_make -e isiemailanda -f ../fonts-nama-font-0.1.tag.gz\nPilih single atau ketik s lalu tekan enter."),Object(i.b)("li",{parentName:"ol"},"Masuk ke direktori debian yang sudah ada di direktori fonts-nama-font dan\nlalukan pembersihan berkas yang tidak dibutuhkan. Ketik\n$rm ",Object(i.b)("em",{parentName:"li"},".ex "),".EX docs info README.*\n$ls"),Object(i.b)("li",{parentName:"ol"},"Ketikkan\n$dch -e\nuntuk melakukan penyesuaian versi dan log perubahan."),Object(i.b)("li",{parentName:"ol"},"Lakukan penyesuaian pada berkas control (bisa melihat paket yang sudah\nada), begitu pula dengan berkas copyright."),Object(i.b)("li",{parentName:"ol"},"Lalu pindah ke direktori sebelumnya ketik\n$cd .."),Object(i.b)("li",{parentName:"ol"},"Ketik\n$debuild -S\n$cd ..\n$sudo pbuilder build nama-paket.dsc"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("h1",Object(t.a)({parentName:"li"},{id:"lihat-hasil-build-di-direktori-varcachepbuilderresult"}),"Lihat hasil build di direktori /var/cache/pbuilder/result/"),"IRSGH"),Object(i.b)("li",{parentName:"ol"},"Unduh Fonta yang mau dipaketkan (cth : \u200b",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.google.com/get/noto/"}),"https://www.google.com/get/noto/"),"\n#sans-java)"),Object(i.b)("li",{parentName:"ol"},"Buat Direktori Paket/ di home dan masuk ke direktori Paket/ dan buat\ndirektori nama fonta (fonts-sans-java) .\n$mkdir Paket/\n$cd Paket/\n$mkdir Fonts-nama-font-0.1"),Object(i.b)("li",{parentName:"ol"},"Masukkan berkas .ttf ke direktori fonts-nama-font-0.1"),Object(i.b)("li",{parentName:"ol"},"Compress direktori fonts-nama-font-0.1 menjadi fonts-nama-font-0.1.tar.gz"),Object(i.b)("li",{parentName:"ol"},"Masuk ke direktori fonts-nama-font-0.1 dan lakukan debianisasi. Ketik\n$dh_make -e isiemailanda -f ../fonts-nama-font-0.1.tag.gz\nPilih single atau ketik s lalu tekan enter."),Object(i.b)("li",{parentName:"ol"},"Masuk ke direktori debian yang sudah ada di direktori fonts-nama-font dan\nlalukan pembersihan berkas yang tidak dibutuhkan. Ketik\n$rm ",Object(i.b)("em",{parentName:"li"},".ex "),".EX docs info README.*\n$ls"),Object(i.b)("li",{parentName:"ol"},"Ketikkan\n$dch -e\nuntuk melakukan penyesuaian versi dan log perubahan."),Object(i.b)("li",{parentName:"ol"},"Lakukan penyesuaian pada berkas control (bisa melihat paket yang sudah\nada), begitu pula dengan berkas copyright."),Object(i.b)("li",{parentName:"ol"},"Lalu pindah ke direktori sebelumnya ketik\n$cd .."),Object(i.b)("li",{parentName:"ol"},"Lakukan initialisasi bzr, agar dapat mengirim ke bzr repo. Ketik\n$bzr init"),Object(i.b)("li",{parentName:"ol"},"Kirim berkas ke bzr. Ketik\n$bzr add *\n$bzr commit -m \u201cisikan pesan perubahan\u201d\n$bzr push bzr+ssh://",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"mailto:bzr@dev.blankonlinux.or.id"}),"bzr@dev.blankonlinux.or.id"),":2222/bzr/tambora/nama-\npaket"),Object(i.b)("li",{parentName:"ol"},"Buka IRGSH \u200b",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://irgsh.blankonlinux.or.id"}),"http://irgsh.blankonlinux.or.id"),", login menggunakan akun\naku.blankonlinux.or.id anda (hubungi system adminitrator untuk\nmendaftarkan akun anda sebagai team pemaket) dan Klik Login"),Object(i.b)("li",{parentName:"ol"},"Klik New Build, maka akan muncul halaman Submit Build job"),Object(i.b)("li",{parentName:"ol"},"Isikan\no Distribution = Tambora (sesuai dengan nama kode rilis).\no Source URL = Alamat source yang ada di bzr blankon.\no Source Type = Bazar repository\no Source Option = Last version\no Original Source = Alamat source code upstream bisa dari github\nataupun akun pendekar (file berbentuk .tar.gz)\no Additional Original Source = menambahkan source code upstream jika\ndiperlukan.\n15.Klik Submit\nLast_modified 7 months ago Last modified on 10/11/2016 01:47:48 PM")),Object(i.b)("h4",{id:""}),Object(i.b)("hr",null))}d.isMDXComponent=!0}}]);