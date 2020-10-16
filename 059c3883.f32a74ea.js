(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1016:function(a,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return g}));var t=n(0),r=n.n(t);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function o(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function p(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function u(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var c=r.a.createContext({}),l=function(a){var e=r.a.useContext(c),n=e;return a&&(n="function"==typeof a?a(e):p(p({},e),a)),n},d=function(a){var e=l(a.components);return r.a.createElement(c.Provider,{value:e},a.children)},m={inlineCode:"code",wrapper:function(a){var e=a.children;return r.a.createElement(r.a.Fragment,{},e)}},s=r.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,o=a.parentName,c=u(a,["components","mdxType","originalType","parentName"]),d=l(n),s=t,g=d["".concat(o,".").concat(s)]||d[s]||m[s]||i;return n?r.a.createElement(g,p(p({ref:e},c),{},{components:n})):r.a.createElement(g,p({ref:e},c))}));function g(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=a,p.mdxType="string"==typeof a?a:t,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},76:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return p})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return l}));var t=n(2),r=n(6),i=(n(0),n(1016)),o={},p={unversionedId:"TimPengembang/Dokumentasi/Draf/PengaturanDesktopCompiz",id:"TimPengembang/Dokumentasi/Draf/PengaturanDesktopCompiz",isDocsHomePage:!1,title:"PengaturanDesktopCompiz",description:"Pengaturan Desktop Compiz",source:"@site/wiki/TimPengembang/Dokumentasi/Draf/PengaturanDesktopCompiz.md",slug:"/TimPengembang/Dokumentasi/Draf/PengaturanDesktopCompiz",permalink:"/TimPengembang/Dokumentasi/Draf/PengaturanDesktopCompiz",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Dokumentasi/Draf/PengaturanDesktopCompiz.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},u=[{value:"Desktop Compiz Fusion",id:"desktop-compiz-fusion",children:[{value:"Bagi Pengguna Kartu Grafis ATi",id:"bagi-pengguna-kartu-grafis-ati",children:[]},{value:"Bagi Pengguna Kartu Grafis nVidia",id:"bagi-pengguna-kartu-grafis-nvidia",children:[]}]}],c={rightToc:u};function l(a){var e=a.components,n=Object(r.a)(a,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"pengaturan-desktop-compiz"},"Pengaturan Desktop Compiz"),Object(i.b)("h2",{id:"desktop-compiz-fusion"},"Desktop Compiz Fusion"),Object(i.b)("p",null,"BlankOn datang dengan Compiz Fusion yang sudah terinstall. Dalam beberapa kasus, Compiz membutuhkan driver untuk kartu grafis anda agar compiz\nberjalan dengan baik. Pastikan Anda telah memasang driver kartu grafis pada sistem."),Object(i.b)("p",null,"Untuk mengaktifkan efek Desktop, silakan buka Menu-GNOME ke System > Preference > Apparance. Dalam tab desktop effect anda akan menemukan tiga\npengaturan yaitu: None, Normal dan Ekstra. Untuk mengaktifkan compiz, pilih salah satu dari ke tiga pilihan tersebut."),Object(i.b)("p",null,"Jika anda menginginkan pengaturan lebih pada pengaturan opsi compiz dan plugin, seperti desktop cube dan animations, pertama install paket konfigurasi\ncompiz: ",Object(i.b)("inlineCode",{parentName:"p"},"sudo apt-get install compizconfig-settings-manager")),Object(i.b)("p",null,"Setelah itu anda dapat mengatur plugin dan opsi lanjut compiz yang terletak di System > Preferences > Advanced Desktop Effects Settings. Anda juga\ndapat menjalankan aplikasi ini dari terminal atau run dialog (ALT+F2) dengan perintah ccsm."),Object(i.b)("h3",{id:"bagi-pengguna-kartu-grafis-ati"},"Bagi Pengguna Kartu Grafis ATi"),Object(i.b)("p",null,"Beberapa katu grafis ATI terkadang membutuhkan driver propietary untuk menjalankan compiz, hal ini dikarenakan driver terbuka (open Source) radeon\nterkadang tidak secepat driver proprietary fglrx, sehingga jika menginginkan compiz berjalan dengan baik, Anda harus memasang driver proprietary.\nBerikut adalah petunjuknya:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Setelah anda menasang drivernya, baik itu dari manajeman driver\nproprietary atau dari situs ATI, anda harus mengatur konfigurasi berkas\nxorg agar xorg dapat bekerja dengan diver terbaru anda. Buka termimal\nanda dan masukkan:")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"```\n sudo cp /etc/X11/xorg.conf /etc/X11/xorg.conf.bak\nsudo aticonfig --initial --input=/etc/X11/xorg.conf\n```   \n")),Object(i.b)("p",null,"   Tindakan tersebut akan menonaktifkan driver radeon default dan\nmenggantinya dengan Driver ATI."),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'Sekarang atur compiz agar melewatkan pngecekan tentang driver yang mereka\nblacklist:\necho SKIP_CHECKS="yes" >> $HOME/.config/compiz/compiz-manager\nCara alternatif anda dapat mengedit driver yang di percaya karena ini\nadalah cara yang lebih baik. Jalankan paerintah ini untuk mengubah\nskript-startup compiz:\ngksu gedit /usr/bin/compiz'),Object(i.b)("p",{parentName:"li"},"Cari Driver yang dipercaya dan masukkan fglrx kedalam barisnya, seperti\nini:"),Object(i.b)("h1",Object(t.a)({parentName:"li"},{id:"driver-whitelist"}),"Driver whitelist"),Object(i.b)("p",{parentName:"li"},'WHITELIST="nvidia intel ati radeon i810 fglrx"')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Matikan ulang komputer anda, kemudian login dan aktifkan compiz anda."))),Object(i.b)("h3",{id:"bagi-pengguna-kartu-grafis-nvidia"},"Bagi Pengguna Kartu Grafis nVidia"),Object(i.b)("p",null,"Instalasi driver Kartu Grafis nVidia sangat mudah sekali hal ini di karenakan driver nvidia telah ada dalam repository. Buka terminal dan masukkan\nperintah: sudo apt-get install nvidia-glx-new nvidia-kernel-common Matikan ulang komputer anda, kemudian login dan aktifkan compiz."),Object(i.b)("p",null,"Last modified on 09/23/2008 08:18:00 PM"),Object(i.b)("hr",null))}l.isMDXComponent=!0}}]);