import{t as x,a as b,n as A,b as g,i as D,c as H,d as T,e as I,M as Y}from"./MovieCard-Cep76lPe.js";import{w,r as v,t as p,c as O,o as C,g as F,_ as X,a as W,b as _,F as j,d as R,e as $,u as q,f as M,h as z}from"./index-DRqsyOJv.js";import{M as G}from"./MovieService-DzJUzuJ-.js";const S=H?window:void 0;function y(e){var t;const n=p(e);return(t=n==null?void 0:n.$el)!=null?t:n}function J(...e){let t,n,s,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,r]=e,t=S):[t,n,s,r]=e,!t)return g;n=b(n),s=b(s);const a=[],c=()=>{a.forEach(u=>u()),a.length=0},o=(u,f,m,d)=>(u.addEventListener(f,m,d),()=>u.removeEventListener(f,m,d)),i=w(()=>[y(t),p(r)],([u,f])=>{if(c(),!u)return;const m=T(f)?{...f}:f;a.push(...n.flatMap(d=>s.map(h=>o(u,d,h,m))))},{immediate:!0,flush:"post"}),l=()=>{i(),c()};return I(l),l}function K(){const e=v(!1),t=F();return t&&C(()=>{e.value=!0},t),e}function Q(e){const t=K();return O(()=>(t.value,!!e()))}function U(e,t,n={}){const{root:s,rootMargin:r="0px",threshold:a=0,window:c=S,immediate:o=!0}=n,i=Q(()=>c&&"IntersectionObserver"in c),l=O(()=>{const h=p(e);return b(h).map(y).filter(A)});let u=g;const f=v(o),m=i.value?w(()=>[l.value,y(s),f.value],([h,P])=>{if(u(),!f.value||!h.length)return;const L=new IntersectionObserver(t,{root:y(P),rootMargin:r,threshold:a});h.forEach(V=>V&&L.observe(V)),u=()=>{L.disconnect(),u=g}},{immediate:o,flush:"post"}):g,d=()=>{u(),m(),f.value=!1};return I(d),{isSupported:i,isActive:f,pause(){u(),f.value=!1},resume(){f.value=!0},stop:d}}function B(e,t={}){const{window:n=S,scrollTarget:s,threshold:r=0,rootMargin:a}=t,c=v(!1);return U(e,o=>{let i=c.value,l=0;for(const u of o)u.time>=l&&(l=u.time,i=u.isIntersecting);c.value=i},{root:s,window:n,threshold:r,rootMargin:p(a)}),c}const Z={mounted(e,t){if(typeof t.value=="function"){const n=t.value,s=B(e);w(s,r=>n(r),{immediate:!0})}else{const[n,s]=t.value,r=B(e,s);w(r,a=>n(a),{immediate:!0})}}};function k(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function N(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:N(n)}}function ee(e){const t=e||window.event,n=t.target;return N(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const E=new WeakMap;function te(e,t=!1){const n=v(t);let s=null,r="";w(x(e),o=>{const i=k(p(o));if(i){const l=i;if(E.get(l)||E.set(l,l.style.overflow),l.style.overflow!=="hidden"&&(r=l.style.overflow),l.style.overflow==="hidden")return n.value=!0;if(n.value)return l.style.overflow="hidden"}},{immediate:!0});const a=()=>{const o=k(p(e));!o||n.value||(D&&(s=J(o,"touchmove",i=>{ee(i)},{passive:!1})),o.style.overflow="hidden",n.value=!0)},c=()=>{const o=k(p(e));!o||!n.value||(D&&(s==null||s()),o.style.overflow=r,E.delete(o),n.value=!1)};return I(c),O({get(){return n.value},set(o){o?a():c()}})}function ne(){let e=!1;const t=v(!1);return(n,s)=>{if(t.value=s.value,e)return;e=!0;const r=te(n,s.value);w(t,a=>r.value=a)}}ne();const oe={class:"wrapper"},se={class:"movies-grid"},re={__name:"HomeView",setup(e){const t=new G,n=v([]),s=v(1),r=v(null),a=v(!1);C(async()=>{try{const o=await t.fetchPopularMovies();n.value=o.results,r.value=o.total_pages}catch(o){console.log(o)}});async function c(){if(!a.value){if(s.value<r.value)s.value+=1;else return;a.value=!0;try{const o=await t.fetchPopularMovies({page:s.value});n.value.push(...o.results),r.value=o.total_pages}catch(o){console.log(o)}finally{a.value=!1}}}return(o,i)=>(M(),W("div",oe,[i[0]||(i[0]=_("h1",{class:"title"},"Popular movies",-1)),_("div",se,[(M(!0),W(j,null,R(n.value,l=>(M(),z(Y,{key:l.id,movie:l},null,8,["movie"]))),128)),$(_("div",null,null,512),[[q(Z),c]])])]))}},ie=X(re,[["__scopeId","data-v-2be5dd74"]]);export{ie as default};