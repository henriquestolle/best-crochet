import{j as s,L as c,r as d,a as i}from"./index-DuAdxwbG.js";const o=e=>s.jsxs("div",{className:"item",children:[s.jsx("img",{src:e.img,alt:e.name}),s.jsx("h3",{children:e.name}),s.jsxs("div",{className:"info-itens",children:[s.jsxs("p",{children:["Quantidade: ",s.jsx("strong",{children:e.qnt})]}),s.jsxs("p",{children:["De:",s.jsxs("span",{className:"preco-velho",children:["R$: ",e.old_price.toFixed(2)]})]}),s.jsxs("p",{children:["Por:",s.jsxs("span",{className:"preco-novo",children:["R$:",e.new_price.toFixed(2)]})]})]}),s.jsx(c,{to:`/product/${e.id}`,children:s.jsx("button",{className:"btn-item-buy",type:"button",children:"Comprar"})})]}),m=()=>{const[e,n]=d.useState(8),t=()=>{n(a=>a+4)};return s.jsxs("div",{className:"lista-produtos-main",children:[s.jsx("div",{className:"conteudo",children:s.jsx("p",{className:"conteudo-titulo",children:"Produtos"})}),s.jsx("div",{className:"lista-de-produtos",children:i.slice(0,e).map((a,r)=>s.jsx(o,{id:a.id,name:a.name,img:a.img,new_price:a.new_price,old_price:a.old_price,qnt:a.qnt},r))}),e<i.length&&s.jsx("div",{className:"btn-carregar-item",children:s.jsx("button",{onClick:t,children:"Ver Mais Produtos"})})]})};export{m as L};
