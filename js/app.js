(()=>{var e,r={309:()=>{var e,r=".accordion-button";e=".accordion",document.addEventListener("click",(function(t){if(t.target.matches("".concat(e," ").concat(r))){var a=t.target.parentElement.parentElement,c=a.querySelector(r);if(a.classList.contains("active"))a.classList.remove("active"),c.setAttribute("aria-expanded","false");else{var o=document.querySelectorAll("".concat(e," ").concat(".accordion-item"));Array.prototype.forEach.call(o,(function(e){e.classList.remove("active"),c.setAttribute("aria-expanded","true")})),a.classList.add("active")}}}))},511:()=>{}},t={};function a(e){var c=t[e];if(void 0!==c)return c.exports;var o=t[e]={exports:{}};return r[e](o,o.exports,a),o.exports}a.m=r,e=[],a.O=(r,t,c,o)=>{if(!t){var n=1/0;for(v=0;v<e.length;v++){for(var[t,c,o]=e[v],i=!0,s=0;s<t.length;s++)(!1&o||n>=o)&&Object.keys(a.O).every((e=>a.O[e](t[s])))?t.splice(s--,1):(i=!1,o<n&&(n=o));if(i){e.splice(v--,1);var l=c();void 0!==l&&(r=l)}}return r}o=o||0;for(var v=e.length;v>0&&e[v-1][2]>o;v--)e[v]=e[v-1];e[v]=[t,c,o]},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={773:0,170:0};a.O.j=r=>0===e[r];var r=(r,t)=>{var c,o,[n,i,s]=t,l=0;if(n.some((r=>0!==e[r]))){for(c in i)a.o(i,c)&&(a.m[c]=i[c]);if(s)var v=s(a)}for(r&&r(t);l<n.length;l++)o=n[l],a.o(e,o)&&e[o]&&e[o][0](),e[n[l]]=0;return a.O(v)},t=self.webpackChunkfaq_accordion_card_main=self.webpackChunkfaq_accordion_card_main||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),a.O(void 0,[170],(()=>a(309)));var c=a.O(void 0,[170],(()=>a(511)));c=a.O(c)})();