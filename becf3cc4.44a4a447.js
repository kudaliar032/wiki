(window.webpackJsonp=window.webpackJsonp||[]).push([[706],{1016:function(a,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return l}));var t=e(0),i=e.n(t);function r(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function u(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function s(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){r(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function d(a,n){if(null==a)return{};var e,t,i=function(a,n){if(null==a)return{};var e,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||(i[e]=a[e]);return i}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(i[e]=a[e])}return i}var p=i.a.createContext({}),k=function(a){var n=i.a.useContext(p),e=n;return a&&(e="function"==typeof a?a(n):s(s({},n),a)),e},o=function(a){var n=k(a.components);return i.a.createElement(p.Provider,{value:n},a.children)},c={inlineCode:"code",wrapper:function(a){var n=a.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(a,n){var e=a.components,t=a.mdxType,r=a.originalType,u=a.parentName,p=d(a,["components","mdxType","originalType","parentName"]),o=k(e),m=t,l=o["".concat(u,".").concat(m)]||o[m]||c[m]||r;return e?i.a.createElement(l,s(s({ref:n},p),{},{components:e})):i.a.createElement(l,s({ref:n},p))}));function l(a,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof a||t){var r=e.length,u=new Array(r);u[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=a,s.mdxType="string"==typeof a?a:t,u[1]=s;for(var p=2;p<r;p++)u[p]=e[p];return i.a.createElement.apply(null,u)}return i.a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},762:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return u})),e.d(n,"metadata",(function(){return s})),e.d(n,"rightToc",(function(){return d})),e.d(n,"default",(function(){return k}));var t=e(2),i=e(6),r=(e(0),e(1016)),u={},s={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab6-TextAndPaths",id:"TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab6-TextAndPaths",isDocsHomePage:!1,title:"PanduanInkscapeBab6-TextAndPaths",description:"Bab 6 Text And Paths",source:"@site/wiki/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab6-TextAndPaths.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab6-TextAndPaths",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab6-TextAndPaths",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab6-TextAndPaths.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},d=[{value:"6.2. Text And Paths",id:"62-text-and-paths",children:[]}],p={rightToc:d};function k(a){var n=a.components,e=Object(i.a)(a,["components"]);return Object(r.b)("wrapper",Object(t.a)({},p,e,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"bab-6-text-and-paths"},"Bab 6 Text And Paths"),Object(r.b)("p",null,"[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Mundur.png][/\nraw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Maju.png]"),Object(r.b)("h3",{id:"62-text-and-paths"},"6.2. Text And Paths"),Object(r.b)("p",null,"Text dan path dapat dipadukan menjadi sebuah kombinasi desain text yang unik\ndan menarik. Cara ini biasanya digunakan untuk membuat tulisan pada logo."),Object(r.b)("h4",{id:"621-put-on-path"},"6.2.1. Put on path"),Object(r.b)("p",null,"Inkscape memiliki dukungan untuk elemen SVG ",Object(r.b)("inlineCode",{parentName:"p"},"<textPath>"),". yang memungkinkan\nmenempatkan teks pada path (jalur) sehingga teks mengikuti bentuk path, namun\nteks sepenuhnya tetap dapat diedit (termasuk tanda baca, spasi dan huruf yang\nada dalam teks). Berikut contoh penggunaan fitur Put on path:\nBuat dua object yang terdiri dari Text (tulisan) dan path, letakkan text di\natas path, pilih kedua object, arahkan kursor ke Menu Bar => klik Text => Put\non Path\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab6-TextAndPaths/\n6.2.1.Put_on_path.png]","\nPada saat path digeser maka teks akan mengikutinya, sedangkan jika teks yang\ndigeser path akan tetap dalam posisi semula. Text dan Path dapat dimodifikasi\nsecara langsung. Pada saat bentuk path dimodifikasi maka teks akan mengikuti\nbentuk perubahan tersebut.\nPath dapat diatur supaya terlihat, tersembunyi, maupun dihapus, cara termudah\nuntuk menyembunyikan dan menghapus path adalah dengan menghilangkan Stroke\nPaint atau menghapus path dengan menggunakan Fill and Stroke, caranya klik Path\n=> Object => Fill and Stroke (Shift+Ctrl+F) => Stroke paint => No Paint (klik\ntanda silang paling kiri).\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab6-TextAndPaths/\n6.2.1A.Hapus_path.png]","\nSedangkan untuk menyembunyikan path dapat dilakukan dengan mengubah semua nilai\npada RGB menjadi 0 (nol). Untuk menghapus Text and Path, pilih teks => klik\nText pada Menu Bar => Remove from Path.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab6-TextAndPaths/\n6.2.1B.Sembunyikan_path.png]"),Object(r.b)("h4",{id:"622-flow-into-frame"},"6.2.2. Flow into Frame"),Object(r.b)("p",null,"Teks juga dapat dimasukkan ke dalam Path yang dibuat dari object shape atau\npath tertutup, teks secara otomatis mengikuti bentuk path. Untuk memasukkan\nteks ke dalam shape, pilih kedua object (teks dan shapes) => klik Text => Flow\ninto Frame atau tekan Alt+W. Sedangkan untuk memisahkan atau mengeluarkan teks,\nklik Text => Unflow atau tekan Shift+Alt+W.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab6-TextAndPaths/\n6.2.2.Flow_into_Frame.png]"),Object(r.b)("h6",{id:"catatan"},"Catatan:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Pada saat melakukan Unflow Text maka teks yang sebelum berasal dari teks\nmengalir secara otomatis berubah menjadi teks biasa\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Mundur.png][/\nraw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Maju.png]","\nLast modified on 11/27/2014 05:18:42 AM")),Object(r.b)("h4",{id:"attachments-4"},"Attachments (4)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"6.2.1B.Sembunyikan_path.png\u200b (9.2 KB) - added by istana 3 years ago."),Object(r.b)("li",{parentName:"ul"},"6.2.1.Put_on_path.png\u200b (32.1 KB) - added by istana 3 years ago."),Object(r.b)("li",{parentName:"ul"},"6.2.1A.Hapus_path.png\u200b (41.9 KB) - added by istana 3 years ago."),Object(r.b)("li",{parentName:"ul"},"6.2.2.Flow_into_Frame.png\u200b (79.4 KB) - added by istana 3 years ago.")),Object(r.b)("h4",{id:""}),Object(r.b)("hr",null))}k.isMDXComponent=!0}}]);