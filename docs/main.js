!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=36)}([function(e,t,n){n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23),n(24),n(25),n(26),n(27),n(28),n(29),n(30),n(31),n(32),n(33),n(34),n(35)},function(e,t,n){e.exports=n.p+"zero.m4a"},function(e,t,n){e.exports=n.p+"one.m4a"},function(e,t,n){e.exports=n.p+"two.m4a"},function(e,t,n){e.exports=n.p+"three.m4a"},function(e,t,n){e.exports=n.p+"four.m4a"},function(e,t,n){e.exports=n.p+"five.m4a"},function(e,t,n){e.exports=n.p+"six.m4a"},function(e,t,n){e.exports=n.p+"seven.m4a"},function(e,t,n){e.exports=n.p+"eight.m4a"},function(e,t,n){e.exports=n.p+"nine.m4a"},function(e,t,n){e.exports=n.p+"ten.m4a"},function(e,t,n){e.exports=n.p+"eleven.m4a"},function(e,t,n){e.exports=n.p+"twelve.m4a"},function(e,t,n){e.exports=n.p+"thirteen.m4a"},function(e,t,n){e.exports=n.p+"fourteen.m4a"},function(e,t,n){e.exports=n.p+"fifteen.m4a"},function(e,t,n){e.exports=n.p+"sixteen.m4a"},function(e,t,n){e.exports=n.p+"seventeen.m4a"},function(e,t,n){e.exports=n.p+"eighteen.m4a"},function(e,t,n){e.exports=n.p+"nineteen.m4a"},function(e,t,n){e.exports=n.p+"twenty.m4a"},function(e,t,n){e.exports=n.p+"thirty.m4a"},function(e,t,n){e.exports=n.p+"forty.m4a"},function(e,t,n){e.exports=n.p+"fifty.m4a"},function(e,t,n){e.exports=n.p+"sixty.m4a"},function(e,t,n){e.exports=n.p+"seventy.m4a"},function(e,t,n){e.exports=n.p+"eighty.m4a"},function(e,t,n){e.exports=n.p+"ninety.m4a"},function(e,t,n){e.exports=n.p+"hundred.m4a"},function(e,t,n){e.exports=n.p+"thousand.m4a"},function(e,t,n){e.exports=n.p+"million.m4a"},function(e,t,n){e.exports=n.p+"billion.m4a"},function(e,t,n){e.exports=n.p+"trillion.m4a"},function(e,t,n){e.exports=n.p+"quadrillion.m4a"},function(e,t,n){e.exports=n.p+"and.m4a"},function(e,t,n){"use strict";n.r(t);n(0);const o=[[],["one"],["two"],["three"],["four"],["five"],["six"],["seven"],["eight"],["nine"]],i=e=>o.map(t=>t?[e,...t]:[e]),r=[o,[["ten"],["eleven"],["twelve"],["thirteen"],["fourteen"],["fifteen"],["sixteen"],["seventeen"],["eighteen"],["nineteen"]],i("twenty"),i("thirty"),i("forty"),i("fifty"),i("sixty"),i("seventy"),i("eighty"),i("ninety")],{playAudio:p,text:l}=((e,t)=>{const n=e=>{const t=[],n=Math.floor(e/100),i=Math.floor(e%100/10),p=r[i][e%10],l=o[n];return t.push(...l),l.length>0&&(t.push("hundred"),p.length>0&&t.push("and")),t.push(...p),t},i=e=>e.split("").reverse().join(""),p=[[],["thousand"],["million"],["billion"],["trillion"],["quadrillion"]],l=e=>{const t=i(e.toString()).match(/.{1,3}/g).map(i),o=t.map(n).reverse(),r=p.slice(0,o.length).reverse(),l=o.reduce((e,n,i)=>{if(i===o.length-1){const n=parseInt(t[0]);e.length>0&&n>0&&n<100&&e.push("and")}return n&&n.length>0&&(e.push(...n),e.push(...r[i])),e},[]);return 0===l.length&&l.push("zero"),l},s=t=>{if(!t||!t.length)return;const[n,...o]=t;((e,t,n)=>{const o=()=>{e.removeEventListener(t,o),n()};e.addEventListener(t,o)})(e,"ended",()=>{s(o)}),e.src=`${n}.m4a`,e.play()};return{playAudio:e=>s((e=>l(e).map(e=>e))(e)),text:e=>l(e).map(e=>e).join(" ")}})(new Audio),s=document.body,a=(e,t,n)=>{const o=document.createElement("input");o.type="button",o.value=t||"",o.onclick=n,o.style.width="140px",o.style.height="80px",o.style["background-color"]="#F3EFFF",o.style.border="none",o.style.color="black",o.style.padding="15px 32px",o.style["text-align"]="center",o.style["text-decoration"]="none",o.style.display="inline-block",o.style["font-size"]="24px",o.style["-webkit-appearance"]="none";const i=document.createElement("DIV");return i.className=e,i.appendChild(o),i},c=document.createElement("DIV");c.style.display="grid",c.style.width="440px",c.style.border="3px solid #19BEFF",c.style["border-radius"]="8px",c.style["grid-gap"]="10px",c.style["grid-column-gap"]="10px",c.style["grid-template-columns"]="auto auto auto",c.style["justify-content"]="space-evenly",c.style["align-content"]="space-evenly",c.style["touch-action"]="manipulation";const u=document.createElement("div"),d=document.createElement("div");d.innerText="",d.style.height="100px",d.style.backgroundColor="white",d.style.color="black",d.style["font-family"]="system-ui",d.style["font-size"]="32px",d.style["font-weight"]="bold",d.style["line-height"]="100px",d.style["text-align"]="right",d.style["padding-right"]="5px",u.style["grid-column"]="1 / span 3",u.style.width="100%",u.appendChild(d),c.appendChild(u);const f=e=>()=>{const t=d.innerText.replace(/,/g,"");0==t.length&&"0"===e||t.length>=18||(d.innerText=(t+e).replace(/(.)(?=(\d{3})+$)/g,"$1,"))};["7","8","9","4","5","6","1","2","3"].forEach(e=>c.appendChild(a("grid-item",e,f(e))));const y=a("grid-item","0",f("0"));y.style["grid-column"]="1 / span 2",y.children[0].style.width="100%",c.appendChild(y);const m=a("grid-item","C",()=>{d.innerText=""});c.appendChild(m);const x=a("grid-item","WDTM?",()=>{const e=d.innerText.replace(/,/g,"");p(e)});x.children[0].style.width="100%",x.children[0].style.backgroundColor="#19BEFF",x.children[0].style.color="white",x.style["grid-column"]="1 / span 3",c.appendChild(x),s.appendChild(c)}]);