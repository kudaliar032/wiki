(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{1016:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},O=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),O=r,f=p["".concat(a,".").concat(O)]||p[O]||m[O]||i;return t?o.a.createElement(f,c(c({ref:n},l),{},{components:t})):o.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=O;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"},454:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),i=(t(0),t(1016)),a={},c={unversionedId:"TimPengembang/Dokumentasi/Kelas/ContohMembuatRepositoryBlankon",id:"TimPengembang/Dokumentasi/Kelas/ContohMembuatRepositoryBlankon",isDocsHomePage:!1,title:"ContohMembuatRepositoryBlankon",description:"Contoh Script",source:"@site/wiki/TimPengembang/Dokumentasi/Kelas/ContohMembuatRepositoryBlankon.md",slug:"/TimPengembang/Dokumentasi/Kelas/ContohMembuatRepositoryBlankon",permalink:"/TimPengembang/Dokumentasi/Kelas/ContohMembuatRepositoryBlankon",editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Dokumentasi/Kelas/ContohMembuatRepositoryBlankon.md",version:"current",lastUpdatedBy:"Aditya Rahman",lastUpdatedAt:1601992810},s=[{value:"Debmirror",id:"debmirror",children:[]},{value:"rsync",id:"rsync",children:[]}],l={rightToc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"contoh-script"},"Contoh Script"),Object(i.b)("h2",{id:"debmirror"},"Debmirror"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"#!/bin/bash\ndebmirror -v -passive \\\n--host=mirror.unej.ac.id \\\n--root=blankon --method=ftp \\\n--progress \\\n--dist=meuligoe,meuligoe-updates,meuligoe-security \\\n--section=main,restricted \\\n--arch=i386 --ignore-release-gpg --no-source -pdiff=none /ftp/blankon/\n")),Object(i.b)("h2",{id:"rsync"},"rsync"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'#!/bin/sh\nset -e\n\nTO=/ftp/blankon\nRSYNC_HOST=yeyen.blankonlinux.or.id\nRSYNC_DIR=archive\nLOGDIR=/tmp\nLOCK_TIMEOUT=360\nLOGFILE=$LOGDIR/blankon-mirror.log\nHOSTNAME=`hostname -f`\nLOCK="${TO}/Archive-Update-Progress-from-${RSYNC_HOST}"\nTMP_EXCLUDE="--exclude .~tmp~/"\nEXCLUDE="\\\n  --exclude local/ --exclude gutsy/ --exclude unstable/"\n  \nif [ -z "$TO" ] || [ -z "$RSYNC_HOST" ] || [ -z "$RSYNC_DIR" ] || [ -z "$LOGDIR" ]; then\n    echo "One of the following variables seems to be empty:"\n    echo "TO, RSYNC_HOST, RSYNC_DIR or LOGDIR"\n    exit 2\nfi\n\nif [ ! -d "${TO}/project/trace/" ]; then\n  mkdir -p ${TO}/project/trace\nfi\n\nif [ -f "$LOCK" ]; then\n  if [ "`find $LOCK -maxdepth 1 -cmin -$LOCK_TIMEOUT`" = "" ]; then\n    if ps ax | grep \'[r]\'sync | grep -q $RSYNC_HOST; then\n      echo "stale lock found, but a rsync is still running, aiee!"\n      exit 1\n    else\n      echo "stale lock found (not accessed in the last $LOCK_TIMEOUT minutes), forcing update!"\n      rm -f $LOCK\n    fi\n  else\n    echo "current lock file exists, unable to start rsync!"\n    exit 1\n  fi\nfi\n\ntouch $LOCK\n\ntrap "rm -f $LOCK" exit\n\nset +e\n\necho "mirroring BlankOn archive"\necho "from $RSYNC_HOST::$RSYNC_DIR to $TO"\n\n# First sync /pool\nrsync --recursive --links --hard-links --times \\\n     --verbose --progress \\\n     --timeout=3600 \\\n     $TMP_EXCLUDE $EXCLUDE $SOURCE_EXCLUDE \\\n     $RSYNC_HOST::$RSYNC_DIR/pool/ $TO/pool/ > $LOGFILE 2>&1\nresult=$?\n\nif [ "$result" = 0 ]; then\n    # Now sync the remaining stuff\n\necho "mirror tinggal  satu step lagi"\nrsync --recursive --links --hard-links --times \\\n         --verbose --progress \\\n         --delay-updates --delete-after \\\n         --timeout=3600 \\\n         $TMP_EXCLUDE $EXCLUDE \\\n         $RSYNC_HOST::$RSYNC_DIR/ $TO >> $LOGFILE 2>&1\n\n    LANG=C date -u > "${TO}/project/trace/${HOSTNAME}"\nelse\n    echo "ERROR: Help, something weird happened" | tee -a $LOGFILE\n    echo "mirroring /pool exited with exitcode" $result | tee -a $LOGFILE\nfi\n\nMAILTO=udienz@gmail.com\nif [ -n "$MAILTO" ]; then\n    mail -s "BlankOn archive synced" $MAILTO < $LOGFILE\nfi\n\nsavelog $LOGFILE >/dev/null\n\nrm $LOCK\n')))}u.isMDXComponent=!0}}]);