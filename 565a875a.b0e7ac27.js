(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{1016:function(a,n,e){"use strict";e.d(n,"a",(function(){return p})),e.d(n,"b",(function(){return g}));var t=e(0),r=e.n(t);function i(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function l(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function u(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){i(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function m(a,n){if(null==a)return{};var e,t,r=function(a,n){if(null==a)return{};var e,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||(r[e]=a[e]);return r}(a,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var o=r.a.createContext({}),s=function(a){var n=r.a.useContext(o),e=n;return a&&(e="function"==typeof a?a(n):u(u({},n),a)),e},p=function(a){var n=s(a.components);return r.a.createElement(o.Provider,{value:n},a.children)},k={inlineCode:"code",wrapper:function(a){var n=a.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(a,n){var e=a.components,t=a.mdxType,i=a.originalType,l=a.parentName,o=m(a,["components","mdxType","originalType","parentName"]),p=s(e),d=t,g=p["".concat(l,".").concat(d)]||p[d]||k[d]||i;return e?r.a.createElement(g,u(u({ref:n},o),{},{components:e})):r.a.createElement(g,u({ref:n},o))}));function g(a,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof a||t){var i=e.length,l=new Array(i);l[0]=d;var u={};for(var m in n)hasOwnProperty.call(n,m)&&(u[m]=n[m]);u.originalType=a,u.mdxType="string"==typeof a?a:t,l[1]=u;for(var o=2;o<i;o++)l[o]=e[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},378:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return l})),e.d(n,"metadata",(function(){return u})),e.d(n,"rightToc",(function(){return m})),e.d(n,"default",(function(){return s}));var t=e(2),r=e(6),i=(e(0),e(1016)),l={},u={unversionedId:"TimPengembang/Dokumentasi/Draf/InstallProgram",id:"TimPengembang/Dokumentasi/Draf/InstallProgram",isDocsHomePage:!1,title:"InstallProgram",description:"InstallProgram",source:"@site/wiki/TimPengembang/Dokumentasi/Draf/InstallProgram.md",slug:"/TimPengembang/Dokumentasi/Draf/InstallProgram",permalink:"/TimPengembang/Dokumentasi/Draf/InstallProgram",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Dokumentasi/Draf/InstallProgram.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},m=[],o={rightToc:m};function s(a){var n=a.components,e=Object(r.a)(a,["components"]);return Object(i.b)("wrapper",Object(t.a)({},o,e,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"installprogram"},"InstallProgram"),Object(i.b)("p",null,"Untuk menambah program ke dalam sistem BlankOn Anda, ada beberapa cara yang dapat ditempuh;"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Melalui repositori paket."),Object(i.b)("li",{parentName:"ul"},"Melalui instalasi manual paket binary program."),Object(i.b)("li",{parentName:"ul"},"Melalui kompilasi sumber program.")),Object(i.b)("h4",{id:"melalui-repositori-paket"},"Melalui Repositori Paket"),Object(i.b)("p",null,"Repositori adalah suatu tempat di mana Anda dapat mengunduh dan menginstal program melalui internet. Sejak rilis kedua BlankOn, Konde, BlankOn\nmenggunakan Ubuntu sebagai basis pengembangannya. Karena itu, paket-paket program di BlankOn menggunakan format yang mirip dengan paket-paket Ubuntu,\ntermasuk repositorinya. Seperti halnya Ubuntu, BlankOn menggunakan aplikasi manajer paket untuk menginstall paket-paket aplikasi. Manajer paket adalah\nsebuah program untuk menginstal dan menghilangkan aplikasi, dan mencatat setiap komponen-komponen yang dibutuhkan oleh masing-masing aplikasi. Manajer\npaket secara otomatis akan mengunduh aplikasi yang dibutuhkan beserta komponen-komponennya dari internet, dan sekaligus menginstalnya. Ada tiga\nmanajer paket utama yang dapat Anda gunakan di BlankOn:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add/Remove Programs - Cara termudah untuk menginstal dan menghilangkan aplikasi."),Object(i.b)("li",{parentName:"ul"},"Synaptic - Memiliki kontrol yang lebih maju atas perangkat lunak dan komponen sistem yang lain."),Object(i.b)("li",{parentName:"ul"},"Apt - Jika Anda lebih suka menggunakan Terminal")),Object(i.b)("p",null,"Anda hanya perlu membuka salah satu dari program-program di atas untuk menginstal aplikasi yang diinginkan. Yang perlu diperhatikan adalah: Anda\nmembutuhkan akses internet yang memadai, seperti ADSL (Telkom Speedy), 3G/ HSDPA, CDMA/EVDO, dll. Sangat tidak disarankan untuk melakukan instalasi\naplikasi melalui repositori dengan koneksi dial-up (Telkomnet Instan, dll.)."),Object(i.b)("h4",{id:"instalasi-manual-paket-biner-program"},"Instalasi manual paket biner program"),Object(i.b)("p",null,"Jika instalasi menggunakan manajer paket, paket aplikasi yang diinginkan akan diunduh dan diinstal beserta komponen-komponen yang dibutuhkan secara\notomatis, maka Anda dapat melakukannya secara manual. Jika Anda memiliki koneksi internet yang terbatas, Anda dapat saja mengunduh berkas paket\naplikasi yang diinginkan dari tempat lain, lalu menginstalnya secara offline di komputer Anda. Anda cukup mengunduh berkas paket yang diinginkan,\nbeserta paket-paket lain yang merupakan ketergantungan dari paket tersebut. Yang terpenting adalah berkas paket yang akan Anda instal berasal dari\nsumber yang aman, dan cocok dengan sistem BlankOn Anda. Ada banyak macam berkas paket untuk Linux, antara lain berkas Paket Debian (berkas .deb),\nberkas Paket Manajer RPM (berkas .rpm), Tarball (berkas .tar), dan berkas .run. Berkas paket aplikasi untuk BlankOn memiliki format Debian, seperti\nhalnya Ubuntu, yang ditandai dengan akhiran .deb . Meski demikian, tidak semua berkas berakhiran .deb kompatibel dengan sistem BlankOn Anda. Sebaiknya\nAnda memilih berkas paket yang khusus diperuntukkan bagi BlankOn 5 (Nanggar) atau Ubuntu 9.04 (Jaunty Jackalope). Hal ini adalah demi kestabilan\nsistem Anda."),Object(i.b)("p",null," Last modified on 10/07/2011 10:22:00 AM"),Object(i.b)("hr",null))}s.isMDXComponent=!0}}]);