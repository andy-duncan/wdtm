!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const r={text:"zero",start:1.5,length:1.2},o={text:"hundred",start:58,length:1.2},s={text:"thousand",start:60,length:1.2},l={text:"and",start:72,length:1.2},a=[[],[{text:"one",start:3.6,length:1.2}],[{text:"two",start:5.5,length:1.2}],[{text:"three",start:7.5,length:1.2}],[{text:"four",start:9.5,length:1.2}],[{text:"five",start:11.5,length:1.2}],[{text:"six",start:13.5,length:1.2}],[{text:"seven",start:15.5,length:1.2}],[{text:"eight",start:17.5,length:1.2}],[{text:"nine",start:19.5,length:1.2}]],h=t=>a.map(e=>e?[t,...e]:[t]),u=[a,[[{text:"ten",start:21.5,length:1.2}],[{text:"eleven",start:23.5,length:1.2}],[{text:"twelve",start:25.5,length:1.6}],[{text:"thirteen",start:27.5,length:1.2}],[{text:"fourteen",start:29.5,length:1.2}],[{text:"fifteen",start:31.5,length:1.2}],[{text:"sixteen",start:33.5,length:1.2}],[{text:"seventeen",start:35.5,length:1.2}],[{text:"eighteen",start:37.5,length:1.2}],[{text:"nineteen",start:39.5,length:1.2}]],h({text:"twenty",start:41.5,length:1.2}),h({text:"thirty",start:43.5,length:1.2}),h({text:"forty",start:45.5,length:1.2}),h({text:"fifty",start:47.5,length:1.2}),h({text:"sixty",start:49.5,length:1.2}),h({text:"seventy",start:51.5,length:1.2}),h({text:"eighty",start:53.5,length:1.2}),h({text:"ninety",start:55.5,length:1.2})],i=t=>{const e=[],n=Math.floor(t/100),r=Math.floor(t%100/10),s=u[r][t%10],h=a[n];return e.push(...h),h.length>0&&(e.push(o),s.length>0&&e.push(l)),e.push(...s),e},g=t=>(t=>{const e=[],n=Math.floor(t/1e3),o=Math.floor(t%1e3),a=i(n),h=i(o);return e.push(...a),a.length>0&&(e.push(s),o>0&&o<100&&e.push(l)),e.push(...h),0===e.length&&e.push(r),e})(t).map(t=>t.text).join(" "),c=document.head,x=document.body,p=document.createElement("SCRIPT");p.src="http://code.responsivevoice.org/responsivevoice.js",c.appendChild(p);const f=document.createElement("INPUT");f.type="text",x.appendChild(f);const d=document.createElement("BUTTON");d.type="button",d.value="What does that make?",d.onclick=(()=>{const t=f.value;responsiveVoice.speak(g(t),"UK English Male")}),x.appendChild(d)}]);