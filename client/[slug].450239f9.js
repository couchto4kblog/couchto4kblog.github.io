import{S as t,i as s,s as a,a as e,e as n,t as i,q as o,d as r,f as c,c as l,b as u,k as h,g as f,h as m,j as p,w as d,n as v}from"./client.114fa8f5.js";function g(t){let s,a,g,j,x,w,y=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),j=i(y),x=e(),w=n("div"),this.h()},l(t){o('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=u(g);j=h(s,y),s.forEach(r),x=c(t),w=l(t,"DIV",{class:!0}),u(w).forEach(r),this.h()},h(){f(w,"class","content svelte-gnxal1")},m(t,s){m(t,a,s),m(t,g,s),p(g,j),m(t,x,s),m(t,w,s),w.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&d(j,y),1&a&&E!==(E=t[0].html+"")&&(w.innerHTML=E)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(x),t&&r(w)}}}async function j({params:t,query:s}){const a=await this.fetch(`summits/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function x(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,x,g,a,{post:0})}}export{j as preload};
