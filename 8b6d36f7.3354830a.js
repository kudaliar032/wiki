(window.webpackJsonp=window.webpackJsonp||[]).push([[507],{1016:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return l}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function u(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?u(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),p=function(e){var a=r.a.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},b=function(e){var a=p(e.components);return r.a.createElement(m.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),b=p(n),d=t,l=b["".concat(u,".").concat(d)]||b[d]||s[d]||i;return n?r.a.createElement(l,c(c({ref:a},m),{},{components:n})):r.a.createElement(l,c({ref:a},m))}));function l(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,u=new Array(i);u[0]=d;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:t,u[1]=c;for(var m=2;m<i;m++)u[m]=n[m];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},563:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return u})),n.d(a,"metadata",(function(){return c})),n.d(a,"rightToc",(function(){return o})),n.d(a,"default",(function(){return p}));var t=n(2),r=n(6),i=(n(0),n(1016)),u={},c={unversionedId:"TimPengembang/Infrastruktur/Administratif/Pemaket",id:"TimPengembang/Infrastruktur/Administratif/Pemaket",isDocsHomePage:!1,title:"Pemaket",description:"Pemaket",source:"@site/wiki/TimPengembang/Infrastruktur/Administratif/Pemaket.md",slug:"/TimPengembang/Infrastruktur/Administratif/Pemaket",permalink:"/TimPengembang/Infrastruktur/Administratif/Pemaket",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Infrastruktur/Administratif/Pemaket.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},o=[{value:"Menambah pemaket baru",id:"menambah-pemaket-baru",children:[{value:"Prasyarat",id:"prasyarat",children:[]},{value:"Tahapan",id:"tahapan",children:[]},{value:"tambahan",id:"tambahan",children:[]}]}],m={rightToc:o};function p(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},m,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"pemaket"},"Pemaket"),Object(i.b)("h2",{id:"menambah-pemaket-baru"},"Menambah pemaket baru"),Object(i.b)("h3",{id:"prasyarat"},"Prasyarat"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* Calon pemaket sudah menjadi Ubuntero.\n* Memasukkan alamat surat elektronik yang hendak dipakai dalam kunci GPG.\n")),Object(i.b)("h3",{id:"tahapan"},"Tahapan"),Object(i.b)("p",null,"Ini dilakukan dari pengguna irgsh di yeyen. Ganti $KUNCI_GPG dengan kode kunci\nGPG yang calon pemaket dan $NAMA_LOGIN dengan nama login calon pemaket di\n\u200bLaunchpad."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),'* Ambil kunci GPG dari Launchpad dan tandatangani. Gunakan sandi yang\n  tercantum pada halaman \u200bhttp://dev.blankonlinux.or.id/wiki/Infrastruktur/\n  GPG (Hanya beberapa tim steering dan infrastruktur yang dapat membukanya)\n  # su - irgsh\n  $ gpg --keyserver keyserver.ubuntu.com --recv-keys $KUNCI_GPG\n  $ gpg --sign-key $KUNCI_GPG\n* Masukkan calon pemaket dalam daftar pemaket.\n  # su - irgsh\n  $ cd ~/master-web\n  $ echo "$NAMA_LOGIN:$KUNCI_GPG" >> packagers.txt\n* Calon pemaket sudah siap menjadi pemaket.\n')),Object(i.b)("h3",{id:"tambahan"},"tambahan"),Object(i.b)("p",null,"pastikan pemaket sudah mengunggah ssh key di dev boi"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* untuk unggah ssh key manual;\n")),Object(i.b)("h1",{id:"su--s-binbash-bzr"},"su -s /bin/bash bzr"),Object(i.b)("p",null,"$ ~/utils/gen_authorized_keys.sh\n$ exit\ngrep namalogin@namamesin /home/bzr/.ssh/authorized_keys\nnamalogin@namamesin itu tergantung apa kata buntut berkas id_rsa.pub/atau\nid_dsa.pub\nLast modified on 04/08/2010 10:21:09 PM"),Object(i.b)("h4",{id:""}),Object(i.b)("hr",null))}p.isMDXComponent=!0}}]);