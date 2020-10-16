(window.webpackJsonp=window.webpackJsonp||[]).push([[427],{1016:function(a,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return c}));var t=n(0),i=n.n(t);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function o(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function u(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var b=i.a.createContext({}),d=function(a){var e=i.a.useContext(b),n=e;return a&&(n="function"==typeof a?a(e):o(o({},e),a)),n},g=function(a){var e=d(a.components);return i.a.createElement(b.Provider,{value:e},a.children)},m={inlineCode:"code",wrapper:function(a){var e=a.children;return i.a.createElement(i.a.Fragment,{},e)}},p=i.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,r=a.originalType,l=a.parentName,b=u(a,["components","mdxType","originalType","parentName"]),g=d(n),p=t,c=g["".concat(l,".").concat(p)]||g[p]||m[p]||r;return n?i.a.createElement(c,o(o({ref:e},b),{},{components:n})):i.a.createElement(c,o({ref:e},b))}));function c(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=a,o.mdxType="string"==typeof a?a:t,l[1]=o;for(var b=2;b<r;b++)l[b]=n[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},483:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return o})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return d}));var t=n(2),i=n(6),r=(n(0),n(1016)),l={},o={unversionedId:"TimPengembang/Infrastruktur/Jigdo",id:"TimPengembang/Infrastruktur/Jigdo",isDocsHomePage:!1,title:"Jigdo",description:"Jigdo",source:"@site/wiki/TimPengembang/Infrastruktur/Jigdo.md",slug:"/TimPengembang/Infrastruktur/Jigdo",permalink:"/TimPengembang/Infrastruktur/Jigdo",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Infrastruktur/Jigdo.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},u=[{value:"Pengantar",id:"pengantar",children:[]},{value:"Persiapan",id:"persiapan",children:[]},{value:"Tahap pertama",id:"tahap-pertama",children:[]},{value:"Bila ada rilis baru",id:"bila-ada-rilis-baru",children:[]}],b={rightToc:u};function d(a){var e=a.components,n=Object(i.a)(a,["components"]);return Object(r.b)("wrapper",Object(t.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"jigdo"},"Jigdo"),Object(r.b)("h2",{id:"pengantar"},"Pengantar"),Object(r.b)("p",null,"\u200bJigdo adalah alat bantu Debian untuk mengunduh berkas cetakan CD (.iso). Jigdo\nsangat berguna pada kondisi Internet yang pas-pasan, karena Jigdo tidak\nmengunduh keseluruhan CD, melainkan membangun ulang cetakan CD berdasarkan\nperubahan-perubahan yang telah dilakukan dari rilis ke rilis. Walaupun Anda\nbelum memiliki cetakan CD pada awalnya, jigdo masih tetap digunakan, karena\njigdo akan membuat cetakan tersebut berdasarkan informasi yang ada di dalam\nberkas metadata jigdonya."),Object(r.b)("h2",{id:"persiapan"},"Persiapan"),Object(r.b)("p",null,"Instal paket jigdo-file\n$ sudo apt-get install jigdo-file"),Object(r.b)("h2",{id:"tahap-pertama"},"Tahap pertama"),Object(r.b)("p",null,"Langkah-langkah berikut dilakukan pada kali pertama."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Buat direktori kerja\nVersi Meuligoe:\n$ mkdir -p ~/blankon/daily/20080922\n$ cd ~/blankon/daily/20080922\nVersi Nanggar:\n$ mkdir -p ~/blankon/daily/20090129\n$ cd ~/blankon/daily/20090129"),Object(r.b)("li",{parentName:"ol"},"Unduh berkas .jigdo dan .template\nVersi Meuligoe:\n$ wget ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://cdimage.blankonlinux.or.id/blankon/daily/20080922/meuligoe-"}),"http://cdimage.blankonlinux.or.id/blankon/daily/20080922/meuligoe-"),"\nalternate-i386.jigdo\n$ wget ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://cdimage.blankonlinux.or.id/blankon/daily/20080922/meuligoe-"}),"http://cdimage.blankonlinux.or.id/blankon/daily/20080922/meuligoe-"),"\nalternate-i386.template\nVersi Nanggar:\n$ wget ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://cdimage.blankonlinux.or.id/blankon/daily/20090129/nanggar-"}),"http://cdimage.blankonlinux.or.id/blankon/daily/20090129/nanggar-"),"\nalternate-i386.jigdo\n$ wget ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://cdimage.blankonlinux.or.id/blankon/daily/20090129/nanggar-"}),"http://cdimage.blankonlinux.or.id/blankon/daily/20090129/nanggar-"),"\nalternate-i386.template"),Object(r.b)("li",{parentName:"ol"},"Jalankan jigdo-lite\nVersi Meuligoe:\n$ jigdo-lite meuligoe-alternate-i386.jigdo\nVersi Nanggar:\n$ jigdo-lite nanggar-alternate-i386.jigdo"),Object(r.b)("li",{parentName:"ol"},'Saat ditanya "Files to scan:" tekan Enter untuk mengabaikan'),Object(r.b)("li",{parentName:"ol"},'Saat ditanya "Debian mirror \u200b',Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://ftp.debian.org/:%22"}),'http://ftp.debian.org/:"')," masukkan base URL\ndari mirror ubuntu terdekat, misalnya ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://kambing.ui.edu/ubuntu/"}),"http://kambing.ui.edu/ubuntu/"),"\n...\ncountry code such as ",Object(r.b)("inlineCode",{parentName:"li"},"de', or a country name like "),"United\nStates', or a server name like `sunsite'.\nDebian mirror ","[http://debian.newdream.net]",": ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://kambing.ui.edu/ubuntu/"}),"http://kambing.ui.edu/ubuntu/")),Object(r.b)("li",{parentName:"ol"},"Tekan enter untuk memulai proses, bila berhasil di direktori aktif akan\ndibuat berkas meuligoe-alternate-i386.iso atau nanggar-alternate-\ni386.iso.")),Object(r.b)("h2",{id:"bila-ada-rilis-baru"},"Bila ada rilis baru"),Object(r.b)("p",null,"Di sini kita dapat secara jelas melihat keuntungan menggunakan Jigdo. Bila ada\nrilis baru, kita tidak perlu mengunduh berkas .iso-nya, tapi cukup mengulangi\nlangkah pertama di atas. Jigdo akan mengunduh paket-paket yang baru muncul pada\nrilis saat ini, mirip dengan apt-get upgrade.\nUntuk melakukannya kita lakukan pada direktori yang berbeda sebab kita masih\nmembutuhkan berkas .iso pada rilis sebelumnya karena nama berkas .iso-nya\nmenggunakan nama yang sama dengan rilis sebelumnya yaitu meuligoe-alternate-\ni386.iso atau nanggar-alternate-i386.iso"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Kaitkan berkas .iso sebelumnya\nVersi Meuligoe:\n$ sudo mount -o loop ~/blankon/daily/20080922/meuligoe-alternate-i386.iso\n/mnt\nVersi Nanggar:\n$ sudo mount -o loop ~/blankon/daily/20090129/nanggar-alternate-i386.iso\n/mnt"),Object(r.b)("li",{parentName:"ol"},"Buat direktori kerja baru\nVersi Meuligoe:\n$ mkdir -p ~/blankon/daily/20080923\n$ cd ~/blankon/daily/20080923\nVersi Nanggar:\n$ mkdir -p ~/blankon/daily/20090129.1\n$ cd ~/blankon/daily/20090129.1"),Object(r.b)("li",{parentName:"ol"},"Unduh berkas .jigdo dan .template\nVersi Meuligoe:\n$ wget ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://cdimage.blankonlinux.or.id/blankon/daily/20080923/meuligoe-"}),"http://cdimage.blankonlinux.or.id/blankon/daily/20080923/meuligoe-"),"\nalternate-i386.jigdo\n$ wget ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://cdimage.blankonlinux.or.id/blankon/daily/20080923/meuligoe-"}),"http://cdimage.blankonlinux.or.id/blankon/daily/20080923/meuligoe-"),"\nalternate-i386.template\nVersi Nanggar:\n$ wget ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://cdimage.blankonlinux.or.id/blankon/daily/20090129.1/"}),"http://cdimage.blankonlinux.or.id/blankon/daily/20090129.1/"),"\nnanggar-alternate-i386.jigdo\n$ wget ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://cdimage.blankonlinux.or.id/blankon/daily/20090129.1/"}),"http://cdimage.blankonlinux.or.id/blankon/daily/20090129.1/"),"\nnanggar-alternate-i386.template"),Object(r.b)("li",{parentName:"ol"},"Jalankan jigdo-lite\nVersi Konde:\nVersi Meuligoe:\n$ jigdo-lite meuligoe-alternate-i386.jigdo\nVersi Nanggar:\n$ jigdo-lite nanggar-alternate-i386.jigdo"),Object(r.b)("li",{parentName:"ol"},'Saat ditanya "Files to scan:" isi dengan "/mnt" atau lokasi lain tempat\nkita mengaitkan .iso rilis sebelumnya'),Object(r.b)("li",{parentName:"ol"},'Saat ditanya "Debian mirror \u200b',Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://ftp.debian.org/:%22"}),'http://ftp.debian.org/:"')," masukkan base URL\ndari mirror ubuntu terdekat, misalnya ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://kambing.ui.edu/ubuntu/"}),"http://kambing.ui.edu/ubuntu/"),"\n...\ncountry code such as ",Object(r.b)("inlineCode",{parentName:"li"},"de', or a country name like "),"United\nStates', or a server name like `sunsite'.\nDebian mirror ","[http://debian.newdream.net]",": ",Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"http://kambing.ui.edu/ubuntu/"}),"http://kambing.ui.edu/ubuntu/")),Object(r.b)("li",{parentName:"ol"},"Tekan enter untuk memulai proses, bila berhasil di direktori aktif akan\ndibuat berkas meuligoe-alternate-i386.iso atau nanggar-alternate-\ni386.iso."),Object(r.b)("li",{parentName:"ol"},"Lepaskan kaitan .iso rilis sebelumnya dan hapus bila perlu.\n$ sudo umount /mnt\nKategoriInfra\nLast modified on 01/29/2009 01:07:10 PM")),Object(r.b)("h4",{id:""}),Object(r.b)("hr",null))}d.isMDXComponent=!0}}]);