import{j as e,L as u,r as i,a as F}from"./index-C7r7dYh2.js";import{F as P}from"./Footer-mqJMpC1A.js";const _="/best-crochet/assets/banner_best_crochet-BkFdAzSM.png",S=a=>e.jsxs("div",{className:"item",children:[e.jsx(u,{to:`/product/${a.id}`,children:e.jsx("img",{className:"img-item-display",src:a.img,alt:a.name})}),e.jsx("p",{children:a.name}),e.jsxs("div",{className:"info-itens",children:[e.jsx("p",{id:"preco-embaixo",children:e.jsxs("span",{className:"preco-novo",children:["R$",a.new_price.toFixed(2)]})}),e.jsx(u,{to:`/product/${a.id}`,children:e.jsx("button",{id:"btn-comprar",type:"button",children:"Comprar"})})]})]}),O=()=>{const[a,h]=i.useState(8),[o,x]=i.useState(""),[n,p]=i.useState("alfabetica"),j=()=>{h(s=>s+4)},g=()=>{const s=window.pageYOffset,t=document.documentElement.scrollHeight-window.innerHeight,l=1e3,b=performance.now(),d=w=>{const m=w-b,C=Math.min(m/l,1),N=(r=>r<.5?2*r*r:-1+(4-2*r)*r)(C);window.scrollTo(0,s+(t-s)*N),m<l&&requestAnimationFrame(d)};requestAnimationFrame(d)},v=s=>{const t=s.target.value.replace(/<[^>]*>?/gm,"");x(t)},f=s=>{p(s.target.value)},c=F.filter(s=>s.name.toLowerCase().includes(o.toLowerCase())).sort((s,t)=>{if(n==="alfabetica")return s.name.localeCompare(t.name);if(n==="preco")return s.new_price-t.new_price});return e.jsxs("div",{className:"lista-produtos-main",children:[e.jsx("div",{className:"banner",onClick:g,children:e.jsx("img",{className:"banner-img",src:_,alt:"banner"})}),e.jsx("div",{id:"font-search",children:e.jsx("p",{children:"Filtre os resultados"})}),e.jsxs("div",{id:"global-search",children:[e.jsx("div",{className:"filter-item",children:e.jsxs("select",{value:n,onChange:f,children:[e.jsx("option",{value:"sem filtro",selected:!0,children:"Sem Filtro"}),e.jsx("option",{value:"alfabetica",children:"Ordem Alfabética"}),e.jsx("option",{value:"preco",children:"Preço"})]})}),e.jsx("div",{className:"search-item",children:e.jsx("input",{placeholder:"Pesquisar Cor do Produto",type:"search",name:"search",id:"search",value:o,onChange:v})})]}),e.jsxs("div",{className:"conteudos-geral-lista-produtos",children:[e.jsx("p",{className:"conteudos-titulo",children:"Todos Produtos"}),e.jsx("div",{id:"hr-estilizado"})]}),e.jsx("div",{id:"lista-de-produtos",className:"lista-de-produtos",children:c.slice(0,a).map((s,t)=>e.jsx(S,{id:s.id,name:s.name,img:s.img,new_price:s.new_price,old_price:s.old_price,qnt:s.qnt},t))}),a<c.length?e.jsx("div",{className:"btn-carregar-item",children:e.jsx("button",{onClick:j,children:"Ver Mais Produtos"})}):e.jsx(P,{})]})};export{O as L};
