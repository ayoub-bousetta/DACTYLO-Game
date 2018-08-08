!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s="./src/js/main.js")}({"./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */function(e,t,n){},"./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */function(e,t,n){"use strict";n.r(t);var r=n(/*! ../js/functions.js */"./src/js/functions.js");window.addEventListener("load",r.Init)},"./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/*! no static exports found */function(e,t){document.getElementById("wordsinput");document.getElementById("timer");document.getElementById("msg");document.getElementById("score"),document.getElementById("wordtowrite"),document.getElementById("finalscore"),document.getElementById("switcher"),document.getElementById("leveltext"),document.getElementById("timerh"),document.getElementById("charts")},"./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! exports provided: Init */function(e,t,n){"use strict";n.r(t),n.d(t,"Init",function(){return l});n(/*! ../js/dom.js */"./src/js/dom.js");let r,o,i=!0,s=0,c="noob";const u={noob:{word:5,time:20},pro:{word:10,time:10}},d=Array(),l=()=>{a(c),j(),m(),f()};switcher.addEventListener("change",function(){this.checked?(c="pro",g()):(c="noob",g())});const a=e=>{r=u[e].time,o=u[e].word,timer.innerHTML=r,leveltext.innerHTML=e,charts.innerHTML=o,timerh.innerHTML=u[e].time},m=()=>{fetch("https://raw.githubusercontent.com/AlexHakman/Java-challenge/master/words.txt").then(e=>e.text()).then(e=>{const t=e.split("\n");for(let e=0;e<t.length;e++)t[e].length<=o&&d.push(t[e]);const n=d[Math.floor(Math.random()*d.length)];wordtowrite.innerHTML=n})},f=e=>{wordsinput.addEventListener("keyup",e=>{13===e.keyCode&&(0==timer.innerHTML?(g(),j(),y(wordsinput.value)):y(wordsinput.value))})},p=()=>{0==i&&(msg.innerHTML="Game over",score.innerHTML=0,timer.innerHTML=0,wordsinput.value="",finalscore.innerHTML="Your finale score is:"+s,r=0)},g=()=>{a(c),msg.innerHTML="",score.innerHTML=0,finalscore.innerHTML="",i=!0,s=0},y=e=>{wordtowrite.innerHTML.trim()==e.trim()?(s++,score.innerHTML=s,a(c),wordsinput.value="",i=!0,m()):(i=!1,p())},j=()=>{let e=setInterval(()=>{r>0&&1==i?(r--,timer.innerHTML=r):(i=!1,clearInterval(e),p())},1e3)}},"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */function(e,t,n){"use strict";n.r(t);n(/*! ../css/main.scss */"./src/css/main.scss"),n(/*! ../js/app.js */"./src/js/app.js")}});
//# sourceMappingURL=app.bandle.js.map