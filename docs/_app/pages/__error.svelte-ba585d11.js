import{S as o,i as l,s as c,e as d,t as f,c as h,a as u,h as m,d as i,g as _,J as p,j as g,K as r}from"../chunks/vendor-b629eb54.js";function v(s){let t,n;return{c(){t=d("h1"),n=f(s[0])},l(e){t=h(e,"H1",{});var a=u(t);n=m(a,s[0]),a.forEach(i)},m(e,a){_(e,t,a),p(t,n)},p(e,[a]){a&1&&g(n,e[0])},i:r,o:r,d(e){e&&i(t)}}}function j({error:s,status:t}){return{props:{title:`${t}: ${s.message}`}}}function x(s,t,n){let{title:e}=t;return s.$$set=a=>{"title"in a&&n(0,e=a.title)},[e]}class y extends o{constructor(t){super();l(this,t,x,v,c,{title:0})}}export{y as default,j as load};
