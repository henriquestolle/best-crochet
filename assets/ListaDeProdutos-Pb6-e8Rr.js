import{j as e,L as u,r as a,a as w}from"./index-Miz6ubiq.js";import{F as N}from"./Footer-D2gQoSa7.js";const C="/best-crochet/assets/banner_best_crochet.png_1-Cmpz9y-O.jpg",F="/best-crochet/assets/banner_best_crochet.png_2-CG5LfiJm.jpg",L="/best-crochet/assets/banner_best_crochet.png_3-BKi2YW_P.jpg",P="/best-crochet/assets/banner_best_crochet.png_4-BBDQMLp2.jpg",E=t=>e.jsxs("div",{className:"item",children:[e.jsx(u,{to:`/product/${t.id}`,children:e.jsx("img",{className:"img-item-display",src:t.img,alt:t.name})}),e.jsx("p",{children:t.name}),e.jsxs("div",{className:"info-itens",children:[e.jsx("p",{id:"preco-embaixo",children:e.jsxs("span",{className:"preco-novo",children:["R$",t.new_price.toFixed(2)]})}),e.jsx(u,{to:`/product/${t.id}`,children:e.jsx("button",{id:"btn-comprar",type:"button",children:"Comprar"})})]})]}),I=()=>{const[t,O]=a.useState(""),[o,p]=a.useState("sem filtro");a.useRef(null);const i=[C,F,L,P],[c,x]=a.useState(0);a.useEffect(()=>{const s=setInterval(()=>{x(n=>(n+1)%i.length)},2e3);return()=>clearInterval(s)},[i.length]);const j=()=>{const s=window.pageYOffset,n=document.documentElement.scrollHeight-window.innerHeight,d=1e3,g=performance.now(),m=_=>{const h=_-g,f=Math.min(h/d,1),v=(r=>r<.5?2*r*r:-1+(4-2*r)*r)(f);window.scrollTo(0,s+(n-s)*v),h<d&&requestAnimationFrame(m)};requestAnimationFrame(m)},b=s=>{p(s.target.value)},l=w.filter(s=>s.name.toLowerCase().includes(t.toLowerCase())).sort((s,n)=>o==="alfabetica"?s.name.localeCompare(n.name):o==="preco"?s.new_price-n.new_price:0);return e.jsxs("div",{className:"lista-produtos-main",children:[e.jsxs("div",{className:"banner-container",onClick:j,children:[e.jsx("img",{className:"banner-img",src:i[c],alt:"banner"}),e.jsx("div",{className:"banner-indicators",children:i.map((s,n)=>e.jsx("span",{className:`indicator ${n===c?"active":""}`},n))})]}),e.jsx("nav",{className:"breadcrumb-home",children:e.jsx("span",{children:"Home"})}),e.jsx("div",{id:"text-crochet",children:e.jsx("p",{children:"crochet"})}),e.jsx("div",{id:"global-main-header",children:e.jsx("div",{id:"global-search",children:e.jsx("div",{className:"filter-item",children:e.jsxs("select",{value:o,onChange:b,children:[e.jsx("option",{value:"sem filtro",children:"Sem Filtro"}),e.jsx("option",{value:"alfabetica",children:"Order Alfabética"}),e.jsx("option",{value:"preco",children:"Ordenar Por Preço"})]})})})}),e.jsxs("div",{className:"conteudos-geral-lista-produtos",children:[e.jsx("p",{className:"conteudos-titulo",children:"Todos Produtos"}),e.jsxs("p",{id:"texto-exibindo",children:["Exibindo ",l.length," resultados"]})]}),e.jsx("div",{id:"lista-de-produtos",className:"lista-de-produtos",children:l.map((s,n)=>e.jsx(E,{id:s.id,name:s.name,img:s.img,new_price:s.new_price,old_price:s.old_price,qnt:s.qnt},n))}),e.jsx(N,{})]})};export{I as L};
