(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1016:function(a,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return p}));var i=e(0),t=e.n(i);function r(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function k(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,i)}return e}function u(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?k(Object(e),!0).forEach((function(n){r(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function o(a,n){if(null==a)return{};var e,i,t=function(a,n){if(null==a)return{};var e,i,t={},r=Object.keys(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(t[e]=a[e]);return t}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(t[e]=a[e])}return t}var b=t.a.createContext({}),s=function(a){var n=t.a.useContext(b),e=n;return a&&(e="function"==typeof a?a(n):u(u({},n),a)),e},l=function(a){var n=s(a.components);return t.a.createElement(b.Provider,{value:n},a.children)},d={inlineCode:"code",wrapper:function(a){var n=a.children;return t.a.createElement(t.a.Fragment,{},n)}},m=t.a.forwardRef((function(a,n){var e=a.components,i=a.mdxType,r=a.originalType,k=a.parentName,b=o(a,["components","mdxType","originalType","parentName"]),l=s(e),m=i,p=l["".concat(k,".").concat(m)]||l[m]||d[m]||r;return e?t.a.createElement(p,u(u({ref:n},b),{},{components:e})):t.a.createElement(p,u({ref:n},b))}));function p(a,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof a||i){var r=e.length,k=new Array(r);k[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=a,u.mdxType="string"==typeof a?a:i,k[1]=u;for(var b=2;b<r;b++)k[b]=e[b];return t.a.createElement.apply(null,k)}return t.a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},192:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return k})),e.d(n,"metadata",(function(){return u})),e.d(n,"rightToc",(function(){return o})),e.d(n,"default",(function(){return s}));var i=e(2),t=e(6),r=(e(0),e(1016)),k={},u={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/7/Panduan7Bab11",id:"TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/7/Panduan7Bab11",isDocsHomePage:!1,title:"Panduan7Bab11",description:"Bab 11 Pengenalan Antarmuka Teks",source:"@site/wiki/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/7/Panduan7Bab11.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/7/Panduan7Bab11",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/7/Panduan7Bab11",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/7/Panduan7Bab11.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},o=[{value:"Membuka Antarmuka Teks",id:"membuka-antarmuka-teks",children:[]},{value:"Pengenalan Antarmuka Teks",id:"pengenalan-antarmuka-teks",children:[]},{value:"Perintah-perintah dalam Antarmuka Teks",id:"perintah-perintah-dalam-antarmuka-teks",children:[]}],b={rightToc:o};function s(a){var n=a.components,e=Object(t.a)(a,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,e,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"bab-11-pengenalan-antarmuka-teks"},"Bab 11 Pengenalan Antarmuka Teks"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Panduan BlankOn Linux 7")),Object(r.b)("p",null,"Antarmuka dasar untuk pengoperasian sistem operasi Linux sebenarnya adalah\nantarmuka berbasis teks, atau sering disebut Command Line. Antarmuka grafis\natau desktop yang ada di dalam Linux sebenarnya hanyalah alat bantu untuk\npengoperasian bagi mereka yang sudah biasa bekerja dengan Graphical User\nInterface (GUI) yang terdapat di beberapa sistem operasi modern. Ini mirip\ndengan piranti lunak Microsoft Windows sebelum versi 95 yang hanya merupakan\nalat bantu pengoprasian berbasis grafis untuk DOS.\nUntuk memberikan suatu perintah pada antarmuka teks, para pengguna harus\nmengetik nama perintah yang akan dijalankan beserta opsi-opsi/parameter-nya,\nkemudian menekan tombol Enter untuk mengeksekusi perintah tersebut. Tidak\nseperti antarmuka grafis, penggunaan mouse secara umum tidak diperlukan karena\nsemua kontrol hanya dilakukan melalui papan ketik.\nTidak benar jika penggunaan antarmuka teks tidak bisa melakukan produktivitas.\nAnda masih bisa berproduktivitas dengan berbagai aplikasi berbasis teks yang\ntersedia dan siap Anda gunakan. Bahkan untuk para administrator, penggunaan\nantarmuka teks sangat disarankan ketimbang antarmuka grafis karena memakan\nsumberdaya CPU dan RAM yang lebih kecil, sehingga tidak menganggu kinerja\nkomputer pada saat melakukan suatu tugas administrasi.\nPada bab ini, dijelaskan mengenai dasar pengoprasian antarmuka teks yang ada\npada BlankOn Linux. Sasaran pembaca tidak hanya bagi Anda yang power user,\nmelainkan juga para pemula/newbie yang ingin mempelajari Linux lebih lanjut."),Object(r.b)("h3",{id:"membuka-antarmuka-teks"},"Membuka Antarmuka Teks"),Object(r.b)("p",null,"Ada dua jenis antarmuka teks yang bisa Anda buka, yaitu terminal dan virtual\nconsole. Terminal merupakan antarmuka teks yang berjalan di dalam desktop dan\nberupa jendela aplikasi, sedangkan virtual console merupakan antarmuka teks\nyang berjalan secara mandiri di luar desktop."),Object(r.b)("h4",{id:"membuka-terminal-console"},"Membuka Terminal Console"),Object(r.b)("p",null,"Untuk membuka terminal, klik menu Aplikasi > Aksesoris > Terminal pada BlankOn,\nkemudian jendela terminal akan muncul di dalam desktop.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/7/Bab11/gnome-terminal.png]","\nTerminal\nJika Anda ingin membuka sesi kerja yang baru, Anda bisa membuat tab baru\nseperti layaknya fitur tabbed browsing pada peramban web dengan mengklik menu\nFile > Buka Tab, atau Anda bisa tekan tombol Shift+Ctrl+T pada keyboard.\nAnda bisa mengkostumisasi penampilan terminal sesuai dengan keinginan Anda\nmelalui jendela pengaturan yang bisa Anda buka melalui menu Edit > Preferensi.\nJika ingin membuat terminal dalam mode layar penuh, Anda bisa klik menu Lihat >\nLayar Penuh atau Anda bisa tekan tombol F11 pada keyboard."),Object(r.b)("h4",{id:"membuka-virtual-console"},"Membuka Virtual Console"),Object(r.b)("p",null,"Linux telah menyediakan enam sesi antarmuka teks yang bisa Anda buka dengan\ncara menekan tombol Ctrl+Alt+F1, Ctrl+Alt+F2 sampai Ctrl+Alt+F6.\nBerbeda dengan menggunakan terminal, Anda harus melakukan login terlebih dahulu\nsebelum bekerja dengan antarmuka teks. Ketik id pengguna kemudian tekan enter\nlalu masukkan sandi (password tidak akan ditampilkan pada layar) Anda dan tekan\nenter sekali lagi. Berbeda dengan terminal, Anda tidak bisa melakukan\nkustomisasi penampilan agar lebih menarik. Bekerja disini layaknya bekerja\ndengan sistem operasi DOS (Disk Operating Systems).\nUntuk kembali ke desktop, Anda bisa tekan tombol Ctrl+Alt+F7 sampai\nCtrl+Alt+F12. Bergantung dari sesi desktop yang digunakan (Secara default\nmenggunakan Ctrl+Alt+F7 jika Anda tidak memanfaatkan fitur pindah pengguna\nuntuk mengaktifkan lebih dari satu sesi desktop)."),Object(r.b)("h3",{id:"pengenalan-antarmuka-teks"},"Pengenalan Antarmuka Teks"),Object(r.b)("p",null,"Setelah Anda membuka terminal atau login di dalam virtual console, Anda akan\ndiminta untuk memasukkan perintah yang ingin Anda jalankan. Tempat Anda\nmengetik berada pada kursor/penanda yang berkedip-kedip. Pada bagian kiri\nkursor tersebut, Anda akan melihat teks seperti berikut :\nblankon@blankon:~$"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Teks tersebut memiliki berbagai informasi sebagai berikut :"),Object(r.b)("li",{parentName:"ul"},"Teks \u201cblankon\u201d sebelum tanda at (@) merupakan nama id pengguna yang login\nmenggunakan antarmuka teks,"),Object(r.b)("li",{parentName:"ul"},"Teks \u201cblankon\u201d setelah tanda at (@) merupakan nama komputer yang\ndigunakan pada saat bekerja,"),Object(r.b)("li",{parentName:"ul"},"Teks \u201c~\u201d setelah tanda titik dua (:) menunjukan folder yang saat ini\ndibuka. Folder \u201c~\u201d berarti sedang membuka folder rumah/home."),Object(r.b)("li",{parentName:"ul"},"Tanda \u201c$\u201d pada bagian akhir menunjukkan Anda bekerja di level pengguna\nbiasa. Jika Anda bekerja dalam mode administratif, maka tandanya akan\nberubah menjadi \u201c#\u201d.\nUntuk menjalankan suatu perintah, Anda bisa ketik perintah tersebut lalu\nmenekan tombol enter. Sebagai contoh, untuk menampilkan isi suatu folder/\ndirektori, Anda bisa ketik perintah \u201cls\u201d lalu tekan tombol Enter, maka Anda\nakan melihat antarmuka teks seperti berikut :\nblankon@blankon:~/Contoh$ ls\u21b5\nabout-jubing.txt           \too-sampul-dan-stiker-cd-dvd.odg\nbuku-panduan.tar.bz2       \too-selamat-datang.odt\nBungong_Jeumpa.ogg         \too-tentang-blankon.odt\noo-jadwal-pembayaran.ods        sampul_stiker_cd.tar.bz2\noo-maxwell.odt             \tsouvenir-src.tar.bz2\noo-presentasi-blankon.odp  \tStudi Kasus - Daftar Pengguna Blankon.pdf\nblankon@blankon:~/Contoh$\nUntuk menjalankan perintah yang bersifat administratif, Anda bisa mengetik\nperintah \u201csudo\u201d sebelum perintah yang ingin Anda jalankan. Anda harus memiliki\nwewenang untuk menggunakan sudo agar perintah bisa berjalan. Misalnya, jika\ningin menghapus berkas \u201cnasi.txt\u201d pada folder /opt (Dalam hal ini, Anda tidak\nmemiliki hak untuk mengelola folder /opt), Anda bisa ketik perintah \u201csudo rm /\nopt/nasi.txt\u201d.\nblankon@blankon:~$ sudo rm /opt/nasi.txt \u21b5\n","[sudo]"," password for blankon:\nblankon@blankon:~$\nINFO: Walaupun menyediakan id pengguna khusus untuk menjalankan\nperintah bersifat administratif (yaitu root), secara default Anda\ntidak bisa menggunakannya untuk login. Anda bisa login ke root dengan\ncara mengetik perintah \u201csudo su -\u201d.\nblankon@blankon:~$ sudo su -\u21b5\n","[sudo]"," password for blankon:\nroot@blankon:~#")),Object(r.b)("h3",{id:"perintah-perintah-dalam-antarmuka-teks"},"Perintah-perintah dalam Antarmuka Teks"),Object(r.b)("p",null,"Berikut adalah berbagai penjelasan dari perintah-perintah dalam pengelolaan\nberkas secara sederhana menggunakan antarmuka teks."),Object(r.b)("h4",{id:"berpindah-folderdirektori-cd"},"Berpindah Folder/Direktori? (cd)"),Object(r.b)("p",null,"Untuk berpindah dari satu folder ke folder lainnya, Anda bisa ketik perintah\n\u201ccd\u201d dan diikuti dengan alamat folder yang dibuka (dipisah dengan spasi).\nSebagai contoh, jika ingin membuka folder Unduhan yang ada di dalam folder\nhome, Anda bisa ketik \u201ccd ~/Unduhan\u201d. Jika Anda berada di dalam folder home,\nAnda cukup ketik \u201ccd Unduhan\u201d saja.\nblankon@blankon:~$  cd Unduhan\u21b5\nblankon@blankon:~/Unduhan$\nJika ingin berpindah ke folder yang ada di level lebih atas, ketik perintah \u201ccd\n..\u201d.\nblankon@blankon:~/Unduhan$  cd ..\u21b5\nblankon@blankon:~$"),Object(r.b)("h4",{id:"melihat-isi-folderdirektori-ls"},"Melihat Isi Folder/Direktori? (ls)"),Object(r.b)("p",null,"Untuk melihat isi dari suatu folder/direktory Anda saat ini, Anda cukup ketik\nopsi \u201cls\u201d.\nblankon@blankon:~/Contoh$ ls\u21b5\nabout-jubing.txt           oo-sampul-dan-stiker-cd-dvd.odg\nbuku-panduan.tar.bz2       oo-selamat-datang.odt\nBungong_Jeumpa.ogg         oo-tentang-blankon.odt\noo-jadwal-pembayaran.ods   sampul_stiker_cd.tar.bz2\noo-maxwell.odt             souvenir-src.tar.bz2\noo-presentasi-blankon.odp  Studi Kasus - Daftar Pengguna Blankon.pdf\nblankon@blankon:~$\nAnda juga bisa membuka isi folder lain selain folder saat ini dengan\nmenambahkan lokasi folder setelah perintah ls dengan dipisah spasi. Misalnya,\nketik perintah \u201cls /usr\u201d untuk menampilkan isi folder /usr.\nblankon@blankon1:~$ ls /usr\u21b5\nbin  games  include  lib  lib64  libexec  local  sbin  share  src  X11R6\nblankon@blankon:~$\nUntuk informasi berkas/folder di dalam folder, Anda bisa menambahkan opsi \u201c -l\u201d\npada perintah \u201cls\u201d yang Anda jalankan.\nblankon@blankon1~$  ls /usr -l\u21b5\ntotal 148\ndrwxr-xr-x  2 \troot root 36864\t2010-06-08 14:21 bin\ndrwxr-xr-x  2 \troot root 4096 \t2010-05-14 04:14 games\ndrwxr-xr-x  39 \troot root 4096 \t2010-05-14 04:14 include\ndrwxr-xr-x 198 \troot root 69632\t2010-06-08 14:21 lib\ndrwxr-xr-x 3 \troot root 4096 \t2010-05-14 04:13 lib64\ndrwxr-xr-x 10 \troot root 4096 \t2010-05-14 04:04 local\ndrwxr-xr-x 2 \troot root 12288\t2010-06-08 14:21 sbin\ndrwxr-xr-x 284 \troot root 12288\t2010-06-08 14:21 share\ndrwxrwsr-x 5 \troot src  4096 \t2010-06-08 14:21 src\nblankon@blankon:~$"),Object(r.b)("h4",{id:"membuka-berkas"},"Membuka Berkas"),Object(r.b)("p",null,"Untuk membuka suatu berkas menggunakan suatu aplikasi, Anda bisa mengetik\nperintah untuk menjalankan aplikasi kemudian diikuti dengana nama atau path\ndari berkas yang ingin dibuka. Misalnya, jika ingin membuka berkas \u201coo-tentang-\nblankon.odt\u201d pada folder \u201cContoh\u201d dengan OpenOffice?.org, Anda bisa ketik\nperintah \u201csoffice Contoh/oo-tentang-blankon.odt\u201d.\nblankon@blankon:~$  soffice Contoh/oo-tentang-blankon\u21b5\nSebagai catatan, jika Anda ingin menjalankan aplikasi berbasis grafis, Anda\nharus menggunakan antarmuka teks yang berada di bawah mode grafis alias\nterminal emulator. Jika tidak, maka akan muncul pesan kesalahan.\nPada saat aplikasi sedang dijalankan, JANGAN menutup atau mengakhiri sesi\nantarmuka teks, karena akan menyebabkan aplikasi yang dibuka tertutup secara\npaksa dan menyebabkan kehilangan berkas."),Object(r.b)("h4",{id:"membuat-direktory-mkdir"},"Membuat Direktory (mkdir)"),Object(r.b)("p",null,"Untuk membuat direktory/folder, Anda bisa menggunakan perintah \u201cmkdir\nnamafolder\u201d atau \u201cmkdir path-folder\u201d. Maka akan dibuat folder baru yang berada\ndi bawah folder Anda saat ini.\nblankon@blankon:~$ mkdir Coba\u21b5\nblankon@blankon:~$ cd Coba\u21b5\nblankon@blankon:~/Coba$ mkdir ../Dokumen/Coba1\u21b5\nblankon@blankon:~/Coba$ cd ../Dokumen/Coba1\u21b5\nblankon@blankon:~/Dokumen/Coba1$"),Object(r.b)("h4",{id:"menghapus-direktory-rmdir"},"Menghapus Direktory (rmdir)"),Object(r.b)("p",null,"Untuk menghapus suatu direktory/folder, Anda bisa gunakan perintah \u201crmdir\nnamafolder\u201d atau \u201crmdir path-folder\u201d. Syaratnya, folder tersebut harus kosong\ntanpa berisi berkas atau subfolder apapun.\nblankon@blankon:~$ rmdir Coba\u21b5\nblankon@blankon:~$ cd Coba\u21b5\nbash: cd: Coba: No such file or directory\nblankon@blankon:~/Coba$ rmdir ../Dokumen/Coba1\u21b5\nblankon@blankon:~/Coba$ cd ../Dokumen/Coba1\u21b5\nbash: cd: Coba1: No such file or directory"),Object(r.b)("h4",{id:"menghapus-berkas-rm"},"Menghapus Berkas (rm)"),Object(r.b)("p",null,"Untuk menghapus suatu berkas, gunakan perintah \u201crm\u201d lalu diikuti dengan nama\nberkas atau dilengkapi dengan path (alamat lengkapnya) jika diperlukan.\nPeringatan: Setelah Anda menjalankan perintah ini, berkas akan dihilangkan\nbegitu saja tanpa konfirmasi. Jadi, hati-hati dalam menggunakannya.\nblankon@blankon:~/Coba$ rm nasi.txt\u21b5\nJika ingin menghapus suatu isi folder sampai isinya secara rekursif, Anda juga\nbisa gunakan perintah ini dengan menambahkan opsi \u201c-R\u201d. Sekali lagi, hati-hati\ndalam menggunakan perintah ini.\nblankon@blankon:~/Coba$ rm -R Coba\u21b5"),Object(r.b)("h4",{id:"menggandakan-berkas-cp"},"Menggandakan Berkas (cp)"),Object(r.b)("p",null,"Untuk menggandakan berkas, gunakan perintah cp dengan format \u201ccp berkas-sumber\nfolder-tujuan\u201d. Seperti semua perintah di atas, Anda juga bisa menyebutkan path\npenuh dari berkas-sumber atau folder-tujuan jika diperlukan. Contohnya, jika\ningin menggandakan berkas \u201cContoh/oo-tentang-blankon.odt\u201d ke dalam folder\nDokumen, gunakan perintah \u201ccp nasi.txt Dokumen\u201d.\nblankon@blankon:~/Contoh$ sudo cp oo-tentang-blankon.odt /home/naya/Dokumen/\u21b5\n","[sudo]"," password for naya:\nblankon@blankon:~/Contoh$ cd ../Dokumen\u21b5\nblankon@blankon:~/Dokumen$ ls\u21b5\noo-tentang-blankon.odt\nblankon@blankon:~/Dokumen$\nSama dengan perintah rm, Anda bisa manfaatkan opsi \u201c-R\u201d jika ingin menggandakan\nsuatu folder secara rekursif.\nblankon@blankon:~$ cp -R Dokumen Kerangka\u21b5\nblankon@blankon:~$ cd Kerangka\u21b5\nblankon@blankon:~/Kerangka$ ls\u21b5\noo-tentang-blankon.odt\nblankon@blankon:~/Kerangka$"),Object(r.b)("h4",{id:"memindahkan-berkasfolder-mv"},"Memindahkan Berkas/Folder? (mv)"),Object(r.b)("p",null,"Untuk memindahkan berkas/folder, Anda bisa gunakan perintah \u201cmv\u201d. Penggunaanya\nmirip dengan perintah \u201ccp\u201d. Hanya saja, jika memindahkan suatu folder, Anda\ntidak perlu menggunakan opsi recursif \u201c-R\u201d. Contohnya, jika ingin memindahkan\nfile \u201cnasi.txt\u201d ke dalam folder \u201cDokumen\u201d, ketik perintah \u201cmv nasi.txt\nDokumen\u201d.\nblankon@blankon:~$ mv nasi.txt Dokumen\u21b5\nblankon@blankon:~$ cd /Dokumen\u21b5\nblankon@blankon:~/Dokumen$ ls\u21b5\nnasi.txt\nblankon@blankon:~/Dokumen$"),Object(r.b)("h4",{id:"mengubah-nama-berkasfolder-mv"},"Mengubah Nama Berkas/Folder? (mv)"),Object(r.b)("p",null,"Perintah yang digunakan untuk mengubah nama berkas sama dengan perintah untuk\nmemindahkan berkas/folder yaitu \u201cmv\u201d. Cara penggunaannya pun sama. Contoh,\nuntuk mengubah nama berkas \u201cnasi.txt\u201d ke \u201cwira.txt\u201d, ketik perintah \u201cmv\nnasi.txt wira.txt\u201d.\nblankon@blankon:~$ mv nasi.txt wira.txt\u21b5\nblankon@blankon:~$ ls\u21b5\n.........\nblankon.txt\n.........\nblankon@blankon:~$"),Object(r.b)("h4",{id:"mengubah-hak-akses-berkasfolder-chmod"},"Mengubah Hak Akses Berkas/Folder? (chmod)"),Object(r.b)("p",null,"Untuk mengubah hak akses berkas/folder, Anda bisa gunakan perintah chmod dengan\nformat \u201cchmod hakakses berkas/folder\u201d. Hak akses diisi dengan tiga angka oktal.\nAngka ke-1 merupakan hak untuk pemilik, angka ke-2 merupakan hak untuk grup dan\nangka ke-3 merupakan hak untuk selain pemilik dan grup. Masing-masing bagian\ndiisi dengan angka basis 8, dimana hak baca bernilai 4, hak tulis bernilai 2,\nhak eksekusi bernilai 1.\nSebagai contoh, untuk mengubah berkas \u201cskrip.py\u201d agar hak baca,tulis dan\neksekusi untuk pemilik, sedangkan yang lain hanya memiliki hak baca dan\neksekusi, Anda bisa ketik perintah \u201cchmod 755 skrip.py\u201d.\nblankon@blankon:~$ chmod 755 skrip.py\u21b5\nUntuk memberikan suatu hak akses secara rekursif pada suatu folder, Anda bisa\nmenambahkan opsi \u201c-R\u201d. Misalnya, jika ingin memberikan hak mutlak (hak\nbaca,tulis,eksekusi untuk semua aspek) pada folder Public, Anda bisa ketik\nperintah \u201cchmod 777 -R Public\u201d.\nblankon@blankon:~$ chmod 777 -R Publik\u21b5\nUntuk menampilkan hak akses suatu berkas/folder, Anda bisa manfaatkan perintah\n\u201cls -l\u201d. Kemudian, Anda akan melihat seperti karakter yang dicetak tebal yang\nmerupakan hak akses dari berkas tersebut. Keenam karakter itu dibagi menjadi\ntiga, bagian pertama merupakan hak akses pemilik, bagian kedua merupakan hak\nakses grup dan bagian terakhir merupakan hak akses selain pemilik dan grup.\nblankon@blankon:~/Dokumen$ ls -l \u21b5\n-rw-r--r-- 1 root root 52625 2010-06-08 19:44 oo-tentang-blankon.odt\nKeterangan : r : Hak Baca, w : Hak tulis, x : Hak eksekusi"),Object(r.b)("h4",{id:"mengubah-id-pemilik-atau-grup-pada-berkasfolder-chown"},"Mengubah ID Pemilik atau Grup pada Berkas/Folder? (chown)"),Object(r.b)("p",null,'Untuk mengubah id pemilik atau grup pada berkas/folder, gunakan perintah chown\ndengan format \u201cchown id-pemilik namaberkas\u201d jika ingin mengubah id pemilik\nberkas/folder, \u201cchown :grup namaberkas\u201d untuk mengganti grup berkas dan \u201cchown\nid-pemilik:grup nama berkas\u201d jika ingin mengubah id pemilik dan nama grup pada\nsuatu berkas sekaligus. Ingat, yang hanya bisa mengubah pemilik berkas hanyalah\npengguna administratif, sedangkan grup hanya bisa diubah oleh pemilik berkas.\nContohnya, jika ingin mengubah grup berkas menjadi \u201cadmin\u201d pada berkas\nnasi.txt, Anda bisa ketik perintah \u201cchown :admin nasi.txt\u201d.\nblankon@blankon:~/Dokumen$ chown :admin nasi.txt\u21b5\nUntuk mengetahui id pemilik dan grup dari suatu berkas/folder, Anda bisa\nmanfaatkan perintah \u201cls -l\u201d. Kolom kedua dari setiap informasi berkas merupakan\nid pemilik berkas, sedangkan kolom selanjutnya merupakan grup/kelompok pemilik\nberkas.\nblankon@blankon:~/Dokumen$ ls -l \u21b5\ntotal 56\n-rw-r--r-- 1 blankon admin     9 2010-06-08 19:50 nasi.txt\n-rw-r--r-- 1 root root  52625 2010-06-08 19:44 oo-tentang-blankon.odt\nKeterangan : teks "blankon" di sebelah kiri adalah id pengguna pemilik berkas,\nsedangkan yang disebelah kanan merupakan id grup/kelompok pemilik berkas.'),Object(r.b)("h4",{id:"membuat-berkas-tar-tar"},"Membuat Berkas Tar (tar)"),Object(r.b)("p",null,"Tar merupakan program yang berfungsi untuk menyatakan beberapa berkas/folder ke\ndalam satu berkas yang disebut dengan tarfile/tarball. Sangat berguna sekali\nuntuk melakukan backup.\nUntuk membuat berkas tar, selain melalui aplikasi pengelola arsip pada desktop,\nAnda juga bisa gunakan perintah tar dengan format \u201ctar -f berkas.tar\nnamaberkas/folder1 namaberkas/folder2.....\u201d. Anda juga bisa gunakan opsi \u201c-v\u201d\nagar menampilkan informasi detail dari proses tar.\nblankon@blankon:~$ tar -cvf coba.tar Templat/\nTemplat/\nSedangkan untuk mengekstrak atau mengeluarkan isi suatu tarfile, Anda bisa\ngunakan perintah dengan format \u201ctar -xf berkas.tar -C folder-tujuan\u201d.\nblankon@blankon:~$ tar -xf coba.tar -C ~\u21b5"),Object(r.b)("h4",{id:"kompresi-gzip-gzip"},"Kompresi Gzip (gzip)"),Object(r.b)("p",null,"Gzip atau GNU Zip merupakan format arsip terkompresi dengan algoritma Lempel-\nZiv (LZ77). Untuk melakukan kompresi suatu berkas dengan format Gzip, gunakan\nperintah \u201cgzip namaberkas\u201d. Ekstensi berkas hasil kompresi adalah *.gz.\nSebaliknya, untuk melakukan decompress, gunakan perintah \u201cgunzip\nnamaberkas.bz2\u201d.\nblankon@blankon:~$ gzip coba.tar\u21b5\nblankon@blankon:~$ ls\u21b5\ncoba.tar.gz\nblankon@blankon:~$ gunzip coba.tar.gz\u21b5\nblankon@blankon:~$ ls\u21b5\ncoba.tar\nblankon@blankon:~$"),Object(r.b)("h4",{id:"kompresi-bzip2-bzip2"},"Kompresi Bzip2 (bzip2)"),Object(r.b)("p",null,"Bzip2 atau GNU Bzip2 merupakan format kompresi arsip dengan algoritma Burrows-\nWheller block sorting text compression. Untuk melakukan kompresi suatu berkas\ndengan format bzip2, gunakan perintah \u201cbzip2 namaberkas\u201d. Ekstensi berkas hasil\nkompresi adalah *.bz2. Sedangkan untuk melakukan decompress, gunakan perintah\n\u201cbunzip namaberkas.bz2\u201d.\nblankon@blankon:~$ bzip2 coba.tar\u21b5\nblankon@blankon:~$ ls\u21b5\ncoba.tar.bz2\nblankon@blankon:~$ bunzip2 coba.tar.gz\u21b5\nblankon@blankon:~$ ls\u21b5\ncoba.tar\nblankon@blankon:~$\nINFO: Baik format gzip maupun bzip2 \u201chanya\u201d melakukan kompresi\nterhadap sebuah berkas. Jika ingin mengkompresi banyak berkas di\ndalam sebuah berkas, Anda harus menggunakan perpaduan antara perintah\ntar dengan perintah gzip maupun bzip2. Anda bisa menambahkan opsi \u201c-\nz\u201d pada perintah tar untuk membuat/mengextract tarball dengan format\nkompresi GZIP. Sedangkan untuk membuatnya dengan format BZIP2,\ngunakan opsi \u201c-j\u201d pada perintah tar."),Object(r.b)("h4",{id:"pencarian-berkas-find"},"Pencarian Berkas (find)"),Object(r.b)("p",null,"Untuk mencari berkas, gunakan perintah find dengan opsi \u201cfind folder -name\n\u201cnamaberkas\u201d. Contohnya, jika Anda ingin mencari berkas bernama \u201cwira\u201d di dalam\nfolder rumah/home, ketik perintah \u201cfind ~ -name \u201cwira\u201d\u201d. Maka akan muncul path/\nlokasi dari berkas/fodler yang bernama wira.\nblankon@blankon:~$ find ~ -name \u201cblankon\u201d\u21b5\n/home/blankon\n/home/blankon/.wine/drive_c/windows/profiles/blankon\n/home/blankon/.openme/cache/home/blankon\nblankon@blankon:~$\nTIP: Jika Anda ingin menulis nama berkas/folder lebih cepat, Anda\nbisa terlebih dahulu mengetik satu/beberapa huruf awal dari nama\nberkas/folder tersebut, kemudian menekan tombol Tab pada keyboard.\nContohnya, jika ingin mengetik nama berkas \u201cwirama.txt\u201d lebih cepat,\nAnda bisa ketik \u201cw\u201d saja atau \u201cwi\u201d, kemudian menekan tombol Tab.\nSecara otomatis, nama berkas akan dilengkapi.\nTIP: Jika ingin menyebutkan banyak nama berkas/folder yang memiliki\nhuruf awal sama (misalnya, \u201cwira.txt\u201d, \u201cweda.txt\u201d, \u201cwanti.txt\u201d,\n\u201cwantek.txt\u201d) Anda cukup ketik \u201cw",Object(r.b)("em",{parentName:"p"},"\u201d (w disertai tanda bintang \u201c"),"\u201d).\nJika ingin menyebutkan huruf belakangnya (misalnya ingin menyebutkan\nekstensi berkas txt), Anda bisa ketik \u201c*.txt\u201d.\nSebenarnya, masih banyak lagi perintah-perintah untuk antarmuka teks yang bisa\nAnda gunakan untuk bekerja. Untuk melakukan otomatisasi kerja, Anda juga bisa\nmembuat skrip yang disebut dengan shell script. Otomatisasi pekerjaan sangat\npenting bagi administrator untuk memperingan dan mempercepat pekerjaannya dalam\njaringan. Untuk mempelajari shell script lebih lanjut, Anda bisa membaca buku\ntentang Bash Scripting atau mencari referensi melalui internet.\nLast modified on 05/26/2011 11:59:49 PM"),Object(r.b)("h4",{id:"attachments-1"},"Attachments (1)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"gnome-terminal.png\u200b (13.2 KB) - added by guspur 6 years ago.")),Object(r.b)("h4",{id:""}),Object(r.b)("hr",null))}s.isMDXComponent=!0}}]);