(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{1016:function(a,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return g}));var i=e(0),u=e.n(i);function r(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function t(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,i)}return e}function k(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?t(Object(e),!0).forEach((function(n){r(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):t(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function s(a,n){if(null==a)return{};var e,i,u=function(a,n){if(null==a)return{};var e,i,u={},r=Object.keys(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(u[e]=a[e]);return u}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(u[e]=a[e])}return u}var d=u.a.createContext({}),m=function(a){var n=u.a.useContext(d),e=n;return a&&(e="function"==typeof a?a(n):k(k({},n),a)),e},l=function(a){var n=m(a.components);return u.a.createElement(d.Provider,{value:n},a.children)},b={inlineCode:"code",wrapper:function(a){var n=a.children;return u.a.createElement(u.a.Fragment,{},n)}},p=u.a.forwardRef((function(a,n){var e=a.components,i=a.mdxType,r=a.originalType,t=a.parentName,d=s(a,["components","mdxType","originalType","parentName"]),l=m(e),p=i,g=l["".concat(t,".").concat(p)]||l[p]||b[p]||r;return e?u.a.createElement(g,k(k({ref:n},d),{},{components:e})):u.a.createElement(g,k({ref:n},d))}));function g(a,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof a||i){var r=e.length,t=new Array(r);t[0]=p;var k={};for(var s in n)hasOwnProperty.call(n,s)&&(k[s]=n[s]);k.originalType=a,k.mdxType="string"==typeof a?a:i,t[1]=k;for(var d=2;d<r;d++)t[d]=e[d];return u.a.createElement.apply(null,t)}return u.a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},492:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return t})),e.d(n,"metadata",(function(){return k})),e.d(n,"rightToc",(function(){return s})),e.d(n,"default",(function(){return m}));var i=e(2),u=e(6),r=(e(0),e(1016)),t={},k={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab6",id:"TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab6",isDocsHomePage:!1,title:"Panduan5Bab6",description:"BAB VI Menggunakan Peramban Berkas",source:"@site/wiki/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab6.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab6",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab6",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab6.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},s=[{value:"BAB VI Menggunakan Peramban Berkas",id:"bab-vi-menggunakan-peramban-berkas",children:[{value:"Konsep manajemen berkas pada Linux",id:"konsep-manajemen-berkas-pada-linux",children:[]},{value:"Membuka peramban berkas Nautilus",id:"membuka-peramban-berkas-nautilus",children:[]},{value:"Menggunakan peramban berkas Nautilus",id:"menggunakan-peramban-berkas-nautilus",children:[]},{value:"Membuka peramban berkas PCMan",id:"membuka-peramban-berkas-pcman",children:[]},{value:"Menggunakan peramban berkas PCMan",id:"menggunakan-peramban-berkas-pcman",children:[]}]}],d={rightToc:s};function m(a){var n=a.components,e=Object(u.a)(a,["components"]);return Object(r.b)("wrapper",Object(i.a)({},d,e,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"bab-vi-menggunakan-peramban-berkas"},"BAB VI Menggunakan Peramban Berkas"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Panduan BlankOn 5")),Object(r.b)("p",null,"Untuk melakukan manajemen berkas pada komputer, Anda dapat menggunakan\naplikasi peramban berkas yang bernama Nautilus pada BlankOn Linux edisi\nReguler, dan PCMan pada BlankOn Linux edisi Minimalis. Bab ini menjelaskan\nmengenai cara menggunakan Nautilus dan PCMan untuk keperluan manajemen berkas.\nTidak ketinggalan juga, pada bab ini akan dibahas mengenai konsep manajemen\nberkas yang ada di sistem operasi berbasis Linux."),Object(r.b)("h3",{id:"konsep-manajemen-berkas-pada-linux"},"Konsep manajemen berkas pada Linux"),Object(r.b)("p",null,"Pada sistem operasi berbasis Linux, Anda tidak akan mengenal istilah drive\nseperti pada Microsoft Windows. Folder paling atas yang ada di sistem adalah\nfolder \u201c/\u201d atau root yang merupakan isi dari partisi sistem. Melalui desktop\nGNOME, Anda bisa membuka folder ini melalui menu Komponen > Komputer >\nFilesystem. Didalam folder \u201c/\u201d terdapat berbagai subfolder yang memiliki fungsi\nmasing-masing, yaitu :"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"* /bin, menyimpan binari atau program yang sangat penting untuk sistem.\n* /boot, menyimpan data-data yang diperlukan untuk melakukan booting\n  system.\n* /cdrom, merupakan titik kait/mount point jika Anda memasukkan CD/DVD-ROM.\n* /dev, menyimpan informasi yang bertautan dengan piranti keras yang\n  terpasang ke sistem. Biasanya diperlukan untuk merujuk suatu lokasi\n  piranti keras yang ada di sistem.\n* /etc, menyimpan konfigurasi sistem berbentuk file teks.\n* /home, menyimpan data-data yang dimiliki oleh pengguna non-administratif.\n* /lib, menyimpan pustaka sistem yang sangat penting.\n* /media, tempat untuk melakukan mounting suatu penyimpan data.\n* /opt, tempat untuk menyimpan berkas-berkas bebas.\n* /sbin, menyimpan binary atau program yang penting untuk melakukan\n  administrasi sistem.\n* /tmp, menyimpan berkas-berkas yang bersifat sementara.\n* /usr, menyimpan berkas-berkas piranti lunak yang terpasang di sistem.\n* /var, menyimpan berkas-berkas yang selalu berubah atau variabel, seperti\n  catatan sistem, e-mail pengguna, dsb.\n")),Object(r.b)("p",null,"[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-filesystem.png]","\nSetiap berkas dan folder memiliki pemilik serta izin masing-masing. Tidak semua\nfolder bisa diakses dan diubah oleh semua pengguna. Hal ini untuk menjaga\nkestabilan sistem dan menghindari pengguna yang ceroboh atau sengaja untuk\nmerusak sistem. Pengguna biasa hanya bisa mengelola berkas di dalam folder /\nhome/akunpengguna yang memang dimiliki oleh pengguna bersangkutan. Anda bisa\nmembukanya melalui menu Komponen > Folder Rumah pada desktop GNOME, atau klik\nganda pada ikon My Documents pada desktop LXDE. Selain folder tersebut,\npengguna harus mempunyai izin khusus dari administrator sistem.\nPenamaan berkas di Linux juga sangat berbeda dengan Windows. Di Linux, penamaan\nberkas bersifat Case Sensitive. Jadi, Anda bisa membuat berbagai berkas dengan\nnama yang sama, tetapi dengan case (Besar kecilnya huruf) yang berbeda.\nContohnya, Anda bisa membuat berkas \u201cFileku\u201d, \u201cfIleKU\u201d, \u201cfileku\u201d, \u201cfILEKU\u201d,\n\u201cFILEku\u201d, dsb dalam satu folder tanpa ada konflik.\nUntuk membuka isi partisi selain partisi sistem atau suatu media penyimpanan,\npartisi yang ingin Anda buka harus di-mounting ke suatu folder (umumnya di\nbawah folder /media) sehingga isi dari partisi atau media penyimpanan tersebut\nbisa dilihat dan dikelola hanya dengan membuka folder tersebut. Jika sedang\nmenggunakan desktop, Anda tidak perlu melakukan mounting secara manual setiap\ningin membuka isi media peyimpanan karena baik desktop GNOME dan LXDE sudah\nmelakukannya untuk Anda. Anda bisa melihat isi media penyimpanan melalui menu\nKomponen > Komputer pada desktop GNOME, atau melihat bagian kiri jendela PCMan\npada desktop LXDE.\nHal unik lainnya pada manajemen berkas di Linux adalah pengaturan hak aksesnya\nyang sangat detail dan ketat. Setiap berkas/folder yang ada di partisi Linux\nmemiliki beberapa parameter mengenai hak akses, yaitu :"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"* Pengguna pemilik berkas/folder, berisi id pengguna dari pemilik suatu\n  berkas/folder.\n* Grup pemilik berkas/folder, berisi id grup yang memiliki suatu berkas/\n  folder.\n* Hak akses untuk pemilik, berisikan hak apa saja yang boleh dilakukan oleh\n  pengguna pemilik berkas/folder terhadap suatu berkas/folder.\n* Hak akses untuk grup, berisikan hak apa saja yang boleh dilakukan oleh\n  grup pemilik berkas/folder terhadap suatu berkas/folder.\n* Hak akses untuk yang lainnya, berisikan hak apa saja yang boleh dilakukan\n  oleh pengguna selain pemilik dan grup selain grup pemilik terhadap suatu\n  berkas/folder.\n")),Object(r.b)("p",null,"Setiap objek hak akses yang ada di atas memiliki tugas hak, yaitu : Baca\n(Read), Tulis (Write), dan Eksekusi (eXecution). Setiap objek hak akses juga\nbisa memiliki perpaduan hak yang berbeda, ada yang bisa baca saja, ada yang\nbisa baca dan eksekusi saja, dan ada juga yang memiliki hak mutlak (baca, tulis\ndan eksekusi)."),Object(r.b)("h3",{id:"membuka-peramban-berkas-nautilus"},"Membuka peramban berkas Nautilus"),Object(r.b)("p",null,"Untuk melakukan pengelolaan berkas menggunakan Nautilus, Anda bisa mengklik\nfolder yang ingin Anda buka melalui menu Komponen. Berikut adalah folder yang\nbisa Anda buka melalui menu tersebut :"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"* Folder Rumah atau Home Folder merupakan folder yang berisikan berkas-\n  berkas milik pengguna.\n* Desktop, merupakan folder didalam folder rumah yang berisikan berkas yang\n  bisa Anda lihat di Desktop.\n* Dokumen, merupakan folder didalam folder rumah yang diperuntukkan untuk\n  menyimpan dokumen.\n* Musik, merupakan folder didalam folder rumah yang diperuntukkan untuk\n  menyimpan musik.\n* Gambar, merupakan folder didalam folder rumah yang diperuntukkan untuk\n  menyimpan Gambar atau Foto.\n* Video, merupakan folder didalam folder rumah yang diperuntukkan untuk\n  menaruh video.\n")),Object(r.b)("p",null,"[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/blankon-place-menu.png]","\nJika Anda ingin membuka isi suatu media penyimpanan, Anda bisa klik menu\nKomponen lalu pilih media penyimpanan yang ingin Anda buka isinya. Selain itu,\nAnda juga bisa memilih menu Komponen > Komputer dan klik ganda pada media\npenyimpanan.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-computer.png]","\nJika Anda sudah selesai menggunakan suatu media penyimpanan, Anda dapat\nmelepasnya dengan mengklik ikon \u201cEject\u201d di sebelah kanan nama media penyimpanan\npada bagian kiri peramban berkas. Alternatifnya, Anda bisa klik menu Komponen >\nKomputer, lalu klik kanan pada media penyimpanan yang ingin dilepas dan klik\nmenu \u201cLepaskan Volume\u201d."),Object(r.b)("h3",{id:"menggunakan-peramban-berkas-nautilus"},"Menggunakan peramban berkas Nautilus"),Object(r.b)("p",null,"Pada bagian ini, dijelaskan mengenai cara melakukan tugas manajemen berkas dan\nfolder seperti membuka berkas, menyalin berkas, memindahkan, membuat folder\nbaru, dsb pada aplikasi peramban berkas Nautilus yang terdapat di dalam BlankOn\nLinux edisi Reguler."),Object(r.b)("h4",{id:"memilih-berkas"},"Memilih berkas"),Object(r.b)("p",null,"Sebelum melakukan suatu tugas, Anda tentunya harus memilih berkas yang ingin\nAnda lakukan tugas. Jika Anda hanya memilih sebuah berkas, cukup klik berkas\nyang ingin Anda pilih. Namun, jika Anda memilih beberapa berkas, Anda bisa klik\nberkas yang ingin dipilih sambil menekan tombol Ctrl.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-select-file.png]"),Object(r.b)("h4",{id:"membuka-berkas"},"Membuka berkas"),Object(r.b)("p",null,"Untuk membuka suatu berkas, Anda cukup klik dua kali pada berkas yang ingin\nAnda buka. Maka berkas akan dibuka dengan aplikasi default yang sudah\nditentukan untuk membuka berkas tersebut.\nJika Anda ingin membuka suatu berkas menggunakan aplikasi selain yang sudah\nditentukan, Anda bisa klik kanan pada berkas yang ingin dibuka, lalu memilih\nmenu \u201cBuka dengan Aplikasi Lain...\u201d. Lalu pilih aplikasi yang ingin digunakan,\ndan klik tombol \u201cBuka\u201d.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-open-with.png]"),Object(r.b)("h4",{id:"mengubah-nama-berkasfolder"},"Mengubah nama berkas/folder"),Object(r.b)("p",null,"Untuk mengubah nama berkas, pilih berkas yang ingin Anda ubah namanya, lalu\nklik menu Sunting > Ganti Nama. Kemudian, ketik nama baru yang Anda inginkan.\nAnda juga bisa tekan tombol F2 pada keyboard untuk mengubah nama berkas/folder."),Object(r.b)("h4",{id:"menyalin-berkasfolder"},"Menyalin berkas/folder"),Object(r.b)("p",null,"Yang dimaksud dengan menyalin berkas/folder adalah membuat duplikat dari\nberkas/folder yang sudah ada. Untuk melakukan hal ini, pilih berkas yang ingin\nAnda salin lalu pilih menu Sunting > Salin. Atau Anda bisa tekan tombol Ctrl+C\nSekarang, buka folder tujuan penyalinan berkas, lalu klik menu Sunting >\nPasang. Atau Anda bisa tekan tombol Ctrl+V."),Object(r.b)("h4",{id:"memindahkan-berkasfolder"},"Memindahkan berkas/folder"),Object(r.b)("p",null,"Untuk memindahkan tempat berkas/folder dari suatu folder ke folder lainnya,\npilih berkas/folder yang ingin dipindahkan, lalu klik menu Sunting > Potong.\nAtau tekan tombol Ctrl+X.\nKemudian, buka folder tujuan dan klik menu Sunting > Pasang atau tekan tombol\nCtrl+V."),Object(r.b)("h4",{id:"menghapus-berkasfolder"},"Menghapus berkas/folder"),Object(r.b)("p",null,"Ada dua macam penghapusan berkas, yaitu penghapusan hanya dipindahkan ke tong\nsampah yang masih bisa dikembalikan dan penghapusan permanen yang tidak bisa\nAnda kembalikan lagi.\nUntuk melakukan penghapusan ke tong sampah, Anda bisa memilih berkas yang ingin\ndihapusa dan memilih menu Sunting > Pindahkan ke tong sampah atau Anda bisa\nmenekan tombol Delete pada keyboard. Pada saat ditanya, klik tombol \u201cHapus\u201d.\nJika Anda ingin mengembalikan berkas yang dipindahkan ke tong sampah, Anda bisa\nmembuka isi tong sampah dengan klik menu Ke > Tong Sampah. Kemudian, pilih\nberkas yang ingin Anda kembalikan lalu klik menu Sunting > Pulihkan.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-trash.png]","\nSedangkan untuk penghapusan permanen, pilih berkas yang ingin Anda hanguskan\nlalu tekan tombol Shift+Delete. Pada saat muncul pertanyaan, klik tombol\n\u201cHapus\u201d.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-delete-file.png]"),Object(r.b)("h4",{id:"membuat-folder-baru"},"Membuat folder baru"),Object(r.b)("p",null,"Untuk membuat folder baru, klik menu Berkas > Buat Folder. Lalu ketik nama\nfolder baru yang ingin Anda buat."),Object(r.b)("h4",{id:"mengatur-hak-akses-pada-berkasfolder"},"Mengatur hak akses pada berkas/folder"),Object(r.b)("p",null,"Untuk mengatur hak akses suatu berkas/folder pada peramban berkas Nautilus,\npilih berkas/folder yang ingin diatur lalu klik menu Berkas > Properti.\nKemudian, buka tab \u201cHak Akses\u201d. Berikut adalah penjelasan dari masing-masing\npengaturan.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-chmod-\nconfiguration.png]","\nMengatur siapa pemilik dari suatu\n","[/raw-attachment/wiki/Dokumentasi/      berkas. Sebagai pengguna biasa, Anda\nPanduan/5/Bab6/nautilus-chown-user.png]"," tidak bisa mengatur siapa pemiliknya.\nYang hanya bisa mengaturnya adalah\npengguna adalah administrator sistem.\nMengatur hak akses apa saja yang boleh\ndilakukan oleh pengguna pemilik. Jika\nAnda mengatur hak akses folder, Anda\n","[/raw-attachment/wiki/Dokumentasi/      akan melihat dua opsi, yaitu hak akses\nPanduan/5/Bab6/nautilus-chmod-user.png]"," folder untuk mengatur hak akses suatu\nfolder dan hak akses berkas untuk\nmengatur hak akses berkas yang ada di\ndalam folder bersangkutan.\n","[/raw-attachment/wiki/Dokumentasi/\nPanduan/5/Bab6/nautilus-chown-          Mengatur grup pemilik dari suatu berkas\ngroup.png]","\nMengatur hak akses apa saja yang boleh\ndilakukan oleh grup pemilik.Jika Anda\n","[/raw-attachment/wiki/Dokumentasi/      mengatur hak akses folder, Anda akan\nPanduan/5/Bab6/nautilus-chmod-          melihat dua opsi, yaitu hak akses\ngroup.png]","                              folder untuk mengatur hak akses suatu\nfolder dan hak akses berkas untuk\nmengatur hak akses berkas yang ada di\ndalam folder bersangkutan.\nMengatur hak akses apa saja yang boleh\ndilakukan selain oleh pengguna dan grup\npemilik berkas/folder. Jika Anda\n","[/raw-attachment/wiki/Dokumentasi/      mengatur hak akses folder, Anda akan\nPanduan/5/Bab6/nautilus-chmod-          melihat dua opsi, yaitu hak akses\nother.png]","                              folder untuk mengatur hak akses suatu\nfolder dan hak akses berkas untuk\nmengatur hak akses berkas yang ada di\ndalam folder bersangkutan.\n","[/raw-attachment/wiki/Dokumentasi/      Perbolehkan suatu berkas untuk\nPanduan/5/Bab6/nautilus-chmod-          dieksekusi. Terutama untuk script\nexecution.png]","                          program.\n","[/raw-attachment/wiki/Dokumentasi/      Klik tombol ini jika Anda ingin\nPanduan/5/Bab6/nautilus-chmod-          mengaplikasikan hak akses pada seluruh\napplyrecursive.png]","                     berkas/folder dibawah folder yang Anda\natur hak aksesnya"),Object(r.b)("h4",{id:"membuat-berkas-arsip"},"Membuat berkas arsip"),Object(r.b)("p",null,"Berkas arsip berfungsi untuk mengelompokkan bebeberapa berkas/folder menjadi\nsebuah berkas untuk memudahkan proses backup. Tidak hanya dikelompokkan, data\njuga akan diperkecil ukurannya/dikompres sehingga sehingga sangat cocok untuk\npertukaran data.\nUntuk melakukan arsip pada Nautilus, klik pada beberapa berkas yang ingin\ndiarsip, lalu klik kanan dan pilih menu \u201cBuat Arsip\u201d.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-add-archive.png]","\nKemudian, tentukan nama berkas hasil pengarsipan, lokasi serta format\npengarsipan. Format pengarsipan yang didukung antara lain : 7z, RAR, ZIP, TAR,\nTAR.GZ, dll. Untuk melakukan pengaturan tambahan seperti untuk menambahkan\npassword, Anda bisa klik pada \u201cPilihan lain\u201d. Setelah semua pengaturan selesai,\nklik pada tombol \u201cBuat\u201d."),Object(r.b)("h4",{id:"mencari-berkasfolder"},"Mencari berkas/folder"),Object(r.b)("p",null,"Untuk mencari berkas/folder yang tidak Anda ketahui tempatnya, Anda bisa\nmenggunakan fitur pencarian yang sudah terintregasi dengan peramban berkas\nNautilus.\nUntuk melakukan pencarian, Anda bisa klik tombol \u201cSearch\u201d pada bagian toolbar\nNautilus. Kemudian, ketik nama berkas yang ingin dicari pada kotak yang\ndisediakan, lalu tekan tombol Enter.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-search-tool.png]","\nJika menginginkan pencarian yang lebih mendetail, Anda bisa menggunakan fitur\ncari berkas melalui menu Komponen > Cari Berkas pada desktop. Kemudian, ketik\nnama berkas yang ingin dicari pada kotak \u201cNama berisi\u201d dan lokasi pencarian\npada \u201cCari dalam folder\u201d. Untuk lebih detail lagi, Anda bisa menambahkan opsi\npencarian dengan memilih \u201cBerkas pilihan lainnya\u201d dan isi opsi yang disediakan.\nSetelah semua selesai, klik tombol \u201cCari\u201d untuk melakukan pencarian."),Object(r.b)("h4",{id:"membakar-data-cddvd"},"Membakar data CD/DVD"),Object(r.b)("p",null,"Selain sebagai peramban berkas, Nautilus juga bisa digunakan untuk membakar CD/\nDVD untuk menyimpan data. Untuk membuka fitur ini, klik menu Aksesoris > CD/DVD\nCreator pada Desktop GNOME.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-cd-burning.png]","\nSilahkan salin berkas atau folder yang ingin Anda rekam ke CD/DVD dengan cara\nyang sudah dijelaskan diatas. Kemudian, klik tombol \u201cRekam ke Disk\u201d jika sudah\nselesai menyalin berkas/folder yang ingin direkam ke CD/DVD.\nSebelum memulai pembakaran/perekaman, Anda menentukan cakram CD/DVD yang akan\ndigunakan untuk pembakaran pada bagian \u201cCakram yang ditulisi\u201d, kemudian\nmenentukan label atau nama dari CD/DVD pada bagian \u201cNama Cakram\u201d. Kemudian,\nklik tombol \u201cBakar\u201d untuk memulai pembakaran.\nTIP: Untuk pengaturan pembakaran lebih lanjut seperti pengaturan kecepatan\npembakaran dan opsi pembakaran, Anda bisa klik tombol \u201cProperti\u201d sebelum\nmelakukan pembakaran."),Object(r.b)("h4",{id:"berbagi-folder-melalui-jaringan"},"Berbagi folder melalui Jaringan"),Object(r.b)("p",null,"Sebelum berbagi suatu folder ke jaringan, Anda harus memasang paket Samba\nterlebih dahulu. Samba merupakan server berbagi berkas yang bisa digunakan\nantar platform antara lain : Windows, Linux, Mac OS X, Solaris, dsb. Untuk\nmemasang paket samba, buka terminal dan ketik perintah berikut :\nblankon@blankon:~$ sudo apt-get install samba\u21b5\nSetelah Samba dipasang, pilih folder yang ingin dibagi lalu klik menu Sunting >\nPilihan berbagi.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-file-sharing.png]","\nBeri centang pada \u201cShare this folder\u201d untuk mengaktifkan fitur berbagi folder\ndan beri nama sharing folder yang akan dimunculkan pada saat mengakses folder\npada kotak teks yang tersedia. Agar pengakses bisa menulis isi folder yang\nterbagi, beri centang pada \u201cAllow other people to write in this folder\u201d dan\nberi centang \u201cGuest Access\u201d agar folder bisa diakses tanpa perlu autentifikasi\nid pengguna dan password.\nSetelah semua selesai, klik tombol \u201cBuat Share\u201d. Sekarang, komputer lain di\njaringan sudah bisa mengakses folder yang Anda bagi."),Object(r.b)("h4",{id:"peramban-jaringan"},"Peramban Jaringan"),Object(r.b)("p",null,"Selain untuk mengelola berkas secara lokal, Nautilus juga bisa dimanfaatkan\nuntuk mengelola berkas yang ada di jaringan dengan menggunakan protokol SMB\n(Protokol berbagi folder antar sistem operasi), SSH, FTP, dan WebDAV. Untuk\nmelihat jaringan di sekitar seperti melalui protokol SMB, Anda bisa klik menu\nKomponen > Jaringan. Kemudian, Anda bisa melihat nama komputer yang ada di\nsekitar jaringan Anda.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-network-browsing.png]","\nSedangkan, untuk mengelola berkas yang ada di jaringan selain SMB, Anda bisa\nklik menu Komponen > Menghubungi Server. Lalu, tentukan jenis layanan beserta\nparameternya. Setelah semua selesai, klik pada tombol \u201cSambung\u201d. Maka Nautilus\nakan melakukan sambungan terhadap protokol tersebut dan membukakan jendela\nperamban untuk mengelola berkas pada sambungan tersebut. Selain itu, Nautilus\njuga akan membuat item baru pada menu Komponen, Desktop dan pada sidebar di\nbagian kiri jendela peramban berkas yang berfungsi untuk merujuk ke sambungan\njaringan yang baru dibuat."),Object(r.b)("h3",{id:"membuka-peramban-berkas-pcman"},"Membuka peramban berkas PCMan"),Object(r.b)("p",null,"Untuk membuka peramban berkas PCMan pada BlankOn Linux edisi Minimalis, Anda\nbisa klik ganda ikon \u201cMy Documents\u201d pada area kerja LXDE, atau Anda juga bisa\nklik menu BlankOn > Peralatan Sistem > PCMan File Manager. Maka PCMan akan\ndibuka pada folder rumah pengguna.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/pcmanfm-home.png]","\nUntuk membuka isi suatu media penyimpanan, cukup klik pada media penyimpanan\nyang ingin dibuka pada bagian kiri jendela PCMan. Sementara untuk melepasnya,\nAnda bisa klik kanan pada media penyimpnan yang ingin dilepas, lalu pilih menu\n\u201cUnmount this Volume\u201d."),Object(r.b)("h3",{id:"menggunakan-peramban-berkas-pcman"},"Menggunakan peramban berkas PCMan"),Object(r.b)("p",null,"Pada bagian ini, dijelaskan mengenai cara melakukan tugas manajemen berkas dan\nfolder seperti membuka berkas, menyalin berkas, memindahkan, membuat folder\nbaru, dsb pada aplikasi peramban berkas PCMan yang terdapat di dalam BlankOn\nLinux edisi Minimalis."),Object(r.b)("h4",{id:"memilih-berkas-1"},"Memilih berkas"),Object(r.b)("p",null,"Untuk memilih sebuah berkas, cukup klik berkas yang ingin Anda pilih. Namun,\njika Anda memilih beberapa berkas, Anda bisa klik berkas yang ingin dipilih\nsambil menekan tombol Ctrl. Pemilihan berkas diperlukan untuk selanjutnya\ndilakukan manipulasi pada berkas yang dipilih tersebut.\nTIP: Untuk memilih semua berkas dan folder yang ada di dalam satu folder, Anda\nbisa tekan tombol Ctrl+A"),Object(r.b)("h4",{id:"membuka-berkas-1"},"Membuka berkas"),Object(r.b)("p",null,"Untuk membuka suatu berkas, Anda cukup klik dua kali pada berkas yang ingin\nAnda buka. Maka berkas akan dibuka dengan aplikasi default yang sudah\nditentukan untuk membuka berkas tersebut.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/pcmanfm-openwith.png]","\nJika ingin membuka berkas dengan aplikasi yang Anda inginkan, klik kanan berkas\nyang ingin dibuka, lalu arahkan ke menu \u201cOpen With\u201d, kemudian klik aplikasi\nyang ingin digunakan. Jika tidak terdapat pada daftar aplikasi, Anda bisa pilih\nmenu \u201cOpen with another application\u201d."),Object(r.b)("h4",{id:"merubah-nama-berkasfolder"},"Merubah nama berkas/folder"),Object(r.b)("p",null,"Untuk merubah nama berkas, pilih berkas yang ingin Anda ubah namanya, lalu klik\nmenu Edit > Rename. Kemudian, ketik nama baru yang Anda inginkan. Anda juga\nbisa tekan tombol F2 pada keyboard untuk mengubah nama berkas/folder."),Object(r.b)("h4",{id:"menyalin-berkasfolder-1"},"Menyalin berkas/folder"),Object(r.b)("p",null,"Yang dimaksud dengan menyalin berkas/folder adalah membuat duplikat dari\nberkas/folder yang sudah ada. Untuk melakukan hal ini, pilih berkas yang ingin\nAnda salin lalu pilih menu Edit > Copy. Atau Anda bisa tekan tombol Ctrl+C\nSekarang, buka folder tujuan penyalinan berkas, lalu klik menu Edit > Paste.\nAtau Anda bisa tekan tombol Ctrl+V."),Object(r.b)("h4",{id:"memindahkan-berkasfolder-1"},"Memindahkan berkas/folder"),Object(r.b)("p",null,"Untuk memindahkan tempat berkas/folder dari suatu folder ke folder lainnya,\npilih berkas/folder yang ingin dipindahkan, lalu klik menu Edit > Cut. Atau\ntekan tombol Ctrl+X.\nKemudian, buka folder tujuan dan klik menu Edit > Paste atau tekan tombol\nCtrl+V."),Object(r.b)("h4",{id:"menghapus-berkasfolder-1"},"Menghapus berkas/folder"),Object(r.b)("p",null,"Untuk menghapus berkas/folder secara permanen, Anda bisa memilih berkas/folder\nyang ingin dihapus, lalu memilih menu Sunting > Hapus, atau Anda bisa tekan\ntombol Delete.\nPERINGATAN''' Data yang sudah dihapus tidak bisa dikembalikan. Hati-hati dalam\nmelakukan penghapusan suatu berkas/folder."),Object(r.b)("h4",{id:"membuat-folder-baru-1"},"Membuat folder baru"),Object(r.b)("p",null,"Untuk membuat folder baru, klik menu File > Create New > Folder. Lalu ketik\nnama folder baru yang ingin Anda buat."),Object(r.b)("h4",{id:"mengatur-hak-akses-pada-berkasfolder-1"},"Mengatur hak akses pada berkas/folder"),Object(r.b)("p",null,"Untuk mengatur hak akses dari berkas/folder pada PCMan, klik kanan pada berkas/\nfolder yang ingin diubah hak aksesnya, lalu klik pada menu Properties. Pada\njendela Properties, klik pada tab Permissions.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/pcmanfm-chmod-\nconfiguration.png]","\nBerikut adalah penjelasan dari masing-masing pengaturan :\nMengatur pemilik dari berkas/folder.\n","[/raw-attachment/wiki/Dokumentasi/      Ingat, yang hanya bisa mengatur pemilik\nPanduan/5/Bab6/pcmanfm-chown-owner.png]"," dari suatu berkas/folder adalah\nadministrator.\nMengatur grup yang memiliki berkas/\n","[/raw-attachment/wiki/Dokumentasi/      folder. Yang hanya bisa mengatur bagian\nPanduan/5/Bab6/pcmanfm-chown-group.png]"," ini adalah pemilik berkas/folder\ntersebut.\n","[/raw-attachment/wiki/Dokumentasi/      Mengatur hak apa saja yang bisa\nPanduan/5/Bab6/pcmanfm-chmod-user.png]","  dilakukan oleh pemilik berkas.\n","[/raw-attachment/wiki/Dokumentasi/      Mengatur hak apa saja yang bisa\nPanduan/5/Bab6/pcmanfm-chmod-group.png]"," dilakukan oleh kelompok/grup pemilik\nberkas.\n","[/raw-attachment/wiki/Dokumentasi/      Mengatur hak apa saja yang bisa\nPanduan/5/Bab6/pcmanfm-chmod-other.png]"," dilakukan oleh pengguna selain pemilik\natau anggota grup.\nUntuk menerapkan pengaturan, Anda bisa klik pada tombol OK. Jika Anda mengatur\nhak akses pada folder, Anda akan ditanya apakah pengaturan akan diberlakukan\npada seluruh berkas didalam folder tersebut secara rekursif."),Object(r.b)("h4",{id:"membuat-berkas-arsip-1"},"Membuat berkas arsip"),Object(r.b)("p",null,"Untuk membuat berkas arsip pada PCMan, klik pada beberapa berkas yang ingin\ndiarsip, lalu klik kanan dan pilih menu \u201cCompress\u201d.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/pcmanfm-add-archive.png]","\nKemudian, tentukan nama berkas hasil pengarsipan, lokasi penyimpanan serta\nserta format pengarsipan. Format pengarsipan yang didukung antara lain :\nTAR.BZ2, TAR.GZ dan ZIP. Terakhir, klik tombol \u201cSave\u201d untuk membuat berkas\narsip."),Object(r.b)("h4",{id:"mencari-berkasfolder-1"},"Mencari berkas/folder"),Object(r.b)("p",null,"Untuk melakukan pencarian suatu berkas/folder pada PCMan, klik pada menu\nBlankOn > Aksesoris > Search for Files and Folder.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/pcmanfm-search-tool.png]","\nKemudian, tentukan nama berkas yang ingin dicari pada bagian \u201cFile Name\nContains\u201d dan tambahkan juga folder tempat pencarian dengan mengklik tombol\n\u201cAdd\u201d. Jika Anda ingin mencari isi berkas, Anda bisa klik tab \u201cContent\u201d dan\nmengetik isi dokumen yang ingin dicari. Untuk melakukan pencarian, klik pada\ntombol \u201cFind\u201d. Maka hasil pencarian akan langsung ditampilkan pada jendela\npencarian.\nLast modified on 07/06/2009 02:50:33 PM"),Object(r.b)("h4",{id:"attachments-31"},"Attachments (31)"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"* blankon-place-menu.png\u200b (35.0 KB) - added by wirama 8 years ago.\n* nautilus-add-archive.png\u200b (26.3 KB) - added by wirama 8 years ago.\n* nautilus-cd-burning.png\u200b (80.0 KB) - added by wirama 8 years ago.\n* nautilus-chmod-applyrecursive.png\u200b (4.7 KB) - added by wirama 8 years\n  ago.\n* nautilus-chmod-configuration.png\u200b (38.0 KB) - added by wirama 8 years\n  ago.\n* nautilus-chmod-execution.png\u200b (2.2 KB) - added by wirama 8 years ago.\n* nautilus-chmod-group.png\u200b (6.9 KB) - added by wirama 8 years ago.\n* nautilus-chmod-other.png\u200b (4.7 KB) - added by wirama 8 years ago.\n* nautilus-chmod-user.png\u200b (8.3 KB) - added by wirama 8 years ago.\n* nautilus-chown-group.png\u200b (3.3 KB) - added by wirama 8 years ago.\n* nautilus-chown-user.png\u200b (2.5 KB) - added by wirama 8 years ago.\n* nautilus-computer.png\u200b (64.2 KB) - added by wirama 8 years ago.\n* nautilus-delete-file.png\u200b (14.1 KB) - added by wirama 8 years ago.\n* nautilus-file-sharing.png\u200b (23.2 KB) - added by wirama 8 years ago.\n* nautilus-filesystem.png\u200b (64.8 KB) - added by wirama 8 years ago.\n* nautilus-network-browsing.png\u200b (54.5 KB) - added by wirama 8 years ago.\n* nautilus-open-with.png\u200b (48.2 KB) - added by wirama 8 years ago.\n* nautilus-search-tool.png\u200b (60.2 KB) - added by wirama 8 years ago.\n* nautilus-select-file.png\u200b (90.7 KB) - added by wirama 8 years ago.\n* nautilus-trash.png\u200b (43.1 KB) - added by wirama 8 years ago.\n* nautilus-trash.2.png\u200b (43.1 KB) - added by wirama 8 years ago.\n* pcmanfm-add-archive.png\u200b (15.0 KB) - added by wirama 8 years ago.\n* pcmanfm-chmod-configuration.png\u200b (19.2 KB) - added by wirama 8 years ago.\n* pcmanfm-chmod-group.png\u200b (2.1 KB) - added by wirama 8 years ago.\n* pcmanfm-chmod-other.png\u200b (2.2 KB) - added by wirama 8 years ago.\n* pcmanfm-chmod-user.png\u200b (2.2 KB) - added by wirama 8 years ago.\n* pcmanfm-chown-group.png\u200b (1.3 KB) - added by wirama 8 years ago.\n* pcmanfm-chown-owner.png\u200b (1.4 KB) - added by wirama 8 years ago.\n* pcmanfm-home.png\u200b (29.2 KB) - added by wirama 8 years ago.\n* pcmanfm-openwith.png\u200b (54.9 KB) - added by wirama 8 years ago.\n* pcmanfm-search-tool.png\u200b (18.1 KB) - added by wirama 8 years ago.\n")),Object(r.b)("h4",{id:""}))}m.isMDXComponent=!0}}]);