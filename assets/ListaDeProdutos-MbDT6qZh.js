import{j as s,L as c,r as d,a}from"./index-CFlNDyWm.js";const l=e=>s.jsxs("div",{className:"item",children:[s.jsx(c,{to:`/product/${e.id}`,children:s.jsx("img",{className:"img-item-display",src:e.img,alt:e.name})}),s.jsx("h3",{children:e.name}),s.jsxs("div",{className:"info-itens",children:[s.jsxs("p",{children:["Restantes: ",s.jsx("strong",{children:e.qnt})]}),s.jsx("p",{children:s.jsxs("span",{className:"preco-velho",children:["R$ ",e.old_price.toFixed(2)]})}),s.jsx("p",{children:s.jsxs("span",{className:"preco-novo",children:["R$",e.new_price.toFixed(2)]})})]})]}),m=()=>{const[e,n]=d.useState(8),r=()=>{n(i=>i+4)};return s.jsxs("div",{className:"lista-produtos-main",children:[s.jsx("div",{className:"conteudo",children:s.jsx("p",{className:"conteudo-titulo",children:"Todos Produtos"})}),s.jsx("div",{className:"lista-de-produtos",children:a.slice(0,e).map((i,t)=>s.jsx(l,{id:i.id,name:i.name,img:i.img,new_price:i.new_price,old_price:i.old_price,qnt:i.qnt},t))}),e<a.length&&s.jsx("div",{className:"btn-carregar-item",children:s.jsx("button",{onClick:r,children:"Ver Mais Produtos"})})]})};export{m as L};
